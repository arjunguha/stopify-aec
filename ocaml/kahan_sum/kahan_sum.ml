(*
  This benchmark test the capacity of the compiler to inline Array.fold_left
  and promote reference assignment to local mutable variables, or continuarion
  variables.

  This is not possible yet as of 4.03
*)


module Kahan_sum = struct
  module Kahan : sig

    (** A more summation that keeps track of low order bits. *)
    type t

  (** [empty] initialize a summation. *)
    val empty : t

  val zero : t

  (** [update summation value] *)
  val update : t -> float -> t

  (** [update summation value] *)
  val ( + ) : t -> float -> t

  (** [sum summation] returns the sum from summation. *)
  val sum : t -> float

  end = struct

    type t = { correction : float; sum : float }

    let empty = { correction = 0.; sum = 0. }

    let update t v =
      let x  = v -. t.correction in
      let ns = t.sum +. x in
      { correction = (ns -. t.sum) -. x
    ; sum = ns
    }

    let zero = empty

  let ( + ) = update

  let sum t = t.sum

  end

  let sum_with_array_fold a =
    Kahan.sum (Array.fold_left Kahan.update Kahan.empty a)

  let sum_baseline a =
    let c = ref 0. in
    let s = ref 0. in
    for i = 0 to Array.length a - 1 do
      let x = a.(i) -. !c in
      let ns = !s +. x in
      c := (ns -. !s) -. x;
    s := ns;
    done;
  !s

  end

open Micro_bench_types

let prepare n =
  let state = Random.State.make [|n|] in
  Array.init n (fun _ -> Random.State.float state 1e10)

let check n r =
  let data = prepare n in
  let expected = Kahan_sum.sum_baseline data in
  if expected = r then
    Ok
  else
    Error (Printf.sprintf
             "got %f, expected %f \
              (errors might be hidden by the printer rounding)"
             r expected)

let interval_range =
  [ Range (0, 100_000), Short;
    Range (100_000, 1_000_000), Long;
    Range (10_000_000, 100_000_000), Longer ]

let functions = [
  "kahan_sum",
  Int_group
    (["baseline", Kahan_sum.sum_baseline;
      "array_fold", Kahan_sum.sum_with_array_fold],
     prepare,
     check,
     interval_range)
]

let () =
  add functions;
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 1 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=5})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)
