/*=====================================================================*/
/*    Author      :  Florian Loitsch                                   */
/*    Copyright   :  2007-11 Florian Loitsch, see LICENSE file         */
/*    -------------------------------------------------------------    */
/*    This file is part of Scheme2Js.                                  */
/*                                                                     */
/*   Scheme2Js is distributed in the hope that it will be useful,      */
/*   but WITHOUT ANY WARRANTY; without even the implied warranty of    */
/*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     */
/*   LICENSE file for more details.                                    */
/*=====================================================================*/

/*
 * To use write/prints/... the default-output port has to be set first.
 * Simply setting SC_DEFAULT_OUT and SC_ERROR_OUT to the desired values
 * should do the trick.
 * In the following example the std-out and error-port are redirected to
 * a DIV.
function initRuntime() {
    function escapeHTML(s) {
	var tmp = s;
	tmp = tmp.replace(/&/g, "&amp;");
	tmp = tmp.replace(/</g, "&lt;");
	tmp = tmp.replace(/>/g, "&gt;");
	tmp = tmp.replace(/ /g, "&nbsp;");
	tmp = tmp.replace(/\n/g, "<br />");
	tmp = tmp.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp");
	return tmp;
	
    }

    document.write("<div id='stdout'></div>");
    SC_DEFAULT_OUT = new sc_GenericOutputPort(
	function(s) {
	    var stdout = document.getElementById('stdout');
	    stdout.innerHTML = stdout.innerHTML + escapeHTML(s);
	});
    SC_ERROR_OUT = SC_DEFAULT_OUT;
}
*/


function sc_print_debug() {
    sc_print.apply(null, arguments);
}
/*** META ((export *js*)) */
var sc_JS_GLOBALS = this;

var __sc_LINE=-1;
var __sc_FILE="";

/*** META ((export #t)
           (arity -1)) */
function sc_alert() {
   var len = arguments.length;
   var s = "";
   var i;

   for( i = 0; i < len; i++ ) {
       s += sc_toDisplayString(arguments[ i ]);
   }

   return alert( s );
}

/*** META ((export #t) (arity #t)) */
function sc_typeof( x ) {
   return typeof x;
}

var __sc_errorHook = false;

/*** META ((export error-hook-set!) (arity #t)) */
function sc_errorHookSet( h ) {
   __sc_errorHook = h;
}

/*** META ((export error-hook) (arity #t)) */
function sc_errorHook() {
   return __sc_errorHook;
}

/*** META ((export #t) (arity -1)) */
function sc_error() {
   var e = new Error("sc_error");

   if (arguments.length >= 1) {
      e.name = arguments[0];
      if (arguments.length >= 2) {
	 e.message = arguments[1];
	 if (arguments.length >= 3) {
	    e.scObject = arguments[2];
	 }
      }
   }

   throw __sc_errorHook ? __sc_errorHook( e, arguments ) : e;
}

function sc_arity_check(fun, nbArgs) {
   function err( args, msg, obj ) {
      var where= ("callee" in args && "caller" in args.callee ?
		  ("sc_name" in args.callee.caller ?
		   args.callee.caller.sc_name : args.callee.caller)
		  : "arity-check");
      sc_error(where, msg, obj);
      return undefined;
   }

   if (typeof fun !== "function") {
      return err(arguments, "not a function", fun);
   }
       
   var fun_arity = fun.sc_arity;

   if (fun_arity === undefined || fun_arity === false) return fun;
   if (fun_arity >= 0 && nbArgs == fun_arity) return fun;
   if (fun_arity < 0 && nbArgs >= -1-fun_arity) return fun;
   var errorMsg = "Wrong number of arguments: " + fun_arity + " expected, " +
      nbArgs + " provided";
   return err( arguments, errorMsg, fun);
}

/*** META ((export #t) (arity #t)) */
function sc_raise(obj) {
    throw obj;
}


/*** META ((export with-handler-lambda) (arity #t)) */
function sc_withHandlerLambda(handler, body) {
    try {
	return body();
    } catch(e) {
	if (!e._internalException)
	    return handler(e);
	else
	    throw e;
    }
}

var sc_properties = new Object();

/*** META ((export #t) (arity #t)) */
function sc_putpropBang(sym, key, val) {
    var ht = sc_properties[sym];
    if (!ht) {
	ht = new Object();
	sc_properties[sym] = ht;
    }
    ht[key] = val;
}

/*** META ((export #t) (arity #t)) */
function sc_getprop(sym, key) {
    var ht = sc_properties[sym];
    if (ht) {
	if (key in ht)
	    return ht[key];
	else
	    return false;
    } else
	return false;
}

/*** META ((export #t) (arity #t)) */
function sc_rempropBang(sym, key) {
    var ht = sc_properties[sym];
    if (ht)
	delete ht[key];
}

/*** META ((export #t) (arity #t)) */
function sc_any2String(o) {
    return sc_jsstring2string(sc_toDisplayString(o));
}    

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEqv(o1, o2) {
    return (o1 === o2);
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEq(o1, o2) {
    return (o1 === o2);
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isNumber(n) {
    return (typeof n === "number");
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isComplex(n) {
    return sc_isNumber(n);
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isReal(n) {
    return sc_isNumber(n);
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isRational(n) {
    return sc_isReal(n);
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isInteger(n) {
    return (parseInt(n) === n);
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix ", false")))
*/
// we don't have exact numbers...
function sc_isExact(n) {
    return false;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix ", true"))
	   (type bool))
*/
function sc_isInexact(n) {
    return true;
}

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "==="))
           (arity -3))
*/
function sc_equal(x) {
    for (var i = 1; i < arguments.length; i++)
	if (x !== arguments[i])
	    return false;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<"))
           (arity -3))
*/
function sc_less(x) {
    for (var i = 1; i < arguments.length; i++) {
	if (x >= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">"))
           (arity -3))
*/
function sc_greater(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x <= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<="))
           (arity -3))
*/
function sc_lessEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x > arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export >= >=fl >=fx)
           (type bool)
           (peephole (infix 2 2 ">="))
           (arity -3))
*/
function sc_greaterEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x < arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export zero? zerofx? zerofl?) (arity #t)
           (type bool)
           (peephole (postfix "=== 0")))
*/
function sc_isZero(x) {
    return (x === 0);
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix "> 0")))
*/
function sc_isPositive(x) {
    return (x > 0);
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix "< 0")))
*/
function sc_isNegative(x) {
    return (x < 0);
}

/*** META ((export odd? oddfx? evenfl?) (arity #t)
           (type bool)
           (peephole (postfix "%2===1")))
*/
function sc_isOdd(x) {
    return (x % 2 === 1);
}

/*** META ((export even? evenfx? evenfl?) (arity #t)
           (type bool)
           (peephole (postfix "%2===0")))
*/
function sc_isEven(x) {
    return (x % 2 === 0);
}

/*** META ((export #t)
           (arity -2)) */
var sc_max = Math.max;
/*** META ((export #t)
           (arity -2)) */
var sc_min = Math.min;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0"))
           (arity -1))
*/
function sc_plus() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
	sum += arguments[i];
    return sum;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1"))
           (arity -1))
*/
function sc_multi() {
    var product = 1;
    for (var i = 0; i < arguments.length; i++)
	product *= arguments[i];
    return product;
}

/*** META ((export - -fx -fl negfx negfl)
           (peephole (minus))
           (arity -2))
*/
function sc_minus(x) {
    if (arguments.length === 1)
	return -x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res -= arguments[i];
	return res;
    }
}

/*** META ((export / /fl)
           (peephole (div))
           (arity -2))
*/
function sc_div(x) {
    if (arguments.length === 1)
	return 1/x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res /= arguments[i];
	return res;
    }
}

/*** META ((export #t)
           (arity 1))
*/
var sc_abs = Math.abs;

/*** META ((export quotient /fx) (arity #t)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function sc_quotient(x, y) {
    return parseInt(x / y);
}

/*** META ((export remainder remainderfl) (arity #t)
           (peephole (infix 2 2 "%")))
*/
function sc_remainder(x, y) {
    return x % y;
}

/*** META ((export modulo modulofx) (arity #t))
*/
function sc_modulo(x, y) {
    var remainder = x % y;
    // if they don't have the same sign
    if ((remainder * y) < 0)
	return remainder + y;
    else
	return remainder;
}

function sc_euclid_gcd(a, b) {
    var temp;
    if (a === 0) return b;
    if (b === 0) return a;
    if (a < 0) {a = -a;};
    if (b < 0) {b = -b;};
    if (b > a) {temp = a; a = b; b = temp;};
    while (true) {
	a %= b;
	if(a === 0) {return b;};
	b %= a;
	if(b === 0) {return a;};
    };
    return b;
}

/*** META ((export #t)
           (arity -1))
*/
function sc_gcd() {
    var gcd = 0;
    for (var i = 0; i < arguments.length; i++)
	gcd = sc_euclid_gcd(gcd, arguments[i]);
    return gcd;
}

/*** META ((export #t)
           (arity -1))
*/
function sc_lcm() {
    var lcm = 1;
    for (var i = 0; i < arguments.length; i++) {
	var f = Math.round(arguments[i] / sc_euclid_gcd(arguments[i], lcm));
	lcm *= Math.abs(f);
    }
    return lcm;
}

// LIMITATION: numerator and denominator don't make sense in floating point world.
//var SC_MAX_DECIMALS = 1000000
//
// function sc_numerator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(rounded / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

// function sc_denominator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(SC_MAX_DECIMALS / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

/*** META ((export #t)
           (arity 1))
*/
var sc_floor = Math.floor;
/*** META ((export #t)
           (arity 1))
*/
var sc_ceiling = Math.ceil;
/*** META ((export #t)
           (arity 1))
*/
var sc_truncate = parseInt;
/*** META ((export #t)
           (arity 1))
*/
var sc_round = Math.round;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)
           (arity 1))
*/
var sc_exp = Math.exp;
/*** META ((export #t)
           (arity 1))
*/
var sc_log = Math.log;
/*** META ((export #t)
           (arity 1))
*/
var sc_sin = Math.sin;
/*** META ((export #t)
           (arity 1))
*/
var sc_cos = Math.cos;
/*** META ((export #t)
           (arity 1))
*/
var sc_tan = Math.tan;
/*** META ((export #t)
           (arity 1))
*/
var sc_asin = Math.asin;
/*** META ((export #t)
           (arity 1))
*/
var sc_acos = Math.acos;
/*** META ((export #t)
           (arity -2))
*/
var sc_atan = Math.atan;

/*** META ((export #t)
           (arity 1))
*/
var sc_sqrt = Math.sqrt;
/*** META ((export #t)
           (arity 2))
*/
var sc_expt = Math.pow;

// LIMITATION: we don't have complex numbers.
// LIMITATION: the following functions are hence not implemented.
// LIMITATION: make-rectangular, make-polar, real-part, imag-part, magnitude, angle
// LIMITATION: 2 argument atan

/*** META ((export #t) (arity #t)
           (peephole (id)))
*/
function sc_exact2inexact(x) {
    return x;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix "<< 0")))
*/
function sc_inexact2exact(x) {
    return x << 0;
}

function sc_number2jsstring(x, radix) {
    if (radix)
	return x.toString(radix);
    else
	return x.toString();
}

function sc_jsstring2number(s, radix) {
    if (s === "") return false;

    if (radix) {
	var t = parseInt(s, radix);
	if (!t && t !== 0) return false;
	// verify that each char is in range. (parseInt ignores leading
	// white and trailing chars)
	var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, radix+1);
	if ((new RegExp("^["+allowedChars+"]*$", "i")).test(s))
	    return t;
	else return false;
    } else {
	var t = +s; // does not ignore trailing chars.
	if (!t && t !== 0) return false;
	// simply verify that first char is not whitespace.
	var c = s.charAt(0);
	// if +c is 0, but the char is not "0", then we have a whitespace.
	if (+c === 0 && c !== "0") return false;
	return t;
    }
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (not)))
*/
function sc_not(b) {
    return b === false;
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isBoolean(b) {
    return (b === true) || (b === false);
}

function sc_Pair(car, cdr) {
    this.car = car;
    this.cdr = cdr;
}

sc_Pair.prototype.toString = function() {
    return sc_toDisplayString(this);
};
sc_Pair.prototype.sc_toWriteOrDisplayString = function(writeOrDisplay) {
    var current = this;

    var res = "(";

    while(true) {
	res += writeOrDisplay(current.car);
	if (sc_isPair(current.cdr)) {
	    res += " ";
	    current = current.cdr;
	} else if (current.cdr !== null) {
	    res += " . " + writeOrDisplay(current.cdr);
	    break;
	} else // current.cdr == null
	    break;
    }
	
    res += ")";

    return res;
};
sc_Pair.prototype.sc_toDisplayString = function() {
    return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Pair.prototype.sc_toWriteString = function() {
    return this.sc_toWriteOrDisplayString(sc_toWriteString);
};
// sc_Pair.prototype.sc_toWriteCircleString in IO.js

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix " instanceof sc_Pair")))
*/
function sc_isPair(p) {
    return (p instanceof sc_Pair);
}

function sc_isPairEqual(p1, p2, comp) {
    return (comp(p1.car, p2.car) && comp(p1.cdr, p2.cdr));
}

/*** META ((export #t) (arity #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function sc_cons(car, cdr) {
    return new sc_Pair(car, cdr);
}

/*** META ((export cons*)
           (arity -2))
*/
function sc_consStar() {
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length-2; i >= 0; i--)
	res = new sc_Pair(arguments[i], res);
    return res;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix ".car")))
