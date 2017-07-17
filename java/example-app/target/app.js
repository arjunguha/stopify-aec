/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * Standard libc error codes. Add more to this enum and ErrorStrings as they are
 * needed.
 * @url http://www.gnu.org/software/libc/manual/html_node/Error-Codes.html
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["EPERM"] = 1] = "EPERM";
    ErrorCode[ErrorCode["ENOENT"] = 2] = "ENOENT";
    ErrorCode[ErrorCode["EIO"] = 5] = "EIO";
    ErrorCode[ErrorCode["EBADF"] = 9] = "EBADF";
    ErrorCode[ErrorCode["EACCES"] = 13] = "EACCES";
    ErrorCode[ErrorCode["EBUSY"] = 16] = "EBUSY";
    ErrorCode[ErrorCode["EEXIST"] = 17] = "EEXIST";
    ErrorCode[ErrorCode["ENOTDIR"] = 20] = "ENOTDIR";
    ErrorCode[ErrorCode["EISDIR"] = 21] = "EISDIR";
    ErrorCode[ErrorCode["EINVAL"] = 22] = "EINVAL";
    ErrorCode[ErrorCode["EFBIG"] = 27] = "EFBIG";
    ErrorCode[ErrorCode["ENOSPC"] = 28] = "ENOSPC";
    ErrorCode[ErrorCode["EROFS"] = 30] = "EROFS";
    ErrorCode[ErrorCode["ENOTEMPTY"] = 39] = "ENOTEMPTY";
    ErrorCode[ErrorCode["ENOTSUP"] = 95] = "ENOTSUP";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
/* tslint:disable:variable-name */
/**
 * Strings associated with each error code.
 * @hidden
 */
exports.ErrorStrings = {};
exports.ErrorStrings[ErrorCode.EPERM] = 'Operation not permitted.';
exports.ErrorStrings[ErrorCode.ENOENT] = 'No such file or directory.';
exports.ErrorStrings[ErrorCode.EIO] = 'Input/output error.';
exports.ErrorStrings[ErrorCode.EBADF] = 'Bad file descriptor.';
exports.ErrorStrings[ErrorCode.EACCES] = 'Permission denied.';
exports.ErrorStrings[ErrorCode.EBUSY] = 'Resource busy or locked.';
exports.ErrorStrings[ErrorCode.EEXIST] = 'File exists.';
exports.ErrorStrings[ErrorCode.ENOTDIR] = 'File is not a directory.';
exports.ErrorStrings[ErrorCode.EISDIR] = 'File is a directory.';
exports.ErrorStrings[ErrorCode.EINVAL] = 'Invalid argument.';
exports.ErrorStrings[ErrorCode.EFBIG] = 'File is too big.';
exports.ErrorStrings[ErrorCode.ENOSPC] = 'No space left on disk.';
exports.ErrorStrings[ErrorCode.EROFS] = 'Cannot modify a read-only file system.';
exports.ErrorStrings[ErrorCode.ENOTEMPTY] = 'Directory is not empty.';
exports.ErrorStrings[ErrorCode.ENOTSUP] = 'Operation is not supported.';
/* tslint:enable:variable-name */
/**
 * Represents a BrowserFS error. Passed back to applications after a failed
 * call to the BrowserFS API.
 */
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    /**
     * Represents a BrowserFS error. Passed back to applications after a failed
     * call to the BrowserFS API.
     *
     * Error codes mirror those returned by regular Unix file operations, which is
     * what Node returns.
     * @constructor ApiError
     * @param type The type of the error.
     * @param [message] A descriptive error message.
     */
    function ApiError(type, message, path) {
        if (message === void 0) { message = exports.ErrorStrings[type]; }
        var _this = _super.call(this, message) || this;
        // Unsupported.
        _this.syscall = "";
        _this.errno = type;
        _this.code = ErrorCode[type];
        _this.path = path;
        _this.stack = new Error().stack;
        _this.message = "Error: " + _this.code + ": " + message + (_this.path ? ", '" + _this.path + "'" : '');
        return _this;
    }
    ApiError.fromJSON = function (json) {
        var err = new ApiError(0);
        err.errno = json.errno;
        err.code = json.code;
        err.path = json.path;
        err.stack = json.stack;
        err.message = json.message;
        return err;
    };
    /**
     * Creates an ApiError object from a buffer.
     */
    ApiError.fromBuffer = function (buffer, i) {
        if (i === void 0) { i = 0; }
        return ApiError.fromJSON(JSON.parse(buffer.toString('utf8', i + 4, i + 4 + buffer.readUInt32LE(i))));
    };
    ApiError.FileError = function (code, p) {
        return new ApiError(code, exports.ErrorStrings[code], p);
    };
    ApiError.ENOENT = function (path) {
        return this.FileError(ErrorCode.ENOENT, path);
    };
    ApiError.EEXIST = function (path) {
        return this.FileError(ErrorCode.EEXIST, path);
    };
    ApiError.EISDIR = function (path) {
        return this.FileError(ErrorCode.EISDIR, path);
    };
    ApiError.ENOTDIR = function (path) {
        return this.FileError(ErrorCode.ENOTDIR, path);
    };
    ApiError.EPERM = function (path) {
        return this.FileError(ErrorCode.EPERM, path);
    };
    ApiError.ENOTEMPTY = function (path) {
        return this.FileError(ErrorCode.ENOTEMPTY, path);
    };
    /**
     * @return A friendly error message.
     */
    ApiError.prototype.toString = function () {
        return this.message;
    };
    ApiError.prototype.toJSON = function () {
        return {
            errno: this.errno,
            code: this.code,
            path: this.path,
            stack: this.stack,
            message: this.message
        };
    };
    /**
     * Writes the API error into a buffer.
     */
    ApiError.prototype.writeToBuffer = function (buffer, i) {
        if (buffer === void 0) { buffer = Buffer.alloc(this.bufferSize()); }
        if (i === void 0) { i = 0; }
        var bytesWritten = buffer.write(JSON.stringify(this.toJSON()), i + 4);
        buffer.writeUInt32LE(bytesWritten, i);
        return buffer;
    };
    /**
     * The size of the API error in buffer-form in bytes.
     */
    ApiError.prototype.bufferSize = function () {
        // 4 bytes for string length.
        return 4 + Buffer.byteLength(JSON.stringify(this.toJSON()));
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;
//# sourceMappingURL=api_error.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {exports.__esModule = true;
var path = __webpack_require__(3);
/**
 * Checks for any IE version, including IE11 which removed MSIE from the
 * userAgent string.
 * @hidden
 */
exports.isIE = typeof navigator !== "undefined" && !!(/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || navigator.userAgent.indexOf('Trident') !== -1);
/**
 * Check if we're in a web worker.
 * @hidden
 */
exports.isWebWorker = typeof window === "undefined";
/**
 * Throws an exception. Called on code paths that should be impossible.
 * @hidden
 */
function fail() {
    throw new Error("BFS has reached an impossible code path; please file a bug.");
}
exports.fail = fail;
/**
 * Synchronous recursive makedir.
 * @hidden
 */
function mkdirpSync(p, mode, fs) {
    if (!fs.existsSync(p)) {
        mkdirpSync(path.dirname(p), mode, fs);
        fs.mkdirSync(p, mode);
    }
}
exports.mkdirpSync = mkdirpSync;
/**
 * Converts a buffer into an array buffer. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
function buffer2ArrayBuffer(buff) {
    var u8 = buffer2Uint8array(buff), u8offset = u8.byteOffset, u8Len = u8.byteLength;
    if (u8offset === 0 && u8Len === u8.buffer.byteLength) {
        return u8.buffer;
    }
    else {
        return u8.buffer.slice(u8offset, u8offset + u8Len);
    }
}
exports.buffer2ArrayBuffer = buffer2ArrayBuffer;
/**
 * Converts a buffer into a Uint8Array. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
function buffer2Uint8array(buff) {
    if (buff instanceof Uint8Array) {
        // BFS & Node v4.0 buffers *are* Uint8Arrays.
        return buff;
    }
    else {
        // Uint8Arrays can be constructed from arrayish numbers.
        // At this point, we assume this isn't a BFS array.
        return new Uint8Array(buff);
    }
}
exports.buffer2Uint8array = buffer2Uint8array;
/**
 * Converts the given arrayish object into a Buffer. Attempts to
 * be zero-copy.
 * @hidden
 */
function arrayish2Buffer(arr) {
    if (arr instanceof Buffer) {
        return arr;
    }
    else if (arr instanceof Uint8Array) {
        return uint8Array2Buffer(arr);
    }
    else {
        return Buffer.from(arr);
    }
}
exports.arrayish2Buffer = arrayish2Buffer;
/**
 * Converts the given Uint8Array into a Buffer. Attempts to be zero-copy.
 * @hidden
 */
function uint8Array2Buffer(u8) {
    if (u8 instanceof Buffer) {
        return u8;
    }
    else if (u8.byteOffset === 0 && u8.byteLength === u8.buffer.byteLength) {
        return arrayBuffer2Buffer(u8.buffer);
    }
    else {
        return Buffer.from(u8.buffer, u8.byteOffset, u8.byteLength);
    }
}
exports.uint8Array2Buffer = uint8Array2Buffer;
/**
 * Converts the given array buffer into a Buffer. Attempts to be
 * zero-copy.
 * @hidden
 */
function arrayBuffer2Buffer(ab) {
    return Buffer.from(ab);
}
exports.arrayBuffer2Buffer = arrayBuffer2Buffer;
/**
 * Copies a slice of the given buffer
 * @hidden
 */
function copyingSlice(buff, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = buff.length; }
    if (start < 0 || end < 0 || end > buff.length || start > end) {
        throw new TypeError("Invalid slice bounds on buffer of length " + buff.length + ": [" + start + ", " + end + "]");
    }
    if (buff.length === 0) {
        // Avoid s0 corner case in ArrayBuffer case.
        return emptyBuffer();
    }
    else {
        var u8 = buffer2Uint8array(buff), s0 = buff[0], newS0 = (s0 + 1) % 0xFF;
        buff[0] = newS0;
        if (u8[0] === newS0) {
            // Same memory. Revert & copy.
            u8[0] = s0;
            return uint8Array2Buffer(u8.slice(start, end));
        }
        else {
            // Revert.
            buff[0] = s0;
            return uint8Array2Buffer(u8.subarray(start, end));
        }
    }
}
exports.copyingSlice = copyingSlice;
/**
 * @hidden
 */
var emptyBuff = null;
/**
 * Returns an empty buffer.
 * @hidden
 */
function emptyBuffer() {
    if (emptyBuff) {
        return emptyBuff;
    }
    return emptyBuff = Buffer.alloc(0);
}
exports.emptyBuffer = emptyBuffer;
//# sourceMappingURL=util.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(24)
var ieee754 = __webpack_require__(25)
var isArray = __webpack_require__(26)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var path = __webpack_require__(3);
var util_1 = __webpack_require__(1);
/**
 * Basic filesystem class. Most filesystems should extend this class, as it
 * provides default implementations for a handful of methods.
 */
var BaseFileSystem = (function () {
    function BaseFileSystem() {
    }
    BaseFileSystem.prototype.supportsLinks = function () {
        return false;
    };
    BaseFileSystem.prototype.diskSpace = function (p, cb) {
        cb(0, 0);
    };
    /**
     * Opens the file at path p with the given flag. The file must exist.
     * @param p The path to open.
     * @param flag The flag to use when opening the file.
     */
    BaseFileSystem.prototype.openFile = function (p, flag, cb) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * Create the file at path p with the given mode. Then, open it with the given
     * flag.
     */
    BaseFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        var mustBeFile = function (e, stats) {
            if (e) {
                // File does not exist.
                switch (flag.pathNotExistsAction()) {
                    case file_flag_1.ActionType.CREATE_FILE:
                        // Ensure parent exists.
                        return _this.stat(path.dirname(p), false, function (e, parentStats) {
                            if (e) {
                                cb(e);
                            }
                            else if (parentStats && !parentStats.isDirectory()) {
                                cb(api_error_1.ApiError.ENOTDIR(path.dirname(p)));
                            }
                            else {
                                _this.createFile(p, flag, mode, cb);
                            }
                        });
                    case file_flag_1.ActionType.THROW_EXCEPTION:
                        return cb(api_error_1.ApiError.ENOENT(p));
                    default:
                        return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.'));
                }
            }
            else {
                // File exists.
                if (stats && stats.isDirectory()) {
                    return cb(api_error_1.ApiError.EISDIR(p));
                }
                switch (flag.pathExistsAction()) {
                    case file_flag_1.ActionType.THROW_EXCEPTION:
                        return cb(api_error_1.ApiError.EEXIST(p));
                    case file_flag_1.ActionType.TRUNCATE_FILE:
                        // NOTE: In a previous implementation, we deleted the file and
                        // re-created it. However, this created a race condition if another
                        // asynchronous request was trying to read the file, as the file
                        // would not exist for a small period of time.
                        return _this.openFile(p, flag, function (e, fd) {
                            if (e) {
                                cb(e);
                            }
                            else if (fd) {
                                fd.truncate(0, function () {
                                    fd.sync(function () {
                                        cb(null, fd);
                                    });
                                });
                            }
                            else {
                                util_1.fail();
                            }
                        });
                    case file_flag_1.ActionType.NOP:
                        return _this.openFile(p, flag, cb);
                    default:
                        return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.'));
                }
            }
        };
        this.stat(p, false, mustBeFile);
    };
    BaseFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.renameSync = function (oldPath, newPath) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.stat = function (p, isLstat, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.statSync = function (p, isLstat) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * Opens the file at path p with the given flag. The file must exist.
     * @param p The path to open.
     * @param flag The flag to use when opening the file.
     * @return A File object corresponding to the opened file.
     */
    BaseFileSystem.prototype.openFileSync = function (p, flag, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * Create the file at path p with the given mode. Then, open it with the given
     * flag.
     */
    BaseFileSystem.prototype.createFileSync = function (p, flag, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.openSync = function (p, flag, mode) {
        // Check if the path exists, and is a file.
        var stats;
        try {
            stats = this.statSync(p, false);
        }
        catch (e) {
            // File does not exist.
            switch (flag.pathNotExistsAction()) {
                case file_flag_1.ActionType.CREATE_FILE:
                    // Ensure parent exists.
                    var parentStats = this.statSync(path.dirname(p), false);
                    if (!parentStats.isDirectory()) {
                        throw api_error_1.ApiError.ENOTDIR(path.dirname(p));
                    }
                    return this.createFileSync(p, flag, mode);
                case file_flag_1.ActionType.THROW_EXCEPTION:
                    throw api_error_1.ApiError.ENOENT(p);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.');
            }
        }
        // File exists.
        if (stats.isDirectory()) {
            throw api_error_1.ApiError.EISDIR(p);
        }
        switch (flag.pathExistsAction()) {
            case file_flag_1.ActionType.THROW_EXCEPTION:
                throw api_error_1.ApiError.EEXIST(p);
            case file_flag_1.ActionType.TRUNCATE_FILE:
                // Delete file.
                this.unlinkSync(p);
                // Create file. Use the same mode as the old file.
                // Node itself modifies the ctime when this occurs, so this action
                // will preserve that behavior if the underlying file system
                // supports those properties.
                return this.createFileSync(p, flag, stats.mode);
            case file_flag_1.ActionType.NOP:
                return this.openFileSync(p, flag, mode);
            default:
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.');
        }
    };
    BaseFileSystem.prototype.unlink = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.unlinkSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.rmdir = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.rmdirSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.mkdir = function (p, mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.mkdirSync = function (p, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.readdir = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.readdirSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.exists = function (p, cb) {
        this.stat(p, null, function (err) {
            cb(!err);
        });
    };
    BaseFileSystem.prototype.existsSync = function (p) {
        try {
            this.statSync(p, true);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    BaseFileSystem.prototype.realpath = function (p, cache, cb) {
        if (this.supportsLinks()) {
            // The path could contain symlinks. Split up the path,
            // resolve any symlinks, return the resolved string.
            var splitPath = p.split(path.sep);
            // TODO: Simpler to just pass through file, find sep and such.
            for (var i = 0; i < splitPath.length; i++) {
                var addPaths = splitPath.slice(0, i + 1);
                splitPath[i] = path.join.apply(null, addPaths);
            }
        }
        else {
            // No symlinks. We just need to verify that it exists.
            this.exists(p, function (doesExist) {
                if (doesExist) {
                    cb(null, p);
                }
                else {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
            });
        }
    };
    BaseFileSystem.prototype.realpathSync = function (p, cache) {
        if (this.supportsLinks()) {
            // The path could contain symlinks. Split up the path,
            // resolve any symlinks, return the resolved string.
            var splitPath = p.split(path.sep);
            // TODO: Simpler to just pass through file, find sep and such.
            for (var i = 0; i < splitPath.length; i++) {
                var addPaths = splitPath.slice(0, i + 1);
                splitPath[i] = path.join.apply(path, addPaths);
            }
            return splitPath.join(path.sep);
        }
        else {
            // No symlinks. We just need to verify that it exists.
            if (this.existsSync(p)) {
                return p;
            }
            else {
                throw api_error_1.ApiError.ENOENT(p);
            }
        }
    };
    BaseFileSystem.prototype.truncate = function (p, len, cb) {
        this.open(p, file_flag_1.FileFlag.getFileFlag('r+'), 0x1a4, (function (er, fd) {
            if (er) {
                return cb(er);
            }
            fd.truncate(len, (function (er) {
                fd.close((function (er2) {
                    cb(er || er2);
                }));
            }));
        }));
    };
    BaseFileSystem.prototype.truncateSync = function (p, len) {
        var fd = this.openSync(p, file_flag_1.FileFlag.getFileFlag('r+'), 0x1a4);
        // Need to safely close FD, regardless of whether or not truncate succeeds.
        try {
            fd.truncateSync(len);
        }
        catch (e) {
            throw e;
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.readFile = function (fname, encoding, flag, cb) {
        // Wrap cb in file closing code.
        var oldCb = cb;
        // Get file.
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err, arg) {
                fd.close(function (err2) {
                    if (!err) {
                        err = err2;
                    }
                    return oldCb(err, arg);
                });
            };
            fd.stat(function (err, stat) {
                if (err) {
                    return cb(err);
                }
                // Allocate buffer.
                var buf = Buffer.alloc(stat.size);
                fd.read(buf, 0, stat.size, 0, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    else if (encoding === null) {
                        return cb(err, buf);
                    }
                    try {
                        cb(null, buf.toString(encoding));
                    }
                    catch (e) {
                        cb(e);
                    }
                });
            });
        });
    };
    BaseFileSystem.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var stat = fd.statSync();
            // Allocate buffer.
            var buf = Buffer.alloc(stat.size);
            fd.readSync(buf, 0, stat.size, 0);
            fd.closeSync();
            if (encoding === null) {
                return buf;
            }
            return buf.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        // Wrap cb in file closing code.
        var oldCb = cb;
        // Get file.
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err) {
                fd.close(function (err2) {
                    oldCb(err ? err : err2);
                });
            };
            try {
                if (typeof data === 'string') {
                    data = Buffer.from(data, encoding);
                }
            }
            catch (e) {
                return cb(e);
            }
            // Write into file.
            fd.write(data, 0, data.length, 0, cb);
        });
    };
    BaseFileSystem.prototype.writeFileSync = function (fname, data, encoding, flag, mode) {
        // Get file.
        var fd = this.openSync(fname, flag, mode);
        try {
            if (typeof data === 'string') {
                data = Buffer.from(data, encoding);
            }
            // Write into file.
            fd.writeSync(data, 0, data.length, 0);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        // Wrap cb in file closing code.
        var oldCb = cb;
        this.open(fname, flag, mode, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err) {
                fd.close(function (err2) {
                    oldCb(err ? err : err2);
                });
            };
            if (typeof data === 'string') {
                data = Buffer.from(data, encoding);
            }
            fd.write(data, 0, data.length, null, cb);
        });
    };
    BaseFileSystem.prototype.appendFileSync = function (fname, data, encoding, flag, mode) {
        var fd = this.openSync(fname, flag, mode);
        try {
            if (typeof data === 'string') {
                data = Buffer.from(data, encoding);
            }
            fd.writeSync(data, 0, data.length, null);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.chmod = function (p, isLchmod, mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.chmodSync = function (p, isLchmod, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.chown = function (p, isLchown, uid, gid, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.chownSync = function (p, isLchown, uid, gid) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.utimes = function (p, atime, mtime, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.utimesSync = function (p, atime, mtime) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.link = function (srcpath, dstpath, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.linkSync = function (srcpath, dstpath) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.symlink = function (srcpath, dstpath, type, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.symlinkSync = function (srcpath, dstpath, type) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.readlink = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.readlinkSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    return BaseFileSystem;
}());
exports.BaseFileSystem = BaseFileSystem;
/**
 * Implements the asynchronous API in terms of the synchronous API.
 * @class SynchronousFileSystem
 */
var SynchronousFileSystem = (function (_super) {
    __extends(SynchronousFileSystem, _super);
    function SynchronousFileSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousFileSystem.prototype.supportsSynch = function () {
        return true;
    };
    SynchronousFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        try {
            this.renameSync(oldPath, newPath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.stat = function (p, isLstat, cb) {
        try {
            cb(null, this.statSync(p, isLstat));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.open = function (p, flags, mode, cb) {
        try {
            cb(null, this.openSync(p, flags, mode));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.unlink = function (p, cb) {
        try {
            this.unlinkSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.rmdir = function (p, cb) {
        try {
            this.rmdirSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.mkdir = function (p, mode, cb) {
        try {
            this.mkdirSync(p, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readdir = function (p, cb) {
        try {
            cb(null, this.readdirSync(p));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chmod = function (p, isLchmod, mode, cb) {
        try {
            this.chmodSync(p, isLchmod, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chown = function (p, isLchown, uid, gid, cb) {
        try {
            this.chownSync(p, isLchown, uid, gid);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.utimes = function (p, atime, mtime, cb) {
        try {
            this.utimesSync(p, atime, mtime);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.link = function (srcpath, dstpath, cb) {
        try {
            this.linkSync(srcpath, dstpath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.symlink = function (srcpath, dstpath, type, cb) {
        try {
            this.symlinkSync(srcpath, dstpath, type);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readlink = function (p, cb) {
        try {
            cb(null, this.readlinkSync(p));
        }
        catch (e) {
            cb(e);
        }
    };
    return SynchronousFileSystem;
}(BaseFileSystem));
exports.SynchronousFileSystem = SynchronousFileSystem;
var nextDev = 1;
/**
 * Allocates a unique device ID for a filesystem instance
 */
function allocDev() {
    return nextDev++;
}
exports.allocDev = allocDev;
//# sourceMappingURL=file_system.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {exports.__esModule = true;
/**
 * Indicates the type of the given file. Applied to 'mode'.
 */
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(FileType = exports.FileType || (exports.FileType = {}));
/**
 * Emulation of Node's `fs.Stats` object.
 *
 * Attribute descriptions are from `man 2 stat'
 * @see http://nodejs.org/api/fs.html#fs_class_fs_stats
 * @see http://man7.org/linux/man-pages/man2/stat.2.html
 */
var Stats = (function () {
    /**
     * Provides information about a particular entry in the file system.
     * @param [Number] item_type type of the item (FILE, DIRECTORY, SYMLINK, or SOCKET)
     * @param [Number] size Size of the item in bytes. For directories/symlinks,
     *   this is normally the size of the struct that represents the item.
     * @param [Number] mode Unix-style file mode (e.g. 0o644)
     * @param [Date?] atime time of last access
     * @param [Date?] mtime time of last modification
     * @param [Date?] ctime time of creation
     */
    function Stats(itemType, size, mode, atime, mtime, ctime) {
        if (atime === void 0) { atime = new Date(); }
        if (mtime === void 0) { mtime = new Date(); }
        if (ctime === void 0) { ctime = new Date(); }
        this.size = size;
        this.atime = atime;
        this.mtime = mtime;
        this.ctime = ctime;
        /**
         * UNSUPPORTED ATTRIBUTES
         * I assume no one is going to need these details, although we could fake
         * appropriate values if need be.
         */
        // ID of device containing file
        this.dev = 0;
        // inode number
        this.ino = 0;
        // device ID (if special file)
        this.rdev = 0;
        // number of hard links
        this.nlink = 1;
        // blocksize for file system I/O
        this.blksize = 4096;
        // @todo Maybe support these? atm, it's a one-user filesystem.
        // user ID of owner
        this.uid = 0;
        // group ID of owner
        this.gid = 0;
        // time file was created (currently unsupported)
        this.birthtime = new Date(0);
        // XXX: Some file systems stash data on stats objects.
        this.fileData = null;
        if (!mode) {
            switch (itemType) {
                case FileType.FILE:
                    this.mode = 0x1a4;
                    break;
                case FileType.DIRECTORY:
                default:
                    this.mode = 0x1ff;
            }
        }
        else {
            this.mode = mode;
        }
        // number of 512B blocks allocated
        this.blocks = Math.ceil(size / 512);
        // Check if mode also includes top-most bits, which indicate the file's
        // type.
        if (this.mode < 0x1000) {
            this.mode |= itemType;
        }
    }
    Stats.fromBuffer = function (buffer) {
        var size = buffer.readUInt32LE(0), mode = buffer.readUInt32LE(4), atime = buffer.readDoubleLE(8), mtime = buffer.readDoubleLE(16), ctime = buffer.readDoubleLE(24);
        return new Stats(mode & 0xF000, size, mode & 0xFFF, new Date(atime), new Date(mtime), new Date(ctime));
    };
    Stats.prototype.toBuffer = function () {
        var buffer = Buffer.alloc(32);
        buffer.writeUInt32LE(this.size, 0);
        buffer.writeUInt32LE(this.mode, 4);
        buffer.writeDoubleLE(this.atime.getTime(), 8);
        buffer.writeDoubleLE(this.mtime.getTime(), 16);
        buffer.writeDoubleLE(this.ctime.getTime(), 24);
        return buffer;
    };
    /**
     * **Nonstandard**: Clone the stats object.
     * @return [BrowserFS.node.fs.Stats]
     */
    Stats.prototype.clone = function () {
        return new Stats(this.mode & 0xF000, this.size, this.mode & 0xFFF, this.atime, this.mtime, this.ctime);
    };
    /**
     * @return [Boolean] True if this item is a file.
     */
    Stats.prototype.isFile = function () {
        return (this.mode & 0xF000) === FileType.FILE;
    };
    /**
     * @return [Boolean] True if this item is a directory.
     */
    Stats.prototype.isDirectory = function () {
        return (this.mode & 0xF000) === FileType.DIRECTORY;
    };
    /**
     * @return [Boolean] True if this item is a symbolic link (only valid through lstat)
     */
    Stats.prototype.isSymbolicLink = function () {
        return (this.mode & 0xF000) === FileType.SYMLINK;
    };
    /**
     * Change the mode of the file. We use this helper function to prevent messing
     * up the type of the file, which is encoded in mode.
     */
    Stats.prototype.chmod = function (mode) {
        this.mode = (this.mode & 0xF000) | mode;
    };
    // We don't support the following types of files.
    Stats.prototype.isSocket = function () {
        return false;
    };
    Stats.prototype.isBlockDevice = function () {
        return false;
    };
    Stats.prototype.isCharacterDevice = function () {
        return false;
    };
    Stats.prototype.isFIFO = function () {
        return false;
    };
    return Stats;
}());
exports["default"] = Stats;
//# sourceMappingURL=node_fs_stats.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
var ActionType;
(function (ActionType) {
    // Indicates that the code should not do anything.
    ActionType[ActionType["NOP"] = 0] = "NOP";
    // Indicates that the code should throw an exception.
    ActionType[ActionType["THROW_EXCEPTION"] = 1] = "THROW_EXCEPTION";
    // Indicates that the code should truncate the file, but only if it is a file.
    ActionType[ActionType["TRUNCATE_FILE"] = 2] = "TRUNCATE_FILE";
    // Indicates that the code should create the file.
    ActionType[ActionType["CREATE_FILE"] = 3] = "CREATE_FILE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * Represents one of the following file flags. A convenience object.
 *
 * * `'r'` - Open file for reading. An exception occurs if the file does not exist.
 * * `'r+'` - Open file for reading and writing. An exception occurs if the file does not exist.
 * * `'rs'` - Open file for reading in synchronous mode. Instructs the filesystem to not cache writes.
 * * `'rs+'` - Open file for reading and writing, and opens the file in synchronous mode.
 * * `'w'` - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx'` - Like 'w' but opens the file in exclusive mode.
 * * `'w+'` - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx+'` - Like 'w+' but opens the file in exclusive mode.
 * * `'a'` - Open file for appending. The file is created if it does not exist.
 * * `'ax'` - Like 'a' but opens the file in exclusive mode.
 * * `'a+'` - Open file for reading and appending. The file is created if it does not exist.
 * * `'ax+'` - Like 'a+' but opens the file in exclusive mode.
 *
 * Exclusive mode ensures that the file path is newly created.
 */
var FileFlag = (function () {
    /**
     * This should never be called directly.
     * @param modeStr The string representing the mode
     * @throw when the mode string is invalid
     */
    function FileFlag(flagStr) {
        this.flagStr = flagStr;
        if (FileFlag.validFlagStrs.indexOf(flagStr) < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid flag: " + flagStr);
        }
    }
    /**
     * Get an object representing the given file flag.
     * @param modeStr The string representing the flag
     * @return The FileFlag object representing the flag
     * @throw when the flag string is invalid
     */
    FileFlag.getFileFlag = function (flagStr) {
        // Check cache first.
        if (FileFlag.flagCache.hasOwnProperty(flagStr)) {
            return FileFlag.flagCache[flagStr];
        }
        return FileFlag.flagCache[flagStr] = new FileFlag(flagStr);
    };
    /**
     * Get the underlying flag string for this flag.
     */
    FileFlag.prototype.getFlagString = function () {
        return this.flagStr;
    };
    /**
     * Returns true if the file is readable.
     */
    FileFlag.prototype.isReadable = function () {
        return this.flagStr.indexOf('r') !== -1 || this.flagStr.indexOf('+') !== -1;
    };
    /**
     * Returns true if the file is writeable.
     */
    FileFlag.prototype.isWriteable = function () {
        return this.flagStr.indexOf('w') !== -1 || this.flagStr.indexOf('a') !== -1 || this.flagStr.indexOf('+') !== -1;
    };
    /**
     * Returns true if the file mode should truncate.
     */
    FileFlag.prototype.isTruncating = function () {
        return this.flagStr.indexOf('w') !== -1;
    };
    /**
     * Returns true if the file is appendable.
     */
    FileFlag.prototype.isAppendable = function () {
        return this.flagStr.indexOf('a') !== -1;
    };
    /**
     * Returns true if the file is open in synchronous mode.
     */
    FileFlag.prototype.isSynchronous = function () {
        return this.flagStr.indexOf('s') !== -1;
    };
    /**
     * Returns true if the file is open in exclusive mode.
     */
    FileFlag.prototype.isExclusive = function () {
        return this.flagStr.indexOf('x') !== -1;
    };
    /**
     * Returns one of the static fields on this object that indicates the
     * appropriate response to the path existing.
     */
    FileFlag.prototype.pathExistsAction = function () {
        if (this.isExclusive()) {
            return ActionType.THROW_EXCEPTION;
        }
        else if (this.isTruncating()) {
            return ActionType.TRUNCATE_FILE;
        }
        else {
            return ActionType.NOP;
        }
    };
    /**
     * Returns one of the static fields on this object that indicates the
     * appropriate response to the path not existing.
     */
    FileFlag.prototype.pathNotExistsAction = function () {
        if ((this.isWriteable() || this.isAppendable()) && this.flagStr !== 'r+') {
            return ActionType.CREATE_FILE;
        }
        else {
            return ActionType.THROW_EXCEPTION;
        }
    };
    return FileFlag;
}());
// Contains cached FileMode instances.
FileFlag.flagCache = {};
// Array of valid mode strings.
FileFlag.validFlagStrs = ['r', 'r+', 'rs', 'rs+', 'w', 'wx', 'w+', 'wx+', 'a', 'ax', 'a+', 'ax+'];
exports.FileFlag = FileFlag;
//# sourceMappingURL=file_flag.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_1 = __webpack_require__(13);
var api_error_1 = __webpack_require__(0);
var node_fs_1 = __webpack_require__(8);
var util_1 = __webpack_require__(1);
/**
 * An implementation of the File interface that operates on a file that is
 * completely in-memory. PreloadFiles are backed by a Buffer.
 *
 * This is also an abstract class, as it lacks an implementation of 'sync' and
 * 'close'. Each filesystem that wishes to use this file representation must
 * extend this class and implement those two methods.
 * @todo 'close' lever that disables functionality once closed.
 */
var PreloadFile = (function (_super) {
    __extends(PreloadFile, _super);
    /**
     * Creates a file with the given path and, optionally, the given contents. Note
     * that, if contents is specified, it will be mutated by the file!
     * @param _fs The file system that created the file.
     * @param _path
     * @param _mode The mode that the file was opened using.
     *   Dictates permissions and where the file pointer starts.
     * @param _stat The stats object for the given file.
     *   PreloadFile will mutate this object. Note that this object must contain
     *   the appropriate mode that the file was opened as.
     * @param contents A buffer containing the entire
     *   contents of the file. PreloadFile will mutate this buffer. If not
     *   specified, we assume it is a new file.
     */
    function PreloadFile(_fs, _path, _flag, _stat, contents) {
        var _this = _super.call(this) || this;
        _this._pos = 0;
        _this._dirty = false;
        _this._fs = _fs;
        _this._path = _path;
        _this._flag = _flag;
        _this._stat = _stat;
        if (contents) {
            _this._buffer = contents;
        }
        else {
            // Empty buffer. It'll expand once we write stuff to it.
            _this._buffer = util_1.emptyBuffer();
        }
        // Note: This invariant is *not* maintained once the file starts getting
        // modified.
        // Note: Only actually matters if file is readable, as writeable modes may
        // truncate/append to file.
        if (_this._stat.size !== _this._buffer.length && _this._flag.isReadable()) {
            throw new Error("Invalid buffer: Buffer is " + _this._buffer.length + " long, yet Stats object specifies that file is " + _this._stat.size + " long.");
        }
        return _this;
    }
    /**
     * NONSTANDARD: Get the underlying buffer for this file. !!DO NOT MUTATE!! Will mess up dirty tracking.
     */
    PreloadFile.prototype.getBuffer = function () {
        return this._buffer;
    };
    /**
     * NONSTANDARD: Get underlying stats for this file. !!DO NOT MUTATE!!
     */
    PreloadFile.prototype.getStats = function () {
        return this._stat;
    };
    PreloadFile.prototype.getFlag = function () {
        return this._flag;
    };
    /**
     * Get the path to this file.
     * @return [String] The path to the file.
     */
    PreloadFile.prototype.getPath = function () {
        return this._path;
    };
    /**
     * Get the current file position.
     *
     * We emulate the following bug mentioned in the Node documentation:
     * > On Linux, positional writes don't work when the file is opened in append
     *   mode. The kernel ignores the position argument and always appends the data
     *   to the end of the file.
     * @return [Number] The current file position.
     */
    PreloadFile.prototype.getPos = function () {
        if (this._flag.isAppendable()) {
            return this._stat.size;
        }
        return this._pos;
    };
    /**
     * Advance the current file position by the indicated number of positions.
     * @param [Number] delta
     */
    PreloadFile.prototype.advancePos = function (delta) {
        return this._pos += delta;
    };
    /**
     * Set the file position.
     * @param [Number] newPos
     */
    PreloadFile.prototype.setPos = function (newPos) {
        return this._pos = newPos;
    };
    /**
     * **Core**: Asynchronous sync. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.sync = function (cb) {
        try {
            this.syncSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous sync.
     */
    PreloadFile.prototype.syncSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * **Core**: Asynchronous close. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.close = function (cb) {
        try {
            this.closeSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous close.
     */
    PreloadFile.prototype.closeSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * Asynchronous `stat`.
     * @param [Function(BrowserFS.ApiError, BrowserFS.node.fs.Stats)] cb
     */
    PreloadFile.prototype.stat = function (cb) {
        try {
            cb(null, this._stat.clone());
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Synchronous `stat`.
     */
    PreloadFile.prototype.statSync = function () {
        return this._stat.clone();
    };
    /**
     * Asynchronous truncate.
     * @param [Number] len
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.truncate = function (len, cb) {
        try {
            this.truncateSync(len);
            if (this._flag.isSynchronous() && !node_fs_1["default"].getRootFS().supportsSynch()) {
                this.sync(cb);
            }
            cb();
        }
        catch (e) {
            return cb(e);
        }
    };
    /**
     * Synchronous truncate.
     * @param [Number] len
     */
    PreloadFile.prototype.truncateSync = function (len) {
        this._dirty = true;
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        this._stat.mtime = new Date();
        if (len > this._buffer.length) {
            var buf = Buffer.alloc(len - this._buffer.length, 0);
            // Write will set @_stat.size for us.
            this.writeSync(buf, 0, buf.length, this._buffer.length);
            if (this._flag.isSynchronous() && node_fs_1["default"].getRootFS().supportsSynch()) {
                this.syncSync();
            }
            return;
        }
        this._stat.size = len;
        // Truncate buffer to 'len'.
        var newBuff = Buffer.alloc(len);
        this._buffer.copy(newBuff, 0, 0, len);
        this._buffer = newBuff;
        if (this._flag.isSynchronous() && node_fs_1["default"].getRootFS().supportsSynch()) {
            this.syncSync();
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)]
     *   cb The number specifies the number of bytes written into the file.
     */
    PreloadFile.prototype.write = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.writeSync multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @return [Number]
     */
    PreloadFile.prototype.writeSync = function (buffer, offset, length, position) {
        this._dirty = true;
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        var endFp = position + length;
        if (endFp > this._stat.size) {
            this._stat.size = endFp;
            if (endFp > this._buffer.length) {
                // Extend the buffer!
                var newBuff = Buffer.alloc(endFp);
                this._buffer.copy(newBuff);
                this._buffer = newBuff;
            }
        }
        var len = buffer.copy(this._buffer, position, offset, offset + length);
        this._stat.mtime = new Date();
        if (this._flag.isSynchronous()) {
            this.syncSync();
            return len;
        }
        this.setPos(position + len);
        return len;
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)] cb The
     *   number is the number of bytes read
     */
    PreloadFile.prototype.read = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @return [Number]
     */
    PreloadFile.prototype.readSync = function (buffer, offset, length, position) {
        if (!this._flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a readable mode.');
        }
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        var endRead = position + length;
        if (endRead > this._stat.size) {
            length = this._stat.size - position;
        }
        var rv = this._buffer.copy(buffer, offset, position, position + length);
        this._stat.atime = new Date();
        this._pos = position + length;
        return rv;
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number|String] mode
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.chmod = function (mode, cb) {
        try {
            this.chmodSync(mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number] mode
     */
    PreloadFile.prototype.chmodSync = function (mode) {
        if (!this._fs.supportsProps()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
        }
        this._dirty = true;
        this._stat.chmod(mode);
        this.syncSync();
    };
    PreloadFile.prototype.isDirty = function () {
        return this._dirty;
    };
    /**
     * Resets the dirty bit. Should only be called after a sync has completed successfully.
     */
    PreloadFile.prototype.resetDirty = function () {
        this._dirty = false;
    };
    return PreloadFile;
}(file_1.BaseFile));
exports["default"] = PreloadFile;
/**
 * File class for the InMemory and XHR file systems.
 * Doesn't sync to anything, so it works nicely for memory-only files.
 */
var NoSyncFile = (function (_super) {
    __extends(NoSyncFile, _super);
    function NoSyncFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    /**
     * Asynchronous sync. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.sync = function (cb) {
        cb();
    };
    /**
     * Synchronous sync. Doesn't do anything.
     */
    NoSyncFile.prototype.syncSync = function () {
        // NOP.
    };
    /**
     * Asynchronous close. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.close = function (cb) {
        cb();
    };
    /**
     * Synchronous close. Doesn't do anything.
     */
    NoSyncFile.prototype.closeSync = function () {
        // NOP.
    };
    return NoSyncFile;
}(PreloadFile));
exports.NoSyncFile = NoSyncFile;
//# sourceMappingURL=preload_file.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var FS_1 = __webpack_require__(27);
// Manually export the individual public functions of fs.
// Required because some code will invoke functions off of the module.
// e.g.:
// let writeFile = fs.writeFile;
// writeFile(...)
/**
 * @hidden
 */
var fs = new FS_1["default"]();
/**
 * @hidden
 */
var _fsMock = {};
/**
 * @hidden
 */
var fsProto = FS_1["default"].prototype;
Object.keys(fsProto).forEach(function (key) {
    if (typeof fs[key] === 'function') {
        _fsMock[key] = function () {
            return fs[key].apply(fs, arguments);
        };
    }
    else {
        _fsMock[key] = fs[key];
    }
});
_fsMock['changeFSModule'] = function (newFs) {
    fs = newFs;
};
_fsMock['getFSModule'] = function () {
    return fs;
};
_fsMock['FS'] = FS_1["default"];
exports["default"] = _fsMock;
//# sourceMappingURL=node_fs.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
/**
 * @hidden
 */
var toExport;
if (typeof (window) !== 'undefined') {
    toExport = window;
}
else if (typeof (self) !== 'undefined') {
    toExport = self;
}
else {
    toExport = global;
}
exports["default"] = toExport;
//# sourceMappingURL=global.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
/**
 * Base class that contains shared implementations of functions for the file
 * object.
 */
var BaseFile = (function () {
    function BaseFile() {
    }
    BaseFile.prototype.sync = function (cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.syncSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.datasync = function (cb) {
        this.sync(cb);
    };
    BaseFile.prototype.datasyncSync = function () {
        return this.syncSync();
    };
    BaseFile.prototype.chown = function (uid, gid, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.chownSync = function (uid, gid) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.chmod = function (mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.chmodSync = function (mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.utimes = function (atime, mtime, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.utimesSync = function (atime, mtime) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    return BaseFile;
}());
exports.BaseFile = BaseFile;
//# sourceMappingURL=file.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var node_fs_stats_1 = __webpack_require__(5);
var path = __webpack_require__(3);
var inode_1 = __webpack_require__(38);
var preload_file_1 = __webpack_require__(7);
var util_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ROOT_NODE_ID = "/";
/**
 * @hidden
 */
var emptyDirNode = null;
/**
 * Returns an empty directory node.
 * @hidden
 */
function getEmptyDirNode() {
    if (emptyDirNode) {
        return emptyDirNode;
    }
    return emptyDirNode = Buffer.from("{}");
}
/**
 * Generates a random ID.
 * @hidden
 */
function GenerateRandomID() {
    // From http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * Helper function. Checks if 'e' is defined. If so, it triggers the callback
 * with 'e' and returns false. Otherwise, returns true.
 * @hidden
 */
function noError(e, cb) {
    if (e) {
        cb(e);
        return false;
    }
    return true;
}
/**
 * Helper function. Checks if 'e' is defined. If so, it aborts the transaction,
 * triggers the callback with 'e', and returns false. Otherwise, returns true.
 * @hidden
 */
function noErrorTx(e, tx, cb) {
    if (e) {
        tx.abort(function () {
            cb(e);
        });
        return false;
    }
    return true;
}
/**
 * A simple RW transaction for simple synchronous key-value stores.
 */
var SimpleSyncRWTransaction = (function () {
    function SimpleSyncRWTransaction(store) {
        this.store = store;
        /**
         * Stores data in the keys we modify prior to modifying them.
         * Allows us to roll back commits.
         */
        this.originalData = {};
        /**
         * List of keys modified in this transaction, if any.
         */
        this.modifiedKeys = [];
    }
    SimpleSyncRWTransaction.prototype.get = function (key) {
        var val = this.store.get(key);
        this.stashOldValue(key, val);
        return val;
    };
    SimpleSyncRWTransaction.prototype.put = function (key, data, overwrite) {
        this.markModified(key);
        return this.store.put(key, data, overwrite);
    };
    SimpleSyncRWTransaction.prototype.del = function (key) {
        this.markModified(key);
        this.store.del(key);
    };
    SimpleSyncRWTransaction.prototype.commit = function () { };
    SimpleSyncRWTransaction.prototype.abort = function () {
        // Rollback old values.
        for (var i = 0; i < this.modifiedKeys.length; i++) {
            var key = this.modifiedKeys[i];
            var value = this.originalData[key];
            if (!value) {
                // Key didn't exist.
                this.store.del(key);
            }
            else {
                // Key existed. Store old value.
                this.store.put(key, value, true);
            }
        }
    };
    /**
     * Stashes given key value pair into `originalData` if it doesn't already
     * exist. Allows us to stash values the program is requesting anyway to
     * prevent needless `get` requests if the program modifies the data later
     * on during the transaction.
     */
    SimpleSyncRWTransaction.prototype.stashOldValue = function (key, value) {
        // Keep only the earliest value in the transaction.
        if (!this.originalData.hasOwnProperty(key)) {
            this.originalData[key] = value;
        }
    };
    /**
     * Marks the given key as modified, and stashes its value if it has not been
     * stashed already.
     */
    SimpleSyncRWTransaction.prototype.markModified = function (key) {
        if (this.modifiedKeys.indexOf(key) === -1) {
            this.modifiedKeys.push(key);
            if (!this.originalData.hasOwnProperty(key)) {
                this.originalData[key] = this.store.get(key);
            }
        }
    };
    return SimpleSyncRWTransaction;
}());
exports.SimpleSyncRWTransaction = SimpleSyncRWTransaction;
var SyncKeyValueFile = (function (_super) {
    __extends(SyncKeyValueFile, _super);
    function SyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    SyncKeyValueFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats());
            this.resetDirty();
        }
    };
    SyncKeyValueFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return SyncKeyValueFile;
}(preload_file_1["default"]));
exports.SyncKeyValueFile = SyncKeyValueFile;
/**
 * A "Synchronous key-value file system". Stores data to/retrieves data from an
 * underlying key-value store.
 *
 * We use a unique ID for each node in the file system. The root node has a
 * fixed ID.
 * @todo Introduce Node ID caching.
 * @todo Check modes.
 */
var SyncKeyValueFileSystem = (function (_super) {
    __extends(SyncKeyValueFileSystem, _super);
    function SyncKeyValueFileSystem(options) {
        var _this = _super.call(this) || this;
        _this.nextIno = 1;
        _this.devId = file_system_1.allocDev();
        _this.store = options.store;
        // INVARIANT: Ensure that the root exists.
        _this.makeRootDirectory();
        return _this;
    }
    SyncKeyValueFileSystem.isAvailable = function () { return true; };
    SyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    SyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSynch = function () { return true; };
    /**
     * Returns a new, unique integer inode id.
     * @return [number]
     */
    SyncKeyValueFileSystem.prototype.allocIno = function () {
        return this.nextIno++;
    };
    /*
     * Delete all contents stored in the file system.
     */
    SyncKeyValueFileSystem.prototype.empty = function () {
        this.store.clear();
        // INVARIANT: Root always exists.
        this.makeRootDirectory();
    };
    SyncKeyValueFileSystem.prototype.renameSync = function (oldPath, newPath) {
        var tx = this.store.beginTransaction('readwrite'), oldParent = path.dirname(oldPath), oldName = path.basename(oldPath), newParent = path.dirname(newPath), newName = path.basename(newPath), 
        // Remove oldPath from parent's directory listing.
        oldDirNode = this.findINode(tx, oldParent), oldDirList = this.getDirListing(tx, oldParent, oldDirNode);
        if (!oldDirList[oldName]) {
            throw api_error_1.ApiError.ENOENT(oldPath);
        }
        var nodeId = oldDirList[oldName];
        delete oldDirList[oldName];
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent);
        }
        // Add newPath to parent's directory listing.
        var newDirNode, newDirList;
        if (newParent === oldParent) {
            // Prevent us from re-grabbing the same directory listing, which still
            // contains oldName.
            newDirNode = oldDirNode;
            newDirList = oldDirList;
        }
        else {
            newDirNode = this.findINode(tx, newParent);
            newDirList = this.getDirListing(tx, newParent, newDirNode);
        }
        if (newDirList[newName]) {
            // If it's a file, delete it.
            var newNameNode = this.getINode(tx, newPath, newDirList[newName]);
            if (newNameNode.isFile()) {
                try {
                    tx.del(newNameNode.id);
                    tx.del(newDirList[newName]);
                }
                catch (e) {
                    tx.abort();
                    throw e;
                }
            }
            else {
                // If it's a directory, throw a permissions error.
                throw api_error_1.ApiError.EPERM(newPath);
            }
        }
        newDirList[newName] = nodeId;
        // Commit the two changed directory listings.
        try {
            tx.put(oldDirNode.id, Buffer.from(JSON.stringify(oldDirList)), true);
            tx.put(newDirNode.id, Buffer.from(JSON.stringify(newDirList)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    SyncKeyValueFileSystem.prototype.statSync = function (p, isLstat) {
        // Get the inode to the item, convert it into a Stats object.
        return this.findINode(this.store.beginTransaction('readonly'), p).toStats();
    };
    SyncKeyValueFileSystem.prototype.createFileSync = function (p, flag, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = util_1.emptyBuffer(), newFile = this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data);
        // Open the file.
        return new SyncKeyValueFile(this, p, flag, newFile.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.openFileSync = function (p, flag) {
        var tx = this.store.beginTransaction('readonly'), node = this.findINode(tx, p), data = tx.get(node.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return new SyncKeyValueFile(this, p, flag, node.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.unlinkSync = function (p) {
        this.removeEntry(p, false);
    };
    SyncKeyValueFileSystem.prototype.rmdirSync = function (p) {
        // Check first if directory is empty.
        if (this.readdirSync(p).length > 0) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            this.removeEntry(p, true);
        }
    };
    SyncKeyValueFileSystem.prototype.mkdirSync = function (p, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data);
    };
    SyncKeyValueFileSystem.prototype.readdirSync = function (p) {
        var tx = this.store.beginTransaction('readonly');
        return Object.keys(this.getDirListing(tx, p, this.findINode(tx, p)));
    };
    SyncKeyValueFileSystem.prototype._syncSync = function (p, data, stats) {
        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite'), 
        // We use the _findInode helper because we actually need the INode id.
        fileInodeId = this._findINode(tx, path.dirname(p), path.basename(p)), fileInode = this.getINode(tx, p, fileInodeId), inodeChanged = fileInode.update(stats);
        try {
            // Sync data.
            tx.put(fileInode.id, data, true);
            // Sync metadata.
            if (inodeChanged && fileInodeId !== undefined) {
                tx.put(fileInodeId, fileInode.toBuffer(), true);
            }
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    SyncKeyValueFileSystem.prototype.makeRootDirectory = function () {
        var tx = this.store.beginTransaction('readwrite');
        if (tx.get(ROOT_NODE_ID) === undefined) {
            // Create new inode.
            var currTime = (new Date()).getTime();
            var mode = 511 | node_fs_stats_1.FileType.DIRECTORY;
            var dirInode = new inode_1["default"](GenerateRandomID(), this.devId, this.allocIno(), 4096, mode, currTime, currTime, currTime);
            // If the root doesn't exist, the first random ID shouldn't exist,
            // either.
            tx.put(dirInode.id, getEmptyDirNode(), false);
            tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false);
            tx.commit();
        }
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @return string The ID of the file's inode in the file system.
     */
    SyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename) {
        var _this = this;
        var readDirectory = function (inode) {
            // Get the root's directory listing.
            var dirList = _this.getDirListing(tx, parent, inode);
            // Get the file's ID.
            if (dirList[filename]) {
                return dirList[filename];
            }
            else {
                throw api_error_1.ApiError.ENOENT(path.resolve(parent, filename));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                return ROOT_NODE_ID;
            }
            else {
                var inode = this.getINode(tx, parent, ROOT_NODE_ID);
                if (!inode) {
                    return undefined;
                }
                // BASE CASE #2: Find the item in the root directory.
                return this.getDirListing(tx, parent, inode)[filename];
            }
        }
        else {
            return readDirectory(this.getINode(tx, parent + path.sep + filename, this._findINode(tx, path.dirname(parent), path.basename(parent))));
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @return The Inode of the path p.
     * @todo memoize/cache
     */
    SyncKeyValueFileSystem.prototype.findINode = function (tx, p) {
        return this.getINode(tx, p, this._findINode(tx, path.dirname(p), path.basename(p)));
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     */
    SyncKeyValueFileSystem.prototype.getINode = function (tx, p, id) {
        if (id === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        var inode = tx.get(id);
        if (inode === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return inode_1["default"].fromBuffer(inode);
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    SyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode) {
        if (!inode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        var data = tx.get(inode.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return JSON.parse(data.toString());
    };
    /**
     * Creates a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @return The GUID that the data was stored under.
     */
    SyncKeyValueFileSystem.prototype.addNewNode = function (tx, data) {
        var retries = 0;
        var currId;
        while (retries < 5) {
            try {
                currId = GenerateRandomID();
                tx.put(currId, data, false);
                return currId;
            }
            catch (e) {
                // Ignore and reroll.
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.');
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @return The Inode for the new file.
     */
    SyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data) {
        var parentDir = path.dirname(p), fname = path.basename(p), parentNode = this.findINode(tx, parentDir), dirListing = this.getDirListing(tx, parentDir, parentNode), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            throw api_error_1.ApiError.EEXIST(p);
        }
        // Check if file already exists.
        if (dirListing[fname]) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        var fileNode;
        try {
            // Commit data.
            var dataId = this.addNewNode(tx, data);
            fileNode = new inode_1["default"](dataId, this.devId, this.allocIno(), data.length, mode | type, currTime, currTime, currTime);
            // Commit file node.
            var fileNodeId = this.addNewNode(tx, fileNode.toBuffer());
            // Update and commit parent directory listing.
            dirListing[fname] = fileNodeId;
            tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
        return fileNode;
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    SyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir) {
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), parentNode = this.findINode(tx, parent), parentListing = this.getDirListing(tx, parent, parentNode), fileName = path.basename(p);
        if (!parentListing[fileName]) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        // Remove from directory listing of parent.
        var fileNodeId = parentListing[fileName];
        delete parentListing[fileName];
        // Get file inode.
        var fileNode = this.getINode(tx, p, fileNodeId);
        if (!isDir && fileNode.isDirectory()) {
            throw api_error_1.ApiError.EISDIR(p);
        }
        else if (isDir && !fileNode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        try {
            // Delete data.
            tx.del(fileNode.id);
            // Delete node.
            tx.del(fileNodeId);
            // Update directory listing.
            tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        // Success.
        tx.commit();
    };
    return SyncKeyValueFileSystem;
}(file_system_1.SynchronousFileSystem));
exports.SyncKeyValueFileSystem = SyncKeyValueFileSystem;
var AsyncKeyValueFile = (function (_super) {
    __extends(AsyncKeyValueFile, _super);
    function AsyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    AsyncKeyValueFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    AsyncKeyValueFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return AsyncKeyValueFile;
}(preload_file_1["default"]));
exports.AsyncKeyValueFile = AsyncKeyValueFile;
/**
 * An "Asynchronous key-value file system". Stores data to/retrieves data from
 * an underlying asynchronous key-value store.
 */
var AsyncKeyValueFileSystem = (function (_super) {
    __extends(AsyncKeyValueFileSystem, _super);
    function AsyncKeyValueFileSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextIno = 1;
        return _this;
    }
    AsyncKeyValueFileSystem.isAvailable = function () { return true; };
    /**
     * Initializes the file system. Typically called by subclasses' async
     * constructors.
     */
    AsyncKeyValueFileSystem.prototype.init = function (store, cb) {
        this.devId = file_system_1.allocDev();
        this.store = store;
        // INVARIANT: Ensure that the root exists.
        this.makeRootDirectory(cb);
    };
    AsyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    AsyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSynch = function () { return false; };
    /**
     * Delete all contents stored in the file system.
     */
    AsyncKeyValueFileSystem.prototype.empty = function (cb) {
        var _this = this;
        this.store.clear(function (e) {
            if (noError(e, cb)) {
                // INVARIANT: Root always exists.
                _this.makeRootDirectory(cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite');
        var oldParent = path.dirname(oldPath), oldName = path.basename(oldPath);
        var newParent = path.dirname(newPath), newName = path.basename(newPath);
        var inodes = {};
        var lists = {};
        var errorOccurred = false;
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent));
        }
        /**
         * Responsible for Phase 2 of the rename operation: Modifying and
         * committing the directory listings. Called once we have successfully
         * retrieved both the old and new parent's inodes and listings.
         */
        var theOleSwitcharoo = function () {
            // Sanity check: Ensure both paths are present, and no error has occurred.
            if (errorOccurred || !lists.hasOwnProperty(oldParent) || !lists.hasOwnProperty(newParent)) {
                return;
            }
            var oldParentList = lists[oldParent], oldParentINode = inodes[oldParent], newParentList = lists[newParent], newParentINode = inodes[newParent];
            // Delete file from old parent.
            if (!oldParentList[oldName]) {
                cb(api_error_1.ApiError.ENOENT(oldPath));
            }
            else {
                var fileId_1 = oldParentList[oldName];
                delete oldParentList[oldName];
                // Finishes off the renaming process by adding the file to the new
                // parent.
                var completeRename_1 = function () {
                    newParentList[newName] = fileId_1;
                    // Commit old parent's list.
                    tx.put(oldParentINode.id, Buffer.from(JSON.stringify(oldParentList)), true, function (e) {
                        if (noErrorTx(e, tx, cb)) {
                            if (oldParent === newParent) {
                                // DONE!
                                tx.commit(cb);
                            }
                            else {
                                // Commit new parent's list.
                                tx.put(newParentINode.id, Buffer.from(JSON.stringify(newParentList)), true, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.commit(cb);
                                    }
                                });
                            }
                        }
                    });
                };
                if (newParentList[newName]) {
                    // 'newPath' already exists. Check if it's a file or a directory, and
                    // act accordingly.
                    _this.getINode(tx, newPath, newParentList[newName], function (e, inode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (inode.isFile()) {
                                // Delete the file and continue.
                                tx.del(inode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.del(newParentList[newName], function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                completeRename_1();
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                // Can't overwrite a directory using rename.
                                tx.abort(function (e) {
                                    cb(api_error_1.ApiError.EPERM(newPath));
                                });
                            }
                        }
                    });
                }
                else {
                    completeRename_1();
                }
            }
        };
        /**
         * Grabs a path's inode and directory listing, and shoves it into the
         * inodes and lists hashes.
         */
        var processInodeAndListings = function (p) {
            _this.findINodeAndDirListing(tx, p, function (e, node, dirList) {
                if (e) {
                    if (!errorOccurred) {
                        errorOccurred = true;
                        tx.abort(function () {
                            cb(e);
                        });
                    }
                    // If error has occurred already, just stop here.
                }
                else {
                    inodes[p] = node;
                    lists[p] = dirList;
                    theOleSwitcharoo();
                }
            });
        };
        processInodeAndListings(oldParent);
        if (oldParent !== newParent) {
            processInodeAndListings(newParent);
        }
    };
    AsyncKeyValueFileSystem.prototype.stat = function (p, isLstat, cb) {
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                cb(null, inode.toStats());
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), data = util_1.emptyBuffer();
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data, function (e, newFile) {
            if (noError(e, cb)) {
                cb(null, new AsyncKeyValueFile(_this, p, flag, newFile.toStats(), data));
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.openFile = function (p, flag, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        // Step 1: Grab the file's inode.
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                // Step 2: Grab the file's data.
                tx.get(inode.id, function (e, data) {
                    if (noError(e, cb)) {
                        if (data === undefined) {
                            cb(api_error_1.ApiError.ENOENT(p));
                        }
                        else {
                            cb(null, new AsyncKeyValueFile(_this, p, flag, inode.toStats(), data));
                        }
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.unlink = function (p, cb) {
        this.removeEntry(p, false, cb);
    };
    AsyncKeyValueFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        // Check first if directory is empty.
        this.readdir(p, function (err, files) {
            if (err) {
                cb(err);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(p));
            }
            else {
                _this.removeEntry(p, true, cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.mkdir = function (p, mode, cb) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data, cb);
    };
    AsyncKeyValueFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, dirListing) {
                    if (noError(e, cb)) {
                        cb(null, Object.keys(dirListing));
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype._sync = function (p, data, stats, cb) {
        var _this = this;
        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite');
        // Step 1: Get the file node's ID.
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, fileInodeId) {
            if (noErrorTx(e, tx, cb)) {
                // Step 2: Get the file inode.
                _this.getINode(tx, p, fileInodeId, function (e, fileInode) {
                    if (noErrorTx(e, tx, cb)) {
                        var inodeChanged_1 = fileInode.update(stats);
                        // Step 3: Sync the data.
                        tx.put(fileInode.id, data, true, function (e) {
                            if (noErrorTx(e, tx, cb)) {
                                // Step 4: Sync the metadata (if it changed)!
                                if (inodeChanged_1) {
                                    tx.put(fileInodeId, fileInode.toBuffer(), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            tx.commit(cb);
                                        }
                                    });
                                }
                                else {
                                    // No need to sync metadata; return.
                                    tx.commit(cb);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    /**
     * Returns a new, unique integer inode id.
     * @return [number]
     */
    AsyncKeyValueFileSystem.prototype.allocIno = function () {
        return this.nextIno++;
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    AsyncKeyValueFileSystem.prototype.makeRootDirectory = function (cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite');
        tx.get(ROOT_NODE_ID, function (e, data) {
            if (e || data === undefined) {
                // Create new inode.
                var currTime = (new Date()).getTime();
                var dirInode_1 = new inode_1["default"](GenerateRandomID(), _this.devId, _this.allocIno(), 4096, 511 | node_fs_stats_1.FileType.DIRECTORY, currTime, currTime, currTime);
                // If the root doesn't exist, the first random ID shouldn't exist,
                // either.
                tx.put(dirInode_1.id, getEmptyDirNode(), false, function (e) {
                    if (noErrorTx(e, tx, cb)) {
                        tx.put(ROOT_NODE_ID, dirInode_1.toBuffer(), false, function (e) {
                            if (e) {
                                tx.abort(function () { cb(e); });
                            }
                            else {
                                tx.commit(cb);
                            }
                        });
                    }
                });
            }
            else {
                // We're good.
                tx.commit(cb);
            }
        });
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @param cb Passed an error or the ID of the file's inode in the file system.
     */
    AsyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename, cb) {
        var _this = this;
        var handleDirectoryListings = function (e, inode, dirList) {
            if (e) {
                cb(e);
            }
            else if (dirList[filename]) {
                cb(null, dirList[filename]);
            }
            else {
                cb(api_error_1.ApiError.ENOENT(path.resolve(parent, filename)));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                cb(null, ROOT_NODE_ID);
            }
            else {
                // BASE CASE #2: Find the item in the root node.
                this.getINode(tx, parent, ROOT_NODE_ID, function (e, inode) {
                    if (noError(e, cb)) {
                        _this.getDirListing(tx, parent, inode, function (e, dirList) {
                            // handle_directory_listings will handle e for us.
                            handleDirectoryListings(e, inode, dirList);
                        });
                    }
                });
            }
        }
        else {
            // Get the parent directory's INode, and find the file in its directory
            // listing.
            this.findINodeAndDirListing(tx, parent, handleDirectoryListings);
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @param cb Passed an error or the Inode of the path p.
     * @todo memoize/cache
     */
    AsyncKeyValueFileSystem.prototype.findINode = function (tx, p, cb) {
        var _this = this;
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, id) {
            if (noError(e, cb)) {
                _this.getINode(tx, p, id, cb);
            }
        });
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     * @param cb Passed an error or the inode under the given id.
     */
    AsyncKeyValueFileSystem.prototype.getINode = function (tx, p, id, cb) {
        tx.get(id, function (e, data) {
            if (noError(e, cb)) {
                if (data === undefined) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                else {
                    cb(null, inode_1["default"].fromBuffer(data));
                }
            }
        });
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    AsyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode, cb) {
        if (!inode.isDirectory()) {
            cb(api_error_1.ApiError.ENOTDIR(p));
        }
        else {
            tx.get(inode.id, function (e, data) {
                if (noError(e, cb)) {
                    try {
                        cb(null, JSON.parse(data.toString()));
                    }
                    catch (e) {
                        // Occurs when data is undefined, or corresponds to something other
                        // than a directory listing. The latter should never occur unless
                        // the file system is corrupted.
                        cb(api_error_1.ApiError.ENOENT(p));
                    }
                }
            });
        }
    };
    /**
     * Given a path to a directory, retrieves the corresponding INode and
     * directory listing.
     */
    AsyncKeyValueFileSystem.prototype.findINodeAndDirListing = function (tx, p, cb) {
        var _this = this;
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, listing) {
                    if (noError(e, cb)) {
                        cb(null, inode, listing);
                    }
                });
            }
        });
    };
    /**
     * Adds a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @param cb Passed an error or the GUID that the data was stored under.
     */
    AsyncKeyValueFileSystem.prototype.addNewNode = function (tx, data, cb) {
        var retries = 0, currId;
        var reroll = function () {
            if (++retries === 5) {
                // Max retries hit. Return with an error.
                cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.'));
            }
            else {
                // Try again.
                currId = GenerateRandomID();
                tx.put(currId, data, false, function (e, committed) {
                    if (e || !committed) {
                        reroll();
                    }
                    else {
                        // Successfully stored under 'currId'.
                        cb(null, currId);
                    }
                });
            }
        };
        reroll();
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @param cb Passed an error or the Inode for the new file.
     */
    AsyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data, cb) {
        var _this = this;
        var parentDir = path.dirname(p), fname = path.basename(p), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            return cb(api_error_1.ApiError.EEXIST(p));
        }
        // Let's build a pyramid of code!
        // Step 1: Get the parent directory's inode and directory listing
        this.findINodeAndDirListing(tx, parentDir, function (e, parentNode, dirListing) {
            if (noErrorTx(e, tx, cb)) {
                if (dirListing[fname]) {
                    // File already exists.
                    tx.abort(function () {
                        cb(api_error_1.ApiError.EEXIST(p));
                    });
                }
                else {
                    // Step 2: Commit data to store.
                    _this.addNewNode(tx, data, function (e, dataId) {
                        if (noErrorTx(e, tx, cb)) {
                            // Step 3: Commit the file's inode to the store.
                            var fileInode_1 = new inode_1["default"](dataId, _this.devId, _this.allocIno(), data.length, mode | type, currTime, currTime, currTime);
                            _this.addNewNode(tx, fileInode_1.toBuffer(), function (e, fileInodeId) {
                                if (noErrorTx(e, tx, cb)) {
                                    // Step 4: Update parent directory's listing.
                                    dirListing[fname] = fileInodeId;
                                    tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            // Step 5: Commit and return the new inode.
                                            tx.commit(function (e) {
                                                if (noErrorTx(e, tx, cb)) {
                                                    cb(null, fileInode_1);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    AsyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), fileName = path.basename(p);
        // Step 1: Get parent directory's node and directory listing.
        this.findINodeAndDirListing(tx, parent, function (e, parentNode, parentListing) {
            if (noErrorTx(e, tx, cb)) {
                if (!parentListing[fileName]) {
                    tx.abort(function () {
                        cb(api_error_1.ApiError.ENOENT(p));
                    });
                }
                else {
                    // Remove from directory listing of parent.
                    var fileNodeId_1 = parentListing[fileName];
                    delete parentListing[fileName];
                    // Step 2: Get file inode.
                    _this.getINode(tx, p, fileNodeId_1, function (e, fileNode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (!isDir && fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.EISDIR(p));
                                });
                            }
                            else if (isDir && !fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.ENOTDIR(p));
                                });
                            }
                            else {
                                // Step 3: Delete data.
                                tx.del(fileNode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        // Step 4: Delete node.
                                        tx.del(fileNodeId_1, function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                // Step 5: Update directory listing.
                                                tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true, function (e) {
                                                    if (noErrorTx(e, tx, cb)) {
                                                        tx.commit(cb);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };
    return AsyncKeyValueFileSystem;
}(file_system_1.BaseFileSystem));
exports.AsyncKeyValueFileSystem = AsyncKeyValueFileSystem;
//# sourceMappingURL=key_value_filesystem.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {exports.__esModule = true;
var global_1 = __webpack_require__(9);
/**
 * @hidden
 */
var bfsSetImmediate;
if (typeof (setImmediate) !== "undefined") {
    bfsSetImmediate = setImmediate;
}
else {
    var gScope_1 = global_1["default"];
    var timeouts_1 = [];
    var messageName_1 = "zero-timeout-message";
    var canUsePostMessage = function () {
        if (typeof gScope_1.importScripts !== 'undefined' || !gScope_1.postMessage) {
            return false;
        }
        var postMessageIsAsync = true;
        var oldOnMessage = gScope_1.onmessage;
        gScope_1.onmessage = function () {
            postMessageIsAsync = false;
        };
        gScope_1.postMessage('', '*');
        gScope_1.onmessage = oldOnMessage;
        return postMessageIsAsync;
    };
    if (canUsePostMessage()) {
        bfsSetImmediate = function (fn) {
            timeouts_1.push(fn);
            gScope_1.postMessage(messageName_1, "*");
        };
        var handleMessage = function (event) {
            if (event.source === self && event.data === messageName_1) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
                if (timeouts_1.length > 0) {
                    var fn = timeouts_1.shift();
                    return fn();
                }
            }
        };
        if (gScope_1.addEventListener) {
            gScope_1.addEventListener('message', handleMessage, true);
        }
        else {
            gScope_1.attachEvent('onmessage', handleMessage);
        }
    }
    else if (gScope_1.MessageChannel) {
        // WebWorker MessageChannel
        var channel_1 = new gScope_1.MessageChannel();
        channel_1.port1.onmessage = function (event) {
            if (timeouts_1.length > 0) {
                return timeouts_1.shift()();
            }
        };
        bfsSetImmediate = function (fn) {
            timeouts_1.push(fn);
            channel_1.port2.postMessage('');
        };
    }
    else {
        bfsSetImmediate = function (fn) {
            return setTimeout(fn, 0);
        };
    }
}
exports["default"] = bfsSetImmediate;
//# sourceMappingURL=setImmediate.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, process, global, module) {(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.async = global.async || {})));
}(this, (function (exports) { 'use strict';

function slice(arrayLike, start) {
    start = start|0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for(var idx = 0; idx < newLen; idx++)  {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}

var initialParams = function (fn) {
    return function (/*...args, callback*/) {
        var args = slice(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

var setImmediate$1 = wrap(_defer);

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        setImmediate$1(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

function applyEach$1(eachfn) {
    return function(fns/*, ...args*/) {
        var args = slice(arguments, 1);
        var go = initialParams(function(args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                wrapAsync(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  value = Object(value);
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
var breakLoop = {};

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {value: coll[i], key: i} : null;
    }
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done)
            return null;
        i++;
        return {value: item.value, key: i};
    }
}

function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? {value: obj[key], key: key} : null;
    };
}

function iterator(coll) {
    if (isArrayLike(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
    return function() {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            }
            else if (value === breakLoop || (done && running <= 0)) {
                done = true;
                return callback(null);
            }
            else {
                replenish();
            }
        }

        function replenish () {
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
        }

        replenish();
    };
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if ((++completed === length) || value === breakLoop) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = doLimit(eachOfLimit, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
var eachOf = function(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync(iteratee), callback);
};

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOf, obj, wrapAsync(iteratee), callback);
    };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
var map = doParallel(_asyncMap);

/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */
var applyEach = applyEach$1(map);

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
    };
}

/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapLimit = doParallelLimit(_asyncMap);

/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapSeries = doLimit(mapLimit, 1);

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
var applyEachSeries = applyEach$1(mapSeries);

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
var apply = function(fn/*, ...args*/) {
    var args = slice(arguments, 1);
    return function(/*callArgs*/) {
        var callArgs = slice(arguments);
        return fn.apply(null, args.concat(callArgs));
    };
};

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */
var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;
    if (!numTasks) {
        return callback(null);
    }
    if (!concurrency) {
        concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;

    var listeners = Object.create(null);

    var readyTasks = [];

    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};

    baseForOwn(tasks, function (task, key) {
        if (!isArray(task)) {
            // no dependencies
            enqueueTask(key, [task]);
            readyToCheck.push(key);
            return;
        }

        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;

        arrayEach(dependencies, function (dependencyName) {
            if (!tasks[dependencyName]) {
                throw new Error('async.auto task `' + key +
                    '` has a non-existent dependency `' +
                    dependencyName + '` in ' +
                    dependencies.join(', '));
            }
            addListener(dependencyName, function () {
                remainingDependencies--;
                if (remainingDependencies === 0) {
                    enqueueTask(key, task);
                }
            });
        });
    });

    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
        readyTasks.push(function () {
            runTask(key, task);
        });
    }

    function processQueue() {
        if (readyTasks.length === 0 && runningTasks === 0) {
            return callback(null, results);
        }
        while(readyTasks.length && runningTasks < concurrency) {
            var run = readyTasks.shift();
            run();
        }

    }

    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) {
            taskListeners = listeners[taskName] = [];
        }

        taskListeners.push(fn);
    }

    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        arrayEach(taskListeners, function (fn) {
            fn();
        });
        processQueue();
    }


    function runTask(key, task) {
        if (hasError) return;

        var taskCallback = onlyOnce(function(err, result) {
            runningTasks--;
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            if (err) {
                var safeResults = {};
                baseForOwn(results, function(val, rkey) {
                    safeResults[rkey] = val;
                });
                safeResults[key] = result;
                hasError = true;
                listeners = Object.create(null);

                callback(err, safeResults);
            } else {
                results[key] = result;
                taskComplete(key);
            }
        });

        runningTasks++;
        var taskFn = wrapAsync(task[task.length - 1]);
        if (task.length > 1) {
            taskFn(results, taskCallback);
        } else {
            taskFn(taskCallback);
        }
    }

    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while (readyToCheck.length) {
            currentTask = readyToCheck.pop();
            counter++;
            arrayEach(getDependents(currentTask), function (dependent) {
                if (--uncheckedDependencies[dependent] === 0) {
                    readyToCheck.push(dependent);
                }
            });
        }

        if (counter !== numTasks) {
            throw new Error(
                'async.auto cannot execute tasks due to a recursive dependency'
            );
        }
    }

    function getDependents(taskName) {
        var result = [];
        baseForOwn(tasks, function (task, key) {
            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                result.push(key);
            }
        });
        return result;
    }
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange = '\\u20d0-\\u20f0';
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg){
        return trim(arg.replace(FN_ARG, ''));
    });
    return func;
}

/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */
function autoInject(tasks, callback) {
    var newTasks = {};

    baseForOwn(tasks, function (taskFn, key) {
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps =
            (!fnIsAsync && taskFn.length === 1) ||
            (fnIsAsync && taskFn.length === 0);

        if (isArray(taskFn)) {
            params = taskFn.slice(0, -1);
            taskFn = taskFn[taskFn.length - 1];

            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) {
            // no dependencies, use the function as-is
            newTasks[key] = taskFn;
        } else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
                throw new Error("autoInject task functions require explicit parameters.");
            }

            // remove callback param
            if (!fnIsAsync) params.pop();

            newTasks[key] = params.concat(newTask);
        }

        function newTask(results, taskCb) {
            var newArgs = arrayMap(params, function (name) {
                return results[name];
            });
            newArgs.push(taskCb);
            wrapAsync(taskFn).apply(null, newArgs);
        }
    });

    auto(newTasks, callback);
}

// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
function DLL() {
    this.head = this.tail = null;
    this.length = 0;
}

function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}

DLL.prototype.removeLink = function(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    node.prev = node.next = null;
    this.length -= 1;
    return node;
};

DLL.prototype.empty = function () {
    while(this.head) this.shift();
    return this;
};

DLL.prototype.insertAfter = function(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
};

DLL.prototype.insertBefore = function(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;
    else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
};

DLL.prototype.unshift = function(node) {
    if (this.head) this.insertBefore(this.head, node);
    else setInitial(this, node);
};

DLL.prototype.push = function(node) {
    if (this.tail) this.insertAfter(this.tail, node);
    else setInitial(this, node);
};

DLL.prototype.shift = function() {
    return this.head && this.removeLink(this.head);
};

DLL.prototype.pop = function() {
    return this.tail && this.removeLink(this.tail);
};

DLL.prototype.toArray = function () {
    var arr = Array(this.length);
    var curr = this.head;
    for(var idx = 0; idx < this.length; idx++) {
        arr[idx] = curr.data;
        curr = curr.next;
    }
    return arr;
};

DLL.prototype.remove = function (testFn) {
    var curr = this.head;
    while(!!curr) {
        var next = curr.next;
        if (testFn(curr)) {
            this.removeLink(curr);
        }
        curr = next;
    }
    return this;
};

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    }
    else if(concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];

    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || noop
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    }

    function _next(tasks) {
        return function(err){
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];
                var index = baseIndexOf(workersList, task, 0);
                if (index >= 0) {
                    workersList.splice(index);
                }

                task.callback.apply(task, arguments);

                if (err != null) {
                    q.error(err, task.data);
                }
            }

            if (numRunning <= (q.concurrency - q.buffer) ) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
        };
    }

    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated:noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        error: noop,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = noop;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
        remove: function (testFn) {
            q._tasks.remove(testFn);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    data.push(node.data);
                }

                numRunning += 1;
                workersList.push(tasks[0]);

                if (q._tasks.length === 0) {
                    q.empty();
                }

                if (numRunning === q.concurrency) {
                    q.saturated();
                }

                var cb = onlyOnce(_next(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
            return numRunning;
        },
        workersList: function () {
            return workersList;
        },
        idle: function() {
            return q._tasks.length + numRunning === 0;
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) { return; }
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    return q;
}

/**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */

/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */
function cargo(worker, payload) {
    return queue(worker, 1, payload);
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */
var eachOfSeries = doLimit(eachOfLimit, 1);

/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */
function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    eachOfSeries(coll, function(x, i, callback) {
        _iteratee(memo, x, function(err, v) {
            memo = v;
            callback(err);
        });
    }, function(err) {
        callback(err, memo);
    });
}

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
function seq(/*...functions*/) {
    var _functions = arrayMap(arguments, wrapAsync);
    return function(/*...args*/) {
        var args = slice(arguments);
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = noop;
        }

        reduce(_functions, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat(function(err/*, ...nextargs*/) {
                var nextargs = slice(arguments, 1);
                cb(err, nextargs);
            }));
        },
        function(err, results) {
            cb.apply(that, [err].concat(results));
        });
    };
}

/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
var compose = function(/*...args*/) {
    return seq.apply(null, slice(arguments).reverse());
};

function concat$1(eachfn, arr, fn, callback) {
    var result = [];
    eachfn(arr, function (x, index, cb) {
        fn(x, function (err, y) {
            result = result.concat(y || []);
            cb(err);
        });
    }, function (err) {
        callback(err, result);
    });
}

/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */
var concat = doParallel(concat$1);

function doSeries(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOfSeries, obj, wrapAsync(iteratee), callback);
    };
}

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatSeries = doSeries(concat$1);

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
var constant = function(/*...values*/) {
    var values = slice(arguments);
    var args = [null].concat(values);
    return function (/*...ignoredArgs, callback*/) {
        var callback = arguments[arguments.length - 1];
        return callback.apply(this, args);
    };
};

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

function _createTester(check, getResult) {
    return function(eachfn, arr, iteratee, cb) {
        cb = cb || noop;
        var testPassed = false;
        var testResult;
        eachfn(arr, function(value, _, callback) {
            iteratee(value, function(err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, breakLoop);
                } else {
                    callback();
                }
            });
        }, function(err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}

function _findGetResult(v, x) {
    return x;
}

/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */
var detect = doParallel(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectSeries = doLimit(detectLimit, 1);

function consoleFunc(name) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        args.push(function (err/*, ...args*/) {
            var args = slice(arguments, 1);
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    arrayEach(args, function (x) {
                        console[name](x);
                    });
                }
            }
        });
        wrapAsync(fn).apply(null, args);
    };
}

/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */
var dir = consoleFunc('dir');

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        args.push(check);
        _test.apply(this, args);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);

}

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function() {
        return !test.apply(this, arguments);
    }, callback);
}

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    _test(check);
}

function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */
function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
var eachSeries = doLimit(eachLimit$1, 1);

/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */
function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
        var sync = true;
        args.push(function () {
            var innerArgs = arguments;
            if (sync) {
                setImmediate$1(function () {
                    callback.apply(null, innerArgs);
                });
            } else {
                callback.apply(null, innerArgs);
            }
        });
        fn.apply(this, args);
        sync = false;
    });
}

function notId(v) {
    return !v;
}

/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */
var every = doParallel(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everyLimit = doParallelLimit(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everySeries = doLimit(everyLimit, 1);

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({index: index, value: x});
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, arrayMap(results.sort(function (a, b) {
                return a.index - b.index;
            }), baseProperty('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
}

/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */
var filter = doParallel(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var filterLimit = doParallelLimit(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */
var filterSeries = doLimit(filterLimit, 1);

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync(ensureAsync(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupByLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err, key) {
            if (err) return callback(err);
            return callback(null, {key: key, val: val});
        });
    }, function(err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */
var groupBy = doLimit(groupByLimit, Infinity);

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupBySeries = doLimit(groupByLimit, 1);

/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */
var log = consoleFunc('log');

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    eachOfLimit(obj, limit, function(val, key, next) {
        _iteratee(val, key, function (err, result) {
            if (err) return next(err);
            newObj[key] = result;
            next();
        });
    }, function (err) {
        callback(err, newObj);
    });
}

/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

var mapValues = doLimit(mapValuesLimit, Infinity);

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
var mapValuesSeries = doLimit(mapValuesLimit, 1);

function has(obj, key) {
    return key in obj;
}

/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */
function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var _fn = wrapAsync(fn);
    var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
            setImmediate$1(function() {
                callback.apply(null, memo[key]);
            });
        } else if (has(queues, key)) {
            queues[key].push(callback);
        } else {
            queues[key] = [callback];
            _fn.apply(null, args.concat(function(/*args*/) {
                var args = slice(arguments);
                memo[key] = args;
                var q = queues[key];
                delete queues[key];
                for (var i = 0, l = q.length; i < l; i++) {
                    q[i].apply(null, args);
                }
            }));
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}

/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `setImmediate`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @alias setImmediate
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */
var _defer$1;

if (hasNextTick) {
    _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
    _defer$1 = setImmediate;
} else {
    _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);

function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        wrapAsync(task)(function (err, result) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
}

/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */
function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
}

/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */
var queue$1 = function (worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue(function (items, cb) {
        _worker(items[0], cb);
    }, concurrency, 1);
};

/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */
var priorityQueue = function(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);

    // Override push to accept second parameter representing priority
    q.push = function(data, priority, callback) {
        if (callback == null) callback = noop;
        if (typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        priority = priority || 0;
        var nextNode = q._tasks.head;
        while (nextNode && priority >= nextNode.priority) {
            nextNode = nextNode.next;
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                priority: priority,
                callback: callback
            };

            if (nextNode) {
                q._tasks.insertBefore(nextNode, item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    };

    // Remove unshift function
    delete q.unshift;

    return q;
};

/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */
function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
        wrapAsync(tasks[i])(callback);
    }
}

/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight (array, memo, iteratee, callback) {
    var reversed = slice(array).reverse();
    reduce(reversed, memo, iteratee, callback);
}

/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push(function callback(error, cbArg) {
            if (error) {
                reflectCallback(null, { error: error });
            } else {
                var value;
                if (arguments.length <= 2) {
                    value = cbArg;
                } else {
                    value = slice(arguments, 1);
                }
                reflectCallback(null, { value: value });
            }
        });

        return _fn.apply(this, args);
    });
}

function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function(value, cb) {
        iteratee(value, function(err, v) {
            cb(err, !v);
        });
    }, callback);
}

/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */
var reject = doParallel(reject$1);

/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */
function reflectAll(tasks) {
    var results;
    if (isArray(tasks)) {
        results = arrayMap(tasks, reflect);
    } else {
        results = {};
        baseForOwn(tasks, function(task, key) {
            results[key] = reflect.call(this, task);
        });
    }
    return results;
}

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectLimit = doParallelLimit(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectSeries = doLimit(rejectLimit, 1);

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // It can also be embedded within other control flow functions to retry
 * // individual methods that are not as reliable, like this:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ?
                t.interval :
                constant$1(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || noop;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || noop;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function(err) {
            if (err && attempt++ < options.times &&
                (typeof options.errorFilter != 'function' ||
                    options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}

/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */
var retryable = function (opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    var _task = wrapAsync(task);
    return initialParams(function (args, callback) {
        function taskFn(cb) {
            _task.apply(null, args.concat(cb));
        }

        if (opts) retry(opts, taskFn, callback);
        else retry(taskFn, callback);

    });
};

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */
function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
}

/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */
var some = doParallel(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someLimit = doParallelLimit(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someSeries = doLimit(someLimit, 1);

/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */
function sortBy (coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    map(coll, function (x, callback) {
        _iteratee(x, function (err, criteria) {
            if (err) return callback(err);
            callback(null, {value: x, criteria: criteria});
        });
    }, function (err, results) {
        if (err) return callback(err);
        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */
function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);

    return initialParams(function (args, callback) {
        var timedOut = false;
        var timer;

        function timeoutCallback() {
            var name = asyncFn.name || 'anonymous';
            var error  = new Error('Callback function "' + name + '" timed out.');
            error.code = 'ETIMEDOUT';
            if (info) {
                error.info = info;
            }
            timedOut = true;
            callback(error);
        }

        args.push(function () {
            if (!timedOut) {
                callback.apply(null, arguments);
                clearTimeout(timer);
            }
        });

        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn.apply(null, args);
    });
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
}

/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */
var times = doLimit(timeLimit, Infinity);

/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */
var timesSeries = doLimit(timeLimit, 1);

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform (coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = isArray(coll) ? [] : {};
    }
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);

    eachOf(coll, function(v, k, cb) {
        _iteratee(accumulator, v, k, cb);
    }, function(err) {
        callback(err, accumulator);
    });
}

/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @example
 * async.try([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */
function tryEach(tasks, callback) {
    var error = null;
    var result;
    callback = callback || noop;
    eachSeries(tasks, function(task, callback) {
        wrapAsync(task)(function (err, res/*, ...args*/) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            } else {
                result = res;
            }
            error = err;
            callback(!err);
        });
    }, function () {
        callback(error, result);
    });
}

/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    if (!test()) return callback(null);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        var args = slice(arguments, 1);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function until(test, iteratee, callback) {
    whilst(function() {
        return !test.apply(this, arguments);
    }, iteratee, callback);
}

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */
var waterfall = function(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = wrapAsync(tasks[taskIndex++]);
        args.push(onlyOnce(next));
        task.apply(null, args);
    }

    function next(err/*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask(slice(arguments, 1));
    }

    nextTask([]);
};

/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */


/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

var index = {
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    apply: apply,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    groupBy: groupBy,
    groupByLimit: groupByLimit,
    groupBySeries: groupBySeries,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    tryEach: tryEach,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,

    // aliases
    all: every,
    any: some,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
};

exports['default'] = index;
exports.applyEach = applyEach;
exports.applyEachSeries = applyEachSeries;
exports.apply = apply;
exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.compose = compose;
exports.concat = concat;
exports.concatSeries = concatSeries;
exports.constant = constant;
exports.detect = detect;
exports.detectLimit = detectLimit;
exports.detectSeries = detectSeries;
exports.dir = dir;
exports.doDuring = doDuring;
exports.doUntil = doUntil;
exports.doWhilst = doWhilst;
exports.during = during;
exports.each = eachLimit;
exports.eachLimit = eachLimit$1;
exports.eachOf = eachOf;
exports.eachOfLimit = eachOfLimit;
exports.eachOfSeries = eachOfSeries;
exports.eachSeries = eachSeries;
exports.ensureAsync = ensureAsync;
exports.every = every;
exports.everyLimit = everyLimit;
exports.everySeries = everySeries;
exports.filter = filter;
exports.filterLimit = filterLimit;
exports.filterSeries = filterSeries;
exports.forever = forever;
exports.groupBy = groupBy;
exports.groupByLimit = groupByLimit;
exports.groupBySeries = groupBySeries;
exports.log = log;
exports.map = map;
exports.mapLimit = mapLimit;
exports.mapSeries = mapSeries;
exports.mapValues = mapValues;
exports.mapValuesLimit = mapValuesLimit;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.nextTick = nextTick;
exports.parallel = parallelLimit;
exports.parallelLimit = parallelLimit$1;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.race = race;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.reject = reject;
exports.rejectLimit = rejectLimit;
exports.rejectSeries = rejectSeries;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq;
exports.series = series;
exports.setImmediate = setImmediate$1;
exports.some = some;
exports.someLimit = someLimit;
exports.someSeries = someSeries;
exports.sortBy = sortBy;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timeLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.tryEach = tryEach;
exports.unmemoize = unmemoize;
exports.until = until;
exports.waterfall = waterfall;
exports.whilst = whilst;
exports.all = every;
exports.allLimit = everyLimit;
exports.allSeries = everySeries;
exports.any = some;
exports.anyLimit = someLimit;
exports.anySeries = someSeries;
exports.find = detect;
exports.findLimit = detectLimit;
exports.findSeries = detectSeries;
exports.forEach = eachLimit;
exports.forEachSeries = eachSeries;
exports.forEachLimit = eachLimit$1;
exports.forEachOf = eachOf;
exports.forEachOfSeries = eachOfSeries;
exports.forEachOfLimit = eachOfLimit;
exports.inject = reduce;
exports.foldl = reduce;
exports.foldr = reduceRight;
exports.select = filter;
exports.selectLimit = filterLimit;
exports.selectSeries = filterSeries;
exports.wrapSync = asyncify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17).setImmediate, __webpack_require__(10), __webpack_require__(11), __webpack_require__(33)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(32);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var key_value_filesystem_1 = __webpack_require__(14);
/**
 * A simple in-memory key-value store backed by a JavaScript object.
 */
var InMemoryStore = (function () {
    function InMemoryStore() {
        this.store = {};
    }
    InMemoryStore.prototype.name = function () { return 'In-memory'; };
    InMemoryStore.prototype.clear = function () { this.store = {}; };
    InMemoryStore.prototype.beginTransaction = function (type) {
        return new key_value_filesystem_1.SimpleSyncRWTransaction(this);
    };
    InMemoryStore.prototype.get = function (key) {
        return this.store[key];
    };
    InMemoryStore.prototype.put = function (key, data, overwrite) {
        if (!overwrite && this.store.hasOwnProperty(key)) {
            return false;
        }
        this.store[key] = data;
        return true;
    };
    InMemoryStore.prototype.del = function (key) {
        delete this.store[key];
    };
    return InMemoryStore;
}());
exports.InMemoryStore = InMemoryStore;
/**
 * A simple in-memory file system backed by an InMemoryStore.
 * Files are not persisted across page loads.
 */
var InMemoryFileSystem = (function (_super) {
    __extends(InMemoryFileSystem, _super);
    function InMemoryFileSystem() {
        return _super.call(this, { store: new InMemoryStore() }) || this;
    }
    return InMemoryFileSystem;
}(key_value_filesystem_1.SyncKeyValueFileSystem));
exports["default"] = InMemoryFileSystem;
//# sourceMappingURL=InMemory.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var node_fs_stats_1 = __webpack_require__(5);
var path = __webpack_require__(3);
/**
 * A simple class for storing a filesystem index. Assumes that all paths passed
 * to it are *absolute* paths.
 *
 * Can be used as a partial or a full index, although care must be taken if used
 * for the former purpose, especially when directories are concerned.
 */
var FileIndex = (function () {
    /**
     * Constructs a new FileIndex.
     */
    function FileIndex() {
        // _index is a single-level key,value store that maps *directory* paths to
        // DirInodes. File information is only contained in DirInodes themselves.
        this._index = {};
        // Create the root directory.
        this.addPath('/', new DirInode());
    }
    /**
     * Static method for constructing indices from a JSON listing.
     * @param listing Directory listing generated by tools/XHRIndexer.coffee
     * @return A new FileIndex object.
     */
    FileIndex.fromListing = function (listing) {
        var idx = new FileIndex();
        // Add a root DirNode.
        var rootInode = new DirInode();
        idx._index['/'] = rootInode;
        var queue = [['', listing, rootInode]];
        while (queue.length > 0) {
            var inode = void 0;
            var next = queue.pop();
            var pwd = next[0];
            var tree = next[1];
            var parent_1 = next[2];
            for (var node in tree) {
                if (tree.hasOwnProperty(node)) {
                    var children = tree[node];
                    var name_1 = pwd + "/" + node;
                    if (children) {
                        idx._index[name_1] = inode = new DirInode();
                        queue.push([name_1, children, inode]);
                    }
                    else {
                        // This inode doesn't have correct size information, noted with -1.
                        inode = new FileInode(new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, -1, 0x16D));
                    }
                    if (parent_1) {
                        parent_1._ls[node] = inode;
                    }
                }
            }
        }
        return idx;
    };
    /**
     * Runs the given function over all files in the index.
     */
    FileIndex.prototype.fileIterator = function (cb) {
        for (var path_1 in this._index) {
            if (this._index.hasOwnProperty(path_1)) {
                var dir = this._index[path_1];
                var files = dir.getListing();
                for (var i = 0; i < files.length; i++) {
                    var item = dir.getItem(files[i]);
                    if (isFileInode(item)) {
                        cb(item.getData());
                    }
                }
            }
        }
    };
    /**
     * Adds the given absolute path to the index if it is not already in the index.
     * Creates any needed parent directories.
     * @param path The path to add to the index.
     * @param inode The inode for the
     *   path to add.
     * @return 'True' if it was added or already exists, 'false' if there
     *   was an issue adding it (e.g. item in path is a file, item exists but is
     *   different).
     * @todo If adding fails and implicitly creates directories, we do not clean up
     *   the new empty directories.
     */
    FileIndex.prototype.addPath = function (path, inode) {
        if (!inode) {
            throw new Error('Inode must be specified');
        }
        if (path[0] !== '/') {
            throw new Error('Path must be absolute, got: ' + path);
        }
        // Check if it already exists.
        if (this._index.hasOwnProperty(path)) {
            return this._index[path] === inode;
        }
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        // Try to add to its parent directory first.
        var parent = this._index[dirpath];
        if (parent === undefined && path !== '/') {
            // Create parent.
            parent = new DirInode();
            if (!this.addPath(dirpath, parent)) {
                return false;
            }
        }
        // Add myself to my parent.
        if (path !== '/') {
            if (!parent.addItem(itemname, inode)) {
                return false;
            }
        }
        // If I'm a directory, add myself to the index.
        if (isDirInode(inode)) {
            this._index[path] = inode;
        }
        return true;
    };
    /**
     * Adds the given absolute path to the index if it is not already in the index.
     * The path is added without special treatment (no joining of adjacent separators, etc).
     * Creates any needed parent directories.
     * @param path The path to add to the index.
     * @param inode The inode for the
     *   path to add.
     * @return 'True' if it was added or already exists, 'false' if there
     *   was an issue adding it (e.g. item in path is a file, item exists but is
     *   different).
     * @todo If adding fails and implicitly creates directories, we do not clean up
     *   the new empty directories.
     */
    FileIndex.prototype.addPathFast = function (path, inode) {
        var itemNameMark = path.lastIndexOf('/');
        var parentPath = itemNameMark === 0 ? "/" : path.substring(0, itemNameMark);
        var itemName = path.substring(itemNameMark + 1);
        // Try to add to its parent directory first.
        var parent = this._index[parentPath];
        if (parent === undefined) {
            // Create parent.
            parent = new DirInode();
            this.addPathFast(parentPath, parent);
        }
        if (!parent.addItem(itemName, inode)) {
            return false;
        }
        // If adding a directory, add to the index as well.
        if (inode.isDir()) {
            this._index[path] = inode;
        }
        return true;
    };
    /**
     * Removes the given path. Can be a file or a directory.
     * @return The removed item,
     *   or null if it did not exist.
     */
    FileIndex.prototype.removePath = function (path) {
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        // Try to remove it from its parent directory first.
        var parent = this._index[dirpath];
        if (parent === undefined) {
            return null;
        }
        // Remove myself from my parent.
        var inode = parent.remItem(itemname);
        if (inode === null) {
            return null;
        }
        // If I'm a directory, remove myself from the index, and remove my children.
        if (isDirInode(inode)) {
            var children = inode.getListing();
            for (var i = 0; i < children.length; i++) {
                this.removePath(path + '/' + children[i]);
            }
            // Remove the directory from the index, unless it's the root.
            if (path !== '/') {
                delete this._index[path];
            }
        }
        return inode;
    };
    /**
     * Retrieves the directory listing of the given path.
     * @return An array of files in the given path, or 'null' if it does not exist.
     */
    FileIndex.prototype.ls = function (path) {
        var item = this._index[path];
        if (item === undefined) {
            return null;
        }
        return item.getListing();
    };
    /**
     * Returns the inode of the given item.
     * @return Returns null if the item does not exist.
     */
    FileIndex.prototype.getInode = function (path) {
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        // Retrieve from its parent directory.
        var parent = this._index[dirpath];
        if (parent === undefined) {
            return null;
        }
        // Root case
        if (dirpath === path) {
            return parent;
        }
        return parent.getItem(itemname);
    };
    /**
     * Split into a (directory path, item name) pair
     */
    FileIndex.prototype._split_path = function (p) {
        var dirpath = path.dirname(p);
        var itemname = p.substr(dirpath.length + (dirpath === "/" ? 0 : 1));
        return [dirpath, itemname];
    };
    return FileIndex;
}());
exports.FileIndex = FileIndex;
/**
 * Inode for a file. Stores an arbitrary (filesystem-specific) data payload.
 */
var FileInode = (function () {
    function FileInode(data) {
        this.data = data;
    }
    FileInode.prototype.isFile = function () { return true; };
    FileInode.prototype.isDir = function () { return false; };
    FileInode.prototype.getData = function () { return this.data; };
    FileInode.prototype.setData = function (data) { this.data = data; };
    return FileInode;
}());
exports.FileInode = FileInode;
/**
 * Inode for a directory. Currently only contains the directory listing.
 */
var DirInode = (function () {
    /**
     * Constructs an inode for a directory.
     */
    function DirInode(data) {
        if (data === void 0) { data = null; }
        this.data = data;
        this._ls = {};
    }
    DirInode.prototype.isFile = function () {
        return false;
    };
    DirInode.prototype.isDir = function () {
        return true;
    };
    DirInode.prototype.getData = function () { return this.data; };
    /**
     * Return a Stats object for this inode.
     * @todo Should probably remove this at some point. This isn't the
     *       responsibility of the FileIndex.
     */
    DirInode.prototype.getStats = function () {
        return new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, 4096, 0x16D);
    };
    /**
     * Returns the directory listing for this directory. Paths in the directory are
     * relative to the directory's path.
     * @return The directory listing for this directory.
     */
    DirInode.prototype.getListing = function () {
        return Object.keys(this._ls);
    };
    /**
     * Returns the inode for the indicated item, or null if it does not exist.
     * @param p Name of item in this directory.
     */
    DirInode.prototype.getItem = function (p) {
        var item = this._ls[p];
        return item ? item : null;
    };
    /**
     * Add the given item to the directory listing. Note that the given inode is
     * not copied, and will be mutated by the DirInode if it is a DirInode.
     * @param p Item name to add to the directory listing.
     * @param inode The inode for the
     *   item to add to the directory inode.
     * @return True if it was added, false if it already existed.
     */
    DirInode.prototype.addItem = function (p, inode) {
        if (p in this._ls) {
            return false;
        }
        this._ls[p] = inode;
        return true;
    };
    /**
     * Removes the given item from the directory listing.
     * @param p Name of item to remove from the directory listing.
     * @return Returns the item
     *   removed, or null if the item did not exist.
     */
    DirInode.prototype.remItem = function (p) {
        var item = this._ls[p];
        if (item === undefined) {
            return null;
        }
        delete this._ls[p];
        return item;
    };
    return DirInode;
}());
exports.DirInode = DirInode;
/**
 * @hidden
 */
function isFileInode(inode) {
    return !!inode && inode.isFile();
}
exports.isFileInode = isFileInode;
/**
 * @hidden
 */
function isDirInode(inode) {
    return !!inode && inode.isDir();
}
exports.isDirInode = isDirInode;
//# sourceMappingURL=file_index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(GoogleDriveFileSystem) {
/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
var Main = (function () {
    function Main() {
    }
    Main.main = function (args) {
        var x = (new java.util.HashMap());
        GoogleDriveFileSystem.init(function () {
            return;
        });
        var available = GoogleDriveFileSystem.isAvailable();
        console.info("available is: " + available);
        var readOnly = GoogleDriveFileSystem.isReadOnly();
        console.info("read only is: " + readOnly);
        var name = GoogleDriveFileSystem.getName();
        console.info("name is: " + name);
        console.info("supports props is: " + GoogleDriveFileSystem.supportsProps());
        console.info("supports synch is: " + GoogleDriveFileSystem.supportsSynch());
        console.info("supports sym links is: " + GoogleDriveFileSystem.supportsSymlinks());
        console.info("supports links is: " + GoogleDriveFileSystem.supportsLinks());
        var consumer = function (Stats) { return java.lang.System.out.print(" " + Stats); };
        GoogleDriveFileSystem.stat("foo/empty.txt", false, consumer);
    };
    return Main;
}());
exports.Main = Main;
Main["__class"] = "Main";
Main.main(null);
//# sourceMappingURL=Main.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(22);
// import {BFSCallback} from "/Users/nicoleandrews/Documents/PLASMA Lab/stopify-benchmarks/java/browserfs-candy/src/main/java/def/browserfs";
var GoogleDriveFileSystem = index_1.FileSystem.GoogleDrive;
function init(cb) {
    if (GoogleDriveFileSystem.isAvailable()) {
        var oauthToken;
        // Use the API Loader script to load google.picker and gapi.auth.
        var onApiLoad = function () {
            // load the APIs
            gapi.load('client:auth', onAuthApiLoad);
        };
        var onAuthApiLoad = function () {
            // The Client ID obtained from the Google Developers Console. Replace with your own Client ID.
            var clientId = "576255310053-nl3vla4sgg0cmu9ieb3l79fca2iuhrcs.apps.googleusercontent.com";
            // Scope to use to access user's items.
            var scope = ['https://www.googleapis.com/auth/drive'];
            window.gapi.auth.authorize({
                'client_id': clientId,
                'scope': scope,
                'immediate': false
            }, 
            // log the user in
            handleAuthResult);
        };
        var handleAuthResult = function (authResult) {
            if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                gapi.client.load('drive', 'v2', function () {
                    var fs = new GoogleDriveFileSystem(oauthToken);
                    fs.empty(function () {
                        cb();
                    });
                });
            }
        };
        onApiLoad();
    }
    else {
        cb();
    }
}
exports.init = init;
function isAvailable() {
    return true;
}
exports.isAvailable = isAvailable;
function getName() {
    return 'Google Drive';
}
exports.getName = getName;
function isReadOnly() {
    return false;
}
exports.isReadOnly = isReadOnly;
function supportsProps() {
    return false;
}
exports.supportsProps = supportsProps;
function supportsSynch() {
    return false;
}
exports.supportsSynch = supportsSynch;
function supportsSymlinks() {
    return false;
}
exports.supportsSymlinks = supportsSymlinks;
function supportsLinks() {
    return false;
}
exports.supportsLinks = supportsLinks;
// export function empty(mainCb: BFSOneArgCallback): void {
//   mainCb();
// }
function stat(p, isLstat, cb) {
    // Ignore lstat case -- GoogleDrive doesn't support symlinks
    // Stat the file
    if (p === '/') {
        // assume the root directory exists
        var stats = new Stats(FileType.DIRECTORY, 0, 0);
        return cb(null, stats);
    }
    else {
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'",
        });
        request.execute(function (resp) {
            if (typeof resp.items !== 'undefined' && typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                var id = resp.items[0].id;
                var secondRequest = gapi.client.drive.files.get({
                    fileId: id
                });
                secondRequest.execute(function (resp) {
                    var type = resp.mimeType;
                    if (type === 'application/vnd.google-apps.folder') {
                        var stats = new Stats(FileType.DIRECTORY, 0, 0);
                        return cb(null, stats);
                    }
                    else {
                        var stats = new Stats(FileType.FILE, 0, 0);
                        return cb(null, stats);
                    }
                });
            }
            else {
                return cb(ApiError.ENOENT(p));
            }
        });
    }
}
exports.stat = stat;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * BrowserFS's main entry point.
 * It installs all of the needed polyfills, and requires() the main module.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
// IE substr does not support negative indices
if ('ab'.substr(-1) !== 'b') {
    String.prototype.substr = function (substr) {
        return function (start, length) {
            // did we get a negative start, calculate how much it is from the
            // beginning of the string
            if (start < 0) {
                start = this.length + start;
            }
            // call the original function
            return substr.call(this, start, length);
        };
    }(String.prototype.substr);
}
// Polyfill for Uint8Array.prototype.slice.
// Safari and some other browsers do not define it.
if (typeof (ArrayBuffer) !== 'undefined' && typeof (Uint8Array) !== 'undefined') {
    if (!Uint8Array.prototype['slice']) {
        Uint8Array.prototype.slice = function (start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = this.length; }
            var self = this;
            if (start < 0) {
                start = this.length + start;
                if (start < 0) {
                    start = 0;
                }
            }
            if (end < 0) {
                end = this.length + end;
                if (end < 0) {
                    end = 0;
                }
            }
            if (end < start) {
                end = start;
            }
            return new Uint8Array(self.buffer, self.byteOffset + start, end - start);
        };
    }
}
__export(__webpack_require__(23));
//# sourceMappingURL=index.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {/**
 * BrowserFS's main module. This is exposed in the browser via the BrowserFS global.
 * Due to limitations in typedoc, we document these functions in ./typedoc.ts.
 */
exports.__esModule = true;
var buffer = __webpack_require__(2);
var node_fs_1 = __webpack_require__(8);
var path = __webpack_require__(3);
var emscripten_fs_1 = __webpack_require__(28);
exports.EmscriptenFS = emscripten_fs_1["default"];
var backends_1 = __webpack_require__(29);
exports.FileSystem = backends_1["default"];
var BFSUtils = __webpack_require__(1);
var Errors = __webpack_require__(0);
exports.Errors = Errors;
var setImmediate_1 = __webpack_require__(15);
exports.setImmediate = setImmediate_1["default"];
if (process['initializeTTYs']) {
    process['initializeTTYs']();
}
/**
 * @hidden
 */
function install(obj) {
    obj.Buffer = Buffer;
    obj.process = process;
    var oldRequire = obj.require ? obj.require : null;
    // Monkey-patch require for Node-style code.
    obj.require = function (arg) {
        var rv = BFSRequire(arg);
        if (!rv) {
            return oldRequire.apply(null, Array.prototype.slice.call(arguments, 0));
        }
        else {
            return rv;
        }
    };
}
exports.install = install;
/**
 * @hidden
 */
function registerFileSystem(name, fs) {
    backends_1["default"][name] = fs;
}
exports.registerFileSystem = registerFileSystem;
function BFSRequire(module) {
    switch (module) {
        case 'fs':
            return node_fs_1["default"];
        case 'path':
            return path;
        case 'buffer':
            // The 'buffer' module has 'Buffer' as a property.
            return buffer;
        case 'process':
            return process;
        case 'bfs_utils':
            return BFSUtils;
        default:
            return backends_1["default"][module];
    }
}
exports.BFSRequire = BFSRequire;
/**
 * @hidden
 */
function initialize(rootfs) {
    return node_fs_1["default"].initialize(rootfs);
}
exports.initialize = initialize;
//# sourceMappingURL=browserfs.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(2).Buffer))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var path = __webpack_require__(3);
var node_fs_stats_1 = __webpack_require__(5);
/**
 * Wraps a callback function. Used for unit testing. Defaults to a NOP.
 * @hidden
 */
var wrapCb = function (cb, numArgs) {
    return cb;
};
/**
 * @hidden
 */
function assertRoot(fs) {
    if (fs) {
        return fs;
    }
    throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)");
}
/**
 * @hidden
 */
function normalizeMode(mode, def) {
    switch (typeof mode) {
        case 'number':
            // (path, flag, mode, cb?)
            return mode;
        case 'string':
            // (path, flag, modeString, cb?)
            var trueMode = parseInt(mode, 8);
            if (!isNaN(trueMode)) {
                return trueMode;
            }
            // Invalid string.
            return def;
        default:
            return def;
    }
}
/**
 * @hidden
 */
function normalizeTime(time) {
    if (time instanceof Date) {
        return time;
    }
    else if (typeof time === 'number') {
        return new Date(time * 1000);
    }
    else {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid time.");
    }
}
/**
 * @hidden
 */
function normalizePath(p) {
    // Node doesn't allow null characters in paths.
    if (p.indexOf('\u0000') >= 0) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must be a string without null bytes.');
    }
    else if (p === '') {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must not be empty.');
    }
    return path.resolve(p);
}
/**
 * @hidden
 */
function normalizeOptions(options, defEnc, defFlag, defMode) {
    switch (typeof options) {
        case 'object':
            return {
                encoding: typeof options['encoding'] !== 'undefined' ? options['encoding'] : defEnc,
                flag: typeof options['flag'] !== 'undefined' ? options['flag'] : defFlag,
                mode: normalizeMode(options['mode'], defMode)
            };
        case 'string':
            return {
                encoding: options,
                flag: defFlag,
                mode: defMode
            };
        default:
            return {
                encoding: defEnc,
                flag: defFlag,
                mode: defMode
            };
    }
}
/**
 * The default callback is a NOP.
 * @hidden
 * @private
 */
function nopCb() {
    // NOP.
}
/**
 * The node frontend to all filesystems.
 * This layer handles:
 *
 * * Sanity checking inputs.
 * * Normalizing paths.
 * * Resetting stack depth for asynchronous operations which may not go through
 *   the browser by wrapping all input callbacks using `setImmediate`.
 * * Performing the requested operation through the filesystem or the file
 *   descriptor, as appropriate.
 * * Handling optional arguments and setting default arguments.
 * @see http://nodejs.org/api/fs.html
 */
var FS = (function () {
    function FS() {
        /* tslint:enable:variable-name */
        this.F_OK = 0;
        this.R_OK = 4;
        this.W_OK = 2;
        this.X_OK = 1;
        this.root = null;
        this.fdMap = {};
        this.nextFd = 100;
    }
    FS.prototype.initialize = function (rootFS) {
        if (!rootFS.constructor.isAvailable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Tried to instantiate BrowserFS with an unavailable file system.');
        }
        return this.root = rootFS;
    };
    /**
     * converts Date or number to a fractional UNIX timestamp
     * Grabbed from NodeJS sources (lib/fs.js)
     */
    FS.prototype._toUnixTimestamp = function (time) {
        if (typeof time === 'number') {
            return time;
        }
        else if (time instanceof Date) {
            return time.getTime() / 1000;
        }
        throw new Error("Cannot parse time: " + time);
    };
    /**
     * **NONSTANDARD**: Grab the FileSystem instance that backs this API.
     * @return [BrowserFS.FileSystem | null] Returns null if the file system has
     *   not been initialized.
     */
    FS.prototype.getRootFS = function () {
        if (this.root) {
            return this.root;
        }
        else {
            return null;
        }
    };
    // FILE OR DIRECTORY METHODS
    /**
     * Asynchronous rename. No arguments other than a possible exception are given
     * to the completion callback.
     * @param oldPath
     * @param newPath
     * @param callback
     */
    FS.prototype.rename = function (oldPath, newPath, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            assertRoot(this.root).rename(normalizePath(oldPath), normalizePath(newPath), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous rename.
     * @param oldPath
     * @param newPath
     */
    FS.prototype.renameSync = function (oldPath, newPath) {
        assertRoot(this.root).renameSync(normalizePath(oldPath), normalizePath(newPath));
    };
    /**
     * Test whether or not the given path exists by checking with the file system.
     * Then call the callback argument with either true or false.
     * @example Sample invocation
     *   fs.exists('/etc/passwd', function (exists) {
     *     util.debug(exists ? "it's there" : "no passwd!");
     *   });
     * @param path
     * @param callback
     */
    FS.prototype.exists = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            return assertRoot(this.root).exists(normalizePath(path), newCb);
        }
        catch (e) {
            // Doesn't return an error. If something bad happens, we assume it just
            // doesn't exist.
            return newCb(false);
        }
    };
    /**
     * Test whether or not the given path exists by checking with the file system.
     * @param path
     * @return [boolean]
     */
    FS.prototype.existsSync = function (path) {
        try {
            return assertRoot(this.root).existsSync(normalizePath(path));
        }
        catch (e) {
            // Doesn't return an error. If something bad happens, we assume it just
            // doesn't exist.
            return false;
        }
    };
    /**
     * Asynchronous `stat`.
     * @param path
     * @param callback
     */
    FS.prototype.stat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return assertRoot(this.root).stat(normalizePath(path), false, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `stat`.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.statSync = function (path) {
        return assertRoot(this.root).statSync(normalizePath(path), false);
    };
    /**
     * Asynchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @param callback
     */
    FS.prototype.lstat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return assertRoot(this.root).stat(normalizePath(path), true, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.lstatSync = function (path) {
        return assertRoot(this.root).statSync(normalizePath(path), true);
    };
    FS.prototype.truncate = function (path, arg2, cb) {
        if (arg2 === void 0) { arg2 = 0; }
        if (cb === void 0) { cb = nopCb; }
        var len = 0;
        if (typeof arg2 === 'function') {
            cb = arg2;
        }
        else if (typeof arg2 === 'number') {
            len = arg2;
        }
        var newCb = wrapCb(cb, 1);
        try {
            if (len < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            return assertRoot(this.root).truncate(normalizePath(path), len, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `truncate`.
     * @param path
     * @param len
     */
    FS.prototype.truncateSync = function (path, len) {
        if (len === void 0) { len = 0; }
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        return assertRoot(this.root).truncateSync(normalizePath(path), len);
    };
    /**
     * Asynchronous `unlink`.
     * @param path
     * @param callback
     */
    FS.prototype.unlink = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            return assertRoot(this.root).unlink(normalizePath(path), newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `unlink`.
     * @param path
     */
    FS.prototype.unlinkSync = function (path) {
        return assertRoot(this.root).unlinkSync(normalizePath(path));
    };
    FS.prototype.open = function (path, flag, arg2, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var mode = normalizeMode(arg2, 0x1a4);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            assertRoot(this.root).open(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), mode, function (e, file) {
                if (file) {
                    newCb(e, _this.getFdForFile(file));
                }
                else {
                    newCb(e);
                }
            });
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous file open.
     * @see http://www.manpagez.com/man/2/open/
     * @param path
     * @param flags
     * @param mode defaults to `0644`
     * @return [BrowserFS.File]
     */
    FS.prototype.openSync = function (path, flag, mode) {
        if (mode === void 0) { mode = 0x1a4; }
        return this.getFdForFile(assertRoot(this.root).openSync(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), normalizeMode(mode, 0x1a4)));
    };
    FS.prototype.readFile = function (filename, arg2, cb) {
        if (arg2 === void 0) { arg2 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg2, null, 'r', null);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options['flag']);
            if (!flag.isReadable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.'));
            }
            return assertRoot(this.root).readFile(normalizePath(filename), options.encoding, flag, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.readFileSync = function (filename, arg2) {
        if (arg2 === void 0) { arg2 = {}; }
        var options = normalizeOptions(arg2, null, 'r', null);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.');
        }
        return assertRoot(this.root).readFileSync(normalizePath(filename), options.encoding, flag);
    };
    FS.prototype.writeFile = function (filename, data, arg3, cb) {
        if (arg3 === void 0) { arg3 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isWriteable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.'));
            }
            return assertRoot(this.root).writeFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.writeFileSync = function (filename, data, arg3) {
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.');
        }
        return assertRoot(this.root).writeFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    FS.prototype.appendFile = function (filename, data, arg3, cb) {
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isAppendable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.'));
            }
            assertRoot(this.root).appendFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.appendFileSync = function (filename, data, arg3) {
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isAppendable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.');
        }
        return assertRoot(this.root).appendFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    // FILE DESCRIPTOR METHODS
    /**
     * Asynchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @param callback
     */
    FS.prototype.fstat = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            var file = this.fd2file(fd);
            file.stat(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.fstatSync = function (fd) {
        return this.fd2file(fd).statSync();
    };
    /**
     * Asynchronous close.
     * @param fd
     * @param callback
     */
    FS.prototype.close = function (fd, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).close(function (e) {
                if (!e) {
                    _this.closeFd(fd);
                }
                newCb(e);
            });
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous close.
     * @param fd
     */
    FS.prototype.closeSync = function (fd) {
        this.fd2file(fd).closeSync();
        this.closeFd(fd);
    };
    FS.prototype.ftruncate = function (fd, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var length = typeof arg2 === 'number' ? arg2 : 0;
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (length < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            file.truncate(length, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous ftruncate.
     * @param fd
     * @param len
     */
    FS.prototype.ftruncateSync = function (fd, len) {
        if (len === void 0) { len = 0; }
        var file = this.fd2file(fd);
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        file.truncateSync(len);
    };
    /**
     * Asynchronous fsync.
     * @param fd
     * @param callback
     */
    FS.prototype.fsync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).sync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous fsync.
     * @param fd
     */
    FS.prototype.fsyncSync = function (fd) {
        this.fd2file(fd).syncSync();
    };
    /**
     * Asynchronous fdatasync.
     * @param fd
     * @param callback
     */
    FS.prototype.fdatasync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).datasync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous fdatasync.
     * @param fd
     */
    FS.prototype.fdatasyncSync = function (fd) {
        this.fd2file(fd).datasyncSync();
    };
    FS.prototype.write = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var buffer, offset, length, position = null;
        if (typeof arg2 === 'string') {
            // Signature 1: (fd, string, [position?, [encoding?]], cb?)
            var encoding = 'utf8';
            switch (typeof arg3) {
                case 'function':
                    // (fd, string, cb)
                    cb = arg3;
                    break;
                case 'number':
                    // (fd, string, position, encoding?, cb?)
                    position = arg3;
                    encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
                    cb = typeof arg5 === 'function' ? arg5 : cb;
                    break;
                default:
                    // ...try to find the callback and get out of here!
                    cb = typeof arg4 === 'function' ? arg4 : typeof arg5 === 'function' ? arg5 : cb;
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid arguments.'));
            }
            buffer = Buffer.from(arg2, encoding);
            offset = 0;
            length = buffer.length;
        }
        else {
            // Signature 2: (fd, buffer, offset, length, position?, cb?)
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
            cb = typeof arg5 === 'function' ? arg5 : cb;
        }
        var newCb = wrapCb(cb, 3);
        try {
            var file = this.fd2file(fd);
            if (position === undefined || position === null) {
                position = file.getPos();
            }
            file.write(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.writeSync = function (fd, arg2, arg3, arg4, arg5) {
        var buffer, offset = 0, length, position;
        if (typeof arg2 === 'string') {
            // Signature 1: (fd, string, [position?, [encoding?]])
            position = typeof arg3 === 'number' ? arg3 : null;
            var encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
            offset = 0;
            buffer = Buffer.from(arg2, encoding);
            length = buffer.length;
        }
        else {
            // Signature 2: (fd, buffer, offset, length, position?)
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
        }
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        return file.writeSync(buffer, offset, length, position);
    };
    FS.prototype.read = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var position, offset, length, buffer, newCb;
        if (typeof arg2 === 'number') {
            // legacy interface
            // (fd, length, position, encoding, callback)
            length = arg2;
            position = arg3;
            var encoding_1 = arg4;
            cb = typeof arg5 === 'function' ? arg5 : cb;
            offset = 0;
            buffer = Buffer.alloc(length);
            // XXX: Inefficient.
            // Wrap the cb so we shelter upper layers of the API from these
            // shenanigans.
            newCb = wrapCb(function (err, bytesRead, buf) {
                if (err) {
                    return cb(err);
                }
                cb(err, buf.toString(encoding_1), bytesRead);
            }, 3);
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
            newCb = wrapCb(cb, 3);
        }
        try {
            var file = this.fd2file(fd);
            if (position === undefined || position === null) {
                position = file.getPos();
            }
            file.read(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.readSync = function (fd, arg2, arg3, arg4, arg5) {
        var shenanigans = false;
        var buffer, offset, length, position, encoding = 'utf8';
        if (typeof arg2 === 'number') {
            length = arg2;
            position = arg3;
            encoding = arg4;
            offset = 0;
            buffer = Buffer.alloc(length);
            shenanigans = true;
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
        }
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        var rv = file.readSync(buffer, offset, length, position);
        if (!shenanigans) {
            return rv;
        }
        else {
            return [buffer.toString(encoding), rv];
        }
    };
    /**
     * Asynchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.fchown = function (fd, uid, gid, callback) {
        if (callback === void 0) { callback = nopCb; }
        var newCb = wrapCb(callback, 1);
        try {
            this.fd2file(fd).chown(uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     */
    FS.prototype.fchownSync = function (fd, uid, gid) {
        this.fd2file(fd).chownSync(uid, gid);
    };
    /**
     * Asynchronous `fchmod`.
     * @param fd
     * @param mode
     * @param callback
     */
    FS.prototype.fchmod = function (fd, mode, cb) {
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
            this.fd2file(fd).chmod(numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fchmod`.
     * @param fd
     * @param mode
     */
    FS.prototype.fchmodSync = function (fd, mode) {
        var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
        this.fd2file(fd).chmodSync(numMode);
    };
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     * @param callback
     */
    FS.prototype.futimes = function (fd, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (typeof atime === 'number') {
                atime = new Date(atime * 1000);
            }
            if (typeof mtime === 'number') {
                mtime = new Date(mtime * 1000);
            }
            file.utimes(atime, mtime, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     */
    FS.prototype.futimesSync = function (fd, atime, mtime) {
        this.fd2file(fd).utimesSync(normalizeTime(atime), normalizeTime(mtime));
    };
    // DIRECTORY-ONLY METHODS
    /**
     * Asynchronous `rmdir`.
     * @param path
     * @param callback
     */
    FS.prototype.rmdir = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).rmdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `rmdir`.
     * @param path
     */
    FS.prototype.rmdirSync = function (path) {
        path = normalizePath(path);
        return assertRoot(this.root).rmdirSync(path);
    };
    /**
     * Asynchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     * @param callback
     */
    FS.prototype.mkdir = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        if (typeof mode === 'function') {
            cb = mode;
            mode = 0x1ff;
        }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).mkdir(path, mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     */
    FS.prototype.mkdirSync = function (path, mode) {
        assertRoot(this.root).mkdirSync(normalizePath(path), normalizeMode(mode, 0x1ff));
    };
    /**
     * Asynchronous `readdir`. Reads the contents of a directory.
     * The callback gets two arguments `(err, files)` where `files` is an array of
     * the names of the files in the directory excluding `'.'` and `'..'`.
     * @param path
     * @param callback
     */
    FS.prototype.readdir = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).readdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `readdir`. Reads the contents of a directory.
     * @param path
     * @return [String[]]
     */
    FS.prototype.readdirSync = function (path) {
        path = normalizePath(path);
        return assertRoot(this.root).readdirSync(path);
    };
    // SYMLINK METHODS
    /**
     * Asynchronous `link`.
     * @param srcpath
     * @param dstpath
     * @param callback
     */
    FS.prototype.link = function (srcpath, dstpath, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            assertRoot(this.root).link(srcpath, dstpath, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `link`.
     * @param srcpath
     * @param dstpath
     */
    FS.prototype.linkSync = function (srcpath, dstpath) {
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return assertRoot(this.root).linkSync(srcpath, dstpath);
    };
    FS.prototype.symlink = function (srcpath, dstpath, arg3, cb) {
        if (cb === void 0) { cb = nopCb; }
        var type = typeof arg3 === 'string' ? arg3 : 'file';
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            if (type !== 'file' && type !== 'dir') {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type));
            }
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            assertRoot(this.root).symlink(srcpath, dstpath, type, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `symlink`.
     * @param srcpath
     * @param dstpath
     * @param type can be either `'dir'` or `'file'` (default is `'file'`)
     */
    FS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (!type) {
            type = 'file';
        }
        else if (type !== 'file' && type !== 'dir') {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type);
        }
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return assertRoot(this.root).symlinkSync(srcpath, dstpath, type);
    };
    /**
     * Asynchronous readlink.
     * @param path
     * @param callback
     */
    FS.prototype.readlink = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).readlink(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous readlink.
     * @param path
     * @return [String]
     */
    FS.prototype.readlinkSync = function (path) {
        path = normalizePath(path);
        return assertRoot(this.root).readlinkSync(path);
    };
    // PROPERTY OPERATIONS
    /**
     * Asynchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.chown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).chown(path, false, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     */
    FS.prototype.chownSync = function (path, uid, gid) {
        path = normalizePath(path);
        assertRoot(this.root).chownSync(path, false, uid, gid);
    };
    /**
     * Asynchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.lchown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).chown(path, true, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     */
    FS.prototype.lchownSync = function (path, uid, gid) {
        path = normalizePath(path);
        assertRoot(this.root).chownSync(path, true, uid, gid);
    };
    /**
     * Asynchronous `chmod`.
     * @param path
     * @param mode
     * @param callback
     */
    FS.prototype.chmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            assertRoot(this.root).chmod(normalizePath(path), false, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `chmod`.
     * @param path
     * @param mode
     */
    FS.prototype.chmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        path = normalizePath(path);
        assertRoot(this.root).chmodSync(path, false, numMode);
    };
    /**
     * Asynchronous `lchmod`.
     * @param path
     * @param mode
     * @param callback
     */
    FS.prototype.lchmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            assertRoot(this.root).chmod(normalizePath(path), true, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `lchmod`.
     * @param path
     * @param mode
     */
    FS.prototype.lchmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 1) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        assertRoot(this.root).chmodSync(normalizePath(path), true, numMode);
    };
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     * @param callback
     */
    FS.prototype.utimes = function (path, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            assertRoot(this.root).utimes(normalizePath(path), normalizeTime(atime), normalizeTime(mtime), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     */
    FS.prototype.utimesSync = function (path, atime, mtime) {
        assertRoot(this.root).utimesSync(normalizePath(path), normalizeTime(atime), normalizeTime(mtime));
    };
    FS.prototype.realpath = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var cache = typeof (arg2) === 'object' ? arg2 : {};
        cb = typeof (arg2) === 'function' ? arg2 : nopCb;
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).realpath(path, cache, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `realpath`.
     * @param path
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths.
     * @return [String]
     */
    FS.prototype.realpathSync = function (path, cache) {
        if (cache === void 0) { cache = {}; }
        path = normalizePath(path);
        return assertRoot(this.root).realpathSync(path, cache);
    };
    FS.prototype.watchFile = function (filename, arg2, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.unwatchFile = function (filename, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.watch = function (filename, arg2, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.access = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.accessSync = function (path, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createReadStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createWriteStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * For unit testing. Passes all incoming callbacks to cbWrapper for wrapping.
     */
    FS.prototype.wrapCallbacks = function (cbWrapper) {
        wrapCb = cbWrapper;
    };
    FS.prototype.getFdForFile = function (file) {
        var fd = this.nextFd++;
        this.fdMap[fd] = file;
        return fd;
    };
    FS.prototype.fd2file = function (fd) {
        var rv = this.fdMap[fd];
        if (rv) {
            return rv;
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, 'Invalid file descriptor.');
        }
    };
    FS.prototype.closeFd = function (fd) {
        delete this.fdMap[fd];
    };
    return FS;
}());
/* tslint:disable:variable-name */
// Exported fs.Stats.
FS.Stats = node_fs_stats_1["default"];
exports["default"] = FS;
//# sourceMappingURL=FS.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var node_fs_1 = __webpack_require__(8);
var util_1 = __webpack_require__(1);
var BFSEmscriptenStreamOps = (function () {
    function BFSEmscriptenStreamOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenStreamOps.prototype.open = function (stream) {
        var path = this.fs.realPath(stream.node);
        var FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode)) {
                stream.nfd = this.nodefs.openSync(path, this.fs.flagsToPermissionString(stream.flags));
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.close = function (stream) {
        var FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
                this.nodefs.closeSync(stream.nfd);
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.read = function (stream, buffer, offset, length, position) {
        // Avoid copying overhead by reading directly into buffer.
        try {
            return this.nodefs.readSync(stream.nfd, util_1.uint8Array2Buffer(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.write = function (stream, buffer, offset, length, position) {
        // Avoid copying overhead.
        try {
            return this.nodefs.writeSync(stream.nfd, util_1.uint8Array2Buffer(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.llseek = function (stream, offset, whence) {
        var position = offset;
        if (whence === 1) {
            position += stream.position;
        }
        else if (whence === 2) {
            if (this.FS.isFile(stream.node.mode)) {
                try {
                    var stat = this.nodefs.fstatSync(stream.nfd);
                    position += stat.size;
                }
                catch (e) {
                    throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
                }
            }
        }
        if (position < 0) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        stream.position = position;
        return position;
    };
    return BFSEmscriptenStreamOps;
}());
var BFSEmscriptenNodeOps = (function () {
    function BFSEmscriptenNodeOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenNodeOps.prototype.getattr = function (node) {
        var path = this.fs.realPath(node);
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
        };
    };
    BFSEmscriptenNodeOps.prototype.setattr = function (node, attr) {
        var path = this.fs.realPath(node);
        try {
            if (attr.mode !== undefined) {
                this.nodefs.chmodSync(path, attr.mode);
                // update the common node structure mode as well
                node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
                var date = new Date(attr.timestamp);
                this.nodefs.utimesSync(path, date, date);
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            // Ignore not supported errors. Emscripten does utimesSync when it
            // writes files, but never really requires the value to be set.
            if (e.code !== "ENOTSUP") {
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
        if (attr.size !== undefined) {
            try {
                this.nodefs.truncateSync(path, attr.size);
            }
            catch (e) {
                if (!e.code) {
                    throw e;
                }
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
    };
    BFSEmscriptenNodeOps.prototype.lookup = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        var mode = this.fs.getMode(path);
        return this.fs.createNode(parent, name, mode);
    };
    BFSEmscriptenNodeOps.prototype.mknod = function (parent, name, mode, dev) {
        var node = this.fs.createNode(parent, name, mode, dev);
        // create the backing node for this in the fs root as well
        var path = this.fs.realPath(node);
        try {
            if (this.FS.isDir(node.mode)) {
                this.nodefs.mkdirSync(path, node.mode);
            }
            else {
                this.nodefs.writeFileSync(path, '', { mode: node.mode });
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return node;
    };
    BFSEmscriptenNodeOps.prototype.rename = function (oldNode, newDir, newName) {
        var oldPath = this.fs.realPath(oldNode);
        var newPath = this.PATH.join2(this.fs.realPath(newDir), newName);
        try {
            this.nodefs.renameSync(oldPath, newPath);
            // This logic is missing from the original NodeFS,
            // causing Emscripten's filesystem to think that the old file still exists.
            oldNode.name = newName;
            oldNode.parent = newDir;
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.unlink = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.unlinkSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.rmdir = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.rmdirSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readdir = function (node) {
        var path = this.fs.realPath(node);
        try {
            // Node does not list . and .. in directory listings,
            // but Emscripten expects it.
            var contents = this.nodefs.readdirSync(path);
            contents.push('.', '..');
            return contents;
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.symlink = function (parent, newName, oldPath) {
        var newPath = this.PATH.join2(this.fs.realPath(parent), newName);
        try {
            this.nodefs.symlinkSync(oldPath, newPath);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readlink = function (node) {
        var path = this.fs.realPath(node);
        try {
            return this.nodefs.readlinkSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    return BFSEmscriptenNodeOps;
}());
var BFSEmscriptenFS = (function () {
    function BFSEmscriptenFS(_FS, _PATH, _ERRNO_CODES, nodefs) {
        if (_FS === void 0) { _FS = self['FS']; }
        if (_PATH === void 0) { _PATH = self['PATH']; }
        if (_ERRNO_CODES === void 0) { _ERRNO_CODES = self['ERRNO_CODES']; }
        if (nodefs === void 0) { nodefs = node_fs_1["default"]; }
        // This maps the integer permission modes from http://linux.die.net/man/3/open
        // to node.js-specific file open permission strings at http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback
        this.flagsToPermissionStringMap = {
            0 /*O_RDONLY*/: 'r',
            1 /*O_WRONLY*/: 'r+',
            2 /*O_RDWR*/: 'r+',
            64 /*O_CREAT*/: 'r',
            65 /*O_WRONLY|O_CREAT*/: 'r+',
            66 /*O_RDWR|O_CREAT*/: 'r+',
            129 /*O_WRONLY|O_EXCL*/: 'rx+',
            193 /*O_WRONLY|O_CREAT|O_EXCL*/: 'rx+',
            514 /*O_RDWR|O_TRUNC*/: 'w+',
            577 /*O_WRONLY|O_CREAT|O_TRUNC*/: 'w',
            578 /*O_CREAT|O_RDWR|O_TRUNC*/: 'w+',
            705 /*O_WRONLY|O_CREAT|O_EXCL|O_TRUNC*/: 'wx',
            706 /*O_RDWR|O_CREAT|O_EXCL|O_TRUNC*/: 'wx+',
            1024 /*O_APPEND*/: 'a',
            1025 /*O_WRONLY|O_APPEND*/: 'a',
            1026 /*O_RDWR|O_APPEND*/: 'a+',
            1089 /*O_WRONLY|O_CREAT|O_APPEND*/: 'a',
            1090 /*O_RDWR|O_CREAT|O_APPEND*/: 'a+',
            1153 /*O_WRONLY|O_EXCL|O_APPEND*/: 'ax',
            1154 /*O_RDWR|O_EXCL|O_APPEND*/: 'ax+',
            1217 /*O_WRONLY|O_CREAT|O_EXCL|O_APPEND*/: 'ax',
            1218 /*O_RDWR|O_CREAT|O_EXCL|O_APPEND*/: 'ax+',
            4096 /*O_RDONLY|O_DSYNC*/: 'rs',
            4098 /*O_RDWR|O_DSYNC*/: 'rs+'
        };
        this.nodefs = nodefs;
        this.FS = _FS;
        this.PATH = _PATH;
        this.ERRNO_CODES = _ERRNO_CODES;
        this.node_ops = new BFSEmscriptenNodeOps(this);
        this.stream_ops = new BFSEmscriptenStreamOps(this);
    }
    BFSEmscriptenFS.prototype.mount = function (m) {
        return this.createNode(null, '/', this.getMode(m.opts.root), 0);
    };
    BFSEmscriptenFS.prototype.createNode = function (parent, name, mode, dev) {
        var FS = this.FS;
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
            throw new FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = this.node_ops;
        node.stream_ops = this.stream_ops;
        return node;
    };
    BFSEmscriptenFS.prototype.getMode = function (path) {
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return stat.mode;
    };
    BFSEmscriptenFS.prototype.realPath = function (node) {
        var parts = [];
        while (node.parent !== node) {
            parts.push(node.name);
            node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return this.PATH.join.apply(null, parts);
    };
    BFSEmscriptenFS.prototype.flagsToPermissionString = function (flags) {
        var parsedFlags = (typeof flags === "string") ? parseInt(flags, 10) : flags;
        parsedFlags &= 0x1FFF;
        if (parsedFlags in this.flagsToPermissionStringMap) {
            return this.flagsToPermissionStringMap[parsedFlags];
        }
        else {
            return flags;
        }
    };
    BFSEmscriptenFS.prototype.getNodeFS = function () {
        return this.nodefs;
    };
    BFSEmscriptenFS.prototype.getFS = function () {
        return this.FS;
    };
    BFSEmscriptenFS.prototype.getPATH = function () {
        return this.PATH;
    };
    BFSEmscriptenFS.prototype.getERRNO_CODES = function () {
        return this.ERRNO_CODES;
    };
    return BFSEmscriptenFS;
}());
exports["default"] = BFSEmscriptenFS;
//# sourceMappingURL=emscripten_fs.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var AsyncMirror_1 = __webpack_require__(30);
var Dropbox_1 = __webpack_require__(31);
var Emscripten_1 = __webpack_require__(34);
var FolderAdapter_1 = __webpack_require__(35);
var GoogleDrive_1 = __webpack_require__(36);
var HTML5FS_1 = __webpack_require__(37);
var InMemory_1 = __webpack_require__(18);
var IndexedDB_1 = __webpack_require__(39);
var LocalStorage_1 = __webpack_require__(40);
var MountableFileSystem_1 = __webpack_require__(41);
var OverlayFS_1 = __webpack_require__(42);
var WorkerFS_1 = __webpack_require__(45);
var XmlHttpRequest_1 = __webpack_require__(46);
var ZipFS_1 = __webpack_require__(48);
var IsoFS_1 = __webpack_require__(61);
/* tslint:disable:variable-name */
/**
 * @hidden
 */
var Backends = { AsyncMirror: AsyncMirror_1["default"], Dropbox: Dropbox_1["default"], Emscripten: Emscripten_1["default"], FolderAdapter: FolderAdapter_1["default"], GoogleDrive: GoogleDrive_1["default"], HTML5FS: HTML5FS_1["default"], InMemory: InMemory_1["default"], IndexedDB: IndexedDB_1["default"], IsoFS: IsoFS_1["default"], LocalStorage: LocalStorage_1["default"], MountableFileSystem: MountableFileSystem_1["default"], OverlayFS: OverlayFS_1["default"], WorkerFS: WorkerFS_1["default"], XmlHttpRequest: XmlHttpRequest_1["default"], ZipFS: ZipFS_1["default"] };
exports["default"] = Backends;
/* tslint:enable:variable-name */
//# sourceMappingURL=backends.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var preload_file_1 = __webpack_require__(7);
var path = __webpack_require__(3);
/**
 * We define our own file to interpose on syncSync() for mirroring purposes.
 */
var MirrorFile = (function (_super) {
    __extends(MirrorFile, _super);
    function MirrorFile(fs, path, flag, stat, data) {
        return _super.call(this, fs, path, flag, stat, data) || this;
    }
    MirrorFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    MirrorFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return MirrorFile;
}(preload_file_1["default"]));
/**
 * AsyncMirrorFS mirrors a synchronous filesystem into an asynchronous filesystem
 * by:
 *
 * * Performing operations over the in-memory copy, while asynchronously pipelining them
 *   to the backing store.
 * * During application loading, the contents of the async file system can be reloaded into
 *   the synchronous store, if desired.
 *
 * The two stores will be kept in sync. The most common use-case is to pair a synchronous
 * in-memory filesystem with an asynchronous backing store.
 *
 * Example: Mirroring an IndexedDB file system to an in memory file system. Now, you can use
 * IndexedDB synchronously.
 *
 * ```javascript
 * new BrowserFS.FileSystem.IndexedDB(function (e, idbfs) {
 *   var inMemory = new BrowserFS.FileSystem.InMemory();
 *   var mirrored = new BrowserFS.FileSystem.AsyncMirror(inMemory, idbfs);
 *   mirrored.initialize(function (e) {
 *     BrowserFS.initialized(mirrored);
 *   });
 * });
 * ```
 */
var AsyncMirror = (function (_super) {
    __extends(AsyncMirror, _super);
    /**
     * Mirrors the synchronous file system into the asynchronous file system.
     *
     * **IMPORTANT**: You must call `initialize` on the file system before it can be used.
     * @param sync The synchronous file system to mirror the asynchronous file system to.
     * @param async The asynchronous file system to mirror.
     */
    function AsyncMirror(sync, async) {
        var _this = _super.call(this) || this;
        /**
         * Queue of pending asynchronous operations.
         */
        _this._queue = [];
        _this._queueRunning = false;
        _this._isInitialized = false;
        _this._initializeCallbacks = [];
        _this._sync = sync;
        _this._async = async;
        if (!sync.supportsSynch()) {
            throw new Error("The first argument to AsyncMirror needs to be a synchronous file system.");
        }
        return _this;
    }
    AsyncMirror.isAvailable = function () {
        return true;
    };
    AsyncMirror.prototype.getName = function () {
        return "AsyncMirror";
    };
    AsyncMirror.prototype._syncSync = function (fd) {
        this._sync.writeFileSync(fd.getPath(), fd.getBuffer(), null, file_flag_1.FileFlag.getFileFlag('w'), fd.getStats().mode);
        this.enqueueOp({
            apiMethod: 'writeFile',
            arguments: [fd.getPath(), fd.getBuffer(), null, fd.getFlag(), fd.getStats().mode]
        });
    };
    /**
     * Called once to load up files from async storage into sync storage.
     */
    AsyncMirror.prototype.initialize = function (userCb) {
        var _this = this;
        var callbacks = this._initializeCallbacks;
        var end = function (e) {
            _this._isInitialized = !e;
            _this._initializeCallbacks = [];
            callbacks.forEach(function (cb) { return cb(e); });
        };
        if (!this._isInitialized) {
            // First call triggers initialization, the rest wait.
            if (callbacks.push(userCb) === 1) {
                var copyDirectory_1 = function (p, mode, cb) {
                    if (p !== '/') {
                        _this._sync.mkdirSync(p, mode);
                    }
                    _this._async.readdir(p, function (err, files) {
                        var i = 0;
                        // NOTE: This function must not be in a lexically nested statement,
                        // such as an if or while statement. Safari refuses to run the
                        // script since it is undefined behavior.
                        function copyNextFile(err) {
                            if (err) {
                                cb(err);
                            }
                            else if (i < files.length) {
                                copyItem_1(path.join(p, files[i]), copyNextFile);
                                i++;
                            }
                            else {
                                cb();
                            }
                        }
                        if (err) {
                            cb(err);
                        }
                        else {
                            copyNextFile();
                        }
                    });
                }, copyFile_1 = function (p, mode, cb) {
                    _this._async.readFile(p, null, file_flag_1.FileFlag.getFileFlag('r'), function (err, data) {
                        if (err) {
                            cb(err);
                        }
                        else {
                            try {
                                _this._sync.writeFileSync(p, data, null, file_flag_1.FileFlag.getFileFlag('w'), mode);
                            }
                            catch (e) {
                                err = e;
                            }
                            finally {
                                cb(err);
                            }
                        }
                    });
                }, copyItem_1 = function (p, cb) {
                    _this._async.stat(p, false, function (err, stats) {
                        if (err) {
                            cb(err);
                        }
                        else if (stats.isDirectory()) {
                            copyDirectory_1(p, stats.mode, cb);
                        }
                        else {
                            copyFile_1(p, stats.mode, cb);
                        }
                    });
                };
                copyDirectory_1('/', 0, end);
            }
        }
        else {
            userCb();
        }
    };
    AsyncMirror.prototype.isReadOnly = function () { return false; };
    AsyncMirror.prototype.supportsSynch = function () { return true; };
    AsyncMirror.prototype.supportsLinks = function () { return false; };
    AsyncMirror.prototype.supportsProps = function () { return this._sync.supportsProps() && this._async.supportsProps(); };
    AsyncMirror.prototype.renameSync = function (oldPath, newPath) {
        this.checkInitialized();
        this._sync.renameSync(oldPath, newPath);
        this.enqueueOp({
            apiMethod: 'rename',
            arguments: [oldPath, newPath]
        });
    };
    AsyncMirror.prototype.statSync = function (p, isLstat) {
        this.checkInitialized();
        return this._sync.statSync(p, isLstat);
    };
    AsyncMirror.prototype.openSync = function (p, flag, mode) {
        this.checkInitialized();
        // Sanity check: Is this open/close permitted?
        var fd = this._sync.openSync(p, flag, mode);
        fd.closeSync();
        return new MirrorFile(this, p, flag, this._sync.statSync(p, false), this._sync.readFileSync(p, null, file_flag_1.FileFlag.getFileFlag('r')));
    };
    AsyncMirror.prototype.unlinkSync = function (p) {
        this.checkInitialized();
        this._sync.unlinkSync(p);
        this.enqueueOp({
            apiMethod: 'unlink',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.rmdirSync = function (p) {
        this.checkInitialized();
        this._sync.rmdirSync(p);
        this.enqueueOp({
            apiMethod: 'rmdir',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.mkdirSync = function (p, mode) {
        this.checkInitialized();
        this._sync.mkdirSync(p, mode);
        this.enqueueOp({
            apiMethod: 'mkdir',
            arguments: [p, mode]
        });
    };
    AsyncMirror.prototype.readdirSync = function (p) {
        this.checkInitialized();
        return this._sync.readdirSync(p);
    };
    AsyncMirror.prototype.existsSync = function (p) {
        this.checkInitialized();
        return this._sync.existsSync(p);
    };
    AsyncMirror.prototype.chmodSync = function (p, isLchmod, mode) {
        this.checkInitialized();
        this._sync.chmodSync(p, isLchmod, mode);
        this.enqueueOp({
            apiMethod: 'chmod',
            arguments: [p, isLchmod, mode]
        });
    };
    AsyncMirror.prototype.chownSync = function (p, isLchown, uid, gid) {
        this.checkInitialized();
        this._sync.chownSync(p, isLchown, uid, gid);
        this.enqueueOp({
            apiMethod: 'chown',
            arguments: [p, isLchown, uid, gid]
        });
    };
    AsyncMirror.prototype.utimesSync = function (p, atime, mtime) {
        this.checkInitialized();
        this._sync.utimesSync(p, atime, mtime);
        this.enqueueOp({
            apiMethod: 'utimes',
            arguments: [p, atime, mtime]
        });
    };
    AsyncMirror.prototype.checkInitialized = function () {
        if (!this._isInitialized) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "AsyncMirrorFS is not initialized. Please initialize AsyncMirrorFS using its initialize() method before using it.");
        }
    };
    AsyncMirror.prototype.enqueueOp = function (op) {
        var _this = this;
        this._queue.push(op);
        if (!this._queueRunning) {
            this._queueRunning = true;
            var doNextOp_1 = function (err) {
                if (err) {
                    console.error("WARNING: File system has desynchronized. Received following error: " + err + "\n$");
                }
                if (_this._queue.length > 0) {
                    var op_1 = _this._queue.shift(), args = op_1.arguments;
                    args.push(doNextOp_1);
                    _this._async[op_1.apiMethod].apply(_this._async, args);
                }
                else {
                    _this._queueRunning = false;
                }
            };
            doNextOp_1();
        }
    };
    return AsyncMirror;
}(file_system_1.SynchronousFileSystem));
exports["default"] = AsyncMirror;
//# sourceMappingURL=AsyncMirror.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preload_file_1 = __webpack_require__(7);
var file_system_1 = __webpack_require__(4);
var node_fs_stats_1 = __webpack_require__(5);
var api_error_1 = __webpack_require__(0);
var async_1 = __webpack_require__(16);
var path = __webpack_require__(3);
var util_1 = __webpack_require__(1);
/**
 * @hidden
 */
var errorCodeLookup;
/**
 * Lazily construct error code lookup, since DropboxJS might be loaded *after* BrowserFS (or not at all!)
 * @hidden
 */
function constructErrorCodeLookup() {
    if (errorCodeLookup) {
        return;
    }
    errorCodeLookup = {};
    // This indicates a network transmission error on modern browsers. Internet Explorer might cause this code to be reported on some API server errors.
    errorCodeLookup[Dropbox.ApiError.NETWORK_ERROR] = api_error_1.ErrorCode.EIO;
    // This happens when the contentHash parameter passed to a Dropbox.Client#readdir or Dropbox.Client#stat matches the most recent content, so the API call response is omitted, to save bandwidth.
    // errorCodeLookup[Dropbox.ApiError.NO_CONTENT];
    // The error property on {Dropbox.ApiError#response} should indicate which input parameter is invalid and why.
    errorCodeLookup[Dropbox.ApiError.INVALID_PARAM] = api_error_1.ErrorCode.EINVAL;
    // The OAuth token used for the request will never become valid again, so the user should be re-authenticated.
    errorCodeLookup[Dropbox.ApiError.INVALID_TOKEN] = api_error_1.ErrorCode.EPERM;
    // This indicates a bug in dropbox.js and should never occur under normal circumstances.
    // ^ Actually, that's false. This occurs when you try to move folders to themselves, or move a file over another file.
    errorCodeLookup[Dropbox.ApiError.OAUTH_ERROR] = api_error_1.ErrorCode.EPERM;
    // This happens when trying to read from a non-existing file, readdir a non-existing directory, write a file into a non-existing directory, etc.
    errorCodeLookup[Dropbox.ApiError.NOT_FOUND] = api_error_1.ErrorCode.ENOENT;
    // This indicates a bug in dropbox.js and should never occur under normal circumstances.
    errorCodeLookup[Dropbox.ApiError.INVALID_METHOD] = api_error_1.ErrorCode.EINVAL;
    // This happens when a Dropbox.Client#readdir or Dropbox.Client#stat call would return more than a maximum amount of directory entries.
    errorCodeLookup[Dropbox.ApiError.NOT_ACCEPTABLE] = api_error_1.ErrorCode.EINVAL;
    // This is used by some backend methods to indicate that the client needs to download server-side changes and perform conflict resolution. Under normal usage, errors with this code should never surface to the code using dropbox.js.
    errorCodeLookup[Dropbox.ApiError.CONFLICT] = api_error_1.ErrorCode.EINVAL;
    // Status value indicating that the application is making too many requests.
    errorCodeLookup[Dropbox.ApiError.RATE_LIMITED] = api_error_1.ErrorCode.EBUSY;
    // The request should be retried after some time.
    errorCodeLookup[Dropbox.ApiError.SERVER_ERROR] = api_error_1.ErrorCode.EBUSY;
    // Status value indicating that the user's Dropbox is over its storage quota.
    errorCodeLookup[Dropbox.ApiError.OVER_QUOTA] = api_error_1.ErrorCode.ENOSPC;
}
/**
 * @hidden
 */
function isFileInfo(cache) {
    return cache && cache.stat.isFile;
}
/**
 * @hidden
 */
function isDirInfo(cache) {
    return cache && cache.stat.isFolder;
}
/**
 * @hidden
 */
function isArrayBuffer(ab) {
    // Accept null / undefined, too.
    return ab === null || ab === undefined || (typeof (ab) === 'object' && typeof (ab['byteLength']) === 'number');
}
/**
 * Wraps a Dropbox client and caches operations.
 * @hidden
 */
var CachedDropboxClient = (function () {
    function CachedDropboxClient(client) {
        this._cache = {};
        this._client = client;
    }
    CachedDropboxClient.prototype.readdir = function (p, cb) {
        var _this = this;
        var cacheInfo = this.getCachedDirInfo(p);
        this._wrap(function (interceptCb) {
            if (cacheInfo !== null && cacheInfo.contents) {
                _this._client.readdir(p, {
                    contentHash: cacheInfo.stat.contentHash
                }, interceptCb);
            }
            else {
                _this._client.readdir(p, interceptCb);
            }
        }, function (err, filenames, stat, folderEntries) {
            if (err) {
                if (err.status === Dropbox.ApiError.NO_CONTENT && cacheInfo !== null) {
                    cb(null, cacheInfo.contents.slice(0));
                }
                else {
                    cb(err);
                }
            }
            else {
                _this.updateCachedDirInfo(p, stat, filenames.slice(0));
                folderEntries.forEach(function (entry) {
                    _this.updateCachedInfo(path.join(p, entry.name), entry);
                });
                cb(null, filenames);
            }
        });
    };
    CachedDropboxClient.prototype.remove = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.remove(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat);
            }
            cb(err);
        });
    };
    CachedDropboxClient.prototype.move = function (src, dest, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.move(src, dest, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.deleteCachedInfo(src);
                _this.updateCachedInfo(dest, stat);
            }
            cb(err);
        });
    };
    CachedDropboxClient.prototype.stat = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.stat(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat);
            }
            cb(err, stat);
        });
    };
    CachedDropboxClient.prototype.readFile = function (p, cb) {
        var _this = this;
        var cacheInfo = this.getCachedFileInfo(p);
        if (cacheInfo !== null && cacheInfo.contents !== null) {
            // Try to use cached info; issue a stat to see if contents are up-to-date.
            this.stat(p, function (error, stat) {
                if (error) {
                    cb(error);
                }
                else if (stat.contentHash === cacheInfo.stat.contentHash) {
                    // No file changes.
                    cb(error, cacheInfo.contents.slice(0), cacheInfo.stat);
                }
                else {
                    // File changes; rerun to trigger actual readFile.
                    _this.readFile(p, cb);
                }
            });
        }
        else {
            this._wrap(function (interceptCb) {
                _this._client.readFile(p, { arrayBuffer: true }, interceptCb);
            }, function (err, contents, stat) {
                if (!err) {
                    _this.updateCachedInfo(p, stat, contents.slice(0));
                }
                cb(err, contents, stat);
            });
        }
    };
    CachedDropboxClient.prototype.writeFile = function (p, contents, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.writeFile(p, contents, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat, contents.slice(0));
            }
            cb(err, stat);
        });
    };
    CachedDropboxClient.prototype.mkdir = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.mkdir(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat, []);
            }
            cb(err);
        });
    };
    /**
     * Wraps an operation such that we retry a failed operation 3 times.
     * Necessary to deal with Dropbox rate limiting.
     *
     * @param performOp Function that performs the operation. Will be called up to three times.
     * @param cb Called when the operation succeeds, fails in a non-temporary manner, or fails three times.
     */
    CachedDropboxClient.prototype._wrap = function (performOp, cb) {
        var numRun = 0;
        var interceptCb = function (error) {
            // Timeout duration, in seconds.
            var timeoutDuration = 2;
            if (error && 3 > (++numRun)) {
                switch (error.status) {
                    case Dropbox.ApiError.SERVER_ERROR:
                    case Dropbox.ApiError.NETWORK_ERROR:
                    case Dropbox.ApiError.RATE_LIMITED:
                        setTimeout(function () {
                            performOp(interceptCb);
                        }, timeoutDuration * 1000);
                        break;
                    default:
                        cb.apply(null, arguments);
                        break;
                }
            }
            else {
                cb.apply(null, arguments);
            }
        };
        performOp(interceptCb);
    };
    CachedDropboxClient.prototype.getCachedInfo = function (p) {
        return this._cache[p.toLowerCase()];
    };
    CachedDropboxClient.prototype.putCachedInfo = function (p, cache) {
        this._cache[p.toLowerCase()] = cache;
    };
    CachedDropboxClient.prototype.deleteCachedInfo = function (p) {
        delete this._cache[p.toLowerCase()];
    };
    CachedDropboxClient.prototype.getCachedDirInfo = function (p) {
        var info = this.getCachedInfo(p);
        if (isDirInfo(info)) {
            return info;
        }
        else {
            return null;
        }
    };
    CachedDropboxClient.prototype.getCachedFileInfo = function (p) {
        var info = this.getCachedInfo(p);
        if (isFileInfo(info)) {
            return info;
        }
        else {
            return null;
        }
    };
    CachedDropboxClient.prototype.updateCachedDirInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        var cachedInfo = this.getCachedInfo(p);
        // Dropbox uses the *contentHash* property for directories.
        // Ignore stat objects w/o a contentHash defined; those actually exist!!!
        // (Example: readdir returns an array of stat objs; stat objs for dirs in that context have no contentHash)
        if (stat.contentHash !== null && (cachedInfo === undefined || cachedInfo.stat.contentHash !== stat.contentHash)) {
            this.putCachedInfo(p, {
                stat: stat,
                contents: contents
            });
        }
    };
    CachedDropboxClient.prototype.updateCachedFileInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        var cachedInfo = this.getCachedInfo(p);
        // Dropbox uses the *versionTag* property for files.
        // Ignore stat objects w/o a versionTag defined.
        if (stat.versionTag !== null && (cachedInfo === undefined || cachedInfo.stat.versionTag !== stat.versionTag)) {
            this.putCachedInfo(p, {
                stat: stat,
                contents: contents
            });
        }
    };
    CachedDropboxClient.prototype.updateCachedInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        if (stat.isFile && isArrayBuffer(contents)) {
            this.updateCachedFileInfo(p, stat, contents);
        }
        else if (stat.isFolder && Array.isArray(contents)) {
            this.updateCachedDirInfo(p, stat, contents);
        }
    };
    return CachedDropboxClient;
}());
var DropboxFile = (function (_super) {
    __extends(DropboxFile, _super);
    function DropboxFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    DropboxFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            var buffer = this.getBuffer(), arrayBuffer = util_1.buffer2ArrayBuffer(buffer);
            this._fs._writeFileStrict(this.getPath(), arrayBuffer, function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    DropboxFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return DropboxFile;
}(preload_file_1["default"]));
exports.DropboxFile = DropboxFile;
/**
 * A read/write file system backed by Dropbox cloud storage.
 *
 * Uses the Dropbox V1 API.
 *
 * NOTE: You must use the v0.10 version of the [Dropbox JavaScript SDK](https://www.npmjs.com/package/dropbox).
 */
var DropboxFileSystem = (function (_super) {
    __extends(DropboxFileSystem, _super);
    /**
     * Constructs a Dropbox-backed file system using the *authenticated* DropboxJS client.
     *
     * Note that you must use the old v0.10 version of the Dropbox JavaScript SDK.
     */
    function DropboxFileSystem(client) {
        var _this = _super.call(this) || this;
        _this._client = new CachedDropboxClient(client);
        constructErrorCodeLookup();
        return _this;
    }
    DropboxFileSystem.isAvailable = function () {
        // Checks if the Dropbox library is loaded.
        return typeof Dropbox !== 'undefined';
    };
    DropboxFileSystem.prototype.getName = function () {
        return 'Dropbox';
    };
    DropboxFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    // Dropbox doesn't support symlinks, properties, or synchronous calls
    DropboxFileSystem.prototype.supportsSymlinks = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsProps = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsSynch = function () {
        return false;
    };
    DropboxFileSystem.prototype.empty = function (mainCb) {
        var _this = this;
        this._client.readdir('/', function (error, files) {
            if (error) {
                mainCb(_this.convert(error, '/'));
            }
            else {
                var deleteFile = function (file, cb) {
                    var p = path.join('/', file);
                    _this._client.remove(p, function (err) {
                        cb(err ? _this.convert(err, p) : null);
                    });
                };
                var finished = function (err) {
                    if (err) {
                        mainCb(err);
                    }
                    else {
                        mainCb();
                    }
                };
                // XXX: <any> typing is to get around overly-restrictive ErrorCallback typing.
                async_1.each(files, deleteFile, finished);
            }
        });
    };
    DropboxFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        this._client.move(oldPath, newPath, function (error) {
            if (error) {
                // the move is permitted if newPath is a file.
                // Check if this is the case, and remove if so.
                _this._client.stat(newPath, function (error2, stat) {
                    if (error2 || stat.isFolder) {
                        var missingPath = error.response.error.indexOf(oldPath) > -1 ? oldPath : newPath;
                        cb(_this.convert(error, missingPath));
                    }
                    else {
                        // Delete file, repeat rename.
                        _this._client.remove(newPath, function (error2) {
                            if (error2) {
                                cb(_this.convert(error2, newPath));
                            }
                            else {
                                _this.rename(oldPath, newPath, cb);
                            }
                        });
                    }
                });
            }
            else {
                cb();
            }
        });
    };
    DropboxFileSystem.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        // Ignore lstat case -- Dropbox doesn't support symlinks
        // Stat the file
        this._client.stat(path, function (error, stat) {
            if (error) {
                cb(_this.convert(error, path));
            }
            else if (stat && stat.isRemoved) {
                // Dropbox keeps track of deleted files, so if a file has existed in the
                // past but doesn't any longer, you wont get an error
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, path));
            }
            else {
                var stats = new node_fs_stats_1["default"](_this._statType(stat), stat.size);
                return cb(null, stats);
            }
        });
    };
    DropboxFileSystem.prototype.open = function (path, flags, mode, cb) {
        var _this = this;
        // Try and get the file's contents
        this._client.readFile(path, function (error, content, dbStat) {
            if (error) {
                // If the file's being opened for reading and doesn't exist, return an
                // error
                if (flags.isReadable()) {
                    cb(_this.convert(error, path));
                }
                else {
                    switch (error.status) {
                        // If it's being opened for writing or appending, create it so that
                        // it can be written to
                        case Dropbox.ApiError.NOT_FOUND:
                            var ab_1 = new ArrayBuffer(0);
                            return _this._writeFileStrict(path, ab_1, function (error2, stat) {
                                if (error2) {
                                    cb(error2);
                                }
                                else {
                                    var file = _this._makeFile(path, flags, stat, util_1.arrayBuffer2Buffer(ab_1));
                                    cb(null, file);
                                }
                            });
                        default:
                            return cb(_this.convert(error, path));
                    }
                }
            }
            else {
                // No error
                var buffer = void 0;
                // Dropbox.js seems to set `content` to `null` rather than to an empty
                // buffer when reading an empty file. Not sure why this is.
                if (content === null) {
                    buffer = util_1.emptyBuffer();
                }
                else {
                    buffer = util_1.arrayBuffer2Buffer(content);
                }
                var file = _this._makeFile(path, flags, dbStat, buffer);
                return cb(null, file);
            }
        });
    };
    DropboxFileSystem.prototype._writeFileStrict = function (p, data, cb) {
        var _this = this;
        var parent = path.dirname(p);
        this.stat(parent, false, function (error, stat) {
            if (error) {
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, parent));
            }
            else {
                _this._client.writeFile(p, data, function (error2, stat) {
                    if (error2) {
                        cb(_this.convert(error2, p));
                    }
                    else {
                        cb(null, stat);
                    }
                });
            }
        });
    };
    /**
     * Private
     * Returns a BrowserFS object representing the type of a Dropbox.js stat object
     */
    DropboxFileSystem.prototype._statType = function (stat) {
        return stat.isFile ? node_fs_stats_1.FileType.FILE : node_fs_stats_1.FileType.DIRECTORY;
    };
    /**
     * Private
     * Returns a BrowserFS object representing a File, created from the data
     * returned by calls to the Dropbox API.
     */
    DropboxFileSystem.prototype._makeFile = function (path, flag, stat, buffer) {
        var type = this._statType(stat);
        var stats = new node_fs_stats_1["default"](type, stat.size);
        return new DropboxFile(this, path, flag, stats, buffer);
    };
    /**
     * Private
     * Delete a file or directory from Dropbox
     * isFile should reflect which call was made to remove the it (`unlink` or
     * `rmdir`). If this doesn't match what's actually at `path`, an error will be
     * returned
     */
    DropboxFileSystem.prototype._remove = function (path, cb, isFile) {
        var _this = this;
        this._client.stat(path, function (error, stat) {
            if (error) {
                cb(_this.convert(error, path));
            }
            else {
                if (stat.isFile && !isFile) {
                    cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOTDIR, path));
                }
                else if (!stat.isFile && isFile) {
                    cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EISDIR, path));
                }
                else {
                    _this._client.remove(path, function (error) {
                        if (error) {
                            cb(_this.convert(error, path));
                        }
                        else {
                            cb(null);
                        }
                    });
                }
            }
        });
    };
    /**
     * Delete a file
     */
    DropboxFileSystem.prototype.unlink = function (path, cb) {
        this._remove(path, cb, true);
    };
    /**
     * Delete a directory
     */
    DropboxFileSystem.prototype.rmdir = function (path, cb) {
        this._remove(path, cb, false);
    };
    /**
     * Create a directory
     */
    DropboxFileSystem.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        // Dropbox.js' client.mkdir() behaves like `mkdir -p`, i.e. it creates a
        // directory and all its ancestors if they don't exist.
        // Node's fs.mkdir() behaves like `mkdir`, i.e. it throws an error if an attempt
        // is made to create a directory without a parent.
        // To handle this inconsistency, a check for the existence of `path`'s parent
        // must be performed before it is created, and an error thrown if it does
        // not exist
        var parent = path.dirname(p);
        this._client.stat(parent, function (error, stat) {
            if (error) {
                cb(_this.convert(error, parent));
            }
            else {
                _this._client.mkdir(p, function (error) {
                    if (error) {
                        cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EEXIST, p));
                    }
                    else {
                        cb(null);
                    }
                });
            }
        });
    };
    /**
     * Get the names of the files in a directory
     */
    DropboxFileSystem.prototype.readdir = function (path, cb) {
        var _this = this;
        this._client.readdir(path, function (error, files) {
            if (error) {
                return cb(_this.convert(error));
            }
            else {
                return cb(null, files);
            }
        });
    };
    /**
     * Converts a Dropbox-JS error into a BFS error.
     */
    DropboxFileSystem.prototype.convert = function (err, path) {
        if (path === void 0) { path = null; }
        var errorCode = errorCodeLookup[err.status];
        if (errorCode === undefined) {
            errorCode = api_error_1.ErrorCode.EIO;
        }
        if (!path) {
            return new api_error_1.ApiError(errorCode);
        }
        else {
            return api_error_1.ApiError.FileError(errorCode, path);
        }
    };
    return DropboxFileSystem;
}(file_system_1.BaseFileSystem));
exports["default"] = DropboxFileSystem;
//# sourceMappingURL=Dropbox.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(10)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var node_fs_stats_1 = __webpack_require__(5);
var file_1 = __webpack_require__(13);
var util_1 = __webpack_require__(1);
var api_error_1 = __webpack_require__(0);
/**
 * @hidden
 */
function convertError(e, path) {
    if (path === void 0) { path = ''; }
    var errno = e.errno;
    var parent = e.node;
    var paths = [];
    while (parent) {
        paths.unshift(parent.name);
        if (parent === parent.parent) {
            break;
        }
        parent = parent.parent;
    }
    return new api_error_1.ApiError(errno, api_error_1.ErrorStrings[errno], paths.length > 0 ? '/' + paths.join('/') : path);
}
var EmscriptenFile = (function (_super) {
    __extends(EmscriptenFile, _super);
    function EmscriptenFile(_fs, _FS, _path, _stream) {
        var _this = _super.call(this) || this;
        _this._fs = _fs;
        _this._FS = _FS;
        _this._path = _path;
        _this._stream = _stream;
        return _this;
    }
    EmscriptenFile.prototype.getPos = function () {
        return undefined;
    };
    EmscriptenFile.prototype.close = function (cb) {
        var err = null;
        try {
            this.closeSync();
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.closeSync = function () {
        try {
            this._FS.close(this._stream);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.stat = function (cb) {
        try {
            cb(null, this.statSync());
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.statSync = function () {
        try {
            return this._fs.statSync(this._path, false);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.truncate = function (len, cb) {
        var err = null;
        try {
            this.truncateSync(len);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.truncateSync = function (len) {
        try {
            this._FS.ftruncate(this._stream.fd, len);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.write = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.writeSync = function (buffer, offset, length, position) {
        try {
            var u8 = util_1.buffer2Uint8array(buffer);
            // Emscripten is particular about what position is set to.
            var emPosition = position === null ? undefined : position;
            return this._FS.write(this._stream, u8, offset, length, emPosition);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.read = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.readSync = function (buffer, offset, length, position) {
        try {
            var u8 = util_1.buffer2Uint8array(buffer);
            // Emscripten is particular about what position is set to.
            var emPosition = position === null ? undefined : position;
            return this._FS.read(this._stream, u8, offset, length, emPosition);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.sync = function (cb) {
        // NOP.
        cb();
    };
    EmscriptenFile.prototype.syncSync = function () {
        // NOP.
    };
    EmscriptenFile.prototype.chown = function (uid, gid, cb) {
        var err = null;
        try {
            this.chownSync(uid, gid);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.chownSync = function (uid, gid) {
        try {
            this._FS.fchown(this._stream.fd, uid, gid);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.chmod = function (mode, cb) {
        var err = null;
        try {
            this.chmodSync(mode);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.chmodSync = function (mode) {
        try {
            this._FS.fchmod(this._stream.fd, mode);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.utimes = function (atime, mtime, cb) {
        var err = null;
        try {
            this.utimesSync(atime, mtime);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.utimesSync = function (atime, mtime) {
        this._fs.utimesSync(this._path, atime, mtime);
    };
    return EmscriptenFile;
}(file_1.BaseFile));
exports.EmscriptenFile = EmscriptenFile;
/**
 * Mounts an Emscripten file system into the BrowserFS file system.
 */
var EmscriptenFileSystem = (function (_super) {
    __extends(EmscriptenFileSystem, _super);
    /**
     * Creates a BrowserFS file system for the given Emscripten file system.
     * @param _FS The Emscripten file system (`FS`).
     */
    function EmscriptenFileSystem(_FS) {
        var _this = _super.call(this) || this;
        _this._FS = _FS;
        return _this;
    }
    EmscriptenFileSystem.isAvailable = function () { return true; };
    EmscriptenFileSystem.prototype.getName = function () { return this._FS.DB_NAME(); };
    EmscriptenFileSystem.prototype.isReadOnly = function () { return false; };
    EmscriptenFileSystem.prototype.supportsLinks = function () { return true; };
    EmscriptenFileSystem.prototype.supportsProps = function () { return true; };
    EmscriptenFileSystem.prototype.supportsSynch = function () { return true; };
    EmscriptenFileSystem.prototype.renameSync = function (oldPath, newPath) {
        try {
            this._FS.rename(oldPath, newPath);
        }
        catch (e) {
            if (e.errno === api_error_1.ErrorCode.ENOENT) {
                throw convertError(e, this.existsSync(oldPath) ? newPath : oldPath);
            }
            else {
                throw convertError(e);
            }
        }
    };
    EmscriptenFileSystem.prototype.statSync = function (p, isLstat) {
        try {
            var stats = isLstat ? this._FS.lstat(p) : this._FS.stat(p);
            var itemType = this.modeToFileType(stats.mode);
            return new node_fs_stats_1["default"](itemType, stats.size, stats.mode, stats.atime, stats.mtime, stats.ctime);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.openSync = function (p, flag, mode) {
        try {
            var stream = this._FS.open(p, flag.getFlagString(), mode);
            if (this._FS.isDir(stream.node.mode)) {
                this._FS.close(stream);
                throw api_error_1.ApiError.EISDIR(p);
            }
            return new EmscriptenFile(this, this._FS, p, stream);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.unlinkSync = function (p) {
        try {
            this._FS.unlink(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.rmdirSync = function (p) {
        try {
            this._FS.rmdir(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.mkdirSync = function (p, mode) {
        try {
            this._FS.mkdir(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.readdirSync = function (p) {
        try {
            // Emscripten returns items for '.' and '..'. Node does not.
            return this._FS.readdir(p).filter(function (p) { return p !== '.' && p !== '..'; });
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.truncateSync = function (p, len) {
        try {
            this._FS.truncate(p, len);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.readFileSync = function (p, encoding, flag) {
        try {
            var data = this._FS.readFile(p, { flags: flag.getFlagString() });
            var buff = util_1.uint8Array2Buffer(data);
            if (encoding) {
                return buff.toString(encoding);
            }
            else {
                return buff;
            }
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.writeFileSync = function (p, data, encoding, flag, mode) {
        try {
            if (encoding) {
                data = Buffer.from(data, encoding);
            }
            var u8 = util_1.buffer2Uint8array(data);
            this._FS.writeFile(p, u8, { flags: flag.getFlagString(), encoding: 'binary' });
            this._FS.chmod(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.chmodSync = function (p, isLchmod, mode) {
        try {
            isLchmod ? this._FS.lchmod(p, mode) : this._FS.chmod(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.chownSync = function (p, isLchown, uid, gid) {
        try {
            isLchown ? this._FS.lchown(p, uid, gid) : this._FS.chown(p, uid, gid);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.symlinkSync = function (srcpath, dstpath, type) {
        try {
            this._FS.symlink(srcpath, dstpath);
        }
        catch (e) {
            throw convertError(e);
        }
    };
    EmscriptenFileSystem.prototype.readlinkSync = function (p) {
        try {
            return this._FS.readlink(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.utimesSync = function (p, atime, mtime) {
        try {
            this._FS.utime(p, atime.getTime(), mtime.getTime());
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.modeToFileType = function (mode) {
        if (this._FS.isDir(mode)) {
            return node_fs_stats_1.FileType.DIRECTORY;
        }
        else if (this._FS.isFile(mode)) {
            return node_fs_stats_1.FileType.FILE;
        }
        else if (this._FS.isLink(mode)) {
            return node_fs_stats_1.FileType.SYMLINK;
        }
        else {
            throw api_error_1.ApiError.EPERM("Invalid mode: " + mode);
        }
    };
    return EmscriptenFileSystem;
}(file_system_1.SynchronousFileSystem));
exports["default"] = EmscriptenFileSystem;
//# sourceMappingURL=Emscripten.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var path = __webpack_require__(3);
var api_error_1 = __webpack_require__(0);
/**
 * The FolderAdapter file system wraps a file system, and scopes all interactions to a subfolder of that file system.
 */
var FolderAdapter = (function (_super) {
    __extends(FolderAdapter, _super);
    /**
     * Wraps a file system, and uses the given folder as its root.
     *
     * Example: Given a file system `foo` with folder `bar` and file `bar/baz`...
     *
     * ```javascript
     * var adapter = new BrowserFS.FileSystem.FolderAdapter('bar', foo);
     * adapter.readdirSync('/'); // ['baz']
     * ```
     *
     * @param folder The folder to use as the root directory.
     * @param wrapped The file system to wrap.
     */
    function FolderAdapter(folder, wrapped) {
        var _this = _super.call(this) || this;
        _this._folder = folder;
        _this._wrapped = wrapped;
        return _this;
    }
    FolderAdapter.isAvailable = function () {
        return true;
    };
    /**
     * Initialize the file system. Ensures that the wrapped file system
     * has the given folder.
     */
    FolderAdapter.prototype.initialize = function (cb) {
        var _this = this;
        this._wrapped.exists(this._folder, function (exists) {
            if (exists) {
                cb();
            }
            else if (_this._wrapped.isReadOnly()) {
                cb(api_error_1.ApiError.ENOENT(_this._folder));
            }
            else {
                _this._wrapped.mkdir(_this._folder, 0x1ff, cb);
            }
        });
    };
    FolderAdapter.prototype.getName = function () { return this._wrapped.getName(); };
    FolderAdapter.prototype.isReadOnly = function () { return this._wrapped.isReadOnly(); };
    FolderAdapter.prototype.supportsProps = function () { return this._wrapped.supportsProps(); };
    FolderAdapter.prototype.supportsSynch = function () { return this._wrapped.supportsSynch(); };
    FolderAdapter.prototype.supportsLinks = function () { return false; };
    return FolderAdapter;
}(file_system_1.BaseFileSystem));
exports["default"] = FolderAdapter;
/**
 * @hidden
 */
function translateError(folder, e) {
    if (e !== null && typeof e === 'object') {
        var err = e;
        var p = err.path;
        if (p) {
            p = '/' + path.relative(folder, p);
            err.message = err.message.replace(err.path, p);
            err.path = p;
        }
    }
    return e;
}
/**
 * @hidden
 */
function wrapCallback(folder, cb) {
    if (typeof cb === 'function') {
        return function (err) {
            if (arguments.length > 0) {
                arguments[0] = translateError(folder, err);
            }
            cb.apply(null, arguments);
        };
    }
    else {
        return cb;
    }
}
/**
 * @hidden
 */
function wrapFunction(name, wrapFirst, wrapSecond) {
    if (name.slice(name.length - 4) !== 'Sync') {
        // Async function. Translate error in callback.
        return function () {
            if (arguments.length > 0) {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                arguments[arguments.length - 1] = wrapCallback(this._folder, arguments[arguments.length - 1]);
            }
            return this._wrapped[name].apply(this._wrapped, arguments);
        };
    }
    else {
        // Sync function. Translate error in catch.
        return function () {
            try {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                return this._wrapped[name].apply(this._wrapped, arguments);
            }
            catch (e) {
                throw translateError(this._folder, e);
            }
        };
    }
}
// First argument is a path.
['diskSpace', 'stat', 'statSync', 'open', 'openSync', 'unlink', 'unlinkSync',
    'rmdir', 'rmdirSync', 'mkdir', 'mkdirSync', 'readdir', 'readdirSync', 'exists',
    'existsSync', 'realpath', 'realpathSync', 'truncate', 'truncateSync', 'readFile',
    'readFileSync', 'writeFile', 'writeFileSync', 'appendFile', 'appendFileSync',
    'chmod', 'chmodSync', 'chown', 'chownSync', 'utimes', 'utimesSync', 'readlink',
    'readlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, false);
});
// First and second arguments are paths.
['rename', 'renameSync', 'link', 'linkSync', 'symlink', 'symlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, true);
});
//# sourceMappingURL=FolderAdapter.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preload_file_1 = __webpack_require__(7);
var file_system_1 = __webpack_require__(4);
var file_flag_1 = __webpack_require__(6);
var node_fs_stats_1 = __webpack_require__(5);
var api_error_1 = __webpack_require__(0);
var path = __webpack_require__(3);
var util_1 = __webpack_require__(1);
/**
 * A read/write file system backed by Google Drive cloud storage.
 *
 * Uses the Google REST API.
 *
 */
var GoogleDriveFileSystem = (function (_super) {
    __extends(GoogleDriveFileSystem, _super);
    function GoogleDriveFileSystem(oauthToken) {
        var _this = _super.call(this) || this;
        _this.files = new Map();
        _this._oauthToken = oauthToken;
        return _this;
    }
    GoogleDriveFileSystem.isAvailable = function () {
        return true;
    };
    GoogleDriveFileSystem.prototype.getName = function () {
        return 'Google Drive';
    };
    GoogleDriveFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    GoogleDriveFileSystem.prototype.supportsProps = function () {
        return false;
    };
    GoogleDriveFileSystem.prototype.supportsSynch = function () {
        return false;
    };
    GoogleDriveFileSystem.prototype.supportsSymlinks = function () {
        return false;
    };
    GoogleDriveFileSystem.prototype.supportsLinks = function () {
        return false;
    };
    GoogleDriveFileSystem.prototype.empty = function (mainCb) {
        mainCb();
    };
    GoogleDriveFileSystem.prototype.stat = function (p, isLstat, cb) {
        // Ignore lstat case -- GoogleDrive doesn't support symlinks
        // Stat the file
        if (p === '/') {
            // assume the root directory exists
            var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, 0, 0);
            return cb(null, stats);
        }
        else {
            var title = path.basename(p);
            var request = gapi.client.drive.files.list({
                q: "title = '" + title + "'"
            });
            request.execute(function (resp) {
                if (typeof resp.items !== 'undefined' && typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                    var id = resp.items[0].id;
                    var secondRequest = gapi.client.drive.files.get({
                        fileId: id
                    });
                    secondRequest.execute(function (resp) {
                        var type = resp.mimeType;
                        if (type === 'application/vnd.google-apps.folder') {
                            var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, 0, 0);
                            return cb(null, stats);
                        }
                        else {
                            var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, 0, 0);
                            return cb(null, stats);
                        }
                    });
                }
                else {
                    return cb(api_error_1.ApiError.ENOENT(p));
                }
            });
        }
    };
    /**
     * Create a directory
     */
    GoogleDriveFileSystem.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        var title = path.basename(p);
        var dir = path.dirname(p);
        var base = path.basename(dir);
        if (base === '.' || base === '/' || base === '') {
            var accessToken = this._oauthToken;
            var secondRequest = gapi.client.request({
                path: '/drive/v2/files/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    title: title,
                    mimeType: 'application/vnd.google-apps.folder'
                }
            });
            secondRequest.execute(function (resp) {
                cb(null);
            });
        }
        else {
            var request = gapi.client.drive.files.list({
                q: "title = '" + base + "'"
            });
            request.execute(function (resp) {
                if (typeof resp.items !== 'undefined' && typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                    var id = resp.items[0].id;
                    var accessToken = _this._oauthToken;
                    var secondRequest = gapi.client.request({
                        path: '/drive/v2/files/',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + accessToken
                        },
                        body: {
                            title: title,
                            parents: [{
                                    id: id
                                }],
                            mimeType: 'application/vnd.google-apps.folder'
                        }
                    });
                    secondRequest.execute(function (resp) {
                        cb(null);
                    });
                }
                else {
                    return cb(api_error_1.ApiError.ENOENT(dir));
                }
            });
        }
    };
    GoogleDriveFileSystem.prototype._writeFileStrict = function (p, data, cb) {
        var _this = this;
        var parent = path.dirname(p);
        var title = path.basename(p);
        this.stat(parent, false, function (error, stat) {
            if (error) {
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, parent));
            }
            else {
                _this.writeFile(title, data, null, new file_flag_1.FileFlag('w'), 0, cb);
                cb(null);
            }
        });
    };
    GoogleDriveFileSystem.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        var request = gapi.client.drive.files.list({
            q: "title = '" + fname + "'"
        });
        request.execute(function (resp) {
            if (typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                var id = resp.items[0].id;
                var boundary = '-------314159265358979323846';
                var delimiter = "\r\n--" + boundary + "\r\n";
                var closeDelim = "\r\n--" + boundary + "--";
                var contentType = "text/html";
                var metadata = {
                    mimeType: contentType
                };
                var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' +
                    JSON.stringify(metadata) +
                    delimiter + 'Content-Type: ' + contentType + '\r\n' + '\r\n' +
                    data +
                    closeDelim;
                var callback = function (file) {
                    cb(null);
                };
                (gapi.client.request)({
                    path: '/upload/drive/v3/files/' + id + "&uploadType=multipart",
                    method: 'PATCH',
                    params: {
                        fileId: id,
                        uploadType: 'multipart'
                    },
                    headers: {
                        'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                    },
                    body: multipartRequestBody,
                    callback: callback
                });
            }
            else {
                throw new Error("The file does not exist and cannot be updated");
            }
        });
    };
    /**
     * Get the names of the files in a directory
     */
    GoogleDriveFileSystem.prototype.readdir = function (p, cb) {
        var title = path.basename(p);
        var i = 0;
        var nameArray;
        nameArray = [];
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'"
        });
        request.execute(function (resp) {
            var listCb = function (resp3) {
                var getCb = function (resp2) {
                    nameArray.push(resp2.title);
                    i++;
                    if (i < resp3.items.length) {
                        var secondRequest = gapi.client.drive.files.get({
                            fileId: resp3.items[i].id
                        });
                        secondRequest.execute(getCb);
                    }
                    else {
                        return cb(null, nameArray);
                    }
                };
                var initialGetRequest = gapi.client.drive.files.get({
                    fileId: resp3.items[i].id
                });
                initialGetRequest.execute(getCb);
            };
            var id = resp.items[0].id;
            var retrievePageOfChildren = function (request, result) {
                request.execute(listCb);
            };
            var initialRequest = (gapi.client.drive).children.list({
                folderId: id
            });
            retrievePageOfChildren(initialRequest, []);
        });
    };
    /**
     * Private
     * Delete a file or directory from Google Drive
     * isFile should reflect which call was made to remove the it (`unlink` or
     * `rmdir`). If this doesn't match what's actually at `path`, an error will be
     * returned
     */
    GoogleDriveFileSystem.prototype._remove = function (p, cb) {
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'"
        });
        request.execute(function (resp) {
            var id = resp.items[0].id;
            var secondRequest = gapi.client.drive.files.trash({
                fileId: id
            });
            secondRequest.execute(function (resp) {
                cb(null);
            });
        });
    };
    /**
     * Delete a directory
     */
    GoogleDriveFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'"
        });
        request.execute(function (resp) {
            if (typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                var id = resp.items[0].id;
                var secondRequest = gapi.client.drive.files.get({
                    fileId: id
                });
                secondRequest.execute(function (resp) {
                    var type = resp.mimeType;
                    if (type === 'application/vnd.google-apps.folder') {
                        _this._remove(p, cb);
                    }
                    else {
                        throw new Error("Error: it is a file !");
                    }
                });
            }
            else {
                throw new Error("That path does not exist");
            }
        });
    };
    /**
     * Delete a file
     */
    GoogleDriveFileSystem.prototype.unlink = function (p, cb) {
        var _this = this;
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'"
        });
        request.execute(function (resp) {
            if (typeof resp.items[0] !== 'undefined' && typeof resp.items[0].id !== 'undefined') {
                var id = resp.items[0].id;
                var secondRequest = gapi.client.drive.files.get({
                    fileId: id
                });
                secondRequest.execute(function (resp) {
                    var type = resp.mimeType;
                    if (type === 'application/vnd.google-apps.folder') {
                        throw new Error("Error: it is a file !");
                    }
                    else {
                        _this._remove(p, cb);
                    }
                });
            }
            else {
                throw new Error("That path does not exist");
            }
        });
    };
    GoogleDriveFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        var _this = this;
        var title = path.basename(p);
        var dir = path.dirname(p);
        var base = path.basename(dir);
        var request = gapi.client.drive.files.list({
            q: "title = '" + base + "'"
        });
        request.execute(function (resp) {
            var id = resp.items[0].id;
            var accessToken = _this._oauthToken;
            var secondRequest = gapi.client.request({
                path: '/drive/v2/files/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    title: title,
                    parents: [{
                            id: id
                        }],
                    mimeType: "text/html"
                }
            });
            secondRequest.execute(function (resp) {
                var buffer = util_1.arrayBuffer2Buffer(new ArrayBuffer(0));
                var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, buffer.length, 0);
                var file = new GoogleDriveFile(_this, title, flag, stats, buffer);
                cb(null, file);
            });
        });
    };
    GoogleDriveFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var oldTitle = path.basename(oldPath);
        var newTitle = path.basename(newPath);
        var newDir = path.dirname(newPath);
        var newBase = path.basename(newDir);
        var request = gapi.client.drive.files.list({
            q: "title = '" + oldTitle + "'"
        });
        request.execute(function (resp) {
            var fileId = resp.items[0].id;
            var secondRequest = gapi.client.drive.files.list({
                q: "title = '" + newBase + "'"
            });
            secondRequest.execute(function (resp) {
                var folderId = resp.items[0].id;
                var body = { id: folderId };
                var thirdRequest = (gapi.client.drive).parents.insert({
                    fileId: fileId,
                    resource: body
                });
                thirdRequest.execute(function (resp) {
                    cb(null);
                });
                var secondBody = { title: newTitle };
                var fourthRequest = (gapi.client.drive.files).patch({
                    fileId: fileId,
                    resource: secondBody
                });
                fourthRequest.execute(function (resp) {
                    cb(null);
                });
            });
        });
    };
    /**
     * Opens the file at path p with the given flag. The file must exist.
     * @param p The path to open.
     * @param flag The flag to use when opening the file.
     */
    GoogleDriveFileSystem.prototype.openFile = function (p, flag, cb) {
        var _this = this;
        var title = path.basename(p);
        var request = gapi.client.drive.files.list({
            q: "title = '" + title + "'"
        });
        request.execute(function (resp) {
            var id = resp.items[0].id;
            // make the request to the google drive server
            gapi.client.request({
                path: '/drive/v2/files/' + id,
                method: 'GET'
            }).execute(function (obj) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", obj.downloadUrl);
                xhr.setRequestHeader("Authorization", "Bearer " + gapi.auth.getToken().access_token);
                xhr.onload = function () {
                    var data = xhr.response;
                    var buffer = util_1.arrayBuffer2Buffer(data);
                    var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, buffer.length, 0);
                    var file = new GoogleDriveFile(_this, title, flag, stats, buffer);
                    _this.files.set(title, file);
                    cb(null, file);
                };
                xhr.send();
            });
        });
    };
    GoogleDriveFileSystem.prototype.readFile = function (fname, encoding, flag, cb) {
        var gdriveFile = this.files.get(fname);
        if (gdriveFile !== undefined) {
            cb(null, gdriveFile.getBuffer());
        }
        else {
            throw new Error('gdriveFile is undefined');
        }
    };
    return GoogleDriveFileSystem;
}(file_system_1.BaseFileSystem));
exports["default"] = GoogleDriveFileSystem;
var GoogleDriveFile = (function (_super) {
    __extends(GoogleDriveFile, _super);
    function GoogleDriveFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    // public sync(cb: BFSOneArgCallback): void {
    //   cb();
    // }
    GoogleDriveFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            var buffer = this.getBuffer(), arrayBuffer = util_1.buffer2ArrayBuffer(buffer);
            this._fs._writeFileStrict(this.getPath(), arrayBuffer, function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    GoogleDriveFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return GoogleDriveFile;
}(preload_file_1["default"]));
exports.GoogleDriveFile = GoogleDriveFile;
//# sourceMappingURL=GoogleDrive.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preload_file_1 = __webpack_require__(7);
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var node_fs_stats_1 = __webpack_require__(5);
var path = __webpack_require__(3);
var global_1 = __webpack_require__(9);
var async_1 = __webpack_require__(16);
var util_1 = __webpack_require__(1);
/**
 * @hidden
 */
function isDirectoryEntry(entry) {
    return entry.isDirectory;
}
/**
 * @hidden
 */
var _getFS = global_1["default"].webkitRequestFileSystem || global_1["default"].requestFileSystem || null;
/**
 * @hidden
 */
function _requestQuota(type, size, success, errorCallback) {
    // We cast navigator and window to '<any>' because everything here is
    // nonstandard functionality, despite the fact that Chrome has the only
    // implementation of the HTML5FS and is likely driving the standardization
    // process. Thus, these objects defined off of navigator and window are not
    // present in the DefinitelyTyped TypeScript typings for FileSystem.
    if (typeof navigator['webkitPersistentStorage'] !== 'undefined') {
        switch (type) {
            case global_1["default"].PERSISTENT:
                navigator.webkitPersistentStorage.requestQuota(size, success, errorCallback);
                break;
            case global_1["default"].TEMPORARY:
                navigator.webkitTemporaryStorage.requestQuota(size, success, errorCallback);
                break;
            default:
                errorCallback(new TypeError("Invalid storage type: " + type));
                break;
        }
    }
    else {
        global_1["default"].webkitStorageInfo.requestQuota(type, size, success, errorCallback);
    }
}
/**
 * @hidden
 */
function _toArray(list) {
    return Array.prototype.slice.call(list || [], 0);
}
/**
 * Converts the given DOMError into an appropriate ApiError.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/DOMError
 * @hidden
 */
function convertError(err, p, expectedDir) {
    switch (err.name) {
        /* The user agent failed to create a file or directory due to the existence of a file or
            directory with the same path.  */
        case "PathExistsError":
            return api_error_1.ApiError.EEXIST(p);
        /* The operation failed because it would cause the application to exceed its storage quota.  */
        case 'QuotaExceededError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOSPC, p);
        /*  A required file or directory could not be found at the time an operation was processed.   */
        case 'NotFoundError':
            return api_error_1.ApiError.ENOENT(p);
        /* This is a security error code to be used in situations not covered by any other error codes.
            - A required file was unsafe for access within a Web application
            - Too many calls are being made on filesystem resources */
        case 'SecurityError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EACCES, p);
        /* The modification requested was illegal. Examples of invalid modifications include moving a
            directory into its own child, moving a file into its parent directory without changing its name,
            or copying a directory to a path occupied by a file.  */
        case 'InvalidModificationError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EPERM, p);
        /* The user has attempted to look up a file or directory, but the Entry found is of the wrong type
            [e.g. is a DirectoryEntry when the user requested a FileEntry].  */
        case 'TypeMismatchError':
            return api_error_1.ApiError.FileError(expectedDir ? api_error_1.ErrorCode.ENOTDIR : api_error_1.ErrorCode.EISDIR, p);
        /* A path or URL supplied to the API was malformed.  */
        case "EncodingError":
        /* An operation depended on state cached in an interface object, but that state that has changed
            since it was read from disk.  */
        case "InvalidStateError":
        /* The user attempted to write to a file or directory which could not be modified due to the state
            of the underlying filesystem.  */
        case "NoModificationAllowedError":
        default:
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, p);
    }
}
// A note about getFile and getDirectory options:
// These methods are called at numerous places in this file, and are passed
// some combination of these two options:
//   - create: If true, the entry will be created if it doesn't exist.
//             If false, an error will be thrown if it doesn't exist.
//   - exclusive: If true, only create the entry if it doesn't already exist,
//                and throw an error if it does.
var HTML5FSFile = (function (_super) {
    __extends(HTML5FSFile, _super);
    function HTML5FSFile(fs, entry, path, flag, stat, contents) {
        var _this = _super.call(this, fs, path, flag, stat, contents) || this;
        _this._entry = entry;
        return _this;
    }
    HTML5FSFile.prototype.sync = function (cb) {
        var _this = this;
        if (!this.isDirty()) {
            return cb();
        }
        this._entry.createWriter(function (writer) {
            var buffer = _this.getBuffer();
            var blob = new Blob([util_1.buffer2ArrayBuffer(buffer)]);
            var length = blob.size;
            writer.onwriteend = function (err) {
                writer.onwriteend = null;
                writer.onerror = null;
                writer.truncate(length);
                _this.resetDirty();
                cb();
            };
            writer.onerror = function (err) {
                cb(convertError(err, _this.getPath(), false));
            };
            writer.write(blob);
        });
    };
    HTML5FSFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return HTML5FSFile;
}(preload_file_1["default"]));
exports.HTML5FSFile = HTML5FSFile;
/**
 * A read-write filesystem backed by the HTML5 FileSystem API.
 *
 * As the HTML5 FileSystem is only implemented in Blink, this interface is
 * only available in Chrome.
 */
var HTML5FS = (function (_super) {
    __extends(HTML5FS, _super);
    /**
     * Creates a new HTML5 FileSystem-backed BrowserFS file system of the given size
     * and storage type.
     *
     * **IMPORTANT**: You must call `allocate` on the resulting object before the file system
     * can be used.
     *
     * @param size storage quota to request, in megabytes. Allocated value may be less.
     * @param type window.PERSISTENT or window.TEMPORARY. Defaults to PERSISTENT.
     */
    function HTML5FS(size, type) {
        if (size === void 0) { size = 5; }
        if (type === void 0) { type = global_1["default"].PERSISTENT; }
        var _this = _super.call(this) || this;
        // Convert MB to bytes.
        _this.size = 1024 * 1024 * size;
        _this.type = type;
        return _this;
    }
    HTML5FS.isAvailable = function () {
        return !!_getFS;
    };
    HTML5FS.prototype.getName = function () {
        return 'HTML5 FileSystem';
    };
    HTML5FS.prototype.isReadOnly = function () {
        return false;
    };
    HTML5FS.prototype.supportsSymlinks = function () {
        return false;
    };
    HTML5FS.prototype.supportsProps = function () {
        return false;
    };
    HTML5FS.prototype.supportsSynch = function () {
        return false;
    };
    /**
     * Requests a storage quota from the browser to back this FS.
     * Must be called before file system can be used!
     */
    HTML5FS.prototype.allocate = function (cb) {
        var _this = this;
        if (cb === void 0) { cb = function () { }; }
        var success = function (fs) {
            _this.fs = fs;
            cb();
        };
        var error = function (err) {
            cb(convertError(err, "/", true));
        };
        if (this.type === global_1["default"].PERSISTENT) {
            _requestQuota(this.type, this.size, function (granted) {
                _getFS(_this.type, granted, success, error);
            }, error);
        }
        else {
            _getFS(this.type, this.size, success, error);
        }
    };
    /**
     * Deletes everything in the FS. Used for testing.
     * Karma clears the storage after you quit it but not between runs of the test
     * suite, and the tests expect an empty FS every time.
     */
    HTML5FS.prototype.empty = function (mainCb) {
        // Get a list of all entries in the root directory to delete them
        this._readdir('/', function (err, entries) {
            if (err) {
                console.error('Failed to empty FS');
                mainCb(err);
            }
            else {
                // Called when every entry has been operated on
                var finished = function (er) {
                    if (err) {
                        console.error("Failed to empty FS");
                        mainCb(err);
                    }
                    else {
                        mainCb();
                    }
                };
                // Removes files and recursively removes directories
                var deleteEntry = function (entry, cb) {
                    var succ = function () {
                        cb();
                    };
                    var error = function (err) {
                        cb(convertError(err, entry.fullPath, !entry.isDirectory));
                    };
                    if (isDirectoryEntry(entry)) {
                        entry.removeRecursively(succ, error);
                    }
                    else {
                        entry.remove(succ, error);
                    }
                };
                // Loop through the entries and remove them, then call the callback
                // when they're all finished.
                async_1.each(entries, deleteEntry, finished);
            }
        });
    };
    HTML5FS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        var semaphore = 2;
        var successCount = 0;
        var root = this.fs.root;
        var currentPath = oldPath;
        var error = function (err) {
            if (--semaphore <= 0) {
                cb(convertError(err, currentPath, false));
            }
        };
        var success = function (file) {
            if (++successCount === 2) {
                return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Something was identified as both a file and a directory. This should never happen."));
            }
            // SPECIAL CASE: If newPath === oldPath, and the path exists, then
            // this operation trivially succeeds.
            if (oldPath === newPath) {
                return cb();
            }
            // Get the new parent directory.
            currentPath = path.dirname(newPath);
            root.getDirectory(currentPath, {}, function (parentDir) {
                currentPath = path.basename(newPath);
                file.moveTo(parentDir, currentPath, function (entry) { cb(); }, function (err) {
                    // SPECIAL CASE: If oldPath is a directory, and newPath is a
                    // file, rename should delete the file and perform the move.
                    if (file.isDirectory) {
                        currentPath = newPath;
                        // Unlink only works on files. Try to delete newPath.
                        _this.unlink(newPath, function (e) {
                            if (e) {
                                // newPath is probably a directory.
                                error(err);
                            }
                            else {
                                // Recur, now that newPath doesn't exist.
                                _this.rename(oldPath, newPath, cb);
                            }
                        });
                    }
                    else {
                        error(err);
                    }
                });
            }, error);
        };
        // We don't know if oldPath is a *file* or a *directory*, and there's no
        // way to stat items. So launch both requests, see which one succeeds.
        root.getFile(oldPath, {}, success, error);
        root.getDirectory(oldPath, {}, success, error);
    };
    HTML5FS.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        // Throw an error if the entry doesn't exist, because then there's nothing
        // to stat.
        var opts = {
            create: false
        };
        // Called when the path has been successfully loaded as a file.
        var loadAsFile = function (entry) {
            var fileFromEntry = function (file) {
                var stat = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, file.size);
                cb(null, stat);
            };
            entry.file(fileFromEntry, failedToLoad);
        };
        // Called when the path has been successfully loaded as a directory.
        var loadAsDir = function (dir) {
            // Directory entry size can't be determined from the HTML5 FS API, and is
            // implementation-dependant anyway, so a dummy value is used.
            var size = 4096;
            var stat = new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, size);
            cb(null, stat);
        };
        // Called when the path couldn't be opened as a directory or a file.
        var failedToLoad = function (err) {
            cb(convertError(err, path, false /* Unknown / irrelevant */));
        };
        // Called when the path couldn't be opened as a file, but might still be a
        // directory.
        var failedToLoadAsFile = function () {
            _this.fs.root.getDirectory(path, opts, loadAsDir, failedToLoad);
        };
        // No method currently exists to determine whether a path refers to a
        // directory or a file, so this implementation tries both and uses the first
        // one that succeeds.
        this.fs.root.getFile(path, opts, loadAsFile, failedToLoadAsFile);
    };
    HTML5FS.prototype.open = function (p, flags, mode, cb) {
        var _this = this;
        // XXX: err is a DOMError
        var error = function (err) {
            if (err.name === 'InvalidModificationError' && flags.isExclusive()) {
                cb(api_error_1.ApiError.EEXIST(p));
            }
            else {
                cb(convertError(err, p, false));
            }
        };
        this.fs.root.getFile(p, {
            create: flags.pathNotExistsAction() === file_flag_1.ActionType.CREATE_FILE,
            exclusive: flags.isExclusive()
        }, function (entry) {
            // Try to fetch corresponding file.
            entry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    var bfsFile = _this._makeFile(p, entry, flags, file, reader.result);
                    cb(null, bfsFile);
                };
                reader.onerror = function (ev) {
                    error(reader.error);
                };
                reader.readAsArrayBuffer(file);
            }, error);
        }, error);
    };
    HTML5FS.prototype.unlink = function (path, cb) {
        this._remove(path, cb, true);
    };
    HTML5FS.prototype.rmdir = function (path, cb) {
        var _this = this;
        // Check if directory is non-empty, first.
        this.readdir(path, function (e, files) {
            if (e) {
                cb(e);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(path));
            }
            else {
                _this._remove(path, cb, false);
            }
        });
    };
    HTML5FS.prototype.mkdir = function (path, mode, cb) {
        // Create the directory, but throw an error if it already exists, as per
        // mkdir(1)
        var opts = {
            create: true,
            exclusive: true
        };
        var success = function (dir) {
            cb();
        };
        var error = function (err) {
            cb(convertError(err, path, true));
        };
        this.fs.root.getDirectory(path, opts, success, error);
    };
    /**
     * Map _readdir's list of `FileEntry`s to their names and return that.
     */
    HTML5FS.prototype.readdir = function (path, cb) {
        this._readdir(path, function (e, entries) {
            if (e) {
                return cb(e);
            }
            var rv = [];
            for (var i = 0; i < entries.length; i++) {
                rv.push(entries[i].name);
            }
            cb(null, rv);
        });
    };
    /**
     * Returns a BrowserFS object representing a File.
     */
    HTML5FS.prototype._makeFile = function (path, entry, flag, stat, data) {
        if (data === void 0) { data = new ArrayBuffer(0); }
        var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, stat.size);
        var buffer = util_1.arrayBuffer2Buffer(data);
        return new HTML5FSFile(this, entry, path, flag, stats, buffer);
    };
    /**
     * Returns an array of `FileEntry`s. Used internally by empty and readdir.
     */
    HTML5FS.prototype._readdir = function (path, cb) {
        var error = function (err) {
            cb(convertError(err, path, true));
        };
        // Grab the requested directory.
        this.fs.root.getDirectory(path, { create: false }, function (dirEntry) {
            var reader = dirEntry.createReader();
            var entries = [];
            // Call the reader.readEntries() until no more results are returned.
            var readEntries = function () {
                reader.readEntries((function (results) {
                    if (results.length) {
                        entries = entries.concat(_toArray(results));
                        readEntries();
                    }
                    else {
                        cb(null, entries);
                    }
                }), error);
            };
            readEntries();
        }, error);
    };
    /**
     * Delete a file or directory from the file system
     * isFile should reflect which call was made to remove the it (`unlink` or
     * `rmdir`). If this doesn't match what's actually at `path`, an error will be
     * returned
     */
    HTML5FS.prototype._remove = function (path, cb, isFile) {
        var success = function (entry) {
            var succ = function () {
                cb();
            };
            var err = function (err) {
                cb(convertError(err, path, !isFile));
            };
            entry.remove(succ, err);
        };
        var error = function (err) {
            cb(convertError(err, path, !isFile));
        };
        // Deleting the entry, so don't create it
        var opts = {
            create: false
        };
        if (isFile) {
            this.fs.root.getFile(path, opts, success, error);
        }
        else {
            this.fs.root.getDirectory(path, opts, success, error);
        }
    };
    return HTML5FS;
}(file_system_1.BaseFileSystem));
exports["default"] = HTML5FS;
//# sourceMappingURL=HTML5FS.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {exports.__esModule = true;
var node_fs_stats_1 = __webpack_require__(5);
/**
 * Generic inode definition that can easily be serialized.
 */
var Inode = (function () {
    function Inode(id, dev, ino, size, mode, atime, mtime, ctime) {
        this.id = id;
        this.dev = dev;
        this.ino = ino;
        this.size = size;
        this.mode = mode;
        this.atime = atime;
        this.mtime = mtime;
        this.ctime = ctime;
    }
    /**
     * Converts the buffer into an Inode.
     */
    Inode.fromBuffer = function (buffer) {
        if (buffer === undefined) {
            throw new Error("NO");
        }
        return new Inode(buffer.toString('ascii', 38), buffer.readUInt32LE(0), buffer.readUInt32LE(4), buffer.readUInt32LE(8), buffer.readUInt16LE(12), buffer.readDoubleLE(14), buffer.readDoubleLE(22), buffer.readDoubleLE(30));
    };
    /**
     * Handy function that converts the Inode to a Node Stats object.
     */
    Inode.prototype.toStats = function () {
        var stats = new node_fs_stats_1["default"]((this.mode & 0xF000) === node_fs_stats_1.FileType.DIRECTORY ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE, this.size, this.mode, new Date(this.atime), new Date(this.mtime), new Date(this.ctime));
        stats.dev = this.dev;
        stats.ino = this.ino;
        return stats;
    };
    /**
     * Get the size of this Inode, in bytes.
     */
    Inode.prototype.getSize = function () {
        // ASSUMPTION: ID is ASCII (1 byte per char).
        return 38 + this.id.length;
    };
    /**
     * Writes the inode into the start of the buffer.
     */
    Inode.prototype.toBuffer = function (buff) {
        if (buff === void 0) { buff = new Buffer(this.getSize()); }
        buff.writeUInt32LE(this.dev, 0);
        buff.writeUInt32LE(this.ino, 4);
        buff.writeUInt32LE(this.size, 8);
        buff.writeUInt16LE(this.mode, 12);
        buff.writeDoubleLE(this.atime, 14);
        buff.writeDoubleLE(this.mtime, 22);
        buff.writeDoubleLE(this.ctime, 30);
        buff.write(this.id, 38, this.id.length, 'ascii');
        return buff;
    };
    /**
     * Updates the Inode using information from the stats object. Used by file
     * systems at sync time, e.g.:
     * - Program opens file and gets a File object.
     * - Program mutates file. File object is responsible for maintaining
     *   metadata changes locally -- typically in a Stats object.
     * - Program closes file. File object's metadata changes are synced with the
     *   file system.
     * @return True if any changes have occurred.
     */
    Inode.prototype.update = function (stats) {
        var hasChanged = false;
        if (this.size !== stats.size) {
            this.size = stats.size;
            hasChanged = true;
        }
        if (this.mode !== stats.mode) {
            this.mode = stats.mode;
            hasChanged = true;
        }
        var atimeMs = stats.atime.getTime();
        if (this.atime !== atimeMs) {
            this.atime = atimeMs;
            hasChanged = true;
        }
        var mtimeMs = stats.mtime.getTime();
        if (this.mtime !== mtimeMs) {
            this.mtime = mtimeMs;
            hasChanged = true;
        }
        var ctimeMs = stats.ctime.getTime();
        if (this.ctime !== ctimeMs) {
            this.ctime = ctimeMs;
            hasChanged = true;
        }
        return hasChanged;
    };
    // XXX: Copied from Stats. Should reconcile these two into something more
    //      compact.
    /**
     * @return [Boolean] True if this item is a file.
     */
    Inode.prototype.isFile = function () {
        return (this.mode & 0xF000) === node_fs_stats_1.FileType.FILE;
    };
    /**
     * @return [Boolean] True if this item is a directory.
     */
    Inode.prototype.isDirectory = function () {
        return (this.mode & 0xF000) === node_fs_stats_1.FileType.DIRECTORY;
    };
    return Inode;
}());
exports["default"] = Inode;
//# sourceMappingURL=inode.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var key_value_filesystem_1 = __webpack_require__(14);
var api_error_1 = __webpack_require__(0);
var global_1 = __webpack_require__(9);
var util_1 = __webpack_require__(1);
/**
 * Get the indexedDB constructor for the current browser.
 * @hidden
 */
var indexedDB = global_1["default"].indexedDB ||
    global_1["default"].mozIndexedDB ||
    global_1["default"].webkitIndexedDB ||
    global_1["default"].msIndexedDB;
/**
 * Converts a DOMException or a DOMError from an IndexedDB event into a
 * standardized BrowserFS API error.
 * @hidden
 */
function convertError(e, message) {
    if (message === void 0) { message = e.toString(); }
    switch (e.name) {
        case "NotFoundError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT, message);
        case "QuotaExceededError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, message);
        default:
            // The rest do not seem to map cleanly to standard error codes.
            return new api_error_1.ApiError(api_error_1.ErrorCode.EIO, message);
    }
}
/**
 * Produces a new onerror handler for IDB. Our errors are always fatal, so we
 * handle them generically: Call the user-supplied callback with a translated
 * version of the error, and let the error bubble up.
 * @hidden
 */
function onErrorHandler(cb, code, message) {
    if (code === void 0) { code = api_error_1.ErrorCode.EIO; }
    if (message === void 0) { message = null; }
    return function (e) {
        // Prevent the error from canceling the transaction.
        e.preventDefault();
        cb(new api_error_1.ApiError(code, message !== null ? message : undefined));
    };
}
/**
 * @hidden
 */
var IndexedDBROTransaction = (function () {
    function IndexedDBROTransaction(tx, store) {
        this.tx = tx;
        this.store = store;
    }
    IndexedDBROTransaction.prototype.get = function (key, cb) {
        try {
            var r = this.store.get(key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                // IDB returns the value 'undefined' when you try to get keys that
                // don't exist. The caller expects this behavior.
                var result = event.target.result;
                if (result === undefined) {
                    cb(null, result);
                }
                else {
                    // IDB data is stored as an ArrayBuffer
                    cb(null, util_1.arrayBuffer2Buffer(result));
                }
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    return IndexedDBROTransaction;
}());
exports.IndexedDBROTransaction = IndexedDBROTransaction;
/**
 * @hidden
 */
var IndexedDBRWTransaction = (function (_super) {
    __extends(IndexedDBRWTransaction, _super);
    function IndexedDBRWTransaction(tx, store) {
        return _super.call(this, tx, store) || this;
    }
    IndexedDBRWTransaction.prototype.put = function (key, data, overwrite, cb) {
        try {
            var arraybuffer = util_1.buffer2ArrayBuffer(data);
            var r = void 0;
            if (overwrite) {
                r = this.store.put(arraybuffer, key);
            }
            else {
                // 'add' will never overwrite an existing key.
                r = this.store.add(arraybuffer, key);
            }
            // XXX: NEED TO RETURN FALSE WHEN ADD HAS A KEY CONFLICT. NO ERROR.
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb(null, true);
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.del = function (key, cb) {
        try {
            // NOTE: IE8 has a bug with identifiers named 'delete' unless used as a string
            // like this.
            // http://stackoverflow.com/a/26479152
            var r = this.store['delete'](key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb();
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.commit = function (cb) {
        // Return to the event loop to commit the transaction.
        setTimeout(cb, 0);
    };
    IndexedDBRWTransaction.prototype.abort = function (cb) {
        var _e = null;
        try {
            this.tx.abort();
        }
        catch (e) {
            _e = convertError(e);
        }
        finally {
            cb(_e);
        }
    };
    return IndexedDBRWTransaction;
}(IndexedDBROTransaction));
exports.IndexedDBRWTransaction = IndexedDBRWTransaction;
var IndexedDBStore = (function () {
    function IndexedDBStore(cb, storeName) {
        if (storeName === void 0) { storeName = 'browserfs'; }
        var _this = this;
        this.storeName = storeName;
        var openReq = indexedDB.open(this.storeName, 1);
        openReq.onupgradeneeded = function (event) {
            var db = event.target.result;
            // Huh. This should never happen; we're at version 1. Why does another
            // database exist?
            if (db.objectStoreNames.contains(_this.storeName)) {
                db.deleteObjectStore(_this.storeName);
            }
            db.createObjectStore(_this.storeName);
        };
        openReq.onsuccess = function (event) {
            _this.db = event.target.result;
            cb(null, _this);
        };
        openReq.onerror = onErrorHandler(cb, api_error_1.ErrorCode.EACCES);
    }
    IndexedDBStore.prototype.name = function () {
        return "IndexedDB - " + this.storeName;
    };
    IndexedDBStore.prototype.clear = function (cb) {
        try {
            var tx = this.db.transaction(this.storeName, 'readwrite'), objectStore = tx.objectStore(this.storeName), r = objectStore.clear();
            r.onsuccess = function (event) {
                // Use setTimeout to commit transaction.
                setTimeout(cb, 0);
            };
            r.onerror = onErrorHandler(cb);
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBStore.prototype.beginTransaction = function (type) {
        if (type === void 0) { type = 'readonly'; }
        var tx = this.db.transaction(this.storeName, type), objectStore = tx.objectStore(this.storeName);
        if (type === 'readwrite') {
            return new IndexedDBRWTransaction(tx, objectStore);
        }
        else if (type === 'readonly') {
            return new IndexedDBROTransaction(tx, objectStore);
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid transaction type.');
        }
    };
    return IndexedDBStore;
}());
exports.IndexedDBStore = IndexedDBStore;
/**
 * A file system that uses the IndexedDB key value file system.
 */
var IndexedDBFileSystem = (function (_super) {
    __extends(IndexedDBFileSystem, _super);
    /**
     * Constructs an IndexedDB file system.
     * @param cb Called once the database is instantiated and ready for use.
     *   Passes an error if there was an issue instantiating the database.
     * @param storeName The name of this file system. You can have
     *   multiple IndexedDB file systems operating at once, but each must have
     *   a different name.
     */
    function IndexedDBFileSystem(cb, storeName) {
        var _this = _super.call(this) || this;
        var store = new IndexedDBStore(function (e) {
            if (e) {
                cb(e);
            }
            else {
                _this.init(store, function (e) {
                    cb(e, _this);
                });
            }
        }, storeName);
        return _this;
    }
    IndexedDBFileSystem.isAvailable = function () {
        // In Safari's private browsing mode, indexedDB.open returns NULL.
        // In Firefox, it throws an exception.
        // In Chrome, it "just works", and clears the database when you leave the page.
        // Untested: Opera, IE.
        try {
            return typeof indexedDB !== 'undefined' && null !== indexedDB.open("__browserfs_test__");
        }
        catch (e) {
            return false;
        }
    };
    return IndexedDBFileSystem;
}(key_value_filesystem_1.AsyncKeyValueFileSystem));
exports["default"] = IndexedDBFileSystem;
//# sourceMappingURL=IndexedDB.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var key_value_filesystem_1 = __webpack_require__(14);
var api_error_1 = __webpack_require__(0);
var global_1 = __webpack_require__(9);
/**
 * Some versions of FF and all versions of IE do not support the full range of
 * 16-bit numbers encoded as characters, as they enforce UTF-16 restrictions.
 * @url http://stackoverflow.com/questions/11170716/are-there-any-characters-that-are-not-allowed-in-localstorage/11173673#11173673
 * @hidden
 */
var supportsBinaryString = false, binaryEncoding;
try {
    global_1["default"].localStorage.setItem("__test__", String.fromCharCode(0xD800));
    supportsBinaryString = global_1["default"].localStorage.getItem("__test__") === String.fromCharCode(0xD800);
}
catch (e) {
    // IE throws an exception.
    supportsBinaryString = false;
}
binaryEncoding = supportsBinaryString ? 'binary_string' : 'binary_string_ie';
if (!Buffer.isEncoding(binaryEncoding)) {
    // Fallback for non BrowserFS implementations of buffer that lack a
    // binary_string format.
    binaryEncoding = "base64";
}
/**
 * A synchronous key-value store backed by localStorage.
 */
var LocalStorageStore = (function () {
    function LocalStorageStore() {
    }
    LocalStorageStore.prototype.name = function () {
        return 'LocalStorage';
    };
    LocalStorageStore.prototype.clear = function () {
        global_1["default"].localStorage.clear();
    };
    LocalStorageStore.prototype.beginTransaction = function (type) {
        // No need to differentiate.
        return new key_value_filesystem_1.SimpleSyncRWTransaction(this);
    };
    LocalStorageStore.prototype.get = function (key) {
        try {
            var data = global_1["default"].localStorage.getItem(key);
            if (data !== null) {
                return Buffer.from(data, binaryEncoding);
            }
        }
        catch (e) {
            // Do nothing.
        }
        // Key doesn't exist, or a failure occurred.
        return undefined;
    };
    LocalStorageStore.prototype.put = function (key, data, overwrite) {
        try {
            if (!overwrite && global_1["default"].localStorage.getItem(key) !== null) {
                // Don't want to overwrite the key!
                return false;
            }
            global_1["default"].localStorage.setItem(key, data.toString(binaryEncoding));
            return true;
        }
        catch (e) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, "LocalStorage is full.");
        }
    };
    LocalStorageStore.prototype.del = function (key) {
        try {
            global_1["default"].localStorage.removeItem(key);
        }
        catch (e) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unable to delete key " + key + ": " + e);
        }
    };
    return LocalStorageStore;
}());
exports.LocalStorageStore = LocalStorageStore;
/**
 * A synchronous file system backed by localStorage. Connects our
 * LocalStorageStore to our SyncKeyValueFileSystem.
 */
var LocalStorageFileSystem = (function (_super) {
    __extends(LocalStorageFileSystem, _super);
    /**
     * Creates a new LocalStorage file system using the contents of `localStorage`.
     */
    function LocalStorageFileSystem() {
        return _super.call(this, { store: new LocalStorageStore() }) || this;
    }
    LocalStorageFileSystem.isAvailable = function () {
        return typeof global_1["default"].localStorage !== 'undefined';
    };
    return LocalStorageFileSystem;
}(key_value_filesystem_1.SyncKeyValueFileSystem));
exports["default"] = LocalStorageFileSystem;
//# sourceMappingURL=LocalStorage.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var InMemory_1 = __webpack_require__(18);
var api_error_1 = __webpack_require__(0);
var node_fs_1 = __webpack_require__(8);
var path = __webpack_require__(3);
var util_1 = __webpack_require__(1);
/**
 * The MountableFileSystem allows you to mount multiple backend types or
 * multiple instantiations of the same backend into a single file system tree.
 * The file systems do not need to know about each other; all interactions are
 * automatically facilitated through this interface.
 *
 * For example, if a file system is mounted at /mnt/blah, and a request came in
 * for /mnt/blah/foo.txt, the file system would see a request for /foo.txt.
 *
 * You can mount file systems like so:
 * ```javascript
 * var mfs = new BrowserFS.FileSystem.MountableFileSystem();
 * mfs.mount('/data', new BrowserFS.FileSystem.XmlHttpRequest());
 * mfs.mount('/home', new BrowserFS.FileSystem.LocalStorage());
 * ```
 *
 * Since MountableFileSystem simply proxies requests to mounted file systems, it supports all of the operations that the mounted file systems support.
 *
 * With no mounted file systems, `MountableFileSystem` acts as a simple `InMemory` filesystem.
 */
var MountableFileSystem = (function (_super) {
    __extends(MountableFileSystem, _super);
    /**
     * Creates a new, empty MountableFileSystem.
     */
    function MountableFileSystem() {
        var _this = _super.call(this) || this;
        // Contains the list of mount points in mntMap, sorted by string length in decreasing order.
        // Ensures that we scan the most specific mount points for a match first, which lets us
        // nest mount points.
        _this.mountList = [];
        _this.mntMap = {};
        // The InMemory file system serves purely to provide directory listings for
        // mounted file systems.
        _this.rootFs = new InMemory_1["default"]();
        return _this;
    }
    MountableFileSystem.isAvailable = function () {
        return true;
    };
    /**
     * Mounts the file system at the given mount point.
     */
    MountableFileSystem.prototype.mount = function (mountPoint, fs) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already taken.");
        }
        util_1.mkdirpSync(mountPoint, 0x1ff, this.rootFs);
        this.mntMap[mountPoint] = fs;
        this.mountList.push(mountPoint);
        this.mountList = this.mountList.sort(function (a, b) { return b.length - a.length; });
    };
    MountableFileSystem.prototype.umount = function (mountPoint) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (!this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already unmounted.");
        }
        delete this.mntMap[mountPoint];
        this.mountList.splice(this.mountList.indexOf(mountPoint), 1);
        while (mountPoint !== '/') {
            if (this.rootFs.readdirSync(mountPoint).length === 0) {
                this.rootFs.rmdirSync(mountPoint);
                mountPoint = path.dirname(mountPoint);
            }
            else {
                break;
            }
        }
    };
    /**
     * Returns the file system that the path points to.
     */
    MountableFileSystem.prototype._getFs = function (path) {
        var mountList = this.mountList, len = mountList.length;
        for (var i = 0; i < len; i++) {
            var mountPoint = mountList[i];
            // We know path is normalized, so it is a substring of the mount point.
            if (mountPoint.length <= path.length && path.indexOf(mountPoint) === 0) {
                path = path.substr(mountPoint.length > 1 ? mountPoint.length : 0);
                if (path === '') {
                    path = '/';
                }
                return { fs: this.mntMap[mountPoint], path: path };
            }
        }
        // Query our root file system.
        return { fs: this.rootFs, path: path };
    };
    // Global information methods
    MountableFileSystem.prototype.getName = function () {
        return 'MountableFileSystem';
    };
    MountableFileSystem.prototype.diskSpace = function (path, cb) {
        cb(0, 0);
    };
    MountableFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsLinks = function () {
        // I'm not ready for cross-FS links yet.
        return false;
    };
    MountableFileSystem.prototype.supportsProps = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsSynch = function () {
        return true;
    };
    /**
     * Fixes up error messages so they mention the mounted file location relative
     * to the MFS root, not to the particular FS's root.
     * Mutates the input error, and returns it.
     */
    MountableFileSystem.prototype.standardizeError = function (err, path, realPath) {
        var index = err.message.indexOf(path);
        if (index !== -1) {
            err.message = err.message.substr(0, index) + realPath + err.message.substr(index + path.length);
            err.path = realPath;
        }
        return err;
    };
    // The following methods involve multiple file systems, and thus have custom
    // logic.
    // Note that we go through the Node API to use its robust default argument
    // processing.
    MountableFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        // Scenario 1: old and new are on same FS.
        var fs1rv = this._getFs(oldPath);
        var fs2rv = this._getFs(newPath);
        if (fs1rv.fs === fs2rv.fs) {
            return fs1rv.fs.rename(fs1rv.path, fs2rv.path, function (e) {
                if (e) {
                    _this.standardizeError(_this.standardizeError(e, fs1rv.path, oldPath), fs2rv.path, newPath);
                }
                cb(e);
            });
        }
        // Scenario 2: Different file systems.
        // Read old file, write new file, delete old file.
        return node_fs_1["default"].readFile(oldPath, function (err, data) {
            if (err) {
                return cb(err);
            }
            node_fs_1["default"].writeFile(newPath, data, function (err) {
                if (err) {
                    return cb(err);
                }
                node_fs_1["default"].unlink(oldPath, cb);
            });
        });
    };
    MountableFileSystem.prototype.renameSync = function (oldPath, newPath) {
        // Scenario 1: old and new are on same FS.
        var fs1rv = this._getFs(oldPath);
        var fs2rv = this._getFs(newPath);
        if (fs1rv.fs === fs2rv.fs) {
            try {
                return fs1rv.fs.renameSync(fs1rv.path, fs2rv.path);
            }
            catch (e) {
                this.standardizeError(this.standardizeError(e, fs1rv.path, oldPath), fs2rv.path, newPath);
                throw e;
            }
        }
        // Scenario 2: Different file systems.
        var data = node_fs_1["default"].readFileSync(oldPath);
        node_fs_1["default"].writeFileSync(newPath, data);
        return node_fs_1["default"].unlinkSync(oldPath);
    };
    MountableFileSystem.prototype.readdirSync = function (p) {
        var fsInfo = this._getFs(p);
        // If null, rootfs did not have the directory
        // (or the target FS is the root fs).
        var rv = null;
        // Mount points are all defined in the root FS.
        // Ensure that we list those, too.
        if (fsInfo.fs !== this.rootFs) {
            try {
                rv = this.rootFs.readdirSync(p);
            }
            catch (e) {
                // Ignore.
            }
        }
        try {
            var rv2_1 = fsInfo.fs.readdirSync(fsInfo.path);
            if (rv === null) {
                return rv2_1;
            }
            else {
                // Filter out duplicates.
                return rv2_1.concat(rv.filter(function (val) { return rv2_1.indexOf(val) === -1; }));
            }
        }
        catch (e) {
            if (rv === null) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
            else {
                // The root FS had something.
                return rv;
            }
        }
    };
    MountableFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        fsInfo.fs.readdir(fsInfo.path, function (err, files) {
            if (fsInfo.fs !== _this.rootFs) {
                try {
                    var rv = _this.rootFs.readdirSync(p);
                    if (files) {
                        // Filter out duplicates.
                        files = files.concat(rv.filter(function (val) { return files.indexOf(val) === -1; }));
                    }
                    else {
                        files = rv;
                    }
                }
                catch (e) {
                    // Root FS and target FS did not have directory.
                    if (err) {
                        return cb(_this.standardizeError(err, fsInfo.path, p));
                    }
                }
            }
            else if (err) {
                // Root FS and target FS are the same, and did not have directory.
                return cb(_this.standardizeError(err, fsInfo.path, p));
            }
            cb(null, files);
        });
    };
    MountableFileSystem.prototype.rmdirSync = function (p) {
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            try {
                fsInfo.fs.rmdirSync(fsInfo.path);
            }
            catch (e) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
        }
    };
    MountableFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            cb(api_error_1.ApiError.ENOTEMPTY(p));
        }
        else {
            fsInfo.fs.rmdir(fsInfo.path, function (err) {
                cb(err ? _this.standardizeError(err, fsInfo.path, p) : null);
            });
        }
    };
    /**
     * Returns true if the given path contains a mount point.
     */
    MountableFileSystem.prototype._containsMountPt = function (p) {
        var mountPoints = this.mountList, len = mountPoints.length;
        for (var i = 0; i < len; i++) {
            var pt = mountPoints[i];
            if (pt.length >= p.length && pt.slice(0, p.length) === p) {
                return true;
            }
        }
        return false;
    };
    return MountableFileSystem;
}(file_system_1.BaseFileSystem));
exports["default"] = MountableFileSystem;
/**
 * Tricky: Define all of the functions that merely forward arguments to the
 * relevant file system, or return/throw an error.
 * Take advantage of the fact that the *first* argument is always the path, and
 * the *last* is the callback function (if async).
 * @todo Can use numArgs to make proxying more efficient.
 * @hidden
 */
function defineFcn(name, isSync, numArgs) {
    if (isSync) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var path = args[0];
            var rv = this._getFs(path);
            args[0] = rv.path;
            try {
                return rv.fs[name].apply(rv.fs, args);
            }
            catch (e) {
                this.standardizeError(e, rv.path, path);
                throw e;
            }
        };
    }
    else {
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var path = args[0];
            var rv = this._getFs(path);
            args[0] = rv.path;
            if (typeof args[args.length - 1] === 'function') {
                var cb_1 = args[args.length - 1];
                args[args.length - 1] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (args.length > 0 && args[0] instanceof api_error_1.ApiError) {
                        _this.standardizeError(args[0], rv.path, path);
                    }
                    cb_1.apply(null, args);
                };
            }
            return rv.fs[name].apply(rv.fs, args);
        };
    }
}
/**
 * @hidden
 */
var fsCmdMap = [
    // 1 arg functions
    ['exists', 'unlink', 'readlink'],
    // 2 arg functions
    ['stat', 'mkdir', 'realpath', 'truncate'],
    // 3 arg functions
    ['open', 'readFile', 'chmod', 'utimes'],
    // 4 arg functions
    ['chown'],
    // 5 arg functions
    ['writeFile', 'appendFile']
];
for (var i = 0; i < fsCmdMap.length; i++) {
    var cmds = fsCmdMap[i];
    for (var j = 0; j < cmds.length; j++) {
        var fnName = cmds[j];
        MountableFileSystem.prototype[fnName] = defineFcn(fnName, false, i + 1);
        MountableFileSystem.prototype[fnName + 'Sync'] = defineFcn(fnName + 'Sync', true, i + 1);
    }
}
//# sourceMappingURL=MountableFileSystem.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var preload_file_1 = __webpack_require__(7);
var locked_fs_1 = __webpack_require__(43);
var path = __webpack_require__(3);
/**
 * @hidden
 */
var deletionLogPath = '/.deletedFiles.log';
/**
 * Given a read-only mode, makes it writable.
 * @hidden
 */
function makeModeWritable(mode) {
    return 146 | mode;
}
/**
 * @hidden
 */
function getFlag(f) {
    return file_flag_1.FileFlag.getFileFlag(f);
}
/**
 * Overlays a RO file to make it writable.
 */
var OverlayFile = (function (_super) {
    __extends(OverlayFile, _super);
    function OverlayFile(fs, path, flag, stats, data) {
        return _super.call(this, fs, path, flag, stats, data) || this;
    }
    OverlayFile.prototype.sync = function (cb) {
        var _this = this;
        if (!this.isDirty()) {
            cb(null);
            return;
        }
        this._fs._syncAsync(this, function (err) {
            _this.resetDirty();
            cb(err);
        });
    };
    OverlayFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    OverlayFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    OverlayFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return OverlayFile;
}(preload_file_1["default"]));
/**
 * *INTERNAL, DO NOT USE DIRECTLY!*
 *
 * Core OverlayFS class that contains no locking whatsoever. We wrap these objects
 * in a LockedFS to prevent races.
 */
var UnlockedOverlayFS = (function (_super) {
    __extends(UnlockedOverlayFS, _super);
    function UnlockedOverlayFS(writable, readable) {
        var _this = _super.call(this) || this;
        _this._isInitialized = false;
        _this._initializeCallbacks = [];
        _this._deletedFiles = {};
        _this._deleteLog = '';
        // If 'true', we have scheduled a delete log update.
        _this._deleteLogUpdatePending = false;
        // If 'true', a delete log update is needed after the scheduled delete log
        // update finishes.
        _this._deleteLogUpdateNeeded = false;
        // If there was an error updating the delete log...
        _this._deleteLogError = null;
        _this._writable = writable;
        _this._readable = readable;
        if (_this._writable.isReadOnly()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Writable file system must be writable.");
        }
        return _this;
    }
    UnlockedOverlayFS.isAvailable = function () {
        return true;
    };
    UnlockedOverlayFS.prototype.getOverlayedFileSystems = function () {
        return {
            readable: this._readable,
            writable: this._writable
        };
    };
    UnlockedOverlayFS.prototype._syncAsync = function (file, cb) {
        var _this = this;
        this.createParentDirectoriesAsync(file.getPath(), function (err) {
            if (err) {
                return cb(err);
            }
            _this._writable.writeFile(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode, cb);
        });
    };
    UnlockedOverlayFS.prototype._syncSync = function (file) {
        this.createParentDirectories(file.getPath());
        this._writable.writeFileSync(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode);
    };
    UnlockedOverlayFS.prototype.getName = function () {
        return "OverlayFS";
    };
    /**
     * Called once to load up metadata stored on the writable file system.
     */
    UnlockedOverlayFS.prototype.initialize = function (cb) {
        var _this = this;
        var callbackArray = this._initializeCallbacks;
        var end = function (e) {
            _this._isInitialized = !e;
            _this._initializeCallbacks = [];
            callbackArray.forEach((function (cb) { return cb(e); }));
        };
        // if we're already initialized, immediately invoke the callback
        if (this._isInitialized) {
            return cb();
        }
        callbackArray.push(cb);
        // The first call to initialize initializes, the rest wait for it to complete.
        if (callbackArray.length !== 1) {
            return;
        }
        // Read deletion log, process into metadata.
        this._writable.readFile(deletionLogPath, 'utf8', getFlag('r'), function (err, data) {
            if (err) {
                // ENOENT === Newly-instantiated file system, and thus empty log.
                if (err.errno !== api_error_1.ErrorCode.ENOENT) {
                    return end(err);
                }
            }
            else {
                _this._deleteLog = data;
            }
            _this._reparseDeletionLog();
            end();
        });
    };
    UnlockedOverlayFS.prototype.isReadOnly = function () { return false; };
    UnlockedOverlayFS.prototype.supportsSynch = function () { return this._readable.supportsSynch() && this._writable.supportsSynch(); };
    UnlockedOverlayFS.prototype.supportsLinks = function () { return false; };
    UnlockedOverlayFS.prototype.supportsProps = function () { return this._readable.supportsProps() && this._writable.supportsProps(); };
    UnlockedOverlayFS.prototype.getDeletionLog = function () {
        return this._deleteLog;
    };
    UnlockedOverlayFS.prototype.restoreDeletionLog = function (log) {
        this._deleteLog = log;
        this._reparseDeletionLog();
        this.updateLog('');
    };
    UnlockedOverlayFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(oldPath, cb) || this.checkPathAsync(newPath, cb)) {
            return;
        }
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            return cb(api_error_1.ApiError.EPERM('Cannot rename deletion log.'));
        }
        // nothing to do if paths match
        if (oldPath === newPath) {
            return cb();
        }
        this.stat(oldPath, false, function (oldErr, oldStats) {
            if (oldErr) {
                return cb(oldErr);
            }
            return _this.stat(newPath, false, function (newErr, newStats) {
                var self = _this;
                // precondition: both oldPath and newPath exist and are dirs.
                // decreases: |files|
                // Need to move *every file/folder* currently stored on
                // readable to its new location on writable.
                function copyDirContents(files) {
                    var file = files.shift();
                    if (!file) {
                        return cb();
                    }
                    var oldFile = path.resolve(oldPath, file);
                    var newFile = path.resolve(newPath, file);
                    // Recursion! Should work for any nested files / folders.
                    self.rename(oldFile, newFile, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        copyDirContents(files);
                    });
                }
                var mode = 511;
                // from linux's rename(2) manpage: oldpath can specify a
                // directory.  In this case, newpath must either not exist, or
                // it must specify an empty directory.
                if (oldStats.isDirectory()) {
                    if (newErr) {
                        if (newErr.errno !== api_error_1.ErrorCode.ENOENT) {
                            return cb(newErr);
                        }
                        return _this._writable.exists(oldPath, function (exists) {
                            // simple case - both old and new are on the writable layer
                            if (exists) {
                                return _this._writable.rename(oldPath, newPath, cb);
                            }
                            _this._writable.mkdir(newPath, mode, function (mkdirErr) {
                                if (mkdirErr) {
                                    return cb(mkdirErr);
                                }
                                _this._readable.readdir(oldPath, function (err, files) {
                                    if (err) {
                                        return cb();
                                    }
                                    copyDirContents(files);
                                });
                            });
                        });
                    }
                    mode = newStats.mode;
                    if (!newStats.isDirectory()) {
                        return cb(api_error_1.ApiError.ENOTDIR(newPath));
                    }
                    _this.readdir(newPath, function (readdirErr, files) {
                        if (files && files.length) {
                            return cb(api_error_1.ApiError.ENOTEMPTY(newPath));
                        }
                        _this._readable.readdir(oldPath, function (err, files) {
                            if (err) {
                                return cb();
                            }
                            copyDirContents(files);
                        });
                    });
                }
                if (newStats && newStats.isDirectory()) {
                    return cb(api_error_1.ApiError.EISDIR(newPath));
                }
                _this.readFile(oldPath, null, getFlag('r'), function (err, data) {
                    if (err) {
                        return cb(err);
                    }
                    return _this.writeFile(newPath, data, null, getFlag('w'), oldStats.mode, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        return _this.unlink(oldPath, cb);
                    });
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.renameSync = function (oldPath, newPath) {
        var _this = this;
        this.checkInitialized();
        this.checkPath(oldPath);
        this.checkPath(newPath);
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            throw api_error_1.ApiError.EPERM('Cannot rename deletion log.');
        }
        // Write newPath using oldPath's contents, delete oldPath.
        var oldStats = this.statSync(oldPath, false);
        if (oldStats.isDirectory()) {
            // Optimization: Don't bother moving if old === new.
            if (oldPath === newPath) {
                return;
            }
            var mode = 511;
            if (this.existsSync(newPath)) {
                var stats = this.statSync(newPath, false);
                mode = stats.mode;
                if (stats.isDirectory()) {
                    if (this.readdirSync(newPath).length > 0) {
                        throw api_error_1.ApiError.ENOTEMPTY(newPath);
                    }
                }
                else {
                    throw api_error_1.ApiError.ENOTDIR(newPath);
                }
            }
            // Take care of writable first. Move any files there, or create an empty directory
            // if it doesn't exist.
            if (this._writable.existsSync(oldPath)) {
                this._writable.renameSync(oldPath, newPath);
            }
            else if (!this._writable.existsSync(newPath)) {
                this._writable.mkdirSync(newPath, mode);
            }
            // Need to move *every file/folder* currently stored on readable to its new location
            // on writable.
            if (this._readable.existsSync(oldPath)) {
                this._readable.readdirSync(oldPath).forEach(function (name) {
                    // Recursion! Should work for any nested files / folders.
                    _this.renameSync(path.resolve(oldPath, name), path.resolve(newPath, name));
                });
            }
        }
        else {
            if (this.existsSync(newPath) && this.statSync(newPath, false).isDirectory()) {
                throw api_error_1.ApiError.EISDIR(newPath);
            }
            this.writeFileSync(newPath, this.readFileSync(oldPath, null, getFlag('r')), null, getFlag('w'), oldStats.mode);
        }
        if (oldPath !== newPath && this.existsSync(oldPath)) {
            this.unlinkSync(oldPath);
        }
    };
    UnlockedOverlayFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this._writable.stat(p, isLstat, function (err, stat) {
            if (err && err.errno === api_error_1.ErrorCode.ENOENT) {
                if (_this._deletedFiles[p]) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                _this._readable.stat(p, isLstat, function (err, stat) {
                    if (stat) {
                        // Make the oldStat's mode writable. Preserve the topmost
                        // part of the mode, which specifies if it is a file or a
                        // directory.
                        stat = stat.clone();
                        stat.mode = makeModeWritable(stat.mode);
                    }
                    cb(err, stat);
                });
            }
            else {
                cb(err, stat);
            }
        });
    };
    UnlockedOverlayFS.prototype.statSync = function (p, isLstat) {
        this.checkInitialized();
        try {
            return this._writable.statSync(p, isLstat);
        }
        catch (e) {
            if (this._deletedFiles[p]) {
                throw api_error_1.ApiError.ENOENT(p);
            }
            var oldStat = this._readable.statSync(p, isLstat).clone();
            // Make the oldStat's mode writable. Preserve the topmost part of the
            // mode, which specifies if it is a file or a directory.
            oldStat.mode = makeModeWritable(oldStat.mode);
            return oldStat;
        }
    };
    UnlockedOverlayFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.stat(p, false, function (err, stats) {
            if (stats) {
                switch (flag.pathExistsAction()) {
                    case file_flag_1.ActionType.TRUNCATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            _this._writable.open(p, flag, mode, cb);
                        });
                    case file_flag_1.ActionType.NOP:
                        return _this._writable.exists(p, function (exists) {
                            if (exists) {
                                _this._writable.open(p, flag, mode, cb);
                            }
                            else {
                                // at this point we know the stats object we got is from
                                // the readable FS.
                                stats = stats.clone();
                                stats.mode = mode;
                                _this._readable.readFile(p, null, getFlag('r'), function (readFileErr, data) {
                                    if (readFileErr) {
                                        return cb(readFileErr);
                                    }
                                    if (stats.size === -1) {
                                        stats.size = data.length;
                                    }
                                    var f = new OverlayFile(_this, p, flag, stats, data);
                                    cb(null, f);
                                });
                            }
                        });
                    default:
                        return cb(api_error_1.ApiError.EEXIST(p));
                }
            }
            else {
                switch (flag.pathNotExistsAction()) {
                    case file_flag_1.ActionType.CREATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            return _this._writable.open(p, flag, mode, cb);
                        });
                    default:
                        return cb(api_error_1.ApiError.ENOENT(p));
                }
            }
        });
    };
    UnlockedOverlayFS.prototype.openSync = function (p, flag, mode) {
        this.checkInitialized();
        this.checkPath(p);
        if (p === deletionLogPath) {
            throw api_error_1.ApiError.EPERM('Cannot open deletion log.');
        }
        if (this.existsSync(p)) {
            switch (flag.pathExistsAction()) {
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                case file_flag_1.ActionType.NOP:
                    if (this._writable.existsSync(p)) {
                        return this._writable.openSync(p, flag, mode);
                    }
                    else {
                        // Create an OverlayFile.
                        var buf = this._readable.readFileSync(p, null, getFlag('r'));
                        var stats = this._readable.statSync(p, false).clone();
                        stats.mode = mode;
                        return new OverlayFile(this, p, flag, stats, buf);
                    }
                default:
                    throw api_error_1.ApiError.EEXIST(p);
            }
        }
        else {
            switch (flag.pathNotExistsAction()) {
                case file_flag_1.ActionType.CREATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                default:
                    throw api_error_1.ApiError.ENOENT(p);
            }
        }
    };
    UnlockedOverlayFS.prototype.unlink = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    return _this._writable.unlink(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this.exists(p, function (readableExists) {
                            if (readableExists) {
                                _this.deletePath(p);
                            }
                            cb(null);
                        });
                    });
                }
                else {
                    // if this only exists on the readable FS, add it to the
                    // delete map.
                    _this.deletePath(p);
                    cb(null);
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.unlinkSync = function (p) {
        this.checkInitialized();
        this.checkPath(p);
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.unlinkSync(p);
            }
            // if it still exists add to the delete log
            if (this.existsSync(p)) {
                this.deletePath(p);
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        var rmdirLower = function () {
            _this.readdir(p, function (err, files) {
                if (err) {
                    return cb(err);
                }
                if (files.length) {
                    return cb(api_error_1.ApiError.ENOTEMPTY(p));
                }
                _this.deletePath(p);
                cb(null);
            });
        };
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    _this._writable.rmdir(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this._readable.exists(p, function (readableExists) {
                            if (readableExists) {
                                rmdirLower();
                            }
                            else {
                                cb();
                            }
                        });
                    });
                }
                else {
                    rmdirLower();
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.rmdirSync = function (p) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.rmdirSync(p);
            }
            if (this.existsSync(p)) {
                // Check if directory is empty.
                if (this.readdirSync(p).length > 0) {
                    throw api_error_1.ApiError.ENOTEMPTY(p);
                }
                else {
                    this.deletePath(p);
                }
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (exists) {
                return cb(api_error_1.ApiError.EEXIST(p));
            }
            // The below will throw should any of the parent directories
            // fail to exist on _writable.
            _this.createParentDirectoriesAsync(p, function (err) {
                if (err) {
                    return cb(err);
                }
                _this._writable.mkdir(p, mode, cb);
            });
        });
    };
    UnlockedOverlayFS.prototype.mkdirSync = function (p, mode) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        else {
            // The below will throw should any of the parent directories fail to exist
            // on _writable.
            this.createParentDirectories(p);
            this._writable.mkdirSync(p, mode);
        }
    };
    UnlockedOverlayFS.prototype.readdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.stat(p, false, function (err, dirStats) {
            if (err) {
                return cb(err);
            }
            if (!dirStats.isDirectory()) {
                return cb(api_error_1.ApiError.ENOTDIR(p));
            }
            _this._writable.readdir(p, function (err, wFiles) {
                if (err && err.code !== 'ENOENT') {
                    return cb(err);
                }
                else if (err || !wFiles) {
                    wFiles = [];
                }
                _this._readable.readdir(p, function (err, rFiles) {
                    // if the directory doesn't exist on the lower FS set rFiles
                    // here to simplify the following code.
                    if (err || !rFiles) {
                        rFiles = [];
                    }
                    // Readdir in both, check delete log on read-only file system's files, merge, return.
                    var seenMap = {};
                    var filtered = wFiles.concat(rFiles.filter(function (fPath) {
                        return !_this._deletedFiles[p + "/" + fPath];
                    })).filter(function (fPath) {
                        // Remove duplicates.
                        var result = !seenMap[fPath];
                        seenMap[fPath] = true;
                        return result;
                    });
                    cb(null, filtered);
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.readdirSync = function (p) {
        var _this = this;
        this.checkInitialized();
        var dirStats = this.statSync(p, false);
        if (!dirStats.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        // Readdir in both, check delete log on RO file system's listing, merge, return.
        var contents = [];
        try {
            contents = contents.concat(this._writable.readdirSync(p));
        }
        catch (e) {
            // NOP.
        }
        try {
            contents = contents.concat(this._readable.readdirSync(p).filter(function (fPath) {
                return !_this._deletedFiles[p + "/" + fPath];
            }));
        }
        catch (e) {
            // NOP.
        }
        var seenMap = {};
        return contents.filter(function (fileP) {
            var result = !seenMap[fileP];
            seenMap[fileP] = true;
            return result;
        });
    };
    UnlockedOverlayFS.prototype.exists = function (p, cb) {
        var _this = this;
        // Cannot pass an error back to callback, so throw an exception instead
        // if not initialized.
        this.checkInitialized();
        this._writable.exists(p, function (existsWritable) {
            if (existsWritable) {
                return cb(true);
            }
            _this._readable.exists(p, function (existsReadable) {
                cb(existsReadable && _this._deletedFiles[p] !== true);
            });
        });
    };
    UnlockedOverlayFS.prototype.existsSync = function (p) {
        this.checkInitialized();
        return this._writable.existsSync(p) || (this._readable.existsSync(p) && this._deletedFiles[p] !== true);
    };
    UnlockedOverlayFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chmod(p, isLchmod, mode, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chmodSync = function (p, isLchmod, mode) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chmodSync(p, isLchmod, mode);
        });
    };
    UnlockedOverlayFS.prototype.chown = function (p, isLchmod, uid, gid, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chown(p, isLchmod, uid, gid, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chownSync(p, isLchown, uid, gid);
        });
    };
    UnlockedOverlayFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.utimes(p, atime, mtime, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.utimesSync = function (p, atime, mtime) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.utimesSync(p, atime, mtime);
        });
    };
    UnlockedOverlayFS.prototype.deletePath = function (p) {
        this._deletedFiles[p] = true;
        this.updateLog("d" + p + "\n");
    };
    UnlockedOverlayFS.prototype.updateLog = function (addition) {
        var _this = this;
        this._deleteLog += addition;
        if (this._deleteLogUpdatePending) {
            this._deleteLogUpdateNeeded = true;
        }
        else {
            this._deleteLogUpdatePending = true;
            this._writable.writeFile(deletionLogPath, this._deleteLog, 'utf8', file_flag_1.FileFlag.getFileFlag('w'), 420, function (e) {
                _this._deleteLogUpdatePending = false;
                if (e) {
                    _this._deleteLogError = e;
                }
                else if (_this._deleteLogUpdateNeeded) {
                    _this._deleteLogUpdateNeeded = false;
                    _this.updateLog('');
                }
            });
        }
    };
    UnlockedOverlayFS.prototype._reparseDeletionLog = function () {
        var _this = this;
        this._deletedFiles = {};
        this._deleteLog.split('\n').forEach(function (path) {
            // If the log entry begins w/ 'd', it's a deletion.
            _this._deletedFiles[path.slice(1)] = path.slice(0, 1) === 'd';
        });
    };
    UnlockedOverlayFS.prototype.checkInitialized = function () {
        if (!this._isInitialized) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            throw e;
        }
    };
    UnlockedOverlayFS.prototype.checkInitAsync = function (cb) {
        if (!this._isInitialized) {
            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it."));
            return false;
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            cb(e);
            return false;
        }
        return true;
    };
    UnlockedOverlayFS.prototype.checkPath = function (p) {
        if (p === deletionLogPath) {
            throw api_error_1.ApiError.EPERM(p);
        }
    };
    UnlockedOverlayFS.prototype.checkPathAsync = function (p, cb) {
        if (p === deletionLogPath) {
            cb(api_error_1.ApiError.EPERM(p));
            return true;
        }
        return false;
    };
    UnlockedOverlayFS.prototype.createParentDirectoriesAsync = function (p, cb) {
        var parent = path.dirname(p);
        var toCreate = [];
        var self = this;
        this._writable.stat(parent, false, statDone);
        function statDone(err, stat) {
            if (err) {
                toCreate.push(parent);
                parent = path.dirname(parent);
                self._writable.stat(parent, false, statDone);
            }
            else {
                createParents();
            }
        }
        function createParents() {
            if (!toCreate.length) {
                return cb();
            }
            var dir = toCreate.pop();
            self._readable.stat(dir, false, function (err, stats) {
                // stop if we couldn't read the dir
                if (!stats) {
                    return cb();
                }
                self._writable.mkdir(dir, stats.mode, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    createParents();
                });
            });
        }
    };
    /**
     * With the given path, create the needed parent directories on the writable storage
     * should they not exist. Use modes from the read-only storage.
     */
    UnlockedOverlayFS.prototype.createParentDirectories = function (p) {
        var _this = this;
        var parent = path.dirname(p), toCreate = [];
        while (!this._writable.existsSync(parent)) {
            toCreate.push(parent);
            parent = path.dirname(parent);
        }
        toCreate = toCreate.reverse();
        toCreate.forEach(function (p) {
            _this._writable.mkdirSync(p, _this.statSync(p, false).mode);
        });
    };
    /**
     * Helper function:
     * - Ensures p is on writable before proceeding. Throws an error if it doesn't exist.
     * - Calls f to perform operation on writable.
     */
    UnlockedOverlayFS.prototype.operateOnWritable = function (p, f) {
        if (this.existsSync(p)) {
            if (!this._writable.existsSync(p)) {
                // File is on readable storage. Copy to writable storage before
                // changing its mode.
                this.copyToWritable(p);
            }
            f();
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.operateOnWritableAsync = function (p, cb) {
        var _this = this;
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (existsWritable) {
                if (existsWritable) {
                    cb();
                }
                else {
                    return _this.copyToWritableAsync(p, cb);
                }
            });
        });
    };
    /**
     * Copy from readable to writable storage.
     * PRECONDITION: File does not exist on writable storage.
     */
    UnlockedOverlayFS.prototype.copyToWritable = function (p) {
        var pStats = this.statSync(p, false);
        if (pStats.isDirectory()) {
            this._writable.mkdirSync(p, pStats.mode);
        }
        else {
            this.writeFileSync(p, this._readable.readFileSync(p, null, getFlag('r')), null, getFlag('w'), this.statSync(p, false).mode);
        }
    };
    UnlockedOverlayFS.prototype.copyToWritableAsync = function (p, cb) {
        var _this = this;
        this.stat(p, false, function (err, pStats) {
            if (err) {
                return cb(err);
            }
            if (pStats.isDirectory()) {
                return _this._writable.mkdir(p, pStats.mode, cb);
            }
            // need to copy file.
            _this._readable.readFile(p, null, getFlag('r'), function (err, data) {
                if (err) {
                    return cb(err);
                }
                _this.writeFile(p, data, null, getFlag('w'), pStats.mode, cb);
            });
        });
    };
    return UnlockedOverlayFS;
}(file_system_1.BaseFileSystem));
exports.UnlockedOverlayFS = UnlockedOverlayFS;
/**
 * OverlayFS makes a read-only filesystem writable by storing writes on a second,
 * writable file system. Deletes are persisted via metadata stored on the writable
 * file system.
 */
var OverlayFS = (function (_super) {
    __extends(OverlayFS, _super);
    /**
     * @param writable The file system to write modified files to.
     * @param readable The file system that initially populates this file system.
     */
    function OverlayFS(writable, readable) {
        return _super.call(this, new UnlockedOverlayFS(writable, readable)) || this;
    }
    OverlayFS.isAvailable = function () {
        return UnlockedOverlayFS.isAvailable();
    };
    OverlayFS.prototype.initialize = function (cb) {
        _super.prototype.initialize.call(this, cb);
    };
    OverlayFS.prototype.getOverlayedFileSystems = function () {
        return _super.prototype.getFSUnlocked.call(this).getOverlayedFileSystems();
    };
    OverlayFS.prototype.unwrap = function () {
        return _super.prototype.getFSUnlocked.call(this);
    };
    return OverlayFS;
}(locked_fs_1["default"]));
exports["default"] = OverlayFS;
//# sourceMappingURL=OverlayFS.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var mutex_1 = __webpack_require__(44);
/**
 * This class serializes access to an underlying async filesystem.
 * For example, on an OverlayFS instance with an async lower
 * directory operations like rename and rmdir may involve multiple
 * requests involving both the upper and lower filesystems -- they
 * are not executed in a single atomic step.  OverlayFS uses this
 * LockedFS to avoid having to reason about the correctness of
 * multiple requests interleaving.
 */
var LockedFS = (function () {
    function LockedFS(fs) {
        this._fs = fs;
        this._mu = new mutex_1["default"]();
    }
    LockedFS.prototype.getName = function () {
        return 'LockedFS<' + this._fs.getName() + '>';
    };
    LockedFS.prototype.getFSUnlocked = function () {
        return this._fs;
    };
    LockedFS.prototype.initialize = function (cb) {
        // FIXME: check to see if FS supports initialization
        this._fs.initialize(cb);
    };
    LockedFS.prototype.diskSpace = function (p, cb) {
        // FIXME: should this lock?
        this._fs.diskSpace(p, cb);
    };
    LockedFS.prototype.isReadOnly = function () {
        return this._fs.isReadOnly();
    };
    LockedFS.prototype.supportsLinks = function () {
        return this._fs.supportsLinks();
    };
    LockedFS.prototype.supportsProps = function () {
        return this._fs.supportsProps();
    };
    LockedFS.prototype.supportsSynch = function () {
        return this._fs.supportsSynch();
    };
    LockedFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rename(oldPath, newPath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.renameSync = function (oldPath, newPath) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.renameSync(oldPath, newPath);
    };
    LockedFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.stat(p, isLstat, function (err, stat) {
                _this._mu.unlock();
                cb(err, stat);
            });
        });
    };
    LockedFS.prototype.statSync = function (p, isLstat) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.statSync(p, isLstat);
    };
    LockedFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.open(p, flag, mode, function (err, fd) {
                _this._mu.unlock();
                cb(err, fd);
            });
        });
    };
    LockedFS.prototype.openSync = function (p, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.openSync(p, flag, mode);
    };
    LockedFS.prototype.unlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.unlink(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.unlinkSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.unlinkSync(p);
    };
    LockedFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rmdir(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.rmdirSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.rmdirSync(p);
    };
    LockedFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.mkdir(p, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.mkdirSync = function (p, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.mkdirSync(p, mode);
    };
    LockedFS.prototype.readdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readdir(p, function (err, files) {
                _this._mu.unlock();
                cb(err, files);
            });
        });
    };
    LockedFS.prototype.readdirSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readdirSync(p);
    };
    LockedFS.prototype.exists = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.exists(p, function (exists) {
                _this._mu.unlock();
                cb(exists);
            });
        });
    };
    LockedFS.prototype.existsSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.existsSync(p);
    };
    LockedFS.prototype.realpath = function (p, cache, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.realpath(p, cache, function (err, resolvedPath) {
                _this._mu.unlock();
                cb(err, resolvedPath);
            });
        });
    };
    LockedFS.prototype.realpathSync = function (p, cache) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.realpathSync(p, cache);
    };
    LockedFS.prototype.truncate = function (p, len, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.truncate(p, len, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.truncateSync = function (p, len) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.truncateSync(p, len);
    };
    LockedFS.prototype.readFile = function (fname, encoding, flag, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readFile(fname, encoding, flag, function (err, data) {
                _this._mu.unlock();
                cb(err, data);
            });
        });
    };
    LockedFS.prototype.readFileSync = function (fname, encoding, flag) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readFileSync(fname, encoding, flag);
    };
    LockedFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.writeFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.writeFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.writeFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.appendFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.appendFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.appendFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chmod(p, isLchmod, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chmodSync = function (p, isLchmod, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.chmodSync(p, isLchmod, mode);
    };
    LockedFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chown(p, isLchown, uid, gid, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.chownSync(p, isLchown, uid, gid);
    };
    LockedFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.utimes(p, atime, mtime, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.utimesSync = function (p, atime, mtime) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.utimesSync(p, atime, mtime);
    };
    LockedFS.prototype.link = function (srcpath, dstpath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.link(srcpath, dstpath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.linkSync = function (srcpath, dstpath) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.linkSync(srcpath, dstpath);
    };
    LockedFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.symlink(srcpath, dstpath, type, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.symlinkSync(srcpath, dstpath, type);
    };
    LockedFS.prototype.readlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readlink(p, function (err, linkString) {
                _this._mu.unlock();
                cb(err, linkString);
            });
        });
    };
    LockedFS.prototype.readlinkSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readlinkSync(p);
    };
    return LockedFS;
}());
exports["default"] = LockedFS;
//# sourceMappingURL=locked_fs.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
var setImmediate_1 = __webpack_require__(15);
/**
 * Non-recursive mutex
 * @hidden
 */
var Mutex = (function () {
    function Mutex() {
        this._locked = false;
        this._waiters = [];
    }
    Mutex.prototype.lock = function (cb) {
        if (this._locked) {
            this._waiters.push(cb);
            return;
        }
        this._locked = true;
        cb();
    };
    Mutex.prototype.unlock = function () {
        if (!this._locked) {
            throw new Error('unlock of a non-locked mutex');
        }
        var next = this._waiters.shift();
        // don't unlock - we want to queue up next for the
        // _end_ of the current task execution, but we don't
        // want it to be called inline with whatever the
        // current stack is.  This way we still get the nice
        // behavior that an unlock immediately followed by a
        // lock won't cause starvation.
        if (next) {
            setImmediate_1["default"](next);
            return;
        }
        this._locked = false;
    };
    Mutex.prototype.tryLock = function () {
        if (this._locked) {
            return false;
        }
        this._locked = true;
        return true;
    };
    Mutex.prototype.isLocked = function () {
        return this._locked;
    };
    return Mutex;
}());
exports["default"] = Mutex;
//# sourceMappingURL=mutex.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var util_1 = __webpack_require__(1);
var file_1 = __webpack_require__(13);
var node_fs_stats_1 = __webpack_require__(5);
var preload_file_1 = __webpack_require__(7);
var global_1 = __webpack_require__(9);
var node_fs_1 = __webpack_require__(8);
/**
 * @hidden
 */
var SpecialArgType;
(function (SpecialArgType) {
    // Callback
    SpecialArgType[SpecialArgType["CB"] = 0] = "CB";
    // File descriptor
    SpecialArgType[SpecialArgType["FD"] = 1] = "FD";
    // API error
    SpecialArgType[SpecialArgType["API_ERROR"] = 2] = "API_ERROR";
    // Stats object
    SpecialArgType[SpecialArgType["STATS"] = 3] = "STATS";
    // Initial probe for file system information.
    SpecialArgType[SpecialArgType["PROBE"] = 4] = "PROBE";
    // FileFlag object.
    SpecialArgType[SpecialArgType["FILEFLAG"] = 5] = "FILEFLAG";
    // Buffer object.
    SpecialArgType[SpecialArgType["BUFFER"] = 6] = "BUFFER";
    // Generic Error object.
    SpecialArgType[SpecialArgType["ERROR"] = 7] = "ERROR";
})(SpecialArgType || (SpecialArgType = {}));
/**
 * Converts callback arguments into ICallbackArgument objects, and back
 * again.
 * @hidden
 */
var CallbackArgumentConverter = (function () {
    function CallbackArgumentConverter() {
        this._callbacks = {};
        this._nextId = 0;
    }
    CallbackArgumentConverter.prototype.toRemoteArg = function (cb) {
        var id = this._nextId++;
        this._callbacks[id] = cb;
        return {
            type: SpecialArgType.CB,
            id: id
        };
    };
    CallbackArgumentConverter.prototype.toLocalArg = function (id) {
        var cb = this._callbacks[id];
        delete this._callbacks[id];
        return cb;
    };
    return CallbackArgumentConverter;
}());
/**
 * @hidden
 */
var FileDescriptorArgumentConverter = (function () {
    function FileDescriptorArgumentConverter() {
        this._fileDescriptors = {};
        this._nextId = 0;
    }
    FileDescriptorArgumentConverter.prototype.toRemoteArg = function (fd, p, flag, cb) {
        var id = this._nextId++;
        var data;
        var stat;
        this._fileDescriptors[id] = fd;
        // Extract needed information asynchronously.
        fd.stat(function (err, stats) {
            if (err) {
                cb(err);
            }
            else {
                stat = bufferToTransferrableObject(stats.toBuffer());
                // If it's a readable flag, we need to grab contents.
                if (flag.isReadable()) {
                    fd.read(Buffer.alloc(stats.size), 0, stats.size, 0, function (err, bytesRead, buff) {
                        if (err) {
                            cb(err);
                        }
                        else {
                            data = bufferToTransferrableObject(buff);
                            cb(null, {
                                type: SpecialArgType.FD,
                                id: id,
                                data: data,
                                stat: stat,
                                path: p,
                                flag: flag.getFlagString()
                            });
                        }
                    });
                }
                else {
                    // File is not readable, which means writing to it will append or
                    // truncate/replace existing contents. Return an empty arraybuffer.
                    cb(null, {
                        type: SpecialArgType.FD,
                        id: id,
                        data: new ArrayBuffer(0),
                        stat: stat,
                        path: p,
                        flag: flag.getFlagString()
                    });
                }
            }
        });
    };
    FileDescriptorArgumentConverter.prototype.applyFdAPIRequest = function (request, cb) {
        var _this = this;
        var fdArg = request.args[0];
        this._applyFdChanges(fdArg, function (err, fd) {
            if (err) {
                cb(err);
            }
            else {
                // Apply method on now-changed file descriptor.
                fd[request.method](function (e) {
                    if (request.method === 'close') {
                        delete _this._fileDescriptors[fdArg.id];
                    }
                    cb(e);
                });
            }
        });
    };
    FileDescriptorArgumentConverter.prototype._applyFdChanges = function (remoteFd, cb) {
        var fd = this._fileDescriptors[remoteFd.id], data = transferrableObjectToBuffer(remoteFd.data), remoteStats = node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(remoteFd.stat));
        // Write data if the file is writable.
        var flag = file_flag_1.FileFlag.getFileFlag(remoteFd.flag);
        if (flag.isWriteable()) {
            // Appendable: Write to end of file.
            // Writeable: Replace entire contents of file.
            fd.write(data, 0, data.length, flag.isAppendable() ? fd.getPos() : 0, function (e) {
                function applyStatChanges() {
                    // Check if mode changed.
                    fd.stat(function (e, stats) {
                        if (e) {
                            cb(e);
                        }
                        else {
                            if (stats.mode !== remoteStats.mode) {
                                fd.chmod(remoteStats.mode, function (e) {
                                    cb(e, fd);
                                });
                            }
                            else {
                                cb(e, fd);
                            }
                        }
                    });
                }
                if (e) {
                    cb(e);
                }
                else {
                    // If writeable & not appendable, we need to ensure file contents are
                    // identical to those from the remote FD. Thus, we truncate to the
                    // length of the remote file.
                    if (!flag.isAppendable()) {
                        fd.truncate(data.length, function () {
                            applyStatChanges();
                        });
                    }
                    else {
                        applyStatChanges();
                    }
                }
            });
        }
        else {
            cb(null, fd);
        }
    };
    return FileDescriptorArgumentConverter;
}());
/**
 * @hidden
 */
function apiErrorLocal2Remote(e) {
    return {
        type: SpecialArgType.API_ERROR,
        errorData: bufferToTransferrableObject(e.writeToBuffer())
    };
}
/**
 * @hidden
 */
function apiErrorRemote2Local(e) {
    return api_error_1.ApiError.fromBuffer(transferrableObjectToBuffer(e.errorData));
}
/**
 * @hidden
 */
function errorLocal2Remote(e) {
    return {
        type: SpecialArgType.ERROR,
        name: e.name,
        message: e.message,
        stack: e.stack
    };
}
/**
 * @hidden
 */
function errorRemote2Local(e) {
    var cnstr = global_1["default"][e.name];
    if (typeof (cnstr) !== 'function') {
        cnstr = Error;
    }
    var err = new cnstr(e.message);
    err.stack = e.stack;
    return err;
}
/**
 * @hidden
 */
function statsLocal2Remote(stats) {
    return {
        type: SpecialArgType.STATS,
        statsData: bufferToTransferrableObject(stats.toBuffer())
    };
}
/**
 * @hidden
 */
function statsRemote2Local(stats) {
    return node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(stats.statsData));
}
/**
 * @hidden
 */
function fileFlagLocal2Remote(flag) {
    return {
        type: SpecialArgType.FILEFLAG,
        flagStr: flag.getFlagString()
    };
}
/**
 * @hidden
 */
function fileFlagRemote2Local(remoteFlag) {
    return file_flag_1.FileFlag.getFileFlag(remoteFlag.flagStr);
}
/**
 * @hidden
 */
function bufferToTransferrableObject(buff) {
    return util_1.buffer2ArrayBuffer(buff);
}
/**
 * @hidden
 */
function transferrableObjectToBuffer(buff) {
    return util_1.arrayBuffer2Buffer(buff);
}
/**
 * @hidden
 */
function bufferLocal2Remote(buff) {
    return {
        type: SpecialArgType.BUFFER,
        data: bufferToTransferrableObject(buff)
    };
}
/**
 * @hidden
 */
function bufferRemote2Local(buffArg) {
    return transferrableObjectToBuffer(buffArg.data);
}
/**
 * @hidden
 */
function isAPIRequest(data) {
    return data && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
/**
 * @hidden
 */
function isAPIResponse(data) {
    return data && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
/**
 * Represents a remote file in a different worker/thread.
 */
var WorkerFile = (function (_super) {
    __extends(WorkerFile, _super);
    function WorkerFile(_fs, _path, _flag, _stat, remoteFdId, contents) {
        var _this = _super.call(this, _fs, _path, _flag, _stat, contents) || this;
        _this._remoteFdId = remoteFdId;
        return _this;
    }
    WorkerFile.prototype.getRemoteFdId = function () {
        return this._remoteFdId;
    };
    /**
     * @hidden
     */
    WorkerFile.prototype.toRemoteArg = function () {
        return {
            type: SpecialArgType.FD,
            id: this._remoteFdId,
            data: bufferToTransferrableObject(this.getBuffer()),
            stat: bufferToTransferrableObject(this.getStats().toBuffer()),
            path: this.getPath(),
            flag: this.getFlag().getFlagString()
        };
    };
    WorkerFile.prototype.sync = function (cb) {
        this._syncClose('sync', cb);
    };
    WorkerFile.prototype.close = function (cb) {
        this._syncClose('close', cb);
    };
    WorkerFile.prototype._syncClose = function (type, cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs.syncClose(type, this, function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    return WorkerFile;
}(preload_file_1["default"]));
/**
 * WorkerFS lets you access a BrowserFS instance that is running in a different
 * JavaScript context (e.g. access BrowserFS in one of your WebWorkers, or
 * access BrowserFS running on the main page from a WebWorker).
 *
 * For example, to have a WebWorker access files in the main browser thread,
 * do the following:
 *
 * MAIN BROWSER THREAD:
 *
 * ```javascript
 *   // Listen for remote file system requests.
 *   BrowserFS.FileSystem.WorkerFS.attachRemoteListener(webWorkerObject);
 * ```
 *
 * WEBWORKER THREAD:
 *
 * ```javascript
 *   // Set the remote file system as the root file system.
 *   BrowserFS.initialize(new BrowserFS.FileSystem.WorkerFS(self));
 * ```
 *
 * Note that synchronous operations are not permitted on the WorkerFS, regardless
 * of the configuration option of the remote FS.
 */
var WorkerFS = (function (_super) {
    __extends(WorkerFS, _super);
    /**
     * Constructs a new WorkerFS instance that connects with BrowserFS running on
     * the specified worker.
     */
    function WorkerFS(worker) {
        var _this = _super.call(this) || this;
        _this._callbackConverter = new CallbackArgumentConverter();
        _this._isInitialized = false;
        _this._isReadOnly = false;
        _this._supportLinks = false;
        _this._supportProps = false;
        _this._worker = worker;
        _this._worker.addEventListener('message', function (e) {
            var resp = e.data;
            if (isAPIResponse(resp)) {
                var i = void 0;
                var args = resp.args;
                var fixedArgs = new Array(args.length);
                // Dispatch event to correct id.
                for (i = 0; i < fixedArgs.length; i++) {
                    fixedArgs[i] = _this._argRemote2Local(args[i]);
                }
                _this._callbackConverter.toLocalArg(resp.cbId).apply(null, fixedArgs);
            }
        });
        return _this;
    }
    WorkerFS.isAvailable = function () {
        return typeof (importScripts) !== 'undefined' || typeof (Worker) !== 'undefined';
    };
    /**
     * Attaches a listener to the remote worker for file system requests.
     */
    WorkerFS.attachRemoteListener = function (worker) {
        var fdConverter = new FileDescriptorArgumentConverter();
        function argLocal2Remote(arg, requestArgs, cb) {
            switch (typeof arg) {
                case 'object':
                    if (arg instanceof node_fs_stats_1["default"]) {
                        cb(null, statsLocal2Remote(arg));
                    }
                    else if (arg instanceof api_error_1.ApiError) {
                        cb(null, apiErrorLocal2Remote(arg));
                    }
                    else if (arg instanceof file_1.BaseFile) {
                        // Pass in p and flags from original request.
                        cb(null, fdConverter.toRemoteArg(arg, requestArgs[0], requestArgs[1], cb));
                    }
                    else if (arg instanceof file_flag_1.FileFlag) {
                        cb(null, fileFlagLocal2Remote(arg));
                    }
                    else if (arg instanceof Buffer) {
                        cb(null, bufferLocal2Remote(arg));
                    }
                    else if (arg instanceof Error) {
                        cb(null, errorLocal2Remote(arg));
                    }
                    else {
                        cb(null, arg);
                    }
                    break;
                default:
                    cb(null, arg);
                    break;
            }
        }
        function argRemote2Local(arg, fixedRequestArgs) {
            if (!arg) {
                return arg;
            }
            switch (typeof arg) {
                case 'object':
                    if (typeof arg['type'] === 'number') {
                        var specialArg = arg;
                        switch (specialArg.type) {
                            case SpecialArgType.CB:
                                var cbId_1 = arg.id;
                                return function () {
                                    var i;
                                    var fixedArgs = new Array(arguments.length);
                                    var message, countdown = arguments.length;
                                    function abortAndSendError(err) {
                                        if (countdown > 0) {
                                            countdown = -1;
                                            message = {
                                                browserfsMessage: true,
                                                cbId: cbId_1,
                                                args: [apiErrorLocal2Remote(err)]
                                            };
                                            worker.postMessage(message);
                                        }
                                    }
                                    for (i = 0; i < arguments.length; i++) {
                                        // Capture i and argument.
                                        (function (i, arg) {
                                            argLocal2Remote(arg, fixedRequestArgs, function (err, fixedArg) {
                                                fixedArgs[i] = fixedArg;
                                                if (err) {
                                                    abortAndSendError(err);
                                                }
                                                else if (--countdown === 0) {
                                                    message = {
                                                        browserfsMessage: true,
                                                        cbId: cbId_1,
                                                        args: fixedArgs
                                                    };
                                                    worker.postMessage(message);
                                                }
                                            });
                                        })(i, arguments[i]);
                                    }
                                    if (arguments.length === 0) {
                                        message = {
                                            browserfsMessage: true,
                                            cbId: cbId_1,
                                            args: fixedArgs
                                        };
                                        worker.postMessage(message);
                                    }
                                };
                            case SpecialArgType.API_ERROR:
                                return apiErrorRemote2Local(specialArg);
                            case SpecialArgType.STATS:
                                return statsRemote2Local(specialArg);
                            case SpecialArgType.FILEFLAG:
                                return fileFlagRemote2Local(specialArg);
                            case SpecialArgType.BUFFER:
                                return bufferRemote2Local(specialArg);
                            case SpecialArgType.ERROR:
                                return errorRemote2Local(specialArg);
                            default:
                                // No idea what this is.
                                return arg;
                        }
                    }
                    else {
                        return arg;
                    }
                default:
                    return arg;
            }
        }
        worker.addEventListener('message', function (e) {
            var request = e.data;
            if (isAPIRequest(request)) {
                var args_1 = request.args, fixedArgs = new Array(args_1.length);
                switch (request.method) {
                    case 'close':
                    case 'sync':
                        (function () {
                            // File descriptor-relative methods.
                            var remoteCb = args_1[1];
                            fdConverter.applyFdAPIRequest(request, function (err) {
                                // Send response.
                                var response = {
                                    browserfsMessage: true,
                                    cbId: remoteCb.id,
                                    args: err ? [apiErrorLocal2Remote(err)] : []
                                };
                                worker.postMessage(response);
                            });
                        })();
                        break;
                    case 'probe':
                        (function () {
                            var rootFs = node_fs_1["default"].getRootFS(), remoteCb = args_1[1], probeResponse = {
                                type: SpecialArgType.PROBE,
                                isReadOnly: rootFs.isReadOnly(),
                                supportsLinks: rootFs.supportsLinks(),
                                supportsProps: rootFs.supportsProps()
                            }, response = {
                                browserfsMessage: true,
                                cbId: remoteCb.id,
                                args: [probeResponse]
                            };
                            worker.postMessage(response);
                        })();
                        break;
                    default:
                        // File system methods.
                        for (var i = 0; i < args_1.length; i++) {
                            fixedArgs[i] = argRemote2Local(args_1[i], fixedArgs);
                        }
                        var rootFS = node_fs_1["default"].getRootFS();
                        rootFS[request.method].apply(rootFS, fixedArgs);
                        break;
                }
            }
        });
    };
    WorkerFS.prototype.getName = function () {
        return 'WorkerFS';
    };
    /**
     * Called once both local and remote sides are set up.
     */
    WorkerFS.prototype.initialize = function (cb) {
        var _this = this;
        if (!this._isInitialized) {
            var message = {
                browserfsMessage: true,
                method: 'probe',
                args: [this._argLocal2Remote(util_1.emptyBuffer()), this._callbackConverter.toRemoteArg(function (probeResponse) {
                        _this._isInitialized = true;
                        _this._isReadOnly = probeResponse.isReadOnly;
                        _this._supportLinks = probeResponse.supportsLinks;
                        _this._supportProps = probeResponse.supportsProps;
                        cb();
                    })]
            };
            this._worker.postMessage(message);
        }
        else {
            cb();
        }
    };
    WorkerFS.prototype.isReadOnly = function () { return this._isReadOnly; };
    WorkerFS.prototype.supportsSynch = function () { return false; };
    WorkerFS.prototype.supportsLinks = function () { return this._supportLinks; };
    WorkerFS.prototype.supportsProps = function () { return this._supportProps; };
    WorkerFS.prototype.rename = function (oldPath, newPath, cb) {
        this._rpc('rename', arguments);
    };
    WorkerFS.prototype.stat = function (p, isLstat, cb) {
        this._rpc('stat', arguments);
    };
    WorkerFS.prototype.open = function (p, flag, mode, cb) {
        this._rpc('open', arguments);
    };
    WorkerFS.prototype.unlink = function (p, cb) {
        this._rpc('unlink', arguments);
    };
    WorkerFS.prototype.rmdir = function (p, cb) {
        this._rpc('rmdir', arguments);
    };
    WorkerFS.prototype.mkdir = function (p, mode, cb) {
        this._rpc('mkdir', arguments);
    };
    WorkerFS.prototype.readdir = function (p, cb) {
        this._rpc('readdir', arguments);
    };
    WorkerFS.prototype.exists = function (p, cb) {
        this._rpc('exists', arguments);
    };
    WorkerFS.prototype.realpath = function (p, cache, cb) {
        this._rpc('realpath', arguments);
    };
    WorkerFS.prototype.truncate = function (p, len, cb) {
        this._rpc('truncate', arguments);
    };
    WorkerFS.prototype.readFile = function (fname, encoding, flag, cb) {
        this._rpc('readFile', arguments);
    };
    WorkerFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('writeFile', arguments);
    };
    WorkerFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('appendFile', arguments);
    };
    WorkerFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        this._rpc('chmod', arguments);
    };
    WorkerFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        this._rpc('chown', arguments);
    };
    WorkerFS.prototype.utimes = function (p, atime, mtime, cb) {
        this._rpc('utimes', arguments);
    };
    WorkerFS.prototype.link = function (srcpath, dstpath, cb) {
        this._rpc('link', arguments);
    };
    WorkerFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        this._rpc('symlink', arguments);
    };
    WorkerFS.prototype.readlink = function (p, cb) {
        this._rpc('readlink', arguments);
    };
    WorkerFS.prototype.syncClose = function (method, fd, cb) {
        this._worker.postMessage({
            browserfsMessage: true,
            method: method,
            args: [fd.toRemoteArg(), this._callbackConverter.toRemoteArg(cb)]
        });
    };
    WorkerFS.prototype._argRemote2Local = function (arg) {
        if (!arg) {
            return arg;
        }
        switch (typeof arg) {
            case 'object':
                if (typeof arg['type'] === 'number') {
                    var specialArg = arg;
                    switch (specialArg.type) {
                        case SpecialArgType.API_ERROR:
                            return apiErrorRemote2Local(specialArg);
                        case SpecialArgType.FD:
                            var fdArg = specialArg;
                            return new WorkerFile(this, fdArg.path, file_flag_1.FileFlag.getFileFlag(fdArg.flag), node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(fdArg.stat)), fdArg.id, transferrableObjectToBuffer(fdArg.data));
                        case SpecialArgType.STATS:
                            return statsRemote2Local(specialArg);
                        case SpecialArgType.FILEFLAG:
                            return fileFlagRemote2Local(specialArg);
                        case SpecialArgType.BUFFER:
                            return bufferRemote2Local(specialArg);
                        case SpecialArgType.ERROR:
                            return errorRemote2Local(specialArg);
                        default:
                            return arg;
                    }
                }
                else {
                    return arg;
                }
            default:
                return arg;
        }
    };
    WorkerFS.prototype._rpc = function (methodName, args) {
        var fixedArgs = new Array(args.length);
        for (var i = 0; i < args.length; i++) {
            fixedArgs[i] = this._argLocal2Remote(args[i]);
        }
        var message = {
            browserfsMessage: true,
            method: methodName,
            args: fixedArgs
        };
        this._worker.postMessage(message);
    };
    /**
     * Converts a local argument into a remote argument. Public so WorkerFile objects can call it.
     */
    WorkerFS.prototype._argLocal2Remote = function (arg) {
        if (!arg) {
            return arg;
        }
        switch (typeof arg) {
            case "object":
                if (arg instanceof node_fs_stats_1["default"]) {
                    return statsLocal2Remote(arg);
                }
                else if (arg instanceof api_error_1.ApiError) {
                    return apiErrorLocal2Remote(arg);
                }
                else if (arg instanceof WorkerFile) {
                    return arg.toRemoteArg();
                }
                else if (arg instanceof file_flag_1.FileFlag) {
                    return fileFlagLocal2Remote(arg);
                }
                else if (arg instanceof Buffer) {
                    return bufferLocal2Remote(arg);
                }
                else if (arg instanceof Error) {
                    return errorLocal2Remote(arg);
                }
                else {
                    return "Unknown argument";
                }
            case "function":
                return this._callbackConverter.toRemoteArg(arg);
            default:
                return arg;
        }
    };
    return WorkerFS;
}(file_system_1.BaseFileSystem));
exports["default"] = WorkerFS;
//# sourceMappingURL=WorkerFS.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var file_system_1 = __webpack_require__(4);
var api_error_1 = __webpack_require__(0);
var file_flag_1 = __webpack_require__(6);
var util_1 = __webpack_require__(1);
var preload_file_1 = __webpack_require__(7);
var xhr_1 = __webpack_require__(47);
var file_index_1 = __webpack_require__(19);
/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
/**
 * A simple filesystem backed by XMLHttpRequests.
 */
var XmlHttpRequest = (function (_super) {
    __extends(XmlHttpRequest, _super);
    /**
     * Constructs the file system. You must provide the directory listing as a JSON object
     * produced by the `make_xhrfs_index` script.
     *
     * If you install BrowserFS globally with `npm i -g browserfs`, you can generate a listing by
     * running `make_xhrfs_index` in your terminal in the directory you would like to index:
     *
     * ```
     * make_xhrfs_index > index.json
     * ```
     *
     * Listings objects look like the following:
     *
     * ```json
     * {
     *   "home": {
     *     "jvilk": {
     *       "someFile.txt": null,
     *       "someDir": {
     *         // Empty directory
     *       }
     *     }
     *   }
     * }
     * ```
     *
     * *This example has the folder `/home/jvilk` with subfile `someFile.txt` and subfolder `someDir`.*
     *
     * Alternatively, you can construct an XmlHttpRequest object by calling the static `FromURL` function:
     *
     * ```javascript
     * BrowserFS.FileSystem.XmlHttpRequest.FromURL('http://example.com/files/index.json');
     * ```
     *
     * **DEPRECATED:** You may pass a URL to the file index to the constructor, which will fetch the file index
     * *synchronously* and may freeze up the web page. This behavior will be removed in the next major version
     * of BrowserFS.
     *
     * @param listingUrlOrObj index object or the path to the JSON file index generated by
     *   `make_xhrfs_index`.
     * @param prefixUrl URL that is prepended to any file locations in the file index. e.g. if `prefixUrl = 'data/`, and the user wants to open the file `/foo.txt`,
     * the file system will fetch file `data/foo.txt`. The browser will access the file relative to the currrent webpage
     * URL.
     */
    function XmlHttpRequest(listingUrlOrObj, prefixUrl) {
        if (prefixUrl === void 0) { prefixUrl = ''; }
        var _this = _super.call(this) || this;
        if (!listingUrlOrObj) {
            listingUrlOrObj = 'index.json';
        }
        // prefix_url must end in a directory separator.
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        _this.prefixUrl = prefixUrl;
        var listing = null;
        if (typeof (listingUrlOrObj) === "string") {
            console.warn("Providing a directory listings URL to the XmlHttpRequest constructor is deprecated and may cause your webpage to freeze up. Please use the asynchronous 'FromURL' version instead, or provide the listings object directly. This API usage will be removed in the next major revision.");
            listing = _this._requestFileSync(listingUrlOrObj, 'json');
            if (!listing) {
                throw new Error("Unable to find listing at URL: ${listingUrlOrObj}");
            }
        }
        else {
            listing = listingUrlOrObj;
        }
        _this._index = file_index_1.FileIndex.fromListing(listing);
        return _this;
    }
    XmlHttpRequest.isAvailable = function () {
        return typeof (XMLHttpRequest) !== "undefined" && XMLHttpRequest !== null;
    };
    /**
     * Constructs an XmlHttpRequest object using the directory listing at the given URL.
     * Uses the base URL as the URL prefix for fetched files.
     * @param cb Called when the file system has been instantiated, or if an error occurs.
     */
    XmlHttpRequest.FromURL = function (url, cb, baseUrl) {
        if (baseUrl === void 0) { baseUrl = url.slice(0, url.lastIndexOf('/') + 1); }
        xhr_1.asyncDownloadFile(url, "json", function (e, data) {
            if (e) {
                cb(e);
            }
            else {
                cb(null, new XmlHttpRequest(data, baseUrl));
            }
        });
    };
    XmlHttpRequest.prototype.empty = function () {
        this._index.fileIterator(function (file) {
            file.fileData = null;
        });
    };
    XmlHttpRequest.prototype.getName = function () {
        return 'XmlHttpRequest';
    };
    XmlHttpRequest.prototype.diskSpace = function (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    XmlHttpRequest.prototype.isReadOnly = function () {
        return true;
    };
    XmlHttpRequest.prototype.supportsLinks = function () {
        return false;
    };
    XmlHttpRequest.prototype.supportsProps = function () {
        return false;
    };
    XmlHttpRequest.prototype.supportsSynch = function () {
        return true;
    };
    /**
     * Special XHR function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    XmlHttpRequest.prototype.preloadFile = function (path, buffer) {
        var inode = this._index.getInode(path);
        if (file_index_1.isFileInode(inode)) {
            if (inode === null) {
                throw api_error_1.ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.fileData = buffer;
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    XmlHttpRequest.prototype.stat = function (path, isLstat, cb) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(api_error_1.ApiError.ENOENT(path));
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    stats.size = size;
                    cb(null, stats.clone());
                });
            }
            else {
                cb(null, stats.clone());
            }
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, path));
        }
    };
    XmlHttpRequest.prototype.statSync = function (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                stats.size = this._requestFileSizeSync(path);
            }
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, path);
        }
        return stats;
    };
    XmlHttpRequest.prototype.open = function (path, flags, mode, cb) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path));
        }
        var self = this;
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(api_error_1.ApiError.ENOENT(path));
        }
        if (file_index_1.isFileInode(inode)) {
            var stats_1 = inode.getData();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    return cb(api_error_1.ApiError.EEXIST(path));
                case file_flag_1.ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats_1.fileData) {
                        return cb(null, new preload_file_1.NoSyncFile(self, path, flags, stats_1.clone(), stats_1.fileData));
                    }
                    // @todo be lazier about actually requesting the file
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        // we don't initially have file sizes
                        stats_1.size = buffer.length;
                        stats_1.fileData = buffer;
                        return cb(null, new preload_file_1.NoSyncFile(self, path, flags, stats_1.clone(), buffer));
                    });
                    break;
                default:
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(api_error_1.ApiError.EISDIR(path));
        }
    };
    XmlHttpRequest.prototype.openSync = function (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        if (file_index_1.isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(path);
                case file_flag_1.ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return new preload_file_1.NoSyncFile(this, path, flags, stats.clone(), stats.fileData);
                    }
                    // @todo be lazier about actually requesting the file
                    var buffer = this._requestFileSync(path, 'buffer');
                    // we don't initially have file sizes
                    stats.size = buffer.length;
                    stats.fileData = buffer;
                    return new preload_file_1.NoSyncFile(this, path, flags, stats.clone(), buffer);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    XmlHttpRequest.prototype.readdir = function (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    XmlHttpRequest.prototype.readdirSync = function (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    XmlHttpRequest.prototype.readFile = function (fname, encoding, flag, cb) {
        // Wrap cb in file closing code.
        var oldCb = cb;
        // Get file.
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err, arg) {
                fd.close(function (err2) {
                    if (!err) {
                        err = err2;
                    }
                    return oldCb(err, arg);
                });
            };
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                cb(err, util_1.copyingSlice(fdBuff));
            }
            else {
                tryToString(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    XmlHttpRequest.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return util_1.copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    XmlHttpRequest.prototype.getXhrPath = function (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    XmlHttpRequest.prototype._requestFileAsync = function (p, type, cb) {
        xhr_1.asyncDownloadFile(this.getXhrPath(p), type, cb);
    };
    XmlHttpRequest.prototype._requestFileSync = function (p, type) {
        return xhr_1.syncDownloadFile(this.getXhrPath(p), type);
    };
    /**
     * Only requests the HEAD content, for the file size.
     */
    XmlHttpRequest.prototype._requestFileSizeAsync = function (path, cb) {
        xhr_1.getFileSizeAsync(this.getXhrPath(path), cb);
    };
    XmlHttpRequest.prototype._requestFileSizeSync = function (path) {
        return xhr_1.getFileSizeSync(this.getXhrPath(path));
    };
    return XmlHttpRequest;
}(file_system_1.BaseFileSystem));
exports["default"] = XmlHttpRequest;
//# sourceMappingURL=XmlHttpRequest.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Contains utility methods for performing a variety of tasks with
 * XmlHttpRequest across browsers.
 */
exports.__esModule = true;
var util_1 = __webpack_require__(1);
var api_error_1 = __webpack_require__(0);
function asyncDownloadFileModern(p, type, cb) {
    var req = new XMLHttpRequest();
    req.open('GET', p, true);
    var jsonSupported = true;
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            // Some browsers don't support the JSON response type.
            // They either reset responseType, or throw an exception.
            // @see https://github.com/Modernizr/Modernizr/blob/master/src/testXhrType.js
            try {
                req.responseType = 'json';
                jsonSupported = req.responseType === 'json';
            }
            catch (e) {
                jsonSupported = false;
            }
            break;
        default:
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type));
    }
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        // XXX: WebKit-based browsers return *null* when XHRing an empty file.
                        return cb(null, req.response ? Buffer.from(req.response) : util_1.emptyBuffer());
                    case 'json':
                        if (jsonSupported) {
                            return cb(null, req.response);
                        }
                        else {
                            return cb(null, JSON.parse(req.responseText));
                        }
                }
            }
            else {
                return cb(new api_error_1.ApiError(req.status, "XHR error."));
            }
        }
    };
    req.send();
}
function syncDownloadFileModern(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    // On most platforms, we cannot set the responseType of synchronous downloads.
    // @todo Test for this; IE10 allows this, as do older versions of Chrome/FF.
    var data = null;
    var err = null;
    // Classic hack to download binary data as a string.
    req.overrideMimeType('text/plain; charset=x-user-defined');
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        // Convert the text into a buffer.
                        var text = req.responseText;
                        data = Buffer.alloc(text.length);
                        // Throw away the upper bits of each character.
                        for (var i = 0; i < text.length; i++) {
                            // This will automatically throw away the upper bit of each
                            // character for us.
                            data[i] = text.charCodeAt(i);
                        }
                        return;
                    case 'json':
                        data = JSON.parse(req.responseText);
                        return;
                }
            }
            else {
                err = new api_error_1.ApiError(req.status, "XHR error.");
                return;
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
function syncDownloadFileIE10(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            // IE10 does not support the JSON type.
            break;
        default:
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type);
    }
    var data;
    var err;
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        data = Buffer.from(req.response);
                        break;
                    case 'json':
                        data = JSON.parse(req.response);
                        break;
                }
            }
            else {
                err = new api_error_1.ApiError(req.status, "XHR error.");
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
/**
 * @hidden
 */
function getFileSize(async, p, cb) {
    var req = new XMLHttpRequest();
    req.open('HEAD', p, async);
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                try {
                    return cb(null, parseInt(req.getResponseHeader('Content-Length') || '-1', 10));
                }
                catch (e) {
                    // In the event that the header isn't present or there is an error...
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "XHR HEAD error: Could not read content-length."));
                }
            }
            else {
                return cb(new api_error_1.ApiError(req.status, "XHR HEAD error."));
            }
        }
    };
    req.send();
}
/**
 * Asynchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
exports.asyncDownloadFile = asyncDownloadFileModern;
/**
 * Synchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
exports.syncDownloadFile = (util_1.isIE && typeof Blob !== 'undefined') ? syncDownloadFileIE10 : syncDownloadFileModern;
/**
 * Synchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function getFileSizeSync(p) {
    var rv = -1;
    getFileSize(false, p, function (err, size) {
        if (err) {
            throw err;
        }
        rv = size;
    });
    return rv;
}
exports.getFileSizeSync = getFileSizeSync;
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function getFileSizeAsync(p, cb) {
    getFileSize(true, p, cb);
}
exports.getFileSizeAsync = getFileSizeAsync;
//# sourceMappingURL=xhr.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
var node_fs_stats_1 = __webpack_require__(5);
var file_system_1 = __webpack_require__(4);
var file_flag_1 = __webpack_require__(6);
var preload_file_1 = __webpack_require__(7);
var util_1 = __webpack_require__(1);
var extended_ascii_1 = __webpack_require__(49);
var setImmediate_1 = __webpack_require__(15);
/**
 * @hidden
 */
var inflateRaw = __webpack_require__(50).inflateRaw;
var file_index_1 = __webpack_require__(19);
/**
 * Maps CompressionMethod => function that decompresses.
 * @hidden
 */
var decompressionMethods = {};
/**
 * 4.4.2.2: Indicates the compatibiltiy of a file's external attributes.
 */
var ExternalFileAttributeType;
(function (ExternalFileAttributeType) {
    ExternalFileAttributeType[ExternalFileAttributeType["MSDOS"] = 0] = "MSDOS";
    ExternalFileAttributeType[ExternalFileAttributeType["AMIGA"] = 1] = "AMIGA";
    ExternalFileAttributeType[ExternalFileAttributeType["OPENVMS"] = 2] = "OPENVMS";
    ExternalFileAttributeType[ExternalFileAttributeType["UNIX"] = 3] = "UNIX";
    ExternalFileAttributeType[ExternalFileAttributeType["VM_CMS"] = 4] = "VM_CMS";
    ExternalFileAttributeType[ExternalFileAttributeType["ATARI_ST"] = 5] = "ATARI_ST";
    ExternalFileAttributeType[ExternalFileAttributeType["OS2_HPFS"] = 6] = "OS2_HPFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MAC"] = 7] = "MAC";
    ExternalFileAttributeType[ExternalFileAttributeType["Z_SYSTEM"] = 8] = "Z_SYSTEM";
    ExternalFileAttributeType[ExternalFileAttributeType["CP_M"] = 9] = "CP_M";
    ExternalFileAttributeType[ExternalFileAttributeType["NTFS"] = 10] = "NTFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MVS"] = 11] = "MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["VSE"] = 12] = "VSE";
    ExternalFileAttributeType[ExternalFileAttributeType["ACORN_RISC"] = 13] = "ACORN_RISC";
    ExternalFileAttributeType[ExternalFileAttributeType["VFAT"] = 14] = "VFAT";
    ExternalFileAttributeType[ExternalFileAttributeType["ALT_MVS"] = 15] = "ALT_MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["BEOS"] = 16] = "BEOS";
    ExternalFileAttributeType[ExternalFileAttributeType["TANDEM"] = 17] = "TANDEM";
    ExternalFileAttributeType[ExternalFileAttributeType["OS_400"] = 18] = "OS_400";
    ExternalFileAttributeType[ExternalFileAttributeType["OSX"] = 19] = "OSX";
})(ExternalFileAttributeType = exports.ExternalFileAttributeType || (exports.ExternalFileAttributeType = {}));
/**
 * 4.4.5
 */
var CompressionMethod;
(function (CompressionMethod) {
    CompressionMethod[CompressionMethod["STORED"] = 0] = "STORED";
    CompressionMethod[CompressionMethod["SHRUNK"] = 1] = "SHRUNK";
    CompressionMethod[CompressionMethod["REDUCED_1"] = 2] = "REDUCED_1";
    CompressionMethod[CompressionMethod["REDUCED_2"] = 3] = "REDUCED_2";
    CompressionMethod[CompressionMethod["REDUCED_3"] = 4] = "REDUCED_3";
    CompressionMethod[CompressionMethod["REDUCED_4"] = 5] = "REDUCED_4";
    CompressionMethod[CompressionMethod["IMPLODE"] = 6] = "IMPLODE";
    CompressionMethod[CompressionMethod["DEFLATE"] = 8] = "DEFLATE";
    CompressionMethod[CompressionMethod["DEFLATE64"] = 9] = "DEFLATE64";
    CompressionMethod[CompressionMethod["TERSE_OLD"] = 10] = "TERSE_OLD";
    CompressionMethod[CompressionMethod["BZIP2"] = 12] = "BZIP2";
    CompressionMethod[CompressionMethod["LZMA"] = 14] = "LZMA";
    CompressionMethod[CompressionMethod["TERSE_NEW"] = 18] = "TERSE_NEW";
    CompressionMethod[CompressionMethod["LZ77"] = 19] = "LZ77";
    CompressionMethod[CompressionMethod["WAVPACK"] = 97] = "WAVPACK";
    CompressionMethod[CompressionMethod["PPMD"] = 98] = "PPMD"; // PPMd version I, Rev 1
})(CompressionMethod = exports.CompressionMethod || (exports.CompressionMethod = {}));
/**
 * Converts the input time and date in MS-DOS format into a JavaScript Date
 * object.
 * @hidden
 */
function msdos2date(time, date) {
    // MS-DOS Date
    // |0 0 0 0  0|0 0 0  0|0 0 0  0 0 0 0
    //   D (1-31)  M (1-23)  Y (from 1980)
    var day = date & 0x1F;
    // JS date is 0-indexed, DOS is 1-indexed.
    var month = ((date >> 5) & 0xF) - 1;
    var year = (date >> 9) + 1980;
    // MS DOS Time
    // |0 0 0 0  0|0 0 0  0 0 0|0  0 0 0 0
    //    Second      Minute       Hour
    var second = time & 0x1F;
    var minute = (time >> 5) & 0x3F;
    var hour = time >> 11;
    return new Date(year, month, day, hour, minute, second);
}
/**
 * Safely returns the string from the buffer, even if it is 0 bytes long.
 * (Normally, calling toString() on a buffer with start === end causes an
 * exception).
 * @hidden
 */
function safeToString(buff, useUTF8, start, length) {
    if (length === 0) {
        return "";
    }
    else if (useUTF8) {
        return buff.toString('utf8', start, start + length);
    }
    else {
        return extended_ascii_1["default"].byte2str(buff.slice(start, start + length));
    }
}
/*
   4.3.6 Overall .ZIP file format:

      [local file header 1]
      [encryption header 1]
      [file data 1]
      [data descriptor 1]
      .
      .
      .
      [local file header n]
      [encryption header n]
      [file data n]
      [data descriptor n]
      [archive decryption header]
      [archive extra data record]
      [central directory header 1]
      .
      .
      .
      [central directory header n]
      [zip64 end of central directory record]
      [zip64 end of central directory locator]
      [end of central directory record]
*/
/**
 * 4.3.7  Local file header:
 *
 *     local file header signature     4 bytes  (0x04034b50)
 *     version needed to extract       2 bytes
 *     general purpose bit flag        2 bytes
 *     compression method              2 bytes
 *    last mod file time              2 bytes
 *    last mod file date              2 bytes
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 *    file name length                2 bytes
 *    extra field length              2 bytes
 *
 *    file name (variable size)
 *    extra field (variable size)
 */
var FileHeader = (function () {
    function FileHeader(data) {
        this.data = data;
        if (data.readUInt32LE(0) !== 0x04034b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0));
        }
    }
    FileHeader.prototype.versionNeeded = function () { return this.data.readUInt16LE(4); };
    FileHeader.prototype.flags = function () { return this.data.readUInt16LE(6); };
    FileHeader.prototype.compressionMethod = function () { return this.data.readUInt16LE(8); };
    FileHeader.prototype.lastModFileTime = function () {
        // Time and date is in MS-DOS format.
        return msdos2date(this.data.readUInt16LE(10), this.data.readUInt16LE(12));
    };
    FileHeader.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(10);
    };
    FileHeader.prototype.crc32 = function () { return this.data.readUInt32LE(14); };
    /**
     * These two values are COMPLETELY USELESS.
     *
     * Section 4.4.9:
     *   If bit 3 of the general purpose bit flag is set,
     *   these fields are set to zero in the local header and the
     *   correct values are put in the data descriptor and
     *   in the central directory.
     *
     * So we'll just use the central directory's values.
     */
    // public compressedSize(): number { return this.data.readUInt32LE(18); }
    // public uncompressedSize(): number { return this.data.readUInt32LE(22); }
    FileHeader.prototype.fileNameLength = function () { return this.data.readUInt16LE(26); };
    FileHeader.prototype.extraFieldLength = function () { return this.data.readUInt16LE(28); };
    FileHeader.prototype.fileName = function () {
        return safeToString(this.data, this.useUTF8(), 30, this.fileNameLength());
    };
    FileHeader.prototype.extraField = function () {
        var start = 30 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    FileHeader.prototype.totalSize = function () { return 30 + this.fileNameLength() + this.extraFieldLength(); };
    FileHeader.prototype.useUTF8 = function () { return (this.flags() & 0x800) === 0x800; };
    return FileHeader;
}());
exports.FileHeader = FileHeader;
/**
 * 4.3.8  File data
 *
 *   Immediately following the local header for a file
 *   SHOULD be placed the compressed or stored data for the file.
 *   If the file is encrypted, the encryption header for the file
 *   SHOULD be placed after the local header and before the file
 *   data. The series of [local file header][encryption header]
 *   [file data][data descriptor] repeats for each file in the
 *   .ZIP archive.
 *
 *   Zero-byte files, directories, and other file types that
 *   contain no content MUST not include file data.
 */
var FileData = (function () {
    function FileData(header, record, data) {
        this.header = header;
        this.record = record;
        this.data = data;
    }
    FileData.prototype.decompress = function () {
        // Check the compression
        var compressionMethod = this.header.compressionMethod();
        var fcn = decompressionMethods[compressionMethod];
        if (fcn) {
            return fcn(this.data, this.record.compressedSize(), this.record.uncompressedSize(), this.record.flag());
        }
        else {
            var name_1 = CompressionMethod[compressionMethod];
            if (!name_1) {
                name_1 = "Unknown: " + compressionMethod;
            }
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid compression method on file '" + this.header.fileName() + "': " + name_1);
        }
    };
    FileData.prototype.getHeader = function () {
        return this.header;
    };
    FileData.prototype.getRecord = function () {
        return this.record;
    };
    FileData.prototype.getRawData = function () {
        return this.data;
    };
    return FileData;
}());
exports.FileData = FileData;
/**
 * 4.3.9  Data descriptor:
 *
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 */
var DataDescriptor = (function () {
    function DataDescriptor(data) {
        this.data = data;
    }
    DataDescriptor.prototype.crc32 = function () { return this.data.readUInt32LE(0); };
    DataDescriptor.prototype.compressedSize = function () { return this.data.readUInt32LE(4); };
    DataDescriptor.prototype.uncompressedSize = function () { return this.data.readUInt32LE(8); };
    return DataDescriptor;
}());
exports.DataDescriptor = DataDescriptor;
/*
` 4.3.10  Archive decryption header:

      4.3.10.1 The Archive Decryption Header is introduced in version 6.2
      of the ZIP format specification.  This record exists in support
      of the Central Directory Encryption Feature implemented as part of
      the Strong Encryption Specification as described in this document.
      When the Central Directory Structure is encrypted, this decryption
      header MUST precede the encrypted data segment.
 */
/**
 * 4.3.11  Archive extra data record:
 *
 *      archive extra data signature    4 bytes  (0x08064b50)
 *      extra field length              4 bytes
 *      extra field data                (variable size)
 *
 *    4.3.11.1 The Archive Extra Data Record is introduced in version 6.2
 *    of the ZIP format specification.  This record MAY be used in support
 *    of the Central Directory Encryption Feature implemented as part of
 *    the Strong Encryption Specification as described in this document.
 *    When present, this record MUST immediately precede the central
 *    directory data structure.
 */
var ArchiveExtraDataRecord = (function () {
    function ArchiveExtraDataRecord(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x08064b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid archive extra data record signature: " + this.data.readUInt32LE(0));
        }
    }
    ArchiveExtraDataRecord.prototype.length = function () { return this.data.readUInt32LE(4); };
    ArchiveExtraDataRecord.prototype.extraFieldData = function () { return this.data.slice(8, 8 + this.length()); };
    return ArchiveExtraDataRecord;
}());
exports.ArchiveExtraDataRecord = ArchiveExtraDataRecord;
/**
 * 4.3.13 Digital signature:
 *
 *      header signature                4 bytes  (0x05054b50)
 *      size of data                    2 bytes
 *      signature data (variable size)
 *
 *    With the introduction of the Central Directory Encryption
 *    feature in version 6.2 of this specification, the Central
 *    Directory Structure MAY be stored both compressed and encrypted.
 *    Although not required, it is assumed when encrypting the
 *    Central Directory Structure, that it will be compressed
 *    for greater storage efficiency.  Information on the
 *    Central Directory Encryption feature can be found in the section
 *    describing the Strong Encryption Specification. The Digital
 *    Signature record will be neither compressed nor encrypted.
 */
var DigitalSignature = (function () {
    function DigitalSignature(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x05054b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid digital signature signature: " + this.data.readUInt32LE(0));
        }
    }
    DigitalSignature.prototype.size = function () { return this.data.readUInt16LE(4); };
    DigitalSignature.prototype.signatureData = function () { return this.data.slice(6, 6 + this.size()); };
    return DigitalSignature;
}());
exports.DigitalSignature = DigitalSignature;
/**
 * 4.3.12  Central directory structure:
 *
 *  central file header signature   4 bytes  (0x02014b50)
 *  version made by                 2 bytes
 *  version needed to extract       2 bytes
 *  general purpose bit flag        2 bytes
 *  compression method              2 bytes
 *  last mod file time              2 bytes
 *  last mod file date              2 bytes
 *  crc-32                          4 bytes
 *  compressed size                 4 bytes
 *  uncompressed size               4 bytes
 *  file name length                2 bytes
 *  extra field length              2 bytes
 *  file comment length             2 bytes
 *  disk number start               2 bytes
 *  internal file attributes        2 bytes
 *  external file attributes        4 bytes
 *  relative offset of local header 4 bytes
 *
 *  file name (variable size)
 *  extra field (variable size)
 *  file comment (variable size)
 */
var CentralDirectory = (function () {
    function CentralDirectory(zipData, data) {
        this.zipData = zipData;
        this.data = data;
        // Sanity check.
        if (this.data.readUInt32LE(0) !== 0x02014b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Central directory record has invalid signature: " + this.data.readUInt32LE(0));
        }
        this._filename = this.produceFilename();
    }
    CentralDirectory.prototype.versionMadeBy = function () { return this.data.readUInt16LE(4); };
    CentralDirectory.prototype.versionNeeded = function () { return this.data.readUInt16LE(6); };
    CentralDirectory.prototype.flag = function () { return this.data.readUInt16LE(8); };
    CentralDirectory.prototype.compressionMethod = function () { return this.data.readUInt16LE(10); };
    CentralDirectory.prototype.lastModFileTime = function () {
        // Time and date is in MS-DOS format.
        return msdos2date(this.data.readUInt16LE(12), this.data.readUInt16LE(14));
    };
    CentralDirectory.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(12);
    };
    CentralDirectory.prototype.crc32 = function () { return this.data.readUInt32LE(16); };
    CentralDirectory.prototype.compressedSize = function () { return this.data.readUInt32LE(20); };
    CentralDirectory.prototype.uncompressedSize = function () { return this.data.readUInt32LE(24); };
    CentralDirectory.prototype.fileNameLength = function () { return this.data.readUInt16LE(28); };
    CentralDirectory.prototype.extraFieldLength = function () { return this.data.readUInt16LE(30); };
    CentralDirectory.prototype.fileCommentLength = function () { return this.data.readUInt16LE(32); };
    CentralDirectory.prototype.diskNumberStart = function () { return this.data.readUInt16LE(34); };
    CentralDirectory.prototype.internalAttributes = function () { return this.data.readUInt16LE(36); };
    CentralDirectory.prototype.externalAttributes = function () { return this.data.readUInt32LE(38); };
    CentralDirectory.prototype.headerRelativeOffset = function () { return this.data.readUInt32LE(42); };
    CentralDirectory.prototype.produceFilename = function () {
        /*
          4.4.17.1 claims:
          * All slashes are forward ('/') slashes.
          * Filename doesn't begin with a slash.
          * No drive letters or any nonsense like that.
          * If filename is missing, the input came from standard input.
    
          Unfortunately, this isn't true in practice. Some Windows zip utilities use
          a backslash here, but the correct Unix-style path in file headers.
    
          To avoid seeking all over the file to recover the known-good filenames
          from file headers, we simply convert '/' to '\' here.
        */
        var fileName = safeToString(this.data, this.useUTF8(), 46, this.fileNameLength());
        return fileName.replace(/\\/g, "/");
    };
    CentralDirectory.prototype.fileName = function () {
        return this._filename;
    };
    CentralDirectory.prototype.rawFileName = function () {
        return this.data.slice(46, 46 + this.fileNameLength());
    };
    CentralDirectory.prototype.extraField = function () {
        var start = 44 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    CentralDirectory.prototype.fileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return safeToString(this.data, this.useUTF8(), start, this.fileCommentLength());
    };
    CentralDirectory.prototype.rawFileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return this.data.slice(start, start + this.fileCommentLength());
    };
    CentralDirectory.prototype.totalSize = function () {
        return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength();
    };
    CentralDirectory.prototype.isDirectory = function () {
        // NOTE: This assumes that the zip file implementation uses the lower byte
        //       of external attributes for DOS attributes for
        //       backwards-compatibility. This is not mandated, but appears to be
        //       commonplace.
        //       According to the spec, the layout of external attributes is
        //       platform-dependent.
        //       If that fails, we also check if the name of the file ends in '/',
        //       which is what Java's ZipFile implementation does.
        var fileName = this.fileName();
        return (this.externalAttributes() & 0x10 ? true : false) || (fileName.charAt(fileName.length - 1) === '/');
    };
    CentralDirectory.prototype.isFile = function () { return !this.isDirectory(); };
    CentralDirectory.prototype.useUTF8 = function () { return (this.flag() & 0x800) === 0x800; };
    CentralDirectory.prototype.isEncrypted = function () { return (this.flag() & 0x1) === 0x1; };
    CentralDirectory.prototype.getFileData = function () {
        // Need to grab the header before we can figure out where the actual
        // compressed data starts.
        var start = this.headerRelativeOffset();
        var header = new FileHeader(this.zipData.slice(start));
        return new FileData(header, this, this.zipData.slice(start + header.totalSize()));
    };
    CentralDirectory.prototype.getData = function () {
        return this.getFileData().decompress();
    };
    CentralDirectory.prototype.getRawData = function () {
        return this.getFileData().getRawData();
    };
    CentralDirectory.prototype.getStats = function () {
        return new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, this.uncompressedSize(), 0x16D, new Date(), this.lastModFileTime());
    };
    return CentralDirectory;
}());
exports.CentralDirectory = CentralDirectory;
/**
 * 4.3.16: end of central directory record
 *  end of central dir signature    4 bytes  (0x06054b50)
 *  number of this disk             2 bytes
 *  number of the disk with the
 *  start of the central directory  2 bytes
 *  total number of entries in the
 *  central directory on this disk  2 bytes
 *  total number of entries in
 *  the central directory           2 bytes
 *  size of the central directory   4 bytes
 *  offset of start of central
 *  directory with respect to
 *  the starting disk number        4 bytes
 *  .ZIP file comment length        2 bytes
 *  .ZIP file comment       (variable size)
 */
var EndOfCentralDirectory = (function () {
    function EndOfCentralDirectory(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x06054b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: End of central directory record has invalid signature: " + this.data.readUInt32LE(0));
        }
    }
    EndOfCentralDirectory.prototype.diskNumber = function () { return this.data.readUInt16LE(4); };
    EndOfCentralDirectory.prototype.cdDiskNumber = function () { return this.data.readUInt16LE(6); };
    EndOfCentralDirectory.prototype.cdDiskEntryCount = function () { return this.data.readUInt16LE(8); };
    EndOfCentralDirectory.prototype.cdTotalEntryCount = function () { return this.data.readUInt16LE(10); };
    EndOfCentralDirectory.prototype.cdSize = function () { return this.data.readUInt32LE(12); };
    EndOfCentralDirectory.prototype.cdOffset = function () { return this.data.readUInt32LE(16); };
    EndOfCentralDirectory.prototype.cdZipCommentLength = function () { return this.data.readUInt16LE(20); };
    EndOfCentralDirectory.prototype.cdZipComment = function () {
        // Assuming UTF-8. The specification doesn't specify.
        return safeToString(this.data, true, 22, this.cdZipCommentLength());
    };
    EndOfCentralDirectory.prototype.rawCdZipComment = function () {
        return this.data.slice(22, 22 + this.cdZipCommentLength());
    };
    return EndOfCentralDirectory;
}());
exports.EndOfCentralDirectory = EndOfCentralDirectory;
/**
 * Contains the table of contents of a Zip file.
 */
var ZipTOC = (function () {
    function ZipTOC(index, directoryEntries, eocd, data) {
        this.index = index;
        this.directoryEntries = directoryEntries;
        this.eocd = eocd;
        this.data = data;
    }
    return ZipTOC;
}());
exports.ZipTOC = ZipTOC;
/**
 * Zip file-backed filesystem
 * Implemented according to the standard:
 * http://www.pkware.com/documents/casestudies/APPNOTE.TXT
 *
 * While there are a few zip libraries for JavaScript (e.g. JSZip and zip.js),
 * they are not a good match for BrowserFS. In particular, these libraries
 * perform a lot of unneeded data copying, and eagerly decompress every file
 * in the zip file upon loading to check the CRC32. They also eagerly decode
 * strings. Furthermore, these libraries duplicate functionality already present
 * in BrowserFS (e.g. UTF-8 decoding and binary data manipulation).
 *
 * This filesystem takes advantage of BrowserFS's Buffer implementation, which
 * efficiently represents the zip file in memory (in both ArrayBuffer-enabled
 * browsers *and* non-ArrayBuffer browsers), and which can neatly be 'sliced'
 * without copying data. Each struct defined in the standard is represented with
 * a buffer slice pointing to an offset in the zip file, and has getters for
 * each field. As we anticipate that this data will not be read often, we choose
 * not to store each struct field in the JavaScript object; instead, to reduce
 * memory consumption, we retrieve it directly from the binary data each time it
 * is requested.
 *
 * When the filesystem is instantiated, we determine the directory structure
 * of the zip file as quickly as possible. We lazily decompress and check the
 * CRC32 of files. We do not cache decompressed files; if this is a desired
 * feature, it is best implemented as a generic file system wrapper that can
 * cache data from arbitrary file systems.
 *
 * For inflation, we use `pako`'s implementation:
 * https://github.com/nodeca/pako
 *
 * Current limitations:
 * * No encryption.
 * * No ZIP64 support.
 * * Read-only.
 *   Write support would require that we:
 *   - Keep track of changed/new files.
 *   - Compress changed files, and generate appropriate metadata for each.
 *   - Update file offsets for other files in the zip file.
 *   - Stream it out to a location.
 *   This isn't that bad, so we might do this at a later date.
 */
var ZipFS = (function (_super) {
    __extends(ZipFS, _super);
    /**
     * Constructs a ZipFS from the given zip file data. Name is optional, and is
     * used primarily for our unit tests' purposes to differentiate different
     * test zip files in test output.
     *
     * To avoid webpage responsiveness issues with large zip files, you can
     * call the static function `computeIndex` first to construct the zipfile's
     * table of contents, and then pass that object into the constructor:
     *
     * ```javascript
     * BrowserFS.FileSystem.ZipFS.computeIndex(myLargeZipFile, function(zipTOC) {
     *   var myZipFs = new BrowserFS.FileSystem.ZipFS(zipTOC);
     * });
     * ```
     *
     * `computeIndex` will process the zip file in chunks to keep your webpage
     * responsive.
     */
    function ZipFS(input, name) {
        if (name === void 0) { name = ''; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._index = new file_index_1.FileIndex();
        _this._directoryEntries = [];
        _this._eocd = null;
        if (input instanceof ZipTOC) {
            _this._index = input.index;
            _this._directoryEntries = input.directoryEntries;
            _this._eocd = input.eocd;
            _this.data = input.data;
        }
        else {
            _this.data = input;
            _this.populateIndex();
        }
        return _this;
    }
    /* tslint:enable:variable-name */
    ZipFS.isAvailable = function () { return true; };
    ZipFS.RegisterDecompressionMethod = function (m, fcn) {
        decompressionMethods[m] = fcn;
    };
    ZipFS.computeIndex = function (data, cb) {
        var index = new file_index_1.FileIndex();
        var eocd = ZipFS.getEOCD(data);
        if (eocd.diskNumber() !== eocd.cdDiskNumber()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support spanned zip files.");
        }
        var cdPtr = eocd.cdOffset();
        if (cdPtr === 0xFFFFFFFF) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support Zip64.");
        }
        var cdEnd = cdPtr + eocd.cdSize();
        ZipFS.computeIndexResponsive(data, index, cdPtr, cdEnd, cb, [], eocd);
    };
    /**
     * Locates the end of central directory record at the end of the file.
     * Throws an exception if it cannot be found.
     */
    ZipFS.getEOCD = function (data) {
        // Unfortunately, the comment is variable size and up to 64K in size.
        // We assume that the magic signature does not appear in the comment, and
        // in the bytes between the comment and the signature. Other ZIP
        // implementations make this same assumption, since the alternative is to
        // read thread every entry in the file to get to it. :(
        // These are *negative* offsets from the end of the file.
        var startOffset = 22;
        var endOffset = Math.min(startOffset + 0xFFFF, data.length - 1);
        // There's not even a byte alignment guarantee on the comment so we need to
        // search byte by byte. *grumble grumble*
        for (var i = startOffset; i < endOffset; i++) {
            // Magic number: EOCD Signature
            if (data.readUInt32LE(data.length - i) === 0x06054b50) {
                return new EndOfCentralDirectory(data.slice(data.length - i));
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.");
    };
    ZipFS.addToIndex = function (cd, index) {
        // Paths must be absolute, yet zip file paths are always relative to the
        // zip root. So we append '/' and call it a day.
        var filename = cd.fileName();
        if (filename.charAt(0) === '/') {
            throw new Error("WHY IS THIS ABSOLUTE");
        }
        // XXX: For the file index, strip the trailing '/'.
        if (filename.charAt(filename.length - 1) === '/') {
            filename = filename.substr(0, filename.length - 1);
        }
        if (cd.isDirectory()) {
            index.addPathFast('/' + filename, new file_index_1.DirInode(cd));
        }
        else {
            index.addPathFast('/' + filename, new file_index_1.FileInode(cd));
        }
    };
    ZipFS.computeIndexResponsive = function (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        if (cdPtr < cdEnd) {
            var count = 0;
            while (count++ < 200 && cdPtr < cdEnd) {
                var cd = new CentralDirectory(data, data.slice(cdPtr));
                ZipFS.addToIndex(cd, index);
                cdPtr += cd.totalSize();
                cdEntries.push(cd);
            }
            setImmediate_1["default"](function () {
                ZipFS.computeIndexResponsive(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
            });
        }
        else {
            cb(new ZipTOC(index, cdEntries, eocd, data));
        }
    };
    ZipFS.prototype.getName = function () {
        return 'ZipFS' + (this.name !== '' ? ' ' + this.name : '');
    };
    /**
     * Get the CentralDirectory object for the given path.
     */
    ZipFS.prototype.getCentralDirectoryEntry = function (path) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        if (file_index_1.isFileInode(inode)) {
            return inode.getData();
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getData();
        }
        else {
            // Should never occur.
            throw api_error_1.ApiError.EPERM("Invalid inode: " + inode);
        }
    };
    ZipFS.prototype.getCentralDirectoryEntryAt = function (index) {
        var dirEntry = this._directoryEntries[index];
        if (!dirEntry) {
            throw new RangeError("Invalid directory index: " + index + ".");
        }
        return dirEntry;
    };
    ZipFS.prototype.getNumberOfCentralDirectoryEntries = function () {
        return this._directoryEntries.length;
    };
    ZipFS.prototype.getEndOfCentralDirectory = function () {
        return this._eocd;
    };
    ZipFS.prototype.diskSpace = function (path, cb) {
        // Read-only file system.
        cb(this.data.length, 0);
    };
    ZipFS.prototype.isReadOnly = function () {
        return true;
    };
    ZipFS.prototype.supportsLinks = function () {
        return false;
    };
    ZipFS.prototype.supportsProps = function () {
        return false;
    };
    ZipFS.prototype.supportsSynch = function () {
        return true;
    };
    ZipFS.prototype.statSync = function (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData().getStats();
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid inode.");
        }
        return stats;
    };
    ZipFS.prototype.openSync = function (path, flags, mode) {
        // INVARIANT: Cannot write to RO file systems.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isFileInode(inode)) {
            var cdRecord = inode.getData();
            var stats = cdRecord.getStats();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(path);
                case file_flag_1.ActionType.NOP:
                    return new preload_file_1.NoSyncFile(this, path, flags, stats, cdRecord.getData());
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    ZipFS.prototype.readdirSync = function (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    /**
     * Specially-optimized readfile.
     */
    ZipFS.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return util_1.copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    ZipFS.prototype.populateIndex = function () {
        var eocd = this._eocd = ZipFS.getEOCD(this.data);
        if (eocd.diskNumber() !== eocd.cdDiskNumber()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support spanned zip files.");
        }
        var cdPtr = eocd.cdOffset();
        if (cdPtr === 0xFFFFFFFF) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support Zip64.");
        }
        var cdEnd = cdPtr + eocd.cdSize();
        while (cdPtr < cdEnd) {
            var cd = new CentralDirectory(this.data, this.data.slice(cdPtr));
            cdPtr += cd.totalSize();
            ZipFS.addToIndex(cd, this._index);
            this._directoryEntries.push(cd);
        }
    };
    return ZipFS;
}(file_system_1.SynchronousFileSystem));
/* tslint:disable:variable-name */
ZipFS.CompressionMethod = CompressionMethod;
exports["default"] = ZipFS;
ZipFS.RegisterDecompressionMethod(CompressionMethod.DEFLATE, function (data, compressedSize, uncompressedSize) {
    return util_1.arrayish2Buffer(inflateRaw(data.slice(0, compressedSize), { chunkSize: uncompressedSize }));
});
ZipFS.RegisterDecompressionMethod(CompressionMethod.STORED, function (data, compressedSize, uncompressedSize) {
    return util_1.copyingSlice(data, 0, uncompressedSize);
});
//# sourceMappingURL=ZipFS.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.__esModule = true;
/**
 * (Nonstandard) String utility function for 8-bit ASCII with the extended
 * character set. Unlike the ASCII above, we do not mask the high bits.
 *
 * Placed into a separate file so it can be used with other Buffer implementations.
 * @see http://en.wikipedia.org/wiki/Extended_ASCII
 */
var ExtendedASCII = (function () {
    function ExtendedASCII() {
    }
    ExtendedASCII.str2byte = function (str, buf) {
        var length = str.length > buf.length ? buf.length : str.length;
        for (var i = 0; i < length; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode > 0x7F) {
                // Check if extended ASCII.
                var charIdx = ExtendedASCII.extendedChars.indexOf(str.charAt(i));
                if (charIdx > -1) {
                    charCode = charIdx + 0x80;
                }
                // Otherwise, keep it as-is.
            }
            buf[charCode] = i;
        }
        return length;
    };
    ExtendedASCII.byte2str = function (buff) {
        var chars = new Array(buff.length);
        for (var i = 0; i < buff.length; i++) {
            var charCode = buff[i];
            if (charCode > 0x7F) {
                chars[i] = ExtendedASCII.extendedChars[charCode - 128];
            }
            else {
                chars[i] = String.fromCharCode(charCode);
            }
        }
        return chars.join('');
    };
    ExtendedASCII.byteLength = function (str) { return str.length; };
    return ExtendedASCII;
}());
ExtendedASCII.extendedChars = ['\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4',
    '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB', '\u00E8', '\u00EF',
    '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6',
    '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6',
    '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1',
    '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
    '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB',
    '\u00BB', '_', '_', '_', '\u00A6', '\u00A6', '\u00C1', '\u00C2', '\u00C0',
    '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-',
    '-', '+', '-', '+', '\u00E3', '\u00C3', '+', '+', '-', '-', '\u00A6', '-',
    '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i',
    '\u00CD', '\u00CE', '\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_',
    '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5',
    '\u00FE', '\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD',
    '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
    '\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3',
    '\u00B2', '_', ' '];
exports["default"] = ExtendedASCII;
//# sourceMappingURL=extended_ascii.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(51);
var utils        = __webpack_require__(12);
var strings      = __webpack_require__(56);
var c            = __webpack_require__(57);
var msg          = __webpack_require__(58);
var ZStream      = __webpack_require__(59);
var GZheader     = __webpack_require__(60);

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(12);
var adler32       = __webpack_require__(52);
var crc32         = __webpack_require__(53);
var inflate_fast  = __webpack_require__(54);
var inflate_table = __webpack_require__(55);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(12);

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(12);


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var api_error_1 = __webpack_require__(0);
var node_fs_stats_1 = __webpack_require__(5);
var file_system_1 = __webpack_require__(4);
var file_flag_1 = __webpack_require__(6);
var preload_file_1 = __webpack_require__(7);
var util_1 = __webpack_require__(1);
var path = __webpack_require__(3);
/**
 * @hidden
 */
var rockRidgeIdentifier = "IEEE_P1282";
/**
 * @hidden
 */
function getASCIIString(data, startIndex, length) {
    return data.toString('ascii', startIndex, startIndex + length).trim();
}
/**
 * @hidden
 */
function getJolietString(data, startIndex, length) {
    if (length === 1) {
        // Special: Root, parent, current directory are still a single byte.
        return String.fromCharCode(data[startIndex]);
    }
    // UTF16-BE, which isn't natively supported by NodeJS Buffers.
    // Length should be even, but pessimistically floor just in case.
    var pairs = Math.floor(length / 2);
    var chars = new Array(pairs);
    for (var i = 0; i < pairs; i++) {
        var pos = startIndex + (i << 1);
        chars[i] = String.fromCharCode(data[pos + 1] | (data[pos] << 8));
    }
    return chars.join('');
}
/**
 * @hidden
 */
function getDate(data, startIndex) {
    var year = parseInt(getASCIIString(data, startIndex, 4), 10);
    var mon = parseInt(getASCIIString(data, startIndex + 4, 2), 10);
    var day = parseInt(getASCIIString(data, startIndex + 6, 2), 10);
    var hour = parseInt(getASCIIString(data, startIndex + 8, 2), 10);
    var min = parseInt(getASCIIString(data, startIndex + 10, 2), 10);
    var sec = parseInt(getASCIIString(data, startIndex + 12, 2), 10);
    var hundrethsSec = parseInt(getASCIIString(data, startIndex + 14, 2), 10);
    // Last is a time-zone offset, but JavaScript dates don't support time zones well.
    return new Date(year, mon, day, hour, min, sec, hundrethsSec * 100);
}
/**
 * @hidden
 */
function getShortFormDate(data, startIndex) {
    var yearsSince1900 = data[startIndex];
    var month = data[startIndex + 1];
    var day = data[startIndex + 2];
    var hour = data[startIndex + 3];
    var minute = data[startIndex + 4];
    var second = data[startIndex + 5];
    // JavaScript's Date support isn't so great; ignore timezone.
    // const offsetFromGMT = this._data[24];
    return new Date(yearsSince1900, month - 1, day, hour, minute, second);
}
/**
 * @hidden
 */
function constructSystemUseEntry(bigData, i) {
    var data = bigData.slice(i);
    var sue = new SystemUseEntry(data);
    switch (sue.signatureWord()) {
        case 17221 /* CE */:
            return new CEEntry(data);
        case 20548 /* PD */:
            return new PDEntry(data);
        case 21328 /* SP */:
            return new SPEntry(data);
        case 21332 /* ST */:
            return new STEntry(data);
        case 17746 /* ER */:
            return new EREntry(data);
        case 17747 /* ES */:
            return new ESEntry(data);
        case 20568 /* PX */:
            return new PXEntry(data);
        case 20558 /* PN */:
            return new PNEntry(data);
        case 21324 /* SL */:
            return new SLEntry(data);
        case 20045 /* NM */:
            return new NMEntry(data);
        case 17228 /* CL */:
            return new CLEntry(data);
        case 20556 /* PL */:
            return new PLEntry(data);
        case 21061 /* RE */:
            return new REEntry(data);
        case 21574 /* TF */:
            return new TFEntry(data);
        case 21318 /* SF */:
            return new SFEntry(data);
        case 21074 /* RR */:
            return new RREntry(data);
        default:
            return sue;
    }
}
/**
 * @hidden
 */
function constructSystemUseEntries(data, i, len, isoData) {
    // If the remaining allocated space following the last recorded System Use Entry in a System
    // Use field or Continuation Area is less than four bytes long, it cannot contain a System
    // Use Entry and shall be ignored
    len = len - 4;
    var entries = new Array();
    while (i < len) {
        var entry = constructSystemUseEntry(data, i);
        var length_1 = entry.length();
        if (length_1 === 0) {
            // Invalid SU section; prevent infinite loop.
            return entries;
        }
        i += length_1;
        if (entry instanceof STEntry) {
            // ST indicates the end of entries.
            break;
        }
        if (entry instanceof CEEntry) {
            entries = entries.concat(entry.getEntries(isoData));
        }
        else {
            entries.push(entry);
        }
    }
    return entries;
}
/**
 * @hidden
 */
var VolumeDescriptor = (function () {
    function VolumeDescriptor(data) {
        this._data = data;
    }
    VolumeDescriptor.prototype.type = function () {
        return this._data[0];
    };
    VolumeDescriptor.prototype.standardIdentifier = function () {
        return getASCIIString(this._data, 1, 5);
    };
    VolumeDescriptor.prototype.version = function () {
        return this._data[6];
    };
    VolumeDescriptor.prototype.data = function () {
        return this._data.slice(7, 2048);
    };
    return VolumeDescriptor;
}());
/**
 * @hidden
 */
var PrimaryOrSupplementaryVolumeDescriptor = (function (_super) {
    __extends(PrimaryOrSupplementaryVolumeDescriptor, _super);
    function PrimaryOrSupplementaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        _this._root = null;
        return _this;
    }
    PrimaryOrSupplementaryVolumeDescriptor.prototype.systemIdentifier = function () {
        return this._getString32(8);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeIdentifier = function () {
        return this._getString32(40);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSpaceSize = function () {
        return this._data.readUInt32LE(80);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSetSize = function () {
        return this._data.readUInt16LE(120);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSequenceNumber = function () {
        return this._data.readUInt16LE(124);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.logicalBlockSize = function () {
        return this._data.readUInt16LE(128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.pathTableSize = function () {
        return this._data.readUInt32LE(132);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfTypeLPathTable = function () {
        return this._data.readUInt32LE(140);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfOptionalTypeLPathTable = function () {
        return this._data.readUInt32LE(144);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfTypeMPathTable = function () {
        return this._data.readUInt32BE(148);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfOptionalTypeMPathTable = function () {
        return this._data.readUInt32BE(152);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.rootDirectoryEntry = function (isoData) {
        if (this._root === null) {
            this._root = this._constructRootDirectoryRecord(this._data.slice(156));
            this._root.rootCheckForRockRidge(isoData);
        }
        return this._root;
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSetIdentifier = function () {
        return this._getString(190, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.publisherIdentifier = function () {
        return this._getString(318, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.dataPreparerIdentifier = function () {
        return this._getString(446, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.applicationIdentifier = function () {
        return this._getString(574, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.copyrightFileIdentifier = function () {
        return this._getString(702, 38);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.abstractFileIdentifier = function () {
        return this._getString(740, 36);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.bibliographicFileIdentifier = function () {
        return this._getString(776, 37);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeCreationDate = function () {
        return getDate(this._data, 813);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeModificationDate = function () {
        return getDate(this._data, 830);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeExpirationDate = function () {
        return getDate(this._data, 847);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeEffectiveDate = function () {
        return getDate(this._data, 864);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.fileStructureVersion = function () {
        return this._data[881];
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.applicationUsed = function () {
        return this._data.slice(883, 883 + 512);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.reserved = function () {
        return this._data.slice(1395, 1395 + 653);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype._getString32 = function (idx) {
        return this._getString(idx, 32);
    };
    return PrimaryOrSupplementaryVolumeDescriptor;
}(VolumeDescriptor));
/**
 * @hidden
 */
var PrimaryVolumeDescriptor = (function (_super) {
    __extends(PrimaryVolumeDescriptor, _super);
    function PrimaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        if (_this.type() !== 1 /* PrimaryVolumeDescriptor */) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Invalid primary volume descriptor.");
        }
        return _this;
    }
    PrimaryVolumeDescriptor.prototype.name = function () {
        return "ISO9660";
    };
    PrimaryVolumeDescriptor.prototype._constructRootDirectoryRecord = function (data) {
        return new ISODirectoryRecord(data, -1);
    };
    PrimaryVolumeDescriptor.prototype._getString = function (idx, len) {
        return this._getString(idx, len);
    };
    return PrimaryVolumeDescriptor;
}(PrimaryOrSupplementaryVolumeDescriptor));
/**
 * @hidden
 */
var SupplementaryVolumeDescriptor = (function (_super) {
    __extends(SupplementaryVolumeDescriptor, _super);
    function SupplementaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        if (_this.type() !== 2 /* SupplementaryVolumeDescriptor */) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Invalid supplementary volume descriptor.");
        }
        var escapeSequence = _this.escapeSequence();
        var third = escapeSequence[2];
        // Third character identifies what 'level' of the UCS specification to follow.
        // We ignore it.
        if (escapeSequence[0] !== 0x25 || escapeSequence[1] !== 0x2F ||
            (third !== 0x40 && third !== 0x43 && third !== 0x45)) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unrecognized escape sequence for SupplementaryVolumeDescriptor: " + escapeSequence.toString());
        }
        return _this;
    }
    SupplementaryVolumeDescriptor.prototype.name = function () {
        return "Joliet";
    };
    SupplementaryVolumeDescriptor.prototype.escapeSequence = function () {
        return this._data.slice(88, 120);
    };
    SupplementaryVolumeDescriptor.prototype._constructRootDirectoryRecord = function (data) {
        return new JolietDirectoryRecord(data, -1);
    };
    SupplementaryVolumeDescriptor.prototype._getString = function (idx, len) {
        return getJolietString(this._data, idx, len);
    };
    return SupplementaryVolumeDescriptor;
}(PrimaryOrSupplementaryVolumeDescriptor));
/**
 * @hidden
 */
var DirectoryRecord = (function () {
    function DirectoryRecord(data, rockRidgeOffset) {
        this._suEntries = null;
        this._fileOrDir = null;
        this._data = data;
        this._rockRidgeOffset = rockRidgeOffset;
    }
    DirectoryRecord.prototype.hasRockRidge = function () {
        return this._rockRidgeOffset > -1;
    };
    DirectoryRecord.prototype.getRockRidgeOffset = function () {
        return this._rockRidgeOffset;
    };
    /**
     * !!ONLY VALID ON ROOT NODE!!
     * Checks if Rock Ridge is enabled, and sets the offset.
     */
    DirectoryRecord.prototype.rootCheckForRockRidge = function (isoData) {
        var dir = this.getDirectory(isoData);
        this._rockRidgeOffset = dir.getDotEntry(isoData)._getRockRidgeOffset(isoData);
        if (this._rockRidgeOffset > -1) {
            // Wipe out directory. Start over with RR knowledge.
            this._fileOrDir = null;
        }
    };
    DirectoryRecord.prototype.length = function () {
        return this._data[0];
    };
    DirectoryRecord.prototype.extendedAttributeRecordLength = function () {
        return this._data[1];
    };
    DirectoryRecord.prototype.lba = function () {
        return this._data.readUInt32LE(2) * 2048;
    };
    DirectoryRecord.prototype.dataLength = function () {
        return this._data.readUInt32LE(10);
    };
    DirectoryRecord.prototype.recordingDate = function () {
        return getShortFormDate(this._data, 18);
    };
    DirectoryRecord.prototype.fileFlags = function () {
        return this._data[25];
    };
    DirectoryRecord.prototype.fileUnitSize = function () {
        return this._data[26];
    };
    DirectoryRecord.prototype.interleaveGapSize = function () {
        return this._data[27];
    };
    DirectoryRecord.prototype.volumeSequenceNumber = function () {
        return this._data.readUInt16LE(28);
    };
    DirectoryRecord.prototype.identifier = function () {
        return this._getString(33, this._data[32]);
    };
    DirectoryRecord.prototype.fileName = function (isoData) {
        if (this.hasRockRidge()) {
            var fn = this._rockRidgeFilename(isoData);
            if (fn !== null) {
                return fn;
            }
        }
        var ident = this.identifier();
        if (this.isDirectory(isoData)) {
            return ident;
        }
        // Files:
        // - MUST have 0x2E (.) separating the name from the extension
        // - MUST have 0x3B (;) separating the file name and extension from the version
        // Gets expanded to two-byte char in Unicode directory records.
        var versionSeparator = ident.indexOf(';');
        if (versionSeparator === -1) {
            // Some Joliet filenames lack the version separator, despite the standard
            // specifying that it should be there.
            return ident;
        }
        else if (ident[versionSeparator - 1] === '.') {
            // Empty extension. Do not include '.' in the filename.
            return ident.slice(0, versionSeparator - 1);
        }
        else {
            // Include up to version separator.
            return ident.slice(0, versionSeparator);
        }
    };
    DirectoryRecord.prototype.isDirectory = function (isoData) {
        var rv = !!(this.fileFlags() & 2 /* Directory */);
        // If it lacks the Directory flag, it may still be a directory if we've exceeded the directory
        // depth limit. Rock Ridge marks these as files and adds a special attribute.
        if (!rv && this.hasRockRidge()) {
            rv = this.getSUEntries(isoData).filter(function (e) { return e instanceof CLEntry; }).length > 0;
        }
        return rv;
    };
    DirectoryRecord.prototype.isSymlink = function (isoData) {
        return this.hasRockRidge() && this.getSUEntries(isoData).filter(function (e) { return e instanceof SLEntry; }).length > 0;
    };
    DirectoryRecord.prototype.getSymlinkPath = function (isoData) {
        var p = "";
        var entries = this.getSUEntries(isoData);
        var getStr = this._getGetString();
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry instanceof SLEntry) {
                var components = entry.componentRecords();
                for (var j = 0; j < components.length; j++) {
                    var component = components[j];
                    var flags = component.flags();
                    if (flags & 2 /* CURRENT */) {
                        p += "./";
                    }
                    else if (flags & 4 /* PARENT */) {
                        p += "../";
                    }
                    else if (flags & 8 /* ROOT */) {
                        p += "/";
                    }
                    else {
                        p += component.content(getStr);
                        if (!(flags & 1 /* CONTINUE */)) {
                            p += '/';
                        }
                    }
                }
                if (!entry.continueFlag()) {
                    // We are done with this link.
                    break;
                }
            }
        }
        if (p.length > 1 && p[p.length - 1] === '/') {
            // Trim trailing '/'.
            return p.slice(0, p.length - 1);
        }
        else {
            return p;
        }
    };
    DirectoryRecord.prototype.getFile = function (isoData) {
        if (this.isDirectory(isoData)) {
            throw new Error("Tried to get a File from a directory.");
        }
        if (this._fileOrDir === null) {
            this._fileOrDir = isoData.slice(this.lba(), this.lba() + this.dataLength());
        }
        return this._fileOrDir;
    };
    DirectoryRecord.prototype.getDirectory = function (isoData) {
        if (!this.isDirectory(isoData)) {
            throw new Error("Tried to get a Directory from a file.");
        }
        if (this._fileOrDir === null) {
            this._fileOrDir = this._constructDirectory(isoData);
        }
        return this._fileOrDir;
    };
    DirectoryRecord.prototype.getSUEntries = function (isoData) {
        if (!this._suEntries) {
            this._constructSUEntries(isoData);
        }
        return this._suEntries;
    };
    DirectoryRecord.prototype._rockRidgeFilename = function (isoData) {
        var nmEntries = this.getSUEntries(isoData).filter(function (e) { return e instanceof NMEntry; });
        if (nmEntries.length === 0 || nmEntries[0].flags() & (2 /* CURRENT */ | 4 /* PARENT */)) {
            return null;
        }
        var str = '';
        var getString = this._getGetString();
        for (var i = 0; i < nmEntries.length; i++) {
            var e = nmEntries[i];
            str += e.name(getString);
            if (!(e.flags() & 1 /* CONTINUE */)) {
                break;
            }
        }
        return str;
    };
    DirectoryRecord.prototype._constructSUEntries = function (isoData) {
        var i = 33 + this._data[32];
        if (i % 2 === 1) {
            // Skip padding field.
            i++;
        }
        i += this._rockRidgeOffset;
        this._suEntries = constructSystemUseEntries(this._data, i, this.length(), isoData);
    };
    /**
     * !!ONLY VALID ON FIRST ENTRY OF ROOT DIRECTORY!!
     * Returns -1 if rock ridge is not enabled. Otherwise, returns the offset
     * at which system use fields begin.
     */
    DirectoryRecord.prototype._getRockRidgeOffset = function (isoData) {
        // In the worst case, we get some garbage SU entries.
        // Fudge offset to 0 before proceeding.
        this._rockRidgeOffset = 0;
        var suEntries = this.getSUEntries(isoData);
        if (suEntries.length > 0) {
            var spEntry = suEntries[0];
            if (spEntry instanceof SPEntry && spEntry.checkBytesPass()) {
                // SUSP is in use.
                for (var i = 1; i < suEntries.length; i++) {
                    var entry = suEntries[i];
                    if (entry instanceof RREntry || (entry instanceof EREntry && entry.extensionIdentifier() === rockRidgeIdentifier)) {
                        // Rock Ridge is in use!
                        return spEntry.bytesSkipped();
                    }
                }
            }
        }
        // Failed.
        this._rockRidgeOffset = -1;
        return -1;
    };
    return DirectoryRecord;
}());
/**
 * @hidden
 */
var ISODirectoryRecord = (function (_super) {
    __extends(ISODirectoryRecord, _super);
    function ISODirectoryRecord(data, rockRidgeOffset) {
        return _super.call(this, data, rockRidgeOffset) || this;
    }
    ISODirectoryRecord.prototype._getString = function (i, len) {
        return getASCIIString(this._data, i, len);
    };
    ISODirectoryRecord.prototype._constructDirectory = function (isoData) {
        return new ISODirectory(this, isoData);
    };
    ISODirectoryRecord.prototype._getGetString = function () {
        return getASCIIString;
    };
    return ISODirectoryRecord;
}(DirectoryRecord));
/**
 * @hidden
 */
var JolietDirectoryRecord = (function (_super) {
    __extends(JolietDirectoryRecord, _super);
    function JolietDirectoryRecord(data, rockRidgeOffset) {
        return _super.call(this, data, rockRidgeOffset) || this;
    }
    JolietDirectoryRecord.prototype._getString = function (i, len) {
        return getJolietString(this._data, i, len);
    };
    JolietDirectoryRecord.prototype._constructDirectory = function (isoData) {
        return new JolietDirectory(this, isoData);
    };
    JolietDirectoryRecord.prototype._getGetString = function () {
        return getJolietString;
    };
    return JolietDirectoryRecord;
}(DirectoryRecord));
/**
 * @hidden
 */
var SystemUseEntry = (function () {
    function SystemUseEntry(data) {
        this._data = data;
    }
    SystemUseEntry.prototype.signatureWord = function () {
        return this._data.readUInt16BE(0);
    };
    SystemUseEntry.prototype.signatureWordString = function () {
        return getASCIIString(this._data, 0, 2);
    };
    SystemUseEntry.prototype.length = function () {
        return this._data[2];
    };
    SystemUseEntry.prototype.suVersion = function () {
        return this._data[3];
    };
    return SystemUseEntry;
}());
/**
 * Continuation entry.
 * @hidden
 */
var CEEntry = (function (_super) {
    __extends(CEEntry, _super);
    function CEEntry(data) {
        var _this = _super.call(this, data) || this;
        _this._entries = null;
        return _this;
    }
    /**
     * Logical block address of the continuation area.
     */
    CEEntry.prototype.continuationLba = function () {
        return this._data.readUInt32LE(4);
    };
    /**
     * Offset into the logical block.
     */
    CEEntry.prototype.continuationLbaOffset = function () {
        return this._data.readUInt32LE(12);
    };
    /**
     * Length of the continuation area.
     */
    CEEntry.prototype.continuationLength = function () {
        return this._data.readUInt32LE(20);
    };
    CEEntry.prototype.getEntries = function (isoData) {
        if (!this._entries) {
            var start = this.continuationLba() * 2048 + this.continuationLbaOffset();
            this._entries = constructSystemUseEntries(isoData, start, this.continuationLength(), isoData);
        }
        return this._entries;
    };
    return CEEntry;
}(SystemUseEntry));
/**
 * Padding entry.
 * @hidden
 */
var PDEntry = (function (_super) {
    __extends(PDEntry, _super);
    function PDEntry(data) {
        return _super.call(this, data) || this;
    }
    return PDEntry;
}(SystemUseEntry));
/**
 * Identifies that SUSP is in-use.
 * @hidden
 */
var SPEntry = (function (_super) {
    __extends(SPEntry, _super);
    function SPEntry(data) {
        return _super.call(this, data) || this;
    }
    SPEntry.prototype.checkBytesPass = function () {
        return this._data[4] === 0xBE && this._data[5] === 0xEF;
    };
    SPEntry.prototype.bytesSkipped = function () {
        return this._data[6];
    };
    return SPEntry;
}(SystemUseEntry));
/**
 * Identifies the end of the SUSP entries.
 * @hidden
 */
var STEntry = (function (_super) {
    __extends(STEntry, _super);
    function STEntry(data) {
        return _super.call(this, data) || this;
    }
    return STEntry;
}(SystemUseEntry));
/**
 * Specifies system-specific extensions to SUSP.
 * @hidden
 */
var EREntry = (function (_super) {
    __extends(EREntry, _super);
    function EREntry(data) {
        return _super.call(this, data) || this;
    }
    EREntry.prototype.identifierLength = function () {
        return this._data[4];
    };
    EREntry.prototype.descriptorLength = function () {
        return this._data[5];
    };
    EREntry.prototype.sourceLength = function () {
        return this._data[6];
    };
    EREntry.prototype.extensionVersion = function () {
        return this._data[7];
    };
    EREntry.prototype.extensionIdentifier = function () {
        return getASCIIString(this._data, 8, this.identifierLength());
    };
    EREntry.prototype.extensionDescriptor = function () {
        return getASCIIString(this._data, 8 + this.identifierLength(), this.descriptorLength());
    };
    EREntry.prototype.extensionSource = function () {
        return getASCIIString(this._data, 8 + this.identifierLength() + this.descriptorLength(), this.sourceLength());
    };
    return EREntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var ESEntry = (function (_super) {
    __extends(ESEntry, _super);
    function ESEntry(data) {
        return _super.call(this, data) || this;
    }
    ESEntry.prototype.extensionSequence = function () {
        return this._data[4];
    };
    return ESEntry;
}(SystemUseEntry));
/**
 * RockRidge: Marks that RockRidge is in use [deprecated]
 * @hidden
 */
var RREntry = (function (_super) {
    __extends(RREntry, _super);
    function RREntry(data) {
        return _super.call(this, data) || this;
    }
    return RREntry;
}(SystemUseEntry));
/**
 * RockRidge: Records POSIX file attributes.
 * @hidden
 */
var PXEntry = (function (_super) {
    __extends(PXEntry, _super);
    function PXEntry(data) {
        return _super.call(this, data) || this;
    }
    PXEntry.prototype.mode = function () {
        return this._data.readUInt32LE(4);
    };
    PXEntry.prototype.fileLinks = function () {
        return this._data.readUInt32LE(12);
    };
    PXEntry.prototype.uid = function () {
        return this._data.readUInt32LE(20);
    };
    PXEntry.prototype.gid = function () {
        return this._data.readUInt32LE(28);
    };
    PXEntry.prototype.inode = function () {
        return this._data.readUInt32LE(36);
    };
    return PXEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records POSIX device number.
 * @hidden
 */
var PNEntry = (function (_super) {
    __extends(PNEntry, _super);
    function PNEntry(data) {
        return _super.call(this, data) || this;
    }
    PNEntry.prototype.devTHigh = function () {
        return this._data.readUInt32LE(4);
    };
    PNEntry.prototype.devTLow = function () {
        return this._data.readUInt32LE(12);
    };
    return PNEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records symbolic link
 * @hidden
 */
var SLEntry = (function (_super) {
    __extends(SLEntry, _super);
    function SLEntry(data) {
        return _super.call(this, data) || this;
    }
    SLEntry.prototype.flags = function () {
        return this._data[4];
    };
    SLEntry.prototype.continueFlag = function () {
        return this.flags() & 0x1;
    };
    SLEntry.prototype.componentRecords = function () {
        var records = new Array();
        var i = 5;
        while (i < this.length()) {
            var record = new SLComponentRecord(this._data.slice(i));
            records.push(record);
            i += record.length();
        }
        return records;
    };
    return SLEntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var SLComponentRecord = (function () {
    function SLComponentRecord(data) {
        this._data = data;
    }
    SLComponentRecord.prototype.flags = function () {
        return this._data[0];
    };
    SLComponentRecord.prototype.length = function () {
        return 2 + this.componentLength();
    };
    SLComponentRecord.prototype.componentLength = function () {
        return this._data[1];
    };
    SLComponentRecord.prototype.content = function (getString) {
        return getString(this._data, 2, this.componentLength());
    };
    return SLComponentRecord;
}());
/**
 * RockRidge: Records alternate file name
 * @hidden
 */
var NMEntry = (function (_super) {
    __extends(NMEntry, _super);
    function NMEntry(data) {
        return _super.call(this, data) || this;
    }
    NMEntry.prototype.flags = function () {
        return this._data[4];
    };
    NMEntry.prototype.name = function (getString) {
        return getString(this._data, 5, this.length() - 5);
    };
    return NMEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records child link
 * @hidden
 */
var CLEntry = (function (_super) {
    __extends(CLEntry, _super);
    function CLEntry(data) {
        return _super.call(this, data) || this;
    }
    CLEntry.prototype.childDirectoryLba = function () {
        return this._data.readUInt32LE(4);
    };
    return CLEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records parent link.
 * @hidden
 */
var PLEntry = (function (_super) {
    __extends(PLEntry, _super);
    function PLEntry(data) {
        return _super.call(this, data) || this;
    }
    PLEntry.prototype.parentDirectoryLba = function () {
        return this._data.readUInt32LE(4);
    };
    return PLEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records relocated directory.
 * @hidden
 */
var REEntry = (function (_super) {
    __extends(REEntry, _super);
    function REEntry(data) {
        return _super.call(this, data) || this;
    }
    return REEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records file timestamps
 * @hidden
 */
var TFEntry = (function (_super) {
    __extends(TFEntry, _super);
    function TFEntry(data) {
        return _super.call(this, data) || this;
    }
    TFEntry.prototype.flags = function () {
        return this._data[4];
    };
    TFEntry.prototype.creation = function () {
        if (this.flags() & 1 /* CREATION */) {
            if (this._longFormDates()) {
                return getDate(this._data, 5);
            }
            else {
                return getShortFormDate(this._data, 5);
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.modify = function () {
        if (this.flags() & 2 /* MODIFY */) {
            var previousDates = (this.flags() & 1 /* CREATION */) ? 1 : 0;
            if (this._longFormDates) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.access = function () {
        if (this.flags() & 4 /* ACCESS */) {
            var previousDates = (this.flags() & 1 /* CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* MODIFY */) ? 1 : 0;
            if (this._longFormDates) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.backup = function () {
        if (this.flags() & 16 /* BACKUP */) {
            var previousDates = (this.flags() & 1 /* CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* ACCESS */) ? 1 : 0;
            if (this._longFormDates) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.expiration = function () {
        if (this.flags() & 32 /* EXPIRATION */) {
            var previousDates = (this.flags() & 1 /* CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* ACCESS */) ? 1 : 0;
            previousDates += (this.flags() & 16 /* BACKUP */) ? 1 : 0;
            if (this._longFormDates) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.effective = function () {
        if (this.flags() & 64 /* EFFECTIVE */) {
            var previousDates = (this.flags() & 1 /* CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* ACCESS */) ? 1 : 0;
            previousDates += (this.flags() & 16 /* BACKUP */) ? 1 : 0;
            previousDates += (this.flags() & 32 /* EXPIRATION */) ? 1 : 0;
            if (this._longFormDates) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype._longFormDates = function () {
        return !!(this.flags() && 128 /* LONG_FORM */);
    };
    return TFEntry;
}(SystemUseEntry));
/**
 * RockRidge: File data in sparse format.
 * @hidden
 */
var SFEntry = (function (_super) {
    __extends(SFEntry, _super);
    function SFEntry(data) {
        return _super.call(this, data) || this;
    }
    SFEntry.prototype.virtualSizeHigh = function () {
        return this._data.readUInt32LE(4);
    };
    SFEntry.prototype.virtualSizeLow = function () {
        return this._data.readUInt32LE(12);
    };
    SFEntry.prototype.tableDepth = function () {
        return this._data[20];
    };
    return SFEntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var Directory = (function () {
    function Directory(record, isoData) {
        this._fileList = [];
        this._fileMap = {};
        this._record = record;
        var i = record.lba();
        var iLimit = i + record.dataLength();
        if (!(record.fileFlags() & 2 /* Directory */)) {
            // Must have a CL entry.
            var cl = record.getSUEntries(isoData).filter(function (e) { return e instanceof CLEntry; })[0];
            i = cl.childDirectoryLba() * 2048;
            iLimit = Infinity;
        }
        while (i < iLimit) {
            var len = isoData[i];
            // Zero-padding between sectors.
            // TODO: Could optimize this to seek to nearest-sector upon
            // seeing a 0.
            if (len === 0) {
                i++;
                continue;
            }
            var r = this._constructDirectoryRecord(isoData.slice(i));
            var fname = r.fileName(isoData);
            // Skip '.' and '..' entries.
            if (fname !== '\u0000' && fname !== '\u0001') {
                // Skip relocated entries.
                if (!r.hasRockRidge() || r.getSUEntries(isoData).filter(function (e) { return e instanceof REEntry; }).length === 0) {
                    this._fileMap[fname] = r;
                    this._fileList.push(fname);
                }
            }
            else if (iLimit === Infinity) {
                // First entry contains needed data.
                iLimit = i + r.dataLength();
            }
            i += r.length();
        }
    }
    /**
     * Get the record with the given name.
     * Returns undefined if not present.
     */
    Directory.prototype.getRecord = function (name) {
        return this._fileMap[name];
    };
    Directory.prototype.getFileList = function () {
        return this._fileList;
    };
    Directory.prototype.getDotEntry = function (isoData) {
        return this._constructDirectoryRecord(isoData.slice(this._record.lba()));
    };
    return Directory;
}());
/**
 * @hidden
 */
var ISODirectory = (function (_super) {
    __extends(ISODirectory, _super);
    function ISODirectory(record, isoData) {
        return _super.call(this, record, isoData) || this;
    }
    ISODirectory.prototype._constructDirectoryRecord = function (data) {
        return new ISODirectoryRecord(data, this._record.getRockRidgeOffset());
    };
    return ISODirectory;
}(Directory));
/**
 * @hidden
 */
var JolietDirectory = (function (_super) {
    __extends(JolietDirectory, _super);
    function JolietDirectory(record, isoData) {
        return _super.call(this, record, isoData) || this;
    }
    JolietDirectory.prototype._constructDirectoryRecord = function (data) {
        return new JolietDirectoryRecord(data, this._record.getRockRidgeOffset());
    };
    return JolietDirectory;
}(Directory));
/**
 * Mounts an ISO file as a read-only file system.
 *
 * Supports:
 * * Vanilla ISO9660 ISOs
 * * Microsoft Joliet and Rock Ridge extensions to the ISO9660 standard
 */
var IsoFS = (function (_super) {
    __extends(IsoFS, _super);
    /**
     * Constructs a read-only file system from the given ISO.
     * @param data The ISO file in a buffer.
     * @param name The name of the ISO (optional; used for debug messages / identification via getName()).
     */
    function IsoFS(data, name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this) || this;
        _this._data = data;
        // Skip first 16 sectors.
        var vdTerminatorFound = false;
        var i = 16 * 2048;
        var candidateVDs = new Array();
        while (!vdTerminatorFound) {
            var slice = data.slice(i);
            var vd = new VolumeDescriptor(slice);
            switch (vd.type()) {
                case 1 /* PrimaryVolumeDescriptor */:
                    candidateVDs.push(new PrimaryVolumeDescriptor(slice));
                    break;
                case 2 /* SupplementaryVolumeDescriptor */:
                    candidateVDs.push(new SupplementaryVolumeDescriptor(slice));
                    break;
                case 255 /* VolumeDescriptorSetTerminator */:
                    vdTerminatorFound = true;
                    break;
            }
            i += 2048;
        }
        if (candidateVDs.length === 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unable to find a suitable volume descriptor.");
        }
        candidateVDs.forEach(function (v) {
            // Take an SVD over a PVD.
            if (!_this._pvd || _this._pvd.type() !== 2 /* SupplementaryVolumeDescriptor */) {
                _this._pvd = v;
            }
        });
        _this._root = _this._pvd.rootDirectoryEntry(data);
        _this._name = name;
        return _this;
    }
    IsoFS.isAvailable = function () {
        return true;
    };
    IsoFS.prototype.getName = function () {
        var name = "IsoFS" + this._name + "-" + this._pvd.name();
        if (this._root.hasRockRidge()) {
            name += "-RockRidge";
        }
        return name;
    };
    IsoFS.prototype.diskSpace = function (path, cb) {
        // Read-only file system.
        cb(this._data.length, 0);
    };
    IsoFS.prototype.isReadOnly = function () {
        return true;
    };
    IsoFS.prototype.supportsLinks = function () {
        return false;
    };
    IsoFS.prototype.supportsProps = function () {
        return false;
    };
    IsoFS.prototype.supportsSynch = function () {
        return true;
    };
    IsoFS.prototype.statSync = function (p, isLstat) {
        var record = this._getDirectoryRecord(p);
        if (record === null) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return this._getStats(p, record);
    };
    IsoFS.prototype.openSync = function (p, flags, mode) {
        // INVARIANT: Cannot write to RO file systems.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, p);
        }
        // Check if the path exists, and is a file.
        var record = this._getDirectoryRecord(p);
        if (!record) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        else if (record.isSymlink(this._data)) {
            return this.openSync(path.resolve(p, record.getSymlinkPath(this._data)), flags, mode);
        }
        else if (!record.isDirectory(this._data)) {
            var data = record.getFile(this._data);
            var stats = this._getStats(p, record);
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(p);
                case file_flag_1.ActionType.NOP:
                    return new preload_file_1.NoSyncFile(this, p, flags, stats, data);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(p);
        }
    };
    IsoFS.prototype.readdirSync = function (path) {
        // Check if it exists.
        var record = this._getDirectoryRecord(path);
        if (!record) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (record.isDirectory(this._data)) {
            return record.getDirectory(this._data).getFileList().slice(0);
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    /**
     * Specially-optimized readfile.
     */
    IsoFS.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return util_1.copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    IsoFS.prototype._getDirectoryRecord = function (path) {
        // Special case.
        if (path === '/') {
            return this._root;
        }
        var components = path.split('/').slice(1);
        var dir = this._root;
        for (var i = 0; i < components.length; i++) {
            if (dir.isDirectory(this._data)) {
                dir = dir.getDirectory(this._data).getRecord(components[i]);
                if (!dir) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return dir;
    };
    IsoFS.prototype._getStats = function (p, record) {
        if (record.isSymlink(this._data)) {
            var newP = path.resolve(p, record.getSymlinkPath(this._data));
            var dirRec = this._getDirectoryRecord(newP);
            if (!dirRec) {
                return null;
            }
            return this._getStats(newP, dirRec);
        }
        else {
            var len = record.dataLength();
            var mode = 0x16D;
            var date = record.recordingDate();
            var atime = date;
            var mtime = date;
            var ctime = date;
            if (record.hasRockRidge()) {
                var entries = record.getSUEntries(this._data);
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    if (entry instanceof PXEntry) {
                        mode = entry.mode();
                    }
                    else if (entry instanceof TFEntry) {
                        var flags = entry.flags();
                        if (flags & 4 /* ACCESS */) {
                            atime = entry.access();
                        }
                        if (flags & 2 /* MODIFY */) {
                            mtime = entry.modify();
                        }
                        if (flags & 1 /* CREATION */) {
                            ctime = entry.creation();
                        }
                    }
                }
            }
            // Mask out writeable flags. This is a RO file system.
            mode = mode & 0x16D;
            return new node_fs_stats_1["default"](record.isDirectory(this._data) ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE, len, mode, atime, mtime, ctime);
        }
    };
    return IsoFS;
}(file_system_1.SynchronousFileSystem));
exports["default"] = IsoFS;
//# sourceMappingURL=IsoFS.js.map

/***/ })
/******/ ]);