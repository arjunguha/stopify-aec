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
/*    96 */         if (typeof Sk.execStart === 'undefined') {
/*    97 */             Sk.execStart = Date.now()
/*    98 */         }
/*    99 */         if (typeof Sk.lastYield === 'undefined') {
/*   100 */             Sk.lastYield = Date.now()
/*   101 */         }
/*   102 */         if ($scope120.$wakingSuspension !== undefined) {
/*   103 */             $wakeFromSuspension();
/*   104 */         }
/*   105 */         if (Sk.retainGlobals) {
/*   106 */             if (Sk.globals) {
/*   107 */                 $gbl = Sk.globals;
/*   108 */                 Sk.globals = $gbl;
/*   109 */                 $loc = $gbl;
/*   110 */             } else {
/*   111 */                 Sk.globals = $gbl;
/*   112 */             }
/*   113 */         } else {
/*   114 */             Sk.globals = $gbl;
/*   115 */         }
/*   116 */         while (true) {
/*   117 */             try {
/*   118 */                 var $dateNow = Date.now();
/*   119 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   120 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   121 */                 }
/*   122 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   123 */                     var $susp = $saveSuspension({
/*   124 */                         data: {
/*   125 */                             type: 'Sk.yield'
/*   126 */                         },
/*   127 */                         resume: function() {}
/*   128 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*   129 */                     $susp.$blk = $blk;
/*   130 */                     $susp.optional = true;
/*   131 */                     return $susp;
/*   132 */                 }
/*   133 */                 switch ($blk) {
/*   134 */                 case 0:
/*   135 */                     /* --- module entry --- */
/*   136 */                     //
/*   137 */                     // line 3:
/*   138 */                     // """
/*   139 */                     // ^
/*   140 */                     //
/*   141 */                     $currLineNo = 3;
/*   142 */                     $currColNo = 0;
/*   143 */ 
/*   144 */                     var $str121 = new Sk.builtins['str']('\n"PYSTONE" Benchmark Program\n\nVersion:        Python/1.1 (corresponds to C/1.1 plus 2 Pystone fixes)\n\nAuthor:         Reinhold P. Weicker,  CACM Vol 27, No 10, 10/84 pg. 1013.\n\n                Translated from ADA to C by Rick Richardson.\n                Every method to preserve ADA-likeness has been used,\n                at the expense of C-ness.\n\n                Translated from C to Python by Guido van Rossum.\n\nVersion History:\n\n                Version 1.1 corrects two bugs in version 1.0:\n\n                First, it leaked memory: in Proc1(), NextRecord ends\n                up having a pointer to itself.  I have corrected this\n                by zapping NextRecord.PtrComp at the end of Proc1().\n\n                Second, Proc3() used the operator != to compare a\n                record to None.  This is rather inefficient and not\n                true to the intention of the original benchmark (where\n                a pointer comparison to None is intended; the !=\n                operator attempts to find a method __cmp__ to do value\n                comparison of the record).  Version 1.1 runs 5-10\n                percent faster than version 1.0, so benchmark figures\n                of different versions can\'t be compared directly.\n\n');
/*   145 */                     //
/*   146 */                     // line 35:
/*   147 */                     // LOOPS = 50000
/*   148 */                     // ^
/*   149 */                     //
/*   150 */                     $currLineNo = 35;
/*   151 */                     $currColNo = 0;
/*   152 */ 
/*   153 */                     $loc.LOOPS = new Sk.builtin.int_(50000);
/*   154 */                     //
/*   155 */                     // line 37:
/*   156 */                     // from time import time
/*   157 */                     // ^
/*   158 */                     //
/*   159 */                     $currLineNo = 37;
/*   160 */                     $currColNo = 0;
/*   161 */ 
/*   162 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, ['time']);
/*   163 */                     $blk = 1; /* allowing case fallthrough */
/*   164 */                 case 1:
/*   165 */                     /* --- function return or resume suspension --- */
/*   166 */                     if ($ret && $ret.$isSuspension) {
/*   167 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 37, 0);
/*   168 */                     }
/*   169 */                     var $module122 = $ret;
/*   170 */                     var $item123 = Sk.abstr.gattr($module122, 'time');
/*   171 */                     $loc.time = $item123;
/*   172 */                     //
/*   173 */                     // line 39:
/*   174 */                     // __version__ = "1.1"
/*   175 */                     // ^
/*   176 */                     //
/*   177 */                     $currLineNo = 39;
/*   178 */                     $currColNo = 0;
/*   179 */ 
/*   180 */                     var $str124 = new Sk.builtins['str']('1.1');
/*   181 */                     $loc.__version__ = $str124;
/*   182 */                     //
/*   183 */                     // line 41:
/*   184 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   185 */                     // ^
/*   186 */                     //
/*   187 */                     $currLineNo = 41;
/*   188 */                     $currColNo = 0;
/*   189 */ 
/*   190 */                     var $loadname125 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   191 */                     var $loadname126 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   192 */                     $ret;
/*   193 */                     $ret = Sk.misceval.callsimOrSuspend($loadname126, new Sk.builtin.int_(1), new Sk.builtin.int_(6));
/*   194 */                     $blk = 2; /* allowing case fallthrough */
/*   195 */                 case 2:
/*   196 */                     /* --- function return or resume suspension --- */
/*   197 */                     if ($ret && $ret.$isSuspension) {
/*   198 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 41, 48);
/*   199 */                     }
/*   200 */                     var $call127 = $ret;
/*   201 */                     //
/*   202 */                     // line 41:
/*   203 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   204 */                     //                                                 ^
/*   205 */                     //
/*   206 */                     $currLineNo = 41;
/*   207 */                     $currColNo = 48;
/*   208 */ 
/*   209 */                     $ret;
/*   210 */                     $ret = Sk.misceval.callsimOrSuspend($loadname125, $call127);
/*   211 */                     $blk = 3; /* allowing case fallthrough */
/*   212 */                 case 3:
/*   213 */                     /* --- function return or resume suspension --- */
/*   214 */                     if ($ret && $ret.$isSuspension) {
/*   215 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 41, 43);
/*   216 */                     }
/*   217 */                     var $call128 = $ret;
/*   218 */                     //
/*   219 */                     // line 41:
/*   220 */                     // [Ident1, Ident2, Ident3, Ident4, Ident5] = list(range(1, 6))
/*   221 */                     //                                            ^
/*   222 */                     //
/*   223 */                     $currLineNo = 41;
/*   224 */                     $currColNo = 43;
/*   225 */ 
/*   226 */                     var $items129 = Sk.abstr.sequenceUnpack($call128, 5);
/*   227 */                     $loc.Ident1 = $items129[0];
/*   228 */                     $loc.Ident2 = $items129[1];
/*   229 */                     $loc.Ident3 = $items129[2];
/*   230 */                     $loc.Ident4 = $items129[3];
/*   231 */                     $loc.Ident5 = $items129[4];
/*   232 */                     //
/*   233 */                     // line 43:
/*   234 */                     // class Record:
/*   235 */                     // ^
/*   236 */                     //
/*   237 */                     $currLineNo = 43;
/*   238 */                     $currColNo = 0;
/*   239 */ 
/*   240 */                     $scope130.co_name = new Sk.builtins['str']('Record');
/*   241 */                     var $built144 = Sk.misceval.buildClass($gbl, $scope130, 'Record', []);
/*   242 */                     $loc.Record = $built144;
/*   243 */                     //
/*   244 */                     // line 57:
/*   245 */                     // TRUE = 1
/*   246 */                     // ^
/*   247 */                     //
/*   248 */                     $currLineNo = 57;
/*   249 */                     $currColNo = 0;
/*   250 */ 
/*   251 */                     $loc.TRUE = new Sk.builtin.int_(1);
/*   252 */                     //
/*   253 */                     // line 58:
/*   254 */                     // FALSE = 0
/*   255 */                     // ^
/*   256 */                     //
/*   257 */                     $currLineNo = 58;
/*   258 */                     $currColNo = 0;
/*   259 */ 
/*   260 */                     $loc.FALSE = new Sk.builtin.int_(0);
/*   261 */                     //
/*   262 */                     // line 60:
/*   263 */                     // def main(loops=LOOPS):
/*   264 */                     // ^
/*   265 */                     //
/*   266 */                     $currLineNo = 60;
/*   267 */                     $currColNo = 0;
/*   268 */ 
/*   269 */                     var $loadname145 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   270 */                     $scope146.co_name = new Sk.builtins['str']('main');
/*   271 */                     $scope146.$defaults = [$loadname145];
/*   272 */                     $scope146.co_varnames = ['loops'];
/*   273 */                     var $funcobj151 = new Sk.builtins['function']($scope146, $gbl);
/*   274 */                     $loc.main = $funcobj151;
/*   275 */                     //
/*   276 */                     // line 67:
/*   277 */                     // def pystones(loops=LOOPS):
/*   278 */                     // ^
/*   279 */                     //
/*   280 */                     $currLineNo = 67;
/*   281 */                     $currColNo = 0;
/*   282 */ 
/*   283 */                     var $loadname152 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   284 */                     $scope153.co_name = new Sk.builtins['str']('pystones');
/*   285 */                     $scope153.$defaults = [$loadname152];
/*   286 */                     $scope153.co_varnames = ['loops'];
/*   287 */                     var $funcobj157 = new Sk.builtins['function']($scope153, $gbl);
/*   288 */                     $loc.pystones = $funcobj157;
/*   289 */                     //
/*   290 */                     // line 70:
/*   291 */                     // IntGlob = 0
/*   292 */                     // ^
/*   293 */                     //
/*   294 */                     $currLineNo = 70;
/*   295 */                     $currColNo = 0;
/*   296 */ 
/*   297 */                     $gbl.IntGlob = new Sk.builtin.int_(0);
/*   298 */                     //
/*   299 */                     // line 71:
/*   300 */                     // BoolGlob = FALSE
/*   301 */                     // ^
/*   302 */                     //
/*   303 */                     $currLineNo = 71;
/*   304 */                     $currColNo = 0;
/*   305 */ 
/*   306 */                     var $loadname158 = $loc.FALSE !== undefined ? $loc.FALSE : Sk.misceval.loadname('FALSE', $gbl);;
/*   307 */                     $gbl.BoolGlob = $loadname158;
/*   308 */                     //
/*   309 */                     // line 72:
/*   310 */                     // Char1Glob = '\0'
/*   311 */                     // ^
/*   312 */                     //
/*   313 */                     $currLineNo = 72;
/*   314 */                     $currColNo = 0;
/*   315 */ 
/*   316 */                     var $str159 = new Sk.builtins['str']('\x00');
/*   317 */                     $gbl.Char1Glob = $str159;
/*   318 */                     //
/*   319 */                     // line 73:
/*   320 */                     // Char2Glob = '\0'
/*   321 */                     // ^
/*   322 */                     //
/*   323 */                     $currLineNo = 73;
/*   324 */                     $currColNo = 0;
/*   325 */ 
/*   326 */                     var $str160 = new Sk.builtins['str']('\x00');
/*   327 */                     $gbl.Char2Glob = $str160;
/*   328 */                     //
/*   329 */                     // line 74:
/*   330 */                     // Array1Glob = [0]*51
/*   331 */                     // ^
/*   332 */                     //
/*   333 */                     $currLineNo = 74;
/*   334 */                     $currColNo = 0;
/*   335 */ 
/*   336 */                     var $elem161 = new Sk.builtin.int_(0);
/*   337 */                     var $loadlist162 = new Sk.builtins['list']([$elem161]);
/*   338 */                     var $binop163 = Sk.abstr.numberBinOp($loadlist162, new Sk.builtin.int_(51), 'Mult');
/*   339 */                     $gbl.Array1Glob = $binop163;
/*   340 */                     //
/*   341 */                     // line 75:
/*   342 */                     // Array2Glob = [x[:] for x in [Array1Glob]*51]
/*   343 */                     // ^
/*   344 */                     //
/*   345 */                     $currLineNo = 75;
/*   346 */                     $currColNo = 0;
/*   347 */ 
/*   348 */                     var $_compr164 = new Sk.builtins['list']([]);
/*   349 */                     var $loadgbl165 = Sk.misceval.loadname('Array1Glob', $gbl);
/*   350 */                     var $elem166 = $loadgbl165;
/*   351 */                     var $loadlist167 = new Sk.builtins['list']([$elem166]);
/*   352 */                     var $binop168 = Sk.abstr.numberBinOp($loadlist167, new Sk.builtin.int_(51), 'Mult');
/*   353 */                     var $iter169 = Sk.abstr.iter($binop168);
/*   354 */                     $blk = 4; /* allowing case fallthrough */
/*   355 */                 case 4:
/*   356 */                     /* --- list comp start --- */
/*   357 */                     $ret = Sk.abstr.iternext($iter169, true);
/*   358 */                     $blk = 7; /* allowing case fallthrough */
/*   359 */                 case 7:
/*   360 */                     /* --- function return or resume suspension --- */
/*   361 */                     if ($ret && $ret.$isSuspension) {
/*   362 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 75, 14);
/*   363 */                     }
/*   364 */                     var $next170 = $ret;
/*   365 */                     if ($next170 === undefined) {
/*   366 */                         $blk = 6;
/*   367 */                         continue;
/*   368 */                     }
/*   369 */                     $loc.x = $next170;
/*   370 */                     var $loadname171 = $loc.x !== undefined ? $loc.x : Sk.misceval.loadname('x', $gbl);;
/*   371 */                     var $slice172 = new Sk.builtins['slice'](new Sk.builtin.int_(0), new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   372 */                     $ret = Sk.abstr.objectGetItem($loadname171, $slice172, true);
/*   373 */                     $blk = 8; /* allowing case fallthrough */
/*   374 */                 case 8:
/*   375 */                     /* --- function return or resume suspension --- */
/*   376 */                     if ($ret && $ret.$isSuspension) {
/*   377 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*   378 */                     }
/*   379 */                     var $lsubscr173 = $ret;
/*   380 */                     $_compr164.v.push($lsubscr173);
/*   381 */                     $blk = 5; /* allowing case fallthrough */
/*   382 */                 case 5:
/*   383 */                     /* --- list comp skip --- */
/*   384 */                     $blk = 4; /* jump */
/*   385 */                     continue;
/*   386 */                 case 6:
/*   387 */                     /* --- list comp anchor --- */
/*   388 */                     $gbl.Array2Glob = $_compr164;
/*   389 */                     //
/*   390 */                     // line 76:
/*   391 */                     // PtrGlb = None
/*   392 */                     // ^
/*   393 */                     //
/*   394 */                     $currLineNo = 76;
/*   395 */                     $currColNo = 0;
/*   396 */ 
/*   397 */                     $gbl.PtrGlb = Sk.builtin.none.none$;
/*   398 */                     //
/*   399 */                     // line 77:
/*   400 */                     // PtrGlbNext = None
/*   401 */                     // ^
/*   402 */                     //
/*   403 */                     $currLineNo = 77;
/*   404 */                     $currColNo = 0;
/*   405 */ 
/*   406 */                     $gbl.PtrGlbNext = Sk.builtin.none.none$;
/*   407 */                     //
/*   408 */                     // line 79:
/*   409 */                     // def Proc0(loops=LOOPS):
/*   410 */                     // ^
/*   411 */                     //
/*   412 */                     $currLineNo = 79;
/*   413 */                     $currColNo = 0;
/*   414 */ 
/*   415 */                     var $loadname174 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   416 */                     $scope175.co_name = new Sk.builtins['str']('Proc0');
/*   417 */                     $scope175.$defaults = [$loadname174];
/*   418 */                     $scope175.co_varnames = ['loops'];
/*   419 */                     var $funcobj269 = new Sk.builtins['function']($scope175, $gbl);
/*   420 */                     $loc.Proc0 = $funcobj269;
/*   421 */                     //
/*   422 */                     // line 137:
/*   423 */                     // def Proc1(PtrParIn):
/*   424 */                     // ^
/*   425 */                     //
/*   426 */                     $currLineNo = 137;
/*   427 */                     $currColNo = 0;
/*   428 */ 
/*   429 */                     $scope270.co_name = new Sk.builtins['str']('Proc1');
/*   430 */                     $scope270.co_varnames = ['PtrParIn'];
/*   431 */                     var $funcobj295 = new Sk.builtins['function']($scope270, $gbl);
/*   432 */                     $loc.Proc1 = $funcobj295;
/*   433 */                     //
/*   434 */                     // line 153:
/*   435 */                     // def Proc2(IntParIO):
/*   436 */                     // ^
/*   437 */                     //
/*   438 */                     $currLineNo = 153;
/*   439 */                     $currColNo = 0;
/*   440 */ 
/*   441 */                     $scope296.co_name = new Sk.builtins['str']('Proc2');
/*   442 */                     $scope296.co_varnames = ['IntParIO'];
/*   443 */                     var $funcobj313 = new Sk.builtins['function']($scope296, $gbl);
/*   444 */                     $loc.Proc2 = $funcobj313;
/*   445 */                     //
/*   446 */                     // line 164:
/*   447 */                     // def Proc3(PtrParOut):
/*   448 */                     // ^
/*   449 */                     //
/*   450 */                     $currLineNo = 164;
/*   451 */                     $currColNo = 0;
/*   452 */ 
/*   453 */                     $scope314.co_name = new Sk.builtins['str']('Proc3');
/*   454 */                     $scope314.co_varnames = ['PtrParOut'];
/*   455 */                     var $funcobj326 = new Sk.builtins['function']($scope314, $gbl);
/*   456 */                     $loc.Proc3 = $funcobj326;
/*   457 */                     //
/*   458 */                     // line 174:
/*   459 */                     // def Proc4():
/*   460 */                     // ^
/*   461 */                     //
/*   462 */                     $currLineNo = 174;
/*   463 */                     $currColNo = 0;
/*   464 */ 
/*   465 */                     $scope327.co_name = new Sk.builtins['str']('Proc4');
/*   466 */                     var $funcobj338 = new Sk.builtins['function']($scope327, $gbl);
/*   467 */                     $loc.Proc4 = $funcobj338;
/*   468 */                     //
/*   469 */                     // line 181:
/*   470 */                     // def Proc5():
/*   471 */                     // ^
/*   472 */                     //
/*   473 */                     $currLineNo = 181;
/*   474 */                     $currColNo = 0;
/*   475 */ 
/*   476 */                     $scope339.co_name = new Sk.builtins['str']('Proc5');
/*   477 */                     var $funcobj343 = new Sk.builtins['function']($scope339, $gbl);
/*   478 */                     $loc.Proc5 = $funcobj343;
/*   479 */                     //
/*   480 */                     // line 188:
/*   481 */                     // def Proc6(EnumParIn):
/*   482 */                     // ^
/*   483 */                     //
/*   484 */                     $currLineNo = 188;
/*   485 */                     $currColNo = 0;
/*   486 */ 
/*   487 */                     $scope344.co_name = new Sk.builtins['str']('Proc6');
/*   488 */                     $scope344.co_varnames = ['EnumParIn'];
/*   489 */                     var $funcobj380 = new Sk.builtins['function']($scope344, $gbl);
/*   490 */                     $loc.Proc6 = $funcobj380;
/*   491 */                     //
/*   492 */                     // line 207:
/*   493 */                     // def Proc7(IntParI1, IntParI2):
/*   494 */                     // ^
/*   495 */                     //
/*   496 */                     $currLineNo = 207;
/*   497 */                     $currColNo = 0;
/*   498 */ 
/*   499 */                     $scope381.co_name = new Sk.builtins['str']('Proc7');
/*   500 */                     $scope381.co_varnames = ['IntParI1', 'IntParI2'];
/*   501 */                     var $funcobj385 = new Sk.builtins['function']($scope381, $gbl);
/*   502 */                     $loc.Proc7 = $funcobj385;
/*   503 */                     //
/*   504 */                     // line 212:
/*   505 */                     // def Proc8(Array1Par, Array2Par, IntParI1, IntParI2):
/*   506 */                     // ^
/*   507 */                     //
/*   508 */                     $currLineNo = 212;
/*   509 */                     $currColNo = 0;
/*   510 */ 
/*   511 */                     $scope386.co_name = new Sk.builtins['str']('Proc8');
/*   512 */                     $scope386.co_varnames = ['Array1Par', 'Array2Par', 'IntParI1', 'IntParI2'];
/*   513 */                     var $funcobj407 = new Sk.builtins['function']($scope386, $gbl);
/*   514 */                     $loc.Proc8 = $funcobj407;
/*   515 */                     //
/*   516 */                     // line 225:
/*   517 */                     // def Func1(CharPar1, CharPar2):
/*   518 */                     // ^
/*   519 */                     //
/*   520 */                     $currLineNo = 225;
/*   521 */                     $currColNo = 0;
/*   522 */ 
/*   523 */                     $scope408.co_name = new Sk.builtins['str']('Func1');
/*   524 */                     $scope408.co_varnames = ['CharPar1', 'CharPar2'];
/*   525 */                     var $funcobj415 = new Sk.builtins['function']($scope408, $gbl);
/*   526 */                     $loc.Func1 = $funcobj415;
/*   527 */                     //
/*   528 */                     // line 233:
/*   529 */                     // def Func2(StrParI1, StrParI2):
/*   530 */                     // ^
/*   531 */                     //
/*   532 */                     $currLineNo = 233;
/*   533 */                     $currColNo = 0;
/*   534 */ 
/*   535 */                     $scope416.co_name = new Sk.builtins['str']('Func2');
/*   536 */                     $scope416.co_varnames = ['StrParI1', 'StrParI2'];
/*   537 */                     var $funcobj453 = new Sk.builtins['function']($scope416, $gbl);
/*   538 */                     $loc.Func2 = $funcobj453;
/*   539 */                     //
/*   540 */                     // line 250:
/*   541 */                     // def Func3(EnumParIn):
/*   542 */                     // ^
/*   543 */                     //
/*   544 */                     $currLineNo = 250;
/*   545 */                     $currColNo = 0;
/*   546 */ 
/*   547 */                     $scope454.co_name = new Sk.builtins['str']('Func3');
/*   548 */                     $scope454.co_varnames = ['EnumParIn'];
/*   549 */                     var $funcobj462 = new Sk.builtins['function']($scope454, $gbl);
/*   550 */                     $loc.Func3 = $funcobj462;
/*   551 */                     //
/*   552 */                     // line 255:
/*   553 */                     // main(LOOPS)
/*   554 */                     // ^
/*   555 */                     //
/*   556 */                     $currLineNo = 255;
/*   557 */                     $currColNo = 0;
/*   558 */ 
/*   559 */                     var $loadname463 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   560 */                     var $loadname464 = $loc.LOOPS !== undefined ? $loc.LOOPS : Sk.misceval.loadname('LOOPS', $gbl);;
/*   561 */                     $ret;
/*   562 */                     $ret = Sk.misceval.callsimOrSuspend($loadname463, $loadname464);
/*   563 */                     $blk = 9; /* allowing case fallthrough */
/*   564 */                 case 9:
/*   565 */                     /* --- function return or resume suspension --- */
/*   566 */                     if ($ret && $ret.$isSuspension) {
/*   567 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 255, 0);
/*   568 */                     }
/*   569 */                     var $call465 = $ret;
/*   570 */                     //
/*   571 */                     // line 255:
/*   572 */                     // main(LOOPS)
/*   573 */                     // ^
/*   574 */                     //
/*   575 */                     $currLineNo = 255;
/*   576 */                     $currColNo = 0;
/*   577 */ 
/*   578 */                     return $loc;
/*   579 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   580 */                 }
/*   581 */             } catch (err) {
/*   582 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   583 */                     err = new Sk.builtin.ExternalError(err);
/*   584 */                 }
/*   585 */                 err.traceback.push({
/*   586 */                     lineno: $currLineNo,
/*   587 */                     colno: $currColNo,
/*   588 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   589 */                 });
/*   590 */                 if ($exc.length > 0) {
/*   591 */                     $err = err;
/*   592 */                     $blk = $exc.pop();
/*   593 */                     continue;
/*   594 */                 } else {
/*   595 */                     throw err;
/*   596 */                 }
/*   597 */             }
/*   598 */         }
/*   599 */     });
/*   600 */     var $scope130 = (function $Record$class_outer($globals, $locals, $rest) {
/*   601 */         var $gbl = $globals,
/*   602 */             $loc = $locals;
/*   603 */         (function $Record$_closure() {
/*   604 */             var $blk = 0,
/*   605 */                 $exc = [],
/*   606 */                 $ret = undefined,
/*   607 */                 $postfinally = undefined,
/*   608 */                 $currLineNo = undefined,
/*   609 */                 $currColNo = undefined;
/*   610 */             if (typeof Sk.execStart === 'undefined') {
/*   611 */                 Sk.execStart = Date.now()
/*   612 */             }
/*   613 */             while (true) {
/*   614 */                 try {
/*   615 */                     var $dateNow = Date.now();
/*   616 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   617 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   618 */                     }
/*   619 */                     switch ($blk) {
/*   620 */                     case 0:
/*   621 */                         /* --- class entry --- */
/*   622 */                         //
/*   623 */                         // line 45:
/*   624 */                         //     def __init__(self, PtrComp = None, Discr = 0, EnumComp = 0,
/*   625 */                         //     ^
/*   626 */                         //
/*   627 */                         $currLineNo = 45;
/*   628 */                         $currColNo = 4;
/*   629 */ 
/*   630 */                         $scope131.co_name = new Sk.builtins['str']('__init__');
/*   631 */                         $scope131.$defaults = [Sk.builtin.none.none$, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0)];
/*   632 */                         $scope131.co_varnames = ['self', 'PtrComp', 'Discr', 'EnumComp', 'IntComp', 'StringComp'];
/*   633 */                         var $funcobj133 = new Sk.builtins['function']($scope131, $gbl);
/*   634 */                         $loc.__init__ = $funcobj133;
/*   635 */                         //
/*   636 */                         // line 53:
/*   637 */                         //     def copy(self):
/*   638 */                         //     ^
/*   639 */                         //
/*   640 */                         $currLineNo = 53;
/*   641 */                         $currColNo = 4;
/*   642 */ 
/*   643 */                         $scope134.co_name = new Sk.builtins['str']('copy');
/*   644 */                         $scope134.co_varnames = ['self'];
/*   645 */                         var $funcobj143 = new Sk.builtins['function']($scope134, $gbl);
/*   646 */                         $loc.copy = $funcobj143;
/*   647 */                         return;
/*   648 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   649 */                     }
/*   650 */                 } catch (err) {
/*   651 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   652 */                         err = new Sk.builtin.ExternalError(err);
/*   653 */                     }
/*   654 */                     err.traceback.push({
/*   655 */                         lineno: $currLineNo,
/*   656 */                         colno: $currColNo,
/*   657 */                         filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   658 */                     });
/*   659 */                     if ($exc.length > 0) {
/*   660 */                         $err = err;
/*   661 */                         $blk = $exc.pop();
/*   662 */                         continue;
/*   663 */                     } else {
/*   664 */                         throw err;
/*   665 */                     }
/*   666 */                 }
/*   667 */             }
/*   668 */         }).apply(null, $rest);
/*   669 */     });
/*   670 */     var $scope131 = (function $__init__132$(self, PtrComp, Discr, EnumComp, IntComp, StringComp) {
/*   671 */         var Discr, Discr, Discr, EnumComp, EnumComp, EnumComp, IntComp, IntComp, IntComp, PtrComp, PtrComp, PtrComp, StringComp, StringComp, StringComp, self, self, self, self, self, self;
/*   672 */         var $wakeFromSuspension = function() {
/*   673 */             var susp = $scope131.$wakingSuspension;
/*   674 */             delete $scope131.$wakingSuspension;
/*   675 */             $blk = susp.$blk;
/*   676 */             $loc = susp.$loc;
/*   677 */             $gbl = susp.$gbl;
/*   678 */             $exc = susp.$exc;
/*   679 */             $err = susp.$err;
/*   680 */             $postfinally = susp.$postfinally;
/*   681 */             $currLineNo = susp.$lineno;
/*   682 */             $currColNo = susp.$colno;
/*   683 */             Sk.lastYield = Date.now();
/*   684 */             Discr = susp.$tmps.Discr;
/*   685 */             EnumComp = susp.$tmps.EnumComp;
/*   686 */             IntComp = susp.$tmps.IntComp;
/*   687 */             PtrComp = susp.$tmps.PtrComp;
/*   688 */             StringComp = susp.$tmps.StringComp;
/*   689 */             self = susp.$tmps.self;
/*   690 */             try {
/*   691 */                 $ret = susp.child.resume();
/*   692 */             } catch (err) {
/*   693 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   694 */                     err = new Sk.builtin.ExternalError(err);
/*   695 */                 }
/*   696 */                 err.traceback.push({
/*   697 */                     lineno: $currLineNo,
/*   698 */                     colno: $currColNo,
/*   699 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   700 */                 });
/*   701 */                 if ($exc.length > 0) {
/*   702 */                     $err = err;
/*   703 */                     $blk = $exc.pop();
/*   704 */                 } else {
/*   705 */                     throw err;
/*   706 */                 }
/*   707 */             }
/*   708 */         };
/*   709 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   710 */             var susp = new Sk.misceval.Suspension();
/*   711 */             susp.child = $child;
/*   712 */             susp.resume = function() {
/*   713 */                 $scope131.$wakingSuspension = susp;
/*   714 */                 return $scope131();
/*   715 */             };
/*   716 */             susp.data = susp.child.data;
/*   717 */             susp.$blk = $blk;
/*   718 */             susp.$loc = $loc;
/*   719 */             susp.$gbl = $gbl;
/*   720 */             susp.$exc = $exc;
/*   721 */             susp.$err = $err;
/*   722 */             susp.$postfinally = $postfinally;
/*   723 */             susp.$filename = $filename;
/*   724 */             susp.$lineno = $lineno;
/*   725 */             susp.$colno = $colno;
/*   726 */             susp.optional = susp.child.optional;
/*   727 */             susp.$tmps = {
/*   728 */                 "Discr": Discr,
/*   729 */                 "EnumComp": EnumComp,
/*   730 */                 "IntComp": IntComp,
/*   731 */                 "PtrComp": PtrComp,
/*   732 */                 "StringComp": StringComp,
/*   733 */                 "self": self
/*   734 */             };
/*   735 */             return susp;
/*   736 */         };
/*   737 */         var $blk = 0,
/*   738 */             $exc = [],
/*   739 */             $loc = {},
/*   740 */             $gbl = this,
/*   741 */             $err = undefined,
/*   742 */             $ret = undefined,
/*   743 */             $postfinally = undefined,
/*   744 */             $currLineNo = undefined,
/*   745 */             $currColNo = undefined;
/*   746 */         if (typeof Sk.execStart === 'undefined') {
/*   747 */             Sk.execStart = Date.now()
/*   748 */         }
/*   749 */         if (typeof Sk.lastYield === 'undefined') {
/*   750 */             Sk.lastYield = Date.now()
/*   751 */         }
/*   752 */         if ($scope131.$wakingSuspension !== undefined) {
/*   753 */             $wakeFromSuspension();
/*   754 */         } else {
/*   755 */             if (PtrComp === undefined) PtrComp = $scope131.$defaults[0];
/*   756 */             if (Discr === undefined) Discr = $scope131.$defaults[1];
/*   757 */             if (EnumComp === undefined) EnumComp = $scope131.$defaults[2];
/*   758 */             if (IntComp === undefined) IntComp = $scope131.$defaults[3];
/*   759 */             if (StringComp === undefined) StringComp = $scope131.$defaults[4];
/*   760 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 6, false, false);
/*   761 */         }
/*   762 */         while (true) {
/*   763 */             try {
/*   764 */                 var $dateNow = Date.now();
/*   765 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   766 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   767 */                 }
/*   768 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   769 */                     var $susp = $saveSuspension({
/*   770 */                         data: {
/*   771 */                             type: 'Sk.yield'
/*   772 */                         },
/*   773 */                         resume: function() {}
/*   774 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*   775 */                     $susp.$blk = $blk;
/*   776 */                     $susp.optional = true;
/*   777 */                     return $susp;
/*   778 */                 }
/*   779 */                 switch ($blk) {
/*   780 */                 case 0:
/*   781 */                     /* --- codeobj entry --- */
/*   782 */                     if (self === undefined) {
/*   783 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   784 */                     }
/*   785 */                     if (PtrComp === undefined) {
/*   786 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   787 */                     }
/*   788 */                     if (Discr === undefined) {
/*   789 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   790 */                     }
/*   791 */                     if (EnumComp === undefined) {
/*   792 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   793 */                     }
/*   794 */                     if (IntComp === undefined) {
/*   795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   796 */                     }
/*   797 */                     if (StringComp === undefined) {
/*   798 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   799 */                     }
/*   800 */                     if (PtrComp === undefined) {
/*   801 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   802 */                     }
/*   803 */                     if (Discr === undefined) {
/*   804 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   805 */                     }
/*   806 */                     if (EnumComp === undefined) {
/*   807 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   808 */                     }
/*   809 */                     if (IntComp === undefined) {
/*   810 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   811 */                     }
/*   812 */                     if (StringComp === undefined) {
/*   813 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   814 */                     }
/*   815 */ 
/*   816 */                     //
/*   817 */                     // line 47:
/*   818 */                     //         self.PtrComp = PtrComp
/*   819 */                     //         ^
/*   820 */                     //
/*   821 */                     $currLineNo = 47;
/*   822 */                     $currColNo = 8;
/*   823 */ 
/*   824 */                     if (PtrComp === undefined) {
/*   825 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrComp\' referenced before assignment');
/*   826 */                     }
/*   827 */                     if (self === undefined) {
/*   828 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   829 */                     }
/*   830 */                     $ret = Sk.abstr.sattr(self, 'PtrComp', PtrComp, true);
/*   831 */                     $blk = 1; /* allowing case fallthrough */
/*   832 */                 case 1:
/*   833 */                     /* --- function return or resume suspension --- */
/*   834 */                     if ($ret && $ret.$isSuspension) {
/*   835 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 47, 8);
/*   836 */                     }
/*   837 */                     //
/*   838 */                     // line 48:
/*   839 */                     //         self.Discr = Discr
/*   840 */                     //         ^
/*   841 */                     //
/*   842 */                     $currLineNo = 48;
/*   843 */                     $currColNo = 8;
/*   844 */ 
/*   845 */                     if (Discr === undefined) {
/*   846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Discr\' referenced before assignment');
/*   847 */                     }
/*   848 */                     if (self === undefined) {
/*   849 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   850 */                     }
/*   851 */                     $ret = Sk.abstr.sattr(self, 'Discr', Discr, true);
/*   852 */                     $blk = 2; /* allowing case fallthrough */
/*   853 */                 case 2:
/*   854 */                     /* --- function return or resume suspension --- */
/*   855 */                     if ($ret && $ret.$isSuspension) {
/*   856 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 48, 8);
/*   857 */                     }
/*   858 */                     //
/*   859 */                     // line 49:
/*   860 */                     //         self.EnumComp = EnumComp
/*   861 */                     //         ^
/*   862 */                     //
/*   863 */                     $currLineNo = 49;
/*   864 */                     $currColNo = 8;
/*   865 */ 
/*   866 */                     if (EnumComp === undefined) {
/*   867 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumComp\' referenced before assignment');
/*   868 */                     }
/*   869 */                     if (self === undefined) {
/*   870 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   871 */                     }
/*   872 */                     $ret = Sk.abstr.sattr(self, 'EnumComp', EnumComp, true);
/*   873 */                     $blk = 3; /* allowing case fallthrough */
/*   874 */                 case 3:
/*   875 */                     /* --- function return or resume suspension --- */
/*   876 */                     if ($ret && $ret.$isSuspension) {
/*   877 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 49, 8);
/*   878 */                     }
/*   879 */                     //
/*   880 */                     // line 50:
/*   881 */                     //         self.IntComp = IntComp
/*   882 */                     //         ^
/*   883 */                     //
/*   884 */                     $currLineNo = 50;
/*   885 */                     $currColNo = 8;
/*   886 */ 
/*   887 */                     if (IntComp === undefined) {
/*   888 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntComp\' referenced before assignment');
/*   889 */                     }
/*   890 */                     if (self === undefined) {
/*   891 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   892 */                     }
/*   893 */                     $ret = Sk.abstr.sattr(self, 'IntComp', IntComp, true);
/*   894 */                     $blk = 4; /* allowing case fallthrough */
/*   895 */                 case 4:
/*   896 */                     /* --- function return or resume suspension --- */
/*   897 */                     if ($ret && $ret.$isSuspension) {
/*   898 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 50, 8);
/*   899 */                     }
/*   900 */                     //
/*   901 */                     // line 51:
/*   902 */                     //         self.StringComp = StringComp
/*   903 */                     //         ^
/*   904 */                     //
/*   905 */                     $currLineNo = 51;
/*   906 */                     $currColNo = 8;
/*   907 */ 
/*   908 */                     if (StringComp === undefined) {
/*   909 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StringComp\' referenced before assignment');
/*   910 */                     }
/*   911 */                     if (self === undefined) {
/*   912 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   913 */                     }
/*   914 */                     $ret = Sk.abstr.sattr(self, 'StringComp', StringComp, true);
/*   915 */                     $blk = 5; /* allowing case fallthrough */
/*   916 */                 case 5:
/*   917 */                     /* --- function return or resume suspension --- */
/*   918 */                     if ($ret && $ret.$isSuspension) {
/*   919 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 51, 8);
/*   920 */                     }
/*   921 */                     return Sk.builtin.none.none$;
/*   922 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   923 */                 }
/*   924 */             } catch (err) {
/*   925 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   926 */                     err = new Sk.builtin.ExternalError(err);
/*   927 */                 }
/*   928 */                 err.traceback.push({
/*   929 */                     lineno: $currLineNo,
/*   930 */                     colno: $currColNo,
/*   931 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   932 */                 });
/*   933 */                 if ($exc.length > 0) {
/*   934 */                     $err = err;
/*   935 */                     $blk = $exc.pop();
/*   936 */                     continue;
/*   937 */                 } else {
/*   938 */                     throw err;
/*   939 */                 }
/*   940 */             }
/*   941 */         }
/*   942 */     });
/*   943 */     var $scope134 = (function $copy135$(self) {
/*   944 */         var self, self, self, self, self, self, $loadgbl136, $loadgbl136, $lattr137, $loadgbl136, $lattr137, $lattr138, $loadgbl136, $lattr137, $lattr138, $lattr139, $loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $lattr141;
/*   945 */         var $wakeFromSuspension = function() {
/*   946 */             var susp = $scope134.$wakingSuspension;
/*   947 */             delete $scope134.$wakingSuspension;
/*   948 */             $blk = susp.$blk;
/*   949 */             $loc = susp.$loc;
/*   950 */             $gbl = susp.$gbl;
/*   951 */             $exc = susp.$exc;
/*   952 */             $err = susp.$err;
/*   953 */             $postfinally = susp.$postfinally;
/*   954 */             $currLineNo = susp.$lineno;
/*   955 */             $currColNo = susp.$colno;
/*   956 */             Sk.lastYield = Date.now();
/*   957 */             self = susp.$tmps.self;
/*   958 */             $loadgbl136 = susp.$tmps.$loadgbl136;
/*   959 */             $lattr137 = susp.$tmps.$lattr137;
/*   960 */             $lattr138 = susp.$tmps.$lattr138;
/*   961 */             $lattr139 = susp.$tmps.$lattr139;
/*   962 */             $lattr140 = susp.$tmps.$lattr140;
/*   963 */             $lattr141 = susp.$tmps.$lattr141;
/*   964 */             try {
/*   965 */                 $ret = susp.child.resume();
/*   966 */             } catch (err) {
/*   967 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   968 */                     err = new Sk.builtin.ExternalError(err);
/*   969 */                 }
/*   970 */                 err.traceback.push({
/*   971 */                     lineno: $currLineNo,
/*   972 */                     colno: $currColNo,
/*   973 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*   974 */                 });
/*   975 */                 if ($exc.length > 0) {
/*   976 */                     $err = err;
/*   977 */                     $blk = $exc.pop();
/*   978 */                 } else {
/*   979 */                     throw err;
/*   980 */                 }
/*   981 */             }
/*   982 */         };
/*   983 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   984 */             var susp = new Sk.misceval.Suspension();
/*   985 */             susp.child = $child;
/*   986 */             susp.resume = function() {
/*   987 */                 $scope134.$wakingSuspension = susp;
/*   988 */                 return $scope134();
/*   989 */             };
/*   990 */             susp.data = susp.child.data;
/*   991 */             susp.$blk = $blk;
/*   992 */             susp.$loc = $loc;
/*   993 */             susp.$gbl = $gbl;
/*   994 */             susp.$exc = $exc;
/*   995 */             susp.$err = $err;
/*   996 */             susp.$postfinally = $postfinally;
/*   997 */             susp.$filename = $filename;
/*   998 */             susp.$lineno = $lineno;
/*   999 */             susp.$colno = $colno;
/*  1000 */             susp.optional = susp.child.optional;
/*  1001 */             susp.$tmps = {
/*  1002 */                 "self": self,
/*  1003 */                 "$loadgbl136": $loadgbl136,
/*  1004 */                 "$lattr137": $lattr137,
/*  1005 */                 "$lattr138": $lattr138,
/*  1006 */                 "$lattr139": $lattr139,
/*  1007 */                 "$lattr140": $lattr140,
/*  1008 */                 "$lattr141": $lattr141
/*  1009 */             };
/*  1010 */             return susp;
/*  1011 */         };
/*  1012 */         var $blk = 0,
/*  1013 */             $exc = [],
/*  1014 */             $loc = {},
/*  1015 */             $gbl = this,
/*  1016 */             $err = undefined,
/*  1017 */             $ret = undefined,
/*  1018 */             $postfinally = undefined,
/*  1019 */             $currLineNo = undefined,
/*  1020 */             $currColNo = undefined;
/*  1021 */         if (typeof Sk.execStart === 'undefined') {
/*  1022 */             Sk.execStart = Date.now()
/*  1023 */         }
/*  1024 */         if (typeof Sk.lastYield === 'undefined') {
/*  1025 */             Sk.lastYield = Date.now()
/*  1026 */         }
/*  1027 */         if ($scope134.$wakingSuspension !== undefined) {
/*  1028 */             $wakeFromSuspension();
/*  1029 */         } else {
/*  1030 */             Sk.builtin.pyCheckArgs("copy", arguments, 1, 1, false, false);
/*  1031 */         }
/*  1032 */         while (true) {
/*  1033 */             try {
/*  1034 */                 var $dateNow = Date.now();
/*  1035 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1036 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1037 */                 }
/*  1038 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1039 */                     var $susp = $saveSuspension({
/*  1040 */                         data: {
/*  1041 */                             type: 'Sk.yield'
/*  1042 */                         },
/*  1043 */                         resume: function() {}
/*  1044 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1045 */                     $susp.$blk = $blk;
/*  1046 */                     $susp.optional = true;
/*  1047 */                     return $susp;
/*  1048 */                 }
/*  1049 */                 switch ($blk) {
/*  1050 */                 case 0:
/*  1051 */                     /* --- codeobj entry --- */
/*  1052 */                     if (self === undefined) {
/*  1053 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1054 */                     }
/*  1055 */ 
/*  1056 */                     //
/*  1057 */                     // line 54:
/*  1058 */                     //         return Record(self.PtrComp, self.Discr, self.EnumComp,
/*  1059 */                     //         ^
/*  1060 */                     //
/*  1061 */                     $currLineNo = 54;
/*  1062 */                     $currColNo = 8;
/*  1063 */ 
/*  1064 */                     var $loadgbl136 = Sk.misceval.loadname('Record', $gbl);
/*  1065 */                     if (self === undefined) {
/*  1066 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1067 */                     }
/*  1068 */                     $ret = Sk.abstr.gattr(self, 'PtrComp', true);
/*  1069 */                     $blk = 1; /* allowing case fallthrough */
/*  1070 */                 case 1:
/*  1071 */                     /* --- function return or resume suspension --- */
/*  1072 */                     if ($ret && $ret.$isSuspension) {
/*  1073 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 22);
/*  1074 */                     }
/*  1075 */                     var $lattr137 = $ret;
/*  1076 */                     if (self === undefined) {
/*  1077 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1078 */                     }
/*  1079 */                     $ret = Sk.abstr.gattr(self, 'Discr', true);
/*  1080 */                     $blk = 2; /* allowing case fallthrough */
/*  1081 */                 case 2:
/*  1082 */                     /* --- function return or resume suspension --- */
/*  1083 */                     if ($ret && $ret.$isSuspension) {
/*  1084 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 36);
/*  1085 */                     }
/*  1086 */                     var $lattr138 = $ret;
/*  1087 */                     if (self === undefined) {
/*  1088 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1089 */                     }
/*  1090 */                     $ret = Sk.abstr.gattr(self, 'EnumComp', true);
/*  1091 */                     $blk = 3; /* allowing case fallthrough */
/*  1092 */                 case 3:
/*  1093 */                     /* --- function return or resume suspension --- */
/*  1094 */                     if ($ret && $ret.$isSuspension) {
/*  1095 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 48);
/*  1096 */                     }
/*  1097 */                     var $lattr139 = $ret;
/*  1098 */                     if (self === undefined) {
/*  1099 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1100 */                     }
/*  1101 */                     $ret = Sk.abstr.gattr(self, 'IntComp', true);
/*  1102 */                     $blk = 4; /* allowing case fallthrough */
/*  1103 */                 case 4:
/*  1104 */                     /* --- function return or resume suspension --- */
/*  1105 */                     if ($ret && $ret.$isSuspension) {
/*  1106 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 55, 22);
/*  1107 */                     }
/*  1108 */                     var $lattr140 = $ret;
/*  1109 */                     if (self === undefined) {
/*  1110 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1111 */                     }
/*  1112 */                     $ret = Sk.abstr.gattr(self, 'StringComp', true);
/*  1113 */                     $blk = 5; /* allowing case fallthrough */
/*  1114 */                 case 5:
/*  1115 */                     /* --- function return or resume suspension --- */
/*  1116 */                     if ($ret && $ret.$isSuspension) {
/*  1117 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 55, 36);
/*  1118 */                     }
/*  1119 */                     var $lattr141 = $ret;
/*  1120 */                     $ret;
/*  1121 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl136, $lattr137, $lattr138, $lattr139, $lattr140, $lattr141);
/*  1122 */                     $blk = 6; /* allowing case fallthrough */
/*  1123 */                 case 6:
/*  1124 */                     /* --- function return or resume suspension --- */
/*  1125 */                     if ($ret && $ret.$isSuspension) {
/*  1126 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 54, 15);
/*  1127 */                     }
/*  1128 */                     var $call142 = $ret;
/*  1129 */                     //
/*  1130 */                     // line 54:
/*  1131 */                     //         return Record(self.PtrComp, self.Discr, self.EnumComp,
/*  1132 */                     //                ^
/*  1133 */                     //
/*  1134 */                     $currLineNo = 54;
/*  1135 */                     $currColNo = 15;
/*  1136 */ 
/*  1137 */                     return $call142;
/*  1138 */                     return Sk.builtin.none.none$;
/*  1139 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1140 */                 }
/*  1141 */             } catch (err) {
/*  1142 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1143 */                     err = new Sk.builtin.ExternalError(err);
/*  1144 */                 }
/*  1145 */                 err.traceback.push({
/*  1146 */                     lineno: $currLineNo,
/*  1147 */                     colno: $currColNo,
/*  1148 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1149 */                 });
/*  1150 */                 if ($exc.length > 0) {
/*  1151 */                     $err = err;
/*  1152 */                     $blk = $exc.pop();
/*  1153 */                     continue;
/*  1154 */                 } else {
/*  1155 */                     throw err;
/*  1156 */                 }
/*  1157 */             }
/*  1158 */         }
/*  1159 */     });
/*  1160 */     var $scope146 = (function $main147$(loops) {
/*  1161 */         var benchtime, stones; /* locals */
/*  1162 */         var benchtime, loops, loops, loops, stones, $loadgbl148;
/*  1163 */         var $wakeFromSuspension = function() {
/*  1164 */             var susp = $scope146.$wakingSuspension;
/*  1165 */             delete $scope146.$wakingSuspension;
/*  1166 */             $blk = susp.$blk;
/*  1167 */             $loc = susp.$loc;
/*  1168 */             $gbl = susp.$gbl;
/*  1169 */             $exc = susp.$exc;
/*  1170 */             $err = susp.$err;
/*  1171 */             $postfinally = susp.$postfinally;
/*  1172 */             $currLineNo = susp.$lineno;
/*  1173 */             $currColNo = susp.$colno;
/*  1174 */             Sk.lastYield = Date.now();
/*  1175 */             benchtime = susp.$tmps.benchtime;
/*  1176 */             loops = susp.$tmps.loops;
/*  1177 */             stones = susp.$tmps.stones;
/*  1178 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*  1179 */             try {
/*  1180 */                 $ret = susp.child.resume();
/*  1181 */             } catch (err) {
/*  1182 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1183 */                     err = new Sk.builtin.ExternalError(err);
/*  1184 */                 }
/*  1185 */                 err.traceback.push({
/*  1186 */                     lineno: $currLineNo,
/*  1187 */                     colno: $currColNo,
/*  1188 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1189 */                 });
/*  1190 */                 if ($exc.length > 0) {
/*  1191 */                     $err = err;
/*  1192 */                     $blk = $exc.pop();
/*  1193 */                 } else {
/*  1194 */                     throw err;
/*  1195 */                 }
/*  1196 */             }
/*  1197 */         };
/*  1198 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1199 */             var susp = new Sk.misceval.Suspension();
/*  1200 */             susp.child = $child;
/*  1201 */             susp.resume = function() {
/*  1202 */                 $scope146.$wakingSuspension = susp;
/*  1203 */                 return $scope146();
/*  1204 */             };
/*  1205 */             susp.data = susp.child.data;
/*  1206 */             susp.$blk = $blk;
/*  1207 */             susp.$loc = $loc;
/*  1208 */             susp.$gbl = $gbl;
/*  1209 */             susp.$exc = $exc;
/*  1210 */             susp.$err = $err;
/*  1211 */             susp.$postfinally = $postfinally;
/*  1212 */             susp.$filename = $filename;
/*  1213 */             susp.$lineno = $lineno;
/*  1214 */             susp.$colno = $colno;
/*  1215 */             susp.optional = susp.child.optional;
/*  1216 */             susp.$tmps = {
/*  1217 */                 "benchtime": benchtime,
/*  1218 */                 "loops": loops,
/*  1219 */                 "stones": stones,
/*  1220 */                 "$loadgbl148": $loadgbl148
/*  1221 */             };
/*  1222 */             return susp;
/*  1223 */         };
/*  1224 */         var $blk = 0,
/*  1225 */             $exc = [],
/*  1226 */             $loc = {},
/*  1227 */             $gbl = this,
/*  1228 */             $err = undefined,
/*  1229 */             $ret = undefined,
/*  1230 */             $postfinally = undefined,
/*  1231 */             $currLineNo = undefined,
/*  1232 */             $currColNo = undefined;
/*  1233 */         if (typeof Sk.execStart === 'undefined') {
/*  1234 */             Sk.execStart = Date.now()
/*  1235 */         }
/*  1236 */         if (typeof Sk.lastYield === 'undefined') {
/*  1237 */             Sk.lastYield = Date.now()
/*  1238 */         }
/*  1239 */         if ($scope146.$wakingSuspension !== undefined) {
/*  1240 */             $wakeFromSuspension();
/*  1241 */         } else {
/*  1242 */             if (loops === undefined) loops = $scope146.$defaults[0];
/*  1243 */             Sk.builtin.pyCheckArgs("main", arguments, 0, 1, false, false);
/*  1244 */         }
/*  1245 */         while (true) {
/*  1246 */             try {
/*  1247 */                 var $dateNow = Date.now();
/*  1248 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1249 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1250 */                 }
/*  1251 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1252 */                     var $susp = $saveSuspension({
/*  1253 */                         data: {
/*  1254 */                             type: 'Sk.yield'
/*  1255 */                         },
/*  1256 */                         resume: function() {}
/*  1257 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1258 */                     $susp.$blk = $blk;
/*  1259 */                     $susp.optional = true;
/*  1260 */                     return $susp;
/*  1261 */                 }
/*  1262 */                 switch ($blk) {
/*  1263 */                 case 0:
/*  1264 */                     /* --- codeobj entry --- */
/*  1265 */                     if (loops === undefined) {
/*  1266 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1267 */                     }
/*  1268 */                     if (loops === undefined) {
/*  1269 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1270 */                     }
/*  1271 */ 
/*  1272 */                     //
/*  1273 */                     // line 61:
/*  1274 */                     //     benchtime, stones = pystones(loops)
/*  1275 */                     //     ^
/*  1276 */                     //
/*  1277 */                     $currLineNo = 61;
/*  1278 */                     $currColNo = 4;
/*  1279 */ 
/*  1280 */                     var $loadgbl148 = Sk.misceval.loadname('pystones', $gbl);
/*  1281 */                     if (loops === undefined) {
/*  1282 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1283 */                     }
/*  1284 */                     $ret;
/*  1285 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, loops);
/*  1286 */                     $blk = 1; /* allowing case fallthrough */
/*  1287 */                 case 1:
/*  1288 */                     /* --- function return or resume suspension --- */
/*  1289 */                     if ($ret && $ret.$isSuspension) {
/*  1290 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 61, 24);
/*  1291 */                     }
/*  1292 */                     var $call149 = $ret;
/*  1293 */                     //
/*  1294 */                     // line 61:
/*  1295 */                     //     benchtime, stones = pystones(loops)
/*  1296 */                     //                         ^
/*  1297 */                     //
/*  1298 */                     $currLineNo = 61;
/*  1299 */                     $currColNo = 24;
/*  1300 */ 
/*  1301 */                     var $items150 = Sk.abstr.sequenceUnpack($call149, 2);
/*  1302 */                     benchtime = $items150[0];
/*  1303 */                     stones = $items150[1];
/*  1304 */                     return Sk.builtin.none.none$;
/*  1305 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1306 */                 }
/*  1307 */             } catch (err) {
/*  1308 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1309 */                     err = new Sk.builtin.ExternalError(err);
/*  1310 */                 }
/*  1311 */                 err.traceback.push({
/*  1312 */                     lineno: $currLineNo,
/*  1313 */                     colno: $currColNo,
/*  1314 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1315 */                 });
/*  1316 */                 if ($exc.length > 0) {
/*  1317 */                     $err = err;
/*  1318 */                     $blk = $exc.pop();
/*  1319 */                     continue;
/*  1320 */                 } else {
/*  1321 */                     throw err;
/*  1322 */                 }
/*  1323 */             }
/*  1324 */         }
/*  1325 */     });
/*  1326 */     var $scope153 = (function $pystones154$(loops) {
/*  1327 */         var loops, loops, loops, $loadgbl155;
/*  1328 */         var $wakeFromSuspension = function() {
/*  1329 */             var susp = $scope153.$wakingSuspension;
/*  1330 */             delete $scope153.$wakingSuspension;
/*  1331 */             $blk = susp.$blk;
/*  1332 */             $loc = susp.$loc;
/*  1333 */             $gbl = susp.$gbl;
/*  1334 */             $exc = susp.$exc;
/*  1335 */             $err = susp.$err;
/*  1336 */             $postfinally = susp.$postfinally;
/*  1337 */             $currLineNo = susp.$lineno;
/*  1338 */             $currColNo = susp.$colno;
/*  1339 */             Sk.lastYield = Date.now();
/*  1340 */             loops = susp.$tmps.loops;
/*  1341 */             $loadgbl155 = susp.$tmps.$loadgbl155;
/*  1342 */             try {
/*  1343 */                 $ret = susp.child.resume();
/*  1344 */             } catch (err) {
/*  1345 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1346 */                     err = new Sk.builtin.ExternalError(err);
/*  1347 */                 }
/*  1348 */                 err.traceback.push({
/*  1349 */                     lineno: $currLineNo,
/*  1350 */                     colno: $currColNo,
/*  1351 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1352 */                 });
/*  1353 */                 if ($exc.length > 0) {
/*  1354 */                     $err = err;
/*  1355 */                     $blk = $exc.pop();
/*  1356 */                 } else {
/*  1357 */                     throw err;
/*  1358 */                 }
/*  1359 */             }
/*  1360 */         };
/*  1361 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1362 */             var susp = new Sk.misceval.Suspension();
/*  1363 */             susp.child = $child;
/*  1364 */             susp.resume = function() {
/*  1365 */                 $scope153.$wakingSuspension = susp;
/*  1366 */                 return $scope153();
/*  1367 */             };
/*  1368 */             susp.data = susp.child.data;
/*  1369 */             susp.$blk = $blk;
/*  1370 */             susp.$loc = $loc;
/*  1371 */             susp.$gbl = $gbl;
/*  1372 */             susp.$exc = $exc;
/*  1373 */             susp.$err = $err;
/*  1374 */             susp.$postfinally = $postfinally;
/*  1375 */             susp.$filename = $filename;
/*  1376 */             susp.$lineno = $lineno;
/*  1377 */             susp.$colno = $colno;
/*  1378 */             susp.optional = susp.child.optional;
/*  1379 */             susp.$tmps = {
/*  1380 */                 "loops": loops,
/*  1381 */                 "$loadgbl155": $loadgbl155
/*  1382 */             };
/*  1383 */             return susp;
/*  1384 */         };
/*  1385 */         var $blk = 0,
/*  1386 */             $exc = [],
/*  1387 */             $loc = {},
/*  1388 */             $gbl = this,
/*  1389 */             $err = undefined,
/*  1390 */             $ret = undefined,
/*  1391 */             $postfinally = undefined,
/*  1392 */             $currLineNo = undefined,
/*  1393 */             $currColNo = undefined;
/*  1394 */         if (typeof Sk.execStart === 'undefined') {
/*  1395 */             Sk.execStart = Date.now()
/*  1396 */         }
/*  1397 */         if (typeof Sk.lastYield === 'undefined') {
/*  1398 */             Sk.lastYield = Date.now()
/*  1399 */         }
/*  1400 */         if ($scope153.$wakingSuspension !== undefined) {
/*  1401 */             $wakeFromSuspension();
/*  1402 */         } else {
/*  1403 */             if (loops === undefined) loops = $scope153.$defaults[0];
/*  1404 */             Sk.builtin.pyCheckArgs("pystones", arguments, 0, 1, false, false);
/*  1405 */         }
/*  1406 */         while (true) {
/*  1407 */             try {
/*  1408 */                 var $dateNow = Date.now();
/*  1409 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1410 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1411 */                 }
/*  1412 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1413 */                     var $susp = $saveSuspension({
/*  1414 */                         data: {
/*  1415 */                             type: 'Sk.yield'
/*  1416 */                         },
/*  1417 */                         resume: function() {}
/*  1418 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1419 */                     $susp.$blk = $blk;
/*  1420 */                     $susp.optional = true;
/*  1421 */                     return $susp;
/*  1422 */                 }
/*  1423 */                 switch ($blk) {
/*  1424 */                 case 0:
/*  1425 */                     /* --- codeobj entry --- */
/*  1426 */                     if (loops === undefined) {
/*  1427 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1428 */                     }
/*  1429 */                     if (loops === undefined) {
/*  1430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1431 */                     }
/*  1432 */ 
/*  1433 */                     //
/*  1434 */                     // line 68:
/*  1435 */                     //     return Proc0(loops)
/*  1436 */                     //     ^
/*  1437 */                     //
/*  1438 */                     $currLineNo = 68;
/*  1439 */                     $currColNo = 4;
/*  1440 */ 
/*  1441 */                     var $loadgbl155 = Sk.misceval.loadname('Proc0', $gbl);
/*  1442 */                     if (loops === undefined) {
/*  1443 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1444 */                     }
/*  1445 */                     $ret;
/*  1446 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl155, loops);
/*  1447 */                     $blk = 1; /* allowing case fallthrough */
/*  1448 */                 case 1:
/*  1449 */                     /* --- function return or resume suspension --- */
/*  1450 */                     if ($ret && $ret.$isSuspension) {
/*  1451 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 68, 11);
/*  1452 */                     }
/*  1453 */                     var $call156 = $ret;
/*  1454 */                     //
/*  1455 */                     // line 68:
/*  1456 */                     //     return Proc0(loops)
/*  1457 */                     //            ^
/*  1458 */                     //
/*  1459 */                     $currLineNo = 68;
/*  1460 */                     $currColNo = 11;
/*  1461 */ 
/*  1462 */                     return $call156;
/*  1463 */                     return Sk.builtin.none.none$;
/*  1464 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1465 */                 }
/*  1466 */             } catch (err) {
/*  1467 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1468 */                     err = new Sk.builtin.ExternalError(err);
/*  1469 */                 }
/*  1470 */                 err.traceback.push({
/*  1471 */                     lineno: $currLineNo,
/*  1472 */                     colno: $currColNo,
/*  1473 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
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
/*  1485 */     var $scope175 = (function $Proc0176$(loops) {
/*  1486 */         var CharIndex, EnumLoc, IntLoc1, IntLoc2, IntLoc3, String1Loc, String2Loc, benchtime, i, loopsPerBenchtime, nulltime, starttime; /* locals */
/*  1487 */         var CharIndex, CharIndex, CharIndex, CharIndex, CharIndex, EnumLoc, EnumLoc, EnumLoc, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc1, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc2, IntLoc3, IntLoc3, IntLoc3, IntLoc3, IntLoc3, IntLoc3, String1Loc, String1Loc, String2Loc, String2Loc, benchtime, benchtime, benchtime, benchtime, i, i, loops, loops, loops, loops, loops, loopsPerBenchtime, loopsPerBenchtime, loopsPerBenchtime, nulltime, nulltime, starttime, starttime, starttime, starttime, $loadgbl177, $loadgbl179, $iter181, $loadgbl179, $call180, $iter181, $loadgbl183, $loadgbl186, $loadgbl188, $loadgbl190, $loadgbl191, $loadgbl192, $loadgbl193, $loadgbl194, $loadgbl195, $loadgbl196, $str197, $loadgbl198, $loadgbl200, $loadgbl200, $lsubscr201, $loadgbl202, $loadgbl204, $iter206, $loadgbl204, $call205, $iter206, $loadgbl208, $loadgbl210, $loadgbl214, $compareres217, $loadgbl222, $loadgbl225, $loadgbl226, $loadgbl227, $loadgbl229, $loadgbl230, $compareres233, $loadgbl234, $compareres237, $loadgbl238, $str239, $compareres237, $loadgbl238, $str239, $call240, $loadgbl243, $loadgbl244, $loadgbl246, $loadgbl247, $loadgbl246, $loadgbl247, $call248, $binop249, $loadgbl256, $loadgbl258, $compareres262;
/*  1488 */         var $wakeFromSuspension = function() {
/*  1489 */             var susp = $scope175.$wakingSuspension;
/*  1490 */             delete $scope175.$wakingSuspension;
/*  1491 */             $blk = susp.$blk;
/*  1492 */             $loc = susp.$loc;
/*  1493 */             $gbl = susp.$gbl;
/*  1494 */             $exc = susp.$exc;
/*  1495 */             $err = susp.$err;
/*  1496 */             $postfinally = susp.$postfinally;
/*  1497 */             $currLineNo = susp.$lineno;
/*  1498 */             $currColNo = susp.$colno;
/*  1499 */             Sk.lastYield = Date.now();
/*  1500 */             CharIndex = susp.$tmps.CharIndex;
/*  1501 */             EnumLoc = susp.$tmps.EnumLoc;
/*  1502 */             IntLoc1 = susp.$tmps.IntLoc1;
/*  1503 */             IntLoc2 = susp.$tmps.IntLoc2;
/*  1504 */             IntLoc3 = susp.$tmps.IntLoc3;
/*  1505 */             String1Loc = susp.$tmps.String1Loc;
/*  1506 */             String2Loc = susp.$tmps.String2Loc;
/*  1507 */             benchtime = susp.$tmps.benchtime;
/*  1508 */             i = susp.$tmps.i;
/*  1509 */             loops = susp.$tmps.loops;
/*  1510 */             loopsPerBenchtime = susp.$tmps.loopsPerBenchtime;
/*  1511 */             nulltime = susp.$tmps.nulltime;
/*  1512 */             starttime = susp.$tmps.starttime;
/*  1513 */             $loadgbl177 = susp.$tmps.$loadgbl177;
/*  1514 */             $loadgbl179 = susp.$tmps.$loadgbl179;
/*  1515 */             $iter181 = susp.$tmps.$iter181;
/*  1516 */             $call180 = susp.$tmps.$call180;
/*  1517 */             $loadgbl183 = susp.$tmps.$loadgbl183;
/*  1518 */             $loadgbl186 = susp.$tmps.$loadgbl186;
/*  1519 */             $loadgbl188 = susp.$tmps.$loadgbl188;
/*  1520 */             $loadgbl190 = susp.$tmps.$loadgbl190;
/*  1521 */             $loadgbl191 = susp.$tmps.$loadgbl191;
/*  1522 */             $loadgbl192 = susp.$tmps.$loadgbl192;
/*  1523 */             $loadgbl193 = susp.$tmps.$loadgbl193;
/*  1524 */             $loadgbl194 = susp.$tmps.$loadgbl194;
/*  1525 */             $loadgbl195 = susp.$tmps.$loadgbl195;
/*  1526 */             $loadgbl196 = susp.$tmps.$loadgbl196;
/*  1527 */             $str197 = susp.$tmps.$str197;
/*  1528 */             $loadgbl198 = susp.$tmps.$loadgbl198;
/*  1529 */             $loadgbl200 = susp.$tmps.$loadgbl200;
/*  1530 */             $lsubscr201 = susp.$tmps.$lsubscr201;
/*  1531 */             $loadgbl202 = susp.$tmps.$loadgbl202;
/*  1532 */             $loadgbl204 = susp.$tmps.$loadgbl204;
/*  1533 */             $iter206 = susp.$tmps.$iter206;
/*  1534 */             $call205 = susp.$tmps.$call205;
/*  1535 */             $loadgbl208 = susp.$tmps.$loadgbl208;
/*  1536 */             $loadgbl210 = susp.$tmps.$loadgbl210;
/*  1537 */             $loadgbl214 = susp.$tmps.$loadgbl214;
/*  1538 */             $compareres217 = susp.$tmps.$compareres217;
/*  1539 */             $loadgbl222 = susp.$tmps.$loadgbl222;
/*  1540 */             $loadgbl225 = susp.$tmps.$loadgbl225;
/*  1541 */             $loadgbl226 = susp.$tmps.$loadgbl226;
/*  1542 */             $loadgbl227 = susp.$tmps.$loadgbl227;
/*  1543 */             $loadgbl229 = susp.$tmps.$loadgbl229;
/*  1544 */             $loadgbl230 = susp.$tmps.$loadgbl230;
/*  1545 */             $compareres233 = susp.$tmps.$compareres233;
/*  1546 */             $loadgbl234 = susp.$tmps.$loadgbl234;
/*  1547 */             $compareres237 = susp.$tmps.$compareres237;
/*  1548 */             $loadgbl238 = susp.$tmps.$loadgbl238;
/*  1549 */             $str239 = susp.$tmps.$str239;
/*  1550 */             $call240 = susp.$tmps.$call240;
/*  1551 */             $loadgbl243 = susp.$tmps.$loadgbl243;
/*  1552 */             $loadgbl244 = susp.$tmps.$loadgbl244;
/*  1553 */             $loadgbl246 = susp.$tmps.$loadgbl246;
/*  1554 */             $loadgbl247 = susp.$tmps.$loadgbl247;
/*  1555 */             $call248 = susp.$tmps.$call248;
/*  1556 */             $binop249 = susp.$tmps.$binop249;
/*  1557 */             $loadgbl256 = susp.$tmps.$loadgbl256;
/*  1558 */             $loadgbl258 = susp.$tmps.$loadgbl258;
/*  1559 */             $compareres262 = susp.$tmps.$compareres262;
/*  1560 */             try {
/*  1561 */                 $ret = susp.child.resume();
/*  1562 */             } catch (err) {
/*  1563 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1564 */                     err = new Sk.builtin.ExternalError(err);
/*  1565 */                 }
/*  1566 */                 err.traceback.push({
/*  1567 */                     lineno: $currLineNo,
/*  1568 */                     colno: $currColNo,
/*  1569 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  1570 */                 });
/*  1571 */                 if ($exc.length > 0) {
/*  1572 */                     $err = err;
/*  1573 */                     $blk = $exc.pop();
/*  1574 */                 } else {
/*  1575 */                     throw err;
/*  1576 */                 }
/*  1577 */             }
/*  1578 */         };
/*  1579 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1580 */             var susp = new Sk.misceval.Suspension();
/*  1581 */             susp.child = $child;
/*  1582 */             susp.resume = function() {
/*  1583 */                 $scope175.$wakingSuspension = susp;
/*  1584 */                 return $scope175();
/*  1585 */             };
/*  1586 */             susp.data = susp.child.data;
/*  1587 */             susp.$blk = $blk;
/*  1588 */             susp.$loc = $loc;
/*  1589 */             susp.$gbl = $gbl;
/*  1590 */             susp.$exc = $exc;
/*  1591 */             susp.$err = $err;
/*  1592 */             susp.$postfinally = $postfinally;
/*  1593 */             susp.$filename = $filename;
/*  1594 */             susp.$lineno = $lineno;
/*  1595 */             susp.$colno = $colno;
/*  1596 */             susp.optional = susp.child.optional;
/*  1597 */             susp.$tmps = {
/*  1598 */                 "CharIndex": CharIndex,
/*  1599 */                 "EnumLoc": EnumLoc,
/*  1600 */                 "IntLoc1": IntLoc1,
/*  1601 */                 "IntLoc2": IntLoc2,
/*  1602 */                 "IntLoc3": IntLoc3,
/*  1603 */                 "String1Loc": String1Loc,
/*  1604 */                 "String2Loc": String2Loc,
/*  1605 */                 "benchtime": benchtime,
/*  1606 */                 "i": i,
/*  1607 */                 "loops": loops,
/*  1608 */                 "loopsPerBenchtime": loopsPerBenchtime,
/*  1609 */                 "nulltime": nulltime,
/*  1610 */                 "starttime": starttime,
/*  1611 */                 "$loadgbl177": $loadgbl177,
/*  1612 */                 "$loadgbl179": $loadgbl179,
/*  1613 */                 "$iter181": $iter181,
/*  1614 */                 "$call180": $call180,
/*  1615 */                 "$loadgbl183": $loadgbl183,
/*  1616 */                 "$loadgbl186": $loadgbl186,
/*  1617 */                 "$loadgbl188": $loadgbl188,
/*  1618 */                 "$loadgbl190": $loadgbl190,
/*  1619 */                 "$loadgbl191": $loadgbl191,
/*  1620 */                 "$loadgbl192": $loadgbl192,
/*  1621 */                 "$loadgbl193": $loadgbl193,
/*  1622 */                 "$loadgbl194": $loadgbl194,
/*  1623 */                 "$loadgbl195": $loadgbl195,
/*  1624 */                 "$loadgbl196": $loadgbl196,
/*  1625 */                 "$str197": $str197,
/*  1626 */                 "$loadgbl198": $loadgbl198,
/*  1627 */                 "$loadgbl200": $loadgbl200,
/*  1628 */                 "$lsubscr201": $lsubscr201,
/*  1629 */                 "$loadgbl202": $loadgbl202,
/*  1630 */                 "$loadgbl204": $loadgbl204,
/*  1631 */                 "$iter206": $iter206,
/*  1632 */                 "$call205": $call205,
/*  1633 */                 "$loadgbl208": $loadgbl208,
/*  1634 */                 "$loadgbl210": $loadgbl210,
/*  1635 */                 "$loadgbl214": $loadgbl214,
/*  1636 */                 "$compareres217": $compareres217,
/*  1637 */                 "$loadgbl222": $loadgbl222,
/*  1638 */                 "$loadgbl225": $loadgbl225,
/*  1639 */                 "$loadgbl226": $loadgbl226,
/*  1640 */                 "$loadgbl227": $loadgbl227,
/*  1641 */                 "$loadgbl229": $loadgbl229,
/*  1642 */                 "$loadgbl230": $loadgbl230,
/*  1643 */                 "$compareres233": $compareres233,
/*  1644 */                 "$loadgbl234": $loadgbl234,
/*  1645 */                 "$compareres237": $compareres237,
/*  1646 */                 "$loadgbl238": $loadgbl238,
/*  1647 */                 "$str239": $str239,
/*  1648 */                 "$call240": $call240,
/*  1649 */                 "$loadgbl243": $loadgbl243,
/*  1650 */                 "$loadgbl244": $loadgbl244,
/*  1651 */                 "$loadgbl246": $loadgbl246,
/*  1652 */                 "$loadgbl247": $loadgbl247,
/*  1653 */                 "$call248": $call248,
/*  1654 */                 "$binop249": $binop249,
/*  1655 */                 "$loadgbl256": $loadgbl256,
/*  1656 */                 "$loadgbl258": $loadgbl258,
/*  1657 */                 "$compareres262": $compareres262
/*  1658 */             };
/*  1659 */             return susp;
/*  1660 */         };
/*  1661 */         var $blk = 0,
/*  1662 */             $exc = [],
/*  1663 */             $loc = {},
/*  1664 */             $gbl = this,
/*  1665 */             $err = undefined,
/*  1666 */             $ret = undefined,
/*  1667 */             $postfinally = undefined,
/*  1668 */             $currLineNo = undefined,
/*  1669 */             $currColNo = undefined;
/*  1670 */         if (typeof Sk.execStart === 'undefined') {
/*  1671 */             Sk.execStart = Date.now()
/*  1672 */         }
/*  1673 */         if (typeof Sk.lastYield === 'undefined') {
/*  1674 */             Sk.lastYield = Date.now()
/*  1675 */         }
/*  1676 */         if ($scope175.$wakingSuspension !== undefined) {
/*  1677 */             $wakeFromSuspension();
/*  1678 */         } else {
/*  1679 */             if (loops === undefined) loops = $scope175.$defaults[0];
/*  1680 */             Sk.builtin.pyCheckArgs("Proc0", arguments, 0, 1, false, false);
/*  1681 */         }
/*  1682 */         while (true) {
/*  1683 */             try {
/*  1684 */                 var $dateNow = Date.now();
/*  1685 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1686 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1687 */                 }
/*  1688 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1689 */                     var $susp = $saveSuspension({
/*  1690 */                         data: {
/*  1691 */                             type: 'Sk.yield'
/*  1692 */                         },
/*  1693 */                         resume: function() {}
/*  1694 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  1695 */                     $susp.$blk = $blk;
/*  1696 */                     $susp.optional = true;
/*  1697 */                     return $susp;
/*  1698 */                 }
/*  1699 */                 switch ($blk) {
/*  1700 */                 case 0:
/*  1701 */                     /* --- codeobj entry --- */
/*  1702 */                     if (loops === undefined) {
/*  1703 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1704 */                     }
/*  1705 */                     if (loops === undefined) {
/*  1706 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1707 */                     }
/*  1708 */ 
/*  1709 */                     //
/*  1710 */                     // line 80:
/*  1711 */                     //     global IntGlob
/*  1712 */                     //     ^
/*  1713 */                     //
/*  1714 */                     $currLineNo = 80;
/*  1715 */                     $currColNo = 4;
/*  1716 */ 
/*  1717 */ 
/*  1718 */                     //
/*  1719 */                     // line 81:
/*  1720 */                     //     global BoolGlob
/*  1721 */                     //     ^
/*  1722 */                     //
/*  1723 */                     $currLineNo = 81;
/*  1724 */                     $currColNo = 4;
/*  1725 */ 
/*  1726 */ 
/*  1727 */                     //
/*  1728 */                     // line 82:
/*  1729 */                     //     global Char1Glob
/*  1730 */                     //     ^
/*  1731 */                     //
/*  1732 */                     $currLineNo = 82;
/*  1733 */                     $currColNo = 4;
/*  1734 */ 
/*  1735 */ 
/*  1736 */                     //
/*  1737 */                     // line 83:
/*  1738 */                     //     global Char2Glob
/*  1739 */                     //     ^
/*  1740 */                     //
/*  1741 */                     $currLineNo = 83;
/*  1742 */                     $currColNo = 4;
/*  1743 */ 
/*  1744 */ 
/*  1745 */                     //
/*  1746 */                     // line 84:
/*  1747 */                     //     global Array1Glob
/*  1748 */                     //     ^
/*  1749 */                     //
/*  1750 */                     $currLineNo = 84;
/*  1751 */                     $currColNo = 4;
/*  1752 */ 
/*  1753 */ 
/*  1754 */                     //
/*  1755 */                     // line 85:
/*  1756 */                     //     global Array2Glob
/*  1757 */                     //     ^
/*  1758 */                     //
/*  1759 */                     $currLineNo = 85;
/*  1760 */                     $currColNo = 4;
/*  1761 */ 
/*  1762 */ 
/*  1763 */                     //
/*  1764 */                     // line 86:
/*  1765 */                     //     global PtrGlb
/*  1766 */                     //     ^
/*  1767 */                     //
/*  1768 */                     $currLineNo = 86;
/*  1769 */                     $currColNo = 4;
/*  1770 */ 
/*  1771 */ 
/*  1772 */                     //
/*  1773 */                     // line 87:
/*  1774 */                     //     global PtrGlbNext
/*  1775 */                     //     ^
/*  1776 */                     //
/*  1777 */                     $currLineNo = 87;
/*  1778 */                     $currColNo = 4;
/*  1779 */ 
/*  1780 */ 
/*  1781 */                     //
/*  1782 */                     // line 89:
/*  1783 */                     //     starttime = time()
/*  1784 */                     //     ^
/*  1785 */                     //
/*  1786 */                     $currLineNo = 89;
/*  1787 */                     $currColNo = 4;
/*  1788 */ 
/*  1789 */                     var $loadgbl177 = Sk.misceval.loadname('time', $gbl);
/*  1790 */                     $ret;
/*  1791 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl177);
/*  1792 */                     $blk = 1; /* allowing case fallthrough */
/*  1793 */                 case 1:
/*  1794 */                     /* --- function return or resume suspension --- */
/*  1795 */                     if ($ret && $ret.$isSuspension) {
/*  1796 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 89, 16);
/*  1797 */                     }
/*  1798 */                     var $call178 = $ret;
/*  1799 */                     //
/*  1800 */                     // line 89:
/*  1801 */                     //     starttime = time()
/*  1802 */                     //                 ^
/*  1803 */                     //
/*  1804 */                     $currLineNo = 89;
/*  1805 */                     $currColNo = 16;
/*  1806 */ 
/*  1807 */                     starttime = $call178;
/*  1808 */                     //
/*  1809 */                     // line 90:
/*  1810 */                     //     for i in range(loops):
/*  1811 */                     //     ^
/*  1812 */                     //
/*  1813 */                     $currLineNo = 90;
/*  1814 */                     $currColNo = 4;
/*  1815 */ 
/*  1816 */                     var $loadgbl179 = Sk.misceval.loadname('range', $gbl);
/*  1817 */                     if (loops === undefined) {
/*  1818 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  1819 */                     }
/*  1820 */                     $ret;
/*  1821 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl179, loops);
/*  1822 */                     $blk = 5; /* allowing case fallthrough */
/*  1823 */                 case 5:
/*  1824 */                     /* --- function return or resume suspension --- */
/*  1825 */                     if ($ret && $ret.$isSuspension) {
/*  1826 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 90, 13);
/*  1827 */                     }
/*  1828 */                     var $call180 = $ret;
/*  1829 */                     //
/*  1830 */                     // line 90:
/*  1831 */                     //     for i in range(loops):
/*  1832 */                     //              ^
/*  1833 */                     //
/*  1834 */                     $currLineNo = 90;
/*  1835 */                     $currColNo = 13;
/*  1836 */ 
/*  1837 */                     var $iter181 = Sk.abstr.iter($call180);
/*  1838 */                     $blk = 2; /* allowing case fallthrough */
/*  1839 */                 case 2:
/*  1840 */                     /* --- for start --- */
/*  1841 */                     $ret = Sk.abstr.iternext($iter181, true);
/*  1842 */                     $blk = 6; /* allowing case fallthrough */
/*  1843 */                 case 6:
/*  1844 */                     /* --- function return or resume suspension --- */
/*  1845 */                     if ($ret && $ret.$isSuspension) {
/*  1846 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 90, 4);
/*  1847 */                     }
/*  1848 */                     var $next182 = $ret;
/*  1849 */                     if ($next182 === undefined) {
/*  1850 */                         $blk = 3;
/*  1851 */                         continue;
/*  1852 */                     }
/*  1853 */                     i = $next182;
/*  1854 */                     //
/*  1855 */                     // line 91:
/*  1856 */                     //         pass
/*  1857 */                     //         ^
/*  1858 */                     //
/*  1859 */                     $currLineNo = 91;
/*  1860 */                     $currColNo = 8;
/*  1861 */ 
/*  1862 */                     $blk = 2; /* jump */
/*  1863 */                     continue;
/*  1864 */                 case 3:
/*  1865 */                     /* --- for cleanup --- */
/*  1866 */                     $blk = 4; /* allowing case fallthrough */
/*  1867 */                 case 4:
/*  1868 */                     /* --- for end --- */
/*  1869 */                     //
/*  1870 */                     // line 92:
/*  1871 */                     //     nulltime = time() - starttime
/*  1872 */                     //     ^
/*  1873 */                     //
/*  1874 */                     $currLineNo = 92;
/*  1875 */                     $currColNo = 4;
/*  1876 */ 
/*  1877 */                     var $loadgbl183 = Sk.misceval.loadname('time', $gbl);
/*  1878 */                     $ret;
/*  1879 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl183);
/*  1880 */                     $blk = 7; /* allowing case fallthrough */
/*  1881 */                 case 7:
/*  1882 */                     /* --- function return or resume suspension --- */
/*  1883 */                     if ($ret && $ret.$isSuspension) {
/*  1884 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 92, 15);
/*  1885 */                     }
/*  1886 */                     var $call184 = $ret;
/*  1887 */                     //
/*  1888 */                     // line 92:
/*  1889 */                     //     nulltime = time() - starttime
/*  1890 */                     //                ^
/*  1891 */                     //
/*  1892 */                     $currLineNo = 92;
/*  1893 */                     $currColNo = 15;
/*  1894 */ 
/*  1895 */                     if (starttime === undefined) {
/*  1896 */                         throw new Sk.builtin.UnboundLocalError('local variable \'starttime\' referenced before assignment');
/*  1897 */                     }
/*  1898 */                     var $binop185 = Sk.abstr.numberBinOp($call184, starttime, 'Sub');
/*  1899 */                     nulltime = $binop185;
/*  1900 */                     //
/*  1901 */                     // line 94:
/*  1902 */                     //     PtrGlbNext = Record()
/*  1903 */                     //     ^
/*  1904 */                     //
/*  1905 */                     $currLineNo = 94;
/*  1906 */                     $currColNo = 4;
/*  1907 */ 
/*  1908 */                     var $loadgbl186 = Sk.misceval.loadname('Record', $gbl);
/*  1909 */                     $ret;
/*  1910 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl186);
/*  1911 */                     $blk = 8; /* allowing case fallthrough */
/*  1912 */                 case 8:
/*  1913 */                     /* --- function return or resume suspension --- */
/*  1914 */                     if ($ret && $ret.$isSuspension) {
/*  1915 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 94, 17);
/*  1916 */                     }
/*  1917 */                     var $call187 = $ret;
/*  1918 */                     //
/*  1919 */                     // line 94:
/*  1920 */                     //     PtrGlbNext = Record()
/*  1921 */                     //                  ^
/*  1922 */                     //
/*  1923 */                     $currLineNo = 94;
/*  1924 */                     $currColNo = 17;
/*  1925 */ 
/*  1926 */                     $gbl.PtrGlbNext = $call187;
/*  1927 */                     //
/*  1928 */                     // line 95:
/*  1929 */                     //     PtrGlb = Record()
/*  1930 */                     //     ^
/*  1931 */                     //
/*  1932 */                     $currLineNo = 95;
/*  1933 */                     $currColNo = 4;
/*  1934 */ 
/*  1935 */                     var $loadgbl188 = Sk.misceval.loadname('Record', $gbl);
/*  1936 */                     $ret;
/*  1937 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl188);
/*  1938 */                     $blk = 9; /* allowing case fallthrough */
/*  1939 */                 case 9:
/*  1940 */                     /* --- function return or resume suspension --- */
/*  1941 */                     if ($ret && $ret.$isSuspension) {
/*  1942 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 95, 13);
/*  1943 */                     }
/*  1944 */                     var $call189 = $ret;
/*  1945 */                     //
/*  1946 */                     // line 95:
/*  1947 */                     //     PtrGlb = Record()
/*  1948 */                     //              ^
/*  1949 */                     //
/*  1950 */                     $currLineNo = 95;
/*  1951 */                     $currColNo = 13;
/*  1952 */ 
/*  1953 */                     $gbl.PtrGlb = $call189;
/*  1954 */                     //
/*  1955 */                     // line 96:
/*  1956 */                     //     PtrGlb.PtrComp = PtrGlbNext
/*  1957 */                     //     ^
/*  1958 */                     //
/*  1959 */                     $currLineNo = 96;
/*  1960 */                     $currColNo = 4;
/*  1961 */ 
/*  1962 */                     var $loadgbl190 = Sk.misceval.loadname('PtrGlbNext', $gbl);
/*  1963 */                     var $loadgbl191 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1964 */                     $ret = Sk.abstr.sattr($loadgbl191, 'PtrComp', $loadgbl190, true);
/*  1965 */                     $blk = 10; /* allowing case fallthrough */
/*  1966 */                 case 10:
/*  1967 */                     /* --- function return or resume suspension --- */
/*  1968 */                     if ($ret && $ret.$isSuspension) {
/*  1969 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 96, 4);
/*  1970 */                     }
/*  1971 */                     //
/*  1972 */                     // line 97:
/*  1973 */                     //     PtrGlb.Discr = Ident1
/*  1974 */                     //     ^
/*  1975 */                     //
/*  1976 */                     $currLineNo = 97;
/*  1977 */                     $currColNo = 4;
/*  1978 */ 
/*  1979 */                     var $loadgbl192 = Sk.misceval.loadname('Ident1', $gbl);
/*  1980 */                     var $loadgbl193 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1981 */                     $ret = Sk.abstr.sattr($loadgbl193, 'Discr', $loadgbl192, true);
/*  1982 */                     $blk = 11; /* allowing case fallthrough */
/*  1983 */                 case 11:
/*  1984 */                     /* --- function return or resume suspension --- */
/*  1985 */                     if ($ret && $ret.$isSuspension) {
/*  1986 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 97, 4);
/*  1987 */                     }
/*  1988 */                     //
/*  1989 */                     // line 98:
/*  1990 */                     //     PtrGlb.EnumComp = Ident3
/*  1991 */                     //     ^
/*  1992 */                     //
/*  1993 */                     $currLineNo = 98;
/*  1994 */                     $currColNo = 4;
/*  1995 */ 
/*  1996 */                     var $loadgbl194 = Sk.misceval.loadname('Ident3', $gbl);
/*  1997 */                     var $loadgbl195 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  1998 */                     $ret = Sk.abstr.sattr($loadgbl195, 'EnumComp', $loadgbl194, true);
/*  1999 */                     $blk = 12; /* allowing case fallthrough */
/*  2000 */                 case 12:
/*  2001 */                     /* --- function return or resume suspension --- */
/*  2002 */                     if ($ret && $ret.$isSuspension) {
/*  2003 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 98, 4);
/*  2004 */                     }
/*  2005 */                     //
/*  2006 */                     // line 99:
/*  2007 */                     //     PtrGlb.IntComp = 40
/*  2008 */                     //     ^
/*  2009 */                     //
/*  2010 */                     $currLineNo = 99;
/*  2011 */                     $currColNo = 4;
/*  2012 */ 
/*  2013 */                     var $loadgbl196 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  2014 */                     $ret = Sk.abstr.sattr($loadgbl196, 'IntComp', new Sk.builtin.int_(40), true);
/*  2015 */                     $blk = 13; /* allowing case fallthrough */
/*  2016 */                 case 13:
/*  2017 */                     /* --- function return or resume suspension --- */
/*  2018 */                     if ($ret && $ret.$isSuspension) {
/*  2019 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 99, 4);
/*  2020 */                     }
/*  2021 */                     //
/*  2022 */                     // line 100:
/*  2023 */                     //     PtrGlb.StringComp = "DHRYSTONE PROGRAM, SOME STRING"
/*  2024 */                     //     ^
/*  2025 */                     //
/*  2026 */                     $currLineNo = 100;
/*  2027 */                     $currColNo = 4;
/*  2028 */ 
/*  2029 */                     var $str197 = new Sk.builtins['str']('DHRYSTONE PROGRAM, SOME STRING');
/*  2030 */                     var $loadgbl198 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  2031 */                     $ret = Sk.abstr.sattr($loadgbl198, 'StringComp', $str197, true);
/*  2032 */                     $blk = 14; /* allowing case fallthrough */
/*  2033 */                 case 14:
/*  2034 */                     /* --- function return or resume suspension --- */
/*  2035 */                     if ($ret && $ret.$isSuspension) {
/*  2036 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 100, 4);
/*  2037 */                     }
/*  2038 */                     //
/*  2039 */                     // line 101:
/*  2040 */                     //     String1Loc = "DHRYSTONE PROGRAM, 1'ST STRING"
/*  2041 */                     //     ^
/*  2042 */                     //
/*  2043 */                     $currLineNo = 101;
/*  2044 */                     $currColNo = 4;
/*  2045 */ 
/*  2046 */                     var $str199 = new Sk.builtins['str']("DHRYSTONE PROGRAM, 1'ST STRING");
/*  2047 */                     String1Loc = $str199;
/*  2048 */                     //
/*  2049 */                     // line 102:
/*  2050 */                     //     Array2Glob[8][7] = 10
/*  2051 */                     //     ^
/*  2052 */                     //
/*  2053 */                     $currLineNo = 102;
/*  2054 */                     $currColNo = 4;
/*  2055 */ 
/*  2056 */                     var $loadgbl200 = Sk.misceval.loadname('Array2Glob', $gbl);
/*  2057 */                     $ret = Sk.abstr.objectGetItem($loadgbl200, new Sk.builtin.int_(8), true);
/*  2058 */                     $blk = 15; /* allowing case fallthrough */
/*  2059 */                 case 15:
/*  2060 */                     /* --- function return or resume suspension --- */
/*  2061 */                     if ($ret && $ret.$isSuspension) {
/*  2062 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  2063 */                     }
/*  2064 */                     var $lsubscr201 = $ret;
/*  2065 */                     $ret = Sk.abstr.objectSetItem($lsubscr201, new Sk.builtin.int_(7), new Sk.builtin.int_(10), true);
/*  2066 */                     $blk = 16; /* allowing case fallthrough */
/*  2067 */                 case 16:
/*  2068 */                     /* --- function return or resume suspension --- */
/*  2069 */                     if ($ret && $ret.$isSuspension) {
/*  2070 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  2071 */                     }
/*  2072 */                     //
/*  2073 */                     // line 104:
/*  2074 */                     //     starttime = time()
/*  2075 */                     //     ^
/*  2076 */                     //
/*  2077 */                     $currLineNo = 104;
/*  2078 */                     $currColNo = 4;
/*  2079 */ 
/*  2080 */                     var $loadgbl202 = Sk.misceval.loadname('time', $gbl);
/*  2081 */                     $ret;
/*  2082 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl202);
/*  2083 */                     $blk = 17; /* allowing case fallthrough */
/*  2084 */                 case 17:
/*  2085 */                     /* --- function return or resume suspension --- */
/*  2086 */                     if ($ret && $ret.$isSuspension) {
/*  2087 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 104, 16);
/*  2088 */                     }
/*  2089 */                     var $call203 = $ret;
/*  2090 */                     //
/*  2091 */                     // line 104:
/*  2092 */                     //     starttime = time()
/*  2093 */                     //                 ^
/*  2094 */                     //
/*  2095 */                     $currLineNo = 104;
/*  2096 */                     $currColNo = 16;
/*  2097 */ 
/*  2098 */                     starttime = $call203;
/*  2099 */                     //
/*  2100 */                     // line 106:
/*  2101 */                     //     for i in range(loops):
/*  2102 */                     //     ^
/*  2103 */                     //
/*  2104 */                     $currLineNo = 106;
/*  2105 */                     $currColNo = 4;
/*  2106 */ 
/*  2107 */                     var $loadgbl204 = Sk.misceval.loadname('range', $gbl);
/*  2108 */                     if (loops === undefined) {
/*  2109 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  2110 */                     }
/*  2111 */                     $ret;
/*  2112 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl204, loops);
/*  2113 */                     $blk = 21; /* allowing case fallthrough */
/*  2114 */                 case 21:
/*  2115 */                     /* --- function return or resume suspension --- */
/*  2116 */                     if ($ret && $ret.$isSuspension) {
/*  2117 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 106, 13);
/*  2118 */                     }
/*  2119 */                     var $call205 = $ret;
/*  2120 */                     //
/*  2121 */                     // line 106:
/*  2122 */                     //     for i in range(loops):
/*  2123 */                     //              ^
/*  2124 */                     //
/*  2125 */                     $currLineNo = 106;
/*  2126 */                     $currColNo = 13;
/*  2127 */ 
/*  2128 */                     var $iter206 = Sk.abstr.iter($call205);
/*  2129 */                     $blk = 18; /* allowing case fallthrough */
/*  2130 */                 case 18:
/*  2131 */                     /* --- for start --- */
/*  2132 */                     $ret = Sk.abstr.iternext($iter206, true);
/*  2133 */                     $blk = 22; /* allowing case fallthrough */
/*  2134 */                 case 22:
/*  2135 */                     /* --- function return or resume suspension --- */
/*  2136 */                     if ($ret && $ret.$isSuspension) {
/*  2137 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 106, 4);
/*  2138 */                     }
/*  2139 */                     var $next207 = $ret;
/*  2140 */                     if ($next207 === undefined) {
/*  2141 */                         $blk = 19;
/*  2142 */                         continue;
/*  2143 */                     }
/*  2144 */                     i = $next207;
/*  2145 */                     //
/*  2146 */                     // line 107:
/*  2147 */                     //         Proc5()
/*  2148 */                     //         ^
/*  2149 */                     //
/*  2150 */                     $currLineNo = 107;
/*  2151 */                     $currColNo = 8;
/*  2152 */ 
/*  2153 */                     var $loadgbl208 = Sk.misceval.loadname('Proc5', $gbl);
/*  2154 */                     $ret;
/*  2155 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl208);
/*  2156 */                     $blk = 23; /* allowing case fallthrough */
/*  2157 */                 case 23:
/*  2158 */                     /* --- function return or resume suspension --- */
/*  2159 */                     if ($ret && $ret.$isSuspension) {
/*  2160 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 107, 8);
/*  2161 */                     }
/*  2162 */                     var $call209 = $ret;
/*  2163 */                     //
/*  2164 */                     // line 107:
/*  2165 */                     //         Proc5()
/*  2166 */                     //         ^
/*  2167 */                     //
/*  2168 */                     $currLineNo = 107;
/*  2169 */                     $currColNo = 8;
/*  2170 */ 
/*  2171 */ 
/*  2172 */                     //
/*  2173 */                     // line 108:
/*  2174 */                     //         Proc4()
/*  2175 */                     //         ^
/*  2176 */                     //
/*  2177 */                     $currLineNo = 108;
/*  2178 */                     $currColNo = 8;
/*  2179 */ 
/*  2180 */                     var $loadgbl210 = Sk.misceval.loadname('Proc4', $gbl);
/*  2181 */                     $ret;
/*  2182 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl210);
/*  2183 */                     $blk = 24; /* allowing case fallthrough */
/*  2184 */                 case 24:
/*  2185 */                     /* --- function return or resume suspension --- */
/*  2186 */                     if ($ret && $ret.$isSuspension) {
/*  2187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 108, 8);
/*  2188 */                     }
/*  2189 */                     var $call211 = $ret;
/*  2190 */                     //
/*  2191 */                     // line 108:
/*  2192 */                     //         Proc4()
/*  2193 */                     //         ^
/*  2194 */                     //
/*  2195 */                     $currLineNo = 108;
/*  2196 */                     $currColNo = 8;
/*  2197 */ 
/*  2198 */ 
/*  2199 */                     //
/*  2200 */                     // line 109:
/*  2201 */                     //         IntLoc1 = 2
/*  2202 */                     //         ^
/*  2203 */                     //
/*  2204 */                     $currLineNo = 109;
/*  2205 */                     $currColNo = 8;
/*  2206 */ 
/*  2207 */                     IntLoc1 = new Sk.builtin.int_(2);
/*  2208 */                     //
/*  2209 */                     // line 110:
/*  2210 */                     //         IntLoc2 = 3
/*  2211 */                     //         ^
/*  2212 */                     //
/*  2213 */                     $currLineNo = 110;
/*  2214 */                     $currColNo = 8;
/*  2215 */ 
/*  2216 */                     IntLoc2 = new Sk.builtin.int_(3);
/*  2217 */                     //
/*  2218 */                     // line 111:
/*  2219 */                     //         String2Loc = "DHRYSTONE PROGRAM, 2'ND STRING"
/*  2220 */                     //         ^
/*  2221 */                     //
/*  2222 */                     $currLineNo = 111;
/*  2223 */                     $currColNo = 8;
/*  2224 */ 
/*  2225 */                     var $str212 = new Sk.builtins['str']("DHRYSTONE PROGRAM, 2'ND STRING");
/*  2226 */                     String2Loc = $str212;
/*  2227 */                     //
/*  2228 */                     // line 112:
/*  2229 */                     //         EnumLoc = Ident2
/*  2230 */                     //         ^
/*  2231 */                     //
/*  2232 */                     $currLineNo = 112;
/*  2233 */                     $currColNo = 8;
/*  2234 */ 
/*  2235 */                     var $loadgbl213 = Sk.misceval.loadname('Ident2', $gbl);
/*  2236 */                     EnumLoc = $loadgbl213;
/*  2237 */                     //
/*  2238 */                     // line 113:
/*  2239 */                     //         BoolGlob = not Func2(String1Loc, String2Loc)
/*  2240 */                     //         ^
/*  2241 */                     //
/*  2242 */                     $currLineNo = 113;
/*  2243 */                     $currColNo = 8;
/*  2244 */ 
/*  2245 */                     var $loadgbl214 = Sk.misceval.loadname('Func2', $gbl);
/*  2246 */                     if (String1Loc === undefined) {
/*  2247 */                         throw new Sk.builtin.UnboundLocalError('local variable \'String1Loc\' referenced before assignment');
/*  2248 */                     }
/*  2249 */                     if (String2Loc === undefined) {
/*  2250 */                         throw new Sk.builtin.UnboundLocalError('local variable \'String2Loc\' referenced before assignment');
/*  2251 */                     }
/*  2252 */                     $ret;
/*  2253 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl214, String1Loc, String2Loc);
/*  2254 */                     $blk = 25; /* allowing case fallthrough */
/*  2255 */                 case 25:
/*  2256 */                     /* --- function return or resume suspension --- */
/*  2257 */                     if ($ret && $ret.$isSuspension) {
/*  2258 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 113, 23);
/*  2259 */                     }
/*  2260 */                     var $call215 = $ret;
/*  2261 */                     //
/*  2262 */                     // line 113:
/*  2263 */                     //         BoolGlob = not Func2(String1Loc, String2Loc)
/*  2264 */                     //                        ^
/*  2265 */                     //
/*  2266 */                     $currLineNo = 113;
/*  2267 */                     $currColNo = 23;
/*  2268 */ 
/*  2269 */                     var $unaryop216 = Sk.abstr.numberUnaryOp($call215, 'Not');
/*  2270 */                     $gbl.BoolGlob = $unaryop216;
/*  2271 */                     //
/*  2272 */                     // line 114:
/*  2273 */                     //         while IntLoc1 < IntLoc2:
/*  2274 */                     //         ^
/*  2275 */                     //
/*  2276 */                     $currLineNo = 114;
/*  2277 */                     $currColNo = 8;
/*  2278 */ 
/*  2279 */                     $blk = 26; /* allowing case fallthrough */
/*  2280 */                 case 26:
/*  2281 */                     /* --- while test --- */
/*  2282 */                     //
/*  2283 */                     // line 114:
/*  2284 */                     //         while IntLoc1 < IntLoc2:
/*  2285 */                     //         ^
/*  2286 */                     //
/*  2287 */                     $currLineNo = 114;
/*  2288 */                     $currColNo = 8;
/*  2289 */ 
/*  2290 */                     if (IntLoc1 === undefined) {
/*  2291 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2292 */                     }
/*  2293 */                     var $compareres217 = null;
/*  2294 */                     if (IntLoc2 === undefined) {
/*  2295 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2296 */                     }
/*  2297 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(IntLoc1, IntLoc2, 'Lt', true));
/*  2298 */                     $blk = 30; /* allowing case fallthrough */
/*  2299 */                 case 30:
/*  2300 */                     /* --- function return or resume suspension --- */
/*  2301 */                     if ($ret && $ret.$isSuspension) {
/*  2302 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 114, 14);
/*  2303 */                     }
/*  2304 */                     $compareres217 = $ret;
/*  2305 */                     var $jfalse218 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2306 */                     if ($jfalse218) { /*test failed */
/*  2307 */                         $blk = 29;
/*  2308 */                         continue;
/*  2309 */                     }
/*  2310 */                     $blk = 29; /* allowing case fallthrough */
/*  2311 */                 case 29:
/*  2312 */                     /* --- done --- */
/*  2313 */                     var $jfalse219 = ($compareres217 === false || !Sk.misceval.isTrue($compareres217));
/*  2314 */                     if ($jfalse219) { /*test failed */
/*  2315 */                         $blk = 27;
/*  2316 */                         continue;
/*  2317 */                     }
/*  2318 */                     $blk = 28; /* allowing case fallthrough */
/*  2319 */                 case 28:
/*  2320 */                     /* --- while body --- */
/*  2321 */                     //
/*  2322 */                     // line 115:
/*  2323 */                     //             IntLoc3 = 5 * IntLoc1 - IntLoc2
/*  2324 */                     //             ^
/*  2325 */                     //
/*  2326 */                     $currLineNo = 115;
/*  2327 */                     $currColNo = 12;
/*  2328 */ 
/*  2329 */                     if (IntLoc1 === undefined) {
/*  2330 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2331 */                     }
/*  2332 */                     var $binop220 = Sk.abstr.numberBinOp(new Sk.builtin.int_(5), IntLoc1, 'Mult');
/*  2333 */                     if (IntLoc2 === undefined) {
/*  2334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2335 */                     }
/*  2336 */                     var $binop221 = Sk.abstr.numberBinOp($binop220, IntLoc2, 'Sub');
/*  2337 */                     IntLoc3 = $binop221;
/*  2338 */                     //
/*  2339 */                     // line 116:
/*  2340 */                     //             IntLoc3 = Proc7(IntLoc1, IntLoc2)
/*  2341 */                     //             ^
/*  2342 */                     //
/*  2343 */                     $currLineNo = 116;
/*  2344 */                     $currColNo = 12;
/*  2345 */ 
/*  2346 */                     var $loadgbl222 = Sk.misceval.loadname('Proc7', $gbl);
/*  2347 */                     if (IntLoc1 === undefined) {
/*  2348 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2349 */                     }
/*  2350 */                     if (IntLoc2 === undefined) {
/*  2351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2352 */                     }
/*  2353 */                     $ret;
/*  2354 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl222, IntLoc1, IntLoc2);
/*  2355 */                     $blk = 31; /* allowing case fallthrough */
/*  2356 */                 case 31:
/*  2357 */                     /* --- function return or resume suspension --- */
/*  2358 */                     if ($ret && $ret.$isSuspension) {
/*  2359 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 116, 22);
/*  2360 */                     }
/*  2361 */                     var $call223 = $ret;
/*  2362 */                     //
/*  2363 */                     // line 116:
/*  2364 */                     //             IntLoc3 = Proc7(IntLoc1, IntLoc2)
/*  2365 */                     //                       ^
/*  2366 */                     //
/*  2367 */                     $currLineNo = 116;
/*  2368 */                     $currColNo = 22;
/*  2369 */ 
/*  2370 */                     IntLoc3 = $call223;
/*  2371 */                     //
/*  2372 */                     // line 117:
/*  2373 */                     //             IntLoc1 = IntLoc1 + 1
/*  2374 */                     //             ^
/*  2375 */                     //
/*  2376 */                     $currLineNo = 117;
/*  2377 */                     $currColNo = 12;
/*  2378 */ 
/*  2379 */                     if (IntLoc1 === undefined) {
/*  2380 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2381 */                     }
/*  2382 */                     var $binop224 = Sk.abstr.numberBinOp(IntLoc1, new Sk.builtin.int_(1), 'Add');
/*  2383 */                     IntLoc1 = $binop224;
/*  2384 */                     $blk = 26; /* jump */
/*  2385 */                     continue;
/*  2386 */                 case 19:
/*  2387 */                     /* --- for cleanup --- */
/*  2388 */                     $blk = 20; /* allowing case fallthrough */
/*  2389 */                 case 20:
/*  2390 */                     /* --- for end --- */
/*  2391 */                     //
/*  2392 */                     // line 130:
/*  2393 */                     //     benchtime = time() - starttime - nulltime
/*  2394 */                     //     ^
/*  2395 */                     //
/*  2396 */                     $currLineNo = 130;
/*  2397 */                     $currColNo = 4;
/*  2398 */ 
/*  2399 */                     var $loadgbl258 = Sk.misceval.loadname('time', $gbl);
/*  2400 */                     $ret;
/*  2401 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl258);
/*  2402 */                     $blk = 47; /* allowing case fallthrough */
/*  2403 */                 case 47:
/*  2404 */                     /* --- function return or resume suspension --- */
/*  2405 */                     if ($ret && $ret.$isSuspension) {
/*  2406 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 130, 16);
/*  2407 */                     }
/*  2408 */                     var $call259 = $ret;
/*  2409 */                     //
/*  2410 */                     // line 130:
/*  2411 */                     //     benchtime = time() - starttime - nulltime
/*  2412 */                     //                 ^
/*  2413 */                     //
/*  2414 */                     $currLineNo = 130;
/*  2415 */                     $currColNo = 16;
/*  2416 */ 
/*  2417 */                     if (starttime === undefined) {
/*  2418 */                         throw new Sk.builtin.UnboundLocalError('local variable \'starttime\' referenced before assignment');
/*  2419 */                     }
/*  2420 */                     var $binop260 = Sk.abstr.numberBinOp($call259, starttime, 'Sub');
/*  2421 */                     if (nulltime === undefined) {
/*  2422 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nulltime\' referenced before assignment');
/*  2423 */                     }
/*  2424 */                     var $binop261 = Sk.abstr.numberBinOp($binop260, nulltime, 'Sub');
/*  2425 */                     benchtime = $binop261;
/*  2426 */                     //
/*  2427 */                     // line 131:
/*  2428 */                     //     if benchtime == 0.0:
/*  2429 */                     //     ^
/*  2430 */                     //
/*  2431 */                     $currLineNo = 131;
/*  2432 */                     $currColNo = 4;
/*  2433 */ 
/*  2434 */                     if (benchtime === undefined) {
/*  2435 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2436 */                     }
/*  2437 */                     var $compareres262 = null;
/*  2438 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(benchtime, new Sk.builtin.float_(0), 'Eq', true));
/*  2439 */                     $blk = 51; /* allowing case fallthrough */
/*  2440 */                 case 51:
/*  2441 */                     /* --- function return or resume suspension --- */
/*  2442 */                     if ($ret && $ret.$isSuspension) {
/*  2443 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 131, 7);
/*  2444 */                     }
/*  2445 */                     $compareres262 = $ret;
/*  2446 */                     var $jfalse263 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2447 */                     if ($jfalse263) { /*test failed */
/*  2448 */                         $blk = 50;
/*  2449 */                         continue;
/*  2450 */                     }
/*  2451 */                     $blk = 50; /* allowing case fallthrough */
/*  2452 */                 case 50:
/*  2453 */                     /* --- done --- */
/*  2454 */                     var $jfalse264 = ($compareres262 === false || !Sk.misceval.isTrue($compareres262));
/*  2455 */                     if ($jfalse264) { /*test failed */
/*  2456 */                         $blk = 49;
/*  2457 */                         continue;
/*  2458 */                     }
/*  2459 */                     //
/*  2460 */                     // line 132:
/*  2461 */                     //         loopsPerBenchtime = 0.0
/*  2462 */                     //         ^
/*  2463 */                     //
/*  2464 */                     $currLineNo = 132;
/*  2465 */                     $currColNo = 8;
/*  2466 */ 
/*  2467 */                     loopsPerBenchtime = new Sk.builtin.float_(0);
/*  2468 */                     $blk = 48; /* allowing case fallthrough */
/*  2469 */                 case 48:
/*  2470 */                     /* --- end of if --- */
/*  2471 */                     //
/*  2472 */                     // line 135:
/*  2473 */                     //     return benchtime, loopsPerBenchtime
/*  2474 */                     //     ^
/*  2475 */                     //
/*  2476 */                     $currLineNo = 135;
/*  2477 */                     $currColNo = 4;
/*  2478 */ 
/*  2479 */                     if (benchtime === undefined) {
/*  2480 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2481 */                     }
/*  2482 */                     var $elem266 = benchtime;
/*  2483 */                     if (loopsPerBenchtime === undefined) {
/*  2484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loopsPerBenchtime\' referenced before assignment');
/*  2485 */                     }
/*  2486 */                     var $elem267 = loopsPerBenchtime;
/*  2487 */                     var $loadtuple268 = new Sk.builtins['tuple']([$elem266, $elem267]);
/*  2488 */                     return $loadtuple268;
/*  2489 */                     return Sk.builtin.none.none$;
/*  2490 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2491 */                 case 27:
/*  2492 */                     /* --- after while --- */
/*  2493 */                     //
/*  2494 */                     // line 118:
/*  2495 */                     //         Proc8(Array1Glob, Array2Glob, IntLoc1, IntLoc3)
/*  2496 */                     //         ^
/*  2497 */                     //
/*  2498 */                     $currLineNo = 118;
/*  2499 */                     $currColNo = 8;
/*  2500 */ 
/*  2501 */                     var $loadgbl225 = Sk.misceval.loadname('Proc8', $gbl);
/*  2502 */                     var $loadgbl226 = Sk.misceval.loadname('Array1Glob', $gbl);
/*  2503 */                     var $loadgbl227 = Sk.misceval.loadname('Array2Glob', $gbl);
/*  2504 */                     if (IntLoc1 === undefined) {
/*  2505 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2506 */                     }
/*  2507 */                     if (IntLoc3 === undefined) {
/*  2508 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2509 */                     }
/*  2510 */                     $ret;
/*  2511 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl225, $loadgbl226, $loadgbl227, IntLoc1, IntLoc3);
/*  2512 */                     $blk = 32; /* allowing case fallthrough */
/*  2513 */                 case 32:
/*  2514 */                     /* --- function return or resume suspension --- */
/*  2515 */                     if ($ret && $ret.$isSuspension) {
/*  2516 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 118, 8);
/*  2517 */                     }
/*  2518 */                     var $call228 = $ret;
/*  2519 */                     //
/*  2520 */                     // line 118:
/*  2521 */                     //         Proc8(Array1Glob, Array2Glob, IntLoc1, IntLoc3)
/*  2522 */                     //         ^
/*  2523 */                     //
/*  2524 */                     $currLineNo = 118;
/*  2525 */                     $currColNo = 8;
/*  2526 */ 
/*  2527 */ 
/*  2528 */                     //
/*  2529 */                     // line 119:
/*  2530 */                     //         PtrGlb = Proc1(PtrGlb)
/*  2531 */                     //         ^
/*  2532 */                     //
/*  2533 */                     $currLineNo = 119;
/*  2534 */                     $currColNo = 8;
/*  2535 */ 
/*  2536 */                     var $loadgbl229 = Sk.misceval.loadname('Proc1', $gbl);
/*  2537 */                     var $loadgbl230 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  2538 */                     $ret;
/*  2539 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl229, $loadgbl230);
/*  2540 */                     $blk = 33; /* allowing case fallthrough */
/*  2541 */                 case 33:
/*  2542 */                     /* --- function return or resume suspension --- */
/*  2543 */                     if ($ret && $ret.$isSuspension) {
/*  2544 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 119, 17);
/*  2545 */                     }
/*  2546 */                     var $call231 = $ret;
/*  2547 */                     //
/*  2548 */                     // line 119:
/*  2549 */                     //         PtrGlb = Proc1(PtrGlb)
/*  2550 */                     //                  ^
/*  2551 */                     //
/*  2552 */                     $currLineNo = 119;
/*  2553 */                     $currColNo = 17;
/*  2554 */ 
/*  2555 */                     $gbl.PtrGlb = $call231;
/*  2556 */                     //
/*  2557 */                     // line 120:
/*  2558 */                     //         CharIndex = 'A'
/*  2559 */                     //         ^
/*  2560 */                     //
/*  2561 */                     $currLineNo = 120;
/*  2562 */                     $currColNo = 8;
/*  2563 */ 
/*  2564 */                     var $str232 = new Sk.builtins['str']('A');
/*  2565 */                     CharIndex = $str232;
/*  2566 */                     //
/*  2567 */                     // line 121:
/*  2568 */                     //         while CharIndex <= Char2Glob:
/*  2569 */                     //         ^
/*  2570 */                     //
/*  2571 */                     $currLineNo = 121;
/*  2572 */                     $currColNo = 8;
/*  2573 */ 
/*  2574 */                     $blk = 34; /* allowing case fallthrough */
/*  2575 */                 case 34:
/*  2576 */                     /* --- while test --- */
/*  2577 */                     //
/*  2578 */                     // line 121:
/*  2579 */                     //         while CharIndex <= Char2Glob:
/*  2580 */                     //         ^
/*  2581 */                     //
/*  2582 */                     $currLineNo = 121;
/*  2583 */                     $currColNo = 8;
/*  2584 */ 
/*  2585 */                     if (CharIndex === undefined) {
/*  2586 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2587 */                     }
/*  2588 */                     var $compareres233 = null;
/*  2589 */                     var $loadgbl234 = Sk.misceval.loadname('Char2Glob', $gbl);
/*  2590 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharIndex, $loadgbl234, 'LtE', true));
/*  2591 */                     $blk = 38; /* allowing case fallthrough */
/*  2592 */                 case 38:
/*  2593 */                     /* --- function return or resume suspension --- */
/*  2594 */                     if ($ret && $ret.$isSuspension) {
/*  2595 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 121, 14);
/*  2596 */                     }
/*  2597 */                     $compareres233 = $ret;
/*  2598 */                     var $jfalse235 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2599 */                     if ($jfalse235) { /*test failed */
/*  2600 */                         $blk = 37;
/*  2601 */                         continue;
/*  2602 */                     }
/*  2603 */                     $blk = 37; /* allowing case fallthrough */
/*  2604 */                 case 37:
/*  2605 */                     /* --- done --- */
/*  2606 */                     var $jfalse236 = ($compareres233 === false || !Sk.misceval.isTrue($compareres233));
/*  2607 */                     if ($jfalse236) { /*test failed */
/*  2608 */                         $blk = 35;
/*  2609 */                         continue;
/*  2610 */                     }
/*  2611 */                     $blk = 36; /* allowing case fallthrough */
/*  2612 */                 case 36:
/*  2613 */                     /* --- while body --- */
/*  2614 */                     //
/*  2615 */                     // line 122:
/*  2616 */                     //             if EnumLoc == Func1(CharIndex, 'C'):
/*  2617 */                     //             ^
/*  2618 */                     //
/*  2619 */                     $currLineNo = 122;
/*  2620 */                     $currColNo = 12;
/*  2621 */ 
/*  2622 */                     if (EnumLoc === undefined) {
/*  2623 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  2624 */                     }
/*  2625 */                     var $compareres237 = null;
/*  2626 */                     var $loadgbl238 = Sk.misceval.loadname('Func1', $gbl);
/*  2627 */                     if (CharIndex === undefined) {
/*  2628 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2629 */                     }
/*  2630 */                     var $str239 = new Sk.builtins['str']('C');
/*  2631 */                     $ret;
/*  2632 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl238, CharIndex, $str239);
/*  2633 */                     $blk = 41; /* allowing case fallthrough */
/*  2634 */                 case 41:
/*  2635 */                     /* --- function return or resume suspension --- */
/*  2636 */                     if ($ret && $ret.$isSuspension) {
/*  2637 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 122, 26);
/*  2638 */                     }
/*  2639 */                     var $call240 = $ret;
/*  2640 */                     //
/*  2641 */                     // line 122:
/*  2642 */                     //             if EnumLoc == Func1(CharIndex, 'C'):
/*  2643 */                     //                           ^
/*  2644 */                     //
/*  2645 */                     $currLineNo = 122;
/*  2646 */                     $currColNo = 26;
/*  2647 */ 
/*  2648 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $call240, 'Eq', true));
/*  2649 */                     $blk = 42; /* allowing case fallthrough */
/*  2650 */                 case 42:
/*  2651 */                     /* --- function return or resume suspension --- */
/*  2652 */                     if ($ret && $ret.$isSuspension) {
/*  2653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 122, 15);
/*  2654 */                     }
/*  2655 */                     $compareres237 = $ret;
/*  2656 */                     var $jfalse241 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  2657 */                     if ($jfalse241) { /*test failed */
/*  2658 */                         $blk = 40;
/*  2659 */                         continue;
/*  2660 */                     }
/*  2661 */                     $blk = 40; /* allowing case fallthrough */
/*  2662 */                 case 40:
/*  2663 */                     /* --- done --- */
/*  2664 */                     var $jfalse242 = ($compareres237 === false || !Sk.misceval.isTrue($compareres237));
/*  2665 */                     if ($jfalse242) { /*test failed */
/*  2666 */                         $blk = 39;
/*  2667 */                         continue;
/*  2668 */                     }
/*  2669 */                     //
/*  2670 */                     // line 123:
/*  2671 */                     //                 EnumLoc = Proc6(Ident1)
/*  2672 */                     //                 ^
/*  2673 */                     //
/*  2674 */                     $currLineNo = 123;
/*  2675 */                     $currColNo = 16;
/*  2676 */ 
/*  2677 */                     var $loadgbl243 = Sk.misceval.loadname('Proc6', $gbl);
/*  2678 */                     var $loadgbl244 = Sk.misceval.loadname('Ident1', $gbl);
/*  2679 */                     $ret;
/*  2680 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl243, $loadgbl244);
/*  2681 */                     $blk = 43; /* allowing case fallthrough */
/*  2682 */                 case 43:
/*  2683 */                     /* --- function return or resume suspension --- */
/*  2684 */                     if ($ret && $ret.$isSuspension) {
/*  2685 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 123, 26);
/*  2686 */                     }
/*  2687 */                     var $call245 = $ret;
/*  2688 */                     //
/*  2689 */                     // line 123:
/*  2690 */                     //                 EnumLoc = Proc6(Ident1)
/*  2691 */                     //                           ^
/*  2692 */                     //
/*  2693 */                     $currLineNo = 123;
/*  2694 */                     $currColNo = 26;
/*  2695 */ 
/*  2696 */                     EnumLoc = $call245;
/*  2697 */                     $blk = 39; /* allowing case fallthrough */
/*  2698 */                 case 39:
/*  2699 */                     /* --- end of if --- */
/*  2700 */                     //
/*  2701 */                     // line 124:
/*  2702 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2703 */                     //             ^
/*  2704 */                     //
/*  2705 */                     $currLineNo = 124;
/*  2706 */                     $currColNo = 12;
/*  2707 */ 
/*  2708 */                     var $loadgbl246 = Sk.misceval.loadname('chr', $gbl);
/*  2709 */                     var $loadgbl247 = Sk.misceval.loadname('ord', $gbl);
/*  2710 */                     if (CharIndex === undefined) {
/*  2711 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharIndex\' referenced before assignment');
/*  2712 */                     }
/*  2713 */                     $ret;
/*  2714 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl247, CharIndex);
/*  2715 */                     $blk = 44; /* allowing case fallthrough */
/*  2716 */                 case 44:
/*  2717 */                     /* --- function return or resume suspension --- */
/*  2718 */                     if ($ret && $ret.$isSuspension) {
/*  2719 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 124, 28);
/*  2720 */                     }
/*  2721 */                     var $call248 = $ret;
/*  2722 */                     //
/*  2723 */                     // line 124:
/*  2724 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2725 */                     //                             ^
/*  2726 */                     //
/*  2727 */                     $currLineNo = 124;
/*  2728 */                     $currColNo = 28;
/*  2729 */ 
/*  2730 */                     var $binop249 = Sk.abstr.numberBinOp($call248, new Sk.builtin.int_(1), 'Add');
/*  2731 */                     $ret;
/*  2732 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl246, $binop249);
/*  2733 */                     $blk = 45; /* allowing case fallthrough */
/*  2734 */                 case 45:
/*  2735 */                     /* --- function return or resume suspension --- */
/*  2736 */                     if ($ret && $ret.$isSuspension) {
/*  2737 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 124, 24);
/*  2738 */                     }
/*  2739 */                     var $call250 = $ret;
/*  2740 */                     //
/*  2741 */                     // line 124:
/*  2742 */                     //             CharIndex = chr(ord(CharIndex)+1)
/*  2743 */                     //                         ^
/*  2744 */                     //
/*  2745 */                     $currLineNo = 124;
/*  2746 */                     $currColNo = 24;
/*  2747 */ 
/*  2748 */                     CharIndex = $call250;
/*  2749 */                     $blk = 34; /* jump */
/*  2750 */                     continue;
/*  2751 */                 case 35:
/*  2752 */                     /* --- after while --- */
/*  2753 */                     //
/*  2754 */                     // line 125:
/*  2755 */                     //         IntLoc3 = IntLoc2 * IntLoc1
/*  2756 */                     //         ^
/*  2757 */                     //
/*  2758 */                     $currLineNo = 125;
/*  2759 */                     $currColNo = 8;
/*  2760 */ 
/*  2761 */                     if (IntLoc2 === undefined) {
/*  2762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2763 */                     }
/*  2764 */                     if (IntLoc1 === undefined) {
/*  2765 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2766 */                     }
/*  2767 */                     var $binop251 = Sk.abstr.numberBinOp(IntLoc2, IntLoc1, 'Mult');
/*  2768 */                     IntLoc3 = $binop251;
/*  2769 */                     //
/*  2770 */                     // line 126:
/*  2771 */                     //         IntLoc2 = IntLoc3 / IntLoc1
/*  2772 */                     //         ^
/*  2773 */                     //
/*  2774 */                     $currLineNo = 126;
/*  2775 */                     $currColNo = 8;
/*  2776 */ 
/*  2777 */                     if (IntLoc3 === undefined) {
/*  2778 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2779 */                     }
/*  2780 */                     if (IntLoc1 === undefined) {
/*  2781 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2782 */                     }
/*  2783 */                     var $binop252 = Sk.abstr.numberBinOp(IntLoc3, IntLoc1, 'Div');
/*  2784 */                     IntLoc2 = $binop252;
/*  2785 */                     //
/*  2786 */                     // line 127:
/*  2787 */                     //         IntLoc2 = 7 * (IntLoc3 - IntLoc2) - IntLoc1
/*  2788 */                     //         ^
/*  2789 */                     //
/*  2790 */                     $currLineNo = 127;
/*  2791 */                     $currColNo = 8;
/*  2792 */ 
/*  2793 */                     if (IntLoc3 === undefined) {
/*  2794 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc3\' referenced before assignment');
/*  2795 */                     }
/*  2796 */                     if (IntLoc2 === undefined) {
/*  2797 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc2\' referenced before assignment');
/*  2798 */                     }
/*  2799 */                     var $binop253 = Sk.abstr.numberBinOp(IntLoc3, IntLoc2, 'Sub');
/*  2800 */                     var $binop254 = Sk.abstr.numberBinOp(new Sk.builtin.int_(7), $binop253, 'Mult');
/*  2801 */                     if (IntLoc1 === undefined) {
/*  2802 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2803 */                     }
/*  2804 */                     var $binop255 = Sk.abstr.numberBinOp($binop254, IntLoc1, 'Sub');
/*  2805 */                     IntLoc2 = $binop255;
/*  2806 */                     //
/*  2807 */                     // line 128:
/*  2808 */                     //         IntLoc1 = Proc2(IntLoc1)
/*  2809 */                     //         ^
/*  2810 */                     //
/*  2811 */                     $currLineNo = 128;
/*  2812 */                     $currColNo = 8;
/*  2813 */ 
/*  2814 */                     var $loadgbl256 = Sk.misceval.loadname('Proc2', $gbl);
/*  2815 */                     if (IntLoc1 === undefined) {
/*  2816 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc1\' referenced before assignment');
/*  2817 */                     }
/*  2818 */                     $ret;
/*  2819 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl256, IntLoc1);
/*  2820 */                     $blk = 46; /* allowing case fallthrough */
/*  2821 */                 case 46:
/*  2822 */                     /* --- function return or resume suspension --- */
/*  2823 */                     if ($ret && $ret.$isSuspension) {
/*  2824 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 128, 18);
/*  2825 */                     }
/*  2826 */                     var $call257 = $ret;
/*  2827 */                     //
/*  2828 */                     // line 128:
/*  2829 */                     //         IntLoc1 = Proc2(IntLoc1)
/*  2830 */                     //                   ^
/*  2831 */                     //
/*  2832 */                     $currLineNo = 128;
/*  2833 */                     $currColNo = 18;
/*  2834 */ 
/*  2835 */                     IntLoc1 = $call257;
/*  2836 */                     $blk = 18; /* jump */
/*  2837 */                     continue;
/*  2838 */                 case 49:
/*  2839 */                     /* --- next branch of if --- */
/*  2840 */                     //
/*  2841 */                     // line 134:
/*  2842 */                     //         loopsPerBenchtime = (loops / benchtime)
/*  2843 */                     //         ^
/*  2844 */                     //
/*  2845 */                     $currLineNo = 134;
/*  2846 */                     $currColNo = 8;
/*  2847 */ 
/*  2848 */                     if (loops === undefined) {
/*  2849 */                         throw new Sk.builtin.UnboundLocalError('local variable \'loops\' referenced before assignment');
/*  2850 */                     }
/*  2851 */                     if (benchtime === undefined) {
/*  2852 */                         throw new Sk.builtin.UnboundLocalError('local variable \'benchtime\' referenced before assignment');
/*  2853 */                     }
/*  2854 */                     var $binop265 = Sk.abstr.numberBinOp(loops, benchtime, 'Div');
/*  2855 */                     loopsPerBenchtime = $binop265;
/*  2856 */                     $blk = 48; /* jump */
/*  2857 */                     continue;
/*  2858 */                 }
/*  2859 */             } catch (err) {
/*  2860 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2861 */                     err = new Sk.builtin.ExternalError(err);
/*  2862 */                 }
/*  2863 */                 err.traceback.push({
/*  2864 */                     lineno: $currLineNo,
/*  2865 */                     colno: $currColNo,
/*  2866 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  2867 */                 });
/*  2868 */                 if ($exc.length > 0) {
/*  2869 */                     $err = err;
/*  2870 */                     $blk = $exc.pop();
/*  2871 */                     continue;
/*  2872 */                 } else {
/*  2873 */                     throw err;
/*  2874 */                 }
/*  2875 */             }
/*  2876 */         }
/*  2877 */     });
/*  2878 */     var $scope270 = (function $Proc1271$(PtrParIn) {
/*  2879 */         var NextRecord; /* locals */
/*  2880 */         var NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, NextRecord, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, PtrParIn, $loadgbl272, $loadgbl272, $lattr273, $loadgbl272, $lattr273, $call274, $lattr275, $lattr276, $loadgbl277, $loadgbl277, $lattr278, $loadgbl277, $lattr278, $call279, $lattr280, $compareres281, $loadgbl282, $loadgbl285, $loadgbl285, $lattr286, $loadgbl285, $lattr286, $call287, $loadgbl288, $loadgbl288, $lattr289, $loadgbl290, $loadgbl290, $lattr291, $loadgbl290, $lattr291, $call292, $lattr293;
/*  2881 */         var $wakeFromSuspension = function() {
/*  2882 */             var susp = $scope270.$wakingSuspension;
/*  2883 */             delete $scope270.$wakingSuspension;
/*  2884 */             $blk = susp.$blk;
/*  2885 */             $loc = susp.$loc;
/*  2886 */             $gbl = susp.$gbl;
/*  2887 */             $exc = susp.$exc;
/*  2888 */             $err = susp.$err;
/*  2889 */             $postfinally = susp.$postfinally;
/*  2890 */             $currLineNo = susp.$lineno;
/*  2891 */             $currColNo = susp.$colno;
/*  2892 */             Sk.lastYield = Date.now();
/*  2893 */             NextRecord = susp.$tmps.NextRecord;
/*  2894 */             PtrParIn = susp.$tmps.PtrParIn;
/*  2895 */             $loadgbl272 = susp.$tmps.$loadgbl272;
/*  2896 */             $lattr273 = susp.$tmps.$lattr273;
/*  2897 */             $call274 = susp.$tmps.$call274;
/*  2898 */             $lattr275 = susp.$tmps.$lattr275;
/*  2899 */             $lattr276 = susp.$tmps.$lattr276;
/*  2900 */             $loadgbl277 = susp.$tmps.$loadgbl277;
/*  2901 */             $lattr278 = susp.$tmps.$lattr278;
/*  2902 */             $call279 = susp.$tmps.$call279;
/*  2903 */             $lattr280 = susp.$tmps.$lattr280;
/*  2904 */             $compareres281 = susp.$tmps.$compareres281;
/*  2905 */             $loadgbl282 = susp.$tmps.$loadgbl282;
/*  2906 */             $loadgbl285 = susp.$tmps.$loadgbl285;
/*  2907 */             $lattr286 = susp.$tmps.$lattr286;
/*  2908 */             $call287 = susp.$tmps.$call287;
/*  2909 */             $loadgbl288 = susp.$tmps.$loadgbl288;
/*  2910 */             $lattr289 = susp.$tmps.$lattr289;
/*  2911 */             $loadgbl290 = susp.$tmps.$loadgbl290;
/*  2912 */             $lattr291 = susp.$tmps.$lattr291;
/*  2913 */             $call292 = susp.$tmps.$call292;
/*  2914 */             $lattr293 = susp.$tmps.$lattr293;
/*  2915 */             try {
/*  2916 */                 $ret = susp.child.resume();
/*  2917 */             } catch (err) {
/*  2918 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2919 */                     err = new Sk.builtin.ExternalError(err);
/*  2920 */                 }
/*  2921 */                 err.traceback.push({
/*  2922 */                     lineno: $currLineNo,
/*  2923 */                     colno: $currColNo,
/*  2924 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  2925 */                 });
/*  2926 */                 if ($exc.length > 0) {
/*  2927 */                     $err = err;
/*  2928 */                     $blk = $exc.pop();
/*  2929 */                 } else {
/*  2930 */                     throw err;
/*  2931 */                 }
/*  2932 */             }
/*  2933 */         };
/*  2934 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2935 */             var susp = new Sk.misceval.Suspension();
/*  2936 */             susp.child = $child;
/*  2937 */             susp.resume = function() {
/*  2938 */                 $scope270.$wakingSuspension = susp;
/*  2939 */                 return $scope270();
/*  2940 */             };
/*  2941 */             susp.data = susp.child.data;
/*  2942 */             susp.$blk = $blk;
/*  2943 */             susp.$loc = $loc;
/*  2944 */             susp.$gbl = $gbl;
/*  2945 */             susp.$exc = $exc;
/*  2946 */             susp.$err = $err;
/*  2947 */             susp.$postfinally = $postfinally;
/*  2948 */             susp.$filename = $filename;
/*  2949 */             susp.$lineno = $lineno;
/*  2950 */             susp.$colno = $colno;
/*  2951 */             susp.optional = susp.child.optional;
/*  2952 */             susp.$tmps = {
/*  2953 */                 "NextRecord": NextRecord,
/*  2954 */                 "PtrParIn": PtrParIn,
/*  2955 */                 "$loadgbl272": $loadgbl272,
/*  2956 */                 "$lattr273": $lattr273,
/*  2957 */                 "$call274": $call274,
/*  2958 */                 "$lattr275": $lattr275,
/*  2959 */                 "$lattr276": $lattr276,
/*  2960 */                 "$loadgbl277": $loadgbl277,
/*  2961 */                 "$lattr278": $lattr278,
/*  2962 */                 "$call279": $call279,
/*  2963 */                 "$lattr280": $lattr280,
/*  2964 */                 "$compareres281": $compareres281,
/*  2965 */                 "$loadgbl282": $loadgbl282,
/*  2966 */                 "$loadgbl285": $loadgbl285,
/*  2967 */                 "$lattr286": $lattr286,
/*  2968 */                 "$call287": $call287,
/*  2969 */                 "$loadgbl288": $loadgbl288,
/*  2970 */                 "$lattr289": $lattr289,
/*  2971 */                 "$loadgbl290": $loadgbl290,
/*  2972 */                 "$lattr291": $lattr291,
/*  2973 */                 "$call292": $call292,
/*  2974 */                 "$lattr293": $lattr293
/*  2975 */             };
/*  2976 */             return susp;
/*  2977 */         };
/*  2978 */         var $blk = 0,
/*  2979 */             $exc = [],
/*  2980 */             $loc = {},
/*  2981 */             $gbl = this,
/*  2982 */             $err = undefined,
/*  2983 */             $ret = undefined,
/*  2984 */             $postfinally = undefined,
/*  2985 */             $currLineNo = undefined,
/*  2986 */             $currColNo = undefined;
/*  2987 */         if (typeof Sk.execStart === 'undefined') {
/*  2988 */             Sk.execStart = Date.now()
/*  2989 */         }
/*  2990 */         if (typeof Sk.lastYield === 'undefined') {
/*  2991 */             Sk.lastYield = Date.now()
/*  2992 */         }
/*  2993 */         if ($scope270.$wakingSuspension !== undefined) {
/*  2994 */             $wakeFromSuspension();
/*  2995 */         } else {
/*  2996 */             Sk.builtin.pyCheckArgs("Proc1", arguments, 1, 1, false, false);
/*  2997 */         }
/*  2998 */         while (true) {
/*  2999 */             try {
/*  3000 */                 var $dateNow = Date.now();
/*  3001 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3002 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3003 */                 }
/*  3004 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3005 */                     var $susp = $saveSuspension({
/*  3006 */                         data: {
/*  3007 */                             type: 'Sk.yield'
/*  3008 */                         },
/*  3009 */                         resume: function() {}
/*  3010 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  3011 */                     $susp.$blk = $blk;
/*  3012 */                     $susp.optional = true;
/*  3013 */                     return $susp;
/*  3014 */                 }
/*  3015 */                 switch ($blk) {
/*  3016 */                 case 0:
/*  3017 */                     /* --- codeobj entry --- */
/*  3018 */                     if (PtrParIn === undefined) {
/*  3019 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3020 */                     }
/*  3021 */ 
/*  3022 */                     //
/*  3023 */                     // line 138:
/*  3024 */                     //     PtrParIn.PtrComp = NextRecord = PtrGlb.copy()
/*  3025 */                     //     ^
/*  3026 */                     //
/*  3027 */                     $currLineNo = 138;
/*  3028 */                     $currColNo = 4;
/*  3029 */ 
/*  3030 */                     var $loadgbl272 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3031 */                     $ret = Sk.abstr.gattr($loadgbl272, 'copy', true);
/*  3032 */                     $blk = 1; /* allowing case fallthrough */
/*  3033 */                 case 1:
/*  3034 */                     /* --- function return or resume suspension --- */
/*  3035 */                     if ($ret && $ret.$isSuspension) {
/*  3036 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 36);
/*  3037 */                     }
/*  3038 */                     var $lattr273 = $ret;
/*  3039 */                     $ret;
/*  3040 */                     $ret = Sk.misceval.callsimOrSuspend($lattr273);
/*  3041 */                     $blk = 2; /* allowing case fallthrough */
/*  3042 */                 case 2:
/*  3043 */                     /* --- function return or resume suspension --- */
/*  3044 */                     if ($ret && $ret.$isSuspension) {
/*  3045 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 36);
/*  3046 */                     }
/*  3047 */                     var $call274 = $ret;
/*  3048 */                     //
/*  3049 */                     // line 138:
/*  3050 */                     //     PtrParIn.PtrComp = NextRecord = PtrGlb.copy()
/*  3051 */                     //                                     ^
/*  3052 */                     //
/*  3053 */                     $currLineNo = 138;
/*  3054 */                     $currColNo = 36;
/*  3055 */ 
/*  3056 */                     if (PtrParIn === undefined) {
/*  3057 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3058 */                     }
/*  3059 */                     $ret = Sk.abstr.sattr(PtrParIn, 'PtrComp', $call274, true);
/*  3060 */                     $blk = 3; /* allowing case fallthrough */
/*  3061 */                 case 3:
/*  3062 */                     /* --- function return or resume suspension --- */
/*  3063 */                     if ($ret && $ret.$isSuspension) {
/*  3064 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 138, 4);
/*  3065 */                     }
/*  3066 */                     NextRecord = $call274;
/*  3067 */                     //
/*  3068 */                     // line 139:
/*  3069 */                     //     PtrParIn.IntComp = 5
/*  3070 */                     //     ^
/*  3071 */                     //
/*  3072 */                     $currLineNo = 139;
/*  3073 */                     $currColNo = 4;
/*  3074 */ 
/*  3075 */                     if (PtrParIn === undefined) {
/*  3076 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3077 */                     }
/*  3078 */                     $ret = Sk.abstr.sattr(PtrParIn, 'IntComp', new Sk.builtin.int_(5), true);
/*  3079 */                     $blk = 4; /* allowing case fallthrough */
/*  3080 */                 case 4:
/*  3081 */                     /* --- function return or resume suspension --- */
/*  3082 */                     if ($ret && $ret.$isSuspension) {
/*  3083 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 139, 4);
/*  3084 */                     }
/*  3085 */                     //
/*  3086 */                     // line 140:
/*  3087 */                     //     NextRecord.IntComp = PtrParIn.IntComp
/*  3088 */                     //     ^
/*  3089 */                     //
/*  3090 */                     $currLineNo = 140;
/*  3091 */                     $currColNo = 4;
/*  3092 */ 
/*  3093 */                     if (PtrParIn === undefined) {
/*  3094 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3095 */                     }
/*  3096 */                     $ret = Sk.abstr.gattr(PtrParIn, 'IntComp', true);
/*  3097 */                     $blk = 5; /* allowing case fallthrough */
/*  3098 */                 case 5:
/*  3099 */                     /* --- function return or resume suspension --- */
/*  3100 */                     if ($ret && $ret.$isSuspension) {
/*  3101 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 140, 25);
/*  3102 */                     }
/*  3103 */                     var $lattr275 = $ret;
/*  3104 */                     if (NextRecord === undefined) {
/*  3105 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3106 */                     }
/*  3107 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', $lattr275, true);
/*  3108 */                     $blk = 6; /* allowing case fallthrough */
/*  3109 */                 case 6:
/*  3110 */                     /* --- function return or resume suspension --- */
/*  3111 */                     if ($ret && $ret.$isSuspension) {
/*  3112 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 140, 4);
/*  3113 */                     }
/*  3114 */                     //
/*  3115 */                     // line 141:
/*  3116 */                     //     NextRecord.PtrComp = PtrParIn.PtrComp
/*  3117 */                     //     ^
/*  3118 */                     //
/*  3119 */                     $currLineNo = 141;
/*  3120 */                     $currColNo = 4;
/*  3121 */ 
/*  3122 */                     if (PtrParIn === undefined) {
/*  3123 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3124 */                     }
/*  3125 */                     $ret = Sk.abstr.gattr(PtrParIn, 'PtrComp', true);
/*  3126 */                     $blk = 7; /* allowing case fallthrough */
/*  3127 */                 case 7:
/*  3128 */                     /* --- function return or resume suspension --- */
/*  3129 */                     if ($ret && $ret.$isSuspension) {
/*  3130 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 141, 25);
/*  3131 */                     }
/*  3132 */                     var $lattr276 = $ret;
/*  3133 */                     if (NextRecord === undefined) {
/*  3134 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3135 */                     }
/*  3136 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $lattr276, true);
/*  3137 */                     $blk = 8; /* allowing case fallthrough */
/*  3138 */                 case 8:
/*  3139 */                     /* --- function return or resume suspension --- */
/*  3140 */                     if ($ret && $ret.$isSuspension) {
/*  3141 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 141, 4);
/*  3142 */                     }
/*  3143 */                     //
/*  3144 */                     // line 142:
/*  3145 */                     //     NextRecord.PtrComp = Proc3(NextRecord.PtrComp)
/*  3146 */                     //     ^
/*  3147 */                     //
/*  3148 */                     $currLineNo = 142;
/*  3149 */                     $currColNo = 4;
/*  3150 */ 
/*  3151 */                     var $loadgbl277 = Sk.misceval.loadname('Proc3', $gbl);
/*  3152 */                     if (NextRecord === undefined) {
/*  3153 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3154 */                     }
/*  3155 */                     $ret = Sk.abstr.gattr(NextRecord, 'PtrComp', true);
/*  3156 */                     $blk = 9; /* allowing case fallthrough */
/*  3157 */                 case 9:
/*  3158 */                     /* --- function return or resume suspension --- */
/*  3159 */                     if ($ret && $ret.$isSuspension) {
/*  3160 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 31);
/*  3161 */                     }
/*  3162 */                     var $lattr278 = $ret;
/*  3163 */                     $ret;
/*  3164 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl277, $lattr278);
/*  3165 */                     $blk = 10; /* allowing case fallthrough */
/*  3166 */                 case 10:
/*  3167 */                     /* --- function return or resume suspension --- */
/*  3168 */                     if ($ret && $ret.$isSuspension) {
/*  3169 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 25);
/*  3170 */                     }
/*  3171 */                     var $call279 = $ret;
/*  3172 */                     //
/*  3173 */                     // line 142:
/*  3174 */                     //     NextRecord.PtrComp = Proc3(NextRecord.PtrComp)
/*  3175 */                     //                          ^
/*  3176 */                     //
/*  3177 */                     $currLineNo = 142;
/*  3178 */                     $currColNo = 25;
/*  3179 */ 
/*  3180 */                     if (NextRecord === undefined) {
/*  3181 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3182 */                     }
/*  3183 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $call279, true);
/*  3184 */                     $blk = 11; /* allowing case fallthrough */
/*  3185 */                 case 11:
/*  3186 */                     /* --- function return or resume suspension --- */
/*  3187 */                     if ($ret && $ret.$isSuspension) {
/*  3188 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 142, 4);
/*  3189 */                     }
/*  3190 */                     //
/*  3191 */                     // line 143:
/*  3192 */                     //     if NextRecord.Discr == Ident1:
/*  3193 */                     //     ^
/*  3194 */                     //
/*  3195 */                     $currLineNo = 143;
/*  3196 */                     $currColNo = 4;
/*  3197 */ 
/*  3198 */                     if (NextRecord === undefined) {
/*  3199 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3200 */                     }
/*  3201 */                     $ret = Sk.abstr.gattr(NextRecord, 'Discr', true);
/*  3202 */                     $blk = 14; /* allowing case fallthrough */
/*  3203 */                 case 14:
/*  3204 */                     /* --- function return or resume suspension --- */
/*  3205 */                     if ($ret && $ret.$isSuspension) {
/*  3206 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 143, 7);
/*  3207 */                     }
/*  3208 */                     var $lattr280 = $ret;
/*  3209 */                     var $compareres281 = null;
/*  3210 */                     var $loadgbl282 = Sk.misceval.loadname('Ident1', $gbl);
/*  3211 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr280, $loadgbl282, 'Eq', true));
/*  3212 */                     $blk = 16; /* allowing case fallthrough */
/*  3213 */                 case 16:
/*  3214 */                     /* --- function return or resume suspension --- */
/*  3215 */                     if ($ret && $ret.$isSuspension) {
/*  3216 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 143, 7);
/*  3217 */                     }
/*  3218 */                     $compareres281 = $ret;
/*  3219 */                     var $jfalse283 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3220 */                     if ($jfalse283) { /*test failed */
/*  3221 */                         $blk = 15;
/*  3222 */                         continue;
/*  3223 */                     }
/*  3224 */                     $blk = 15; /* allowing case fallthrough */
/*  3225 */                 case 15:
/*  3226 */                     /* --- done --- */
/*  3227 */                     var $jfalse284 = ($compareres281 === false || !Sk.misceval.isTrue($compareres281));
/*  3228 */                     if ($jfalse284) { /*test failed */
/*  3229 */                         $blk = 13;
/*  3230 */                         continue;
/*  3231 */                     }
/*  3232 */                     //
/*  3233 */                     // line 144:
/*  3234 */                     //         NextRecord.IntComp = 6
/*  3235 */                     //         ^
/*  3236 */                     //
/*  3237 */                     $currLineNo = 144;
/*  3238 */                     $currColNo = 8;
/*  3239 */ 
/*  3240 */                     if (NextRecord === undefined) {
/*  3241 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3242 */                     }
/*  3243 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', new Sk.builtin.int_(6), true);
/*  3244 */                     $blk = 17; /* allowing case fallthrough */
/*  3245 */                 case 17:
/*  3246 */                     /* --- function return or resume suspension --- */
/*  3247 */                     if ($ret && $ret.$isSuspension) {
/*  3248 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 144, 8);
/*  3249 */                     }
/*  3250 */                     //
/*  3251 */                     // line 145:
/*  3252 */                     //         NextRecord.EnumComp = Proc6(PtrParIn.EnumComp)
/*  3253 */                     //         ^
/*  3254 */                     //
/*  3255 */                     $currLineNo = 145;
/*  3256 */                     $currColNo = 8;
/*  3257 */ 
/*  3258 */                     var $loadgbl285 = Sk.misceval.loadname('Proc6', $gbl);
/*  3259 */                     if (PtrParIn === undefined) {
/*  3260 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3261 */                     }
/*  3262 */                     $ret = Sk.abstr.gattr(PtrParIn, 'EnumComp', true);
/*  3263 */                     $blk = 18; /* allowing case fallthrough */
/*  3264 */                 case 18:
/*  3265 */                     /* --- function return or resume suspension --- */
/*  3266 */                     if ($ret && $ret.$isSuspension) {
/*  3267 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 36);
/*  3268 */                     }
/*  3269 */                     var $lattr286 = $ret;
/*  3270 */                     $ret;
/*  3271 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl285, $lattr286);
/*  3272 */                     $blk = 19; /* allowing case fallthrough */
/*  3273 */                 case 19:
/*  3274 */                     /* --- function return or resume suspension --- */
/*  3275 */                     if ($ret && $ret.$isSuspension) {
/*  3276 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 30);
/*  3277 */                     }
/*  3278 */                     var $call287 = $ret;
/*  3279 */                     //
/*  3280 */                     // line 145:
/*  3281 */                     //         NextRecord.EnumComp = Proc6(PtrParIn.EnumComp)
/*  3282 */                     //                               ^
/*  3283 */                     //
/*  3284 */                     $currLineNo = 145;
/*  3285 */                     $currColNo = 30;
/*  3286 */ 
/*  3287 */                     if (NextRecord === undefined) {
/*  3288 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3289 */                     }
/*  3290 */                     $ret = Sk.abstr.sattr(NextRecord, 'EnumComp', $call287, true);
/*  3291 */                     $blk = 20; /* allowing case fallthrough */
/*  3292 */                 case 20:
/*  3293 */                     /* --- function return or resume suspension --- */
/*  3294 */                     if ($ret && $ret.$isSuspension) {
/*  3295 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 145, 8);
/*  3296 */                     }
/*  3297 */                     //
/*  3298 */                     // line 146:
/*  3299 */                     //         NextRecord.PtrComp = PtrGlb.PtrComp
/*  3300 */                     //         ^
/*  3301 */                     //
/*  3302 */                     $currLineNo = 146;
/*  3303 */                     $currColNo = 8;
/*  3304 */ 
/*  3305 */                     var $loadgbl288 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3306 */                     $ret = Sk.abstr.gattr($loadgbl288, 'PtrComp', true);
/*  3307 */                     $blk = 21; /* allowing case fallthrough */
/*  3308 */                 case 21:
/*  3309 */                     /* --- function return or resume suspension --- */
/*  3310 */                     if ($ret && $ret.$isSuspension) {
/*  3311 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 146, 29);
/*  3312 */                     }
/*  3313 */                     var $lattr289 = $ret;
/*  3314 */                     if (NextRecord === undefined) {
/*  3315 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3316 */                     }
/*  3317 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', $lattr289, true);
/*  3318 */                     $blk = 22; /* allowing case fallthrough */
/*  3319 */                 case 22:
/*  3320 */                     /* --- function return or resume suspension --- */
/*  3321 */                     if ($ret && $ret.$isSuspension) {
/*  3322 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 146, 8);
/*  3323 */                     }
/*  3324 */                     //
/*  3325 */                     // line 147:
/*  3326 */                     //         NextRecord.IntComp = Proc7(NextRecord.IntComp, 10)
/*  3327 */                     //         ^
/*  3328 */                     //
/*  3329 */                     $currLineNo = 147;
/*  3330 */                     $currColNo = 8;
/*  3331 */ 
/*  3332 */                     var $loadgbl290 = Sk.misceval.loadname('Proc7', $gbl);
/*  3333 */                     if (NextRecord === undefined) {
/*  3334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3335 */                     }
/*  3336 */                     $ret = Sk.abstr.gattr(NextRecord, 'IntComp', true);
/*  3337 */                     $blk = 23; /* allowing case fallthrough */
/*  3338 */                 case 23:
/*  3339 */                     /* --- function return or resume suspension --- */
/*  3340 */                     if ($ret && $ret.$isSuspension) {
/*  3341 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 35);
/*  3342 */                     }
/*  3343 */                     var $lattr291 = $ret;
/*  3344 */                     $ret;
/*  3345 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl290, $lattr291, new Sk.builtin.int_(10));
/*  3346 */                     $blk = 24; /* allowing case fallthrough */
/*  3347 */                 case 24:
/*  3348 */                     /* --- function return or resume suspension --- */
/*  3349 */                     if ($ret && $ret.$isSuspension) {
/*  3350 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 29);
/*  3351 */                     }
/*  3352 */                     var $call292 = $ret;
/*  3353 */                     //
/*  3354 */                     // line 147:
/*  3355 */                     //         NextRecord.IntComp = Proc7(NextRecord.IntComp, 10)
/*  3356 */                     //                              ^
/*  3357 */                     //
/*  3358 */                     $currLineNo = 147;
/*  3359 */                     $currColNo = 29;
/*  3360 */ 
/*  3361 */                     if (NextRecord === undefined) {
/*  3362 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3363 */                     }
/*  3364 */                     $ret = Sk.abstr.sattr(NextRecord, 'IntComp', $call292, true);
/*  3365 */                     $blk = 25; /* allowing case fallthrough */
/*  3366 */                 case 25:
/*  3367 */                     /* --- function return or resume suspension --- */
/*  3368 */                     if ($ret && $ret.$isSuspension) {
/*  3369 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 147, 8);
/*  3370 */                     }
/*  3371 */                     $blk = 12; /* allowing case fallthrough */
/*  3372 */                 case 12:
/*  3373 */                     /* --- end of if --- */
/*  3374 */                     //
/*  3375 */                     // line 150:
/*  3376 */                     //     NextRecord.PtrComp = None
/*  3377 */                     //     ^
/*  3378 */                     //
/*  3379 */                     $currLineNo = 150;
/*  3380 */                     $currColNo = 4;
/*  3381 */ 
/*  3382 */                     if (NextRecord === undefined) {
/*  3383 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3384 */                     }
/*  3385 */                     $ret = Sk.abstr.sattr(NextRecord, 'PtrComp', Sk.builtin.none.none$, true);
/*  3386 */                     $blk = 28; /* allowing case fallthrough */
/*  3387 */                 case 28:
/*  3388 */                     /* --- function return or resume suspension --- */
/*  3389 */                     if ($ret && $ret.$isSuspension) {
/*  3390 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 150, 4);
/*  3391 */                     }
/*  3392 */                     //
/*  3393 */                     // line 151:
/*  3394 */                     //     return PtrParIn
/*  3395 */                     //     ^
/*  3396 */                     //
/*  3397 */                     $currLineNo = 151;
/*  3398 */                     $currColNo = 4;
/*  3399 */ 
/*  3400 */                     if (PtrParIn === undefined) {
/*  3401 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParIn\' referenced before assignment');
/*  3402 */                     }
/*  3403 */                     return PtrParIn;
/*  3404 */                     return Sk.builtin.none.none$;
/*  3405 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3406 */                 case 13:
/*  3407 */                     /* --- next branch of if --- */
/*  3408 */                     //
/*  3409 */                     // line 149:
/*  3410 */                     //         PtrParIn = NextRecord.copy()
/*  3411 */                     //         ^
/*  3412 */                     //
/*  3413 */                     $currLineNo = 149;
/*  3414 */                     $currColNo = 8;
/*  3415 */ 
/*  3416 */                     if (NextRecord === undefined) {
/*  3417 */                         throw new Sk.builtin.UnboundLocalError('local variable \'NextRecord\' referenced before assignment');
/*  3418 */                     }
/*  3419 */                     $ret = Sk.abstr.gattr(NextRecord, 'copy', true);
/*  3420 */                     $blk = 26; /* allowing case fallthrough */
/*  3421 */                 case 26:
/*  3422 */                     /* --- function return or resume suspension --- */
/*  3423 */                     if ($ret && $ret.$isSuspension) {
/*  3424 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 149, 19);
/*  3425 */                     }
/*  3426 */                     var $lattr293 = $ret;
/*  3427 */                     $ret;
/*  3428 */                     $ret = Sk.misceval.callsimOrSuspend($lattr293);
/*  3429 */                     $blk = 27; /* allowing case fallthrough */
/*  3430 */                 case 27:
/*  3431 */                     /* --- function return or resume suspension --- */
/*  3432 */                     if ($ret && $ret.$isSuspension) {
/*  3433 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 149, 19);
/*  3434 */                     }
/*  3435 */                     var $call294 = $ret;
/*  3436 */                     //
/*  3437 */                     // line 149:
/*  3438 */                     //         PtrParIn = NextRecord.copy()
/*  3439 */                     //                    ^
/*  3440 */                     //
/*  3441 */                     $currLineNo = 149;
/*  3442 */                     $currColNo = 19;
/*  3443 */ 
/*  3444 */                     PtrParIn = $call294;
/*  3445 */                     $blk = 12; /* jump */
/*  3446 */                     continue;
/*  3447 */                 }
/*  3448 */             } catch (err) {
/*  3449 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3450 */                     err = new Sk.builtin.ExternalError(err);
/*  3451 */                 }
/*  3452 */                 err.traceback.push({
/*  3453 */                     lineno: $currLineNo,
/*  3454 */                     colno: $currColNo,
/*  3455 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3456 */                 });
/*  3457 */                 if ($exc.length > 0) {
/*  3458 */                     $err = err;
/*  3459 */                     $blk = $exc.pop();
/*  3460 */                     continue;
/*  3461 */                 } else {
/*  3462 */                     throw err;
/*  3463 */                 }
/*  3464 */             }
/*  3465 */         }
/*  3466 */     });
/*  3467 */     var $scope296 = (function $Proc2297$(IntParIO) {
/*  3468 */         var EnumLoc, IntLoc; /* locals */
/*  3469 */         var EnumLoc, EnumLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntParIO, IntParIO, IntParIO, IntParIO, $loadgbl300, $compareres301, $str302, $compareres309, $loadgbl310;
/*  3470 */         var $wakeFromSuspension = function() {
/*  3471 */             var susp = $scope296.$wakingSuspension;
/*  3472 */             delete $scope296.$wakingSuspension;
/*  3473 */             $blk = susp.$blk;
/*  3474 */             $loc = susp.$loc;
/*  3475 */             $gbl = susp.$gbl;
/*  3476 */             $exc = susp.$exc;
/*  3477 */             $err = susp.$err;
/*  3478 */             $postfinally = susp.$postfinally;
/*  3479 */             $currLineNo = susp.$lineno;
/*  3480 */             $currColNo = susp.$colno;
/*  3481 */             Sk.lastYield = Date.now();
/*  3482 */             EnumLoc = susp.$tmps.EnumLoc;
/*  3483 */             IntLoc = susp.$tmps.IntLoc;
/*  3484 */             IntParIO = susp.$tmps.IntParIO;
/*  3485 */             $loadgbl300 = susp.$tmps.$loadgbl300;
/*  3486 */             $compareres301 = susp.$tmps.$compareres301;
/*  3487 */             $str302 = susp.$tmps.$str302;
/*  3488 */             $compareres309 = susp.$tmps.$compareres309;
/*  3489 */             $loadgbl310 = susp.$tmps.$loadgbl310;
/*  3490 */             try {
/*  3491 */                 $ret = susp.child.resume();
/*  3492 */             } catch (err) {
/*  3493 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3494 */                     err = new Sk.builtin.ExternalError(err);
/*  3495 */                 }
/*  3496 */                 err.traceback.push({
/*  3497 */                     lineno: $currLineNo,
/*  3498 */                     colno: $currColNo,
/*  3499 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3500 */                 });
/*  3501 */                 if ($exc.length > 0) {
/*  3502 */                     $err = err;
/*  3503 */                     $blk = $exc.pop();
/*  3504 */                 } else {
/*  3505 */                     throw err;
/*  3506 */                 }
/*  3507 */             }
/*  3508 */         };
/*  3509 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3510 */             var susp = new Sk.misceval.Suspension();
/*  3511 */             susp.child = $child;
/*  3512 */             susp.resume = function() {
/*  3513 */                 $scope296.$wakingSuspension = susp;
/*  3514 */                 return $scope296();
/*  3515 */             };
/*  3516 */             susp.data = susp.child.data;
/*  3517 */             susp.$blk = $blk;
/*  3518 */             susp.$loc = $loc;
/*  3519 */             susp.$gbl = $gbl;
/*  3520 */             susp.$exc = $exc;
/*  3521 */             susp.$err = $err;
/*  3522 */             susp.$postfinally = $postfinally;
/*  3523 */             susp.$filename = $filename;
/*  3524 */             susp.$lineno = $lineno;
/*  3525 */             susp.$colno = $colno;
/*  3526 */             susp.optional = susp.child.optional;
/*  3527 */             susp.$tmps = {
/*  3528 */                 "EnumLoc": EnumLoc,
/*  3529 */                 "IntLoc": IntLoc,
/*  3530 */                 "IntParIO": IntParIO,
/*  3531 */                 "$loadgbl300": $loadgbl300,
/*  3532 */                 "$compareres301": $compareres301,
/*  3533 */                 "$str302": $str302,
/*  3534 */                 "$compareres309": $compareres309,
/*  3535 */                 "$loadgbl310": $loadgbl310
/*  3536 */             };
/*  3537 */             return susp;
/*  3538 */         };
/*  3539 */         var $blk = 0,
/*  3540 */             $exc = [],
/*  3541 */             $loc = {},
/*  3542 */             $gbl = this,
/*  3543 */             $err = undefined,
/*  3544 */             $ret = undefined,
/*  3545 */             $postfinally = undefined,
/*  3546 */             $currLineNo = undefined,
/*  3547 */             $currColNo = undefined;
/*  3548 */         if (typeof Sk.execStart === 'undefined') {
/*  3549 */             Sk.execStart = Date.now()
/*  3550 */         }
/*  3551 */         if (typeof Sk.lastYield === 'undefined') {
/*  3552 */             Sk.lastYield = Date.now()
/*  3553 */         }
/*  3554 */         if ($scope296.$wakingSuspension !== undefined) {
/*  3555 */             $wakeFromSuspension();
/*  3556 */         } else {
/*  3557 */             Sk.builtin.pyCheckArgs("Proc2", arguments, 1, 1, false, false);
/*  3558 */         }
/*  3559 */         while (true) {
/*  3560 */             try {
/*  3561 */                 var $dateNow = Date.now();
/*  3562 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3563 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3564 */                 }
/*  3565 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3566 */                     var $susp = $saveSuspension({
/*  3567 */                         data: {
/*  3568 */                             type: 'Sk.yield'
/*  3569 */                         },
/*  3570 */                         resume: function() {}
/*  3571 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  3572 */                     $susp.$blk = $blk;
/*  3573 */                     $susp.optional = true;
/*  3574 */                     return $susp;
/*  3575 */                 }
/*  3576 */                 switch ($blk) {
/*  3577 */                 case 0:
/*  3578 */                     /* --- codeobj entry --- */
/*  3579 */                     if (IntParIO === undefined) {
/*  3580 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3581 */                     }
/*  3582 */ 
/*  3583 */                     //
/*  3584 */                     // line 154:
/*  3585 */                     //     IntLoc = IntParIO + 10
/*  3586 */                     //     ^
/*  3587 */                     //
/*  3588 */                     $currLineNo = 154;
/*  3589 */                     $currColNo = 4;
/*  3590 */ 
/*  3591 */                     if (IntParIO === undefined) {
/*  3592 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3593 */                     }
/*  3594 */                     var $binop298 = Sk.abstr.numberBinOp(IntParIO, new Sk.builtin.int_(10), 'Add');
/*  3595 */                     IntLoc = $binop298;
/*  3596 */                     //
/*  3597 */                     // line 155:
/*  3598 */                     //     while 1:
/*  3599 */                     //     ^
/*  3600 */                     //
/*  3601 */                     $currLineNo = 155;
/*  3602 */                     $currColNo = 4;
/*  3603 */ 
/*  3604 */                     $blk = 1; /* allowing case fallthrough */
/*  3605 */                 case 1:
/*  3606 */                     /* --- while test --- */
/*  3607 */                     //
/*  3608 */                     // line 155:
/*  3609 */                     //     while 1:
/*  3610 */                     //     ^
/*  3611 */                     //
/*  3612 */                     $currLineNo = 155;
/*  3613 */                     $currColNo = 4;
/*  3614 */ 
/*  3615 */                     var $jfalse299 = (new Sk.builtin.int_(1) === false || !Sk.misceval.isTrue(new Sk.builtin.int_(1)));
/*  3616 */                     if ($jfalse299) { /*test failed */
/*  3617 */                         $blk = 2;
/*  3618 */                         continue;
/*  3619 */                     }
/*  3620 */                     $blk = 3; /* allowing case fallthrough */
/*  3621 */                 case 3:
/*  3622 */                     /* --- while body --- */
/*  3623 */                     //
/*  3624 */                     // line 156:
/*  3625 */                     //         if Char1Glob == 'A':
/*  3626 */                     //         ^
/*  3627 */                     //
/*  3628 */                     $currLineNo = 156;
/*  3629 */                     $currColNo = 8;
/*  3630 */ 
/*  3631 */                     var $loadgbl300 = Sk.misceval.loadname('Char1Glob', $gbl);
/*  3632 */                     var $compareres301 = null;
/*  3633 */                     var $str302 = new Sk.builtins['str']('A');
/*  3634 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl300, $str302, 'Eq', true));
/*  3635 */                     $blk = 6; /* allowing case fallthrough */
/*  3636 */                 case 6:
/*  3637 */                     /* --- function return or resume suspension --- */
/*  3638 */                     if ($ret && $ret.$isSuspension) {
/*  3639 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 156, 11);
/*  3640 */                     }
/*  3641 */                     $compareres301 = $ret;
/*  3642 */                     var $jfalse303 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3643 */                     if ($jfalse303) { /*test failed */
/*  3644 */                         $blk = 5;
/*  3645 */                         continue;
/*  3646 */                     }
/*  3647 */                     $blk = 5; /* allowing case fallthrough */
/*  3648 */                 case 5:
/*  3649 */                     /* --- done --- */
/*  3650 */                     var $jfalse304 = ($compareres301 === false || !Sk.misceval.isTrue($compareres301));
/*  3651 */                     if ($jfalse304) { /*test failed */
/*  3652 */                         $blk = 4;
/*  3653 */                         continue;
/*  3654 */                     }
/*  3655 */                     //
/*  3656 */                     // line 157:
/*  3657 */                     //             IntLoc = IntLoc - 1
/*  3658 */                     //             ^
/*  3659 */                     //
/*  3660 */                     $currLineNo = 157;
/*  3661 */                     $currColNo = 12;
/*  3662 */ 
/*  3663 */                     if (IntLoc === undefined) {
/*  3664 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  3665 */                     }
/*  3666 */                     var $binop305 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  3667 */                     IntLoc = $binop305;
/*  3668 */                     //
/*  3669 */                     // line 158:
/*  3670 */                     //             IntParIO = IntLoc - IntGlob
/*  3671 */                     //             ^
/*  3672 */                     //
/*  3673 */                     $currLineNo = 158;
/*  3674 */                     $currColNo = 12;
/*  3675 */ 
/*  3676 */                     if (IntLoc === undefined) {
/*  3677 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  3678 */                     }
/*  3679 */                     var $loadgbl306 = Sk.misceval.loadname('IntGlob', $gbl);
/*  3680 */                     var $binop307 = Sk.abstr.numberBinOp(IntLoc, $loadgbl306, 'Sub');
/*  3681 */                     IntParIO = $binop307;
/*  3682 */                     //
/*  3683 */                     // line 159:
/*  3684 */                     //             EnumLoc = Ident1
/*  3685 */                     //             ^
/*  3686 */                     //
/*  3687 */                     $currLineNo = 159;
/*  3688 */                     $currColNo = 12;
/*  3689 */ 
/*  3690 */                     var $loadgbl308 = Sk.misceval.loadname('Ident1', $gbl);
/*  3691 */                     EnumLoc = $loadgbl308;
/*  3692 */                     $blk = 4; /* allowing case fallthrough */
/*  3693 */                 case 4:
/*  3694 */                     /* --- end of if --- */
/*  3695 */                     //
/*  3696 */                     // line 160:
/*  3697 */                     //         if EnumLoc == Ident1:
/*  3698 */                     //         ^
/*  3699 */                     //
/*  3700 */                     $currLineNo = 160;
/*  3701 */                     $currColNo = 8;
/*  3702 */ 
/*  3703 */                     if (EnumLoc === undefined) {
/*  3704 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  3705 */                     }
/*  3706 */                     var $compareres309 = null;
/*  3707 */                     var $loadgbl310 = Sk.misceval.loadname('Ident1', $gbl);
/*  3708 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $loadgbl310, 'Eq', true));
/*  3709 */                     $blk = 9; /* allowing case fallthrough */
/*  3710 */                 case 9:
/*  3711 */                     /* --- function return or resume suspension --- */
/*  3712 */                     if ($ret && $ret.$isSuspension) {
/*  3713 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 160, 11);
/*  3714 */                     }
/*  3715 */                     $compareres309 = $ret;
/*  3716 */                     var $jfalse311 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3717 */                     if ($jfalse311) { /*test failed */
/*  3718 */                         $blk = 8;
/*  3719 */                         continue;
/*  3720 */                     }
/*  3721 */                     $blk = 8; /* allowing case fallthrough */
/*  3722 */                 case 8:
/*  3723 */                     /* --- done --- */
/*  3724 */                     var $jfalse312 = ($compareres309 === false || !Sk.misceval.isTrue($compareres309));
/*  3725 */                     if ($jfalse312) { /*test failed */
/*  3726 */                         $blk = 7;
/*  3727 */                         continue;
/*  3728 */                     }
/*  3729 */                     //
/*  3730 */                     // line 161:
/*  3731 */                     //             break
/*  3732 */                     //             ^
/*  3733 */                     //
/*  3734 */                     $currLineNo = 161;
/*  3735 */                     $currColNo = 12;
/*  3736 */ 
/*  3737 */                     $blk = 2; /* allowing case fallthrough */
/*  3738 */                 case 2:
/*  3739 */                     /* --- after while --- */
/*  3740 */                     //
/*  3741 */                     // line 162:
/*  3742 */                     //     return IntParIO
/*  3743 */                     //     ^
/*  3744 */                     //
/*  3745 */                     $currLineNo = 162;
/*  3746 */                     $currColNo = 4;
/*  3747 */ 
/*  3748 */                     if (IntParIO === undefined) {
/*  3749 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParIO\' referenced before assignment');
/*  3750 */                     }
/*  3751 */                     return IntParIO;
/*  3752 */                     return Sk.builtin.none.none$;
/*  3753 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3754 */                 case 7:
/*  3755 */                     /* --- end of if --- */
/*  3756 */                     $blk = 1; /* jump */
/*  3757 */                     continue;
/*  3758 */                 }
/*  3759 */             } catch (err) {
/*  3760 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3761 */                     err = new Sk.builtin.ExternalError(err);
/*  3762 */                 }
/*  3763 */                 err.traceback.push({
/*  3764 */                     lineno: $currLineNo,
/*  3765 */                     colno: $currColNo,
/*  3766 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
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
/*  3778 */     var $scope314 = (function $Proc3315$(PtrParOut) {
/*  3779 */         var PtrParOut, PtrParOut, PtrParOut, $loadgbl316, $compareres317, $loadgbl320, $loadgbl322, $loadgbl323, $loadgbl322, $loadgbl323, $call324, $loadgbl325;
/*  3780 */         var $wakeFromSuspension = function() {
/*  3781 */             var susp = $scope314.$wakingSuspension;
/*  3782 */             delete $scope314.$wakingSuspension;
/*  3783 */             $blk = susp.$blk;
/*  3784 */             $loc = susp.$loc;
/*  3785 */             $gbl = susp.$gbl;
/*  3786 */             $exc = susp.$exc;
/*  3787 */             $err = susp.$err;
/*  3788 */             $postfinally = susp.$postfinally;
/*  3789 */             $currLineNo = susp.$lineno;
/*  3790 */             $currColNo = susp.$colno;
/*  3791 */             Sk.lastYield = Date.now();
/*  3792 */             PtrParOut = susp.$tmps.PtrParOut;
/*  3793 */             $loadgbl316 = susp.$tmps.$loadgbl316;
/*  3794 */             $compareres317 = susp.$tmps.$compareres317;
/*  3795 */             $loadgbl320 = susp.$tmps.$loadgbl320;
/*  3796 */             $loadgbl322 = susp.$tmps.$loadgbl322;
/*  3797 */             $loadgbl323 = susp.$tmps.$loadgbl323;
/*  3798 */             $call324 = susp.$tmps.$call324;
/*  3799 */             $loadgbl325 = susp.$tmps.$loadgbl325;
/*  3800 */             try {
/*  3801 */                 $ret = susp.child.resume();
/*  3802 */             } catch (err) {
/*  3803 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3804 */                     err = new Sk.builtin.ExternalError(err);
/*  3805 */                 }
/*  3806 */                 err.traceback.push({
/*  3807 */                     lineno: $currLineNo,
/*  3808 */                     colno: $currColNo,
/*  3809 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  3810 */                 });
/*  3811 */                 if ($exc.length > 0) {
/*  3812 */                     $err = err;
/*  3813 */                     $blk = $exc.pop();
/*  3814 */                 } else {
/*  3815 */                     throw err;
/*  3816 */                 }
/*  3817 */             }
/*  3818 */         };
/*  3819 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3820 */             var susp = new Sk.misceval.Suspension();
/*  3821 */             susp.child = $child;
/*  3822 */             susp.resume = function() {
/*  3823 */                 $scope314.$wakingSuspension = susp;
/*  3824 */                 return $scope314();
/*  3825 */             };
/*  3826 */             susp.data = susp.child.data;
/*  3827 */             susp.$blk = $blk;
/*  3828 */             susp.$loc = $loc;
/*  3829 */             susp.$gbl = $gbl;
/*  3830 */             susp.$exc = $exc;
/*  3831 */             susp.$err = $err;
/*  3832 */             susp.$postfinally = $postfinally;
/*  3833 */             susp.$filename = $filename;
/*  3834 */             susp.$lineno = $lineno;
/*  3835 */             susp.$colno = $colno;
/*  3836 */             susp.optional = susp.child.optional;
/*  3837 */             susp.$tmps = {
/*  3838 */                 "PtrParOut": PtrParOut,
/*  3839 */                 "$loadgbl316": $loadgbl316,
/*  3840 */                 "$compareres317": $compareres317,
/*  3841 */                 "$loadgbl320": $loadgbl320,
/*  3842 */                 "$loadgbl322": $loadgbl322,
/*  3843 */                 "$loadgbl323": $loadgbl323,
/*  3844 */                 "$call324": $call324,
/*  3845 */                 "$loadgbl325": $loadgbl325
/*  3846 */             };
/*  3847 */             return susp;
/*  3848 */         };
/*  3849 */         var $blk = 0,
/*  3850 */             $exc = [],
/*  3851 */             $loc = {},
/*  3852 */             $gbl = this,
/*  3853 */             $err = undefined,
/*  3854 */             $ret = undefined,
/*  3855 */             $postfinally = undefined,
/*  3856 */             $currLineNo = undefined,
/*  3857 */             $currColNo = undefined;
/*  3858 */         if (typeof Sk.execStart === 'undefined') {
/*  3859 */             Sk.execStart = Date.now()
/*  3860 */         }
/*  3861 */         if (typeof Sk.lastYield === 'undefined') {
/*  3862 */             Sk.lastYield = Date.now()
/*  3863 */         }
/*  3864 */         if ($scope314.$wakingSuspension !== undefined) {
/*  3865 */             $wakeFromSuspension();
/*  3866 */         } else {
/*  3867 */             Sk.builtin.pyCheckArgs("Proc3", arguments, 1, 1, false, false);
/*  3868 */         }
/*  3869 */         while (true) {
/*  3870 */             try {
/*  3871 */                 var $dateNow = Date.now();
/*  3872 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3873 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3874 */                 }
/*  3875 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3876 */                     var $susp = $saveSuspension({
/*  3877 */                         data: {
/*  3878 */                             type: 'Sk.yield'
/*  3879 */                         },
/*  3880 */                         resume: function() {}
/*  3881 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  3882 */                     $susp.$blk = $blk;
/*  3883 */                     $susp.optional = true;
/*  3884 */                     return $susp;
/*  3885 */                 }
/*  3886 */                 switch ($blk) {
/*  3887 */                 case 0:
/*  3888 */                     /* --- codeobj entry --- */
/*  3889 */                     if (PtrParOut === undefined) {
/*  3890 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParOut\' referenced before assignment');
/*  3891 */                     }
/*  3892 */ 
/*  3893 */                     //
/*  3894 */                     // line 165:
/*  3895 */                     //     global IntGlob
/*  3896 */                     //     ^
/*  3897 */                     //
/*  3898 */                     $currLineNo = 165;
/*  3899 */                     $currColNo = 4;
/*  3900 */ 
/*  3901 */ 
/*  3902 */                     //
/*  3903 */                     // line 167:
/*  3904 */                     //     if PtrGlb is not None:
/*  3905 */                     //     ^
/*  3906 */                     //
/*  3907 */                     $currLineNo = 167;
/*  3908 */                     $currColNo = 4;
/*  3909 */ 
/*  3910 */                     var $loadgbl316 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3911 */                     var $compareres317 = null;
/*  3912 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl316, Sk.builtin.none.none$, 'IsNot', true));
/*  3913 */                     $blk = 4; /* allowing case fallthrough */
/*  3914 */                 case 4:
/*  3915 */                     /* --- function return or resume suspension --- */
/*  3916 */                     if ($ret && $ret.$isSuspension) {
/*  3917 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 167, 7);
/*  3918 */                     }
/*  3919 */                     $compareres317 = $ret;
/*  3920 */                     var $jfalse318 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3921 */                     if ($jfalse318) { /*test failed */
/*  3922 */                         $blk = 3;
/*  3923 */                         continue;
/*  3924 */                     }
/*  3925 */                     $blk = 3; /* allowing case fallthrough */
/*  3926 */                 case 3:
/*  3927 */                     /* --- done --- */
/*  3928 */                     var $jfalse319 = ($compareres317 === false || !Sk.misceval.isTrue($compareres317));
/*  3929 */                     if ($jfalse319) { /*test failed */
/*  3930 */                         $blk = 2;
/*  3931 */                         continue;
/*  3932 */                     }
/*  3933 */                     //
/*  3934 */                     // line 168:
/*  3935 */                     //         PtrParOut = PtrGlb.PtrComp
/*  3936 */                     //         ^
/*  3937 */                     //
/*  3938 */                     $currLineNo = 168;
/*  3939 */                     $currColNo = 8;
/*  3940 */ 
/*  3941 */                     var $loadgbl320 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3942 */                     $ret = Sk.abstr.gattr($loadgbl320, 'PtrComp', true);
/*  3943 */                     $blk = 5; /* allowing case fallthrough */
/*  3944 */                 case 5:
/*  3945 */                     /* --- function return or resume suspension --- */
/*  3946 */                     if ($ret && $ret.$isSuspension) {
/*  3947 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 168, 20);
/*  3948 */                     }
/*  3949 */                     var $lattr321 = $ret;
/*  3950 */                     PtrParOut = $lattr321;
/*  3951 */                     $blk = 1; /* allowing case fallthrough */
/*  3952 */                 case 1:
/*  3953 */                     /* --- end of if --- */
/*  3954 */                     //
/*  3955 */                     // line 171:
/*  3956 */                     //     PtrGlb.IntComp = Proc7(10, IntGlob)
/*  3957 */                     //     ^
/*  3958 */                     //
/*  3959 */                     $currLineNo = 171;
/*  3960 */                     $currColNo = 4;
/*  3961 */ 
/*  3962 */                     var $loadgbl322 = Sk.misceval.loadname('Proc7', $gbl);
/*  3963 */                     var $loadgbl323 = Sk.misceval.loadname('IntGlob', $gbl);
/*  3964 */                     $ret;
/*  3965 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl322, new Sk.builtin.int_(10), $loadgbl323);
/*  3966 */                     $blk = 6; /* allowing case fallthrough */
/*  3967 */                 case 6:
/*  3968 */                     /* --- function return or resume suspension --- */
/*  3969 */                     if ($ret && $ret.$isSuspension) {
/*  3970 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 171, 21);
/*  3971 */                     }
/*  3972 */                     var $call324 = $ret;
/*  3973 */                     //
/*  3974 */                     // line 171:
/*  3975 */                     //     PtrGlb.IntComp = Proc7(10, IntGlob)
/*  3976 */                     //                      ^
/*  3977 */                     //
/*  3978 */                     $currLineNo = 171;
/*  3979 */                     $currColNo = 21;
/*  3980 */ 
/*  3981 */                     var $loadgbl325 = Sk.misceval.loadname('PtrGlb', $gbl);
/*  3982 */                     $ret = Sk.abstr.sattr($loadgbl325, 'IntComp', $call324, true);
/*  3983 */                     $blk = 7; /* allowing case fallthrough */
/*  3984 */                 case 7:
/*  3985 */                     /* --- function return or resume suspension --- */
/*  3986 */                     if ($ret && $ret.$isSuspension) {
/*  3987 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 171, 4);
/*  3988 */                     }
/*  3989 */                     //
/*  3990 */                     // line 172:
/*  3991 */                     //     return PtrParOut
/*  3992 */                     //     ^
/*  3993 */                     //
/*  3994 */                     $currLineNo = 172;
/*  3995 */                     $currColNo = 4;
/*  3996 */ 
/*  3997 */                     if (PtrParOut === undefined) {
/*  3998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'PtrParOut\' referenced before assignment');
/*  3999 */                     }
/*  4000 */                     return PtrParOut;
/*  4001 */                     return Sk.builtin.none.none$;
/*  4002 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4003 */                 case 2:
/*  4004 */                     /* --- next branch of if --- */
/*  4005 */                     //
/*  4006 */                     // line 170:
/*  4007 */                     //         IntGlob = 100
/*  4008 */                     //         ^
/*  4009 */                     //
/*  4010 */                     $currLineNo = 170;
/*  4011 */                     $currColNo = 8;
/*  4012 */ 
/*  4013 */                     $gbl.IntGlob = new Sk.builtin.int_(100);
/*  4014 */                     $blk = 1; /* jump */
/*  4015 */                     continue;
/*  4016 */                 }
/*  4017 */             } catch (err) {
/*  4018 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4019 */                     err = new Sk.builtin.ExternalError(err);
/*  4020 */                 }
/*  4021 */                 err.traceback.push({
/*  4022 */                     lineno: $currLineNo,
/*  4023 */                     colno: $currColNo,
/*  4024 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4025 */                 });
/*  4026 */                 if ($exc.length > 0) {
/*  4027 */                     $err = err;
/*  4028 */                     $blk = $exc.pop();
/*  4029 */                     continue;
/*  4030 */                 } else {
/*  4031 */                     throw err;
/*  4032 */                 }
/*  4033 */             }
/*  4034 */         }
/*  4035 */     });
/*  4036 */     var $scope327 = (function $Proc4328$() {
/*  4037 */         var BoolLoc; /* locals */
/*  4038 */         var BoolLoc, BoolLoc, BoolLoc, $loadgbl329, $compareres330, $str331;
/*  4039 */         var $wakeFromSuspension = function() {
/*  4040 */             var susp = $scope327.$wakingSuspension;
/*  4041 */             delete $scope327.$wakingSuspension;
/*  4042 */             $blk = susp.$blk;
/*  4043 */             $loc = susp.$loc;
/*  4044 */             $gbl = susp.$gbl;
/*  4045 */             $exc = susp.$exc;
/*  4046 */             $err = susp.$err;
/*  4047 */             $postfinally = susp.$postfinally;
/*  4048 */             $currLineNo = susp.$lineno;
/*  4049 */             $currColNo = susp.$colno;
/*  4050 */             Sk.lastYield = Date.now();
/*  4051 */             BoolLoc = susp.$tmps.BoolLoc;
/*  4052 */             $loadgbl329 = susp.$tmps.$loadgbl329;
/*  4053 */             $compareres330 = susp.$tmps.$compareres330;
/*  4054 */             $str331 = susp.$tmps.$str331;
/*  4055 */             try {
/*  4056 */                 $ret = susp.child.resume();
/*  4057 */             } catch (err) {
/*  4058 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4059 */                     err = new Sk.builtin.ExternalError(err);
/*  4060 */                 }
/*  4061 */                 err.traceback.push({
/*  4062 */                     lineno: $currLineNo,
/*  4063 */                     colno: $currColNo,
/*  4064 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4065 */                 });
/*  4066 */                 if ($exc.length > 0) {
/*  4067 */                     $err = err;
/*  4068 */                     $blk = $exc.pop();
/*  4069 */                 } else {
/*  4070 */                     throw err;
/*  4071 */                 }
/*  4072 */             }
/*  4073 */         };
/*  4074 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4075 */             var susp = new Sk.misceval.Suspension();
/*  4076 */             susp.child = $child;
/*  4077 */             susp.resume = function() {
/*  4078 */                 $scope327.$wakingSuspension = susp;
/*  4079 */                 return $scope327();
/*  4080 */             };
/*  4081 */             susp.data = susp.child.data;
/*  4082 */             susp.$blk = $blk;
/*  4083 */             susp.$loc = $loc;
/*  4084 */             susp.$gbl = $gbl;
/*  4085 */             susp.$exc = $exc;
/*  4086 */             susp.$err = $err;
/*  4087 */             susp.$postfinally = $postfinally;
/*  4088 */             susp.$filename = $filename;
/*  4089 */             susp.$lineno = $lineno;
/*  4090 */             susp.$colno = $colno;
/*  4091 */             susp.optional = susp.child.optional;
/*  4092 */             susp.$tmps = {
/*  4093 */                 "BoolLoc": BoolLoc,
/*  4094 */                 "$loadgbl329": $loadgbl329,
/*  4095 */                 "$compareres330": $compareres330,
/*  4096 */                 "$str331": $str331
/*  4097 */             };
/*  4098 */             return susp;
/*  4099 */         };
/*  4100 */         var $blk = 0,
/*  4101 */             $exc = [],
/*  4102 */             $loc = {},
/*  4103 */             $gbl = this,
/*  4104 */             $err = undefined,
/*  4105 */             $ret = undefined,
/*  4106 */             $postfinally = undefined,
/*  4107 */             $currLineNo = undefined,
/*  4108 */             $currColNo = undefined;
/*  4109 */         if (typeof Sk.execStart === 'undefined') {
/*  4110 */             Sk.execStart = Date.now()
/*  4111 */         }
/*  4112 */         if (typeof Sk.lastYield === 'undefined') {
/*  4113 */             Sk.lastYield = Date.now()
/*  4114 */         }
/*  4115 */         if ($scope327.$wakingSuspension !== undefined) {
/*  4116 */             $wakeFromSuspension();
/*  4117 */         } else {
/*  4118 */             Sk.builtin.pyCheckArgs("Proc4", arguments, 0, 0, false, false);
/*  4119 */         }
/*  4120 */         while (true) {
/*  4121 */             try {
/*  4122 */                 var $dateNow = Date.now();
/*  4123 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4124 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4125 */                 }
/*  4126 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4127 */                     var $susp = $saveSuspension({
/*  4128 */                         data: {
/*  4129 */                             type: 'Sk.yield'
/*  4130 */                         },
/*  4131 */                         resume: function() {}
/*  4132 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4133 */                     $susp.$blk = $blk;
/*  4134 */                     $susp.optional = true;
/*  4135 */                     return $susp;
/*  4136 */                 }
/*  4137 */                 switch ($blk) {
/*  4138 */                 case 0:
/*  4139 */                     /* --- codeobj entry --- */
/*  4140 */                     //
/*  4141 */                     // line 175:
/*  4142 */                     //     global Char2Glob
/*  4143 */                     //     ^
/*  4144 */                     //
/*  4145 */                     $currLineNo = 175;
/*  4146 */                     $currColNo = 4;
/*  4147 */ 
/*  4148 */ 
/*  4149 */                     //
/*  4150 */                     // line 177:
/*  4151 */                     //     BoolLoc = Char1Glob == 'A'
/*  4152 */                     //     ^
/*  4153 */                     //
/*  4154 */                     $currLineNo = 177;
/*  4155 */                     $currColNo = 4;
/*  4156 */ 
/*  4157 */                     var $loadgbl329 = Sk.misceval.loadname('Char1Glob', $gbl);
/*  4158 */                     var $compareres330 = null;
/*  4159 */                     var $str331 = new Sk.builtins['str']('A');
/*  4160 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl329, $str331, 'Eq', true));
/*  4161 */                     $blk = 2; /* allowing case fallthrough */
/*  4162 */                 case 2:
/*  4163 */                     /* --- function return or resume suspension --- */
/*  4164 */                     if ($ret && $ret.$isSuspension) {
/*  4165 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 177, 14);
/*  4166 */                     }
/*  4167 */                     $compareres330 = $ret;
/*  4168 */                     var $jfalse332 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4169 */                     if ($jfalse332) { /*test failed */
/*  4170 */                         $blk = 1;
/*  4171 */                         continue;
/*  4172 */                     }
/*  4173 */                     $blk = 1; /* allowing case fallthrough */
/*  4174 */                 case 1:
/*  4175 */                     /* --- done --- */
/*  4176 */                     BoolLoc = $compareres330;
/*  4177 */                     //
/*  4178 */                     // line 178:
/*  4179 */                     //     BoolLoc = BoolLoc or BoolGlob
/*  4180 */                     //     ^
/*  4181 */                     //
/*  4182 */                     $currLineNo = 178;
/*  4183 */                     $currColNo = 4;
/*  4184 */ 
/*  4185 */                     if (BoolLoc === undefined) {
/*  4186 */                         throw new Sk.builtin.UnboundLocalError('local variable \'BoolLoc\' referenced before assignment');
/*  4187 */                     }
/*  4188 */                     var $boolopsucc333 = BoolLoc;
/*  4189 */                     $boolopsucc333 = BoolLoc;
/*  4190 */                     var $jtrue334 = (BoolLoc === true || Sk.misceval.isTrue(BoolLoc));
/*  4191 */                     if ($jtrue334) { /*test passed */
/*  4192 */                         $blk = 3;
/*  4193 */                         continue;
/*  4194 */                     }
/*  4195 */                     var $loadgbl335 = Sk.misceval.loadname('BoolGlob', $gbl);
/*  4196 */                     $boolopsucc333 = $loadgbl335;
/*  4197 */                     var $jtrue336 = ($loadgbl335 === true || Sk.misceval.isTrue($loadgbl335));
/*  4198 */                     if ($jtrue336) { /*test passed */
/*  4199 */                         $blk = 3;
/*  4200 */                         continue;
/*  4201 */                     }
/*  4202 */                     $blk = 3; /* allowing case fallthrough */
/*  4203 */                 case 3:
/*  4204 */                     /* --- end of boolop --- */
/*  4205 */                     BoolLoc = $boolopsucc333;
/*  4206 */                     //
/*  4207 */                     // line 179:
/*  4208 */                     //     Char2Glob = 'B'
/*  4209 */                     //     ^
/*  4210 */                     //
/*  4211 */                     $currLineNo = 179;
/*  4212 */                     $currColNo = 4;
/*  4213 */ 
/*  4214 */                     var $str337 = new Sk.builtins['str']('B');
/*  4215 */                     $gbl.Char2Glob = $str337;
/*  4216 */                     return Sk.builtin.none.none$;
/*  4217 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4218 */                 }
/*  4219 */             } catch (err) {
/*  4220 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4221 */                     err = new Sk.builtin.ExternalError(err);
/*  4222 */                 }
/*  4223 */                 err.traceback.push({
/*  4224 */                     lineno: $currLineNo,
/*  4225 */                     colno: $currColNo,
/*  4226 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4227 */                 });
/*  4228 */                 if ($exc.length > 0) {
/*  4229 */                     $err = err;
/*  4230 */                     $blk = $exc.pop();
/*  4231 */                     continue;
/*  4232 */                 } else {
/*  4233 */                     throw err;
/*  4234 */                 }
/*  4235 */             }
/*  4236 */         }
/*  4237 */     });
/*  4238 */     var $scope339 = (function $Proc5340$() {
/*  4239 */         var $wakeFromSuspension = function() {
/*  4240 */             var susp = $scope339.$wakingSuspension;
/*  4241 */             delete $scope339.$wakingSuspension;
/*  4242 */             $blk = susp.$blk;
/*  4243 */             $loc = susp.$loc;
/*  4244 */             $gbl = susp.$gbl;
/*  4245 */             $exc = susp.$exc;
/*  4246 */             $err = susp.$err;
/*  4247 */             $postfinally = susp.$postfinally;
/*  4248 */             $currLineNo = susp.$lineno;
/*  4249 */             $currColNo = susp.$colno;
/*  4250 */             Sk.lastYield = Date.now();
/*  4251 */             try {
/*  4252 */                 $ret = susp.child.resume();
/*  4253 */             } catch (err) {
/*  4254 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4255 */                     err = new Sk.builtin.ExternalError(err);
/*  4256 */                 }
/*  4257 */                 err.traceback.push({
/*  4258 */                     lineno: $currLineNo,
/*  4259 */                     colno: $currColNo,
/*  4260 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4261 */                 });
/*  4262 */                 if ($exc.length > 0) {
/*  4263 */                     $err = err;
/*  4264 */                     $blk = $exc.pop();
/*  4265 */                 } else {
/*  4266 */                     throw err;
/*  4267 */                 }
/*  4268 */             }
/*  4269 */         };
/*  4270 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4271 */             var susp = new Sk.misceval.Suspension();
/*  4272 */             susp.child = $child;
/*  4273 */             susp.resume = function() {
/*  4274 */                 $scope339.$wakingSuspension = susp;
/*  4275 */                 return $scope339();
/*  4276 */             };
/*  4277 */             susp.data = susp.child.data;
/*  4278 */             susp.$blk = $blk;
/*  4279 */             susp.$loc = $loc;
/*  4280 */             susp.$gbl = $gbl;
/*  4281 */             susp.$exc = $exc;
/*  4282 */             susp.$err = $err;
/*  4283 */             susp.$postfinally = $postfinally;
/*  4284 */             susp.$filename = $filename;
/*  4285 */             susp.$lineno = $lineno;
/*  4286 */             susp.$colno = $colno;
/*  4287 */             susp.optional = susp.child.optional;
/*  4288 */             susp.$tmps = {};
/*  4289 */             return susp;
/*  4290 */         };
/*  4291 */         var $blk = 0,
/*  4292 */             $exc = [],
/*  4293 */             $loc = {},
/*  4294 */             $gbl = this,
/*  4295 */             $err = undefined,
/*  4296 */             $ret = undefined,
/*  4297 */             $postfinally = undefined,
/*  4298 */             $currLineNo = undefined,
/*  4299 */             $currColNo = undefined;
/*  4300 */         if (typeof Sk.execStart === 'undefined') {
/*  4301 */             Sk.execStart = Date.now()
/*  4302 */         }
/*  4303 */         if (typeof Sk.lastYield === 'undefined') {
/*  4304 */             Sk.lastYield = Date.now()
/*  4305 */         }
/*  4306 */         if ($scope339.$wakingSuspension !== undefined) {
/*  4307 */             $wakeFromSuspension();
/*  4308 */         } else {
/*  4309 */             Sk.builtin.pyCheckArgs("Proc5", arguments, 0, 0, false, false);
/*  4310 */         }
/*  4311 */         while (true) {
/*  4312 */             try {
/*  4313 */                 var $dateNow = Date.now();
/*  4314 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4315 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4316 */                 }
/*  4317 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4318 */                     var $susp = $saveSuspension({
/*  4319 */                         data: {
/*  4320 */                             type: 'Sk.yield'
/*  4321 */                         },
/*  4322 */                         resume: function() {}
/*  4323 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4324 */                     $susp.$blk = $blk;
/*  4325 */                     $susp.optional = true;
/*  4326 */                     return $susp;
/*  4327 */                 }
/*  4328 */                 switch ($blk) {
/*  4329 */                 case 0:
/*  4330 */                     /* --- codeobj entry --- */
/*  4331 */                     //
/*  4332 */                     // line 182:
/*  4333 */                     //     global Char1Glob
/*  4334 */                     //     ^
/*  4335 */                     //
/*  4336 */                     $currLineNo = 182;
/*  4337 */                     $currColNo = 4;
/*  4338 */ 
/*  4339 */ 
/*  4340 */                     //
/*  4341 */                     // line 183:
/*  4342 */                     //     global BoolGlob
/*  4343 */                     //     ^
/*  4344 */                     //
/*  4345 */                     $currLineNo = 183;
/*  4346 */                     $currColNo = 4;
/*  4347 */ 
/*  4348 */ 
/*  4349 */                     //
/*  4350 */                     // line 185:
/*  4351 */                     //     Char1Glob = 'A'
/*  4352 */                     //     ^
/*  4353 */                     //
/*  4354 */                     $currLineNo = 185;
/*  4355 */                     $currColNo = 4;
/*  4356 */ 
/*  4357 */                     var $str341 = new Sk.builtins['str']('A');
/*  4358 */                     $gbl.Char1Glob = $str341;
/*  4359 */                     //
/*  4360 */                     // line 186:
/*  4361 */                     //     BoolGlob = FALSE
/*  4362 */                     //     ^
/*  4363 */                     //
/*  4364 */                     $currLineNo = 186;
/*  4365 */                     $currColNo = 4;
/*  4366 */ 
/*  4367 */                     var $loadgbl342 = Sk.misceval.loadname('FALSE', $gbl);
/*  4368 */                     $gbl.BoolGlob = $loadgbl342;
/*  4369 */                     return Sk.builtin.none.none$;
/*  4370 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4371 */                 }
/*  4372 */             } catch (err) {
/*  4373 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4374 */                     err = new Sk.builtin.ExternalError(err);
/*  4375 */                 }
/*  4376 */                 err.traceback.push({
/*  4377 */                     lineno: $currLineNo,
/*  4378 */                     colno: $currColNo,
/*  4379 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4380 */                 });
/*  4381 */                 if ($exc.length > 0) {
/*  4382 */                     $err = err;
/*  4383 */                     $blk = $exc.pop();
/*  4384 */                     continue;
/*  4385 */                 } else {
/*  4386 */                     throw err;
/*  4387 */                 }
/*  4388 */             }
/*  4389 */         }
/*  4390 */     });
/*  4391 */     var $scope344 = (function $Proc6345$(EnumParIn) {
/*  4392 */         var EnumParOut; /* locals */
/*  4393 */         var EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParIn, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, EnumParOut, $loadgbl346, $compareres351, $loadgbl352, $compareres356, $loadgbl357, $loadgbl360, $compareres361, $compareres366, $loadgbl367, $compareres371, $loadgbl372, $compareres375, $loadgbl376;
/*  4394 */         var $wakeFromSuspension = function() {
/*  4395 */             var susp = $scope344.$wakingSuspension;
/*  4396 */             delete $scope344.$wakingSuspension;
/*  4397 */             $blk = susp.$blk;
/*  4398 */             $loc = susp.$loc;
/*  4399 */             $gbl = susp.$gbl;
/*  4400 */             $exc = susp.$exc;
/*  4401 */             $err = susp.$err;
/*  4402 */             $postfinally = susp.$postfinally;
/*  4403 */             $currLineNo = susp.$lineno;
/*  4404 */             $currColNo = susp.$colno;
/*  4405 */             Sk.lastYield = Date.now();
/*  4406 */             EnumParIn = susp.$tmps.EnumParIn;
/*  4407 */             EnumParOut = susp.$tmps.EnumParOut;
/*  4408 */             $loadgbl346 = susp.$tmps.$loadgbl346;
/*  4409 */             $compareres351 = susp.$tmps.$compareres351;
/*  4410 */             $loadgbl352 = susp.$tmps.$loadgbl352;
/*  4411 */             $compareres356 = susp.$tmps.$compareres356;
/*  4412 */             $loadgbl357 = susp.$tmps.$loadgbl357;
/*  4413 */             $loadgbl360 = susp.$tmps.$loadgbl360;
/*  4414 */             $compareres361 = susp.$tmps.$compareres361;
/*  4415 */             $compareres366 = susp.$tmps.$compareres366;
/*  4416 */             $loadgbl367 = susp.$tmps.$loadgbl367;
/*  4417 */             $compareres371 = susp.$tmps.$compareres371;
/*  4418 */             $loadgbl372 = susp.$tmps.$loadgbl372;
/*  4419 */             $compareres375 = susp.$tmps.$compareres375;
/*  4420 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  4421 */             try {
/*  4422 */                 $ret = susp.child.resume();
/*  4423 */             } catch (err) {
/*  4424 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4425 */                     err = new Sk.builtin.ExternalError(err);
/*  4426 */                 }
/*  4427 */                 err.traceback.push({
/*  4428 */                     lineno: $currLineNo,
/*  4429 */                     colno: $currColNo,
/*  4430 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4431 */                 });
/*  4432 */                 if ($exc.length > 0) {
/*  4433 */                     $err = err;
/*  4434 */                     $blk = $exc.pop();
/*  4435 */                 } else {
/*  4436 */                     throw err;
/*  4437 */                 }
/*  4438 */             }
/*  4439 */         };
/*  4440 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4441 */             var susp = new Sk.misceval.Suspension();
/*  4442 */             susp.child = $child;
/*  4443 */             susp.resume = function() {
/*  4444 */                 $scope344.$wakingSuspension = susp;
/*  4445 */                 return $scope344();
/*  4446 */             };
/*  4447 */             susp.data = susp.child.data;
/*  4448 */             susp.$blk = $blk;
/*  4449 */             susp.$loc = $loc;
/*  4450 */             susp.$gbl = $gbl;
/*  4451 */             susp.$exc = $exc;
/*  4452 */             susp.$err = $err;
/*  4453 */             susp.$postfinally = $postfinally;
/*  4454 */             susp.$filename = $filename;
/*  4455 */             susp.$lineno = $lineno;
/*  4456 */             susp.$colno = $colno;
/*  4457 */             susp.optional = susp.child.optional;
/*  4458 */             susp.$tmps = {
/*  4459 */                 "EnumParIn": EnumParIn,
/*  4460 */                 "EnumParOut": EnumParOut,
/*  4461 */                 "$loadgbl346": $loadgbl346,
/*  4462 */                 "$compareres351": $compareres351,
/*  4463 */                 "$loadgbl352": $loadgbl352,
/*  4464 */                 "$compareres356": $compareres356,
/*  4465 */                 "$loadgbl357": $loadgbl357,
/*  4466 */                 "$loadgbl360": $loadgbl360,
/*  4467 */                 "$compareres361": $compareres361,
/*  4468 */                 "$compareres366": $compareres366,
/*  4469 */                 "$loadgbl367": $loadgbl367,
/*  4470 */                 "$compareres371": $compareres371,
/*  4471 */                 "$loadgbl372": $loadgbl372,
/*  4472 */                 "$compareres375": $compareres375,
/*  4473 */                 "$loadgbl376": $loadgbl376
/*  4474 */             };
/*  4475 */             return susp;
/*  4476 */         };
/*  4477 */         var $blk = 0,
/*  4478 */             $exc = [],
/*  4479 */             $loc = {},
/*  4480 */             $gbl = this,
/*  4481 */             $err = undefined,
/*  4482 */             $ret = undefined,
/*  4483 */             $postfinally = undefined,
/*  4484 */             $currLineNo = undefined,
/*  4485 */             $currColNo = undefined;
/*  4486 */         if (typeof Sk.execStart === 'undefined') {
/*  4487 */             Sk.execStart = Date.now()
/*  4488 */         }
/*  4489 */         if (typeof Sk.lastYield === 'undefined') {
/*  4490 */             Sk.lastYield = Date.now()
/*  4491 */         }
/*  4492 */         if ($scope344.$wakingSuspension !== undefined) {
/*  4493 */             $wakeFromSuspension();
/*  4494 */         } else {
/*  4495 */             Sk.builtin.pyCheckArgs("Proc6", arguments, 1, 1, false, false);
/*  4496 */         }
/*  4497 */         while (true) {
/*  4498 */             try {
/*  4499 */                 var $dateNow = Date.now();
/*  4500 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4501 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4502 */                 }
/*  4503 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4504 */                     var $susp = $saveSuspension({
/*  4505 */                         data: {
/*  4506 */                             type: 'Sk.yield'
/*  4507 */                         },
/*  4508 */                         resume: function() {}
/*  4509 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  4510 */                     $susp.$blk = $blk;
/*  4511 */                     $susp.optional = true;
/*  4512 */                     return $susp;
/*  4513 */                 }
/*  4514 */                 switch ($blk) {
/*  4515 */                 case 0:
/*  4516 */                     /* --- codeobj entry --- */
/*  4517 */                     if (EnumParIn === undefined) {
/*  4518 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4519 */                     }
/*  4520 */ 
/*  4521 */                     //
/*  4522 */                     // line 189:
/*  4523 */                     //     EnumParOut = EnumParIn
/*  4524 */                     //     ^
/*  4525 */                     //
/*  4526 */                     $currLineNo = 189;
/*  4527 */                     $currColNo = 4;
/*  4528 */ 
/*  4529 */                     if (EnumParIn === undefined) {
/*  4530 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4531 */                     }
/*  4532 */                     EnumParOut = EnumParIn;
/*  4533 */                     //
/*  4534 */                     // line 190:
/*  4535 */                     //     if not Func3(EnumParIn):
/*  4536 */                     //     ^
/*  4537 */                     //
/*  4538 */                     $currLineNo = 190;
/*  4539 */                     $currColNo = 4;
/*  4540 */ 
/*  4541 */                     var $loadgbl346 = Sk.misceval.loadname('Func3', $gbl);
/*  4542 */                     if (EnumParIn === undefined) {
/*  4543 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4544 */                     }
/*  4545 */                     $ret;
/*  4546 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl346, EnumParIn);
/*  4547 */                     $blk = 2; /* allowing case fallthrough */
/*  4548 */                 case 2:
/*  4549 */                     /* --- function return or resume suspension --- */
/*  4550 */                     if ($ret && $ret.$isSuspension) {
/*  4551 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 190, 11);
/*  4552 */                     }
/*  4553 */                     var $call347 = $ret;
/*  4554 */                     //
/*  4555 */                     // line 190:
/*  4556 */                     //     if not Func3(EnumParIn):
/*  4557 */                     //            ^
/*  4558 */                     //
/*  4559 */                     $currLineNo = 190;
/*  4560 */                     $currColNo = 11;
/*  4561 */ 
/*  4562 */                     var $unaryop348 = Sk.abstr.numberUnaryOp($call347, 'Not');
/*  4563 */                     var $jfalse349 = ($unaryop348 === false || !Sk.misceval.isTrue($unaryop348));
/*  4564 */                     if ($jfalse349) { /*test failed */
/*  4565 */                         $blk = 1;
/*  4566 */                         continue;
/*  4567 */                     }
/*  4568 */                     //
/*  4569 */                     // line 191:
/*  4570 */                     //         EnumParOut = Ident4
/*  4571 */                     //         ^
/*  4572 */                     //
/*  4573 */                     $currLineNo = 191;
/*  4574 */                     $currColNo = 8;
/*  4575 */ 
/*  4576 */                     var $loadgbl350 = Sk.misceval.loadname('Ident4', $gbl);
/*  4577 */                     EnumParOut = $loadgbl350;
/*  4578 */                     $blk = 1; /* allowing case fallthrough */
/*  4579 */                 case 1:
/*  4580 */                     /* --- end of if --- */
/*  4581 */                     //
/*  4582 */                     // line 192:
/*  4583 */                     //     if EnumParIn == Ident1:
/*  4584 */                     //     ^
/*  4585 */                     //
/*  4586 */                     $currLineNo = 192;
/*  4587 */                     $currColNo = 4;
/*  4588 */ 
/*  4589 */                     if (EnumParIn === undefined) {
/*  4590 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4591 */                     }
/*  4592 */                     var $compareres351 = null;
/*  4593 */                     var $loadgbl352 = Sk.misceval.loadname('Ident1', $gbl);
/*  4594 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl352, 'Eq', true));
/*  4595 */                     $blk = 6; /* allowing case fallthrough */
/*  4596 */                 case 6:
/*  4597 */                     /* --- function return or resume suspension --- */
/*  4598 */                     if ($ret && $ret.$isSuspension) {
/*  4599 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 192, 7);
/*  4600 */                     }
/*  4601 */                     $compareres351 = $ret;
/*  4602 */                     var $jfalse353 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4603 */                     if ($jfalse353) { /*test failed */
/*  4604 */                         $blk = 5;
/*  4605 */                         continue;
/*  4606 */                     }
/*  4607 */                     $blk = 5; /* allowing case fallthrough */
/*  4608 */                 case 5:
/*  4609 */                     /* --- done --- */
/*  4610 */                     var $jfalse354 = ($compareres351 === false || !Sk.misceval.isTrue($compareres351));
/*  4611 */                     if ($jfalse354) { /*test failed */
/*  4612 */                         $blk = 4;
/*  4613 */                         continue;
/*  4614 */                     }
/*  4615 */                     //
/*  4616 */                     // line 193:
/*  4617 */                     //         EnumParOut = Ident1
/*  4618 */                     //         ^
/*  4619 */                     //
/*  4620 */                     $currLineNo = 193;
/*  4621 */                     $currColNo = 8;
/*  4622 */ 
/*  4623 */                     var $loadgbl355 = Sk.misceval.loadname('Ident1', $gbl);
/*  4624 */                     EnumParOut = $loadgbl355;
/*  4625 */                     $blk = 3; /* allowing case fallthrough */
/*  4626 */                 case 3:
/*  4627 */                     /* --- end of if --- */
/*  4628 */                     //
/*  4629 */                     // line 205:
/*  4630 */                     //     return EnumParOut
/*  4631 */                     //     ^
/*  4632 */                     //
/*  4633 */                     $currLineNo = 205;
/*  4634 */                     $currColNo = 4;
/*  4635 */ 
/*  4636 */                     if (EnumParOut === undefined) {
/*  4637 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParOut\' referenced before assignment');
/*  4638 */                     }
/*  4639 */                     return EnumParOut;
/*  4640 */                     return Sk.builtin.none.none$;
/*  4641 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4642 */                 case 4:
/*  4643 */                     /* --- next branch of if --- */
/*  4644 */                     //
/*  4645 */                     // line 194:
/*  4646 */                     //     elif EnumParIn == Ident2:
/*  4647 */                     //          ^
/*  4648 */                     //
/*  4649 */                     $currLineNo = 194;
/*  4650 */                     $currColNo = 9;
/*  4651 */ 
/*  4652 */                     if (EnumParIn === undefined) {
/*  4653 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4654 */                     }
/*  4655 */                     var $compareres356 = null;
/*  4656 */                     var $loadgbl357 = Sk.misceval.loadname('Ident2', $gbl);
/*  4657 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl357, 'Eq', true));
/*  4658 */                     $blk = 10; /* allowing case fallthrough */
/*  4659 */                 case 10:
/*  4660 */                     /* --- function return or resume suspension --- */
/*  4661 */                     if ($ret && $ret.$isSuspension) {
/*  4662 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 194, 9);
/*  4663 */                     }
/*  4664 */                     $compareres356 = $ret;
/*  4665 */                     var $jfalse358 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4666 */                     if ($jfalse358) { /*test failed */
/*  4667 */                         $blk = 9;
/*  4668 */                         continue;
/*  4669 */                     }
/*  4670 */                     $blk = 9; /* allowing case fallthrough */
/*  4671 */                 case 9:
/*  4672 */                     /* --- done --- */
/*  4673 */                     var $jfalse359 = ($compareres356 === false || !Sk.misceval.isTrue($compareres356));
/*  4674 */                     if ($jfalse359) { /*test failed */
/*  4675 */                         $blk = 8;
/*  4676 */                         continue;
/*  4677 */                     }
/*  4678 */                     //
/*  4679 */                     // line 195:
/*  4680 */                     //         if IntGlob > 100:
/*  4681 */                     //         ^
/*  4682 */                     //
/*  4683 */                     $currLineNo = 195;
/*  4684 */                     $currColNo = 8;
/*  4685 */ 
/*  4686 */                     var $loadgbl360 = Sk.misceval.loadname('IntGlob', $gbl);
/*  4687 */                     var $compareres361 = null;
/*  4688 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl360, new Sk.builtin.int_(100), 'Gt', true));
/*  4689 */                     $blk = 14; /* allowing case fallthrough */
/*  4690 */                 case 14:
/*  4691 */                     /* --- function return or resume suspension --- */
/*  4692 */                     if ($ret && $ret.$isSuspension) {
/*  4693 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 195, 11);
/*  4694 */                     }
/*  4695 */                     $compareres361 = $ret;
/*  4696 */                     var $jfalse362 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4697 */                     if ($jfalse362) { /*test failed */
/*  4698 */                         $blk = 13;
/*  4699 */                         continue;
/*  4700 */                     }
/*  4701 */                     $blk = 13; /* allowing case fallthrough */
/*  4702 */                 case 13:
/*  4703 */                     /* --- done --- */
/*  4704 */                     var $jfalse363 = ($compareres361 === false || !Sk.misceval.isTrue($compareres361));
/*  4705 */                     if ($jfalse363) { /*test failed */
/*  4706 */                         $blk = 12;
/*  4707 */                         continue;
/*  4708 */                     }
/*  4709 */                     //
/*  4710 */                     // line 196:
/*  4711 */                     //             EnumParOut = Ident1
/*  4712 */                     //             ^
/*  4713 */                     //
/*  4714 */                     $currLineNo = 196;
/*  4715 */                     $currColNo = 12;
/*  4716 */ 
/*  4717 */                     var $loadgbl364 = Sk.misceval.loadname('Ident1', $gbl);
/*  4718 */                     EnumParOut = $loadgbl364;
/*  4719 */                     $blk = 11; /* allowing case fallthrough */
/*  4720 */                 case 11:
/*  4721 */                     /* --- end of if --- */
/*  4722 */                     $blk = 7; /* allowing case fallthrough */
/*  4723 */                 case 7:
/*  4724 */                     /* --- end of if --- */
/*  4725 */                     $blk = 3; /* jump */
/*  4726 */                     continue;
/*  4727 */                 case 8:
/*  4728 */                     /* --- next branch of if --- */
/*  4729 */                     //
/*  4730 */                     // line 199:
/*  4731 */                     //     elif EnumParIn == Ident3:
/*  4732 */                     //          ^
/*  4733 */                     //
/*  4734 */                     $currLineNo = 199;
/*  4735 */                     $currColNo = 9;
/*  4736 */ 
/*  4737 */                     if (EnumParIn === undefined) {
/*  4738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4739 */                     }
/*  4740 */                     var $compareres366 = null;
/*  4741 */                     var $loadgbl367 = Sk.misceval.loadname('Ident3', $gbl);
/*  4742 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl367, 'Eq', true));
/*  4743 */                     $blk = 18; /* allowing case fallthrough */
/*  4744 */                 case 18:
/*  4745 */                     /* --- function return or resume suspension --- */
/*  4746 */                     if ($ret && $ret.$isSuspension) {
/*  4747 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 199, 9);
/*  4748 */                     }
/*  4749 */                     $compareres366 = $ret;
/*  4750 */                     var $jfalse368 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4751 */                     if ($jfalse368) { /*test failed */
/*  4752 */                         $blk = 17;
/*  4753 */                         continue;
/*  4754 */                     }
/*  4755 */                     $blk = 17; /* allowing case fallthrough */
/*  4756 */                 case 17:
/*  4757 */                     /* --- done --- */
/*  4758 */                     var $jfalse369 = ($compareres366 === false || !Sk.misceval.isTrue($compareres366));
/*  4759 */                     if ($jfalse369) { /*test failed */
/*  4760 */                         $blk = 16;
/*  4761 */                         continue;
/*  4762 */                     }
/*  4763 */                     //
/*  4764 */                     // line 200:
/*  4765 */                     //         EnumParOut = Ident2
/*  4766 */                     //         ^
/*  4767 */                     //
/*  4768 */                     $currLineNo = 200;
/*  4769 */                     $currColNo = 8;
/*  4770 */ 
/*  4771 */                     var $loadgbl370 = Sk.misceval.loadname('Ident2', $gbl);
/*  4772 */                     EnumParOut = $loadgbl370;
/*  4773 */                     $blk = 15; /* allowing case fallthrough */
/*  4774 */                 case 15:
/*  4775 */                     /* --- end of if --- */
/*  4776 */                     $blk = 7; /* jump */
/*  4777 */                     continue;
/*  4778 */                 case 12:
/*  4779 */                     /* --- next branch of if --- */
/*  4780 */                     //
/*  4781 */                     // line 198:
/*  4782 */                     //             EnumParOut = Ident4
/*  4783 */                     //             ^
/*  4784 */                     //
/*  4785 */                     $currLineNo = 198;
/*  4786 */                     $currColNo = 12;
/*  4787 */ 
/*  4788 */                     var $loadgbl365 = Sk.misceval.loadname('Ident4', $gbl);
/*  4789 */                     EnumParOut = $loadgbl365;
/*  4790 */                     $blk = 11; /* jump */
/*  4791 */                     continue;
/*  4792 */                 case 16:
/*  4793 */                     /* --- next branch of if --- */
/*  4794 */                     //
/*  4795 */                     // line 201:
/*  4796 */                     //     elif EnumParIn == Ident4:
/*  4797 */                     //          ^
/*  4798 */                     //
/*  4799 */                     $currLineNo = 201;
/*  4800 */                     $currColNo = 9;
/*  4801 */ 
/*  4802 */                     if (EnumParIn === undefined) {
/*  4803 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4804 */                     }
/*  4805 */                     var $compareres371 = null;
/*  4806 */                     var $loadgbl372 = Sk.misceval.loadname('Ident4', $gbl);
/*  4807 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl372, 'Eq', true));
/*  4808 */                     $blk = 22; /* allowing case fallthrough */
/*  4809 */                 case 22:
/*  4810 */                     /* --- function return or resume suspension --- */
/*  4811 */                     if ($ret && $ret.$isSuspension) {
/*  4812 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 201, 9);
/*  4813 */                     }
/*  4814 */                     $compareres371 = $ret;
/*  4815 */                     var $jfalse373 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4816 */                     if ($jfalse373) { /*test failed */
/*  4817 */                         $blk = 21;
/*  4818 */                         continue;
/*  4819 */                     }
/*  4820 */                     $blk = 21; /* allowing case fallthrough */
/*  4821 */                 case 21:
/*  4822 */                     /* --- done --- */
/*  4823 */                     var $jfalse374 = ($compareres371 === false || !Sk.misceval.isTrue($compareres371));
/*  4824 */                     if ($jfalse374) { /*test failed */
/*  4825 */                         $blk = 20;
/*  4826 */                         continue;
/*  4827 */                     }
/*  4828 */                     //
/*  4829 */                     // line 202:
/*  4830 */                     //         pass
/*  4831 */                     //         ^
/*  4832 */                     //
/*  4833 */                     $currLineNo = 202;
/*  4834 */                     $currColNo = 8;
/*  4835 */ 
/*  4836 */                     $blk = 19; /* allowing case fallthrough */
/*  4837 */                 case 19:
/*  4838 */                     /* --- end of if --- */
/*  4839 */                     $blk = 15; /* jump */
/*  4840 */                     continue;
/*  4841 */                 case 20:
/*  4842 */                     /* --- next branch of if --- */
/*  4843 */                     //
/*  4844 */                     // line 203:
/*  4845 */                     //     elif EnumParIn == Ident5:
/*  4846 */                     //          ^
/*  4847 */                     //
/*  4848 */                     $currLineNo = 203;
/*  4849 */                     $currColNo = 9;
/*  4850 */ 
/*  4851 */                     if (EnumParIn === undefined) {
/*  4852 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  4853 */                     }
/*  4854 */                     var $compareres375 = null;
/*  4855 */                     var $loadgbl376 = Sk.misceval.loadname('Ident5', $gbl);
/*  4856 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumParIn, $loadgbl376, 'Eq', true));
/*  4857 */                     $blk = 25; /* allowing case fallthrough */
/*  4858 */                 case 25:
/*  4859 */                     /* --- function return or resume suspension --- */
/*  4860 */                     if ($ret && $ret.$isSuspension) {
/*  4861 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 203, 9);
/*  4862 */                     }
/*  4863 */                     $compareres375 = $ret;
/*  4864 */                     var $jfalse377 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4865 */                     if ($jfalse377) { /*test failed */
/*  4866 */                         $blk = 24;
/*  4867 */                         continue;
/*  4868 */                     }
/*  4869 */                     $blk = 24; /* allowing case fallthrough */
/*  4870 */                 case 24:
/*  4871 */                     /* --- done --- */
/*  4872 */                     var $jfalse378 = ($compareres375 === false || !Sk.misceval.isTrue($compareres375));
/*  4873 */                     if ($jfalse378) { /*test failed */
/*  4874 */                         $blk = 23;
/*  4875 */                         continue;
/*  4876 */                     }
/*  4877 */                     //
/*  4878 */                     // line 204:
/*  4879 */                     //         EnumParOut = Ident3
/*  4880 */                     //         ^
/*  4881 */                     //
/*  4882 */                     $currLineNo = 204;
/*  4883 */                     $currColNo = 8;
/*  4884 */ 
/*  4885 */                     var $loadgbl379 = Sk.misceval.loadname('Ident3', $gbl);
/*  4886 */                     EnumParOut = $loadgbl379;
/*  4887 */                     $blk = 23; /* allowing case fallthrough */
/*  4888 */                 case 23:
/*  4889 */                     /* --- end of if --- */
/*  4890 */                     $blk = 19; /* jump */
/*  4891 */                     continue;
/*  4892 */                 }
/*  4893 */             } catch (err) {
/*  4894 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4895 */                     err = new Sk.builtin.ExternalError(err);
/*  4896 */                 }
/*  4897 */                 err.traceback.push({
/*  4898 */                     lineno: $currLineNo,
/*  4899 */                     colno: $currColNo,
/*  4900 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4901 */                 });
/*  4902 */                 if ($exc.length > 0) {
/*  4903 */                     $err = err;
/*  4904 */                     $blk = $exc.pop();
/*  4905 */                     continue;
/*  4906 */                 } else {
/*  4907 */                     throw err;
/*  4908 */                 }
/*  4909 */             }
/*  4910 */         }
/*  4911 */     });
/*  4912 */     var $scope381 = (function $Proc7382$(IntParI1, IntParI2) {
/*  4913 */         var IntLoc, IntParOut; /* locals */
/*  4914 */         var IntLoc, IntLoc, IntParI1, IntParI1, IntParI2, IntParI2, IntParOut, IntParOut;
/*  4915 */         var $wakeFromSuspension = function() {
/*  4916 */             var susp = $scope381.$wakingSuspension;
/*  4917 */             delete $scope381.$wakingSuspension;
/*  4918 */             $blk = susp.$blk;
/*  4919 */             $loc = susp.$loc;
/*  4920 */             $gbl = susp.$gbl;
/*  4921 */             $exc = susp.$exc;
/*  4922 */             $err = susp.$err;
/*  4923 */             $postfinally = susp.$postfinally;
/*  4924 */             $currLineNo = susp.$lineno;
/*  4925 */             $currColNo = susp.$colno;
/*  4926 */             Sk.lastYield = Date.now();
/*  4927 */             IntLoc = susp.$tmps.IntLoc;
/*  4928 */             IntParI1 = susp.$tmps.IntParI1;
/*  4929 */             IntParI2 = susp.$tmps.IntParI2;
/*  4930 */             IntParOut = susp.$tmps.IntParOut;
/*  4931 */             try {
/*  4932 */                 $ret = susp.child.resume();
/*  4933 */             } catch (err) {
/*  4934 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4935 */                     err = new Sk.builtin.ExternalError(err);
/*  4936 */                 }
/*  4937 */                 err.traceback.push({
/*  4938 */                     lineno: $currLineNo,
/*  4939 */                     colno: $currColNo,
/*  4940 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  4941 */                 });
/*  4942 */                 if ($exc.length > 0) {
/*  4943 */                     $err = err;
/*  4944 */                     $blk = $exc.pop();
/*  4945 */                 } else {
/*  4946 */                     throw err;
/*  4947 */                 }
/*  4948 */             }
/*  4949 */         };
/*  4950 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4951 */             var susp = new Sk.misceval.Suspension();
/*  4952 */             susp.child = $child;
/*  4953 */             susp.resume = function() {
/*  4954 */                 $scope381.$wakingSuspension = susp;
/*  4955 */                 return $scope381();
/*  4956 */             };
/*  4957 */             susp.data = susp.child.data;
/*  4958 */             susp.$blk = $blk;
/*  4959 */             susp.$loc = $loc;
/*  4960 */             susp.$gbl = $gbl;
/*  4961 */             susp.$exc = $exc;
/*  4962 */             susp.$err = $err;
/*  4963 */             susp.$postfinally = $postfinally;
/*  4964 */             susp.$filename = $filename;
/*  4965 */             susp.$lineno = $lineno;
/*  4966 */             susp.$colno = $colno;
/*  4967 */             susp.optional = susp.child.optional;
/*  4968 */             susp.$tmps = {
/*  4969 */                 "IntLoc": IntLoc,
/*  4970 */                 "IntParI1": IntParI1,
/*  4971 */                 "IntParI2": IntParI2,
/*  4972 */                 "IntParOut": IntParOut
/*  4973 */             };
/*  4974 */             return susp;
/*  4975 */         };
/*  4976 */         var $blk = 0,
/*  4977 */             $exc = [],
/*  4978 */             $loc = {},
/*  4979 */             $gbl = this,
/*  4980 */             $err = undefined,
/*  4981 */             $ret = undefined,
/*  4982 */             $postfinally = undefined,
/*  4983 */             $currLineNo = undefined,
/*  4984 */             $currColNo = undefined;
/*  4985 */         if (typeof Sk.execStart === 'undefined') {
/*  4986 */             Sk.execStart = Date.now()
/*  4987 */         }
/*  4988 */         if (typeof Sk.lastYield === 'undefined') {
/*  4989 */             Sk.lastYield = Date.now()
/*  4990 */         }
/*  4991 */         if ($scope381.$wakingSuspension !== undefined) {
/*  4992 */             $wakeFromSuspension();
/*  4993 */         } else {
/*  4994 */             Sk.builtin.pyCheckArgs("Proc7", arguments, 2, 2, false, false);
/*  4995 */         }
/*  4996 */         while (true) {
/*  4997 */             try {
/*  4998 */                 var $dateNow = Date.now();
/*  4999 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5000 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5001 */                 }
/*  5002 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5003 */                     var $susp = $saveSuspension({
/*  5004 */                         data: {
/*  5005 */                             type: 'Sk.yield'
/*  5006 */                         },
/*  5007 */                         resume: function() {}
/*  5008 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5009 */                     $susp.$blk = $blk;
/*  5010 */                     $susp.optional = true;
/*  5011 */                     return $susp;
/*  5012 */                 }
/*  5013 */                 switch ($blk) {
/*  5014 */                 case 0:
/*  5015 */                     /* --- codeobj entry --- */
/*  5016 */                     if (IntParI1 === undefined) {
/*  5017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  5018 */                     }
/*  5019 */                     if (IntParI2 === undefined) {
/*  5020 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  5021 */                     }
/*  5022 */ 
/*  5023 */                     //
/*  5024 */                     // line 208:
/*  5025 */                     //     IntLoc = IntParI1 + 2
/*  5026 */                     //     ^
/*  5027 */                     //
/*  5028 */                     $currLineNo = 208;
/*  5029 */                     $currColNo = 4;
/*  5030 */ 
/*  5031 */                     if (IntParI1 === undefined) {
/*  5032 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  5033 */                     }
/*  5034 */                     var $binop383 = Sk.abstr.numberBinOp(IntParI1, new Sk.builtin.int_(2), 'Add');
/*  5035 */                     IntLoc = $binop383;
/*  5036 */                     //
/*  5037 */                     // line 209:
/*  5038 */                     //     IntParOut = IntParI2 + IntLoc
/*  5039 */                     //     ^
/*  5040 */                     //
/*  5041 */                     $currLineNo = 209;
/*  5042 */                     $currColNo = 4;
/*  5043 */ 
/*  5044 */                     if (IntParI2 === undefined) {
/*  5045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  5046 */                     }
/*  5047 */                     if (IntLoc === undefined) {
/*  5048 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5049 */                     }
/*  5050 */                     var $binop384 = Sk.abstr.numberBinOp(IntParI2, IntLoc, 'Add');
/*  5051 */                     IntParOut = $binop384;
/*  5052 */                     //
/*  5053 */                     // line 210:
/*  5054 */                     //     return IntParOut
/*  5055 */                     //     ^
/*  5056 */                     //
/*  5057 */                     $currLineNo = 210;
/*  5058 */                     $currColNo = 4;
/*  5059 */ 
/*  5060 */                     if (IntParOut === undefined) {
/*  5061 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParOut\' referenced before assignment');
/*  5062 */                     }
/*  5063 */                     return IntParOut;
/*  5064 */                     return Sk.builtin.none.none$;
/*  5065 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5066 */                 }
/*  5067 */             } catch (err) {
/*  5068 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5069 */                     err = new Sk.builtin.ExternalError(err);
/*  5070 */                 }
/*  5071 */                 err.traceback.push({
/*  5072 */                     lineno: $currLineNo,
/*  5073 */                     colno: $currColNo,
/*  5074 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5075 */                 });
/*  5076 */                 if ($exc.length > 0) {
/*  5077 */                     $err = err;
/*  5078 */                     $blk = $exc.pop();
/*  5079 */                     continue;
/*  5080 */                 } else {
/*  5081 */                     throw err;
/*  5082 */                 }
/*  5083 */             }
/*  5084 */         }
/*  5085 */     });
/*  5086 */     var $scope386 = (function $Proc8387$(Array1Par, Array2Par, IntParI1, IntParI2) {
/*  5087 */         var IntIndex, IntLoc; /* locals */
/*  5088 */         var Array1Par, Array1Par, Array1Par, Array1Par, Array1Par, Array1Par, Array2Par, Array2Par, Array2Par, Array2Par, Array2Par, IntIndex, IntIndex, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntParI1, IntParI1, IntParI2, IntParI2, $lsubscr389, $binop390, $binop391, $loadgbl392, $binop393, $iter395, $loadgbl392, $binop393, $call394, $iter395, $lsubscr397, $lsubscr398, $binop399, $lsubscr398, $binop399, $lsubscr400, $binop401, $lsubscr398, $binop399, $lsubscr400, $binop401, $lsubscr402, $binop403, $lsubscr404, $binop405, $lsubscr404, $binop405, $lsubscr406;
/*  5089 */         var $wakeFromSuspension = function() {
/*  5090 */             var susp = $scope386.$wakingSuspension;
/*  5091 */             delete $scope386.$wakingSuspension;
/*  5092 */             $blk = susp.$blk;
/*  5093 */             $loc = susp.$loc;
/*  5094 */             $gbl = susp.$gbl;
/*  5095 */             $exc = susp.$exc;
/*  5096 */             $err = susp.$err;
/*  5097 */             $postfinally = susp.$postfinally;
/*  5098 */             $currLineNo = susp.$lineno;
/*  5099 */             $currColNo = susp.$colno;
/*  5100 */             Sk.lastYield = Date.now();
/*  5101 */             Array1Par = susp.$tmps.Array1Par;
/*  5102 */             Array2Par = susp.$tmps.Array2Par;
/*  5103 */             IntIndex = susp.$tmps.IntIndex;
/*  5104 */             IntLoc = susp.$tmps.IntLoc;
/*  5105 */             IntParI1 = susp.$tmps.IntParI1;
/*  5106 */             IntParI2 = susp.$tmps.IntParI2;
/*  5107 */             $lsubscr389 = susp.$tmps.$lsubscr389;
/*  5108 */             $binop390 = susp.$tmps.$binop390;
/*  5109 */             $binop391 = susp.$tmps.$binop391;
/*  5110 */             $loadgbl392 = susp.$tmps.$loadgbl392;
/*  5111 */             $binop393 = susp.$tmps.$binop393;
/*  5112 */             $iter395 = susp.$tmps.$iter395;
/*  5113 */             $call394 = susp.$tmps.$call394;
/*  5114 */             $lsubscr397 = susp.$tmps.$lsubscr397;
/*  5115 */             $lsubscr398 = susp.$tmps.$lsubscr398;
/*  5116 */             $binop399 = susp.$tmps.$binop399;
/*  5117 */             $lsubscr400 = susp.$tmps.$lsubscr400;
/*  5118 */             $binop401 = susp.$tmps.$binop401;
/*  5119 */             $lsubscr402 = susp.$tmps.$lsubscr402;
/*  5120 */             $binop403 = susp.$tmps.$binop403;
/*  5121 */             $lsubscr404 = susp.$tmps.$lsubscr404;
/*  5122 */             $binop405 = susp.$tmps.$binop405;
/*  5123 */             $lsubscr406 = susp.$tmps.$lsubscr406;
/*  5124 */             try {
/*  5125 */                 $ret = susp.child.resume();
/*  5126 */             } catch (err) {
/*  5127 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5128 */                     err = new Sk.builtin.ExternalError(err);
/*  5129 */                 }
/*  5130 */                 err.traceback.push({
/*  5131 */                     lineno: $currLineNo,
/*  5132 */                     colno: $currColNo,
/*  5133 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5134 */                 });
/*  5135 */                 if ($exc.length > 0) {
/*  5136 */                     $err = err;
/*  5137 */                     $blk = $exc.pop();
/*  5138 */                 } else {
/*  5139 */                     throw err;
/*  5140 */                 }
/*  5141 */             }
/*  5142 */         };
/*  5143 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5144 */             var susp = new Sk.misceval.Suspension();
/*  5145 */             susp.child = $child;
/*  5146 */             susp.resume = function() {
/*  5147 */                 $scope386.$wakingSuspension = susp;
/*  5148 */                 return $scope386();
/*  5149 */             };
/*  5150 */             susp.data = susp.child.data;
/*  5151 */             susp.$blk = $blk;
/*  5152 */             susp.$loc = $loc;
/*  5153 */             susp.$gbl = $gbl;
/*  5154 */             susp.$exc = $exc;
/*  5155 */             susp.$err = $err;
/*  5156 */             susp.$postfinally = $postfinally;
/*  5157 */             susp.$filename = $filename;
/*  5158 */             susp.$lineno = $lineno;
/*  5159 */             susp.$colno = $colno;
/*  5160 */             susp.optional = susp.child.optional;
/*  5161 */             susp.$tmps = {
/*  5162 */                 "Array1Par": Array1Par,
/*  5163 */                 "Array2Par": Array2Par,
/*  5164 */                 "IntIndex": IntIndex,
/*  5165 */                 "IntLoc": IntLoc,
/*  5166 */                 "IntParI1": IntParI1,
/*  5167 */                 "IntParI2": IntParI2,
/*  5168 */                 "$lsubscr389": $lsubscr389,
/*  5169 */                 "$binop390": $binop390,
/*  5170 */                 "$binop391": $binop391,
/*  5171 */                 "$loadgbl392": $loadgbl392,
/*  5172 */                 "$binop393": $binop393,
/*  5173 */                 "$iter395": $iter395,
/*  5174 */                 "$call394": $call394,
/*  5175 */                 "$lsubscr397": $lsubscr397,
/*  5176 */                 "$lsubscr398": $lsubscr398,
/*  5177 */                 "$binop399": $binop399,
/*  5178 */                 "$lsubscr400": $lsubscr400,
/*  5179 */                 "$binop401": $binop401,
/*  5180 */                 "$lsubscr402": $lsubscr402,
/*  5181 */                 "$binop403": $binop403,
/*  5182 */                 "$lsubscr404": $lsubscr404,
/*  5183 */                 "$binop405": $binop405,
/*  5184 */                 "$lsubscr406": $lsubscr406
/*  5185 */             };
/*  5186 */             return susp;
/*  5187 */         };
/*  5188 */         var $blk = 0,
/*  5189 */             $exc = [],
/*  5190 */             $loc = {},
/*  5191 */             $gbl = this,
/*  5192 */             $err = undefined,
/*  5193 */             $ret = undefined,
/*  5194 */             $postfinally = undefined,
/*  5195 */             $currLineNo = undefined,
/*  5196 */             $currColNo = undefined;
/*  5197 */         if (typeof Sk.execStart === 'undefined') {
/*  5198 */             Sk.execStart = Date.now()
/*  5199 */         }
/*  5200 */         if (typeof Sk.lastYield === 'undefined') {
/*  5201 */             Sk.lastYield = Date.now()
/*  5202 */         }
/*  5203 */         if ($scope386.$wakingSuspension !== undefined) {
/*  5204 */             $wakeFromSuspension();
/*  5205 */         } else {
/*  5206 */             Sk.builtin.pyCheckArgs("Proc8", arguments, 4, 4, false, false);
/*  5207 */         }
/*  5208 */         while (true) {
/*  5209 */             try {
/*  5210 */                 var $dateNow = Date.now();
/*  5211 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5212 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5213 */                 }
/*  5214 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5215 */                     var $susp = $saveSuspension({
/*  5216 */                         data: {
/*  5217 */                             type: 'Sk.yield'
/*  5218 */                         },
/*  5219 */                         resume: function() {}
/*  5220 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5221 */                     $susp.$blk = $blk;
/*  5222 */                     $susp.optional = true;
/*  5223 */                     return $susp;
/*  5224 */                 }
/*  5225 */                 switch ($blk) {
/*  5226 */                 case 0:
/*  5227 */                     /* --- codeobj entry --- */
/*  5228 */                     if (Array1Par === undefined) {
/*  5229 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5230 */                     }
/*  5231 */                     if (Array2Par === undefined) {
/*  5232 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5233 */                     }
/*  5234 */                     if (IntParI1 === undefined) {
/*  5235 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  5236 */                     }
/*  5237 */                     if (IntParI2 === undefined) {
/*  5238 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  5239 */                     }
/*  5240 */ 
/*  5241 */                     //
/*  5242 */                     // line 213:
/*  5243 */                     //     global IntGlob
/*  5244 */                     //     ^
/*  5245 */                     //
/*  5246 */                     $currLineNo = 213;
/*  5247 */                     $currColNo = 4;
/*  5248 */ 
/*  5249 */ 
/*  5250 */                     //
/*  5251 */                     // line 215:
/*  5252 */                     //     IntLoc = IntParI1 + 5
/*  5253 */                     //     ^
/*  5254 */                     //
/*  5255 */                     $currLineNo = 215;
/*  5256 */                     $currColNo = 4;
/*  5257 */ 
/*  5258 */                     if (IntParI1 === undefined) {
/*  5259 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI1\' referenced before assignment');
/*  5260 */                     }
/*  5261 */                     var $binop388 = Sk.abstr.numberBinOp(IntParI1, new Sk.builtin.int_(5), 'Add');
/*  5262 */                     IntLoc = $binop388;
/*  5263 */                     //
/*  5264 */                     // line 216:
/*  5265 */                     //     Array1Par[IntLoc] = IntParI2
/*  5266 */                     //     ^
/*  5267 */                     //
/*  5268 */                     $currLineNo = 216;
/*  5269 */                     $currColNo = 4;
/*  5270 */ 
/*  5271 */                     if (IntParI2 === undefined) {
/*  5272 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntParI2\' referenced before assignment');
/*  5273 */                     }
/*  5274 */                     if (Array1Par === undefined) {
/*  5275 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5276 */                     }
/*  5277 */                     if (IntLoc === undefined) {
/*  5278 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5279 */                     }
/*  5280 */                     $ret = Sk.abstr.objectSetItem(Array1Par, IntLoc, IntParI2, true);
/*  5281 */                     $blk = 1; /* allowing case fallthrough */
/*  5282 */                 case 1:
/*  5283 */                     /* --- function return or resume suspension --- */
/*  5284 */                     if ($ret && $ret.$isSuspension) {
/*  5285 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5286 */                     }
/*  5287 */                     //
/*  5288 */                     // line 217:
/*  5289 */                     //     Array1Par[IntLoc+1] = Array1Par[IntLoc]
/*  5290 */                     //     ^
/*  5291 */                     //
/*  5292 */                     $currLineNo = 217;
/*  5293 */                     $currColNo = 4;
/*  5294 */ 
/*  5295 */                     if (Array1Par === undefined) {
/*  5296 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5297 */                     }
/*  5298 */                     if (IntLoc === undefined) {
/*  5299 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5300 */                     }
/*  5301 */                     $ret = Sk.abstr.objectGetItem(Array1Par, IntLoc, true);
/*  5302 */                     $blk = 2; /* allowing case fallthrough */
/*  5303 */                 case 2:
/*  5304 */                     /* --- function return or resume suspension --- */
/*  5305 */                     if ($ret && $ret.$isSuspension) {
/*  5306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5307 */                     }
/*  5308 */                     var $lsubscr389 = $ret;
/*  5309 */                     if (Array1Par === undefined) {
/*  5310 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5311 */                     }
/*  5312 */                     if (IntLoc === undefined) {
/*  5313 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5314 */                     }
/*  5315 */                     var $binop390 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  5316 */                     $ret = Sk.abstr.objectSetItem(Array1Par, $binop390, $lsubscr389, true);
/*  5317 */                     $blk = 3; /* allowing case fallthrough */
/*  5318 */                 case 3:
/*  5319 */                     /* --- function return or resume suspension --- */
/*  5320 */                     if ($ret && $ret.$isSuspension) {
/*  5321 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5322 */                     }
/*  5323 */                     //
/*  5324 */                     // line 218:
/*  5325 */                     //     Array1Par[IntLoc+30] = IntLoc
/*  5326 */                     //     ^
/*  5327 */                     //
/*  5328 */                     $currLineNo = 218;
/*  5329 */                     $currColNo = 4;
/*  5330 */ 
/*  5331 */                     if (IntLoc === undefined) {
/*  5332 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5333 */                     }
/*  5334 */                     if (Array1Par === undefined) {
/*  5335 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5336 */                     }
/*  5337 */                     if (IntLoc === undefined) {
/*  5338 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5339 */                     }
/*  5340 */                     var $binop391 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(30), 'Add');
/*  5341 */                     $ret = Sk.abstr.objectSetItem(Array1Par, $binop391, IntLoc, true);
/*  5342 */                     $blk = 4; /* allowing case fallthrough */
/*  5343 */                 case 4:
/*  5344 */                     /* --- function return or resume suspension --- */
/*  5345 */                     if ($ret && $ret.$isSuspension) {
/*  5346 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5347 */                     }
/*  5348 */                     //
/*  5349 */                     // line 219:
/*  5350 */                     //     for IntIndex in range(IntLoc, IntLoc+2):
/*  5351 */                     //     ^
/*  5352 */                     //
/*  5353 */                     $currLineNo = 219;
/*  5354 */                     $currColNo = 4;
/*  5355 */ 
/*  5356 */                     var $loadgbl392 = Sk.misceval.loadname('range', $gbl);
/*  5357 */                     if (IntLoc === undefined) {
/*  5358 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5359 */                     }
/*  5360 */                     if (IntLoc === undefined) {
/*  5361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5362 */                     }
/*  5363 */                     var $binop393 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(2), 'Add');
/*  5364 */                     $ret;
/*  5365 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl392, IntLoc, $binop393);
/*  5366 */                     $blk = 8; /* allowing case fallthrough */
/*  5367 */                 case 8:
/*  5368 */                     /* --- function return or resume suspension --- */
/*  5369 */                     if ($ret && $ret.$isSuspension) {
/*  5370 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 219, 20);
/*  5371 */                     }
/*  5372 */                     var $call394 = $ret;
/*  5373 */                     //
/*  5374 */                     // line 219:
/*  5375 */                     //     for IntIndex in range(IntLoc, IntLoc+2):
/*  5376 */                     //                     ^
/*  5377 */                     //
/*  5378 */                     $currLineNo = 219;
/*  5379 */                     $currColNo = 20;
/*  5380 */ 
/*  5381 */                     var $iter395 = Sk.abstr.iter($call394);
/*  5382 */                     $blk = 5; /* allowing case fallthrough */
/*  5383 */                 case 5:
/*  5384 */                     /* --- for start --- */
/*  5385 */                     $ret = Sk.abstr.iternext($iter395, true);
/*  5386 */                     $blk = 9; /* allowing case fallthrough */
/*  5387 */                 case 9:
/*  5388 */                     /* --- function return or resume suspension --- */
/*  5389 */                     if ($ret && $ret.$isSuspension) {
/*  5390 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 219, 4);
/*  5391 */                     }
/*  5392 */                     var $next396 = $ret;
/*  5393 */                     if ($next396 === undefined) {
/*  5394 */                         $blk = 6;
/*  5395 */                         continue;
/*  5396 */                     }
/*  5397 */                     IntIndex = $next396;
/*  5398 */                     //
/*  5399 */                     // line 220:
/*  5400 */                     //         Array2Par[IntLoc][IntIndex] = IntLoc
/*  5401 */                     //         ^
/*  5402 */                     //
/*  5403 */                     $currLineNo = 220;
/*  5404 */                     $currColNo = 8;
/*  5405 */ 
/*  5406 */                     if (IntLoc === undefined) {
/*  5407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5408 */                     }
/*  5409 */                     if (Array2Par === undefined) {
/*  5410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5411 */                     }
/*  5412 */                     if (IntLoc === undefined) {
/*  5413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5414 */                     }
/*  5415 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5416 */                     $blk = 10; /* allowing case fallthrough */
/*  5417 */                 case 10:
/*  5418 */                     /* --- function return or resume suspension --- */
/*  5419 */                     if ($ret && $ret.$isSuspension) {
/*  5420 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5421 */                     }
/*  5422 */                     var $lsubscr397 = $ret;
/*  5423 */                     if (IntIndex === undefined) {
/*  5424 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntIndex\' referenced before assignment');
/*  5425 */                     }
/*  5426 */                     $ret = Sk.abstr.objectSetItem($lsubscr397, IntIndex, IntLoc, true);
/*  5427 */                     $blk = 11; /* allowing case fallthrough */
/*  5428 */                 case 11:
/*  5429 */                     /* --- function return or resume suspension --- */
/*  5430 */                     if ($ret && $ret.$isSuspension) {
/*  5431 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5432 */                     }
/*  5433 */                     $blk = 5; /* jump */
/*  5434 */                     continue;
/*  5435 */                 case 6:
/*  5436 */                     /* --- for cleanup --- */
/*  5437 */                     $blk = 7; /* allowing case fallthrough */
/*  5438 */                 case 7:
/*  5439 */                     /* --- for end --- */
/*  5440 */                     //
/*  5441 */                     // line 221:
/*  5442 */                     //     Array2Par[IntLoc][IntLoc-1] = Array2Par[IntLoc][IntLoc-1] + 1
/*  5443 */                     //     ^
/*  5444 */                     //
/*  5445 */                     $currLineNo = 221;
/*  5446 */                     $currColNo = 4;
/*  5447 */ 
/*  5448 */                     if (Array2Par === undefined) {
/*  5449 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5450 */                     }
/*  5451 */                     if (IntLoc === undefined) {
/*  5452 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5453 */                     }
/*  5454 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5455 */                     $blk = 12; /* allowing case fallthrough */
/*  5456 */                 case 12:
/*  5457 */                     /* --- function return or resume suspension --- */
/*  5458 */                     if ($ret && $ret.$isSuspension) {
/*  5459 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5460 */                     }
/*  5461 */                     var $lsubscr398 = $ret;
/*  5462 */                     if (IntLoc === undefined) {
/*  5463 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5464 */                     }
/*  5465 */                     var $binop399 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  5466 */                     $ret = Sk.abstr.objectGetItem($lsubscr398, $binop399, true);
/*  5467 */                     $blk = 13; /* allowing case fallthrough */
/*  5468 */                 case 13:
/*  5469 */                     /* --- function return or resume suspension --- */
/*  5470 */                     if ($ret && $ret.$isSuspension) {
/*  5471 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5472 */                     }
/*  5473 */                     var $lsubscr400 = $ret;
/*  5474 */                     var $binop401 = Sk.abstr.numberBinOp($lsubscr400, new Sk.builtin.int_(1), 'Add');
/*  5475 */                     if (Array2Par === undefined) {
/*  5476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5477 */                     }
/*  5478 */                     if (IntLoc === undefined) {
/*  5479 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5480 */                     }
/*  5481 */                     $ret = Sk.abstr.objectGetItem(Array2Par, IntLoc, true);
/*  5482 */                     $blk = 14; /* allowing case fallthrough */
/*  5483 */                 case 14:
/*  5484 */                     /* --- function return or resume suspension --- */
/*  5485 */                     if ($ret && $ret.$isSuspension) {
/*  5486 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5487 */                     }
/*  5488 */                     var $lsubscr402 = $ret;
/*  5489 */                     if (IntLoc === undefined) {
/*  5490 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5491 */                     }
/*  5492 */                     var $binop403 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Sub');
/*  5493 */                     $ret = Sk.abstr.objectSetItem($lsubscr402, $binop403, $binop401, true);
/*  5494 */                     $blk = 15; /* allowing case fallthrough */
/*  5495 */                 case 15:
/*  5496 */                     /* --- function return or resume suspension --- */
/*  5497 */                     if ($ret && $ret.$isSuspension) {
/*  5498 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5499 */                     }
/*  5500 */                     //
/*  5501 */                     // line 222:
/*  5502 */                     //     Array2Par[IntLoc+20][IntLoc] = Array1Par[IntLoc]
/*  5503 */                     //     ^
/*  5504 */                     //
/*  5505 */                     $currLineNo = 222;
/*  5506 */                     $currColNo = 4;
/*  5507 */ 
/*  5508 */                     if (Array1Par === undefined) {
/*  5509 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array1Par\' referenced before assignment');
/*  5510 */                     }
/*  5511 */                     if (IntLoc === undefined) {
/*  5512 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5513 */                     }
/*  5514 */                     $ret = Sk.abstr.objectGetItem(Array1Par, IntLoc, true);
/*  5515 */                     $blk = 16; /* allowing case fallthrough */
/*  5516 */                 case 16:
/*  5517 */                     /* --- function return or resume suspension --- */
/*  5518 */                     if ($ret && $ret.$isSuspension) {
/*  5519 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5520 */                     }
/*  5521 */                     var $lsubscr404 = $ret;
/*  5522 */                     if (Array2Par === undefined) {
/*  5523 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Array2Par\' referenced before assignment');
/*  5524 */                     }
/*  5525 */                     if (IntLoc === undefined) {
/*  5526 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5527 */                     }
/*  5528 */                     var $binop405 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(20), 'Add');
/*  5529 */                     $ret = Sk.abstr.objectGetItem(Array2Par, $binop405, true);
/*  5530 */                     $blk = 17; /* allowing case fallthrough */
/*  5531 */                 case 17:
/*  5532 */                     /* --- function return or resume suspension --- */
/*  5533 */                     if ($ret && $ret.$isSuspension) {
/*  5534 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5535 */                     }
/*  5536 */                     var $lsubscr406 = $ret;
/*  5537 */                     if (IntLoc === undefined) {
/*  5538 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5539 */                     }
/*  5540 */                     $ret = Sk.abstr.objectSetItem($lsubscr406, IntLoc, $lsubscr404, true);
/*  5541 */                     $blk = 18; /* allowing case fallthrough */
/*  5542 */                 case 18:
/*  5543 */                     /* --- function return or resume suspension --- */
/*  5544 */                     if ($ret && $ret.$isSuspension) {
/*  5545 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5546 */                     }
/*  5547 */                     //
/*  5548 */                     // line 223:
/*  5549 */                     //     IntGlob = 5
/*  5550 */                     //     ^
/*  5551 */                     //
/*  5552 */                     $currLineNo = 223;
/*  5553 */                     $currColNo = 4;
/*  5554 */ 
/*  5555 */                     $gbl.IntGlob = new Sk.builtin.int_(5);
/*  5556 */                     return Sk.builtin.none.none$;
/*  5557 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5558 */                 }
/*  5559 */             } catch (err) {
/*  5560 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5561 */                     err = new Sk.builtin.ExternalError(err);
/*  5562 */                 }
/*  5563 */                 err.traceback.push({
/*  5564 */                     lineno: $currLineNo,
/*  5565 */                     colno: $currColNo,
/*  5566 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5567 */                 });
/*  5568 */                 if ($exc.length > 0) {
/*  5569 */                     $err = err;
/*  5570 */                     $blk = $exc.pop();
/*  5571 */                     continue;
/*  5572 */                 } else {
/*  5573 */                     throw err;
/*  5574 */                 }
/*  5575 */             }
/*  5576 */         }
/*  5577 */     });
/*  5578 */     var $scope408 = (function $Func1409$(CharPar1, CharPar2) {
/*  5579 */         var CharLoc1, CharLoc2; /* locals */
/*  5580 */         var CharLoc1, CharLoc1, CharLoc2, CharLoc2, CharPar1, CharPar1, CharPar2, CharPar2, $compareres410;
/*  5581 */         var $wakeFromSuspension = function() {
/*  5582 */             var susp = $scope408.$wakingSuspension;
/*  5583 */             delete $scope408.$wakingSuspension;
/*  5584 */             $blk = susp.$blk;
/*  5585 */             $loc = susp.$loc;
/*  5586 */             $gbl = susp.$gbl;
/*  5587 */             $exc = susp.$exc;
/*  5588 */             $err = susp.$err;
/*  5589 */             $postfinally = susp.$postfinally;
/*  5590 */             $currLineNo = susp.$lineno;
/*  5591 */             $currColNo = susp.$colno;
/*  5592 */             Sk.lastYield = Date.now();
/*  5593 */             CharLoc1 = susp.$tmps.CharLoc1;
/*  5594 */             CharLoc2 = susp.$tmps.CharLoc2;
/*  5595 */             CharPar1 = susp.$tmps.CharPar1;
/*  5596 */             CharPar2 = susp.$tmps.CharPar2;
/*  5597 */             $compareres410 = susp.$tmps.$compareres410;
/*  5598 */             try {
/*  5599 */                 $ret = susp.child.resume();
/*  5600 */             } catch (err) {
/*  5601 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5602 */                     err = new Sk.builtin.ExternalError(err);
/*  5603 */                 }
/*  5604 */                 err.traceback.push({
/*  5605 */                     lineno: $currLineNo,
/*  5606 */                     colno: $currColNo,
/*  5607 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5608 */                 });
/*  5609 */                 if ($exc.length > 0) {
/*  5610 */                     $err = err;
/*  5611 */                     $blk = $exc.pop();
/*  5612 */                 } else {
/*  5613 */                     throw err;
/*  5614 */                 }
/*  5615 */             }
/*  5616 */         };
/*  5617 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5618 */             var susp = new Sk.misceval.Suspension();
/*  5619 */             susp.child = $child;
/*  5620 */             susp.resume = function() {
/*  5621 */                 $scope408.$wakingSuspension = susp;
/*  5622 */                 return $scope408();
/*  5623 */             };
/*  5624 */             susp.data = susp.child.data;
/*  5625 */             susp.$blk = $blk;
/*  5626 */             susp.$loc = $loc;
/*  5627 */             susp.$gbl = $gbl;
/*  5628 */             susp.$exc = $exc;
/*  5629 */             susp.$err = $err;
/*  5630 */             susp.$postfinally = $postfinally;
/*  5631 */             susp.$filename = $filename;
/*  5632 */             susp.$lineno = $lineno;
/*  5633 */             susp.$colno = $colno;
/*  5634 */             susp.optional = susp.child.optional;
/*  5635 */             susp.$tmps = {
/*  5636 */                 "CharLoc1": CharLoc1,
/*  5637 */                 "CharLoc2": CharLoc2,
/*  5638 */                 "CharPar1": CharPar1,
/*  5639 */                 "CharPar2": CharPar2,
/*  5640 */                 "$compareres410": $compareres410
/*  5641 */             };
/*  5642 */             return susp;
/*  5643 */         };
/*  5644 */         var $blk = 0,
/*  5645 */             $exc = [],
/*  5646 */             $loc = {},
/*  5647 */             $gbl = this,
/*  5648 */             $err = undefined,
/*  5649 */             $ret = undefined,
/*  5650 */             $postfinally = undefined,
/*  5651 */             $currLineNo = undefined,
/*  5652 */             $currColNo = undefined;
/*  5653 */         if (typeof Sk.execStart === 'undefined') {
/*  5654 */             Sk.execStart = Date.now()
/*  5655 */         }
/*  5656 */         if (typeof Sk.lastYield === 'undefined') {
/*  5657 */             Sk.lastYield = Date.now()
/*  5658 */         }
/*  5659 */         if ($scope408.$wakingSuspension !== undefined) {
/*  5660 */             $wakeFromSuspension();
/*  5661 */         } else {
/*  5662 */             Sk.builtin.pyCheckArgs("Func1", arguments, 2, 2, false, false);
/*  5663 */         }
/*  5664 */         while (true) {
/*  5665 */             try {
/*  5666 */                 var $dateNow = Date.now();
/*  5667 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5668 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5669 */                 }
/*  5670 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5671 */                     var $susp = $saveSuspension({
/*  5672 */                         data: {
/*  5673 */                             type: 'Sk.yield'
/*  5674 */                         },
/*  5675 */                         resume: function() {}
/*  5676 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5677 */                     $susp.$blk = $blk;
/*  5678 */                     $susp.optional = true;
/*  5679 */                     return $susp;
/*  5680 */                 }
/*  5681 */                 switch ($blk) {
/*  5682 */                 case 0:
/*  5683 */                     /* --- codeobj entry --- */
/*  5684 */                     if (CharPar1 === undefined) {
/*  5685 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar1\' referenced before assignment');
/*  5686 */                     }
/*  5687 */                     if (CharPar2 === undefined) {
/*  5688 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar2\' referenced before assignment');
/*  5689 */                     }
/*  5690 */ 
/*  5691 */                     //
/*  5692 */                     // line 226:
/*  5693 */                     //     CharLoc1 = CharPar1
/*  5694 */                     //     ^
/*  5695 */                     //
/*  5696 */                     $currLineNo = 226;
/*  5697 */                     $currColNo = 4;
/*  5698 */ 
/*  5699 */                     if (CharPar1 === undefined) {
/*  5700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar1\' referenced before assignment');
/*  5701 */                     }
/*  5702 */                     CharLoc1 = CharPar1;
/*  5703 */                     //
/*  5704 */                     // line 227:
/*  5705 */                     //     CharLoc2 = CharLoc1
/*  5706 */                     //     ^
/*  5707 */                     //
/*  5708 */                     $currLineNo = 227;
/*  5709 */                     $currColNo = 4;
/*  5710 */ 
/*  5711 */                     if (CharLoc1 === undefined) {
/*  5712 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc1\' referenced before assignment');
/*  5713 */                     }
/*  5714 */                     CharLoc2 = CharLoc1;
/*  5715 */                     //
/*  5716 */                     // line 228:
/*  5717 */                     //     if CharLoc2 != CharPar2:
/*  5718 */                     //     ^
/*  5719 */                     //
/*  5720 */                     $currLineNo = 228;
/*  5721 */                     $currColNo = 4;
/*  5722 */ 
/*  5723 */                     if (CharLoc2 === undefined) {
/*  5724 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc2\' referenced before assignment');
/*  5725 */                     }
/*  5726 */                     var $compareres410 = null;
/*  5727 */                     if (CharPar2 === undefined) {
/*  5728 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharPar2\' referenced before assignment');
/*  5729 */                     }
/*  5730 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc2, CharPar2, 'NotEq', true));
/*  5731 */                     $blk = 4; /* allowing case fallthrough */
/*  5732 */                 case 4:
/*  5733 */                     /* --- function return or resume suspension --- */
/*  5734 */                     if ($ret && $ret.$isSuspension) {
/*  5735 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 228, 7);
/*  5736 */                     }
/*  5737 */                     $compareres410 = $ret;
/*  5738 */                     var $jfalse411 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5739 */                     if ($jfalse411) { /*test failed */
/*  5740 */                         $blk = 3;
/*  5741 */                         continue;
/*  5742 */                     }
/*  5743 */                     $blk = 3; /* allowing case fallthrough */
/*  5744 */                 case 3:
/*  5745 */                     /* --- done --- */
/*  5746 */                     var $jfalse412 = ($compareres410 === false || !Sk.misceval.isTrue($compareres410));
/*  5747 */                     if ($jfalse412) { /*test failed */
/*  5748 */                         $blk = 2;
/*  5749 */                         continue;
/*  5750 */                     }
/*  5751 */                     //
/*  5752 */                     // line 229:
/*  5753 */                     //         return Ident1
/*  5754 */                     //         ^
/*  5755 */                     //
/*  5756 */                     $currLineNo = 229;
/*  5757 */                     $currColNo = 8;
/*  5758 */ 
/*  5759 */                     var $loadgbl413 = Sk.misceval.loadname('Ident1', $gbl);
/*  5760 */                     return $loadgbl413;
/*  5761 */                     $blk = 1; /* allowing case fallthrough */
/*  5762 */                 case 1:
/*  5763 */                     /* --- end of if --- */
/*  5764 */                     return Sk.builtin.none.none$;
/*  5765 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5766 */                 case 2:
/*  5767 */                     /* --- next branch of if --- */
/*  5768 */                     //
/*  5769 */                     // line 231:
/*  5770 */                     //         return Ident2
/*  5771 */                     //         ^
/*  5772 */                     //
/*  5773 */                     $currLineNo = 231;
/*  5774 */                     $currColNo = 8;
/*  5775 */ 
/*  5776 */                     var $loadgbl414 = Sk.misceval.loadname('Ident2', $gbl);
/*  5777 */                     return $loadgbl414;
/*  5778 */                     $blk = 1; /* jump */
/*  5779 */                     continue;
/*  5780 */                 }
/*  5781 */             } catch (err) {
/*  5782 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5783 */                     err = new Sk.builtin.ExternalError(err);
/*  5784 */                 }
/*  5785 */                 err.traceback.push({
/*  5786 */                     lineno: $currLineNo,
/*  5787 */                     colno: $currColNo,
/*  5788 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5789 */                 });
/*  5790 */                 if ($exc.length > 0) {
/*  5791 */                     $err = err;
/*  5792 */                     $blk = $exc.pop();
/*  5793 */                     continue;
/*  5794 */                 } else {
/*  5795 */                     throw err;
/*  5796 */                 }
/*  5797 */             }
/*  5798 */         }
/*  5799 */     });
/*  5800 */     var $scope416 = (function $Func2417$(StrParI1, StrParI2) {
/*  5801 */         var CharLoc, IntLoc; /* locals */
/*  5802 */         var CharLoc, CharLoc, CharLoc, CharLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, IntLoc, StrParI1, StrParI1, StrParI1, StrParI2, StrParI2, StrParI2, $compareres418, $loadgbl421, $loadgbl421, $lsubscr422, $binop423, $loadgbl421, $lsubscr422, $binop423, $lsubscr424, $loadgbl421, $lsubscr422, $binop423, $lsubscr424, $call425, $compareres426, $loadgbl427, $compareres432, $str433, $compareres432, $str433, $jfalse434, $boolopsucc435, $jfalse436, $compareres437, $str438, $compareres442, $str443, $compareres447;
/*  5803 */         var $wakeFromSuspension = function() {
/*  5804 */             var susp = $scope416.$wakingSuspension;
/*  5805 */             delete $scope416.$wakingSuspension;
/*  5806 */             $blk = susp.$blk;
/*  5807 */             $loc = susp.$loc;
/*  5808 */             $gbl = susp.$gbl;
/*  5809 */             $exc = susp.$exc;
/*  5810 */             $err = susp.$err;
/*  5811 */             $postfinally = susp.$postfinally;
/*  5812 */             $currLineNo = susp.$lineno;
/*  5813 */             $currColNo = susp.$colno;
/*  5814 */             Sk.lastYield = Date.now();
/*  5815 */             CharLoc = susp.$tmps.CharLoc;
/*  5816 */             IntLoc = susp.$tmps.IntLoc;
/*  5817 */             StrParI1 = susp.$tmps.StrParI1;
/*  5818 */             StrParI2 = susp.$tmps.StrParI2;
/*  5819 */             $compareres418 = susp.$tmps.$compareres418;
/*  5820 */             $loadgbl421 = susp.$tmps.$loadgbl421;
/*  5821 */             $lsubscr422 = susp.$tmps.$lsubscr422;
/*  5822 */             $binop423 = susp.$tmps.$binop423;
/*  5823 */             $lsubscr424 = susp.$tmps.$lsubscr424;
/*  5824 */             $call425 = susp.$tmps.$call425;
/*  5825 */             $compareres426 = susp.$tmps.$compareres426;
/*  5826 */             $loadgbl427 = susp.$tmps.$loadgbl427;
/*  5827 */             $compareres432 = susp.$tmps.$compareres432;
/*  5828 */             $str433 = susp.$tmps.$str433;
/*  5829 */             $jfalse434 = susp.$tmps.$jfalse434;
/*  5830 */             $boolopsucc435 = susp.$tmps.$boolopsucc435;
/*  5831 */             $jfalse436 = susp.$tmps.$jfalse436;
/*  5832 */             $compareres437 = susp.$tmps.$compareres437;
/*  5833 */             $str438 = susp.$tmps.$str438;
/*  5834 */             $compareres442 = susp.$tmps.$compareres442;
/*  5835 */             $str443 = susp.$tmps.$str443;
/*  5836 */             $compareres447 = susp.$tmps.$compareres447;
/*  5837 */             try {
/*  5838 */                 $ret = susp.child.resume();
/*  5839 */             } catch (err) {
/*  5840 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5841 */                     err = new Sk.builtin.ExternalError(err);
/*  5842 */                 }
/*  5843 */                 err.traceback.push({
/*  5844 */                     lineno: $currLineNo,
/*  5845 */                     colno: $currColNo,
/*  5846 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  5847 */                 });
/*  5848 */                 if ($exc.length > 0) {
/*  5849 */                     $err = err;
/*  5850 */                     $blk = $exc.pop();
/*  5851 */                 } else {
/*  5852 */                     throw err;
/*  5853 */                 }
/*  5854 */             }
/*  5855 */         };
/*  5856 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5857 */             var susp = new Sk.misceval.Suspension();
/*  5858 */             susp.child = $child;
/*  5859 */             susp.resume = function() {
/*  5860 */                 $scope416.$wakingSuspension = susp;
/*  5861 */                 return $scope416();
/*  5862 */             };
/*  5863 */             susp.data = susp.child.data;
/*  5864 */             susp.$blk = $blk;
/*  5865 */             susp.$loc = $loc;
/*  5866 */             susp.$gbl = $gbl;
/*  5867 */             susp.$exc = $exc;
/*  5868 */             susp.$err = $err;
/*  5869 */             susp.$postfinally = $postfinally;
/*  5870 */             susp.$filename = $filename;
/*  5871 */             susp.$lineno = $lineno;
/*  5872 */             susp.$colno = $colno;
/*  5873 */             susp.optional = susp.child.optional;
/*  5874 */             susp.$tmps = {
/*  5875 */                 "CharLoc": CharLoc,
/*  5876 */                 "IntLoc": IntLoc,
/*  5877 */                 "StrParI1": StrParI1,
/*  5878 */                 "StrParI2": StrParI2,
/*  5879 */                 "$compareres418": $compareres418,
/*  5880 */                 "$loadgbl421": $loadgbl421,
/*  5881 */                 "$lsubscr422": $lsubscr422,
/*  5882 */                 "$binop423": $binop423,
/*  5883 */                 "$lsubscr424": $lsubscr424,
/*  5884 */                 "$call425": $call425,
/*  5885 */                 "$compareres426": $compareres426,
/*  5886 */                 "$loadgbl427": $loadgbl427,
/*  5887 */                 "$compareres432": $compareres432,
/*  5888 */                 "$str433": $str433,
/*  5889 */                 "$jfalse434": $jfalse434,
/*  5890 */                 "$boolopsucc435": $boolopsucc435,
/*  5891 */                 "$jfalse436": $jfalse436,
/*  5892 */                 "$compareres437": $compareres437,
/*  5893 */                 "$str438": $str438,
/*  5894 */                 "$compareres442": $compareres442,
/*  5895 */                 "$str443": $str443,
/*  5896 */                 "$compareres447": $compareres447
/*  5897 */             };
/*  5898 */             return susp;
/*  5899 */         };
/*  5900 */         var $blk = 0,
/*  5901 */             $exc = [],
/*  5902 */             $loc = {},
/*  5903 */             $gbl = this,
/*  5904 */             $err = undefined,
/*  5905 */             $ret = undefined,
/*  5906 */             $postfinally = undefined,
/*  5907 */             $currLineNo = undefined,
/*  5908 */             $currColNo = undefined;
/*  5909 */         if (typeof Sk.execStart === 'undefined') {
/*  5910 */             Sk.execStart = Date.now()
/*  5911 */         }
/*  5912 */         if (typeof Sk.lastYield === 'undefined') {
/*  5913 */             Sk.lastYield = Date.now()
/*  5914 */         }
/*  5915 */         if ($scope416.$wakingSuspension !== undefined) {
/*  5916 */             $wakeFromSuspension();
/*  5917 */         } else {
/*  5918 */             Sk.builtin.pyCheckArgs("Func2", arguments, 2, 2, false, false);
/*  5919 */         }
/*  5920 */         while (true) {
/*  5921 */             try {
/*  5922 */                 var $dateNow = Date.now();
/*  5923 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5924 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5925 */                 }
/*  5926 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5927 */                     var $susp = $saveSuspension({
/*  5928 */                         data: {
/*  5929 */                             type: 'Sk.yield'
/*  5930 */                         },
/*  5931 */                         resume: function() {}
/*  5932 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  5933 */                     $susp.$blk = $blk;
/*  5934 */                     $susp.optional = true;
/*  5935 */                     return $susp;
/*  5936 */                 }
/*  5937 */                 switch ($blk) {
/*  5938 */                 case 0:
/*  5939 */                     /* --- codeobj entry --- */
/*  5940 */                     if (StrParI1 === undefined) {
/*  5941 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  5942 */                     }
/*  5943 */                     if (StrParI2 === undefined) {
/*  5944 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  5945 */                     }
/*  5946 */ 
/*  5947 */                     //
/*  5948 */                     // line 234:
/*  5949 */                     //     IntLoc = 1
/*  5950 */                     //     ^
/*  5951 */                     //
/*  5952 */                     $currLineNo = 234;
/*  5953 */                     $currColNo = 4;
/*  5954 */ 
/*  5955 */                     IntLoc = new Sk.builtin.int_(1);
/*  5956 */                     //
/*  5957 */                     // line 235:
/*  5958 */                     //     while IntLoc <= 1:
/*  5959 */                     //     ^
/*  5960 */                     //
/*  5961 */                     $currLineNo = 235;
/*  5962 */                     $currColNo = 4;
/*  5963 */ 
/*  5964 */                     $blk = 1; /* allowing case fallthrough */
/*  5965 */                 case 1:
/*  5966 */                     /* --- while test --- */
/*  5967 */                     //
/*  5968 */                     // line 235:
/*  5969 */                     //     while IntLoc <= 1:
/*  5970 */                     //     ^
/*  5971 */                     //
/*  5972 */                     $currLineNo = 235;
/*  5973 */                     $currColNo = 4;
/*  5974 */ 
/*  5975 */                     if (IntLoc === undefined) {
/*  5976 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  5977 */                     }
/*  5978 */                     var $compareres418 = null;
/*  5979 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(IntLoc, new Sk.builtin.int_(1), 'LtE', true));
/*  5980 */                     $blk = 5; /* allowing case fallthrough */
/*  5981 */                 case 5:
/*  5982 */                     /* --- function return or resume suspension --- */
/*  5983 */                     if ($ret && $ret.$isSuspension) {
/*  5984 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 235, 10);
/*  5985 */                     }
/*  5986 */                     $compareres418 = $ret;
/*  5987 */                     var $jfalse419 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5988 */                     if ($jfalse419) { /*test failed */
/*  5989 */                         $blk = 4;
/*  5990 */                         continue;
/*  5991 */                     }
/*  5992 */                     $blk = 4; /* allowing case fallthrough */
/*  5993 */                 case 4:
/*  5994 */                     /* --- done --- */
/*  5995 */                     var $jfalse420 = ($compareres418 === false || !Sk.misceval.isTrue($compareres418));
/*  5996 */                     if ($jfalse420) { /*test failed */
/*  5997 */                         $blk = 2;
/*  5998 */                         continue;
/*  5999 */                     }
/*  6000 */                     $blk = 3; /* allowing case fallthrough */
/*  6001 */                 case 3:
/*  6002 */                     /* --- while body --- */
/*  6003 */                     //
/*  6004 */                     // line 236:
/*  6005 */                     //         if Func1(StrParI1[IntLoc], StrParI2[IntLoc+1]) == Ident1:
/*  6006 */                     //         ^
/*  6007 */                     //
/*  6008 */                     $currLineNo = 236;
/*  6009 */                     $currColNo = 8;
/*  6010 */ 
/*  6011 */                     var $loadgbl421 = Sk.misceval.loadname('Func1', $gbl);
/*  6012 */                     if (StrParI1 === undefined) {
/*  6013 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  6014 */                     }
/*  6015 */                     if (IntLoc === undefined) {
/*  6016 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  6017 */                     }
/*  6018 */                     $ret = Sk.abstr.objectGetItem(StrParI1, IntLoc, true);
/*  6019 */                     $blk = 7; /* allowing case fallthrough */
/*  6020 */                 case 7:
/*  6021 */                     /* --- function return or resume suspension --- */
/*  6022 */                     if ($ret && $ret.$isSuspension) {
/*  6023 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  6024 */                     }
/*  6025 */                     var $lsubscr422 = $ret;
/*  6026 */                     if (StrParI2 === undefined) {
/*  6027 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  6028 */                     }
/*  6029 */                     if (IntLoc === undefined) {
/*  6030 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  6031 */                     }
/*  6032 */                     var $binop423 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  6033 */                     $ret = Sk.abstr.objectGetItem(StrParI2, $binop423, true);
/*  6034 */                     $blk = 8; /* allowing case fallthrough */
/*  6035 */                 case 8:
/*  6036 */                     /* --- function return or resume suspension --- */
/*  6037 */                     if ($ret && $ret.$isSuspension) {
/*  6038 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  6039 */                     }
/*  6040 */                     var $lsubscr424 = $ret;
/*  6041 */                     $ret;
/*  6042 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl421, $lsubscr422, $lsubscr424);
/*  6043 */                     $blk = 9; /* allowing case fallthrough */
/*  6044 */                 case 9:
/*  6045 */                     /* --- function return or resume suspension --- */
/*  6046 */                     if ($ret && $ret.$isSuspension) {
/*  6047 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 236, 11);
/*  6048 */                     }
/*  6049 */                     var $call425 = $ret;
/*  6050 */                     //
/*  6051 */                     // line 236:
/*  6052 */                     //         if Func1(StrParI1[IntLoc], StrParI2[IntLoc+1]) == Ident1:
/*  6053 */                     //            ^
/*  6054 */                     //
/*  6055 */                     $currLineNo = 236;
/*  6056 */                     $currColNo = 11;
/*  6057 */ 
/*  6058 */                     var $compareres426 = null;
/*  6059 */                     var $loadgbl427 = Sk.misceval.loadname('Ident1', $gbl);
/*  6060 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call425, $loadgbl427, 'Eq', true));
/*  6061 */                     $blk = 11; /* allowing case fallthrough */
/*  6062 */                 case 11:
/*  6063 */                     /* --- function return or resume suspension --- */
/*  6064 */                     if ($ret && $ret.$isSuspension) {
/*  6065 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 236, 11);
/*  6066 */                     }
/*  6067 */                     $compareres426 = $ret;
/*  6068 */                     var $jfalse428 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6069 */                     if ($jfalse428) { /*test failed */
/*  6070 */                         $blk = 10;
/*  6071 */                         continue;
/*  6072 */                     }
/*  6073 */                     $blk = 10; /* allowing case fallthrough */
/*  6074 */                 case 10:
/*  6075 */                     /* --- done --- */
/*  6076 */                     var $jfalse429 = ($compareres426 === false || !Sk.misceval.isTrue($compareres426));
/*  6077 */                     if ($jfalse429) { /*test failed */
/*  6078 */                         $blk = 6;
/*  6079 */                         continue;
/*  6080 */                     }
/*  6081 */                     //
/*  6082 */                     // line 237:
/*  6083 */                     //             CharLoc = 'A'
/*  6084 */                     //             ^
/*  6085 */                     //
/*  6086 */                     $currLineNo = 237;
/*  6087 */                     $currColNo = 12;
/*  6088 */ 
/*  6089 */                     var $str430 = new Sk.builtins['str']('A');
/*  6090 */                     CharLoc = $str430;
/*  6091 */                     //
/*  6092 */                     // line 238:
/*  6093 */                     //             IntLoc = IntLoc + 1
/*  6094 */                     //             ^
/*  6095 */                     //
/*  6096 */                     $currLineNo = 238;
/*  6097 */                     $currColNo = 12;
/*  6098 */ 
/*  6099 */                     if (IntLoc === undefined) {
/*  6100 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  6101 */                     }
/*  6102 */                     var $binop431 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(1), 'Add');
/*  6103 */                     IntLoc = $binop431;
/*  6104 */                     $blk = 6; /* allowing case fallthrough */
/*  6105 */                 case 6:
/*  6106 */                     /* --- end of if --- */
/*  6107 */                     $blk = 1; /* jump */
/*  6108 */                     continue;
/*  6109 */                 case 2:
/*  6110 */                     /* --- after while --- */
/*  6111 */                     //
/*  6112 */                     // line 239:
/*  6113 */                     //     if CharLoc >= 'W' and CharLoc <= 'Z':
/*  6114 */                     //     ^
/*  6115 */                     //
/*  6116 */                     $currLineNo = 239;
/*  6117 */                     $currColNo = 4;
/*  6118 */ 
/*  6119 */                     if (CharLoc === undefined) {
/*  6120 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  6121 */                     }
/*  6122 */                     var $compareres432 = null;
/*  6123 */                     var $str433 = new Sk.builtins['str']('W');
/*  6124 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str433, 'GtE', true));
/*  6125 */                     $blk = 15; /* allowing case fallthrough */
/*  6126 */                 case 15:
/*  6127 */                     /* --- function return or resume suspension --- */
/*  6128 */                     if ($ret && $ret.$isSuspension) {
/*  6129 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 239, 7);
/*  6130 */                     }
/*  6131 */                     $compareres432 = $ret;
/*  6132 */                     var $jfalse434 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6133 */                     if ($jfalse434) { /*test failed */
/*  6134 */                         $blk = 14;
/*  6135 */                         continue;
/*  6136 */                     }
/*  6137 */                     $blk = 14; /* allowing case fallthrough */
/*  6138 */                 case 14:
/*  6139 */                     /* --- done --- */
/*  6140 */                     var $boolopsucc435 = $compareres432;
/*  6141 */                     $boolopsucc435 = $compareres432;
/*  6142 */                     var $jfalse436 = ($compareres432 === false || !Sk.misceval.isTrue($compareres432));
/*  6143 */                     if ($jfalse436) { /*test failed */
/*  6144 */                         $blk = 13;
/*  6145 */                         continue;
/*  6146 */                     }
/*  6147 */                     if (CharLoc === undefined) {
/*  6148 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  6149 */                     }
/*  6150 */                     var $compareres437 = null;
/*  6151 */                     var $str438 = new Sk.builtins['str']('Z');
/*  6152 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str438, 'LtE', true));
/*  6153 */                     $blk = 17; /* allowing case fallthrough */
/*  6154 */                 case 17:
/*  6155 */                     /* --- function return or resume suspension --- */
/*  6156 */                     if ($ret && $ret.$isSuspension) {
/*  6157 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 239, 26);
/*  6158 */                     }
/*  6159 */                     $compareres437 = $ret;
/*  6160 */                     var $jfalse439 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6161 */                     if ($jfalse439) { /*test failed */
/*  6162 */                         $blk = 16;
/*  6163 */                         continue;
/*  6164 */                     }
/*  6165 */                     $blk = 16; /* allowing case fallthrough */
/*  6166 */                 case 16:
/*  6167 */                     /* --- done --- */
/*  6168 */                     $boolopsucc435 = $compareres437;
/*  6169 */                     var $jfalse440 = ($compareres437 === false || !Sk.misceval.isTrue($compareres437));
/*  6170 */                     if ($jfalse440) { /*test failed */
/*  6171 */                         $blk = 13;
/*  6172 */                         continue;
/*  6173 */                     }
/*  6174 */                     $blk = 13; /* allowing case fallthrough */
/*  6175 */                 case 13:
/*  6176 */                     /* --- end of boolop --- */
/*  6177 */                     var $jfalse441 = ($boolopsucc435 === false || !Sk.misceval.isTrue($boolopsucc435));
/*  6178 */                     if ($jfalse441) { /*test failed */
/*  6179 */                         $blk = 12;
/*  6180 */                         continue;
/*  6181 */                     }
/*  6182 */                     //
/*  6183 */                     // line 240:
/*  6184 */                     //         IntLoc = 7
/*  6185 */                     //         ^
/*  6186 */                     //
/*  6187 */                     $currLineNo = 240;
/*  6188 */                     $currColNo = 8;
/*  6189 */ 
/*  6190 */                     IntLoc = new Sk.builtin.int_(7);
/*  6191 */                     $blk = 12; /* allowing case fallthrough */
/*  6192 */                 case 12:
/*  6193 */                     /* --- end of if --- */
/*  6194 */                     //
/*  6195 */                     // line 241:
/*  6196 */                     //     if CharLoc == 'X':
/*  6197 */                     //     ^
/*  6198 */                     //
/*  6199 */                     $currLineNo = 241;
/*  6200 */                     $currColNo = 4;
/*  6201 */ 
/*  6202 */                     if (CharLoc === undefined) {
/*  6203 */                         throw new Sk.builtin.UnboundLocalError('local variable \'CharLoc\' referenced before assignment');
/*  6204 */                     }
/*  6205 */                     var $compareres442 = null;
/*  6206 */                     var $str443 = new Sk.builtins['str']('X');
/*  6207 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(CharLoc, $str443, 'Eq', true));
/*  6208 */                     $blk = 21; /* allowing case fallthrough */
/*  6209 */                 case 21:
/*  6210 */                     /* --- function return or resume suspension --- */
/*  6211 */                     if ($ret && $ret.$isSuspension) {
/*  6212 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 241, 7);
/*  6213 */                     }
/*  6214 */                     $compareres442 = $ret;
/*  6215 */                     var $jfalse444 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6216 */                     if ($jfalse444) { /*test failed */
/*  6217 */                         $blk = 20;
/*  6218 */                         continue;
/*  6219 */                     }
/*  6220 */                     $blk = 20; /* allowing case fallthrough */
/*  6221 */                 case 20:
/*  6222 */                     /* --- done --- */
/*  6223 */                     var $jfalse445 = ($compareres442 === false || !Sk.misceval.isTrue($compareres442));
/*  6224 */                     if ($jfalse445) { /*test failed */
/*  6225 */                         $blk = 19;
/*  6226 */                         continue;
/*  6227 */                     }
/*  6228 */                     //
/*  6229 */                     // line 242:
/*  6230 */                     //         return TRUE
/*  6231 */                     //         ^
/*  6232 */                     //
/*  6233 */                     $currLineNo = 242;
/*  6234 */                     $currColNo = 8;
/*  6235 */ 
/*  6236 */                     var $loadgbl446 = Sk.misceval.loadname('TRUE', $gbl);
/*  6237 */                     return $loadgbl446;
/*  6238 */                     $blk = 18; /* allowing case fallthrough */
/*  6239 */                 case 18:
/*  6240 */                     /* --- end of if --- */
/*  6241 */                     return Sk.builtin.none.none$;
/*  6242 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6243 */                 case 19:
/*  6244 */                     /* --- next branch of if --- */
/*  6245 */                     //
/*  6246 */                     // line 244:
/*  6247 */                     //         if StrParI1 > StrParI2:
/*  6248 */                     //         ^
/*  6249 */                     //
/*  6250 */                     $currLineNo = 244;
/*  6251 */                     $currColNo = 8;
/*  6252 */ 
/*  6253 */                     if (StrParI1 === undefined) {
/*  6254 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI1\' referenced before assignment');
/*  6255 */                     }
/*  6256 */                     var $compareres447 = null;
/*  6257 */                     if (StrParI2 === undefined) {
/*  6258 */                         throw new Sk.builtin.UnboundLocalError('local variable \'StrParI2\' referenced before assignment');
/*  6259 */                     }
/*  6260 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(StrParI1, StrParI2, 'Gt', true));
/*  6261 */                     $blk = 25; /* allowing case fallthrough */
/*  6262 */                 case 25:
/*  6263 */                     /* --- function return or resume suspension --- */
/*  6264 */                     if ($ret && $ret.$isSuspension) {
/*  6265 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 244, 11);
/*  6266 */                     }
/*  6267 */                     $compareres447 = $ret;
/*  6268 */                     var $jfalse448 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6269 */                     if ($jfalse448) { /*test failed */
/*  6270 */                         $blk = 24;
/*  6271 */                         continue;
/*  6272 */                     }
/*  6273 */                     $blk = 24; /* allowing case fallthrough */
/*  6274 */                 case 24:
/*  6275 */                     /* --- done --- */
/*  6276 */                     var $jfalse449 = ($compareres447 === false || !Sk.misceval.isTrue($compareres447));
/*  6277 */                     if ($jfalse449) { /*test failed */
/*  6278 */                         $blk = 23;
/*  6279 */                         continue;
/*  6280 */                     }
/*  6281 */                     //
/*  6282 */                     // line 245:
/*  6283 */                     //             IntLoc = IntLoc + 7
/*  6284 */                     //             ^
/*  6285 */                     //
/*  6286 */                     $currLineNo = 245;
/*  6287 */                     $currColNo = 12;
/*  6288 */ 
/*  6289 */                     if (IntLoc === undefined) {
/*  6290 */                         throw new Sk.builtin.UnboundLocalError('local variable \'IntLoc\' referenced before assignment');
/*  6291 */                     }
/*  6292 */                     var $binop450 = Sk.abstr.numberBinOp(IntLoc, new Sk.builtin.int_(7), 'Add');
/*  6293 */                     IntLoc = $binop450;
/*  6294 */                     //
/*  6295 */                     // line 246:
/*  6296 */                     //             return TRUE
/*  6297 */                     //             ^
/*  6298 */                     //
/*  6299 */                     $currLineNo = 246;
/*  6300 */                     $currColNo = 12;
/*  6301 */ 
/*  6302 */                     var $loadgbl451 = Sk.misceval.loadname('TRUE', $gbl);
/*  6303 */                     return $loadgbl451;
/*  6304 */                     $blk = 22; /* allowing case fallthrough */
/*  6305 */                 case 22:
/*  6306 */                     /* --- end of if --- */
/*  6307 */                     $blk = 18; /* jump */
/*  6308 */                     continue;
/*  6309 */                 case 23:
/*  6310 */                     /* --- next branch of if --- */
/*  6311 */                     //
/*  6312 */                     // line 248:
/*  6313 */                     //             return FALSE
/*  6314 */                     //             ^
/*  6315 */                     //
/*  6316 */                     $currLineNo = 248;
/*  6317 */                     $currColNo = 12;
/*  6318 */ 
/*  6319 */                     var $loadgbl452 = Sk.misceval.loadname('FALSE', $gbl);
/*  6320 */                     return $loadgbl452;
/*  6321 */                     $blk = 22; /* jump */
/*  6322 */                     continue;
/*  6323 */                 }
/*  6324 */             } catch (err) {
/*  6325 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6326 */                     err = new Sk.builtin.ExternalError(err);
/*  6327 */                 }
/*  6328 */                 err.traceback.push({
/*  6329 */                     lineno: $currLineNo,
/*  6330 */                     colno: $currColNo,
/*  6331 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  6332 */                 });
/*  6333 */                 if ($exc.length > 0) {
/*  6334 */                     $err = err;
/*  6335 */                     $blk = $exc.pop();
/*  6336 */                     continue;
/*  6337 */                 } else {
/*  6338 */                     throw err;
/*  6339 */                 }
/*  6340 */             }
/*  6341 */         }
/*  6342 */     });
/*  6343 */     var $scope454 = (function $Func3455$(EnumParIn) {
/*  6344 */         var EnumLoc; /* locals */
/*  6345 */         var EnumLoc, EnumLoc, EnumParIn, EnumParIn, $compareres456, $loadgbl457;
/*  6346 */         var $wakeFromSuspension = function() {
/*  6347 */             var susp = $scope454.$wakingSuspension;
/*  6348 */             delete $scope454.$wakingSuspension;
/*  6349 */             $blk = susp.$blk;
/*  6350 */             $loc = susp.$loc;
/*  6351 */             $gbl = susp.$gbl;
/*  6352 */             $exc = susp.$exc;
/*  6353 */             $err = susp.$err;
/*  6354 */             $postfinally = susp.$postfinally;
/*  6355 */             $currLineNo = susp.$lineno;
/*  6356 */             $currColNo = susp.$colno;
/*  6357 */             Sk.lastYield = Date.now();
/*  6358 */             EnumLoc = susp.$tmps.EnumLoc;
/*  6359 */             EnumParIn = susp.$tmps.EnumParIn;
/*  6360 */             $compareres456 = susp.$tmps.$compareres456;
/*  6361 */             $loadgbl457 = susp.$tmps.$loadgbl457;
/*  6362 */             try {
/*  6363 */                 $ret = susp.child.resume();
/*  6364 */             } catch (err) {
/*  6365 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6366 */                     err = new Sk.builtin.ExternalError(err);
/*  6367 */                 }
/*  6368 */                 err.traceback.push({
/*  6369 */                     lineno: $currLineNo,
/*  6370 */                     colno: $currColNo,
/*  6371 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  6372 */                 });
/*  6373 */                 if ($exc.length > 0) {
/*  6374 */                     $err = err;
/*  6375 */                     $blk = $exc.pop();
/*  6376 */                 } else {
/*  6377 */                     throw err;
/*  6378 */                 }
/*  6379 */             }
/*  6380 */         };
/*  6381 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6382 */             var susp = new Sk.misceval.Suspension();
/*  6383 */             susp.child = $child;
/*  6384 */             susp.resume = function() {
/*  6385 */                 $scope454.$wakingSuspension = susp;
/*  6386 */                 return $scope454();
/*  6387 */             };
/*  6388 */             susp.data = susp.child.data;
/*  6389 */             susp.$blk = $blk;
/*  6390 */             susp.$loc = $loc;
/*  6391 */             susp.$gbl = $gbl;
/*  6392 */             susp.$exc = $exc;
/*  6393 */             susp.$err = $err;
/*  6394 */             susp.$postfinally = $postfinally;
/*  6395 */             susp.$filename = $filename;
/*  6396 */             susp.$lineno = $lineno;
/*  6397 */             susp.$colno = $colno;
/*  6398 */             susp.optional = susp.child.optional;
/*  6399 */             susp.$tmps = {
/*  6400 */                 "EnumLoc": EnumLoc,
/*  6401 */                 "EnumParIn": EnumParIn,
/*  6402 */                 "$compareres456": $compareres456,
/*  6403 */                 "$loadgbl457": $loadgbl457
/*  6404 */             };
/*  6405 */             return susp;
/*  6406 */         };
/*  6407 */         var $blk = 0,
/*  6408 */             $exc = [],
/*  6409 */             $loc = {},
/*  6410 */             $gbl = this,
/*  6411 */             $err = undefined,
/*  6412 */             $ret = undefined,
/*  6413 */             $postfinally = undefined,
/*  6414 */             $currLineNo = undefined,
/*  6415 */             $currColNo = undefined;
/*  6416 */         if (typeof Sk.execStart === 'undefined') {
/*  6417 */             Sk.execStart = Date.now()
/*  6418 */         }
/*  6419 */         if (typeof Sk.lastYield === 'undefined') {
/*  6420 */             Sk.lastYield = Date.now()
/*  6421 */         }
/*  6422 */         if ($scope454.$wakingSuspension !== undefined) {
/*  6423 */             $wakeFromSuspension();
/*  6424 */         } else {
/*  6425 */             Sk.builtin.pyCheckArgs("Func3", arguments, 1, 1, false, false);
/*  6426 */         }
/*  6427 */         while (true) {
/*  6428 */             try {
/*  6429 */                 var $dateNow = Date.now();
/*  6430 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  6431 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6432 */                 }
/*  6433 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6434 */                     var $susp = $saveSuspension({
/*  6435 */                         data: {
/*  6436 */                             type: 'Sk.yield'
/*  6437 */                         },
/*  6438 */                         resume: function() {}
/*  6439 */                     }, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', $currLineNo, $currColNo);
/*  6440 */                     $susp.$blk = $blk;
/*  6441 */                     $susp.optional = true;
/*  6442 */                     return $susp;
/*  6443 */                 }
/*  6444 */                 switch ($blk) {
/*  6445 */                 case 0:
/*  6446 */                     /* --- codeobj entry --- */
/*  6447 */                     if (EnumParIn === undefined) {
/*  6448 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  6449 */                     }
/*  6450 */ 
/*  6451 */                     //
/*  6452 */                     // line 251:
/*  6453 */                     //     EnumLoc = EnumParIn
/*  6454 */                     //     ^
/*  6455 */                     //
/*  6456 */                     $currLineNo = 251;
/*  6457 */                     $currColNo = 4;
/*  6458 */ 
/*  6459 */                     if (EnumParIn === undefined) {
/*  6460 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumParIn\' referenced before assignment');
/*  6461 */                     }
/*  6462 */                     EnumLoc = EnumParIn;
/*  6463 */                     //
/*  6464 */                     // line 252:
/*  6465 */                     //     if EnumLoc == Ident3: return TRUE
/*  6466 */                     //     ^
/*  6467 */                     //
/*  6468 */                     $currLineNo = 252;
/*  6469 */                     $currColNo = 4;
/*  6470 */ 
/*  6471 */                     if (EnumLoc === undefined) {
/*  6472 */                         throw new Sk.builtin.UnboundLocalError('local variable \'EnumLoc\' referenced before assignment');
/*  6473 */                     }
/*  6474 */                     var $compareres456 = null;
/*  6475 */                     var $loadgbl457 = Sk.misceval.loadname('Ident3', $gbl);
/*  6476 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(EnumLoc, $loadgbl457, 'Eq', true));
/*  6477 */                     $blk = 3; /* allowing case fallthrough */
/*  6478 */                 case 3:
/*  6479 */                     /* --- function return or resume suspension --- */
/*  6480 */                     if ($ret && $ret.$isSuspension) {
/*  6481 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/pystone/main.py', 252, 7);
/*  6482 */                     }
/*  6483 */                     $compareres456 = $ret;
/*  6484 */                     var $jfalse458 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6485 */                     if ($jfalse458) { /*test failed */
/*  6486 */                         $blk = 2;
/*  6487 */                         continue;
/*  6488 */                     }
/*  6489 */                     $blk = 2; /* allowing case fallthrough */
/*  6490 */                 case 2:
/*  6491 */                     /* --- done --- */
/*  6492 */                     var $jfalse459 = ($compareres456 === false || !Sk.misceval.isTrue($compareres456));
/*  6493 */                     if ($jfalse459) { /*test failed */
/*  6494 */                         $blk = 1;
/*  6495 */                         continue;
/*  6496 */                     }
/*  6497 */                     //
/*  6498 */                     // line 252:
/*  6499 */                     //     if EnumLoc == Ident3: return TRUE
/*  6500 */                     //                           ^
/*  6501 */                     //
/*  6502 */                     $currLineNo = 252;
/*  6503 */                     $currColNo = 26;
/*  6504 */ 
/*  6505 */                     var $loadgbl460 = Sk.misceval.loadname('TRUE', $gbl);
/*  6506 */                     return $loadgbl460;
/*  6507 */                     $blk = 1; /* allowing case fallthrough */
/*  6508 */                 case 1:
/*  6509 */                     /* --- end of if --- */
/*  6510 */                     //
/*  6511 */                     // line 253:
/*  6512 */                     //     return FALSE
/*  6513 */                     //     ^
/*  6514 */                     //
/*  6515 */                     $currLineNo = 253;
/*  6516 */                     $currColNo = 4;
/*  6517 */ 
/*  6518 */                     var $loadgbl461 = Sk.misceval.loadname('FALSE', $gbl);
/*  6519 */                     return $loadgbl461;
/*  6520 */                     return Sk.builtin.none.none$;
/*  6521 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6522 */                 }
/*  6523 */             } catch (err) {
/*  6524 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6525 */                     err = new Sk.builtin.ExternalError(err);
/*  6526 */                 }
/*  6527 */                 err.traceback.push({
/*  6528 */                     lineno: $currLineNo,
/*  6529 */                     colno: $currColNo,
/*  6530 */                     filename: '/home/sbaxter/benchmarks/skulpt/pystone/main.py'
/*  6531 */                 });
/*  6532 */                 if ($exc.length > 0) {
/*  6533 */                     $err = err;
/*  6534 */                     $blk = $exc.pop();
/*  6535 */                     continue;
/*  6536 */                 } else {
/*  6537 */                     throw err;
/*  6538 */                 }
/*  6539 */             }
/*  6540 */         }
/*  6541 */     });
/*  6542 */     return $scope120;
/*  6543 */ }();