*/
function sc_car(p) {
    return p.car;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr")))
*/
function sc_cdr(p) {
    return p.cdr;
}

/*** META ((export #t) (arity #t)
           (peephole (hole 2 p ".car = " val)))
*/
function sc_setCarBang(p, val) {
    p.car = val;
}

/*** META ((export #t) (arity #t)
           (peephole (hole 2 p ".cdr = " val)))
*/
function sc_setCdrBang(p, val) {
    p.cdr = val;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car")))
*/
function sc_caar(p) { return p.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car")))
*/
function sc_cadr(p) { return p.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr")))
*/
function sc_cdar(p) { return p.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr")))
*/
function sc_cddr(p) { return p.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.car")))
*/
function sc_caaar(p) { return p.car.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.car")))
*/
function sc_cadar(p) { return p.car.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.car")))
*/
function sc_caadr(p) { return p.cdr.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function sc_caddr(p) { return p.cdr.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.cdr")))
*/
function sc_cdaar(p) { return p.car.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
function sc_cdadr(p) { return p.cdr.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function sc_cddar(p) { return p.car.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.cdr")))
*/
function sc_cdddr(p) { return p.cdr.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.car.car")))
*/
function sc_caaaar(p) { return p.car.car.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.car.car")))
*/
function sc_caadar(p) { return p.car.cdr.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function sc_caaadr(p) { return p.cdr.car.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function sc_caaddr(p) { return p.cdr.cdr.car.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function sc_cdaaar(p) { return p.car.car.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function sc_cdadar(p) { return p.car.cdr.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function sc_cdaadr(p) { return p.cdr.car.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function sc_cdaddr(p) { return p.cdr.cdr.car.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function sc_cadaar(p) { return p.car.car.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function sc_caddar(p) { return p.car.cdr.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function sc_cadadr(p) { return p.cdr.car.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function sc_cadddr(p) { return p.cdr.cdr.cdr.car; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function sc_cddaar(p) { return p.car.car.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function sc_cdddar(p) { return p.car.cdr.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function sc_cddadr(p) { return p.cdr.car.cdr.cdr; }
/*** META ((export #t) (arity #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function sc_cddddr(p) { return p.cdr.cdr.cdr.cdr; }

/*** META ((export #t) (arity #t)) */
function sc_lastPair(l) {
    if (!sc_isPair(l)) sc_error("sc_lastPair: pair expected");
    var res = l;
    var cdr = l.cdr;
    while (sc_isPair(cdr)) {
	res = cdr;
	cdr = res.cdr;
    }
    return res;
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix " === null")))
*/
function sc_isNull(o) {
    return (o === null);
}

/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isList(o) {
   var rabbit = o;
   var turtle = o;

   while (true) {
       if (rabbit === null ||
	   (rabbit instanceof sc_Pair && rabbit.cdr === null))
	   return true;  // end of list
       else {
	   if ((rabbit instanceof sc_Pair) &&
	       (rabbit.cdr instanceof sc_Pair)) {
	       rabbit = rabbit.cdr.cdr;
	       turtle = turtle.cdr;
	       if (rabbit === turtle) return false; // cycle
	   } else
	       return false; // not pair
       }
   }
}

/*** META ((export #t)
           (arity -1))
 */
function sc_list() {
    var res = null;
    var a = arguments;
    for (var i = a.length-1; i >= 0; i--)
	res = new sc_Pair(a[i], res);
    return res;
}

/*** META ((export #t)
           (arity -2))
*/
function sc_iota(num, init) {
   var res = null;
   if (!init) init = 0;
   for (var i = num - 1; i >= 0; i--)
      res = new sc_Pair(i + init, res);
   return res;
}

/*** META ((export #t)
           (arity -2))
*/
function sc_makeList(nbEls, fill) {
    var res = null;
    for (var i = 0; i < nbEls; i++)
	res = new sc_Pair(fill, res);
    return res;
}

/*** META ((export #t) (arity #t)) */
function sc_length(l) {
    var res = 0;
    while (l !== null) {
	res++;
	l = l.cdr;
    }
    return res;
}

/*** META ((export #t) (arity #t)) */
function sc_remq(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l !== null) {
	if (l.car !== o) {
	    tail.cdr = sc_cons(l.car, null);
	    tail = tail.cdr;
	}
	l = l.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t) (arity #t)) */
function sc_remqBang(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    var needsAssig = true;
    while (l !== null) {
	if (l.car === o) {
	    needsAssig = true;
	} else {
	    if (needsAssig) {
		tail.cdr = l;
		needsAssig = false;
	    }
	    tail = l;
	}
	l = l.cdr;
    }
    tail.cdr = null;
    return dummy.cdr;
}

/*** META ((export #t) (arity #t)) */
function sc_delete(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l !== null) {
	if (!sc_isEqual(l.car, o)) {
	    tail.cdr = sc_cons(l.car, null);
	    tail = tail.cdr;
	}
	l = l.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t) (arity #t)) */
function sc_deleteBang(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    var needsAssig = true;
    while (l !== null) {
	if (sc_isEqual(l.car, o)) {
	    needsAssig = true;
	} else {
	    if (needsAssig) {
		tail.cdr = l;
		needsAssig = false;
	    }
	    tail = l;
	}
	l = l.cdr;
    }
    tail.cdr = null;
    return dummy.cdr;
}

function sc_reverseAppendBang(l1, l2) {
    var res = l2;
    while (l1 !== null) {
	var tmp = res;
	res = l1;
	l1 = l1.cdr;
	res.cdr = tmp;
    }
    return res;
}
	
function sc_dualAppend(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var rev = sc_reverse(l1);
    return sc_reverseAppendBang(rev, l2);
}

/*** META ((export append eappend) ;; we want eappend for the quasiquotes.
           (arity -1))
*/
function sc_append() {
    if (arguments.length === 0)
	return null;
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length - 2; i >= 0; i--)
	res = sc_dualAppend(arguments[i], res);
    return res;
}

function sc_dualAppendBang(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var tmp = l1;
    while (tmp.cdr !== null) tmp=tmp.cdr;
    tmp.cdr = l2;
    return l1;
}
    
/*** META ((export #t)
           (arity -1))
*/
function sc_appendBang() {
    var res = null;
    for (var i = 0; i < arguments.length; i++)
	res = sc_dualAppendBang(res, arguments[i]);
    return res;
}

/*** META ((export #t) (arity #t)) */
function sc_reverse(l1) {
    var res = null;
    while (l1 !== null) {
	res = sc_cons(l1.car, res);
	l1 = l1.cdr;
    }
    return res;
}

/*** META ((export #t) (arity #t)) */
function sc_reverseBang(l) {
    return sc_reverseAppendBang(l, null);
}

/*** META ((export #t) (arity #t)) */
function sc_listTail(l, k) {
    var res = l;
    for (var i = 0; i < k; i++) {
	res = res.cdr;
    }
    return res;
}

/*** META ((export #t) (arity #t)) */
function sc_listRef(l, k) {
    return sc_listTail(l, k).car;
}

/* // unoptimized generic versions
function sc_memX(o, l, comp) {
    while (l != null) {
	if (comp(l.car, o))
	    return l;
	l = l.cdr;
    }
    return false;
}
function sc_memq(o, l) { return sc_memX(o, l, sc_isEq); }
function sc_memv(o, l) { return sc_memX(o, l, sc_isEqv); }
function sc_member(o, l) { return sc_memX(o, l, sc_isEqual); }
*/

/* optimized versions */
/*** META ((export #t) (arity #t)) */
function sc_memq(o, l) {
    while (l !== null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export #t) (arity #t)) */
function sc_memv(o, l) {
    while (l !== null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export #t) (arity #t)) */
function sc_member(o, l) {
    while (l !== null) {
	if (sc_isEqual(l.car,o))
	    return l;
	l = l.cdr;
    }
    return false;
}

/* // generic unoptimized versions
function sc_assX(o, al, comp) {
    while (al != null) {
	if (comp(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}
function sc_assq(o, al) { return sc_assX(o, al, sc_isEq); }
function sc_assv(o, al) { return sc_assX(o, al, sc_isEqv); }
function sc_assoc(o, al) { return sc_assX(o, al, sc_isEqual); }
*/
// optimized versions
/*** META ((export #t) (arity #t)) */
function sc_assq(o, al) {
    while (al !== null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export #t) (arity #t)) */
function sc_assv(o, al) {
    while (al !== null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export #t) (arity #t)) */
function sc_assoc(o, al) {
    while (al !== null) {
	if (sc_isEqual(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}

/* can be used for mutable strings and characters */
function sc_isCharStringEqual(cs1, cs2) { return cs1.val === cs2.val; }
function sc_isCharStringLess(cs1, cs2) { return cs1.val < cs2.val; }
function sc_isCharStringGreater(cs1, cs2) { return cs1.val > cs2.val; }
function sc_isCharStringLessEqual(cs1, cs2) { return cs1.val <= cs2.val; }
function sc_isCharStringGreaterEqual(cs1, cs2) { return cs1.val >= cs2.val; }
function sc_isCharStringCIEqual(cs1, cs2)
    { return cs1.val.toLowerCase() === cs2.val.toLowerCase(); }
function sc_isCharStringCILess(cs1, cs2)
    { return cs1.val.toLowerCase() < cs2.val.toLowerCase(); }
function sc_isCharStringCIGreater(cs1, cs2)
    { return cs1.val.toLowerCase() > cs2.val.toLowerCase(); }
function sc_isCharStringCILessEqual(cs1, cs2)
    { return cs1.val.toLowerCase() <= cs2.val.toLowerCase(); }
function sc_isCharStringCIGreaterEqual(cs1, cs2)
    { return cs1.val.toLowerCase() >= cs2.val.toLowerCase(); }

function sc_Char(c) {
    var cached = sc_Char.lazy[c];
    if (cached)
	return cached;
    this.val = c;
    sc_Char.lazy[c] = this;
    // add return, so FF does not complain.
    return undefined;
}
sc_Char.lazy = new Object();
// thanks to Eric
sc_Char.char2readable = {
};

sc_Char.readable2char = {
};
    
sc_Char.prototype.toString = function() {
    return this.val;
};
// sc_toDisplayString == toString
sc_Char.prototype.sc_toWriteString = function() {
    var entry = sc_Char.char2readable[this.val];
    if (entry)
	return entry;
    else
	return "#\\" + this.val;
};

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (postfix "instanceof sc_Char")))
*/
function sc_isChar(c) {
    return (c instanceof sc_Char);
}

/*** META ((export char=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val === " c2 ".val")))
*/
var sc_isCharEqual = sc_isCharStringEqual;
/*** META ((export char<?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val < " c2 ".val")))
*/
var sc_isCharLess = sc_isCharStringLess;
/*** META ((export char>?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val > " c2 ".val")))
*/
var sc_isCharGreater = sc_isCharStringGreater;
/*** META ((export char<=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val <= " c2 ".val")))
*/
var sc_isCharLessEqual = sc_isCharStringLessEqual;
/*** META ((export char>=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
/*** META ((export char-ci=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() === " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIEqual = sc_isCharStringCIEqual;
/*** META ((export char-ci<?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() < " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILess = sc_isCharStringCILess;
/*** META ((export char-ci>?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() > " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreater = sc_isCharStringCIGreater;
/*** META ((export char-ci<=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() <= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
/*** META ((export char-ci>=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;

var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = ' \r\n\t\f';
var SC_LOWER_CLASS = 'abcdefghijklmnopqrstuvwxyz';
var SC_UPPER_CLASS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function sc_isCharOfClass(c, cl) { return (cl.indexOf(c) != -1); }
/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isCharAlphabetic(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS) ||
	  sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharNumeric(c)
    { return sc_isCharOfClass(c.val, SC_NUMBER_CLASS); }
/*** META ((export #t) (arity #t)
           (type bool))
*/
function sc_isCharWhitespace(c) {
    var tmp = c.val;
    return tmp === " " || tmp === "\r" || tmp === "\n" || tmp === "\t" || tmp === "\f";
}
/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (hole 1 "SC_UPPER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharUpperCase(c)
    { return sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (hole 1 "SC_LOWER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharLowerCase(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS); }

/*** META ((export #t) (arity #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function sc_char2integer(c)
    { return c.val.charCodeAt(0); }
/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function sc_integer2char(n)
    { return new sc_Char(String.fromCharCode(n)); }

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function sc_charUpcase(c)
    { return new sc_Char(c.val.toUpperCase()); }
/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function sc_charDowncase(c)
    { return new sc_Char(c.val.toLowerCase()); }

function sc_makeJSStringOfLength(k, c) {
    var fill;
    if (c === undefined)
	fill = " ";
    else
	fill = c;
    var res = "";
    var len = 1;
    // every round doubles the size of fill.
    while (k >= len) {
	if (k & len)
	    res = res.concat(fill);
	fill = fill.concat(fill);
	len *= 2;
    }
    return res;
}

function sc_makejsString(k, c) {
    var fill;
    if (c)
	fill = c.val;
    else
	fill = " ";
    return sc_makeJSStringOfLength(k, fill);
}

function sc_jsstring2list(s) {
    var res = null;
    for (var i = s.length - 1; i >= 0; i--)
	res = sc_cons(new sc_Char(s.charAt(i)), res);
    return res;
}

function sc_list2jsstring(l) {
    var a = new Array();
    while(l !== null) {
	a.push(l.car.val);
	l = l.cdr;
    }
    return "".concat.apply("", a);
}

var sc_Vector = Array;

sc_Vector.prototype.sc_toWriteOrDisplayString = function(writeOrDisplay) {
    if (this.length === 0) return "#()";

    var res = "#(" + writeOrDisplay(this[0]);
    for (var i = 1; i < this.length; i++)
	res += " " + writeOrDisplay(this[i]);
    res += ")";
    return res;
};
sc_Vector.prototype.sc_toDisplayString = function() {
    return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Vector.prototype.sc_toWriteString = function() {
    return this.sc_toWriteOrDisplayString(sc_toWriteString);
};

/*** META ((export vector? array?) (arity #t)
           (type bool)
           (peephole (postfix " instanceof sc_Vector")))
*/
function sc_isVector(v) {
    return (v instanceof sc_Vector);
}

// only applies to vectors
function sc_isVectorEqual(v1, v2, comp) {
    if (v1.length !== v2.length) return false;
    for (var i = 0; i < v1.length; i++)
	if (!comp(v1[i], v2[i])) return false;
    return true;
}

/*** META ((export make-vector make-array)
           (arity -2))
*/
function sc_makeVector(size, fill) {
    var a = new sc_Vector(size);
    if (fill !== undefined)
	sc_vectorFillBang(a, fill);
    return a;
}

/*** META ((export vector array)
           (arity -1)
           (peephole (vector)))
*/
function sc_vector() {
    var a = new sc_Vector();
    for (var i = 0; i < arguments.length; i++)
	a.push(arguments[i]);
    return a;
}

/*** META ((export vector-length array-length) (arity #t)
           (peephole (postfix ".length")))
*/
function sc_vectorLength(v) {
    return v.length;
}

/*** META ((export vector-ref array-ref) (arity #t)
           (peephole (hole 2 v "[" pos "]")))
*/
function sc_vectorRef(v, pos) {
    return v[pos];
}

/*** META ((export vector-set! array-set!) (arity #t)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function sc_vectorSetBang(v, pos, val) {
    v[pos] = val;
}

/*** META ((export vector->list array->list) (arity #t)) */
function sc_vector2list(a) {
    var res = null;
    for (var i = a.length-1; i >= 0; i--)
	res = sc_cons(a[i], res);
    return res;
}

/*** META ((export list->vector list->array) (arity #t)) */
function sc_list2vector(l) {
    var a = new sc_Vector();
    while(l !== null) {
	a.push(l.car);
	l = l.cdr;
    }
    return a;
}

/*** META ((export vector-fill! array-fill!) (arity #t)) */
function sc_vectorFillBang(a, fill) {
    for (var i = 0; i < a.length; i++)
	a[i] = fill;
}


/*** META ((export #t) (arity #t)) */
function sc_copyVector(a, len) {
    if (len <= a.length)
	return a.slice(0, len);
    else {
	var tmp = a.concat();
	tmp.length = len;
	return tmp;
    }
}

/*** META ((export #t) (arity -2)
           (peephole (hole 3 a ".slice(" start "," end ")")))
*/
function sc_vectorCopy(a, start, end) {
    return a.slice(start, end);
}

/*** META ((export #t) (arity -4)) */
function sc_vectorCopyBang(target, tstart, source, sstart, send) {
    if (!sstart) sstart = 0;
    if (!send) send = source.length;

    // if target == source we don't want to overwrite not yet copied elements.
    if (tstart <= sstart) {
	for (var i = tstart, j = sstart; j < send; i++, j++) {
	    target[i] = source[j];
	}
    } else {
	var diff = send - sstart;
	for (var i = tstart + diff - 1, j = send - 1;
	     j >= sstart;
	     i--, j--) {
	    target[i] = source[j];
	}
    }
    return target;
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (hole 1 "typeof " o " === 'function'")))
*/
function sc_isProcedure(o) {
    return (typeof o === "function");
}

/*** META ((export #t) (arity -3)) */
function sc_apply(proc) {
    var args = new Array();
    // first part of arguments are not in list-form.
    for (var i = 1; i < arguments.length - 1; i++)
	args.push(arguments[i]);
    var l = arguments[arguments.length - 1];
    while (l !== null) {
	args.push(l.car);
	l = l.cdr;
    }
    return proc.apply(null, args);
}

/*** META ((export #t) (arity -2)) */
function sc_map(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	revres = sc_cons(proc.apply(null, applyArgs), revres);
    }
    return sc_reverseAppendBang(revres, null);
}

/*** META ((export #t) (arity -2)) */
function sc_mapBang(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var l1_orig = l1;
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	var tmp = l1;
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	tmp.car = proc.apply(null, applyArgs);
    }
    return l1_orig;
}
     
/*** META ((export #t) (arity -2)) */
function sc_forEach(proc, l1) {
    if (l1 === undefined)
	return undefined;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	proc.apply(null, applyArgs);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t) (arity #t)) */
function sc_filter(proc, l1) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l1 !== null) {
	if (proc(l1.car) !== false) {
	    tail.cdr = sc_cons(l1.car, null);
	    tail = tail.cdr;
	}
	l1 = l1.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t) (arity #t)) */
function sc_filterBang(proc, l1) {
    var head = sc_cons("dummy", l1);
    var it = head;
    var next = l1;
    while (next !== null) {
        if (proc(next.car) !== false) {
	    it.cdr = next
	    it = next;
	}
	next = next.cdr;
    }
    it.cdr = null;
    return head.cdr;
}

function sc_filterMap1(proc, l1) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car)
        if (tmp !== false) revres = sc_cons(tmp, revres);
        l1 = l1.cdr;
    }
    return sc_reverseAppendBang(revres, null);
}
function sc_filterMap2(proc, l1, l2) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car, l2.car);
        if(tmp !== false) revres = sc_cons(tmp, revres);
	l1 = l1.cdr;
	l2 = l2.cdr
    }
    return sc_reverseAppendBang(revres, null);
}

/*** META ((export #t) (arity -2)) */
function sc_filterMap(proc, l1, l2, l3) {
    if (l2 === undefined)
	return sc_filterMap1(proc, l1);
    else if (l3 === undefined)
	return sc_filterMap2(proc, l1, l2);
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	var tmp = proc.apply(null, applyArgs);
	if(tmp !== false) revres = sc_cons(tmp, revres);
    }
    return sc_reverseAppendBang(revres, null);
}

function sc_any1(proc, l) {
    var revres = null;
    while (l !== null) {
        var tmp = proc(l.car);
        if(tmp !== false) return tmp;
	l = l.cdr;
    }
    return false;
}

/*** META ((export #t) (arity -2)) */
function sc_any(proc, l1, l2) {
    if (l1 === undefined)
	return false;
    if (l2 === undefined)
	return sc_any1(proc, l1);
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	var tmp =  proc.apply(null, applyArgs);
	if (tmp !== false) return tmp;
    }
    return false;
}

/*** META ((export any?) (arity -2)
           (peephole (hole 2 "sc_any(" proc "," l ") !== false")))
*/
function sc_anyPred(proc, l) {
    return sc_any(proc, l) !== false;
}


function sc_every1(proc, l) {
    var revres = null;
    var tmp = true;
    while (l !== null) {
        tmp = proc(l.car);
        if (tmp === false) return false;
	l = l.cdr;
    }
    return tmp;
}

/*** META ((export #t) (arity -2)) */
function sc_every(proc, l1, l2) {
    if (l1 === undefined)
	return true;
    if (l2 === undefined)
	return sc_every1(proc, l1);
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var tmp = true;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	var tmp = proc.apply(null, applyArgs);
	if (tmp === false) return false;
    }
    return tmp;
}

/*** META ((export every?) (arity -2)
           (peephole (hole 2 "sc_every(" proc "," l ") !== false")))
*/
function sc_everyPred(proc, l) {
    var tmp = sc_every(proc, l);
    if (tmp !== false) return true;
    return false;
}

/*** META ((export #t) (arity #t)
           (peephole (postfix "()")))
*/
function sc_force(o) {
    return o();
}

/*** META ((export #t) (arity #t)) */
function sc_makePromise(proc) {
    var isResultReady = false;
    var result = undefined;
    return function() {
	if (!isResultReady) {
	    var tmp = proc();
	    if (!isResultReady) {
		isResultReady = true;
		result = tmp;
	    }
	}
	return result;
    };
}

function sc_Values(values) {
    this.values = values;
}

/*** META ((export #t) (arity -1)
           (peephole (values)))
*/
function sc_values() {
    if (arguments.length === 1)
	return arguments[0];
    else
	return new sc_Values(arguments);
}

/*** META ((export #t) (arity #t)) */
function sc_callWithValues(producer, consumer) {
   if( !sc_isProcedure(producer) )
      sc_error( "callWithValue", "producer not a procedure", producer );
      
    var produced = producer();
    if (produced instanceof sc_Values)
	return consumer.apply(null, produced.values);
    else
	return consumer(produced);
}

/*** META ((export #t) (arity #t)) */
function sc_dynamicWind(before, thunk, after) {
    before();
    try {
	var res = thunk();
	return res;
    } finally {
	after();
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function sc_Struct(name) {
    this.name = name;
}
sc_Struct.prototype.sc_toDisplayString = function() {
    return "#<struct" + sc_hash(this) + ">";
};
sc_Struct.prototype.sc_toWriteString = sc_Struct.prototype.sc_toDisplayString;

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_Struct(" name ")")))
*/
function sc_makeStruct(name) {
    return new sc_Struct(name);
}

/*** META ((export #t) (arity 1)
           (type bool)
           (peephole (postfix " instanceof sc_Struct")))
*/
function sc_isStruct(o) {
    return (o instanceof sc_Struct);
}

/*** META ((export #t) (arity #t)
           (type bool)
           (peephole (hole 2 "(" 1 " instanceof sc_Struct) && ( " 1 ".name === " 0 ")")))
*/
function sc_isStructNamed(name, s) {
    return ((s instanceof sc_Struct) && (s.name === name));
}

/*** META ((export struct-field) (arity #t)
           (peephole (hole 3 0 "[" 2 "]")))
*/
function sc_getStructField(s, name, field) {
    return s[field];
}

/*** META ((export struct-field-set!) (arity #t)
           (peephole (hole 4 0 "[" 2 "] = " 3)))
*/
function sc_setStructFieldBang(s, name, field, val) {
    s[field] = val;
}

/*** META ((export #t) (arity #t)
           (peephole (prefix "~")))
*/
function sc_bitNot(x) {
    return ~x;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "&")))
*/
function sc_bitAnd(x, y) {
    return x & y;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "|")))
*/
function sc_bitOr(x, y) {
    return x | y;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "^")))
*/
function sc_bitXor(x, y) {
    return x ^ y;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 "<<")))
*/
function sc_bitLsh(x, y) {
    return x << y;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 ">>")))
*/
function sc_bitRsh(x, y) {
    return x >> y;
}

/*** META ((export #t) (arity #t)
           (peephole (infix 2 2 ">>>")))
*/
function sc_bitUrsh(x, y) {
    return x >>> y;
}

/*** META ((export js-field js-property js-ref) (arity #t)
           (peephole (hole 2 o "[" field "]")))
*/
function sc_jsField(o, field) {
    return o[field];
}

/*** META ((export js-field-set! js-property-set! js-set!)
           (arity #t)
           (peephole (hole 3 o "[" field "] = " val)))
*/
function sc_setJsFieldBang(o, field, val) {
    return o[field] = val;
}

/*** META ((export js-field-delete! js-property-delete!)
           (arity #t)
           (peephole (hole 2 "delete " o "[" field "]")))
*/
function sc_deleteJsFieldBang(o, field) {
    delete o[field];
}

/*** META ((export #t)
           (arity -3)
           (peephole (jsCall)))
*/
function sc_jsCall(o, fun) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return fun.apply(o, args);
}

/*** META ((export #t)
           (arity -3)
           (peephole (jsMethodCall)))
*/
function sc_jsMethodCall(o, field) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return o[field].apply(o, args);
}

/*** META ((export new js-new)
           (arity -2)
           (peephole (jsNew)))
*/
function sc_jsNew(c) {
    var evalStr = "new c(";
    evalStr +=arguments.length > 1? "arguments[1]": "";
    for (var i = 2; i < arguments.length; i++)
	evalStr += ", arguments[" + i + "]";
    evalStr +=")";
    return eval(evalStr);
}    

// ======================== RegExp ====================
/*** META ((export #t) (arity #t)) */
function sc_pregexp(re) {
    return new RegExp(sc_string2jsstring(re));
}

/*** META ((export #t) (arity #t)) */
function sc_pregexpMatch(re, s) {
    var reg = (re instanceof RegExp) ? re : sc_pregexp(re);
    var tmp = reg.exec(sc_string2jsstring(s));
    
    if (tmp == null) return false;
    
    var res = null;
    for (var i = tmp.length-1; i >= 0; i--) {
	if (tmp[i] !== null) {
	    res = sc_cons(sc_jsstring2string(tmp[i]), res);
	} else {
	    res = sc_cons(false, res);
	}
    }
    return res;
}
   
/*** META ((export #t) (arity #t)) */
function sc_pregexpReplace(re, s1, s2) {
   var reg;
   var jss1 = sc_string2jsstring(s1);
   var jss2 = sc_string2jsstring(s2);

   if (re instanceof RegExp) {
       if (re.global)
	   reg = re;
       else
	   reg = new RegExp(re.source);
   } else {
       reg = new RegExp(sc_string2jsstring(re));
   }

   return jss1.replace(reg, jss2);
}
   
/*** META ((export pregexp-replace*) (arity #t)) */
function sc_pregexpReplaceAll(re, s1, s2) {
   var reg;
   var jss1 = sc_string2jsstring(s1);
   var jss2 = sc_string2jsstring(s2);

   if (re instanceof RegExp) {
      if (re.global)
	  reg = re;
      else
	  reg = new RegExp(re.source, "g");
   } else {
       reg = new RegExp(sc_string2jsstring(re), "g");
   }

   return jss1.replace(reg, jss2);
}

/*** META ((export #t) (arity #t)) */
function sc_pregexpSplit(re, s) {
   var reg = ((re instanceof RegExp) ?
	      re :
	      new RegExp(sc_string2jsstring(re)));
   var jss = sc_string2jsstring(s);
   var tmp = jss.split(reg);

   if (tmp == null) return false;

   return sc_vector2list(tmp);
}
   
function sc_pregexpCreateCharsetMatcher(set) {
    if (set.length === 0 || set.length === 1) return new RegExp("[" + set + "]");
    var res = "[";
    for (var i = 0; i < set.length; i++) {
	var c = set.charAt(i);
	if (c === "]")
	    res += "\\]";
	else if (c === "^")
	    res += "\\^";
	else if (c === "\\")
	    res += "\\\\";
	else if (c === "-")
	    res += "\\-";
	else res += c;
    }
    return new RegExp(res + "]");
}

/* =========================================================================== */
/* Other library stuff */
/* =========================================================================== */

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "Math.floor(Math.random()*" 'n ")")))
*/
function sc_random(n) {
    return Math.floor(Math.random()*n);
}

/*** META ((export current-date) (arity #t)
           (peephole (hole 0 "new Date()")))
*/
function sc_currentDate() {
   return new Date();
}

/*** META ((export current-seconds) (arity #t)) 
*/
function sc_currentSeconds() {
   return (new Date()).getTime() / 1000;
}

/*** META ((export current-microseconds) (arity #t)) 
*/
function sc_currentMicroseconds() {
   return (new Date()).getTime();
}

/*** META ((export #t) (arity #t)) 
*/
function sc_time(proc) {
   var start = sc_currentMicroseconds();
   var res = proc();
   var stop = sc_currentMicroseconds();

   return sc_values( res, stop - start, 0, 0 );
}

function sc_Hashtable() {
}
sc_Hashtable.prototype.toString = function() {
    return "#{%hashtable}";
};
// sc_toWriteString == sc_toDisplayString == toString

function sc_HashtableElement(key, val) {
    this.key = key;
    this.val = val;
}

// the arity of make-hashtable inside Bigloo is -1. However we don't use it
// here. So for now simply don't give the arity...
/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function sc_makeHashtable() {
    return new sc_Hashtable();
}

/*** META ((export #t) (arity #t)
           (type bool)) */
function sc_isHashtable(o) {
    return o instanceof sc_Hashtable;
}

/*** META ((export #t) (arity #t)) */
function sc_hashtablePutBang(ht, key, val) {
    var hash = sc_hash(key);
    ht[hash] = new sc_HashtableElement(key, val);
}

/*** META ((export #t) (arity #t)) */
function sc_hashtableGet(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return ht[hash].val;
    else
	return false;
}

/*** META ((export #t) (arity #t)) */
function sc_hashtableForEach(ht, f) {
    for (var v in ht) {
	if (ht[v] instanceof sc_HashtableElement)
	    f(ht[v].key, ht[v].val);
    }
}

/*** META ((export hashtable-contains?)
           (arity #t)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function sc_hashtableContains(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return true;
    else
	return false;
}

var SC_HASH_COUNTER = 0;

function sc_hash(o) {
    if (o === null)
	return "null";
    else if (o === undefined)
	return "undefined";
    else if (o === true)
	return "true";
    else if (o === false)
	return "false";
    else if (typeof o === "number")
	return "num-" + o;
    else if (typeof o === "string")
	return "jsstr-" + o;
    else if (o.sc_getHash)
	return o.sc_getHash();
    else
	return sc_counterHash.call(o);
}
function sc_counterHash() {
    if (!this.sc_hash) {
	this.sc_hash = "hash-" + SC_HASH_COUNTER;
	SC_HASH_COUNTER++;
    }
    return this.sc_hash;
}

function sc_Trampoline() {
}

sc_Trampoline.prototype.restart = function() {
    while (true) {
	this.calls = this.MAX_TAIL_CALLs-1;
	var res = this.f.apply(this, this.args);
	if (res !== this)
	    return res;
    }
}

/*** META ((export bind-exit-lambda) (arity #t)) */
function sc_bindExitLambda(proc) {
    var escape_obj = new sc_BindExitException();
    var escape = function(res) {
	escape_obj.res = res;
	throw escape_obj;
    };
    try {
	return proc(escape);
    } catch(e) {
	if (e === escape_obj) {
	    return e.res;
	}
	throw e;
    }
}
function sc_BindExitException() {
    this._internalException = true;
}

var SC_SCM2JS_GLOBALS = new Object();

var SC_TAIL_OBJECT = new sc_Trampoline();  // (used in runtime_callcc.)
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
/*=====================================================================*/
/*    Author      :  Florian Loitsch                                   */
/*    Copyright   :  2007-11 Florian Loitsch, see LICENSE file         */
/*    -------------------------------------------------------------    */
/*    This file is part of Scheme2Js.                                  */
/*                                                                     */
/*   Scheme2Js is distributed in the hope that it will be useful,      */
/*   but WITHOUT ANY WARRANTY; without even the implied warranty of    */
/*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     */
/*   LICENSE file for more details.                                    */
/*=====================================================================*/

function sc_String(s) {
    this.val = s;
}
sc_String.prototype.toString = function() {
    return this.val;
};
sc_String.prototype.sc_getHash = function() {
    return "str-" + this.val;
};
sc_String.prototype.sc_toWriteString = function() {
    return '"' + sc_escapeWriteString(this.val) + '"';
};

// Keywords
function sc_Keyword(str) {
    var cached = sc_Keyword.lazy[str];

    if (cached)
	return cached;

    sc_Keyword.lazy[str] = this;
    this.val = str;
    // add return so FF does not complain.
    return undefined;
}
sc_Keyword.lazy = new Object;

sc_Keyword.prototype.toString = function() {
    return ":" + this.val;
};

/*** META ((export #t)
           (arity #t)
           (type bool)
           (peephole (postfix " instanceof sc_Keyword")))
*/
function sc_isKeyword(o) {
    return (o instanceof sc_Keyword);
}



/*** META ((export #t)
           (arity #t)
           (peephole (hole 1 "new sc_String(" s ")")))
*/
function sc_jsstring2string(s) {
    return new sc_String(s);
}

/*** META ((export #t)
           (arity #t)
           (peephole (id)))
*/
function sc_jsstring2symbol(s) {
    return s;
}

/*** META ((export #t)
           (arity #t)
           (peephole (string2jsstring_mutable)))
*/
function sc_string2jsstring(s) {
    return s.val;
}

/*** META ((export #t)
           (arity #t)
           (peephole (id)))
*/
function sc_symbol2jsstring(s) {
    return s;
}

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".val")))
*/
function sc_keyword2jsstring(o) {
    return o.val;
}

/*** META ((export #t)
           (arity #t)
           (peephole (hole 1 "new sc_Keyword(" s ")")))
*/
function sc_jsstring2keyword(s) {
    return new sc_Keyword(s);
}

/*** META ((export #t) (arity -1)) */
var sc_gensym = function() {
    var counter = 1000;
    return function(sym) {
	counter++;
	if (!sym) sym = "";
	return "s" + counter + "~" + sym + "^sC-GeNsYm ";
    };
}();

/*** META ((export #t)
           (arity #t)
           (type bool))
*/
function sc_isEqual(o1, o2) {
    return ((o1 === o2) ||
	    (sc_isPair(o1) && sc_isPair(o2)
	     && sc_isPairEqual(o1, o2, sc_isEqual)) ||
	    (sc_isVector(o1) && sc_isVector(o2)
	     && sc_isVectorEqual(o1, o2, sc_isEqual)) ||
	    (sc_isString(o1) && sc_isString(o2)
	     && sc_isStringEqual(o1, o2)));
}

/*** META ((export number->symbol integer->symbol)
           (arity -2)
           (peephole (prefix "''+")))
           ;; peephole will only apply if no radix is given.
*/
var sc_number2symbol = sc_number2jsstring;

/*** META ((export number->string integer->string)
           (arity -2)
           (peephole (hole 1 "new sc_String(''+" x ")")))
           ;; peephole will only apply if no radix is given.
*/
function sc_number2string(x, radix) {
    return new sc_String(sc_number2jsstring(x, radix));
}

/*** META ((export #t) (arity -2)) */
var sc_symbol2number = sc_jsstring2number;

/*** META ((export #t) (arity -2)) */
function sc_string2number(s, radix) {
    return sc_symbol2number(s.val, radix);
}

/*** META ((export #t) (arity -2)
           (peephole (hole 2 "parseInt(" s "," radix ")")))
*/	   
function sc_string2integer(s, radix) {
    return parseInt(s.val, radix);
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "parseFloat(" s ")")))
*/	   
function sc_string2real(s) {
    return parseFloat(s.val);
}

/*** META ((export #t)
           (arity #t)
	   (type bool)
           (peephole (hole 1 "typeof " s " === 'string'")))
*/
function sc_isSymbol(s) {
    return (typeof s === "string");
}

/*** META ((export #t)
           (peephole (hole 1 "new sc_String(" s ")")))
*/
function sc_symbol2string(s) {
    return new sc_String(s);
}

/*** META ((export string->symbol)
           (arity #t)
           (peephole (string2symbol_mutable)))
*/
function sc_string2symbol(s) {
    return s.val;
}

/*** META ((export #t)
           (arity -1)
           (peephole (infix 0 #f "+" "''")))
*/
function sc_symbolAppend() {
    return "".concat.apply("", arguments);
}

/*** META ((export #t)
           (arity #t)
           (peephole (hole "new sc_String(" c ".val)")))
*/
function sc_char2string(c) { return new sc_String(c.val); }

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".val")))
*/
function sc_char2symbol(c) { return c.val; }

/*** META ((export #t)
           (arity #t)
           (type bool)
           (peephole (postfix " instanceof sc_String")))
*/
function sc_isString(s) { return (s instanceof sc_String); }

/*** META ((export #t) (arity -2)) */
function sc_makeString(k, c) {
    return new sc_String(sc_makejsString(k, c));
}


/*** META ((export #t) (arity -1)) */
function sc_string() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return new sc_String("".concat.apply("", arguments));
}

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".val.length"))) */
function sc_stringLength(s) { return s.val.length; }

/*** META ((export #t) (arity #t)) */
function sc_stringRef(s, k) {
    return new sc_Char(s.val.charAt(k));
}

/*** META ((export #t) (arity #t)) */
function sc_stringSetBang(s, k, c) {
    var start = s.val.slice(0, k);
    var end = s.val.slice(k+1);
    s.val = start.concat(c.val, end);
}

/*** META ((export string=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val === " str2 ".val")))
*/
var sc_isStringEqual = sc_isCharStringEqual;
/*** META ((export string<?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val < " str2 ".val")))
*/
var sc_isStringLess = sc_isCharStringLess;
/*** META ((export string>?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val > " str2 ".val")))
*/
var sc_isStringGreater = sc_isCharStringGreater;
/*** META ((export string<=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val <= " str2 ".val")))
*/
var sc_isStringLessEqual = sc_isCharStringLessEqual;
/*** META ((export string>=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val >= " str2 ".val")))
*/
var sc_isStringGreaterEqual = sc_isCharStringGreaterEqual;
/*** META ((export string-ci=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() === " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIEqual = sc_isCharStringCIEqual;
/*** META ((export string-ci<?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() < " str2 ".val.toLowerCase()")))
*/
var sc_isStringCILess = sc_isCharStringCILess;
/*** META ((export string-ci>?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() > " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIGreater = sc_isCharStringCIGreater;
/*** META ((export string-ci<=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() <= " str2 ".val.toLowerCase()")))
*/
var sc_isStringCILessEqual = sc_isCharStringCILessEqual;
/*** META ((export string-ci>=?)
           (arity 2)
           (type bool)
           (peephole (hole 2 str1 ".val.toLowerCase() >= " str2 ".val.toLowerCase()")))
*/
var sc_isStringCIGreaterEqual = sc_isCharStringCIGreaterEqual;


/*** META ((export string-contains)
           (arity -3)
	   (type bool))
*/
function sc_stringContains(s1,s2,start) {
   return s1.val.indexOf(s2.val,start ? start : 0) >= 0;
}

/*** META ((export string-contains-ci)
           (arity -3)
	   (type bool))
*/
function sc_stringCIContains(s1,s2,start) {
   return s1.val.toLowerCase().indexOf(s2.val.toLowerCase(),start ? start : 0) >= 0;
}

/*** META ((export #t)
           (arity -2))
*/
function sc_substring(s, start, end) {
   return s.val.substring(start, (!end || end < 0) ? s.length : end);
}

/*** META ((export #t)
           (arity #t)
           (peephole (hole 3 "new sc_String(" s ".val.substring(" start ", " end "))")))
*/
function sc_substring(s, start, end) {
    return new sc_String(s.val.substring(start, end));
}

/*** META ((export #t) (arity -4))
*/
function sc_isSubstring_at(s1, s2, i, len) {
    var str1 = s1.val;
    var str2 = s2.val;
    if (!len) len = str2.length;
    else if (str2.length < len) return false;
    if (str1.length < len + i) return false;
    return str2.substring(0, len) == str1.substring(i, i+len);
}

/*** META ((export substring=?)
           (arity #t))
*/
function sc_isSubstring(s1, s2, len) {
    if (s1.val.length < len) return false;
    if (s2.val.length < len) return false;
    return s2.val.substring(0, len) == s1.val.substring(0, len);
}

/*** META ((export #t) (arity -1)
           (peephole (stringAppend_mutable)))
*/
function sc_stringAppend() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return new sc_String("".concat.apply("", arguments));
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "sc_jsstring2list(" s ".val)")))
*/
function sc_string2list(s) {
    return sc_jsstring2list(s.val);
}

/*** META ((export list->string) (arity #t)
           (peephole (hole 1 "new sc_String(sc_list2jsstring(" l "))")))
*/
function sc_list2string(l) {
    return new sc_String(sc_list2jsstring(l));
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_String(" s ".val)")))
*/
function sc_stringCopy(s) {
    return new sc_String(s.val);
}


/*** META ((export #t) (arity #t)) */
function sc_stringFillBang(s, c) {
    s.val = sc_makeJSStringOfLength(s.val.length, c.val);
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_String(" o ".val)")))
*/
function sc_keyword2string(o) {
    return new sc_String(o.val);
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "new sc_Keyword(" o ".val)")))
*/
function sc_string2keyword(o) {
    return new sc_Keyword(o.val);
}

/*** META ((export #t) (arity #t)
           (peephole (hole 2 1 ".val.indexOf(" 0 ".val) === 0")))
*/
function sc_isStringPrefix(cs1, cs2) {
    return cs2.val.indexOf(cs1.val) === 0;
}

/*** META ((export #t) (arity #t)) */
function sc_isStringSuffix(cs1, cs2) {
    var s1 = cs1.val;
    var s2 = cs2.val;
    var tmp = s2.lastIndexOf(s1);
    return tmp !== false && tmp >= 0 && tmp === s2.length - s1.length;
}

/*** META ((export #t) (arity #t)) */
function sc_stringSplit(s, sep) {
    if (sep.val.length === 1)
	return sc_vector2list(s.val.split(sep.val));
    return sc_vector2list(s.val.split(sc_pregexpCreateCharsetMatcher(sep.val)));
}

/*** META ((export #t) (arity -3)) */
function sc_stringIndex(s, cset, start) {
   var res;
   if (!start) start = 0;
   
   if (cset instanceof sc_Char) {
      res = s.val.indexOf(sc_char2string(cset), start);
      return res >= 0 ? res : false;
   }
   if (cset.val.length == 1) {
      res = s.val.indexOf(cset.val, start);
      return res >= 0 ? res : false;
   } else {
      for (var i = start; i < s.val.length; i++ ) {
	 if (cset.val.indexOf(s.val.charAt(i)))
	    return i;
      }

      return false;
   }
}

/*** META ((export #t) (arity -3)) */
function sc_stringIndexRight(s, cset, start) {
   var res;
   if (!start) start = s.val.length - 1;
   
   if (cset instanceof sc_Char) {
      res = s.val.lastIndexof(sc_char2string(cset), start);
      return res >= 0 ? res : false;
   }
   if (cset.val.length == 1) {
      res = s.val.lastIndexOf(cset.val, start);
      return res >= 0 ? res : false;
   } else {
      for (var i = start; i >= 0; i-- ) {
	 if (cset.val.indexOf(s.val.charAt(i)))
	    return i;
      }

      return false;
   }
}

/*** META ((export #t) (arity 1)) */
function sc_string_downcase(s) {
   return new sc_String(s.val.toLowerCase());
}

/*** META ((export #t) (arity 1)) */
function sc_string_downcase_bang(s) {
   s.val = s.val.toLowerCase();
   return s;
}

/*** META ((export #t) (arity 1)) */
function sc_string_upcase(s) {
   return new sc_String(s.val.toUpperCase());
}

/*** META ((export #t) (arity 1)) */
function sc_string_upcase_bang(s) {
   s.val = s.val.toUpperCase();
   return s;
}

/*** META ((export #t) (arity 1)) */
function sc_string_capitalize(s) {
   return new sc_String(s.val.replace(/\w+/g, function (w) {
	    return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
	 }));
}

/*** META ((export #t) (arity 1)) */
function sc_string_capitalize_bang(s) {
   s.val = s.val.replace(/\w+/g, function (w) {
	 return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
      });
   return s;
}

/*** META ((export #t) (arity 1)) */
function sc_prefix(s) {
   var i = s.val.lastIndexOf(".");
   return i ? s.val.substring(0, i) : s;
}   

/*** META ((export #t) (arity 1)) */
function sc_suffix(s) {
   var i = s.val.lastIndexOf(".");
   return i ? s.val.substring(i+1,i.length) : s;
}
/*=====================================================================*/
/*    Author      :  Florian Loitsch                                   */
/*    Copyright   :  2007-11 Florian Loitsch, see LICENSE file         */
/*    -------------------------------------------------------------    */
/*    This file is part of Scheme2Js.                                  */
/*                                                                     */
/*   Scheme2Js is distributed in the hope that it will be useful,      */
/*   but WITHOUT ANY WARRANTY; without even the implied warranty of    */
/*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     */
/*   LICENSE file for more details.                                    */
/*=====================================================================*/

var sc_SYMBOL_PREFIX = "\uEBAC";
var sc_KEYWORD_PREFIX = "\uEBAD";

/*** META ((export #t) (arity #t)
           (peephole (id))) */
function sc_jsstring2string(s) {
    return s;
}

/*** META ((export #t) (arity #t)
           (peephole (prefix "'\\uEBAC' +")))
*/
function sc_jsstring2symbol(s) {
    return sc_SYMBOL_PREFIX + s;
}

/*** META ((export #t) (arity #t)
           (peephole (id)))
*/
function sc_string2jsstring(s) {
    return s;
}

/*** META ((export #t) (arity #t)
           (peephole (symbol2jsstring_immutable)))
*/
function sc_symbol2jsstring(s) {
    return s.slice(1);
}

/*** META ((export #t) (arity #t)
           (peephole (postfix ".slice(1)")))
*/
function sc_keyword2jsstring(k) {
    return k.slice(1);
}

/*** META ((export #t) (arity #t)
           (peephole (prefix "'\\uEBAD' +")))
*/
function sc_jsstring2keyword(s) {
    return sc_KEYWORD_PREFIX + s;
}

/*** META ((export #t)
           (arity #t)
           (type bool))
*/
function sc_isKeyword(s) {
    return (typeof s === "string") &&
	(s.charAt(0) === sc_KEYWORD_PREFIX);
}


/*** META ((export #t) (arity -1)) */
var sc_gensym = function() {
    var counter = 1000;
    return function(sym) {
	counter++;
	if (!sym) sym = sc_SYMBOL_PREFIX;
	return sym + "s" + counter + "~" + "^sC-GeNsYm ";
    };
}();


/*** META ((export #t)
           (arity #t)
           (type bool))
*/
function sc_isEqual(o1, o2) {
    return ((o1 === o2) ||
	    (sc_isPair(o1) && sc_isPair(o2)
	     && sc_isPairEqual(o1, o2, sc_isEqual)) ||
	    (sc_isVector(o1) && sc_isVector(o2)
	     && sc_isVectorEqual(o1, o2, sc_isEqual)));
}

/*** META ((export number->symbol integer->symbol) (arity -2)) */
function sc_number2symbol(x, radix) {
    return sc_SYMBOL_PREFIX + sc_number2jsstring(x, radix);
}
    
/*** META ((export number->string integer->string) (arity -2)) */
var sc_number2string = sc_number2jsstring;

/*** META ((export #t) (arity -2)) */
function sc_symbol2number(s, radix) {
    return sc_jsstring2number(s.slice(1), radix);
}

/*** META ((export #t) (arity -2)) */
var sc_string2number = sc_jsstring2number;

/*** META ((export #t) (arity -2)
           (peephole (hole 2 "parseInt(" s "," radix ")")))
*/
function sc_string2integer(s, radix) {
   return parseInt(s, radix);
}

/*** META ((export #t) (arity #t)
           (peephole (hole 1 "parseFloat(" s ")")))
*/
function sc_string2real(s) {
   return parseFloat(s);
}

/*** META ((export #t)
           (arity #t)
           (type bool))
*/
function sc_isSymbol(s) {
    return (typeof s === "string") &&
	(s.charAt(0) === sc_SYMBOL_PREFIX);
}

/*** META ((export #t)
           (arity #t)
           (peephole (symbol2string_immutable)))
*/
function sc_symbol2string(s) {
    return s.slice(1);
}

/*** META ((export #t)
           (arity #t)
           (peephole (prefix "'\\uEBAC' +")))
*/
function sc_string2symbol(s) {
    return sc_SYMBOL_PREFIX + s;
}

/*** META ((export symbol-append)
           (arity -1)
           (peephole (symbolAppend_immutable)))
*/
function sc_symbolAppend() {
    var res = sc_SYMBOL_PREFIX;
    for (var i = 0; i < arguments.length; i++)
	res += arguments[i].slice(1);
    return res;
}

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".val")))
*/
function sc_char2string(c) { return c.val; }

