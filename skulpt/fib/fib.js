/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname153;
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
/*    16 */             $loadname153 = susp.$tmps.$loadname153;
/*    17 */             try {
/*    18 */                 $ret = susp.child.resume();
/*    19 */             } catch (err) {
/*    20 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    21 */                     err = new Sk.builtin.ExternalError(err);
/*    22 */                 }
/*    23 */                 err.traceback.push({
/*    24 */                     lineno: $currLineNo,
/*    25 */                     colno: $currColNo,
/*    26 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*    27 */                 });
/*    28 */                 if ($exc.length > 0) {
/*    29 */                     $err = err;
/*    30 */                     $blk = $exc.pop();
/*    31 */                 } else {
/*    32 */                     throw err;
/*    33 */                 }
/*    34 */             }
/*    35 */         };
/*    36 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    37 */             var susp = new Sk.misceval.Suspension();
/*    38 */             susp.child = $child;
/*    39 */             susp.resume = function() {
/*    40 */                 $scope120.$wakingSuspension = susp;
/*    41 */                 return $scope120();
/*    42 */             };
/*    43 */             susp.data = susp.child.data;
/*    44 */             susp.$blk = $blk;
/*    45 */             susp.$loc = $loc;
/*    46 */             susp.$gbl = $gbl;
/*    47 */             susp.$exc = $exc;
/*    48 */             susp.$err = $err;
/*    49 */             susp.$postfinally = $postfinally;
/*    50 */             susp.$filename = $filename;
/*    51 */             susp.$lineno = $lineno;
/*    52 */             susp.$colno = $colno;
/*    53 */             susp.optional = susp.child.optional;
/*    54 */             susp.$tmps = {
/*    55 */                 "$loadname153": $loadname153
/*    56 */             };
/*    57 */             return susp;
/*    58 */         };
/*    59 */         var $gbl = {},
/*    60 */             $blk = 0,
/*    61 */             $exc = [],
/*    62 */             $loc = $gbl,
/*    63 */             $err = undefined;
/*    64 */         $gbl.__name__ = $modname;
/*    65 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/fib/main.py');
/*    66 */         var $ret = undefined,
/*    67 */             $postfinally = undefined,
/*    68 */             $currLineNo = undefined,
/*    69 */             $currColNo = undefined;
/*    70 */         if (typeof Sk.execStart === 'undefined') {
/*    71 */             Sk.execStart = Date.now()
/*    72 */         }
/*    73 */         if (typeof Sk.lastYield === 'undefined') {
/*    74 */             Sk.lastYield = Date.now()
/*    75 */         }
/*    76 */         if ($scope120.$wakingSuspension !== undefined) {
/*    77 */             $wakeFromSuspension();
/*    78 */         }
/*    79 */         if (Sk.retainGlobals) {
/*    80 */             if (Sk.globals) {
/*    81 */                 $gbl = Sk.globals;
/*    82 */                 Sk.globals = $gbl;
/*    83 */                 $loc = $gbl;
/*    84 */             } else {
/*    85 */                 Sk.globals = $gbl;
/*    86 */             }
/*    87 */         } else {
/*    88 */             Sk.globals = $gbl;
/*    89 */         }
/*    90 */         while (true) {
/*    91 */             try {
/*    92 */                 var $dateNow = Date.now();
/*    93 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*    94 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*    95 */                 }
/*    96 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*    97 */                     var $susp = $saveSuspension({
/*    98 */                         data: {
/*    99 */                             type: 'Sk.yield'
/*   100 */                         },
/*   101 */                         resume: function() {}
/*   102 */                     }, '/home/sbaxter/benchmarks/skulpt/fib/main.py', $currLineNo, $currColNo);
/*   103 */                     $susp.$blk = $blk;
/*   104 */                     $susp.optional = true;
/*   105 */                     return $susp;
/*   106 */                 }
/*   107 */                 switch ($blk) {
/*   108 */                 case 0:
/*   109 */                     /* --- module entry --- */
/*   110 */                     //
/*   111 */                     // line 2:
/*   112 */                     // def fib(n):
/*   113 */                     // ^
/*   114 */                     //
/*   115 */                     $currLineNo = 2;
/*   116 */                     $currColNo = 0;
/*   117 */ 
/*   118 */                     $scope121.co_name = new Sk.builtins['str']('fib');
/*   119 */                     $scope121.co_varnames = ['n'];
/*   120 */                     var $funcobj138 = new Sk.builtins['function']($scope121, $gbl);
/*   121 */                     $loc.fib = $funcobj138;
/*   122 */                     //
/*   123 */                     // line 7:
/*   124 */                     // def f(n):
/*   125 */                     // ^
/*   126 */                     //
/*   127 */                     $currLineNo = 7;
/*   128 */                     $currColNo = 0;
/*   129 */ 
/*   130 */                     $scope139.co_name = new Sk.builtins['str']('f');
/*   131 */                     $scope139.co_varnames = ['n'];
/*   132 */                     var $funcobj152 = new Sk.builtins['function']($scope139, $gbl);
/*   133 */                     $loc.f = $funcobj152;
/*   134 */                     //
/*   135 */                     // line 13:
/*   136 */                     // f(1)
/*   137 */                     // ^
/*   138 */                     //
/*   139 */                     $currLineNo = 13;
/*   140 */                     $currColNo = 0;
/*   141 */ 
/*   142 */                     var $loadname153 = $loc.f !== undefined ? $loc.f : Sk.misceval.loadname('f', $gbl);;
/*   143 */                     $ret;
/*   144 */                     $ret = Sk.misceval.callsimOrSuspend($loadname153, new Sk.builtin.int_(1));
/*   145 */                     $blk = 1; /* allowing case fallthrough */
/*   146 */                 case 1:
/*   147 */                     /* --- function return or resume suspension --- */
/*   148 */                     if ($ret && $ret.$isSuspension) {
/*   149 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 13, 0);
/*   150 */                     }
/*   151 */                     var $call154 = $ret;
/*   152 */                     //
/*   153 */                     // line 13:
/*   154 */                     // f(1)
/*   155 */                     // ^
/*   156 */                     //
/*   157 */                     $currLineNo = 13;
/*   158 */                     $currColNo = 0;
/*   159 */ 
/*   160 */                     return $loc;
/*   161 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   162 */                 }
/*   163 */             } catch (err) {
/*   164 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   165 */                     err = new Sk.builtin.ExternalError(err);
/*   166 */                 }
/*   167 */                 err.traceback.push({
/*   168 */                     lineno: $currLineNo,
/*   169 */                     colno: $currColNo,
/*   170 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   171 */                 });
/*   172 */                 if ($exc.length > 0) {
/*   173 */                     $err = err;
/*   174 */                     $blk = $exc.pop();
/*   175 */                     continue;
/*   176 */                 } else {
/*   177 */                     throw err;
/*   178 */                 }
/*   179 */             }
/*   180 */         }
/*   181 */     });
/*   182 */     var $scope121 = (function $fib122$(n) {
/*   183 */         var n, n, n, n, n, $compareres123, $compareres123, $jfalse124, $boolopsucc125, $jtrue126, $compareres127, $loadgbl131, $binop132, $loadgbl131, $binop132, $call133, $loadgbl134, $binop135;
/*   184 */         var $wakeFromSuspension = function() {
/*   185 */             var susp = $scope121.$wakingSuspension;
/*   186 */             delete $scope121.$wakingSuspension;
/*   187 */             $blk = susp.$blk;
/*   188 */             $loc = susp.$loc;
/*   189 */             $gbl = susp.$gbl;
/*   190 */             $exc = susp.$exc;
/*   191 */             $err = susp.$err;
/*   192 */             $postfinally = susp.$postfinally;
/*   193 */             $currLineNo = susp.$lineno;
/*   194 */             $currColNo = susp.$colno;
/*   195 */             Sk.lastYield = Date.now();
/*   196 */             n = susp.$tmps.n;
/*   197 */             $compareres123 = susp.$tmps.$compareres123;
/*   198 */             $jfalse124 = susp.$tmps.$jfalse124;
/*   199 */             $boolopsucc125 = susp.$tmps.$boolopsucc125;
/*   200 */             $jtrue126 = susp.$tmps.$jtrue126;
/*   201 */             $compareres127 = susp.$tmps.$compareres127;
/*   202 */             $loadgbl131 = susp.$tmps.$loadgbl131;
/*   203 */             $binop132 = susp.$tmps.$binop132;
/*   204 */             $call133 = susp.$tmps.$call133;
/*   205 */             $loadgbl134 = susp.$tmps.$loadgbl134;
/*   206 */             $binop135 = susp.$tmps.$binop135;
/*   207 */             try {
/*   208 */                 $ret = susp.child.resume();
/*   209 */             } catch (err) {
/*   210 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   211 */                     err = new Sk.builtin.ExternalError(err);
/*   212 */                 }
/*   213 */                 err.traceback.push({
/*   214 */                     lineno: $currLineNo,
/*   215 */                     colno: $currColNo,
/*   216 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   217 */                 });
/*   218 */                 if ($exc.length > 0) {
/*   219 */                     $err = err;
/*   220 */                     $blk = $exc.pop();
/*   221 */                 } else {
/*   222 */                     throw err;
/*   223 */                 }
/*   224 */             }
/*   225 */         };
/*   226 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   227 */             var susp = new Sk.misceval.Suspension();
/*   228 */             susp.child = $child;
/*   229 */             susp.resume = function() {
/*   230 */                 $scope121.$wakingSuspension = susp;
/*   231 */                 return $scope121();
/*   232 */             };
/*   233 */             susp.data = susp.child.data;
/*   234 */             susp.$blk = $blk;
/*   235 */             susp.$loc = $loc;
/*   236 */             susp.$gbl = $gbl;
/*   237 */             susp.$exc = $exc;
/*   238 */             susp.$err = $err;
/*   239 */             susp.$postfinally = $postfinally;
/*   240 */             susp.$filename = $filename;
/*   241 */             susp.$lineno = $lineno;
/*   242 */             susp.$colno = $colno;
/*   243 */             susp.optional = susp.child.optional;
/*   244 */             susp.$tmps = {
/*   245 */                 "n": n,
/*   246 */                 "$compareres123": $compareres123,
/*   247 */                 "$jfalse124": $jfalse124,
/*   248 */                 "$boolopsucc125": $boolopsucc125,
/*   249 */                 "$jtrue126": $jtrue126,
/*   250 */                 "$compareres127": $compareres127,
/*   251 */                 "$loadgbl131": $loadgbl131,
/*   252 */                 "$binop132": $binop132,
/*   253 */                 "$call133": $call133,
/*   254 */                 "$loadgbl134": $loadgbl134,
/*   255 */                 "$binop135": $binop135
/*   256 */             };
/*   257 */             return susp;
/*   258 */         };
/*   259 */         var $blk = 0,
/*   260 */             $exc = [],
/*   261 */             $loc = {},
/*   262 */             $gbl = this,
/*   263 */             $err = undefined,
/*   264 */             $ret = undefined,
/*   265 */             $postfinally = undefined,
/*   266 */             $currLineNo = undefined,
/*   267 */             $currColNo = undefined;
/*   268 */         if (typeof Sk.execStart === 'undefined') {
/*   269 */             Sk.execStart = Date.now()
/*   270 */         }
/*   271 */         if (typeof Sk.lastYield === 'undefined') {
/*   272 */             Sk.lastYield = Date.now()
/*   273 */         }
/*   274 */         if ($scope121.$wakingSuspension !== undefined) {
/*   275 */             $wakeFromSuspension();
/*   276 */         } else {
/*   277 */             Sk.builtin.pyCheckArgs("fib", arguments, 1, 1, false, false);
/*   278 */         }
/*   279 */         while (true) {
/*   280 */             try {
/*   281 */                 var $dateNow = Date.now();
/*   282 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   283 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   284 */                 }
/*   285 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   286 */                     var $susp = $saveSuspension({
/*   287 */                         data: {
/*   288 */                             type: 'Sk.yield'
/*   289 */                         },
/*   290 */                         resume: function() {}
/*   291 */                     }, '/home/sbaxter/benchmarks/skulpt/fib/main.py', $currLineNo, $currColNo);
/*   292 */                     $susp.$blk = $blk;
/*   293 */                     $susp.optional = true;
/*   294 */                     return $susp;
/*   295 */                 }
/*   296 */                 switch ($blk) {
/*   297 */                 case 0:
/*   298 */                     /* --- codeobj entry --- */
/*   299 */                     if (n === undefined) {
/*   300 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   301 */                     }
/*   302 */ 
/*   303 */                     //
/*   304 */                     // line 3:
/*   305 */                     //     if n == 0 or n == 1:
/*   306 */                     //     ^
/*   307 */                     //
/*   308 */                     $currLineNo = 3;
/*   309 */                     $currColNo = 4;
/*   310 */ 
/*   311 */                     if (n === undefined) {
/*   312 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   313 */                     }
/*   314 */                     var $compareres123 = null;
/*   315 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(n, new Sk.builtin.int_(0), 'Eq', true));
/*   316 */                     $blk = 4; /* allowing case fallthrough */
/*   317 */                 case 4:
/*   318 */                     /* --- function return or resume suspension --- */
/*   319 */                     if ($ret && $ret.$isSuspension) {
/*   320 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 3, 7);
/*   321 */                     }
/*   322 */                     $compareres123 = $ret;
/*   323 */                     var $jfalse124 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   324 */                     if ($jfalse124) { /*test failed */
/*   325 */                         $blk = 3;
/*   326 */                         continue;
/*   327 */                     }
/*   328 */                     $blk = 3; /* allowing case fallthrough */
/*   329 */                 case 3:
/*   330 */                     /* --- done --- */
/*   331 */                     var $boolopsucc125 = $compareres123;
/*   332 */                     $boolopsucc125 = $compareres123;
/*   333 */                     var $jtrue126 = ($compareres123 === true || Sk.misceval.isTrue($compareres123));
/*   334 */                     if ($jtrue126) { /*test passed */
/*   335 */                         $blk = 2;
/*   336 */                         continue;
/*   337 */                     }
/*   338 */                     if (n === undefined) {
/*   339 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   340 */                     }
/*   341 */                     var $compareres127 = null;
/*   342 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(n, new Sk.builtin.int_(1), 'Eq', true));
/*   343 */                     $blk = 6; /* allowing case fallthrough */
/*   344 */                 case 6:
/*   345 */                     /* --- function return or resume suspension --- */
/*   346 */                     if ($ret && $ret.$isSuspension) {
/*   347 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 3, 17);
/*   348 */                     }
/*   349 */                     $compareres127 = $ret;
/*   350 */                     var $jfalse128 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   351 */                     if ($jfalse128) { /*test failed */
/*   352 */                         $blk = 5;
/*   353 */                         continue;
/*   354 */                     }
/*   355 */                     $blk = 5; /* allowing case fallthrough */
/*   356 */                 case 5:
/*   357 */                     /* --- done --- */
/*   358 */                     $boolopsucc125 = $compareres127;
/*   359 */                     var $jtrue129 = ($compareres127 === true || Sk.misceval.isTrue($compareres127));
/*   360 */                     if ($jtrue129) { /*test passed */
/*   361 */                         $blk = 2;
/*   362 */                         continue;
/*   363 */                     }
/*   364 */                     $blk = 2; /* allowing case fallthrough */
/*   365 */                 case 2:
/*   366 */                     /* --- end of boolop --- */
/*   367 */                     var $jfalse130 = ($boolopsucc125 === false || !Sk.misceval.isTrue($boolopsucc125));
/*   368 */                     if ($jfalse130) { /*test failed */
/*   369 */                         $blk = 1;
/*   370 */                         continue;
/*   371 */                     }
/*   372 */                     //
/*   373 */                     // line 4:
/*   374 */                     //         return 1
/*   375 */                     //         ^
/*   376 */                     //
/*   377 */                     $currLineNo = 4;
/*   378 */                     $currColNo = 8;
/*   379 */ 
/*   380 */                     return new Sk.builtin.int_(1);
/*   381 */                     $blk = 1; /* allowing case fallthrough */
/*   382 */                 case 1:
/*   383 */                     /* --- end of if --- */
/*   384 */                     //
/*   385 */                     // line 5:
/*   386 */                     //     return fib(n - 1) + fib(n - 2)
/*   387 */                     //     ^
/*   388 */                     //
/*   389 */                     $currLineNo = 5;
/*   390 */                     $currColNo = 4;
/*   391 */ 
/*   392 */                     var $loadgbl131 = Sk.misceval.loadname('fib', $gbl);
/*   393 */                     if (n === undefined) {
/*   394 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   395 */                     }
/*   396 */                     var $binop132 = Sk.abstr.numberBinOp(n, new Sk.builtin.int_(1), 'Sub');
/*   397 */                     $ret;
/*   398 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl131, $binop132);
/*   399 */                     $blk = 7; /* allowing case fallthrough */
/*   400 */                 case 7:
/*   401 */                     /* --- function return or resume suspension --- */
/*   402 */                     if ($ret && $ret.$isSuspension) {
/*   403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 5, 11);
/*   404 */                     }
/*   405 */                     var $call133 = $ret;
/*   406 */                     //
/*   407 */                     // line 5:
/*   408 */                     //     return fib(n - 1) + fib(n - 2)
/*   409 */                     //            ^
/*   410 */                     //
/*   411 */                     $currLineNo = 5;
/*   412 */                     $currColNo = 11;
/*   413 */ 
/*   414 */                     var $loadgbl134 = Sk.misceval.loadname('fib', $gbl);
/*   415 */                     if (n === undefined) {
/*   416 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   417 */                     }
/*   418 */                     var $binop135 = Sk.abstr.numberBinOp(n, new Sk.builtin.int_(2), 'Sub');
/*   419 */                     $ret;
/*   420 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl134, $binop135);
/*   421 */                     $blk = 8; /* allowing case fallthrough */
/*   422 */                 case 8:
/*   423 */                     /* --- function return or resume suspension --- */
/*   424 */                     if ($ret && $ret.$isSuspension) {
/*   425 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 5, 24);
/*   426 */                     }
/*   427 */                     var $call136 = $ret;
/*   428 */                     //
/*   429 */                     // line 5:
/*   430 */                     //     return fib(n - 1) + fib(n - 2)
/*   431 */                     //                         ^
/*   432 */                     //
/*   433 */                     $currLineNo = 5;
/*   434 */                     $currColNo = 24;
/*   435 */ 
/*   436 */                     var $binop137 = Sk.abstr.numberBinOp($call133, $call136, 'Add');
/*   437 */                     return $binop137;
/*   438 */                     return Sk.builtin.none.none$;
/*   439 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   440 */                 }
/*   441 */             } catch (err) {
/*   442 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   443 */                     err = new Sk.builtin.ExternalError(err);
/*   444 */                 }
/*   445 */                 err.traceback.push({
/*   446 */                     lineno: $currLineNo,
/*   447 */                     colno: $currColNo,
/*   448 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   449 */                 });
/*   450 */                 if ($exc.length > 0) {
/*   451 */                     $err = err;
/*   452 */                     $blk = $exc.pop();
/*   453 */                     continue;
/*   454 */                 } else {
/*   455 */                     throw err;
/*   456 */                 }
/*   457 */             }
/*   458 */         }
/*   459 */     });
/*   460 */     var $scope139 = (function $f140$(n) {
/*   461 */         var i, k, times; /* locals */
/*   462 */         var i, k, n, n, times, $loadgbl142, $iter144, $loadgbl142, $call143, $iter144, $loadgbl146, $iter148, $loadgbl146, $call147, $iter148, $loadgbl150;
/*   463 */         var $wakeFromSuspension = function() {
/*   464 */             var susp = $scope139.$wakingSuspension;
/*   465 */             delete $scope139.$wakingSuspension;
/*   466 */             $blk = susp.$blk;
/*   467 */             $loc = susp.$loc;
/*   468 */             $gbl = susp.$gbl;
/*   469 */             $exc = susp.$exc;
/*   470 */             $err = susp.$err;
/*   471 */             $postfinally = susp.$postfinally;
/*   472 */             $currLineNo = susp.$lineno;
/*   473 */             $currColNo = susp.$colno;
/*   474 */             Sk.lastYield = Date.now();
/*   475 */             i = susp.$tmps.i;
/*   476 */             k = susp.$tmps.k;
/*   477 */             n = susp.$tmps.n;
/*   478 */             times = susp.$tmps.times;
/*   479 */             $loadgbl142 = susp.$tmps.$loadgbl142;
/*   480 */             $iter144 = susp.$tmps.$iter144;
/*   481 */             $call143 = susp.$tmps.$call143;
/*   482 */             $loadgbl146 = susp.$tmps.$loadgbl146;
/*   483 */             $iter148 = susp.$tmps.$iter148;
/*   484 */             $call147 = susp.$tmps.$call147;
/*   485 */             $loadgbl150 = susp.$tmps.$loadgbl150;
/*   486 */             try {
/*   487 */                 $ret = susp.child.resume();
/*   488 */             } catch (err) {
/*   489 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   490 */                     err = new Sk.builtin.ExternalError(err);
/*   491 */                 }
/*   492 */                 err.traceback.push({
/*   493 */                     lineno: $currLineNo,
/*   494 */                     colno: $currColNo,
/*   495 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   496 */                 });
/*   497 */                 if ($exc.length > 0) {
/*   498 */                     $err = err;
/*   499 */                     $blk = $exc.pop();
/*   500 */                 } else {
/*   501 */                     throw err;
/*   502 */                 }
/*   503 */             }
/*   504 */         };
/*   505 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   506 */             var susp = new Sk.misceval.Suspension();
/*   507 */             susp.child = $child;
/*   508 */             susp.resume = function() {
/*   509 */                 $scope139.$wakingSuspension = susp;
/*   510 */                 return $scope139();
/*   511 */             };
/*   512 */             susp.data = susp.child.data;
/*   513 */             susp.$blk = $blk;
/*   514 */             susp.$loc = $loc;
/*   515 */             susp.$gbl = $gbl;
/*   516 */             susp.$exc = $exc;
/*   517 */             susp.$err = $err;
/*   518 */             susp.$postfinally = $postfinally;
/*   519 */             susp.$filename = $filename;
/*   520 */             susp.$lineno = $lineno;
/*   521 */             susp.$colno = $colno;
/*   522 */             susp.optional = susp.child.optional;
/*   523 */             susp.$tmps = {
/*   524 */                 "i": i,
/*   525 */                 "k": k,
/*   526 */                 "n": n,
/*   527 */                 "times": times,
/*   528 */                 "$loadgbl142": $loadgbl142,
/*   529 */                 "$iter144": $iter144,
/*   530 */                 "$call143": $call143,
/*   531 */                 "$loadgbl146": $loadgbl146,
/*   532 */                 "$iter148": $iter148,
/*   533 */                 "$call147": $call147,
/*   534 */                 "$loadgbl150": $loadgbl150
/*   535 */             };
/*   536 */             return susp;
/*   537 */         };
/*   538 */         var $blk = 0,
/*   539 */             $exc = [],
/*   540 */             $loc = {},
/*   541 */             $gbl = this,
/*   542 */             $err = undefined,
/*   543 */             $ret = undefined,
/*   544 */             $postfinally = undefined,
/*   545 */             $currLineNo = undefined,
/*   546 */             $currColNo = undefined;
/*   547 */         if (typeof Sk.execStart === 'undefined') {
/*   548 */             Sk.execStart = Date.now()
/*   549 */         }
/*   550 */         if (typeof Sk.lastYield === 'undefined') {
/*   551 */             Sk.lastYield = Date.now()
/*   552 */         }
/*   553 */         if ($scope139.$wakingSuspension !== undefined) {
/*   554 */             $wakeFromSuspension();
/*   555 */         } else {
/*   556 */             Sk.builtin.pyCheckArgs("f", arguments, 1, 1, false, false);
/*   557 */         }
/*   558 */         while (true) {
/*   559 */             try {
/*   560 */                 var $dateNow = Date.now();
/*   561 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   562 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   563 */                 }
/*   564 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   565 */                     var $susp = $saveSuspension({
/*   566 */                         data: {
/*   567 */                             type: 'Sk.yield'
/*   568 */                         },
/*   569 */                         resume: function() {}
/*   570 */                     }, '/home/sbaxter/benchmarks/skulpt/fib/main.py', $currLineNo, $currColNo);
/*   571 */                     $susp.$blk = $blk;
/*   572 */                     $susp.optional = true;
/*   573 */                     return $susp;
/*   574 */                 }
/*   575 */                 switch ($blk) {
/*   576 */                 case 0:
/*   577 */                     /* --- codeobj entry --- */
/*   578 */                     if (n === undefined) {
/*   579 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   580 */                     }
/*   581 */ 
/*   582 */                     //
/*   583 */                     // line 8:
/*   584 */                     //     times = []
/*   585 */                     //     ^
/*   586 */                     //
/*   587 */                     $currLineNo = 8;
/*   588 */                     $currColNo = 4;
/*   589 */ 
/*   590 */                     var $loadlist141 = new Sk.builtins['list']([]);
/*   591 */                     times = $loadlist141;
/*   592 */                     //
/*   593 */                     // line 9:
/*   594 */                     //     for k in range(n):
/*   595 */                     //     ^
/*   596 */                     //
/*   597 */                     $currLineNo = 9;
/*   598 */                     $currColNo = 4;
/*   599 */ 
/*   600 */                     var $loadgbl142 = Sk.misceval.loadname('range', $gbl);
/*   601 */                     if (n === undefined) {
/*   602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   603 */                     }
/*   604 */                     $ret;
/*   605 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl142, n);
/*   606 */                     $blk = 4; /* allowing case fallthrough */
/*   607 */                 case 4:
/*   608 */                     /* --- function return or resume suspension --- */
/*   609 */                     if ($ret && $ret.$isSuspension) {
/*   610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 9, 13);
/*   611 */                     }
/*   612 */                     var $call143 = $ret;
/*   613 */                     //
/*   614 */                     // line 9:
/*   615 */                     //     for k in range(n):
/*   616 */                     //              ^
/*   617 */                     //
/*   618 */                     $currLineNo = 9;
/*   619 */                     $currColNo = 13;
/*   620 */ 
/*   621 */                     var $iter144 = Sk.abstr.iter($call143);
/*   622 */                     $blk = 1; /* allowing case fallthrough */
/*   623 */                 case 1:
/*   624 */                     /* --- for start --- */
/*   625 */                     $ret = Sk.abstr.iternext($iter144, true);
/*   626 */                     $blk = 5; /* allowing case fallthrough */
/*   627 */                 case 5:
/*   628 */                     /* --- function return or resume suspension --- */
/*   629 */                     if ($ret && $ret.$isSuspension) {
/*   630 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 9, 4);
/*   631 */                     }
/*   632 */                     var $next145 = $ret;
/*   633 */                     if ($next145 === undefined) {
/*   634 */                         $blk = 2;
/*   635 */                         continue;
/*   636 */                     }
/*   637 */                     k = $next145;
/*   638 */                     //
/*   639 */                     // line 10:
/*   640 */                     //         for i in range(2000):
/*   641 */                     //         ^
/*   642 */                     //
/*   643 */                     $currLineNo = 10;
/*   644 */                     $currColNo = 8;
/*   645 */ 
/*   646 */                     var $loadgbl146 = Sk.misceval.loadname('range', $gbl);
/*   647 */                     $ret;
/*   648 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl146, new Sk.builtin.int_(2000));
/*   649 */                     $blk = 9; /* allowing case fallthrough */
/*   650 */                 case 9:
/*   651 */                     /* --- function return or resume suspension --- */
/*   652 */                     if ($ret && $ret.$isSuspension) {
/*   653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 10, 17);
/*   654 */                     }
/*   655 */                     var $call147 = $ret;
/*   656 */                     //
/*   657 */                     // line 10:
/*   658 */                     //         for i in range(2000):
/*   659 */                     //                  ^
/*   660 */                     //
/*   661 */                     $currLineNo = 10;
/*   662 */                     $currColNo = 17;
/*   663 */ 
/*   664 */                     var $iter148 = Sk.abstr.iter($call147);
/*   665 */                     $blk = 6; /* allowing case fallthrough */
/*   666 */                 case 6:
/*   667 */                     /* --- for start --- */
/*   668 */                     $ret = Sk.abstr.iternext($iter148, true);
/*   669 */                     $blk = 10; /* allowing case fallthrough */
/*   670 */                 case 10:
/*   671 */                     /* --- function return or resume suspension --- */
/*   672 */                     if ($ret && $ret.$isSuspension) {
/*   673 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 10, 8);
/*   674 */                     }
/*   675 */                     var $next149 = $ret;
/*   676 */                     if ($next149 === undefined) {
/*   677 */                         $blk = 7;
/*   678 */                         continue;
/*   679 */                     }
/*   680 */                     i = $next149;
/*   681 */                     //
/*   682 */                     // line 11:
/*   683 */                     //             fib(20)
/*   684 */                     //             ^
/*   685 */                     //
/*   686 */                     $currLineNo = 11;
/*   687 */                     $currColNo = 12;
/*   688 */ 
/*   689 */                     var $loadgbl150 = Sk.misceval.loadname('fib', $gbl);
/*   690 */                     $ret;
/*   691 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl150, new Sk.builtin.int_(20));
/*   692 */                     $blk = 11; /* allowing case fallthrough */
/*   693 */                 case 11:
/*   694 */                     /* --- function return or resume suspension --- */
/*   695 */                     if ($ret && $ret.$isSuspension) {
/*   696 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 11, 12);
/*   697 */                     }
/*   698 */                     var $call151 = $ret;
/*   699 */                     //
/*   700 */                     // line 11:
/*   701 */                     //             fib(20)
/*   702 */                     //             ^
/*   703 */                     //
/*   704 */                     $currLineNo = 11;
/*   705 */                     $currColNo = 12;
/*   706 */ 
/*   707 */                     $blk = 6; /* jump */
/*   708 */                     continue;
/*   709 */                 case 2:
/*   710 */                     /* --- for cleanup --- */
/*   711 */                     $blk = 3; /* allowing case fallthrough */
/*   712 */                 case 3:
/*   713 */                     /* --- for end --- */
/*   714 */                     return Sk.builtin.none.none$;
/*   715 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   716 */                 case 7:
/*   717 */                     /* --- for cleanup --- */
/*   718 */                     $blk = 8; /* allowing case fallthrough */
/*   719 */                 case 8:
/*   720 */                     /* --- for end --- */
/*   721 */                     $blk = 1; /* jump */
/*   722 */                     continue;
/*   723 */                 }
/*   724 */             } catch (err) {
/*   725 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   726 */                     err = new Sk.builtin.ExternalError(err);
/*   727 */                 }
/*   728 */                 err.traceback.push({
/*   729 */                     lineno: $currLineNo,
/*   730 */                     colno: $currColNo,
/*   731 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   732 */                 });
/*   733 */                 if ($exc.length > 0) {
/*   734 */                     $err = err;
/*   735 */                     $blk = $exc.pop();
/*   736 */                     continue;
/*   737 */                 } else {
/*   738 */                     throw err;
/*   739 */                 }
/*   740 */             }
/*   741 */         }
/*   742 */     });
/*   743 */     return $scope120;
/*   744 */ }();
