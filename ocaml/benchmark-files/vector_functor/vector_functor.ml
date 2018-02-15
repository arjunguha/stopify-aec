module Vect_abstr = struct
module type Vector_base = sig
  type t
  type elt
  type index

  val fold_index : (index -> elt -> 'a) -> ('a -> index -> elt -> 'a) -> t -> 'a
  val fold_index_2 : (index -> elt -> elt -> 'a) -> ('a -> index -> elt -> elt -> 'a) -> t -> t -> 'a
  val map : (index -> elt -> elt) -> t -> t

end

module Vect2 = struct
  type t = float * float
  type elt = float
  type index = Fst | Snd

  let fold_index init f (fst, snd) =
    f (init Fst fst) Snd snd
  let fold_index_2 init f (fst1, snd1) (fst2, snd2) =
    f (init Fst fst1 fst2) Snd snd1 snd2
  let map f (fst, snd) =
    (f Fst fst, f Snd snd)
end

module Vect3 = struct
  type t = float * float * float
  type elt = float
  type index = Fst | Snd | Trd

  let fold_index init f (fst, snd, trd) =
    f (f (init Fst fst) Snd snd) Trd trd
  let fold_index_2 init f (fst1, snd1, trd1) (fst2, snd2, trd2) =
    f (f (init Fst fst1 fst2) Snd snd1 snd2) Trd trd1 trd2
  let map f (fst, snd, trd) =
    (f Fst fst, f Snd snd, f Trd trd)

end

module Vect2_record = struct
  type t = { x : float; y : float }
  type elt = float
  type index = X | Y

  let fold_index init f { x; y } =
    f (init X x) Y y
  let fold_index_2 init f v1 v2 =
    f (init X v1.x v2.x) Y v1.y v2.y
  let map f { x; y } =
    { x = f X x; y = f Y y}
end

module Vect3_record = struct
  type t = { x : float; y : float; z : float }
  type elt = float
  type index = X | Y | Z

  let fold_index init f { x; y; z } =
    f (f (init X x) Y y) Z z
  let fold_index_2 init f v1 v2 =
    f (f (init X v1.x v2.x) Y v1.y v2.y) Z v1.z v2.z
  let map f { x; y; z } =
    { x = f X x; y = f Y y; z = f Z z }
end

module Vect_array = struct
  type t = float array
  type elt = float
  type index = int

  let fold_index init f a =
    if Array.length a = 0 then invalid_arg "fold_index";
    let r = ref (init 0 (Array.unsafe_get a 0)) in
    for i = 1 to Array.length a - 1 do
      r := f !r i (Array.unsafe_get a i)
    done;
    !r

  let fold_index_2 init f v1 v2 =
    if Array.length v1 = 0 ||
       Array.length v2 = 0 ||
       Array.length v1 <> Array.length v2 then
      invalid_arg "fold_index";
    let r = ref (init 0 (Array.unsafe_get v1 0) (Array.unsafe_get v2 0)) in
    for i = 1 to Array.length v1 - 1 do
      r := f !r i (Array.unsafe_get v1 i) (Array.unsafe_get v2 i)
    done;
    !r

  let map = Array.mapi

end

module Vector_operations (V : Vector_base with type elt = float) = struct

  type elt = V.elt
  type t = V.t

  let norm v =
    let sum_sq =
      V.fold_index
        (fun _ elt -> elt *. elt)
        (fun acc _ elt -> acc +. elt *. elt)
        v
    in
    sqrt sum_sq

  let scale s v =
    V.map (fun _ x -> x *. s) v

  let dot v1 v2 =
    V.fold_index_2
      (fun _ f1 f2 -> f1 *. f2)
      (fun acc _ f1 f2 -> acc +. f1 *. f2) v1 v2

  let are_orthogonal v1 v2 =
    dot v1 v2 = 0. (* < epsilon ? *)

end
end

module Vect_instantiation = struct
open Vect_abstr

module IV2 = Vector_operations(Vect2)

module IV3 = Vector_operations(Vect3)

module IV2R = Vector_operations(Vect2_record)

module IV3R = Vector_operations(Vect3_record)

module IVA = Vector_operations(Vect_array)

module VR2 = struct
  type t = Vect2_record.t = { x : float; y : float }
  type elt = float

  let norm { x; y } = sqrt (x *. x +. y *. y)
  let scale s { x; y } = { x = x *. s; y = y *. s }
  let dot v1 v2 = v1.x *. v2.x +. v1.y *. v2.y
  let are_orthogonal v1 v2 = dot v1 v2 = 0.

end
end

open Vect_instantiation
open Micro_bench_types

let (=!=) a b = if a = b then Ok else Error ""

let () =
  add [
    "vec2 record dot product",
    Int_group (
      [ "functor", (fun x -> IV2R.dot x x);
        "direct", (fun x -> VR2.dot x x)],
      (fun i -> { VR2.x = float i; VR2.y = float (i + 1) }),
      (fun i res -> (float i) *. (float i) +. (float (i+1)) *. (float (i+1)) =!= res),
      [ Any, Short ]);
    "vec2 tuple dot product",
    Int (
      (fun x -> IV2.dot x x),
      (fun i -> (float i, float (i + 1))),
      (fun i res -> (float i) *. (float i) +. (float (i+1)) *. (float (i+1)) =!= res),
      [ Any, Short ]);
    "vec3 tuple dot product",
    Int (
      (fun x -> IV3.dot x x),
      (fun i -> (float i, float (i + 1), float (i + 2))),
      (fun i res ->
         (float i) *. (float i) +. (float (i+1)) *. (float (i+1))
         +. (float (i+2)) *. (float (i+2)) =!= res),
      [ Any, Short ]);
    "vec3 record dot product",
    Int (
      (fun x -> IV3R.dot x x),
      (fun i -> { x = float i; y = float (i + 1); z = float (i + 2) }),
      (fun i res ->
         (float i) *. (float i) +. (float (i+1)) *. (float (i+1))
         +. (float (i+2)) *. (float (i+2)) =!= res),
      [ Any, Short ]);
    "nothing",
    Int (
      (fun x -> ()),
      (fun i -> ()),
      (fun i res -> Ok),
      [ Any, Short ])
  ];
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 1 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=5000})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)

(* TODO add the other ones *)