/*** META ((export #t)
           (arity #t)
           (peephole (hole 1 "'\\uEBAC' + " c ".val")))
*/
function sc_char2symbol(c) { return sc_SYMBOL_PREFIX + c.val; }

/*** META ((export #t)
           (arity #t)
           (type bool))
*/
function sc_isString(s) {
    return (typeof s === "string") &&
	(s.charAt(0) !== sc_SYMBOL_PREFIX);
}

/*** META ((export #t) (arity -2)) */
var sc_makeString = sc_makejsString;


/*** META ((export #t) (arity -1)) */
function sc_string() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return "".concat.apply("", arguments);
}

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".length")))
*/
function sc_stringLength(s) { return s.length; }

/*** META ((export #t) (arity #t)) */
function sc_stringRef(s, k) {
    return new sc_Char(s.charAt(k));
}

/* there's no stringSet in the immutable version
function sc_stringSet(s, k, c)
*/


/*** META ((export string=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function sc_isStringEqual(s1, s2) {
    return s1 === s2;
}
/*** META ((export string<?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
function sc_isStringLess(s1, s2) {
    return s1 < s2;
}
/*** META ((export string>?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 " > " str2)))
*/
function sc_isStringGreater(s1, s2) {
    return s1 > s2;
}
/*** META ((export string<=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 " <= " str2)))
*/
function sc_isStringLessEqual(s1, s2) {
    return s1 <= s2;
}
/*** META ((export string>=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 " >= " str2)))
*/
function sc_isStringGreaterEqual(s1, s2) {
    return s1 >= s2;
}
/*** META ((export string-ci=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
function sc_isStringCIEqual(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}
/*** META ((export string-ci<?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function sc_isStringCILess(s1, s2) {
    return s1.toLowerCase() < s2.toLowerCase();
}
/*** META ((export string-ci>?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreater(s1, s2) {
    return s1.toLowerCase() > s2.toLowerCase();
}
/*** META ((export string-ci<=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function sc_isStringCILessEqual(s1, s2) {
    return s1.toLowerCase() <= s2.toLowerCase();
}
/*** META ((export string-ci>=?)
           (arity #t)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreaterEqual(s1, s2) {
    return s1.toLowerCase() >= s2.toLowerCase();
}

/*** META ((export string-contains)
           (arity -3)
	   (type bool))
*/
function sc_stringContains(s1,s2,start) {
   return s1.indexOf(s2,start ? start : 0) >= 0;
}

