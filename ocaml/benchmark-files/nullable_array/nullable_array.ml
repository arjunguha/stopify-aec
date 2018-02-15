module type Nullable_array_interface = sig
type 'a t

val length : 'a t -> int

val make : int -> 'a t

val set : 'a t -> int -> 'a -> unit

val get : 'a t -> int -> 'a option

val get_k : 'a t -> int -> (unit -> 'b) -> ('a -> 'b) -> 'b

val iteri_sparse : f:(int -> 'a -> unit) -> 'a t -> unit
end

module Nullable_array_marker = struct
type elt =
  | Constant
  | Allocated of int

type 'a t = elt array

exception Null

let null : elt = Obj.magic Null

let empty_array : 'a t = Array.make 1 null

let make (n:int) : 'a t =
  (* The array contains n+1 elements: the first one is used to store the null as a reference *)
  Array.make (n+1) null

let length a = Array.length a - 1

let set (a:'a t) (n:int) (v:'a) : unit =
  Array.set a (n+1) (Obj.magic v : elt)
    [@@inline]

let clear (a:'a t) (n:int) : unit =
  Array.set a (n+1) (Array.unsafe_get a 0)

let unsafe_set (a:'a t) (n:int) (v:'a) : unit =
  Array.unsafe_set a (n+1) (Obj.magic v : elt)
    [@@inline]

let get (a:'a t) (n:int) : 'a option =
  let elt = Array.get a (n+1) in
  let null = Array.unsafe_get a 0 in
  if elt == null then
    None
  else
    Some (Obj.magic elt:'a)
      [@@inline]

let unsafe_get (a:'a t) (n:int) : 'a option =
  let elt = Array.unsafe_get a (n+1) in
  let null = Array.unsafe_get a 0 in
  if elt == null then
    None
  else
    Some (Obj.magic elt:'a)
      [@@inline]

let unsafe_get_some (a:'a t) (n:int) : 'a =
  let elt = Array.unsafe_get a (n+1) in
  (Obj.magic elt:'a)
    [@@inline]

let get_k (a:'a t) (n:int) (k_none:(unit -> 'b)) (k_some:('a -> 'b)) : 'b =
  let elt = Array.get a (n+1) in
  let null = Array.unsafe_get a 0 in
  if elt == null then
    k_none ()
  else
    k_some (Obj.magic elt:'a)
      [@@inline]

let unsafe_get_k (a:'a t) (n:int) (k_none:(unit -> 'b)) (k_some:('a -> 'b)) : 'b =
  let elt = Array.unsafe_get a (n+1) in
  let null = Array.unsafe_get a 0 in
  if elt == null then
    k_none ()
  else
    k_some (Obj.magic elt:'a)
      [@@inline]

let iteri_sparse ~(f:int -> 'a -> unit) (a:'a t) : unit =
  let null = Array.unsafe_get a 0 in
  for i = 1 to Array.length a - 1 do
    let elt = Array.unsafe_get a i in
    if elt != null then f (i-1) (Obj.magic elt:'a)
  done

let realloc (src:'a t) (n:int) =
  let null = Array.unsafe_get src 0 in
  let result = Array.make n null in
  let copy_lenght = min (Array.length src) (Array.length result) - 1 in
  Array.blit src 1 result 1 copy_lenght;
  result
end

module Option_array = struct
type 'a t = 'a option array

let length a = Array.length a

let make n = Array.make n None

let set (a:'a t) n (v:'a) = Array.set a n (Some v)

let get (a:'a t) n : 'a option = Array.get a n

let get_k (a:'a t) n none some =
  match Array.get a n with
  | None -> none ()
  | Some v -> some v

let iteri_sparse ~f a =
  Array.iteri (fun i v ->
      match v with
      | None -> ()
      | Some v -> f i v)
    a
end

module Nullable_array_closure = struct
(* This type tells the compiler that it is not a float, but can
   contain heap allocated values.

   Note that the correctness of this must be reasserted for each
   version of the compiler as new versions could specialise the array
   type further to its content. *)
type elt =
  | Constant
  | Allocated of int

type 'a t = elt array

(* A function is used to mark the empty fields. This is built as
   function returning an exception to ensure that no other function
   could be shared with this one. This ensures that the physical
   equality is meaningfull: No other value can be made physically
   equal to that one.

   This is a function instead of directly using the exception to
   ensure that marshalling behaves correctly: This won't work if we
   are marshalling between incompatible binaries, but sharing will
   be preserved otherwise.

   Not that this property also prevents this type from being correctly
   unmarshaled.

   There would be solutions by storing the null in the array as a
   reminder. *)
exception Null

let null : elt =
  Array.unsafe_get (Obj.magic (fun _ -> Null):elt array) 0

(* let null : elt = (Obj.magic (fun _ -> Null)) *)

let make (n:int) : 'a t =
  (* Null is not a floating point value, the array won't be allocated
     as a float array *)
  let a = Array.make n null in
  (* We mark the array with the closure tag such that the no naked
     pointer variant correctly recognize it as an out of heap pointer *)
  Obj.set_tag (Obj.repr a) Obj.closure_tag;
  a

let length a = Array.length a

let set (a:'a t) (n:int) (v:'a) : unit =
  Array.set a n (Obj.magic v : elt)
    [@@inline]

let get (a:'a t) (n:int) : 'a option =
  let elt = Array.get a n in
  if elt == null then
    None
  else
    Some (Obj.magic elt:'a)
      [@@inline]

let get_k (a:'a t) (n:int) (k_none:(unit -> 'b)) (k_some:('a -> 'b)) : 'b =
  let elt = Array.get a n in
  if elt == null then
    k_none ()
  else
    k_some (Obj.magic elt:'a)
      [@@inline]

let iteri_sparse ~(f:int -> 'a -> unit) (a:'a t) : unit =
  for i = 0 to Array.length a - 1 do
    let elt = Array.unsafe_get a i in
    if elt != null then f i (Obj.magic elt:'a)
  done
end

open Micro_bench_types

module type M = Nullable_array_interface

type 'a prepared_array =
  { option_array : 'a Option_array.t;
    nullable_array_closure : 'a Nullable_array_closure.t;
    nullable_array_marker : 'a Nullable_array_marker.t; }

module type Get = sig
  type 'a t
  val name : string
  val get : 'a prepared_array -> 'a t
end

let random_prepare n = Random.State.make [|n|]

let random_permutation state a =
  let len = Array.length a in
  for i = 0 to Array.length a - 1 do
    let n = Random.State.int state (len - i) + i in
    let v1 = a.(i) in
    let v2 = a.(n) in
    a.(i) <- v2;
    a.(n) <- v1;
  done;
  a

let random_indices state n =
  let a = Array.init n (fun i -> i) in
  random_permutation state a

let random_selection state size n =
  let indices = random_indices state size in
  Array.init n (fun i -> indices.(i))

let prepare_random_option_array density size =
  let state = random_prepare size in
  let n = int_of_float (float size *. density) in
  let selection = random_selection state size n in
  let a = Option_array.make size in
  Array.iter (fun i -> Option_array.set a i i) selection;
  a

let prepare_random_path density size =
  let state = random_prepare size in
  let size = max 3 size in
  (* Shifted by 1: the 0-th field is the entry point *)
  let n = int_of_float (float size *. density) - 1 in
  let n = min (size - 2) (max 1 n) in
  let selection = random_selection state (size - 2) n in
  let a = Option_array.make size in
  Option_array.set a 0 (selection.(0) + 1);
  for i = 0 to n - 2 do
    Option_array.set a (selection.(i) + 1) (selection.(i + 1) + 1);
  done;
  a

module Bench(M:M)(Get:Get with type 'a t := 'a M.t) = struct

  let name = Get.name

  let copy_option_array oa =
    let a = M.make (Option_array.length oa) in
    Option_array.iteri_sparse oa ~f:(fun i v ->
      M.set a i v);
    a

  let sum a =
    let r = ref 0 in
    M.iteri_sparse a ~f:(fun _ i -> r := i + !r);
    !r

  let sum_prepared_array a =
    sum (Get.get a)

  let walk a =
    let rec loop i count =
      match M.get a i with
      | None -> count
      | Some next ->
        loop next (count + 1)
    in
    loop 0 0

  let walk_prepared_array a =
    walk (Get.get a)

  let walk_k a =
    let rec loop i count =
      M.get_k a i
        (fun () -> count)
        (fun next -> loop next (count + 1))
    in
    loop 0 0

  let walk_k_prepared_array a =
    walk_k (Get.get a)

  let sum_bench = name, sum_prepared_array
  let walk_bench = name, walk_prepared_array
  let walk_k_bench = name ^ "_k" , walk_k_prepared_array

end

module OA =
  Bench
    (Option_array)
    (struct
      let name = "option_array"
      let get { option_array } = option_array
    end)
module NAC =
  Bench
    (Nullable_array_closure)
    (struct
      let name = "nullable_array_closure"
      let get { nullable_array_closure } = nullable_array_closure
    end)
module NAM =
  Bench
    (Nullable_array_marker)
    (struct
      let name = "nullable_array_marker"
      let get { nullable_array_marker } = nullable_array_marker
    end)

let copy_prepared_option_array base_array =
  { option_array = OA.copy_option_array base_array;
    nullable_array_closure = NAC.copy_option_array base_array;
    nullable_array_marker = NAM.copy_option_array base_array; }

let check_sum_option_array density size res =
  let oa = prepare_random_option_array density size in
  let sum = OA.sum oa in
  if sum = res then
    Ok
  else
    Error (Printf.sprintf "Incorrect sum: %i, expected %i" res sum)

let prepare_random_array density size =
  copy_prepared_option_array
    (prepare_random_option_array density size)

let sum density =
  Printf.sprintf "sum %0.2f" density,
  Int_group (
    [
      OA.sum_bench;
      NAC.sum_bench;
      NAM.sum_bench;
    ],
       prepare_random_array density,
       check_sum_option_array density,
       [Range (100, 100000), Short])

let check_walk density size res =
  let oa = prepare_random_path density size in
  let length = OA.walk oa in
  if length = res then
    Ok
  else
    Error (Printf.sprintf "Incorrect walk length: %i, expected %i" res length)

let prepare_walk density size =
  copy_prepared_option_array
    (prepare_random_path density size)

let walk density =
  Printf.sprintf "walk %0.2f" density,
  Int_group (
    [
      OA.walk_bench;
      OA.walk_k_bench;
      NAC.walk_bench;
      NAC.walk_k_bench;
      NAM.walk_bench;
      NAM.walk_k_bench;
    ],
       prepare_walk density,
       check_walk density,
       [Range (100, 3000), Short])

let functions =
  let densities = [1.; 0.3; 0.01] in
  List.map sum densities @
  List.map walk densities


let () =
  add functions;
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 1 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=10})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)
