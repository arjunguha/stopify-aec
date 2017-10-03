/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname248;
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
/*    16 */             $loadname248 = susp.$tmps.$loadname248;
/*    17 */             try {
/*    18 */                 $ret = susp.child.resume();
/*    19 */             } catch (err) {
/*    20 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    21 */                     err = new Sk.builtin.ExternalError(err);
/*    22 */                 }
/*    23 */                 err.traceback.push({
/*    24 */                     lineno: $currLineNo,
/*    25 */                     colno: $currColNo,
/*    26 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
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
/*    55 */                 "$loadname248": $loadname248
/*    56 */             };
/*    57 */             return susp;
/*    58 */         };
/*    59 */         var $gbl = {},
/*    60 */             $blk = 0,
/*    61 */             $exc = [],
/*    62 */             $loc = $gbl,
/*    63 */             $err = undefined;
/*    64 */         $gbl.__name__ = $modname;
/*    65 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py');
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
/*    90 */                     // line 10:
/*    91 */                     // from math            import sqrt
/*    92 */                     // ^
/*    93 */                     //
/*    94 */                     $currLineNo = 10;
/*    95 */                     $currColNo = 0;
/*    96 */ 
/*    97 */                     $ret = Sk.builtin.__import__('math', $gbl, $loc, ['sqrt']);
/*    98 */                     $blk = 1; /* allowing case fallthrough */
/*    99 */                 case 1:
/*   100 */                     /* --- function return or resume suspension --- */
/*   101 */                     if ($ret && $ret.$isSuspension) {
/*   102 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 10, 0);
/*   103 */                     }
/*   104 */                     var $module121 = $ret;
/*   105 */                     var $item122 = Sk.abstr.gattr($module121, 'sqrt');
/*   106 */                     $loc.sqrt = $item122;
/*   107 */                     //
/*   108 */                     // line 11:
/*   109 */                     // import time
/*   110 */                     // ^
/*   111 */                     //
/*   112 */                     $currLineNo = 11;
/*   113 */                     $currColNo = 0;
/*   114 */ 
/*   115 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   116 */                     $blk = 2; /* allowing case fallthrough */
/*   117 */                 case 2:
/*   118 */                     /* --- function return or resume suspension --- */
/*   119 */                     if ($ret && $ret.$isSuspension) {
/*   120 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 11, 0);
/*   121 */                     }
/*   122 */                     var $module123 = $ret;
/*   123 */                     $loc.time = $module123;
/*   124 */                     //
/*   125 */                     // line 13:
/*   126 */                     // def eval_A (i, j):
/*   127 */                     // ^
/*   128 */                     //
/*   129 */                     $currLineNo = 13;
/*   130 */                     $currColNo = 0;
/*   131 */ 
/*   132 */                     $scope124.co_name = new Sk.builtins['str']('eval_A');
/*   133 */                     $scope124.co_varnames = ['i', 'j'];
/*   134 */                     var $funcobj134 = new Sk.builtins['function']($scope124, $gbl);
/*   135 */                     $loc.eval_A = $funcobj134;
/*   136 */                     //
/*   137 */                     // line 16:
/*   138 */                     // def eval_A_times_u (u):
/*   139 */                     // ^
/*   140 */                     //
/*   141 */                     $currLineNo = 16;
/*   142 */                     $currColNo = 0;
/*   143 */ 
/*   144 */                     $scope135.co_name = new Sk.builtins['str']('eval_A_times_u');
/*   145 */                     $scope135.co_varnames = ['u'];
/*   146 */                     var $funcobj155 = new Sk.builtins['function']($scope135, $gbl);
/*   147 */                     $loc.eval_A_times_u = $funcobj155;
/*   148 */                     //
/*   149 */                     // line 20:
/*   150 */                     // def eval_At_times_u (u):
/*   151 */                     // ^
/*   152 */                     //
/*   153 */                     $currLineNo = 20;
/*   154 */                     $currColNo = 0;
/*   155 */ 
/*   156 */                     $scope156.co_name = new Sk.builtins['str']('eval_At_times_u');
/*   157 */                     $scope156.co_varnames = ['u'];
/*   158 */                     var $funcobj176 = new Sk.builtins['function']($scope156, $gbl);
/*   159 */                     $loc.eval_At_times_u = $funcobj176;
/*   160 */                     //
/*   161 */                     // line 24:
/*   162 */                     // def eval_AtA_times_u (u):
/*   163 */                     // ^
/*   164 */                     //
/*   165 */                     $currLineNo = 24;
/*   166 */                     $currColNo = 0;
/*   167 */ 
/*   168 */                     $scope177.co_name = new Sk.builtins['str']('eval_AtA_times_u');
/*   169 */                     $scope177.co_varnames = ['u'];
/*   170 */                     var $funcobj183 = new Sk.builtins['function']($scope177, $gbl);
/*   171 */                     $loc.eval_AtA_times_u = $funcobj183;
/*   172 */                     //
/*   173 */                     // line 27:
/*   174 */                     // def part_A_times_u(xxx_todo_changeme):
/*   175 */                     // ^
/*   176 */                     //
/*   177 */                     $currLineNo = 27;
/*   178 */                     $currColNo = 0;
/*   179 */ 
/*   180 */                     $scope184.co_name = new Sk.builtins['str']('part_A_times_u');
/*   181 */                     $scope184.co_varnames = ['xxx_todo_changeme'];
/*   182 */                     var $funcobj196 = new Sk.builtins['function']($scope184, $gbl);
/*   183 */                     $loc.part_A_times_u = $funcobj196;
/*   184 */                     //
/*   185 */                     // line 34:
/*   186 */                     // def part_At_times_u(xxx_todo_changeme1):
/*   187 */                     // ^
/*   188 */                     //
/*   189 */                     $currLineNo = 34;
/*   190 */                     $currColNo = 0;
/*   191 */ 
/*   192 */                     $scope197.co_name = new Sk.builtins['str']('part_At_times_u');
/*   193 */                     $scope197.co_varnames = ['xxx_todo_changeme1'];
/*   194 */                     var $funcobj209 = new Sk.builtins['function']($scope197, $gbl);
/*   195 */                     $loc.part_At_times_u = $funcobj209;
/*   196 */                     //
/*   197 */                     // line 41:
/*   198 */                     // DEFAULT_N = 130
/*   199 */                     // ^
/*   200 */                     //
/*   201 */                     $currLineNo = 41;
/*   202 */                     $currColNo = 0;
/*   203 */ 
/*   204 */                     $loc.DEFAULT_N = new Sk.builtin.int_(130);
/*   205 */                     //
/*   206 */                     // line 43:
/*   207 */                     // def main(n):
/*   208 */                     // ^
/*   209 */                     //
/*   210 */                     $currLineNo = 43;
/*   211 */                     $currColNo = 0;
/*   212 */ 
/*   213 */                     $scope210.co_name = new Sk.builtins['str']('main');
/*   214 */                     $scope210.co_varnames = ['n'];
/*   215 */                     var $funcobj247 = new Sk.builtins['function']($scope210, $gbl);
/*   216 */                     $loc.main = $funcobj247;
/*   217 */                     //
/*   218 */                     // line 62:
/*   219 */                     // main(1)
/*   220 */                     // ^
/*   221 */                     //
/*   222 */                     $currLineNo = 62;
/*   223 */                     $currColNo = 0;
/*   224 */ 
/*   225 */                     var $loadname248 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   226 */                     $ret;
/*   227 */                     $ret = Sk.misceval.callsimOrSuspend($loadname248, new Sk.builtin.int_(1));
/*   228 */                     $blk = 3; /* allowing case fallthrough */
/*   229 */                 case 3:
/*   230 */                     /* --- function return or resume suspension --- */
/*   231 */                     if ($ret && $ret.$isSuspension) {
/*   232 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 62, 0);
/*   233 */                     }
/*   234 */                     var $call249 = $ret;
/*   235 */                     //
/*   236 */                     // line 62:
/*   237 */                     // main(1)
/*   238 */                     // ^
/*   239 */                     //
/*   240 */                     $currLineNo = 62;
/*   241 */                     $currColNo = 0;
/*   242 */ 
/*   243 */                     return $loc;
/*   244 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   245 */                 }
/*   246 */             } catch (err) {
/*   247 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   248 */                     err = new Sk.builtin.ExternalError(err);
/*   249 */                 }
/*   250 */                 err.traceback.push({
/*   251 */                     lineno: $currLineNo,
/*   252 */                     colno: $currColNo,
/*   253 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   254 */                 });
/*   255 */                 if ($exc.length > 0) {
/*   256 */                     $err = err;
/*   257 */                     $blk = $exc.pop();
/*   258 */                     continue;
/*   259 */                 } else {
/*   260 */                     throw err;
/*   261 */                 }
/*   262 */             }
/*   263 */         }
/*   264 */     });
/*   265 */     var $scope124 = (function $eval_A125$(i, j) {
/*   266 */         var $blk = 0,
/*   267 */             $exc = [],
/*   268 */             $loc = {},
/*   269 */             $gbl = this,
/*   270 */             $err = undefined,
/*   271 */             $ret = undefined,
/*   272 */             $postfinally = undefined,
/*   273 */             $currLineNo = undefined,
/*   274 */             $currColNo = undefined;
/*   275 */         if ($scope124.$wakingSuspension !== undefined) {
/*   276 */             $wakeFromSuspension();
/*   277 */         } else {
/*   278 */             Sk.builtin.pyCheckArgs("eval_A", arguments, 2, 2, false, false);
/*   279 */         }
/*   280 */         while (true) {
/*   281 */             try {
/*   282 */                 switch ($blk) {
/*   283 */                 case 0:
/*   284 */                     /* --- codeobj entry --- */
/*   285 */                     if (i === undefined) {
/*   286 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   287 */                     }
/*   288 */                     if (j === undefined) {
/*   289 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   290 */                     }
/*   291 */ 
/*   292 */                     //
/*   293 */                     // line 14:
/*   294 */                     //     return 1.0 / ((i + j) * (i + j + 1) / 2 + i + 1)
/*   295 */                     //     ^
/*   296 */                     //
/*   297 */                     $currLineNo = 14;
/*   298 */                     $currColNo = 4;
/*   299 */ 
/*   300 */                     if (i === undefined) {
/*   301 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   302 */                     }
/*   303 */                     if (j === undefined) {
/*   304 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   305 */                     }
/*   306 */                     var $binop126 = Sk.abstr.numberBinOp(i, j, 'Add');
/*   307 */                     if (i === undefined) {
/*   308 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   309 */                     }
/*   310 */                     if (j === undefined) {
/*   311 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   312 */                     }
/*   313 */                     var $binop127 = Sk.abstr.numberBinOp(i, j, 'Add');
/*   314 */                     var $binop128 = Sk.abstr.numberBinOp($binop127, new Sk.builtin.int_(1), 'Add');
/*   315 */                     var $binop129 = Sk.abstr.numberBinOp($binop126, $binop128, 'Mult');
/*   316 */                     var $binop130 = Sk.abstr.numberBinOp($binop129, new Sk.builtin.int_(2), 'Div');
/*   317 */                     if (i === undefined) {
/*   318 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   319 */                     }
/*   320 */                     var $binop131 = Sk.abstr.numberBinOp($binop130, i, 'Add');
/*   321 */                     var $binop132 = Sk.abstr.numberBinOp($binop131, new Sk.builtin.int_(1), 'Add');
/*   322 */                     var $binop133 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), $binop132, 'Div');
/*   323 */                     return $binop133;
/*   324 */                     return Sk.builtin.none.none$;
/*   325 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   326 */                 }
/*   327 */             } catch (err) {
/*   328 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   329 */                     err = new Sk.builtin.ExternalError(err);
/*   330 */                 }
/*   331 */                 err.traceback.push({
/*   332 */                     lineno: $currLineNo,
/*   333 */                     colno: $currColNo,
/*   334 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   335 */                 });
/*   336 */                 if ($exc.length > 0) {
/*   337 */                     $err = err;
/*   338 */                     $blk = $exc.pop();
/*   339 */                     continue;
/*   340 */                 } else {
/*   341 */                     throw err;
/*   342 */                 }
/*   343 */             }
/*   344 */         }
/*   345 */     });
/*   346 */     var $scope135 = (function $eval_A_times_u136$(u) {
/*   347 */         // has cell
/*   348 */         var args; /* locals */
/*   349 */         var args, args, $gener144, $gener145, $loadgbl146, $loadgbl147, $gener144, $gener145, $loadgbl146, $loadgbl147, $call148, $loadgbl150, $loadgbl151, $loadgbl152, $loadgbl150, $loadgbl151, $loadgbl152, $call153;
/*   350 */         var $wakeFromSuspension = function() {
/*   351 */             var susp = $scope135.$wakingSuspension;
/*   352 */             delete $scope135.$wakingSuspension;
/*   353 */             $blk = susp.$blk;
/*   354 */             $loc = susp.$loc;
/*   355 */             $gbl = susp.$gbl;
/*   356 */             $exc = susp.$exc;
/*   357 */             $err = susp.$err;
/*   358 */             $postfinally = susp.$postfinally;
/*   359 */             $currLineNo = susp.$lineno;
/*   360 */             $currColNo = susp.$colno;
/*   361 */             Sk.lastYield = Date.now();
/*   362 */             $cell = susp.$cell;
/*   363 */             args = susp.$tmps.args;
/*   364 */             $gener144 = susp.$tmps.$gener144;
/*   365 */             $gener145 = susp.$tmps.$gener145;
/*   366 */             $loadgbl146 = susp.$tmps.$loadgbl146;
/*   367 */             $loadgbl147 = susp.$tmps.$loadgbl147;
/*   368 */             $call148 = susp.$tmps.$call148;
/*   369 */             $loadgbl150 = susp.$tmps.$loadgbl150;
/*   370 */             $loadgbl151 = susp.$tmps.$loadgbl151;
/*   371 */             $loadgbl152 = susp.$tmps.$loadgbl152;
/*   372 */             $call153 = susp.$tmps.$call153;
/*   373 */             try {
/*   374 */                 $ret = susp.child.resume();
/*   375 */             } catch (err) {
/*   376 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   377 */                     err = new Sk.builtin.ExternalError(err);
/*   378 */                 }
/*   379 */                 err.traceback.push({
/*   380 */                     lineno: $currLineNo,
/*   381 */                     colno: $currColNo,
/*   382 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   383 */                 });
/*   384 */                 if ($exc.length > 0) {
/*   385 */                     $err = err;
/*   386 */                     $blk = $exc.pop();
/*   387 */                 } else {
/*   388 */                     throw err;
/*   389 */                 }
/*   390 */             }
/*   391 */         };
/*   392 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   393 */             var susp = new Sk.misceval.Suspension();
/*   394 */             susp.child = $child;
/*   395 */             susp.resume = function() {
/*   396 */                 $scope135.$wakingSuspension = susp;
/*   397 */                 return $scope135();
/*   398 */             };
/*   399 */             susp.data = susp.child.data;
/*   400 */             susp.$blk = $blk;
/*   401 */             susp.$loc = $loc;
/*   402 */             susp.$gbl = $gbl;
/*   403 */             susp.$exc = $exc;
/*   404 */             susp.$err = $err;
/*   405 */             susp.$postfinally = $postfinally;
/*   406 */             susp.$filename = $filename;
/*   407 */             susp.$lineno = $lineno;
/*   408 */             susp.$colno = $colno;
/*   409 */             susp.optional = susp.child.optional;
/*   410 */             susp.$cell = $cell;
/*   411 */             susp.$tmps = {
/*   412 */                 "args": args,
/*   413 */                 "$gener144": $gener144,
/*   414 */                 "$gener145": $gener145,
/*   415 */                 "$loadgbl146": $loadgbl146,
/*   416 */                 "$loadgbl147": $loadgbl147,
/*   417 */                 "$call148": $call148,
/*   418 */                 "$loadgbl150": $loadgbl150,
/*   419 */                 "$loadgbl151": $loadgbl151,
/*   420 */                 "$loadgbl152": $loadgbl152,
/*   421 */                 "$call153": $call153
/*   422 */             };
/*   423 */             return susp;
/*   424 */         };
/*   425 */         var $blk = 0,
/*   426 */             $exc = [],
/*   427 */             $loc = {},
/*   428 */             $cell = {},
/*   429 */             $gbl = this,
/*   430 */             $err = undefined,
/*   431 */             $ret = undefined,
/*   432 */             $postfinally = undefined,
/*   433 */             $currLineNo = undefined,
/*   434 */             $currColNo = undefined;
/*   435 */         if ($scope135.$wakingSuspension !== undefined) {
/*   436 */             $wakeFromSuspension();
/*   437 */         } else {
/*   438 */             $cell.u = u;
/*   439 */             Sk.builtin.pyCheckArgs("eval_A_times_u", arguments, 1, 1, false, false);
/*   440 */         }
/*   441 */         while (true) {
/*   442 */             try {
/*   443 */                 switch ($blk) {
/*   444 */                 case 0:
/*   445 */                     /* --- codeobj entry --- */
/*   446 */                     //
/*   447 */                     // line 17:
/*   448 */                     //     args = ((i,u) for i in range(len(u)))
/*   449 */                     //     ^
/*   450 */                     //
/*   451 */                     $currLineNo = 17;
/*   452 */                     $currColNo = 4;
/*   453 */ 
/*   454 */                     $scope137.co_name = new Sk.builtins['str']('<genexpr>');
/*   455 */                     var $gener144 = new Sk.builtins['function']((function() {
/*   456 */                         Sk.builtin.pyCheckArgs("<genexpr>", arguments, 0, 0);
/*   457 */                         return new Sk.builtins['generator']($scope137, $gbl, [], $cell);
/*   458 */                     }));
/*   459 */                     var $gener145 = Sk.misceval.callsim($gener144);;
/*   460 */                     var $loadgbl146 = Sk.misceval.loadname('range', $gbl);
/*   461 */                     var $loadgbl147 = Sk.misceval.loadname('len', $gbl);
/*   462 */                     $ret;
/*   463 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl147, $cell.u);
/*   464 */                     $blk = 1; /* allowing case fallthrough */
/*   465 */                 case 1:
/*   466 */                     /* --- function return or resume suspension --- */
/*   467 */                     if ($ret && $ret.$isSuspension) {
/*   468 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 33);
/*   469 */                     }
/*   470 */                     var $call148 = $ret;
/*   471 */                     //
/*   472 */                     // line 17:
/*   473 */                     //     args = ((i,u) for i in range(len(u)))
/*   474 */                     //                                  ^
/*   475 */                     //
/*   476 */                     $currLineNo = 17;
/*   477 */                     $currColNo = 33;
/*   478 */ 
/*   479 */                     $ret;
/*   480 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl146, $call148);
/*   481 */                     $blk = 2; /* allowing case fallthrough */
/*   482 */                 case 2:
/*   483 */                     /* --- function return or resume suspension --- */
/*   484 */                     if ($ret && $ret.$isSuspension) {
/*   485 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 27);
/*   486 */                     }
/*   487 */                     var $call149 = $ret;
/*   488 */                     //
/*   489 */                     // line 17:
/*   490 */                     //     args = ((i,u) for i in range(len(u)))
/*   491 */                     //                            ^
/*   492 */                     //
/*   493 */                     $currLineNo = 17;
/*   494 */                     $currColNo = 27;
/*   495 */ 
/*   496 */                     $gener145.gi$locals.$iter0 = Sk.abstr.iter($call149);
/*   497 */                     args = $gener145;
/*   498 */                     //
/*   499 */                     // line 18:
/*   500 */                     //     return list(map(part_A_times_u, args))
/*   501 */                     //     ^
/*   502 */                     //
/*   503 */                     $currLineNo = 18;
/*   504 */                     $currColNo = 4;
/*   505 */ 
/*   506 */                     var $loadgbl150 = Sk.misceval.loadname('list', $gbl);
/*   507 */                     var $loadgbl151 = Sk.misceval.loadname('map', $gbl);
/*   508 */                     var $loadgbl152 = Sk.misceval.loadname('part_A_times_u', $gbl);
/*   509 */                     if (args === undefined) {
/*   510 */                         throw new Sk.builtin.UnboundLocalError('local variable \'args\' referenced before assignment');
/*   511 */                     }
/*   512 */                     $ret;
/*   513 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl151, $loadgbl152, args);
/*   514 */                     $blk = 3; /* allowing case fallthrough */
/*   515 */                 case 3:
/*   516 */                     /* --- function return or resume suspension --- */
/*   517 */                     if ($ret && $ret.$isSuspension) {
/*   518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 18, 16);
/*   519 */                     }
/*   520 */                     var $call153 = $ret;
/*   521 */                     //
/*   522 */                     // line 18:
/*   523 */                     //     return list(map(part_A_times_u, args))
/*   524 */                     //                 ^
/*   525 */                     //
/*   526 */                     $currLineNo = 18;
/*   527 */                     $currColNo = 16;
/*   528 */ 
/*   529 */                     $ret;
/*   530 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl150, $call153);
/*   531 */                     $blk = 4; /* allowing case fallthrough */
/*   532 */                 case 4:
/*   533 */                     /* --- function return or resume suspension --- */
/*   534 */                     if ($ret && $ret.$isSuspension) {
/*   535 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 18, 11);
/*   536 */                     }
/*   537 */                     var $call154 = $ret;
/*   538 */                     //
/*   539 */                     // line 18:
/*   540 */                     //     return list(map(part_A_times_u, args))
/*   541 */                     //            ^
/*   542 */                     //
/*   543 */                     $currLineNo = 18;
/*   544 */                     $currColNo = 11;
/*   545 */ 
/*   546 */                     return $call154;
/*   547 */                     return Sk.builtin.none.none$;
/*   548 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   549 */                 }
/*   550 */             } catch (err) {
/*   551 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   552 */                     err = new Sk.builtin.ExternalError(err);
/*   553 */                 }
/*   554 */                 err.traceback.push({
/*   555 */                     lineno: $currLineNo,
/*   556 */                     colno: $currColNo,
/*   557 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   558 */                 });
/*   559 */                 if ($exc.length > 0) {
/*   560 */                     $err = err;
/*   561 */                     $blk = $exc.pop();
/*   562 */                     continue;
/*   563 */                 } else {
/*   564 */                     throw err;
/*   565 */                 }
/*   566 */             }
/*   567 */         }
/*   568 */     });
/*   569 */     var $scope137 = (function $genexpr138$($gen, $free) {
/*   570 */         // generator
/*   571 */         // has free
/*   572 */         var $free;
/*   573 */         var $wakeFromSuspension = function() {
/*   574 */             var susp = $scope137.$wakingSuspension;
/*   575 */             delete $scope137.$wakingSuspension;
/*   576 */             $blk = susp.$blk;
/*   577 */             $loc = susp.$loc;
/*   578 */             $gbl = susp.$gbl;
/*   579 */             $exc = susp.$exc;
/*   580 */             $err = susp.$err;
/*   581 */             $postfinally = susp.$postfinally;
/*   582 */             $currLineNo = susp.$lineno;
/*   583 */             $currColNo = susp.$colno;
/*   584 */             Sk.lastYield = Date.now();
/*   585 */             $free = susp.$tmps.$free;
/*   586 */             try {
/*   587 */                 $ret = susp.child.resume();
/*   588 */             } catch (err) {
/*   589 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   590 */                     err = new Sk.builtin.ExternalError(err);
/*   591 */                 }
/*   592 */                 err.traceback.push({
/*   593 */                     lineno: $currLineNo,
/*   594 */                     colno: $currColNo,
/*   595 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   596 */                 });
/*   597 */                 if ($exc.length > 0) {
/*   598 */                     $err = err;
/*   599 */                     $blk = $exc.pop();
/*   600 */                 } else {
/*   601 */                     throw err;
/*   602 */                 }
/*   603 */             }
/*   604 */         };
/*   605 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   606 */             var susp = new Sk.misceval.Suspension();
/*   607 */             susp.child = $child;
/*   608 */             susp.resume = function() {
/*   609 */                 $scope137.$wakingSuspension = susp;
/*   610 */                 return $scope137($gen);
/*   611 */             };
/*   612 */             susp.data = susp.child.data;
/*   613 */             susp.$blk = $blk;
/*   614 */             susp.$loc = $loc;
/*   615 */             susp.$gbl = $gbl;
/*   616 */             susp.$exc = $exc;
/*   617 */             susp.$err = $err;
/*   618 */             susp.$postfinally = $postfinally;
/*   619 */             susp.$filename = $filename;
/*   620 */             susp.$lineno = $lineno;
/*   621 */             susp.$colno = $colno;
/*   622 */             susp.optional = susp.child.optional;
/*   623 */             susp.$tmps = {
/*   624 */                 "$free": $free
/*   625 */             };
/*   626 */             return susp;
/*   627 */         };
/*   628 */         var $blk = $gen.gi$resumeat,
/*   629 */             $exc = [],
/*   630 */             $loc = $gen.gi$locals,
/*   631 */             $gbl = this,
/*   632 */             $err = undefined,
/*   633 */             $ret = undefined,
/*   634 */             $postfinally = undefined,
/*   635 */             $currLineNo = undefined,
/*   636 */             $currColNo = undefined;
/*   637 */         if ($scope137.$wakingSuspension !== undefined) {
/*   638 */             $wakeFromSuspension();
/*   639 */         } else {}
/*   640 */         while (true) {
/*   641 */             try {
/*   642 */                 switch ($blk) {
/*   643 */                 case 0:
/*   644 */                     /* --- codeobj entry --- */
/*   645 */                     $blk = 1; /* allowing case fallthrough */
/*   646 */                 case 1:
/*   647 */                     /* --- start for 0 --- */
/*   648 */                     //
/*   649 */                     // line 17:
/*   650 */                     //     args = ((i,u) for i in range(len(u)))
/*   651 */                     //              ^
/*   652 */                     //
/*   653 */                     $currLineNo = 17;
/*   654 */                     $currColNo = 13;
/*   655 */ 
/*   656 */                     $ret = Sk.abstr.iternext($loc.$iter0, true);
/*   657 */                     $blk = 5; /* allowing case fallthrough */
/*   658 */                 case 5:
/*   659 */                     /* --- function return or resume suspension --- */
/*   660 */                     if ($ret && $ret.$isSuspension) {
/*   661 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 13);
/*   662 */                     }
/*   663 */                     var $next139 = $ret;
/*   664 */                     if ($next139 === undefined) {
/*   665 */                         $blk = 4;
/*   666 */                         continue;
/*   667 */                     }
/*   668 */                     $loc.i = $next139;
/*   669 */                     //
/*   670 */                     // line 17:
/*   671 */                     //     args = ((i,u) for i in range(len(u)))
/*   672 */                     //              ^
/*   673 */                     //
/*   674 */                     $currLineNo = 17;
/*   675 */                     $currColNo = 13;
/*   676 */ 
/*   677 */                     var $loadname140 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*   678 */                     var $elem141 = $loadname140;
/*   679 */                     var $elem142 = $free.u;
/*   680 */                     var $loadtuple143 = new Sk.builtins['tuple']([$elem141, $elem142]);
/*   681 */                     return [2 /*resume*/ , $loadtuple143 /*ret*/ ];
/*   682 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   683 */                 case 2:
/*   684 */                     /* --- skip for 0 --- */
/*   685 */                     $blk = 1; /* jump */
/*   686 */                     continue;
/*   687 */                 case 3:
/*   688 */                     /* --- if cleanup for 0 --- */
/*   689 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   690 */                 case 4:
/*   691 */                     /* --- end for 0 --- */
/*   692 */                     return Sk.builtin.none.none$;
/*   693 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   694 */                 }
/*   695 */             } catch (err) {
/*   696 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   697 */                     err = new Sk.builtin.ExternalError(err);
/*   698 */                 }
/*   699 */                 err.traceback.push({
/*   700 */                     lineno: $currLineNo,
/*   701 */                     colno: $currColNo,
/*   702 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   703 */                 });
/*   704 */                 if ($exc.length > 0) {
/*   705 */                     $err = err;
/*   706 */                     $blk = $exc.pop();
/*   707 */                     continue;
/*   708 */                 } else {
/*   709 */                     throw err;
/*   710 */                 }
/*   711 */             }
/*   712 */         }
/*   713 */     });
/*   714 */     var $scope156 = (function $eval_At_times_u157$(u) {
/*   715 */         // has cell
/*   716 */         var args; /* locals */
/*   717 */         var args, args, $gener165, $gener166, $loadgbl167, $loadgbl168, $gener165, $gener166, $loadgbl167, $loadgbl168, $call169, $loadgbl171, $loadgbl172, $loadgbl173, $loadgbl171, $loadgbl172, $loadgbl173, $call174;
/*   718 */         var $wakeFromSuspension = function() {
/*   719 */             var susp = $scope156.$wakingSuspension;
/*   720 */             delete $scope156.$wakingSuspension;
/*   721 */             $blk = susp.$blk;
/*   722 */             $loc = susp.$loc;
/*   723 */             $gbl = susp.$gbl;
/*   724 */             $exc = susp.$exc;
/*   725 */             $err = susp.$err;
/*   726 */             $postfinally = susp.$postfinally;
/*   727 */             $currLineNo = susp.$lineno;
/*   728 */             $currColNo = susp.$colno;
/*   729 */             Sk.lastYield = Date.now();
/*   730 */             $cell = susp.$cell;
/*   731 */             args = susp.$tmps.args;
/*   732 */             $gener165 = susp.$tmps.$gener165;
/*   733 */             $gener166 = susp.$tmps.$gener166;
/*   734 */             $loadgbl167 = susp.$tmps.$loadgbl167;
/*   735 */             $loadgbl168 = susp.$tmps.$loadgbl168;
/*   736 */             $call169 = susp.$tmps.$call169;
/*   737 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*   738 */             $loadgbl172 = susp.$tmps.$loadgbl172;
/*   739 */             $loadgbl173 = susp.$tmps.$loadgbl173;
/*   740 */             $call174 = susp.$tmps.$call174;
/*   741 */             try {
/*   742 */                 $ret = susp.child.resume();
/*   743 */             } catch (err) {
/*   744 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   745 */                     err = new Sk.builtin.ExternalError(err);
/*   746 */                 }
/*   747 */                 err.traceback.push({
/*   748 */                     lineno: $currLineNo,
/*   749 */                     colno: $currColNo,
/*   750 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   751 */                 });
/*   752 */                 if ($exc.length > 0) {
/*   753 */                     $err = err;
/*   754 */                     $blk = $exc.pop();
/*   755 */                 } else {
/*   756 */                     throw err;
/*   757 */                 }
/*   758 */             }
/*   759 */         };
/*   760 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   761 */             var susp = new Sk.misceval.Suspension();
/*   762 */             susp.child = $child;
/*   763 */             susp.resume = function() {
/*   764 */                 $scope156.$wakingSuspension = susp;
/*   765 */                 return $scope156();
/*   766 */             };
/*   767 */             susp.data = susp.child.data;
/*   768 */             susp.$blk = $blk;
/*   769 */             susp.$loc = $loc;
/*   770 */             susp.$gbl = $gbl;
/*   771 */             susp.$exc = $exc;
/*   772 */             susp.$err = $err;
/*   773 */             susp.$postfinally = $postfinally;
/*   774 */             susp.$filename = $filename;
/*   775 */             susp.$lineno = $lineno;
/*   776 */             susp.$colno = $colno;
/*   777 */             susp.optional = susp.child.optional;
/*   778 */             susp.$cell = $cell;
/*   779 */             susp.$tmps = {
/*   780 */                 "args": args,
/*   781 */                 "$gener165": $gener165,
/*   782 */                 "$gener166": $gener166,
/*   783 */                 "$loadgbl167": $loadgbl167,
/*   784 */                 "$loadgbl168": $loadgbl168,
/*   785 */                 "$call169": $call169,
/*   786 */                 "$loadgbl171": $loadgbl171,
/*   787 */                 "$loadgbl172": $loadgbl172,
/*   788 */                 "$loadgbl173": $loadgbl173,
/*   789 */                 "$call174": $call174
/*   790 */             };
/*   791 */             return susp;
/*   792 */         };
/*   793 */         var $blk = 0,
/*   794 */             $exc = [],
/*   795 */             $loc = {},
/*   796 */             $cell = {},
/*   797 */             $gbl = this,
/*   798 */             $err = undefined,
/*   799 */             $ret = undefined,
/*   800 */             $postfinally = undefined,
/*   801 */             $currLineNo = undefined,
/*   802 */             $currColNo = undefined;
/*   803 */         if ($scope156.$wakingSuspension !== undefined) {
/*   804 */             $wakeFromSuspension();
/*   805 */         } else {
/*   806 */             $cell.u = u;
/*   807 */             Sk.builtin.pyCheckArgs("eval_At_times_u", arguments, 1, 1, false, false);
/*   808 */         }
/*   809 */         while (true) {
/*   810 */             try {
/*   811 */                 switch ($blk) {
/*   812 */                 case 0:
/*   813 */                     /* --- codeobj entry --- */
/*   814 */                     //
/*   815 */                     // line 21:
/*   816 */                     //     args = ((i,u) for i in range(len(u)))
/*   817 */                     //     ^
/*   818 */                     //
/*   819 */                     $currLineNo = 21;
/*   820 */                     $currColNo = 4;
/*   821 */ 
/*   822 */                     $scope158.co_name = new Sk.builtins['str']('<genexpr>');
/*   823 */                     var $gener165 = new Sk.builtins['function']((function() {
/*   824 */                         Sk.builtin.pyCheckArgs("<genexpr>", arguments, 0, 0);
/*   825 */                         return new Sk.builtins['generator']($scope158, $gbl, [], $cell);
/*   826 */                     }));
/*   827 */                     var $gener166 = Sk.misceval.callsim($gener165);;
/*   828 */                     var $loadgbl167 = Sk.misceval.loadname('range', $gbl);
/*   829 */                     var $loadgbl168 = Sk.misceval.loadname('len', $gbl);
/*   830 */                     $ret;
/*   831 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl168, $cell.u);
/*   832 */                     $blk = 1; /* allowing case fallthrough */
/*   833 */                 case 1:
/*   834 */                     /* --- function return or resume suspension --- */
/*   835 */                     if ($ret && $ret.$isSuspension) {
/*   836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 33);
/*   837 */                     }
/*   838 */                     var $call169 = $ret;
/*   839 */                     //
/*   840 */                     // line 21:
/*   841 */                     //     args = ((i,u) for i in range(len(u)))
/*   842 */                     //                                  ^
/*   843 */                     //
/*   844 */                     $currLineNo = 21;
/*   845 */                     $currColNo = 33;
/*   846 */ 
/*   847 */                     $ret;
/*   848 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl167, $call169);
/*   849 */                     $blk = 2; /* allowing case fallthrough */
/*   850 */                 case 2:
/*   851 */                     /* --- function return or resume suspension --- */
/*   852 */                     if ($ret && $ret.$isSuspension) {
/*   853 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 27);
/*   854 */                     }
/*   855 */                     var $call170 = $ret;
/*   856 */                     //
/*   857 */                     // line 21:
/*   858 */                     //     args = ((i,u) for i in range(len(u)))
/*   859 */                     //                            ^
/*   860 */                     //
/*   861 */                     $currLineNo = 21;
/*   862 */                     $currColNo = 27;
/*   863 */ 
/*   864 */                     $gener166.gi$locals.$iter0 = Sk.abstr.iter($call170);
/*   865 */                     args = $gener166;
/*   866 */                     //
/*   867 */                     // line 22:
/*   868 */                     //     return list(map(part_At_times_u, args))
/*   869 */                     //     ^
/*   870 */                     //
/*   871 */                     $currLineNo = 22;
/*   872 */                     $currColNo = 4;
/*   873 */ 
/*   874 */                     var $loadgbl171 = Sk.misceval.loadname('list', $gbl);
/*   875 */                     var $loadgbl172 = Sk.misceval.loadname('map', $gbl);
/*   876 */                     var $loadgbl173 = Sk.misceval.loadname('part_At_times_u', $gbl);
/*   877 */                     if (args === undefined) {
/*   878 */                         throw new Sk.builtin.UnboundLocalError('local variable \'args\' referenced before assignment');
/*   879 */                     }
/*   880 */                     $ret;
/*   881 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl172, $loadgbl173, args);
/*   882 */                     $blk = 3; /* allowing case fallthrough */
/*   883 */                 case 3:
/*   884 */                     /* --- function return or resume suspension --- */
/*   885 */                     if ($ret && $ret.$isSuspension) {
/*   886 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 22, 16);
/*   887 */                     }
/*   888 */                     var $call174 = $ret;
/*   889 */                     //
/*   890 */                     // line 22:
/*   891 */                     //     return list(map(part_At_times_u, args))
/*   892 */                     //                 ^
/*   893 */                     //
/*   894 */                     $currLineNo = 22;
/*   895 */                     $currColNo = 16;
/*   896 */ 
/*   897 */                     $ret;
/*   898 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171, $call174);
/*   899 */                     $blk = 4; /* allowing case fallthrough */
/*   900 */                 case 4:
/*   901 */                     /* --- function return or resume suspension --- */
/*   902 */                     if ($ret && $ret.$isSuspension) {
/*   903 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 22, 11);
/*   904 */                     }
/*   905 */                     var $call175 = $ret;
/*   906 */                     //
/*   907 */                     // line 22:
/*   908 */                     //     return list(map(part_At_times_u, args))
/*   909 */                     //            ^
/*   910 */                     //
/*   911 */                     $currLineNo = 22;
/*   912 */                     $currColNo = 11;
/*   913 */ 
/*   914 */                     return $call175;
/*   915 */                     return Sk.builtin.none.none$;
/*   916 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   917 */                 }
/*   918 */             } catch (err) {
/*   919 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   920 */                     err = new Sk.builtin.ExternalError(err);
/*   921 */                 }
/*   922 */                 err.traceback.push({
/*   923 */                     lineno: $currLineNo,
/*   924 */                     colno: $currColNo,
/*   925 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   926 */                 });
/*   927 */                 if ($exc.length > 0) {
/*   928 */                     $err = err;
/*   929 */                     $blk = $exc.pop();
/*   930 */                     continue;
/*   931 */                 } else {
/*   932 */                     throw err;
/*   933 */                 }
/*   934 */             }
/*   935 */         }
/*   936 */     });
/*   937 */     var $scope158 = (function $genexpr159$($gen, $free) {
/*   938 */         // generator
/*   939 */         // has free
/*   940 */         var $free;
/*   941 */         var $wakeFromSuspension = function() {
/*   942 */             var susp = $scope158.$wakingSuspension;
/*   943 */             delete $scope158.$wakingSuspension;
/*   944 */             $blk = susp.$blk;
/*   945 */             $loc = susp.$loc;
/*   946 */             $gbl = susp.$gbl;
/*   947 */             $exc = susp.$exc;
/*   948 */             $err = susp.$err;
/*   949 */             $postfinally = susp.$postfinally;
/*   950 */             $currLineNo = susp.$lineno;
/*   951 */             $currColNo = susp.$colno;
/*   952 */             Sk.lastYield = Date.now();
/*   953 */             $free = susp.$tmps.$free;
/*   954 */             try {
/*   955 */                 $ret = susp.child.resume();
/*   956 */             } catch (err) {
/*   957 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   958 */                     err = new Sk.builtin.ExternalError(err);
/*   959 */                 }
/*   960 */                 err.traceback.push({
/*   961 */                     lineno: $currLineNo,
/*   962 */                     colno: $currColNo,
/*   963 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   964 */                 });
/*   965 */                 if ($exc.length > 0) {
/*   966 */                     $err = err;
/*   967 */                     $blk = $exc.pop();
/*   968 */                 } else {
/*   969 */                     throw err;
/*   970 */                 }
/*   971 */             }
/*   972 */         };
/*   973 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   974 */             var susp = new Sk.misceval.Suspension();
/*   975 */             susp.child = $child;
/*   976 */             susp.resume = function() {
/*   977 */                 $scope158.$wakingSuspension = susp;
/*   978 */                 return $scope158($gen);
/*   979 */             };
/*   980 */             susp.data = susp.child.data;
/*   981 */             susp.$blk = $blk;
/*   982 */             susp.$loc = $loc;
/*   983 */             susp.$gbl = $gbl;
/*   984 */             susp.$exc = $exc;
/*   985 */             susp.$err = $err;
/*   986 */             susp.$postfinally = $postfinally;
/*   987 */             susp.$filename = $filename;
/*   988 */             susp.$lineno = $lineno;
/*   989 */             susp.$colno = $colno;
/*   990 */             susp.optional = susp.child.optional;
/*   991 */             susp.$tmps = {
/*   992 */                 "$free": $free
/*   993 */             };
/*   994 */             return susp;
/*   995 */         };
/*   996 */         var $blk = $gen.gi$resumeat,
/*   997 */             $exc = [],
/*   998 */             $loc = $gen.gi$locals,
/*   999 */             $gbl = this,
/*  1000 */             $err = undefined,
/*  1001 */             $ret = undefined,
/*  1002 */             $postfinally = undefined,
/*  1003 */             $currLineNo = undefined,
/*  1004 */             $currColNo = undefined;
/*  1005 */         if ($scope158.$wakingSuspension !== undefined) {
/*  1006 */             $wakeFromSuspension();
/*  1007 */         } else {}
/*  1008 */         while (true) {
/*  1009 */             try {
/*  1010 */                 switch ($blk) {
/*  1011 */                 case 0:
/*  1012 */                     /* --- codeobj entry --- */
/*  1013 */                     $blk = 1; /* allowing case fallthrough */
/*  1014 */                 case 1:
/*  1015 */                     /* --- start for 0 --- */
/*  1016 */                     //
/*  1017 */                     // line 21:
/*  1018 */                     //     args = ((i,u) for i in range(len(u)))
/*  1019 */                     //              ^
/*  1020 */                     //
/*  1021 */                     $currLineNo = 21;
/*  1022 */                     $currColNo = 13;
/*  1023 */ 
/*  1024 */                     $ret = Sk.abstr.iternext($loc.$iter0, true);
/*  1025 */                     $blk = 5; /* allowing case fallthrough */
/*  1026 */                 case 5:
/*  1027 */                     /* --- function return or resume suspension --- */
/*  1028 */                     if ($ret && $ret.$isSuspension) {
/*  1029 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 13);
/*  1030 */                     }
/*  1031 */                     var $next160 = $ret;
/*  1032 */                     if ($next160 === undefined) {
/*  1033 */                         $blk = 4;
/*  1034 */                         continue;
/*  1035 */                     }
/*  1036 */                     $loc.i = $next160;
/*  1037 */                     //
/*  1038 */                     // line 21:
/*  1039 */                     //     args = ((i,u) for i in range(len(u)))
/*  1040 */                     //              ^
/*  1041 */                     //
/*  1042 */                     $currLineNo = 21;
/*  1043 */                     $currColNo = 13;
/*  1044 */ 
/*  1045 */                     var $loadname161 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*  1046 */                     var $elem162 = $loadname161;
/*  1047 */                     var $elem163 = $free.u;
/*  1048 */                     var $loadtuple164 = new Sk.builtins['tuple']([$elem162, $elem163]);
/*  1049 */                     return [2 /*resume*/ , $loadtuple164 /*ret*/ ];
/*  1050 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1051 */                 case 2:
/*  1052 */                     /* --- skip for 0 --- */
/*  1053 */                     $blk = 1; /* jump */
/*  1054 */                     continue;
/*  1055 */                 case 3:
/*  1056 */                     /* --- if cleanup for 0 --- */
/*  1057 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1058 */                 case 4:
/*  1059 */                     /* --- end for 0 --- */
/*  1060 */                     return Sk.builtin.none.none$;
/*  1061 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1062 */                 }
/*  1063 */             } catch (err) {
/*  1064 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1065 */                     err = new Sk.builtin.ExternalError(err);
/*  1066 */                 }
/*  1067 */                 err.traceback.push({
/*  1068 */                     lineno: $currLineNo,
/*  1069 */                     colno: $currColNo,
/*  1070 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1071 */                 });
/*  1072 */                 if ($exc.length > 0) {
/*  1073 */                     $err = err;
/*  1074 */                     $blk = $exc.pop();
/*  1075 */                     continue;
/*  1076 */                 } else {
/*  1077 */                     throw err;
/*  1078 */                 }
/*  1079 */             }
/*  1080 */         }
/*  1081 */     });
/*  1082 */     var $scope177 = (function $eval_AtA_times_u178$(u) {
/*  1083 */         var u, u, $loadgbl179, $loadgbl180, $loadgbl179, $loadgbl180, $call181;
/*  1084 */         var $wakeFromSuspension = function() {
/*  1085 */             var susp = $scope177.$wakingSuspension;
/*  1086 */             delete $scope177.$wakingSuspension;
/*  1087 */             $blk = susp.$blk;
/*  1088 */             $loc = susp.$loc;
/*  1089 */             $gbl = susp.$gbl;
/*  1090 */             $exc = susp.$exc;
/*  1091 */             $err = susp.$err;
/*  1092 */             $postfinally = susp.$postfinally;
/*  1093 */             $currLineNo = susp.$lineno;
/*  1094 */             $currColNo = susp.$colno;
/*  1095 */             Sk.lastYield = Date.now();
/*  1096 */             u = susp.$tmps.u;
/*  1097 */             $loadgbl179 = susp.$tmps.$loadgbl179;
/*  1098 */             $loadgbl180 = susp.$tmps.$loadgbl180;
/*  1099 */             $call181 = susp.$tmps.$call181;
/*  1100 */             try {
/*  1101 */                 $ret = susp.child.resume();
/*  1102 */             } catch (err) {
/*  1103 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1104 */                     err = new Sk.builtin.ExternalError(err);
/*  1105 */                 }
/*  1106 */                 err.traceback.push({
/*  1107 */                     lineno: $currLineNo,
/*  1108 */                     colno: $currColNo,
/*  1109 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1110 */                 });
/*  1111 */                 if ($exc.length > 0) {
/*  1112 */                     $err = err;
/*  1113 */                     $blk = $exc.pop();
/*  1114 */                 } else {
/*  1115 */                     throw err;
/*  1116 */                 }
/*  1117 */             }
/*  1118 */         };
/*  1119 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1120 */             var susp = new Sk.misceval.Suspension();
/*  1121 */             susp.child = $child;
/*  1122 */             susp.resume = function() {
/*  1123 */                 $scope177.$wakingSuspension = susp;
/*  1124 */                 return $scope177();
/*  1125 */             };
/*  1126 */             susp.data = susp.child.data;
/*  1127 */             susp.$blk = $blk;
/*  1128 */             susp.$loc = $loc;
/*  1129 */             susp.$gbl = $gbl;
/*  1130 */             susp.$exc = $exc;
/*  1131 */             susp.$err = $err;
/*  1132 */             susp.$postfinally = $postfinally;
/*  1133 */             susp.$filename = $filename;
/*  1134 */             susp.$lineno = $lineno;
/*  1135 */             susp.$colno = $colno;
/*  1136 */             susp.optional = susp.child.optional;
/*  1137 */             susp.$tmps = {
/*  1138 */                 "u": u,
/*  1139 */                 "$loadgbl179": $loadgbl179,
/*  1140 */                 "$loadgbl180": $loadgbl180,
/*  1141 */                 "$call181": $call181
/*  1142 */             };
/*  1143 */             return susp;
/*  1144 */         };
/*  1145 */         var $blk = 0,
/*  1146 */             $exc = [],
/*  1147 */             $loc = {},
/*  1148 */             $gbl = this,
/*  1149 */             $err = undefined,
/*  1150 */             $ret = undefined,
/*  1151 */             $postfinally = undefined,
/*  1152 */             $currLineNo = undefined,
/*  1153 */             $currColNo = undefined;
/*  1154 */         if ($scope177.$wakingSuspension !== undefined) {
/*  1155 */             $wakeFromSuspension();
/*  1156 */         } else {
/*  1157 */             Sk.builtin.pyCheckArgs("eval_AtA_times_u", arguments, 1, 1, false, false);
/*  1158 */         }
/*  1159 */         while (true) {
/*  1160 */             try {
/*  1161 */                 switch ($blk) {
/*  1162 */                 case 0:
/*  1163 */                     /* --- codeobj entry --- */
/*  1164 */                     if (u === undefined) {
/*  1165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1166 */                     }
/*  1167 */ 
/*  1168 */                     //
/*  1169 */                     // line 25:
/*  1170 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1171 */                     //     ^
/*  1172 */                     //
/*  1173 */                     $currLineNo = 25;
/*  1174 */                     $currColNo = 4;
/*  1175 */ 
/*  1176 */                     var $loadgbl179 = Sk.misceval.loadname('eval_At_times_u', $gbl);
/*  1177 */                     var $loadgbl180 = Sk.misceval.loadname('eval_A_times_u', $gbl);
/*  1178 */                     if (u === undefined) {
/*  1179 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1180 */                     }
/*  1181 */                     $ret;
/*  1182 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl180, u);
/*  1183 */                     $blk = 1; /* allowing case fallthrough */
/*  1184 */                 case 1:
/*  1185 */                     /* --- function return or resume suspension --- */
/*  1186 */                     if ($ret && $ret.$isSuspension) {
/*  1187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 25, 28);
/*  1188 */                     }
/*  1189 */                     var $call181 = $ret;
/*  1190 */                     //
/*  1191 */                     // line 25:
/*  1192 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1193 */                     //                             ^
/*  1194 */                     //
/*  1195 */                     $currLineNo = 25;
/*  1196 */                     $currColNo = 28;
/*  1197 */ 
/*  1198 */                     $ret;
/*  1199 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl179, $call181);
/*  1200 */                     $blk = 2; /* allowing case fallthrough */
/*  1201 */                 case 2:
/*  1202 */                     /* --- function return or resume suspension --- */
/*  1203 */                     if ($ret && $ret.$isSuspension) {
/*  1204 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 25, 11);
/*  1205 */                     }
/*  1206 */                     var $call182 = $ret;
/*  1207 */                     //
/*  1208 */                     // line 25:
/*  1209 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1210 */                     //            ^
/*  1211 */                     //
/*  1212 */                     $currLineNo = 25;
/*  1213 */                     $currColNo = 11;
/*  1214 */ 
/*  1215 */                     return $call182;
/*  1216 */                     return Sk.builtin.none.none$;
/*  1217 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1218 */                 }
/*  1219 */             } catch (err) {
/*  1220 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1221 */                     err = new Sk.builtin.ExternalError(err);
/*  1222 */                 }
/*  1223 */                 err.traceback.push({
/*  1224 */                     lineno: $currLineNo,
/*  1225 */                     colno: $currColNo,
/*  1226 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1227 */                 });
/*  1228 */                 if ($exc.length > 0) {
/*  1229 */                     $err = err;
/*  1230 */                     $blk = $exc.pop();
/*  1231 */                     continue;
/*  1232 */                 } else {
/*  1233 */                     throw err;
/*  1234 */                 }
/*  1235 */             }
/*  1236 */         }
/*  1237 */     });
/*  1238 */     var $scope184 = (function $part_A_times_u185$(xxx_todo_changeme) {
/*  1239 */         var i, j, partial_sum, u, u_j; /* locals */
/*  1240 */         var i, i, j, j, partial_sum, partial_sum, partial_sum, partial_sum, u, u, u_j, u_j, xxx_todo_changeme, xxx_todo_changeme, $loadgbl187, $iter189, $loadgbl187, $call188, $iter189, $loadgbl192;
/*  1241 */         var $wakeFromSuspension = function() {
/*  1242 */             var susp = $scope184.$wakingSuspension;
/*  1243 */             delete $scope184.$wakingSuspension;
/*  1244 */             $blk = susp.$blk;
/*  1245 */             $loc = susp.$loc;
/*  1246 */             $gbl = susp.$gbl;
/*  1247 */             $exc = susp.$exc;
/*  1248 */             $err = susp.$err;
/*  1249 */             $postfinally = susp.$postfinally;
/*  1250 */             $currLineNo = susp.$lineno;
/*  1251 */             $currColNo = susp.$colno;
/*  1252 */             Sk.lastYield = Date.now();
/*  1253 */             i = susp.$tmps.i;
/*  1254 */             j = susp.$tmps.j;
/*  1255 */             partial_sum = susp.$tmps.partial_sum;
/*  1256 */             u = susp.$tmps.u;
/*  1257 */             u_j = susp.$tmps.u_j;
/*  1258 */             xxx_todo_changeme = susp.$tmps.xxx_todo_changeme;
/*  1259 */             $loadgbl187 = susp.$tmps.$loadgbl187;
/*  1260 */             $iter189 = susp.$tmps.$iter189;
/*  1261 */             $call188 = susp.$tmps.$call188;
/*  1262 */             $loadgbl192 = susp.$tmps.$loadgbl192;
/*  1263 */             try {
/*  1264 */                 $ret = susp.child.resume();
/*  1265 */             } catch (err) {
/*  1266 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1267 */                     err = new Sk.builtin.ExternalError(err);
/*  1268 */                 }
/*  1269 */                 err.traceback.push({
/*  1270 */                     lineno: $currLineNo,
/*  1271 */                     colno: $currColNo,
/*  1272 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1273 */                 });
/*  1274 */                 if ($exc.length > 0) {
/*  1275 */                     $err = err;
/*  1276 */                     $blk = $exc.pop();
/*  1277 */                 } else {
/*  1278 */                     throw err;
/*  1279 */                 }
/*  1280 */             }
/*  1281 */         };
/*  1282 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1283 */             var susp = new Sk.misceval.Suspension();
/*  1284 */             susp.child = $child;
/*  1285 */             susp.resume = function() {
/*  1286 */                 $scope184.$wakingSuspension = susp;
/*  1287 */                 return $scope184();
/*  1288 */             };
/*  1289 */             susp.data = susp.child.data;
/*  1290 */             susp.$blk = $blk;
/*  1291 */             susp.$loc = $loc;
/*  1292 */             susp.$gbl = $gbl;
/*  1293 */             susp.$exc = $exc;
/*  1294 */             susp.$err = $err;
/*  1295 */             susp.$postfinally = $postfinally;
/*  1296 */             susp.$filename = $filename;
/*  1297 */             susp.$lineno = $lineno;
/*  1298 */             susp.$colno = $colno;
/*  1299 */             susp.optional = susp.child.optional;
/*  1300 */             susp.$tmps = {
/*  1301 */                 "i": i,
/*  1302 */                 "j": j,
/*  1303 */                 "partial_sum": partial_sum,
/*  1304 */                 "u": u,
/*  1305 */                 "u_j": u_j,
/*  1306 */                 "xxx_todo_changeme": xxx_todo_changeme,
/*  1307 */                 "$loadgbl187": $loadgbl187,
/*  1308 */                 "$iter189": $iter189,
/*  1309 */                 "$call188": $call188,
/*  1310 */                 "$loadgbl192": $loadgbl192
/*  1311 */             };
/*  1312 */             return susp;
/*  1313 */         };
/*  1314 */         var $blk = 0,
/*  1315 */             $exc = [],
/*  1316 */             $loc = {},
/*  1317 */             $gbl = this,
/*  1318 */             $err = undefined,
/*  1319 */             $ret = undefined,
/*  1320 */             $postfinally = undefined,
/*  1321 */             $currLineNo = undefined,
/*  1322 */             $currColNo = undefined;
/*  1323 */         if ($scope184.$wakingSuspension !== undefined) {
/*  1324 */             $wakeFromSuspension();
/*  1325 */         } else {
/*  1326 */             Sk.builtin.pyCheckArgs("part_A_times_u", arguments, 1, 1, false, false);
/*  1327 */         }
/*  1328 */         while (true) {
/*  1329 */             try {
/*  1330 */                 switch ($blk) {
/*  1331 */                 case 0:
/*  1332 */                     /* --- codeobj entry --- */
/*  1333 */                     if (xxx_todo_changeme === undefined) {
/*  1334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme\' referenced before assignment');
/*  1335 */                     }
/*  1336 */ 
/*  1337 */                     //
/*  1338 */                     // line 28:
/*  1339 */                     //     (i,u) = xxx_todo_changeme
/*  1340 */                     //     ^
/*  1341 */                     //
/*  1342 */                     $currLineNo = 28;
/*  1343 */                     $currColNo = 4;
/*  1344 */ 
/*  1345 */                     if (xxx_todo_changeme === undefined) {
/*  1346 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme\' referenced before assignment');
/*  1347 */                     }
/*  1348 */                     var $items186 = Sk.abstr.sequenceUnpack(xxx_todo_changeme, 2);
/*  1349 */                     i = $items186[0];
/*  1350 */                     u = $items186[1];
/*  1351 */                     //
/*  1352 */                     // line 29:
/*  1353 */                     //     partial_sum = 0
/*  1354 */                     //     ^
/*  1355 */                     //
/*  1356 */                     $currLineNo = 29;
/*  1357 */                     $currColNo = 4;
/*  1358 */ 
/*  1359 */                     partial_sum = new Sk.builtin.int_(0);
/*  1360 */                     //
/*  1361 */                     // line 30:
/*  1362 */                     //     for j, u_j in enumerate(u):
/*  1363 */                     //     ^
/*  1364 */                     //
/*  1365 */                     $currLineNo = 30;
/*  1366 */                     $currColNo = 4;
/*  1367 */ 
/*  1368 */                     var $loadgbl187 = Sk.misceval.loadname('enumerate', $gbl);
/*  1369 */                     if (u === undefined) {
/*  1370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1371 */                     }
/*  1372 */                     $ret;
/*  1373 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl187, u);
/*  1374 */                     $blk = 4; /* allowing case fallthrough */
/*  1375 */                 case 4:
/*  1376 */                     /* --- function return or resume suspension --- */
/*  1377 */                     if ($ret && $ret.$isSuspension) {
/*  1378 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 30, 18);
/*  1379 */                     }
/*  1380 */                     var $call188 = $ret;
/*  1381 */                     //
/*  1382 */                     // line 30:
/*  1383 */                     //     for j, u_j in enumerate(u):
/*  1384 */                     //                   ^
/*  1385 */                     //
/*  1386 */                     $currLineNo = 30;
/*  1387 */                     $currColNo = 18;
/*  1388 */ 
/*  1389 */                     var $iter189 = Sk.abstr.iter($call188);
/*  1390 */                     $blk = 1; /* allowing case fallthrough */
/*  1391 */                 case 1:
/*  1392 */                     /* --- for start --- */
/*  1393 */                     $ret = Sk.abstr.iternext($iter189, true);
/*  1394 */                     $blk = 5; /* allowing case fallthrough */
/*  1395 */                 case 5:
/*  1396 */                     /* --- function return or resume suspension --- */
/*  1397 */                     if ($ret && $ret.$isSuspension) {
/*  1398 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 30, 4);
/*  1399 */                     }
/*  1400 */                     var $next190 = $ret;
/*  1401 */                     if ($next190 === undefined) {
/*  1402 */                         $blk = 2;
/*  1403 */                         continue;
/*  1404 */                     }
/*  1405 */                     var $items191 = Sk.abstr.sequenceUnpack($next190, 2);
/*  1406 */                     j = $items191[0];
/*  1407 */                     u_j = $items191[1];
/*  1408 */                     //
/*  1409 */                     // line 31:
/*  1410 */                     //         partial_sum += eval_A (i, j) * u_j
/*  1411 */                     //         ^
/*  1412 */                     //
/*  1413 */                     $currLineNo = 31;
/*  1414 */                     $currColNo = 8;
/*  1415 */ 
/*  1416 */                     if (partial_sum === undefined) {
/*  1417 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1418 */                     }
/*  1419 */                     var $loadgbl192 = Sk.misceval.loadname('eval_A', $gbl);
/*  1420 */                     if (i === undefined) {
/*  1421 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1422 */                     }
/*  1423 */                     if (j === undefined) {
/*  1424 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*  1425 */                     }
/*  1426 */                     $ret;
/*  1427 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl192, i, j);
/*  1428 */                     $blk = 6; /* allowing case fallthrough */
/*  1429 */                 case 6:
/*  1430 */                     /* --- function return or resume suspension --- */
/*  1431 */                     if ($ret && $ret.$isSuspension) {
/*  1432 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 31, 23);
/*  1433 */                     }
/*  1434 */                     var $call193 = $ret;
/*  1435 */                     //
/*  1436 */                     // line 31:
/*  1437 */                     //         partial_sum += eval_A (i, j) * u_j
/*  1438 */                     //                        ^
/*  1439 */                     //
/*  1440 */                     $currLineNo = 31;
/*  1441 */                     $currColNo = 23;
/*  1442 */ 
/*  1443 */                     if (u_j === undefined) {
/*  1444 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u_j\' referenced before assignment');
/*  1445 */                     }
/*  1446 */                     var $binop194 = Sk.abstr.numberBinOp($call193, u_j, 'Mult');
/*  1447 */                     var $inplbinop195 = Sk.abstr.numberInplaceBinOp(partial_sum, $binop194, 'Add');
/*  1448 */                     partial_sum = $inplbinop195;
/*  1449 */                     $blk = 1; /* jump */
/*  1450 */                     continue;
/*  1451 */                 case 2:
/*  1452 */                     /* --- for cleanup --- */
/*  1453 */                     $blk = 3; /* allowing case fallthrough */
/*  1454 */                 case 3:
/*  1455 */                     /* --- for end --- */
/*  1456 */                     //
/*  1457 */                     // line 32:
/*  1458 */                     //     return partial_sum
/*  1459 */                     //     ^
/*  1460 */                     //
/*  1461 */                     $currLineNo = 32;
/*  1462 */                     $currColNo = 4;
/*  1463 */ 
/*  1464 */                     if (partial_sum === undefined) {
/*  1465 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1466 */                     }
/*  1467 */                     return partial_sum;
/*  1468 */                     return Sk.builtin.none.none$;
/*  1469 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1470 */                 }
/*  1471 */             } catch (err) {
/*  1472 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1473 */                     err = new Sk.builtin.ExternalError(err);
/*  1474 */                 }
/*  1475 */                 err.traceback.push({
/*  1476 */                     lineno: $currLineNo,
/*  1477 */                     colno: $currColNo,
/*  1478 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1479 */                 });
/*  1480 */                 if ($exc.length > 0) {
/*  1481 */                     $err = err;
/*  1482 */                     $blk = $exc.pop();
/*  1483 */                     continue;
/*  1484 */                 } else {
/*  1485 */                     throw err;
/*  1486 */                 }
/*  1487 */             }
/*  1488 */         }
/*  1489 */     });
/*  1490 */     var $scope197 = (function $part_At_times_u198$(xxx_todo_changeme1) {
/*  1491 */         var i, j, partial_sum, u, u_j; /* locals */
/*  1492 */         var i, i, j, j, partial_sum, partial_sum, partial_sum, partial_sum, u, u, u_j, u_j, xxx_todo_changeme1, xxx_todo_changeme1, $loadgbl200, $iter202, $loadgbl200, $call201, $iter202, $loadgbl205;
/*  1493 */         var $wakeFromSuspension = function() {
/*  1494 */             var susp = $scope197.$wakingSuspension;
/*  1495 */             delete $scope197.$wakingSuspension;
/*  1496 */             $blk = susp.$blk;
/*  1497 */             $loc = susp.$loc;
/*  1498 */             $gbl = susp.$gbl;
/*  1499 */             $exc = susp.$exc;
/*  1500 */             $err = susp.$err;
/*  1501 */             $postfinally = susp.$postfinally;
/*  1502 */             $currLineNo = susp.$lineno;
/*  1503 */             $currColNo = susp.$colno;
/*  1504 */             Sk.lastYield = Date.now();
/*  1505 */             i = susp.$tmps.i;
/*  1506 */             j = susp.$tmps.j;
/*  1507 */             partial_sum = susp.$tmps.partial_sum;
/*  1508 */             u = susp.$tmps.u;
/*  1509 */             u_j = susp.$tmps.u_j;
/*  1510 */             xxx_todo_changeme1 = susp.$tmps.xxx_todo_changeme1;
/*  1511 */             $loadgbl200 = susp.$tmps.$loadgbl200;
/*  1512 */             $iter202 = susp.$tmps.$iter202;
/*  1513 */             $call201 = susp.$tmps.$call201;
/*  1514 */             $loadgbl205 = susp.$tmps.$loadgbl205;
/*  1515 */             try {
/*  1516 */                 $ret = susp.child.resume();
/*  1517 */             } catch (err) {
/*  1518 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1519 */                     err = new Sk.builtin.ExternalError(err);
/*  1520 */                 }
/*  1521 */                 err.traceback.push({
/*  1522 */                     lineno: $currLineNo,
/*  1523 */                     colno: $currColNo,
/*  1524 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1525 */                 });
/*  1526 */                 if ($exc.length > 0) {
/*  1527 */                     $err = err;
/*  1528 */                     $blk = $exc.pop();
/*  1529 */                 } else {
/*  1530 */                     throw err;
/*  1531 */                 }
/*  1532 */             }
/*  1533 */         };
/*  1534 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1535 */             var susp = new Sk.misceval.Suspension();
/*  1536 */             susp.child = $child;
/*  1537 */             susp.resume = function() {
/*  1538 */                 $scope197.$wakingSuspension = susp;
/*  1539 */                 return $scope197();
/*  1540 */             };
/*  1541 */             susp.data = susp.child.data;
/*  1542 */             susp.$blk = $blk;
/*  1543 */             susp.$loc = $loc;
/*  1544 */             susp.$gbl = $gbl;
/*  1545 */             susp.$exc = $exc;
/*  1546 */             susp.$err = $err;
/*  1547 */             susp.$postfinally = $postfinally;
/*  1548 */             susp.$filename = $filename;
/*  1549 */             susp.$lineno = $lineno;
/*  1550 */             susp.$colno = $colno;
/*  1551 */             susp.optional = susp.child.optional;
/*  1552 */             susp.$tmps = {
/*  1553 */                 "i": i,
/*  1554 */                 "j": j,
/*  1555 */                 "partial_sum": partial_sum,
/*  1556 */                 "u": u,
/*  1557 */                 "u_j": u_j,
/*  1558 */                 "xxx_todo_changeme1": xxx_todo_changeme1,
/*  1559 */                 "$loadgbl200": $loadgbl200,
/*  1560 */                 "$iter202": $iter202,
/*  1561 */                 "$call201": $call201,
/*  1562 */                 "$loadgbl205": $loadgbl205
/*  1563 */             };
/*  1564 */             return susp;
/*  1565 */         };
/*  1566 */         var $blk = 0,
/*  1567 */             $exc = [],
/*  1568 */             $loc = {},
/*  1569 */             $gbl = this,
/*  1570 */             $err = undefined,
/*  1571 */             $ret = undefined,
/*  1572 */             $postfinally = undefined,
/*  1573 */             $currLineNo = undefined,
/*  1574 */             $currColNo = undefined;
/*  1575 */         if ($scope197.$wakingSuspension !== undefined) {
/*  1576 */             $wakeFromSuspension();
/*  1577 */         } else {
/*  1578 */             Sk.builtin.pyCheckArgs("part_At_times_u", arguments, 1, 1, false, false);
/*  1579 */         }
/*  1580 */         while (true) {
/*  1581 */             try {
/*  1582 */                 switch ($blk) {
/*  1583 */                 case 0:
/*  1584 */                     /* --- codeobj entry --- */
/*  1585 */                     if (xxx_todo_changeme1 === undefined) {
/*  1586 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme1\' referenced before assignment');
/*  1587 */                     }
/*  1588 */ 
/*  1589 */                     //
/*  1590 */                     // line 35:
/*  1591 */                     //     (i,u) = xxx_todo_changeme1
/*  1592 */                     //     ^
/*  1593 */                     //
/*  1594 */                     $currLineNo = 35;
/*  1595 */                     $currColNo = 4;
/*  1596 */ 
/*  1597 */                     if (xxx_todo_changeme1 === undefined) {
/*  1598 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme1\' referenced before assignment');
/*  1599 */                     }
/*  1600 */                     var $items199 = Sk.abstr.sequenceUnpack(xxx_todo_changeme1, 2);
/*  1601 */                     i = $items199[0];
/*  1602 */                     u = $items199[1];
/*  1603 */                     //
/*  1604 */                     // line 36:
/*  1605 */                     //     partial_sum = 0
/*  1606 */                     //     ^
/*  1607 */                     //
/*  1608 */                     $currLineNo = 36;
/*  1609 */                     $currColNo = 4;
/*  1610 */ 
/*  1611 */                     partial_sum = new Sk.builtin.int_(0);
/*  1612 */                     //
/*  1613 */                     // line 37:
/*  1614 */                     //     for j, u_j in enumerate(u):
/*  1615 */                     //     ^
/*  1616 */                     //
/*  1617 */                     $currLineNo = 37;
/*  1618 */                     $currColNo = 4;
/*  1619 */ 
/*  1620 */                     var $loadgbl200 = Sk.misceval.loadname('enumerate', $gbl);
/*  1621 */                     if (u === undefined) {
/*  1622 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1623 */                     }
/*  1624 */                     $ret;
/*  1625 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl200, u);
/*  1626 */                     $blk = 4; /* allowing case fallthrough */
/*  1627 */                 case 4:
/*  1628 */                     /* --- function return or resume suspension --- */
/*  1629 */                     if ($ret && $ret.$isSuspension) {
/*  1630 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 37, 18);
/*  1631 */                     }
/*  1632 */                     var $call201 = $ret;
/*  1633 */                     //
/*  1634 */                     // line 37:
/*  1635 */                     //     for j, u_j in enumerate(u):
/*  1636 */                     //                   ^
/*  1637 */                     //
/*  1638 */                     $currLineNo = 37;
/*  1639 */                     $currColNo = 18;
/*  1640 */ 
/*  1641 */                     var $iter202 = Sk.abstr.iter($call201);
/*  1642 */                     $blk = 1; /* allowing case fallthrough */
/*  1643 */                 case 1:
/*  1644 */                     /* --- for start --- */
/*  1645 */                     $ret = Sk.abstr.iternext($iter202, true);
/*  1646 */                     $blk = 5; /* allowing case fallthrough */
/*  1647 */                 case 5:
/*  1648 */                     /* --- function return or resume suspension --- */
/*  1649 */                     if ($ret && $ret.$isSuspension) {
/*  1650 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 37, 4);
/*  1651 */                     }
/*  1652 */                     var $next203 = $ret;
/*  1653 */                     if ($next203 === undefined) {
/*  1654 */                         $blk = 2;
/*  1655 */                         continue;
/*  1656 */                     }
/*  1657 */                     var $items204 = Sk.abstr.sequenceUnpack($next203, 2);
/*  1658 */                     j = $items204[0];
/*  1659 */                     u_j = $items204[1];
/*  1660 */                     //
/*  1661 */                     // line 38:
/*  1662 */                     //         partial_sum += eval_A (j, i) * u_j
/*  1663 */                     //         ^
/*  1664 */                     //
/*  1665 */                     $currLineNo = 38;
/*  1666 */                     $currColNo = 8;
/*  1667 */ 
/*  1668 */                     if (partial_sum === undefined) {
/*  1669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1670 */                     }
/*  1671 */                     var $loadgbl205 = Sk.misceval.loadname('eval_A', $gbl);
/*  1672 */                     if (j === undefined) {
/*  1673 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*  1674 */                     }
/*  1675 */                     if (i === undefined) {
/*  1676 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1677 */                     }
/*  1678 */                     $ret;
/*  1679 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl205, j, i);
/*  1680 */                     $blk = 6; /* allowing case fallthrough */
/*  1681 */                 case 6:
/*  1682 */                     /* --- function return or resume suspension --- */
/*  1683 */                     if ($ret && $ret.$isSuspension) {
/*  1684 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 38, 23);
/*  1685 */                     }
/*  1686 */                     var $call206 = $ret;
/*  1687 */                     //
/*  1688 */                     // line 38:
/*  1689 */                     //         partial_sum += eval_A (j, i) * u_j
/*  1690 */                     //                        ^
/*  1691 */                     //
/*  1692 */                     $currLineNo = 38;
/*  1693 */                     $currColNo = 23;
/*  1694 */ 
/*  1695 */                     if (u_j === undefined) {
/*  1696 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u_j\' referenced before assignment');
/*  1697 */                     }
/*  1698 */                     var $binop207 = Sk.abstr.numberBinOp($call206, u_j, 'Mult');
/*  1699 */                     var $inplbinop208 = Sk.abstr.numberInplaceBinOp(partial_sum, $binop207, 'Add');
/*  1700 */                     partial_sum = $inplbinop208;
/*  1701 */                     $blk = 1; /* jump */
/*  1702 */                     continue;
/*  1703 */                 case 2:
/*  1704 */                     /* --- for cleanup --- */
/*  1705 */                     $blk = 3; /* allowing case fallthrough */
/*  1706 */                 case 3:
/*  1707 */                     /* --- for end --- */
/*  1708 */                     //
/*  1709 */                     // line 39:
/*  1710 */                     //     return partial_sum
/*  1711 */                     //     ^
/*  1712 */                     //
/*  1713 */                     $currLineNo = 39;
/*  1714 */                     $currColNo = 4;
/*  1715 */ 
/*  1716 */                     if (partial_sum === undefined) {
/*  1717 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1718 */                     }
/*  1719 */                     return partial_sum;
/*  1720 */                     return Sk.builtin.none.none$;
/*  1721 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1722 */                 }
/*  1723 */             } catch (err) {
/*  1724 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1725 */                     err = new Sk.builtin.ExternalError(err);
/*  1726 */                 }
/*  1727 */                 err.traceback.push({
/*  1728 */                     lineno: $currLineNo,
/*  1729 */                     colno: $currColNo,
/*  1730 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1731 */                 });
/*  1732 */                 if ($exc.length > 0) {
/*  1733 */                     $err = err;
/*  1734 */                     $blk = $exc.pop();
/*  1735 */                     continue;
/*  1736 */                 } else {
/*  1737 */                     throw err;
/*  1738 */                 }
/*  1739 */             }
/*  1740 */         }
/*  1741 */     });
/*  1742 */     var $scope210 = (function $main211$(n) {
/*  1743 */         var dummy, i, t0, times, tk, u, ue, v, vBv, ve, vv; /* locals */
/*  1744 */         var dummy, i, n, n, t0, t0, times, times, times, tk, tk, u, u, u, u, ue, ue, v, v, v, vBv, vBv, vBv, ve, ve, ve, ve, vv, vv, vv, $loadgbl213, $iter215, $loadgbl213, $call214, $iter215, $loadgbl217, $loadgbl217, $lattr218, $loadgbl224, $iter226, $loadgbl224, $call225, $iter226, $loadgbl228, $loadgbl230, $loadgbl232, $iter234, $loadgbl232, $call233, $iter234, $loadgbl241, $loadgbl241, $lattr242, $lattr244, $binop245;
/*  1745 */         var $wakeFromSuspension = function() {
/*  1746 */             var susp = $scope210.$wakingSuspension;
/*  1747 */             delete $scope210.$wakingSuspension;
/*  1748 */             $blk = susp.$blk;
/*  1749 */             $loc = susp.$loc;
/*  1750 */             $gbl = susp.$gbl;
/*  1751 */             $exc = susp.$exc;
/*  1752 */             $err = susp.$err;
/*  1753 */             $postfinally = susp.$postfinally;
/*  1754 */             $currLineNo = susp.$lineno;
/*  1755 */             $currColNo = susp.$colno;
/*  1756 */             Sk.lastYield = Date.now();
/*  1757 */             dummy = susp.$tmps.dummy;
/*  1758 */             i = susp.$tmps.i;
/*  1759 */             n = susp.$tmps.n;
/*  1760 */             t0 = susp.$tmps.t0;
/*  1761 */             times = susp.$tmps.times;
/*  1762 */             tk = susp.$tmps.tk;
/*  1763 */             u = susp.$tmps.u;
/*  1764 */             ue = susp.$tmps.ue;
/*  1765 */             v = susp.$tmps.v;
/*  1766 */             vBv = susp.$tmps.vBv;
/*  1767 */             ve = susp.$tmps.ve;
/*  1768 */             vv = susp.$tmps.vv;
/*  1769 */             $loadgbl213 = susp.$tmps.$loadgbl213;
/*  1770 */             $iter215 = susp.$tmps.$iter215;
/*  1771 */             $call214 = susp.$tmps.$call214;
/*  1772 */             $loadgbl217 = susp.$tmps.$loadgbl217;
/*  1773 */             $lattr218 = susp.$tmps.$lattr218;
/*  1774 */             $loadgbl224 = susp.$tmps.$loadgbl224;
/*  1775 */             $iter226 = susp.$tmps.$iter226;
/*  1776 */             $call225 = susp.$tmps.$call225;
/*  1777 */             $loadgbl228 = susp.$tmps.$loadgbl228;
/*  1778 */             $loadgbl230 = susp.$tmps.$loadgbl230;
/*  1779 */             $loadgbl232 = susp.$tmps.$loadgbl232;
/*  1780 */             $iter234 = susp.$tmps.$iter234;
/*  1781 */             $call233 = susp.$tmps.$call233;
/*  1782 */             $loadgbl241 = susp.$tmps.$loadgbl241;
/*  1783 */             $lattr242 = susp.$tmps.$lattr242;
/*  1784 */             $lattr244 = susp.$tmps.$lattr244;
/*  1785 */             $binop245 = susp.$tmps.$binop245;
/*  1786 */             try {
/*  1787 */                 $ret = susp.child.resume();
/*  1788 */             } catch (err) {
/*  1789 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1790 */                     err = new Sk.builtin.ExternalError(err);
/*  1791 */                 }
/*  1792 */                 err.traceback.push({
/*  1793 */                     lineno: $currLineNo,
/*  1794 */                     colno: $currColNo,
/*  1795 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1796 */                 });
/*  1797 */                 if ($exc.length > 0) {
/*  1798 */                     $err = err;
/*  1799 */                     $blk = $exc.pop();
/*  1800 */                 } else {
/*  1801 */                     throw err;
/*  1802 */                 }
/*  1803 */             }
/*  1804 */         };
/*  1805 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1806 */             var susp = new Sk.misceval.Suspension();
/*  1807 */             susp.child = $child;
/*  1808 */             susp.resume = function() {
/*  1809 */                 $scope210.$wakingSuspension = susp;
/*  1810 */                 return $scope210();
/*  1811 */             };
/*  1812 */             susp.data = susp.child.data;
/*  1813 */             susp.$blk = $blk;
/*  1814 */             susp.$loc = $loc;
/*  1815 */             susp.$gbl = $gbl;
/*  1816 */             susp.$exc = $exc;
/*  1817 */             susp.$err = $err;
/*  1818 */             susp.$postfinally = $postfinally;
/*  1819 */             susp.$filename = $filename;
/*  1820 */             susp.$lineno = $lineno;
/*  1821 */             susp.$colno = $colno;
/*  1822 */             susp.optional = susp.child.optional;
/*  1823 */             susp.$tmps = {
/*  1824 */                 "dummy": dummy,
/*  1825 */                 "i": i,
/*  1826 */                 "n": n,
/*  1827 */                 "t0": t0,
/*  1828 */                 "times": times,
/*  1829 */                 "tk": tk,
/*  1830 */                 "u": u,
/*  1831 */                 "ue": ue,
/*  1832 */                 "v": v,
/*  1833 */                 "vBv": vBv,
/*  1834 */                 "ve": ve,
/*  1835 */                 "vv": vv,
/*  1836 */                 "$loadgbl213": $loadgbl213,
/*  1837 */                 "$iter215": $iter215,
/*  1838 */                 "$call214": $call214,
/*  1839 */                 "$loadgbl217": $loadgbl217,
/*  1840 */                 "$lattr218": $lattr218,
/*  1841 */                 "$loadgbl224": $loadgbl224,
/*  1842 */                 "$iter226": $iter226,
/*  1843 */                 "$call225": $call225,
/*  1844 */                 "$loadgbl228": $loadgbl228,
/*  1845 */                 "$loadgbl230": $loadgbl230,
/*  1846 */                 "$loadgbl232": $loadgbl232,
/*  1847 */                 "$iter234": $iter234,
/*  1848 */                 "$call233": $call233,
/*  1849 */                 "$loadgbl241": $loadgbl241,
/*  1850 */                 "$lattr242": $lattr242,
/*  1851 */                 "$lattr244": $lattr244,
/*  1852 */                 "$binop245": $binop245
/*  1853 */             };
/*  1854 */             return susp;
/*  1855 */         };
/*  1856 */         var $blk = 0,
/*  1857 */             $exc = [],
/*  1858 */             $loc = {},
/*  1859 */             $gbl = this,
/*  1860 */             $err = undefined,
/*  1861 */             $ret = undefined,
/*  1862 */             $postfinally = undefined,
/*  1863 */             $currLineNo = undefined,
/*  1864 */             $currColNo = undefined;
/*  1865 */         if ($scope210.$wakingSuspension !== undefined) {
/*  1866 */             $wakeFromSuspension();
/*  1867 */         } else {
/*  1868 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 1, false, false);
/*  1869 */         }
/*  1870 */         while (true) {
/*  1871 */             try {
/*  1872 */                 switch ($blk) {
/*  1873 */                 case 0:
/*  1874 */                     /* --- codeobj entry --- */
/*  1875 */                     if (n === undefined) {
/*  1876 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1877 */                     }
/*  1878 */ 
/*  1879 */                     //
/*  1880 */                     // line 44:
/*  1881 */                     //     times = []
/*  1882 */                     //     ^
/*  1883 */                     //
/*  1884 */                     $currLineNo = 44;
/*  1885 */                     $currColNo = 4;
/*  1886 */ 
/*  1887 */                     var $loadlist212 = new Sk.builtins['list']([]);
/*  1888 */                     times = $loadlist212;
/*  1889 */                     //
/*  1890 */                     // line 45:
/*  1891 */                     //     for i in range(n):
/*  1892 */                     //     ^
/*  1893 */                     //
/*  1894 */                     $currLineNo = 45;
/*  1895 */                     $currColNo = 4;
/*  1896 */ 
/*  1897 */                     var $loadgbl213 = Sk.misceval.loadname('range', $gbl);
/*  1898 */                     if (n === undefined) {
/*  1899 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1900 */                     }
/*  1901 */                     $ret;
/*  1902 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl213, n);
/*  1903 */                     $blk = 4; /* allowing case fallthrough */
/*  1904 */                 case 4:
/*  1905 */                     /* --- function return or resume suspension --- */
/*  1906 */                     if ($ret && $ret.$isSuspension) {
/*  1907 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 45, 13);
/*  1908 */                     }
/*  1909 */                     var $call214 = $ret;
/*  1910 */                     //
/*  1911 */                     // line 45:
/*  1912 */                     //     for i in range(n):
/*  1913 */                     //              ^
/*  1914 */                     //
/*  1915 */                     $currLineNo = 45;
/*  1916 */                     $currColNo = 13;
/*  1917 */ 
/*  1918 */                     var $iter215 = Sk.abstr.iter($call214);
/*  1919 */                     $blk = 1; /* allowing case fallthrough */
/*  1920 */                 case 1:
/*  1921 */                     /* --- for start --- */
/*  1922 */                     $ret = Sk.abstr.iternext($iter215, true);
/*  1923 */                     $blk = 5; /* allowing case fallthrough */
/*  1924 */                 case 5:
/*  1925 */                     /* --- function return or resume suspension --- */
/*  1926 */                     if ($ret && $ret.$isSuspension) {
/*  1927 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 45, 4);
/*  1928 */                     }
/*  1929 */                     var $next216 = $ret;
/*  1930 */                     if ($next216 === undefined) {
/*  1931 */                         $blk = 2;
/*  1932 */                         continue;
/*  1933 */                     }
/*  1934 */                     i = $next216;
/*  1935 */                     //
/*  1936 */                     // line 46:
/*  1937 */                     //         t0 = time.time()
/*  1938 */                     //         ^
/*  1939 */                     //
/*  1940 */                     $currLineNo = 46;
/*  1941 */                     $currColNo = 8;
/*  1942 */ 
/*  1943 */                     var $loadgbl217 = Sk.misceval.loadname('time', $gbl);
/*  1944 */                     $ret = Sk.abstr.gattr($loadgbl217, 'time', true);
/*  1945 */                     $blk = 6; /* allowing case fallthrough */
/*  1946 */                 case 6:
/*  1947 */                     /* --- function return or resume suspension --- */
/*  1948 */                     if ($ret && $ret.$isSuspension) {
/*  1949 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 46, 13);
/*  1950 */                     }
/*  1951 */                     var $lattr218 = $ret;
/*  1952 */                     $ret;
/*  1953 */                     $ret = Sk.misceval.callsimOrSuspend($lattr218);
/*  1954 */                     $blk = 7; /* allowing case fallthrough */
/*  1955 */                 case 7:
/*  1956 */                     /* --- function return or resume suspension --- */
/*  1957 */                     if ($ret && $ret.$isSuspension) {
/*  1958 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 46, 13);
/*  1959 */                     }
/*  1960 */                     var $call219 = $ret;
/*  1961 */                     //
/*  1962 */                     // line 46:
/*  1963 */                     //         t0 = time.time()
/*  1964 */                     //              ^
/*  1965 */                     //
/*  1966 */                     $currLineNo = 46;
/*  1967 */                     $currColNo = 13;
/*  1968 */ 
/*  1969 */                     t0 = $call219;
/*  1970 */                     //
/*  1971 */                     // line 47:
/*  1972 */                     //         u = [1] * DEFAULT_N
/*  1973 */                     //         ^
/*  1974 */                     //
/*  1975 */                     $currLineNo = 47;
/*  1976 */                     $currColNo = 8;
/*  1977 */ 
/*  1978 */                     var $elem220 = new Sk.builtin.int_(1);
/*  1979 */                     var $loadlist221 = new Sk.builtins['list']([$elem220]);
/*  1980 */                     var $loadgbl222 = Sk.misceval.loadname('DEFAULT_N', $gbl);
/*  1981 */                     var $binop223 = Sk.abstr.numberBinOp($loadlist221, $loadgbl222, 'Mult');
/*  1982 */                     u = $binop223;
/*  1983 */                     //
/*  1984 */                     // line 49:
/*  1985 */                     //         for dummy in range (10):
/*  1986 */                     //         ^
/*  1987 */                     //
/*  1988 */                     $currLineNo = 49;
/*  1989 */                     $currColNo = 8;
/*  1990 */ 
/*  1991 */                     var $loadgbl224 = Sk.misceval.loadname('range', $gbl);
/*  1992 */                     $ret;
/*  1993 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl224, new Sk.builtin.int_(10));
/*  1994 */                     $blk = 11; /* allowing case fallthrough */
/*  1995 */                 case 11:
/*  1996 */                     /* --- function return or resume suspension --- */
/*  1997 */                     if ($ret && $ret.$isSuspension) {
/*  1998 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 49, 21);
/*  1999 */                     }
/*  2000 */                     var $call225 = $ret;
/*  2001 */                     //
/*  2002 */                     // line 49:
/*  2003 */                     //         for dummy in range (10):
/*  2004 */                     //                      ^
/*  2005 */                     //
/*  2006 */                     $currLineNo = 49;
/*  2007 */                     $currColNo = 21;
/*  2008 */ 
/*  2009 */                     var $iter226 = Sk.abstr.iter($call225);
/*  2010 */                     $blk = 8; /* allowing case fallthrough */
/*  2011 */                 case 8:
/*  2012 */                     /* --- for start --- */
/*  2013 */                     $ret = Sk.abstr.iternext($iter226, true);
/*  2014 */                     $blk = 12; /* allowing case fallthrough */
/*  2015 */                 case 12:
/*  2016 */                     /* --- function return or resume suspension --- */
/*  2017 */                     if ($ret && $ret.$isSuspension) {
/*  2018 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 49, 8);
/*  2019 */                     }
/*  2020 */                     var $next227 = $ret;
/*  2021 */                     if ($next227 === undefined) {
/*  2022 */                         $blk = 9;
/*  2023 */                         continue;
/*  2024 */                     }
/*  2025 */                     dummy = $next227;
/*  2026 */                     //
/*  2027 */                     // line 50:
/*  2028 */                     //             v = eval_AtA_times_u (u)
/*  2029 */                     //             ^
/*  2030 */                     //
/*  2031 */                     $currLineNo = 50;
/*  2032 */                     $currColNo = 12;
/*  2033 */ 
/*  2034 */                     var $loadgbl228 = Sk.misceval.loadname('eval_AtA_times_u', $gbl);
/*  2035 */                     if (u === undefined) {
/*  2036 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  2037 */                     }
/*  2038 */                     $ret;
/*  2039 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl228, u);
/*  2040 */                     $blk = 13; /* allowing case fallthrough */
/*  2041 */                 case 13:
/*  2042 */                     /* --- function return or resume suspension --- */
/*  2043 */                     if ($ret && $ret.$isSuspension) {
/*  2044 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 50, 16);
/*  2045 */                     }
/*  2046 */                     var $call229 = $ret;
/*  2047 */                     //
/*  2048 */                     // line 50:
/*  2049 */                     //             v = eval_AtA_times_u (u)
/*  2050 */                     //                 ^
/*  2051 */                     //
/*  2052 */                     $currLineNo = 50;
/*  2053 */                     $currColNo = 16;
/*  2054 */ 
/*  2055 */                     v = $call229;
/*  2056 */                     //
/*  2057 */                     // line 51:
/*  2058 */                     //             u = eval_AtA_times_u (v)
/*  2059 */                     //             ^
/*  2060 */                     //
/*  2061 */                     $currLineNo = 51;
/*  2062 */                     $currColNo = 12;
/*  2063 */ 
/*  2064 */                     var $loadgbl230 = Sk.misceval.loadname('eval_AtA_times_u', $gbl);
/*  2065 */                     if (v === undefined) {
/*  2066 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2067 */                     }
/*  2068 */                     $ret;
/*  2069 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl230, v);
/*  2070 */                     $blk = 14; /* allowing case fallthrough */
/*  2071 */                 case 14:
/*  2072 */                     /* --- function return or resume suspension --- */
/*  2073 */                     if ($ret && $ret.$isSuspension) {
/*  2074 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 51, 16);
/*  2075 */                     }
/*  2076 */                     var $call231 = $ret;
/*  2077 */                     //
/*  2078 */                     // line 51:
/*  2079 */                     //             u = eval_AtA_times_u (v)
/*  2080 */                     //                 ^
/*  2081 */                     //
/*  2082 */                     $currLineNo = 51;
/*  2083 */                     $currColNo = 16;
/*  2084 */ 
/*  2085 */                     u = $call231;
/*  2086 */                     $blk = 8; /* jump */
/*  2087 */                     continue;
/*  2088 */                 case 2:
/*  2089 */                     /* --- for cleanup --- */
/*  2090 */                     $blk = 3; /* allowing case fallthrough */
/*  2091 */                 case 3:
/*  2092 */                     /* --- for end --- */
/*  2093 */                     //
/*  2094 */                     // line 60:
/*  2095 */                     //     return times
/*  2096 */                     //     ^
/*  2097 */                     //
/*  2098 */                     $currLineNo = 60;
/*  2099 */                     $currColNo = 4;
/*  2100 */ 
/*  2101 */                     if (times === undefined) {
/*  2102 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2103 */                     }
/*  2104 */                     return times;
/*  2105 */                     return Sk.builtin.none.none$;
/*  2106 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2107 */                 case 9:
/*  2108 */                     /* --- for cleanup --- */
/*  2109 */                     $blk = 10; /* allowing case fallthrough */
/*  2110 */                 case 10:
/*  2111 */                     /* --- for end --- */
/*  2112 */                     //
/*  2113 */                     // line 53:
/*  2114 */                     //         vBv = vv = 0
/*  2115 */                     //         ^
/*  2116 */                     //
/*  2117 */                     $currLineNo = 53;
/*  2118 */                     $currColNo = 8;
/*  2119 */ 
/*  2120 */                     vBv = new Sk.builtin.int_(0);
/*  2121 */                     vv = new Sk.builtin.int_(0);
/*  2122 */                     //
/*  2123 */                     // line 55:
/*  2124 */                     //         for ue, ve in zip (u, v):
/*  2125 */                     //         ^
/*  2126 */                     //
/*  2127 */                     $currLineNo = 55;
/*  2128 */                     $currColNo = 8;
/*  2129 */ 
/*  2130 */                     var $loadgbl232 = Sk.misceval.loadname('zip', $gbl);
/*  2131 */                     if (u === undefined) {
/*  2132 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  2133 */                     }
/*  2134 */                     if (v === undefined) {
/*  2135 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2136 */                     }
/*  2137 */                     $ret;
/*  2138 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl232, u, v);
/*  2139 */                     $blk = 18; /* allowing case fallthrough */
/*  2140 */                 case 18:
/*  2141 */                     /* --- function return or resume suspension --- */
/*  2142 */                     if ($ret && $ret.$isSuspension) {
/*  2143 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 55, 22);
/*  2144 */                     }
/*  2145 */                     var $call233 = $ret;
/*  2146 */                     //
/*  2147 */                     // line 55:
/*  2148 */                     //         for ue, ve in zip (u, v):
/*  2149 */                     //                       ^
/*  2150 */                     //
/*  2151 */                     $currLineNo = 55;
/*  2152 */                     $currColNo = 22;
/*  2153 */ 
/*  2154 */                     var $iter234 = Sk.abstr.iter($call233);
/*  2155 */                     $blk = 15; /* allowing case fallthrough */
/*  2156 */                 case 15:
/*  2157 */                     /* --- for start --- */
/*  2158 */                     $ret = Sk.abstr.iternext($iter234, true);
/*  2159 */                     $blk = 19; /* allowing case fallthrough */
/*  2160 */                 case 19:
/*  2161 */                     /* --- function return or resume suspension --- */
/*  2162 */                     if ($ret && $ret.$isSuspension) {
/*  2163 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 55, 8);
/*  2164 */                     }
/*  2165 */                     var $next235 = $ret;
/*  2166 */                     if ($next235 === undefined) {
/*  2167 */                         $blk = 16;
/*  2168 */                         continue;
/*  2169 */                     }
/*  2170 */                     var $items236 = Sk.abstr.sequenceUnpack($next235, 2);
/*  2171 */                     ue = $items236[0];
/*  2172 */                     ve = $items236[1];
/*  2173 */                     //
/*  2174 */                     // line 56:
/*  2175 */                     //             vBv += ue * ve
/*  2176 */                     //             ^
/*  2177 */                     //
/*  2178 */                     $currLineNo = 56;
/*  2179 */                     $currColNo = 12;
/*  2180 */ 
/*  2181 */                     if (vBv === undefined) {
/*  2182 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vBv\' referenced before assignment');
/*  2183 */                     }
/*  2184 */                     if (ue === undefined) {
/*  2185 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ue\' referenced before assignment');
/*  2186 */                     }
/*  2187 */                     if (ve === undefined) {
/*  2188 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2189 */                     }
/*  2190 */                     var $binop237 = Sk.abstr.numberBinOp(ue, ve, 'Mult');
/*  2191 */                     var $inplbinop238 = Sk.abstr.numberInplaceBinOp(vBv, $binop237, 'Add');
/*  2192 */                     vBv = $inplbinop238;
/*  2193 */                     //
/*  2194 */                     // line 57:
/*  2195 */                     //             vv  += ve * ve
/*  2196 */                     //             ^
/*  2197 */                     //
/*  2198 */                     $currLineNo = 57;
/*  2199 */                     $currColNo = 12;
/*  2200 */ 
/*  2201 */                     if (vv === undefined) {
/*  2202 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vv\' referenced before assignment');
/*  2203 */                     }
/*  2204 */                     if (ve === undefined) {
/*  2205 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2206 */                     }
/*  2207 */                     if (ve === undefined) {
/*  2208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2209 */                     }
/*  2210 */                     var $binop239 = Sk.abstr.numberBinOp(ve, ve, 'Mult');
/*  2211 */                     var $inplbinop240 = Sk.abstr.numberInplaceBinOp(vv, $binop239, 'Add');
/*  2212 */                     vv = $inplbinop240;
/*  2213 */                     $blk = 15; /* jump */
/*  2214 */                     continue;
/*  2215 */                 case 16:
/*  2216 */                     /* --- for cleanup --- */
/*  2217 */                     $blk = 17; /* allowing case fallthrough */
/*  2218 */                 case 17:
/*  2219 */                     /* --- for end --- */
/*  2220 */                     //
/*  2221 */                     // line 58:
/*  2222 */                     //         tk = time.time()
/*  2223 */                     //         ^
/*  2224 */                     //
/*  2225 */                     $currLineNo = 58;
/*  2226 */                     $currColNo = 8;
/*  2227 */ 
/*  2228 */                     var $loadgbl241 = Sk.misceval.loadname('time', $gbl);
/*  2229 */                     $ret = Sk.abstr.gattr($loadgbl241, 'time', true);
/*  2230 */                     $blk = 20; /* allowing case fallthrough */
/*  2231 */                 case 20:
/*  2232 */                     /* --- function return or resume suspension --- */
/*  2233 */                     if ($ret && $ret.$isSuspension) {
/*  2234 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 58, 13);
/*  2235 */                     }
/*  2236 */                     var $lattr242 = $ret;
/*  2237 */                     $ret;
/*  2238 */                     $ret = Sk.misceval.callsimOrSuspend($lattr242);
/*  2239 */                     $blk = 21; /* allowing case fallthrough */
/*  2240 */                 case 21:
/*  2241 */                     /* --- function return or resume suspension --- */
/*  2242 */                     if ($ret && $ret.$isSuspension) {
/*  2243 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 58, 13);
/*  2244 */                     }
/*  2245 */                     var $call243 = $ret;
/*  2246 */                     //
/*  2247 */                     // line 58:
/*  2248 */                     //         tk = time.time()
/*  2249 */                     //              ^
/*  2250 */                     //
/*  2251 */                     $currLineNo = 58;
/*  2252 */                     $currColNo = 13;
/*  2253 */ 
/*  2254 */                     tk = $call243;
/*  2255 */                     //
/*  2256 */                     // line 59:
/*  2257 */                     //         times.append(tk - t0)
/*  2258 */                     //         ^
/*  2259 */                     //
/*  2260 */                     $currLineNo = 59;
/*  2261 */                     $currColNo = 8;
/*  2262 */ 
/*  2263 */                     if (times === undefined) {
/*  2264 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2265 */                     }
/*  2266 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  2267 */                     $blk = 22; /* allowing case fallthrough */
/*  2268 */                 case 22:
/*  2269 */                     /* --- function return or resume suspension --- */
/*  2270 */                     if ($ret && $ret.$isSuspension) {
/*  2271 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 59, 8);
/*  2272 */                     }
/*  2273 */                     var $lattr244 = $ret;
/*  2274 */                     if (tk === undefined) {
/*  2275 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tk\' referenced before assignment');
/*  2276 */                     }
/*  2277 */                     if (t0 === undefined) {
/*  2278 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t0\' referenced before assignment');
/*  2279 */                     }
/*  2280 */                     var $binop245 = Sk.abstr.numberBinOp(tk, t0, 'Sub');
/*  2281 */                     $ret;
/*  2282 */                     $ret = Sk.misceval.callsimOrSuspend($lattr244, $binop245);
/*  2283 */                     $blk = 23; /* allowing case fallthrough */
/*  2284 */                 case 23:
/*  2285 */                     /* --- function return or resume suspension --- */
/*  2286 */                     if ($ret && $ret.$isSuspension) {
/*  2287 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 59, 8);
/*  2288 */                     }
/*  2289 */                     var $call246 = $ret;
/*  2290 */                     //
/*  2291 */                     // line 59:
/*  2292 */                     //         times.append(tk - t0)
/*  2293 */                     //         ^
/*  2294 */                     //
/*  2295 */                     $currLineNo = 59;
/*  2296 */                     $currColNo = 8;
/*  2297 */ 
/*  2298 */                     $blk = 1; /* jump */
/*  2299 */                     continue;
/*  2300 */                 }
/*  2301 */             } catch (err) {
/*  2302 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2303 */                     err = new Sk.builtin.ExternalError(err);
/*  2304 */                 }
/*  2305 */                 err.traceback.push({
/*  2306 */                     lineno: $currLineNo,
/*  2307 */                     colno: $currColNo,
/*  2308 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  2309 */                 });
/*  2310 */                 if ($exc.length > 0) {
/*  2311 */                     $err = err;
/*  2312 */                     $blk = $exc.pop();
/*  2313 */                     continue;
/*  2314 */                 } else {
/*  2315 */                     throw err;
/*  2316 */                 }
/*  2317 */             }
/*  2318 */         }
/*  2319 */     });
/*  2320 */     return $scope120;
/*  2321 */ }();