/*** META ((export string-contains-ci)
           (arity -3)
	   (type bool))
*/
function sc_stringCIContains(s1,s2,start) {
   return s1.toLowerCase().indexOf(s2.toLowerCase(),start ? start : 0) >= 0;
}

/*** META ((export #t)
           (arity -2))
*/
function sc_substring(s, start, end) {
   return s.substring(start, (!end || end < 0) ? s.length : end);
}

/*** META ((export #t) (arity -4))
*/
function sc_isSubstring_at(str1, str2, i, len) {
    if (!len) len = str2.length;
    else if (str2.length < len) return false;
    if (str1.length < len + i) return false;
    return str2.substring(0, len) == str1.substring(i, i+len);
    return s2 == s1.substring(i, i+ s2.length);
}

/*** META ((export substring=?) (arity #t))
*/
function sc_isSubstring(s1, s2, len) {
    if (s1.length < len) return false;
    if (s2.length < len) return false;
    return s2.substring(0, len) == s1.substring(0, len);
}

/*** META ((export #t)
           (arity -1)
           (peephole (infix 0 #f "+" "''")))
*/
function sc_stringAppend() {
    return "".concat.apply("", arguments);
}

/*** META ((export #t) (arity 1)) */
var sc_string2list = sc_jsstring2list;

