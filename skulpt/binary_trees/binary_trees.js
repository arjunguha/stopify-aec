/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname255;
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
/*    16 */             $loadname255 = susp.$tmps.$loadname255;
/*    17 */             try {
/*    18 */                 $ret = susp.child.resume();
/*    19 */             } catch (err) {
/*    20 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    21 */                     err = new Sk.builtin.ExternalError(err);
/*    22 */                 }
/*    23 */                 err.traceback.push({
/*    24 */                     lineno: $currLineNo,
/*    25 */                     colno: $currColNo,
/*    26 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
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
/*    55 */                 "$loadname255": $loadname255
/*    56 */             };
/*    57 */             return susp;
/*    58 */         };
/*    59 */         var $gbl = {},
/*    60 */             $blk = 0,
/*    61 */             $exc = [],
/*    62 */             $loc = $gbl,
/*    63 */             $err = undefined;
/*    64 */         $gbl.__name__ = $modname;
/*    65 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/binary_trees/main.py');
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
/*   102 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*   103 */                     $susp.$blk = $blk;
/*   104 */                     $susp.optional = true;
/*   105 */                     return $susp;
/*   106 */                 }
/*   107 */                 switch ($blk) {
/*   108 */                 case 0:
/*   109 */                     /* --- module entry --- */
/*   110 */                     //
/*   111 */                     // line 8:
/*   112 */                     // def make_tree(i, d):
/*   113 */                     // ^
/*   114 */                     //
/*   115 */                     $currLineNo = 8;
/*   116 */                     $currColNo = 0;
/*   117 */ 
/*   118 */                     $scope121.co_name = new Sk.builtins['str']('make_tree');
/*   119 */                     $scope121.co_varnames = ['i', 'd'];
/*   120 */                     var $funcobj141 = new Sk.builtins['function']($scope121, $gbl);
/*   121 */                     $loc.make_tree = $funcobj141;
/*   122 */                     //
/*   123 */                     // line 17:
/*   124 */                     // def check_tree(node):
/*   125 */                     // ^
/*   126 */                     //
/*   127 */                     $currLineNo = 17;
/*   128 */                     $currColNo = 0;
/*   129 */ 
/*   130 */                     $scope142.co_name = new Sk.builtins['str']('check_tree');
/*   131 */                     $scope142.co_varnames = ['node'];
/*   132 */                     var $funcobj154 = new Sk.builtins['function']($scope142, $gbl);
/*   133 */                     $loc.check_tree = $funcobj154;
/*   134 */                     //
/*   135 */                     // line 26:
/*   136 */                     // def make_check(itde, make=make_tree, check=check_tree):
/*   137 */                     // ^
/*   138 */                     //
/*   139 */                     $currLineNo = 26;
/*   140 */                     $currColNo = 0;
/*   141 */ 
/*   142 */                     var $loadname155 = $loc.make_tree !== undefined ? $loc.make_tree : Sk.misceval.loadname('make_tree', $gbl);;
/*   143 */                     var $loadname156 = $loc.check_tree !== undefined ? $loc.check_tree : Sk.misceval.loadname('check_tree', $gbl);;
/*   144 */                     $scope157.co_name = new Sk.builtins['str']('make_check');
/*   145 */                     $scope157.$defaults = [$loadname155, $loadname156];
/*   146 */                     $scope157.co_varnames = ['itde', 'make', 'check'];
/*   147 */                     var $funcobj162 = new Sk.builtins['function']($scope157, $gbl);
/*   148 */                     $loc.make_check = $funcobj162;
/*   149 */                     //
/*   150 */                     // line 32:
/*   151 */                     // def get_argchunks(i, d, chunksize=5000):
/*   152 */                     // ^
/*   153 */                     //
/*   154 */                     $currLineNo = 32;
/*   155 */                     $currColNo = 0;
/*   156 */ 
/*   157 */                     $scope163.co_name = new Sk.builtins['str']('get_argchunks');
/*   158 */                     $scope163.$defaults = [new Sk.builtin.int_(5000)];
/*   159 */                     $scope163.co_varnames = ['i', 'd', 'chunksize'];
/*   160 */                     var $gener210 = new Sk.builtins['function']((function() {
/*   161 */                         var $origargs = Array.prototype.slice.call(arguments);
/*   162 */                         Sk.builtin.pyCheckArgs("get_argchunks", arguments, 2, 3);
/*   163 */                         return new Sk.builtins['generator']($scope163, $gbl, $origargs);
/*   164 */                     }));
/*   165 */                     $loc.get_argchunks = $gener210;
/*   166 */                     //
/*   167 */                     // line 45:
/*   168 */                     // def main(n, min_depth=4):
/*   169 */                     // ^
/*   170 */                     //
/*   171 */                     $currLineNo = 45;
/*   172 */                     $currColNo = 0;
/*   173 */ 
/*   174 */                     $scope211.co_name = new Sk.builtins['str']('main');
/*   175 */                     $scope211.$defaults = [new Sk.builtin.int_(4)];
/*   176 */                     $scope211.co_varnames = ['n', 'min_depth'];
/*   177 */                     var $funcobj254 = new Sk.builtins['function']($scope211, $gbl);
/*   178 */                     $loc.main = $funcobj254;
/*   179 */                     //
/*   180 */                     // line 65:
/*   181 */                     // main(12)
/*   182 */                     // ^
/*   183 */                     //
/*   184 */                     $currLineNo = 65;
/*   185 */                     $currColNo = 0;
/*   186 */ 
/*   187 */                     var $loadname255 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   188 */                     $ret;
/*   189 */                     $ret = Sk.misceval.callsimOrSuspend($loadname255, new Sk.builtin.int_(12));
/*   190 */                     $blk = 1; /* allowing case fallthrough */
/*   191 */                 case 1:
/*   192 */                     /* --- function return or resume suspension --- */
/*   193 */                     if ($ret && $ret.$isSuspension) {
/*   194 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 65, 0);
/*   195 */                     }
/*   196 */                     var $call256 = $ret;
/*   197 */                     //
/*   198 */                     // line 65:
/*   199 */                     // main(12)
/*   200 */                     // ^
/*   201 */                     //
/*   202 */                     $currLineNo = 65;
/*   203 */                     $currColNo = 0;
/*   204 */ 
/*   205 */                     return $loc;
/*   206 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   207 */                 }
/*   208 */             } catch (err) {
/*   209 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   210 */                     err = new Sk.builtin.ExternalError(err);
/*   211 */                 }
/*   212 */                 err.traceback.push({
/*   213 */                     lineno: $currLineNo,
/*   214 */                     colno: $currColNo,
/*   215 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   216 */                 });
/*   217 */                 if ($exc.length > 0) {
/*   218 */                     $err = err;
/*   219 */                     $blk = $exc.pop();
/*   220 */                     continue;
/*   221 */                 } else {
/*   222 */                     throw err;
/*   223 */                 }
/*   224 */             }
/*   225 */         }
/*   226 */     });
/*   227 */     var $scope121 = (function $make_tree122$(i, d) {
/*   228 */         var i2; /* locals */
/*   229 */         var d, d, d, d, d, d, i, i, i, i, i, i2, i2, i2, $compareres123, $elem128, $loadgbl129, $binop130, $elem128, $loadgbl129, $binop130, $call131, $elem132, $loadgbl133;
/*   230 */         var $wakeFromSuspension = function() {
/*   231 */             var susp = $scope121.$wakingSuspension;
/*   232 */             delete $scope121.$wakingSuspension;
/*   233 */             $blk = susp.$blk;
/*   234 */             $loc = susp.$loc;
/*   235 */             $gbl = susp.$gbl;
/*   236 */             $exc = susp.$exc;
/*   237 */             $err = susp.$err;
/*   238 */             $postfinally = susp.$postfinally;
/*   239 */             $currLineNo = susp.$lineno;
/*   240 */             $currColNo = susp.$colno;
/*   241 */             Sk.lastYield = Date.now();
/*   242 */             d = susp.$tmps.d;
/*   243 */             i = susp.$tmps.i;
/*   244 */             i2 = susp.$tmps.i2;
/*   245 */             $compareres123 = susp.$tmps.$compareres123;
/*   246 */             $elem128 = susp.$tmps.$elem128;
/*   247 */             $loadgbl129 = susp.$tmps.$loadgbl129;
/*   248 */             $binop130 = susp.$tmps.$binop130;
/*   249 */             $call131 = susp.$tmps.$call131;
/*   250 */             $elem132 = susp.$tmps.$elem132;
/*   251 */             $loadgbl133 = susp.$tmps.$loadgbl133;
/*   252 */             try {
/*   253 */                 $ret = susp.child.resume();
/*   254 */             } catch (err) {
/*   255 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   256 */                     err = new Sk.builtin.ExternalError(err);
/*   257 */                 }
/*   258 */                 err.traceback.push({
/*   259 */                     lineno: $currLineNo,
/*   260 */                     colno: $currColNo,
/*   261 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   262 */                 });
/*   263 */                 if ($exc.length > 0) {
/*   264 */                     $err = err;
/*   265 */                     $blk = $exc.pop();
/*   266 */                 } else {
/*   267 */                     throw err;
/*   268 */                 }
/*   269 */             }
/*   270 */         };
/*   271 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   272 */             var susp = new Sk.misceval.Suspension();
/*   273 */             susp.child = $child;
/*   274 */             susp.resume = function() {
/*   275 */                 $scope121.$wakingSuspension = susp;
/*   276 */                 return $scope121();
/*   277 */             };
/*   278 */             susp.data = susp.child.data;
/*   279 */             susp.$blk = $blk;
/*   280 */             susp.$loc = $loc;
/*   281 */             susp.$gbl = $gbl;
/*   282 */             susp.$exc = $exc;
/*   283 */             susp.$err = $err;
/*   284 */             susp.$postfinally = $postfinally;
/*   285 */             susp.$filename = $filename;
/*   286 */             susp.$lineno = $lineno;
/*   287 */             susp.$colno = $colno;
/*   288 */             susp.optional = susp.child.optional;
/*   289 */             susp.$tmps = {
/*   290 */                 "d": d,
/*   291 */                 "i": i,
/*   292 */                 "i2": i2,
/*   293 */                 "$compareres123": $compareres123,
/*   294 */                 "$elem128": $elem128,
/*   295 */                 "$loadgbl129": $loadgbl129,
/*   296 */                 "$binop130": $binop130,
/*   297 */                 "$call131": $call131,
/*   298 */                 "$elem132": $elem132,
/*   299 */                 "$loadgbl133": $loadgbl133
/*   300 */             };
/*   301 */             return susp;
/*   302 */         };
/*   303 */         var $blk = 0,
/*   304 */             $exc = [],
/*   305 */             $loc = {},
/*   306 */             $gbl = this,
/*   307 */             $err = undefined,
/*   308 */             $ret = undefined,
/*   309 */             $postfinally = undefined,
/*   310 */             $currLineNo = undefined,
/*   311 */             $currColNo = undefined;
/*   312 */         if (typeof Sk.execStart === 'undefined') {
/*   313 */             Sk.execStart = Date.now()
/*   314 */         }
/*   315 */         if (typeof Sk.lastYield === 'undefined') {
/*   316 */             Sk.lastYield = Date.now()
/*   317 */         }
/*   318 */         if ($scope121.$wakingSuspension !== undefined) {
/*   319 */             $wakeFromSuspension();
/*   320 */         } else {
/*   321 */             Sk.builtin.pyCheckArgs("make_tree", arguments, 2, 2, false, false);
/*   322 */         }
/*   323 */         while (true) {
/*   324 */             try {
/*   325 */                 var $dateNow = Date.now();
/*   326 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   327 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   328 */                 }
/*   329 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   330 */                     var $susp = $saveSuspension({
/*   331 */                         data: {
/*   332 */                             type: 'Sk.yield'
/*   333 */                         },
/*   334 */                         resume: function() {}
/*   335 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*   336 */                     $susp.$blk = $blk;
/*   337 */                     $susp.optional = true;
/*   338 */                     return $susp;
/*   339 */                 }
/*   340 */                 switch ($blk) {
/*   341 */                 case 0:
/*   342 */                     /* --- codeobj entry --- */
/*   343 */                     if (i === undefined) {
/*   344 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   345 */                     }
/*   346 */                     if (d === undefined) {
/*   347 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   348 */                     }
/*   349 */ 
/*   350 */                     //
/*   351 */                     // line 10:
/*   352 */                     //     if d > 0:
/*   353 */                     //     ^
/*   354 */                     //
/*   355 */                     $currLineNo = 10;
/*   356 */                     $currColNo = 4;
/*   357 */ 
/*   358 */                     if (d === undefined) {
/*   359 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   360 */                     }
/*   361 */                     var $compareres123 = null;
/*   362 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(d, new Sk.builtin.int_(0), 'Gt', true));
/*   363 */                     $blk = 3; /* allowing case fallthrough */
/*   364 */                 case 3:
/*   365 */                     /* --- function return or resume suspension --- */
/*   366 */                     if ($ret && $ret.$isSuspension) {
/*   367 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 10, 7);
/*   368 */                     }
/*   369 */                     $compareres123 = $ret;
/*   370 */                     var $jfalse124 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   371 */                     if ($jfalse124) { /*test failed */
/*   372 */                         $blk = 2;
/*   373 */                         continue;
/*   374 */                     }
/*   375 */                     $blk = 2; /* allowing case fallthrough */
/*   376 */                 case 2:
/*   377 */                     /* --- done --- */
/*   378 */                     var $jfalse125 = ($compareres123 === false || !Sk.misceval.isTrue($compareres123));
/*   379 */                     if ($jfalse125) { /*test failed */
/*   380 */                         $blk = 1;
/*   381 */                         continue;
/*   382 */                     }
/*   383 */                     //
/*   384 */                     // line 11:
/*   385 */                     //         i2 = i + i
/*   386 */                     //         ^
/*   387 */                     //
/*   388 */                     $currLineNo = 11;
/*   389 */                     $currColNo = 8;
/*   390 */ 
/*   391 */                     if (i === undefined) {
/*   392 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   393 */                     }
/*   394 */                     if (i === undefined) {
/*   395 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   396 */                     }
/*   397 */                     var $binop126 = Sk.abstr.numberBinOp(i, i, 'Add');
/*   398 */                     i2 = $binop126;
/*   399 */                     //
/*   400 */                     // line 12:
/*   401 */                     //         d -= 1
/*   402 */                     //         ^
/*   403 */                     //
/*   404 */                     $currLineNo = 12;
/*   405 */                     $currColNo = 8;
/*   406 */ 
/*   407 */                     if (d === undefined) {
/*   408 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   409 */                     }
/*   410 */                     var $inplbinop127 = Sk.abstr.numberInplaceBinOp(d, new Sk.builtin.int_(1), 'Sub');
/*   411 */                     d = $inplbinop127;
/*   412 */                     //
/*   413 */                     // line 13:
/*   414 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   415 */                     //         ^
/*   416 */                     //
/*   417 */                     $currLineNo = 13;
/*   418 */                     $currColNo = 8;
/*   419 */ 
/*   420 */                     if (i === undefined) {
/*   421 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   422 */                     }
/*   423 */                     var $elem128 = i;
/*   424 */                     var $loadgbl129 = Sk.misceval.loadname('make_tree', $gbl);
/*   425 */                     if (i2 === undefined) {
/*   426 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i2\' referenced before assignment');
/*   427 */                     }
/*   428 */                     var $binop130 = Sk.abstr.numberBinOp(i2, new Sk.builtin.int_(1), 'Sub');
/*   429 */                     if (d === undefined) {
/*   430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   431 */                     }
/*   432 */                     $ret;
/*   433 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl129, $binop130, d);
/*   434 */                     $blk = 4; /* allowing case fallthrough */
/*   435 */                 case 4:
/*   436 */                     /* --- function return or resume suspension --- */
/*   437 */                     if ($ret && $ret.$isSuspension) {
/*   438 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 13, 19);
/*   439 */                     }
/*   440 */                     var $call131 = $ret;
/*   441 */                     //
/*   442 */                     // line 13:
/*   443 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   444 */                     //                    ^
/*   445 */                     //
/*   446 */                     $currLineNo = 13;
/*   447 */                     $currColNo = 19;
/*   448 */ 
/*   449 */                     var $elem132 = $call131;
/*   450 */                     var $loadgbl133 = Sk.misceval.loadname('make_tree', $gbl);
/*   451 */                     if (i2 === undefined) {
/*   452 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i2\' referenced before assignment');
/*   453 */                     }
/*   454 */                     if (d === undefined) {
/*   455 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   456 */                     }
/*   457 */                     $ret;
/*   458 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl133, i2, d);
/*   459 */                     $blk = 5; /* allowing case fallthrough */
/*   460 */                 case 5:
/*   461 */                     /* --- function return or resume suspension --- */
/*   462 */                     if ($ret && $ret.$isSuspension) {
/*   463 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 13, 41);
/*   464 */                     }
/*   465 */                     var $call134 = $ret;
/*   466 */                     //
/*   467 */                     // line 13:
/*   468 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   469 */                     //                                          ^
/*   470 */                     //
/*   471 */                     $currLineNo = 13;
/*   472 */                     $currColNo = 41;
/*   473 */ 
/*   474 */                     var $elem135 = $call134;
/*   475 */                     var $loadtuple136 = new Sk.builtins['tuple']([$elem128, $elem132, $elem135]);
/*   476 */                     return $loadtuple136;
/*   477 */                     $blk = 1; /* allowing case fallthrough */
/*   478 */                 case 1:
/*   479 */                     /* --- end of if --- */
/*   480 */                     //
/*   481 */                     // line 14:
/*   482 */                     //     return (i, None, None)
/*   483 */                     //     ^
/*   484 */                     //
/*   485 */                     $currLineNo = 14;
/*   486 */                     $currColNo = 4;
/*   487 */ 
/*   488 */                     if (i === undefined) {
/*   489 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   490 */                     }
/*   491 */                     var $elem137 = i;
/*   492 */                     var $elem138 = Sk.builtin.none.none$;
/*   493 */                     var $elem139 = Sk.builtin.none.none$;
/*   494 */                     var $loadtuple140 = new Sk.builtins['tuple']([$elem137, $elem138, $elem139]);
/*   495 */                     return $loadtuple140;
/*   496 */                     return Sk.builtin.none.none$;
/*   497 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   498 */                 }
/*   499 */             } catch (err) {
/*   500 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   501 */                     err = new Sk.builtin.ExternalError(err);
/*   502 */                 }
/*   503 */                 err.traceback.push({
/*   504 */                     lineno: $currLineNo,
/*   505 */                     colno: $currColNo,
/*   506 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   507 */                 });
/*   508 */                 if ($exc.length > 0) {
/*   509 */                     $err = err;
/*   510 */                     $blk = $exc.pop();
/*   511 */                     continue;
/*   512 */                 } else {
/*   513 */                     throw err;
/*   514 */                 }
/*   515 */             }
/*   516 */         }
/*   517 */     });
/*   518 */     var $scope142 = (function $check_tree143$(node) {
/*   519 */         var i, l, r; /* locals */
/*   520 */         var i, i, i, l, l, l, node, node, r, r, $compareres145, $loadgbl148, $loadgbl148, $call149, $binop150, $loadgbl151;
/*   521 */         var $wakeFromSuspension = function() {
/*   522 */             var susp = $scope142.$wakingSuspension;
/*   523 */             delete $scope142.$wakingSuspension;
/*   524 */             $blk = susp.$blk;
/*   525 */             $loc = susp.$loc;
/*   526 */             $gbl = susp.$gbl;
/*   527 */             $exc = susp.$exc;
/*   528 */             $err = susp.$err;
/*   529 */             $postfinally = susp.$postfinally;
/*   530 */             $currLineNo = susp.$lineno;
/*   531 */             $currColNo = susp.$colno;
/*   532 */             Sk.lastYield = Date.now();
/*   533 */             i = susp.$tmps.i;
/*   534 */             l = susp.$tmps.l;
/*   535 */             node = susp.$tmps.node;
/*   536 */             r = susp.$tmps.r;
/*   537 */             $compareres145 = susp.$tmps.$compareres145;
/*   538 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*   539 */             $call149 = susp.$tmps.$call149;
/*   540 */             $binop150 = susp.$tmps.$binop150;
/*   541 */             $loadgbl151 = susp.$tmps.$loadgbl151;
/*   542 */             try {
/*   543 */                 $ret = susp.child.resume();
/*   544 */             } catch (err) {
/*   545 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   546 */                     err = new Sk.builtin.ExternalError(err);
/*   547 */                 }
/*   548 */                 err.traceback.push({
/*   549 */                     lineno: $currLineNo,
/*   550 */                     colno: $currColNo,
/*   551 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   552 */                 });
/*   553 */                 if ($exc.length > 0) {
/*   554 */                     $err = err;
/*   555 */                     $blk = $exc.pop();
/*   556 */                 } else {
/*   557 */                     throw err;
/*   558 */                 }
/*   559 */             }
/*   560 */         };
/*   561 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   562 */             var susp = new Sk.misceval.Suspension();
/*   563 */             susp.child = $child;
/*   564 */             susp.resume = function() {
/*   565 */                 $scope142.$wakingSuspension = susp;
/*   566 */                 return $scope142();
/*   567 */             };
/*   568 */             susp.data = susp.child.data;
/*   569 */             susp.$blk = $blk;
/*   570 */             susp.$loc = $loc;
/*   571 */             susp.$gbl = $gbl;
/*   572 */             susp.$exc = $exc;
/*   573 */             susp.$err = $err;
/*   574 */             susp.$postfinally = $postfinally;
/*   575 */             susp.$filename = $filename;
/*   576 */             susp.$lineno = $lineno;
/*   577 */             susp.$colno = $colno;
/*   578 */             susp.optional = susp.child.optional;
/*   579 */             susp.$tmps = {
/*   580 */                 "i": i,
/*   581 */                 "l": l,
/*   582 */                 "node": node,
/*   583 */                 "r": r,
/*   584 */                 "$compareres145": $compareres145,
/*   585 */                 "$loadgbl148": $loadgbl148,
/*   586 */                 "$call149": $call149,
/*   587 */                 "$binop150": $binop150,
/*   588 */                 "$loadgbl151": $loadgbl151
/*   589 */             };
/*   590 */             return susp;
/*   591 */         };
/*   592 */         var $blk = 0,
/*   593 */             $exc = [],
/*   594 */             $loc = {},
/*   595 */             $gbl = this,
/*   596 */             $err = undefined,
/*   597 */             $ret = undefined,
/*   598 */             $postfinally = undefined,
/*   599 */             $currLineNo = undefined,
/*   600 */             $currColNo = undefined;
/*   601 */         if (typeof Sk.execStart === 'undefined') {
/*   602 */             Sk.execStart = Date.now()
/*   603 */         }
/*   604 */         if (typeof Sk.lastYield === 'undefined') {
/*   605 */             Sk.lastYield = Date.now()
/*   606 */         }
/*   607 */         if ($scope142.$wakingSuspension !== undefined) {
/*   608 */             $wakeFromSuspension();
/*   609 */         } else {
/*   610 */             Sk.builtin.pyCheckArgs("check_tree", arguments, 1, 1, false, false);
/*   611 */         }
/*   612 */         while (true) {
/*   613 */             try {
/*   614 */                 var $dateNow = Date.now();
/*   615 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   616 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   617 */                 }
/*   618 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   619 */                     var $susp = $saveSuspension({
/*   620 */                         data: {
/*   621 */                             type: 'Sk.yield'
/*   622 */                         },
/*   623 */                         resume: function() {}
/*   624 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*   625 */                     $susp.$blk = $blk;
/*   626 */                     $susp.optional = true;
/*   627 */                     return $susp;
/*   628 */                 }
/*   629 */                 switch ($blk) {
/*   630 */                 case 0:
/*   631 */                     /* --- codeobj entry --- */
/*   632 */                     if (node === undefined) {
/*   633 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*   634 */                     }
/*   635 */ 
/*   636 */                     //
/*   637 */                     // line 19:
/*   638 */                     //     (i, l, r) = node
/*   639 */                     //     ^
/*   640 */                     //
/*   641 */                     $currLineNo = 19;
/*   642 */                     $currColNo = 4;
/*   643 */ 
/*   644 */                     if (node === undefined) {
/*   645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*   646 */                     }
/*   647 */                     var $items144 = Sk.abstr.sequenceUnpack(node, 3);
/*   648 */                     i = $items144[0];
/*   649 */                     l = $items144[1];
/*   650 */                     r = $items144[2];
/*   651 */                     //
/*   652 */                     // line 20:
/*   653 */                     //     if l is None:
/*   654 */                     //     ^
/*   655 */                     //
/*   656 */                     $currLineNo = 20;
/*   657 */                     $currColNo = 4;
/*   658 */ 
/*   659 */                     if (l === undefined) {
/*   660 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   661 */                     }
/*   662 */                     var $compareres145 = null;
/*   663 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(l, Sk.builtin.none.none$, 'Is', true));
/*   664 */                     $blk = 4; /* allowing case fallthrough */
/*   665 */                 case 4:
/*   666 */                     /* --- function return or resume suspension --- */
/*   667 */                     if ($ret && $ret.$isSuspension) {
/*   668 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 20, 7);
/*   669 */                     }
/*   670 */                     $compareres145 = $ret;
/*   671 */                     var $jfalse146 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   672 */                     if ($jfalse146) { /*test failed */
/*   673 */                         $blk = 3;
/*   674 */                         continue;
/*   675 */                     }
/*   676 */                     $blk = 3; /* allowing case fallthrough */
/*   677 */                 case 3:
/*   678 */                     /* --- done --- */
/*   679 */                     var $jfalse147 = ($compareres145 === false || !Sk.misceval.isTrue($compareres145));
/*   680 */                     if ($jfalse147) { /*test failed */
/*   681 */                         $blk = 2;
/*   682 */                         continue;
/*   683 */                     }
/*   684 */                     //
/*   685 */                     // line 21:
/*   686 */                     //         return i
/*   687 */                     //         ^
/*   688 */                     //
/*   689 */                     $currLineNo = 21;
/*   690 */                     $currColNo = 8;
/*   691 */ 
/*   692 */                     if (i === undefined) {
/*   693 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   694 */                     }
/*   695 */                     return i;
/*   696 */                     $blk = 1; /* allowing case fallthrough */
/*   697 */                 case 1:
/*   698 */                     /* --- end of if --- */
/*   699 */                     return Sk.builtin.none.none$;
/*   700 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   701 */                 case 2:
/*   702 */                     /* --- next branch of if --- */
/*   703 */                     //
/*   704 */                     // line 23:
/*   705 */                     //         return i + check_tree(l) - check_tree(r)
/*   706 */                     //         ^
/*   707 */                     //
/*   708 */                     $currLineNo = 23;
/*   709 */                     $currColNo = 8;
/*   710 */ 
/*   711 */                     if (i === undefined) {
/*   712 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   713 */                     }
/*   714 */                     var $loadgbl148 = Sk.misceval.loadname('check_tree', $gbl);
/*   715 */                     if (l === undefined) {
/*   716 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   717 */                     }
/*   718 */                     $ret;
/*   719 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, l);
/*   720 */                     $blk = 5; /* allowing case fallthrough */
/*   721 */                 case 5:
/*   722 */                     /* --- function return or resume suspension --- */
/*   723 */                     if ($ret && $ret.$isSuspension) {
/*   724 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 23, 19);
/*   725 */                     }
/*   726 */                     var $call149 = $ret;
/*   727 */                     //
/*   728 */                     // line 23:
/*   729 */                     //         return i + check_tree(l) - check_tree(r)
/*   730 */                     //                    ^
/*   731 */                     //
/*   732 */                     $currLineNo = 23;
/*   733 */                     $currColNo = 19;
/*   734 */ 
/*   735 */                     var $binop150 = Sk.abstr.numberBinOp(i, $call149, 'Add');
/*   736 */                     var $loadgbl151 = Sk.misceval.loadname('check_tree', $gbl);
/*   737 */                     if (r === undefined) {
/*   738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   739 */                     }
/*   740 */                     $ret;
/*   741 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl151, r);
/*   742 */                     $blk = 6; /* allowing case fallthrough */
/*   743 */                 case 6:
/*   744 */                     /* --- function return or resume suspension --- */
/*   745 */                     if ($ret && $ret.$isSuspension) {
/*   746 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 23, 35);
/*   747 */                     }
/*   748 */                     var $call152 = $ret;
/*   749 */                     //
/*   750 */                     // line 23:
/*   751 */                     //         return i + check_tree(l) - check_tree(r)
/*   752 */                     //                                    ^
/*   753 */                     //
/*   754 */                     $currLineNo = 23;
/*   755 */                     $currColNo = 35;
/*   756 */ 
/*   757 */                     var $binop153 = Sk.abstr.numberBinOp($binop150, $call152, 'Sub');
/*   758 */                     return $binop153;
/*   759 */                     $blk = 1; /* jump */
/*   760 */                     continue;
/*   761 */                 }
/*   762 */             } catch (err) {
/*   763 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   764 */                     err = new Sk.builtin.ExternalError(err);
/*   765 */                 }
/*   766 */                 err.traceback.push({
/*   767 */                     lineno: $currLineNo,
/*   768 */                     colno: $currColNo,
/*   769 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   770 */                 });
/*   771 */                 if ($exc.length > 0) {
/*   772 */                     $err = err;
/*   773 */                     $blk = $exc.pop();
/*   774 */                     continue;
/*   775 */                 } else {
/*   776 */                     throw err;
/*   777 */                 }
/*   778 */             }
/*   779 */         }
/*   780 */     });
/*   781 */     var $scope157 = (function $make_check158$(itde, make, check) {
/*   782 */         var d, i; /* locals */
/*   783 */         var check, check, check, d, d, i, i, itde, itde, make, make, make, $call160;
/*   784 */         var $wakeFromSuspension = function() {
/*   785 */             var susp = $scope157.$wakingSuspension;
/*   786 */             delete $scope157.$wakingSuspension;
/*   787 */             $blk = susp.$blk;
/*   788 */             $loc = susp.$loc;
/*   789 */             $gbl = susp.$gbl;
/*   790 */             $exc = susp.$exc;
/*   791 */             $err = susp.$err;
/*   792 */             $postfinally = susp.$postfinally;
/*   793 */             $currLineNo = susp.$lineno;
/*   794 */             $currColNo = susp.$colno;
/*   795 */             Sk.lastYield = Date.now();
/*   796 */             check = susp.$tmps.check;
/*   797 */             d = susp.$tmps.d;
/*   798 */             i = susp.$tmps.i;
/*   799 */             itde = susp.$tmps.itde;
/*   800 */             make = susp.$tmps.make;
/*   801 */             $call160 = susp.$tmps.$call160;
/*   802 */             try {
/*   803 */                 $ret = susp.child.resume();
/*   804 */             } catch (err) {
/*   805 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   806 */                     err = new Sk.builtin.ExternalError(err);
/*   807 */                 }
/*   808 */                 err.traceback.push({
/*   809 */                     lineno: $currLineNo,
/*   810 */                     colno: $currColNo,
/*   811 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   812 */                 });
/*   813 */                 if ($exc.length > 0) {
/*   814 */                     $err = err;
/*   815 */                     $blk = $exc.pop();
/*   816 */                 } else {
/*   817 */                     throw err;
/*   818 */                 }
/*   819 */             }
/*   820 */         };
/*   821 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   822 */             var susp = new Sk.misceval.Suspension();
/*   823 */             susp.child = $child;
/*   824 */             susp.resume = function() {
/*   825 */                 $scope157.$wakingSuspension = susp;
/*   826 */                 return $scope157();
/*   827 */             };
/*   828 */             susp.data = susp.child.data;
/*   829 */             susp.$blk = $blk;
/*   830 */             susp.$loc = $loc;
/*   831 */             susp.$gbl = $gbl;
/*   832 */             susp.$exc = $exc;
/*   833 */             susp.$err = $err;
/*   834 */             susp.$postfinally = $postfinally;
/*   835 */             susp.$filename = $filename;
/*   836 */             susp.$lineno = $lineno;
/*   837 */             susp.$colno = $colno;
/*   838 */             susp.optional = susp.child.optional;
/*   839 */             susp.$tmps = {
/*   840 */                 "check": check,
/*   841 */                 "d": d,
/*   842 */                 "i": i,
/*   843 */                 "itde": itde,
/*   844 */                 "make": make,
/*   845 */                 "$call160": $call160
/*   846 */             };
/*   847 */             return susp;
/*   848 */         };
/*   849 */         var $blk = 0,
/*   850 */             $exc = [],
/*   851 */             $loc = {},
/*   852 */             $gbl = this,
/*   853 */             $err = undefined,
/*   854 */             $ret = undefined,
/*   855 */             $postfinally = undefined,
/*   856 */             $currLineNo = undefined,
/*   857 */             $currColNo = undefined;
/*   858 */         if (typeof Sk.execStart === 'undefined') {
/*   859 */             Sk.execStart = Date.now()
/*   860 */         }
/*   861 */         if (typeof Sk.lastYield === 'undefined') {
/*   862 */             Sk.lastYield = Date.now()
/*   863 */         }
/*   864 */         if ($scope157.$wakingSuspension !== undefined) {
/*   865 */             $wakeFromSuspension();
/*   866 */         } else {
/*   867 */             if (make === undefined) make = $scope157.$defaults[0];
/*   868 */             if (check === undefined) check = $scope157.$defaults[1];
/*   869 */             Sk.builtin.pyCheckArgs("make_check", arguments, 1, 3, false, false);
/*   870 */         }
/*   871 */         while (true) {
/*   872 */             try {
/*   873 */                 var $dateNow = Date.now();
/*   874 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   875 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   876 */                 }
/*   877 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   878 */                     var $susp = $saveSuspension({
/*   879 */                         data: {
/*   880 */                             type: 'Sk.yield'
/*   881 */                         },
/*   882 */                         resume: function() {}
/*   883 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*   884 */                     $susp.$blk = $blk;
/*   885 */                     $susp.optional = true;
/*   886 */                     return $susp;
/*   887 */                 }
/*   888 */                 switch ($blk) {
/*   889 */                 case 0:
/*   890 */                     /* --- codeobj entry --- */
/*   891 */                     if (itde === undefined) {
/*   892 */                         throw new Sk.builtin.UnboundLocalError('local variable \'itde\' referenced before assignment');
/*   893 */                     }
/*   894 */                     if (make === undefined) {
/*   895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   896 */                     }
/*   897 */                     if (check === undefined) {
/*   898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   899 */                     }
/*   900 */                     if (make === undefined) {
/*   901 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   902 */                     }
/*   903 */                     if (check === undefined) {
/*   904 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   905 */                     }
/*   906 */ 
/*   907 */                     //
/*   908 */                     // line 28:
/*   909 */                     //     i, d = itde
/*   910 */                     //     ^
/*   911 */                     //
/*   912 */                     $currLineNo = 28;
/*   913 */                     $currColNo = 4;
/*   914 */ 
/*   915 */                     if (itde === undefined) {
/*   916 */                         throw new Sk.builtin.UnboundLocalError('local variable \'itde\' referenced before assignment');
/*   917 */                     }
/*   918 */                     var $items159 = Sk.abstr.sequenceUnpack(itde, 2);
/*   919 */                     i = $items159[0];
/*   920 */                     d = $items159[1];
/*   921 */                     //
/*   922 */                     // line 29:
/*   923 */                     //     return check(make(i, d))
/*   924 */                     //     ^
/*   925 */                     //
/*   926 */                     $currLineNo = 29;
/*   927 */                     $currColNo = 4;
/*   928 */ 
/*   929 */                     if (check === undefined) {
/*   930 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   931 */                     }
/*   932 */                     if (make === undefined) {
/*   933 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   934 */                     }
/*   935 */                     if (i === undefined) {
/*   936 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   937 */                     }
/*   938 */                     if (d === undefined) {
/*   939 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   940 */                     }
/*   941 */                     $ret;
/*   942 */                     $ret = Sk.misceval.callsimOrSuspend(make, i, d);
/*   943 */                     $blk = 1; /* allowing case fallthrough */
/*   944 */                 case 1:
/*   945 */                     /* --- function return or resume suspension --- */
/*   946 */                     if ($ret && $ret.$isSuspension) {
/*   947 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 29, 17);
/*   948 */                     }
/*   949 */                     var $call160 = $ret;
/*   950 */                     //
/*   951 */                     // line 29:
/*   952 */                     //     return check(make(i, d))
/*   953 */                     //                  ^
/*   954 */                     //
/*   955 */                     $currLineNo = 29;
/*   956 */                     $currColNo = 17;
/*   957 */ 
/*   958 */                     $ret;
/*   959 */                     $ret = Sk.misceval.callsimOrSuspend(check, $call160);
/*   960 */                     $blk = 2; /* allowing case fallthrough */
/*   961 */                 case 2:
/*   962 */                     /* --- function return or resume suspension --- */
/*   963 */                     if ($ret && $ret.$isSuspension) {
/*   964 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 29, 11);
/*   965 */                     }
/*   966 */                     var $call161 = $ret;
/*   967 */                     //
/*   968 */                     // line 29:
/*   969 */                     //     return check(make(i, d))
/*   970 */                     //            ^
/*   971 */                     //
/*   972 */                     $currLineNo = 29;
/*   973 */                     $currColNo = 11;
/*   974 */ 
/*   975 */                     return $call161;
/*   976 */                     return Sk.builtin.none.none$;
/*   977 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   978 */                 }
/*   979 */             } catch (err) {
/*   980 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   981 */                     err = new Sk.builtin.ExternalError(err);
/*   982 */                 }
/*   983 */                 err.traceback.push({
/*   984 */                     lineno: $currLineNo,
/*   985 */                     colno: $currColNo,
/*   986 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   987 */                 });
/*   988 */                 if ($exc.length > 0) {
/*   989 */                     $err = err;
/*   990 */                     $blk = $exc.pop();
/*   991 */                     continue;
/*   992 */                 } else {
/*   993 */                     throw err;
/*   994 */                 }
/*   995 */             }
/*   996 */         }
/*   997 */     });
/*   998 */     var $scope163 = (function $get_argchunks164$($gen) {
/*   999 */         // generator
/*  1000 */         var $loadname165, $binop166, $compareres167, $loadgbl171, $loadname172, $binop173, $loadgbl171, $loadname172, $binop173, $call174, $loadname177, $loadname177, $lattr178, $loadname179, $elem180, $loadname181, $elem182, $loadtuple183, $elem184, $loadname185, $unaryop186, $elem187, $loadname188, $elem189, $loadtuple190, $elem191, $loadlist192, $loadgbl194, $loadname195, $loadgbl194, $loadname195, $call196, $compareres197, $loadname198, $loadgbl203, $loadname204, $loadgbl203, $loadname204, $call205, $compareres206;
/*  1001 */         var $wakeFromSuspension = function() {
/*  1002 */             var susp = $scope163.$wakingSuspension;
/*  1003 */             delete $scope163.$wakingSuspension;
/*  1004 */             $blk = susp.$blk;
/*  1005 */             $loc = susp.$loc;
/*  1006 */             $gbl = susp.$gbl;
/*  1007 */             $exc = susp.$exc;
/*  1008 */             $err = susp.$err;
/*  1009 */             $postfinally = susp.$postfinally;
/*  1010 */             $currLineNo = susp.$lineno;
/*  1011 */             $currColNo = susp.$colno;
/*  1012 */             Sk.lastYield = Date.now();
/*  1013 */             $loadname165 = susp.$tmps.$loadname165;
/*  1014 */             $binop166 = susp.$tmps.$binop166;
/*  1015 */             $compareres167 = susp.$tmps.$compareres167;
/*  1016 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*  1017 */             $loadname172 = susp.$tmps.$loadname172;
/*  1018 */             $binop173 = susp.$tmps.$binop173;
/*  1019 */             $call174 = susp.$tmps.$call174;
/*  1020 */             $loadname177 = susp.$tmps.$loadname177;
/*  1021 */             $lattr178 = susp.$tmps.$lattr178;
/*  1022 */             $loadname179 = susp.$tmps.$loadname179;
/*  1023 */             $elem180 = susp.$tmps.$elem180;
/*  1024 */             $loadname181 = susp.$tmps.$loadname181;
/*  1025 */             $elem182 = susp.$tmps.$elem182;
/*  1026 */             $loadtuple183 = susp.$tmps.$loadtuple183;
/*  1027 */             $elem184 = susp.$tmps.$elem184;
/*  1028 */             $loadname185 = susp.$tmps.$loadname185;
/*  1029 */             $unaryop186 = susp.$tmps.$unaryop186;
/*  1030 */             $elem187 = susp.$tmps.$elem187;
/*  1031 */             $loadname188 = susp.$tmps.$loadname188;
/*  1032 */             $elem189 = susp.$tmps.$elem189;
/*  1033 */             $loadtuple190 = susp.$tmps.$loadtuple190;
/*  1034 */             $elem191 = susp.$tmps.$elem191;
/*  1035 */             $loadlist192 = susp.$tmps.$loadlist192;
/*  1036 */             $loadgbl194 = susp.$tmps.$loadgbl194;
/*  1037 */             $loadname195 = susp.$tmps.$loadname195;
/*  1038 */             $call196 = susp.$tmps.$call196;
/*  1039 */             $compareres197 = susp.$tmps.$compareres197;
/*  1040 */             $loadname198 = susp.$tmps.$loadname198;
/*  1041 */             $loadgbl203 = susp.$tmps.$loadgbl203;
/*  1042 */             $loadname204 = susp.$tmps.$loadname204;
/*  1043 */             $call205 = susp.$tmps.$call205;
/*  1044 */             $compareres206 = susp.$tmps.$compareres206;
/*  1045 */             try {
/*  1046 */                 $ret = susp.child.resume();
/*  1047 */             } catch (err) {
/*  1048 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1049 */                     err = new Sk.builtin.ExternalError(err);
/*  1050 */                 }
/*  1051 */                 err.traceback.push({
/*  1052 */                     lineno: $currLineNo,
/*  1053 */                     colno: $currColNo,
/*  1054 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*  1055 */                 });
/*  1056 */                 if ($exc.length > 0) {
/*  1057 */                     $err = err;
/*  1058 */                     $blk = $exc.pop();
/*  1059 */                 } else {
/*  1060 */                     throw err;
/*  1061 */                 }
/*  1062 */             }
/*  1063 */         };
/*  1064 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1065 */             var susp = new Sk.misceval.Suspension();
/*  1066 */             susp.child = $child;
/*  1067 */             susp.resume = function() {
/*  1068 */                 $scope163.$wakingSuspension = susp;
/*  1069 */                 return $scope163($gen);
/*  1070 */             };
/*  1071 */             susp.data = susp.child.data;
/*  1072 */             susp.$blk = $blk;
/*  1073 */             susp.$loc = $loc;
/*  1074 */             susp.$gbl = $gbl;
/*  1075 */             susp.$exc = $exc;
/*  1076 */             susp.$err = $err;
/*  1077 */             susp.$postfinally = $postfinally;
/*  1078 */             susp.$filename = $filename;
/*  1079 */             susp.$lineno = $lineno;
/*  1080 */             susp.$colno = $colno;
/*  1081 */             susp.optional = susp.child.optional;
/*  1082 */             susp.$tmps = {
/*  1083 */                 "$loadname165": $loadname165,
/*  1084 */                 "$binop166": $binop166,
/*  1085 */                 "$compareres167": $compareres167,
/*  1086 */                 "$loadgbl171": $loadgbl171,
/*  1087 */                 "$loadname172": $loadname172,
/*  1088 */                 "$binop173": $binop173,
/*  1089 */                 "$call174": $call174,
/*  1090 */                 "$loadname177": $loadname177,
/*  1091 */                 "$lattr178": $lattr178,
/*  1092 */                 "$loadname179": $loadname179,
/*  1093 */                 "$elem180": $elem180,
/*  1094 */                 "$loadname181": $loadname181,
/*  1095 */                 "$elem182": $elem182,
/*  1096 */                 "$loadtuple183": $loadtuple183,
/*  1097 */                 "$elem184": $elem184,
/*  1098 */                 "$loadname185": $loadname185,
/*  1099 */                 "$unaryop186": $unaryop186,
/*  1100 */                 "$elem187": $elem187,
/*  1101 */                 "$loadname188": $loadname188,
/*  1102 */                 "$elem189": $elem189,
/*  1103 */                 "$loadtuple190": $loadtuple190,
/*  1104 */                 "$elem191": $elem191,
/*  1105 */                 "$loadlist192": $loadlist192,
/*  1106 */                 "$loadgbl194": $loadgbl194,
/*  1107 */                 "$loadname195": $loadname195,
/*  1108 */                 "$call196": $call196,
/*  1109 */                 "$compareres197": $compareres197,
/*  1110 */                 "$loadname198": $loadname198,
/*  1111 */                 "$loadgbl203": $loadgbl203,
/*  1112 */                 "$loadname204": $loadname204,
/*  1113 */                 "$call205": $call205,
/*  1114 */                 "$compareres206": $compareres206
/*  1115 */             };
/*  1116 */             return susp;
/*  1117 */         };
/*  1118 */         var $blk = $gen.gi$resumeat,
/*  1119 */             $exc = [],
/*  1120 */             $loc = $gen.gi$locals,
/*  1121 */             $gbl = this,
/*  1122 */             $err = undefined,
/*  1123 */             $ret = undefined,
/*  1124 */             $postfinally = undefined,
/*  1125 */             $currLineNo = undefined,
/*  1126 */             $currColNo = undefined;
/*  1127 */         if (typeof Sk.execStart === 'undefined') {
/*  1128 */             Sk.execStart = Date.now()
/*  1129 */         }
/*  1130 */         if (typeof Sk.lastYield === 'undefined') {
/*  1131 */             Sk.lastYield = Date.now()
/*  1132 */         }
/*  1133 */         if ($scope163.$wakingSuspension !== undefined) {
/*  1134 */             $wakeFromSuspension();
/*  1135 */         } else {
/*  1136 */             if ($loc.chunksize === undefined) $loc.chunksize = $scope163.$defaults[0];
/*  1137 */         }
/*  1138 */         while (true) {
/*  1139 */             try {
/*  1140 */                 var $dateNow = Date.now();
/*  1141 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1142 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1143 */                 }
/*  1144 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1145 */                     var $susp = $saveSuspension({
/*  1146 */                         data: {
/*  1147 */                             type: 'Sk.yield'
/*  1148 */                         },
/*  1149 */                         resume: function() {}
/*  1150 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*  1151 */                     $susp.$blk = $blk;
/*  1152 */                     $susp.optional = true;
/*  1153 */                     return $susp;
/*  1154 */                 }
/*  1155 */                 switch ($blk) {
/*  1156 */                 case 0:
/*  1157 */                     /* --- codeobj entry --- */
/*  1158 */                     //
/*  1159 */                     // line 34:
/*  1160 */                     //     assert chunksize % 2 == 0
/*  1161 */                     //     ^
/*  1162 */                     //
/*  1163 */                     $currLineNo = 34;
/*  1164 */                     $currColNo = 4;
/*  1165 */ 
/*  1166 */                     var $loadname165 = $loc.chunksize !== undefined ? $loc.chunksize : Sk.misceval.loadname('chunksize', $gbl);;
/*  1167 */                     var $binop166 = Sk.abstr.numberBinOp($loadname165, new Sk.builtin.int_(2), 'Mod');
/*  1168 */                     var $compareres167 = null;
/*  1169 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($binop166, new Sk.builtin.int_(0), 'Eq', true));
/*  1170 */                     $blk = 2; /* allowing case fallthrough */
/*  1171 */                 case 2:
/*  1172 */                     /* --- function return or resume suspension --- */
/*  1173 */                     if ($ret && $ret.$isSuspension) {
/*  1174 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 34, 11);
/*  1175 */                     }
/*  1176 */                     $compareres167 = $ret;
/*  1177 */                     var $jfalse168 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1178 */                     if ($jfalse168) { /*test failed */
/*  1179 */                         $blk = 1;
/*  1180 */                         continue;
/*  1181 */                     }
/*  1182 */                     $blk = 1; /* allowing case fallthrough */
/*  1183 */                 case 1:
/*  1184 */                     /* --- done --- */
/*  1185 */                     var $jtrue169 = ($compareres167 === true || Sk.misceval.isTrue($compareres167));
/*  1186 */                     if ($jtrue169) { /*test passed */
/*  1187 */                         $blk = 3;
/*  1188 */                         continue;
/*  1189 */                     }
/*  1190 */                     throw new Sk.builtin.AssertionError();
/*  1191 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1192 */                 case 3:
/*  1193 */                     /* --- end --- */
/*  1194 */                     //
/*  1195 */                     // line 35:
/*  1196 */                     //     chunk = []
/*  1197 */                     //     ^
/*  1198 */                     //
/*  1199 */                     $currLineNo = 35;
/*  1200 */                     $currColNo = 4;
/*  1201 */ 
/*  1202 */                     var $loadlist170 = new Sk.builtins['list']([]);
/*  1203 */                     $loc.chunk = $loadlist170;
/*  1204 */                     //
/*  1205 */                     // line 36:
/*  1206 */                     //     for k in range(1, i + 1):
/*  1207 */                     //     ^
/*  1208 */                     //
/*  1209 */                     $currLineNo = 36;
/*  1210 */                     $currColNo = 4;
/*  1211 */ 
/*  1212 */                     var $loadgbl171 = Sk.misceval.loadname('range', $gbl);
/*  1213 */                     var $loadname172 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*  1214 */                     var $binop173 = Sk.abstr.numberBinOp($loadname172, new Sk.builtin.int_(1), 'Add');
/*  1215 */                     $ret;
/*  1216 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171, new Sk.builtin.int_(1), $binop173);
/*  1217 */                     $blk = 7; /* allowing case fallthrough */
/*  1218 */                 case 7:
/*  1219 */                     /* --- function return or resume suspension --- */
/*  1220 */                     if ($ret && $ret.$isSuspension) {
/*  1221 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 36, 13);
/*  1222 */                     }
/*  1223 */                     var $call174 = $ret;
/*  1224 */                     //
/*  1225 */                     // line 36:
/*  1226 */                     //     for k in range(1, i + 1):
/*  1227 */                     //              ^
/*  1228 */                     //
/*  1229 */                     $currLineNo = 36;
/*  1230 */                     $currColNo = 13;
/*  1231 */ 
/*  1232 */                     $loc.$iter175 = Sk.abstr.iter($call174);
/*  1233 */                     $blk = 4; /* allowing case fallthrough */
/*  1234 */                 case 4:
/*  1235 */                     /* --- for start --- */
/*  1236 */                     $ret = Sk.abstr.iternext($loc.$iter175, true);
/*  1237 */                     $blk = 8; /* allowing case fallthrough */
/*  1238 */                 case 8:
/*  1239 */                     /* --- function return or resume suspension --- */
/*  1240 */                     if ($ret && $ret.$isSuspension) {
/*  1241 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 36, 4);
/*  1242 */                     }
/*  1243 */                     var $next176 = $ret;
/*  1244 */                     if ($next176 === undefined) {
/*  1245 */                         $blk = 5;
/*  1246 */                         continue;
/*  1247 */                     }
/*  1248 */                     $loc.k = $next176;
/*  1249 */                     //
/*  1250 */                     // line 37:
/*  1251 */                     //         chunk.extend([(k, d), (-k, d)])
/*  1252 */                     //         ^
/*  1253 */                     //
/*  1254 */                     $currLineNo = 37;
/*  1255 */                     $currColNo = 8;
/*  1256 */ 
/*  1257 */                     var $loadname177 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1258 */                     $ret = Sk.abstr.gattr($loadname177, 'extend', true);
/*  1259 */                     $blk = 9; /* allowing case fallthrough */
/*  1260 */                 case 9:
/*  1261 */                     /* --- function return or resume suspension --- */
/*  1262 */                     if ($ret && $ret.$isSuspension) {
/*  1263 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 37, 8);
/*  1264 */                     }
/*  1265 */                     var $lattr178 = $ret;
/*  1266 */                     var $loadname179 = $loc.k !== undefined ? $loc.k : Sk.misceval.loadname('k', $gbl);;
/*  1267 */                     var $elem180 = $loadname179;
/*  1268 */                     var $loadname181 = $loc.d !== undefined ? $loc.d : Sk.misceval.loadname('d', $gbl);;
/*  1269 */                     var $elem182 = $loadname181;
/*  1270 */                     var $loadtuple183 = new Sk.builtins['tuple']([$elem180, $elem182]);
/*  1271 */                     var $elem184 = $loadtuple183;
/*  1272 */                     var $loadname185 = $loc.k !== undefined ? $loc.k : Sk.misceval.loadname('k', $gbl);;
/*  1273 */                     var $unaryop186 = Sk.abstr.numberUnaryOp($loadname185, 'USub');
/*  1274 */                     var $elem187 = $unaryop186;
/*  1275 */                     var $loadname188 = $loc.d !== undefined ? $loc.d : Sk.misceval.loadname('d', $gbl);;
/*  1276 */                     var $elem189 = $loadname188;
/*  1277 */                     var $loadtuple190 = new Sk.builtins['tuple']([$elem187, $elem189]);
/*  1278 */                     var $elem191 = $loadtuple190;
/*  1279 */                     var $loadlist192 = new Sk.builtins['list']([$elem184, $elem191]);
/*  1280 */                     $ret;
/*  1281 */                     $ret = Sk.misceval.callsimOrSuspend($lattr178, $loadlist192);
/*  1282 */                     $blk = 10; /* allowing case fallthrough */
/*  1283 */                 case 10:
/*  1284 */                     /* --- function return or resume suspension --- */
/*  1285 */                     if ($ret && $ret.$isSuspension) {
/*  1286 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 37, 8);
/*  1287 */                     }
/*  1288 */                     var $call193 = $ret;
/*  1289 */                     //
/*  1290 */                     // line 37:
/*  1291 */                     //         chunk.extend([(k, d), (-k, d)])
/*  1292 */                     //         ^
/*  1293 */                     //
/*  1294 */                     $currLineNo = 37;
/*  1295 */                     $currColNo = 8;
/*  1296 */ 
/*  1297 */ 
/*  1298 */                     //
/*  1299 */                     // line 38:
/*  1300 */                     //         if len(chunk) == chunksize:
/*  1301 */                     //         ^
/*  1302 */                     //
/*  1303 */                     $currLineNo = 38;
/*  1304 */                     $currColNo = 8;
/*  1305 */ 
/*  1306 */                     var $loadgbl194 = Sk.misceval.loadname('len', $gbl);
/*  1307 */                     var $loadname195 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1308 */                     $ret;
/*  1309 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl194, $loadname195);
/*  1310 */                     $blk = 12; /* allowing case fallthrough */
/*  1311 */                 case 12:
/*  1312 */                     /* --- function return or resume suspension --- */
/*  1313 */                     if ($ret && $ret.$isSuspension) {
/*  1314 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 38, 11);
/*  1315 */                     }
/*  1316 */                     var $call196 = $ret;
/*  1317 */                     //
/*  1318 */                     // line 38:
/*  1319 */                     //         if len(chunk) == chunksize:
/*  1320 */                     //            ^
/*  1321 */                     //
/*  1322 */                     $currLineNo = 38;
/*  1323 */                     $currColNo = 11;
/*  1324 */ 
/*  1325 */                     var $compareres197 = null;
/*  1326 */                     var $loadname198 = $loc.chunksize !== undefined ? $loc.chunksize : Sk.misceval.loadname('chunksize', $gbl);;
/*  1327 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call196, $loadname198, 'Eq', true));
/*  1328 */                     $blk = 14; /* allowing case fallthrough */
/*  1329 */                 case 14:
/*  1330 */                     /* --- function return or resume suspension --- */
/*  1331 */                     if ($ret && $ret.$isSuspension) {
/*  1332 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 38, 11);
/*  1333 */                     }
/*  1334 */                     $compareres197 = $ret;
/*  1335 */                     var $jfalse199 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1336 */                     if ($jfalse199) { /*test failed */
/*  1337 */                         $blk = 13;
/*  1338 */                         continue;
/*  1339 */                     }
/*  1340 */                     $blk = 13; /* allowing case fallthrough */
/*  1341 */                 case 13:
/*  1342 */                     /* --- done --- */
/*  1343 */                     var $jfalse200 = ($compareres197 === false || !Sk.misceval.isTrue($compareres197));
/*  1344 */                     if ($jfalse200) { /*test failed */
/*  1345 */                         $blk = 11;
/*  1346 */                         continue;
/*  1347 */                     }
/*  1348 */                     //
/*  1349 */                     // line 39:
/*  1350 */                     //             yield chunk
/*  1351 */                     //             ^
/*  1352 */                     //
/*  1353 */                     $currLineNo = 39;
/*  1354 */                     $currColNo = 12;
/*  1355 */ 
/*  1356 */                     var $loadname201 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1357 */                     return [ /*resume*/ 15, /*ret*/ $loadname201];
/*  1358 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1359 */                 case 5:
/*  1360 */                     /* --- for cleanup --- */
/*  1361 */                     $blk = 6; /* allowing case fallthrough */
/*  1362 */                 case 6:
/*  1363 */                     /* --- for end --- */
/*  1364 */                     //
/*  1365 */                     // line 41:
/*  1366 */                     //     if len(chunk) > 0:
/*  1367 */                     //     ^
/*  1368 */                     //
/*  1369 */                     $currLineNo = 41;
/*  1370 */                     $currColNo = 4;
/*  1371 */ 
/*  1372 */                     var $loadgbl203 = Sk.misceval.loadname('len', $gbl);
/*  1373 */                     var $loadname204 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1374 */                     $ret;
/*  1375 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl203, $loadname204);
/*  1376 */                     $blk = 17; /* allowing case fallthrough */
/*  1377 */                 case 17:
/*  1378 */                     /* --- function return or resume suspension --- */
/*  1379 */                     if ($ret && $ret.$isSuspension) {
/*  1380 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 41, 7);
/*  1381 */                     }
/*  1382 */                     var $call205 = $ret;
/*  1383 */                     //
/*  1384 */                     // line 41:
/*  1385 */                     //     if len(chunk) > 0:
/*  1386 */                     //        ^
/*  1387 */                     //
/*  1388 */                     $currLineNo = 41;
/*  1389 */                     $currColNo = 7;
/*  1390 */ 
/*  1391 */                     var $compareres206 = null;
/*  1392 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call205, new Sk.builtin.int_(0), 'Gt', true));
/*  1393 */                     $blk = 19; /* allowing case fallthrough */
/*  1394 */                 case 19:
/*  1395 */                     /* --- function return or resume suspension --- */
/*  1396 */                     if ($ret && $ret.$isSuspension) {
/*  1397 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 41, 7);
/*  1398 */                     }
/*  1399 */                     $compareres206 = $ret;
/*  1400 */                     var $jfalse207 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1401 */                     if ($jfalse207) { /*test failed */
/*  1402 */                         $blk = 18;
/*  1403 */                         continue;
/*  1404 */                     }
/*  1405 */                     $blk = 18; /* allowing case fallthrough */
/*  1406 */                 case 18:
/*  1407 */                     /* --- done --- */
/*  1408 */                     var $jfalse208 = ($compareres206 === false || !Sk.misceval.isTrue($compareres206));
/*  1409 */                     if ($jfalse208) { /*test failed */
/*  1410 */                         $blk = 16;
/*  1411 */                         continue;
/*  1412 */                     }
/*  1413 */                     //
/*  1414 */                     // line 42:
/*  1415 */                     //         yield chunk
/*  1416 */                     //         ^
/*  1417 */                     //
/*  1418 */                     $currLineNo = 42;
/*  1419 */                     $currColNo = 8;
/*  1420 */ 
/*  1421 */                     var $loadname209 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1422 */                     return [ /*resume*/ 20, /*ret*/ $loadname209];
/*  1423 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1424 */                 case 11:
/*  1425 */                     /* --- end of if --- */
/*  1426 */                     $blk = 4; /* jump */
/*  1427 */                     continue;
/*  1428 */                 case 15:
/*  1429 */                     /* --- after yield --- */
/*  1430 */                     //
/*  1431 */                     // line 40:
/*  1432 */                     //             chunk = []
/*  1433 */                     //             ^
/*  1434 */                     //
/*  1435 */                     $currLineNo = 40;
/*  1436 */                     $currColNo = 12;
/*  1437 */ 
/*  1438 */                     var $loadlist202 = new Sk.builtins['list']([]);
/*  1439 */                     $loc.chunk = $loadlist202;
/*  1440 */                     $blk = 11; /* jump */
/*  1441 */                     continue;
/*  1442 */                 case 16:
/*  1443 */                     /* --- end of if --- */
/*  1444 */                     return Sk.builtin.none.none$;
/*  1445 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1446 */                 case 20:
/*  1447 */                     /* --- after yield --- */
/*  1448 */                     $blk = 16; /* jump */
/*  1449 */                     continue;
/*  1450 */                 }
/*  1451 */             } catch (err) {
/*  1452 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1453 */                     err = new Sk.builtin.ExternalError(err);
/*  1454 */                 }
/*  1455 */                 err.traceback.push({
/*  1456 */                     lineno: $currLineNo,
/*  1457 */                     colno: $currColNo,
/*  1458 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*  1459 */                 });
/*  1460 */                 if ($exc.length > 0) {
/*  1461 */                     $err = err;
/*  1462 */                     $blk = $exc.pop();
/*  1463 */                     continue;
/*  1464 */                 } else {
/*  1465 */                     throw err;
/*  1466 */                 }
/*  1467 */             }
/*  1468 */         }
/*  1469 */     });
/*  1470 */     var $scope211 = (function $main212$(n, min_depth) {
/*  1471 */         var argchunk, ch, cs, d, i, long_lived_tree, max_depth, mmd, stretch_depth; /* locals */
/*  1472 */         var argchunk, argchunk, ch, ch, cs, cs, cs, cs, d, d, d, d, i, i, i, long_lived_tree, long_lived_tree, max_depth, max_depth, max_depth, max_depth, max_depth, min_depth, min_depth, min_depth, min_depth, min_depth, mmd, mmd, n, n, stretch_depth, stretch_depth, stretch_depth, stretch_depth, $loadgbl213, $binop214, $elem217, $loadgbl218, $elem219, $elem220, $loadtuple221, $loadgbl225, $loadgbl228, $iter230, $loadgbl228, $call229, $iter230, $loadgbl234, $iter236, $iter236, $loadgbl238, $loadgbl239, $loadgbl240, $loadgbl238, $loadgbl239, $loadgbl240, $call241, $elem249, $loadgbl250;
/*  1473 */         var $wakeFromSuspension = function() {
/*  1474 */             var susp = $scope211.$wakingSuspension;
/*  1475 */             delete $scope211.$wakingSuspension;
/*  1476 */             $blk = susp.$blk;
/*  1477 */             $loc = susp.$loc;
/*  1478 */             $gbl = susp.$gbl;
/*  1479 */             $exc = susp.$exc;
/*  1480 */             $err = susp.$err;
/*  1481 */             $postfinally = susp.$postfinally;
/*  1482 */             $currLineNo = susp.$lineno;
/*  1483 */             $currColNo = susp.$colno;
/*  1484 */             Sk.lastYield = Date.now();
/*  1485 */             argchunk = susp.$tmps.argchunk;
/*  1486 */             ch = susp.$tmps.ch;
/*  1487 */             cs = susp.$tmps.cs;
/*  1488 */             d = susp.$tmps.d;
/*  1489 */             i = susp.$tmps.i;
/*  1490 */             long_lived_tree = susp.$tmps.long_lived_tree;
/*  1491 */             max_depth = susp.$tmps.max_depth;
/*  1492 */             min_depth = susp.$tmps.min_depth;
/*  1493 */             mmd = susp.$tmps.mmd;
/*  1494 */             n = susp.$tmps.n;
/*  1495 */             stretch_depth = susp.$tmps.stretch_depth;
/*  1496 */             $loadgbl213 = susp.$tmps.$loadgbl213;
/*  1497 */             $binop214 = susp.$tmps.$binop214;
/*  1498 */             $elem217 = susp.$tmps.$elem217;
/*  1499 */             $loadgbl218 = susp.$tmps.$loadgbl218;
/*  1500 */             $elem219 = susp.$tmps.$elem219;
/*  1501 */             $elem220 = susp.$tmps.$elem220;
/*  1502 */             $loadtuple221 = susp.$tmps.$loadtuple221;
/*  1503 */             $loadgbl225 = susp.$tmps.$loadgbl225;
/*  1504 */             $loadgbl228 = susp.$tmps.$loadgbl228;
/*  1505 */             $iter230 = susp.$tmps.$iter230;
/*  1506 */             $call229 = susp.$tmps.$call229;
/*  1507 */             $loadgbl234 = susp.$tmps.$loadgbl234;
/*  1508 */             $iter236 = susp.$tmps.$iter236;
/*  1509 */             $loadgbl238 = susp.$tmps.$loadgbl238;
/*  1510 */             $loadgbl239 = susp.$tmps.$loadgbl239;
/*  1511 */             $loadgbl240 = susp.$tmps.$loadgbl240;
/*  1512 */             $call241 = susp.$tmps.$call241;
/*  1513 */             $elem249 = susp.$tmps.$elem249;
/*  1514 */             $loadgbl250 = susp.$tmps.$loadgbl250;
/*  1515 */             try {
/*  1516 */                 $ret = susp.child.resume();
/*  1517 */             } catch (err) {
/*  1518 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1519 */                     err = new Sk.builtin.ExternalError(err);
/*  1520 */                 }
/*  1521 */                 err.traceback.push({
/*  1522 */                     lineno: $currLineNo,
/*  1523 */                     colno: $currColNo,
/*  1524 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
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
/*  1538 */                 $scope211.$wakingSuspension = susp;
/*  1539 */                 return $scope211();
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
/*  1553 */                 "argchunk": argchunk,
/*  1554 */                 "ch": ch,
/*  1555 */                 "cs": cs,
/*  1556 */                 "d": d,
/*  1557 */                 "i": i,
/*  1558 */                 "long_lived_tree": long_lived_tree,
/*  1559 */                 "max_depth": max_depth,
/*  1560 */                 "min_depth": min_depth,
/*  1561 */                 "mmd": mmd,
/*  1562 */                 "n": n,
/*  1563 */                 "stretch_depth": stretch_depth,
/*  1564 */                 "$loadgbl213": $loadgbl213,
/*  1565 */                 "$binop214": $binop214,
/*  1566 */                 "$elem217": $elem217,
/*  1567 */                 "$loadgbl218": $loadgbl218,
/*  1568 */                 "$elem219": $elem219,
/*  1569 */                 "$elem220": $elem220,
/*  1570 */                 "$loadtuple221": $loadtuple221,
/*  1571 */                 "$loadgbl225": $loadgbl225,
/*  1572 */                 "$loadgbl228": $loadgbl228,
/*  1573 */                 "$iter230": $iter230,
/*  1574 */                 "$call229": $call229,
/*  1575 */                 "$loadgbl234": $loadgbl234,
/*  1576 */                 "$iter236": $iter236,
/*  1577 */                 "$loadgbl238": $loadgbl238,
/*  1578 */                 "$loadgbl239": $loadgbl239,
/*  1579 */                 "$loadgbl240": $loadgbl240,
/*  1580 */                 "$call241": $call241,
/*  1581 */                 "$elem249": $elem249,
/*  1582 */                 "$loadgbl250": $loadgbl250
/*  1583 */             };
/*  1584 */             return susp;
/*  1585 */         };
/*  1586 */         var $blk = 0,
/*  1587 */             $exc = [],
/*  1588 */             $loc = {},
/*  1589 */             $gbl = this,
/*  1590 */             $err = undefined,
/*  1591 */             $ret = undefined,
/*  1592 */             $postfinally = undefined,
/*  1593 */             $currLineNo = undefined,
/*  1594 */             $currColNo = undefined;
/*  1595 */         if (typeof Sk.execStart === 'undefined') {
/*  1596 */             Sk.execStart = Date.now()
/*  1597 */         }
/*  1598 */         if (typeof Sk.lastYield === 'undefined') {
/*  1599 */             Sk.lastYield = Date.now()
/*  1600 */         }
/*  1601 */         if ($scope211.$wakingSuspension !== undefined) {
/*  1602 */             $wakeFromSuspension();
/*  1603 */         } else {
/*  1604 */             if (min_depth === undefined) min_depth = $scope211.$defaults[0];
/*  1605 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 2, false, false);
/*  1606 */         }
/*  1607 */         while (true) {
/*  1608 */             try {
/*  1609 */                 var $dateNow = Date.now();
/*  1610 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1611 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1612 */                 }
/*  1613 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1614 */                     var $susp = $saveSuspension({
/*  1615 */                         data: {
/*  1616 */                             type: 'Sk.yield'
/*  1617 */                         },
/*  1618 */                         resume: function() {}
/*  1619 */                     }, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', $currLineNo, $currColNo);
/*  1620 */                     $susp.$blk = $blk;
/*  1621 */                     $susp.optional = true;
/*  1622 */                     return $susp;
/*  1623 */                 }
/*  1624 */                 switch ($blk) {
/*  1625 */                 case 0:
/*  1626 */                     /* --- codeobj entry --- */
/*  1627 */                     if (n === undefined) {
/*  1628 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1629 */                     }
/*  1630 */                     if (min_depth === undefined) {
/*  1631 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1632 */                     }
/*  1633 */                     if (min_depth === undefined) {
/*  1634 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1635 */                     }
/*  1636 */ 
/*  1637 */                     //
/*  1638 */                     // line 47:
/*  1639 */                     //     max_depth = max(min_depth + 2, n)
/*  1640 */                     //     ^
/*  1641 */                     //
/*  1642 */                     $currLineNo = 47;
/*  1643 */                     $currColNo = 4;
/*  1644 */ 
/*  1645 */                     var $loadgbl213 = Sk.misceval.loadname('max', $gbl);
/*  1646 */                     if (min_depth === undefined) {
/*  1647 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1648 */                     }
/*  1649 */                     var $binop214 = Sk.abstr.numberBinOp(min_depth, new Sk.builtin.int_(2), 'Add');
/*  1650 */                     if (n === undefined) {
/*  1651 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1652 */                     }
/*  1653 */                     $ret;
/*  1654 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl213, $binop214, n);
/*  1655 */                     $blk = 1; /* allowing case fallthrough */
/*  1656 */                 case 1:
/*  1657 */                     /* --- function return or resume suspension --- */
/*  1658 */                     if ($ret && $ret.$isSuspension) {
/*  1659 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 47, 16);
/*  1660 */                     }
/*  1661 */                     var $call215 = $ret;
/*  1662 */                     //
/*  1663 */                     // line 47:
/*  1664 */                     //     max_depth = max(min_depth + 2, n)
/*  1665 */                     //                 ^
/*  1666 */                     //
/*  1667 */                     $currLineNo = 47;
/*  1668 */                     $currColNo = 16;
/*  1669 */ 
/*  1670 */                     max_depth = $call215;
/*  1671 */                     //
/*  1672 */                     // line 48:
/*  1673 */                     //     stretch_depth = max_depth + 1
/*  1674 */                     //     ^
/*  1675 */                     //
/*  1676 */                     $currLineNo = 48;
/*  1677 */                     $currColNo = 4;
/*  1678 */ 
/*  1679 */                     if (max_depth === undefined) {
/*  1680 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1681 */                     }
/*  1682 */                     var $binop216 = Sk.abstr.numberBinOp(max_depth, new Sk.builtin.int_(1), 'Add');
/*  1683 */                     stretch_depth = $binop216;
/*  1684 */                     //
/*  1685 */                     // line 50:
/*  1686 */                     //     print(stretch_depth, make_check((0, stretch_depth)))
/*  1687 */                     //     ^
/*  1688 */                     //
/*  1689 */                     $currLineNo = 50;
/*  1690 */                     $currColNo = 4;
/*  1691 */ 
/*  1692 */                     if (stretch_depth === undefined) {
/*  1693 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1694 */                     }
/*  1695 */                     var $elem217 = stretch_depth;
/*  1696 */                     var $loadgbl218 = Sk.misceval.loadname('make_check', $gbl);
/*  1697 */                     var $elem219 = new Sk.builtin.int_(0);
/*  1698 */                     if (stretch_depth === undefined) {
/*  1699 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1700 */                     }
/*  1701 */                     var $elem220 = stretch_depth;
/*  1702 */                     var $loadtuple221 = new Sk.builtins['tuple']([$elem219, $elem220]);
/*  1703 */                     $ret;
/*  1704 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl218, $loadtuple221);
/*  1705 */                     $blk = 2; /* allowing case fallthrough */
/*  1706 */                 case 2:
/*  1707 */                     /* --- function return or resume suspension --- */
/*  1708 */                     if ($ret && $ret.$isSuspension) {
/*  1709 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 50, 25);
/*  1710 */                     }
/*  1711 */                     var $call222 = $ret;
/*  1712 */                     //
/*  1713 */                     // line 50:
/*  1714 */                     //     print(stretch_depth, make_check((0, stretch_depth)))
/*  1715 */                     //                          ^
/*  1716 */                     //
/*  1717 */                     $currLineNo = 50;
/*  1718 */                     $currColNo = 25;
/*  1719 */ 
/*  1720 */                     var $elem223 = $call222;
/*  1721 */                     var $loadtuple224 = new Sk.builtins['tuple']([$elem217, $elem223]);
/*  1722 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple224).v);
/*  1723 */                     Sk.misceval.print_("\n");
/*  1724 */                     //
/*  1725 */                     // line 52:
/*  1726 */                     //     long_lived_tree = make_tree(0, max_depth)
/*  1727 */                     //     ^
/*  1728 */                     //
/*  1729 */                     $currLineNo = 52;
/*  1730 */                     $currColNo = 4;
/*  1731 */ 
/*  1732 */                     var $loadgbl225 = Sk.misceval.loadname('make_tree', $gbl);
/*  1733 */                     if (max_depth === undefined) {
/*  1734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1735 */                     }
/*  1736 */                     $ret;
/*  1737 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl225, new Sk.builtin.int_(0), max_depth);
/*  1738 */                     $blk = 3; /* allowing case fallthrough */
/*  1739 */                 case 3:
/*  1740 */                     /* --- function return or resume suspension --- */
/*  1741 */                     if ($ret && $ret.$isSuspension) {
/*  1742 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 52, 22);
/*  1743 */                     }
/*  1744 */                     var $call226 = $ret;
/*  1745 */                     //
/*  1746 */                     // line 52:
/*  1747 */                     //     long_lived_tree = make_tree(0, max_depth)
/*  1748 */                     //                       ^
/*  1749 */                     //
/*  1750 */                     $currLineNo = 52;
/*  1751 */                     $currColNo = 22;
/*  1752 */ 
/*  1753 */                     long_lived_tree = $call226;
/*  1754 */                     //
/*  1755 */                     // line 54:
/*  1756 */                     //     mmd = max_depth + min_depth
/*  1757 */                     //     ^
/*  1758 */                     //
/*  1759 */                     $currLineNo = 54;
/*  1760 */                     $currColNo = 4;
/*  1761 */ 
/*  1762 */                     if (max_depth === undefined) {
/*  1763 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1764 */                     }
/*  1765 */                     if (min_depth === undefined) {
/*  1766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1767 */                     }
/*  1768 */                     var $binop227 = Sk.abstr.numberBinOp(max_depth, min_depth, 'Add');
/*  1769 */                     mmd = $binop227;
/*  1770 */                     //
/*  1771 */                     // line 55:
/*  1772 */                     //     for d in range(min_depth, stretch_depth, 2):
/*  1773 */                     //     ^
/*  1774 */                     //
/*  1775 */                     $currLineNo = 55;
/*  1776 */                     $currColNo = 4;
/*  1777 */ 
/*  1778 */                     var $loadgbl228 = Sk.misceval.loadname('range', $gbl);
/*  1779 */                     if (min_depth === undefined) {
/*  1780 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1781 */                     }
/*  1782 */                     if (stretch_depth === undefined) {
/*  1783 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1784 */                     }
/*  1785 */                     $ret;
/*  1786 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl228, min_depth, stretch_depth, new Sk.builtin.int_(2));
/*  1787 */                     $blk = 7; /* allowing case fallthrough */
/*  1788 */                 case 7:
/*  1789 */                     /* --- function return or resume suspension --- */
/*  1790 */                     if ($ret && $ret.$isSuspension) {
/*  1791 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 55, 13);
/*  1792 */                     }
/*  1793 */                     var $call229 = $ret;
/*  1794 */                     //
/*  1795 */                     // line 55:
/*  1796 */                     //     for d in range(min_depth, stretch_depth, 2):
/*  1797 */                     //              ^
/*  1798 */                     //
/*  1799 */                     $currLineNo = 55;
/*  1800 */                     $currColNo = 13;
/*  1801 */ 
/*  1802 */                     var $iter230 = Sk.abstr.iter($call229);
/*  1803 */                     $blk = 4; /* allowing case fallthrough */
/*  1804 */                 case 4:
/*  1805 */                     /* --- for start --- */
/*  1806 */                     $ret = Sk.abstr.iternext($iter230, true);
/*  1807 */                     $blk = 8; /* allowing case fallthrough */
/*  1808 */                 case 8:
/*  1809 */                     /* --- function return or resume suspension --- */
/*  1810 */                     if ($ret && $ret.$isSuspension) {
/*  1811 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 55, 4);
/*  1812 */                     }
/*  1813 */                     var $next231 = $ret;
/*  1814 */                     if ($next231 === undefined) {
/*  1815 */                         $blk = 5;
/*  1816 */                         continue;
/*  1817 */                     }
/*  1818 */                     d = $next231;
/*  1819 */                     //
/*  1820 */                     // line 56:
/*  1821 */                     //         i = 2 ** (mmd - d)
/*  1822 */                     //         ^
/*  1823 */                     //
/*  1824 */                     $currLineNo = 56;
/*  1825 */                     $currColNo = 8;
/*  1826 */ 
/*  1827 */                     if (mmd === undefined) {
/*  1828 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mmd\' referenced before assignment');
/*  1829 */                     }
/*  1830 */                     if (d === undefined) {
/*  1831 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  1832 */                     }
/*  1833 */                     var $binop232 = Sk.abstr.numberBinOp(mmd, d, 'Sub');
/*  1834 */                     var $binop233 = Sk.abstr.numberBinOp(new Sk.builtin.int_(2), $binop232, 'Pow');
/*  1835 */                     i = $binop233;
/*  1836 */                     //
/*  1837 */                     // line 57:
/*  1838 */                     //         cs = 0
/*  1839 */                     //         ^
/*  1840 */                     //
/*  1841 */                     $currLineNo = 57;
/*  1842 */                     $currColNo = 8;
/*  1843 */ 
/*  1844 */                     cs = new Sk.builtin.int_(0);
/*  1845 */                     //
/*  1846 */                     // line 58:
/*  1847 */                     //         ch = get_argchunks(i, d)
/*  1848 */                     //         ^
/*  1849 */                     //
/*  1850 */                     $currLineNo = 58;
/*  1851 */                     $currColNo = 8;
/*  1852 */ 
/*  1853 */                     var $loadgbl234 = Sk.misceval.loadname('get_argchunks', $gbl);
/*  1854 */                     if (i === undefined) {
/*  1855 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1856 */                     }
/*  1857 */                     if (d === undefined) {
/*  1858 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  1859 */                     }
/*  1860 */                     $ret;
/*  1861 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl234, i, d);
/*  1862 */                     $blk = 9; /* allowing case fallthrough */
/*  1863 */                 case 9:
/*  1864 */                     /* --- function return or resume suspension --- */
/*  1865 */                     if ($ret && $ret.$isSuspension) {
/*  1866 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 58, 13);
/*  1867 */                     }
/*  1868 */                     var $call235 = $ret;
/*  1869 */                     //
/*  1870 */                     // line 58:
/*  1871 */                     //         ch = get_argchunks(i, d)
/*  1872 */                     //              ^
/*  1873 */                     //
/*  1874 */                     $currLineNo = 58;
/*  1875 */                     $currColNo = 13;
/*  1876 */ 
/*  1877 */                     ch = $call235;
/*  1878 */                     //
/*  1879 */                     // line 59:
/*  1880 */                     //         for argchunk in ch:
/*  1881 */                     //         ^
/*  1882 */                     //
/*  1883 */                     $currLineNo = 59;
/*  1884 */                     $currColNo = 8;
/*  1885 */ 
/*  1886 */                     if (ch === undefined) {
/*  1887 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ch\' referenced before assignment');
/*  1888 */                     }
/*  1889 */                     var $iter236 = Sk.abstr.iter(ch);
/*  1890 */                     $blk = 10; /* allowing case fallthrough */
/*  1891 */                 case 10:
/*  1892 */                     /* --- for start --- */
/*  1893 */                     $ret = Sk.abstr.iternext($iter236, true);
/*  1894 */                     $blk = 13; /* allowing case fallthrough */
/*  1895 */                 case 13:
/*  1896 */                     /* --- function return or resume suspension --- */
/*  1897 */                     if ($ret && $ret.$isSuspension) {
/*  1898 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 59, 8);
/*  1899 */                     }
/*  1900 */                     var $next237 = $ret;
/*  1901 */                     if ($next237 === undefined) {
/*  1902 */                         $blk = 11;
/*  1903 */                         continue;
/*  1904 */                     }
/*  1905 */                     argchunk = $next237;
/*  1906 */                     //
/*  1907 */                     // line 60:
/*  1908 */                     //             cs += sum(map(make_check, argchunk))
/*  1909 */                     //             ^
/*  1910 */                     //
/*  1911 */                     $currLineNo = 60;
/*  1912 */                     $currColNo = 12;
/*  1913 */ 
/*  1914 */                     if (cs === undefined) {
/*  1915 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cs\' referenced before assignment');
/*  1916 */                     }
/*  1917 */                     var $loadgbl238 = Sk.misceval.loadname('sum', $gbl);
/*  1918 */                     var $loadgbl239 = Sk.misceval.loadname('map', $gbl);
/*  1919 */                     var $loadgbl240 = Sk.misceval.loadname('make_check', $gbl);
/*  1920 */                     if (argchunk === undefined) {
/*  1921 */                         throw new Sk.builtin.UnboundLocalError('local variable \'argchunk\' referenced before assignment');
/*  1922 */                     }
/*  1923 */                     $ret;
/*  1924 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl239, $loadgbl240, argchunk);
/*  1925 */                     $blk = 14; /* allowing case fallthrough */
/*  1926 */                 case 14:
/*  1927 */                     /* --- function return or resume suspension --- */
/*  1928 */                     if ($ret && $ret.$isSuspension) {
/*  1929 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 60, 22);
/*  1930 */                     }
/*  1931 */                     var $call241 = $ret;
/*  1932 */                     //
/*  1933 */                     // line 60:
/*  1934 */                     //             cs += sum(map(make_check, argchunk))
/*  1935 */                     //                       ^
/*  1936 */                     //
/*  1937 */                     $currLineNo = 60;
/*  1938 */                     $currColNo = 22;
/*  1939 */ 
/*  1940 */                     $ret;
/*  1941 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl238, $call241);
/*  1942 */                     $blk = 15; /* allowing case fallthrough */
/*  1943 */                 case 15:
/*  1944 */                     /* --- function return or resume suspension --- */
/*  1945 */                     if ($ret && $ret.$isSuspension) {
/*  1946 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 60, 18);
/*  1947 */                     }
/*  1948 */                     var $call242 = $ret;
/*  1949 */                     //
/*  1950 */                     // line 60:
/*  1951 */                     //             cs += sum(map(make_check, argchunk))
/*  1952 */                     //                   ^
/*  1953 */                     //
/*  1954 */                     $currLineNo = 60;
/*  1955 */                     $currColNo = 18;
/*  1956 */ 
/*  1957 */                     var $inplbinop243 = Sk.abstr.numberInplaceBinOp(cs, $call242, 'Add');
/*  1958 */                     cs = $inplbinop243;
/*  1959 */                     $blk = 10; /* jump */
/*  1960 */                     continue;
/*  1961 */                 case 5:
/*  1962 */                     /* --- for cleanup --- */
/*  1963 */                     $blk = 6; /* allowing case fallthrough */
/*  1964 */                 case 6:
/*  1965 */                     /* --- for end --- */
/*  1966 */                     //
/*  1967 */                     // line 63:
/*  1968 */                     //     print(max_depth, check_tree(long_lived_tree))
/*  1969 */                     //     ^
/*  1970 */                     //
/*  1971 */                     $currLineNo = 63;
/*  1972 */                     $currColNo = 4;
/*  1973 */ 
/*  1974 */                     if (max_depth === undefined) {
/*  1975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1976 */                     }
/*  1977 */                     var $elem249 = max_depth;
/*  1978 */                     var $loadgbl250 = Sk.misceval.loadname('check_tree', $gbl);
/*  1979 */                     if (long_lived_tree === undefined) {
/*  1980 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  1981 */                     }
/*  1982 */                     $ret;
/*  1983 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl250, long_lived_tree);
/*  1984 */                     $blk = 16; /* allowing case fallthrough */
/*  1985 */                 case 16:
/*  1986 */                     /* --- function return or resume suspension --- */
/*  1987 */                     if ($ret && $ret.$isSuspension) {
/*  1988 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 63, 21);
/*  1989 */                     }
/*  1990 */                     var $call251 = $ret;
/*  1991 */                     //
/*  1992 */                     // line 63:
/*  1993 */                     //     print(max_depth, check_tree(long_lived_tree))
/*  1994 */                     //                      ^
/*  1995 */                     //
/*  1996 */                     $currLineNo = 63;
/*  1997 */                     $currColNo = 21;
/*  1998 */ 
/*  1999 */                     var $elem252 = $call251;
/*  2000 */                     var $loadtuple253 = new Sk.builtins['tuple']([$elem249, $elem252]);
/*  2001 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple253).v);
/*  2002 */                     Sk.misceval.print_("\n");
/*  2003 */                     return Sk.builtin.none.none$;
/*  2004 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2005 */                 case 11:
/*  2006 */                     /* --- for cleanup --- */
/*  2007 */                     $blk = 12; /* allowing case fallthrough */
/*  2008 */                 case 12:
/*  2009 */                     /* --- for end --- */
/*  2010 */                     //
/*  2011 */                     // line 61:
/*  2012 */                     //         print(i * 2, d, cs)
/*  2013 */                     //         ^
/*  2014 */                     //
/*  2015 */                     $currLineNo = 61;
/*  2016 */                     $currColNo = 8;
/*  2017 */ 
/*  2018 */                     if (i === undefined) {
/*  2019 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  2020 */                     }
/*  2021 */                     var $binop244 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(2), 'Mult');
/*  2022 */                     var $elem245 = $binop244;
/*  2023 */                     if (d === undefined) {
/*  2024 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  2025 */                     }
/*  2026 */                     var $elem246 = d;
/*  2027 */                     if (cs === undefined) {
/*  2028 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cs\' referenced before assignment');
/*  2029 */                     }
/*  2030 */                     var $elem247 = cs;
/*  2031 */                     var $loadtuple248 = new Sk.builtins['tuple']([$elem245, $elem246, $elem247]);
/*  2032 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple248).v);
/*  2033 */                     Sk.misceval.print_("\n");
/*  2034 */                     $blk = 4; /* jump */
/*  2035 */                     continue;
/*  2036 */                 }
/*  2037 */             } catch (err) {
/*  2038 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2039 */                     err = new Sk.builtin.ExternalError(err);
/*  2040 */                 }
/*  2041 */                 err.traceback.push({
/*  2042 */                     lineno: $currLineNo,
/*  2043 */                     colno: $currColNo,
/*  2044 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*  2045 */                 });
/*  2046 */                 if ($exc.length > 0) {
/*  2047 */                     $err = err;
/*  2048 */                     $blk = $exc.pop();
/*  2049 */                     continue;
/*  2050 */                 } else {
/*  2051 */                     throw err;
/*  2052 */                 }
/*  2053 */             }
/*  2054 */         }
/*  2055 */     });
/*  2056 */     return $scope120;
/*  2057 */ }();
