const window = global;
const parent = window;

// this is almost directly taken from Google's GWT which is now open source

var __PYGWT_JS_INCLUDED;

if (!__PYGWT_JS_INCLUDED) {
  __PYGWT_JS_INCLUDED = true;

var __pygwt_retryWaitMs = 50;
var __pygwt_moduleNames = [];
var __pygwt_isHostPageLoaded = false;
var __pygwt_onLoadError = function (exception, name) {
   var exc_name = exception.__name__;
   var msg = exception.message;

   if (typeof exc_name == 'undefined') {
     exc_name = exception.name;
   }
   if (typeof msg == 'undefined' || msg == '' || msg == exc_name) {
     if (    exception.args
         && exception.args.__array
	 && exception.args.__array.length > 0) {
        msg = exception.args.__array.join(", ");
     } else {
        msg = exception.toString();
     }
   }
   alert( name + " " + exc_name + ': '  + msg );

};


function __pygwt_processMetas() {
  // var metas = document.getElementsByTagName("meta");
  // for (var i = 0, n = metas.length; i < n; ++i) {
  //   var meta = metas[i];
  //   var name = meta.getAttribute("name");
  //   if (name) {
  //     if (name == "pygwt:module") {
  //       var content = meta.getAttribute("content");
  //       if (content) {
  //         __pygwt_moduleNames = __pygwt_moduleNames.concat(content);
  //       }
  //     }
  //   }
  // }
}


function __pygwt_forEachModule(lambda) {
  for (var i = 0; i < __pygwt_moduleNames.length; ++i) {
    lambda(__pygwt_moduleNames[i]);
  }
}


// When nested IFRAMEs load, they reach up into the parent page to announce that
// they are ready to run. Because IFRAMEs load asynchronously relative to the
// host page, one of two things can happen when they reach up:
// (1) The host page's onload handler has not yet been called, in which case we
//     retry until it has been called.
// (2) The host page's onload handler has already been called, in which case the
//     nested IFRAME should be initialized immediately.
//
function __pygwt_webModeFrameOnLoad(iframeWindow, name) {
  var moduleInitFn = iframeWindow.pygwtOnLoad;
  if (__pygwt_isHostPageLoaded && moduleInitFn) {
    var old = window.status;
    window.status = "Initializing module '" + name + "'";
    try {
        moduleInitFn(__pygwt_onLoadError, name);
    } finally {
        window.status = old;
    }
  } else {
    setTimeout(function() { __pygwt_webModeFrameOnLoad(iframeWindow, name); }, __pygwt_retryWaitMs);
  }
}


function __pygwt_hookOnLoad() {
  var oldHandler = window.onload;
  window.onload = function() {
    __pygwt_isHostPageLoaded = true;
    if (oldHandler) {
      oldHandler();
    }
  };
}


// Returns an array that splits the module name from the meta content into
// [0] the prefix url, if any, guaranteed to end with a slash
// [1] the dotted module name
//
function __pygwt_splitModuleNameRef(moduleName) {
   var parts = ['', moduleName];
   var i = moduleName.lastIndexOf("=");
   if (i != -1) {
      parts[0] = moduleName.substring(0, i) + '/';
      parts[1] = moduleName.substring(i+1);
   }
   return parts;
}


//////////////////////////////////////////////////////////////////
// Called directly from compiled code
//
function __pygwt_initHandlers(resize, beforeunload, unload) {
   var oldOnResize = window.onresize;
   window.onresize = function() {
      resize();
      if (oldOnResize)
         oldOnResize();
   };

   var oldOnBeforeUnload = window.onbeforeunload;
   window.onbeforeunload = function() {
      var ret = beforeunload();

      var oldRet;
      if (oldOnBeforeUnload)
        oldRet = oldOnBeforeUnload();

      if (ret !== null)
        return ret;
      return oldRet;
   };

   var oldOnUnload = window.onunload;
   window.onunload = function() {
      unload();
      if (oldOnUnload)
         oldOnUnload();
   };
    var errordialog=function(msg, url, linenumber) {
        var dialog=document.createElement("div");
            dialog.className='errordialog';
            dialog.innerHTML='&nbsp;<b style="color:red">JavaScript Error: </b>' + msg +' at line number ' + linenumber +'. Please inform webmaster.';
            document.body.appendChild(dialog);
            return true;
    }

    window.onerror=function(msg, url, linenumber){
        return errordialog(msg, url, linenumber);
    }
}


//////////////////////////////////////////////////////////////////
// Web Mode
//
function __pygwt_injectWebModeFrame(name) {
   if (document.body) {
      var parts = __pygwt_splitModuleNameRef(name);

      // Insert an IFRAME
      var iframe = document.createElement("iframe");
      var selectorURL = parts[0] + parts[1] + ".nocache.html?" + (new Date()).getTime();
      iframe.src = selectorURL;
      iframe.id = selectorURL;
      iframe.style.display = 'none';
      if (document.body.firstChild) {
         document.body.insertBefore(iframe, document.body.firstChild);
      } else {
         document.body.appendChild(iframe);
      }
   } else {
      // Try again in a moment.
      //
      window.setTimeout(function() { __pygwt_injectWebModeFrame(name); }, __pygwt_retryWaitMs);
   }
}

//////////////////////////////////////////////////////////////////
// Module Load Controller
//
var __pygwt_modController = {
    __apps: {
        block: 0,
        list: {}
    },
    __listeners: {
        disabled: {},
        list: {
            init: [],
            appInit: [],
            moduleInit: [],
            moduleLoad: [],
            appLoad: [],
            load: [],
            hookException: []
        }
    },
    _get: function(type, item) {
        type = '__' + type
        if(!(type in this))
            return false
        if(!('list' in this[type]))
            return false
        if(!item)
            return this[type].list
        if(item in this[type].list)
            return this[type].list[item]
        return false
    },
    _onEvent: function(event, name, module) {
        var l = this._get('listeners', event)
        if(!l || this.__listeners.disabled[event])
            return false
        var app = this._get('apps', name)
        try {
            for(var i in l) if(l[i]) l[i](app, module)
        } catch(e) {
            try {
                var l = this._get('listeners', 'hookException')
                if(l) for(var i in l) if(l[i]) l[i](e)
            } catch(e) { /* console.log(e) */ }
        }
        if(event=='init' || event=='load')
            this.__listeners.disabled[event] = true
        if(event=='appLoad')
            __pygwt_webModeFrameOnLoad(app.reference, app.name)
    },
    _initApp: function(name, win) {
        this._onEvent('init')
        this.__apps.list[name] = {
            name: name,
            reference: win,
            loaded: false,
            modules: {
                list: {},
                block: 0,
                init: function(module) {
                    var m = this.list[module] = {}
                    m.start = new Date().getTime()
                    this.block++
                },
                load: function(module){
                    var m = this.list[module]
                    m.end = new Date().getTime()
                    m.duration = m.end - m.start
                    this.block--
                }
            }
        }
        this.__apps.block++
        this._onEvent('appInit', name)
    },
    _initModule: function(name, module) {
        var app = this._get('apps', name)
        var doc = app.reference.document
        var s = doc.createElement('script')
        s.onload = s.onreadystatechange = function() {
            if(s.onload.fired)
                return
            if(!s.readyState || s.readyState == 'loaded' || s.readyState == 'complete') {
                s.onload.fired = true
                __pygwt_modController._loadModule(name, module)
            }
        }
        s.onload.fired = false
        s.type = 'text/javascript'
        s.src = module
        doc.getElementsByTagName('head')[0].appendChild(s)
        this._onEvent('moduleInit', name, module)
    },
    _loadModule: function(name, module) {
        var app = this._get('apps', name)
        app.modules.load(module)
        this._onEvent('moduleLoad', name, module)
        if(app.modules.block==0) this._loadApp(name)
    },
    _loadApp: function(name) {
        var app = this._get('apps', name)
        if(!app.loaded && app.modules.block==0) {
            app.loaded = true
            this.__apps.block--
            this._onEvent('appLoad', name)
            if(this.__apps.block==0) this._onEvent('load')
        }
    },
    init: function(name, win) {
        this._initApp(name, win)
    },
    load: function(name, modules) {
        var i, app = this._get('apps', name)

        var f = function(a, m) {
            setTimeout(function(){
                __pygwt_modController._initModule(a, m)
                a=null; m=null
            }, 1)
            app.modules.init(m)
        }
        for(i in modules) if(modules[i]) f(name, modules[i])
        if(i===undefined && modules) f(name, modules)
    },
    done: function(name) {
        this._loadApp(name)
    },
    addListener: function(event, listener) {
        var list = this._get('listeners', event)
        if(list)
            return list.push(listener)-1
        return false
    },
    removeListener: function(event, target) {
        var list = this._get('listeners', event)
        if(!list)
            return false
        if(target in list)
            return list.splice(target, 1, false)
        for(var i in list)
            if(target===list[i])
                return list.splice(i, 1, false)
        return false
    }
}

//////////////////////////////////////////////////////////////////
// Early user custom routines
//
function __pygwt_earlyUser() {
    // bootsplash/custom stuff here
}

//////////////////////////////////////////////////////////////////
// Set it up
//
__pygwt_earlyUser();
__pygwt_processMetas();
__pygwt_hookOnLoad();
__pygwt_forEachModule(__pygwt_injectWebModeFrame);


} // __PYGWT_JS_INCLUDED


var $wnd = parent;
var $doc = $wnd['document'];
var $moduleName = "main";
var $pyjs = new Object();
var $p = null, pyjslib, sys;
$pyjs['global_namespace'] = this;
$pyjs['__modules__'] = {};
$pyjs['loaded_modules'] = {};
$pyjs['options'] = new Object();
$pyjs['options']['arg_ignore'] = false;
$pyjs['options']['arg_count'] = false;
$pyjs['options']['arg_is_instance'] = false;
$pyjs['options']['arg_instance_type'] = false;
$pyjs['options']['arg_kwarg_dup'] = false;
$pyjs['options']['arg_kwarg_unexpected_keyword'] = false;
$pyjs['options']['arg_kwarg_multiple_values'] = false;
$pyjs['options']['dynamic_loading'] = false;
$pyjs['trackstack'] = [];
$pyjs['track'] = {'module':'__main__', 'lineno': 1};
$pyjs['trackstack']['push']($pyjs['track']);
$pyjs['__active_exception_stack__'] = null;
$pyjs['__last_exception_stack__'] = null;
$pyjs['__last_exception__'] = null;
$pyjs['in_try_except'] = 0;

/*
 * prepare app system vars
 */
$pyjs['platform'] = 'safari';
$pyjs['appname'] = 'main';
$pyjs['loadpath'] = './';

// For google closure compiler:
window['$wnd'] = $wnd;
window['$doc'] = $doc;
window['$pyjs'] = $pyjs;


var $pyjs_array_slice = Array['prototype']['slice'];

function $pyjs_kwargs_call(obj, func, star_args, dstar_args, args)
{
    if (obj !== null) {
        func = obj[func];
    }

    // Merge dstar_args into args[0]
    if (dstar_args) {
        if (pyjslib['get_pyjs_classtype'](dstar_args) != 'dict') {
            throw (pyjslib['TypeError'](func['__name__'] + "() arguments after ** must be a dictionary " + pyjslib['repr'](dstar_args)));
        }
        var i;
        /* use of __iter__ and next is horrendously expensive,
           use direct access to dictionary instead
         */
        for (var keys in dstar_args['__object']) {
            var k = dstar_args['__object'][keys][0];
            var v = dstar_args['__object'][keys][1];

            if (pyjslib['var_remap']['indexOf'](k) >= 0) {
                k = '$$' + k;
            }
            if ($pyjs['options']['arg_kwarg_multiple_values'] && typeof args[0][k] !=
 'undefined') {
                $pyjs__exception_func_multiple_values(func['__name__'], k);
             }
            args[0][k] = v;
        }

    }

    // Append star_args to args
    if (star_args) {
        if (star_args === null || typeof star_args['__iter__'] != 'function') {
            throw (pyjslib['TypeError'](func['__name__'] + "() arguments after * must be a sequence" + pyjslib['repr'](star_args)));
        }
        if (star_args['__array'] != null && star_args['__array']['constructor'] == Array) {
            args = args['concat'](star_args['__array']);
        } else {

            /* use of __iter__ and next is horrendously expensive,
               use __len__ and __getitem__ instead, if they exist.
             */
            var call_args = Array();

            if (typeof star_args['__array'] != 'undefined') {
                var a = star_args['__array'];
                var n = a['length'];
                for (var i = 0; i < n; i++) {
                    call_args[i] = a[i];
                }
            } else {
                var $iter = star_args['__iter__']();
                if (typeof $iter['__array'] != 'undefined') {
                    var a = $iter['__array'];
                    var n = a['length'];
                    for (var i = 0; i < n; i++) {
                        call_args[i] = a[i];
                    }
                } else if (typeof $iter['$genfun'] == 'function') {
                    var v, i = 0;
                    while (typeof (v = $iter['next'](true)) != 'undefined') {
                        call_args[i++] = v;
                    }
                } else {
                    var i = 0;
                    try {
                        while (true) {
                            call_args[i++]=$iter['next']();
                        }
                    } catch (e) {
                        if (e['__name__'] != 'StopIteration') {
                            throw e;
                        }
                    }
                }
            }
            args = args['concat'](call_args);
        }
    }

    // Now convert args to call_args
    // args = __kwargs, arg1, arg2, ...
    // _args = arg1, arg2, arg3, ... [*args, [**kwargs]]
    var _args = [];

    // Get function/method arguments
    if (typeof func['__args__'] != 'undefined') {
        var __args__ = func['__args__'];
    } else {
        var __args__ = new Array(null, null);
    }

    var a, aname, _idx , idx, res;
    _idx = idx = 1;
    if (obj === null) {
        if (func['__is_instance__'] === false) {
            // Skip first argument in __args__
            _idx ++;
        }
    } else {
        if (typeof obj['__is_instance__'] == 'undefined' && typeof func['__is_instance__'] != 'undefined' && func['__is_instance__'] === false) {
            // Skip first argument in __args__
            _idx ++;
        } else if (func['__bind_type__'] > 0 && func['__bind_type__'] < 3) {
            if (typeof args[1] == 'undefined' || obj['__is_instance__'] !== false || args[1]['__is_instance__'] !== true) {
                // Skip first argument in __args__
                _idx ++;
            }
        }
    }
    for (++_idx; _idx < __args__['length']; _idx++, idx++) {
        aname = __args__[_idx][0];
        a = args[0][aname];
        if (typeof args[idx] == 'undefined') {
            _args['push'](a);
            delete args[0][aname];
        } else {
            if (typeof a != 'undefined') $pyjs__exception_func_multiple_values(func['__name__'], aname);
            _args['push'](args[idx]);
        }
    }

    // Append the left-over args
    for (;idx < args['length'];idx++) {
        if (typeof args[idx] != 'undefined') {
            _args['push'](args[idx]);
        }
    }
    // Remove trailing undefineds
    while (_args['length'] > 0 && typeof _args[_args['length']-1] == 'undefined') {
        _args['pop']();
    }

    if (__args__[1] === null) {
        // Check for unexpected keyword
        for (var kwname in args[0]) {
            $pyjs__exception_func_unexpected_keyword(func['__name__'], kwname);
        }
        return func['apply'](obj, _args);
    }
    a = pyjslib['dict'](args[0]);
    if (a['__len__']() > 0) {
        a['$pyjs_is_kwarg'] = true;
        _args['push'](a);
    }
    res = func['apply'](obj, _args);
    delete a['$pyjs_is_kwarg'];
    return res;
}

function $pyjs__exception_func_param(func_name, minargs, maxargs, nargs) {
    if (minargs == maxargs) {
        switch (minargs) {
            case 0:
                var msg = func_name + "() takes no arguments (" + nargs + " given)";
                break;
            case 1:
                msg = func_name + "() takes exactly " + minargs + " argument (" + nargs + " given)";
                break;
            default:
                msg = func_name + "() takes exactly " + minargs + " arguments (" + nargs + " given)";
        };
    } else if (nargs > maxargs) {
        if (maxargs == 1) {
            msg  = func_name + "() takes at most " + maxargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at most " + maxargs + " arguments (" + nargs + " given)";
        }
    } else if (nargs < minargs) {
        if (minargs == 1) {
            msg = func_name + "() takes at least " + minargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at least " + minargs + " arguments (" + nargs + " given)";
        }
    } else {
        return;
    }
    if (typeof pyjslib['TypeError'] == 'function') {
        throw pyjslib['TypeError'](String(msg));
    }
    throw msg;
}

function $pyjs__exception_func_multiple_values(func_name, key) {
    //throw func_name + "() got multiple values for keyword argument '" + key + "'";
    throw pyjslib['TypeError'](String(func_name + "() got multiple values for keyword argument '" + key + "'"));
}

function $pyjs__exception_func_unexpected_keyword(func_name, key) {
    //throw func_name + "() got an unexpected keyword argument '" + key + "'";
    throw pyjslib['TypeError'](String(func_name + "() got an unexpected keyword argument '" + key + "'"));
}

function $pyjs__exception_func_class_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance['__is_instance__'] == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)";
        throw pyjslib['TypeError'](String("unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)"));
}

function $pyjs__exception_func_instance_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance['__is_instance__'] == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)";
        throw pyjslib['TypeError'](String("unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)"));
}

function $pyjs__bind_method(klass, func_name, func, bind_type, args) {
    func['__class__'] = klass;
    return $pyjs__bind_method2(func_name, func, bind_type, args);
}

function $pyjs__bind_method2(func_name, func, bind_type, args) {
    func['__name__'] = func['func_name'] = func_name;
    func['__bind_type__'] = bind_type;
    func['__args__'] = args;
    func['prototype'] = func;
    return func;
}

function $pyjs__decorated_method(func_name, func, bind_type) {
    var helper = function (){
      var args;
      if (typeof func['__methoddecorator__'] == "undefined")
      {
        // add explicit "self" into arguments
        args=[this];
        for (var i=0;i<arguments['length'];i++)
          { args['push'](arguments[i]); } // concat is not working :-S
      } else {
        args = arguments;
      }
      return func['apply'](this, args);
    };

    helper['__name__'] = helper['helper_name'] = func_name;
    helper['__bind_type__'] = bind_type;
    helper['__methoddecorator__'] = true;
    helper['prototype'] = helper;
    return helper;
}

function $pyjs__instancemethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        var _this = this;
        var argstart = 0;
        if (this['__is_instance__'] !== true && arguments['length'] > 0) {
            _this = arguments[0];
            argstart = 1;
        }
        var args = [_this]['concat']($pyjs_array_slice['call'](arguments, argstart));
        if ($pyjs['options']['arg_is_instance']) {
            if (_this['__is_instance__'] === true) {
                if ($pyjs['options']['arg_instance_type']) return func['apply'](this, args);
                for (var c in _this['__mro__']) {
                    var cls = _this['__mro__'][c];
                    if (cls == klass) {
                        return func['apply'](this, args);
                    }
                }
            }
            $pyjs__exception_func_instance_expected(func_name, klass['__name__'], _this);
        }
        return func['apply'](this, args);
    };
    func['__name__'] = func['func_name'] = func_name;
    func['__bind_type__'] = bind_type;
    func['__args__'] = args;
    func['__class__'] = klass;
    return fn;
}

function $pyjs__staticmethod(klass, func_name, func, bind_type, args) {
    func['__name__'] = func['func_name'] = func_name;
    func['__bind_type__'] = bind_type;
    func['__args__'] = args;
    func['__class__'] = klass;
    return func;
}

function $pyjs__classmethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_instance_expected(func_name, klass['__name__']);
        var args = [this['prototype']]['concat']($pyjs_array_slice['call'](arguments));
        return func['apply'](this, args);
    };
    func['__name__'] = func['func_name'] = func_name;
    func['__bind_type__'] = bind_type;
    func['__args__'] = args;
    func['__class__'] = klass;
    return fn;
}

function $pyjs__subclasses__(cls_obj) {
    return cls_obj['__sub_classes__'];
}

function $pyjs__mro_merge(seqs) {
    var res = new Array();
    var i = 0;
    var cand = null;
    function resolve_error(candidates) {
        //throw "Cannot create a consistent method resolution order (MRO) for bases " + candidates[0]['__name__'] + ", "+ candidates[1]['__name__'];
        throw (pyjslib['TypeError']("Cannot create a consistent method resolution order (MRO) for bases " + candidates[0]['__name__'] + ", "+ candidates[1]['__name__']));
    }
    for (;;) {
        var nonemptyseqs = new Array();
        for (var j = 0; j < seqs['length']; j++) {
            if (seqs[j]['length'] > 0) nonemptyseqs['push'](seqs[j]);
        }
        if (nonemptyseqs['length'] == 0) return res;
        i++;
        var candidates = new Array();
        for (var j = 0; j < nonemptyseqs['length']; j++) {
            cand = nonemptyseqs[j][0];
            candidates['push'](cand);
            var nothead = new Array();
            for (var k = 0; k < nonemptyseqs['length']; k++) {
                for (var m = 1; m < nonemptyseqs[k]['length']; m++) {
                    if (cand === nonemptyseqs[k][m]) {
                        nothead['push'](nonemptyseqs[k]);
                    }
                }
            }
            if (nothead['length'] != 0)
                cand = null; // reject candidate
            else
                break;
        }
        if (cand == null) {
            resolve_error(candidates);
        }
        res['push'](cand);
        for (var j = 0; j < nonemptyseqs['length']; j++) {
            if (nonemptyseqs[j][0] === cand) {
                nonemptyseqs[j]['shift']();
            }
        }
    }
}

function $pyjs__class_instance(class_name, module_name) {
    if (typeof module_name == 'undefined') module_name = typeof __mod_name__ == 'undefined' ? '__main__' : __mod_name__;
    var cls_fn = function(){
        var args, instance;
        if (cls_fn['__number__'] !== null) {
            instance = cls_fn['__new__']['apply'](null, [cls_fn, arguments[0]]);
            args = arguments;
        } else {
            args = [cls_fn];
            for (var i=0; i<arguments['length']; i++) {
                args['push'](arguments[i]);
            }
            var kwargs = null;
            if (arguments['length'] >= 1) {
                var maybe_kwargs = args[args['length']-1];
                if (maybe_kwargs && typeof maybe_kwargs == 'object' && maybe_kwargs['__name__'] == 'dict' && typeof maybe_kwargs['$pyjs_is_kwarg'] != 'undefined') {
                    kwargs = maybe_kwargs['copy']();
                    kwargs['$pyjs_is_kwarg'] = true;
                }
            }
            instance = cls_fn['__new__']['apply'](null, args);
            if (kwargs != null) {
                args['shift']();
                args[args['length']-1] = kwargs;
            } else {
                args = arguments;
            }
        }
        if (typeof instance['__init__'] == 'function' && !instance['__init__']['__$pyjs_autogenerated__'] /* && pyjslib['isinstance'](instance, cls_fn) */) {
            if (instance['__init__']['apply'](instance, args) != null) {
                //throw '__init__() should return None';
                throw pyjslib['TypeError']('__init__() should return None');
            }
        }
        return instance;
    };
    cls_fn['__name__'] = class_name;
    cls_fn['__module__'] = module_name;
    cls_fn['__class__'] = pyjslib['type'];
    cls_fn['toString'] = function() { return this['__str__']();};
    return cls_fn;
}

function $pyjs__class_function(cls_fn, prop, bases) {
    if (typeof cls_fn != 'function') throw "compiler error? $pyjs__class_function: typeof cls_fn != 'function'";
    var class_name = cls_fn['__name__'];
    var class_module = cls_fn['__module__'];
    cls_fn['__number__'] = null;
    var base_mro_list = new Array();
    for (var i = 0; i < bases['length']; i++) {
        if (bases[i]['__mro__'] != null) {
            base_mro_list['push'](new Array()['concat'](bases[i]['__mro__']));
        } else if (typeof bases[i]['__class__'] == 'function') {
            base_mro_list['push'](new Array()['concat']([bases[i]['__class__']]));
        } else if (typeof bases[i]['prototype'] == 'function') {
            base_mro_list['push'](new Array()['concat']([bases[i]['prototype']]));
        }
    }
    var __mro__ = $pyjs__mro_merge(base_mro_list);

    for (var b = __mro__['length']-1; b >= 0; b--) {
        var base = __mro__[b];
        for (var p in base) cls_fn[p] = base[p];
    }
    for (var p in prop) cls_fn[p] = prop[p];
    delete cls_fn['$H'];

    if (cls_fn['__new__'] == null) {
      cls_fn['__new__'] = $pyjs__bind_method(cls_fn, '__new__', function(cls) {
        if (cls['__init__']['__$pyjs_autogenerated__'] && $pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
        var instance = function () {};
        instance['prototype'] = arguments[0]['prototype'];
        instance = new instance();
        instance['__class__'] = instance['prototype'];
        instance['__dict__'] = instance;
        instance['__is_instance__'] = true;
        return instance;
      }, 1, ['cls']);
    }
    if (cls_fn['__init__'] == null) {
      cls_fn['__init__'] = $pyjs__bind_method(cls_fn, '__init__', function () {
        if (this['__is_instance__'] === true) {
            var self = this;
            if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
        } else {
            var self = arguments[0];
            if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
            if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
        }
        if ($pyjs['options']['arg_instance_type']) {
            if (arguments['callee'] !== arguments['callee']['__class__'][arguments['callee']['__name__']]) {
                if (!pyjslib['_isinstance'](self, arguments['callee']['__class__']['slice'](1))) {
                    $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
                }
            }
        }
      }, 1, ['self']);
      cls_fn['__init__']['__$pyjs_autogenerated__'] = true;
    }
    cls_fn['__name__'] = class_name;
    cls_fn['__module__'] = class_module;
    //cls_fn['__mro__'] = pyjslib['list'](new Array(cls_fn)['concat'](__mro__));
    cls_fn['__mro__'] = new Array(cls_fn)['concat'](__mro__);
    cls_fn['prototype'] = cls_fn;
    cls_fn['__dict__'] = cls_fn;
    cls_fn['__is_instance__'] = false;
    cls_fn['__super_classes__'] = bases;
    cls_fn['__sub_classes__'] = new Array();
    for (var i = 0; i < bases['length']; i++) {
        if (typeof bases[i]['__sub_classes__'] == 'array') {
            bases[i]['__sub_classes__']['push'](cls_fn);
        } else {
            bases[i]['__sub_classes__'] = new Array();
            bases[i]['__sub_classes__']['push'](cls_fn);
        }
    }
    cls_fn['__args__'] = cls_fn['__init__']['__args__'];
    return cls_fn;
}

/* creates a class, derived from bases, with methods and variables */
function $pyjs_type(clsname, bases, methods)
{
    var cls_instance = $pyjs__class_instance(clsname, methods['__module__']);
    var obj = new Object;
    for (var i in methods) {
        if (typeof methods[i] == 'function' && typeof methods[i]['__class__'] == 'undefined') {
            if (methods[i]['__bind_type__'] > 0) {
                methods[i]['__class__'] = cls_instance;
                obj[i] = methods[i];
            } else {
                obj[i] = $pyjs__instancemethod(cls_instance, i, methods[i], methods[i]['__bind_type__'], methods[i]['__args__']);
            }
        } else {
            obj[i] = methods[i];
        }
    }
    return $pyjs__class_function(cls_instance, obj, bases);
}


function $pyjs_varargs_handler(args, start, has_kwargs)
{
    var end;
    if (has_kwargs) {
        end = args['length']-1;
        start = start - 1;
    } else {
        end = args['length'];
    }
    pyjslib['tuple']($pyjs_array_slice['call'](args, start, end));
}

function $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname,
                                    argcount, maxargs, minargs, maxargscheck)
{
    if (kwargname !== null) { /* if node['kwargs']: */
        $l[kwargname] = args['length'] >= maxargs ? args[args['length']-1] :
                                                  args[args['length']];
        if (typeof $l[kwargname] != 'object' ||
            $l[kwargname]['__name__'] != 'dict' ||
            typeof $l[kwargname]['$pyjs_is_kwarg'] == 'undefined') {
            if (varargname !== null) { /* if node['varargs']: */
                if (typeof $l['kwargs'] != 'undefined') {
                    $l[varargname]['__array']['push']($l[kwargname]);
                }
            }
            $l[kwargname] = args[args['length']+1];
        } else {
            delete $l[kwargname]['$pyjs_is_kwarg'];
        }
    }
    /* TODO: if options['function_argument_checking'] */
    /*
    if self['function_argument_checking']:
    if ($pyjs['options']['arg_count'] && argcount) {
        $pyjs__exception_func_param(args['callee']['__name__'],
                                    minargs, maxargscheck, args['length']+1);
    }
     */
}

/* creates local variables as an array based on method parameter specification
   and the caller's arguments (in args).
   this function mirrors exactly what Translator['_instance_method_init']
   produces (it has to).

   when generating code to call this function, defaults_count is passed in
   because otherwise it is necessary to count the callee __args__ list
   items [['arg1'], ['arg2', 'a default value']] and that would be a pain,
   repeated tons of times.

 */
function $pyjs_instance_method_get(inst, args,
                                    defaults_count, /* convenience */
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args['callee']['__args__'];
    var varargname = callee_args[0];
    var kwargname = callee_args[1];
    var arg_names = callee_args['slice'](2);

    console['debug'](inst['__name__'] + " " + args['callee']['__name__'] + " isinst " + inst['__is_instance__'] + " hva " + has_varargs + " hkwa " + has_kwargs + " va " + varargname + " kw " + kwargname + " al " + arg_names['length']);

    var $l = {};
    var end;
    var maxargs1 = arg_names['length'] - 1; /* for __is_instance__ === false */
    var maxargs2 = arg_names['length']; /* for __is_instance__ === true */
    var maxargs1check = maxargs1;
    var maxargs2check = maxargs2;
    var minargs1 = maxargs1 - defaults_count;
    var minargs2 = maxargs2 - defaults_count;
    var argcount1;
    var argcount2;

    if (has_kwargs) {
        maxargs1 = maxargs1 + 1;
        maxargs2 = maxargs2 + 1;
    }
    /* for __instance__ === false */
    if (has_varargs) {
        argcount1 = args['length'] < minargs1;
        maxargs1check = null;
    } else if (minargs1 == maxargs1) {
        argcount1 = args['length'] != minargs1;
    } else {
        argcount1 = args['length'] < minargs1 || args['length'] > maxargs1;
    }
    /* for __instance__ === true */
    if (has_varargs) {
        argcount2 = args['length'] < minargs2;
        maxargs2check = null;
    } else if (minargs2 == maxargs2) {
        argcount2 = args['length'] != minargs2;
    } else {
        argcount2 = args['length'] < minargs2 || args['length'] > maxargs2;
    }

    if (inst['__is_instance__'] === true) {

        $l['self'] = inst;

        if (varargname !== null) { /* if node['varargs']: */
            /* self['_varargs_handler'](varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs1, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs1, minargs2, maxargs2check);
        for (i = 1; i < arg_names['length']; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i-1];
        }
    } else {

        if (arg_names['length'] > 0)
        {
            $l['self'] = args[0];
        }

        if (varargname !== null) { /* if node['varargs']: */
            /* self['_varargs_handler'](varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs2, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs2, minargs2, maxargs2check);
        for (i = 1; i < arg_names['length']; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i];
        }
    }

    var res = '';
    for (i = 0; i < arg_names['length']; i++)
    {
        var arg_name = arg_names[i][0];
        res = res + arg_name + " ";
    }

    console['debug']("arg names " + res);

    /* TODO: function arg checking */
    /*
        if arg_names and self['function_argument_checking']:
            self['w']( """\
if ($pyjs['options']['arg_instance_type']) {
\tif (%(self)s['prototype']['__md5__'] !== '%(__md5__)s') {
\t\tif (!@{{_isinstance}}(%(self)s, arguments['callee']['__class__'])) {
\t\t\t$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], %(self)s);
\t\t}
\t}
}\
""" % {'self': arg_names[0], '__md5__': current_klass['__md5__']}, output=output)
    */
    $pyjs_default_args_handler($l, args, defaults_count,
                                    has_varargs, has_kwargs);

    var i = 0;
    var res = '';
    for (var k in $l) {
        res = res + k + " ";
    }
    console['debug']("arg keys " + res);
    return $l;
}

function $pyjsdf(arg, alternate)
{
    //console['debug']("pyjsdf " + arg + " default " + alternate);
    if (typeof arg == 'undefined') {
        return alternate;
    }
    return arg;
}

/* this function mirrors _default_args_handler
 */
function $pyjs_default_args_handler($l, args, defaults_count,
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args['callee']['__args__'];
    var varargname = callee_args[0];
    var kwargname = callee_args[1];
    var arg_names = callee_args['slice'](2);

    if (has_kwargs
        && kwargname !== null
        && typeof $l[kwargname] == 'undefined')
    {
        /*
            # This is necessary when **kwargs in function definition
            # and the call didn't pass the pyjs_kwargs_call().
            # See libtest testKwArgsInherit
            # This is not completely safe: if the last element in arguments
            # is an dict and the corresponding argument shoud be a dict and
            # the kwargs should be empty, the kwargs gets incorrectly the
            # dict and the argument becomes undefined.
            # E['g'].
            # def fn(a = {}, **kwargs): pass
            # fn({'a':1}) -> a gets undefined and kwargs gets {'a':1}
        */
        $l[kwargname] = pyjslib['__empty_dict']();
        for (var i = arg_names['length']-1; i >= 0; --i)
        {
            var arg_name = arg_names[i][0];
            if (typeof $l[arg_name] != 'undefined')
            {
                if($l[arg_name] !== null
                   && typeof $l[arg_name]['$pyjs_is_kwarg'] != 'undefined')
                {
                    $l[kwargname] = $l[arg_name];
                    $l[arg_name] = args[i];
                    break;
                }
            }
        }
    }
    var default_pos = arg_names['length'] - defaults_count;
    console['debug']("default_pos " + default_pos + " count " + defaults_count);
    for (var i = 0; i < defaults_count; i++)
    {
        var default_name = arg_names[default_pos][0];
        console['debug']("default_name " + default_name);
        default_pos++;
        if (typeof $l[default_name] == 'undefined')
        {
            $l[default_name] = callee_args[default_pos+1][1];
        }
    }
}

/* start module: pyjslib */
$pyjs['loaded_modules']['pyjslib'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjslib']['__was_initialized__']) return $pyjs['loaded_modules']['pyjslib'];
	var $m = pyjslib = $pyjs['loaded_modules']['pyjslib'];
	$m['__repr__'] = function() { return '<module: pyjslib>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m['__name__'] = __mod_name__;
	var $add3,$add2,$add6,$add4,$add5,$add1;
	;
	$m['platform'] = $pyjs['platform'];
	$m['sys'] = null;
	$m['dynamic'] = null;
	$m['Ellipsis'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs['loaded_modules']['sys']['save_exception_stack']();

    if (!$pyjs['in_try_except']) {
        var $pyjs_msg = $pyjs['loaded_modules']['sys']['_get_traceback'](err);
        $pyjs['__active_exception_stack__'] = null;
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments['callee']['__args__'][3][1];
		if (typeof methods == 'undefined') methods=arguments['callee']['__args__'][4][1];
		var $and1,$and2,$and3,main_base;
		if ($p['bool'](($p['bool']($and1=bases)?($p['bool']($and2=$p['hasattr'](bases['__getitem__'](0), '__class__'))?$p['hasattr'](bases['__getitem__'](0), '__new__'):$and2):$and1))) {
			main_base = bases['__getitem__'](0);
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class']['__name__'] = '_create_class';

	$m['_create_class']['__bind_type__'] = 0;
	$m['_create_class']['__args__'] = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments['callee']['__args__'][3][1];
		if (typeof methods == 'undefined') methods=arguments['callee']['__args__'][4][1];
		var $iter1_nextval,$iter1_idx,$attr1,k,$attr2,$and4,$and5,$iter1_iter,mth,$iter1_array,$iter1_type;
		if ($p['bool'](($p['bool']($and4=(bases === null))?(methods === null):$and4))) {
			if ($p['bool']($p['isinstance'](clsname, $p['str']))) {
				return $p['str'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['bool']))) {
				return $p['bool'];
			}
			if ($p['bool']($p['hasattr'](clsname, '__class__'))) {
				return clsname['__class__'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float_int']))) {
				return $p['float_int'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float']))) {
				return $p['float'];
			}
			if ($p['bool'](typeof clsname == 'number')) {
				return $p['float'];
			}
			if ($p['bool'](clsname == null)) {
				return (typeof NoneType == "undefined"?$m['NoneType']:NoneType);
			}
			if ($p['bool'](typeof clsname == 'function')) {
				return (typeof FunctionType == "undefined"?$m['FunctionType']:FunctionType);
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ($p['bool'](methods)) {
			$iter1_iter = methods['keys']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				k = $iter1_nextval['$nextval'];
				mth = methods['__getitem__'](k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ($p['bool'](bases)) {
bss = bases['__array'];
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type']['__name__'] = 'type';

	$m['type']['__bind_type__'] = 0;
	$m['type']['__args__'] = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'cb8623ec7ab16ef108a15335051acf66';
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap['indexOf'](name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self['__is_instance__']
            && self[name] !== null
            && typeof self[name]['__set__'] == 'function') {
            self[name]['__set__'](self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['object']['__str__'] = function (self) {
    if (typeof self == 'undefined') {
        self = this;
    }
    var s;
    if (self['__is_instance__'] === true) {
        s = "instance of ";
    } else if (self['__is_instance__'] === false) {
        s = "class ";
    } else {
        s = "javascript " + typeof self + " ";
    }
    if (self['__module__']) {
        s += self['__module__'] + ".";
    }
    if (typeof self['__name__'] != 'undefined') {
        return s + self['__name__'];
    }
    return s + "<unknown>";
};
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'd18c09c07974ad0482e58163c0d89f91';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['TypeClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'e8d06874b7a525e88b4475846b899d0b';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var cls = this;
			} else {
				var cls = arguments[0];
			}
			var $attr3,$attr4;
			return $p['sprintf']("<type '%s'>", cls['__name__']);
		}
	, 1, [null,null,['cls']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('TypeClass', $bases, $cls_definition);
	})();
	$m['NoneType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '45239554bbf34972bc1d0080ede86ba3';
		$method = $pyjs__bind_method2('__hash__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__hash__'] = $method;
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('NoneType', $bases, $cls_definition);
	})();
	$m['ModuleType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '79ee3c2fd612e2ab1e7db1def95adc79';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('ModuleType', $bases, $cls_definition);
	})();
	$m['FunctionType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '965313ac0804d1881f8be69fe60579b3';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FunctionType', $bases, $cls_definition);
	})();
	$m['CodeType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '290520e20b2c45aca4e97e80f366e459';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('CodeType', $bases, $cls_definition);
	})();
	$m['TracebackType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '1794f032b13fccf67f48decac07fa068';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('TracebackType', $bases, $cls_definition);
	})();
	$m['FrameType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '236da74fb1d61df0d3e753ef69a323d6';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FrameType', $bases, $cls_definition);
	})();
	$m['EllipsisType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '42c81936a7d384a2b0c729c3d9807841';
		$method = $pyjs__bind_method2('__new__', function(cls) {

			if ($p['bool'](($m['Ellipsis'] === null))) {
				return $m['object']['__new__'](cls);
			}
			else {
				return $m['Ellipsis'];
			}
			return null;
		}
	, 3, [null,null,['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('EllipsisType', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a['__number__'] << 8) | b['__number__']) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a['__v'] == b['__v'];
            case 0x0404:
                return a['__cmp__'](b) == 0;
        }
    }
    return false;

	};
	$m['op_is']['__name__'] = 'op_is';

	$m['op_is']['__bind_type__'] = 0;
	$m['op_is']['__args__'] = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a['__is_instance__'] === false &&
            b['__is_instance__'] === false) {
            return true;
        }
    }
    switch ((a['__number__'] << 8) | b['__number__']) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b['__v'];
        case 0x0201:
            return a['__v'] == b;
        case 0x0202:
            return a['__v'] == b['__v'];
        case 0x0104:
        case 0x0204:
            a = new $p['float_int'](a['valueOf']());
        case 0x0404:
            return a['__cmp__'](b) == 0;
        case 0x0402:
            return a['__cmp__'](new $p['float_int'](b['valueOf']())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a['__eq__'] == 'function') {
            if (typeof b['__eq__'] != 'function') {
                return false;
            }
            if (a['__eq__'] === b['__eq__']) {
                return a['__eq__'](b);
            }
            if ($p['_isinstance'](a, b)) {
                return a['__eq__'](b);
            }
            return false;
        }
        if (typeof a['__cmp__'] == 'function') {
            if (typeof b['__cmp__'] != 'function') {
                return false;
            }
            if (a['__cmp__'] === b['__cmp__']) {
                return a['__cmp__'](b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a['__cmp__'](b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b['__eq__'] == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b['__eq__'](a);
            }
            return false;
        }
        if (typeof b['__cmp__'] == 'function') {
            // typeof bXXX['__cmp__'] != 'function'
            // aXXX['__cmp__'] !== bXXX['__cmp__']
            if ($p['_isinstance'](a, b)) {
                return b['__cmp__'](a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq']['__name__'] = 'op_eq';

	$m['op_eq']['__bind_type__'] = 0;
	$m['op_eq']['__args__'] = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {


    switch (v['__number__']) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v['__pos__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary +: '%r'", v)));
		return null;
	};
	$m['op_uadd']['__name__'] = 'op_uadd';

	$m['op_uadd']['__bind_type__'] = 0;
	$m['op_uadd']['__args__'] = [null,null,['v']];
	$m['op_usub'] = function(v) {


    switch (v['__number__']) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['float_int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v['__neg__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_usub']['__name__'] = 'op_usub';

	$m['op_usub']['__bind_type__'] = 0;
	$m['op_usub']['__args__'] = [null,null,['v']];
	$m['__op_add'] = function(x, y) {


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add']['__name__'] = '__op_add';

	$m['__op_add']['__bind_type__'] = 0;
	$m['__op_add']['__args__'] = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y['__v'];
            case 0x0201:
                return x['__v'] + y;
            case 0x0202:
                return new $p['float_int'](x['__v'] + y['__v']);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__add'](y);
            case 0x0402:
                return x['__add'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__add'](y);
        }
        if (!x['__number__']) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y['__add__'](x);
            if (typeof x['__add__'] == 'function') return x['__add__'](y);
        }
        if (!y['__number__'] && typeof y['__radd__'] == 'function') return y['__radd__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add']['__name__'] = 'op_add';

	$m['op_add']['__bind_type__'] = 0;
	$m['op_add']['__args__'] = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub']['__name__'] = '__op_sub';

	$m['__op_sub']['__bind_type__'] = 0;
	$m['__op_sub']['__args__'] = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y['__v'];
            case 0x0201:
                return x['__v'] - y;
            case 0x0202:
                return new $p['float_int'](x['__v'] - y['__v']);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__sub'](y);
            case 0x0402:
                return x['__sub'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__sub'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y['__sub__'](x);
            if (typeof x['__sub__'] == 'function') return x['__sub__'](y);
        }
        if (!y['__number__'] && typeof y['__rsub__'] == 'function') return y['__rsub__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for -: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub']['__name__'] = 'op_sub';

	$m['op_sub']['__bind_type__'] = 0;
	$m['op_sub']['__args__'] = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x / y);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x / y['__v']);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['floor'](x['__v'] / y);
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['float_int'](Math['floor'](x['__v'] / y['__v']));
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__floordiv'](y);
            case 0x0402:
                return x['__floordiv'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__floordiv'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y['__floordiv__'](x);
            if (typeof x['__floordiv__'] == 'function') return x['__floordiv__'](y);
        }
        if (!y['__number__'] && typeof y['__rfloordiv__'] == 'function') return y['__rfloordiv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for //: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv']['__name__'] = 'op_floordiv';

	$m['op_floordiv']['__bind_type__'] = 0;
	$m['op_floordiv']['__args__'] = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y['__v'];
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y;
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['float_int'](x['__v'] / y['__v']);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__div'](y);
            case 0x0402:
                return x['__div'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__div'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y['__div__'](x);
            if (typeof x['__div__'] == 'function') return x['__div__'](y);
        }
        if (!y['__number__'] && typeof y['__rdiv__'] == 'function') return y['__rdiv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div']['__name__'] = 'op_div';

	$m['op_div']['__bind_type__'] = 0;
	$m['op_div']['__args__'] = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y['__v'];
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y;
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x['__v'] / y['__v'];
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y['__truediv__'](x);
            if (typeof x['__truediv__'] == 'function') return x['__truediv__'](y);
        }
        if (!y['__number__'] && typeof y['__rtruediv__'] == 'function') return y['__rtruediv__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv']['__name__'] = 'op_truediv';

	$m['op_truediv']['__bind_type__'] = 0;
	$m['op_truediv']['__args__'] = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y['__v'];
            case 0x0201:
                return x['__v'] * y;
            case 0x0202:
                return new $p['float_int'](x['__v'] * y['__v']);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__mul'](y);
            case 0x0402:
                return x['__mul'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__mul'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y['__mul__'](x);
            if (typeof x['__mul__'] == 'function') return x['__mul__'](y);
        }
        if (!y['__number__'] && typeof y['__rmul__'] == 'function') return y['__rmul__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for *: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul']['__name__'] = 'op_mul';

	$m['op_mul']['__bind_type__'] = 0;
	$m['op_mul']['__args__'] = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y['__v'];
                return (v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x['__v'] % y;
                return (v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0202:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x['__v'] % y['__v'];
                return new $p['float_int'](v < 0 && y['__v'] > 0 ? v + y['__v'] : v);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__mod'](y);
            case 0x0402:
                return x['__mod'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__mod'](y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y['__mod__'](x);
            if (typeof x['__mod__'] == 'function') return x['__mod__'](y);
        }
        if (!y['__number__'] && typeof y['__rmod__'] == 'function') return y['__rmod__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod']['__name__'] = 'op_mod';

	$m['op_mod']['__bind_type__'] = 0;
	$m['op_mod']['__args__'] = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x, y);
            case 0x0102:
                if (y['__v'] == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x,y['__v']);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math['pow'](x['__v'],y);
            case 0x0202:
                return x['__pow__'](y);
            case 0x0204:
                return (new $p['float_int'](x['__v']))['__pow'](y);
            case 0x0402:
                return x['__pow'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__pow'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y['__pow__'](x);
            if (typeof x['__pow__'] == 'function') return x['__pow__'](y);
        }
        if (!y['__number__'] && typeof y['__rpow__'] == 'function') return y['__rpow__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow']['__name__'] = 'op_pow';

	$m['op_pow']['__bind_type__'] = 0;
	$m['op_pow']['__args__'] = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v['__invert__']();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_invert']['__name__'] = 'op_invert';

	$m['op_invert']['__bind_type__'] = 0;
	$m['op_invert']['__args__'] = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__lshift__'](y);
            case 0x0204:
                return y['__rlshift__'](x);
            case 0x0402:
                return x['__lshift'](y['__v']);
            case 0x0404:
                return x['__lshift'](y['valueOf']());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x['__lshift__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y['__rlshift__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for <<: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft']['__name__'] = 'op_bitshiftleft';

	$m['op_bitshiftleft']['__bind_type__'] = 0;
	$m['op_bitshiftleft']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__rshift__'](y);
            case 0x0204:
                return y['__rrshift__'](x);
            case 0x0402:
                return x['__rshift'](y['__v']);
            case 0x0404:
                return x['__rshift'](y['valueOf']());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x['__rshift__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y['__rrshift__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for >>: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright']['__name__'] = 'op_bitshiftright';

	$m['op_bitshiftright']['__bind_type__'] = 0;
	$m['op_bitshiftright']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__and__'](y);
            case 0x0204:
                return y['__and'](new $p['float_int'](x));
            case 0x0402:
                return x['__and'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__and'](y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x['__and__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y['__rand__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for &: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2']['__name__'] = 'op_bitand2';

	$m['op_bitand2']['__bind_type__'] = 0;
	$m['op_bitand2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res['__and__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i]['__rand__'](r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i]['__rand__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add1='unsupported operand type(s) for &: ',$add2=', '['join'](function(){
		var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m['args']:args));
	$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
	while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter2_nextval['$nextval'];
		$collcomp1['append']($p['repr']($m['a']));
	}

	return $collcomp1;}()))));

};

	$m['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__xor__'](y);
            case 0x0204:
                return y['__xor'](new $p['float_int'](x));
            case 0x0402:
                return x['__xor'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__xor'](y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x['__xor__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y['__rxor__'](x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for ^: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2']['__name__'] = 'op_bitxor2';

	$m['op_bitxor2']['__bind_type__'] = 0;
	$m['op_bitxor2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res['__xor__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i]['__rxor__'](r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i]['__rxor__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add3='unsupported operand type(s) for ^: ',$add4=', '['join'](function(){
		var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
	$iter3_iter = $m['args'];
	$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
	while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter3_nextval['$nextval'];
		$collcomp2['append']($p['repr']($m['a']));
	}

	return $collcomp2;}()))));

};

	$m['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0202:
                return x['__or__'](y);
            case 0x0204:
                return y['__or'](new $p['float_int'](x));
            case 0x0402:
                return x['__or'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__or'](y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x['__or__'](y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y['__ror__'](x);
        }
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for |: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2']['__name__'] = 'op_bitor2';

	$m['op_bitor2']['__bind_type__'] = 0;
	$m['op_bitor2']['__args__'] = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args['length'] > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args['length']; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res['__or__'](args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i]['__ror__'](r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i]['__ror__'](res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add5='unsupported operand type(s) for |: ',$add6=', '['join'](function(){
		var $iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
	$iter4_iter = $m['args'];
	$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
	while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
		$m['a'] = $iter4_nextval['$nextval'];
		$collcomp3['append']($p['repr']($m['a']));
	}

	return $collcomp3;}()))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments['callee']['__args__'][4][1];
		if (typeof get_base == 'undefined') get_base=arguments['callee']['__args__'][5][1];
		var $and8,$and14,$and9,$and13,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,$attr25,$and15,is_module_object,$attr28,$attr18,in_context,$and11,$attr27,$attr16,$attr26,$attr11,$and6,$attr22,objName,$sub2,$sub1,$and16,$attr9,$attr8,contextTopName,$attr5,$attr7,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,pyjslib,path_parts,topName,inContextTopName,$and10,$and12,depth,inContextImportName,inContextParentName,$add7,$and17,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs['track']['module'];
		sys = $pyjs['loaded_modules']['sys'];
		pyjslib = $pyjs['loaded_modules']['pyjslib'];
		if ($p['bool'](sys['__was_initialized__'] != true)) {
			module = $pyjs['loaded_modules'][path];
			module();
$pyjs['track']['module'] = save_track_module;
			if ($p['bool']($m['op_eq'](path, 'sys'))) {
				module['modules'] = $p['dict']($p['dict']([['pyjslib', pyjslib], ['__builtin__', pyjslib], ['builtins', pyjslib], ['sys', module]]));
$pyjs['loaded_modules']['__builtin__'] = pyjslib;
$pyjs['loaded_modules']['builtins'] = pyjslib;
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts['length']-1];
		parentName = path_parts['slice'](0, $m['__op_sub']($sub1=path_parts['length'],$sub2=1))['join']('.');
		if ($p['bool']((context === null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = $m['__op_add']($add9=$m['__op_add']($add7=context,$add8='.'),$add10=importName);
			if ($p['bool'](!$p['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = $m['__op_add']($add13=$m['__op_add']($add11=context,$add12='.'),$add14=parentName);
			}
			inContextTopName = $m['__op_add']($add17=$m['__op_add']($add15=context,$add16='.'),$add18=topName);
			contextTopName = context['__split']('.')[0];
			if ($p['bool'](($p['bool']($and6=($p['cmp'](depth, 1) == 1))?sys['modules']['has_key'](inContextParentName):$and6))) {
				module = sys['modules']['__getitem__'](inContextParentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][inContextTopName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return sys['modules']['__getitem__'](inContextImportName);
			}
			else if ($p['bool'](($p['bool']($and8=($p['cmp'](depth, 1) == 1))?typeof (module = $pyjs['loaded_modules'][inContextParentName]) != 'undefined':$and8))) {
				sys['modules']['__setitem__'](inContextParentName, module);
module['__was_initialized__'] = false;
				module(null);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][inContextTopName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return sys['modules']['__getitem__'](inContextImportName);
			}
			if ($p['bool'](typeof (module = $pyjs['loaded_modules'][inContextImportName]) != 'undefined')) {
				sys['modules']['__setitem__'](inContextImportName, module);
module['__was_initialized__'] = false;
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][inContextTopName];
				}
				return module;
			}
			if ($p['bool'](!$p['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if ($p['bool'](typeof (module = $pyjs['loaded_modules'][inContextTopName]) != 'function')) {
					in_context = false;
					if ($p['bool']($pyjs['options']['dynamic_loading'])) {
						module = (typeof __dynamic_load__ == "undefined"?$m['__dynamic_load__']:__dynamic_load__)(inContextTopName);
						if ($p['bool'](typeof module == 'function')) {
							in_context = true;
							if ($p['bool']($m['op_eq'](depth, 1))) {
								module(module_name);
$pyjs['track']['module'] = save_track_module;
								return module;
							}
							else {
								module(null);
								if ($p['bool'](($p['bool']($and10=$m['op_eq'](depth, 2))?typeof module[objName] != 'undefined':$and10))) {
									if ($p['bool'](get_base)) {
										return $pyjs['loaded_modules'][inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ($p['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ($p['bool'](!$p['bool'](in_context))) {
			if ($p['bool'](($p['bool']($and12=parentName)?sys['modules']['has_key'](parentName):$and12))) {
				module = sys['modules']['__getitem__'](parentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][topName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return sys['modules']['__getitem__'](importName);
			}
			else if ($p['bool'](($p['bool']($and14=parentName)?typeof (module = $pyjs['loaded_modules'][parentName]) != 'undefined':$and14))) {
				sys['modules']['__setitem__'](parentName, module);
module['__was_initialized__'] = false;
				module(null);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs['loaded_modules'][topName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return sys['modules']['__getitem__'](importName);
			}
			if ($p['bool'](typeof (module = $pyjs['loaded_modules'][importName]) != 'undefined')) {
				sys['modules']['__setitem__'](importName, module);
				if ($p['bool'](($p['bool']($and16=!$m['op_eq'](importName, 'pyjslib'))?!$m['op_eq'](importName, 'sys'):$and16))) {
module['__was_initialized__'] = false;
				}
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return module;
			}
		}
		if ($p['bool']($pyjs['options']['dynamic_loading'])) {
			module = (typeof __dynamic_load__ == "undefined"?$m['__dynamic_load__']:__dynamic_load__)(importName);
			if ($p['bool'](typeof module== 'function')) {
				module(module_name);
$pyjs['track']['module'] = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs['loaded_modules'][topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___']['__name__'] = '___import___';

	$m['___import___']['__bind_type__'] = 0;
	$m['___import___']['__args__'] = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		var $add28,$add30,$or1,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs['loaded_modules'][importName];
		if ($p['bool'](($p['bool']($or1=($m['sys'] === null))?$or1:($p['bool']($or2=($m['dynamic'] === null))?$or2:$m['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add25=$m['__op_add']($add23=$m['__op_add']($add21=$m['__op_add']($add19='lib/',$add20=importName),$add22='.__'),$add24=$m['platform']),$add26='__.js'));
				module = $pyjs['loaded_modules'][importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add29=$m['__op_add']($add27='lib/',$add28=importName),$add30='.js'));
				module = $pyjs['loaded_modules'][importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			if ($p['bool'](typeof module== 'undefined')) {
				$m['__nondynamic_modules__']['__setitem__'](importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__']['__name__'] = '__dynamic_load__';

	$m['__dynamic_load__']['__bind_type__'] = 0;
	$m['__dynamic_load__']['__args__'] = [null,null,['importName']];
	$m['__import_all__'] = function(path, context, namespace, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments['callee']['__args__'][5][1];
		if (typeof get_base == 'undefined') get_base=arguments['callee']['__args__'][6][1];
		var $iter5_nextval,$iter5_idx,name,$iter6_idx,$iter6_type,$iter5_array,module,$iter6_array,$iter5_iter,$iter6_iter,$iter5_type,$iter6_nextval;
		module = $m['___import___'](path, context, module_name, get_base);
		if ($p['bool'](typeof module['__all__'] == 'undefined')) {
			$iter5_iter = $p['dir'](module);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				name = $iter5_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](name['startswith']('_')))) {
namespace[name] = module[name];
				}
			}
		}
		else {
			$iter6_iter = module['__all__'];
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				name = $iter6_nextval['$nextval'];
namespace[name] = module[name];
			}
		}
		return null;
	};
	$m['__import_all__']['__name__'] = '__import_all__';

	$m['__import_all__']['__bind_type__'] = 0;
	$m['__import_all__']['__args__'] = [null,null,['path'],['context'],['namespace'],['module_name', null],['get_base', true]];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'b85ed1ae30f12d496b01fe7803b763cc';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			self['args'] = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add33,$add31,$add34,$attr30,$attr29;
			return $m['__op_add']($add33=$m['__op_add']($add31=self['__name__'],$add32=': '),$add34=self['__str__']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr37,$attr36,$attr35,$attr34,$attr38;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['str'](self['args']['__getitem__'](0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add36,$add35,$attr44,$attr42,$attr43,$attr40,$attr41,$attr39;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}
			return $m['__op_add']($add35=self['__name__'],$add36=$p['repr'](self['args']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7da51445799e53803ff525f7592982e7';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'a866afd136ea0dd3f83d039eb61e4ae8';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['SystemExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '90a3e71a4086a3ec447c7b9c80dbc6d9';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('SystemExit', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '59035f36ef6aad3fccf62e16d0226b63';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ba493465645bb7cf09974df33ccf3ed5';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7f79e4f81b20ab36c5efab83a1fe7429';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['StopIteration'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ab42528cd88a12f87f1eeef2724a1da0';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StopIteration', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '55f6328fb7df91e9a620cc42673df1c2';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '339ebd84114a6e4879449f817e765877';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '648ad33c654cb1361801512e356f39ab';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '438e1e22d039d6a44b400a214e772006';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'ffe06cade236826d655e9b768139dfd0';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '448e3410aae2c5c53ac32b860b0274d2';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '90d2cdba8ff5958f09585ffbce94e4aa';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '1cf76b9006b2565aa2ccc721e715dc95';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4aa3bdd38ea7028f26080f8d33ae26d1';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['SystemError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'b0118e0834fff3212c3ec6a6c4159770';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('SystemError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '61fca1de1a4c3689bc91aa186599fa54';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr50,$attr52,$attr46,$attr47,$attr45,$attr48,$attr49;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['repr'](self['args']['__getitem__'](0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4fbd47351162409f2606b2f6c45525f8';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '735ee27d74b21742a0387a82104289f3';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'f86b9be0dec16ecdba1f7e2fdedc6e83';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'a62115387b74dfa3ef2a72680419e336';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '4e5258c530abe4ba6d474bffd34a70fd';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err['message'];
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse']['prototype'] = new Error();
$p['TryElse']['__name__'] = 'TryElse';


String['prototype']['rfind'] = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this['substring'](start)['lastIndexOf'](sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this['lastIndexOf'](sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub['length']>end) return -1;
    return pos;
};

String['prototype']['find'] = function(sub, start, end) {
    var pos=this['indexOf'](sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub['length']>end) return -1;
    return pos;
};
String['prototype']['index'] = function(sub, start, end) {
    var pos = this['find'](sub, start, end);
    if (pos < 0)
        throw $m['ValueError']('substring not found');
    return pos;
}
String['prototype']['count'] = function(sub, start, end) {
    var pos, count = 0, n = sub['length'];
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];
    while (start < end) {
        pos = this['find'](sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String['prototype']['format'] = function() {
    var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

    var kw = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
    if (typeof kw != 'object' || kw['__name__'] != 'dict' || typeof kw['$pyjs_is_kwarg'] == 'undefined') {
        if (typeof kw != 'undefined') args['__array']['push'](kw);
        kw = arguments[arguments['length']+1];
    } else {
        delete kw['$pyjs_is_kwarg'];
    }
    if (typeof kw == 'undefined') {
        kw = $p['__empty_dict']();
    }
    return $p['_string_format'](this, args, kw);
}
String['prototype']['format']['__args__'] = ['args', ['kw']];

String['prototype']['join'] = function(data) {
    var text="";

    if (data['constructor'] === Array) {
        return data['join'](this);
    } else if (typeof data['__iter__'] == 'function') {
        if (typeof data['__array'] == 'object') {
            return data['__array']['join'](this);
        }
        var iter=data['__iter__']();
        if (typeof iter['__array'] == 'object') {
            return iter['__array']['join'](this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter['$genfunc'] == 'function') {
            while (typeof (item=iter['next'](true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter['next']();
                }
            }
            catch (e) {
                if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
            }
        }
        return data['join'](this);
    }

    return text;
};

String['prototype']['isdigit'] = function() {
    return (this['match'](/^\d+$/g) !== null);
};

String['prototype']['isalnum'] = function() {
    return (this['match'](/^[a-zA-Z\d]+$/g) !== null);
};

String['prototype']['isalpha'] = function() {
    return (this['match'](/^[a-zA-Z]+$/g) !== null);
};

String['prototype']['isupper'] = function() {
    return (this['match'](/[a-z]/g) === null);
};

String['prototype']['islower'] = function() {
    return (this['match'](/[A-Z]/g) === null);
};

String['prototype']['isspace'] = function() {
    return (this.match(/^\s+$/g) !== null);
};

String['prototype']['__replace']=String['prototype']['replace'];

String['prototype']['$$replace'] = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this['__replace'](old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this['length']) {
        if (do_max && !count--) break;

        pos=this['indexOf'](old, start);
        if (pos<0) break;

        new_str+=this['substring'](start, pos) + replace;
        start=pos+old['length'];
    }
    if (start<this['length']) new_str+=this['substring'](start);

    return new_str;
};

String['prototype']['__contains__'] = function(s){
    return this['indexOf'](s)>=0;
};

String['prototype']['__split'] = String['prototype']['split'];

String['prototype']['$$split'] = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject['length'] == 0) {
            return items;
        }
        subject=subject['strip']();
        subject=subject['$$replace'](/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject['length'] == 0) {
        items['__array']['push']('');
        return items;
    }

    while (start<subject['length']) {
        if (do_max && !maxsplit--) break;

        pos=subject['indexOf'](sep, start);
        if (pos<0) break;

        items['__array']['push'](subject['substring'](start, pos));
        start=pos+sep['length'];
    }
    if (start<=subject['length']) items['__array']['push'](subject['substring'](start));

    return items;
};

String['prototype']['rsplit'] = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject['length'] == 0) {
            return items;
        }
        subject=subject['strip']();
        subject=subject['$$replace'](/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject['length'] == 0) {
        items['__array']['push']('');
        return items;
    }

    while (subject['length'] > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject['lastIndexOf'](sep);
        if (pos<0) break;

        items['__array']['push'](subject['substr'](pos+sep['length']));
        subject = subject['substr'](0, pos);
    }
    if (subject['length'] > 0) items['__array']['push'](subject);
    items['__array']['reverse']()

    return items;
};
String['prototype']['splitlines'] = function(keepends) {
    var items = this['$$split']("\n");
    if (typeof keepends != 'undefined' && keepends)
    {
        for (var i=0; i<items['__array']['length']; i++)
        {
            items['__array'][i] = items['__array'][i] + "\n";
        }
    }
    return items;
}
if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String['prototype']['__iter__'] = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s['length']) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s['charAt'](i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String['prototype']['__iter__'] = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s['length']) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s['charAt'](i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String['prototype']['strip'] = function(chars) {
    return this['lstrip'](chars)['rstrip'](chars);
};

String['prototype']['lstrip'] = function(chars) {
    if (typeof chars == 'undefined') return this['$$replace'](/^\s+/, "");
    if (chars['length'] == 0) return this;
    return this['$$replace'](new RegExp("^[" + chars + "]+"), "");
};

String['prototype']['rstrip'] = function(chars) {
    if (typeof chars == 'undefined') return this['$$replace'](/\s+$/, "");
    if (chars['length'] == 0) return this;
    return this['$$replace'](new RegExp("[" + chars + "]+$"), "");
};

String['prototype']['startswith'] = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];

    if ((end - start) < prefix['length']) return false;
    if (this['substr'](start, prefix['length']) == prefix) return true;
    return false;
};

String['prototype']['endswith'] = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this['length'];

    if ((end - start) < suffix['length']) return false;
    if (this['substr'](end - suffix['length'], suffix['length']) == suffix) return true;
    return false;
};

String['prototype']['ljust'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    return this + new Array(width+1 - this['length'])['join'](fillchar);
};

String['prototype']['rjust'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    return new Array(width + 1 - this['length'])['join'](fillchar) + this;
};

String['prototype']['center'] = function(width, fillchar) {
    switch (width['__number__']) {
        case 0x02:
        case 0x04:
            width = width['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar['length'] != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this['length'] >= width) return this;
    var padlen = width - this['length'];
    var right = Math['ceil'](padlen / 2);
    var left = padlen - right;
    return new Array(left+1)['join'](fillchar) + this + new Array(right+1)['join'](fillchar);
};

String['prototype']['__getslice__'] = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this['length'] + lower;
    }
    if (upper === null) {
        upper=this['length'];
    } else if (upper < 0) {
       upper = this['length'] + upper;
    }
    return this['substring'](lower, upper);
};

String['prototype']['__getitem__'] = function(idx) {
    if (idx < 0) idx += this['length'];
    if (idx < 0 || idx > this['length']) {
        throw $m['IndexError']("string index out of range");
    }
    return this['charAt'](idx);
};

String['prototype']['__setitem__'] = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String['prototype']['upper'] = String['prototype']['toUpperCase'];
String['prototype']['lower'] = String['prototype']['toLowerCase'];

String['prototype']['capitalize'] = function() {
    return this['charAt'](0)['toUpperCase']() + this['substring'](1);
};

String['prototype']['zfill'] = function(width) {
    return this['rjust'](width, '0');
};

String['prototype']['__add__'] = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String['prototype']['__mul__'] = function(y) {
    switch (y['__number__']) {
        case 0x02:
        case 0x04:
            y = y['valueOf']();
            break;
        case 0x01:
            if (Math['floor'](y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String['prototype']['__rmul__'] = String['prototype']['__mul__'];
String['prototype']['__number__'] = null;
String['prototype']['__name__'] = 'str';
String['prototype']['__class__'] = String['prototype'];
String['prototype']['__is_instance__'] = null;
String['prototype']['__str__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};
String['prototype']['__repr__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return "'" + this['toString']() + "'";
};
String['prototype']['__mro__'] = [$m['basestring']];


Boolean['prototype']['__number__'] = 0x01;
Boolean['prototype']['__name__'] = 'bool';
Boolean['prototype']['__class__'] = Boolean['prototype'];
Boolean['prototype']['__is_instance__'] = null;
Boolean['prototype']['__str__']= function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean['prototype']['__repr__'] = Boolean['prototype']['__str__'];
Boolean['prototype']['__and__'] = function (y) {
    return this & y['valueOf']();
};
Boolean['prototype']['__or__'] = function (y) {
    return this | y['valueOf']();
};
Boolean['prototype']['__xor__'] = function (y) {
    return this ^ y['valueOf']();
};


if (typeof Array['prototype']['indexOf'] != 'function') {
    Array['prototype']['indexOf'] = function(elt /*, from*/) {
        var len = this['length'] >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math['ceil'](from)
                : Math['floor'](from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp['prototype']['Exec'] = function(pat) {
    var m = this['exec'](pat);
    if (m !== null) {
        var len = m['length'] >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math['abs'];

	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7888674594d3d29a56aa65002b902620';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self['$$name'] = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open']['__name__'] = 'open';

	$m['open']['__bind_type__'] = 0;
	$m['open']['__args__'] = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a['__number__'] << 8)|b['__number__']) {
        case 0x0202:
            a = a['__v'];
            b = b['__v'];
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b['__cmp__'] == 'function') {
                return -b['__cmp__'](a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a['__cmp__'] == 'function') {
                return a['__cmp__'](b);
            }
            return 1;
        case 0x0102:
            return -b['__cmp__'](new $p['float_int'](a));
        case 0x0104:
            return -b['__cmp__'](new $p['float_int'](a));
        case 0x0201:
            return a['__cmp__'](new $p['float_int'](b));
        case 0x0401:
            return a['__cmp__'](new $p['float_int'](b));
        case 0x0204:
            return -b['__cmp__'](new $p['float_int'](a));
        case 0x0402:
            return a['__cmp__'](new $p['float_int'](b));
        case 0x0404:
            return a['__cmp__'](b);
    }

    if (typeof a['__class__'] == typeof b['__class__'] && typeof a['__class__'] == 'function') {
        if (a['__class__']['__name__'] < b['__class__']['__name__']) {
            return -1;
        }
        if (a['__class__']['__name__'] > b['__class__']['__name__']) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a['__cmp__'] == 'function') {
        return a['__cmp__'](b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b['__cmp__'] == 'function') {
        return -b['__cmp__'](a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v['__nonzero__'] == 'function'){
            return v['__nonzero__']();
        } else if (typeof v['__len__'] == 'function'){
            return v['__len__']() > 0;
        }
    }
    return true;
    
	};
	$m['bool']['__name__'] = 'bool';

	$m['bool']['__bind_type__'] = 0;
	$m['bool']['__args__'] = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '9b8de80f12ec869e3f4f5f7acc990d6e';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {


        if (typeof num == 'string') {
            num = num['lstrip']();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number['prototype']['__number__'] = 0x01;
Number['prototype']['__name__'] = 'float';
Number['prototype']['__init__'] = function (value, radix) {
    return null;
};

Number['prototype']['__str__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};

Number['prototype']['__repr__'] = function () {
    if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
    return this['toString']();
};

Number['prototype']['__nonzero__'] = function () {
    return this != 0;
};

Number['prototype']['__cmp__'] = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number['prototype']['__hash__'] = function () {
    return this;
};

Number['prototype']['__oct__'] = function () {
    return '0'+this['toString'](8);
};

Number['prototype']['__hex__'] = function () {
    return '0x'+this['toString'](16);
};

Number['prototype']['__pos__'] = function () {
    return this;
};

Number['prototype']['__neg__'] = function () {
    return -this;
};

Number['prototype']['__abs__'] = function () {
    if (this >= 0) return this;
    return -this;
};

Number['prototype']['__add__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this + y;
};

Number['prototype']['__radd__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y + this;
};

Number['prototype']['__sub__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this - y;
};

Number['prototype']['__rsub__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y - this;
};

Number['prototype']['__floordiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math['floor'](this / y);
};

Number['prototype']['__rfloordiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math['floor'](y / this);
};

Number['prototype']['__div__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number['prototype']['__rdiv__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number['prototype']['__mul__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return this * y;
};

Number['prototype']['__rmul__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    return y * this;
};

Number['prototype']['__mod__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number['prototype']['__rmod__'] = function (y) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number['prototype']['__pow__'] = function (y, z) {
    if (!y['__number__'] || isNaN(y = y['valueOf']())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math['pow'](this, y);
    }
    if (!z['__number__'] || isNaN(z = z['valueOf']())) return $p['NotImplemented'];
    return Math['pow'](this, y) % z;
};

	$m['float_js'] = $m['float'];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2f9835c34956d3d701ff49e481121953';
		$method = $pyjs__bind_method2('__init__', function(num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				num = arguments[1];
			}

			self['__v'] = $m['float_js'](num);
			return null;
		}
	, 1, [null,null,['self'],['num']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__nonzero__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__cmp__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__hash__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__oct__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__oct__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__oct__'] = $method;
		$method = $pyjs__bind_method2('__hex__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__hex__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hex__'] = $method;
		$method = $pyjs__bind_method2('__pos__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__pos__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__pos__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__neg__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('__abs__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__v']['__abs__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__abs__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__add__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__radd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__radd__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__radd__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__sub__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__rsub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__rsub__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rsub__'] = $method;
		$method = $pyjs__bind_method2('__floordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__floordiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__floordiv__'] = $method;
		$method = $pyjs__bind_method2('__rfloordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__rfloordiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rfloordiv__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__div__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('__rdiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__rdiv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rdiv__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__mul__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__rmul__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmul__'] = $method;
		$method = $pyjs__bind_method2('__mod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__mod__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mod__'] = $method;
		$method = $pyjs__bind_method2('__rmod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__v']['__rmod__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmod__'] = $method;
		$method = $pyjs__bind_method2('__pow__', function(y, z) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
				z = arguments[2];
			}

			return self['__v']['__pow__'](y, z);
		}
	, 1, [null,null,['self'],['y'],['z']]);
		$cls_definition['__pow__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('float', $bases, $cls_definition);
	})();
	$m['float_py'] = $m['float'];
	$m['float'] = $m['float_js'];
	$m['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments['callee']['__args__'][3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value['__number__']) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value['valueOf']();
        if (v > 0) {
            v = Math['floor'](v);
        } else {
            v = Math['ceil'](v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value['lstrip']();
        switch (value[value['length']-1]) {
            case 'l':
            case 'L':
                v = value['slice'](0, value['length']-2);
                break;
            default:
                v = value;
        }
        if (v['match']($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = v['$$replace'](' ', '');
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int']['__name__'] = 'float_int';

	$m['float_int']['__bind_type__'] = 0;
	$m['float_int']['__args__'] = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *-? *[01]+ *$/i,     //  2
    /^ *-? *[0-2]+ *$/i,    //  3
    /^ *-? *[0-3]+ *$/i,    //  4
    /^ *-? *[0-4]+ *$/i,    //  5
    /^ *-? *[0-5]+ *$/i,    //  6
    /^ *-? *[0-6]+ *$/i,    //  7
    /^ *-? *[0-7]+ *$/i,    //  8
    /^ *-? *[0-8]+ *$/i,    //  9
    /^ *-? *[0-9]+ *$/i,    // 10
    /^ *-? *[0-9a]+ *$/i,   // 11
    /^ *-? *[0-9ab]+ *$/i,  // 12
    /^ *-? *[0-9a-c]+ *$/i, // 13
    /^ *-? *[0-9a-d]+ *$/i, // 14
    /^ *-? *[0-9a-e]+ *$/i, // 15
    /^ *-? *[0-9a-f]+ *$/i, // 16
    /^ *-? *[0-9a-g]+ *$/i, // 17
    /^ *-? *[0-9a-h]+ *$/i, // 18
    /^ *-? *[0-9a-i]+ *$/i, // 19
    /^ *-? *[0-9a-j]+ *$/i, // 20
    /^ *-? *[0-9a-k]+ *$/i, // 21
    /^ *-? *[0-9a-l]+ *$/i, // 22
    /^ *-? *[0-9a-m]+ *$/i, // 23
    /^ *-? *[0-9a-n]+ *$/i, // 24
    /^ *-? *[0-9a-o]+ *$/i, // 25
    /^ *-? *[0-9a-p]+ *$/i, // 26
    /^ *-? *[0-9a-q]+ *$/i, // 27
    /^ *-? *[0-9a-r]+ *$/i, // 28
    /^ *-? *[0-9a-s]+ *$/i, // 29
    /^ *-? *[0-9a-t]+ *$/i, // 30
    /^ *-? *[0-9a-u]+ *$/i, // 31
    /^ *-? *[0-9a-v]+ *$/i, // 32
    /^ *-? *[0-9a-w]+ *$/i, // 33
    /^ *-? *[0-9a-x]+ *$/i, // 34
    /^ *-? *[0-9a-y]+ *$/i, // 35
    /^ *-? *[0-9a-z]+ *$/i  // 36
];

(function(){
    /* XXX do not convert to $p['float_int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value['__number__']) {
                case 0x01:
                    value = value > 0 ? Math['floor'](value) : Math['ceil'](value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value['valueOf']();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this['__number__'] != 0x02) {
            // Some statement seems to be needed for chromium
            // for windows...
            // LOOK HERE
            // Remove do/while statement and get 'Maximum call stack size exceeded'
            do { return new $int(value, radix); } while (0);
            //return new $int(value, radix);
        }
        if (value['__number__']) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value['valueOf']();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value['match']($radix_regex[radix]) === null) {
                value = value['lstrip']();
                v = NaN;
            } else {
                value = value['$$replace'](' ', '');
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this['__v'] = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int['__init__'] = function () {};
    $int['__number__'] = 0x02;
    $int['__v'] = 0;
    $int['__name__'] = 'int';
    $int['prototype'] = $int;
    $int['__class__'] = $int;

    $int['toExponential'] = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this['__v']['toExponential']() : this['__v']['toExponential'](fractionDigits);
    };

    $int['toFixed'] = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this['__v']['toFixed']() : this['__v']['toFixed'](digits);
    };

    $int['toLocaleString'] = function () {
        return this['__v']['toLocaleString']();
    };

    $int['toPrecision'] = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this['__v']['toPrecision']() : this['__v']['toPrecision'](precision);
    };

    $int['toString'] = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this['__v']['toString']() : this['__v']['toString'](radix);
    };

    $int['valueOf'] = function () {
        return this['__v']['valueOf']();
    };

    $int['__str__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        if (this['__number__'] == 0x02) return this['__v']['toString']();
        return this['toString']();
    };

    $int['__repr__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        if (this['__number__'] == 0x02) return this['__v']['toString']();
        return this['toString']();
    };

    $int['__nonzero__'] = function () {
        return this['__v'] != 0;
    };

    $int['__cmp__'] = function (y) {
        return this['__v'] < y? -1 : (this['__v'] == y ? 0 : 1);
    };

    $int['__hash__'] = function () {
        return this['__v'];
    };

    $int['__invert__'] = function () {
        return new $int(~this['__v']);
    };

    $int['__lshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y < 32) {
            var v = this['__v'] << y;
            if (v > this['__v']) {
                return new $int(v);
            }
        }
        return new $p['float_int'](this['__v'])['__lshift__'](y);
    };

    $int['__rlshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] < 32) {
            var v = y << this['__v'];
            if (v > this['__v']) {
                return new $int(v);
            }
        }
        return new $p['float_int'](y)['__lshift__'](this['__v']);
    };

    $int['__rshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] >> y);
    };

    $int['__rrshift__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y >> this['__v']);
    };

    $int['__and__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] & y);
    };

    $int['__rand__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y & this['__v']);
    };

    $int['__xor__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] ^ y);
    };

    $int['__rxor__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y ^ this['__v']);
    };

    $int['__or__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(this['__v'] | y);
    };

    $int['__ror__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        return new $int(y | this['__v']);
    };

    $int['__oct__'] = function () {
        return '0x'+this['__v']['toString'](8);
    };

    $int['__hex__'] = function () {
        return '0x'+this['__v']['toString'](16);
    };

    $int['__pos__'] = function () {
        return this;
    };

    $int['__neg__'] = function () {
        return new $int(-this['__v']);
    };

    $int['__abs__'] = function () {
        if (this['__v'] >= 0) return this;
        return new $int(-this['__v']);
    };

    $int['__add__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this['__v'])['__add__'](new $p['float_int'](y));
    };

    $int['__radd__'] = $int['__add__'];

    $int['__sub__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this['__v'])['__sub__'](new $p['float_int'](y));
    };

    $int['__rsub__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = y -this['__v'];
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](y)['__sub__'](new $p['float_int'](this['__v']));
    };

    $int['__floordiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math['floor'](this['__v'] / y));
    };

    $int['__rfloordiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math['floor'](y / this['__v']));
    };

    $int['__div__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this['__v'] / y);
    };

    $int['__rdiv__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this['__v']);
    };

    $int['__mul__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = this['__v'] * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this['__v'])['__mul__'](new $p['float_int'](y));
    };

    $int['__rmul__'] = $int['__mul__'];

    $int['__mod__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this['__v'] % y);
    };

    $int['__rmod__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        if (this['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this['__v']);
    };

    $int['__pow__'] = function (y) {
        if (y['__number__'] != 0x02) return $p['NotImplemented'];
        y = y['__v'];
        var v = Math['pow'](this['__v'], y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this['__v'])['__pow__'](new $p['float_int'](y));
    };
})();


(function(){

    var $log2 = Math['log'](2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v['ob_size'] < 0 ? -v['ob_size']:v['ob_size'];
        var i = j;
        while (i > 0 && v['ob_digit'][i-1] == 0) {
            i--;
        }
        if (i != j) {
            v['ob_size'] = v['ob_size'] < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv['ob_size'] < 0) {
            i = -vv['ob_size'];
            neg = true;
        } else if (vv['ob_size'] > 0) {
            i = vv['ob_size'];
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv['ob_digit'][i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv['ob_digit'][i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a['ob_digit'][i] * n;
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z['ob_digit'][i] = carry;
        z['ob_size'] = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin['length']) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math['floor'](rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var z = new $long(0);

        prem[0] = inplace_divrem1(z['ob_digit'], a['ob_digit'], 0, 0, size, n)[0];
        z['ob_size'] = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0"['charCodeAt'](0);
        var c_a = "a"['charCodeAt'](0);
        base = base['valueOf']();

        if (aa['ob_size'] == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa['ob_size'] < 0) {
                sign = '-';
                size_a = -aa['ob_size'];
            } else {
                size_a = aa['ob_size'];
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math['floor'](i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa['ob_digit'][i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit['charAt'](cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str['join']("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;

                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa['ob_digit']['slice'](0);
                pin = aa['ob_digit'];
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math['floor'](rem / base);
                            str[--p] = $cdigit['charAt'](rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str['slice'](p)['join']("");
            }
            text = text['lstrip']('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa['ob_size'] ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a['ob_digit'][size_a-1] < b['ob_digit'][size_b-1])) {
                // |a| < |b|
                pdiv['ob_size'] = 0;
                prem['ob_digit'] = a['ob_digit']['slice'](0);
                prem['ob_size'] = a['ob_size'];
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem['ob_digit'] = [0];
                prem['ob_size'] = 1;
                z = divrem1(a, b['ob_digit'][0], prem['ob_digit']);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv['ob_size'] = 0;
        } else {
            pdiv['ob_digit'] = z['ob_digit']['slice'](0);
            pdiv['ob_size'] = z['ob_size'];
        }
        if ((a['ob_size'] < 0) != (b['ob_size'] < 0))
                pdiv['ob_size'] = -(pdiv['ob_size']);
        if (a['ob_size'] < 0 && prem['ob_size'] != 0)
                prem['ob_size'] = -prem['ob_size'];
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1['ob_size'] < 0 ? -w1['ob_size'] : w1['ob_size'];
        var d = Math['floor'](PyLong_BASE / (w1['ob_digit'][size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v['ob_size'] < 0 ? -v['ob_size'] : v['ob_size'];
        k = size_v - size_w;
        a = new $long(0);
        a['ob_size'] = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v['ob_digit'][j];
            var carry = 0;
            var q, i;

            if (vj == w['ob_digit'][size_w-1])
                q = PyLong_MASK;
            else
                q = Math['floor'](((vj << PyLong_SHIFT) + v['ob_digit'][j-1]) /
                        w['ob_digit'][size_w-1]);

            while (w['ob_digit'][size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v['ob_digit'][j-1]
                        - q*w['ob_digit'][size_w-1]
                                                ) << PyLong_SHIFT)
                    + v['ob_digit'][j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w['ob_digit'][i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v['ob_digit'][i+k] - z
                        + (zz << PyLong_SHIFT);
                v['ob_digit'][i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v['ob_digit'][i+k];
                v['ob_digit'][i+k] = 0;
            }

            if (carry == 0)
                a['ob_digit'][k] = q;
            else {
                a['ob_digit'][k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v['ob_digit'][i+k] + w['ob_digit'][i];
                    v['ob_digit'][i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem['ob_digit'] = i['ob_digit']['slice'](0);
        prem['ob_size'] = i['ob_size'];
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a['ob_digit'][i] + b['ob_digit'][i];
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a['ob_digit'][i];
                z['ob_digit'][i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z['ob_digit'][i] = carry;
        z['ob_size'] = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a['ob_digit'][i] == b['ob_digit'][i])
                ;
            if (i < 0)
                return z;
            if (a['ob_digit'][i] < b['ob_digit'][i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a['ob_digit'][i] - b['ob_digit'][i] - borrow;
                z['ob_digit'][i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a['ob_digit'][i] - borrow;
                z['ob_digit'][i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z['ob_size'] = i;
        if (sign < 0)
            z['ob_size'] = -(z['ob_size']);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        var size_b = b['ob_size'] < 0 ? -b['ob_size'] : b['ob_size'];
        var z = new $long(0);
        var i, s;

        z['ob_size'] = size_a + size_b;
        for (i = 0; i < z['ob_size']; i++) {
            z['ob_digit'][i] = 0;
        }
        if (size_a == size_b && array_eq(a['ob_digit'], b['ob_digit'], size_a)) {
            // Efficient squaring per HAC, Algorithm 14['16']:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a['ob_digit'][i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z['ob_digit'][pz] + f * f;
                z['ob_digit'][pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z['ob_digit'][pz] + a['ob_digit'][pa++] * f;
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z['ob_digit'][pz];
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z['ob_digit'][pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a['ob_digit'][i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z['ob_digit'][pz] + b['ob_digit'][pb++] * f;
                    z['ob_digit'][pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z['ob_digit'][pz] += carry & PyLong_MASK;
                }
            }
        }
        z['ob_size'] = z['ob_digit']['length'];
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div,
            mod = $l_divmod_mod;

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod['ob_size'] < 0 && w['ob_size'] > 0) ||
            (mod['ob_size'] > 0 && w['ob_size'] < 0)) {
                mod = mod['__add__'](w);
                div = div['__sub__']($const_long_1);
        }
        if (pdiv !== null) {
            pdiv['ob_digit'] = div['ob_digit']['slice'](0);
            pdiv['ob_size'] = div['ob_size'];
        }
        if (pmod !== null) {
            pmod['ob_digit'] = mod['ob_digit']['slice'](0);
            pmod['ob_size'] = mod['ob_size'];
        }
        return 0;
    }



    /* XXX do not convert to $p['float_int'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix['valueOf']() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value['__number__']) {
                case 0x01:
                    value = value > 0 ? Math['floor'](value) : Math['ceil'](value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this['__number__'] != 0x04) return new $long(value, radix);

        v = value;
        this['ob_size'] = 0;
        this['ob_digit'] = new Array();
        if (v['__number__']) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v['__number__'] == 0x04) {
                var size = v['ob_size'] < 0 ? -v['ob_size']:v['ob_size'];
                for (var i = 0; i < size; i++) {
                    this['ob_digit'][i] = v['ob_digit'][i];
                }
                this['ob_size'] = v['ob_size'];
                return this;
            }
            if (v['__number__'] == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v['valueOf']();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this['ob_digit'][ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this['ob_size'] = neg ? -ndig : ndig;
                return this;
            }
            if (v['__number__'] == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this['ob_digit'][0] = 0;
                    this['ob_size'] = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math['log'](v)/$log2;
                    expo = (expo < 0 ? Math['ceil'](expo):Math['floor'](expo)) + 1;
                    frac = v / Math['pow'](2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math['floor']((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math['pow'](2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math['floor'](frac);
                    this['ob_digit'][i] = bits;
                    frac -= bits;
                    frac = frac * Math['pow'](2.0, PyLong_SHIFT);
                }
                this['ob_size'] = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m['value']) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value['lstrip']();
            var i = 0;
            var neg = false;

            switch (text['charAt'](0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text['slice'](1)['lstrip']();
            }

            if (!radix) {
                if (text == '0' || text['charAt'](0) != '0') {
                    radix = 10;
                } else {
                    switch (text['charAt'](1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text['charAt'](0) == '0' && text['length'] > 1) {
                switch (text['charAt'](1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text['slice'](2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text['slice'](2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text['slice'](2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text['charCodeAt'](p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this['ob_size'] = n = Math['floor'](n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this['ob_digit'][i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text['charCodeAt'](p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this['ob_digit'][pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this['ob_digit'][pdigit++] = accum;
                }
                while (pdigit < n) {
                    this['ob_digit'][pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math['log'](radix) / Math['log'](PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text['charCodeAt'](scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this['ob_digit'][i] = 0;
                }
                this['ob_size'] = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text['charCodeAt'](str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text['charCodeAt'](str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this['ob_size'];
                    for (; pz < pzstop; ++pz) {
                        c += this['ob_digit'][pz] * convmult;
                        this['ob_digit'][pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this['ob_size'] < size_z) {
                            this['ob_digit'][pz] = c;
                            this['ob_size']++;
                        } else {
                            this['ob_digit'][this['ob_size']] = c;
                        }
                    }
                }
            }
            text = text['slice'](nchars);
            if (neg) this['ob_size'] = -this['ob_size'];
            if (text['charAt'](0) == 'l' || text['charAt'](0) == 'L') text = text['slice'](1);
            text = text['lstrip']();
            if (text['length'] === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long['__init__'] = function () {};
    $long['__number__'] = 0x04;
    $long['__name__'] = 'long';
    $long['prototype'] = $long;
    $long['__class__'] = $long;
    $long['ob_size'] = 0;

    $long['toExponential'] = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this['__v']['toExponential']() : this['__v']['toExponential'](fractionDigits);
    };

    $long['toFixed'] = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this['__v']['toFixed']() : this['__v']['toFixed'](digits);
    };

    $long['toLocaleString'] = function () {
        return this['__v']['toLocaleString']();
    };

    $long['toPrecision'] = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this['__v']['toPrecision']() : this['__v']['toPrecision'](precision);
    };

    $long['toString'] = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long['valueOf'] = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math['pow'](2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long['__str__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        return Format(this, 10, false, false);
    };

    $long['__repr__'] = function () {
        if (typeof this == 'function') return "<type '" + this['__name__'] + "'>";
        return Format(this, 10, true, false);
    };

    $long['__nonzero__'] = function () {
        return this['ob_size'] != 0;
    };

    $long['__cmp__'] = function (b) {
        var sign;

        if (this['ob_size'] != b['ob_size']) {
            if (this['ob_size'] < b['ob_size']) return -1;
            return 1;
        }
        var i = this['ob_size'] < 0 ? - this['ob_size'] : this['ob_size'];
        while (--i >= 0 && this['ob_digit'][i] == b['ob_digit'][i])
            ;
        if (i < 0) return 0;
        if (this['ob_digit'][i] < b['ob_digit'][i]) {
            if (this['ob_size'] < 0) return 1;
            return -1;
        }
        if (this['ob_size'] < 0) return -1;
        return 1;
    };

    $long['__hash__'] = function () {
        var s = this['__str__']();
        var v = this['valueOf']();
        if (v['toString']() == s) {
            return v;
        }
        return s;
    };

    $long['__invert__'] = function () {
        var x = this['__add__']($const_long_1);
        x['ob_size'] = -x['ob_size'];
        return x;
    };

    $long['__neg__'] = function () {
        var x = new $long(0);
        x['ob_digit'] = this['ob_digit']['slice'](0);
        x['ob_size'] = -this['ob_size'];
        return x;
    };

    $long['__abs__'] = function () {
        if (this['ob_size'] >= 0) return this;
        var x = new $long(0);
        x['ob_digit'] = this['ob_digit']['slice'](0);
        x['ob_size'] = -x['ob_size'];
        return x;
    };

    $long['__lshift'] = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize,
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math['floor'](y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a['ob_size'] < 0 ? -a['ob_size'] : a['ob_size'];
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z['ob_size'] = a['ob_size'] < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z['ob_digit'][i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a['ob_digit'][j] << remshift;
            z['ob_digit'][i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z['ob_digit'][newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long['__lshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__lshift'](y);
                break;
            case 0x02:
                return this['__lshift'](y['__v']);
            case 0x04:
                y = y['valueOf']();
                return this['__lshift'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rlshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__lshift'](this['valueOf']());
            case 0x04:
                return y['__lshift'](this['valueOf']());
        }
        return $p['NotImplemented'];
    };

    $long['__rshift'] = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y['__number__'] != 0x01) {
            y = y['valueOf']();
        } else {
            if (y != Math['floor'](y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this['ob_size'];
        if (this['ob_size'] < 0) {
            size = -size;
            a = this['__add__']($const_long_1);
            a['ob_size'] = -a['ob_size'];
        }

        wordshift = Math['floor'](y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z['ob_size'] = a['ob_size'] < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z['ob_digit'][i] = (a['ob_digit'][j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z['ob_digit'][i] |=
                      (a['ob_digit'][j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this['ob_size'] < 0) {
            z = z['__add__']($const_long_1);
            z['ob_size'] = -z['ob_size'];
        }
        return z;
    };

    $long['__rshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__rshift'](y);
                break;
            case 0x02:
                return this['__rshift'](y['__v']);
            case 0x04:
                y = y['valueOf']();
                return this['__rshift'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rrshift__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__rshift'](this['valueOf']());
            case 0x04:
                return y['__rshift'](this['valueOf']());
        }
        return $p['NotImplemented'];
    };

    $long['__and'] = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__and__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__and'](new $long(y));
                break;
            case 0x02:
                return this['__and'](new $long(y['__v']));
            case 0x04:
                return this['__and'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rand__'] = $long['__and__'];

    $long['__xor'] = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__xor__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__xor'](new $long(y));
                break;
            case 0x02:
                return this['__xor'](new $long(y['__v']));
            case 0x04:
                return this['__xor'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rxor__'] = $long['__xor__'];

    $long['__or'] = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a['ob_size'] < 0) {
            a = a['__invert__']();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b['ob_size'] < 0) {
            b = b['__invert__']();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a['ob_size'];
        size_b = b['ob_size'];
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z['ob_size'] = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a['ob_digit'][i] : 0) ^ maska;
                    digb = (i < size_b ? b['ob_digit'][i] : 0) ^ maskb;
                    z['ob_digit'][i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z['__invert__']();
    };

    $long['__or__'] = function (y) {
        switch (y['__number__']) {
            case 0x01:
                if (y == Math['floor'](y)) return this['__or'](new $long(y));
                break;
            case 0x02:
                return this['__or'](new $long(y['__v']));
            case 0x04:
                return this['__or'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__ror__'] = $long['__or__'];

    $long['__oct__'] = function () {
        return Format(this, 8, true, false);
    };

    $long['__hex__'] = function () {
        return Format(this, 16, true, false);
    };

    $long['__add'] = function (b) {
        var a = this, z;
        if (a['ob_size'] < 0) {
            if (b['ob_size'] < 0) {
                z = x_add(a, b);
                z['ob_size'] = -(z['ob_size']);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b['ob_size'] < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long['__add__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__add'](new $long(y['__v']));
            case 0x04:
                return this['__add'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__radd__'] = $long['__add__'];

    $long['__sub'] = function (b) {
        var a = this, z;
        if (a['ob_size'] < 0) {
            z = b['ob_size'] < 0 ? x_sub(a, b) : x_add(a, b);
            z['ob_size'] = -(z['ob_size']);
        }
        else {
            z = b['ob_size'] < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long['__sub__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__sub'](new $long(y['__v']));
            case 0x04:
                return this['__sub'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rsub__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__sub'](this);
            case 0x04:
                return y['__sub'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__mul'] = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this['ob_size'] ^ b['ob_size']) < 0)
            z['ob_size'] = -(z['ob_size']);
        return z;
    };

    $long['__mul__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__mul'](new $long(y['__v']));
            case 0x04:
                return this['__mul'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rmul__'] = $long['__mul__'];

    $long['__div'] = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long['__div__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__sub'](new $long(y['__v']));
            case 0x04:
                return this['__sub'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rdiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__div'](this);
            case 0x04:
                return y['__div'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__mod'] = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long['__mod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__mod'](new $long(y['__v']));
            case 0x04:
                return this['__mod'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__mod'](this);
            case 0x04:
                return y['__mod'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__divmod'] = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long['__divmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__divmod'](new $long(y['__v']));
            case 0x04:
                return this['__divmod'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rdivmod__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__divmod'](this);
            case 0x04:
                return y['__divmod'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__floordiv'] = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long['__floordiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return this['__floordiv'](new $long(y['__v']));
            case 0x04:
                return this['__floordiv'](y);
        }
        return $p['NotImplemented'];
    };

    $long['__rfloordiv__'] = function (y) {
        switch (y['__number__']) {
            case 0x02:
                return (new $long(y['__v']))['__floordiv'](this);
            case 0x04:
                return y['__floordiv'](this);
        }
        return $p['NotImplemented'];
    };

    $long['__pow'] = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w['__number__'] == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x['__number__'] == 0x04 ? x : new $long(x);
        }

        if (b['ob_size'] < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math['pow'](v['valueOf'](), w['valueOf']());
        }

        if (c !== null) {
            if (c['ob_size'] == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c['ob_size'] < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp['ob_digit'] = c['ob_digit']['slice'](0);
                temp['ob_size'] = -c['ob_size'];
                c = temp;
            }
            if (c['ob_size'] == 1 && c['ob_digit'][0] == 1) {
                return $const_long_0;
            }
            if (a['ob_size'] < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b['ob_size'] <= FIVEARY_CUTOFF) {
            for (i = b['ob_size'] - 1; i >= 0; --i) {
                bi = b['ob_digit'][i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z['__mul'](z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z['ob_digit'] = temp['ob_digit']['slice'](0);
                        z['ob_size'] = temp['ob_size'];
                    }
                    if (bi & j) {
                        z = z['__mul'](a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1]['__mul'](a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i]['ob_digit'] = temp['ob_digit']['slice'](0);
                    table[i]['ob_size'] = temp['ob_size'];
                }
            }
            for (i = b['ob_size'] - 1; i >= 0; --i) {
                bi = b['ob_digit'][i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z['__mul'](z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                    if (index) {
                        z = z['__mul'](table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z['ob_digit'] = temp['ob_digit']['slice'](0);
                            z['ob_size'] = temp['ob_size'];
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput &&
            (z['ob_size'] != 0) && (c['ob_size'] != 0)) {
            z = z['__sub__'](c);
        }
        return z;
    };

    $long['__pow__'] = function (y, z) {
        switch (y['__number__']) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this['__pow'](new $long(y['__v']), null);
                switch (z['__number']) {
                    case 0x02:
                        return this['__pow'](new $long(y['__v']), new $long(z));
                    case 0x04:
                        return this['__pow'](new $long(y['__v']), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this['__pow'](y, null);
                switch (z['__number']) {
                    case 0x02:
                        return this['__pow'](y, new $long(z));
                    case 0x04:
                        return this['__pow'](y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m['attrib_remap'] = ['Function', 'apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'native', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m['var_remap'] = ['Function', 'arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'native', 'new', 'return', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];

	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '54b59de8af01e70d56009c1081ba6f33';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
            self['__array'] = data['slice']();
            return null;
        }
        if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                self['__array'] = data['__array']['slice']();
                return null;
            }
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                self['__array'] = iter['__array']['slice']();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self['__array'] = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter7_nextval,i,h,$iter7_array,$iter7_idx,$iter7_iter,$iter7_type;
			h = $p['list'](['$tuple']);
			$iter7_iter = self;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				i = $iter7_nextval['$nextval'];
				h['append']($p['str']($p['hash'](i)));
			}
			return '$'['join'](h);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['tuple'])))) {
				return 1;
			}

        var n1 = self['__array']['length'],
            n2 = l['__array']['length'],
            a1 = self['__array'],
            a2 = l['__array'],
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return $m['tuple'](self['__array']['slice'](lower));
        return $m['tuple'](self['__array']['slice'](lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index['valueOf']();
        if (typeof index == 'boolean') index = $p['float_int'](index);
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self['__array'][index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__array']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments['callee']['__args__'][4][1];


        var start = _start['valueOf']();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX['__array']['indexOf'](valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self['__array']['length'] >>> 0;

            start = (start < 0)
                    ? Math['ceil'](start)
                    : Math['floor'](start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX['__array'] && */
                    $m['cmp'](self['__array'][start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self['__array']);

        var i = 0;
        var l = self['__array'];
        return {
            'next': function() {
                if (i >= l['length']) {
                    throw $m['StopIteration']();
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$attr56;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$attr57;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self['__array']['length']; i++) {
            s += $p['repr'](self['__array'][i]);
            if (i < self['__array']['length'] - 1)
                s += ", ";
        }
        if (self['__array']['length'] == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr59,$attr60;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr61,$attr62,$sub3,$sub4;
			if ($p['bool'](!$p['bool'](n !== null && n['__number__'] && (n['__number__'] != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub3=n,$sub4=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple']['__str__'] = $m['tuple']['__repr__'];
$m['tuple']['toString'] = $m['tuple']['__str__'];
	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '95839fbdc04d833dbde234a70f075efb';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return "<type 'NotImplementedType'>";
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this['__array'] = l;
    this['i'] = -1;
};
$iter_array['prototype']['next'] = function (noStop) {
    if (++this['i'] == this['__array']['length']) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this['__array'][this['i']];
};
$iter_array['prototype']['__iter__'] = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this['___array'] = l;
    this['i'] = l['length'];
};
$reversed_iter_array['prototype']['next'] = function (noStop) {
    if (--this['i'] == -1) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this['___array'][this['i']];
};
$reversed_iter_array['prototype']['__iter__'] = function ( ) {
    return this;
};
//$reversed_iter_array['prototype']['$genfunc'] = $reversed_iter_array['prototype']['next'];
var $enumerate_array = function (l) {
    this['array'] = l;
    this['i'] = -1;
    this['tuple'] = 
	$m['tuple']($p['list']([0, '']));

    this['tl'] = this['tuple']['__array'];
};
$enumerate_array['prototype']['next'] = function (noStop, reuseTuple) {
    if (++this['i'] == this['array']['length']) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    this['tl'][1] = this['array'][this['i']];
    if (this['tl'][0]['__number__'] == 0x01) {
        this['tl'][0] = this['i'];
    } else {
        this['tl'][0] = new $p['float_int'](this['i']);
    }
    return reuseTuple === true ? this['tuple'] : $m['tuple'](this['tl']);
};
$enumerate_array['prototype']['__iter__'] = function ( ) {
    return this;
};
$enumerate_array['prototype']['$genfunc'] = $enumerate_array['prototype']['next'];

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'afd4f857132fd951d288a165e24f34e5';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
            self['__array'] = data['slice']();
            return null;
        }
        if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                self['__array'] = data['__array']['slice']();
                return null;
            }
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                self['__array'] = iter['__array']['slice']();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self['__array'] = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self['__array'][self['__array']['length']] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
        } else if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
            } else {
                var iter = data['__iter__']();
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                data = [];
                var item, i = 0;
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self['__array'];
        var j = self['__array']['length'];
        var n = data['length'], i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self['index'](value);
        if (index<0) {
            throw $m['ValueError']("list['remove'](x): x not in list");
        }
        self['__array']['splice'](index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments['callee']['__args__'][4][1];


        var start = _start['valueOf']();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX['__array']['indexOf'](valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self['__array']['length'] >>> 0;

            start = (start < 0)
                    ? Math['ceil'](start)
                    : Math['floor'](start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX['__array'] && */
                    $m['cmp'](self['__array'][start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self['__array']; self['__array']=a['slice'](0, index)['concat'](value, a['slice'](index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}
			if (typeof _index == 'undefined') _index=arguments['callee']['__args__'][3][1];


        var index = _index['valueOf']();
        if (index<0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            if (self['__array']['length'] == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self['__array'][index];
        self['__array']['splice'](index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['list'])))) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self['__array']['length'],
            n2 = l['__array']['length'],
            a1 = self['__array'],
            a2 = l['__array'],
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null)
            return $m['list'](self['__array']['slice'](lower));
        return $m['list'](self['__array']['slice'](lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self['__array']['length'];
        }
        if (!lower) lower = 0;
        if (n > 0) self['__array']['splice'](lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index['valueOf']();
        if (typeof index == 'boolean') index = $p['float_int'](index);
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list index out of range");
        }
        return self['__array'][index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
			}


        var index = _index['valueOf']();
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self['__array'][index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index['valueOf']();
        if (index < 0) index += self['__array']['length'];
        if (index < 0 || index >= self['__array']['length']) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self['__array']['splice'](index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__array']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self['__array']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self['__array']['reverse']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments['callee']['__args__'][3][1];
			if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
			if (typeof reverse == 'undefined') reverse=arguments['callee']['__args__'][5][1];
			var thisSort1,thisSort2,$and18,$and19,thisSort3;
			if ($p['bool']((cmp === null))) {
				cmp = $m['__cmp'];
			}
			if ($p['bool'](($p['bool']($and18=key)?reverse:$and18))) {
				thisSort1 = function(a, b) {

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1['__name__'] = 'thisSort1';

				thisSort1['__bind_type__'] = 0;
				thisSort1['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ($p['bool'](key)) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2['__name__'] = 'thisSort2';

				thisSort2['__bind_type__'] = 0;
				thisSort2['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ($p['bool'](reverse)) {
				thisSort3 = function(a, b) {

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3['__name__'] = 'thisSort3';

				thisSort3['__bind_type__'] = 0;
				thisSort3['__args__'] = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr63;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr65,$attr66;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self['__array']['length']; i++) {
            s += $p['repr'](self['__array'][i]);
            if (i < self['__array']['length'] - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr67,$attr68;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr69,$attr70,$sub6,$sub5;
			if ($p['bool'](!$p['bool'](n !== null && n['__number__'] && (n['__number__'] != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub5=n,$sub6=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list']['__str__'] = $m['list']['__repr__'];
$m['list']['toString'] = $m['list']['__str__'];
	$m['slice'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '24e8c86df7ad558306c3a67bdb4942bb';
		$method = $pyjs__bind_method2('__init__', function(a1) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				a1 = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}

			if ($p['bool'](args)) {
				self['start'] = a1;
				self['stop'] = args['__getitem__'](0);
				if ($p['bool'](($m['cmp']($p['len'](args), 1) == 1))) {
					self['step'] = args['__getitem__'](1);
				}
				else {
					self['step'] = null;
				}
			}
			else {
				self['stop'] = a1;
				self['start'] = null;
				self['step'] = null;
			}
			return null;
		}
	, 1, ['args',null,['self'],['a1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(x) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $attr82,$attr80,$attr81,$attr79,$attr78,$attr77,$attr76,$attr74,$attr73,$attr72,$attr71,r,$attr75;
			r = $m['cmp'](self['start'], x['start']);
			if ($p['bool'](!$m['op_eq'](r, 0))) {
				return r;
			}
			r = $m['cmp'](self['stop'], x['stop']);
			if ($p['bool'](!$m['op_eq'](r, 0))) {
				return r;
			}
			r = $m['cmp'](self['step'], x['step']);
			return r;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('indices', function(length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}
			var $add44,defstart,$sub16,$and23,$and22,$and21,$and20,$attr83,$attr86,$attr87,$attr84,$attr85,$add46,$attr89,$add43,$add42,$add41,$add40,start,$sub9,$sub8,$sub17,$sub7,$or5,$or4,$sub18,$sub13,$sub12,$sub11,$sub10,stop,$add38,$sub15,$sub14,step,$div2,$div3,$div1,$div4,$attr94,defstop,$add39,$attr91,$attr90,$attr93,$attr92,slicelength,$add37,$add45,$attr88;
			step = 0;
			start = 0;
			stop = 0;
			if ($p['bool']((self['step'] === null))) {
				step = 1;
			}
			else {
				step = self['step'];
				if ($p['bool']($m['op_eq'](step, 0))) {
					throw ($m['ValueError']('slice step cannot be zero'));
				}
			}
			if ($p['bool'](($m['cmp'](step, 0) == -1))) {
				defstart = $m['__op_sub']($sub7=length,$sub8=1);
				defstop = (typeof ($usub5=1)=='number'?
					-$usub5:
					$m['op_usub']($usub5));
			}
			else {
				defstart = 0;
				defstop = length;
			}
			if ($p['bool']((self['start'] === null))) {
				start = defstart;
			}
			else {
				start = self['start'];
				if ($p['bool'](($m['cmp'](start, 0) == -1))) {
					start = $m['__op_add']($add37=start,$add38=length);
				}
				if ($p['bool'](($m['cmp'](start, 0) == -1))) {
					if ($p['bool'](($m['cmp'](step, 0) == -1))) {
						start = (typeof ($usub6=1)=='number'?
							-$usub6:
							$m['op_usub']($usub6));
					}
					else {
						start = 0;
					}
				}
				if ($p['bool'](((($m['cmp'](start, length))|1) == 1))) {
					if ($p['bool'](($m['cmp'](step, 0) == -1))) {
						start = $m['__op_sub']($sub9=length,$sub10=1);
					}
					else {
						start = length;
					}
				}
			}
			if ($p['bool']((self['stop'] === null))) {
				stop = defstop;
			}
			else {
				stop = self['stop'];
				if ($p['bool'](($m['cmp'](stop, 0) == -1))) {
					stop = $m['__op_add']($add39=stop,$add40=length);
				}
				if ($p['bool'](($m['cmp'](stop, 0) == -1))) {
					if ($p['bool'](($m['cmp'](step, 0) == -1))) {
						stop = (typeof ($usub7=1)=='number'?
							-$usub7:
							$m['op_usub']($usub7));
					}
					else {
						stop = 0;
					}
				}
				if ($p['bool'](((($m['cmp'](stop, length))|1) == 1))) {
					if ($p['bool'](($m['cmp'](step, 0) == -1))) {
						stop = $m['__op_sub']($sub11=length,$sub12=1);
					}
					else {
						stop = length;
					}
				}
			}
			if ($p['bool'](($p['bool']($or4=($p['bool']($and20=($m['cmp'](step, 0) == -1))?((($m['cmp'](stop, start))|1) == 1):$and20))?$or4:($p['bool']($and22=($m['cmp'](step, 0) == 1))?((($m['cmp'](start, stop))|1) == 1):$and22)))) {
				slicelength = 0;
			}
			else if ($p['bool'](($m['cmp'](step, 0) == -1))) {
				slicelength = $m['__op_add']($add43=(typeof ($div1=$m['__op_add']($add41=$m['__op_sub']($sub13=stop,$sub14=start),$add42=1))==typeof ($div2=step) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$m['op_div']($div1,$div2)),$add44=1);
			}
			else {
				slicelength = $m['__op_add']($add45=(typeof ($div3=$m['__op_sub']($sub17=$m['__op_sub']($sub15=stop,$sub16=start),$sub18=1))==typeof ($div4=step) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$m['op_div']($div3,$div4)),$add46=1);
			}
			return $p['tuple']([start, stop, step]);
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['indices'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr95,$attr97,$attr96,$attr99,$attr98,$attr100;
			return $p['sprintf']('slice(%s, %s, %s)', $p['tuple']([self['start'], self['stop'], self['step']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('slice', $bases, $cls_definition);
	})();
$m['slice']['__str__'] = $m['slice']['__repr__'];
$m['slice']['toString'] = $m['slice']['__str__'];
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'fe1d4ba078372f997b7ef4574acc48ef';
		$method = $pyjs__bind_method2('__init__', function(seq) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments['callee']['__args__'][3][1];
			var init;
			self['__object'] = {};
			init = function(_data) {


        var item, i, n, sKey;
        var data = _data;
        //selfXXX['__object'] = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data['constructor'] === Array) {
        } else if (typeof data['__object'] == 'object') {
            data = data['__object'];
            for (sKey in data) {
                self['__object'][sKey] = data[sKey]['slice']();
            }
            return null;
        } else if (typeof data['__iter__'] == 'function') {
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
            } else {
                var iter = data['__iter__']();
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                data = [];
                var item, i = 0;
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key['substring'](0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key['substring'](2);
                    if (var_remap['indexOf'](_key) < 0) {
                        _key = key;
                    }
                }
                self['__object']['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data['length']) == 0) {
            return null;
        }
        i = 0;
        if (data[0]['constructor'] === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
                self['__object'][sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0]['__array'] != 'undefined') {
            while (i < n) {
                item = data[i++]['__array'];
                key = item[0];
                sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
                self['__object'][sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i]['__getitem__'](0);
            sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
            self['__object'][sKey] = [key, data[i]['__getitem__'](1)];
        }
        return null;
        
			};
			init['__name__'] = 'init';

			init['__bind_type__'] = 0;
			init['__args__'] = [null,null,['_data']];
			init(seq);
			if ($p['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        self['__object'][sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        var value=self['__object'][sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self['__object']){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](other, $m['dict'])))) {
				throw ($m['TypeError']("dict.__cmp__(x,y) requires y to be a 'dict'"));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys['sort']();
        other_sKeys['sort']();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self['__object']) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        delete self['__object'][sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=$m['list'](),
            selfObj = self['__object'],
            __array = keys['__array'],
            i = 0;
        for (var sKey in self['__object']) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments['callee']['__args__'][3][1];
			var $iter8_idx,d,i,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;
			d = $p['dict']([]);
			$iter8_iter = iterable;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				i = $iter8_nextval['$nextval'];
				d['__setitem__'](i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self['__object']) {
            values['__array'][i++] = self['__object'][key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self['__object']) {
          var kv = self['__object'][key];
          items['__array'][i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self['__object']) {
            keys[i++] = self['__object'][key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self['__object']) {
            keys[i++] = self['__object'][key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? (self['__object'][sKey]=[key, default_value])[1] : self['__object'][sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments['callee']['__args__'][4][1];


        var empty = true;
        for (var sKey in self['__object']) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key['$H'] != 'undefined'?key['$H']:((typeof key=='string'||key['__number__'])?'$'+key:$p['__hash'](key))));
        return typeof self['__object'][sKey] == 'undefined' ? default_value : self['__object'][sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter12_type,$iter10_nextval,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,$iter10_idx,$iter11_iter,$iter12_array,$iter11_array,$iter11_nextval,d,k,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,v,$iter10_type,$iter12_idx,$iter9_array;
			if ($p['bool'](args)) {
				if ($p['bool'](($m['cmp']($p['len'](args), 1) == 1))) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', $p['len'](args))));
				}
				d = args['__getitem__'](0);
				if ($p['bool']($p['hasattr'](d, 'iteritems'))) {
					$iter9_iter = d['iteritems']();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						self['__setitem__'](k, v);
					}
				}
				else if ($p['bool']($p['hasattr'](d, 'keys'))) {
					$iter10_iter = d;
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						k = $iter10_nextval['$nextval'];
						self['__setitem__'](k, d['__getitem__'](k));
					}
				}
				else {
					$iter11_iter = d;
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter11_nextval['$nextval'], 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						self['__setitem__'](k, v);
					}
				}
			}
			if ($p['bool'](kwargs)) {
				$iter12_iter = kwargs['iteritems']();
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					self['__setitem__'](k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var $add48,$add47,res,$pyjs_try_err;
			if ($p['bool'](($m['cmp']($p['len'](d), 1) == 1))) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', $m['__op_add']($add47=1,$add48=$p['len'](d)))));
			}
			try {
				res = self['__getitem__'](k);
				self['__delitem__'](k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ($p['bool'](d)) {
						return d['__getitem__'](0);
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,v,k,$iter13_array;
			$iter13_iter = self['iteritems']();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter13_nextval['$nextval'], 2, null);
				k = $tupleassign4[0];
				v = $tupleassign4[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr102,$attr101;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__object'] = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr104,$attr103;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var keys = new Array();
        for (var key in self['__object'])
            keys['push'](key);

        var s = "{";
        for (var i=0; i<keys['length']; i++) {
            var v = self['__object'][keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys['length']-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict']['has_key'] = $m['dict']['__contains__'];
$m['dict']['iterkeys'] = $m['dict']['__iter__'];
$m['dict']['__str__'] = $m['dict']['__repr__'];
	$m['__empty_dict'] = function() {


    var dict__init__ = $m['dict']['__init__'];
    var d;
    $m['dict']['__init__'] = function() {
        this['__object'] = {};
    };
    d = $m['dict']();
    d['__init__'] = $m['dict']['__init__'] = dict__init__;
    return d;

	};
	$m['__empty_dict']['__name__'] = '__empty_dict';

	$m['__empty_dict']['__bind_type__'] = 0;
	$m['__empty_dict']['__args__'] = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5d0ade069ada2db5e825a6618d40edd8';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments['callee']['__args__'][3][1];

			if ($p['bool']((_data === null))) {
var data = [];
			}
			else {
var data = _data;
			}
			if ($p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(_data))) {

            self['__object'] = {};
            var selfObj = self['__object'],
                dataObj = data['__object'];
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item,
            i,
            n,
            selfObj = self['__object'] = {};

        if (data['constructor'] === Array) {
        // data is already an Array.
        // We deal with the Array of data after this if block.
          }

          // We may have some other set-like thing with __object
          else if (typeof data['__object'] == 'object') {
            var dataObj = data['__object'];
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          }

          // Something with an __iter__ method
          else if (typeof data['__iter__'] == 'function') {

            // It has an __array member to iterate over. Make that our data.
            if (typeof data['__array'] == 'object') {
                data = data['__array'];
                }
            else {
                // Several ways to deal with the __iter__ method
                var iter = data['__iter__']();
                // iter has an __array member that's an array. Use that.
                if (typeof iter['__array'] == 'object') {
                    data = iter['__array'];
                }
                var data = [];
                var item, i = 0;
                // iter has a ['$genfunc']
                if (typeof iter['$genfunc'] == 'function') {
                    while (typeof (item=iter['next'](true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter['next']();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m['data'])) && $m['isIteratable']($m['data']))
            {
            for (var item in $m['data']) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data['length']) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return 2;
			}

        var selfObj = self['__object'],
            otherObj = other['__object'],
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), 1))) {

            var hashes = new Array(),
                obj = self['__object'],
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes['sort']();
            var h = hashes['join']("|");
            return (h in obj);

			}
return $p['__hash'](value) in self['__object'];
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array(),
            i = 0,
            obj = self['__object'];
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self['__object']) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr106,$attr105;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self['__object'],
            s = self['__name__'] + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values['join'](", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self['__object'][$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self['__object'] = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'];
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), 1))) {
				value = $p['frozenset'](value);
			}
delete self['__object'][$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return self['__cmp__'](other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return (self['__cmp__'](other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self['__object']) {
            var value = self['__object'][sVal];
            delete self['__object'][sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val;
			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m['isSet']:isSet)(value), 1))) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self['__object'])) {
            throw $m['KeyError'](value);
        }
        delete self['__object'][h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self['__object'] = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = $m['set']();
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new_set['__object'],
            selfObj = self['__object'],
            otherObj = other['__object'];
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m['isSet']:isSet)(data)))) {
				data = $p['frozenset'](data);
			}

        var selfObj = self['__object'],
            dataObj = data['__object'];
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5910a5cd7bacd5088201b54cec5bd418';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments['callee']['__args__'][3][1];

			if ($p['bool']((!('__object' in self)))) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self['__object'], i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes['sort']();
        return (self['$H'] = hashes['join']("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'e8658b013cc299100bc07c2eb7e48d17';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments['callee']['__args__'][3][1];
			if (typeof fset == 'undefined') fset=arguments['callee']['__args__'][4][1];
			if (typeof fdel == 'undefined') fdel=arguments['callee']['__args__'][5][1];
			if (typeof doc == 'undefined') doc=arguments['callee']['__args__'][6][1];
			var $or6,$or7,$attr107,$attr108;
			self['fget'] = fget;
			self['fset'] = fset;
			self['fdel'] = fdel;
			if ($p['bool'](($p['bool']($or6=!$p['bool']((doc === null)))?$or6:!$p['bool']($p['hasattr'](fget, '__doc__'))))) {
				self['__doc__'] = doc;
			}
			else {
				self['__doc__'] = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments['callee']['__args__'][4][1];
			var $attr110,$attr109;
			if ($p['bool']((obj === null))) {
				return self;
			}
			if ($p['bool']((self['fget'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr111,$attr112;
			if ($p['bool']((self['fset'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't set attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr113,$attr114;
			if ($p['bool']((self['fdel'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't delete attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self['fset'] = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self['fdel'] = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func['apply'](null,$pyjs_array_slice['call'](arguments));
    };
    fnwrap['__name__'] = func['__name__'];
    fnwrap['__args__'] = func['__args__'];
    fnwrap['__bind_type__'] = 3;
    return fnwrap;
    
	};
	$m['staticmethod']['__name__'] = 'staticmethod';

	$m['staticmethod']['__bind_type__'] = 0;
	$m['staticmethod']['__args__'] = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments['callee']['__args__'][3][1];
		var i;
		if ($p['bool'](!$p['bool']((typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(object_or_type, typ)))) {
			i = (typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_['__mro__'] == 'undefined') {
        type_ = type_['__class__'];
    }
    var fn = $pyjs_type('super', type_['__mro__']['slice'](1), {});
    fn['__new__'] = fn['__mro__'][1]['__new__'];
    fn['__init__'] = fn['__mro__'][1]['__init__'];
    if (object_or_type['__is_instance__'] === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name]['apply'](object_or_type,
                                   $pyjs_array_slice['call'](arguments));
        };
        fnwrap['__name__'] = name;
        fnwrap['__args__'] = obj[name]['__args__'];
        fnwrap['__bind_type__'] = obj[name]['__bind_type__'];
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj['__is_instance__'] = object_or_type['__is_instance__'];
    return obj;
    
	};
	$m['$$super']['__name__'] = 'super';

	$m['$$super']['__bind_type__'] = 0;
	$m['$$super']['__args__'] = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][3][1];
		if (typeof step == 'undefined') step=arguments['callee']['__args__'][4][1];
		var $attr119,$attr118,rval,$attr115,$attr117,$attr116,$attr120,$assign1,nval;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		if ($p['bool'](!$p['bool'](start!== null && start['__number__'] && (start['__number__'] != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop['__number__'] && (stop['__number__'] != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step['__number__'] && (step['__number__'] != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math['ceil'](nstep) : Math['floor'](nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $m['StopIteration']();
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this['next'](true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this['toString']() + "'";
        }
    };
    x['__str__'] = x['toString'];
    return x;
    
	};
	$m['xrange']['__name__'] = 'xrange';

	$m['xrange']['__bind_type__'] = 0;
	$m['xrange']['__args__'] = [null,null,['start'],['stop', null],['step', 1]];
	$m['get_len_of_range'] = function(lo, hi, step) {
		var n;
		n = 0;

    var diff = hi - lo - 1;
    n = Math['floor'](diff / step) + 1;
    
		return n;
	};
	$m['get_len_of_range']['__name__'] = 'get_len_of_range';

	$m['get_len_of_range']['__bind_type__'] = 0;
	$m['get_len_of_range']['__args__'] = [null,null,['lo'],['hi'],['step']];
	$m['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][3][1];
		if (typeof step == 'undefined') step=arguments['callee']['__args__'][4][1];
		var r,$attr121,items,$attr122,ilow,$attr123,$attr124,$attr125,$attr126,n;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		ilow = start;
		if ($p['bool'](!$p['bool'](start!== null && start['__number__'] && (start['__number__'] != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop['__number__'] && (stop['__number__'] != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step['__number__'] && (step['__number__'] != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		if ($p['bool']($m['op_eq'](step, 0))) {
			throw ($m['ValueError']('range() step argument must not be zero'));
		}
		if ($p['bool'](($m['cmp'](step, 0) == 1))) {
			n = $m['get_len_of_range'](ilow, stop, step);
		}
		else {
			n = $m['get_len_of_range'](stop, ilow, (typeof ($usub8=step)=='number'?
				-$usub8:
				$m['op_usub']($usub8)));
		}
		r = null;
		items = new Array();

    for (var i = 0; i < n; i++) {
    
		items['push'](ilow);

        ilow += step;
    }
    r = $m['list'](items);
    
		return r;
	};
	$m['range']['__name__'] = 'range';

	$m['range']['__bind_type__'] = 0;
	$m['range']['__args__'] = [null,null,['start'],['stop', null],['step', 1]];
	$m['__getslice'] = function(object, lower, upper) {


    if (object=== null) {
        return null;
    }
    if (typeof object['__getslice__'] == 'function') {
        return object['__getslice__'](lower, upper);
    }
    if (object['slice'] == 'function')
        return object['slice'](lower, upper);

    return null;
    
	};
	$m['__getslice']['__name__'] = '__getslice';

	$m['__getslice']['__bind_type__'] = 0;
	$m['__getslice']['__args__'] = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {


    if (typeof object['__delslice__'] == 'function') {
        return object['__delslice__'](lower, upper);
    }
    if (object['__getslice__'] == 'function'
      && object['__delitem__'] == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object['__delitem__'](i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice']['__name__'] = '__delslice';

	$m['__delslice']['__bind_type__'] = 0;
	$m['__delslice']['__args__'] = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {


    if (typeof object['__setslice__'] == 'function') {
        return object['__setslice__'](lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice']['__name__'] = '__setslice';

	$m['__setslice']['__bind_type__'] = 0;
	$m['__setslice']['__args__'] = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2c6b74ef2791d2d19a17da3ca230eb36';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if (text['__is_instance__'] === false) {
            return $m['object']['__str__'](text);
        }
        if ($p['hasattr'](text,'__str__')) {
            return text['__str__']();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		var $and25,$and24;
		if ($p['bool'](($p['bool']($and24=typeof x== 'string')?($p['len'](x) === 1):$and24))) {
			return x['charCodeAt'](0);
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord']['__name__'] = 'ord';

	$m['ord']['__bind_type__'] = 0;
	$m['ord']['__args__'] = [null,null,['x']];
	$m['chr'] = function(x) {


        return String['fromCharCode'](x);
    
	};
	$m['chr']['__name__'] = 'chr';

	$m['chr']['__bind_type__'] = 0;
	$m['chr']['__args__'] = [null,null,['x']];
	$m['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype']['__name__'] = 'is_basetype';

	$m['is_basetype']['__bind_type__'] = 0;
	$m['is_basetype']['__args__'] = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {


        if (x!== null && typeof x['__is_instance__'] == 'boolean') {
            var src = x['__name__'];
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype']['__name__'] = 'get_pyjs_classtype';

	$m['get_pyjs_classtype']['__bind_type__'] = 0;
	$m['get_pyjs_classtype']['__args__'] = [null,null,['x']];
	$m['repr'] = function(x) {


       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x['toString']();

       if (t == "string") {
           if (x['indexOf']("'") == -1)
               return "'" + x+ "'";
           if (x['indexOf']('"') == -1)
               return '"' + x+ '"';
           var s = x['$$replace'](new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ($p['bool']($p['hasattr'](x, '__repr__'))) {
			if ($p['bool']($p['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x['toString']() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x['toString']() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor['$$replace'](new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr']['__name__'] = 'repr';

	$m['repr']['__bind_type__'] = 0;
	$m['repr']['__args__'] = [null,null,['x']];
	$m['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null)
        return v;
    else if (typeof object['__array'] != 'undefined')
        v = object['__array']['length'];
    else if (typeof object['__len__'] == 'function')
        v = object['__len__']();
    else if (typeof object['length'] != 'undefined')
        v = object['length'];
    else throw $m['TypeError']("object has no len()");
    if (v['__number__'] & 0x06) return v;
    
		return v;
	};
	$m['len']['__name__'] = 'len';

	$m['len']['__bind_type__'] = 0;
	$m['len']['__args__'] = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		var $iter14_array,$iter14_type,ci,$iter14_iter,$iter14_idx,$iter14_nextval;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo['__name__']) {
        case 'float':
            return typeof object_== 'number' && object_['__number__'] == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_['__number__']) {
                if (object_['__number__'] == 0x02) {
                    return true;
                }
                if (isFinite(object_) &&
                    Math['ceil'](object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_['__number__'] == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ($p['bool']($p['_isinstance'](classinfo, $m['tuple']))) {
			if ($p['bool']($p['_isinstance'](object_, $m['tuple']))) {
				return true;
			}
			$iter14_iter = classinfo;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				ci = $iter14_nextval['$nextval'];
				if ($p['bool']($m['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance']['__name__'] = 'isinstance';

	$m['isinstance']['__bind_type__'] = 0;
	$m['isinstance']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {


    if (   object_['__is_instance__'] !== true
        || classinfo['__is_instance__'] === null) {
        return false;
    }
    var __mro__ = object_['__mro__'];
    var n = __mro__['length'];
    if (classinfo['__is_instance__'] === false) {
        while (--n >= 0) {
            if (object_['__mro__'][n] === classinfo['prototype']) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_['__mro__'][n] === classinfo['__class__']) return true;
    }
    return false;
    
	};
	$m['_isinstance']['__name__'] = '_isinstance';

	$m['_isinstance']['__bind_type__'] = 0;
	$m['_isinstance']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		var ci,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,$iter15_iter;
		if ($p['bool']( typeof class_ == 'undefined' || class_ === null || class_['__is_instance__'] !== false )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ($p['bool']($m['isinstance'](classinfo, $m['tuple']))) {
			$iter15_iter = classinfo;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				ci = $iter15_nextval['$nextval'];
				if ($p['bool']($m['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if ($p['bool']( typeof classinfo == 'undefined' || classinfo['__is_instance__'] !== false )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m['_issubtype']:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass']['__name__'] = 'issubclass';

	$m['issubclass']['__bind_type__'] = 0;
	$m['issubclass']['__args__'] = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {


    if (   object_['__is_instance__'] === null
        || classinfo['__is_instance__'] === null) {
        return false;
    }
    var __mro__ = object_['__mro__'];
    var n = __mro__['length'];
    if (classinfo['__is_instance__'] === false) {
        while (--n >= 0) {
            if (object_['__mro__'][n] === classinfo['prototype']) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_['__mro__'][n] === classinfo['__class__']) return true;
    }
    return false;
    
	};
	$m['_issubtype']['__name__'] = '_issubtype';

	$m['_issubtype']['__bind_type__'] = 0;
	$m['_issubtype']['__args__'] = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {

 		return null;
	};
	$m['__getattr_check']['__name__'] = '__getattr_check';

	$m['__getattr_check']['__bind_type__'] = 0;
	$m['__getattr_check']['__args__'] = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments['callee']['__args__'][4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments['length'] != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = attrib_remap['indexOf'](name) < 0 ? name:
                        '$$'+name;
    if (typeof obj[mapped_name] == 'undefined') {
        if (arguments['length'] != 3) {
            if (obj['__is_instance__'] === true &&
                    typeof obj['__getattr__'] == 'function') {
                return obj['__getattr__'](name);
            }
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method['__get__'] == 'function') {
        if (obj['__is_instance__']) {
            return method['__get__'](obj, obj['__class__']);
        }
        return method['__get__'](null, obj['__class__']);
    }
    if (   typeof method != 'function'
        || typeof method['__is_instance__'] != 'undefined'
        || obj['__is_instance__'] !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method['apply'](obj,$pyjs_array_slice['call'](arguments));
    };
    fnwrap['__name__'] = name;
    fnwrap['__args__'] = obj[mapped_name]['__args__'];
    fnwrap['__class__'] = obj['__class__'];
    fnwrap['__doc__'] = method['__doc__'] || '';
    fnwrap['__bind_type__'] = obj[mapped_name]['__bind_type__'];
    if (typeof obj[mapped_name]['__is_instance__'] != 'undefined') {
        fnwrap['__is_instance__'] = obj[mapped_name]['__is_instance__'];
    } else {
        fnwrap['__is_instance__'] = false;
    }
    return fnwrap;
    
	};
	$m['getattr']['__name__'] = 'getattr';

	$m['getattr']['__bind_type__'] = 0;
	$m['getattr']['__args__'] = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {


    if (typeof obj['__delete__'] == 'function') {
        obj['__delete__'](obj);
    } else {
        // NOTE(arjun): Deleted this case to fix strict mode violation. I
        // don't know what this is, but it seems insane.
        throw 'Undefined case (added by Arjun)';
        // delete obj;
    }
    
	};
	$m['_del']['__name__'] = '_del';

	$m['_del']['__bind_type__'] = 0;
	$m['_del']['__args__'] = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj['__is_instance__'] && typeof obj['__delattr__'] == 'function') {
        obj['__delattr__'](name);
        return;
    }
    var mapped_name = attrib_remap['indexOf'](name) < 0 ? name:
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined") ){
        if (obj['__is_instance__']
            && typeof obj[mapped_name]['__delete__'] == 'function') {
            obj[mapped_name]['__delete__'](obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj['__name__']+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr']['__name__'] = 'delattr';

	$m['delattr']['__bind_type__'] = 0;
	$m['delattr']['__args__'] = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj['__is_instance__'] && typeof obj['__setattr__'] == 'function') {
        obj['__setattr__'](name, value)
        return;
    }
    if (attrib_remap['indexOf'](name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj['__is_instance__']
        && obj[name] !== null
        && typeof obj[name]['__set__'] == 'function') {
        obj[name]['__set__'](obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr']['__name__'] = 'setattr';

	$m['setattr']['__bind_type__'] = 0;
	$m['setattr']['__args__'] = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (attrib_remap['indexOf'](name) > 0) {
        return typeof obj['$$'+name] != 'undefined';
    }
    return typeof obj[name] != 'undefined';
    
	};
	$m['hasattr']['__name__'] = 'hasattr';

	$m['hasattr']['__bind_type__'] = 0;
	$m['hasattr']['__args__'] = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) {
        if (property['substring'](0,2) == '$$') {
            // handle back mapping of name
            properties['append'](property['substring'](2));
        } else if (attrib_remap['indexOf'](property) < 0) {
            properties['append'](property);
        }
    }
    return properties;
    
	};
	$m['dir']['__name__'] = 'dir';

	$m['dir']['__bind_type__'] = 0;
	$m['dir']['__args__'] = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments['callee']['__args__'][4][1];
		var $iter16_array,$iter17_nextval,$iter17_array,$iter17_iter,$iter16_type,items,$iter16_idx,item,$iter17_type,$iter16_nextval,$iter16_iter,$iter17_idx;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter16_iter = sequence;
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				item = $iter16_nextval['$nextval'];
				if ($p['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter17_iter = sequence;
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				item = $iter17_nextval['$nextval'];
				if ($p['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter']['__name__'] = 'filter';

	$m['filter']['__bind_type__'] = 0;
	$m['filter']['__args__'] = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments['callee']['__args__'][4][1];
		var $iter18_type,$iter18_iter,$iter19_idx,$iter18_array,items,$iter19_nextval,$iter19_array,$iter19_iter,item,$iter18_idx,$iter19_type,$iter18_nextval;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter18_iter = sequence;
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				item = $iter18_nextval['$nextval'];
				items['append'](method(item));
			}
		}
		else {
			$iter19_iter = sequence;
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				item = $iter19_nextval['$nextval'];
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map']['__name__'] = 'map';

	$m['map']['__bind_type__'] = 0;
	$m['map']['__args__'] = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments['callee']['__args__'][4][1];
		var $iter20_iter,$iter20_nextval,$iter20_type,$iter20_idx,emtpy,$pyjs_try_err,value,$iter20_array;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter20_iter = iterable;
		$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
		while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
			value = $iter20_nextval['$nextval'];
			emtpy = false;
			if ($p['bool'](typeof initializer== 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ($p['bool']((typeof empty == "undefined"?$m['empty']:empty))) {
			if ($p['bool'](typeof initializer== 'undefined')) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce']['__name__'] = 'reduce';

	$m['reduce']['__bind_type__'] = 0;
	$m['reduce']['__args__'] = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		var iterables = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $add50,$add49,i,n,lst,$pyjs_try_err,t;
		n = $m['len'](iterables);
		if ($p['bool']($m['op_eq'](n, 0))) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter21_idx,$iter21_nextval,i,$collcomp4,$iter21_type,$iter21_iter,$iter21_array;
	$collcomp4 = $p['list']();
		$iter21_iter = iterables;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
			i = $iter21_nextval['$nextval'];
			$collcomp4['append']($p['iter'](i));
		}

	return $collcomp4;}();
		try {
			while ($p['bool'](true)) {
				t = $p['list']([]);
				i = 0;
				while ($p['bool'](($m['cmp'](i, n) == -1))) {
					t['append'](iterables['__getitem__'](i)['next']());
					i = $m['__op_add']($add49=i,$add50=1);
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $m['StopIteration']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['StopIteration'])) {
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip']['__name__'] = 'zip';

	$m['zip']['__bind_type__'] = 0;
	$m['zip']['__args__'] = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments['callee']['__args__'][3][1];
		if (typeof key == 'undefined') key=arguments['callee']['__args__'][4][1];
		if (typeof reverse == 'undefined') reverse=arguments['callee']['__args__'][5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted']['__name__'] = 'sorted';

	$m['sorted']['__bind_type__'] = 0;
	$m['sorted']['__args__'] = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		var l,$pyjs_try_err,v,$and27,$and26;
		if ($p['bool']($m['hasattr'](iterable, '__reversed__'))) {
			return iterable['__reversed__']();
		}
		if ($p['bool'](($p['bool']($and26=$m['hasattr'](iterable, '__len__'))?$m['hasattr'](iterable, '__getitem__'):$and26))) {
			if ($p['bool']($m['op_eq']($m['len'](iterable), 0))) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable['__getitem__'](0);
				return (typeof _reversed == "undefined"?$m['_reversed']:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed']['__name__'] = 'reversed';

	$m['reversed']['__bind_type__'] = 0;
	$m['reversed']['__args__'] = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		var $sub22,$sub19,$sub21,i,$sub20;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state['splice'](1, $generator_state['length']-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](($m['cmp'](i, 0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						i = $m['__op_sub']($sub21=i,$sub22=1);
						$yield_value = iterable['__getitem__'](i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed']['__name__'] = '_reversed';

	$m['_reversed']['__bind_type__'] = 0;
	$m['_reversed']['__args__'] = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {


    if (typeof seq['__enumerate__'] == 'function') {
        return seq['__enumerate__']();
    }

		return (typeof _enumerate == "undefined"?$m['_enumerate']:_enumerate)(seq);
	};
	$m['enumerate']['__name__'] = 'enumerate';

	$m['enumerate']['__bind_type__'] = 0;
	$m['enumerate']['__args__'] = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		var $add51,$add52,$add53,$add54,$iter22_array,$iter23_iter,$iter23_idx,$iter22_nextval,$iter22_idx,item,$iter23_nextval,nextIndex,$iter22_type,$iter23_type,$iter23_array,$iter22_iter;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter23_iter = sequence;
				$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						item = $iter23_nextval['$nextval'];
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = $m['__op_add']($add53=nextIndex,$add54=1);
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate']['__name__'] = '_enumerate';

	$m['_enumerate']['__bind_type__'] = 0;
	$m['_enumerate']['__args__'] = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments['callee']['__args__'][3][1];

		if ($p['bool']((sentinel === null))) {
			if ($p['bool']((typeof isIteratable == "undefined"?$m['isIteratable']:isIteratable)(iterable))) {
				return iterable['__iter__']();
			}
			if ($p['bool']($m['hasattr'](iterable, '__getitem__'))) {
				return (typeof _iter_getitem == "undefined"?$m['_iter_getitem']:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ($p['bool']((typeof isFunction == "undefined"?$m['isFunction']:isFunction)(iterable))) {
			return (typeof _iter_callable == "undefined"?$m['_iter_callable']:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter']['__name__'] = 'iter';

	$m['iter']['__bind_type__'] = 0;
	$m['iter']['__args__'] = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		var $add55,$add56,$add57,i,$add58,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state['splice'](2, $generator_state['length']-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||($p['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$yield_value = object['__getitem__'](i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = $m['__op_add']($add57=i,$add58=1);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['IndexError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem']['__name__'] = '_iter_getitem';

	$m['_iter_getitem']['__bind_type__'] = 0;
	$m['_iter_getitem']['__args__'] = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state['splice'](1, $generator_state['length']-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ($p['bool']($m['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable']['__name__'] = '_iter_callable';

	$m['_iter_callable']['__bind_type__'] = 0;
	$m['_iter_callable']['__args__'] = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $iter24_idx,minValue,item,$iter24_array,$iter24_type,$iter24_iter,$iter24_nextval;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence['__getitem__'](0);
		}
		minValue = null;
		$iter24_iter = sequence;
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
			item = $iter24_nextval['$nextval'];
			if ($p['bool']((minValue === null))) {
				minValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, minValue), (typeof ($usub9=1)=='number'?
				-$usub9:
				$m['op_usub']($usub9))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min']['__name__'] = 'min';

	$m['min']['__bind_type__'] = 0;
	$m['min']['__args__'] = ['sequence',null];
	$m['max'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

		var $iter25_nextval,$iter25_array,maxValue,$iter25_iter,item,$iter25_idx,$iter25_type;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence['__getitem__'](0);
		}
		maxValue = null;
		$iter25_iter = sequence;
		$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
		while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
			item = $iter25_nextval['$nextval'];
			if ($p['bool']((maxValue === null))) {
				maxValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, maxValue), 1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max']['__name__'] = 'max';

	$m['max']['__bind_type__'] = 0;
	$m['max']['__args__'] = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments['callee']['__args__'][3][1];
		var i,$iter26_type,$iter26_nextval,$add59,$iter26_idx,$iter26_array,$iter26_iter,$add60;
		if ($p['bool']((start === null))) {
			start = 0;
		}
		$iter26_iter = iterable;
		$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
		while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
			i = $iter26_nextval['$nextval'];
			start = $m['__op_add']($add59=start,$add60=i);
		}
		return start;
	};
	$m['sum']['__name__'] = 'sum';

	$m['sum']['__bind_type__'] = 0;
	$m['sum']['__args__'] = [null,null,['iterable'],['start', null]];
	$m['complex'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'd20759f5cde02ecde599fb331b8cfe8a';
		$method = $pyjs__bind_method2('__init__', function(real, imag) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				real = arguments[1];
				imag = arguments[2];
			}

			self['real'] = $m['float'](real);
			self['imag'] = $m['float'](imag);
			return null;
		}
	, 1, [null,null,['self'],['real'],['imag']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr134,$attr133,$attr132,$attr131,$attr130,$attr127,$attr128,$attr129;
			if ($p['bool'](self['real'])) {
				return $p['sprintf']('(%s+%sj)', $p['tuple']([self['real'], self['imag']]));
			}
			else {
				return $p['sprintf']('%sj', self['imag']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				b = arguments[1];
			}
			var $attr142,$add64,$attr140,$add61,$attr144,$add63,$add62,$add66,$add65,$attr145,$attr141,$attr137,$attr136,$attr135,$attr146,$attr139,$attr138,$attr143;
			if ($p['bool']($m['isinstance'](b, $m['complex']))) {
				return $m['complex']($m['__op_add']($add61=self['real'],$add62=b['real']), $m['__op_add']($add63=self['imag'],$add64=b['imag']));
			}
			else if ($p['bool'](typeof b['__number__'] != 'undefined')) {
				return $m['complex']($m['__op_add']($add65=self['real'],$add66=b), self['imag']);
			}
			else {
				throw ($m['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([self, b]))));
			}
			return null;
		}
	, 1, [null,null,['self'],['b']]);
		$cls_definition['__add__'] = $method;
		var $bases = new Array(pyjslib['object']);
		return $pyjs_type('complex', $bases, $cls_definition);
	})();
$m['complex']['__radd__'] = $m['complex']['__add__'];
$m['complex']['__str__'] = $m['complex']['__repr__'];
$m['complex']['toString'] = $m['complex']['__repr__'];
$p['next_hash_id'] = 0;
	if ($p['bool'](typeof 'a'[0] == 'undefined')) {
$p['__hash'] = function(obj) {
        if (obj === null) return null;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        if (typeof obj['nodeType'] != 'number') {
            try {
            obj['$H'] = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj['$H'] = ++$p['next_hash_id'];
        }
        if (typeof obj['setAttribute'] == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj['getAttribute']('$H')) {
            return $H;
        }
        obj['setAttribute']('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj['$H'] != 'undefined' && obj['__class__']['$H'] !== obj['$H']) return obj['$H'];
        if (typeof obj == 'string' || obj['__number__']) return '$'+obj;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        if (typeof obj['nodeType'] != 'number') {
            try {
            obj['$H'] = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj['$H'] = ++$p['next_hash_id'];
        }
        if (typeof obj['setAttribute'] == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj['getAttribute']('$H')) {
            return $H;
        }
        obj['setAttribute']('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        if (obj === null) return null;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        obj['$H'] = ++$p['next_hash_id'];
        return obj['$H'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj['$H'] != 'undefined' && obj['__class__']['$H'] !== obj['$H']) return obj['$H'];
        if (typeof obj == 'string' || obj['__number__']) return '$'+obj;
        switch (obj['constructor']) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj['__hash__'] == 'function') return obj['__hash__']();
        obj['$H'] = ++$p['next_hash_id'];
        return obj['$H'];
    };
        
	}
	$m['isObject'] = function(a) {


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject']['__name__'] = 'isObject';

	$m['isObject']['__bind_type__'] = 0;
	$m['isObject']['__args__'] = [null,null,['a']];
	$m['isFunction'] = function(a) {


    return typeof a== 'function';
    
	};
	$m['isFunction']['__name__'] = 'isFunction';

	$m['isFunction']['__bind_type__'] = 0;
	$m['isFunction']['__args__'] = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {


    return typeof a== 'string';
    
	};
	$m['isString']['__name__'] = 'isString';

	$m['isString']['__bind_type__'] = 0;
	$m['isString']['__args__'] = [null,null,['a']];
	$m['isNull'] = function(a) {


    return typeof a== 'object' && !a;
    
	};
	$m['isNull']['__name__'] = 'isNull';

	$m['isNull']['__bind_type__'] = 0;
	$m['isNull']['__args__'] = [null,null,['a']];
	$m['isArray'] = function(a) {


    return $m['isObject'](a) && a['constructor'] === Array;
    
	};
	$m['isArray']['__name__'] = 'isArray';

	$m['isArray']['__bind_type__'] = 0;
	$m['isArray']['__args__'] = [null,null,['a']];
	$m['isUndefined'] = function(a) {


    return typeof a== 'undefined';
    
	};
	$m['isUndefined']['__name__'] = 'isUndefined';

	$m['isUndefined']['__bind_type__'] = 0;
	$m['isUndefined']['__args__'] = [null,null,['a']];
	$m['isIteratable'] = function(a) {


    if (a=== null) return false;
    return typeof a['__iter__'] == 'function';
    
	};
	$m['isIteratable']['__name__'] = 'isIteratable';

	$m['isIteratable']['__bind_type__'] = 0;
	$m['isIteratable']['__args__'] = [null,null,['a']];
	$m['isNumber'] = function(a) {


    return a!== null && a['__number__'] &&
           (a['__number__'] != 0x01 || isFinite(a));
    
	};
	$m['isNumber']['__name__'] = 'isNumber';

	$m['isNumber']['__bind_type__'] = 0;
	$m['isNumber']['__args__'] = [null,null,['a']];
	$m['isInteger'] = function(a) {


    switch (a['__number__']) {
        case 0x01:
            if (a != Math['floor'](a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger']['__name__'] = 'isInteger';

	$m['isInteger']['__bind_type__'] = 0;
	$m['isInteger']['__args__'] = [null,null,['a']];
	$m['isSet'] = function(a) {


    if (a=== null) return false;
    if (typeof a['__object'] == 'undefined') return false;
    var a_mro = a['__mro__'];
    switch (a_mro[a_mro['length']-2]['__md5__']) {
        case $m['set']['__md5__']:
            return 1;
        case $m['frozenset']['__md5__']:
            return 2;
    }
    return false;

	};
	$m['isSet']['__name__'] = 'isSet';

	$m['isSet']['__bind_type__'] = 0;
	$m['isSet']['__args__'] = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		var $attr148,$attr147;
		if ($p['bool']($m['isArray'](x))) {

        var result = [];
        for(var k=0; k < x['length']; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result['push'](tv);
        }
        return result;
        
		}
		if ($p['bool']($m['isObject'](x))) {
			if ($p['bool']($m['getattr'](x, '__number__', null))) {
				return x['valueOf']();
			}
			else if ($p['bool']($m['isinstance'](x, $m['dict']))) {

            var o = x['getObject']();
            var result = {};
            for (var i in o) {
               result[o[i][0]['toString']()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ($p['bool']($m['isinstance'](x, $m['list']))) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ($p['bool']($m['hasattr'](x, '__class__'))) {
				return x;
			}
			else if ($p['bool']($m['isFunction'](x))) {
				return x;
			}
		}
		if ($p['bool']($m['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ($p['bool']($m['isString'](x))) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects']['__name__'] = 'toJSObjects';

	$m['toJSObjects']['__bind_type__'] = 0;
	$m['toJSObjects']['__args__'] = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {


    var re_exp = /(.*)([+-])(.*)/;
    var re_fmt = /([^%]*)%([(][^)]*[)])?([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;
    var arg0;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision['substr'](1));
        }
        if (flags['indexOf']('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String['fromCharCode'](parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp['exec'](String(param['toExponential'](precision)));
                if (subst[3]['length'] == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp['exec'](String(param['toExponential'](precision))['toUpperCase']());
                if (subst[3]['length'] == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param)['toFixed'](precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param)['toFixed'](precision))['toUpperCase']();
                break;
            case 'g':
                // FIXME: Issue 672 should return double digit exponent
                // probably can remove code in formatd after that
                if (precision === null && flags['indexOf']('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param['toExponential']() : param['toExponential']()['toPrecision'](precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param)['toPrecision'](precision));
                }
                break;
            case 'G':
                if (precision === null && flags['indexOf']('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param['toExponential']() : param['toExponential']()['toPrecision'](precision))['toUpperCase']();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param)['toPrecision'](precision))['toUpperCase']()['toUpperCase']();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['float_int'](param);
                subst = param['toString'](8);
                if (subst != '0' && flags['indexOf']('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['float_int'](param);
                subst = param['toString'](16);
                if (flags['indexOf']('#') >= 0) {
                    if (left_padding) {
                        subst = subst['rjust'](minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['float_int'](param);
                subst = param['toString'](16)['toUpperCase']();
                if (flags['indexOf']('#') >= 0) {
                    if (left_padding) {
                        subst = subst['rjust'](minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion['charCodeAt'](0))+") at index " + (strng['length'] - remainder['length'] - 1));
        }
        if (minlen && subst['length'] < minlen) {
            if (numeric && left_padding && flags['indexOf']('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst['rjust'](minlen, padchar) : subst['ljust'](minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, key, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_fmt['exec'](remainder);
            if (a === null) {
                __array[__array['length']] = remainder;
                break;
            }
            left = a[1]; key = a[2], flags = a[3];
            minlen = a[4]; precision = a[6]; conversion = a[7];
            remainder = a[8];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array['length']] = left;
            if (minlen == '*') {
                if (argidx == ++nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args['__getitem__'](argidx++);
                switch (minlen['__number__']) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math['floor'](minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (!key) {
                    if (argidx == ++nargs || nargs > args['__array']['length']) {
                        throw $m['TypeError']("not enough arguments for format string");
                    }
                    param = args['__getitem__'](argidx++);
                } else {
                    if (args['__array']['length'] != 1) {
                        throw $m['TypeError']("format requires a mapping");
                    }
                    argidx = 1;
                    key = key.substr(1, key.length-2);
                    param = arg0['__getitem__'](key);
                }
            }
            __array[__array['length']] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args['__md5__'] == $m['tuple']['__md5__'] ? 'tuple': (args['__md5__'] == $m['dict']['__md5__'] ? 'dict': 'Other'));
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    arg0 = args['__array'][0];
    sprintf_list(strng, args);
    if (argidx != args['__array']['length']) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result['join']("");

	};
	$m['sprintf']['__name__'] = 'sprintf';

	$m['sprintf']['__bind_type__'] = 0;
	$m['sprintf']['__args__'] = [null,null,['strng'],['args']];
	$m['__module_internals'] = $m['set']($p['list'](['__track_lines__']));
	$m['_globals'] = function(module) {
		var $iter27_nextval,d,$iter27_array,$iter27_idx,$iter27_iter,$iter27_type,name;
		d = $m['dict']();
		$iter27_iter = $m['dir'](module);
		$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
		while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
			name = $iter27_nextval['$nextval'];
			if ($p['bool'](!$p['bool']($m['__module_internals']['__contains__'](name)))) {
				d['__setitem__'](name, module[name]);
			}
		}
		return d;
	};
	$m['_globals']['__name__'] = '_globals';

	$m['_globals']['__bind_type__'] = 0;
	$m['_globals']['__args__'] = [null,null,['module']];
	$m['debugReport'] = function(msg) {


    $p['printFunc']([msg], true);
    
	};
	$m['debugReport']['__name__'] = 'debugReport';

	$m['debugReport']['__bind_type__'] = 0;
	$m['debugReport']['__args__'] = [null,null,['msg']];

function $printFunc(s) {
  console.log(s);
}


	$m['_print_to_console'] = function(s) {


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console']['__name__'] = '_print_to_console';

	$m['_print_to_console']['__bind_type__'] = 0;
	$m['_print_to_console']['__args__'] = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {


    var s = "";
    for(var i=0; i < objs['length']; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys']['stdout']['write'](s);
    
	};
	$m['printFunc']['__name__'] = 'printFunc';

	$m['printFunc']['__bind_type__'] = 0;
	$m['printFunc']['__args__'] = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments['callee']['__args__'][4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math['pow'](x, y);
		if ($p['bool']((z === null))) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow']['__name__'] = 'pow';

	$m['pow']['__bind_type__'] = 0;
	$m['pow']['__args__'] = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math['floor'](x) == x) {
            return '0x' + x['toString'](16);
        }
    } else {
        switch (x['__number__']) {
            case 0x02:
                return '0x' + x['__v']['toString'](16);
            case 0x04:
                return x['__hex__']();
        }
    }

		throw ($m['TypeError']("hex() argument can't be converted to hex"));
		return null;
	};
	$m['hex']['__name__'] = 'hex';

	$m['hex']['__bind_type__'] = 0;
	$m['hex']['__args__'] = [null,null,['x']];
	$m['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math['floor'](x) == x) {
            return x == 0 ? '0': '0' + x['toString'](8);
        }
    } else {
        switch (x['__number__']) {
            case 0x02:
                return x['__v'] == 0 ? '0': '0' + x['__v']['toString'](8);
            case 0x04:
                return x['__oct__']();
        }
    }

		throw ($m['TypeError']("oct() argument can't be converted to oct"));
		return null;
	};
	$m['oct']['__name__'] = 'oct';

	$m['oct']['__bind_type__'] = 0;
	$m['oct']['__args__'] = [null,null,['x']];
	$m['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];
		var r;
		n = $m['pow'](10, n);
		r = null;
r = Math['round'](n*x)/n;
		return $m['float'](r);
	};
	$m['round']['__name__'] = 'round';

	$m['round']['__bind_type__'] = 0;
	$m['round']['__args__'] = [null,null,['x'],['n', 0]];
	$m['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x['__number__'] << 8) | y['__number__']) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y['__v'] == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x / y['__v']);
                return $m['tuple']([f, x - f * y['__v']]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math['floor'](x['__v'] / y);
                return $m['tuple']([f, x['__v'] - f * y]);
            case 0x0202:
                if (y['__v'] == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math['floor'](x['__v'] / y['__v']);
                return $m['tuple']([new $p['float_int'](f), new $p['float_int'](x['__v'] - f * y['__v'])]);
            case 0x0204:
                return y['__rdivmod__'](new $p['float_int'](x['__v']));
            case 0x0402:
                return x['__divmod__'](new $p['float_int'](y['__v']));
            case 0x0404:
                return x['__divmod__'](y);
        }
        if (!x['__number__']) {
            if (   !y['__number__']
                && x['__mro__']['length'] > y['__mro__']['length']
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y['__divmod__'](x);
            if (typeof x['__divmod__'] == 'function') return x['__divmod__'](y);
        }
        if (!y['__number__'] && typeof y['__rdivmod__'] == 'function') return y['__rdivmod__'](x);
    }

		throw ($m['TypeError']($m['sprintf']("unsupported operand type(s) for divmod(): '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod']['__name__'] = 'divmod';

	$m['divmod']['__bind_type__'] = 0;
	$m['divmod']['__args__'] = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		var $iter28_array,$iter28_nextval,$iter28_idx,element,$iter28_iter,$iter28_type;
		$iter28_iter = iterable;
		$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
		while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
			element = $iter28_nextval['$nextval'];
			if ($p['bool'](!$p['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	$m['all']['__name__'] = 'all';

	$m['all']['__bind_type__'] = 0;
	$m['all']['__args__'] = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		var $iter29_type,$iter29_iter,element,$iter29_nextval,$iter29_idx,$iter29_array;
		$iter29_iter = iterable;
		$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
		while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
			element = $iter29_nextval['$nextval'];
			if ($p['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	$m['any']['__name__'] = 'any';

	$m['any']['__bind_type__'] = 0;
	$m['any']['__args__'] = [null,null,['iterable']];
	$m['StringBuilder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '620b5610687ac0254c025fd566da78e6';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['l'] = $p['list']([]);
			self['tp'] = $m['str'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('append', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}

			self['l']['append'](s);
			return null;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('append_slice', function(s, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
				start = arguments[2];
				end = arguments[3];
			}

			self['l']['append']($p['__getslice'](s, start, end));
			return null;
		}
	, 1, [null,null,['self'],['s'],['start'],['end']]);
		$cls_definition['append_slice'] = $method;
		$method = $pyjs__bind_method2('append_multiple_char', function(c, times) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
				times = arguments[2];
			}
			var $mul2,$mul1;
			self['l']['append']((typeof ($mul1=c)==typeof ($mul2=times) && typeof $mul1=='number'?
				$mul1*$mul2:
				$m['op_mul']($mul1,$mul2)));
			return null;
		}
	, 1, [null,null,['self'],['c'],['times']]);
		$cls_definition['append_multiple_char'] = $method;
		$method = $pyjs__bind_method2('build', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr149,$attr150;
			return self['tp']('')['join'](self['l']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['build'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringBuilder', $bases, $cls_definition);
	})();
	$m['_parse_int'] = function(s, start, end) {
		var $sub23,c,$add70,$sub24,i,$add69,$add67,$add68,$pyjs_try_err,result,msg,$mul4,$mul3;
		result = 0;
		i = start;
		while ($p['bool'](($m['cmp'](i, end) == -1))) {
			c = $m['ord'](s['__getitem__'](i));
			if ($p['bool']((($m['cmp']($m['ord']('0'), ($compare1 = c)) < 1)&&($m['cmp']($compare1, ($compare2 = $m['ord']('9'))) < 1)))) {
				try {
					result = (typeof ($mul3=result)==typeof ($mul4=10) && typeof $mul3=='number'?
						$mul3*$mul4:
						$m['op_mul']($mul3,$mul4));
					if ($p['bool'](($m['cmp'](result, 1000000000) == 1))) {
						throw ($m['OverflowError']);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['OverflowError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['OverflowError'])) {
						msg = 'too many decimal digits in format string';
						throw ($m['ValueError'](msg));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				result = $m['__op_add']($add67=result,$add68=$m['__op_sub']($sub23=c,$sub24=$m['ord']('0')));
			}
			else {
				break;
			}
			i = $m['__op_add']($add69=i,$add70=1);
		}
		if ($p['bool']($m['op_eq'](i, start))) {
			result = (typeof ($usub10=1)=='number'?
				-$usub10:
				$m['op_usub']($usub10));
		}
		return $p['tuple']([result, i]);
	};
	$m['_parse_int']['__name__'] = '_parse_int';

	$m['_parse_int']['__bind_type__'] = 0;
	$m['_parse_int']['__args__'] = [null,null,['s'],['start'],['end']];
	$m['TemplateFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '99d4cfa142843b6f836a504118f1e987';
		$cls_definition['ANS_INIT'] = 1;
		$cls_definition['ANS_AUTO'] = 2;
		$cls_definition['ANS_MANUAL'] = 3;
		$method = $pyjs__bind_method2('__init__', function(space, template) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				space = arguments[1];
				template = arguments[2];
			}

			self['space'] = space;
			self['empty'] = '';
			self['template'] = template;
			self['parser_list_w'] = null;
			return null;
		}
	, 1, [null,null,['self'],['space'],['template']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('build', function(args, kw) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				args = arguments[1];
				kw = arguments[2];
			}
			var $attr154,$attr151,$attr153,$attr152;
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([args, kw]), 2, null);
			self['args'] = $tupleassign5[0];
			self['kwargs'] = $tupleassign5[1];
			self['auto_numbering'] = 0;
			self['auto_numbering_state'] = self['ANS_INIT'];
			return self['_build_string'](0, $m['len'](self['template']), 2);
		}
	, 1, [null,null,['self'],['args'],['kw']]);
		$cls_definition['build'] = $method;
		$method = $pyjs__bind_method2('_build_string', function(start, end, level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
			}
			var $attr155,$attr156,$sub25,s,$sub26,out;
			out = $m['StringBuilder']();
			if ($p['bool'](!$p['bool'](level))) {
				throw ($m['ValueError']('Recursion depth exceeded'));
			}
			level = $m['__op_sub']($sub25=level,$sub26=1);
			s = self['template'];
			return self['_do_build_string'](start, end, level, out, s);
		}
	, 1, [null,null,['self'],['start'],['end'],['level']]);
		$cls_definition['_build_string'] = $method;
		$method = $pyjs__bind_method2('_do_build_string', function(start, end, level, out, s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
				out = arguments[4];
				s = arguments[5];
			}
			var field_start,rendered,$sub27,$add82,$sub28,$sub29,nested,$add79,recursive,last_literal,$add81,$sub30,$add80,$add77,$or9,$or8,$add74,$add76,markup_follows,c,$add75,$add72,$add73,i,$add71,$add78,at_end,$or11,$or10,$assign2;
			$assign2 = start;
			last_literal = $assign2;
			i = $assign2;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = s['__getitem__'](i);
				i = $m['__op_add']($add71=i,$add72=1);
				if ($p['bool'](($p['bool']($or8=$m['op_eq'](c, '{'))?$or8:$m['op_eq'](c, '}')))) {
					at_end = $m['op_eq'](i, end);
					markup_follows = true;
					if ($p['bool']($m['op_eq'](c, '}'))) {
						if ($p['bool'](($p['bool']($or10=at_end)?$or10:!$m['op_eq'](s['__getitem__'](i), '}')))) {
							throw ($m['ValueError']("Single '}'"));
						}
						i = $m['__op_add']($add73=i,$add74=1);
						markup_follows = false;
					}
					if ($p['bool']($m['op_eq'](c, '{'))) {
						if ($p['bool'](at_end)) {
							throw ($m['ValueError']("Single '{'"));
						}
						if ($p['bool']($m['op_eq'](s['__getitem__'](i), '{'))) {
							i = $m['__op_add']($add75=i,$add76=1);
							markup_follows = false;
						}
					}
					out['append_slice'](s, last_literal, $m['__op_sub']($sub27=i,$sub28=1));
					if ($p['bool'](!$p['bool'](markup_follows))) {
						last_literal = i;
						continue;
					}
					nested = 1;
					field_start = i;
					recursive = false;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = s['__getitem__'](i);
						if ($p['bool']($m['op_eq'](c, '{'))) {
							recursive = true;
							nested = $m['__op_add']($add77=nested,$add78=1);
						}
						else if ($p['bool']($m['op_eq'](c, '}'))) {
							nested = $m['__op_sub']($sub29=nested,$sub30=1);
							if ($p['bool'](!$p['bool'](nested))) {
								break;
							}
						}
						i = $m['__op_add']($add79=i,$add80=1);
					}
					if ($p['bool'](nested)) {
						throw ($m['ValueError']("Unmatched '{'"));
					}
					rendered = self['_render_field'](field_start, i, recursive, level);
					out['append'](rendered);
					i = $m['__op_add']($add81=i,$add82=1);
					last_literal = i;
				}
			}
			out['append_slice'](s, last_literal, end);
			return out['build']();
		}
	, 1, [null,null,['self'],['start'],['end'],['level'],['out'],['s']]);
		$cls_definition['_do_build_string'] = $method;
		$method = $pyjs__bind_method2('_parse_field', function(start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
			}
			var $add89,$add88,$add83,$add87,$add86,$add85,$add84,conversion,end_name,$add90,w_msg,c,$add92,$add91,$attr157,i,$attr158,s,$or13,$or12;
			s = self['template'];
			i = start;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = s['__getitem__'](i);
				if ($p['bool'](($p['bool']($or12=$m['op_eq'](c, ':'))?$or12:$m['op_eq'](c, '!')))) {
					end_name = i;
					if ($p['bool']($m['op_eq'](c, '!'))) {
						i = $m['__op_add']($add83=i,$add84=1);
						if ($p['bool']($m['op_eq'](i, end))) {
							w_msg = 'expected conversion';
							throw ($m['ValueError'](w_msg));
						}
						conversion = s['__getitem__'](i);
						i = $m['__op_add']($add85=i,$add86=1);
						if ($p['bool'](($m['cmp'](i, end) == -1))) {
							if ($p['bool'](!$m['op_eq'](s['__getitem__'](i), ':'))) {
								w_msg = "expected ':' after format specifier";
								throw ($m['ValueError'](w_msg));
							}
							i = $m['__op_add']($add87=i,$add88=1);
						}
					}
					else {
						conversion = null;
						i = $m['__op_add']($add89=i,$add90=1);
					}
					return $p['tuple']([$p['__getslice'](s, start, end_name), conversion, i]);
				}
				i = $m['__op_add']($add91=i,$add92=1);
			}
			return $p['tuple']([$p['__getslice'](s, start, end), null, end]);
		}
	, 1, [null,null,['self'],['start'],['end']]);
		$cls_definition['_parse_field'] = $method;
		$method = $pyjs__bind_method2('_get_argument', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $attr173,kwarg,$and29,$and28,arg_key,$attr177,index,end,$attr169,$attr164,$attr165,$attr167,$attr160,$attr161,$attr162,$attr163,$pyjs_try_err,use_numeric,msg,empty,w_msg,$add94,$add95,$add96,stop,$add93,$attr168,c,$attr178,i,$attr176,$attr175,$attr174,$attr159,$attr172,$attr171,$attr170,$or15,$or14,$or17,$or16,$attr166,w_arg;
			i = 0;
			end = $m['len'](name);
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool'](($p['bool']($or14=$m['op_eq'](c, '['))?$or14:$m['op_eq'](c, '.')))) {
					break;
				}
				i = $m['__op_add']($add93=i,$add94=1);
			}
			empty = !$p['bool'](i);
			if ($p['bool'](empty)) {
				index = (typeof ($usub11=1)=='number'?
					-$usub11:
					$m['op_usub']($usub11));
			}
			else {
				var $tupleassign6 = $p['__ass_unpack']($m['_parse_int'](name, 0, i), 2, null);
				index = $tupleassign6[0];
				stop = $tupleassign6[1];
				if ($p['bool'](!$m['op_eq'](stop, i))) {
					index = (typeof ($usub12=1)=='number'?
						-$usub12:
						$m['op_usub']($usub12));
				}
			}
			use_numeric = ($p['bool']($or16=empty)?$or16:!$m['op_eq'](index, (typeof ($usub13=1)=='number'?
				-$usub13:
				$m['op_usub']($usub13))));
			if ($p['bool'](($p['bool']($and28=$m['op_eq'](self['auto_numbering_state'], self['ANS_INIT']))?use_numeric:$and28))) {
				if ($p['bool'](empty)) {
					self['auto_numbering_state'] = self['ANS_AUTO'];
				}
				else {
					self['auto_numbering_state'] = self['ANS_MANUAL'];
				}
			}
			if ($p['bool'](use_numeric)) {
				if ($p['bool']($m['op_eq'](self['auto_numbering_state'], self['ANS_MANUAL']))) {
					if ($p['bool'](empty)) {
						msg = 'switching from manual to automatic numbering';
						throw ($m['ValueError'](msg));
					}
				}
				else if ($p['bool'](!$p['bool'](empty))) {
					msg = 'switching from automatic to manual numbering';
					throw ($m['ValueError'](msg));
				}
			}
			if ($p['bool'](empty)) {
				index = self['auto_numbering'];
				self['auto_numbering'] = $m['__op_add']($add95=self['auto_numbering'],$add96=1);
			}
			if ($p['bool']($m['op_eq'](index, (typeof ($usub14=1)=='number'?
				-$usub14:
				$m['op_usub']($usub14))))) {
				kwarg = $p['__getslice'](name, 0, i);
				arg_key = kwarg;
				try {
					w_arg = self['kwargs']['__getitem__'](arg_key);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['KeyError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['KeyError'])) {
						throw ($m['KeyError'](arg_key));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else {
				try {
					w_arg = self['args']['__getitem__'](index);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['IndexError']['__name__'])||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						w_msg = 'index out of range';
						throw ($m['IndexError'](w_msg));
					} else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
			return self['_resolve_lookups'](w_arg, name, i, end);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['_get_argument'] = $method;
		$method = $pyjs__bind_method2('_resolve_lookups', function(w_obj, name, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				name = arguments[2];
				start = arguments[3];
				end = arguments[4];
			}
			var got_bracket,$attr182,reached,$add99,index,w_attr,msg,w_item,$add101,$add100,$add103,$add102,$add98,$add104,$add106,$add97,w_msg,$attr180,$attr181,$and30,$and31,c,$attr179,i,$add105,$or19,$or18;
			i = start;
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool']($m['op_eq'](c, '.'))) {
					i = $m['__op_add']($add97=i,$add98=1);
					start = i;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = name['__getitem__'](i);
						if ($p['bool'](($p['bool']($or18=$m['op_eq'](c, '['))?$or18:$m['op_eq'](c, '.')))) {
							break;
						}
						i = $m['__op_add']($add99=i,$add100=1);
					}
					if ($p['bool']($m['op_eq'](start, i))) {
						w_msg = 'Empty attribute in format string';
						throw ($m['ValueError'](w_msg));
					}
					w_attr = $p['__getslice'](name, start, i);
					if ($p['bool']((w_obj !== null))) {
						w_obj = $m['getattr'](w_obj, w_attr);
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_True'], w_attr])));
					}
				}
				else if ($p['bool']($m['op_eq'](c, '['))) {
					got_bracket = false;
					i = $m['__op_add']($add101=i,$add102=1);
					start = i;
					while ($p['bool'](($m['cmp'](i, end) == -1))) {
						c = name['__getitem__'](i);
						if ($p['bool']($m['op_eq'](c, ']'))) {
							got_bracket = true;
							break;
						}
						i = $m['__op_add']($add103=i,$add104=1);
					}
					if ($p['bool'](!$p['bool'](got_bracket))) {
						throw ($m['ValueError']("Missing ']'"));
					}
					if ($p['bool']($m['op_eq'](name['__getitem__'](start), '{'))) {
						throw ($m['TypeError']('no replacement on fieldname'));
					}
					var $tupleassign7 = $p['__ass_unpack']($m['_parse_int'](name, start, i), 2, null);
					index = $tupleassign7[0];
					reached = $tupleassign7[1];
					if ($p['bool'](($p['bool']($and30=!$m['op_eq'](index, (typeof ($usub15=1)=='number'?
						-$usub15:
						$m['op_usub']($usub15))))?$m['op_eq'](reached, i):$and30))) {
						w_item = index;
					}
					else {
						w_item = $p['__getslice'](name, start, i);
					}
					i = $m['__op_add']($add105=i,$add106=1);
					if ($p['bool']((w_obj !== null))) {
						w_obj = w_obj['__getitem__'](w_item);
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_False'], w_item])));
					}
				}
				else {
					msg = "Only '[' and '.' may follow ']'";
					throw ($m['ValueError'](msg));
				}
			}
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['name'],['start'],['end']]);
		$cls_definition['_resolve_lookups'] = $method;
		$method = $pyjs__bind_method2('formatter_field_name_split', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,c,w_first,end,name,$add107,i,$add108,$attr184,$attr185,stop,$attr183,$or21,$attr186,$or20;
			name = self['template'];
			i = 0;
			end = $m['len'](name);
			while ($p['bool'](($m['cmp'](i, end) == -1))) {
				c = name['__getitem__'](i);
				if ($p['bool'](($p['bool']($or20=$m['op_eq'](c, '['))?$or20:$m['op_eq'](c, '.')))) {
					break;
				}
				i = $m['__op_add']($add107=i,$add108=1);
			}
			if ($p['bool']($m['op_eq'](i, 0))) {
				index = (typeof ($usub16=1)=='number'?
					-$usub16:
					$m['op_usub']($usub16));
			}
			else {
				var $tupleassign8 = $p['__ass_unpack']($m['_parse_int'](name, 0, i), 2, null);
				index = $tupleassign8[0];
				stop = $tupleassign8[1];
				if ($p['bool'](!$m['op_eq'](stop, i))) {
					index = (typeof ($usub17=1)=='number'?
						-$usub17:
						$m['op_usub']($usub17));
				}
			}
			if ($p['bool'](((($m['cmp'](index, 0))|1) == 1))) {
				w_first = index;
			}
			else {
				w_first = $p['__getslice'](name, 0, i);
			}
			self['parser_list_w'] = $p['list']([]);
			self['_resolve_lookups'](null, name, i, end);
			return self['space']['newtuple']($p['list']([w_first, self['space']['iter'](self['space']['newlist'](self['parser_list_w']))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_field_name_split'] = $method;
		$method = $pyjs__bind_method2('_convert', function(w_obj, conversion) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				conversion = arguments[2];
			}
			var conv;
			conv = conversion['__getitem__'](0);
			if ($p['bool']($m['op_eq'](conv, 'r'))) {
				return $m['repr'](w_obj);
			}
			else if ($p['bool']($m['op_eq'](conv, 's'))) {
				return $m['str'](w_obj);
			}
			else {
				throw ($m['ValueError']('invalid conversion'));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_obj'],['conversion']]);
		$cls_definition['_convert'] = $method;
		$method = $pyjs__bind_method2('_render_field', function(start, end, recursive, level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				recursive = arguments[3];
				level = arguments[4];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr198,$add110,conversion,spec,$sub31,$sub32,$attr188,$attr189,$add109,$attr187,w_obj,w_entry,startm1,name,w_rendered,spec_start;
			var $tupleassign9 = $p['__ass_unpack'](self['_parse_field'](start, end), 3, null);
			name = $tupleassign9[0];
			conversion = $tupleassign9[1];
			spec_start = $tupleassign9[2];
			spec = $p['__getslice'](self['template'], spec_start, end);
			if ($p['bool']((self['parser_list_w'] !== null))) {
				if ($p['bool']($m['op_eq'](level, 1))) {
					startm1 = $m['__op_sub']($sub31=start,$sub32=1);
					if (!( ((($m['cmp'](startm1, self['last_end']))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					w_entry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], startm1), name, spec, conversion]));
					self['parser_list_w']['append'](w_entry);
					self['last_end'] = $m['__op_add']($add109=end,$add110=1);
				}
				return self['empty'];
			}
			w_obj = self['_get_argument'](name);
			if ($p['bool']((conversion !== null))) {
				w_obj = self['_convert'](w_obj, conversion);
			}
			if ($p['bool'](recursive)) {
				spec = self['_build_string'](spec_start, end, level);
			}
			w_rendered = self['space']['format'](w_obj, spec);
			return $m['str'](w_rendered);
		}
	, 1, [null,null,['self'],['start'],['end'],['recursive'],['level']]);
		$cls_definition['_render_field'] = $method;
		$method = $pyjs__bind_method2('formatter_parser', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var w_lastentry,$attr215,$attr211,$attr210,$attr199,$attr216,$attr212,$attr214,$attr209,$attr208,$attr213,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202;
			self['parser_list_w'] = $p['list']([]);
			self['last_end'] = 0;
			self['_build_string'](0, $m['len'](self['template']), 2);
			if ($p['bool'](($m['cmp'](self['last_end'], $m['len'](self['template'])) == -1))) {
				w_lastentry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], null), self['space']['w_None'], self['space']['w_None'], self['space']['w_None']]));
				self['parser_list_w']['append'](w_lastentry);
			}
			return self['space']['iter'](self['space']['newlist'](self['parser_list_w']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_parser'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('TemplateFormatter', $bases, $cls_definition);
	})();
	$m['NumberSpec'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '7197252c31367ee5a539f268fa19f925';
		var $bases = new Array($m['object']);
		return $pyjs_type('NumberSpec', $bases, $cls_definition);
	})();
	$m['BaseFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '2ef02f2050d704b3973cfbcfe119ce80';
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('BaseFormatter', $bases, $cls_definition);
	})();
	$m['INT_KIND'] = 1;
	$m['LONG_KIND'] = 2;
	$m['NO_LOCALE'] = 1;
	$m['DEFAULT_LOCALE'] = 2;
	$m['CURRENT_LOCALE'] = 3;
	$m['Formatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = '5fbc80712012f3edbe9afeb1dd63ab10';
		$cls_definition['_grouped_digits'] = null;
		$method = $pyjs__bind_method2('__init__', function(space, spec) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				space = arguments[1];
				spec = arguments[2];
			}

			self['space'] = space;
			self['empty'] = '';
			self['spec'] = spec;
			return null;
		}
	, 1, [null,null,['self'],['space'],['spec']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_is_alignment', function(c) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var $or24,$or25,$or22,$or23;
			return ($p['bool']($or22=$m['op_eq'](c, '<'))?$or22:($p['bool']($or23=$m['op_eq'](c, '>'))?$or23:($p['bool']($or24=$m['op_eq'](c, '='))?$or24:$m['op_eq'](c, '^'))));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_alignment'] = $method;
		$method = $pyjs__bind_method2('_is_sign', function(c) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var $or27,$or26,$or28;
			return ($p['bool']($or26=$m['op_eq'](c, ' '))?$or26:($p['bool']($or27=$m['op_eq'](c, '+'))?$or27:$m['op_eq'](c, '-')));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_sign'] = $method;
		$method = $pyjs__bind_method2('_parse_spec', function(default_type, default_align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				default_type = arguments[1];
				default_align = arguments[2];
			}
			var $and46,$add129,$add118,$add119,$add116,$add117,$add114,$add115,$add112,$add113,$add111,$attr221,$attr224,tp,$sub40,$sub41,$sub42,$sub43,$add125,$sub45,$sub46,$add122,$add123,$add121,$or32,$and45,$and44,$add120,$and41,$attr218,$and43,$and42,got_align,$or30,the_type,$or29,$attr222,spec,$attr226,$or36,$add127,$add126,$sub33,$add124,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,$add128,$and38,$and39,$and34,$and35,$and36,$and37,$and32,$and33,$attr225,$or31,$attr223,start_i,i,$add130,$or35,$or33,presentation_type,length,$attr219,$or37,$and40,$attr220,$or34,$sub44,$attr217;
			self['_fill_char'] = self['_lit']('\x00')['__getitem__'](0);
			self['_align'] = default_align;
			self['_alternate'] = false;
			self['_sign'] = '\x00';
			self['_thousands_sep'] = false;
			self['_precision'] = (typeof ($usub18=1)=='number'?
				-$usub18:
				$m['op_usub']($usub18));
			the_type = default_type;
			spec = self['spec'];
			if ($p['bool'](!$p['bool'](spec))) {
				return true;
			}
			length = $m['len'](spec);
			i = 0;
			got_align = true;
			if ($p['bool'](($p['bool']($and32=((($m['cmp']($m['__op_sub']($sub33=length,$sub34=i), 2))|1) == 1))?self['_is_alignment'](spec['__getitem__']($m['__op_add']($add111=i,$add112=1))):$and32))) {
				self['_align'] = spec['__getitem__']($m['__op_add']($add113=i,$add114=1));
				self['_fill_char'] = spec['__getitem__'](i);
				i = $m['__op_add']($add115=i,$add116=2);
			}
			else if ($p['bool'](($p['bool']($and34=((($m['cmp']($m['__op_sub']($sub35=length,$sub36=i), 1))|1) == 1))?self['_is_alignment'](spec['__getitem__'](i)):$and34))) {
				self['_align'] = spec['__getitem__'](i);
				i = $m['__op_add']($add117=i,$add118=1);
			}
			else {
				got_align = false;
			}
			if ($p['bool'](($p['bool']($and36=((($m['cmp']($m['__op_sub']($sub37=length,$sub38=i), 1))|1) == 1))?self['_is_sign'](spec['__getitem__'](i)):$and36))) {
				self['_sign'] = spec['__getitem__'](i);
				i = $m['__op_add']($add119=i,$add120=1);
			}
			if ($p['bool'](($p['bool']($and38=((($m['cmp']($m['__op_sub']($sub39=length,$sub40=i), 1))|1) == 1))?$m['op_eq'](spec['__getitem__'](i), '#'):$and38))) {
				self['_alternate'] = true;
				i = $m['__op_add']($add121=i,$add122=1);
			}
			if ($p['bool'](($p['bool']($and40=$m['op_eq'](self['_fill_char'], '\x00'))?($p['bool']($and41=((($m['cmp']($m['__op_sub']($sub41=length,$sub42=i), 1))|1) == 1))?$m['op_eq'](spec['__getitem__'](i), '0'):$and41):$and40))) {
				self['_fill_char'] = self['_lit']('0')['__getitem__'](0);
				if ($p['bool'](!$p['bool'](got_align))) {
					self['_align'] = '=';
				}
				i = $m['__op_add']($add123=i,$add124=1);
			}
			start_i = i;
			var $tupleassign10 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
			self['_width'] = $tupleassign10[0];
			i = $tupleassign10[1];
			if ($p['bool'](($p['bool']($and43=!$m['op_eq'](length, i))?$m['op_eq'](spec['__getitem__'](i), ','):$and43))) {
				self['_thousands_sep'] = true;
				i = $m['__op_add']($add125=i,$add126=1);
			}
			if ($p['bool'](($p['bool']($and45=!$m['op_eq'](length, i))?$m['op_eq'](spec['__getitem__'](i), '.'):$and45))) {
				i = $m['__op_add']($add127=i,$add128=1);
				var $tupleassign11 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
				self['_precision'] = $tupleassign11[0];
				i = $tupleassign11[1];
				if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub19=1)=='number'?
					-$usub19:
					$m['op_usub']($usub19))))) {
					throw ($m['ValueError']('no precision given'));
				}
			}
			if ($p['bool'](($m['cmp']($m['__op_sub']($sub43=length,$sub44=i), 1) == 1))) {
				throw ($m['ValueError']('invalid format spec'));
			}
			if ($p['bool']($m['op_eq']($m['__op_sub']($sub45=length,$sub46=i), 1))) {
				presentation_type = spec['__getitem__'](i);
				the_type = presentation_type;
				i = $m['__op_add']($add129=i,$add130=1);
			}
			self['_type'] = the_type;
			if ($p['bool'](self['_thousands_sep'])) {
				tp = self['_type'];
				if ($p['bool'](($p['bool']($or29=$m['op_eq'](tp, 'd'))?$or29:($p['bool']($or30=$m['op_eq'](tp, 'e'))?$or30:($p['bool']($or31=$m['op_eq'](tp, 'f'))?$or31:($p['bool']($or32=$m['op_eq'](tp, 'g'))?$or32:($p['bool']($or33=$m['op_eq'](tp, 'E'))?$or33:($p['bool']($or34=$m['op_eq'](tp, 'G'))?$or34:($p['bool']($or35=$m['op_eq'](tp, '%'))?$or35:($p['bool']($or36=$m['op_eq'](tp, 'F'))?$or36:$m['op_eq'](tp, '\x00'))))))))))) {
				}
				else {
					throw ($m['ValueError']("invalid type with ','"));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['default_type'],['default_align']]);
		$cls_definition['_parse_spec'] = $method;
		$method = $pyjs__bind_method2('_calc_padding', function(string, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				length = arguments[2];
			}
			var $attr234,right,$attr230,$attr231,$attr232,$attr233,$sub48,$sub49,$sub52,total,$sub47,$and48,$attr227,$sub54,$sub53,$sub51,$sub50,$attr229,$attr228,$div6,$div5,align,$or39,$or38,$and47,left;
			if ($p['bool'](($p['bool']($and47=!$m['op_eq'](self['_width'], (typeof ($usub20=1)=='number'?
				-$usub20:
				$m['op_usub']($usub20))))?($m['cmp'](length, self['_width']) == -1):$and47))) {
				total = self['_width'];
			}
			else {
				total = length;
			}
			align = self['_align'];
			if ($p['bool']($m['op_eq'](align, '>'))) {
				left = $m['__op_sub']($sub47=total,$sub48=length);
			}
			else if ($p['bool']($m['op_eq'](align, '^'))) {
				left = (typeof ($div5=$m['__op_sub']($sub49=total,$sub50=length))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$m['op_div']($div5,$div6));
			}
			else if ($p['bool'](($p['bool']($or38=$m['op_eq'](align, '<'))?$or38:$m['op_eq'](align, '=')))) {
				left = 0;
			}
			else {
				throw ($m['AssertionError']("shouldn't be here"));
			}
			right = $m['__op_sub']($sub53=$m['__op_sub']($sub51=total,$sub52=length),$sub54=left);
			self['_left_pad'] = left;
			self['_right_pad'] = right;
			return total;
		}
	, 1, [null,null,['self'],['string'],['length']]);
		$cls_definition['_calc_padding'] = $method;
		$method = $pyjs__bind_method2('_lit', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}

			return s;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_lit'] = $method;
		$method = $pyjs__bind_method2('_pad', function(string) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}
			var $attr241,$attr235,$attr236,$attr237,$attr240,builder,$attr238,$attr239,$attr242;
			builder = self['_builder']();
			builder['append_multiple_char'](self['_fill_char'], self['_left_pad']);
			builder['append'](string);
			builder['append_multiple_char'](self['_fill_char'], self['_right_pad']);
			return builder['build']();
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['_pad'] = $method;
		$method = $pyjs__bind_method2('_builder', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['StringBuilder']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['_builder'] = $method;
		$method = $pyjs__bind_method2('_unknown_presentation', function(tp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tp = arguments[1];
			}
			var $attr243,$attr244,w_msg,$mod4,$mod3,msg;
			msg = "unknown presentation for %s: '%s'";
			w_msg = (typeof ($mod3=msg)==typeof ($mod4=$p['tuple']([tp, self['_type']])) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$m['op_mod']($mod3,$mod4));
			throw ($m['ValueError'](w_msg));
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_unknown_presentation'] = $method;
		$method = $pyjs__bind_method2('format_string', function(string) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}
			var $attr245,$attr247,$attr246,$attr249,$attr248,$attr255,$attr252,$attr253,$attr250,$attr251,$attr256,length,$and50,precision,msg,$and49,$attr254;
			if ($p['bool'](self['_parse_spec']('s', '<'))) {
				return string;
			}
			if ($p['bool'](!$m['op_eq'](self['_type'], 's'))) {
				self['_unknown_presentation']('string');
			}
			if ($p['bool'](!$m['op_eq'](self['_sign'], '\x00'))) {
				msg = 'Sign not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool'](self['_alternate'])) {
				msg = 'Alternate form not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool']($m['op_eq'](self['_align'], '='))) {
				msg = "'=' alignment not allowed in string format specifier";
				throw ($m['ValueError'](msg));
			}
			length = $m['len'](string);
			precision = self['_precision'];
			if ($p['bool'](($p['bool']($and49=!$m['op_eq'](precision, (typeof ($usub21=1)=='number'?
				-$usub21:
				$m['op_usub']($usub21))))?((($m['cmp'](length, precision))|1) == 1):$and49))) {
				if (!( ((($m['cmp'](precision, 0))|1) == 1) )) {
				   throw $m['AssertionError']();
				 }
				length = precision;
				string = $p['__getslice'](string, 0, precision);
			}
			if ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))) {
				self['_fill_char'] = self['_lit'](' ')['__getitem__'](0);
			}
			self['_calc_padding'](string, length);
			return self['_pad'](string);
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['format_string'] = $method;
		$method = $pyjs__bind_method2('_get_locale', function(tp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tp = arguments[1];
			}
			var $attr258,$attr257,dec,thousands,grouping;
			if ($p['bool']($m['op_eq'](tp, 'n'))) {
				var $tupleassign12 = $p['__ass_unpack']((typeof numeric_formatting == "undefined"?$m['numeric_formatting']:numeric_formatting)(), 3, null);
				dec = $tupleassign12[0];
				thousands = $tupleassign12[1];
				grouping = $tupleassign12[2];
			}
			else if ($p['bool'](self['_thousands_sep'])) {
				dec = '.';
				thousands = ',';
				grouping = '\x03\x00';
			}
			else {
				dec = '.';
				thousands = '';
				grouping = '\xae';
			}
			self['_loc_dec'] = dec;
			self['_loc_thousands'] = thousands;
			self['_loc_grouping'] = grouping;
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_get_locale'] = $method;
		$method = $pyjs__bind_method2('_calc_num_width', function(n_prefix, sign_char, to_number, n_number, n_remainder, has_dec, digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n_prefix = arguments[1];
				sign_char = arguments[2];
				to_number = arguments[3];
				n_number = arguments[4];
				n_remainder = arguments[5];
				has_dec = arguments[6];
				digits = arguments[7];
			}
			var extra_length,spec,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,n_grouped_digits,$attr278,$attr279,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,$attr285,$attr284,$attr287,$attr281,$attr280,$attr283,$attr282,$attr289,$attr288,$attr269,$attr268,$attr300,$attr263,$attr262,$attr261,$attr260,$attr267,$attr266,$attr265,$attr264,$and52,$and51,$floordiv2,$floordiv1,$attr259,$sub64,$sub62,$sub63,$sub60,$sub61,$add145,$add144,$add147,$add146,$add141,$add140,$add143,$add142,$add149,$add148,n_padding,sign,align,$add152,$add150,$add151,$add134,$add135,$add136,$add137,$add131,$add132,$add133,$add138,$add139,$sub57,$sub56,$sub55,$sub59,$sub58,$attr286;
			spec = $m['NumberSpec']();
			spec['n_digits'] = $m['__op_sub']($sub57=$m['__op_sub']($sub55=n_number,$sub56=n_remainder),$sub58=has_dec);
			spec['n_prefix'] = n_prefix;
			spec['n_lpadding'] = 0;
			spec['n_decimal'] = $p['float_int'](has_dec);
			spec['n_remainder'] = n_remainder;
			spec['n_spadding'] = 0;
			spec['n_rpadding'] = 0;
			spec['n_min_width'] = 0;
			spec['n_total'] = 0;
			spec['sign'] = '\x00';
			spec['n_sign'] = 0;
			sign = self['_sign'];
			if ($p['bool']($m['op_eq'](sign, '+'))) {
				spec['n_sign'] = 1;
				spec['sign'] = ($p['bool']($m['op_eq'](sign_char, '-'))? ('-') : ('+'));
			}
			else if ($p['bool']($m['op_eq'](sign, ' '))) {
				spec['n_sign'] = 1;
				spec['sign'] = ($p['bool']($m['op_eq'](sign_char, '-'))? ('-') : (' '));
			}
			else if ($p['bool']($m['op_eq'](sign_char, '-'))) {
				spec['n_sign'] = 1;
				spec['sign'] = '-';
			}
			extra_length = $m['__op_add']($add135=$m['__op_add']($add133=$m['__op_add']($add131=spec['n_sign'],$add132=spec['n_prefix']),$add134=spec['n_decimal']),$add136=spec['n_remainder']);
			if ($p['bool'](($p['bool']($and51=$m['op_eq'](self['_fill_char'], '0'))?$m['op_eq'](self['_align'], '='):$and51))) {
				spec['n_min_width'] = $m['__op_sub']($sub59=self['_width'],$sub60=extra_length);
			}
			if ($p['bool'](self['_loc_thousands'])) {
				self['_group_digits'](spec, $p['__getslice'](digits, to_number, null));
				n_grouped_digits = $m['len'](self['_grouped_digits']);
			}
			else {
				n_grouped_digits = spec['n_digits'];
			}
			n_padding = $m['__op_sub']($sub61=self['_width'],$sub62=$m['__op_add']($add137=extra_length,$add138=n_grouped_digits));
			if ($p['bool'](($m['cmp'](n_padding, 0) == 1))) {
				align = self['_align'];
				if ($p['bool']($m['op_eq'](align, '<'))) {
					spec['n_rpadding'] = n_padding;
				}
				else if ($p['bool']($m['op_eq'](align, '>'))) {
					spec['n_lpadding'] = n_padding;
				}
				else if ($p['bool']($m['op_eq'](align, '^'))) {
					spec['n_lpadding'] = (typeof ($floordiv1=n_padding)==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$m['op_floordiv']($floordiv1,$floordiv2));
					spec['n_rpadding'] = $m['__op_sub']($sub63=n_padding,$sub64=spec['n_lpadding']);
				}
				else if ($p['bool']($m['op_eq'](align, '='))) {
					spec['n_spadding'] = n_padding;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
			}
			spec['n_total'] = $m['__op_add']($add151=$m['__op_add']($add149=$m['__op_add']($add147=$m['__op_add']($add145=$m['__op_add']($add143=$m['__op_add']($add141=$m['__op_add']($add139=spec['n_lpadding'],$add140=spec['n_sign']),$add142=spec['n_prefix']),$add144=spec['n_spadding']),$add146=n_grouped_digits),$add148=spec['n_decimal']),$add150=spec['n_remainder']),$add152=spec['n_rpadding']);
			return spec;
		}
	, 1, [null,null,['self'],['n_prefix'],['sign_char'],['to_number'],['n_number'],['n_remainder'],['has_dec'],['digits']]);
		$cls_definition['_calc_num_width'] = $method;
		$method = $pyjs__bind_method2('_fill_digits', function(buf, digits, d_state, n_chars, n_zeros, thousands_sep) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				buf = arguments[1];
				digits = arguments[2];
				d_state = arguments[3];
				n_chars = arguments[4];
				n_zeros = arguments[5];
				thousands_sep = arguments[6];
			}
			var $iter32_idx,$iter32_nextval,$iter31_nextval,$iter32_iter,$iter30_array,$sub68,$sub69,$sub66,$sub67,$sub65,$iter30_nextval,$iter31_idx,$iter32_type,$iter32_array,$iter30_type,$iter31_array,$iter30_idx,$sub70,c,$iter30_iter,i,$iter31_iter,$iter31_type;
			if ($p['bool'](thousands_sep)) {
				$iter30_iter = thousands_sep;
				$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
				while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
					c = $iter30_nextval['$nextval'];
					buf['append'](c);
				}
			}
			$iter31_iter = $m['range']($m['__op_sub']($sub65=d_state,$sub66=1), $m['__op_sub']($sub69=$m['__op_sub']($sub67=d_state,$sub68=n_chars),$sub70=1), (typeof ($usub22=1)=='number'?
				-$usub22:
				$m['op_usub']($usub22)));
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
				i = $iter31_nextval['$nextval'];
				buf['append'](digits['__getitem__'](i));
			}
			$iter32_iter = $m['range'](n_zeros);
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
				i = $iter32_nextval['$nextval'];
				buf['append']('0');
			}
			return null;
		}
	, 1, [null,null,['self'],['buf'],['digits'],['d_state'],['n_chars'],['n_zeros'],['thousands_sep']]);
		$cls_definition['_fill_digits'] = $method;
		$method = $pyjs__bind_method2('_group_digits', function(spec, digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spec = arguments[1];
				digits = arguments[2];
			}
			var $attr312,$attr311,$attr305,done,n_ts,min_width,previous,group,$sub71,$attr310,ts,grouping_state,$add154,$sub72,$attr304,count,$attr306,$attr307,$attr301,$attr302,$attr303,$attr308,$attr309,n_chars,$sub79,n_zeros,$sub78,$sub75,$sub74,$sub77,$sub76,buf,$sub73,groupings,$and54,$and53,$add153,need_separator,$sub80,final_grouping,grouping,left;
			buf = $p['list']([]);
			grouping = self['_loc_grouping'];
			min_width = spec['n_min_width'];
			grouping_state = 0;
			count = 0;
			left = spec['n_digits'];
			n_ts = $m['len'](self['_loc_thousands']);
			need_separator = false;
			done = false;
			groupings = $m['len'](grouping);
			previous = 0;
			while ($p['bool'](true)) {
				group = $m['ord'](grouping['__getitem__'](grouping_state));
				if ($p['bool'](($m['cmp'](group, 0) == 1))) {
					if ($p['bool']($m['op_eq'](group, 256))) {
						break;
					}
					grouping_state = $m['__op_add']($add153=grouping_state,$add154=1);
					previous = group;
				}
				else {
					group = previous;
				}
				final_grouping = $m['min'](group, $m['max'](left, $m['max'](min_width, 1)));
				n_zeros = $m['max'](0, $m['__op_sub']($sub71=final_grouping,$sub72=left));
				n_chars = $m['max'](0, $m['min'](left, final_grouping));
				ts = ($p['bool'](need_separator)? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
				need_separator = true;
				left = $m['__op_sub']($sub73=left,$sub74=n_chars);
				min_width = $m['__op_sub']($sub75=min_width,$sub76=final_grouping);
				if ($p['bool'](($p['bool']($and53=($m['cmp'](left, 0) < 1))?($m['cmp'](min_width, 0) < 1):$and53))) {
					done = true;
					break;
				}
				min_width = $m['__op_sub']($sub77=min_width,$sub78=n_ts);
			}
			if ($p['bool'](!$p['bool'](done))) {
				group = $m['max']($m['max'](left, min_width), 1);
				n_zeros = $m['max'](0, $m['__op_sub']($sub79=group,$sub80=left));
				n_chars = $m['max'](0, $m['min'](left, group));
				ts = ($p['bool'](need_separator)? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
			}
			buf['reverse']();
			self['_grouped_digits'] = self['empty']['join'](buf);
			return null;
		}
	, 1, [null,null,['self'],['spec'],['digits']]);
		$cls_definition['_group_digits'] = $method;
		$method = $pyjs__bind_method2('_upcase_string', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}
			var $iter33_iter,$iter33_nextval,$iter33_type,index,c,$iter33_idx,$sub81,$sub82,buf,$iter33_array;
			buf = $p['list']([]);
			$iter33_iter = s;
			$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
			while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
				c = $iter33_nextval['$nextval'];
				index = $m['ord'](c);
				if ($p['bool']((($m['cmp']($m['ord']('a'), ($compare3 = index)) < 1)&&($m['cmp']($compare3, ($compare4 = $m['ord']('z'))) < 1)))) {
					c = $m['chr']($m['__op_sub']($sub81=index,$sub82=32));
				}
				buf['append'](c);
			}
			return self['empty']['join'](buf);
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_upcase_string'] = $method;
		$method = $pyjs__bind_method2('_fill_number', function(spec, num, to_digits, to_prefix, fill_char, to_remainder, upper, grouped_digits) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spec = arguments[1];
				num = arguments[2];
				to_digits = arguments[3];
				to_prefix = arguments[4];
				fill_char = arguments[5];
				to_remainder = arguments[6];
				upper = arguments[7];
				grouped_digits = arguments[8];
			}
			if (typeof grouped_digits == 'undefined') grouped_digits=arguments['callee']['__args__'][10][1];
			var $attr317,$attr315,$attr314,$attr313,$attr316,$attr319,sign,$add157,out,$attr327,pref,$attr339,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr324,$attr325,$attr343,$attr340,$attr341,$attr342,$attr338,stop,$attr318,$attr337,$attr344,digits,$add156,$add155,$attr335,$attr334,$add158,$attr336,$attr331,$attr330,$attr333,$attr332;
			out = self['_builder']();
			if ($p['bool'](spec['n_lpadding'])) {
				out['append_multiple_char'](fill_char['__getitem__'](0), spec['n_lpadding']);
			}
			if ($p['bool'](spec['n_sign'])) {
				sign = spec['sign'];
				out['append'](sign);
			}
			if ($p['bool'](spec['n_prefix'])) {
				pref = $p['__getslice'](num, to_prefix, $m['__op_add']($add155=to_prefix,$add156=spec['n_prefix']));
				if ($p['bool'](upper)) {
					pref = self['_upcase_string'](pref);
				}
				out['append'](pref);
			}
			if ($p['bool'](spec['n_spadding'])) {
				out['append_multiple_char'](fill_char['__getitem__'](0), spec['n_spadding']);
			}
			if ($p['bool'](!$m['op_eq'](spec['n_digits'], 0))) {
				if ($p['bool'](self['_loc_thousands'])) {
					if ($p['bool']((grouped_digits !== null))) {
						digits = grouped_digits;
					}
					else {
						digits = self['_grouped_digits'];
						if (!( (digits !== null) )) {
						   throw $m['AssertionError']();
						 }
					}
				}
				else {
					stop = $m['__op_add']($add157=to_digits,$add158=spec['n_digits']);
					if (!( ((($m['cmp'](stop, 0))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					digits = $p['__getslice'](num, to_digits, stop);
				}
				if ($p['bool'](upper)) {
					digits = self['_upcase_string'](digits);
				}
				out['append'](digits);
			}
			if ($p['bool'](spec['n_decimal'])) {
				out['append']('.');
			}
			if ($p['bool'](spec['n_remainder'])) {
				out['append']($p['__getslice'](num, to_remainder, null));
			}
			if ($p['bool'](spec['n_rpadding'])) {
				out['append_multiple_char'](fill_char['__getitem__'](0), spec['n_rpadding']);
			}
			return out['build']();
		}
	, 1, [null,null,['self'],['spec'],['num'],['to_digits'],['to_prefix'],['fill_char'],['to_remainder'],['upper'],['grouped_digits', null]]);
		$cls_definition['_fill_number'] = $method;
		$method = $pyjs__bind_method2('_format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}
			var upper,$attr358,n_remainder,$attr353,$attr352,$attr351,$attr350,$attr357,$attr356,$attr355,$attr354,$sub84,n_digits,to_numeric,$sub83,fill,sign_char,tp,msg,$or43,$or40,to_prefix,spec,$attr348,$attr349,$add162,$add161,$add160,$attr345,$attr346,$attr347,$or42,base,$or41,value,to_remainder,n_prefix,$add159,skip_leading,result;
			if ($p['bool'](!$m['op_eq'](self['_precision'], (typeof ($usub23=1)=='number'?
				-$usub23:
				$m['op_usub']($usub23))))) {
				msg = 'precision not allowed in integer type';
				throw ($m['ValueError'](msg));
			}
			sign_char = '\x00';
			tp = self['_type'];
			if ($p['bool']($m['op_eq'](tp, 'c'))) {
				if ($p['bool'](!$m['op_eq'](self['_sign'], '\x00'))) {
					msg = "sign not allowed with 'c' presentation type";
					throw ($m['ValueError'](msg));
				}
				value = w_num;
				result = $m['chr'](value);
				n_digits = 1;
				n_remainder = 1;
				to_remainder = 0;
				n_prefix = 0;
				to_prefix = 0;
				to_numeric = 0;
			}
			else {
				if ($p['bool']($m['op_eq'](tp, 'b'))) {
					base = 2;
					skip_leading = 2;
				}
				else if ($p['bool']($m['op_eq'](tp, 'o'))) {
					base = 8;
					skip_leading = 2;
				}
				else if ($p['bool'](($p['bool']($or40=$m['op_eq'](tp, 'x'))?$or40:$m['op_eq'](tp, 'X')))) {
					base = 16;
					skip_leading = 2;
				}
				else if ($p['bool'](($p['bool']($or42=$m['op_eq'](tp, 'n'))?$or42:$m['op_eq'](tp, 'd')))) {
					base = 10;
					skip_leading = 0;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
				if ($p['bool']($m['op_eq'](kind, $m['INT_KIND']))) {
					result = self['_int_to_base'](base, w_num);
				}
				else {
					result = self['_int_to_base'](base, w_num);
				}
				n_prefix = ($p['bool'](self['_alternate'])? (skip_leading) : (0));
				to_prefix = 0;
				if ($p['bool']($m['op_eq'](result['__getitem__'](0), '-'))) {
					sign_char = '-';
					skip_leading = $m['__op_add']($add159=skip_leading,$add160=1);
					to_prefix = $m['__op_add']($add161=to_prefix,$add162=1);
				}
				n_digits = $m['__op_sub']($sub83=$m['len'](result),$sub84=skip_leading);
				n_remainder = 0;
				to_remainder = 0;
				to_numeric = skip_leading;
			}
			self['_get_locale'](tp);
			spec = self['_calc_num_width'](n_prefix, sign_char, to_numeric, n_digits, n_remainder, false, result);
			fill = ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))? (self['_lit'](' ')) : (self['_fill_char']));
			upper = $m['op_eq'](self['_type'], 'X');
			return self['_fill_number'](spec, result, to_numeric, to_prefix, fill, to_remainder, upper);
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['_format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_int_to_base', function(base, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				base = arguments[1];
				value = arguments[2];
			}
			var $sub95,$add170,$mod6,$sub94,$add169,$mod5,$sub85,$sub86,$sub87,$sub104,$sub105,$sub106,$sub107,$sub108,$sub88,$sub89,negative,$sub99,$sub101,digit,$add168,$add163,$add167,$add166,$add165,$add164,$sub93,$sub92,$sub91,$sub97,$sub96,$mul9,$mul8,$mul7,$mul6,$mul5,$sub98,buf,mod,$sub100,$mul10,i,$sub102,$floordiv6,$floordiv5,$floordiv4,$floordiv3,$sub90,div,$sub103;
			if ($p['bool']($m['op_eq'](base, 10))) {
				return $m['str'](value);
			}
			negative = ($m['cmp'](value, 0) == -1);
			value = $p['abs'](value);
			buf = (typeof ($mul7=$p['list'](['\x00']))==typeof ($mul8=$m['__op_add']($add163=(typeof ($mul5=8)==typeof ($mul6=8) && typeof $mul5=='number'?
				$mul5*$mul6:
				$m['op_mul']($mul5,$mul6)),$add164=6)) && typeof $mul7=='number'?
				$mul7*$mul8:
				$m['op_mul']($mul7,$mul8));
			i = $m['__op_sub']($sub85=$m['len'](buf),$sub86=1);
			while ($p['bool'](true)) {
				div = (typeof ($floordiv3=value)==typeof ($floordiv4=base) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math['floor']($floordiv3/$floordiv4):
					$m['op_floordiv']($floordiv3,$floordiv4));
				mod = $m['__op_sub']($sub87=value,$sub88=(typeof ($mul9=div)==typeof ($mul10=base) && typeof $mul9=='number'?
					$mul9*$mul10:
					$m['op_mul']($mul9,$mul10)));
				digit = $p['abs'](mod);
				digit = $m['__op_add']($add165=digit,$add166=($p['bool'](($m['cmp'](digit, 10) == -1))? ($m['ord']('0')) : ($m['__op_sub']($sub89=$m['ord']('a'),$sub90=10))));
				buf['__setitem__'](i, $m['chr'](digit));
				value = div;
				i = $m['__op_sub']($sub91=i,$sub92=1);
				if ($p['bool'](!$p['bool'](value))) {
					break;
				}
			}
			if ($p['bool']($m['op_eq'](base, 2))) {
				buf['__setitem__'](i, 'b');
				buf['__setitem__']($m['__op_sub']($sub93=i,$sub94=1), '0');
			}
			else if ($p['bool']($m['op_eq'](base, 8))) {
				buf['__setitem__'](i, 'o');
				buf['__setitem__']($m['__op_sub']($sub95=i,$sub96=1), '0');
			}
			else if ($p['bool']($m['op_eq'](base, 16))) {
				buf['__setitem__'](i, 'x');
				buf['__setitem__']($m['__op_sub']($sub97=i,$sub98=1), '0');
			}
			else {
				buf['__setitem__'](i, '#');
				buf['__setitem__']($m['__op_sub']($sub99=i,$sub100=1), $m['chr']($m['__op_add']($add167=$m['ord']('0'),$add168=(typeof ($mod5=base)==typeof ($mod6=10) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$m['op_mod']($mod5,$mod6)))));
				if ($p['bool'](($m['cmp'](base, 10) == 1))) {
					buf['__setitem__']($m['__op_sub']($sub101=i,$sub102=2), $m['chr']($m['__op_add']($add169=$m['ord']('0'),$add170=(typeof ($floordiv5=base)==typeof ($floordiv6=10) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math['floor']($floordiv5/$floordiv6):
						$m['op_floordiv']($floordiv5,$floordiv6)))));
					i = $m['__op_sub']($sub103=i,$sub104=1);
				}
			}
			i = $m['__op_sub']($sub105=i,$sub106=1);
			if ($p['bool'](negative)) {
				i = $m['__op_sub']($sub107=i,$sub108=1);
				buf['__setitem__'](i, '-');
			}
			if (!( ((($m['cmp'](i, 0))|1) == 1) )) {
			   throw $m['AssertionError']();
			 }
			return self['empty']['join']($p['__getslice'](buf, i, null));
		}
	, 1, [null,null,['self'],['base'],['value']]);
		$cls_definition['_int_to_base'] = $method;
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}
			var $attr359,w_float,$or55,$or56,$or57,tp,$or54,$or48,$or49,$attr360,$or51,$or50,$or53,$or52,$or46,$or47,$or44,$or45;
			if ($p['bool'](self['_parse_spec']('d', '>'))) {
				return self['space']['str'](w_num);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or44=$m['op_eq'](tp, 'b'))?$or44:($p['bool']($or45=$m['op_eq'](tp, 'c'))?$or45:($p['bool']($or46=$m['op_eq'](tp, 'd'))?$or46:($p['bool']($or47=$m['op_eq'](tp, 'o'))?$or47:($p['bool']($or48=$m['op_eq'](tp, 'x'))?$or48:($p['bool']($or49=$m['op_eq'](tp, 'X'))?$or49:$m['op_eq'](tp, 'n'))))))))) {
				return self['_format_int_or_long'](w_num, kind);
			}
			else if ($p['bool'](($p['bool']($or51=$m['op_eq'](tp, 'e'))?$or51:($p['bool']($or52=$m['op_eq'](tp, 'E'))?$or52:($p['bool']($or53=$m['op_eq'](tp, 'f'))?$or53:($p['bool']($or54=$m['op_eq'](tp, 'F'))?$or54:($p['bool']($or55=$m['op_eq'](tp, 'g'))?$or55:($p['bool']($or56=$m['op_eq'](tp, 'G'))?$or56:$m['op_eq'](tp, '%'))))))))) {
				w_float = $m['float'](w_num);
				return self['_format_float'](w_float);
			}
			else {
				self['_unknown_presentation'](($p['bool']($m['op_eq'](kind, $m['INT_KIND']))? ('int') : ('long')));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_parse_number', function(s, i) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
				i = arguments[2];
			}
			var $add173,$and58,$add171,$and55,$add174,rest,dec_point,$and56,length,$and57,$add172;
			length = $m['len'](s);
			while ($p['bool'](($p['bool']($and55=($m['cmp'](i, length) == -1))?(($m['cmp']('0', ($compare5 = s['__getitem__'](i))) < 1)&&($m['cmp']($compare5, ($compare6 = '9')) < 1)):$and55))) {
				i = $m['__op_add']($add171=i,$add172=1);
			}
			rest = i;
			dec_point = ($p['bool']($and57=($m['cmp'](i, length) == -1))?$m['op_eq'](s['__getitem__'](i), '.'):$and57);
			if ($p['bool'](dec_point)) {
				rest = $m['__op_add']($add173=rest,$add174=1);
			}
			return $p['tuple']([dec_point, rest]);
		}
	, 1, [null,null,['self'],['s'],['i']]);
		$cls_definition['_parse_number'] = $method;
		$method = $pyjs__bind_method2('_format_float', function(w_float) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_float = arguments[1];
			}
			var $attr371,$attr370,$attr372,n_remainder,$add175,$add176,sign,n_digits,result,$sub109,fill,add_pct,to_number,tp,default_precision,msg,have_dec_point,spec,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr361,$sub112,$sub111,$sub110,digits,$mul12,$mul11,value,to_remainder,flags;
			flags = 0;
			default_precision = 6;
			if ($p['bool'](self['_alternate'])) {
				msg = 'alternate form not allowed in float formats';
				throw ($m['ValueError'](msg));
			}
			tp = self['_type'];
			self['_get_locale'](tp);
			if ($p['bool']($m['op_eq'](tp, '\x00'))) {
				tp = 'g';
				default_precision = 12;
				flags |= (typeof DTSF_ADD_DOT_0 == "undefined"?$m['DTSF_ADD_DOT_0']:DTSF_ADD_DOT_0);
			}
			else if ($p['bool']($m['op_eq'](tp, 'n'))) {
				tp = 'g';
			}
			value = $m['float'](w_float);
			if ($p['bool']($m['op_eq'](tp, '%'))) {
				tp = 'f';
				value = (typeof ($mul11=value)==typeof ($mul12=100) && typeof $mul11=='number'?
					$mul11*$mul12:
					$m['op_mul']($mul11,$mul12));
				add_pct = true;
			}
			else {
				add_pct = false;
			}
			if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub24=1)=='number'?
				-$usub24:
				$m['op_usub']($usub24))))) {
				self['_precision'] = default_precision;
			}
			result = (typeof formatd == "undefined"?$m['formatd']:formatd)(value, tp, self['_precision'], flags);
			if ($p['bool'](add_pct)) {
				result = $m['__op_add']($add175=result,$add176='%');
			}
			n_digits = $m['len'](result);
			if ($p['bool']($m['op_eq'](result['__getitem__'](0), '-'))) {
				sign = '-';
				to_number = 1;
				n_digits = $m['__op_sub']($sub109=n_digits,$sub110=1);
			}
			else {
				sign = '\x00';
				to_number = 0;
			}
			var $tupleassign13 = $p['__ass_unpack'](self['_parse_number'](result, to_number), 2, null);
			have_dec_point = $tupleassign13[0];
			to_remainder = $tupleassign13[1];
			n_remainder = $m['__op_sub']($sub111=$m['len'](result),$sub112=to_remainder);
			digits = result;
			spec = self['_calc_num_width'](0, sign, to_number, n_digits, n_remainder, have_dec_point, digits);
			fill = ($p['bool']($m['op_eq'](self['_fill_char'], '\x00'))? (self['_lit'](' ')) : (self['_fill_char']));
			return self['_fill_number'](spec, digits, to_number, 0, fill, to_remainder, false);
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['_format_float'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_float) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_float = arguments[1];
			}
			var $or60,$or61,$attr373,$or63,$or64,$attr374,$or66,$or62,tp,$or59,$or58,$or65;
			if ($p['bool'](self['_parse_spec']('\x00', '>'))) {
				return self['space']['str'](w_float);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or58=$m['op_eq'](tp, '\x00'))?$or58:($p['bool']($or59=$m['op_eq'](tp, 'e'))?$or59:($p['bool']($or60=$m['op_eq'](tp, 'E'))?$or60:($p['bool']($or61=$m['op_eq'](tp, 'f'))?$or61:($p['bool']($or62=$m['op_eq'](tp, 'F'))?$or62:($p['bool']($or63=$m['op_eq'](tp, 'g'))?$or63:($p['bool']($or64=$m['op_eq'](tp, 'G'))?$or64:($p['bool']($or65=$m['op_eq'](tp, 'n'))?$or65:$m['op_eq'](tp, '%'))))))))))) {
				return self['_format_float'](w_float);
			}
			self['_unknown_presentation']('float');
			return null;
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('_format_complex', function(w_complex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
			}
			var re_grouped_digits,$sub120,n_im_digits,add_parens,im_have_dec,tp,re_num,im_n_remainder,$add181,$add180,$add182,re_remainder_ptr,skip_re,im_spec,$add178,$add179,$attr375,$attr377,$attr376,$attr379,$attr378,$add177,$mod7,$mod8,out,im_remainder_ptr,re_spec,tmp_align,re_n_remainder,$mul14,$mul13,$and59,tmp_fill_char,im_num,tmp_width,$attr418,$attr419,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,default_precision,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr380,$attr381,$attr382,$attr383,msg,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$sub113,$sub117,$sub116,$sub115,$sub114,$sub119,$sub118,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$assign3,to_real_number,to_imag_number,re_sign,re_have_dec,$and60,fill,im_grouped_digits,n_re_digits,$attr420,im_sign;
			tp = self['_type'];
			self['_get_locale'](tp);
			default_precision = 6;
			if ($p['bool']($m['op_eq'](self['_align'], '='))) {
				msg = "'=' alignment flag is not allowed in complex format specifier";
				throw ($m['ValueError'](msg));
			}
			if ($p['bool']($m['op_eq'](self['_fill_char'], '0'))) {
				msg = 'Zero padding is not allowed in complex format specifier';
				throw ($m['ValueError'](msg));
			}
			if ($p['bool'](self['_alternate'])) {
				msg = 'Alternate form %s not allowed in complex format specifier';
				throw ($m['ValueError']((typeof ($mod7=msg)==typeof ($mod8=self['_alternate']) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$m['op_mod']($mod7,$mod8))));
			}
			skip_re = 0;
			add_parens = 0;
			if ($p['bool']($m['op_eq'](tp, '\x00'))) {
				tp = 'g';
				default_precision = 12;
				if ($p['bool'](($p['bool']($and59=$m['op_eq'](w_complex['realval'], 0))?$m['op_eq']((typeof copysign == "undefined"?$m['copysign']:copysign)(1.0, w_complex['realval']), 1.0):$and59))) {
					skip_re = 1;
				}
				else {
					add_parens = 1;
				}
			}
			if ($p['bool']($m['op_eq'](tp, 'n'))) {
				tp = 'g';
			}
			if ($p['bool']($m['op_eq'](self['_precision'], (typeof ($usub25=1)=='number'?
				-$usub25:
				$m['op_usub']($usub25))))) {
				self['_precision'] = default_precision;
			}
			re_num = (typeof formatd == "undefined"?$m['formatd']:formatd)(w_complex['realval'], tp, self['_precision']);
			im_num = (typeof formatd == "undefined"?$m['formatd']:formatd)(w_complex['imagval'], tp, self['_precision']);
			n_re_digits = $m['len'](re_num);
			n_im_digits = $m['len'](im_num);
			to_real_number = 0;
			to_imag_number = 0;
			$assign3 = '';
			re_sign = $assign3;
			im_sign = $assign3;
			if ($p['bool']($m['op_eq'](re_num['__getitem__'](0), '-'))) {
				re_sign = '-';
				to_real_number = 1;
				n_re_digits = $m['__op_sub']($sub113=n_re_digits,$sub114=1);
			}
			if ($p['bool']($m['op_eq'](im_num['__getitem__'](0), '-'))) {
				im_sign = '-';
				to_imag_number = 1;
				n_im_digits = $m['__op_sub']($sub115=n_im_digits,$sub116=1);
			}
			tmp_fill_char = self['_fill_char'];
			tmp_align = self['_align'];
			tmp_width = self['_width'];
			self['_fill_char'] = '\x00';
			self['_align'] = '<';
			self['_width'] = (typeof ($usub26=1)=='number'?
				-$usub26:
				$m['op_usub']($usub26));
			var $tupleassign14 = $p['__ass_unpack'](self['_parse_number'](re_num, to_real_number), 2, null);
			re_have_dec = $tupleassign14[0];
			re_remainder_ptr = $tupleassign14[1];
			var $tupleassign15 = $p['__ass_unpack'](self['_parse_number'](im_num, to_imag_number), 2, null);
			im_have_dec = $tupleassign15[0];
			im_remainder_ptr = $tupleassign15[1];
			re_n_remainder = $m['__op_sub']($sub117=$m['len'](re_num),$sub118=re_remainder_ptr);
			im_n_remainder = $m['__op_sub']($sub119=$m['len'](im_num),$sub120=im_remainder_ptr);
			re_spec = self['_calc_num_width'](0, re_sign, to_real_number, n_re_digits, re_n_remainder, re_have_dec, re_num);
			re_grouped_digits = self['_grouped_digits'];
			if ($p['bool'](!$p['bool'](skip_re))) {
				self['_sign'] = '+';
			}
			im_spec = self['_calc_num_width'](0, im_sign, to_imag_number, n_im_digits, im_n_remainder, im_have_dec, im_num);
			im_grouped_digits = self['_grouped_digits'];
			if ($p['bool'](skip_re)) {
				re_spec['n_total'] = 0;
			}
			self['_align'] = tmp_align;
			self['_width'] = tmp_width;
			self['_fill_char'] = tmp_fill_char;
			self['_calc_padding'](self['empty'], $m['__op_add']($add181=$m['__op_add']($add179=$m['__op_add']($add177=re_spec['n_total'],$add178=im_spec['n_total']),$add180=1),$add182=(typeof ($mul13=add_parens)==typeof ($mul14=2) && typeof $mul13=='number'?
				$mul13*$mul14:
				$m['op_mul']($mul13,$mul14))));
			out = self['_builder']();
			fill = self['_fill_char'];
			if ($p['bool']($m['op_eq'](fill, '\x00'))) {
				fill = self['_lit'](' ')['__getitem__'](0);
			}
			out['append_multiple_char'](fill, self['_left_pad']);
			if ($p['bool'](add_parens)) {
				out['append'](self['_lit']('(')['__getitem__'](0));
			}
			if ($p['bool'](!$p['bool'](skip_re))) {
				out['append'](self['_fill_number'](re_spec, re_num, to_real_number, 0, fill, re_remainder_ptr, false, re_grouped_digits));
			}
			out['append'](self['_fill_number'](im_spec, im_num, to_imag_number, 0, fill, im_remainder_ptr, false, im_grouped_digits));
			out['append'](self['_lit']('j')['__getitem__'](0));
			if ($p['bool'](add_parens)) {
				out['append'](self['_lit'](')')['__getitem__'](0));
			}
			out['append_multiple_char'](fill, self['_right_pad']);
			return out['build']();
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['_format_complex'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_complex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
			}
			var $attr421,$or73,$or72,$or71,$or67,$or68,$or69,$or70,tp,$attr422,$or74;
			if ($p['bool'](self['_parse_spec']('\x00', '>'))) {
				return self['space']['str'](w_complex);
			}
			tp = self['_type'];
			if ($p['bool'](($p['bool']($or67=$m['op_eq'](tp, '\x00'))?$or67:($p['bool']($or68=$m['op_eq'](tp, 'e'))?$or68:($p['bool']($or69=$m['op_eq'](tp, 'E'))?$or69:($p['bool']($or70=$m['op_eq'](tp, 'f'))?$or70:($p['bool']($or71=$m['op_eq'](tp, 'F'))?$or71:($p['bool']($or72=$m['op_eq'](tp, 'g'))?$or72:($p['bool']($or73=$m['op_eq'](tp, 'G'))?$or73:$m['op_eq'](tp, 'n')))))))))) {
				return self['_format_complex'](w_complex);
			}
			self['_unknown_presentation']('complex');
			return null;
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['BaseFormatter']);
		return $pyjs_type('Formatter', $bases, $cls_definition);
	})();
	$m['StringFormatSpace'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjslib';
		$cls_definition['__md5__'] = 'c6ae281a312f180b86a04084ad76eafd';
		$method = $pyjs__bind_method2('format', function(w_obj, spec) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				spec = arguments[2];
			}
			var $and62,$and61,fmt;
			if ($p['bool'](($p['bool']($and61=$m['isinstance'](w_obj, $m['object']))?!$p['bool']($m['isinstance'](w_obj, $p['tuple']([$p['float_int'], $m['float'], $m['basestring']]))):$and61))) {
				if ($p['bool']($m['hasattr'](w_obj, '__format__'))) {
					return w_obj['__format__'](spec);
				}
			}
			if ($p['bool'](!$p['bool'](spec))) {
				return w_obj;
			}
			fmt = $m['Formatter'](self, spec);
			if ($p['bool']($m['isinstance'](w_obj, $m['basestring']))) {
				return fmt['format_string'](w_obj);
			}
			else if ($p['bool']($m['isinstance'](w_obj, $p['float_int']))) {
				return fmt['format_int_or_long'](w_obj, spec);
			}
			else if ($p['bool']($m['isinstance'](w_obj, $m['float']))) {
				return fmt['format_float'](w_obj);
			}
			if ($p['bool']($m['isinstance'](w_obj, $m['object']))) {
				if ($p['bool']($m['hasattr'](w_obj, '__str__'))) {
					return fmt['format_string'](w_obj['__str__']());
				}
			}
			$m['printFunc'](['type not implemented'], 1);
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['spec']]);
		$cls_definition['format'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringFormatSpace', $bases, $cls_definition);
	})();
	$m['DTSF_STR_PRECISION'] = 12;
	$m['DTSF_SIGN'] = 1;
	$m['DTSF_ADD_DOT_0'] = 2;
	$m['DTSF_ALT'] = 4;
	$m['DIST_FINITE'] = 1;
	$m['DIST_NAN'] = 2;
	$m['DIST_INFINITY'] = 3;
	$m['formatd'] = function(x, code, precision, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][5][1];
		var sign,$and64,$and63,$sub122,$sub123,alt,$sub121,$mod9,$sub124,fmt,$add188,$add183,$add185,$add184,$add187,$add186,$mod10,$iter34_nextval,c,$iter34_test,idx,$iter34_array,$iter34_idx,s,$iter34_iter,$iter34_type;
		if ($p['bool']((flags)&($m['DTSF_ALT']))) {
			alt = '#';
		}
		else {
			alt = '';
		}
		if ($p['bool']($m['op_eq'](code, 'r'))) {
			fmt = '%r';
		}
		else {
			fmt = $m['sprintf']('%%%s.%d%s', $p['tuple']([alt, precision, code]));
		}
		s = (typeof ($mod9=fmt)==typeof ($mod10=$p['tuple']([x])) && typeof $mod9=='number'?
			(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
			$m['op_mod']($mod9,$mod10));
		if ($p['bool']((flags)&($m['DTSF_ADD_DOT_0']))) {
			idx = $m['len'](s);
			$iter34_iter = $m['range']($m['len'](s), 0, (typeof ($usub27=1)=='number'?
				-$usub27:
				$m['op_usub']($usub27)));
			$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
			while ($iter34_test = typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
				idx = $iter34_nextval['$nextval'];
				c = s['__getitem__']($m['__op_sub']($sub121=idx,$sub122=1));
				if ($p['bool']('eE'['__contains__'](c))) {
					if ($p['bool']('+-'['__contains__'](s['__getitem__'](idx)))) {
						idx = $m['__op_add']($add183=idx,$add184=1);
					}
					s = $m['__op_add']($add185=$p['__getslice'](s, 0, idx),$add186=$m['sprintf']('%02d', $p['float_int']($p['__getslice'](s, idx, null))));
					break;
				}
				if ($p['bool']('.eE'['__contains__'](c))) {
					break;
				}
			}
			if (!$iter34_test) {
				if ($p['bool'](($m['cmp']($m['len'](s), precision) == -1))) {
					s = $m['__op_add']($add187=s,$add188='.0');
				}
				else {
					sign = '+';
					if ($p['bool'](($m['cmp'](x, 1) == -1))) {
						sign = '-';
					}
					s = $m['sprintf']('%s.%se%s%02d', $p['tuple']([s['__getitem__'](0), $p['__getslice'](s, 1, null), sign, $m['__op_sub']($sub123=$m['len'](s),$sub124=1)]));
				}
			}
		}
		else if ($p['bool'](($p['bool']($and63=$m['op_eq'](code, 'r'))?s['endswith']('.0'):$and63))) {
			s = $p['__getslice'](s, 0, (typeof ($usub28=2)=='number'?
				-$usub28:
				$m['op_usub']($usub28)));
		}
		return s;
	};
	$m['formatd']['__name__'] = 'formatd';

	$m['formatd']['__bind_type__'] = 0;
	$m['formatd']['__args__'] = [null,null,['x'],['code'],['precision'],['flags', 0]];
	$m['numeric_formatting'] = function() {

		return $p['tuple'](['.', ',', '\x03\x00']);
	};
	$m['numeric_formatting']['__name__'] = 'numeric_formatting';

	$m['numeric_formatting']['__bind_type__'] = 0;
	$m['numeric_formatting']['__args__'] = [null,null];
	$m['_string_format'] = function(s, args, kw) {
		if (typeof args == 'undefined') args=arguments['callee']['__args__'][3][1];
		if (typeof kw == 'undefined') kw=arguments['callee']['__args__'][4][1];
		var space,res,fm;
		space = $m['StringFormatSpace']();
		fm = $m['TemplateFormatter'](space, s);
		res = fm['build'](args, kw);
		return res;
	};
	$m['_string_format']['__name__'] = '_string_format';

	$m['_string_format']['__bind_type__'] = 0;
	$m['_string_format']['__args__'] = [null,null,['s'],['args', $p['list']([])],['kw', $p['dict']([])]];
	$m['format'] = function(val, spec) {
		if (typeof spec == 'undefined') spec=arguments['callee']['__args__'][3][1];
		var args,space;
		args = $p['list']([val]);
		space = $m['StringFormatSpace']();
		return $m['str'](space['format'](val, spec));
	};
	$m['format']['__name__'] = 'format';

	$m['format']['__bind_type__'] = 0;
	$m['format']['__args__'] = [null,null,['val'],['spec', '']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {

    if (typeof iter == 'undefined') {
        throw $m['TypeError']("iter is undefined");
    }
    var it = {};
    it['$iter'] = iter;
    it['$loopvar'] = 0;
    it['$reuse_tuple'] = reuse_tuple;
    if (typeof (it['$arr'] = iter['__array']) != 'undefined') {
        it['$gentype'] = 0;
    } else {
        it['$iter'] = iter['__iter__']();
        it['$gentype'] = typeof (it['$arr'] = iter['__array']) != 'undefined'? 0 : (typeof iter['$genfunc'] == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it['$iter'];
    it['$nextval'] = it['$gentype']?(it['$gentype'] > 0?
        iterator['next'](true,it['$reuse_tuple']):$p['wrapped_next'](iterator)
                              ) : it['$arr'][it['$loopvar']++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter['next']();
    } catch (e) {
        if ($m['isinstance'](e, $m['StopIteration'])) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['__ass_unpack'] = function (data, count, extended) {
    if (data === null) {
        throw $m['TypeError']("'NoneType' is not iterable");
    }
    if (data['constructor'] === Array) {
    } else if (typeof data['__iter__'] == 'function') {
        if (typeof data['__array'] == 'object') {
            data = data['__array'];
        } else {
            var iter = data['__iter__']();
            if (typeof iter['__array'] == 'object') {
                data = iter['__array'];
            }
            data = [];
            var item, i = 0;
            if (typeof iter['$genfunc'] == 'function') {
                while (typeof (item=iter['next'](true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter['next']();
                    }
                }
                catch (e) {
                    if (e['__name__'] != 'StopIteration') throw e;
                }
            }
        }
    } else {
        throw $m['TypeError']("'" + $m['repr'](data) + "' is not iterable");
    }
    var res = new Array();
    if (typeof extended == 'undefined' || extended === null)
    {
        if (data['length'] != count)
        if (data['length'] > count)
            throw $m['ValueError']("too many values to unpack");
        else
            throw $m['ValueError']("need more than "+data['length']+" values to unpack");
        return data;
    }
    else
    {
        throw $m['NotImplemented']("Extended unpacking is not implemented");
    }
};
	$m['__with'] = function(mgr, func) {
		var $attr423,$attr424,value,$pyjs_try_err,exit,exc;
		exit = $m['type'](mgr)['__exit__'];
		value = $m['type'](mgr)['__enter__'](mgr);
		exc = true;
		try {
			try {
				func(value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					exc = false;
					if ($p['bool'](!$p['bool']($pyjs_kwargs_call(null, exit, $m['sys']['exc_info'](), null, [{}, mgr])))) {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		} finally {
			if ($p['bool'](exc)) {
				exit(mgr, null, null, null);
			}
		}
		return null;
	};
	$m['__with']['__name__'] = '__with';

	$m['__with']['__bind_type__'] = 0;
	$m['__with']['__args__'] = [null,null,['mgr'],['func']];
	$m['init']();
	$m['Ellipsis'] = $m['EllipsisType']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments['callee']['__args__'][3][1];
		if (typeof locals == 'undefined') locals=arguments['callee']['__args__'][4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments['callee']['__args__'][5][1];
		if (typeof level == 'undefined') level=arguments['callee']['__args__'][6][1];
		var $add190,module,$add189,$and66,$and65;
		module = $m['___import___'](name, null);
		if ($p['bool'](($p['bool']($and65=!$p['bool']((module === null)))?$m['hasattr'](module, '__was_initialized__'):$and65))) {
			return module;
		}
		throw ($m['ImportError']($m['__op_add']($add189='No module named ',$add190=name)));
		return null;
	};
	$m['__import__']['__name__'] = '__import__';

	$m['__import__']['__bind_type__'] = 0;
	$m['__import__']['__args__'] = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub29=1)=='number'?
		-$usub29:
		$m['op_usub']($usub29))]];
	$m['sys'] = $m['___import___']('sys', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys']
*/


/* start module: sys */
$pyjs['loaded_modules']['sys'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sys']['__was_initialized__']) return $pyjs['loaded_modules']['sys'];
	var $m = sys = $pyjs['loaded_modules']['sys'];
	$m['__repr__'] = function() { return '<module: sys>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	$m['__name__'] = __mod_name__;


	$m['overrides'] = null;
	$m['loadpath'] = null;
	$m['stacktrace'] = null;
	$m['appname'] = null;
	$m['version_info'] = $p['tuple']([2, 7, 2, 'pyjamas', 0]);
	$m['subversion'] = $p['tuple'](['Pyjamas', '', '']);
	$m['path'] = $p['list']([]);
	$m['argv'] = $p['list']([]);
	$m['platform'] = $pyjs["platform"];
	$m['byteorder'] = 'little';
	$m['maxint'] = 2147483647;
	$m['setloadpath'] = function(lp) {

		$m['loadpath'] = lp;
		return null;
	};
	$m['setloadpath']['__name__'] = 'setloadpath';

	$m['setloadpath']['__bind_type__'] = 0;
	$m['setloadpath']['__args__'] = [null,null,['lp']];
	$m['setappname'] = function(an) {

		$m['appname'] = an;
		return null;
	};
	$m['setappname']['__name__'] = 'setappname';

	$m['setappname']['__bind_type__'] = 0;
	$m['setappname']['__args__'] = [null,null,['an']];
	$m['getloadpath'] = function() {

		return $m['loadpath'];
	};
	$m['getloadpath']['__name__'] = 'getloadpath';

	$m['getloadpath']['__bind_type__'] = 0;
	$m['getloadpath']['__args__'] = [null,null];
	$m['addoverride'] = function(module_name, path) {

		$m['overrides']['__setitem__'](module_name, path);
		return null;
	};
	$m['addoverride']['__name__'] = 'addoverride';

	$m['addoverride']['__bind_type__'] = 0;
	$m['addoverride']['__args__'] = [null,null,['module_name'],['path']];
	$m['exc_info'] = function() {
		var le,$and1,$and2,start,$sub2,$sub1,tb,cls;
		le = $pyjs["__last_exception__"];
		if ($p['bool'](!$p['bool'](le))) {
			return $p['tuple']([null, null, null]);
		}
		if ($p['bool'](!$p['bool']($p['hasattr']($p['getattr'](le, 'error'), '__class__')))) {
			cls = null;
		}
		else {
			cls = $p['getattr']($p['getattr'](le, 'error'), '__class__');
		}
		tb = $pyjs["__last_exception_stack__"];
		if ($p['bool'](tb)) {
			start = $p['getattr'](tb, 'start');
			while ($p['bool'](($p['bool']($and1=tb)?($p['cmp'](start, 0) == 1):$and1))) {
				tb = $p['getattr'](tb, 'tb_next');
				start = $p['__op_sub']($sub1=start,$sub2=1);
			}
		}
		return $p['tuple']([cls, $p['getattr'](le, 'error'), tb]);
	};
	$m['exc_info']['__name__'] = 'exc_info';

	$m['exc_info']['__bind_type__'] = 0;
	$m['exc_info']['__args__'] = [null,null];
	$m['exc_clear'] = function() {

$pyjs["__last_exception_stack__"] = $pyjs["__last_exception__"] = null;
	};
	$m['exc_clear']['__name__'] = 'exc_clear';

	$m['exc_clear']['__bind_type__'] = 0;
	$m['exc_clear']['__args__'] = [null,null];
$m['_exception_from_trackstack'] = function (trackstack, start) {
    if (typeof start == 'undefined') {
      start = 0;
    }
    var exception_stack = null;
    var top = null;
    for (var needle=0; needle < $pyjs['trackstack']['length']; needle++) {
        var t = new Object();
        for (var p in $pyjs['trackstack'][needle]) {
            t[p] = $pyjs['trackstack'][needle][p];
        }
        if (typeof $pyjs['loaded_modules'][t['module']]['__track_lines__'] != 'undefined') {
          var f_globals = $p['dict']();
          for (var name in $pyjs['loaded_modules'][t['module']]) {
            f_globals['__setitem__'](name, $pyjs['loaded_modules'][t['module']][name]);
          }
          t['tb_frame'] = {'f_globals': f_globals};
        }
        if (exception_stack == null) {
            exception_stack = top = t;
        } else {
          top['tb_next'] = t;
        }
        top = t;
    }
    top['tb_next'] = null;
    exception_stack['start'] = start;
    return exception_stack;
};
$m['save_exception_stack'] = function (start) {
    if ($pyjs['__active_exception_stack__']) {
        $pyjs['__active_exception_stack__']['start'] = start;
        return $pyjs['__active_exception_stack__'];
    }
    $pyjs['__active_exception_stack__'] = $m['_exception_from_trackstack']($pyjs['trackstack'], start);
    return $pyjs['__active_exception_stack__'];
};
	$m['trackstacklist'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments['callee']['__args__'][2][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][3][1];
		var $and3,$and4,stackstrings,$add2,$sub3,$add1,msg,$sub4;
		if ($p['bool']((stack === null))) {
			stack = $pyjs["__active_exception_stack__"];
		}
		else {
			if ($p['bool'](stack instanceof Array)) {
				stack = (typeof _exception_from_trackstack == "undefined"?$m['_exception_from_trackstack']:_exception_from_trackstack)(stack);
			}
		}
		if ($p['bool']((stack === null))) {
			return '';
		}
		stackstrings = $p['list']([]);
		msg = '';
		if ($p['bool']((limit === null))) {
			limit = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		while ($p['bool'](($p['bool']($and3=stack)?limit:$and3))) {
msg = $pyjs['loaded_modules'][stack['module']]['__track_lines__'][stack['lineno']];
if (typeof msg == 'undefined') msg = null;
			if ($p['bool'](msg)) {
				stackstrings['append']($p['__op_add']($add1=msg,$add2='\n'));
			}
			else {
				stackstrings['append']($p['sprintf']('%s.py, line %d\n', $p['tuple']([$p['getattr'](stack, 'module'), $p['getattr'](stack, 'lineno')])));
			}
			stack = $p['getattr'](stack, 'tb_next');
			limit = $p['__op_sub']($sub3=limit,$sub4=1);
		}
		return stackstrings;
	};
	$m['trackstacklist']['__name__'] = 'trackstacklist';

	$m['trackstacklist']['__bind_type__'] = 0;
	$m['trackstacklist']['__args__'] = [null,null,['stack', null],['limit', null]];
	$m['trackstackstr'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments['callee']['__args__'][2][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][3][1];
		var stackstrings;
		stackstrings = $pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{'limit':limit}, stack]);
		return ''['join'](stackstrings);
	};
	$m['trackstackstr']['__name__'] = 'trackstackstr';

	$m['trackstackstr']['__bind_type__'] = 0;
	$m['trackstackstr']['__args__'] = [null,null,['stack', null],['limit', null]];
	$m['_get_traceback_list'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments['callee']['__args__'][3][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][4][1];
		var name,$pyjs_try_err,msg;
		name = $p['getattr']($p['getattr'](err, '__class__', null), '__name__', 'Unknown exception');
		msg = $p['list']([$p['sprintf']('%s: %s\n', $p['tuple']([name, err])), 'Traceback:\n']);
		try {
			msg['extend']($pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{'limit':limit}, tb]));
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
			}
		}
		return msg;
	};
	$m['_get_traceback_list']['__name__'] = '_get_traceback_list';

	$m['_get_traceback_list']['__bind_type__'] = 0;
	$m['_get_traceback_list']['__args__'] = [null,null,['err'],['tb', null],['limit', null]];
	$m['_get_traceback'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments['callee']['__args__'][3][1];
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][4][1];

		return ''['join']($pyjs_kwargs_call(null, $m['_get_traceback_list'], null, null, [{'limit':limit}, err, tb]));
	};
	$m['_get_traceback']['__name__'] = '_get_traceback';

	$m['_get_traceback']['__bind_type__'] = 0;
	$m['_get_traceback']['__args__'] = [null,null,['err'],['tb', null],['limit', null]];
	$m['exit'] = function(val) {
		if (typeof val == 'undefined') val=arguments['callee']['__args__'][2][1];

		throw ($p['SystemExit'](val));
		return null;
	};
	$m['exit']['__name__'] = 'exit';

	$m['exit']['__bind_type__'] = 0;
	$m['exit']['__args__'] = [null,null,['val', null]];
	$m['_StdStream'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'sys';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['content'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('flush', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var content;
			content = $p['getattr'](self, 'content');
$p['_print_to_console'](content)
			self['content'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$method = $pyjs__bind_method2('write', function(output) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				output = arguments[1];
			}
			var $add4,$add3;
			self['content'] = $p['__op_add']($add3=$p['getattr'](self, 'content'),$add4=output);
			if ($p['bool'](self['content']['endswith']('\n'))) {
				self['flush']();
			}
			return null;
		}
	, 1, [null,null,['self'],['output']]);
		$cls_definition['write'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_StdStream', $p['tuple']($bases), $data);
	})();
	$m['stdin'] = null;
	$m['stdout'] = null;
	$m['stderr'] = null;
	$m['sys_init'] = function() {

		$m['stdout'] = $m['_StdStream']();
		$m['stderr'] = $m['_StdStream']();
		return null;
	};
	$m['sys_init']['__name__'] = 'sys_init';

	$m['sys_init']['__bind_type__'] = 0;
	$m['sys_init']['__args__'] = [null,null];
	$m['sys_init']();
	return this;
}; /* end sys */


/* end module: sys */

/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	var $sub2,$sub1;

	$m['math'] = $p['___import___']('math', null);
	$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
	$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
	if ($p['bool'](($p['cmp']($m['altzone'], $m['timezone']) == 1))) {
		$m['d'] = $m['timezone'];
		$m['timezone'] = $m['altzone'];
		$m['altzone'] = $m['d'];
	}
	$m['_dst'] = $p['__op_sub']($sub1=$m['timezone'],$sub2=$m['altzone']);
	$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
	$m['d'] = $p['str']($m['d']['toLocaleString']())['$$split']()['__getitem__']((typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1)));
	if ($p['bool']($p['op_eq']($m['d']['__getitem__'](0), '('))) {
		$m['d'] = $p['__getslice']($m['d'], 1, (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)));
	}
	$m['tzname'] = $p['tuple']([$m['d'], null]);
	delete $m['d'];
	$m['__c__days'] = $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
	$m['__c__months'] = $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
	$m['time'] = function() {

		return $p['float'](new Date()['getTime']() / 1000.0);
	};
	$m['time']['__name__'] = 'time';

	$m['time']['__bind_type__'] = 0;
	$m['time']['__args__'] = [null,null];
	$m['struct_time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'time';
		$cls_definition['n_fields'] = 9;
		$cls_definition['n_sequence_fields'] = 9;
		$cls_definition['n_unnamed_fields'] = 0;
		$cls_definition['tm_year'] = null;
		$cls_definition['tm_mon'] = null;
		$cls_definition['tm_mday'] = null;
		$cls_definition['tm_hour'] = null;
		$cls_definition['tm_min'] = null;
		$cls_definition['tm_sec'] = null;
		$cls_definition['tm_wday'] = null;
		$cls_definition['tm_yday'] = null;
		$cls_definition['tm_isdst'] = null;
		$method = $pyjs__bind_method2('__init__', function(ttuple) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ttuple = arguments[1];
			}
			if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];

			if ($p['bool'](!$p['bool']((ttuple === null)))) {
				self['tm_year'] = ttuple['__getitem__'](0);
				self['tm_mon'] = ttuple['__getitem__'](1);
				self['tm_mday'] = ttuple['__getitem__'](2);
				self['tm_hour'] = ttuple['__getitem__'](3);
				self['tm_min'] = ttuple['__getitem__'](4);
				self['tm_sec'] = ttuple['__getitem__'](5);
				self['tm_wday'] = ttuple['__getitem__'](6);
				self['tm_yday'] = ttuple['__getitem__'](7);
				self['tm_isdst'] = ttuple['__getitem__'](8);
			}
			return null;
		}
	, 1, [null,null,['self'],['ttuple', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var t;
			t = $p['tuple']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
			return t['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(idx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}

			return $p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')])['__getitem__'](idx);
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}

			return $p['__getslice']($p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]), lower, upper);
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
	})();
	$m['gmtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $add2,$sub3,$div1,$div2,startOfYear,$add6,$add5,tm_year,$add3,tm,$assign1,$add4,$mod2,date,$mod1,$add1,$div3,$div4,$sub4;
		if ($p['bool']((t === null))) {
			t = $m['time']();
		}
		date = new Date(t*1000);
		tm = $m['struct_time']();
		$assign1 = $p['float_int'](date['getUTCFullYear']());
		tm_year = $assign1;
		tm['tm_year'] = $assign1;
		tm['tm_mon'] = $p['__op_add']($add1=$p['float_int'](date['getUTCMonth']()),$add2=1);
		tm['tm_mday'] = $p['float_int'](date['getUTCDate']());
		tm['tm_hour'] = $p['float_int'](date['getUTCHours']());
		tm['tm_min'] = $p['float_int'](date['getUTCMinutes']());
		tm['tm_sec'] = $p['float_int'](date['getUTCSeconds']());
		tm['tm_wday'] = (typeof ($mod1=$p['__op_add']($add3=$p['float_int'](date['getUTCDay']()),$add4=6))==typeof ($mod2=7) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		tm['tm_isdst'] = 0;
		startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
		tm['tm_yday'] = $p['__op_add']($add5=1,$add6=$p['float_int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=1000) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))))==typeof ($div4=86400) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4))));
		return tm;
	};
	$m['gmtime']['__name__'] = 'gmtime';

	$m['gmtime']['__bind_type__'] = 0;
	$m['gmtime']['__args__'] = [null,null,['t', null]];
	$m['localtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $mod4,$mod3,$sub8,$mul3,$div7,tm,tm_mon,startOfYear,$div5,$sub7,$sub6,$sub5,startOfDay,tm_year,$div8,$add10,$add11,$add12,$add13,date,dt,$mul4,$div6,$mul2,$mul1,dateOffset,$add14,startOfYearOffset,tm_mday,$assign4,$add7,$assign3,$assign2,$add8,$add9;
		if ($p['bool']((t === null))) {
			t = $m['time']();
		}
		date = new Date(t*1000);
		dateOffset = date['getTimezoneOffset']();
		tm = $m['struct_time']();
		$assign2 = $p['float_int'](date['getFullYear']());
		tm_year = $assign2;
		tm['tm_year'] = $assign2;
		$assign3 = $p['__op_add']($add7=$p['float_int'](date['getMonth']()),$add8=1);
		tm_mon = $assign3;
		tm['tm_mon'] = $assign3;
		$assign4 = $p['float_int'](date['getDate']());
		tm_mday = $assign4;
		tm['tm_mday'] = $assign4;
		tm['tm_hour'] = $p['float_int'](date['getHours']());
		tm['tm_min'] = $p['float_int'](date['getMinutes']());
		tm['tm_sec'] = $p['float_int'](date['getSeconds']());
		tm['tm_wday'] = (typeof ($mod3=$p['__op_add']($add9=$p['float_int'](date['getDay']()),$add10=6))==typeof ($mod4=7) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4));
		tm['tm_isdst'] = ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))))? (0) : (1));
		startOfYear = new Date(tm_year,0,1);
		startOfYearOffset = startOfYear['getTimezoneOffset']();
		startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
		dt = (typeof ($div5=$p['float']($p['__op_sub']($sub5=startOfDay['getTime'](),$sub6=startOfYear['getTime']())))==typeof ($div6=1000) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6));
		dt = $p['__op_add']($add11=dt,$add12=(typeof ($mul3=60)==typeof ($mul4=$p['__op_sub']($sub7=startOfYearOffset,$sub8=dateOffset)) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)));
		tm['tm_yday'] = $p['__op_add']($add13=1,$add14=$p['float_int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8))));
		return tm;
	};
	$m['localtime']['__name__'] = 'localtime';

	$m['localtime']['__bind_type__'] = 0;
	$m['localtime']['__args__'] = [null,null,['t', null]];
	$m['mktime'] = function(t) {
		var $add16,utc,tm_sec,tm_hour,tm_mday,$sub10,$div10,$div11,$div12,ts,tm_year,$add15,$sub9,$div9,tm_mon,$sub12,date,$sub11,tm_min;
		tm_year = t['__getitem__'](0);
		tm_mon = $p['__op_sub']($sub9=t['__getitem__'](1),$sub10=1);
		tm_mday = t['__getitem__'](2);
		tm_hour = t['__getitem__'](3);
		tm_min = t['__getitem__'](4);
		tm_sec = t['__getitem__'](5);
		date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
		utc = (typeof ($div9=Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))==typeof ($div10=1000) && typeof $div9=='number' && $div10 !== 0?
			$div9/$div10:
			$p['op_div']($div9,$div10));
		ts = (typeof ($div11=date['getTime']())==typeof ($div12=1000) && typeof $div11=='number' && $div12 !== 0?
			$div11/$div12:
			$p['op_div']($div11,$div12));
		if ($p['bool']($p['op_eq'](t['__getitem__'](8), 0))) {
			if ($p['bool']($p['op_eq']($p['__op_sub']($sub11=ts,$sub12=utc), $m['timezone']))) {
				return ts;
			}
			return $p['__op_add']($add15=ts,$add16=$m['_dst']);
		}
		return ts;
	};
	$m['mktime']['__name__'] = 'mktime';

	$m['mktime']['__bind_type__'] = 0;
	$m['mktime']['__args__'] = [null,null,['t']];
	$m['strftime'] = function(fmt, t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
		var firstMonday,tm_hour,tm_sec,tm_wday,$mod5,$mod6,result,remainder,$div14,$add20,$add22,$div13,tm_mon,startOfYear,tm_min,format,$sub13,$and1,$and2,$sub16,$sub15,$sub14,tm_year,$add17,tm_yday,date,firstWeek,$add18,$add19,tm_mday,weekNo,$add21,re_pct;
		if ($p['bool']((t === null))) {
			t = $m['localtime']();
		}
		else {
			if ($p['bool'](($p['bool']($and1=!$p['bool']($p['isinstance'](t, $m['struct_time'])))?!$p['op_eq']($p['len'](t), 9):$and1))) {
				throw ($p['TypeError']('argument must be 9-item sequence, not float'));
			}
		}
		tm_year = t['__getitem__'](0);
		tm_mon = t['__getitem__'](1);
		tm_mday = t['__getitem__'](2);
		tm_hour = t['__getitem__'](3);
		tm_min = t['__getitem__'](4);
		tm_sec = t['__getitem__'](5);
		tm_wday = t['__getitem__'](6);
		tm_yday = t['__getitem__'](7);
		date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
		startOfYear = new Date(tm_year,0,1);
		firstMonday = $p['__op_add']($add19=$p['__op_sub']($sub13=1,$sub14=(typeof ($mod5=$p['__op_add']($add17=startOfYear['getDay'](),$add18=6))==typeof ($mod6=7) && typeof $mod5=='number'?
			(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
			$p['op_mod']($mod5,$mod6))),$add20=7);
		firstWeek = new Date(tm_year,0,firstMonday);
		weekNo = $p['__op_sub']($sub15=date['getTime'](),$sub16=firstWeek['getTime']());
		if ($p['bool'](($p['cmp'](weekNo, 0) == -1))) {
			weekNo = 0;
		}
		else {
			weekNo = $p['__op_add']($add21=1,$add22=$p['float_int']((typeof ($div13=weekNo)==typeof ($div14=604800000) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))));
		}
		format = function(c) {
			var $sub18,$mod11,$mod10,$mod12,$add25,$add23,$sub17,$add24,$add26,$mod7,$mod9,$mod8;
			if ($p['bool']($p['op_eq'](c, '%'))) {
				return '%';
			}
			else if ($p['bool']($p['op_eq'](c, 'a'))) {
				return $p['__getslice'](format('A'), 0, 3);
			}
			else if ($p['bool']($p['op_eq'](c, 'A'))) {
				return $m['__c__days']['__getitem__'](format('w'));
			}
			else if ($p['bool']($p['op_eq'](c, 'b'))) {
				return $p['__getslice'](format('B'), 0, 3);
			}
			else if ($p['bool']($p['op_eq'](c, 'B'))) {
				return $m['__c__months']['__getitem__']($p['__op_sub']($sub17=tm_mon,$sub18=1));
			}
			else if ($p['bool']($p['op_eq'](c, 'c'))) {
				return date['toLocaleString']();
			}
			else if ($p['bool']($p['op_eq'](c, 'd'))) {
				return $p['sprintf']('%02d', tm_mday);
			}
			else if ($p['bool']($p['op_eq'](c, 'H'))) {
				return $p['sprintf']('%02d', tm_hour);
			}
			else if ($p['bool']($p['op_eq'](c, 'I'))) {
				return $p['sprintf']('%02d', (typeof ($mod7=tm_hour)==typeof ($mod8=12) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)));
			}
			else if ($p['bool']($p['op_eq'](c, 'j'))) {
				return $p['sprintf']('%03d', tm_yday);
			}
			else if ($p['bool']($p['op_eq'](c, 'm'))) {
				return $p['sprintf']('%02d', tm_mon);
			}
			else if ($p['bool']($p['op_eq'](c, 'M'))) {
				return $p['sprintf']('%02d', tm_min);
			}
			else if ($p['bool']($p['op_eq'](c, 'p'))) {
				if ($p['bool'](($p['cmp'](tm_hour, 12) == -1))) {
					return 'AM';
				}
				return 'PM';
			}
			else if ($p['bool']($p['op_eq'](c, 'S'))) {
				return $p['sprintf']('%02d', tm_sec);
			}
			else if ($p['bool']($p['op_eq'](c, 'U'))) {
				throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
			}
			else if ($p['bool']($p['op_eq'](c, 'w'))) {
				return $p['sprintf']('%d', (typeof ($mod9=$p['__op_add']($add23=tm_wday,$add24=1))==typeof ($mod10=7) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)));
			}
			else if ($p['bool']($p['op_eq'](c, 'W'))) {
				return $p['sprintf']('%d', weekNo);
			}
			else if ($p['bool']($p['op_eq'](c, 'x'))) {
				return $p['sprintf']('%s', date['toLocaleDateString']());
			}
			else if ($p['bool']($p['op_eq'](c, 'X'))) {
				return $p['sprintf']('%s', date['toLocaleTimeString']());
			}
			else if ($p['bool']($p['op_eq'](c, 'y'))) {
				return $p['sprintf']('%02d', (typeof ($mod11=tm_year)==typeof ($mod12=100) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)));
			}
			else if ($p['bool']($p['op_eq'](c, 'Y'))) {
				return $p['sprintf']('%04d', tm_year);
			}
			else if ($p['bool']($p['op_eq'](c, 'Z'))) {
				throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
			}
			return $p['__op_add']($add25='%',$add26=c);
		};
		format['__name__'] = 'format';

		format['__bind_type__'] = 0;
		format['__args__'] = [null,null,['c']];
		result = '';
		remainder = fmt;
		re_pct = /([^%]*)%(.)(.*)/;
var a, fmtChar;
		while ($p['bool'](remainder)) {

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
		}
		return $p['str'](result);
	};
	$m['strftime']['__name__'] = 'strftime';

	$m['strftime']['__bind_type__'] = 0;
	$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
	$m['asctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $add28,$sub19,$mod13,$mod14,$sub20,$add27;
		if ($p['bool']((t === null))) {
			t = $m['localtime']();
		}
		return $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__']((typeof ($mod13=$p['__op_add']($add27=t['__getitem__'](6),$add28=1))==typeof ($mod14=7) && typeof $mod13=='number'?
			(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
			$p['op_mod']($mod13,$mod14))), 0, 3), $m['__c__months']['__getitem__']($p['__op_sub']($sub19=t['__getitem__'](1),$sub20=1)), t['__getitem__'](2), t['__getitem__'](3), t['__getitem__'](4), t['__getitem__'](5), t['__getitem__'](0)]));
	};
	$m['asctime']['__name__'] = 'asctime';

	$m['asctime']['__bind_type__'] = 0;
	$m['asctime']['__args__'] = [null,null,['t', null]];
	$m['ctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

		return $m['asctime']($m['localtime'](t));
	};
	$m['ctime']['__name__'] = 'ctime';

	$m['ctime']['__bind_type__'] = 0;
	$m['ctime']['__args__'] = [null,null,['t', null]];

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

	$m['_strptime'] = function(datestring, format) {
		var $pyjs_try_err;
		try {
			return $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
			}
		}
		return null;
	};
	$m['_strptime']['__name__'] = '_strptime';

	$m['_strptime']['__bind_type__'] = 0;
	$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
	$m['strptime'] = function(datestring, format) {
		var tt,$pyjs_try_err;
		try {
			tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
			tt['tm_isdst'] = (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3));
			return tt;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
			}
		}
		return null;
	};
	$m['strptime']['__name__'] = 'strptime';

	$m['strptime']['__bind_type__'] = 0;
	$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/

/* start module: math */
$pyjs['loaded_modules']['math'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['math']['__was_initialized__']) return $pyjs['loaded_modules']['math'];
	var $m = $pyjs['loaded_modules']['math'];
	$m['__repr__'] = function() { return '<module: math>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	$m['__name__'] = __mod_name__;


	$m['ceil'] = function(x) {

		return $p['float'](Math['ceil'](x['valueOf']()));
	};
	$m['ceil']['__name__'] = 'ceil';

	$m['ceil']['__bind_type__'] = 0;
	$m['ceil']['__args__'] = [null,null,['x']];
	$m['fabs'] = function(x) {

		return $p['float'](Math['abs'](x['valueOf']()));
	};
	$m['fabs']['__name__'] = 'fabs';

	$m['fabs']['__bind_type__'] = 0;
	$m['fabs']['__args__'] = [null,null,['x']];
	$m['floor'] = function(x) {

		return $p['float'](Math['floor'](x['valueOf']()));
	};
	$m['floor']['__name__'] = 'floor';

	$m['floor']['__bind_type__'] = 0;
	$m['floor']['__args__'] = [null,null,['x']];
	$m['exp'] = function(x) {

		return $p['float'](Math['exp'](x['valueOf']()));
	};
	$m['exp']['__name__'] = 'exp';

	$m['exp']['__bind_type__'] = 0;
	$m['exp']['__args__'] = [null,null,['x']];
	$m['log'] = function(x, base) {
		if (typeof base == 'undefined') base=arguments['callee']['__args__'][3][1];

		if ($p['bool']((base === null))) {
			return $p['float'](Math['log'](x['valueOf']()));
		}
		return $p['float'](Math['log'](x['valueOf']()) / Math['log'](base['valueOf']()));
	};
	$m['log']['__name__'] = 'log';

	$m['log']['__bind_type__'] = 0;
	$m['log']['__args__'] = [null,null,['x'],['base', null]];
	$m['pow'] = function(x, y) {

		return $p['float'](Math['pow'](x['valueOf'](), y['valueOf']()));
	};
	$m['pow']['__name__'] = 'pow';

	$m['pow']['__bind_type__'] = 0;
	$m['pow']['__args__'] = [null,null,['x'],['y']];
	$m['sqrt'] = function(x) {

		return $p['float'](Math['sqrt'](x['valueOf']()));
	};
	$m['sqrt']['__name__'] = 'sqrt';

	$m['sqrt']['__bind_type__'] = 0;
	$m['sqrt']['__args__'] = [null,null,['x']];
	$m['cos'] = function(x) {

		return $p['float'](Math['cos'](x['valueOf']()));
	};
	$m['cos']['__name__'] = 'cos';

	$m['cos']['__bind_type__'] = 0;
	$m['cos']['__args__'] = [null,null,['x']];
	$m['sin'] = function(x) {

		return $p['float'](Math['sin'](x['valueOf']()));
	};
	$m['sin']['__name__'] = 'sin';

	$m['sin']['__bind_type__'] = 0;
	$m['sin']['__args__'] = [null,null,['x']];
	$m['tan'] = function(x) {

		return $p['float'](Math['tan'](x['valueOf']()));
	};
	$m['tan']['__name__'] = 'tan';

	$m['tan']['__bind_type__'] = 0;
	$m['tan']['__args__'] = [null,null,['x']];
	$m['acos'] = function(x) {

		return $p['float'](Math['acos'](x['valueOf']()));
	};
	$m['acos']['__name__'] = 'acos';

	$m['acos']['__bind_type__'] = 0;
	$m['acos']['__args__'] = [null,null,['x']];
	$m['asin'] = function(x) {

		return $p['float'](Math['asin'](x['valueOf']()));
	};
	$m['asin']['__name__'] = 'asin';

	$m['asin']['__bind_type__'] = 0;
	$m['asin']['__args__'] = [null,null,['x']];
	$m['atan'] = function(x) {

		return $p['float'](Math['atan'](x['valueOf']()));
	};
	$m['atan']['__name__'] = 'atan';

	$m['atan']['__bind_type__'] = 0;
	$m['atan']['__args__'] = [null,null,['x']];
	$m['atan2'] = function(x, y) {

		return $p['float'](Math['atan2'](x['valueOf'](), y['valueOf']()));
	};
	$m['atan2']['__name__'] = 'atan2';

	$m['atan2']['__bind_type__'] = 0;
	$m['atan2']['__args__'] = [null,null,['x'],['y']];
	$m['pi'] = $p['float'](Math['PI']);
	$m['e'] = $p['float'](Math['E']);
	$m['__log10__'] = $p['float'](Math['LN10']);
	$m['__log2__'] = $m['log'](2);
	$m['fsum'] = function(x) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$iter2_array;
		xx = function(){
			var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = $p['enumerate'](x);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
			i = $tupleassign1[0];
			v = $tupleassign1[1];
			$collcomp1['append']($p['tuple']([$m['fabs'](v), i]));
		}

	return $collcomp1;}();
		xx['sort']();
		sum = 0;
		$iter2_iter = xx;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			sum = $p['__op_add']($add1=sum,$add2=x['__getitem__'](i['__getitem__'](1)));
		}
		return sum;
	};
	$m['fsum']['__name__'] = 'fsum';

	$m['fsum']['__bind_type__'] = 0;
	$m['fsum']['__args__'] = [null,null,['x']];
	$m['frexp'] = function(x) {
		var e,$pow2,$pow1,m,$add3,$add4,$div3,$div2,$div1,$div4;
		if ($p['bool']($p['op_eq'](x, 0))) {
			return $p['tuple']([0.0, 0]);
		}
		e = $p['__op_add']($add3=$p['float_int']((typeof ($div1=$m['log']($p['abs'](x)))==typeof ($div2=$m['__log2__']) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))),$add4=1);
		m = (typeof ($div3=x)==typeof ($div4=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
			Math['pow']($pow1,$pow2):
			$p['op_pow']($pow1,$pow2))) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4));
		return $p['tuple']([m, e]);
	};
	$m['frexp']['__name__'] = 'frexp';

	$m['frexp']['__bind_type__'] = 0;
	$m['frexp']['__args__'] = [null,null,['x']];
	$m['ldexp'] = function(x, i) {
		var $pow4,$pow3,$mul2,$mul1;
		return (typeof ($mul1=x)==typeof ($mul2=(typeof ($pow3=2)==typeof ($pow4=i) && typeof $pow3=='number'?
			Math['pow']($pow3,$pow4):
			$p['op_pow']($pow3,$pow4))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2));
	};
	$m['ldexp']['__name__'] = 'ldexp';

	$m['ldexp']['__bind_type__'] = 0;
	$m['ldexp']['__args__'] = [null,null,['x'],['i']];
	$m['log10'] = function(arg) {
		var $div5,$div6;
		return (typeof ($div5=$m['log'](arg))==typeof ($div6=$m['__log10__']) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6));
	};
	$m['log10']['__name__'] = 'log10';

	$m['log10']['__bind_type__'] = 0;
	$m['log10']['__args__'] = [null,null,['arg']];
	$m['degrees'] = function(x) {
		var $div8,$mul4,$mul3,$div7;
		return (typeof ($div7=(typeof ($mul3=x)==typeof ($mul4=180) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)))==typeof ($div8=$m['pi']) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8));
	};
	$m['degrees']['__name__'] = 'degrees';

	$m['degrees']['__bind_type__'] = 0;
	$m['degrees']['__args__'] = [null,null,['x']];
	$m['radians'] = function(x) {
		var $mul5,$div9,$div10,$mul6;
		return (typeof ($div9=(typeof ($mul5=x)==typeof ($mul6=$m['pi']) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6)))==typeof ($div10=180) && typeof $div9=='number' && $div10 !== 0?
			$div9/$div10:
			$p['op_div']($div9,$div10));
	};
	$m['radians']['__name__'] = 'radians';

	$m['radians']['__bind_type__'] = 0;
	$m['radians']['__args__'] = [null,null,['x']];
	$m['hypot'] = function(x, y) {
		var $mul10,$div14,$add5,$div11,$div12,$div13,$mul7,$add6,$mul9,$mul8;
		x = $p['abs'](x);
		y = $p['abs'](y);
		var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['max'](x, y), $p['min'](x, y)]), 2, null);
		x = $tupleassign2[0];
		y = $tupleassign2[1];
		return (typeof ($mul9=x)==typeof ($mul10=$m['sqrt']($p['__op_add']($add5=1,$add6=(typeof ($mul7=(typeof ($div11=y)==typeof ($div12=x) && typeof $div11=='number' && $div12 !== 0?
			$div11/$div12:
			$p['op_div']($div11,$div12)))==typeof ($mul8=(typeof ($div13=y)==typeof ($div14=x) && typeof $div13=='number' && $div14 !== 0?
			$div13/$div14:
			$p['op_div']($div13,$div14))) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8))))) && typeof $mul9=='number'?
			$mul9*$mul10:
			$p['op_mul']($mul9,$mul10));
	};
	$m['hypot']['__name__'] = 'hypot';

	$m['hypot']['__bind_type__'] = 0;
	$m['hypot']['__args__'] = [null,null,['x'],['y']];
	return this;
}; /* end math */

/* end module: math */

var wait_count = 0;

var onExecutionError = function (exception, name) {
    var extra = sys['trackstackstr']();
    if (extra == '') {
        if (exception['name']['indexOf']('HaltException', 0) < 0) { 
            extra = "\n.  Rebuild with pyjsbuild -d for more information.";
        }
    } else {
        extra = "\n" + extra;
    }
    alert( "In application " + name + " - " + 
          exception['name'] + ': '  + exception['message'] + extra);
};

function app_imported() {
    $p = $pyjs['loaded_modules']['pyjslib'];
    if (typeof $p != "undefined") {
        $p('pyjslib');
        $pyjs['__modules__']['pyjslib'] = $p;
        pyjslib['___import___'](
            'main',
            null,
            '__main__');
    } else {
        var B$ = $pyjs['loaded_modules']['__builtin__'];
        $p = B$['$dict'];
        B$['$module_init']('__builtin__');
        $p['_start_main']('main');
    }
    return;
}


function prepare_app() {
    var startWait = 30000;
    var diffWait = 10000;
    var startAt = (new Date())['getTime']();
    var waitUntil = startAt + startWait;
    // Wait until all (dynamic) modules are loaded, and then call app_imported()
    var wait_for_loading_modules = function ( proceed_fn, module_list ) {
        var timeoutperiod = 100;
        var wait = function ( ) {
            var notLoaded = [];
            for (var i in module_list) {
                if (typeof $pyjs['loaded_modules'][module_list[i]] == 'undefined') {
                    notLoaded['push'](module_list[i]);
                }
            }
            if (notLoaded['length'] != 0) {
                var now = new Date();
                if (now['getTime']() >= waitUntil) {
                    var msg = "Module not loaded yet: " + notLoaded['length']
                    if (notLoaded['length'] <= 2) {
                        msg += "\n" + notLoaded['toString']();
                    }
                    msg += "\n" + "Wait for missing modules?"
                    var answer = $wnd['confirm'](msg);
                    if (answer == false) {
                        proceed_fn();
                        return;
                    }
                    waitUntil = (new Date())['getTime']() + diffWait;
                }
                throw 'shit';
                setTimeout(wait, timeoutperiod);
            } else {
                proceed_fn();
            }
        };
        wait();
    }
    wait_for_loading_modules(app_imported, ['sys','pyjslib','main']);
}

function pygwtOnLoad(onLoadError, name) {
    if (onLoadError != null)
        try {
            prepare_app();
        } catch (exception) {
            onLoadError(exception, name);
        }
    else {
        prepare_app();
    }
}

// $pyjs['script_onload'] = function (modname) {
//     $pyjs['loaded_modules'][modname] = function () { return null };
// }

// $pyjs['script_onreadystate'] = function (modname) {
//     if (js['readyState'] == 'complete') {
//         $pyjs['script_onload'](modname);
//     }
// }

// __pygwt_modController['init']($pyjs['appname'], window)
// __pygwt_modController['load']($pyjs['appname'], [
//   ''
// ])

// pygwtOnLoad();
/* start module: main */
$pyjs['loaded_modules']['main'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['main']['__was_initialized__']) return $pyjs['loaded_modules']['main'];
	var $m = $pyjs['loaded_modules']['main'];
	$m['__repr__'] = function() { return '<module: main>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'main';
	$m['__name__'] = __mod_name__;
	var $iter5_idx,$iter4_type,$iter17_type,$iter9_iter,$iter3_iter,$iter11_idx,$iter13_array,$iter17_nextval,$iter20_iter,$iter14_array,$iter12_array,$augsub1,$iter6_array,$iter11_array,$iter13_nextval,$iter18_array,$iter4_nextval,$iter15_idx,$iter21_type,$iter20_idx,$iter5_nextval,$iter10_nextval,$iter5_array,$iter21_idx,$iter16_idx,$iter6_iter,$add2,$iter15_iter,$iter9_nextval,$iter19_nextval,$iter16_nextval,$iter20_array,$iter9_type,$iter14_type,$iter6_idx,$iter11_iter,$iter19_array,$iter4_array,$iter21_iter,$iter19_idx,$iter13_iter,$iter11_type,$iter10_array,$iter19_type,$iter12_idx,$iter10_idx,$iter6_type,$iter3_array,$iter13_idx,$iter5_type,$iter4_iter,$iter9_array,$iter3_nextval,$iter9_idx,$iter19_iter,$iter13_type,$iter18_type,$iter21_nextval,$iter20_type,$iter14_idx,$iter14_nextval,$iter12_iter,$add3,$add1,$add4,$iter15_type,$iter10_type,$iter17_idx,$augexpr1,$iter20_nextval,$iter20_test,$iter5_iter,$iter16_iter,$iter10_iter,$iter6_nextval,$iter3_idx,$iter16_type,$iter18_idx,$iter18_nextval,$iter18_iter,$iter21_array,$iter15_array,$iter17_array,$iter17_iter,$iter14_iter,$iter3_type,$iter11_nextval,$iter16_array,$iter12_type,$iter12_nextval,$iter4_idx,$iter15_nextval;

	$m['lines'] = $p['list'](['227AB8KF2FVE  22270 72 3655 273 1 13425 3365 922 15866 18060 7073 19049 19821', '22DPWE323HPZ  63640 1 65252 62473 2607 56668 63081 13454 8715 378 13425 15353 4166 10796 11443 72', '236669ZH3P9A  13454 11443 16759 922 65252 3655 3419 10676 5204 13425 43932 378 1 42694 19049 64064 290 4166', '23B29NMXNQAV  56063 26576 11265 12346 3093 56668 18060 437 11072 12941 51716 63695 33137 15915 12468 63640 1135 34002 47292 61923 378 7073', '247AZ6WC6FKY  1 11443 378 11729 3419 7059 12393 437 1007 3 2608 967', '252HTEFP9YJ7  57909 44 16918 17337 25047 12393 17152 13776 12191 54098 23893 922 15866 16916 8790 63695 42694 34981 15074 53472 9876 9812', '254CTXDVX685  6315 1 58572 273 11443 16403 290 9360 1007 4699 7059 437 13425 22270', '26H3RZ9QPAXH  56475 19374 903 1343 13415 3419 12184 11265 20623 8715 17152 7073 1 39553 64304 43932 180 19049 63695 1306 54098 25047', '283QUQQR8HEC  1 11443 61657 15175 1007 31395 44', '287XCAH8R458  1 11443 1981 3 3365 17591 4166 15915 967 3655 3419', '28MXV6UBHERV  1 11443 378 15915 4166 3 13425 3655 1007 3419 65252 7059 1981 10676 9951 8715 11729 17591 437 22270 61657 72', '28RB4DTEY436  17743 1 11443', '293882MU6J3B  10796', '29F2PECNXJDH  17378 22513 12941 16403 8715 43570 24437 273 64042', '2AECV7MNXWCA  1 13425 2613 2608 61923 34981 12649 437 11443 922 290 54098 10796 1466', '2AQF3JZAEUNA  65252 11443 16916 2613 13454 15915 17591 63274 7059 19374 290 967 3 437 15175 1185 1 8715 1981 57909 3365 3655', '2BDEEKBPW42M  22270 7059', '2BV6FXWAR3A4  17743 1 11443 1135 34981', '2BYNZ6X6KW53  65252 63640 19374 11072 19821 11443 1135 290 1981', '2C7W5BCA7DDA  24394 54098 3419 13218 19374 290 53472 11443 27980 12941 2608 23775 834 1007 30906 22270 4332 12346 63274 7198 25047 56489', '2CETWBZR7D25  15175 11443 3655', '2D29EETKWCH7  11443 1 15791 437 3419 8715 15845', '2EH3T4DQHDA6  1 11443 13454 13425 61657 11729 7059 2613 378 22270 72 65252 12184 10676 3 19374 63274 922 967 31715 3365 3419', '2EKHDUZ4NBNH  3 1 65252 11443 1981 10796 63081 61657 15353 2477 19049 59948 3655 58249 922 4166 13218 24492 13425 8715 15201 10676', '2F7A8VVDCEQX  61923 65457 64042 11265 63914 1 43570 62209 61783 2953 3655 52027 4166 22270 36772 24394 7073 21204 12941 26576 8790 72', '2F7PUB4CCVKU  11262 5115 5204 61657 23608 17325 23775 13167 25047 37047 34799 15442 3093 44 57909 22532 15353 187 180 41676 13454 65203', '2FW5F56XYC73  11443 4166 15201 58572 63081 15915 3 15845 17591 12649 290 21158 1981 12941 180 1185 437 2477 20919 4332 8790 24394', '2FWQR9TAA7XV  61657 11262 5115 37047 13425 25047 9360', '2HR59NXTQNYV  1 15791 11443 3419 72 31715 290 12393 967 1007 27980 3655 10796', '2JKRVKFWK6BB  63914 23608 65597 34002 7073 62639 18060 13454 11443 65252 34981 63274 1 12941 61657 36911', '2JZMW6FMXND5  11443 65252 1 61657 437 2613 8715 10676 10796 15175 13454 1007 3419 13425 22270 967 58572 31395 9360 3365 1402 1681', '2KMQN5QXV5VE  3419 1 11443 19049 56489', '2MEQYV7NVZ95  1 11443 11537 65252 13454 2613 61657 42694 72 63695 1007 10796 3365 39553 378 15175 967 19049 273 3419 16759 31395', '2NB3XRTFAVB3  967 437 10796 65252 31715 2613 22270 43932 15175 922 63274 3655 5204 2477 1402 4166 11443 378 9360 3365 12691 17152', '2NC93AV9D4UP  17152 922 1', '2NJN4WX2QHFV  43570 11262 8715 5204 23608 31395 19049 32200 17325 15175 25047 56489 7198 5115 1135 46705 17378', '2NM47VTKNADQ  9360 2613 967 11262 1185 65252 273 5115 13218 11537 9652 437 42694 15915 4166 43932 1135 7198 3365 1681 20244', '2NX63T873PRF  290', '2PVFQ8H934YZ  57909 12184 9876 27139 29846 8790 58572 11 65457 60694 9635 2242 13415 12691 6786 61923 3655 56677 28084', '2Q53RM43T8PM  24394 5152 11443 65252 22270 10796 46705 19374 7059 63274 19821 41676 1343', '2QJYY8V8FNCX  11 44 8715 17850', '2QTZTQQBB2B3  3419 63081 1 53472 17378 922 43932 7392 56489', '2R2UPKHBYYBY  15175 10796 61923 11072 13425 54098 922 10676 34981 12346', '2RNHANU3448H  8715 63229 13425 23998 31395 17378 34578 12184 11443 28904 22270 15353 1736 16916 54098 65429 10796 72 10676 63274 64288 19821', '2RVM5M3FBQ33  1 1007 72 11443 437 13425', '2TUY4R37T5QM  3419 11443 967 3365 1 8715 8790 72 23893', '2UVNUW7VPBTU  5152', '2VNR52FRZ659  1 9635 967 437 2613 3 12393 65252 3365 64064 15201 3419 1681 11443 15353 9360 22270 378 1981', '2VTM5P4TJ4CW  2242 3655', '2WANXC88YU2M  13454 11443 3419 1 16759 64288 5504', '2X3ED5UF9A4U  11443 1 1736 12393 7198 1981 15175 1135 17378 25047 2607 26576 21158 12184 42694 8715 43932 54098 9876 12649 28084 19049', '2X7X86E4YQ2T  15791 3419 11072 11443 1007 7198 7073 9876 15866 1135 33137 378 18060 15175 19821', '2XRRYNWFVNFH  15791 6315 1 15915 17744 4332 4166 15201 13454 15353 43932', '2Y4X3KBCCXU4  5504 1981 46559 64960 62473 53472 13425 17744 16759 50039 64093 1306 2608 53966 40542 3655 13454 11443 15353 10676 14905', '2ZDD6U5MRPYT  62209 13218 72 967 44493 7198 1', '2ZU34JJFFPMV  10796 8715 437 2477 65252 13454 3419', '3282HV2KK4ER  62923 64064 13454 10796 2607 11443 19821 3365 58249 29846 72 61657 3419 1 27980 18060 12691 16916 61923 60694 15845', '32PA7PZ3FHJU  14696 2608', '33E33F49X6XJ  922 967 31715 15791 2477 10796 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 1402 58249 47292 24492', '34YE5U7WAHDW  11443 1 65252 13454 19374 967 13425 16759 22270 61657 3419 378 922 11729 5204 33137 3655 3790 3365 11265 21158 290', '35AUVUNM63ZZ  63274 11443 1 1736', '35MPXXJXNEUN  1 11443 16916 10796 11729', '36ECCDKFJQQR  72', '375ER86T3WXR  1 11443 12393 65252 3 2613 20244 3419 1007 3655 4166 15175 11729 922 15915 22270 967 8715 437 13425 3365 31715', '37AECVEZ8FVE  1 7059', '37FVPMDW8W58  10676 63274 15866 59948 56677 64081 54449 1 15175 63081 63695 2613 13425 51716 47292 65505 13454 31395 34578 3093', '37MDZNEH8RBA  28904', '37NUYBVRMXJY  41676 1466', '388RRMNPTUER  1', '38YEZ3PHCRUC  967 922 2613 65252 4166 9360 31715 10796 13425 378 15791 3655 11443 63274 1402 7059 43932 2477 15175 3790 17152 437', '394QN4AT78YX  16403 16759 17850 6315', '39NDA2F88U7N  57909 61923 9812 1135 59118', '3A7M9Q4XFBN4  17743 16403 8715 13425 378 11729 3365 46559 20623 54098', '3AHKWMWH68AU  1 65252 11443 3365 11729 7059 3 12184 2613 13454 72 967 437 15915 61657 3419 1981 63640 922 2477 1185 378', '3AJ76YQ23T58  13454 1 11443 11729 378 65252 61657 967 16759 3365 3 8715 7198 7059 1007 19374 3419 2613 34981 3655 922 20244', '3AMN4CCVWP9M  11265 1 11443 437 31715 61923 922 19374 3365', '3BKEBV72NH9P  31715 922 11443 10796 13454 61657 1 46705 43932 15791 290 22270 967 63081 65252 24394 14126 11537 34041 13425 1402 8715', '3C7HXVJ5TT5A  1 11729 11443 3365 7059 65252 967 2608 13454 3419 16916 9360 3', '3DMXBHZCN2DY  49655 65252 10676 8715 13425 61923 9951 22270 12691 56063 3419 922 19821 19374 64042 15175 1306 42694 64304 13218 54098 19049', '3DQ43UQ5C372  19374 11072 4166 378 19049 31715 15866 967 7059 16916 9360 10796 16759 65252 20244 3365 15915 11729 21158 11443 8790 15791', '3DUJNVQD98H8  967 12393 378 11729 1007 922 437', '3FJU5YCBTQCK  11443 1007 378 1', '3JFU5E2NHD5Z  1185 19374', '3MAWQD6UC3NU  72 12393', '3MPUYF32QT63  2608 13425 2242 3 437 15915 11443 8715 3655 1 14696 13415 4166 378 15201 19374', '3N2V5XPFA3J5  11443 967', '3N3EQT4HWV74  23893', '3NRXEBV8PB92  11537 11729 3365 922 8715 378 13425 72', '3P5VKCH6MXD5  1 11443 967 13454 16759 378 3365 19374 922 65252 2613 3419 61657', '3PUDVDAHKCVV  11443 65252 967 3419 11729 10796 16916 57909 3790 72 15353 1 3 2477 54449 7059 437 3655 2613', '3QKJM5WPWHVY  12184 1 11443 3365 13425 1007 11729 1736 72 31715 16916 19374 15866 967', '3QV65WRM67AA  1 967 11443 63640 7073 63274 11072 378 2613 15791 3655', '3RXX9HVZKC6B  62639 28084 63274 3419 57909 64081 11729 20919', '3TW3Q2CFYKFH  11443 65252 13454 65505 5115 61923 2613 13218 3093 967 72 3419 16916 34981 42694 19821 20244 62639 18060 19049 30906 14126', '3U65FFA3WBMJ  61657 13425 7059 72 17591 65252 19374 3 11072 19049 18060 43932 12691', '3UXVHW4PW76F  437', '3VEV9H4FYA6X  1 11443 2613 967 378 19374 1981 11072 61657 64064 63274 13425 7059 12393 3365 21158 273 3093 19821 15866 1736 13454', '3WBQCKYB9CAV  61657 11262 37047 72 16759 1 11443 65252 437 290 13425', '3X6TP3C75KFB  11537 11443 13425 3419 437 10676 3 12393 2608 22270', '3XNDYC7Q48A6  2607 7059 23668 63914 28904 1736 16916 63274', '3YNJDZKKX7EV  65252 27980 30906 34578 1343 2613 11443 19821 31395 3655 3419 47292 19049 42694 39553 65498 31715 922 12691 19374 15175 8715', '3ZD7H9PBE6JH  11443 1', '429Q92TTRA93  16403', '43YH9WT63TXC  64093 61657 23608 56668 22513 7198 72 17743 16129 1 63695 15353 17152 42694 12691 903 4166 17325 11443 53472 3 62473', '4477PZ9ZJ6AK  11443 11729 3419 3365 65252', '44ZCBPET5C4V  11443 3 16759 56489 65597 15915 15175 20244', '459K3A6QCT9N  1', '45YRC9XUW4VU  12184', '46DHKJNJ73XY  61657 65252 3365 5152 20244 13454 31715 11443 16759 43932 11729 13425 437 378 1007 1681 3 11262 15915 3655 19049 10796', '46MYWFFMAFZW  11443 1 3419', '474TC3Z3EBFX  11443 1 64064 65252 378 8715 72 27980 12346 63695 24394 14126 47292 43932 62639 34578 58572 19821 31395 53966 30906 22270', '475ZFQX4YAMJ  13454 11443 1 19049 9635 72 63274 15866 4589 65457 64064 834 11729 17744 20244 46559 1135 922 19374 58249 12393 63229', '47C9UQ2UYV38  11443 13454 22270 13425 1 3655 3419 8715 10676 5204 2607 13218 922 1681 43932 2242 42694 58572 15175 19049 2953 15201', '47QXXWQJFTX8  13454 11443 1 65252 11729 3419 378 922 61657 19374 1007 2613 3365 3655 20244 31715 7059 967 8715 16759 3 5152', '47TPY95NEEF8  11443 11537 922 13454 10796 931 22270 15791 3655 27980 4166 19374 57909 63640 8715 43932 1402 11072 9876 31715 13425 23893', '49UDUBZQPV7K  11729', '4AWV493XHJNQ  3 13425 15845 15915 2613 15201 63081 43932 4166 58572 1981 12941 17591 180 10676 1866 1185 23020 49655 12649 16918 62473', '4AWWUXHZNHYU  28904', '4DE4ABMBXWMH  22270 7198 53472 10796 54098', '4EJTM25DH6EF  5115', '4F28VQ88UHPB  3419', '4F7WD6D4CHXF  1 11443 1185 26576 437', '4H3K3EVYT389  62473 1 11443 10676 29846 58249 34578 16759 47839 51716 30906 65252 56677', '4HX2UVDNHFXY  11443 65252 7059 28084 3365 2613 967 3 15915 11729 3419 64064 1 13454 20623 22270', '4J68PXTYC9DC  967 8715 437 10676 1981 922 10796 11443 43932 13425 31395 15175 15915', '4MMRC8X4CZYV  1 30906 11443 9635 8715 58249 13425 63640 10796 15353 19821 54449 27980 922 57909 187 29846 64064 62923 1135 63735 44', '4MMVF7UPWZVE  1 10676 2608 63640 34981 12649 56063 3093 64304 13425 2607 26576 56489 13218 14126 13415 57909 60694 62923 4166 437 1402', '4N4BKWHXYQF8  57909 61923 10796 11443', '4N6MPQWU8HEE  57909 9876 65429 8715 13218 65203 19821 1135 34799 1466 56677 28084 5204 273 13776 22513 50039 64960 63695 54098 64304 46705', '4NUV82264D8A  11443 8715 13454 11729 13415 46705 20919 6315 46874 15866', '4NYKB8X82JFX  1981 15442 14696 13415 12649 65460 17325 62639 65203 64064 1 65498', '4PWDM29KUDBQ  1 4166 63640 19821 56489 62923 24437 17743 34981 7073 273 62639 13218 40542 64304 56063 63735 13425 56677 23020 187 54188', '4Q3TR8T2VDTU  22270 290 1343 922', '4Q96MPMJFQU3  15915 922 54206', '4QE4EDWDZNH5  11443 437 65252 18060 13425 62639 31715 63640 3655 61657 8715 64064 19374 16759 19821 60694 3419 1007 63081 24394 3365 34981', '4RBHC4AFKPQ2  43932 10676 65252 11443 22270 3419 8715 10796 19821 13425 922 3655 61923 19049 39553 19374 27980 5204 1343 15175 65498 42694', '4RBZC8HZ5XR3  1 11443 4166 15915 15175 1007 437 65252 13425', '4T2ENTXAJ5W4  16916 65252 11443 11729 13454 63735 30906 22270 922 27139 3365 11537', '4U67924DW9BA  15791 72 1 12393', '4UQZMAVJ363X  57909 59948 34578 64960 1981 42618 53472 13218 11072 1402', '4V9FYKHHB35D  1 11443 11729 13454 65252 3365 378 7059 3419', '4WDCUDD2W2AW  65252 11443 1 3419 7059', '4WERQVQM38AA  62209 54098 1 11443 7198 31395 303 3655 65597 2607 23608 13425 36911 922 44 63695 2242 2613 903 34578 23775 9635', '4Y786U4U6HEH  62209 11443 65252 922 42694 1 1135 22513 64304 15353 5115 34578 9635 65505 14126 12393 13415 53472 31715 967 22270 8790', '4YQDK9Z2E4X7  1 11443 17591 1343 72 26576 3419 967 13454 6315 7059 437 1007', '52BHRAHAYNR6  10796 64064', '53277DNY5YYV  17591 437 11443 12649 12393 72 3790 1 62209 56063 13425', '53A9NX8YFDMF  11443 273 65252 3365 2613 3419 19049 15353 39553 11729 1 3655 15175 8715 19374 10676 63695 54098 31395 12691 13425 922', '56YC5XJAR4WM  1 12941 922 16916 1736 23668 11443', '56Z8VN8U9F47  7059 11443 65252 16916 1 72 1343 47292 22532 34578 23775 10796 55614 43932 31715 29846 63695 7073 64064 22513 15175 15353', '57R4Q434VCJM  1 4166 20623 33137 3655 19821 22532 31395 15353 64304', '59VYMZBM75DT  11729 11443 1 2613 16916 65252 15915 378 3419 13454 7059 22270 3365 3655 967 19374 15201 19049 4166 1007 31715 61657', '5AZCZVAYBHRR  11729 61657 13454 922 72 437 9635 12393 16916 967 2477 65252 3365 378 43932 7059 1 3655 1007 1981 11537 12691', '5B4R93V2BCWC  5152 3655 11265 378 13454 3 11443 1 8715 293 2613', '5BAQ5KED5BPW  24394 7059 290 11443 65252 3 2613 21158', '5E8WHDKAQAVP  11443 1 24394 72 290 1007', '5EAXZRQY8NYR  21158 65597', '5F4YYQ7FTENP  72', '5FVWDKWH7VEU  54098 303', '5HBRWZ753JVV  1 922 3655 11443 63640 437 54098 65252 26576 30906 15175 5152', '5HN8RE4Z5N37  11443 1 7059 65252 11729 3365', '5JCVEXYHFT3M  1 19374', '5JJ8UNWNQ4CN  13454 4166 65252 64288 37047 24394 12393 44 2607 19049 42694 11443 7198 1 19374 30906 43932 437 72 65498 22270 3655', '5JP8HE9RFCKW  15791 1 3419 1866 3093 65252 11537 9876', '5K9UZWA3WQCH  1 42694 64304 63695 303 51716', '5MNMUBH9YK4P  11443 65252 3419', '5NM9KHJ62K2K  65252 3 3365 15915 437 12393 11729 1981 11443 1 378 4166 15866 2242 64064 15791 63081 17971 19049 3655', '5NWWATQMM6KY  15201 7198 4166 1981 15915 50039 17591 10796 3365 13454 273 967 3655', '5PF3TND42U7U  34578 17337 27139 19821 1185 43932 60694 30906 65203 11443 56489 54098 56668 65597 12191 65252 42694 63640 58249 19049 28084 2477', '5PZWNRXYQDUH  1306 1343 290 5204 8715 23775 922 61923 34981 22270 14126 48267 15845 15175 2607 62639 11443 10796 13218 13425 3655 12393', '5R4H33HWQNRC  1981 1 56489 58572', '5RJWRQ3WZF25  43932 10676 3 4166 17591 13218 1981 15915 12649 13425 56489 63640', '5RXPPQ6DPV3Q  1 4166 34981 64960 43932 3', '5T72RZXJ43MJ  5152', '5TPZJ52NH6AJ  21158 32200 23608 13167 922 15175 17325 34799 1135 11262 5115 37047 19049 23775 25047 7198 61657 15866 43570 64093', '5UBUADVFEWZ5  3365 1 11443 65252 967 11729 1981 31715 3419 43932 7059 922 378 22270 13454 15915 13425 3655 2477 4166 8715 16916', '5VAEWA9VXAC3  61561', '5VVK45PA6F5E  1 11537 13425 15791 19049 20623 378 15915 12191 2953 49655 61923 39553 187 54206 52027 15353 64064 3419 63640 1866 47292', '5WDTCMWQAKPW  11729 58572 3655 53472 1736 11443 1 18060 378 72 63274 28904 7198 16759 65498 64064 30906 62473 43932 28084 15175 63081', '5X8BP4B24R6N  11443 29846 65252 4166 8715 1185 1343 54098 28904 19821 26576 378 54449 3790', '5YXX7TBX6ZEU  5115 16403 23608 1 7198', '5Z54JHVRZKYU  26576 1', '5Z77BZMK4FZW  21158', '5Z9ZPZWK6URD  3655 21158 10796 10676', '5ZACRKHMQ6UZ  922 967 31715 15791 2477 10796 21158 3365 3655 17152 65252 3790 437 20623 9876 12346 27980 64064 3419 58249 47292 24492', '5ZUV3T52JJP2  4166 1 180 65460 15915 23020 10676 52027 13425 15201 58572 19821 62639 62395', '62UZ57PQWKU2  24394 65252 7059', '6325F3MUYPFN  13425', '63A59YZJM5TU  72 12184 28904 7059 6315 290 16916 62639 48594 22270 12393', '655U5K9UYMHN  17152', '6594X3CZ5WF3  16403', '65VTU67U92TB  13454 3655 2607', '6639D8R7KP3D  1 13454 16759 3365 61657', '66DF4RRZ8NZB  18060 29846 15175', '66MJ9A96A6R6  1 11443 3419 967 437 1007 3 922 57909 8715 12393 3655 3365 1981 7059 290 9635 13425 7198 64064 2613 15175', '6777N7JW35C8  1 11443 65252 2608 437', '696XC87J5YZK  20244 11262 10676 62473 3419 1306 11443 293', '69YDDPHRNZCM  33137 11443 378', '6A2BFD9DA23P  2613 31715 7059 22270 63274 65252 16916 967 43932 63640 26576 11072 2607 4166 1981 50039 3 378 15353 19049 15175 3419', '6AKVDCW4DB5H  1 3093 34578 17325 40542 17378 437', '6AN8MTH8UA6P  2242 27980 21158 22513 64064 3419 9876 56668 17152 2477 10796 1402 967 3655 20623 51716 47292 65446 12346 24492 437 3365', '6C8XE2XJH8JJ  11443 61657 65252 1 3365 61923 378 20623 30906 63640 9635 27980 7073 12393 21158 63735 4166 4699 53472 63274', '6CYXP7UC3RME  10676 43932 11443', '6DBNVZ9JRJHE  11443 3655 378 1 5152 2242 56677 437 4332 293 9652 8715', '6DFRTKKBMWC3  13425 3 65252 11443 43932 1 63640 290 437 1981 2613', '6DHU7QTCEPM9  46874 7059', '6DKVYWNY6J3Q  1 11729 437 54206', '6EXQ3CQ39XU2  46559', '6FR9CNRRXWF7  1 11729 11443 3 15915', '6JXUMV4PY242  57909 59118 1466 23020 10676 39553 2608 12941 22513 18060 6786 51716 59948 31715 64064 56475', '6KRPEBNFCH3K  4166 1007 65252 3 2613 15915 63640 63081 15442 16916 1 11729 17744 64304 3365 12184 3419 1981 10676 1866 922 13415', '6MN3B6C79FKQ  27139 17337 48121 28084 15353', '6PEWNZWPQZTA  26576 1 8715 922', '6PQQ3EKWVWEF  7059 31395 4166', '6Q66PXJJE2DD  1 11443 65252 15866 8715 13454 13218 437 2613 26576 3655 3419 43932 19049 22270', '6QYJ7NUWN3F2  11729', '6R8VWKPQK4MM  12191 61928 63274 14905 61923 63695 58572 62639 64064', '6RZF4AWUNDNJ  1 11443 58249 922 63640', '6T25M2FJR4U3  11262 61657 5115 34799 37047 65252', '6TCYNAHBYDV9  1 11443 10796 19049 42694', '6TEY7UTX7WQ3  27139', '6U5B2VTQ5J92  16403 1 11443', '6VEEKAQJHATJ  57909 47292 17743 62923 3419 49157 903 61923 46559 58249 14126 59948 12191 834 47839 12649 7073 65457 34578', '6VKB6Z87FKJN  72 1466 22270', '6W9UFQ8WP8E3  1 61657 2608 11443 3365 65252 378 967 13415 290 437 1007 273 27980 8715 11265 7198 3 13776 19374 3655 14696', '6XEWBDDBT2QP  16403', '6Y4NXUKKX78E  11729 11262 11443 3655 1 65252 437 5115 13454 8715', '6YUTYRH5UZN6  4699 1 378 11443 11265 5152 13454 8715 65252 3365', '6Z5J56BE9EFB  1306 290 7059', '6ZFF4TVD3VD4  63640 967 10796 19821 17743 65252 53472 1185 8715 15175 18060 54449 63735 27980 55614 13454 16916 29846 62639 3419 11443 1', '6ZKFK6Q4ADKU  54098 17378 11443 8715 5204 31395 65597 12191 1681 34002 48594 11262 39553 23608 4332 14696 58249 1866 2607 7073 62639 834', '722NPZA9HEE9  65252 31715 3419 10796', '72M6NR9KDWTK  17152', '733KMAJ9CNEZ  11262', '7375XDE77KE2  1 72 4589 3419 20623 273 1007 52027 28904 922 3790', '744K3ZVVYDE2  31395 19049 8715 11443 2607 22270 15175 13425 42694 10676', '74539B5RT3H6  1 11443 13454 16759', '74URQMUNAJYK  54206 63081 15845', '75MNVVYPN237  1 11443 4166 3655 5152 18060 63081 65457 29846 10676', '75VHVPAQQDEV  9876 12649 33137 3655 19374 17378', '76E6RAP26TFY  7198', '76T5X8DNR92T  1 13454 11443 1007 22270 11729 13425 15175 64064 7059 63640 1185 3365 18060 437 12184 16916 967 72 12393 3 15866', '788XPCM7AFZP  28084 1 14126 72 65252 17337 47839 3365 19821 63695 30906 19374 65498 13218 2613 59118 8715 62395 19049 10796 43932 61923', '78KKAZ56UXCF  11443 3365 3419 13425 1 1007 13454 437 967 378 7198 65252 16759 922 2613', '78TZDC4E33AH  1007 11443 2607 8715 22270 65252 3655 34981 378 3365 2477 8790 63081 12393 11729 57909 20244 1', '794Q6WYBZVQT  11443 57909 16403 61923 180 65252 46874 3 22270 20244 922 13454 1343 30906 43932 1 1981 2613 4166 65321 10796 19049', '79A24W86RZ48  57909 37047 63640 46874 18060 12346 42694 22513 48594 2608 5152 47839 22532 53966 58572', '7AC4UHHHQJHT  1 11443 65252', '7AU3PY3UUJRN  3419 31715 11443 19374 2613 65252 31395 9876 15791 54188 72 967 7198 11262 4166 12346 1135 51716 61657 17325 23775 3655', '7B3C64ATZ7P3  13454 11443 61657 1 378 19374 16759 922 3365 65252 3419 20244 3655', '7CTUWRXMA8DX  1', '7D35C6NQM78D  19374 11443 31715 19049 15866 15915 4166 11072 63274 2477 11537 1007 16759 7198 378 15791 16916 14696 1681 293 9360 22270', '7D5A7MBVBTNE  72 1 2608', '7E35Y7FKUQPB  1135 13425 11443 1 30906', '7EA8EZBTNAHQ  65252 1 13454 11443 378 3419 11729 2613 3365 3655 16916 967 1007 437 7059 15915 17591 1981 31715 72 3 16403', '7F3H8KTRWEEU  11443 1 15791 64064 61657 20244 63274 17743 43932 4332 967 21158 12468 22270 17971 437 13425', '7F77QZ28AWXX  1 4166 63640 17744', '7H8T6R5P3AP8  13454 922 1 5204 13425 11443 63640 8715 31395', '7J7YUUEY5Z6Z  1 273 11443 29846 39553 27980', '7JCB8D6A99NA  43932 1981 3 1 15915 10676 15175 11443 8715', '7K5DHVYN3K4A  19374 11443 19049 11072 15866 31715 1185 65252 10796 4166 378 11537 293 16916 7059 1681 13218 16759 12649 15791 20244 3365', '7KA4XE6EDNW8  57909 61923 59118 61657 15791 36911 22270 5204 11729 1402 49655 65498 53966 19374 15353 62395 42618 1466 15175 12393', '7M6953KKH2R9  3419', '7MFUJWT784Z2  1135 28084 30906 4166 17744 13425 3655 33137 61928 12346 39553 63640 931 43932 27980 57909 29846 922 14126 11443 62473', '7NC94JHKZPZN  16403 34981 17850 17325 11262 5115', '7P6BMZBBDYNH  57909 3419 64064 65597 18060 16129 61759 6315 43570 61657 34981 44 54188 22532 63229 32200 62473 65446 56668 58249 59118 65203', '7QNPQUJZU6E7  1 378 65252 11443 1007 11265 5152 11729 3365 13454 10796 16916 1185 7059 3655 3419 20623', '7RA6UKHHJH83  13454 11729 61657', '7T24JKERU4FF  1 24437 30906 41676 11443 63229 34578 19374 8715 8790 31715 63914 922 42618 34981 19821 2607 29846 56475 31395 16759 44493', '7UBMH37F495J  1 15791 3419 11443 3 7059 3655', '7UJTJQRDRU3C  922 1 10796 8715 29846 63640 11443 43932 19049 13425 3655 19374 13218 31395 3 2607 42694', '7VHY2RMFU34Z  12184', '7VR3JZM7CB3X  12184 290 19374 16916 8715', '7WQ8BPY7RF5F  16759 1 9652 378 60694 1681 9360 42618 20244 65321', '7XPER8H9NZ5M  290 72 1 1306 1343 11443 437', '7YN8KDZ4P5CM  11443 1 13425 10676 13218 30906 2607 43932 3655 34578 12691 10796 15353 7073 3093 31395 61923 19374 42694 922 54098 15175', '7ZF2K3MVMPEY  11729 11443 1 378 13454 11537 922 15915 72 1007 64304 8715 12184 290 65252', '824VWNDWFK2B  3 13425 15845 15915 2613 15201 63081 43932 4166 58572 1981 12941 17591 180 10676 1866 1185 23020 49655 48594 62395 62473', '8285JKPPZ574  16916 11443 1 21204', '82DYVY9K2YMA  16403', '83K9UJ49F72W  6315 1 4699 11443 1007 58572 16403 437 1736 8715 290 9360 3419 7059 22270 13425', '83TCYFD6UKRE  13454 16759 11443 63229 10676 8715 20623 1306 1 49755 39553 54098 14905 15353 903', '84RJQZ28CJQX  967', '84WYPQZKTYJA  16403 5504', '855JENRM6EK2  4166 23775 23020 17744 22532 61928 16916 15866 1 2953 2613 47292 1306 31715 187', '85ZDEUNBJM42  1 11729 11443 922 2613 13454 5152 3655 12184 15915 61657 20623 65252 378 1343 15353 10676 65498', '866MF3EDE4Q5  15915 3 43932 11443 13425 13454 1 65252', '86K229AQMWTW  13425 2613 10796 7059 63640 31715 22270 8715 11443 65252 12184 3655 5204 922 3419 63274 16916 11729 3365 290 11262 15201', '87M457E5EXNQ  15201 65252 922 967 1 11443 72 13454 13425 437 17152', '88WQ82WQE3DC  1 11729 3365 13454 16759 11443 3419 1007 65252 16916', '8939ZTNDW6Q7  3 13425 15845 15915 2613 15201 63081 43932 4166', '89BPUU3R6CWH  72 44 1135 2477 9635 31395 18060', '8A25DY5BWETB  65252 1135 31395 32200 20919 19049 7198 11443 5204 53472', '8A2KKWHE2YHM  5115 11262 23775 17325 23608 37047', '8BAFQJ753HCQ  57909 7059 7392 56668 65597 1 41676 3093 23831 46874 63081 17325 3790 63640 6786 34041 180 9652 60694 17850 1681 15791', '8CPWMV97XUV7  63274 16916 10796 1736 22270 7059 2607 3419 1 11443 3365 437 1007', '8DBFMUA8XP7U  967 65252 4166 2613 15201 43932 15845 17591 15915 1866 3 62473 58572 13415 922 13425 1185 22270 57909 63274 9360 13454', '8DUDD7N5PYJJ  26576 63640 22270 3 437 1185 7059', '8E5CF2P6A2XP  2613 31715 11443 7059', '8EXKUENAR5W9  1 11443 2242 21158 27980 47292 922 967 31715 15791 2477 10796 3365 3655 17152 3419 3790 437 20623 24492 58249 1402', '8F6QHHWBCJQM  61657 1 11443 7059 65252 2613 290 53472 65457 5204 3093 15175 16759 3365 56489 437 12184 3419 72 378 13454 1981', '8FUCV4NTJD5J  57909 61923 65457 43570 62473 2953 2608 7198 9652 51716 64304 23020 23831 29846 23775 3419 14126 47292 37047 39553 9360 41676', '8H962JEVDKQR  11443 1 922 12649 15791 31715 7059 15201 290 65252 19374 2613 62473 7198 3419 15866 3365 10796 2477 21158 43932 10676', '8JW5M35FXYB5  2608 19374 12191 14696 11072 21158 22513', '8JZJRQF59UJZ  16916 63274 28904 72 17378 22532', '8K6367FU7VRB  4166 15915 15845 10676 378 11443 8715 1 72 43932 1007 12393 7059 437 3365 65252 13454', '8KABJ24Q526M  437 15353 903 3655 16918 13425 187 15175 23775 31395 23608 11443 7198 2607 58572 47292 63274 13218 17325 19821 5115 56489', '8KZ9CDFHZAM7  1 4589 9652 11443 9360 44 19374', '8MXCVQBEMYQN  46559', '8PHA5VRTTV9P  64064 62923', '8PT46PF6CMX5  33137 7198 11729 7059 63274 2477 57909 3365 15915 13454 9876 922 22270 12691 967 13425 15201 3 9635 11262 273 7073', '8QAV73E9MPX9  8715 1 11443 65252 54098 1007 19374 16916 46705', '8QPDJMJPVWY7  1 11443 72 65252 3419 4166 437 16916', '8R3JJHVXHVKQ  37047 64081 11443 3419 18060 42694 34981 7073 63274 63229 64064', '8RBDE5MV4BCZ  2613 11443 10796 290 1', '8RX6AC477AU9  7198 7059 9652 19374 53472 290 19049 22270 15866 13425 16916 8715 16403 31395 1185 21158 3', '8T3B4PWZR6F5  57909 61923 15791 65446 14905 21158 23998 15201 34981 28084 61759 11537 65321 63081 6786 9812 48594 9635 16916 63274 1135 34041', '8T79EUY4XEX2  28084 15353 1 11729 437 65252 1007 3655 13425 7059 11443 3365 8715', '8U7W7WWRFU7Z  2613 967 31715 9360 65252 4166 7059 11443 378 3655 15915 3 43932 3365 437 10796 17591 15791 5204 13425 2477 922', '8UN8D9HA6N3P  16403 3365', '8UQE4WNEPAVP  22270 63640 7198 16759 10796 2953 34799 1 42694 12393 922 63081 64304 8715 21158 187 1402 12184 3419 437 7073 57426', '8UR8KWHAQXJH  11072', '8VZVMV86NWBR  11443 1 290 2607 63274 8715 29846 22270 13218 42694 12393 23893 10796 12184 19821 54098 64064 43932 17378 63640 24394 28904', '8WRDJEVXC9WC  11443 11262 31395 1 65252 11729', '8WRXDYH27W6T  13454 1 20244 30906 11443 10796', '8WWXADYXD6RX  16403', '8X7WARP9Q4EN  58572 11443 1 12393 20244 3419 922 437 8715 42618 13425 30906 39553 65252 14126 1981 12649 967', '8YZ7UF9M7KD8  57909 5152 19374 32200 2613 63640 12184', '92KXRMJ39Y7F  56489 8715 290 7059 1185 72 922 15353 10796 1 437 12184 11443', '933JB9HJ3RQN  11443 54098 1', '93645UZDC3XB  11262 25047 5115 13425 37047 61657 65252', '93A9ZD6WJBZ7  11443 13425 1 26576 290 2613 10796 13454', '93UXK5HWBJZY  2613 1981 3 13425 15915 4166 65252 17591 967 28904 43932 9360 7059 437 10796 5204 3655 922 2477 378 11443 15791', '96U2VUYW6XYU  1 15791 378 11443 1981 2608 19374 58572 3419 65252', '978ER8FZQUFD  18060 2608 903 14696 21158 47292 2242 15074 44 15175 922 43932 58572 10676 12191 11443 9635 12184 13454', '99YFYVAAVD4N  1 16759 20623 11443 2477 3655 56668 922', '9CBZPCUJX8RM  1 1007 922 967 7059 2613 12941 31715 15791 2477 10796 21158 3365 3655 17152 1306 3419 437 3790', '9CV5FT8PBPUJ  11729 22270 19374 11443 20244 16759 1 437 2477 65252 10796 3 61657 4166 9635 16916 2613 63274 15791 21158 12691 31715', '9D52TTTXUUAD  63274 8790 22270 44 16916 7059 10676 11443', '9DMRFCNRQPKV  57426 63640 16916 7059 62639 12184 12941 1736 13425 19821 922 20623 8715', '9E3ZNX8UAK6D  20244 13454 967 922 437 9360 22270 46705 11443 2613 19374 1007 11537 2242 17591 13425 1681 3 15915 43932 378 293', '9EKFJ8R7WTKD  11443 378 437 1 9812 1681 967 1981 26576 10676 13425 10796 65252 3419 57909 2613 72 15915 8790 13454 2242 12393', '9EMBQX6B7ABZ  1 2477 378 43932 64064 56668 922 20623 3655 11443 65252 967 437 13454 2608 3790 3419', '9HCM6Y3QUMP8  14696', '9HRAD4ZW5FTT  1 11443 437 10676 3419', '9HRQDEUH456U  21158', '9HV42YV4MJYE  12691 14696 10796 63081 3 967 17743 11443 13425 1981 13454 1 15915', '9JMBBCE9TJ5M  7059 3 2613 16916 3365 63274 4166 65252 3419 8715 17591 19374 15915 437 24394 1185 1736 22270 290 1981 21204 15353', '9JY3B3QYADZU  28904 13776 1343 62639', '9K27VZNTNMQ3  11443 8715 15866 922 3419 2607 1007 31395 19049 1 43932 15353 1343', '9MCBXYZPKEK3  40542 12941 34041 2607 1007 16916 8715 53966 63735 1185 2613 19049 49755 37047 62473 62395 22270 26576 59948 23020 14126 3093', '9MKQZUMU6MTE  11443 2613 16916 72 15201 1 65252 3419 31395 4166 3655 7059', '9MU3TTJ3P4JT  44 8715 11443 13425 1007 2607 31395 15175', '9PM5DWUAWRFX  11443 3655 12184 63640 13218 1981 378 922 56489 3093 31395 72 1306', '9RD7W69QCHX7  11262 18060 1135', '9TUN33BJWQW6  16403 20244 273', '9VEJ27KUD5B2  1 8715 12393 437 273 63229', '9VNZXYDW6FCN  8790 922 16916', '9VXVBWYWWBMU  57909 37047 65252 63640 15791 61561 59118 41676 46874 18060 12346 42694 22513 48594 2608 5152 47839 22532 53966 58572 44 1981', '9W28KUNMZ32R  65252 1 3 12184 10676', '9X2UJKTQ7YHJ  1 11265 437 378 3655', '9X8Z9J9H3VDZ  63274 65252', '9XXWDF2UUWFH  10676 7059 290 19374 72', '9Z2E326KEPFA  11729 11443 1 65252 378 13425 290 10796 15915 922 12184 2613 16916 22270 17591 3419 7198 3655 15866 31715 13454 3365', '9ZEUJVH5C5EW  11443 43932 1 4166 54098 65252 1007', 'A29WTTD6ZWEH  1 3 11443 64064 3419 3365 967 13425 1007 437 378 17591 13454 57909 10796 63274 9635 15201 922 8715 65252 31715', 'A35J7JE33WFF  1 3 15175 64064 10796 30906 13167 378 7198', 'A3QYQUFEB65E  1 11443 65252 1007 437 28084 180 2613 3 967', 'A43TKD6THC7R  65252 43932 3093 3790 378 11443 2613 72 64042 437 7198 290 29846 63695', 'A44WP8HBNX7P  16403', 'A58D76EKUWAE  64960', 'A6MF998R4PPA  65597 11443 2608 15175 12393 437 13425 63640 1 1135 49157', 'A6VN8ERNA96Z  1185', 'A79D6QUMD2A3  57909', 'A8CUCK7T9CUT  1 11443 14696 19374 12191 2608 290 3655 8715 967 437', 'A8P4D5XXAX6J  21158 22513', 'A94H4FT8AWMC  1 22270 12184', 'A94YPHYBUTCQ  1 3419 7059 10796 15915 1007 72 11443 1981 967 19374 7198 3365 922 3 437 65252 12941 15866 63274 13454 14696', 'A9Z8U8D95AXJ  65252 9951 967 1 11443 437 1981', 'AAWDK4P329A2  11729 3365 1 3419 11443 3655 65252 33137 13454 2608 12184 15791 7059 15866 378 17850 7198 29846 4699 62473 13218 16403', 'AB8TCJBR6AA9  5504', 'AC29FZYKCZ66  1 11443 57909 72 65252 11729 13454 2613 3419 10796 8790 1007 12184 5204 1981', 'AC37V75UBM7B  23998 13454 1 17378 64288', 'ACQY3ZM27XVR  17850 11443 1007', 'AE4Q89NZMHV5  13454 11729 11443 1 7198', 'AEDY33EMWQME  19821', 'AF6RZ38PMRF6  11443 13425 2613 43932 10796 922 3419 13218 19049 42694 65252 1343 30906 65498 19374 15353 27980 31395 2607 12691 3655', 'AH73HP8634WQ  57909 59118 61923 1466 23020 10676 39553 2608 12941 22513 18060 6786 51716 59948 31715 64064 56475 22532', 'AJ5B5MDDWKDN  1 11443 30906 56677 922 54098 3093 1981 967 7073 15791 8715 34578 1185 19049 12468 1007 4166 1402 27980 180 378', 'AJ8P3JMRPVEY  13454 10676 16759 22270 11443 15353 10796 8715 15175 1', 'AJA24KCFY58D  1 11443 65252 13454 967 3365 378 20244 437 10796', 'AJCZ9D7A4DQQ  8715 187 11443 17337 1 19049', 'AJD7DRBFE8MJ  5152', 'AJE2T3Y5DPX3  1 11443 11729 3419 3 13454 65252 2613 65446 1981 437 72 7059 3655', 'AJQ59A7AHR8P  11443 8790 1736 10796 1 12393 9876 3419 3365 2242 54449 43932 2477 13425', 'AKEXWXDX9BZ3  11443 1 437 3 7059 3419 7198 12393 1007 1981 3365 11729 922 2613 19374 1736 967 13425 61657 65252 72 273', 'AM2FND48K99E  4166 15201 49655 3419 11443 12184', 'AME6XRX27NPB  2608 1', 'AMQYA5TY59BT  15845 1 11443 4166 63081 437 54206 22270 13425 19374 37047', 'AMVNX5D63C9B  16403 1 11443 17850 3419', 'ANK22HTYNWHX  63274 13454', 'AQJQFE58FFQU  11729 11443 3419 65252 13454 922 19049 8715 20623 16916 3365', 'AQZRT3AV532F  11443 11729 72 1981 13454 3419 3655 378', 'AR25P4Y75WPX  922 8715 11443 9360 1', 'ARD8TXCAH2VC  1 922 56668 2613 72 39553 64064 62923 49655 14905 3655 42694 3419', 'ARX9VK8FATDH  3365 11443 378 2613 1 65252 1007 11729 31715 5152 72 11265 922 12184 43932 4166 20244 9360 16759 20623 10796 11537', 'AT3DVBWWUWRQ  57909 61923 59118 1466 23020 39553 2608 12941 22513 18060 6786 51716 59948 31715 64064 56475 22532 9876', 'AT69K2V6F5VM  65498', 'AVDEY5WZW8PE  11262 34799 61657 5115 37047 25047 17325 13425 7198 3 23608 5204 13167 8715 1185 922 1981', 'AVE7NY7EEYZY  65446 3655 12184 922 22270 8715 56668 54098 63695 72 22532', 'AVHJNRA9F9TN  46705 16916', 'AVJQ79ED67RU  11262 61657 37047 5115 65252 22270 10796 25047 64064 2477 17325 72 1981 378 13425 21158 3 34578 437 967 9360 2613', 'AW9CTRNKR7M4  28084 3419 967 11443 437 290 17337 1 1007 61657', 'AX5JRY4853PJ  11443 1 65252 10796 290 437 15791', 'AX82QYEYKXDT  11262 37047', 'AXDK63X2PXA4  11443 3655', 'AYDFJA8HY5M2  11443 1 20623 8715 15175 34799 23608 31395', 'AZ5QWUPPD475  57909 61923 59118 1466 23020 10676 39553 2608 12941 22513 18060 6786 51716 59948 31715 64064 56475 22532 9876 64288 303 49655', 'AZJ5ZVJJB7PZ  13454 11729 61657 16759 3365 10796 58572 65252 922 72 1007 20623 437 8715 4166', 'B2ATPCTCNHQ4  3790 3655 64064 2477 20623 56668 922 15201 3365 43932 4166 10676 2613 11443 2242 13454 16403 15353 19821 63914 49755 31395', 'B2BHWWTN3VPT  1 9360 11443 20244 922', 'B4NXRQRXYVDQ  378 11443 65252 8715 11729 4332 9812 11265 5152 17971 10796 2613 19374 57909 2242 15074 17743 16759 13454 1', 'B4Z3WNBVAFQN  23668 56063 1007 64064', 'B5B7KZ8J3NP8  11265 11443 20623 8715 378 1 437 65252', 'B7KJ69AZ2M6A  20244 1 1007 13454 11443 65252 378 922 57909 3365 2613 4166 3419 967 11262 10796 15915 3655 31715 64064 180 15791', 'B7QE4DBPV9J6  12184 437 967 13218 11443 3419 22270 10676 63274 72 3365 13454 290 13425 43932 19374 378 11729 64304 15353 15175 23608', 'B88QZADPWJJX  3655 20623', 'B8M8DWHP5VV5  63081', 'B8RJPNQ73C8W  11265 11443 1 378 16759 11729 13454 1007 13425 15915 57909 3419 7059 22270 967 922 3365 17971 15791 3 1981 10796', 'B8UR2QMXY9RV  57909 61923 65321 37047 65252 63640 15791 61561 59118 41676 46874 18060 12346 42694 22513 48594 2608 5152 47839 22532 53966 58572', 'B8UU2JRNB55A  437 11443 1007 290 3365 1 967 13425 12393 7059 13454 3419 11072 16916 15845 1981 15915 65252 3 2613', 'B8WX37HUP8CW  1135', 'B9PJB5FDZN9H  1402 1 11443 11729 65252 967 3419 3655', 'B9QRT56F86E7  1 11443 30906 3419 1736 65252 54098 3655 15175 12191', 'BA54MEDCHRF4  13454 1 834 5152 903 43570 44 64064 27980 1402 16916 11443 7073 22532 65505 922 24394 34002 12393 62923', 'BA6VC68BWZ7Y  17744 15201 58572 5504 64960 1185 3 13218 56489 12649 13415 49655 23831 59948 1981 180 9951 15915 43932 64304 47839 65460', 'BA99WFEJUARV  11443 1 2613 7198 3419 29846 378 64064 12393 1981 437 15915 65252 11729 3365 4166 13454 3 1007 16916 15845 61657', 'BC5EAZDJVXC4  1 3655 922 12346 11443 3 4589 15175 54098 44493 65457 1007 65498 65203 2477 64064 12941 19374 903 8715 16918 30906', 'BCRUYUK93PTA  11729 7059 11443 65252 13454 1 10796 922 5152 3365 378 3 13425 3419 437 15915 1007 16759 72 19374 17591 1736', 'BDR5JX9BUV37  16918 17378 187 17337 1135 15353 41676 20919 46705 12941 19049 1343 180 27139 5152 49755', 'BFKU9WJPBW3M  290 19374 16916 11072 22270 28084 2608 7059 1343 46705 12184 24394 18060 15353 63274 27139 2607 19821 13415 12393 65252 3365', 'BK6KDC7XQRNV  1 378 65252 11443 1007 11265 5152 11729 3365 13454 10796 16916 1185 7059 3655 3419 20623', 'BMAU7QXBN4FJ  43932 19049 54206 61923 17591 12184 7073 3790 12649 57426 63640 15175 64304 15866 17971 17152 65252 15915 23893 16916 72 63274', 'BMPDUT9JBP6K  967 11443 378 2613 9360 3365 15915 65252 4166 22270 3 43932 7059 10796 11729 15845 17591 12941 31715 1981 16918 15201', 'BN2JPKKWB7BX  18060', 'BN7RJDN29WYK  1 11443 63274 2613 16916 53472 15866 31715', 'BP5NMURRTMUN  57909 11072 9812 61923 58249 14126', 'BR4MA8RE6RBX  1981 967 15915 3365 922 4166 43932 22270 1681 3 11443 26576 17591 13454 10676 3655 13425 1185 65252 13415 12649 13218', 'BRK2XVRKMNW4  57909 61923 59118 1466 23020 10676 39553 2608 12941 22513 18060 6786 51716 59948 31715 64064 56475 22532 9876 437 64288', 'BUN755RHTZYQ  1 11443 72 3419 58249 62639', 'BUUKD3DPYB3J  13425 11443 4166 3 43932 3655 11262 31715 967 3365 378 9360 10796 437 1681 922 293 2613 19374 22270 63274 13454', 'BUW8CUU5DFW4  11729 1 65252 11443 3365 3419 58249 3 11537 922 63081', 'BV7PXCX8J235  61657 65252 1 17591 11729 72 1007 9635 16759 22270 903 56668 11443 7392 63274 2242 290 3419 8790 62923 31715 13454', 'BVDFY7CH73JU  3365 1 11443 4166 8715', 'BWRMWB5CEMY4  11265 11443 378', 'BXU9HVRDA4KW  1 11443 57909 12346 2607 12393 31715 63914', 'BXZKYTJX9257  1 19374 65429 12691 1466 54188 59118 65498 10796 44493 3655 18060 2607 14696 15353 62639 30906 3093 8715 57909 11443 1007', 'BY9RZ74TQP4E  64093 7198 3655 36772 17337 57909 62473 16759 34799 50039 931 12649 62639 24492 23831 65203 47292 2613 27980 4166 23668 15915', 'BYD94Q464R2A  1 931 46559 11262', 'BYMRNAMFTZD2  72', 'BZRQ53A3KZPF  23668 11265 23998 8715 49157 17744', 'C2JF6MFBU2ZZ  72 11729 1 12184 1007 3419', 'C2ZMJJQFNA7H  33137 42694 1007 7198 1 17971 37047 15915 65252 34002 15866 44634 3 56489 20623 63914', 'C33Q52Z5A3MW  3419 11729 65252 13454 3655 61657 13425 16916 11443 1 15175 3365 378 43932 7059 967 5204 72 3 922 1007 15915', 'C3R78EZDBD93  15866 11443 43932 47292 922 15175 54098 31715 34578 31395 3655 13425 15353 10676 3419 27980 61923 65498 30906 2613 19374 39553', 'C45497E3D6PU  13454 12393 8715 65252 1 11443 1981 15915', 'C45MAN24BHJP  1 65252 11443 3419 18060 2608 12184 72 20919 11262 11265 180 34041 31715 58572 3655 31395 19049', 'C48R46RYKXEE  8715 11443 1 13454 22270 2953 12941 43932 378 19821 3655 13425 17744', 'C4AMX8UFJHR5  61657 15175 11729 1', 'C4E7FW5C5QQN  17591 15915 4166 2613 3 13425 43932 15201 1981 1866 15442 13218 12649 15845 967 3655 437 21158 15791 3365 10796 922', 'C4ECPZ59BC9R  17152', 'C5A3AAWCFY24  1', 'C5DPCK6DRKCU  1306 290 1 72 967 437 8715 34578 11443 12393', 'C5MZH8A9JZ2V  1 11443 17743 10796 378 72 437 14126 6786', 'C5YN9K3TXPHC  16916', 'C6KVJJTM5UPC  57909 17325 16403 34002 30906 61923 61928 16918 6315 1402 7198 12941 12191 25047 5204 2953 6786 24492 44634', 'C6NJCFDJQTUH  1 11443 967 22270 72 10676 3419 23893 13425 65252 1736 13776 54098 6315 19049 64081 10796 65597 2613 34002 15175 3', 'C6QEEAP8N9BV  65252 3 1981 1 437 9360 4166 378 72 3655 1007 8715 11443 15915 19049 9876', 'C74E5RNDF8QE  11443 1 967 11729 65252 10796 17850 16759 49655 18060 43932 1007 63081 12941 3', 'C7XK3WKZ5CDY  11265 63274 1 2608 19374 14696 4332 13454', 'C8CQNDXEW273  13415 8715 65252 10676 43932 42694 19821 44493 9652 19374', 'CAMEBF9BQ4Q4  5152 58572 16918 48121 12393', 'CCY44DQWAWXJ  65252 61657 13454 967 1 290 3655 13425 3419 11443 5204 11729', 'CCZJU5KF3X3T  1 12649 180', 'CDN4DR4NBNE7  65252 2607 22270 13425 922 63695 30906 2242 4699 13454 437 3093 17325 20244 58249 15353 7059 29846 65597 15175 11443 26576', 'CETZFXEHV3H6  2953', 'CF388FZE43KK  1007 13425 1 44 23998 16403 23893 2953 16916 1185 11443 41676 56668 42694 1981 17744 303 903 22270 31395 31715 15201', 'CFAPKM6TA6UT  5152', 'CJMFFBT2M7FQ  1 11443 65252 180 2613 13218 1981 43932 3365 16916 290 50039 72', 'CK2N7A33M7NE  1 29846 8715 15074 23608 63640 44493 34002', 'CKABMCZBED84  7073 1 11443 378 65252 1007 57909 33137 11729', 'CMQJ6KXWJ59H  11262 65252 13425 5115 37047 11443 1', 'CMYXJPD7ZNDQ  11729 3419 7059 2613 11443 16916 3655 967 65252 56475', 'CN9MCCATV4NB  34002 13425 9652 2242 64064 290 7198 1 1681 12393 63274 2608 437 9812 10796 72 19374 15201 11443 8715 13415 62639', 'CNJMTDTFKANR  1 2607 16916 65252 12393 11443 63274 12184 2613 72 3419 11537 7059 22270 26576 437 3365 13454 967 1185 8715 922', 'CNVUW98UM4TX  1 8715 10796 4166 53966 44493 20623 63081 17152 3655 967', 'CP55YDKNJJ9D  11729 13454 3365 11443 3 1981', 'CPNFFZV6TTQ7  11443 3365 3419 17743 1 1007', 'CPVAW4N9RV2Y  15201', 'CR6R6T9CA6P8  922 967 31715 15791 2477 10796 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 1402', 'CRMVMYUZTWMC  13454 11729', 'CTU3VFAW5XTT  10676 25047', 'CU3CYDPDKRN6  3655 1 437 16759 4166 31395 63640 290 51716 11729 10796 13425 65457 180 2613 19049 1007 3419 31715 65252 43932 11443', 'CVC6NTMW7U78  63274 1 10796', 'CW8K5RX3ZTR2  65252 437 11443 1 20623 15791 10796 3655', 'CWA9WMJMXCP8  54098', 'CY3NMN8VJTJD  1 11443 11729 65252 10676 1007 2613 8715 57909 22270', 'CYXYUWV33HDC  10796 65252 1 13454 4166 16916 11443 31395 31715 437 64064 57426 7059 15791 7073 3419 3655', 'CZ3FXX8QQ2Q6  65252 2613 1 11443 3365 15175 437 43932 967 3655 10796 16916 16403 378 4166 31715 1981 17591 13454 3 52027 12184', 'D355T8YMBZJM  1 7198 187 5152 63229 7073 11537 1007 1736 11265 44493 17971 43932 13415 11072 15866 17591', 'D3E6TFTZ7DRW  1 15845 11443 4166 967 43932 64064', 'D3KXM2DYKAJ2  5204 46559 922 16403 1981 13218 5504 43932', 'D69NE8XM8XTM  1 11443 11072 12191 3655 14696 65252 11729 19374 3419 2608 63081 1981 4166', 'D6HFNER43799  11729 39553', 'D6M2CU78EWNM  11729 11443 1 65252 16916 2613 13454 7059 15915 72 19374 967 12184 16759 1007 30906 3365 23668 23893 17591 1185 11537', 'D7D75DEPX5JC  15175 2477', 'D7M4VMW6UBER  16403', 'D87X2JTRN32U  378 11443 11729 65252 3365 1 8715 3419 1007 19374 13454 2613 13425 922 43932 437 5204 5152 10676 3655', 'D8976PN33EJ9  1 72 2608 19374', 'D9EFPHVNB288  11443 1 22270 54098 12649', 'DC2NV4FANM7E  11729 72 65252 1 40542 11443 13454 378 16916 3419 1007 1185 10796 8715 58249 12649 50039', 'DCR9N485TPZF  13454 11443 65252 437 11729 2613 1007 1 3419 3 3365 922 72 967 16759 64064', 'DD97YTB3A25R  1 11443 65252', 'DEWM6QW6DCKR  29846', 'DFH2U8F3DPP4  11537 19049', 'DJXR5Q6F2QFP  1 11443 10676 13425', 'DM3QP29QBNYP  6315 1 1736 11443 58572 437 24394 26576 12393 1007 4699 9360 16403 1466', 'DMZV48P4RMPU  64304 1 61923 13454 180 2613 12941 65252 11443 378 3655 63640', 'DN69Q7RXWVYJ  58572 55614', 'DPF7W4JA5YJP  11443 13454 1 3365 22270 21158 15915 180 3419 8715', 'DPK3K3WM8AN3  11443 19821 1 48121 28084', 'DRCXDHFMD3RC  11443 378 65252 11265 19374 437 3419 17971 22270 9812 10796 3365 922 967 43932 15915 10676 293 8715 290 13218 11072', 'DRUKRNAVR7YQ  65321 34578 61657 10796 31715 13454 64064 30906 61923 3655 54449 3419 42694', 'DUJYWK2EKP38  23608 11262 37047 5115 3 65252 11443 1 290 61657 1007 1466 42694 19049 25047 15175 15866 64093 53472 293 32200 31395', 'DUMA99735WWQ  437 1 37047 11262 21158 17378 19049 58572 1007 20244 1981 49157 65498 54098 61561 52027 15201 63695 64064 13218 61923 187', 'DVW2FANQNBA5  11729 1 11443 65252 13425 22270 10796', 'DX9M32PQKMYD  61561', 'DXV85Y83EU3P  9652 1866 10796 1', 'DXVCE89UCY93  11443 13454 65252 1 72 437 3419 42694 1981', 'DYW5XRM7ZWE3  65252 11443 1 3 437 10676 43932 4166 58572 15915', 'DZ6PNAQAFVN5  11443 11729 13454 3419 290 1 10676 65252 378', 'DZHU3AVHHJVX  11443 1 3365 15866 72 65252 1981 13454 3419 11729 7059', 'DZTC437PUTHN  16403 1135', 'E286V6Q8XAMQ  437 11443 15201 72 1 3365 65252 42694 63640 13454 10796 17591 52027 22270 8715 63081 15915 8790 378 7059', 'E2PYRZYCT9WJ  16403 1 14126 10796 16759 293 43932 47292 61923 56475 64064 922 3655 15175 19374 8715 34041 65203 54098 8790 3093 17743', 'E3B6DZ6CNETY  1 4166 53966', 'E3Q85E9D6JZT  290 1 61657 1343 7392 22270 2613', 'E4QXPPXPUK3W  1 11443 3365 13454 1007 11729 65252 378 967 4166 16759 3419 3655 8715 7059 19374 11072 7198 63274 31715 26576 922', 'E57XV89NE7AV  53472 8715 13218 2607 34799 56063 1135 24394 1', 'E6DRHZZWJQRP  1 3365 63274 7059 18060 13425 4166 967 57909 378 7198 11443 1736 12393 2613 290 437 65252 1185 10676 3419', 'E72NZT4YZPQB  12649 65252 13454 3 17591 11443 1981 2613 1 1185 42694', 'E7V8FMPXDMMD  1 8715 11443 10796 13218 56063 61923 2607 15353 54098 19049 903 14126', 'E9VRVXPZYDE7  3655 20623 2242 2477 56668 437 922 378 967 15915 13425 3 4166 3365 10676 1981 21158 17591 11443 65252 3419 43932', 'EBC56CV8UU8C  11443 11729 13454 1 13425 65252 378 15175 1007', 'EBENVXH7BK2R  15791 3655 3 15915 922 1 65252 11443 31715 3419 437', 'EBJQRQXZBM3Y  11262 65252 61657 21158 5204 5115 37047 23608 25047 34799 17325 19049 3655 15866 9360', 'EBTE979DVET3  11262 61657 5204 23608 17325 34799 13167 25047', 'EBVJ749KTA2T  3 15915 13415 12649 13425 2613', 'EBY5HM5PN357  1 11443 63081 15915 1007 3365 15845 967 11729 20244 1981 4166 54206 3093 378 3 65252 12393 12941 13425 15201 3419', 'EC5UCTNHA8P5  1 11443 1007 11729', 'ECNAMXQKN69T  11443 3365 13425 437 56489 7198 1402 26576 21158 13167 15442 903 15915 44493 53472 17152 3 8715 63640 10676 12393 1', 'ECRHZ2QKAMXM  11443 1 8790 15353 1306 1135 3 3655', 'EDFC5W2DQU6R  11443 1 11729 378 12393 437 19821 7198 290', 'EF2CAWH33AEA  3655 20623 11443 1 56668 1007 14126 437 42618 967 1981 13218 23020 290 922 16403 22532 61759 72 47839 13454 2477', 'EFHEPE4Z2R38  13454 13425 15175 290 3419 1185', 'EFZRJ7FM7UX7  15866 19049 1 19374 378 11443 11262 13425 3365 2613 16916 65252 7198 8715 1007 10796 967 922 9360 3419 437 43932', 'EFZWT24NXQC7  12468 1 11443 10796 16759 65252 2477 13454', 'EH5TK5Y8B8AA  1 4166 3 12649 15915 7059 11443 65252 11729 17591 62473 72 2613 7198 3655 15201 13454 378 1007 1981 12393 26576', 'EHEB3B5BY3NR  57909 9812 922 437 378 14126 62639 1007 1', 'EHQMBE7U56Y9  57909 34041 6786 25047 14126 16129 16918 2607 23775 17152 54098 293 22513 56063 65505 63640 61759 61923 64042 12468 21204 62395', 'EJ3K9Z9YAUZR  1 1007 65252 3 3365 11443 13425 12393 3419 43932', 'EJAMZ9CCMW5A  3365 15791 922 967 15175 31715 437 1402 10796 3655 2242 9876 2477 3419 21158 17152 20623 3790 56668 5115 27980 64064', 'EJK2MH3KTRXQ  1 13218 22513 44493 15175 8715 61923 10676 54098 30906 43932 11443 27980 42694 15915 36772 13425 15442 63229 64960 15353 2613', 'EKNU9ZQWE395  11729 3365 65252 1 11443 64064 378 437 1007 12184 967 11537 180 3419 2613', 'EM95HWBZ8TAJ  1 11443 290 8715 7059 29846 11729 3419 13454 437 22270 3365 967 20623 17971 23893 8790 15866 28084 1185 34799 12941', 'EMVQK27W5NDD  57909 44 16918 17337 25047 12393 17152 13776 12191 54098 23893 922 15866 16916 8790 63695 42694 21204 61783 14696 34981 15074', 'EP9M2C4FBRUB  1 11443 2613', 'EPF3FDKYZWEW  2607 13425 46705 54098 13776 64042 437 48267 16918 62473 9812 21158 54206', 'EQAB6EW4ZZ7V  11443 16759 65252 13454 61657 15791 1 63640 17591 11729 15915 15201 15845 18060 8790 64064 72', 'ERKUDKEXM3VQ  15353 28084', 'ERTQFH5VEDKF  28904 437 72 1 1185 26576 7059 7198', 'ETAK6XP8AF7F  1 11443 64064 13454 11729 378 2613 3365 1007 16759 61657 17591 922 3 65252 17850 8715 9635 3419 180 967', 'EUDREHMDWCMY  11443 437 1 967 1007 43932 12393 8790 61923 3365 7059 65597 2608 922 290 9876 63640 7073 13425', 'EUMAH9EN3BBK  12941 26576 43932 10676 13218 10796', 'EUPW322BXUKC  437 1135', 'EVCJ3X6XMJW2  10796 967 15915 437 65252 922 1185 21158 31715 19374 2477 11443 1 13454 63274 72 57909', 'EVDZ7XP8Q6ME  9876', 'EWCXDQ6KCHFR  15915 3 11729 2608', 'EWVM3RD494DD  11443 1 11262', 'EXRZHTDHB85E  967 1 11443 7059 1007 3365 437 3419 65252 16916 10796', 'EY45E6QXEERF  13425 3 1981 43932 1', 'EZRPDPE94EB4  16403', 'F2BEVUVEUWV5  57909 61923 46559 58249', 'F2J6YQ64JUEF  1 13454 7059 11443 72 8715 64304 16759 31395 27980 3365 11729 1185 3419 19049', 'F3C4R2X2D8Z9  11443 437 65252 43932 13425 1 9951 15915 3', 'F44XTQC48KHV  1 1343 2613 11443', 'F5VWDRNZR2K4  1 11443 10796 22270', 'F6472ZQVM26Y  43932 15353', 'F79T86TYKFKA  5152', 'F7DE58B8EJJ8  1 7059 11443', 'F82NKU9VD9H9  24394 11443 1 3365 4166 967 3419 19049 15201 1185 15915 17591 3655 8715 13425 2613 922 3 43932 46705', 'F89V9KWHJCNJ  1 11443 63274 43932 22270 2607 15791 8715 3 15866', 'F8FDFYWPBURZ  1 180 10676 3 13218', 'F962DZRF6VX8  17591 15915 4166 2613 3 13425 43932 15201 1981 1866 15442 12649 13218 15845 967 3655 437 21158 15791 3365 10796 922', 'FCUDBZ6MERYD  11443 23020 22270 1736 290 65597 1 7059 13425 1466', 'FFAH3JQJYJP5  3365 11443 3 437 180 967', 'FFFBC9DBRVYW  11729 3419 11443 65252 7059 10676 3790 5204 16916 15915', 'FFVNYW45ZMUN  15353 28084 11443 11729 1', 'FHWAZT5P9XMP  1 11443 7059 3655 26576 3419 4166 43932 2477 19374 1007 65252 3 1981 967 7198 437 64064 63735 922 12468 1135', 'FJVEZBNBBFR3  1 13454 63081 42618 15353 28084 2607 59948 7392 10796 21204 7059 273 44493 11 1185 63695 63229 15442 33137 7198 19374', 'FJXXJRDJ9CVW  57909 42618 65446 7392 56668 65597 3093 23831 2613 46874 63081 17325 3790 63640 6786 34041 180 9652 60694 17850 15791', 'FM2EB9AEX8BD  53472 7198', 'FMEF8QK4WWBU  1 11443 15175', 'FN6QDDTQ9WFD  437 1 65252', 'FN9DH89AFWD9  1 11443 3365 65252 378 1007 437', 'FPQ3BTKJPXZW  922 3655 10796 11443 2607 13454 967 437 17152 2477 65252 13425 10676 31715 31395 61657 17591 3365 40542 1185 19374 57909', 'FQ7NMWFEVQTN  64081 12393 64064', 'FRPNXXU2CBDU  12941 11443 4166 63081 42694 56489 13425 13218 180 290 10796 2607', 'FT5PZDQB8DCV  31715 967 15791 15201 17591 2613 11729 22270 16916 2477 10796', 'FT5ZK44EJX52  1 11443 3419 58249', 'FUK379VYMY56  11443 65252 1 11729 2613 378 34799 44', 'FUN2XK8KM8EX  20244', 'FUR73RQCJTR6  43570 3655 4166 12941 64304 8790 15353 64081 1981 17325 8715 5115 922 293 43932 63640 3093 903 12184 6786', 'FUUBP72BNH29  437 4166 3365 2613 967 13425 15915 9360 12649 3 11443 1681 378 13415 290 8715 13218 1981 10676 1007 7059 3655', 'FVUQ2XAX4PA6  7059 22270 1736 63274 3 17591 1 437 15915 16916', 'FVXE8QUNVUZJ  61928 967 65498 31715 22532 23831 65429 1185 28904 7073 5152 11072 63695 64081 19374 23893 72 1306 19049 34981', 'FWJ2URJVXQ58  11443 1 11729 12393 65252 72 1007 7059 7198 2477 13454 26576 64064 967', 'FX87229TXHHV  53966 64064 4166 10676 65460 23020 922', 'FXMX8QJ72MCV  2613 187 27139 13425 65457 1866 36772 49755 23020 12941 29846 1306 54098 48267 13218 53966 48594 17744 22270 65597 10676 12346', 'FXTA7R9CPWYM  65252 28084 61657 15353', 'FXX3F87H3E62  16403 1 16759', 'FYHK7CKA44MZ  9876 2608', 'FZH8A3P5FPVD  64081 24394 20919 46705 65597 32200 37047 65252', 'H2HY7NP8MUVM  3365 1135 72 1681 15915 3 13415 967 15866 1', 'H3VAMU9Y4TBK  11729 65252 2613 13454 1 3365 16759 16916 11443 1736 63274 19374 1007 22270 10676 3419 967 3 922 12393 1681 1981', 'H4Z23TDEX3CK  903', 'H5F7B99BQ57C  37047 11262 65252 21158 63081 63640 25047 23608 29846 12649 56668 65597 72 16403 63274 22270 13167 65457 44493 65446 3655 4332', 'H6K8UUTN29X3  1 3419 10676 17743 187', 'H6PJVRMK4HJB  1 54098 3093 11443 7198 2607 25047 22270 54206 8790 72', 'H8Q3XWF7PFTW  57909', 'H8W8JAHWUZJX  17325 50039 44634 23775 17744 42618 65597 47292 64064 63695 11537 15175 12346 37047 11262 5115 13167 34799 23608 31395 61657 7198', 'H9A424UQ99PF  15866 8715 65252 15915 2613 8790 29846 11443 4332 63640 15201 3655 16916 437 13218 17591 28084 42694 4166 13454 62639 1306', 'H9D4H5HQZAK7  23775 11262 5204 1 11443 31395', 'HAENNPB6TEH4  1 4166 65597', 'HBCCYK2279J9  1 11443 437 7198 1981 3655 13425', 'HBDP4Z53XTWU  11729 1 11443 12393 13454 3365 61657 20623 3419 16916 16759 72 63274 65252 8715 3', 'HBWHF6B7NVBY  15175', 'HC4E9D3VPCA5  1 12393 11443 2608 3419 17744 12191 22532 17325', 'HCVCXVPPPVE9  11729 1 8715 16916 13454 1007 65252 3365 922 15915 11537 3655 378 11443 967 10796 3419 20244 22270 16759 13425 72', 'HEPMAKU4T2BA  5152 42618 11443 1 34981 2608 62639 13218', 'HF5XFMH6N2HP  12393 437 11443 3', 'HFAZ7RHH836D  21158', 'HFTCTKVQJEW3  64064 57909 26576', 'HHNW8RHQ6ETX  57909 44 16918 17337 25047 12393 17152 13776 12191 54098 23893 922 15866 16916 15915 8790 63695 42694 34981 15074 53472 9812', 'HHPHA7958U2J  1135 19374 1007 42694 58249 31395 26576 19049 273 10676 64042 13218 34981 10796 44 40542 34799 30906 13167 1343 22513 43932', 'HJX38Y8YRXVN  23668 2613', 'HMW5WUDCQF45  29846 62923', 'HP5BMFR35Q2F  9635 61657 72 13454 5115 11262 10796 33137 4332 15845 16916 378 15866 23775 7073 3655 11537 7392 11729 63274 5204 21158', 'HP73Z3J4UHQJ  16916 26576 23893 7059 17378 12184', 'HPQ4B538855P  378 11443 7059 20623 65252 1 3365 11729 437 11265 967 16916 1736 290 7198 17591 1007 15915 21158 17971 5152 61657', 'HR5MJJ5PA9H2  57909', 'HREMRNK879YN  10796 13218 1135 63640 15175 3419 65252 9812 53472 1185 43932 1981 3 22270 9360 1007 11443 15915 12649', 'HV87TAFN8ZZP  1 11443 64304 16759 65252 13425 2613 63640 3655', 'HYB3M9ADDUFU  63081 15845 54206 378 1981 3 15915 437 1 34041 16759 7073 11443 14126 3419 12468', 'J2XWHQXURCV8  62395', 'J398KJ2Z7P9R  1 13454 11443 16759 1007 7059', 'J3HKNCU45HYM  11443 10796 1 3365 437 1402 60694 15175 2607 3 30906 4166 27980 9635 62923 63640 18060 43932 7073 72 922 37047', 'J45KRHJBEJ5D  967 922 31715 15791 2477 10796 21158 2613 3655 17152 31395 437 9876 12346 3790 20623 27980 64064 1402 58249 47292 24492', 'J4P6DUZ665DU  65252 1 65597 19049 3419 15175 15353', 'J4PFB53C6NBM  10676 1 11443 1007 3655 15175 42694 65252 72 13425 63640 13415 62209 1866 13218 3419 15915 56489 64304 54206 4166 44', 'J4ZBYTBJH2ZM  11443 21158 1 11262 967 65252', 'J596PHMJXDTH  437 9360 13425 967 15915 19374 43932 922 13415 7198 1981 15175 15791 65252 2613 10796 11443 1135 903 3655 12649 15201', 'J69263ZHY78A  11262 61657 34799', 'J6JDAQTX352R  1 1981 52027 12184 23831 11443 11729 437 65252 42694 2613 180 63081 1007 3365 3655', 'J795CFWA2DMM  65252 1', 'J83WAKD4DKYT  12346 5204 20244 48267', 'J84ZZV3Z95PR  65252 11443 63640 8790 922 11729 3419 13454 56489 26576 31395 19374 43932 10676 29846 65446 3365 61657 63735 12649 13218 22270', 'J8R89H2RCP9Y  1007 44 293 7059 11072 2477 11265 65252 378 1 11443 3419 3365 61657 13454 11729 72 437 967 290 3655', 'J94WQF9ZMEJF  11729 13425 3 4166 3419 3365 15866 11443 1 378 967 16916 29846 17591 13454 65252 61657 2613 922 19374 16759', 'JAAU6JMRXUCK  1 27980 11262 23608 43570', 'JBDJAZCYKRBC  1 4166 11443 2608 12941 1135 11537 378 43932 23893 64064 12184 65446 18060 63081 1007 63274 13425', 'JBFEY7VD3HV4  15915 1981 13425 3 15442', 'JBPR89NW64QN  11729 11443 13454 3365 65252 378 7059 3 1007 15915 1 3419 8715 922 3655 2608 72 19374 16916 15175 42694 17971', 'JC96WTBJMHWH  22270 11443 3365 13425 15915 16916 31715 437 922 2613 63274 11729 7059 61657 1736 17591 10796 13454 65252 1981 1 3', 'JCC2DWBR7XUU  11443 1 8715 437 37047 11729 26576 13425 13415 23608 54206 39553 7198 2613 25047', 'JCT64W392E57  11443 1 65252 11729 10796 1007 4166 10676 3419 22270 13425 64064 2607', 'JDJ5EEHDZ9JX  378 9812 437 10796', 'JDMYJXZNU3CD  1 11443 11729 3365 65252 8715 922 64288 24394 7059 58249 16916 20623 967 1007 64064 3419 22532 19821 12184 23998 1466', 'JDPYNTQQPZZX  1 11443 3 7059 22270 3419 8715 437 13454 72 1981 2607 922 13425 1007 13218 12393 42694 10796 65498 3655', 'JDT3ABTEJBF8  1135 63274 5115 11443 43570 11262 34799 27980 63695 19049 8715 3655 56475 64064 65457 54449 17744 33137 187 46874 21158 18060', 'JERD8N6PZ3TH  11443', 'JEXXY67FKFXP  3365 11443 15175 7198 53472 1981 63695 65252 10796 1343 34578 13218 15866 65498 31395 1135 32200 63081 8715 12691 3655 26576', 'JEZBK66T7NQX  10796 48267 3655 65321 54098 16129', 'JMC6DADPBM6M  1 11443 44 3655 7073 43932 3365 65252 8790 33137 61759 49655 58249 63274 63640 57909 18060 64064', 'JMRH28HYZFU7  1 11443 3365 13425 437 7059 1007 3419 65252 15915 3 922 16916 1981 19374 12393 22270 11729 378 15175 19049 13454', 'JN2XNZWX2CR9  10676 1 11443 3419 273 437 2613 1007 17591 290 72 7059 922 29846 378 54098 10796 3655 22270 65252', 'JN4874FEB985  15791', 'JNJ9YR6RHM9M  1866 43932 3 2613 15915 13425 17591 4166 10676 1981 11443 1 62473 65252 15201 23020', 'JNVVXV45BR8D  11443 1 3365 65252 378 4166 967 3419 61657 8715 2613 43932 290 437', 'JP5YAB4JXTWZ  63274 22270 12184 65252 437 13425 3365 11443 15866 3655 12393 1 3 7059 15915', 'JPB84HXA7WX2  1 437 11443 3365 10796', 'JPXJC72CDA9F  1 922 15915 13425 11443 3419 7059 13454 4332 7198 967 65252 22270 15791 437 11729 20244 21158 2608 1681 378 10796', 'JQBMKEQYTQUW  1 11443 378', 'JR78WERUW9C7  37047 1 11443', 'JRAJPNPN5TJB  31715 15791 922 13425 10796', 'JRATTYM9VD9Z  378 11443 12184 11729 437 65252 17971 15915', 'JRFZQHMJQR3E  57909 44 16918 17337 25047 12393 17152 13776 12191 54098 23893 922 15866 16916 8790 63695 42694 61783 14696 15074 53472 9812', 'JT876RTR83AV  19374 30906 65252 1 62639 63274', 'JTBPWVT97NYY  63274 11443 22270 26576 7059 65252 1 922 11072 19374 5204 53472', 'JU77UEC97UDJ  922 1 11443 65252 3365 13425 3419 72 15915 11729 2613 13454 3655 19374 15201 31715 1981 8715', 'JVCEDX6RJ4EW  13425 15791 3655 3 15915 7059 50039 17591 31715 437 22270', 'JW8XWRMW9VFP  1 3655 3419 8790 1981 43932 5204 63695 8715 19049 65252 2613 27980 13454', 'JW9WRT8TQE2E  9652 65498 9360 4589', 'JX5VQWN2CHD2  378 922 2477 64064 3419 72 967 65252 16916 20623 21158 11443 31715 17591 7198 3655 11729 1007 10796 437 3365 3', 'JYHU927PXJQ6  53472 49755 54206 2607 46705 22270 53966 21158 1007 58572 18060 3419 922 43932 61923 8715', 'JYNEVAMQZYKC  1 10796 1007', 'JYW5UZBB5CEQ  11443 2613 61928 29846 1007 58572 4699 3365 1 8790 290 1981 12649 8715 7198 187 9812 922 56668 63914 12346 19049', 'JZB9VEEEU2P7  11443 3 437 4166 62473 13218 12649 47839 15201 8715 967 15915 3419 13454 14126 2613 43932 10676 17591 13425 1981 1', 'JZBWAEVDWH3W  2613 15915 13425 31715 65252 922 4166 43932 3 3655 12393 10796 967 15845 437 49655 12941 22270 47292 13454 16916 72', 'JZD9WEZR3A4U  8715 11443 54098 13425 15175 10676', 'JZF9NJZ2Y4RB  65252 13454 3 17744 11443 3419 27980 16403 4166 3655 30906 31395 64064 10796 63695 922 19374 39553 31715 12691', 'JZRY2PWANY49  1 11443 22532 12393 15353 63640 23020 8715 46705 15845 19821 65429 3 7392 23668', 'K2363XD4JVP5  13454 1 11443 11729 437 3655 65252 1007 14696 12191 1306 46705 15866', 'K2Q44KQQQ4EC  5115 61657 11262 34799 23608 5204', 'K39TAJ7HYJ64  9360 290 65252 1 967 51716 9652 1007', 'K3CXMAEJFUBK  16403', 'K3R673R5THDW  72 14126 63274', 'K5WJ5X9ENBWE  15201 2613 3 4166 17591 10676 17744 43932 13425 62473 11443 1981 65252 922 15791 437 22270 19374 15915 15845 967 57909', 'K7JUPV9NCH9F  1 3365', 'K86TEMEFVDBP  21158', 'K86XA4VXJKK6  10796 3419 1 64064 7198 11443 4166 33137', 'K9MHV6U452CJ  967 65252 4166 15915 2613 3 9360 922 15201 13425 43932 31715 63274 7059 10796 63081 1681 15175 20623 11262 22270 16916', 'K9UX5PHM9JC8  31715 15791 11443 1 3419 2613', 'KCPETHN7Z75R  437 8715 1981 7059 1185 290 1343 62639 1306 1681 3 922 967 72 11443 19049 1', 'KDVD3BV6X2RX  56668 3655 20623', 'KEM5TQUDBP7B  1 2607 3 11443 12393 3419 72 31715 15915 2613 11537 16916 7059 65252 63274 12184 22270 26576 437 8715 6315 16759', 'KEQVMAEN9J42  11443 11262 1007 437 1 61657 378 37047 5115 7059 13425 25047', 'KF2VBQBB6N6E  24394', 'KFY8YZUJ5VUD  1 56489 15866 14905 49755', 'KHHA8F6565PR  3365 57426 10796 1 437 11537 56668 3790 903', 'KHWM855CMF85  1 11443 378 1007 3365 13454 64064 65252 8715 2242', 'KJ8RMJ7TRZEA  13425 15353', 'KJK9HH2XRXHN  15353 58249 10676 60694 42618 12468 19374', 'KK7QX44DRJ4B  1 437 1981 290 11443 3 8715 12393', 'KKD8TZCYHVP5  65252 13425 53472 62639 12941 15915 63274 15845', 'KKHY62AYX98F  1 13454 437 3655 8715 9812 10676', 'KKT99HB7D6Z6  13425', 'KKWPB7DCUEEH  13454 16759 11265 17591', 'KM6UUTJPUTYQ  9876 13454 11443 437 13425 8715 15791', 'KM7NCQM5356D  11443 1 4166 54449 3419 9876 65252', 'KMPXRN4MTNZN  11072 19049 19374 1 11443 293 15175 32200 15866', 'KN226XWZRQQY  72 43932 922 65252 378', 'KN3MQB989ZXV  11443 2613 1 8715 13425 43932 3365 13218 290 47292 54098 65252 3655 3419 7198 9652 5204 12691 8790 2242 9635 3093', 'KN5B2XWF73ZF  65252 378 11443 64064 11729 922 16916', 'KNMP2CDD285H  1 11443 8715 12184 922 10796 42694 43932 22270 3655 13425 15353 15175 10676 54098 13454 65252 13218 63229 9652 56677 7198', 'KP2QWK4M9CWK  1 11443 3419 8715 11262 65252 61759 42694 72 25047 23608 34981 24492 30906', 'KPT2D5HVD36F  33137 42694 5204 1135', 'KPYQQ7DRVP9K  16403', 'KQ99E4VRF2M9  967 11443 64064 1 63274 3365 61657 63640 64304', 'KQ9AKHJWKFUC  19374 61923 11443 2608 54098 967 12191 3655 19049 15353 290 13425 30906 3365 14126 3093 58249 7198 15175 42618 11072 65252', 'KQCYCYK7NY2E  23668 7059 8715 26576 12184', 'KR3H8UBTN9K5  31715 15791 922 3655 11729 10676 11443 17591 15915 10796 437 2477 65252 8715 13425 967 3419 22270', 'KRDB3868PN2W  5115 37047 61657 13425 14905 34799', 'KT2KMZDAXYAU  57909 293 9812 61923 9635 10796 54449', 'KVNU8JR4NZV2  19374 10796 1185 3365 4166 11443 65252 28084 293 7059 9360 2613 11072 43932 9951 922 13454 17337', 'KW4MU3E52BFP  65252 11443 1 10796 12393 15175 3 63640 967 8715 13454 11729 20244 3419 2608 378 30906 19374 1007 31395 16759 1981', 'KWPK3555ZPWE  1 43932 31395 8715 17743 11443 2613 15175 2608 59118 1981 63695', 'KWXX5VMQMKMH  1185 3419 13218 9652 11537 56489 922 49157', 'KXA2BXX3TVKF  65252 32200 5152 61657 46874 31395 11729 30906 11443 63640 16918 3 2953 12691 19374 17152 46705 61923 23831 437 15866 1185', 'KXYXFBYAFQKK  10796 3365 15791 922 2613 967 3655 12346 12941 65252 9876 56668 20623 58249 3419 21158 17152 64064 2477 437 27980 54188', 'KZ9NW88KXQTT  63081 15175 15845 922 15791 22270 3 2607 10796 3655 61923 1 8715 54098 43932 11443 56668 10676', 'M2326CJCVHTY  15866 47839 6315 58572 56668 42694 65429 24394 4166 53472 12184 11 17325 2242', 'M23E5RHH4B4J  1 11443 8715 437 22270 4332 378', 'M29BY7VHAV68  1 11443 63274 1736 15175 22270 11072 13218 15201 63640 15915 15353 15442 2242 13425 922 20623 19821 7073 187 49655 1135', 'M2C73UYV7UCT  62923 62473', 'M2YR6FE4DT6N  11443 1 11729 65252 3655 13454 290 437 7059 1007 1981', 'M39W4K75979H  11443 1007', 'M4QWZ7BVDKKM  53472 7198 1135 3 437 65252 1 11443 15866 15915 10676 13425 1007 1981', 'M7YD6HXQCXER  8715 13425 2607 54098 10676 22270 10796 15175 61923 15442 43932 13218 12691 19374 922 65498 15353 31715 42694 19049 39553 47292', 'M84KE8BRXJM6  57909 61923 13218 63735 42618 15845 1306 10796 48121 12941 13167 51716 29846 64304 63914', 'M8AV396RE7J7  11443 1 13425 65252 72 15915 967 8715 1466 3365 2613 922 11072 16916 378 1007 437 17591 63274 11729 3 13454', 'M96JTCJN9QU3  58572 1 11443 10796', 'M9MWNR5CHUDW  1 13425 3 54206 1981 4166 63081 15845 13454', 'M9WP275WU5QM  1343 1 48594 3655 8715', 'MA7R9ZM476MA  57909', 'MANEA2TZZAHN  922', 'MCV78CW87ZAN  11729 11443 11537 43932 273 5204 13425 72 9876 4166 41676 22270', 'MDA84NUF5Y3M  11729 13454 8790 65252 12184 7059 1981 64064 16759 16916 378 15915 16403 7198 1 13425 2613 19374 10796 11443 15866 19049', 'MDQHE8E3WD7X  61928 13425 39553 15175 922 42694 11443 2607 47292 2613 437 3419 9951 27980 22270 43932 10676 54098 3655 13218 30906 31395', 'MEZA267RPBZ9  11443 1', 'MFC3RC5FTYDY  65597 23668 1981 42694 47292 13167 56677', 'MFKR9PHFXUM9  29846 11729 11443 72 967 378 437 65252 1981 1 15915 7198 12393', 'MFRU8RHTEHBJ  11443 11265 13167 1135 12393 53472 37047 23608 1 54206 11729 2953 2608 4589 922 7059 17743 54188 10796 64960 65498 17325', 'MHEDYU5532J8  1 11443 3365 1007 378 19374 437 7059 3 65252 290 11265', 'MJU6E6TN6PKE  11443 1 11262 19374 437 7059 65252 43932', 'MKDU8JRZVHK2  19821', 'MKP3BMQFANJC  12191 3 12393 16403 64304 3365 967 1 12941 8790 57426 34799 49655 33137', 'MMCYNBJCQ7WM  1 13454 54098 12184 59118 43932 2607 10796', 'MMUKBMQZN5TM  11443 1 922 967', 'MNYB8AMD2QM6  14696 2608 11443 65252 19374', 'MPK3CPRMA95Q  1 11443 7059 290 19374 11072 16916 28084 2608 22270 1343 46705', 'MPVA7U55QB5Y  1 378 3365 11443 13454 65252 11729 11265 5152 1007 10796 3419 3655 7059 16916 1185 20623', 'MR89R37UDPHQ  922', 'MRT8FUVX979T  65252 16916 3419 11729 3365 378 4166 22270 1185 1 437 7059 1981 15175 43932 10796 967 17591 8715 15915 3655 13425', 'MRXN7YQ6M2H3  1 11443 63640 65252 437 3419 11729 3655 13454 8715 22532 31395 43932 13425 10796 64064 9812 4166 3365 28904 15915 378', 'MTZHWE7HDY4P  1 437 1185 28084 1306 63640 2613 61657 922 23998 48594', 'MV37BXUM68K5  1 11443 63274 13425 7059 378 2613 3365 11729 922 1736 3655 57909 437 11265 22270 967 3 290 16916 65252 2477', 'MV4HHMCUFFYQ  3419 13425 12941 16916 11729 11443 13454 1981 12184 21158 22270 65252', 'MV93EMU87Q85  4166 3 64304 62395 49655 31395 32200 1 15175 53472 64960 1981 17744 23831 16403 50039 65460 54206 437 180 13415 9951', 'MWFJCDWV2FKA  26576 1135 8715', 'MWWF79234ZUA  5115 2607 44493 31395 12191 13218 1185 33137 20623 11729 63229 27139 39553 15915 34041', 'MWWR28MQD5QF  60694 13454 922 17743 1 2477 37047 19821 62209 28084 4332 15866 11262 3365 12184 1736', 'MX6HWZY6KNFN  1 72 11443 1007', 'MXEUDXF2VVN8  1 11443 7059 2477 10796 11729 63640 13454 61657 3655 922 12393 62473 8715 437 15175 18060 54449 1736 4166 63735 20623', 'MY8EBUFRNBA6  64081 34002 61928 64064 273', 'MYJ5X9VNU3VF  56677 1 12691 8715 62473 19821 29846 27139 1135 43570 43932 54188 3655 63229 64081 57909 22532 922 17378 1402 32200 27980', 'N3FWQHE8J2U4  2613 11729 11443 1 3419 65252', 'N3M4K873N75F  967 3 1981 378 273 10676 1736 437 65252 1681 72 15175 33137 7198 1402 15915 13454 13425 8715 63640 9652 54449', 'N3VK3HQYCRVF  11443 27980 9652 63914 48267 17850 19821', 'N63M7WC5PPNE  10676 437 1 3', 'N6WH4W9EFDHH  9876', 'N6X8M46XZVDK  13425 1 437 4166 15915 378 13415 3 13218 10676 1981', 'N86B4K3EXFTB  57909', 'N8CENDDZRRM8  5152', 'N8T87BUMMCNN  11729 12691 1 1007 53472 7059 19049 2607', 'N93DXHJ3YEN8  1 11443 3419 967 3 12393 15791 922 1402 27980 13454 43932 12346 63640 30906 34578 58249 12184 20244 15353 3655', 'NAA99D2BZ56X  16403', 'NANFQA4T2YHK  34799', 'NB5WK7FWHK7M  1981', 'NBPHZ683P6R9  1 65252 11443 8715 13454 3', 'NBU6VXTNX5FR  1 1981 3 64064 8715 13425 10676', 'NCAXTJTRP3RX  57909 65460 52027 49157 34578 3365 63640 26576 34981 42694 46874 64081 21204 34002 48594 14905 1343 11 13425 62923 17591', 'NCEV347R2D2B  54206', 'NCU3Z8WXH3CY  72 2608 31395 11729 43932 15353 58572 6786 18060 65252 63640 65460 57426 3419 15201 63274 61759 46874', 'NCV65E5XARUW  63274 11443', 'NCWVNW4HF4DX  43570', 'NDBPWYHEBCRT  10796 1981 8715 3 11443', 'NDWPCCZXHMCB  61657 1 437 62473 61928 4166 12468 14126 63735 1736 11443 49157 62639 15845 65252 65597 63914 12346 4699 48267 53966 1135', 'NEAEUTBQTR28  1 3 43932', 'NEH6P56WYJE7  437', 'NH3W3XM9PPF9  2608 14696 26576 57426 63735 64042 61759 49755 15845 12346 42618 53966 44634 61657 14126 56677 34981 7392 65321 63695 27980 3655', 'NH6HAJMCE79H  57909 44 16918 17337 25047 12393 17152 13776 12191 54098 23893 922 15866 16916 63695 42694 21204 61783 14696 34981 15074 53472', 'NJBZJ5Q5DCUU  43932 9360 437 15915 1681 2608 967 1981 1185 10676 3 13425', 'NJK2P74WCBD4  2608 64288 11443 11', 'NKCNNRHQ7B3V  12191 28084', 'NKNTKCT8FDPF  16916 3 11443 437 290 19374 63695 17744', 'NKW79CN6XPH9  15791 11443 1007 967 437 378 3 43932 1981 10676 15915 13425 1681 72 3655 12393 13415', 'NMDUAREP2KUQ  63274 11443 7059 2613 61657 10796 12393 11072 12184 65252 1 4166 16916 290 3655 378 3365 1185 1736 15915 437 72', 'NN6MTYFP4PY9  72 11443 1 3365 1007 65252 3419', 'NNNVCB8NER8N  44', 'NPNH3HZZ7WYY  967 437 290 11443 378 1 13454 65252 10796 7059 12393 1007 17591 15915 4166', 'NR7DZN3X2EBN  1 3655 922 2477 65252 13425', 'NT56V858H77J  18060 8790 20244 15866 22270 28084 64064 15201 5204 7059', 'NV5EZB7CNPNB  11443 65252 3655 19374 12941 43932 1135 13425 8790 59118 56489 1736 13454', 'NWCR9K5XA5QE  1 11443 1007 3365 13454 65252 378 4166 437 1736 967 8715 922 11262 61657', 'NWNQCFFYE4VW  1 49157 22513 17152 56668', 'NXQPCMM2BKUX  1 3419 31715 63274 3365 13454 29846 65252 2613 44 15866 11443 10796 17850 4332 15845', 'NY3VQ7KRM6BZ  7059', 'NYKHU586DHW4  1 11443 437 3419 16759 8715 54098 15353 180 7198 34799 54449 15074 23998 922 30906 10676 17743 17152 34981 21158 65252', 'P3X2FBDH4WM5  967 65252 10796 9360 922 3365 4166 3 1681 1981 10676 7059 13425 19374 13218', 'P4H74M25QJBP  15845 11443 1 31715 3419 59118 62923 2613 48267 834', 'P4V6BD6FVWRR  11443', 'P5H6H5RART6M  15353 3093 56668 16759 1343 43932 922 12191 2607 7198 1 3 10676 1306 62395 12649 62209 15915 47292 1007 50039 13454', 'P5WJ223XPJ22  58249 11443', 'P5ZVPDQ8AEXM  13218 1681 65252 13425 54098 290 11443 7198 15201 3365 378 3419 967', 'P66VMHTE378C  922 1 2477', 'P6NEE6YYV5R7  64093 13218 34578 180 56489 16918 49755 15074 20244 23608 56668 293 56677 23020 8715 65429 17337 25047 63640 65321 7198 3093', 'P7D4EUQUX2CZ  1 11443 437 3419 8715 12393 378 967 2613 65252 15791 64064 3 3655 3365 16916 922', 'P8F7Z3EUH9DQ  16916 65252 11443 3365 7059 1 15866 2613 63274 3419 15915 22270 31715 21204 11729 19374 17591', 'P8HK46UX574W  13425 11262 4166', 'P8MXWWZ8CH4W  57909 9635 24394 53472 3365 48594 63640 34578 42694 11443 54449', 'P9U4EV6WH8RZ  9652 9360 20244 1681 437 11443 1007 65252 2613 3 7198 11262 1 903 7059 378 967 5115', 'PA66F4649TZW  1 13454 11443 378 11265 54449 3419 9812 967 11729 15353 931 20244 2242 14126 7073 16403 4589 18060 8715 43932 65252', 'PACD9DYXCWQZ  1 11443 1736 22270 13425 13218 26576 31715 8715 3655 922 65252 3419 4166 61657 9360 11537 293 1135 15866 13454 15791', 'PANA8PK8W4UX  3655 10796 10676 11443 8715 13425 2607 15175 13218 922 42694', 'PBJQKKXTAETJ  1 65252 11443 26576 72 12191 3419 1981 63274 56668', 'PC2QNMKVV4FF  16918 49755 13218 1 61928 34578 15175 13454 65252 19821 53472 63695 1402 13425 42694 14696 37047 44493 25047 63640 10676 10796', 'PE747625JT29  20244', 'PEEWN86H784Q  15915 43932 3 13425', 'PF4D22U9T7KA  63274 19821', 'PJYV8V57VMTV  23998', 'PK8TNX5C99M5  62473 4166 15201 1866 10676 9951 2613', 'PKDF2VFA2MVY  7198 1135 53472 31395 32200 15175 437 1 44 1007', 'PKTTVBRURFJA  11729 378 65252 11443 8715 24394 56489 17325 13425 17971 10796 56668', 'PME59NQHHNFF  11443 65252 1 13454 1007 3365 2607', 'PN38UPZYRCZ5  1 11443 63274 12184 11729 290 16916 64064 34578 31715', 'PNBZ6VY8XK4R  1 11729 1007 11443 9360 19374 2613 378 5152 65252 20623 922 31715 11537 20244 4166 22270 10796 43932 13454 12184 9876', 'PNVNX5EFYF6Y  1 11443 15915 437 65252', 'PPAZE8TZUT7Y  16403 14905 1', 'PPC2YMNFW26C  1 65252 1007 11443 3 967 29846 1981 378 16759 15915 3419 11729 17591 3365 4166 437 13415 180 13454 64064 7073', 'PPEM5P6P6Z4B  14126 7073 4166 922 22270 10796 19049 3419 11443 1 46874 63640 7059 1185 58572 64064 4699 9635 9876 3365 1007 15866', 'PPNHU5B2EMMR  1 11443 23668 30906 12393 29846', 'PPUWFP6XX6UW  12184 11443 1 8715 7059', 'PPYNW8R2TWNE  8715 1 378 11443 967 13454', 'PQWDX8U7Z53P  1 65252 13454 12184 14126', 'PR4XHVTMN7VU  1 11443', 'PT9V2YWEJ5RN  13415 1 437 11443 15175 3', 'PTWUEH5V98RW  1 8715 30906 31395 5204 1981 64081 26576 10796 16403 63274 12468 18060 22513 7073 11443 16918 9635 6786 54098 11537 3419', 'PU3ZW8NH4JQH  65252 1 1007 11443 17591 3365 21158 11729 43932 56489 3419 33137 3655 42618 9360', 'PVCCZE8WJR8W  12393 12941 64288 1736 19821 7059 17378', 'PVJRPT9FVA9D  10796 11443 378 2608 967 13454', 'PVX55TM444PT  10676 922 1 3790 64064 11729 1007', 'PWVAVEEJTHAP  65252 27139 15353 11729 48121 28084 290 17337 46705 1 23831 11443 2613 437 22270', 'PWWJZXDRZEVR  15845 3419 11443 65252 4166 63081 3093 54206 3 15915 15201 12941 17591 180 10676 1866 23020 49655 43932 12649 62473 3365', 'PXHUZPJ3KC9B  11443 1 48594 63695 1007 53966 378 3 8715 10676 13425 2613', 'PXTKATB9EXNY  21158', 'PXZCYUABZ78H  60694 11443 15175 1 2607 3 30906 4166 27980 9635 62923 18060 63640 43932 7073 72 922 37047 42694 3419 57909 12393', 'PY2CPJN8XRR5  64064 1', 'PY5RKU6PRQAM  3419 3655 11443 1 13454 20919 24394 967 1135', 'PZNDXKAJ9NJD  1 11443 13454 72 65252 61657 3365 3655 13425 437 1007 12393 3419 11262 2613 11729 63081 8715 15175 378 25047 1981', 'PZWA94R29TM2  2477 180', 'Q27V6T2MYPXW  11443 44 65252 1 20244 1007 13454 11262 3419 20623 3 5115 437 3365 13425 12184 3655 12393 19821 967 18060 63274', 'Q3APMC7RDRVH  6315', 'Q3B5A29H5KCN  16403', 'Q44A6V4WQZTE  11262 5115 1', 'Q72AXX9R3EKU  1 11443 15791 8715 12393 3419 437 31715', 'Q7YYZUCKPWJB  11443 11729 22270 65252 13454 13425 22513 43932 2242 12184 1', 'Q89HEEJ44MBA  65252 10796 1 11443 15201 31715 3365 437 16916 7059 290 15175 15915', 'QA5EYNB8DFYJ  12941', 'QB63QEXYM28T  2477 922 3655 20623 10796 967 31715 15791 21158 3365 17152 3419 3790 437 9876 12346 27980 2607 13425 58249 47292 65252', 'QBEVD4RXFYT9  11729 1 11443', 'QC45A89Z5FBN  27139', 'QC9NFYK3NHAH  1 19821 63274 30906', 'QCCQN54M52K2  65252 11443 18060 16916 20244 1343 31395 17744 7392 22532 1', 'QCXZA5B5UT7V  3365 24394 9635 19049 50039 1981 22270 16759 18060 23893 32200 14905', 'QD7MU8423KB5  1 11443 27139 13425 290 47292 17325 5204 11262 2613 25047', 'QDN4ZNCWPVD2  11443 10796 17850 43932 11729 28084 1 49655 18060 1007 1736 63081 12941', 'QDP9KW686D46  64064 2477 3655 20623 3790 10796 62923 922 12691 15353 56668 13454 61657 1 273 63274', 'QE3K6R47JCU7  1 11262 61657 7198 15866 1135 5115 3365 967 11443 3419 7073 72 3 1007 437 13454', 'QEPCNAUU8AHT  1 3365 11443 65252 13454 15915 17591 1981 378 22270 290 19374 3419 3 13425 2613 4166 5204 12691 15175 3655 19049', 'QFA3CWJPU4P3  11443 1 290 65252 11729 437 19374', 'QFMWW3QFB54W  13425 1 11443 15201 3419 4166 10676 63081 13218 10796 19821 19374 967 72 12691 15353 30906 8715 15915 15175 42694 65498', 'QFUFFPVWW4DT  11443', 'QHNQ65REWTD6  1981', 'QJCXRZH4VD3Y  7059 22270 1185 63274 1736 11443 12393 10796 2613 3 922 8715 43932 28904 19374 31715 437 1681 16916 378 290', 'QJYTC7V82N5X  1 16759 13454 378', 'QKHP6J47Q5VH  11729 3365 437 12184 64064 34981 2613 3 1007 1 13454 3419 378 48121 9635 22270 16403 3655 63695 180 63914 34041', 'QN76N7BKDHWB  72 12393 11443 1 29846 2613', 'QNZN77MKWA9F  11729 1 17591 3365 7059 2477 11443 1007 967 4166 2242', 'QP8YXW8HT75C  12941 1', 'QPVBUK7Z853J  57909 293 27139 61923 64042 17378 54188 34981 15353 21204 23668 44634 5204 62639 834', 'QQUHB8K53RCM  13454 12191 19374 14696 31715 11443 922 3655 65252 10796 19049 34578 8715 13425 2613 2608 1185 40542 3419 19821 15201 11072', 'QT2W265AB542  2607 23668 11443 26576 22270 72 63229 61928 12393', 'QU482E3XMJ57  8715 8790 290 11443 72', 'QUE69ZFNDK6N  1 11443 13454 8715 10796 20623', 'QUNTF72HAYCU  3655 11262 65252 72 437 11443 7198 13454 1 1007 10676 3365 15915 290 8715 11729 3419 922 27980 61657 31395 3790', 'QV56PYX2DA3J  1 11443 13454 922 8790 44 15915 13167 14696 5152 10676', 'QV994W2897UN  1135 15175 31395 7198 19049 11443 53472 43570 17325 65252 25047 5204 37047 15866 1 3655 72 23608', 'QVNJQ7WNXRH2  303 52027 61561 29846 48267 3419 65252 10796 23831 187 19049 3655 20623 34002 42694 922 1 12393 23668 53966 62209 65498', 'QVPCX2RWEXM6  31715', 'QYA75786N5VR  16759 1 11443 11729 3365 20244 65252 13454 5152 2613 16403 180 13425 378 4166 10796 3 12184 72 57909 11265 273', 'QZCMPV28Q8NJ  1 60694 11443 64064 27980', 'QZJQTKAU49N7  922 22532 8715 13218 28904 1 61923 2607 52027 19821 48267 6315 31715 16916 58249 16403 31395 61928 19374 39553 4589 1343', 'R2BWWA4WYXKT  922 967 10796 15791 2477 31715 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 1402 58249 47292 24492', 'R37EURK4FVEJ  1135 48267 2613 12941 61657 1 61759 15791 17325 34041 65505 23775 13415 31395 15866 42694 43570 11262 17337 28084 32200 56677', 'R3PQ86FU27TE  24492 15845 10796', 'R45ZR2JY72ED  1 11443 11729 9360 967', 'R49N8ZQ8R8UK  1 63274 13454 72 26576 65252 290 11729 1007 16759 12184 11443 7059 3365 1981 967 12393 1736 16916 64064 15866', 'R4XW6DPFV2ZV  57909 22513 64081 32200 11072 7392 60694 17152 12691 10796 61923 180 40542 3655 34002 33137 15201 20623 15791 16403 22532', 'R4YEAANV6Z8Y  1 3655 12649 11443 61759 10796 64064 13218 56668 12941 3419 15353 34578 65321', 'R5RYE939AK6P  1 11443 10796 437 34002 62923 63274 15866 18060 20623 54449 290 12393 12941 15845 64304', 'R63MBQDFMYB4  10796 11443 65597 11072 58572 437 63640 40542', 'R6BCFY4MC2QC  1', 'R7N6PPX438B6  11443 1 13454 13425 8715 65252 437 54206 15845 2607', 'R856WY3Q2AJT  63081 63640 19821 13425 11443 187 14126 18060 9876 16403 10796 19049 7073', 'RAY544QHDF5J  1007 7198 15866 61657 378 3419 437 922 15791 1 11443 3365 65252 2613 11729 19374 7073 72 63640', 'RCHV7F4YN866  16759 61657 5504 11729 3419 3365 15866 11443 1 65252 378 922', 'RDB3TWYU22EW  16403', 'READ7J9K5VJU  10796 15915', 'REB74XH3PANC  8790 13776 3 11443 2608 1135 44493 24437 62473 65203 27139', 'REEC7VZ723EF  20919', 'REFY5MYH336A  13425 1 23775 15866 61657 1981 7198 1007 34799 15175 5204 43570', 'RFN9UJMMTXC8  11443 1 1981 1007 1185 3 3365 7059 16916 15915 11729 3655 17591 437 61923 64064 31715 922 43932 5204 2607 3419', 'RH44MDYA6Q2N  7059 63274 11443 64064 11729 1 65252 8790', 'RHEMY9BACD99  72 63274 23893 15866 4332 43932', 'RHP9BBPU8C89  11729 65252 1 11443 13454 16916 3365 3419 967 15915 1981 15201 15866 43932 28904 7059 3', 'RHXMKXF8MZVD  43932 11443', 'RJKBWVTV6WM2  11443 65252 2607 43932 3419 15353 922 3655 19821 30906 42694 22270 47292 31395 12691 967 31715 290 437 1 15175', 'RJMZBBKNKHKK  65597 72 63640 11443 52027 43932 61759 4332 64064 4589 15175 18060 7059 34981 11265 13425 10796 3365 24394 58249 19821 23893', 'RJU7J35UXYPX  11443 11262 437 1007 61657 1 378 5115 37047 13425 7059 25047', 'RNJMEEXX8XAT  13454', 'RNNFW9J859W8  3419 61923 10796 65252 11443 20623 22270 42694 922 63735 8715 13425 43932 19374 12691 2613 31715', 'RNUJATBXHK4C  65252 22513 1', 'RP42RDAYHZK6  19374', 'RQ7XR7AC2BQC  7059 22270 28904 63274', 'RRATXB8ZEK3X  8715 26576 54098 16918 2607 46705 22270 23893 15175 17378 15353 23668 65429 12184 63229 7059', 'RTKDYFWETUM9  11443 3655 8715 922 61759 63081 14126', 'RTU5BXYNPJJE  1 3419 922 967 378 11443 65252 24394 17378', 'RTYQTFEXD4PZ  1736 46705 1466', 'RUJCQHF7DQ6N  57909 9812', 'RVP8T462KMRQ  49157 9652 1681 20244 12649 273 13454 10676 65252 9360 10796 1736 8790 12393 26576 4589 903 65498 34799 3365 7198 922', 'RWRRE2AC8KU7  21158 1185 378 3419 2242 65252 1 44634 11443', 'RXZX5UC43P9F  43932 15353 8715 11443 10796 42694 65252 12691 63640 61923 27980 922 13218 13425 10676 19821 30906', 'RY9DAJ6DWX74  11443 2613 12941 13454 20244 72', 'T243UHET9UPJ  5152', 'T2WJZ5YRZ32M  61657 19049 37047 1', 'T32J85XRBPJC  1 13425', 'T3QJVHBBQATV  1 11443 16916 922 3365 31715 11729 65252 13454 10796 1306 13425 7073 43932 15915 378 1007 15866 63640 20623 64064 4332', 'T4VEHVXCYYB4  65252 11443 1 72 8715 2613 7059 7198', 'T5VA85ZPRRXV  46705 15866 2613 19049 3655 7198 43932 13218 15915 13425 10796 22270 13454 1681 53472 7059 12649 10676 65252 19374 11072 57909', 'T6B63B9J73XB  13425 47839 180 43932 3 4166 10676', 'T6D2K938ZT8Z  11443 11537 1 437 20244 7198 63695 273 65252 378 2613 1007', 'T7AR8JH7HT8F  7198 15175 437 1 32200 42694 922 62639 8790 11537 1185 8715 31395 22270 180 23020 37047', 'T855N6R4FM3F  15353 11443 15175 1 31395 378', 'T8QFQMEZ9UZ8  5152', 'T8ZHABFJH9CU  13218 11443 22270 7059 1 13425 1185 8715 72 10796 31715 437 922', 'TA9VYJR8AE2A  1007 7059 21204 6786 3365 19049 8715 31715 30906 11443 6315', 'TBHQ8PHHC9Q6  13454 16916 2613 10676 3365 63640 11729 3419 15791 15915 1 11443 65252 19374 28084', 'TCU4MCY636M5  7198 1135 53472 5204 15866 11262 19049 31395 9360 3655 7059', 'TE3FHCWUTU7J  3365 11443 3655 63640 72 378 15353 29846 15915 10796 54449 12393 437 10676 24394 13454 63735 19821 18060 43932 8715 1402', 'TFHXK5H392AR  922 10676 13454 61759 13167 53472 57426 17591 290 49655 16403 4699 44 15175 63081 1306 42694 54098 11443 19821 15353 3419', 'THEXHWAUNVJE  1 11729 13454 11443 72 65252 64064 1185 3 29846 2607 56489 7059 922 27980 18060 10676 12393 43932 12691 15353 3655', 'TJ22WUKR2AFT  4332 378 11443 1 437 3655 967 1007 12393 2608 2613 22513 9652 2242 9360 31395 11265 19374 34578 5152', 'TJAY7NQNPUHK  1 11443 1007 922 378 13425 72 65252 290 27980 10676 56489 56063 8715 61657 65597 28904 41676', 'TJDJA2B2CMB7  11443 3655 8715 1', 'TJMT3W5ACQWD  16403 6786', 'TJPUCYUEN4XZ  16759 72 1007 1 64064', 'TKJW77EQXNQY  1681 11443 54098 8715 378 19821 51716 42694 13425', 'TMJ6TWWTXN9J  57909', 'TMNHZ8MMHHET  1 437 12393 922 11443 2477 1007 1343 64064 378 967 3 62923 31715 72 26576', 'TMNTQP76A874  20623 1 3655', 'TMWAWCDX7R6B  13454 1 11443 1981 16759', 'TQYZ6WA666AY  3365 65252 11072 11443 12184 13454 967 1981 13415 3419 15915 18060 15866 1007 72', 'TT3EU3XC5QJ5  11729 11443 29846 7059 65252 2613 3365 13454 17591 16916 10676', 'TTHUV7TNU3XK  15791 3419 15915 967 65252 437 2608', 'TUVVBE4J9CP5  11443 1 437', 'TVVK444JEM3E  2613 967 31715 9360 65252 4166 7059 43932 17591 3655 378 3 11443 15915 3365 437 13425 15791 5204 19049 2477 12941', 'TW2J3ZCFACYT  922 31715 13425 65252 16916 15791 22270 378 967 15201 72 43932 10796 20244 12184 2477 15915 11729 58249 1185 15175 13454', 'TWWZUVX4RM49  11729 290 11443 19374 61759 16916', 'TXMRJZP38HQE  1 290 28084 26576 27139 16759 17337 187 11443 15791', 'TZY5VHNM7DF7  1 11443 20623 3655 2477 56668 11537 437 15175 7198 922 16759 17743 22270 378 64064 8715 967 5204 65498', 'TZYHHYRDYX3Q  13454 11443 1 65252 11729 3419 378 922 61657 19374 1007 2613 20244 3655 31715 7059 967 8715 16759 3 5152 3365', 'U34X6QYEQRAZ  16403', 'U3B5P9CBPNH8  16759 13454 19374 1 378 11443 273 9876 15201 11729 22270 10676 14126', 'U3P9DW97DTX6  3365 11443 11729 4166 1 1981 61657 10676 3 65252 15915 17591 12184 2613 16916', 'U3WN5AQVUA6R  62209 48121 47292 12184 19049 60694 11729 61923 34578 24437 42618 30906 56677 13425 2242 25047 23608 31715 12393 64093 2607 3365', 'U5C9P8AXCXHY  11443 1 11262 437', 'U5ZDNNPQDH6V  11443 1 378 4166 3365 1981 65252 3419 61657 967', 'U6P53PYQKR5C  1 65252 11729 290 61657', 'U83CBETB5NN5  11262 5115 2613 11443 65252 3419 37047 21158 61657 13425 1 11729 290 13454 25047 34799', 'U875H8834EB7  1 11443 437 16759', 'U8T4YVX8PPNH  437 1', 'U9W3JCR4T67K  11443 15442 1866 3419 65446 33137 1 2477 931 61923 56489 39553 54188 378 11729 31395 19049 4166 19821 48121 63274 49655', 'UA4PRC8M9TAV  13454 11443 378 5204 3655 11265 922 290 1185 9812 13218 3365 65252 20623 2613 13425 1 40542 12691 22270 967', 'UA5VNQ3HBM5Q  13454 9812 437 65252 2613 16403 11729 378 11265 13218 922', 'UCEZ9JMWBCUA  1 65252 11443 12393 11729 8715 3365 1981 3419 72 1007 378 64064 5152 3 13425', 'UCQAZZ584T6Q  48121 1 28084 58572 1343 17378 63914 49157 17337 1736 64042 64288 27139 44493 12184 62639 41676 15074 54098 11262 15175 63229', 'UD2X7353HVBC  11729 11265 19049 8715 15353', 'UD3K87MA7VVR  16403', 'UDZ42KMHPCBH  13167 23775 23608 1 61657 31395', 'UFNP9HPJDKCF  1 3655 11443', 'UFVTT9T7Y8X3  11443 1 65252 29846 3655 13425', 'UH6HPZBM37Z7  13425 15201 1 72 39553 8715 52027 44493 15175 15353 273 30906', 'UJK4547YHT2B  63274 11443 8715 3419 72 65252 11729 3', 'UK534QEQRZX9  3 13425 15845 15915 2613 15201 63081 43932 4166 58572 1981 12941 17591 180 10676 1185 12649 62473 17744 9951 61561 1866', 'UKPDCWZHQUER  24394', 'UME82J5PXHA6  11443 15915 1 7059 1981', 'UN75B3AYCWJM  57909', 'UN9QH8HFQXM3  13425 1', 'UQEU4A8ZPWP2  11443 1 8715 65252 30906 63640 1185 10676 72 61923 3655 15175 47292 19374 2613 43932 7198 15791 31395 12191 12184 11729', 'UQTN69QN24M3  11443 378 437 15915 65252 1 3 3365', 'UT7W5VD4K2BW  11443 65252 13425 1 3419 2613 43932 10796 3655 14126 72', 'UTHAZK5HU7MY  58572 1 11443', 'UTV9NTCHH9DQ  5115 13167 11262 37047 25047 5204 61657 23775 23608 34799 17325', 'UU55HCYUQP2K  21158', 'UUBPVJ8KK5MH  5115 11262 61657 5204 13425 23608 25047 7198 37047 65252 42694 32200 1135 34799 15866 13167 19049 53472 20244 21158 15175 43570', 'UUH7CXU2F5UB  34981 7198 31395 1 3 61657 24492 11443 7059 8715 36911 43570 273 437 62923', 'UUV7JKZRD5XX  28084 7059 63274 1736 22270 8715 922 18060 16916 1007 3419 43932 13454 11443 13425 3365 1185 378 3 437 15353 187', 'UV5RXQB2J7JY  3 43932 7059 437 15442 13218 1 922 3419 50039 4166 1981 12649 62473 378 290 15175 27980 26576 65498 23020 57426', 'UWTP2AQ57AZ4  9360 8715', 'UXJFRRFTU3CR  1 11443 7073 11262 15866 64064 15915 1135 3365 2608 1736 26576 11265 17971 7198 967 12184 64960 56489', 'UXPP68427FYJ  1 1135 7198 437 12393 15175 31395', 'UXUKCKEKHZTC  11443 65252 1 19374 1007 11729 3419', 'UYNVUUDKUU5H  28904', 'UYQUERNW7MR4  11262 56489 2607 63081 22270 28084 11443 7198 967 13167 13425 437 23608', 'UYVZ589DMDZD  16403', 'UZ8NADHRCXX7  967 10796 31715 3419 437 1402 15791 21158 2477 17152 11443 378 15915 2613 43932 65252 17591 22270 13425 16916 3 1981', 'UZE862Q9EBT2  61923 54098 43932 10796 12691 4166 1981 8715 64960', 'UZK78KPAVHFJ  922 1 22270 65498 10796 19049 15353 34981 15175 3655', 'UZUURNN6VQTE  20244 9652 64042 9635 46705 8715', 'V245B46PNCP8  1 437 11443 11262 37047 273 15175 42694 17325', 'V2NK5VA3DEFR  1 11443 437 1007 8715 65252 378 967 1981 290', 'V37Y7E254PW5  1 18060 8715 13415 13425 11443 1981 922', 'V48BR45RD7K6  1 11443 65252 28084 12393 290 1007 13454', 'V88EZTAFPZQQ  1 11443 3419 437 1007 61657 378 9360 72 2613 3365 13454 64064 20623 22270 290 3 4166 19374 12468 43932 65252', 'V9MMHEMCBEFN  1681 3 65252 3365 13425 11443 967 15845 4166 922 57909 7059 1007 437 12393 21158 54449 31715 3655 11262 43932 61657', 'VA8695K9PYRM  11443 378 11729 1 13454 11537 65252 72 12184 3419 1007 967 8715 2608 1981', 'VAPBDH4XDTNN  11443 23668', 'VBAUCV549FXK  72 15845 65597 3093 290 22270 7392 14126', 'VD8BJWEBBP74  12191 28084 13425 22270 72 437 14696 16403 11537 9652 9360 1681', 'VDWCKUCUPA6X  922', 'VEC5RUU7KR6W  1 65252 16916 3419 11729 967 13425 11443 3365 3655 72 7198 1007 15866 10676', 'VEFEU6DUB7CT  16403 12691 3655 12191 2477', 'VETVBA9KPA3B  7059 11443 11729 11072 19374 12393 13454', 'VFH43WP9EBVR  61657 1 8715 1981 15915 57909 378 922 3365 13454 11443 3655 11729 43932 63081 3419 15353 3093 3 1007 10676 13218', 'VHDP8RHWWCJB  65252 11443 1 3419 12393 14126 63640 3365 3 61923 437 30906 57426 27980 8790 63695 62473 28084 16759 28904 4332 72', 'VHHYXKE6DMNB  43932 63640 52027 10676 58572 17591 1981 15201 49655 59948 64304 15915 3 15442 4166 23020 50039 56489 64960 62473 53966 17744', 'VHRTBQP9D6EE  4166 378 437 9635 16916 33137 15915 11443 61657 15201 3419', 'VK87B6X2MQ72  11443 11729 65252 1 33137', 'VPDND3UJAANT  7392 7059 16916 1 63274 21204', 'VPUZ2AYFUXBF  1 11443 437 2608 15915 290 1007 3 16916 12393 7059 3419 3365 10676 65252 11729', 'VQFE7B7WZXFT  1 63274 72 11443 22532 15175 10796 63914 2607', 'VQKFQM9AFYPK  7198 1', 'VRA7JHQ28MME  2613 3365 7059 65252 7198 11729 1981 13454 20623 437 1007 967 378 15866 1 1135 11443', 'VREJEDX8ECKK  57909 61923 13167 22513 63735 61928 6315 187 12393 8790 5115 17152 63274 39553', 'VU3TBBX9MYV8  1 1007 10676', 'VUXNYJ4EAFKX  1 11443 65252 11729 3365 13425 22270 13454 3790 1681 40542 19374 26576 58249 12346 5152 10796', 'VUYUZJ5JTBXF  3 15915 12941 13425 15845 11443 2613 15201 63081 13454 43932 4166 17591 180 23020', 'VW4QXAY42W4T  15442', 'VX9H4ZH9MNVC  922 967 31715 15791 2477 10796 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 1402 58249 47292 24492', 'VXWZMPKN8JM9  11443 1 13425 3419 922 2242 15353 30906 65252 8715', 'VXYK4PUPAWKK  1 11443 43932 922 13425 42694 19049 27980 31395 8715', 'VY22DV42V2NP  57909 10796 24437 61923 62473 65203 11265 1 15353 13218', 'VYDPD5TFPAU9  16403', 'VYH8VMK8Z6BA  1 11443 967 437 16916', 'VZ3KKW9RXB95  9360', 'W2QQ7FJKHRRA  8715 54098 1981 10676', 'W32FYTPK3T7D  903', 'W4P5NC77A8QU  922 967 31715 15791 2477 10796 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 1402 58249 47292 24492', 'W5DWRD4ZT3Q7  1 12393 4166 22270 64064 1007 7059 29846', 'W5EZWAHBCT5W  4166 3', 'W698ZNNZMQ5Z  12184 1 11443 8715', 'W8UB9DYFK5WK  13425 2613 10796 7059 63640 31715 22270 8715 11443 65252 12184 3655 5204 922 3419 63274 16916 11729 3365 290 11262 15201', 'W97HYTQEPAAP  1 11443 1007 2613 72 378 3365 57909 5152 20623 11729 16916 65252 31715 15915 967 7073', 'WA8E65FB2JJK  63229 63274 9876 4699 23831 39553', 'WAMKPF349AZA  63274 16759', 'WBCJVU47YNDC  11443 52027 2613 1 967 1681 3365 64064 13454 16759 63274 57909 16403 4166 49655 3 43932 180 13425 15201 15915 9635', 'WC5Z5CD97RPT  11443 1 72 293 437 290 9876 1981 64960 43932 15175 13425 31395 15353 2613 39553 19821 19374 65498 30906 65252 10676', 'WC7AEQ9DFPPT  18060 1 12393 13415 11443 43932 42694 967 12941', 'WDB8AVHZ87BV  11443 1 15915 28084', 'WF4HQANVZAXT  1 273 11443 7073 53472 34799 7198 23608', 'WFYZR35H8PFJ  14696', 'WHJPUWMM6C74  20919 24394 8715 46705 15353 65252 2613 13218 2608 1736', 'WJ7FWV6KNPPJ  1 4166 11443 13425 52027 23831 36772 43932 58572 65460', 'WKP4VHMWBFN3  922', 'WMTA7YAWAXFY  922 2613 65252 43932 13425 11443 10796 31715 5204 19049 22270 10676 15175 3655 967 19374 61923 3419 31395 12691 42694 8715', 'WP38PUFJPCP2  15915', 'WPK9N5C8VTKW  11729 1 12393 11443 13454 3365 61657 20623 3419 16916 16759 72 63274 65252 8715 3', 'WPWCXFC7PRNJ  3365 1', 'WREFJA93EPXT  11443 1 13454', 'WRWEN9XMCTWD  17744 63081 1866 52027 11262 17743 43570 51716 24394 64064 61923 58249 903 12184 13415 8790 9652 3655 42694 2607 2608 15175', 'WU2KZBTCJF3D  28904', 'WU4Z2NYR4E6Y  903', 'WUFMXYUMW27P  10796 65252', 'WUP5565DVDEA  57909 303 64093 53472 63640 59118 42694 1007 58572 13415 3790 63274 1 42618 11443', 'WUTHA83388C2  1 11443 11729 2613 437 1007 65252 967 10796 3419 3365 8715', 'WUX8M4FYZNT5  1 11443 13454 3419 2242 30906 2477 922 10796 62473 13425', 'WV7TU8XYVNQZ  16403 1', 'WW6CAP2JCCD8  13454 61657 9635 22270 33137 13425 15201 4166 17971 20244 7059 2477 43932 293', 'WW8WE5CC3PTC  1', 'WXK5R288NW6C  11537 1402 39553 63695 967 11 437 10796', 'WYKDNXXJ74PZ  3 13425 15915 43932 1981 17591 10676 1866 15201 4166 1185 180 52027 15845 2613 65252 11443 1 22270 2242', 'WYNURWHBKE3T  20919 65252 11443 32200 13425 13218 63081 290 3655 437 1 1007 46705 54098 31395', 'WZCM877WM5Z4  16403', 'WZYEPBBJ86ZT  1 61928 12393 7059 23668 12184 23893 1343 2607', 'X25PQQENB33R  290', 'X3F7RJ3EPT3F  1135 931 65460 180 54188 3655 3419 20244 65597', 'X4CAT57AAK85  3419 11443 65252 3365 2613 64064 27980 3655 15201 63274 11729 58249 922 72 24394 63695 14126 10796 57909 3 19374 43932', 'X4J276357XFM  61923 63640 10796 13218 3419 13425 43932 10676 922 63695 30906 15175 42694 65252 34578 26576 2607 19049 22270 12691 5204 64304', 'X53K8PM7U7ZC  57909 9812 17743', 'X57QM22VYYAT  1 63640 11443 31395 2613 19821 65252', 'X5F33NP99K2Z  10676 15175 12941 54098 30906 15353 21158 8715 27980 63695 44 65321 7198', 'X5FNK8WNWXNB  290 7059 22270 63914', 'X5KTMNMD5V6P  57909 5115 6786 34799 5204 62473 15845 1736', 'X5QEWF7YRCME  11443 23608 1', 'X65JBH3FHJJ4  1 8715 10676 13425 15175 11443 54098 22270 10796 2607 42694 61923 19049 13218 5204 15353 43932 922 47292 39553 65446 3', 'X827429KMNMC  11443 13454 1 11729 378 437 24394', 'X8YEZEM485N4  1 1007 33137', 'X955VMKVT8VP  922 1 1981 15915', 'X9M4VEC274X2  56489 34041 12468 54206 64304 28084 10676 26576 12184 11443 2607 13454 19049 10796 8715 72', 'XAQU5MPQPMFN  11729 1 11443 3365 65252 1402', 'XBMT2PRPC8NC  58572', 'XCDUAUNBF9AD  62473 11262 36772 16759 17378', 'XCEU3ACKD3U4  47292', 'XCJMJTDQXD3V  11443 378 3419 922 13218 1981 967 3655 1007 1 290 2613 9360 15353', 'XE2QE9FN7BZZ  13425 10676 13218 12941 44 24492 7073 17325 65597 43932 23893 34002 922 903 15175 61657 273 22513 23775 61928 13415 42694', 'XEK2RF4HY4ZM  11729 11443 15915 437 4589 1007 3655 3419 7198 7059 19049 18060 63081 72 15866 11262 5152 12941 65252 17744 4332 24394', 'XENUFHNWZNNN  1 11443 15915 17591 922 15201 3 63081 967 15845 62473', 'XFC6JN4FNT5R  2607 1306 3655 57426 5204', 'XFNNN8EM7AHB  3 13425 15845 15915 2613 15201 63081 43932 4166 58572 1981 12941 17591 180 10676 1866 1185 23020 49655 12649 16918 62473', 'XFZ6AFF56DAD  48121 15353 187 28084 27139 922 24394 11443 65252 72 10676 1736 8715 1', 'XH6KK4QPE8DT  62473 1866 61657 15845 3419 4166 34578 57909 36911 65460 65457 23020 180 11443 20244 62639 63914 16403 13415 72 14126 53966', 'XHAAT5M2WT9M  33137 59118 27980 13454 3655 56063 34578 9635 62639 4166 11443 180', 'XHWJZVKXX72B  46874 1 63640 53472', 'XJX4DQJK6227  57909 9812 15175 56677 64093 61923 3655 42694 61783 967 39553 58572 1466 23893 31395 22270 20919 65597 17743 15353 9876 64304', 'XM2KXDV7YTYN  11443 65252', 'XM67FP4HCYW4  64064 13425 62473 18060 11072 3655 10676 10796 15866 14905 62923 922 2607 49755 31395 19049 12346 56489 42694 8715 54098 1736', 'XN7DHTMYEZR7  62473 1 19049 56677 6315 47839 34981 12468 2608 39553 15845 9635 12184 58249 55614 7073 11 53966 22513 12393 9951', 'XN9CMVYBFKJC  11443 3419 1 3655 65498 13425 65252 922 15175 8715 61923 19374', 'XNNAQKZ9ZEBQ  11443 1 922 10676 42694 19374 15353 47292', 'XPV3B2J8ARVC  21158 5115 11262 61657 15915 15201 3 72 13425 9360 19374 65252 11443 1', 'XR62KNKUKBF8  290 23668 10796 13425 10676 1466 5152 53966', 'XRHUAXJJ2V7D  13454 1 11443 11729 16759 65252 3419 378 922 61657 19374 1007 2613 3365 3655 20244 31715 7059 967 8715 3 5152', 'XT82R46ERQFQ  16403', 'XUQMAZ5AP7DA  13425', 'XUYXP9AQW9J2  6315 1343 290 62639', 'XWMYDQ2PAFCX  1 11443 3365 63640 3 13454 1007 8715 7073 437 18060 2477 63274 12393 64064 65252 21158 7198 72 11729 290', 'XWV3T3PACT6R  19049 22513 21158 1343 13415 63640 15866 53472 5204 1185 58572 5152 30906 15915 23608 26576 5504 922 11072 16403 11443 42694', 'XYHYE8P92FDU  61759 11 31395 46874 10796 44 39553 43932 2613 49655 1681 15353 49755 6786 48121 4166 11729 4589 53966 34041', 'XZ7UPHKWB7H8  13454', 'XZF57EMZ4EUU  29846 63274 7059 1736 52027 16403 64288 58572 23998 56475 63229 6315 62473 41676 17378 23668 65460 4166 3 14126 64081 17591', 'XZTZNT8JBVBJ  437 9360 3 2613 9812 7059', 'Y278C8EPF9C4  19374 2608 23668 14696 16759 2613 11729 11072 13454 65252 290', 'Y2BBJ9WN6MHZ  293 33137 1007 7198 44 9360 8715 290 57909 13454 11729 65252 11443', 'Y2QHE4W23TE9  29846 1135 63640 5152 31395 3419 63081 2613 13454 8715 25047 65457 3655 19821 922 180 19049 15442', 'Y3C8BK5UZ333  1 11443 13454 11729 378 290 7198 24394', 'Y45DNTQKD6DY  11443', 'Y49Q8RTU2TQM  11443 1 31715', 'Y4B79CKDJY96  7059 26576 11443 378', 'Y4EP9PQA7W9X  11537', 'Y4TX88K5MA8D  64081 18060 11072 34799 15866', 'Y544V9CNBTY8  11262 21158', 'Y5REH4Y52UBZ  11443 1 48267', 'Y6DXDUDWHYU4  61657 5115 11262 5204 65252 21158 31395 25047 9652 13425 7198 922', 'Y76X2YXCVWZX  16759 9360 8715 19821 3419 34578 11443 10676 3093 20244 23998 63695 12393 437 58572 12941', 'Y7CRRJW2K7HN  15791 63081', 'Y7WVW6VJY4RQ  11443 65252 2607 8715 922 903 1 9360 9652 1007 11729 39553 54098 1736 34799 26576 19821 17744 15866 24394 22513 56489', 'Y8NTXZH7XQZQ  57909 15845 5115 15353 17337 42618 56063 62209 60694 56489 34981 903 61923 28904 54206', 'Y8UH3A7WKJQE  57909 61923 48121 47292 15175 922 16918 65203 13218 273 13776 22532 63640 41676 15074 47839 46874 10796 43570', 'YAT2UX9EEVV8  922 967 31715 15791 2477 10796 21158 3365 3655 17152 3419 3790 437 20623 9876 12346 27980 64064 4589 1402 2613 24492', 'YBT3N9DHHMT5  11729 2477 11443 63640 10796 1 65252 11262 13425 3419 1185 11537 21158 64064 1981 15175 1402 63695 63081 15791 922 27980', 'YBUJZXVXQ3N6  1 13425 11443 17744 15353 4166 17591', 'YCDYWCHU4CKR  1 14126 10676 25047 11443 59948 65597 3419 1007 62473 53472 72 17325 22270 15175 61923 9360 931 63735 3 34002 273', 'YD6CC6ECF56N  53966', 'YE9ZKMX6JR4J  13454 11443 1', 'YEADQ6YRWYKX  17850', 'YEZK7MPKDR9Z  15791 11443 19374 2953 7059 11072 12184 13454 56489 3655 63640 33137 13425 65252 12346 54098 63695 39553', 'YFTXZF4Y2XP7  11443 8715 9635 63640', 'YHYRV7NCNAXK  1 11443 1007 63695 27980 19821 39553 19374 31395 273 51716 19049', 'YJTFYDKX9MD8  11443 23668 63081 61657 12184 20623 65252 42694 3365 7198 7059 3 15353 50039 1981 15791 26576 1007 9876 3093 2953 1', 'YK87QKJP4E4J  1 5115 11443 7198 437 922 3419 13425 2613 3655', 'YMP25U46FWXA  11443 1 65252 11729 8715 13454 2613 3419 3655 1007 3365 31715 7198', 'YMPRX5J79CTU  65252 1 11443 437', 'YMZRRDBYPZNZ  12393 25047 31395 15353 9812 10676 56668 63735 11443 34799 2242 15175 17152', 'YQ7J52MUWTZQ  1 17152', 'YQBKQWJVPAKF  15791 967 31715 65252 3419 378 15915 13425 11443', 'YQTD7WY9D626  37047 11262', 'YR4QCCP4TUKR  3 13425 15845 15915 2613 4166 12941 180 1185 49655 12649 11443', 'YRPWUH76BT7E  65252 11443 11729 1 3365 2613 16916 3419 378 13454 967 4166 12184 15866 1007 1981', 'YRWCHVA9QY3N  15175 10676 28904 11537 187 4166 57426 72 931 60694', 'YTAYCDZQ7ET7  13454 1 11443 65252 378 11729 922 61657 19374 20244 7059 22270 3655 3419 4166 3 31715 13425 5152 16759 1007 967', 'YTZPBJPPURET  1185 15915 17850 15353 58249 7198 31395 56489', 'YUVXAHVQPAPD  11443 437 8790 43932 18060 31395 29846 15353 1343 62639 19049 13454 56668 27980 26576 65597 14126 30906 65457 63640 54098 17325', 'YVPVY3TXAFKK  36911 12468 62639 12941 16403 12184 59118 57426 14696 46559', 'YW7MPN5ANYFQ  1 11443 7198 12393 61657 3419 22513 3 1007 437 3365', 'YWWHZBV6ERN4  1 64064 57909 15845 63274 3365 18060 11443 15915', 'YX73XDVV7WE4  11443 1 16916 43932 8715 13218 922 39553 10796 19374 15175 2607 42694 11537 3655 24394 11 13425 53472 49655 63229 54206', 'YXPEK3X3EQED  290 19374 54098', 'YXUYAFXRNNBX  25047 15845 11262', 'YYNM5XR56N9R  1306 3655 10676 8715 13218 15175 13454 922', 'Z25XH22JWR82  9360 15915 437 20244 11443 9652 3 3655 1007 1981 13425 8715 1185 273', 'Z2MTE93KQP6V  24394 7059 1 23668 15353 63081 12393 12184 64288 1736 23998 72 13218 27139 63640 22270 28084 63274 3655 64081 922 58572', 'Z2ZCQQQVBWNA  11443 61657 17378 52027 65457 34578 15353 10796 378', 'Z33P8WXCXA5T  13454 16759 17850 1 1981 11443 3 17591 2477 15201 15915 10796 65252 13425 12184 903 3419 12468', 'Z3URK4TAETVV  437 11443', 'Z3W92XJE8MXT  46705 15175 922 63640 26576 13776 22270 3655 1981 24394 43932 64304', 'Z6WPYE5785HU  922 3655 20623 2477', 'Z8BBAUPK4DFK  17743 1 437 6786 11443 72 13425 10796', 'Z8EVTTAJKCBU  10676', 'Z8YARTYH7KB7  10796 1135 43570 31395 15866 34002 5204 5152 7198 58572 15201 19049 16759 9635 63274 53472 17325 62639 8790 72 27980 5115', 'Z999QQWNPYZU  1 12393', 'Z9BWKP3436N5  5115 15353 61783 48267 7059 12393 37047 17325 48121 1681 4699 47839 56668 63914 11262 63640 65498 22532 3655 1 12468 42694', 'Z9QCC9YBWJQ3  1 11443 11729 65252 12184 63081', 'ZA25FDD86V3B  1', 'ZA7Z5YDKT65U  1', 'ZAV5YV5D4YHH  11262 11443 3655 1', 'ZBBQPPYAXNYJ  1 13454 11265 11443 6786 967 64960', 'ZBPCN7ZDTJQP ', 'ZDCPF89R2M5W  65252 1 11443 65446 65505 49157 11729 17152', 'ZDH5WZMQ53QZ  1 11443 1007 3365 13454 11729 65252 378 967 4166 16759 3419 3655 8715 7059 19374 11072 7198 63274 31715 26576 922', 'ZDUAEHV5TBEF  1 11443 13425 18060 8715 437 15175 19821 12393 58572 13415 10796', 'ZEDPFUMRHBQB  64288', 'ZEFMQ2WB59R2  1 12191 11072 14696 22270 11443 19374 2608 13425 2607 10676 54098 12941 15353 8715 61923 19049 10796 3655 3419 12691 922', 'ZEZ4WU4CDQY2  1 11443 24394', 'ZFCNCHZR2ZNY  1981 3 10676', 'ZFWK7HPBDD63  12941 11443 3 1', 'ZJMDDHHPJNJ6  65252 1135 31395 32200 20919 7198 8715 15175 1 19049 11443 53472', 'ZJTUCPXF98ZK  293 42694 33137 44 61657 1135 2608 17325 378 11262', 'ZJUZMCHC42CP  11443 3 1 1981', 'ZM4XYCYZVXR9  33137 44 1007 3365 11443 11729 967 7198 10676 13425 4166 437 13454 2613 3655 3419 12393 15866 72 1', 'ZMC5AH9JA4Q5  42694 10676 2953 8715 180 3655 10796 54098 9652 2242 1736 64093 24492 11443 15442 17152 1185 12649 13425 23668 37047 65498', 'ZMDUVPK98UNF  11262 3655 437 13454 1 65252 11443 53472', 'ZNCAXYK74248  1736 22270 63274 16916 15915 1981 4166 437 19374 967 12184 7059 1185 13425 1681 2613 10676 290 11072 11443 3365 12649', 'ZNMUWX3DKWXJ  21158 1 11262', 'ZNPPY9MB83MX  11729 11443 1 11265 3655', 'ZPRFY43C4Y3W  1', 'ZPXZHCQMXRWA  1007 1135 11443 15175 1 15353 19821', 'ZQ38NDYN7T55  19049 15866 19374 11443 1 2613 61657 10796 378 11729 65252 7198 922 3655 16916 11072 3365 15915 1007 22270 1135 31715', 'ZQ7AH7C7FHU3  7059 437 8715 72', 'ZQBZCVHY457E  58249 15791 1 1007', 'ZT9NFUMDFP5J  65252 11443 1 31715', 'ZUM3MEUB354V  2613 12941 48121 61561 49755 54098 187 54206 16918 27980 15845 12649 51716 3093 303 63081 48267 15791 3 17337 16403 1306', 'ZURPT2YWTP3X  2608 14696 57426 49755 64042 62473 12346 14126 61759 7392 44634 48267 53966 42618 34981 2242 61657 834 56677 65321 63695 3655', 'ZV83F6MUQPQR  24394 42618', 'ZVNW77HQBQD2  922 2477 56668 20623 20244 31715 3 65252 10796 15915 17591 15791 967 72 17152 21158 1185 61657 378 43932 12649 13454', 'ZW8N7JQC73FJ  1 11443 3365 378 11729 3419 7059 16916 15915 3 437 1007 967 4166 65252 17591 12393 15175 3655 10796 922 28084', 'ZWBXZ3YFKKF9  1 1007 11443 44 3365 42694 378 12468 65252 12393 8715', 'ZX9UR5FZBFVY  2613 11262 11443 13454 7198 1 378 1981 65252 5115 16916 23775 61657 12184', 'ZZ9FCB54ZREY  11443 1 3419 11729 65252 10796 31715 2613 8715 13454 3 13425 3655 26576 22270 922 15915 16916 7059 19049 12184 15353', 'ZZEMKWAX7UFD  72 17378 63274']);
	$m['lines'] = function(){
		var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
	$iter1_iter = $m['lines'];
	$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
	while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
		$m['line'] = $iter1_nextval['$nextval'];
		$collcomp1['append']($p['__getslice']($m['line'], 14, null)['rstrip']());
	}

	return $collcomp1;}();
	$m['votes'] = function(){
		var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
	$iter2_iter = $m['lines'];
	$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
	while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
		$m['line'] = $iter2_nextval['$nextval'];
		$collcomp2['append']($m['line']['$$split'](' '));
	}

	return $collcomp2;}();
	$m['candidates'] = $p['dict']([]);
	$iter3_iter = $m['votes'];
	$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
	while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
		$m['line'] = $iter3_nextval['$nextval'];
		$iter4_iter = $m['line'];
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			$m['memberId'] = $iter4_nextval['$nextval'];
			$m['candidates']['__setitem__']($m['memberId'], 1);
		}
	}
	$iter5_iter = $p['enumerate']($m['candidates']['keys']());
	$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
	while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
		var $tupleassign1 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
		$m['i'] = $tupleassign1[0];
		$m['k'] = $tupleassign1[1];
		$m['candidates']['__setitem__']($m['k'], $m['i']);
	}
	$m['reverseCandidates'] = $p['dict']([]);
	$iter6_iter = $p['list']($m['candidates']['items']());
	$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
	while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
		var $tupleassign2 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
		$m['k'] = $tupleassign2[0];
		$m['v'] = $tupleassign2[1];
		$m['reverseCandidates']['__setitem__']($m['v'], $m['k']);
	}
	$m['numbers'] = function(){
		var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,$iter7_type;
	$collcomp3 = $p['list']();
	$iter7_iter = $m['votes'];
	$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
	while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
		$m['line'] = $iter7_nextval['$nextval'];
		$collcomp3['append'](function(){
			var $iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval;
	$collcomp4 = $p['list']();
		$iter8_iter = $m['line'];
		$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
		while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
			$m['memberId'] = $iter8_nextval['$nextval'];
			$collcomp4['append']($m['candidates']['__getitem__']($m['memberId']));
		}

	return $collcomp4;}());
	}

	return $collcomp3;}();
	$m['size'] = $p['len']($m['candidates']);
	$m['row'] = $p['list']([]);
	$iter9_iter = $p['range']($m['size']);
	$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
	while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter9_nextval['$nextval'];
		$m['row']['append'](0);
	}
	$m['d'] = $p['list']([]);
	$m['p'] = $p['list']([]);
	$iter10_iter = $p['range']($m['size']);
	$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
	while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter10_nextval['$nextval'];
		$m['d']['append']($p['__getslice']($m['row'], 0, null));
		$m['p']['append']($p['__getslice']($m['row'], 0, null));
	}
	$iter11_iter = $p['range']($m['size']);
	$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
	while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter11_nextval['$nextval'];
		$iter12_iter = $m['numbers'];
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			$m['line'] = $iter12_nextval['$nextval'];
			$iter13_iter = $m['line'];
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				$m['entry'] = $iter13_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($m['entry'], $m['i']))) {
					break;
				}
				var $augsub1 = $m['i'];
				var $augexpr1 = $m['d']['__getitem__']($m['entry']);
				$augexpr1['__setitem__']($augsub1, $p['__op_add']($add1=$augexpr1['__getitem__']($augsub1),$add2=1));
			}
		}
	}
	$iter14_iter = $p['range']($m['size']);
	$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
	while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter14_nextval['$nextval'];
		$iter15_iter = $p['range']($m['size']);
		$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
		while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
			$m['j'] = $iter15_nextval['$nextval'];
			if ($p['bool'](!$p['op_eq']($m['i'], $m['j']))) {
				if ($p['bool'](($p['cmp']($m['d']['__getitem__']($m['i'])['__getitem__']($m['j']), $m['d']['__getitem__']($m['j'])['__getitem__']($m['i'])) == 1))) {
					$m['p']['__getitem__']($m['i'])['__setitem__']($m['j'], $m['d']['__getitem__']($m['i'])['__getitem__']($m['j']));
				}
				else {
					$m['p']['__getitem__']($m['i'])['__setitem__']($m['j'], 0);
				}
			}
		}
	}
	$iter16_iter = $p['range']($m['size']);
	$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
	while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter16_nextval['$nextval'];
		$iter17_iter = $p['range']($m['size']);
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
			$m['j'] = $iter17_nextval['$nextval'];
			if ($p['bool'](!$p['op_eq']($m['i'], $m['j']))) {
				$iter18_iter = $p['range']($m['size']);
				$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
				while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
					$m['k'] = $iter18_nextval['$nextval'];
					if ($p['bool'](!$p['op_eq']($m['i'], $m['k']))) {
						if ($p['bool'](!$p['op_eq']($m['j'], $m['k']))) {
							$m['p']['__getitem__']($m['j'])['__setitem__']($m['k'], $p['max']($m['p']['__getitem__']($m['j'])['__getitem__']($m['k']), $p['min']($m['p']['__getitem__']($m['j'])['__getitem__']($m['i']), $m['p']['__getitem__']($m['i'])['__getitem__']($m['k']))));
						}
					}
				}
			}
		}
	}
	$m['order'] = $p['list']([]);
	$m['cl'] = $p['list']($p['range']($m['size']));
	while ($p['bool']($m['cl'])) {
		$iter19_iter = $m['cl'];
		$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
		while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
			$m['c'] = $iter19_nextval['$nextval'];
			$iter20_iter = $m['cl'];
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while ($iter20_test = typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				$m['n'] = $iter20_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($m['c'], $m['n']))) {
					if ($p['bool'](($p['cmp']($m['p']['__getitem__']($m['c'])['__getitem__']($m['n']), $m['p']['__getitem__']($m['n'])['__getitem__']($m['c'])) == -1))) {
						break;
					}
				}
			}
			if (!$iter20_test) {
				$m['order']['append']($m['c']);
				$m['cl']['remove']($m['c']);
			}
		}
	}
	$m['j'] = 0;
	$iter21_iter = $m['order'];
	$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
	while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
		$m['i'] = $iter21_nextval['$nextval'];
		$m['j'] = $p['__op_add']($add3=$m['j'],$add4=1);
	}
	return this;
}; /* end main */


/* end module: main */


pygwtOnLoad();