/*** META ((export #t) (arity 1)) */
var sc_list2string = sc_list2jsstring;

/*** META ((export #t)
           (arity #t)
           (peephole (id)))
*/
function sc_stringCopy(s) {
    return s;
}

/* there's no string-fill in the immutable version
function sc_stringFill(s, c)
*/

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".slice(1)")))
*/
function sc_keyword2string(o) {
    return o.slice(1);
}

/*** META ((export #t)
           (arity #t)
           (peephole (prefix "'\\uEBAD' +")))
*/
function sc_string2keyword(o) {
    return sc_KEYWORD_PREFIX + o;
}

String.prototype.sc_toDisplayString = function() {
    if (this.charAt(0) === sc_SYMBOL_PREFIX)
	// TODO: care for symbols with spaces (escape-chars symbols).
	return this.slice(1);
    else if (this.charAt(0) === sc_KEYWORD_PREFIX)
	return ":" + this.slice(1);
    else
	return this.toString();
};

String.prototype.sc_toWriteString = function() {
    if (this.charAt(0) === sc_SYMBOL_PREFIX)
	// TODO: care for symbols with spaces (escape-chars symbols).
	return this.slice(1);
    else if (this.charAt(0) === sc_KEYWORD_PREFIX)
	return ":" + this.slice(1);
    else
	return '"' + sc_escapeWriteString(this) + '"';
};

/*** META ((export #t)
           (arity #t)
           (peephole (hole 2 1 ".indexOf(" 0 ") === 0")))
*/
function sc_isStringPrefix(cs1, cs2) {
    return cs2.indexOf(cs1) === 0;
}

/*** META ((export #t) (arity #t)) */
function sc_isStringSuffix(cs1, cs2) {
    var tmp = cs2.lastIndexOf(cs1);
    return tmp !== false && tmp >= 0 && tmp === cs2.length - cs1.length;
}

/*** META ((export #t) (arity #t)) */
function sc_stringSplit(s, sep) {
    if (sep.length === 1)
	return sc_vector2list(s.split(sep));
    return sc_vector2list(s.split(sc_pregexpCreateCharsetMatcher(sep)));
}

/*** META ((export #t) (arity -3)) */
function sc_stringIndex(s, cset, start) {
   var res;
   if (!start) start = 0;

   if (cset instanceof sc_Char) {
      res = s.indexOf(sc_char2string(cset), start);
      return res >= 0 ? res : false;
   }
   if (cset.length == 1) {
      res = s.indexOf(cset, start);
      return res >= 0 ? res : false;
   } else {
      for (var i = start; i < s.length; i++ ) {
	 if (cset.indexOf(s.charAt(i)))
	    return i;
      }

      return false;
   }
}

/*** META ((export #t) (arity -3)) */
function sc_stringIndexRight(s, cset, start) {
   var res;
   if (!start) start = s.length - 1;
   
   if (cset instanceof sc_Char) {
      res = s.lastIndexof(sc_char2string(cset), start);
      return res >= 0 ? res : false;
   }
   if (cset.length == 1) {
      res = s.lastIndexOf(cset, start);
      return res >= 0 ? res : false;
   } else {
      for (var i = start; i >= 0; i-- ) {
	 if (cset.indexOf(s.charAt(i)))
	    return i;
      }

      return false;
   }
}

/*** META ((export #t) (arity 1)) */
function sc_string_downcase(s) {
   return s.toLowerCase();
}

/*** META ((export #t) (arity 1)) */
function sc_string_upcase(s) {
   return s.toUpperCase();
}

/*** META ((export #t) (arity 1)) */
function sc_string_capitalize(s) {
   return s.replace(/\w+/g, function (w) {
	 return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
      });
}

/*** META ((export #t) (arity 1)) */
function sc_prefix(s) {
   var i = s.lastIndexOf(".");
   return i ? s.substring(0, i) : s;
}   

/*** META ((export #t) (arity 1)) */
function sc_suffix(s) {
   var i = s.lastIndexOf(".");
   return i ? s.substring(i+1,i.length) : s;
}
/*=====================================================================*/
/*    Author      :  Florian Loitsch                                   */
/*    Copyright   :  2007-11 Florian Loitsch, see LICENSE file         */
/*    -------------------------------------------------------------    */
/*    This file is part of Scheme2Js.                                  */
/*                                                                     */
/*   Scheme2Js is distributed in the hope that it will be useful,      */
/*   but WITHOUT ANY WARRANTY; without even the implied warranty of    */
/*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     */
/*   LICENSE file for more details.                                    */
/*=====================================================================*/

// ======================== I/O =======================

/*------------------------------------------------------------------*/

function sc_EOF() {
}
var SC_EOF_OBJECT = new sc_EOF();

function sc_Port() {
}

/* --------------- Input ports -------------------------------------*/

function sc_InputPort() {
}
sc_InputPort.prototype = new sc_Port();

sc_InputPort.prototype.peekChar = function() {
    if (!("peeked" in this))
	this.peeked = this.getNextChar();
    return this.peeked;
}
sc_InputPort.prototype.readChar = function() {
    var tmp = this.peekChar();
    delete this.peeked;
    return tmp;
}
sc_InputPort.prototype.isCharReady = function() {
    return true;
}
sc_InputPort.prototype.close = function() {
    // do nothing
}

/* .............. String port ..........................*/
function sc_ErrorInputPort() {
};
sc_ErrorInputPort.prototype = new sc_InputPort();
sc_ErrorInputPort.prototype.getNextChar = function() {
    throw "can't read from error-port.";
};
sc_ErrorInputPort.prototype.isCharReady = function() {
    return false;
};
    

/* .............. String port ..........................*/

function sc_StringInputPort(jsStr) {
    // we are going to do some charAts on the str.
    // instead of recreating all the time a String-object, we
    // create one in the beginning. (not sure, if this is really an optim)
    this.str = new String(jsStr);
    this.pos = 0;
}
sc_StringInputPort.prototype = new sc_InputPort();
sc_StringInputPort.prototype.getNextChar = function() {
    if (this.pos >= this.str.length)
	return SC_EOF_OBJECT;
    return this.str.charAt(this.pos++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function sc_Token(type, val, pos) {
    this.type = type;
    this.val = val;
    this.pos = pos;
}
sc_Token.EOF = 0/*EOF*/;
sc_Token.OPEN_PAR = 1/*OPEN_PAR*/;
sc_Token.CLOSE_PAR = 2/*CLOSE_PAR*/;
sc_Token.OPEN_BRACE = 3/*OPEN_BRACE*/;
sc_Token.CLOSE_BRACE = 4/*CLOSE_BRACE*/;
sc_Token.OPEN_BRACKET = 5/*OPEN_BRACKET*/;
sc_Token.CLOSE_BRACKET = 6/*CLOSE_BRACKET*/;
sc_Token.WHITESPACE = 7/*WHITESPACE*/;
sc_Token.QUOTE = 8/*QUOTE*/;
sc_Token.ID = 9/*ID*/;
sc_Token.DOT = 10/*DOT*/;
sc_Token.STRING = 11/*STRING*/;
sc_Token.NUMBER = 12/*NUMBER*/;
sc_Token.ERROR = 13/*ERROR*/;
sc_Token.VECTOR_BEGIN = 14/*VECTOR_BEGIN*/;
sc_Token.TRUE = 15/*TRUE*/;
sc_Token.FALSE = 16/*FALSE*/;
sc_Token.UNSPECIFIED = 17/*UNSPECIFIED*/;
sc_Token.REFERENCE = 18/*REFERENCE*/;
sc_Token.STORE = 19/*STORE*/;
sc_Token.CHAR = 20/*CHAR*/;

var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + "!$%*+-./:<=>?@^_~";
function sc_Tokenizer(port) {
    this.port = port;
}
sc_Tokenizer.prototype.peekToken = function() {
    if (this.peeked)
	return this.peeked;
    var newToken = this.nextToken();
    this.peeked = newToken;
    return newToken;
};
sc_Tokenizer.prototype.readToken = function() {
    var tmp = this.peekToken();
    delete this.peeked;
    return tmp;
};
sc_Tokenizer.prototype.nextToken = function() {
    var port = this.port;
    
    function isNumberChar(c) {
	return (c >= "0" && c <= "9");
    };
    function isIdOrNumberChar(c) {
	return SC_ID_CLASS.indexOf(c) != -1 || // ID-char
	    (c >= "0" && c <= "9");
    }
    function isWhitespace(c) {
	return c === " " || c === "\r" || c === "\n" || c === "\t" || c === "\f";
    };
    function isWhitespaceOrEOF(c) {
	return isWhitespace(c) || c === SC_EOF_OBJECT;
    };

    function readString() {
	res = "";
	while (true) {
	    var c = port.readChar();
	    switch (c) {
	    case '"':
		return new sc_Token(11/*STRING*/, res);
	    case "\\":
		var tmp = port.readChar();
		switch (tmp) {
		case '0': res += "\0"; break;
		case 'a': res += "\a"; break;
		case 'b': res += "\b"; break;
		case 'f': res += "\f"; break;
		case 'n': res += "\n"; break;
		case 'r': res += "\r"; break;
		case 't': res += "\t"; break;
		case 'v': res += "\v"; break;
		case '"': res += '"'; break;
		case '\\': res += '\\'; break;
		case 'x':
		    /* hexa-number */
		    var nb = 0;
		    while (true) {
			var hexC = port.peekChar();
			if (hexC >= '0' && hexC <= '9') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - '0'.charCodeAt(0);
			} else if (hexC >= 'a' && hexC <= 'f') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'a'.charCodeAt(0);
			} else if (hexC >= 'A' && hexC <= 'F') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'A'.charCodeAt(0);
			} else {
			    // next char isn't part of hex.
			    res += String.fromCharCode(nb);
			    break;
			}
		    }
		    break;
		default:
		    if (tmp === SC_EOF_OBJECT) {
			return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		    }
		    res += tmp;
		}
		break;
	    default:
		if (c === SC_EOF_OBJECT) {
		    return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		}
		res += c;
	    }
	}
    };
    function readIdNumberOrKeyword(firstChar) {
	var res = firstChar;
	while (isIdOrNumberChar(port.peekChar()))
	    res += port.readChar();
	if (isNaN(res)) {
	    if (res.length > 1) {
		colonCode = ':'.charCodeAt(0);
		if (res.charCodeAt(0) == colonCode) {
		    if (res.charCodeAt(1) != colonCode) {
			return new sc_Token(21/*KEYWORD*/, res.substring(1, res.length));
		    }
		} else if (res.charCodeAt(res.length - 1) == colonCode &&
			   res.charCodeAt(res.length - 2) != colonCode) {
		    return new sc_Token(21/*KEYWORD*/, res.substring(0, res.length - 1));
		}
	    }
	    return new sc_Token(9/*ID*/, res);
	} else {
	    return new sc_Token(12/*NUMBER*/, res - 0);
	}
    };
    
    function skipWhitespaceAndComments() {
	var done = false;
	while (!done) {
	    done = true;
	    while (isWhitespace(port.peekChar()))
		port.readChar();
	    if (port.peekChar() === ';') {
		port.readChar();
		done = false;
		while (true) {
		    curChar = port.readChar();
		    if (curChar === SC_EOF_OBJECT ||
			curChar === '\n')
			break;
		}
	    }
	}
    };
    
    function readDot() {
	if (isWhitespace(port.peekChar()))
	    return new sc_Token(10/*DOT*/);
	else
	    return readIdNumberOrKeyword(".");
    };

    function readSharp() {
	var c = port.readChar();
	if (isWhitespace(c))
	    return new sc_Token(13/*ERROR*/, "bad #-pattern0.");

	// reference
	if (isNumberChar(c)) {
	    var nb = c - 0;
	    while (isNumberChar(port.peekChar()))
		nb = nb*10 + (port.readChar() - 0);
	    switch (port.readChar()) {
	    case '#':
		return new sc_Token(18/*REFERENCE*/, nb);
	    case '=':
		return new sc_Token(19/*STORE*/, nb);
	    default:
		return new sc_Token(13/*ERROR*/, "bad #-pattern1." + nb);
	    }
	}

	if (c === "(")
	    return new sc_Token(14/*VECTOR_BEGIN*/);
	
	if (c === "\\") { // character
	    var tmp = ""
	    while (!isWhitespaceOrEOF(port.peekChar()))
		tmp += port.readChar();
	    switch (tmp.length) {
	    case 0: // it's escaping a whitespace char:
		if (sc_isEOFObject(port.peekChar))
		    return new sc_Token(13/*ERROR*/, "bad #-pattern2.");
		else
		    return new sc_Token(20/*CHAR*/, port.readChar());
	    case 1:
		return new sc_Token(20/*CHAR*/, tmp);
	    default:
		var entry = sc_Char.readable2char[tmp.toLowerCase()];
		if (entry)
		    return new sc_Token(20/*CHAR*/, entry);
		else
		    return new sc_Token(13/*ERROR*/, "unknown character description: #\\" + tmp);
	    }
	}

	// some constants (#t, #f, #unspecified)
	var res;
	var needing;
	switch (c) {
	case 't': res = new sc_Token(15/*TRUE*/, true); needing = ""; break;
	case 'f': res = new sc_Token(16/*FALSE*/, false); needing = ""; break;
	case 'u': res = new sc_Token(17/*UNSPECIFIED*/, undefined); needing = "nspecified"; break;
	default:
	    return new sc_Token(13/*ERROR*/, "bad #-pattern3: " + c);
	}
	while(true) {
	    c = port.peekChar();
	    if ((isWhitespaceOrEOF(c) || c === ')') &&
		needing == "")
		return res;
	    else if (isWhitespace(c) || needing == "")
		return new sc_Token(13/*ERROR*/, "bad #-pattern4 " + c + " " + needing);
	    else if (needing.charAt(0) == c) {
		port.readChar(); // consume
		needing = needing.slice(1);
	    } else
		return new sc_Token(13/*ERROR*/, "bad #-pattern5");
	}
	
    };

    skipWhitespaceAndComments();
    var curChar = port.readChar();
    if (curChar === SC_EOF_OBJECT)
	return new sc_Token(0/*EOF*/, curChar);
    switch (curChar)
    {
    case " ":
    case "\n":
    case "\t":
	return readWhitespace();
    case "(":
	return new sc_Token(1/*OPEN_PAR*/);
    case ")":
	return new sc_Token(2/*CLOSE_PAR*/);
    case "{":
	return new sc_Token(3/*OPEN_BRACE*/);
    case "}":
	return new sc_Token(4/*CLOSE_BRACE*/);
    case "[":
	return new sc_Token(5/*OPEN_BRACKET*/);
    case "]":
	return new sc_Token(6/*CLOSE_BRACKET*/);
    case "'":
	return new sc_Token(8/*QUOTE*/);
    case "#":
	return readSharp();
    case ".":
	return readDot();
    case '"':
	return readString();
    default:
	if (isIdOrNumberChar(curChar))
	    return readIdNumberOrKeyword(curChar);
	throw "unexpected character: " + curChar;
    }
};

