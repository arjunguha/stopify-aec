module Date = struct
  (***************************************************************************)
  (*  Copyright (C) 2000-2013 LexiFi SAS. All rights reserved.               *)
  (*                                                                         *)
  (* This program is free software: you can redistribute it and/or modify    *)
  (* it under the terms of the GNU General Public License as published       *)
  (* by the Free Software Foundation, either version 3 of the License,       *)
  (* or (at your option) any later version.                                  *)
  (*                                                                         *)
  (* This program is distributed in the hope that it will be useful,         *)
  (* but WITHOUT ANY WARRANTY; without even the implied warranty of          *)
  (* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *)
  (* GNU General Public License for more details.                            *)
  (*                                                                         *)
  (* You should have received a copy of the GNU General Public License       *)
  (* along with this program.  If not, see <http://www.gnu.org/licenses/>.   *)
  (***************************************************************************)

  type date = int

  type gregorian = {
    year : int;
    month : int;
    day : int;
    hour : int;
    minute : int
  }

  let hours_in_day = 24
  let minutes_in_day = hours_in_day * 60
  let fminutes_in_day = float minutes_in_day
  let minutes_to_noon = (hours_in_day / 2) * 60

  (*
   Communications of the ACM by Henry F. Fliegel and Thomas C. Van Flandern,
   ``A Machine Algorithm for Processing Calendar Dates'',
   CACM, volume 11, number 10, October 1968, p. 657
   *)
  let date_of_gregorian {year = y; month = m; day = d; hour = hr; minute = mn} =
    (
      (match m with
   | 1 | 2 ->
       ( 1461 * ( y + 4800 - 1 ) ) / 4 +
         ( 367 * ( m + 10 ) ) / 12 -
         ( 3 * ( ( y + 4900 - 1 ) / 100 ) ) / 4
   | _ ->
       ( 1461 * ( y + 4800 ) ) / 4 +
         ( 367 * ( m - 2 ) ) / 12 -
         ( 3 * ( ( y + 4900 ) / 100 ) ) / 4)
      + d - 32075 - 2444238) * minutes_in_day
    + hr * 60 + mn

  let gregorian_of_date minutes_since_epoch =
    let jul = minutes_since_epoch / minutes_in_day in
    let l = jul + 68569 + 2444238 in
    let n = ( 4 * l ) / 146097 in
    let l = l - ( 146097 * n + 3 ) / 4 in
    let i = ( 4000 * ( l + 1 ) ) / 1461001 in
    let l = l - ( 1461 * i ) / 4 + 31 in
    let j = ( 80 * l ) / 2447 in
    let d = l - ( 2447 * j ) / 80 in
    let l = j / 11 in
    let m = j + 2 - ( 12 * l ) in
    let y = 100 * ( n - 49 ) + i + l in
    let daytime = minutes_since_epoch mod minutes_in_day in
    if daytime = minutes_to_noon
  then {year = y; month = m; day = d; hour = 12; minute = 0}
  else {year = y; month = m; day = d; hour = daytime / 60; minute = daytime mod 60}

  let check_date ~year ~month ~day =
    1 <= day &&
  1 <= month && month <= 12 &&
  1980 <= year && year <= 2299 &&
  begin
    day <= 28 ||
    match month with
    | 2 -> day = 29 && year mod 4 = 0 && (year = 2000 || (year mod 100 <> 0))
    (* we don't check y mod 400 because 2000 is ok and we don't support
             neither 1600 nor 2400. *)
    | 4 | 6 | 9 | 11 -> day <= 30
    | _ -> day <= 31
  end

  let of_string s : date =
    let sub ofs len =
      let rec sub acc ofs len =
        if len = 0
      then acc
      else sub (acc * 10 + int_of_char(String.unsafe_get s ofs) - 48) (ofs + 1) (len - 1)
    in
    sub (int_of_char(String.unsafe_get s ofs) - 48) (ofs + 1) (len - 1)
      in
  if String.length s < 10 then invalid_arg "date_of_string";
  let year = sub 0 4 in
  let month = sub 5 2 in
  let day = sub 8 2 in
  (* minimal coherence check of the date, just what is needed more than what the lexer is doing *)
  if check_date ~year ~month ~day then
    if String.length s < 16
    then date_of_gregorian{year; month; day; hour=12; minute=0}
    else date_of_gregorian{year; month; day; hour=sub 11 2; minute=sub 14 2}
    else invalid_arg "date_of_string"

  let days_between t1 t2 =
    float (t1 - t2) /.  fminutes_in_day

  let act_365 t1 t2 = (days_between t1 t2) /. 365.

  let leap y = (y mod 4 = 0) && ((y mod 100 <> 0) || (y mod 400 = 0))
  let end_of_month year month =
    match month with
  | 2 when leap year -> 29
  | 2 -> 28
  | 4 | 6 | 9 | 11 -> 30
  | _ -> 31
  let add_months date nbmonths =
    let {year = y; month = m; day = d; hour = _; minute = _;} as date = gregorian_of_date date in
    let m = m + nbmonths in
    let y, m = y + (m-1) / 12, ((m-1) mod 12) + 1 in
    let y, m = if m <= 0 then y - 1, m + 12 else y, m in
    date_of_gregorian {date with year = y; month = m; day = min d (end_of_month y m)}
  let add_years date nbyears = add_months date (nbyears * 12)

  let max_date = of_string "2299-12-31T23:59:59"
  let min_date = of_string "1980-01-01T12:00:00"
  end

module Math = struct
  (***************************************************************************)
  (*  Copyright (C) 2000-2013 LexiFi SAS. All rights reserved.               *)
  (*                                                                         *)
  (* This program is free software: you can redistribute it and/or modify    *)
  (* it under the terms of the GNU General Public License as published       *)
  (* by the Free Software Foundation, either version 3 of the License,       *)
  (* or (at your option) any later version.                                  *)
  (*                                                                         *)
  (* This program is distributed in the hope that it will be useful,         *)
  (* but WITHOUT ANY WARRANTY; without even the implied warranty of          *)
  (* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *)
  (* GNU General Public License for more details.                            *)
  (*                                                                         *)
  (* You should have received a copy of the GNU General Public License       *)
  (* along with this program.  If not, see <http://www.gnu.org/licenses/>.   *)
  (***************************************************************************)

  let p, a1, a2, a3, a4, a5 = 0.3275911, 0.254829592, (-0.284496736), 1.421413741, (-1.453152027), 1.061405429
  let erf x =
    let t = 1. /. (1. +. p *. x) in
    let t2 = t *. t in
    let t3 = t *. t2 in
    let t4 = t *.t3 in
    let t5 = t *. t4 in
    1. -. (a1 *. t +. a2 *. t2 +. a3 *. t3 +. a4 *. t4 +. a5 *. t5) *. exp (-.x *. x)

    (** Unit gaussian CDF.  *)
  let ugaussian_P x =
    let u = x /. sqrt 2. in
    let erf = if u < 0. then -.erf (-.u) else erf u in
    0.5 *. (1. +. erf)

    module Rootfinder = struct
      type error =
        | NotbracketedBelow
    | NotbracketedAbove

      let string_of_error = function
        | NotbracketedBelow -> "Interval borders have both negative values."
    | NotbracketedAbove -> "Interval borders have both positive values."

      exception Rootfinder of error

  let brent a b eval eps =
    if a > b then invalid_arg "Math.brent: arguments should verify xlo <= xhi.";
    let fa, fb = eval a, eval b in
    if 0. < fa *. fb  then raise(Rootfinder(if fa < 0. then NotbracketedBelow else NotbracketedAbove));
    assert (0. <= eps);
    let maxit = 10_000 in

    let a, fa, b, fb = if abs_float fa < abs_float fb then b, fb, a, fa else a, fa, b, fb in

    (* The root is between a and b, such that |f(b)| < |f(a)| *)
    let rec iter i ~a ~b ~c ~d ~fa ~fb ~fc mflag =
      if abs_float (b -. a) < eps || fb = 0. || maxit < i then b (* stop condition *)
      else
        let s =
          if fa <> fc && fb <> fc then
            a *. fb *. fc /. ((fa -. fb) *. (fa -. fc)) +. b *. fa *. fc /. ((fb -. fa) *. (fb -. fc)) +. c *. fa *. fb /. ((fc -. fa) *. (fc -. fb)) (* inverse quadratic interpolation *)
      else
        b -. fb *. (b -. a) /. (fb -. fa) (* secant rule *)
    in
        let s, mflag =
          if
            (4. *. s < 3. *. a +. b || b < s) ||
            (mflag && 2. *. abs_float (s -. b) >= abs_float (b -. c)) ||
            (not mflag && 2. *. abs_float (s -. b) >= abs_float (c -. d)) ||
            (mflag && abs_float (b -. c) < eps) ||
            (not mflag && abs_float (c -. d) < eps)
          then 0.5 *. (a +. b), true else s, false
        in
        let fs = eval s in
        (* d <- c; c <- b; *)
        if fa *. fs < 0. then (* in this case, b <- s *)
          if abs_float fa < abs_float fs then iter (i + 1) ~a: s ~b: a ~c: b ~d: c ~fa: fs ~fb: fa ~fc: fb mflag (* switch a, b *)
          else iter (i + 1) ~a ~b: s ~c: b ~d: c ~fa ~fb: fs ~fc: fb mflag
          else (* in this case, a <- s *)
            if abs_float fs < abs_float fb then iter (i + 1) ~a: b ~b: s ~c: b ~d: c ~fa: fb ~fb: fs ~fc: fb mflag (* switch a, b *)
          else iter (i + 1) ~a: s ~b ~c: b ~d: c ~fa: fs ~fb ~fc: fb mflag
    in
    iter 0 ~a ~b ~c: a ~d: nan ~fa ~fb ~fc: fa true

end

    module Gaussian_quadrature =
      struct
        let gauss_hermite_coefficients =
          [|
            0.; 0.6568095668820999044613; -0.6568095668820997934390; -1.3265570844949334805563;  1.3265570844949330364670;  2.0259480158257567872226;
       -2.0259480158257558990442; -2.7832900997816496513337;  2.7832900997816474308877;  3.6684708465595856630159; -3.6684708465595838866591
      |],
      [|
        0.6547592869145917315876; 0.6609604194409607336169; 0.6609604194409606225946; 0.6812118810666693002887; 0.6812118810666689672217; 0.7219536247283847574252;
       0.7219536247283852015144; 0.8025168688510405656800; 0.8025168688510396775015; 1.0065267861723647957461; 1.0065267861723774522886
          |]
    end
      end

module Optimization = struct
  (***************************************************************************)
  (*  Copyright (C) 2000-2013 LexiFi SAS. All rights reserved.               *)
  (*                                                                         *)
  (* This program is free software: you can redistribute it and/or modify    *)
  (* it under the terms of the GNU General Public License as published       *)
  (* by the Free Software Foundation, either version 3 of the License,       *)
  (* or (at your option) any later version.                                  *)
  (*                                                                         *)
  (* This program is distributed in the hope that it will be useful,         *)
  (* but WITHOUT ANY WARRANTY; without even the implied warranty of          *)
  (* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *)
  (* GNU General Public License for more details.                            *)
  (*                                                                         *)
  (* You should have received a copy of the GNU General Public License       *)
  (* along with this program.  If not, see <http://www.gnu.org/licenses/>.   *)
  (***************************************************************************)

  (* Optimizations algorithm. *)

  type termination =
    {
      maxit: int;
     maxf: int;
     target: float;
    }

  type status =
    | Maxit_reached
  | Maxf_reached
  | Target_reached

  type result =
    {
      x0: float array;
     f: float;
     nb_feval: int;
     status: status;
    }

  let ( ** ) (x, f) r = match x with | None -> r  | Some x -> f r x

  exception Infeasible

  let f_incr f ncalls x =
    let f =
      try
        f x
  with
    | Infeasible -> infinity
        in
  incr ncalls;
  f

  module Rand = Random.State

  module DE =
    struct
      type t =
        {
          np: int; (* Population size *)
         cr: float; (* Crossover probability, in [0; 1] *)
    }

      let default_parameters n = {np = min (10 * n) 40; cr = 0.9;}

      let parameters ?np ?cr n =
        (cr, fun r cr -> {r with cr}) **
        (np, fun r np -> {r with np}) **
        default_parameters n

      let optimize {np; cr;} ~f ~lower_bounds ~upper_bounds ~call_back ~termination =
        let n = Array.length lower_bounds in
        let rng = Rand.make [| 0 |] in
        let ncalls = ref 0 in
        let f = f_incr f ncalls in
        let {maxit; maxf; target;} = termination in
        let fx = Array.make np 0. in
        let fx0 = ref infinity in (* current min *)
        let v = Array.make_matrix np n 0. in (* potential mutations *)
        let best_idx = ref 0 in (* index of x0 in x *)

      (* initialize current population *)
      let x =
        Array.init np
          (fun i ->
            let x_i = Array.init n
                (fun j ->
                  let blo = lower_bounds.(j) in
                  let db = upper_bounds.(j) -. blo in
                  blo +. db *. Rand.float rng 1.)
                  in
            let f = f x_i in
            fx.(i) <- f;
            if f < !fx0 then
              begin
                best_idx := i;
                fx0 := f;
                call_back !ncalls f
end;
            x_i)
            in

      let x0 = Array.copy x.(!best_idx) in
      let mutation difw i x_i v_i =
        (* draw successively _different_ random integers in [0; np - 1] \ {i} *)
        let drawn = ref [i] in
        let range = ref (np - 1) in
        let rand () =
          let res = ref 0 in
          let rec adjust v = function
            | drawn :: others when drawn <= v -> drawn :: adjust (v + 1) others
            | drawn -> res := v; v :: drawn
          in
          drawn := adjust (Rand.int rng !range) !drawn;
          decr range;
          x.(!res)
          in
        let x_r1 = if Rand.float rng 1. <= 0.5 then x.(!best_idx) else rand () in
        let x_r2 = rand () in
        let x_r3 = rand () in
        let j0 = Rand.int rng n in
        for j = 0 to n - 1 do
          let v =
            let aux = x_r1.(j) +. difw *. (x_r2.(j) -. x_r3.(j)) in
            if (j = j0 || Rand.float rng 1. <= cr) && lower_bounds.(j) <= aux && aux <= upper_bounds.(j) then
              aux
        else
          x_i.(j)
            in
          v_i.(j) <- v
        done
          in
      let recombination () =
        Array.iteri
          (fun i v_i ->
            let f = f v_i in
            if f < fx.(i) then
              begin
                fx.(i) <- f;
                Array.blit v_i 0 x.(i) 0 n;
                if f < !fx0 then
                  begin
                    best_idx := i;
                    fx0 := f;
                    call_back !ncalls f;
                    Array.blit v_i 0 x0 0 n
              end;
                  end;
                )
          v
            in
      let rec iter nb_it =
        let differential_weight = 0.5 +. Rand.float rng 0.5 in (* As recommanded on http://www.icsi.berkeley.edu/~storn/code.html#prac *)
        Array.iteri (fun i x_i -> mutation differential_weight i x_i v.(i)) x;
        recombination ();
        let res status = {x0; f = !fx0; nb_feval = !ncalls; status} in
        if !fx0 <= target then res Target_reached
        else if maxf < !ncalls then res Maxf_reached
        else if nb_it = 0 then res Maxit_reached
        else iter (nb_it - 1)
        in
      iter maxit
              end

      type range =
        {
          lower_bound: float;
     upper_bound: float;
     initial_value: float;
        }

      type optimization_variable =
        | Fixed_value of float
  | Optimize_value of range

      type 'a calibration_result =
        {
          cr_parameters: 'a;
     cr_root_mean_squared_error: float;    (* Calibrated rms. *)
     cr_quoted_prices: float array;      (* i.e. quoted_prices. *)
     cr_calibrated_prices: float array; (* Closed-form prices obtained with calibrated parameters. *)
        }

      let least_squares
    ?absolute
    ?feedback
    ~max_global
    ~parameters_of_vector
    ~pricer
    ~variables
    quotes
    =
      begin
        match feedback with
    | Some feedback -> feedback "Calibrating"
    | _ -> ()
    end;
  let free_var_index_to_var_index, strict_subset, x, lower_bounds, upper_bounds =
    let _i, free_vars_to_vars, strict_subset, x, lo, up =
      Array.fold_left
        (fun (i, free_vars_to_vars, strict_subset, x, lo, up) -> function
          | Fixed_value _ -> i + 1, free_vars_to_vars, true, x, lo, up
          | Optimize_value{initial_value; lower_bound; upper_bound} -> i + 1, i :: free_vars_to_vars, strict_subset, initial_value :: x, lower_bound :: lo, upper_bound :: up
        )
        (0, [], false, [], [], [])
        variables
      in
    Array.of_list(List.rev free_vars_to_vars), strict_subset, x, Array.of_list(List.rev lo), Array.of_list(List.rev up)
    in
  let parameters_of_active_vars = match strict_subset with
  | false -> parameters_of_vector
  | true ->
      let all_vars = Array.map (function | Fixed_value x -> x | Optimize_value _ -> nan) variables in
      fun x ->
        Array.iteri (fun i x -> all_vars.(free_var_index_to_var_index.(i)) <- x) x;
        parameters_of_vector all_vars
      in
  let m = Array.length quotes in
  let prices = Array.make m 0. in
  let norm = match absolute with
  | None -> fun acc price quote -> let rel = (price -. quote) /. quote in acc +. rel *. rel
  | Some() -> fun acc price quote -> let dif = price -. quote in acc +. dif *. dif
  in
  let quotes_idx = Array.(init (length quotes) (fun i -> i)) in
  let distance prices = Array.fold_left (fun acc i -> norm acc prices.(i) quotes.(i)) 0. quotes_idx in (* objective is L_2 norm *)
  let rms_of_error =
    let div = 10000. /. float_of_int m in
    fun err -> sqrt (err *. div) in
  (* Initial guess either from global optimization or argument of the calibration routine. *)
  let x =
    if max_global > 0 then
      let call_back =
        match feedback with
        | None -> fun _ _ -> ()
        | Some f -> (fun evals dist -> Printf.kprintf f "Global Optimizer   Evals: %5i   RMS: %12.8g%%" evals (rms_of_error dist))
  in
      let f x =
        pricer (parameters_of_active_vars x) prices;
        distance prices
      in
      let {x0; _} = DE.optimize (DE.default_parameters (Array.length lower_bounds)) ~f ~lower_bounds ~upper_bounds ~call_back ~termination: {maxit = max_int; maxf = max_global; target = 0.;} in
      x0
        else
          Array.of_list(List.rev x)
      in
  let cr_quoted_prices = quotes in
  let cr_parameters = parameters_of_active_vars x in
  pricer cr_parameters prices;
  {
    cr_parameters;
   cr_root_mean_squared_error = rms_of_error (distance prices);
   cr_quoted_prices;
   cr_calibrated_prices = prices;
      }
      end

module G2pp_calibration = struct
  (***************************************************************************)
  (*  Copyright (C) 2000-2013 LexiFi SAS. All rights reserved.               *)
  (*                                                                         *)
  (* This program is free software: you can redistribute it and/or modify    *)
  (* it under the terms of the GNU General Public License as published       *)
  (* by the Free Software Foundation, either version 3 of the License,       *)
  (* or (at your option) any later version.                                  *)
  (*                                                                         *)
  (* This program is distributed in the hope that it will be useful,         *)
  (* but WITHOUT ANY WARRANTY; without even the implied warranty of          *)
  (* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *)
  (* GNU General Public License for more details.                            *)
  (*                                                                         *)
  (* You should have received a copy of the GNU General Public License       *)
  (* along with this program.  If not, see <http://www.gnu.org/licenses/>.   *)
  (***************************************************************************)

  (* A 2-factor interest-rate model. Reference book: Brigo and Mercurio "Interest Rate Models" 2005 *)

  open Date
  open Math

  let pi = 2. *. asin 1.

  type extended_swaption =
    {
      maturity: date;
     strike: float;
     swap_schedule: (date * date) list;
    }

  type swap_frequency =
    | Freq_3M
  | Freq_6M
  | Freq_1Y

  type swaption =
    {
      swaption_maturity_in_year: int;
     swap_frequency: swap_frequency;
     swap_term_in_year: int;
    }

  let extended_swaption_of_swaption ~today ~zc {swaption_maturity_in_year; swap_frequency; swap_term_in_year} =
    let maturity = add_years today swaption_maturity_in_year in
    let frq =
      match swap_frequency with
    | Freq_3M -> 3
    | Freq_6M -> 6
    | Freq_1Y -> 12
    in
  let nschedule = 12 * swap_term_in_year / frq in
  let swap_schedule = Array.init nschedule (fun i -> add_months maturity (i * frq), add_months maturity ((i + 1) * frq)) in
  let swap_schedule = Array.to_list swap_schedule in
  let lvl, t0, tn =
    List.fold_left
      (fun (acc_lvl, acc_t0, acc_tn) (tf, tp) ->
        acc_lvl +. zc tp *. (act_365 tp tf), min acc_t0 tf, max acc_tn tp
        ) (0., max_date, min_date) swap_schedule
  in
  let strike = (zc t0 -. zc tn) /. lvl in (* atm strike *)
  {maturity; swap_schedule; strike}


  type parameters =
    {
      g_a : float;
     g_b : float;
     g_sigma : float;
     g_nu : float;(* nu is eta in Brigo and Mercurio *)
     g_rho : float;
  }

    (* Places with ** comments should take account of sigma=0 case *)

  let b_fun z tau = (* ** *)
    (1. -. exp (-. z *. tau)) /. z

  exception Sdomain

  (* \var(\int_t^T [x(u)+y(u)]du) *)
  let bigv {g_a; g_b; g_rho; g_nu; g_sigma} tau  = (* 4.10 p 135 *)
    let t sigma x =
      let expxtau = exp (-. x *. tau) in (* ** *)
      let exp2xtau = expxtau *. expxtau in (* ** *)
      sigma *. sigma /. (x *. x) *.
      (tau +. 2. /. x *. expxtau -. 1. /. (2. *. x) *. exp2xtau -. 3. /. (2. *. x))
      in
  let t1 = t g_sigma g_a in
  let t2 = t g_nu g_b in
  let ba = b_fun g_a tau in
  let bb = b_fun g_b tau in
  let t3 = (* ** *)
    2. *. g_rho *. g_nu *. g_sigma /. (g_a *. g_b) *.
      (tau -. ba -. bb +. b_fun (g_a +. g_b) tau)
  in
  t1 +. t2 +. t3, ba, bb

  (* x drift term in tmat-forward measure *)
      let bigmx {g_a; g_b; g_rho; g_nu; g_sigma} today tmat s t =
        let ts = act_365 t s in
        let tmatt = act_365 tmat t in
        let tmat0  = act_365 tmat today in
        let tmats = act_365 tmat s in
        let t0 = act_365 t today in
        let s0 = act_365 s today in
        (g_sigma *. g_sigma /. (g_a *. g_a) +. g_sigma *. g_rho *. g_nu /. (g_a *. g_b)) *. (1. -. exp (-. g_a *. ts)) -.
    (g_sigma *. g_sigma /. (2. *. g_a *. g_a) *. (exp (-. g_a *. tmatt) -. exp (-. g_a *. (tmats +. ts)))) -.
    g_rho *. g_sigma *. g_nu /. (g_b *. (g_a +. g_b)) *. (exp (-. g_b *. tmatt) -. exp (-. g_b *. tmat0 -. g_a *. t0 +. (g_a +. g_b) *. s0))

    (* y drift term in tmat-forward measure *)
      let bigmy {g_a; g_b; g_rho; g_nu; g_sigma} today tmat s t =
        let ts = act_365 t s in
        let tmatt = act_365 tmat t in
        let tmat0  = act_365 tmat today in
        let tmats = act_365 tmat s in
        let t0 = act_365 t today in
        let s0 = act_365 s today in
        (g_nu *. g_nu /. (g_b *. g_b) +. g_sigma *. g_rho *. g_nu /. (g_a *. g_b)) *. (1. -. exp (-. g_b *. ts)) -.
    (g_nu *. g_nu /. (2. *. g_b *. g_b) *. (exp (-. g_b *. tmatt) -. exp (-. g_b *. (tmats +. ts)))) -.
    g_rho *. g_sigma *. g_nu /. (g_a *. (g_a +. g_b)) *. (exp (-. g_a *. tmatt) -. exp (-. g_a *. tmat0 -. g_b *. t0 +. (g_a +. g_b) *. s0))

      let x_quadrature, w_quadrature = Math.Gaussian_quadrature.gauss_hermite_coefficients
      let nquadrature = Array.length x_quadrature

      let pricer_of_swaption ~today ~zc swaption =
        let swaption = extended_swaption_of_swaption ~today ~zc swaption in
        let maturity = swaption.maturity in
        let strike = swaption.strike in
        let tmat0 = act_365 maturity today in
        let schedulei = Array.of_list swaption.swap_schedule in
        let lastindex = Array.length schedulei - 1 in
        let taui = Array.map (fun (start_date, end_date) -> act_365 end_date start_date) schedulei in
        let ci =
          Array.mapi
      (fun i tau  -> if i = lastindex then 1. +. tau *. strike else tau *. strike)
      taui
        in
  let n_schedi = Array.length schedulei in
  let bai = Array.make n_schedi 0. in
  let bbi = Array.make n_schedi 0. in
  let aici = Array.make n_schedi 0. in
  let log_aici = Array.make n_schedi 0. in
  let scales = Array.make n_schedi 0. in
  let t1_cst = Array.make n_schedi 0. in
  let scale = Array.make n_schedi 0. in
  fun params ->
    let {g_a; g_b; g_rho; g_nu; g_sigma} = params in
    let v0_mat, _, _ = bigv params (act_365 maturity today) in
    let zc_mat = zc maturity in
    let a_fun end_date = (* defined top p138 *)
      let v0_end, _, _ = bigv params (act_365 end_date today) in
      let vt_end, ba, bb = bigv params (act_365 end_date maturity) in
      zc end_date /. zc_mat *. exp (0.5 *. (vt_end -. v0_end +. v0_mat)), ba, bb
      in
    let sigmax = g_sigma *. sqrt (b_fun (2. *. g_a) tmat0) in
    let sigmay = g_nu    *. sqrt (b_fun (2. *. g_b) tmat0) in
    let rhoxy  = g_rho *. g_sigma *. g_nu /. (sigmax *. sigmay) *. (b_fun (g_a +. g_b) tmat0) in
    let rhoxyc = 1. -. rhoxy *. rhoxy in
    let rhoxycs = sqrt rhoxyc in
    let t2 = rhoxy  /. (sigmax *. rhoxycs) in
    let sigmay_rhoxycs = sigmay *. rhoxycs in
    let t4 = rhoxy *. sigmay /. sigmax in
    let mux = -. bigmx params today maturity today maturity in
    let muy = -. bigmy params today maturity today maturity in
    for i = 0 to n_schedi - 1 do
      let a, ba, bb = a_fun (snd schedulei.(i)) in
      let x = ci.(i) *. a in
      let log_ac = log x in
      aici.(i) <- x;
      log_aici.(i) <- log_ac;
      bai.(i) <- ba;
      bbi.(i) <- bb;

      let t3 = muy -. 0.5 *. rhoxyc *. sigmay *. sigmay *. bb in
      let cst = bb *. (mux *. t4 -. t3) in
      t1_cst.(i) <- x *. exp cst;
      scale.(i) <- -. (ba +. bb *. t4);
    done;

    let k = (-3.71901648545568) in (* ugaussian_Pinv 1e-4 *)
    let exact_yhat x =
      (* y_lo x <= yhat x <= y_up x*)
      let lo = ref neg_infinity in
      let up = ref 0. in
      for i = 0 to n_schedi - 1 do
        let baix = bai.(i) *. x in
        lo := max !lo ((log_aici.(i) -. baix) /. bbi.(i));
        up := !up +. aici.(i) *. exp (-. baix)
    done;
      let lo = !lo and s_up = !up in
      if n_schedi = 1 then lo
      else
        let open Math.Rootfinder in
        let up =
          let log_s = log s_up in
          let tmp = log_s /. bbi.(n_schedi - 1) in
          if tmp <= 0. then tmp
          else let tmp = log_s /. bbi.(0) in if 0. <= tmp then tmp
              (* This case happens when all ai * ci are too close to 0. or x to high => to_solve x y is close to -1 for all y,
                 thus the root is reached for y negative with high absolute value (tosolve x is a decreasing function of y) *)
          else neg_infinity
          in
        let yl = lo -. 1e-5 in
        let yu = up +. 1e-5 in
        (* y01 x = y0, y1 / phi(h_i(x, y0)) <= epsilon, 1 - phi(h_i(x, y1)) <= epsilon *)
        let y0 = sigmay *. (rhoxy *. (x -. mux) /. sigmax +. k *. rhoxycs) -. rhoxyc /. g_b +. muy in
        let y1 = sigmay *. (rhoxy *. (x -. mux) /. sigmax -. k *. rhoxycs) +. muy in
        if y1 <= yl then y1 +. 1. (* yhat is greater than y1 => 1 - phi(h_i(x, yhat)) < epsilon *)
        else if yu <= y0 then y0 -. 1. (* yhat is lower than y0 => phi(h_i(x, yhat)) < epsilon *)
        else try
          for i = 0 to n_schedi - 1 do
            scales.(i) <- aici.(i) *. exp (-. bai.(i) *. x);
      done;
          let to_solve yhat = (* eqn at bottom p148 *)
            let sum = ref (-1.) in
            for i = 0 to n_schedi - 1 do
              sum := !sum +. scales.(i) *. exp (-. bbi.(i) *. yhat);
          done;
            assert(!sum = !sum);
            !sum
            in
          brent (max yl y0) (min yu y1) to_solve 1e-4
        with
        | Rootfinder NotbracketedBelow -> y0 -. 1.
        | Rootfinder NotbracketedAbove -> y1 +. 1.
          in
    let yhat =
      let eps = 0.5 *. sigmax in
      let f = exact_yhat mux in
      let df = 0.5 *. (exact_yhat (mux +. eps) -. exact_yhat (mux -. eps)) /. eps in
      fun x -> f +. df *. (x -. mux)
      in

    let integrand x =
      let t1 = exp (-. 0.5 *. ((x -. mux) /. sigmax) ** 2.) in
      let yhat = yhat x in
      let h1 =
        let t1 = (yhat -. muy) /. sigmay_rhoxycs in
        t1 -. t2 *. (x -. mux)
        in
      let t2 = Math.ugaussian_P (-.h1) in
      let acc = ref 0. in
      for i = 0 to n_schedi - 1 do
        let h2 = h1 +. bbi.(i) *. sigmay_rhoxycs in
        acc := !acc +. t1_cst.(i) *. exp (scale.(i) *. x) *. Math.ugaussian_P (-.h2)
            done;
      t1 *. (t2 -. !acc)
        in
    let integral =
      let sqrt2sigmax = sqrt 2. *. sigmax in
      let sum = ref 0. in
      for i = 0 to nquadrature - 1 do
        sum := !sum +. w_quadrature.(i) *. integrand (sqrt2sigmax *. x_quadrature.(i) +. mux)
      done;
      !sum /. (sqrt pi)
      in
    zc_mat *. integral

    let black_price ~today ~zc swaption vol =
      let swaption = extended_swaption_of_swaption ~today ~zc swaption in
      let {swap_schedule; strike; maturity; _} = swaption in
      let sqrtt = act_365 maturity today in
      let lvl, t0, tn =
        List.fold_left
      (fun (acc_lvl, acc_t0, acc_tn) (tf, tp) ->
        acc_lvl +. zc tp *. (act_365 tp tf), min acc_t0 tf, max acc_tn tp
        ) (0., max_date, min_date) swap_schedule
      in
  let s0 = (zc t0 -. zc tn) /. lvl in
  let d1 = log (s0 /. strike) /. (vol *. sqrtt) +. 0.5 *. vol *. sqrtt in
  let d2 = d1 -. vol *. sqrtt in
  lvl *. (s0 *. Math.ugaussian_P d1 -. strike *. Math.ugaussian_P d2)

    let calibrate ?feedback ~max_global ~today ~swaption_quotes ~variables ~zc () =
      assert(Array.length variables = 5);
  let quotes = Array.map (fun (sw, q) -> black_price ~today ~zc sw q) swaption_quotes in
  let parameters_of_vector x =
    let g_a = x.(0) in
    let g_b = x.(1) in
    let g_sigma = x.(2) in
    let g_nu = x.(3) in
    let g_rho = x.(4) in
    {g_a; g_b; g_sigma; g_nu; g_rho}
    in
  let pricers = Array.map (fun (sw, _) -> pricer_of_swaption ~today ~zc sw) swaption_quotes in

  let pricer params h =
    try
      for i = 0 to Array.length pricers - 1 do
        h.(i) <- pricers.(i) params
      done
        with Sdomain -> raise Optimization.Infeasible
  in
  Optimization.least_squares ?feedback ~max_global ~parameters_of_vector ~pricer ~variables quotes
end

(***************************************************************************)
(*  Copyright (C) 2000-2013 LexiFi SAS. All rights reserved.               *)
(*                                                                         *)
(* This program is free software: you can redistribute it and/or modify    *)
(* it under the terms of the GNU General Public License as published       *)
(* by the Free Software Foundation, either version 3 of the License,       *)
(* or (at your option) any later version.                                  *)
(*                                                                         *)
(* This program is distributed in the hope that it will be useful,         *)
(* but WITHOUT ANY WARRANTY; without even the implied warranty of          *)
(* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *)
(* GNU General Public License for more details.                            *)
(*                                                                         *)
(* You should have received a copy of the GNU General Public License       *)
(* along with this program.  If not, see <http://www.gnu.org/licenses/>.   *)
(***************************************************************************)

open G2pp_calibration
open Date

let swaption_quotes =
  [|
   {swaption_maturity_in_year = 1; swap_term_in_year = 1; swap_frequency = Freq_6M}, 1.052;
   {swaption_maturity_in_year = 2; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.81485;
   {swaption_maturity_in_year = 3; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.6165;
   {swaption_maturity_in_year = 4; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.46995;
   {swaption_maturity_in_year = 5; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.38295;
   {swaption_maturity_in_year = 6; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.3325;
   {swaption_maturity_in_year = 7; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.3016;
   {swaption_maturity_in_year = 8; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.2815;
   {swaption_maturity_in_year = 9; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.26435;
   {swaption_maturity_in_year = 10; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.2496;
   {swaption_maturity_in_year = 15; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.2516;
   {swaption_maturity_in_year = 20; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.28835;
   {swaption_maturity_in_year = 25; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.27155;
   {swaption_maturity_in_year = 30; swap_term_in_year = 1; swap_frequency = Freq_6M}, 0.23465;
   {swaption_maturity_in_year = 1; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.61445;
   {swaption_maturity_in_year = 2; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.54805;
   {swaption_maturity_in_year = 3; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.46795;
   {swaption_maturity_in_year = 4; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.3919;
   {swaption_maturity_in_year = 5; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.3434;
   {swaption_maturity_in_year = 6; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.3083;
   {swaption_maturity_in_year = 7; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.28655;
   {swaption_maturity_in_year = 8; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.2697;
   {swaption_maturity_in_year = 9; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.25775;
   {swaption_maturity_in_year = 10; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.2443;
   {swaption_maturity_in_year = 15; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.26495;
   {swaption_maturity_in_year = 20; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.28195;
   {swaption_maturity_in_year = 25; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.26845;
   {swaption_maturity_in_year = 30; swap_term_in_year = 2; swap_frequency = Freq_6M}, 0.20995;
   {swaption_maturity_in_year = 1; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.5835;
   {swaption_maturity_in_year = 2; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.49255;
   {swaption_maturity_in_year = 3; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.42825;
   {swaption_maturity_in_year = 4; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.3695;
   {swaption_maturity_in_year = 5; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.329;
   {swaption_maturity_in_year = 6; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.3022;
   {swaption_maturity_in_year = 7; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.28165;
   {swaption_maturity_in_year = 8; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.26615;
   {swaption_maturity_in_year = 9; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.25485;
   {swaption_maturity_in_year = 10; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.24375;
   {swaption_maturity_in_year = 15; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.2718;
   {swaption_maturity_in_year = 20; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.28135;
   {swaption_maturity_in_year = 25; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.26865;
   {swaption_maturity_in_year = 30; swap_term_in_year = 3; swap_frequency = Freq_6M}, 0.2131;
   {swaption_maturity_in_year = 1; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.5415;
   {swaption_maturity_in_year = 2; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.46235;
   {swaption_maturity_in_year = 3; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.403;
   {swaption_maturity_in_year = 4; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.3559;
   {swaption_maturity_in_year = 5; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.3232;
   {swaption_maturity_in_year = 6; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.29675;
   {swaption_maturity_in_year = 7; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.27715;
   {swaption_maturity_in_year = 8; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.26385;
   {swaption_maturity_in_year = 9; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.254;
   {swaption_maturity_in_year = 10; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.2454;
   {swaption_maturity_in_year = 15; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.27845;
   {swaption_maturity_in_year = 20; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.2821;
   {swaption_maturity_in_year = 25; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.2678;
   {swaption_maturity_in_year = 30; swap_term_in_year = 4; swap_frequency = Freq_6M}, 0.2131;
   {swaption_maturity_in_year = 1; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.517;
   {swaption_maturity_in_year = 2; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.446;
   {swaption_maturity_in_year = 3; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.3903;
   {swaption_maturity_in_year = 4; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.34755;
   {swaption_maturity_in_year = 5; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.3166;
   {swaption_maturity_in_year = 6; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.29305;
   {swaption_maturity_in_year = 7; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.2745;
   {swaption_maturity_in_year = 8; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.2639;
   {swaption_maturity_in_year = 9; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.2534;
   {swaption_maturity_in_year = 10; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.2499;
   {swaption_maturity_in_year = 15; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.28315;
   {swaption_maturity_in_year = 20; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.2825;
   {swaption_maturity_in_year = 25; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.277;
   {swaption_maturity_in_year = 30; swap_term_in_year = 5; swap_frequency = Freq_6M}, 0.21175;
   {swaption_maturity_in_year = 1; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.478;
   {swaption_maturity_in_year = 2; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.42105;
   {swaption_maturity_in_year = 3; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.37715;
   {swaption_maturity_in_year = 4; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.3378;
   {swaption_maturity_in_year = 5; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.311;
   {swaption_maturity_in_year = 6; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.2895;
   {swaption_maturity_in_year = 7; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.2745;
   {swaption_maturity_in_year = 8; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.264;
   {swaption_maturity_in_year = 9; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.2573;
   {swaption_maturity_in_year = 10; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.25475;
   {swaption_maturity_in_year = 15; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.28815;
   {swaption_maturity_in_year = 20; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.28195;
   {swaption_maturity_in_year = 25; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.26015;
   {swaption_maturity_in_year = 30; swap_term_in_year = 6; swap_frequency = Freq_6M}, 0.2097;
   {swaption_maturity_in_year = 1; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.452;
   {swaption_maturity_in_year = 2; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.4074;
   {swaption_maturity_in_year = 3; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.368;
   {swaption_maturity_in_year = 4; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.3307;
   {swaption_maturity_in_year = 5; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.30645;
   {swaption_maturity_in_year = 6; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.2877;
   {swaption_maturity_in_year = 7; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.27475;
   {swaption_maturity_in_year = 8; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.2664;
   {swaption_maturity_in_year = 9; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.26155;
   {swaption_maturity_in_year = 10; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.26035;
   {swaption_maturity_in_year = 15; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.292;
   {swaption_maturity_in_year = 20; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.2825;
   {swaption_maturity_in_year = 25; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.25685;
   {swaption_maturity_in_year = 30; swap_term_in_year = 7; swap_frequency = Freq_6M}, 0.2081;
   {swaption_maturity_in_year = 1; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.43395;
   {swaption_maturity_in_year = 2; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.39445;
   {swaption_maturity_in_year = 3; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.35885;
   {swaption_maturity_in_year = 4; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.3281;
   {swaption_maturity_in_year = 5; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.30395;
   {swaption_maturity_in_year = 6; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.28745;
   {swaption_maturity_in_year = 7; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.2767;
   {swaption_maturity_in_year = 8; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.27065;
   {swaption_maturity_in_year = 9; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.26625;
   {swaption_maturity_in_year = 10; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.26625;
   {swaption_maturity_in_year = 15; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.2921;
   {swaption_maturity_in_year = 20; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.2814;
   {swaption_maturity_in_year = 25; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.25265;
   {swaption_maturity_in_year = 30; swap_term_in_year = 8; swap_frequency = Freq_6M}, 0.2083;
   {swaption_maturity_in_year = 1; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.42285;
   {swaption_maturity_in_year = 2; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.3857;
   {swaption_maturity_in_year = 3; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.3521;
   {swaption_maturity_in_year = 4; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.3239;
   {swaption_maturity_in_year = 5; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.30285;
   {swaption_maturity_in_year = 6; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.2895;
   {swaption_maturity_in_year = 7; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.2799;
   {swaption_maturity_in_year = 8; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.27485;
   {swaption_maturity_in_year = 9; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.2712;
   {swaption_maturity_in_year = 10; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.27205;
   {swaption_maturity_in_year = 15; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.29205;
   {swaption_maturity_in_year = 20; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.27855;
   {swaption_maturity_in_year = 25; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.24945;
   {swaption_maturity_in_year = 30; swap_term_in_year = 9; swap_frequency = Freq_6M}, 0.219;
   {swaption_maturity_in_year = 1; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.41765;
   {swaption_maturity_in_year = 2; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.38095;
   {swaption_maturity_in_year = 3; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.34795;
   {swaption_maturity_in_year = 4; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.3217;
   {swaption_maturity_in_year = 5; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.30365;
   {swaption_maturity_in_year = 6; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2916;
   {swaption_maturity_in_year = 7; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2842;
   {swaption_maturity_in_year = 8; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.27985;
   {swaption_maturity_in_year = 9; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2769;
   {swaption_maturity_in_year = 10; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2775;
   {swaption_maturity_in_year = 15; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.306;
   {swaption_maturity_in_year = 20; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2763;
   {swaption_maturity_in_year = 25; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.2458;
   {swaption_maturity_in_year = 30; swap_term_in_year = 10; swap_frequency = Freq_6M}, 0.22;
   {swaption_maturity_in_year = 1; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.37905;
   {swaption_maturity_in_year = 2; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.35465;
   {swaption_maturity_in_year = 3; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.33505;
   {swaption_maturity_in_year = 4; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.31725;
   {swaption_maturity_in_year = 5; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.3008;
   {swaption_maturity_in_year = 6; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.29075;
   {swaption_maturity_in_year = 7; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.28365;
   {swaption_maturity_in_year = 8; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.2787;
   {swaption_maturity_in_year = 9; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.27385;
   {swaption_maturity_in_year = 10; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.2709;
   {swaption_maturity_in_year = 15; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.2689;
   {swaption_maturity_in_year = 20; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.24225;
   {swaption_maturity_in_year = 25; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.2096;
   {swaption_maturity_in_year = 30; swap_term_in_year = 15; swap_frequency = Freq_6M}, 0.18285;
   {swaption_maturity_in_year = 1; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.37975;
   {swaption_maturity_in_year = 2; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.3605;
   {swaption_maturity_in_year = 3; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.3407;
   {swaption_maturity_in_year = 4; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.321;
   {swaption_maturity_in_year = 5; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.3063;
   {swaption_maturity_in_year = 6; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.29315;
   {swaption_maturity_in_year = 7; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.28395;
   {swaption_maturity_in_year = 8; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.2777;
   {swaption_maturity_in_year = 9; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.27205;
   {swaption_maturity_in_year = 10; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.26675;
   {swaption_maturity_in_year = 15; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.24875;
   {swaption_maturity_in_year = 20; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.21735;
   {swaption_maturity_in_year = 25; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.1939;
   {swaption_maturity_in_year = 30; swap_term_in_year = 20; swap_frequency = Freq_6M}, 0.17205;
   {swaption_maturity_in_year = 1; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.38115;
   {swaption_maturity_in_year = 2; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.3627;
   {swaption_maturity_in_year = 3; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.34425;
   {swaption_maturity_in_year = 4; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.3222;
   {swaption_maturity_in_year = 5; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.3084;
   {swaption_maturity_in_year = 6; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.2941;
   {swaption_maturity_in_year = 7; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.28285;
   {swaption_maturity_in_year = 8; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.2751;
   {swaption_maturity_in_year = 9; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.2663;
   {swaption_maturity_in_year = 10; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.26055;
   {swaption_maturity_in_year = 15; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.2338;
   {swaption_maturity_in_year = 20; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.20735;
   {swaption_maturity_in_year = 25; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.1823;
   {swaption_maturity_in_year = 30; swap_term_in_year = 25; swap_frequency = Freq_6M}, 0.1686;
   {swaption_maturity_in_year = 1; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.38285;
   {swaption_maturity_in_year = 2; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.3633;
   {swaption_maturity_in_year = 3; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.34125;
   {swaption_maturity_in_year = 4; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.3188;
   {swaption_maturity_in_year = 5; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.30305;
   {swaption_maturity_in_year = 6; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.2888;
   {swaption_maturity_in_year = 7; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.2748;
   {swaption_maturity_in_year = 8; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.26725;
   {swaption_maturity_in_year = 9; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.25985;
   {swaption_maturity_in_year = 10; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.25165;
   {swaption_maturity_in_year = 15; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.2267;
   {swaption_maturity_in_year = 20; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.1989;
   {swaption_maturity_in_year = 25; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.18115;
   {swaption_maturity_in_year = 30; swap_term_in_year = 30; swap_frequency = Freq_6M}, 0.16355;
  |]

let named_variables =
  let open Optimization in
  [|
    ("a", Optimize_value {lower_bound = 0.; upper_bound = 1.; initial_value = 0.02});
    ("b", Optimize_value {lower_bound = 0.; upper_bound = 1.; initial_value = 0.02});
    ("sigma", Optimize_value {lower_bound = 0.; upper_bound = 0.2; initial_value = 0.04});
    ("nu", Optimize_value {lower_bound = 0.; upper_bound = 0.2; initial_value = 0.01});
    ("rho", Optimize_value {lower_bound = -1.; upper_bound = 1.; initial_value = 0.0});
  |]

let variables = Array.map snd named_variables

let r = 0.03
let today = Date.of_string "2012-01-01"

let zc t = exp (-.0.03 *. (act_365 t today))
let sq x = x *. x

let () =
  let {Optimization.cr_parameters = params; cr_root_mean_squared_error; cr_quoted_prices = _; cr_calibrated_prices = _} =
    calibrate ~feedback: print_endline ~max_global: 2000 ~today ~swaption_quotes ~variables ~zc ()
  in
  let {g_a; g_b; g_sigma; g_nu; g_rho} = params in
  let l = Array.to_list swaption_quotes in
  let rms =
    List.fold_left
      (fun acc (swaption, quote) ->
        let g2pp_price = pricer_of_swaption ~today ~zc swaption params in
        let market_price = black_price ~today ~zc swaption quote in
        Printf.printf "%dY%dY Swaption Calibrated Price: %.2f Market Price: %.2f\n" swaption.swaption_maturity_in_year swaption.swap_term_in_year (10000. *. g2pp_price) (10000. *. market_price);
        acc +. sq ((g2pp_price -. market_price) /. market_price)
      ) 0. l;
  in
  let rms = 100. *. sqrt (rms /. (float (List.length l))) in
  Printf.printf "a = %.5f, b = %.5f, sigma = %.5f, nu = %.5f, rho = %.5f\n" g_a g_b g_sigma g_nu g_rho;
  Printf.printf "RMS = %.5f%%, re calculated RMS = %.5f%%\n" cr_root_mean_squared_error rms

let () =
  try
    let fn = Sys.getenv "OCAML_GC_STATS" in
    let oc = open_out fn in
    Gc.print_stat oc
  with _ -> ()
