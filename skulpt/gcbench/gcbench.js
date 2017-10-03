/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname228, $loadname229, $loadname230, $loadname231, $binop232, $loadname228, $loadname229, $loadname230, $loadname231, $binop232, $call233, $loadname314;
/*     4 */         var $wakeFromSuspension = function() {
/*     5 */             var susp = $scope120.$wakingSuspension;
/*     6 */             delete $scope120.$wakingSuspension;
/*     7 */             $blk = susp.$blk;
/*     8 */             $loc = susp.$loc;
/*     9 */             $gbl = susp.$gbl;
/*    10 */             $exc = susp.$exc;
/*    11 */             $err = susp.$err;
/*    12 */             $postfinally = susp.$postfinally;
/*    13 */             $currLineNo = susp.$lineno;
/*    14 */             $currColNo = susp.$colno;
/*    15 */             Sk.lastYield = Date.now();
/*    16 */             $loadname228 = susp.$tmps.$loadname228;
/*    17 */             $loadname229 = susp.$tmps.$loadname229;
/*    18 */             $loadname230 = susp.$tmps.$loadname230;
/*    19 */             $loadname231 = susp.$tmps.$loadname231;
/*    20 */             $binop232 = susp.$tmps.$binop232;
/*    21 */             $call233 = susp.$tmps.$call233;
/*    22 */             $loadname314 = susp.$tmps.$loadname314;
/*    23 */             try {
/*    24 */                 $ret = susp.child.resume();
/*    25 */             } catch (err) {
/*    26 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    27 */                     err = new Sk.builtin.ExternalError(err);
/*    28 */                 }
/*    29 */                 err.traceback.push({
/*    30 */                     lineno: $currLineNo,
/*    31 */                     colno: $currColNo,
/*    32 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*    33 */                 });
/*    34 */                 if ($exc.length > 0) {
/*    35 */                     $err = err;
/*    36 */                     $blk = $exc.pop();
/*    37 */                 } else {
/*    38 */                     throw err;
/*    39 */                 }
/*    40 */             }
/*    41 */         };
/*    42 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    43 */             var susp = new Sk.misceval.Suspension();
/*    44 */             susp.child = $child;
/*    45 */             susp.resume = function() {
/*    46 */                 $scope120.$wakingSuspension = susp;
/*    47 */                 return $scope120();
/*    48 */             };
/*    49 */             susp.data = susp.child.data;
/*    50 */             susp.$blk = $blk;
/*    51 */             susp.$loc = $loc;
/*    52 */             susp.$gbl = $gbl;
/*    53 */             susp.$exc = $exc;
/*    54 */             susp.$err = $err;
/*    55 */             susp.$postfinally = $postfinally;
/*    56 */             susp.$filename = $filename;
/*    57 */             susp.$lineno = $lineno;
/*    58 */             susp.$colno = $colno;
/*    59 */             susp.optional = susp.child.optional;
/*    60 */             susp.$tmps = {
/*    61 */                 "$loadname228": $loadname228,
/*    62 */                 "$loadname229": $loadname229,
/*    63 */                 "$loadname230": $loadname230,
/*    64 */                 "$loadname231": $loadname231,
/*    65 */                 "$binop232": $binop232,
/*    66 */                 "$call233": $call233,
/*    67 */                 "$loadname314": $loadname314
/*    68 */             };
/*    69 */             return susp;
/*    70 */         };
/*    71 */         var $gbl = {},
/*    72 */             $blk = 0,
/*    73 */             $exc = [],
/*    74 */             $loc = $gbl,
/*    75 */             $err = undefined;
/*    76 */         $gbl.__name__ = $modname;
/*    77 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/gcbench/main.py');
/*    78 */         var $ret = undefined,
/*    79 */             $postfinally = undefined,
/*    80 */             $currLineNo = undefined,
/*    81 */             $currColNo = undefined;
/*    82 */         if ($scope120.$wakingSuspension !== undefined) {
/*    83 */             $wakeFromSuspension();
/*    84 */         }
/*    85 */         if (Sk.retainGlobals) {
/*    86 */             if (Sk.globals) {
/*    87 */                 $gbl = Sk.globals;
/*    88 */                 Sk.globals = $gbl;
/*    89 */                 $loc = $gbl;
/*    90 */             } else {
/*    91 */                 Sk.globals = $gbl;
/*    92 */             }
/*    93 */         } else {
/*    94 */             Sk.globals = $gbl;
/*    95 */         }
/*    96 */         while (true) {
/*    97 */             try {
/*    98 */                 switch ($blk) {
/*    99 */                 case 0:
/*   100 */                     /* --- module entry --- */
/*   101 */                     //
/*   102 */                     // line 46:
/*   103 */                     // import time
/*   104 */                     // ^
/*   105 */                     //
/*   106 */                     $currLineNo = 46;
/*   107 */                     $currColNo = 0;
/*   108 */ 
/*   109 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   110 */                     $blk = 1; /* allowing case fallthrough */
/*   111 */                 case 1:
/*   112 */                     /* --- function return or resume suspension --- */
/*   113 */                     if ($ret && $ret.$isSuspension) {
/*   114 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 46, 0);
/*   115 */                     }
/*   116 */                     var $module121 = $ret;
/*   117 */                     $loc.time = $module121;
/*   118 */                     //
/*   119 */                     // line 48:
/*   120 */                     // USAGE = """gcbench [num_repetitions] [--depths=N,N,N..] [--threads=N]"""
/*   121 */                     // ^
/*   122 */                     //
/*   123 */                     $currLineNo = 48;
/*   124 */                     $currColNo = 0;
/*   125 */ 
/*   126 */                     var $str122 = new Sk.builtins['str']('gcbench [num_repetitions] [--depths=N,N,N..] [--threads=N]');
/*   127 */                     $loc.USAGE = $str122;
/*   128 */                     //
/*   129 */                     // line 49:
/*   130 */                     // ENABLE_THREADS = True
/*   131 */                     // ^
/*   132 */                     //
/*   133 */                     $currLineNo = 49;
/*   134 */                     $currColNo = 0;
/*   135 */ 
/*   136 */                     $loc.ENABLE_THREADS = Sk.builtin.bool.true$;
/*   137 */                     //
/*   138 */                     // line 52:
/*   139 */                     // class Node(object):
/*   140 */                     // ^
/*   141 */                     //
/*   142 */                     $currLineNo = 52;
/*   143 */                     $currColNo = 0;
/*   144 */ 
/*   145 */                     var $loadname123 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   146 */                     $scope124.co_name = new Sk.builtins['str']('Node');
/*   147 */                     var $built128 = Sk.misceval.buildClass($gbl, $scope124, 'Node', [$loadname123]);
/*   148 */                     $loc.Node = $built128;
/*   149 */                     //
/*   150 */                     // line 58:
/*   151 */                     // kStretchTreeDepth    = 18  # about 16Mb (for Java)
/*   152 */                     // ^
/*   153 */                     //
/*   154 */                     $currLineNo = 58;
/*   155 */                     $currColNo = 0;
/*   156 */ 
/*   157 */                     $loc.kStretchTreeDepth = new Sk.builtin.int_(18);
/*   158 */                     //
/*   159 */                     // line 59:
/*   160 */                     // kLongLivedTreeDepth  = 16  # about 4Mb (for Java)
/*   161 */                     // ^
/*   162 */                     //
/*   163 */                     $currLineNo = 59;
/*   164 */                     $currColNo = 0;
/*   165 */ 
/*   166 */                     $loc.kLongLivedTreeDepth = new Sk.builtin.int_(16);
/*   167 */                     //
/*   168 */                     // line 60:
/*   169 */                     // kArraySize  = 500000   # about 4Mb
/*   170 */                     // ^
/*   171 */                     //
/*   172 */                     $currLineNo = 60;
/*   173 */                     $currColNo = 0;
/*   174 */ 
/*   175 */                     $loc.kArraySize = new Sk.builtin.int_(500000);
/*   176 */                     //
/*   177 */                     // line 61:
/*   178 */                     // kMinTreeDepth = 4
/*   179 */                     // ^
/*   180 */                     //
/*   181 */                     $currLineNo = 61;
/*   182 */                     $currColNo = 0;
/*   183 */ 
/*   184 */                     $loc.kMinTreeDepth = new Sk.builtin.int_(4);
/*   185 */                     //
/*   186 */                     // line 62:
/*   187 */                     // kMaxTreeDepth = 16
/*   188 */                     // ^
/*   189 */                     //
/*   190 */                     $currLineNo = 62;
/*   191 */                     $currColNo = 0;
/*   192 */ 
/*   193 */                     $loc.kMaxTreeDepth = new Sk.builtin.int_(16);
/*   194 */                     //
/*   195 */                     // line 64:
/*   196 */                     // def tree_size(i):
/*   197 */                     // ^
/*   198 */                     //
/*   199 */                     $currLineNo = 64;
/*   200 */                     $currColNo = 0;
/*   201 */ 
/*   202 */                     $scope129.co_name = new Sk.builtins['str']('tree_size');
/*   203 */                     $scope129.co_varnames = ['i'];
/*   204 */                     var $funcobj135 = new Sk.builtins['function']($scope129, $gbl);
/*   205 */                     $loc.tree_size = $funcobj135;
/*   206 */                     //
/*   207 */                     // line 68:
/*   208 */                     // def num_iters(i):
/*   209 */                     // ^
/*   210 */                     //
/*   211 */                     $currLineNo = 68;
/*   212 */                     $currColNo = 0;
/*   213 */ 
/*   214 */                     $scope136.co_name = new Sk.builtins['str']('num_iters');
/*   215 */                     $scope136.co_varnames = ['i'];
/*   216 */                     var $funcobj146 = new Sk.builtins['function']($scope136, $gbl);
/*   217 */                     $loc.num_iters = $funcobj146;
/*   218 */                     //
/*   219 */                     // line 72:
/*   220 */                     // def populate(depth, node):
/*   221 */                     // ^
/*   222 */                     //
/*   223 */                     $currLineNo = 72;
/*   224 */                     $currColNo = 0;
/*   225 */ 
/*   226 */                     $scope147.co_name = new Sk.builtins['str']('populate');
/*   227 */                     $scope147.co_varnames = ['depth', 'node'];
/*   228 */                     var $funcobj164 = new Sk.builtins['function']($scope147, $gbl);
/*   229 */                     $loc.populate = $funcobj164;
/*   230 */                     //
/*   231 */                     // line 83:
/*   232 */                     // def make_tree(depth):
/*   233 */                     // ^
/*   234 */                     //
/*   235 */                     $currLineNo = 83;
/*   236 */                     $currColNo = 0;
/*   237 */ 
/*   238 */                     $scope165.co_name = new Sk.builtins['str']('make_tree');
/*   239 */                     $scope165.co_varnames = ['depth'];
/*   240 */                     var $funcobj181 = new Sk.builtins['function']($scope165, $gbl);
/*   241 */                     $loc.make_tree = $funcobj181;
/*   242 */                     //
/*   243 */                     // line 90:
/*   244 */                     // def print_diagnostics():
/*   245 */                     // ^
/*   246 */                     //
/*   247 */                     $currLineNo = 90;
/*   248 */                     $currColNo = 0;
/*   249 */ 
/*   250 */                     $scope182.co_name = new Sk.builtins['str']('print_diagnostics');
/*   251 */                     var $funcobj185 = new Sk.builtins['function']($scope182, $gbl);
/*   252 */                     $loc.print_diagnostics = $funcobj185;
/*   253 */                     //
/*   254 */                     // line 94:
/*   255 */                     // def time_construction(depth, debug=False):
/*   256 */                     // ^
/*   257 */                     //
/*   258 */                     $currLineNo = 94;
/*   259 */                     $currColNo = 0;
/*   260 */ 
/*   261 */                     $scope186.co_name = new Sk.builtins['str']('time_construction');
/*   262 */                     $scope186.$defaults = [Sk.builtin.bool.false$];
/*   263 */                     $scope186.co_varnames = ['depth', 'debug'];
/*   264 */                     var $funcobj227 = new Sk.builtins['function']($scope186, $gbl);
/*   265 */                     $loc.time_construction = $funcobj227;
/*   266 */                     //
/*   267 */                     // line 113:
/*   268 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   269 */                     // ^
/*   270 */                     //
/*   271 */                     $currLineNo = 113;
/*   272 */                     $currColNo = 0;
/*   273 */ 
/*   274 */                     var $loadname228 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   275 */                     var $loadname229 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   276 */                     var $loadname230 = $loc.kMinTreeDepth !== undefined ? $loc.kMinTreeDepth : Sk.misceval.loadname('kMinTreeDepth', $gbl);;
/*   277 */                     var $loadname231 = $loc.kMaxTreeDepth !== undefined ? $loc.kMaxTreeDepth : Sk.misceval.loadname('kMaxTreeDepth', $gbl);;
/*   278 */                     var $binop232 = Sk.abstr.numberBinOp($loadname231, new Sk.builtin.int_(1), 'Add');
/*   279 */                     $ret;
/*   280 */                     $ret = Sk.misceval.callsimOrSuspend($loadname229, $loadname230, $binop232, new Sk.builtin.int_(2));
/*   281 */                     $blk = 2; /* allowing case fallthrough */
/*   282 */                 case 2:
/*   283 */                     /* --- function return or resume suspension --- */
/*   284 */                     if ($ret && $ret.$isSuspension) {
/*   285 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 113, 22);
/*   286 */                     }
/*   287 */                     var $call233 = $ret;
/*   288 */                     //
/*   289 */                     // line 113:
/*   290 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   291 */                     //                       ^
/*   292 */                     //
/*   293 */                     $currLineNo = 113;
/*   294 */                     $currColNo = 22;
/*   295 */ 
/*   296 */                     $ret;
/*   297 */                     $ret = Sk.misceval.callsimOrSuspend($loadname228, $call233);
/*   298 */                     $blk = 3; /* allowing case fallthrough */
/*   299 */                 case 3:
/*   300 */                     /* --- function return or resume suspension --- */
/*   301 */                     if ($ret && $ret.$isSuspension) {
/*   302 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 113, 17);
/*   303 */                     }
/*   304 */                     var $call234 = $ret;
/*   305 */                     //
/*   306 */                     // line 113:
/*   307 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   308 */                     //                  ^
/*   309 */                     //
/*   310 */                     $currLineNo = 113;
/*   311 */                     $currColNo = 17;
/*   312 */ 
/*   313 */                     $loc.DEFAULT_DEPTHS = $call234;
/*   314 */                     //
/*   315 */                     // line 115:
/*   316 */                     // def time_constructions(depths, debug=False):
/*   317 */                     // ^
/*   318 */                     //
/*   319 */                     $currLineNo = 115;
/*   320 */                     $currColNo = 0;
/*   321 */ 
/*   322 */                     $scope235.co_name = new Sk.builtins['str']('time_constructions');
/*   323 */                     $scope235.$defaults = [Sk.builtin.bool.false$];
/*   324 */                     $scope235.co_varnames = ['depths', 'debug'];
/*   325 */                     var $funcobj241 = new Sk.builtins['function']($scope235, $gbl);
/*   326 */                     $loc.time_constructions = $funcobj241;
/*   327 */                     //
/*   328 */                     // line 119:
/*   329 */                     // def time_parallel_constructions(depths, nthreads, debug=False):
/*   330 */                     // ^
/*   331 */                     //
/*   332 */                     $currLineNo = 119;
/*   333 */                     $currColNo = 0;
/*   334 */ 
/*   335 */                     $scope242.co_name = new Sk.builtins['str']('time_parallel_constructions');
/*   336 */                     $scope242.$defaults = [Sk.builtin.bool.false$];
/*   337 */                     $scope242.co_varnames = ['depths', 'nthreads', 'debug'];
/*   338 */                     var $funcobj246 = new Sk.builtins['function']($scope242, $gbl);
/*   339 */                     $loc.time_parallel_constructions = $funcobj246;
/*   340 */                     //
/*   341 */                     // line 122:
/*   342 */                     // def main(numruns, depths=DEFAULT_DEPTHS, threads=0, debug=False):
/*   343 */                     // ^
/*   344 */                     //
/*   345 */                     $currLineNo = 122;
/*   346 */                     $currColNo = 0;
/*   347 */ 
/*   348 */                     var $loadname247 = $loc.DEFAULT_DEPTHS !== undefined ? $loc.DEFAULT_DEPTHS : Sk.misceval.loadname('DEFAULT_DEPTHS', $gbl);;
/*   349 */                     $scope248.co_name = new Sk.builtins['str']('main');
/*   350 */                     $scope248.$defaults = [$loadname247, new Sk.builtin.int_(0), Sk.builtin.bool.false$];
/*   351 */                     $scope248.co_varnames = ['numruns', 'depths', 'threads', 'debug'];
/*   352 */                     var $funcobj310 = new Sk.builtins['function']($scope248, $gbl);
/*   353 */                     $loc.main = $funcobj310;
/*   354 */                     //
/*   355 */                     // line 162:
/*   356 */                     // class Failed(Exception):
/*   357 */                     // ^
/*   358 */                     //
/*   359 */                     $currLineNo = 162;
/*   360 */                     $currColNo = 0;
/*   361 */ 
/*   362 */                     var $loadname311 = $loc.Exception !== undefined ? $loc.Exception : Sk.misceval.loadname('Exception', $gbl);;
/*   363 */                     $scope312.co_name = new Sk.builtins['str']('Failed');
/*   364 */                     var $built313 = Sk.misceval.buildClass($gbl, $scope312, 'Failed', [$loadname311]);
/*   365 */                     $loc.Failed = $built313;
/*   366 */                     //
/*   367 */                     // line 165:
/*   368 */                     // main(1)
/*   369 */                     // ^
/*   370 */                     //
/*   371 */                     $currLineNo = 165;
/*   372 */                     $currColNo = 0;
/*   373 */ 
/*   374 */                     var $loadname314 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   375 */                     $ret;
/*   376 */                     $ret = Sk.misceval.callsimOrSuspend($loadname314, new Sk.builtin.int_(1));
/*   377 */                     $blk = 4; /* allowing case fallthrough */
/*   378 */                 case 4:
/*   379 */                     /* --- function return or resume suspension --- */
/*   380 */                     if ($ret && $ret.$isSuspension) {
/*   381 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 165, 0);
/*   382 */                     }
/*   383 */                     var $call315 = $ret;
/*   384 */                     //
/*   385 */                     // line 165:
/*   386 */                     // main(1)
/*   387 */                     // ^
/*   388 */                     //
/*   389 */                     $currLineNo = 165;
/*   390 */                     $currColNo = 0;
/*   391 */ 
/*   392 */                     return $loc;
/*   393 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   394 */                 }
/*   395 */             } catch (err) {
/*   396 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   397 */                     err = new Sk.builtin.ExternalError(err);
/*   398 */                 }
/*   399 */                 err.traceback.push({
/*   400 */                     lineno: $currLineNo,
/*   401 */                     colno: $currColNo,
/*   402 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   403 */                 });
/*   404 */                 if ($exc.length > 0) {
/*   405 */                     $err = err;
/*   406 */                     $blk = $exc.pop();
/*   407 */                     continue;
/*   408 */                 } else {
/*   409 */                     throw err;
/*   410 */                 }
/*   411 */             }
/*   412 */         }
/*   413 */     });
/*   414 */     var $scope124 = (function $Node$class_outer($globals, $locals, $rest) {
/*   415 */         var $gbl = $globals,
/*   416 */             $loc = $locals;
/*   417 */         (function $Node$_closure() {
/*   418 */             var $blk = 0,
/*   419 */                 $exc = [],
/*   420 */                 $ret = undefined,
/*   421 */                 $postfinally = undefined,
/*   422 */                 $currLineNo = undefined,
/*   423 */                 $currColNo = undefined;
/*   424 */             while (true) {
/*   425 */                 try {
/*   426 */                     switch ($blk) {
/*   427 */                     case 0:
/*   428 */                         /* --- class entry --- */
/*   429 */                         //
/*   430 */                         // line 54:
/*   431 */                         //     def __init__(self, l=None, r=None):
/*   432 */                         //     ^
/*   433 */                         //
/*   434 */                         $currLineNo = 54;
/*   435 */                         $currColNo = 4;
/*   436 */ 
/*   437 */                         $scope125.co_name = new Sk.builtins['str']('__init__');
/*   438 */                         $scope125.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$];
/*   439 */                         $scope125.co_varnames = ['self', 'l', 'r'];
/*   440 */                         var $funcobj127 = new Sk.builtins['function']($scope125, $gbl);
/*   441 */                         $loc.__init__ = $funcobj127;
/*   442 */                         return;
/*   443 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   444 */                     }
/*   445 */                 } catch (err) {
/*   446 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   447 */                         err = new Sk.builtin.ExternalError(err);
/*   448 */                     }
/*   449 */                     err.traceback.push({
/*   450 */                         lineno: $currLineNo,
/*   451 */                         colno: $currColNo,
/*   452 */                         filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   453 */                     });
/*   454 */                     if ($exc.length > 0) {
/*   455 */                         $err = err;
/*   456 */                         $blk = $exc.pop();
/*   457 */                         continue;
/*   458 */                     } else {
/*   459 */                         throw err;
/*   460 */                     }
/*   461 */                 }
/*   462 */             }
/*   463 */         }).apply(null, $rest);
/*   464 */     });
/*   465 */     var $scope125 = (function $__init__126$(self, l, r) {
/*   466 */         var l, l, l, r, r, r, self, self, self;
/*   467 */         var $wakeFromSuspension = function() {
/*   468 */             var susp = $scope125.$wakingSuspension;
/*   469 */             delete $scope125.$wakingSuspension;
/*   470 */             $blk = susp.$blk;
/*   471 */             $loc = susp.$loc;
/*   472 */             $gbl = susp.$gbl;
/*   473 */             $exc = susp.$exc;
/*   474 */             $err = susp.$err;
/*   475 */             $postfinally = susp.$postfinally;
/*   476 */             $currLineNo = susp.$lineno;
/*   477 */             $currColNo = susp.$colno;
/*   478 */             Sk.lastYield = Date.now();
/*   479 */             l = susp.$tmps.l;
/*   480 */             r = susp.$tmps.r;
/*   481 */             self = susp.$tmps.self;
/*   482 */             try {
/*   483 */                 $ret = susp.child.resume();
/*   484 */             } catch (err) {
/*   485 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   486 */                     err = new Sk.builtin.ExternalError(err);
/*   487 */                 }
/*   488 */                 err.traceback.push({
/*   489 */                     lineno: $currLineNo,
/*   490 */                     colno: $currColNo,
/*   491 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   492 */                 });
/*   493 */                 if ($exc.length > 0) {
/*   494 */                     $err = err;
/*   495 */                     $blk = $exc.pop();
/*   496 */                 } else {
/*   497 */                     throw err;
/*   498 */                 }
/*   499 */             }
/*   500 */         };
/*   501 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   502 */             var susp = new Sk.misceval.Suspension();
/*   503 */             susp.child = $child;
/*   504 */             susp.resume = function() {
/*   505 */                 $scope125.$wakingSuspension = susp;
/*   506 */                 return $scope125();
/*   507 */             };
/*   508 */             susp.data = susp.child.data;
/*   509 */             susp.$blk = $blk;
/*   510 */             susp.$loc = $loc;
/*   511 */             susp.$gbl = $gbl;
/*   512 */             susp.$exc = $exc;
/*   513 */             susp.$err = $err;
/*   514 */             susp.$postfinally = $postfinally;
/*   515 */             susp.$filename = $filename;
/*   516 */             susp.$lineno = $lineno;
/*   517 */             susp.$colno = $colno;
/*   518 */             susp.optional = susp.child.optional;
/*   519 */             susp.$tmps = {
/*   520 */                 "l": l,
/*   521 */                 "r": r,
/*   522 */                 "self": self
/*   523 */             };
/*   524 */             return susp;
/*   525 */         };
/*   526 */         var $blk = 0,
/*   527 */             $exc = [],
/*   528 */             $loc = {},
/*   529 */             $gbl = this,
/*   530 */             $err = undefined,
/*   531 */             $ret = undefined,
/*   532 */             $postfinally = undefined,
/*   533 */             $currLineNo = undefined,
/*   534 */             $currColNo = undefined;
/*   535 */         if ($scope125.$wakingSuspension !== undefined) {
/*   536 */             $wakeFromSuspension();
/*   537 */         } else {
/*   538 */             if (l === undefined) l = $scope125.$defaults[0];
/*   539 */             if (r === undefined) r = $scope125.$defaults[1];
/*   540 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 3, false, false);
/*   541 */         }
/*   542 */         while (true) {
/*   543 */             try {
/*   544 */                 switch ($blk) {
/*   545 */                 case 0:
/*   546 */                     /* --- codeobj entry --- */
/*   547 */                     if (self === undefined) {
/*   548 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   549 */                     }
/*   550 */                     if (l === undefined) {
/*   551 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   552 */                     }
/*   553 */                     if (r === undefined) {
/*   554 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   555 */                     }
/*   556 */                     if (l === undefined) {
/*   557 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   558 */                     }
/*   559 */                     if (r === undefined) {
/*   560 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   561 */                     }
/*   562 */ 
/*   563 */                     //
/*   564 */                     // line 55:
/*   565 */                     //         self.left = l
/*   566 */                     //         ^
/*   567 */                     //
/*   568 */                     $currLineNo = 55;
/*   569 */                     $currColNo = 8;
/*   570 */ 
/*   571 */                     if (l === undefined) {
/*   572 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   573 */                     }
/*   574 */                     if (self === undefined) {
/*   575 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   576 */                     }
/*   577 */                     $ret = Sk.abstr.sattr(self, 'left', l, true);
/*   578 */                     $blk = 1; /* allowing case fallthrough */
/*   579 */                 case 1:
/*   580 */                     /* --- function return or resume suspension --- */
/*   581 */                     if ($ret && $ret.$isSuspension) {
/*   582 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 55, 8);
/*   583 */                     }
/*   584 */                     //
/*   585 */                     // line 56:
/*   586 */                     //         self.right = r
/*   587 */                     //         ^
/*   588 */                     //
/*   589 */                     $currLineNo = 56;
/*   590 */                     $currColNo = 8;
/*   591 */ 
/*   592 */                     if (r === undefined) {
/*   593 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   594 */                     }
/*   595 */                     if (self === undefined) {
/*   596 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   597 */                     }
/*   598 */                     $ret = Sk.abstr.sattr(self, 'right', r, true);
/*   599 */                     $blk = 2; /* allowing case fallthrough */
/*   600 */                 case 2:
/*   601 */                     /* --- function return or resume suspension --- */
/*   602 */                     if ($ret && $ret.$isSuspension) {
/*   603 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 56, 8);
/*   604 */                     }
/*   605 */                     return Sk.builtin.none.none$;
/*   606 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   607 */                 }
/*   608 */             } catch (err) {
/*   609 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   610 */                     err = new Sk.builtin.ExternalError(err);
/*   611 */                 }
/*   612 */                 err.traceback.push({
/*   613 */                     lineno: $currLineNo,
/*   614 */                     colno: $currColNo,
/*   615 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   616 */                 });
/*   617 */                 if ($exc.length > 0) {
/*   618 */                     $err = err;
/*   619 */                     $blk = $exc.pop();
/*   620 */                     continue;
/*   621 */                 } else {
/*   622 */                     throw err;
/*   623 */                 }
/*   624 */             }
/*   625 */         }
/*   626 */     });
/*   627 */     var $scope129 = (function $tree_size130$(i) {
/*   628 */         var $blk = 0,
/*   629 */             $exc = [],
/*   630 */             $loc = {},
/*   631 */             $gbl = this,
/*   632 */             $err = undefined,
/*   633 */             $ret = undefined,
/*   634 */             $postfinally = undefined,
/*   635 */             $currLineNo = undefined,
/*   636 */             $currColNo = undefined;
/*   637 */         if ($scope129.$wakingSuspension !== undefined) {
/*   638 */             $wakeFromSuspension();
/*   639 */         } else {
/*   640 */             Sk.builtin.pyCheckArgs("tree_size", arguments, 1, 1, false, false);
/*   641 */         }
/*   642 */         while (true) {
/*   643 */             try {
/*   644 */                 switch ($blk) {
/*   645 */                 case 0:
/*   646 */                     /* --- codeobj entry --- */
/*   647 */                     if (i === undefined) {
/*   648 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   649 */                     }
/*   650 */ 
/*   651 */                     //
/*   652 */                     // line 65:
/*   653 */                     //     "Nodes used by a tree of a given size"
/*   654 */                     //     ^
/*   655 */                     //
/*   656 */                     $currLineNo = 65;
/*   657 */                     $currColNo = 4;
/*   658 */ 
/*   659 */                     var $str131 = new Sk.builtins['str']('Nodes used by a tree of a given size');
/*   660 */                     //
/*   661 */                     // line 66:
/*   662 */                     //     return (1 << (i + 1)) - 1
/*   663 */                     //     ^
/*   664 */                     //
/*   665 */                     $currLineNo = 66;
/*   666 */                     $currColNo = 4;
/*   667 */ 
/*   668 */                     if (i === undefined) {
/*   669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   670 */                     }
/*   671 */                     var $binop132 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(1), 'Add');
/*   672 */                     var $binop133 = Sk.abstr.numberBinOp(new Sk.builtin.int_(1), $binop132, 'LShift');
/*   673 */                     var $binop134 = Sk.abstr.numberBinOp($binop133, new Sk.builtin.int_(1), 'Sub');
/*   674 */                     return $binop134;
/*   675 */                     return Sk.builtin.none.none$;
/*   676 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   677 */                 }
/*   678 */             } catch (err) {
/*   679 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   680 */                     err = new Sk.builtin.ExternalError(err);
/*   681 */                 }
/*   682 */                 err.traceback.push({
/*   683 */                     lineno: $currLineNo,
/*   684 */                     colno: $currColNo,
/*   685 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   686 */                 });
/*   687 */                 if ($exc.length > 0) {
/*   688 */                     $err = err;
/*   689 */                     $blk = $exc.pop();
/*   690 */                     continue;
/*   691 */                 } else {
/*   692 */                     throw err;
/*   693 */                 }
/*   694 */             }
/*   695 */         }
/*   696 */     });
/*   697 */     var $scope136 = (function $num_iters137$(i) {
/*   698 */         var i, i, $loadgbl139, $loadgbl140, $loadgbl139, $loadgbl140, $call141, $binop142, $loadgbl143;
/*   699 */         var $wakeFromSuspension = function() {
/*   700 */             var susp = $scope136.$wakingSuspension;
/*   701 */             delete $scope136.$wakingSuspension;
/*   702 */             $blk = susp.$blk;
/*   703 */             $loc = susp.$loc;
/*   704 */             $gbl = susp.$gbl;
/*   705 */             $exc = susp.$exc;
/*   706 */             $err = susp.$err;
/*   707 */             $postfinally = susp.$postfinally;
/*   708 */             $currLineNo = susp.$lineno;
/*   709 */             $currColNo = susp.$colno;
/*   710 */             Sk.lastYield = Date.now();
/*   711 */             i = susp.$tmps.i;
/*   712 */             $loadgbl139 = susp.$tmps.$loadgbl139;
/*   713 */             $loadgbl140 = susp.$tmps.$loadgbl140;
/*   714 */             $call141 = susp.$tmps.$call141;
/*   715 */             $binop142 = susp.$tmps.$binop142;
/*   716 */             $loadgbl143 = susp.$tmps.$loadgbl143;
/*   717 */             try {
/*   718 */                 $ret = susp.child.resume();
/*   719 */             } catch (err) {
/*   720 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   721 */                     err = new Sk.builtin.ExternalError(err);
/*   722 */                 }
/*   723 */                 err.traceback.push({
/*   724 */                     lineno: $currLineNo,
/*   725 */                     colno: $currColNo,
/*   726 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   727 */                 });
/*   728 */                 if ($exc.length > 0) {
/*   729 */                     $err = err;
/*   730 */                     $blk = $exc.pop();
/*   731 */                 } else {
/*   732 */                     throw err;
/*   733 */                 }
/*   734 */             }
/*   735 */         };
/*   736 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   737 */             var susp = new Sk.misceval.Suspension();
/*   738 */             susp.child = $child;
/*   739 */             susp.resume = function() {
/*   740 */                 $scope136.$wakingSuspension = susp;
/*   741 */                 return $scope136();
/*   742 */             };
/*   743 */             susp.data = susp.child.data;
/*   744 */             susp.$blk = $blk;
/*   745 */             susp.$loc = $loc;
/*   746 */             susp.$gbl = $gbl;
/*   747 */             susp.$exc = $exc;
/*   748 */             susp.$err = $err;
/*   749 */             susp.$postfinally = $postfinally;
/*   750 */             susp.$filename = $filename;
/*   751 */             susp.$lineno = $lineno;
/*   752 */             susp.$colno = $colno;
/*   753 */             susp.optional = susp.child.optional;
/*   754 */             susp.$tmps = {
/*   755 */                 "i": i,
/*   756 */                 "$loadgbl139": $loadgbl139,
/*   757 */                 "$loadgbl140": $loadgbl140,
/*   758 */                 "$call141": $call141,
/*   759 */                 "$binop142": $binop142,
/*   760 */                 "$loadgbl143": $loadgbl143
/*   761 */             };
/*   762 */             return susp;
/*   763 */         };
/*   764 */         var $blk = 0,
/*   765 */             $exc = [],
/*   766 */             $loc = {},
/*   767 */             $gbl = this,
/*   768 */             $err = undefined,
/*   769 */             $ret = undefined,
/*   770 */             $postfinally = undefined,
/*   771 */             $currLineNo = undefined,
/*   772 */             $currColNo = undefined;
/*   773 */         if ($scope136.$wakingSuspension !== undefined) {
/*   774 */             $wakeFromSuspension();
/*   775 */         } else {
/*   776 */             Sk.builtin.pyCheckArgs("num_iters", arguments, 1, 1, false, false);
/*   777 */         }
/*   778 */         while (true) {
/*   779 */             try {
/*   780 */                 switch ($blk) {
/*   781 */                 case 0:
/*   782 */                     /* --- codeobj entry --- */
/*   783 */                     if (i === undefined) {
/*   784 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   785 */                     }
/*   786 */ 
/*   787 */                     //
/*   788 */                     // line 69:
/*   789 */                     //     "Number of iterations to use for a given tree depth"
/*   790 */                     //     ^
/*   791 */                     //
/*   792 */                     $currLineNo = 69;
/*   793 */                     $currColNo = 4;
/*   794 */ 
/*   795 */                     var $str138 = new Sk.builtins['str']('Number of iterations to use for a given tree depth');
/*   796 */                     //
/*   797 */                     // line 70:
/*   798 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   799 */                     //     ^
/*   800 */                     //
/*   801 */                     $currLineNo = 70;
/*   802 */                     $currColNo = 4;
/*   803 */ 
/*   804 */                     var $loadgbl139 = Sk.misceval.loadname('tree_size', $gbl);
/*   805 */                     var $loadgbl140 = Sk.misceval.loadname('kStretchTreeDepth', $gbl);
/*   806 */                     $ret;
/*   807 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl139, $loadgbl140);
/*   808 */                     $blk = 1; /* allowing case fallthrough */
/*   809 */                 case 1:
/*   810 */                     /* --- function return or resume suspension --- */
/*   811 */                     if ($ret && $ret.$isSuspension) {
/*   812 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 70, 15);
/*   813 */                     }
/*   814 */                     var $call141 = $ret;
/*   815 */                     //
/*   816 */                     // line 70:
/*   817 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   818 */                     //                ^
/*   819 */                     //
/*   820 */                     $currLineNo = 70;
/*   821 */                     $currColNo = 15;
/*   822 */ 
/*   823 */                     var $binop142 = Sk.abstr.numberBinOp(new Sk.builtin.int_(2), $call141, 'Mult');
/*   824 */                     var $loadgbl143 = Sk.misceval.loadname('tree_size', $gbl);
/*   825 */                     if (i === undefined) {
/*   826 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   827 */                     }
/*   828 */                     $ret;
/*   829 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl143, i);
/*   830 */                     $blk = 2; /* allowing case fallthrough */
/*   831 */                 case 2:
/*   832 */                     /* --- function return or resume suspension --- */
/*   833 */                     if ($ret && $ret.$isSuspension) {
/*   834 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 70, 46);
/*   835 */                     }
/*   836 */                     var $call144 = $ret;
/*   837 */                     //
/*   838 */                     // line 70:
/*   839 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   840 */                     //                                               ^
/*   841 */                     //
/*   842 */                     $currLineNo = 70;
/*   843 */                     $currColNo = 46;
/*   844 */ 
/*   845 */                     var $binop145 = Sk.abstr.numberBinOp($binop142, $call144, 'Div');
/*   846 */                     return $binop145;
/*   847 */                     return Sk.builtin.none.none$;
/*   848 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   849 */                 }
/*   850 */             } catch (err) {
/*   851 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   852 */                     err = new Sk.builtin.ExternalError(err);
/*   853 */                 }
/*   854 */                 err.traceback.push({
/*   855 */                     lineno: $currLineNo,
/*   856 */                     colno: $currColNo,
/*   857 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   858 */                 });
/*   859 */                 if ($exc.length > 0) {
/*   860 */                     $err = err;
/*   861 */                     $blk = $exc.pop();
/*   862 */                     continue;
/*   863 */                 } else {
/*   864 */                     throw err;
/*   865 */                 }
/*   866 */             }
/*   867 */         }
/*   868 */     });
/*   869 */     var $scope147 = (function $populate148$(depth, node) {
/*   870 */         var depth, depth, depth, depth, depth, depth, node, node, node, node, node, $compareres150, $loadgbl154, $loadgbl154, $call155, $loadgbl156, $loadgbl156, $call157, $loadgbl158, $loadgbl158, $lattr159, $loadgbl161, $loadgbl161, $lattr162;
/*   871 */         var $wakeFromSuspension = function() {
/*   872 */             var susp = $scope147.$wakingSuspension;
/*   873 */             delete $scope147.$wakingSuspension;
/*   874 */             $blk = susp.$blk;
/*   875 */             $loc = susp.$loc;
/*   876 */             $gbl = susp.$gbl;
/*   877 */             $exc = susp.$exc;
/*   878 */             $err = susp.$err;
/*   879 */             $postfinally = susp.$postfinally;
/*   880 */             $currLineNo = susp.$lineno;
/*   881 */             $currColNo = susp.$colno;
/*   882 */             Sk.lastYield = Date.now();
/*   883 */             depth = susp.$tmps.depth;
/*   884 */             node = susp.$tmps.node;
/*   885 */             $compareres150 = susp.$tmps.$compareres150;
/*   886 */             $loadgbl154 = susp.$tmps.$loadgbl154;
/*   887 */             $call155 = susp.$tmps.$call155;
/*   888 */             $loadgbl156 = susp.$tmps.$loadgbl156;
/*   889 */             $call157 = susp.$tmps.$call157;
/*   890 */             $loadgbl158 = susp.$tmps.$loadgbl158;
/*   891 */             $lattr159 = susp.$tmps.$lattr159;
/*   892 */             $loadgbl161 = susp.$tmps.$loadgbl161;
/*   893 */             $lattr162 = susp.$tmps.$lattr162;
/*   894 */             try {
/*   895 */                 $ret = susp.child.resume();
/*   896 */             } catch (err) {
/*   897 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   898 */                     err = new Sk.builtin.ExternalError(err);
/*   899 */                 }
/*   900 */                 err.traceback.push({
/*   901 */                     lineno: $currLineNo,
/*   902 */                     colno: $currColNo,
/*   903 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   904 */                 });
/*   905 */                 if ($exc.length > 0) {
/*   906 */                     $err = err;
/*   907 */                     $blk = $exc.pop();
/*   908 */                 } else {
/*   909 */                     throw err;
/*   910 */                 }
/*   911 */             }
/*   912 */         };
/*   913 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   914 */             var susp = new Sk.misceval.Suspension();
/*   915 */             susp.child = $child;
/*   916 */             susp.resume = function() {
/*   917 */                 $scope147.$wakingSuspension = susp;
/*   918 */                 return $scope147();
/*   919 */             };
/*   920 */             susp.data = susp.child.data;
/*   921 */             susp.$blk = $blk;
/*   922 */             susp.$loc = $loc;
/*   923 */             susp.$gbl = $gbl;
/*   924 */             susp.$exc = $exc;
/*   925 */             susp.$err = $err;
/*   926 */             susp.$postfinally = $postfinally;
/*   927 */             susp.$filename = $filename;
/*   928 */             susp.$lineno = $lineno;
/*   929 */             susp.$colno = $colno;
/*   930 */             susp.optional = susp.child.optional;
/*   931 */             susp.$tmps = {
/*   932 */                 "depth": depth,
/*   933 */                 "node": node,
/*   934 */                 "$compareres150": $compareres150,
/*   935 */                 "$loadgbl154": $loadgbl154,
/*   936 */                 "$call155": $call155,
/*   937 */                 "$loadgbl156": $loadgbl156,
/*   938 */                 "$call157": $call157,
/*   939 */                 "$loadgbl158": $loadgbl158,
/*   940 */                 "$lattr159": $lattr159,
/*   941 */                 "$loadgbl161": $loadgbl161,
/*   942 */                 "$lattr162": $lattr162
/*   943 */             };
/*   944 */             return susp;
/*   945 */         };
/*   946 */         var $blk = 0,
/*   947 */             $exc = [],
/*   948 */             $loc = {},
/*   949 */             $gbl = this,
/*   950 */             $err = undefined,
/*   951 */             $ret = undefined,
/*   952 */             $postfinally = undefined,
/*   953 */             $currLineNo = undefined,
/*   954 */             $currColNo = undefined;
/*   955 */         if ($scope147.$wakingSuspension !== undefined) {
/*   956 */             $wakeFromSuspension();
/*   957 */         } else {
/*   958 */             Sk.builtin.pyCheckArgs("populate", arguments, 2, 2, false, false);
/*   959 */         }
/*   960 */         while (true) {
/*   961 */             try {
/*   962 */                 switch ($blk) {
/*   963 */                 case 0:
/*   964 */                     /* --- codeobj entry --- */
/*   965 */                     if (depth === undefined) {
/*   966 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*   967 */                     }
/*   968 */                     if (node === undefined) {
/*   969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*   970 */                     }
/*   971 */ 
/*   972 */                     //
/*   973 */                     // line 73:
/*   974 */                     //     "Build tree top down, assigning to older objects."
/*   975 */                     //     ^
/*   976 */                     //
/*   977 */                     $currLineNo = 73;
/*   978 */                     $currColNo = 4;
/*   979 */ 
/*   980 */                     var $str149 = new Sk.builtins['str']('Build tree top down, assigning to older objects.');
/*   981 */                     //
/*   982 */                     // line 74:
/*   983 */                     //     if depth <= 0:
/*   984 */                     //     ^
/*   985 */                     //
/*   986 */                     $currLineNo = 74;
/*   987 */                     $currColNo = 4;
/*   988 */ 
/*   989 */                     if (depth === undefined) {
/*   990 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*   991 */                     }
/*   992 */                     var $compareres150 = null;
/*   993 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(depth, new Sk.builtin.int_(0), 'LtE', true));
/*   994 */                     $blk = 4; /* allowing case fallthrough */
/*   995 */                 case 4:
/*   996 */                     /* --- function return or resume suspension --- */
/*   997 */                     if ($ret && $ret.$isSuspension) {
/*   998 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 74, 7);
/*   999 */                     }
/*  1000 */                     $compareres150 = $ret;
/*  1001 */                     var $jfalse151 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1002 */                     if ($jfalse151) { /*test failed */
/*  1003 */                         $blk = 3;
/*  1004 */                         continue;
/*  1005 */                     }
/*  1006 */                     $blk = 3; /* allowing case fallthrough */
/*  1007 */                 case 3:
/*  1008 */                     /* --- done --- */
/*  1009 */                     var $jfalse152 = ($compareres150 === false || !Sk.misceval.isTrue($compareres150));
/*  1010 */                     if ($jfalse152) { /*test failed */
/*  1011 */                         $blk = 2;
/*  1012 */                         continue;
/*  1013 */                     }
/*  1014 */                     //
/*  1015 */                     // line 75:
/*  1016 */                     //         return
/*  1017 */                     //         ^
/*  1018 */                     //
/*  1019 */                     $currLineNo = 75;
/*  1020 */                     $currColNo = 8;
/*  1021 */ 
/*  1022 */                     return Sk.builtin.none.none$;
/*  1023 */                     $blk = 1; /* allowing case fallthrough */
/*  1024 */                 case 1:
/*  1025 */                     /* --- end of if --- */
/*  1026 */                     return Sk.builtin.none.none$;
/*  1027 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1028 */                 case 2:
/*  1029 */                     /* --- next branch of if --- */
/*  1030 */                     //
/*  1031 */                     // line 77:
/*  1032 */                     //         depth -= 1
/*  1033 */                     //         ^
/*  1034 */                     //
/*  1035 */                     $currLineNo = 77;
/*  1036 */                     $currColNo = 8;
/*  1037 */ 
/*  1038 */                     if (depth === undefined) {
/*  1039 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1040 */                     }
/*  1041 */                     var $inplbinop153 = Sk.abstr.numberInplaceBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1042 */                     depth = $inplbinop153;
/*  1043 */                     //
/*  1044 */                     // line 78:
/*  1045 */                     //         node.left = Node()
/*  1046 */                     //         ^
/*  1047 */                     //
/*  1048 */                     $currLineNo = 78;
/*  1049 */                     $currColNo = 8;
/*  1050 */ 
/*  1051 */                     var $loadgbl154 = Sk.misceval.loadname('Node', $gbl);
/*  1052 */                     $ret;
/*  1053 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl154);
/*  1054 */                     $blk = 5; /* allowing case fallthrough */
/*  1055 */                 case 5:
/*  1056 */                     /* --- function return or resume suspension --- */
/*  1057 */                     if ($ret && $ret.$isSuspension) {
/*  1058 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 78, 20);
/*  1059 */                     }
/*  1060 */                     var $call155 = $ret;
/*  1061 */                     //
/*  1062 */                     // line 78:
/*  1063 */                     //         node.left = Node()
/*  1064 */                     //                     ^
/*  1065 */                     //
/*  1066 */                     $currLineNo = 78;
/*  1067 */                     $currColNo = 20;
/*  1068 */ 
/*  1069 */                     if (node === undefined) {
/*  1070 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1071 */                     }
/*  1072 */                     $ret = Sk.abstr.sattr(node, 'left', $call155, true);
/*  1073 */                     $blk = 6; /* allowing case fallthrough */
/*  1074 */                 case 6:
/*  1075 */                     /* --- function return or resume suspension --- */
/*  1076 */                     if ($ret && $ret.$isSuspension) {
/*  1077 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 78, 8);
/*  1078 */                     }
/*  1079 */                     //
/*  1080 */                     // line 79:
/*  1081 */                     //         node.right = Node()
/*  1082 */                     //         ^
/*  1083 */                     //
/*  1084 */                     $currLineNo = 79;
/*  1085 */                     $currColNo = 8;
/*  1086 */ 
/*  1087 */                     var $loadgbl156 = Sk.misceval.loadname('Node', $gbl);
/*  1088 */                     $ret;
/*  1089 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl156);
/*  1090 */                     $blk = 7; /* allowing case fallthrough */
/*  1091 */                 case 7:
/*  1092 */                     /* --- function return or resume suspension --- */
/*  1093 */                     if ($ret && $ret.$isSuspension) {
/*  1094 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 79, 21);
/*  1095 */                     }
/*  1096 */                     var $call157 = $ret;
/*  1097 */                     //
/*  1098 */                     // line 79:
/*  1099 */                     //         node.right = Node()
/*  1100 */                     //                      ^
/*  1101 */                     //
/*  1102 */                     $currLineNo = 79;
/*  1103 */                     $currColNo = 21;
/*  1104 */ 
/*  1105 */                     if (node === undefined) {
/*  1106 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1107 */                     }
/*  1108 */                     $ret = Sk.abstr.sattr(node, 'right', $call157, true);
/*  1109 */                     $blk = 8; /* allowing case fallthrough */
/*  1110 */                 case 8:
/*  1111 */                     /* --- function return or resume suspension --- */
/*  1112 */                     if ($ret && $ret.$isSuspension) {
/*  1113 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 79, 8);
/*  1114 */                     }
/*  1115 */                     //
/*  1116 */                     // line 80:
/*  1117 */                     //         populate(depth, node.left)
/*  1118 */                     //         ^
/*  1119 */                     //
/*  1120 */                     $currLineNo = 80;
/*  1121 */                     $currColNo = 8;
/*  1122 */ 
/*  1123 */                     var $loadgbl158 = Sk.misceval.loadname('populate', $gbl);
/*  1124 */                     if (depth === undefined) {
/*  1125 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1126 */                     }
/*  1127 */                     if (node === undefined) {
/*  1128 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1129 */                     }
/*  1130 */                     $ret = Sk.abstr.gattr(node, 'left', true);
/*  1131 */                     $blk = 9; /* allowing case fallthrough */
/*  1132 */                 case 9:
/*  1133 */                     /* --- function return or resume suspension --- */
/*  1134 */                     if ($ret && $ret.$isSuspension) {
/*  1135 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 80, 24);
/*  1136 */                     }
/*  1137 */                     var $lattr159 = $ret;
/*  1138 */                     $ret;
/*  1139 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl158, depth, $lattr159);
/*  1140 */                     $blk = 10; /* allowing case fallthrough */
/*  1141 */                 case 10:
/*  1142 */                     /* --- function return or resume suspension --- */
/*  1143 */                     if ($ret && $ret.$isSuspension) {
/*  1144 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 80, 8);
/*  1145 */                     }
/*  1146 */                     var $call160 = $ret;
/*  1147 */                     //
/*  1148 */                     // line 80:
/*  1149 */                     //         populate(depth, node.left)
/*  1150 */                     //         ^
/*  1151 */                     //
/*  1152 */                     $currLineNo = 80;
/*  1153 */                     $currColNo = 8;
/*  1154 */ 
/*  1155 */ 
/*  1156 */                     //
/*  1157 */                     // line 81:
/*  1158 */                     //         populate(depth, node.right)
/*  1159 */                     //         ^
/*  1160 */                     //
/*  1161 */                     $currLineNo = 81;
/*  1162 */                     $currColNo = 8;
/*  1163 */ 
/*  1164 */                     var $loadgbl161 = Sk.misceval.loadname('populate', $gbl);
/*  1165 */                     if (depth === undefined) {
/*  1166 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1167 */                     }
/*  1168 */                     if (node === undefined) {
/*  1169 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1170 */                     }
/*  1171 */                     $ret = Sk.abstr.gattr(node, 'right', true);
/*  1172 */                     $blk = 11; /* allowing case fallthrough */
/*  1173 */                 case 11:
/*  1174 */                     /* --- function return or resume suspension --- */
/*  1175 */                     if ($ret && $ret.$isSuspension) {
/*  1176 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 81, 24);
/*  1177 */                     }
/*  1178 */                     var $lattr162 = $ret;
/*  1179 */                     $ret;
/*  1180 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl161, depth, $lattr162);
/*  1181 */                     $blk = 12; /* allowing case fallthrough */
/*  1182 */                 case 12:
/*  1183 */                     /* --- function return or resume suspension --- */
/*  1184 */                     if ($ret && $ret.$isSuspension) {
/*  1185 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 81, 8);
/*  1186 */                     }
/*  1187 */                     var $call163 = $ret;
/*  1188 */                     //
/*  1189 */                     // line 81:
/*  1190 */                     //         populate(depth, node.right)
/*  1191 */                     //         ^
/*  1192 */                     //
/*  1193 */                     $currLineNo = 81;
/*  1194 */                     $currColNo = 8;
/*  1195 */ 
/*  1196 */                     $blk = 1; /* jump */
/*  1197 */                     continue;
/*  1198 */                 }
/*  1199 */             } catch (err) {
/*  1200 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1201 */                     err = new Sk.builtin.ExternalError(err);
/*  1202 */                 }
/*  1203 */                 err.traceback.push({
/*  1204 */                     lineno: $currLineNo,
/*  1205 */                     colno: $currColNo,
/*  1206 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1207 */                 });
/*  1208 */                 if ($exc.length > 0) {
/*  1209 */                     $err = err;
/*  1210 */                     $blk = $exc.pop();
/*  1211 */                     continue;
/*  1212 */                 } else {
/*  1213 */                     throw err;
/*  1214 */                 }
/*  1215 */             }
/*  1216 */         }
/*  1217 */     });
/*  1218 */     var $scope165 = (function $make_tree166$(depth) {
/*  1219 */         var depth, depth, depth, depth, $compareres168, $loadgbl171, $loadgbl173, $loadgbl174, $binop175, $loadgbl173, $loadgbl174, $binop175, $call176, $loadgbl177, $binop178, $loadgbl173, $loadgbl174, $binop175, $call176, $loadgbl177, $binop178, $call179;
/*  1220 */         var $wakeFromSuspension = function() {
/*  1221 */             var susp = $scope165.$wakingSuspension;
/*  1222 */             delete $scope165.$wakingSuspension;
/*  1223 */             $blk = susp.$blk;
/*  1224 */             $loc = susp.$loc;
/*  1225 */             $gbl = susp.$gbl;
/*  1226 */             $exc = susp.$exc;
/*  1227 */             $err = susp.$err;
/*  1228 */             $postfinally = susp.$postfinally;
/*  1229 */             $currLineNo = susp.$lineno;
/*  1230 */             $currColNo = susp.$colno;
/*  1231 */             Sk.lastYield = Date.now();
/*  1232 */             depth = susp.$tmps.depth;
/*  1233 */             $compareres168 = susp.$tmps.$compareres168;
/*  1234 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*  1235 */             $loadgbl173 = susp.$tmps.$loadgbl173;
/*  1236 */             $loadgbl174 = susp.$tmps.$loadgbl174;
/*  1237 */             $binop175 = susp.$tmps.$binop175;
/*  1238 */             $call176 = susp.$tmps.$call176;
/*  1239 */             $loadgbl177 = susp.$tmps.$loadgbl177;
/*  1240 */             $binop178 = susp.$tmps.$binop178;
/*  1241 */             $call179 = susp.$tmps.$call179;
/*  1242 */             try {
/*  1243 */                 $ret = susp.child.resume();
/*  1244 */             } catch (err) {
/*  1245 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1246 */                     err = new Sk.builtin.ExternalError(err);
/*  1247 */                 }
/*  1248 */                 err.traceback.push({
/*  1249 */                     lineno: $currLineNo,
/*  1250 */                     colno: $currColNo,
/*  1251 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1252 */                 });
/*  1253 */                 if ($exc.length > 0) {
/*  1254 */                     $err = err;
/*  1255 */                     $blk = $exc.pop();
/*  1256 */                 } else {
/*  1257 */                     throw err;
/*  1258 */                 }
/*  1259 */             }
/*  1260 */         };
/*  1261 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1262 */             var susp = new Sk.misceval.Suspension();
/*  1263 */             susp.child = $child;
/*  1264 */             susp.resume = function() {
/*  1265 */                 $scope165.$wakingSuspension = susp;
/*  1266 */                 return $scope165();
/*  1267 */             };
/*  1268 */             susp.data = susp.child.data;
/*  1269 */             susp.$blk = $blk;
/*  1270 */             susp.$loc = $loc;
/*  1271 */             susp.$gbl = $gbl;
/*  1272 */             susp.$exc = $exc;
/*  1273 */             susp.$err = $err;
/*  1274 */             susp.$postfinally = $postfinally;
/*  1275 */             susp.$filename = $filename;
/*  1276 */             susp.$lineno = $lineno;
/*  1277 */             susp.$colno = $colno;
/*  1278 */             susp.optional = susp.child.optional;
/*  1279 */             susp.$tmps = {
/*  1280 */                 "depth": depth,
/*  1281 */                 "$compareres168": $compareres168,
/*  1282 */                 "$loadgbl171": $loadgbl171,
/*  1283 */                 "$loadgbl173": $loadgbl173,
/*  1284 */                 "$loadgbl174": $loadgbl174,
/*  1285 */                 "$binop175": $binop175,
/*  1286 */                 "$call176": $call176,
/*  1287 */                 "$loadgbl177": $loadgbl177,
/*  1288 */                 "$binop178": $binop178,
/*  1289 */                 "$call179": $call179
/*  1290 */             };
/*  1291 */             return susp;
/*  1292 */         };
/*  1293 */         var $blk = 0,
/*  1294 */             $exc = [],
/*  1295 */             $loc = {},
/*  1296 */             $gbl = this,
/*  1297 */             $err = undefined,
/*  1298 */             $ret = undefined,
/*  1299 */             $postfinally = undefined,
/*  1300 */             $currLineNo = undefined,
/*  1301 */             $currColNo = undefined;
/*  1302 */         if ($scope165.$wakingSuspension !== undefined) {
/*  1303 */             $wakeFromSuspension();
/*  1304 */         } else {
/*  1305 */             Sk.builtin.pyCheckArgs("make_tree", arguments, 1, 1, false, false);
/*  1306 */         }
/*  1307 */         while (true) {
/*  1308 */             try {
/*  1309 */                 switch ($blk) {
/*  1310 */                 case 0:
/*  1311 */                     /* --- codeobj entry --- */
/*  1312 */                     if (depth === undefined) {
/*  1313 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1314 */                     }
/*  1315 */ 
/*  1316 */                     //
/*  1317 */                     // line 84:
/*  1318 */                     //     "Build tree bottom-up"
/*  1319 */                     //     ^
/*  1320 */                     //
/*  1321 */                     $currLineNo = 84;
/*  1322 */                     $currColNo = 4;
/*  1323 */ 
/*  1324 */                     var $str167 = new Sk.builtins['str']('Build tree bottom-up');
/*  1325 */                     //
/*  1326 */                     // line 85:
/*  1327 */                     //     if depth <= 0:
/*  1328 */                     //     ^
/*  1329 */                     //
/*  1330 */                     $currLineNo = 85;
/*  1331 */                     $currColNo = 4;
/*  1332 */ 
/*  1333 */                     if (depth === undefined) {
/*  1334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1335 */                     }
/*  1336 */                     var $compareres168 = null;
/*  1337 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(depth, new Sk.builtin.int_(0), 'LtE', true));
/*  1338 */                     $blk = 4; /* allowing case fallthrough */
/*  1339 */                 case 4:
/*  1340 */                     /* --- function return or resume suspension --- */
/*  1341 */                     if ($ret && $ret.$isSuspension) {
/*  1342 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 85, 7);
/*  1343 */                     }
/*  1344 */                     $compareres168 = $ret;
/*  1345 */                     var $jfalse169 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1346 */                     if ($jfalse169) { /*test failed */
/*  1347 */                         $blk = 3;
/*  1348 */                         continue;
/*  1349 */                     }
/*  1350 */                     $blk = 3; /* allowing case fallthrough */
/*  1351 */                 case 3:
/*  1352 */                     /* --- done --- */
/*  1353 */                     var $jfalse170 = ($compareres168 === false || !Sk.misceval.isTrue($compareres168));
/*  1354 */                     if ($jfalse170) { /*test failed */
/*  1355 */                         $blk = 2;
/*  1356 */                         continue;
/*  1357 */                     }
/*  1358 */                     //
/*  1359 */                     // line 86:
/*  1360 */                     //         return Node()
/*  1361 */                     //         ^
/*  1362 */                     //
/*  1363 */                     $currLineNo = 86;
/*  1364 */                     $currColNo = 8;
/*  1365 */ 
/*  1366 */                     var $loadgbl171 = Sk.misceval.loadname('Node', $gbl);
/*  1367 */                     $ret;
/*  1368 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171);
/*  1369 */                     $blk = 5; /* allowing case fallthrough */
/*  1370 */                 case 5:
/*  1371 */                     /* --- function return or resume suspension --- */
/*  1372 */                     if ($ret && $ret.$isSuspension) {
/*  1373 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 86, 15);
/*  1374 */                     }
/*  1375 */                     var $call172 = $ret;
/*  1376 */                     //
/*  1377 */                     // line 86:
/*  1378 */                     //         return Node()
/*  1379 */                     //                ^
/*  1380 */                     //
/*  1381 */                     $currLineNo = 86;
/*  1382 */                     $currColNo = 15;
/*  1383 */ 
/*  1384 */                     return $call172;
/*  1385 */                     $blk = 1; /* allowing case fallthrough */
/*  1386 */                 case 1:
/*  1387 */                     /* --- end of if --- */
/*  1388 */                     return Sk.builtin.none.none$;
/*  1389 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1390 */                 case 2:
/*  1391 */                     /* --- next branch of if --- */
/*  1392 */                     //
/*  1393 */                     // line 88:
/*  1394 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1395 */                     //         ^
/*  1396 */                     //
/*  1397 */                     $currLineNo = 88;
/*  1398 */                     $currColNo = 8;
/*  1399 */ 
/*  1400 */                     var $loadgbl173 = Sk.misceval.loadname('Node', $gbl);
/*  1401 */                     var $loadgbl174 = Sk.misceval.loadname('make_tree', $gbl);
/*  1402 */                     if (depth === undefined) {
/*  1403 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1404 */                     }
/*  1405 */                     var $binop175 = Sk.abstr.numberBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1406 */                     $ret;
/*  1407 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl174, $binop175);
/*  1408 */                     $blk = 6; /* allowing case fallthrough */
/*  1409 */                 case 6:
/*  1410 */                     /* --- function return or resume suspension --- */
/*  1411 */                     if ($ret && $ret.$isSuspension) {
/*  1412 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 20);
/*  1413 */                     }
/*  1414 */                     var $call176 = $ret;
/*  1415 */                     //
/*  1416 */                     // line 88:
/*  1417 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1418 */                     //                     ^
/*  1419 */                     //
/*  1420 */                     $currLineNo = 88;
/*  1421 */                     $currColNo = 20;
/*  1422 */ 
/*  1423 */                     var $loadgbl177 = Sk.misceval.loadname('make_tree', $gbl);
/*  1424 */                     if (depth === undefined) {
/*  1425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1426 */                     }
/*  1427 */                     var $binop178 = Sk.abstr.numberBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1428 */                     $ret;
/*  1429 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl177, $binop178);
/*  1430 */                     $blk = 7; /* allowing case fallthrough */
/*  1431 */                 case 7:
/*  1432 */                     /* --- function return or resume suspension --- */
/*  1433 */                     if ($ret && $ret.$isSuspension) {
/*  1434 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 40);
/*  1435 */                     }
/*  1436 */                     var $call179 = $ret;
/*  1437 */                     //
/*  1438 */                     // line 88:
/*  1439 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1440 */                     //                                         ^
/*  1441 */                     //
/*  1442 */                     $currLineNo = 88;
/*  1443 */                     $currColNo = 40;
/*  1444 */ 
/*  1445 */                     $ret;
/*  1446 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl173, $call176, $call179);
/*  1447 */                     $blk = 8; /* allowing case fallthrough */
/*  1448 */                 case 8:
/*  1449 */                     /* --- function return or resume suspension --- */
/*  1450 */                     if ($ret && $ret.$isSuspension) {
/*  1451 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 15);
/*  1452 */                     }
/*  1453 */                     var $call180 = $ret;
/*  1454 */                     //
/*  1455 */                     // line 88:
/*  1456 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1457 */                     //                ^
/*  1458 */                     //
/*  1459 */                     $currLineNo = 88;
/*  1460 */                     $currColNo = 15;
/*  1461 */ 
/*  1462 */                     return $call180;
/*  1463 */                     $blk = 1; /* jump */
/*  1464 */                     continue;
/*  1465 */                 }
/*  1466 */             } catch (err) {
/*  1467 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1468 */                     err = new Sk.builtin.ExternalError(err);
/*  1469 */                 }
/*  1470 */                 err.traceback.push({
/*  1471 */                     lineno: $currLineNo,
/*  1472 */                     colno: $currColNo,
/*  1473 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1474 */                 });
/*  1475 */                 if ($exc.length > 0) {
/*  1476 */                     $err = err;
/*  1477 */                     $blk = $exc.pop();
/*  1478 */                     continue;
/*  1479 */                 } else {
/*  1480 */                     throw err;
/*  1481 */                 }
/*  1482 */             }
/*  1483 */         }
/*  1484 */     });
/*  1485 */     var $scope182 = (function $print_diagnostics183$() {
/*  1486 */         var $blk = 0,
/*  1487 */             $exc = [],
/*  1488 */             $loc = {},
/*  1489 */             $gbl = this,
/*  1490 */             $err = undefined,
/*  1491 */             $ret = undefined,
/*  1492 */             $postfinally = undefined,
/*  1493 */             $currLineNo = undefined,
/*  1494 */             $currColNo = undefined;
/*  1495 */         if ($scope182.$wakingSuspension !== undefined) {
/*  1496 */             $wakeFromSuspension();
/*  1497 */         } else {
/*  1498 */             Sk.builtin.pyCheckArgs("print_diagnostics", arguments, 0, 0, false, false);
/*  1499 */         }
/*  1500 */         while (true) {
/*  1501 */             try {
/*  1502 */                 switch ($blk) {
/*  1503 */                 case 0:
/*  1504 */                     /* --- codeobj entry --- */
/*  1505 */                     //
/*  1506 */                     // line 91:
/*  1507 */                     //     "ought to #pass #print free/total memory"
/*  1508 */                     //     ^
/*  1509 */                     //
/*  1510 */                     $currLineNo = 91;
/*  1511 */                     $currColNo = 4;
/*  1512 */ 
/*  1513 */                     var $str184 = new Sk.builtins['str']('ought to #pass #print free/total memory');
/*  1514 */                     //
/*  1515 */                     // line 92:
/*  1516 */                     //     pass
/*  1517 */                     //     ^
/*  1518 */                     //
/*  1519 */                     $currLineNo = 92;
/*  1520 */                     $currColNo = 4;
/*  1521 */ 
/*  1522 */                     return Sk.builtin.none.none$;
/*  1523 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1524 */                 }
/*  1525 */             } catch (err) {
/*  1526 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1527 */                     err = new Sk.builtin.ExternalError(err);
/*  1528 */                 }
/*  1529 */                 err.traceback.push({
/*  1530 */                     lineno: $currLineNo,
/*  1531 */                     colno: $currColNo,
/*  1532 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1533 */                 });
/*  1534 */                 if ($exc.length > 0) {
/*  1535 */                     $err = err;
/*  1536 */                     $blk = $exc.pop();
/*  1537 */                     continue;
/*  1538 */                 } else {
/*  1539 */                     throw err;
/*  1540 */                 }
/*  1541 */             }
/*  1542 */         }
/*  1543 */     });
/*  1544 */     var $scope186 = (function $time_construction187$(depth, debug) {
/*  1545 */         var i, niters, t_finish, t_start, temp_tree; /* locals */
/*  1546 */         var debug, debug, debug, debug, depth, depth, depth, depth, depth, i, i, niters, niters, niters, niters, t_finish, t_finish, t_start, t_start, temp_tree, temp_tree, temp_tree, temp_tree, temp_tree, $loadgbl188, $loadgbl195, $loadgbl195, $lattr196, $loadgbl198, $loadgbl199, $loadgbl198, $loadgbl199, $call200, $iter202, $loadgbl198, $loadgbl199, $call200, $call201, $iter202, $loadgbl204, $loadgbl206, $loadgbl208, $loadgbl208, $lattr209, $loadgbl212, $loadgbl212, $lattr213, $loadgbl215, $loadgbl216, $loadgbl215, $loadgbl216, $call217, $iter219, $loadgbl215, $loadgbl216, $call217, $call218, $iter219, $loadgbl221, $loadgbl223, $loadgbl223, $lattr224;
/*  1547 */         var $wakeFromSuspension = function() {
/*  1548 */             var susp = $scope186.$wakingSuspension;
/*  1549 */             delete $scope186.$wakingSuspension;
/*  1550 */             $blk = susp.$blk;
/*  1551 */             $loc = susp.$loc;
/*  1552 */             $gbl = susp.$gbl;
/*  1553 */             $exc = susp.$exc;
/*  1554 */             $err = susp.$err;
/*  1555 */             $postfinally = susp.$postfinally;
/*  1556 */             $currLineNo = susp.$lineno;
/*  1557 */             $currColNo = susp.$colno;
/*  1558 */             Sk.lastYield = Date.now();
/*  1559 */             debug = susp.$tmps.debug;
/*  1560 */             depth = susp.$tmps.depth;
/*  1561 */             i = susp.$tmps.i;
/*  1562 */             niters = susp.$tmps.niters;
/*  1563 */             t_finish = susp.$tmps.t_finish;
/*  1564 */             t_start = susp.$tmps.t_start;
/*  1565 */             temp_tree = susp.$tmps.temp_tree;
/*  1566 */             $loadgbl188 = susp.$tmps.$loadgbl188;
/*  1567 */             $loadgbl195 = susp.$tmps.$loadgbl195;
/*  1568 */             $lattr196 = susp.$tmps.$lattr196;
/*  1569 */             $loadgbl198 = susp.$tmps.$loadgbl198;
/*  1570 */             $loadgbl199 = susp.$tmps.$loadgbl199;
/*  1571 */             $call200 = susp.$tmps.$call200;
/*  1572 */             $iter202 = susp.$tmps.$iter202;
/*  1573 */             $call201 = susp.$tmps.$call201;
/*  1574 */             $loadgbl204 = susp.$tmps.$loadgbl204;
/*  1575 */             $loadgbl206 = susp.$tmps.$loadgbl206;
/*  1576 */             $loadgbl208 = susp.$tmps.$loadgbl208;
/*  1577 */             $lattr209 = susp.$tmps.$lattr209;
/*  1578 */             $loadgbl212 = susp.$tmps.$loadgbl212;
/*  1579 */             $lattr213 = susp.$tmps.$lattr213;
/*  1580 */             $loadgbl215 = susp.$tmps.$loadgbl215;
/*  1581 */             $loadgbl216 = susp.$tmps.$loadgbl216;
/*  1582 */             $call217 = susp.$tmps.$call217;
/*  1583 */             $iter219 = susp.$tmps.$iter219;
/*  1584 */             $call218 = susp.$tmps.$call218;
/*  1585 */             $loadgbl221 = susp.$tmps.$loadgbl221;
/*  1586 */             $loadgbl223 = susp.$tmps.$loadgbl223;
/*  1587 */             $lattr224 = susp.$tmps.$lattr224;
/*  1588 */             try {
/*  1589 */                 $ret = susp.child.resume();
/*  1590 */             } catch (err) {
/*  1591 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1592 */                     err = new Sk.builtin.ExternalError(err);
/*  1593 */                 }
/*  1594 */                 err.traceback.push({
/*  1595 */                     lineno: $currLineNo,
/*  1596 */                     colno: $currColNo,
/*  1597 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1598 */                 });
/*  1599 */                 if ($exc.length > 0) {
/*  1600 */                     $err = err;
/*  1601 */                     $blk = $exc.pop();
/*  1602 */                 } else {
/*  1603 */                     throw err;
/*  1604 */                 }
/*  1605 */             }
/*  1606 */         };
/*  1607 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1608 */             var susp = new Sk.misceval.Suspension();
/*  1609 */             susp.child = $child;
/*  1610 */             susp.resume = function() {
/*  1611 */                 $scope186.$wakingSuspension = susp;
/*  1612 */                 return $scope186();
/*  1613 */             };
/*  1614 */             susp.data = susp.child.data;
/*  1615 */             susp.$blk = $blk;
/*  1616 */             susp.$loc = $loc;
/*  1617 */             susp.$gbl = $gbl;
/*  1618 */             susp.$exc = $exc;
/*  1619 */             susp.$err = $err;
/*  1620 */             susp.$postfinally = $postfinally;
/*  1621 */             susp.$filename = $filename;
/*  1622 */             susp.$lineno = $lineno;
/*  1623 */             susp.$colno = $colno;
/*  1624 */             susp.optional = susp.child.optional;
/*  1625 */             susp.$tmps = {
/*  1626 */                 "debug": debug,
/*  1627 */                 "depth": depth,
/*  1628 */                 "i": i,
/*  1629 */                 "niters": niters,
/*  1630 */                 "t_finish": t_finish,
/*  1631 */                 "t_start": t_start,
/*  1632 */                 "temp_tree": temp_tree,
/*  1633 */                 "$loadgbl188": $loadgbl188,
/*  1634 */                 "$loadgbl195": $loadgbl195,
/*  1635 */                 "$lattr196": $lattr196,
/*  1636 */                 "$loadgbl198": $loadgbl198,
/*  1637 */                 "$loadgbl199": $loadgbl199,
/*  1638 */                 "$call200": $call200,
/*  1639 */                 "$iter202": $iter202,
/*  1640 */                 "$call201": $call201,
/*  1641 */                 "$loadgbl204": $loadgbl204,
/*  1642 */                 "$loadgbl206": $loadgbl206,
/*  1643 */                 "$loadgbl208": $loadgbl208,
/*  1644 */                 "$lattr209": $lattr209,
/*  1645 */                 "$loadgbl212": $loadgbl212,
/*  1646 */                 "$lattr213": $lattr213,
/*  1647 */                 "$loadgbl215": $loadgbl215,
/*  1648 */                 "$loadgbl216": $loadgbl216,
/*  1649 */                 "$call217": $call217,
/*  1650 */                 "$iter219": $iter219,
/*  1651 */                 "$call218": $call218,
/*  1652 */                 "$loadgbl221": $loadgbl221,
/*  1653 */                 "$loadgbl223": $loadgbl223,
/*  1654 */                 "$lattr224": $lattr224
/*  1655 */             };
/*  1656 */             return susp;
/*  1657 */         };
/*  1658 */         var $blk = 0,
/*  1659 */             $exc = [],
/*  1660 */             $loc = {},
/*  1661 */             $gbl = this,
/*  1662 */             $err = undefined,
/*  1663 */             $ret = undefined,
/*  1664 */             $postfinally = undefined,
/*  1665 */             $currLineNo = undefined,
/*  1666 */             $currColNo = undefined;
/*  1667 */         if ($scope186.$wakingSuspension !== undefined) {
/*  1668 */             $wakeFromSuspension();
/*  1669 */         } else {
/*  1670 */             if (debug === undefined) debug = $scope186.$defaults[0];
/*  1671 */             Sk.builtin.pyCheckArgs("time_construction", arguments, 1, 2, false, false);
/*  1672 */         }
/*  1673 */         while (true) {
/*  1674 */             try {
/*  1675 */                 switch ($blk) {
/*  1676 */                 case 0:
/*  1677 */                     /* --- codeobj entry --- */
/*  1678 */                     if (depth === undefined) {
/*  1679 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1680 */                     }
/*  1681 */                     if (debug === undefined) {
/*  1682 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  1683 */                     }
/*  1684 */                     if (debug === undefined) {
/*  1685 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  1686 */                     }
/*  1687 */ 
/*  1688 */                     //
/*  1689 */                     // line 95:
/*  1690 */                     //     niters = num_iters(depth)
/*  1691 */                     //     ^
/*  1692 */                     //
/*  1693 */                     $currLineNo = 95;
/*  1694 */                     $currColNo = 4;
/*  1695 */ 
/*  1696 */                     var $loadgbl188 = Sk.misceval.loadname('num_iters', $gbl);
/*  1697 */                     if (depth === undefined) {
/*  1698 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1699 */                     }
/*  1700 */                     $ret;
/*  1701 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl188, depth);
/*  1702 */                     $blk = 1; /* allowing case fallthrough */
/*  1703 */                 case 1:
/*  1704 */                     /* --- function return or resume suspension --- */
/*  1705 */                     if ($ret && $ret.$isSuspension) {
/*  1706 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 95, 13);
/*  1707 */                     }
/*  1708 */                     var $call189 = $ret;
/*  1709 */                     //
/*  1710 */                     // line 95:
/*  1711 */                     //     niters = num_iters(depth)
/*  1712 */                     //              ^
/*  1713 */                     //
/*  1714 */                     $currLineNo = 95;
/*  1715 */                     $currColNo = 13;
/*  1716 */ 
/*  1717 */                     niters = $call189;
/*  1718 */                     //
/*  1719 */                     // line 96:
/*  1720 */                     //     print("Creating %d trees of depth %d" % (niters, depth))
/*  1721 */                     //     ^
/*  1722 */                     //
/*  1723 */                     $currLineNo = 96;
/*  1724 */                     $currColNo = 4;
/*  1725 */ 
/*  1726 */                     var $str190 = new Sk.builtins['str']('Creating %d trees of depth %d');
/*  1727 */                     if (niters === undefined) {
/*  1728 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  1729 */                     }
/*  1730 */                     var $elem191 = niters;
/*  1731 */                     if (depth === undefined) {
/*  1732 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1733 */                     }
/*  1734 */                     var $elem192 = depth;
/*  1735 */                     var $loadtuple193 = new Sk.builtins['tuple']([$elem191, $elem192]);
/*  1736 */                     var $binop194 = Sk.abstr.numberBinOp($str190, $loadtuple193, 'Mod');
/*  1737 */                     Sk.misceval.print_(new Sk.builtins['str']($binop194).v);
/*  1738 */                     Sk.misceval.print_("\n");
/*  1739 */                     //
/*  1740 */                     // line 97:
/*  1741 */                     //     t_start = time.time()
/*  1742 */                     //     ^
/*  1743 */                     //
/*  1744 */                     $currLineNo = 97;
/*  1745 */                     $currColNo = 4;
/*  1746 */ 
/*  1747 */                     var $loadgbl195 = Sk.misceval.loadname('time', $gbl);
/*  1748 */                     $ret = Sk.abstr.gattr($loadgbl195, 'time', true);
/*  1749 */                     $blk = 2; /* allowing case fallthrough */
/*  1750 */                 case 2:
/*  1751 */                     /* --- function return or resume suspension --- */
/*  1752 */                     if ($ret && $ret.$isSuspension) {
/*  1753 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 97, 14);
/*  1754 */                     }
/*  1755 */                     var $lattr196 = $ret;
/*  1756 */                     $ret;
/*  1757 */                     $ret = Sk.misceval.callsimOrSuspend($lattr196);
/*  1758 */                     $blk = 3; /* allowing case fallthrough */
/*  1759 */                 case 3:
/*  1760 */                     /* --- function return or resume suspension --- */
/*  1761 */                     if ($ret && $ret.$isSuspension) {
/*  1762 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 97, 14);
/*  1763 */                     }
/*  1764 */                     var $call197 = $ret;
/*  1765 */                     //
/*  1766 */                     // line 97:
/*  1767 */                     //     t_start = time.time()
/*  1768 */                     //               ^
/*  1769 */                     //
/*  1770 */                     $currLineNo = 97;
/*  1771 */                     $currColNo = 14;
/*  1772 */ 
/*  1773 */                     t_start = $call197;
/*  1774 */                     //
/*  1775 */                     // line 98:
/*  1776 */                     //     for i in range(int(niters)):
/*  1777 */                     //     ^
/*  1778 */                     //
/*  1779 */                     $currLineNo = 98;
/*  1780 */                     $currColNo = 4;
/*  1781 */ 
/*  1782 */                     var $loadgbl198 = Sk.misceval.loadname('range', $gbl);
/*  1783 */                     var $loadgbl199 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  1784 */                     if (niters === undefined) {
/*  1785 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  1786 */                     }
/*  1787 */                     $ret;
/*  1788 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl199, niters);
/*  1789 */                     $blk = 7; /* allowing case fallthrough */
/*  1790 */                 case 7:
/*  1791 */                     /* --- function return or resume suspension --- */
/*  1792 */                     if ($ret && $ret.$isSuspension) {
/*  1793 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 19);
/*  1794 */                     }
/*  1795 */                     var $call200 = $ret;
/*  1796 */                     //
/*  1797 */                     // line 98:
/*  1798 */                     //     for i in range(int(niters)):
/*  1799 */                     //                    ^
/*  1800 */                     //
/*  1801 */                     $currLineNo = 98;
/*  1802 */                     $currColNo = 19;
/*  1803 */ 
/*  1804 */                     $ret;
/*  1805 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl198, $call200);
/*  1806 */                     $blk = 8; /* allowing case fallthrough */
/*  1807 */                 case 8:
/*  1808 */                     /* --- function return or resume suspension --- */
/*  1809 */                     if ($ret && $ret.$isSuspension) {
/*  1810 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 13);
/*  1811 */                     }
/*  1812 */                     var $call201 = $ret;
/*  1813 */                     //
/*  1814 */                     // line 98:
/*  1815 */                     //     for i in range(int(niters)):
/*  1816 */                     //              ^
/*  1817 */                     //
/*  1818 */                     $currLineNo = 98;
/*  1819 */                     $currColNo = 13;
/*  1820 */ 
/*  1821 */                     var $iter202 = Sk.abstr.iter($call201);
/*  1822 */                     $blk = 4; /* allowing case fallthrough */
/*  1823 */                 case 4:
/*  1824 */                     /* --- for start --- */
/*  1825 */                     $ret = Sk.abstr.iternext($iter202, true);
/*  1826 */                     $blk = 9; /* allowing case fallthrough */
/*  1827 */                 case 9:
/*  1828 */                     /* --- function return or resume suspension --- */
/*  1829 */                     if ($ret && $ret.$isSuspension) {
/*  1830 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 4);
/*  1831 */                     }
/*  1832 */                     var $next203 = $ret;
/*  1833 */                     if ($next203 === undefined) {
/*  1834 */                         $blk = 5;
/*  1835 */                         continue;
/*  1836 */                     }
/*  1837 */                     i = $next203;
/*  1838 */                     //
/*  1839 */                     // line 99:
/*  1840 */                     //         temp_tree = Node()
/*  1841 */                     //         ^
/*  1842 */                     //
/*  1843 */                     $currLineNo = 99;
/*  1844 */                     $currColNo = 8;
/*  1845 */ 
/*  1846 */                     var $loadgbl204 = Sk.misceval.loadname('Node', $gbl);
/*  1847 */                     $ret;
/*  1848 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl204);
/*  1849 */                     $blk = 10; /* allowing case fallthrough */
/*  1850 */                 case 10:
/*  1851 */                     /* --- function return or resume suspension --- */
/*  1852 */                     if ($ret && $ret.$isSuspension) {
/*  1853 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 99, 20);
/*  1854 */                     }
/*  1855 */                     var $call205 = $ret;
/*  1856 */                     //
/*  1857 */                     // line 99:
/*  1858 */                     //         temp_tree = Node()
/*  1859 */                     //                     ^
/*  1860 */                     //
/*  1861 */                     $currLineNo = 99;
/*  1862 */                     $currColNo = 20;
/*  1863 */ 
/*  1864 */                     temp_tree = $call205;
/*  1865 */                     //
/*  1866 */                     // line 100:
/*  1867 */                     //         populate(depth, temp_tree)
/*  1868 */                     //         ^
/*  1869 */                     //
/*  1870 */                     $currLineNo = 100;
/*  1871 */                     $currColNo = 8;
/*  1872 */ 
/*  1873 */                     var $loadgbl206 = Sk.misceval.loadname('populate', $gbl);
/*  1874 */                     if (depth === undefined) {
/*  1875 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1876 */                     }
/*  1877 */                     if (temp_tree === undefined) {
/*  1878 */                         throw new Sk.builtin.UnboundLocalError('local variable \'temp_tree\' referenced before assignment');
/*  1879 */                     }
/*  1880 */                     $ret;
/*  1881 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl206, depth, temp_tree);
/*  1882 */                     $blk = 11; /* allowing case fallthrough */
/*  1883 */                 case 11:
/*  1884 */                     /* --- function return or resume suspension --- */
/*  1885 */                     if ($ret && $ret.$isSuspension) {
/*  1886 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 100, 8);
/*  1887 */                     }
/*  1888 */                     var $call207 = $ret;
/*  1889 */                     //
/*  1890 */                     // line 100:
/*  1891 */                     //         populate(depth, temp_tree)
/*  1892 */                     //         ^
/*  1893 */                     //
/*  1894 */                     $currLineNo = 100;
/*  1895 */                     $currColNo = 8;
/*  1896 */ 
/*  1897 */ 
/*  1898 */                     //
/*  1899 */                     // line 101:
/*  1900 */                     //         temp_tree = None
/*  1901 */                     //         ^
/*  1902 */                     //
/*  1903 */                     $currLineNo = 101;
/*  1904 */                     $currColNo = 8;
/*  1905 */ 
/*  1906 */                     temp_tree = Sk.builtin.none.none$;
/*  1907 */                     $blk = 4; /* jump */
/*  1908 */                     continue;
/*  1909 */                 case 5:
/*  1910 */                     /* --- for cleanup --- */
/*  1911 */                     $blk = 6; /* allowing case fallthrough */
/*  1912 */                 case 6:
/*  1913 */                     /* --- for end --- */
/*  1914 */                     //
/*  1915 */                     // line 102:
/*  1916 */                     //     t_finish = time.time()
/*  1917 */                     //     ^
/*  1918 */                     //
/*  1919 */                     $currLineNo = 102;
/*  1920 */                     $currColNo = 4;
/*  1921 */ 
/*  1922 */                     var $loadgbl208 = Sk.misceval.loadname('time', $gbl);
/*  1923 */                     $ret = Sk.abstr.gattr($loadgbl208, 'time', true);
/*  1924 */                     $blk = 12; /* allowing case fallthrough */
/*  1925 */                 case 12:
/*  1926 */                     /* --- function return or resume suspension --- */
/*  1927 */                     if ($ret && $ret.$isSuspension) {
/*  1928 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 102, 15);
/*  1929 */                     }
/*  1930 */                     var $lattr209 = $ret;
/*  1931 */                     $ret;
/*  1932 */                     $ret = Sk.misceval.callsimOrSuspend($lattr209);
/*  1933 */                     $blk = 13; /* allowing case fallthrough */
/*  1934 */                 case 13:
/*  1935 */                     /* --- function return or resume suspension --- */
/*  1936 */                     if ($ret && $ret.$isSuspension) {
/*  1937 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 102, 15);
/*  1938 */                     }
/*  1939 */                     var $call210 = $ret;
/*  1940 */                     //
/*  1941 */                     // line 102:
/*  1942 */                     //     t_finish = time.time()
/*  1943 */                     //                ^
/*  1944 */                     //
/*  1945 */                     $currLineNo = 102;
/*  1946 */                     $currColNo = 15;
/*  1947 */ 
/*  1948 */                     t_finish = $call210;
/*  1949 */                     //
/*  1950 */                     // line 103:
/*  1951 */                     //     if debug:
/*  1952 */                     //     ^
/*  1953 */                     //
/*  1954 */                     $currLineNo = 103;
/*  1955 */                     $currColNo = 4;
/*  1956 */ 
/*  1957 */                     if (debug === undefined) {
/*  1958 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  1959 */                     }
/*  1960 */                     var $jfalse211 = (debug === false || !Sk.misceval.isTrue(debug));
/*  1961 */                     if ($jfalse211) { /*test failed */
/*  1962 */                         $blk = 14;
/*  1963 */                         continue;
/*  1964 */                     }
/*  1965 */                     //
/*  1966 */                     // line 104:
/*  1967 */                     //         pass #pass #print("\tTop down constrution took %f ms" % ((t_finish-t_start)*1000.))
/*  1968 */                     //         ^
/*  1969 */                     //
/*  1970 */                     $currLineNo = 104;
/*  1971 */                     $currColNo = 8;
/*  1972 */ 
/*  1973 */                     $blk = 14; /* allowing case fallthrough */
/*  1974 */                 case 14:
/*  1975 */                     /* --- end of if --- */
/*  1976 */                     //
/*  1977 */                     // line 105:
/*  1978 */                     //     t_start = time.time()
/*  1979 */                     //     ^
/*  1980 */                     //
/*  1981 */                     $currLineNo = 105;
/*  1982 */                     $currColNo = 4;
/*  1983 */ 
/*  1984 */                     var $loadgbl212 = Sk.misceval.loadname('time', $gbl);
/*  1985 */                     $ret = Sk.abstr.gattr($loadgbl212, 'time', true);
/*  1986 */                     $blk = 15; /* allowing case fallthrough */
/*  1987 */                 case 15:
/*  1988 */                     /* --- function return or resume suspension --- */
/*  1989 */                     if ($ret && $ret.$isSuspension) {
/*  1990 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 105, 14);
/*  1991 */                     }
/*  1992 */                     var $lattr213 = $ret;
/*  1993 */                     $ret;
/*  1994 */                     $ret = Sk.misceval.callsimOrSuspend($lattr213);
/*  1995 */                     $blk = 16; /* allowing case fallthrough */
/*  1996 */                 case 16:
/*  1997 */                     /* --- function return or resume suspension --- */
/*  1998 */                     if ($ret && $ret.$isSuspension) {
/*  1999 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 105, 14);
/*  2000 */                     }
/*  2001 */                     var $call214 = $ret;
/*  2002 */                     //
/*  2003 */                     // line 105:
/*  2004 */                     //     t_start = time.time()
/*  2005 */                     //               ^
/*  2006 */                     //
/*  2007 */                     $currLineNo = 105;
/*  2008 */                     $currColNo = 14;
/*  2009 */ 
/*  2010 */                     t_start = $call214;
/*  2011 */                     //
/*  2012 */                     // line 106:
/*  2013 */                     //     for i in range(int(niters)):
/*  2014 */                     //     ^
/*  2015 */                     //
/*  2016 */                     $currLineNo = 106;
/*  2017 */                     $currColNo = 4;
/*  2018 */ 
/*  2019 */                     var $loadgbl215 = Sk.misceval.loadname('range', $gbl);
/*  2020 */                     var $loadgbl216 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  2021 */                     if (niters === undefined) {
/*  2022 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  2023 */                     }
/*  2024 */                     $ret;
/*  2025 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl216, niters);
/*  2026 */                     $blk = 20; /* allowing case fallthrough */
/*  2027 */                 case 20:
/*  2028 */                     /* --- function return or resume suspension --- */
/*  2029 */                     if ($ret && $ret.$isSuspension) {
/*  2030 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 19);
/*  2031 */                     }
/*  2032 */                     var $call217 = $ret;
/*  2033 */                     //
/*  2034 */                     // line 106:
/*  2035 */                     //     for i in range(int(niters)):
/*  2036 */                     //                    ^
/*  2037 */                     //
/*  2038 */                     $currLineNo = 106;
/*  2039 */                     $currColNo = 19;
/*  2040 */ 
/*  2041 */                     $ret;
/*  2042 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl215, $call217);
/*  2043 */                     $blk = 21; /* allowing case fallthrough */
/*  2044 */                 case 21:
/*  2045 */                     /* --- function return or resume suspension --- */
/*  2046 */                     if ($ret && $ret.$isSuspension) {
/*  2047 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 13);
/*  2048 */                     }
/*  2049 */                     var $call218 = $ret;
/*  2050 */                     //
/*  2051 */                     // line 106:
/*  2052 */                     //     for i in range(int(niters)):
/*  2053 */                     //              ^
/*  2054 */                     //
/*  2055 */                     $currLineNo = 106;
/*  2056 */                     $currColNo = 13;
/*  2057 */ 
/*  2058 */                     var $iter219 = Sk.abstr.iter($call218);
/*  2059 */                     $blk = 17; /* allowing case fallthrough */
/*  2060 */                 case 17:
/*  2061 */                     /* --- for start --- */
/*  2062 */                     $ret = Sk.abstr.iternext($iter219, true);
/*  2063 */                     $blk = 22; /* allowing case fallthrough */
/*  2064 */                 case 22:
/*  2065 */                     /* --- function return or resume suspension --- */
/*  2066 */                     if ($ret && $ret.$isSuspension) {
/*  2067 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 4);
/*  2068 */                     }
/*  2069 */                     var $next220 = $ret;
/*  2070 */                     if ($next220 === undefined) {
/*  2071 */                         $blk = 18;
/*  2072 */                         continue;
/*  2073 */                     }
/*  2074 */                     i = $next220;
/*  2075 */                     //
/*  2076 */                     // line 107:
/*  2077 */                     //         temp_tree = make_tree(depth)
/*  2078 */                     //         ^
/*  2079 */                     //
/*  2080 */                     $currLineNo = 107;
/*  2081 */                     $currColNo = 8;
/*  2082 */ 
/*  2083 */                     var $loadgbl221 = Sk.misceval.loadname('make_tree', $gbl);
/*  2084 */                     if (depth === undefined) {
/*  2085 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  2086 */                     }
/*  2087 */                     $ret;
/*  2088 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl221, depth);
/*  2089 */                     $blk = 23; /* allowing case fallthrough */
/*  2090 */                 case 23:
/*  2091 */                     /* --- function return or resume suspension --- */
/*  2092 */                     if ($ret && $ret.$isSuspension) {
/*  2093 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 107, 20);
/*  2094 */                     }
/*  2095 */                     var $call222 = $ret;
/*  2096 */                     //
/*  2097 */                     // line 107:
/*  2098 */                     //         temp_tree = make_tree(depth)
/*  2099 */                     //                     ^
/*  2100 */                     //
/*  2101 */                     $currLineNo = 107;
/*  2102 */                     $currColNo = 20;
/*  2103 */ 
/*  2104 */                     temp_tree = $call222;
/*  2105 */                     //
/*  2106 */                     // line 108:
/*  2107 */                     //         temp_tree = None
/*  2108 */                     //         ^
/*  2109 */                     //
/*  2110 */                     $currLineNo = 108;
/*  2111 */                     $currColNo = 8;
/*  2112 */ 
/*  2113 */                     temp_tree = Sk.builtin.none.none$;
/*  2114 */                     $blk = 17; /* jump */
/*  2115 */                     continue;
/*  2116 */                 case 18:
/*  2117 */                     /* --- for cleanup --- */
/*  2118 */                     $blk = 19; /* allowing case fallthrough */
/*  2119 */                 case 19:
/*  2120 */                     /* --- for end --- */
/*  2121 */                     //
/*  2122 */                     // line 109:
/*  2123 */                     //     t_finish = time.time()
/*  2124 */                     //     ^
/*  2125 */                     //
/*  2126 */                     $currLineNo = 109;
/*  2127 */                     $currColNo = 4;
/*  2128 */ 
/*  2129 */                     var $loadgbl223 = Sk.misceval.loadname('time', $gbl);
/*  2130 */                     $ret = Sk.abstr.gattr($loadgbl223, 'time', true);
/*  2131 */                     $blk = 24; /* allowing case fallthrough */
/*  2132 */                 case 24:
/*  2133 */                     /* --- function return or resume suspension --- */
/*  2134 */                     if ($ret && $ret.$isSuspension) {
/*  2135 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 109, 15);
/*  2136 */                     }
/*  2137 */                     var $lattr224 = $ret;
/*  2138 */                     $ret;
/*  2139 */                     $ret = Sk.misceval.callsimOrSuspend($lattr224);
/*  2140 */                     $blk = 25; /* allowing case fallthrough */
/*  2141 */                 case 25:
/*  2142 */                     /* --- function return or resume suspension --- */
/*  2143 */                     if ($ret && $ret.$isSuspension) {
/*  2144 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 109, 15);
/*  2145 */                     }
/*  2146 */                     var $call225 = $ret;
/*  2147 */                     //
/*  2148 */                     // line 109:
/*  2149 */                     //     t_finish = time.time()
/*  2150 */                     //                ^
/*  2151 */                     //
/*  2152 */                     $currLineNo = 109;
/*  2153 */                     $currColNo = 15;
/*  2154 */ 
/*  2155 */                     t_finish = $call225;
/*  2156 */                     //
/*  2157 */                     // line 110:
/*  2158 */                     //     if debug:
/*  2159 */                     //     ^
/*  2160 */                     //
/*  2161 */                     $currLineNo = 110;
/*  2162 */                     $currColNo = 4;
/*  2163 */ 
/*  2164 */                     if (debug === undefined) {
/*  2165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2166 */                     }
/*  2167 */                     var $jfalse226 = (debug === false || !Sk.misceval.isTrue(debug));
/*  2168 */                     if ($jfalse226) { /*test failed */
/*  2169 */                         $blk = 26;
/*  2170 */                         continue;
/*  2171 */                     }
/*  2172 */                     //
/*  2173 */                     // line 111:
/*  2174 */                     //         pass #pass #print("\tBottom up constrution took %f ms" % ((t_finish-t_start)*1000.))
/*  2175 */                     //         ^
/*  2176 */                     //
/*  2177 */                     $currLineNo = 111;
/*  2178 */                     $currColNo = 8;
/*  2179 */ 
/*  2180 */                     $blk = 26; /* allowing case fallthrough */
/*  2181 */                 case 26:
/*  2182 */                     /* --- end of if --- */
/*  2183 */                     return Sk.builtin.none.none$;
/*  2184 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2185 */                 }
/*  2186 */             } catch (err) {
/*  2187 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2188 */                     err = new Sk.builtin.ExternalError(err);
/*  2189 */                 }
/*  2190 */                 err.traceback.push({
/*  2191 */                     lineno: $currLineNo,
/*  2192 */                     colno: $currColNo,
/*  2193 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2194 */                 });
/*  2195 */                 if ($exc.length > 0) {
/*  2196 */                     $err = err;
/*  2197 */                     $blk = $exc.pop();
/*  2198 */                     continue;
/*  2199 */                 } else {
/*  2200 */                     throw err;
/*  2201 */                 }
/*  2202 */             }
/*  2203 */         }
/*  2204 */     });
/*  2205 */     var $scope235 = (function $time_constructions236$(depths, debug) {
/*  2206 */         var d; /* locals */
/*  2207 */         var d, d, debug, debug, debug, depths, depths, $iter237, $iter237, $loadgbl239;
/*  2208 */         var $wakeFromSuspension = function() {
/*  2209 */             var susp = $scope235.$wakingSuspension;
/*  2210 */             delete $scope235.$wakingSuspension;
/*  2211 */             $blk = susp.$blk;
/*  2212 */             $loc = susp.$loc;
/*  2213 */             $gbl = susp.$gbl;
/*  2214 */             $exc = susp.$exc;
/*  2215 */             $err = susp.$err;
/*  2216 */             $postfinally = susp.$postfinally;
/*  2217 */             $currLineNo = susp.$lineno;
/*  2218 */             $currColNo = susp.$colno;
/*  2219 */             Sk.lastYield = Date.now();
/*  2220 */             d = susp.$tmps.d;
/*  2221 */             debug = susp.$tmps.debug;
/*  2222 */             depths = susp.$tmps.depths;
/*  2223 */             $iter237 = susp.$tmps.$iter237;
/*  2224 */             $loadgbl239 = susp.$tmps.$loadgbl239;
/*  2225 */             try {
/*  2226 */                 $ret = susp.child.resume();
/*  2227 */             } catch (err) {
/*  2228 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2229 */                     err = new Sk.builtin.ExternalError(err);
/*  2230 */                 }
/*  2231 */                 err.traceback.push({
/*  2232 */                     lineno: $currLineNo,
/*  2233 */                     colno: $currColNo,
/*  2234 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2235 */                 });
/*  2236 */                 if ($exc.length > 0) {
/*  2237 */                     $err = err;
/*  2238 */                     $blk = $exc.pop();
/*  2239 */                 } else {
/*  2240 */                     throw err;
/*  2241 */                 }
/*  2242 */             }
/*  2243 */         };
/*  2244 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2245 */             var susp = new Sk.misceval.Suspension();
/*  2246 */             susp.child = $child;
/*  2247 */             susp.resume = function() {
/*  2248 */                 $scope235.$wakingSuspension = susp;
/*  2249 */                 return $scope235();
/*  2250 */             };
/*  2251 */             susp.data = susp.child.data;
/*  2252 */             susp.$blk = $blk;
/*  2253 */             susp.$loc = $loc;
/*  2254 */             susp.$gbl = $gbl;
/*  2255 */             susp.$exc = $exc;
/*  2256 */             susp.$err = $err;
/*  2257 */             susp.$postfinally = $postfinally;
/*  2258 */             susp.$filename = $filename;
/*  2259 */             susp.$lineno = $lineno;
/*  2260 */             susp.$colno = $colno;
/*  2261 */             susp.optional = susp.child.optional;
/*  2262 */             susp.$tmps = {
/*  2263 */                 "d": d,
/*  2264 */                 "debug": debug,
/*  2265 */                 "depths": depths,
/*  2266 */                 "$iter237": $iter237,
/*  2267 */                 "$loadgbl239": $loadgbl239
/*  2268 */             };
/*  2269 */             return susp;
/*  2270 */         };
/*  2271 */         var $blk = 0,
/*  2272 */             $exc = [],
/*  2273 */             $loc = {},
/*  2274 */             $gbl = this,
/*  2275 */             $err = undefined,
/*  2276 */             $ret = undefined,
/*  2277 */             $postfinally = undefined,
/*  2278 */             $currLineNo = undefined,
/*  2279 */             $currColNo = undefined;
/*  2280 */         if ($scope235.$wakingSuspension !== undefined) {
/*  2281 */             $wakeFromSuspension();
/*  2282 */         } else {
/*  2283 */             if (debug === undefined) debug = $scope235.$defaults[0];
/*  2284 */             Sk.builtin.pyCheckArgs("time_constructions", arguments, 1, 2, false, false);
/*  2285 */         }
/*  2286 */         while (true) {
/*  2287 */             try {
/*  2288 */                 switch ($blk) {
/*  2289 */                 case 0:
/*  2290 */                     /* --- codeobj entry --- */
/*  2291 */                     if (depths === undefined) {
/*  2292 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2293 */                     }
/*  2294 */                     if (debug === undefined) {
/*  2295 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2296 */                     }
/*  2297 */                     if (debug === undefined) {
/*  2298 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2299 */                     }
/*  2300 */ 
/*  2301 */                     //
/*  2302 */                     // line 116:
/*  2303 */                     //     for d in depths:
/*  2304 */                     //     ^
/*  2305 */                     //
/*  2306 */                     $currLineNo = 116;
/*  2307 */                     $currColNo = 4;
/*  2308 */ 
/*  2309 */                     if (depths === undefined) {
/*  2310 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2311 */                     }
/*  2312 */                     var $iter237 = Sk.abstr.iter(depths);
/*  2313 */                     $blk = 1; /* allowing case fallthrough */
/*  2314 */                 case 1:
/*  2315 */                     /* --- for start --- */
/*  2316 */                     $ret = Sk.abstr.iternext($iter237, true);
/*  2317 */                     $blk = 4; /* allowing case fallthrough */
/*  2318 */                 case 4:
/*  2319 */                     /* --- function return or resume suspension --- */
/*  2320 */                     if ($ret && $ret.$isSuspension) {
/*  2321 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 116, 4);
/*  2322 */                     }
/*  2323 */                     var $next238 = $ret;
/*  2324 */                     if ($next238 === undefined) {
/*  2325 */                         $blk = 2;
/*  2326 */                         continue;
/*  2327 */                     }
/*  2328 */                     d = $next238;
/*  2329 */                     //
/*  2330 */                     // line 117:
/*  2331 */                     //         time_construction(d, debug)
/*  2332 */                     //         ^
/*  2333 */                     //
/*  2334 */                     $currLineNo = 117;
/*  2335 */                     $currColNo = 8;
/*  2336 */ 
/*  2337 */                     var $loadgbl239 = Sk.misceval.loadname('time_construction', $gbl);
/*  2338 */                     if (d === undefined) {
/*  2339 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  2340 */                     }
/*  2341 */                     if (debug === undefined) {
/*  2342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2343 */                     }
/*  2344 */                     $ret;
/*  2345 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl239, d, debug);
/*  2346 */                     $blk = 5; /* allowing case fallthrough */
/*  2347 */                 case 5:
/*  2348 */                     /* --- function return or resume suspension --- */
/*  2349 */                     if ($ret && $ret.$isSuspension) {
/*  2350 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 117, 8);
/*  2351 */                     }
/*  2352 */                     var $call240 = $ret;
/*  2353 */                     //
/*  2354 */                     // line 117:
/*  2355 */                     //         time_construction(d, debug)
/*  2356 */                     //         ^
/*  2357 */                     //
/*  2358 */                     $currLineNo = 117;
/*  2359 */                     $currColNo = 8;
/*  2360 */ 
/*  2361 */                     $blk = 1; /* jump */
/*  2362 */                     continue;
/*  2363 */                 case 2:
/*  2364 */                     /* --- for cleanup --- */
/*  2365 */                     $blk = 3; /* allowing case fallthrough */
/*  2366 */                 case 3:
/*  2367 */                     /* --- for end --- */
/*  2368 */                     return Sk.builtin.none.none$;
/*  2369 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2370 */                 }
/*  2371 */             } catch (err) {
/*  2372 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2373 */                     err = new Sk.builtin.ExternalError(err);
/*  2374 */                 }
/*  2375 */                 err.traceback.push({
/*  2376 */                     lineno: $currLineNo,
/*  2377 */                     colno: $currColNo,
/*  2378 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2379 */                 });
/*  2380 */                 if ($exc.length > 0) {
/*  2381 */                     $err = err;
/*  2382 */                     $blk = $exc.pop();
/*  2383 */                     continue;
/*  2384 */                 } else {
/*  2385 */                     throw err;
/*  2386 */                 }
/*  2387 */             }
/*  2388 */         }
/*  2389 */     });
/*  2390 */     var $scope242 = (function $time_parallel_constructions243$(depths, nthreads, debug) {
/*  2391 */         var $blk = 0,
/*  2392 */             $exc = [],
/*  2393 */             $loc = {},
/*  2394 */             $gbl = this,
/*  2395 */             $err = undefined,
/*  2396 */             $ret = undefined,
/*  2397 */             $postfinally = undefined,
/*  2398 */             $currLineNo = undefined,
/*  2399 */             $currColNo = undefined;
/*  2400 */         if ($scope242.$wakingSuspension !== undefined) {
/*  2401 */             $wakeFromSuspension();
/*  2402 */         } else {
/*  2403 */             if (debug === undefined) debug = $scope242.$defaults[0];
/*  2404 */             Sk.builtin.pyCheckArgs("time_parallel_constructions", arguments, 2, 3, false, false);
/*  2405 */         }
/*  2406 */         while (true) {
/*  2407 */             try {
/*  2408 */                 switch ($blk) {
/*  2409 */                 case 0:
/*  2410 */                     /* --- codeobj entry --- */
/*  2411 */                     if (depths === undefined) {
/*  2412 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2413 */                     }
/*  2414 */                     if (nthreads === undefined) {
/*  2415 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nthreads\' referenced before assignment');
/*  2416 */                     }
/*  2417 */                     if (debug === undefined) {
/*  2418 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2419 */                     }
/*  2420 */                     if (debug === undefined) {
/*  2421 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2422 */                     }
/*  2423 */ 
/*  2424 */                     //
/*  2425 */                     // line 120:
/*  2426 */                     //     raise "no thrads!"
/*  2427 */                     //     ^
/*  2428 */                     //
/*  2429 */                     $currLineNo = 120;
/*  2430 */                     $currColNo = 4;
/*  2431 */ 
/*  2432 */                     var $str244 = new Sk.builtins['str']('no thrads!');
/*  2433 */                     var $err245 = $str244;
/*  2434 */                     if ($err245 instanceof Sk.builtin.type) {
/*  2435 */                         throw Sk.misceval.callsim($err245);
/*  2436 */                     } else if (typeof($err245) === 'function') {
/*  2437 */                         throw $err245();
/*  2438 */                     } else {
/*  2439 */                         throw $err245;
/*  2440 */                     }
/*  2441 */                     return Sk.builtin.none.none$;
/*  2442 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2443 */                 }
/*  2444 */             } catch (err) {
/*  2445 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2446 */                     err = new Sk.builtin.ExternalError(err);
/*  2447 */                 }
/*  2448 */                 err.traceback.push({
/*  2449 */                     lineno: $currLineNo,
/*  2450 */                     colno: $currColNo,
/*  2451 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2452 */                 });
/*  2453 */                 if ($exc.length > 0) {
/*  2454 */                     $err = err;
/*  2455 */                     $blk = $exc.pop();
/*  2456 */                     continue;
/*  2457 */                 } else {
/*  2458 */                     throw err;
/*  2459 */                 }
/*  2460 */             }
/*  2461 */         }
/*  2462 */     });
/*  2463 */     var $scope248 = (function $main249$(numruns, depths, threads, debug) {
/*  2464 */         var array, i, long_lived_tree, t_finish, t_start, temp_tree, times; /* locals */
/*  2465 */         var array, array, array, debug, debug, debug, debug, debug, debug, depths, depths, depths, depths, i, i, i, i, i, i, i, long_lived_tree, long_lived_tree, long_lived_tree, numruns, numruns, t_finish, t_finish, t_start, t_start, temp_tree, temp_tree, threads, threads, threads, threads, times, times, times, $loadgbl251, $iter253, $loadgbl251, $call252, $iter253, $loadgbl256, $loadgbl256, $lattr257, $loadgbl259, $loadgbl260, $loadgbl265, $loadgbl267, $loadgbl268, $compareres277, $loadgbl278, $binop279, $binop282, $loadgbl285, $loadgbl287, $compareres289, $compareres289, $jfalse290, $boolopsucc291, $jtrue292, $compareres289, $jfalse290, $boolopsucc291, $jtrue292, $lsubscr293, $compareres294, $binop295, $loadgbl301, $loadgbl301, $lattr302, $loadgbl304, $lattr307, $binop308;
/*  2466 */         var $wakeFromSuspension = function() {
/*  2467 */             var susp = $scope248.$wakingSuspension;
/*  2468 */             delete $scope248.$wakingSuspension;
/*  2469 */             $blk = susp.$blk;
/*  2470 */             $loc = susp.$loc;
/*  2471 */             $gbl = susp.$gbl;
/*  2472 */             $exc = susp.$exc;
/*  2473 */             $err = susp.$err;
/*  2474 */             $postfinally = susp.$postfinally;
/*  2475 */             $currLineNo = susp.$lineno;
/*  2476 */             $currColNo = susp.$colno;
/*  2477 */             Sk.lastYield = Date.now();
/*  2478 */             array = susp.$tmps.array;
/*  2479 */             debug = susp.$tmps.debug;
/*  2480 */             depths = susp.$tmps.depths;
/*  2481 */             i = susp.$tmps.i;
/*  2482 */             long_lived_tree = susp.$tmps.long_lived_tree;
/*  2483 */             numruns = susp.$tmps.numruns;
/*  2484 */             t_finish = susp.$tmps.t_finish;
/*  2485 */             t_start = susp.$tmps.t_start;
/*  2486 */             temp_tree = susp.$tmps.temp_tree;
/*  2487 */             threads = susp.$tmps.threads;
/*  2488 */             times = susp.$tmps.times;
/*  2489 */             $loadgbl251 = susp.$tmps.$loadgbl251;
/*  2490 */             $iter253 = susp.$tmps.$iter253;
/*  2491 */             $call252 = susp.$tmps.$call252;
/*  2492 */             $loadgbl256 = susp.$tmps.$loadgbl256;
/*  2493 */             $lattr257 = susp.$tmps.$lattr257;
/*  2494 */             $loadgbl259 = susp.$tmps.$loadgbl259;
/*  2495 */             $loadgbl260 = susp.$tmps.$loadgbl260;
/*  2496 */             $loadgbl265 = susp.$tmps.$loadgbl265;
/*  2497 */             $loadgbl267 = susp.$tmps.$loadgbl267;
/*  2498 */             $loadgbl268 = susp.$tmps.$loadgbl268;
/*  2499 */             $compareres277 = susp.$tmps.$compareres277;
/*  2500 */             $loadgbl278 = susp.$tmps.$loadgbl278;
/*  2501 */             $binop279 = susp.$tmps.$binop279;
/*  2502 */             $binop282 = susp.$tmps.$binop282;
/*  2503 */             $loadgbl285 = susp.$tmps.$loadgbl285;
/*  2504 */             $loadgbl287 = susp.$tmps.$loadgbl287;
/*  2505 */             $compareres289 = susp.$tmps.$compareres289;
/*  2506 */             $jfalse290 = susp.$tmps.$jfalse290;
/*  2507 */             $boolopsucc291 = susp.$tmps.$boolopsucc291;
/*  2508 */             $jtrue292 = susp.$tmps.$jtrue292;
/*  2509 */             $lsubscr293 = susp.$tmps.$lsubscr293;
/*  2510 */             $compareres294 = susp.$tmps.$compareres294;
/*  2511 */             $binop295 = susp.$tmps.$binop295;
/*  2512 */             $loadgbl301 = susp.$tmps.$loadgbl301;
/*  2513 */             $lattr302 = susp.$tmps.$lattr302;
/*  2514 */             $loadgbl304 = susp.$tmps.$loadgbl304;
/*  2515 */             $lattr307 = susp.$tmps.$lattr307;
/*  2516 */             $binop308 = susp.$tmps.$binop308;
/*  2517 */             try {
/*  2518 */                 $ret = susp.child.resume();
/*  2519 */             } catch (err) {
/*  2520 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2521 */                     err = new Sk.builtin.ExternalError(err);
/*  2522 */                 }
/*  2523 */                 err.traceback.push({
/*  2524 */                     lineno: $currLineNo,
/*  2525 */                     colno: $currColNo,
/*  2526 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2527 */                 });
/*  2528 */                 if ($exc.length > 0) {
/*  2529 */                     $err = err;
/*  2530 */                     $blk = $exc.pop();
/*  2531 */                 } else {
/*  2532 */                     throw err;
/*  2533 */                 }
/*  2534 */             }
/*  2535 */         };
/*  2536 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2537 */             var susp = new Sk.misceval.Suspension();
/*  2538 */             susp.child = $child;
/*  2539 */             susp.resume = function() {
/*  2540 */                 $scope248.$wakingSuspension = susp;
/*  2541 */                 return $scope248();
/*  2542 */             };
/*  2543 */             susp.data = susp.child.data;
/*  2544 */             susp.$blk = $blk;
/*  2545 */             susp.$loc = $loc;
/*  2546 */             susp.$gbl = $gbl;
/*  2547 */             susp.$exc = $exc;
/*  2548 */             susp.$err = $err;
/*  2549 */             susp.$postfinally = $postfinally;
/*  2550 */             susp.$filename = $filename;
/*  2551 */             susp.$lineno = $lineno;
/*  2552 */             susp.$colno = $colno;
/*  2553 */             susp.optional = susp.child.optional;
/*  2554 */             susp.$tmps = {
/*  2555 */                 "array": array,
/*  2556 */                 "debug": debug,
/*  2557 */                 "depths": depths,
/*  2558 */                 "i": i,
/*  2559 */                 "long_lived_tree": long_lived_tree,
/*  2560 */                 "numruns": numruns,
/*  2561 */                 "t_finish": t_finish,
/*  2562 */                 "t_start": t_start,
/*  2563 */                 "temp_tree": temp_tree,
/*  2564 */                 "threads": threads,
/*  2565 */                 "times": times,
/*  2566 */                 "$loadgbl251": $loadgbl251,
/*  2567 */                 "$iter253": $iter253,
/*  2568 */                 "$call252": $call252,
/*  2569 */                 "$loadgbl256": $loadgbl256,
/*  2570 */                 "$lattr257": $lattr257,
/*  2571 */                 "$loadgbl259": $loadgbl259,
/*  2572 */                 "$loadgbl260": $loadgbl260,
/*  2573 */                 "$loadgbl265": $loadgbl265,
/*  2574 */                 "$loadgbl267": $loadgbl267,
/*  2575 */                 "$loadgbl268": $loadgbl268,
/*  2576 */                 "$compareres277": $compareres277,
/*  2577 */                 "$loadgbl278": $loadgbl278,
/*  2578 */                 "$binop279": $binop279,
/*  2579 */                 "$binop282": $binop282,
/*  2580 */                 "$loadgbl285": $loadgbl285,
/*  2581 */                 "$loadgbl287": $loadgbl287,
/*  2582 */                 "$compareres289": $compareres289,
/*  2583 */                 "$jfalse290": $jfalse290,
/*  2584 */                 "$boolopsucc291": $boolopsucc291,
/*  2585 */                 "$jtrue292": $jtrue292,
/*  2586 */                 "$lsubscr293": $lsubscr293,
/*  2587 */                 "$compareres294": $compareres294,
/*  2588 */                 "$binop295": $binop295,
/*  2589 */                 "$loadgbl301": $loadgbl301,
/*  2590 */                 "$lattr302": $lattr302,
/*  2591 */                 "$loadgbl304": $loadgbl304,
/*  2592 */                 "$lattr307": $lattr307,
/*  2593 */                 "$binop308": $binop308
/*  2594 */             };
/*  2595 */             return susp;
/*  2596 */         };
/*  2597 */         var $blk = 0,
/*  2598 */             $exc = [],
/*  2599 */             $loc = {},
/*  2600 */             $gbl = this,
/*  2601 */             $err = undefined,
/*  2602 */             $ret = undefined,
/*  2603 */             $postfinally = undefined,
/*  2604 */             $currLineNo = undefined,
/*  2605 */             $currColNo = undefined;
/*  2606 */         if ($scope248.$wakingSuspension !== undefined) {
/*  2607 */             $wakeFromSuspension();
/*  2608 */         } else {
/*  2609 */             if (depths === undefined) depths = $scope248.$defaults[0];
/*  2610 */             if (threads === undefined) threads = $scope248.$defaults[1];
/*  2611 */             if (debug === undefined) debug = $scope248.$defaults[2];
/*  2612 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 4, false, false);
/*  2613 */         }
/*  2614 */         while (true) {
/*  2615 */             try {
/*  2616 */                 switch ($blk) {
/*  2617 */                 case 0:
/*  2618 */                     /* --- codeobj entry --- */
/*  2619 */                     if (numruns === undefined) {
/*  2620 */                         throw new Sk.builtin.UnboundLocalError('local variable \'numruns\' referenced before assignment');
/*  2621 */                     }
/*  2622 */                     if (depths === undefined) {
/*  2623 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2624 */                     }
/*  2625 */                     if (threads === undefined) {
/*  2626 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  2627 */                     }
/*  2628 */                     if (debug === undefined) {
/*  2629 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2630 */                     }
/*  2631 */                     if (depths === undefined) {
/*  2632 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2633 */                     }
/*  2634 */                     if (threads === undefined) {
/*  2635 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  2636 */                     }
/*  2637 */                     if (debug === undefined) {
/*  2638 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2639 */                     }
/*  2640 */ 
/*  2641 */                     //
/*  2642 */                     // line 123:
/*  2643 */                     //     times = []
/*  2644 */                     //     ^
/*  2645 */                     //
/*  2646 */                     $currLineNo = 123;
/*  2647 */                     $currColNo = 4;
/*  2648 */ 
/*  2649 */                     var $loadlist250 = new Sk.builtins['list']([]);
/*  2650 */                     times = $loadlist250;
/*  2651 */                     //
/*  2652 */                     // line 124:
/*  2653 */                     //     for i in range(numruns):
/*  2654 */                     //     ^
/*  2655 */                     //
/*  2656 */                     $currLineNo = 124;
/*  2657 */                     $currColNo = 4;
/*  2658 */ 
/*  2659 */                     var $loadgbl251 = Sk.misceval.loadname('range', $gbl);
/*  2660 */                     if (numruns === undefined) {
/*  2661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'numruns\' referenced before assignment');
/*  2662 */                     }
/*  2663 */                     $ret;
/*  2664 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl251, numruns);
/*  2665 */                     $blk = 4; /* allowing case fallthrough */
/*  2666 */                 case 4:
/*  2667 */                     /* --- function return or resume suspension --- */
/*  2668 */                     if ($ret && $ret.$isSuspension) {
/*  2669 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 124, 13);
/*  2670 */                     }
/*  2671 */                     var $call252 = $ret;
/*  2672 */                     //
/*  2673 */                     // line 124:
/*  2674 */                     //     for i in range(numruns):
/*  2675 */                     //              ^
/*  2676 */                     //
/*  2677 */                     $currLineNo = 124;
/*  2678 */                     $currColNo = 13;
/*  2679 */ 
/*  2680 */                     var $iter253 = Sk.abstr.iter($call252);
/*  2681 */                     $blk = 1; /* allowing case fallthrough */
/*  2682 */                 case 1:
/*  2683 */                     /* --- for start --- */
/*  2684 */                     $ret = Sk.abstr.iternext($iter253, true);
/*  2685 */                     $blk = 5; /* allowing case fallthrough */
/*  2686 */                 case 5:
/*  2687 */                     /* --- function return or resume suspension --- */
/*  2688 */                     if ($ret && $ret.$isSuspension) {
/*  2689 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 124, 4);
/*  2690 */                     }
/*  2691 */                     var $next254 = $ret;
/*  2692 */                     if ($next254 === undefined) {
/*  2693 */                         $blk = 2;
/*  2694 */                         continue;
/*  2695 */                     }
/*  2696 */                     i = $next254;
/*  2697 */                     //
/*  2698 */                     // line 125:
/*  2699 */                     //         if debug:
/*  2700 */                     //         ^
/*  2701 */                     //
/*  2702 */                     $currLineNo = 125;
/*  2703 */                     $currColNo = 8;
/*  2704 */ 
/*  2705 */                     if (debug === undefined) {
/*  2706 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2707 */                     }
/*  2708 */                     var $jfalse255 = (debug === false || !Sk.misceval.isTrue(debug));
/*  2709 */                     if ($jfalse255) { /*test failed */
/*  2710 */                         $blk = 6;
/*  2711 */                         continue;
/*  2712 */                     }
/*  2713 */                     //
/*  2714 */                     // line 127:
/*  2715 */                     //             pass #pass #print(" Stretching memory with a binary tree of depth %d" % kStretchTreeDepth)
/*  2716 */                     //             ^
/*  2717 */                     //
/*  2718 */                     $currLineNo = 127;
/*  2719 */                     $currColNo = 12;
/*  2720 */ 
/*  2721 */                     $blk = 6; /* allowing case fallthrough */
/*  2722 */                 case 6:
/*  2723 */                     /* --- end of if --- */
/*  2724 */                     //
/*  2725 */                     // line 128:
/*  2726 */                     //         pass #print_diagnostics()
/*  2727 */                     //         ^
/*  2728 */                     //
/*  2729 */                     $currLineNo = 128;
/*  2730 */                     $currColNo = 8;
/*  2731 */ 
/*  2732 */ 
/*  2733 */                     //
/*  2734 */                     // line 129:
/*  2735 */                     //         t_start = time.time()
/*  2736 */                     //         ^
/*  2737 */                     //
/*  2738 */                     $currLineNo = 129;
/*  2739 */                     $currColNo = 8;
/*  2740 */ 
/*  2741 */                     var $loadgbl256 = Sk.misceval.loadname('time', $gbl);
/*  2742 */                     $ret = Sk.abstr.gattr($loadgbl256, 'time', true);
/*  2743 */                     $blk = 7; /* allowing case fallthrough */
/*  2744 */                 case 7:
/*  2745 */                     /* --- function return or resume suspension --- */
/*  2746 */                     if ($ret && $ret.$isSuspension) {
/*  2747 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 129, 18);
/*  2748 */                     }
/*  2749 */                     var $lattr257 = $ret;
/*  2750 */                     $ret;
/*  2751 */                     $ret = Sk.misceval.callsimOrSuspend($lattr257);
/*  2752 */                     $blk = 8; /* allowing case fallthrough */
/*  2753 */                 case 8:
/*  2754 */                     /* --- function return or resume suspension --- */
/*  2755 */                     if ($ret && $ret.$isSuspension) {
/*  2756 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 129, 18);
/*  2757 */                     }
/*  2758 */                     var $call258 = $ret;
/*  2759 */                     //
/*  2760 */                     // line 129:
/*  2761 */                     //         t_start = time.time()
/*  2762 */                     //                   ^
/*  2763 */                     //
/*  2764 */                     $currLineNo = 129;
/*  2765 */                     $currColNo = 18;
/*  2766 */ 
/*  2767 */                     t_start = $call258;
/*  2768 */                     //
/*  2769 */                     // line 130:
/*  2770 */                     //         temp_tree = make_tree(kStretchTreeDepth)
/*  2771 */                     //         ^
/*  2772 */                     //
/*  2773 */                     $currLineNo = 130;
/*  2774 */                     $currColNo = 8;
/*  2775 */ 
/*  2776 */                     var $loadgbl259 = Sk.misceval.loadname('make_tree', $gbl);
/*  2777 */                     var $loadgbl260 = Sk.misceval.loadname('kStretchTreeDepth', $gbl);
/*  2778 */                     $ret;
/*  2779 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl259, $loadgbl260);
/*  2780 */                     $blk = 9; /* allowing case fallthrough */
/*  2781 */                 case 9:
/*  2782 */                     /* --- function return or resume suspension --- */
/*  2783 */                     if ($ret && $ret.$isSuspension) {
/*  2784 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 130, 20);
/*  2785 */                     }
/*  2786 */                     var $call261 = $ret;
/*  2787 */                     //
/*  2788 */                     // line 130:
/*  2789 */                     //         temp_tree = make_tree(kStretchTreeDepth)
/*  2790 */                     //                     ^
/*  2791 */                     //
/*  2792 */                     $currLineNo = 130;
/*  2793 */                     $currColNo = 20;
/*  2794 */ 
/*  2795 */                     temp_tree = $call261;
/*  2796 */                     //
/*  2797 */                     // line 131:
/*  2798 */                     //         temp_tree = None
/*  2799 */                     //         ^
/*  2800 */                     //
/*  2801 */                     $currLineNo = 131;
/*  2802 */                     $currColNo = 8;
/*  2803 */ 
/*  2804 */                     temp_tree = Sk.builtin.none.none$;
/*  2805 */                     //
/*  2806 */                     // line 134:
/*  2807 */                     //         print(" Creating a long-lived binary tree of depth %d" % kLongLivedTreeDepth)
/*  2808 */                     //         ^
/*  2809 */                     //
/*  2810 */                     $currLineNo = 134;
/*  2811 */                     $currColNo = 8;
/*  2812 */ 
/*  2813 */                     var $str262 = new Sk.builtins['str'](' Creating a long-lived binary tree of depth %d');
/*  2814 */                     var $loadgbl263 = Sk.misceval.loadname('kLongLivedTreeDepth', $gbl);
/*  2815 */                     var $binop264 = Sk.abstr.numberBinOp($str262, $loadgbl263, 'Mod');
/*  2816 */                     Sk.misceval.print_(new Sk.builtins['str']($binop264).v);
/*  2817 */                     Sk.misceval.print_("\n");
/*  2818 */                     //
/*  2819 */                     // line 135:
/*  2820 */                     //         long_lived_tree = Node()
/*  2821 */                     //         ^
/*  2822 */                     //
/*  2823 */                     $currLineNo = 135;
/*  2824 */                     $currColNo = 8;
/*  2825 */ 
/*  2826 */                     var $loadgbl265 = Sk.misceval.loadname('Node', $gbl);
/*  2827 */                     $ret;
/*  2828 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl265);
/*  2829 */                     $blk = 10; /* allowing case fallthrough */
/*  2830 */                 case 10:
/*  2831 */                     /* --- function return or resume suspension --- */
/*  2832 */                     if ($ret && $ret.$isSuspension) {
/*  2833 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 135, 26);
/*  2834 */                     }
/*  2835 */                     var $call266 = $ret;
/*  2836 */                     //
/*  2837 */                     // line 135:
/*  2838 */                     //         long_lived_tree = Node()
/*  2839 */                     //                           ^
/*  2840 */                     //
/*  2841 */                     $currLineNo = 135;
/*  2842 */                     $currColNo = 26;
/*  2843 */ 
/*  2844 */                     long_lived_tree = $call266;
/*  2845 */                     //
/*  2846 */                     // line 136:
/*  2847 */                     //         populate(kLongLivedTreeDepth, long_lived_tree)
/*  2848 */                     //         ^
/*  2849 */                     //
/*  2850 */                     $currLineNo = 136;
/*  2851 */                     $currColNo = 8;
/*  2852 */ 
/*  2853 */                     var $loadgbl267 = Sk.misceval.loadname('populate', $gbl);
/*  2854 */                     var $loadgbl268 = Sk.misceval.loadname('kLongLivedTreeDepth', $gbl);
/*  2855 */                     if (long_lived_tree === undefined) {
/*  2856 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  2857 */                     }
/*  2858 */                     $ret;
/*  2859 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl267, $loadgbl268, long_lived_tree);
/*  2860 */                     $blk = 11; /* allowing case fallthrough */
/*  2861 */                 case 11:
/*  2862 */                     /* --- function return or resume suspension --- */
/*  2863 */                     if ($ret && $ret.$isSuspension) {
/*  2864 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 136, 8);
/*  2865 */                     }
/*  2866 */                     var $call269 = $ret;
/*  2867 */                     //
/*  2868 */                     // line 136:
/*  2869 */                     //         populate(kLongLivedTreeDepth, long_lived_tree)
/*  2870 */                     //         ^
/*  2871 */                     //
/*  2872 */                     $currLineNo = 136;
/*  2873 */                     $currColNo = 8;
/*  2874 */ 
/*  2875 */ 
/*  2876 */                     //
/*  2877 */                     // line 139:
/*  2878 */                     //         print(" Creating a long-lived array of %d doubles" % kArraySize)
/*  2879 */                     //         ^
/*  2880 */                     //
/*  2881 */                     $currLineNo = 139;
/*  2882 */                     $currColNo = 8;
/*  2883 */ 
/*  2884 */                     var $str270 = new Sk.builtins['str'](' Creating a long-lived array of %d doubles');
/*  2885 */                     var $loadgbl271 = Sk.misceval.loadname('kArraySize', $gbl);
/*  2886 */                     var $binop272 = Sk.abstr.numberBinOp($str270, $loadgbl271, 'Mod');
/*  2887 */                     Sk.misceval.print_(new Sk.builtins['str']($binop272).v);
/*  2888 */                     Sk.misceval.print_("\n");
/*  2889 */                     //
/*  2890 */                     // line 140:
/*  2891 */                     //         array = [0.0] * kArraySize
/*  2892 */                     //         ^
/*  2893 */                     //
/*  2894 */                     $currLineNo = 140;
/*  2895 */                     $currColNo = 8;
/*  2896 */ 
/*  2897 */                     var $elem273 = new Sk.builtin.float_(0);
/*  2898 */                     var $loadlist274 = new Sk.builtins['list']([$elem273]);
/*  2899 */                     var $loadgbl275 = Sk.misceval.loadname('kArraySize', $gbl);
/*  2900 */                     var $binop276 = Sk.abstr.numberBinOp($loadlist274, $loadgbl275, 'Mult');
/*  2901 */                     array = $binop276;
/*  2902 */                     //
/*  2903 */                     // line 141:
/*  2904 */                     //         i = 1
/*  2905 */                     //         ^
/*  2906 */                     //
/*  2907 */                     $currLineNo = 141;
/*  2908 */                     $currColNo = 8;
/*  2909 */ 
/*  2910 */                     i = new Sk.builtin.int_(1);
/*  2911 */                     //
/*  2912 */                     // line 142:
/*  2913 */                     //         while i < kArraySize/2:
/*  2914 */                     //         ^
/*  2915 */                     //
/*  2916 */                     $currLineNo = 142;
/*  2917 */                     $currColNo = 8;
/*  2918 */ 
/*  2919 */                     $blk = 12; /* allowing case fallthrough */
/*  2920 */                 case 12:
/*  2921 */                     /* --- while test --- */
/*  2922 */                     //
/*  2923 */                     // line 142:
/*  2924 */                     //         while i < kArraySize/2:
/*  2925 */                     //         ^
/*  2926 */                     //
/*  2927 */                     $currLineNo = 142;
/*  2928 */                     $currColNo = 8;
/*  2929 */ 
/*  2930 */                     if (i === undefined) {
/*  2931 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  2932 */                     }
/*  2933 */                     var $compareres277 = null;
/*  2934 */                     var $loadgbl278 = Sk.misceval.loadname('kArraySize', $gbl);
/*  2935 */                     var $binop279 = Sk.abstr.numberBinOp($loadgbl278, new Sk.builtin.int_(2), 'Div');
/*  2936 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(i, $binop279, 'Lt', true));
/*  2937 */                     $blk = 16; /* allowing case fallthrough */
/*  2938 */                 case 16:
/*  2939 */                     /* --- function return or resume suspension --- */
/*  2940 */                     if ($ret && $ret.$isSuspension) {
/*  2941 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 142, 14);
/*  2942 */                     }
/*  2943 */                     $compareres277 = $ret;
/*  2944 */                     var $jfalse280 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2945 */                     if ($jfalse280) { /*test failed */
/*  2946 */                         $blk = 15;
/*  2947 */                         continue;
/*  2948 */                     }
/*  2949 */                     $blk = 15; /* allowing case fallthrough */
/*  2950 */                 case 15:
/*  2951 */                     /* --- done --- */
/*  2952 */                     var $jfalse281 = ($compareres277 === false || !Sk.misceval.isTrue($compareres277));
/*  2953 */                     if ($jfalse281) { /*test failed */
/*  2954 */                         $blk = 13;
/*  2955 */                         continue;
/*  2956 */                     }
/*  2957 */                     $blk = 14; /* allowing case fallthrough */
/*  2958 */                 case 14:
/*  2959 */                     /* --- while body --- */
/*  2960 */                     //
/*  2961 */                     // line 143:
/*  2962 */                     //             array[i] = 1.0/i
/*  2963 */                     //             ^
/*  2964 */                     //
/*  2965 */                     $currLineNo = 143;
/*  2966 */                     $currColNo = 12;
/*  2967 */ 
/*  2968 */                     if (i === undefined) {
/*  2969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  2970 */                     }
/*  2971 */                     var $binop282 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), i, 'Div');
/*  2972 */                     if (array === undefined) {
/*  2973 */                         throw new Sk.builtin.UnboundLocalError('local variable \'array\' referenced before assignment');
/*  2974 */                     }
/*  2975 */                     if (i === undefined) {
/*  2976 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  2977 */                     }
/*  2978 */                     $ret = Sk.abstr.objectSetItem(array, i, $binop282, true);
/*  2979 */                     $blk = 17; /* allowing case fallthrough */
/*  2980 */                 case 17:
/*  2981 */                     /* --- function return or resume suspension --- */
/*  2982 */                     if ($ret && $ret.$isSuspension) {
/*  2983 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  2984 */                     }
/*  2985 */                     //
/*  2986 */                     // line 144:
/*  2987 */                     //             i += 1
/*  2988 */                     //             ^
/*  2989 */                     //
/*  2990 */                     $currLineNo = 144;
/*  2991 */                     $currColNo = 12;
/*  2992 */ 
/*  2993 */                     if (i === undefined) {
/*  2994 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  2995 */                     }
/*  2996 */                     var $inplbinop283 = Sk.abstr.numberInplaceBinOp(i, new Sk.builtin.int_(1), 'Add');
/*  2997 */                     i = $inplbinop283;
/*  2998 */                     $blk = 12; /* jump */
/*  2999 */                     continue;
/*  3000 */                 case 2:
/*  3001 */                     /* --- for cleanup --- */
/*  3002 */                     $blk = 3; /* allowing case fallthrough */
/*  3003 */                 case 3:
/*  3004 */                     /* --- for end --- */
/*  3005 */                     //
/*  3006 */                     // line 160:
/*  3007 */                     //     return times
/*  3008 */                     //     ^
/*  3009 */                     //
/*  3010 */                     $currLineNo = 160;
/*  3011 */                     $currColNo = 4;
/*  3012 */ 
/*  3013 */                     if (times === undefined) {
/*  3014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  3015 */                     }
/*  3016 */                     return times;
/*  3017 */                     return Sk.builtin.none.none$;
/*  3018 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3019 */                 case 13:
/*  3020 */                     /* --- after while --- */
/*  3021 */                     //
/*  3022 */                     // line 145:
/*  3023 */                     //         pass #print_diagnostics()
/*  3024 */                     //         ^
/*  3025 */                     //
/*  3026 */                     $currLineNo = 145;
/*  3027 */                     $currColNo = 8;
/*  3028 */ 
/*  3029 */ 
/*  3030 */                     //
/*  3031 */                     // line 147:
/*  3032 */                     //         if threads:
/*  3033 */                     //         ^
/*  3034 */                     //
/*  3035 */                     $currLineNo = 147;
/*  3036 */                     $currColNo = 8;
/*  3037 */ 
/*  3038 */                     if (threads === undefined) {
/*  3039 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3040 */                     }
/*  3041 */                     var $jfalse284 = (threads === false || !Sk.misceval.isTrue(threads));
/*  3042 */                     if ($jfalse284) { /*test failed */
/*  3043 */                         $blk = 19;
/*  3044 */                         continue;
/*  3045 */                     }
/*  3046 */                     //
/*  3047 */                     // line 148:
/*  3048 */                     //             time_parallel_constructions(depths, threads, debug)
/*  3049 */                     //             ^
/*  3050 */                     //
/*  3051 */                     $currLineNo = 148;
/*  3052 */                     $currColNo = 12;
/*  3053 */ 
/*  3054 */                     var $loadgbl285 = Sk.misceval.loadname('time_parallel_constructions', $gbl);
/*  3055 */                     if (depths === undefined) {
/*  3056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3057 */                     }
/*  3058 */                     if (threads === undefined) {
/*  3059 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3060 */                     }
/*  3061 */                     if (debug === undefined) {
/*  3062 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3063 */                     }
/*  3064 */                     $ret;
/*  3065 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl285, depths, threads, debug);
/*  3066 */                     $blk = 20; /* allowing case fallthrough */
/*  3067 */                 case 20:
/*  3068 */                     /* --- function return or resume suspension --- */
/*  3069 */                     if ($ret && $ret.$isSuspension) {
/*  3070 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 148, 12);
/*  3071 */                     }
/*  3072 */                     var $call286 = $ret;
/*  3073 */                     //
/*  3074 */                     // line 148:
/*  3075 */                     //             time_parallel_constructions(depths, threads, debug)
/*  3076 */                     //             ^
/*  3077 */                     //
/*  3078 */                     $currLineNo = 148;
/*  3079 */                     $currColNo = 12;
/*  3080 */ 
/*  3081 */                     $blk = 18; /* allowing case fallthrough */
/*  3082 */                 case 18:
/*  3083 */                     /* --- end of if --- */
/*  3084 */                     //
/*  3085 */                     // line 152:
/*  3086 */                     //         if long_lived_tree is None or array[1024] != 1.0/1024:
/*  3087 */                     //         ^
/*  3088 */                     //
/*  3089 */                     $currLineNo = 152;
/*  3090 */                     $currColNo = 8;
/*  3091 */ 
/*  3092 */                     if (long_lived_tree === undefined) {
/*  3093 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  3094 */                     }
/*  3095 */                     var $compareres289 = null;
/*  3096 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(long_lived_tree, Sk.builtin.none.none$, 'Is', true));
/*  3097 */                     $blk = 25; /* allowing case fallthrough */
/*  3098 */                 case 25:
/*  3099 */                     /* --- function return or resume suspension --- */
/*  3100 */                     if ($ret && $ret.$isSuspension) {
/*  3101 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 152, 11);
/*  3102 */                     }
/*  3103 */                     $compareres289 = $ret;
/*  3104 */                     var $jfalse290 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3105 */                     if ($jfalse290) { /*test failed */
/*  3106 */                         $blk = 24;
/*  3107 */                         continue;
/*  3108 */                     }
/*  3109 */                     $blk = 24; /* allowing case fallthrough */
/*  3110 */                 case 24:
/*  3111 */                     /* --- done --- */
/*  3112 */                     var $boolopsucc291 = $compareres289;
/*  3113 */                     $boolopsucc291 = $compareres289;
/*  3114 */                     var $jtrue292 = ($compareres289 === true || Sk.misceval.isTrue($compareres289));
/*  3115 */                     if ($jtrue292) { /*test passed */
/*  3116 */                         $blk = 23;
/*  3117 */                         continue;
/*  3118 */                     }
/*  3119 */                     if (array === undefined) {
/*  3120 */                         throw new Sk.builtin.UnboundLocalError('local variable \'array\' referenced before assignment');
/*  3121 */                     }
/*  3122 */                     $ret = Sk.abstr.objectGetItem(array, new Sk.builtin.int_(1024), true);
/*  3123 */                     $blk = 26; /* allowing case fallthrough */
/*  3124 */                 case 26:
/*  3125 */                     /* --- function return or resume suspension --- */
/*  3126 */                     if ($ret && $ret.$isSuspension) {
/*  3127 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  3128 */                     }
/*  3129 */                     var $lsubscr293 = $ret;
/*  3130 */                     var $compareres294 = null;
/*  3131 */                     var $binop295 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), new Sk.builtin.int_(1024), 'Div');
/*  3132 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lsubscr293, $binop295, 'NotEq', true));
/*  3133 */                     $blk = 28; /* allowing case fallthrough */
/*  3134 */                 case 28:
/*  3135 */                     /* --- function return or resume suspension --- */
/*  3136 */                     if ($ret && $ret.$isSuspension) {
/*  3137 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 152, 38);
/*  3138 */                     }
/*  3139 */                     $compareres294 = $ret;
/*  3140 */                     var $jfalse296 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3141 */                     if ($jfalse296) { /*test failed */
/*  3142 */                         $blk = 27;
/*  3143 */                         continue;
/*  3144 */                     }
/*  3145 */                     $blk = 27; /* allowing case fallthrough */
/*  3146 */                 case 27:
/*  3147 */                     /* --- done --- */
/*  3148 */                     $boolopsucc291 = $compareres294;
/*  3149 */                     var $jtrue297 = ($compareres294 === true || Sk.misceval.isTrue($compareres294));
/*  3150 */                     if ($jtrue297) { /*test passed */
/*  3151 */                         $blk = 23;
/*  3152 */                         continue;
/*  3153 */                     }
/*  3154 */                     $blk = 23; /* allowing case fallthrough */
/*  3155 */                 case 23:
/*  3156 */                     /* --- end of boolop --- */
/*  3157 */                     var $jfalse298 = ($boolopsucc291 === false || !Sk.misceval.isTrue($boolopsucc291));
/*  3158 */                     if ($jfalse298) { /*test failed */
/*  3159 */                         $blk = 22;
/*  3160 */                         continue;
/*  3161 */                     }
/*  3162 */                     //
/*  3163 */                     // line 153:
/*  3164 */                     //             raise Failed
/*  3165 */                     //             ^
/*  3166 */                     //
/*  3167 */                     $currLineNo = 153;
/*  3168 */                     $currColNo = 12;
/*  3169 */ 
/*  3170 */                     var $loadgbl299 = Sk.misceval.loadname('Failed', $gbl);
/*  3171 */                     var $err300 = $loadgbl299;
/*  3172 */                     if ($err300 instanceof Sk.builtin.type) {
/*  3173 */                         throw Sk.misceval.callsim($err300);
/*  3174 */                     } else if (typeof($err300) === 'function') {
/*  3175 */                         throw $err300();
/*  3176 */                     } else {
/*  3177 */                         throw $err300;
/*  3178 */                     }
/*  3179 */                     $blk = 22; /* allowing case fallthrough */
/*  3180 */                 case 22:
/*  3181 */                     /* --- end of if --- */
/*  3182 */                     //
/*  3183 */                     // line 155:
/*  3184 */                     //         t_finish = time.time()
/*  3185 */                     //         ^
/*  3186 */                     //
/*  3187 */                     $currLineNo = 155;
/*  3188 */                     $currColNo = 8;
/*  3189 */ 
/*  3190 */                     var $loadgbl301 = Sk.misceval.loadname('time', $gbl);
/*  3191 */                     $ret = Sk.abstr.gattr($loadgbl301, 'time', true);
/*  3192 */                     $blk = 29; /* allowing case fallthrough */
/*  3193 */                 case 29:
/*  3194 */                     /* --- function return or resume suspension --- */
/*  3195 */                     if ($ret && $ret.$isSuspension) {
/*  3196 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 155, 19);
/*  3197 */                     }
/*  3198 */                     var $lattr302 = $ret;
/*  3199 */                     $ret;
/*  3200 */                     $ret = Sk.misceval.callsimOrSuspend($lattr302);
/*  3201 */                     $blk = 30; /* allowing case fallthrough */
/*  3202 */                 case 30:
/*  3203 */                     /* --- function return or resume suspension --- */
/*  3204 */                     if ($ret && $ret.$isSuspension) {
/*  3205 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 155, 19);
/*  3206 */                     }
/*  3207 */                     var $call303 = $ret;
/*  3208 */                     //
/*  3209 */                     // line 155:
/*  3210 */                     //         t_finish = time.time()
/*  3211 */                     //                    ^
/*  3212 */                     //
/*  3213 */                     $currLineNo = 155;
/*  3214 */                     $currColNo = 19;
/*  3215 */ 
/*  3216 */                     t_finish = $call303;
/*  3217 */                     //
/*  3218 */                     // line 156:
/*  3219 */                     //         print_diagnostics()
/*  3220 */                     //         ^
/*  3221 */                     //
/*  3222 */                     $currLineNo = 156;
/*  3223 */                     $currColNo = 8;
/*  3224 */ 
/*  3225 */                     var $loadgbl304 = Sk.misceval.loadname('print_diagnostics', $gbl);
/*  3226 */                     $ret;
/*  3227 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl304);
/*  3228 */                     $blk = 31; /* allowing case fallthrough */
/*  3229 */                 case 31:
/*  3230 */                     /* --- function return or resume suspension --- */
/*  3231 */                     if ($ret && $ret.$isSuspension) {
/*  3232 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 156, 8);
/*  3233 */                     }
/*  3234 */                     var $call305 = $ret;
/*  3235 */                     //
/*  3236 */                     // line 156:
/*  3237 */                     //         print_diagnostics()
/*  3238 */                     //         ^
/*  3239 */                     //
/*  3240 */                     $currLineNo = 156;
/*  3241 */                     $currColNo = 8;
/*  3242 */ 
/*  3243 */ 
/*  3244 */                     //
/*  3245 */                     // line 157:
/*  3246 */                     //         if debug:
/*  3247 */                     //         ^
/*  3248 */                     //
/*  3249 */                     $currLineNo = 157;
/*  3250 */                     $currColNo = 8;
/*  3251 */ 
/*  3252 */                     if (debug === undefined) {
/*  3253 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3254 */                     }
/*  3255 */                     var $jfalse306 = (debug === false || !Sk.misceval.isTrue(debug));
/*  3256 */                     if ($jfalse306) { /*test failed */
/*  3257 */                         $blk = 32;
/*  3258 */                         continue;
/*  3259 */                     }
/*  3260 */                     //
/*  3261 */                     // line 158:
/*  3262 */                     //             pass #pass #print("Completed in %f ms." % ((t_finish-t_start)*1000.))
/*  3263 */                     //             ^
/*  3264 */                     //
/*  3265 */                     $currLineNo = 158;
/*  3266 */                     $currColNo = 12;
/*  3267 */ 
/*  3268 */                     $blk = 32; /* allowing case fallthrough */
/*  3269 */                 case 32:
/*  3270 */                     /* --- end of if --- */
/*  3271 */                     //
/*  3272 */                     // line 159:
/*  3273 */                     //         times.append(t_finish - t_start)
/*  3274 */                     //         ^
/*  3275 */                     //
/*  3276 */                     $currLineNo = 159;
/*  3277 */                     $currColNo = 8;
/*  3278 */ 
/*  3279 */                     if (times === undefined) {
/*  3280 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  3281 */                     }
/*  3282 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  3283 */                     $blk = 33; /* allowing case fallthrough */
/*  3284 */                 case 33:
/*  3285 */                     /* --- function return or resume suspension --- */
/*  3286 */                     if ($ret && $ret.$isSuspension) {
/*  3287 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 159, 8);
/*  3288 */                     }
/*  3289 */                     var $lattr307 = $ret;
/*  3290 */                     if (t_finish === undefined) {
/*  3291 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t_finish\' referenced before assignment');
/*  3292 */                     }
/*  3293 */                     if (t_start === undefined) {
/*  3294 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t_start\' referenced before assignment');
/*  3295 */                     }
/*  3296 */                     var $binop308 = Sk.abstr.numberBinOp(t_finish, t_start, 'Sub');
/*  3297 */                     $ret;
/*  3298 */                     $ret = Sk.misceval.callsimOrSuspend($lattr307, $binop308);
/*  3299 */                     $blk = 34; /* allowing case fallthrough */
/*  3300 */                 case 34:
/*  3301 */                     /* --- function return or resume suspension --- */
/*  3302 */                     if ($ret && $ret.$isSuspension) {
/*  3303 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 159, 8);
/*  3304 */                     }
/*  3305 */                     var $call309 = $ret;
/*  3306 */                     //
/*  3307 */                     // line 159:
/*  3308 */                     //         times.append(t_finish - t_start)
/*  3309 */                     //         ^
/*  3310 */                     //
/*  3311 */                     $currLineNo = 159;
/*  3312 */                     $currColNo = 8;
/*  3313 */ 
/*  3314 */                     $blk = 1; /* jump */
/*  3315 */                     continue;
/*  3316 */                 case 19:
/*  3317 */                     /* --- next branch of if --- */
/*  3318 */                     //
/*  3319 */                     // line 150:
/*  3320 */                     //             time_constructions(depths, debug)
/*  3321 */                     //             ^
/*  3322 */                     //
/*  3323 */                     $currLineNo = 150;
/*  3324 */                     $currColNo = 12;
/*  3325 */ 
/*  3326 */                     var $loadgbl287 = Sk.misceval.loadname('time_constructions', $gbl);
/*  3327 */                     if (depths === undefined) {
/*  3328 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3329 */                     }
/*  3330 */                     if (debug === undefined) {
/*  3331 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3332 */                     }
/*  3333 */                     $ret;
/*  3334 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl287, depths, debug);
/*  3335 */                     $blk = 21; /* allowing case fallthrough */
/*  3336 */                 case 21:
/*  3337 */                     /* --- function return or resume suspension --- */
/*  3338 */                     if ($ret && $ret.$isSuspension) {
/*  3339 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 150, 12);
/*  3340 */                     }
/*  3341 */                     var $call288 = $ret;
/*  3342 */                     //
/*  3343 */                     // line 150:
/*  3344 */                     //             time_constructions(depths, debug)
/*  3345 */                     //             ^
/*  3346 */                     //
/*  3347 */                     $currLineNo = 150;
/*  3348 */                     $currColNo = 12;
/*  3349 */ 
/*  3350 */                     $blk = 18; /* jump */
/*  3351 */                     continue;
/*  3352 */                 }
/*  3353 */             } catch (err) {
/*  3354 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3355 */                     err = new Sk.builtin.ExternalError(err);
/*  3356 */                 }
/*  3357 */                 err.traceback.push({
/*  3358 */                     lineno: $currLineNo,
/*  3359 */                     colno: $currColNo,
/*  3360 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  3361 */                 });
/*  3362 */                 if ($exc.length > 0) {
/*  3363 */                     $err = err;
/*  3364 */                     $blk = $exc.pop();
/*  3365 */                     continue;
/*  3366 */                 } else {
/*  3367 */                     throw err;
/*  3368 */                 }
/*  3369 */             }
/*  3370 */         }
/*  3371 */     });
/*  3372 */     var $scope312 = (function $Failed$class_outer($globals, $locals, $rest) {
/*  3373 */         var $gbl = $globals,
/*  3374 */             $loc = $locals;
/*  3375 */         (function $Failed$_closure() {
/*  3376 */             var $blk = 0,
/*  3377 */                 $exc = [],
/*  3378 */                 $ret = undefined,
/*  3379 */                 $postfinally = undefined,
/*  3380 */                 $currLineNo = undefined,
/*  3381 */                 $currColNo = undefined;
/*  3382 */             while (true) {
/*  3383 */                 try {
/*  3384 */                     switch ($blk) {
/*  3385 */                     case 0:
/*  3386 */                         /* --- class entry --- */
/*  3387 */                         //
/*  3388 */                         // line 163:
/*  3389 */                         //     pass
/*  3390 */                         //     ^
/*  3391 */                         //
/*  3392 */                         $currLineNo = 163;
/*  3393 */                         $currColNo = 4;
/*  3394 */ 
/*  3395 */                         return;
/*  3396 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3397 */                     }
/*  3398 */                 } catch (err) {
/*  3399 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  3400 */                         err = new Sk.builtin.ExternalError(err);
/*  3401 */                     }
/*  3402 */                     err.traceback.push({
/*  3403 */                         lineno: $currLineNo,
/*  3404 */                         colno: $currColNo,
/*  3405 */                         filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  3406 */                     });
/*  3407 */                     if ($exc.length > 0) {
/*  3408 */                         $err = err;
/*  3409 */                         $blk = $exc.pop();
/*  3410 */                         continue;
/*  3411 */                     } else {
/*  3412 */                         throw err;
/*  3413 */                     }
/*  3414 */                 }
/*  3415 */             }
/*  3416 */         }).apply(null, $rest);
/*  3417 */     });
/*  3418 */     return $scope120;
/*  3419 */ }();