function sc_Reader(tokenizer) {
    this.tokenizer = tokenizer;
    this.backref = new Array();
}
sc_Reader.prototype.read = function() {
    function readList(listBeginType) {
	function matchesPeer(open, close) {
	    return open === 1/*OPEN_PAR*/ && close === 2/*CLOSE_PAR*/
	    	|| open === 3/*OPEN_BRACE*/ && close === 4/*CLOSE_BRACE*/
		|| open === 5/*OPEN_BRACKET*/ && close === 6/*CLOSE_BRACKET*/;
	};
	var res = null;

	while (true) {
	    var token = tokenizer.peekToken();
	    
	    switch (token.type) {
	    case 2/*CLOSE_PAR*/:
	    case 4/*CLOSE_BRACE*/:
	    case 6/*CLOSE_BRACKET*/:
		if (matchesPeer(listBeginType, token.type)) {
		    tokenizer.readToken(); // consume token
		    return sc_reverseBang(res);
		} else
		    throw "closing par doesn't match: " + listBeginType
			+ " " + listEndType;

	    case 0/*EOF*/:
		throw "unexpected end of file";

	    case 10/*DOT*/:
		tokenizer.readToken(); // consume token
		var cdr = this.read();
		var par = tokenizer.readToken();
		if (!matchesPeer(listBeginType, par.type))
		    throw "closing par doesn't match: " + listBeginType
			+ " " + par.type;
		else
		    return sc_reverseAppendBang(res, cdr);
		

	    default:
		res = sc_cons(this.read(), res);
	    }
	}
    };
    function readQuote() {
	return sc_cons("quote", sc_cons(this.read(), null));
    };
    function readVector() {
	// opening-parenthesis is already consumed
	var a = new Array();
	while (true) {
	    var token = tokenizer.peekToken();
	    switch (token.type) {
	    case 2/*CLOSE_PAR*/:
		tokenizer.readToken();
		return a;
		
	    default:
		a.push(this.read());
	    }
	}
    };

    function storeRefence(nb) {
	var tmp = this.read();
	this.backref[nb] = tmp;
	return tmp;
    };
	
    function readReference(nb) {
	if (nb in this.backref)
	    return this.backref[nb];
	else
	    throw "bad reference: " + nb;
    };
    
    var tokenizer = this.tokenizer;

    var token = tokenizer.readToken();

    // handle error
    if (token.type === 13/*ERROR*/)
	throw token.val;
    
    switch (token.type) {
    case 1/*OPEN_PAR*/:
    case 3/*OPEN_BRACE*/:
    case 5/*OPEN_BRACKET*/:
	return readList.call(this, token.type);
    case 8/*QUOTE*/:
	return readQuote.call(this);
    case 11/*STRING*/:
	return sc_jsstring2string(token.val);
    case 20/*CHAR*/:
	return new sc_Char(token.val);
    case 14/*VECTOR_BEGIN*/:
	return readVector.call(this);
    case 18/*REFERENCE*/:
	return readReference.call(this, token.val);
    case 19/*STORE*/:
	return storeRefence.call(this, token.val);
    case 9/*ID*/:
	return sc_jsstring2symbol(token.val);
    case 21/*KEYWORD*/:
	return sc_jsstring2keyword(token.val);
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 17/*UNSPECIFIED*/:
	return token.val;
    default:
	throw "unexpected token " + token.type + " " + token.val;
    }
};

/*** META ((export #t) (arity -1)) */
function sc_read(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var reader = new sc_Reader(new sc_Tokenizer(port));
    return reader.read();
}
/*** META ((export #t) (arity -1)) */
function sc_readChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.readChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}
/*** META ((export #t) (arity -1)) */
function sc_peekChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.peekChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}    
/*** META ((export #t)
           (arity -1)
           (type bool))
*/
function sc_isCharReady(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    return port.isCharReady();
}
/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".close()")))
*/
function sc_closeInputPort(p) {
    return p.close();
}

/*** META ((export #t)
           (arity #t)
           (type bool)
           (peephole (postfix " instanceof sc_InputPort")))
*/
function sc_isInputPort(o) {
    return (o instanceof sc_InputPort);
}

/*** META ((export eof-object?)
           (arity #t)
           (type bool)
           (peephole (postfix " === SC_EOF_OBJECT")))
*/
function sc_isEOFObject(o) {
    return o === SC_EOF_OBJECT;
}

/*** META ((export #t)
           (arity #t)
           (peephole (hole 0 "SC_DEFAULT_IN")))
*/
function sc_currentInputPort() {
    return SC_DEFAULT_IN;
}

/* ------------ file operations are not supported -----------*/
/*** META ((export #t) (arity #t)) */
function sc_callWithInputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t) (arity #t)) */
function sc_callWithOutputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t) (arity #t)) */
function sc_withInputFromFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t) (arity #t)) */
function sc_withOutputToFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t) (arity #t)) */
function sc_openInputFile(s) {
    throw "can't open " + s;
}

/*** META ((export #t) (arity #t)) */
function sc_openOutputFile(s) {
    throw "can't open " + s;
}

/* ----------------------------------------------------------------------------*/
/*** META ((export #t) (arity #t)) */
function sc_basename(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(i + 1, p.length);
   else
      return p;
}

/*** META ((export #t) (arity #t)) */
function sc_dirname(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(0, i);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t) (arity #t)) */
function sc_withInputFromPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_IN; // THREAD: shared var.
	SC_DEFAULT_IN = p;
	return thunk();
    } finally {
	SC_DEFAULT_IN = tmp;
    }
}

/*** META ((export #t) (arity #t)) */
function sc_withInputFromString(s, thunk) {
    return sc_withInputFromPort(new sc_StringInputPort(sc_string2jsstring(s)), thunk);
}

/*** META ((export #t) (arity #t)) */
function sc_withOutputToPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_OUT; // THREAD: shared var.
	SC_DEFAULT_OUT = p;
	return thunk();
    } finally {
	SC_DEFAULT_OUT = tmp;
    }
}

/*** META ((export #t) (arity #t)) */
function sc_withOutputToString(thunk) {
    var p = new sc_StringOutputPort();
    sc_withOutputToPort(p, thunk);
    return p.close();
}

/*** META ((export #t) (arity #t)) */
function sc_withOutputToProcedure(proc, thunk) {
    var t = function(s) { proc(sc_jsstring2string(s)); };
    return sc_withOutputToPort(new sc_GenericOutputPort(t), thunk);
}

/*** META ((export #t)
           (arity #t)           
           (peephole (hole 0 "new sc_StringOutputPort()")))
*/
function sc_openOutputString() {
    return new sc_StringOutputPort();
}

/*** META ((export #t) (arity #t)) */
function sc_openInputString(str) {
    return new sc_StringInputPort(sc_string2jsstring(str));
}

/* ----------------------------------------------------------------------------*/

function sc_OutputPort() {
}
sc_OutputPort.prototype = new sc_Port();
sc_OutputPort.prototype.appendJSString = function(obj) {
    /* do nothing */
}
sc_OutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_StringOutputPort() {
    this.res = "";
}
sc_StringOutputPort.prototype = new sc_OutputPort();
sc_StringOutputPort.prototype.appendJSString = function(s) {
    this.res += s;
}
sc_StringOutputPort.prototype.close = function() {
    return sc_jsstring2string(this.res);
}

/*** META ((export #t) (arity #t)) */
function sc_getOutputString(sp) {
    return sc_jsstring2string(sp.res);
}
    

function sc_ErrorOutputPort() {
}
sc_ErrorOutputPort.prototype = new sc_OutputPort();
sc_ErrorOutputPort.prototype.appendJSString = function(s) {
    console.error(s);
}
sc_ErrorOutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_GenericOutputPort(appendJSString, close) {
    this.appendJSString = appendJSString;
    if (close)
	this.close = close;
}
sc_GenericOutputPort.prototype = new sc_OutputPort();

/*** META ((export #t)
           (arity #t)
	   (type bool)
           (peephole (postfix " instanceof sc_OutputPort")))
*/
function sc_isOutputPort(o) {
    return (o instanceof sc_OutputPort);
}

/*** META ((export #t)
           (arity #t)
           (peephole (postfix ".close()")))
*/
function sc_closeOutputPort(p) {
    return p.close();
}

/* ------------------ write ---------------------------------------------------*/

/*** META ((export #t) (arity -2)) */
function sc_write(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toWriteString(o));
}

function sc_toWriteStringProcedure(o) {
   if ("sc_name" in o) {
      return "#<procedure " + sc_name + " " + (o.sc_location != "#f" ? o.sc_location : "") + ":" + sc_hash(o) + ">";
   } else {
      var n = o.toString().match( /function[ \t\n]+([_a-zA-Z0-9$]+)/ );
      
      return "#<procedure " + (n ? n[ 1 ] : "anonymous") + ":" + sc_hash(o) + ">";
   }
}

function sc_toWriteString(o) {
   if (o === null)
      return "()";
   if (o === true)
      return "#t";
   if (o === false)
      return "#f";
   if (o === undefined)
      return "#unspecified";
    // window is only declared inside browsers. Otherwise this.window should be undefined
   if (o === this.window)

      return "window";
   if (typeof o === 'function') {
      sc_toWriteStringProcedure(o);
   }
   if (o.sc_toWriteString)
      return o.sc_toWriteString();
   return o.toString();
}

function sc_escapeWriteString(s) {
    var res = "";
    var j = 0;
    for (i = 0; i < s.length; i++) {
	switch (s.charAt(i)) {
	case "\0": res += s.substring(j, i) + "\\0"; j = i + 1; break;
	case "\b": res += s.substring(j, i) + "\\b"; j = i + 1; break;
	case "\f": res += s.substring(j, i) + "\\f"; j = i + 1; break;
	case "\n": res += s.substring(j, i) + "\\n"; j = i + 1; break;
	case "\r": res += s.substring(j, i) + "\\r"; j = i + 1; break;
	case "\t": res += s.substring(j, i) + "\\t"; j = i + 1; break;
	case '"': res += s.substring(j, i) + '\\"'; j = i + 1; break;
	case "\\": res += s.substring(j, i) + "\\\\"; j = i + 1; break;
	default:
	    var c = s.charAt(i);
	    if ("\a" !== "a" && c == "\a") {
		res += s.substring(j, i) + "\\a"; j = i + 1; continue;
	    }
	    if ("\v" !== "v" && c == "\v") {
		res += s.substring(j, i) + "\\v"; j = i + 1; continue;
	    }
	    //if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
	    // CARE: Manuel is this OK with HOP?
	    if (s.charAt(i) < ' ') {
		/* non printable character and special chars */
		res += s.substring(j, i) + "\\x" + s.charCodeAt(i).toString(16);
		j = i + 1;
	    }
	    // else just let i increase...
	}
    }
    res += s.substring(j, i);
    return res;
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export #t) (arity -2)) */
function sc_display(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toDisplayString(o));
}

function sc_toDisplayString(o) {
    if (o === null)
	return "()";
    else if (o === true)
	return "#t";
    else if (o === false)
	return "#f";
    else if (o === undefined)
	return "#unspecified";
    // window is only declared inside browsers. Otherwise this.window should be undefined
    else if (o === this.window)
        return "window";
    else if (typeof o === 'function')
       return sc_toWriteStringProcedure(o);
    else if (o.sc_toDisplayString)
	return o.sc_toDisplayString();
    else
	return o.toString();
}

/* ------------------ newline ---------------------------------------------------*/

/*** META ((export #t) (arity -1)) */
function sc_newline(p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString("\n");
}
    
/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t) (arity -2)) */
function sc_writeChar(c, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(c.val);
}

/* ------------------ write/display-circle -----------------------------------------*/

/*** META ((export #t) (arity -2)) */
function sc_writeCircle(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toCircleString(o, sc_toWriteString));
}

/*** META ((export #t) (arity -2)) */
function sc_displayCircle(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toCircleString(o, sc_toDisplayString));
}

function sc_toCircleString(o, writeOrDisplay) {
    var symb = sc_gensym("writeCircle");
    var nbPointer = new Object();
    nbPointer.nb = 0;
    sc_prepCircle(o, symb, nbPointer);
    return sc_genToCircleString(o, symb, writeOrDisplay);
}

function sc_prepCircle(o, symb, nbPointer) {
    // TODO sc_Struct
    if (o instanceof sc_Pair ||
	o instanceof sc_Vector) {
	if (o[symb] !== undefined) {
	    // not the first visit.
	    o[symb]++;
	    // unless there is already a number, assign one.
	    if (!o[symb + "nb"]) o[symb + "nb"] = nbPointer.nb++;
	    return;
	}
	o[symb] = 0;
	if (o instanceof sc_Pair) {
	    sc_prepCircle(o.car, symb, nbPointer);
	    sc_prepCircle(o.cdr, symb, nbPointer);
	} else {
	    for (var i = 0; i < o.length; i++)
		sc_prepCircle(o[i], symb, nbPointer);
	}
    }
}

function sc_genToCircleString(o, symb, writeOrDisplay) {
    if (!(o instanceof sc_Pair ||
	  o instanceof sc_Vector))
	return writeOrDisplay(o);
    return o.sc_toCircleString(symb, writeOrDisplay);
}
sc_Pair.prototype.sc_toCircleString = function(symb, writeOrDisplay, inList) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	if (inList)
	    return '. #' + nb + '#';
	else
	    return '#' + nb + '#';
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }

    var res = "";
    
    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	if (inList)
	    res += '. #' + this[symb + "nb"] + '=';
	else
	    res += '#' + this[symb + "nb"] + '=';
	inList = false;
    }

    if (!inList)
	res += "(";
    
    // print car
    res += sc_genToCircleString(this.car, symb, writeOrDisplay);
    
    if (sc_isPair(this.cdr)) {
	res += " " + this.cdr.sc_toCircleString(symb, writeOrDisplay, true);
    } else if (this.cdr !== null) {
	res += " . " + sc_genToCircleString(this.cdr, symb, writeOrDisplay);
    }
    if (!inList)
	res += ")";
    return res;
};
sc_Vector.prototype.sc_toCircleString = function(symb, writeOrDisplay) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	return '#' + nb + '#';
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }

    var res = "";
    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	res += '#' + this[symb + "nb"] + '=';
    }
    res += "#(";
    for (var i = 0; i < this.length; i++) {
	res += sc_genToCircleString(this[i], symb, writeOrDisplay);
	if (i < this.length - 1) res += " ";
    }
    res += ")";
    return res;
};


/* ------------------ print ---------------------------------------------------*/

