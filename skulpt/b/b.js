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
/*   104 */         if ($scope120.$wakingSuspension !== undefined) {
/*   105 */             $wakeFromSuspension();
/*   106 */         }
/*   107 */         if (Sk.retainGlobals) {
/*   108 */             if (Sk.globals) {
/*   109 */                 $gbl = Sk.globals;
/*   110 */                 Sk.globals = $gbl;
/*   111 */                 $loc = $gbl;
/*   112 */             } else {
/*   113 */                 Sk.globals = $gbl;
/*   114 */             }
/*   115 */         } else {
/*   116 */             Sk.globals = $gbl;
/*   117 */         }
/*   118 */         while (true) {
/*   119 */             try {
/*   120 */                 switch ($blk) {
/*   121 */                 case 0:
/*   122 */                     /* --- module entry --- */
/*   123 */                     //
/*   124 */                     // line 3:
/*   125 */                     // table = [list(range(1000)) for i in range(1000)]
/*   126 */                     // ^
/*   127 */                     //
/*   128 */                     $currLineNo = 3;
/*   129 */                     $currColNo = 0;
/*   130 */ 
/*   131 */                     var $_compr121 = new Sk.builtins['list']([]);
/*   132 */                     var $loadname122 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   133 */                     $ret;
/*   134 */                     $ret = Sk.misceval.callsimOrSuspend($loadname122, new Sk.builtin.int_(1000));
/*   135 */                     $blk = 4; /* allowing case fallthrough */
/*   136 */                 case 4:
/*   137 */                     /* --- function return or resume suspension --- */
/*   138 */                     if ($ret && $ret.$isSuspension) {
/*   139 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 36);
/*   140 */                     }
/*   141 */                     var $call123 = $ret;
/*   142 */                     //
/*   143 */                     // line 3:
/*   144 */                     // table = [list(range(1000)) for i in range(1000)]
/*   145 */                     //                                     ^
/*   146 */                     //
/*   147 */                     $currLineNo = 3;
/*   148 */                     $currColNo = 36;
/*   149 */ 
/*   150 */                     var $iter124 = Sk.abstr.iter($call123);
/*   151 */                     $blk = 1; /* allowing case fallthrough */
/*   152 */                 case 1:
/*   153 */                     /* --- list comp start --- */
/*   154 */                     $ret = Sk.abstr.iternext($iter124, true);
/*   155 */                     $blk = 5; /* allowing case fallthrough */
/*   156 */                 case 5:
/*   157 */                     /* --- function return or resume suspension --- */
/*   158 */                     if ($ret && $ret.$isSuspension) {
/*   159 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 9);
/*   160 */                     }
/*   161 */                     var $next125 = $ret;
/*   162 */                     if ($next125 === undefined) {
/*   163 */                         $blk = 3;
/*   164 */                         continue;
/*   165 */                     }
/*   166 */                     $loc.i = $next125;
/*   167 */                     var $loadname126 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   168 */                     var $loadname127 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   169 */                     $ret;
/*   170 */                     $ret = Sk.misceval.callsimOrSuspend($loadname127, new Sk.builtin.int_(1000));
/*   171 */                     $blk = 6; /* allowing case fallthrough */
/*   172 */                 case 6:
/*   173 */                     /* --- function return or resume suspension --- */
/*   174 */                     if ($ret && $ret.$isSuspension) {
/*   175 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 14);
/*   176 */                     }
/*   177 */                     var $call128 = $ret;
/*   178 */                     //
/*   179 */                     // line 3:
/*   180 */                     // table = [list(range(1000)) for i in range(1000)]
/*   181 */                     //               ^
/*   182 */                     //
/*   183 */                     $currLineNo = 3;
/*   184 */                     $currColNo = 14;
/*   185 */ 
/*   186 */                     $ret;
/*   187 */                     $ret = Sk.misceval.callsimOrSuspend($loadname126, $call128);
/*   188 */                     $blk = 7; /* allowing case fallthrough */
/*   189 */                 case 7:
/*   190 */                     /* --- function return or resume suspension --- */
/*   191 */                     if ($ret && $ret.$isSuspension) {
/*   192 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 3, 9);
/*   193 */                     }
/*   194 */                     var $call129 = $ret;
/*   195 */                     //
/*   196 */                     // line 3:
/*   197 */                     // table = [list(range(1000)) for i in range(1000)]
/*   198 */                     //          ^
/*   199 */                     //
/*   200 */                     $currLineNo = 3;
/*   201 */                     $currColNo = 9;
/*   202 */ 
/*   203 */                     $_compr121.v.push($call129);
/*   204 */                     $blk = 2; /* allowing case fallthrough */
/*   205 */                 case 2:
/*   206 */                     /* --- list comp skip --- */
/*   207 */                     $blk = 1; /* jump */
/*   208 */                     continue;
/*   209 */                 case 3:
/*   210 */                     /* --- list comp anchor --- */
/*   211 */                     $loc.table = $_compr121;
/*   212 */                     //
/*   213 */                     // line 5:
/*   214 */                     // class a(object):
/*   215 */                     // ^
/*   216 */                     //
/*   217 */                     $currLineNo = 5;
/*   218 */                     $currColNo = 0;
/*   219 */ 
/*   220 */                     var $loadname130 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   221 */                     $scope131.co_name = new Sk.builtins['str']('a');
/*   222 */                     var $built173 = Sk.misceval.buildClass($gbl, $scope131, 'a', [$loadname130]);
/*   223 */                     $loc.a = $built173;
/*   224 */                     //
/*   225 */                     // line 29:
/*   226 */                     // r = a().main(table)
/*   227 */                     // ^
/*   228 */                     //
/*   229 */                     $currLineNo = 29;
/*   230 */                     $currColNo = 0;
/*   231 */ 
/*   232 */                     var $loadname174 = $loc.a !== undefined ? $loc.a : Sk.misceval.loadname('a', $gbl);;
/*   233 */                     $ret;
/*   234 */                     $ret = Sk.misceval.callsimOrSuspend($loadname174);
/*   235 */                     $blk = 8; /* allowing case fallthrough */
/*   236 */                 case 8:
/*   237 */                     /* --- function return or resume suspension --- */
/*   238 */                     if ($ret && $ret.$isSuspension) {
/*   239 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   240 */                     }
/*   241 */                     var $call175 = $ret;
/*   242 */                     //
/*   243 */                     // line 29:
/*   244 */                     // r = a().main(table)
/*   245 */                     //     ^
/*   246 */                     //
/*   247 */                     $currLineNo = 29;
/*   248 */                     $currColNo = 4;
/*   249 */ 
/*   250 */                     $ret = Sk.abstr.gattr($call175, 'main', true);
/*   251 */                     $blk = 9; /* allowing case fallthrough */
/*   252 */                 case 9:
/*   253 */                     /* --- function return or resume suspension --- */
/*   254 */                     if ($ret && $ret.$isSuspension) {
/*   255 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   256 */                     }
/*   257 */                     var $lattr176 = $ret;
/*   258 */                     var $loadname177 = $loc.table !== undefined ? $loc.table : Sk.misceval.loadname('table', $gbl);;
/*   259 */                     $ret;
/*   260 */                     $ret = Sk.misceval.callsimOrSuspend($lattr176, $loadname177);
/*   261 */                     $blk = 10; /* allowing case fallthrough */
/*   262 */                 case 10:
/*   263 */                     /* --- function return or resume suspension --- */
/*   264 */                     if ($ret && $ret.$isSuspension) {
/*   265 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 29, 4);
/*   266 */                     }
/*   267 */                     var $call178 = $ret;
/*   268 */                     //
/*   269 */                     // line 29:
/*   270 */                     // r = a().main(table)
/*   271 */                     //     ^
/*   272 */                     //
/*   273 */                     $currLineNo = 29;
/*   274 */                     $currColNo = 4;
/*   275 */ 
/*   276 */                     $loc.r = $call178;
/*   277 */                     //
/*   278 */                     // line 30:
/*   279 */                     // if 12901045 != len(r):
/*   280 */                     // ^
/*   281 */                     //
/*   282 */                     $currLineNo = 30;
/*   283 */                     $currColNo = 0;
/*   284 */ 
/*   285 */                     var $compareres179 = null;
/*   286 */                     var $loadname180 = $loc.len !== undefined ? $loc.len : Sk.misceval.loadname('len', $gbl);;
/*   287 */                     var $loadname181 = $loc.r !== undefined ? $loc.r : Sk.misceval.loadname('r', $gbl);;
/*   288 */                     $ret;
/*   289 */                     $ret = Sk.misceval.callsimOrSuspend($loadname180, $loadname181);
/*   290 */                     $blk = 13; /* allowing case fallthrough */
/*   291 */                 case 13:
/*   292 */                     /* --- function return or resume suspension --- */
/*   293 */                     if ($ret && $ret.$isSuspension) {
/*   294 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 30, 15);
/*   295 */                     }
/*   296 */                     var $call182 = $ret;
/*   297 */                     //
/*   298 */                     // line 30:
/*   299 */                     // if 12901045 != len(r):
/*   300 */                     //                ^
/*   301 */                     //
/*   302 */                     $currLineNo = 30;
/*   303 */                     $currColNo = 15;
/*   304 */ 
/*   305 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(new Sk.builtin.int_(12901045), $call182, 'NotEq', true));
/*   306 */                     $blk = 14; /* allowing case fallthrough */
/*   307 */                 case 14:
/*   308 */                     /* --- function return or resume suspension --- */
/*   309 */                     if ($ret && $ret.$isSuspension) {
/*   310 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 30, 3);
/*   311 */                     }
/*   312 */                     $compareres179 = $ret;
/*   313 */                     var $jfalse183 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   314 */                     if ($jfalse183) { /*test failed */
/*   315 */                         $blk = 12;
/*   316 */                         continue;
/*   317 */                     }
/*   318 */                     $blk = 12; /* allowing case fallthrough */
/*   319 */                 case 12:
/*   320 */                     /* --- done --- */
/*   321 */                     var $jfalse184 = ($compareres179 === false || !Sk.misceval.isTrue($compareres179));
/*   322 */                     if ($jfalse184) { /*test failed */
/*   323 */                         $blk = 11;
/*   324 */                         continue;
/*   325 */                     }
/*   326 */                     //
/*   327 */                     // line 31:
/*   328 */                     //   raise Exception('Bad result')
/*   329 */                     //   ^
/*   330 */                     //
/*   331 */                     $currLineNo = 31;
/*   332 */                     $currColNo = 2;
/*   333 */ 
/*   334 */                     var $loadname185 = $loc.Exception !== undefined ? $loc.Exception : Sk.misceval.loadname('Exception', $gbl);;
/*   335 */                     var $str186 = new Sk.builtins['str']('Bad result');
/*   336 */                     $ret;
/*   337 */                     $ret = Sk.misceval.callsimOrSuspend($loadname185, $str186);
/*   338 */                     $blk = 15; /* allowing case fallthrough */
/*   339 */                 case 15:
/*   340 */                     /* --- function return or resume suspension --- */
/*   341 */                     if ($ret && $ret.$isSuspension) {
/*   342 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 31, 8);
/*   343 */                     }
/*   344 */                     var $call187 = $ret;
/*   345 */                     //
/*   346 */                     // line 31:
/*   347 */                     //   raise Exception('Bad result')
/*   348 */                     //         ^
/*   349 */                     //
/*   350 */                     $currLineNo = 31;
/*   351 */                     $currColNo = 8;
/*   352 */ 
/*   353 */                     throw $call187;
/*   354 */                     $blk = 11; /* allowing case fallthrough */
/*   355 */                 case 11:
/*   356 */                     /* --- end of if --- */
/*   357 */                     return $loc;
/*   358 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   359 */                 }
/*   360 */             } catch (err) {
/*   361 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   362 */                     err = new Sk.builtin.ExternalError(err);
/*   363 */                 }
/*   364 */                 err.traceback.push({
/*   365 */                     lineno: $currLineNo,
/*   366 */                     colno: $currColNo,
/*   367 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   368 */                 });
/*   369 */                 if ($exc.length > 0) {
/*   370 */                     $err = err;
/*   371 */                     $blk = $exc.pop();
/*   372 */                     continue;
/*   373 */                 } else {
/*   374 */                     throw err;
/*   375 */                 }
/*   376 */             }
/*   377 */         }
/*   378 */     });
/*   379 */     var $scope131 = (function $a$class_outer($globals, $locals, $rest) {
/*   380 */         var $gbl = $globals,
/*   381 */             $loc = $locals;
/*   382 */         (function $a$_closure() {
/*   383 */             var $blk = 0,
/*   384 */                 $exc = [],
/*   385 */                 $ret = undefined,
/*   386 */                 $postfinally = undefined,
/*   387 */                 $currLineNo = undefined,
/*   388 */                 $currColNo = undefined;
/*   389 */             while (true) {
/*   390 */                 try {
/*   391 */                     switch ($blk) {
/*   392 */                     case 0:
/*   393 */                         /* --- class entry --- */
/*   394 */                         //
/*   395 */                         // line 6:
/*   396 */                         //   def main(self, table):
/*   397 */                         //   ^
/*   398 */                         //
/*   399 */                         $currLineNo = 6;
/*   400 */                         $currColNo = 2;
/*   401 */ 
/*   402 */                         $scope132.co_name = new Sk.builtins['str']('main');
/*   403 */                         $scope132.co_varnames = ['self', 'table'];
/*   404 */                         var $funcobj172 = new Sk.builtins['function']($scope132, $gbl);
/*   405 */                         $loc.main = $funcobj172;
/*   406 */                         return;
/*   407 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   408 */                     }
/*   409 */                 } catch (err) {
/*   410 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   411 */                         err = new Sk.builtin.ExternalError(err);
/*   412 */                     }
/*   413 */                     err.traceback.push({
/*   414 */                         lineno: $currLineNo,
/*   415 */                         colno: $currColNo,
/*   416 */                         filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   417 */                     });
/*   418 */                     if ($exc.length > 0) {
/*   419 */                         $err = err;
/*   420 */                         $blk = $exc.pop();
/*   421 */                         continue;
/*   422 */                     } else {
/*   423 */                         throw err;
/*   424 */                     }
/*   425 */                 }
/*   426 */             }
/*   427 */         }).apply(null, $rest);
/*   428 */     });
/*   429 */     var $scope132 = (function $main133$(self, table) {
/*   430 */         // has cell
/*   431 */         var _buffer_write, column, row; /* locals */
/*   432 */         var _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, _buffer_write, column, column, row, row, self, table, table, $str140, $str142, $iter144, $iter144, $str146, $str148, $iter150, $iter150, $str152, $loadgbl154, $loadgbl154, $call155, $str157, $str159, $str161, $str163, $str165, $str167, $str169, $str169, $lattr170;
/*   433 */         var $wakeFromSuspension = function() {
/*   434 */             var susp = $scope132.$wakingSuspension;
/*   435 */             delete $scope132.$wakingSuspension;
/*   436 */             $blk = susp.$blk;
/*   437 */             $loc = susp.$loc;
/*   438 */             $gbl = susp.$gbl;
/*   439 */             $exc = susp.$exc;
/*   440 */             $err = susp.$err;
/*   441 */             $postfinally = susp.$postfinally;
/*   442 */             $currLineNo = susp.$lineno;
/*   443 */             $currColNo = susp.$colno;
/*   444 */             Sk.lastYield = Date.now();
/*   445 */             $cell = susp.$cell;
/*   446 */             _buffer_write = susp.$tmps._buffer_write;
/*   447 */             column = susp.$tmps.column;
/*   448 */             row = susp.$tmps.row;
/*   449 */             self = susp.$tmps.self;
/*   450 */             table = susp.$tmps.table;
/*   451 */             $str140 = susp.$tmps.$str140;
/*   452 */             $str142 = susp.$tmps.$str142;
/*   453 */             $iter144 = susp.$tmps.$iter144;
/*   454 */             $str146 = susp.$tmps.$str146;
/*   455 */             $str148 = susp.$tmps.$str148;
/*   456 */             $iter150 = susp.$tmps.$iter150;
/*   457 */             $str152 = susp.$tmps.$str152;
/*   458 */             $loadgbl154 = susp.$tmps.$loadgbl154;
/*   459 */             $call155 = susp.$tmps.$call155;
/*   460 */             $str157 = susp.$tmps.$str157;
/*   461 */             $str159 = susp.$tmps.$str159;
/*   462 */             $str161 = susp.$tmps.$str161;
/*   463 */             $str163 = susp.$tmps.$str163;
/*   464 */             $str165 = susp.$tmps.$str165;
/*   465 */             $str167 = susp.$tmps.$str167;
/*   466 */             $str169 = susp.$tmps.$str169;
/*   467 */             $lattr170 = susp.$tmps.$lattr170;
/*   468 */             try {
/*   469 */                 $ret = susp.child.resume();
/*   470 */             } catch (err) {
/*   471 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   472 */                     err = new Sk.builtin.ExternalError(err);
/*   473 */                 }
/*   474 */                 err.traceback.push({
/*   475 */                     lineno: $currLineNo,
/*   476 */                     colno: $currColNo,
/*   477 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*   478 */                 });
/*   479 */                 if ($exc.length > 0) {
/*   480 */                     $err = err;
/*   481 */                     $blk = $exc.pop();
/*   482 */                 } else {
/*   483 */                     throw err;
/*   484 */                 }
/*   485 */             }
/*   486 */         };
/*   487 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   488 */             var susp = new Sk.misceval.Suspension();
/*   489 */             susp.child = $child;
/*   490 */             susp.resume = function() {
/*   491 */                 $scope132.$wakingSuspension = susp;
/*   492 */                 return $scope132();
/*   493 */             };
/*   494 */             susp.data = susp.child.data;
/*   495 */             susp.$blk = $blk;
/*   496 */             susp.$loc = $loc;
/*   497 */             susp.$gbl = $gbl;
/*   498 */             susp.$exc = $exc;
/*   499 */             susp.$err = $err;
/*   500 */             susp.$postfinally = $postfinally;
/*   501 */             susp.$filename = $filename;
/*   502 */             susp.$lineno = $lineno;
/*   503 */             susp.$colno = $colno;
/*   504 */             susp.optional = susp.child.optional;
/*   505 */             susp.$cell = $cell;
/*   506 */             susp.$tmps = {
/*   507 */                 "_buffer_write": _buffer_write,
/*   508 */                 "column": column,
/*   509 */                 "row": row,
/*   510 */                 "self": self,
/*   511 */                 "table": table,
/*   512 */                 "$str140": $str140,
/*   513 */                 "$str142": $str142,
/*   514 */                 "$iter144": $iter144,
/*   515 */                 "$str146": $str146,
/*   516 */                 "$str148": $str148,
/*   517 */                 "$iter150": $iter150,
/*   518 */                 "$str152": $str152,
/*   519 */                 "$loadgbl154": $loadgbl154,
/*   520 */                 "$call155": $call155,
/*   521 */                 "$str157": $str157,
/*   522 */                 "$str159": $str159,
/*   523 */                 "$str161": $str161,
/*   524 */                 "$str163": $str163,
/*   525 */                 "$str165": $str165,
/*   526 */                 "$str167": $str167,
/*   527 */                 "$str169": $str169,
/*   528 */                 "$lattr170": $lattr170
/*   529 */             };
/*   530 */             return susp;
/*   531 */         };
/*   532 */         var $blk = 0,
/*   533 */             $exc = [],
/*   534 */             $loc = {},
/*   535 */             $cell = {},
/*   536 */             $gbl = this,
/*   537 */             $err = undefined,
/*   538 */             $ret = undefined,
/*   539 */             $postfinally = undefined,
/*   540 */             $currLineNo = undefined,
/*   541 */             $currColNo = undefined;
/*   542 */         if ($scope132.$wakingSuspension !== undefined) {
/*   543 */             $wakeFromSuspension();
/*   544 */         } else {
/*   545 */             Sk.builtin.pyCheckArgs("main", arguments, 2, 2, false, false);
/*   546 */         }
/*   547 */         while (true) {
/*   548 */             try {
/*   549 */                 switch ($blk) {
/*   550 */                 case 0:
/*   551 */                     /* --- codeobj entry --- */
/*   552 */                     if (self === undefined) {
/*   553 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   554 */                     }
/*   555 */                     if (table === undefined) {
/*   556 */                         throw new Sk.builtin.UnboundLocalError('local variable \'table\' referenced before assignment');
/*   557 */                     }
/*   558 */ 
/*   559 */                     //
/*   560 */                     // line 7:
/*   561 */                     //     _buffer = []
/*   562 */                     //     ^
/*   563 */                     //
/*   564 */                     $currLineNo = 7;
/*   565 */                     $currColNo = 4;
/*   566 */ 
/*   567 */                     var $loadlist134 = new Sk.builtins['list']([]);
/*   568 */                     $cell._buffer = $loadlist134;
/*   569 */                     //
/*   570 */                     // line 9:
/*   571 */                     //     def _buffer_write(str):
/*   572 */                     //     ^
/*   573 */                     //
/*   574 */                     $currLineNo = 9;
/*   575 */                     $currColNo = 4;
/*   576 */ 
/*   577 */                     $scope135.co_name = new Sk.builtins['str']('_buffer_write');
/*   578 */                     $scope135.co_varnames = ['str'];
/*   579 */                     var $funcobj139 = new Sk.builtins['function']($scope135, $gbl, $cell);
/*   580 */                     _buffer_write = $funcobj139;
/*   581 */                     //
/*   582 */                     // line 12:
/*   583 */                     //     _buffer_write('<table xmlns:py="http://spitfire/">')
/*   584 */                     //     ^
/*   585 */                     //
/*   586 */                     $currLineNo = 12;
/*   587 */                     $currColNo = 4;
/*   588 */ 
/*   589 */                     if (_buffer_write === undefined) {
/*   590 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   591 */                     }
/*   592 */                     var $str140 = new Sk.builtins['str']('<table xmlns:py="http://spitfire/">');
/*   593 */                     $ret;
/*   594 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str140);
/*   595 */                     $blk = 1; /* allowing case fallthrough */
/*   596 */                 case 1:
/*   597 */                     /* --- function return or resume suspension --- */
/*   598 */                     if ($ret && $ret.$isSuspension) {
/*   599 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 12, 4);
/*   600 */                     }
/*   601 */                     var $call141 = $ret;
/*   602 */                     //
/*   603 */                     // line 12:
/*   604 */                     //     _buffer_write('<table xmlns:py="http://spitfire/">')
/*   605 */                     //     ^
/*   606 */                     //
/*   607 */                     $currLineNo = 12;
/*   608 */                     $currColNo = 4;
/*   609 */ 
/*   610 */ 
/*   611 */                     //
/*   612 */                     // line 13:
/*   613 */                     //     _buffer_write('\n')
/*   614 */                     //     ^
/*   615 */                     //
/*   616 */                     $currLineNo = 13;
/*   617 */                     $currColNo = 4;
/*   618 */ 
/*   619 */                     if (_buffer_write === undefined) {
/*   620 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   621 */                     }
/*   622 */                     var $str142 = new Sk.builtins['str']('\n');
/*   623 */                     $ret;
/*   624 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str142);
/*   625 */                     $blk = 2; /* allowing case fallthrough */
/*   626 */                 case 2:
/*   627 */                     /* --- function return or resume suspension --- */
/*   628 */                     if ($ret && $ret.$isSuspension) {
/*   629 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 13, 4);
/*   630 */                     }
/*   631 */                     var $call143 = $ret;
/*   632 */                     //
/*   633 */                     // line 13:
/*   634 */                     //     _buffer_write('\n')
/*   635 */                     //     ^
/*   636 */                     //
/*   637 */                     $currLineNo = 13;
/*   638 */                     $currColNo = 4;
/*   639 */ 
/*   640 */ 
/*   641 */                     //
/*   642 */                     // line 14:
/*   643 */                     //     for row in table:
/*   644 */                     //     ^
/*   645 */                     //
/*   646 */                     $currLineNo = 14;
/*   647 */                     $currColNo = 4;
/*   648 */ 
/*   649 */                     if (table === undefined) {
/*   650 */                         throw new Sk.builtin.UnboundLocalError('local variable \'table\' referenced before assignment');
/*   651 */                     }
/*   652 */                     var $iter144 = Sk.abstr.iter(table);
/*   653 */                     $blk = 3; /* allowing case fallthrough */
/*   654 */                 case 3:
/*   655 */                     /* --- for start --- */
/*   656 */                     $ret = Sk.abstr.iternext($iter144, true);
/*   657 */                     $blk = 6; /* allowing case fallthrough */
/*   658 */                 case 6:
/*   659 */                     /* --- function return or resume suspension --- */
/*   660 */                     if ($ret && $ret.$isSuspension) {
/*   661 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 14, 4);
/*   662 */                     }
/*   663 */                     var $next145 = $ret;
/*   664 */                     if ($next145 === undefined) {
/*   665 */                         $blk = 4;
/*   666 */                         continue;
/*   667 */                     }
/*   668 */                     row = $next145;
/*   669 */                     //
/*   670 */                     // line 15:
/*   671 */                     //       _buffer_write('<tr>')
/*   672 */                     //       ^
/*   673 */                     //
/*   674 */                     $currLineNo = 15;
/*   675 */                     $currColNo = 6;
/*   676 */ 
/*   677 */                     if (_buffer_write === undefined) {
/*   678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   679 */                     }
/*   680 */                     var $str146 = new Sk.builtins['str']('<tr>');
/*   681 */                     $ret;
/*   682 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str146);
/*   683 */                     $blk = 7; /* allowing case fallthrough */
/*   684 */                 case 7:
/*   685 */                     /* --- function return or resume suspension --- */
/*   686 */                     if ($ret && $ret.$isSuspension) {
/*   687 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 15, 6);
/*   688 */                     }
/*   689 */                     var $call147 = $ret;
/*   690 */                     //
/*   691 */                     // line 15:
/*   692 */                     //       _buffer_write('<tr>')
/*   693 */                     //       ^
/*   694 */                     //
/*   695 */                     $currLineNo = 15;
/*   696 */                     $currColNo = 6;
/*   697 */ 
/*   698 */ 
/*   699 */                     //
/*   700 */                     // line 16:
/*   701 */                     //       _buffer_write('\n')
/*   702 */                     //       ^
/*   703 */                     //
/*   704 */                     $currLineNo = 16;
/*   705 */                     $currColNo = 6;
/*   706 */ 
/*   707 */                     if (_buffer_write === undefined) {
/*   708 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   709 */                     }
/*   710 */                     var $str148 = new Sk.builtins['str']('\n');
/*   711 */                     $ret;
/*   712 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str148);
/*   713 */                     $blk = 8; /* allowing case fallthrough */
/*   714 */                 case 8:
/*   715 */                     /* --- function return or resume suspension --- */
/*   716 */                     if ($ret && $ret.$isSuspension) {
/*   717 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 16, 6);
/*   718 */                     }
/*   719 */                     var $call149 = $ret;
/*   720 */                     //
/*   721 */                     // line 16:
/*   722 */                     //       _buffer_write('\n')
/*   723 */                     //       ^
/*   724 */                     //
/*   725 */                     $currLineNo = 16;
/*   726 */                     $currColNo = 6;
/*   727 */ 
/*   728 */ 
/*   729 */                     //
/*   730 */                     // line 17:
/*   731 */                     //       for column in row:
/*   732 */                     //       ^
/*   733 */                     //
/*   734 */                     $currLineNo = 17;
/*   735 */                     $currColNo = 6;
/*   736 */ 
/*   737 */                     if (row === undefined) {
/*   738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'row\' referenced before assignment');
/*   739 */                     }
/*   740 */                     var $iter150 = Sk.abstr.iter(row);
/*   741 */                     $blk = 9; /* allowing case fallthrough */
/*   742 */                 case 9:
/*   743 */                     /* --- for start --- */
/*   744 */                     $ret = Sk.abstr.iternext($iter150, true);
/*   745 */                     $blk = 12; /* allowing case fallthrough */
/*   746 */                 case 12:
/*   747 */                     /* --- function return or resume suspension --- */
/*   748 */                     if ($ret && $ret.$isSuspension) {
/*   749 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 17, 6);
/*   750 */                     }
/*   751 */                     var $next151 = $ret;
/*   752 */                     if ($next151 === undefined) {
/*   753 */                         $blk = 10;
/*   754 */                         continue;
/*   755 */                     }
/*   756 */                     column = $next151;
/*   757 */                     //
/*   758 */                     // line 18:
/*   759 */                     //         _buffer_write('<td>')
/*   760 */                     //         ^
/*   761 */                     //
/*   762 */                     $currLineNo = 18;
/*   763 */                     $currColNo = 8;
/*   764 */ 
/*   765 */                     if (_buffer_write === undefined) {
/*   766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   767 */                     }
/*   768 */                     var $str152 = new Sk.builtins['str']('<td>');
/*   769 */                     $ret;
/*   770 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str152);
/*   771 */                     $blk = 13; /* allowing case fallthrough */
/*   772 */                 case 13:
/*   773 */                     /* --- function return or resume suspension --- */
/*   774 */                     if ($ret && $ret.$isSuspension) {
/*   775 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 18, 8);
/*   776 */                     }
/*   777 */                     var $call153 = $ret;
/*   778 */                     //
/*   779 */                     // line 18:
/*   780 */                     //         _buffer_write('<td>')
/*   781 */                     //         ^
/*   782 */                     //
/*   783 */                     $currLineNo = 18;
/*   784 */                     $currColNo = 8;
/*   785 */ 
/*   786 */ 
/*   787 */                     //
/*   788 */                     // line 19:
/*   789 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   790 */                     //         ^
/*   791 */                     //
/*   792 */                     $currLineNo = 19;
/*   793 */                     $currColNo = 8;
/*   794 */ 
/*   795 */                     if (_buffer_write === undefined) {
/*   796 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   797 */                     }
/*   798 */                     var $loadgbl154 = Sk.misceval.loadname('str', $gbl);
/*   799 */                     if (column === undefined) {
/*   800 */                         throw new Sk.builtin.UnboundLocalError('local variable \'column\' referenced before assignment');
/*   801 */                     }
/*   802 */                     $ret;
/*   803 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl154, column);
/*   804 */                     $blk = 14; /* allowing case fallthrough */
/*   805 */                 case 14:
/*   806 */                     /* --- function return or resume suspension --- */
/*   807 */                     if ($ret && $ret.$isSuspension) {
/*   808 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 19, 22);
/*   809 */                     }
/*   810 */                     var $call155 = $ret;
/*   811 */                     //
/*   812 */                     // line 19:
/*   813 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   814 */                     //                       ^
/*   815 */                     //
/*   816 */                     $currLineNo = 19;
/*   817 */                     $currColNo = 22;
/*   818 */ 
/*   819 */                     $ret;
/*   820 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $call155);
/*   821 */                     $blk = 15; /* allowing case fallthrough */
/*   822 */                 case 15:
/*   823 */                     /* --- function return or resume suspension --- */
/*   824 */                     if ($ret && $ret.$isSuspension) {
/*   825 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 19, 8);
/*   826 */                     }
/*   827 */                     var $call156 = $ret;
/*   828 */                     //
/*   829 */                     // line 19:
/*   830 */                     //         _buffer_write(str(column)) # AG: Removed string interpolation for Transcrypt
/*   831 */                     //         ^
/*   832 */                     //
/*   833 */                     $currLineNo = 19;
/*   834 */                     $currColNo = 8;
/*   835 */ 
/*   836 */ 
/*   837 */                     //
/*   838 */                     // line 20:
/*   839 */                     //         _buffer_write('</td>')
/*   840 */                     //         ^
/*   841 */                     //
/*   842 */                     $currLineNo = 20;
/*   843 */                     $currColNo = 8;
/*   844 */ 
/*   845 */                     if (_buffer_write === undefined) {
/*   846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   847 */                     }
/*   848 */                     var $str157 = new Sk.builtins['str']('</td>');
/*   849 */                     $ret;
/*   850 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str157);
/*   851 */                     $blk = 16; /* allowing case fallthrough */
/*   852 */                 case 16:
/*   853 */                     /* --- function return or resume suspension --- */
/*   854 */                     if ($ret && $ret.$isSuspension) {
/*   855 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 20, 8);
/*   856 */                     }
/*   857 */                     var $call158 = $ret;
/*   858 */                     //
/*   859 */                     // line 20:
/*   860 */                     //         _buffer_write('</td>')
/*   861 */                     //         ^
/*   862 */                     //
/*   863 */                     $currLineNo = 20;
/*   864 */                     $currColNo = 8;
/*   865 */ 
/*   866 */ 
/*   867 */                     //
/*   868 */                     // line 21:
/*   869 */                     //         _buffer_write('\n')
/*   870 */                     //         ^
/*   871 */                     //
/*   872 */                     $currLineNo = 21;
/*   873 */                     $currColNo = 8;
/*   874 */ 
/*   875 */                     if (_buffer_write === undefined) {
/*   876 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   877 */                     }
/*   878 */                     var $str159 = new Sk.builtins['str']('\n');
/*   879 */                     $ret;
/*   880 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str159);
/*   881 */                     $blk = 17; /* allowing case fallthrough */
/*   882 */                 case 17:
/*   883 */                     /* --- function return or resume suspension --- */
/*   884 */                     if ($ret && $ret.$isSuspension) {
/*   885 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 21, 8);
/*   886 */                     }
/*   887 */                     var $call160 = $ret;
/*   888 */                     //
/*   889 */                     // line 21:
/*   890 */                     //         _buffer_write('\n')
/*   891 */                     //         ^
/*   892 */                     //
/*   893 */                     $currLineNo = 21;
/*   894 */                     $currColNo = 8;
/*   895 */ 
/*   896 */                     $blk = 9; /* jump */
/*   897 */                     continue;
/*   898 */                 case 4:
/*   899 */                     /* --- for cleanup --- */
/*   900 */                     $blk = 5; /* allowing case fallthrough */
/*   901 */                 case 5:
/*   902 */                     /* --- for end --- */
/*   903 */                     //
/*   904 */                     // line 24:
/*   905 */                     //     _buffer_write('</table>')
/*   906 */                     //     ^
/*   907 */                     //
/*   908 */                     $currLineNo = 24;
/*   909 */                     $currColNo = 4;
/*   910 */ 
/*   911 */                     if (_buffer_write === undefined) {
/*   912 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   913 */                     }
/*   914 */                     var $str165 = new Sk.builtins['str']('</table>');
/*   915 */                     $ret;
/*   916 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str165);
/*   917 */                     $blk = 20; /* allowing case fallthrough */
/*   918 */                 case 20:
/*   919 */                     /* --- function return or resume suspension --- */
/*   920 */                     if ($ret && $ret.$isSuspension) {
/*   921 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 24, 4);
/*   922 */                     }
/*   923 */                     var $call166 = $ret;
/*   924 */                     //
/*   925 */                     // line 24:
/*   926 */                     //     _buffer_write('</table>')
/*   927 */                     //     ^
/*   928 */                     //
/*   929 */                     $currLineNo = 24;
/*   930 */                     $currColNo = 4;
/*   931 */ 
/*   932 */ 
/*   933 */                     //
/*   934 */                     // line 25:
/*   935 */                     //     _buffer_write('\n')
/*   936 */                     //     ^
/*   937 */                     //
/*   938 */                     $currLineNo = 25;
/*   939 */                     $currColNo = 4;
/*   940 */ 
/*   941 */                     if (_buffer_write === undefined) {
/*   942 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*   943 */                     }
/*   944 */                     var $str167 = new Sk.builtins['str']('\n');
/*   945 */                     $ret;
/*   946 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str167);
/*   947 */                     $blk = 21; /* allowing case fallthrough */
/*   948 */                 case 21:
/*   949 */                     /* --- function return or resume suspension --- */
/*   950 */                     if ($ret && $ret.$isSuspension) {
/*   951 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 25, 4);
/*   952 */                     }
/*   953 */                     var $call168 = $ret;
/*   954 */                     //
/*   955 */                     // line 25:
/*   956 */                     //     _buffer_write('\n')
/*   957 */                     //     ^
/*   958 */                     //
/*   959 */                     $currLineNo = 25;
/*   960 */                     $currColNo = 4;
/*   961 */ 
/*   962 */ 
/*   963 */                     //
/*   964 */                     // line 26:
/*   965 */                     //     return ''.join(_buffer)
/*   966 */                     //     ^
/*   967 */                     //
/*   968 */                     $currLineNo = 26;
/*   969 */                     $currColNo = 4;
/*   970 */ 
/*   971 */                     var $str169 = new Sk.builtins['str']('');
/*   972 */                     $ret = Sk.abstr.gattr($str169, 'join', true);
/*   973 */                     $blk = 22; /* allowing case fallthrough */
/*   974 */                 case 22:
/*   975 */                     /* --- function return or resume suspension --- */
/*   976 */                     if ($ret && $ret.$isSuspension) {
/*   977 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 26, 11);
/*   978 */                     }
/*   979 */                     var $lattr170 = $ret;
/*   980 */                     $ret;
/*   981 */                     $ret = Sk.misceval.callsimOrSuspend($lattr170, $cell._buffer);
/*   982 */                     $blk = 23; /* allowing case fallthrough */
/*   983 */                 case 23:
/*   984 */                     /* --- function return or resume suspension --- */
/*   985 */                     if ($ret && $ret.$isSuspension) {
/*   986 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 26, 11);
/*   987 */                     }
/*   988 */                     var $call171 = $ret;
/*   989 */                     //
/*   990 */                     // line 26:
/*   991 */                     //     return ''.join(_buffer)
/*   992 */                     //            ^
/*   993 */                     //
/*   994 */                     $currLineNo = 26;
/*   995 */                     $currColNo = 11;
/*   996 */ 
/*   997 */                     return $call171;
/*   998 */                     return Sk.builtin.none.none$;
/*   999 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1000 */                 case 10:
/*  1001 */                     /* --- for cleanup --- */
/*  1002 */                     $blk = 11; /* allowing case fallthrough */
/*  1003 */                 case 11:
/*  1004 */                     /* --- for end --- */
/*  1005 */                     //
/*  1006 */                     // line 22:
/*  1007 */                     //       _buffer_write('</tr>')
/*  1008 */                     //       ^
/*  1009 */                     //
/*  1010 */                     $currLineNo = 22;
/*  1011 */                     $currColNo = 6;
/*  1012 */ 
/*  1013 */                     if (_buffer_write === undefined) {
/*  1014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*  1015 */                     }
/*  1016 */                     var $str161 = new Sk.builtins['str']('</tr>');
/*  1017 */                     $ret;
/*  1018 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str161);
/*  1019 */                     $blk = 18; /* allowing case fallthrough */
/*  1020 */                 case 18:
/*  1021 */                     /* --- function return or resume suspension --- */
/*  1022 */                     if ($ret && $ret.$isSuspension) {
/*  1023 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 22, 6);
/*  1024 */                     }
/*  1025 */                     var $call162 = $ret;
/*  1026 */                     //
/*  1027 */                     // line 22:
/*  1028 */                     //       _buffer_write('</tr>')
/*  1029 */                     //       ^
/*  1030 */                     //
/*  1031 */                     $currLineNo = 22;
/*  1032 */                     $currColNo = 6;
/*  1033 */ 
/*  1034 */ 
/*  1035 */                     //
/*  1036 */                     // line 23:
/*  1037 */                     //       _buffer_write('\n')
/*  1038 */                     //       ^
/*  1039 */                     //
/*  1040 */                     $currLineNo = 23;
/*  1041 */                     $currColNo = 6;
/*  1042 */ 
/*  1043 */                     if (_buffer_write === undefined) {
/*  1044 */                         throw new Sk.builtin.UnboundLocalError('local variable \'_buffer_write\' referenced before assignment');
/*  1045 */                     }
/*  1046 */                     var $str163 = new Sk.builtins['str']('\n');
/*  1047 */                     $ret;
/*  1048 */                     $ret = Sk.misceval.callsimOrSuspend(_buffer_write, $str163);
/*  1049 */                     $blk = 19; /* allowing case fallthrough */
/*  1050 */                 case 19:
/*  1051 */                     /* --- function return or resume suspension --- */
/*  1052 */                     if ($ret && $ret.$isSuspension) {
/*  1053 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 23, 6);
/*  1054 */                     }
/*  1055 */                     var $call164 = $ret;
/*  1056 */                     //
/*  1057 */                     // line 23:
/*  1058 */                     //       _buffer_write('\n')
/*  1059 */                     //       ^
/*  1060 */                     //
/*  1061 */                     $currLineNo = 23;
/*  1062 */                     $currColNo = 6;
/*  1063 */ 
/*  1064 */                     $blk = 3; /* jump */
/*  1065 */                     continue;
/*  1066 */                 }
/*  1067 */             } catch (err) {
/*  1068 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1069 */                     err = new Sk.builtin.ExternalError(err);
/*  1070 */                 }
/*  1071 */                 err.traceback.push({
/*  1072 */                     lineno: $currLineNo,
/*  1073 */                     colno: $currColNo,
/*  1074 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1075 */                 });
/*  1076 */                 if ($exc.length > 0) {
/*  1077 */                     $err = err;
/*  1078 */                     $blk = $exc.pop();
/*  1079 */                     continue;
/*  1080 */                 } else {
/*  1081 */                     throw err;
/*  1082 */                 }
/*  1083 */             }
/*  1084 */         }
/*  1085 */     });
/*  1086 */     var $scope135 = (function $_buffer_write136$(str, $free) {
/*  1087 */         // has free
/*  1088 */         var str, str, $free, $lattr137;
/*  1089 */         var $wakeFromSuspension = function() {
/*  1090 */             var susp = $scope135.$wakingSuspension;
/*  1091 */             delete $scope135.$wakingSuspension;
/*  1092 */             $blk = susp.$blk;
/*  1093 */             $loc = susp.$loc;
/*  1094 */             $gbl = susp.$gbl;
/*  1095 */             $exc = susp.$exc;
/*  1096 */             $err = susp.$err;
/*  1097 */             $postfinally = susp.$postfinally;
/*  1098 */             $currLineNo = susp.$lineno;
/*  1099 */             $currColNo = susp.$colno;
/*  1100 */             Sk.lastYield = Date.now();
/*  1101 */             str = susp.$tmps.str;
/*  1102 */             $free = susp.$tmps.$free;
/*  1103 */             $lattr137 = susp.$tmps.$lattr137;
/*  1104 */             try {
/*  1105 */                 $ret = susp.child.resume();
/*  1106 */             } catch (err) {
/*  1107 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1108 */                     err = new Sk.builtin.ExternalError(err);
/*  1109 */                 }
/*  1110 */                 err.traceback.push({
/*  1111 */                     lineno: $currLineNo,
/*  1112 */                     colno: $currColNo,
/*  1113 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1114 */                 });
/*  1115 */                 if ($exc.length > 0) {
/*  1116 */                     $err = err;
/*  1117 */                     $blk = $exc.pop();
/*  1118 */                 } else {
/*  1119 */                     throw err;
/*  1120 */                 }
/*  1121 */             }
/*  1122 */         };
/*  1123 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1124 */             var susp = new Sk.misceval.Suspension();
/*  1125 */             susp.child = $child;
/*  1126 */             susp.resume = function() {
/*  1127 */                 $scope135.$wakingSuspension = susp;
/*  1128 */                 return $scope135();
/*  1129 */             };
/*  1130 */             susp.data = susp.child.data;
/*  1131 */             susp.$blk = $blk;
/*  1132 */             susp.$loc = $loc;
/*  1133 */             susp.$gbl = $gbl;
/*  1134 */             susp.$exc = $exc;
/*  1135 */             susp.$err = $err;
/*  1136 */             susp.$postfinally = $postfinally;
/*  1137 */             susp.$filename = $filename;
/*  1138 */             susp.$lineno = $lineno;
/*  1139 */             susp.$colno = $colno;
/*  1140 */             susp.optional = susp.child.optional;
/*  1141 */             susp.$tmps = {
/*  1142 */                 "str": str,
/*  1143 */                 "$free": $free,
/*  1144 */                 "$lattr137": $lattr137
/*  1145 */             };
/*  1146 */             return susp;
/*  1147 */         };
/*  1148 */         var $blk = 0,
/*  1149 */             $exc = [],
/*  1150 */             $loc = {},
/*  1151 */             $gbl = this,
/*  1152 */             $err = undefined,
/*  1153 */             $ret = undefined,
/*  1154 */             $postfinally = undefined,
/*  1155 */             $currLineNo = undefined,
/*  1156 */             $currColNo = undefined;
/*  1157 */         if ($scope135.$wakingSuspension !== undefined) {
/*  1158 */             $wakeFromSuspension();
/*  1159 */         } else {
/*  1160 */             Sk.builtin.pyCheckArgs("_buffer_write", arguments, 1, 1, false, true);
/*  1161 */         }
/*  1162 */         while (true) {
/*  1163 */             try {
/*  1164 */                 switch ($blk) {
/*  1165 */                 case 0:
/*  1166 */                     /* --- codeobj entry --- */
/*  1167 */                     if (str === undefined) {
/*  1168 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str\' referenced before assignment');
/*  1169 */                     }
/*  1170 */ 
/*  1171 */                     //
/*  1172 */                     // line 10:
/*  1173 */                     //         _buffer.append(str)
/*  1174 */                     //         ^
/*  1175 */                     //
/*  1176 */                     $currLineNo = 10;
/*  1177 */                     $currColNo = 8;
/*  1178 */ 
/*  1179 */                     $ret = Sk.abstr.gattr($free._buffer, 'append', true);
/*  1180 */                     $blk = 1; /* allowing case fallthrough */
/*  1181 */                 case 1:
/*  1182 */                     /* --- function return or resume suspension --- */
/*  1183 */                     if ($ret && $ret.$isSuspension) {
/*  1184 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 10, 8);
/*  1185 */                     }
/*  1186 */                     var $lattr137 = $ret;
/*  1187 */                     if (str === undefined) {
/*  1188 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str\' referenced before assignment');
/*  1189 */                     }
/*  1190 */                     $ret;
/*  1191 */                     $ret = Sk.misceval.callsimOrSuspend($lattr137, str);
/*  1192 */                     $blk = 2; /* allowing case fallthrough */
/*  1193 */                 case 2:
/*  1194 */                     /* --- function return or resume suspension --- */
/*  1195 */                     if ($ret && $ret.$isSuspension) {
/*  1196 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/b/main.py', 10, 8);
/*  1197 */                     }
/*  1198 */                     var $call138 = $ret;
/*  1199 */                     //
/*  1200 */                     // line 10:
/*  1201 */                     //         _buffer.append(str)
/*  1202 */                     //         ^
/*  1203 */                     //
/*  1204 */                     $currLineNo = 10;
/*  1205 */                     $currColNo = 8;
/*  1206 */ 
/*  1207 */                     return Sk.builtin.none.none$;
/*  1208 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1209 */                 }
/*  1210 */             } catch (err) {
/*  1211 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1212 */                     err = new Sk.builtin.ExternalError(err);
/*  1213 */                 }
/*  1214 */                 err.traceback.push({
/*  1215 */                     lineno: $currLineNo,
/*  1216 */                     colno: $currColNo,
/*  1217 */                     filename: '/home/sbaxter/benchmarks/skulpt/b/main.py'
/*  1218 */                 });
/*  1219 */                 if ($exc.length > 0) {
/*  1220 */                     $err = err;
/*  1221 */                     $blk = $exc.pop();
/*  1222 */                     continue;
/*  1223 */                 } else {
/*  1224 */                     throw err;
/*  1225 */                 }
/*  1226 */             }
/*  1227 */         }
/*  1228 */     });
/*  1229 */     return $scope120;
/*  1230 */ }();
