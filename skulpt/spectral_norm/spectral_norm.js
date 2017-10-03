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
/*   102 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*   103 */                     $susp.$blk = $blk;
/*   104 */                     $susp.optional = true;
/*   105 */                     return $susp;
/*   106 */                 }
/*   107 */                 switch ($blk) {
/*   108 */                 case 0:
/*   109 */                     /* --- module entry --- */
/*   110 */                     //
/*   111 */                     // line 10:
/*   112 */                     // from math            import sqrt
/*   113 */                     // ^
/*   114 */                     //
/*   115 */                     $currLineNo = 10;
/*   116 */                     $currColNo = 0;
/*   117 */ 
/*   118 */                     $ret = Sk.builtin.__import__('math', $gbl, $loc, ['sqrt']);
/*   119 */                     $blk = 1; /* allowing case fallthrough */
/*   120 */                 case 1:
/*   121 */                     /* --- function return or resume suspension --- */
/*   122 */                     if ($ret && $ret.$isSuspension) {
/*   123 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 10, 0);
/*   124 */                     }
/*   125 */                     var $module121 = $ret;
/*   126 */                     var $item122 = Sk.abstr.gattr($module121, 'sqrt');
/*   127 */                     $loc.sqrt = $item122;
/*   128 */                     //
/*   129 */                     // line 11:
/*   130 */                     // import time
/*   131 */                     // ^
/*   132 */                     //
/*   133 */                     $currLineNo = 11;
/*   134 */                     $currColNo = 0;
/*   135 */ 
/*   136 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   137 */                     $blk = 2; /* allowing case fallthrough */
/*   138 */                 case 2:
/*   139 */                     /* --- function return or resume suspension --- */
/*   140 */                     if ($ret && $ret.$isSuspension) {
/*   141 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 11, 0);
/*   142 */                     }
/*   143 */                     var $module123 = $ret;
/*   144 */                     $loc.time = $module123;
/*   145 */                     //
/*   146 */                     // line 13:
/*   147 */                     // def eval_A (i, j):
/*   148 */                     // ^
/*   149 */                     //
/*   150 */                     $currLineNo = 13;
/*   151 */                     $currColNo = 0;
/*   152 */ 
/*   153 */                     $scope124.co_name = new Sk.builtins['str']('eval_A');
/*   154 */                     $scope124.co_varnames = ['i', 'j'];
/*   155 */                     var $funcobj134 = new Sk.builtins['function']($scope124, $gbl);
/*   156 */                     $loc.eval_A = $funcobj134;
/*   157 */                     //
/*   158 */                     // line 16:
/*   159 */                     // def eval_A_times_u (u):
/*   160 */                     // ^
/*   161 */                     //
/*   162 */                     $currLineNo = 16;
/*   163 */                     $currColNo = 0;
/*   164 */ 
/*   165 */                     $scope135.co_name = new Sk.builtins['str']('eval_A_times_u');
/*   166 */                     $scope135.co_varnames = ['u'];
/*   167 */                     var $funcobj155 = new Sk.builtins['function']($scope135, $gbl);
/*   168 */                     $loc.eval_A_times_u = $funcobj155;
/*   169 */                     //
/*   170 */                     // line 20:
/*   171 */                     // def eval_At_times_u (u):
/*   172 */                     // ^
/*   173 */                     //
/*   174 */                     $currLineNo = 20;
/*   175 */                     $currColNo = 0;
/*   176 */ 
/*   177 */                     $scope156.co_name = new Sk.builtins['str']('eval_At_times_u');
/*   178 */                     $scope156.co_varnames = ['u'];
/*   179 */                     var $funcobj176 = new Sk.builtins['function']($scope156, $gbl);
/*   180 */                     $loc.eval_At_times_u = $funcobj176;
/*   181 */                     //
/*   182 */                     // line 24:
/*   183 */                     // def eval_AtA_times_u (u):
/*   184 */                     // ^
/*   185 */                     //
/*   186 */                     $currLineNo = 24;
/*   187 */                     $currColNo = 0;
/*   188 */ 
/*   189 */                     $scope177.co_name = new Sk.builtins['str']('eval_AtA_times_u');
/*   190 */                     $scope177.co_varnames = ['u'];
/*   191 */                     var $funcobj183 = new Sk.builtins['function']($scope177, $gbl);
/*   192 */                     $loc.eval_AtA_times_u = $funcobj183;
/*   193 */                     //
/*   194 */                     // line 27:
/*   195 */                     // def part_A_times_u(xxx_todo_changeme):
/*   196 */                     // ^
/*   197 */                     //
/*   198 */                     $currLineNo = 27;
/*   199 */                     $currColNo = 0;
/*   200 */ 
/*   201 */                     $scope184.co_name = new Sk.builtins['str']('part_A_times_u');
/*   202 */                     $scope184.co_varnames = ['xxx_todo_changeme'];
/*   203 */                     var $funcobj196 = new Sk.builtins['function']($scope184, $gbl);
/*   204 */                     $loc.part_A_times_u = $funcobj196;
/*   205 */                     //
/*   206 */                     // line 34:
/*   207 */                     // def part_At_times_u(xxx_todo_changeme1):
/*   208 */                     // ^
/*   209 */                     //
/*   210 */                     $currLineNo = 34;
/*   211 */                     $currColNo = 0;
/*   212 */ 
/*   213 */                     $scope197.co_name = new Sk.builtins['str']('part_At_times_u');
/*   214 */                     $scope197.co_varnames = ['xxx_todo_changeme1'];
/*   215 */                     var $funcobj209 = new Sk.builtins['function']($scope197, $gbl);
/*   216 */                     $loc.part_At_times_u = $funcobj209;
/*   217 */                     //
/*   218 */                     // line 41:
/*   219 */                     // DEFAULT_N = 130
/*   220 */                     // ^
/*   221 */                     //
/*   222 */                     $currLineNo = 41;
/*   223 */                     $currColNo = 0;
/*   224 */ 
/*   225 */                     $loc.DEFAULT_N = new Sk.builtin.int_(130);
/*   226 */                     //
/*   227 */                     // line 43:
/*   228 */                     // def main(n):
/*   229 */                     // ^
/*   230 */                     //
/*   231 */                     $currLineNo = 43;
/*   232 */                     $currColNo = 0;
/*   233 */ 
/*   234 */                     $scope210.co_name = new Sk.builtins['str']('main');
/*   235 */                     $scope210.co_varnames = ['n'];
/*   236 */                     var $funcobj247 = new Sk.builtins['function']($scope210, $gbl);
/*   237 */                     $loc.main = $funcobj247;
/*   238 */                     //
/*   239 */                     // line 62:
/*   240 */                     // main(1)
/*   241 */                     // ^
/*   242 */                     //
/*   243 */                     $currLineNo = 62;
/*   244 */                     $currColNo = 0;
/*   245 */ 
/*   246 */                     var $loadname248 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   247 */                     $ret;
/*   248 */                     $ret = Sk.misceval.callsimOrSuspend($loadname248, new Sk.builtin.int_(1));
/*   249 */                     $blk = 3; /* allowing case fallthrough */
/*   250 */                 case 3:
/*   251 */                     /* --- function return or resume suspension --- */
/*   252 */                     if ($ret && $ret.$isSuspension) {
/*   253 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 62, 0);
/*   254 */                     }
/*   255 */                     var $call249 = $ret;
/*   256 */                     //
/*   257 */                     // line 62:
/*   258 */                     // main(1)
/*   259 */                     // ^
/*   260 */                     //
/*   261 */                     $currLineNo = 62;
/*   262 */                     $currColNo = 0;
/*   263 */ 
/*   264 */                     return $loc;
/*   265 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   266 */                 }
/*   267 */             } catch (err) {
/*   268 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   269 */                     err = new Sk.builtin.ExternalError(err);
/*   270 */                 }
/*   271 */                 err.traceback.push({
/*   272 */                     lineno: $currLineNo,
/*   273 */                     colno: $currColNo,
/*   274 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   275 */                 });
/*   276 */                 if ($exc.length > 0) {
/*   277 */                     $err = err;
/*   278 */                     $blk = $exc.pop();
/*   279 */                     continue;
/*   280 */                 } else {
/*   281 */                     throw err;
/*   282 */                 }
/*   283 */             }
/*   284 */         }
/*   285 */     });
/*   286 */     var $scope124 = (function $eval_A125$(i, j) {
/*   287 */         var i, i, i, i, j, j, j;
/*   288 */         var $wakeFromSuspension = function() {
/*   289 */             var susp = $scope124.$wakingSuspension;
/*   290 */             delete $scope124.$wakingSuspension;
/*   291 */             $blk = susp.$blk;
/*   292 */             $loc = susp.$loc;
/*   293 */             $gbl = susp.$gbl;
/*   294 */             $exc = susp.$exc;
/*   295 */             $err = susp.$err;
/*   296 */             $postfinally = susp.$postfinally;
/*   297 */             $currLineNo = susp.$lineno;
/*   298 */             $currColNo = susp.$colno;
/*   299 */             Sk.lastYield = Date.now();
/*   300 */             i = susp.$tmps.i;
/*   301 */             j = susp.$tmps.j;
/*   302 */             try {
/*   303 */                 $ret = susp.child.resume();
/*   304 */             } catch (err) {
/*   305 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   306 */                     err = new Sk.builtin.ExternalError(err);
/*   307 */                 }
/*   308 */                 err.traceback.push({
/*   309 */                     lineno: $currLineNo,
/*   310 */                     colno: $currColNo,
/*   311 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   312 */                 });
/*   313 */                 if ($exc.length > 0) {
/*   314 */                     $err = err;
/*   315 */                     $blk = $exc.pop();
/*   316 */                 } else {
/*   317 */                     throw err;
/*   318 */                 }
/*   319 */             }
/*   320 */         };
/*   321 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   322 */             var susp = new Sk.misceval.Suspension();
/*   323 */             susp.child = $child;
/*   324 */             susp.resume = function() {
/*   325 */                 $scope124.$wakingSuspension = susp;
/*   326 */                 return $scope124();
/*   327 */             };
/*   328 */             susp.data = susp.child.data;
/*   329 */             susp.$blk = $blk;
/*   330 */             susp.$loc = $loc;
/*   331 */             susp.$gbl = $gbl;
/*   332 */             susp.$exc = $exc;
/*   333 */             susp.$err = $err;
/*   334 */             susp.$postfinally = $postfinally;
/*   335 */             susp.$filename = $filename;
/*   336 */             susp.$lineno = $lineno;
/*   337 */             susp.$colno = $colno;
/*   338 */             susp.optional = susp.child.optional;
/*   339 */             susp.$tmps = {
/*   340 */                 "i": i,
/*   341 */                 "j": j
/*   342 */             };
/*   343 */             return susp;
/*   344 */         };
/*   345 */         var $blk = 0,
/*   346 */             $exc = [],
/*   347 */             $loc = {},
/*   348 */             $gbl = this,
/*   349 */             $err = undefined,
/*   350 */             $ret = undefined,
/*   351 */             $postfinally = undefined,
/*   352 */             $currLineNo = undefined,
/*   353 */             $currColNo = undefined;
/*   354 */         if (typeof Sk.execStart === 'undefined') {
/*   355 */             Sk.execStart = Date.now()
/*   356 */         }
/*   357 */         if (typeof Sk.lastYield === 'undefined') {
/*   358 */             Sk.lastYield = Date.now()
/*   359 */         }
/*   360 */         if ($scope124.$wakingSuspension !== undefined) {
/*   361 */             $wakeFromSuspension();
/*   362 */         } else {
/*   363 */             Sk.builtin.pyCheckArgs("eval_A", arguments, 2, 2, false, false);
/*   364 */         }
/*   365 */         while (true) {
/*   366 */             try {
/*   367 */                 var $dateNow = Date.now();
/*   368 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   369 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   370 */                 }
/*   371 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   372 */                     var $susp = $saveSuspension({
/*   373 */                         data: {
/*   374 */                             type: 'Sk.yield'
/*   375 */                         },
/*   376 */                         resume: function() {}
/*   377 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*   378 */                     $susp.$blk = $blk;
/*   379 */                     $susp.optional = true;
/*   380 */                     return $susp;
/*   381 */                 }
/*   382 */                 switch ($blk) {
/*   383 */                 case 0:
/*   384 */                     /* --- codeobj entry --- */
/*   385 */                     if (i === undefined) {
/*   386 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   387 */                     }
/*   388 */                     if (j === undefined) {
/*   389 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   390 */                     }
/*   391 */ 
/*   392 */                     //
/*   393 */                     // line 14:
/*   394 */                     //     return 1.0 / ((i + j) * (i + j + 1) / 2 + i + 1)
/*   395 */                     //     ^
/*   396 */                     //
/*   397 */                     $currLineNo = 14;
/*   398 */                     $currColNo = 4;
/*   399 */ 
/*   400 */                     if (i === undefined) {
/*   401 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   402 */                     }
/*   403 */                     if (j === undefined) {
/*   404 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   405 */                     }
/*   406 */                     var $binop126 = Sk.abstr.numberBinOp(i, j, 'Add');
/*   407 */                     if (i === undefined) {
/*   408 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   409 */                     }
/*   410 */                     if (j === undefined) {
/*   411 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*   412 */                     }
/*   413 */                     var $binop127 = Sk.abstr.numberBinOp(i, j, 'Add');
/*   414 */                     var $binop128 = Sk.abstr.numberBinOp($binop127, new Sk.builtin.int_(1), 'Add');
/*   415 */                     var $binop129 = Sk.abstr.numberBinOp($binop126, $binop128, 'Mult');
/*   416 */                     var $binop130 = Sk.abstr.numberBinOp($binop129, new Sk.builtin.int_(2), 'Div');
/*   417 */                     if (i === undefined) {
/*   418 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   419 */                     }
/*   420 */                     var $binop131 = Sk.abstr.numberBinOp($binop130, i, 'Add');
/*   421 */                     var $binop132 = Sk.abstr.numberBinOp($binop131, new Sk.builtin.int_(1), 'Add');
/*   422 */                     var $binop133 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), $binop132, 'Div');
/*   423 */                     return $binop133;
/*   424 */                     return Sk.builtin.none.none$;
/*   425 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   426 */                 }
/*   427 */             } catch (err) {
/*   428 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   429 */                     err = new Sk.builtin.ExternalError(err);
/*   430 */                 }
/*   431 */                 err.traceback.push({
/*   432 */                     lineno: $currLineNo,
/*   433 */                     colno: $currColNo,
/*   434 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   435 */                 });
/*   436 */                 if ($exc.length > 0) {
/*   437 */                     $err = err;
/*   438 */                     $blk = $exc.pop();
/*   439 */                     continue;
/*   440 */                 } else {
/*   441 */                     throw err;
/*   442 */                 }
/*   443 */             }
/*   444 */         }
/*   445 */     });
/*   446 */     var $scope135 = (function $eval_A_times_u136$(u) {
/*   447 */         // has cell
/*   448 */         var args; /* locals */
/*   449 */         var args, args, $gener144, $gener145, $loadgbl146, $loadgbl147, $gener144, $gener145, $loadgbl146, $loadgbl147, $call148, $loadgbl150, $loadgbl151, $loadgbl152, $loadgbl150, $loadgbl151, $loadgbl152, $call153;
/*   450 */         var $wakeFromSuspension = function() {
/*   451 */             var susp = $scope135.$wakingSuspension;
/*   452 */             delete $scope135.$wakingSuspension;
/*   453 */             $blk = susp.$blk;
/*   454 */             $loc = susp.$loc;
/*   455 */             $gbl = susp.$gbl;
/*   456 */             $exc = susp.$exc;
/*   457 */             $err = susp.$err;
/*   458 */             $postfinally = susp.$postfinally;
/*   459 */             $currLineNo = susp.$lineno;
/*   460 */             $currColNo = susp.$colno;
/*   461 */             Sk.lastYield = Date.now();
/*   462 */             $cell = susp.$cell;
/*   463 */             args = susp.$tmps.args;
/*   464 */             $gener144 = susp.$tmps.$gener144;
/*   465 */             $gener145 = susp.$tmps.$gener145;
/*   466 */             $loadgbl146 = susp.$tmps.$loadgbl146;
/*   467 */             $loadgbl147 = susp.$tmps.$loadgbl147;
/*   468 */             $call148 = susp.$tmps.$call148;
/*   469 */             $loadgbl150 = susp.$tmps.$loadgbl150;
/*   470 */             $loadgbl151 = susp.$tmps.$loadgbl151;
/*   471 */             $loadgbl152 = susp.$tmps.$loadgbl152;
/*   472 */             $call153 = susp.$tmps.$call153;
/*   473 */             try {
/*   474 */                 $ret = susp.child.resume();
/*   475 */             } catch (err) {
/*   476 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   477 */                     err = new Sk.builtin.ExternalError(err);
/*   478 */                 }
/*   479 */                 err.traceback.push({
/*   480 */                     lineno: $currLineNo,
/*   481 */                     colno: $currColNo,
/*   482 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   483 */                 });
/*   484 */                 if ($exc.length > 0) {
/*   485 */                     $err = err;
/*   486 */                     $blk = $exc.pop();
/*   487 */                 } else {
/*   488 */                     throw err;
/*   489 */                 }
/*   490 */             }
/*   491 */         };
/*   492 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   493 */             var susp = new Sk.misceval.Suspension();
/*   494 */             susp.child = $child;
/*   495 */             susp.resume = function() {
/*   496 */                 $scope135.$wakingSuspension = susp;
/*   497 */                 return $scope135();
/*   498 */             };
/*   499 */             susp.data = susp.child.data;
/*   500 */             susp.$blk = $blk;
/*   501 */             susp.$loc = $loc;
/*   502 */             susp.$gbl = $gbl;
/*   503 */             susp.$exc = $exc;
/*   504 */             susp.$err = $err;
/*   505 */             susp.$postfinally = $postfinally;
/*   506 */             susp.$filename = $filename;
/*   507 */             susp.$lineno = $lineno;
/*   508 */             susp.$colno = $colno;
/*   509 */             susp.optional = susp.child.optional;
/*   510 */             susp.$cell = $cell;
/*   511 */             susp.$tmps = {
/*   512 */                 "args": args,
/*   513 */                 "$gener144": $gener144,
/*   514 */                 "$gener145": $gener145,
/*   515 */                 "$loadgbl146": $loadgbl146,
/*   516 */                 "$loadgbl147": $loadgbl147,
/*   517 */                 "$call148": $call148,
/*   518 */                 "$loadgbl150": $loadgbl150,
/*   519 */                 "$loadgbl151": $loadgbl151,
/*   520 */                 "$loadgbl152": $loadgbl152,
/*   521 */                 "$call153": $call153
/*   522 */             };
/*   523 */             return susp;
/*   524 */         };
/*   525 */         var $blk = 0,
/*   526 */             $exc = [],
/*   527 */             $loc = {},
/*   528 */             $cell = {},
/*   529 */             $gbl = this,
/*   530 */             $err = undefined,
/*   531 */             $ret = undefined,
/*   532 */             $postfinally = undefined,
/*   533 */             $currLineNo = undefined,
/*   534 */             $currColNo = undefined;
/*   535 */         if (typeof Sk.execStart === 'undefined') {
/*   536 */             Sk.execStart = Date.now()
/*   537 */         }
/*   538 */         if (typeof Sk.lastYield === 'undefined') {
/*   539 */             Sk.lastYield = Date.now()
/*   540 */         }
/*   541 */         if ($scope135.$wakingSuspension !== undefined) {
/*   542 */             $wakeFromSuspension();
/*   543 */         } else {
/*   544 */             $cell.u = u;
/*   545 */             Sk.builtin.pyCheckArgs("eval_A_times_u", arguments, 1, 1, false, false);
/*   546 */         }
/*   547 */         while (true) {
/*   548 */             try {
/*   549 */                 var $dateNow = Date.now();
/*   550 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   551 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   552 */                 }
/*   553 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   554 */                     var $susp = $saveSuspension({
/*   555 */                         data: {
/*   556 */                             type: 'Sk.yield'
/*   557 */                         },
/*   558 */                         resume: function() {}
/*   559 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*   560 */                     $susp.$blk = $blk;
/*   561 */                     $susp.optional = true;
/*   562 */                     return $susp;
/*   563 */                 }
/*   564 */                 switch ($blk) {
/*   565 */                 case 0:
/*   566 */                     /* --- codeobj entry --- */
/*   567 */                     //
/*   568 */                     // line 17:
/*   569 */                     //     args = ((i,u) for i in range(len(u)))
/*   570 */                     //     ^
/*   571 */                     //
/*   572 */                     $currLineNo = 17;
/*   573 */                     $currColNo = 4;
/*   574 */ 
/*   575 */                     $scope137.co_name = new Sk.builtins['str']('<genexpr>');
/*   576 */                     var $gener144 = new Sk.builtins['function']((function() {
/*   577 */                         Sk.builtin.pyCheckArgs("<genexpr>", arguments, 0, 0);
/*   578 */                         return new Sk.builtins['generator']($scope137, $gbl, [], $cell);
/*   579 */                     }));
/*   580 */                     var $gener145 = Sk.misceval.callsim($gener144);;
/*   581 */                     var $loadgbl146 = Sk.misceval.loadname('range', $gbl);
/*   582 */                     var $loadgbl147 = Sk.misceval.loadname('len', $gbl);
/*   583 */                     $ret;
/*   584 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl147, $cell.u);
/*   585 */                     $blk = 1; /* allowing case fallthrough */
/*   586 */                 case 1:
/*   587 */                     /* --- function return or resume suspension --- */
/*   588 */                     if ($ret && $ret.$isSuspension) {
/*   589 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 33);
/*   590 */                     }
/*   591 */                     var $call148 = $ret;
/*   592 */                     //
/*   593 */                     // line 17:
/*   594 */                     //     args = ((i,u) for i in range(len(u)))
/*   595 */                     //                                  ^
/*   596 */                     //
/*   597 */                     $currLineNo = 17;
/*   598 */                     $currColNo = 33;
/*   599 */ 
/*   600 */                     $ret;
/*   601 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl146, $call148);
/*   602 */                     $blk = 2; /* allowing case fallthrough */
/*   603 */                 case 2:
/*   604 */                     /* --- function return or resume suspension --- */
/*   605 */                     if ($ret && $ret.$isSuspension) {
/*   606 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 27);
/*   607 */                     }
/*   608 */                     var $call149 = $ret;
/*   609 */                     //
/*   610 */                     // line 17:
/*   611 */                     //     args = ((i,u) for i in range(len(u)))
/*   612 */                     //                            ^
/*   613 */                     //
/*   614 */                     $currLineNo = 17;
/*   615 */                     $currColNo = 27;
/*   616 */ 
/*   617 */                     $gener145.gi$locals.$iter0 = Sk.abstr.iter($call149);
/*   618 */                     args = $gener145;
/*   619 */                     //
/*   620 */                     // line 18:
/*   621 */                     //     return list(map(part_A_times_u, args))
/*   622 */                     //     ^
/*   623 */                     //
/*   624 */                     $currLineNo = 18;
/*   625 */                     $currColNo = 4;
/*   626 */ 
/*   627 */                     var $loadgbl150 = Sk.misceval.loadname('list', $gbl);
/*   628 */                     var $loadgbl151 = Sk.misceval.loadname('map', $gbl);
/*   629 */                     var $loadgbl152 = Sk.misceval.loadname('part_A_times_u', $gbl);
/*   630 */                     if (args === undefined) {
/*   631 */                         throw new Sk.builtin.UnboundLocalError('local variable \'args\' referenced before assignment');
/*   632 */                     }
/*   633 */                     $ret;
/*   634 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl151, $loadgbl152, args);
/*   635 */                     $blk = 3; /* allowing case fallthrough */
/*   636 */                 case 3:
/*   637 */                     /* --- function return or resume suspension --- */
/*   638 */                     if ($ret && $ret.$isSuspension) {
/*   639 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 18, 16);
/*   640 */                     }
/*   641 */                     var $call153 = $ret;
/*   642 */                     //
/*   643 */                     // line 18:
/*   644 */                     //     return list(map(part_A_times_u, args))
/*   645 */                     //                 ^
/*   646 */                     //
/*   647 */                     $currLineNo = 18;
/*   648 */                     $currColNo = 16;
/*   649 */ 
/*   650 */                     $ret;
/*   651 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl150, $call153);
/*   652 */                     $blk = 4; /* allowing case fallthrough */
/*   653 */                 case 4:
/*   654 */                     /* --- function return or resume suspension --- */
/*   655 */                     if ($ret && $ret.$isSuspension) {
/*   656 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 18, 11);
/*   657 */                     }
/*   658 */                     var $call154 = $ret;
/*   659 */                     //
/*   660 */                     // line 18:
/*   661 */                     //     return list(map(part_A_times_u, args))
/*   662 */                     //            ^
/*   663 */                     //
/*   664 */                     $currLineNo = 18;
/*   665 */                     $currColNo = 11;
/*   666 */ 
/*   667 */                     return $call154;
/*   668 */                     return Sk.builtin.none.none$;
/*   669 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   670 */                 }
/*   671 */             } catch (err) {
/*   672 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   673 */                     err = new Sk.builtin.ExternalError(err);
/*   674 */                 }
/*   675 */                 err.traceback.push({
/*   676 */                     lineno: $currLineNo,
/*   677 */                     colno: $currColNo,
/*   678 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   679 */                 });
/*   680 */                 if ($exc.length > 0) {
/*   681 */                     $err = err;
/*   682 */                     $blk = $exc.pop();
/*   683 */                     continue;
/*   684 */                 } else {
/*   685 */                     throw err;
/*   686 */                 }
/*   687 */             }
/*   688 */         }
/*   689 */     });
/*   690 */     var $scope137 = (function $genexpr138$($gen, $free) {
/*   691 */         // generator
/*   692 */         // has free
/*   693 */         var $free;
/*   694 */         var $wakeFromSuspension = function() {
/*   695 */             var susp = $scope137.$wakingSuspension;
/*   696 */             delete $scope137.$wakingSuspension;
/*   697 */             $blk = susp.$blk;
/*   698 */             $loc = susp.$loc;
/*   699 */             $gbl = susp.$gbl;
/*   700 */             $exc = susp.$exc;
/*   701 */             $err = susp.$err;
/*   702 */             $postfinally = susp.$postfinally;
/*   703 */             $currLineNo = susp.$lineno;
/*   704 */             $currColNo = susp.$colno;
/*   705 */             Sk.lastYield = Date.now();
/*   706 */             $free = susp.$tmps.$free;
/*   707 */             try {
/*   708 */                 $ret = susp.child.resume();
/*   709 */             } catch (err) {
/*   710 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   711 */                     err = new Sk.builtin.ExternalError(err);
/*   712 */                 }
/*   713 */                 err.traceback.push({
/*   714 */                     lineno: $currLineNo,
/*   715 */                     colno: $currColNo,
/*   716 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   717 */                 });
/*   718 */                 if ($exc.length > 0) {
/*   719 */                     $err = err;
/*   720 */                     $blk = $exc.pop();
/*   721 */                 } else {
/*   722 */                     throw err;
/*   723 */                 }
/*   724 */             }
/*   725 */         };
/*   726 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   727 */             var susp = new Sk.misceval.Suspension();
/*   728 */             susp.child = $child;
/*   729 */             susp.resume = function() {
/*   730 */                 $scope137.$wakingSuspension = susp;
/*   731 */                 return $scope137($gen);
/*   732 */             };
/*   733 */             susp.data = susp.child.data;
/*   734 */             susp.$blk = $blk;
/*   735 */             susp.$loc = $loc;
/*   736 */             susp.$gbl = $gbl;
/*   737 */             susp.$exc = $exc;
/*   738 */             susp.$err = $err;
/*   739 */             susp.$postfinally = $postfinally;
/*   740 */             susp.$filename = $filename;
/*   741 */             susp.$lineno = $lineno;
/*   742 */             susp.$colno = $colno;
/*   743 */             susp.optional = susp.child.optional;
/*   744 */             susp.$tmps = {
/*   745 */                 "$free": $free
/*   746 */             };
/*   747 */             return susp;
/*   748 */         };
/*   749 */         var $blk = $gen.gi$resumeat,
/*   750 */             $exc = [],
/*   751 */             $loc = $gen.gi$locals,
/*   752 */             $gbl = this,
/*   753 */             $err = undefined,
/*   754 */             $ret = undefined,
/*   755 */             $postfinally = undefined,
/*   756 */             $currLineNo = undefined,
/*   757 */             $currColNo = undefined;
/*   758 */         if (typeof Sk.execStart === 'undefined') {
/*   759 */             Sk.execStart = Date.now()
/*   760 */         }
/*   761 */         if (typeof Sk.lastYield === 'undefined') {
/*   762 */             Sk.lastYield = Date.now()
/*   763 */         }
/*   764 */         if ($scope137.$wakingSuspension !== undefined) {
/*   765 */             $wakeFromSuspension();
/*   766 */         } else {}
/*   767 */         while (true) {
/*   768 */             try {
/*   769 */                 var $dateNow = Date.now();
/*   770 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   771 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   772 */                 }
/*   773 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   774 */                     var $susp = $saveSuspension({
/*   775 */                         data: {
/*   776 */                             type: 'Sk.yield'
/*   777 */                         },
/*   778 */                         resume: function() {}
/*   779 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*   780 */                     $susp.$blk = $blk;
/*   781 */                     $susp.optional = true;
/*   782 */                     return $susp;
/*   783 */                 }
/*   784 */                 switch ($blk) {
/*   785 */                 case 0:
/*   786 */                     /* --- codeobj entry --- */
/*   787 */                     $blk = 1; /* allowing case fallthrough */
/*   788 */                 case 1:
/*   789 */                     /* --- start for 0 --- */
/*   790 */                     //
/*   791 */                     // line 17:
/*   792 */                     //     args = ((i,u) for i in range(len(u)))
/*   793 */                     //              ^
/*   794 */                     //
/*   795 */                     $currLineNo = 17;
/*   796 */                     $currColNo = 13;
/*   797 */ 
/*   798 */                     $ret = Sk.abstr.iternext($loc.$iter0, true);
/*   799 */                     $blk = 5; /* allowing case fallthrough */
/*   800 */                 case 5:
/*   801 */                     /* --- function return or resume suspension --- */
/*   802 */                     if ($ret && $ret.$isSuspension) {
/*   803 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 17, 13);
/*   804 */                     }
/*   805 */                     var $next139 = $ret;
/*   806 */                     if ($next139 === undefined) {
/*   807 */                         $blk = 4;
/*   808 */                         continue;
/*   809 */                     }
/*   810 */                     $loc.i = $next139;
/*   811 */                     //
/*   812 */                     // line 17:
/*   813 */                     //     args = ((i,u) for i in range(len(u)))
/*   814 */                     //              ^
/*   815 */                     //
/*   816 */                     $currLineNo = 17;
/*   817 */                     $currColNo = 13;
/*   818 */ 
/*   819 */                     var $loadname140 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*   820 */                     var $elem141 = $loadname140;
/*   821 */                     var $elem142 = $free.u;
/*   822 */                     var $loadtuple143 = new Sk.builtins['tuple']([$elem141, $elem142]);
/*   823 */                     return [2 /*resume*/ , $loadtuple143 /*ret*/ ];
/*   824 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   825 */                 case 2:
/*   826 */                     /* --- skip for 0 --- */
/*   827 */                     $blk = 1; /* jump */
/*   828 */                     continue;
/*   829 */                 case 3:
/*   830 */                     /* --- if cleanup for 0 --- */
/*   831 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   832 */                 case 4:
/*   833 */                     /* --- end for 0 --- */
/*   834 */                     return Sk.builtin.none.none$;
/*   835 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   836 */                 }
/*   837 */             } catch (err) {
/*   838 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   839 */                     err = new Sk.builtin.ExternalError(err);
/*   840 */                 }
/*   841 */                 err.traceback.push({
/*   842 */                     lineno: $currLineNo,
/*   843 */                     colno: $currColNo,
/*   844 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   845 */                 });
/*   846 */                 if ($exc.length > 0) {
/*   847 */                     $err = err;
/*   848 */                     $blk = $exc.pop();
/*   849 */                     continue;
/*   850 */                 } else {
/*   851 */                     throw err;
/*   852 */                 }
/*   853 */             }
/*   854 */         }
/*   855 */     });
/*   856 */     var $scope156 = (function $eval_At_times_u157$(u) {
/*   857 */         // has cell
/*   858 */         var args; /* locals */
/*   859 */         var args, args, $gener165, $gener166, $loadgbl167, $loadgbl168, $gener165, $gener166, $loadgbl167, $loadgbl168, $call169, $loadgbl171, $loadgbl172, $loadgbl173, $loadgbl171, $loadgbl172, $loadgbl173, $call174;
/*   860 */         var $wakeFromSuspension = function() {
/*   861 */             var susp = $scope156.$wakingSuspension;
/*   862 */             delete $scope156.$wakingSuspension;
/*   863 */             $blk = susp.$blk;
/*   864 */             $loc = susp.$loc;
/*   865 */             $gbl = susp.$gbl;
/*   866 */             $exc = susp.$exc;
/*   867 */             $err = susp.$err;
/*   868 */             $postfinally = susp.$postfinally;
/*   869 */             $currLineNo = susp.$lineno;
/*   870 */             $currColNo = susp.$colno;
/*   871 */             Sk.lastYield = Date.now();
/*   872 */             $cell = susp.$cell;
/*   873 */             args = susp.$tmps.args;
/*   874 */             $gener165 = susp.$tmps.$gener165;
/*   875 */             $gener166 = susp.$tmps.$gener166;
/*   876 */             $loadgbl167 = susp.$tmps.$loadgbl167;
/*   877 */             $loadgbl168 = susp.$tmps.$loadgbl168;
/*   878 */             $call169 = susp.$tmps.$call169;
/*   879 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*   880 */             $loadgbl172 = susp.$tmps.$loadgbl172;
/*   881 */             $loadgbl173 = susp.$tmps.$loadgbl173;
/*   882 */             $call174 = susp.$tmps.$call174;
/*   883 */             try {
/*   884 */                 $ret = susp.child.resume();
/*   885 */             } catch (err) {
/*   886 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   887 */                     err = new Sk.builtin.ExternalError(err);
/*   888 */                 }
/*   889 */                 err.traceback.push({
/*   890 */                     lineno: $currLineNo,
/*   891 */                     colno: $currColNo,
/*   892 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*   893 */                 });
/*   894 */                 if ($exc.length > 0) {
/*   895 */                     $err = err;
/*   896 */                     $blk = $exc.pop();
/*   897 */                 } else {
/*   898 */                     throw err;
/*   899 */                 }
/*   900 */             }
/*   901 */         };
/*   902 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   903 */             var susp = new Sk.misceval.Suspension();
/*   904 */             susp.child = $child;
/*   905 */             susp.resume = function() {
/*   906 */                 $scope156.$wakingSuspension = susp;
/*   907 */                 return $scope156();
/*   908 */             };
/*   909 */             susp.data = susp.child.data;
/*   910 */             susp.$blk = $blk;
/*   911 */             susp.$loc = $loc;
/*   912 */             susp.$gbl = $gbl;
/*   913 */             susp.$exc = $exc;
/*   914 */             susp.$err = $err;
/*   915 */             susp.$postfinally = $postfinally;
/*   916 */             susp.$filename = $filename;
/*   917 */             susp.$lineno = $lineno;
/*   918 */             susp.$colno = $colno;
/*   919 */             susp.optional = susp.child.optional;
/*   920 */             susp.$cell = $cell;
/*   921 */             susp.$tmps = {
/*   922 */                 "args": args,
/*   923 */                 "$gener165": $gener165,
/*   924 */                 "$gener166": $gener166,
/*   925 */                 "$loadgbl167": $loadgbl167,
/*   926 */                 "$loadgbl168": $loadgbl168,
/*   927 */                 "$call169": $call169,
/*   928 */                 "$loadgbl171": $loadgbl171,
/*   929 */                 "$loadgbl172": $loadgbl172,
/*   930 */                 "$loadgbl173": $loadgbl173,
/*   931 */                 "$call174": $call174
/*   932 */             };
/*   933 */             return susp;
/*   934 */         };
/*   935 */         var $blk = 0,
/*   936 */             $exc = [],
/*   937 */             $loc = {},
/*   938 */             $cell = {},
/*   939 */             $gbl = this,
/*   940 */             $err = undefined,
/*   941 */             $ret = undefined,
/*   942 */             $postfinally = undefined,
/*   943 */             $currLineNo = undefined,
/*   944 */             $currColNo = undefined;
/*   945 */         if (typeof Sk.execStart === 'undefined') {
/*   946 */             Sk.execStart = Date.now()
/*   947 */         }
/*   948 */         if (typeof Sk.lastYield === 'undefined') {
/*   949 */             Sk.lastYield = Date.now()
/*   950 */         }
/*   951 */         if ($scope156.$wakingSuspension !== undefined) {
/*   952 */             $wakeFromSuspension();
/*   953 */         } else {
/*   954 */             $cell.u = u;
/*   955 */             Sk.builtin.pyCheckArgs("eval_At_times_u", arguments, 1, 1, false, false);
/*   956 */         }
/*   957 */         while (true) {
/*   958 */             try {
/*   959 */                 var $dateNow = Date.now();
/*   960 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   961 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   962 */                 }
/*   963 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   964 */                     var $susp = $saveSuspension({
/*   965 */                         data: {
/*   966 */                             type: 'Sk.yield'
/*   967 */                         },
/*   968 */                         resume: function() {}
/*   969 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*   970 */                     $susp.$blk = $blk;
/*   971 */                     $susp.optional = true;
/*   972 */                     return $susp;
/*   973 */                 }
/*   974 */                 switch ($blk) {
/*   975 */                 case 0:
/*   976 */                     /* --- codeobj entry --- */
/*   977 */                     //
/*   978 */                     // line 21:
/*   979 */                     //     args = ((i,u) for i in range(len(u)))
/*   980 */                     //     ^
/*   981 */                     //
/*   982 */                     $currLineNo = 21;
/*   983 */                     $currColNo = 4;
/*   984 */ 
/*   985 */                     $scope158.co_name = new Sk.builtins['str']('<genexpr>');
/*   986 */                     var $gener165 = new Sk.builtins['function']((function() {
/*   987 */                         Sk.builtin.pyCheckArgs("<genexpr>", arguments, 0, 0);
/*   988 */                         return new Sk.builtins['generator']($scope158, $gbl, [], $cell);
/*   989 */                     }));
/*   990 */                     var $gener166 = Sk.misceval.callsim($gener165);;
/*   991 */                     var $loadgbl167 = Sk.misceval.loadname('range', $gbl);
/*   992 */                     var $loadgbl168 = Sk.misceval.loadname('len', $gbl);
/*   993 */                     $ret;
/*   994 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl168, $cell.u);
/*   995 */                     $blk = 1; /* allowing case fallthrough */
/*   996 */                 case 1:
/*   997 */                     /* --- function return or resume suspension --- */
/*   998 */                     if ($ret && $ret.$isSuspension) {
/*   999 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 33);
/*  1000 */                     }
/*  1001 */                     var $call169 = $ret;
/*  1002 */                     //
/*  1003 */                     // line 21:
/*  1004 */                     //     args = ((i,u) for i in range(len(u)))
/*  1005 */                     //                                  ^
/*  1006 */                     //
/*  1007 */                     $currLineNo = 21;
/*  1008 */                     $currColNo = 33;
/*  1009 */ 
/*  1010 */                     $ret;
/*  1011 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl167, $call169);
/*  1012 */                     $blk = 2; /* allowing case fallthrough */
/*  1013 */                 case 2:
/*  1014 */                     /* --- function return or resume suspension --- */
/*  1015 */                     if ($ret && $ret.$isSuspension) {
/*  1016 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 27);
/*  1017 */                     }
/*  1018 */                     var $call170 = $ret;
/*  1019 */                     //
/*  1020 */                     // line 21:
/*  1021 */                     //     args = ((i,u) for i in range(len(u)))
/*  1022 */                     //                            ^
/*  1023 */                     //
/*  1024 */                     $currLineNo = 21;
/*  1025 */                     $currColNo = 27;
/*  1026 */ 
/*  1027 */                     $gener166.gi$locals.$iter0 = Sk.abstr.iter($call170);
/*  1028 */                     args = $gener166;
/*  1029 */                     //
/*  1030 */                     // line 22:
/*  1031 */                     //     return list(map(part_At_times_u, args))
/*  1032 */                     //     ^
/*  1033 */                     //
/*  1034 */                     $currLineNo = 22;
/*  1035 */                     $currColNo = 4;
/*  1036 */ 
/*  1037 */                     var $loadgbl171 = Sk.misceval.loadname('list', $gbl);
/*  1038 */                     var $loadgbl172 = Sk.misceval.loadname('map', $gbl);
/*  1039 */                     var $loadgbl173 = Sk.misceval.loadname('part_At_times_u', $gbl);
/*  1040 */                     if (args === undefined) {
/*  1041 */                         throw new Sk.builtin.UnboundLocalError('local variable \'args\' referenced before assignment');
/*  1042 */                     }
/*  1043 */                     $ret;
/*  1044 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl172, $loadgbl173, args);
/*  1045 */                     $blk = 3; /* allowing case fallthrough */
/*  1046 */                 case 3:
/*  1047 */                     /* --- function return or resume suspension --- */
/*  1048 */                     if ($ret && $ret.$isSuspension) {
/*  1049 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 22, 16);
/*  1050 */                     }
/*  1051 */                     var $call174 = $ret;
/*  1052 */                     //
/*  1053 */                     // line 22:
/*  1054 */                     //     return list(map(part_At_times_u, args))
/*  1055 */                     //                 ^
/*  1056 */                     //
/*  1057 */                     $currLineNo = 22;
/*  1058 */                     $currColNo = 16;
/*  1059 */ 
/*  1060 */                     $ret;
/*  1061 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171, $call174);
/*  1062 */                     $blk = 4; /* allowing case fallthrough */
/*  1063 */                 case 4:
/*  1064 */                     /* --- function return or resume suspension --- */
/*  1065 */                     if ($ret && $ret.$isSuspension) {
/*  1066 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 22, 11);
/*  1067 */                     }
/*  1068 */                     var $call175 = $ret;
/*  1069 */                     //
/*  1070 */                     // line 22:
/*  1071 */                     //     return list(map(part_At_times_u, args))
/*  1072 */                     //            ^
/*  1073 */                     //
/*  1074 */                     $currLineNo = 22;
/*  1075 */                     $currColNo = 11;
/*  1076 */ 
/*  1077 */                     return $call175;
/*  1078 */                     return Sk.builtin.none.none$;
/*  1079 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1080 */                 }
/*  1081 */             } catch (err) {
/*  1082 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1083 */                     err = new Sk.builtin.ExternalError(err);
/*  1084 */                 }
/*  1085 */                 err.traceback.push({
/*  1086 */                     lineno: $currLineNo,
/*  1087 */                     colno: $currColNo,
/*  1088 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1089 */                 });
/*  1090 */                 if ($exc.length > 0) {
/*  1091 */                     $err = err;
/*  1092 */                     $blk = $exc.pop();
/*  1093 */                     continue;
/*  1094 */                 } else {
/*  1095 */                     throw err;
/*  1096 */                 }
/*  1097 */             }
/*  1098 */         }
/*  1099 */     });
/*  1100 */     var $scope158 = (function $genexpr159$($gen, $free) {
/*  1101 */         // generator
/*  1102 */         // has free
/*  1103 */         var $free;
/*  1104 */         var $wakeFromSuspension = function() {
/*  1105 */             var susp = $scope158.$wakingSuspension;
/*  1106 */             delete $scope158.$wakingSuspension;
/*  1107 */             $blk = susp.$blk;
/*  1108 */             $loc = susp.$loc;
/*  1109 */             $gbl = susp.$gbl;
/*  1110 */             $exc = susp.$exc;
/*  1111 */             $err = susp.$err;
/*  1112 */             $postfinally = susp.$postfinally;
/*  1113 */             $currLineNo = susp.$lineno;
/*  1114 */             $currColNo = susp.$colno;
/*  1115 */             Sk.lastYield = Date.now();
/*  1116 */             $free = susp.$tmps.$free;
/*  1117 */             try {
/*  1118 */                 $ret = susp.child.resume();
/*  1119 */             } catch (err) {
/*  1120 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1121 */                     err = new Sk.builtin.ExternalError(err);
/*  1122 */                 }
/*  1123 */                 err.traceback.push({
/*  1124 */                     lineno: $currLineNo,
/*  1125 */                     colno: $currColNo,
/*  1126 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1127 */                 });
/*  1128 */                 if ($exc.length > 0) {
/*  1129 */                     $err = err;
/*  1130 */                     $blk = $exc.pop();
/*  1131 */                 } else {
/*  1132 */                     throw err;
/*  1133 */                 }
/*  1134 */             }
/*  1135 */         };
/*  1136 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1137 */             var susp = new Sk.misceval.Suspension();
/*  1138 */             susp.child = $child;
/*  1139 */             susp.resume = function() {
/*  1140 */                 $scope158.$wakingSuspension = susp;
/*  1141 */                 return $scope158($gen);
/*  1142 */             };
/*  1143 */             susp.data = susp.child.data;
/*  1144 */             susp.$blk = $blk;
/*  1145 */             susp.$loc = $loc;
/*  1146 */             susp.$gbl = $gbl;
/*  1147 */             susp.$exc = $exc;
/*  1148 */             susp.$err = $err;
/*  1149 */             susp.$postfinally = $postfinally;
/*  1150 */             susp.$filename = $filename;
/*  1151 */             susp.$lineno = $lineno;
/*  1152 */             susp.$colno = $colno;
/*  1153 */             susp.optional = susp.child.optional;
/*  1154 */             susp.$tmps = {
/*  1155 */                 "$free": $free
/*  1156 */             };
/*  1157 */             return susp;
/*  1158 */         };
/*  1159 */         var $blk = $gen.gi$resumeat,
/*  1160 */             $exc = [],
/*  1161 */             $loc = $gen.gi$locals,
/*  1162 */             $gbl = this,
/*  1163 */             $err = undefined,
/*  1164 */             $ret = undefined,
/*  1165 */             $postfinally = undefined,
/*  1166 */             $currLineNo = undefined,
/*  1167 */             $currColNo = undefined;
/*  1168 */         if (typeof Sk.execStart === 'undefined') {
/*  1169 */             Sk.execStart = Date.now()
/*  1170 */         }
/*  1171 */         if (typeof Sk.lastYield === 'undefined') {
/*  1172 */             Sk.lastYield = Date.now()
/*  1173 */         }
/*  1174 */         if ($scope158.$wakingSuspension !== undefined) {
/*  1175 */             $wakeFromSuspension();
/*  1176 */         } else {}
/*  1177 */         while (true) {
/*  1178 */             try {
/*  1179 */                 var $dateNow = Date.now();
/*  1180 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1181 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1182 */                 }
/*  1183 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1184 */                     var $susp = $saveSuspension({
/*  1185 */                         data: {
/*  1186 */                             type: 'Sk.yield'
/*  1187 */                         },
/*  1188 */                         resume: function() {}
/*  1189 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*  1190 */                     $susp.$blk = $blk;
/*  1191 */                     $susp.optional = true;
/*  1192 */                     return $susp;
/*  1193 */                 }
/*  1194 */                 switch ($blk) {
/*  1195 */                 case 0:
/*  1196 */                     /* --- codeobj entry --- */
/*  1197 */                     $blk = 1; /* allowing case fallthrough */
/*  1198 */                 case 1:
/*  1199 */                     /* --- start for 0 --- */
/*  1200 */                     //
/*  1201 */                     // line 21:
/*  1202 */                     //     args = ((i,u) for i in range(len(u)))
/*  1203 */                     //              ^
/*  1204 */                     //
/*  1205 */                     $currLineNo = 21;
/*  1206 */                     $currColNo = 13;
/*  1207 */ 
/*  1208 */                     $ret = Sk.abstr.iternext($loc.$iter0, true);
/*  1209 */                     $blk = 5; /* allowing case fallthrough */
/*  1210 */                 case 5:
/*  1211 */                     /* --- function return or resume suspension --- */
/*  1212 */                     if ($ret && $ret.$isSuspension) {
/*  1213 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 21, 13);
/*  1214 */                     }
/*  1215 */                     var $next160 = $ret;
/*  1216 */                     if ($next160 === undefined) {
/*  1217 */                         $blk = 4;
/*  1218 */                         continue;
/*  1219 */                     }
/*  1220 */                     $loc.i = $next160;
/*  1221 */                     //
/*  1222 */                     // line 21:
/*  1223 */                     //     args = ((i,u) for i in range(len(u)))
/*  1224 */                     //              ^
/*  1225 */                     //
/*  1226 */                     $currLineNo = 21;
/*  1227 */                     $currColNo = 13;
/*  1228 */ 
/*  1229 */                     var $loadname161 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*  1230 */                     var $elem162 = $loadname161;
/*  1231 */                     var $elem163 = $free.u;
/*  1232 */                     var $loadtuple164 = new Sk.builtins['tuple']([$elem162, $elem163]);
/*  1233 */                     return [2 /*resume*/ , $loadtuple164 /*ret*/ ];
/*  1234 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1235 */                 case 2:
/*  1236 */                     /* --- skip for 0 --- */
/*  1237 */                     $blk = 1; /* jump */
/*  1238 */                     continue;
/*  1239 */                 case 3:
/*  1240 */                     /* --- if cleanup for 0 --- */
/*  1241 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1242 */                 case 4:
/*  1243 */                     /* --- end for 0 --- */
/*  1244 */                     return Sk.builtin.none.none$;
/*  1245 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1246 */                 }
/*  1247 */             } catch (err) {
/*  1248 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1249 */                     err = new Sk.builtin.ExternalError(err);
/*  1250 */                 }
/*  1251 */                 err.traceback.push({
/*  1252 */                     lineno: $currLineNo,
/*  1253 */                     colno: $currColNo,
/*  1254 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1255 */                 });
/*  1256 */                 if ($exc.length > 0) {
/*  1257 */                     $err = err;
/*  1258 */                     $blk = $exc.pop();
/*  1259 */                     continue;
/*  1260 */                 } else {
/*  1261 */                     throw err;
/*  1262 */                 }
/*  1263 */             }
/*  1264 */         }
/*  1265 */     });
/*  1266 */     var $scope177 = (function $eval_AtA_times_u178$(u) {
/*  1267 */         var u, u, $loadgbl179, $loadgbl180, $loadgbl179, $loadgbl180, $call181;
/*  1268 */         var $wakeFromSuspension = function() {
/*  1269 */             var susp = $scope177.$wakingSuspension;
/*  1270 */             delete $scope177.$wakingSuspension;
/*  1271 */             $blk = susp.$blk;
/*  1272 */             $loc = susp.$loc;
/*  1273 */             $gbl = susp.$gbl;
/*  1274 */             $exc = susp.$exc;
/*  1275 */             $err = susp.$err;
/*  1276 */             $postfinally = susp.$postfinally;
/*  1277 */             $currLineNo = susp.$lineno;
/*  1278 */             $currColNo = susp.$colno;
/*  1279 */             Sk.lastYield = Date.now();
/*  1280 */             u = susp.$tmps.u;
/*  1281 */             $loadgbl179 = susp.$tmps.$loadgbl179;
/*  1282 */             $loadgbl180 = susp.$tmps.$loadgbl180;
/*  1283 */             $call181 = susp.$tmps.$call181;
/*  1284 */             try {
/*  1285 */                 $ret = susp.child.resume();
/*  1286 */             } catch (err) {
/*  1287 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1288 */                     err = new Sk.builtin.ExternalError(err);
/*  1289 */                 }
/*  1290 */                 err.traceback.push({
/*  1291 */                     lineno: $currLineNo,
/*  1292 */                     colno: $currColNo,
/*  1293 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1294 */                 });
/*  1295 */                 if ($exc.length > 0) {
/*  1296 */                     $err = err;
/*  1297 */                     $blk = $exc.pop();
/*  1298 */                 } else {
/*  1299 */                     throw err;
/*  1300 */                 }
/*  1301 */             }
/*  1302 */         };
/*  1303 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1304 */             var susp = new Sk.misceval.Suspension();
/*  1305 */             susp.child = $child;
/*  1306 */             susp.resume = function() {
/*  1307 */                 $scope177.$wakingSuspension = susp;
/*  1308 */                 return $scope177();
/*  1309 */             };
/*  1310 */             susp.data = susp.child.data;
/*  1311 */             susp.$blk = $blk;
/*  1312 */             susp.$loc = $loc;
/*  1313 */             susp.$gbl = $gbl;
/*  1314 */             susp.$exc = $exc;
/*  1315 */             susp.$err = $err;
/*  1316 */             susp.$postfinally = $postfinally;
/*  1317 */             susp.$filename = $filename;
/*  1318 */             susp.$lineno = $lineno;
/*  1319 */             susp.$colno = $colno;
/*  1320 */             susp.optional = susp.child.optional;
/*  1321 */             susp.$tmps = {
/*  1322 */                 "u": u,
/*  1323 */                 "$loadgbl179": $loadgbl179,
/*  1324 */                 "$loadgbl180": $loadgbl180,
/*  1325 */                 "$call181": $call181
/*  1326 */             };
/*  1327 */             return susp;
/*  1328 */         };
/*  1329 */         var $blk = 0,
/*  1330 */             $exc = [],
/*  1331 */             $loc = {},
/*  1332 */             $gbl = this,
/*  1333 */             $err = undefined,
/*  1334 */             $ret = undefined,
/*  1335 */             $postfinally = undefined,
/*  1336 */             $currLineNo = undefined,
/*  1337 */             $currColNo = undefined;
/*  1338 */         if (typeof Sk.execStart === 'undefined') {
/*  1339 */             Sk.execStart = Date.now()
/*  1340 */         }
/*  1341 */         if (typeof Sk.lastYield === 'undefined') {
/*  1342 */             Sk.lastYield = Date.now()
/*  1343 */         }
/*  1344 */         if ($scope177.$wakingSuspension !== undefined) {
/*  1345 */             $wakeFromSuspension();
/*  1346 */         } else {
/*  1347 */             Sk.builtin.pyCheckArgs("eval_AtA_times_u", arguments, 1, 1, false, false);
/*  1348 */         }
/*  1349 */         while (true) {
/*  1350 */             try {
/*  1351 */                 var $dateNow = Date.now();
/*  1352 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1353 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1354 */                 }
/*  1355 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1356 */                     var $susp = $saveSuspension({
/*  1357 */                         data: {
/*  1358 */                             type: 'Sk.yield'
/*  1359 */                         },
/*  1360 */                         resume: function() {}
/*  1361 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*  1362 */                     $susp.$blk = $blk;
/*  1363 */                     $susp.optional = true;
/*  1364 */                     return $susp;
/*  1365 */                 }
/*  1366 */                 switch ($blk) {
/*  1367 */                 case 0:
/*  1368 */                     /* --- codeobj entry --- */
/*  1369 */                     if (u === undefined) {
/*  1370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1371 */                     }
/*  1372 */ 
/*  1373 */                     //
/*  1374 */                     // line 25:
/*  1375 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1376 */                     //     ^
/*  1377 */                     //
/*  1378 */                     $currLineNo = 25;
/*  1379 */                     $currColNo = 4;
/*  1380 */ 
/*  1381 */                     var $loadgbl179 = Sk.misceval.loadname('eval_At_times_u', $gbl);
/*  1382 */                     var $loadgbl180 = Sk.misceval.loadname('eval_A_times_u', $gbl);
/*  1383 */                     if (u === undefined) {
/*  1384 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1385 */                     }
/*  1386 */                     $ret;
/*  1387 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl180, u);
/*  1388 */                     $blk = 1; /* allowing case fallthrough */
/*  1389 */                 case 1:
/*  1390 */                     /* --- function return or resume suspension --- */
/*  1391 */                     if ($ret && $ret.$isSuspension) {
/*  1392 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 25, 28);
/*  1393 */                     }
/*  1394 */                     var $call181 = $ret;
/*  1395 */                     //
/*  1396 */                     // line 25:
/*  1397 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1398 */                     //                             ^
/*  1399 */                     //
/*  1400 */                     $currLineNo = 25;
/*  1401 */                     $currColNo = 28;
/*  1402 */ 
/*  1403 */                     $ret;
/*  1404 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl179, $call181);
/*  1405 */                     $blk = 2; /* allowing case fallthrough */
/*  1406 */                 case 2:
/*  1407 */                     /* --- function return or resume suspension --- */
/*  1408 */                     if ($ret && $ret.$isSuspension) {
/*  1409 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 25, 11);
/*  1410 */                     }
/*  1411 */                     var $call182 = $ret;
/*  1412 */                     //
/*  1413 */                     // line 25:
/*  1414 */                     //     return eval_At_times_u (eval_A_times_u (u))
/*  1415 */                     //            ^
/*  1416 */                     //
/*  1417 */                     $currLineNo = 25;
/*  1418 */                     $currColNo = 11;
/*  1419 */ 
/*  1420 */                     return $call182;
/*  1421 */                     return Sk.builtin.none.none$;
/*  1422 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1423 */                 }
/*  1424 */             } catch (err) {
/*  1425 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1426 */                     err = new Sk.builtin.ExternalError(err);
/*  1427 */                 }
/*  1428 */                 err.traceback.push({
/*  1429 */                     lineno: $currLineNo,
/*  1430 */                     colno: $currColNo,
/*  1431 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1432 */                 });
/*  1433 */                 if ($exc.length > 0) {
/*  1434 */                     $err = err;
/*  1435 */                     $blk = $exc.pop();
/*  1436 */                     continue;
/*  1437 */                 } else {
/*  1438 */                     throw err;
/*  1439 */                 }
/*  1440 */             }
/*  1441 */         }
/*  1442 */     });
/*  1443 */     var $scope184 = (function $part_A_times_u185$(xxx_todo_changeme) {
/*  1444 */         var i, j, partial_sum, u, u_j; /* locals */
/*  1445 */         var i, i, j, j, partial_sum, partial_sum, partial_sum, partial_sum, u, u, u_j, u_j, xxx_todo_changeme, xxx_todo_changeme, $loadgbl187, $iter189, $loadgbl187, $call188, $iter189, $loadgbl192;
/*  1446 */         var $wakeFromSuspension = function() {
/*  1447 */             var susp = $scope184.$wakingSuspension;
/*  1448 */             delete $scope184.$wakingSuspension;
/*  1449 */             $blk = susp.$blk;
/*  1450 */             $loc = susp.$loc;
/*  1451 */             $gbl = susp.$gbl;
/*  1452 */             $exc = susp.$exc;
/*  1453 */             $err = susp.$err;
/*  1454 */             $postfinally = susp.$postfinally;
/*  1455 */             $currLineNo = susp.$lineno;
/*  1456 */             $currColNo = susp.$colno;
/*  1457 */             Sk.lastYield = Date.now();
/*  1458 */             i = susp.$tmps.i;
/*  1459 */             j = susp.$tmps.j;
/*  1460 */             partial_sum = susp.$tmps.partial_sum;
/*  1461 */             u = susp.$tmps.u;
/*  1462 */             u_j = susp.$tmps.u_j;
/*  1463 */             xxx_todo_changeme = susp.$tmps.xxx_todo_changeme;
/*  1464 */             $loadgbl187 = susp.$tmps.$loadgbl187;
/*  1465 */             $iter189 = susp.$tmps.$iter189;
/*  1466 */             $call188 = susp.$tmps.$call188;
/*  1467 */             $loadgbl192 = susp.$tmps.$loadgbl192;
/*  1468 */             try {
/*  1469 */                 $ret = susp.child.resume();
/*  1470 */             } catch (err) {
/*  1471 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1472 */                     err = new Sk.builtin.ExternalError(err);
/*  1473 */                 }
/*  1474 */                 err.traceback.push({
/*  1475 */                     lineno: $currLineNo,
/*  1476 */                     colno: $currColNo,
/*  1477 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1478 */                 });
/*  1479 */                 if ($exc.length > 0) {
/*  1480 */                     $err = err;
/*  1481 */                     $blk = $exc.pop();
/*  1482 */                 } else {
/*  1483 */                     throw err;
/*  1484 */                 }
/*  1485 */             }
/*  1486 */         };
/*  1487 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1488 */             var susp = new Sk.misceval.Suspension();
/*  1489 */             susp.child = $child;
/*  1490 */             susp.resume = function() {
/*  1491 */                 $scope184.$wakingSuspension = susp;
/*  1492 */                 return $scope184();
/*  1493 */             };
/*  1494 */             susp.data = susp.child.data;
/*  1495 */             susp.$blk = $blk;
/*  1496 */             susp.$loc = $loc;
/*  1497 */             susp.$gbl = $gbl;
/*  1498 */             susp.$exc = $exc;
/*  1499 */             susp.$err = $err;
/*  1500 */             susp.$postfinally = $postfinally;
/*  1501 */             susp.$filename = $filename;
/*  1502 */             susp.$lineno = $lineno;
/*  1503 */             susp.$colno = $colno;
/*  1504 */             susp.optional = susp.child.optional;
/*  1505 */             susp.$tmps = {
/*  1506 */                 "i": i,
/*  1507 */                 "j": j,
/*  1508 */                 "partial_sum": partial_sum,
/*  1509 */                 "u": u,
/*  1510 */                 "u_j": u_j,
/*  1511 */                 "xxx_todo_changeme": xxx_todo_changeme,
/*  1512 */                 "$loadgbl187": $loadgbl187,
/*  1513 */                 "$iter189": $iter189,
/*  1514 */                 "$call188": $call188,
/*  1515 */                 "$loadgbl192": $loadgbl192
/*  1516 */             };
/*  1517 */             return susp;
/*  1518 */         };
/*  1519 */         var $blk = 0,
/*  1520 */             $exc = [],
/*  1521 */             $loc = {},
/*  1522 */             $gbl = this,
/*  1523 */             $err = undefined,
/*  1524 */             $ret = undefined,
/*  1525 */             $postfinally = undefined,
/*  1526 */             $currLineNo = undefined,
/*  1527 */             $currColNo = undefined;
/*  1528 */         if (typeof Sk.execStart === 'undefined') {
/*  1529 */             Sk.execStart = Date.now()
/*  1530 */         }
/*  1531 */         if (typeof Sk.lastYield === 'undefined') {
/*  1532 */             Sk.lastYield = Date.now()
/*  1533 */         }
/*  1534 */         if ($scope184.$wakingSuspension !== undefined) {
/*  1535 */             $wakeFromSuspension();
/*  1536 */         } else {
/*  1537 */             Sk.builtin.pyCheckArgs("part_A_times_u", arguments, 1, 1, false, false);
/*  1538 */         }
/*  1539 */         while (true) {
/*  1540 */             try {
/*  1541 */                 var $dateNow = Date.now();
/*  1542 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1543 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1544 */                 }
/*  1545 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1546 */                     var $susp = $saveSuspension({
/*  1547 */                         data: {
/*  1548 */                             type: 'Sk.yield'
/*  1549 */                         },
/*  1550 */                         resume: function() {}
/*  1551 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*  1552 */                     $susp.$blk = $blk;
/*  1553 */                     $susp.optional = true;
/*  1554 */                     return $susp;
/*  1555 */                 }
/*  1556 */                 switch ($blk) {
/*  1557 */                 case 0:
/*  1558 */                     /* --- codeobj entry --- */
/*  1559 */                     if (xxx_todo_changeme === undefined) {
/*  1560 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme\' referenced before assignment');
/*  1561 */                     }
/*  1562 */ 
/*  1563 */                     //
/*  1564 */                     // line 28:
/*  1565 */                     //     (i,u) = xxx_todo_changeme
/*  1566 */                     //     ^
/*  1567 */                     //
/*  1568 */                     $currLineNo = 28;
/*  1569 */                     $currColNo = 4;
/*  1570 */ 
/*  1571 */                     if (xxx_todo_changeme === undefined) {
/*  1572 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme\' referenced before assignment');
/*  1573 */                     }
/*  1574 */                     var $items186 = Sk.abstr.sequenceUnpack(xxx_todo_changeme, 2);
/*  1575 */                     i = $items186[0];
/*  1576 */                     u = $items186[1];
/*  1577 */                     //
/*  1578 */                     // line 29:
/*  1579 */                     //     partial_sum = 0
/*  1580 */                     //     ^
/*  1581 */                     //
/*  1582 */                     $currLineNo = 29;
/*  1583 */                     $currColNo = 4;
/*  1584 */ 
/*  1585 */                     partial_sum = new Sk.builtin.int_(0);
/*  1586 */                     //
/*  1587 */                     // line 30:
/*  1588 */                     //     for j, u_j in enumerate(u):
/*  1589 */                     //     ^
/*  1590 */                     //
/*  1591 */                     $currLineNo = 30;
/*  1592 */                     $currColNo = 4;
/*  1593 */ 
/*  1594 */                     var $loadgbl187 = Sk.misceval.loadname('enumerate', $gbl);
/*  1595 */                     if (u === undefined) {
/*  1596 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1597 */                     }
/*  1598 */                     $ret;
/*  1599 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl187, u);
/*  1600 */                     $blk = 4; /* allowing case fallthrough */
/*  1601 */                 case 4:
/*  1602 */                     /* --- function return or resume suspension --- */
/*  1603 */                     if ($ret && $ret.$isSuspension) {
/*  1604 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 30, 18);
/*  1605 */                     }
/*  1606 */                     var $call188 = $ret;
/*  1607 */                     //
/*  1608 */                     // line 30:
/*  1609 */                     //     for j, u_j in enumerate(u):
/*  1610 */                     //                   ^
/*  1611 */                     //
/*  1612 */                     $currLineNo = 30;
/*  1613 */                     $currColNo = 18;
/*  1614 */ 
/*  1615 */                     var $iter189 = Sk.abstr.iter($call188);
/*  1616 */                     $blk = 1; /* allowing case fallthrough */
/*  1617 */                 case 1:
/*  1618 */                     /* --- for start --- */
/*  1619 */                     $ret = Sk.abstr.iternext($iter189, true);
/*  1620 */                     $blk = 5; /* allowing case fallthrough */
/*  1621 */                 case 5:
/*  1622 */                     /* --- function return or resume suspension --- */
/*  1623 */                     if ($ret && $ret.$isSuspension) {
/*  1624 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 30, 4);
/*  1625 */                     }
/*  1626 */                     var $next190 = $ret;
/*  1627 */                     if ($next190 === undefined) {
/*  1628 */                         $blk = 2;
/*  1629 */                         continue;
/*  1630 */                     }
/*  1631 */                     var $items191 = Sk.abstr.sequenceUnpack($next190, 2);
/*  1632 */                     j = $items191[0];
/*  1633 */                     u_j = $items191[1];
/*  1634 */                     //
/*  1635 */                     // line 31:
/*  1636 */                     //         partial_sum += eval_A (i, j) * u_j
/*  1637 */                     //         ^
/*  1638 */                     //
/*  1639 */                     $currLineNo = 31;
/*  1640 */                     $currColNo = 8;
/*  1641 */ 
/*  1642 */                     if (partial_sum === undefined) {
/*  1643 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1644 */                     }
/*  1645 */                     var $loadgbl192 = Sk.misceval.loadname('eval_A', $gbl);
/*  1646 */                     if (i === undefined) {
/*  1647 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1648 */                     }
/*  1649 */                     if (j === undefined) {
/*  1650 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*  1651 */                     }
/*  1652 */                     $ret;
/*  1653 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl192, i, j);
/*  1654 */                     $blk = 6; /* allowing case fallthrough */
/*  1655 */                 case 6:
/*  1656 */                     /* --- function return or resume suspension --- */
/*  1657 */                     if ($ret && $ret.$isSuspension) {
/*  1658 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 31, 23);
/*  1659 */                     }
/*  1660 */                     var $call193 = $ret;
/*  1661 */                     //
/*  1662 */                     // line 31:
/*  1663 */                     //         partial_sum += eval_A (i, j) * u_j
/*  1664 */                     //                        ^
/*  1665 */                     //
/*  1666 */                     $currLineNo = 31;
/*  1667 */                     $currColNo = 23;
/*  1668 */ 
/*  1669 */                     if (u_j === undefined) {
/*  1670 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u_j\' referenced before assignment');
/*  1671 */                     }
/*  1672 */                     var $binop194 = Sk.abstr.numberBinOp($call193, u_j, 'Mult');
/*  1673 */                     var $inplbinop195 = Sk.abstr.numberInplaceBinOp(partial_sum, $binop194, 'Add');
/*  1674 */                     partial_sum = $inplbinop195;
/*  1675 */                     $blk = 1; /* jump */
/*  1676 */                     continue;
/*  1677 */                 case 2:
/*  1678 */                     /* --- for cleanup --- */
/*  1679 */                     $blk = 3; /* allowing case fallthrough */
/*  1680 */                 case 3:
/*  1681 */                     /* --- for end --- */
/*  1682 */                     //
/*  1683 */                     // line 32:
/*  1684 */                     //     return partial_sum
/*  1685 */                     //     ^
/*  1686 */                     //
/*  1687 */                     $currLineNo = 32;
/*  1688 */                     $currColNo = 4;
/*  1689 */ 
/*  1690 */                     if (partial_sum === undefined) {
/*  1691 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1692 */                     }
/*  1693 */                     return partial_sum;
/*  1694 */                     return Sk.builtin.none.none$;
/*  1695 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1696 */                 }
/*  1697 */             } catch (err) {
/*  1698 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1699 */                     err = new Sk.builtin.ExternalError(err);
/*  1700 */                 }
/*  1701 */                 err.traceback.push({
/*  1702 */                     lineno: $currLineNo,
/*  1703 */                     colno: $currColNo,
/*  1704 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1705 */                 });
/*  1706 */                 if ($exc.length > 0) {
/*  1707 */                     $err = err;
/*  1708 */                     $blk = $exc.pop();
/*  1709 */                     continue;
/*  1710 */                 } else {
/*  1711 */                     throw err;
/*  1712 */                 }
/*  1713 */             }
/*  1714 */         }
/*  1715 */     });
/*  1716 */     var $scope197 = (function $part_At_times_u198$(xxx_todo_changeme1) {
/*  1717 */         var i, j, partial_sum, u, u_j; /* locals */
/*  1718 */         var i, i, j, j, partial_sum, partial_sum, partial_sum, partial_sum, u, u, u_j, u_j, xxx_todo_changeme1, xxx_todo_changeme1, $loadgbl200, $iter202, $loadgbl200, $call201, $iter202, $loadgbl205;
/*  1719 */         var $wakeFromSuspension = function() {
/*  1720 */             var susp = $scope197.$wakingSuspension;
/*  1721 */             delete $scope197.$wakingSuspension;
/*  1722 */             $blk = susp.$blk;
/*  1723 */             $loc = susp.$loc;
/*  1724 */             $gbl = susp.$gbl;
/*  1725 */             $exc = susp.$exc;
/*  1726 */             $err = susp.$err;
/*  1727 */             $postfinally = susp.$postfinally;
/*  1728 */             $currLineNo = susp.$lineno;
/*  1729 */             $currColNo = susp.$colno;
/*  1730 */             Sk.lastYield = Date.now();
/*  1731 */             i = susp.$tmps.i;
/*  1732 */             j = susp.$tmps.j;
/*  1733 */             partial_sum = susp.$tmps.partial_sum;
/*  1734 */             u = susp.$tmps.u;
/*  1735 */             u_j = susp.$tmps.u_j;
/*  1736 */             xxx_todo_changeme1 = susp.$tmps.xxx_todo_changeme1;
/*  1737 */             $loadgbl200 = susp.$tmps.$loadgbl200;
/*  1738 */             $iter202 = susp.$tmps.$iter202;
/*  1739 */             $call201 = susp.$tmps.$call201;
/*  1740 */             $loadgbl205 = susp.$tmps.$loadgbl205;
/*  1741 */             try {
/*  1742 */                 $ret = susp.child.resume();
/*  1743 */             } catch (err) {
/*  1744 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1745 */                     err = new Sk.builtin.ExternalError(err);
/*  1746 */                 }
/*  1747 */                 err.traceback.push({
/*  1748 */                     lineno: $currLineNo,
/*  1749 */                     colno: $currColNo,
/*  1750 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1751 */                 });
/*  1752 */                 if ($exc.length > 0) {
/*  1753 */                     $err = err;
/*  1754 */                     $blk = $exc.pop();
/*  1755 */                 } else {
/*  1756 */                     throw err;
/*  1757 */                 }
/*  1758 */             }
/*  1759 */         };
/*  1760 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1761 */             var susp = new Sk.misceval.Suspension();
/*  1762 */             susp.child = $child;
/*  1763 */             susp.resume = function() {
/*  1764 */                 $scope197.$wakingSuspension = susp;
/*  1765 */                 return $scope197();
/*  1766 */             };
/*  1767 */             susp.data = susp.child.data;
/*  1768 */             susp.$blk = $blk;
/*  1769 */             susp.$loc = $loc;
/*  1770 */             susp.$gbl = $gbl;
/*  1771 */             susp.$exc = $exc;
/*  1772 */             susp.$err = $err;
/*  1773 */             susp.$postfinally = $postfinally;
/*  1774 */             susp.$filename = $filename;
/*  1775 */             susp.$lineno = $lineno;
/*  1776 */             susp.$colno = $colno;
/*  1777 */             susp.optional = susp.child.optional;
/*  1778 */             susp.$tmps = {
/*  1779 */                 "i": i,
/*  1780 */                 "j": j,
/*  1781 */                 "partial_sum": partial_sum,
/*  1782 */                 "u": u,
/*  1783 */                 "u_j": u_j,
/*  1784 */                 "xxx_todo_changeme1": xxx_todo_changeme1,
/*  1785 */                 "$loadgbl200": $loadgbl200,
/*  1786 */                 "$iter202": $iter202,
/*  1787 */                 "$call201": $call201,
/*  1788 */                 "$loadgbl205": $loadgbl205
/*  1789 */             };
/*  1790 */             return susp;
/*  1791 */         };
/*  1792 */         var $blk = 0,
/*  1793 */             $exc = [],
/*  1794 */             $loc = {},
/*  1795 */             $gbl = this,
/*  1796 */             $err = undefined,
/*  1797 */             $ret = undefined,
/*  1798 */             $postfinally = undefined,
/*  1799 */             $currLineNo = undefined,
/*  1800 */             $currColNo = undefined;
/*  1801 */         if (typeof Sk.execStart === 'undefined') {
/*  1802 */             Sk.execStart = Date.now()
/*  1803 */         }
/*  1804 */         if (typeof Sk.lastYield === 'undefined') {
/*  1805 */             Sk.lastYield = Date.now()
/*  1806 */         }
/*  1807 */         if ($scope197.$wakingSuspension !== undefined) {
/*  1808 */             $wakeFromSuspension();
/*  1809 */         } else {
/*  1810 */             Sk.builtin.pyCheckArgs("part_At_times_u", arguments, 1, 1, false, false);
/*  1811 */         }
/*  1812 */         while (true) {
/*  1813 */             try {
/*  1814 */                 var $dateNow = Date.now();
/*  1815 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1816 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1817 */                 }
/*  1818 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1819 */                     var $susp = $saveSuspension({
/*  1820 */                         data: {
/*  1821 */                             type: 'Sk.yield'
/*  1822 */                         },
/*  1823 */                         resume: function() {}
/*  1824 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*  1825 */                     $susp.$blk = $blk;
/*  1826 */                     $susp.optional = true;
/*  1827 */                     return $susp;
/*  1828 */                 }
/*  1829 */                 switch ($blk) {
/*  1830 */                 case 0:
/*  1831 */                     /* --- codeobj entry --- */
/*  1832 */                     if (xxx_todo_changeme1 === undefined) {
/*  1833 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme1\' referenced before assignment');
/*  1834 */                     }
/*  1835 */ 
/*  1836 */                     //
/*  1837 */                     // line 35:
/*  1838 */                     //     (i,u) = xxx_todo_changeme1
/*  1839 */                     //     ^
/*  1840 */                     //
/*  1841 */                     $currLineNo = 35;
/*  1842 */                     $currColNo = 4;
/*  1843 */ 
/*  1844 */                     if (xxx_todo_changeme1 === undefined) {
/*  1845 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xxx_todo_changeme1\' referenced before assignment');
/*  1846 */                     }
/*  1847 */                     var $items199 = Sk.abstr.sequenceUnpack(xxx_todo_changeme1, 2);
/*  1848 */                     i = $items199[0];
/*  1849 */                     u = $items199[1];
/*  1850 */                     //
/*  1851 */                     // line 36:
/*  1852 */                     //     partial_sum = 0
/*  1853 */                     //     ^
/*  1854 */                     //
/*  1855 */                     $currLineNo = 36;
/*  1856 */                     $currColNo = 4;
/*  1857 */ 
/*  1858 */                     partial_sum = new Sk.builtin.int_(0);
/*  1859 */                     //
/*  1860 */                     // line 37:
/*  1861 */                     //     for j, u_j in enumerate(u):
/*  1862 */                     //     ^
/*  1863 */                     //
/*  1864 */                     $currLineNo = 37;
/*  1865 */                     $currColNo = 4;
/*  1866 */ 
/*  1867 */                     var $loadgbl200 = Sk.misceval.loadname('enumerate', $gbl);
/*  1868 */                     if (u === undefined) {
/*  1869 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  1870 */                     }
/*  1871 */                     $ret;
/*  1872 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl200, u);
/*  1873 */                     $blk = 4; /* allowing case fallthrough */
/*  1874 */                 case 4:
/*  1875 */                     /* --- function return or resume suspension --- */
/*  1876 */                     if ($ret && $ret.$isSuspension) {
/*  1877 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 37, 18);
/*  1878 */                     }
/*  1879 */                     var $call201 = $ret;
/*  1880 */                     //
/*  1881 */                     // line 37:
/*  1882 */                     //     for j, u_j in enumerate(u):
/*  1883 */                     //                   ^
/*  1884 */                     //
/*  1885 */                     $currLineNo = 37;
/*  1886 */                     $currColNo = 18;
/*  1887 */ 
/*  1888 */                     var $iter202 = Sk.abstr.iter($call201);
/*  1889 */                     $blk = 1; /* allowing case fallthrough */
/*  1890 */                 case 1:
/*  1891 */                     /* --- for start --- */
/*  1892 */                     $ret = Sk.abstr.iternext($iter202, true);
/*  1893 */                     $blk = 5; /* allowing case fallthrough */
/*  1894 */                 case 5:
/*  1895 */                     /* --- function return or resume suspension --- */
/*  1896 */                     if ($ret && $ret.$isSuspension) {
/*  1897 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 37, 4);
/*  1898 */                     }
/*  1899 */                     var $next203 = $ret;
/*  1900 */                     if ($next203 === undefined) {
/*  1901 */                         $blk = 2;
/*  1902 */                         continue;
/*  1903 */                     }
/*  1904 */                     var $items204 = Sk.abstr.sequenceUnpack($next203, 2);
/*  1905 */                     j = $items204[0];
/*  1906 */                     u_j = $items204[1];
/*  1907 */                     //
/*  1908 */                     // line 38:
/*  1909 */                     //         partial_sum += eval_A (j, i) * u_j
/*  1910 */                     //         ^
/*  1911 */                     //
/*  1912 */                     $currLineNo = 38;
/*  1913 */                     $currColNo = 8;
/*  1914 */ 
/*  1915 */                     if (partial_sum === undefined) {
/*  1916 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1917 */                     }
/*  1918 */                     var $loadgbl205 = Sk.misceval.loadname('eval_A', $gbl);
/*  1919 */                     if (j === undefined) {
/*  1920 */                         throw new Sk.builtin.UnboundLocalError('local variable \'j\' referenced before assignment');
/*  1921 */                     }
/*  1922 */                     if (i === undefined) {
/*  1923 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1924 */                     }
/*  1925 */                     $ret;
/*  1926 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl205, j, i);
/*  1927 */                     $blk = 6; /* allowing case fallthrough */
/*  1928 */                 case 6:
/*  1929 */                     /* --- function return or resume suspension --- */
/*  1930 */                     if ($ret && $ret.$isSuspension) {
/*  1931 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 38, 23);
/*  1932 */                     }
/*  1933 */                     var $call206 = $ret;
/*  1934 */                     //
/*  1935 */                     // line 38:
/*  1936 */                     //         partial_sum += eval_A (j, i) * u_j
/*  1937 */                     //                        ^
/*  1938 */                     //
/*  1939 */                     $currLineNo = 38;
/*  1940 */                     $currColNo = 23;
/*  1941 */ 
/*  1942 */                     if (u_j === undefined) {
/*  1943 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u_j\' referenced before assignment');
/*  1944 */                     }
/*  1945 */                     var $binop207 = Sk.abstr.numberBinOp($call206, u_j, 'Mult');
/*  1946 */                     var $inplbinop208 = Sk.abstr.numberInplaceBinOp(partial_sum, $binop207, 'Add');
/*  1947 */                     partial_sum = $inplbinop208;
/*  1948 */                     $blk = 1; /* jump */
/*  1949 */                     continue;
/*  1950 */                 case 2:
/*  1951 */                     /* --- for cleanup --- */
/*  1952 */                     $blk = 3; /* allowing case fallthrough */
/*  1953 */                 case 3:
/*  1954 */                     /* --- for end --- */
/*  1955 */                     //
/*  1956 */                     // line 39:
/*  1957 */                     //     return partial_sum
/*  1958 */                     //     ^
/*  1959 */                     //
/*  1960 */                     $currLineNo = 39;
/*  1961 */                     $currColNo = 4;
/*  1962 */ 
/*  1963 */                     if (partial_sum === undefined) {
/*  1964 */                         throw new Sk.builtin.UnboundLocalError('local variable \'partial_sum\' referenced before assignment');
/*  1965 */                     }
/*  1966 */                     return partial_sum;
/*  1967 */                     return Sk.builtin.none.none$;
/*  1968 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1969 */                 }
/*  1970 */             } catch (err) {
/*  1971 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1972 */                     err = new Sk.builtin.ExternalError(err);
/*  1973 */                 }
/*  1974 */                 err.traceback.push({
/*  1975 */                     lineno: $currLineNo,
/*  1976 */                     colno: $currColNo,
/*  1977 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  1978 */                 });
/*  1979 */                 if ($exc.length > 0) {
/*  1980 */                     $err = err;
/*  1981 */                     $blk = $exc.pop();
/*  1982 */                     continue;
/*  1983 */                 } else {
/*  1984 */                     throw err;
/*  1985 */                 }
/*  1986 */             }
/*  1987 */         }
/*  1988 */     });
/*  1989 */     var $scope210 = (function $main211$(n) {
/*  1990 */         var dummy, i, t0, times, tk, u, ue, v, vBv, ve, vv; /* locals */
/*  1991 */         var dummy, i, n, n, t0, t0, times, times, times, tk, tk, u, u, u, u, ue, ue, v, v, v, vBv, vBv, vBv, ve, ve, ve, ve, vv, vv, vv, $loadgbl213, $iter215, $loadgbl213, $call214, $iter215, $loadgbl217, $loadgbl217, $lattr218, $loadgbl224, $iter226, $loadgbl224, $call225, $iter226, $loadgbl228, $loadgbl230, $loadgbl232, $iter234, $loadgbl232, $call233, $iter234, $loadgbl241, $loadgbl241, $lattr242, $lattr244, $binop245;
/*  1992 */         var $wakeFromSuspension = function() {
/*  1993 */             var susp = $scope210.$wakingSuspension;
/*  1994 */             delete $scope210.$wakingSuspension;
/*  1995 */             $blk = susp.$blk;
/*  1996 */             $loc = susp.$loc;
/*  1997 */             $gbl = susp.$gbl;
/*  1998 */             $exc = susp.$exc;
/*  1999 */             $err = susp.$err;
/*  2000 */             $postfinally = susp.$postfinally;
/*  2001 */             $currLineNo = susp.$lineno;
/*  2002 */             $currColNo = susp.$colno;
/*  2003 */             Sk.lastYield = Date.now();
/*  2004 */             dummy = susp.$tmps.dummy;
/*  2005 */             i = susp.$tmps.i;
/*  2006 */             n = susp.$tmps.n;
/*  2007 */             t0 = susp.$tmps.t0;
/*  2008 */             times = susp.$tmps.times;
/*  2009 */             tk = susp.$tmps.tk;
/*  2010 */             u = susp.$tmps.u;
/*  2011 */             ue = susp.$tmps.ue;
/*  2012 */             v = susp.$tmps.v;
/*  2013 */             vBv = susp.$tmps.vBv;
/*  2014 */             ve = susp.$tmps.ve;
/*  2015 */             vv = susp.$tmps.vv;
/*  2016 */             $loadgbl213 = susp.$tmps.$loadgbl213;
/*  2017 */             $iter215 = susp.$tmps.$iter215;
/*  2018 */             $call214 = susp.$tmps.$call214;
/*  2019 */             $loadgbl217 = susp.$tmps.$loadgbl217;
/*  2020 */             $lattr218 = susp.$tmps.$lattr218;
/*  2021 */             $loadgbl224 = susp.$tmps.$loadgbl224;
/*  2022 */             $iter226 = susp.$tmps.$iter226;
/*  2023 */             $call225 = susp.$tmps.$call225;
/*  2024 */             $loadgbl228 = susp.$tmps.$loadgbl228;
/*  2025 */             $loadgbl230 = susp.$tmps.$loadgbl230;
/*  2026 */             $loadgbl232 = susp.$tmps.$loadgbl232;
/*  2027 */             $iter234 = susp.$tmps.$iter234;
/*  2028 */             $call233 = susp.$tmps.$call233;
/*  2029 */             $loadgbl241 = susp.$tmps.$loadgbl241;
/*  2030 */             $lattr242 = susp.$tmps.$lattr242;
/*  2031 */             $lattr244 = susp.$tmps.$lattr244;
/*  2032 */             $binop245 = susp.$tmps.$binop245;
/*  2033 */             try {
/*  2034 */                 $ret = susp.child.resume();
/*  2035 */             } catch (err) {
/*  2036 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2037 */                     err = new Sk.builtin.ExternalError(err);
/*  2038 */                 }
/*  2039 */                 err.traceback.push({
/*  2040 */                     lineno: $currLineNo,
/*  2041 */                     colno: $currColNo,
/*  2042 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  2043 */                 });
/*  2044 */                 if ($exc.length > 0) {
/*  2045 */                     $err = err;
/*  2046 */                     $blk = $exc.pop();
/*  2047 */                 } else {
/*  2048 */                     throw err;
/*  2049 */                 }
/*  2050 */             }
/*  2051 */         };
/*  2052 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2053 */             var susp = new Sk.misceval.Suspension();
/*  2054 */             susp.child = $child;
/*  2055 */             susp.resume = function() {
/*  2056 */                 $scope210.$wakingSuspension = susp;
/*  2057 */                 return $scope210();
/*  2058 */             };
/*  2059 */             susp.data = susp.child.data;
/*  2060 */             susp.$blk = $blk;
/*  2061 */             susp.$loc = $loc;
/*  2062 */             susp.$gbl = $gbl;
/*  2063 */             susp.$exc = $exc;
/*  2064 */             susp.$err = $err;
/*  2065 */             susp.$postfinally = $postfinally;
/*  2066 */             susp.$filename = $filename;
/*  2067 */             susp.$lineno = $lineno;
/*  2068 */             susp.$colno = $colno;
/*  2069 */             susp.optional = susp.child.optional;
/*  2070 */             susp.$tmps = {
/*  2071 */                 "dummy": dummy,
/*  2072 */                 "i": i,
/*  2073 */                 "n": n,
/*  2074 */                 "t0": t0,
/*  2075 */                 "times": times,
/*  2076 */                 "tk": tk,
/*  2077 */                 "u": u,
/*  2078 */                 "ue": ue,
/*  2079 */                 "v": v,
/*  2080 */                 "vBv": vBv,
/*  2081 */                 "ve": ve,
/*  2082 */                 "vv": vv,
/*  2083 */                 "$loadgbl213": $loadgbl213,
/*  2084 */                 "$iter215": $iter215,
/*  2085 */                 "$call214": $call214,
/*  2086 */                 "$loadgbl217": $loadgbl217,
/*  2087 */                 "$lattr218": $lattr218,
/*  2088 */                 "$loadgbl224": $loadgbl224,
/*  2089 */                 "$iter226": $iter226,
/*  2090 */                 "$call225": $call225,
/*  2091 */                 "$loadgbl228": $loadgbl228,
/*  2092 */                 "$loadgbl230": $loadgbl230,
/*  2093 */                 "$loadgbl232": $loadgbl232,
/*  2094 */                 "$iter234": $iter234,
/*  2095 */                 "$call233": $call233,
/*  2096 */                 "$loadgbl241": $loadgbl241,
/*  2097 */                 "$lattr242": $lattr242,
/*  2098 */                 "$lattr244": $lattr244,
/*  2099 */                 "$binop245": $binop245
/*  2100 */             };
/*  2101 */             return susp;
/*  2102 */         };
/*  2103 */         var $blk = 0,
/*  2104 */             $exc = [],
/*  2105 */             $loc = {},
/*  2106 */             $gbl = this,
/*  2107 */             $err = undefined,
/*  2108 */             $ret = undefined,
/*  2109 */             $postfinally = undefined,
/*  2110 */             $currLineNo = undefined,
/*  2111 */             $currColNo = undefined;
/*  2112 */         if (typeof Sk.execStart === 'undefined') {
/*  2113 */             Sk.execStart = Date.now()
/*  2114 */         }
/*  2115 */         if (typeof Sk.lastYield === 'undefined') {
/*  2116 */             Sk.lastYield = Date.now()
/*  2117 */         }
/*  2118 */         if ($scope210.$wakingSuspension !== undefined) {
/*  2119 */             $wakeFromSuspension();
/*  2120 */         } else {
/*  2121 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 1, false, false);
/*  2122 */         }
/*  2123 */         while (true) {
/*  2124 */             try {
/*  2125 */                 var $dateNow = Date.now();
/*  2126 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2127 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2128 */                 }
/*  2129 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2130 */                     var $susp = $saveSuspension({
/*  2131 */                         data: {
/*  2132 */                             type: 'Sk.yield'
/*  2133 */                         },
/*  2134 */                         resume: function() {}
/*  2135 */                     }, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', $currLineNo, $currColNo);
/*  2136 */                     $susp.$blk = $blk;
/*  2137 */                     $susp.optional = true;
/*  2138 */                     return $susp;
/*  2139 */                 }
/*  2140 */                 switch ($blk) {
/*  2141 */                 case 0:
/*  2142 */                     /* --- codeobj entry --- */
/*  2143 */                     if (n === undefined) {
/*  2144 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2145 */                     }
/*  2146 */ 
/*  2147 */                     //
/*  2148 */                     // line 44:
/*  2149 */                     //     times = []
/*  2150 */                     //     ^
/*  2151 */                     //
/*  2152 */                     $currLineNo = 44;
/*  2153 */                     $currColNo = 4;
/*  2154 */ 
/*  2155 */                     var $loadlist212 = new Sk.builtins['list']([]);
/*  2156 */                     times = $loadlist212;
/*  2157 */                     //
/*  2158 */                     // line 45:
/*  2159 */                     //     for i in range(n):
/*  2160 */                     //     ^
/*  2161 */                     //
/*  2162 */                     $currLineNo = 45;
/*  2163 */                     $currColNo = 4;
/*  2164 */ 
/*  2165 */                     var $loadgbl213 = Sk.misceval.loadname('range', $gbl);
/*  2166 */                     if (n === undefined) {
/*  2167 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2168 */                     }
/*  2169 */                     $ret;
/*  2170 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl213, n);
/*  2171 */                     $blk = 4; /* allowing case fallthrough */
/*  2172 */                 case 4:
/*  2173 */                     /* --- function return or resume suspension --- */
/*  2174 */                     if ($ret && $ret.$isSuspension) {
/*  2175 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 45, 13);
/*  2176 */                     }
/*  2177 */                     var $call214 = $ret;
/*  2178 */                     //
/*  2179 */                     // line 45:
/*  2180 */                     //     for i in range(n):
/*  2181 */                     //              ^
/*  2182 */                     //
/*  2183 */                     $currLineNo = 45;
/*  2184 */                     $currColNo = 13;
/*  2185 */ 
/*  2186 */                     var $iter215 = Sk.abstr.iter($call214);
/*  2187 */                     $blk = 1; /* allowing case fallthrough */
/*  2188 */                 case 1:
/*  2189 */                     /* --- for start --- */
/*  2190 */                     $ret = Sk.abstr.iternext($iter215, true);
/*  2191 */                     $blk = 5; /* allowing case fallthrough */
/*  2192 */                 case 5:
/*  2193 */                     /* --- function return or resume suspension --- */
/*  2194 */                     if ($ret && $ret.$isSuspension) {
/*  2195 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 45, 4);
/*  2196 */                     }
/*  2197 */                     var $next216 = $ret;
/*  2198 */                     if ($next216 === undefined) {
/*  2199 */                         $blk = 2;
/*  2200 */                         continue;
/*  2201 */                     }
/*  2202 */                     i = $next216;
/*  2203 */                     //
/*  2204 */                     // line 46:
/*  2205 */                     //         t0 = time.time()
/*  2206 */                     //         ^
/*  2207 */                     //
/*  2208 */                     $currLineNo = 46;
/*  2209 */                     $currColNo = 8;
/*  2210 */ 
/*  2211 */                     var $loadgbl217 = Sk.misceval.loadname('time', $gbl);
/*  2212 */                     $ret = Sk.abstr.gattr($loadgbl217, 'time', true);
/*  2213 */                     $blk = 6; /* allowing case fallthrough */
/*  2214 */                 case 6:
/*  2215 */                     /* --- function return or resume suspension --- */
/*  2216 */                     if ($ret && $ret.$isSuspension) {
/*  2217 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 46, 13);
/*  2218 */                     }
/*  2219 */                     var $lattr218 = $ret;
/*  2220 */                     $ret;
/*  2221 */                     $ret = Sk.misceval.callsimOrSuspend($lattr218);
/*  2222 */                     $blk = 7; /* allowing case fallthrough */
/*  2223 */                 case 7:
/*  2224 */                     /* --- function return or resume suspension --- */
/*  2225 */                     if ($ret && $ret.$isSuspension) {
/*  2226 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 46, 13);
/*  2227 */                     }
/*  2228 */                     var $call219 = $ret;
/*  2229 */                     //
/*  2230 */                     // line 46:
/*  2231 */                     //         t0 = time.time()
/*  2232 */                     //              ^
/*  2233 */                     //
/*  2234 */                     $currLineNo = 46;
/*  2235 */                     $currColNo = 13;
/*  2236 */ 
/*  2237 */                     t0 = $call219;
/*  2238 */                     //
/*  2239 */                     // line 47:
/*  2240 */                     //         u = [1] * DEFAULT_N
/*  2241 */                     //         ^
/*  2242 */                     //
/*  2243 */                     $currLineNo = 47;
/*  2244 */                     $currColNo = 8;
/*  2245 */ 
/*  2246 */                     var $elem220 = new Sk.builtin.int_(1);
/*  2247 */                     var $loadlist221 = new Sk.builtins['list']([$elem220]);
/*  2248 */                     var $loadgbl222 = Sk.misceval.loadname('DEFAULT_N', $gbl);
/*  2249 */                     var $binop223 = Sk.abstr.numberBinOp($loadlist221, $loadgbl222, 'Mult');
/*  2250 */                     u = $binop223;
/*  2251 */                     //
/*  2252 */                     // line 49:
/*  2253 */                     //         for dummy in range (10):
/*  2254 */                     //         ^
/*  2255 */                     //
/*  2256 */                     $currLineNo = 49;
/*  2257 */                     $currColNo = 8;
/*  2258 */ 
/*  2259 */                     var $loadgbl224 = Sk.misceval.loadname('range', $gbl);
/*  2260 */                     $ret;
/*  2261 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl224, new Sk.builtin.int_(10));
/*  2262 */                     $blk = 11; /* allowing case fallthrough */
/*  2263 */                 case 11:
/*  2264 */                     /* --- function return or resume suspension --- */
/*  2265 */                     if ($ret && $ret.$isSuspension) {
/*  2266 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 49, 21);
/*  2267 */                     }
/*  2268 */                     var $call225 = $ret;
/*  2269 */                     //
/*  2270 */                     // line 49:
/*  2271 */                     //         for dummy in range (10):
/*  2272 */                     //                      ^
/*  2273 */                     //
/*  2274 */                     $currLineNo = 49;
/*  2275 */                     $currColNo = 21;
/*  2276 */ 
/*  2277 */                     var $iter226 = Sk.abstr.iter($call225);
/*  2278 */                     $blk = 8; /* allowing case fallthrough */
/*  2279 */                 case 8:
/*  2280 */                     /* --- for start --- */
/*  2281 */                     $ret = Sk.abstr.iternext($iter226, true);
/*  2282 */                     $blk = 12; /* allowing case fallthrough */
/*  2283 */                 case 12:
/*  2284 */                     /* --- function return or resume suspension --- */
/*  2285 */                     if ($ret && $ret.$isSuspension) {
/*  2286 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 49, 8);
/*  2287 */                     }
/*  2288 */                     var $next227 = $ret;
/*  2289 */                     if ($next227 === undefined) {
/*  2290 */                         $blk = 9;
/*  2291 */                         continue;
/*  2292 */                     }
/*  2293 */                     dummy = $next227;
/*  2294 */                     //
/*  2295 */                     // line 50:
/*  2296 */                     //             v = eval_AtA_times_u (u)
/*  2297 */                     //             ^
/*  2298 */                     //
/*  2299 */                     $currLineNo = 50;
/*  2300 */                     $currColNo = 12;
/*  2301 */ 
/*  2302 */                     var $loadgbl228 = Sk.misceval.loadname('eval_AtA_times_u', $gbl);
/*  2303 */                     if (u === undefined) {
/*  2304 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  2305 */                     }
/*  2306 */                     $ret;
/*  2307 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl228, u);
/*  2308 */                     $blk = 13; /* allowing case fallthrough */
/*  2309 */                 case 13:
/*  2310 */                     /* --- function return or resume suspension --- */
/*  2311 */                     if ($ret && $ret.$isSuspension) {
/*  2312 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 50, 16);
/*  2313 */                     }
/*  2314 */                     var $call229 = $ret;
/*  2315 */                     //
/*  2316 */                     // line 50:
/*  2317 */                     //             v = eval_AtA_times_u (u)
/*  2318 */                     //                 ^
/*  2319 */                     //
/*  2320 */                     $currLineNo = 50;
/*  2321 */                     $currColNo = 16;
/*  2322 */ 
/*  2323 */                     v = $call229;
/*  2324 */                     //
/*  2325 */                     // line 51:
/*  2326 */                     //             u = eval_AtA_times_u (v)
/*  2327 */                     //             ^
/*  2328 */                     //
/*  2329 */                     $currLineNo = 51;
/*  2330 */                     $currColNo = 12;
/*  2331 */ 
/*  2332 */                     var $loadgbl230 = Sk.misceval.loadname('eval_AtA_times_u', $gbl);
/*  2333 */                     if (v === undefined) {
/*  2334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2335 */                     }
/*  2336 */                     $ret;
/*  2337 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl230, v);
/*  2338 */                     $blk = 14; /* allowing case fallthrough */
/*  2339 */                 case 14:
/*  2340 */                     /* --- function return or resume suspension --- */
/*  2341 */                     if ($ret && $ret.$isSuspension) {
/*  2342 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 51, 16);
/*  2343 */                     }
/*  2344 */                     var $call231 = $ret;
/*  2345 */                     //
/*  2346 */                     // line 51:
/*  2347 */                     //             u = eval_AtA_times_u (v)
/*  2348 */                     //                 ^
/*  2349 */                     //
/*  2350 */                     $currLineNo = 51;
/*  2351 */                     $currColNo = 16;
/*  2352 */ 
/*  2353 */                     u = $call231;
/*  2354 */                     $blk = 8; /* jump */
/*  2355 */                     continue;
/*  2356 */                 case 2:
/*  2357 */                     /* --- for cleanup --- */
/*  2358 */                     $blk = 3; /* allowing case fallthrough */
/*  2359 */                 case 3:
/*  2360 */                     /* --- for end --- */
/*  2361 */                     //
/*  2362 */                     // line 60:
/*  2363 */                     //     return times
/*  2364 */                     //     ^
/*  2365 */                     //
/*  2366 */                     $currLineNo = 60;
/*  2367 */                     $currColNo = 4;
/*  2368 */ 
/*  2369 */                     if (times === undefined) {
/*  2370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2371 */                     }
/*  2372 */                     return times;
/*  2373 */                     return Sk.builtin.none.none$;
/*  2374 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2375 */                 case 9:
/*  2376 */                     /* --- for cleanup --- */
/*  2377 */                     $blk = 10; /* allowing case fallthrough */
/*  2378 */                 case 10:
/*  2379 */                     /* --- for end --- */
/*  2380 */                     //
/*  2381 */                     // line 53:
/*  2382 */                     //         vBv = vv = 0
/*  2383 */                     //         ^
/*  2384 */                     //
/*  2385 */                     $currLineNo = 53;
/*  2386 */                     $currColNo = 8;
/*  2387 */ 
/*  2388 */                     vBv = new Sk.builtin.int_(0);
/*  2389 */                     vv = new Sk.builtin.int_(0);
/*  2390 */                     //
/*  2391 */                     // line 55:
/*  2392 */                     //         for ue, ve in zip (u, v):
/*  2393 */                     //         ^
/*  2394 */                     //
/*  2395 */                     $currLineNo = 55;
/*  2396 */                     $currColNo = 8;
/*  2397 */ 
/*  2398 */                     var $loadgbl232 = Sk.misceval.loadname('zip', $gbl);
/*  2399 */                     if (u === undefined) {
/*  2400 */                         throw new Sk.builtin.UnboundLocalError('local variable \'u\' referenced before assignment');
/*  2401 */                     }
/*  2402 */                     if (v === undefined) {
/*  2403 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2404 */                     }
/*  2405 */                     $ret;
/*  2406 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl232, u, v);
/*  2407 */                     $blk = 18; /* allowing case fallthrough */
/*  2408 */                 case 18:
/*  2409 */                     /* --- function return or resume suspension --- */
/*  2410 */                     if ($ret && $ret.$isSuspension) {
/*  2411 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 55, 22);
/*  2412 */                     }
/*  2413 */                     var $call233 = $ret;
/*  2414 */                     //
/*  2415 */                     // line 55:
/*  2416 */                     //         for ue, ve in zip (u, v):
/*  2417 */                     //                       ^
/*  2418 */                     //
/*  2419 */                     $currLineNo = 55;
/*  2420 */                     $currColNo = 22;
/*  2421 */ 
/*  2422 */                     var $iter234 = Sk.abstr.iter($call233);
/*  2423 */                     $blk = 15; /* allowing case fallthrough */
/*  2424 */                 case 15:
/*  2425 */                     /* --- for start --- */
/*  2426 */                     $ret = Sk.abstr.iternext($iter234, true);
/*  2427 */                     $blk = 19; /* allowing case fallthrough */
/*  2428 */                 case 19:
/*  2429 */                     /* --- function return or resume suspension --- */
/*  2430 */                     if ($ret && $ret.$isSuspension) {
/*  2431 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 55, 8);
/*  2432 */                     }
/*  2433 */                     var $next235 = $ret;
/*  2434 */                     if ($next235 === undefined) {
/*  2435 */                         $blk = 16;
/*  2436 */                         continue;
/*  2437 */                     }
/*  2438 */                     var $items236 = Sk.abstr.sequenceUnpack($next235, 2);
/*  2439 */                     ue = $items236[0];
/*  2440 */                     ve = $items236[1];
/*  2441 */                     //
/*  2442 */                     // line 56:
/*  2443 */                     //             vBv += ue * ve
/*  2444 */                     //             ^
/*  2445 */                     //
/*  2446 */                     $currLineNo = 56;
/*  2447 */                     $currColNo = 12;
/*  2448 */ 
/*  2449 */                     if (vBv === undefined) {
/*  2450 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vBv\' referenced before assignment');
/*  2451 */                     }
/*  2452 */                     if (ue === undefined) {
/*  2453 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ue\' referenced before assignment');
/*  2454 */                     }
/*  2455 */                     if (ve === undefined) {
/*  2456 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2457 */                     }
/*  2458 */                     var $binop237 = Sk.abstr.numberBinOp(ue, ve, 'Mult');
/*  2459 */                     var $inplbinop238 = Sk.abstr.numberInplaceBinOp(vBv, $binop237, 'Add');
/*  2460 */                     vBv = $inplbinop238;
/*  2461 */                     //
/*  2462 */                     // line 57:
/*  2463 */                     //             vv  += ve * ve
/*  2464 */                     //             ^
/*  2465 */                     //
/*  2466 */                     $currLineNo = 57;
/*  2467 */                     $currColNo = 12;
/*  2468 */ 
/*  2469 */                     if (vv === undefined) {
/*  2470 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vv\' referenced before assignment');
/*  2471 */                     }
/*  2472 */                     if (ve === undefined) {
/*  2473 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2474 */                     }
/*  2475 */                     if (ve === undefined) {
/*  2476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ve\' referenced before assignment');
/*  2477 */                     }
/*  2478 */                     var $binop239 = Sk.abstr.numberBinOp(ve, ve, 'Mult');
/*  2479 */                     var $inplbinop240 = Sk.abstr.numberInplaceBinOp(vv, $binop239, 'Add');
/*  2480 */                     vv = $inplbinop240;
/*  2481 */                     $blk = 15; /* jump */
/*  2482 */                     continue;
/*  2483 */                 case 16:
/*  2484 */                     /* --- for cleanup --- */
/*  2485 */                     $blk = 17; /* allowing case fallthrough */
/*  2486 */                 case 17:
/*  2487 */                     /* --- for end --- */
/*  2488 */                     //
/*  2489 */                     // line 58:
/*  2490 */                     //         tk = time.time()
/*  2491 */                     //         ^
/*  2492 */                     //
/*  2493 */                     $currLineNo = 58;
/*  2494 */                     $currColNo = 8;
/*  2495 */ 
/*  2496 */                     var $loadgbl241 = Sk.misceval.loadname('time', $gbl);
/*  2497 */                     $ret = Sk.abstr.gattr($loadgbl241, 'time', true);
/*  2498 */                     $blk = 20; /* allowing case fallthrough */
/*  2499 */                 case 20:
/*  2500 */                     /* --- function return or resume suspension --- */
/*  2501 */                     if ($ret && $ret.$isSuspension) {
/*  2502 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 58, 13);
/*  2503 */                     }
/*  2504 */                     var $lattr242 = $ret;
/*  2505 */                     $ret;
/*  2506 */                     $ret = Sk.misceval.callsimOrSuspend($lattr242);
/*  2507 */                     $blk = 21; /* allowing case fallthrough */
/*  2508 */                 case 21:
/*  2509 */                     /* --- function return or resume suspension --- */
/*  2510 */                     if ($ret && $ret.$isSuspension) {
/*  2511 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 58, 13);
/*  2512 */                     }
/*  2513 */                     var $call243 = $ret;
/*  2514 */                     //
/*  2515 */                     // line 58:
/*  2516 */                     //         tk = time.time()
/*  2517 */                     //              ^
/*  2518 */                     //
/*  2519 */                     $currLineNo = 58;
/*  2520 */                     $currColNo = 13;
/*  2521 */ 
/*  2522 */                     tk = $call243;
/*  2523 */                     //
/*  2524 */                     // line 59:
/*  2525 */                     //         times.append(tk - t0)
/*  2526 */                     //         ^
/*  2527 */                     //
/*  2528 */                     $currLineNo = 59;
/*  2529 */                     $currColNo = 8;
/*  2530 */ 
/*  2531 */                     if (times === undefined) {
/*  2532 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2533 */                     }
/*  2534 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  2535 */                     $blk = 22; /* allowing case fallthrough */
/*  2536 */                 case 22:
/*  2537 */                     /* --- function return or resume suspension --- */
/*  2538 */                     if ($ret && $ret.$isSuspension) {
/*  2539 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 59, 8);
/*  2540 */                     }
/*  2541 */                     var $lattr244 = $ret;
/*  2542 */                     if (tk === undefined) {
/*  2543 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tk\' referenced before assignment');
/*  2544 */                     }
/*  2545 */                     if (t0 === undefined) {
/*  2546 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t0\' referenced before assignment');
/*  2547 */                     }
/*  2548 */                     var $binop245 = Sk.abstr.numberBinOp(tk, t0, 'Sub');
/*  2549 */                     $ret;
/*  2550 */                     $ret = Sk.misceval.callsimOrSuspend($lattr244, $binop245);
/*  2551 */                     $blk = 23; /* allowing case fallthrough */
/*  2552 */                 case 23:
/*  2553 */                     /* --- function return or resume suspension --- */
/*  2554 */                     if ($ret && $ret.$isSuspension) {
/*  2555 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py', 59, 8);
/*  2556 */                     }
/*  2557 */                     var $call246 = $ret;
/*  2558 */                     //
/*  2559 */                     // line 59:
/*  2560 */                     //         times.append(tk - t0)
/*  2561 */                     //         ^
/*  2562 */                     //
/*  2563 */                     $currLineNo = 59;
/*  2564 */                     $currColNo = 8;
/*  2565 */ 
/*  2566 */                     $blk = 1; /* jump */
/*  2567 */                     continue;
/*  2568 */                 }
/*  2569 */             } catch (err) {
/*  2570 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2571 */                     err = new Sk.builtin.ExternalError(err);
/*  2572 */                 }
/*  2573 */                 err.traceback.push({
/*  2574 */                     lineno: $currLineNo,
/*  2575 */                     colno: $currColNo,
/*  2576 */                     filename: '/home/sbaxter/benchmarks/skulpt/spectral_norm/main.py'
/*  2577 */                 });
/*  2578 */                 if ($exc.length > 0) {
/*  2579 */                     $err = err;
/*  2580 */                     $blk = $exc.pop();
/*  2581 */                     continue;
/*  2582 */                 } else {
/*  2583 */                     throw err;
/*  2584 */                 }
/*  2585 */             }
/*  2586 */         }
/*  2587 */     });
/*  2588 */     return $scope120;
/*  2589 */ }();
