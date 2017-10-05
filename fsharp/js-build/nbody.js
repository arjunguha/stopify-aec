(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBodies = exports.Bodies = exports.neptune = exports.uranus = exports.saturn = exports.jupiter = exports.Body = exports.solarMass = exports.daysPerYear = exports.pi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.pairsOf = pairsOf;
exports.sunMomentum = sunMomentum;
exports.energy = energy;

var _Symbol2 = require("fable-core/umd/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("fable-core/umd/Util");

var _Seq = require("fable-core/umd/Seq");

var _List = require("fable-core/umd/List");

var _List2 = _interopRequireDefault(_List);

var _String = require("fable-core/umd/String");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pi = exports.pi = 3.141592653589793;
var daysPerYear = exports.daysPerYear = 365.24;
var solarMass = exports.solarMass = 4 * Math.pow(pi, 2);

var Body = exports.Body = function () {
  function Body(x, y, z, vX, vY, vZ, mass) {
    _classCallCheck(this, Body);

    this.X = x;
    this.Y = y;
    this.Z = z;
    this.VX = vX;
    this.VY = vY;
    this.VZ = vZ;
    this.Mass = mass;
  }

  _createClass(Body, [{
    key: _Symbol3.default.reflection,
    value: function () {
      return {
        type: "Nbody.Body",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          X: "number",
          Y: "number",
          Z: "number",
          VX: "number",
          VY: "number",
          VZ: "number",
          Mass: "number"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return (0, _Util.equalsRecords)(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return (0, _Util.compareRecords)(this, other);
    }
  }]);

  return Body;
}();

(0, _Symbol2.setType)("Nbody.Body", Body);
var jupiter = exports.jupiter = new Body(4.841431442464721, -1.1603200440274284, -0.10362204447112311, 0.001660076642744037 * daysPerYear, 0.007699011184197404 * daysPerYear, -0.0000690460016972063 * daysPerYear, 0.0009547919384243266 * solarMass);
var saturn = exports.saturn = new Body(8.34336671824458, 4.124798564124305, -0.4035234171143214, -0.002767425107268624 * daysPerYear, 0.004998528012349172 * daysPerYear, 0.000023041729757376393 * daysPerYear, 0.0002858859806661308 * solarMass);
var uranus = exports.uranus = new Body(12.894369562139131, -15.111151401698631, -0.22330757889265573, 0.002964601375647616 * daysPerYear, 0.0023784717395948095 * daysPerYear, -0.000029658956854023756 * daysPerYear, 0.00004366244043351563 * solarMass);
var neptune = exports.neptune = new Body(15.379697114850917, -25.919314609987964, 0.17925877295037118, 0.0026806777249038932 * daysPerYear, 0.001628241700382423 * daysPerYear, -0.00009515922545197159 * daysPerYear, 0.000051513890204661145 * solarMass);

function pairsOf(list) {
  var foldPairs = function foldPairs(list_1) {
    return function (acc) {
      foldPairs: while (true) {
        if (list_1.tail != null) {
          var headPairs = (0, _Seq.fold)(function (acc_1, el) {
            return new _List2.default([list_1.head, el], acc_1);
          }, acc, list_1.tail);
          list_1 = list_1.tail;
          acc = headPairs;
          continue foldPairs;
        } else {
          return acc;
        }
      }
    };
  };

  return foldPairs(list)(new _List2.default());
}

function sunMomentum(planets) {
  return (0, _Seq.fold)(function (tupledArg, body) {
    var c = body.Mass / solarMass;
    return [tupledArg[0] - c * body.VX, tupledArg[1] - c * body.VY, tupledArg[2] - c * body.VZ];
  }, [0, 0, 0], planets);
}

var Bodies = exports.Bodies = function () {
  function Bodies(bodies, pairs) {
    _classCallCheck(this, Bodies);

    this.bodies = bodies;
    this.pairs = pairs;
  }

  _createClass(Bodies, [{
    key: _Symbol3.default.reflection,
    value: function () {
      return {
        type: "Nbody.Bodies",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          bodies: (0, _Util.makeGeneric)(_List2.default, {
            T: Body
          }),
          pairs: (0, _Util.makeGeneric)(_List2.default, {
            T: (0, _Util.Tuple)([Body, Body])
          })
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return (0, _Util.equalsRecords)(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return (0, _Util.compareRecords)(this, other);
    }
  }]);

  return Bodies;
}();

(0, _Symbol2.setType)("Nbody.Bodies", Bodies);

var initBodies = exports.initBodies = function () {
  var planets = (0, _List.ofArray)([jupiter, saturn, uranus, neptune]);
  var patternInput = sunMomentum(planets);
  var sun = new Body(0, 0, 0, patternInput[0], patternInput[1], patternInput[2], solarMass);
  var bodies = new _List2.default(sun, planets);
  return new Bodies(bodies, pairsOf(bodies));
}();

function energy(_arg1) {
  var ePlanets = (0, _Seq.fold)(function (e, b) {
    return e + 0.5 * b.Mass * (b.VX * b.VX + b.VY * b.VY + b.VZ * b.VZ);
  }, 0, _arg1.bodies);
  var ePairs = (0, _Seq.fold)(function (e_1, tupledArg) {
    var patternInput = [tupledArg[0].X - tupledArg[1].X, tupledArg[0].Y - tupledArg[1].Y, tupledArg[0].Z - tupledArg[1].Z];
    var dist = Math.sqrt(patternInput[0] * patternInput[0] + patternInput[1] * patternInput[1] + patternInput[2] * patternInput[2]);
    return e_1 + tupledArg[0].Mass * tupledArg[1].Mass / dist;
  }, 0, _arg1.pairs);
  return ePlanets - ePairs;
}

(function (args) {
  var repetitions = 20000000;
  var bodies = initBodies;
  (0, _String.fsFormat)("%.9f\n")(function (x) {
    console.log(x);
  })(energy(bodies));
  var $var2 = 0.01;
  var $var1 = bodies;

  for (var i = 1; i <= repetitions; i++) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = $var1.pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var forLoopVar = _step.value;
        var patternInput = [forLoopVar[0].X - forLoopVar[1].X, forLoopVar[0].Y - forLoopVar[1].Y, forLoopVar[0].Z - forLoopVar[1].Z];
        var dist2 = patternInput[0] * patternInput[0] + patternInput[1] * patternInput[1] + patternInput[2] * patternInput[2];
        var mag = $var2 / (dist2 * Math.sqrt(dist2));
        var mag1 = forLoopVar[0].Mass * mag;
        var mag2 = forLoopVar[1].Mass * mag;
        forLoopVar[0].VX = forLoopVar[0].VX - mag2 * patternInput[0];
        forLoopVar[0].VY = forLoopVar[0].VY - mag2 * patternInput[1];
        forLoopVar[0].VZ = forLoopVar[0].VZ - mag2 * patternInput[2];
        forLoopVar[1].VX = forLoopVar[1].VX + mag1 * patternInput[0];
        forLoopVar[1].VY = forLoopVar[1].VY + mag1 * patternInput[1];
        forLoopVar[1].VZ = forLoopVar[1].VZ + mag1 * patternInput[2];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = $var1.bodies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var body = _step2.value;
        body.X = body.X + $var2 * body.VX;
        body.Y = body.Y + $var2 * body.VY;
        body.Z = body.Z + $var2 * body.VZ;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  (0, _String.fsFormat)("%.9f\n")(function (x) {
    console.log(x);
  })(energy(bodies));
  return 0;
})(process.argv.slice(2));
}).call(this,require('_process'))
},{"_process":1,"fable-core/umd/List":6,"fable-core/umd/Seq":11,"fable-core/umd/String":12,"fable-core/umd/Symbol":13,"fable-core/umd/Util":15}],3:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function addRangeInPlace(range, xs) {
        var iter = range[Symbol.iterator]();
        var cur = iter.next();
        while (!cur.done) {
            xs.push(cur.value);
            cur = iter.next();
        }
    }
    exports.addRangeInPlace = addRangeInPlace;
    function copyTo(source, sourceIndex, target, targetIndex, count) {
        while (count--)
            target[targetIndex++] = source[sourceIndex++];
    }
    exports.copyTo = copyTo;
    function partition(f, xs) {
        var ys = [], zs = [], j = 0, k = 0;
        for (var i = 0; i < xs.length; i++)
            if (f(xs[i]))
                ys[j++] = xs[i];
            else
                zs[k++] = xs[i];
        return [ys, zs];
    }
    exports.partition = partition;
    function permute(f, xs) {
        var ys = xs.map(function () { return null; });
        var checkFlags = new Array(xs.length);
        for (var i = 0; i < xs.length; i++) {
            var j = f(i);
            if (j < 0 || j >= xs.length)
                throw new Error("Not a valid permutation");
            ys[j] = xs[i];
            checkFlags[j] = 1;
        }
        for (var i = 0; i < xs.length; i++)
            if (checkFlags[i] != 1)
                throw new Error("Not a valid permutation");
        return ys;
    }
    exports.permute = permute;
    function removeInPlace(item, xs) {
        var i = xs.indexOf(item);
        if (i > -1) {
            xs.splice(i, 1);
            return true;
        }
        return false;
    }
    exports.removeInPlace = removeInPlace;
    function setSlice(target, lower, upper, source) {
        var length = (upper || target.length - 1) - lower;
        if (ArrayBuffer.isView(target) && source.length <= length)
            target.set(source, lower);
        else
            for (var i = lower | 0, j = 0; j <= length; i++, j++)
                target[i] = source[j];
    }
    exports.setSlice = setSlice;
    function sortInPlaceBy(f, xs, dir) {
        if (dir === void 0) { dir = 1; }
        return xs.sort(function (x, y) {
            x = f(x);
            y = f(y);
            return (x < y ? -1 : x == y ? 0 : 1) * dir;
        });
    }
    exports.sortInPlaceBy = sortInPlaceBy;
    function unzip(xs) {
        var bs = new Array(xs.length), cs = new Array(xs.length);
        for (var i = 0; i < xs.length; i++) {
            bs[i] = xs[i][0];
            cs[i] = xs[i][1];
        }
        return [bs, cs];
    }
    exports.unzip = unzip;
    function unzip3(xs) {
        var bs = new Array(xs.length), cs = new Array(xs.length), ds = new Array(xs.length);
        for (var i = 0; i < xs.length; i++) {
            bs[i] = xs[i][0];
            cs[i] = xs[i][1];
            ds[i] = xs[i][2];
        }
        return [bs, cs, ds];
    }
    exports.unzip3 = unzip3;
    function getSubArray(xs, startIndex, count) {
        return xs.slice(startIndex, startIndex + count);
    }
    exports.getSubArray = getSubArray;
    function fill(target, targetIndex, count, value) {
        target.fill(value, targetIndex, targetIndex + count);
    }
    exports.fill = fill;
});

},{}],4:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TimeSpan", "./Util", "./Long"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeSpan_1 = require("./TimeSpan");
    var Util_1 = require("./Util");
    var Long = require("./Long");
    function minValue() {
        return parse(-8640000000000000, 1);
    }
    exports.minValue = minValue;
    function maxValue() {
        return parse(8640000000000000, 1);
    }
    exports.maxValue = maxValue;
    function parse(v, kind) {
        if (kind == null) {
            kind = typeof v == "string" && v.slice(-1) == "Z" ? 1 : 2;
        }
        var date = (v == null) ? new Date() : new Date(v);
        if (kind === 2) {
            date.kind = kind;
        }
        if (isNaN(date.getTime())) {
            throw new Error("The string is not a valid Date.");
        }
        return date;
    }
    exports.parse = parse;
    function tryParse(v) {
        try {
            return [true, parse(v)];
        }
        catch (_err) {
            return [false, minValue()];
        }
    }
    exports.tryParse = tryParse;
    function create(year, month, day, h, m, s, ms, kind) {
        if (h === void 0) { h = 0; }
        if (m === void 0) { m = 0; }
        if (s === void 0) { s = 0; }
        if (ms === void 0) { ms = 0; }
        if (kind === void 0) { kind = 2; }
        var date;
        if (kind === 2) {
            date = new Date(year, month - 1, day, h, m, s, ms);
            date.kind = kind;
        }
        else {
            date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
        }
        if (isNaN(date.getTime())) {
            throw new Error("The parameters describe an unrepresentable Date.");
        }
        return date;
    }
    exports.create = create;
    function now() {
        return parse();
    }
    exports.now = now;
    function utcNow() {
        return parse(null, 1);
    }
    exports.utcNow = utcNow;
    function today() {
        return date(now());
    }
    exports.today = today;
    function isLeapYear(year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
    exports.isLeapYear = isLeapYear;
    function daysInMonth(year, month) {
        return month == 2
            ? isLeapYear(year) ? 29 : 28
            : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
    }
    exports.daysInMonth = daysInMonth;
    function toUniversalTime(d) {
        return d.kind === 2 ? new Date(d.getTime()) : d;
    }
    exports.toUniversalTime = toUniversalTime;
    function toLocalTime(d) {
        if (d.kind === 2) {
            return d;
        }
        else {
            var d2 = new Date(d.getTime());
            d2.kind = 2;
            return d2;
        }
    }
    exports.toLocalTime = toLocalTime;
    function timeOfDay(d) {
        return TimeSpan_1.create(0, hour(d), minute(d), second(d), millisecond(d));
    }
    exports.timeOfDay = timeOfDay;
    function date(d) {
        return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind || 1);
    }
    exports.date = date;
    function kind(d) {
        return d.kind || 1;
    }
    exports.kind = kind;
    function day(d) {
        return d.kind === 2 ? d.getDate() : d.getUTCDate();
    }
    exports.day = day;
    function hour(d) {
        return d.kind === 2 ? d.getHours() : d.getUTCHours();
    }
    exports.hour = hour;
    function millisecond(d) {
        return d.kind === 2 ? d.getMilliseconds() : d.getUTCMilliseconds();
    }
    exports.millisecond = millisecond;
    function minute(d) {
        return d.kind === 2 ? d.getMinutes() : d.getUTCMinutes();
    }
    exports.minute = minute;
    function month(d) {
        return (d.kind === 2 ? d.getMonth() : d.getUTCMonth()) + 1;
    }
    exports.month = month;
    function second(d) {
        return d.kind === 2 ? d.getSeconds() : d.getUTCSeconds();
    }
    exports.second = second;
    function year(d) {
        return d.kind === 2 ? d.getFullYear() : d.getUTCFullYear();
    }
    exports.year = year;
    function dayOfWeek(d) {
        return d.kind === 2 ? d.getDay() : d.getUTCDay();
    }
    exports.dayOfWeek = dayOfWeek;
    function ticks(d) {
        return Long.fromNumber(d.getTime())
            .add(62135596800000)
            .sub(d.kind == 2 ? d.getTimezoneOffset() * 60 * 1000 : 0)
            .mul(10000);
    }
    exports.ticks = ticks;
    function toBinary(d) {
        return ticks(d);
    }
    exports.toBinary = toBinary;
    function dayOfYear(d) {
        var _year = year(d);
        var _month = month(d);
        var _day = day(d);
        for (var i = 1; i < _month; i++)
            _day += daysInMonth(_year, i);
        return _day;
    }
    exports.dayOfYear = dayOfYear;
    function add(d, ts) {
        return parse(d.getTime() + ts, d.kind || 1);
    }
    exports.add = add;
    function addDays(d, v) {
        return parse(d.getTime() + v * 86400000, d.kind || 1);
    }
    exports.addDays = addDays;
    function addHours(d, v) {
        return parse(d.getTime() + v * 3600000, d.kind || 1);
    }
    exports.addHours = addHours;
    function addMinutes(d, v) {
        return parse(d.getTime() + v * 60000, d.kind || 1);
    }
    exports.addMinutes = addMinutes;
    function addSeconds(d, v) {
        return parse(d.getTime() + v * 1000, d.kind || 1);
    }
    exports.addSeconds = addSeconds;
    function addMilliseconds(d, v) {
        return parse(d.getTime() + v, d.kind || 1);
    }
    exports.addMilliseconds = addMilliseconds;
    function addTicks(d, t) {
        return parse(Long.fromNumber(d.getTime()).add(t.div(10000)).toNumber(), d.kind || 1);
    }
    exports.addTicks = addTicks;
    function addYears(d, v) {
        var newMonth = month(d);
        var newYear = year(d) + v;
        var _daysInMonth = daysInMonth(newYear, newMonth);
        var newDay = Math.min(_daysInMonth, day(d));
        return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
    }
    exports.addYears = addYears;
    function addMonths(d, v) {
        var newMonth = month(d) + v;
        var newMonth_ = 0;
        var yearOffset = 0;
        if (newMonth > 12) {
            newMonth_ = newMonth % 12;
            yearOffset = Math.floor(newMonth / 12);
            newMonth = newMonth_;
        }
        else if (newMonth < 1) {
            newMonth_ = 12 + newMonth % 12;
            yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
            newMonth = newMonth_;
        }
        var newYear = year(d) + yearOffset;
        var _daysInMonth = daysInMonth(newYear, newMonth);
        var newDay = Math.min(_daysInMonth, day(d));
        return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
    }
    exports.addMonths = addMonths;
    function subtract(d, that) {
        return typeof that == "number"
            ? parse(d.getTime() - that, d.kind || 1)
            : d.getTime() - that.getTime();
    }
    exports.subtract = subtract;
    function toLongDateString(d) {
        return d.toDateString();
    }
    exports.toLongDateString = toLongDateString;
    function toShortDateString(d) {
        return d.toLocaleDateString();
    }
    exports.toShortDateString = toShortDateString;
    function toLongTimeString(d) {
        return d.toLocaleTimeString();
    }
    exports.toLongTimeString = toLongTimeString;
    function toShortTimeString(d) {
        return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
    }
    exports.toShortTimeString = toShortTimeString;
    function equals(d1, d2) {
        return d1.getTime() == d2.getTime();
    }
    exports.equals = equals;
    function compare(x, y) {
        return Util_1.compare(x, y);
    }
    exports.compare = compare;
    function compareTo(x, y) {
        return Util_1.compare(x, y);
    }
    exports.compareTo = compareTo;
    function op_Addition(x, y) {
        return add(x, y);
    }
    exports.op_Addition = op_Addition;
    function op_Subtraction(x, y) {
        return subtract(x, y);
    }
    exports.op_Subtraction = op_Subtraction;
});

},{"./Long":8,"./TimeSpan":14,"./Util":15}],5:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Util", "./Symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util_1 = require("./Util");
    var Symbol_1 = require("./Symbol");
    var GenericComparer = (function () {
        function GenericComparer(f) {
            this.Compare = f || Util_1.compare;
        }
        GenericComparer.prototype[Symbol_1.default.reflection] = function () {
            return { interfaces: ["System.IComparer"] };
        };
        return GenericComparer;
    }());
    exports.default = GenericComparer;
});

},{"./Symbol":13,"./Util":15}],6:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ListClass", "./Seq", "./Seq", "./Seq", "./Seq", "./Map", "./ListClass"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListClass_1 = require("./ListClass");
    var Seq_1 = require("./Seq");
    var Seq_2 = require("./Seq");
    var Seq_3 = require("./Seq");
    var Seq_4 = require("./Seq");
    var Map_1 = require("./Map");
    exports.default = ListClass_1.default;
    var ListClass_2 = require("./ListClass");
    exports.ofArray = ListClass_2.ofArray;
    function append(xs, ys) {
        return Seq_2.fold(function (acc, x) { return new ListClass_1.default(x, acc); }, ys, reverse(xs));
    }
    exports.append = append;
    function choose(f, xs) {
        var r = Seq_2.fold(function (acc, x) {
            var y = f(x);
            return y != null ? new ListClass_1.default(y, acc) : acc;
        }, new ListClass_1.default(), xs);
        return reverse(r);
    }
    exports.choose = choose;
    function collect(f, xs) {
        return Seq_2.fold(function (acc, x) { return append(acc, f(x)); }, new ListClass_1.default(), xs);
    }
    exports.collect = collect;
    function concat(xs) {
        return collect(function (x) { return x; }, xs);
    }
    exports.concat = concat;
    function filter(f, xs) {
        return reverse(Seq_2.fold(function (acc, x) { return f(x) ? new ListClass_1.default(x, acc) : acc; }, new ListClass_1.default(), xs));
    }
    exports.filter = filter;
    function where(f, xs) {
        return filter(f, xs);
    }
    exports.where = where;
    function initialize(n, f) {
        if (n < 0) {
            throw new Error("List length must be non-negative");
        }
        var xs = new ListClass_1.default();
        for (var i = 1; i <= n; i++) {
            xs = new ListClass_1.default(f(n - i), xs);
        }
        return xs;
    }
    exports.initialize = initialize;
    function map(f, xs) {
        return reverse(Seq_2.fold(function (acc, x) { return new ListClass_1.default(f(x), acc); }, new ListClass_1.default(), xs));
    }
    exports.map = map;
    function mapIndexed(f, xs) {
        return reverse(Seq_2.fold(function (acc, x, i) { return new ListClass_1.default(f(i, x), acc); }, new ListClass_1.default(), xs));
    }
    exports.mapIndexed = mapIndexed;
    function partition(f, xs) {
        return Seq_2.fold(function (acc, x) {
            var lacc = acc[0], racc = acc[1];
            return f(x) ? [new ListClass_1.default(x, lacc), racc] : [lacc, new ListClass_1.default(x, racc)];
        }, [new ListClass_1.default(), new ListClass_1.default()], reverse(xs));
    }
    exports.partition = partition;
    function replicate(n, x) {
        return initialize(n, function () { return x; });
    }
    exports.replicate = replicate;
    function reverse(xs) {
        return Seq_2.fold(function (acc, x) { return new ListClass_1.default(x, acc); }, new ListClass_1.default(), xs);
    }
    exports.reverse = reverse;
    function singleton(x) {
        return new ListClass_1.default(x, new ListClass_1.default());
    }
    exports.singleton = singleton;
    function slice(lower, upper, xs) {
        var noLower = (lower == null);
        var noUpper = (upper == null);
        return reverse(Seq_2.fold(function (acc, x, i) { return (noLower || lower <= i) && (noUpper || i <= upper) ? new ListClass_1.default(x, acc) : acc; }, new ListClass_1.default(), xs));
    }
    exports.slice = slice;
    function unzip(xs) {
        return Seq_3.foldBack(function (xy, acc) {
            return [new ListClass_1.default(xy[0], acc[0]), new ListClass_1.default(xy[1], acc[1])];
        }, xs, [new ListClass_1.default(), new ListClass_1.default()]);
    }
    exports.unzip = unzip;
    function unzip3(xs) {
        return Seq_3.foldBack(function (xyz, acc) {
            return [new ListClass_1.default(xyz[0], acc[0]), new ListClass_1.default(xyz[1], acc[1]), new ListClass_1.default(xyz[2], acc[2])];
        }, xs, [new ListClass_1.default(), new ListClass_1.default(), new ListClass_1.default()]);
    }
    exports.unzip3 = unzip3;
    function groupBy(f, xs) {
        return Seq_4.toList(Seq_1.map(function (k) { return [k[0], Seq_4.toList(k[1])]; }, Map_1.groupBy(f, xs)));
    }
    exports.groupBy = groupBy;
});

},{"./ListClass":7,"./Map":9,"./Seq":11}],7:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Symbol", "./Util", "./Util", "./Util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Symbol_1 = require("./Symbol");
    var Util_1 = require("./Util");
    var Util_2 = require("./Util");
    var Util_3 = require("./Util");
    function ofArray(args, base) {
        var acc = base || new List();
        for (var i = args.length - 1; i >= 0; i--) {
            acc = new List(args[i], acc);
        }
        return acc;
    }
    exports.ofArray = ofArray;
    var List = (function () {
        function List(head, tail) {
            this.head = head;
            this.tail = tail;
        }
        List.prototype.ToString = function () {
            return "[" + Array.from(this).map(Util_1.toString).join("; ") + "]";
        };
        List.prototype.Equals = function (x) {
            if (this === x) {
                return true;
            }
            else {
                var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
                for (;;) {
                    var cur1 = iter1.next(), cur2 = iter2.next();
                    if (cur1.done)
                        return cur2.done ? true : false;
                    else if (cur2.done)
                        return false;
                    else if (!Util_2.equals(cur1.value, cur2.value))
                        return false;
                }
            }
        };
        List.prototype.CompareTo = function (x) {
            if (this === x) {
                return 0;
            }
            else {
                var acc = 0;
                var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
                for (;;) {
                    var cur1 = iter1.next(), cur2 = iter2.next();
                    if (cur1.done)
                        return cur2.done ? acc : -1;
                    else if (cur2.done)
                        return 1;
                    else {
                        acc = Util_3.compare(cur1.value, cur2.value);
                        if (acc != 0)
                            return acc;
                    }
                }
            }
        };
        Object.defineProperty(List.prototype, "length", {
            get: function () {
                var cur = this, acc = 0;
                while (cur.tail != null) {
                    cur = cur.tail;
                    acc++;
                }
                return acc;
            },
            enumerable: true,
            configurable: true
        });
        List.prototype[Symbol.iterator] = function () {
            var cur = this;
            return {
                next: function () {
                    var tmp = cur;
                    cur = cur.tail;
                    return { done: tmp.tail == null, value: tmp.head };
                }
            };
        };
        List.prototype[Symbol_1.default.reflection] = function () {
            return {
                type: "Microsoft.FSharp.Collections.FSharpList",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        };
        return List;
    }());
    exports.default = List;
});

},{"./Symbol":13,"./Util":15}],8:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Symbol_1 = require("./Symbol");
    var Long = (function () {
        function Long(low, high, unsigned) {
            this.eq = this.equals;
            this.neq = this.notEquals;
            this.lt = this.lessThan;
            this.lte = this.lessThanOrEqual;
            this.gt = this.greaterThan;
            this.gte = this.greaterThanOrEqual;
            this.comp = this.compare;
            this.neg = this.negate;
            this.abs = this.absolute;
            this.sub = this.subtract;
            this.mul = this.multiply;
            this.div = this.divide;
            this.mod = this.modulo;
            this.shl = this.shiftLeft;
            this.shr = this.shiftRight;
            this.shru = this.shiftRightUnsigned;
            this.Equals = this.equals;
            this.CompareTo = this.compare;
            this.ToString = this.toString;
            this.low = low | 0;
            this.high = high | 0;
            this.unsigned = !!unsigned;
        }
        Long.prototype.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low;
        };
        Long.prototype.toNumber = function () {
            if (this.unsigned)
                return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
            return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        };
        Long.prototype.toString = function (radix) {
            if (radix === void 0) { radix = 10; }
            radix = radix || 10;
            if (radix < 2 || 36 < radix)
                throw RangeError('radix');
            if (this.isZero())
                return '0';
            if (this.isNegative()) {
                if (this.eq(exports.MIN_VALUE)) {
                    var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                    return div.toString(radix) + rem1.toInt().toString(radix);
                }
                else
                    return '-' + this.neg().toString(radix);
            }
            var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
            var result = '';
            while (true) {
                var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
                rem = remDiv;
                if (rem.isZero())
                    return digits + result;
                else {
                    while (digits.length < 6)
                        digits = '0' + digits;
                    result = '' + digits + result;
                }
            }
        };
        Long.prototype.getHighBits = function () {
            return this.high;
        };
        Long.prototype.getHighBitsUnsigned = function () {
            return this.high >>> 0;
        };
        Long.prototype.getLowBits = function () {
            return this.low;
        };
        Long.prototype.getLowBitsUnsigned = function () {
            return this.low >>> 0;
        };
        Long.prototype.getNumBitsAbs = function () {
            if (this.isNegative())
                return this.eq(exports.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
            var val = this.high != 0 ? this.high : this.low;
            for (var bit = 31; bit > 0; bit--)
                if ((val & (1 << bit)) != 0)
                    break;
            return this.high != 0 ? bit + 33 : bit + 1;
        };
        Long.prototype.isZero = function () {
            return this.high === 0 && this.low === 0;
        };
        Long.prototype.isNegative = function () {
            return !this.unsigned && this.high < 0;
        };
        Long.prototype.isPositive = function () {
            return this.unsigned || this.high >= 0;
        };
        Long.prototype.isOdd = function () {
            return (this.low & 1) === 1;
        };
        Long.prototype.isEven = function () {
            return (this.low & 1) === 0;
        };
        Long.prototype.equals = function (other) {
            if (!isLong(other))
                other = fromValue(other);
            if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
                return false;
            return this.high === other.high && this.low === other.low;
        };
        Long.prototype.notEquals = function (other) {
            return !this.eq(other);
        };
        Long.prototype.lessThan = function (other) {
            return this.comp(other) < 0;
        };
        Long.prototype.lessThanOrEqual = function (other) {
            return this.comp(other) <= 0;
        };
        Long.prototype.greaterThan = function (other) {
            return this.comp(other) > 0;
        };
        Long.prototype.greaterThanOrEqual = function (other) {
            return this.comp(other) >= 0;
        };
        Long.prototype.compare = function (other) {
            if (!isLong(other))
                other = fromValue(other);
            if (this.eq(other))
                return 0;
            var thisNeg = this.isNegative(), otherNeg = other.isNegative();
            if (thisNeg && !otherNeg)
                return -1;
            if (!thisNeg && otherNeg)
                return 1;
            if (!this.unsigned)
                return this.sub(other).isNegative() ? -1 : 1;
            return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
        };
        Long.prototype.negate = function () {
            if (!this.unsigned && this.eq(exports.MIN_VALUE))
                return exports.MIN_VALUE;
            return this.not().add(exports.ONE);
        };
        Long.prototype.absolute = function () {
            if (!this.unsigned && this.isNegative())
                return this.negate();
            else
                return this;
        };
        Long.prototype.add = function (addend) {
            if (!isLong(addend))
                addend = fromValue(addend);
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = addend.high >>> 16;
            var b32 = addend.high & 0xFFFF;
            var b16 = addend.low >>> 16;
            var b00 = addend.low & 0xFFFF;
            var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
            c00 += a00 + b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 + b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 + b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 + b48;
            c48 &= 0xFFFF;
            return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
        };
        Long.prototype.subtract = function (subtrahend) {
            if (!isLong(subtrahend))
                subtrahend = fromValue(subtrahend);
            return this.add(subtrahend.neg());
        };
        Long.prototype.multiply = function (multiplier) {
            if (this.isZero())
                return exports.ZERO;
            if (!isLong(multiplier))
                multiplier = fromValue(multiplier);
            if (multiplier.isZero())
                return exports.ZERO;
            if (this.eq(exports.MIN_VALUE))
                return multiplier.isOdd() ? exports.MIN_VALUE : exports.ZERO;
            if (multiplier.eq(exports.MIN_VALUE))
                return this.isOdd() ? exports.MIN_VALUE : exports.ZERO;
            if (this.isNegative()) {
                if (multiplier.isNegative())
                    return this.neg().mul(multiplier.neg());
                else
                    return this.neg().mul(multiplier).neg();
            }
            else if (multiplier.isNegative())
                return this.mul(multiplier.neg()).neg();
            if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
                return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = multiplier.high >>> 16;
            var b32 = multiplier.high & 0xFFFF;
            var b16 = multiplier.low >>> 16;
            var b00 = multiplier.low & 0xFFFF;
            var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
            c00 += a00 * b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 * b00;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c16 += a00 * b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 * b00;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a16 * b16;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a00 * b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
            c48 &= 0xFFFF;
            return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
        };
        Long.prototype.divide = function (divisor) {
            if (!isLong(divisor))
                divisor = fromValue(divisor);
            if (divisor.isZero())
                throw Error('division by zero');
            if (this.isZero())
                return this.unsigned ? exports.UZERO : exports.ZERO;
            var approx = 0, rem = exports.ZERO, res = exports.ZERO;
            if (!this.unsigned) {
                if (this.eq(exports.MIN_VALUE)) {
                    if (divisor.eq(exports.ONE) || divisor.eq(exports.NEG_ONE))
                        return exports.MIN_VALUE;
                    else if (divisor.eq(exports.MIN_VALUE))
                        return exports.ONE;
                    else {
                        var halfThis = this.shr(1);
                        var approx_1 = halfThis.div(divisor).shl(1);
                        if (approx_1.eq(exports.ZERO)) {
                            return divisor.isNegative() ? exports.ONE : exports.NEG_ONE;
                        }
                        else {
                            rem = this.sub(divisor.mul(approx_1));
                            res = approx_1.add(rem.div(divisor));
                            return res;
                        }
                    }
                }
                else if (divisor.eq(exports.MIN_VALUE))
                    return this.unsigned ? exports.UZERO : exports.ZERO;
                if (this.isNegative()) {
                    if (divisor.isNegative())
                        return this.neg().div(divisor.neg());
                    return this.neg().div(divisor).neg();
                }
                else if (divisor.isNegative())
                    return this.div(divisor.neg()).neg();
                res = exports.ZERO;
            }
            else {
                if (!divisor.unsigned)
                    divisor = divisor.toUnsigned();
                if (divisor.gt(this))
                    return exports.UZERO;
                if (divisor.gt(this.shru(1)))
                    return exports.UONE;
                res = exports.UZERO;
            }
            rem = this;
            while (rem.gte(divisor)) {
                approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
                var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
                while (approxRem.isNegative() || approxRem.gt(rem)) {
                    approx -= delta;
                    approxRes = fromNumber(approx, this.unsigned);
                    approxRem = approxRes.mul(divisor);
                }
                if (approxRes.isZero())
                    approxRes = exports.ONE;
                res = res.add(approxRes);
                rem = rem.sub(approxRem);
            }
            return res;
        };
        Long.prototype.modulo = function (divisor) {
            if (!isLong(divisor))
                divisor = fromValue(divisor);
            return this.sub(this.div(divisor).mul(divisor));
        };
        ;
        Long.prototype.not = function () {
            return fromBits(~this.low, ~this.high, this.unsigned);
        };
        ;
        Long.prototype.and = function (other) {
            if (!isLong(other))
                other = fromValue(other);
            return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
        };
        Long.prototype.or = function (other) {
            if (!isLong(other))
                other = fromValue(other);
            return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
        };
        Long.prototype.xor = function (other) {
            if (!isLong(other))
                other = fromValue(other);
            return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
        };
        Long.prototype.shiftLeft = function (numBits) {
            if (isLong(numBits))
                numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0)
                return this;
            else if (numBits < 32)
                return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
            else
                return fromBits(0, this.low << (numBits - 32), this.unsigned);
        };
        Long.prototype.shiftRight = function (numBits) {
            if (isLong(numBits))
                numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0)
                return this;
            else if (numBits < 32)
                return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
            else
                return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
        };
        Long.prototype.shiftRightUnsigned = function (numBits) {
            if (isLong(numBits))
                numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0)
                return this;
            else {
                var high = this.high;
                if (numBits < 32) {
                    var low = this.low;
                    return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
                }
                else if (numBits === 32)
                    return fromBits(high, 0, this.unsigned);
                else
                    return fromBits(high >>> (numBits - 32), 0, this.unsigned);
            }
        };
        Long.prototype.toSigned = function () {
            if (!this.unsigned)
                return this;
            return fromBits(this.low, this.high, false);
        };
        Long.prototype.toUnsigned = function () {
            if (this.unsigned)
                return this;
            return fromBits(this.low, this.high, true);
        };
        Long.prototype.toBytes = function (le) {
            return le ? this.toBytesLE() : this.toBytesBE();
        };
        Long.prototype.toBytesLE = function () {
            var hi = this.high, lo = this.low;
            return [
                lo & 0xff,
                (lo >>> 8) & 0xff,
                (lo >>> 16) & 0xff,
                (lo >>> 24) & 0xff,
                hi & 0xff,
                (hi >>> 8) & 0xff,
                (hi >>> 16) & 0xff,
                (hi >>> 24) & 0xff
            ];
        };
        Long.prototype.toBytesBE = function () {
            var hi = this.high, lo = this.low;
            return [
                (hi >>> 24) & 0xff,
                (hi >>> 16) & 0xff,
                (hi >>> 8) & 0xff,
                hi & 0xff,
                (lo >>> 24) & 0xff,
                (lo >>> 16) & 0xff,
                (lo >>> 8) & 0xff,
                lo & 0xff
            ];
        };
        Long.prototype[Symbol_1.default.reflection] = function () {
            return {
                type: "System.Int64",
                interfaces: ["FSharpRecord", "System.IComparable"],
                properties: {
                    low: "number",
                    high: "number",
                    unsigned: "boolean"
                }
            };
        };
        return Long;
    }());
    exports.Long = Long;
    var INT_CACHE = {};
    var UINT_CACHE = {};
    function isLong(obj) {
        return (obj && obj instanceof Long);
    }
    exports.isLong = isLong;
    function fromInt(value, unsigned) {
        if (unsigned === void 0) { unsigned = false; }
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = (0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        }
        else {
            value |= 0;
            if (cache = (-128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }
    exports.fromInt = fromInt;
    function fromNumber(value, unsigned) {
        if (unsigned === void 0) { unsigned = false; }
        if (isNaN(value) || !isFinite(value))
            return unsigned ? exports.UZERO : exports.ZERO;
        if (unsigned) {
            if (value < 0)
                return exports.UZERO;
            if (value >= TWO_PWR_64_DBL)
                return exports.MAX_UNSIGNED_VALUE;
        }
        else {
            if (value <= -TWO_PWR_63_DBL)
                return exports.MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return exports.MAX_VALUE;
        }
        if (value < 0)
            return fromNumber(-value, unsigned).neg();
        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }
    exports.fromNumber = fromNumber;
    function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    exports.fromBits = fromBits;
    var pow_dbl = Math.pow;
    function fromString(str, unsigned, radix) {
        if (unsigned === void 0) { unsigned = false; }
        if (radix === void 0) { radix = 10; }
        if (str.length === 0)
            throw Error('empty string');
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
            return exports.ZERO;
        if (typeof unsigned === 'number') {
            radix = unsigned,
                unsigned = false;
        }
        else {
            unsigned = !!unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        var p = str.indexOf('-');
        if (p > 0)
            throw Error('interior hyphen');
        else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = exports.ZERO;
        for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            }
            else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    exports.fromString = fromString;
    function fromValue(val) {
        if (val instanceof Long)
            return val;
        if (typeof val === 'number')
            return fromNumber(val);
        if (typeof val === 'string')
            return fromString(val);
        return fromBits(val.low, val.high, val.unsigned);
    }
    exports.fromValue = fromValue;
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    exports.ZERO = fromInt(0);
    exports.UZERO = fromInt(0, true);
    exports.ONE = fromInt(1);
    exports.UONE = fromInt(1, true);
    exports.NEG_ONE = fromInt(-1);
    exports.MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
    exports.MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
    exports.MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
});

},{"./Symbol":13}],9:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ListClass", "./ListClass", "./Util", "./Util", "./Util", "./GenericComparer", "./Symbol", "./Seq", "./Seq", "./Seq", "./Seq", "./Seq"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListClass_1 = require("./ListClass");
    var ListClass_2 = require("./ListClass");
    var Util_1 = require("./Util");
    var Util_2 = require("./Util");
    var Util_3 = require("./Util");
    var GenericComparer_1 = require("./GenericComparer");
    var Symbol_1 = require("./Symbol");
    var Seq_1 = require("./Seq");
    var Seq_2 = require("./Seq");
    var Seq_3 = require("./Seq");
    var Seq_4 = require("./Seq");
    var Seq_5 = require("./Seq");
    function groupBy(f, xs) {
        var keys = [], iter = xs[Symbol.iterator]();
        var acc = create(), cur = iter.next();
        while (!cur.done) {
            var k = f(cur.value), vs = tryFind(k, acc);
            if (vs == null) {
                keys.push(k);
                acc = add(k, [cur.value], acc);
            }
            else {
                vs.push(cur.value);
            }
            cur = iter.next();
        }
        return keys.map(function (k) { return [k, acc.get(k)]; });
    }
    exports.groupBy = groupBy;
    function countBy(f, xs) {
        return groupBy(f, xs).map(function (kv) { return [kv[0], kv[1].length]; });
    }
    exports.countBy = countBy;
    var MapTree = (function () {
        function MapTree(caseName, fields) {
            this.Case = caseName;
            this.Fields = fields;
        }
        return MapTree;
    }());
    exports.MapTree = MapTree;
    function tree_sizeAux(acc, m) {
        return m.Case === "MapOne"
            ? acc + 1
            : m.Case === "MapNode"
                ? tree_sizeAux(tree_sizeAux(acc + 1, m.Fields[2]), m.Fields[3])
                : acc;
    }
    function tree_size(x) {
        return tree_sizeAux(0, x);
    }
    function tree_empty() {
        return new MapTree("MapEmpty", []);
    }
    function tree_height(_arg1) {
        return _arg1.Case === "MapOne" ? 1 : _arg1.Case === "MapNode" ? _arg1.Fields[4] : 0;
    }
    function tree_isEmpty(m) {
        return m.Case === "MapEmpty" ? true : false;
    }
    function tree_mk(l, k, v, r) {
        var matchValue = [l, r];
        var $target1 = function () {
            var hl = tree_height(l);
            var hr = tree_height(r);
            var m = hl < hr ? hr : hl;
            return new MapTree("MapNode", [k, v, l, r, m + 1]);
        };
        if (matchValue[0].Case === "MapEmpty") {
            if (matchValue[1].Case === "MapEmpty") {
                return new MapTree("MapOne", [k, v]);
            }
            else {
                return $target1();
            }
        }
        else {
            return $target1();
        }
    }
    ;
    function tree_rebalance(t1, k, v, t2) {
        var t1h = tree_height(t1);
        var t2h = tree_height(t2);
        if (t2h > t1h + 2) {
            if (t2.Case === "MapNode") {
                if (tree_height(t2.Fields[2]) > t1h + 1) {
                    if (t2.Fields[2].Case === "MapNode") {
                        return tree_mk(tree_mk(t1, k, v, t2.Fields[2].Fields[2]), t2.Fields[2].Fields[0], t2.Fields[2].Fields[1], tree_mk(t2.Fields[2].Fields[3], t2.Fields[0], t2.Fields[1], t2.Fields[3]));
                    }
                    else {
                        throw new Error("rebalance");
                    }
                }
                else {
                    return tree_mk(tree_mk(t1, k, v, t2.Fields[2]), t2.Fields[0], t2.Fields[1], t2.Fields[3]);
                }
            }
            else {
                throw new Error("rebalance");
            }
        }
        else {
            if (t1h > t2h + 2) {
                if (t1.Case === "MapNode") {
                    if (tree_height(t1.Fields[3]) > t2h + 1) {
                        if (t1.Fields[3].Case === "MapNode") {
                            return tree_mk(tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], t1.Fields[3].Fields[2]), t1.Fields[3].Fields[0], t1.Fields[3].Fields[1], tree_mk(t1.Fields[3].Fields[3], k, v, t2));
                        }
                        else {
                            throw new Error("rebalance");
                        }
                    }
                    else {
                        return tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], tree_mk(t1.Fields[3], k, v, t2));
                    }
                }
                else {
                    throw new Error("rebalance");
                }
            }
            else {
                return tree_mk(t1, k, v, t2);
            }
        }
    }
    function tree_add(comparer, k, v, m) {
        if (m.Case === "MapOne") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c < 0) {
                return new MapTree("MapNode", [k, v, new MapTree("MapEmpty", []), m, 2]);
            }
            else if (c === 0) {
                return new MapTree("MapOne", [k, v]);
            }
            return new MapTree("MapNode", [k, v, m, new MapTree("MapEmpty", []), 2]);
        }
        else if (m.Case === "MapNode") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c < 0) {
                return tree_rebalance(tree_add(comparer, k, v, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
            }
            else if (c === 0) {
                return new MapTree("MapNode", [k, v, m.Fields[2], m.Fields[3], m.Fields[4]]);
            }
            return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_add(comparer, k, v, m.Fields[3]));
        }
        return new MapTree("MapOne", [k, v]);
    }
    function tree_find(comparer, k, m) {
        var res = tree_tryFind(comparer, k, m);
        if (res != null)
            return res;
        throw new Error("key not found");
    }
    function tree_tryFind(comparer, k, m) {
        if (m.Case === "MapOne") {
            var c = comparer.Compare(k, m.Fields[0]);
            return c === 0 ? m.Fields[1] : null;
        }
        else if (m.Case === "MapNode") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c < 0) {
                return tree_tryFind(comparer, k, m.Fields[2]);
            }
            else {
                if (c === 0) {
                    return m.Fields[1];
                }
                else {
                    return tree_tryFind(comparer, k, m.Fields[3]);
                }
            }
        }
        return null;
    }
    function tree_partition1(comparer, f, k, v, acc1, acc2) {
        return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
    }
    function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
        var acc = [acc_0, acc_1];
        if (s.Case === "MapOne") {
            return tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc[0], acc[1]);
        }
        else if (s.Case === "MapNode") {
            var acc_2 = tree_partitionAux(comparer, f, s.Fields[3], acc[0], acc[1]);
            var acc_3 = tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc_2[0], acc_2[1]);
            return tree_partitionAux(comparer, f, s.Fields[2], acc_3[0], acc_3[1]);
        }
        return acc;
    }
    function tree_partition(comparer, f, s) {
        return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
    }
    function tree_filter1(comparer, f, k, v, acc) {
        return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
    }
    function tree_filterAux(comparer, f, s, acc) {
        return s.Case === "MapOne" ? tree_filter1(comparer, f, s.Fields[0], s.Fields[1], acc) : s.Case === "MapNode" ? tree_filterAux(comparer, f, s.Fields[3], tree_filter1(comparer, f, s.Fields[0], s.Fields[1], tree_filterAux(comparer, f, s.Fields[2], acc))) : acc;
    }
    function tree_filter(comparer, f, s) {
        return tree_filterAux(comparer, f, s, tree_empty());
    }
    function tree_spliceOutSuccessor(m) {
        if (m.Case === "MapOne") {
            return [m.Fields[0], m.Fields[1], new MapTree("MapEmpty", [])];
        }
        else if (m.Case === "MapNode") {
            if (m.Fields[2].Case === "MapEmpty") {
                return [m.Fields[0], m.Fields[1], m.Fields[3]];
            }
            else {
                var kvl = tree_spliceOutSuccessor(m.Fields[2]);
                return [kvl[0], kvl[1], tree_mk(kvl[2], m.Fields[0], m.Fields[1], m.Fields[3])];
            }
        }
        throw new Error("internal error: Map.spliceOutSuccessor");
    }
    function tree_remove(comparer, k, m) {
        if (m.Case === "MapOne") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c === 0) {
                return new MapTree("MapEmpty", []);
            }
            else {
                return m;
            }
        }
        else if (m.Case === "MapNode") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c < 0) {
                return tree_rebalance(tree_remove(comparer, k, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
            }
            else {
                if (c === 0) {
                    var matchValue = [m.Fields[2], m.Fields[3]];
                    if (matchValue[0].Case === "MapEmpty") {
                        return m.Fields[3];
                    }
                    else {
                        if (matchValue[1].Case === "MapEmpty") {
                            return m.Fields[2];
                        }
                        else {
                            var patternInput = tree_spliceOutSuccessor(m.Fields[3]);
                            var sv = patternInput[1];
                            var sk = patternInput[0];
                            var r_ = patternInput[2];
                            return tree_mk(m.Fields[2], sk, sv, r_);
                        }
                    }
                }
                else {
                    return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_remove(comparer, k, m.Fields[3]));
                }
            }
        }
        else {
            return tree_empty();
        }
    }
    function tree_mem(comparer, k, m) {
        if (m.Case === "MapOne") {
            return comparer.Compare(k, m.Fields[0]) === 0;
        }
        else if (m.Case === "MapNode") {
            var c = comparer.Compare(k, m.Fields[0]);
            if (c < 0) {
                return tree_mem(comparer, k, m.Fields[2]);
            }
            else {
                if (c === 0) {
                    return true;
                }
                else {
                    return tree_mem(comparer, k, m.Fields[3]);
                }
            }
        }
        else {
            return false;
        }
    }
    function tree_iter(f, m) {
        if (m.Case === "MapOne") {
            f(m.Fields[0], m.Fields[1]);
        }
        else if (m.Case === "MapNode") {
            tree_iter(f, m.Fields[2]);
            f(m.Fields[0], m.Fields[1]);
            tree_iter(f, m.Fields[3]);
        }
    }
    function tree_tryPick(f, m) {
        if (m.Case === "MapOne") {
            return f(m.Fields[0], m.Fields[1]);
        }
        else if (m.Case === "MapNode") {
            var matchValue = tree_tryPick(f, m.Fields[2]);
            if (matchValue == null) {
                var matchValue_1 = f(m.Fields[0], m.Fields[1]);
                if (matchValue_1 == null) {
                    return tree_tryPick(f, m.Fields[3]);
                }
                else {
                    var res = matchValue_1;
                    return res;
                }
            }
            else {
                var res = matchValue;
                return res;
            }
        }
        else {
            return null;
        }
    }
    function tree_exists(f, m) {
        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_exists(f, m.Fields[2]) ? true : f(m.Fields[0], m.Fields[1])) ? true : tree_exists(f, m.Fields[3]) : false;
    }
    function tree_forall(f, m) {
        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_forall(f, m.Fields[2]) ? f(m.Fields[0], m.Fields[1]) : false) ? tree_forall(f, m.Fields[3]) : false : true;
    }
    function tree_mapi(f, m) {
        return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[0], m.Fields[1])]) : m.Case === "MapNode" ? new MapTree("MapNode", [m.Fields[0], f(m.Fields[0], m.Fields[1]), tree_mapi(f, m.Fields[2]), tree_mapi(f, m.Fields[3]), m.Fields[4]]) : tree_empty();
    }
    function tree_foldBack(f, m, x) {
        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1], x) : m.Case === "MapNode" ? tree_foldBack(f, m.Fields[2], f(m.Fields[0], m.Fields[1], tree_foldBack(f, m.Fields[3], x))) : x;
    }
    function tree_fold(f, x, m) {
        return m.Case === "MapOne" ? f(x, m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? tree_fold(f, f(tree_fold(f, x, m.Fields[2]), m.Fields[0], m.Fields[1]), m.Fields[3]) : x;
    }
    function tree_mkFromEnumerator(comparer, acc, e) {
        var cur = e.next();
        while (!cur.done) {
            acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
            cur = e.next();
        }
        return acc;
    }
    function tree_ofSeq(comparer, c) {
        var ie = c[Symbol.iterator]();
        return tree_mkFromEnumerator(comparer, tree_empty(), ie);
    }
    function tree_collapseLHS(stack) {
        if (stack.tail != null) {
            if (stack.head.Case === "MapOne") {
                return stack;
            }
            else if (stack.head.Case === "MapNode") {
                return tree_collapseLHS(ListClass_2.ofArray([
                    stack.head.Fields[2],
                    new MapTree("MapOne", [stack.head.Fields[0], stack.head.Fields[1]]),
                    stack.head.Fields[3]
                ], stack.tail));
            }
            else {
                return tree_collapseLHS(stack.tail);
            }
        }
        else {
            return new ListClass_1.default();
        }
    }
    function tree_mkIterator(s) {
        return { stack: tree_collapseLHS(new ListClass_1.default(s, new ListClass_1.default())), started: false };
    }
    function tree_moveNext(i) {
        function current(i) {
            if (i.stack.tail == null) {
                return null;
            }
            else if (i.stack.head.Case === "MapOne") {
                return [i.stack.head.Fields[0], i.stack.head.Fields[1]];
            }
            throw new Error("Please report error: Map iterator, unexpected stack for current");
        }
        if (i.started) {
            if (i.stack.tail == null) {
                return { done: true, value: null };
            }
            else {
                if (i.stack.head.Case === "MapOne") {
                    i.stack = tree_collapseLHS(i.stack.tail);
                    return {
                        done: i.stack.tail == null,
                        value: current(i)
                    };
                }
                else {
                    throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
                }
            }
        }
        else {
            i.started = true;
            return {
                done: i.stack.tail == null,
                value: current(i)
            };
        }
        ;
    }
    var FableMap = (function () {
        function FableMap() {
        }
        FableMap.prototype.ToString = function () {
            return "map [" + Array.from(this).map(Util_1.toString).join("; ") + "]";
        };
        FableMap.prototype.Equals = function (m2) {
            return this.CompareTo(m2) === 0;
        };
        FableMap.prototype.CompareTo = function (m2) {
            var _this = this;
            return this === m2 ? 0 : Seq_5.compareWith(function (kvp1, kvp2) {
                var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
                return c !== 0 ? c : Util_3.compare(kvp1[1], kvp2[1]);
            }, this, m2);
        };
        FableMap.prototype[Symbol.iterator] = function () {
            var i = tree_mkIterator(this.tree);
            return {
                next: function () { return tree_moveNext(i); }
            };
        };
        FableMap.prototype.entries = function () {
            return this[Symbol.iterator]();
        };
        FableMap.prototype.keys = function () {
            return Seq_1.map(function (kv) { return kv[0]; }, this);
        };
        FableMap.prototype.values = function () {
            return Seq_1.map(function (kv) { return kv[1]; }, this);
        };
        FableMap.prototype.get = function (k) {
            return tree_find(this.comparer, k, this.tree);
        };
        FableMap.prototype.has = function (k) {
            return tree_mem(this.comparer, k, this.tree);
        };
        FableMap.prototype.set = function (k, v) {
            throw new Error("not supported");
        };
        FableMap.prototype.delete = function (k) {
            throw new Error("not supported");
        };
        FableMap.prototype.clear = function () {
            throw new Error("not supported");
        };
        Object.defineProperty(FableMap.prototype, "size", {
            get: function () {
                return tree_size(this.tree);
            },
            enumerable: true,
            configurable: true
        });
        FableMap.prototype[Symbol_1.default.reflection] = function () {
            return {
                type: "Microsoft.FSharp.Collections.FSharpMap",
                interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
            };
        };
        return FableMap;
    }());
    exports.default = FableMap;
    function from(comparer, tree) {
        var map = new FableMap();
        map.tree = tree;
        map.comparer = comparer || new GenericComparer_1.default();
        return map;
    }
    function create(ie, comparer) {
        comparer = comparer || new GenericComparer_1.default();
        return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
    }
    exports.create = create;
    function add(k, v, map) {
        return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
    }
    exports.add = add;
    function remove(item, map) {
        return from(map.comparer, tree_remove(map.comparer, item, map.tree));
    }
    exports.remove = remove;
    function containsValue(v, map) {
        return Seq_2.fold(function (acc, k) { return acc || Util_2.equals(map.get(k), v); }, false, map.keys());
    }
    exports.containsValue = containsValue;
    function tryGetValue(map, key, defaultValue) {
        return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
    }
    exports.tryGetValue = tryGetValue;
    function exists(f, map) {
        return tree_exists(f, map.tree);
    }
    exports.exists = exists;
    function find(k, map) {
        return tree_find(map.comparer, k, map.tree);
    }
    exports.find = find;
    function tryFind(k, map) {
        return tree_tryFind(map.comparer, k, map.tree);
    }
    exports.tryFind = tryFind;
    function filter(f, map) {
        return from(map.comparer, tree_filter(map.comparer, f, map.tree));
    }
    exports.filter = filter;
    function fold(f, seed, map) {
        return tree_fold(f, seed, map.tree);
    }
    exports.fold = fold;
    function foldBack(f, map, seed) {
        return tree_foldBack(f, map.tree, seed);
    }
    exports.foldBack = foldBack;
    function forAll(f, map) {
        return tree_forall(f, map.tree);
    }
    exports.forAll = forAll;
    function isEmpty(map) {
        return tree_isEmpty(map.tree);
    }
    exports.isEmpty = isEmpty;
    function iterate(f, map) {
        tree_iter(f, map.tree);
    }
    exports.iterate = iterate;
    function map(f, map) {
        return from(map.comparer, tree_mapi(f, map.tree));
    }
    exports.map = map;
    function partition(f, map) {
        var rs = tree_partition(map.comparer, f, map.tree);
        return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
    }
    exports.partition = partition;
    function findKey(f, map) {
        return Seq_3.pick(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
    }
    exports.findKey = findKey;
    function tryFindKey(f, map) {
        return Seq_4.tryPick(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
    }
    exports.tryFindKey = tryFindKey;
    function pick(f, map) {
        var res = tryPick(f, map);
        if (res != null)
            return res;
        throw new Error("key not found");
    }
    exports.pick = pick;
    function tryPick(f, map) {
        return tree_tryPick(f, map.tree);
    }
    exports.tryPick = tryPick;
});

},{"./GenericComparer":5,"./ListClass":7,"./Seq":11,"./Symbol":13,"./Util":15}],10:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function create(pattern, options) {
        var flags = "g";
        flags += options & 1 ? "i" : "";
        flags += options & 2 ? "m" : "";
        return new RegExp(pattern, flags);
    }
    exports.create = create;
    function escape(str) {
        return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    exports.escape = escape;
    function unescape(str) {
        return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
    }
    exports.unescape = unescape;
    function isMatch(str, pattern, options) {
        if (options === void 0) { options = 0; }
        var reg = str instanceof RegExp
            ? (reg = str, str = pattern, reg.lastIndex = options, reg)
            : reg = create(pattern, options);
        return reg.test(str);
    }
    exports.isMatch = isMatch;
    function match(str, pattern, options) {
        if (options === void 0) { options = 0; }
        var reg = str instanceof RegExp
            ? (reg = str, str = pattern, reg.lastIndex = options, reg)
            : reg = create(pattern, options);
        return reg.exec(str);
    }
    exports.match = match;
    function matches(str, pattern, options) {
        if (options === void 0) { options = 0; }
        var reg = str instanceof RegExp
            ? (reg = str, str = pattern, reg.lastIndex = options, reg)
            : reg = create(pattern, options);
        if (!reg.global)
            throw new Error("Non-global RegExp");
        var m;
        var matches = [];
        while ((m = reg.exec(str)) !== null)
            matches.push(m);
        return matches;
    }
    exports.matches = matches;
    function options(reg) {
        var options = 256;
        options |= reg.ignoreCase ? 1 : 0;
        options |= reg.multiline ? 2 : 0;
        return options;
    }
    exports.options = options;
    function replace(reg, input, replacement, limit, offset) {
        if (offset === void 0) { offset = 0; }
        function replacer() {
            var res = arguments[0];
            if (limit !== 0) {
                limit--;
                var match_1 = [];
                var len = arguments.length;
                for (var i = 0; i < len - 2; i++)
                    match_1.push(arguments[i]);
                match_1.index = arguments[len - 2];
                match_1.input = arguments[len - 1];
                res = replacement(match_1);
            }
            return res;
        }
        if (typeof reg == "string") {
            var tmp = reg;
            reg = create(input, limit);
            input = tmp;
            limit = undefined;
        }
        if (typeof replacement == "function") {
            limit = limit == null ? -1 : limit;
            return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
        }
        else {
            if (limit != null) {
                var m = void 0;
                var sub1 = input.substring(offset);
                var _matches = matches(reg, sub1);
                var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
                return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
            }
            else {
                return input.replace(reg, replacement);
            }
        }
    }
    exports.replace = replace;
    function split(reg, input, limit, offset) {
        if (offset === void 0) { offset = 0; }
        if (typeof reg == "string") {
            var tmp = reg;
            reg = create(input, limit);
            input = tmp;
            limit = undefined;
        }
        input = input.substring(offset);
        return input.split(reg, limit);
    }
    exports.split = split;
});

},{}],11:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Util", "./Util", "./Array", "./ListClass"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util_1 = require("./Util");
    var Util_2 = require("./Util");
    var Array_1 = require("./Array");
    var ListClass_1 = require("./ListClass");
    var Enumerator = (function () {
        function Enumerator(iter) {
            this.iter = iter;
        }
        Enumerator.prototype.MoveNext = function () {
            var cur = this.iter.next();
            this.current = cur.value;
            return !cur.done;
        };
        Object.defineProperty(Enumerator.prototype, "Current", {
            get: function () {
                return this.current;
            },
            enumerable: true,
            configurable: true
        });
        Enumerator.prototype.Reset = function () {
            throw new Error("JS iterators cannot be reset");
        };
        Enumerator.prototype.Dispose = function () { };
        return Enumerator;
    }());
    exports.Enumerator = Enumerator;
    function getEnumerator(o) {
        return typeof o.GetEnumerator === "function"
            ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
    }
    exports.getEnumerator = getEnumerator;
    function toIterator(en) {
        return {
            next: function () {
                return en.MoveNext()
                    ? { done: false, value: en.Current }
                    : { done: true, value: null };
            }
        };
    }
    exports.toIterator = toIterator;
    function __failIfNone(res) {
        if (res == null)
            throw new Error("Seq did not contain any matching element");
        return res;
    }
    function toList(xs) {
        return foldBack(function (x, acc) {
            return new ListClass_1.default(x, acc);
        }, xs, new ListClass_1.default());
    }
    exports.toList = toList;
    function ofList(xs) {
        return delay(function () { return unfold(function (x) { return x.tail != null ? [x.head, x.tail] : null; }, xs); });
    }
    exports.ofList = ofList;
    function ofArray(xs) {
        return delay(function () { return unfold(function (i) { return i < xs.length ? [xs[i], i + 1] : null; }, 0); });
    }
    exports.ofArray = ofArray;
    function append(xs, ys) {
        return delay(function () {
            var firstDone = false;
            var i = xs[Symbol.iterator]();
            var iters = [i, null];
            return unfold(function () {
                var cur;
                if (!firstDone) {
                    cur = iters[0].next();
                    if (!cur.done) {
                        return [cur.value, iters];
                    }
                    else {
                        firstDone = true;
                        iters = [null, ys[Symbol.iterator]()];
                    }
                }
                cur = iters[1].next();
                return !cur.done ? [cur.value, iters] : null;
            }, iters);
        });
    }
    exports.append = append;
    function average(xs) {
        var count = 1;
        var sum = reduce(function (acc, x) {
            count++;
            return acc + x;
        }, xs);
        return sum / count;
    }
    exports.average = average;
    function averageBy(f, xs) {
        var count = 1;
        var sum = reduce(function (acc, x) {
            count++;
            return (count === 2 ? f(acc) : acc) + f(x);
        }, xs);
        return sum / count;
    }
    exports.averageBy = averageBy;
    function concat(xs) {
        return delay(function () {
            var iter = xs[Symbol.iterator]();
            var output = { value: null };
            return unfold(function (innerIter) {
                var hasFinished = false;
                while (!hasFinished) {
                    if (innerIter == null) {
                        var cur = iter.next();
                        if (!cur.done) {
                            innerIter = cur.value[Symbol.iterator]();
                        }
                        else {
                            hasFinished = true;
                        }
                    }
                    else {
                        var cur = innerIter.next();
                        if (!cur.done) {
                            output = { value: cur.value };
                            hasFinished = true;
                        }
                        else {
                            innerIter = null;
                        }
                    }
                }
                return innerIter != null && output != null ? [output.value, innerIter] : null;
            }, null);
        });
    }
    exports.concat = concat;
    function collect(f, xs) {
        return concat(map(f, xs));
    }
    exports.collect = collect;
    function choose(f, xs) {
        var trySkipToNext = function (iter) {
            var cur = iter.next();
            if (!cur.done) {
                var y = f(cur.value);
                return y != null ? [y, iter] : trySkipToNext(iter);
            }
            return void 0;
        };
        return delay(function () {
            return unfold(function (iter) {
                return trySkipToNext(iter);
            }, xs[Symbol.iterator]());
        });
    }
    exports.choose = choose;
    function compareWith(f, xs, ys) {
        var nonZero = tryFind(function (i) { return i != 0; }, map2(function (x, y) { return f(x, y); }, xs, ys));
        return nonZero != null ? nonZero : count(xs) - count(ys);
    }
    exports.compareWith = compareWith;
    function delay(f) {
        return _a = {},
            _a[Symbol.iterator] = function () { return f()[Symbol.iterator](); },
            _a;
        var _a;
    }
    exports.delay = delay;
    function empty() {
        return unfold(function () { return void 0; });
    }
    exports.empty = empty;
    function enumerateWhile(cond, xs) {
        return concat(unfold(function () { return cond() ? [xs, true] : null; }));
    }
    exports.enumerateWhile = enumerateWhile;
    function enumerateThenFinally(xs, finalFn) {
        return delay(function () {
            var iter;
            try {
                iter = xs[Symbol.iterator]();
            }
            catch (err) {
                return void 0;
            }
            finally {
                finalFn();
            }
            return unfold(function (iter) {
                try {
                    var cur = iter.next();
                    return !cur.done ? [cur.value, iter] : null;
                }
                catch (err) {
                    return void 0;
                }
                finally {
                    finalFn();
                }
            }, iter);
        });
    }
    exports.enumerateThenFinally = enumerateThenFinally;
    function enumerateUsing(disp, work) {
        var isDisposed = false;
        var disposeOnce = function () {
            if (!isDisposed) {
                isDisposed = true;
                disp.Dispose();
            }
        };
        try {
            return enumerateThenFinally(work(disp), disposeOnce);
        }
        catch (err) {
            return void 0;
        }
        finally {
            disposeOnce();
        }
    }
    exports.enumerateUsing = enumerateUsing;
    function exactlyOne(xs) {
        var iter = xs[Symbol.iterator]();
        var fst = iter.next();
        if (fst.done)
            throw new Error("Seq was empty");
        var snd = iter.next();
        if (!snd.done)
            throw new Error("Seq had multiple items");
        return fst.value;
    }
    exports.exactlyOne = exactlyOne;
    function except(itemsToExclude, source) {
        var exclusionItems = Array.from(itemsToExclude);
        var testIsNotInExclusionItems = function (element) { return !exclusionItems.some(function (excludedItem) { return Util_1.equals(excludedItem, element); }); };
        return filter(testIsNotInExclusionItems, source);
    }
    exports.except = except;
    function exists(f, xs) {
        function aux(iter) {
            var cur = iter.next();
            return !cur.done && (f(cur.value) || aux(iter));
        }
        return aux(xs[Symbol.iterator]());
    }
    exports.exists = exists;
    function exists2(f, xs, ys) {
        function aux(iter1, iter2) {
            var cur1 = iter1.next(), cur2 = iter2.next();
            return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
        }
        return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
    }
    exports.exists2 = exists2;
    function filter(f, xs) {
        function trySkipToNext(iter) {
            var cur = iter.next();
            while (!cur.done) {
                if (f(cur.value)) {
                    return [cur.value, iter];
                }
                cur = iter.next();
            }
            return void 0;
        }
        return delay(function () { return unfold(trySkipToNext, xs[Symbol.iterator]()); });
    }
    exports.filter = filter;
    function where(f, xs) {
        return filter(f, xs);
    }
    exports.where = where;
    function fold(f, acc, xs) {
        if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
            return xs.reduce(f, acc);
        }
        else {
            var cur = void 0;
            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
                cur = iter.next();
                if (cur.done)
                    break;
                acc = f(acc, cur.value, i);
            }
            return acc;
        }
    }
    exports.fold = fold;
    function foldBack(f, xs, acc) {
        var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
        for (var i = arr.length - 1; i >= 0; i--) {
            acc = f(arr[i], acc, i);
        }
        return acc;
    }
    exports.foldBack = foldBack;
    function fold2(f, acc, xs, ys) {
        var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();
        var cur1, cur2;
        for (var i = 0;; i++) {
            cur1 = iter1.next();
            cur2 = iter2.next();
            if (cur1.done || cur2.done) {
                break;
            }
            acc = f(acc, cur1.value, cur2.value, i);
        }
        return acc;
    }
    exports.fold2 = fold2;
    function foldBack2(f, xs, ys, acc) {
        var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
        var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
        for (var i = ar1.length - 1; i >= 0; i--) {
            acc = f(ar1[i], ar2[i], acc, i);
        }
        return acc;
    }
    exports.foldBack2 = foldBack2;
    function forAll(f, xs) {
        return fold(function (acc, x) { return acc && f(x); }, true, xs);
    }
    exports.forAll = forAll;
    function forAll2(f, xs, ys) {
        return fold2(function (acc, x, y) { return acc && f(x, y); }, true, xs, ys);
    }
    exports.forAll2 = forAll2;
    function tryHead(xs) {
        var iter = xs[Symbol.iterator]();
        var cur = iter.next();
        return cur.done ? null : cur.value;
    }
    exports.tryHead = tryHead;
    function head(xs) {
        return __failIfNone(tryHead(xs));
    }
    exports.head = head;
    function initialize(n, f) {
        return delay(function () {
            return unfold(function (i) { return i < n ? [f(i), i + 1] : null; }, 0);
        });
    }
    exports.initialize = initialize;
    function initializeInfinite(f) {
        return delay(function () {
            return unfold(function (i) { return [f(i), i + 1]; }, 0);
        });
    }
    exports.initializeInfinite = initializeInfinite;
    function tryItem(i, xs) {
        if (i < 0)
            return null;
        if (Array.isArray(xs) || ArrayBuffer.isView(xs))
            return i < xs.length ? xs[i] : null;
        for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
            var cur = iter.next();
            if (cur.done)
                return null;
            if (j === i)
                return cur.value;
        }
    }
    exports.tryItem = tryItem;
    function item(i, xs) {
        return __failIfNone(tryItem(i, xs));
    }
    exports.item = item;
    function iterate(f, xs) {
        fold(function (_, x) { return f(x); }, null, xs);
    }
    exports.iterate = iterate;
    function iterate2(f, xs, ys) {
        fold2(function (_, x, y) { return f(x, y); }, null, xs, ys);
    }
    exports.iterate2 = iterate2;
    function iterateIndexed(f, xs) {
        fold(function (_, x, i) { return f(i, x); }, null, xs);
    }
    exports.iterateIndexed = iterateIndexed;
    function iterateIndexed2(f, xs, ys) {
        fold2(function (_, x, y, i) { return f(i, x, y); }, null, xs, ys);
    }
    exports.iterateIndexed2 = iterateIndexed2;
    function isEmpty(xs) {
        var i = xs[Symbol.iterator]();
        return i.next().done;
    }
    exports.isEmpty = isEmpty;
    function tryLast(xs) {
        try {
            return reduce(function (_, x) { return x; }, xs);
        }
        catch (err) {
            return null;
        }
    }
    exports.tryLast = tryLast;
    function last(xs) {
        return __failIfNone(tryLast(xs));
    }
    exports.last = last;
    function count(xs) {
        return Array.isArray(xs) || ArrayBuffer.isView(xs)
            ? xs.length
            : fold(function (acc, x) { return acc + 1; }, 0, xs);
    }
    exports.count = count;
    function map(f, xs) {
        return delay(function () { return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, xs[Symbol.iterator]()); });
    }
    exports.map = map;
    function mapIndexed(f, xs) {
        return delay(function () {
            var i = 0;
            return unfold(function (iter) {
                var cur = iter.next();
                return !cur.done ? [f(i++, cur.value), iter] : null;
            }, xs[Symbol.iterator]());
        });
    }
    exports.mapIndexed = mapIndexed;
    function map2(f, xs, ys) {
        return delay(function () {
            var iter1 = xs[Symbol.iterator]();
            var iter2 = ys[Symbol.iterator]();
            return unfold(function () {
                var cur1 = iter1.next(), cur2 = iter2.next();
                return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
            });
        });
    }
    exports.map2 = map2;
    function mapIndexed2(f, xs, ys) {
        return delay(function () {
            var i = 0;
            var iter1 = xs[Symbol.iterator]();
            var iter2 = ys[Symbol.iterator]();
            return unfold(function () {
                var cur1 = iter1.next(), cur2 = iter2.next();
                return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
            });
        });
    }
    exports.mapIndexed2 = mapIndexed2;
    function map3(f, xs, ys, zs) {
        return delay(function () {
            var iter1 = xs[Symbol.iterator]();
            var iter2 = ys[Symbol.iterator]();
            var iter3 = zs[Symbol.iterator]();
            return unfold(function () {
                var cur1 = iter1.next(), cur2 = iter2.next(), cur3 = iter3.next();
                return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
            });
        });
    }
    exports.map3 = map3;
    function mapFold(f, acc, xs) {
        var result = [];
        var r;
        var cur;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done)
                break;
            _a = f(acc, cur.value), r = _a[0], acc = _a[1];
            result.push(r);
        }
        return [result, acc];
        var _a;
    }
    exports.mapFold = mapFold;
    function mapFoldBack(f, xs, acc) {
        var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
        var result = [];
        var r;
        for (var i = arr.length - 1; i >= 0; i--) {
            _a = f(arr[i], acc), r = _a[0], acc = _a[1];
            result.push(r);
        }
        return [result, acc];
        var _a;
    }
    exports.mapFoldBack = mapFoldBack;
    function max(xs) {
        return reduce(function (acc, x) { return Util_2.compare(acc, x) === 1 ? acc : x; }, xs);
    }
    exports.max = max;
    function maxBy(f, xs) {
        return reduce(function (acc, x) { return Util_2.compare(f(acc), f(x)) === 1 ? acc : x; }, xs);
    }
    exports.maxBy = maxBy;
    function min(xs) {
        return reduce(function (acc, x) { return Util_2.compare(acc, x) === -1 ? acc : x; }, xs);
    }
    exports.min = min;
    function minBy(f, xs) {
        return reduce(function (acc, x) { return Util_2.compare(f(acc), f(x)) === -1 ? acc : x; }, xs);
    }
    exports.minBy = minBy;
    function pairwise(xs) {
        return skip(2, scan(function (last, next) { return [last[1], next]; }, [0, 0], xs));
    }
    exports.pairwise = pairwise;
    function permute(f, xs) {
        return ofArray(Array_1.permute(f, Array.from(xs)));
    }
    exports.permute = permute;
    function rangeStep(first, step, last) {
        if (step === 0)
            throw new Error("Step cannot be 0");
        return delay(function () { return unfold(function (x) { return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null; }, first); });
    }
    exports.rangeStep = rangeStep;
    function rangeChar(first, last) {
        return delay(function () { return unfold(function (x) { return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null; }, first); });
    }
    exports.rangeChar = rangeChar;
    function range(first, last) {
        return rangeStep(first, 1, last);
    }
    exports.range = range;
    function readOnly(xs) {
        return map(function (x) { return x; }, xs);
    }
    exports.readOnly = readOnly;
    function reduce(f, xs) {
        if (Array.isArray(xs) || ArrayBuffer.isView(xs))
            return xs.reduce(f);
        var iter = xs[Symbol.iterator]();
        var cur = iter.next();
        if (cur.done)
            throw new Error("Seq was empty");
        var acc = cur.value;
        for (;;) {
            cur = iter.next();
            if (cur.done)
                break;
            acc = f(acc, cur.value);
        }
        return acc;
    }
    exports.reduce = reduce;
    function reduceBack(f, xs) {
        var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
        if (ar.length === 0)
            throw new Error("Seq was empty");
        var acc = ar[ar.length - 1];
        for (var i = ar.length - 2; i >= 0; i--)
            acc = f(ar[i], acc, i);
        return acc;
    }
    exports.reduceBack = reduceBack;
    function replicate(n, x) {
        return initialize(n, function () { return x; });
    }
    exports.replicate = replicate;
    function reverse(xs) {
        var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
        return ofArray(ar.reverse());
    }
    exports.reverse = reverse;
    function scan(f, seed, xs) {
        return delay(function () {
            var iter = xs[Symbol.iterator]();
            return unfold(function (acc) {
                if (acc == null)
                    return [seed, seed];
                var cur = iter.next();
                if (!cur.done) {
                    acc = f(acc, cur.value);
                    return [acc, acc];
                }
                return void 0;
            }, null);
        });
    }
    exports.scan = scan;
    function scanBack(f, xs, seed) {
        return reverse(scan(function (acc, x) { return f(x, acc); }, seed, reverse(xs)));
    }
    exports.scanBack = scanBack;
    function singleton(x) {
        return unfold(function (x) { return x != null ? [x, null] : null; }, x);
    }
    exports.singleton = singleton;
    function skip(n, xs) {
        return _a = {},
            _a[Symbol.iterator] = function () {
                var iter = xs[Symbol.iterator]();
                for (var i = 1; i <= n; i++)
                    if (iter.next().done)
                        throw new Error("Seq has not enough elements");
                return iter;
            },
            _a;
        var _a;
    }
    exports.skip = skip;
    function skipWhile(f, xs) {
        return delay(function () {
            var hasPassed = false;
            return filter(function (x) { return hasPassed || (hasPassed = !f(x)); }, xs);
        });
    }
    exports.skipWhile = skipWhile;
    function sortWith(f, xs) {
        var ys = Array.from(xs);
        return ofArray(ys.sort(f));
    }
    exports.sortWith = sortWith;
    function sum(xs) {
        return fold(function (acc, x) { return acc + x; }, 0, xs);
    }
    exports.sum = sum;
    function sumBy(f, xs) {
        return fold(function (acc, x) { return acc + f(x); }, 0, xs);
    }
    exports.sumBy = sumBy;
    function tail(xs) {
        var iter = xs[Symbol.iterator]();
        var cur = iter.next();
        if (cur.done)
            throw new Error("Seq was empty");
        return _a = {},
            _a[Symbol.iterator] = function () { return iter; },
            _a;
        var _a;
    }
    exports.tail = tail;
    function take(n, xs, truncate) {
        if (truncate === void 0) { truncate = false; }
        return delay(function () {
            var iter = xs[Symbol.iterator]();
            return unfold(function (i) {
                if (i < n) {
                    var cur = iter.next();
                    if (!cur.done)
                        return [cur.value, i + 1];
                    if (!truncate)
                        throw new Error("Seq has not enough elements");
                }
                return void 0;
            }, 0);
        });
    }
    exports.take = take;
    function truncate(n, xs) {
        return take(n, xs, true);
    }
    exports.truncate = truncate;
    function takeWhile(f, xs) {
        return delay(function () {
            var iter = xs[Symbol.iterator]();
            return unfold(function (i) {
                var cur = iter.next();
                if (!cur.done && f(cur.value))
                    return [cur.value, null];
                return void 0;
            }, 0);
        });
    }
    exports.takeWhile = takeWhile;
    function tryFind(f, xs, defaultValue) {
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            var cur = iter.next();
            if (cur.done)
                return defaultValue === void 0 ? null : defaultValue;
            if (f(cur.value, i))
                return cur.value;
        }
    }
    exports.tryFind = tryFind;
    function find(f, xs) {
        return __failIfNone(tryFind(f, xs));
    }
    exports.find = find;
    function tryFindBack(f, xs, defaultValue) {
        var match = null;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            var cur = iter.next();
            if (cur.done)
                return match === null ? (defaultValue === void 0 ? null : defaultValue) : match;
            if (f(cur.value, i))
                match = cur.value;
        }
    }
    exports.tryFindBack = tryFindBack;
    function findBack(f, xs) {
        return __failIfNone(tryFindBack(f, xs));
    }
    exports.findBack = findBack;
    function tryFindIndex(f, xs) {
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            var cur = iter.next();
            if (cur.done)
                return null;
            if (f(cur.value, i))
                return i;
        }
    }
    exports.tryFindIndex = tryFindIndex;
    function findIndex(f, xs) {
        return __failIfNone(tryFindIndex(f, xs));
    }
    exports.findIndex = findIndex;
    function tryFindIndexBack(f, xs) {
        var match = -1;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            var cur = iter.next();
            if (cur.done)
                return match === -1 ? null : match;
            if (f(cur.value, i))
                match = i;
        }
    }
    exports.tryFindIndexBack = tryFindIndexBack;
    function findIndexBack(f, xs) {
        return __failIfNone(tryFindIndexBack(f, xs));
    }
    exports.findIndexBack = findIndexBack;
    function tryPick(f, xs) {
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            var cur = iter.next();
            if (cur.done)
                break;
            var y = f(cur.value, i);
            if (y != null)
                return y;
        }
        return void 0;
    }
    exports.tryPick = tryPick;
    function pick(f, xs) {
        return __failIfNone(tryPick(f, xs));
    }
    exports.pick = pick;
    function unfold(f, acc) {
        return _a = {},
            _a[Symbol.iterator] = function () {
                return {
                    next: function () {
                        var res = f(acc);
                        if (res != null) {
                            acc = res[1];
                            return { done: false, value: res[0] };
                        }
                        return { done: true };
                    }
                };
            },
            _a;
        var _a;
    }
    exports.unfold = unfold;
    function zip(xs, ys) {
        return map2(function (x, y) { return [x, y]; }, xs, ys);
    }
    exports.zip = zip;
    function zip3(xs, ys, zs) {
        return map3(function (x, y, z) { return [x, y, z]; }, xs, ys, zs);
    }
    exports.zip3 = zip3;
});

},{"./Array":3,"./ListClass":7,"./Util":15}],12:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Util", "./Util", "./RegExp", "./Date", "./Date", "./Date", "./Date", "./Date", "./Date"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util_1 = require("./Util");
    var Util_2 = require("./Util");
    var RegExp_1 = require("./RegExp");
    var Date_1 = require("./Date");
    var Date_2 = require("./Date");
    var Date_3 = require("./Date");
    var Date_4 = require("./Date");
    var Date_5 = require("./Date");
    var Date_6 = require("./Date");
    var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
    var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
    var StringComparison = {
        CurrentCulture: 0,
        CurrentCultureIgnoreCase: 1,
        InvariantCulture: 2,
        InvariantCultureIgnoreCase: 3,
        Ordinal: 4,
        OrdinalIgnoreCase: 5,
    };
    function cmp(x, y, ic) {
        function isIgnoreCase(i) {
            return i === true ||
                i === StringComparison.CurrentCultureIgnoreCase ||
                i === StringComparison.InvariantCultureIgnoreCase ||
                i === StringComparison.OrdinalIgnoreCase;
        }
        function isOrdinal(i) {
            return i === StringComparison.Ordinal ||
                i === StringComparison.OrdinalIgnoreCase;
        }
        if (x == null)
            return y == null ? 0 : -1;
        if (y == null)
            return 1;
        if (isOrdinal(ic)) {
            if (isIgnoreCase(ic)) {
                x = x.toLowerCase();
                y = y.toLowerCase();
            }
            return (x === y) ? 0 : (x < y ? -1 : 1);
        }
        else {
            if (isIgnoreCase(ic)) {
                x = x.toLocaleLowerCase();
                y = y.toLocaleLowerCase();
            }
            return x.localeCompare(y);
        }
    }
    function compare() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        switch (args.length) {
            case 2: return cmp(args[0], args[1], false);
            case 3: return cmp(args[0], args[1], args[2]);
            case 4: return cmp(args[0], args[1], args[2] === true);
            case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
            case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
            case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
            default: throw new Error("String.compare: Unsupported number of parameters");
        }
    }
    exports.compare = compare;
    function compareTo(x, y) {
        return cmp(x, y, false);
    }
    exports.compareTo = compareTo;
    function indexOfAny(str, anyOf) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (str == null || str === "")
            return -1;
        var startIndex = (args.length > 0) ? args[0] : 0;
        if (startIndex < 0)
            throw new Error("String.indexOfAny: Start index cannot be negative");
        var length = (args.length > 1) ? args[1] : str.length - startIndex;
        if (length < 0)
            throw new Error("String.indexOfAny: Length cannot be negative");
        if (length > str.length - startIndex)
            throw new Error("String.indexOfAny: Invalid startIndex and length");
        str = str.substr(startIndex, length);
        for (var _a = 0, anyOf_1 = anyOf; _a < anyOf_1.length; _a++) {
            var c = anyOf_1[_a];
            var index = str.indexOf(c);
            if (index > -1)
                return index + startIndex;
        }
        return -1;
    }
    exports.indexOfAny = indexOfAny;
    function toHex(value) {
        return value < 0
            ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16)
            : value.toString(16);
    }
    function fsFormat(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _cont;
        function isObject(x) {
            return x !== null && typeof x === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
        }
        function formatOnce(str, rep) {
            return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
                switch (format) {
                    case "f":
                    case "F":
                        rep = rep.toFixed(precision || 6);
                        break;
                    case "g":
                    case "G":
                        rep = rep.toPrecision(precision);
                        break;
                    case "e":
                    case "E":
                        rep = rep.toExponential(precision);
                        break;
                    case "O":
                        rep = Util_1.toString(rep);
                        break;
                    case "A":
                        try {
                            rep = JSON.stringify(rep, function (k, v) {
                                return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v)
                                    : v && typeof v.ToString === "function" ? Util_1.toString(v) : v;
                            });
                        }
                        catch (err) {
                            rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) { return k + ": " + String(rep[k]); }).join(", ") + "}";
                        }
                        break;
                    case "x":
                        rep = toHex(Number(rep));
                        break;
                    case "X":
                        rep = toHex(Number(rep)).toUpperCase();
                        break;
                }
                var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
                if (!isNaN(pad = parseInt(pad))) {
                    var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
                    rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
                }
                var once = prefix + (plusPrefix ? "+" + rep : rep);
                return once.replace(/%/g, "%%");
            });
        }
        function makeFn(str) {
            return function (rep) {
                var str2 = formatOnce(str, rep);
                return fsFormatRegExp.test(str2)
                    ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
            };
        }
        if (args.length === 0) {
            return function (cont) {
                _cont = cont;
                return fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
            };
        }
        else {
            for (var i = 0; i < args.length; i++) {
                str = formatOnce(str, args[i]);
            }
            return str.replace(/%%/g, "%");
        }
    }
    exports.fsFormat = fsFormat;
    function format(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return str.replace(formatRegExp, function (match, idx, pad, format) {
            var rep = args[idx], padSymbol = " ";
            if (typeof rep === "number") {
                switch ((format || "").substring(0, 1)) {
                    case "f":
                    case "F":
                        rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                        break;
                    case "g":
                    case "G":
                        rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                        break;
                    case "e":
                    case "E":
                        rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                        break;
                    case "p":
                    case "P":
                        rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                        break;
                    case "x":
                        rep = toHex(Number(rep));
                        break;
                    case "X":
                        rep = toHex(Number(rep)).toUpperCase();
                        break;
                    default:
                        var m = /^(0+)(\.0+)?$/.exec(format);
                        if (m != null) {
                            var decs = 0;
                            if (m[2] != null)
                                rep = rep.toFixed(decs = m[2].length - 1);
                            pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                            padSymbol = "0";
                        }
                        else if (format) {
                            rep = format;
                        }
                }
            }
            else if (rep instanceof Date) {
                if (format.length === 1) {
                    switch (format) {
                        case "D":
                            rep = rep.toDateString();
                            break;
                        case "T":
                            rep = rep.toLocaleTimeString();
                            break;
                        case "d":
                            rep = rep.toLocaleDateString();
                            break;
                        case "t":
                            rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
                            break;
                        case "o":
                        case "O":
                            if (rep.kind === 2) {
                                var offset = rep.getTimezoneOffset() * -1;
                                rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, Date_1.second(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
                            }
                            else {
                                rep = rep.toISOString();
                            }
                    }
                }
                else {
                    rep = format.replace(/\w+/g, function (match2) {
                        var rep2 = match2;
                        switch (match2.substring(0, 1)) {
                            case "y":
                                rep2 = match2.length < 4 ? Date_6.year(rep) % 100 : Date_6.year(rep);
                                break;
                            case "h":
                                rep2 = rep.getHours() > 12 ? Date_3.hour(rep) % 12 : Date_3.hour(rep);
                                break;
                            case "M":
                                rep2 = Date_5.month(rep);
                                break;
                            case "d":
                                rep2 = Date_4.day(rep);
                                break;
                            case "H":
                                rep2 = Date_3.hour(rep);
                                break;
                            case "m":
                                rep2 = Date_2.minute(rep);
                                break;
                            case "s":
                                rep2 = Date_1.second(rep);
                                break;
                        }
                        if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
                            rep2 = "0" + rep2;
                        }
                        return rep2;
                    });
                }
            }
            if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
                rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
            }
            return rep;
        });
    }
    exports.format = format;
    function endsWith(str, search) {
        var idx = str.lastIndexOf(search);
        return idx >= 0 && idx == str.length - search.length;
    }
    exports.endsWith = endsWith;
    function initialize(n, f) {
        if (n < 0)
            throw new Error("String length must be non-negative");
        var xs = new Array(n);
        for (var i = 0; i < n; i++)
            xs[i] = f(i);
        return xs.join("");
    }
    exports.initialize = initialize;
    function insert(str, startIndex, value) {
        if (startIndex < 0 || startIndex > str.length) {
            throw new Error("startIndex is negative or greater than the length of this instance.");
        }
        return str.substring(0, startIndex) + value + str.substring(startIndex);
    }
    exports.insert = insert;
    function isNullOrEmpty(str) {
        return typeof str !== "string" || str.length == 0;
    }
    exports.isNullOrEmpty = isNullOrEmpty;
    function isNullOrWhiteSpace(str) {
        return typeof str !== "string" || /^\s*$/.test(str);
    }
    exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
    function join(delimiter, xs) {
        xs = typeof xs == "string" ? Util_2.getRestParams(arguments, 1) : xs;
        return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
    }
    exports.join = join;
    function newGuid() {
        var uuid = "";
        for (var i = 0; i < 32; i++) {
            var random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20)
                uuid += "-";
            uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
        }
        return uuid;
    }
    exports.newGuid = newGuid;
    function padLeft(str, len, ch, isRight) {
        ch = ch || " ";
        str = String(str);
        len = len - str.length;
        for (var i = -1; ++i < len;)
            str = isRight ? str + ch : ch + str;
        return str;
    }
    exports.padLeft = padLeft;
    function padRight(str, len, ch) {
        return padLeft(str, len, ch, true);
    }
    exports.padRight = padRight;
    function remove(str, startIndex, count) {
        if (startIndex >= str.length) {
            throw new Error("startIndex must be less than length of string");
        }
        if (typeof count === "number" && (startIndex + count) > str.length) {
            throw new Error("Index and count must refer to a location within the string.");
        }
        return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
    }
    exports.remove = remove;
    function replace(str, search, replace) {
        return str.replace(new RegExp(RegExp_1.escape(search), "g"), replace);
    }
    exports.replace = replace;
    function replicate(n, x) {
        return initialize(n, function () { return x; });
    }
    exports.replicate = replicate;
    function split(str, splitters, count, removeEmpty) {
        count = typeof count == "number" ? count : null;
        removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
        if (count < 0)
            throw new Error("Count cannot be less than zero");
        if (count === 0)
            return [];
        splitters = Array.isArray(splitters) ? splitters : Util_2.getRestParams(arguments, 1);
        splitters = splitters.map(function (x) { return RegExp_1.escape(x); });
        splitters = splitters.length > 0 ? splitters : [" "];
        var m;
        var i = 0;
        var splits = [];
        var reg = new RegExp(splitters.join("|"), "g");
        while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
            if (!removeEmpty || (m.index - i) > 0) {
                count = count != null ? count - 1 : count;
                splits.push(str.substring(i, m.index));
            }
            i = reg.lastIndex;
        }
        if (!removeEmpty || (str.length - i) > 0)
            splits.push(str.substring(i));
        return splits;
    }
    exports.split = split;
    function trim(str, side) {
        var chars = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            chars[_i - 2] = arguments[_i];
        }
        if (side == "both" && chars.length == 0)
            return str.trim();
        if (side == "start" || side == "both") {
            var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + RegExp_1.escape(chars.join("")) + "]+");
            str = str.replace(reg, "");
        }
        if (side == "end" || side == "both") {
            var reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + RegExp_1.escape(chars.join("")) + "]+$");
            str = str.replace(reg, "");
        }
        return str;
    }
    exports.trim = trim;
});

},{"./Date":4,"./RegExp":10,"./Util":15}],13:[function(require,module,exports){
(function (global){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fableGlobal = function () {
        var globalObj = typeof window !== "undefined" ? window
            : (typeof global !== "undefined" ? global
                : (typeof self !== "undefined" ? self : {}));
        if (typeof globalObj.__FABLE_CORE__ === "undefined") {
            globalObj.__FABLE_CORE__ = {
                types: new Map(),
                symbols: {
                    reflection: Symbol("reflection"),
                }
            };
        }
        return globalObj.__FABLE_CORE__;
    }();
    function setType(fullName, cons) {
        fableGlobal.types.set(fullName, cons);
    }
    exports.setType = setType;
    function getType(fullName) {
        return fableGlobal.types.get(fullName);
    }
    exports.getType = getType;
    exports.default = (fableGlobal.symbols);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Util", "./Long"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util_1 = require("./Util");
    var Long = require("./Long");
    function create(d, h, m, s, ms) {
        if (d === void 0) { d = 0; }
        if (h === void 0) { h = 0; }
        if (m === void 0) { m = 0; }
        if (s === void 0) { s = 0; }
        if (ms === void 0) { ms = 0; }
        switch (arguments.length) {
            case 1:
                return fromTicks(arguments[0]);
            case 3:
                d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
                break;
            default:
                d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
                break;
        }
        return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
    }
    exports.create = create;
    function fromTicks(ticks) {
        return ticks.div(10000).toNumber();
    }
    exports.fromTicks = fromTicks;
    function fromDays(d) {
        return create(d, 0, 0, 0);
    }
    exports.fromDays = fromDays;
    function fromHours(h) {
        return create(h, 0, 0);
    }
    exports.fromHours = fromHours;
    function fromMinutes(m) {
        return create(0, m, 0);
    }
    exports.fromMinutes = fromMinutes;
    function fromSeconds(s) {
        return create(0, 0, s);
    }
    exports.fromSeconds = fromSeconds;
    function days(ts) {
        return Math.floor(ts / 86400000);
    }
    exports.days = days;
    function hours(ts) {
        return Math.floor(ts % 86400000 / 3600000);
    }
    exports.hours = hours;
    function minutes(ts) {
        return Math.floor(ts % 3600000 / 60000);
    }
    exports.minutes = minutes;
    function seconds(ts) {
        return Math.floor(ts % 60000 / 1000);
    }
    exports.seconds = seconds;
    function milliseconds(ts) {
        return Math.floor(ts % 1000);
    }
    exports.milliseconds = milliseconds;
    function ticks(ts) {
        return Long.fromNumber(ts).mul(10000);
    }
    exports.ticks = ticks;
    function totalDays(ts) {
        return ts / 86400000;
    }
    exports.totalDays = totalDays;
    function totalHours(ts) {
        return ts / 3600000;
    }
    exports.totalHours = totalHours;
    function totalMinutes(ts) {
        return ts / 60000;
    }
    exports.totalMinutes = totalMinutes;
    function totalSeconds(ts) {
        return ts / 1000;
    }
    exports.totalSeconds = totalSeconds;
    function negate(ts) {
        return ts * -1;
    }
    exports.negate = negate;
    function add(ts1, ts2) {
        return ts1 + ts2;
    }
    exports.add = add;
    function subtract(ts1, ts2) {
        return ts1 - ts2;
    }
    exports.subtract = subtract;
    function compare(x, y) {
        return Util_1.compare(x, y);
    }
    exports.compare = compare;
    function compareTo(x, y) {
        return Util_1.compare(x, y);
    }
    exports.compareTo = compareTo;
    function duration(x) {
        return Math.abs(x);
    }
    exports.duration = duration;
});

},{"./Long":8,"./Util":15}],15:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Symbol_1 = require("./Symbol");
    var NonDeclaredType = (function () {
        function NonDeclaredType(kind, definition, generics) {
            this.kind = kind;
            this.definition = definition;
            this.generics = generics;
        }
        NonDeclaredType.prototype.Equals = function (other) {
            if (this.kind === other.kind && this.definition === other.definition) {
                return typeof this.generics === "object"
                    ? equalsRecords(this.generics, other.generics)
                    : this.generics === other.generics;
            }
            return false;
        };
        return NonDeclaredType;
    }());
    exports.NonDeclaredType = NonDeclaredType;
    exports.Any = new NonDeclaredType("Any");
    exports.Unit = new NonDeclaredType("Unit");
    function Option(t) {
        return new NonDeclaredType("Option", null, t);
    }
    exports.Option = Option;
    function FableArray(t, isTypedArray) {
        if (isTypedArray === void 0) { isTypedArray = false; }
        var def = null, genArg = null;
        if (isTypedArray) {
            def = t;
        }
        else {
            genArg = t;
        }
        return new NonDeclaredType("Array", def, genArg);
    }
    exports.Array = FableArray;
    function Tuple(ts) {
        return new NonDeclaredType("Tuple", null, ts);
    }
    exports.Tuple = Tuple;
    function GenericParam(definition) {
        return new NonDeclaredType("GenericParam", definition);
    }
    exports.GenericParam = GenericParam;
    function Interface(definition) {
        return new NonDeclaredType("Interface", definition);
    }
    exports.Interface = Interface;
    function makeGeneric(typeDef, genArgs) {
        return new NonDeclaredType("GenericType", typeDef, genArgs);
    }
    exports.makeGeneric = makeGeneric;
    function isGeneric(typ) {
        return typ instanceof NonDeclaredType && typ.kind === "GenericType";
    }
    exports.isGeneric = isGeneric;
    function getDefinition(typ) {
        return isGeneric(typ) ? typ.definition : typ;
    }
    exports.getDefinition = getDefinition;
    function extendInfo(cons, info) {
        var parent = Object.getPrototypeOf(cons.prototype);
        if (typeof parent[Symbol_1.default.reflection] === "function") {
            var newInfo_1 = {}, parentInfo_1 = parent[Symbol_1.default.reflection]();
            Object.getOwnPropertyNames(info).forEach(function (k) {
                var i = info[k];
                if (typeof i === "object") {
                    newInfo_1[k] = Array.isArray(i)
                        ? (parentInfo_1[k] || []).concat(i)
                        : Object.assign(parentInfo_1[k] || {}, i);
                }
                else {
                    newInfo_1[k] = i;
                }
            });
            return newInfo_1;
        }
        return info;
    }
    exports.extendInfo = extendInfo;
    function hasInterface(obj, interfaceName) {
        if (interfaceName === "System.Collections.Generic.IEnumerable") {
            return typeof obj[Symbol.iterator] === "function";
        }
        else if (typeof obj[Symbol_1.default.reflection] === "function") {
            var interfaces = obj[Symbol_1.default.reflection]().interfaces;
            return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
        }
        return false;
    }
    exports.hasInterface = hasInterface;
    function getPropertyNames(obj) {
        if (obj == null) {
            return [];
        }
        var propertyMap = typeof obj[Symbol_1.default.reflection] === "function" ? obj[Symbol_1.default.reflection]().properties || [] : obj;
        return Object.getOwnPropertyNames(propertyMap);
    }
    exports.getPropertyNames = getPropertyNames;
    function isArray(obj) {
        return Array.isArray(obj) || ArrayBuffer.isView(obj);
    }
    exports.isArray = isArray;
    function getRestParams(args, idx) {
        for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++)
            restArgs[_key - idx] = args[_key];
        return restArgs;
    }
    exports.getRestParams = getRestParams;
    function toString(o) {
        return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
    }
    exports.toString = toString;
    function hash(x) {
        var s = JSON.stringify(x);
        var h = 5381, i = 0, len = s.length;
        while (i < len) {
            h = (h * 33) ^ s.charCodeAt(i++);
        }
        return h;
    }
    exports.hash = hash;
    function equals(x, y) {
        if (x === y)
            return true;
        else if (x == null)
            return y == null;
        else if (y == null)
            return false;
        else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
            return false;
        else if (typeof x.Equals === "function")
            return x.Equals(y);
        else if (Array.isArray(x)) {
            if (x.length != y.length)
                return false;
            for (var i = 0; i < x.length; i++)
                if (!equals(x[i], y[i]))
                    return false;
            return true;
        }
        else if (ArrayBuffer.isView(x)) {
            if (x.byteLength !== y.byteLength)
                return false;
            var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
            for (var i = 0; i < x.byteLength; i++)
                if (dv1.getUint8(i) !== dv2.getUint8(i))
                    return false;
            return true;
        }
        else if (x instanceof Date)
            return x.getTime() == y.getTime();
        else
            return false;
    }
    exports.equals = equals;
    function compare(x, y) {
        if (x === y)
            return 0;
        if (x == null)
            return y == null ? 0 : -1;
        else if (y == null)
            return 1;
        else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
            return -1;
        else if (typeof x.CompareTo === "function")
            return x.CompareTo(y);
        else if (Array.isArray(x)) {
            if (x.length != y.length)
                return x.length < y.length ? -1 : 1;
            for (var i = 0, j = 0; i < x.length; i++)
                if ((j = compare(x[i], y[i])) !== 0)
                    return j;
            return 0;
        }
        else if (ArrayBuffer.isView(x)) {
            if (x.byteLength != y.byteLength)
                return x.byteLength < y.byteLength ? -1 : 1;
            var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
            for (var i = 0, b1 = 0, b2 = 0; i < x.byteLength; i++) {
                b1 = dv1.getUint8(i), b2 = dv2.getUint8(i);
                if (b1 < b2)
                    return -1;
                if (b1 > b2)
                    return 1;
            }
            return 0;
        }
        else if (x instanceof Date)
            return compare(x.getTime(), y.getTime());
        else
            return x < y ? -1 : 1;
    }
    exports.compare = compare;
    function equalsRecords(x, y) {
        if (x === y) {
            return true;
        }
        else {
            var keys = getPropertyNames(x);
            for (var i = 0; i < keys.length; i++) {
                if (!equals(x[keys[i]], y[keys[i]]))
                    return false;
            }
            return true;
        }
    }
    exports.equalsRecords = equalsRecords;
    function compareRecords(x, y) {
        if (x === y) {
            return 0;
        }
        else {
            var keys = getPropertyNames(x);
            for (var i = 0; i < keys.length; i++) {
                var res = compare(x[keys[i]], y[keys[i]]);
                if (res !== 0)
                    return res;
            }
            return 0;
        }
    }
    exports.compareRecords = compareRecords;
    function equalsUnions(x, y) {
        if (x === y) {
            return true;
        }
        else if (x.Case !== y.Case) {
            return false;
        }
        else {
            for (var i = 0; i < x.Fields.length; i++) {
                if (!equals(x.Fields[i], y.Fields[i]))
                    return false;
            }
            return true;
        }
    }
    exports.equalsUnions = equalsUnions;
    function compareUnions(x, y) {
        if (x === y) {
            return 0;
        }
        else {
            var res = compare(x.Case, y.Case);
            if (res !== 0)
                return res;
            for (var i = 0; i < x.Fields.length; i++) {
                res = compare(x.Fields[i], y.Fields[i]);
                if (res !== 0)
                    return res;
            }
            return 0;
        }
    }
    exports.compareUnions = compareUnions;
    function createDisposable(f) {
        return _a = {
                Dispose: f
            },
            _a[Symbol_1.default.reflection] = function () { return { interfaces: ["System.IDisposable"] }; },
            _a;
        var _a;
    }
    exports.createDisposable = createDisposable;
    function createObj(fields) {
        var iter = fields[Symbol.iterator]();
        var cur = iter.next(), o = {};
        while (!cur.done) {
            o[cur.value[0]] = cur.value[1];
            cur = iter.next();
        }
        return o;
    }
    exports.createObj = createObj;
    function toPlainJsObj(source) {
        if (source != null && source.constructor != Object) {
            var target = {};
            var props = Object.getOwnPropertyNames(source);
            for (var i = 0; i < props.length; i++) {
                target[props[i]] = source[props[i]];
            }
            var proto = Object.getPrototypeOf(source);
            if (proto != null) {
                props = Object.getOwnPropertyNames(proto);
                for (var i = 0; i < props.length; i++) {
                    var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
                    if (prop.value) {
                        target[props[i]] = prop.value;
                    }
                    else if (prop.get) {
                        target[props[i]] = prop.get.apply(source);
                    }
                }
            }
            return target;
        }
        else {
            return source;
        }
    }
    exports.toPlainJsObj = toPlainJsObj;
    function round(value, digits) {
        if (digits === void 0) { digits = 0; }
        var m = Math.pow(10, digits);
        var n = +(digits ? value * m : value).toFixed(8);
        var i = Math.floor(n), f = n - i;
        var e = 1e-8;
        var r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 == 0) ? i : i + 1) : Math.round(n);
        return digits ? r / m : r;
    }
    exports.round = round;
    function randomNext(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    exports.randomNext = randomNext;
    function defaultArg(arg, defaultValue, f) {
        return arg == null ? defaultValue : (f != null ? f(arg) : arg);
    }
    exports.defaultArg = defaultArg;
});

},{"./Symbol":13}]},{},[2]);
