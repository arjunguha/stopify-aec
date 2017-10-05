/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $_compr121, $loadname122, $_compr121, $loadname122, $call123, $iter124, $_compr121, $loadname122, $call123, $iter124, $next125, $loadname126, $loadname127, $_compr121, $loadname122, $call123, $iter124, $next125, $loadname126, $loadname127, $call128, $loadname174, $loadname174, $call175, $loadname174, $call175, $lattr176, $loadname177, $compareres179, $loadname180, $loadname181, $compareres179, $loadname180, $loadname181, $call182, $loadname185, $str186;
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
/*    16 */             $_compr121 = susp.$tmps.$_compr121;
/*    17 */             $loadname122 = susp.$tmps.$loadname122;
/*    18 */             $call123 = susp.$tmps.$call123;
/*    19 */             $iter124 = susp.$tmps.$iter124;
/*    20 */             $next125 = susp.$tmps.$next125;
/*    21 */             $loadname126 = susp.$tmps.$loadname126;
/*    22 */             $loadname127 = susp.$tmps.$loadname127;
/*    23 */             $call128 = susp.$tmps.$call128;
/*    24 */             $loadname174 = susp.$tmps.$loadname174;
/*    25 */             $call175 = susp.$tmps.$call175;
/*    26 */             $lattr176 = susp.$tmps.$lattr176;
/*    27 */             $loadname177 = susp.$tmps.$loadname177;
/*    28 */             $compareres179 = susp.$tmps.$compareres179;
/*    29 */             $loadname180 = susp.$tmps.$loadname180;
/*    30 */             $loadname181 = susp.$tmps.$loadname181;
/*    31 */             $call182 = susp.$tmps.$call182;
/*    32 */             $loadname185 = susp.$tmps.$loadname185;
/*    33 */             $str186 = susp.$tmps.$str186;
/*    34 */             try {
/*    35 */                 $ret = susp.child.resume();
/*    36 */             } catch (err) {
/*    37 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    38 */                     err = new Sk.builtin.ExternalError(err);
/*    39 */                 }
/*    40 */                 err.traceback.push({
/*    41 */                     lineno: $currLineNo,
/*    42 */                     colno: $currColNo,
/*    43 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*    44 */                 });
/*    45 */                 if ($exc.length > 0) {
/*    46 */                     $err = err;
/*    47 */                     $blk = $exc.pop();
/*    48 */                 } else {
/*    49 */                     throw err;
/*    50 */                 }
/*    51 */             }
/*    52 */         };
/*    53 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    54 */             var susp = new Sk.misceval.Suspension();
/*    55 */             susp.child = $child;
/*    56 */             susp.resume = function() {
/*    57 */                 $scope120.$wakingSuspension = susp;
/*    58 */                 return $scope120();
/*    59 */             };
/*    60 */             susp.data = susp.child.data;
/*    61 */             susp.$blk = $blk;
/*    62 */             susp.$loc = $loc;
/*    63 */             susp.$gbl = $gbl;
/*    64 */             susp.$exc = $exc;
/*    65 */             susp.$err = $err;
/*    66 */             susp.$postfinally = $postfinally;
/*    67 */             susp.$filename = $filename;
/*    68 */             susp.$lineno = $lineno;
/*    69 */             susp.$colno = $colno;
/*    70 */             susp.optional = susp.child.optional;
/*    71 */             susp.$tmps = {
/*    72 */                 "$_compr121": $_compr121,
/*    73 */                 "$loadname122": $loadname122,
/*    74 */                 "$call123": $call123,
/*    75 */                 "$iter124": $iter124,
/*    76 */                 "$next125": $next125,
/*    77 */                 "$loadname126": $loadname126,
/*    78 */                 "$loadname127": $loadname127,
/*    79 */                 "$call128": $call128,
/*    80 */                 "$loadname174": $loadname174,
/*    81 */                 "$call175": $call175,
/*    82 */                 "$lattr176": $lattr176,
/*    83 */                 "$loadname177": $loadname177,
/*    84 */                 "$compareres179": $compareres179,
/*    85 */                 "$loadname180": $loadname180,
/*    86 */                 "$loadname181": $loadname181,
/*    87 */                 "$call182": $call182,
/*    88 */                 "$loadname185": $loadname185,
/*    89 */                 "$str186": $str186
/*    90 */             };
/*    91 */             return susp;
/*    92 */         };
/*    93 */         var $gbl = {},
/*    94 */             $blk = 0,
/*    95 */             $exc = [],
/*    96 */             $loc = $gbl,
/*    97 */             $err = undefined;
/*    98 */         $gbl.__name__ = $modname;
/*    99 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/b/main.py');
/*   100 */         var $ret = undefined,
/*   101 */             $postfinally = undefined,
/*   102 */             $currLineNo = undefined,
/*   103 */             $currColNo = undefined;
/*   104 */         if (typeof Sk.execStart === 'undefined') {
/*   105 */             Sk.execStart = Date.now()
/*   106 */         }
/*   107 */         if (typeof Sk.lastYield === 'undefined') {
/*   108 */             Sk.lastYield = Date.now()
/*   109 */         }
/*   110 */         if ($scope120.$wakingSuspension !== undefined) {
/*   111 */             $wakeFromSuspension();
/*   112 */         }
/*   113 */         if (Sk.retainGlobals) {
/*   114 */             if (Sk.globals) {
/*   115 */                 $gbl = Sk.globals;
/*   116 */                 Sk.globals = $gbl;
/*   117 */                 $loc = $gbl;
/*   118 */             } else {
/*   119 */                 Sk.globals = $gbl;
/*   120 */             }
/*   121 */         } else {
/*   122 */             Sk.globals = $gbl;
/*   123 */         }
/*   124 */         while (true) {
/*   125 */             try {
/*   126 */                 var $dateNow = Date.now();
/*   127 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   128 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   129 */                 }
/*   130 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   131 */                     var $susp = $saveSuspension({
/*   132 */                         data: {
/*   133 */                             type: 'Sk.yield'
/*   134 */                         },
/*   135 */                         resume: function() {}
/*   136 */                     }, '/home/sbaxter/benchmarks/skulpt/b/main.py', $currLineNo, $currColNo);
/*   137 */                     $susp.$blk = $blk;
/*   138 */                     $susp.optional = true;
/*   139 */                     return $susp;
/*   140 */                 }
/*   141 */                 switch ($blk) {
/*   142 */                 case 0:
/*   143 */                     /* --- module entry --- */
/*   144 */                     //
/*   145 */                     // line 3:
/*   146 */                     // table = [list(range(1000)) for i in range(1000)]
/*   147 */                     // ^
/*   148 */                     //
/*   149 */                     $currLineNo = 3;
/*   150 */                     $currColNo = 0;
/*   151 */ 
/*   152 */                     var $_compr121 = new Sk.builtins['list']([]);
/*   153 */                     var $loadname122 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   154 */                     $ret;
/*   155 */                     $ret = Sk.misceval.callsimOrSuspend($loadname122, new Sk.builtin.int_(1000));
/*   156 */                     $blk = 4; /* allowing case fallthrough */
/*   157 */                 case 4:
/*   158 */                     /* --- function return or resume suspension --- */
/*   159 */                     if ($ret && $ret.$isSuspension) {
/*   160 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 36);
/*   161 */                     }
/*   162 */                     var $call123 = $ret;
/*   163 */                     //
/*   164 */                     // line 3:
/*   165 */                     // table = [list(range(1000)) for i in range(1000)]
/*   166 */                     //                                     ^
/*   167 */                     //
/*   168 */                     $currLineNo = 3;
/*   169 */                     $currColNo = 36;
/*   170 */ 
/*   171 */                     var $iter124 = Sk.abstr.iter($call123);
/*   172 */                     $blk = 1; /* allowing case fallthrough */
/*   173 */                 case 1:
/*   174 */                     /* --- list comp start --- */
/*   175 */                     $ret = Sk.abstr.iternext($iter124, true);
/*   176 */                     $blk = 5; /* allowing case fallthrough */
/*   177 */                 case 5:
/*   178 */                     /* --- function return or resume suspension --- */
/*   179 */                     if ($ret && $ret.$isSuspension) {
/*   180 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 9);
/*   181 */                     }
/*   182 */                     var $next125 = $ret;
/*   183 */                     if ($next125 === undefined) {
/*   184 */                         $blk = 3;
/*   185 */                         continue;
/*   186 */                     }
/*   187 */                     $loc.i = $next125;
/*   188 */                     var $loadname126 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   189 */                     var $loadname127 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   190 */                     $ret;
/*   191 */                     $ret = Sk.misceval.callsimOrSuspend($loadname127, new Sk.builtin.int_(1000));
/*   192 */                     $blk = 6; /* allowing case fallthrough */
/*   193 */                 case 6:
/*   194 */                     /* --- function return or resume suspension --- */
/*   195 */                     if ($ret && $ret.$isSuspension) {
/*   196 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 14);
/*   197 */                     }
/*   198 */                     var $call128 = $ret;
/*   199 */                     //
/*   200 */                     // line 3:
/*   201 */                     // table = [list(range(1000)) for i in range(1000)]
/*   202 */                     //               ^
/*   203 */                     //
/*   204 */                     $currLineNo = 3;
/*   205 */                     $currColNo = 14;
/*   206 */ 
/*   207 */                     $ret;
/*   208 */                     $ret = Sk.misceval.callsimOrSuspend($loadname126, $call128);
/*   209 */                     $blk = 7; /* allowing case fallthrough */
/*   210 */                 case 7:
/*   211 */                     /* --- function return or resume suspension --- */
/*   212 */                     if ($ret && $ret.$isSuspension) {
/*   213 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 9);
/*   214 */                     }
/*   215 */                     var $call129 = $ret;
/*   216 */                     //
/*   217 */                     // line 3:
/*   218 */                     // table = [list(range(1000)) for i in range(1000)]
/*   219 */                     //          ^
/*   220 */                     //
/*   221 */                     $currLineNo = 3;
/*   222 */                     $currColNo = 9;
/*   223 */ 
/*   224 */                     $_compr121.v.push($call129);
/*   225 */                     $blk = 2; /* allowing case fallthrough */
/*   226 */                 case 2:
/*   227 */                     /* --- list comp skip --- */
/*   228 */                     $blk = 1; /* jump */
/*   229 */                     continue;
/*   230 */                 case 3:
/*   231 */                     /* --- list comp anchor --- */
/*   232 */                     $loc.table = $_compr121;
/*   233 */                     //
/*   234 */                     // line 5:
/*   235 */                     // class a(object):
/*   236 */                     // ^
/*   237 */                     //
/*   238 */                     $currLineNo = 5;
/*   239 */                     $currColNo = 0;
/*   240 */ 
/*   241 */                     var $loadname130 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   242 */                     $scope131.co_name = new Sk.builtins['str']('a');
/*   243 */                     var $built173 = Sk.misceval.buildClass($gbl, $scope131, 'a', [$loadname130]);
/*   244 */                     $loc.a = $built173;
/*   245 */                     //
/*   246 */                     // line 29:
/*   247 */                     // r = a().main(table)
/*   248 */                     // ^
/*   249 */                     //
/*   250 */                     $currLineNo = 29;
/*   251 */                     $currColNo = 0;
/*   252 */ 
/*   253 */                     var $loadname174 = $loc.a !== undefined ? $loc.a : Sk.misceval.loadname('a', $gbl);;
/*   254 */                     $ret;
/*   255 */                     $ret = Sk.misceval.callsimOrSuspend($loadname174);
/*   256 */                     $blk = 8; /* allowing case fallthrough */
/*   257 */                 case 8:
/*   258 */                     /* --- function return or resume suspension --- */
/*   259 */                     if ($ret && $ret.$isSuspension) {
/*   260 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   261 */                     }
/*   262 */                     var $call175 = $ret;
/*   263 */                     //
/*   264 */                     // line 29:
/*   265 */                     // r = a().main(table)
/*   266 */                     //     ^
/*   267 */                     //
/*   268 */                     $currLineNo = 29;
/*   269 */                     $currColNo = 4;
/*   270 */ 
/*   271 */                     $ret = Sk.abstr.gattr($call175, 'main', true);
/*   272 */                     $blk = 9; /* allowing case fallthrough */
/*   273 */                 case 9:
/*   274 */                     /* --- function return or resume suspension --- */
/*   275 */                     if ($ret && $ret.$isSuspension) {
/*   276 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   277 */                     }
/*   278 */                     var $lattr176 = $ret;
/*   279 */                     var $loadname177 = $loc.table !== undefined ? $loc.table : Sk.misceval.loadname('table', $gbl);;
/*   280 */                     $ret;
/*   281 */                     $ret = Sk.misceval.callsimOrSuspend($lattr176, $loadname177);
/*   282 */                     $blk = 10; /* allowing case fallthrough */
/*   283 */                 case 10:
/*   284 */                     /* --- function return or resume suspension --- */
/*   285 */                     if ($ret && $ret.$isSuspension) {
/*   286 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   287 */                     }
/*   288 */                     var $call178 = $ret;
/*   289 */                     //
/*   290 */                     // line 29:
/*   291 */                     // r = a().main(table)
/*   292 */                     //     ^
/*   293 */                     //
/*   294 */                     $currLineNo = 29;
/*   295 */                     $currColNo = 4;
/*   296 */ 
/*   297 */                     $loc.r = $call178;
/*   298 */                     //
/*   299 */                     // line 30:
/*   300 */                     // if 12901045 != len(r):
/*   301 */                     // ^
/*   302 */                     //
/*   303 */                     $currLineNo = 30;
/*   304 */                     $currColNo = 0;
/*   305 */ 
/*   306 */                     var $compareres179 = null;
/*   307 */                     var $loadname180 = $loc.len !== undefined ? $loc.len : Sk.misceval.loadname('len', $gbl);;
/*   308 */                     var $loadname181 = $loc.r !== undefined ? $loc.r : Sk.misceval.loadname('r', $gbl);;
/*   309 */                     $ret;
/*   310 */                     $ret = Sk.misceval.callsimOrSuspend($loadname180, $loadname181);
/*   311 */                     $blk = 13; /* allowing case fallthrough */
/*   312 */                 case 13:
/*   313 */                     /* --- function return or resume suspension --- */
/*   314 */                     if ($ret && $ret.$isSuspension) {
/*   315 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 30, 15);
/*   316 */                     }
/*   317 */                     var $call182 = $ret;
/*   318 */                     //
/*   319 */                     // line 30:
/*   320 */                     // if 12901045 != len(r):
/*   321 */                     //                ^
/*   322 */                     //
/*   323 */                     $currLineNo = 30;
/*   324 */                     $currColNo = 15;
/*   325 */ 
/*   326 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(new Sk.builtin.int_(12901045), $call182, 'NotEq', true));
/*   327 */                     $blk = 14; /* allowing case fallthrough */
/*   328 */                 case 14:
/*   329 */                     /* --- function return or resume suspension --- */
/*   330 */                     if ($ret && $ret.$isSuspension) {
/*   331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 30, 3);
/*   332 */                     }
/*   333 */                     $compareres179 = $ret;
/*   334 */                     var $jfalse183 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   335 */                     if ($jfalse183) { /*test failed */
/*   336 */                         $blk = 12;
/*   337 */                         continue;
/*   338 */                     }
/*   339 */                     $blk = 12; /* allowing case fallthrough */
/*   340 */                 case 12:
/*   341 */                     /* --- done --- */
/*   342 */                     var $jfalse184 = ($compareres179 === false || !Sk.misceval.isTrue($compareres179));
/*   343 */                     if ($jfalse184) { /*test failed */
/*   344 */                         $blk = 11;
/*   345 */                         continue;
/*   346 */                     }
/*   347 */                     //
/*   348 */                     // line 31:
/*   349 */                     //   raise Exception('Bad result')
/*   350 */                     //   ^
/*   351 */                     //
/*   352 */                     $currLineNo = 31;
/*   353 */                     $currColNo = 2;
/*   354 */ 
/*   355 */                     var $loadname185 = $loc.Exception !== undefined ? $loc.Exception : Sk.misceval.loadname('Exception', $gbl);;
/*   356 */                     var $str186 = new Sk.builtins['str']('Bad result');
/*   357 */                     $ret;
/*   358 */                     $ret = Sk.misceval.callsimOrSuspend($loadname185, $str186);
/*   359 */                     $blk = 15; /* allowing case fallthrough */
/*   360 */                 case 15:
/*   361 */                     /* --- function return or resume suspension --- */
/*   362 */                     if ($ret && $ret.$isSuspension) {
/*   363 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 31, 8);
/*   364 */                     }
/*   365 */                     var $call187 = $ret;
/*   366 */                     //
/*   367 */                     // line 31:
/*   368 */                     //   raise Exception('Bad result')
/*   369 */                     //         ^
/*   370 */                     //
/*   371 */                     $currLineNo = 31;
/*   372 */                     $currColNo = 8;
/*   373 */ 
/*   374 */                     throw $call187;
/*   375 */                     $blk = 11; /* allowing case fallthrough */
/*   376 */                 case 11:
/*   377 */                     /* --- end of if --- */
/*   378 */                     return $loc;
/*   379 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   380 */                 }
/*   381 */             } catch (err) {
/*   382 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   383 */                     err = new Sk.builtin.ExternalError(err);
/*   384 */                 }
/*   385 */                 err.traceback.push({
/*   386 */                     lineno: $currLineNo,
/*   387 */                     colno: $currColNo,
/*   388 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   389 */                 });
/*   390 */                 if ($exc.length > 0) {
/*   391 */                     $err = err;
/*   392 */                     $blk = $exc.pop();
/*   393 */                     continue;
/*   394 */                 } else {
/*   395 */                     throw err;
/*   396 */                 }
/*   397 */             }
/*   398 */         }
/*   399 */     });
/*   400 */     var $scope131 = (function $a$class_outer($globals, $locals, $rest) {
/*   401 */         var $gbl = $globals,
/*   402 */             $loc = $locals;
/*   403 */         (function $a$_closure() {
/*   404 */             var $blk = 0,
/*   405 */                 $exc = [],
/*   406 */                 $ret = undefined,
/*   407 */                 $postfinally = undefined,
/*   408 */                 $currLineNo = undefined,
/*   409 */                 $currColNo = undefined;
/*   410 */             if (typeof Sk.execStart === 'undefined') {
/*   411 */                 Sk.execStart = Date.now()
/*   412 */             }
/*   413 */             while (true) {
/*   414 */                 try {
/*   415 */                     var $dateNow = Date.now();
/*   416 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   417 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   418 */                     }
/*   419 */                     switch ($blk) {
/*   420 */                     case 0:
/*   421 */                         /* --- class entry --- */
/*   422 */                         //
/*   423 */                         // line 6:
/*   424 */                         //   def main(self, table):
/*   425 */                         //   ^
/*   426 */                         //
/*   427 */                         $currLineNo = 6;
/*   428 */                         $currColNo = 2;
/*   429 */ 
/*   430 */                         $scope132.co_name = new Sk.builtins['str']('main');
/*   431 */                         $scope132.co_varnames = ['self', 'table'];
/*   432 */                         var $funcobj172 = new Sk.builtins['function']($scope132, $gbl);
/*   433 */                         $loc.main = $funcobj172;
/*   434 */                         return;
/*   435 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   436 */                     }
/*   437 */                 } catch (err) {
/*   438 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   439 */                         err = new Sk.builtin.ExternalError(err);
/*   440 */                     }
/*   441 */                     err.traceback.push({
/*   442 */                         lineno: $currLineNo,
/*   443 */                         colno: $currColNo,
/*   444 */                         filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   445 */                     });
/*   446 */                     if ($exc.length > 0) {
/*   447 */                         $err = err;
/*   448 */                         $blk = $exc.pop();
/*   449 */                         continue;
/*   450 */                     } else {
/*   451 */                         throw err;
/*   452 */                     }
/*   453 */                 }
/*   454 */             }
/*   455 */         }).apply(null, $rest);
/*   456 */     });
/*   457 */     var $scope132 = (function $main133$(self, table) {
/*   458 */         // has cell
/*   459 */         var _buffer_write, column, row; /* locals */
/*   460 */         var _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, column, column, row, row, self, table, table, $str140, $str142, $iter144, $iter144, $str146, $str148, $iter150, $iter150, $str152, $loadgbl154, $loadgbl154, $call155, $str157, $str159, $str161, $str163, $str165, $str167, $str169, $str169, $lattr170;
/*   461 */         var $wakeFromSuspension = function() {
/*   462 */             var susp = $scope132.$wakingSuspension;
/*   463 */             delete $scope132.$wakingSuspension;
/*   464 */             $blk = susp.$blk;
/*   465 */             $loc = susp.$loc;
/*   466 */             $gbl = susp.$gbl;
/*   467 */             $exc = susp.$exc;
/*   468 */             $err = susp.$err;
/*   469 */             $postfinally = susp.$postfinally;
/*   470 */             $currLineNo = susp.$lineno;
/*   471 */             $currColNo = susp.$colno;
/*   472 */             Sk.lastYield = Date.now();
/*   473 */             $cell = susp.$cell;
/*   474 */             _buffer_write = susp.$tmps._buffer_write;
/*   475 */             column = susp.$tmps.column;
/*   476 */             row = susp.$tmps.row;
/*   477 */             self = susp.$tmps.self;
/*   478 */             table = susp.$tmps.table;
/*   479 */             $str140 = susp.$tmps.$str140;
/*   480 */             $str142 = susp.$tmps.$str142;
/*   481 */             $iter144 = susp.$tmps.$iter144;
/*   482 */             $str146 = susp.$tmps.$str146;
/*   483 */             $str148 = susp.$tmps.$str148;
/*   484 */             $iter150 = susp.$tmps.$iter150;
/*   485 */             $str152 = susp.$tmps.$str152;
/*   486 */             $loadgbl154 = susp.$tmps.$loadgbl154;
/*   487 */             $call155 = susp.$tmps.$call155;
/*   488 */             $str157 = susp.$tmps.$str157;
/*   489 */             $str159 = susp.$tmps.$str159;
/*   490 */             $str161 = susp.$tmps.$str161;
/*   491 */             $str163 = susp.$tmps.$str163;
/*   492 */             $str165 = susp.$tmps.$str165;
/*   493 */             $str167 = susp.$tmps.$str167;
/*   494 */             $str169 = susp.$tmps.$str169;
/*   495 */             $lattr170 = susp.$tmps.$lattr170;
/*   496 */             try {
/*   497 */                 $ret = susp.child.resume();
/*   498 */             } catch (err) {
/*   499 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   500 */                     err = new Sk.builtin.ExternalError(err);
/*   501 */                 }
/*   502 */                 err.traceback.push({
/*   503 */                     lineno: $currLineNo,
/*   504 */                     colno: $currColNo,
/*   505 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   506 */                 });
/*   507 */                 if ($exc.length > 0) {
/*   508 */                     $err = err;
/*   509 */                     $blk = $exc.pop();
/*   510 */                 } else {
/*   511 */                     throw err;
/*   512 */                 }
/*   513 */             }
/*   514 */         };
/*   515 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   516 */             var susp = new Sk.misceval.Suspension();
/*   517 */             susp.child = $child;
/*   518 */             susp.resume = function() {
/*   519 */                 $scope132.$wakingSuspension = susp;
/*   520 */                 return $scope132();
/*   521 */             };
/*   522 */             susp.data = susp.child.data;
/*   523 */             susp.$blk = $blk;
/*   524 */             susp.$loc = $loc;
/*   525 */             susp.$gbl = $gbl;
/*   526 */             susp.$exc = $exc;
/*   527 */             susp.$err = $err;
/*   528 */             susp.$postfinally = $postfinally;
/*   529 */             susp.$filename = $filename;
/*   530 */             susp.$lineno = $lineno;
/*   531 */             susp.$colno = $colno;
/*   532 */             susp.optional = susp.child.optional;
/*   533 */             susp.$cell = $cell;
/*   534 */             susp.$tmps = {
/*   535 */                 "_buffer_write": _buffer_write,
/*   536 */                 "column": column,
/*   537 */                 "row": row,
/*   538 */                 "self": self,
/*   539 */                 "table": table,
/*   540 */                 "$str140": $str140,
/*   541 */                 "$str142": $str142,
/*   542 */                 "$iter144": $iter144,
/*   543 */                 "$str146": $str146,
/*   544 */                 "$str148": $str148,
/*   545 */                 "$iter150": $iter150,
/*   546 */                 "$str152": $str152,
/*   547 */                 "$loadgbl154": $loadgbl154,
/*   548 */                 "$call155": $call155,
/*   549 */                 "$str157": $str157,
/*   550 */                 "$str159": $str159,
/*   551 */                 "$str161": $str161,
/*   552 */                 "$str163": $str163,
/*   553 */                 "$str165": $str165,
/*   554 */                 "$str167": $str167,
/*   555 */                 "$str169": $str169,
/*   556 */                 "$lattr170": $lattr170
/*   557 */             };
/*   558 */             return susp;
/*   559 */         };
/*   560 */         var $blk = 0,
/*   561 */             $exc = [],
/*   562 */             $loc = {},
/*   563 */             $cell = {},
/*   564 */             $gbl = this,
/*   565 */             $err = undefined,
/*   566 */             $ret = undefined,
/*   567 */             $postfinally = undefined,
/*   568 */             $currLineNo = undefined,
/*   569 */             $currColNo = undefined;
/*   570 */         if (typeof Sk.execStart === 'undefined') {
/*   571 */             Sk.execStart = Date.now()
/*   572 */         }
/*   573 */         if (typeof Sk.lastYield === 'undefined') {
/*   574 */             Sk.lastYield = Date.now()
/*   575 */         }
/*   576 */         if ($scope132.$wakingSuspension !== undefined) {
/*   577 */             $wakeFromSuspension();
/*   578 */         } else {
/*   579 */             Sk.builtin.pyCheckArgs("main", arguments, 2, 2, false, false);
/*   580 */         }
/*   581 */         while (true) {
/*   582 */             try {
/*   583 */                 var $dateNow = Date.now();
/*   584 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   585 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   586 */                 }
/*   587 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   588 */                     var $susp = $saveSuspension({
/*   589 */                         data: {
/*   590 */                             type: 'Sk.yield'
/*   591 */                         },
/*   592 */                         resume: function() {}
/*   593 */                     }, '/home/sbaxter/benchmarks/skulpt/b/main.py', $currLineNo, $currColNo);
/*   594 */                     $susp.$blk = $blk;
/*   595 */                     $susp.optional = true;
/*   596 */                     return $susp;
/*   597 */                 }
/*   598 */                 switch ($blk) {
/*   599 */                 case 0:
/*   600 */                     /* --- codeobj entry --- */
/*   601 */                     if (self === undefined) {
/*   602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   603 */                     }
/*   604 */                     if (table === undefined) {
/*   605 */                         throw new Sk.builtin.UnboundLocalError('local variable \'table\' referenced before assignment');
/*   606 */                     }
/*   607 */ 
/*   608 */                     //
/*   609 */                     // line 7:
/*   610 */                     //     _buffer = []
/*   611 */                     //     ^
/*   612 */                     //
/*   613 */                     $currLineNo = 7;
/*   614 */                     $currColNo = 4;
/*   615 */ 
/*   616 */                     var $loadlist134 = new Sk.builtins['list']([]);
/*   617 */                     $cell._buffer = $loadlist134;
/*   618 */                     //
/*   619 */                     // line 9:
/*   620 */                     //     def _buffer_write(str):
/*   621 */                     //     ^
/*   622 */                     //
/*   623 */                     $currLineNo = 9;
/*   624 */                     $currColNo = 4;
/*   625 */ 
/*   626 */                     $scope135.co_name = new Sk.builtins['str']('_buffer_write');
/*   627 */                     $scope135.co_varnames = ['str'];
/*   628 */                     var $funcobj139 = new Sk.builtins['function']($scope135, $gbl, $cell);
/*   629 */                     _buffer_write = $funcobj139;
/*   630 */                     //
/*   631 */                     // line 12:
/*   632 */                     //     _buffer_write('<table xmlns:py="http://spitfire/">')
/*   633 */                     //     ^
/*   634 */                     //
/*   635 */                     $currLineNo = 12;
/*   636 */                     $currColNo = 4;
/*   637 */ 
/*   638 */                     if (_buffer_write === undefined) {
/*   639 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   640 */                     }
/*   641 */                     var $str140 = new Sk.builtins['str']('<table xmlns:py="http://spitfire/">');
/*   642 */                     $ret;
/*   643 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str140);
/*   644 */                     $blk = 1; /* allowing case fallthrough */
/*   645 */                 case 1:
/*   646 */                     /* --- function return or resume suspension --- */
/*   647 */                     if ($ret && $ret.$isSuspension) {
/*   648 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 12, 4);
/*   649 */                     }
/*   650 */                     var $call141 = $ret;
/*   651 */                     //
/*   652 */                     // line 12:
/*   653 */                     //     _buffer_write('<table xmlns:py="http://spitfire/">')
/*   654 */                     //     ^
/*   655 */                     //
/*   656 */                     $currLineNo = 12;
/*   657 */                     $currColNo = 4;
/*   658 */ 
/*   659 */ 
/*   660 */                     //
/*   661 */                     // line 13:
/*   662 */                     //     _buffer_write('\n')
/*   663 */                     //     ^
/*   664 */                     //
/*   665 */                     $currLineNo = 13;
/*   666 */                     $currColNo = 4;
/*   667 */ 
/*   668 */                     if (_buffer_write === undefined) {
/*   669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   670 */                     }
/*   671 */                     var $str142 = new Sk.builtins['str']('\n');
/*   672 */                     $ret;
/*   673 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str142);
/*   674 */                     $blk = 2; /* allowing case fallthrough */
/*   675 */                 case 2:
/*   676 */                     /* --- function return or resume suspension --- */
/*   677 */                     if ($ret && $ret.$isSuspension) {
/*   678 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 13, 4);
/*   679 */                     }
/*   680 */                     var $call143 = $ret;
/*   681 */                     //
/*   682 */                     // line 13:
/*   683 */                     //     _buffer_write('\n')
/*   684 */                     //     ^
/*   685 */                     //
/*   686 */                     $currLineNo = 13;
/*   687 */                     $currColNo = 4;
/*   688 */ 
/*   689 */ 
/*   690 */                     //
/*   691 */                     // line 14:
/*   692 */                     //     for row in table:
/*   693 */                     //     ^
/*   694 */                     //
/*   695 */                     $currLineNo = 14;
/*   696 */                     $currColNo = 4;
/*   697 */ 
/*   698 */                     if (table === undefined) {
/*   699 */                         throw new Sk.builtin.UnboundLocalError('local variable \'table\' referenced before assignment');
/*   700 */                     }
/*   701 */                     var $iter144 = Sk.abstr.iter(table);
/*   702 */                     $blk = 3; /* allowing case fallthrough */
/*   703 */                 case 3:
/*   704 */                     /* --- for start --- */
/*   705 */                     $ret = Sk.abstr.iternext($iter144, true);
/*   706 */                     $blk = 6; /* allowing case fallthrough */
/*   707 */                 case 6:
/*   708 */                     /* --- function return or resume suspension --- */
/*   709 */                     if ($ret && $ret.$isSuspension) {
/*   710 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 14, 4);
/*   711 */                     }
/*   712 */                     var $next145 = $ret;
/*   713 */                     if ($next145 === undefined) {
/*   714 */                         $blk = 4;
/*   715 */                         continue;
/*   716 */                     }
/*   717 */                     row = $next145;
/*   718 */                     //
/*   719 */                     // line 15:
/*   720 */                     //       _buffer_write('<tr>')
/*   721 */                     //       ^
/*   722 */                     //
/*   723 */                     $currLineNo = 15;
/*   724 */                     $currColNo = 6;
/*   725 */ 
/*   726 */                     if (_buffer_write === undefined) {
/*   727 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   728 */                     }
/*   729 */                     var $str146 = new Sk.builtins['str']('<tr>');
/*   730 */                     $ret;
/*   731 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str146);
/*   732 */                     $blk = 7; /* allowing case fallthrough */
/*   733 */                 case 7:
/*   734 */                     /* --- function return or resume suspension --- */
/*   735 */                     if ($ret && $ret.$isSuspension) {
/*   736 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 15, 6);
/*   737 */                     }
/*   738 */                     var $call147 = $ret;
/*   739 */                     //
/*   740 */                     // line 15:
/*   741 */                     //       _buffer_write('<tr>')
/*   742 */                     //       ^
/*   743 */                     //
/*   744 */                     $currLineNo = 15;
/*   745 */                     $currColNo = 6;
/*   746 */ 
/*   747 */ 
/*   748 */                     //
/*   749 */                     // line 16:
/*   750 */                     //       _buffer_write('\n')
/*   751 */                     //       ^
/*   752 */                     //
/*   753 */                     $currLineNo = 16;
/*   754 */                     $currColNo = 6;
/*   755 */ 
/*   756 */                     if (_buffer_write === undefined) {
/*   757 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   758 */                     }
/*   759 */                     var $str148 = new Sk.builtins['str']('\n');
/*   760 */                     $ret;
/*   761 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str148);
/*   762 */                     $blk = 8; /* allowing case fallthrough */
/*   763 */                 case 8:
/*   764 */                     /* --- function return or resume suspension --- */
/*   765 */                     if ($ret && $ret.$isSuspension) {
/*   766 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 16, 6);
/*   767 */                     }
/*   768 */                     var $call149 = $ret;
/*   769 */                     //
/*   770 */                     // line 16:
/*   771 */                     //       _buffer_write('\n')
/*   772 */                     //       ^
/*   773 */                     //
/*   774 */                     $currLineNo = 16;
/*   775 */                     $currColNo = 6;
/*   776 */ 
/*   777 */ 
/*   778 */                     //
/*   779 */                     // line 17:
/*   780 */                     //       for column in row:
/*   781 */                     //       ^
/*   782 */                     //
/*   783 */                     $currLineNo = 17;
/*   784 */                     $currColNo = 6;
/*   785 */ 
/*   786 */                     if (row === undefined) {
/*   787 */                         throw new Sk.builtin.UnboundLocalError('local variable \'row\' referenced before assignment');
/*   788 */                     }
/*   789 */                     var $iter150 = Sk.abstr.iter(row);
/*   790 */                     $blk = 9; /* allowing case fallthrough */
/*   791 */                 case 9:
/*   792 */                     /* --- for start --- */
/*   793 */                     $ret = Sk.abstr.iternext($iter150, true);
/*   794 */                     $blk = 12; /* allowing case fallthrough */
/*   795 */                 case 12:
/*   796 */                     /* --- function return or resume suspension --- */
/*   797 */                     if ($ret && $ret.$isSuspension) {
/*   798 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 17, 6);
/*   799 */                     }
/*   800 */                     var $next151 = $ret;
/*   801 */                     if ($next151 === undefined) {
/*   802 */                         $blk = 10;
/*   803 */                         continue;
/*   804 */                     }
/*   805 */                     column = $next151;
/*   806 */                     //
/*   807 */                     // line 18:
/*   808 */                     //         _buffer_write('<td>')
/*   809 */                     //         ^
/*   810 */                     //
/*   811 */                     $currLineNo = 18;
/*   812 */                     $currColNo = 8;
/*   813 */ 
/*   814 */                     if (_buffer_write === undefined) {
/*   815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   816 */                     }
/*   817 */                     var $str152 = new Sk.builtins['str']('<td>');
/*   818 */                     $ret;
/*   819 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str152);
/*   820 */                     $blk = 13; /* allowing case fallthrough */
/*   821 */                 case 13:
/*   822 */                     /* --- function return or resume suspension --- */
/*   823 */                     if ($ret && $ret.$isSuspension) {
/*   824 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 18, 8);
/*   825 */                     }
/*   826 */                     var $call153 = $ret;
/*   827 */                     //
/*   828 */                     // line 18:
/*   829 */                     //         _buffer_write('<td>')
/*   830 */                     //         ^
/*   831 */                     //
/*   832 */                     $currLineNo = 18;
/*   833 */                     $currColNo = 8;
/*   834 */ 
/*   835 */ 
/*   836 */                     //
/*   837 */                     // line 19:
/*   838 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   839 */                     //         ^
/*   840 */                     //
/*   841 */                     $currLineNo = 19;
/*   842 */                     $currColNo = 8;
/*   843 */ 
/*   844 */                     if (_buffer_write === undefined) {
/*   845 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   846 */                     }
/*   847 */                     var $loadgbl154 = Sk.misceval.loadname('str', $gbl);
/*   848 */                     if (column === undefined) {
/*   849 */                         throw new Sk.builtin.UnboundLocalError('local variable \'column\' referenced before assignment');
/*   850 */                     }
/*   851 */                     $ret;
/*   852 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl154, column);
/*   853 */                     $blk = 14; /* allowing case fallthrough */
/*   854 */                 case 14:
/*   855 */                     /* --- function return or resume suspension --- */
/*   856 */                     if ($ret && $ret.$isSuspension) {
/*   857 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 19, 22);
/*   858 */                     }
/*   859 */                     var $call155 = $ret;
/*   860 */                     //
/*   861 */                     // line 19:
/*   862 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   863 */                     //                       ^
/*   864 */                     //
/*   865 */                     $currLineNo = 19;
/*   866 */                     $currColNo = 22;
/*   867 */ 
/*   868 */                     $ret;
/*   869 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $call155);
/*   870 */                     $blk = 15; /* allowing case fallthrough */
/*   871 */                 case 15:
/*   872 */                     /* --- function return or resume suspension --- */
/*   873 */                     if ($ret && $ret.$isSuspension) {
/*   874 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 19, 8);
/*   875 */                     }
/*   876 */                     var $call156 = $ret;
/*   877 */                     //
/*   878 */                     // line 19:
/*   879 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   880 */                     //         ^
/*   881 */                     //
/*   882 */                     $currLineNo = 19;
/*   883 */                     $currColNo = 8;
/*   884 */ 
/*   885 */ 
/*   886 */                     //
/*   887 */                     // line 20:
/*   888 */                     //         _buffer_write('</td>')
/*   889 */                     //         ^
/*   890 */                     //
/*   891 */                     $currLineNo = 20;
/*   892 */                     $currColNo = 8;
/*   893 */ 
/*   894 */                     if (_buffer_write === undefined) {
/*   895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   896 */                     }
/*   897 */                     var $str157 = new Sk.builtins['str']('</td>');
/*   898 */                     $ret;
/*   899 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str157);
/*   900 */                     $blk = 16; /* allowing case fallthrough */
/*   901 */                 case 16:
/*   902 */                     /* --- function return or resume suspension --- */
/*   903 */                     if ($ret && $ret.$isSuspension) {
/*   904 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 20, 8);
/*   905 */                     }
/*   906 */                     var $call158 = $ret;
/*   907 */                     //
/*   908 */                     // line 20:
/*   909 */                     //         _buffer_write('</td>')
/*   910 */                     //         ^
/*   911 */                     //
/*   912 */                     $currLineNo = 20;
/*   913 */                     $currColNo = 8;
/*   914 */ 
/*   915 */ 
/*   916 */                     //
/*   917 */                     // line 21:
/*   918 */                     //         _buffer_write('\n')
/*   919 */                     //         ^
/*   920 */                     //
/*   921 */                     $currLineNo = 21;
/*   922 */                     $currColNo = 8;
/*   923 */ 
/*   924 */                     if (_buffer_write === undefined) {
/*   925 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   926 */                     }
/*   927 */                     var $str159 = new Sk.builtins['str']('\n');
/*   928 */                     $ret;
/*   929 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str159);
/*   930 */                     $blk = 17; /* allowing case fallthrough */
/*   931 */                 case 17:
/*   932 */                     /* --- function return or resume suspension --- */
/*   933 */                     if ($ret && $ret.$isSuspension) {
/*   934 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 21, 8);
/*   935 */                     }
/*   936 */                     var $call160 = $ret;
/*   937 */                     //
/*   938 */                     // line 21:
/*   939 */                     //         _buffer_write('\n')
/*   940 */                     //         ^
/*   941 */                     //
/*   942 */                     $currLineNo = 21;
/*   943 */                     $currColNo = 8;
/*   944 */ 
/*   945 */                     $blk = 9; /* jump */
/*   946 */                     continue;
/*   947 */                 case 4:
/*   948 */                     /* --- for cleanup --- */
/*   949 */                     $blk = 5; /* allowing case fallthrough */
/*   950 */                 case 5:
/*   951 */                     /* --- for end --- */
/*   952 */                     //
/*   953 */                     // line 24:
/*   954 */                     //     _buffer_write('</table>')
/*   955 */                     //     ^
/*   956 */                     //
/*   957 */                     $currLineNo = 24;
/*   958 */                     $currColNo = 4;
/*   959 */ 
/*   960 */                     if (_buffer_write === undefined) {
/*   961 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   962 */                     }
/*   963 */                     var $str165 = new Sk.builtins['str']('</table>');
/*   964 */                     $ret;
/*   965 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str165);
/*   966 */                     $blk = 20; /* allowing case fallthrough */
/*   967 */                 case 20:
/*   968 */                     /* --- function return or resume suspension --- */
/*   969 */                     if ($ret && $ret.$isSuspension) {
/*   970 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 24, 4);
/*   971 */                     }
/*   972 */                     var $call166 = $ret;
/*   973 */                     //
/*   974 */                     // line 24:
/*   975 */                     //     _buffer_write('</table>')
/*   976 */                     //     ^
/*   977 */                     //
/*   978 */                     $currLineNo = 24;
/*   979 */                     $currColNo = 4;
/*   980 */ 
/*   981 */ 
/*   982 */                     //
/*   983 */                     // line 25:
/*   984 */                     //     _buffer_write('\n')
/*   985 */                     //     ^
/*   986 */                     //
/*   987 */                     $currLineNo = 25;
/*   988 */                     $currColNo = 4;
/*   989 */ 
/*   990 */                     if (_buffer_write === undefined) {
/*   991 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   992 */                     }
/*   993 */                     var $str167 = new Sk.builtins['str']('\n');
/*   994 */                     $ret;
/*   995 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str167);
/*   996 */                     $blk = 21; /* allowing case fallthrough */
/*   997 */                 case 21:
/*   998 */                     /* --- function return or resume suspension --- */
/*   999 */                     if ($ret && $ret.$isSuspension) {
/*  1000 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 25, 4);
/*  1001 */                     }
/*  1002 */                     var $call168 = $ret;
/*  1003 */                     //
/*  1004 */                     // line 25:
/*  1005 */                     //     _buffer_write('\n')
/*  1006 */                     //     ^
/*  1007 */                     //
/*  1008 */                     $currLineNo = 25;
/*  1009 */                     $currColNo = 4;
/*  1010 */ 
/*  1011 */ 
/*  1012 */                     //
/*  1013 */                     // line 26:
/*  1014 */                     //     return ''.join(_buffer)
/*  1015 */                     //     ^
/*  1016 */                     //
/*  1017 */                     $currLineNo = 26;
/*  1018 */                     $currColNo = 4;
/*  1019 */ 
/*  1020 */                     var $str169 = new Sk.builtins['str']('');
/*  1021 */                     $ret = Sk.abstr.gattr($str169, 'join', true);
/*  1022 */                     $blk = 22; /* allowing case fallthrough */
/*  1023 */                 case 22:
/*  1024 */                     /* --- function return or resume suspension --- */
/*  1025 */                     if ($ret && $ret.$isSuspension) {
/*  1026 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 26, 11);
/*  1027 */                     }
/*  1028 */                     var $lattr170 = $ret;
/*  1029 */                     $ret;
/*  1030 */                     $ret = Sk.misceval.callsimOrSuspend($lattr170, $cell._buffer);
/*  1031 */                     $blk = 23; /* allowing case fallthrough */
/*  1032 */                 case 23:
/*  1033 */                     /* --- function return or resume suspension --- */
/*  1034 */                     if ($ret && $ret.$isSuspension) {
/*  1035 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 26, 11);
/*  1036 */                     }
/*  1037 */                     var $call171 = $ret;
/*  1038 */                     //
/*  1039 */                     // line 26:
/*  1040 */                     //     return ''.join(_buffer)
/*  1041 */                     //            ^
/*  1042 */                     //
/*  1043 */                     $currLineNo = 26;
/*  1044 */                     $currColNo = 11;
/*  1045 */ 
/*  1046 */                     return $call171;
/*  1047 */                     return Sk.builtin.none.none$;
/*  1048 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1049 */                 case 10:
/*  1050 */                     /* --- for cleanup --- */
/*  1051 */                     $blk = 11; /* allowing case fallthrough */
/*  1052 */                 case 11:
/*  1053 */                     /* --- for end --- */
/*  1054 */                     //
/*  1055 */                     // line 22:
/*  1056 */                     //       _buffer_write('</tr>')
/*  1057 */                     //       ^
/*  1058 */                     //
/*  1059 */                     $currLineNo = 22;
/*  1060 */                     $currColNo = 6;
/*  1061 */ 
/*  1062 */                     if (_buffer_write === undefined) {
/*  1063 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*  1064 */                     }
/*  1065 */                     var $str161 = new Sk.builtins['str']('</tr>');
/*  1066 */                     $ret;
/*  1067 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str161);
/*  1068 */                     $blk = 18; /* allowing case fallthrough */
/*  1069 */                 case 18:
/*  1070 */                     /* --- function return or resume suspension --- */
/*  1071 */                     if ($ret && $ret.$isSuspension) {
/*  1072 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 22, 6);
/*  1073 */                     }
/*  1074 */                     var $call162 = $ret;
/*  1075 */                     //
/*  1076 */                     // line 22:
/*  1077 */                     //       _buffer_write('</tr>')
/*  1078 */                     //       ^
/*  1079 */                     //
/*  1080 */                     $currLineNo = 22;
/*  1081 */                     $currColNo = 6;
/*  1082 */ 
/*  1083 */ 
/*  1084 */                     //
/*  1085 */                     // line 23:
/*  1086 */                     //       _buffer_write('\n')
/*  1087 */                     //       ^
/*  1088 */                     //
/*  1089 */                     $currLineNo = 23;
/*  1090 */                     $currColNo = 6;
/*  1091 */ 
/*  1092 */                     if (_buffer_write === undefined) {
/*  1093 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*  1094 */                     }
/*  1095 */                     var $str163 = new Sk.builtins['str']('\n');
/*  1096 */                     $ret;
/*  1097 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str163);
/*  1098 */                     $blk = 19; /* allowing case fallthrough */
/*  1099 */                 case 19:
/*  1100 */                     /* --- function return or resume suspension --- */
/*  1101 */                     if ($ret && $ret.$isSuspension) {
/*  1102 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 23, 6);
/*  1103 */                     }
/*  1104 */                     var $call164 = $ret;
/*  1105 */                     //
/*  1106 */                     // line 23:
/*  1107 */                     //       _buffer_write('\n')
/*  1108 */                     //       ^
/*  1109 */                     //
/*  1110 */                     $currLineNo = 23;
/*  1111 */                     $currColNo = 6;
/*  1112 */ 
/*  1113 */                     $blk = 3; /* jump */
/*  1114 */                     continue;
/*  1115 */                 }
/*  1116 */             } catch (err) {
/*  1117 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1118 */                     err = new Sk.builtin.ExternalError(err);
/*  1119 */                 }
/*  1120 */                 err.traceback.push({
/*  1121 */                     lineno: $currLineNo,
/*  1122 */                     colno: $currColNo,
/*  1123 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1124 */                 });
/*  1125 */                 if ($exc.length > 0) {
/*  1126 */                     $err = err;
/*  1127 */                     $blk = $exc.pop();
/*  1128 */                     continue;
/*  1129 */                 } else {
/*  1130 */                     throw err;
/*  1131 */                 }
/*  1132 */             }
/*  1133 */         }
/*  1134 */     });
/*  1135 */     var $scope135 = (function $_buffer_write136$(str, $free) {
/*  1136 */         // has free
/*  1137 */         var str, str, $free, $lattr137;
/*  1138 */         var $wakeFromSuspension = function() {
/*  1139 */             var susp = $scope135.$wakingSuspension;
/*  1140 */             delete $scope135.$wakingSuspension;
/*  1141 */             $blk = susp.$blk;
/*  1142 */             $loc = susp.$loc;
/*  1143 */             $gbl = susp.$gbl;
/*  1144 */             $exc = susp.$exc;
/*  1145 */             $err = susp.$err;
/*  1146 */             $postfinally = susp.$postfinally;
/*  1147 */             $currLineNo = susp.$lineno;
/*  1148 */             $currColNo = susp.$colno;
/*  1149 */             Sk.lastYield = Date.now();
/*  1150 */             str = susp.$tmps.str;
/*  1151 */             $free = susp.$tmps.$free;
/*  1152 */             $lattr137 = susp.$tmps.$lattr137;
/*  1153 */             try {
/*  1154 */                 $ret = susp.child.resume();
/*  1155 */             } catch (err) {
/*  1156 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1157 */                     err = new Sk.builtin.ExternalError(err);
/*  1158 */                 }
/*  1159 */                 err.traceback.push({
/*  1160 */                     lineno: $currLineNo,
/*  1161 */                     colno: $currColNo,
/*  1162 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1163 */                 });
/*  1164 */                 if ($exc.length > 0) {
/*  1165 */                     $err = err;
/*  1166 */                     $blk = $exc.pop();
/*  1167 */                 } else {
/*  1168 */                     throw err;
/*  1169 */                 }
/*  1170 */             }
/*  1171 */         };
/*  1172 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1173 */             var susp = new Sk.misceval.Suspension();
/*  1174 */             susp.child = $child;
/*  1175 */             susp.resume = function() {
/*  1176 */                 $scope135.$wakingSuspension = susp;
/*  1177 */                 return $scope135();
/*  1178 */             };
/*  1179 */             susp.data = susp.child.data;
/*  1180 */             susp.$blk = $blk;
/*  1181 */             susp.$loc = $loc;
/*  1182 */             susp.$gbl = $gbl;
/*  1183 */             susp.$exc = $exc;
/*  1184 */             susp.$err = $err;
/*  1185 */             susp.$postfinally = $postfinally;
/*  1186 */             susp.$filename = $filename;
/*  1187 */             susp.$lineno = $lineno;
/*  1188 */             susp.$colno = $colno;
/*  1189 */             susp.optional = susp.child.optional;
/*  1190 */             susp.$tmps = {
/*  1191 */                 "str": str,
/*  1192 */                 "$free": $free,
/*  1193 */                 "$lattr137": $lattr137
/*  1194 */             };
/*  1195 */             return susp;
/*  1196 */         };
/*  1197 */         var $blk = 0,
/*  1198 */             $exc = [],
/*  1199 */             $loc = {},
/*  1200 */             $gbl = this,
/*  1201 */             $err = undefined,
/*  1202 */             $ret = undefined,
/*  1203 */             $postfinally = undefined,
/*  1204 */             $currLineNo = undefined,
/*  1205 */             $currColNo = undefined;
/*  1206 */         if (typeof Sk.execStart === 'undefined') {
/*  1207 */             Sk.execStart = Date.now()
/*  1208 */         }
/*  1209 */         if (typeof Sk.lastYield === 'undefined') {
/*  1210 */             Sk.lastYield = Date.now()
/*  1211 */         }
/*  1212 */         if ($scope135.$wakingSuspension !== undefined) {
/*  1213 */             $wakeFromSuspension();
/*  1214 */         } else {
/*  1215 */             Sk.builtin.pyCheckArgs("_buffer_write", arguments, 1, 1, false, true);
/*  1216 */         }
/*  1217 */         while (true) {
/*  1218 */             try {
/*  1219 */                 var $dateNow = Date.now();
/*  1220 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1221 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1222 */                 }
/*  1223 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1224 */                     var $susp = $saveSuspension({
/*  1225 */                         data: {
/*  1226 */                             type: 'Sk.yield'
/*  1227 */                         },
/*  1228 */                         resume: function() {}
/*  1229 */                     }, '/home/sbaxter/benchmarks/skulpt/b/main.py', $currLineNo, $currColNo);
/*  1230 */                     $susp.$blk = $blk;
/*  1231 */                     $susp.optional = true;
/*  1232 */                     return $susp;
/*  1233 */                 }
/*  1234 */                 switch ($blk) {
/*  1235 */                 case 0:
/*  1236 */                     /* --- codeobj entry --- */
/*  1237 */                     if (str === undefined) {
/*  1238 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str\' referenced before assignment');
/*  1239 */                     }
/*  1240 */ 
/*  1241 */                     //
/*  1242 */                     // line 10:
/*  1243 */                     //         _buffer.append(str)
/*  1244 */                     //         ^
/*  1245 */                     //
/*  1246 */                     $currLineNo = 10;
/*  1247 */                     $currColNo = 8;
/*  1248 */ 
/*  1249 */                     $ret = Sk.abstr.gattr($free._buffer, 'append', true);
/*  1250 */                     $blk = 1; /* allowing case fallthrough */
/*  1251 */                 case 1:
/*  1252 */                     /* --- function return or resume suspension --- */
/*  1253 */                     if ($ret && $ret.$isSuspension) {
/*  1254 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 10, 8);
/*  1255 */                     }
/*  1256 */                     var $lattr137 = $ret;
/*  1257 */                     if (str === undefined) {
/*  1258 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str\' referenced before assignment');
/*  1259 */                     }
/*  1260 */                     $ret;
/*  1261 */                     $ret = Sk.misceval.callsimOrSuspend($lattr137, str);
/*  1262 */                     $blk = 2; /* allowing case fallthrough */
/*  1263 */                 case 2:
/*  1264 */                     /* --- function return or resume suspension --- */
/*  1265 */                     if ($ret && $ret.$isSuspension) {
/*  1266 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 10, 8);
/*  1267 */                     }
/*  1268 */                     var $call138 = $ret;
/*  1269 */                     //
/*  1270 */                     // line 10:
/*  1271 */                     //         _buffer.append(str)
/*  1272 */                     //         ^
/*  1273 */                     //
/*  1274 */                     $currLineNo = 10;
/*  1275 */                     $currColNo = 8;
/*  1276 */ 
/*  1277 */                     return Sk.builtin.none.none$;
/*  1278 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1279 */                 }
/*  1280 */             } catch (err) {
/*  1281 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1282 */                     err = new Sk.builtin.ExternalError(err);
/*  1283 */                 }
/*  1284 */                 err.traceback.push({
/*  1285 */                     lineno: $currLineNo,
/*  1286 */                     colno: $currColNo,
/*  1287 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1288 */                 });
/*  1289 */                 if ($exc.length > 0) {
/*  1290 */                     $err = err;
/*  1291 */                     $blk = $exc.pop();
/*  1292 */                     continue;
/*  1293 */                 } else {
/*  1294 */                     throw err;
/*  1295 */                 }
/*  1296 */             }
/*  1297 */         }
/*  1298 */     });
/*  1299 */     return $scope120;
/*  1300 */ }();
