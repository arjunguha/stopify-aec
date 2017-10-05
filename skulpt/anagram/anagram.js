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
/*    76 */         if (typeof Sk.execStart === 'undefined') {
/*    77 */             Sk.execStart = Date.now()
/*    78 */         }
/*    79 */         if (typeof Sk.lastYield === 'undefined') {
/*    80 */             Sk.lastYield = Date.now()
/*    81 */         }
/*    82 */         if ($scope120.$wakingSuspension !== undefined) {
/*    83 */             $wakeFromSuspension();
/*    84 */         }
/*    85 */         if (Sk.retainGlobals) {
/*    86 */             if (Sk.globals) {
/*    87 */                 $gbl = Sk.globals;
/*    88 */                 Sk.globals = $gbl;
/*    89 */                 $loc = $gbl;
/*    90 */             } else {
/*    91 */                 Sk.globals = $gbl;
/*    92 */             }
/*    93 */         } else {
/*    94 */             Sk.globals = $gbl;
/*    95 */         }
/*    96 */         while (true) {
/*    97 */             try {
/*    98 */                 var $dateNow = Date.now();
/*    99 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   100 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   101 */                 }
/*   102 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   103 */                     var $susp = $saveSuspension({
/*   104 */                         data: {
/*   105 */                             type: 'Sk.yield'
/*   106 */                         },
/*   107 */                         resume: function() {}
/*   108 */                     }, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   109 */                     $susp.$blk = $blk;
/*   110 */                     $susp.optional = true;
/*   111 */                     return $susp;
/*   112 */                 }
/*   113 */                 switch ($blk) {
/*   114 */                 case 0:
/*   115 */                     /* --- module entry --- */
/*   116 */                     //
/*   117 */                     // line 2:
/*   118 */                     // import sys
/*   119 */                     // ^
/*   120 */                     //
/*   121 */                     $currLineNo = 2;
/*   122 */                     $currColNo = 0;
/*   123 */ 
/*   124 */                     $ret = Sk.builtin.__import__('sys', $gbl, $loc, []);
/*   125 */                     $blk = 1; /* allowing case fallthrough */
/*   126 */                 case 1:
/*   127 */                     /* --- function return or resume suspension --- */
/*   128 */                     if ($ret && $ret.$isSuspension) {
/*   129 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 2, 0);
/*   130 */                     }
/*   131 */                     var $module121 = $ret;
/*   132 */                     $loc.sys = $module121;
/*   133 */                     //
/*   134 */                     // line 4:
/*   135 */                     // def scrambler(word):
/*   136 */                     // ^
/*   137 */                     //
/*   138 */                     $currLineNo = 4;
/*   139 */                     $currColNo = 0;
/*   140 */ 
/*   141 */                     $scope122.co_name = new Sk.builtins['str']('scrambler');
/*   142 */                     $scope122.co_varnames = ['word'];
/*   143 */                     var $funcobj169 = new Sk.builtins['function']($scope122, $gbl);
/*   144 */                     $loc.scrambler = $funcobj169;
/*   145 */                     //
/*   146 */                     // line 20:
/*   147 */                     // scrambles = scrambler("berrycakes")
/*   148 */                     // ^
/*   149 */                     //
/*   150 */                     $currLineNo = 20;
/*   151 */                     $currColNo = 0;
/*   152 */ 
/*   153 */                     var $loadname170 = $loc.scrambler !== undefined ? $loc.scrambler : Sk.misceval.loadname('scrambler', $gbl);;
/*   154 */                     var $str171 = new Sk.builtins['str']('berrycakes');
/*   155 */                     $ret;
/*   156 */                     $ret = Sk.misceval.callsimOrSuspend($loadname170, $str171);
/*   157 */                     $blk = 2; /* allowing case fallthrough */
/*   158 */                 case 2:
/*   159 */                     /* --- function return or resume suspension --- */
/*   160 */                     if ($ret && $ret.$isSuspension) {
/*   161 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 20, 12);
/*   162 */                     }
/*   163 */                     var $call172 = $ret;
/*   164 */                     //
/*   165 */                     // line 20:
/*   166 */                     // scrambles = scrambler("berrycakes")
/*   167 */                     //             ^
/*   168 */                     //
/*   169 */                     $currLineNo = 20;
/*   170 */                     $currColNo = 12;
/*   171 */ 
/*   172 */                     $loc.scrambles = $call172;
/*   173 */                     //
/*   174 */                     // line 21:
/*   175 */                     // print len(scrambles)
/*   176 */                     // ^
/*   177 */                     //
/*   178 */                     $currLineNo = 21;
/*   179 */                     $currColNo = 0;
/*   180 */ 
/*   181 */                     var $loadname173 = $loc.len !== undefined ? $loc.len : Sk.misceval.loadname('len', $gbl);;
/*   182 */                     var $loadname174 = $loc.scrambles !== undefined ? $loc.scrambles : Sk.misceval.loadname('scrambles', $gbl);;
/*   183 */                     $ret;
/*   184 */                     $ret = Sk.misceval.callsimOrSuspend($loadname173, $loadname174);
/*   185 */                     $blk = 3; /* allowing case fallthrough */
/*   186 */                 case 3:
/*   187 */                     /* --- function return or resume suspension --- */
/*   188 */                     if ($ret && $ret.$isSuspension) {
/*   189 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 21, 6);
/*   190 */                     }
/*   191 */                     var $call175 = $ret;
/*   192 */                     //
/*   193 */                     // line 21:
/*   194 */                     // print len(scrambles)
/*   195 */                     //       ^
/*   196 */                     //
/*   197 */                     $currLineNo = 21;
/*   198 */                     $currColNo = 6;
/*   199 */ 
/*   200 */                     Sk.misceval.print_(new Sk.builtins['str']($call175).v);
/*   201 */                     Sk.misceval.print_("\n");
/*   202 */                     return $loc;
/*   203 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   204 */                 }
/*   205 */             } catch (err) {
/*   206 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   207 */                     err = new Sk.builtin.ExternalError(err);
/*   208 */                 }
/*   209 */                 err.traceback.push({
/*   210 */                     lineno: $currLineNo,
/*   211 */                     colno: $currColNo,
/*   212 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   213 */                 });
/*   214 */                 if ($exc.length > 0) {
/*   215 */                     $err = err;
/*   216 */                     $blk = $exc.pop();
/*   217 */                     continue;
/*   218 */                 } else {
/*   219 */                     throw err;
/*   220 */                 }
/*   221 */             }
/*   222 */         }
/*   223 */     });
/*   224 */     var $scope122 = (function $scrambler123$(word) {
/*   225 */         var char_$rw$, finals, i, n, newfinal, nstrings, tail, uniqueList; /* locals */
/*   226 */         var char_$rw$, char_$rw$, finals, finals, finals, i, i, i, n, n, n, n, n, newfinal, newfinal, nstrings, nstrings, nstrings, nstrings, tail, tail, uniqueList, uniqueList, uniqueList, word, word, word, word, $loadgbl124, $loadgbl124, $call125, $compareres126, $loadgbl131, $str135, $str135, $lattr136, $slice137, $str135, $lattr136, $slice137, $lsubscr138, $loadgbl140, $loadgbl141, $loadgbl142, $loadgbl140, $loadgbl141, $loadgbl142, $call143, $loadgbl140, $loadgbl141, $loadgbl142, $call143, $call144, $iter146, $iter146, $loadgbl148, $loadgbl149, $loadgbl148, $loadgbl149, $call150, $binop151, $iter153, $loadgbl148, $loadgbl149, $call150, $binop151, $call152, $iter153, $slice155, $slice155, $lsubscr156, $binop157, $loadgbl158, $slice155, $lsubscr156, $binop157, $loadgbl158, $call159, $slice160, $lattr163, $loadgbl165, $loadgbl166, $loadgbl165, $loadgbl166, $call167;
/*   227 */         var $wakeFromSuspension = function() {
/*   228 */             var susp = $scope122.$wakingSuspension;
/*   229 */             delete $scope122.$wakingSuspension;
/*   230 */             $blk = susp.$blk;
/*   231 */             $loc = susp.$loc;
/*   232 */             $gbl = susp.$gbl;
/*   233 */             $exc = susp.$exc;
/*   234 */             $err = susp.$err;
/*   235 */             $postfinally = susp.$postfinally;
/*   236 */             $currLineNo = susp.$lineno;
/*   237 */             $currColNo = susp.$colno;
/*   238 */             Sk.lastYield = Date.now();
/*   239 */             char_$rw$ = susp.$tmps.char_$rw$;
/*   240 */             finals = susp.$tmps.finals;
/*   241 */             i = susp.$tmps.i;
/*   242 */             n = susp.$tmps.n;
/*   243 */             newfinal = susp.$tmps.newfinal;
/*   244 */             nstrings = susp.$tmps.nstrings;
/*   245 */             tail = susp.$tmps.tail;
/*   246 */             uniqueList = susp.$tmps.uniqueList;
/*   247 */             word = susp.$tmps.word;
/*   248 */             $loadgbl124 = susp.$tmps.$loadgbl124;
/*   249 */             $call125 = susp.$tmps.$call125;
/*   250 */             $compareres126 = susp.$tmps.$compareres126;
/*   251 */             $loadgbl131 = susp.$tmps.$loadgbl131;
/*   252 */             $str135 = susp.$tmps.$str135;
/*   253 */             $lattr136 = susp.$tmps.$lattr136;
/*   254 */             $slice137 = susp.$tmps.$slice137;
/*   255 */             $lsubscr138 = susp.$tmps.$lsubscr138;
/*   256 */             $loadgbl140 = susp.$tmps.$loadgbl140;
/*   257 */             $loadgbl141 = susp.$tmps.$loadgbl141;
/*   258 */             $loadgbl142 = susp.$tmps.$loadgbl142;
/*   259 */             $call143 = susp.$tmps.$call143;
/*   260 */             $call144 = susp.$tmps.$call144;
/*   261 */             $iter146 = susp.$tmps.$iter146;
/*   262 */             $loadgbl148 = susp.$tmps.$loadgbl148;
/*   263 */             $loadgbl149 = susp.$tmps.$loadgbl149;
/*   264 */             $call150 = susp.$tmps.$call150;
/*   265 */             $binop151 = susp.$tmps.$binop151;
/*   266 */             $iter153 = susp.$tmps.$iter153;
/*   267 */             $call152 = susp.$tmps.$call152;
/*   268 */             $slice155 = susp.$tmps.$slice155;
/*   269 */             $lsubscr156 = susp.$tmps.$lsubscr156;
/*   270 */             $binop157 = susp.$tmps.$binop157;
/*   271 */             $loadgbl158 = susp.$tmps.$loadgbl158;
/*   272 */             $call159 = susp.$tmps.$call159;
/*   273 */             $slice160 = susp.$tmps.$slice160;
/*   274 */             $lattr163 = susp.$tmps.$lattr163;
/*   275 */             $loadgbl165 = susp.$tmps.$loadgbl165;
/*   276 */             $loadgbl166 = susp.$tmps.$loadgbl166;
/*   277 */             $call167 = susp.$tmps.$call167;
/*   278 */             try {
/*   279 */                 $ret = susp.child.resume();
/*   280 */             } catch (err) {
/*   281 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   282 */                     err = new Sk.builtin.ExternalError(err);
/*   283 */                 }
/*   284 */                 err.traceback.push({
/*   285 */                     lineno: $currLineNo,
/*   286 */                     colno: $currColNo,
/*   287 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   288 */                 });
/*   289 */                 if ($exc.length > 0) {
/*   290 */                     $err = err;
/*   291 */                     $blk = $exc.pop();
/*   292 */                 } else {
/*   293 */                     throw err;
/*   294 */                 }
/*   295 */             }
/*   296 */         };
/*   297 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   298 */             var susp = new Sk.misceval.Suspension();
/*   299 */             susp.child = $child;
/*   300 */             susp.resume = function() {
/*   301 */                 $scope122.$wakingSuspension = susp;
/*   302 */                 return $scope122();
/*   303 */             };
/*   304 */             susp.data = susp.child.data;
/*   305 */             susp.$blk = $blk;
/*   306 */             susp.$loc = $loc;
/*   307 */             susp.$gbl = $gbl;
/*   308 */             susp.$exc = $exc;
/*   309 */             susp.$err = $err;
/*   310 */             susp.$postfinally = $postfinally;
/*   311 */             susp.$filename = $filename;
/*   312 */             susp.$lineno = $lineno;
/*   313 */             susp.$colno = $colno;
/*   314 */             susp.optional = susp.child.optional;
/*   315 */             susp.$tmps = {
/*   316 */                 "char_$rw$": char_$rw$,
/*   317 */                 "finals": finals,
/*   318 */                 "i": i,
/*   319 */                 "n": n,
/*   320 */                 "newfinal": newfinal,
/*   321 */                 "nstrings": nstrings,
/*   322 */                 "tail": tail,
/*   323 */                 "uniqueList": uniqueList,
/*   324 */                 "word": word,
/*   325 */                 "$loadgbl124": $loadgbl124,
/*   326 */                 "$call125": $call125,
/*   327 */                 "$compareres126": $compareres126,
/*   328 */                 "$loadgbl131": $loadgbl131,
/*   329 */                 "$str135": $str135,
/*   330 */                 "$lattr136": $lattr136,
/*   331 */                 "$slice137": $slice137,
/*   332 */                 "$lsubscr138": $lsubscr138,
/*   333 */                 "$loadgbl140": $loadgbl140,
/*   334 */                 "$loadgbl141": $loadgbl141,
/*   335 */                 "$loadgbl142": $loadgbl142,
/*   336 */                 "$call143": $call143,
/*   337 */                 "$call144": $call144,
/*   338 */                 "$iter146": $iter146,
/*   339 */                 "$loadgbl148": $loadgbl148,
/*   340 */                 "$loadgbl149": $loadgbl149,
/*   341 */                 "$call150": $call150,
/*   342 */                 "$binop151": $binop151,
/*   343 */                 "$iter153": $iter153,
/*   344 */                 "$call152": $call152,
/*   345 */                 "$slice155": $slice155,
/*   346 */                 "$lsubscr156": $lsubscr156,
/*   347 */                 "$binop157": $binop157,
/*   348 */                 "$loadgbl158": $loadgbl158,
/*   349 */                 "$call159": $call159,
/*   350 */                 "$slice160": $slice160,
/*   351 */                 "$lattr163": $lattr163,
/*   352 */                 "$loadgbl165": $loadgbl165,
/*   353 */                 "$loadgbl166": $loadgbl166,
/*   354 */                 "$call167": $call167
/*   355 */             };
/*   356 */             return susp;
/*   357 */         };
/*   358 */         var $blk = 0,
/*   359 */             $exc = [],
/*   360 */             $loc = {},
/*   361 */             $gbl = this,
/*   362 */             $err = undefined,
/*   363 */             $ret = undefined,
/*   364 */             $postfinally = undefined,
/*   365 */             $currLineNo = undefined,
/*   366 */             $currColNo = undefined;
/*   367 */         if (typeof Sk.execStart === 'undefined') {
/*   368 */             Sk.execStart = Date.now()
/*   369 */         }
/*   370 */         if (typeof Sk.lastYield === 'undefined') {
/*   371 */             Sk.lastYield = Date.now()
/*   372 */         }
/*   373 */         if ($scope122.$wakingSuspension !== undefined) {
/*   374 */             $wakeFromSuspension();
/*   375 */         } else {
/*   376 */             Sk.builtin.pyCheckArgs("scrambler", arguments, 1, 1, false, false);
/*   377 */         }
/*   378 */         while (true) {
/*   379 */             try {
/*   380 */                 var $dateNow = Date.now();
/*   381 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   382 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   383 */                 }
/*   384 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   385 */                     var $susp = $saveSuspension({
/*   386 */                         data: {
/*   387 */                             type: 'Sk.yield'
/*   388 */                         },
/*   389 */                         resume: function() {}
/*   390 */                     }, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   391 */                     $susp.$blk = $blk;
/*   392 */                     $susp.optional = true;
/*   393 */                     return $susp;
/*   394 */                 }
/*   395 */                 switch ($blk) {
/*   396 */                 case 0:
/*   397 */                     /* --- codeobj entry --- */
/*   398 */                     if (word === undefined) {
/*   399 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   400 */                     }
/*   401 */ 
/*   402 */                     //
/*   403 */                     // line 5:
/*   404 */                     // 	if len(word) == 1:
/*   405 */                     //  ^
/*   406 */                     //
/*   407 */                     $currLineNo = 5;
/*   408 */                     $currColNo = 1;
/*   409 */ 
/*   410 */                     var $loadgbl124 = Sk.misceval.loadname('len', $gbl);
/*   411 */                     if (word === undefined) {
/*   412 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   413 */                     }
/*   414 */                     $ret;
/*   415 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl124, word);
/*   416 */                     $blk = 3; /* allowing case fallthrough */
/*   417 */                 case 3:
/*   418 */                     /* --- function return or resume suspension --- */
/*   419 */                     if ($ret && $ret.$isSuspension) {
/*   420 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 5, 4);
/*   421 */                     }
/*   422 */                     var $call125 = $ret;
/*   423 */                     //
/*   424 */                     // line 5:
/*   425 */                     // 	if len(word) == 1:
/*   426 */                     //     ^
/*   427 */                     //
/*   428 */                     $currLineNo = 5;
/*   429 */                     $currColNo = 4;
/*   430 */ 
/*   431 */                     var $compareres126 = null;
/*   432 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call125, new Sk.builtin.int_(1), 'Eq', true));
/*   433 */                     $blk = 5; /* allowing case fallthrough */
/*   434 */                 case 5:
/*   435 */                     /* --- function return or resume suspension --- */
/*   436 */                     if ($ret && $ret.$isSuspension) {
/*   437 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 5, 4);
/*   438 */                     }
/*   439 */                     $compareres126 = $ret;
/*   440 */                     var $jfalse127 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   441 */                     if ($jfalse127) { /*test failed */
/*   442 */                         $blk = 4;
/*   443 */                         continue;
/*   444 */                     }
/*   445 */                     $blk = 4; /* allowing case fallthrough */
/*   446 */                 case 4:
/*   447 */                     /* --- done --- */
/*   448 */                     var $jfalse128 = ($compareres126 === false || !Sk.misceval.isTrue($compareres126));
/*   449 */                     if ($jfalse128) { /*test failed */
/*   450 */                         $blk = 2;
/*   451 */                         continue;
/*   452 */                     }
/*   453 */                     //
/*   454 */                     // line 6:
/*   455 */                     // 		nstrings = [word]
/*   456 */                     //   ^
/*   457 */                     //
/*   458 */                     $currLineNo = 6;
/*   459 */                     $currColNo = 2;
/*   460 */ 
/*   461 */                     if (word === undefined) {
/*   462 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   463 */                     }
/*   464 */                     var $elem129 = word;
/*   465 */                     var $loadlist130 = new Sk.builtins['list']([$elem129]);
/*   466 */                     nstrings = $loadlist130;
/*   467 */                     //
/*   468 */                     // line 7:
/*   469 */                     // 		return nstrings
/*   470 */                     //   ^
/*   471 */                     //
/*   472 */                     $currLineNo = 7;
/*   473 */                     $currColNo = 2;
/*   474 */ 
/*   475 */                     if (nstrings === undefined) {
/*   476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nstrings\' referenced before assignment');
/*   477 */                     }
/*   478 */                     return nstrings;
/*   479 */                     $blk = 1; /* allowing case fallthrough */
/*   480 */                 case 1:
/*   481 */                     /* --- end of if --- */
/*   482 */                     return Sk.builtin.none.none$;
/*   483 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   484 */                 case 2:
/*   485 */                     /* --- next branch of if --- */
/*   486 */                     //
/*   487 */                     // line 9:
/*   488 */                     // 		uniqueList = list(word)
/*   489 */                     //   ^
/*   490 */                     //
/*   491 */                     $currLineNo = 9;
/*   492 */                     $currColNo = 2;
/*   493 */ 
/*   494 */                     var $loadgbl131 = Sk.misceval.loadname('list', $gbl);
/*   495 */                     if (word === undefined) {
/*   496 */                         throw new Sk.builtin.UnboundLocalError('local variable \'word\' referenced before assignment');
/*   497 */                     }
/*   498 */                     $ret;
/*   499 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl131, word);
/*   500 */                     $blk = 6; /* allowing case fallthrough */
/*   501 */                 case 6:
/*   502 */                     /* --- function return or resume suspension --- */
/*   503 */                     if ($ret && $ret.$isSuspension) {
/*   504 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 9, 15);
/*   505 */                     }
/*   506 */                     var $call132 = $ret;
/*   507 */                     //
/*   508 */                     // line 9:
/*   509 */                     // 		uniqueList = list(word)
/*   510 */                     //                ^
/*   511 */                     //
/*   512 */                     $currLineNo = 9;
/*   513 */                     $currColNo = 15;
/*   514 */ 
/*   515 */                     uniqueList = $call132;
/*   516 */                     //
/*   517 */                     // line 10:
/*   518 */                     // 		finals = []
/*   519 */                     //   ^
/*   520 */                     //
/*   521 */                     $currLineNo = 10;
/*   522 */                     $currColNo = 2;
/*   523 */ 
/*   524 */                     var $loadlist133 = new Sk.builtins['list']([]);
/*   525 */                     finals = $loadlist133;
/*   526 */                     //
/*   527 */                     // line 11:
/*   528 */                     // 		char = uniqueList[0]
/*   529 */                     //   ^
/*   530 */                     //
/*   531 */                     $currLineNo = 11;
/*   532 */                     $currColNo = 2;
/*   533 */ 
/*   534 */                     if (uniqueList === undefined) {
/*   535 */                         throw new Sk.builtin.UnboundLocalError('local variable \'uniqueList\' referenced before assignment');
/*   536 */                     }
/*   537 */                     $ret = Sk.abstr.objectGetItem(uniqueList, new Sk.builtin.int_(0), true);
/*   538 */                     $blk = 7; /* allowing case fallthrough */
/*   539 */                 case 7:
/*   540 */                     /* --- function return or resume suspension --- */
/*   541 */                     if ($ret && $ret.$isSuspension) {
/*   542 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   543 */                     }
/*   544 */                     var $lsubscr134 = $ret;
/*   545 */                     char_$rw$ = $lsubscr134;
/*   546 */                     //
/*   547 */                     // line 12:
/*   548 */                     // 		tail = ''.join(uniqueList[1:])
/*   549 */                     //   ^
/*   550 */                     //
/*   551 */                     $currLineNo = 12;
/*   552 */                     $currColNo = 2;
/*   553 */ 
/*   554 */                     var $str135 = new Sk.builtins['str']('');
/*   555 */                     $ret = Sk.abstr.gattr($str135, 'join', true);
/*   556 */                     $blk = 8; /* allowing case fallthrough */
/*   557 */                 case 8:
/*   558 */                     /* --- function return or resume suspension --- */
/*   559 */                     if ($ret && $ret.$isSuspension) {
/*   560 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 12, 9);
/*   561 */                     }
/*   562 */                     var $lattr136 = $ret;
/*   563 */                     if (uniqueList === undefined) {
/*   564 */                         throw new Sk.builtin.UnboundLocalError('local variable \'uniqueList\' referenced before assignment');
/*   565 */                     }
/*   566 */                     var $slice137 = new Sk.builtins['slice'](new Sk.builtin.int_(1), new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   567 */                     $ret = Sk.abstr.objectGetItem(uniqueList, $slice137, true);
/*   568 */                     $blk = 9; /* allowing case fallthrough */
/*   569 */                 case 9:
/*   570 */                     /* --- function return or resume suspension --- */
/*   571 */                     if ($ret && $ret.$isSuspension) {
/*   572 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   573 */                     }
/*   574 */                     var $lsubscr138 = $ret;
/*   575 */                     $ret;
/*   576 */                     $ret = Sk.misceval.callsimOrSuspend($lattr136, $lsubscr138);
/*   577 */                     $blk = 10; /* allowing case fallthrough */
/*   578 */                 case 10:
/*   579 */                     /* --- function return or resume suspension --- */
/*   580 */                     if ($ret && $ret.$isSuspension) {
/*   581 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 12, 9);
/*   582 */                     }
/*   583 */                     var $call139 = $ret;
/*   584 */                     //
/*   585 */                     // line 12:
/*   586 */                     // 		tail = ''.join(uniqueList[1:])
/*   587 */                     //          ^
/*   588 */                     //
/*   589 */                     $currLineNo = 12;
/*   590 */                     $currColNo = 9;
/*   591 */ 
/*   592 */                     tail = $call139;
/*   593 */                     //
/*   594 */                     // line 13:
/*   595 */                     // 		nstrings = list(set(scrambler(tail)))
/*   596 */                     //   ^
/*   597 */                     //
/*   598 */                     $currLineNo = 13;
/*   599 */                     $currColNo = 2;
/*   600 */ 
/*   601 */                     var $loadgbl140 = Sk.misceval.loadname('list', $gbl);
/*   602 */                     var $loadgbl141 = Sk.misceval.loadname('set', $gbl);
/*   603 */                     var $loadgbl142 = Sk.misceval.loadname('scrambler', $gbl);
/*   604 */                     if (tail === undefined) {
/*   605 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tail\' referenced before assignment');
/*   606 */                     }
/*   607 */                     $ret;
/*   608 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl142, tail);
/*   609 */                     $blk = 11; /* allowing case fallthrough */
/*   610 */                 case 11:
/*   611 */                     /* --- function return or resume suspension --- */
/*   612 */                     if ($ret && $ret.$isSuspension) {
/*   613 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 22);
/*   614 */                     }
/*   615 */                     var $call143 = $ret;
/*   616 */                     //
/*   617 */                     // line 13:
/*   618 */                     // 		nstrings = list(set(scrambler(tail)))
/*   619 */                     //                       ^
/*   620 */                     //
/*   621 */                     $currLineNo = 13;
/*   622 */                     $currColNo = 22;
/*   623 */ 
/*   624 */                     $ret;
/*   625 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl141, $call143);
/*   626 */                     $blk = 12; /* allowing case fallthrough */
/*   627 */                 case 12:
/*   628 */                     /* --- function return or resume suspension --- */
/*   629 */                     if ($ret && $ret.$isSuspension) {
/*   630 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 18);
/*   631 */                     }
/*   632 */                     var $call144 = $ret;
/*   633 */                     //
/*   634 */                     // line 13:
/*   635 */                     // 		nstrings = list(set(scrambler(tail)))
/*   636 */                     //                   ^
/*   637 */                     //
/*   638 */                     $currLineNo = 13;
/*   639 */                     $currColNo = 18;
/*   640 */ 
/*   641 */                     $ret;
/*   642 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl140, $call144);
/*   643 */                     $blk = 13; /* allowing case fallthrough */
/*   644 */                 case 13:
/*   645 */                     /* --- function return or resume suspension --- */
/*   646 */                     if ($ret && $ret.$isSuspension) {
/*   647 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 13, 13);
/*   648 */                     }
/*   649 */                     var $call145 = $ret;
/*   650 */                     //
/*   651 */                     // line 13:
/*   652 */                     // 		nstrings = list(set(scrambler(tail)))
/*   653 */                     //              ^
/*   654 */                     //
/*   655 */                     $currLineNo = 13;
/*   656 */                     $currColNo = 13;
/*   657 */ 
/*   658 */                     nstrings = $call145;
/*   659 */                     //
/*   660 */                     // line 14:
/*   661 */                     // 		for n in nstrings:
/*   662 */                     //   ^
/*   663 */                     //
/*   664 */                     $currLineNo = 14;
/*   665 */                     $currColNo = 2;
/*   666 */ 
/*   667 */                     if (nstrings === undefined) {
/*   668 */                         throw new Sk.builtin.UnboundLocalError('local variable \'nstrings\' referenced before assignment');
/*   669 */                     }
/*   670 */                     var $iter146 = Sk.abstr.iter(nstrings);
/*   671 */                     $blk = 14; /* allowing case fallthrough */
/*   672 */                 case 14:
/*   673 */                     /* --- for start --- */
/*   674 */                     $ret = Sk.abstr.iternext($iter146, true);
/*   675 */                     $blk = 17; /* allowing case fallthrough */
/*   676 */                 case 17:
/*   677 */                     /* --- function return or resume suspension --- */
/*   678 */                     if ($ret && $ret.$isSuspension) {
/*   679 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 14, 2);
/*   680 */                     }
/*   681 */                     var $next147 = $ret;
/*   682 */                     if ($next147 === undefined) {
/*   683 */                         $blk = 15;
/*   684 */                         continue;
/*   685 */                     }
/*   686 */                     n = $next147;
/*   687 */                     //
/*   688 */                     // line 15:
/*   689 */                     // 			for i in range(0,len(n)+1):
/*   690 */                     //    ^
/*   691 */                     //
/*   692 */                     $currLineNo = 15;
/*   693 */                     $currColNo = 3;
/*   694 */ 
/*   695 */                     var $loadgbl148 = Sk.misceval.loadname('range', $gbl);
/*   696 */                     var $loadgbl149 = Sk.misceval.loadname('len', $gbl);
/*   697 */                     if (n === undefined) {
/*   698 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   699 */                     }
/*   700 */                     $ret;
/*   701 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl149, n);
/*   702 */                     $blk = 21; /* allowing case fallthrough */
/*   703 */                 case 21:
/*   704 */                     /* --- function return or resume suspension --- */
/*   705 */                     if ($ret && $ret.$isSuspension) {
/*   706 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 20);
/*   707 */                     }
/*   708 */                     var $call150 = $ret;
/*   709 */                     //
/*   710 */                     // line 15:
/*   711 */                     // 			for i in range(0,len(n)+1):
/*   712 */                     //                     ^
/*   713 */                     //
/*   714 */                     $currLineNo = 15;
/*   715 */                     $currColNo = 20;
/*   716 */ 
/*   717 */                     var $binop151 = Sk.abstr.numberBinOp($call150, new Sk.builtin.int_(1), 'Add');
/*   718 */                     $ret;
/*   719 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl148, new Sk.builtin.int_(0), $binop151);
/*   720 */                     $blk = 22; /* allowing case fallthrough */
/*   721 */                 case 22:
/*   722 */                     /* --- function return or resume suspension --- */
/*   723 */                     if ($ret && $ret.$isSuspension) {
/*   724 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 12);
/*   725 */                     }
/*   726 */                     var $call152 = $ret;
/*   727 */                     //
/*   728 */                     // line 15:
/*   729 */                     // 			for i in range(0,len(n)+1):
/*   730 */                     //             ^
/*   731 */                     //
/*   732 */                     $currLineNo = 15;
/*   733 */                     $currColNo = 12;
/*   734 */ 
/*   735 */                     var $iter153 = Sk.abstr.iter($call152);
/*   736 */                     $blk = 18; /* allowing case fallthrough */
/*   737 */                 case 18:
/*   738 */                     /* --- for start --- */
/*   739 */                     $ret = Sk.abstr.iternext($iter153, true);
/*   740 */                     $blk = 23; /* allowing case fallthrough */
/*   741 */                 case 23:
/*   742 */                     /* --- function return or resume suspension --- */
/*   743 */                     if ($ret && $ret.$isSuspension) {
/*   744 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 15, 3);
/*   745 */                     }
/*   746 */                     var $next154 = $ret;
/*   747 */                     if ($next154 === undefined) {
/*   748 */                         $blk = 19;
/*   749 */                         continue;
/*   750 */                     }
/*   751 */                     i = $next154;
/*   752 */                     //
/*   753 */                     // line 16:
/*   754 */                     // 				newfinal = n[0:i]+char+n[i:len(n)]
/*   755 */                     //     ^
/*   756 */                     //
/*   757 */                     $currLineNo = 16;
/*   758 */                     $currColNo = 4;
/*   759 */ 
/*   760 */                     if (n === undefined) {
/*   761 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   762 */                     }
/*   763 */                     if (i === undefined) {
/*   764 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   765 */                     }
/*   766 */                     var $slice155 = new Sk.builtins['slice'](new Sk.builtin.int_(0), i, Sk.builtin.none.none$);
/*   767 */                     $ret = Sk.abstr.objectGetItem(n, $slice155, true);
/*   768 */                     $blk = 24; /* allowing case fallthrough */
/*   769 */                 case 24:
/*   770 */                     /* --- function return or resume suspension --- */
/*   771 */                     if ($ret && $ret.$isSuspension) {
/*   772 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   773 */                     }
/*   774 */                     var $lsubscr156 = $ret;
/*   775 */                     if (char_$rw$ === undefined) {
/*   776 */                         throw new Sk.builtin.UnboundLocalError('local variable \'char_$rw$\' referenced before assignment');
/*   777 */                     }
/*   778 */                     var $binop157 = Sk.abstr.numberBinOp($lsubscr156, char_$rw$, 'Add');
/*   779 */                     if (n === undefined) {
/*   780 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   781 */                     }
/*   782 */                     if (i === undefined) {
/*   783 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   784 */                     }
/*   785 */                     var $loadgbl158 = Sk.misceval.loadname('len', $gbl);
/*   786 */                     if (n === undefined) {
/*   787 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*   788 */                     }
/*   789 */                     $ret;
/*   790 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl158, n);
/*   791 */                     $blk = 25; /* allowing case fallthrough */
/*   792 */                 case 25:
/*   793 */                     /* --- function return or resume suspension --- */
/*   794 */                     if ($ret && $ret.$isSuspension) {
/*   795 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 16, 31);
/*   796 */                     }
/*   797 */                     var $call159 = $ret;
/*   798 */                     //
/*   799 */                     // line 16:
/*   800 */                     // 				newfinal = n[0:i]+char+n[i:len(n)]
/*   801 */                     //                                ^
/*   802 */                     //
/*   803 */                     $currLineNo = 16;
/*   804 */                     $currColNo = 31;
/*   805 */ 
/*   806 */                     var $slice160 = new Sk.builtins['slice'](i, $call159, Sk.builtin.none.none$);
/*   807 */                     $ret = Sk.abstr.objectGetItem(n, $slice160, true);
/*   808 */                     $blk = 26; /* allowing case fallthrough */
/*   809 */                 case 26:
/*   810 */                     /* --- function return or resume suspension --- */
/*   811 */                     if ($ret && $ret.$isSuspension) {
/*   812 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', $currLineNo, $currColNo);
/*   813 */                     }
/*   814 */                     var $lsubscr161 = $ret;
/*   815 */                     var $binop162 = Sk.abstr.numberBinOp($binop157, $lsubscr161, 'Add');
/*   816 */                     newfinal = $binop162;
/*   817 */                     //
/*   818 */                     // line 17:
/*   819 */                     // 				finals.append(newfinal)
/*   820 */                     //     ^
/*   821 */                     //
/*   822 */                     $currLineNo = 17;
/*   823 */                     $currColNo = 4;
/*   824 */ 
/*   825 */                     if (finals === undefined) {
/*   826 */                         throw new Sk.builtin.UnboundLocalError('local variable \'finals\' referenced before assignment');
/*   827 */                     }
/*   828 */                     $ret = Sk.abstr.gattr(finals, 'append', true);
/*   829 */                     $blk = 27; /* allowing case fallthrough */
/*   830 */                 case 27:
/*   831 */                     /* --- function return or resume suspension --- */
/*   832 */                     if ($ret && $ret.$isSuspension) {
/*   833 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 17, 4);
/*   834 */                     }
/*   835 */                     var $lattr163 = $ret;
/*   836 */                     if (newfinal === undefined) {
/*   837 */                         throw new Sk.builtin.UnboundLocalError('local variable \'newfinal\' referenced before assignment');
/*   838 */                     }
/*   839 */                     $ret;
/*   840 */                     $ret = Sk.misceval.callsimOrSuspend($lattr163, newfinal);
/*   841 */                     $blk = 28; /* allowing case fallthrough */
/*   842 */                 case 28:
/*   843 */                     /* --- function return or resume suspension --- */
/*   844 */                     if ($ret && $ret.$isSuspension) {
/*   845 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 17, 4);
/*   846 */                     }
/*   847 */                     var $call164 = $ret;
/*   848 */                     //
/*   849 */                     // line 17:
/*   850 */                     // 				finals.append(newfinal)
/*   851 */                     //     ^
/*   852 */                     //
/*   853 */                     $currLineNo = 17;
/*   854 */                     $currColNo = 4;
/*   855 */ 
/*   856 */                     $blk = 18; /* jump */
/*   857 */                     continue;
/*   858 */                 case 15:
/*   859 */                     /* --- for cleanup --- */
/*   860 */                     $blk = 16; /* allowing case fallthrough */
/*   861 */                 case 16:
/*   862 */                     /* --- for end --- */
/*   863 */                     //
/*   864 */                     // line 18:
/*   865 */                     // 		return list(set(finals))
/*   866 */                     //   ^
/*   867 */                     //
/*   868 */                     $currLineNo = 18;
/*   869 */                     $currColNo = 2;
/*   870 */ 
/*   871 */                     var $loadgbl165 = Sk.misceval.loadname('list', $gbl);
/*   872 */                     var $loadgbl166 = Sk.misceval.loadname('set', $gbl);
/*   873 */                     if (finals === undefined) {
/*   874 */                         throw new Sk.builtin.UnboundLocalError('local variable \'finals\' referenced before assignment');
/*   875 */                     }
/*   876 */                     $ret;
/*   877 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl166, finals);
/*   878 */                     $blk = 29; /* allowing case fallthrough */
/*   879 */                 case 29:
/*   880 */                     /* --- function return or resume suspension --- */
/*   881 */                     if ($ret && $ret.$isSuspension) {
/*   882 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 18, 14);
/*   883 */                     }
/*   884 */                     var $call167 = $ret;
/*   885 */                     //
/*   886 */                     // line 18:
/*   887 */                     // 		return list(set(finals))
/*   888 */                     //               ^
/*   889 */                     //
/*   890 */                     $currLineNo = 18;
/*   891 */                     $currColNo = 14;
/*   892 */ 
/*   893 */                     $ret;
/*   894 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl165, $call167);
/*   895 */                     $blk = 30; /* allowing case fallthrough */
/*   896 */                 case 30:
/*   897 */                     /* --- function return or resume suspension --- */
/*   898 */                     if ($ret && $ret.$isSuspension) {
/*   899 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/anagram/main.py', 18, 9);
/*   900 */                     }
/*   901 */                     var $call168 = $ret;
/*   902 */                     //
/*   903 */                     // line 18:
/*   904 */                     // 		return list(set(finals))
/*   905 */                     //          ^
/*   906 */                     //
/*   907 */                     $currLineNo = 18;
/*   908 */                     $currColNo = 9;
/*   909 */ 
/*   910 */                     return $call168;
/*   911 */                     $blk = 1; /* jump */
/*   912 */                     continue;
/*   913 */                 case 19:
/*   914 */                     /* --- for cleanup --- */
/*   915 */                     $blk = 20; /* allowing case fallthrough */
/*   916 */                 case 20:
/*   917 */                     /* --- for end --- */
/*   918 */                     $blk = 14; /* jump */
/*   919 */                     continue;
/*   920 */                 }
/*   921 */             } catch (err) {
/*   922 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   923 */                     err = new Sk.builtin.ExternalError(err);
/*   924 */                 }
/*   925 */                 err.traceback.push({
/*   926 */                     lineno: $currLineNo,
/*   927 */                     colno: $currColNo,
/*   928 */                     filename: '/home/sbaxter/benchmarks/skulpt/anagram/main.py'
/*   929 */                 });
/*   930 */                 if ($exc.length > 0) {
/*   931 */                     $err = err;
/*   932 */                     $blk = $exc.pop();
/*   933 */                     continue;
/*   934 */                 } else {
/*   935 */                     throw err;
/*   936 */                 }
/*   937 */             }
/*   938 */         }
/*   939 */     });
/*   940 */     return $scope120;
/*   941 */ }();
