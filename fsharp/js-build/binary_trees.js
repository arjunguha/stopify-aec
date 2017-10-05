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
exports.Tree = exports.Next = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.make = make;
exports.loopDepths = loopDepths;

var _Symbol2 = require("fable-core/umd/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("fable-core/umd/Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Next = exports.Next = function () {
  function Next(left, right) {
    _classCallCheck(this, Next);

    this.Left = left;
    this.Right = right;
  }

  _createClass(Next, [{
    key: _Symbol3.default.reflection,
    value: function () {
      return {
        type: "Binary_trees.Next",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Left: Tree,
          Right: Tree
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

  return Next;
}();

(0, _Symbol2.setType)("Binary_trees.Next", Next);

var Tree = exports.Tree = function () {
  _createClass(Tree, [{
    key: _Symbol3.default.reflection,
    value: function () {
      return {
        type: "Binary_trees.Tree",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          next: Next
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

  function Tree(next) {
    _classCallCheck(this, Tree);

    this.next = next;
  }

  _createClass(Tree, [{
    key: "Check",
    value: function () {
      var matchValue = this.next;

      if (matchValue == null) {
        return 1;
      } else {
        return 1 + this.next.Left.Check() + this.next.Right.Check();
      }
    }
  }]);

  return Tree;
}();

(0, _Symbol2.setType)("Binary_trees.Tree", Tree);

function make(depth) {
  if (depth > 0) {
    return new Tree(new Next(make(depth - 1), make(depth - 1)));
  } else {
    return new Tree(null);
  }
}

function loopDepths(maxDepth, minDepth, d) {
  if (d <= maxDepth) {
    var niter = 1 << maxDepth - d + minDepth;
    var c = 0;

    for (var i = 1; i <= niter; i++) {
      c = c + make(d).Check();
    }

    loopDepths(maxDepth, minDepth, d + 2);
  }
}

(function (args) {
  var minDepth = 4;
  var maxDepth = void 0;
  var n = 19;

  if (minDepth + 2 > n) {
    maxDepth = minDepth + 2;
  } else {
    maxDepth = n;
  }

  var stretchDepth = maxDepth + 1;
  var c = make(stretchDepth).Check();
  var longLivedTree = make(maxDepth);
  loopDepths(maxDepth, minDepth, minDepth);
  return 0;
})(process.argv.slice(2));
}).call(this,require('_process'))
},{"_process":1,"fable-core/umd/Symbol":3,"fable-core/umd/Util":4}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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

},{"./Symbol":3}]},{},[2]);
