/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname170, $str171, $loadname173, $loadname174;
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
/*    16 */             $loadname170 = susp.$tmps.$loadname170;
/*    17 */             $str171 = susp.$tmps.$str171;
/*    18 */             $loadname173 = susp.$tmps.$loadname173;
/*    19 */             $loadname174 = susp.$tmps.$loadname174;
/*    20 */             try {
/*    21 */                 $ret = susp.child.resume();
/*    22 */             } catch (err) {
/*    23 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    24 */                     err = new Sk.builtin.ExternalError(err);
/*    25 */                 }
/*    26 */                 err.traceback.push({
/*    27 */                     lineno: $currLineNo,
/*    28 */                     colno: $currColNo,
/*    29 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*    30 */                 });
/*    31 */                 if ($exc.length > 0) {
/*    32 */                     $err = err;
/*    33 */                     $blk = $exc.pop();
/*    34 */                 } else {
/*    35 */                     throw err;
/*    36 */                 }
/*    37 */             }
/*    38 */         };
/*    39 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    40 */             var susp = new Sk.misceval.Suspension();
/*    41 */             susp.child = $child;
/*    42 */             susp.resume = function() {
/*    43 */                 $scope120.$wakingSuspension = susp;
/*    44 */                 return $scope120();
/*    45 */             };
/*    46 */             susp.data = susp.child.data;
/*    47 */             susp.$blk = $blk;
/*    48 */             susp.$loc = $loc;
/*    49 */             susp.$gbl = $gbl;
/*    50 */             susp.$exc = $exc;
/*    51 */             susp.$err = $err;
/*    52 */             susp.$postfinally = $postfinally;
/*    53 */             susp.$filename = $filename;
/*    54 */             susp.$lineno = $lineno;
/*    55 */             susp.$colno = $colno;
/*    56 */             susp.optional = susp.child.optional;
/*    57 */             susp.$tmps = {
/*    58 */                 "$loadname170": $loadname170,
/*    59 */                 "$str171": $str171,
/*    60 */                 "$loadname173": $loadname173,
/*    61 */                 "$loadname174": $loadname174
/*    62 */             };
/*    63 */             return susp;
/*    64 */         };
/*    65 */         var $gbl = {},
/*    66 */             $blk = 0,
/*    67 */             $exc = [],
/*    68 */             $loc = $gbl,
/*    69 */             $err = undefined;
/*    70 */         $gbl.__name__ = $modname;
/*    71 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/anagram/main.py');
/*    72 */         var $ret = undefined,
/*    73 */             $postfinally = undefined,
/*    74 */             $currLineNo = undefined,
/*    75 */             $currColNo = undefined;
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
/*    92 */                 switch ($blk) {
/*    93 */                 case 0:
/*    94 */                     /* --- module entry --- */
/*    95 */                     //
/*    96 */                     // line 2:
/*    97 */                     // import sys
/*    98 */                     // ^
/*    99 */                     //
/*   100 */                     $currLineNo = 2;
/*   101 */                     $currColNo = 0;
/*   102 */ 
/*   103 */                     $ret = Sk.builtin.__import__('sys', $gbl, $loc, []);
/*   104 */                     $blk = 1; /* allowing case fallthrough */
/*   105 */                 case 1:
/*   106 */                     /* --- function return or resume suspension --- */
/*   107 */                     if ($ret && $ret.$isSuspension) {
/*   108 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 2, 0);
/*   109 */                     }
/*   110 */                     var $module121 = $ret;
/*   111 */                     $loc.sys = $module121;
/*   112 */                     //
/*   113 */                     // line 4:
/*   114 */                     // def scrambler(word):
/*   115 */                     // ^
/*   116 */                     //
/*   117 */                     $currLineNo = 4;
/*   118 */                     $currColNo = 0;
/*   119 */ 
/*   120 */                     $scope122.co_name = new Sk.builtins['str']('scrambler');
/*   121 */                     $scope122.co_varnames = ['word'];
/*   122 */                     var $funcobj169 = new Sk.builtins['function']($scope122, $gbl);
/*   123 */                     $loc.scrambler = $funcobj169;
/*   124 */                     //
/*   125 */                     // line 20:
/*   126 */                     // scrambles = scrambler("berrycakes")
/*   127 */                     // ^
/*   128 */                     //
/*   129 */                     $currLineNo = 20;
/*   130 */                     $currColNo = 0;
/*   131 */ 
/*   132 */                     var $loadname170 = $loc.scrambler !== undefined ? $loc.scrambler : Sk.misceval.loadname('scrambler', $gbl);;
/*   133 */                     var $str171 = new Sk.builtins['str']('berrycakes');
/*   134 */                     $ret;
/*   135 */                     $ret = Sk.misceval.callsimOrSuspend($loadname170, $str171);
/*   136 */                     $blk = 2; /* allowing case fallthrough */
/*   137 */                 case 2:
/*   138 */                     /* --- function return or resume suspension --- */
/*   139 */                     if ($ret && $ret.$isSuspension) {
/*   140 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 20, 12);
/*   141 */                     }
/*   142 */                     var $call172 = $ret;
/*   143 */                     //
/*   144 */                     // line 20:
/*   145 */                     // scrambles = scrambler("berrycakes")
/*   146 */                     //             ^
/*   147 */                     //
/*   148 */                     $currLineNo = 20;
/*   149 */                     $currColNo = 12;
/*   150 */ 
/*   151 */                     $loc.scrambles = $call172;
/*   152 */                     //
/*   153 */                     // line 21:
/*   154 */                     // print len(scrambles)
/*   155 */                     // ^
/*   156 */                     //
/*   157 */                     $currLineNo = 21;
/*   158 */                     $currColNo = 0;
/*   159 */ 
/*   160 */                     var $loadname173 = $loc.len !== undefined ? $loc.len : Sk.misceval.loadname('len', $gbl);;
/*   161 */                     var $loadname174 = $loc.scrambles !== undefined ? $loc.scrambles : Sk.misceval.loadname('scrambles', $gbl);;
/*   162 */                     $ret;
/*   163 */                     $ret = Sk.misceval.callsimOrSuspend($loadname173, $loadname174);
/*   164 */                     $blk = 3; /* allowing case fallthrough */
/*   165 */                 case 3:
/*   166 */                     /* --- function return or resume suspension --- */
/*   167 */                     if ($ret && $ret.$isSuspension) {
/*   168 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 21, 6);
/*   169 */                     }
/*   170 */                     var $call175 = $ret;
/*   171 */                     //
/*   172 */                     // line 21:
/*   173 */                     // print len(scrambles)
/*   174 */                     //       ^
/*   175 */                     //
/*   176 */                     $currLineNo = 21;
/*   177 */                     $currColNo = 6;
/*   178 */ 
/*   179 */                     Sk.misceval.print_(new Sk.builtins['str']($call175).v);
/*   180 */                     Sk.misceval.print_("\n");
/*   181 */                     return $loc;
/*   182 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   183 */                 }
/*   184 */             } catch (err) {
/*   185 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   186 */                     err = new Sk.builtin.ExternalError(err);
/*   187 */                 }
/*   188 */                 err.traceback.push({
/*   189 */                     lineno: $currLineNo,
/*   190 */                     colno: $currColNo,
/*   191 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   192 */                 });
/*   193 */                 if ($exc.length > 0) {
/*   194 */                     $err = err;
/*   195 */                     $blk = $exc.pop();
/*   196 */                     continue;
/*   197 */                 } else {
/*   198 */                     throw err;
/*   199 */                 }
/*   200 */             }
/*   201 */         }
/*   202 */     });
/*   203 */     var $scope122 = (function $scrambler123$(word) {
/*   204 */         var char_$rw$, finals, i, n, newfinal, nstrings, tail, uniqueList; /* locals */
/*   205 */         var char_$rw$, char_$rw$, finals, finals, finals, i, i, i, n, n, n, n, n, newfinal, newfinal, nstrings, nstrings, nstrings, nstrings, tail, tail, uniqueList, uniqueList, uniqueList, word, word, word, word, $loadgbl124, $loadgbl124, $call125, $compareres126, $loadgbl131, $str135, $str135, $lattr136, $slice137, $str135, $lattr136, $slice137, $lsubscr138, $loadgbl140, $loadgbl141, $loadgbl142, $loadgbl140, $loadgbl141, $loadgbl142, $call143, $loadgbl140, $loadgbl141, $loadgbl142, $call143, $call144, $iter146, $iter146, $loadgbl148, $loadgbl149, $loadgbl148, $loadgbl149, $call150, $binop151, $iter153, $loadgbl148, $loadgbl149, $call150, $binop151, $call152, $iter153, $slice155, $slice155, $lsubscr156, $binop157, $loadgbl158, $slice155, $lsubscr156, $binop157, $loadgbl158, $call159, $slice160, $lattr163, $loadgbl165, $loadgbl166, $loadgbl165, $loadgbl166, $call167;
/*   206 */         var $wakeFromSuspension = function() {
/*   207 */             var susp = $scope122.$wakingSuspension;
/*   208 */             delete $scope122.$wakingSuspension;
/*   209 */             $blk = susp.$blk;
/*   210 */             $loc = susp.$loc;
/*   211 */             $gbl = susp.$gbl;
/*   212 */             $exc = susp.$exc;
/*   213 */             $err = susp.$err;
/*   214 */             $postfinally = susp.$postfinally;
/*   215 */             $currLineNo = susp.$lineno;
/*   216 */             $currColNo = susp.$colno;
/*   217 */             Sk.lastYield = Date.now();
/*   218 */             char_$rw$ = susp.$tmps.char_$rw$;
/*   219 */             finals = susp.$tmps.finals;
/*   220 */             i = susp.$tmps.i;
/*   221 */             n = susp.$tmps.n;
/*   222 */             newfinal = susp.$tmps.newfinal;
/*   223 */             nstrings = susp.$tmps.nstrings;
/*   224 */             tail = susp.$tmps.tail;
/*   225 */             uniqueList = susp.$tmps.uniqueList;
/*   226 */             word = susp.$tmps.word;
/*   227 */             $loadgbl124 = susp.$tmps.$loadgbl124;
/*   228 */             $call125 = susp.$tmps.$call125;
/*   229 */             $compareres126 = susp.$tmps.$compareres126;
/*   230 */             $loadgbl131 = susp.$tmps.$loadgbl131;
/*   231 */             $str135 = susp.$tmps.$str135;
/*   232 */             $lattr136 = susp.$tmps.$lattr136;
/*   233 */             $slice137 = susp.$tmps.$slice137;
/*   234 */             $lsubscr138 = susp.$tmps.$lsubscr138;
/*   235 */             $loadgbl140 = susp.$tmps.$loadgbl140;
/*   236 */             $loadgbl141 = susp.$tmps.$loadgbl141;
/*   237 */             $loadgbl142 = susp.$tmps.$loadgbl142;
/*   238 */             $call143 = susp.$tmps.$call143;
/*   239 */             $call144 = susp.$tmps.$call144;
/*   240 */             $iter146 = susp.$tmps.$iter146;
/*   241 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*   242 */             $loadgbl149 = susp.$tmps.$loadgbl149;
/*   243 */             $call150 = susp.$tmps.$call150;
/*   244 */             $binop151 = susp.$tmps.$binop151;
/*   245 */             $iter153 = susp.$tmps.$iter153;
/*   246 */             $call152 = susp.$tmps.$call152;
/*   247 */             $slice155 = susp.$tmps.$slice155;
/*   248 */             $lsubscr156 = susp.$tmps.$lsubscr156;
/*   249 */             $binop157 = susp.$tmps.$binop157;
/*   250 */             $loadgbl158 = susp.$tmps.$loadgbl158;
/*   251 */             $call159 = susp.$tmps.$call159;
/*   252 */             $slice160 = susp.$tmps.$slice160;
/*   253 */             $lattr163 = susp.$tmps.$lattr163;
/*   254 */             $loadgbl165 = susp.$tmps.$loadgbl165;
/*   255 */             $loadgbl166 = susp.$tmps.$loadgbl166;
/*   256 */             $call167 = susp.$tmps.$call167;
/*   257 */             try {
/*   258 */                 $ret = susp.child.resume();
/*   259 */             } catch (err) {
/*   260 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   261 */                     err = new Sk.builtin.ExternalError(err);
/*   262 */                 }
/*   263 */                 err.traceback.push({
/*   264 */                     lineno: $currLineNo,
/*   265 */                     colno: $currColNo,
/*   266 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   267 */                 });
/*   268 */                 if ($exc.length > 0) {
/*   269 */                     $err = err;
/*   270 */                     $blk = $exc.pop();
/*   271 */                 } else {
/*   272 */                     throw err;
/*   273 */                 }
/*   274 */             }
/*   275 */         };
/*   276 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   277 */             var susp = new Sk.misceval.Suspension();
/*   278 */             susp.child = $child;
/*   279 */             susp.resume = function() {
/*   280 */                 $scope122.$wakingSuspension = susp;
/*   281 */                 return $scope122();
/*   282 */             };
/*   283 */             susp.data = susp.child.data;
/*   284 */             susp.$blk = $blk;
/*   285 */             susp.$loc = $loc;
/*   286 */             susp.$gbl = $gbl;
/*   287 */             susp.$exc = $exc;
/*   288 */             susp.$err = $err;
/*   289 */             susp.$postfinally = $postfinally;
/*   290 */             susp.$filename = $filename;
/*   291 */             susp.$lineno = $lineno;
/*   292 */             susp.$colno = $colno;
/*   293 */             susp.optional = susp.child.optional;
/*   294 */             susp.$tmps = {
/*   295 */                 "char_$rw$": char_$rw$,
/*   296 */                 "finals": finals,
/*   297 */                 "i": i,
/*   298 */                 "n": n,
/*   299 */                 "newfinal": newfinal,
/*   300 */                 "nstrings": nstrings,
/*   301 */                 "tail": tail,
/*   302 */                 "uniqueList": uniqueList,
/*   303 */                 "word": word,
/*   304 */                 "$loadgbl124": $loadgbl124,
/*   305 */                 "$call125": $call125,
/*   306 */                 "$compareres126": $compareres126,
/*   307 */                 "$loadgbl131": $loadgbl131,
/*   308 */                 "$str135": $str135,
/*   309 */                 "$lattr136": $lattr136,
/*   310 */                 "$slice137": $slice137,
/*   311 */                 "$lsubscr138": $lsubscr138,
/*   312 */                 "$loadgbl140": $loadgbl140,
/*   313 */                 "$loadgbl141": $loadgbl141,
/*   314 */                 "$loadgbl142": $loadgbl142,
/*   315 */                 "$call143": $call143,
/*   316 */                 "$call144": $call144,
/*   317 */                 "$iter146": $iter146,
/*   318 */                 "$loadgbl148": $loadgbl148,
/*   319 */                 "$loadgbl149": $loadgbl149,
/*   320 */                 "$call150": $call150,
/*   321 */                 "$binop151": $binop151,
/*   322 */                 "$iter153": $iter153,
/*   323 */                 "$call152": $call152,
/*   324 */                 "$slice155": $slice155,
/*   325 */                 "$lsubscr156": $lsubscr156,
/*   326 */                 "$binop157": $binop157,
/*   327 */                 "$loadgbl158": $loadgbl158,
/*   328 */                 "$call159": $call159,
/*   329 */                 "$slice160": $slice160,
/*   330 */                 "$lattr163": $lattr163,
/*   331 */                 "$loadgbl165": $loadgbl165,
/*   332 */                 "$loadgbl166": $loadgbl166,
/*   333 */                 "$call167": $call167
/*   334 */             };
/*   335 */             return susp;
/*   336 */         };
/*   337 */         var $blk = 0,
/*   338 */             $exc = [],
/*   339 */             $loc = {},
/*   340 */             $gbl = this,
/*   341 */             $err = undefined,
/*   342 */             $ret = undefined,
/*   343 */             $postfinally = undefined,
/*   344 */             $currLineNo = undefined,
/*   345 */             $currColNo = undefined;
/*   346 */         if ($scope122.$wakingSuspension !== undefined) {
/*   347 */             $wakeFromSuspension();
/*   348 */         } else {
/*   349 */             Sk.builtin.pyCheckArgs("scrambler", arguments, 1, 1, false, false);
/*   350 */         }
/*   351 */         while (true) {
/*   352 */             try {
/*   353 */                 switch ($blk) {
/*   354 */                 case 0:
/*   355 */                     /* --- codeobj entry --- */
/*   356 */                     if (word === undefined) {
/*   357 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   358 */                     }
/*   359 */ 
/*   360 */                     //
/*   361 */                     // line 5:
/*   362 */                     // 	if len(word) == 1:
/*   363 */                     //  ^
/*   364 */                     //
/*   365 */                     $currLineNo = 5;
/*   366 */                     $currColNo = 1;
/*   367 */ 
/*   368 */                     var $loadgbl124 = Sk.misceval.loadname('len', $gbl);
/*   369 */                     if (word === undefined) {
/*   370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   371 */                     }
/*   372 */                     $ret;
/*   373 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl124, word);
/*   374 */                     $blk = 3; /* allowing case fallthrough */
/*   375 */                 case 3:
/*   376 */                     /* --- function return or resume suspension --- */
/*   377 */                     if ($ret && $ret.$isSuspension) {
/*   378 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 5, 4);
/*   379 */                     }
/*   380 */                     var $call125 = $ret;
/*   381 */                     //
/*   382 */                     // line 5:
/*   383 */                     // 	if len(word) == 1:
/*   384 */                     //     ^
/*   385 */                     //
/*   386 */                     $currLineNo = 5;
/*   387 */                     $currColNo = 4;
/*   388 */ 
/*   389 */                     var $compareres126 = null;
/*   390 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call125, new Sk.builtin.int_(1), 'Eq', true));
/*   391 */                     $blk = 5; /* allowing case fallthrough */
/*   392 */                 case 5:
/*   393 */                     /* --- function return or resume suspension --- */
/*   394 */                     if ($ret && $ret.$isSuspension) {
/*   395 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 5, 4);
/*   396 */                     }
/*   397 */                     $compareres126 = $ret;
/*   398 */                     var $jfalse127 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   399 */                     if ($jfalse127) { /*test failed */
/*   400 */                         $blk = 4;
/*   401 */                         continue;
/*   402 */                     }
/*   403 */                     $blk = 4; /* allowing case fallthrough */
/*   404 */                 case 4:
/*   405 */                     /* --- done --- */
/*   406 */                     var $jfalse128 = ($compareres126 === false || !Sk.misceval.isTrue($compareres126));
/*   407 */                     if ($jfalse128) { /*test failed */
/*   408 */                         $blk = 2;
/*   409 */                         continue;
/*   410 */                     }
/*   411 */                     //
/*   412 */                     // line 6:
/*   413 */                     // 		nstrings = [word]
/*   414 */                     //   ^
/*   415 */                     //
/*   416 */                     $currLineNo = 6;
/*   417 */                     $currColNo = 2;
/*   418 */ 
/*   419 */                     if (word === undefined) {
/*   420 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   421 */                     }
/*   422 */                     var $elem129 = word;
/*   423 */                     var $loadlist130 = new Sk.builtins['list']([$elem129]);
/*   424 */                     nstrings = $loadlist130;
/*   425 */                     //
/*   426 */                     // line 7:
/*   427 */                     // 		return nstrings
/*   428 */                     //   ^
/*   429 */                     //
/*   430 */                     $currLineNo = 7;
/*   431 */                     $currColNo = 2;
/*   432 */ 
/*   433 */                     if (nstrings === undefined) {
/*   434 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nstrings\' referenced before assignment');
/*   435 */                     }
/*   436 */                     return nstrings;
/*   437 */                     $blk = 1; /* allowing case fallthrough */
/*   438 */                 case 1:
/*   439 */                     /* --- end of if --- */
/*   440 */                     return Sk.builtin.none.none$;
/*   441 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   442 */                 case 2:
/*   443 */                     /* --- next branch of if --- */
/*   444 */                     //
/*   445 */                     // line 9:
/*   446 */                     // 		uniqueList = list(word)
/*   447 */                     //   ^
/*   448 */                     //
/*   449 */                     $currLineNo = 9;
/*   450 */                     $currColNo = 2;
/*   451 */ 
/*   452 */                     var $loadgbl131 = Sk.misceval.loadname('list', $gbl);
/*   453 */                     if (word === undefined) {
/*   454 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   455 */                     }
/*   456 */                     $ret;
/*   457 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl131, word);
/*   458 */                     $blk = 6; /* allowing case fallthrough */
/*   459 */                 case 6:
/*   460 */                     /* --- function return or resume suspension --- */
/*   461 */                     if ($ret && $ret.$isSuspension) {
/*   462 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 9, 15);
/*   463 */                     }
/*   464 */                     var $call132 = $ret;
/*   465 */                     //
/*   466 */                     // line 9:
/*   467 */                     // 		uniqueList = list(word)
/*   468 */                     //                ^
/*   469 */                     //
/*   470 */                     $currLineNo = 9;
/*   471 */                     $currColNo = 15;
/*   472 */ 
/*   473 */                     uniqueList = $call132;
/*   474 */                     //
/*   475 */                     // line 10:
/*   476 */                     // 		finals = []
/*   477 */                     //   ^
/*   478 */                     //
/*   479 */                     $currLineNo = 10;
/*   480 */                     $currColNo = 2;
/*   481 */ 
/*   482 */                     var $loadlist133 = new Sk.builtins['list']([]);
/*   483 */                     finals = $loadlist133;
/*   484 */                     //
/*   485 */                     // line 11:
/*   486 */                     // 		char = uniqueList[0]
/*   487 */                     //   ^
/*   488 */                     //
/*   489 */                     $currLineNo = 11;
/*   490 */                     $currColNo = 2;
/*   491 */ 
/*   492 */                     if (uniqueList === undefined) {
/*   493 */                         throw new Sk.builtin.UnboundLocalError('local variable \'uniqueList\' referenced before assignment');
/*   494 */                     }
/*   495 */                     $ret = Sk.abstr.objectGetItem(uniqueList, new Sk.builtin.int_(0), true);
/*   496 */                     $blk = 7; /* allowing case fallthrough */
/*   497 */                 case 7:
/*   498 */                     /* --- function return or resume suspension --- */
/*   499 */                     if ($ret && $ret.$isSuspension) {
/*   500 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   501 */                     }
/*   502 */                     var $lsubscr134 = $ret;
/*   503 */                     char_$rw$ = $lsubscr134;
/*   504 */                     //
/*   505 */                     // line 12:
/*   506 */                     // 		tail = ''.join(uniqueList[1:])
/*   507 */                     //   ^
/*   508 */                     //
/*   509 */                     $currLineNo = 12;
/*   510 */                     $currColNo = 2;
/*   511 */ 
/*   512 */                     var $str135 = new Sk.builtins['str']('');
/*   513 */                     $ret = Sk.abstr.gattr($str135, 'join', true);
/*   514 */                     $blk = 8; /* allowing case fallthrough */
/*   515 */                 case 8:
/*   516 */                     /* --- function return or resume suspension --- */
/*   517 */                     if ($ret && $ret.$isSuspension) {
/*   518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 12, 9);
/*   519 */                     }
/*   520 */                     var $lattr136 = $ret;
/*   521 */                     if (uniqueList === undefined) {
/*   522 */                         throw new Sk.builtin.UnboundLocalError('local variable \'uniqueList\' referenced before assignment');
/*   523 */                     }
/*   524 */                     var $slice137 = new Sk.builtins['slice'](new Sk.builtin.int_(1), new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   525 */                     $ret = Sk.abstr.objectGetItem(uniqueList, $slice137, true);
/*   526 */                     $blk = 9; /* allowing case fallthrough */
/*   527 */                 case 9:
/*   528 */                     /* --- function return or resume suspension --- */
/*   529 */                     if ($ret && $ret.$isSuspension) {
/*   530 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   531 */                     }
/*   532 */                     var $lsubscr138 = $ret;
/*   533 */                     $ret;
/*   534 */                     $ret = Sk.misceval.callsimOrSuspend($lattr136, $lsubscr138);
/*   535 */                     $blk = 10; /* allowing case fallthrough */
/*   536 */                 case 10:
/*   537 */                     /* --- function return or resume suspension --- */
/*   538 */                     if ($ret && $ret.$isSuspension) {
/*   539 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 12, 9);
/*   540 */                     }
/*   541 */                     var $call139 = $ret;
/*   542 */                     //
/*   543 */                     // line 12:
/*   544 */                     // 		tail = ''.join(uniqueList[1:])
/*   545 */                     //          ^
/*   546 */                     //
/*   547 */                     $currLineNo = 12;
/*   548 */                     $currColNo = 9;
/*   549 */ 
/*   550 */                     tail = $call139;
/*   551 */                     //
/*   552 */                     // line 13:
/*   553 */                     // 		nstrings = list(set(scrambler(tail)))
/*   554 */                     //   ^
/*   555 */                     //
/*   556 */                     $currLineNo = 13;
/*   557 */                     $currColNo = 2;
/*   558 */ 
/*   559 */                     var $loadgbl140 = Sk.misceval.loadname('list', $gbl);
/*   560 */                     var $loadgbl141 = Sk.misceval.loadname('set', $gbl);
/*   561 */                     var $loadgbl142 = Sk.misceval.loadname('scrambler', $gbl);
/*   562 */                     if (tail === undefined) {
/*   563 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tail\' referenced before assignment');
/*   564 */                     }
/*   565 */                     $ret;
/*   566 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl142, tail);
/*   567 */                     $blk = 11; /* allowing case fallthrough */
/*   568 */                 case 11:
/*   569 */                     /* --- function return or resume suspension --- */
/*   570 */                     if ($ret && $ret.$isSuspension) {
/*   571 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 22);
/*   572 */                     }
/*   573 */                     var $call143 = $ret;
/*   574 */                     //
/*   575 */                     // line 13:
/*   576 */                     // 		nstrings = list(set(scrambler(tail)))
/*   577 */                     //                       ^
/*   578 */                     //
/*   579 */                     $currLineNo = 13;
/*   580 */                     $currColNo = 22;
/*   581 */ 
/*   582 */                     $ret;
/*   583 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl141, $call143);
/*   584 */                     $blk = 12; /* allowing case fallthrough */
/*   585 */                 case 12:
/*   586 */                     /* --- function return or resume suspension --- */
/*   587 */                     if ($ret && $ret.$isSuspension) {
/*   588 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 18);
/*   589 */                     }
/*   590 */                     var $call144 = $ret;
/*   591 */                     //
/*   592 */                     // line 13:
/*   593 */                     // 		nstrings = list(set(scrambler(tail)))
/*   594 */                     //                   ^
/*   595 */                     //
/*   596 */                     $currLineNo = 13;
/*   597 */                     $currColNo = 18;
/*   598 */ 
/*   599 */                     $ret;
/*   600 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl140, $call144);
/*   601 */                     $blk = 13; /* allowing case fallthrough */
/*   602 */                 case 13:
/*   603 */                     /* --- function return or resume suspension --- */
/*   604 */                     if ($ret && $ret.$isSuspension) {
/*   605 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 13);
/*   606 */                     }
/*   607 */                     var $call145 = $ret;
/*   608 */                     //
/*   609 */                     // line 13:
/*   610 */                     // 		nstrings = list(set(scrambler(tail)))
/*   611 */                     //              ^
/*   612 */                     //
/*   613 */                     $currLineNo = 13;
/*   614 */                     $currColNo = 13;
/*   615 */ 
/*   616 */                     nstrings = $call145;
/*   617 */                     //
/*   618 */                     // line 14:
/*   619 */                     // 		for n in nstrings:
/*   620 */                     //   ^
/*   621 */                     //
/*   622 */                     $currLineNo = 14;
/*   623 */                     $currColNo = 2;
/*   624 */ 
/*   625 */                     if (nstrings === undefined) {
/*   626 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nstrings\' referenced before assignment');
/*   627 */                     }
/*   628 */                     var $iter146 = Sk.abstr.iter(nstrings);
/*   629 */                     $blk = 14; /* allowing case fallthrough */
/*   630 */                 case 14:
/*   631 */                     /* --- for start --- */
/*   632 */                     $ret = Sk.abstr.iternext($iter146, true);
/*   633 */                     $blk = 17; /* allowing case fallthrough */
/*   634 */                 case 17:
/*   635 */                     /* --- function return or resume suspension --- */
/*   636 */                     if ($ret && $ret.$isSuspension) {
/*   637 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 14, 2);
/*   638 */                     }
/*   639 */                     var $next147 = $ret;
/*   640 */                     if ($next147 === undefined) {
/*   641 */                         $blk = 15;
/*   642 */                         continue;
/*   643 */                     }
/*   644 */                     n = $next147;
/*   645 */                     //
/*   646 */                     // line 15:
/*   647 */                     // 			for i in range(0,len(n)+1):
/*   648 */                     //    ^
/*   649 */                     //
/*   650 */                     $currLineNo = 15;
/*   651 */                     $currColNo = 3;
/*   652 */ 
/*   653 */                     var $loadgbl148 = Sk.misceval.loadname('range', $gbl);
/*   654 */                     var $loadgbl149 = Sk.misceval.loadname('len', $gbl);
/*   655 */                     if (n === undefined) {
/*   656 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   657 */                     }
/*   658 */                     $ret;
/*   659 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl149, n);
/*   660 */                     $blk = 21; /* allowing case fallthrough */
/*   661 */                 case 21:
/*   662 */                     /* --- function return or resume suspension --- */
/*   663 */                     if ($ret && $ret.$isSuspension) {
/*   664 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 20);
/*   665 */                     }
/*   666 */                     var $call150 = $ret;
/*   667 */                     //
/*   668 */                     // line 15:
/*   669 */                     // 			for i in range(0,len(n)+1):
/*   670 */                     //                     ^
/*   671 */                     //
/*   672 */                     $currLineNo = 15;
/*   673 */                     $currColNo = 20;
/*   674 */ 
/*   675 */                     var $binop151 = Sk.abstr.numberBinOp($call150, new Sk.builtin.int_(1), 'Add');
/*   676 */                     $ret;
/*   677 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, new Sk.builtin.int_(0), $binop151);
/*   678 */                     $blk = 22; /* allowing case fallthrough */
/*   679 */                 case 22:
/*   680 */                     /* --- function return or resume suspension --- */
/*   681 */                     if ($ret && $ret.$isSuspension) {
/*   682 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 12);
/*   683 */                     }
/*   684 */                     var $call152 = $ret;
/*   685 */                     //
/*   686 */                     // line 15:
/*   687 */                     // 			for i in range(0,len(n)+1):
/*   688 */                     //             ^
/*   689 */                     //
/*   690 */                     $currLineNo = 15;
/*   691 */                     $currColNo = 12;
/*   692 */ 
/*   693 */                     var $iter153 = Sk.abstr.iter($call152);
/*   694 */                     $blk = 18; /* allowing case fallthrough */
/*   695 */                 case 18:
/*   696 */                     /* --- for start --- */
/*   697 */                     $ret = Sk.abstr.iternext($iter153, true);
/*   698 */                     $blk = 23; /* allowing case fallthrough */
/*   699 */                 case 23:
/*   700 */                     /* --- function return or resume suspension --- */
/*   701 */                     if ($ret && $ret.$isSuspension) {
/*   702 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 3);
/*   703 */                     }
/*   704 */                     var $next154 = $ret;
/*   705 */                     if ($next154 === undefined) {
/*   706 */                         $blk = 19;
/*   707 */                         continue;
/*   708 */                     }
/*   709 */                     i = $next154;
/*   710 */                     //
/*   711 */                     // line 16:
/*   712 */                     // 				newfinal = n[0:i]+char+n[i:len(n)]
/*   713 */                     //     ^
/*   714 */                     //
/*   715 */                     $currLineNo = 16;
/*   716 */                     $currColNo = 4;
/*   717 */ 
/*   718 */                     if (n === undefined) {
/*   719 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   720 */                     }
/*   721 */                     if (i === undefined) {
/*   722 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   723 */                     }
/*   724 */                     var $slice155 = new Sk.builtins['slice'](new Sk.builtin.int_(0), i, Sk.builtin.none.none$);
/*   725 */                     $ret = Sk.abstr.objectGetItem(n, $slice155, true);
/*   726 */                     $blk = 24; /* allowing case fallthrough */
/*   727 */                 case 24:
/*   728 */                     /* --- function return or resume suspension --- */
/*   729 */                     if ($ret && $ret.$isSuspension) {
/*   730 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   731 */                     }
/*   732 */                     var $lsubscr156 = $ret;
/*   733 */                     if (char_$rw$ === undefined) {
/*   734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'char_$rw$\' referenced before assignment');
/*   735 */                     }
/*   736 */                     var $binop157 = Sk.abstr.numberBinOp($lsubscr156, char_$rw$, 'Add');
/*   737 */                     if (n === undefined) {
/*   738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   739 */                     }
/*   740 */                     if (i === undefined) {
/*   741 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   742 */                     }
/*   743 */                     var $loadgbl158 = Sk.misceval.loadname('len', $gbl);
/*   744 */                     if (n === undefined) {
/*   745 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   746 */                     }
/*   747 */                     $ret;
/*   748 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl158, n);
/*   749 */                     $blk = 25; /* allowing case fallthrough */
/*   750 */                 case 25:
/*   751 */                     /* --- function return or resume suspension --- */
/*   752 */                     if ($ret && $ret.$isSuspension) {
/*   753 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 16, 31);
/*   754 */                     }
/*   755 */                     var $call159 = $ret;
/*   756 */                     //
/*   757 */                     // line 16:
/*   758 */                     // 				newfinal = n[0:i]+char+n[i:len(n)]
/*   759 */                     //                                ^
/*   760 */                     //
/*   761 */                     $currLineNo = 16;
/*   762 */                     $currColNo = 31;
/*   763 */ 
/*   764 */                     var $slice160 = new Sk.builtins['slice'](i, $call159, Sk.builtin.none.none$);
/*   765 */                     $ret = Sk.abstr.objectGetItem(n, $slice160, true);
/*   766 */                     $blk = 26; /* allowing case fallthrough */
/*   767 */                 case 26:
/*   768 */                     /* --- function return or resume suspension --- */
/*   769 */                     if ($ret && $ret.$isSuspension) {
/*   770 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   771 */                     }
/*   772 */                     var $lsubscr161 = $ret;
/*   773 */                     var $binop162 = Sk.abstr.numberBinOp($binop157, $lsubscr161, 'Add');
/*   774 */                     newfinal = $binop162;
/*   775 */                     //
/*   776 */                     // line 17:
/*   777 */                     // 				finals.append(newfinal)
/*   778 */                     //     ^
/*   779 */                     //
/*   780 */                     $currLineNo = 17;
/*   781 */                     $currColNo = 4;
/*   782 */ 
/*   783 */                     if (finals === undefined) {
/*   784 */                         throw new Sk.builtin.UnboundLocalError('local variable \'finals\' referenced before assignment');
/*   785 */                     }
/*   786 */                     $ret = Sk.abstr.gattr(finals, 'append', true);
/*   787 */                     $blk = 27; /* allowing case fallthrough */
/*   788 */                 case 27:
/*   789 */                     /* --- function return or resume suspension --- */
/*   790 */                     if ($ret && $ret.$isSuspension) {
/*   791 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 17, 4);
/*   792 */                     }
/*   793 */                     var $lattr163 = $ret;
/*   794 */                     if (newfinal === undefined) {
/*   795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'newfinal\' referenced before assignment');
/*   796 */                     }
/*   797 */                     $ret;
/*   798 */                     $ret = Sk.misceval.callsimOrSuspend($lattr163, newfinal);
/*   799 */                     $blk = 28; /* allowing case fallthrough */
/*   800 */                 case 28:
/*   801 */                     /* --- function return or resume suspension --- */
/*   802 */                     if ($ret && $ret.$isSuspension) {
/*   803 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 17, 4);
/*   804 */                     }
/*   805 */                     var $call164 = $ret;
/*   806 */                     //
/*   807 */                     // line 17:
/*   808 */                     // 				finals.append(newfinal)
/*   809 */                     //     ^
/*   810 */                     //
/*   811 */                     $currLineNo = 17;
/*   812 */                     $currColNo = 4;
/*   813 */ 
/*   814 */                     $blk = 18; /* jump */
/*   815 */                     continue;
/*   816 */                 case 15:
/*   817 */                     /* --- for cleanup --- */
/*   818 */                     $blk = 16; /* allowing case fallthrough */
/*   819 */                 case 16:
/*   820 */                     /* --- for end --- */
/*   821 */                     //
/*   822 */                     // line 18:
/*   823 */                     // 		return list(set(finals))
/*   824 */                     //   ^
/*   825 */                     //
/*   826 */                     $currLineNo = 18;
/*   827 */                     $currColNo = 2;
/*   828 */ 
/*   829 */                     var $loadgbl165 = Sk.misceval.loadname('list', $gbl);
/*   830 */                     var $loadgbl166 = Sk.misceval.loadname('set', $gbl);
/*   831 */                     if (finals === undefined) {
/*   832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'finals\' referenced before assignment');
/*   833 */                     }
/*   834 */                     $ret;
/*   835 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl166, finals);
/*   836 */                     $blk = 29; /* allowing case fallthrough */
/*   837 */                 case 29:
/*   838 */                     /* --- function return or resume suspension --- */
/*   839 */                     if ($ret && $ret.$isSuspension) {
/*   840 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 18, 14);
/*   841 */                     }
/*   842 */                     var $call167 = $ret;
/*   843 */                     //
/*   844 */                     // line 18:
/*   845 */                     // 		return list(set(finals))
/*   846 */                     //               ^
/*   847 */                     //
/*   848 */                     $currLineNo = 18;
/*   849 */                     $currColNo = 14;
/*   850 */ 
/*   851 */                     $ret;
/*   852 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl165, $call167);
/*   853 */                     $blk = 30; /* allowing case fallthrough */
/*   854 */                 case 30:
/*   855 */                     /* --- function return or resume suspension --- */
/*   856 */                     if ($ret && $ret.$isSuspension) {
/*   857 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 18, 9);
/*   858 */                     }
/*   859 */                     var $call168 = $ret;
/*   860 */                     //
/*   861 */                     // line 18:
/*   862 */                     // 		return list(set(finals))
/*   863 */                     //          ^
/*   864 */                     //
/*   865 */                     $currLineNo = 18;
/*   866 */                     $currColNo = 9;
/*   867 */ 
/*   868 */                     return $call168;
/*   869 */                     $blk = 1; /* jump */
/*   870 */                     continue;
/*   871 */                 case 19:
/*   872 */                     /* --- for cleanup --- */
/*   873 */                     $blk = 20; /* allowing case fallthrough */
/*   874 */                 case 20:
/*   875 */                     /* --- for end --- */
/*   876 */                     $blk = 14; /* jump */
/*   877 */                     continue;
/*   878 */                 }
/*   879 */             } catch (err) {
/*   880 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   881 */                     err = new Sk.builtin.ExternalError(err);
/*   882 */                 }
/*   883 */                 err.traceback.push({
/*   884 */                     lineno: $currLineNo,
/*   885 */                     colno: $currColNo,
/*   886 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   887 */                 });
/*   888 */                 if ($exc.length > 0) {
/*   889 */                     $err = err;
/*   890 */                     $blk = $exc.pop();
/*   891 */                     continue;
/*   892 */                 } else {
/*   893 */                     throw err;
/*   894 */                 }
/*   895 */             }
/*   896 */         }
/*   897 */     });
/*   898 */     return $scope120;
/*   899 */ }();
