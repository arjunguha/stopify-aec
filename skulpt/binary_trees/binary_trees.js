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
/*    90 */                     // line 8:
/*    91 */                     // def make_tree(i, d):
/*    92 */                     // ^
/*    93 */                     //
/*    94 */                     $currLineNo = 8;
/*    95 */                     $currColNo = 0;
/*    96 */ 
/*    97 */                     $scope121.co_name = new Sk.builtins['str']('make_tree');
/*    98 */                     $scope121.co_varnames = ['i', 'd'];
/*    99 */                     var $funcobj141 = new Sk.builtins['function']($scope121, $gbl);
/*   100 */                     $loc.make_tree = $funcobj141;
/*   101 */                     //
/*   102 */                     // line 17:
/*   103 */                     // def check_tree(node):
/*   104 */                     // ^
/*   105 */                     //
/*   106 */                     $currLineNo = 17;
/*   107 */                     $currColNo = 0;
/*   108 */ 
/*   109 */                     $scope142.co_name = new Sk.builtins['str']('check_tree');
/*   110 */                     $scope142.co_varnames = ['node'];
/*   111 */                     var $funcobj154 = new Sk.builtins['function']($scope142, $gbl);
/*   112 */                     $loc.check_tree = $funcobj154;
/*   113 */                     //
/*   114 */                     // line 26:
/*   115 */                     // def make_check(itde, make=make_tree, check=check_tree):
/*   116 */                     // ^
/*   117 */                     //
/*   118 */                     $currLineNo = 26;
/*   119 */                     $currColNo = 0;
/*   120 */ 
/*   121 */                     var $loadname155 = $loc.make_tree !== undefined ? $loc.make_tree : Sk.misceval.loadname('make_tree', $gbl);;
/*   122 */                     var $loadname156 = $loc.check_tree !== undefined ? $loc.check_tree : Sk.misceval.loadname('check_tree', $gbl);;
/*   123 */                     $scope157.co_name = new Sk.builtins['str']('make_check');
/*   124 */                     $scope157.$defaults = [$loadname155, $loadname156];
/*   125 */                     $scope157.co_varnames = ['itde', 'make', 'check'];
/*   126 */                     var $funcobj162 = new Sk.builtins['function']($scope157, $gbl);
/*   127 */                     $loc.make_check = $funcobj162;
/*   128 */                     //
/*   129 */                     // line 32:
/*   130 */                     // def get_argchunks(i, d, chunksize=5000):
/*   131 */                     // ^
/*   132 */                     //
/*   133 */                     $currLineNo = 32;
/*   134 */                     $currColNo = 0;
/*   135 */ 
/*   136 */                     $scope163.co_name = new Sk.builtins['str']('get_argchunks');
/*   137 */                     $scope163.$defaults = [new Sk.builtin.int_(5000)];
/*   138 */                     $scope163.co_varnames = ['i', 'd', 'chunksize'];
/*   139 */                     var $gener210 = new Sk.builtins['function']((function() {
/*   140 */                         var $origargs = Array.prototype.slice.call(arguments);
/*   141 */                         Sk.builtin.pyCheckArgs("get_argchunks", arguments, 2, 3);
/*   142 */                         return new Sk.builtins['generator']($scope163, $gbl, $origargs);
/*   143 */                     }));
/*   144 */                     $loc.get_argchunks = $gener210;
/*   145 */                     //
/*   146 */                     // line 45:
/*   147 */                     // def main(n, min_depth=4):
/*   148 */                     // ^
/*   149 */                     //
/*   150 */                     $currLineNo = 45;
/*   151 */                     $currColNo = 0;
/*   152 */ 
/*   153 */                     $scope211.co_name = new Sk.builtins['str']('main');
/*   154 */                     $scope211.$defaults = [new Sk.builtin.int_(4)];
/*   155 */                     $scope211.co_varnames = ['n', 'min_depth'];
/*   156 */                     var $funcobj254 = new Sk.builtins['function']($scope211, $gbl);
/*   157 */                     $loc.main = $funcobj254;
/*   158 */                     //
/*   159 */                     // line 65:
/*   160 */                     // main(12)
/*   161 */                     // ^
/*   162 */                     //
/*   163 */                     $currLineNo = 65;
/*   164 */                     $currColNo = 0;
/*   165 */ 
/*   166 */                     var $loadname255 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   167 */                     $ret;
/*   168 */                     $ret = Sk.misceval.callsimOrSuspend($loadname255, new Sk.builtin.int_(12));
/*   169 */                     $blk = 1; /* allowing case fallthrough */
/*   170 */                 case 1:
/*   171 */                     /* --- function return or resume suspension --- */
/*   172 */                     if ($ret && $ret.$isSuspension) {
/*   173 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 65, 0);
/*   174 */                     }
/*   175 */                     var $call256 = $ret;
/*   176 */                     //
/*   177 */                     // line 65:
/*   178 */                     // main(12)
/*   179 */                     // ^
/*   180 */                     //
/*   181 */                     $currLineNo = 65;
/*   182 */                     $currColNo = 0;
/*   183 */ 
/*   184 */                     return $loc;
/*   185 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   186 */                 }
/*   187 */             } catch (err) {
/*   188 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   189 */                     err = new Sk.builtin.ExternalError(err);
/*   190 */                 }
/*   191 */                 err.traceback.push({
/*   192 */                     lineno: $currLineNo,
/*   193 */                     colno: $currColNo,
/*   194 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   195 */                 });
/*   196 */                 if ($exc.length > 0) {
/*   197 */                     $err = err;
/*   198 */                     $blk = $exc.pop();
/*   199 */                     continue;
/*   200 */                 } else {
/*   201 */                     throw err;
/*   202 */                 }
/*   203 */             }
/*   204 */         }
/*   205 */     });
/*   206 */     var $scope121 = (function $make_tree122$(i, d) {
/*   207 */         var i2; /* locals */
/*   208 */         var d, d, d, d, d, d, i, i, i, i, i, i2, i2, i2, $compareres123, $elem128, $loadgbl129, $binop130, $elem128, $loadgbl129, $binop130, $call131, $elem132, $loadgbl133;
/*   209 */         var $wakeFromSuspension = function() {
/*   210 */             var susp = $scope121.$wakingSuspension;
/*   211 */             delete $scope121.$wakingSuspension;
/*   212 */             $blk = susp.$blk;
/*   213 */             $loc = susp.$loc;
/*   214 */             $gbl = susp.$gbl;
/*   215 */             $exc = susp.$exc;
/*   216 */             $err = susp.$err;
/*   217 */             $postfinally = susp.$postfinally;
/*   218 */             $currLineNo = susp.$lineno;
/*   219 */             $currColNo = susp.$colno;
/*   220 */             Sk.lastYield = Date.now();
/*   221 */             d = susp.$tmps.d;
/*   222 */             i = susp.$tmps.i;
/*   223 */             i2 = susp.$tmps.i2;
/*   224 */             $compareres123 = susp.$tmps.$compareres123;
/*   225 */             $elem128 = susp.$tmps.$elem128;
/*   226 */             $loadgbl129 = susp.$tmps.$loadgbl129;
/*   227 */             $binop130 = susp.$tmps.$binop130;
/*   228 */             $call131 = susp.$tmps.$call131;
/*   229 */             $elem132 = susp.$tmps.$elem132;
/*   230 */             $loadgbl133 = susp.$tmps.$loadgbl133;
/*   231 */             try {
/*   232 */                 $ret = susp.child.resume();
/*   233 */             } catch (err) {
/*   234 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   235 */                     err = new Sk.builtin.ExternalError(err);
/*   236 */                 }
/*   237 */                 err.traceback.push({
/*   238 */                     lineno: $currLineNo,
/*   239 */                     colno: $currColNo,
/*   240 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   241 */                 });
/*   242 */                 if ($exc.length > 0) {
/*   243 */                     $err = err;
/*   244 */                     $blk = $exc.pop();
/*   245 */                 } else {
/*   246 */                     throw err;
/*   247 */                 }
/*   248 */             }
/*   249 */         };
/*   250 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   251 */             var susp = new Sk.misceval.Suspension();
/*   252 */             susp.child = $child;
/*   253 */             susp.resume = function() {
/*   254 */                 $scope121.$wakingSuspension = susp;
/*   255 */                 return $scope121();
/*   256 */             };
/*   257 */             susp.data = susp.child.data;
/*   258 */             susp.$blk = $blk;
/*   259 */             susp.$loc = $loc;
/*   260 */             susp.$gbl = $gbl;
/*   261 */             susp.$exc = $exc;
/*   262 */             susp.$err = $err;
/*   263 */             susp.$postfinally = $postfinally;
/*   264 */             susp.$filename = $filename;
/*   265 */             susp.$lineno = $lineno;
/*   266 */             susp.$colno = $colno;
/*   267 */             susp.optional = susp.child.optional;
/*   268 */             susp.$tmps = {
/*   269 */                 "d": d,
/*   270 */                 "i": i,
/*   271 */                 "i2": i2,
/*   272 */                 "$compareres123": $compareres123,
/*   273 */                 "$elem128": $elem128,
/*   274 */                 "$loadgbl129": $loadgbl129,
/*   275 */                 "$binop130": $binop130,
/*   276 */                 "$call131": $call131,
/*   277 */                 "$elem132": $elem132,
/*   278 */                 "$loadgbl133": $loadgbl133
/*   279 */             };
/*   280 */             return susp;
/*   281 */         };
/*   282 */         var $blk = 0,
/*   283 */             $exc = [],
/*   284 */             $loc = {},
/*   285 */             $gbl = this,
/*   286 */             $err = undefined,
/*   287 */             $ret = undefined,
/*   288 */             $postfinally = undefined,
/*   289 */             $currLineNo = undefined,
/*   290 */             $currColNo = undefined;
/*   291 */         if ($scope121.$wakingSuspension !== undefined) {
/*   292 */             $wakeFromSuspension();
/*   293 */         } else {
/*   294 */             Sk.builtin.pyCheckArgs("make_tree", arguments, 2, 2, false, false);
/*   295 */         }
/*   296 */         while (true) {
/*   297 */             try {
/*   298 */                 switch ($blk) {
/*   299 */                 case 0:
/*   300 */                     /* --- codeobj entry --- */
/*   301 */                     if (i === undefined) {
/*   302 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   303 */                     }
/*   304 */                     if (d === undefined) {
/*   305 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   306 */                     }
/*   307 */ 
/*   308 */                     //
/*   309 */                     // line 10:
/*   310 */                     //     if d > 0:
/*   311 */                     //     ^
/*   312 */                     //
/*   313 */                     $currLineNo = 10;
/*   314 */                     $currColNo = 4;
/*   315 */ 
/*   316 */                     if (d === undefined) {
/*   317 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   318 */                     }
/*   319 */                     var $compareres123 = null;
/*   320 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(d, new Sk.builtin.int_(0), 'Gt', true));
/*   321 */                     $blk = 3; /* allowing case fallthrough */
/*   322 */                 case 3:
/*   323 */                     /* --- function return or resume suspension --- */
/*   324 */                     if ($ret && $ret.$isSuspension) {
/*   325 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 10, 7);
/*   326 */                     }
/*   327 */                     $compareres123 = $ret;
/*   328 */                     var $jfalse124 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   329 */                     if ($jfalse124) { /*test failed */
/*   330 */                         $blk = 2;
/*   331 */                         continue;
/*   332 */                     }
/*   333 */                     $blk = 2; /* allowing case fallthrough */
/*   334 */                 case 2:
/*   335 */                     /* --- done --- */
/*   336 */                     var $jfalse125 = ($compareres123 === false || !Sk.misceval.isTrue($compareres123));
/*   337 */                     if ($jfalse125) { /*test failed */
/*   338 */                         $blk = 1;
/*   339 */                         continue;
/*   340 */                     }
/*   341 */                     //
/*   342 */                     // line 11:
/*   343 */                     //         i2 = i + i
/*   344 */                     //         ^
/*   345 */                     //
/*   346 */                     $currLineNo = 11;
/*   347 */                     $currColNo = 8;
/*   348 */ 
/*   349 */                     if (i === undefined) {
/*   350 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   351 */                     }
/*   352 */                     if (i === undefined) {
/*   353 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   354 */                     }
/*   355 */                     var $binop126 = Sk.abstr.numberBinOp(i, i, 'Add');
/*   356 */                     i2 = $binop126;
/*   357 */                     //
/*   358 */                     // line 12:
/*   359 */                     //         d -= 1
/*   360 */                     //         ^
/*   361 */                     //
/*   362 */                     $currLineNo = 12;
/*   363 */                     $currColNo = 8;
/*   364 */ 
/*   365 */                     if (d === undefined) {
/*   366 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   367 */                     }
/*   368 */                     var $inplbinop127 = Sk.abstr.numberInplaceBinOp(d, new Sk.builtin.int_(1), 'Sub');
/*   369 */                     d = $inplbinop127;
/*   370 */                     //
/*   371 */                     // line 13:
/*   372 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   373 */                     //         ^
/*   374 */                     //
/*   375 */                     $currLineNo = 13;
/*   376 */                     $currColNo = 8;
/*   377 */ 
/*   378 */                     if (i === undefined) {
/*   379 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   380 */                     }
/*   381 */                     var $elem128 = i;
/*   382 */                     var $loadgbl129 = Sk.misceval.loadname('make_tree', $gbl);
/*   383 */                     if (i2 === undefined) {
/*   384 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i2\' referenced before assignment');
/*   385 */                     }
/*   386 */                     var $binop130 = Sk.abstr.numberBinOp(i2, new Sk.builtin.int_(1), 'Sub');
/*   387 */                     if (d === undefined) {
/*   388 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   389 */                     }
/*   390 */                     $ret;
/*   391 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl129, $binop130, d);
/*   392 */                     $blk = 4; /* allowing case fallthrough */
/*   393 */                 case 4:
/*   394 */                     /* --- function return or resume suspension --- */
/*   395 */                     if ($ret && $ret.$isSuspension) {
/*   396 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 13, 19);
/*   397 */                     }
/*   398 */                     var $call131 = $ret;
/*   399 */                     //
/*   400 */                     // line 13:
/*   401 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   402 */                     //                    ^
/*   403 */                     //
/*   404 */                     $currLineNo = 13;
/*   405 */                     $currColNo = 19;
/*   406 */ 
/*   407 */                     var $elem132 = $call131;
/*   408 */                     var $loadgbl133 = Sk.misceval.loadname('make_tree', $gbl);
/*   409 */                     if (i2 === undefined) {
/*   410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i2\' referenced before assignment');
/*   411 */                     }
/*   412 */                     if (d === undefined) {
/*   413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   414 */                     }
/*   415 */                     $ret;
/*   416 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl133, i2, d);
/*   417 */                     $blk = 5; /* allowing case fallthrough */
/*   418 */                 case 5:
/*   419 */                     /* --- function return or resume suspension --- */
/*   420 */                     if ($ret && $ret.$isSuspension) {
/*   421 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 13, 41);
/*   422 */                     }
/*   423 */                     var $call134 = $ret;
/*   424 */                     //
/*   425 */                     // line 13:
/*   426 */                     //         return (i, make_tree(i2 - 1, d), make_tree(i2, d))
/*   427 */                     //                                          ^
/*   428 */                     //
/*   429 */                     $currLineNo = 13;
/*   430 */                     $currColNo = 41;
/*   431 */ 
/*   432 */                     var $elem135 = $call134;
/*   433 */                     var $loadtuple136 = new Sk.builtins['tuple']([$elem128, $elem132, $elem135]);
/*   434 */                     return $loadtuple136;
/*   435 */                     $blk = 1; /* allowing case fallthrough */
/*   436 */                 case 1:
/*   437 */                     /* --- end of if --- */
/*   438 */                     //
/*   439 */                     // line 14:
/*   440 */                     //     return (i, None, None)
/*   441 */                     //     ^
/*   442 */                     //
/*   443 */                     $currLineNo = 14;
/*   444 */                     $currColNo = 4;
/*   445 */ 
/*   446 */                     if (i === undefined) {
/*   447 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   448 */                     }
/*   449 */                     var $elem137 = i;
/*   450 */                     var $elem138 = Sk.builtin.none.none$;
/*   451 */                     var $elem139 = Sk.builtin.none.none$;
/*   452 */                     var $loadtuple140 = new Sk.builtins['tuple']([$elem137, $elem138, $elem139]);
/*   453 */                     return $loadtuple140;
/*   454 */                     return Sk.builtin.none.none$;
/*   455 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   456 */                 }
/*   457 */             } catch (err) {
/*   458 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   459 */                     err = new Sk.builtin.ExternalError(err);
/*   460 */                 }
/*   461 */                 err.traceback.push({
/*   462 */                     lineno: $currLineNo,
/*   463 */                     colno: $currColNo,
/*   464 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   465 */                 });
/*   466 */                 if ($exc.length > 0) {
/*   467 */                     $err = err;
/*   468 */                     $blk = $exc.pop();
/*   469 */                     continue;
/*   470 */                 } else {
/*   471 */                     throw err;
/*   472 */                 }
/*   473 */             }
/*   474 */         }
/*   475 */     });
/*   476 */     var $scope142 = (function $check_tree143$(node) {
/*   477 */         var i, l, r; /* locals */
/*   478 */         var i, i, i, l, l, l, node, node, r, r, $compareres145, $loadgbl148, $loadgbl148, $call149, $binop150, $loadgbl151;
/*   479 */         var $wakeFromSuspension = function() {
/*   480 */             var susp = $scope142.$wakingSuspension;
/*   481 */             delete $scope142.$wakingSuspension;
/*   482 */             $blk = susp.$blk;
/*   483 */             $loc = susp.$loc;
/*   484 */             $gbl = susp.$gbl;
/*   485 */             $exc = susp.$exc;
/*   486 */             $err = susp.$err;
/*   487 */             $postfinally = susp.$postfinally;
/*   488 */             $currLineNo = susp.$lineno;
/*   489 */             $currColNo = susp.$colno;
/*   490 */             Sk.lastYield = Date.now();
/*   491 */             i = susp.$tmps.i;
/*   492 */             l = susp.$tmps.l;
/*   493 */             node = susp.$tmps.node;
/*   494 */             r = susp.$tmps.r;
/*   495 */             $compareres145 = susp.$tmps.$compareres145;
/*   496 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*   497 */             $call149 = susp.$tmps.$call149;
/*   498 */             $binop150 = susp.$tmps.$binop150;
/*   499 */             $loadgbl151 = susp.$tmps.$loadgbl151;
/*   500 */             try {
/*   501 */                 $ret = susp.child.resume();
/*   502 */             } catch (err) {
/*   503 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   504 */                     err = new Sk.builtin.ExternalError(err);
/*   505 */                 }
/*   506 */                 err.traceback.push({
/*   507 */                     lineno: $currLineNo,
/*   508 */                     colno: $currColNo,
/*   509 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   510 */                 });
/*   511 */                 if ($exc.length > 0) {
/*   512 */                     $err = err;
/*   513 */                     $blk = $exc.pop();
/*   514 */                 } else {
/*   515 */                     throw err;
/*   516 */                 }
/*   517 */             }
/*   518 */         };
/*   519 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   520 */             var susp = new Sk.misceval.Suspension();
/*   521 */             susp.child = $child;
/*   522 */             susp.resume = function() {
/*   523 */                 $scope142.$wakingSuspension = susp;
/*   524 */                 return $scope142();
/*   525 */             };
/*   526 */             susp.data = susp.child.data;
/*   527 */             susp.$blk = $blk;
/*   528 */             susp.$loc = $loc;
/*   529 */             susp.$gbl = $gbl;
/*   530 */             susp.$exc = $exc;
/*   531 */             susp.$err = $err;
/*   532 */             susp.$postfinally = $postfinally;
/*   533 */             susp.$filename = $filename;
/*   534 */             susp.$lineno = $lineno;
/*   535 */             susp.$colno = $colno;
/*   536 */             susp.optional = susp.child.optional;
/*   537 */             susp.$tmps = {
/*   538 */                 "i": i,
/*   539 */                 "l": l,
/*   540 */                 "node": node,
/*   541 */                 "r": r,
/*   542 */                 "$compareres145": $compareres145,
/*   543 */                 "$loadgbl148": $loadgbl148,
/*   544 */                 "$call149": $call149,
/*   545 */                 "$binop150": $binop150,
/*   546 */                 "$loadgbl151": $loadgbl151
/*   547 */             };
/*   548 */             return susp;
/*   549 */         };
/*   550 */         var $blk = 0,
/*   551 */             $exc = [],
/*   552 */             $loc = {},
/*   553 */             $gbl = this,
/*   554 */             $err = undefined,
/*   555 */             $ret = undefined,
/*   556 */             $postfinally = undefined,
/*   557 */             $currLineNo = undefined,
/*   558 */             $currColNo = undefined;
/*   559 */         if ($scope142.$wakingSuspension !== undefined) {
/*   560 */             $wakeFromSuspension();
/*   561 */         } else {
/*   562 */             Sk.builtin.pyCheckArgs("check_tree", arguments, 1, 1, false, false);
/*   563 */         }
/*   564 */         while (true) {
/*   565 */             try {
/*   566 */                 switch ($blk) {
/*   567 */                 case 0:
/*   568 */                     /* --- codeobj entry --- */
/*   569 */                     if (node === undefined) {
/*   570 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*   571 */                     }
/*   572 */ 
/*   573 */                     //
/*   574 */                     // line 19:
/*   575 */                     //     (i, l, r) = node
/*   576 */                     //     ^
/*   577 */                     //
/*   578 */                     $currLineNo = 19;
/*   579 */                     $currColNo = 4;
/*   580 */ 
/*   581 */                     if (node === undefined) {
/*   582 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*   583 */                     }
/*   584 */                     var $items144 = Sk.abstr.sequenceUnpack(node, 3);
/*   585 */                     i = $items144[0];
/*   586 */                     l = $items144[1];
/*   587 */                     r = $items144[2];
/*   588 */                     //
/*   589 */                     // line 20:
/*   590 */                     //     if l is None:
/*   591 */                     //     ^
/*   592 */                     //
/*   593 */                     $currLineNo = 20;
/*   594 */                     $currColNo = 4;
/*   595 */ 
/*   596 */                     if (l === undefined) {
/*   597 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   598 */                     }
/*   599 */                     var $compareres145 = null;
/*   600 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(l, Sk.builtin.none.none$, 'Is', true));
/*   601 */                     $blk = 4; /* allowing case fallthrough */
/*   602 */                 case 4:
/*   603 */                     /* --- function return or resume suspension --- */
/*   604 */                     if ($ret && $ret.$isSuspension) {
/*   605 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 20, 7);
/*   606 */                     }
/*   607 */                     $compareres145 = $ret;
/*   608 */                     var $jfalse146 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   609 */                     if ($jfalse146) { /*test failed */
/*   610 */                         $blk = 3;
/*   611 */                         continue;
/*   612 */                     }
/*   613 */                     $blk = 3; /* allowing case fallthrough */
/*   614 */                 case 3:
/*   615 */                     /* --- done --- */
/*   616 */                     var $jfalse147 = ($compareres145 === false || !Sk.misceval.isTrue($compareres145));
/*   617 */                     if ($jfalse147) { /*test failed */
/*   618 */                         $blk = 2;
/*   619 */                         continue;
/*   620 */                     }
/*   621 */                     //
/*   622 */                     // line 21:
/*   623 */                     //         return i
/*   624 */                     //         ^
/*   625 */                     //
/*   626 */                     $currLineNo = 21;
/*   627 */                     $currColNo = 8;
/*   628 */ 
/*   629 */                     if (i === undefined) {
/*   630 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   631 */                     }
/*   632 */                     return i;
/*   633 */                     $blk = 1; /* allowing case fallthrough */
/*   634 */                 case 1:
/*   635 */                     /* --- end of if --- */
/*   636 */                     return Sk.builtin.none.none$;
/*   637 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   638 */                 case 2:
/*   639 */                     /* --- next branch of if --- */
/*   640 */                     //
/*   641 */                     // line 23:
/*   642 */                     //         return i + check_tree(l) - check_tree(r)
/*   643 */                     //         ^
/*   644 */                     //
/*   645 */                     $currLineNo = 23;
/*   646 */                     $currColNo = 8;
/*   647 */ 
/*   648 */                     if (i === undefined) {
/*   649 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   650 */                     }
/*   651 */                     var $loadgbl148 = Sk.misceval.loadname('check_tree', $gbl);
/*   652 */                     if (l === undefined) {
/*   653 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   654 */                     }
/*   655 */                     $ret;
/*   656 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, l);
/*   657 */                     $blk = 5; /* allowing case fallthrough */
/*   658 */                 case 5:
/*   659 */                     /* --- function return or resume suspension --- */
/*   660 */                     if ($ret && $ret.$isSuspension) {
/*   661 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 23, 19);
/*   662 */                     }
/*   663 */                     var $call149 = $ret;
/*   664 */                     //
/*   665 */                     // line 23:
/*   666 */                     //         return i + check_tree(l) - check_tree(r)
/*   667 */                     //                    ^
/*   668 */                     //
/*   669 */                     $currLineNo = 23;
/*   670 */                     $currColNo = 19;
/*   671 */ 
/*   672 */                     var $binop150 = Sk.abstr.numberBinOp(i, $call149, 'Add');
/*   673 */                     var $loadgbl151 = Sk.misceval.loadname('check_tree', $gbl);
/*   674 */                     if (r === undefined) {
/*   675 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*   676 */                     }
/*   677 */                     $ret;
/*   678 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl151, r);
/*   679 */                     $blk = 6; /* allowing case fallthrough */
/*   680 */                 case 6:
/*   681 */                     /* --- function return or resume suspension --- */
/*   682 */                     if ($ret && $ret.$isSuspension) {
/*   683 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 23, 35);
/*   684 */                     }
/*   685 */                     var $call152 = $ret;
/*   686 */                     //
/*   687 */                     // line 23:
/*   688 */                     //         return i + check_tree(l) - check_tree(r)
/*   689 */                     //                                    ^
/*   690 */                     //
/*   691 */                     $currLineNo = 23;
/*   692 */                     $currColNo = 35;
/*   693 */ 
/*   694 */                     var $binop153 = Sk.abstr.numberBinOp($binop150, $call152, 'Sub');
/*   695 */                     return $binop153;
/*   696 */                     $blk = 1; /* jump */
/*   697 */                     continue;
/*   698 */                 }
/*   699 */             } catch (err) {
/*   700 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   701 */                     err = new Sk.builtin.ExternalError(err);
/*   702 */                 }
/*   703 */                 err.traceback.push({
/*   704 */                     lineno: $currLineNo,
/*   705 */                     colno: $currColNo,
/*   706 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   707 */                 });
/*   708 */                 if ($exc.length > 0) {
/*   709 */                     $err = err;
/*   710 */                     $blk = $exc.pop();
/*   711 */                     continue;
/*   712 */                 } else {
/*   713 */                     throw err;
/*   714 */                 }
/*   715 */             }
/*   716 */         }
/*   717 */     });
/*   718 */     var $scope157 = (function $make_check158$(itde, make, check) {
/*   719 */         var d, i; /* locals */
/*   720 */         var check, check, check, d, d, i, i, itde, itde, make, make, make, $call160;
/*   721 */         var $wakeFromSuspension = function() {
/*   722 */             var susp = $scope157.$wakingSuspension;
/*   723 */             delete $scope157.$wakingSuspension;
/*   724 */             $blk = susp.$blk;
/*   725 */             $loc = susp.$loc;
/*   726 */             $gbl = susp.$gbl;
/*   727 */             $exc = susp.$exc;
/*   728 */             $err = susp.$err;
/*   729 */             $postfinally = susp.$postfinally;
/*   730 */             $currLineNo = susp.$lineno;
/*   731 */             $currColNo = susp.$colno;
/*   732 */             Sk.lastYield = Date.now();
/*   733 */             check = susp.$tmps.check;
/*   734 */             d = susp.$tmps.d;
/*   735 */             i = susp.$tmps.i;
/*   736 */             itde = susp.$tmps.itde;
/*   737 */             make = susp.$tmps.make;
/*   738 */             $call160 = susp.$tmps.$call160;
/*   739 */             try {
/*   740 */                 $ret = susp.child.resume();
/*   741 */             } catch (err) {
/*   742 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   743 */                     err = new Sk.builtin.ExternalError(err);
/*   744 */                 }
/*   745 */                 err.traceback.push({
/*   746 */                     lineno: $currLineNo,
/*   747 */                     colno: $currColNo,
/*   748 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   749 */                 });
/*   750 */                 if ($exc.length > 0) {
/*   751 */                     $err = err;
/*   752 */                     $blk = $exc.pop();
/*   753 */                 } else {
/*   754 */                     throw err;
/*   755 */                 }
/*   756 */             }
/*   757 */         };
/*   758 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   759 */             var susp = new Sk.misceval.Suspension();
/*   760 */             susp.child = $child;
/*   761 */             susp.resume = function() {
/*   762 */                 $scope157.$wakingSuspension = susp;
/*   763 */                 return $scope157();
/*   764 */             };
/*   765 */             susp.data = susp.child.data;
/*   766 */             susp.$blk = $blk;
/*   767 */             susp.$loc = $loc;
/*   768 */             susp.$gbl = $gbl;
/*   769 */             susp.$exc = $exc;
/*   770 */             susp.$err = $err;
/*   771 */             susp.$postfinally = $postfinally;
/*   772 */             susp.$filename = $filename;
/*   773 */             susp.$lineno = $lineno;
/*   774 */             susp.$colno = $colno;
/*   775 */             susp.optional = susp.child.optional;
/*   776 */             susp.$tmps = {
/*   777 */                 "check": check,
/*   778 */                 "d": d,
/*   779 */                 "i": i,
/*   780 */                 "itde": itde,
/*   781 */                 "make": make,
/*   782 */                 "$call160": $call160
/*   783 */             };
/*   784 */             return susp;
/*   785 */         };
/*   786 */         var $blk = 0,
/*   787 */             $exc = [],
/*   788 */             $loc = {},
/*   789 */             $gbl = this,
/*   790 */             $err = undefined,
/*   791 */             $ret = undefined,
/*   792 */             $postfinally = undefined,
/*   793 */             $currLineNo = undefined,
/*   794 */             $currColNo = undefined;
/*   795 */         if ($scope157.$wakingSuspension !== undefined) {
/*   796 */             $wakeFromSuspension();
/*   797 */         } else {
/*   798 */             if (make === undefined) make = $scope157.$defaults[0];
/*   799 */             if (check === undefined) check = $scope157.$defaults[1];
/*   800 */             Sk.builtin.pyCheckArgs("make_check", arguments, 1, 3, false, false);
/*   801 */         }
/*   802 */         while (true) {
/*   803 */             try {
/*   804 */                 switch ($blk) {
/*   805 */                 case 0:
/*   806 */                     /* --- codeobj entry --- */
/*   807 */                     if (itde === undefined) {
/*   808 */                         throw new Sk.builtin.UnboundLocalError('local variable \'itde\' referenced before assignment');
/*   809 */                     }
/*   810 */                     if (make === undefined) {
/*   811 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   812 */                     }
/*   813 */                     if (check === undefined) {
/*   814 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   815 */                     }
/*   816 */                     if (make === undefined) {
/*   817 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   818 */                     }
/*   819 */                     if (check === undefined) {
/*   820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   821 */                     }
/*   822 */ 
/*   823 */                     //
/*   824 */                     // line 28:
/*   825 */                     //     i, d = itde
/*   826 */                     //     ^
/*   827 */                     //
/*   828 */                     $currLineNo = 28;
/*   829 */                     $currColNo = 4;
/*   830 */ 
/*   831 */                     if (itde === undefined) {
/*   832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'itde\' referenced before assignment');
/*   833 */                     }
/*   834 */                     var $items159 = Sk.abstr.sequenceUnpack(itde, 2);
/*   835 */                     i = $items159[0];
/*   836 */                     d = $items159[1];
/*   837 */                     //
/*   838 */                     // line 29:
/*   839 */                     //     return check(make(i, d))
/*   840 */                     //     ^
/*   841 */                     //
/*   842 */                     $currLineNo = 29;
/*   843 */                     $currColNo = 4;
/*   844 */ 
/*   845 */                     if (check === undefined) {
/*   846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'check\' referenced before assignment');
/*   847 */                     }
/*   848 */                     if (make === undefined) {
/*   849 */                         throw new Sk.builtin.UnboundLocalError('local variable \'make\' referenced before assignment');
/*   850 */                     }
/*   851 */                     if (i === undefined) {
/*   852 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   853 */                     }
/*   854 */                     if (d === undefined) {
/*   855 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*   856 */                     }
/*   857 */                     $ret;
/*   858 */                     $ret = Sk.misceval.callsimOrSuspend(make, i, d);
/*   859 */                     $blk = 1; /* allowing case fallthrough */
/*   860 */                 case 1:
/*   861 */                     /* --- function return or resume suspension --- */
/*   862 */                     if ($ret && $ret.$isSuspension) {
/*   863 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 29, 17);
/*   864 */                     }
/*   865 */                     var $call160 = $ret;
/*   866 */                     //
/*   867 */                     // line 29:
/*   868 */                     //     return check(make(i, d))
/*   869 */                     //                  ^
/*   870 */                     //
/*   871 */                     $currLineNo = 29;
/*   872 */                     $currColNo = 17;
/*   873 */ 
/*   874 */                     $ret;
/*   875 */                     $ret = Sk.misceval.callsimOrSuspend(check, $call160);
/*   876 */                     $blk = 2; /* allowing case fallthrough */
/*   877 */                 case 2:
/*   878 */                     /* --- function return or resume suspension --- */
/*   879 */                     if ($ret && $ret.$isSuspension) {
/*   880 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 29, 11);
/*   881 */                     }
/*   882 */                     var $call161 = $ret;
/*   883 */                     //
/*   884 */                     // line 29:
/*   885 */                     //     return check(make(i, d))
/*   886 */                     //            ^
/*   887 */                     //
/*   888 */                     $currLineNo = 29;
/*   889 */                     $currColNo = 11;
/*   890 */ 
/*   891 */                     return $call161;
/*   892 */                     return Sk.builtin.none.none$;
/*   893 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   894 */                 }
/*   895 */             } catch (err) {
/*   896 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   897 */                     err = new Sk.builtin.ExternalError(err);
/*   898 */                 }
/*   899 */                 err.traceback.push({
/*   900 */                     lineno: $currLineNo,
/*   901 */                     colno: $currColNo,
/*   902 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   903 */                 });
/*   904 */                 if ($exc.length > 0) {
/*   905 */                     $err = err;
/*   906 */                     $blk = $exc.pop();
/*   907 */                     continue;
/*   908 */                 } else {
/*   909 */                     throw err;
/*   910 */                 }
/*   911 */             }
/*   912 */         }
/*   913 */     });
/*   914 */     var $scope163 = (function $get_argchunks164$($gen) {
/*   915 */         // generator
/*   916 */         var $loadname165, $binop166, $compareres167, $loadgbl171, $loadname172, $binop173, $loadgbl171, $loadname172, $binop173, $call174, $loadname177, $loadname177, $lattr178, $loadname179, $elem180, $loadname181, $elem182, $loadtuple183, $elem184, $loadname185, $unaryop186, $elem187, $loadname188, $elem189, $loadtuple190, $elem191, $loadlist192, $loadgbl194, $loadname195, $loadgbl194, $loadname195, $call196, $compareres197, $loadname198, $loadgbl203, $loadname204, $loadgbl203, $loadname204, $call205, $compareres206;
/*   917 */         var $wakeFromSuspension = function() {
/*   918 */             var susp = $scope163.$wakingSuspension;
/*   919 */             delete $scope163.$wakingSuspension;
/*   920 */             $blk = susp.$blk;
/*   921 */             $loc = susp.$loc;
/*   922 */             $gbl = susp.$gbl;
/*   923 */             $exc = susp.$exc;
/*   924 */             $err = susp.$err;
/*   925 */             $postfinally = susp.$postfinally;
/*   926 */             $currLineNo = susp.$lineno;
/*   927 */             $currColNo = susp.$colno;
/*   928 */             Sk.lastYield = Date.now();
/*   929 */             $loadname165 = susp.$tmps.$loadname165;
/*   930 */             $binop166 = susp.$tmps.$binop166;
/*   931 */             $compareres167 = susp.$tmps.$compareres167;
/*   932 */             $loadgbl171 = susp.$tmps.$loadgbl171;
/*   933 */             $loadname172 = susp.$tmps.$loadname172;
/*   934 */             $binop173 = susp.$tmps.$binop173;
/*   935 */             $call174 = susp.$tmps.$call174;
/*   936 */             $loadname177 = susp.$tmps.$loadname177;
/*   937 */             $lattr178 = susp.$tmps.$lattr178;
/*   938 */             $loadname179 = susp.$tmps.$loadname179;
/*   939 */             $elem180 = susp.$tmps.$elem180;
/*   940 */             $loadname181 = susp.$tmps.$loadname181;
/*   941 */             $elem182 = susp.$tmps.$elem182;
/*   942 */             $loadtuple183 = susp.$tmps.$loadtuple183;
/*   943 */             $elem184 = susp.$tmps.$elem184;
/*   944 */             $loadname185 = susp.$tmps.$loadname185;
/*   945 */             $unaryop186 = susp.$tmps.$unaryop186;
/*   946 */             $elem187 = susp.$tmps.$elem187;
/*   947 */             $loadname188 = susp.$tmps.$loadname188;
/*   948 */             $elem189 = susp.$tmps.$elem189;
/*   949 */             $loadtuple190 = susp.$tmps.$loadtuple190;
/*   950 */             $elem191 = susp.$tmps.$elem191;
/*   951 */             $loadlist192 = susp.$tmps.$loadlist192;
/*   952 */             $loadgbl194 = susp.$tmps.$loadgbl194;
/*   953 */             $loadname195 = susp.$tmps.$loadname195;
/*   954 */             $call196 = susp.$tmps.$call196;
/*   955 */             $compareres197 = susp.$tmps.$compareres197;
/*   956 */             $loadname198 = susp.$tmps.$loadname198;
/*   957 */             $loadgbl203 = susp.$tmps.$loadgbl203;
/*   958 */             $loadname204 = susp.$tmps.$loadname204;
/*   959 */             $call205 = susp.$tmps.$call205;
/*   960 */             $compareres206 = susp.$tmps.$compareres206;
/*   961 */             try {
/*   962 */                 $ret = susp.child.resume();
/*   963 */             } catch (err) {
/*   964 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   965 */                     err = new Sk.builtin.ExternalError(err);
/*   966 */                 }
/*   967 */                 err.traceback.push({
/*   968 */                     lineno: $currLineNo,
/*   969 */                     colno: $currColNo,
/*   970 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*   971 */                 });
/*   972 */                 if ($exc.length > 0) {
/*   973 */                     $err = err;
/*   974 */                     $blk = $exc.pop();
/*   975 */                 } else {
/*   976 */                     throw err;
/*   977 */                 }
/*   978 */             }
/*   979 */         };
/*   980 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   981 */             var susp = new Sk.misceval.Suspension();
/*   982 */             susp.child = $child;
/*   983 */             susp.resume = function() {
/*   984 */                 $scope163.$wakingSuspension = susp;
/*   985 */                 return $scope163($gen);
/*   986 */             };
/*   987 */             susp.data = susp.child.data;
/*   988 */             susp.$blk = $blk;
/*   989 */             susp.$loc = $loc;
/*   990 */             susp.$gbl = $gbl;
/*   991 */             susp.$exc = $exc;
/*   992 */             susp.$err = $err;
/*   993 */             susp.$postfinally = $postfinally;
/*   994 */             susp.$filename = $filename;
/*   995 */             susp.$lineno = $lineno;
/*   996 */             susp.$colno = $colno;
/*   997 */             susp.optional = susp.child.optional;
/*   998 */             susp.$tmps = {
/*   999 */                 "$loadname165": $loadname165,
/*  1000 */                 "$binop166": $binop166,
/*  1001 */                 "$compareres167": $compareres167,
/*  1002 */                 "$loadgbl171": $loadgbl171,
/*  1003 */                 "$loadname172": $loadname172,
/*  1004 */                 "$binop173": $binop173,
/*  1005 */                 "$call174": $call174,
/*  1006 */                 "$loadname177": $loadname177,
/*  1007 */                 "$lattr178": $lattr178,
/*  1008 */                 "$loadname179": $loadname179,
/*  1009 */                 "$elem180": $elem180,
/*  1010 */                 "$loadname181": $loadname181,
/*  1011 */                 "$elem182": $elem182,
/*  1012 */                 "$loadtuple183": $loadtuple183,
/*  1013 */                 "$elem184": $elem184,
/*  1014 */                 "$loadname185": $loadname185,
/*  1015 */                 "$unaryop186": $unaryop186,
/*  1016 */                 "$elem187": $elem187,
/*  1017 */                 "$loadname188": $loadname188,
/*  1018 */                 "$elem189": $elem189,
/*  1019 */                 "$loadtuple190": $loadtuple190,
/*  1020 */                 "$elem191": $elem191,
/*  1021 */                 "$loadlist192": $loadlist192,
/*  1022 */                 "$loadgbl194": $loadgbl194,
/*  1023 */                 "$loadname195": $loadname195,
/*  1024 */                 "$call196": $call196,
/*  1025 */                 "$compareres197": $compareres197,
/*  1026 */                 "$loadname198": $loadname198,
/*  1027 */                 "$loadgbl203": $loadgbl203,
/*  1028 */                 "$loadname204": $loadname204,
/*  1029 */                 "$call205": $call205,
/*  1030 */                 "$compareres206": $compareres206
/*  1031 */             };
/*  1032 */             return susp;
/*  1033 */         };
/*  1034 */         var $blk = $gen.gi$resumeat,
/*  1035 */             $exc = [],
/*  1036 */             $loc = $gen.gi$locals,
/*  1037 */             $gbl = this,
/*  1038 */             $err = undefined,
/*  1039 */             $ret = undefined,
/*  1040 */             $postfinally = undefined,
/*  1041 */             $currLineNo = undefined,
/*  1042 */             $currColNo = undefined;
/*  1043 */         if ($scope163.$wakingSuspension !== undefined) {
/*  1044 */             $wakeFromSuspension();
/*  1045 */         } else {
/*  1046 */             if ($loc.chunksize === undefined) $loc.chunksize = $scope163.$defaults[0];
/*  1047 */         }
/*  1048 */         while (true) {
/*  1049 */             try {
/*  1050 */                 switch ($blk) {
/*  1051 */                 case 0:
/*  1052 */                     /* --- codeobj entry --- */
/*  1053 */                     //
/*  1054 */                     // line 34:
/*  1055 */                     //     assert chunksize % 2 == 0
/*  1056 */                     //     ^
/*  1057 */                     //
/*  1058 */                     $currLineNo = 34;
/*  1059 */                     $currColNo = 4;
/*  1060 */ 
/*  1061 */                     var $loadname165 = $loc.chunksize !== undefined ? $loc.chunksize : Sk.misceval.loadname('chunksize', $gbl);;
/*  1062 */                     var $binop166 = Sk.abstr.numberBinOp($loadname165, new Sk.builtin.int_(2), 'Mod');
/*  1063 */                     var $compareres167 = null;
/*  1064 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($binop166, new Sk.builtin.int_(0), 'Eq', true));
/*  1065 */                     $blk = 2; /* allowing case fallthrough */
/*  1066 */                 case 2:
/*  1067 */                     /* --- function return or resume suspension --- */
/*  1068 */                     if ($ret && $ret.$isSuspension) {
/*  1069 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 34, 11);
/*  1070 */                     }
/*  1071 */                     $compareres167 = $ret;
/*  1072 */                     var $jfalse168 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1073 */                     if ($jfalse168) { /*test failed */
/*  1074 */                         $blk = 1;
/*  1075 */                         continue;
/*  1076 */                     }
/*  1077 */                     $blk = 1; /* allowing case fallthrough */
/*  1078 */                 case 1:
/*  1079 */                     /* --- done --- */
/*  1080 */                     var $jtrue169 = ($compareres167 === true || Sk.misceval.isTrue($compareres167));
/*  1081 */                     if ($jtrue169) { /*test passed */
/*  1082 */                         $blk = 3;
/*  1083 */                         continue;
/*  1084 */                     }
/*  1085 */                     throw new Sk.builtin.AssertionError();
/*  1086 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1087 */                 case 3:
/*  1088 */                     /* --- end --- */
/*  1089 */                     //
/*  1090 */                     // line 35:
/*  1091 */                     //     chunk = []
/*  1092 */                     //     ^
/*  1093 */                     //
/*  1094 */                     $currLineNo = 35;
/*  1095 */                     $currColNo = 4;
/*  1096 */ 
/*  1097 */                     var $loadlist170 = new Sk.builtins['list']([]);
/*  1098 */                     $loc.chunk = $loadlist170;
/*  1099 */                     //
/*  1100 */                     // line 36:
/*  1101 */                     //     for k in range(1, i + 1):
/*  1102 */                     //     ^
/*  1103 */                     //
/*  1104 */                     $currLineNo = 36;
/*  1105 */                     $currColNo = 4;
/*  1106 */ 
/*  1107 */                     var $loadgbl171 = Sk.misceval.loadname('range', $gbl);
/*  1108 */                     var $loadname172 = $loc.i !== undefined ? $loc.i : Sk.misceval.loadname('i', $gbl);;
/*  1109 */                     var $binop173 = Sk.abstr.numberBinOp($loadname172, new Sk.builtin.int_(1), 'Add');
/*  1110 */                     $ret;
/*  1111 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl171, new Sk.builtin.int_(1), $binop173);
/*  1112 */                     $blk = 7; /* allowing case fallthrough */
/*  1113 */                 case 7:
/*  1114 */                     /* --- function return or resume suspension --- */
/*  1115 */                     if ($ret && $ret.$isSuspension) {
/*  1116 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 36, 13);
/*  1117 */                     }
/*  1118 */                     var $call174 = $ret;
/*  1119 */                     //
/*  1120 */                     // line 36:
/*  1121 */                     //     for k in range(1, i + 1):
/*  1122 */                     //              ^
/*  1123 */                     //
/*  1124 */                     $currLineNo = 36;
/*  1125 */                     $currColNo = 13;
/*  1126 */ 
/*  1127 */                     $loc.$iter175 = Sk.abstr.iter($call174);
/*  1128 */                     $blk = 4; /* allowing case fallthrough */
/*  1129 */                 case 4:
/*  1130 */                     /* --- for start --- */
/*  1131 */                     $ret = Sk.abstr.iternext($loc.$iter175, true);
/*  1132 */                     $blk = 8; /* allowing case fallthrough */
/*  1133 */                 case 8:
/*  1134 */                     /* --- function return or resume suspension --- */
/*  1135 */                     if ($ret && $ret.$isSuspension) {
/*  1136 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 36, 4);
/*  1137 */                     }
/*  1138 */                     var $next176 = $ret;
/*  1139 */                     if ($next176 === undefined) {
/*  1140 */                         $blk = 5;
/*  1141 */                         continue;
/*  1142 */                     }
/*  1143 */                     $loc.k = $next176;
/*  1144 */                     //
/*  1145 */                     // line 37:
/*  1146 */                     //         chunk.extend([(k, d), (-k, d)])
/*  1147 */                     //         ^
/*  1148 */                     //
/*  1149 */                     $currLineNo = 37;
/*  1150 */                     $currColNo = 8;
/*  1151 */ 
/*  1152 */                     var $loadname177 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1153 */                     $ret = Sk.abstr.gattr($loadname177, 'extend', true);
/*  1154 */                     $blk = 9; /* allowing case fallthrough */
/*  1155 */                 case 9:
/*  1156 */                     /* --- function return or resume suspension --- */
/*  1157 */                     if ($ret && $ret.$isSuspension) {
/*  1158 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 37, 8);
/*  1159 */                     }
/*  1160 */                     var $lattr178 = $ret;
/*  1161 */                     var $loadname179 = $loc.k !== undefined ? $loc.k : Sk.misceval.loadname('k', $gbl);;
/*  1162 */                     var $elem180 = $loadname179;
/*  1163 */                     var $loadname181 = $loc.d !== undefined ? $loc.d : Sk.misceval.loadname('d', $gbl);;
/*  1164 */                     var $elem182 = $loadname181;
/*  1165 */                     var $loadtuple183 = new Sk.builtins['tuple']([$elem180, $elem182]);
/*  1166 */                     var $elem184 = $loadtuple183;
/*  1167 */                     var $loadname185 = $loc.k !== undefined ? $loc.k : Sk.misceval.loadname('k', $gbl);;
/*  1168 */                     var $unaryop186 = Sk.abstr.numberUnaryOp($loadname185, 'USub');
/*  1169 */                     var $elem187 = $unaryop186;
/*  1170 */                     var $loadname188 = $loc.d !== undefined ? $loc.d : Sk.misceval.loadname('d', $gbl);;
/*  1171 */                     var $elem189 = $loadname188;
/*  1172 */                     var $loadtuple190 = new Sk.builtins['tuple']([$elem187, $elem189]);
/*  1173 */                     var $elem191 = $loadtuple190;
/*  1174 */                     var $loadlist192 = new Sk.builtins['list']([$elem184, $elem191]);
/*  1175 */                     $ret;
/*  1176 */                     $ret = Sk.misceval.callsimOrSuspend($lattr178, $loadlist192);
/*  1177 */                     $blk = 10; /* allowing case fallthrough */
/*  1178 */                 case 10:
/*  1179 */                     /* --- function return or resume suspension --- */
/*  1180 */                     if ($ret && $ret.$isSuspension) {
/*  1181 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 37, 8);
/*  1182 */                     }
/*  1183 */                     var $call193 = $ret;
/*  1184 */                     //
/*  1185 */                     // line 37:
/*  1186 */                     //         chunk.extend([(k, d), (-k, d)])
/*  1187 */                     //         ^
/*  1188 */                     //
/*  1189 */                     $currLineNo = 37;
/*  1190 */                     $currColNo = 8;
/*  1191 */ 
/*  1192 */ 
/*  1193 */                     //
/*  1194 */                     // line 38:
/*  1195 */                     //         if len(chunk) == chunksize:
/*  1196 */                     //         ^
/*  1197 */                     //
/*  1198 */                     $currLineNo = 38;
/*  1199 */                     $currColNo = 8;
/*  1200 */ 
/*  1201 */                     var $loadgbl194 = Sk.misceval.loadname('len', $gbl);
/*  1202 */                     var $loadname195 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1203 */                     $ret;
/*  1204 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl194, $loadname195);
/*  1205 */                     $blk = 12; /* allowing case fallthrough */
/*  1206 */                 case 12:
/*  1207 */                     /* --- function return or resume suspension --- */
/*  1208 */                     if ($ret && $ret.$isSuspension) {
/*  1209 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 38, 11);
/*  1210 */                     }
/*  1211 */                     var $call196 = $ret;
/*  1212 */                     //
/*  1213 */                     // line 38:
/*  1214 */                     //         if len(chunk) == chunksize:
/*  1215 */                     //            ^
/*  1216 */                     //
/*  1217 */                     $currLineNo = 38;
/*  1218 */                     $currColNo = 11;
/*  1219 */ 
/*  1220 */                     var $compareres197 = null;
/*  1221 */                     var $loadname198 = $loc.chunksize !== undefined ? $loc.chunksize : Sk.misceval.loadname('chunksize', $gbl);;
/*  1222 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call196, $loadname198, 'Eq', true));
/*  1223 */                     $blk = 14; /* allowing case fallthrough */
/*  1224 */                 case 14:
/*  1225 */                     /* --- function return or resume suspension --- */
/*  1226 */                     if ($ret && $ret.$isSuspension) {
/*  1227 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 38, 11);
/*  1228 */                     }
/*  1229 */                     $compareres197 = $ret;
/*  1230 */                     var $jfalse199 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1231 */                     if ($jfalse199) { /*test failed */
/*  1232 */                         $blk = 13;
/*  1233 */                         continue;
/*  1234 */                     }
/*  1235 */                     $blk = 13; /* allowing case fallthrough */
/*  1236 */                 case 13:
/*  1237 */                     /* --- done --- */
/*  1238 */                     var $jfalse200 = ($compareres197 === false || !Sk.misceval.isTrue($compareres197));
/*  1239 */                     if ($jfalse200) { /*test failed */
/*  1240 */                         $blk = 11;
/*  1241 */                         continue;
/*  1242 */                     }
/*  1243 */                     //
/*  1244 */                     // line 39:
/*  1245 */                     //             yield chunk
/*  1246 */                     //             ^
/*  1247 */                     //
/*  1248 */                     $currLineNo = 39;
/*  1249 */                     $currColNo = 12;
/*  1250 */ 
/*  1251 */                     var $loadname201 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1252 */                     return [ /*resume*/ 15, /*ret*/ $loadname201];
/*  1253 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1254 */                 case 5:
/*  1255 */                     /* --- for cleanup --- */
/*  1256 */                     $blk = 6; /* allowing case fallthrough */
/*  1257 */                 case 6:
/*  1258 */                     /* --- for end --- */
/*  1259 */                     //
/*  1260 */                     // line 41:
/*  1261 */                     //     if len(chunk) > 0:
/*  1262 */                     //     ^
/*  1263 */                     //
/*  1264 */                     $currLineNo = 41;
/*  1265 */                     $currColNo = 4;
/*  1266 */ 
/*  1267 */                     var $loadgbl203 = Sk.misceval.loadname('len', $gbl);
/*  1268 */                     var $loadname204 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1269 */                     $ret;
/*  1270 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl203, $loadname204);
/*  1271 */                     $blk = 17; /* allowing case fallthrough */
/*  1272 */                 case 17:
/*  1273 */                     /* --- function return or resume suspension --- */
/*  1274 */                     if ($ret && $ret.$isSuspension) {
/*  1275 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 41, 7);
/*  1276 */                     }
/*  1277 */                     var $call205 = $ret;
/*  1278 */                     //
/*  1279 */                     // line 41:
/*  1280 */                     //     if len(chunk) > 0:
/*  1281 */                     //        ^
/*  1282 */                     //
/*  1283 */                     $currLineNo = 41;
/*  1284 */                     $currColNo = 7;
/*  1285 */ 
/*  1286 */                     var $compareres206 = null;
/*  1287 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call205, new Sk.builtin.int_(0), 'Gt', true));
/*  1288 */                     $blk = 19; /* allowing case fallthrough */
/*  1289 */                 case 19:
/*  1290 */                     /* --- function return or resume suspension --- */
/*  1291 */                     if ($ret && $ret.$isSuspension) {
/*  1292 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 41, 7);
/*  1293 */                     }
/*  1294 */                     $compareres206 = $ret;
/*  1295 */                     var $jfalse207 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1296 */                     if ($jfalse207) { /*test failed */
/*  1297 */                         $blk = 18;
/*  1298 */                         continue;
/*  1299 */                     }
/*  1300 */                     $blk = 18; /* allowing case fallthrough */
/*  1301 */                 case 18:
/*  1302 */                     /* --- done --- */
/*  1303 */                     var $jfalse208 = ($compareres206 === false || !Sk.misceval.isTrue($compareres206));
/*  1304 */                     if ($jfalse208) { /*test failed */
/*  1305 */                         $blk = 16;
/*  1306 */                         continue;
/*  1307 */                     }
/*  1308 */                     //
/*  1309 */                     // line 42:
/*  1310 */                     //         yield chunk
/*  1311 */                     //         ^
/*  1312 */                     //
/*  1313 */                     $currLineNo = 42;
/*  1314 */                     $currColNo = 8;
/*  1315 */ 
/*  1316 */                     var $loadname209 = $loc.chunk !== undefined ? $loc.chunk : Sk.misceval.loadname('chunk', $gbl);;
/*  1317 */                     return [ /*resume*/ 20, /*ret*/ $loadname209];
/*  1318 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1319 */                 case 11:
/*  1320 */                     /* --- end of if --- */
/*  1321 */                     $blk = 4; /* jump */
/*  1322 */                     continue;
/*  1323 */                 case 15:
/*  1324 */                     /* --- after yield --- */
/*  1325 */                     //
/*  1326 */                     // line 40:
/*  1327 */                     //             chunk = []
/*  1328 */                     //             ^
/*  1329 */                     //
/*  1330 */                     $currLineNo = 40;
/*  1331 */                     $currColNo = 12;
/*  1332 */ 
/*  1333 */                     var $loadlist202 = new Sk.builtins['list']([]);
/*  1334 */                     $loc.chunk = $loadlist202;
/*  1335 */                     $blk = 11; /* jump */
/*  1336 */                     continue;
/*  1337 */                 case 16:
/*  1338 */                     /* --- end of if --- */
/*  1339 */                     return Sk.builtin.none.none$;
/*  1340 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1341 */                 case 20:
/*  1342 */                     /* --- after yield --- */
/*  1343 */                     $blk = 16; /* jump */
/*  1344 */                     continue;
/*  1345 */                 }
/*  1346 */             } catch (err) {
/*  1347 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1348 */                     err = new Sk.builtin.ExternalError(err);
/*  1349 */                 }
/*  1350 */                 err.traceback.push({
/*  1351 */                     lineno: $currLineNo,
/*  1352 */                     colno: $currColNo,
/*  1353 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*  1354 */                 });
/*  1355 */                 if ($exc.length > 0) {
/*  1356 */                     $err = err;
/*  1357 */                     $blk = $exc.pop();
/*  1358 */                     continue;
/*  1359 */                 } else {
/*  1360 */                     throw err;
/*  1361 */                 }
/*  1362 */             }
/*  1363 */         }
/*  1364 */     });
/*  1365 */     var $scope211 = (function $main212$(n, min_depth) {
/*  1366 */         var argchunk, ch, cs, d, i, long_lived_tree, max_depth, mmd, stretch_depth; /* locals */
/*  1367 */         var argchunk, argchunk, ch, ch, cs, cs, cs, cs, d, d, d, d, i, i, i, long_lived_tree, long_lived_tree, max_depth, max_depth, max_depth, max_depth, max_depth, min_depth, min_depth, min_depth, min_depth, min_depth, mmd, mmd, n, n, stretch_depth, stretch_depth, stretch_depth, stretch_depth, $loadgbl213, $binop214, $elem217, $loadgbl218, $elem219, $elem220, $loadtuple221, $loadgbl225, $loadgbl228, $iter230, $loadgbl228, $call229, $iter230, $loadgbl234, $iter236, $iter236, $loadgbl238, $loadgbl239, $loadgbl240, $loadgbl238, $loadgbl239, $loadgbl240, $call241, $elem249, $loadgbl250;
/*  1368 */         var $wakeFromSuspension = function() {
/*  1369 */             var susp = $scope211.$wakingSuspension;
/*  1370 */             delete $scope211.$wakingSuspension;
/*  1371 */             $blk = susp.$blk;
/*  1372 */             $loc = susp.$loc;
/*  1373 */             $gbl = susp.$gbl;
/*  1374 */             $exc = susp.$exc;
/*  1375 */             $err = susp.$err;
/*  1376 */             $postfinally = susp.$postfinally;
/*  1377 */             $currLineNo = susp.$lineno;
/*  1378 */             $currColNo = susp.$colno;
/*  1379 */             Sk.lastYield = Date.now();
/*  1380 */             argchunk = susp.$tmps.argchunk;
/*  1381 */             ch = susp.$tmps.ch;
/*  1382 */             cs = susp.$tmps.cs;
/*  1383 */             d = susp.$tmps.d;
/*  1384 */             i = susp.$tmps.i;
/*  1385 */             long_lived_tree = susp.$tmps.long_lived_tree;
/*  1386 */             max_depth = susp.$tmps.max_depth;
/*  1387 */             min_depth = susp.$tmps.min_depth;
/*  1388 */             mmd = susp.$tmps.mmd;
/*  1389 */             n = susp.$tmps.n;
/*  1390 */             stretch_depth = susp.$tmps.stretch_depth;
/*  1391 */             $loadgbl213 = susp.$tmps.$loadgbl213;
/*  1392 */             $binop214 = susp.$tmps.$binop214;
/*  1393 */             $elem217 = susp.$tmps.$elem217;
/*  1394 */             $loadgbl218 = susp.$tmps.$loadgbl218;
/*  1395 */             $elem219 = susp.$tmps.$elem219;
/*  1396 */             $elem220 = susp.$tmps.$elem220;
/*  1397 */             $loadtuple221 = susp.$tmps.$loadtuple221;
/*  1398 */             $loadgbl225 = susp.$tmps.$loadgbl225;
/*  1399 */             $loadgbl228 = susp.$tmps.$loadgbl228;
/*  1400 */             $iter230 = susp.$tmps.$iter230;
/*  1401 */             $call229 = susp.$tmps.$call229;
/*  1402 */             $loadgbl234 = susp.$tmps.$loadgbl234;
/*  1403 */             $iter236 = susp.$tmps.$iter236;
/*  1404 */             $loadgbl238 = susp.$tmps.$loadgbl238;
/*  1405 */             $loadgbl239 = susp.$tmps.$loadgbl239;
/*  1406 */             $loadgbl240 = susp.$tmps.$loadgbl240;
/*  1407 */             $call241 = susp.$tmps.$call241;
/*  1408 */             $elem249 = susp.$tmps.$elem249;
/*  1409 */             $loadgbl250 = susp.$tmps.$loadgbl250;
/*  1410 */             try {
/*  1411 */                 $ret = susp.child.resume();
/*  1412 */             } catch (err) {
/*  1413 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1414 */                     err = new Sk.builtin.ExternalError(err);
/*  1415 */                 }
/*  1416 */                 err.traceback.push({
/*  1417 */                     lineno: $currLineNo,
/*  1418 */                     colno: $currColNo,
/*  1419 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
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
/*  1433 */                 $scope211.$wakingSuspension = susp;
/*  1434 */                 return $scope211();
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
/*  1448 */                 "argchunk": argchunk,
/*  1449 */                 "ch": ch,
/*  1450 */                 "cs": cs,
/*  1451 */                 "d": d,
/*  1452 */                 "i": i,
/*  1453 */                 "long_lived_tree": long_lived_tree,
/*  1454 */                 "max_depth": max_depth,
/*  1455 */                 "min_depth": min_depth,
/*  1456 */                 "mmd": mmd,
/*  1457 */                 "n": n,
/*  1458 */                 "stretch_depth": stretch_depth,
/*  1459 */                 "$loadgbl213": $loadgbl213,
/*  1460 */                 "$binop214": $binop214,
/*  1461 */                 "$elem217": $elem217,
/*  1462 */                 "$loadgbl218": $loadgbl218,
/*  1463 */                 "$elem219": $elem219,
/*  1464 */                 "$elem220": $elem220,
/*  1465 */                 "$loadtuple221": $loadtuple221,
/*  1466 */                 "$loadgbl225": $loadgbl225,
/*  1467 */                 "$loadgbl228": $loadgbl228,
/*  1468 */                 "$iter230": $iter230,
/*  1469 */                 "$call229": $call229,
/*  1470 */                 "$loadgbl234": $loadgbl234,
/*  1471 */                 "$iter236": $iter236,
/*  1472 */                 "$loadgbl238": $loadgbl238,
/*  1473 */                 "$loadgbl239": $loadgbl239,
/*  1474 */                 "$loadgbl240": $loadgbl240,
/*  1475 */                 "$call241": $call241,
/*  1476 */                 "$elem249": $elem249,
/*  1477 */                 "$loadgbl250": $loadgbl250
/*  1478 */             };
/*  1479 */             return susp;
/*  1480 */         };
/*  1481 */         var $blk = 0,
/*  1482 */             $exc = [],
/*  1483 */             $loc = {},
/*  1484 */             $gbl = this,
/*  1485 */             $err = undefined,
/*  1486 */             $ret = undefined,
/*  1487 */             $postfinally = undefined,
/*  1488 */             $currLineNo = undefined,
/*  1489 */             $currColNo = undefined;
/*  1490 */         if ($scope211.$wakingSuspension !== undefined) {
/*  1491 */             $wakeFromSuspension();
/*  1492 */         } else {
/*  1493 */             if (min_depth === undefined) min_depth = $scope211.$defaults[0];
/*  1494 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 2, false, false);
/*  1495 */         }
/*  1496 */         while (true) {
/*  1497 */             try {
/*  1498 */                 switch ($blk) {
/*  1499 */                 case 0:
/*  1500 */                     /* --- codeobj entry --- */
/*  1501 */                     if (n === undefined) {
/*  1502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1503 */                     }
/*  1504 */                     if (min_depth === undefined) {
/*  1505 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1506 */                     }
/*  1507 */                     if (min_depth === undefined) {
/*  1508 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1509 */                     }
/*  1510 */ 
/*  1511 */                     //
/*  1512 */                     // line 47:
/*  1513 */                     //     max_depth = max(min_depth + 2, n)
/*  1514 */                     //     ^
/*  1515 */                     //
/*  1516 */                     $currLineNo = 47;
/*  1517 */                     $currColNo = 4;
/*  1518 */ 
/*  1519 */                     var $loadgbl213 = Sk.misceval.loadname('max', $gbl);
/*  1520 */                     if (min_depth === undefined) {
/*  1521 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1522 */                     }
/*  1523 */                     var $binop214 = Sk.abstr.numberBinOp(min_depth, new Sk.builtin.int_(2), 'Add');
/*  1524 */                     if (n === undefined) {
/*  1525 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1526 */                     }
/*  1527 */                     $ret;
/*  1528 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl213, $binop214, n);
/*  1529 */                     $blk = 1; /* allowing case fallthrough */
/*  1530 */                 case 1:
/*  1531 */                     /* --- function return or resume suspension --- */
/*  1532 */                     if ($ret && $ret.$isSuspension) {
/*  1533 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 47, 16);
/*  1534 */                     }
/*  1535 */                     var $call215 = $ret;
/*  1536 */                     //
/*  1537 */                     // line 47:
/*  1538 */                     //     max_depth = max(min_depth + 2, n)
/*  1539 */                     //                 ^
/*  1540 */                     //
/*  1541 */                     $currLineNo = 47;
/*  1542 */                     $currColNo = 16;
/*  1543 */ 
/*  1544 */                     max_depth = $call215;
/*  1545 */                     //
/*  1546 */                     // line 48:
/*  1547 */                     //     stretch_depth = max_depth + 1
/*  1548 */                     //     ^
/*  1549 */                     //
/*  1550 */                     $currLineNo = 48;
/*  1551 */                     $currColNo = 4;
/*  1552 */ 
/*  1553 */                     if (max_depth === undefined) {
/*  1554 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1555 */                     }
/*  1556 */                     var $binop216 = Sk.abstr.numberBinOp(max_depth, new Sk.builtin.int_(1), 'Add');
/*  1557 */                     stretch_depth = $binop216;
/*  1558 */                     //
/*  1559 */                     // line 50:
/*  1560 */                     //     print(stretch_depth, make_check((0, stretch_depth)))
/*  1561 */                     //     ^
/*  1562 */                     //
/*  1563 */                     $currLineNo = 50;
/*  1564 */                     $currColNo = 4;
/*  1565 */ 
/*  1566 */                     if (stretch_depth === undefined) {
/*  1567 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1568 */                     }
/*  1569 */                     var $elem217 = stretch_depth;
/*  1570 */                     var $loadgbl218 = Sk.misceval.loadname('make_check', $gbl);
/*  1571 */                     var $elem219 = new Sk.builtin.int_(0);
/*  1572 */                     if (stretch_depth === undefined) {
/*  1573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1574 */                     }
/*  1575 */                     var $elem220 = stretch_depth;
/*  1576 */                     var $loadtuple221 = new Sk.builtins['tuple']([$elem219, $elem220]);
/*  1577 */                     $ret;
/*  1578 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl218, $loadtuple221);
/*  1579 */                     $blk = 2; /* allowing case fallthrough */
/*  1580 */                 case 2:
/*  1581 */                     /* --- function return or resume suspension --- */
/*  1582 */                     if ($ret && $ret.$isSuspension) {
/*  1583 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 50, 25);
/*  1584 */                     }
/*  1585 */                     var $call222 = $ret;
/*  1586 */                     //
/*  1587 */                     // line 50:
/*  1588 */                     //     print(stretch_depth, make_check((0, stretch_depth)))
/*  1589 */                     //                          ^
/*  1590 */                     //
/*  1591 */                     $currLineNo = 50;
/*  1592 */                     $currColNo = 25;
/*  1593 */ 
/*  1594 */                     var $elem223 = $call222;
/*  1595 */                     var $loadtuple224 = new Sk.builtins['tuple']([$elem217, $elem223]);
/*  1596 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple224).v);
/*  1597 */                     Sk.misceval.print_("\n");
/*  1598 */                     //
/*  1599 */                     // line 52:
/*  1600 */                     //     long_lived_tree = make_tree(0, max_depth)
/*  1601 */                     //     ^
/*  1602 */                     //
/*  1603 */                     $currLineNo = 52;
/*  1604 */                     $currColNo = 4;
/*  1605 */ 
/*  1606 */                     var $loadgbl225 = Sk.misceval.loadname('make_tree', $gbl);
/*  1607 */                     if (max_depth === undefined) {
/*  1608 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1609 */                     }
/*  1610 */                     $ret;
/*  1611 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl225, new Sk.builtin.int_(0), max_depth);
/*  1612 */                     $blk = 3; /* allowing case fallthrough */
/*  1613 */                 case 3:
/*  1614 */                     /* --- function return or resume suspension --- */
/*  1615 */                     if ($ret && $ret.$isSuspension) {
/*  1616 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 52, 22);
/*  1617 */                     }
/*  1618 */                     var $call226 = $ret;
/*  1619 */                     //
/*  1620 */                     // line 52:
/*  1621 */                     //     long_lived_tree = make_tree(0, max_depth)
/*  1622 */                     //                       ^
/*  1623 */                     //
/*  1624 */                     $currLineNo = 52;
/*  1625 */                     $currColNo = 22;
/*  1626 */ 
/*  1627 */                     long_lived_tree = $call226;
/*  1628 */                     //
/*  1629 */                     // line 54:
/*  1630 */                     //     mmd = max_depth + min_depth
/*  1631 */                     //     ^
/*  1632 */                     //
/*  1633 */                     $currLineNo = 54;
/*  1634 */                     $currColNo = 4;
/*  1635 */ 
/*  1636 */                     if (max_depth === undefined) {
/*  1637 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1638 */                     }
/*  1639 */                     if (min_depth === undefined) {
/*  1640 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1641 */                     }
/*  1642 */                     var $binop227 = Sk.abstr.numberBinOp(max_depth, min_depth, 'Add');
/*  1643 */                     mmd = $binop227;
/*  1644 */                     //
/*  1645 */                     // line 55:
/*  1646 */                     //     for d in range(min_depth, stretch_depth, 2):
/*  1647 */                     //     ^
/*  1648 */                     //
/*  1649 */                     $currLineNo = 55;
/*  1650 */                     $currColNo = 4;
/*  1651 */ 
/*  1652 */                     var $loadgbl228 = Sk.misceval.loadname('range', $gbl);
/*  1653 */                     if (min_depth === undefined) {
/*  1654 */                         throw new Sk.builtin.UnboundLocalError('local variable \'min_depth\' referenced before assignment');
/*  1655 */                     }
/*  1656 */                     if (stretch_depth === undefined) {
/*  1657 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stretch_depth\' referenced before assignment');
/*  1658 */                     }
/*  1659 */                     $ret;
/*  1660 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl228, min_depth, stretch_depth, new Sk.builtin.int_(2));
/*  1661 */                     $blk = 7; /* allowing case fallthrough */
/*  1662 */                 case 7:
/*  1663 */                     /* --- function return or resume suspension --- */
/*  1664 */                     if ($ret && $ret.$isSuspension) {
/*  1665 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 55, 13);
/*  1666 */                     }
/*  1667 */                     var $call229 = $ret;
/*  1668 */                     //
/*  1669 */                     // line 55:
/*  1670 */                     //     for d in range(min_depth, stretch_depth, 2):
/*  1671 */                     //              ^
/*  1672 */                     //
/*  1673 */                     $currLineNo = 55;
/*  1674 */                     $currColNo = 13;
/*  1675 */ 
/*  1676 */                     var $iter230 = Sk.abstr.iter($call229);
/*  1677 */                     $blk = 4; /* allowing case fallthrough */
/*  1678 */                 case 4:
/*  1679 */                     /* --- for start --- */
/*  1680 */                     $ret = Sk.abstr.iternext($iter230, true);
/*  1681 */                     $blk = 8; /* allowing case fallthrough */
/*  1682 */                 case 8:
/*  1683 */                     /* --- function return or resume suspension --- */
/*  1684 */                     if ($ret && $ret.$isSuspension) {
/*  1685 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 55, 4);
/*  1686 */                     }
/*  1687 */                     var $next231 = $ret;
/*  1688 */                     if ($next231 === undefined) {
/*  1689 */                         $blk = 5;
/*  1690 */                         continue;
/*  1691 */                     }
/*  1692 */                     d = $next231;
/*  1693 */                     //
/*  1694 */                     // line 56:
/*  1695 */                     //         i = 2 ** (mmd - d)
/*  1696 */                     //         ^
/*  1697 */                     //
/*  1698 */                     $currLineNo = 56;
/*  1699 */                     $currColNo = 8;
/*  1700 */ 
/*  1701 */                     if (mmd === undefined) {
/*  1702 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mmd\' referenced before assignment');
/*  1703 */                     }
/*  1704 */                     if (d === undefined) {
/*  1705 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  1706 */                     }
/*  1707 */                     var $binop232 = Sk.abstr.numberBinOp(mmd, d, 'Sub');
/*  1708 */                     var $binop233 = Sk.abstr.numberBinOp(new Sk.builtin.int_(2), $binop232, 'Pow');
/*  1709 */                     i = $binop233;
/*  1710 */                     //
/*  1711 */                     // line 57:
/*  1712 */                     //         cs = 0
/*  1713 */                     //         ^
/*  1714 */                     //
/*  1715 */                     $currLineNo = 57;
/*  1716 */                     $currColNo = 8;
/*  1717 */ 
/*  1718 */                     cs = new Sk.builtin.int_(0);
/*  1719 */                     //
/*  1720 */                     // line 58:
/*  1721 */                     //         ch = get_argchunks(i, d)
/*  1722 */                     //         ^
/*  1723 */                     //
/*  1724 */                     $currLineNo = 58;
/*  1725 */                     $currColNo = 8;
/*  1726 */ 
/*  1727 */                     var $loadgbl234 = Sk.misceval.loadname('get_argchunks', $gbl);
/*  1728 */                     if (i === undefined) {
/*  1729 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1730 */                     }
/*  1731 */                     if (d === undefined) {
/*  1732 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  1733 */                     }
/*  1734 */                     $ret;
/*  1735 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl234, i, d);
/*  1736 */                     $blk = 9; /* allowing case fallthrough */
/*  1737 */                 case 9:
/*  1738 */                     /* --- function return or resume suspension --- */
/*  1739 */                     if ($ret && $ret.$isSuspension) {
/*  1740 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 58, 13);
/*  1741 */                     }
/*  1742 */                     var $call235 = $ret;
/*  1743 */                     //
/*  1744 */                     // line 58:
/*  1745 */                     //         ch = get_argchunks(i, d)
/*  1746 */                     //              ^
/*  1747 */                     //
/*  1748 */                     $currLineNo = 58;
/*  1749 */                     $currColNo = 13;
/*  1750 */ 
/*  1751 */                     ch = $call235;
/*  1752 */                     //
/*  1753 */                     // line 59:
/*  1754 */                     //         for argchunk in ch:
/*  1755 */                     //         ^
/*  1756 */                     //
/*  1757 */                     $currLineNo = 59;
/*  1758 */                     $currColNo = 8;
/*  1759 */ 
/*  1760 */                     if (ch === undefined) {
/*  1761 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ch\' referenced before assignment');
/*  1762 */                     }
/*  1763 */                     var $iter236 = Sk.abstr.iter(ch);
/*  1764 */                     $blk = 10; /* allowing case fallthrough */
/*  1765 */                 case 10:
/*  1766 */                     /* --- for start --- */
/*  1767 */                     $ret = Sk.abstr.iternext($iter236, true);
/*  1768 */                     $blk = 13; /* allowing case fallthrough */
/*  1769 */                 case 13:
/*  1770 */                     /* --- function return or resume suspension --- */
/*  1771 */                     if ($ret && $ret.$isSuspension) {
/*  1772 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 59, 8);
/*  1773 */                     }
/*  1774 */                     var $next237 = $ret;
/*  1775 */                     if ($next237 === undefined) {
/*  1776 */                         $blk = 11;
/*  1777 */                         continue;
/*  1778 */                     }
/*  1779 */                     argchunk = $next237;
/*  1780 */                     //
/*  1781 */                     // line 60:
/*  1782 */                     //             cs += sum(map(make_check, argchunk))
/*  1783 */                     //             ^
/*  1784 */                     //
/*  1785 */                     $currLineNo = 60;
/*  1786 */                     $currColNo = 12;
/*  1787 */ 
/*  1788 */                     if (cs === undefined) {
/*  1789 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cs\' referenced before assignment');
/*  1790 */                     }
/*  1791 */                     var $loadgbl238 = Sk.misceval.loadname('sum', $gbl);
/*  1792 */                     var $loadgbl239 = Sk.misceval.loadname('map', $gbl);
/*  1793 */                     var $loadgbl240 = Sk.misceval.loadname('make_check', $gbl);
/*  1794 */                     if (argchunk === undefined) {
/*  1795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'argchunk\' referenced before assignment');
/*  1796 */                     }
/*  1797 */                     $ret;
/*  1798 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl239, $loadgbl240, argchunk);
/*  1799 */                     $blk = 14; /* allowing case fallthrough */
/*  1800 */                 case 14:
/*  1801 */                     /* --- function return or resume suspension --- */
/*  1802 */                     if ($ret && $ret.$isSuspension) {
/*  1803 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 60, 22);
/*  1804 */                     }
/*  1805 */                     var $call241 = $ret;
/*  1806 */                     //
/*  1807 */                     // line 60:
/*  1808 */                     //             cs += sum(map(make_check, argchunk))
/*  1809 */                     //                       ^
/*  1810 */                     //
/*  1811 */                     $currLineNo = 60;
/*  1812 */                     $currColNo = 22;
/*  1813 */ 
/*  1814 */                     $ret;
/*  1815 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl238, $call241);
/*  1816 */                     $blk = 15; /* allowing case fallthrough */
/*  1817 */                 case 15:
/*  1818 */                     /* --- function return or resume suspension --- */
/*  1819 */                     if ($ret && $ret.$isSuspension) {
/*  1820 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 60, 18);
/*  1821 */                     }
/*  1822 */                     var $call242 = $ret;
/*  1823 */                     //
/*  1824 */                     // line 60:
/*  1825 */                     //             cs += sum(map(make_check, argchunk))
/*  1826 */                     //                   ^
/*  1827 */                     //
/*  1828 */                     $currLineNo = 60;
/*  1829 */                     $currColNo = 18;
/*  1830 */ 
/*  1831 */                     var $inplbinop243 = Sk.abstr.numberInplaceBinOp(cs, $call242, 'Add');
/*  1832 */                     cs = $inplbinop243;
/*  1833 */                     $blk = 10; /* jump */
/*  1834 */                     continue;
/*  1835 */                 case 5:
/*  1836 */                     /* --- for cleanup --- */
/*  1837 */                     $blk = 6; /* allowing case fallthrough */
/*  1838 */                 case 6:
/*  1839 */                     /* --- for end --- */
/*  1840 */                     //
/*  1841 */                     // line 63:
/*  1842 */                     //     print(max_depth, check_tree(long_lived_tree))
/*  1843 */                     //     ^
/*  1844 */                     //
/*  1845 */                     $currLineNo = 63;
/*  1846 */                     $currColNo = 4;
/*  1847 */ 
/*  1848 */                     if (max_depth === undefined) {
/*  1849 */                         throw new Sk.builtin.UnboundLocalError('local variable \'max_depth\' referenced before assignment');
/*  1850 */                     }
/*  1851 */                     var $elem249 = max_depth;
/*  1852 */                     var $loadgbl250 = Sk.misceval.loadname('check_tree', $gbl);
/*  1853 */                     if (long_lived_tree === undefined) {
/*  1854 */                         throw new Sk.builtin.UnboundLocalError('local variable \'long_lived_tree\' referenced before assignment');
/*  1855 */                     }
/*  1856 */                     $ret;
/*  1857 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl250, long_lived_tree);
/*  1858 */                     $blk = 16; /* allowing case fallthrough */
/*  1859 */                 case 16:
/*  1860 */                     /* --- function return or resume suspension --- */
/*  1861 */                     if ($ret && $ret.$isSuspension) {
/*  1862 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py', 63, 21);
/*  1863 */                     }
/*  1864 */                     var $call251 = $ret;
/*  1865 */                     //
/*  1866 */                     // line 63:
/*  1867 */                     //     print(max_depth, check_tree(long_lived_tree))
/*  1868 */                     //                      ^
/*  1869 */                     //
/*  1870 */                     $currLineNo = 63;
/*  1871 */                     $currColNo = 21;
/*  1872 */ 
/*  1873 */                     var $elem252 = $call251;
/*  1874 */                     var $loadtuple253 = new Sk.builtins['tuple']([$elem249, $elem252]);
/*  1875 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple253).v);
/*  1876 */                     Sk.misceval.print_("\n");
/*  1877 */                     return Sk.builtin.none.none$;
/*  1878 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1879 */                 case 11:
/*  1880 */                     /* --- for cleanup --- */
/*  1881 */                     $blk = 12; /* allowing case fallthrough */
/*  1882 */                 case 12:
/*  1883 */                     /* --- for end --- */
/*  1884 */                     //
/*  1885 */                     // line 61:
/*  1886 */                     //         print(i * 2, d, cs)
/*  1887 */                     //         ^
/*  1888 */                     //
/*  1889 */                     $currLineNo = 61;
/*  1890 */                     $currColNo = 8;
/*  1891 */ 
/*  1892 */                     if (i === undefined) {
/*  1893 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  1894 */                     }
/*  1895 */                     var $binop244 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(2), 'Mult');
/*  1896 */                     var $elem245 = $binop244;
/*  1897 */                     if (d === undefined) {
/*  1898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  1899 */                     }
/*  1900 */                     var $elem246 = d;
/*  1901 */                     if (cs === undefined) {
/*  1902 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cs\' referenced before assignment');
/*  1903 */                     }
/*  1904 */                     var $elem247 = cs;
/*  1905 */                     var $loadtuple248 = new Sk.builtins['tuple']([$elem245, $elem246, $elem247]);
/*  1906 */                     Sk.misceval.print_(new Sk.builtins['str']($loadtuple248).v);
/*  1907 */                     Sk.misceval.print_("\n");
/*  1908 */                     $blk = 4; /* jump */
/*  1909 */                     continue;
/*  1910 */                 }
/*  1911 */             } catch (err) {
/*  1912 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1913 */                     err = new Sk.builtin.ExternalError(err);
/*  1914 */                 }
/*  1915 */                 err.traceback.push({
/*  1916 */                     lineno: $currLineNo,
/*  1917 */                     colno: $currColNo,
/*  1918 */                     filename: '/home/sbaxter/benchmarks/skulpt/binary_trees/main.py'
/*  1919 */                 });
/*  1920 */                 if ($exc.length > 0) {
/*  1921 */                     $err = err;
/*  1922 */                     $blk = $exc.pop();
/*  1923 */                     continue;
/*  1924 */                 } else {
/*  1925 */                     throw err;
/*  1926 */                 }
/*  1927 */             }
/*  1928 */         }
/*  1929 */     });
/*  1930 */     return $scope120;
/*  1931 */ }();