/*** META ((export #t) (arity -1)) */
function sc_print(s) {
    if (arguments.length === 1) {
	sc_display(s);
	sc_newline();
    }
    else {
	for (var i = 0; i < arguments.length; i++)
	    sc_display(arguments[i]);
	sc_newline();
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t) (arity -2)) */
function sc_format(s) {
   var len = s.length;
   var p = new sc_StringOutputPort();
   var i = 0, j = 1;

   while( i < len ) {
      var i2 = s.indexOf("~", i);

      if (i2 == -1) {
	  p.appendJSString( s.substring( i, len ) );
	  return p.close();
      } else if (i2 == (len - 1)) {
	  p.appendJSString(s.substring(i, len));
	  return p.close();
      } else if (i2 == (len - 2) && s.charAt(i2 + 1) == ":") {
	  p.appendJSString(s.substring(i, len));
	  return p.close();
      } else {
	  if (i2 > i) p.appendJSString(s.substring(i, i2));

	  var alternativeForm = (s.charAt(i2 + 1) == ":");
	  if (alternativeForm) i2++;

	  // already advance before evalualating escape sequences.
	  // this way it is easier to see.
	  // no escape sequence requires 'i'.
	  i = i2 + 2;

	  switch(s.charCodeAt(i2 + 1)) {
	  case 65:
	  case 97:
	      // a
	      if (alternativeForm)
		  sc_displayCircle(arguments[j], p);
	      else
		  sc_display(arguments[j], p);
	      j++;
	      break;

	  case 83:
	  case 115:
	      // s
	      if (alternativeForm)
		  sc_writeCircle(arguments[j], p);
	      else
		  sc_write(arguments[j], p);
	      j++;
	      break;

	  case 86:
	  case 118:
	      // v
	      if (alternativeForm)
		  sc_displayCircle(arguments[j], p);
	      else
		  sc_display(arguments[j], p);
	      p.appendJSString("\n");
	      j++;
	      break;

	  case 67:
	  case 99:
	      // c
	      p.appendJSString(String.fromCharCode(arguments[j]));
	      j++;
	      break;

	  case 88:
	  case 120:
	      // x
	      p.appendJSString(arguments[j].toString(16));
	      j++;
	      break;

	  case 79:
	  case 111:
	      // o
	      p.appendJSString(arguments[j].toString(8));
	      j++;
	      break;

	  case 66:
	  case 98:
	      // b
	      p.appendJSString(arguments[j].toString(2));
	      j++;
	      break;
	       
	  case 37:
	  case 110:
	      // %, n
	      p.appendJSString("\n");
	      break;

	  case 114:
	      // r
	      p.appendJSString("\r");
	      break;

	  case 126:
	      // ~
	      p.appendJSString("~");
	      break;

	  default:
	      sc_error( "format: illegal ~"
			+ String.fromCharCode(s.charCodeAt(i2 + 1))
			+ " sequence" );
	      return "";
	  }
      }
   }

   return p.close();
}

/* ------------------ global ports ---------------------------------------------------*/

var SC_DEFAULT_IN = new sc_ErrorInputPort();
var SC_DEFAULT_OUT = new sc_ErrorOutputPort();
var SC_ERROR_OUT = new sc_ErrorOutputPort();

var const_main;
var BgL_sc_const_1z00_main;
var main;
var BgL_foldzd2overzd2subszd2ofzd2siza7eza7;
var BgL_foldzd2overzd2rowsz00;
var BgL_removezd2inzd2orderz00;
var BgL_reallyzd2gozd2;
var BgL_gozd2folderzd2;
var go;
var BgL_detzd2upperzd2boundz00;
var BgL_findzd2primezd2;
var BgL_makezd2modularzd2inzd2rowzd2spacezf3zf3;
var BgL_makezd2modularzd2rowzd2reducezd2;
var BgL_makezd2inzd2rowzd2spacezf3z21;
var BgL_makezd2rowzd2reducez00;
var BgL_extendedzd2gcdzd2;
var BgL_makezd2modularzd2;
var BgL_proczd2ze3vectorz31;
var miota;
var fold;
var BgL_genzd2permszd2;
var BgL_allzf3zf3;
var zulu;
var zebra;
var zunda;
var BgL_maximalzf3zf3;
var BgL_cheza7zd2setzd2boxz12zb5;
var BgL_cheza7zd2unboxz75;
var BgL_cheza7zd2boxz75;
var BgL_runzd2benchmarkzd2;
var BgL_runzd2benchzd2;
var time;
var BgL_matrixzd2iterszd2;
var error;
const_main = "*** wrong result ***";
BgL_sc_const_1z00_main = new sc_Pair(sc_list(new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, null)))))), new sc_Pair(sc_list(new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, null)))))), new sc_Pair(sc_list(new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, null)))))), new sc_Pair(sc_list(new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(1, null)))))), new sc_Pair(sc_list(new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(1, new sc_Pair(1, new sc_Pair(1, null))))), new sc_Pair(1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(-1, new sc_Pair(-1, null)))))), null)))));
error = function() {
    return null.car;
  };
BgL_matrixzd2iterszd2 = 30;
time = function(x) {
    return x;
  };
BgL_runzd2benchzd2 = function(name, count, is_ok, run) {
    var i;
    var result;
    var g1263;
    g1263 = sc_list("\uEBACundefined");
    i = 0;
    result = g1263;
    while (i < count) {
      ++i;
      result = run();
    }
    return result;
  };
BgL_runzd2benchmarkzd2 = function(name, count, is_ok, run_maker) {
    var args = null;
    for (var sc_tmp = arguments.length - 1; sc_tmp >= 4; --sc_tmp) {
      args = sc_cons(arguments[sc_tmp], args);
    }
    var result;
    var run;
    sc_newline();
    run = sc_apply(run_maker, args);
    result = time(BgL_runzd2benchzd2(name, count, is_ok, run));
    if (is_ok(result) === false) {
      sc_display(const_main);
      sc_newline();
      sc_display("*** got: ");
      sc_write(result);
      return sc_newline();
    } else {
      sc_display("OK");
      return sc_newline();
    }
  };
BgL_cheza7zd2boxz75 = function(x) {
    return new sc_Pair(x, null);
  };
BgL_cheza7zd2unboxz75 = function(x) {
    return x.car;
  };
BgL_cheza7zd2setzd2boxz12zb5 = function(x, y) {
    return x.car = y;
  };
BgL_maximalzf3zf3 = function(mat) {
    var first_row_perm;
    var g1264;
    g1264 = BgL_genzd2permszd2(mat);
    first_row_perm = g1264;
    while (first_row_perm !== false) {
      if (zunda(first_row_perm, mat) !== false) {
        first_row_perm = first_row_perm("\uEBACbrother");
      } else {
        return false;
      }
    }
    return true;
  };
zunda = function(first_row_perm, mat) {
    var mat_1;
    var BgL_sc_makezd2rowzd2ze3func_2ze3;
    var number_of_cols;
    var first_row;
    first_row = first_row_perm("\uEBACnow");
    number_of_cols = sc_length(first_row);
    BgL_sc_makezd2rowzd2ze3func_2ze3 = function(if_equal, if_different) {
        return function(row) {
                var i;
                var first;
                var row_3;
                var vec;
                vec = sc_makeVector(number_of_cols);
                i = 0;
                first = first_row;
                row_3 = row;
                while (!(i === number_of_cols)) {
                  vec[i] = first.car === row_3.car? if_equal: if_different;
                  ++i;
                  first = first.cdr;
                  row_3 = row_3.cdr;
                }
                return function(i) {
                        return vec[i];
                      };
              };
      };
    mat_1 = mat.cdr;
    return zebra(first_row_perm("\uEBACchild"), BgL_sc_makezd2rowzd2ze3func_2ze3(1, -1), BgL_sc_makezd2rowzd2ze3func_2ze3(-1, 1), mat_1, number_of_cols);
  };
