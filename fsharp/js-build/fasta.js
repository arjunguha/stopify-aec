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
exports.index = exports.buffer = exports.width = exports.iub = exports.homoSapiens = exports.makeCumulative = exports.alu = exports.seed = exports.ic = exports.ia = exports.im = undefined;
exports.randomFasta = randomFasta;
exports.repeatFasta = repeatFasta;

var _Seq = require("fable-core/umd/Seq");

var _List = require("fable-core/umd/List");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var im = exports.im = 139968;
var ia = exports.ia = 3877;
var ic = exports.ic = 29573;
var seed = exports.seed = 42;
var alu = exports.alu = new Uint8Array([71, 71, 67, 67, 71, 71, 71, 67, 71, 67, 71, 71, 84, 71, 71, 67, 84, 67, 65, 67, 71, 67, 67, 84, 71, 84, 65, 65, 84, 67, 67, 67, 65, 71, 67, 65, 67, 84, 84, 84, 71, 71, 71, 65, 71, 71, 67, 67, 71, 65, 71, 71, 67, 71, 71, 71, 67, 71, 71, 65, 84, 67, 65, 67, 67, 84, 71, 65, 71, 71, 84, 67, 65, 71, 71, 65, 71, 84, 84, 67, 71, 65, 71, 65, 67, 67, 65, 71, 67, 67, 84, 71, 71, 67, 67, 65, 65, 67, 65, 84, 71, 71, 84, 71, 65, 65, 65, 67, 67, 67, 67, 71, 84, 67, 84, 67, 84, 65, 67, 84, 65, 65, 65, 65, 65, 84, 65, 67, 65, 65, 65, 65, 65, 84, 84, 65, 71, 67, 67, 71, 71, 71, 67, 71, 84, 71, 71, 84, 71, 71, 67, 71, 67, 71, 67, 71, 67, 67, 84, 71, 84, 65, 65, 84, 67, 67, 67, 65, 71, 67, 84, 65, 67, 84, 67, 71, 71, 71, 65, 71, 71, 67, 84, 71, 65, 71, 71, 67, 65, 71, 71, 65, 71, 65, 65, 84, 67, 71, 67, 84, 84, 71, 65, 65, 67, 67, 67, 71, 71, 71, 65, 71, 71, 67, 71, 71, 65, 71, 71, 84, 84, 71, 67, 65, 71, 84, 71, 65, 71, 67, 67, 71, 65, 71, 65, 84, 67, 71, 67, 71, 67, 67, 65, 67, 84, 71, 67, 65, 67, 84, 67, 67, 65, 71, 67, 67, 84, 71, 71, 71, 67, 71, 65, 67, 65, 71, 65, 71, 67, 71, 65, 71, 65, 67, 84, 67, 67, 71, 84, 67, 84, 67, 65, 65, 65, 65, 65]);

var makeCumulative = exports.makeCumulative = function makeCumulative($var2) {
  return function (list) {
    return Array.from(list);
  }(function ($var1) {
    return (0, _Seq.fold)(function (tupledArg, tupledArg_1) {
      return [tupledArg[0] + tupledArg_1[1], new _List2.default([tupledArg_1[0], tupledArg[0] + tupledArg_1[1]], tupledArg[1])];
    }, [0, new _List2.default()], $var1)[1];
  }($var2));
};

var homoSapiens = exports.homoSapiens = makeCumulative((0, _List.ofArray)([[97, 0.302954942668], [99, 0.1979883004921], [103, 0.1975473066391], [116, 0.3015094502008]]));
var iub = exports.iub = makeCumulative((0, _List.ofArray)([[97, 0.27], [99, 0.12], [103, 0.12], [116, 0.27], [66, 0.02], [68, 0.02], [72, 0.02], [75, 0.02], [77, 0.02], [78, 0.02], [82, 0.02], [83, 0.02], [86, 0.02], [87, 0.02], [89, 0.02]]));
var width = exports.width = 60;
var buffer = exports.buffer = Uint8Array.from((0, _Seq.replicate)(1024, 0));
var index = exports.index = 0;

function randomFasta(desc, table, n) {
  desc.forEach(function (b) {
    buffer[index] = b;
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }
  });

  var _loop = function _loop(i) {
    var $var3 = table;
    var r = void 0;
    exports.seed = seed = (seed * ia + ic) % im;
    r = 1 * seed / im;

    var find = function find(_arg1) {
      find: while (true) {
        if (_arg1 === 0) {
          return $var3[0][0];
        } else if (r < $var3[_arg1][1]) {
          return $var3[_arg1][0];
        } else {
          _arg1 = _arg1 - 1;
          continue find;
        }
      }
    };

    buffer[index] = find($var3.length - 1);
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }

    if (i % width === 0) {
      buffer[index] = 10;
      exports.index = index = index + 1;

      if (index === buffer.length) {
        exports.index = index = 0;
      }
    }
  };

  for (var i = 1; i <= n; i++) {
    _loop(i);
  }

  if (n % width !== 0) {
    buffer[index] = 10;
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }
  }
}

function repeatFasta(desc, table, n) {
  desc.forEach(function (b) {
    buffer[index] = b;
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }
  });

  for (var i = 1; i <= n; i++) {
    buffer[index] = table[(i - 1) % table.length];
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }

    if (i % width === 0) {
      buffer[index] = 10;
      exports.index = index = index + 1;

      if (index === buffer.length) {
        exports.index = index = 0;
      }
    }
  }

  if (n % width !== 0) {
    buffer[index] = 10;
    exports.index = index = index + 1;

    if (index === buffer.length) {
      exports.index = index = 0;
    }
  }
}

(function (args) {
  var n = 10000000;
  repeatFasta(new Uint8Array([62, 79, 78, 69, 32, 72, 111, 109, 111, 32, 115, 97, 112, 105, 101, 110, 115, 32, 97, 108, 117, 10]), alu, 2 * n);
  randomFasta(new Uint8Array([62, 84, 87, 79, 32, 73, 85, 66, 32, 97, 109, 98, 105, 103, 117, 105, 116, 121, 32, 99, 111, 100, 101, 115, 10]), iub, 3 * n);
  randomFasta(new Uint8Array([62, 84, 72, 82, 69, 69, 32, 72, 111, 109, 111, 32, 115, 97, 112, 105, 101, 110, 115, 32, 102, 114, 101, 113, 117, 101, 110, 99, 121, 10]), homoSapiens, 5 * n);
  exports.index = index = 0;
  return 0;
})(process.argv.slice(2));
}).call(this,require('_process'))
},{"_process":1,"fable-core/umd/List":5,"fable-core/umd/Seq":8}],3:[function(require,module,exports){
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

},{"./Symbol":9,"./Util":10}],5:[function(require,module,exports){
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

},{"./ListClass":6,"./Map":7,"./Seq":8}],6:[function(require,module,exports){
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

},{"./Symbol":9,"./Util":10}],7:[function(require,module,exports){
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

},{"./GenericComparer":4,"./ListClass":6,"./Seq":8,"./Symbol":9,"./Util":10}],8:[function(require,module,exports){
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

},{"./Array":3,"./ListClass":6,"./Util":10}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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

},{"./Symbol":9}]},{},[2]);
