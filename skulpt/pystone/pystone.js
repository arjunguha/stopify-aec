/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname125, $loadname126, $loadname125, $loadname126, $call127, $_compr164, $loadgbl165, $elem166, $loadlist167, $binop168, $iter169, $_compr164, $loadgbl165, $elem166, $loadlist167, $binop168, $iter169, $next170, $loadname171, $slice172, $loadname463, $loadname464;
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
/*    16 */             $loadname125 = susp.$tmps.$loadname125;
/*    17 */             $loadname126 = susp.$tmps.$loadname126;
/*    18 */             $call127 = susp.$tmps.$call127;
/*    19 */             $_compr164 = susp.$tmps.$_compr164;
/*    20 */             $loadgbl165 = susp.$tmps.$loadgbl165;
/*    21 */             $elem166 = susp.$tmps.$elem166;
/*    22 */             $loadlist167 = susp.$tmps.$loadlist167;
/*    23 */             $binop168 = susp.$tmps.$binop168;
/*    24 */             $iter169 = susp.$tmps.$iter169;
/*    25 */             $next170 = susp.$tmps.$next170;
/*    26 */             $loadname171 = susp.$tmps.$loadname171;
/*    27 */             $slice172 = susp.$tmps.$slice172;
/*    28 */             $loadname463 = susp.$tmps.$loadname463;
/*    29 */             $loadname464 = susp.$tmps.$loadname464;
/*    30 */             try {
/*    31 */                 $ret = susp.child.resume();
/*    32 */             } catch (err) {
/*    33 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    34 */                     err = new Sk.builtin.ExternalError(err);
/*    35 */                 }
/*    36 */                 err.traceback.push({
/*    37 */                     lineno: $currLineNo,
/*    38 */                     colno: $currColNo,
/*    39 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*    40 */                 });
/*    41 */                 if ($exc.length > 0) {
/*    42 */                     $err = err;
/*    43 */                     $blk = $exc.pop();
/*    44 */                 } else {
/*    45 */                     throw err;
/*    46 */                 }
/*    47 */             }
/*    48 */         };
/*    49 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    50 */             var susp = new Sk.misceval.Suspension();
/*    51 */             susp.child = $child;
/*    52 */             susp.resume = function() {
/*    53 */                 $scope120.$wakingSuspension = susp;
/*    54 */                 return $scope120();
/*    55 */             };
/*    56 */             susp.data = susp.child.data;
/*    57 */             susp.$blk = $blk;
/*    58 */             susp.$loc = $loc;
/*    59 */             susp.$gbl = $gbl;
/*    60 */             susp.$exc = $exc;
/*    61 */             susp.$err = $err;
/*    62 */             susp.$postfinally = $postfinally;
/*    63 */             susp.$filename = $filename;
/*    64 */             susp.$lineno = $lineno;
/*    65 */             susp.$colno = $colno;
/*    66 */             susp.optional = susp.child.optional;
/*    67 */             susp.$tmps = {
/*    68 */                 "$loadname125": $loadname125,
/*    69 */                 "$loadname126": $loadname126,
/*    70 */                 "$call127": $call127,
/*    71 */                 "$_compr164": $_compr164,
/*    72 */                 "$loadgbl165": $loadgbl165,
/*    73 */                 "$elem166": $elem166,
/*    74 */                 "$loadlist167": $loadlist167,
/*    75 */                 "$binop168": $binop168,
/*    76 */                 "$iter169": $iter169,
/*    77 */                 "$next170": $next170,
/*    78 */                 "$loadname171": $loadname171,
/*    79 */                 "$slice172": $slice172,
/*    80 */                 "$loadname463": $loadname463,
/*    81 */                 "$loadname464": $loadname464
/*    82 */             };
/*    83 */             return susp;
/*    84 */         };
/*    85 */         var $gbl = {},
/*    86 */             $blk = 0,
/*    87 */             $exc = [],
/*    88 */             $loc = $gbl,
/*    89 */             $err = undefined;
/*    90 */         $gbl.__name__ = $modname;
/*    91 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/pystone/main.py');
/*    92 */         var $ret = undefined,
/*    93 */             $postfinally = undefined,
/*    94 */             $currLineNo = undefined,
/*    95 */             $currColNo = undefined;
/*    96 */         if ($scope120.$wakingSuspension !== undefined) {
/*    97 */             $wakeFromSuspension();
/*    98 */         }
/*    99 */         if (Sk.retainGlobals) {
/*   100 */             if (Sk.globals) {
/*   101 */                 $gbl = Sk.globals;
/*   102 */                 Sk.globals = $gbl;
/*   103 */                 $loc = $gbl;
/*   104 */             } else {
/*   105 */                 Sk.globals = $gbl;
/*   106 */             }
/*   107 */         } else {
/*   108 */             Sk.globals = $gbl;
/*   109 */         }
/*   110 */         while (true) {
/*   111 */             try {
/*   112 */                 switch ($blk) {
/*   113 */                 case 0:
/*   114 */                     /* --- module entry --- */
/*   115 */                     //
/*   116 */                     // line 3:
/*   117 */                     // """
/*   118 */                     // ^
/*   119 */                     //
/*   120 */                     $currLineNo = 3;
/*   121 */                     $currColNo = 0;
/*   122 */ 
/*   123 */                     var $str121 = new Sk.builtins['str']('\n"PYSTONE" Benchmark Program\n\nVersion:        Python/1.1 (corresponds to C/1.1 plus 2 Pystone fixes)\n\nAuthor:         Reinhold P. Weicker,  CACM Vol 27, No 10, 10/84 pg. 1013.\n\n                Translated from ADA to C by Rick Richardson.\n                Every method to preserve ADA-likeness has been used,\n                at the expense of C-ness.\n\n                Translated from C to Python by Guido van Rossum.\n\nVersion History:\n\n                Version 1.1 corrects two bugs in version 1.0:\n\n                First, it leaked memory: in Proc1(), NextRecord ends\n                up having a pointer to itself.  I have corrected this\n                by zapping NextRecord.PtrComp at the end of Proc1().\n\n                Second, Proc3() used the operator != to compare a\n                record to None.  This is rather inefficient and not\n                true to the intention of the original benchmark (where\n                a pointer comparison to None is intended; the !=\n                operator attempts to find a method __cmp__ to do value\n                comparison of the record).  Version 1.1 runs 5-10\n                percent faster than version 1.0, so benchmark figures\n                of different versions can\'t be compared directly.\n\n');
/*   124 */                     //
/*   125 */                     // line 35:
/*   126 */                     // LOOPS = 50000
/*   127 */                     // ^
/*   128 */                     //
/*   129 */                     $currLineNo = 35;
/*   130 */                     $currColNo = 0;
/*   131 */ 
/*   132 */                     $loc.LOOPS = new Sk.builtin.int_(50000);
/*   133 */                     //
/*   134 */                     // line 37:
/*   135 */                     // from time import time
/*   136 */                     // ^
/*   137 */                     //
/*   138 */                     $currLineNo = 37;
/*   139 */                     $currColNo = 0;
/*   140 */ 
/*   141 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, ['time']);
/*   142 */                     $blk = 1; /* allowing case fallthrough */
/*   143 */                 case 1:
/*   144 */                     /* --- function return or resume suspension --- */
/*   145 */                     if ($ret && $ret.$isSuspension) {
/*   146 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 37, 0);
/*   147 */                     }
/*   148 */                     var $module122 = $ret;
/*   149 */                     var $item123 = Sk.abstr.gattr($module122, 'time');
/*   150 */                     $loc.time = $item123;
/*   151 */                     //
/*   152 */                     // line 39:
/*   153 */                     // __version__ = "1.1"
/*   154 */                     // ^
/*   155 */                     //
/*   156 */                     $currLineNo = 39;
/*   157 */                     $currColNo = 0;
/*   158 */ 
/*   159 */                     var $str124 = new Sk.builtins['str']('1.1');
/*   160 */                     $loc.__version__ = $str124;
/*   161 */                     //
/*   162 */                     // line 41:
/*   163 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   164 */                     // ^
/*   165 */                     //
/*   166 */                     $currLineNo = 41;
/*   167 */                     $currColNo = 0;
/*   168 */ 
/*   169 */                     var $loadname125 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   170 */                     var $loadname126 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   171 */                     $ret;
/*   172 */                     $ret = Sk.misceval.callsimOrSuspend($loadname126, new Sk.builtin.int_(1), new Sk.builtin.int_(6));
/*   173 */                     $blk = 2; /* allowing case fallthrough */
/*   174 */                 case 2:
/*   175 */                     /* --- function return or resume suspension --- */
/*   176 */                     if ($ret && $ret.$isSuspension) {
/*   177 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 41, 48);
/*   178 */                     }
/*   179 */                     var $call127 = $ret;
/*   180 */                     //
/*   181 */                     // line 41:
/*   182 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   183 */                     //                                                 ^
/*   184 */                     //
/*   185 */                     $currLineNo = 41;
/*   186 */                     $currColNo = 48;
/*   187 */ 
/*   188 */                     $ret;
/*   189 */                     $ret = Sk.misceval.callsimOrSuspend($loadname125, $call127);
/*   190 */                     $blk = 3; /* allowing case fallthrough */
/*   191 */                 case 3:
/*   192 */                     /* --- function return or resume suspension --- */
/*   193 */                     if ($ret && $ret.$isSuspension) {
/*   194 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 41, 43);
/*   195 */                     }
/*   196 */                     var $call128 = $ret;
/*   197 */                     //
/*   198 */                     // line 41:
/*   199 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   200 */                     //                                            ^
/*   201 */                     //
/*   202 */                     $currLineNo = 41;
/*   203 */                     $currColNo = 43;
/*   204 */ 
/*   205 */                     var $items129 = Sk.abstr.sequenceUnpack($call128, 5);
/*   206 */                     $loc.Ident1 = $items129[0];
/*   207 */                     $loc.Ident2 = $items129[1];
/*   208 */                     $loc.Ident3 = $items129[2];
/*   209 */                     $loc.Ident4 = $items129[3];
/*   210 */                     $loc.Ident5 = $items129[4];
/*   211 */                     //
/*   212 */                     // line 43:
/*   213 */                     // class Record:
/*   214 */                     // ^
/*   215 */                     //
/*   216 */                     $currLineNo = 43;
/*   217 */                     $currColNo = 0;
/*   218 */ 
/*   219 */                     $scope130.co_name = new Sk.builtins['str']('Record');
/*   220 */                     var $built144 = Sk.misceval.buildClass($gbl, $scope130, 'Record', []);
/*   221 */                     $loc.Record = $built144;
/*   222 */                     //
/*   223 */                     // line 57:
/*   224 */                     // TRUE = 1
/*   225 */                     // ^
/*   226 */                     //
/*   227 */                     $currLineNo = 57;
/*   228 */                     $currColNo = 0;
/*   229 */ 
/*   230 */                     $loc.TRUE = new Sk.builtin.int_(1);
/*   231 */                     //
/*   232 */                     // line 58:
/*   233 */                     // FALSE = 0
/*   234 */                     // ^
/*   235 */                     //
/*   236 */                     $currLineNo = 58;
/*   237 */                     $currColNo = 0;
/*   238 */ 
/*   239 */                     $loc.FALSE = new Sk.builtin.int_(0);
/*   240 */                     //
/*   241 */                     // line 60:
/*   242 */                     // def main(loops=LOOPS):
/*   243 */                     // ^
/*   244 */                     //
/*   245 */                     $currLineNo = 60;
/*   246 */                     $currColNo = 0;
/*   247 */ 
/*   248 */                     var $loadname145 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   249 */                     $scope146.co_name = new Sk.builtins['str']('main');
/*   250 */                     $scope146.$defaults = [$loadname145];
/*   251 */                     $scope146.co_varnames = ['loops'];
/*   252 */                     var $funcobj151 = new Sk.builtins['function']($scope146, $gbl);
/*   253 */                     $loc.main = $funcobj151;
/*   254 */                     //
/*   255 */                     // line 67:
/*   256 */                     // def pystones(loops=LOOPS):
/*   257 */                     // ^
/*   258 */                     //
/*   259 */                     $currLineNo = 67;
/*   260 */                     $currColNo = 0;
/*   261 */ 
/*   262 */                     var $loadname152 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   263 */                     $scope153.co_name = new Sk.builtins['str']('pystones');
/*   264 */                     $scope153.$defaults = [$loadname152];
/*   265 */                     $scope153.co_varnames = ['loops'];
/*   266 */                     var $funcobj157 = new Sk.builtins['function']($scope153, $gbl);
/*   267 */                     $loc.pystones = $funcobj157;
/*   268 */                     //
/*   269 */                     // line 70:
/*   270 */                     // IntGlob = 0
/*   271 */                     // ^
/*   272 */                     //
/*   273 */                     $currLineNo = 70;
/*   274 */                     $currColNo = 0;
/*   275 */ 
/*   276 */                     $gbl.IntGlob = new Sk.builtin.int_(0);
/*   277 */                     //
/*   278 */                     // line 71:
/*   279 */                     // BoolGlob = FALSE
/*   280 */                     // ^
/*   281 */                     //
/*   282 */                     $currLineNo = 71;
/*   283 */                     $currColNo = 0;
/*   284 */ 
/*   285 */                     var $loadname158 = $loc.FALSE !== undefined ? $loc.FALSE : Sk.misceval.loadname('FALSE', $gbl);;
/*   286 */                     $gbl.BoolGlob = $loadname158;
/*   287 */                     //
/*   288 */                     // line 72:
/*   289 */                     // Char1Glob = '\0'
/*   290 */                     // ^
/*   291 */                     //
/*   292 */                     $currLineNo = 72;
/*   293 */                     $currColNo = 0;
/*   294 */ 
/*   295 */                     var $str159 = new Sk.builtins['str']('\x00');
/*   296 */                     $gbl.Char1Glob = $str159;
/*   297 */                     //
/*   298 */                     // line 73:
/*   299 */                     // Char2Glob = '\0'
/*   300 */                     // ^
/*   301 */                     //
/*   302 */                     $currLineNo = 73;
/*   303 */                     $currColNo = 0;
/*   304 */ 
/*   305 */                     var $str160 = new Sk.builtins['str']('\x00');
/*   306 */                     $gbl.Char2Glob = $str160;
/*   307 */                     //
/*   308 */                     // line 74:
/*   309 */                     // Array1Glob = [0]*51
/*   310 */                     // ^
/*   311 */                     //
/*   312 */                     $currLineNo = 74;
/*   313 */                     $currColNo = 0;
/*   314 */ 
/*   315 */                     var $elem161 = new Sk.builtin.int_(0);
/*   316 */                     var $loadlist162 = new Sk.builtins['list']([$elem161]);
/*   317 */                     var $binop163 = Sk.abstr.numberBinOp($loadlist162, new Sk.builtin.int_(51), 'Mult');
/*   318 */                     $gbl.Array1Glob = $binop163;
/*   319 */                     //
/*   320 */                     // line 75:
/*   321 */                     // Array2Glob = [x[:] for x in [Array1Glob]*51]
/*   322 */                     // ^
/*   323 */                     //
/*   324 */                     $currLineNo = 75;
/*   325 */                     $currColNo = 0;
/*   326 */ 
/*   327 */                     var $_compr164 = new Sk.builtins['list']([]);
/*   328 */                     var $loadgbl165 = Sk.misceval.loadname('Array1Glob', $gbl);
/*   329 */                     var $elem166 = $loadgbl165;
/*   330 */                     var $loadlist167 = new Sk.builtins['list']([$elem166]);
/*   331 */                     var $binop168 = Sk.abstr.numberBinOp($loadlist167, new Sk.builtin.int_(51), 'Mult');
/*   332 */                     var $iter169 = Sk.abstr.iter($binop168);
/*   333 */                     $blk = 4; /* allowing case fallthrough */
/*   334 */                 case 4:
/*   335 */                     /* --- list comp start --- */
/*   336 */                     $ret = Sk.abstr.iternext($iter169, true);
/*   337 */                     $blk = 7; /* allowing case fallthrough */
/*   338 */                 case 7:
/*   339 */                     /* --- function return or resume suspension --- */
/*   340 */                     if ($ret && $ret.$isSuspension) {
/*   341 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 75, 14);
/*   342 */                     }
/*   343 */                     var $next170 = $ret;
/*   344 */                     if ($next170 === undefined) {
/*   345 */                         $blk = 6;
/*   346 */                         continue;
/*   347 */                     }
/*   348 */                     $loc.x = $next170;
/*   349 */                     var $loadname171 = $loc.x !== undefined ? $loc.x : Sk.misceval.loadname('x', $gbl);;
/*   350 */                     var $slice172 = new Sk.builtins['slice'](new Sk.builtin.int_(0), new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   351 */                     $ret = Sk.abstr.objectGetItem($loadname171, $slice172, true);
/*   352 */                     $blk = 8; /* allowing case fallthrough */
/*   353 */                 case 8:
/*   354 */                     /* --- function return or resume suspension --- */
/*   355 */                     if ($ret && $ret.$isSuspension) {
/*   356 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*   357 */                     }
/*   358 */                     var $lsubscr173 = $ret;
/*   359 */                     $_compr164.v.push($lsubscr173);
/*   360 */                     $blk = 5; /* allowing case fallthrough */
/*   361 */                 case 5:
/*   362 */                     /* --- list comp skip --- */
/*   363 */                     $blk = 4; /* jump */
/*   364 */                     continue;
/*   365 */                 case 6:
/*   366 */                     /* --- list comp anchor --- */
/*   367 */                     $gbl.Array2Glob = $_compr164;
/*   368 */                     //
/*   369 */                     // line 76:
/*   370 */                     // PtrGlb = None
/*   371 */                     // ^
/*   372 */                     //
/*   373 */                     $currLineNo = 76;
/*   374 */                     $currColNo = 0;
/*   375 */ 
/*   376 */                     $gbl.PtrGlb = Sk.builtin.none.none$;
/*   377 */                     //
/*   378 */                     // line 77:
/*   379 */                     // PtrGlbNext = None
/*   380 */                     // ^
/*   381 */                     //
/*   382 */                     $currLineNo = 77;
/*   383 */                     $currColNo = 0;
/*   384 */ 
/*   385 */                     $gbl.PtrGlbNext = Sk.builtin.none.none$;
/*   386 */                     //
/*   387 */                     // line 79:
/*   388 */                     // def Proc0(loops=LOOPS):
/*   389 */                     // ^
/*   390 */                     //
/*   391 */                     $currLineNo = 79;
/*   392 */                     $currColNo = 0;
/*   393 */ 
/*   394 */                     var $loadname174 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   395 */                     $scope175.co_name = new Sk.builtins['str']('Proc0');
/*   396 */                     $scope175.$defaults = [$loadname174];
/*   397 */                     $scope175.co_varnames = ['loops'];
/*   398 */                     var $funcobj269 = new Sk.builtins['function']($scope175, $gbl);
/*   399 */                     $loc.Proc0 = $funcobj269;
/*   400 */                     //
/*   401 */                     // line 137:
/*   402 */                     // def Proc1(PtrParIn):
/*   403 */                     // ^
/*   404 */                     //
/*   405 */                     $currLineNo = 137;
/*   406 */                     $currColNo = 0;
/*   407 */ 
/*   408 */                     $scope270.co_name = new Sk.builtins['str']('Proc1');
/*   409 */                     $scope270.co_varnames = ['PtrParIn'];
/*   410 */                     var $funcobj295 = new Sk.builtins['function']($scope270, $gbl);
/*   411 */                     $loc.Proc1 = $funcobj295;
/*   412 */                     //
/*   413 */                     // line 153:
/*   414 */                     // def Proc2(IntParIO):
/*   415 */                     // ^
/*   416 */                     //
/*   417 */                     $currLineNo = 153;
/*   418 */                     $currColNo = 0;
/*   419 */ 
/*   420 */                     $scope296.co_name = new Sk.builtins['str']('Proc2');
/*   421 */                     $scope296.co_varnames = ['IntParIO'];
/*   422 */                     var $funcobj313 = new Sk.builtins['function']($scope296, $gbl);
/*   423 */                     $loc.Proc2 = $funcobj313;
/*   424 */                     //
/*   425 */                     // line 164:
/*   426 */                     // def Proc3(PtrParOut):
/*   427 */                     // ^
/*   428 */                     //
/*   429 */                     $currLineNo = 164;
/*   430 */                     $currColNo = 0;
/*   431 */ 
/*   432 */                     $scope314.co_name = new Sk.builtins['str']('Proc3');
/*   433 */                     $scope314.co_varnames = ['PtrParOut'];
/*   434 */                     var $funcobj326 = new Sk.builtins['function']($scope314, $gbl);
/*   435 */                     $loc.Proc3 = $funcobj326;
/*   436 */                     //
/*   437 */                     // line 174:
/*   438 */                     // def Proc4():
/*   439 */                     // ^
/*   440 */                     //
/*   441 */                     $currLineNo = 174;
/*   442 */                     $currColNo = 0;
/*   443 */ 
/*   444 */                     $scope327.co_name = new Sk.builtins['str']('Proc4');
/*   445 */                     var $funcobj338 = new Sk.builtins['function']($scope327, $gbl);
/*   446 */                     $loc.Proc4 = $funcobj338;
/*   447 */                     //
/*   448 */                     // line 181:
/*   449 */                     // def Proc5():
/*   450 */                     // ^
/*   451 */                     //
/*   452 */                     $currLineNo = 181;
/*   453 */                     $currColNo = 0;
/*   454 */ 
/*   455 */                     $scope339.co_name = new Sk.builtins['str']('Proc5');
/*   456 */                     var $funcobj343 = new Sk.builtins['function']($scope339, $gbl);
/*   457 */                     $loc.Proc5 = $funcobj343;
/*   458 */                     //
/*   459 */                     // line 188:
/*   460 */                     // def Proc6(EnumParIn):
/*   461 */                     // ^
/*   462 */                     //
/*   463 */                     $currLineNo = 188;
/*   464 */                     $currColNo = 0;
/*   465 */ 
/*   466 */                     $scope344.co_name = new Sk.builtins['str']('Proc6');
/*   467 */                     $scope344.co_varnames = ['EnumParIn'];
/*   468 */                     var $funcobj380 = new Sk.builtins['function']($scope344, $gbl);
/*   469 */                     $loc.Proc6 = $funcobj380;
/*   470 */                     //
/*   471 */                     // line 207:
/*   472 */                     // def Proc7(IntParI1, IntParI2):
/*   473 */                     // ^
/*   474 */                     //
/*   475 */                     $currLineNo = 207;
/*   476 */                     $currColNo = 0;
/*   477 */ 
/*   478 */                     $scope381.co_name = new Sk.builtins['str']('Proc7');
/*   479 */                     $scope381.co_varnames = ['IntParI1', 'IntParI2'];
/*   480 */                     var $funcobj385 = new Sk.builtins['function']($scope381, $gbl);
/*   481 */                     $loc.Proc7 = $funcobj385;
/*   482 */                     //
/*   483 */                     // line 212:
/*   484 */                     // def Proc8(Array1Par, Array2Par, IntParI1, IntParI2):
/*   485 */                     // ^
/*   486 */                     //
/*   487 */                     $currLineNo = 212;
/*   488 */                     $currColNo = 0;
/*   489 */ 
/*   490 */                     $scope386.co_name = new Sk.builtins['str']('Proc8');
/*   491 */                     $scope386.co_varnames = ['Array1Par', 'Array2Par', 'IntParI1', 'IntParI2'];
/*   492 */                     var $funcobj407 = new Sk.builtins['function']($scope386, $gbl);
/*   493 */                     $loc.Proc8 = $funcobj407;
/*   494 */                     //
/*   495 */                     // line 225:
/*   496 */                     // def Func1(CharPar1, CharPar2):
/*   497 */                     // ^
/*   498 */                     //
/*   499 */                     $currLineNo = 225;
/*   500 */                     $currColNo = 0;
/*   501 */ 
/*   502 */                     $scope408.co_name = new Sk.builtins['str']('Func1');
/*   503 */                     $scope408.co_varnames = ['CharPar1', 'CharPar2'];
/*   504 */                     var $funcobj415 = new Sk.builtins['function']($scope408, $gbl);
/*   505 */                     $loc.Func1 = $funcobj415;
/*   506 */                     //
/*   507 */                     // line 233:
/*   508 */                     // def Func2(StrParI1, StrParI2):
/*   509 */                     // ^
/*   510 */                     //
/*   511 */                     $currLineNo = 233;
/*   512 */                     $currColNo = 0;
/*   513 */ 
/*   514 */                     $scope416.co_name = new Sk.builtins['str']('Func2');
/*   515 */                     $scope416.co_varnames = ['StrParI1', 'StrParI2'];
/*   516 */                     var $funcobj453 = new Sk.builtins['function']($scope416, $gbl);
/*   517 */                     $loc.Func2 = $funcobj453;
/*   518 */                     //
/*   519 */                     // line 250:
/*   520 */                     // def Func3(EnumParIn):
/*   521 */                     // ^
/*   522 */                     //
/*   523 */                     $currLineNo = 250;
/*   524 */                     $currColNo = 0;
/*   525 */ 
/*   526 */                     $scope454.co_name = new Sk.builtins['str']('Func3');
/*   527 */                     $scope454.co_varnames = ['EnumParIn'];
/*   528 */                     var $funcobj462 = new Sk.builtins['function']($scope454, $gbl);
/*   529 */                     $loc.Func3 = $funcobj462;
/*   530 */                     //
/*   531 */                     // line 255:
/*   532 */                     // main(LOOPS)
/*   533 */                     // ^
/*   534 */                     //
/*   535 */                     $currLineNo = 255;
/*   536 */                     $currColNo = 0;
/*   537 */ 
/*   538 */                     var $loadname463 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   539 */                     var $loadname464 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   540 */                     $ret;
/*   541 */                     $ret = Sk.misceval.callsimOrSuspend($loadname463, $loadname464);
/*   542 */                     $blk = 9; /* allowing case fallthrough */
/*   543 */                 case 9:
/*   544 */                     /* --- function return or resume suspension --- */
/*   545 */                     if ($ret && $ret.$isSuspension) {
/*   546 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 255, 0);
/*   547 */                     }
/*   548 */                     var $call465 = $ret;
/*   549 */                     //
/*   550 */                     // line 255:
/*   551 */                     // main(LOOPS)
/*   552 */                     // ^
/*   553 */                     //
/*   554 */                     $currLineNo = 255;
/*   555 */                     $currColNo = 0;
/*   556 */ 
/*   557 */                     return $loc;
/*   558 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   559 */                 }
/*   560 */             } catch (err) {
/*   561 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   562 */                     err = new Sk.builtin.ExternalError(err);
/*   563 */                 }
/*   564 */                 err.traceback.push({
/*   565 */                     lineno: $currLineNo,
/*   566 */                     colno: $currColNo,
/*   567 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   568 */                 });
/*   569 */                 if ($exc.length > 0) {
/*   570 */                     $err = err;
/*   571 */                     $blk = $exc.pop();
/*   572 */                     continue;
/*   573 */                 } else {
/*   574 */                     throw err;
/*   575 */                 }
/*   576 */             }
/*   577 */         }
/*   578 */     });
/*   579 */     var $scope130 = (function $Record$class_outer($globals, $locals, $rest) {
/*   580 */         var $gbl = $globals,
/*   581 */             $loc = $locals;
/*   582 */         (function $Record$_closure() {
/*   583 */             var $blk = 0,
/*   584 */                 $exc = [],
/*   585 */                 $ret = undefined,
/*   586 */                 $postfinally = undefined,
/*   587 */                 $currLineNo = undefined,
/*   588 */                 $currColNo = undefined;
/*   589 */             while (true) {
/*   590 */                 try {
/*   591 */                     switch ($blk) {
/*   592 */                     case 0:
/*   593 */                         /* --- class entry --- */
/*   594 */                         //
/*   595 */                         // line 45:
/*   596 */                         //     def __init__(self, PtrComp = None, Discr = 0, EnumComp = 0,
/*   597 */                         //     ^
/*   598 */                         //
/*   599 */                         $currLineNo = 45;
/*   600 */                         $currColNo = 4;
/*   601 */ 
/*   602 */                         $scope131.co_name = new Sk.builtins['str']('__init__');
/*   603 */                         $scope131.$defaults = [Sk.builtin.none.none$, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0)];
/*   604 */                         $scope131.co_varnames = ['self', 'PtrComp', 'Discr', 'EnumComp', 'IntComp', 'StringComp'];
/*   605 */                         var $funcobj133 = new Sk.builtins['function']($scope131, $gbl);
/*   606 */                         $loc.__init__ = $funcobj133;
/*   607 */                         //
/*   608 */                         // line 53:
/*   609 */                         //     def copy(self):
/*   610 */                         //     ^
/*   611 */                         //
/*   612 */                         $currLineNo = 53;
/*   613 */                         $currColNo = 4;
/*   614 */ 
/*   615 */                         $scope134.co_name = new Sk.builtins['str']('copy');
/*   616 */                         $scope134.co_varnames = ['self'];
/*   617 */                         var $funcobj143 = new Sk.builtins['function']($scope134, $gbl);
/*   618 */                         $loc.copy = $funcobj143;
/*   619 */                         return;
/*   620 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   621 */                     }
/*   622 */                 } catch (err) {
/*   623 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   624 */                         err = new Sk.builtin.ExternalError(err);
/*   625 */                     }
/*   626 */                     err.traceback.push({
/*   627 */                         lineno: $currLineNo,
/*   628 */                         colno: $currColNo,
/*   629 */                         filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   630 */                     });
/*   631 */                     if ($exc.length > 0) {
/*   632 */                         $err = err;
/*   633 */                         $blk = $exc.pop();
/*   634 */                         continue;
/*   635 */                     } else {
/*   636 */                         throw err;
/*   637 */                     }
/*   638 */                 }
/*   639 */             }
/*   640 */         }).apply(null, $rest);
/*   641 */     });
/*   642 */     var $scope131 = (function $__init__132$(self, PtrComp, Discr, EnumComp, IntComp, StringComp) {
/*   643 */         var Discr, Discr, Discr, EnumComp, EnumComp, EnumComp, IntComp, IntComp, IntComp, PtrComp, PtrComp, PtrComp, StringComp, StringComp, StringComp, self, self, self, self, self, self;
/*   644 */         var $wakeFromSuspension = function() {
/*   645 */             var susp = $scope131.$wakingSuspension;
/*   646 */             delete $scope131.$wakingSuspension;
/*   647 */             $blk = susp.$blk;
/*   648 */             $loc = susp.$loc;
/*   649 */             $gbl = susp.$gbl;
/*   650 */             $exc = susp.$exc;
/*   651 */             $err = susp.$err;
/*   652 */             $postfinally = susp.$postfinally;
/*   653 */             $currLineNo = susp.$lineno;
/*   654 */             $currColNo = susp.$colno;
/*   655 */             Sk.lastYield = Date.now();
/*   656 */             Discr = susp.$tmps.Discr;
/*   657 */             EnumComp = susp.$tmps.EnumComp;
/*   658 */             IntComp = susp.$tmps.IntComp;
/*   659 */             PtrComp = susp.$tmps.PtrComp;
/*   660 */             StringComp = susp.$tmps.StringComp;
/*   661 */             self = susp.$tmps.self;
/*   662 */             try {
/*   663 */                 $ret = susp.child.resume();
/*   664 */             } catch (err) {
/*   665 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   666 */                     err = new Sk.builtin.ExternalError(err);
/*   667 */                 }
/*   668 */                 err.traceback.push({
/*   669 */                     lineno: $currLineNo,
/*   670 */                     colno: $currColNo,
/*   671 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   672 */                 });
/*   673 */                 if ($exc.length > 0) {
/*   674 */                     $err = err;
/*   675 */                     $blk = $exc.pop();
/*   676 */                 } else {
/*   677 */                     throw err;
/*   678 */                 }
/*   679 */             }
/*   680 */         };
/*   681 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   682 */             var susp = new Sk.misceval.Suspension();
/*   683 */             susp.child = $child;
/*   684 */             susp.resume = function() {
/*   685 */                 $scope131.$wakingSuspension = susp;
/*   686 */                 return $scope131();
/*   687 */             };
/*   688 */             susp.data = susp.child.data;
/*   689 */             susp.$blk = $blk;
/*   690 */             susp.$loc = $loc;
/*   691 */             susp.$gbl = $gbl;
/*   692 */             susp.$exc = $exc;
/*   693 */             susp.$err = $err;
/*   694 */             susp.$postfinally = $postfinally;
/*   695 */             susp.$filename = $filename;
/*   696 */             susp.$lineno = $lineno;
/*   697 */             susp.$colno = $colno;
/*   698 */             susp.optional = susp.child.optional;
/*   699 */             susp.$tmps = {
/*   700 */                 "Discr": Discr,
/*   701 */                 "EnumComp": EnumComp,
/*   702 */                 "IntComp": IntComp,
/*   703 */                 "PtrComp": PtrComp,
/*   704 */                 "StringComp": StringComp,
/*   705 */                 "self": self
/*   706 */             };
/*   707 */             return susp;
/*   708 */         };
/*   709 */         var $blk = 0,
/*   710 */             $exc = [],
/*   711 */             $loc = {},
/*   712 */             $gbl = this,
/*   713 */             $err = undefined,
/*   714 */             $ret = undefined,
/*   715 */             $postfinally = undefined,
/*   716 */             $currLineNo = undefined,
/*   717 */             $currColNo = undefined;
/*   718 */         if ($scope131.$wakingSuspension !== undefined) {
/*   719 */             $wakeFromSuspension();
/*   720 */         } else {
/*   721 */             if (PtrComp === undefined) PtrComp = $scope131.$defaults[0];
/*   722 */             if (Discr === undefined) Discr = $scope131.$defaults[1];
/*   723 */             if (EnumComp === undefined) EnumComp = $scope131.$defaults[2];
/*   724 */             if (IntComp === undefined) IntComp = $scope131.$defaults[3];
/*   725 */             if (StringComp === undefined) StringComp = $scope131.$defaults[4];
/*   726 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 6, false, false);
/*   727 */         }
/*   728 */         while (true) {
/*   729 */             try {
/*   730 */                 switch ($blk) {
/*   731 */                 case 0:
/*   732 */                     /* --- codeobj entry --- */
/*   733 */                     if (self === undefined) {
/*   734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   735 */                     }
/*   736 */                     if (PtrComp === undefined) {
/*   737 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   738 */                     }
/*   739 */                     if (Discr === undefined) {
/*   740 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   741 */                     }
/*   742 */                     if (EnumComp === undefined) {
/*   743 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   744 */                     }
/*   745 */                     if (IntComp === undefined) {
/*   746 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   747 */                     }
/*   748 */                     if (StringComp === undefined) {
/*   749 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   750 */                     }
/*   751 */                     if (PtrComp === undefined) {
/*   752 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   753 */                     }
/*   754 */                     if (Discr === undefined) {
/*   755 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   756 */                     }
/*   757 */                     if (EnumComp === undefined) {
/*   758 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   759 */                     }
/*   760 */                     if (IntComp === undefined) {
/*   761 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   762 */                     }
/*   763 */                     if (StringComp === undefined) {
/*   764 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   765 */                     }
/*   766 */ 
/*   767 */                     //
/*   768 */                     // line 47:
/*   769 */                     //         self.PtrComp = PtrComp
/*   770 */                     //         ^
/*   771 */                     //
/*   772 */                     $currLineNo = 47;
/*   773 */                     $currColNo = 8;
/*   774 */ 
/*   775 */                     if (PtrComp === undefined) {
/*   776 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   777 */                     }
/*   778 */                     if (self === undefined) {
/*   779 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   780 */                     }
/*   781 */                     $ret = Sk.abstr.sattr(self, 'PtrComp', PtrComp, true);
/*   782 */                     $blk = 1; /* allowing case fallthrough */
/*   783 */                 case 1:
/*   784 */                     /* --- function return or resume suspension --- */
/*   785 */                     if ($ret && $ret.$isSuspension) {
/*   786 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 47, 8);
/*   787 */                     }
/*   788 */                     //
/*   789 */                     // line 48:
/*   790 */                     //         self.Discr = Discr
/*   791 */                     //         ^
/*   792 */                     //
/*   793 */                     $currLineNo = 48;
/*   794 */                     $currColNo = 8;
/*   795 */ 
/*   796 */                     if (Discr === undefined) {
/*   797 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   798 */                     }
/*   799 */                     if (self === undefined) {
/*   800 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   801 */                     }
/*   802 */                     $ret = Sk.abstr.sattr(self, 'Discr', Discr, true);
/*   803 */                     $blk = 2; /* allowing case fallthrough */
/*   804 */                 case 2:
/*   805 */                     /* --- function return or resume suspension --- */
/*   806 */                     if ($ret && $ret.$isSuspension) {
/*   807 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 48, 8);
/*   808 */                     }
/*   809 */                     //
/*   810 */                     // line 49:
/*   811 */                     //         self.EnumComp = EnumComp
/*   812 */                     //         ^
/*   813 */                     //
/*   814 */                     $currLineNo = 49;
/*   815 */                     $currColNo = 8;
/*   816 */ 
/*   817 */                     if (EnumComp === undefined) {
/*   818 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   819 */                     }
/*   820 */                     if (self === undefined) {
/*   821 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   822 */                     }
/*   823 */                     $ret = Sk.abstr.sattr(self, 'EnumComp', EnumComp, true);
/*   824 */                     $blk = 3; /* allowing case fallthrough */
/*   825 */                 case 3:
/*   826 */                     /* --- function return or resume suspension --- */
/*   827 */                     if ($ret && $ret.$isSuspension) {
/*   828 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 49, 8);
/*   829 */                     }
/*   830 */                     //
/*   831 */                     // line 50:
/*   832 */                     //         self.IntComp = IntComp
/*   833 */                     //         ^
/*   834 */                     //
/*   835 */                     $currLineNo = 50;
/*   836 */                     $currColNo = 8;
/*   837 */ 
/*   838 */                     if (IntComp === undefined) {
/*   839 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   840 */                     }
/*   841 */                     if (self === undefined) {
/*   842 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   843 */                     }
/*   844 */                     $ret = Sk.abstr.sattr(self, 'IntComp', IntComp, true);
/*   845 */                     $blk = 4; /* allowing case fallthrough */
/*   846 */                 case 4:
/*   847 */                     /* --- function return or resume suspension --- */
/*   848 */                     if ($ret && $ret.$isSuspension) {
/*   849 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 50, 8);
/*   850 */                     }
/*   851 */                     //
/*   852 */                     // line 51:
/*   853 */                     //         self.StringComp = StringComp
/*   854 */                     //         ^
/*   855 */                     //
/*   856 */                     $currLineNo = 51;
/*   857 */                     $currColNo = 8;
/*   858 */ 
/*   859 */                     if (StringComp === undefined) {
/*   860 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   861 */                     }
/*   862 */                     if (self === undefined) {
/*   863 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   864 */                     }
/*   865 */                     $ret = Sk.abstr.sattr(self, 'StringComp', StringComp, true);
/*   866 */                     $blk = 5; /* allowing case fallthrough */
/*   867 */                 case 5:
/*   868 */                     /* --- function return or resume suspension --- */
/*   869 */                     if ($ret && $ret.$isSuspension) {
/*   870 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 51, 8);
/*   871 */                     }
/*   872 */                     return Sk.builtin.none.none$;
/*   873 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   874 */                 }
/*   875 */             } catch (err) {
/*   876 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   877 */                     err = new Sk.builtin.ExternalError(err);
/*   878 */                 }
/*   879 */                 err.traceback.push({
/*   880 */                     lineno: $currLineNo,
/*   881 */                     colno: $currColNo,
/*   882 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   883 */                 });
/*   884 */                 if ($exc.length > 0) {
/*   885 */                     $err = err;
/*   886 */                     $blk = $exc.pop();
/*   887 */                     continue;
/*   888 */                 } else {
/*   889 */                     throw err;
/*   890 */                 }
/*   891 */             }
/*   892 */         }
/*   893 */     });
/*   894 */     var $scope134 = (function $copy135$(self) {
/*   895 */         var self, self, self, self, self, self, $loadgbl136, $loadgbl136, $lattr137, $loadgbl136, $lattr137, $lattr138, $loadgbl136, $lattr137, $lattr138, $lattr139, $loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $lattr141;
/*   896 */         var $wakeFromSuspension = function() {
/*   897 */             var susp = $scope134.$wakingSuspension;
/*   898 */             delete $scope134.$wakingSuspension;
/*   899 */             $blk = susp.$blk;
/*   900 */             $loc = susp.$loc;
/*   901 */             $gbl = susp.$gbl;
/*   902 */             $exc = susp.$exc;
/*   903 */             $err = susp.$err;
/*   904 */             $postfinally = susp.$postfinally;
/*   905 */             $currLineNo = susp.$lineno;
/*   906 */             $currColNo = susp.$colno;
/*   907 */             Sk.lastYield = Date.now();
/*   908 */             self = susp.$tmps.self;
/*   909 */             $loadgbl136 = susp.$tmps.$loadgbl136;
/*   910 */             $lattr137 = susp.$tmps.$lattr137;
/*   911 */             $lattr138 = susp.$tmps.$lattr138;
/*   912 */             $lattr139 = susp.$tmps.$lattr139;
/*   913 */             $lattr140 = susp.$tmps.$lattr140;
/*   914 */             $lattr141 = susp.$tmps.$lattr141;
/*   915 */             try {
/*   916 */                 $ret = susp.child.resume();
/*   917 */             } catch (err) {
/*   918 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   919 */                     err = new Sk.builtin.ExternalError(err);
/*   920 */                 }
/*   921 */                 err.traceback.push({
/*   922 */                     lineno: $currLineNo,
/*   923 */                     colno: $currColNo,
/*   924 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   925 */                 });
/*   926 */                 if ($exc.length > 0) {
/*   927 */                     $err = err;
/*   928 */                     $blk = $exc.pop();
/*   929 */                 } else {
/*   930 */                     throw err;
/*   931 */                 }
/*   932 */             }
/*   933 */         };
/*   934 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   935 */             var susp = new Sk.misceval.Suspension();
/*   936 */             susp.child = $child;
/*   937 */             susp.resume = function() {
/*   938 */                 $scope134.$wakingSuspension = susp;
/*   939 */                 return $scope134();
/*   940 */             };
/*   941 */             susp.data = susp.child.data;
/*   942 */             susp.$blk = $blk;
/*   943 */             susp.$loc = $loc;
/*   944 */             susp.$gbl = $gbl;
/*   945 */             susp.$exc = $exc;
/*   946 */             susp.$err = $err;
/*   947 */             susp.$postfinally = $postfinally;
/*   948 */             susp.$filename = $filename;
/*   949 */             susp.$lineno = $lineno;
/*   950 */             susp.$colno = $colno;
/*   951 */             susp.optional = susp.child.optional;
/*   952 */             susp.$tmps = {
/*   953 */                 "self": self,
/*   954 */                 "$loadgbl136": $loadgbl136,
/*   955 */                 "$lattr137": $lattr137,
/*   956 */                 "$lattr138": $lattr138,
/*   957 */                 "$lattr139": $lattr139,
/*   958 */                 "$lattr140": $lattr140,
/*   959 */                 "$lattr141": $lattr141
/*   960 */             };
/*   961 */             return susp;
/*   962 */         };
/*   963 */         var $blk = 0,
/*   964 */             $exc = [],
/*   965 */             $loc = {},
/*   966 */             $gbl = this,
/*   967 */             $err = undefined,
/*   968 */             $ret = undefined,
/*   969 */             $postfinally = undefined,
/*   970 */             $currLineNo = undefined,
/*   971 */             $currColNo = undefined;
/*   972 */         if ($scope134.$wakingSuspension !== undefined) {
/*   973 */             $wakeFromSuspension();
/*   974 */         } else {
/*   975 */             Sk.builtin.pyCheckArgs("copy", arguments, 1, 1, false, false);
/*   976 */         }
/*   977 */         while (true) {
/*   978 */             try {
/*   979 */                 switch ($blk) {
/*   980 */                 case 0:
/*   981 */                     /* --- codeobj entry --- */
/*   982 */                     if (self === undefined) {
/*   983 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   984 */                     }
/*   985 */ 
/*   986 */                     //
/*   987 */                     // line 54:
/*   988 */                     //         return Record(self.PtrComp, self.Discr, self.EnumComp,
/*   989 */                     //         ^
/*   990 */                     //
/*   991 */                     $currLineNo = 54;
/*   992 */                     $currColNo = 8;
/*   993 */ 
/*   994 */                     var $loadgbl136 = Sk.misceval.loadname('Record', $gbl);
/*   995 */                     if (self === undefined) {
/*   996 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   997 */                     }
/*   998 */                     $ret = Sk.abstr.gattr(self, 'PtrComp', true);
/*   999 */                     $blk = 1; /* allowing case fallthrough */
/*  1000 */                 case 1:
/*  1001 */                     /* --- function return or resume suspension --- */
/*  1002 */                     if ($ret && $ret.$isSuspension) {
/*  1003 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 22);
/*  1004 */                     }
/*  1005 */                     var $lattr137 = $ret;
/*  1006 */                     if (self === undefined) {
/*  1007 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1008 */                     }
/*  1009 */                     $ret = Sk.abstr.gattr(self, 'Discr', true);
/*  1010 */                     $blk = 2; /* allowing case fallthrough */
/*  1011 */                 case 2:
/*  1012 */                     /* --- function return or resume suspension --- */
/*  1013 */                     if ($ret && $ret.$isSuspension) {
/*  1014 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 36);
/*  1015 */                     }
/*  1016 */                     var $lattr138 = $ret;
/*  1017 */                     if (self === undefined) {
/*  1018 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1019 */                     }
/*  1020 */                     $ret = Sk.abstr.gattr(self, 'EnumComp', true);
/*  1021 */                     $blk = 3; /* allowing case fallthrough */
/*  1022 */                 case 3:
/*  1023 */                     /* --- function return or resume suspension --- */
/*  1024 */                     if ($ret && $ret.$isSuspension) {
/*  1025 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 48);
/*  1026 */                     }
/*  1027 */                     var $lattr139 = $ret;
/*  1028 */                     if (self === undefined) {
/*  1029 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1030 */                     }
/*  1031 */                     $ret = Sk.abstr.gattr(self, 'IntComp', true);
/*  1032 */                     $blk = 4; /* allowing case fallthrough */
/*  1033 */                 case 4:
/*  1034 */                     /* --- function return or resume suspension --- */
/*  1035 */                     if ($ret && $ret.$isSuspension) {
/*  1036 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 55, 22);
/*  1037 */                     }
/*  1038 */                     var $lattr140 = $ret;
/*  1039 */                     if (self === undefined) {
/*  1040 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1041 */                     }
/*  1042 */                     $ret = Sk.abstr.gattr(self, 'StringComp', true);
/*  1043 */                     $blk = 5; /* allowing case fallthrough */
/*  1044 */                 case 5:
/*  1045 */                     /* --- function return or resume suspension --- */
/*  1046 */                     if ($ret && $ret.$isSuspension) {
/*  1047 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 55, 36);
/*  1048 */                     }
/*  1049 */                     var $lattr141 = $ret;
/*  1050 */                     $ret;
/*  1051 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $lattr141);
/*  1052 */                     $blk = 6; /* allowing case fallthrough */
/*  1053 */                 case 6:
/*  1054 */                     /* --- function return or resume suspension --- */
/*  1055 */                     if ($ret && $ret.$isSuspension) {
/*  1056 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 15);
/*  1057 */                     }
/*  1058 */                     var $call142 = $ret;
/*  1059 */                     //
/*  1060 */                     // line 54:
/*  1061 */                     //         return Record(self.PtrComp, self.Discr, self.EnumComp,
/*  1062 */                     //                ^
/*  1063 */                     //
/*  1064 */                     $currLineNo = 54;
/*  1065 */                     $currColNo = 15;
/*  1066 */ 
/*  1067 */                     return $call142;
/*  1068 */                     return Sk.builtin.none.none$;
/*  1069 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1070 */                 }
/*  1071 */             } catch (err) {
/*  1072 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1073 */                     err = new Sk.builtin.ExternalError(err);
/*  1074 */                 }
/*  1075 */                 err.traceback.push({
/*  1076 */                     lineno: $currLineNo,
/*  1077 */                     colno: $currColNo,
/*  1078 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1079 */                 });
/*  1080 */                 if ($exc.length > 0) {
/*  1081 */                     $err = err;
/*  1082 */                     $blk = $exc.pop();
/*  1083 */                     continue;
/*  1084 */                 } else {
/*  1085 */                     throw err;
/*  1086 */                 }
/*  1087 */             }
/*  1088 */         }
/*  1089 */     });
/*  1090 */     var $scope146 = (function $main147$(loops) {
/*  1091 */         var benchtime, stones; /* locals */
/*  1092 */         var benchtime, loops, loops, loops, stones, $loadgbl148;
/*  1093 */         var $wakeFromSuspension = function() {
/*  1094 */             var susp = $scope146.$wakingSuspension;
/*  1095 */             delete $scope146.$wakingSuspension;
/*  1096 */             $blk = susp.$blk;
/*  1097 */             $loc = susp.$loc;
/*  1098 */             $gbl = susp.$gbl;
/*  1099 */             $exc = susp.$exc;
/*  1100 */             $err = susp.$err;
/*  1101 */             $postfinally = susp.$postfinally;
/*  1102 */             $currLineNo = susp.$lineno;
/*  1103 */             $currColNo = susp.$colno;
/*  1104 */             Sk.lastYield = Date.now();
/*  1105 */             benchtime = susp.$tmps.benchtime;
/*  1106 */             loops = susp.$tmps.loops;
/*  1107 */             stones = susp.$tmps.stones;
/*  1108 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*  1109 */             try {
/*  1110 */                 $ret = susp.child.resume();
/*  1111 */             } catch (err) {
/*  1112 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1113 */                     err = new Sk.builtin.ExternalError(err);
/*  1114 */                 }
/*  1115 */                 err.traceback.push({
/*  1116 */                     lineno: $currLineNo,
/*  1117 */                     colno: $currColNo,
/*  1118 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1119 */                 });
/*  1120 */                 if ($exc.length > 0) {
/*  1121 */                     $err = err;
/*  1122 */                     $blk = $exc.pop();
/*  1123 */                 } else {
/*  1124 */                     throw err;
/*  1125 */                 }
/*  1126 */             }
/*  1127 */         };
/*  1128 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1129 */             var susp = new Sk.misceval.Suspension();
/*  1130 */             susp.child = $child;
/*  1131 */             susp.resume = function() {
/*  1132 */                 $scope146.$wakingSuspension = susp;
/*  1133 */                 return $scope146();
/*  1134 */             };
/*  1135 */             susp.data = susp.child.data;
/*  1136 */             susp.$blk = $blk;
/*  1137 */             susp.$loc = $loc;
/*  1138 */             susp.$gbl = $gbl;
/*  1139 */             susp.$exc = $exc;
/*  1140 */             susp.$err = $err;
/*  1141 */             susp.$postfinally = $postfinally;
/*  1142 */             susp.$filename = $filename;
/*  1143 */             susp.$lineno = $lineno;
/*  1144 */             susp.$colno = $colno;
/*  1145 */             susp.optional = susp.child.optional;
/*  1146 */             susp.$tmps = {
/*  1147 */                 "benchtime": benchtime,
/*  1148 */                 "loops": loops,
/*  1149 */                 "stones": stones,
/*  1150 */                 "$loadgbl148": $loadgbl148
/*  1151 */             };
/*  1152 */             return susp;
/*  1153 */         };
/*  1154 */         var $blk = 0,
/*  1155 */             $exc = [],
/*  1156 */             $loc = {},
/*  1157 */             $gbl = this,
/*  1158 */             $err = undefined,
/*  1159 */             $ret = undefined,
/*  1160 */             $postfinally = undefined,
/*  1161 */             $currLineNo = undefined,
/*  1162 */             $currColNo = undefined;
/*  1163 */         if ($scope146.$wakingSuspension !== undefined) {
/*  1164 */             $wakeFromSuspension();
/*  1165 */         } else {
/*  1166 */             if (loops === undefined) loops = $scope146.$defaults[0];
/*  1167 */             Sk.builtin.pyCheckArgs("main", arguments, 0, 1, false, false);
/*  1168 */         }
/*  1169 */         while (true) {
/*  1170 */             try {
/*  1171 */                 switch ($blk) {
/*  1172 */                 case 0:
/*  1173 */                     /* --- codeobj entry --- */
/*  1174 */                     if (loops === undefined) {
/*  1175 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1176 */                     }
/*  1177 */                     if (loops === undefined) {
/*  1178 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1179 */                     }
/*  1180 */ 
/*  1181 */                     //
/*  1182 */                     // line 61:
/*  1183 */                     //     benchtime, stones = pystones(loops)
/*  1184 */                     //     ^
/*  1185 */                     //
/*  1186 */                     $currLineNo = 61;
/*  1187 */                     $currColNo = 4;
/*  1188 */ 
/*  1189 */                     var $loadgbl148 = Sk.misceval.loadname('pystones', $gbl);
/*  1190 */                     if (loops === undefined) {
/*  1191 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1192 */                     }
/*  1193 */                     $ret;
/*  1194 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, loops);
/*  1195 */                     $blk = 1; /* allowing case fallthrough */
/*  1196 */                 case 1:
/*  1197 */                     /* --- function return or resume suspension --- */
/*  1198 */                     if ($ret && $ret.$isSuspension) {
/*  1199 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 61, 24);
/*  1200 */                     }
/*  1201 */                     var $call149 = $ret;
/*  1202 */                     //
/*  1203 */                     // line 61:
/*  1204 */                     //     benchtime, stones = pystones(loops)
/*  1205 */                     //                         ^
/*  1206 */                     //
/*  1207 */                     $currLineNo = 61;
/*  1208 */                     $currColNo = 24;
/*  1209 */ 
/*  1210 */                     var $items150 = Sk.abstr.sequenceUnpack($call149, 2);
/*  1211 */                     benchtime = $items150[0];
/*  1212 */                     stones = $items150[1];
/*  1213 */                     return Sk.builtin.none.none$;
/*  1214 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1215 */                 }
/*  1216 */             } catch (err) {
/*  1217 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1218 */                     err = new Sk.builtin.ExternalError(err);
/*  1219 */                 }
/*  1220 */                 err.traceback.push({
/*  1221 */                     lineno: $currLineNo,
/*  1222 */                     colno: $currColNo,
/*  1223 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1224 */                 });
/*  1225 */                 if ($exc.length > 0) {
/*  1226 */                     $err = err;
/*  1227 */                     $blk = $exc.pop();
/*  1228 */                     continue;
/*  1229 */                 } else {
/*  1230 */                     throw err;
/*  1231 */                 }
/*  1232 */             }
/*  1233 */         }
/*  1234 */     });
/*  1235 */     var $scope153 = (function $pystones154$(loops) {
/*  1236 */         var loops, loops, loops, $loadgbl155;
/*  1237 */         var $wakeFromSuspension = function() {
/*  1238 */             var susp = $scope153.$wakingSuspension;
/*  1239 */             delete $scope153.$wakingSuspension;
/*  1240 */             $blk = susp.$blk;
/*  1241 */             $loc = susp.$loc;
/*  1242 */             $gbl = susp.$gbl;
/*  1243 */             $exc = susp.$exc;
/*  1244 */             $err = susp.$err;
/*  1245 */             $postfinally = susp.$postfinally;
/*  1246 */             $currLineNo = susp.$lineno;
/*  1247 */             $currColNo = susp.$colno;
/*  1248 */             Sk.lastYield = Date.now();
/*  1249 */             loops = susp.$tmps.loops;
/*  1250 */             $loadgbl155 = susp.$tmps.$loadgbl155;
/*  1251 */             try {
/*  1252 */                 $ret = susp.child.resume();
/*  1253 */             } catch (err) {
/*  1254 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1255 */                     err = new Sk.builtin.ExternalError(err);
/*  1256 */                 }
/*  1257 */                 err.traceback.push({
/*  1258 */                     lineno: $currLineNo,
/*  1259 */                     colno: $currColNo,
/*  1260 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1261 */                 });
/*  1262 */                 if ($exc.length > 0) {
/*  1263 */                     $err = err;
/*  1264 */                     $blk = $exc.pop();
/*  1265 */                 } else {
/*  1266 */                     throw err;
/*  1267 */                 }
/*  1268 */             }
/*  1269 */         };
/*  1270 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1271 */             var susp = new Sk.misceval.Suspension();
/*  1272 */             susp.child = $child;
/*  1273 */             susp.resume = function() {
/*  1274 */                 $scope153.$wakingSuspension = susp;
/*  1275 */                 return $scope153();
/*  1276 */             };
/*  1277 */             susp.data = susp.child.data;
/*  1278 */             susp.$blk = $blk;
/*  1279 */             susp.$loc = $loc;
/*  1280 */             susp.$gbl = $gbl;
/*  1281 */             susp.$exc = $exc;
/*  1282 */             susp.$err = $err;
/*  1283 */             susp.$postfinally = $postfinally;
/*  1284 */             susp.$filename = $filename;
/*  1285 */             susp.$lineno = $lineno;
/*  1286 */             susp.$colno = $colno;
/*  1287 */             susp.optional = susp.child.optional;
/*  1288 */             susp.$tmps = {
/*  1289 */                 "loops": loops,
/*  1290 */                 "$loadgbl155": $loadgbl155
/*  1291 */             };
/*  1292 */             return susp;
/*  1293 */         };
/*  1294 */         var $blk = 0,
/*  1295 */             $exc = [],
/*  1296 */             $loc = {},
/*  1297 */             $gbl = this,
/*  1298 */             $err = undefined,
/*  1299 */             $ret = undefined,
/*  1300 */             $postfinally = undefined,
/*  1301 */             $currLineNo = undefined,
/*  1302 */             $currColNo = undefined;
/*  1303 */         if ($scope153.$wakingSuspension !== undefined) {
/*  1304 */             $wakeFromSuspension();
/*  1305 */         } else {
/*  1306 */             if (loops === undefined) loops = $scope153.$defaults[0];
/*  1307 */             Sk.builtin.pyCheckArgs("pystones", arguments, 0, 1, false, false);
/*  1308 */         }
/*  1309 */         while (true) {
/*  1310 */             try {
/*  1311 */                 switch ($blk) {
/*  1312 */                 case 0:
/*  1313 */                     /* --- codeobj entry --- */
/*  1314 */                     if (loops === undefined) {
/*  1315 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1316 */                     }
/*  1317 */                     if (loops === undefined) {
/*  1318 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1319 */                     }
/*  1320 */ 
/*  1321 */                     //
/*  1322 */                     // line 68:
/*  1323 */                     //     return Proc0(loops)
/*  1324 */                     //     ^
/*  1325 */                     //
/*  1326 */                     $currLineNo = 68;
/*  1327 */                     $currColNo = 4;
/*  1328 */ 
/*  1329 */                     var $loadgbl155 = Sk.misceval.loadname('Proc0', $gbl);
/*  1330 */                     if (loops === undefined) {
/*  1331 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1332 */                     }
/*  1333 */                     $ret;
/*  1334 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl155, loops);
/*  1335 */                     $blk = 1; /* allowing case fallthrough */
/*  1336 */                 case 1:
/*  1337 */                     /* --- function return or resume suspension --- */
/*  1338 */                     if ($ret && $ret.$isSuspension) {
/*  1339 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 68, 11);
/*  1340 */                     }
/*  1341 */                     var $call156 = $ret;
/*  1342 */                     //
/*  1343 */                     // line 68:
/*  1344 */                     //     return Proc0(loops)
/*  1345 */                     //            ^
/*  1346 */                     //
/*  1347 */                     $currLineNo = 68;
/*  1348 */                     $currColNo = 11;
/*  1349 */ 
/*  1350 */                     return $call156;
/*  1351 */                     return Sk.builtin.none.none$;
/*  1352 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1353 */                 }
/*  1354 */             } catch (err) {
/*  1355 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1356 */                     err = new Sk.builtin.ExternalError(err);
/*  1357 */                 }
/*  1358 */                 err.traceback.push({
/*  1359 */                     lineno: $currLineNo,
/*  1360 */                     colno: $currColNo,
/*  1361 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1362 */                 });
/*  1363 */                 if ($exc.length > 0) {
/*  1364 */                     $err = err;
/*  1365 */                     $blk = $exc.pop();
/*  1366 */                     continue;
/*  1367 */                 } else {
/*  1368 */                     throw err;
/*  1369 */                 }
/*  1370 */             }
/*  1371 */         }
/*  1372 */     });
/*  1373 */     var $scope175 = (function $Proc0176$(loops) {
/*  1374 */         var CharIndex, EnumLoc, IntLoc1, IntLoc2, IntLoc3, String1Loc, String2Loc, benchtime, i, loopsPerBenchtime, nulltime, starttime; /* locals */
/*  1375 */         var CharIndex, CharIndex, CharIndex, CharIndex, CharIndex, EnumLoc, EnumLoc, EnumLoc, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc3, IntLoc3, IntLoc3, IntLoc3, IntLoc3, IntLoc3, String1Loc, String1Loc, String2Loc, String2Loc, benchtime, benchtime, benchtime, benchtime, i, i, loops, loops, loops, loops, loops, loopsPerBenchtime, loopsPerBenchtime, loopsPerBenchtime, nulltime, nulltime, starttime, starttime, starttime, starttime, $loadgbl177, $loadgbl179, $iter181, $loadgbl179, $call180, $iter181, $loadgbl183, $loadgbl186, $loadgbl188, $loadgbl190, $loadgbl191, $loadgbl192, $loadgbl193, $loadgbl194, $loadgbl195, $loadgbl196, $str197, $loadgbl198, $loadgbl200, $loadgbl200, $lsubscr201, $loadgbl202, $loadgbl204, $iter206, $loadgbl204, $call205, $iter206, $loadgbl208, $loadgbl210, $loadgbl214, $compareres217, $loadgbl222, $loadgbl225, $loadgbl226, $loadgbl227, $loadgbl229, $loadgbl230, $compareres233, $loadgbl234, $compareres237, $loadgbl238, $str239, $compareres237, $loadgbl238, $str239, $call240, $loadgbl243, $loadgbl244, $loadgbl246, $loadgbl247, $loadgbl246, $loadgbl247, $call248, $binop249, $loadgbl256, $loadgbl258, $compareres262;
/*  1376 */         var $wakeFromSuspension = function() {
/*  1377 */             var susp = $scope175.$wakingSuspension;
/*  1378 */             delete $scope175.$wakingSuspension;
/*  1379 */             $blk = susp.$blk;
/*  1380 */             $loc = susp.$loc;
/*  1381 */             $gbl = susp.$gbl;
/*  1382 */             $exc = susp.$exc;
/*  1383 */             $err = susp.$err;
/*  1384 */             $postfinally = susp.$postfinally;
/*  1385 */             $currLineNo = susp.$lineno;
/*  1386 */             $currColNo = susp.$colno;
/*  1387 */             Sk.lastYield = Date.now();
/*  1388 */             CharIndex = susp.$tmps.CharIndex;
/*  1389 */             EnumLoc = susp.$tmps.EnumLoc;
/*  1390 */             IntLoc1 = susp.$tmps.IntLoc1;
/*  1391 */             IntLoc2 = susp.$tmps.IntLoc2;
/*  1392 */             IntLoc3 = susp.$tmps.IntLoc3;
/*  1393 */             String1Loc = susp.$tmps.String1Loc;
/*  1394 */             String2Loc = susp.$tmps.String2Loc;
/*  1395 */             benchtime = susp.$tmps.benchtime;
/*  1396 */             i = susp.$tmps.i;
/*  1397 */             loops = susp.$tmps.loops;
/*  1398 */             loopsPerBenchtime = susp.$tmps.loopsPerBenchtime;
/*  1399 */             nulltime = susp.$tmps.nulltime;
/*  1400 */             starttime = susp.$tmps.starttime;
/*  1401 */             $loadgbl177 = susp.$tmps.$loadgbl177;
/*  1402 */             $loadgbl179 = susp.$tmps.$loadgbl179;
/*  1403 */             $iter181 = susp.$tmps.$iter181;
/*  1404 */             $call180 = susp.$tmps.$call180;
/*  1405 */             $loadgbl183 = susp.$tmps.$loadgbl183;
/*  1406 */             $loadgbl186 = susp.$tmps.$loadgbl186;
/*  1407 */             $loadgbl188 = susp.$tmps.$loadgbl188;
/*  1408 */             $loadgbl190 = susp.$tmps.$loadgbl190;
/*  1409 */             $loadgbl191 = susp.$tmps.$loadgbl191;
/*  1410 */             $loadgbl192 = susp.$tmps.$loadgbl192;
/*  1411 */             $loadgbl193 = susp.$tmps.$loadgbl193;
/*  1412 */             $loadgbl194 = susp.$tmps.$loadgbl194;
/*  1413 */             $loadgbl195 = susp.$tmps.$loadgbl195;
/*  1414 */             $loadgbl196 = susp.$tmps.$loadgbl196;
/*  1415 */             $str197 = susp.$tmps.$str197;
/*  1416 */             $loadgbl198 = susp.$tmps.$loadgbl198;
/*  1417 */             $loadgbl200 = susp.$tmps.$loadgbl200;
/*  1418 */             $lsubscr201 = susp.$tmps.$lsubscr201;
/*  1419 */             $loadgbl202 = susp.$tmps.$loadgbl202;
/*  1420 */             $loadgbl204 = susp.$tmps.$loadgbl204;
/*  1421 */             $iter206 = susp.$tmps.$iter206;
/*  1422 */             $call205 = susp.$tmps.$call205;
/*  1423 */             $loadgbl208 = susp.$tmps.$loadgbl208;
/*  1424 */             $loadgbl210 = susp.$tmps.$loadgbl210;
/*  1425 */             $loadgbl214 = susp.$tmps.$loadgbl214;
/*  1426 */             $compareres217 = susp.$tmps.$compareres217;
/*  1427 */             $loadgbl222 = susp.$tmps.$loadgbl222;
/*  1428 */             $loadgbl225 = susp.$tmps.$loadgbl225;
/*  1429 */             $loadgbl226 = susp.$tmps.$loadgbl226;
/*  1430 */             $loadgbl227 = susp.$tmps.$loadgbl227;
/*  1431 */             $loadgbl229 = susp.$tmps.$loadgbl229;
/*  1432 */             $loadgbl230 = susp.$tmps.$loadgbl230;
/*  1433 */             $compareres233 = susp.$tmps.$compareres233;
/*  1434 */             $loadgbl234 = susp.$tmps.$loadgbl234;
/*  1435 */             $compareres237 = susp.$tmps.$compareres237;
/*  1436 */             $loadgbl238 = susp.$tmps.$loadgbl238;
/*  1437 */             $str239 = susp.$tmps.$str239;
/*  1438 */             $call240 = susp.$tmps.$call240;
/*  1439 */             $loadgbl243 = susp.$tmps.$loadgbl243;
/*  1440 */             $loadgbl244 = susp.$tmps.$loadgbl244;
/*  1441 */             $loadgbl246 = susp.$tmps.$loadgbl246;
/*  1442 */             $loadgbl247 = susp.$tmps.$loadgbl247;
/*  1443 */             $call248 = susp.$tmps.$call248;
/*  1444 */             $binop249 = susp.$tmps.$binop249;
/*  1445 */             $loadgbl256 = susp.$tmps.$loadgbl256;
/*  1446 */             $loadgbl258 = susp.$tmps.$loadgbl258;
/*  1447 */             $compareres262 = susp.$tmps.$compareres262;
/*  1448 */             try {
/*  1449 */                 $ret = susp.child.resume();
/*  1450 */             } catch (err) {
/*  1451 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1452 */                     err = new Sk.builtin.ExternalError(err);
/*  1453 */                 }
/*  1454 */                 err.traceback.push({
/*  1455 */                     lineno: $currLineNo,
/*  1456 */                     colno: $currColNo,
/*  1457 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1458 */                 });
/*  1459 */                 if ($exc.length > 0) {
/*  1460 */                     $err = err;
/*  1461 */                     $blk = $exc.pop();
/*  1462 */                 } else {
/*  1463 */                     throw err;
/*  1464 */                 }
/*  1465 */             }
/*  1466 */         };
/*  1467 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1468 */             var susp = new Sk.misceval.Suspension();
/*  1469 */             susp.child = $child;
/*  1470 */             susp.resume = function() {
/*  1471 */                 $scope175.$wakingSuspension = susp;
/*  1472 */                 return $scope175();
/*  1473 */             };
/*  1474 */             susp.data = susp.child.data;
/*  1475 */             susp.$blk = $blk;
/*  1476 */             susp.$loc = $loc;
/*  1477 */             susp.$gbl = $gbl;
/*  1478 */             susp.$exc = $exc;
/*  1479 */             susp.$err = $err;
/*  1480 */             susp.$postfinally = $postfinally;
/*  1481 */             susp.$filename = $filename;
/*  1482 */             susp.$lineno = $lineno;
/*  1483 */             susp.$colno = $colno;
/*  1484 */             susp.optional = susp.child.optional;
/*  1485 */             susp.$tmps = {
/*  1486 */                 "CharIndex": CharIndex,
/*  1487 */                 "EnumLoc": EnumLoc,
/*  1488 */                 "IntLoc1": IntLoc1,
/*  1489 */                 "IntLoc2": IntLoc2,
/*  1490 */                 "IntLoc3": IntLoc3,
/*  1491 */                 "String1Loc": String1Loc,
/*  1492 */                 "String2Loc": String2Loc,
/*  1493 */                 "benchtime": benchtime,
/*  1494 */                 "i": i,
/*  1495 */                 "loops": loops,
/*  1496 */                 "loopsPerBenchtime": loopsPerBenchtime,
/*  1497 */                 "nulltime": nulltime,
/*  1498 */                 "starttime": starttime,
/*  1499 */                 "$loadgbl177": $loadgbl177,
/*  1500 */                 "$loadgbl179": $loadgbl179,
/*  1501 */                 "$iter181": $iter181,
/*  1502 */                 "$call180": $call180,
/*  1503 */                 "$loadgbl183": $loadgbl183,
/*  1504 */                 "$loadgbl186": $loadgbl186,
/*  1505 */                 "$loadgbl188": $loadgbl188,
/*  1506 */                 "$loadgbl190": $loadgbl190,
/*  1507 */                 "$loadgbl191": $loadgbl191,
/*  1508 */                 "$loadgbl192": $loadgbl192,
/*  1509 */                 "$loadgbl193": $loadgbl193,
/*  1510 */                 "$loadgbl194": $loadgbl194,
/*  1511 */                 "$loadgbl195": $loadgbl195,
/*  1512 */                 "$loadgbl196": $loadgbl196,
/*  1513 */                 "$str197": $str197,
/*  1514 */                 "$loadgbl198": $loadgbl198,
/*  1515 */                 "$loadgbl200": $loadgbl200,
/*  1516 */                 "$lsubscr201": $lsubscr201,
/*  1517 */                 "$loadgbl202": $loadgbl202,
/*  1518 */                 "$loadgbl204": $loadgbl204,
/*  1519 */                 "$iter206": $iter206,
/*  1520 */                 "$call205": $call205,
/*  1521 */                 "$loadgbl208": $loadgbl208,
/*  1522 */                 "$loadgbl210": $loadgbl210,
/*  1523 */                 "$loadgbl214": $loadgbl214,
/*  1524 */                 "$compareres217": $compareres217,
/*  1525 */                 "$loadgbl222": $loadgbl222,
/*  1526 */                 "$loadgbl225": $loadgbl225,
/*  1527 */                 "$loadgbl226": $loadgbl226,
/*  1528 */                 "$loadgbl227": $loadgbl227,
/*  1529 */                 "$loadgbl229": $loadgbl229,
/*  1530 */                 "$loadgbl230": $loadgbl230,
/*  1531 */                 "$compareres233": $compareres233,
/*  1532 */                 "$loadgbl234": $loadgbl234,
/*  1533 */                 "$compareres237": $compareres237,
/*  1534 */                 "$loadgbl238": $loadgbl238,
/*  1535 */                 "$str239": $str239,
/*  1536 */                 "$call240": $call240,
/*  1537 */                 "$loadgbl243": $loadgbl243,
/*  1538 */                 "$loadgbl244": $loadgbl244,
/*  1539 */                 "$loadgbl246": $loadgbl246,
/*  1540 */                 "$loadgbl247": $loadgbl247,
/*  1541 */                 "$call248": $call248,
/*  1542 */                 "$binop249": $binop249,
/*  1543 */                 "$loadgbl256": $loadgbl256,
/*  1544 */                 "$loadgbl258": $loadgbl258,
/*  1545 */                 "$compareres262": $compareres262
/*  1546 */             };
/*  1547 */             return susp;
/*  1548 */         };
/*  1549 */         var $blk = 0,
/*  1550 */             $exc = [],
/*  1551 */             $loc = {},
/*  1552 */             $gbl = this,
/*  1553 */             $err = undefined,
/*  1554 */             $ret = undefined,
/*  1555 */             $postfinally = undefined,
/*  1556 */             $currLineNo = undefined,
/*  1557 */             $currColNo = undefined;
/*  1558 */         if ($scope175.$wakingSuspension !== undefined) {
/*  1559 */             $wakeFromSuspension();
/*  1560 */         } else {
/*  1561 */             if (loops === undefined) loops = $scope175.$defaults[0];
/*  1562 */             Sk.builtin.pyCheckArgs("Proc0", arguments, 0, 1, false, false);
/*  1563 */         }
/*  1564 */         while (true) {
/*  1565 */             try {
/*  1566 */                 switch ($blk) {
/*  1567 */                 case 0:
/*  1568 */                     /* --- codeobj entry --- */
/*  1569 */                     if (loops === undefined) {
/*  1570 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1571 */                     }
/*  1572 */                     if (loops === undefined) {
/*  1573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1574 */                     }
/*  1575 */ 
/*  1576 */                     //
/*  1577 */                     // line 80:
/*  1578 */                     //     global IntGlob
/*  1579 */                     //     ^
/*  1580 */                     //
/*  1581 */                     $currLineNo = 80;
/*  1582 */                     $currColNo = 4;
/*  1583 */ 
/*  1584 */ 
/*  1585 */                     //
/*  1586 */                     // line 81:
/*  1587 */                     //     global BoolGlob
/*  1588 */                     //     ^
/*  1589 */                     //
/*  1590 */                     $currLineNo = 81;
/*  1591 */                     $currColNo = 4;
/*  1592 */ 
/*  1593 */ 
/*  1594 */                     //
/*  1595 */                     // line 82:
/*  1596 */                     //     global Char1Glob
/*  1597 */                     //     ^
/*  1598 */                     //
/*  1599 */                     $currLineNo = 82;
/*  1600 */                     $currColNo = 4;
/*  1601 */ 
/*  1602 */ 
/*  1603 */                     //
/*  1604 */                     // line 83:
/*  1605 */                     //     global Char2Glob
/*  1606 */                     //     ^
/*  1607 */                     //
/*  1608 */                     $currLineNo = 83;
/*  1609 */                     $currColNo = 4;
/*  1610 */ 
/*  1611 */ 
/*  1612 */                     //
/*  1613 */                     // line 84:
/*  1614 */                     //     global Array1Glob
/*  1615 */                     //     ^
/*  1616 */                     //
/*  1617 */                     $currLineNo = 84;
/*  1618 */                     $currColNo = 4;
/*  1619 */ 
/*  1620 */ 
/*  1621 */                     //
/*  1622 */                     // line 85:
/*  1623 */                     //     global Array2Glob
/*  1624 */                     //     ^
/*  1625 */                     //
/*  1626 */                     $currLineNo = 85;
/*  1627 */                     $currColNo = 4;
/*  1628 */ 
/*  1629 */ 
/*  1630 */                     //
/*  1631 */                     // line 86:
/*  1632 */                     //     global PtrGlb
/*  1633 */                     //     ^
/*  1634 */                     //
/*  1635 */                     $currLineNo = 86;
/*  1636 */                     $currColNo = 4;
/*  1637 */ 
/*  1638 */ 
/*  1639 */                     //
/*  1640 */                     // line 87:
/*  1641 */                     //     global PtrGlbNext
/*  1642 */                     //     ^
/*  1643 */                     //
/*  1644 */                     $currLineNo = 87;
/*  1645 */                     $currColNo = 4;
/*  1646 */ 
/*  1647 */ 
/*  1648 */                     //
/*  1649 */                     // line 89:
/*  1650 */                     //     starttime = time()
/*  1651 */                     //     ^
/*  1652 */                     //
/*  1653 */                     $currLineNo = 89;
/*  1654 */                     $currColNo = 4;
/*  1655 */ 
/*  1656 */                     var $loadgbl177 = Sk.misceval.loadname('time', $gbl);
/*  1657 */                     $ret;
/*  1658 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl177);
/*  1659 */                     $blk = 1; /* allowing case fallthrough */
/*  1660 */                 case 1:
/*  1661 */                     /* --- function return or resume suspension --- */
/*  1662 */                     if ($ret && $ret.$isSuspension) {
/*  1663 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 89, 16);
/*  1664 */                     }
/*  1665 */                     var $call178 = $ret;
/*  1666 */                     //
/*  1667 */                     // line 89:
/*  1668 */                     //     starttime = time()
/*  1669 */                     //                 ^
/*  1670 */                     //
/*  1671 */                     $currLineNo = 89;
/*  1672 */                     $currColNo = 16;
/*  1673 */ 
/*  1674 */                     starttime = $call178;
/*  1675 */                     //
/*  1676 */                     // line 90:
/*  1677 */                     //     for i in range(loops):
/*  1678 */                     //     ^
/*  1679 */                     //
/*  1680 */                     $currLineNo = 90;
/*  1681 */                     $currColNo = 4;
/*  1682 */ 
/*  1683 */                     var $loadgbl179 = Sk.misceval.loadname('range', $gbl);
/*  1684 */                     if (loops === undefined) {
/*  1685 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1686 */                     }
/*  1687 */                     $ret;
/*  1688 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl179, loops);
/*  1689 */                     $blk = 5; /* allowing case fallthrough */
/*  1690 */                 case 5:
/*  1691 */                     /* --- function return or resume suspension --- */
/*  1692 */                     if ($ret && $ret.$isSuspension) {
/*  1693 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 90, 13);
/*  1694 */                     }
/*  1695 */                     var $call180 = $ret;
/*  1696 */                     //
/*  1697 */                     // line 90:
/*  1698 */                     //     for i in range(loops):
/*  1699 */                     //              ^
/*  1700 */                     //
/*  1701 */                     $currLineNo = 90;
/*  1702 */                     $currColNo = 13;
/*  1703 */ 
/*  1704 */                     var $iter181 = Sk.abstr.iter($call180);
/*  1705 */                     $blk = 2; /* allowing case fallthrough */
/*  1706 */                 case 2:
/*  1707 */                     /* --- for start --- */
/*  1708 */                     $ret = Sk.abstr.iternext($iter181, true);
/*  1709 */                     $blk = 6; /* allowing case fallthrough */
/*  1710 */                 case 6:
/*  1711 */                     /* --- function return or resume suspension --- */
/*  1712 */                     if ($ret && $ret.$isSuspension) {
/*  1713 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 90, 4);
/*  1714 */                     }
/*  1715 */                     var $next182 = $ret;
/*  1716 */                     if ($next182 === undefined) {
/*  1717 */                         $blk = 3;
/*  1718 */                         continue;
/*  1719 */                     }
/*  1720 */                     i = $next182;
/*  1721 */                     //
/*  1722 */                     // line 91:
/*  1723 */                     //         pass
/*  1724 */                     //         ^
/*  1725 */                     //
/*  1726 */                     $currLineNo = 91;
/*  1727 */                     $currColNo = 8;
/*  1728 */ 
/*  1729 */                     $blk = 2; /* jump */
/*  1730 */                     continue;
/*  1731 */                 case 3:
/*  1732 */                     /* --- for cleanup --- */
/*  1733 */                     $blk = 4; /* allowing case fallthrough */
/*  1734 */                 case 4:
/*  1735 */                     /* --- for end --- */
/*  1736 */                     //
/*  1737 */                     // line 92:
/*  1738 */                     //     nulltime = time() - starttime
/*  1739 */                     //     ^
/*  1740 */                     //
/*  1741 */                     $currLineNo = 92;
/*  1742 */                     $currColNo = 4;
/*  1743 */ 
/*  1744 */                     var $loadgbl183 = Sk.misceval.loadname('time', $gbl);
/*  1745 */                     $ret;
/*  1746 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl183);
/*  1747 */                     $blk = 7; /* allowing case fallthrough */
/*  1748 */                 case 7:
/*  1749 */                     /* --- function return or resume suspension --- */
/*  1750 */                     if ($ret && $ret.$isSuspension) {
/*  1751 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 92, 15);
/*  1752 */                     }
/*  1753 */                     var $call184 = $ret;
/*  1754 */                     //
/*  1755 */                     // line 92:
/*  1756 */                     //     nulltime = time() - starttime
/*  1757 */                     //                ^
/*  1758 */                     //
/*  1759 */                     $currLineNo = 92;
/*  1760 */                     $currColNo = 15;
/*  1761 */ 
/*  1762 */                     if (starttime === undefined) {
/*  1763 */                         throw new Sk.builtin.UnboundLocalError('local variable \'starttime\' referenced before assignment');
/*  1764 */                     }
/*  1765 */                     var $binop185 = Sk.abstr.numberBinOp($call184, starttime, 'Sub');
/*  1766 */                     nulltime = $binop185;
/*  1767 */                     //
/*  1768 */                     // line 94:
/*  1769 */                     //     PtrGlbNext = Record()
/*  1770 */                     //     ^
/*  1771 */                     //
/*  1772 */                     $currLineNo = 94;
/*  1773 */                     $currColNo = 4;
/*  1774 */ 
/*  1775 */                     var $loadgbl186 = Sk.misceval.loadname('Record', $gbl);
/*  1776 */                     $ret;
/*  1777 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl186);
/*  1778 */                     $blk = 8; /* allowing case fallthrough */
/*  1779 */                 case 8:
/*  1780 */                     /* --- function return or resume suspension --- */
/*  1781 */                     if ($ret && $ret.$isSuspension) {
/*  1782 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 94, 17);
/*  1783 */                     }
/*  1784 */                     var $call187 = $ret;
/*  1785 */                     //
/*  1786 */                     // line 94:
/*  1787 */                     //     PtrGlbNext = Record()
/*  1788 */                     //                  ^
/*  1789 */                     //
/*  1790 */                     $currLineNo = 94;
/*  1791 */                     $currColNo = 17;
/*  1792 */ 
/*  1793 */                     $gbl.PtrGlbNext = $call187;
/*  1794 */                     //
/*  1795 */                     // line 95:
/*  1796 */                     //     PtrGlb = Record()
/*  1797 */                     //     ^
/*  1798 */                     //
/*  1799 */                     $currLineNo = 95;
/*  1800 */                     $currColNo = 4;
/*  1801 */ 
/*  1802 */                     var $loadgbl188 = Sk.misceval.loadname('Record', $gbl);
/*  1803 */                     $ret;
/*  1804 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl188);
/*  1805 */                     $blk = 9; /* allowing case fallthrough */
/*  1806 */                 case 9:
/*  1807 */                     /* --- function return or resume suspension --- */
/*  1808 */                     if ($ret && $ret.$isSuspension) {
/*  1809 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 95, 13);
/*  1810 */                     }
/*  1811 */                     var $call189 = $ret;
/*  1812 */                     //
/*  1813 */                     // line 95:
/*  1814 */                     //     PtrGlb = Record()
/*  1815 */                     //              ^
/*  1816 */                     //
/*  1817 */                     $currLineNo = 95;
/*  1818 */                     $currColNo = 13;
/*  1819 */ 
/*  1820 */                     $gbl.PtrGlb = $call189;
/*  1821 */                     //
/*  1822 */                     // line 96:
/*  1823 */                     //     PtrGlb.PtrComp = PtrGlbNext
/*  1824 */                     //     ^
/*  1825 */                     //
/*  1826 */                     $currLineNo = 96;
/*  1827 */                     $currColNo = 4;
/*  1828 */ 
/*  1829 */                     var $loadgbl190 = Sk.misceval.loadname('PtrGlbNext', $gbl);
/*  1830 */                     var $loadgbl191 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1831 */                     $ret = Sk.abstr.sattr($loadgbl191, 'PtrComp', $loadgbl190, true);
/*  1832 */                     $blk = 10; /* allowing case fallthrough */
/*  1833 */                 case 10:
/*  1834 */                     /* --- function return or resume suspension --- */
/*  1835 */                     if ($ret && $ret.$isSuspension) {
/*  1836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 96, 4);
/*  1837 */                     }
/*  1838 */                     //
/*  1839 */                     // line 97:
/*  1840 */                     //     PtrGlb.Discr = Ident1
/*  1841 */                     //     ^
/*  1842 */                     //
/*  1843 */                     $currLineNo = 97;
/*  1844 */                     $currColNo = 4;
/*  1845 */ 
/*  1846 */                     var $loadgbl192 = Sk.misceval.loadname('Ident1', $gbl);
/*  1847 */                     var $loadgbl193 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1848 */                     $ret = Sk.abstr.sattr($loadgbl193, 'Discr', $loadgbl192, true);
/*  1849 */                     $blk = 11; /* allowing case fallthrough */
/*  1850 */                 case 11:
/*  1851 */                     /* --- function return or resume suspension --- */
/*  1852 */                     if ($ret && $ret.$isSuspension) {
/*  1853 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 97, 4);
/*  1854 */                     }
/*  1855 */                     //
/*  1856 */                     // line 98:
/*  1857 */                     //     PtrGlb.EnumComp = Ident3
/*  1858 */                     //     ^
/*  1859 */                     //
/*  1860 */                     $currLineNo = 98;
/*  1861 */                     $currColNo = 4;
/*  1862 */ 
/*  1863 */                     var $loadgbl194 = Sk.misceval.loadname('Ident3', $gbl);
/*  1864 */                     var $loadgbl195 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1865 */                     $ret = Sk.abstr.sattr($loadgbl195, 'EnumComp', $loadgbl194, true);
/*  1866 */                     $blk = 12; /* allowing case fallthrough */
/*  1867 */                 case 12:
/*  1868 */                     /* --- function return or resume suspension --- */
/*  1869 */                     if ($ret && $ret.$isSuspension) {
/*  1870 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 98, 4);
/*  1871 */                     }
/*  1872 */                     //
/*  1873 */                     // line 99:
/*  1874 */                     //     PtrGlb.IntComp = 40
/*  1875 */                     //     ^
/*  1876 */                     //
/*  1877 */                     $currLineNo = 99;
/*  1878 */                     $currColNo = 4;
/*  1879 */ 
/*  1880 */                     var $loadgbl196 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1881 */                     $ret = Sk.abstr.sattr($loadgbl196, 'IntComp', new Sk.builtin.int_(40), true);
/*  1882 */                     $blk = 13; /* allowing case fallthrough */
/*  1883 */                 case 13:
/*  1884 */                     /* --- function return or resume suspension --- */
/*  1885 */                     if ($ret && $ret.$isSuspension) {
/*  1886 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 99, 4);
/*  1887 */                     }
/*  1888 */                     //
/*  1889 */                     // line 100:
/*  1890 */                     //     PtrGlb.StringComp = "DHRYSTONE PROGRAM, SOME STRING"
/*  1891 */                     //     ^
/*  1892 */                     //
/*  1893 */                     $currLineNo = 100;
/*  1894 */                     $currColNo = 4;
/*  1895 */ 
/*  1896 */                     var $str197 = new Sk.builtins['str']('DHRYSTONE PROGRAM, SOME STRING');
/*  1897 */                     var $loadgbl198 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1898 */                     $ret = Sk.abstr.sattr($loadgbl198, 'StringComp', $str197, true);
/*  1899 */                     $blk = 14; /* allowing case fallthrough */
/*  1900 */                 case 14:
/*  1901 */                     /* --- function return or resume suspension --- */
/*  1902 */                     if ($ret && $ret.$isSuspension) {
/*  1903 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 100, 4);
/*  1904 */                     }
/*  1905 */                     //
/*  1906 */                     // line 101:
/*  1907 */                     //     String1Loc = "DHRYSTONE PROGRAM, 1'ST STRING"
/*  1908 */                     //     ^
/*  1909 */                     //
/*  1910 */                     $currLineNo = 101;
/*  1911 */                     $currColNo = 4;
/*  1912 */ 
/*  1913 */                     var $str199 = new Sk.builtins['str']("DHRYSTONE PROGRAM, 1'ST STRING");
/*  1914 */                     String1Loc = $str199;
/*  1915 */                     //
/*  1916 */                     // line 102:
/*  1917 */                     //     Array2Glob[8][7] = 10
/*  1918 */                     //     ^
/*  1919 */                     //
/*  1920 */                     $currLineNo = 102;
/*  1921 */                     $currColNo = 4;
/*  1922 */ 
/*  1923 */                     var $loadgbl200 = Sk.misceval.loadname('Array2Glob', $gbl);
/*  1924 */                     $ret = Sk.abstr.objectGetItem($loadgbl200, new Sk.builtin.int_(8), true);
/*  1925 */                     $blk = 15; /* allowing case fallthrough */
/*  1926 */                 case 15:
/*  1927 */                     /* --- function return or resume suspension --- */
/*  1928 */                     if ($ret && $ret.$isSuspension) {
/*  1929 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1930 */                     }
/*  1931 */                     var $lsubscr201 = $ret;
/*  1932 */                     $ret = Sk.abstr.objectSetItem($lsubscr201, new Sk.builtin.int_(7), new Sk.builtin.int_(10), true);
/*  1933 */                     $blk = 16; /* allowing case fallthrough */
/*  1934 */                 case 16:
/*  1935 */                     /* --- function return or resume suspension --- */
/*  1936 */                     if ($ret && $ret.$isSuspension) {
/*  1937 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1938 */                     }
/*  1939 */                     //
/*  1940 */                     // line 104:
/*  1941 */                     //     starttime = time()
/*  1942 */                     //     ^
/*  1943 */                     //
/*  1944 */                     $currLineNo = 104;
/*  1945 */                     $currColNo = 4;
/*  1946 */ 
/*  1947 */                     var $loadgbl202 = Sk.misceval.loadname('time', $gbl);
/*  1948 */                     $ret;
/*  1949 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl202);
/*  1950 */                     $blk = 17; /* allowing case fallthrough */
/*  1951 */                 case 17:
/*  1952 */                     /* --- function return or resume suspension --- */
/*  1953 */                     if ($ret && $ret.$isSuspension) {
/*  1954 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 104, 16);
/*  1955 */                     }
/*  1956 */                     var $call203 = $ret;
/*  1957 */                     //
/*  1958 */                     // line 104:
/*  1959 */                     //     starttime = time()
/*  1960 */                     //                 ^
/*  1961 */                     //
/*  1962 */                     $currLineNo = 104;
/*  1963 */                     $currColNo = 16;
/*  1964 */ 
/*  1965 */                     starttime = $call203;
/*  1966 */                     //
/*  1967 */                     // line 106:
/*  1968 */                     //     for i in range(loops):
/*  1969 */                     //     ^
/*  1970 */                     //
/*  1971 */                     $currLineNo = 106;
/*  1972 */                     $currColNo = 4;
/*  1973 */ 
/*  1974 */                     var $loadgbl204 = Sk.misceval.loadname('range', $gbl);
/*  1975 */                     if (loops === undefined) {
/*  1976 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1977 */                     }
/*  1978 */                     $ret;
/*  1979 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl204, loops);
/*  1980 */                     $blk = 21; /* allowing case fallthrough */
/*  1981 */                 case 21:
/*  1982 */                     /* --- function return or resume suspension --- */
/*  1983 */                     if ($ret && $ret.$isSuspension) {
/*  1984 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 106, 13);
/*  1985 */                     }
/*  1986 */                     var $call205 = $ret;
/*  1987 */                     //
/*  1988 */                     // line 106:
/*  1989 */                     //     for i in range(loops):
/*  1990 */                     //              ^
/*  1991 */                     //
/*  1992 */                     $currLineNo = 106;
/*  1993 */                     $currColNo = 13;
/*  1994 */ 
/*  1995 */                     var $iter206 = Sk.abstr.iter($call205);
/*  1996 */                     $blk = 18; /* allowing case fallthrough */
/*  1997 */                 case 18:
/*  1998 */                     /* --- for start --- */
/*  1999 */                     $ret = Sk.abstr.iternext($iter206, true);
/*  2000 */                     $blk = 22; /* allowing case fallthrough */
/*  2001 */                 case 22:
/*  2002 */                     /* --- function return or resume suspension --- */
/*  2003 */                     if ($ret && $ret.$isSuspension) {
/*  2004 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 106, 4);
/*  2005 */                     }
/*  2006 */                     var $next207 = $ret;
/*  2007 */                     if ($next207 === undefined) {
/*  2008 */                         $blk = 19;
/*  2009 */                         continue;
/*  2010 */                     }
/*  2011 */                     i = $next207;
/*  2012 */                     //
/*  2013 */                     // line 107:
/*  2014 */                     //         Proc5()
/*  2015 */                     //         ^
/*  2016 */                     //
/*  2017 */                     $currLineNo = 107;
/*  2018 */                     $currColNo = 8;
/*  2019 */ 
/*  2020 */                     var $loadgbl208 = Sk.misceval.loadname('Proc5', $gbl);
/*  2021 */                     $ret;
/*  2022 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl208);
/*  2023 */                     $blk = 23; /* allowing case fallthrough */
/*  2024 */                 case 23:
/*  2025 */                     /* --- function return or resume suspension --- */
/*  2026 */                     if ($ret && $ret.$isSuspension) {
/*  2027 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 107, 8);
/*  2028 */                     }
/*  2029 */                     var $call209 = $ret;
/*  2030 */                     //
/*  2031 */                     // line 107:
/*  2032 */                     //         Proc5()
/*  2033 */                     //         ^
/*  2034 */                     //
/*  2035 */                     $currLineNo = 107;
/*  2036 */                     $currColNo = 8;
/*  2037 */ 
/*  2038 */ 
/*  2039 */                     //
/*  2040 */                     // line 108:
/*  2041 */                     //         Proc4()
/*  2042 */                     //         ^
/*  2043 */                     //
/*  2044 */                     $currLineNo = 108;
/*  2045 */                     $currColNo = 8;
/*  2046 */ 
/*  2047 */                     var $loadgbl210 = Sk.misceval.loadname('Proc4', $gbl);
/*  2048 */                     $ret;
/*  2049 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl210);
/*  2050 */                     $blk = 24; /* allowing case fallthrough */
/*  2051 */                 case 24:
/*  2052 */                     /* --- function return or resume suspension --- */
/*  2053 */                     if ($ret && $ret.$isSuspension) {
/*  2054 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 108, 8);
/*  2055 */                     }
/*  2056 */                     var $call211 = $ret;
/*  2057 */                     //
/*  2058 */                     // line 108:
/*  2059 */                     //         Proc4()
/*  2060 */                     //         ^
/*  2061 */                     //
/*  2062 */                     $currLineNo = 108;
/*  2063 */                     $currColNo = 8;
/*  2064 */ 
/*  2065 */ 
/*  2066 */                     //
/*  2067 */                     // line 109:
/*  2068 */                     //         IntLoc1 = 2
/*  2069 */                     //         ^
/*  2070 */                     //
/*  2071 */                     $currLineNo = 109;
/*  2072 */                     $currColNo = 8;
/*  2073 */ 
/*  2074 */                     IntLoc1 = new Sk.builtin.int_(2);
/*  2075 */                     //
/*  2076 */                     // line 110:
/*  2077 */                     //         IntLoc2 = 3
/*  2078 */                     //         ^
/*  2079 */                     //
/*  2080 */                     $currLineNo = 110;
/*  2081 */                     $currColNo = 8;
/*  2082 */ 
/*  2083 */                     IntLoc2 = new Sk.builtin.int_(3);
/*  2084 */                     //
/*  2085 */                     // line 111:
/*  2086 */                     //         String2Loc = "DHRYSTONE PROGRAM, 2'ND STRING"
/*  2087 */                     //         ^
/*  2088 */                     //
/*  2089 */                     $currLineNo = 111;
/*  2090 */                     $currColNo = 8;
/*  2091 */ 
/*  2092 */                     var $str212 = new Sk.builtins['str']("DHRYSTONE PROGRAM, 2'ND STRING");
/*  2093 */                     String2Loc = $str212;
/*  2094 */                     //
/*  2095 */                     // line 112:
/*  2096 */                     //         EnumLoc = Ident2
/*  2097 */                     //         ^
/*  2098 */                     //
/*  2099 */                     $currLineNo = 112;
/*  2100 */                     $currColNo = 8;
/*  2101 */ 
/*  2102 */                     var $loadgbl213 = Sk.misceval.loadname('Ident2', $gbl);
/*  2103 */                     EnumLoc = $loadgbl213;
/*  2104 */                     //
/*  2105 */                     // line 113:
/*  2106 */                     //         BoolGlob = not Func2(String1Loc, String2Loc)
/*  2107 */                     //         ^
/*  2108 */                     //
/*  2109 */                     $currLineNo = 113;
/*  2110 */                     $currColNo = 8;
/*  2111 */ 
/*  2112 */                     var $loadgbl214 = Sk.misceval.loadname('Func2', $gbl);
/*  2113 */                     if (String1Loc === undefined) {
/*  2114 */                         throw new Sk.builtin.UnboundLocalError('local variable \'String1Loc\' referenced before assignment');
/*  2115 */                     }
/*  2116 */                     if (String2Loc === undefined) {
/*  2117 */                         throw new Sk.builtin.UnboundLocalError('local variable \'String2Loc\' referenced before assignment');
/*  2118 */                     }
/*  2119 */                     $ret;
/*  2120 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl214, String1Loc, String2Loc);
/*  2121 */                     $blk = 25; /* allowing case fallthrough */
/*  2122 */                 case 25:
/*  2123 */                     /* --- function return or resume suspension --- */
/*  2124 */                     if ($ret && $ret.$isSuspension) {
/*  2125 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 113, 23);
/*  2126 */                     }
/*  2127 */                     var $call215 = $ret;
/*  2128 */                     //
/*  2129 */                     // line 113:
/*  2130 */                     //         BoolGlob = not Func2(String1Loc, String2Loc)
/*  2131 */                     //                        ^
/*  2132 */                     //
/*  2133 */                     $currLineNo = 113;
/*  2134 */                     $currColNo = 23;
/*  2135 */ 
/*  2136 */                     var $unaryop216 = Sk.abstr.numberUnaryOp($call215, 'Not');
/*  2137 */                     $gbl.BoolGlob = $unaryop216;
/*  2138 */                     //
/*  2139 */                     // line 114:
/*  2140 */                     //         while IntLoc1 < IntLoc2:
/*  2141 */                     //         ^
/*  2142 */                     //
/*  2143 */                     $currLineNo = 114;
/*  2144 */                     $currColNo = 8;
/*  2145 */ 
/*  2146 */                     $blk = 26; /* allowing case fallthrough */
/*  2147 */                 case 26:
/*  2148 */                     /* --- while test --- */
/*  2149 */                     //
/*  2150 */                     // line 114:
/*  2151 */                     //         while IntLoc1 < IntLoc2:
/*  2152 */                     //         ^
/*  2153 */                     //
/*  2154 */                     $currLineNo = 114;
/*  2155 */                     $currColNo = 8;
/*  2156 */ 
/*  2157 */                     if (IntLoc1 === undefined) {
/*  2158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2159 */                     }
/*  2160 */                     var $compareres217 = null;
/*  2161 */                     if (IntLoc2 === undefined) {
/*  2162 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2163 */                     }
/*  2164 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(IntLoc1, IntLoc2, 'Lt', true));
/*  2165 */                     $blk = 30; /* allowing case fallthrough */
/*  2166 */                 case 30:
/*  2167 */                     /* --- function return or resume suspension --- */
/*  2168 */                     if ($ret && $ret.$isSuspension) {
/*  2169 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 114, 14);
/*  2170 */                     }
/*  2171 */                     $compareres217 = $ret;
/*  2172 */                     var $jfalse218 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2173 */                     if ($jfalse218) { /*test failed */
/*  2174 */                         $blk = 29;
/*  2175 */                         continue;
/*  2176 */                     }
/*  2177 */                     $blk = 29; /* allowing case fallthrough */
/*  2178 */                 case 29:
/*  2179 */                     /* --- done --- */
/*  2180 */                     var $jfalse219 = ($compareres217 === false || !Sk.misceval.isTrue($compareres217));
/*  2181 */                     if ($jfalse219) { /*test failed */
/*  2182 */                         $blk = 27;
/*  2183 */                         continue;
/*  2184 */                     }
/*  2185 */                     $blk = 28; /* allowing case fallthrough */
/*  2186 */                 case 28:
/*  2187 */                     /* --- while body --- */
/*  2188 */                     //
/*  2189 */                     // line 115:
/*  2190 */                     //             IntLoc3 = 5 * IntLoc1 - IntLoc2
/*  2191 */                     //             ^
/*  2192 */                     //
/*  2193 */                     $currLineNo = 115;
/*  2194 */                     $currColNo = 12;
/*  2195 */ 
/*  2196 */                     if (IntLoc1 === undefined) {
/*  2197 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2198 */                     }
/*  2199 */                     var $binop220 = Sk.abstr.numberBinOp(new Sk.builtin.int_(5), IntLoc1, 'Mult');
/*  2200 */                     if (IntLoc2 === undefined) {
/*  2201 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2202 */                     }
/*  2203 */                     var $binop221 = Sk.abstr.numberBinOp($binop220, IntLoc2, 'Sub');
/*  2204 */                     IntLoc3 = $binop221;
/*  2205 */                     //
/*  2206 */                     // line 116:
/*  2207 */                     //             IntLoc3 = Proc7(IntLoc1, IntLoc2)
/*  2208 */                     //             ^
/*  2209 */                     //
/*  2210 */                     $currLineNo = 116;
/*  2211 */                     $currColNo = 12;
/*  2212 */ 
/*  2213 */                     var $loadgbl222 = Sk.misceval.loadname('Proc7', $gbl);
/*  2214 */                     if (IntLoc1 === undefined) {
/*  2215 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2216 */                     }
/*  2217 */                     if (IntLoc2 === undefined) {
/*  2218 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2219 */                     }
/*  2220 */                     $ret;
/*  2221 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl222, IntLoc1, IntLoc2);
/*  2222 */                     $blk = 31; /* allowing case fallthrough */
/*  2223 */                 case 31:
/*  2224 */                     /* --- function return or resume suspension --- */
/*  2225 */                     if ($ret && $ret.$isSuspension) {
/*  2226 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 116, 22);
/*  2227 */                     }
/*  2228 */                     var $call223 = $ret;
/*  2229 */                     //
/*  2230 */                     // line 116:
/*  2231 */                     //             IntLoc3 = Proc7(IntLoc1, IntLoc2)
/*  2232 */                     //                       ^
/*  2233 */                     //
/*  2234 */                     $currLineNo = 116;
/*  2235 */                     $currColNo = 22;
/*  2236 */ 
/*  2237 */                     IntLoc3 = $call223;
/*  2238 */                     //
/*  2239 */                     // line 117:
/*  2240 */                     //             IntLoc1 = IntLoc1 + 1
/*  2241 */                     //             ^
/*  2242 */                     //
/*  2243 */                     $currLineNo = 117;
/*  2244 */                     $currColNo = 12;
/*  2245 */ 
/*  2246 */                     if (IntLoc1 === undefined) {
/*  2247 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2248 */                     }
/*  2249 */                     var $binop224 = Sk.abstr.numberBinOp(IntLoc1, new Sk.builtin.int_(1), 'Add');
/*  2250 */                     IntLoc1 = $binop224;
/*  2251 */                     $blk = 26; /* jump */
/*  2252 */                     continue;
/*  2253 */                 case 19:
/*  2254 */                     /* --- for cleanup --- */
/*  2255 */                     $blk = 20; /* allowing case fallthrough */
/*  2256 */                 case 20:
/*  2257 */                     /* --- for end --- */
/*  2258 */                     //
/*  2259 */                     // line 130:
/*  2260 */                     //     benchtime = time() - starttime - nulltime
/*  2261 */                     //     ^
/*  2262 */                     //
/*  2263 */                     $currLineNo = 130;
/*  2264 */                     $currColNo = 4;
/*  2265 */ 
/*  2266 */                     var $loadgbl258 = Sk.misceval.loadname('time', $gbl);
/*  2267 */                     $ret;
/*  2268 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl258);
/*  2269 */                     $blk = 47; /* allowing case fallthrough */
/*  2270 */                 case 47:
/*  2271 */                     /* --- function return or resume suspension --- */
/*  2272 */                     if ($ret && $ret.$isSuspension) {
/*  2273 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 130, 16);
/*  2274 */                     }
/*  2275 */                     var $call259 = $ret;
/*  2276 */                     //
/*  2277 */                     // line 130:
/*  2278 */                     //     benchtime = time() - starttime - nulltime
/*  2279 */                     //                 ^
/*  2280 */                     //
/*  2281 */                     $currLineNo = 130;
/*  2282 */                     $currColNo = 16;
/*  2283 */ 
/*  2284 */                     if (starttime === undefined) {
/*  2285 */                         throw new Sk.builtin.UnboundLocalError('local variable \'starttime\' referenced before assignment');
/*  2286 */                     }
/*  2287 */                     var $binop260 = Sk.abstr.numberBinOp($call259, starttime, 'Sub');
/*  2288 */                     if (nulltime === undefined) {
/*  2289 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nulltime\' referenced before assignment');
/*  2290 */                     }
/*  2291 */                     var $binop261 = Sk.abstr.numberBinOp($binop260, nulltime, 'Sub');
/*  2292 */                     benchtime = $binop261;
/*  2293 */                     //
/*  2294 */                     // line 131:
/*  2295 */                     //     if benchtime == 0.0:
/*  2296 */                     //     ^
/*  2297 */                     //
/*  2298 */                     $currLineNo = 131;
/*  2299 */                     $currColNo = 4;
/*  2300 */ 
/*  2301 */                     if (benchtime === undefined) {
/*  2302 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2303 */                     }
/*  2304 */                     var $compareres262 = null;
/*  2305 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(benchtime, new Sk.builtin.float_(0), 'Eq', true));
/*  2306 */                     $blk = 51; /* allowing case fallthrough */
/*  2307 */                 case 51:
/*  2308 */                     /* --- function return or resume suspension --- */
/*  2309 */                     if ($ret && $ret.$isSuspension) {
/*  2310 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 131, 7);
/*  2311 */                     }
/*  2312 */                     $compareres262 = $ret;
/*  2313 */                     var $jfalse263 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2314 */                     if ($jfalse263) { /*test failed */
/*  2315 */                         $blk = 50;
/*  2316 */                         continue;
/*  2317 */                     }
/*  2318 */                     $blk = 50; /* allowing case fallthrough */
/*  2319 */                 case 50:
/*  2320 */                     /* --- done --- */
/*  2321 */                     var $jfalse264 = ($compareres262 === false || !Sk.misceval.isTrue($compareres262));
/*  2322 */                     if ($jfalse264) { /*test failed */
/*  2323 */                         $blk = 49;
/*  2324 */                         continue;
/*  2325 */                     }
/*  2326 */                     //
/*  2327 */                     // line 132:
/*  2328 */                     //         loopsPerBenchtime = 0.0
/*  2329 */                     //         ^
/*  2330 */                     //
/*  2331 */                     $currLineNo = 132;
/*  2332 */                     $currColNo = 8;
/*  2333 */ 
/*  2334 */                     loopsPerBenchtime = new Sk.builtin.float_(0);
/*  2335 */                     $blk = 48; /* allowing case fallthrough */
/*  2336 */                 case 48:
/*  2337 */                     /* --- end of if --- */
/*  2338 */                     //
/*  2339 */                     // line 135:
/*  2340 */                     //     return benchtime, loopsPerBenchtime
/*  2341 */                     //     ^
/*  2342 */                     //
/*  2343 */                     $currLineNo = 135;
/*  2344 */                     $currColNo = 4;
/*  2345 */ 
/*  2346 */                     if (benchtime === undefined) {
/*  2347 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2348 */                     }
/*  2349 */                     var $elem266 = benchtime;
/*  2350 */                     if (loopsPerBenchtime === undefined) {
/*  2351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loopsPerBenchtime\' referenced before assignment');
/*  2352 */                     }
/*  2353 */                     var $elem267 = loopsPerBenchtime;
/*  2354 */                     var $loadtuple268 = new Sk.builtins['tuple']([$elem266, $elem267]);
/*  2355 */                     return $loadtuple268;
/*  2356 */                     return Sk.builtin.none.none$;
/*  2357 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2358 */                 case 27:
/*  2359 */                     /* --- after while --- */
/*  2360 */                     //
/*  2361 */                     // line 118:
/*  2362 */                     //         Proc8(Array1Glob, Array2Glob, IntLoc1, IntLoc3)
/*  2363 */                     //         ^
/*  2364 */                     //
/*  2365 */                     $currLineNo = 118;
/*  2366 */                     $currColNo = 8;
/*  2367 */ 
/*  2368 */                     var $loadgbl225 = Sk.misceval.loadname('Proc8', $gbl);
/*  2369 */                     var $loadgbl226 = Sk.misceval.loadname('Array1Glob', $gbl);
/*  2370 */                     var $loadgbl227 = Sk.misceval.loadname('Array2Glob', $gbl);
/*  2371 */                     if (IntLoc1 === undefined) {
/*  2372 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2373 */                     }
/*  2374 */                     if (IntLoc3 === undefined) {
/*  2375 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2376 */                     }
/*  2377 */                     $ret;
/*  2378 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl225, $loadgbl226, $loadgbl227, IntLoc1, IntLoc3);
/*  2379 */                     $blk = 32; /* allowing case fallthrough */
/*  2380 */                 case 32:
/*  2381 */                     /* --- function return or resume suspension --- */
/*  2382 */                     if ($ret && $ret.$isSuspension) {
/*  2383 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 118, 8);
/*  2384 */                     }
/*  2385 */                     var $call228 = $ret;
/*  2386 */                     //
/*  2387 */                     // line 118:
/*  2388 */                     //         Proc8(Array1Glob, Array2Glob, IntLoc1, IntLoc3)
/*  2389 */                     //         ^
/*  2390 */                     //
/*  2391 */                     $currLineNo = 118;
/*  2392 */                     $currColNo = 8;
/*  2393 */ 
/*  2394 */ 
/*  2395 */                     //
/*  2396 */                     // line 119:
/*  2397 */                     //         PtrGlb = Proc1(PtrGlb)
/*  2398 */                     //         ^
/*  2399 */                     //
/*  2400 */                     $currLineNo = 119;
/*  2401 */                     $currColNo = 8;
/*  2402 */ 
/*  2403 */                     var $loadgbl229 = Sk.misceval.loadname('Proc1', $gbl);
/*  2404 */                     var $loadgbl230 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  2405 */                     $ret;
/*  2406 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl229, $loadgbl230);
/*  2407 */                     $blk = 33; /* allowing case fallthrough */
/*  2408 */                 case 33:
/*  2409 */                     /* --- function return or resume suspension --- */
/*  2410 */                     if ($ret && $ret.$isSuspension) {
/*  2411 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 119, 17);
/*  2412 */                     }
/*  2413 */                     var $call231 = $ret;
/*  2414 */                     //
/*  2415 */                     // line 119:
/*  2416 */                     //         PtrGlb = Proc1(PtrGlb)
/*  2417 */                     //                  ^
/*  2418 */                     //
/*  2419 */                     $currLineNo = 119;
/*  2420 */                     $currColNo = 17;
/*  2421 */ 
/*  2422 */                     $gbl.PtrGlb = $call231;
/*  2423 */                     //
/*  2424 */                     // line 120:
/*  2425 */                     //         CharIndex = 'A'
/*  2426 */                     //         ^
/*  2427 */                     //
/*  2428 */                     $currLineNo = 120;
/*  2429 */                     $currColNo = 8;
/*  2430 */ 
/*  2431 */                     var $str232 = new Sk.builtins['str']('A');
/*  2432 */                     CharIndex = $str232;
/*  2433 */                     //
/*  2434 */                     // line 121:
/*  2435 */                     //         while CharIndex <= Char2Glob:
/*  2436 */                     //         ^
/*  2437 */                     //
/*  2438 */                     $currLineNo = 121;
/*  2439 */                     $currColNo = 8;
/*  2440 */ 
/*  2441 */                     $blk = 34; /* allowing case fallthrough */
/*  2442 */                 case 34:
/*  2443 */                     /* --- while test --- */
/*  2444 */                     //
/*  2445 */                     // line 121:
/*  2446 */                     //         while CharIndex <= Char2Glob:
/*  2447 */                     //         ^
/*  2448 */                     //
/*  2449 */                     $currLineNo = 121;
/*  2450 */                     $currColNo = 8;
/*  2451 */ 
/*  2452 */                     if (CharIndex === undefined) {
/*  2453 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2454 */                     }
/*  2455 */                     var $compareres233 = null;
/*  2456 */                     var $loadgbl234 = Sk.misceval.loadname('Char2Glob', $gbl);
/*  2457 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharIndex, $loadgbl234, 'LtE', true));
/*  2458 */                     $blk = 38; /* allowing case fallthrough */
/*  2459 */                 case 38:
/*  2460 */                     /* --- function return or resume suspension --- */
/*  2461 */                     if ($ret && $ret.$isSuspension) {
/*  2462 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 121, 14);
/*  2463 */                     }
/*  2464 */                     $compareres233 = $ret;
/*  2465 */                     var $jfalse235 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2466 */                     if ($jfalse235) { /*test failed */
/*  2467 */                         $blk = 37;
/*  2468 */                         continue;
/*  2469 */                     }
/*  2470 */                     $blk = 37; /* allowing case fallthrough */
/*  2471 */                 case 37:
/*  2472 */                     /* --- done --- */
/*  2473 */                     var $jfalse236 = ($compareres233 === false || !Sk.misceval.isTrue($compareres233));
/*  2474 */                     if ($jfalse236) { /*test failed */
/*  2475 */                         $blk = 35;
/*  2476 */                         continue;
/*  2477 */                     }
/*  2478 */                     $blk = 36; /* allowing case fallthrough */
/*  2479 */                 case 36:
/*  2480 */                     /* --- while body --- */
/*  2481 */                     //
/*  2482 */                     // line 122:
/*  2483 */                     //             if EnumLoc == Func1(CharIndex, 'C'):
/*  2484 */                     //             ^
/*  2485 */                     //
/*  2486 */                     $currLineNo = 122;
/*  2487 */                     $currColNo = 12;
/*  2488 */ 
/*  2489 */                     if (EnumLoc === undefined) {
/*  2490 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  2491 */                     }
/*  2492 */                     var $compareres237 = null;
/*  2493 */                     var $loadgbl238 = Sk.misceval.loadname('Func1', $gbl);
/*  2494 */                     if (CharIndex === undefined) {
/*  2495 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2496 */                     }
/*  2497 */                     var $str239 = new Sk.builtins['str']('C');
/*  2498 */                     $ret;
/*  2499 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl238, CharIndex, $str239);
/*  2500 */                     $blk = 41; /* allowing case fallthrough */
/*  2501 */                 case 41:
/*  2502 */                     /* --- function return or resume suspension --- */
/*  2503 */                     if ($ret && $ret.$isSuspension) {
/*  2504 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 122, 26);
/*  2505 */                     }
/*  2506 */                     var $call240 = $ret;
/*  2507 */                     //
/*  2508 */                     // line 122:
/*  2509 */                     //             if EnumLoc == Func1(CharIndex, 'C'):
/*  2510 */                     //                           ^
/*  2511 */                     //
/*  2512 */                     $currLineNo = 122;
/*  2513 */                     $currColNo = 26;
/*  2514 */ 
/*  2515 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $call240, 'Eq', true));
/*  2516 */                     $blk = 42; /* allowing case fallthrough */
/*  2517 */                 case 42:
/*  2518 */                     /* --- function return or resume suspension --- */
/*  2519 */                     if ($ret && $ret.$isSuspension) {
/*  2520 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 122, 15);
/*  2521 */                     }
/*  2522 */                     $compareres237 = $ret;
/*  2523 */                     var $jfalse241 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2524 */                     if ($jfalse241) { /*test failed */
/*  2525 */                         $blk = 40;
/*  2526 */                         continue;
/*  2527 */                     }
/*  2528 */                     $blk = 40; /* allowing case fallthrough */
/*  2529 */                 case 40:
/*  2530 */                     /* --- done --- */
/*  2531 */                     var $jfalse242 = ($compareres237 === false || !Sk.misceval.isTrue($compareres237));
/*  2532 */                     if ($jfalse242) { /*test failed */
/*  2533 */                         $blk = 39;
/*  2534 */                         continue;
/*  2535 */                     }
/*  2536 */                     //
/*  2537 */                     // line 123:
/*  2538 */                     //                 EnumLoc = Proc6(Ident1)
/*  2539 */                     //                 ^
/*  2540 */                     //
/*  2541 */                     $currLineNo = 123;
/*  2542 */                     $currColNo = 16;
/*  2543 */ 
/*  2544 */                     var $loadgbl243 = Sk.misceval.loadname('Proc6', $gbl);
/*  2545 */                     var $loadgbl244 = Sk.misceval.loadname('Ident1', $gbl);
/*  2546 */                     $ret;
/*  2547 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl243, $loadgbl244);
/*  2548 */                     $blk = 43; /* allowing case fallthrough */
/*  2549 */                 case 43:
/*  2550 */                     /* --- function return or resume suspension --- */
/*  2551 */                     if ($ret && $ret.$isSuspension) {
/*  2552 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 123, 26);
/*  2553 */                     }
/*  2554 */                     var $call245 = $ret;
/*  2555 */                     //
/*  2556 */                     // line 123:
/*  2557 */                     //                 EnumLoc = Proc6(Ident1)
/*  2558 */                     //                           ^
/*  2559 */                     //
/*  2560 */                     $currLineNo = 123;
/*  2561 */                     $currColNo = 26;
/*  2562 */ 
/*  2563 */                     EnumLoc = $call245;
/*  2564 */                     $blk = 39; /* allowing case fallthrough */
/*  2565 */                 case 39:
/*  2566 */                     /* --- end of if --- */
/*  2567 */                     //
/*  2568 */                     // line 124:
/*  2569 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2570 */                     //             ^
/*  2571 */                     //
/*  2572 */                     $currLineNo = 124;
/*  2573 */                     $currColNo = 12;
/*  2574 */ 
/*  2575 */                     var $loadgbl246 = Sk.misceval.loadname('chr', $gbl);
/*  2576 */                     var $loadgbl247 = Sk.misceval.loadname('ord', $gbl);
/*  2577 */                     if (CharIndex === undefined) {
/*  2578 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2579 */                     }
/*  2580 */                     $ret;
/*  2581 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl247, CharIndex);
/*  2582 */                     $blk = 44; /* allowing case fallthrough */
/*  2583 */                 case 44:
/*  2584 */                     /* --- function return or resume suspension --- */
/*  2585 */                     if ($ret && $ret.$isSuspension) {
/*  2586 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 124, 28);
/*  2587 */                     }
/*  2588 */                     var $call248 = $ret;
/*  2589 */                     //
/*  2590 */                     // line 124:
/*  2591 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2592 */                     //                             ^
/*  2593 */                     //
/*  2594 */                     $currLineNo = 124;
/*  2595 */                     $currColNo = 28;
/*  2596 */ 
/*  2597 */                     var $binop249 = Sk.abstr.numberBinOp($call248, new Sk.builtin.int_(1), 'Add');
/*  2598 */                     $ret;
/*  2599 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl246, $binop249);
/*  2600 */                     $blk = 45; /* allowing case fallthrough */
/*  2601 */                 case 45:
/*  2602 */                     /* --- function return or resume suspension --- */
/*  2603 */                     if ($ret && $ret.$isSuspension) {
/*  2604 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 124, 24);
/*  2605 */                     }
/*  2606 */                     var $call250 = $ret;
/*  2607 */                     //
/*  2608 */                     // line 124:
/*  2609 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2610 */                     //                         ^
/*  2611 */                     //
/*  2612 */                     $currLineNo = 124;
/*  2613 */                     $currColNo = 24;
/*  2614 */ 
/*  2615 */                     CharIndex = $call250;
/*  2616 */                     $blk = 34; /* jump */
/*  2617 */                     continue;
/*  2618 */                 case 35:
/*  2619 */                     /* --- after while --- */
/*  2620 */                     //
/*  2621 */                     // line 125:
/*  2622 */                     //         IntLoc3 = IntLoc2 * IntLoc1
/*  2623 */                     //         ^
/*  2624 */                     //
/*  2625 */                     $currLineNo = 125;
/*  2626 */                     $currColNo = 8;
/*  2627 */ 
/*  2628 */                     if (IntLoc2 === undefined) {
/*  2629 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2630 */                     }
/*  2631 */                     if (IntLoc1 === undefined) {
/*  2632 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2633 */                     }
/*  2634 */                     var $binop251 = Sk.abstr.numberBinOp(IntLoc2, IntLoc1, 'Mult');
/*  2635 */                     IntLoc3 = $binop251;
/*  2636 */                     //
/*  2637 */                     // line 126:
/*  2638 */                     //         IntLoc2 = IntLoc3 / IntLoc1
/*  2639 */                     //         ^
/*  2640 */                     //
/*  2641 */                     $currLineNo = 126;
/*  2642 */                     $currColNo = 8;
/*  2643 */ 
/*  2644 */                     if (IntLoc3 === undefined) {
/*  2645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2646 */                     }
/*  2647 */                     if (IntLoc1 === undefined) {
/*  2648 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2649 */                     }
/*  2650 */                     var $binop252 = Sk.abstr.numberBinOp(IntLoc3, IntLoc1, 'Div');
/*  2651 */                     IntLoc2 = $binop252;
/*  2652 */                     //
/*  2653 */                     // line 127:
/*  2654 */                     //         IntLoc2 = 7 * (IntLoc3 - IntLoc2) - IntLoc1
/*  2655 */                     //         ^
/*  2656 */                     //
/*  2657 */                     $currLineNo = 127;
/*  2658 */                     $currColNo = 8;
/*  2659 */ 
/*  2660 */                     if (IntLoc3 === undefined) {
/*  2661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2662 */                     }
/*  2663 */                     if (IntLoc2 === undefined) {
/*  2664 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2665 */                     }
/*  2666 */                     var $binop253 = Sk.abstr.numberBinOp(IntLoc3, IntLoc2, 'Sub');
/*  2667 */                     var $binop254 = Sk.abstr.numberBinOp(new Sk.builtin.int_(7), $binop253, 'Mult');
/*  2668 */                     if (IntLoc1 === undefined) {
/*  2669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2670 */                     }
/*  2671 */                     var $binop255 = Sk.abstr.numberBinOp($binop254, IntLoc1, 'Sub');
/*  2672 */                     IntLoc2 = $binop255;
/*  2673 */                     //
/*  2674 */                     // line 128:
/*  2675 */                     //         IntLoc1 = Proc2(IntLoc1)
/*  2676 */                     //         ^
/*  2677 */                     //
/*  2678 */                     $currLineNo = 128;
/*  2679 */                     $currColNo = 8;
/*  2680 */ 
/*  2681 */                     var $loadgbl256 = Sk.misceval.loadname('Proc2', $gbl);
/*  2682 */                     if (IntLoc1 === undefined) {
/*  2683 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2684 */                     }
/*  2685 */                     $ret;
/*  2686 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl256, IntLoc1);
/*  2687 */                     $blk = 46; /* allowing case fallthrough */
/*  2688 */                 case 46:
/*  2689 */                     /* --- function return or resume suspension --- */
/*  2690 */                     if ($ret && $ret.$isSuspension) {
/*  2691 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 128, 18);
/*  2692 */                     }
/*  2693 */                     var $call257 = $ret;
/*  2694 */                     //
/*  2695 */                     // line 128:
/*  2696 */                     //         IntLoc1 = Proc2(IntLoc1)
/*  2697 */                     //                   ^
/*  2698 */                     //
/*  2699 */                     $currLineNo = 128;
/*  2700 */                     $currColNo = 18;
/*  2701 */ 
/*  2702 */                     IntLoc1 = $call257;
/*  2703 */                     $blk = 18; /* jump */
/*  2704 */                     continue;
/*  2705 */                 case 49:
/*  2706 */                     /* --- next branch of if --- */
/*  2707 */                     //
/*  2708 */                     // line 134:
/*  2709 */                     //         loopsPerBenchtime = (loops / benchtime)
/*  2710 */                     //         ^
/*  2711 */                     //
/*  2712 */                     $currLineNo = 134;
/*  2713 */                     $currColNo = 8;
/*  2714 */ 
/*  2715 */                     if (loops === undefined) {
/*  2716 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  2717 */                     }
/*  2718 */                     if (benchtime === undefined) {
/*  2719 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2720 */                     }
/*  2721 */                     var $binop265 = Sk.abstr.numberBinOp(loops, benchtime, 'Div');
/*  2722 */                     loopsPerBenchtime = $binop265;
/*  2723 */                     $blk = 48; /* jump */
/*  2724 */                     continue;
/*  2725 */                 }
/*  2726 */             } catch (err) {
/*  2727 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2728 */                     err = new Sk.builtin.ExternalError(err);
/*  2729 */                 }
/*  2730 */                 err.traceback.push({
/*  2731 */                     lineno: $currLineNo,
/*  2732 */                     colno: $currColNo,
/*  2733 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  2734 */                 });
/*  2735 */                 if ($exc.length > 0) {
/*  2736 */                     $err = err;
/*  2737 */                     $blk = $exc.pop();
/*  2738 */                     continue;
/*  2739 */                 } else {
/*  2740 */                     throw err;
/*  2741 */                 }
/*  2742 */             }
/*  2743 */         }
/*  2744 */     });
/*  2745 */     var $scope270 = (function $Proc1271$(PtrParIn) {
/*  2746 */         var NextRecord; /* locals */
/*  2747 */         var NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, $loadgbl272, $loadgbl272, $lattr273, $loadgbl272, $lattr273, $call274, $lattr275, $lattr276, $loadgbl277, $loadgbl277, $lattr278, $loadgbl277, $lattr278, $call279, $lattr280, $compareres281, $loadgbl282, $loadgbl285, $loadgbl285, $lattr286, $loadgbl285, $lattr286, $call287, $loadgbl288, $loadgbl288, $lattr289, $loadgbl290, $loadgbl290, $lattr291, $loadgbl290, $lattr291, $call292, $lattr293;
/*  2748 */         var $wakeFromSuspension = function() {
/*  2749 */             var susp = $scope270.$wakingSuspension;
/*  2750 */             delete $scope270.$wakingSuspension;
/*  2751 */             $blk = susp.$blk;
/*  2752 */             $loc = susp.$loc;
/*  2753 */             $gbl = susp.$gbl;
/*  2754 */             $exc = susp.$exc;
/*  2755 */             $err = susp.$err;
/*  2756 */             $postfinally = susp.$postfinally;
/*  2757 */             $currLineNo = susp.$lineno;
/*  2758 */             $currColNo = susp.$colno;
/*  2759 */             Sk.lastYield = Date.now();
/*  2760 */             NextRecord = susp.$tmps.NextRecord;
/*  2761 */             PtrParIn = susp.$tmps.PtrParIn;
/*  2762 */             $loadgbl272 = susp.$tmps.$loadgbl272;
/*  2763 */             $lattr273 = susp.$tmps.$lattr273;
/*  2764 */             $call274 = susp.$tmps.$call274;
/*  2765 */             $lattr275 = susp.$tmps.$lattr275;
/*  2766 */             $lattr276 = susp.$tmps.$lattr276;
/*  2767 */             $loadgbl277 = susp.$tmps.$loadgbl277;
/*  2768 */             $lattr278 = susp.$tmps.$lattr278;
/*  2769 */             $call279 = susp.$tmps.$call279;
/*  2770 */             $lattr280 = susp.$tmps.$lattr280;
/*  2771 */             $compareres281 = susp.$tmps.$compareres281;
/*  2772 */             $loadgbl282 = susp.$tmps.$loadgbl282;
/*  2773 */             $loadgbl285 = susp.$tmps.$loadgbl285;
/*  2774 */             $lattr286 = susp.$tmps.$lattr286;
/*  2775 */             $call287 = susp.$tmps.$call287;
/*  2776 */             $loadgbl288 = susp.$tmps.$loadgbl288;
/*  2777 */             $lattr289 = susp.$tmps.$lattr289;
/*  2778 */             $loadgbl290 = susp.$tmps.$loadgbl290;
/*  2779 */             $lattr291 = susp.$tmps.$lattr291;
/*  2780 */             $call292 = susp.$tmps.$call292;
/*  2781 */             $lattr293 = susp.$tmps.$lattr293;
/*  2782 */             try {
/*  2783 */                 $ret = susp.child.resume();
/*  2784 */             } catch (err) {
/*  2785 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2786 */                     err = new Sk.builtin.ExternalError(err);
/*  2787 */                 }
/*  2788 */                 err.traceback.push({
/*  2789 */                     lineno: $currLineNo,
/*  2790 */                     colno: $currColNo,
/*  2791 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  2792 */                 });
/*  2793 */                 if ($exc.length > 0) {
/*  2794 */                     $err = err;
/*  2795 */                     $blk = $exc.pop();
/*  2796 */                 } else {
/*  2797 */                     throw err;
/*  2798 */                 }
/*  2799 */             }
/*  2800 */         };
/*  2801 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2802 */             var susp = new Sk.misceval.Suspension();
/*  2803 */             susp.child = $child;
/*  2804 */             susp.resume = function() {
/*  2805 */                 $scope270.$wakingSuspension = susp;
/*  2806 */                 return $scope270();
/*  2807 */             };
/*  2808 */             susp.data = susp.child.data;
/*  2809 */             susp.$blk = $blk;
/*  2810 */             susp.$loc = $loc;
/*  2811 */             susp.$gbl = $gbl;
/*  2812 */             susp.$exc = $exc;
/*  2813 */             susp.$err = $err;
/*  2814 */             susp.$postfinally = $postfinally;
/*  2815 */             susp.$filename = $filename;
/*  2816 */             susp.$lineno = $lineno;
/*  2817 */             susp.$colno = $colno;
/*  2818 */             susp.optional = susp.child.optional;
/*  2819 */             susp.$tmps = {
/*  2820 */                 "NextRecord": NextRecord,
/*  2821 */                 "PtrParIn": PtrParIn,
/*  2822 */                 "$loadgbl272": $loadgbl272,
/*  2823 */                 "$lattr273": $lattr273,
/*  2824 */                 "$call274": $call274,
/*  2825 */                 "$lattr275": $lattr275,
/*  2826 */                 "$lattr276": $lattr276,
/*  2827 */                 "$loadgbl277": $loadgbl277,
/*  2828 */                 "$lattr278": $lattr278,
/*  2829 */                 "$call279": $call279,
/*  2830 */                 "$lattr280": $lattr280,
/*  2831 */                 "$compareres281": $compareres281,
/*  2832 */                 "$loadgbl282": $loadgbl282,
/*  2833 */                 "$loadgbl285": $loadgbl285,
/*  2834 */                 "$lattr286": $lattr286,
/*  2835 */                 "$call287": $call287,
/*  2836 */                 "$loadgbl288": $loadgbl288,
/*  2837 */                 "$lattr289": $lattr289,
/*  2838 */                 "$loadgbl290": $loadgbl290,
/*  2839 */                 "$lattr291": $lattr291,
/*  2840 */                 "$call292": $call292,
/*  2841 */                 "$lattr293": $lattr293
/*  2842 */             };
/*  2843 */             return susp;
/*  2844 */         };
/*  2845 */         var $blk = 0,
/*  2846 */             $exc = [],
/*  2847 */             $loc = {},
/*  2848 */             $gbl = this,
/*  2849 */             $err = undefined,
/*  2850 */             $ret = undefined,
/*  2851 */             $postfinally = undefined,
/*  2852 */             $currLineNo = undefined,
/*  2853 */             $currColNo = undefined;
/*  2854 */         if ($scope270.$wakingSuspension !== undefined) {
/*  2855 */             $wakeFromSuspension();
/*  2856 */         } else {
/*  2857 */             Sk.builtin.pyCheckArgs("Proc1", arguments, 1, 1, false, false);
/*  2858 */         }
/*  2859 */         while (true) {
/*  2860 */             try {
/*  2861 */                 switch ($blk) {
/*  2862 */                 case 0:
/*  2863 */                     /* --- codeobj entry --- */
/*  2864 */                     if (PtrParIn === undefined) {
/*  2865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  2866 */                     }
/*  2867 */ 
/*  2868 */                     //
/*  2869 */                     // line 138:
/*  2870 */                     //     PtrParIn.PtrComp = NextRecord = PtrGlb.copy()
/*  2871 */                     //     ^
/*  2872 */                     //
/*  2873 */                     $currLineNo = 138;
/*  2874 */                     $currColNo = 4;
/*  2875 */ 
/*  2876 */                     var $loadgbl272 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  2877 */                     $ret = Sk.abstr.gattr($loadgbl272, 'copy', true);
/*  2878 */                     $blk = 1; /* allowing case fallthrough */
/*  2879 */                 case 1:
/*  2880 */                     /* --- function return or resume suspension --- */
/*  2881 */                     if ($ret && $ret.$isSuspension) {
/*  2882 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 36);
/*  2883 */                     }
/*  2884 */                     var $lattr273 = $ret;
/*  2885 */                     $ret;
/*  2886 */                     $ret = Sk.misceval.callsimOrSuspend($lattr273);
/*  2887 */                     $blk = 2; /* allowing case fallthrough */
/*  2888 */                 case 2:
/*  2889 */                     /* --- function return or resume suspension --- */
/*  2890 */                     if ($ret && $ret.$isSuspension) {
/*  2891 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 36);
/*  2892 */                     }
/*  2893 */                     var $call274 = $ret;
/*  2894 */                     //
/*  2895 */                     // line 138:
/*  2896 */                     //     PtrParIn.PtrComp = NextRecord = PtrGlb.copy()
/*  2897 */                     //                                     ^
/*  2898 */                     //
/*  2899 */                     $currLineNo = 138;
/*  2900 */                     $currColNo = 36;
/*  2901 */ 
/*  2902 */                     if (PtrParIn === undefined) {
/*  2903 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  2904 */                     }
/*  2905 */                     $ret = Sk.abstr.sattr(PtrParIn, 'PtrComp', $call274, true);
/*  2906 */                     $blk = 3; /* allowing case fallthrough */
/*  2907 */                 case 3:
/*  2908 */                     /* --- function return or resume suspension --- */
/*  2909 */                     if ($ret && $ret.$isSuspension) {
/*  2910 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 4);
/*  2911 */                     }
/*  2912 */                     NextRecord = $call274;
/*  2913 */                     //
/*  2914 */                     // line 139:
/*  2915 */                     //     PtrParIn.IntComp = 5
/*  2916 */                     //     ^
/*  2917 */                     //
/*  2918 */                     $currLineNo = 139;
/*  2919 */                     $currColNo = 4;
/*  2920 */ 
/*  2921 */                     if (PtrParIn === undefined) {
/*  2922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  2923 */                     }
/*  2924 */                     $ret = Sk.abstr.sattr(PtrParIn, 'IntComp', new Sk.builtin.int_(5), true);
/*  2925 */                     $blk = 4; /* allowing case fallthrough */
/*  2926 */                 case 4:
/*  2927 */                     /* --- function return or resume suspension --- */
/*  2928 */                     if ($ret && $ret.$isSuspension) {
/*  2929 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 139, 4);
/*  2930 */                     }
/*  2931 */                     //
/*  2932 */                     // line 140:
/*  2933 */                     //     NextRecord.IntComp = PtrParIn.IntComp
/*  2934 */                     //     ^
/*  2935 */                     //
/*  2936 */                     $currLineNo = 140;
/*  2937 */                     $currColNo = 4;
/*  2938 */ 
/*  2939 */                     if (PtrParIn === undefined) {
/*  2940 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  2941 */                     }
/*  2942 */                     $ret = Sk.abstr.gattr(PtrParIn, 'IntComp', true);
/*  2943 */                     $blk = 5; /* allowing case fallthrough */
/*  2944 */                 case 5:
/*  2945 */                     /* --- function return or resume suspension --- */
/*  2946 */                     if ($ret && $ret.$isSuspension) {
/*  2947 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 140, 25);
/*  2948 */                     }
/*  2949 */                     var $lattr275 = $ret;
/*  2950 */                     if (NextRecord === undefined) {
/*  2951 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  2952 */                     }
/*  2953 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', $lattr275, true);
/*  2954 */                     $blk = 6; /* allowing case fallthrough */
/*  2955 */                 case 6:
/*  2956 */                     /* --- function return or resume suspension --- */
/*  2957 */                     if ($ret && $ret.$isSuspension) {
/*  2958 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 140, 4);
/*  2959 */                     }
/*  2960 */                     //
/*  2961 */                     // line 141:
/*  2962 */                     //     NextRecord.PtrComp = PtrParIn.PtrComp
/*  2963 */                     //     ^
/*  2964 */                     //
/*  2965 */                     $currLineNo = 141;
/*  2966 */                     $currColNo = 4;
/*  2967 */ 
/*  2968 */                     if (PtrParIn === undefined) {
/*  2969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  2970 */                     }
/*  2971 */                     $ret = Sk.abstr.gattr(PtrParIn, 'PtrComp', true);
/*  2972 */                     $blk = 7; /* allowing case fallthrough */
/*  2973 */                 case 7:
/*  2974 */                     /* --- function return or resume suspension --- */
/*  2975 */                     if ($ret && $ret.$isSuspension) {
/*  2976 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 141, 25);
/*  2977 */                     }
/*  2978 */                     var $lattr276 = $ret;
/*  2979 */                     if (NextRecord === undefined) {
/*  2980 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  2981 */                     }
/*  2982 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $lattr276, true);
/*  2983 */                     $blk = 8; /* allowing case fallthrough */
/*  2984 */                 case 8:
/*  2985 */                     /* --- function return or resume suspension --- */
/*  2986 */                     if ($ret && $ret.$isSuspension) {
/*  2987 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 141, 4);
/*  2988 */                     }
/*  2989 */                     //
/*  2990 */                     // line 142:
/*  2991 */                     //     NextRecord.PtrComp = Proc3(NextRecord.PtrComp)
/*  2992 */                     //     ^
/*  2993 */                     //
/*  2994 */                     $currLineNo = 142;
/*  2995 */                     $currColNo = 4;
/*  2996 */ 
/*  2997 */                     var $loadgbl277 = Sk.misceval.loadname('Proc3', $gbl);
/*  2998 */                     if (NextRecord === undefined) {
/*  2999 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3000 */                     }
/*  3001 */                     $ret = Sk.abstr.gattr(NextRecord, 'PtrComp', true);
/*  3002 */                     $blk = 9; /* allowing case fallthrough */
/*  3003 */                 case 9:
/*  3004 */                     /* --- function return or resume suspension --- */
/*  3005 */                     if ($ret && $ret.$isSuspension) {
/*  3006 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 31);
/*  3007 */                     }
/*  3008 */                     var $lattr278 = $ret;
/*  3009 */                     $ret;
/*  3010 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl277, $lattr278);
/*  3011 */                     $blk = 10; /* allowing case fallthrough */
/*  3012 */                 case 10:
/*  3013 */                     /* --- function return or resume suspension --- */
/*  3014 */                     if ($ret && $ret.$isSuspension) {
/*  3015 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 25);
/*  3016 */                     }
/*  3017 */                     var $call279 = $ret;
/*  3018 */                     //
/*  3019 */                     // line 142:
/*  3020 */                     //     NextRecord.PtrComp = Proc3(NextRecord.PtrComp)
/*  3021 */                     //                          ^
/*  3022 */                     //
/*  3023 */                     $currLineNo = 142;
/*  3024 */                     $currColNo = 25;
/*  3025 */ 
/*  3026 */                     if (NextRecord === undefined) {
/*  3027 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3028 */                     }
/*  3029 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $call279, true);
/*  3030 */                     $blk = 11; /* allowing case fallthrough */
/*  3031 */                 case 11:
/*  3032 */                     /* --- function return or resume suspension --- */
/*  3033 */                     if ($ret && $ret.$isSuspension) {
/*  3034 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 4);
/*  3035 */                     }
/*  3036 */                     //
/*  3037 */                     // line 143:
/*  3038 */                     //     if NextRecord.Discr == Ident1:
/*  3039 */                     //     ^
/*  3040 */                     //
/*  3041 */                     $currLineNo = 143;
/*  3042 */                     $currColNo = 4;
/*  3043 */ 
/*  3044 */                     if (NextRecord === undefined) {
/*  3045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3046 */                     }
/*  3047 */                     $ret = Sk.abstr.gattr(NextRecord, 'Discr', true);
/*  3048 */                     $blk = 14; /* allowing case fallthrough */
/*  3049 */                 case 14:
/*  3050 */                     /* --- function return or resume suspension --- */
/*  3051 */                     if ($ret && $ret.$isSuspension) {
/*  3052 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 143, 7);
/*  3053 */                     }
/*  3054 */                     var $lattr280 = $ret;
/*  3055 */                     var $compareres281 = null;
/*  3056 */                     var $loadgbl282 = Sk.misceval.loadname('Ident1', $gbl);
/*  3057 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr280, $loadgbl282, 'Eq', true));
/*  3058 */                     $blk = 16; /* allowing case fallthrough */
/*  3059 */                 case 16:
/*  3060 */                     /* --- function return or resume suspension --- */
/*  3061 */                     if ($ret && $ret.$isSuspension) {
/*  3062 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 143, 7);
/*  3063 */                     }
/*  3064 */                     $compareres281 = $ret;
/*  3065 */                     var $jfalse283 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3066 */                     if ($jfalse283) { /*test failed */
/*  3067 */                         $blk = 15;
/*  3068 */                         continue;
/*  3069 */                     }
/*  3070 */                     $blk = 15; /* allowing case fallthrough */
/*  3071 */                 case 15:
/*  3072 */                     /* --- done --- */
/*  3073 */                     var $jfalse284 = ($compareres281 === false || !Sk.misceval.isTrue($compareres281));
/*  3074 */                     if ($jfalse284) { /*test failed */
/*  3075 */                         $blk = 13;
/*  3076 */                         continue;
/*  3077 */                     }
/*  3078 */                     //
/*  3079 */                     // line 144:
/*  3080 */                     //         NextRecord.IntComp = 6
/*  3081 */                     //         ^
/*  3082 */                     //
/*  3083 */                     $currLineNo = 144;
/*  3084 */                     $currColNo = 8;
/*  3085 */ 
/*  3086 */                     if (NextRecord === undefined) {
/*  3087 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3088 */                     }
/*  3089 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', new Sk.builtin.int_(6), true);
/*  3090 */                     $blk = 17; /* allowing case fallthrough */
/*  3091 */                 case 17:
/*  3092 */                     /* --- function return or resume suspension --- */
/*  3093 */                     if ($ret && $ret.$isSuspension) {
/*  3094 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 144, 8);
/*  3095 */                     }
/*  3096 */                     //
/*  3097 */                     // line 145:
/*  3098 */                     //         NextRecord.EnumComp = Proc6(PtrParIn.EnumComp)
/*  3099 */                     //         ^
/*  3100 */                     //
/*  3101 */                     $currLineNo = 145;
/*  3102 */                     $currColNo = 8;
/*  3103 */ 
/*  3104 */                     var $loadgbl285 = Sk.misceval.loadname('Proc6', $gbl);
/*  3105 */                     if (PtrParIn === undefined) {
/*  3106 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3107 */                     }
/*  3108 */                     $ret = Sk.abstr.gattr(PtrParIn, 'EnumComp', true);
/*  3109 */                     $blk = 18; /* allowing case fallthrough */
/*  3110 */                 case 18:
/*  3111 */                     /* --- function return or resume suspension --- */
/*  3112 */                     if ($ret && $ret.$isSuspension) {
/*  3113 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 36);
/*  3114 */                     }
/*  3115 */                     var $lattr286 = $ret;
/*  3116 */                     $ret;
/*  3117 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl285, $lattr286);
/*  3118 */                     $blk = 19; /* allowing case fallthrough */
/*  3119 */                 case 19:
/*  3120 */                     /* --- function return or resume suspension --- */
/*  3121 */                     if ($ret && $ret.$isSuspension) {
/*  3122 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 30);
/*  3123 */                     }
/*  3124 */                     var $call287 = $ret;
/*  3125 */                     //
/*  3126 */                     // line 145:
/*  3127 */                     //         NextRecord.EnumComp = Proc6(PtrParIn.EnumComp)
/*  3128 */                     //                               ^
/*  3129 */                     //
/*  3130 */                     $currLineNo = 145;
/*  3131 */                     $currColNo = 30;
/*  3132 */ 
/*  3133 */                     if (NextRecord === undefined) {
/*  3134 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3135 */                     }
/*  3136 */                     $ret = Sk.abstr.sattr(NextRecord, 'EnumComp', $call287, true);
/*  3137 */                     $blk = 20; /* allowing case fallthrough */
/*  3138 */                 case 20:
/*  3139 */                     /* --- function return or resume suspension --- */
/*  3140 */                     if ($ret && $ret.$isSuspension) {
/*  3141 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 8);
/*  3142 */                     }
/*  3143 */                     //
/*  3144 */                     // line 146:
/*  3145 */                     //         NextRecord.PtrComp = PtrGlb.PtrComp
/*  3146 */                     //         ^
/*  3147 */                     //
/*  3148 */                     $currLineNo = 146;
/*  3149 */                     $currColNo = 8;
/*  3150 */ 
/*  3151 */                     var $loadgbl288 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3152 */                     $ret = Sk.abstr.gattr($loadgbl288, 'PtrComp', true);
/*  3153 */                     $blk = 21; /* allowing case fallthrough */
/*  3154 */                 case 21:
/*  3155 */                     /* --- function return or resume suspension --- */
/*  3156 */                     if ($ret && $ret.$isSuspension) {
/*  3157 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 146, 29);
/*  3158 */                     }
/*  3159 */                     var $lattr289 = $ret;
/*  3160 */                     if (NextRecord === undefined) {
/*  3161 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3162 */                     }
/*  3163 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $lattr289, true);
/*  3164 */                     $blk = 22; /* allowing case fallthrough */
/*  3165 */                 case 22:
/*  3166 */                     /* --- function return or resume suspension --- */
/*  3167 */                     if ($ret && $ret.$isSuspension) {
/*  3168 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 146, 8);
/*  3169 */                     }
/*  3170 */                     //
/*  3171 */                     // line 147:
/*  3172 */                     //         NextRecord.IntComp = Proc7(NextRecord.IntComp, 10)
/*  3173 */                     //         ^
/*  3174 */                     //
/*  3175 */                     $currLineNo = 147;
/*  3176 */                     $currColNo = 8;
/*  3177 */ 
/*  3178 */                     var $loadgbl290 = Sk.misceval.loadname('Proc7', $gbl);
/*  3179 */                     if (NextRecord === undefined) {
/*  3180 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3181 */                     }
/*  3182 */                     $ret = Sk.abstr.gattr(NextRecord, 'IntComp', true);
/*  3183 */                     $blk = 23; /* allowing case fallthrough */
/*  3184 */                 case 23:
/*  3185 */                     /* --- function return or resume suspension --- */
/*  3186 */                     if ($ret && $ret.$isSuspension) {
/*  3187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 35);
/*  3188 */                     }
/*  3189 */                     var $lattr291 = $ret;
/*  3190 */                     $ret;
/*  3191 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl290, $lattr291, new Sk.builtin.int_(10));
/*  3192 */                     $blk = 24; /* allowing case fallthrough */
/*  3193 */                 case 24:
/*  3194 */                     /* --- function return or resume suspension --- */
/*  3195 */                     if ($ret && $ret.$isSuspension) {
/*  3196 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 29);
/*  3197 */                     }
/*  3198 */                     var $call292 = $ret;
/*  3199 */                     //
/*  3200 */                     // line 147:
/*  3201 */                     //         NextRecord.IntComp = Proc7(NextRecord.IntComp, 10)
/*  3202 */                     //                              ^
/*  3203 */                     //
/*  3204 */                     $currLineNo = 147;
/*  3205 */                     $currColNo = 29;
/*  3206 */ 
/*  3207 */                     if (NextRecord === undefined) {
/*  3208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3209 */                     }
/*  3210 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', $call292, true);
/*  3211 */                     $blk = 25; /* allowing case fallthrough */
/*  3212 */                 case 25:
/*  3213 */                     /* --- function return or resume suspension --- */
/*  3214 */                     if ($ret && $ret.$isSuspension) {
/*  3215 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 8);
/*  3216 */                     }
/*  3217 */                     $blk = 12; /* allowing case fallthrough */
/*  3218 */                 case 12:
/*  3219 */                     /* --- end of if --- */
/*  3220 */                     //
/*  3221 */                     // line 150:
/*  3222 */                     //     NextRecord.PtrComp = None
/*  3223 */                     //     ^
/*  3224 */                     //
/*  3225 */                     $currLineNo = 150;
/*  3226 */                     $currColNo = 4;
/*  3227 */ 
/*  3228 */                     if (NextRecord === undefined) {
/*  3229 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3230 */                     }
/*  3231 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', Sk.builtin.none.none$, true);
/*  3232 */                     $blk = 28; /* allowing case fallthrough */
/*  3233 */                 case 28:
/*  3234 */                     /* --- function return or resume suspension --- */
/*  3235 */                     if ($ret && $ret.$isSuspension) {
/*  3236 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 150, 4);
/*  3237 */                     }
/*  3238 */                     //
/*  3239 */                     // line 151:
/*  3240 */                     //     return PtrParIn
/*  3241 */                     //     ^
/*  3242 */                     //
/*  3243 */                     $currLineNo = 151;
/*  3244 */                     $currColNo = 4;
/*  3245 */ 
/*  3246 */                     if (PtrParIn === undefined) {
/*  3247 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3248 */                     }
/*  3249 */                     return PtrParIn;
/*  3250 */                     return Sk.builtin.none.none$;
/*  3251 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3252 */                 case 13:
/*  3253 */                     /* --- next branch of if --- */
/*  3254 */                     //
/*  3255 */                     // line 149:
/*  3256 */                     //         PtrParIn = NextRecord.copy()
/*  3257 */                     //         ^
/*  3258 */                     //
/*  3259 */                     $currLineNo = 149;
/*  3260 */                     $currColNo = 8;
/*  3261 */ 
/*  3262 */                     if (NextRecord === undefined) {
/*  3263 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3264 */                     }
/*  3265 */                     $ret = Sk.abstr.gattr(NextRecord, 'copy', true);
/*  3266 */                     $blk = 26; /* allowing case fallthrough */
/*  3267 */                 case 26:
/*  3268 */                     /* --- function return or resume suspension --- */
/*  3269 */                     if ($ret && $ret.$isSuspension) {
/*  3270 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 149, 19);
/*  3271 */                     }
/*  3272 */                     var $lattr293 = $ret;
/*  3273 */                     $ret;
/*  3274 */                     $ret = Sk.misceval.callsimOrSuspend($lattr293);
/*  3275 */                     $blk = 27; /* allowing case fallthrough */
/*  3276 */                 case 27:
/*  3277 */                     /* --- function return or resume suspension --- */
/*  3278 */                     if ($ret && $ret.$isSuspension) {
/*  3279 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 149, 19);
/*  3280 */                     }
/*  3281 */                     var $call294 = $ret;
/*  3282 */                     //
/*  3283 */                     // line 149:
/*  3284 */                     //         PtrParIn = NextRecord.copy()
/*  3285 */                     //                    ^
/*  3286 */                     //
/*  3287 */                     $currLineNo = 149;
/*  3288 */                     $currColNo = 19;
/*  3289 */ 
/*  3290 */                     PtrParIn = $call294;
/*  3291 */                     $blk = 12; /* jump */
/*  3292 */                     continue;
/*  3293 */                 }
/*  3294 */             } catch (err) {
/*  3295 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3296 */                     err = new Sk.builtin.ExternalError(err);
/*  3297 */                 }
/*  3298 */                 err.traceback.push({
/*  3299 */                     lineno: $currLineNo,
/*  3300 */                     colno: $currColNo,
/*  3301 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3302 */                 });
/*  3303 */                 if ($exc.length > 0) {
/*  3304 */                     $err = err;
/*  3305 */                     $blk = $exc.pop();
/*  3306 */                     continue;
/*  3307 */                 } else {
/*  3308 */                     throw err;
/*  3309 */                 }
/*  3310 */             }
/*  3311 */         }
/*  3312 */     });
/*  3313 */     var $scope296 = (function $Proc2297$(IntParIO) {
/*  3314 */         var EnumLoc, IntLoc; /* locals */
/*  3315 */         var EnumLoc, EnumLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntParIO, IntParIO, IntParIO, IntParIO, $loadgbl300, $compareres301, $str302, $compareres309, $loadgbl310;
/*  3316 */         var $wakeFromSuspension = function() {
/*  3317 */             var susp = $scope296.$wakingSuspension;
/*  3318 */             delete $scope296.$wakingSuspension;
/*  3319 */             $blk = susp.$blk;
/*  3320 */             $loc = susp.$loc;
/*  3321 */             $gbl = susp.$gbl;
/*  3322 */             $exc = susp.$exc;
/*  3323 */             $err = susp.$err;
/*  3324 */             $postfinally = susp.$postfinally;
/*  3325 */             $currLineNo = susp.$lineno;
/*  3326 */             $currColNo = susp.$colno;
/*  3327 */             Sk.lastYield = Date.now();
/*  3328 */             EnumLoc = susp.$tmps.EnumLoc;
/*  3329 */             IntLoc = susp.$tmps.IntLoc;
/*  3330 */             IntParIO = susp.$tmps.IntParIO;
/*  3331 */             $loadgbl300 = susp.$tmps.$loadgbl300;
/*  3332 */             $compareres301 = susp.$tmps.$compareres301;
/*  3333 */             $str302 = susp.$tmps.$str302;
/*  3334 */             $compareres309 = susp.$tmps.$compareres309;
/*  3335 */             $loadgbl310 = susp.$tmps.$loadgbl310;
/*  3336 */             try {
/*  3337 */                 $ret = susp.child.resume();
/*  3338 */             } catch (err) {
/*  3339 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3340 */                     err = new Sk.builtin.ExternalError(err);
/*  3341 */                 }
/*  3342 */                 err.traceback.push({
/*  3343 */                     lineno: $currLineNo,
/*  3344 */                     colno: $currColNo,
/*  3345 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3346 */                 });
/*  3347 */                 if ($exc.length > 0) {
/*  3348 */                     $err = err;
/*  3349 */                     $blk = $exc.pop();
/*  3350 */                 } else {
/*  3351 */                     throw err;
/*  3352 */                 }
/*  3353 */             }
/*  3354 */         };
/*  3355 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3356 */             var susp = new Sk.misceval.Suspension();
/*  3357 */             susp.child = $child;
/*  3358 */             susp.resume = function() {
/*  3359 */                 $scope296.$wakingSuspension = susp;
/*  3360 */                 return $scope296();
/*  3361 */             };
/*  3362 */             susp.data = susp.child.data;
/*  3363 */             susp.$blk = $blk;
/*  3364 */             susp.$loc = $loc;
/*  3365 */             susp.$gbl = $gbl;
/*  3366 */             susp.$exc = $exc;
/*  3367 */             susp.$err = $err;
/*  3368 */             susp.$postfinally = $postfinally;
/*  3369 */             susp.$filename = $filename;
/*  3370 */             susp.$lineno = $lineno;
/*  3371 */             susp.$colno = $colno;
/*  3372 */             susp.optional = susp.child.optional;
/*  3373 */             susp.$tmps = {
/*  3374 */                 "EnumLoc": EnumLoc,
/*  3375 */                 "IntLoc": IntLoc,
/*  3376 */                 "IntParIO": IntParIO,
/*  3377 */                 "$loadgbl300": $loadgbl300,
/*  3378 */                 "$compareres301": $compareres301,
/*  3379 */                 "$str302": $str302,
/*  3380 */                 "$compareres309": $compareres309,
/*  3381 */                 "$loadgbl310": $loadgbl310
/*  3382 */             };
/*  3383 */             return susp;
/*  3384 */         };
/*  3385 */         var $blk = 0,
/*  3386 */             $exc = [],
/*  3387 */             $loc = {},
/*  3388 */             $gbl = this,
/*  3389 */             $err = undefined,
/*  3390 */             $ret = undefined,
/*  3391 */             $postfinally = undefined,
/*  3392 */             $currLineNo = undefined,
/*  3393 */             $currColNo = undefined;
/*  3394 */         if ($scope296.$wakingSuspension !== undefined) {
/*  3395 */             $wakeFromSuspension();
/*  3396 */         } else {
/*  3397 */             Sk.builtin.pyCheckArgs("Proc2", arguments, 1, 1, false, false);
/*  3398 */         }
/*  3399 */         while (true) {
/*  3400 */             try {
/*  3401 */                 switch ($blk) {
/*  3402 */                 case 0:
/*  3403 */                     /* --- codeobj entry --- */
/*  3404 */                     if (IntParIO === undefined) {
/*  3405 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3406 */                     }
/*  3407 */ 
/*  3408 */                     //
/*  3409 */                     // line 154:
/*  3410 */                     //     IntLoc = IntParIO + 10
/*  3411 */                     //     ^
/*  3412 */                     //
/*  3413 */                     $currLineNo = 154;
/*  3414 */                     $currColNo = 4;
/*  3415 */ 
/*  3416 */                     if (IntParIO === undefined) {
/*  3417 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3418 */                     }
/*  3419 */                     var $binop298 = Sk.abstr.numberBinOp(IntParIO, new Sk.builtin.int_(10), 'Add');
/*  3420 */                     IntLoc = $binop298;
/*  3421 */                     //
/*  3422 */                     // line 155:
/*  3423 */                     //     while 1:
/*  3424 */                     //     ^
/*  3425 */                     //
/*  3426 */                     $currLineNo = 155;
/*  3427 */                     $currColNo = 4;
/*  3428 */ 
/*  3429 */                     $blk = 1; /* allowing case fallthrough */
/*  3430 */                 case 1:
/*  3431 */                     /* --- while test --- */
/*  3432 */                     //
/*  3433 */                     // line 155:
/*  3434 */                     //     while 1:
/*  3435 */                     //     ^
/*  3436 */                     //
/*  3437 */                     $currLineNo = 155;
/*  3438 */                     $currColNo = 4;
/*  3439 */ 
/*  3440 */                     var $jfalse299 = (new Sk.builtin.int_(1) === false || !Sk.misceval.isTrue(new Sk.builtin.int_(1)));
/*  3441 */                     if ($jfalse299) { /*test failed */
/*  3442 */                         $blk = 2;
/*  3443 */                         continue;
/*  3444 */                     }
/*  3445 */                     $blk = 3; /* allowing case fallthrough */
/*  3446 */                 case 3:
/*  3447 */                     /* --- while body --- */
/*  3448 */                     //
/*  3449 */                     // line 156:
/*  3450 */                     //         if Char1Glob == 'A':
/*  3451 */                     //         ^
/*  3452 */                     //
/*  3453 */                     $currLineNo = 156;
/*  3454 */                     $currColNo = 8;
/*  3455 */ 
/*  3456 */                     var $loadgbl300 = Sk.misceval.loadname('Char1Glob', $gbl);
/*  3457 */                     var $compareres301 = null;
/*  3458 */                     var $str302 = new Sk.builtins['str']('A');
/*  3459 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl300, $str302, 'Eq', true));
/*  3460 */                     $blk = 6; /* allowing case fallthrough */
/*  3461 */                 case 6:
/*  3462 */                     /* --- function return or resume suspension --- */
/*  3463 */                     if ($ret && $ret.$isSuspension) {
/*  3464 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 156, 11);
/*  3465 */                     }
/*  3466 */                     $compareres301 = $ret;
/*  3467 */                     var $jfalse303 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3468 */                     if ($jfalse303) { /*test failed */
/*  3469 */                         $blk = 5;
/*  3470 */                         continue;
/*  3471 */                     }
/*  3472 */                     $blk = 5; /* allowing case fallthrough */
/*  3473 */                 case 5:
/*  3474 */                     /* --- done --- */
/*  3475 */                     var $jfalse304 = ($compareres301 === false || !Sk.misceval.isTrue($compareres301));
/*  3476 */                     if ($jfalse304) { /*test failed */
/*  3477 */                         $blk = 4;
/*  3478 */                         continue;
/*  3479 */                     }
/*  3480 */                     //
/*  3481 */                     // line 157:
/*  3482 */                     //             IntLoc = IntLoc - 1
/*  3483 */                     //             ^
/*  3484 */                     //
/*  3485 */                     $currLineNo = 157;
/*  3486 */                     $currColNo = 12;
/*  3487 */ 
/*  3488 */                     if (IntLoc === undefined) {
/*  3489 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  3490 */                     }
/*  3491 */                     var $binop305 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  3492 */                     IntLoc = $binop305;
/*  3493 */                     //
/*  3494 */                     // line 158:
/*  3495 */                     //             IntParIO = IntLoc - IntGlob
/*  3496 */                     //             ^
/*  3497 */                     //
/*  3498 */                     $currLineNo = 158;
/*  3499 */                     $currColNo = 12;
/*  3500 */ 
/*  3501 */                     if (IntLoc === undefined) {
/*  3502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  3503 */                     }
/*  3504 */                     var $loadgbl306 = Sk.misceval.loadname('IntGlob', $gbl);
/*  3505 */                     var $binop307 = Sk.abstr.numberBinOp(IntLoc, $loadgbl306, 'Sub');
/*  3506 */                     IntParIO = $binop307;
/*  3507 */                     //
/*  3508 */                     // line 159:
/*  3509 */                     //             EnumLoc = Ident1
/*  3510 */                     //             ^
/*  3511 */                     //
/*  3512 */                     $currLineNo = 159;
/*  3513 */                     $currColNo = 12;
/*  3514 */ 
/*  3515 */                     var $loadgbl308 = Sk.misceval.loadname('Ident1', $gbl);
/*  3516 */                     EnumLoc = $loadgbl308;
/*  3517 */                     $blk = 4; /* allowing case fallthrough */
/*  3518 */                 case 4:
/*  3519 */                     /* --- end of if --- */
/*  3520 */                     //
/*  3521 */                     // line 160:
/*  3522 */                     //         if EnumLoc == Ident1:
/*  3523 */                     //         ^
/*  3524 */                     //
/*  3525 */                     $currLineNo = 160;
/*  3526 */                     $currColNo = 8;
/*  3527 */ 
/*  3528 */                     if (EnumLoc === undefined) {
/*  3529 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  3530 */                     }
/*  3531 */                     var $compareres309 = null;
/*  3532 */                     var $loadgbl310 = Sk.misceval.loadname('Ident1', $gbl);
/*  3533 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $loadgbl310, 'Eq', true));
/*  3534 */                     $blk = 9; /* allowing case fallthrough */
/*  3535 */                 case 9:
/*  3536 */                     /* --- function return or resume suspension --- */
/*  3537 */                     if ($ret && $ret.$isSuspension) {
/*  3538 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 160, 11);
/*  3539 */                     }
/*  3540 */                     $compareres309 = $ret;
/*  3541 */                     var $jfalse311 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3542 */                     if ($jfalse311) { /*test failed */
/*  3543 */                         $blk = 8;
/*  3544 */                         continue;
/*  3545 */                     }
/*  3546 */                     $blk = 8; /* allowing case fallthrough */
/*  3547 */                 case 8:
/*  3548 */                     /* --- done --- */
/*  3549 */                     var $jfalse312 = ($compareres309 === false || !Sk.misceval.isTrue($compareres309));
/*  3550 */                     if ($jfalse312) { /*test failed */
/*  3551 */                         $blk = 7;
/*  3552 */                         continue;
/*  3553 */                     }
/*  3554 */                     //
/*  3555 */                     // line 161:
/*  3556 */                     //             break
/*  3557 */                     //             ^
/*  3558 */                     //
/*  3559 */                     $currLineNo = 161;
/*  3560 */                     $currColNo = 12;
/*  3561 */ 
/*  3562 */                     $blk = 2; /* allowing case fallthrough */
/*  3563 */                 case 2:
/*  3564 */                     /* --- after while --- */
/*  3565 */                     //
/*  3566 */                     // line 162:
/*  3567 */                     //     return IntParIO
/*  3568 */                     //     ^
/*  3569 */                     //
/*  3570 */                     $currLineNo = 162;
/*  3571 */                     $currColNo = 4;
/*  3572 */ 
/*  3573 */                     if (IntParIO === undefined) {
/*  3574 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3575 */                     }
/*  3576 */                     return IntParIO;
/*  3577 */                     return Sk.builtin.none.none$;
/*  3578 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3579 */                 case 7:
/*  3580 */                     /* --- end of if --- */
/*  3581 */                     $blk = 1; /* jump */
/*  3582 */                     continue;
/*  3583 */                 }
/*  3584 */             } catch (err) {
/*  3585 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3586 */                     err = new Sk.builtin.ExternalError(err);
/*  3587 */                 }
/*  3588 */                 err.traceback.push({
/*  3589 */                     lineno: $currLineNo,
/*  3590 */                     colno: $currColNo,
/*  3591 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3592 */                 });
/*  3593 */                 if ($exc.length > 0) {
/*  3594 */                     $err = err;
/*  3595 */                     $blk = $exc.pop();
/*  3596 */                     continue;
/*  3597 */                 } else {
/*  3598 */                     throw err;
/*  3599 */                 }
/*  3600 */             }
/*  3601 */         }
/*  3602 */     });
/*  3603 */     var $scope314 = (function $Proc3315$(PtrParOut) {
/*  3604 */         var PtrParOut, PtrParOut, PtrParOut, $loadgbl316, $compareres317, $loadgbl320, $loadgbl322, $loadgbl323, $loadgbl322, $loadgbl323, $call324, $loadgbl325;
/*  3605 */         var $wakeFromSuspension = function() {
/*  3606 */             var susp = $scope314.$wakingSuspension;
/*  3607 */             delete $scope314.$wakingSuspension;
/*  3608 */             $blk = susp.$blk;
/*  3609 */             $loc = susp.$loc;
/*  3610 */             $gbl = susp.$gbl;
/*  3611 */             $exc = susp.$exc;
/*  3612 */             $err = susp.$err;
/*  3613 */             $postfinally = susp.$postfinally;
/*  3614 */             $currLineNo = susp.$lineno;
/*  3615 */             $currColNo = susp.$colno;
/*  3616 */             Sk.lastYield = Date.now();
/*  3617 */             PtrParOut = susp.$tmps.PtrParOut;
/*  3618 */             $loadgbl316 = susp.$tmps.$loadgbl316;
/*  3619 */             $compareres317 = susp.$tmps.$compareres317;
/*  3620 */             $loadgbl320 = susp.$tmps.$loadgbl320;
/*  3621 */             $loadgbl322 = susp.$tmps.$loadgbl322;
/*  3622 */             $loadgbl323 = susp.$tmps.$loadgbl323;
/*  3623 */             $call324 = susp.$tmps.$call324;
/*  3624 */             $loadgbl325 = susp.$tmps.$loadgbl325;
/*  3625 */             try {
/*  3626 */                 $ret = susp.child.resume();
/*  3627 */             } catch (err) {
/*  3628 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3629 */                     err = new Sk.builtin.ExternalError(err);
/*  3630 */                 }
/*  3631 */                 err.traceback.push({
/*  3632 */                     lineno: $currLineNo,
/*  3633 */                     colno: $currColNo,
/*  3634 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3635 */                 });
/*  3636 */                 if ($exc.length > 0) {
/*  3637 */                     $err = err;
/*  3638 */                     $blk = $exc.pop();
/*  3639 */                 } else {
/*  3640 */                     throw err;
/*  3641 */                 }
/*  3642 */             }
/*  3643 */         };
/*  3644 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3645 */             var susp = new Sk.misceval.Suspension();
/*  3646 */             susp.child = $child;
/*  3647 */             susp.resume = function() {
/*  3648 */                 $scope314.$wakingSuspension = susp;
/*  3649 */                 return $scope314();
/*  3650 */             };
/*  3651 */             susp.data = susp.child.data;
/*  3652 */             susp.$blk = $blk;
/*  3653 */             susp.$loc = $loc;
/*  3654 */             susp.$gbl = $gbl;
/*  3655 */             susp.$exc = $exc;
/*  3656 */             susp.$err = $err;
/*  3657 */             susp.$postfinally = $postfinally;
/*  3658 */             susp.$filename = $filename;
/*  3659 */             susp.$lineno = $lineno;
/*  3660 */             susp.$colno = $colno;
/*  3661 */             susp.optional = susp.child.optional;
/*  3662 */             susp.$tmps = {
/*  3663 */                 "PtrParOut": PtrParOut,
/*  3664 */                 "$loadgbl316": $loadgbl316,
/*  3665 */                 "$compareres317": $compareres317,
/*  3666 */                 "$loadgbl320": $loadgbl320,
/*  3667 */                 "$loadgbl322": $loadgbl322,
/*  3668 */                 "$loadgbl323": $loadgbl323,
/*  3669 */                 "$call324": $call324,
/*  3670 */                 "$loadgbl325": $loadgbl325
/*  3671 */             };
/*  3672 */             return susp;
/*  3673 */         };
/*  3674 */         var $blk = 0,
/*  3675 */             $exc = [],
/*  3676 */             $loc = {},
/*  3677 */             $gbl = this,
/*  3678 */             $err = undefined,
/*  3679 */             $ret = undefined,
/*  3680 */             $postfinally = undefined,
/*  3681 */             $currLineNo = undefined,
/*  3682 */             $currColNo = undefined;
/*  3683 */         if ($scope314.$wakingSuspension !== undefined) {
/*  3684 */             $wakeFromSuspension();
/*  3685 */         } else {
/*  3686 */             Sk.builtin.pyCheckArgs("Proc3", arguments, 1, 1, false, false);
/*  3687 */         }
/*  3688 */         while (true) {
/*  3689 */             try {
/*  3690 */                 switch ($blk) {
/*  3691 */                 case 0:
/*  3692 */                     /* --- codeobj entry --- */
/*  3693 */                     if (PtrParOut === undefined) {
/*  3694 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParOut\' referenced before assignment');
/*  3695 */                     }
/*  3696 */ 
/*  3697 */                     //
/*  3698 */                     // line 165:
/*  3699 */                     //     global IntGlob
/*  3700 */                     //     ^
/*  3701 */                     //
/*  3702 */                     $currLineNo = 165;
/*  3703 */                     $currColNo = 4;
/*  3704 */ 
/*  3705 */ 
/*  3706 */                     //
/*  3707 */                     // line 167:
/*  3708 */                     //     if PtrGlb is not None:
/*  3709 */                     //     ^
/*  3710 */                     //
/*  3711 */                     $currLineNo = 167;
/*  3712 */                     $currColNo = 4;
/*  3713 */ 
/*  3714 */                     var $loadgbl316 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3715 */                     var $compareres317 = null;
/*  3716 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl316, Sk.builtin.none.none$, 'IsNot', true));
/*  3717 */                     $blk = 4; /* allowing case fallthrough */
/*  3718 */                 case 4:
/*  3719 */                     /* --- function return or resume suspension --- */
/*  3720 */                     if ($ret && $ret.$isSuspension) {
/*  3721 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 167, 7);
/*  3722 */                     }
/*  3723 */                     $compareres317 = $ret;
/*  3724 */                     var $jfalse318 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3725 */                     if ($jfalse318) { /*test failed */
/*  3726 */                         $blk = 3;
/*  3727 */                         continue;
/*  3728 */                     }
/*  3729 */                     $blk = 3; /* allowing case fallthrough */
/*  3730 */                 case 3:
/*  3731 */                     /* --- done --- */
/*  3732 */                     var $jfalse319 = ($compareres317 === false || !Sk.misceval.isTrue($compareres317));
/*  3733 */                     if ($jfalse319) { /*test failed */
/*  3734 */                         $blk = 2;
/*  3735 */                         continue;
/*  3736 */                     }
/*  3737 */                     //
/*  3738 */                     // line 168:
/*  3739 */                     //         PtrParOut = PtrGlb.PtrComp
/*  3740 */                     //         ^
/*  3741 */                     //
/*  3742 */                     $currLineNo = 168;
/*  3743 */                     $currColNo = 8;
/*  3744 */ 
/*  3745 */                     var $loadgbl320 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3746 */                     $ret = Sk.abstr.gattr($loadgbl320, 'PtrComp', true);
/*  3747 */                     $blk = 5; /* allowing case fallthrough */
/*  3748 */                 case 5:
/*  3749 */                     /* --- function return or resume suspension --- */
/*  3750 */                     if ($ret && $ret.$isSuspension) {
/*  3751 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 168, 20);
/*  3752 */                     }
/*  3753 */                     var $lattr321 = $ret;
/*  3754 */                     PtrParOut = $lattr321;
/*  3755 */                     $blk = 1; /* allowing case fallthrough */
/*  3756 */                 case 1:
/*  3757 */                     /* --- end of if --- */
/*  3758 */                     //
/*  3759 */                     // line 171:
/*  3760 */                     //     PtrGlb.IntComp = Proc7(10, IntGlob)
/*  3761 */                     //     ^
/*  3762 */                     //
/*  3763 */                     $currLineNo = 171;
/*  3764 */                     $currColNo = 4;
/*  3765 */ 
/*  3766 */                     var $loadgbl322 = Sk.misceval.loadname('Proc7', $gbl);
/*  3767 */                     var $loadgbl323 = Sk.misceval.loadname('IntGlob', $gbl);
/*  3768 */                     $ret;
/*  3769 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl322, new Sk.builtin.int_(10), $loadgbl323);
/*  3770 */                     $blk = 6; /* allowing case fallthrough */
/*  3771 */                 case 6:
/*  3772 */                     /* --- function return or resume suspension --- */
/*  3773 */                     if ($ret && $ret.$isSuspension) {
/*  3774 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 171, 21);
/*  3775 */                     }
/*  3776 */                     var $call324 = $ret;
/*  3777 */                     //
/*  3778 */                     // line 171:
/*  3779 */                     //     PtrGlb.IntComp = Proc7(10, IntGlob)
/*  3780 */                     //                      ^
/*  3781 */                     //
/*  3782 */                     $currLineNo = 171;
/*  3783 */                     $currColNo = 21;
/*  3784 */ 
/*  3785 */                     var $loadgbl325 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3786 */                     $ret = Sk.abstr.sattr($loadgbl325, 'IntComp', $call324, true);
/*  3787 */                     $blk = 7; /* allowing case fallthrough */
/*  3788 */                 case 7:
/*  3789 */                     /* --- function return or resume suspension --- */
/*  3790 */                     if ($ret && $ret.$isSuspension) {
/*  3791 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 171, 4);
/*  3792 */                     }
/*  3793 */                     //
/*  3794 */                     // line 172:
/*  3795 */                     //     return PtrParOut
/*  3796 */                     //     ^
/*  3797 */                     //
/*  3798 */                     $currLineNo = 172;
/*  3799 */                     $currColNo = 4;
/*  3800 */ 
/*  3801 */                     if (PtrParOut === undefined) {
/*  3802 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParOut\' referenced before assignment');
/*  3803 */                     }
/*  3804 */                     return PtrParOut;
/*  3805 */                     return Sk.builtin.none.none$;
/*  3806 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3807 */                 case 2:
/*  3808 */                     /* --- next branch of if --- */
/*  3809 */                     //
/*  3810 */                     // line 170:
/*  3811 */                     //         IntGlob = 100
/*  3812 */                     //         ^
/*  3813 */                     //
/*  3814 */                     $currLineNo = 170;
/*  3815 */                     $currColNo = 8;
/*  3816 */ 
/*  3817 */                     $gbl.IntGlob = new Sk.builtin.int_(100);
/*  3818 */                     $blk = 1; /* jump */
/*  3819 */                     continue;
/*  3820 */                 }
/*  3821 */             } catch (err) {
/*  3822 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3823 */                     err = new Sk.builtin.ExternalError(err);
/*  3824 */                 }
/*  3825 */                 err.traceback.push({
/*  3826 */                     lineno: $currLineNo,
/*  3827 */                     colno: $currColNo,
/*  3828 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3829 */                 });
/*  3830 */                 if ($exc.length > 0) {
/*  3831 */                     $err = err;
/*  3832 */                     $blk = $exc.pop();
/*  3833 */                     continue;
/*  3834 */                 } else {
/*  3835 */                     throw err;
/*  3836 */                 }
/*  3837 */             }
/*  3838 */         }
/*  3839 */     });
/*  3840 */     var $scope327 = (function $Proc4328$() {
/*  3841 */         var BoolLoc; /* locals */
/*  3842 */         var BoolLoc, BoolLoc, BoolLoc, $loadgbl329, $compareres330, $str331;
/*  3843 */         var $wakeFromSuspension = function() {
/*  3844 */             var susp = $scope327.$wakingSuspension;
/*  3845 */             delete $scope327.$wakingSuspension;
/*  3846 */             $blk = susp.$blk;
/*  3847 */             $loc = susp.$loc;
/*  3848 */             $gbl = susp.$gbl;
/*  3849 */             $exc = susp.$exc;
/*  3850 */             $err = susp.$err;
/*  3851 */             $postfinally = susp.$postfinally;
/*  3852 */             $currLineNo = susp.$lineno;
/*  3853 */             $currColNo = susp.$colno;
/*  3854 */             Sk.lastYield = Date.now();
/*  3855 */             BoolLoc = susp.$tmps.BoolLoc;
/*  3856 */             $loadgbl329 = susp.$tmps.$loadgbl329;
/*  3857 */             $compareres330 = susp.$tmps.$compareres330;
/*  3858 */             $str331 = susp.$tmps.$str331;
/*  3859 */             try {
/*  3860 */                 $ret = susp.child.resume();
/*  3861 */             } catch (err) {
/*  3862 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3863 */                     err = new Sk.builtin.ExternalError(err);
/*  3864 */                 }
/*  3865 */                 err.traceback.push({
/*  3866 */                     lineno: $currLineNo,
/*  3867 */                     colno: $currColNo,
/*  3868 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3869 */                 });
/*  3870 */                 if ($exc.length > 0) {
/*  3871 */                     $err = err;
/*  3872 */                     $blk = $exc.pop();
/*  3873 */                 } else {
/*  3874 */                     throw err;
/*  3875 */                 }
/*  3876 */             }
/*  3877 */         };
/*  3878 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3879 */             var susp = new Sk.misceval.Suspension();
/*  3880 */             susp.child = $child;
/*  3881 */             susp.resume = function() {
/*  3882 */                 $scope327.$wakingSuspension = susp;
/*  3883 */                 return $scope327();
/*  3884 */             };
/*  3885 */             susp.data = susp.child.data;
/*  3886 */             susp.$blk = $blk;
/*  3887 */             susp.$loc = $loc;
/*  3888 */             susp.$gbl = $gbl;
/*  3889 */             susp.$exc = $exc;
/*  3890 */             susp.$err = $err;
/*  3891 */             susp.$postfinally = $postfinally;
/*  3892 */             susp.$filename = $filename;
/*  3893 */             susp.$lineno = $lineno;
/*  3894 */             susp.$colno = $colno;
/*  3895 */             susp.optional = susp.child.optional;
/*  3896 */             susp.$tmps = {
/*  3897 */                 "BoolLoc": BoolLoc,
/*  3898 */                 "$loadgbl329": $loadgbl329,
/*  3899 */                 "$compareres330": $compareres330,
/*  3900 */                 "$str331": $str331
/*  3901 */             };
/*  3902 */             return susp;
/*  3903 */         };
/*  3904 */         var $blk = 0,
/*  3905 */             $exc = [],
/*  3906 */             $loc = {},
/*  3907 */             $gbl = this,
/*  3908 */             $err = undefined,
/*  3909 */             $ret = undefined,
/*  3910 */             $postfinally = undefined,
/*  3911 */             $currLineNo = undefined,
/*  3912 */             $currColNo = undefined;
/*  3913 */         if ($scope327.$wakingSuspension !== undefined) {
/*  3914 */             $wakeFromSuspension();
/*  3915 */         } else {
/*  3916 */             Sk.builtin.pyCheckArgs("Proc4", arguments, 0, 0, false, false);
/*  3917 */         }
/*  3918 */         while (true) {
/*  3919 */             try {
/*  3920 */                 switch ($blk) {
/*  3921 */                 case 0:
/*  3922 */                     /* --- codeobj entry --- */
/*  3923 */                     //
/*  3924 */                     // line 175:
/*  3925 */                     //     global Char2Glob
/*  3926 */                     //     ^
/*  3927 */                     //
/*  3928 */                     $currLineNo = 175;
/*  3929 */                     $currColNo = 4;
/*  3930 */ 
/*  3931 */ 
/*  3932 */                     //
/*  3933 */                     // line 177:
/*  3934 */                     //     BoolLoc = Char1Glob == 'A'
/*  3935 */                     //     ^
/*  3936 */                     //
/*  3937 */                     $currLineNo = 177;
/*  3938 */                     $currColNo = 4;
/*  3939 */ 
/*  3940 */                     var $loadgbl329 = Sk.misceval.loadname('Char1Glob', $gbl);
/*  3941 */                     var $compareres330 = null;
/*  3942 */                     var $str331 = new Sk.builtins['str']('A');
/*  3943 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl329, $str331, 'Eq', true));
/*  3944 */                     $blk = 2; /* allowing case fallthrough */
/*  3945 */                 case 2:
/*  3946 */                     /* --- function return or resume suspension --- */
/*  3947 */                     if ($ret && $ret.$isSuspension) {
/*  3948 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 177, 14);
/*  3949 */                     }
/*  3950 */                     $compareres330 = $ret;
/*  3951 */                     var $jfalse332 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3952 */                     if ($jfalse332) { /*test failed */
/*  3953 */                         $blk = 1;
/*  3954 */                         continue;
/*  3955 */                     }
/*  3956 */                     $blk = 1; /* allowing case fallthrough */
/*  3957 */                 case 1:
/*  3958 */                     /* --- done --- */
/*  3959 */                     BoolLoc = $compareres330;
/*  3960 */                     //
/*  3961 */                     // line 178:
/*  3962 */                     //     BoolLoc = BoolLoc or BoolGlob
/*  3963 */                     //     ^
/*  3964 */                     //
/*  3965 */                     $currLineNo = 178;
/*  3966 */                     $currColNo = 4;
/*  3967 */ 
/*  3968 */                     if (BoolLoc === undefined) {
/*  3969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'BoolLoc\' referenced before assignment');
/*  3970 */                     }
/*  3971 */                     var $boolopsucc333 = BoolLoc;
/*  3972 */                     $boolopsucc333 = BoolLoc;
/*  3973 */                     var $jtrue334 = (BoolLoc === true || Sk.misceval.isTrue(BoolLoc));
/*  3974 */                     if ($jtrue334) { /*test passed */
/*  3975 */                         $blk = 3;
/*  3976 */                         continue;
/*  3977 */                     }
/*  3978 */                     var $loadgbl335 = Sk.misceval.loadname('BoolGlob', $gbl);
/*  3979 */                     $boolopsucc333 = $loadgbl335;
/*  3980 */                     var $jtrue336 = ($loadgbl335 === true || Sk.misceval.isTrue($loadgbl335));
/*  3981 */                     if ($jtrue336) { /*test passed */
/*  3982 */                         $blk = 3;
/*  3983 */                         continue;
/*  3984 */                     }
/*  3985 */                     $blk = 3; /* allowing case fallthrough */
/*  3986 */                 case 3:
/*  3987 */                     /* --- end of boolop --- */
/*  3988 */                     BoolLoc = $boolopsucc333;
/*  3989 */                     //
/*  3990 */                     // line 179:
/*  3991 */                     //     Char2Glob = 'B'
/*  3992 */                     //     ^
/*  3993 */                     //
/*  3994 */                     $currLineNo = 179;
/*  3995 */                     $currColNo = 4;
/*  3996 */ 
/*  3997 */                     var $str337 = new Sk.builtins['str']('B');
/*  3998 */                     $gbl.Char2Glob = $str337;
/*  3999 */                     return Sk.builtin.none.none$;
/*  4000 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4001 */                 }
/*  4002 */             } catch (err) {
/*  4003 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4004 */                     err = new Sk.builtin.ExternalError(err);
/*  4005 */                 }
/*  4006 */                 err.traceback.push({
/*  4007 */                     lineno: $currLineNo,
/*  4008 */                     colno: $currColNo,
/*  4009 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4010 */                 });
/*  4011 */                 if ($exc.length > 0) {
/*  4012 */                     $err = err;
/*  4013 */                     $blk = $exc.pop();
/*  4014 */                     continue;
/*  4015 */                 } else {
/*  4016 */                     throw err;
/*  4017 */                 }
/*  4018 */             }
/*  4019 */         }
/*  4020 */     });
/*  4021 */     var $scope339 = (function $Proc5340$() {
/*  4022 */         var $blk = 0,
/*  4023 */             $exc = [],
/*  4024 */             $loc = {},
/*  4025 */             $gbl = this,
/*  4026 */             $err = undefined,
/*  4027 */             $ret = undefined,
/*  4028 */             $postfinally = undefined,
/*  4029 */             $currLineNo = undefined,
/*  4030 */             $currColNo = undefined;
/*  4031 */         if ($scope339.$wakingSuspension !== undefined) {
/*  4032 */             $wakeFromSuspension();
/*  4033 */         } else {
/*  4034 */             Sk.builtin.pyCheckArgs("Proc5", arguments, 0, 0, false, false);
/*  4035 */         }
/*  4036 */         while (true) {
/*  4037 */             try {
/*  4038 */                 switch ($blk) {
/*  4039 */                 case 0:
/*  4040 */                     /* --- codeobj entry --- */
/*  4041 */                     //
/*  4042 */                     // line 182:
/*  4043 */                     //     global Char1Glob
/*  4044 */                     //     ^
/*  4045 */                     //
/*  4046 */                     $currLineNo = 182;
/*  4047 */                     $currColNo = 4;
/*  4048 */ 
/*  4049 */ 
/*  4050 */                     //
/*  4051 */                     // line 183:
/*  4052 */                     //     global BoolGlob
/*  4053 */                     //     ^
/*  4054 */                     //
/*  4055 */                     $currLineNo = 183;
/*  4056 */                     $currColNo = 4;
/*  4057 */ 
/*  4058 */ 
/*  4059 */                     //
/*  4060 */                     // line 185:
/*  4061 */                     //     Char1Glob = 'A'
/*  4062 */                     //     ^
/*  4063 */                     //
/*  4064 */                     $currLineNo = 185;
/*  4065 */                     $currColNo = 4;
/*  4066 */ 
/*  4067 */                     var $str341 = new Sk.builtins['str']('A');
/*  4068 */                     $gbl.Char1Glob = $str341;
/*  4069 */                     //
/*  4070 */                     // line 186:
/*  4071 */                     //     BoolGlob = FALSE
/*  4072 */                     //     ^
/*  4073 */                     //
/*  4074 */                     $currLineNo = 186;
/*  4075 */                     $currColNo = 4;
/*  4076 */ 
/*  4077 */                     var $loadgbl342 = Sk.misceval.loadname('FALSE', $gbl);
/*  4078 */                     $gbl.BoolGlob = $loadgbl342;
/*  4079 */                     return Sk.builtin.none.none$;
/*  4080 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4081 */                 }
/*  4082 */             } catch (err) {
/*  4083 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4084 */                     err = new Sk.builtin.ExternalError(err);
/*  4085 */                 }
/*  4086 */                 err.traceback.push({
/*  4087 */                     lineno: $currLineNo,
/*  4088 */                     colno: $currColNo,
/*  4089 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4090 */                 });
/*  4091 */                 if ($exc.length > 0) {
/*  4092 */                     $err = err;
/*  4093 */                     $blk = $exc.pop();
/*  4094 */                     continue;
/*  4095 */                 } else {
/*  4096 */                     throw err;
/*  4097 */                 }
/*  4098 */             }
/*  4099 */         }
/*  4100 */     });
/*  4101 */     var $scope344 = (function $Proc6345$(EnumParIn) {
/*  4102 */         var EnumParOut; /* locals */
/*  4103 */         var EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, $loadgbl346, $compareres351, $loadgbl352, $compareres356, $loadgbl357, $loadgbl360, $compareres361, $compareres366, $loadgbl367, $compareres371, $loadgbl372, $compareres375, $loadgbl376;
/*  4104 */         var $wakeFromSuspension = function() {
/*  4105 */             var susp = $scope344.$wakingSuspension;
/*  4106 */             delete $scope344.$wakingSuspension;
/*  4107 */             $blk = susp.$blk;
/*  4108 */             $loc = susp.$loc;
/*  4109 */             $gbl = susp.$gbl;
/*  4110 */             $exc = susp.$exc;
/*  4111 */             $err = susp.$err;
/*  4112 */             $postfinally = susp.$postfinally;
/*  4113 */             $currLineNo = susp.$lineno;
/*  4114 */             $currColNo = susp.$colno;
/*  4115 */             Sk.lastYield = Date.now();
/*  4116 */             EnumParIn = susp.$tmps.EnumParIn;
/*  4117 */             EnumParOut = susp.$tmps.EnumParOut;
/*  4118 */             $loadgbl346 = susp.$tmps.$loadgbl346;
/*  4119 */             $compareres351 = susp.$tmps.$compareres351;
/*  4120 */             $loadgbl352 = susp.$tmps.$loadgbl352;
/*  4121 */             $compareres356 = susp.$tmps.$compareres356;
/*  4122 */             $loadgbl357 = susp.$tmps.$loadgbl357;
/*  4123 */             $loadgbl360 = susp.$tmps.$loadgbl360;
/*  4124 */             $compareres361 = susp.$tmps.$compareres361;
/*  4125 */             $compareres366 = susp.$tmps.$compareres366;
/*  4126 */             $loadgbl367 = susp.$tmps.$loadgbl367;
/*  4127 */             $compareres371 = susp.$tmps.$compareres371;
/*  4128 */             $loadgbl372 = susp.$tmps.$loadgbl372;
/*  4129 */             $compareres375 = susp.$tmps.$compareres375;
/*  4130 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  4131 */             try {
/*  4132 */                 $ret = susp.child.resume();
/*  4133 */             } catch (err) {
/*  4134 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4135 */                     err = new Sk.builtin.ExternalError(err);
/*  4136 */                 }
/*  4137 */                 err.traceback.push({
/*  4138 */                     lineno: $currLineNo,
/*  4139 */                     colno: $currColNo,
/*  4140 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4141 */                 });
/*  4142 */                 if ($exc.length > 0) {
/*  4143 */                     $err = err;
/*  4144 */                     $blk = $exc.pop();
/*  4145 */                 } else {
/*  4146 */                     throw err;
/*  4147 */                 }
/*  4148 */             }
/*  4149 */         };
/*  4150 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4151 */             var susp = new Sk.misceval.Suspension();
/*  4152 */             susp.child = $child;
/*  4153 */             susp.resume = function() {
/*  4154 */                 $scope344.$wakingSuspension = susp;
/*  4155 */                 return $scope344();
/*  4156 */             };
/*  4157 */             susp.data = susp.child.data;
/*  4158 */             susp.$blk = $blk;
/*  4159 */             susp.$loc = $loc;
/*  4160 */             susp.$gbl = $gbl;
/*  4161 */             susp.$exc = $exc;
/*  4162 */             susp.$err = $err;
/*  4163 */             susp.$postfinally = $postfinally;
/*  4164 */             susp.$filename = $filename;
/*  4165 */             susp.$lineno = $lineno;
/*  4166 */             susp.$colno = $colno;
/*  4167 */             susp.optional = susp.child.optional;
/*  4168 */             susp.$tmps = {
/*  4169 */                 "EnumParIn": EnumParIn,
/*  4170 */                 "EnumParOut": EnumParOut,
/*  4171 */                 "$loadgbl346": $loadgbl346,
/*  4172 */                 "$compareres351": $compareres351,
/*  4173 */                 "$loadgbl352": $loadgbl352,
/*  4174 */                 "$compareres356": $compareres356,
/*  4175 */                 "$loadgbl357": $loadgbl357,
/*  4176 */                 "$loadgbl360": $loadgbl360,
/*  4177 */                 "$compareres361": $compareres361,
/*  4178 */                 "$compareres366": $compareres366,
/*  4179 */                 "$loadgbl367": $loadgbl367,
/*  4180 */                 "$compareres371": $compareres371,
/*  4181 */                 "$loadgbl372": $loadgbl372,
/*  4182 */                 "$compareres375": $compareres375,
/*  4183 */                 "$loadgbl376": $loadgbl376
/*  4184 */             };
/*  4185 */             return susp;
/*  4186 */         };
/*  4187 */         var $blk = 0,
/*  4188 */             $exc = [],
/*  4189 */             $loc = {},
/*  4190 */             $gbl = this,
/*  4191 */             $err = undefined,
/*  4192 */             $ret = undefined,
/*  4193 */             $postfinally = undefined,
/*  4194 */             $currLineNo = undefined,
/*  4195 */             $currColNo = undefined;
/*  4196 */         if ($scope344.$wakingSuspension !== undefined) {
/*  4197 */             $wakeFromSuspension();
/*  4198 */         } else {
/*  4199 */             Sk.builtin.pyCheckArgs("Proc6", arguments, 1, 1, false, false);
/*  4200 */         }
/*  4201 */         while (true) {
/*  4202 */             try {
/*  4203 */                 switch ($blk) {
/*  4204 */                 case 0:
/*  4205 */                     /* --- codeobj entry --- */
/*  4206 */                     if (EnumParIn === undefined) {
/*  4207 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4208 */                     }
/*  4209 */ 
/*  4210 */                     //
/*  4211 */                     // line 189:
/*  4212 */                     //     EnumParOut = EnumParIn
/*  4213 */                     //     ^
/*  4214 */                     //
/*  4215 */                     $currLineNo = 189;
/*  4216 */                     $currColNo = 4;
/*  4217 */ 
/*  4218 */                     if (EnumParIn === undefined) {
/*  4219 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4220 */                     }
/*  4221 */                     EnumParOut = EnumParIn;
/*  4222 */                     //
/*  4223 */                     // line 190:
/*  4224 */                     //     if not Func3(EnumParIn):
/*  4225 */                     //     ^
/*  4226 */                     //
/*  4227 */                     $currLineNo = 190;
/*  4228 */                     $currColNo = 4;
/*  4229 */ 
/*  4230 */                     var $loadgbl346 = Sk.misceval.loadname('Func3', $gbl);
/*  4231 */                     if (EnumParIn === undefined) {
/*  4232 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4233 */                     }
/*  4234 */                     $ret;
/*  4235 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl346, EnumParIn);
/*  4236 */                     $blk = 2; /* allowing case fallthrough */
/*  4237 */                 case 2:
/*  4238 */                     /* --- function return or resume suspension --- */
/*  4239 */                     if ($ret && $ret.$isSuspension) {
/*  4240 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 190, 11);
/*  4241 */                     }
/*  4242 */                     var $call347 = $ret;
/*  4243 */                     //
/*  4244 */                     // line 190:
/*  4245 */                     //     if not Func3(EnumParIn):
/*  4246 */                     //            ^
/*  4247 */                     //
/*  4248 */                     $currLineNo = 190;
/*  4249 */                     $currColNo = 11;
/*  4250 */ 
/*  4251 */                     var $unaryop348 = Sk.abstr.numberUnaryOp($call347, 'Not');
/*  4252 */                     var $jfalse349 = ($unaryop348 === false || !Sk.misceval.isTrue($unaryop348));
/*  4253 */                     if ($jfalse349) { /*test failed */
/*  4254 */                         $blk = 1;
/*  4255 */                         continue;
/*  4256 */                     }
/*  4257 */                     //
/*  4258 */                     // line 191:
/*  4259 */                     //         EnumParOut = Ident4
/*  4260 */                     //         ^
/*  4261 */                     //
/*  4262 */                     $currLineNo = 191;
/*  4263 */                     $currColNo = 8;
/*  4264 */ 
/*  4265 */                     var $loadgbl350 = Sk.misceval.loadname('Ident4', $gbl);
/*  4266 */                     EnumParOut = $loadgbl350;
/*  4267 */                     $blk = 1; /* allowing case fallthrough */
/*  4268 */                 case 1:
/*  4269 */                     /* --- end of if --- */
/*  4270 */                     //
/*  4271 */                     // line 192:
/*  4272 */                     //     if EnumParIn == Ident1:
/*  4273 */                     //     ^
/*  4274 */                     //
/*  4275 */                     $currLineNo = 192;
/*  4276 */                     $currColNo = 4;
/*  4277 */ 
/*  4278 */                     if (EnumParIn === undefined) {
/*  4279 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4280 */                     }
/*  4281 */                     var $compareres351 = null;
/*  4282 */                     var $loadgbl352 = Sk.misceval.loadname('Ident1', $gbl);
/*  4283 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl352, 'Eq', true));
/*  4284 */                     $blk = 6; /* allowing case fallthrough */
/*  4285 */                 case 6:
/*  4286 */                     /* --- function return or resume suspension --- */
/*  4287 */                     if ($ret && $ret.$isSuspension) {
/*  4288 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 192, 7);
/*  4289 */                     }
/*  4290 */                     $compareres351 = $ret;
/*  4291 */                     var $jfalse353 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4292 */                     if ($jfalse353) { /*test failed */
/*  4293 */                         $blk = 5;
/*  4294 */                         continue;
/*  4295 */                     }
/*  4296 */                     $blk = 5; /* allowing case fallthrough */
/*  4297 */                 case 5:
/*  4298 */                     /* --- done --- */
/*  4299 */                     var $jfalse354 = ($compareres351 === false || !Sk.misceval.isTrue($compareres351));
/*  4300 */                     if ($jfalse354) { /*test failed */
/*  4301 */                         $blk = 4;
/*  4302 */                         continue;
/*  4303 */                     }
/*  4304 */                     //
/*  4305 */                     // line 193:
/*  4306 */                     //         EnumParOut = Ident1
/*  4307 */                     //         ^
/*  4308 */                     //
/*  4309 */                     $currLineNo = 193;
/*  4310 */                     $currColNo = 8;
/*  4311 */ 
/*  4312 */                     var $loadgbl355 = Sk.misceval.loadname('Ident1', $gbl);
/*  4313 */                     EnumParOut = $loadgbl355;
/*  4314 */                     $blk = 3; /* allowing case fallthrough */
/*  4315 */                 case 3:
/*  4316 */                     /* --- end of if --- */
/*  4317 */                     //
/*  4318 */                     // line 205:
/*  4319 */                     //     return EnumParOut
/*  4320 */                     //     ^
/*  4321 */                     //
/*  4322 */                     $currLineNo = 205;
/*  4323 */                     $currColNo = 4;
/*  4324 */ 
/*  4325 */                     if (EnumParOut === undefined) {
/*  4326 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParOut\' referenced before assignment');
/*  4327 */                     }
/*  4328 */                     return EnumParOut;
/*  4329 */                     return Sk.builtin.none.none$;
/*  4330 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4331 */                 case 4:
/*  4332 */                     /* --- next branch of if --- */
/*  4333 */                     //
/*  4334 */                     // line 194:
/*  4335 */                     //     elif EnumParIn == Ident2:
/*  4336 */                     //          ^
/*  4337 */                     //
/*  4338 */                     $currLineNo = 194;
/*  4339 */                     $currColNo = 9;
/*  4340 */ 
/*  4341 */                     if (EnumParIn === undefined) {
/*  4342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4343 */                     }
/*  4344 */                     var $compareres356 = null;
/*  4345 */                     var $loadgbl357 = Sk.misceval.loadname('Ident2', $gbl);
/*  4346 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl357, 'Eq', true));
/*  4347 */                     $blk = 10; /* allowing case fallthrough */
/*  4348 */                 case 10:
/*  4349 */                     /* --- function return or resume suspension --- */
/*  4350 */                     if ($ret && $ret.$isSuspension) {
/*  4351 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 194, 9);
/*  4352 */                     }
/*  4353 */                     $compareres356 = $ret;
/*  4354 */                     var $jfalse358 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4355 */                     if ($jfalse358) { /*test failed */
/*  4356 */                         $blk = 9;
/*  4357 */                         continue;
/*  4358 */                     }
/*  4359 */                     $blk = 9; /* allowing case fallthrough */
/*  4360 */                 case 9:
/*  4361 */                     /* --- done --- */
/*  4362 */                     var $jfalse359 = ($compareres356 === false || !Sk.misceval.isTrue($compareres356));
/*  4363 */                     if ($jfalse359) { /*test failed */
/*  4364 */                         $blk = 8;
/*  4365 */                         continue;
/*  4366 */                     }
/*  4367 */                     //
/*  4368 */                     // line 195:
/*  4369 */                     //         if IntGlob > 100:
/*  4370 */                     //         ^
/*  4371 */                     //
/*  4372 */                     $currLineNo = 195;
/*  4373 */                     $currColNo = 8;
/*  4374 */ 
/*  4375 */                     var $loadgbl360 = Sk.misceval.loadname('IntGlob', $gbl);
/*  4376 */                     var $compareres361 = null;
/*  4377 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl360, new Sk.builtin.int_(100), 'Gt', true));
/*  4378 */                     $blk = 14; /* allowing case fallthrough */
/*  4379 */                 case 14:
/*  4380 */                     /* --- function return or resume suspension --- */
/*  4381 */                     if ($ret && $ret.$isSuspension) {
/*  4382 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 195, 11);
/*  4383 */                     }
/*  4384 */                     $compareres361 = $ret;
/*  4385 */                     var $jfalse362 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4386 */                     if ($jfalse362) { /*test failed */
/*  4387 */                         $blk = 13;
/*  4388 */                         continue;
/*  4389 */                     }
/*  4390 */                     $blk = 13; /* allowing case fallthrough */
/*  4391 */                 case 13:
/*  4392 */                     /* --- done --- */
/*  4393 */                     var $jfalse363 = ($compareres361 === false || !Sk.misceval.isTrue($compareres361));
/*  4394 */                     if ($jfalse363) { /*test failed */
/*  4395 */                         $blk = 12;
/*  4396 */                         continue;
/*  4397 */                     }
/*  4398 */                     //
/*  4399 */                     // line 196:
/*  4400 */                     //             EnumParOut = Ident1
/*  4401 */                     //             ^
/*  4402 */                     //
/*  4403 */                     $currLineNo = 196;
/*  4404 */                     $currColNo = 12;
/*  4405 */ 
/*  4406 */                     var $loadgbl364 = Sk.misceval.loadname('Ident1', $gbl);
/*  4407 */                     EnumParOut = $loadgbl364;
/*  4408 */                     $blk = 11; /* allowing case fallthrough */
/*  4409 */                 case 11:
/*  4410 */                     /* --- end of if --- */
/*  4411 */                     $blk = 7; /* allowing case fallthrough */
/*  4412 */                 case 7:
/*  4413 */                     /* --- end of if --- */
/*  4414 */                     $blk = 3; /* jump */
/*  4415 */                     continue;
/*  4416 */                 case 8:
/*  4417 */                     /* --- next branch of if --- */
/*  4418 */                     //
/*  4419 */                     // line 199:
/*  4420 */                     //     elif EnumParIn == Ident3:
/*  4421 */                     //          ^
/*  4422 */                     //
/*  4423 */                     $currLineNo = 199;
/*  4424 */                     $currColNo = 9;
/*  4425 */ 
/*  4426 */                     if (EnumParIn === undefined) {
/*  4427 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4428 */                     }
/*  4429 */                     var $compareres366 = null;
/*  4430 */                     var $loadgbl367 = Sk.misceval.loadname('Ident3', $gbl);
/*  4431 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl367, 'Eq', true));
/*  4432 */                     $blk = 18; /* allowing case fallthrough */
/*  4433 */                 case 18:
/*  4434 */                     /* --- function return or resume suspension --- */
/*  4435 */                     if ($ret && $ret.$isSuspension) {
/*  4436 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 199, 9);
/*  4437 */                     }
/*  4438 */                     $compareres366 = $ret;
/*  4439 */                     var $jfalse368 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4440 */                     if ($jfalse368) { /*test failed */
/*  4441 */                         $blk = 17;
/*  4442 */                         continue;
/*  4443 */                     }
/*  4444 */                     $blk = 17; /* allowing case fallthrough */
/*  4445 */                 case 17:
/*  4446 */                     /* --- done --- */
/*  4447 */                     var $jfalse369 = ($compareres366 === false || !Sk.misceval.isTrue($compareres366));
/*  4448 */                     if ($jfalse369) { /*test failed */
/*  4449 */                         $blk = 16;
/*  4450 */                         continue;
/*  4451 */                     }
/*  4452 */                     //
/*  4453 */                     // line 200:
/*  4454 */                     //         EnumParOut = Ident2
/*  4455 */                     //         ^
/*  4456 */                     //
/*  4457 */                     $currLineNo = 200;
/*  4458 */                     $currColNo = 8;
/*  4459 */ 
/*  4460 */                     var $loadgbl370 = Sk.misceval.loadname('Ident2', $gbl);
/*  4461 */                     EnumParOut = $loadgbl370;
/*  4462 */                     $blk = 15; /* allowing case fallthrough */
/*  4463 */                 case 15:
/*  4464 */                     /* --- end of if --- */
/*  4465 */                     $blk = 7; /* jump */
/*  4466 */                     continue;
/*  4467 */                 case 12:
/*  4468 */                     /* --- next branch of if --- */
/*  4469 */                     //
/*  4470 */                     // line 198:
/*  4471 */                     //             EnumParOut = Ident4
/*  4472 */                     //             ^
/*  4473 */                     //
/*  4474 */                     $currLineNo = 198;
/*  4475 */                     $currColNo = 12;
/*  4476 */ 
/*  4477 */                     var $loadgbl365 = Sk.misceval.loadname('Ident4', $gbl);
/*  4478 */                     EnumParOut = $loadgbl365;
/*  4479 */                     $blk = 11; /* jump */
/*  4480 */                     continue;
/*  4481 */                 case 16:
/*  4482 */                     /* --- next branch of if --- */
/*  4483 */                     //
/*  4484 */                     // line 201:
/*  4485 */                     //     elif EnumParIn == Ident4:
/*  4486 */                     //          ^
/*  4487 */                     //
/*  4488 */                     $currLineNo = 201;
/*  4489 */                     $currColNo = 9;
/*  4490 */ 
/*  4491 */                     if (EnumParIn === undefined) {
/*  4492 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4493 */                     }
/*  4494 */                     var $compareres371 = null;
/*  4495 */                     var $loadgbl372 = Sk.misceval.loadname('Ident4', $gbl);
/*  4496 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl372, 'Eq', true));
/*  4497 */                     $blk = 22; /* allowing case fallthrough */
/*  4498 */                 case 22:
/*  4499 */                     /* --- function return or resume suspension --- */
/*  4500 */                     if ($ret && $ret.$isSuspension) {
/*  4501 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 201, 9);
/*  4502 */                     }
/*  4503 */                     $compareres371 = $ret;
/*  4504 */                     var $jfalse373 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4505 */                     if ($jfalse373) { /*test failed */
/*  4506 */                         $blk = 21;
/*  4507 */                         continue;
/*  4508 */                     }
/*  4509 */                     $blk = 21; /* allowing case fallthrough */
/*  4510 */                 case 21:
/*  4511 */                     /* --- done --- */
/*  4512 */                     var $jfalse374 = ($compareres371 === false || !Sk.misceval.isTrue($compareres371));
/*  4513 */                     if ($jfalse374) { /*test failed */
/*  4514 */                         $blk = 20;
/*  4515 */                         continue;
/*  4516 */                     }
/*  4517 */                     //
/*  4518 */                     // line 202:
/*  4519 */                     //         pass
/*  4520 */                     //         ^
/*  4521 */                     //
/*  4522 */                     $currLineNo = 202;
/*  4523 */                     $currColNo = 8;
/*  4524 */ 
/*  4525 */                     $blk = 19; /* allowing case fallthrough */
/*  4526 */                 case 19:
/*  4527 */                     /* --- end of if --- */
/*  4528 */                     $blk = 15; /* jump */
/*  4529 */                     continue;
/*  4530 */                 case 20:
/*  4531 */                     /* --- next branch of if --- */
/*  4532 */                     //
/*  4533 */                     // line 203:
/*  4534 */                     //     elif EnumParIn == Ident5:
/*  4535 */                     //          ^
/*  4536 */                     //
/*  4537 */                     $currLineNo = 203;
/*  4538 */                     $currColNo = 9;
/*  4539 */ 
/*  4540 */                     if (EnumParIn === undefined) {
/*  4541 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4542 */                     }
/*  4543 */                     var $compareres375 = null;
/*  4544 */                     var $loadgbl376 = Sk.misceval.loadname('Ident5', $gbl);
/*  4545 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl376, 'Eq', true));
/*  4546 */                     $blk = 25; /* allowing case fallthrough */
/*  4547 */                 case 25:
/*  4548 */                     /* --- function return or resume suspension --- */
/*  4549 */                     if ($ret && $ret.$isSuspension) {
/*  4550 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 203, 9);
/*  4551 */                     }
/*  4552 */                     $compareres375 = $ret;
/*  4553 */                     var $jfalse377 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4554 */                     if ($jfalse377) { /*test failed */
/*  4555 */                         $blk = 24;
/*  4556 */                         continue;
/*  4557 */                     }
/*  4558 */                     $blk = 24; /* allowing case fallthrough */
/*  4559 */                 case 24:
/*  4560 */                     /* --- done --- */
/*  4561 */                     var $jfalse378 = ($compareres375 === false || !Sk.misceval.isTrue($compareres375));
/*  4562 */                     if ($jfalse378) { /*test failed */
/*  4563 */                         $blk = 23;
/*  4564 */                         continue;
/*  4565 */                     }
/*  4566 */                     //
/*  4567 */                     // line 204:
/*  4568 */                     //         EnumParOut = Ident3
/*  4569 */                     //         ^
/*  4570 */                     //
/*  4571 */                     $currLineNo = 204;
/*  4572 */                     $currColNo = 8;
/*  4573 */ 
/*  4574 */                     var $loadgbl379 = Sk.misceval.loadname('Ident3', $gbl);
/*  4575 */                     EnumParOut = $loadgbl379;
/*  4576 */                     $blk = 23; /* allowing case fallthrough */
/*  4577 */                 case 23:
/*  4578 */                     /* --- end of if --- */
/*  4579 */                     $blk = 19; /* jump */
/*  4580 */                     continue;
/*  4581 */                 }
/*  4582 */             } catch (err) {
/*  4583 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4584 */                     err = new Sk.builtin.ExternalError(err);
/*  4585 */                 }
/*  4586 */                 err.traceback.push({
/*  4587 */                     lineno: $currLineNo,
/*  4588 */                     colno: $currColNo,
/*  4589 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4590 */                 });
/*  4591 */                 if ($exc.length > 0) {
/*  4592 */                     $err = err;
/*  4593 */                     $blk = $exc.pop();
/*  4594 */                     continue;
/*  4595 */                 } else {
/*  4596 */                     throw err;
/*  4597 */                 }
/*  4598 */             }
/*  4599 */         }
/*  4600 */     });
/*  4601 */     var $scope381 = (function $Proc7382$(IntParI1, IntParI2) {
/*  4602 */         var IntLoc, IntParOut; /* locals */
/*  4603 */         var $blk = 0,
/*  4604 */             $exc = [],
/*  4605 */             $loc = {},
/*  4606 */             $gbl = this,
/*  4607 */             $err = undefined,
/*  4608 */             $ret = undefined,
/*  4609 */             $postfinally = undefined,
/*  4610 */             $currLineNo = undefined,
/*  4611 */             $currColNo = undefined;
/*  4612 */         if ($scope381.$wakingSuspension !== undefined) {
/*  4613 */             $wakeFromSuspension();
/*  4614 */         } else {
/*  4615 */             Sk.builtin.pyCheckArgs("Proc7", arguments, 2, 2, false, false);
/*  4616 */         }
/*  4617 */         while (true) {
/*  4618 */             try {
/*  4619 */                 switch ($blk) {
/*  4620 */                 case 0:
/*  4621 */                     /* --- codeobj entry --- */
/*  4622 */                     if (IntParI1 === undefined) {
/*  4623 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  4624 */                     }
/*  4625 */                     if (IntParI2 === undefined) {
/*  4626 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  4627 */                     }
/*  4628 */ 
/*  4629 */                     //
/*  4630 */                     // line 208:
/*  4631 */                     //     IntLoc = IntParI1 + 2
/*  4632 */                     //     ^
/*  4633 */                     //
/*  4634 */                     $currLineNo = 208;
/*  4635 */                     $currColNo = 4;
/*  4636 */ 
/*  4637 */                     if (IntParI1 === undefined) {
/*  4638 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  4639 */                     }
/*  4640 */                     var $binop383 = Sk.abstr.numberBinOp(IntParI1, new Sk.builtin.int_(2), 'Add');
/*  4641 */                     IntLoc = $binop383;
/*  4642 */                     //
/*  4643 */                     // line 209:
/*  4644 */                     //     IntParOut = IntParI2 + IntLoc
/*  4645 */                     //     ^
/*  4646 */                     //
/*  4647 */                     $currLineNo = 209;
/*  4648 */                     $currColNo = 4;
/*  4649 */ 
/*  4650 */                     if (IntParI2 === undefined) {
/*  4651 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  4652 */                     }
/*  4653 */                     if (IntLoc === undefined) {
/*  4654 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4655 */                     }
/*  4656 */                     var $binop384 = Sk.abstr.numberBinOp(IntParI2, IntLoc, 'Add');
/*  4657 */                     IntParOut = $binop384;
/*  4658 */                     //
/*  4659 */                     // line 210:
/*  4660 */                     //     return IntParOut
/*  4661 */                     //     ^
/*  4662 */                     //
/*  4663 */                     $currLineNo = 210;
/*  4664 */                     $currColNo = 4;
/*  4665 */ 
/*  4666 */                     if (IntParOut === undefined) {
/*  4667 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParOut\' referenced before assignment');
/*  4668 */                     }
/*  4669 */                     return IntParOut;
/*  4670 */                     return Sk.builtin.none.none$;
/*  4671 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4672 */                 }
/*  4673 */             } catch (err) {
/*  4674 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4675 */                     err = new Sk.builtin.ExternalError(err);
/*  4676 */                 }
/*  4677 */                 err.traceback.push({
/*  4678 */                     lineno: $currLineNo,
/*  4679 */                     colno: $currColNo,
/*  4680 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4681 */                 });
/*  4682 */                 if ($exc.length > 0) {
/*  4683 */                     $err = err;
/*  4684 */                     $blk = $exc.pop();
/*  4685 */                     continue;
/*  4686 */                 } else {
/*  4687 */                     throw err;
/*  4688 */                 }
/*  4689 */             }
/*  4690 */         }
/*  4691 */     });
/*  4692 */     var $scope386 = (function $Proc8387$(Array1Par, Array2Par, IntParI1, IntParI2) {
/*  4693 */         var IntIndex, IntLoc; /* locals */
/*  4694 */         var Array1Par, Array1Par, Array1Par, Array1Par, Array1Par, Array1Par, Array2Par, Array2Par, Array2Par, Array2Par, Array2Par, IntIndex, IntIndex, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntParI1, IntParI1, IntParI2, IntParI2, $lsubscr389, $binop390, $binop391, $loadgbl392, $binop393, $iter395, $loadgbl392, $binop393, $call394, $iter395, $lsubscr397, $lsubscr398, $binop399, $lsubscr398, $binop399, $lsubscr400, $binop401, $lsubscr398, $binop399, $lsubscr400, $binop401, $lsubscr402, $binop403, $lsubscr404, $binop405, $lsubscr404, $binop405, $lsubscr406;
/*  4695 */         var $wakeFromSuspension = function() {
/*  4696 */             var susp = $scope386.$wakingSuspension;
/*  4697 */             delete $scope386.$wakingSuspension;
/*  4698 */             $blk = susp.$blk;
/*  4699 */             $loc = susp.$loc;
/*  4700 */             $gbl = susp.$gbl;
/*  4701 */             $exc = susp.$exc;
/*  4702 */             $err = susp.$err;
/*  4703 */             $postfinally = susp.$postfinally;
/*  4704 */             $currLineNo = susp.$lineno;
/*  4705 */             $currColNo = susp.$colno;
/*  4706 */             Sk.lastYield = Date.now();
/*  4707 */             Array1Par = susp.$tmps.Array1Par;
/*  4708 */             Array2Par = susp.$tmps.Array2Par;
/*  4709 */             IntIndex = susp.$tmps.IntIndex;
/*  4710 */             IntLoc = susp.$tmps.IntLoc;
/*  4711 */             IntParI1 = susp.$tmps.IntParI1;
/*  4712 */             IntParI2 = susp.$tmps.IntParI2;
/*  4713 */             $lsubscr389 = susp.$tmps.$lsubscr389;
/*  4714 */             $binop390 = susp.$tmps.$binop390;
/*  4715 */             $binop391 = susp.$tmps.$binop391;
/*  4716 */             $loadgbl392 = susp.$tmps.$loadgbl392;
/*  4717 */             $binop393 = susp.$tmps.$binop393;
/*  4718 */             $iter395 = susp.$tmps.$iter395;
/*  4719 */             $call394 = susp.$tmps.$call394;
/*  4720 */             $lsubscr397 = susp.$tmps.$lsubscr397;
/*  4721 */             $lsubscr398 = susp.$tmps.$lsubscr398;
/*  4722 */             $binop399 = susp.$tmps.$binop399;
/*  4723 */             $lsubscr400 = susp.$tmps.$lsubscr400;
/*  4724 */             $binop401 = susp.$tmps.$binop401;
/*  4725 */             $lsubscr402 = susp.$tmps.$lsubscr402;
/*  4726 */             $binop403 = susp.$tmps.$binop403;
/*  4727 */             $lsubscr404 = susp.$tmps.$lsubscr404;
/*  4728 */             $binop405 = susp.$tmps.$binop405;
/*  4729 */             $lsubscr406 = susp.$tmps.$lsubscr406;
/*  4730 */             try {
/*  4731 */                 $ret = susp.child.resume();
/*  4732 */             } catch (err) {
/*  4733 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4734 */                     err = new Sk.builtin.ExternalError(err);
/*  4735 */                 }
/*  4736 */                 err.traceback.push({
/*  4737 */                     lineno: $currLineNo,
/*  4738 */                     colno: $currColNo,
/*  4739 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4740 */                 });
/*  4741 */                 if ($exc.length > 0) {
/*  4742 */                     $err = err;
/*  4743 */                     $blk = $exc.pop();
/*  4744 */                 } else {
/*  4745 */                     throw err;
/*  4746 */                 }
/*  4747 */             }
/*  4748 */         };
/*  4749 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4750 */             var susp = new Sk.misceval.Suspension();
/*  4751 */             susp.child = $child;
/*  4752 */             susp.resume = function() {
/*  4753 */                 $scope386.$wakingSuspension = susp;
/*  4754 */                 return $scope386();
/*  4755 */             };
/*  4756 */             susp.data = susp.child.data;
/*  4757 */             susp.$blk = $blk;
/*  4758 */             susp.$loc = $loc;
/*  4759 */             susp.$gbl = $gbl;
/*  4760 */             susp.$exc = $exc;
/*  4761 */             susp.$err = $err;
/*  4762 */             susp.$postfinally = $postfinally;
/*  4763 */             susp.$filename = $filename;
/*  4764 */             susp.$lineno = $lineno;
/*  4765 */             susp.$colno = $colno;
/*  4766 */             susp.optional = susp.child.optional;
/*  4767 */             susp.$tmps = {
/*  4768 */                 "Array1Par": Array1Par,
/*  4769 */                 "Array2Par": Array2Par,
/*  4770 */                 "IntIndex": IntIndex,
/*  4771 */                 "IntLoc": IntLoc,
/*  4772 */                 "IntParI1": IntParI1,
/*  4773 */                 "IntParI2": IntParI2,
/*  4774 */                 "$lsubscr389": $lsubscr389,
/*  4775 */                 "$binop390": $binop390,
/*  4776 */                 "$binop391": $binop391,
/*  4777 */                 "$loadgbl392": $loadgbl392,
/*  4778 */                 "$binop393": $binop393,
/*  4779 */                 "$iter395": $iter395,
/*  4780 */                 "$call394": $call394,
/*  4781 */                 "$lsubscr397": $lsubscr397,
/*  4782 */                 "$lsubscr398": $lsubscr398,
/*  4783 */                 "$binop399": $binop399,
/*  4784 */                 "$lsubscr400": $lsubscr400,
/*  4785 */                 "$binop401": $binop401,
/*  4786 */                 "$lsubscr402": $lsubscr402,
/*  4787 */                 "$binop403": $binop403,
/*  4788 */                 "$lsubscr404": $lsubscr404,
/*  4789 */                 "$binop405": $binop405,
/*  4790 */                 "$lsubscr406": $lsubscr406
/*  4791 */             };
/*  4792 */             return susp;
/*  4793 */         };
/*  4794 */         var $blk = 0,
/*  4795 */             $exc = [],
/*  4796 */             $loc = {},
/*  4797 */             $gbl = this,
/*  4798 */             $err = undefined,
/*  4799 */             $ret = undefined,
/*  4800 */             $postfinally = undefined,
/*  4801 */             $currLineNo = undefined,
/*  4802 */             $currColNo = undefined;
/*  4803 */         if ($scope386.$wakingSuspension !== undefined) {
/*  4804 */             $wakeFromSuspension();
/*  4805 */         } else {
/*  4806 */             Sk.builtin.pyCheckArgs("Proc8", arguments, 4, 4, false, false);
/*  4807 */         }
/*  4808 */         while (true) {
/*  4809 */             try {
/*  4810 */                 switch ($blk) {
/*  4811 */                 case 0:
/*  4812 */                     /* --- codeobj entry --- */
/*  4813 */                     if (Array1Par === undefined) {
/*  4814 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  4815 */                     }
/*  4816 */                     if (Array2Par === undefined) {
/*  4817 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  4818 */                     }
/*  4819 */                     if (IntParI1 === undefined) {
/*  4820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  4821 */                     }
/*  4822 */                     if (IntParI2 === undefined) {
/*  4823 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  4824 */                     }
/*  4825 */ 
/*  4826 */                     //
/*  4827 */                     // line 213:
/*  4828 */                     //     global IntGlob
/*  4829 */                     //     ^
/*  4830 */                     //
/*  4831 */                     $currLineNo = 213;
/*  4832 */                     $currColNo = 4;
/*  4833 */ 
/*  4834 */ 
/*  4835 */                     //
/*  4836 */                     // line 215:
/*  4837 */                     //     IntLoc = IntParI1 + 5
/*  4838 */                     //     ^
/*  4839 */                     //
/*  4840 */                     $currLineNo = 215;
/*  4841 */                     $currColNo = 4;
/*  4842 */ 
/*  4843 */                     if (IntParI1 === undefined) {
/*  4844 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  4845 */                     }
/*  4846 */                     var $binop388 = Sk.abstr.numberBinOp(IntParI1, new Sk.builtin.int_(5), 'Add');
/*  4847 */                     IntLoc = $binop388;
/*  4848 */                     //
/*  4849 */                     // line 216:
/*  4850 */                     //     Array1Par[IntLoc] = IntParI2
/*  4851 */                     //     ^
/*  4852 */                     //
/*  4853 */                     $currLineNo = 216;
/*  4854 */                     $currColNo = 4;
/*  4855 */ 
/*  4856 */                     if (IntParI2 === undefined) {
/*  4857 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  4858 */                     }
/*  4859 */                     if (Array1Par === undefined) {
/*  4860 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  4861 */                     }
/*  4862 */                     if (IntLoc === undefined) {
/*  4863 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4864 */                     }
/*  4865 */                     $ret = Sk.abstr.objectSetItem(Array1Par, IntLoc, IntParI2, true);
/*  4866 */                     $blk = 1; /* allowing case fallthrough */
/*  4867 */                 case 1:
/*  4868 */                     /* --- function return or resume suspension --- */
/*  4869 */                     if ($ret && $ret.$isSuspension) {
/*  4870 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4871 */                     }
/*  4872 */                     //
/*  4873 */                     // line 217:
/*  4874 */                     //     Array1Par[IntLoc+1] = Array1Par[IntLoc]
/*  4875 */                     //     ^
/*  4876 */                     //
/*  4877 */                     $currLineNo = 217;
/*  4878 */                     $currColNo = 4;
/*  4879 */ 
/*  4880 */                     if (Array1Par === undefined) {
/*  4881 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  4882 */                     }
/*  4883 */                     if (IntLoc === undefined) {
/*  4884 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4885 */                     }
/*  4886 */                     $ret = Sk.abstr.objectGetItem(Array1Par, IntLoc, true);
/*  4887 */                     $blk = 2; /* allowing case fallthrough */
/*  4888 */                 case 2:
/*  4889 */                     /* --- function return or resume suspension --- */
/*  4890 */                     if ($ret && $ret.$isSuspension) {
/*  4891 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4892 */                     }
/*  4893 */                     var $lsubscr389 = $ret;
/*  4894 */                     if (Array1Par === undefined) {
/*  4895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  4896 */                     }
/*  4897 */                     if (IntLoc === undefined) {
/*  4898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4899 */                     }
/*  4900 */                     var $binop390 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  4901 */                     $ret = Sk.abstr.objectSetItem(Array1Par, $binop390, $lsubscr389, true);
/*  4902 */                     $blk = 3; /* allowing case fallthrough */
/*  4903 */                 case 3:
/*  4904 */                     /* --- function return or resume suspension --- */
/*  4905 */                     if ($ret && $ret.$isSuspension) {
/*  4906 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4907 */                     }
/*  4908 */                     //
/*  4909 */                     // line 218:
/*  4910 */                     //     Array1Par[IntLoc+30] = IntLoc
/*  4911 */                     //     ^
/*  4912 */                     //
/*  4913 */                     $currLineNo = 218;
/*  4914 */                     $currColNo = 4;
/*  4915 */ 
/*  4916 */                     if (IntLoc === undefined) {
/*  4917 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4918 */                     }
/*  4919 */                     if (Array1Par === undefined) {
/*  4920 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  4921 */                     }
/*  4922 */                     if (IntLoc === undefined) {
/*  4923 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4924 */                     }
/*  4925 */                     var $binop391 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(30), 'Add');
/*  4926 */                     $ret = Sk.abstr.objectSetItem(Array1Par, $binop391, IntLoc, true);
/*  4927 */                     $blk = 4; /* allowing case fallthrough */
/*  4928 */                 case 4:
/*  4929 */                     /* --- function return or resume suspension --- */
/*  4930 */                     if ($ret && $ret.$isSuspension) {
/*  4931 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4932 */                     }
/*  4933 */                     //
/*  4934 */                     // line 219:
/*  4935 */                     //     for IntIndex in range(IntLoc, IntLoc+2):
/*  4936 */                     //     ^
/*  4937 */                     //
/*  4938 */                     $currLineNo = 219;
/*  4939 */                     $currColNo = 4;
/*  4940 */ 
/*  4941 */                     var $loadgbl392 = Sk.misceval.loadname('range', $gbl);
/*  4942 */                     if (IntLoc === undefined) {
/*  4943 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4944 */                     }
/*  4945 */                     if (IntLoc === undefined) {
/*  4946 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4947 */                     }
/*  4948 */                     var $binop393 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(2), 'Add');
/*  4949 */                     $ret;
/*  4950 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl392, IntLoc, $binop393);
/*  4951 */                     $blk = 8; /* allowing case fallthrough */
/*  4952 */                 case 8:
/*  4953 */                     /* --- function return or resume suspension --- */
/*  4954 */                     if ($ret && $ret.$isSuspension) {
/*  4955 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 219, 20);
/*  4956 */                     }
/*  4957 */                     var $call394 = $ret;
/*  4958 */                     //
/*  4959 */                     // line 219:
/*  4960 */                     //     for IntIndex in range(IntLoc, IntLoc+2):
/*  4961 */                     //                     ^
/*  4962 */                     //
/*  4963 */                     $currLineNo = 219;
/*  4964 */                     $currColNo = 20;
/*  4965 */ 
/*  4966 */                     var $iter395 = Sk.abstr.iter($call394);
/*  4967 */                     $blk = 5; /* allowing case fallthrough */
/*  4968 */                 case 5:
/*  4969 */                     /* --- for start --- */
/*  4970 */                     $ret = Sk.abstr.iternext($iter395, true);
/*  4971 */                     $blk = 9; /* allowing case fallthrough */
/*  4972 */                 case 9:
/*  4973 */                     /* --- function return or resume suspension --- */
/*  4974 */                     if ($ret && $ret.$isSuspension) {
/*  4975 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 219, 4);
/*  4976 */                     }
/*  4977 */                     var $next396 = $ret;
/*  4978 */                     if ($next396 === undefined) {
/*  4979 */                         $blk = 6;
/*  4980 */                         continue;
/*  4981 */                     }
/*  4982 */                     IntIndex = $next396;
/*  4983 */                     //
/*  4984 */                     // line 220:
/*  4985 */                     //         Array2Par[IntLoc][IntIndex] = IntLoc
/*  4986 */                     //         ^
/*  4987 */                     //
/*  4988 */                     $currLineNo = 220;
/*  4989 */                     $currColNo = 8;
/*  4990 */ 
/*  4991 */                     if (IntLoc === undefined) {
/*  4992 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4993 */                     }
/*  4994 */                     if (Array2Par === undefined) {
/*  4995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  4996 */                     }
/*  4997 */                     if (IntLoc === undefined) {
/*  4998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  4999 */                     }
/*  5000 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5001 */                     $blk = 10; /* allowing case fallthrough */
/*  5002 */                 case 10:
/*  5003 */                     /* --- function return or resume suspension --- */
/*  5004 */                     if ($ret && $ret.$isSuspension) {
/*  5005 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5006 */                     }
/*  5007 */                     var $lsubscr397 = $ret;
/*  5008 */                     if (IntIndex === undefined) {
/*  5009 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntIndex\' referenced before assignment');
/*  5010 */                     }
/*  5011 */                     $ret = Sk.abstr.objectSetItem($lsubscr397, IntIndex, IntLoc, true);
/*  5012 */                     $blk = 11; /* allowing case fallthrough */
/*  5013 */                 case 11:
/*  5014 */                     /* --- function return or resume suspension --- */
/*  5015 */                     if ($ret && $ret.$isSuspension) {
/*  5016 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5017 */                     }
/*  5018 */                     $blk = 5; /* jump */
/*  5019 */                     continue;
/*  5020 */                 case 6:
/*  5021 */                     /* --- for cleanup --- */
/*  5022 */                     $blk = 7; /* allowing case fallthrough */
/*  5023 */                 case 7:
/*  5024 */                     /* --- for end --- */
/*  5025 */                     //
/*  5026 */                     // line 221:
/*  5027 */                     //     Array2Par[IntLoc][IntLoc-1] = Array2Par[IntLoc][IntLoc-1] + 1
/*  5028 */                     //     ^
/*  5029 */                     //
/*  5030 */                     $currLineNo = 221;
/*  5031 */                     $currColNo = 4;
/*  5032 */ 
/*  5033 */                     if (Array2Par === undefined) {
/*  5034 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5035 */                     }
/*  5036 */                     if (IntLoc === undefined) {
/*  5037 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5038 */                     }
/*  5039 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5040 */                     $blk = 12; /* allowing case fallthrough */
/*  5041 */                 case 12:
/*  5042 */                     /* --- function return or resume suspension --- */
/*  5043 */                     if ($ret && $ret.$isSuspension) {
/*  5044 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5045 */                     }
/*  5046 */                     var $lsubscr398 = $ret;
/*  5047 */                     if (IntLoc === undefined) {
/*  5048 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5049 */                     }
/*  5050 */                     var $binop399 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  5051 */                     $ret = Sk.abstr.objectGetItem($lsubscr398, $binop399, true);
/*  5052 */                     $blk = 13; /* allowing case fallthrough */
/*  5053 */                 case 13:
/*  5054 */                     /* --- function return or resume suspension --- */
/*  5055 */                     if ($ret && $ret.$isSuspension) {
/*  5056 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5057 */                     }
/*  5058 */                     var $lsubscr400 = $ret;
/*  5059 */                     var $binop401 = Sk.abstr.numberBinOp($lsubscr400, new Sk.builtin.int_(1), 'Add');
/*  5060 */                     if (Array2Par === undefined) {
/*  5061 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5062 */                     }
/*  5063 */                     if (IntLoc === undefined) {
/*  5064 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5065 */                     }
/*  5066 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5067 */                     $blk = 14; /* allowing case fallthrough */
/*  5068 */                 case 14:
/*  5069 */                     /* --- function return or resume suspension --- */
/*  5070 */                     if ($ret && $ret.$isSuspension) {
/*  5071 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5072 */                     }
/*  5073 */                     var $lsubscr402 = $ret;
/*  5074 */                     if (IntLoc === undefined) {
/*  5075 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5076 */                     }
/*  5077 */                     var $binop403 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  5078 */                     $ret = Sk.abstr.objectSetItem($lsubscr402, $binop403, $binop401, true);
/*  5079 */                     $blk = 15; /* allowing case fallthrough */
/*  5080 */                 case 15:
/*  5081 */                     /* --- function return or resume suspension --- */
/*  5082 */                     if ($ret && $ret.$isSuspension) {
/*  5083 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5084 */                     }
/*  5085 */                     //
/*  5086 */                     // line 222:
/*  5087 */                     //     Array2Par[IntLoc+20][IntLoc] = Array1Par[IntLoc]
/*  5088 */                     //     ^
/*  5089 */                     //
/*  5090 */                     $currLineNo = 222;
/*  5091 */                     $currColNo = 4;
/*  5092 */ 
/*  5093 */                     if (Array1Par === undefined) {
/*  5094 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5095 */                     }
/*  5096 */                     if (IntLoc === undefined) {
/*  5097 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5098 */                     }
/*  5099 */                     $ret = Sk.abstr.objectGetItem(Array1Par, IntLoc, true);
/*  5100 */                     $blk = 16; /* allowing case fallthrough */
/*  5101 */                 case 16:
/*  5102 */                     /* --- function return or resume suspension --- */
/*  5103 */                     if ($ret && $ret.$isSuspension) {
/*  5104 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5105 */                     }
/*  5106 */                     var $lsubscr404 = $ret;
/*  5107 */                     if (Array2Par === undefined) {
/*  5108 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5109 */                     }
/*  5110 */                     if (IntLoc === undefined) {
/*  5111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5112 */                     }
/*  5113 */                     var $binop405 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(20), 'Add');
/*  5114 */                     $ret = Sk.abstr.objectGetItem(Array2Par, $binop405, true);
/*  5115 */                     $blk = 17; /* allowing case fallthrough */
/*  5116 */                 case 17:
/*  5117 */                     /* --- function return or resume suspension --- */
/*  5118 */                     if ($ret && $ret.$isSuspension) {
/*  5119 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5120 */                     }
/*  5121 */                     var $lsubscr406 = $ret;
/*  5122 */                     if (IntLoc === undefined) {
/*  5123 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5124 */                     }
/*  5125 */                     $ret = Sk.abstr.objectSetItem($lsubscr406, IntLoc, $lsubscr404, true);
/*  5126 */                     $blk = 18; /* allowing case fallthrough */
/*  5127 */                 case 18:
/*  5128 */                     /* --- function return or resume suspension --- */
/*  5129 */                     if ($ret && $ret.$isSuspension) {
/*  5130 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5131 */                     }
/*  5132 */                     //
/*  5133 */                     // line 223:
/*  5134 */                     //     IntGlob = 5
/*  5135 */                     //     ^
/*  5136 */                     //
/*  5137 */                     $currLineNo = 223;
/*  5138 */                     $currColNo = 4;
/*  5139 */ 
/*  5140 */                     $gbl.IntGlob = new Sk.builtin.int_(5);
/*  5141 */                     return Sk.builtin.none.none$;
/*  5142 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5143 */                 }
/*  5144 */             } catch (err) {
/*  5145 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5146 */                     err = new Sk.builtin.ExternalError(err);
/*  5147 */                 }
/*  5148 */                 err.traceback.push({
/*  5149 */                     lineno: $currLineNo,
/*  5150 */                     colno: $currColNo,
/*  5151 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5152 */                 });
/*  5153 */                 if ($exc.length > 0) {
/*  5154 */                     $err = err;
/*  5155 */                     $blk = $exc.pop();
/*  5156 */                     continue;
/*  5157 */                 } else {
/*  5158 */                     throw err;
/*  5159 */                 }
/*  5160 */             }
/*  5161 */         }
/*  5162 */     });
/*  5163 */     var $scope408 = (function $Func1409$(CharPar1, CharPar2) {
/*  5164 */         var CharLoc1, CharLoc2; /* locals */
/*  5165 */         var CharLoc1, CharLoc1, CharLoc2, CharLoc2, CharPar1, CharPar1, CharPar2, CharPar2, $compareres410;
/*  5166 */         var $wakeFromSuspension = function() {
/*  5167 */             var susp = $scope408.$wakingSuspension;
/*  5168 */             delete $scope408.$wakingSuspension;
/*  5169 */             $blk = susp.$blk;
/*  5170 */             $loc = susp.$loc;
/*  5171 */             $gbl = susp.$gbl;
/*  5172 */             $exc = susp.$exc;
/*  5173 */             $err = susp.$err;
/*  5174 */             $postfinally = susp.$postfinally;
/*  5175 */             $currLineNo = susp.$lineno;
/*  5176 */             $currColNo = susp.$colno;
/*  5177 */             Sk.lastYield = Date.now();
/*  5178 */             CharLoc1 = susp.$tmps.CharLoc1;
/*  5179 */             CharLoc2 = susp.$tmps.CharLoc2;
/*  5180 */             CharPar1 = susp.$tmps.CharPar1;
/*  5181 */             CharPar2 = susp.$tmps.CharPar2;
/*  5182 */             $compareres410 = susp.$tmps.$compareres410;
/*  5183 */             try {
/*  5184 */                 $ret = susp.child.resume();
/*  5185 */             } catch (err) {
/*  5186 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5187 */                     err = new Sk.builtin.ExternalError(err);
/*  5188 */                 }
/*  5189 */                 err.traceback.push({
/*  5190 */                     lineno: $currLineNo,
/*  5191 */                     colno: $currColNo,
/*  5192 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5193 */                 });
/*  5194 */                 if ($exc.length > 0) {
/*  5195 */                     $err = err;
/*  5196 */                     $blk = $exc.pop();
/*  5197 */                 } else {
/*  5198 */                     throw err;
/*  5199 */                 }
/*  5200 */             }
/*  5201 */         };
/*  5202 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5203 */             var susp = new Sk.misceval.Suspension();
/*  5204 */             susp.child = $child;
/*  5205 */             susp.resume = function() {
/*  5206 */                 $scope408.$wakingSuspension = susp;
/*  5207 */                 return $scope408();
/*  5208 */             };
/*  5209 */             susp.data = susp.child.data;
/*  5210 */             susp.$blk = $blk;
/*  5211 */             susp.$loc = $loc;
/*  5212 */             susp.$gbl = $gbl;
/*  5213 */             susp.$exc = $exc;
/*  5214 */             susp.$err = $err;
/*  5215 */             susp.$postfinally = $postfinally;
/*  5216 */             susp.$filename = $filename;
/*  5217 */             susp.$lineno = $lineno;
/*  5218 */             susp.$colno = $colno;
/*  5219 */             susp.optional = susp.child.optional;
/*  5220 */             susp.$tmps = {
/*  5221 */                 "CharLoc1": CharLoc1,
/*  5222 */                 "CharLoc2": CharLoc2,
/*  5223 */                 "CharPar1": CharPar1,
/*  5224 */                 "CharPar2": CharPar2,
/*  5225 */                 "$compareres410": $compareres410
/*  5226 */             };
/*  5227 */             return susp;
/*  5228 */         };
/*  5229 */         var $blk = 0,
/*  5230 */             $exc = [],
/*  5231 */             $loc = {},
/*  5232 */             $gbl = this,
/*  5233 */             $err = undefined,
/*  5234 */             $ret = undefined,
/*  5235 */             $postfinally = undefined,
/*  5236 */             $currLineNo = undefined,
/*  5237 */             $currColNo = undefined;
/*  5238 */         if ($scope408.$wakingSuspension !== undefined) {
/*  5239 */             $wakeFromSuspension();
/*  5240 */         } else {
/*  5241 */             Sk.builtin.pyCheckArgs("Func1", arguments, 2, 2, false, false);
/*  5242 */         }
/*  5243 */         while (true) {
/*  5244 */             try {
/*  5245 */                 switch ($blk) {
/*  5246 */                 case 0:
/*  5247 */                     /* --- codeobj entry --- */
/*  5248 */                     if (CharPar1 === undefined) {
/*  5249 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar1\' referenced before assignment');
/*  5250 */                     }
/*  5251 */                     if (CharPar2 === undefined) {
/*  5252 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar2\' referenced before assignment');
/*  5253 */                     }
/*  5254 */ 
/*  5255 */                     //
/*  5256 */                     // line 226:
/*  5257 */                     //     CharLoc1 = CharPar1
/*  5258 */                     //     ^
/*  5259 */                     //
/*  5260 */                     $currLineNo = 226;
/*  5261 */                     $currColNo = 4;
/*  5262 */ 
/*  5263 */                     if (CharPar1 === undefined) {
/*  5264 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar1\' referenced before assignment');
/*  5265 */                     }
/*  5266 */                     CharLoc1 = CharPar1;
/*  5267 */                     //
/*  5268 */                     // line 227:
/*  5269 */                     //     CharLoc2 = CharLoc1
/*  5270 */                     //     ^
/*  5271 */                     //
/*  5272 */                     $currLineNo = 227;
/*  5273 */                     $currColNo = 4;
/*  5274 */ 
/*  5275 */                     if (CharLoc1 === undefined) {
/*  5276 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc1\' referenced before assignment');
/*  5277 */                     }
/*  5278 */                     CharLoc2 = CharLoc1;
/*  5279 */                     //
/*  5280 */                     // line 228:
/*  5281 */                     //     if CharLoc2 != CharPar2:
/*  5282 */                     //     ^
/*  5283 */                     //
/*  5284 */                     $currLineNo = 228;
/*  5285 */                     $currColNo = 4;
/*  5286 */ 
/*  5287 */                     if (CharLoc2 === undefined) {
/*  5288 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc2\' referenced before assignment');
/*  5289 */                     }
/*  5290 */                     var $compareres410 = null;
/*  5291 */                     if (CharPar2 === undefined) {
/*  5292 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar2\' referenced before assignment');
/*  5293 */                     }
/*  5294 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc2, CharPar2, 'NotEq', true));
/*  5295 */                     $blk = 4; /* allowing case fallthrough */
/*  5296 */                 case 4:
/*  5297 */                     /* --- function return or resume suspension --- */
/*  5298 */                     if ($ret && $ret.$isSuspension) {
/*  5299 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 228, 7);
/*  5300 */                     }
/*  5301 */                     $compareres410 = $ret;
/*  5302 */                     var $jfalse411 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5303 */                     if ($jfalse411) { /*test failed */
/*  5304 */                         $blk = 3;
/*  5305 */                         continue;
/*  5306 */                     }
/*  5307 */                     $blk = 3; /* allowing case fallthrough */
/*  5308 */                 case 3:
/*  5309 */                     /* --- done --- */
/*  5310 */                     var $jfalse412 = ($compareres410 === false || !Sk.misceval.isTrue($compareres410));
/*  5311 */                     if ($jfalse412) { /*test failed */
/*  5312 */                         $blk = 2;
/*  5313 */                         continue;
/*  5314 */                     }
/*  5315 */                     //
/*  5316 */                     // line 229:
/*  5317 */                     //         return Ident1
/*  5318 */                     //         ^
/*  5319 */                     //
/*  5320 */                     $currLineNo = 229;
/*  5321 */                     $currColNo = 8;
/*  5322 */ 
/*  5323 */                     var $loadgbl413 = Sk.misceval.loadname('Ident1', $gbl);
/*  5324 */                     return $loadgbl413;
/*  5325 */                     $blk = 1; /* allowing case fallthrough */
/*  5326 */                 case 1:
/*  5327 */                     /* --- end of if --- */
/*  5328 */                     return Sk.builtin.none.none$;
/*  5329 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5330 */                 case 2:
/*  5331 */                     /* --- next branch of if --- */
/*  5332 */                     //
/*  5333 */                     // line 231:
/*  5334 */                     //         return Ident2
/*  5335 */                     //         ^
/*  5336 */                     //
/*  5337 */                     $currLineNo = 231;
/*  5338 */                     $currColNo = 8;
/*  5339 */ 
/*  5340 */                     var $loadgbl414 = Sk.misceval.loadname('Ident2', $gbl);
/*  5341 */                     return $loadgbl414;
/*  5342 */                     $blk = 1; /* jump */
/*  5343 */                     continue;
/*  5344 */                 }
/*  5345 */             } catch (err) {
/*  5346 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5347 */                     err = new Sk.builtin.ExternalError(err);
/*  5348 */                 }
/*  5349 */                 err.traceback.push({
/*  5350 */                     lineno: $currLineNo,
/*  5351 */                     colno: $currColNo,
/*  5352 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5353 */                 });
/*  5354 */                 if ($exc.length > 0) {
/*  5355 */                     $err = err;
/*  5356 */                     $blk = $exc.pop();
/*  5357 */                     continue;
/*  5358 */                 } else {
/*  5359 */                     throw err;
/*  5360 */                 }
/*  5361 */             }
/*  5362 */         }
/*  5363 */     });
/*  5364 */     var $scope416 = (function $Func2417$(StrParI1, StrParI2) {
/*  5365 */         var CharLoc, IntLoc; /* locals */
/*  5366 */         var CharLoc, CharLoc, CharLoc, CharLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, StrParI1, StrParI1, StrParI1, StrParI2, StrParI2, StrParI2, $compareres418, $loadgbl421, $loadgbl421, $lsubscr422, $binop423, $loadgbl421, $lsubscr422, $binop423, $lsubscr424, $loadgbl421, $lsubscr422, $binop423, $lsubscr424, $call425, $compareres426, $loadgbl427, $compareres432, $str433, $compareres432, $str433, $jfalse434, $boolopsucc435, $jfalse436, $compareres437, $str438, $compareres442, $str443, $compareres447;
/*  5367 */         var $wakeFromSuspension = function() {
/*  5368 */             var susp = $scope416.$wakingSuspension;
/*  5369 */             delete $scope416.$wakingSuspension;
/*  5370 */             $blk = susp.$blk;
/*  5371 */             $loc = susp.$loc;
/*  5372 */             $gbl = susp.$gbl;
/*  5373 */             $exc = susp.$exc;
/*  5374 */             $err = susp.$err;
/*  5375 */             $postfinally = susp.$postfinally;
/*  5376 */             $currLineNo = susp.$lineno;
/*  5377 */             $currColNo = susp.$colno;
/*  5378 */             Sk.lastYield = Date.now();
/*  5379 */             CharLoc = susp.$tmps.CharLoc;
/*  5380 */             IntLoc = susp.$tmps.IntLoc;
/*  5381 */             StrParI1 = susp.$tmps.StrParI1;
/*  5382 */             StrParI2 = susp.$tmps.StrParI2;
/*  5383 */             $compareres418 = susp.$tmps.$compareres418;
/*  5384 */             $loadgbl421 = susp.$tmps.$loadgbl421;
/*  5385 */             $lsubscr422 = susp.$tmps.$lsubscr422;
/*  5386 */             $binop423 = susp.$tmps.$binop423;
/*  5387 */             $lsubscr424 = susp.$tmps.$lsubscr424;
/*  5388 */             $call425 = susp.$tmps.$call425;
/*  5389 */             $compareres426 = susp.$tmps.$compareres426;
/*  5390 */             $loadgbl427 = susp.$tmps.$loadgbl427;
/*  5391 */             $compareres432 = susp.$tmps.$compareres432;
/*  5392 */             $str433 = susp.$tmps.$str433;
/*  5393 */             $jfalse434 = susp.$tmps.$jfalse434;
/*  5394 */             $boolopsucc435 = susp.$tmps.$boolopsucc435;
/*  5395 */             $jfalse436 = susp.$tmps.$jfalse436;
/*  5396 */             $compareres437 = susp.$tmps.$compareres437;
/*  5397 */             $str438 = susp.$tmps.$str438;
/*  5398 */             $compareres442 = susp.$tmps.$compareres442;
/*  5399 */             $str443 = susp.$tmps.$str443;
/*  5400 */             $compareres447 = susp.$tmps.$compareres447;
/*  5401 */             try {
/*  5402 */                 $ret = susp.child.resume();
/*  5403 */             } catch (err) {
/*  5404 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5405 */                     err = new Sk.builtin.ExternalError(err);
/*  5406 */                 }
/*  5407 */                 err.traceback.push({
/*  5408 */                     lineno: $currLineNo,
/*  5409 */                     colno: $currColNo,
/*  5410 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5411 */                 });
/*  5412 */                 if ($exc.length > 0) {
/*  5413 */                     $err = err;
/*  5414 */                     $blk = $exc.pop();
/*  5415 */                 } else {
/*  5416 */                     throw err;
/*  5417 */                 }
/*  5418 */             }
/*  5419 */         };
/*  5420 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5421 */             var susp = new Sk.misceval.Suspension();
/*  5422 */             susp.child = $child;
/*  5423 */             susp.resume = function() {
/*  5424 */                 $scope416.$wakingSuspension = susp;
/*  5425 */                 return $scope416();
/*  5426 */             };
/*  5427 */             susp.data = susp.child.data;
/*  5428 */             susp.$blk = $blk;
/*  5429 */             susp.$loc = $loc;
/*  5430 */             susp.$gbl = $gbl;
/*  5431 */             susp.$exc = $exc;
/*  5432 */             susp.$err = $err;
/*  5433 */             susp.$postfinally = $postfinally;
/*  5434 */             susp.$filename = $filename;
/*  5435 */             susp.$lineno = $lineno;
/*  5436 */             susp.$colno = $colno;
/*  5437 */             susp.optional = susp.child.optional;
/*  5438 */             susp.$tmps = {
/*  5439 */                 "CharLoc": CharLoc,
/*  5440 */                 "IntLoc": IntLoc,
/*  5441 */                 "StrParI1": StrParI1,
/*  5442 */                 "StrParI2": StrParI2,
/*  5443 */                 "$compareres418": $compareres418,
/*  5444 */                 "$loadgbl421": $loadgbl421,
/*  5445 */                 "$lsubscr422": $lsubscr422,
/*  5446 */                 "$binop423": $binop423,
/*  5447 */                 "$lsubscr424": $lsubscr424,
/*  5448 */                 "$call425": $call425,
/*  5449 */                 "$compareres426": $compareres426,
/*  5450 */                 "$loadgbl427": $loadgbl427,
/*  5451 */                 "$compareres432": $compareres432,
/*  5452 */                 "$str433": $str433,
/*  5453 */                 "$jfalse434": $jfalse434,
/*  5454 */                 "$boolopsucc435": $boolopsucc435,
/*  5455 */                 "$jfalse436": $jfalse436,
/*  5456 */                 "$compareres437": $compareres437,
/*  5457 */                 "$str438": $str438,
/*  5458 */                 "$compareres442": $compareres442,
/*  5459 */                 "$str443": $str443,
/*  5460 */                 "$compareres447": $compareres447
/*  5461 */             };
/*  5462 */             return susp;
/*  5463 */         };
/*  5464 */         var $blk = 0,
/*  5465 */             $exc = [],
/*  5466 */             $loc = {},
/*  5467 */             $gbl = this,
/*  5468 */             $err = undefined,
/*  5469 */             $ret = undefined,
/*  5470 */             $postfinally = undefined,
/*  5471 */             $currLineNo = undefined,
/*  5472 */             $currColNo = undefined;
/*  5473 */         if ($scope416.$wakingSuspension !== undefined) {
/*  5474 */             $wakeFromSuspension();
/*  5475 */         } else {
/*  5476 */             Sk.builtin.pyCheckArgs("Func2", arguments, 2, 2, false, false);
/*  5477 */         }
/*  5478 */         while (true) {
/*  5479 */             try {
/*  5480 */                 switch ($blk) {
/*  5481 */                 case 0:
/*  5482 */                     /* --- codeobj entry --- */
/*  5483 */                     if (StrParI1 === undefined) {
/*  5484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  5485 */                     }
/*  5486 */                     if (StrParI2 === undefined) {
/*  5487 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  5488 */                     }
/*  5489 */ 
/*  5490 */                     //
/*  5491 */                     // line 234:
/*  5492 */                     //     IntLoc = 1
/*  5493 */                     //     ^
/*  5494 */                     //
/*  5495 */                     $currLineNo = 234;
/*  5496 */                     $currColNo = 4;
/*  5497 */ 
/*  5498 */                     IntLoc = new Sk.builtin.int_(1);
/*  5499 */                     //
/*  5500 */                     // line 235:
/*  5501 */                     //     while IntLoc <= 1:
/*  5502 */                     //     ^
/*  5503 */                     //
/*  5504 */                     $currLineNo = 235;
/*  5505 */                     $currColNo = 4;
/*  5506 */ 
/*  5507 */                     $blk = 1; /* allowing case fallthrough */
/*  5508 */                 case 1:
/*  5509 */                     /* --- while test --- */
/*  5510 */                     //
/*  5511 */                     // line 235:
/*  5512 */                     //     while IntLoc <= 1:
/*  5513 */                     //     ^
/*  5514 */                     //
/*  5515 */                     $currLineNo = 235;
/*  5516 */                     $currColNo = 4;
/*  5517 */ 
/*  5518 */                     if (IntLoc === undefined) {
/*  5519 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5520 */                     }
/*  5521 */                     var $compareres418 = null;
/*  5522 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(IntLoc, new Sk.builtin.int_(1), 'LtE', true));
/*  5523 */                     $blk = 5; /* allowing case fallthrough */
/*  5524 */                 case 5:
/*  5525 */                     /* --- function return or resume suspension --- */
/*  5526 */                     if ($ret && $ret.$isSuspension) {
/*  5527 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 235, 10);
/*  5528 */                     }
/*  5529 */                     $compareres418 = $ret;
/*  5530 */                     var $jfalse419 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5531 */                     if ($jfalse419) { /*test failed */
/*  5532 */                         $blk = 4;
/*  5533 */                         continue;
/*  5534 */                     }
/*  5535 */                     $blk = 4; /* allowing case fallthrough */
/*  5536 */                 case 4:
/*  5537 */                     /* --- done --- */
/*  5538 */                     var $jfalse420 = ($compareres418 === false || !Sk.misceval.isTrue($compareres418));
/*  5539 */                     if ($jfalse420) { /*test failed */
/*  5540 */                         $blk = 2;
/*  5541 */                         continue;
/*  5542 */                     }
/*  5543 */                     $blk = 3; /* allowing case fallthrough */
/*  5544 */                 case 3:
/*  5545 */                     /* --- while body --- */
/*  5546 */                     //
/*  5547 */                     // line 236:
/*  5548 */                     //         if Func1(StrParI1[IntLoc], StrParI2[IntLoc+1]) == Ident1:
/*  5549 */                     //         ^
/*  5550 */                     //
/*  5551 */                     $currLineNo = 236;
/*  5552 */                     $currColNo = 8;
/*  5553 */ 
/*  5554 */                     var $loadgbl421 = Sk.misceval.loadname('Func1', $gbl);
/*  5555 */                     if (StrParI1 === undefined) {
/*  5556 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  5557 */                     }
/*  5558 */                     if (IntLoc === undefined) {
/*  5559 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5560 */                     }
/*  5561 */                     $ret = Sk.abstr.objectGetItem(StrParI1, IntLoc, true);
/*  5562 */                     $blk = 7; /* allowing case fallthrough */
/*  5563 */                 case 7:
/*  5564 */                     /* --- function return or resume suspension --- */
/*  5565 */                     if ($ret && $ret.$isSuspension) {
/*  5566 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5567 */                     }
/*  5568 */                     var $lsubscr422 = $ret;
/*  5569 */                     if (StrParI2 === undefined) {
/*  5570 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  5571 */                     }
/*  5572 */                     if (IntLoc === undefined) {
/*  5573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5574 */                     }
/*  5575 */                     var $binop423 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  5576 */                     $ret = Sk.abstr.objectGetItem(StrParI2, $binop423, true);
/*  5577 */                     $blk = 8; /* allowing case fallthrough */
/*  5578 */                 case 8:
/*  5579 */                     /* --- function return or resume suspension --- */
/*  5580 */                     if ($ret && $ret.$isSuspension) {
/*  5581 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5582 */                     }
/*  5583 */                     var $lsubscr424 = $ret;
/*  5584 */                     $ret;
/*  5585 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl421, $lsubscr422, $lsubscr424);
/*  5586 */                     $blk = 9; /* allowing case fallthrough */
/*  5587 */                 case 9:
/*  5588 */                     /* --- function return or resume suspension --- */
/*  5589 */                     if ($ret && $ret.$isSuspension) {
/*  5590 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 236, 11);
/*  5591 */                     }
/*  5592 */                     var $call425 = $ret;
/*  5593 */                     //
/*  5594 */                     // line 236:
/*  5595 */                     //         if Func1(StrParI1[IntLoc], StrParI2[IntLoc+1]) == Ident1:
/*  5596 */                     //            ^
/*  5597 */                     //
/*  5598 */                     $currLineNo = 236;
/*  5599 */                     $currColNo = 11;
/*  5600 */ 
/*  5601 */                     var $compareres426 = null;
/*  5602 */                     var $loadgbl427 = Sk.misceval.loadname('Ident1', $gbl);
/*  5603 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call425, $loadgbl427, 'Eq', true));
/*  5604 */                     $blk = 11; /* allowing case fallthrough */
/*  5605 */                 case 11:
/*  5606 */                     /* --- function return or resume suspension --- */
/*  5607 */                     if ($ret && $ret.$isSuspension) {
/*  5608 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 236, 11);
/*  5609 */                     }
/*  5610 */                     $compareres426 = $ret;
/*  5611 */                     var $jfalse428 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5612 */                     if ($jfalse428) { /*test failed */
/*  5613 */                         $blk = 10;
/*  5614 */                         continue;
/*  5615 */                     }
/*  5616 */                     $blk = 10; /* allowing case fallthrough */
/*  5617 */                 case 10:
/*  5618 */                     /* --- done --- */
/*  5619 */                     var $jfalse429 = ($compareres426 === false || !Sk.misceval.isTrue($compareres426));
/*  5620 */                     if ($jfalse429) { /*test failed */
/*  5621 */                         $blk = 6;
/*  5622 */                         continue;
/*  5623 */                     }
/*  5624 */                     //
/*  5625 */                     // line 237:
/*  5626 */                     //             CharLoc = 'A'
/*  5627 */                     //             ^
/*  5628 */                     //
/*  5629 */                     $currLineNo = 237;
/*  5630 */                     $currColNo = 12;
/*  5631 */ 
/*  5632 */                     var $str430 = new Sk.builtins['str']('A');
/*  5633 */                     CharLoc = $str430;
/*  5634 */                     //
/*  5635 */                     // line 238:
/*  5636 */                     //             IntLoc = IntLoc + 1
/*  5637 */                     //             ^
/*  5638 */                     //
/*  5639 */                     $currLineNo = 238;
/*  5640 */                     $currColNo = 12;
/*  5641 */ 
/*  5642 */                     if (IntLoc === undefined) {
/*  5643 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5644 */                     }
/*  5645 */                     var $binop431 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  5646 */                     IntLoc = $binop431;
/*  5647 */                     $blk = 6; /* allowing case fallthrough */
/*  5648 */                 case 6:
/*  5649 */                     /* --- end of if --- */
/*  5650 */                     $blk = 1; /* jump */
/*  5651 */                     continue;
/*  5652 */                 case 2:
/*  5653 */                     /* --- after while --- */
/*  5654 */                     //
/*  5655 */                     // line 239:
/*  5656 */                     //     if CharLoc >= 'W' and CharLoc <= 'Z':
/*  5657 */                     //     ^
/*  5658 */                     //
/*  5659 */                     $currLineNo = 239;
/*  5660 */                     $currColNo = 4;
/*  5661 */ 
/*  5662 */                     if (CharLoc === undefined) {
/*  5663 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  5664 */                     }
/*  5665 */                     var $compareres432 = null;
/*  5666 */                     var $str433 = new Sk.builtins['str']('W');
/*  5667 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str433, 'GtE', true));
/*  5668 */                     $blk = 15; /* allowing case fallthrough */
/*  5669 */                 case 15:
/*  5670 */                     /* --- function return or resume suspension --- */
/*  5671 */                     if ($ret && $ret.$isSuspension) {
/*  5672 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 239, 7);
/*  5673 */                     }
/*  5674 */                     $compareres432 = $ret;
/*  5675 */                     var $jfalse434 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5676 */                     if ($jfalse434) { /*test failed */
/*  5677 */                         $blk = 14;
/*  5678 */                         continue;
/*  5679 */                     }
/*  5680 */                     $blk = 14; /* allowing case fallthrough */
/*  5681 */                 case 14:
/*  5682 */                     /* --- done --- */
/*  5683 */                     var $boolopsucc435 = $compareres432;
/*  5684 */                     $boolopsucc435 = $compareres432;
/*  5685 */                     var $jfalse436 = ($compareres432 === false || !Sk.misceval.isTrue($compareres432));
/*  5686 */                     if ($jfalse436) { /*test failed */
/*  5687 */                         $blk = 13;
/*  5688 */                         continue;
/*  5689 */                     }
/*  5690 */                     if (CharLoc === undefined) {
/*  5691 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  5692 */                     }
/*  5693 */                     var $compareres437 = null;
/*  5694 */                     var $str438 = new Sk.builtins['str']('Z');
/*  5695 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str438, 'LtE', true));
/*  5696 */                     $blk = 17; /* allowing case fallthrough */
/*  5697 */                 case 17:
/*  5698 */                     /* --- function return or resume suspension --- */
/*  5699 */                     if ($ret && $ret.$isSuspension) {
/*  5700 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 239, 26);
/*  5701 */                     }
/*  5702 */                     $compareres437 = $ret;
/*  5703 */                     var $jfalse439 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5704 */                     if ($jfalse439) { /*test failed */
/*  5705 */                         $blk = 16;
/*  5706 */                         continue;
/*  5707 */                     }
/*  5708 */                     $blk = 16; /* allowing case fallthrough */
/*  5709 */                 case 16:
/*  5710 */                     /* --- done --- */
/*  5711 */                     $boolopsucc435 = $compareres437;
/*  5712 */                     var $jfalse440 = ($compareres437 === false || !Sk.misceval.isTrue($compareres437));
/*  5713 */                     if ($jfalse440) { /*test failed */
/*  5714 */                         $blk = 13;
/*  5715 */                         continue;
/*  5716 */                     }
/*  5717 */                     $blk = 13; /* allowing case fallthrough */
/*  5718 */                 case 13:
/*  5719 */                     /* --- end of boolop --- */
/*  5720 */                     var $jfalse441 = ($boolopsucc435 === false || !Sk.misceval.isTrue($boolopsucc435));
/*  5721 */                     if ($jfalse441) { /*test failed */
/*  5722 */                         $blk = 12;
/*  5723 */                         continue;
/*  5724 */                     }
/*  5725 */                     //
/*  5726 */                     // line 240:
/*  5727 */                     //         IntLoc = 7
/*  5728 */                     //         ^
/*  5729 */                     //
/*  5730 */                     $currLineNo = 240;
/*  5731 */                     $currColNo = 8;
/*  5732 */ 
/*  5733 */                     IntLoc = new Sk.builtin.int_(7);
/*  5734 */                     $blk = 12; /* allowing case fallthrough */
/*  5735 */                 case 12:
/*  5736 */                     /* --- end of if --- */
/*  5737 */                     //
/*  5738 */                     // line 241:
/*  5739 */                     //     if CharLoc == 'X':
/*  5740 */                     //     ^
/*  5741 */                     //
/*  5742 */                     $currLineNo = 241;
/*  5743 */                     $currColNo = 4;
/*  5744 */ 
/*  5745 */                     if (CharLoc === undefined) {
/*  5746 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  5747 */                     }
/*  5748 */                     var $compareres442 = null;
/*  5749 */                     var $str443 = new Sk.builtins['str']('X');
/*  5750 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str443, 'Eq', true));
/*  5751 */                     $blk = 21; /* allowing case fallthrough */
/*  5752 */                 case 21:
/*  5753 */                     /* --- function return or resume suspension --- */
/*  5754 */                     if ($ret && $ret.$isSuspension) {
/*  5755 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 241, 7);
/*  5756 */                     }
/*  5757 */                     $compareres442 = $ret;
/*  5758 */                     var $jfalse444 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5759 */                     if ($jfalse444) { /*test failed */
/*  5760 */                         $blk = 20;
/*  5761 */                         continue;
/*  5762 */                     }
/*  5763 */                     $blk = 20; /* allowing case fallthrough */
/*  5764 */                 case 20:
/*  5765 */                     /* --- done --- */
/*  5766 */                     var $jfalse445 = ($compareres442 === false || !Sk.misceval.isTrue($compareres442));
/*  5767 */                     if ($jfalse445) { /*test failed */
/*  5768 */                         $blk = 19;
/*  5769 */                         continue;
/*  5770 */                     }
/*  5771 */                     //
/*  5772 */                     // line 242:
/*  5773 */                     //         return TRUE
/*  5774 */                     //         ^
/*  5775 */                     //
/*  5776 */                     $currLineNo = 242;
/*  5777 */                     $currColNo = 8;
/*  5778 */ 
/*  5779 */                     var $loadgbl446 = Sk.misceval.loadname('TRUE', $gbl);
/*  5780 */                     return $loadgbl446;
/*  5781 */                     $blk = 18; /* allowing case fallthrough */
/*  5782 */                 case 18:
/*  5783 */                     /* --- end of if --- */
/*  5784 */                     return Sk.builtin.none.none$;
/*  5785 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5786 */                 case 19:
/*  5787 */                     /* --- next branch of if --- */
/*  5788 */                     //
/*  5789 */                     // line 244:
/*  5790 */                     //         if StrParI1 > StrParI2:
/*  5791 */                     //         ^
/*  5792 */                     //
/*  5793 */                     $currLineNo = 244;
/*  5794 */                     $currColNo = 8;
/*  5795 */ 
/*  5796 */                     if (StrParI1 === undefined) {
/*  5797 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  5798 */                     }
/*  5799 */                     var $compareres447 = null;
/*  5800 */                     if (StrParI2 === undefined) {
/*  5801 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  5802 */                     }
/*  5803 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(StrParI1, StrParI2, 'Gt', true));
/*  5804 */                     $blk = 25; /* allowing case fallthrough */
/*  5805 */                 case 25:
/*  5806 */                     /* --- function return or resume suspension --- */
/*  5807 */                     if ($ret && $ret.$isSuspension) {
/*  5808 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 244, 11);
/*  5809 */                     }
/*  5810 */                     $compareres447 = $ret;
/*  5811 */                     var $jfalse448 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5812 */                     if ($jfalse448) { /*test failed */
/*  5813 */                         $blk = 24;
/*  5814 */                         continue;
/*  5815 */                     }
/*  5816 */                     $blk = 24; /* allowing case fallthrough */
/*  5817 */                 case 24:
/*  5818 */                     /* --- done --- */
/*  5819 */                     var $jfalse449 = ($compareres447 === false || !Sk.misceval.isTrue($compareres447));
/*  5820 */                     if ($jfalse449) { /*test failed */
/*  5821 */                         $blk = 23;
/*  5822 */                         continue;
/*  5823 */                     }
/*  5824 */                     //
/*  5825 */                     // line 245:
/*  5826 */                     //             IntLoc = IntLoc + 7
/*  5827 */                     //             ^
/*  5828 */                     //
/*  5829 */                     $currLineNo = 245;
/*  5830 */                     $currColNo = 12;
/*  5831 */ 
/*  5832 */                     if (IntLoc === undefined) {
/*  5833 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5834 */                     }
/*  5835 */                     var $binop450 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(7), 'Add');
/*  5836 */                     IntLoc = $binop450;
/*  5837 */                     //
/*  5838 */                     // line 246:
/*  5839 */                     //             return TRUE
/*  5840 */                     //             ^
/*  5841 */                     //
/*  5842 */                     $currLineNo = 246;
/*  5843 */                     $currColNo = 12;
/*  5844 */ 
/*  5845 */                     var $loadgbl451 = Sk.misceval.loadname('TRUE', $gbl);
/*  5846 */                     return $loadgbl451;
/*  5847 */                     $blk = 22; /* allowing case fallthrough */
/*  5848 */                 case 22:
/*  5849 */                     /* --- end of if --- */
/*  5850 */                     $blk = 18; /* jump */
/*  5851 */                     continue;
/*  5852 */                 case 23:
/*  5853 */                     /* --- next branch of if --- */
/*  5854 */                     //
/*  5855 */                     // line 248:
/*  5856 */                     //             return FALSE
/*  5857 */                     //             ^
/*  5858 */                     //
/*  5859 */                     $currLineNo = 248;
/*  5860 */                     $currColNo = 12;
/*  5861 */ 
/*  5862 */                     var $loadgbl452 = Sk.misceval.loadname('FALSE', $gbl);
/*  5863 */                     return $loadgbl452;
/*  5864 */                     $blk = 22; /* jump */
/*  5865 */                     continue;
/*  5866 */                 }
/*  5867 */             } catch (err) {
/*  5868 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5869 */                     err = new Sk.builtin.ExternalError(err);
/*  5870 */                 }
/*  5871 */                 err.traceback.push({
/*  5872 */                     lineno: $currLineNo,
/*  5873 */                     colno: $currColNo,
/*  5874 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5875 */                 });
/*  5876 */                 if ($exc.length > 0) {
/*  5877 */                     $err = err;
/*  5878 */                     $blk = $exc.pop();
/*  5879 */                     continue;
/*  5880 */                 } else {
/*  5881 */                     throw err;
/*  5882 */                 }
/*  5883 */             }
/*  5884 */         }
/*  5885 */     });
/*  5886 */     var $scope454 = (function $Func3455$(EnumParIn) {
/*  5887 */         var EnumLoc; /* locals */
/*  5888 */         var EnumLoc, EnumLoc, EnumParIn, EnumParIn, $compareres456, $loadgbl457;
/*  5889 */         var $wakeFromSuspension = function() {
/*  5890 */             var susp = $scope454.$wakingSuspension;
/*  5891 */             delete $scope454.$wakingSuspension;
/*  5892 */             $blk = susp.$blk;
/*  5893 */             $loc = susp.$loc;
/*  5894 */             $gbl = susp.$gbl;
/*  5895 */             $exc = susp.$exc;
/*  5896 */             $err = susp.$err;
/*  5897 */             $postfinally = susp.$postfinally;
/*  5898 */             $currLineNo = susp.$lineno;
/*  5899 */             $currColNo = susp.$colno;
/*  5900 */             Sk.lastYield = Date.now();
/*  5901 */             EnumLoc = susp.$tmps.EnumLoc;
/*  5902 */             EnumParIn = susp.$tmps.EnumParIn;
/*  5903 */             $compareres456 = susp.$tmps.$compareres456;
/*  5904 */             $loadgbl457 = susp.$tmps.$loadgbl457;
/*  5905 */             try {
/*  5906 */                 $ret = susp.child.resume();
/*  5907 */             } catch (err) {
/*  5908 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5909 */                     err = new Sk.builtin.ExternalError(err);
/*  5910 */                 }
/*  5911 */                 err.traceback.push({
/*  5912 */                     lineno: $currLineNo,
/*  5913 */                     colno: $currColNo,
/*  5914 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5915 */                 });
/*  5916 */                 if ($exc.length > 0) {
/*  5917 */                     $err = err;
/*  5918 */                     $blk = $exc.pop();
/*  5919 */                 } else {
/*  5920 */                     throw err;
/*  5921 */                 }
/*  5922 */             }
/*  5923 */         };
/*  5924 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5925 */             var susp = new Sk.misceval.Suspension();
/*  5926 */             susp.child = $child;
/*  5927 */             susp.resume = function() {
/*  5928 */                 $scope454.$wakingSuspension = susp;
/*  5929 */                 return $scope454();
/*  5930 */             };
/*  5931 */             susp.data = susp.child.data;
/*  5932 */             susp.$blk = $blk;
/*  5933 */             susp.$loc = $loc;
/*  5934 */             susp.$gbl = $gbl;
/*  5935 */             susp.$exc = $exc;
/*  5936 */             susp.$err = $err;
/*  5937 */             susp.$postfinally = $postfinally;
/*  5938 */             susp.$filename = $filename;
/*  5939 */             susp.$lineno = $lineno;
/*  5940 */             susp.$colno = $colno;
/*  5941 */             susp.optional = susp.child.optional;
/*  5942 */             susp.$tmps = {
/*  5943 */                 "EnumLoc": EnumLoc,
/*  5944 */                 "EnumParIn": EnumParIn,
/*  5945 */                 "$compareres456": $compareres456,
/*  5946 */                 "$loadgbl457": $loadgbl457
/*  5947 */             };
/*  5948 */             return susp;
/*  5949 */         };
/*  5950 */         var $blk = 0,
/*  5951 */             $exc = [],
/*  5952 */             $loc = {},
/*  5953 */             $gbl = this,
/*  5954 */             $err = undefined,
/*  5955 */             $ret = undefined,
/*  5956 */             $postfinally = undefined,
/*  5957 */             $currLineNo = undefined,
/*  5958 */             $currColNo = undefined;
/*  5959 */         if ($scope454.$wakingSuspension !== undefined) {
/*  5960 */             $wakeFromSuspension();
/*  5961 */         } else {
/*  5962 */             Sk.builtin.pyCheckArgs("Func3", arguments, 1, 1, false, false);
/*  5963 */         }
/*  5964 */         while (true) {
/*  5965 */             try {
/*  5966 */                 switch ($blk) {
/*  5967 */                 case 0:
/*  5968 */                     /* --- codeobj entry --- */
/*  5969 */                     if (EnumParIn === undefined) {
/*  5970 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  5971 */                     }
/*  5972 */ 
/*  5973 */                     //
/*  5974 */                     // line 251:
/*  5975 */                     //     EnumLoc = EnumParIn
/*  5976 */                     //     ^
/*  5977 */                     //
/*  5978 */                     $currLineNo = 251;
/*  5979 */                     $currColNo = 4;
/*  5980 */ 
/*  5981 */                     if (EnumParIn === undefined) {
/*  5982 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  5983 */                     }
/*  5984 */                     EnumLoc = EnumParIn;
/*  5985 */                     //
/*  5986 */                     // line 252:
/*  5987 */                     //     if EnumLoc == Ident3: return TRUE
/*  5988 */                     //     ^
/*  5989 */                     //
/*  5990 */                     $currLineNo = 252;
/*  5991 */                     $currColNo = 4;
/*  5992 */ 
/*  5993 */                     if (EnumLoc === undefined) {
/*  5994 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  5995 */                     }
/*  5996 */                     var $compareres456 = null;
/*  5997 */                     var $loadgbl457 = Sk.misceval.loadname('Ident3', $gbl);
/*  5998 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $loadgbl457, 'Eq', true));
/*  5999 */                     $blk = 3; /* allowing case fallthrough */
/*  6000 */                 case 3:
/*  6001 */                     /* --- function return or resume suspension --- */
/*  6002 */                     if ($ret && $ret.$isSuspension) {
/*  6003 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 252, 7);
/*  6004 */                     }
/*  6005 */                     $compareres456 = $ret;
/*  6006 */                     var $jfalse458 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6007 */                     if ($jfalse458) { /*test failed */
/*  6008 */                         $blk = 2;
/*  6009 */                         continue;
/*  6010 */                     }
/*  6011 */                     $blk = 2; /* allowing case fallthrough */
/*  6012 */                 case 2:
/*  6013 */                     /* --- done --- */
/*  6014 */                     var $jfalse459 = ($compareres456 === false || !Sk.misceval.isTrue($compareres456));
/*  6015 */                     if ($jfalse459) { /*test failed */
/*  6016 */                         $blk = 1;
/*  6017 */                         continue;
/*  6018 */                     }
/*  6019 */                     //
/*  6020 */                     // line 252:
/*  6021 */                     //     if EnumLoc == Ident3: return TRUE
/*  6022 */                     //                           ^
/*  6023 */                     //
/*  6024 */                     $currLineNo = 252;
/*  6025 */                     $currColNo = 26;
/*  6026 */ 
/*  6027 */                     var $loadgbl460 = Sk.misceval.loadname('TRUE', $gbl);
/*  6028 */                     return $loadgbl460;
/*  6029 */                     $blk = 1; /* allowing case fallthrough */
/*  6030 */                 case 1:
/*  6031 */                     /* --- end of if --- */
/*  6032 */                     //
/*  6033 */                     // line 253:
/*  6034 */                     //     return FALSE
/*  6035 */                     //     ^
/*  6036 */                     //
/*  6037 */                     $currLineNo = 253;
/*  6038 */                     $currColNo = 4;
/*  6039 */ 
/*  6040 */                     var $loadgbl461 = Sk.misceval.loadname('FALSE', $gbl);
/*  6041 */                     return $loadgbl461;
/*  6042 */                     return Sk.builtin.none.none$;
/*  6043 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6044 */                 }
/*  6045 */             } catch (err) {
/*  6046 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6047 */                     err = new Sk.builtin.ExternalError(err);
/*  6048 */                 }
/*  6049 */                 err.traceback.push({
/*  6050 */                     lineno: $currLineNo,
/*  6051 */                     colno: $currColNo,
/*  6052 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  6053 */                 });
/*  6054 */                 if ($exc.length > 0) {
/*  6055 */                     $err = err;
/*  6056 */                     $blk = $exc.pop();
/*  6057 */                     continue;
/*  6058 */                 } else {
/*  6059 */                     throw err;
/*  6060 */                 }
/*  6061 */             }
/*  6062 */         }
/*  6063 */     });
/*  6064 */     return $scope120;
/*  6065 */ }();