zebra = function(row_perm, BgL_sc_rowzd2ze3funczb2_3z83, BgL_sc_rowzd2ze3funczd2_4ze3, mat, number_of_cols) {
    var BgL_sc__zd2za2zd2_5za2;
    var g1266;
    g1266 = sc_list(miota(number_of_cols));
    BgL_sc__zd2za2zd2_5za2 = function(row_perm, mat, partitions) {
        var tmp1268;
        var new_row_perm;
        var tmp1267;
        var storage;
        var tmp;
        var tmp_7;
        var partitions_8;
        tmp = row_perm;
        tmp_7 = mat;
        partitions_8 = partitions;
        do {
          storage = {mat_9: undefined, row_perm_10: undefined};
          with (storage) {
            mat_9 = tmp_7;
            row_perm_10 = tmp;
            tmp1267 = tmp === false;
            if (tmp1267 !== false) {
              return tmp1267;
            } else {
              if (zulu(tmp_7.car, BgL_sc_rowzd2ze3funczb2_3z83(tmp("\uEBACnow")), partitions_8, function(new_partitions) {
                      return BgL_sc__zd2za2zd2_5za2(row_perm_10("\uEBACchild"), mat_9.cdr, new_partitions);
                    }) !== false) {
                if (zulu(tmp_7.car, BgL_sc_rowzd2ze3funczd2_4ze3(tmp("\uEBACnow")), partitions_8, function(new_partitions) {
                        return BgL_sc__zd2za2zd2_5za2(row_perm_10("\uEBACchild"), mat_9.cdr, new_partitions);
                      }) !== false) {
                  new_row_perm = tmp("\uEBACbrother");
                  tmp1268 = new_row_perm === false;
                  if (tmp1268 !== false) {
                    return tmp1268;
                  } else {
                    tmp = new_row_perm;
                  }
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          }
        } while (true);
      };
    return BgL_sc__zd2za2zd2_5za2(row_perm, mat, g1266);
  };
zulu = function(old_row, new_row_func, partitions, equal_cont) {
    var next;
    var tmp1273;
    var rhs;
    var p_in;
    var rev_p_out;
    var old_row_11;
    var m;
    var partition;
    var old_row_12;
    var plus;
    var minus;
    var g1272;
    var g1271;
    var g1270;
    var p_in_13;
    var old_row_14;
    var rev_p_out_15;
    var g1269;
    g1269 = null;
    p_in_13 = partitions;
    old_row_14 = old_row;
    rev_p_out_15 = g1269;
    do {
      g1270 = p_in_13.car;
      g1271 = null;
      g1272 = null;
      partition = g1270;
      old_row_12 = old_row_14;
      plus = g1271;
      minus = g1272;
      while (!(partition === null)) {
        next = partition.car;
        switch (new_row_func(next)) {
        case 1:
          if (1 === old_row_12.car) {
            partition = partition.cdr;
            old_row_12 = old_row_12.cdr;
            plus = new sc_Pair(next, plus);
          } else {
            return false;
          }
          break;
        case -1:
          partition = partition.cdr;
          minus = new sc_Pair(next, minus);
          break;
        default:
          return undefined;
          break;
        }
      }
      old_row_11 = old_row_12;
      m = minus;
      while (!(m === null)) {
        tmp1273 = 1 === old_row_11.car;
        if (tmp1273 !== false) {
          return tmp1273;
        } else {
          old_row_11 = old_row_11.cdr;
          m = m.cdr;
        }
      }
      if (plus === null) {
        rhs = rev_p_out_15;
      } else {
        rhs = new sc_Pair(plus, rev_p_out_15);
      }
      if (minus === null) {
        rev_p_out = rhs;
      } else {
        rev_p_out = new sc_Pair(minus, rhs);
      }
      p_in = p_in_13.cdr;
      if (p_in === null) {
        return equal_cont(sc_reverse(rev_p_out));
      } else {
        p_in_13 = p_in;
        old_row_14 = old_row_11;
        rev_p_out_15 = rev_p_out;
      }
    } while (true);
  };
BgL_allzf3zf3 = function(is_ok, lst) {
    var tmp1274;
    var lst_16;
    lst_16 = lst;
    do {
      tmp1274 = lst_16 === null;
      if (tmp1274 !== false) {
        return tmp1274;
      } else {
        if (is_ok(lst_16.car) !== false) {
          lst_16 = lst_16.cdr;
        } else {
          return false;
        }
      }
    } while (true);
  };
BgL_genzd2permszd2 = function(objects) {
    var BgL_sc__zd2za2zd2_6za2;
    var g1275;
    g1275 = null;
    BgL_sc__zd2za2zd2_6za2 = function(zulu_future, past) {
        if (zulu_future === null) {
          return false;
        } else {
          return function(msg) {
                  switch (msg) {
                  case "\uEBACnow":
                    return zulu_future.car;
                    break;
                  case "\uEBACbrother":
                    return BgL_sc__zd2za2zd2_6za2(zulu_future.cdr, new sc_Pair(zulu_future.car, past));
                    break;
                  case "\uEBACchild":
                    return BgL_genzd2permszd2(fold(past, sc_cons, zulu_future.cdr));
                    break;
                  case "\uEBACpuke":
                    return new sc_Pair(zulu_future.car, fold(past, sc_cons, zulu_future.cdr));
                    break;
                  default:
                    return error(BgL_genzd2permszd2, "Bad msg: ~a", msg);
                    break;
                  }
                };
        }
      };
    return BgL_sc__zd2za2zd2_6za2(objects, g1275);
  };
fold = function(lst, folder, state) {
    var lst_18;
    var state_19;
    lst_18 = lst;
    state_19 = state;
    while (!(lst_18 === null)) {
      state_19 = folder(lst_18.car, state_19);
      lst_18 = lst_18.cdr;
    }
    return state_19;
  };
miota = function(len) {
    var BgL_sc__zd2za2zd2_7za2;
    BgL_sc__zd2za2zd2_7za2 = function(i) {
        var i_21;
        if (i === len) {
          return null;
        } else {
          i_21 = i + 1;
          return new sc_Pair(i, i_21 === len? null: new sc_Pair(i_21, BgL_sc__zd2za2zd2_7za2(i_21 + 1)));
        }
      };
    if (0 === len) {
      return null;
    } else {
      return new sc_Pair(0, BgL_sc__zd2za2zd2_7za2(0 + 1));
    }
  };
BgL_proczd2ze3vectorz31 = function(size, proc) {
    var i;
    var res;
    res = sc_makeVector(size);
    i = 0;
    while (!(i === size)) {
      res[i] = proc(i);
      ++i;
    }
    return res;
  };
BgL_makezd2modularzd2 = function(modulus) {
    var coef_recip;
    var inverses;
    var BgL_sc_coefzd2za2_8z70;
    var coef_negate;
    var BgL_sc_coefzd2zb2_9z60;
    var is_coef_zero;
    is_coef_zero = function(x) {
        return x % modulus === 0;
      };
    BgL_sc_coefzd2zb2_9z60 = function(x, y) {
        var x_24;
        x_24 = x + y;
        return x_24 % modulus;
      };
    coef_negate = function(x) {
        var x_25;
        x_25 = -x;
        return x_25 % modulus;
      };
    BgL_sc_coefzd2za2_8z70 = function(x, y) {
        var x_26;
        x_26 = x * y;
        return x_26 % modulus;
      };
    inverses = BgL_proczd2ze3vectorz31(modulus - 1, function(i) {
          return BgL_extendedzd2gcdzd2(i + 1, modulus, function(gcd, inverse, ignore) {
                    return inverse;
                  });
        });
    coef_recip = function(x) {
        var x_27;
        x_27 = x % modulus;
        return inverses[x_27 - 1];
      };
    return function(maker) {
            return maker(0, 1, is_coef_zero, BgL_sc_coefzd2zb2_9z60, coef_negate, BgL_sc_coefzd2za2_8z70, coef_recip);
          };
  };
BgL_extendedzd2gcdzd2 = function(a, b, cont) {
    var cont_28;
    cont_28 = function(p_a, p) {
        var cont_29;
        cont_29 = function(q_b, q) {
            var p_30;
            var p_a_31;
            var p_b;
            var mult;
            var p_32;
            var p_a_33;
            var p_b_34;
            var q_35;
            var q_a;
            var q_b_36;
            p_32 = p;
            p_a_33 = p_a;
            p_b_34 = 0;
            q_35 = q;
            q_a = 0;
            q_b_36 = q_b;
            while (!(q_35 === 0)) {
              mult = parseInt(p_32 / q_35);
              p_30 = q_35;
              p_a_31 = q_a;
              p_b = q_b_36;
              q_35 = p_32 - mult * q_35;
              p_32 = p_30;
              q_a = p_a_33 - mult * q_a;
              p_a_33 = p_a_31;
              q_b_36 = p_b_34 - mult * q_b_36;
              p_b_34 = p_b;
            }
            return cont(p_32, p_a_33, p_b_34);
          };
        if (b >= 0) {
          return cont_29(1, b);
        } else {
          return new sc_Pair(-1, -b);
        }
      };
    if (a >= 0) {
      return cont_28(1, a);
    } else {
      return new sc_Pair(-1, -a);
    }
  };
BgL_makezd2rowzd2reducez00 = function(coef_zero, coef_one, is_coef_zero, BgL_sc_coefzd2zb2_10z60, coef_negate, BgL_sc_coefzd2za2_11z70, coef_recip) {
    return function(mat) {
            var BgL_sc__zd2za2zd2_12za2;
            BgL_sc__zd2za2zd2_12za2 = function(mat) {
                var stmp;
                var stmp_40;
                var stmp_41;
                var x;
                var tail1307;
                var L1303;
                var tail1296;
                var L1292;
                var L1303_42;
                var falseHead1306;
                var falseHead1295;
                var tmpF1293;
                var in_43;
                var prest;
                var pivot;
                var prow;
                var storage;
                var x_44;
                var tail1291;
                var L1287;
                var L1287_45;
                var falseHead1290;
                var in_46;
                var out;
                var g1278;
                var tmp1277;
                tmp1277 = mat === null;
                if ((tmp1277 !== false? tmp1277: mat.car === null) !== false) {
                  return null;
                } else {
                  g1278 = null;
                  in_46 = mat;
                  out = g1278;
                  while (!(in_46 === null)) {
                    storage = {zap_row: undefined, mult: undefined};
                    with (storage) {
                      prow = in_46.car;
                      pivot = prow.car;
                      prest = prow.cdr;
                      in_43 = in_46.cdr;
                      if (is_coef_zero(pivot) !== false) {
                        in_46 = in_43;
                        out = new sc_Pair(prest, out);
                      } else {
                        mult = coef_recip(pivot);
                        tmpF1293 = function(x) {
                            return BgL_sc_coefzd2za2_11z70(mult, x);
                          };
                        falseHead1295 = new sc_Pair(null, null);
                        tail1296 = falseHead1295;
                        L1292 = prest;
                        while (!(L1292 === null)) {
                          tail1296.cdr = new sc_Pair(tmpF1293(L1292.car), null);
                          tail1296 = tail1296.cdr;
                          L1292 = L1292.cdr;
                        }
                        zap_row = falseHead1295.cdr;
                        falseHead1306 = new sc_Pair(null, null);
                        L1303_42 = BgL_sc__zd2za2zd2_12za2(fold(in_43, function(row, mat) {
                                var stmp;
                                var tail1302;
                                var L1297;
                                var L1298;
                                var falseHead1301;
                                var tmpF1299;
                                var mult;
                                var rest_row;
                                var first_col;
                                first_col = row.car;
                                rest_row = row.cdr;
                                if (is_coef_zero(first_col) !== false) {
                                  stmp = rest_row;
                                } else {
                                  mult = coef_negate(first_col);
                                  tmpF1299 = function(f, z) {
                                      return BgL_sc_coefzd2zb2_10z60(f, BgL_sc_coefzd2za2_11z70(mult, z));
                                    };
                                  falseHead1301 = new sc_Pair(null, null);
                                  tail1302 = falseHead1301;
                                  L1297 = rest_row;
                                  L1298 = zap_row;
                                  while (!(L1297 === null)) {
                                    tail1302.cdr = new sc_Pair(tmpF1299(L1297.car, L1298.car), null);
                                    tail1302 = tail1302.cdr;
                                    L1297 = L1297.cdr;
                                    L1298 = L1298.cdr;
                                  }
                                  stmp = falseHead1301.cdr;
                                }
                                return new sc_Pair(stmp, mat);
                              }, out));
                        tail1307 = falseHead1306;
                        L1303 = L1303_42;
                        while (!(L1303 === null)) {
                          x = L1303.car;
                          stmp_40 = new sc_Pair(new sc_Pair(coef_zero, x), null);
                          tail1307.cdr = stmp_40;
                          tail1307 = tail1307.cdr;
                          L1303 = L1303.cdr;
                        }
                        stmp = falseHead1306.cdr;
                        return new sc_Pair(new sc_Pair(coef_one, zap_row), stmp);
                      }
                    }
                  }
                  falseHead1290 = new sc_Pair(null, null);
                  L1287_45 = BgL_sc__zd2za2zd2_12za2(out);
                  tail1291 = falseHead1290;
                  L1287 = L1287_45;
                  while (!(L1287 === null)) {
                    x_44 = L1287.car;
                    stmp_41 = new sc_Pair(new sc_Pair(coef_zero, x_44), null);
                    tail1291.cdr = stmp_41;
                    tail1291 = tail1291.cdr;
                    L1287 = L1287.cdr;
                  }
                  return falseHead1290.cdr;
                }
              };
            return BgL_sc__zd2za2zd2_12za2(mat);
          };
  };
BgL_makezd2inzd2rowzd2spacezf3z21 = function(coef_zero, coef_one, is_coef_zero, BgL_sc_coefzd2zb2_13z60, coef_negate, BgL_sc_coefzd2za2_14z70, coef_recip) {
    var row_reduce;
    row_reduce = BgL_makezd2rowzd2reducez00(coef_zero, coef_one, is_coef_zero, BgL_sc_coefzd2zb2_13z60, coef_negate, BgL_sc_coefzd2za2_14z70, coef_recip);
    return function(mat) {
            var mat_49;
            mat_49 = row_reduce(mat);
            return function(row) {
                    var tail1323;
                    var L1319;
                    var tail1318;
                    var L1313;
                    var L1314;
                    var tail1312;
                    var L1308;
                    var falseHead1322;
                    var falseHead1317;
                    var tmpF1315;
                    var mat;
                    var z_rest;
                    var z_first;
                    var zap_row;
                    var L1308_50;
                    var tmp1279;
                    var falseHead1311;
                    var r_rest;
                    var r_first;
                    var storage;
                    var row_51;
                    var mat_52;
                    row_51 = row;
                    mat_52 = mat_49;
                    while (!(row_51 === null)) {
                      storage = {mult: undefined};
                      with (storage) {
                        r_first = row_51.car;
                        r_rest = row_51.cdr;
                        if (is_coef_zero(r_first) !== false) {
                          row_51 = r_rest;
                          falseHead1311 = new sc_Pair(null, null);
                          tmp1279 = mat_52 === null;
                          if ((tmp1279 !== false? tmp1279: is_coef_zero(mat_52.car.car)) !== false) {
                            L1308_50 = mat_52;
                          } else {
                            L1308_50 = mat_52.cdr;
                          }
                          tail1312 = falseHead1311;
                          L1308 = L1308_50;
                          while (!(L1308 === null)) {
                            tail1312.cdr = new sc_Pair(L1308.car.cdr, null);
                            tail1312 = tail1312.cdr;
                            L1308 = L1308.cdr;
                          }
                          mat_52 = falseHead1311.cdr;
                        } else {
                          if (mat_52 === null) {
                            return false;
                          } else {
                            zap_row = mat_52.car;
                            z_first = zap_row.car;
                            z_rest = zap_row.cdr;
                            mat = mat_52.cdr;
                            if (is_coef_zero(z_first) !== false) {
                              return false;
                            } else {
                              mult = coef_negate(r_first);
                              tmpF1315 = function(r, z) {
                                  return BgL_sc_coefzd2zb2_13z60(r, BgL_sc_coefzd2za2_14z70(mult, z));
                                };
                              falseHead1317 = new sc_Pair(null, null);
                              tail1318 = falseHead1317;
                              L1313 = r_rest;
                              L1314 = z_rest;
                              while (!(L1313 === null)) {
                                tail1318.cdr = new sc_Pair(tmpF1315(L1313.car, L1314.car), null);
                                tail1318 = tail1318.cdr;
                                L1313 = L1313.cdr;
                                L1314 = L1314.cdr;
                              }
                              row_51 = falseHead1317.cdr;
                              falseHead1322 = new sc_Pair(null, null);
                              tail1323 = falseHead1322;
                              L1319 = mat;
                              while (!(L1319 === null)) {
                                tail1323.cdr = new sc_Pair(L1319.car.cdr, null);
                                tail1323 = tail1323.cdr;
                                L1319 = L1319.cdr;
                              }
                              mat_52 = falseHead1322.cdr;
                            }
                          }
                        }
                      }
                    }
                    return true;
                  };
          };
  };
BgL_makezd2modularzd2rowzd2reducezd2 = function(modulus) {
    return BgL_makezd2modularzd2(modulus)(BgL_makezd2rowzd2reducez00);
  };
BgL_makezd2modularzd2inzd2rowzd2spacezf3zf3 = function(modulus) {
    return BgL_makezd2modularzd2(modulus)(BgL_makezd2inzd2rowzd2spacezf3z21);
  };
BgL_findzd2primezd2 = function(bound) {
    var stmp;
    var entry;
    var tmp1281;
    var p;
    var tmp1280;
    var primes;
    var trial;
    var last;
    var primes_53;
    primes_53 = sc_list(2);
    last = BgL_cheza7zd2boxz75(primes_53);
    if (2 > bound) {
      return 2;
    } else {
      trial = 3;
      do {
        BgL_whilezd2break1411zd2: {
          primes = primes_53;
          do {
            tmp1280 = primes === null;
            if (tmp1280 !== false) {
              {
                stmp = tmp1280;
                break BgL_whilezd2break1411zd2;
              }
            } else {
              p = primes.car;
              tmp1281 = trial < p * p;
              if (tmp1281 !== false) {
                {
                  stmp = tmp1281;
                  break BgL_whilezd2break1411zd2;
                }
              } else {
                if (!(trial % p === 0)) {
                  primes = primes.cdr;
                } else {
                  {
                    stmp = false;
                    break BgL_whilezd2break1411zd2;
                  }
                }
              }
            }
          } while (true);
        }
        if (stmp !== false) {
          entry = sc_list(trial);
          BgL_cheza7zd2unboxz75(last).cdr = entry;
          BgL_cheza7zd2setzd2boxz12zb5(last, entry);
          if (trial > bound) {
            return trial;
          } else {
            trial += 2;
          }
        } else {
          trial += 2;
        }
      } while (true);
    }
  };
BgL_detzd2upperzd2boundz00 = function(size) {
    var stmp;
    var i;
    var main_part;
    main_part = sc_expt(size, parseInt(size / 2));
    if (size % 2 === 0) {
      return main_part;
    } else {
      i = 0;
      while (!(i * i >= size)) {
        ++i;
      }
      stmp = i;
      return main_part * stmp;
    }
  };
go = function(number_of_cols, inv_size, folder, state) {
    var BgL_sc__zd2za2zd2_15za2;
    var g1285;
    var g1284;
    var all_rows;
    var is_in_row_space;
    is_in_row_space = BgL_makezd2modularzd2inzd2rowzd2spacezf3zf3(BgL_findzd2primezd2(BgL_detzd2upperzd2boundz00(inv_size)));
    all_rows = fold(BgL_foldzd2overzd2rowsz00(number_of_cols - 1, sc_cons, null), function(row, rows) {
          return new sc_Pair(new sc_Pair(1, row), rows);
        }, null);
    g1284 = sc_list(all_rows.car);
    g1285 = all_rows.cdr;
    BgL_sc__zd2za2zd2_15za2 = function(number_of_rows, rev_mat, possible_future, state) {
        var stmp;
        var new_rev_mat;
        var first;
        var rest_of_future;
        var zulu_future;
        var state_55;
        var new_row;
        var old_mat;
        var tests;
        var zulu_future_56;
        if (number_of_rows < inv_size) {
          stmp = is_in_row_space(rev_mat);
        } else {
          old_mat = rev_mat.cdr;
          new_row = rev_mat.car;
          tests = BgL_foldzd2overzd2subszd2ofzd2siza7eza7(old_mat, inv_size - 2, function(sub, tests) {
                return new sc_Pair(is_in_row_space(new sc_Pair(new_row, sub)), tests);
              }, null);
          stmp = function(row) {
              var tmp1283;
              var tests_57;
              tests_57 = tests;
              while (!(tests_57 === null)) {
                tmp1283 = tests_57.car(row);
                if (tmp1283 !== false) {
                  return tmp1283;
                } else {
                  tests_57 = tests_57.cdr;
                }
              }
              return false;
            };
        }
        zulu_future_56 = BgL_removezd2inzd2orderz00(stmp, possible_future);
        if (zulu_future_56 === null) {
          return folder(sc_reverse(rev_mat), state);
        } else {
          zulu_future = zulu_future_56;
          state_55 = state;
          while (!(zulu_future === null)) {
            rest_of_future = zulu_future.cdr;
            first = zulu_future.car;
            new_rev_mat = new sc_Pair(first, rev_mat);
            if (BgL_maximalzf3zf3(sc_reverse(new_rev_mat)) !== false) {
              state_55 = BgL_sc__zd2za2zd2_15za2(number_of_rows + 1, new_rev_mat, rest_of_future, state_55);
            }
            zulu_future = rest_of_future;
          }
          return state_55;
        }
      };
    return BgL_sc__zd2za2zd2_15za2(1, g1284, g1285, state);
  };
BgL_gozd2folderzd2 = function(mat, bbb) {
    var blen;
    var blist;
    var blen_58;
    var size;
    var bsize;
    bsize = bbb.car;
    size = sc_length(mat);
    if (size < bsize) {
      return bbb;
    } else {
      blen_58 = bbb.cdr.car;
      blist = bbb.cdr.cdr;
      if (size === bsize) {
        blen = blen_58 + 1;
        return new sc_Pair(bsize, new sc_Pair(blen, blen < 3000? new sc_Pair(mat, blist): blen === 3000? new sc_Pair("...", blist): blist));
      } else {
        return sc_list(size, 1, mat);
      }
    }
  };
BgL_reallyzd2gozd2 = function(number_of_cols, inv_size) {
    return go(number_of_cols, inv_size, BgL_gozd2folderzd2, sc_list(-1, -1)).cdr.cdr;
  };
BgL_removezd2inzd2orderz00 = function(is_remove, lst) {
    return sc_reverse(fold(lst, function(e, lst) {
                if (is_remove(e) !== false) {
                  return lst;
                } else {
                  return new sc_Pair(e, lst);
                }
              }, null));
  };
BgL_foldzd2overzd2rowsz00 = function(number_of_cols, folder, state) {
    if (number_of_cols === 0) {
      return folder(null, state);
    } else {
      return BgL_foldzd2overzd2rowsz00(number_of_cols - 1, function(tail, state) {
                return folder(new sc_Pair(-1, tail), state);
              }, BgL_foldzd2overzd2rowsz00(number_of_cols - 1, function(tail, state) {
                  return folder(new sc_Pair(1, tail), state);
                }, state));
    }
  };
BgL_foldzd2overzd2subszd2ofzd2siza7eza7 = function(universe, size, folder, state) {
    var BgL_sc__zd2za2zd2_16za2;
    var g1286;
    var usize;
    usize = sc_length(universe);
    if (usize < size) {
      return state;
    } else {
      g1286 = usize - size;
      BgL_sc__zd2za2zd2_16za2 = function(size, universe, folder, csize, state) {
          var rest_u;
          var storage;
          var size_60;
          var universe_61;
          var tmp;
          var csize_62;
          var state_63;
          size_60 = size;
          universe_61 = universe;
          tmp = folder;
          csize_62 = csize;
          state_63 = state;
          do {
            storage = {first_u: undefined, folder_64: undefined};
            with (storage) {
              folder_64 = tmp;
              if (csize_62 === 0) {
                return tmp(universe_61, state_63);
              } else {
                if (size_60 === 0) {
                  return tmp(null, state_63);
                } else {
                  first_u = universe_61.car;
                  rest_u = universe_61.cdr;
                  universe_61 = rest_u;
                  state_63 = BgL_sc__zd2za2zd2_16za2(size_60 - 1, rest_u, function(tail, state) {
                        return folder_64(new sc_Pair(first_u, tail), state);
                      }, csize_62, state_63);
                  --csize_62;
                }
              }
            }
          } while (true);
        };
      return BgL_sc__zd2za2zd2_16za2(size, universe, folder, g1286, state);
    }
  };
main = function() {
    return BgL_runzd2benchmarkzd2("matrix", BgL_matrixzd2iterszd2, function(result) {
              return sc_isEqual(result, BgL_sc_const_1z00_main);
            }, function(number_of_cols, inv_size) {
              return function() {
                      return BgL_reallyzd2gozd2(number_of_cols, inv_size);
                    };
            }, 5, 5);
  };
main();
