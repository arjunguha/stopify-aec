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
/*    82 */         if (typeof Sk.execStart === 'undefined') {
/*    83 */             Sk.execStart = Date.now()
/*    84 */         }
/*    85 */         if (typeof Sk.lastYield === 'undefined') {
/*    86 */             Sk.lastYield = Date.now()
/*    87 */         }
/*    88 */         if ($scope120.$wakingSuspension !== undefined) {
/*    89 */             $wakeFromSuspension();
/*    90 */         }
/*    91 */         if (Sk.retainGlobals) {
/*    92 */             if (Sk.globals) {
/*    93 */                 $gbl = Sk.globals;
/*    94 */                 Sk.globals = $gbl;
/*    95 */                 $loc = $gbl;
/*    96 */             } else {
/*    97 */                 Sk.globals = $gbl;
/*    98 */             }
/*    99 */         } else {
/*   100 */             Sk.globals = $gbl;
/*   101 */         }
/*   102 */         while (true) {
/*   103 */             try {
/*   104 */                 var $dateNow = Date.now();
/*   105 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   106 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   107 */                 }
/*   108 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   109 */                     var $susp = $saveSuspension({
/*   110 */                         data: {
/*   111 */                             type: 'Sk.yield'
/*   112 */                         },
/*   113 */                         resume: function() {}
/*   114 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*   115 */                     $susp.$blk = $blk;
/*   116 */                     $susp.optional = true;
/*   117 */                     return $susp;
/*   118 */                 }
/*   119 */                 switch ($blk) {
/*   120 */                 case 0:
/*   121 */                     /* --- module entry --- */
/*   122 */                     //
/*   123 */                     // line 46:
/*   124 */                     // import time
/*   125 */                     // ^
/*   126 */                     //
/*   127 */                     $currLineNo = 46;
/*   128 */                     $currColNo = 0;
/*   129 */ 
/*   130 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   131 */                     $blk = 1; /* allowing case fallthrough */
/*   132 */                 case 1:
/*   133 */                     /* --- function return or resume suspension --- */
/*   134 */                     if ($ret && $ret.$isSuspension) {
/*   135 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 46, 0);
/*   136 */                     }
/*   137 */                     var $module121 = $ret;
/*   138 */                     $loc.time = $module121;
/*   139 */                     //
/*   140 */                     // line 48:
/*   141 */                     // USAGE = """gcbench [num_repetitions] [--depths=N,N,N..] [--threads=N]"""
/*   142 */                     // ^
/*   143 */                     //
/*   144 */                     $currLineNo = 48;
/*   145 */                     $currColNo = 0;
/*   146 */ 
/*   147 */                     var $str122 = new Sk.builtins['str']('gcbench [num_repetitions] [--depths=N,N,N..] [--threads=N]');
/*   148 */                     $loc.USAGE = $str122;
/*   149 */                     //
/*   150 */                     // line 49:
/*   151 */                     // ENABLE_THREADS = True
/*   152 */                     // ^
/*   153 */                     //
/*   154 */                     $currLineNo = 49;
/*   155 */                     $currColNo = 0;
/*   156 */ 
/*   157 */                     $loc.ENABLE_THREADS = Sk.builtin.bool.true$;
/*   158 */                     //
/*   159 */                     // line 52:
/*   160 */                     // class Node(object):
/*   161 */                     // ^
/*   162 */                     //
/*   163 */                     $currLineNo = 52;
/*   164 */                     $currColNo = 0;
/*   165 */ 
/*   166 */                     var $loadname123 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   167 */                     $scope124.co_name = new Sk.builtins['str']('Node');
/*   168 */                     var $built128 = Sk.misceval.buildClass($gbl, $scope124, 'Node', [$loadname123]);
/*   169 */                     $loc.Node = $built128;
/*   170 */                     //
/*   171 */                     // line 58:
/*   172 */                     // kStretchTreeDepth    = 18  # about 16Mb (for Java)
/*   173 */                     // ^
/*   174 */                     //
/*   175 */                     $currLineNo = 58;
/*   176 */                     $currColNo = 0;
/*   177 */ 
/*   178 */                     $loc.kStretchTreeDepth = new Sk.builtin.int_(18);
/*   179 */                     //
/*   180 */                     // line 59:
/*   181 */                     // kLongLivedTreeDepth  = 16  # about 4Mb (for Java)
/*   182 */                     // ^
/*   183 */                     //
/*   184 */                     $currLineNo = 59;
/*   185 */                     $currColNo = 0;
/*   186 */ 
/*   187 */                     $loc.kLongLivedTreeDepth = new Sk.builtin.int_(16);
/*   188 */                     //
/*   189 */                     // line 60:
/*   190 */                     // kArraySize  = 500000   # about 4Mb
/*   191 */                     // ^
/*   192 */                     //
/*   193 */                     $currLineNo = 60;
/*   194 */                     $currColNo = 0;
/*   195 */ 
/*   196 */                     $loc.kArraySize = new Sk.builtin.int_(500000);
/*   197 */                     //
/*   198 */                     // line 61:
/*   199 */                     // kMinTreeDepth = 4
/*   200 */                     // ^
/*   201 */                     //
/*   202 */                     $currLineNo = 61;
/*   203 */                     $currColNo = 0;
/*   204 */ 
/*   205 */                     $loc.kMinTreeDepth = new Sk.builtin.int_(4);
/*   206 */                     //
/*   207 */                     // line 62:
/*   208 */                     // kMaxTreeDepth = 16
/*   209 */                     // ^
/*   210 */                     //
/*   211 */                     $currLineNo = 62;
/*   212 */                     $currColNo = 0;
/*   213 */ 
/*   214 */                     $loc.kMaxTreeDepth = new Sk.builtin.int_(16);
/*   215 */                     //
/*   216 */                     // line 64:
/*   217 */                     // def tree_size(i):
/*   218 */                     // ^
/*   219 */                     //
/*   220 */                     $currLineNo = 64;
/*   221 */                     $currColNo = 0;
/*   222 */ 
/*   223 */                     $scope129.co_name = new Sk.builtins['str']('tree_size');
/*   224 */                     $scope129.co_varnames = ['i'];
/*   225 */                     var $funcobj135 = new Sk.builtins['function']($scope129, $gbl);
/*   226 */                     $loc.tree_size = $funcobj135;
/*   227 */                     //
/*   228 */                     // line 68:
/*   229 */                     // def num_iters(i):
/*   230 */                     // ^
/*   231 */                     //
/*   232 */                     $currLineNo = 68;
/*   233 */                     $currColNo = 0;
/*   234 */ 
/*   235 */                     $scope136.co_name = new Sk.builtins['str']('num_iters');
/*   236 */                     $scope136.co_varnames = ['i'];
/*   237 */                     var $funcobj146 = new Sk.builtins['function']($scope136, $gbl);
/*   238 */                     $loc.num_iters = $funcobj146;
/*   239 */                     //
/*   240 */                     // line 72:
/*   241 */                     // def populate(depth, node):
/*   242 */                     // ^
/*   243 */                     //
/*   244 */                     $currLineNo = 72;
/*   245 */                     $currColNo = 0;
/*   246 */ 
/*   247 */                     $scope147.co_name = new Sk.builtins['str']('populate');
/*   248 */                     $scope147.co_varnames = ['depth', 'node'];
/*   249 */                     var $funcobj164 = new Sk.builtins['function']($scope147, $gbl);
/*   250 */                     $loc.populate = $funcobj164;
/*   251 */                     //
/*   252 */                     // line 83:
/*   253 */                     // def make_tree(depth):
/*   254 */                     // ^
/*   255 */                     //
/*   256 */                     $currLineNo = 83;
/*   257 */                     $currColNo = 0;
/*   258 */ 
/*   259 */                     $scope165.co_name = new Sk.builtins['str']('make_tree');
/*   260 */                     $scope165.co_varnames = ['depth'];
/*   261 */                     var $funcobj181 = new Sk.builtins['function']($scope165, $gbl);
/*   262 */                     $loc.make_tree = $funcobj181;
/*   263 */                     //
/*   264 */                     // line 90:
/*   265 */                     // def print_diagnostics():
/*   266 */                     // ^
/*   267 */                     //
/*   268 */                     $currLineNo = 90;
/*   269 */                     $currColNo = 0;
/*   270 */ 
/*   271 */                     $scope182.co_name = new Sk.builtins['str']('print_diagnostics');
/*   272 */                     var $funcobj185 = new Sk.builtins['function']($scope182, $gbl);
/*   273 */                     $loc.print_diagnostics = $funcobj185;
/*   274 */                     //
/*   275 */                     // line 94:
/*   276 */                     // def time_construction(depth, debug=False):
/*   277 */                     // ^
/*   278 */                     //
/*   279 */                     $currLineNo = 94;
/*   280 */                     $currColNo = 0;
/*   281 */ 
/*   282 */                     $scope186.co_name = new Sk.builtins['str']('time_construction');
/*   283 */                     $scope186.$defaults = [Sk.builtin.bool.false$];
/*   284 */                     $scope186.co_varnames = ['depth', 'debug'];
/*   285 */                     var $funcobj227 = new Sk.builtins['function']($scope186, $gbl);
/*   286 */                     $loc.time_construction = $funcobj227;
/*   287 */                     //
/*   288 */                     // line 113:
/*   289 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   290 */                     // ^
/*   291 */                     //
/*   292 */                     $currLineNo = 113;
/*   293 */                     $currColNo = 0;
/*   294 */ 
/*   295 */                     var $loadname228 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   296 */                     var $loadname229 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   297 */                     var $loadname230 = $loc.kMinTreeDepth !== undefined ? $loc.kMinTreeDepth : Sk.misceval.loadname('kMinTreeDepth', $gbl);;
/*   298 */                     var $loadname231 = $loc.kMaxTreeDepth !== undefined ? $loc.kMaxTreeDepth : Sk.misceval.loadname('kMaxTreeDepth', $gbl);;
/*   299 */                     var $binop232 = Sk.abstr.numberBinOp($loadname231, new Sk.builtin.int_(1), 'Add');
/*   300 */                     $ret;
/*   301 */                     $ret = Sk.misceval.callsimOrSuspend($loadname229, $loadname230, $binop232, new Sk.builtin.int_(2));
/*   302 */                     $blk = 2; /* allowing case fallthrough */
/*   303 */                 case 2:
/*   304 */                     /* --- function return or resume suspension --- */
/*   305 */                     if ($ret && $ret.$isSuspension) {
/*   306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 113, 22);
/*   307 */                     }
/*   308 */                     var $call233 = $ret;
/*   309 */                     //
/*   310 */                     // line 113:
/*   311 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   312 */                     //                       ^
/*   313 */                     //
/*   314 */                     $currLineNo = 113;
/*   315 */                     $currColNo = 22;
/*   316 */ 
/*   317 */                     $ret;
/*   318 */                     $ret = Sk.misceval.callsimOrSuspend($loadname228, $call233);
/*   319 */                     $blk = 3; /* allowing case fallthrough */
/*   320 */                 case 3:
/*   321 */                     /* --- function return or resume suspension --- */
/*   322 */                     if ($ret && $ret.$isSuspension) {
/*   323 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 113, 17);
/*   324 */                     }
/*   325 */                     var $call234 = $ret;
/*   326 */                     //
/*   327 */                     // line 113:
/*   328 */                     // DEFAULT_DEPTHS = list(range(kMinTreeDepth, kMaxTreeDepth+1, 2))
/*   329 */                     //                  ^
/*   330 */                     //
/*   331 */                     $currLineNo = 113;
/*   332 */                     $currColNo = 17;
/*   333 */ 
/*   334 */                     $loc.DEFAULT_DEPTHS = $call234;
/*   335 */                     //
/*   336 */                     // line 115:
/*   337 */                     // def time_constructions(depths, debug=False):
/*   338 */                     // ^
/*   339 */                     //
/*   340 */                     $currLineNo = 115;
/*   341 */                     $currColNo = 0;
/*   342 */ 
/*   343 */                     $scope235.co_name = new Sk.builtins['str']('time_constructions');
/*   344 */                     $scope235.$defaults = [Sk.builtin.bool.false$];
/*   345 */                     $scope235.co_varnames = ['depths', 'debug'];
/*   346 */                     var $funcobj241 = new Sk.builtins['function']($scope235, $gbl);
/*   347 */                     $loc.time_constructions = $funcobj241;
/*   348 */                     //
/*   349 */                     // line 119:
/*   350 */                     // def time_parallel_constructions(depths, nthreads, debug=False):
/*   351 */                     // ^
/*   352 */                     //
/*   353 */                     $currLineNo = 119;
/*   354 */                     $currColNo = 0;
/*   355 */ 
/*   356 */                     $scope242.co_name = new Sk.builtins['str']('time_parallel_constructions');
/*   357 */                     $scope242.$defaults = [Sk.builtin.bool.false$];
/*   358 */                     $scope242.co_varnames = ['depths', 'nthreads', 'debug'];
/*   359 */                     var $funcobj246 = new Sk.builtins['function']($scope242, $gbl);
/*   360 */                     $loc.time_parallel_constructions = $funcobj246;
/*   361 */                     //
/*   362 */                     // line 122:
/*   363 */                     // def main(numruns, depths=DEFAULT_DEPTHS, threads=0, debug=False):
/*   364 */                     // ^
/*   365 */                     //
/*   366 */                     $currLineNo = 122;
/*   367 */                     $currColNo = 0;
/*   368 */ 
/*   369 */                     var $loadname247 = $loc.DEFAULT_DEPTHS !== undefined ? $loc.DEFAULT_DEPTHS : Sk.misceval.loadname('DEFAULT_DEPTHS', $gbl);;
/*   370 */                     $scope248.co_name = new Sk.builtins['str']('main');
/*   371 */                     $scope248.$defaults = [$loadname247, new Sk.builtin.int_(0), Sk.builtin.bool.false$];
/*   372 */                     $scope248.co_varnames = ['numruns', 'depths', 'threads', 'debug'];
/*   373 */                     var $funcobj310 = new Sk.builtins['function']($scope248, $gbl);
/*   374 */                     $loc.main = $funcobj310;
/*   375 */                     //
/*   376 */                     // line 162:
/*   377 */                     // class Failed(Exception):
/*   378 */                     // ^
/*   379 */                     //
/*   380 */                     $currLineNo = 162;
/*   381 */                     $currColNo = 0;
/*   382 */ 
/*   383 */                     var $loadname311 = $loc.Exception !== undefined ? $loc.Exception : Sk.misceval.loadname('Exception', $gbl);;
/*   384 */                     $scope312.co_name = new Sk.builtins['str']('Failed');
/*   385 */                     var $built313 = Sk.misceval.buildClass($gbl, $scope312, 'Failed', [$loadname311]);
/*   386 */                     $loc.Failed = $built313;
/*   387 */                     //
/*   388 */                     // line 165:
/*   389 */                     // main(1)
/*   390 */                     // ^
/*   391 */                     //
/*   392 */                     $currLineNo = 165;
/*   393 */                     $currColNo = 0;
/*   394 */ 
/*   395 */                     var $loadname314 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   396 */                     $ret;
/*   397 */                     $ret = Sk.misceval.callsimOrSuspend($loadname314, new Sk.builtin.int_(1));
/*   398 */                     $blk = 4; /* allowing case fallthrough */
/*   399 */                 case 4:
/*   400 */                     /* --- function return or resume suspension --- */
/*   401 */                     if ($ret && $ret.$isSuspension) {
/*   402 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 165, 0);
/*   403 */                     }
/*   404 */                     var $call315 = $ret;
/*   405 */                     //
/*   406 */                     // line 165:
/*   407 */                     // main(1)
/*   408 */                     // ^
/*   409 */                     //
/*   410 */                     $currLineNo = 165;
/*   411 */                     $currColNo = 0;
/*   412 */ 
/*   413 */                     return $loc;
/*   414 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   415 */                 }
/*   416 */             } catch (err) {
/*   417 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   418 */                     err = new Sk.builtin.ExternalError(err);
/*   419 */                 }
/*   420 */                 err.traceback.push({
/*   421 */                     lineno: $currLineNo,
/*   422 */                     colno: $currColNo,
/*   423 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   424 */                 });
/*   425 */                 if ($exc.length > 0) {
/*   426 */                     $err = err;
/*   427 */                     $blk = $exc.pop();
/*   428 */                     continue;
/*   429 */                 } else {
/*   430 */                     throw err;
/*   431 */                 }
/*   432 */             }
/*   433 */         }
/*   434 */     });
/*   435 */     var $scope124 = (function $Node$class_outer($globals, $locals, $rest) {
/*   436 */         var $gbl = $globals,
/*   437 */             $loc = $locals;
/*   438 */         (function $Node$_closure() {
/*   439 */             var $blk = 0,
/*   440 */                 $exc = [],
/*   441 */                 $ret = undefined,
/*   442 */                 $postfinally = undefined,
/*   443 */                 $currLineNo = undefined,
/*   444 */                 $currColNo = undefined;
/*   445 */             if (typeof Sk.execStart === 'undefined') {
/*   446 */                 Sk.execStart = Date.now()
/*   447 */             }
/*   448 */             while (true) {
/*   449 */                 try {
/*   450 */                     var $dateNow = Date.now();
/*   451 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   452 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   453 */                     }
/*   454 */                     switch ($blk) {
/*   455 */                     case 0:
/*   456 */                         /* --- class entry --- */
/*   457 */                         //
/*   458 */                         // line 54:
/*   459 */                         //     def __init__(self, l=None, r=None):
/*   460 */                         //     ^
/*   461 */                         //
/*   462 */                         $currLineNo = 54;
/*   463 */                         $currColNo = 4;
/*   464 */ 
/*   465 */                         $scope125.co_name = new Sk.builtins['str']('__init__');
/*   466 */                         $scope125.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$];
/*   467 */                         $scope125.co_varnames = ['self', 'l', 'r'];
/*   468 */                         var $funcobj127 = new Sk.builtins['function']($scope125, $gbl);
/*   469 */                         $loc.__init__ = $funcobj127;
/*   470 */                         return;
/*   471 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   472 */                     }
/*   473 */                 } catch (err) {
/*   474 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   475 */                         err = new Sk.builtin.ExternalError(err);
/*   476 */                     }
/*   477 */                     err.traceback.push({
/*   478 */                         lineno: $currLineNo,
/*   479 */                         colno: $currColNo,
/*   480 */                         filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   481 */                     });
/*   482 */                     if ($exc.length > 0) {
/*   483 */                         $err = err;
/*   484 */                         $blk = $exc.pop();
/*   485 */                         continue;
/*   486 */                     } else {
/*   487 */                         throw err;
/*   488 */                     }
/*   489 */                 }
/*   490 */             }
/*   491 */         }).apply(null, $rest);
/*   492 */     });
/*   493 */     var $scope125 = (function $__init__126$(self, l, r) {
/*   494 */         var l, l, l, r, r, r, self, self, self;
/*   495 */         var $wakeFromSuspension = function() {
/*   496 */             var susp = $scope125.$wakingSuspension;
/*   497 */             delete $scope125.$wakingSuspension;
/*   498 */             $blk = susp.$blk;
/*   499 */             $loc = susp.$loc;
/*   500 */             $gbl = susp.$gbl;
/*   501 */             $exc = susp.$exc;
/*   502 */             $err = susp.$err;
/*   503 */             $postfinally = susp.$postfinally;
/*   504 */             $currLineNo = susp.$lineno;
/*   505 */             $currColNo = susp.$colno;
/*   506 */             Sk.lastYield = Date.now();
/*   507 */             l = susp.$tmps.l;
/*   508 */             r = susp.$tmps.r;
/*   509 */             self = susp.$tmps.self;
/*   510 */             try {
/*   511 */                 $ret = susp.child.resume();
/*   512 */             } catch (err) {
/*   513 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   514 */                     err = new Sk.builtin.ExternalError(err);
/*   515 */                 }
/*   516 */                 err.traceback.push({
/*   517 */                     lineno: $currLineNo,
/*   518 */                     colno: $currColNo,
/*   519 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   520 */                 });
/*   521 */                 if ($exc.length > 0) {
/*   522 */                     $err = err;
/*   523 */                     $blk = $exc.pop();
/*   524 */                 } else {
/*   525 */                     throw err;
/*   526 */                 }
/*   527 */             }
/*   528 */         };
/*   529 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   530 */             var susp = new Sk.misceval.Suspension();
/*   531 */             susp.child = $child;
/*   532 */             susp.resume = function() {
/*   533 */                 $scope125.$wakingSuspension = susp;
/*   534 */                 return $scope125();
/*   535 */             };
/*   536 */             susp.data = susp.child.data;
/*   537 */             susp.$blk = $blk;
/*   538 */             susp.$loc = $loc;
/*   539 */             susp.$gbl = $gbl;
/*   540 */             susp.$exc = $exc;
/*   541 */             susp.$err = $err;
/*   542 */             susp.$postfinally = $postfinally;
/*   543 */             susp.$filename = $filename;
/*   544 */             susp.$lineno = $lineno;
/*   545 */             susp.$colno = $colno;
/*   546 */             susp.optional = susp.child.optional;
/*   547 */             susp.$tmps = {
/*   548 */                 "l": l,
/*   549 */                 "r": r,
/*   550 */                 "self": self
/*   551 */             };
/*   552 */             return susp;
/*   553 */         };
/*   554 */         var $blk = 0,
/*   555 */             $exc = [],
/*   556 */             $loc = {},
/*   557 */             $gbl = this,
/*   558 */             $err = undefined,
/*   559 */             $ret = undefined,
/*   560 */             $postfinally = undefined,
/*   561 */             $currLineNo = undefined,
/*   562 */             $currColNo = undefined;
/*   563 */         if (typeof Sk.execStart === 'undefined') {
/*   564 */             Sk.execStart = Date.now()
/*   565 */         }
/*   566 */         if (typeof Sk.lastYield === 'undefined') {
/*   567 */             Sk.lastYield = Date.now()
/*   568 */         }
/*   569 */         if ($scope125.$wakingSuspension !== undefined) {
/*   570 */             $wakeFromSuspension();
/*   571 */         } else {
/*   572 */             if (l === undefined) l = $scope125.$defaults[0];
/*   573 */             if (r === undefined) r = $scope125.$defaults[1];
/*   574 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 3, false, false);
/*   575 */         }
/*   576 */         while (true) {
/*   577 */             try {
/*   578 */                 var $dateNow = Date.now();
/*   579 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   580 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   581 */                 }
/*   582 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   583 */                     var $susp = $saveSuspension({
/*   584 */                         data: {
/*   585 */                             type: 'Sk.yield'
/*   586 */                         },
/*   587 */                         resume: function() {}
/*   588 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*   589 */                     $susp.$blk = $blk;
/*   590 */                     $susp.optional = true;
/*   591 */                     return $susp;
/*   592 */                 }
/*   593 */                 switch ($blk) {
/*   594 */                 case 0:
/*   595 */                     /* --- codeobj entry --- */
/*   596 */                     if (self === undefined) {
/*   597 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   598 */                     }
/*   599 */                     if (l === undefined) {
/*   600 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   601 */                     }
/*   602 */                     if (r === undefined) {
/*   603 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   604 */                     }
/*   605 */                     if (l === undefined) {
/*   606 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   607 */                     }
/*   608 */                     if (r === undefined) {
/*   609 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   610 */                     }
/*   611 */ 
/*   612 */                     //
/*   613 */                     // line 55:
/*   614 */                     //         self.left = l
/*   615 */                     //         ^
/*   616 */                     //
/*   617 */                     $currLineNo = 55;
/*   618 */                     $currColNo = 8;
/*   619 */ 
/*   620 */                     if (l === undefined) {
/*   621 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   622 */                     }
/*   623 */                     if (self === undefined) {
/*   624 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   625 */                     }
/*   626 */                     $ret = Sk.abstr.sattr(self, 'left', l, true);
/*   627 */                     $blk = 1; /* allowing case fallthrough */
/*   628 */                 case 1:
/*   629 */                     /* --- function return or resume suspension --- */
/*   630 */                     if ($ret && $ret.$isSuspension) {
/*   631 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 55, 8);
/*   632 */                     }
/*   633 */                     //
/*   634 */                     // line 56:
/*   635 */                     //         self.right = r
/*   636 */                     //         ^
/*   637 */                     //
/*   638 */                     $currLineNo = 56;
/*   639 */                     $currColNo = 8;
/*   640 */ 
/*   641 */                     if (r === undefined) {
/*   642 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   643 */                     }
/*   644 */                     if (self === undefined) {
/*   645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   646 */                     }
/*   647 */                     $ret = Sk.abstr.sattr(self, 'right', r, true);
/*   648 */                     $blk = 2; /* allowing case fallthrough */
/*   649 */                 case 2:
/*   650 */                     /* --- function return or resume suspension --- */
/*   651 */                     if ($ret && $ret.$isSuspension) {
/*   652 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 56, 8);
/*   653 */                     }
/*   654 */                     return Sk.builtin.none.none$;
/*   655 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   656 */                 }
/*   657 */             } catch (err) {
/*   658 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   659 */                     err = new Sk.builtin.ExternalError(err);
/*   660 */                 }
/*   661 */                 err.traceback.push({
/*   662 */                     lineno: $currLineNo,
/*   663 */                     colno: $currColNo,
/*   664 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   665 */                 });
/*   666 */                 if ($exc.length > 0) {
/*   667 */                     $err = err;
/*   668 */                     $blk = $exc.pop();
/*   669 */                     continue;
/*   670 */                 } else {
/*   671 */                     throw err;
/*   672 */                 }
/*   673 */             }
/*   674 */         }
/*   675 */     });
/*   676 */     var $scope129 = (function $tree_size130$(i) {
/*   677 */         var i, i;
/*   678 */         var $wakeFromSuspension = function() {
/*   679 */             var susp = $scope129.$wakingSuspension;
/*   680 */             delete $scope129.$wakingSuspension;
/*   681 */             $blk = susp.$blk;
/*   682 */             $loc = susp.$loc;
/*   683 */             $gbl = susp.$gbl;
/*   684 */             $exc = susp.$exc;
/*   685 */             $err = susp.$err;
/*   686 */             $postfinally = susp.$postfinally;
/*   687 */             $currLineNo = susp.$lineno;
/*   688 */             $currColNo = susp.$colno;
/*   689 */             Sk.lastYield = Date.now();
/*   690 */             i = susp.$tmps.i;
/*   691 */             try {
/*   692 */                 $ret = susp.child.resume();
/*   693 */             } catch (err) {
/*   694 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   695 */                     err = new Sk.builtin.ExternalError(err);
/*   696 */                 }
/*   697 */                 err.traceback.push({
/*   698 */                     lineno: $currLineNo,
/*   699 */                     colno: $currColNo,
/*   700 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   701 */                 });
/*   702 */                 if ($exc.length > 0) {
/*   703 */                     $err = err;
/*   704 */                     $blk = $exc.pop();
/*   705 */                 } else {
/*   706 */                     throw err;
/*   707 */                 }
/*   708 */             }
/*   709 */         };
/*   710 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   711 */             var susp = new Sk.misceval.Suspension();
/*   712 */             susp.child = $child;
/*   713 */             susp.resume = function() {
/*   714 */                 $scope129.$wakingSuspension = susp;
/*   715 */                 return $scope129();
/*   716 */             };
/*   717 */             susp.data = susp.child.data;
/*   718 */             susp.$blk = $blk;
/*   719 */             susp.$loc = $loc;
/*   720 */             susp.$gbl = $gbl;
/*   721 */             susp.$exc = $exc;
/*   722 */             susp.$err = $err;
/*   723 */             susp.$postfinally = $postfinally;
/*   724 */             susp.$filename = $filename;
/*   725 */             susp.$lineno = $lineno;
/*   726 */             susp.$colno = $colno;
/*   727 */             susp.optional = susp.child.optional;
/*   728 */             susp.$tmps = {
/*   729 */                 "i": i
/*   730 */             };
/*   731 */             return susp;
/*   732 */         };
/*   733 */         var $blk = 0,
/*   734 */             $exc = [],
/*   735 */             $loc = {},
/*   736 */             $gbl = this,
/*   737 */             $err = undefined,
/*   738 */             $ret = undefined,
/*   739 */             $postfinally = undefined,
/*   740 */             $currLineNo = undefined,
/*   741 */             $currColNo = undefined;
/*   742 */         if (typeof Sk.execStart === 'undefined') {
/*   743 */             Sk.execStart = Date.now()
/*   744 */         }
/*   745 */         if (typeof Sk.lastYield === 'undefined') {
/*   746 */             Sk.lastYield = Date.now()
/*   747 */         }
/*   748 */         if ($scope129.$wakingSuspension !== undefined) {
/*   749 */             $wakeFromSuspension();
/*   750 */         } else {
/*   751 */             Sk.builtin.pyCheckArgs("tree_size", arguments, 1, 1, false, false);
/*   752 */         }
/*   753 */         while (true) {
/*   754 */             try {
/*   755 */                 var $dateNow = Date.now();
/*   756 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   757 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   758 */                 }
/*   759 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   760 */                     var $susp = $saveSuspension({
/*   761 */                         data: {
/*   762 */                             type: 'Sk.yield'
/*   763 */                         },
/*   764 */                         resume: function() {}
/*   765 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*   766 */                     $susp.$blk = $blk;
/*   767 */                     $susp.optional = true;
/*   768 */                     return $susp;
/*   769 */                 }
/*   770 */                 switch ($blk) {
/*   771 */                 case 0:
/*   772 */                     /* --- codeobj entry --- */
/*   773 */                     if (i === undefined) {
/*   774 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   775 */                     }
/*   776 */ 
/*   777 */                     //
/*   778 */                     // line 65:
/*   779 */                     //     "Nodes used by a tree of a given size"
/*   780 */                     //     ^
/*   781 */                     //
/*   782 */                     $currLineNo = 65;
/*   783 */                     $currColNo = 4;
/*   784 */ 
/*   785 */                     var $str131 = new Sk.builtins['str']('Nodes used by a tree of a given size');
/*   786 */                     //
/*   787 */                     // line 66:
/*   788 */                     //     return (1 << (i + 1)) - 1
/*   789 */                     //     ^
/*   790 */                     //
/*   791 */                     $currLineNo = 66;
/*   792 */                     $currColNo = 4;
/*   793 */ 
/*   794 */                     if (i === undefined) {
/*   795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   796 */                     }
/*   797 */                     var $binop132 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(1), 'Add');
/*   798 */                     var $binop133 = Sk.abstr.numberBinOp(new Sk.builtin.int_(1), $binop132, 'LShift');
/*   799 */                     var $binop134 = Sk.abstr.numberBinOp($binop133, new Sk.builtin.int_(1), 'Sub');
/*   800 */                     return $binop134;
/*   801 */                     return Sk.builtin.none.none$;
/*   802 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   803 */                 }
/*   804 */             } catch (err) {
/*   805 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   806 */                     err = new Sk.builtin.ExternalError(err);
/*   807 */                 }
/*   808 */                 err.traceback.push({
/*   809 */                     lineno: $currLineNo,
/*   810 */                     colno: $currColNo,
/*   811 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   812 */                 });
/*   813 */                 if ($exc.length > 0) {
/*   814 */                     $err = err;
/*   815 */                     $blk = $exc.pop();
/*   816 */                     continue;
/*   817 */                 } else {
/*   818 */                     throw err;
/*   819 */                 }
/*   820 */             }
/*   821 */         }
/*   822 */     });
/*   823 */     var $scope136 = (function $num_iters137$(i) {
/*   824 */         var i, i, $loadgbl139, $loadgbl140, $loadgbl139, $loadgbl140, $call141, $binop142, $loadgbl143;
/*   825 */         var $wakeFromSuspension = function() {
/*   826 */             var susp = $scope136.$wakingSuspension;
/*   827 */             delete $scope136.$wakingSuspension;
/*   828 */             $blk = susp.$blk;
/*   829 */             $loc = susp.$loc;
/*   830 */             $gbl = susp.$gbl;
/*   831 */             $exc = susp.$exc;
/*   832 */             $err = susp.$err;
/*   833 */             $postfinally = susp.$postfinally;
/*   834 */             $currLineNo = susp.$lineno;
/*   835 */             $currColNo = susp.$colno;
/*   836 */             Sk.lastYield = Date.now();
/*   837 */             i = susp.$tmps.i;
/*   838 */             $loadgbl139 = susp.$tmps.$loadgbl139;
/*   839 */             $loadgbl140 = susp.$tmps.$loadgbl140;
/*   840 */             $call141 = susp.$tmps.$call141;
/*   841 */             $binop142 = susp.$tmps.$binop142;
/*   842 */             $loadgbl143 = susp.$tmps.$loadgbl143;
/*   843 */             try {
/*   844 */                 $ret = susp.child.resume();
/*   845 */             } catch (err) {
/*   846 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   847 */                     err = new Sk.builtin.ExternalError(err);
/*   848 */                 }
/*   849 */                 err.traceback.push({
/*   850 */                     lineno: $currLineNo,
/*   851 */                     colno: $currColNo,
/*   852 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*   853 */                 });
/*   854 */                 if ($exc.length > 0) {
/*   855 */                     $err = err;
/*   856 */                     $blk = $exc.pop();
/*   857 */                 } else {
/*   858 */                     throw err;
/*   859 */                 }
/*   860 */             }
/*   861 */         };
/*   862 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   863 */             var susp = new Sk.misceval.Suspension();
/*   864 */             susp.child = $child;
/*   865 */             susp.resume = function() {
/*   866 */                 $scope136.$wakingSuspension = susp;
/*   867 */                 return $scope136();
/*   868 */             };
/*   869 */             susp.data = susp.child.data;
/*   870 */             susp.$blk = $blk;
/*   871 */             susp.$loc = $loc;
/*   872 */             susp.$gbl = $gbl;
/*   873 */             susp.$exc = $exc;
/*   874 */             susp.$err = $err;
/*   875 */             susp.$postfinally = $postfinally;
/*   876 */             susp.$filename = $filename;
/*   877 */             susp.$lineno = $lineno;
/*   878 */             susp.$colno = $colno;
/*   879 */             susp.optional = susp.child.optional;
/*   880 */             susp.$tmps = {
/*   881 */                 "i": i,
/*   882 */                 "$loadgbl139": $loadgbl139,
/*   883 */                 "$loadgbl140": $loadgbl140,
/*   884 */                 "$call141": $call141,
/*   885 */                 "$binop142": $binop142,
/*   886 */                 "$loadgbl143": $loadgbl143
/*   887 */             };
/*   888 */             return susp;
/*   889 */         };
/*   890 */         var $blk = 0,
/*   891 */             $exc = [],
/*   892 */             $loc = {},
/*   893 */             $gbl = this,
/*   894 */             $err = undefined,
/*   895 */             $ret = undefined,
/*   896 */             $postfinally = undefined,
/*   897 */             $currLineNo = undefined,
/*   898 */             $currColNo = undefined;
/*   899 */         if (typeof Sk.execStart === 'undefined') {
/*   900 */             Sk.execStart = Date.now()
/*   901 */         }
/*   902 */         if (typeof Sk.lastYield === 'undefined') {
/*   903 */             Sk.lastYield = Date.now()
/*   904 */         }
/*   905 */         if ($scope136.$wakingSuspension !== undefined) {
/*   906 */             $wakeFromSuspension();
/*   907 */         } else {
/*   908 */             Sk.builtin.pyCheckArgs("num_iters", arguments, 1, 1, false, false);
/*   909 */         }
/*   910 */         while (true) {
/*   911 */             try {
/*   912 */                 var $dateNow = Date.now();
/*   913 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   914 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   915 */                 }
/*   916 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   917 */                     var $susp = $saveSuspension({
/*   918 */                         data: {
/*   919 */                             type: 'Sk.yield'
/*   920 */                         },
/*   921 */                         resume: function() {}
/*   922 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*   923 */                     $susp.$blk = $blk;
/*   924 */                     $susp.optional = true;
/*   925 */                     return $susp;
/*   926 */                 }
/*   927 */                 switch ($blk) {
/*   928 */                 case 0:
/*   929 */                     /* --- codeobj entry --- */
/*   930 */                     if (i === undefined) {
/*   931 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   932 */                     }
/*   933 */ 
/*   934 */                     //
/*   935 */                     // line 69:
/*   936 */                     //     "Number of iterations to use for a given tree depth"
/*   937 */                     //     ^
/*   938 */                     //
/*   939 */                     $currLineNo = 69;
/*   940 */                     $currColNo = 4;
/*   941 */ 
/*   942 */                     var $str138 = new Sk.builtins['str']('Number of iterations to use for a given tree depth');
/*   943 */                     //
/*   944 */                     // line 70:
/*   945 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   946 */                     //     ^
/*   947 */                     //
/*   948 */                     $currLineNo = 70;
/*   949 */                     $currColNo = 4;
/*   950 */ 
/*   951 */                     var $loadgbl139 = Sk.misceval.loadname('tree_size', $gbl);
/*   952 */                     var $loadgbl140 = Sk.misceval.loadname('kStretchTreeDepth', $gbl);
/*   953 */                     $ret;
/*   954 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl139, $loadgbl140);
/*   955 */                     $blk = 1; /* allowing case fallthrough */
/*   956 */                 case 1:
/*   957 */                     /* --- function return or resume suspension --- */
/*   958 */                     if ($ret && $ret.$isSuspension) {
/*   959 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 70, 15);
/*   960 */                     }
/*   961 */                     var $call141 = $ret;
/*   962 */                     //
/*   963 */                     // line 70:
/*   964 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   965 */                     //                ^
/*   966 */                     //
/*   967 */                     $currLineNo = 70;
/*   968 */                     $currColNo = 15;
/*   969 */ 
/*   970 */                     var $binop142 = Sk.abstr.numberBinOp(new Sk.builtin.int_(2), $call141, 'Mult');
/*   971 */                     var $loadgbl143 = Sk.misceval.loadname('tree_size', $gbl);
/*   972 */                     if (i === undefined) {
/*   973 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   974 */                     }
/*   975 */                     $ret;
/*   976 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl143, i);
/*   977 */                     $blk = 2; /* allowing case fallthrough */
/*   978 */                 case 2:
/*   979 */                     /* --- function return or resume suspension --- */
/*   980 */                     if ($ret && $ret.$isSuspension) {
/*   981 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 70, 46);
/*   982 */                     }
/*   983 */                     var $call144 = $ret;
/*   984 */                     //
/*   985 */                     // line 70:
/*   986 */                     //     return 2 * tree_size(kStretchTreeDepth) / tree_size(i);
/*   987 */                     //                                               ^
/*   988 */                     //
/*   989 */                     $currLineNo = 70;
/*   990 */                     $currColNo = 46;
/*   991 */ 
/*   992 */                     var $binop145 = Sk.abstr.numberBinOp($binop142, $call144, 'Div');
/*   993 */                     return $binop145;
/*   994 */                     return Sk.builtin.none.none$;
/*   995 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   996 */                 }
/*   997 */             } catch (err) {
/*   998 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   999 */                     err = new Sk.builtin.ExternalError(err);
/*  1000 */                 }
/*  1001 */                 err.traceback.push({
/*  1002 */                     lineno: $currLineNo,
/*  1003 */                     colno: $currColNo,
/*  1004 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1005 */                 });
/*  1006 */                 if ($exc.length > 0) {
/*  1007 */                     $err = err;
/*  1008 */                     $blk = $exc.pop();
/*  1009 */                     continue;
/*  1010 */                 } else {
/*  1011 */                     throw err;
/*  1012 */                 }
/*  1013 */             }
/*  1014 */         }
/*  1015 */     });
/*  1016 */     var $scope147 = (function $populate148$(depth, node) {
/*  1017 */         var depth, depth, depth, depth, depth, depth, node, node, node, node, node, $compareres150, $loadgbl154, $loadgbl154, $call155, $loadgbl156, $loadgbl156, $call157, $loadgbl158, $loadgbl158, $lattr159, $loadgbl161, $loadgbl161, $lattr162;
/*  1018 */         var $wakeFromSuspension = function() {
/*  1019 */             var susp = $scope147.$wakingSuspension;
/*  1020 */             delete $scope147.$wakingSuspension;
/*  1021 */             $blk = susp.$blk;
/*  1022 */             $loc = susp.$loc;
/*  1023 */             $gbl = susp.$gbl;
/*  1024 */             $exc = susp.$exc;
/*  1025 */             $err = susp.$err;
/*  1026 */             $postfinally = susp.$postfinally;
/*  1027 */             $currLineNo = susp.$lineno;
/*  1028 */             $currColNo = susp.$colno;
/*  1029 */             Sk.lastYield = Date.now();
/*  1030 */             depth = susp.$tmps.depth;
/*  1031 */             node = susp.$tmps.node;
/*  1032 */             $compareres150 = susp.$tmps.$compareres150;
/*  1033 */             $loadgbl154 = susp.$tmps.$loadgbl154;
/*  1034 */             $call155 = susp.$tmps.$call155;
/*  1035 */             $loadgbl156 = susp.$tmps.$loadgbl156;
/*  1036 */             $call157 = susp.$tmps.$call157;
/*  1037 */             $loadgbl158 = susp.$tmps.$loadgbl158;
/*  1038 */             $lattr159 = susp.$tmps.$lattr159;
/*  1039 */             $loadgbl161 = susp.$tmps.$loadgbl161;
/*  1040 */             $lattr162 = susp.$tmps.$lattr162;
/*  1041 */             try {
/*  1042 */                 $ret = susp.child.resume();
/*  1043 */             } catch (err) {
/*  1044 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1045 */                     err = new Sk.builtin.ExternalError(err);
/*  1046 */                 }
/*  1047 */                 err.traceback.push({
/*  1048 */                     lineno: $currLineNo,
/*  1049 */                     colno: $currColNo,
/*  1050 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1051 */                 });
/*  1052 */                 if ($exc.length > 0) {
/*  1053 */                     $err = err;
/*  1054 */                     $blk = $exc.pop();
/*  1055 */                 } else {
/*  1056 */                     throw err;
/*  1057 */                 }
/*  1058 */             }
/*  1059 */         };
/*  1060 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1061 */             var susp = new Sk.misceval.Suspension();
/*  1062 */             susp.child = $child;
/*  1063 */             susp.resume = function() {
/*  1064 */                 $scope147.$wakingSuspension = susp;
/*  1065 */                 return $scope147();
/*  1066 */             };
/*  1067 */             susp.data = susp.child.data;
/*  1068 */             susp.$blk = $blk;
/*  1069 */             susp.$loc = $loc;
/*  1070 */             susp.$gbl = $gbl;
/*  1071 */             susp.$exc = $exc;
/*  1072 */             susp.$err = $err;
/*  1073 */             susp.$postfinally = $postfinally;
/*  1074 */             susp.$filename = $filename;
/*  1075 */             susp.$lineno = $lineno;
/*  1076 */             susp.$colno = $colno;
/*  1077 */             susp.optional = susp.child.optional;
/*  1078 */             susp.$tmps = {
/*  1079 */                 "depth": depth,
/*  1080 */                 "node": node,
/*  1081 */                 "$compareres150": $compareres150,
/*  1082 */                 "$loadgbl154": $loadgbl154,
/*  1083 */                 "$call155": $call155,
/*  1084 */                 "$loadgbl156": $loadgbl156,
/*  1085 */                 "$call157": $call157,
/*  1086 */                 "$loadgbl158": $loadgbl158,
/*  1087 */                 "$lattr159": $lattr159,
/*  1088 */                 "$loadgbl161": $loadgbl161,
/*  1089 */                 "$lattr162": $lattr162
/*  1090 */             };
/*  1091 */             return susp;
/*  1092 */         };
/*  1093 */         var $blk = 0,
/*  1094 */             $exc = [],
/*  1095 */             $loc = {},
/*  1096 */             $gbl = this,
/*  1097 */             $err = undefined,
/*  1098 */             $ret = undefined,
/*  1099 */             $postfinally = undefined,
/*  1100 */             $currLineNo = undefined,
/*  1101 */             $currColNo = undefined;
/*  1102 */         if (typeof Sk.execStart === 'undefined') {
/*  1103 */             Sk.execStart = Date.now()
/*  1104 */         }
/*  1105 */         if (typeof Sk.lastYield === 'undefined') {
/*  1106 */             Sk.lastYield = Date.now()
/*  1107 */         }
/*  1108 */         if ($scope147.$wakingSuspension !== undefined) {
/*  1109 */             $wakeFromSuspension();
/*  1110 */         } else {
/*  1111 */             Sk.builtin.pyCheckArgs("populate", arguments, 2, 2, false, false);
/*  1112 */         }
/*  1113 */         while (true) {
/*  1114 */             try {
/*  1115 */                 var $dateNow = Date.now();
/*  1116 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1117 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1118 */                 }
/*  1119 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1120 */                     var $susp = $saveSuspension({
/*  1121 */                         data: {
/*  1122 */                             type: 'Sk.yield'
/*  1123 */                         },
/*  1124 */                         resume: function() {}
/*  1125 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  1126 */                     $susp.$blk = $blk;
/*  1127 */                     $susp.optional = true;
/*  1128 */                     return $susp;
/*  1129 */                 }
/*  1130 */                 switch ($blk) {
/*  1131 */                 case 0:
/*  1132 */                     /* --- codeobj entry --- */
/*  1133 */                     if (depth === undefined) {
/*  1134 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1135 */                     }
/*  1136 */                     if (node === undefined) {
/*  1137 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1138 */                     }
/*  1139 */ 
/*  1140 */                     //
/*  1141 */                     // line 73:
/*  1142 */                     //     "Build tree top down, assigning to older objects."
/*  1143 */                     //     ^
/*  1144 */                     //
/*  1145 */                     $currLineNo = 73;
/*  1146 */                     $currColNo = 4;
/*  1147 */ 
/*  1148 */                     var $str149 = new Sk.builtins['str']('Build tree top down, assigning to older objects.');
/*  1149 */                     //
/*  1150 */                     // line 74:
/*  1151 */                     //     if depth <= 0:
/*  1152 */                     //     ^
/*  1153 */                     //
/*  1154 */                     $currLineNo = 74;
/*  1155 */                     $currColNo = 4;
/*  1156 */ 
/*  1157 */                     if (depth === undefined) {
/*  1158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1159 */                     }
/*  1160 */                     var $compareres150 = null;
/*  1161 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(depth, new Sk.builtin.int_(0), 'LtE', true));
/*  1162 */                     $blk = 4; /* allowing case fallthrough */
/*  1163 */                 case 4:
/*  1164 */                     /* --- function return or resume suspension --- */
/*  1165 */                     if ($ret && $ret.$isSuspension) {
/*  1166 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 74, 7);
/*  1167 */                     }
/*  1168 */                     $compareres150 = $ret;
/*  1169 */                     var $jfalse151 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1170 */                     if ($jfalse151) { /*test failed */
/*  1171 */                         $blk = 3;
/*  1172 */                         continue;
/*  1173 */                     }
/*  1174 */                     $blk = 3; /* allowing case fallthrough */
/*  1175 */                 case 3:
/*  1176 */                     /* --- done --- */
/*  1177 */                     var $jfalse152 = ($compareres150 === false || !Sk.misceval.isTrue($compareres150));
/*  1178 */                     if ($jfalse152) { /*test failed */
/*  1179 */                         $blk = 2;
/*  1180 */                         continue;
/*  1181 */                     }
/*  1182 */                     //
/*  1183 */                     // line 75:
/*  1184 */                     //         return
/*  1185 */                     //         ^
/*  1186 */                     //
/*  1187 */                     $currLineNo = 75;
/*  1188 */                     $currColNo = 8;
/*  1189 */ 
/*  1190 */                     return Sk.builtin.none.none$;
/*  1191 */                     $blk = 1; /* allowing case fallthrough */
/*  1192 */                 case 1:
/*  1193 */                     /* --- end of if --- */
/*  1194 */                     return Sk.builtin.none.none$;
/*  1195 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1196 */                 case 2:
/*  1197 */                     /* --- next branch of if --- */
/*  1198 */                     //
/*  1199 */                     // line 77:
/*  1200 */                     //         depth -= 1
/*  1201 */                     //         ^
/*  1202 */                     //
/*  1203 */                     $currLineNo = 77;
/*  1204 */                     $currColNo = 8;
/*  1205 */ 
/*  1206 */                     if (depth === undefined) {
/*  1207 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1208 */                     }
/*  1209 */                     var $inplbinop153 = Sk.abstr.numberInplaceBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1210 */                     depth = $inplbinop153;
/*  1211 */                     //
/*  1212 */                     // line 78:
/*  1213 */                     //         node.left = Node()
/*  1214 */                     //         ^
/*  1215 */                     //
/*  1216 */                     $currLineNo = 78;
/*  1217 */                     $currColNo = 8;
/*  1218 */ 
/*  1219 */                     var $loadgbl154 = Sk.misceval.loadname('Node', $gbl);
/*  1220 */                     $ret;
/*  1221 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl154);
/*  1222 */                     $blk = 5; /* allowing case fallthrough */
/*  1223 */                 case 5:
/*  1224 */                     /* --- function return or resume suspension --- */
/*  1225 */                     if ($ret && $ret.$isSuspension) {
/*  1226 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 78, 20);
/*  1227 */                     }
/*  1228 */                     var $call155 = $ret;
/*  1229 */                     //
/*  1230 */                     // line 78:
/*  1231 */                     //         node.left = Node()
/*  1232 */                     //                     ^
/*  1233 */                     //
/*  1234 */                     $currLineNo = 78;
/*  1235 */                     $currColNo = 20;
/*  1236 */ 
/*  1237 */                     if (node === undefined) {
/*  1238 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1239 */                     }
/*  1240 */                     $ret = Sk.abstr.sattr(node, 'left', $call155, true);
/*  1241 */                     $blk = 6; /* allowing case fallthrough */
/*  1242 */                 case 6:
/*  1243 */                     /* --- function return or resume suspension --- */
/*  1244 */                     if ($ret && $ret.$isSuspension) {
/*  1245 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 78, 8);
/*  1246 */                     }
/*  1247 */                     //
/*  1248 */                     // line 79:
/*  1249 */                     //         node.right = Node()
/*  1250 */                     //         ^
/*  1251 */                     //
/*  1252 */                     $currLineNo = 79;
/*  1253 */                     $currColNo = 8;
/*  1254 */ 
/*  1255 */                     var $loadgbl156 = Sk.misceval.loadname('Node', $gbl);
/*  1256 */                     $ret;
/*  1257 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl156);
/*  1258 */                     $blk = 7; /* allowing case fallthrough */
/*  1259 */                 case 7:
/*  1260 */                     /* --- function return or resume suspension --- */
/*  1261 */                     if ($ret && $ret.$isSuspension) {
/*  1262 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 79, 21);
/*  1263 */                     }
/*  1264 */                     var $call157 = $ret;
/*  1265 */                     //
/*  1266 */                     // line 79:
/*  1267 */                     //         node.right = Node()
/*  1268 */                     //                      ^
/*  1269 */                     //
/*  1270 */                     $currLineNo = 79;
/*  1271 */                     $currColNo = 21;
/*  1272 */ 
/*  1273 */                     if (node === undefined) {
/*  1274 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1275 */                     }
/*  1276 */                     $ret = Sk.abstr.sattr(node, 'right', $call157, true);
/*  1277 */                     $blk = 8; /* allowing case fallthrough */
/*  1278 */                 case 8:
/*  1279 */                     /* --- function return or resume suspension --- */
/*  1280 */                     if ($ret && $ret.$isSuspension) {
/*  1281 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 79, 8);
/*  1282 */                     }
/*  1283 */                     //
/*  1284 */                     // line 80:
/*  1285 */                     //         populate(depth, node.left)
/*  1286 */                     //         ^
/*  1287 */                     //
/*  1288 */                     $currLineNo = 80;
/*  1289 */                     $currColNo = 8;
/*  1290 */ 
/*  1291 */                     var $loadgbl158 = Sk.misceval.loadname('populate', $gbl);
/*  1292 */                     if (depth === undefined) {
/*  1293 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1294 */                     }
/*  1295 */                     if (node === undefined) {
/*  1296 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1297 */                     }
/*  1298 */                     $ret = Sk.abstr.gattr(node, 'left', true);
/*  1299 */                     $blk = 9; /* allowing case fallthrough */
/*  1300 */                 case 9:
/*  1301 */                     /* --- function return or resume suspension --- */
/*  1302 */                     if ($ret && $ret.$isSuspension) {
/*  1303 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 80, 24);
/*  1304 */                     }
/*  1305 */                     var $lattr159 = $ret;
/*  1306 */                     $ret;
/*  1307 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl158, depth, $lattr159);
/*  1308 */                     $blk = 10; /* allowing case fallthrough */
/*  1309 */                 case 10:
/*  1310 */                     /* --- function return or resume suspension --- */
/*  1311 */                     if ($ret && $ret.$isSuspension) {
/*  1312 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 80, 8);
/*  1313 */                     }
/*  1314 */                     var $call160 = $ret;
/*  1315 */                     //
/*  1316 */                     // line 80:
/*  1317 */                     //         populate(depth, node.left)
/*  1318 */                     //         ^
/*  1319 */                     //
/*  1320 */                     $currLineNo = 80;
/*  1321 */                     $currColNo = 8;
/*  1322 */ 
/*  1323 */ 
/*  1324 */                     //
/*  1325 */                     // line 81:
/*  1326 */                     //         populate(depth, node.right)
/*  1327 */                     //         ^
/*  1328 */                     //
/*  1329 */                     $currLineNo = 81;
/*  1330 */                     $currColNo = 8;
/*  1331 */ 
/*  1332 */                     var $loadgbl161 = Sk.misceval.loadname('populate', $gbl);
/*  1333 */                     if (depth === undefined) {
/*  1334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1335 */                     }
/*  1336 */                     if (node === undefined) {
/*  1337 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  1338 */                     }
/*  1339 */                     $ret = Sk.abstr.gattr(node, 'right', true);
/*  1340 */                     $blk = 11; /* allowing case fallthrough */
/*  1341 */                 case 11:
/*  1342 */                     /* --- function return or resume suspension --- */
/*  1343 */                     if ($ret && $ret.$isSuspension) {
/*  1344 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 81, 24);
/*  1345 */                     }
/*  1346 */                     var $lattr162 = $ret;
/*  1347 */                     $ret;
/*  1348 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl161, depth, $lattr162);
/*  1349 */                     $blk = 12; /* allowing case fallthrough */
/*  1350 */                 case 12:
/*  1351 */                     /* --- function return or resume suspension --- */
/*  1352 */                     if ($ret && $ret.$isSuspension) {
/*  1353 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 81, 8);
/*  1354 */                     }
/*  1355 */                     var $call163 = $ret;
/*  1356 */                     //
/*  1357 */                     // line 81:
/*  1358 */                     //         populate(depth, node.right)
/*  1359 */                     //         ^
/*  1360 */                     //
/*  1361 */                     $currLineNo = 81;
/*  1362 */                     $currColNo = 8;
/*  1363 */ 
/*  1364 */                     $blk = 1; /* jump */
/*  1365 */                     continue;
/*  1366 */                 }
/*  1367 */             } catch (err) {
/*  1368 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1369 */                     err = new Sk.builtin.ExternalError(err);
/*  1370 */                 }
/*  1371 */                 err.traceback.push({
/*  1372 */                     lineno: $currLineNo,
/*  1373 */                     colno: $currColNo,
/*  1374 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1375 */                 });
/*  1376 */                 if ($exc.length > 0) {
/*  1377 */                     $err = err;
/*  1378 */                     $blk = $exc.pop();
/*  1379 */                     continue;
/*  1380 */                 } else {
/*  1381 */                     throw err;
/*  1382 */                 }
/*  1383 */             }
/*  1384 */         }
/*  1385 */     });
/*  1386 */     var $scope165 = (function $make_tree166$(depth) {
/*  1387 */         var depth, depth, depth, depth, $compareres168, $loadgbl171, $loadgbl173, $loadgbl174, $binop175, $loadgbl173, $loadgbl174, $binop175, $call176, $loadgbl177, $binop178, $loadgbl173, $loadgbl174, $binop175, $call176, $loadgbl177, $binop178, $call179;
/*  1388 */         var $wakeFromSuspension = function() {
/*  1389 */             var susp = $scope165.$wakingSuspension;
/*  1390 */             delete $scope165.$wakingSuspension;
/*  1391 */             $blk = susp.$blk;
/*  1392 */             $loc = susp.$loc;
/*  1393 */             $gbl = susp.$gbl;
/*  1394 */             $exc = susp.$exc;
/*  1395 */             $err = susp.$err;
/*  1396 */             $postfinally = susp.$postfinally;
/*  1397 */             $currLineNo = susp.$lineno;
/*  1398 */             $currColNo = susp.$colno;
/*  1399 */             Sk.lastYield = Date.now();
/*  1400 */             depth = susp.$tmps.depth;
/*  1401 */             $compareres168 = susp.$tmps.$compareres168;
/*  1402 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*  1403 */             $loadgbl173 = susp.$tmps.$loadgbl173;
/*  1404 */             $loadgbl174 = susp.$tmps.$loadgbl174;
/*  1405 */             $binop175 = susp.$tmps.$binop175;
/*  1406 */             $call176 = susp.$tmps.$call176;
/*  1407 */             $loadgbl177 = susp.$tmps.$loadgbl177;
/*  1408 */             $binop178 = susp.$tmps.$binop178;
/*  1409 */             $call179 = susp.$tmps.$call179;
/*  1410 */             try {
/*  1411 */                 $ret = susp.child.resume();
/*  1412 */             } catch (err) {
/*  1413 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1414 */                     err = new Sk.builtin.ExternalError(err);
/*  1415 */                 }
/*  1416 */                 err.traceback.push({
/*  1417 */                     lineno: $currLineNo,
/*  1418 */                     colno: $currColNo,
/*  1419 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1420 */                 });
/*  1421 */                 if ($exc.length > 0) {
/*  1422 */                     $err = err;
/*  1423 */                     $blk = $exc.pop();
/*  1424 */                 } else {
/*  1425 */                     throw err;
/*  1426 */                 }
/*  1427 */             }
/*  1428 */         };
/*  1429 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1430 */             var susp = new Sk.misceval.Suspension();
/*  1431 */             susp.child = $child;
/*  1432 */             susp.resume = function() {
/*  1433 */                 $scope165.$wakingSuspension = susp;
/*  1434 */                 return $scope165();
/*  1435 */             };
/*  1436 */             susp.data = susp.child.data;
/*  1437 */             susp.$blk = $blk;
/*  1438 */             susp.$loc = $loc;
/*  1439 */             susp.$gbl = $gbl;
/*  1440 */             susp.$exc = $exc;
/*  1441 */             susp.$err = $err;
/*  1442 */             susp.$postfinally = $postfinally;
/*  1443 */             susp.$filename = $filename;
/*  1444 */             susp.$lineno = $lineno;
/*  1445 */             susp.$colno = $colno;
/*  1446 */             susp.optional = susp.child.optional;
/*  1447 */             susp.$tmps = {
/*  1448 */                 "depth": depth,
/*  1449 */                 "$compareres168": $compareres168,
/*  1450 */                 "$loadgbl171": $loadgbl171,
/*  1451 */                 "$loadgbl173": $loadgbl173,
/*  1452 */                 "$loadgbl174": $loadgbl174,
/*  1453 */                 "$binop175": $binop175,
/*  1454 */                 "$call176": $call176,
/*  1455 */                 "$loadgbl177": $loadgbl177,
/*  1456 */                 "$binop178": $binop178,
/*  1457 */                 "$call179": $call179
/*  1458 */             };
/*  1459 */             return susp;
/*  1460 */         };
/*  1461 */         var $blk = 0,
/*  1462 */             $exc = [],
/*  1463 */             $loc = {},
/*  1464 */             $gbl = this,
/*  1465 */             $err = undefined,
/*  1466 */             $ret = undefined,
/*  1467 */             $postfinally = undefined,
/*  1468 */             $currLineNo = undefined,
/*  1469 */             $currColNo = undefined;
/*  1470 */         if (typeof Sk.execStart === 'undefined') {
/*  1471 */             Sk.execStart = Date.now()
/*  1472 */         }
/*  1473 */         if (typeof Sk.lastYield === 'undefined') {
/*  1474 */             Sk.lastYield = Date.now()
/*  1475 */         }
/*  1476 */         if ($scope165.$wakingSuspension !== undefined) {
/*  1477 */             $wakeFromSuspension();
/*  1478 */         } else {
/*  1479 */             Sk.builtin.pyCheckArgs("make_tree", arguments, 1, 1, false, false);
/*  1480 */         }
/*  1481 */         while (true) {
/*  1482 */             try {
/*  1483 */                 var $dateNow = Date.now();
/*  1484 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1485 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1486 */                 }
/*  1487 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1488 */                     var $susp = $saveSuspension({
/*  1489 */                         data: {
/*  1490 */                             type: 'Sk.yield'
/*  1491 */                         },
/*  1492 */                         resume: function() {}
/*  1493 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  1494 */                     $susp.$blk = $blk;
/*  1495 */                     $susp.optional = true;
/*  1496 */                     return $susp;
/*  1497 */                 }
/*  1498 */                 switch ($blk) {
/*  1499 */                 case 0:
/*  1500 */                     /* --- codeobj entry --- */
/*  1501 */                     if (depth === undefined) {
/*  1502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1503 */                     }
/*  1504 */ 
/*  1505 */                     //
/*  1506 */                     // line 84:
/*  1507 */                     //     "Build tree bottom-up"
/*  1508 */                     //     ^
/*  1509 */                     //
/*  1510 */                     $currLineNo = 84;
/*  1511 */                     $currColNo = 4;
/*  1512 */ 
/*  1513 */                     var $str167 = new Sk.builtins['str']('Build tree bottom-up');
/*  1514 */                     //
/*  1515 */                     // line 85:
/*  1516 */                     //     if depth <= 0:
/*  1517 */                     //     ^
/*  1518 */                     //
/*  1519 */                     $currLineNo = 85;
/*  1520 */                     $currColNo = 4;
/*  1521 */ 
/*  1522 */                     if (depth === undefined) {
/*  1523 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1524 */                     }
/*  1525 */                     var $compareres168 = null;
/*  1526 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(depth, new Sk.builtin.int_(0), 'LtE', true));
/*  1527 */                     $blk = 4; /* allowing case fallthrough */
/*  1528 */                 case 4:
/*  1529 */                     /* --- function return or resume suspension --- */
/*  1530 */                     if ($ret && $ret.$isSuspension) {
/*  1531 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 85, 7);
/*  1532 */                     }
/*  1533 */                     $compareres168 = $ret;
/*  1534 */                     var $jfalse169 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1535 */                     if ($jfalse169) { /*test failed */
/*  1536 */                         $blk = 3;
/*  1537 */                         continue;
/*  1538 */                     }
/*  1539 */                     $blk = 3; /* allowing case fallthrough */
/*  1540 */                 case 3:
/*  1541 */                     /* --- done --- */
/*  1542 */                     var $jfalse170 = ($compareres168 === false || !Sk.misceval.isTrue($compareres168));
/*  1543 */                     if ($jfalse170) { /*test failed */
/*  1544 */                         $blk = 2;
/*  1545 */                         continue;
/*  1546 */                     }
/*  1547 */                     //
/*  1548 */                     // line 86:
/*  1549 */                     //         return Node()
/*  1550 */                     //         ^
/*  1551 */                     //
/*  1552 */                     $currLineNo = 86;
/*  1553 */                     $currColNo = 8;
/*  1554 */ 
/*  1555 */                     var $loadgbl171 = Sk.misceval.loadname('Node', $gbl);
/*  1556 */                     $ret;
/*  1557 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171);
/*  1558 */                     $blk = 5; /* allowing case fallthrough */
/*  1559 */                 case 5:
/*  1560 */                     /* --- function return or resume suspension --- */
/*  1561 */                     if ($ret && $ret.$isSuspension) {
/*  1562 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 86, 15);
/*  1563 */                     }
/*  1564 */                     var $call172 = $ret;
/*  1565 */                     //
/*  1566 */                     // line 86:
/*  1567 */                     //         return Node()
/*  1568 */                     //                ^
/*  1569 */                     //
/*  1570 */                     $currLineNo = 86;
/*  1571 */                     $currColNo = 15;
/*  1572 */ 
/*  1573 */                     return $call172;
/*  1574 */                     $blk = 1; /* allowing case fallthrough */
/*  1575 */                 case 1:
/*  1576 */                     /* --- end of if --- */
/*  1577 */                     return Sk.builtin.none.none$;
/*  1578 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1579 */                 case 2:
/*  1580 */                     /* --- next branch of if --- */
/*  1581 */                     //
/*  1582 */                     // line 88:
/*  1583 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1584 */                     //         ^
/*  1585 */                     //
/*  1586 */                     $currLineNo = 88;
/*  1587 */                     $currColNo = 8;
/*  1588 */ 
/*  1589 */                     var $loadgbl173 = Sk.misceval.loadname('Node', $gbl);
/*  1590 */                     var $loadgbl174 = Sk.misceval.loadname('make_tree', $gbl);
/*  1591 */                     if (depth === undefined) {
/*  1592 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1593 */                     }
/*  1594 */                     var $binop175 = Sk.abstr.numberBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1595 */                     $ret;
/*  1596 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl174, $binop175);
/*  1597 */                     $blk = 6; /* allowing case fallthrough */
/*  1598 */                 case 6:
/*  1599 */                     /* --- function return or resume suspension --- */
/*  1600 */                     if ($ret && $ret.$isSuspension) {
/*  1601 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 20);
/*  1602 */                     }
/*  1603 */                     var $call176 = $ret;
/*  1604 */                     //
/*  1605 */                     // line 88:
/*  1606 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1607 */                     //                     ^
/*  1608 */                     //
/*  1609 */                     $currLineNo = 88;
/*  1610 */                     $currColNo = 20;
/*  1611 */ 
/*  1612 */                     var $loadgbl177 = Sk.misceval.loadname('make_tree', $gbl);
/*  1613 */                     if (depth === undefined) {
/*  1614 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1615 */                     }
/*  1616 */                     var $binop178 = Sk.abstr.numberBinOp(depth, new Sk.builtin.int_(1), 'Sub');
/*  1617 */                     $ret;
/*  1618 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl177, $binop178);
/*  1619 */                     $blk = 7; /* allowing case fallthrough */
/*  1620 */                 case 7:
/*  1621 */                     /* --- function return or resume suspension --- */
/*  1622 */                     if ($ret && $ret.$isSuspension) {
/*  1623 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 40);
/*  1624 */                     }
/*  1625 */                     var $call179 = $ret;
/*  1626 */                     //
/*  1627 */                     // line 88:
/*  1628 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1629 */                     //                                         ^
/*  1630 */                     //
/*  1631 */                     $currLineNo = 88;
/*  1632 */                     $currColNo = 40;
/*  1633 */ 
/*  1634 */                     $ret;
/*  1635 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl173, $call176, $call179);
/*  1636 */                     $blk = 8; /* allowing case fallthrough */
/*  1637 */                 case 8:
/*  1638 */                     /* --- function return or resume suspension --- */
/*  1639 */                     if ($ret && $ret.$isSuspension) {
/*  1640 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 88, 15);
/*  1641 */                     }
/*  1642 */                     var $call180 = $ret;
/*  1643 */                     //
/*  1644 */                     // line 88:
/*  1645 */                     //         return Node(make_tree(depth-1), make_tree(depth-1))
/*  1646 */                     //                ^
/*  1647 */                     //
/*  1648 */                     $currLineNo = 88;
/*  1649 */                     $currColNo = 15;
/*  1650 */ 
/*  1651 */                     return $call180;
/*  1652 */                     $blk = 1; /* jump */
/*  1653 */                     continue;
/*  1654 */                 }
/*  1655 */             } catch (err) {
/*  1656 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1657 */                     err = new Sk.builtin.ExternalError(err);
/*  1658 */                 }
/*  1659 */                 err.traceback.push({
/*  1660 */                     lineno: $currLineNo,
/*  1661 */                     colno: $currColNo,
/*  1662 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1663 */                 });
/*  1664 */                 if ($exc.length > 0) {
/*  1665 */                     $err = err;
/*  1666 */                     $blk = $exc.pop();
/*  1667 */                     continue;
/*  1668 */                 } else {
/*  1669 */                     throw err;
/*  1670 */                 }
/*  1671 */             }
/*  1672 */         }
/*  1673 */     });
/*  1674 */     var $scope182 = (function $print_diagnostics183$() {
/*  1675 */         var $wakeFromSuspension = function() {
/*  1676 */             var susp = $scope182.$wakingSuspension;
/*  1677 */             delete $scope182.$wakingSuspension;
/*  1678 */             $blk = susp.$blk;
/*  1679 */             $loc = susp.$loc;
/*  1680 */             $gbl = susp.$gbl;
/*  1681 */             $exc = susp.$exc;
/*  1682 */             $err = susp.$err;
/*  1683 */             $postfinally = susp.$postfinally;
/*  1684 */             $currLineNo = susp.$lineno;
/*  1685 */             $currColNo = susp.$colno;
/*  1686 */             Sk.lastYield = Date.now();
/*  1687 */             try {
/*  1688 */                 $ret = susp.child.resume();
/*  1689 */             } catch (err) {
/*  1690 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1691 */                     err = new Sk.builtin.ExternalError(err);
/*  1692 */                 }
/*  1693 */                 err.traceback.push({
/*  1694 */                     lineno: $currLineNo,
/*  1695 */                     colno: $currColNo,
/*  1696 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1697 */                 });
/*  1698 */                 if ($exc.length > 0) {
/*  1699 */                     $err = err;
/*  1700 */                     $blk = $exc.pop();
/*  1701 */                 } else {
/*  1702 */                     throw err;
/*  1703 */                 }
/*  1704 */             }
/*  1705 */         };
/*  1706 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1707 */             var susp = new Sk.misceval.Suspension();
/*  1708 */             susp.child = $child;
/*  1709 */             susp.resume = function() {
/*  1710 */                 $scope182.$wakingSuspension = susp;
/*  1711 */                 return $scope182();
/*  1712 */             };
/*  1713 */             susp.data = susp.child.data;
/*  1714 */             susp.$blk = $blk;
/*  1715 */             susp.$loc = $loc;
/*  1716 */             susp.$gbl = $gbl;
/*  1717 */             susp.$exc = $exc;
/*  1718 */             susp.$err = $err;
/*  1719 */             susp.$postfinally = $postfinally;
/*  1720 */             susp.$filename = $filename;
/*  1721 */             susp.$lineno = $lineno;
/*  1722 */             susp.$colno = $colno;
/*  1723 */             susp.optional = susp.child.optional;
/*  1724 */             susp.$tmps = {};
/*  1725 */             return susp;
/*  1726 */         };
/*  1727 */         var $blk = 0,
/*  1728 */             $exc = [],
/*  1729 */             $loc = {},
/*  1730 */             $gbl = this,
/*  1731 */             $err = undefined,
/*  1732 */             $ret = undefined,
/*  1733 */             $postfinally = undefined,
/*  1734 */             $currLineNo = undefined,
/*  1735 */             $currColNo = undefined;
/*  1736 */         if (typeof Sk.execStart === 'undefined') {
/*  1737 */             Sk.execStart = Date.now()
/*  1738 */         }
/*  1739 */         if (typeof Sk.lastYield === 'undefined') {
/*  1740 */             Sk.lastYield = Date.now()
/*  1741 */         }
/*  1742 */         if ($scope182.$wakingSuspension !== undefined) {
/*  1743 */             $wakeFromSuspension();
/*  1744 */         } else {
/*  1745 */             Sk.builtin.pyCheckArgs("print_diagnostics", arguments, 0, 0, false, false);
/*  1746 */         }
/*  1747 */         while (true) {
/*  1748 */             try {
/*  1749 */                 var $dateNow = Date.now();
/*  1750 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1751 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1752 */                 }
/*  1753 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1754 */                     var $susp = $saveSuspension({
/*  1755 */                         data: {
/*  1756 */                             type: 'Sk.yield'
/*  1757 */                         },
/*  1758 */                         resume: function() {}
/*  1759 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  1760 */                     $susp.$blk = $blk;
/*  1761 */                     $susp.optional = true;
/*  1762 */                     return $susp;
/*  1763 */                 }
/*  1764 */                 switch ($blk) {
/*  1765 */                 case 0:
/*  1766 */                     /* --- codeobj entry --- */
/*  1767 */                     //
/*  1768 */                     // line 91:
/*  1769 */                     //     "ought to #pass #print free/total memory"
/*  1770 */                     //     ^
/*  1771 */                     //
/*  1772 */                     $currLineNo = 91;
/*  1773 */                     $currColNo = 4;
/*  1774 */ 
/*  1775 */                     var $str184 = new Sk.builtins['str']('ought to #pass #print free/total memory');
/*  1776 */                     //
/*  1777 */                     // line 92:
/*  1778 */                     //     pass
/*  1779 */                     //     ^
/*  1780 */                     //
/*  1781 */                     $currLineNo = 92;
/*  1782 */                     $currColNo = 4;
/*  1783 */ 
/*  1784 */                     return Sk.builtin.none.none$;
/*  1785 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1786 */                 }
/*  1787 */             } catch (err) {
/*  1788 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1789 */                     err = new Sk.builtin.ExternalError(err);
/*  1790 */                 }
/*  1791 */                 err.traceback.push({
/*  1792 */                     lineno: $currLineNo,
/*  1793 */                     colno: $currColNo,
/*  1794 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1795 */                 });
/*  1796 */                 if ($exc.length > 0) {
/*  1797 */                     $err = err;
/*  1798 */                     $blk = $exc.pop();
/*  1799 */                     continue;
/*  1800 */                 } else {
/*  1801 */                     throw err;
/*  1802 */                 }
/*  1803 */             }
/*  1804 */         }
/*  1805 */     });
/*  1806 */     var $scope186 = (function $time_construction187$(depth, debug) {
/*  1807 */         var i, niters, t_finish, t_start, temp_tree; /* locals */
/*  1808 */         var debug, debug, debug, debug, depth, depth, depth, depth, depth, i, i, niters, niters, niters, niters, t_finish, t_finish, t_start, t_start, temp_tree, temp_tree, temp_tree, temp_tree, temp_tree, $loadgbl188, $loadgbl195, $loadgbl195, $lattr196, $loadgbl198, $loadgbl199, $loadgbl198, $loadgbl199, $call200, $iter202, $loadgbl198, $loadgbl199, $call200, $call201, $iter202, $loadgbl204, $loadgbl206, $loadgbl208, $loadgbl208, $lattr209, $loadgbl212, $loadgbl212, $lattr213, $loadgbl215, $loadgbl216, $loadgbl215, $loadgbl216, $call217, $iter219, $loadgbl215, $loadgbl216, $call217, $call218, $iter219, $loadgbl221, $loadgbl223, $loadgbl223, $lattr224;
/*  1809 */         var $wakeFromSuspension = function() {
/*  1810 */             var susp = $scope186.$wakingSuspension;
/*  1811 */             delete $scope186.$wakingSuspension;
/*  1812 */             $blk = susp.$blk;
/*  1813 */             $loc = susp.$loc;
/*  1814 */             $gbl = susp.$gbl;
/*  1815 */             $exc = susp.$exc;
/*  1816 */             $err = susp.$err;
/*  1817 */             $postfinally = susp.$postfinally;
/*  1818 */             $currLineNo = susp.$lineno;
/*  1819 */             $currColNo = susp.$colno;
/*  1820 */             Sk.lastYield = Date.now();
/*  1821 */             debug = susp.$tmps.debug;
/*  1822 */             depth = susp.$tmps.depth;
/*  1823 */             i = susp.$tmps.i;
/*  1824 */             niters = susp.$tmps.niters;
/*  1825 */             t_finish = susp.$tmps.t_finish;
/*  1826 */             t_start = susp.$tmps.t_start;
/*  1827 */             temp_tree = susp.$tmps.temp_tree;
/*  1828 */             $loadgbl188 = susp.$tmps.$loadgbl188;
/*  1829 */             $loadgbl195 = susp.$tmps.$loadgbl195;
/*  1830 */             $lattr196 = susp.$tmps.$lattr196;
/*  1831 */             $loadgbl198 = susp.$tmps.$loadgbl198;
/*  1832 */             $loadgbl199 = susp.$tmps.$loadgbl199;
/*  1833 */             $call200 = susp.$tmps.$call200;
/*  1834 */             $iter202 = susp.$tmps.$iter202;
/*  1835 */             $call201 = susp.$tmps.$call201;
/*  1836 */             $loadgbl204 = susp.$tmps.$loadgbl204;
/*  1837 */             $loadgbl206 = susp.$tmps.$loadgbl206;
/*  1838 */             $loadgbl208 = susp.$tmps.$loadgbl208;
/*  1839 */             $lattr209 = susp.$tmps.$lattr209;
/*  1840 */             $loadgbl212 = susp.$tmps.$loadgbl212;
/*  1841 */             $lattr213 = susp.$tmps.$lattr213;
/*  1842 */             $loadgbl215 = susp.$tmps.$loadgbl215;
/*  1843 */             $loadgbl216 = susp.$tmps.$loadgbl216;
/*  1844 */             $call217 = susp.$tmps.$call217;
/*  1845 */             $iter219 = susp.$tmps.$iter219;
/*  1846 */             $call218 = susp.$tmps.$call218;
/*  1847 */             $loadgbl221 = susp.$tmps.$loadgbl221;
/*  1848 */             $loadgbl223 = susp.$tmps.$loadgbl223;
/*  1849 */             $lattr224 = susp.$tmps.$lattr224;
/*  1850 */             try {
/*  1851 */                 $ret = susp.child.resume();
/*  1852 */             } catch (err) {
/*  1853 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1854 */                     err = new Sk.builtin.ExternalError(err);
/*  1855 */                 }
/*  1856 */                 err.traceback.push({
/*  1857 */                     lineno: $currLineNo,
/*  1858 */                     colno: $currColNo,
/*  1859 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  1860 */                 });
/*  1861 */                 if ($exc.length > 0) {
/*  1862 */                     $err = err;
/*  1863 */                     $blk = $exc.pop();
/*  1864 */                 } else {
/*  1865 */                     throw err;
/*  1866 */                 }
/*  1867 */             }
/*  1868 */         };
/*  1869 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1870 */             var susp = new Sk.misceval.Suspension();
/*  1871 */             susp.child = $child;
/*  1872 */             susp.resume = function() {
/*  1873 */                 $scope186.$wakingSuspension = susp;
/*  1874 */                 return $scope186();
/*  1875 */             };
/*  1876 */             susp.data = susp.child.data;
/*  1877 */             susp.$blk = $blk;
/*  1878 */             susp.$loc = $loc;
/*  1879 */             susp.$gbl = $gbl;
/*  1880 */             susp.$exc = $exc;
/*  1881 */             susp.$err = $err;
/*  1882 */             susp.$postfinally = $postfinally;
/*  1883 */             susp.$filename = $filename;
/*  1884 */             susp.$lineno = $lineno;
/*  1885 */             susp.$colno = $colno;
/*  1886 */             susp.optional = susp.child.optional;
/*  1887 */             susp.$tmps = {
/*  1888 */                 "debug": debug,
/*  1889 */                 "depth": depth,
/*  1890 */                 "i": i,
/*  1891 */                 "niters": niters,
/*  1892 */                 "t_finish": t_finish,
/*  1893 */                 "t_start": t_start,
/*  1894 */                 "temp_tree": temp_tree,
/*  1895 */                 "$loadgbl188": $loadgbl188,
/*  1896 */                 "$loadgbl195": $loadgbl195,
/*  1897 */                 "$lattr196": $lattr196,
/*  1898 */                 "$loadgbl198": $loadgbl198,
/*  1899 */                 "$loadgbl199": $loadgbl199,
/*  1900 */                 "$call200": $call200,
/*  1901 */                 "$iter202": $iter202,
/*  1902 */                 "$call201": $call201,
/*  1903 */                 "$loadgbl204": $loadgbl204,
/*  1904 */                 "$loadgbl206": $loadgbl206,
/*  1905 */                 "$loadgbl208": $loadgbl208,
/*  1906 */                 "$lattr209": $lattr209,
/*  1907 */                 "$loadgbl212": $loadgbl212,
/*  1908 */                 "$lattr213": $lattr213,
/*  1909 */                 "$loadgbl215": $loadgbl215,
/*  1910 */                 "$loadgbl216": $loadgbl216,
/*  1911 */                 "$call217": $call217,
/*  1912 */                 "$iter219": $iter219,
/*  1913 */                 "$call218": $call218,
/*  1914 */                 "$loadgbl221": $loadgbl221,
/*  1915 */                 "$loadgbl223": $loadgbl223,
/*  1916 */                 "$lattr224": $lattr224
/*  1917 */             };
/*  1918 */             return susp;
/*  1919 */         };
/*  1920 */         var $blk = 0,
/*  1921 */             $exc = [],
/*  1922 */             $loc = {},
/*  1923 */             $gbl = this,
/*  1924 */             $err = undefined,
/*  1925 */             $ret = undefined,
/*  1926 */             $postfinally = undefined,
/*  1927 */             $currLineNo = undefined,
/*  1928 */             $currColNo = undefined;
/*  1929 */         if (typeof Sk.execStart === 'undefined') {
/*  1930 */             Sk.execStart = Date.now()
/*  1931 */         }
/*  1932 */         if (typeof Sk.lastYield === 'undefined') {
/*  1933 */             Sk.lastYield = Date.now()
/*  1934 */         }
/*  1935 */         if ($scope186.$wakingSuspension !== undefined) {
/*  1936 */             $wakeFromSuspension();
/*  1937 */         } else {
/*  1938 */             if (debug === undefined) debug = $scope186.$defaults[0];
/*  1939 */             Sk.builtin.pyCheckArgs("time_construction", arguments, 1, 2, false, false);
/*  1940 */         }
/*  1941 */         while (true) {
/*  1942 */             try {
/*  1943 */                 var $dateNow = Date.now();
/*  1944 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1945 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1946 */                 }
/*  1947 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1948 */                     var $susp = $saveSuspension({
/*  1949 */                         data: {
/*  1950 */                             type: 'Sk.yield'
/*  1951 */                         },
/*  1952 */                         resume: function() {}
/*  1953 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  1954 */                     $susp.$blk = $blk;
/*  1955 */                     $susp.optional = true;
/*  1956 */                     return $susp;
/*  1957 */                 }
/*  1958 */                 switch ($blk) {
/*  1959 */                 case 0:
/*  1960 */                     /* --- codeobj entry --- */
/*  1961 */                     if (depth === undefined) {
/*  1962 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1963 */                     }
/*  1964 */                     if (debug === undefined) {
/*  1965 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  1966 */                     }
/*  1967 */                     if (debug === undefined) {
/*  1968 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  1969 */                     }
/*  1970 */ 
/*  1971 */                     //
/*  1972 */                     // line 95:
/*  1973 */                     //     niters = num_iters(depth)
/*  1974 */                     //     ^
/*  1975 */                     //
/*  1976 */                     $currLineNo = 95;
/*  1977 */                     $currColNo = 4;
/*  1978 */ 
/*  1979 */                     var $loadgbl188 = Sk.misceval.loadname('num_iters', $gbl);
/*  1980 */                     if (depth === undefined) {
/*  1981 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  1982 */                     }
/*  1983 */                     $ret;
/*  1984 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl188, depth);
/*  1985 */                     $blk = 1; /* allowing case fallthrough */
/*  1986 */                 case 1:
/*  1987 */                     /* --- function return or resume suspension --- */
/*  1988 */                     if ($ret && $ret.$isSuspension) {
/*  1989 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 95, 13);
/*  1990 */                     }
/*  1991 */                     var $call189 = $ret;
/*  1992 */                     //
/*  1993 */                     // line 95:
/*  1994 */                     //     niters = num_iters(depth)
/*  1995 */                     //              ^
/*  1996 */                     //
/*  1997 */                     $currLineNo = 95;
/*  1998 */                     $currColNo = 13;
/*  1999 */ 
/*  2000 */                     niters = $call189;
/*  2001 */                     //
/*  2002 */                     // line 96:
/*  2003 */                     //     print("Creating %d trees of depth %d" % (niters, depth))
/*  2004 */                     //     ^
/*  2005 */                     //
/*  2006 */                     $currLineNo = 96;
/*  2007 */                     $currColNo = 4;
/*  2008 */ 
/*  2009 */                     var $str190 = new Sk.builtins['str']('Creating %d trees of depth %d');
/*  2010 */                     if (niters === undefined) {
/*  2011 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  2012 */                     }
/*  2013 */                     var $elem191 = niters;
/*  2014 */                     if (depth === undefined) {
/*  2015 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  2016 */                     }
/*  2017 */                     var $elem192 = depth;
/*  2018 */                     var $loadtuple193 = new Sk.builtins['tuple']([$elem191, $elem192]);
/*  2019 */                     var $binop194 = Sk.abstr.numberBinOp($str190, $loadtuple193, 'Mod');
/*  2020 */                     Sk.misceval.print_(new Sk.builtins['str']($binop194).v);
/*  2021 */                     Sk.misceval.print_("\n");
/*  2022 */                     //
/*  2023 */                     // line 97:
/*  2024 */                     //     t_start = time.time()
/*  2025 */                     //     ^
/*  2026 */                     //
/*  2027 */                     $currLineNo = 97;
/*  2028 */                     $currColNo = 4;
/*  2029 */ 
/*  2030 */                     var $loadgbl195 = Sk.misceval.loadname('time', $gbl);
/*  2031 */                     $ret = Sk.abstr.gattr($loadgbl195, 'time', true);
/*  2032 */                     $blk = 2; /* allowing case fallthrough */
/*  2033 */                 case 2:
/*  2034 */                     /* --- function return or resume suspension --- */
/*  2035 */                     if ($ret && $ret.$isSuspension) {
/*  2036 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 97, 14);
/*  2037 */                     }
/*  2038 */                     var $lattr196 = $ret;
/*  2039 */                     $ret;
/*  2040 */                     $ret = Sk.misceval.callsimOrSuspend($lattr196);
/*  2041 */                     $blk = 3; /* allowing case fallthrough */
/*  2042 */                 case 3:
/*  2043 */                     /* --- function return or resume suspension --- */
/*  2044 */                     if ($ret && $ret.$isSuspension) {
/*  2045 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 97, 14);
/*  2046 */                     }
/*  2047 */                     var $call197 = $ret;
/*  2048 */                     //
/*  2049 */                     // line 97:
/*  2050 */                     //     t_start = time.time()
/*  2051 */                     //               ^
/*  2052 */                     //
/*  2053 */                     $currLineNo = 97;
/*  2054 */                     $currColNo = 14;
/*  2055 */ 
/*  2056 */                     t_start = $call197;
/*  2057 */                     //
/*  2058 */                     // line 98:
/*  2059 */                     //     for i in range(int(niters)):
/*  2060 */                     //     ^
/*  2061 */                     //
/*  2062 */                     $currLineNo = 98;
/*  2063 */                     $currColNo = 4;
/*  2064 */ 
/*  2065 */                     var $loadgbl198 = Sk.misceval.loadname('range', $gbl);
/*  2066 */                     var $loadgbl199 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  2067 */                     if (niters === undefined) {
/*  2068 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  2069 */                     }
/*  2070 */                     $ret;
/*  2071 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl199, niters);
/*  2072 */                     $blk = 7; /* allowing case fallthrough */
/*  2073 */                 case 7:
/*  2074 */                     /* --- function return or resume suspension --- */
/*  2075 */                     if ($ret && $ret.$isSuspension) {
/*  2076 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 19);
/*  2077 */                     }
/*  2078 */                     var $call200 = $ret;
/*  2079 */                     //
/*  2080 */                     // line 98:
/*  2081 */                     //     for i in range(int(niters)):
/*  2082 */                     //                    ^
/*  2083 */                     //
/*  2084 */                     $currLineNo = 98;
/*  2085 */                     $currColNo = 19;
/*  2086 */ 
/*  2087 */                     $ret;
/*  2088 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl198, $call200);
/*  2089 */                     $blk = 8; /* allowing case fallthrough */
/*  2090 */                 case 8:
/*  2091 */                     /* --- function return or resume suspension --- */
/*  2092 */                     if ($ret && $ret.$isSuspension) {
/*  2093 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 13);
/*  2094 */                     }
/*  2095 */                     var $call201 = $ret;
/*  2096 */                     //
/*  2097 */                     // line 98:
/*  2098 */                     //     for i in range(int(niters)):
/*  2099 */                     //              ^
/*  2100 */                     //
/*  2101 */                     $currLineNo = 98;
/*  2102 */                     $currColNo = 13;
/*  2103 */ 
/*  2104 */                     var $iter202 = Sk.abstr.iter($call201);
/*  2105 */                     $blk = 4; /* allowing case fallthrough */
/*  2106 */                 case 4:
/*  2107 */                     /* --- for start --- */
/*  2108 */                     $ret = Sk.abstr.iternext($iter202, true);
/*  2109 */                     $blk = 9; /* allowing case fallthrough */
/*  2110 */                 case 9:
/*  2111 */                     /* --- function return or resume suspension --- */
/*  2112 */                     if ($ret && $ret.$isSuspension) {
/*  2113 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 98, 4);
/*  2114 */                     }
/*  2115 */                     var $next203 = $ret;
/*  2116 */                     if ($next203 === undefined) {
/*  2117 */                         $blk = 5;
/*  2118 */                         continue;
/*  2119 */                     }
/*  2120 */                     i = $next203;
/*  2121 */                     //
/*  2122 */                     // line 99:
/*  2123 */                     //         temp_tree = Node()
/*  2124 */                     //         ^
/*  2125 */                     //
/*  2126 */                     $currLineNo = 99;
/*  2127 */                     $currColNo = 8;
/*  2128 */ 
/*  2129 */                     var $loadgbl204 = Sk.misceval.loadname('Node', $gbl);
/*  2130 */                     $ret;
/*  2131 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl204);
/*  2132 */                     $blk = 10; /* allowing case fallthrough */
/*  2133 */                 case 10:
/*  2134 */                     /* --- function return or resume suspension --- */
/*  2135 */                     if ($ret && $ret.$isSuspension) {
/*  2136 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 99, 20);
/*  2137 */                     }
/*  2138 */                     var $call205 = $ret;
/*  2139 */                     //
/*  2140 */                     // line 99:
/*  2141 */                     //         temp_tree = Node()
/*  2142 */                     //                     ^
/*  2143 */                     //
/*  2144 */                     $currLineNo = 99;
/*  2145 */                     $currColNo = 20;
/*  2146 */ 
/*  2147 */                     temp_tree = $call205;
/*  2148 */                     //
/*  2149 */                     // line 100:
/*  2150 */                     //         populate(depth, temp_tree)
/*  2151 */                     //         ^
/*  2152 */                     //
/*  2153 */                     $currLineNo = 100;
/*  2154 */                     $currColNo = 8;
/*  2155 */ 
/*  2156 */                     var $loadgbl206 = Sk.misceval.loadname('populate', $gbl);
/*  2157 */                     if (depth === undefined) {
/*  2158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  2159 */                     }
/*  2160 */                     if (temp_tree === undefined) {
/*  2161 */                         throw new Sk.builtin.UnboundLocalError('local variable \'temp_tree\' referenced before assignment');
/*  2162 */                     }
/*  2163 */                     $ret;
/*  2164 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl206, depth, temp_tree);
/*  2165 */                     $blk = 11; /* allowing case fallthrough */
/*  2166 */                 case 11:
/*  2167 */                     /* --- function return or resume suspension --- */
/*  2168 */                     if ($ret && $ret.$isSuspension) {
/*  2169 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 100, 8);
/*  2170 */                     }
/*  2171 */                     var $call207 = $ret;
/*  2172 */                     //
/*  2173 */                     // line 100:
/*  2174 */                     //         populate(depth, temp_tree)
/*  2175 */                     //         ^
/*  2176 */                     //
/*  2177 */                     $currLineNo = 100;
/*  2178 */                     $currColNo = 8;
/*  2179 */ 
/*  2180 */ 
/*  2181 */                     //
/*  2182 */                     // line 101:
/*  2183 */                     //         temp_tree = None
/*  2184 */                     //         ^
/*  2185 */                     //
/*  2186 */                     $currLineNo = 101;
/*  2187 */                     $currColNo = 8;
/*  2188 */ 
/*  2189 */                     temp_tree = Sk.builtin.none.none$;
/*  2190 */                     $blk = 4; /* jump */
/*  2191 */                     continue;
/*  2192 */                 case 5:
/*  2193 */                     /* --- for cleanup --- */
/*  2194 */                     $blk = 6; /* allowing case fallthrough */
/*  2195 */                 case 6:
/*  2196 */                     /* --- for end --- */
/*  2197 */                     //
/*  2198 */                     // line 102:
/*  2199 */                     //     t_finish = time.time()
/*  2200 */                     //     ^
/*  2201 */                     //
/*  2202 */                     $currLineNo = 102;
/*  2203 */                     $currColNo = 4;
/*  2204 */ 
/*  2205 */                     var $loadgbl208 = Sk.misceval.loadname('time', $gbl);
/*  2206 */                     $ret = Sk.abstr.gattr($loadgbl208, 'time', true);
/*  2207 */                     $blk = 12; /* allowing case fallthrough */
/*  2208 */                 case 12:
/*  2209 */                     /* --- function return or resume suspension --- */
/*  2210 */                     if ($ret && $ret.$isSuspension) {
/*  2211 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 102, 15);
/*  2212 */                     }
/*  2213 */                     var $lattr209 = $ret;
/*  2214 */                     $ret;
/*  2215 */                     $ret = Sk.misceval.callsimOrSuspend($lattr209);
/*  2216 */                     $blk = 13; /* allowing case fallthrough */
/*  2217 */                 case 13:
/*  2218 */                     /* --- function return or resume suspension --- */
/*  2219 */                     if ($ret && $ret.$isSuspension) {
/*  2220 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 102, 15);
/*  2221 */                     }
/*  2222 */                     var $call210 = $ret;
/*  2223 */                     //
/*  2224 */                     // line 102:
/*  2225 */                     //     t_finish = time.time()
/*  2226 */                     //                ^
/*  2227 */                     //
/*  2228 */                     $currLineNo = 102;
/*  2229 */                     $currColNo = 15;
/*  2230 */ 
/*  2231 */                     t_finish = $call210;
/*  2232 */                     //
/*  2233 */                     // line 103:
/*  2234 */                     //     if debug:
/*  2235 */                     //     ^
/*  2236 */                     //
/*  2237 */                     $currLineNo = 103;
/*  2238 */                     $currColNo = 4;
/*  2239 */ 
/*  2240 */                     if (debug === undefined) {
/*  2241 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2242 */                     }
/*  2243 */                     var $jfalse211 = (debug === false || !Sk.misceval.isTrue(debug));
/*  2244 */                     if ($jfalse211) { /*test failed */
/*  2245 */                         $blk = 14;
/*  2246 */                         continue;
/*  2247 */                     }
/*  2248 */                     //
/*  2249 */                     // line 104:
/*  2250 */                     //         pass #pass #print("\tTop down constrution took %f ms" % ((t_finish-t_start)*1000.))
/*  2251 */                     //         ^
/*  2252 */                     //
/*  2253 */                     $currLineNo = 104;
/*  2254 */                     $currColNo = 8;
/*  2255 */ 
/*  2256 */                     $blk = 14; /* allowing case fallthrough */
/*  2257 */                 case 14:
/*  2258 */                     /* --- end of if --- */
/*  2259 */                     //
/*  2260 */                     // line 105:
/*  2261 */                     //     t_start = time.time()
/*  2262 */                     //     ^
/*  2263 */                     //
/*  2264 */                     $currLineNo = 105;
/*  2265 */                     $currColNo = 4;
/*  2266 */ 
/*  2267 */                     var $loadgbl212 = Sk.misceval.loadname('time', $gbl);
/*  2268 */                     $ret = Sk.abstr.gattr($loadgbl212, 'time', true);
/*  2269 */                     $blk = 15; /* allowing case fallthrough */
/*  2270 */                 case 15:
/*  2271 */                     /* --- function return or resume suspension --- */
/*  2272 */                     if ($ret && $ret.$isSuspension) {
/*  2273 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 105, 14);
/*  2274 */                     }
/*  2275 */                     var $lattr213 = $ret;
/*  2276 */                     $ret;
/*  2277 */                     $ret = Sk.misceval.callsimOrSuspend($lattr213);
/*  2278 */                     $blk = 16; /* allowing case fallthrough */
/*  2279 */                 case 16:
/*  2280 */                     /* --- function return or resume suspension --- */
/*  2281 */                     if ($ret && $ret.$isSuspension) {
/*  2282 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 105, 14);
/*  2283 */                     }
/*  2284 */                     var $call214 = $ret;
/*  2285 */                     //
/*  2286 */                     // line 105:
/*  2287 */                     //     t_start = time.time()
/*  2288 */                     //               ^
/*  2289 */                     //
/*  2290 */                     $currLineNo = 105;
/*  2291 */                     $currColNo = 14;
/*  2292 */ 
/*  2293 */                     t_start = $call214;
/*  2294 */                     //
/*  2295 */                     // line 106:
/*  2296 */                     //     for i in range(int(niters)):
/*  2297 */                     //     ^
/*  2298 */                     //
/*  2299 */                     $currLineNo = 106;
/*  2300 */                     $currColNo = 4;
/*  2301 */ 
/*  2302 */                     var $loadgbl215 = Sk.misceval.loadname('range', $gbl);
/*  2303 */                     var $loadgbl216 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  2304 */                     if (niters === undefined) {
/*  2305 */                         throw new Sk.builtin.UnboundLocalError('local variable \'niters\' referenced before assignment');
/*  2306 */                     }
/*  2307 */                     $ret;
/*  2308 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl216, niters);
/*  2309 */                     $blk = 20; /* allowing case fallthrough */
/*  2310 */                 case 20:
/*  2311 */                     /* --- function return or resume suspension --- */
/*  2312 */                     if ($ret && $ret.$isSuspension) {
/*  2313 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 19);
/*  2314 */                     }
/*  2315 */                     var $call217 = $ret;
/*  2316 */                     //
/*  2317 */                     // line 106:
/*  2318 */                     //     for i in range(int(niters)):
/*  2319 */                     //                    ^
/*  2320 */                     //
/*  2321 */                     $currLineNo = 106;
/*  2322 */                     $currColNo = 19;
/*  2323 */ 
/*  2324 */                     $ret;
/*  2325 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl215, $call217);
/*  2326 */                     $blk = 21; /* allowing case fallthrough */
/*  2327 */                 case 21:
/*  2328 */                     /* --- function return or resume suspension --- */
/*  2329 */                     if ($ret && $ret.$isSuspension) {
/*  2330 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 13);
/*  2331 */                     }
/*  2332 */                     var $call218 = $ret;
/*  2333 */                     //
/*  2334 */                     // line 106:
/*  2335 */                     //     for i in range(int(niters)):
/*  2336 */                     //              ^
/*  2337 */                     //
/*  2338 */                     $currLineNo = 106;
/*  2339 */                     $currColNo = 13;
/*  2340 */ 
/*  2341 */                     var $iter219 = Sk.abstr.iter($call218);
/*  2342 */                     $blk = 17; /* allowing case fallthrough */
/*  2343 */                 case 17:
/*  2344 */                     /* --- for start --- */
/*  2345 */                     $ret = Sk.abstr.iternext($iter219, true);
/*  2346 */                     $blk = 22; /* allowing case fallthrough */
/*  2347 */                 case 22:
/*  2348 */                     /* --- function return or resume suspension --- */
/*  2349 */                     if ($ret && $ret.$isSuspension) {
/*  2350 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 106, 4);
/*  2351 */                     }
/*  2352 */                     var $next220 = $ret;
/*  2353 */                     if ($next220 === undefined) {
/*  2354 */                         $blk = 18;
/*  2355 */                         continue;
/*  2356 */                     }
/*  2357 */                     i = $next220;
/*  2358 */                     //
/*  2359 */                     // line 107:
/*  2360 */                     //         temp_tree = make_tree(depth)
/*  2361 */                     //         ^
/*  2362 */                     //
/*  2363 */                     $currLineNo = 107;
/*  2364 */                     $currColNo = 8;
/*  2365 */ 
/*  2366 */                     var $loadgbl221 = Sk.misceval.loadname('make_tree', $gbl);
/*  2367 */                     if (depth === undefined) {
/*  2368 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depth\' referenced before assignment');
/*  2369 */                     }
/*  2370 */                     $ret;
/*  2371 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl221, depth);
/*  2372 */                     $blk = 23; /* allowing case fallthrough */
/*  2373 */                 case 23:
/*  2374 */                     /* --- function return or resume suspension --- */
/*  2375 */                     if ($ret && $ret.$isSuspension) {
/*  2376 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 107, 20);
/*  2377 */                     }
/*  2378 */                     var $call222 = $ret;
/*  2379 */                     //
/*  2380 */                     // line 107:
/*  2381 */                     //         temp_tree = make_tree(depth)
/*  2382 */                     //                     ^
/*  2383 */                     //
/*  2384 */                     $currLineNo = 107;
/*  2385 */                     $currColNo = 20;
/*  2386 */ 
/*  2387 */                     temp_tree = $call222;
/*  2388 */                     //
/*  2389 */                     // line 108:
/*  2390 */                     //         temp_tree = None
/*  2391 */                     //         ^
/*  2392 */                     //
/*  2393 */                     $currLineNo = 108;
/*  2394 */                     $currColNo = 8;
/*  2395 */ 
/*  2396 */                     temp_tree = Sk.builtin.none.none$;
/*  2397 */                     $blk = 17; /* jump */
/*  2398 */                     continue;
/*  2399 */                 case 18:
/*  2400 */                     /* --- for cleanup --- */
/*  2401 */                     $blk = 19; /* allowing case fallthrough */
/*  2402 */                 case 19:
/*  2403 */                     /* --- for end --- */
/*  2404 */                     //
/*  2405 */                     // line 109:
/*  2406 */                     //     t_finish = time.time()
/*  2407 */                     //     ^
/*  2408 */                     //
/*  2409 */                     $currLineNo = 109;
/*  2410 */                     $currColNo = 4;
/*  2411 */ 
/*  2412 */                     var $loadgbl223 = Sk.misceval.loadname('time', $gbl);
/*  2413 */                     $ret = Sk.abstr.gattr($loadgbl223, 'time', true);
/*  2414 */                     $blk = 24; /* allowing case fallthrough */
/*  2415 */                 case 24:
/*  2416 */                     /* --- function return or resume suspension --- */
/*  2417 */                     if ($ret && $ret.$isSuspension) {
/*  2418 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 109, 15);
/*  2419 */                     }
/*  2420 */                     var $lattr224 = $ret;
/*  2421 */                     $ret;
/*  2422 */                     $ret = Sk.misceval.callsimOrSuspend($lattr224);
/*  2423 */                     $blk = 25; /* allowing case fallthrough */
/*  2424 */                 case 25:
/*  2425 */                     /* --- function return or resume suspension --- */
/*  2426 */                     if ($ret && $ret.$isSuspension) {
/*  2427 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 109, 15);
/*  2428 */                     }
/*  2429 */                     var $call225 = $ret;
/*  2430 */                     //
/*  2431 */                     // line 109:
/*  2432 */                     //     t_finish = time.time()
/*  2433 */                     //                ^
/*  2434 */                     //
/*  2435 */                     $currLineNo = 109;
/*  2436 */                     $currColNo = 15;
/*  2437 */ 
/*  2438 */                     t_finish = $call225;
/*  2439 */                     //
/*  2440 */                     // line 110:
/*  2441 */                     //     if debug:
/*  2442 */                     //     ^
/*  2443 */                     //
/*  2444 */                     $currLineNo = 110;
/*  2445 */                     $currColNo = 4;
/*  2446 */ 
/*  2447 */                     if (debug === undefined) {
/*  2448 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2449 */                     }
/*  2450 */                     var $jfalse226 = (debug === false || !Sk.misceval.isTrue(debug));
/*  2451 */                     if ($jfalse226) { /*test failed */
/*  2452 */                         $blk = 26;
/*  2453 */                         continue;
/*  2454 */                     }
/*  2455 */                     //
/*  2456 */                     // line 111:
/*  2457 */                     //         pass #pass #print("\tBottom up constrution took %f ms" % ((t_finish-t_start)*1000.))
/*  2458 */                     //         ^
/*  2459 */                     //
/*  2460 */                     $currLineNo = 111;
/*  2461 */                     $currColNo = 8;
/*  2462 */ 
/*  2463 */                     $blk = 26; /* allowing case fallthrough */
/*  2464 */                 case 26:
/*  2465 */                     /* --- end of if --- */
/*  2466 */                     return Sk.builtin.none.none$;
/*  2467 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2468 */                 }
/*  2469 */             } catch (err) {
/*  2470 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2471 */                     err = new Sk.builtin.ExternalError(err);
/*  2472 */                 }
/*  2473 */                 err.traceback.push({
/*  2474 */                     lineno: $currLineNo,
/*  2475 */                     colno: $currColNo,
/*  2476 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2477 */                 });
/*  2478 */                 if ($exc.length > 0) {
/*  2479 */                     $err = err;
/*  2480 */                     $blk = $exc.pop();
/*  2481 */                     continue;
/*  2482 */                 } else {
/*  2483 */                     throw err;
/*  2484 */                 }
/*  2485 */             }
/*  2486 */         }
/*  2487 */     });
/*  2488 */     var $scope235 = (function $time_constructions236$(depths, debug) {
/*  2489 */         var d; /* locals */
/*  2490 */         var d, d, debug, debug, debug, depths, depths, $iter237, $iter237, $loadgbl239;
/*  2491 */         var $wakeFromSuspension = function() {
/*  2492 */             var susp = $scope235.$wakingSuspension;
/*  2493 */             delete $scope235.$wakingSuspension;
/*  2494 */             $blk = susp.$blk;
/*  2495 */             $loc = susp.$loc;
/*  2496 */             $gbl = susp.$gbl;
/*  2497 */             $exc = susp.$exc;
/*  2498 */             $err = susp.$err;
/*  2499 */             $postfinally = susp.$postfinally;
/*  2500 */             $currLineNo = susp.$lineno;
/*  2501 */             $currColNo = susp.$colno;
/*  2502 */             Sk.lastYield = Date.now();
/*  2503 */             d = susp.$tmps.d;
/*  2504 */             debug = susp.$tmps.debug;
/*  2505 */             depths = susp.$tmps.depths;
/*  2506 */             $iter237 = susp.$tmps.$iter237;
/*  2507 */             $loadgbl239 = susp.$tmps.$loadgbl239;
/*  2508 */             try {
/*  2509 */                 $ret = susp.child.resume();
/*  2510 */             } catch (err) {
/*  2511 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2512 */                     err = new Sk.builtin.ExternalError(err);
/*  2513 */                 }
/*  2514 */                 err.traceback.push({
/*  2515 */                     lineno: $currLineNo,
/*  2516 */                     colno: $currColNo,
/*  2517 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2518 */                 });
/*  2519 */                 if ($exc.length > 0) {
/*  2520 */                     $err = err;
/*  2521 */                     $blk = $exc.pop();
/*  2522 */                 } else {
/*  2523 */                     throw err;
/*  2524 */                 }
/*  2525 */             }
/*  2526 */         };
/*  2527 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2528 */             var susp = new Sk.misceval.Suspension();
/*  2529 */             susp.child = $child;
/*  2530 */             susp.resume = function() {
/*  2531 */                 $scope235.$wakingSuspension = susp;
/*  2532 */                 return $scope235();
/*  2533 */             };
/*  2534 */             susp.data = susp.child.data;
/*  2535 */             susp.$blk = $blk;
/*  2536 */             susp.$loc = $loc;
/*  2537 */             susp.$gbl = $gbl;
/*  2538 */             susp.$exc = $exc;
/*  2539 */             susp.$err = $err;
/*  2540 */             susp.$postfinally = $postfinally;
/*  2541 */             susp.$filename = $filename;
/*  2542 */             susp.$lineno = $lineno;
/*  2543 */             susp.$colno = $colno;
/*  2544 */             susp.optional = susp.child.optional;
/*  2545 */             susp.$tmps = {
/*  2546 */                 "d": d,
/*  2547 */                 "debug": debug,
/*  2548 */                 "depths": depths,
/*  2549 */                 "$iter237": $iter237,
/*  2550 */                 "$loadgbl239": $loadgbl239
/*  2551 */             };
/*  2552 */             return susp;
/*  2553 */         };
/*  2554 */         var $blk = 0,
/*  2555 */             $exc = [],
/*  2556 */             $loc = {},
/*  2557 */             $gbl = this,
/*  2558 */             $err = undefined,
/*  2559 */             $ret = undefined,
/*  2560 */             $postfinally = undefined,
/*  2561 */             $currLineNo = undefined,
/*  2562 */             $currColNo = undefined;
/*  2563 */         if (typeof Sk.execStart === 'undefined') {
/*  2564 */             Sk.execStart = Date.now()
/*  2565 */         }
/*  2566 */         if (typeof Sk.lastYield === 'undefined') {
/*  2567 */             Sk.lastYield = Date.now()
/*  2568 */         }
/*  2569 */         if ($scope235.$wakingSuspension !== undefined) {
/*  2570 */             $wakeFromSuspension();
/*  2571 */         } else {
/*  2572 */             if (debug === undefined) debug = $scope235.$defaults[0];
/*  2573 */             Sk.builtin.pyCheckArgs("time_constructions", arguments, 1, 2, false, false);
/*  2574 */         }
/*  2575 */         while (true) {
/*  2576 */             try {
/*  2577 */                 var $dateNow = Date.now();
/*  2578 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2579 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2580 */                 }
/*  2581 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2582 */                     var $susp = $saveSuspension({
/*  2583 */                         data: {
/*  2584 */                             type: 'Sk.yield'
/*  2585 */                         },
/*  2586 */                         resume: function() {}
/*  2587 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  2588 */                     $susp.$blk = $blk;
/*  2589 */                     $susp.optional = true;
/*  2590 */                     return $susp;
/*  2591 */                 }
/*  2592 */                 switch ($blk) {
/*  2593 */                 case 0:
/*  2594 */                     /* --- codeobj entry --- */
/*  2595 */                     if (depths === undefined) {
/*  2596 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2597 */                     }
/*  2598 */                     if (debug === undefined) {
/*  2599 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2600 */                     }
/*  2601 */                     if (debug === undefined) {
/*  2602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2603 */                     }
/*  2604 */ 
/*  2605 */                     //
/*  2606 */                     // line 116:
/*  2607 */                     //     for d in depths:
/*  2608 */                     //     ^
/*  2609 */                     //
/*  2610 */                     $currLineNo = 116;
/*  2611 */                     $currColNo = 4;
/*  2612 */ 
/*  2613 */                     if (depths === undefined) {
/*  2614 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2615 */                     }
/*  2616 */                     var $iter237 = Sk.abstr.iter(depths);
/*  2617 */                     $blk = 1; /* allowing case fallthrough */
/*  2618 */                 case 1:
/*  2619 */                     /* --- for start --- */
/*  2620 */                     $ret = Sk.abstr.iternext($iter237, true);
/*  2621 */                     $blk = 4; /* allowing case fallthrough */
/*  2622 */                 case 4:
/*  2623 */                     /* --- function return or resume suspension --- */
/*  2624 */                     if ($ret && $ret.$isSuspension) {
/*  2625 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 116, 4);
/*  2626 */                     }
/*  2627 */                     var $next238 = $ret;
/*  2628 */                     if ($next238 === undefined) {
/*  2629 */                         $blk = 2;
/*  2630 */                         continue;
/*  2631 */                     }
/*  2632 */                     d = $next238;
/*  2633 */                     //
/*  2634 */                     // line 117:
/*  2635 */                     //         time_construction(d, debug)
/*  2636 */                     //         ^
/*  2637 */                     //
/*  2638 */                     $currLineNo = 117;
/*  2639 */                     $currColNo = 8;
/*  2640 */ 
/*  2641 */                     var $loadgbl239 = Sk.misceval.loadname('time_construction', $gbl);
/*  2642 */                     if (d === undefined) {
/*  2643 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  2644 */                     }
/*  2645 */                     if (debug === undefined) {
/*  2646 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2647 */                     }
/*  2648 */                     $ret;
/*  2649 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl239, d, debug);
/*  2650 */                     $blk = 5; /* allowing case fallthrough */
/*  2651 */                 case 5:
/*  2652 */                     /* --- function return or resume suspension --- */
/*  2653 */                     if ($ret && $ret.$isSuspension) {
/*  2654 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 117, 8);
/*  2655 */                     }
/*  2656 */                     var $call240 = $ret;
/*  2657 */                     //
/*  2658 */                     // line 117:
/*  2659 */                     //         time_construction(d, debug)
/*  2660 */                     //         ^
/*  2661 */                     //
/*  2662 */                     $currLineNo = 117;
/*  2663 */                     $currColNo = 8;
/*  2664 */ 
/*  2665 */                     $blk = 1; /* jump */
/*  2666 */                     continue;
/*  2667 */                 case 2:
/*  2668 */                     /* --- for cleanup --- */
/*  2669 */                     $blk = 3; /* allowing case fallthrough */
/*  2670 */                 case 3:
/*  2671 */                     /* --- for end --- */
/*  2672 */                     return Sk.builtin.none.none$;
/*  2673 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2674 */                 }
/*  2675 */             } catch (err) {
/*  2676 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2677 */                     err = new Sk.builtin.ExternalError(err);
/*  2678 */                 }
/*  2679 */                 err.traceback.push({
/*  2680 */                     lineno: $currLineNo,
/*  2681 */                     colno: $currColNo,
/*  2682 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2683 */                 });
/*  2684 */                 if ($exc.length > 0) {
/*  2685 */                     $err = err;
/*  2686 */                     $blk = $exc.pop();
/*  2687 */                     continue;
/*  2688 */                 } else {
/*  2689 */                     throw err;
/*  2690 */                 }
/*  2691 */             }
/*  2692 */         }
/*  2693 */     });
/*  2694 */     var $scope242 = (function $time_parallel_constructions243$(depths, nthreads, debug) {
/*  2695 */         var debug, debug, depths, nthreads;
/*  2696 */         var $wakeFromSuspension = function() {
/*  2697 */             var susp = $scope242.$wakingSuspension;
/*  2698 */             delete $scope242.$wakingSuspension;
/*  2699 */             $blk = susp.$blk;
/*  2700 */             $loc = susp.$loc;
/*  2701 */             $gbl = susp.$gbl;
/*  2702 */             $exc = susp.$exc;
/*  2703 */             $err = susp.$err;
/*  2704 */             $postfinally = susp.$postfinally;
/*  2705 */             $currLineNo = susp.$lineno;
/*  2706 */             $currColNo = susp.$colno;
/*  2707 */             Sk.lastYield = Date.now();
/*  2708 */             debug = susp.$tmps.debug;
/*  2709 */             depths = susp.$tmps.depths;
/*  2710 */             nthreads = susp.$tmps.nthreads;
/*  2711 */             try {
/*  2712 */                 $ret = susp.child.resume();
/*  2713 */             } catch (err) {
/*  2714 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2715 */                     err = new Sk.builtin.ExternalError(err);
/*  2716 */                 }
/*  2717 */                 err.traceback.push({
/*  2718 */                     lineno: $currLineNo,
/*  2719 */                     colno: $currColNo,
/*  2720 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2721 */                 });
/*  2722 */                 if ($exc.length > 0) {
/*  2723 */                     $err = err;
/*  2724 */                     $blk = $exc.pop();
/*  2725 */                 } else {
/*  2726 */                     throw err;
/*  2727 */                 }
/*  2728 */             }
/*  2729 */         };
/*  2730 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2731 */             var susp = new Sk.misceval.Suspension();
/*  2732 */             susp.child = $child;
/*  2733 */             susp.resume = function() {
/*  2734 */                 $scope242.$wakingSuspension = susp;
/*  2735 */                 return $scope242();
/*  2736 */             };
/*  2737 */             susp.data = susp.child.data;
/*  2738 */             susp.$blk = $blk;
/*  2739 */             susp.$loc = $loc;
/*  2740 */             susp.$gbl = $gbl;
/*  2741 */             susp.$exc = $exc;
/*  2742 */             susp.$err = $err;
/*  2743 */             susp.$postfinally = $postfinally;
/*  2744 */             susp.$filename = $filename;
/*  2745 */             susp.$lineno = $lineno;
/*  2746 */             susp.$colno = $colno;
/*  2747 */             susp.optional = susp.child.optional;
/*  2748 */             susp.$tmps = {
/*  2749 */                 "debug": debug,
/*  2750 */                 "depths": depths,
/*  2751 */                 "nthreads": nthreads
/*  2752 */             };
/*  2753 */             return susp;
/*  2754 */         };
/*  2755 */         var $blk = 0,
/*  2756 */             $exc = [],
/*  2757 */             $loc = {},
/*  2758 */             $gbl = this,
/*  2759 */             $err = undefined,
/*  2760 */             $ret = undefined,
/*  2761 */             $postfinally = undefined,
/*  2762 */             $currLineNo = undefined,
/*  2763 */             $currColNo = undefined;
/*  2764 */         if (typeof Sk.execStart === 'undefined') {
/*  2765 */             Sk.execStart = Date.now()
/*  2766 */         }
/*  2767 */         if (typeof Sk.lastYield === 'undefined') {
/*  2768 */             Sk.lastYield = Date.now()
/*  2769 */         }
/*  2770 */         if ($scope242.$wakingSuspension !== undefined) {
/*  2771 */             $wakeFromSuspension();
/*  2772 */         } else {
/*  2773 */             if (debug === undefined) debug = $scope242.$defaults[0];
/*  2774 */             Sk.builtin.pyCheckArgs("time_parallel_constructions", arguments, 2, 3, false, false);
/*  2775 */         }
/*  2776 */         while (true) {
/*  2777 */             try {
/*  2778 */                 var $dateNow = Date.now();
/*  2779 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2780 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2781 */                 }
/*  2782 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2783 */                     var $susp = $saveSuspension({
/*  2784 */                         data: {
/*  2785 */                             type: 'Sk.yield'
/*  2786 */                         },
/*  2787 */                         resume: function() {}
/*  2788 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  2789 */                     $susp.$blk = $blk;
/*  2790 */                     $susp.optional = true;
/*  2791 */                     return $susp;
/*  2792 */                 }
/*  2793 */                 switch ($blk) {
/*  2794 */                 case 0:
/*  2795 */                     /* --- codeobj entry --- */
/*  2796 */                     if (depths === undefined) {
/*  2797 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  2798 */                     }
/*  2799 */                     if (nthreads === undefined) {
/*  2800 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nthreads\' referenced before assignment');
/*  2801 */                     }
/*  2802 */                     if (debug === undefined) {
/*  2803 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2804 */                     }
/*  2805 */                     if (debug === undefined) {
/*  2806 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  2807 */                     }
/*  2808 */ 
/*  2809 */                     //
/*  2810 */                     // line 120:
/*  2811 */                     //     raise "no thrads!"
/*  2812 */                     //     ^
/*  2813 */                     //
/*  2814 */                     $currLineNo = 120;
/*  2815 */                     $currColNo = 4;
/*  2816 */ 
/*  2817 */                     var $str244 = new Sk.builtins['str']('no thrads!');
/*  2818 */                     var $err245 = $str244;
/*  2819 */                     if ($err245 instanceof Sk.builtin.type) {
/*  2820 */                         throw Sk.misceval.callsim($err245);
/*  2821 */                     } else if (typeof($err245) === 'function') {
/*  2822 */                         throw $err245();
/*  2823 */                     } else {
/*  2824 */                         throw $err245;
/*  2825 */                     }
/*  2826 */                     return Sk.builtin.none.none$;
/*  2827 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2828 */                 }
/*  2829 */             } catch (err) {
/*  2830 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2831 */                     err = new Sk.builtin.ExternalError(err);
/*  2832 */                 }
/*  2833 */                 err.traceback.push({
/*  2834 */                     lineno: $currLineNo,
/*  2835 */                     colno: $currColNo,
/*  2836 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2837 */                 });
/*  2838 */                 if ($exc.length > 0) {
/*  2839 */                     $err = err;
/*  2840 */                     $blk = $exc.pop();
/*  2841 */                     continue;
/*  2842 */                 } else {
/*  2843 */                     throw err;
/*  2844 */                 }
/*  2845 */             }
/*  2846 */         }
/*  2847 */     });
/*  2848 */     var $scope248 = (function $main249$(numruns, depths, threads, debug) {
/*  2849 */         var array, i, long_lived_tree, t_finish, t_start, temp_tree, times; /* locals */
/*  2850 */         var array, array, array, debug, debug, debug, debug, debug, debug, depths, depths, depths, depths, i, i, i, i, i, i, i, long_lived_tree, long_lived_tree, long_lived_tree, numruns, numruns, t_finish, t_finish, t_start, t_start, temp_tree, temp_tree, threads, threads, threads, threads, times, times, times, $loadgbl251, $iter253, $loadgbl251, $call252, $iter253, $loadgbl256, $loadgbl256, $lattr257, $loadgbl259, $loadgbl260, $loadgbl265, $loadgbl267, $loadgbl268, $compareres277, $loadgbl278, $binop279, $binop282, $loadgbl285, $loadgbl287, $compareres289, $compareres289, $jfalse290, $boolopsucc291, $jtrue292, $compareres289, $jfalse290, $boolopsucc291, $jtrue292, $lsubscr293, $compareres294, $binop295, $loadgbl301, $loadgbl301, $lattr302, $loadgbl304, $lattr307, $binop308;
/*  2851 */         var $wakeFromSuspension = function() {
/*  2852 */             var susp = $scope248.$wakingSuspension;
/*  2853 */             delete $scope248.$wakingSuspension;
/*  2854 */             $blk = susp.$blk;
/*  2855 */             $loc = susp.$loc;
/*  2856 */             $gbl = susp.$gbl;
/*  2857 */             $exc = susp.$exc;
/*  2858 */             $err = susp.$err;
/*  2859 */             $postfinally = susp.$postfinally;
/*  2860 */             $currLineNo = susp.$lineno;
/*  2861 */             $currColNo = susp.$colno;
/*  2862 */             Sk.lastYield = Date.now();
/*  2863 */             array = susp.$tmps.array;
/*  2864 */             debug = susp.$tmps.debug;
/*  2865 */             depths = susp.$tmps.depths;
/*  2866 */             i = susp.$tmps.i;
/*  2867 */             long_lived_tree = susp.$tmps.long_lived_tree;
/*  2868 */             numruns = susp.$tmps.numruns;
/*  2869 */             t_finish = susp.$tmps.t_finish;
/*  2870 */             t_start = susp.$tmps.t_start;
/*  2871 */             temp_tree = susp.$tmps.temp_tree;
/*  2872 */             threads = susp.$tmps.threads;
/*  2873 */             times = susp.$tmps.times;
/*  2874 */             $loadgbl251 = susp.$tmps.$loadgbl251;
/*  2875 */             $iter253 = susp.$tmps.$iter253;
/*  2876 */             $call252 = susp.$tmps.$call252;
/*  2877 */             $loadgbl256 = susp.$tmps.$loadgbl256;
/*  2878 */             $lattr257 = susp.$tmps.$lattr257;
/*  2879 */             $loadgbl259 = susp.$tmps.$loadgbl259;
/*  2880 */             $loadgbl260 = susp.$tmps.$loadgbl260;
/*  2881 */             $loadgbl265 = susp.$tmps.$loadgbl265;
/*  2882 */             $loadgbl267 = susp.$tmps.$loadgbl267;
/*  2883 */             $loadgbl268 = susp.$tmps.$loadgbl268;
/*  2884 */             $compareres277 = susp.$tmps.$compareres277;
/*  2885 */             $loadgbl278 = susp.$tmps.$loadgbl278;
/*  2886 */             $binop279 = susp.$tmps.$binop279;
/*  2887 */             $binop282 = susp.$tmps.$binop282;
/*  2888 */             $loadgbl285 = susp.$tmps.$loadgbl285;
/*  2889 */             $loadgbl287 = susp.$tmps.$loadgbl287;
/*  2890 */             $compareres289 = susp.$tmps.$compareres289;
/*  2891 */             $jfalse290 = susp.$tmps.$jfalse290;
/*  2892 */             $boolopsucc291 = susp.$tmps.$boolopsucc291;
/*  2893 */             $jtrue292 = susp.$tmps.$jtrue292;
/*  2894 */             $lsubscr293 = susp.$tmps.$lsubscr293;
/*  2895 */             $compareres294 = susp.$tmps.$compareres294;
/*  2896 */             $binop295 = susp.$tmps.$binop295;
/*  2897 */             $loadgbl301 = susp.$tmps.$loadgbl301;
/*  2898 */             $lattr302 = susp.$tmps.$lattr302;
/*  2899 */             $loadgbl304 = susp.$tmps.$loadgbl304;
/*  2900 */             $lattr307 = susp.$tmps.$lattr307;
/*  2901 */             $binop308 = susp.$tmps.$binop308;
/*  2902 */             try {
/*  2903 */                 $ret = susp.child.resume();
/*  2904 */             } catch (err) {
/*  2905 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2906 */                     err = new Sk.builtin.ExternalError(err);
/*  2907 */                 }
/*  2908 */                 err.traceback.push({
/*  2909 */                     lineno: $currLineNo,
/*  2910 */                     colno: $currColNo,
/*  2911 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  2912 */                 });
/*  2913 */                 if ($exc.length > 0) {
/*  2914 */                     $err = err;
/*  2915 */                     $blk = $exc.pop();
/*  2916 */                 } else {
/*  2917 */                     throw err;
/*  2918 */                 }
/*  2919 */             }
/*  2920 */         };
/*  2921 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2922 */             var susp = new Sk.misceval.Suspension();
/*  2923 */             susp.child = $child;
/*  2924 */             susp.resume = function() {
/*  2925 */                 $scope248.$wakingSuspension = susp;
/*  2926 */                 return $scope248();
/*  2927 */             };
/*  2928 */             susp.data = susp.child.data;
/*  2929 */             susp.$blk = $blk;
/*  2930 */             susp.$loc = $loc;
/*  2931 */             susp.$gbl = $gbl;
/*  2932 */             susp.$exc = $exc;
/*  2933 */             susp.$err = $err;
/*  2934 */             susp.$postfinally = $postfinally;
/*  2935 */             susp.$filename = $filename;
/*  2936 */             susp.$lineno = $lineno;
/*  2937 */             susp.$colno = $colno;
/*  2938 */             susp.optional = susp.child.optional;
/*  2939 */             susp.$tmps = {
/*  2940 */                 "array": array,
/*  2941 */                 "debug": debug,
/*  2942 */                 "depths": depths,
/*  2943 */                 "i": i,
/*  2944 */                 "long_lived_tree": long_lived_tree,
/*  2945 */                 "numruns": numruns,
/*  2946 */                 "t_finish": t_finish,
/*  2947 */                 "t_start": t_start,
/*  2948 */                 "temp_tree": temp_tree,
/*  2949 */                 "threads": threads,
/*  2950 */                 "times": times,
/*  2951 */                 "$loadgbl251": $loadgbl251,
/*  2952 */                 "$iter253": $iter253,
/*  2953 */                 "$call252": $call252,
/*  2954 */                 "$loadgbl256": $loadgbl256,
/*  2955 */                 "$lattr257": $lattr257,
/*  2956 */                 "$loadgbl259": $loadgbl259,
/*  2957 */                 "$loadgbl260": $loadgbl260,
/*  2958 */                 "$loadgbl265": $loadgbl265,
/*  2959 */                 "$loadgbl267": $loadgbl267,
/*  2960 */                 "$loadgbl268": $loadgbl268,
/*  2961 */                 "$compareres277": $compareres277,
/*  2962 */                 "$loadgbl278": $loadgbl278,
/*  2963 */                 "$binop279": $binop279,
/*  2964 */                 "$binop282": $binop282,
/*  2965 */                 "$loadgbl285": $loadgbl285,
/*  2966 */                 "$loadgbl287": $loadgbl287,
/*  2967 */                 "$compareres289": $compareres289,
/*  2968 */                 "$jfalse290": $jfalse290,
/*  2969 */                 "$boolopsucc291": $boolopsucc291,
/*  2970 */                 "$jtrue292": $jtrue292,
/*  2971 */                 "$lsubscr293": $lsubscr293,
/*  2972 */                 "$compareres294": $compareres294,
/*  2973 */                 "$binop295": $binop295,
/*  2974 */                 "$loadgbl301": $loadgbl301,
/*  2975 */                 "$lattr302": $lattr302,
/*  2976 */                 "$loadgbl304": $loadgbl304,
/*  2977 */                 "$lattr307": $lattr307,
/*  2978 */                 "$binop308": $binop308
/*  2979 */             };
/*  2980 */             return susp;
/*  2981 */         };
/*  2982 */         var $blk = 0,
/*  2983 */             $exc = [],
/*  2984 */             $loc = {},
/*  2985 */             $gbl = this,
/*  2986 */             $err = undefined,
/*  2987 */             $ret = undefined,
/*  2988 */             $postfinally = undefined,
/*  2989 */             $currLineNo = undefined,
/*  2990 */             $currColNo = undefined;
/*  2991 */         if (typeof Sk.execStart === 'undefined') {
/*  2992 */             Sk.execStart = Date.now()
/*  2993 */         }
/*  2994 */         if (typeof Sk.lastYield === 'undefined') {
/*  2995 */             Sk.lastYield = Date.now()
/*  2996 */         }
/*  2997 */         if ($scope248.$wakingSuspension !== undefined) {
/*  2998 */             $wakeFromSuspension();
/*  2999 */         } else {
/*  3000 */             if (depths === undefined) depths = $scope248.$defaults[0];
/*  3001 */             if (threads === undefined) threads = $scope248.$defaults[1];
/*  3002 */             if (debug === undefined) debug = $scope248.$defaults[2];
/*  3003 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 4, false, false);
/*  3004 */         }
/*  3005 */         while (true) {
/*  3006 */             try {
/*  3007 */                 var $dateNow = Date.now();
/*  3008 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3009 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3010 */                 }
/*  3011 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3012 */                     var $susp = $saveSuspension({
/*  3013 */                         data: {
/*  3014 */                             type: 'Sk.yield'
/*  3015 */                         },
/*  3016 */                         resume: function() {}
/*  3017 */                     }, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  3018 */                     $susp.$blk = $blk;
/*  3019 */                     $susp.optional = true;
/*  3020 */                     return $susp;
/*  3021 */                 }
/*  3022 */                 switch ($blk) {
/*  3023 */                 case 0:
/*  3024 */                     /* --- codeobj entry --- */
/*  3025 */                     if (numruns === undefined) {
/*  3026 */                         throw new Sk.builtin.UnboundLocalError('local variable \'numruns\' referenced before assignment');
/*  3027 */                     }
/*  3028 */                     if (depths === undefined) {
/*  3029 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3030 */                     }
/*  3031 */                     if (threads === undefined) {
/*  3032 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3033 */                     }
/*  3034 */                     if (debug === undefined) {
/*  3035 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3036 */                     }
/*  3037 */                     if (depths === undefined) {
/*  3038 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3039 */                     }
/*  3040 */                     if (threads === undefined) {
/*  3041 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3042 */                     }
/*  3043 */                     if (debug === undefined) {
/*  3044 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3045 */                     }
/*  3046 */ 
/*  3047 */                     //
/*  3048 */                     // line 123:
/*  3049 */                     //     times = []
/*  3050 */                     //     ^
/*  3051 */                     //
/*  3052 */                     $currLineNo = 123;
/*  3053 */                     $currColNo = 4;
/*  3054 */ 
/*  3055 */                     var $loadlist250 = new Sk.builtins['list']([]);
/*  3056 */                     times = $loadlist250;
/*  3057 */                     //
/*  3058 */                     // line 124:
/*  3059 */                     //     for i in range(numruns):
/*  3060 */                     //     ^
/*  3061 */                     //
/*  3062 */                     $currLineNo = 124;
/*  3063 */                     $currColNo = 4;
/*  3064 */ 
/*  3065 */                     var $loadgbl251 = Sk.misceval.loadname('range', $gbl);
/*  3066 */                     if (numruns === undefined) {
/*  3067 */                         throw new Sk.builtin.UnboundLocalError('local variable \'numruns\' referenced before assignment');
/*  3068 */                     }
/*  3069 */                     $ret;
/*  3070 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl251, numruns);
/*  3071 */                     $blk = 4; /* allowing case fallthrough */
/*  3072 */                 case 4:
/*  3073 */                     /* --- function return or resume suspension --- */
/*  3074 */                     if ($ret && $ret.$isSuspension) {
/*  3075 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 124, 13);
/*  3076 */                     }
/*  3077 */                     var $call252 = $ret;
/*  3078 */                     //
/*  3079 */                     // line 124:
/*  3080 */                     //     for i in range(numruns):
/*  3081 */                     //              ^
/*  3082 */                     //
/*  3083 */                     $currLineNo = 124;
/*  3084 */                     $currColNo = 13;
/*  3085 */ 
/*  3086 */                     var $iter253 = Sk.abstr.iter($call252);
/*  3087 */                     $blk = 1; /* allowing case fallthrough */
/*  3088 */                 case 1:
/*  3089 */                     /* --- for start --- */
/*  3090 */                     $ret = Sk.abstr.iternext($iter253, true);
/*  3091 */                     $blk = 5; /* allowing case fallthrough */
/*  3092 */                 case 5:
/*  3093 */                     /* --- function return or resume suspension --- */
/*  3094 */                     if ($ret && $ret.$isSuspension) {
/*  3095 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 124, 4);
/*  3096 */                     }
/*  3097 */                     var $next254 = $ret;
/*  3098 */                     if ($next254 === undefined) {
/*  3099 */                         $blk = 2;
/*  3100 */                         continue;
/*  3101 */                     }
/*  3102 */                     i = $next254;
/*  3103 */                     //
/*  3104 */                     // line 125:
/*  3105 */                     //         if debug:
/*  3106 */                     //         ^
/*  3107 */                     //
/*  3108 */                     $currLineNo = 125;
/*  3109 */                     $currColNo = 8;
/*  3110 */ 
/*  3111 */                     if (debug === undefined) {
/*  3112 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3113 */                     }
/*  3114 */                     var $jfalse255 = (debug === false || !Sk.misceval.isTrue(debug));
/*  3115 */                     if ($jfalse255) { /*test failed */
/*  3116 */                         $blk = 6;
/*  3117 */                         continue;
/*  3118 */                     }
/*  3119 */                     //
/*  3120 */                     // line 127:
/*  3121 */                     //             pass #pass #print(" Stretching memory with a binary tree of depth %d" % kStretchTreeDepth)
/*  3122 */                     //             ^
/*  3123 */                     //
/*  3124 */                     $currLineNo = 127;
/*  3125 */                     $currColNo = 12;
/*  3126 */ 
/*  3127 */                     $blk = 6; /* allowing case fallthrough */
/*  3128 */                 case 6:
/*  3129 */                     /* --- end of if --- */
/*  3130 */                     //
/*  3131 */                     // line 128:
/*  3132 */                     //         pass #print_diagnostics()
/*  3133 */                     //         ^
/*  3134 */                     //
/*  3135 */                     $currLineNo = 128;
/*  3136 */                     $currColNo = 8;
/*  3137 */ 
/*  3138 */ 
/*  3139 */                     //
/*  3140 */                     // line 129:
/*  3141 */                     //         t_start = time.time()
/*  3142 */                     //         ^
/*  3143 */                     //
/*  3144 */                     $currLineNo = 129;
/*  3145 */                     $currColNo = 8;
/*  3146 */ 
/*  3147 */                     var $loadgbl256 = Sk.misceval.loadname('time', $gbl);
/*  3148 */                     $ret = Sk.abstr.gattr($loadgbl256, 'time', true);
/*  3149 */                     $blk = 7; /* allowing case fallthrough */
/*  3150 */                 case 7:
/*  3151 */                     /* --- function return or resume suspension --- */
/*  3152 */                     if ($ret && $ret.$isSuspension) {
/*  3153 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 129, 18);
/*  3154 */                     }
/*  3155 */                     var $lattr257 = $ret;
/*  3156 */                     $ret;
/*  3157 */                     $ret = Sk.misceval.callsimOrSuspend($lattr257);
/*  3158 */                     $blk = 8; /* allowing case fallthrough */
/*  3159 */                 case 8:
/*  3160 */                     /* --- function return or resume suspension --- */
/*  3161 */                     if ($ret && $ret.$isSuspension) {
/*  3162 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 129, 18);
/*  3163 */                     }
/*  3164 */                     var $call258 = $ret;
/*  3165 */                     //
/*  3166 */                     // line 129:
/*  3167 */                     //         t_start = time.time()
/*  3168 */                     //                   ^
/*  3169 */                     //
/*  3170 */                     $currLineNo = 129;
/*  3171 */                     $currColNo = 18;
/*  3172 */ 
/*  3173 */                     t_start = $call258;
/*  3174 */                     //
/*  3175 */                     // line 130:
/*  3176 */                     //         temp_tree = make_tree(kStretchTreeDepth)
/*  3177 */                     //         ^
/*  3178 */                     //
/*  3179 */                     $currLineNo = 130;
/*  3180 */                     $currColNo = 8;
/*  3181 */ 
/*  3182 */                     var $loadgbl259 = Sk.misceval.loadname('make_tree', $gbl);
/*  3183 */                     var $loadgbl260 = Sk.misceval.loadname('kStretchTreeDepth', $gbl);
/*  3184 */                     $ret;
/*  3185 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl259, $loadgbl260);
/*  3186 */                     $blk = 9; /* allowing case fallthrough */
/*  3187 */                 case 9:
/*  3188 */                     /* --- function return or resume suspension --- */
/*  3189 */                     if ($ret && $ret.$isSuspension) {
/*  3190 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 130, 20);
/*  3191 */                     }
/*  3192 */                     var $call261 = $ret;
/*  3193 */                     //
/*  3194 */                     // line 130:
/*  3195 */                     //         temp_tree = make_tree(kStretchTreeDepth)
/*  3196 */                     //                     ^
/*  3197 */                     //
/*  3198 */                     $currLineNo = 130;
/*  3199 */                     $currColNo = 20;
/*  3200 */ 
/*  3201 */                     temp_tree = $call261;
/*  3202 */                     //
/*  3203 */                     // line 131:
/*  3204 */                     //         temp_tree = None
/*  3205 */                     //         ^
/*  3206 */                     //
/*  3207 */                     $currLineNo = 131;
/*  3208 */                     $currColNo = 8;
/*  3209 */ 
/*  3210 */                     temp_tree = Sk.builtin.none.none$;
/*  3211 */                     //
/*  3212 */                     // line 134:
/*  3213 */                     //         print(" Creating a long-lived binary tree of depth %d" % kLongLivedTreeDepth)
/*  3214 */                     //         ^
/*  3215 */                     //
/*  3216 */                     $currLineNo = 134;
/*  3217 */                     $currColNo = 8;
/*  3218 */ 
/*  3219 */                     var $str262 = new Sk.builtins['str'](' Creating a long-lived binary tree of depth %d');
/*  3220 */                     var $loadgbl263 = Sk.misceval.loadname('kLongLivedTreeDepth', $gbl);
/*  3221 */                     var $binop264 = Sk.abstr.numberBinOp($str262, $loadgbl263, 'Mod');
/*  3222 */                     Sk.misceval.print_(new Sk.builtins['str']($binop264).v);
/*  3223 */                     Sk.misceval.print_("\n");
/*  3224 */                     //
/*  3225 */                     // line 135:
/*  3226 */                     //         long_lived_tree = Node()
/*  3227 */                     //         ^
/*  3228 */                     //
/*  3229 */                     $currLineNo = 135;
/*  3230 */                     $currColNo = 8;
/*  3231 */ 
/*  3232 */                     var $loadgbl265 = Sk.misceval.loadname('Node', $gbl);
/*  3233 */                     $ret;
/*  3234 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl265);
/*  3235 */                     $blk = 10; /* allowing case fallthrough */
/*  3236 */                 case 10:
/*  3237 */                     /* --- function return or resume suspension --- */
/*  3238 */                     if ($ret && $ret.$isSuspension) {
/*  3239 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 135, 26);
/*  3240 */                     }
/*  3241 */                     var $call266 = $ret;
/*  3242 */                     //
/*  3243 */                     // line 135:
/*  3244 */                     //         long_lived_tree = Node()
/*  3245 */                     //                           ^
/*  3246 */                     //
/*  3247 */                     $currLineNo = 135;
/*  3248 */                     $currColNo = 26;
/*  3249 */ 
/*  3250 */                     long_lived_tree = $call266;
/*  3251 */                     //
/*  3252 */                     // line 136:
/*  3253 */                     //         populate(kLongLivedTreeDepth, long_lived_tree)
/*  3254 */                     //         ^
/*  3255 */                     //
/*  3256 */                     $currLineNo = 136;
/*  3257 */                     $currColNo = 8;
/*  3258 */ 
/*  3259 */                     var $loadgbl267 = Sk.misceval.loadname('populate', $gbl);
/*  3260 */                     var $loadgbl268 = Sk.misceval.loadname('kLongLivedTreeDepth', $gbl);
/*  3261 */                     if (long_lived_tree === undefined) {
/*  3262 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  3263 */                     }
/*  3264 */                     $ret;
/*  3265 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl267, $loadgbl268, long_lived_tree);
/*  3266 */                     $blk = 11; /* allowing case fallthrough */
/*  3267 */                 case 11:
/*  3268 */                     /* --- function return or resume suspension --- */
/*  3269 */                     if ($ret && $ret.$isSuspension) {
/*  3270 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 136, 8);
/*  3271 */                     }
/*  3272 */                     var $call269 = $ret;
/*  3273 */                     //
/*  3274 */                     // line 136:
/*  3275 */                     //         populate(kLongLivedTreeDepth, long_lived_tree)
/*  3276 */                     //         ^
/*  3277 */                     //
/*  3278 */                     $currLineNo = 136;
/*  3279 */                     $currColNo = 8;
/*  3280 */ 
/*  3281 */ 
/*  3282 */                     //
/*  3283 */                     // line 139:
/*  3284 */                     //         print(" Creating a long-lived array of %d doubles" % kArraySize)
/*  3285 */                     //         ^
/*  3286 */                     //
/*  3287 */                     $currLineNo = 139;
/*  3288 */                     $currColNo = 8;
/*  3289 */ 
/*  3290 */                     var $str270 = new Sk.builtins['str'](' Creating a long-lived array of %d doubles');
/*  3291 */                     var $loadgbl271 = Sk.misceval.loadname('kArraySize', $gbl);
/*  3292 */                     var $binop272 = Sk.abstr.numberBinOp($str270, $loadgbl271, 'Mod');
/*  3293 */                     Sk.misceval.print_(new Sk.builtins['str']($binop272).v);
/*  3294 */                     Sk.misceval.print_("\n");
/*  3295 */                     //
/*  3296 */                     // line 140:
/*  3297 */                     //         array = [0.0] * kArraySize
/*  3298 */                     //         ^
/*  3299 */                     //
/*  3300 */                     $currLineNo = 140;
/*  3301 */                     $currColNo = 8;
/*  3302 */ 
/*  3303 */                     var $elem273 = new Sk.builtin.float_(0);
/*  3304 */                     var $loadlist274 = new Sk.builtins['list']([$elem273]);
/*  3305 */                     var $loadgbl275 = Sk.misceval.loadname('kArraySize', $gbl);
/*  3306 */                     var $binop276 = Sk.abstr.numberBinOp($loadlist274, $loadgbl275, 'Mult');
/*  3307 */                     array = $binop276;
/*  3308 */                     //
/*  3309 */                     // line 141:
/*  3310 */                     //         i = 1
/*  3311 */                     //         ^
/*  3312 */                     //
/*  3313 */                     $currLineNo = 141;
/*  3314 */                     $currColNo = 8;
/*  3315 */ 
/*  3316 */                     i = new Sk.builtin.int_(1);
/*  3317 */                     //
/*  3318 */                     // line 142:
/*  3319 */                     //         while i < kArraySize/2:
/*  3320 */                     //         ^
/*  3321 */                     //
/*  3322 */                     $currLineNo = 142;
/*  3323 */                     $currColNo = 8;
/*  3324 */ 
/*  3325 */                     $blk = 12; /* allowing case fallthrough */
/*  3326 */                 case 12:
/*  3327 */                     /* --- while test --- */
/*  3328 */                     //
/*  3329 */                     // line 142:
/*  3330 */                     //         while i < kArraySize/2:
/*  3331 */                     //         ^
/*  3332 */                     //
/*  3333 */                     $currLineNo = 142;
/*  3334 */                     $currColNo = 8;
/*  3335 */ 
/*  3336 */                     if (i === undefined) {
/*  3337 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  3338 */                     }
/*  3339 */                     var $compareres277 = null;
/*  3340 */                     var $loadgbl278 = Sk.misceval.loadname('kArraySize', $gbl);
/*  3341 */                     var $binop279 = Sk.abstr.numberBinOp($loadgbl278, new Sk.builtin.int_(2), 'Div');
/*  3342 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(i, $binop279, 'Lt', true));
/*  3343 */                     $blk = 16; /* allowing case fallthrough */
/*  3344 */                 case 16:
/*  3345 */                     /* --- function return or resume suspension --- */
/*  3346 */                     if ($ret && $ret.$isSuspension) {
/*  3347 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 142, 14);
/*  3348 */                     }
/*  3349 */                     $compareres277 = $ret;
/*  3350 */                     var $jfalse280 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3351 */                     if ($jfalse280) { /*test failed */
/*  3352 */                         $blk = 15;
/*  3353 */                         continue;
/*  3354 */                     }
/*  3355 */                     $blk = 15; /* allowing case fallthrough */
/*  3356 */                 case 15:
/*  3357 */                     /* --- done --- */
/*  3358 */                     var $jfalse281 = ($compareres277 === false || !Sk.misceval.isTrue($compareres277));
/*  3359 */                     if ($jfalse281) { /*test failed */
/*  3360 */                         $blk = 13;
/*  3361 */                         continue;
/*  3362 */                     }
/*  3363 */                     $blk = 14; /* allowing case fallthrough */
/*  3364 */                 case 14:
/*  3365 */                     /* --- while body --- */
/*  3366 */                     //
/*  3367 */                     // line 143:
/*  3368 */                     //             array[i] = 1.0/i
/*  3369 */                     //             ^
/*  3370 */                     //
/*  3371 */                     $currLineNo = 143;
/*  3372 */                     $currColNo = 12;
/*  3373 */ 
/*  3374 */                     if (i === undefined) {
/*  3375 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  3376 */                     }
/*  3377 */                     var $binop282 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), i, 'Div');
/*  3378 */                     if (array === undefined) {
/*  3379 */                         throw new Sk.builtin.UnboundLocalError('local variable \'array\' referenced before assignment');
/*  3380 */                     }
/*  3381 */                     if (i === undefined) {
/*  3382 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  3383 */                     }
/*  3384 */                     $ret = Sk.abstr.objectSetItem(array, i, $binop282, true);
/*  3385 */                     $blk = 17; /* allowing case fallthrough */
/*  3386 */                 case 17:
/*  3387 */                     /* --- function return or resume suspension --- */
/*  3388 */                     if ($ret && $ret.$isSuspension) {
/*  3389 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  3390 */                     }
/*  3391 */                     //
/*  3392 */                     // line 144:
/*  3393 */                     //             i += 1
/*  3394 */                     //             ^
/*  3395 */                     //
/*  3396 */                     $currLineNo = 144;
/*  3397 */                     $currColNo = 12;
/*  3398 */ 
/*  3399 */                     if (i === undefined) {
/*  3400 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  3401 */                     }
/*  3402 */                     var $inplbinop283 = Sk.abstr.numberInplaceBinOp(i, new Sk.builtin.int_(1), 'Add');
/*  3403 */                     i = $inplbinop283;
/*  3404 */                     $blk = 12; /* jump */
/*  3405 */                     continue;
/*  3406 */                 case 2:
/*  3407 */                     /* --- for cleanup --- */
/*  3408 */                     $blk = 3; /* allowing case fallthrough */
/*  3409 */                 case 3:
/*  3410 */                     /* --- for end --- */
/*  3411 */                     //
/*  3412 */                     // line 160:
/*  3413 */                     //     return times
/*  3414 */                     //     ^
/*  3415 */                     //
/*  3416 */                     $currLineNo = 160;
/*  3417 */                     $currColNo = 4;
/*  3418 */ 
/*  3419 */                     if (times === undefined) {
/*  3420 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  3421 */                     }
/*  3422 */                     return times;
/*  3423 */                     return Sk.builtin.none.none$;
/*  3424 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3425 */                 case 13:
/*  3426 */                     /* --- after while --- */
/*  3427 */                     //
/*  3428 */                     // line 145:
/*  3429 */                     //         pass #print_diagnostics()
/*  3430 */                     //         ^
/*  3431 */                     //
/*  3432 */                     $currLineNo = 145;
/*  3433 */                     $currColNo = 8;
/*  3434 */ 
/*  3435 */ 
/*  3436 */                     //
/*  3437 */                     // line 147:
/*  3438 */                     //         if threads:
/*  3439 */                     //         ^
/*  3440 */                     //
/*  3441 */                     $currLineNo = 147;
/*  3442 */                     $currColNo = 8;
/*  3443 */ 
/*  3444 */                     if (threads === undefined) {
/*  3445 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3446 */                     }
/*  3447 */                     var $jfalse284 = (threads === false || !Sk.misceval.isTrue(threads));
/*  3448 */                     if ($jfalse284) { /*test failed */
/*  3449 */                         $blk = 19;
/*  3450 */                         continue;
/*  3451 */                     }
/*  3452 */                     //
/*  3453 */                     // line 148:
/*  3454 */                     //             time_parallel_constructions(depths, threads, debug)
/*  3455 */                     //             ^
/*  3456 */                     //
/*  3457 */                     $currLineNo = 148;
/*  3458 */                     $currColNo = 12;
/*  3459 */ 
/*  3460 */                     var $loadgbl285 = Sk.misceval.loadname('time_parallel_constructions', $gbl);
/*  3461 */                     if (depths === undefined) {
/*  3462 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3463 */                     }
/*  3464 */                     if (threads === undefined) {
/*  3465 */                         throw new Sk.builtin.UnboundLocalError('local variable \'threads\' referenced before assignment');
/*  3466 */                     }
/*  3467 */                     if (debug === undefined) {
/*  3468 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3469 */                     }
/*  3470 */                     $ret;
/*  3471 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl285, depths, threads, debug);
/*  3472 */                     $blk = 20; /* allowing case fallthrough */
/*  3473 */                 case 20:
/*  3474 */                     /* --- function return or resume suspension --- */
/*  3475 */                     if ($ret && $ret.$isSuspension) {
/*  3476 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 148, 12);
/*  3477 */                     }
/*  3478 */                     var $call286 = $ret;
/*  3479 */                     //
/*  3480 */                     // line 148:
/*  3481 */                     //             time_parallel_constructions(depths, threads, debug)
/*  3482 */                     //             ^
/*  3483 */                     //
/*  3484 */                     $currLineNo = 148;
/*  3485 */                     $currColNo = 12;
/*  3486 */ 
/*  3487 */                     $blk = 18; /* allowing case fallthrough */
/*  3488 */                 case 18:
/*  3489 */                     /* --- end of if --- */
/*  3490 */                     //
/*  3491 */                     // line 152:
/*  3492 */                     //         if long_lived_tree is None or array[1024] != 1.0/1024:
/*  3493 */                     //         ^
/*  3494 */                     //
/*  3495 */                     $currLineNo = 152;
/*  3496 */                     $currColNo = 8;
/*  3497 */ 
/*  3498 */                     if (long_lived_tree === undefined) {
/*  3499 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  3500 */                     }
/*  3501 */                     var $compareres289 = null;
/*  3502 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(long_lived_tree, Sk.builtin.none.none$, 'Is', true));
/*  3503 */                     $blk = 25; /* allowing case fallthrough */
/*  3504 */                 case 25:
/*  3505 */                     /* --- function return or resume suspension --- */
/*  3506 */                     if ($ret && $ret.$isSuspension) {
/*  3507 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 152, 11);
/*  3508 */                     }
/*  3509 */                     $compareres289 = $ret;
/*  3510 */                     var $jfalse290 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3511 */                     if ($jfalse290) { /*test failed */
/*  3512 */                         $blk = 24;
/*  3513 */                         continue;
/*  3514 */                     }
/*  3515 */                     $blk = 24; /* allowing case fallthrough */
/*  3516 */                 case 24:
/*  3517 */                     /* --- done --- */
/*  3518 */                     var $boolopsucc291 = $compareres289;
/*  3519 */                     $boolopsucc291 = $compareres289;
/*  3520 */                     var $jtrue292 = ($compareres289 === true || Sk.misceval.isTrue($compareres289));
/*  3521 */                     if ($jtrue292) { /*test passed */
/*  3522 */                         $blk = 23;
/*  3523 */                         continue;
/*  3524 */                     }
/*  3525 */                     if (array === undefined) {
/*  3526 */                         throw new Sk.builtin.UnboundLocalError('local variable \'array\' referenced before assignment');
/*  3527 */                     }
/*  3528 */                     $ret = Sk.abstr.objectGetItem(array, new Sk.builtin.int_(1024), true);
/*  3529 */                     $blk = 26; /* allowing case fallthrough */
/*  3530 */                 case 26:
/*  3531 */                     /* --- function return or resume suspension --- */
/*  3532 */                     if ($ret && $ret.$isSuspension) {
/*  3533 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', $currLineNo, $currColNo);
/*  3534 */                     }
/*  3535 */                     var $lsubscr293 = $ret;
/*  3536 */                     var $compareres294 = null;
/*  3537 */                     var $binop295 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), new Sk.builtin.int_(1024), 'Div');
/*  3538 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lsubscr293, $binop295, 'NotEq', true));
/*  3539 */                     $blk = 28; /* allowing case fallthrough */
/*  3540 */                 case 28:
/*  3541 */                     /* --- function return or resume suspension --- */
/*  3542 */                     if ($ret && $ret.$isSuspension) {
/*  3543 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 152, 38);
/*  3544 */                     }
/*  3545 */                     $compareres294 = $ret;
/*  3546 */                     var $jfalse296 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3547 */                     if ($jfalse296) { /*test failed */
/*  3548 */                         $blk = 27;
/*  3549 */                         continue;
/*  3550 */                     }
/*  3551 */                     $blk = 27; /* allowing case fallthrough */
/*  3552 */                 case 27:
/*  3553 */                     /* --- done --- */
/*  3554 */                     $boolopsucc291 = $compareres294;
/*  3555 */                     var $jtrue297 = ($compareres294 === true || Sk.misceval.isTrue($compareres294));
/*  3556 */                     if ($jtrue297) { /*test passed */
/*  3557 */                         $blk = 23;
/*  3558 */                         continue;
/*  3559 */                     }
/*  3560 */                     $blk = 23; /* allowing case fallthrough */
/*  3561 */                 case 23:
/*  3562 */                     /* --- end of boolop --- */
/*  3563 */                     var $jfalse298 = ($boolopsucc291 === false || !Sk.misceval.isTrue($boolopsucc291));
/*  3564 */                     if ($jfalse298) { /*test failed */
/*  3565 */                         $blk = 22;
/*  3566 */                         continue;
/*  3567 */                     }
/*  3568 */                     //
/*  3569 */                     // line 153:
/*  3570 */                     //             raise Failed
/*  3571 */                     //             ^
/*  3572 */                     //
/*  3573 */                     $currLineNo = 153;
/*  3574 */                     $currColNo = 12;
/*  3575 */ 
/*  3576 */                     var $loadgbl299 = Sk.misceval.loadname('Failed', $gbl);
/*  3577 */                     var $err300 = $loadgbl299;
/*  3578 */                     if ($err300 instanceof Sk.builtin.type) {
/*  3579 */                         throw Sk.misceval.callsim($err300);
/*  3580 */                     } else if (typeof($err300) === 'function') {
/*  3581 */                         throw $err300();
/*  3582 */                     } else {
/*  3583 */                         throw $err300;
/*  3584 */                     }
/*  3585 */                     $blk = 22; /* allowing case fallthrough */
/*  3586 */                 case 22:
/*  3587 */                     /* --- end of if --- */
/*  3588 */                     //
/*  3589 */                     // line 155:
/*  3590 */                     //         t_finish = time.time()
/*  3591 */                     //         ^
/*  3592 */                     //
/*  3593 */                     $currLineNo = 155;
/*  3594 */                     $currColNo = 8;
/*  3595 */ 
/*  3596 */                     var $loadgbl301 = Sk.misceval.loadname('time', $gbl);
/*  3597 */                     $ret = Sk.abstr.gattr($loadgbl301, 'time', true);
/*  3598 */                     $blk = 29; /* allowing case fallthrough */
/*  3599 */                 case 29:
/*  3600 */                     /* --- function return or resume suspension --- */
/*  3601 */                     if ($ret && $ret.$isSuspension) {
/*  3602 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 155, 19);
/*  3603 */                     }
/*  3604 */                     var $lattr302 = $ret;
/*  3605 */                     $ret;
/*  3606 */                     $ret = Sk.misceval.callsimOrSuspend($lattr302);
/*  3607 */                     $blk = 30; /* allowing case fallthrough */
/*  3608 */                 case 30:
/*  3609 */                     /* --- function return or resume suspension --- */
/*  3610 */                     if ($ret && $ret.$isSuspension) {
/*  3611 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 155, 19);
/*  3612 */                     }
/*  3613 */                     var $call303 = $ret;
/*  3614 */                     //
/*  3615 */                     // line 155:
/*  3616 */                     //         t_finish = time.time()
/*  3617 */                     //                    ^
/*  3618 */                     //
/*  3619 */                     $currLineNo = 155;
/*  3620 */                     $currColNo = 19;
/*  3621 */ 
/*  3622 */                     t_finish = $call303;
/*  3623 */                     //
/*  3624 */                     // line 156:
/*  3625 */                     //         print_diagnostics()
/*  3626 */                     //         ^
/*  3627 */                     //
/*  3628 */                     $currLineNo = 156;
/*  3629 */                     $currColNo = 8;
/*  3630 */ 
/*  3631 */                     var $loadgbl304 = Sk.misceval.loadname('print_diagnostics', $gbl);
/*  3632 */                     $ret;
/*  3633 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl304);
/*  3634 */                     $blk = 31; /* allowing case fallthrough */
/*  3635 */                 case 31:
/*  3636 */                     /* --- function return or resume suspension --- */
/*  3637 */                     if ($ret && $ret.$isSuspension) {
/*  3638 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 156, 8);
/*  3639 */                     }
/*  3640 */                     var $call305 = $ret;
/*  3641 */                     //
/*  3642 */                     // line 156:
/*  3643 */                     //         print_diagnostics()
/*  3644 */                     //         ^
/*  3645 */                     //
/*  3646 */                     $currLineNo = 156;
/*  3647 */                     $currColNo = 8;
/*  3648 */ 
/*  3649 */ 
/*  3650 */                     //
/*  3651 */                     // line 157:
/*  3652 */                     //         if debug:
/*  3653 */                     //         ^
/*  3654 */                     //
/*  3655 */                     $currLineNo = 157;
/*  3656 */                     $currColNo = 8;
/*  3657 */ 
/*  3658 */                     if (debug === undefined) {
/*  3659 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3660 */                     }
/*  3661 */                     var $jfalse306 = (debug === false || !Sk.misceval.isTrue(debug));
/*  3662 */                     if ($jfalse306) { /*test failed */
/*  3663 */                         $blk = 32;
/*  3664 */                         continue;
/*  3665 */                     }
/*  3666 */                     //
/*  3667 */                     // line 158:
/*  3668 */                     //             pass #pass #print("Completed in %f ms." % ((t_finish-t_start)*1000.))
/*  3669 */                     //             ^
/*  3670 */                     //
/*  3671 */                     $currLineNo = 158;
/*  3672 */                     $currColNo = 12;
/*  3673 */ 
/*  3674 */                     $blk = 32; /* allowing case fallthrough */
/*  3675 */                 case 32:
/*  3676 */                     /* --- end of if --- */
/*  3677 */                     //
/*  3678 */                     // line 159:
/*  3679 */                     //         times.append(t_finish - t_start)
/*  3680 */                     //         ^
/*  3681 */                     //
/*  3682 */                     $currLineNo = 159;
/*  3683 */                     $currColNo = 8;
/*  3684 */ 
/*  3685 */                     if (times === undefined) {
/*  3686 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  3687 */                     }
/*  3688 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  3689 */                     $blk = 33; /* allowing case fallthrough */
/*  3690 */                 case 33:
/*  3691 */                     /* --- function return or resume suspension --- */
/*  3692 */                     if ($ret && $ret.$isSuspension) {
/*  3693 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 159, 8);
/*  3694 */                     }
/*  3695 */                     var $lattr307 = $ret;
/*  3696 */                     if (t_finish === undefined) {
/*  3697 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t_finish\' referenced before assignment');
/*  3698 */                     }
/*  3699 */                     if (t_start === undefined) {
/*  3700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t_start\' referenced before assignment');
/*  3701 */                     }
/*  3702 */                     var $binop308 = Sk.abstr.numberBinOp(t_finish, t_start, 'Sub');
/*  3703 */                     $ret;
/*  3704 */                     $ret = Sk.misceval.callsimOrSuspend($lattr307, $binop308);
/*  3705 */                     $blk = 34; /* allowing case fallthrough */
/*  3706 */                 case 34:
/*  3707 */                     /* --- function return or resume suspension --- */
/*  3708 */                     if ($ret && $ret.$isSuspension) {
/*  3709 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 159, 8);
/*  3710 */                     }
/*  3711 */                     var $call309 = $ret;
/*  3712 */                     //
/*  3713 */                     // line 159:
/*  3714 */                     //         times.append(t_finish - t_start)
/*  3715 */                     //         ^
/*  3716 */                     //
/*  3717 */                     $currLineNo = 159;
/*  3718 */                     $currColNo = 8;
/*  3719 */ 
/*  3720 */                     $blk = 1; /* jump */
/*  3721 */                     continue;
/*  3722 */                 case 19:
/*  3723 */                     /* --- next branch of if --- */
/*  3724 */                     //
/*  3725 */                     // line 150:
/*  3726 */                     //             time_constructions(depths, debug)
/*  3727 */                     //             ^
/*  3728 */                     //
/*  3729 */                     $currLineNo = 150;
/*  3730 */                     $currColNo = 12;
/*  3731 */ 
/*  3732 */                     var $loadgbl287 = Sk.misceval.loadname('time_constructions', $gbl);
/*  3733 */                     if (depths === undefined) {
/*  3734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'depths\' referenced before assignment');
/*  3735 */                     }
/*  3736 */                     if (debug === undefined) {
/*  3737 */                         throw new Sk.builtin.UnboundLocalError('local variable \'debug\' referenced before assignment');
/*  3738 */                     }
/*  3739 */                     $ret;
/*  3740 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl287, depths, debug);
/*  3741 */                     $blk = 21; /* allowing case fallthrough */
/*  3742 */                 case 21:
/*  3743 */                     /* --- function return or resume suspension --- */
/*  3744 */                     if ($ret && $ret.$isSuspension) {
/*  3745 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/gcbench/main.py', 150, 12);
/*  3746 */                     }
/*  3747 */                     var $call288 = $ret;
/*  3748 */                     //
/*  3749 */                     // line 150:
/*  3750 */                     //             time_constructions(depths, debug)
/*  3751 */                     //             ^
/*  3752 */                     //
/*  3753 */                     $currLineNo = 150;
/*  3754 */                     $currColNo = 12;
/*  3755 */ 
/*  3756 */                     $blk = 18; /* jump */
/*  3757 */                     continue;
/*  3758 */                 }
/*  3759 */             } catch (err) {
/*  3760 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3761 */                     err = new Sk.builtin.ExternalError(err);
/*  3762 */                 }
/*  3763 */                 err.traceback.push({
/*  3764 */                     lineno: $currLineNo,
/*  3765 */                     colno: $currColNo,
/*  3766 */                     filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  3767 */                 });
/*  3768 */                 if ($exc.length > 0) {
/*  3769 */                     $err = err;
/*  3770 */                     $blk = $exc.pop();
/*  3771 */                     continue;
/*  3772 */                 } else {
/*  3773 */                     throw err;
/*  3774 */                 }
/*  3775 */             }
/*  3776 */         }
/*  3777 */     });
/*  3778 */     var $scope312 = (function $Failed$class_outer($globals, $locals, $rest) {
/*  3779 */         var $gbl = $globals,
/*  3780 */             $loc = $locals;
/*  3781 */         (function $Failed$_closure() {
/*  3782 */             var $blk = 0,
/*  3783 */                 $exc = [],
/*  3784 */                 $ret = undefined,
/*  3785 */                 $postfinally = undefined,
/*  3786 */                 $currLineNo = undefined,
/*  3787 */                 $currColNo = undefined;
/*  3788 */             if (typeof Sk.execStart === 'undefined') {
/*  3789 */                 Sk.execStart = Date.now()
/*  3790 */             }
/*  3791 */             while (true) {
/*  3792 */                 try {
/*  3793 */                     var $dateNow = Date.now();
/*  3794 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3795 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3796 */                     }
/*  3797 */                     switch ($blk) {
/*  3798 */                     case 0:
/*  3799 */                         /* --- class entry --- */
/*  3800 */                         //
/*  3801 */                         // line 163:
/*  3802 */                         //     pass
/*  3803 */                         //     ^
/*  3804 */                         //
/*  3805 */                         $currLineNo = 163;
/*  3806 */                         $currColNo = 4;
/*  3807 */ 
/*  3808 */                         return;
/*  3809 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3810 */                     }
/*  3811 */                 } catch (err) {
/*  3812 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  3813 */                         err = new Sk.builtin.ExternalError(err);
/*  3814 */                     }
/*  3815 */                     err.traceback.push({
/*  3816 */                         lineno: $currLineNo,
/*  3817 */                         colno: $currColNo,
/*  3818 */                         filename: '/home/sbaxter/benchmarks/skulpt/gcbench/main.py'
/*  3819 */                     });
/*  3820 */                     if ($exc.length > 0) {
/*  3821 */                         $err = err;
/*  3822 */                         $blk = $exc.pop();
/*  3823 */                         continue;
/*  3824 */                     } else {
/*  3825 */                         throw err;
/*  3826 */                     }
/*  3827 */                 }
/*  3828 */             }
/*  3829 */         }).apply(null, $rest);
/*  3830 */     });
/*  3831 */     return $scope120;
/*  3832 */ }();
