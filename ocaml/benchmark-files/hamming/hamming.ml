(***********************************************************************)
(*                                                                     *)
(*                                OCaml                                *)
(*                                                                     *)
(*          Damien Doligez, projet Moscova, INRIA Rocquencourt         *)
(*                                                                     *)
(*  Copyright 2002 Institut National de Recherche en Informatique et   *)
(*  en Automatique.  All rights reserved.  This file is distributed    *)
(*  under the terms of the Q Public License version 1.0.               *)
(*                                                                     *)
(***********************************************************************)

(* We cannot use bignums because we don't do custom runtimes, but
   int64 is a bit short, so we roll our own 37-digit numbers...
*)

module Hamming_result = struct
  let result =
"15441834907098675000000
15449523925781250000000
15461882265600000000000
15479341056000000000000
15496819560000000000000
15514317799859619140625
15544259980364064227328
15552000000000000000000
15561811787592868865280
15564440312192434176000
15569560546875000000000
15582014906050805760000
15599609344268697600000
15617223649253376000000
15625000000000000000000
15634857843437408437500
15642642974853515625000
15655155793920000000000
15672832819200000000000
15690529804500000000000
15728640000000000000000
15746400000000000000000
15756334434937779726096
15758995816094839603200
15764180053710937500000
15776790092376440832000
15794604461072056320000
15812438944869043200000
15820312500000000000000
15832967439974400000000
15850845241344000000000
15868743229440000000000
15886661427056250000000
15925248000000000000000
15937986879685052596224
15943230000000000000000
15955983263796025098240
15961232304382324218750
15973999968531146342400
15992037016835457024000
16000000000000000000000
16010094431679906240000
16018066406250000000000
16030879532974080000000
16048980806860800000000
16067102519808000000000
16085244694894453125000
16093254089355468750000
16106127360000000000000
16124313600000000000000
16142520375000000000000
16155433054593475411968
16173674968137785671680
16191937479545900236800
16200000000000000000000
16210220612075905068000
16212958658533785600000
16218292236328125000000
16231265527136256000000
16249593066946560000000
16267941301305600000000
16294419765472412109375
16307453952000000000000
16325867520000000000000
16344301879687500000000
16375845905239507992576
16384000000000000000000
16394336698040223989760
16402500000000000000000
16412848369726853881350
16415620641765457920000
16421020889282226562500
16434156346225459200000
16452712980283392000000
16471290567571920000000
16479492187500000000000
16492674416640000000000
16511297126400000000000
16529940864000000000000
16548605653183593750000
16588800000000000000000
16599265906765726789632
16602069666338596454400
16607531250000000000000
16620815899787526144000
16639583300553277440000
16658371892536934400000
16677181699666569000000
16685485839843750000000
16698832846848000000000
16717688340480000000000
16736565124800000000000
16755463223848388671875
16763806343078613281250
16777216000000000000000
16796160000000000000000
16809595537167828910080
16815125390625000000000
16828576098534870220800
16847578091810193408000

"
end

let n0 = Int64.of_int 0;;
let n1 = Int64.of_int 1;;
let n2 = Int64.of_int 2;;
let n3 = Int64.of_int 3;;
let n5 = Int64.of_int 5;;

let ( % ) = Int64.rem;;
let ( * ) = Int64.mul;;
let ( / ) = Int64.div;;
let ( + ) = Int64.add;;
let digit = Int64.of_string "1000000000000000000";;

let mul n (pl, ph) = ((n * pl) % digit, n * ph + (n * pl) / digit);;
let cmp (nl, nh) (pl, ph) =
  if nh < ph then -1
  else if nh > ph then 1
  else if nl < pl then -1
  else if nl > pl then 1
  else 0
;;

let x2 = fun p -> mul n2 p;;
let x3 = fun p -> mul n3 p;;
let x5 = fun p -> mul n5 p;;

let nn1 = (n1, n0);;

let pr ppf (nl, nh) =
  if compare nh n0 = 0
  then Format.fprintf ppf "%Ld@." nl
  else Format.fprintf ppf "%Ld%018Ld@." nh nl
;;

(*
  (* bignum version *)
open Num;;
let nn1 = num_of_int 1;;
let x2 = fun p -> (num_of_int 2) */ p;;
let x3 = fun p -> (num_of_int 3) */ p;;
let x5 = fun p -> (num_of_int 5) */ p;;
let cmp n p = sign_num (n -/ p);;
let pr n = Printf.printf "%s\n" (string_of_num n);;
*)


(* This is where the interesting stuff begins. *)

open Lazy;;

type 'a lcons = Cons of 'a * 'a lcons Lazy.t;;
type 'a llist = 'a lcons Lazy.t;;

let rec map f l =
  lazy (
    match force l with
    | Cons (x, ll) -> Cons (f x, map f ll)
  )
;;

let rec merge cmp l1 l2 =
  lazy (
    match force l1, force l2 with
    | Cons (x1, ll1), Cons (x2, ll2)
       -> let c = cmp x1 x2 in
          if c = 0
          then Cons (x1, merge cmp ll1 ll2)
          else if c < 0
          then Cons (x1, merge cmp ll1 l2)
          else Cons (x2, merge cmp l1 ll2)
  )
;;

let rec skip l n =
  if n = 0 then l
  else
    let Cons (_, ll) = force l in
    skip ll (n-1)

let rec iter f l n =
  if n = 0 then ()
  else
    let Cons (x, ll) = force l in
    f x;
    iter f ll (n-1)

let make_hamming () =
  let rec hamming = lazy (Cons (nn1, merge cmp ham2 (merge cmp ham3 ham5)))
  and ham2 = lazy (force (map x2 hamming))
  and ham3 = lazy (force (map x3 hamming))
  and ham5 = lazy (force (map x5 hamming))
  in
  hamming


open Micro_bench_types

let run i =
  let h = make_hamming () in
  ignore (skip h i);
  skip h i

let check_i _ _ = Ok (* we do not check for arbitrary parameter *)

let check_string l =
  let b = Buffer.create 1000 in
  let ppf = Format.formatter_of_buffer b in
  iter (pr ppf) l 100;
  Format.fprintf ppf "@.";
  Buffer.contents b

let check l =
  let s = check_string l in
  if s = Hamming_result.result
  then Ok
  else Error s

let prepare i = i

let range =
  [ Range (10, 10_000), Short ]

let n = 20_000

let functions =
  [ "hamming var", Int (run, prepare, check_i, range);
    "hamming_test", Unit ((fun () -> run n), check, Short) ]

let () = add functions

let save_result () =
  let s = check_string (run n) in
  let oc = open_out "result.ml" in
  output_string oc "let result =\n\"";
  output_string oc s;
  output_string oc "\"";
  close_out oc

let () =
  if Array.length Sys.argv > 1 && Sys.argv.(1) = "make-result"
  then save_result ();
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 1 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=200})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)
