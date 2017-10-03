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
/*    70 */         if ($scope120.$wakingSuspension !== undefined) {
/*    71 */             $wakeFromSuspension();
/*    72 */         }
/*    73 */         if (Sk.retainGlobals) {
/*    74 */             if (Sk.globals) {
/*    75 */                 $gbl = Sk.globals;
/*    76 */                 Sk.globals = $gbl;
/*    77 */                 $loc = $gbl;
/*    78 */             } else {
/*    79 */                 Sk.globals = $gbl;
/*    80 */             }
/*    81 */         } else {
/*    82 */             Sk.globals = $gbl;
/*    83 */         }
/*    84 */         while (true) {
/*    85 */             try {
/*    86 */                 switch ($blk) {
/*    87 */                 case 0:
/*    88 */                     /* --- module entry --- */
/*    89 */                     //
/*    90 */                     // line 2:
/*    91 */                     // def fib(n):
/*    92 */                     // ^
/*    93 */                     //
/*    94 */                     $currLineNo = 2;
/*    95 */                     $currColNo = 0;
/*    96 */ 
/*    97 */                     $scope121.co_name = new Sk.builtins['str']('fib');
/*    98 */                     $scope121.co_varnames = ['n'];
/*    99 */                     var $funcobj138 = new Sk.builtins['function']($scope121, $gbl);
/*   100 */                     $loc.fib = $funcobj138;
/*   101 */                     //
/*   102 */                     // line 7:
/*   103 */                     // def f(n):
/*   104 */                     // ^
/*   105 */                     //
/*   106 */                     $currLineNo = 7;
/*   107 */                     $currColNo = 0;
/*   108 */ 
/*   109 */                     $scope139.co_name = new Sk.builtins['str']('f');
/*   110 */                     $scope139.co_varnames = ['n'];
/*   111 */                     var $funcobj152 = new Sk.builtins['function']($scope139, $gbl);
/*   112 */                     $loc.f = $funcobj152;
/*   113 */                     //
/*   114 */                     // line 13:
/*   115 */                     // f(1)
/*   116 */                     // ^
/*   117 */                     //
/*   118 */                     $currLineNo = 13;
/*   119 */                     $currColNo = 0;
/*   120 */ 
/*   121 */                     var $loadname153 = $loc.f !== undefined ? $loc.f : Sk.misceval.loadname('f', $gbl);;
/*   122 */                     $ret;
/*   123 */                     $ret = Sk.misceval.callsimOrSuspend($loadname153, new Sk.builtin.int_(1));
/*   124 */                     $blk = 1; /* allowing case fallthrough */
/*   125 */                 case 1:
/*   126 */                     /* --- function return or resume suspension --- */
/*   127 */                     if ($ret && $ret.$isSuspension) {
/*   128 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 13, 0);
/*   129 */                     }
/*   130 */                     var $call154 = $ret;
/*   131 */                     //
/*   132 */                     // line 13:
/*   133 */                     // f(1)
/*   134 */                     // ^
/*   135 */                     //
/*   136 */                     $currLineNo = 13;
/*   137 */                     $currColNo = 0;
/*   138 */ 
/*   139 */                     return $loc;
/*   140 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   141 */                 }
/*   142 */             } catch (err) {
/*   143 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   144 */                     err = new Sk.builtin.ExternalError(err);
/*   145 */                 }
/*   146 */                 err.traceback.push({
/*   147 */                     lineno: $currLineNo,
/*   148 */                     colno: $currColNo,
/*   149 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   150 */                 });
/*   151 */                 if ($exc.length > 0) {
/*   152 */                     $err = err;
/*   153 */                     $blk = $exc.pop();
/*   154 */                     continue;
/*   155 */                 } else {
/*   156 */                     throw err;
/*   157 */                 }
/*   158 */             }
/*   159 */         }
/*   160 */     });
/*   161 */     var $scope121 = (function $fib122$(n) {
/*   162 */         var n, n, n, n, n, $compareres123, $compareres123, $jfalse124, $boolopsucc125, $jtrue126, $compareres127, $loadgbl131, $binop132, $loadgbl131, $binop132, $call133, $loadgbl134, $binop135;
/*   163 */         var $wakeFromSuspension = function() {
/*   164 */             var susp = $scope121.$wakingSuspension;
/*   165 */             delete $scope121.$wakingSuspension;
/*   166 */             $blk = susp.$blk;
/*   167 */             $loc = susp.$loc;
/*   168 */             $gbl = susp.$gbl;
/*   169 */             $exc = susp.$exc;
/*   170 */             $err = susp.$err;
/*   171 */             $postfinally = susp.$postfinally;
/*   172 */             $currLineNo = susp.$lineno;
/*   173 */             $currColNo = susp.$colno;
/*   174 */             Sk.lastYield = Date.now();
/*   175 */             n = susp.$tmps.n;
/*   176 */             $compareres123 = susp.$tmps.$compareres123;
/*   177 */             $jfalse124 = susp.$tmps.$jfalse124;
/*   178 */             $boolopsucc125 = susp.$tmps.$boolopsucc125;
/*   179 */             $jtrue126 = susp.$tmps.$jtrue126;
/*   180 */             $compareres127 = susp.$tmps.$compareres127;
/*   181 */             $loadgbl131 = susp.$tmps.$loadgbl131;
/*   182 */             $binop132 = susp.$tmps.$binop132;
/*   183 */             $call133 = susp.$tmps.$call133;
/*   184 */             $loadgbl134 = susp.$tmps.$loadgbl134;
/*   185 */             $binop135 = susp.$tmps.$binop135;
/*   186 */             try {
/*   187 */                 $ret = susp.child.resume();
/*   188 */             } catch (err) {
/*   189 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   190 */                     err = new Sk.builtin.ExternalError(err);
/*   191 */                 }
/*   192 */                 err.traceback.push({
/*   193 */                     lineno: $currLineNo,
/*   194 */                     colno: $currColNo,
/*   195 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   196 */                 });
/*   197 */                 if ($exc.length > 0) {
/*   198 */                     $err = err;
/*   199 */                     $blk = $exc.pop();
/*   200 */                 } else {
/*   201 */                     throw err;
/*   202 */                 }
/*   203 */             }
/*   204 */         };
/*   205 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   206 */             var susp = new Sk.misceval.Suspension();
/*   207 */             susp.child = $child;
/*   208 */             susp.resume = function() {
/*   209 */                 $scope121.$wakingSuspension = susp;
/*   210 */                 return $scope121();
/*   211 */             };
/*   212 */             susp.data = susp.child.data;
/*   213 */             susp.$blk = $blk;
/*   214 */             susp.$loc = $loc;
/*   215 */             susp.$gbl = $gbl;
/*   216 */             susp.$exc = $exc;
/*   217 */             susp.$err = $err;
/*   218 */             susp.$postfinally = $postfinally;
/*   219 */             susp.$filename = $filename;
/*   220 */             susp.$lineno = $lineno;
/*   221 */             susp.$colno = $colno;
/*   222 */             susp.optional = susp.child.optional;
/*   223 */             susp.$tmps = {
/*   224 */                 "n": n,
/*   225 */                 "$compareres123": $compareres123,
/*   226 */                 "$jfalse124": $jfalse124,
/*   227 */                 "$boolopsucc125": $boolopsucc125,
/*   228 */                 "$jtrue126": $jtrue126,
/*   229 */                 "$compareres127": $compareres127,
/*   230 */                 "$loadgbl131": $loadgbl131,
/*   231 */                 "$binop132": $binop132,
/*   232 */                 "$call133": $call133,
/*   233 */                 "$loadgbl134": $loadgbl134,
/*   234 */                 "$binop135": $binop135
/*   235 */             };
/*   236 */             return susp;
/*   237 */         };
/*   238 */         var $blk = 0,
/*   239 */             $exc = [],
/*   240 */             $loc = {},
/*   241 */             $gbl = this,
/*   242 */             $err = undefined,
/*   243 */             $ret = undefined,
/*   244 */             $postfinally = undefined,
/*   245 */             $currLineNo = undefined,
/*   246 */             $currColNo = undefined;
/*   247 */         if ($scope121.$wakingSuspension !== undefined) {
/*   248 */             $wakeFromSuspension();
/*   249 */         } else {
/*   250 */             Sk.builtin.pyCheckArgs("fib", arguments, 1, 1, false, false);
/*   251 */         }
/*   252 */         while (true) {
/*   253 */             try {
/*   254 */                 switch ($blk) {
/*   255 */                 case 0:
/*   256 */                     /* --- codeobj entry --- */
/*   257 */                     if (n === undefined) {
/*   258 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   259 */                     }
/*   260 */ 
/*   261 */                     //
/*   262 */                     // line 3:
/*   263 */                     //     if n == 0 or n == 1:
/*   264 */                     //     ^
/*   265 */                     //
/*   266 */                     $currLineNo = 3;
/*   267 */                     $currColNo = 4;
/*   268 */ 
/*   269 */                     if (n === undefined) {
/*   270 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   271 */                     }
/*   272 */                     var $compareres123 = null;
/*   273 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(n, new Sk.builtin.int_(0), 'Eq', true));
/*   274 */                     $blk = 4; /* allowing case fallthrough */
/*   275 */                 case 4:
/*   276 */                     /* --- function return or resume suspension --- */
/*   277 */                     if ($ret && $ret.$isSuspension) {
/*   278 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 3, 7);
/*   279 */                     }
/*   280 */                     $compareres123 = $ret;
/*   281 */                     var $jfalse124 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   282 */                     if ($jfalse124) { /*test failed */
/*   283 */                         $blk = 3;
/*   284 */                         continue;
/*   285 */                     }
/*   286 */                     $blk = 3; /* allowing case fallthrough */
/*   287 */                 case 3:
/*   288 */                     /* --- done --- */
/*   289 */                     var $boolopsucc125 = $compareres123;
/*   290 */                     $boolopsucc125 = $compareres123;
/*   291 */                     var $jtrue126 = ($compareres123 === true || Sk.misceval.isTrue($compareres123));
/*   292 */                     if ($jtrue126) { /*test passed */
/*   293 */                         $blk = 2;
/*   294 */                         continue;
/*   295 */                     }
/*   296 */                     if (n === undefined) {
/*   297 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   298 */                     }
/*   299 */                     var $compareres127 = null;
/*   300 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(n, new Sk.builtin.int_(1), 'Eq', true));
/*   301 */                     $blk = 6; /* allowing case fallthrough */
/*   302 */                 case 6:
/*   303 */                     /* --- function return or resume suspension --- */
/*   304 */                     if ($ret && $ret.$isSuspension) {
/*   305 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 3, 17);
/*   306 */                     }
/*   307 */                     $compareres127 = $ret;
/*   308 */                     var $jfalse128 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   309 */                     if ($jfalse128) { /*test failed */
/*   310 */                         $blk = 5;
/*   311 */                         continue;
/*   312 */                     }
/*   313 */                     $blk = 5; /* allowing case fallthrough */
/*   314 */                 case 5:
/*   315 */                     /* --- done --- */
/*   316 */                     $boolopsucc125 = $compareres127;
/*   317 */                     var $jtrue129 = ($compareres127 === true || Sk.misceval.isTrue($compareres127));
/*   318 */                     if ($jtrue129) { /*test passed */
/*   319 */                         $blk = 2;
/*   320 */                         continue;
/*   321 */                     }
/*   322 */                     $blk = 2; /* allowing case fallthrough */
/*   323 */                 case 2:
/*   324 */                     /* --- end of boolop --- */
/*   325 */                     var $jfalse130 = ($boolopsucc125 === false || !Sk.misceval.isTrue($boolopsucc125));
/*   326 */                     if ($jfalse130) { /*test failed */
/*   327 */                         $blk = 1;
/*   328 */                         continue;
/*   329 */                     }
/*   330 */                     //
/*   331 */                     // line 4:
/*   332 */                     //         return 1
/*   333 */                     //         ^
/*   334 */                     //
/*   335 */                     $currLineNo = 4;
/*   336 */                     $currColNo = 8;
/*   337 */ 
/*   338 */                     return new Sk.builtin.int_(1);
/*   339 */                     $blk = 1; /* allowing case fallthrough */
/*   340 */                 case 1:
/*   341 */                     /* --- end of if --- */
/*   342 */                     //
/*   343 */                     // line 5:
/*   344 */                     //     return fib(n - 1) + fib(n - 2)
/*   345 */                     //     ^
/*   346 */                     //
/*   347 */                     $currLineNo = 5;
/*   348 */                     $currColNo = 4;
/*   349 */ 
/*   350 */                     var $loadgbl131 = Sk.misceval.loadname('fib', $gbl);
/*   351 */                     if (n === undefined) {
/*   352 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   353 */                     }
/*   354 */                     var $binop132 = Sk.abstr.numberBinOp(n, new Sk.builtin.int_(1), 'Sub');
/*   355 */                     $ret;
/*   356 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl131, $binop132);
/*   357 */                     $blk = 7; /* allowing case fallthrough */
/*   358 */                 case 7:
/*   359 */                     /* --- function return or resume suspension --- */
/*   360 */                     if ($ret && $ret.$isSuspension) {
/*   361 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 5, 11);
/*   362 */                     }
/*   363 */                     var $call133 = $ret;
/*   364 */                     //
/*   365 */                     // line 5:
/*   366 */                     //     return fib(n - 1) + fib(n - 2)
/*   367 */                     //            ^
/*   368 */                     //
/*   369 */                     $currLineNo = 5;
/*   370 */                     $currColNo = 11;
/*   371 */ 
/*   372 */                     var $loadgbl134 = Sk.misceval.loadname('fib', $gbl);
/*   373 */                     if (n === undefined) {
/*   374 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   375 */                     }
/*   376 */                     var $binop135 = Sk.abstr.numberBinOp(n, new Sk.builtin.int_(2), 'Sub');
/*   377 */                     $ret;
/*   378 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl134, $binop135);
/*   379 */                     $blk = 8; /* allowing case fallthrough */
/*   380 */                 case 8:
/*   381 */                     /* --- function return or resume suspension --- */
/*   382 */                     if ($ret && $ret.$isSuspension) {
/*   383 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 5, 24);
/*   384 */                     }
/*   385 */                     var $call136 = $ret;
/*   386 */                     //
/*   387 */                     // line 5:
/*   388 */                     //     return fib(n - 1) + fib(n - 2)
/*   389 */                     //                         ^
/*   390 */                     //
/*   391 */                     $currLineNo = 5;
/*   392 */                     $currColNo = 24;
/*   393 */ 
/*   394 */                     var $binop137 = Sk.abstr.numberBinOp($call133, $call136, 'Add');
/*   395 */                     return $binop137;
/*   396 */                     return Sk.builtin.none.none$;
/*   397 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   398 */                 }
/*   399 */             } catch (err) {
/*   400 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   401 */                     err = new Sk.builtin.ExternalError(err);
/*   402 */                 }
/*   403 */                 err.traceback.push({
/*   404 */                     lineno: $currLineNo,
/*   405 */                     colno: $currColNo,
/*   406 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   407 */                 });
/*   408 */                 if ($exc.length > 0) {
/*   409 */                     $err = err;
/*   410 */                     $blk = $exc.pop();
/*   411 */                     continue;
/*   412 */                 } else {
/*   413 */                     throw err;
/*   414 */                 }
/*   415 */             }
/*   416 */         }
/*   417 */     });
/*   418 */     var $scope139 = (function $f140$(n) {
/*   419 */         var i, k, times; /* locals */
/*   420 */         var i, k, n, n, times, $loadgbl142, $iter144, $loadgbl142, $call143, $iter144, $loadgbl146, $iter148, $loadgbl146, $call147, $iter148, $loadgbl150;
/*   421 */         var $wakeFromSuspension = function() {
/*   422 */             var susp = $scope139.$wakingSuspension;
/*   423 */             delete $scope139.$wakingSuspension;
/*   424 */             $blk = susp.$blk;
/*   425 */             $loc = susp.$loc;
/*   426 */             $gbl = susp.$gbl;
/*   427 */             $exc = susp.$exc;
/*   428 */             $err = susp.$err;
/*   429 */             $postfinally = susp.$postfinally;
/*   430 */             $currLineNo = susp.$lineno;
/*   431 */             $currColNo = susp.$colno;
/*   432 */             Sk.lastYield = Date.now();
/*   433 */             i = susp.$tmps.i;
/*   434 */             k = susp.$tmps.k;
/*   435 */             n = susp.$tmps.n;
/*   436 */             times = susp.$tmps.times;
/*   437 */             $loadgbl142 = susp.$tmps.$loadgbl142;
/*   438 */             $iter144 = susp.$tmps.$iter144;
/*   439 */             $call143 = susp.$tmps.$call143;
/*   440 */             $loadgbl146 = susp.$tmps.$loadgbl146;
/*   441 */             $iter148 = susp.$tmps.$iter148;
/*   442 */             $call147 = susp.$tmps.$call147;
/*   443 */             $loadgbl150 = susp.$tmps.$loadgbl150;
/*   444 */             try {
/*   445 */                 $ret = susp.child.resume();
/*   446 */             } catch (err) {
/*   447 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   448 */                     err = new Sk.builtin.ExternalError(err);
/*   449 */                 }
/*   450 */                 err.traceback.push({
/*   451 */                     lineno: $currLineNo,
/*   452 */                     colno: $currColNo,
/*   453 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   454 */                 });
/*   455 */                 if ($exc.length > 0) {
/*   456 */                     $err = err;
/*   457 */                     $blk = $exc.pop();
/*   458 */                 } else {
/*   459 */                     throw err;
/*   460 */                 }
/*   461 */             }
/*   462 */         };
/*   463 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   464 */             var susp = new Sk.misceval.Suspension();
/*   465 */             susp.child = $child;
/*   466 */             susp.resume = function() {
/*   467 */                 $scope139.$wakingSuspension = susp;
/*   468 */                 return $scope139();
/*   469 */             };
/*   470 */             susp.data = susp.child.data;
/*   471 */             susp.$blk = $blk;
/*   472 */             susp.$loc = $loc;
/*   473 */             susp.$gbl = $gbl;
/*   474 */             susp.$exc = $exc;
/*   475 */             susp.$err = $err;
/*   476 */             susp.$postfinally = $postfinally;
/*   477 */             susp.$filename = $filename;
/*   478 */             susp.$lineno = $lineno;
/*   479 */             susp.$colno = $colno;
/*   480 */             susp.optional = susp.child.optional;
/*   481 */             susp.$tmps = {
/*   482 */                 "i": i,
/*   483 */                 "k": k,
/*   484 */                 "n": n,
/*   485 */                 "times": times,
/*   486 */                 "$loadgbl142": $loadgbl142,
/*   487 */                 "$iter144": $iter144,
/*   488 */                 "$call143": $call143,
/*   489 */                 "$loadgbl146": $loadgbl146,
/*   490 */                 "$iter148": $iter148,
/*   491 */                 "$call147": $call147,
/*   492 */                 "$loadgbl150": $loadgbl150
/*   493 */             };
/*   494 */             return susp;
/*   495 */         };
/*   496 */         var $blk = 0,
/*   497 */             $exc = [],
/*   498 */             $loc = {},
/*   499 */             $gbl = this,
/*   500 */             $err = undefined,
/*   501 */             $ret = undefined,
/*   502 */             $postfinally = undefined,
/*   503 */             $currLineNo = undefined,
/*   504 */             $currColNo = undefined;
/*   505 */         if ($scope139.$wakingSuspension !== undefined) {
/*   506 */             $wakeFromSuspension();
/*   507 */         } else {
/*   508 */             Sk.builtin.pyCheckArgs("f", arguments, 1, 1, false, false);
/*   509 */         }
/*   510 */         while (true) {
/*   511 */             try {
/*   512 */                 switch ($blk) {
/*   513 */                 case 0:
/*   514 */                     /* --- codeobj entry --- */
/*   515 */                     if (n === undefined) {
/*   516 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   517 */                     }
/*   518 */ 
/*   519 */                     //
/*   520 */                     // line 8:
/*   521 */                     //     times = []
/*   522 */                     //     ^
/*   523 */                     //
/*   524 */                     $currLineNo = 8;
/*   525 */                     $currColNo = 4;
/*   526 */ 
/*   527 */                     var $loadlist141 = new Sk.builtins['list']([]);
/*   528 */                     times = $loadlist141;
/*   529 */                     //
/*   530 */                     // line 9:
/*   531 */                     //     for k in range(n):
/*   532 */                     //     ^
/*   533 */                     //
/*   534 */                     $currLineNo = 9;
/*   535 */                     $currColNo = 4;
/*   536 */ 
/*   537 */                     var $loadgbl142 = Sk.misceval.loadname('range', $gbl);
/*   538 */                     if (n === undefined) {
/*   539 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   540 */                     }
/*   541 */                     $ret;
/*   542 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl142, n);
/*   543 */                     $blk = 4; /* allowing case fallthrough */
/*   544 */                 case 4:
/*   545 */                     /* --- function return or resume suspension --- */
/*   546 */                     if ($ret && $ret.$isSuspension) {
/*   547 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 9, 13);
/*   548 */                     }
/*   549 */                     var $call143 = $ret;
/*   550 */                     //
/*   551 */                     // line 9:
/*   552 */                     //     for k in range(n):
/*   553 */                     //              ^
/*   554 */                     //
/*   555 */                     $currLineNo = 9;
/*   556 */                     $currColNo = 13;
/*   557 */ 
/*   558 */                     var $iter144 = Sk.abstr.iter($call143);
/*   559 */                     $blk = 1; /* allowing case fallthrough */
/*   560 */                 case 1:
/*   561 */                     /* --- for start --- */
/*   562 */                     $ret = Sk.abstr.iternext($iter144, true);
/*   563 */                     $blk = 5; /* allowing case fallthrough */
/*   564 */                 case 5:
/*   565 */                     /* --- function return or resume suspension --- */
/*   566 */                     if ($ret && $ret.$isSuspension) {
/*   567 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 9, 4);
/*   568 */                     }
/*   569 */                     var $next145 = $ret;
/*   570 */                     if ($next145 === undefined) {
/*   571 */                         $blk = 2;
/*   572 */                         continue;
/*   573 */                     }
/*   574 */                     k = $next145;
/*   575 */                     //
/*   576 */                     // line 10:
/*   577 */                     //         for i in range(2000):
/*   578 */                     //         ^
/*   579 */                     //
/*   580 */                     $currLineNo = 10;
/*   581 */                     $currColNo = 8;
/*   582 */ 
/*   583 */                     var $loadgbl146 = Sk.misceval.loadname('range', $gbl);
/*   584 */                     $ret;
/*   585 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl146, new Sk.builtin.int_(2000));
/*   586 */                     $blk = 9; /* allowing case fallthrough */
/*   587 */                 case 9:
/*   588 */                     /* --- function return or resume suspension --- */
/*   589 */                     if ($ret && $ret.$isSuspension) {
/*   590 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 10, 17);
/*   591 */                     }
/*   592 */                     var $call147 = $ret;
/*   593 */                     //
/*   594 */                     // line 10:
/*   595 */                     //         for i in range(2000):
/*   596 */                     //                  ^
/*   597 */                     //
/*   598 */                     $currLineNo = 10;
/*   599 */                     $currColNo = 17;
/*   600 */ 
/*   601 */                     var $iter148 = Sk.abstr.iter($call147);
/*   602 */                     $blk = 6; /* allowing case fallthrough */
/*   603 */                 case 6:
/*   604 */                     /* --- for start --- */
/*   605 */                     $ret = Sk.abstr.iternext($iter148, true);
/*   606 */                     $blk = 10; /* allowing case fallthrough */
/*   607 */                 case 10:
/*   608 */                     /* --- function return or resume suspension --- */
/*   609 */                     if ($ret && $ret.$isSuspension) {
/*   610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 10, 8);
/*   611 */                     }
/*   612 */                     var $next149 = $ret;
/*   613 */                     if ($next149 === undefined) {
/*   614 */                         $blk = 7;
/*   615 */                         continue;
/*   616 */                     }
/*   617 */                     i = $next149;
/*   618 */                     //
/*   619 */                     // line 11:
/*   620 */                     //             fib(20)
/*   621 */                     //             ^
/*   622 */                     //
/*   623 */                     $currLineNo = 11;
/*   624 */                     $currColNo = 12;
/*   625 */ 
/*   626 */                     var $loadgbl150 = Sk.misceval.loadname('fib', $gbl);
/*   627 */                     $ret;
/*   628 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl150, new Sk.builtin.int_(20));
/*   629 */                     $blk = 11; /* allowing case fallthrough */
/*   630 */                 case 11:
/*   631 */                     /* --- function return or resume suspension --- */
/*   632 */                     if ($ret && $ret.$isSuspension) {
/*   633 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/fib/main.py', 11, 12);
/*   634 */                     }
/*   635 */                     var $call151 = $ret;
/*   636 */                     //
/*   637 */                     // line 11:
/*   638 */                     //             fib(20)
/*   639 */                     //             ^
/*   640 */                     //
/*   641 */                     $currLineNo = 11;
/*   642 */                     $currColNo = 12;
/*   643 */ 
/*   644 */                     $blk = 6; /* jump */
/*   645 */                     continue;
/*   646 */                 case 2:
/*   647 */                     /* --- for cleanup --- */
/*   648 */                     $blk = 3; /* allowing case fallthrough */
/*   649 */                 case 3:
/*   650 */                     /* --- for end --- */
/*   651 */                     return Sk.builtin.none.none$;
/*   652 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   653 */                 case 7:
/*   654 */                     /* --- for cleanup --- */
/*   655 */                     $blk = 8; /* allowing case fallthrough */
/*   656 */                 case 8:
/*   657 */                     /* --- for end --- */
/*   658 */                     $blk = 1; /* jump */
/*   659 */                     continue;
/*   660 */                 }
/*   661 */             } catch (err) {
/*   662 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   663 */                     err = new Sk.builtin.ExternalError(err);
/*   664 */                 }
/*   665 */                 err.traceback.push({
/*   666 */                     lineno: $currLineNo,
/*   667 */                     colno: $currColNo,
/*   668 */                     filename: '/home/sbaxter/benchmarks/skulpt/fib/main.py'
/*   669 */                 });
/*   670 */                 if ($exc.length > 0) {
/*   671 */                     $err = err;
/*   672 */                     $blk = $exc.pop();
/*   673 */                     continue;
/*   674 */                 } else {
/*   675 */                     throw err;
/*   676 */                 }
/*   677 */             }
/*   678 */         }
/*   679 */     });
/*   680 */     return $scope120;
/*   681 */ }();
