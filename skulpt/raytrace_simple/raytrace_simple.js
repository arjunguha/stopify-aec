/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname315, $loadname315, $call316, $loadname317, $loadname318, $loadname318, $call319, $loadname320, $loadname321, $loadname321, $call322, $loadname323, $loadname324, $loadname324, $call325, $loadname326, $loadname327, $loadname327, $lattr328, $loadname327, $lattr328, $lattr329, $loadname330, $loadname327, $lattr328, $lattr329, $loadname330, $lattr331, $loadname327, $lattr328, $lattr329, $loadname330, $lattr331, $call332, $compareres333, $loadname334, $loadname327, $lattr328, $lattr329, $loadname330, $lattr331, $call332, $compareres333, $loadname334, $lattr335, $loadname338, $loadname338, $call339, $loadname338, $call339, $lattr340, $loadname341, $loadname338, $call339, $lattr340, $loadname341, $lattr342, $loadname338, $call339, $lattr340, $loadname341, $lattr342, $call343, $compareres344, $loadname345, $loadname338, $call339, $lattr340, $loadname341, $lattr342, $call343, $compareres344, $loadname345, $call346, $loadname554, $loadname554, $call555, $loadname556, $loadname557, $loadname559, $loadname1093;
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
/*    16 */             $loadname315 = susp.$tmps.$loadname315;
/*    17 */             $call316 = susp.$tmps.$call316;
/*    18 */             $loadname317 = susp.$tmps.$loadname317;
/*    19 */             $loadname318 = susp.$tmps.$loadname318;
/*    20 */             $call319 = susp.$tmps.$call319;
/*    21 */             $loadname320 = susp.$tmps.$loadname320;
/*    22 */             $loadname321 = susp.$tmps.$loadname321;
/*    23 */             $call322 = susp.$tmps.$call322;
/*    24 */             $loadname323 = susp.$tmps.$loadname323;
/*    25 */             $loadname324 = susp.$tmps.$loadname324;
/*    26 */             $call325 = susp.$tmps.$call325;
/*    27 */             $loadname326 = susp.$tmps.$loadname326;
/*    28 */             $loadname327 = susp.$tmps.$loadname327;
/*    29 */             $lattr328 = susp.$tmps.$lattr328;
/*    30 */             $lattr329 = susp.$tmps.$lattr329;
/*    31 */             $loadname330 = susp.$tmps.$loadname330;
/*    32 */             $lattr331 = susp.$tmps.$lattr331;
/*    33 */             $call332 = susp.$tmps.$call332;
/*    34 */             $compareres333 = susp.$tmps.$compareres333;
/*    35 */             $loadname334 = susp.$tmps.$loadname334;
/*    36 */             $lattr335 = susp.$tmps.$lattr335;
/*    37 */             $loadname338 = susp.$tmps.$loadname338;
/*    38 */             $call339 = susp.$tmps.$call339;
/*    39 */             $lattr340 = susp.$tmps.$lattr340;
/*    40 */             $loadname341 = susp.$tmps.$loadname341;
/*    41 */             $lattr342 = susp.$tmps.$lattr342;
/*    42 */             $call343 = susp.$tmps.$call343;
/*    43 */             $compareres344 = susp.$tmps.$compareres344;
/*    44 */             $loadname345 = susp.$tmps.$loadname345;
/*    45 */             $call346 = susp.$tmps.$call346;
/*    46 */             $loadname554 = susp.$tmps.$loadname554;
/*    47 */             $call555 = susp.$tmps.$call555;
/*    48 */             $loadname556 = susp.$tmps.$loadname556;
/*    49 */             $loadname557 = susp.$tmps.$loadname557;
/*    50 */             $loadname559 = susp.$tmps.$loadname559;
/*    51 */             $loadname1093 = susp.$tmps.$loadname1093;
/*    52 */             try {
/*    53 */                 $ret = susp.child.resume();
/*    54 */             } catch (err) {
/*    55 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    56 */                     err = new Sk.builtin.ExternalError(err);
/*    57 */                 }
/*    58 */                 err.traceback.push({
/*    59 */                     lineno: $currLineNo,
/*    60 */                     colno: $currColNo,
/*    61 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*    62 */                 });
/*    63 */                 if ($exc.length > 0) {
/*    64 */                     $err = err;
/*    65 */                     $blk = $exc.pop();
/*    66 */                 } else {
/*    67 */                     throw err;
/*    68 */                 }
/*    69 */             }
/*    70 */         };
/*    71 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    72 */             var susp = new Sk.misceval.Suspension();
/*    73 */             susp.child = $child;
/*    74 */             susp.resume = function() {
/*    75 */                 $scope120.$wakingSuspension = susp;
/*    76 */                 return $scope120();
/*    77 */             };
/*    78 */             susp.data = susp.child.data;
/*    79 */             susp.$blk = $blk;
/*    80 */             susp.$loc = $loc;
/*    81 */             susp.$gbl = $gbl;
/*    82 */             susp.$exc = $exc;
/*    83 */             susp.$err = $err;
/*    84 */             susp.$postfinally = $postfinally;
/*    85 */             susp.$filename = $filename;
/*    86 */             susp.$lineno = $lineno;
/*    87 */             susp.$colno = $colno;
/*    88 */             susp.optional = susp.child.optional;
/*    89 */             susp.$tmps = {
/*    90 */                 "$loadname315": $loadname315,
/*    91 */                 "$call316": $call316,
/*    92 */                 "$loadname317": $loadname317,
/*    93 */                 "$loadname318": $loadname318,
/*    94 */                 "$call319": $call319,
/*    95 */                 "$loadname320": $loadname320,
/*    96 */                 "$loadname321": $loadname321,
/*    97 */                 "$call322": $call322,
/*    98 */                 "$loadname323": $loadname323,
/*    99 */                 "$loadname324": $loadname324,
/*   100 */                 "$call325": $call325,
/*   101 */                 "$loadname326": $loadname326,
/*   102 */                 "$loadname327": $loadname327,
/*   103 */                 "$lattr328": $lattr328,
/*   104 */                 "$lattr329": $lattr329,
/*   105 */                 "$loadname330": $loadname330,
/*   106 */                 "$lattr331": $lattr331,
/*   107 */                 "$call332": $call332,
/*   108 */                 "$compareres333": $compareres333,
/*   109 */                 "$loadname334": $loadname334,
/*   110 */                 "$lattr335": $lattr335,
/*   111 */                 "$loadname338": $loadname338,
/*   112 */                 "$call339": $call339,
/*   113 */                 "$lattr340": $lattr340,
/*   114 */                 "$loadname341": $loadname341,
/*   115 */                 "$lattr342": $lattr342,
/*   116 */                 "$call343": $call343,
/*   117 */                 "$compareres344": $compareres344,
/*   118 */                 "$loadname345": $loadname345,
/*   119 */                 "$call346": $call346,
/*   120 */                 "$loadname554": $loadname554,
/*   121 */                 "$call555": $call555,
/*   122 */                 "$loadname556": $loadname556,
/*   123 */                 "$loadname557": $loadname557,
/*   124 */                 "$loadname559": $loadname559,
/*   125 */                 "$loadname1093": $loadname1093
/*   126 */             };
/*   127 */             return susp;
/*   128 */         };
/*   129 */         var $gbl = {},
/*   130 */             $blk = 0,
/*   131 */             $exc = [],
/*   132 */             $loc = $gbl,
/*   133 */             $err = undefined;
/*   134 */         $gbl.__name__ = $modname;
/*   135 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py');
/*   136 */         var $ret = undefined,
/*   137 */             $postfinally = undefined,
/*   138 */             $currLineNo = undefined,
/*   139 */             $currColNo = undefined;
/*   140 */         if ($scope120.$wakingSuspension !== undefined) {
/*   141 */             $wakeFromSuspension();
/*   142 */         }
/*   143 */         if (Sk.retainGlobals) {
/*   144 */             if (Sk.globals) {
/*   145 */                 $gbl = Sk.globals;
/*   146 */                 Sk.globals = $gbl;
/*   147 */                 $loc = $gbl;
/*   148 */             } else {
/*   149 */                 Sk.globals = $gbl;
/*   150 */             }
/*   151 */         } else {
/*   152 */             Sk.globals = $gbl;
/*   153 */         }
/*   154 */         while (true) {
/*   155 */             try {
/*   156 */                 switch ($blk) {
/*   157 */                 case 0:
/*   158 */                     /* --- module entry --- */
/*   159 */                     //
/*   160 */                     // line 8:
/*   161 */                     // import math
/*   162 */                     // ^
/*   163 */                     //
/*   164 */                     $currLineNo = 8;
/*   165 */                     $currColNo = 0;
/*   166 */ 
/*   167 */                     $ret = Sk.builtin.__import__('math', $gbl, $loc, []);
/*   168 */                     $blk = 1; /* allowing case fallthrough */
/*   169 */                 case 1:
/*   170 */                     /* --- function return or resume suspension --- */
/*   171 */                     if ($ret && $ret.$isSuspension) {
/*   172 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 8, 0);
/*   173 */                     }
/*   174 */                     var $module121 = $ret;
/*   175 */                     $loc.math = $module121;
/*   176 */                     //
/*   177 */                     // line 10:
/*   178 */                     // EPSILON = 0.00001
/*   179 */                     // ^
/*   180 */                     //
/*   181 */                     $currLineNo = 10;
/*   182 */                     $currColNo = 0;
/*   183 */ 
/*   184 */                     $loc.EPSILON = new Sk.builtin.float_(0.00001);
/*   185 */                     //
/*   186 */                     // line 12:
/*   187 */                     // class Vector(object):
/*   188 */                     // ^
/*   189 */                     //
/*   190 */                     $currLineNo = 12;
/*   191 */                     $currColNo = 0;
/*   192 */ 
/*   193 */                     var $loadname122 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   194 */                     $scope123.co_name = new Sk.builtins['str']('Vector');
/*   195 */                     var $built314 = Sk.misceval.buildClass($gbl, $scope123, 'Vector', [$loadname122]);
/*   196 */                     $loc.Vector = $built314;
/*   197 */                     //
/*   198 */                     // line 75:
/*   199 */                     // Vector.ZERO = Vector(0,0,0)
/*   200 */                     // ^
/*   201 */                     //
/*   202 */                     $currLineNo = 75;
/*   203 */                     $currColNo = 0;
/*   204 */ 
/*   205 */                     var $loadname315 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   206 */                     $ret;
/*   207 */                     $ret = Sk.misceval.callsimOrSuspend($loadname315, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0));
/*   208 */                     $blk = 2; /* allowing case fallthrough */
/*   209 */                 case 2:
/*   210 */                     /* --- function return or resume suspension --- */
/*   211 */                     if ($ret && $ret.$isSuspension) {
/*   212 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 75, 14);
/*   213 */                     }
/*   214 */                     var $call316 = $ret;
/*   215 */                     //
/*   216 */                     // line 75:
/*   217 */                     // Vector.ZERO = Vector(0,0,0)
/*   218 */                     //               ^
/*   219 */                     //
/*   220 */                     $currLineNo = 75;
/*   221 */                     $currColNo = 14;
/*   222 */ 
/*   223 */                     var $loadname317 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   224 */                     $ret = Sk.abstr.sattr($loadname317, 'ZERO', $call316, true);
/*   225 */                     $blk = 3; /* allowing case fallthrough */
/*   226 */                 case 3:
/*   227 */                     /* --- function return or resume suspension --- */
/*   228 */                     if ($ret && $ret.$isSuspension) {
/*   229 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 75, 0);
/*   230 */                     }
/*   231 */                     //
/*   232 */                     // line 76:
/*   233 */                     // Vector.RIGHT = Vector(1,0,0)
/*   234 */                     // ^
/*   235 */                     //
/*   236 */                     $currLineNo = 76;
/*   237 */                     $currColNo = 0;
/*   238 */ 
/*   239 */                     var $loadname318 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   240 */                     $ret;
/*   241 */                     $ret = Sk.misceval.callsimOrSuspend($loadname318, new Sk.builtin.int_(1), new Sk.builtin.int_(0), new Sk.builtin.int_(0));
/*   242 */                     $blk = 4; /* allowing case fallthrough */
/*   243 */                 case 4:
/*   244 */                     /* --- function return or resume suspension --- */
/*   245 */                     if ($ret && $ret.$isSuspension) {
/*   246 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 76, 15);
/*   247 */                     }
/*   248 */                     var $call319 = $ret;
/*   249 */                     //
/*   250 */                     // line 76:
/*   251 */                     // Vector.RIGHT = Vector(1,0,0)
/*   252 */                     //                ^
/*   253 */                     //
/*   254 */                     $currLineNo = 76;
/*   255 */                     $currColNo = 15;
/*   256 */ 
/*   257 */                     var $loadname320 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   258 */                     $ret = Sk.abstr.sattr($loadname320, 'RIGHT', $call319, true);
/*   259 */                     $blk = 5; /* allowing case fallthrough */
/*   260 */                 case 5:
/*   261 */                     /* --- function return or resume suspension --- */
/*   262 */                     if ($ret && $ret.$isSuspension) {
/*   263 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 76, 0);
/*   264 */                     }
/*   265 */                     //
/*   266 */                     // line 77:
/*   267 */                     // Vector.UP = Vector(0,1,0)
/*   268 */                     // ^
/*   269 */                     //
/*   270 */                     $currLineNo = 77;
/*   271 */                     $currColNo = 0;
/*   272 */ 
/*   273 */                     var $loadname321 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   274 */                     $ret;
/*   275 */                     $ret = Sk.misceval.callsimOrSuspend($loadname321, new Sk.builtin.int_(0), new Sk.builtin.int_(1), new Sk.builtin.int_(0));
/*   276 */                     $blk = 6; /* allowing case fallthrough */
/*   277 */                 case 6:
/*   278 */                     /* --- function return or resume suspension --- */
/*   279 */                     if ($ret && $ret.$isSuspension) {
/*   280 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 77, 12);
/*   281 */                     }
/*   282 */                     var $call322 = $ret;
/*   283 */                     //
/*   284 */                     // line 77:
/*   285 */                     // Vector.UP = Vector(0,1,0)
/*   286 */                     //             ^
/*   287 */                     //
/*   288 */                     $currLineNo = 77;
/*   289 */                     $currColNo = 12;
/*   290 */ 
/*   291 */                     var $loadname323 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   292 */                     $ret = Sk.abstr.sattr($loadname323, 'UP', $call322, true);
/*   293 */                     $blk = 7; /* allowing case fallthrough */
/*   294 */                 case 7:
/*   295 */                     /* --- function return or resume suspension --- */
/*   296 */                     if ($ret && $ret.$isSuspension) {
/*   297 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 77, 0);
/*   298 */                     }
/*   299 */                     //
/*   300 */                     // line 78:
/*   301 */                     // Vector.OUT = Vector(0,0,1)
/*   302 */                     // ^
/*   303 */                     //
/*   304 */                     $currLineNo = 78;
/*   305 */                     $currColNo = 0;
/*   306 */ 
/*   307 */                     var $loadname324 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   308 */                     $ret;
/*   309 */                     $ret = Sk.misceval.callsimOrSuspend($loadname324, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(1));
/*   310 */                     $blk = 8; /* allowing case fallthrough */
/*   311 */                 case 8:
/*   312 */                     /* --- function return or resume suspension --- */
/*   313 */                     if ($ret && $ret.$isSuspension) {
/*   314 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 78, 13);
/*   315 */                     }
/*   316 */                     var $call325 = $ret;
/*   317 */                     //
/*   318 */                     // line 78:
/*   319 */                     // Vector.OUT = Vector(0,0,1)
/*   320 */                     //              ^
/*   321 */                     //
/*   322 */                     $currLineNo = 78;
/*   323 */                     $currColNo = 13;
/*   324 */ 
/*   325 */                     var $loadname326 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   326 */                     $ret = Sk.abstr.sattr($loadname326, 'OUT', $call325, true);
/*   327 */                     $blk = 9; /* allowing case fallthrough */
/*   328 */                 case 9:
/*   329 */                     /* --- function return or resume suspension --- */
/*   330 */                     if ($ret && $ret.$isSuspension) {
/*   331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 78, 0);
/*   332 */                     }
/*   333 */                     //
/*   334 */                     // line 80:
/*   335 */                     // assert Vector.RIGHT.reflectThrough(Vector.UP) == Vector.RIGHT
/*   336 */                     // ^
/*   337 */                     //
/*   338 */                     $currLineNo = 80;
/*   339 */                     $currColNo = 0;
/*   340 */ 
/*   341 */                     var $loadname327 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   342 */                     $ret = Sk.abstr.gattr($loadname327, 'RIGHT', true);
/*   343 */                     $blk = 10; /* allowing case fallthrough */
/*   344 */                 case 10:
/*   345 */                     /* --- function return or resume suspension --- */
/*   346 */                     if ($ret && $ret.$isSuspension) {
/*   347 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 7);
/*   348 */                     }
/*   349 */                     var $lattr328 = $ret;
/*   350 */                     $ret = Sk.abstr.gattr($lattr328, 'reflectThrough', true);
/*   351 */                     $blk = 11; /* allowing case fallthrough */
/*   352 */                 case 11:
/*   353 */                     /* --- function return or resume suspension --- */
/*   354 */                     if ($ret && $ret.$isSuspension) {
/*   355 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 7);
/*   356 */                     }
/*   357 */                     var $lattr329 = $ret;
/*   358 */                     var $loadname330 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   359 */                     $ret = Sk.abstr.gattr($loadname330, 'UP', true);
/*   360 */                     $blk = 12; /* allowing case fallthrough */
/*   361 */                 case 12:
/*   362 */                     /* --- function return or resume suspension --- */
/*   363 */                     if ($ret && $ret.$isSuspension) {
/*   364 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 35);
/*   365 */                     }
/*   366 */                     var $lattr331 = $ret;
/*   367 */                     $ret;
/*   368 */                     $ret = Sk.misceval.callsimOrSuspend($lattr329, $lattr331);
/*   369 */                     $blk = 13; /* allowing case fallthrough */
/*   370 */                 case 13:
/*   371 */                     /* --- function return or resume suspension --- */
/*   372 */                     if ($ret && $ret.$isSuspension) {
/*   373 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 7);
/*   374 */                     }
/*   375 */                     var $call332 = $ret;
/*   376 */                     //
/*   377 */                     // line 80:
/*   378 */                     // assert Vector.RIGHT.reflectThrough(Vector.UP) == Vector.RIGHT
/*   379 */                     //        ^
/*   380 */                     //
/*   381 */                     $currLineNo = 80;
/*   382 */                     $currColNo = 7;
/*   383 */ 
/*   384 */                     var $compareres333 = null;
/*   385 */                     var $loadname334 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   386 */                     $ret = Sk.abstr.gattr($loadname334, 'RIGHT', true);
/*   387 */                     $blk = 15; /* allowing case fallthrough */
/*   388 */                 case 15:
/*   389 */                     /* --- function return or resume suspension --- */
/*   390 */                     if ($ret && $ret.$isSuspension) {
/*   391 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 49);
/*   392 */                     }
/*   393 */                     var $lattr335 = $ret;
/*   394 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call332, $lattr335, 'Eq', true));
/*   395 */                     $blk = 16; /* allowing case fallthrough */
/*   396 */                 case 16:
/*   397 */                     /* --- function return or resume suspension --- */
/*   398 */                     if ($ret && $ret.$isSuspension) {
/*   399 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 80, 7);
/*   400 */                     }
/*   401 */                     $compareres333 = $ret;
/*   402 */                     var $jfalse336 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   403 */                     if ($jfalse336) { /*test failed */
/*   404 */                         $blk = 14;
/*   405 */                         continue;
/*   406 */                     }
/*   407 */                     $blk = 14; /* allowing case fallthrough */
/*   408 */                 case 14:
/*   409 */                     /* --- done --- */
/*   410 */                     var $jtrue337 = ($compareres333 === true || Sk.misceval.isTrue($compareres333));
/*   411 */                     if ($jtrue337) { /*test passed */
/*   412 */                         $blk = 17;
/*   413 */                         continue;
/*   414 */                     }
/*   415 */                     throw new Sk.builtin.AssertionError();
/*   416 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   417 */                 case 17:
/*   418 */                     /* --- end --- */
/*   419 */                     //
/*   420 */                     // line 81:
/*   421 */                     // assert Vector(-1,-1,0).reflectThrough(Vector.UP) == Vector(-1,1,0)
/*   422 */                     // ^
/*   423 */                     //
/*   424 */                     $currLineNo = 81;
/*   425 */                     $currColNo = 0;
/*   426 */ 
/*   427 */                     var $loadname338 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   428 */                     $ret;
/*   429 */                     $ret = Sk.misceval.callsimOrSuspend($loadname338, new Sk.builtin.int_(-1), new Sk.builtin.int_(-1), new Sk.builtin.int_(0));
/*   430 */                     $blk = 18; /* allowing case fallthrough */
/*   431 */                 case 18:
/*   432 */                     /* --- function return or resume suspension --- */
/*   433 */                     if ($ret && $ret.$isSuspension) {
/*   434 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 7);
/*   435 */                     }
/*   436 */                     var $call339 = $ret;
/*   437 */                     //
/*   438 */                     // line 81:
/*   439 */                     // assert Vector(-1,-1,0).reflectThrough(Vector.UP) == Vector(-1,1,0)
/*   440 */                     //        ^
/*   441 */                     //
/*   442 */                     $currLineNo = 81;
/*   443 */                     $currColNo = 7;
/*   444 */ 
/*   445 */                     $ret = Sk.abstr.gattr($call339, 'reflectThrough', true);
/*   446 */                     $blk = 19; /* allowing case fallthrough */
/*   447 */                 case 19:
/*   448 */                     /* --- function return or resume suspension --- */
/*   449 */                     if ($ret && $ret.$isSuspension) {
/*   450 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 7);
/*   451 */                     }
/*   452 */                     var $lattr340 = $ret;
/*   453 */                     var $loadname341 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   454 */                     $ret = Sk.abstr.gattr($loadname341, 'UP', true);
/*   455 */                     $blk = 20; /* allowing case fallthrough */
/*   456 */                 case 20:
/*   457 */                     /* --- function return or resume suspension --- */
/*   458 */                     if ($ret && $ret.$isSuspension) {
/*   459 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 38);
/*   460 */                     }
/*   461 */                     var $lattr342 = $ret;
/*   462 */                     $ret;
/*   463 */                     $ret = Sk.misceval.callsimOrSuspend($lattr340, $lattr342);
/*   464 */                     $blk = 21; /* allowing case fallthrough */
/*   465 */                 case 21:
/*   466 */                     /* --- function return or resume suspension --- */
/*   467 */                     if ($ret && $ret.$isSuspension) {
/*   468 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 7);
/*   469 */                     }
/*   470 */                     var $call343 = $ret;
/*   471 */                     //
/*   472 */                     // line 81:
/*   473 */                     // assert Vector(-1,-1,0).reflectThrough(Vector.UP) == Vector(-1,1,0)
/*   474 */                     //        ^
/*   475 */                     //
/*   476 */                     $currLineNo = 81;
/*   477 */                     $currColNo = 7;
/*   478 */ 
/*   479 */                     var $compareres344 = null;
/*   480 */                     var $loadname345 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   481 */                     $ret;
/*   482 */                     $ret = Sk.misceval.callsimOrSuspend($loadname345, new Sk.builtin.int_(-1), new Sk.builtin.int_(1), new Sk.builtin.int_(0));
/*   483 */                     $blk = 23; /* allowing case fallthrough */
/*   484 */                 case 23:
/*   485 */                     /* --- function return or resume suspension --- */
/*   486 */                     if ($ret && $ret.$isSuspension) {
/*   487 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 52);
/*   488 */                     }
/*   489 */                     var $call346 = $ret;
/*   490 */                     //
/*   491 */                     // line 81:
/*   492 */                     // assert Vector(-1,-1,0).reflectThrough(Vector.UP) == Vector(-1,1,0)
/*   493 */                     //                                                     ^
/*   494 */                     //
/*   495 */                     $currLineNo = 81;
/*   496 */                     $currColNo = 52;
/*   497 */ 
/*   498 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call343, $call346, 'Eq', true));
/*   499 */                     $blk = 24; /* allowing case fallthrough */
/*   500 */                 case 24:
/*   501 */                     /* --- function return or resume suspension --- */
/*   502 */                     if ($ret && $ret.$isSuspension) {
/*   503 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 81, 7);
/*   504 */                     }
/*   505 */                     $compareres344 = $ret;
/*   506 */                     var $jfalse347 = ($ret === false || !Sk.misceval.isTrue($ret));
/*   507 */                     if ($jfalse347) { /*test failed */
/*   508 */                         $blk = 22;
/*   509 */                         continue;
/*   510 */                     }
/*   511 */                     $blk = 22; /* allowing case fallthrough */
/*   512 */                 case 22:
/*   513 */                     /* --- done --- */
/*   514 */                     var $jtrue348 = ($compareres344 === true || Sk.misceval.isTrue($compareres344));
/*   515 */                     if ($jtrue348) { /*test passed */
/*   516 */                         $blk = 25;
/*   517 */                         continue;
/*   518 */                     }
/*   519 */                     throw new Sk.builtin.AssertionError();
/*   520 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   521 */                 case 25:
/*   522 */                     /* --- end --- */
/*   523 */                     //
/*   524 */                     // line 83:
/*   525 */                     // class Point(object):
/*   526 */                     // ^
/*   527 */                     //
/*   528 */                     $currLineNo = 83;
/*   529 */                     $currColNo = 0;
/*   530 */ 
/*   531 */                     var $loadname349 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   532 */                     $scope350.co_name = new Sk.builtins['str']('Point');
/*   533 */                     var $built436 = Sk.misceval.buildClass($gbl, $scope350, 'Point', [$loadname349]);
/*   534 */                     $loc.Point = $built436;
/*   535 */                     //
/*   536 */                     // line 117:
/*   537 */                     // class Sphere(object):
/*   538 */                     // ^
/*   539 */                     //
/*   540 */                     $currLineNo = 117;
/*   541 */                     $currColNo = 0;
/*   542 */ 
/*   543 */                     var $loadname437 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   544 */                     $scope438.co_name = new Sk.builtins['str']('Sphere');
/*   545 */                     var $built487 = Sk.misceval.buildClass($gbl, $scope438, 'Sphere', [$loadname437]);
/*   546 */                     $loc.Sphere = $built487;
/*   547 */                     //
/*   548 */                     // line 138:
/*   549 */                     // class Halfspace(object):
/*   550 */                     // ^
/*   551 */                     //
/*   552 */                     $currLineNo = 138;
/*   553 */                     $currColNo = 0;
/*   554 */ 
/*   555 */                     var $loadname488 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   556 */                     $scope489.co_name = new Sk.builtins['str']('Halfspace');
/*   557 */                     var $built523 = Sk.misceval.buildClass($gbl, $scope489, 'Halfspace', [$loadname488]);
/*   558 */                     $loc.Halfspace = $built523;
/*   559 */                     //
/*   560 */                     // line 156:
/*   561 */                     // class Ray(object):
/*   562 */                     // ^
/*   563 */                     //
/*   564 */                     $currLineNo = 156;
/*   565 */                     $currColNo = 0;
/*   566 */ 
/*   567 */                     var $loadname524 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   568 */                     $scope525.co_name = new Sk.builtins['str']('Ray');
/*   569 */                     var $built553 = Sk.misceval.buildClass($gbl, $scope525, 'Ray', [$loadname524]);
/*   570 */                     $loc.Ray = $built553;
/*   571 */                     //
/*   572 */                     // line 167:
/*   573 */                     // Point.ZERO = Point(0,0,0)
/*   574 */                     // ^
/*   575 */                     //
/*   576 */                     $currLineNo = 167;
/*   577 */                     $currColNo = 0;
/*   578 */ 
/*   579 */                     var $loadname554 = $loc.Point !== undefined ? $loc.Point : Sk.misceval.loadname('Point', $gbl);;
/*   580 */                     $ret;
/*   581 */                     $ret = Sk.misceval.callsimOrSuspend($loadname554, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0));
/*   582 */                     $blk = 26; /* allowing case fallthrough */
/*   583 */                 case 26:
/*   584 */                     /* --- function return or resume suspension --- */
/*   585 */                     if ($ret && $ret.$isSuspension) {
/*   586 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 167, 13);
/*   587 */                     }
/*   588 */                     var $call555 = $ret;
/*   589 */                     //
/*   590 */                     // line 167:
/*   591 */                     // Point.ZERO = Point(0,0,0)
/*   592 */                     //              ^
/*   593 */                     //
/*   594 */                     $currLineNo = 167;
/*   595 */                     $currColNo = 13;
/*   596 */ 
/*   597 */                     var $loadname556 = $loc.Point !== undefined ? $loc.Point : Sk.misceval.loadname('Point', $gbl);;
/*   598 */                     $ret = Sk.abstr.sattr($loadname556, 'ZERO', $call555, true);
/*   599 */                     $blk = 27; /* allowing case fallthrough */
/*   600 */                 case 27:
/*   601 */                     /* --- function return or resume suspension --- */
/*   602 */                     if ($ret && $ret.$isSuspension) {
/*   603 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 167, 0);
/*   604 */                     }
/*   605 */                     //
/*   606 */                     // line 169:
/*   607 */                     // a = Vector(3,4,12)
/*   608 */                     // ^
/*   609 */                     //
/*   610 */                     $currLineNo = 169;
/*   611 */                     $currColNo = 0;
/*   612 */ 
/*   613 */                     var $loadname557 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   614 */                     $ret;
/*   615 */                     $ret = Sk.misceval.callsimOrSuspend($loadname557, new Sk.builtin.int_(3), new Sk.builtin.int_(4), new Sk.builtin.int_(12));
/*   616 */                     $blk = 28; /* allowing case fallthrough */
/*   617 */                 case 28:
/*   618 */                     /* --- function return or resume suspension --- */
/*   619 */                     if ($ret && $ret.$isSuspension) {
/*   620 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 169, 4);
/*   621 */                     }
/*   622 */                     var $call558 = $ret;
/*   623 */                     //
/*   624 */                     // line 169:
/*   625 */                     // a = Vector(3,4,12)
/*   626 */                     //     ^
/*   627 */                     //
/*   628 */                     $currLineNo = 169;
/*   629 */                     $currColNo = 4;
/*   630 */ 
/*   631 */                     $loc.a = $call558;
/*   632 */                     //
/*   633 */                     // line 170:
/*   634 */                     // b = Vector(1,1,1)
/*   635 */                     // ^
/*   636 */                     //
/*   637 */                     $currLineNo = 170;
/*   638 */                     $currColNo = 0;
/*   639 */ 
/*   640 */                     var $loadname559 = $loc.Vector !== undefined ? $loc.Vector : Sk.misceval.loadname('Vector', $gbl);;
/*   641 */                     $ret;
/*   642 */                     $ret = Sk.misceval.callsimOrSuspend($loadname559, new Sk.builtin.int_(1), new Sk.builtin.int_(1), new Sk.builtin.int_(1));
/*   643 */                     $blk = 29; /* allowing case fallthrough */
/*   644 */                 case 29:
/*   645 */                     /* --- function return or resume suspension --- */
/*   646 */                     if ($ret && $ret.$isSuspension) {
/*   647 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 170, 4);
/*   648 */                     }
/*   649 */                     var $call560 = $ret;
/*   650 */                     //
/*   651 */                     // line 170:
/*   652 */                     // b = Vector(1,1,1)
/*   653 */                     //     ^
/*   654 */                     //
/*   655 */                     $currLineNo = 170;
/*   656 */                     $currColNo = 4;
/*   657 */ 
/*   658 */                     $loc.b = $call560;
/*   659 */                     //
/*   660 */                     // line 172:
/*   661 */                     // class PpmCanvas(object):
/*   662 */                     // ^
/*   663 */                     //
/*   664 */                     $currLineNo = 172;
/*   665 */                     $currColNo = 0;
/*   666 */ 
/*   667 */                     var $loadname561 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   668 */                     $scope562.co_name = new Sk.builtins['str']('PpmCanvas');
/*   669 */                     var $built642 = Sk.misceval.buildClass($gbl, $scope562, 'PpmCanvas', [$loadname561]);
/*   670 */                     $loc.PpmCanvas = $built642;
/*   671 */                     //
/*   672 */                     // line 192:
/*   673 */                     // def firstIntersection(intersections):
/*   674 */                     // ^
/*   675 */                     //
/*   676 */                     $currLineNo = 192;
/*   677 */                     $currColNo = 0;
/*   678 */ 
/*   679 */                     $scope643.co_name = new Sk.builtins['str']('firstIntersection');
/*   680 */                     $scope643.co_varnames = ['intersections'];
/*   681 */                     var $funcobj667 = new Sk.builtins['function']($scope643, $gbl);
/*   682 */                     $loc.firstIntersection = $funcobj667;
/*   683 */                     //
/*   684 */                     // line 201:
/*   685 */                     // class Scene(object):
/*   686 */                     // ^
/*   687 */                     //
/*   688 */                     $currLineNo = 201;
/*   689 */                     $currColNo = 0;
/*   690 */ 
/*   691 */                     var $loadname668 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   692 */                     $scope669.co_name = new Sk.builtins['str']('Scene');
/*   693 */                     var $built851 = Sk.misceval.buildClass($gbl, $scope669, 'Scene', [$loadname668]);
/*   694 */                     $loc.Scene = $built851;
/*   695 */                     //
/*   696 */                     // line 283:
/*   697 */                     // def addColours(a, scale, b):
/*   698 */                     // ^
/*   699 */                     //
/*   700 */                     $currLineNo = 283;
/*   701 */                     $currColNo = 0;
/*   702 */ 
/*   703 */                     $scope852.co_name = new Sk.builtins['str']('addColours');
/*   704 */                     $scope852.co_varnames = ['a', 'scale', 'b'];
/*   705 */                     var $funcobj870 = new Sk.builtins['function']($scope852, $gbl);
/*   706 */                     $loc.addColours = $funcobj870;
/*   707 */                     //
/*   708 */                     // line 288:
/*   709 */                     // class SimpleSurface(object):
/*   710 */                     // ^
/*   711 */                     //
/*   712 */                     $currLineNo = 288;
/*   713 */                     $currColNo = 0;
/*   714 */ 
/*   715 */                     var $loadname871 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   716 */                     $scope872.co_name = new Sk.builtins['str']('SimpleSurface');
/*   717 */                     var $built950 = Sk.misceval.buildClass($gbl, $scope872, 'SimpleSurface', [$loadname871]);
/*   718 */                     $loc.SimpleSurface = $built950;
/*   719 */                     //
/*   720 */                     // line 322:
/*   721 */                     // class CheckerboardSurface(SimpleSurface):
/*   722 */                     // ^
/*   723 */                     //
/*   724 */                     $currLineNo = 322;
/*   725 */                     $currColNo = 0;
/*   726 */ 
/*   727 */                     var $loadname951 = $loc.SimpleSurface !== undefined ? $loc.SimpleSurface : Sk.misceval.loadname('SimpleSurface', $gbl);;
/*   728 */                     $scope952.co_name = new Sk.builtins['str']('CheckerboardSurface');
/*   729 */                     var $built1003 = Sk.misceval.buildClass($gbl, $scope952, 'CheckerboardSurface', [$loadname951]);
/*   730 */                     $loc.CheckerboardSurface = $built1003;
/*   731 */                     //
/*   732 */                     // line 339:
/*   733 */                     // def _main():
/*   734 */                     // ^
/*   735 */                     //
/*   736 */                     $currLineNo = 339;
/*   737 */                     $currColNo = 0;
/*   738 */ 
/*   739 */                     $scope1004.co_name = new Sk.builtins['str']('_main');
/*   740 */                     var $funcobj1068 = new Sk.builtins['function']($scope1004, $gbl);
/*   741 */                     $loc._main = $funcobj1068;
/*   742 */                     //
/*   743 */                     // line 354:
/*   744 */                     // def main(n):
/*   745 */                     // ^
/*   746 */                     //
/*   747 */                     $currLineNo = 354;
/*   748 */                     $currColNo = 0;
/*   749 */ 
/*   750 */                     $scope1069.co_name = new Sk.builtins['str']('main');
/*   751 */                     $scope1069.co_varnames = ['n'];
/*   752 */                     var $funcobj1092 = new Sk.builtins['function']($scope1069, $gbl);
/*   753 */                     $loc.main = $funcobj1092;
/*   754 */                     //
/*   755 */                     // line 366:
/*   756 */                     // main(1)
/*   757 */                     // ^
/*   758 */                     //
/*   759 */                     $currLineNo = 366;
/*   760 */                     $currColNo = 0;
/*   761 */ 
/*   762 */                     var $loadname1093 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   763 */                     $ret;
/*   764 */                     $ret = Sk.misceval.callsimOrSuspend($loadname1093, new Sk.builtin.int_(1));
/*   765 */                     $blk = 30; /* allowing case fallthrough */
/*   766 */                 case 30:
/*   767 */                     /* --- function return or resume suspension --- */
/*   768 */                     if ($ret && $ret.$isSuspension) {
/*   769 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 366, 0);
/*   770 */                     }
/*   771 */                     var $call1094 = $ret;
/*   772 */                     //
/*   773 */                     // line 366:
/*   774 */                     // main(1)
/*   775 */                     // ^
/*   776 */                     //
/*   777 */                     $currLineNo = 366;
/*   778 */                     $currColNo = 0;
/*   779 */ 
/*   780 */                     return $loc;
/*   781 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   782 */                 }
/*   783 */             } catch (err) {
/*   784 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   785 */                     err = new Sk.builtin.ExternalError(err);
/*   786 */                 }
/*   787 */                 err.traceback.push({
/*   788 */                     lineno: $currLineNo,
/*   789 */                     colno: $currColNo,
/*   790 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*   791 */                 });
/*   792 */                 if ($exc.length > 0) {
/*   793 */                     $err = err;
/*   794 */                     $blk = $exc.pop();
/*   795 */                     continue;
/*   796 */                 } else {
/*   797 */                     throw err;
/*   798 */                 }
/*   799 */             }
/*   800 */         }
/*   801 */     });
/*   802 */     var $scope123 = (function $Vector$class_outer($globals, $locals, $rest) {
/*   803 */         var $gbl = $globals,
/*   804 */             $loc = $locals;
/*   805 */         (function $Vector$_closure() {
/*   806 */             var $blk = 0,
/*   807 */                 $exc = [],
/*   808 */                 $ret = undefined,
/*   809 */                 $postfinally = undefined,
/*   810 */                 $currLineNo = undefined,
/*   811 */                 $currColNo = undefined;
/*   812 */             while (true) {
/*   813 */                 try {
/*   814 */                     switch ($blk) {
/*   815 */                     case 0:
/*   816 */                         /* --- class entry --- */
/*   817 */                         //
/*   818 */                         // line 13:
/*   819 */                         //     def __init__(self, initx, inity, initz):
/*   820 */                         //     ^
/*   821 */                         //
/*   822 */                         $currLineNo = 13;
/*   823 */                         $currColNo = 4;
/*   824 */ 
/*   825 */                         $scope124.co_name = new Sk.builtins['str']('__init__');
/*   826 */                         $scope124.co_varnames = ['self', 'initx', 'inity', 'initz'];
/*   827 */                         var $funcobj126 = new Sk.builtins['function']($scope124, $gbl);
/*   828 */                         $loc.__init__ = $funcobj126;
/*   829 */                         //
/*   830 */                         // line 18:
/*   831 */                         //     def __str__(self):
/*   832 */                         //     ^
/*   833 */                         //
/*   834 */                         $currLineNo = 18;
/*   835 */                         $currColNo = 4;
/*   836 */ 
/*   837 */                         $scope127.co_name = new Sk.builtins['str']('__str__');
/*   838 */                         $scope127.co_varnames = ['self'];
/*   839 */                         var $funcobj138 = new Sk.builtins['function']($scope127, $gbl);
/*   840 */                         $loc.__str__ = $funcobj138;
/*   841 */                         //
/*   842 */                         // line 21:
/*   843 */                         //     def __repr__(self):
/*   844 */                         //     ^
/*   845 */                         //
/*   846 */                         $currLineNo = 21;
/*   847 */                         $currColNo = 4;
/*   848 */ 
/*   849 */                         $scope139.co_name = new Sk.builtins['str']('__repr__');
/*   850 */                         $scope139.co_varnames = ['self'];
/*   851 */                         var $funcobj150 = new Sk.builtins['function']($scope139, $gbl);
/*   852 */                         $loc.__repr__ = $funcobj150;
/*   853 */                         //
/*   854 */                         // line 24:
/*   855 */                         //     def magnitude(self):
/*   856 */                         //     ^
/*   857 */                         //
/*   858 */                         $currLineNo = 24;
/*   859 */                         $currColNo = 4;
/*   860 */ 
/*   861 */                         $scope151.co_name = new Sk.builtins['str']('magnitude');
/*   862 */                         $scope151.co_varnames = ['self'];
/*   863 */                         var $funcobj158 = new Sk.builtins['function']($scope151, $gbl);
/*   864 */                         $loc.magnitude = $funcobj158;
/*   865 */                         //
/*   866 */                         // line 27:
/*   867 */                         //     def __add__(self, other):
/*   868 */                         //     ^
/*   869 */                         //
/*   870 */                         $currLineNo = 27;
/*   871 */                         $currColNo = 4;
/*   872 */ 
/*   873 */                         $scope159.co_name = new Sk.builtins['str']('__add__');
/*   874 */                         $scope159.co_varnames = ['self', 'other'];
/*   875 */                         var $funcobj186 = new Sk.builtins['function']($scope159, $gbl);
/*   876 */                         $loc.__add__ = $funcobj186;
/*   877 */                         //
/*   878 */                         // line 33:
/*   879 */                         //     def __sub__(self, other):
/*   880 */                         //     ^
/*   881 */                         //
/*   882 */                         $currLineNo = 33;
/*   883 */                         $currColNo = 4;
/*   884 */ 
/*   885 */                         $scope187.co_name = new Sk.builtins['str']('__sub__');
/*   886 */                         $scope187.co_varnames = ['self', 'other'];
/*   887 */                         var $funcobj202 = new Sk.builtins['function']($scope187, $gbl);
/*   888 */                         $loc.__sub__ = $funcobj202;
/*   889 */                         //
/*   890 */                         // line 37:
/*   891 */                         //     def scale(self, factor):
/*   892 */                         //     ^
/*   893 */                         //
/*   894 */                         $currLineNo = 37;
/*   895 */                         $currColNo = 4;
/*   896 */ 
/*   897 */                         $scope203.co_name = new Sk.builtins['str']('scale');
/*   898 */                         $scope203.co_varnames = ['self', 'factor'];
/*   899 */                         var $funcobj213 = new Sk.builtins['function']($scope203, $gbl);
/*   900 */                         $loc.scale = $funcobj213;
/*   901 */                         //
/*   902 */                         // line 40:
/*   903 */                         //     def dot(self, other):
/*   904 */                         //     ^
/*   905 */                         //
/*   906 */                         $currLineNo = 40;
/*   907 */                         $currColNo = 4;
/*   908 */ 
/*   909 */                         $scope214.co_name = new Sk.builtins['str']('dot');
/*   910 */                         $scope214.co_varnames = ['self', 'other'];
/*   911 */                         var $funcobj229 = new Sk.builtins['function']($scope214, $gbl);
/*   912 */                         $loc.dot = $funcobj229;
/*   913 */                         //
/*   914 */                         // line 44:
/*   915 */                         //     def cross(self, other):
/*   916 */                         //     ^
/*   917 */                         //
/*   918 */                         $currLineNo = 44;
/*   919 */                         $currColNo = 4;
/*   920 */ 
/*   921 */                         $scope230.co_name = new Sk.builtins['str']('cross');
/*   922 */                         $scope230.co_varnames = ['self', 'other'];
/*   923 */                         var $funcobj257 = new Sk.builtins['function']($scope230, $gbl);
/*   924 */                         $loc.cross = $funcobj257;
/*   925 */                         //
/*   926 */                         // line 50:
/*   927 */                         //     def normalized(self):
/*   928 */                         //     ^
/*   929 */                         //
/*   930 */                         $currLineNo = 50;
/*   931 */                         $currColNo = 4;
/*   932 */ 
/*   933 */                         $scope258.co_name = new Sk.builtins['str']('normalized');
/*   934 */                         $scope258.co_varnames = ['self'];
/*   935 */                         var $funcobj265 = new Sk.builtins['function']($scope258, $gbl);
/*   936 */                         $loc.normalized = $funcobj265;
/*   937 */                         //
/*   938 */                         // line 53:
/*   939 */                         //     def negated(self):
/*   940 */                         //     ^
/*   941 */                         //
/*   942 */                         $currLineNo = 53;
/*   943 */                         $currColNo = 4;
/*   944 */ 
/*   945 */                         $scope266.co_name = new Sk.builtins['str']('negated');
/*   946 */                         $scope266.co_varnames = ['self'];
/*   947 */                         var $funcobj270 = new Sk.builtins['function']($scope266, $gbl);
/*   948 */                         $loc.negated = $funcobj270;
/*   949 */                         //
/*   950 */                         // line 56:
/*   951 */                         //     def __eq__(self, other):
/*   952 */                         //     ^
/*   953 */                         //
/*   954 */                         $currLineNo = 56;
/*   955 */                         $currColNo = 4;
/*   956 */ 
/*   957 */                         $scope271.co_name = new Sk.builtins['str']('__eq__');
/*   958 */                         $scope271.co_varnames = ['self', 'other'];
/*   959 */                         var $funcobj289 = new Sk.builtins['function']($scope271, $gbl);
/*   960 */                         $loc.__eq__ = $funcobj289;
/*   961 */                         //
/*   962 */                         // line 59:
/*   963 */                         //     def isVector(self):
/*   964 */                         //     ^
/*   965 */                         //
/*   966 */                         $currLineNo = 59;
/*   967 */                         $currColNo = 4;
/*   968 */ 
/*   969 */                         $scope290.co_name = new Sk.builtins['str']('isVector');
/*   970 */                         $scope290.co_varnames = ['self'];
/*   971 */                         var $funcobj292 = new Sk.builtins['function']($scope290, $gbl);
/*   972 */                         $loc.isVector = $funcobj292;
/*   973 */                         //
/*   974 */                         // line 62:
/*   975 */                         //     def isPoint(self):
/*   976 */                         //     ^
/*   977 */                         //
/*   978 */                         $currLineNo = 62;
/*   979 */                         $currColNo = 4;
/*   980 */ 
/*   981 */                         $scope293.co_name = new Sk.builtins['str']('isPoint');
/*   982 */                         $scope293.co_varnames = ['self'];
/*   983 */                         var $funcobj295 = new Sk.builtins['function']($scope293, $gbl);
/*   984 */                         $loc.isPoint = $funcobj295;
/*   985 */                         //
/*   986 */                         // line 65:
/*   987 */                         //     def mustBeVector(self):
/*   988 */                         //     ^
/*   989 */                         //
/*   990 */                         $currLineNo = 65;
/*   991 */                         $currColNo = 4;
/*   992 */ 
/*   993 */                         $scope296.co_name = new Sk.builtins['str']('mustBeVector');
/*   994 */                         $scope296.co_varnames = ['self'];
/*   995 */                         var $funcobj298 = new Sk.builtins['function']($scope296, $gbl);
/*   996 */                         $loc.mustBeVector = $funcobj298;
/*   997 */                         //
/*   998 */                         // line 68:
/*   999 */                         //     def mustBePoint(self):
/*  1000 */                         //     ^
/*  1001 */                         //
/*  1002 */                         $currLineNo = 68;
/*  1003 */                         $currColNo = 4;
/*  1004 */ 
/*  1005 */                         $scope299.co_name = new Sk.builtins['str']('mustBePoint');
/*  1006 */                         $scope299.co_varnames = ['self'];
/*  1007 */                         var $funcobj303 = new Sk.builtins['function']($scope299, $gbl);
/*  1008 */                         $loc.mustBePoint = $funcobj303;
/*  1009 */                         //
/*  1010 */                         // line 71:
/*  1011 */                         //     def reflectThrough(self, normal):
/*  1012 */                         //     ^
/*  1013 */                         //
/*  1014 */                         $currLineNo = 71;
/*  1015 */                         $currColNo = 4;
/*  1016 */ 
/*  1017 */                         $scope304.co_name = new Sk.builtins['str']('reflectThrough');
/*  1018 */                         $scope304.co_varnames = ['self', 'normal'];
/*  1019 */                         var $funcobj313 = new Sk.builtins['function']($scope304, $gbl);
/*  1020 */                         $loc.reflectThrough = $funcobj313;
/*  1021 */                         return;
/*  1022 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1023 */                     }
/*  1024 */                 } catch (err) {
/*  1025 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1026 */                         err = new Sk.builtin.ExternalError(err);
/*  1027 */                     }
/*  1028 */                     err.traceback.push({
/*  1029 */                         lineno: $currLineNo,
/*  1030 */                         colno: $currColNo,
/*  1031 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1032 */                     });
/*  1033 */                     if ($exc.length > 0) {
/*  1034 */                         $err = err;
/*  1035 */                         $blk = $exc.pop();
/*  1036 */                         continue;
/*  1037 */                     } else {
/*  1038 */                         throw err;
/*  1039 */                     }
/*  1040 */                 }
/*  1041 */             }
/*  1042 */         }).apply(null, $rest);
/*  1043 */     });
/*  1044 */     var $scope124 = (function $__init__125$(self, initx, inity, initz) {
/*  1045 */         var initx, initx, inity, inity, initz, initz, self, self, self, self;
/*  1046 */         var $wakeFromSuspension = function() {
/*  1047 */             var susp = $scope124.$wakingSuspension;
/*  1048 */             delete $scope124.$wakingSuspension;
/*  1049 */             $blk = susp.$blk;
/*  1050 */             $loc = susp.$loc;
/*  1051 */             $gbl = susp.$gbl;
/*  1052 */             $exc = susp.$exc;
/*  1053 */             $err = susp.$err;
/*  1054 */             $postfinally = susp.$postfinally;
/*  1055 */             $currLineNo = susp.$lineno;
/*  1056 */             $currColNo = susp.$colno;
/*  1057 */             Sk.lastYield = Date.now();
/*  1058 */             initx = susp.$tmps.initx;
/*  1059 */             inity = susp.$tmps.inity;
/*  1060 */             initz = susp.$tmps.initz;
/*  1061 */             self = susp.$tmps.self;
/*  1062 */             try {
/*  1063 */                 $ret = susp.child.resume();
/*  1064 */             } catch (err) {
/*  1065 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1066 */                     err = new Sk.builtin.ExternalError(err);
/*  1067 */                 }
/*  1068 */                 err.traceback.push({
/*  1069 */                     lineno: $currLineNo,
/*  1070 */                     colno: $currColNo,
/*  1071 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1072 */                 });
/*  1073 */                 if ($exc.length > 0) {
/*  1074 */                     $err = err;
/*  1075 */                     $blk = $exc.pop();
/*  1076 */                 } else {
/*  1077 */                     throw err;
/*  1078 */                 }
/*  1079 */             }
/*  1080 */         };
/*  1081 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1082 */             var susp = new Sk.misceval.Suspension();
/*  1083 */             susp.child = $child;
/*  1084 */             susp.resume = function() {
/*  1085 */                 $scope124.$wakingSuspension = susp;
/*  1086 */                 return $scope124();
/*  1087 */             };
/*  1088 */             susp.data = susp.child.data;
/*  1089 */             susp.$blk = $blk;
/*  1090 */             susp.$loc = $loc;
/*  1091 */             susp.$gbl = $gbl;
/*  1092 */             susp.$exc = $exc;
/*  1093 */             susp.$err = $err;
/*  1094 */             susp.$postfinally = $postfinally;
/*  1095 */             susp.$filename = $filename;
/*  1096 */             susp.$lineno = $lineno;
/*  1097 */             susp.$colno = $colno;
/*  1098 */             susp.optional = susp.child.optional;
/*  1099 */             susp.$tmps = {
/*  1100 */                 "initx": initx,
/*  1101 */                 "inity": inity,
/*  1102 */                 "initz": initz,
/*  1103 */                 "self": self
/*  1104 */             };
/*  1105 */             return susp;
/*  1106 */         };
/*  1107 */         var $blk = 0,
/*  1108 */             $exc = [],
/*  1109 */             $loc = {},
/*  1110 */             $gbl = this,
/*  1111 */             $err = undefined,
/*  1112 */             $ret = undefined,
/*  1113 */             $postfinally = undefined,
/*  1114 */             $currLineNo = undefined,
/*  1115 */             $currColNo = undefined;
/*  1116 */         if ($scope124.$wakingSuspension !== undefined) {
/*  1117 */             $wakeFromSuspension();
/*  1118 */         } else {
/*  1119 */             Sk.builtin.pyCheckArgs("__init__", arguments, 4, 4, false, false);
/*  1120 */         }
/*  1121 */         while (true) {
/*  1122 */             try {
/*  1123 */                 switch ($blk) {
/*  1124 */                 case 0:
/*  1125 */                     /* --- codeobj entry --- */
/*  1126 */                     if (self === undefined) {
/*  1127 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1128 */                     }
/*  1129 */                     if (initx === undefined) {
/*  1130 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initx\' referenced before assignment');
/*  1131 */                     }
/*  1132 */                     if (inity === undefined) {
/*  1133 */                         throw new Sk.builtin.UnboundLocalError('local variable \'inity\' referenced before assignment');
/*  1134 */                     }
/*  1135 */                     if (initz === undefined) {
/*  1136 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initz\' referenced before assignment');
/*  1137 */                     }
/*  1138 */ 
/*  1139 */                     //
/*  1140 */                     // line 14:
/*  1141 */                     //         self.x = initx
/*  1142 */                     //         ^
/*  1143 */                     //
/*  1144 */                     $currLineNo = 14;
/*  1145 */                     $currColNo = 8;
/*  1146 */ 
/*  1147 */                     if (initx === undefined) {
/*  1148 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initx\' referenced before assignment');
/*  1149 */                     }
/*  1150 */                     if (self === undefined) {
/*  1151 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1152 */                     }
/*  1153 */                     $ret = Sk.abstr.sattr(self, 'x', initx, true);
/*  1154 */                     $blk = 1; /* allowing case fallthrough */
/*  1155 */                 case 1:
/*  1156 */                     /* --- function return or resume suspension --- */
/*  1157 */                     if ($ret && $ret.$isSuspension) {
/*  1158 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 14, 8);
/*  1159 */                     }
/*  1160 */                     //
/*  1161 */                     // line 15:
/*  1162 */                     //         self.y = inity
/*  1163 */                     //         ^
/*  1164 */                     //
/*  1165 */                     $currLineNo = 15;
/*  1166 */                     $currColNo = 8;
/*  1167 */ 
/*  1168 */                     if (inity === undefined) {
/*  1169 */                         throw new Sk.builtin.UnboundLocalError('local variable \'inity\' referenced before assignment');
/*  1170 */                     }
/*  1171 */                     if (self === undefined) {
/*  1172 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1173 */                     }
/*  1174 */                     $ret = Sk.abstr.sattr(self, 'y', inity, true);
/*  1175 */                     $blk = 2; /* allowing case fallthrough */
/*  1176 */                 case 2:
/*  1177 */                     /* --- function return or resume suspension --- */
/*  1178 */                     if ($ret && $ret.$isSuspension) {
/*  1179 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 15, 8);
/*  1180 */                     }
/*  1181 */                     //
/*  1182 */                     // line 16:
/*  1183 */                     //         self.z = initz
/*  1184 */                     //         ^
/*  1185 */                     //
/*  1186 */                     $currLineNo = 16;
/*  1187 */                     $currColNo = 8;
/*  1188 */ 
/*  1189 */                     if (initz === undefined) {
/*  1190 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initz\' referenced before assignment');
/*  1191 */                     }
/*  1192 */                     if (self === undefined) {
/*  1193 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1194 */                     }
/*  1195 */                     $ret = Sk.abstr.sattr(self, 'z', initz, true);
/*  1196 */                     $blk = 3; /* allowing case fallthrough */
/*  1197 */                 case 3:
/*  1198 */                     /* --- function return or resume suspension --- */
/*  1199 */                     if ($ret && $ret.$isSuspension) {
/*  1200 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 16, 8);
/*  1201 */                     }
/*  1202 */                     return Sk.builtin.none.none$;
/*  1203 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1204 */                 }
/*  1205 */             } catch (err) {
/*  1206 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1207 */                     err = new Sk.builtin.ExternalError(err);
/*  1208 */                 }
/*  1209 */                 err.traceback.push({
/*  1210 */                     lineno: $currLineNo,
/*  1211 */                     colno: $currColNo,
/*  1212 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1213 */                 });
/*  1214 */                 if ($exc.length > 0) {
/*  1215 */                     $err = err;
/*  1216 */                     $blk = $exc.pop();
/*  1217 */                     continue;
/*  1218 */                 } else {
/*  1219 */                     throw err;
/*  1220 */                 }
/*  1221 */             }
/*  1222 */         }
/*  1223 */     });
/*  1224 */     var $scope127 = (function $__str__128$(self) {
/*  1225 */         var self, self, self, self, $str129, $str129, $lattr130, $elem131, $str129, $lattr130, $elem131, $lattr132, $elem133;
/*  1226 */         var $wakeFromSuspension = function() {
/*  1227 */             var susp = $scope127.$wakingSuspension;
/*  1228 */             delete $scope127.$wakingSuspension;
/*  1229 */             $blk = susp.$blk;
/*  1230 */             $loc = susp.$loc;
/*  1231 */             $gbl = susp.$gbl;
/*  1232 */             $exc = susp.$exc;
/*  1233 */             $err = susp.$err;
/*  1234 */             $postfinally = susp.$postfinally;
/*  1235 */             $currLineNo = susp.$lineno;
/*  1236 */             $currColNo = susp.$colno;
/*  1237 */             Sk.lastYield = Date.now();
/*  1238 */             self = susp.$tmps.self;
/*  1239 */             $str129 = susp.$tmps.$str129;
/*  1240 */             $lattr130 = susp.$tmps.$lattr130;
/*  1241 */             $elem131 = susp.$tmps.$elem131;
/*  1242 */             $lattr132 = susp.$tmps.$lattr132;
/*  1243 */             $elem133 = susp.$tmps.$elem133;
/*  1244 */             try {
/*  1245 */                 $ret = susp.child.resume();
/*  1246 */             } catch (err) {
/*  1247 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1248 */                     err = new Sk.builtin.ExternalError(err);
/*  1249 */                 }
/*  1250 */                 err.traceback.push({
/*  1251 */                     lineno: $currLineNo,
/*  1252 */                     colno: $currColNo,
/*  1253 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1254 */                 });
/*  1255 */                 if ($exc.length > 0) {
/*  1256 */                     $err = err;
/*  1257 */                     $blk = $exc.pop();
/*  1258 */                 } else {
/*  1259 */                     throw err;
/*  1260 */                 }
/*  1261 */             }
/*  1262 */         };
/*  1263 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1264 */             var susp = new Sk.misceval.Suspension();
/*  1265 */             susp.child = $child;
/*  1266 */             susp.resume = function() {
/*  1267 */                 $scope127.$wakingSuspension = susp;
/*  1268 */                 return $scope127();
/*  1269 */             };
/*  1270 */             susp.data = susp.child.data;
/*  1271 */             susp.$blk = $blk;
/*  1272 */             susp.$loc = $loc;
/*  1273 */             susp.$gbl = $gbl;
/*  1274 */             susp.$exc = $exc;
/*  1275 */             susp.$err = $err;
/*  1276 */             susp.$postfinally = $postfinally;
/*  1277 */             susp.$filename = $filename;
/*  1278 */             susp.$lineno = $lineno;
/*  1279 */             susp.$colno = $colno;
/*  1280 */             susp.optional = susp.child.optional;
/*  1281 */             susp.$tmps = {
/*  1282 */                 "self": self,
/*  1283 */                 "$str129": $str129,
/*  1284 */                 "$lattr130": $lattr130,
/*  1285 */                 "$elem131": $elem131,
/*  1286 */                 "$lattr132": $lattr132,
/*  1287 */                 "$elem133": $elem133
/*  1288 */             };
/*  1289 */             return susp;
/*  1290 */         };
/*  1291 */         var $blk = 0,
/*  1292 */             $exc = [],
/*  1293 */             $loc = {},
/*  1294 */             $gbl = this,
/*  1295 */             $err = undefined,
/*  1296 */             $ret = undefined,
/*  1297 */             $postfinally = undefined,
/*  1298 */             $currLineNo = undefined,
/*  1299 */             $currColNo = undefined;
/*  1300 */         if ($scope127.$wakingSuspension !== undefined) {
/*  1301 */             $wakeFromSuspension();
/*  1302 */         } else {
/*  1303 */             Sk.builtin.pyCheckArgs("__str__", arguments, 1, 1, false, false);
/*  1304 */         }
/*  1305 */         while (true) {
/*  1306 */             try {
/*  1307 */                 switch ($blk) {
/*  1308 */                 case 0:
/*  1309 */                     /* --- codeobj entry --- */
/*  1310 */                     if (self === undefined) {
/*  1311 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1312 */                     }
/*  1313 */ 
/*  1314 */                     //
/*  1315 */                     // line 19:
/*  1316 */                     //         return '(%s,%s,%s)' % (self.x, self.y, self.z)
/*  1317 */                     //         ^
/*  1318 */                     //
/*  1319 */                     $currLineNo = 19;
/*  1320 */                     $currColNo = 8;
/*  1321 */ 
/*  1322 */                     var $str129 = new Sk.builtins['str']('(%s,%s,%s)');
/*  1323 */                     if (self === undefined) {
/*  1324 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1325 */                     }
/*  1326 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  1327 */                     $blk = 1; /* allowing case fallthrough */
/*  1328 */                 case 1:
/*  1329 */                     /* --- function return or resume suspension --- */
/*  1330 */                     if ($ret && $ret.$isSuspension) {
/*  1331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 19, 31);
/*  1332 */                     }
/*  1333 */                     var $lattr130 = $ret;
/*  1334 */                     var $elem131 = $lattr130;
/*  1335 */                     if (self === undefined) {
/*  1336 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1337 */                     }
/*  1338 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  1339 */                     $blk = 2; /* allowing case fallthrough */
/*  1340 */                 case 2:
/*  1341 */                     /* --- function return or resume suspension --- */
/*  1342 */                     if ($ret && $ret.$isSuspension) {
/*  1343 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 19, 39);
/*  1344 */                     }
/*  1345 */                     var $lattr132 = $ret;
/*  1346 */                     var $elem133 = $lattr132;
/*  1347 */                     if (self === undefined) {
/*  1348 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1349 */                     }
/*  1350 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  1351 */                     $blk = 3; /* allowing case fallthrough */
/*  1352 */                 case 3:
/*  1353 */                     /* --- function return or resume suspension --- */
/*  1354 */                     if ($ret && $ret.$isSuspension) {
/*  1355 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 19, 47);
/*  1356 */                     }
/*  1357 */                     var $lattr134 = $ret;
/*  1358 */                     var $elem135 = $lattr134;
/*  1359 */                     var $loadtuple136 = new Sk.builtins['tuple']([$elem131, $elem133, $elem135]);
/*  1360 */                     var $binop137 = Sk.abstr.numberBinOp($str129, $loadtuple136, 'Mod');
/*  1361 */                     return $binop137;
/*  1362 */                     return Sk.builtin.none.none$;
/*  1363 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1364 */                 }
/*  1365 */             } catch (err) {
/*  1366 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1367 */                     err = new Sk.builtin.ExternalError(err);
/*  1368 */                 }
/*  1369 */                 err.traceback.push({
/*  1370 */                     lineno: $currLineNo,
/*  1371 */                     colno: $currColNo,
/*  1372 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1373 */                 });
/*  1374 */                 if ($exc.length > 0) {
/*  1375 */                     $err = err;
/*  1376 */                     $blk = $exc.pop();
/*  1377 */                     continue;
/*  1378 */                 } else {
/*  1379 */                     throw err;
/*  1380 */                 }
/*  1381 */             }
/*  1382 */         }
/*  1383 */     });
/*  1384 */     var $scope139 = (function $__repr__140$(self) {
/*  1385 */         var self, self, self, self, $str141, $str141, $lattr142, $elem143, $str141, $lattr142, $elem143, $lattr144, $elem145;
/*  1386 */         var $wakeFromSuspension = function() {
/*  1387 */             var susp = $scope139.$wakingSuspension;
/*  1388 */             delete $scope139.$wakingSuspension;
/*  1389 */             $blk = susp.$blk;
/*  1390 */             $loc = susp.$loc;
/*  1391 */             $gbl = susp.$gbl;
/*  1392 */             $exc = susp.$exc;
/*  1393 */             $err = susp.$err;
/*  1394 */             $postfinally = susp.$postfinally;
/*  1395 */             $currLineNo = susp.$lineno;
/*  1396 */             $currColNo = susp.$colno;
/*  1397 */             Sk.lastYield = Date.now();
/*  1398 */             self = susp.$tmps.self;
/*  1399 */             $str141 = susp.$tmps.$str141;
/*  1400 */             $lattr142 = susp.$tmps.$lattr142;
/*  1401 */             $elem143 = susp.$tmps.$elem143;
/*  1402 */             $lattr144 = susp.$tmps.$lattr144;
/*  1403 */             $elem145 = susp.$tmps.$elem145;
/*  1404 */             try {
/*  1405 */                 $ret = susp.child.resume();
/*  1406 */             } catch (err) {
/*  1407 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1408 */                     err = new Sk.builtin.ExternalError(err);
/*  1409 */                 }
/*  1410 */                 err.traceback.push({
/*  1411 */                     lineno: $currLineNo,
/*  1412 */                     colno: $currColNo,
/*  1413 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1414 */                 });
/*  1415 */                 if ($exc.length > 0) {
/*  1416 */                     $err = err;
/*  1417 */                     $blk = $exc.pop();
/*  1418 */                 } else {
/*  1419 */                     throw err;
/*  1420 */                 }
/*  1421 */             }
/*  1422 */         };
/*  1423 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1424 */             var susp = new Sk.misceval.Suspension();
/*  1425 */             susp.child = $child;
/*  1426 */             susp.resume = function() {
/*  1427 */                 $scope139.$wakingSuspension = susp;
/*  1428 */                 return $scope139();
/*  1429 */             };
/*  1430 */             susp.data = susp.child.data;
/*  1431 */             susp.$blk = $blk;
/*  1432 */             susp.$loc = $loc;
/*  1433 */             susp.$gbl = $gbl;
/*  1434 */             susp.$exc = $exc;
/*  1435 */             susp.$err = $err;
/*  1436 */             susp.$postfinally = $postfinally;
/*  1437 */             susp.$filename = $filename;
/*  1438 */             susp.$lineno = $lineno;
/*  1439 */             susp.$colno = $colno;
/*  1440 */             susp.optional = susp.child.optional;
/*  1441 */             susp.$tmps = {
/*  1442 */                 "self": self,
/*  1443 */                 "$str141": $str141,
/*  1444 */                 "$lattr142": $lattr142,
/*  1445 */                 "$elem143": $elem143,
/*  1446 */                 "$lattr144": $lattr144,
/*  1447 */                 "$elem145": $elem145
/*  1448 */             };
/*  1449 */             return susp;
/*  1450 */         };
/*  1451 */         var $blk = 0,
/*  1452 */             $exc = [],
/*  1453 */             $loc = {},
/*  1454 */             $gbl = this,
/*  1455 */             $err = undefined,
/*  1456 */             $ret = undefined,
/*  1457 */             $postfinally = undefined,
/*  1458 */             $currLineNo = undefined,
/*  1459 */             $currColNo = undefined;
/*  1460 */         if ($scope139.$wakingSuspension !== undefined) {
/*  1461 */             $wakeFromSuspension();
/*  1462 */         } else {
/*  1463 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  1464 */         }
/*  1465 */         while (true) {
/*  1466 */             try {
/*  1467 */                 switch ($blk) {
/*  1468 */                 case 0:
/*  1469 */                     /* --- codeobj entry --- */
/*  1470 */                     if (self === undefined) {
/*  1471 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1472 */                     }
/*  1473 */ 
/*  1474 */                     //
/*  1475 */                     // line 22:
/*  1476 */                     //         return 'Vector(%s,%s,%s)' % (self.x, self.y, self.z)
/*  1477 */                     //         ^
/*  1478 */                     //
/*  1479 */                     $currLineNo = 22;
/*  1480 */                     $currColNo = 8;
/*  1481 */ 
/*  1482 */                     var $str141 = new Sk.builtins['str']('Vector(%s,%s,%s)');
/*  1483 */                     if (self === undefined) {
/*  1484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1485 */                     }
/*  1486 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  1487 */                     $blk = 1; /* allowing case fallthrough */
/*  1488 */                 case 1:
/*  1489 */                     /* --- function return or resume suspension --- */
/*  1490 */                     if ($ret && $ret.$isSuspension) {
/*  1491 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 22, 37);
/*  1492 */                     }
/*  1493 */                     var $lattr142 = $ret;
/*  1494 */                     var $elem143 = $lattr142;
/*  1495 */                     if (self === undefined) {
/*  1496 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1497 */                     }
/*  1498 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  1499 */                     $blk = 2; /* allowing case fallthrough */
/*  1500 */                 case 2:
/*  1501 */                     /* --- function return or resume suspension --- */
/*  1502 */                     if ($ret && $ret.$isSuspension) {
/*  1503 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 22, 45);
/*  1504 */                     }
/*  1505 */                     var $lattr144 = $ret;
/*  1506 */                     var $elem145 = $lattr144;
/*  1507 */                     if (self === undefined) {
/*  1508 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1509 */                     }
/*  1510 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  1511 */                     $blk = 3; /* allowing case fallthrough */
/*  1512 */                 case 3:
/*  1513 */                     /* --- function return or resume suspension --- */
/*  1514 */                     if ($ret && $ret.$isSuspension) {
/*  1515 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 22, 53);
/*  1516 */                     }
/*  1517 */                     var $lattr146 = $ret;
/*  1518 */                     var $elem147 = $lattr146;
/*  1519 */                     var $loadtuple148 = new Sk.builtins['tuple']([$elem143, $elem145, $elem147]);
/*  1520 */                     var $binop149 = Sk.abstr.numberBinOp($str141, $loadtuple148, 'Mod');
/*  1521 */                     return $binop149;
/*  1522 */                     return Sk.builtin.none.none$;
/*  1523 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1524 */                 }
/*  1525 */             } catch (err) {
/*  1526 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1527 */                     err = new Sk.builtin.ExternalError(err);
/*  1528 */                 }
/*  1529 */                 err.traceback.push({
/*  1530 */                     lineno: $currLineNo,
/*  1531 */                     colno: $currColNo,
/*  1532 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1533 */                 });
/*  1534 */                 if ($exc.length > 0) {
/*  1535 */                     $err = err;
/*  1536 */                     $blk = $exc.pop();
/*  1537 */                     continue;
/*  1538 */                 } else {
/*  1539 */                     throw err;
/*  1540 */                 }
/*  1541 */             }
/*  1542 */         }
/*  1543 */     });
/*  1544 */     var $scope151 = (function $magnitude152$(self) {
/*  1545 */         var self, self, self, $loadgbl153, $loadgbl153, $lattr154, $loadgbl153, $lattr154, $lattr155, $loadgbl153, $lattr154, $lattr155, $call156;
/*  1546 */         var $wakeFromSuspension = function() {
/*  1547 */             var susp = $scope151.$wakingSuspension;
/*  1548 */             delete $scope151.$wakingSuspension;
/*  1549 */             $blk = susp.$blk;
/*  1550 */             $loc = susp.$loc;
/*  1551 */             $gbl = susp.$gbl;
/*  1552 */             $exc = susp.$exc;
/*  1553 */             $err = susp.$err;
/*  1554 */             $postfinally = susp.$postfinally;
/*  1555 */             $currLineNo = susp.$lineno;
/*  1556 */             $currColNo = susp.$colno;
/*  1557 */             Sk.lastYield = Date.now();
/*  1558 */             self = susp.$tmps.self;
/*  1559 */             $loadgbl153 = susp.$tmps.$loadgbl153;
/*  1560 */             $lattr154 = susp.$tmps.$lattr154;
/*  1561 */             $lattr155 = susp.$tmps.$lattr155;
/*  1562 */             $call156 = susp.$tmps.$call156;
/*  1563 */             try {
/*  1564 */                 $ret = susp.child.resume();
/*  1565 */             } catch (err) {
/*  1566 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1567 */                     err = new Sk.builtin.ExternalError(err);
/*  1568 */                 }
/*  1569 */                 err.traceback.push({
/*  1570 */                     lineno: $currLineNo,
/*  1571 */                     colno: $currColNo,
/*  1572 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1573 */                 });
/*  1574 */                 if ($exc.length > 0) {
/*  1575 */                     $err = err;
/*  1576 */                     $blk = $exc.pop();
/*  1577 */                 } else {
/*  1578 */                     throw err;
/*  1579 */                 }
/*  1580 */             }
/*  1581 */         };
/*  1582 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1583 */             var susp = new Sk.misceval.Suspension();
/*  1584 */             susp.child = $child;
/*  1585 */             susp.resume = function() {
/*  1586 */                 $scope151.$wakingSuspension = susp;
/*  1587 */                 return $scope151();
/*  1588 */             };
/*  1589 */             susp.data = susp.child.data;
/*  1590 */             susp.$blk = $blk;
/*  1591 */             susp.$loc = $loc;
/*  1592 */             susp.$gbl = $gbl;
/*  1593 */             susp.$exc = $exc;
/*  1594 */             susp.$err = $err;
/*  1595 */             susp.$postfinally = $postfinally;
/*  1596 */             susp.$filename = $filename;
/*  1597 */             susp.$lineno = $lineno;
/*  1598 */             susp.$colno = $colno;
/*  1599 */             susp.optional = susp.child.optional;
/*  1600 */             susp.$tmps = {
/*  1601 */                 "self": self,
/*  1602 */                 "$loadgbl153": $loadgbl153,
/*  1603 */                 "$lattr154": $lattr154,
/*  1604 */                 "$lattr155": $lattr155,
/*  1605 */                 "$call156": $call156
/*  1606 */             };
/*  1607 */             return susp;
/*  1608 */         };
/*  1609 */         var $blk = 0,
/*  1610 */             $exc = [],
/*  1611 */             $loc = {},
/*  1612 */             $gbl = this,
/*  1613 */             $err = undefined,
/*  1614 */             $ret = undefined,
/*  1615 */             $postfinally = undefined,
/*  1616 */             $currLineNo = undefined,
/*  1617 */             $currColNo = undefined;
/*  1618 */         if ($scope151.$wakingSuspension !== undefined) {
/*  1619 */             $wakeFromSuspension();
/*  1620 */         } else {
/*  1621 */             Sk.builtin.pyCheckArgs("magnitude", arguments, 1, 1, false, false);
/*  1622 */         }
/*  1623 */         while (true) {
/*  1624 */             try {
/*  1625 */                 switch ($blk) {
/*  1626 */                 case 0:
/*  1627 */                     /* --- codeobj entry --- */
/*  1628 */                     if (self === undefined) {
/*  1629 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1630 */                     }
/*  1631 */ 
/*  1632 */                     //
/*  1633 */                     // line 25:
/*  1634 */                     //         return math.sqrt(self.dot(self))
/*  1635 */                     //         ^
/*  1636 */                     //
/*  1637 */                     $currLineNo = 25;
/*  1638 */                     $currColNo = 8;
/*  1639 */ 
/*  1640 */                     var $loadgbl153 = Sk.misceval.loadname('math', $gbl);
/*  1641 */                     $ret = Sk.abstr.gattr($loadgbl153, 'sqrt', true);
/*  1642 */                     $blk = 1; /* allowing case fallthrough */
/*  1643 */                 case 1:
/*  1644 */                     /* --- function return or resume suspension --- */
/*  1645 */                     if ($ret && $ret.$isSuspension) {
/*  1646 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 25, 15);
/*  1647 */                     }
/*  1648 */                     var $lattr154 = $ret;
/*  1649 */                     if (self === undefined) {
/*  1650 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1651 */                     }
/*  1652 */                     $ret = Sk.abstr.gattr(self, 'dot', true);
/*  1653 */                     $blk = 2; /* allowing case fallthrough */
/*  1654 */                 case 2:
/*  1655 */                     /* --- function return or resume suspension --- */
/*  1656 */                     if ($ret && $ret.$isSuspension) {
/*  1657 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 25, 25);
/*  1658 */                     }
/*  1659 */                     var $lattr155 = $ret;
/*  1660 */                     if (self === undefined) {
/*  1661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1662 */                     }
/*  1663 */                     $ret;
/*  1664 */                     $ret = Sk.misceval.callsimOrSuspend($lattr155, self);
/*  1665 */                     $blk = 3; /* allowing case fallthrough */
/*  1666 */                 case 3:
/*  1667 */                     /* --- function return or resume suspension --- */
/*  1668 */                     if ($ret && $ret.$isSuspension) {
/*  1669 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 25, 25);
/*  1670 */                     }
/*  1671 */                     var $call156 = $ret;
/*  1672 */                     //
/*  1673 */                     // line 25:
/*  1674 */                     //         return math.sqrt(self.dot(self))
/*  1675 */                     //                          ^
/*  1676 */                     //
/*  1677 */                     $currLineNo = 25;
/*  1678 */                     $currColNo = 25;
/*  1679 */ 
/*  1680 */                     $ret;
/*  1681 */                     $ret = Sk.misceval.callsimOrSuspend($lattr154, $call156);
/*  1682 */                     $blk = 4; /* allowing case fallthrough */
/*  1683 */                 case 4:
/*  1684 */                     /* --- function return or resume suspension --- */
/*  1685 */                     if ($ret && $ret.$isSuspension) {
/*  1686 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 25, 15);
/*  1687 */                     }
/*  1688 */                     var $call157 = $ret;
/*  1689 */                     //
/*  1690 */                     // line 25:
/*  1691 */                     //         return math.sqrt(self.dot(self))
/*  1692 */                     //                ^
/*  1693 */                     //
/*  1694 */                     $currLineNo = 25;
/*  1695 */                     $currColNo = 15;
/*  1696 */ 
/*  1697 */                     return $call157;
/*  1698 */                     return Sk.builtin.none.none$;
/*  1699 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1700 */                 }
/*  1701 */             } catch (err) {
/*  1702 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1703 */                     err = new Sk.builtin.ExternalError(err);
/*  1704 */                 }
/*  1705 */                 err.traceback.push({
/*  1706 */                     lineno: $currLineNo,
/*  1707 */                     colno: $currColNo,
/*  1708 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1709 */                 });
/*  1710 */                 if ($exc.length > 0) {
/*  1711 */                     $err = err;
/*  1712 */                     $blk = $exc.pop();
/*  1713 */                     continue;
/*  1714 */                 } else {
/*  1715 */                     throw err;
/*  1716 */                 }
/*  1717 */             }
/*  1718 */         }
/*  1719 */     });
/*  1720 */     var $scope159 = (function $__add__160$(self, other) {
/*  1721 */         var other, other, other, other, other, other, other, other, self, self, self, self, self, self, self, $lattr161, $loadgbl164, $loadgbl164, $lattr165, $loadgbl164, $lattr165, $lattr166, $binop167, $loadgbl164, $lattr165, $lattr166, $binop167, $lattr168, $loadgbl164, $lattr165, $lattr166, $binop167, $lattr168, $lattr169, $binop170, $loadgbl164, $lattr165, $lattr166, $binop167, $lattr168, $lattr169, $binop170, $lattr171, $loadgbl164, $lattr165, $lattr166, $binop167, $lattr168, $lattr169, $binop170, $lattr171, $lattr172, $binop173, $loadgbl175, $loadgbl175, $lattr176, $loadgbl175, $lattr176, $lattr177, $binop178, $loadgbl175, $lattr176, $lattr177, $binop178, $lattr179, $loadgbl175, $lattr176, $lattr177, $binop178, $lattr179, $lattr180, $binop181, $loadgbl175, $lattr176, $lattr177, $binop178, $lattr179, $lattr180, $binop181, $lattr182, $loadgbl175, $lattr176, $lattr177, $binop178, $lattr179, $lattr180, $binop181, $lattr182, $lattr183, $binop184;
/*  1722 */         var $wakeFromSuspension = function() {
/*  1723 */             var susp = $scope159.$wakingSuspension;
/*  1724 */             delete $scope159.$wakingSuspension;
/*  1725 */             $blk = susp.$blk;
/*  1726 */             $loc = susp.$loc;
/*  1727 */             $gbl = susp.$gbl;
/*  1728 */             $exc = susp.$exc;
/*  1729 */             $err = susp.$err;
/*  1730 */             $postfinally = susp.$postfinally;
/*  1731 */             $currLineNo = susp.$lineno;
/*  1732 */             $currColNo = susp.$colno;
/*  1733 */             Sk.lastYield = Date.now();
/*  1734 */             other = susp.$tmps.other;
/*  1735 */             self = susp.$tmps.self;
/*  1736 */             $lattr161 = susp.$tmps.$lattr161;
/*  1737 */             $loadgbl164 = susp.$tmps.$loadgbl164;
/*  1738 */             $lattr165 = susp.$tmps.$lattr165;
/*  1739 */             $lattr166 = susp.$tmps.$lattr166;
/*  1740 */             $binop167 = susp.$tmps.$binop167;
/*  1741 */             $lattr168 = susp.$tmps.$lattr168;
/*  1742 */             $lattr169 = susp.$tmps.$lattr169;
/*  1743 */             $binop170 = susp.$tmps.$binop170;
/*  1744 */             $lattr171 = susp.$tmps.$lattr171;
/*  1745 */             $lattr172 = susp.$tmps.$lattr172;
/*  1746 */             $binop173 = susp.$tmps.$binop173;
/*  1747 */             $loadgbl175 = susp.$tmps.$loadgbl175;
/*  1748 */             $lattr176 = susp.$tmps.$lattr176;
/*  1749 */             $lattr177 = susp.$tmps.$lattr177;
/*  1750 */             $binop178 = susp.$tmps.$binop178;
/*  1751 */             $lattr179 = susp.$tmps.$lattr179;
/*  1752 */             $lattr180 = susp.$tmps.$lattr180;
/*  1753 */             $binop181 = susp.$tmps.$binop181;
/*  1754 */             $lattr182 = susp.$tmps.$lattr182;
/*  1755 */             $lattr183 = susp.$tmps.$lattr183;
/*  1756 */             $binop184 = susp.$tmps.$binop184;
/*  1757 */             try {
/*  1758 */                 $ret = susp.child.resume();
/*  1759 */             } catch (err) {
/*  1760 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1761 */                     err = new Sk.builtin.ExternalError(err);
/*  1762 */                 }
/*  1763 */                 err.traceback.push({
/*  1764 */                     lineno: $currLineNo,
/*  1765 */                     colno: $currColNo,
/*  1766 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  1767 */                 });
/*  1768 */                 if ($exc.length > 0) {
/*  1769 */                     $err = err;
/*  1770 */                     $blk = $exc.pop();
/*  1771 */                 } else {
/*  1772 */                     throw err;
/*  1773 */                 }
/*  1774 */             }
/*  1775 */         };
/*  1776 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1777 */             var susp = new Sk.misceval.Suspension();
/*  1778 */             susp.child = $child;
/*  1779 */             susp.resume = function() {
/*  1780 */                 $scope159.$wakingSuspension = susp;
/*  1781 */                 return $scope159();
/*  1782 */             };
/*  1783 */             susp.data = susp.child.data;
/*  1784 */             susp.$blk = $blk;
/*  1785 */             susp.$loc = $loc;
/*  1786 */             susp.$gbl = $gbl;
/*  1787 */             susp.$exc = $exc;
/*  1788 */             susp.$err = $err;
/*  1789 */             susp.$postfinally = $postfinally;
/*  1790 */             susp.$filename = $filename;
/*  1791 */             susp.$lineno = $lineno;
/*  1792 */             susp.$colno = $colno;
/*  1793 */             susp.optional = susp.child.optional;
/*  1794 */             susp.$tmps = {
/*  1795 */                 "other": other,
/*  1796 */                 "self": self,
/*  1797 */                 "$lattr161": $lattr161,
/*  1798 */                 "$loadgbl164": $loadgbl164,
/*  1799 */                 "$lattr165": $lattr165,
/*  1800 */                 "$lattr166": $lattr166,
/*  1801 */                 "$binop167": $binop167,
/*  1802 */                 "$lattr168": $lattr168,
/*  1803 */                 "$lattr169": $lattr169,
/*  1804 */                 "$binop170": $binop170,
/*  1805 */                 "$lattr171": $lattr171,
/*  1806 */                 "$lattr172": $lattr172,
/*  1807 */                 "$binop173": $binop173,
/*  1808 */                 "$loadgbl175": $loadgbl175,
/*  1809 */                 "$lattr176": $lattr176,
/*  1810 */                 "$lattr177": $lattr177,
/*  1811 */                 "$binop178": $binop178,
/*  1812 */                 "$lattr179": $lattr179,
/*  1813 */                 "$lattr180": $lattr180,
/*  1814 */                 "$binop181": $binop181,
/*  1815 */                 "$lattr182": $lattr182,
/*  1816 */                 "$lattr183": $lattr183,
/*  1817 */                 "$binop184": $binop184
/*  1818 */             };
/*  1819 */             return susp;
/*  1820 */         };
/*  1821 */         var $blk = 0,
/*  1822 */             $exc = [],
/*  1823 */             $loc = {},
/*  1824 */             $gbl = this,
/*  1825 */             $err = undefined,
/*  1826 */             $ret = undefined,
/*  1827 */             $postfinally = undefined,
/*  1828 */             $currLineNo = undefined,
/*  1829 */             $currColNo = undefined;
/*  1830 */         if ($scope159.$wakingSuspension !== undefined) {
/*  1831 */             $wakeFromSuspension();
/*  1832 */         } else {
/*  1833 */             Sk.builtin.pyCheckArgs("__add__", arguments, 2, 2, false, false);
/*  1834 */         }
/*  1835 */         while (true) {
/*  1836 */             try {
/*  1837 */                 switch ($blk) {
/*  1838 */                 case 0:
/*  1839 */                     /* --- codeobj entry --- */
/*  1840 */                     if (self === undefined) {
/*  1841 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1842 */                     }
/*  1843 */                     if (other === undefined) {
/*  1844 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1845 */                     }
/*  1846 */ 
/*  1847 */                     //
/*  1848 */                     // line 28:
/*  1849 */                     //         if other.isPoint():
/*  1850 */                     //         ^
/*  1851 */                     //
/*  1852 */                     $currLineNo = 28;
/*  1853 */                     $currColNo = 8;
/*  1854 */ 
/*  1855 */                     if (other === undefined) {
/*  1856 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1857 */                     }
/*  1858 */                     $ret = Sk.abstr.gattr(other, 'isPoint', true);
/*  1859 */                     $blk = 3; /* allowing case fallthrough */
/*  1860 */                 case 3:
/*  1861 */                     /* --- function return or resume suspension --- */
/*  1862 */                     if ($ret && $ret.$isSuspension) {
/*  1863 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 28, 11);
/*  1864 */                     }
/*  1865 */                     var $lattr161 = $ret;
/*  1866 */                     $ret;
/*  1867 */                     $ret = Sk.misceval.callsimOrSuspend($lattr161);
/*  1868 */                     $blk = 4; /* allowing case fallthrough */
/*  1869 */                 case 4:
/*  1870 */                     /* --- function return or resume suspension --- */
/*  1871 */                     if ($ret && $ret.$isSuspension) {
/*  1872 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 28, 11);
/*  1873 */                     }
/*  1874 */                     var $call162 = $ret;
/*  1875 */                     //
/*  1876 */                     // line 28:
/*  1877 */                     //         if other.isPoint():
/*  1878 */                     //            ^
/*  1879 */                     //
/*  1880 */                     $currLineNo = 28;
/*  1881 */                     $currColNo = 11;
/*  1882 */ 
/*  1883 */                     var $jfalse163 = ($call162 === false || !Sk.misceval.isTrue($call162));
/*  1884 */                     if ($jfalse163) { /*test failed */
/*  1885 */                         $blk = 2;
/*  1886 */                         continue;
/*  1887 */                     }
/*  1888 */                     //
/*  1889 */                     // line 29:
/*  1890 */                     //             return Point(self.x + other.x, self.y + other.y, self.z + other.z)
/*  1891 */                     //             ^
/*  1892 */                     //
/*  1893 */                     $currLineNo = 29;
/*  1894 */                     $currColNo = 12;
/*  1895 */ 
/*  1896 */                     var $loadgbl164 = Sk.misceval.loadname('Point', $gbl);
/*  1897 */                     if (self === undefined) {
/*  1898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1899 */                     }
/*  1900 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  1901 */                     $blk = 5; /* allowing case fallthrough */
/*  1902 */                 case 5:
/*  1903 */                     /* --- function return or resume suspension --- */
/*  1904 */                     if ($ret && $ret.$isSuspension) {
/*  1905 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 25);
/*  1906 */                     }
/*  1907 */                     var $lattr165 = $ret;
/*  1908 */                     if (other === undefined) {
/*  1909 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1910 */                     }
/*  1911 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  1912 */                     $blk = 6; /* allowing case fallthrough */
/*  1913 */                 case 6:
/*  1914 */                     /* --- function return or resume suspension --- */
/*  1915 */                     if ($ret && $ret.$isSuspension) {
/*  1916 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 34);
/*  1917 */                     }
/*  1918 */                     var $lattr166 = $ret;
/*  1919 */                     var $binop167 = Sk.abstr.numberBinOp($lattr165, $lattr166, 'Add');
/*  1920 */                     if (self === undefined) {
/*  1921 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1922 */                     }
/*  1923 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  1924 */                     $blk = 7; /* allowing case fallthrough */
/*  1925 */                 case 7:
/*  1926 */                     /* --- function return or resume suspension --- */
/*  1927 */                     if ($ret && $ret.$isSuspension) {
/*  1928 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 43);
/*  1929 */                     }
/*  1930 */                     var $lattr168 = $ret;
/*  1931 */                     if (other === undefined) {
/*  1932 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1933 */                     }
/*  1934 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  1935 */                     $blk = 8; /* allowing case fallthrough */
/*  1936 */                 case 8:
/*  1937 */                     /* --- function return or resume suspension --- */
/*  1938 */                     if ($ret && $ret.$isSuspension) {
/*  1939 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 52);
/*  1940 */                     }
/*  1941 */                     var $lattr169 = $ret;
/*  1942 */                     var $binop170 = Sk.abstr.numberBinOp($lattr168, $lattr169, 'Add');
/*  1943 */                     if (self === undefined) {
/*  1944 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1945 */                     }
/*  1946 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  1947 */                     $blk = 9; /* allowing case fallthrough */
/*  1948 */                 case 9:
/*  1949 */                     /* --- function return or resume suspension --- */
/*  1950 */                     if ($ret && $ret.$isSuspension) {
/*  1951 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 61);
/*  1952 */                     }
/*  1953 */                     var $lattr171 = $ret;
/*  1954 */                     if (other === undefined) {
/*  1955 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1956 */                     }
/*  1957 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  1958 */                     $blk = 10; /* allowing case fallthrough */
/*  1959 */                 case 10:
/*  1960 */                     /* --- function return or resume suspension --- */
/*  1961 */                     if ($ret && $ret.$isSuspension) {
/*  1962 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 70);
/*  1963 */                     }
/*  1964 */                     var $lattr172 = $ret;
/*  1965 */                     var $binop173 = Sk.abstr.numberBinOp($lattr171, $lattr172, 'Add');
/*  1966 */                     $ret;
/*  1967 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl164, $binop167, $binop170, $binop173);
/*  1968 */                     $blk = 11; /* allowing case fallthrough */
/*  1969 */                 case 11:
/*  1970 */                     /* --- function return or resume suspension --- */
/*  1971 */                     if ($ret && $ret.$isSuspension) {
/*  1972 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 29, 19);
/*  1973 */                     }
/*  1974 */                     var $call174 = $ret;
/*  1975 */                     //
/*  1976 */                     // line 29:
/*  1977 */                     //             return Point(self.x + other.x, self.y + other.y, self.z + other.z)
/*  1978 */                     //                    ^
/*  1979 */                     //
/*  1980 */                     $currLineNo = 29;
/*  1981 */                     $currColNo = 19;
/*  1982 */ 
/*  1983 */                     return $call174;
/*  1984 */                     $blk = 1; /* allowing case fallthrough */
/*  1985 */                 case 1:
/*  1986 */                     /* --- end of if --- */
/*  1987 */                     return Sk.builtin.none.none$;
/*  1988 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1989 */                 case 2:
/*  1990 */                     /* --- next branch of if --- */
/*  1991 */                     //
/*  1992 */                     // line 31:
/*  1993 */                     //             return Vector(self.x + other.x, self.y + other.y, self.z + other.z)
/*  1994 */                     //             ^
/*  1995 */                     //
/*  1996 */                     $currLineNo = 31;
/*  1997 */                     $currColNo = 12;
/*  1998 */ 
/*  1999 */                     var $loadgbl175 = Sk.misceval.loadname('Vector', $gbl);
/*  2000 */                     if (self === undefined) {
/*  2001 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2002 */                     }
/*  2003 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  2004 */                     $blk = 12; /* allowing case fallthrough */
/*  2005 */                 case 12:
/*  2006 */                     /* --- function return or resume suspension --- */
/*  2007 */                     if ($ret && $ret.$isSuspension) {
/*  2008 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 26);
/*  2009 */                     }
/*  2010 */                     var $lattr176 = $ret;
/*  2011 */                     if (other === undefined) {
/*  2012 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2013 */                     }
/*  2014 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  2015 */                     $blk = 13; /* allowing case fallthrough */
/*  2016 */                 case 13:
/*  2017 */                     /* --- function return or resume suspension --- */
/*  2018 */                     if ($ret && $ret.$isSuspension) {
/*  2019 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 35);
/*  2020 */                     }
/*  2021 */                     var $lattr177 = $ret;
/*  2022 */                     var $binop178 = Sk.abstr.numberBinOp($lattr176, $lattr177, 'Add');
/*  2023 */                     if (self === undefined) {
/*  2024 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2025 */                     }
/*  2026 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  2027 */                     $blk = 14; /* allowing case fallthrough */
/*  2028 */                 case 14:
/*  2029 */                     /* --- function return or resume suspension --- */
/*  2030 */                     if ($ret && $ret.$isSuspension) {
/*  2031 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 44);
/*  2032 */                     }
/*  2033 */                     var $lattr179 = $ret;
/*  2034 */                     if (other === undefined) {
/*  2035 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2036 */                     }
/*  2037 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  2038 */                     $blk = 15; /* allowing case fallthrough */
/*  2039 */                 case 15:
/*  2040 */                     /* --- function return or resume suspension --- */
/*  2041 */                     if ($ret && $ret.$isSuspension) {
/*  2042 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 53);
/*  2043 */                     }
/*  2044 */                     var $lattr180 = $ret;
/*  2045 */                     var $binop181 = Sk.abstr.numberBinOp($lattr179, $lattr180, 'Add');
/*  2046 */                     if (self === undefined) {
/*  2047 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2048 */                     }
/*  2049 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  2050 */                     $blk = 16; /* allowing case fallthrough */
/*  2051 */                 case 16:
/*  2052 */                     /* --- function return or resume suspension --- */
/*  2053 */                     if ($ret && $ret.$isSuspension) {
/*  2054 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 62);
/*  2055 */                     }
/*  2056 */                     var $lattr182 = $ret;
/*  2057 */                     if (other === undefined) {
/*  2058 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2059 */                     }
/*  2060 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  2061 */                     $blk = 17; /* allowing case fallthrough */
/*  2062 */                 case 17:
/*  2063 */                     /* --- function return or resume suspension --- */
/*  2064 */                     if ($ret && $ret.$isSuspension) {
/*  2065 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 71);
/*  2066 */                     }
/*  2067 */                     var $lattr183 = $ret;
/*  2068 */                     var $binop184 = Sk.abstr.numberBinOp($lattr182, $lattr183, 'Add');
/*  2069 */                     $ret;
/*  2070 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl175, $binop178, $binop181, $binop184);
/*  2071 */                     $blk = 18; /* allowing case fallthrough */
/*  2072 */                 case 18:
/*  2073 */                     /* --- function return or resume suspension --- */
/*  2074 */                     if ($ret && $ret.$isSuspension) {
/*  2075 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 31, 19);
/*  2076 */                     }
/*  2077 */                     var $call185 = $ret;
/*  2078 */                     //
/*  2079 */                     // line 31:
/*  2080 */                     //             return Vector(self.x + other.x, self.y + other.y, self.z + other.z)
/*  2081 */                     //                    ^
/*  2082 */                     //
/*  2083 */                     $currLineNo = 31;
/*  2084 */                     $currColNo = 19;
/*  2085 */ 
/*  2086 */                     return $call185;
/*  2087 */                     $blk = 1; /* jump */
/*  2088 */                     continue;
/*  2089 */                 }
/*  2090 */             } catch (err) {
/*  2091 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2092 */                     err = new Sk.builtin.ExternalError(err);
/*  2093 */                 }
/*  2094 */                 err.traceback.push({
/*  2095 */                     lineno: $currLineNo,
/*  2096 */                     colno: $currColNo,
/*  2097 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2098 */                 });
/*  2099 */                 if ($exc.length > 0) {
/*  2100 */                     $err = err;
/*  2101 */                     $blk = $exc.pop();
/*  2102 */                     continue;
/*  2103 */                 } else {
/*  2104 */                     throw err;
/*  2105 */                 }
/*  2106 */             }
/*  2107 */         }
/*  2108 */     });
/*  2109 */     var $scope187 = (function $__sub__188$(self, other) {
/*  2110 */         var other, other, other, other, other, self, self, self, self, $lattr189, $loadgbl191, $loadgbl191, $lattr192, $loadgbl191, $lattr192, $lattr193, $binop194, $loadgbl191, $lattr192, $lattr193, $binop194, $lattr195, $loadgbl191, $lattr192, $lattr193, $binop194, $lattr195, $lattr196, $binop197, $loadgbl191, $lattr192, $lattr193, $binop194, $lattr195, $lattr196, $binop197, $lattr198, $loadgbl191, $lattr192, $lattr193, $binop194, $lattr195, $lattr196, $binop197, $lattr198, $lattr199, $binop200;
/*  2111 */         var $wakeFromSuspension = function() {
/*  2112 */             var susp = $scope187.$wakingSuspension;
/*  2113 */             delete $scope187.$wakingSuspension;
/*  2114 */             $blk = susp.$blk;
/*  2115 */             $loc = susp.$loc;
/*  2116 */             $gbl = susp.$gbl;
/*  2117 */             $exc = susp.$exc;
/*  2118 */             $err = susp.$err;
/*  2119 */             $postfinally = susp.$postfinally;
/*  2120 */             $currLineNo = susp.$lineno;
/*  2121 */             $currColNo = susp.$colno;
/*  2122 */             Sk.lastYield = Date.now();
/*  2123 */             other = susp.$tmps.other;
/*  2124 */             self = susp.$tmps.self;
/*  2125 */             $lattr189 = susp.$tmps.$lattr189;
/*  2126 */             $loadgbl191 = susp.$tmps.$loadgbl191;
/*  2127 */             $lattr192 = susp.$tmps.$lattr192;
/*  2128 */             $lattr193 = susp.$tmps.$lattr193;
/*  2129 */             $binop194 = susp.$tmps.$binop194;
/*  2130 */             $lattr195 = susp.$tmps.$lattr195;
/*  2131 */             $lattr196 = susp.$tmps.$lattr196;
/*  2132 */             $binop197 = susp.$tmps.$binop197;
/*  2133 */             $lattr198 = susp.$tmps.$lattr198;
/*  2134 */             $lattr199 = susp.$tmps.$lattr199;
/*  2135 */             $binop200 = susp.$tmps.$binop200;
/*  2136 */             try {
/*  2137 */                 $ret = susp.child.resume();
/*  2138 */             } catch (err) {
/*  2139 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2140 */                     err = new Sk.builtin.ExternalError(err);
/*  2141 */                 }
/*  2142 */                 err.traceback.push({
/*  2143 */                     lineno: $currLineNo,
/*  2144 */                     colno: $currColNo,
/*  2145 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2146 */                 });
/*  2147 */                 if ($exc.length > 0) {
/*  2148 */                     $err = err;
/*  2149 */                     $blk = $exc.pop();
/*  2150 */                 } else {
/*  2151 */                     throw err;
/*  2152 */                 }
/*  2153 */             }
/*  2154 */         };
/*  2155 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2156 */             var susp = new Sk.misceval.Suspension();
/*  2157 */             susp.child = $child;
/*  2158 */             susp.resume = function() {
/*  2159 */                 $scope187.$wakingSuspension = susp;
/*  2160 */                 return $scope187();
/*  2161 */             };
/*  2162 */             susp.data = susp.child.data;
/*  2163 */             susp.$blk = $blk;
/*  2164 */             susp.$loc = $loc;
/*  2165 */             susp.$gbl = $gbl;
/*  2166 */             susp.$exc = $exc;
/*  2167 */             susp.$err = $err;
/*  2168 */             susp.$postfinally = $postfinally;
/*  2169 */             susp.$filename = $filename;
/*  2170 */             susp.$lineno = $lineno;
/*  2171 */             susp.$colno = $colno;
/*  2172 */             susp.optional = susp.child.optional;
/*  2173 */             susp.$tmps = {
/*  2174 */                 "other": other,
/*  2175 */                 "self": self,
/*  2176 */                 "$lattr189": $lattr189,
/*  2177 */                 "$loadgbl191": $loadgbl191,
/*  2178 */                 "$lattr192": $lattr192,
/*  2179 */                 "$lattr193": $lattr193,
/*  2180 */                 "$binop194": $binop194,
/*  2181 */                 "$lattr195": $lattr195,
/*  2182 */                 "$lattr196": $lattr196,
/*  2183 */                 "$binop197": $binop197,
/*  2184 */                 "$lattr198": $lattr198,
/*  2185 */                 "$lattr199": $lattr199,
/*  2186 */                 "$binop200": $binop200
/*  2187 */             };
/*  2188 */             return susp;
/*  2189 */         };
/*  2190 */         var $blk = 0,
/*  2191 */             $exc = [],
/*  2192 */             $loc = {},
/*  2193 */             $gbl = this,
/*  2194 */             $err = undefined,
/*  2195 */             $ret = undefined,
/*  2196 */             $postfinally = undefined,
/*  2197 */             $currLineNo = undefined,
/*  2198 */             $currColNo = undefined;
/*  2199 */         if ($scope187.$wakingSuspension !== undefined) {
/*  2200 */             $wakeFromSuspension();
/*  2201 */         } else {
/*  2202 */             Sk.builtin.pyCheckArgs("__sub__", arguments, 2, 2, false, false);
/*  2203 */         }
/*  2204 */         while (true) {
/*  2205 */             try {
/*  2206 */                 switch ($blk) {
/*  2207 */                 case 0:
/*  2208 */                     /* --- codeobj entry --- */
/*  2209 */                     if (self === undefined) {
/*  2210 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2211 */                     }
/*  2212 */                     if (other === undefined) {
/*  2213 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2214 */                     }
/*  2215 */ 
/*  2216 */                     //
/*  2217 */                     // line 34:
/*  2218 */                     //         other.mustBeVector()
/*  2219 */                     //         ^
/*  2220 */                     //
/*  2221 */                     $currLineNo = 34;
/*  2222 */                     $currColNo = 8;
/*  2223 */ 
/*  2224 */                     if (other === undefined) {
/*  2225 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2226 */                     }
/*  2227 */                     $ret = Sk.abstr.gattr(other, 'mustBeVector', true);
/*  2228 */                     $blk = 1; /* allowing case fallthrough */
/*  2229 */                 case 1:
/*  2230 */                     /* --- function return or resume suspension --- */
/*  2231 */                     if ($ret && $ret.$isSuspension) {
/*  2232 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 34, 8);
/*  2233 */                     }
/*  2234 */                     var $lattr189 = $ret;
/*  2235 */                     $ret;
/*  2236 */                     $ret = Sk.misceval.callsimOrSuspend($lattr189);
/*  2237 */                     $blk = 2; /* allowing case fallthrough */
/*  2238 */                 case 2:
/*  2239 */                     /* --- function return or resume suspension --- */
/*  2240 */                     if ($ret && $ret.$isSuspension) {
/*  2241 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 34, 8);
/*  2242 */                     }
/*  2243 */                     var $call190 = $ret;
/*  2244 */                     //
/*  2245 */                     // line 34:
/*  2246 */                     //         other.mustBeVector()
/*  2247 */                     //         ^
/*  2248 */                     //
/*  2249 */                     $currLineNo = 34;
/*  2250 */                     $currColNo = 8;
/*  2251 */ 
/*  2252 */ 
/*  2253 */                     //
/*  2254 */                     // line 35:
/*  2255 */                     //         return Vector(self.x - other.x, self.y - other.y, self.z - other.z)
/*  2256 */                     //         ^
/*  2257 */                     //
/*  2258 */                     $currLineNo = 35;
/*  2259 */                     $currColNo = 8;
/*  2260 */ 
/*  2261 */                     var $loadgbl191 = Sk.misceval.loadname('Vector', $gbl);
/*  2262 */                     if (self === undefined) {
/*  2263 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2264 */                     }
/*  2265 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  2266 */                     $blk = 3; /* allowing case fallthrough */
/*  2267 */                 case 3:
/*  2268 */                     /* --- function return or resume suspension --- */
/*  2269 */                     if ($ret && $ret.$isSuspension) {
/*  2270 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 22);
/*  2271 */                     }
/*  2272 */                     var $lattr192 = $ret;
/*  2273 */                     if (other === undefined) {
/*  2274 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2275 */                     }
/*  2276 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  2277 */                     $blk = 4; /* allowing case fallthrough */
/*  2278 */                 case 4:
/*  2279 */                     /* --- function return or resume suspension --- */
/*  2280 */                     if ($ret && $ret.$isSuspension) {
/*  2281 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 31);
/*  2282 */                     }
/*  2283 */                     var $lattr193 = $ret;
/*  2284 */                     var $binop194 = Sk.abstr.numberBinOp($lattr192, $lattr193, 'Sub');
/*  2285 */                     if (self === undefined) {
/*  2286 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2287 */                     }
/*  2288 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  2289 */                     $blk = 5; /* allowing case fallthrough */
/*  2290 */                 case 5:
/*  2291 */                     /* --- function return or resume suspension --- */
/*  2292 */                     if ($ret && $ret.$isSuspension) {
/*  2293 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 40);
/*  2294 */                     }
/*  2295 */                     var $lattr195 = $ret;
/*  2296 */                     if (other === undefined) {
/*  2297 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2298 */                     }
/*  2299 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  2300 */                     $blk = 6; /* allowing case fallthrough */
/*  2301 */                 case 6:
/*  2302 */                     /* --- function return or resume suspension --- */
/*  2303 */                     if ($ret && $ret.$isSuspension) {
/*  2304 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 49);
/*  2305 */                     }
/*  2306 */                     var $lattr196 = $ret;
/*  2307 */                     var $binop197 = Sk.abstr.numberBinOp($lattr195, $lattr196, 'Sub');
/*  2308 */                     if (self === undefined) {
/*  2309 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2310 */                     }
/*  2311 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  2312 */                     $blk = 7; /* allowing case fallthrough */
/*  2313 */                 case 7:
/*  2314 */                     /* --- function return or resume suspension --- */
/*  2315 */                     if ($ret && $ret.$isSuspension) {
/*  2316 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 58);
/*  2317 */                     }
/*  2318 */                     var $lattr198 = $ret;
/*  2319 */                     if (other === undefined) {
/*  2320 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2321 */                     }
/*  2322 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  2323 */                     $blk = 8; /* allowing case fallthrough */
/*  2324 */                 case 8:
/*  2325 */                     /* --- function return or resume suspension --- */
/*  2326 */                     if ($ret && $ret.$isSuspension) {
/*  2327 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 67);
/*  2328 */                     }
/*  2329 */                     var $lattr199 = $ret;
/*  2330 */                     var $binop200 = Sk.abstr.numberBinOp($lattr198, $lattr199, 'Sub');
/*  2331 */                     $ret;
/*  2332 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl191, $binop194, $binop197, $binop200);
/*  2333 */                     $blk = 9; /* allowing case fallthrough */
/*  2334 */                 case 9:
/*  2335 */                     /* --- function return or resume suspension --- */
/*  2336 */                     if ($ret && $ret.$isSuspension) {
/*  2337 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 35, 15);
/*  2338 */                     }
/*  2339 */                     var $call201 = $ret;
/*  2340 */                     //
/*  2341 */                     // line 35:
/*  2342 */                     //         return Vector(self.x - other.x, self.y - other.y, self.z - other.z)
/*  2343 */                     //                ^
/*  2344 */                     //
/*  2345 */                     $currLineNo = 35;
/*  2346 */                     $currColNo = 15;
/*  2347 */ 
/*  2348 */                     return $call201;
/*  2349 */                     return Sk.builtin.none.none$;
/*  2350 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2351 */                 }
/*  2352 */             } catch (err) {
/*  2353 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2354 */                     err = new Sk.builtin.ExternalError(err);
/*  2355 */                 }
/*  2356 */                 err.traceback.push({
/*  2357 */                     lineno: $currLineNo,
/*  2358 */                     colno: $currColNo,
/*  2359 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2360 */                 });
/*  2361 */                 if ($exc.length > 0) {
/*  2362 */                     $err = err;
/*  2363 */                     $blk = $exc.pop();
/*  2364 */                     continue;
/*  2365 */                 } else {
/*  2366 */                     throw err;
/*  2367 */                 }
/*  2368 */             }
/*  2369 */         }
/*  2370 */     });
/*  2371 */     var $scope203 = (function $scale204$(self, factor) {
/*  2372 */         var factor, factor, factor, factor, self, self, self, self, $loadgbl205, $loadgbl205, $lattr206, $binop207, $loadgbl205, $lattr206, $binop207, $lattr208, $binop209, $loadgbl205, $lattr206, $binop207, $lattr208, $binop209, $lattr210, $binop211;
/*  2373 */         var $wakeFromSuspension = function() {
/*  2374 */             var susp = $scope203.$wakingSuspension;
/*  2375 */             delete $scope203.$wakingSuspension;
/*  2376 */             $blk = susp.$blk;
/*  2377 */             $loc = susp.$loc;
/*  2378 */             $gbl = susp.$gbl;
/*  2379 */             $exc = susp.$exc;
/*  2380 */             $err = susp.$err;
/*  2381 */             $postfinally = susp.$postfinally;
/*  2382 */             $currLineNo = susp.$lineno;
/*  2383 */             $currColNo = susp.$colno;
/*  2384 */             Sk.lastYield = Date.now();
/*  2385 */             factor = susp.$tmps.factor;
/*  2386 */             self = susp.$tmps.self;
/*  2387 */             $loadgbl205 = susp.$tmps.$loadgbl205;
/*  2388 */             $lattr206 = susp.$tmps.$lattr206;
/*  2389 */             $binop207 = susp.$tmps.$binop207;
/*  2390 */             $lattr208 = susp.$tmps.$lattr208;
/*  2391 */             $binop209 = susp.$tmps.$binop209;
/*  2392 */             $lattr210 = susp.$tmps.$lattr210;
/*  2393 */             $binop211 = susp.$tmps.$binop211;
/*  2394 */             try {
/*  2395 */                 $ret = susp.child.resume();
/*  2396 */             } catch (err) {
/*  2397 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2398 */                     err = new Sk.builtin.ExternalError(err);
/*  2399 */                 }
/*  2400 */                 err.traceback.push({
/*  2401 */                     lineno: $currLineNo,
/*  2402 */                     colno: $currColNo,
/*  2403 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2404 */                 });
/*  2405 */                 if ($exc.length > 0) {
/*  2406 */                     $err = err;
/*  2407 */                     $blk = $exc.pop();
/*  2408 */                 } else {
/*  2409 */                     throw err;
/*  2410 */                 }
/*  2411 */             }
/*  2412 */         };
/*  2413 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2414 */             var susp = new Sk.misceval.Suspension();
/*  2415 */             susp.child = $child;
/*  2416 */             susp.resume = function() {
/*  2417 */                 $scope203.$wakingSuspension = susp;
/*  2418 */                 return $scope203();
/*  2419 */             };
/*  2420 */             susp.data = susp.child.data;
/*  2421 */             susp.$blk = $blk;
/*  2422 */             susp.$loc = $loc;
/*  2423 */             susp.$gbl = $gbl;
/*  2424 */             susp.$exc = $exc;
/*  2425 */             susp.$err = $err;
/*  2426 */             susp.$postfinally = $postfinally;
/*  2427 */             susp.$filename = $filename;
/*  2428 */             susp.$lineno = $lineno;
/*  2429 */             susp.$colno = $colno;
/*  2430 */             susp.optional = susp.child.optional;
/*  2431 */             susp.$tmps = {
/*  2432 */                 "factor": factor,
/*  2433 */                 "self": self,
/*  2434 */                 "$loadgbl205": $loadgbl205,
/*  2435 */                 "$lattr206": $lattr206,
/*  2436 */                 "$binop207": $binop207,
/*  2437 */                 "$lattr208": $lattr208,
/*  2438 */                 "$binop209": $binop209,
/*  2439 */                 "$lattr210": $lattr210,
/*  2440 */                 "$binop211": $binop211
/*  2441 */             };
/*  2442 */             return susp;
/*  2443 */         };
/*  2444 */         var $blk = 0,
/*  2445 */             $exc = [],
/*  2446 */             $loc = {},
/*  2447 */             $gbl = this,
/*  2448 */             $err = undefined,
/*  2449 */             $ret = undefined,
/*  2450 */             $postfinally = undefined,
/*  2451 */             $currLineNo = undefined,
/*  2452 */             $currColNo = undefined;
/*  2453 */         if ($scope203.$wakingSuspension !== undefined) {
/*  2454 */             $wakeFromSuspension();
/*  2455 */         } else {
/*  2456 */             Sk.builtin.pyCheckArgs("scale", arguments, 2, 2, false, false);
/*  2457 */         }
/*  2458 */         while (true) {
/*  2459 */             try {
/*  2460 */                 switch ($blk) {
/*  2461 */                 case 0:
/*  2462 */                     /* --- codeobj entry --- */
/*  2463 */                     if (self === undefined) {
/*  2464 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2465 */                     }
/*  2466 */                     if (factor === undefined) {
/*  2467 */                         throw new Sk.builtin.UnboundLocalError('local variable \'factor\' referenced before assignment');
/*  2468 */                     }
/*  2469 */ 
/*  2470 */                     //
/*  2471 */                     // line 38:
/*  2472 */                     //         return Vector(factor * self.x, factor * self.y, factor * self.z)
/*  2473 */                     //         ^
/*  2474 */                     //
/*  2475 */                     $currLineNo = 38;
/*  2476 */                     $currColNo = 8;
/*  2477 */ 
/*  2478 */                     var $loadgbl205 = Sk.misceval.loadname('Vector', $gbl);
/*  2479 */                     if (factor === undefined) {
/*  2480 */                         throw new Sk.builtin.UnboundLocalError('local variable \'factor\' referenced before assignment');
/*  2481 */                     }
/*  2482 */                     if (self === undefined) {
/*  2483 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2484 */                     }
/*  2485 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  2486 */                     $blk = 1; /* allowing case fallthrough */
/*  2487 */                 case 1:
/*  2488 */                     /* --- function return or resume suspension --- */
/*  2489 */                     if ($ret && $ret.$isSuspension) {
/*  2490 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 38, 31);
/*  2491 */                     }
/*  2492 */                     var $lattr206 = $ret;
/*  2493 */                     var $binop207 = Sk.abstr.numberBinOp(factor, $lattr206, 'Mult');
/*  2494 */                     if (factor === undefined) {
/*  2495 */                         throw new Sk.builtin.UnboundLocalError('local variable \'factor\' referenced before assignment');
/*  2496 */                     }
/*  2497 */                     if (self === undefined) {
/*  2498 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2499 */                     }
/*  2500 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  2501 */                     $blk = 2; /* allowing case fallthrough */
/*  2502 */                 case 2:
/*  2503 */                     /* --- function return or resume suspension --- */
/*  2504 */                     if ($ret && $ret.$isSuspension) {
/*  2505 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 38, 48);
/*  2506 */                     }
/*  2507 */                     var $lattr208 = $ret;
/*  2508 */                     var $binop209 = Sk.abstr.numberBinOp(factor, $lattr208, 'Mult');
/*  2509 */                     if (factor === undefined) {
/*  2510 */                         throw new Sk.builtin.UnboundLocalError('local variable \'factor\' referenced before assignment');
/*  2511 */                     }
/*  2512 */                     if (self === undefined) {
/*  2513 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2514 */                     }
/*  2515 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  2516 */                     $blk = 3; /* allowing case fallthrough */
/*  2517 */                 case 3:
/*  2518 */                     /* --- function return or resume suspension --- */
/*  2519 */                     if ($ret && $ret.$isSuspension) {
/*  2520 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 38, 65);
/*  2521 */                     }
/*  2522 */                     var $lattr210 = $ret;
/*  2523 */                     var $binop211 = Sk.abstr.numberBinOp(factor, $lattr210, 'Mult');
/*  2524 */                     $ret;
/*  2525 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl205, $binop207, $binop209, $binop211);
/*  2526 */                     $blk = 4; /* allowing case fallthrough */
/*  2527 */                 case 4:
/*  2528 */                     /* --- function return or resume suspension --- */
/*  2529 */                     if ($ret && $ret.$isSuspension) {
/*  2530 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 38, 15);
/*  2531 */                     }
/*  2532 */                     var $call212 = $ret;
/*  2533 */                     //
/*  2534 */                     // line 38:
/*  2535 */                     //         return Vector(factor * self.x, factor * self.y, factor * self.z)
/*  2536 */                     //                ^
/*  2537 */                     //
/*  2538 */                     $currLineNo = 38;
/*  2539 */                     $currColNo = 15;
/*  2540 */ 
/*  2541 */                     return $call212;
/*  2542 */                     return Sk.builtin.none.none$;
/*  2543 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2544 */                 }
/*  2545 */             } catch (err) {
/*  2546 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2547 */                     err = new Sk.builtin.ExternalError(err);
/*  2548 */                 }
/*  2549 */                 err.traceback.push({
/*  2550 */                     lineno: $currLineNo,
/*  2551 */                     colno: $currColNo,
/*  2552 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2553 */                 });
/*  2554 */                 if ($exc.length > 0) {
/*  2555 */                     $err = err;
/*  2556 */                     $blk = $exc.pop();
/*  2557 */                     continue;
/*  2558 */                 } else {
/*  2559 */                     throw err;
/*  2560 */                 }
/*  2561 */             }
/*  2562 */         }
/*  2563 */     });
/*  2564 */     var $scope214 = (function $dot215$(self, other) {
/*  2565 */         var other, other, other, other, other, self, self, self, self, $lattr216, $lattr218, $lattr218, $lattr219, $binop220, $lattr218, $lattr219, $binop220, $lattr221, $lattr218, $lattr219, $binop220, $lattr221, $lattr222, $binop223, $binop224, $lattr218, $lattr219, $binop220, $lattr221, $lattr222, $binop223, $binop224, $lattr225;
/*  2566 */         var $wakeFromSuspension = function() {
/*  2567 */             var susp = $scope214.$wakingSuspension;
/*  2568 */             delete $scope214.$wakingSuspension;
/*  2569 */             $blk = susp.$blk;
/*  2570 */             $loc = susp.$loc;
/*  2571 */             $gbl = susp.$gbl;
/*  2572 */             $exc = susp.$exc;
/*  2573 */             $err = susp.$err;
/*  2574 */             $postfinally = susp.$postfinally;
/*  2575 */             $currLineNo = susp.$lineno;
/*  2576 */             $currColNo = susp.$colno;
/*  2577 */             Sk.lastYield = Date.now();
/*  2578 */             other = susp.$tmps.other;
/*  2579 */             self = susp.$tmps.self;
/*  2580 */             $lattr216 = susp.$tmps.$lattr216;
/*  2581 */             $lattr218 = susp.$tmps.$lattr218;
/*  2582 */             $lattr219 = susp.$tmps.$lattr219;
/*  2583 */             $binop220 = susp.$tmps.$binop220;
/*  2584 */             $lattr221 = susp.$tmps.$lattr221;
/*  2585 */             $lattr222 = susp.$tmps.$lattr222;
/*  2586 */             $binop223 = susp.$tmps.$binop223;
/*  2587 */             $binop224 = susp.$tmps.$binop224;
/*  2588 */             $lattr225 = susp.$tmps.$lattr225;
/*  2589 */             try {
/*  2590 */                 $ret = susp.child.resume();
/*  2591 */             } catch (err) {
/*  2592 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2593 */                     err = new Sk.builtin.ExternalError(err);
/*  2594 */                 }
/*  2595 */                 err.traceback.push({
/*  2596 */                     lineno: $currLineNo,
/*  2597 */                     colno: $currColNo,
/*  2598 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2599 */                 });
/*  2600 */                 if ($exc.length > 0) {
/*  2601 */                     $err = err;
/*  2602 */                     $blk = $exc.pop();
/*  2603 */                 } else {
/*  2604 */                     throw err;
/*  2605 */                 }
/*  2606 */             }
/*  2607 */         };
/*  2608 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2609 */             var susp = new Sk.misceval.Suspension();
/*  2610 */             susp.child = $child;
/*  2611 */             susp.resume = function() {
/*  2612 */                 $scope214.$wakingSuspension = susp;
/*  2613 */                 return $scope214();
/*  2614 */             };
/*  2615 */             susp.data = susp.child.data;
/*  2616 */             susp.$blk = $blk;
/*  2617 */             susp.$loc = $loc;
/*  2618 */             susp.$gbl = $gbl;
/*  2619 */             susp.$exc = $exc;
/*  2620 */             susp.$err = $err;
/*  2621 */             susp.$postfinally = $postfinally;
/*  2622 */             susp.$filename = $filename;
/*  2623 */             susp.$lineno = $lineno;
/*  2624 */             susp.$colno = $colno;
/*  2625 */             susp.optional = susp.child.optional;
/*  2626 */             susp.$tmps = {
/*  2627 */                 "other": other,
/*  2628 */                 "self": self,
/*  2629 */                 "$lattr216": $lattr216,
/*  2630 */                 "$lattr218": $lattr218,
/*  2631 */                 "$lattr219": $lattr219,
/*  2632 */                 "$binop220": $binop220,
/*  2633 */                 "$lattr221": $lattr221,
/*  2634 */                 "$lattr222": $lattr222,
/*  2635 */                 "$binop223": $binop223,
/*  2636 */                 "$binop224": $binop224,
/*  2637 */                 "$lattr225": $lattr225
/*  2638 */             };
/*  2639 */             return susp;
/*  2640 */         };
/*  2641 */         var $blk = 0,
/*  2642 */             $exc = [],
/*  2643 */             $loc = {},
/*  2644 */             $gbl = this,
/*  2645 */             $err = undefined,
/*  2646 */             $ret = undefined,
/*  2647 */             $postfinally = undefined,
/*  2648 */             $currLineNo = undefined,
/*  2649 */             $currColNo = undefined;
/*  2650 */         if ($scope214.$wakingSuspension !== undefined) {
/*  2651 */             $wakeFromSuspension();
/*  2652 */         } else {
/*  2653 */             Sk.builtin.pyCheckArgs("dot", arguments, 2, 2, false, false);
/*  2654 */         }
/*  2655 */         while (true) {
/*  2656 */             try {
/*  2657 */                 switch ($blk) {
/*  2658 */                 case 0:
/*  2659 */                     /* --- codeobj entry --- */
/*  2660 */                     if (self === undefined) {
/*  2661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2662 */                     }
/*  2663 */                     if (other === undefined) {
/*  2664 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2665 */                     }
/*  2666 */ 
/*  2667 */                     //
/*  2668 */                     // line 41:
/*  2669 */                     //         other.mustBeVector()
/*  2670 */                     //         ^
/*  2671 */                     //
/*  2672 */                     $currLineNo = 41;
/*  2673 */                     $currColNo = 8;
/*  2674 */ 
/*  2675 */                     if (other === undefined) {
/*  2676 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2677 */                     }
/*  2678 */                     $ret = Sk.abstr.gattr(other, 'mustBeVector', true);
/*  2679 */                     $blk = 1; /* allowing case fallthrough */
/*  2680 */                 case 1:
/*  2681 */                     /* --- function return or resume suspension --- */
/*  2682 */                     if ($ret && $ret.$isSuspension) {
/*  2683 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 41, 8);
/*  2684 */                     }
/*  2685 */                     var $lattr216 = $ret;
/*  2686 */                     $ret;
/*  2687 */                     $ret = Sk.misceval.callsimOrSuspend($lattr216);
/*  2688 */                     $blk = 2; /* allowing case fallthrough */
/*  2689 */                 case 2:
/*  2690 */                     /* --- function return or resume suspension --- */
/*  2691 */                     if ($ret && $ret.$isSuspension) {
/*  2692 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 41, 8);
/*  2693 */                     }
/*  2694 */                     var $call217 = $ret;
/*  2695 */                     //
/*  2696 */                     // line 41:
/*  2697 */                     //         other.mustBeVector()
/*  2698 */                     //         ^
/*  2699 */                     //
/*  2700 */                     $currLineNo = 41;
/*  2701 */                     $currColNo = 8;
/*  2702 */ 
/*  2703 */ 
/*  2704 */                     //
/*  2705 */                     // line 42:
/*  2706 */                     //         return (self.x * other.x) + (self.y * other.y) + (self.z * other.z)
/*  2707 */                     //         ^
/*  2708 */                     //
/*  2709 */                     $currLineNo = 42;
/*  2710 */                     $currColNo = 8;
/*  2711 */ 
/*  2712 */                     if (self === undefined) {
/*  2713 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2714 */                     }
/*  2715 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  2716 */                     $blk = 3; /* allowing case fallthrough */
/*  2717 */                 case 3:
/*  2718 */                     /* --- function return or resume suspension --- */
/*  2719 */                     if ($ret && $ret.$isSuspension) {
/*  2720 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 16);
/*  2721 */                     }
/*  2722 */                     var $lattr218 = $ret;
/*  2723 */                     if (other === undefined) {
/*  2724 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2725 */                     }
/*  2726 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  2727 */                     $blk = 4; /* allowing case fallthrough */
/*  2728 */                 case 4:
/*  2729 */                     /* --- function return or resume suspension --- */
/*  2730 */                     if ($ret && $ret.$isSuspension) {
/*  2731 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 25);
/*  2732 */                     }
/*  2733 */                     var $lattr219 = $ret;
/*  2734 */                     var $binop220 = Sk.abstr.numberBinOp($lattr218, $lattr219, 'Mult');
/*  2735 */                     if (self === undefined) {
/*  2736 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2737 */                     }
/*  2738 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  2739 */                     $blk = 5; /* allowing case fallthrough */
/*  2740 */                 case 5:
/*  2741 */                     /* --- function return or resume suspension --- */
/*  2742 */                     if ($ret && $ret.$isSuspension) {
/*  2743 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 37);
/*  2744 */                     }
/*  2745 */                     var $lattr221 = $ret;
/*  2746 */                     if (other === undefined) {
/*  2747 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2748 */                     }
/*  2749 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  2750 */                     $blk = 6; /* allowing case fallthrough */
/*  2751 */                 case 6:
/*  2752 */                     /* --- function return or resume suspension --- */
/*  2753 */                     if ($ret && $ret.$isSuspension) {
/*  2754 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 46);
/*  2755 */                     }
/*  2756 */                     var $lattr222 = $ret;
/*  2757 */                     var $binop223 = Sk.abstr.numberBinOp($lattr221, $lattr222, 'Mult');
/*  2758 */                     var $binop224 = Sk.abstr.numberBinOp($binop220, $binop223, 'Add');
/*  2759 */                     if (self === undefined) {
/*  2760 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2761 */                     }
/*  2762 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  2763 */                     $blk = 7; /* allowing case fallthrough */
/*  2764 */                 case 7:
/*  2765 */                     /* --- function return or resume suspension --- */
/*  2766 */                     if ($ret && $ret.$isSuspension) {
/*  2767 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 58);
/*  2768 */                     }
/*  2769 */                     var $lattr225 = $ret;
/*  2770 */                     if (other === undefined) {
/*  2771 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2772 */                     }
/*  2773 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  2774 */                     $blk = 8; /* allowing case fallthrough */
/*  2775 */                 case 8:
/*  2776 */                     /* --- function return or resume suspension --- */
/*  2777 */                     if ($ret && $ret.$isSuspension) {
/*  2778 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 42, 67);
/*  2779 */                     }
/*  2780 */                     var $lattr226 = $ret;
/*  2781 */                     var $binop227 = Sk.abstr.numberBinOp($lattr225, $lattr226, 'Mult');
/*  2782 */                     var $binop228 = Sk.abstr.numberBinOp($binop224, $binop227, 'Add');
/*  2783 */                     return $binop228;
/*  2784 */                     return Sk.builtin.none.none$;
/*  2785 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2786 */                 }
/*  2787 */             } catch (err) {
/*  2788 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2789 */                     err = new Sk.builtin.ExternalError(err);
/*  2790 */                 }
/*  2791 */                 err.traceback.push({
/*  2792 */                     lineno: $currLineNo,
/*  2793 */                     colno: $currColNo,
/*  2794 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2795 */                 });
/*  2796 */                 if ($exc.length > 0) {
/*  2797 */                     $err = err;
/*  2798 */                     $blk = $exc.pop();
/*  2799 */                     continue;
/*  2800 */                 } else {
/*  2801 */                     throw err;
/*  2802 */                 }
/*  2803 */             }
/*  2804 */         }
/*  2805 */     });
/*  2806 */     var $scope230 = (function $cross231$(self, other) {
/*  2807 */         var other, other, other, other, other, other, other, other, self, self, self, self, self, self, self, $lattr232, $loadgbl234, $loadgbl234, $lattr235, $loadgbl234, $lattr235, $lattr236, $binop237, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $lattr246, $binop247, $binop248, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $lattr246, $binop247, $binop248, $lattr249, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $lattr246, $binop247, $binop248, $lattr249, $lattr250, $binop251, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $lattr246, $binop247, $binop248, $lattr249, $lattr250, $binop251, $lattr252, $loadgbl234, $lattr235, $lattr236, $binop237, $lattr238, $lattr239, $binop240, $binop241, $lattr242, $lattr243, $binop244, $lattr245, $lattr246, $binop247, $binop248, $lattr249, $lattr250, $binop251, $lattr252, $lattr253, $binop254, $binop255;
/*  2808 */         var $wakeFromSuspension = function() {
/*  2809 */             var susp = $scope230.$wakingSuspension;
/*  2810 */             delete $scope230.$wakingSuspension;
/*  2811 */             $blk = susp.$blk;
/*  2812 */             $loc = susp.$loc;
/*  2813 */             $gbl = susp.$gbl;
/*  2814 */             $exc = susp.$exc;
/*  2815 */             $err = susp.$err;
/*  2816 */             $postfinally = susp.$postfinally;
/*  2817 */             $currLineNo = susp.$lineno;
/*  2818 */             $currColNo = susp.$colno;
/*  2819 */             Sk.lastYield = Date.now();
/*  2820 */             other = susp.$tmps.other;
/*  2821 */             self = susp.$tmps.self;
/*  2822 */             $lattr232 = susp.$tmps.$lattr232;
/*  2823 */             $loadgbl234 = susp.$tmps.$loadgbl234;
/*  2824 */             $lattr235 = susp.$tmps.$lattr235;
/*  2825 */             $lattr236 = susp.$tmps.$lattr236;
/*  2826 */             $binop237 = susp.$tmps.$binop237;
/*  2827 */             $lattr238 = susp.$tmps.$lattr238;
/*  2828 */             $lattr239 = susp.$tmps.$lattr239;
/*  2829 */             $binop240 = susp.$tmps.$binop240;
/*  2830 */             $binop241 = susp.$tmps.$binop241;
/*  2831 */             $lattr242 = susp.$tmps.$lattr242;
/*  2832 */             $lattr243 = susp.$tmps.$lattr243;
/*  2833 */             $binop244 = susp.$tmps.$binop244;
/*  2834 */             $lattr245 = susp.$tmps.$lattr245;
/*  2835 */             $lattr246 = susp.$tmps.$lattr246;
/*  2836 */             $binop247 = susp.$tmps.$binop247;
/*  2837 */             $binop248 = susp.$tmps.$binop248;
/*  2838 */             $lattr249 = susp.$tmps.$lattr249;
/*  2839 */             $lattr250 = susp.$tmps.$lattr250;
/*  2840 */             $binop251 = susp.$tmps.$binop251;
/*  2841 */             $lattr252 = susp.$tmps.$lattr252;
/*  2842 */             $lattr253 = susp.$tmps.$lattr253;
/*  2843 */             $binop254 = susp.$tmps.$binop254;
/*  2844 */             $binop255 = susp.$tmps.$binop255;
/*  2845 */             try {
/*  2846 */                 $ret = susp.child.resume();
/*  2847 */             } catch (err) {
/*  2848 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2849 */                     err = new Sk.builtin.ExternalError(err);
/*  2850 */                 }
/*  2851 */                 err.traceback.push({
/*  2852 */                     lineno: $currLineNo,
/*  2853 */                     colno: $currColNo,
/*  2854 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  2855 */                 });
/*  2856 */                 if ($exc.length > 0) {
/*  2857 */                     $err = err;
/*  2858 */                     $blk = $exc.pop();
/*  2859 */                 } else {
/*  2860 */                     throw err;
/*  2861 */                 }
/*  2862 */             }
/*  2863 */         };
/*  2864 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2865 */             var susp = new Sk.misceval.Suspension();
/*  2866 */             susp.child = $child;
/*  2867 */             susp.resume = function() {
/*  2868 */                 $scope230.$wakingSuspension = susp;
/*  2869 */                 return $scope230();
/*  2870 */             };
/*  2871 */             susp.data = susp.child.data;
/*  2872 */             susp.$blk = $blk;
/*  2873 */             susp.$loc = $loc;
/*  2874 */             susp.$gbl = $gbl;
/*  2875 */             susp.$exc = $exc;
/*  2876 */             susp.$err = $err;
/*  2877 */             susp.$postfinally = $postfinally;
/*  2878 */             susp.$filename = $filename;
/*  2879 */             susp.$lineno = $lineno;
/*  2880 */             susp.$colno = $colno;
/*  2881 */             susp.optional = susp.child.optional;
/*  2882 */             susp.$tmps = {
/*  2883 */                 "other": other,
/*  2884 */                 "self": self,
/*  2885 */                 "$lattr232": $lattr232,
/*  2886 */                 "$loadgbl234": $loadgbl234,
/*  2887 */                 "$lattr235": $lattr235,
/*  2888 */                 "$lattr236": $lattr236,
/*  2889 */                 "$binop237": $binop237,
/*  2890 */                 "$lattr238": $lattr238,
/*  2891 */                 "$lattr239": $lattr239,
/*  2892 */                 "$binop240": $binop240,
/*  2893 */                 "$binop241": $binop241,
/*  2894 */                 "$lattr242": $lattr242,
/*  2895 */                 "$lattr243": $lattr243,
/*  2896 */                 "$binop244": $binop244,
/*  2897 */                 "$lattr245": $lattr245,
/*  2898 */                 "$lattr246": $lattr246,
/*  2899 */                 "$binop247": $binop247,
/*  2900 */                 "$binop248": $binop248,
/*  2901 */                 "$lattr249": $lattr249,
/*  2902 */                 "$lattr250": $lattr250,
/*  2903 */                 "$binop251": $binop251,
/*  2904 */                 "$lattr252": $lattr252,
/*  2905 */                 "$lattr253": $lattr253,
/*  2906 */                 "$binop254": $binop254,
/*  2907 */                 "$binop255": $binop255
/*  2908 */             };
/*  2909 */             return susp;
/*  2910 */         };
/*  2911 */         var $blk = 0,
/*  2912 */             $exc = [],
/*  2913 */             $loc = {},
/*  2914 */             $gbl = this,
/*  2915 */             $err = undefined,
/*  2916 */             $ret = undefined,
/*  2917 */             $postfinally = undefined,
/*  2918 */             $currLineNo = undefined,
/*  2919 */             $currColNo = undefined;
/*  2920 */         if ($scope230.$wakingSuspension !== undefined) {
/*  2921 */             $wakeFromSuspension();
/*  2922 */         } else {
/*  2923 */             Sk.builtin.pyCheckArgs("cross", arguments, 2, 2, false, false);
/*  2924 */         }
/*  2925 */         while (true) {
/*  2926 */             try {
/*  2927 */                 switch ($blk) {
/*  2928 */                 case 0:
/*  2929 */                     /* --- codeobj entry --- */
/*  2930 */                     if (self === undefined) {
/*  2931 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2932 */                     }
/*  2933 */                     if (other === undefined) {
/*  2934 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2935 */                     }
/*  2936 */ 
/*  2937 */                     //
/*  2938 */                     // line 45:
/*  2939 */                     //         other.mustBeVector()
/*  2940 */                     //         ^
/*  2941 */                     //
/*  2942 */                     $currLineNo = 45;
/*  2943 */                     $currColNo = 8;
/*  2944 */ 
/*  2945 */                     if (other === undefined) {
/*  2946 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2947 */                     }
/*  2948 */                     $ret = Sk.abstr.gattr(other, 'mustBeVector', true);
/*  2949 */                     $blk = 1; /* allowing case fallthrough */
/*  2950 */                 case 1:
/*  2951 */                     /* --- function return or resume suspension --- */
/*  2952 */                     if ($ret && $ret.$isSuspension) {
/*  2953 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 45, 8);
/*  2954 */                     }
/*  2955 */                     var $lattr232 = $ret;
/*  2956 */                     $ret;
/*  2957 */                     $ret = Sk.misceval.callsimOrSuspend($lattr232);
/*  2958 */                     $blk = 2; /* allowing case fallthrough */
/*  2959 */                 case 2:
/*  2960 */                     /* --- function return or resume suspension --- */
/*  2961 */                     if ($ret && $ret.$isSuspension) {
/*  2962 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 45, 8);
/*  2963 */                     }
/*  2964 */                     var $call233 = $ret;
/*  2965 */                     //
/*  2966 */                     // line 45:
/*  2967 */                     //         other.mustBeVector()
/*  2968 */                     //         ^
/*  2969 */                     //
/*  2970 */                     $currLineNo = 45;
/*  2971 */                     $currColNo = 8;
/*  2972 */ 
/*  2973 */ 
/*  2974 */                     //
/*  2975 */                     // line 46:
/*  2976 */                     //         return Vector(self.y * other.z - self.z * other.y,
/*  2977 */                     //         ^
/*  2978 */                     //
/*  2979 */                     $currLineNo = 46;
/*  2980 */                     $currColNo = 8;
/*  2981 */ 
/*  2982 */                     var $loadgbl234 = Sk.misceval.loadname('Vector', $gbl);
/*  2983 */                     if (self === undefined) {
/*  2984 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2985 */                     }
/*  2986 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  2987 */                     $blk = 3; /* allowing case fallthrough */
/*  2988 */                 case 3:
/*  2989 */                     /* --- function return or resume suspension --- */
/*  2990 */                     if ($ret && $ret.$isSuspension) {
/*  2991 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 46, 22);
/*  2992 */                     }
/*  2993 */                     var $lattr235 = $ret;
/*  2994 */                     if (other === undefined) {
/*  2995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  2996 */                     }
/*  2997 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  2998 */                     $blk = 4; /* allowing case fallthrough */
/*  2999 */                 case 4:
/*  3000 */                     /* --- function return or resume suspension --- */
/*  3001 */                     if ($ret && $ret.$isSuspension) {
/*  3002 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 46, 31);
/*  3003 */                     }
/*  3004 */                     var $lattr236 = $ret;
/*  3005 */                     var $binop237 = Sk.abstr.numberBinOp($lattr235, $lattr236, 'Mult');
/*  3006 */                     if (self === undefined) {
/*  3007 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3008 */                     }
/*  3009 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  3010 */                     $blk = 5; /* allowing case fallthrough */
/*  3011 */                 case 5:
/*  3012 */                     /* --- function return or resume suspension --- */
/*  3013 */                     if ($ret && $ret.$isSuspension) {
/*  3014 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 46, 41);
/*  3015 */                     }
/*  3016 */                     var $lattr238 = $ret;
/*  3017 */                     if (other === undefined) {
/*  3018 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3019 */                     }
/*  3020 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  3021 */                     $blk = 6; /* allowing case fallthrough */
/*  3022 */                 case 6:
/*  3023 */                     /* --- function return or resume suspension --- */
/*  3024 */                     if ($ret && $ret.$isSuspension) {
/*  3025 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 46, 50);
/*  3026 */                     }
/*  3027 */                     var $lattr239 = $ret;
/*  3028 */                     var $binop240 = Sk.abstr.numberBinOp($lattr238, $lattr239, 'Mult');
/*  3029 */                     var $binop241 = Sk.abstr.numberBinOp($binop237, $binop240, 'Sub');
/*  3030 */                     if (self === undefined) {
/*  3031 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3032 */                     }
/*  3033 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  3034 */                     $blk = 7; /* allowing case fallthrough */
/*  3035 */                 case 7:
/*  3036 */                     /* --- function return or resume suspension --- */
/*  3037 */                     if ($ret && $ret.$isSuspension) {
/*  3038 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 47, 22);
/*  3039 */                     }
/*  3040 */                     var $lattr242 = $ret;
/*  3041 */                     if (other === undefined) {
/*  3042 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3043 */                     }
/*  3044 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  3045 */                     $blk = 8; /* allowing case fallthrough */
/*  3046 */                 case 8:
/*  3047 */                     /* --- function return or resume suspension --- */
/*  3048 */                     if ($ret && $ret.$isSuspension) {
/*  3049 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 47, 31);
/*  3050 */                     }
/*  3051 */                     var $lattr243 = $ret;
/*  3052 */                     var $binop244 = Sk.abstr.numberBinOp($lattr242, $lattr243, 'Mult');
/*  3053 */                     if (self === undefined) {
/*  3054 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3055 */                     }
/*  3056 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  3057 */                     $blk = 9; /* allowing case fallthrough */
/*  3058 */                 case 9:
/*  3059 */                     /* --- function return or resume suspension --- */
/*  3060 */                     if ($ret && $ret.$isSuspension) {
/*  3061 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 47, 41);
/*  3062 */                     }
/*  3063 */                     var $lattr245 = $ret;
/*  3064 */                     if (other === undefined) {
/*  3065 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3066 */                     }
/*  3067 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  3068 */                     $blk = 10; /* allowing case fallthrough */
/*  3069 */                 case 10:
/*  3070 */                     /* --- function return or resume suspension --- */
/*  3071 */                     if ($ret && $ret.$isSuspension) {
/*  3072 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 47, 50);
/*  3073 */                     }
/*  3074 */                     var $lattr246 = $ret;
/*  3075 */                     var $binop247 = Sk.abstr.numberBinOp($lattr245, $lattr246, 'Mult');
/*  3076 */                     var $binop248 = Sk.abstr.numberBinOp($binop244, $binop247, 'Sub');
/*  3077 */                     if (self === undefined) {
/*  3078 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3079 */                     }
/*  3080 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  3081 */                     $blk = 11; /* allowing case fallthrough */
/*  3082 */                 case 11:
/*  3083 */                     /* --- function return or resume suspension --- */
/*  3084 */                     if ($ret && $ret.$isSuspension) {
/*  3085 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 48, 22);
/*  3086 */                     }
/*  3087 */                     var $lattr249 = $ret;
/*  3088 */                     if (other === undefined) {
/*  3089 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3090 */                     }
/*  3091 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  3092 */                     $blk = 12; /* allowing case fallthrough */
/*  3093 */                 case 12:
/*  3094 */                     /* --- function return or resume suspension --- */
/*  3095 */                     if ($ret && $ret.$isSuspension) {
/*  3096 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 48, 31);
/*  3097 */                     }
/*  3098 */                     var $lattr250 = $ret;
/*  3099 */                     var $binop251 = Sk.abstr.numberBinOp($lattr249, $lattr250, 'Mult');
/*  3100 */                     if (self === undefined) {
/*  3101 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3102 */                     }
/*  3103 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  3104 */                     $blk = 13; /* allowing case fallthrough */
/*  3105 */                 case 13:
/*  3106 */                     /* --- function return or resume suspension --- */
/*  3107 */                     if ($ret && $ret.$isSuspension) {
/*  3108 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 48, 41);
/*  3109 */                     }
/*  3110 */                     var $lattr252 = $ret;
/*  3111 */                     if (other === undefined) {
/*  3112 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3113 */                     }
/*  3114 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  3115 */                     $blk = 14; /* allowing case fallthrough */
/*  3116 */                 case 14:
/*  3117 */                     /* --- function return or resume suspension --- */
/*  3118 */                     if ($ret && $ret.$isSuspension) {
/*  3119 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 48, 50);
/*  3120 */                     }
/*  3121 */                     var $lattr253 = $ret;
/*  3122 */                     var $binop254 = Sk.abstr.numberBinOp($lattr252, $lattr253, 'Mult');
/*  3123 */                     var $binop255 = Sk.abstr.numberBinOp($binop251, $binop254, 'Sub');
/*  3124 */                     $ret;
/*  3125 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl234, $binop241, $binop248, $binop255);
/*  3126 */                     $blk = 15; /* allowing case fallthrough */
/*  3127 */                 case 15:
/*  3128 */                     /* --- function return or resume suspension --- */
/*  3129 */                     if ($ret && $ret.$isSuspension) {
/*  3130 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 46, 15);
/*  3131 */                     }
/*  3132 */                     var $call256 = $ret;
/*  3133 */                     //
/*  3134 */                     // line 46:
/*  3135 */                     //         return Vector(self.y * other.z - self.z * other.y,
/*  3136 */                     //                ^
/*  3137 */                     //
/*  3138 */                     $currLineNo = 46;
/*  3139 */                     $currColNo = 15;
/*  3140 */ 
/*  3141 */                     return $call256;
/*  3142 */                     return Sk.builtin.none.none$;
/*  3143 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3144 */                 }
/*  3145 */             } catch (err) {
/*  3146 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3147 */                     err = new Sk.builtin.ExternalError(err);
/*  3148 */                 }
/*  3149 */                 err.traceback.push({
/*  3150 */                     lineno: $currLineNo,
/*  3151 */                     colno: $currColNo,
/*  3152 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3153 */                 });
/*  3154 */                 if ($exc.length > 0) {
/*  3155 */                     $err = err;
/*  3156 */                     $blk = $exc.pop();
/*  3157 */                     continue;
/*  3158 */                 } else {
/*  3159 */                     throw err;
/*  3160 */                 }
/*  3161 */             }
/*  3162 */         }
/*  3163 */     });
/*  3164 */     var $scope258 = (function $normalized259$(self) {
/*  3165 */         var self, self, self, $lattr260, $lattr260, $lattr261, $lattr260, $lattr261, $call262, $binop263;
/*  3166 */         var $wakeFromSuspension = function() {
/*  3167 */             var susp = $scope258.$wakingSuspension;
/*  3168 */             delete $scope258.$wakingSuspension;
/*  3169 */             $blk = susp.$blk;
/*  3170 */             $loc = susp.$loc;
/*  3171 */             $gbl = susp.$gbl;
/*  3172 */             $exc = susp.$exc;
/*  3173 */             $err = susp.$err;
/*  3174 */             $postfinally = susp.$postfinally;
/*  3175 */             $currLineNo = susp.$lineno;
/*  3176 */             $currColNo = susp.$colno;
/*  3177 */             Sk.lastYield = Date.now();
/*  3178 */             self = susp.$tmps.self;
/*  3179 */             $lattr260 = susp.$tmps.$lattr260;
/*  3180 */             $lattr261 = susp.$tmps.$lattr261;
/*  3181 */             $call262 = susp.$tmps.$call262;
/*  3182 */             $binop263 = susp.$tmps.$binop263;
/*  3183 */             try {
/*  3184 */                 $ret = susp.child.resume();
/*  3185 */             } catch (err) {
/*  3186 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3187 */                     err = new Sk.builtin.ExternalError(err);
/*  3188 */                 }
/*  3189 */                 err.traceback.push({
/*  3190 */                     lineno: $currLineNo,
/*  3191 */                     colno: $currColNo,
/*  3192 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3193 */                 });
/*  3194 */                 if ($exc.length > 0) {
/*  3195 */                     $err = err;
/*  3196 */                     $blk = $exc.pop();
/*  3197 */                 } else {
/*  3198 */                     throw err;
/*  3199 */                 }
/*  3200 */             }
/*  3201 */         };
/*  3202 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3203 */             var susp = new Sk.misceval.Suspension();
/*  3204 */             susp.child = $child;
/*  3205 */             susp.resume = function() {
/*  3206 */                 $scope258.$wakingSuspension = susp;
/*  3207 */                 return $scope258();
/*  3208 */             };
/*  3209 */             susp.data = susp.child.data;
/*  3210 */             susp.$blk = $blk;
/*  3211 */             susp.$loc = $loc;
/*  3212 */             susp.$gbl = $gbl;
/*  3213 */             susp.$exc = $exc;
/*  3214 */             susp.$err = $err;
/*  3215 */             susp.$postfinally = $postfinally;
/*  3216 */             susp.$filename = $filename;
/*  3217 */             susp.$lineno = $lineno;
/*  3218 */             susp.$colno = $colno;
/*  3219 */             susp.optional = susp.child.optional;
/*  3220 */             susp.$tmps = {
/*  3221 */                 "self": self,
/*  3222 */                 "$lattr260": $lattr260,
/*  3223 */                 "$lattr261": $lattr261,
/*  3224 */                 "$call262": $call262,
/*  3225 */                 "$binop263": $binop263
/*  3226 */             };
/*  3227 */             return susp;
/*  3228 */         };
/*  3229 */         var $blk = 0,
/*  3230 */             $exc = [],
/*  3231 */             $loc = {},
/*  3232 */             $gbl = this,
/*  3233 */             $err = undefined,
/*  3234 */             $ret = undefined,
/*  3235 */             $postfinally = undefined,
/*  3236 */             $currLineNo = undefined,
/*  3237 */             $currColNo = undefined;
/*  3238 */         if ($scope258.$wakingSuspension !== undefined) {
/*  3239 */             $wakeFromSuspension();
/*  3240 */         } else {
/*  3241 */             Sk.builtin.pyCheckArgs("normalized", arguments, 1, 1, false, false);
/*  3242 */         }
/*  3243 */         while (true) {
/*  3244 */             try {
/*  3245 */                 switch ($blk) {
/*  3246 */                 case 0:
/*  3247 */                     /* --- codeobj entry --- */
/*  3248 */                     if (self === undefined) {
/*  3249 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3250 */                     }
/*  3251 */ 
/*  3252 */                     //
/*  3253 */                     // line 51:
/*  3254 */                     //         return self.scale(1.0 / self.magnitude())
/*  3255 */                     //         ^
/*  3256 */                     //
/*  3257 */                     $currLineNo = 51;
/*  3258 */                     $currColNo = 8;
/*  3259 */ 
/*  3260 */                     if (self === undefined) {
/*  3261 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3262 */                     }
/*  3263 */                     $ret = Sk.abstr.gattr(self, 'scale', true);
/*  3264 */                     $blk = 1; /* allowing case fallthrough */
/*  3265 */                 case 1:
/*  3266 */                     /* --- function return or resume suspension --- */
/*  3267 */                     if ($ret && $ret.$isSuspension) {
/*  3268 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 51, 15);
/*  3269 */                     }
/*  3270 */                     var $lattr260 = $ret;
/*  3271 */                     if (self === undefined) {
/*  3272 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3273 */                     }
/*  3274 */                     $ret = Sk.abstr.gattr(self, 'magnitude', true);
/*  3275 */                     $blk = 2; /* allowing case fallthrough */
/*  3276 */                 case 2:
/*  3277 */                     /* --- function return or resume suspension --- */
/*  3278 */                     if ($ret && $ret.$isSuspension) {
/*  3279 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 51, 32);
/*  3280 */                     }
/*  3281 */                     var $lattr261 = $ret;
/*  3282 */                     $ret;
/*  3283 */                     $ret = Sk.misceval.callsimOrSuspend($lattr261);
/*  3284 */                     $blk = 3; /* allowing case fallthrough */
/*  3285 */                 case 3:
/*  3286 */                     /* --- function return or resume suspension --- */
/*  3287 */                     if ($ret && $ret.$isSuspension) {
/*  3288 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 51, 32);
/*  3289 */                     }
/*  3290 */                     var $call262 = $ret;
/*  3291 */                     //
/*  3292 */                     // line 51:
/*  3293 */                     //         return self.scale(1.0 / self.magnitude())
/*  3294 */                     //                                 ^
/*  3295 */                     //
/*  3296 */                     $currLineNo = 51;
/*  3297 */                     $currColNo = 32;
/*  3298 */ 
/*  3299 */                     var $binop263 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), $call262, 'Div');
/*  3300 */                     $ret;
/*  3301 */                     $ret = Sk.misceval.callsimOrSuspend($lattr260, $binop263);
/*  3302 */                     $blk = 4; /* allowing case fallthrough */
/*  3303 */                 case 4:
/*  3304 */                     /* --- function return or resume suspension --- */
/*  3305 */                     if ($ret && $ret.$isSuspension) {
/*  3306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 51, 15);
/*  3307 */                     }
/*  3308 */                     var $call264 = $ret;
/*  3309 */                     //
/*  3310 */                     // line 51:
/*  3311 */                     //         return self.scale(1.0 / self.magnitude())
/*  3312 */                     //                ^
/*  3313 */                     //
/*  3314 */                     $currLineNo = 51;
/*  3315 */                     $currColNo = 15;
/*  3316 */ 
/*  3317 */                     return $call264;
/*  3318 */                     return Sk.builtin.none.none$;
/*  3319 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3320 */                 }
/*  3321 */             } catch (err) {
/*  3322 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3323 */                     err = new Sk.builtin.ExternalError(err);
/*  3324 */                 }
/*  3325 */                 err.traceback.push({
/*  3326 */                     lineno: $currLineNo,
/*  3327 */                     colno: $currColNo,
/*  3328 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3329 */                 });
/*  3330 */                 if ($exc.length > 0) {
/*  3331 */                     $err = err;
/*  3332 */                     $blk = $exc.pop();
/*  3333 */                     continue;
/*  3334 */                 } else {
/*  3335 */                     throw err;
/*  3336 */                 }
/*  3337 */             }
/*  3338 */         }
/*  3339 */     });
/*  3340 */     var $scope266 = (function $negated267$(self) {
/*  3341 */         var self, self, $lattr268;
/*  3342 */         var $wakeFromSuspension = function() {
/*  3343 */             var susp = $scope266.$wakingSuspension;
/*  3344 */             delete $scope266.$wakingSuspension;
/*  3345 */             $blk = susp.$blk;
/*  3346 */             $loc = susp.$loc;
/*  3347 */             $gbl = susp.$gbl;
/*  3348 */             $exc = susp.$exc;
/*  3349 */             $err = susp.$err;
/*  3350 */             $postfinally = susp.$postfinally;
/*  3351 */             $currLineNo = susp.$lineno;
/*  3352 */             $currColNo = susp.$colno;
/*  3353 */             Sk.lastYield = Date.now();
/*  3354 */             self = susp.$tmps.self;
/*  3355 */             $lattr268 = susp.$tmps.$lattr268;
/*  3356 */             try {
/*  3357 */                 $ret = susp.child.resume();
/*  3358 */             } catch (err) {
/*  3359 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3360 */                     err = new Sk.builtin.ExternalError(err);
/*  3361 */                 }
/*  3362 */                 err.traceback.push({
/*  3363 */                     lineno: $currLineNo,
/*  3364 */                     colno: $currColNo,
/*  3365 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3366 */                 });
/*  3367 */                 if ($exc.length > 0) {
/*  3368 */                     $err = err;
/*  3369 */                     $blk = $exc.pop();
/*  3370 */                 } else {
/*  3371 */                     throw err;
/*  3372 */                 }
/*  3373 */             }
/*  3374 */         };
/*  3375 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3376 */             var susp = new Sk.misceval.Suspension();
/*  3377 */             susp.child = $child;
/*  3378 */             susp.resume = function() {
/*  3379 */                 $scope266.$wakingSuspension = susp;
/*  3380 */                 return $scope266();
/*  3381 */             };
/*  3382 */             susp.data = susp.child.data;
/*  3383 */             susp.$blk = $blk;
/*  3384 */             susp.$loc = $loc;
/*  3385 */             susp.$gbl = $gbl;
/*  3386 */             susp.$exc = $exc;
/*  3387 */             susp.$err = $err;
/*  3388 */             susp.$postfinally = $postfinally;
/*  3389 */             susp.$filename = $filename;
/*  3390 */             susp.$lineno = $lineno;
/*  3391 */             susp.$colno = $colno;
/*  3392 */             susp.optional = susp.child.optional;
/*  3393 */             susp.$tmps = {
/*  3394 */                 "self": self,
/*  3395 */                 "$lattr268": $lattr268
/*  3396 */             };
/*  3397 */             return susp;
/*  3398 */         };
/*  3399 */         var $blk = 0,
/*  3400 */             $exc = [],
/*  3401 */             $loc = {},
/*  3402 */             $gbl = this,
/*  3403 */             $err = undefined,
/*  3404 */             $ret = undefined,
/*  3405 */             $postfinally = undefined,
/*  3406 */             $currLineNo = undefined,
/*  3407 */             $currColNo = undefined;
/*  3408 */         if ($scope266.$wakingSuspension !== undefined) {
/*  3409 */             $wakeFromSuspension();
/*  3410 */         } else {
/*  3411 */             Sk.builtin.pyCheckArgs("negated", arguments, 1, 1, false, false);
/*  3412 */         }
/*  3413 */         while (true) {
/*  3414 */             try {
/*  3415 */                 switch ($blk) {
/*  3416 */                 case 0:
/*  3417 */                     /* --- codeobj entry --- */
/*  3418 */                     if (self === undefined) {
/*  3419 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3420 */                     }
/*  3421 */ 
/*  3422 */                     //
/*  3423 */                     // line 54:
/*  3424 */                     //         return self.scale(-1)
/*  3425 */                     //         ^
/*  3426 */                     //
/*  3427 */                     $currLineNo = 54;
/*  3428 */                     $currColNo = 8;
/*  3429 */ 
/*  3430 */                     if (self === undefined) {
/*  3431 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3432 */                     }
/*  3433 */                     $ret = Sk.abstr.gattr(self, 'scale', true);
/*  3434 */                     $blk = 1; /* allowing case fallthrough */
/*  3435 */                 case 1:
/*  3436 */                     /* --- function return or resume suspension --- */
/*  3437 */                     if ($ret && $ret.$isSuspension) {
/*  3438 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 54, 15);
/*  3439 */                     }
/*  3440 */                     var $lattr268 = $ret;
/*  3441 */                     $ret;
/*  3442 */                     $ret = Sk.misceval.callsimOrSuspend($lattr268, new Sk.builtin.int_(-1));
/*  3443 */                     $blk = 2; /* allowing case fallthrough */
/*  3444 */                 case 2:
/*  3445 */                     /* --- function return or resume suspension --- */
/*  3446 */                     if ($ret && $ret.$isSuspension) {
/*  3447 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 54, 15);
/*  3448 */                     }
/*  3449 */                     var $call269 = $ret;
/*  3450 */                     //
/*  3451 */                     // line 54:
/*  3452 */                     //         return self.scale(-1)
/*  3453 */                     //                ^
/*  3454 */                     //
/*  3455 */                     $currLineNo = 54;
/*  3456 */                     $currColNo = 15;
/*  3457 */ 
/*  3458 */                     return $call269;
/*  3459 */                     return Sk.builtin.none.none$;
/*  3460 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3461 */                 }
/*  3462 */             } catch (err) {
/*  3463 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3464 */                     err = new Sk.builtin.ExternalError(err);
/*  3465 */                 }
/*  3466 */                 err.traceback.push({
/*  3467 */                     lineno: $currLineNo,
/*  3468 */                     colno: $currColNo,
/*  3469 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3470 */                 });
/*  3471 */                 if ($exc.length > 0) {
/*  3472 */                     $err = err;
/*  3473 */                     $blk = $exc.pop();
/*  3474 */                     continue;
/*  3475 */                 } else {
/*  3476 */                     throw err;
/*  3477 */                 }
/*  3478 */             }
/*  3479 */         }
/*  3480 */     });
/*  3481 */     var $scope271 = (function $__eq__272$(self, other) {
/*  3482 */         var other, other, other, other, self, self, self, self, $lattr273, $compareres274, $lattr273, $compareres274, $lattr275, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr279, $compareres280, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr279, $compareres280, $lattr281, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr279, $compareres280, $lattr281, $jfalse282, $jfalse283, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr279, $compareres280, $lattr281, $jfalse282, $jfalse283, $lattr284, $compareres285, $lattr273, $compareres274, $lattr275, $jfalse276, $boolopsucc277, $jfalse278, $lattr279, $compareres280, $lattr281, $jfalse282, $jfalse283, $lattr284, $compareres285, $lattr286;
/*  3483 */         var $wakeFromSuspension = function() {
/*  3484 */             var susp = $scope271.$wakingSuspension;
/*  3485 */             delete $scope271.$wakingSuspension;
/*  3486 */             $blk = susp.$blk;
/*  3487 */             $loc = susp.$loc;
/*  3488 */             $gbl = susp.$gbl;
/*  3489 */             $exc = susp.$exc;
/*  3490 */             $err = susp.$err;
/*  3491 */             $postfinally = susp.$postfinally;
/*  3492 */             $currLineNo = susp.$lineno;
/*  3493 */             $currColNo = susp.$colno;
/*  3494 */             Sk.lastYield = Date.now();
/*  3495 */             other = susp.$tmps.other;
/*  3496 */             self = susp.$tmps.self;
/*  3497 */             $lattr273 = susp.$tmps.$lattr273;
/*  3498 */             $compareres274 = susp.$tmps.$compareres274;
/*  3499 */             $lattr275 = susp.$tmps.$lattr275;
/*  3500 */             $jfalse276 = susp.$tmps.$jfalse276;
/*  3501 */             $boolopsucc277 = susp.$tmps.$boolopsucc277;
/*  3502 */             $jfalse278 = susp.$tmps.$jfalse278;
/*  3503 */             $lattr279 = susp.$tmps.$lattr279;
/*  3504 */             $compareres280 = susp.$tmps.$compareres280;
/*  3505 */             $lattr281 = susp.$tmps.$lattr281;
/*  3506 */             $jfalse282 = susp.$tmps.$jfalse282;
/*  3507 */             $jfalse283 = susp.$tmps.$jfalse283;
/*  3508 */             $lattr284 = susp.$tmps.$lattr284;
/*  3509 */             $compareres285 = susp.$tmps.$compareres285;
/*  3510 */             $lattr286 = susp.$tmps.$lattr286;
/*  3511 */             try {
/*  3512 */                 $ret = susp.child.resume();
/*  3513 */             } catch (err) {
/*  3514 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3515 */                     err = new Sk.builtin.ExternalError(err);
/*  3516 */                 }
/*  3517 */                 err.traceback.push({
/*  3518 */                     lineno: $currLineNo,
/*  3519 */                     colno: $currColNo,
/*  3520 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3521 */                 });
/*  3522 */                 if ($exc.length > 0) {
/*  3523 */                     $err = err;
/*  3524 */                     $blk = $exc.pop();
/*  3525 */                 } else {
/*  3526 */                     throw err;
/*  3527 */                 }
/*  3528 */             }
/*  3529 */         };
/*  3530 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3531 */             var susp = new Sk.misceval.Suspension();
/*  3532 */             susp.child = $child;
/*  3533 */             susp.resume = function() {
/*  3534 */                 $scope271.$wakingSuspension = susp;
/*  3535 */                 return $scope271();
/*  3536 */             };
/*  3537 */             susp.data = susp.child.data;
/*  3538 */             susp.$blk = $blk;
/*  3539 */             susp.$loc = $loc;
/*  3540 */             susp.$gbl = $gbl;
/*  3541 */             susp.$exc = $exc;
/*  3542 */             susp.$err = $err;
/*  3543 */             susp.$postfinally = $postfinally;
/*  3544 */             susp.$filename = $filename;
/*  3545 */             susp.$lineno = $lineno;
/*  3546 */             susp.$colno = $colno;
/*  3547 */             susp.optional = susp.child.optional;
/*  3548 */             susp.$tmps = {
/*  3549 */                 "other": other,
/*  3550 */                 "self": self,
/*  3551 */                 "$lattr273": $lattr273,
/*  3552 */                 "$compareres274": $compareres274,
/*  3553 */                 "$lattr275": $lattr275,
/*  3554 */                 "$jfalse276": $jfalse276,
/*  3555 */                 "$boolopsucc277": $boolopsucc277,
/*  3556 */                 "$jfalse278": $jfalse278,
/*  3557 */                 "$lattr279": $lattr279,
/*  3558 */                 "$compareres280": $compareres280,
/*  3559 */                 "$lattr281": $lattr281,
/*  3560 */                 "$jfalse282": $jfalse282,
/*  3561 */                 "$jfalse283": $jfalse283,
/*  3562 */                 "$lattr284": $lattr284,
/*  3563 */                 "$compareres285": $compareres285,
/*  3564 */                 "$lattr286": $lattr286
/*  3565 */             };
/*  3566 */             return susp;
/*  3567 */         };
/*  3568 */         var $blk = 0,
/*  3569 */             $exc = [],
/*  3570 */             $loc = {},
/*  3571 */             $gbl = this,
/*  3572 */             $err = undefined,
/*  3573 */             $ret = undefined,
/*  3574 */             $postfinally = undefined,
/*  3575 */             $currLineNo = undefined,
/*  3576 */             $currColNo = undefined;
/*  3577 */         if ($scope271.$wakingSuspension !== undefined) {
/*  3578 */             $wakeFromSuspension();
/*  3579 */         } else {
/*  3580 */             Sk.builtin.pyCheckArgs("__eq__", arguments, 2, 2, false, false);
/*  3581 */         }
/*  3582 */         while (true) {
/*  3583 */             try {
/*  3584 */                 switch ($blk) {
/*  3585 */                 case 0:
/*  3586 */                     /* --- codeobj entry --- */
/*  3587 */                     if (self === undefined) {
/*  3588 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3589 */                     }
/*  3590 */                     if (other === undefined) {
/*  3591 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3592 */                     }
/*  3593 */ 
/*  3594 */                     //
/*  3595 */                     // line 57:
/*  3596 */                     //         return (self.x == other.x) and (self.y == other.y) and (self.z == other.z)
/*  3597 */                     //         ^
/*  3598 */                     //
/*  3599 */                     $currLineNo = 57;
/*  3600 */                     $currColNo = 8;
/*  3601 */ 
/*  3602 */                     if (self === undefined) {
/*  3603 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3604 */                     }
/*  3605 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  3606 */                     $blk = 2; /* allowing case fallthrough */
/*  3607 */                 case 2:
/*  3608 */                     /* --- function return or resume suspension --- */
/*  3609 */                     if ($ret && $ret.$isSuspension) {
/*  3610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 16);
/*  3611 */                     }
/*  3612 */                     var $lattr273 = $ret;
/*  3613 */                     var $compareres274 = null;
/*  3614 */                     if (other === undefined) {
/*  3615 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3616 */                     }
/*  3617 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  3618 */                     $blk = 4; /* allowing case fallthrough */
/*  3619 */                 case 4:
/*  3620 */                     /* --- function return or resume suspension --- */
/*  3621 */                     if ($ret && $ret.$isSuspension) {
/*  3622 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 26);
/*  3623 */                     }
/*  3624 */                     var $lattr275 = $ret;
/*  3625 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr273, $lattr275, 'Eq', true));
/*  3626 */                     $blk = 5; /* allowing case fallthrough */
/*  3627 */                 case 5:
/*  3628 */                     /* --- function return or resume suspension --- */
/*  3629 */                     if ($ret && $ret.$isSuspension) {
/*  3630 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 16);
/*  3631 */                     }
/*  3632 */                     $compareres274 = $ret;
/*  3633 */                     var $jfalse276 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3634 */                     if ($jfalse276) { /*test failed */
/*  3635 */                         $blk = 3;
/*  3636 */                         continue;
/*  3637 */                     }
/*  3638 */                     $blk = 3; /* allowing case fallthrough */
/*  3639 */                 case 3:
/*  3640 */                     /* --- done --- */
/*  3641 */                     var $boolopsucc277 = $compareres274;
/*  3642 */                     $boolopsucc277 = $compareres274;
/*  3643 */                     var $jfalse278 = ($compareres274 === false || !Sk.misceval.isTrue($compareres274));
/*  3644 */                     if ($jfalse278) { /*test failed */
/*  3645 */                         $blk = 1;
/*  3646 */                         continue;
/*  3647 */                     }
/*  3648 */                     if (self === undefined) {
/*  3649 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3650 */                     }
/*  3651 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  3652 */                     $blk = 6; /* allowing case fallthrough */
/*  3653 */                 case 6:
/*  3654 */                     /* --- function return or resume suspension --- */
/*  3655 */                     if ($ret && $ret.$isSuspension) {
/*  3656 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 40);
/*  3657 */                     }
/*  3658 */                     var $lattr279 = $ret;
/*  3659 */                     var $compareres280 = null;
/*  3660 */                     if (other === undefined) {
/*  3661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3662 */                     }
/*  3663 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  3664 */                     $blk = 8; /* allowing case fallthrough */
/*  3665 */                 case 8:
/*  3666 */                     /* --- function return or resume suspension --- */
/*  3667 */                     if ($ret && $ret.$isSuspension) {
/*  3668 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 50);
/*  3669 */                     }
/*  3670 */                     var $lattr281 = $ret;
/*  3671 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr279, $lattr281, 'Eq', true));
/*  3672 */                     $blk = 9; /* allowing case fallthrough */
/*  3673 */                 case 9:
/*  3674 */                     /* --- function return or resume suspension --- */
/*  3675 */                     if ($ret && $ret.$isSuspension) {
/*  3676 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 40);
/*  3677 */                     }
/*  3678 */                     $compareres280 = $ret;
/*  3679 */                     var $jfalse282 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3680 */                     if ($jfalse282) { /*test failed */
/*  3681 */                         $blk = 7;
/*  3682 */                         continue;
/*  3683 */                     }
/*  3684 */                     $blk = 7; /* allowing case fallthrough */
/*  3685 */                 case 7:
/*  3686 */                     /* --- done --- */
/*  3687 */                     $boolopsucc277 = $compareres280;
/*  3688 */                     var $jfalse283 = ($compareres280 === false || !Sk.misceval.isTrue($compareres280));
/*  3689 */                     if ($jfalse283) { /*test failed */
/*  3690 */                         $blk = 1;
/*  3691 */                         continue;
/*  3692 */                     }
/*  3693 */                     if (self === undefined) {
/*  3694 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3695 */                     }
/*  3696 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  3697 */                     $blk = 10; /* allowing case fallthrough */
/*  3698 */                 case 10:
/*  3699 */                     /* --- function return or resume suspension --- */
/*  3700 */                     if ($ret && $ret.$isSuspension) {
/*  3701 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 64);
/*  3702 */                     }
/*  3703 */                     var $lattr284 = $ret;
/*  3704 */                     var $compareres285 = null;
/*  3705 */                     if (other === undefined) {
/*  3706 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  3707 */                     }
/*  3708 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  3709 */                     $blk = 12; /* allowing case fallthrough */
/*  3710 */                 case 12:
/*  3711 */                     /* --- function return or resume suspension --- */
/*  3712 */                     if ($ret && $ret.$isSuspension) {
/*  3713 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 74);
/*  3714 */                     }
/*  3715 */                     var $lattr286 = $ret;
/*  3716 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr284, $lattr286, 'Eq', true));
/*  3717 */                     $blk = 13; /* allowing case fallthrough */
/*  3718 */                 case 13:
/*  3719 */                     /* --- function return or resume suspension --- */
/*  3720 */                     if ($ret && $ret.$isSuspension) {
/*  3721 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 57, 64);
/*  3722 */                     }
/*  3723 */                     $compareres285 = $ret;
/*  3724 */                     var $jfalse287 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3725 */                     if ($jfalse287) { /*test failed */
/*  3726 */                         $blk = 11;
/*  3727 */                         continue;
/*  3728 */                     }
/*  3729 */                     $blk = 11; /* allowing case fallthrough */
/*  3730 */                 case 11:
/*  3731 */                     /* --- done --- */
/*  3732 */                     $boolopsucc277 = $compareres285;
/*  3733 */                     var $jfalse288 = ($compareres285 === false || !Sk.misceval.isTrue($compareres285));
/*  3734 */                     if ($jfalse288) { /*test failed */
/*  3735 */                         $blk = 1;
/*  3736 */                         continue;
/*  3737 */                     }
/*  3738 */                     $blk = 1; /* allowing case fallthrough */
/*  3739 */                 case 1:
/*  3740 */                     /* --- end of boolop --- */
/*  3741 */                     return $boolopsucc277;
/*  3742 */                     return Sk.builtin.none.none$;
/*  3743 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3744 */                 }
/*  3745 */             } catch (err) {
/*  3746 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3747 */                     err = new Sk.builtin.ExternalError(err);
/*  3748 */                 }
/*  3749 */                 err.traceback.push({
/*  3750 */                     lineno: $currLineNo,
/*  3751 */                     colno: $currColNo,
/*  3752 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3753 */                 });
/*  3754 */                 if ($exc.length > 0) {
/*  3755 */                     $err = err;
/*  3756 */                     $blk = $exc.pop();
/*  3757 */                     continue;
/*  3758 */                 } else {
/*  3759 */                     throw err;
/*  3760 */                 }
/*  3761 */             }
/*  3762 */         }
/*  3763 */     });
/*  3764 */     var $scope290 = (function $isVector291$(self) {
/*  3765 */         var $blk = 0,
/*  3766 */             $exc = [],
/*  3767 */             $loc = {},
/*  3768 */             $gbl = this,
/*  3769 */             $err = undefined,
/*  3770 */             $ret = undefined,
/*  3771 */             $postfinally = undefined,
/*  3772 */             $currLineNo = undefined,
/*  3773 */             $currColNo = undefined;
/*  3774 */         if ($scope290.$wakingSuspension !== undefined) {
/*  3775 */             $wakeFromSuspension();
/*  3776 */         } else {
/*  3777 */             Sk.builtin.pyCheckArgs("isVector", arguments, 1, 1, false, false);
/*  3778 */         }
/*  3779 */         while (true) {
/*  3780 */             try {
/*  3781 */                 switch ($blk) {
/*  3782 */                 case 0:
/*  3783 */                     /* --- codeobj entry --- */
/*  3784 */                     if (self === undefined) {
/*  3785 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3786 */                     }
/*  3787 */ 
/*  3788 */                     //
/*  3789 */                     // line 60:
/*  3790 */                     //         return True
/*  3791 */                     //         ^
/*  3792 */                     //
/*  3793 */                     $currLineNo = 60;
/*  3794 */                     $currColNo = 8;
/*  3795 */ 
/*  3796 */                     return Sk.builtin.bool.true$;
/*  3797 */                     return Sk.builtin.none.none$;
/*  3798 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3799 */                 }
/*  3800 */             } catch (err) {
/*  3801 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3802 */                     err = new Sk.builtin.ExternalError(err);
/*  3803 */                 }
/*  3804 */                 err.traceback.push({
/*  3805 */                     lineno: $currLineNo,
/*  3806 */                     colno: $currColNo,
/*  3807 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3808 */                 });
/*  3809 */                 if ($exc.length > 0) {
/*  3810 */                     $err = err;
/*  3811 */                     $blk = $exc.pop();
/*  3812 */                     continue;
/*  3813 */                 } else {
/*  3814 */                     throw err;
/*  3815 */                 }
/*  3816 */             }
/*  3817 */         }
/*  3818 */     });
/*  3819 */     var $scope293 = (function $isPoint294$(self) {
/*  3820 */         var $blk = 0,
/*  3821 */             $exc = [],
/*  3822 */             $loc = {},
/*  3823 */             $gbl = this,
/*  3824 */             $err = undefined,
/*  3825 */             $ret = undefined,
/*  3826 */             $postfinally = undefined,
/*  3827 */             $currLineNo = undefined,
/*  3828 */             $currColNo = undefined;
/*  3829 */         if ($scope293.$wakingSuspension !== undefined) {
/*  3830 */             $wakeFromSuspension();
/*  3831 */         } else {
/*  3832 */             Sk.builtin.pyCheckArgs("isPoint", arguments, 1, 1, false, false);
/*  3833 */         }
/*  3834 */         while (true) {
/*  3835 */             try {
/*  3836 */                 switch ($blk) {
/*  3837 */                 case 0:
/*  3838 */                     /* --- codeobj entry --- */
/*  3839 */                     if (self === undefined) {
/*  3840 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3841 */                     }
/*  3842 */ 
/*  3843 */                     //
/*  3844 */                     // line 63:
/*  3845 */                     //         return False
/*  3846 */                     //         ^
/*  3847 */                     //
/*  3848 */                     $currLineNo = 63;
/*  3849 */                     $currColNo = 8;
/*  3850 */ 
/*  3851 */                     return Sk.builtin.bool.false$;
/*  3852 */                     return Sk.builtin.none.none$;
/*  3853 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3854 */                 }
/*  3855 */             } catch (err) {
/*  3856 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3857 */                     err = new Sk.builtin.ExternalError(err);
/*  3858 */                 }
/*  3859 */                 err.traceback.push({
/*  3860 */                     lineno: $currLineNo,
/*  3861 */                     colno: $currColNo,
/*  3862 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3863 */                 });
/*  3864 */                 if ($exc.length > 0) {
/*  3865 */                     $err = err;
/*  3866 */                     $blk = $exc.pop();
/*  3867 */                     continue;
/*  3868 */                 } else {
/*  3869 */                     throw err;
/*  3870 */                 }
/*  3871 */             }
/*  3872 */         }
/*  3873 */     });
/*  3874 */     var $scope296 = (function $mustBeVector297$(self) {
/*  3875 */         var $blk = 0,
/*  3876 */             $exc = [],
/*  3877 */             $loc = {},
/*  3878 */             $gbl = this,
/*  3879 */             $err = undefined,
/*  3880 */             $ret = undefined,
/*  3881 */             $postfinally = undefined,
/*  3882 */             $currLineNo = undefined,
/*  3883 */             $currColNo = undefined;
/*  3884 */         if ($scope296.$wakingSuspension !== undefined) {
/*  3885 */             $wakeFromSuspension();
/*  3886 */         } else {
/*  3887 */             Sk.builtin.pyCheckArgs("mustBeVector", arguments, 1, 1, false, false);
/*  3888 */         }
/*  3889 */         while (true) {
/*  3890 */             try {
/*  3891 */                 switch ($blk) {
/*  3892 */                 case 0:
/*  3893 */                     /* --- codeobj entry --- */
/*  3894 */                     if (self === undefined) {
/*  3895 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3896 */                     }
/*  3897 */ 
/*  3898 */                     //
/*  3899 */                     // line 66:
/*  3900 */                     //         return self
/*  3901 */                     //         ^
/*  3902 */                     //
/*  3903 */                     $currLineNo = 66;
/*  3904 */                     $currColNo = 8;
/*  3905 */ 
/*  3906 */                     if (self === undefined) {
/*  3907 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3908 */                     }
/*  3909 */                     return self;
/*  3910 */                     return Sk.builtin.none.none$;
/*  3911 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3912 */                 }
/*  3913 */             } catch (err) {
/*  3914 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3915 */                     err = new Sk.builtin.ExternalError(err);
/*  3916 */                 }
/*  3917 */                 err.traceback.push({
/*  3918 */                     lineno: $currLineNo,
/*  3919 */                     colno: $currColNo,
/*  3920 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3921 */                 });
/*  3922 */                 if ($exc.length > 0) {
/*  3923 */                     $err = err;
/*  3924 */                     $blk = $exc.pop();
/*  3925 */                     continue;
/*  3926 */                 } else {
/*  3927 */                     throw err;
/*  3928 */                 }
/*  3929 */             }
/*  3930 */         }
/*  3931 */     });
/*  3932 */     var $scope299 = (function $mustBePoint300$(self) {
/*  3933 */         var $blk = 0,
/*  3934 */             $exc = [],
/*  3935 */             $loc = {},
/*  3936 */             $gbl = this,
/*  3937 */             $err = undefined,
/*  3938 */             $ret = undefined,
/*  3939 */             $postfinally = undefined,
/*  3940 */             $currLineNo = undefined,
/*  3941 */             $currColNo = undefined;
/*  3942 */         if ($scope299.$wakingSuspension !== undefined) {
/*  3943 */             $wakeFromSuspension();
/*  3944 */         } else {
/*  3945 */             Sk.builtin.pyCheckArgs("mustBePoint", arguments, 1, 1, false, false);
/*  3946 */         }
/*  3947 */         while (true) {
/*  3948 */             try {
/*  3949 */                 switch ($blk) {
/*  3950 */                 case 0:
/*  3951 */                     /* --- codeobj entry --- */
/*  3952 */                     if (self === undefined) {
/*  3953 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3954 */                     }
/*  3955 */ 
/*  3956 */                     //
/*  3957 */                     // line 69:
/*  3958 */                     //         raise 'Vectors are not points!'
/*  3959 */                     //         ^
/*  3960 */                     //
/*  3961 */                     $currLineNo = 69;
/*  3962 */                     $currColNo = 8;
/*  3963 */ 
/*  3964 */                     var $str301 = new Sk.builtins['str']('Vectors are not points!');
/*  3965 */                     var $err302 = $str301;
/*  3966 */                     if ($err302 instanceof Sk.builtin.type) {
/*  3967 */                         throw Sk.misceval.callsim($err302);
/*  3968 */                     } else if (typeof($err302) === 'function') {
/*  3969 */                         throw $err302();
/*  3970 */                     } else {
/*  3971 */                         throw $err302;
/*  3972 */                     }
/*  3973 */                     return Sk.builtin.none.none$;
/*  3974 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3975 */                 }
/*  3976 */             } catch (err) {
/*  3977 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3978 */                     err = new Sk.builtin.ExternalError(err);
/*  3979 */                 }
/*  3980 */                 err.traceback.push({
/*  3981 */                     lineno: $currLineNo,
/*  3982 */                     colno: $currColNo,
/*  3983 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  3984 */                 });
/*  3985 */                 if ($exc.length > 0) {
/*  3986 */                     $err = err;
/*  3987 */                     $blk = $exc.pop();
/*  3988 */                     continue;
/*  3989 */                 } else {
/*  3990 */                     throw err;
/*  3991 */                 }
/*  3992 */             }
/*  3993 */         }
/*  3994 */     });
/*  3995 */     var $scope304 = (function $reflectThrough305$(self, normal) {
/*  3996 */         var d; /* locals */
/*  3997 */         var d, d, normal, normal, normal, self, self, self, $lattr306, $lattr306, $lattr307, $lattr306, $lattr307, $call308, $lattr310;
/*  3998 */         var $wakeFromSuspension = function() {
/*  3999 */             var susp = $scope304.$wakingSuspension;
/*  4000 */             delete $scope304.$wakingSuspension;
/*  4001 */             $blk = susp.$blk;
/*  4002 */             $loc = susp.$loc;
/*  4003 */             $gbl = susp.$gbl;
/*  4004 */             $exc = susp.$exc;
/*  4005 */             $err = susp.$err;
/*  4006 */             $postfinally = susp.$postfinally;
/*  4007 */             $currLineNo = susp.$lineno;
/*  4008 */             $currColNo = susp.$colno;
/*  4009 */             Sk.lastYield = Date.now();
/*  4010 */             d = susp.$tmps.d;
/*  4011 */             normal = susp.$tmps.normal;
/*  4012 */             self = susp.$tmps.self;
/*  4013 */             $lattr306 = susp.$tmps.$lattr306;
/*  4014 */             $lattr307 = susp.$tmps.$lattr307;
/*  4015 */             $call308 = susp.$tmps.$call308;
/*  4016 */             $lattr310 = susp.$tmps.$lattr310;
/*  4017 */             try {
/*  4018 */                 $ret = susp.child.resume();
/*  4019 */             } catch (err) {
/*  4020 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4021 */                     err = new Sk.builtin.ExternalError(err);
/*  4022 */                 }
/*  4023 */                 err.traceback.push({
/*  4024 */                     lineno: $currLineNo,
/*  4025 */                     colno: $currColNo,
/*  4026 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4027 */                 });
/*  4028 */                 if ($exc.length > 0) {
/*  4029 */                     $err = err;
/*  4030 */                     $blk = $exc.pop();
/*  4031 */                 } else {
/*  4032 */                     throw err;
/*  4033 */                 }
/*  4034 */             }
/*  4035 */         };
/*  4036 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4037 */             var susp = new Sk.misceval.Suspension();
/*  4038 */             susp.child = $child;
/*  4039 */             susp.resume = function() {
/*  4040 */                 $scope304.$wakingSuspension = susp;
/*  4041 */                 return $scope304();
/*  4042 */             };
/*  4043 */             susp.data = susp.child.data;
/*  4044 */             susp.$blk = $blk;
/*  4045 */             susp.$loc = $loc;
/*  4046 */             susp.$gbl = $gbl;
/*  4047 */             susp.$exc = $exc;
/*  4048 */             susp.$err = $err;
/*  4049 */             susp.$postfinally = $postfinally;
/*  4050 */             susp.$filename = $filename;
/*  4051 */             susp.$lineno = $lineno;
/*  4052 */             susp.$colno = $colno;
/*  4053 */             susp.optional = susp.child.optional;
/*  4054 */             susp.$tmps = {
/*  4055 */                 "d": d,
/*  4056 */                 "normal": normal,
/*  4057 */                 "self": self,
/*  4058 */                 "$lattr306": $lattr306,
/*  4059 */                 "$lattr307": $lattr307,
/*  4060 */                 "$call308": $call308,
/*  4061 */                 "$lattr310": $lattr310
/*  4062 */             };
/*  4063 */             return susp;
/*  4064 */         };
/*  4065 */         var $blk = 0,
/*  4066 */             $exc = [],
/*  4067 */             $loc = {},
/*  4068 */             $gbl = this,
/*  4069 */             $err = undefined,
/*  4070 */             $ret = undefined,
/*  4071 */             $postfinally = undefined,
/*  4072 */             $currLineNo = undefined,
/*  4073 */             $currColNo = undefined;
/*  4074 */         if ($scope304.$wakingSuspension !== undefined) {
/*  4075 */             $wakeFromSuspension();
/*  4076 */         } else {
/*  4077 */             Sk.builtin.pyCheckArgs("reflectThrough", arguments, 2, 2, false, false);
/*  4078 */         }
/*  4079 */         while (true) {
/*  4080 */             try {
/*  4081 */                 switch ($blk) {
/*  4082 */                 case 0:
/*  4083 */                     /* --- codeobj entry --- */
/*  4084 */                     if (self === undefined) {
/*  4085 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4086 */                     }
/*  4087 */                     if (normal === undefined) {
/*  4088 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/*  4089 */                     }
/*  4090 */ 
/*  4091 */                     //
/*  4092 */                     // line 72:
/*  4093 */                     //         d = normal.scale(self.dot(normal))
/*  4094 */                     //         ^
/*  4095 */                     //
/*  4096 */                     $currLineNo = 72;
/*  4097 */                     $currColNo = 8;
/*  4098 */ 
/*  4099 */                     if (normal === undefined) {
/*  4100 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/*  4101 */                     }
/*  4102 */                     $ret = Sk.abstr.gattr(normal, 'scale', true);
/*  4103 */                     $blk = 1; /* allowing case fallthrough */
/*  4104 */                 case 1:
/*  4105 */                     /* --- function return or resume suspension --- */
/*  4106 */                     if ($ret && $ret.$isSuspension) {
/*  4107 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 72, 12);
/*  4108 */                     }
/*  4109 */                     var $lattr306 = $ret;
/*  4110 */                     if (self === undefined) {
/*  4111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4112 */                     }
/*  4113 */                     $ret = Sk.abstr.gattr(self, 'dot', true);
/*  4114 */                     $blk = 2; /* allowing case fallthrough */
/*  4115 */                 case 2:
/*  4116 */                     /* --- function return or resume suspension --- */
/*  4117 */                     if ($ret && $ret.$isSuspension) {
/*  4118 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 72, 25);
/*  4119 */                     }
/*  4120 */                     var $lattr307 = $ret;
/*  4121 */                     if (normal === undefined) {
/*  4122 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/*  4123 */                     }
/*  4124 */                     $ret;
/*  4125 */                     $ret = Sk.misceval.callsimOrSuspend($lattr307, normal);
/*  4126 */                     $blk = 3; /* allowing case fallthrough */
/*  4127 */                 case 3:
/*  4128 */                     /* --- function return or resume suspension --- */
/*  4129 */                     if ($ret && $ret.$isSuspension) {
/*  4130 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 72, 25);
/*  4131 */                     }
/*  4132 */                     var $call308 = $ret;
/*  4133 */                     //
/*  4134 */                     // line 72:
/*  4135 */                     //         d = normal.scale(self.dot(normal))
/*  4136 */                     //                          ^
/*  4137 */                     //
/*  4138 */                     $currLineNo = 72;
/*  4139 */                     $currColNo = 25;
/*  4140 */ 
/*  4141 */                     $ret;
/*  4142 */                     $ret = Sk.misceval.callsimOrSuspend($lattr306, $call308);
/*  4143 */                     $blk = 4; /* allowing case fallthrough */
/*  4144 */                 case 4:
/*  4145 */                     /* --- function return or resume suspension --- */
/*  4146 */                     if ($ret && $ret.$isSuspension) {
/*  4147 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 72, 12);
/*  4148 */                     }
/*  4149 */                     var $call309 = $ret;
/*  4150 */                     //
/*  4151 */                     // line 72:
/*  4152 */                     //         d = normal.scale(self.dot(normal))
/*  4153 */                     //             ^
/*  4154 */                     //
/*  4155 */                     $currLineNo = 72;
/*  4156 */                     $currColNo = 12;
/*  4157 */ 
/*  4158 */                     d = $call309;
/*  4159 */                     //
/*  4160 */                     // line 73:
/*  4161 */                     //         return self - d.scale(2)
/*  4162 */                     //         ^
/*  4163 */                     //
/*  4164 */                     $currLineNo = 73;
/*  4165 */                     $currColNo = 8;
/*  4166 */ 
/*  4167 */                     if (self === undefined) {
/*  4168 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4169 */                     }
/*  4170 */                     if (d === undefined) {
/*  4171 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  4172 */                     }
/*  4173 */                     $ret = Sk.abstr.gattr(d, 'scale', true);
/*  4174 */                     $blk = 5; /* allowing case fallthrough */
/*  4175 */                 case 5:
/*  4176 */                     /* --- function return or resume suspension --- */
/*  4177 */                     if ($ret && $ret.$isSuspension) {
/*  4178 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 73, 22);
/*  4179 */                     }
/*  4180 */                     var $lattr310 = $ret;
/*  4181 */                     $ret;
/*  4182 */                     $ret = Sk.misceval.callsimOrSuspend($lattr310, new Sk.builtin.int_(2));
/*  4183 */                     $blk = 6; /* allowing case fallthrough */
/*  4184 */                 case 6:
/*  4185 */                     /* --- function return or resume suspension --- */
/*  4186 */                     if ($ret && $ret.$isSuspension) {
/*  4187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 73, 22);
/*  4188 */                     }
/*  4189 */                     var $call311 = $ret;
/*  4190 */                     //
/*  4191 */                     // line 73:
/*  4192 */                     //         return self - d.scale(2)
/*  4193 */                     //                       ^
/*  4194 */                     //
/*  4195 */                     $currLineNo = 73;
/*  4196 */                     $currColNo = 22;
/*  4197 */ 
/*  4198 */                     var $binop312 = Sk.abstr.numberBinOp(self, $call311, 'Sub');
/*  4199 */                     return $binop312;
/*  4200 */                     return Sk.builtin.none.none$;
/*  4201 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4202 */                 }
/*  4203 */             } catch (err) {
/*  4204 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4205 */                     err = new Sk.builtin.ExternalError(err);
/*  4206 */                 }
/*  4207 */                 err.traceback.push({
/*  4208 */                     lineno: $currLineNo,
/*  4209 */                     colno: $currColNo,
/*  4210 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4211 */                 });
/*  4212 */                 if ($exc.length > 0) {
/*  4213 */                     $err = err;
/*  4214 */                     $blk = $exc.pop();
/*  4215 */                     continue;
/*  4216 */                 } else {
/*  4217 */                     throw err;
/*  4218 */                 }
/*  4219 */             }
/*  4220 */         }
/*  4221 */     });
/*  4222 */     var $scope350 = (function $Point$class_outer($globals, $locals, $rest) {
/*  4223 */         var $gbl = $globals,
/*  4224 */             $loc = $locals;
/*  4225 */         (function $Point$_closure() {
/*  4226 */             var $blk = 0,
/*  4227 */                 $exc = [],
/*  4228 */                 $ret = undefined,
/*  4229 */                 $postfinally = undefined,
/*  4230 */                 $currLineNo = undefined,
/*  4231 */                 $currColNo = undefined;
/*  4232 */             while (true) {
/*  4233 */                 try {
/*  4234 */                     switch ($blk) {
/*  4235 */                     case 0:
/*  4236 */                         /* --- class entry --- */
/*  4237 */                         //
/*  4238 */                         // line 84:
/*  4239 */                         //     def __init__(self, initx, inity, initz):
/*  4240 */                         //     ^
/*  4241 */                         //
/*  4242 */                         $currLineNo = 84;
/*  4243 */                         $currColNo = 4;
/*  4244 */ 
/*  4245 */                         $scope351.co_name = new Sk.builtins['str']('__init__');
/*  4246 */                         $scope351.co_varnames = ['self', 'initx', 'inity', 'initz'];
/*  4247 */                         var $funcobj353 = new Sk.builtins['function']($scope351, $gbl);
/*  4248 */                         $loc.__init__ = $funcobj353;
/*  4249 */                         //
/*  4250 */                         // line 89:
/*  4251 */                         //     def __str__(self):
/*  4252 */                         //     ^
/*  4253 */                         //
/*  4254 */                         $currLineNo = 89;
/*  4255 */                         $currColNo = 4;
/*  4256 */ 
/*  4257 */                         $scope354.co_name = new Sk.builtins['str']('__str__');
/*  4258 */                         $scope354.co_varnames = ['self'];
/*  4259 */                         var $funcobj365 = new Sk.builtins['function']($scope354, $gbl);
/*  4260 */                         $loc.__str__ = $funcobj365;
/*  4261 */                         //
/*  4262 */                         // line 92:
/*  4263 */                         //     def __repr__(self):
/*  4264 */                         //     ^
/*  4265 */                         //
/*  4266 */                         $currLineNo = 92;
/*  4267 */                         $currColNo = 4;
/*  4268 */ 
/*  4269 */                         $scope366.co_name = new Sk.builtins['str']('__repr__');
/*  4270 */                         $scope366.co_varnames = ['self'];
/*  4271 */                         var $funcobj377 = new Sk.builtins['function']($scope366, $gbl);
/*  4272 */                         $loc.__repr__ = $funcobj377;
/*  4273 */                         //
/*  4274 */                         // line 95:
/*  4275 */                         //     def __add__(self, other):
/*  4276 */                         //     ^
/*  4277 */                         //
/*  4278 */                         $currLineNo = 95;
/*  4279 */                         $currColNo = 4;
/*  4280 */ 
/*  4281 */                         $scope378.co_name = new Sk.builtins['str']('__add__');
/*  4282 */                         $scope378.co_varnames = ['self', 'other'];
/*  4283 */                         var $funcobj393 = new Sk.builtins['function']($scope378, $gbl);
/*  4284 */                         $loc.__add__ = $funcobj393;
/*  4285 */                         //
/*  4286 */                         // line 99:
/*  4287 */                         //     def __sub__(self, other):
/*  4288 */                         //     ^
/*  4289 */                         //
/*  4290 */                         $currLineNo = 99;
/*  4291 */                         $currColNo = 4;
/*  4292 */ 
/*  4293 */                         $scope394.co_name = new Sk.builtins['str']('__sub__');
/*  4294 */                         $scope394.co_varnames = ['self', 'other'];
/*  4295 */                         var $funcobj421 = new Sk.builtins['function']($scope394, $gbl);
/*  4296 */                         $loc.__sub__ = $funcobj421;
/*  4297 */                         //
/*  4298 */                         // line 105:
/*  4299 */                         //     def isVector(self):
/*  4300 */                         //     ^
/*  4301 */                         //
/*  4302 */                         $currLineNo = 105;
/*  4303 */                         $currColNo = 4;
/*  4304 */ 
/*  4305 */                         $scope422.co_name = new Sk.builtins['str']('isVector');
/*  4306 */                         $scope422.co_varnames = ['self'];
/*  4307 */                         var $funcobj424 = new Sk.builtins['function']($scope422, $gbl);
/*  4308 */                         $loc.isVector = $funcobj424;
/*  4309 */                         //
/*  4310 */                         // line 108:
/*  4311 */                         //     def isPoint(self):
/*  4312 */                         //     ^
/*  4313 */                         //
/*  4314 */                         $currLineNo = 108;
/*  4315 */                         $currColNo = 4;
/*  4316 */ 
/*  4317 */                         $scope425.co_name = new Sk.builtins['str']('isPoint');
/*  4318 */                         $scope425.co_varnames = ['self'];
/*  4319 */                         var $funcobj427 = new Sk.builtins['function']($scope425, $gbl);
/*  4320 */                         $loc.isPoint = $funcobj427;
/*  4321 */                         //
/*  4322 */                         // line 111:
/*  4323 */                         //     def mustBeVector(self):
/*  4324 */                         //     ^
/*  4325 */                         //
/*  4326 */                         $currLineNo = 111;
/*  4327 */                         $currColNo = 4;
/*  4328 */ 
/*  4329 */                         $scope428.co_name = new Sk.builtins['str']('mustBeVector');
/*  4330 */                         $scope428.co_varnames = ['self'];
/*  4331 */                         var $funcobj432 = new Sk.builtins['function']($scope428, $gbl);
/*  4332 */                         $loc.mustBeVector = $funcobj432;
/*  4333 */                         //
/*  4334 */                         // line 114:
/*  4335 */                         //     def mustBePoint(self):
/*  4336 */                         //     ^
/*  4337 */                         //
/*  4338 */                         $currLineNo = 114;
/*  4339 */                         $currColNo = 4;
/*  4340 */ 
/*  4341 */                         $scope433.co_name = new Sk.builtins['str']('mustBePoint');
/*  4342 */                         $scope433.co_varnames = ['self'];
/*  4343 */                         var $funcobj435 = new Sk.builtins['function']($scope433, $gbl);
/*  4344 */                         $loc.mustBePoint = $funcobj435;
/*  4345 */                         return;
/*  4346 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4347 */                     }
/*  4348 */                 } catch (err) {
/*  4349 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  4350 */                         err = new Sk.builtin.ExternalError(err);
/*  4351 */                     }
/*  4352 */                     err.traceback.push({
/*  4353 */                         lineno: $currLineNo,
/*  4354 */                         colno: $currColNo,
/*  4355 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4356 */                     });
/*  4357 */                     if ($exc.length > 0) {
/*  4358 */                         $err = err;
/*  4359 */                         $blk = $exc.pop();
/*  4360 */                         continue;
/*  4361 */                     } else {
/*  4362 */                         throw err;
/*  4363 */                     }
/*  4364 */                 }
/*  4365 */             }
/*  4366 */         }).apply(null, $rest);
/*  4367 */     });
/*  4368 */     var $scope351 = (function $__init__352$(self, initx, inity, initz) {
/*  4369 */         var initx, initx, inity, inity, initz, initz, self, self, self, self;
/*  4370 */         var $wakeFromSuspension = function() {
/*  4371 */             var susp = $scope351.$wakingSuspension;
/*  4372 */             delete $scope351.$wakingSuspension;
/*  4373 */             $blk = susp.$blk;
/*  4374 */             $loc = susp.$loc;
/*  4375 */             $gbl = susp.$gbl;
/*  4376 */             $exc = susp.$exc;
/*  4377 */             $err = susp.$err;
/*  4378 */             $postfinally = susp.$postfinally;
/*  4379 */             $currLineNo = susp.$lineno;
/*  4380 */             $currColNo = susp.$colno;
/*  4381 */             Sk.lastYield = Date.now();
/*  4382 */             initx = susp.$tmps.initx;
/*  4383 */             inity = susp.$tmps.inity;
/*  4384 */             initz = susp.$tmps.initz;
/*  4385 */             self = susp.$tmps.self;
/*  4386 */             try {
/*  4387 */                 $ret = susp.child.resume();
/*  4388 */             } catch (err) {
/*  4389 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4390 */                     err = new Sk.builtin.ExternalError(err);
/*  4391 */                 }
/*  4392 */                 err.traceback.push({
/*  4393 */                     lineno: $currLineNo,
/*  4394 */                     colno: $currColNo,
/*  4395 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4396 */                 });
/*  4397 */                 if ($exc.length > 0) {
/*  4398 */                     $err = err;
/*  4399 */                     $blk = $exc.pop();
/*  4400 */                 } else {
/*  4401 */                     throw err;
/*  4402 */                 }
/*  4403 */             }
/*  4404 */         };
/*  4405 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4406 */             var susp = new Sk.misceval.Suspension();
/*  4407 */             susp.child = $child;
/*  4408 */             susp.resume = function() {
/*  4409 */                 $scope351.$wakingSuspension = susp;
/*  4410 */                 return $scope351();
/*  4411 */             };
/*  4412 */             susp.data = susp.child.data;
/*  4413 */             susp.$blk = $blk;
/*  4414 */             susp.$loc = $loc;
/*  4415 */             susp.$gbl = $gbl;
/*  4416 */             susp.$exc = $exc;
/*  4417 */             susp.$err = $err;
/*  4418 */             susp.$postfinally = $postfinally;
/*  4419 */             susp.$filename = $filename;
/*  4420 */             susp.$lineno = $lineno;
/*  4421 */             susp.$colno = $colno;
/*  4422 */             susp.optional = susp.child.optional;
/*  4423 */             susp.$tmps = {
/*  4424 */                 "initx": initx,
/*  4425 */                 "inity": inity,
/*  4426 */                 "initz": initz,
/*  4427 */                 "self": self
/*  4428 */             };
/*  4429 */             return susp;
/*  4430 */         };
/*  4431 */         var $blk = 0,
/*  4432 */             $exc = [],
/*  4433 */             $loc = {},
/*  4434 */             $gbl = this,
/*  4435 */             $err = undefined,
/*  4436 */             $ret = undefined,
/*  4437 */             $postfinally = undefined,
/*  4438 */             $currLineNo = undefined,
/*  4439 */             $currColNo = undefined;
/*  4440 */         if ($scope351.$wakingSuspension !== undefined) {
/*  4441 */             $wakeFromSuspension();
/*  4442 */         } else {
/*  4443 */             Sk.builtin.pyCheckArgs("__init__", arguments, 4, 4, false, false);
/*  4444 */         }
/*  4445 */         while (true) {
/*  4446 */             try {
/*  4447 */                 switch ($blk) {
/*  4448 */                 case 0:
/*  4449 */                     /* --- codeobj entry --- */
/*  4450 */                     if (self === undefined) {
/*  4451 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4452 */                     }
/*  4453 */                     if (initx === undefined) {
/*  4454 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initx\' referenced before assignment');
/*  4455 */                     }
/*  4456 */                     if (inity === undefined) {
/*  4457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'inity\' referenced before assignment');
/*  4458 */                     }
/*  4459 */                     if (initz === undefined) {
/*  4460 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initz\' referenced before assignment');
/*  4461 */                     }
/*  4462 */ 
/*  4463 */                     //
/*  4464 */                     // line 85:
/*  4465 */                     //         self.x = initx
/*  4466 */                     //         ^
/*  4467 */                     //
/*  4468 */                     $currLineNo = 85;
/*  4469 */                     $currColNo = 8;
/*  4470 */ 
/*  4471 */                     if (initx === undefined) {
/*  4472 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initx\' referenced before assignment');
/*  4473 */                     }
/*  4474 */                     if (self === undefined) {
/*  4475 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4476 */                     }
/*  4477 */                     $ret = Sk.abstr.sattr(self, 'x', initx, true);
/*  4478 */                     $blk = 1; /* allowing case fallthrough */
/*  4479 */                 case 1:
/*  4480 */                     /* --- function return or resume suspension --- */
/*  4481 */                     if ($ret && $ret.$isSuspension) {
/*  4482 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 85, 8);
/*  4483 */                     }
/*  4484 */                     //
/*  4485 */                     // line 86:
/*  4486 */                     //         self.y = inity
/*  4487 */                     //         ^
/*  4488 */                     //
/*  4489 */                     $currLineNo = 86;
/*  4490 */                     $currColNo = 8;
/*  4491 */ 
/*  4492 */                     if (inity === undefined) {
/*  4493 */                         throw new Sk.builtin.UnboundLocalError('local variable \'inity\' referenced before assignment');
/*  4494 */                     }
/*  4495 */                     if (self === undefined) {
/*  4496 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4497 */                     }
/*  4498 */                     $ret = Sk.abstr.sattr(self, 'y', inity, true);
/*  4499 */                     $blk = 2; /* allowing case fallthrough */
/*  4500 */                 case 2:
/*  4501 */                     /* --- function return or resume suspension --- */
/*  4502 */                     if ($ret && $ret.$isSuspension) {
/*  4503 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 86, 8);
/*  4504 */                     }
/*  4505 */                     //
/*  4506 */                     // line 87:
/*  4507 */                     //         self.z = initz
/*  4508 */                     //         ^
/*  4509 */                     //
/*  4510 */                     $currLineNo = 87;
/*  4511 */                     $currColNo = 8;
/*  4512 */ 
/*  4513 */                     if (initz === undefined) {
/*  4514 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initz\' referenced before assignment');
/*  4515 */                     }
/*  4516 */                     if (self === undefined) {
/*  4517 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4518 */                     }
/*  4519 */                     $ret = Sk.abstr.sattr(self, 'z', initz, true);
/*  4520 */                     $blk = 3; /* allowing case fallthrough */
/*  4521 */                 case 3:
/*  4522 */                     /* --- function return or resume suspension --- */
/*  4523 */                     if ($ret && $ret.$isSuspension) {
/*  4524 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 87, 8);
/*  4525 */                     }
/*  4526 */                     return Sk.builtin.none.none$;
/*  4527 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4528 */                 }
/*  4529 */             } catch (err) {
/*  4530 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4531 */                     err = new Sk.builtin.ExternalError(err);
/*  4532 */                 }
/*  4533 */                 err.traceback.push({
/*  4534 */                     lineno: $currLineNo,
/*  4535 */                     colno: $currColNo,
/*  4536 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4537 */                 });
/*  4538 */                 if ($exc.length > 0) {
/*  4539 */                     $err = err;
/*  4540 */                     $blk = $exc.pop();
/*  4541 */                     continue;
/*  4542 */                 } else {
/*  4543 */                     throw err;
/*  4544 */                 }
/*  4545 */             }
/*  4546 */         }
/*  4547 */     });
/*  4548 */     var $scope354 = (function $__str__355$(self) {
/*  4549 */         var self, self, self, self, $str356, $str356, $lattr357, $elem358, $str356, $lattr357, $elem358, $lattr359, $elem360;
/*  4550 */         var $wakeFromSuspension = function() {
/*  4551 */             var susp = $scope354.$wakingSuspension;
/*  4552 */             delete $scope354.$wakingSuspension;
/*  4553 */             $blk = susp.$blk;
/*  4554 */             $loc = susp.$loc;
/*  4555 */             $gbl = susp.$gbl;
/*  4556 */             $exc = susp.$exc;
/*  4557 */             $err = susp.$err;
/*  4558 */             $postfinally = susp.$postfinally;
/*  4559 */             $currLineNo = susp.$lineno;
/*  4560 */             $currColNo = susp.$colno;
/*  4561 */             Sk.lastYield = Date.now();
/*  4562 */             self = susp.$tmps.self;
/*  4563 */             $str356 = susp.$tmps.$str356;
/*  4564 */             $lattr357 = susp.$tmps.$lattr357;
/*  4565 */             $elem358 = susp.$tmps.$elem358;
/*  4566 */             $lattr359 = susp.$tmps.$lattr359;
/*  4567 */             $elem360 = susp.$tmps.$elem360;
/*  4568 */             try {
/*  4569 */                 $ret = susp.child.resume();
/*  4570 */             } catch (err) {
/*  4571 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4572 */                     err = new Sk.builtin.ExternalError(err);
/*  4573 */                 }
/*  4574 */                 err.traceback.push({
/*  4575 */                     lineno: $currLineNo,
/*  4576 */                     colno: $currColNo,
/*  4577 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4578 */                 });
/*  4579 */                 if ($exc.length > 0) {
/*  4580 */                     $err = err;
/*  4581 */                     $blk = $exc.pop();
/*  4582 */                 } else {
/*  4583 */                     throw err;
/*  4584 */                 }
/*  4585 */             }
/*  4586 */         };
/*  4587 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4588 */             var susp = new Sk.misceval.Suspension();
/*  4589 */             susp.child = $child;
/*  4590 */             susp.resume = function() {
/*  4591 */                 $scope354.$wakingSuspension = susp;
/*  4592 */                 return $scope354();
/*  4593 */             };
/*  4594 */             susp.data = susp.child.data;
/*  4595 */             susp.$blk = $blk;
/*  4596 */             susp.$loc = $loc;
/*  4597 */             susp.$gbl = $gbl;
/*  4598 */             susp.$exc = $exc;
/*  4599 */             susp.$err = $err;
/*  4600 */             susp.$postfinally = $postfinally;
/*  4601 */             susp.$filename = $filename;
/*  4602 */             susp.$lineno = $lineno;
/*  4603 */             susp.$colno = $colno;
/*  4604 */             susp.optional = susp.child.optional;
/*  4605 */             susp.$tmps = {
/*  4606 */                 "self": self,
/*  4607 */                 "$str356": $str356,
/*  4608 */                 "$lattr357": $lattr357,
/*  4609 */                 "$elem358": $elem358,
/*  4610 */                 "$lattr359": $lattr359,
/*  4611 */                 "$elem360": $elem360
/*  4612 */             };
/*  4613 */             return susp;
/*  4614 */         };
/*  4615 */         var $blk = 0,
/*  4616 */             $exc = [],
/*  4617 */             $loc = {},
/*  4618 */             $gbl = this,
/*  4619 */             $err = undefined,
/*  4620 */             $ret = undefined,
/*  4621 */             $postfinally = undefined,
/*  4622 */             $currLineNo = undefined,
/*  4623 */             $currColNo = undefined;
/*  4624 */         if ($scope354.$wakingSuspension !== undefined) {
/*  4625 */             $wakeFromSuspension();
/*  4626 */         } else {
/*  4627 */             Sk.builtin.pyCheckArgs("__str__", arguments, 1, 1, false, false);
/*  4628 */         }
/*  4629 */         while (true) {
/*  4630 */             try {
/*  4631 */                 switch ($blk) {
/*  4632 */                 case 0:
/*  4633 */                     /* --- codeobj entry --- */
/*  4634 */                     if (self === undefined) {
/*  4635 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4636 */                     }
/*  4637 */ 
/*  4638 */                     //
/*  4639 */                     // line 90:
/*  4640 */                     //         return '(%s,%s,%s)' % (self.x, self.y, self.z)
/*  4641 */                     //         ^
/*  4642 */                     //
/*  4643 */                     $currLineNo = 90;
/*  4644 */                     $currColNo = 8;
/*  4645 */ 
/*  4646 */                     var $str356 = new Sk.builtins['str']('(%s,%s,%s)');
/*  4647 */                     if (self === undefined) {
/*  4648 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4649 */                     }
/*  4650 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  4651 */                     $blk = 1; /* allowing case fallthrough */
/*  4652 */                 case 1:
/*  4653 */                     /* --- function return or resume suspension --- */
/*  4654 */                     if ($ret && $ret.$isSuspension) {
/*  4655 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 90, 31);
/*  4656 */                     }
/*  4657 */                     var $lattr357 = $ret;
/*  4658 */                     var $elem358 = $lattr357;
/*  4659 */                     if (self === undefined) {
/*  4660 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4661 */                     }
/*  4662 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  4663 */                     $blk = 2; /* allowing case fallthrough */
/*  4664 */                 case 2:
/*  4665 */                     /* --- function return or resume suspension --- */
/*  4666 */                     if ($ret && $ret.$isSuspension) {
/*  4667 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 90, 39);
/*  4668 */                     }
/*  4669 */                     var $lattr359 = $ret;
/*  4670 */                     var $elem360 = $lattr359;
/*  4671 */                     if (self === undefined) {
/*  4672 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4673 */                     }
/*  4674 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  4675 */                     $blk = 3; /* allowing case fallthrough */
/*  4676 */                 case 3:
/*  4677 */                     /* --- function return or resume suspension --- */
/*  4678 */                     if ($ret && $ret.$isSuspension) {
/*  4679 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 90, 47);
/*  4680 */                     }
/*  4681 */                     var $lattr361 = $ret;
/*  4682 */                     var $elem362 = $lattr361;
/*  4683 */                     var $loadtuple363 = new Sk.builtins['tuple']([$elem358, $elem360, $elem362]);
/*  4684 */                     var $binop364 = Sk.abstr.numberBinOp($str356, $loadtuple363, 'Mod');
/*  4685 */                     return $binop364;
/*  4686 */                     return Sk.builtin.none.none$;
/*  4687 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4688 */                 }
/*  4689 */             } catch (err) {
/*  4690 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4691 */                     err = new Sk.builtin.ExternalError(err);
/*  4692 */                 }
/*  4693 */                 err.traceback.push({
/*  4694 */                     lineno: $currLineNo,
/*  4695 */                     colno: $currColNo,
/*  4696 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4697 */                 });
/*  4698 */                 if ($exc.length > 0) {
/*  4699 */                     $err = err;
/*  4700 */                     $blk = $exc.pop();
/*  4701 */                     continue;
/*  4702 */                 } else {
/*  4703 */                     throw err;
/*  4704 */                 }
/*  4705 */             }
/*  4706 */         }
/*  4707 */     });
/*  4708 */     var $scope366 = (function $__repr__367$(self) {
/*  4709 */         var self, self, self, self, $str368, $str368, $lattr369, $elem370, $str368, $lattr369, $elem370, $lattr371, $elem372;
/*  4710 */         var $wakeFromSuspension = function() {
/*  4711 */             var susp = $scope366.$wakingSuspension;
/*  4712 */             delete $scope366.$wakingSuspension;
/*  4713 */             $blk = susp.$blk;
/*  4714 */             $loc = susp.$loc;
/*  4715 */             $gbl = susp.$gbl;
/*  4716 */             $exc = susp.$exc;
/*  4717 */             $err = susp.$err;
/*  4718 */             $postfinally = susp.$postfinally;
/*  4719 */             $currLineNo = susp.$lineno;
/*  4720 */             $currColNo = susp.$colno;
/*  4721 */             Sk.lastYield = Date.now();
/*  4722 */             self = susp.$tmps.self;
/*  4723 */             $str368 = susp.$tmps.$str368;
/*  4724 */             $lattr369 = susp.$tmps.$lattr369;
/*  4725 */             $elem370 = susp.$tmps.$elem370;
/*  4726 */             $lattr371 = susp.$tmps.$lattr371;
/*  4727 */             $elem372 = susp.$tmps.$elem372;
/*  4728 */             try {
/*  4729 */                 $ret = susp.child.resume();
/*  4730 */             } catch (err) {
/*  4731 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4732 */                     err = new Sk.builtin.ExternalError(err);
/*  4733 */                 }
/*  4734 */                 err.traceback.push({
/*  4735 */                     lineno: $currLineNo,
/*  4736 */                     colno: $currColNo,
/*  4737 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4738 */                 });
/*  4739 */                 if ($exc.length > 0) {
/*  4740 */                     $err = err;
/*  4741 */                     $blk = $exc.pop();
/*  4742 */                 } else {
/*  4743 */                     throw err;
/*  4744 */                 }
/*  4745 */             }
/*  4746 */         };
/*  4747 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4748 */             var susp = new Sk.misceval.Suspension();
/*  4749 */             susp.child = $child;
/*  4750 */             susp.resume = function() {
/*  4751 */                 $scope366.$wakingSuspension = susp;
/*  4752 */                 return $scope366();
/*  4753 */             };
/*  4754 */             susp.data = susp.child.data;
/*  4755 */             susp.$blk = $blk;
/*  4756 */             susp.$loc = $loc;
/*  4757 */             susp.$gbl = $gbl;
/*  4758 */             susp.$exc = $exc;
/*  4759 */             susp.$err = $err;
/*  4760 */             susp.$postfinally = $postfinally;
/*  4761 */             susp.$filename = $filename;
/*  4762 */             susp.$lineno = $lineno;
/*  4763 */             susp.$colno = $colno;
/*  4764 */             susp.optional = susp.child.optional;
/*  4765 */             susp.$tmps = {
/*  4766 */                 "self": self,
/*  4767 */                 "$str368": $str368,
/*  4768 */                 "$lattr369": $lattr369,
/*  4769 */                 "$elem370": $elem370,
/*  4770 */                 "$lattr371": $lattr371,
/*  4771 */                 "$elem372": $elem372
/*  4772 */             };
/*  4773 */             return susp;
/*  4774 */         };
/*  4775 */         var $blk = 0,
/*  4776 */             $exc = [],
/*  4777 */             $loc = {},
/*  4778 */             $gbl = this,
/*  4779 */             $err = undefined,
/*  4780 */             $ret = undefined,
/*  4781 */             $postfinally = undefined,
/*  4782 */             $currLineNo = undefined,
/*  4783 */             $currColNo = undefined;
/*  4784 */         if ($scope366.$wakingSuspension !== undefined) {
/*  4785 */             $wakeFromSuspension();
/*  4786 */         } else {
/*  4787 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  4788 */         }
/*  4789 */         while (true) {
/*  4790 */             try {
/*  4791 */                 switch ($blk) {
/*  4792 */                 case 0:
/*  4793 */                     /* --- codeobj entry --- */
/*  4794 */                     if (self === undefined) {
/*  4795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4796 */                     }
/*  4797 */ 
/*  4798 */                     //
/*  4799 */                     // line 93:
/*  4800 */                     //         return 'Point(%s,%s,%s)' % (self.x, self.y, self.z)
/*  4801 */                     //         ^
/*  4802 */                     //
/*  4803 */                     $currLineNo = 93;
/*  4804 */                     $currColNo = 8;
/*  4805 */ 
/*  4806 */                     var $str368 = new Sk.builtins['str']('Point(%s,%s,%s)');
/*  4807 */                     if (self === undefined) {
/*  4808 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4809 */                     }
/*  4810 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  4811 */                     $blk = 1; /* allowing case fallthrough */
/*  4812 */                 case 1:
/*  4813 */                     /* --- function return or resume suspension --- */
/*  4814 */                     if ($ret && $ret.$isSuspension) {
/*  4815 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 93, 36);
/*  4816 */                     }
/*  4817 */                     var $lattr369 = $ret;
/*  4818 */                     var $elem370 = $lattr369;
/*  4819 */                     if (self === undefined) {
/*  4820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4821 */                     }
/*  4822 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  4823 */                     $blk = 2; /* allowing case fallthrough */
/*  4824 */                 case 2:
/*  4825 */                     /* --- function return or resume suspension --- */
/*  4826 */                     if ($ret && $ret.$isSuspension) {
/*  4827 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 93, 44);
/*  4828 */                     }
/*  4829 */                     var $lattr371 = $ret;
/*  4830 */                     var $elem372 = $lattr371;
/*  4831 */                     if (self === undefined) {
/*  4832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4833 */                     }
/*  4834 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  4835 */                     $blk = 3; /* allowing case fallthrough */
/*  4836 */                 case 3:
/*  4837 */                     /* --- function return or resume suspension --- */
/*  4838 */                     if ($ret && $ret.$isSuspension) {
/*  4839 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 93, 52);
/*  4840 */                     }
/*  4841 */                     var $lattr373 = $ret;
/*  4842 */                     var $elem374 = $lattr373;
/*  4843 */                     var $loadtuple375 = new Sk.builtins['tuple']([$elem370, $elem372, $elem374]);
/*  4844 */                     var $binop376 = Sk.abstr.numberBinOp($str368, $loadtuple375, 'Mod');
/*  4845 */                     return $binop376;
/*  4846 */                     return Sk.builtin.none.none$;
/*  4847 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4848 */                 }
/*  4849 */             } catch (err) {
/*  4850 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4851 */                     err = new Sk.builtin.ExternalError(err);
/*  4852 */                 }
/*  4853 */                 err.traceback.push({
/*  4854 */                     lineno: $currLineNo,
/*  4855 */                     colno: $currColNo,
/*  4856 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4857 */                 });
/*  4858 */                 if ($exc.length > 0) {
/*  4859 */                     $err = err;
/*  4860 */                     $blk = $exc.pop();
/*  4861 */                     continue;
/*  4862 */                 } else {
/*  4863 */                     throw err;
/*  4864 */                 }
/*  4865 */             }
/*  4866 */         }
/*  4867 */     });
/*  4868 */     var $scope378 = (function $__add__379$(self, other) {
/*  4869 */         var other, other, other, other, other, self, self, self, self, $lattr380, $loadgbl382, $loadgbl382, $lattr383, $loadgbl382, $lattr383, $lattr384, $binop385, $loadgbl382, $lattr383, $lattr384, $binop385, $lattr386, $loadgbl382, $lattr383, $lattr384, $binop385, $lattr386, $lattr387, $binop388, $loadgbl382, $lattr383, $lattr384, $binop385, $lattr386, $lattr387, $binop388, $lattr389, $loadgbl382, $lattr383, $lattr384, $binop385, $lattr386, $lattr387, $binop388, $lattr389, $lattr390, $binop391;
/*  4870 */         var $wakeFromSuspension = function() {
/*  4871 */             var susp = $scope378.$wakingSuspension;
/*  4872 */             delete $scope378.$wakingSuspension;
/*  4873 */             $blk = susp.$blk;
/*  4874 */             $loc = susp.$loc;
/*  4875 */             $gbl = susp.$gbl;
/*  4876 */             $exc = susp.$exc;
/*  4877 */             $err = susp.$err;
/*  4878 */             $postfinally = susp.$postfinally;
/*  4879 */             $currLineNo = susp.$lineno;
/*  4880 */             $currColNo = susp.$colno;
/*  4881 */             Sk.lastYield = Date.now();
/*  4882 */             other = susp.$tmps.other;
/*  4883 */             self = susp.$tmps.self;
/*  4884 */             $lattr380 = susp.$tmps.$lattr380;
/*  4885 */             $loadgbl382 = susp.$tmps.$loadgbl382;
/*  4886 */             $lattr383 = susp.$tmps.$lattr383;
/*  4887 */             $lattr384 = susp.$tmps.$lattr384;
/*  4888 */             $binop385 = susp.$tmps.$binop385;
/*  4889 */             $lattr386 = susp.$tmps.$lattr386;
/*  4890 */             $lattr387 = susp.$tmps.$lattr387;
/*  4891 */             $binop388 = susp.$tmps.$binop388;
/*  4892 */             $lattr389 = susp.$tmps.$lattr389;
/*  4893 */             $lattr390 = susp.$tmps.$lattr390;
/*  4894 */             $binop391 = susp.$tmps.$binop391;
/*  4895 */             try {
/*  4896 */                 $ret = susp.child.resume();
/*  4897 */             } catch (err) {
/*  4898 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4899 */                     err = new Sk.builtin.ExternalError(err);
/*  4900 */                 }
/*  4901 */                 err.traceback.push({
/*  4902 */                     lineno: $currLineNo,
/*  4903 */                     colno: $currColNo,
/*  4904 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  4905 */                 });
/*  4906 */                 if ($exc.length > 0) {
/*  4907 */                     $err = err;
/*  4908 */                     $blk = $exc.pop();
/*  4909 */                 } else {
/*  4910 */                     throw err;
/*  4911 */                 }
/*  4912 */             }
/*  4913 */         };
/*  4914 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4915 */             var susp = new Sk.misceval.Suspension();
/*  4916 */             susp.child = $child;
/*  4917 */             susp.resume = function() {
/*  4918 */                 $scope378.$wakingSuspension = susp;
/*  4919 */                 return $scope378();
/*  4920 */             };
/*  4921 */             susp.data = susp.child.data;
/*  4922 */             susp.$blk = $blk;
/*  4923 */             susp.$loc = $loc;
/*  4924 */             susp.$gbl = $gbl;
/*  4925 */             susp.$exc = $exc;
/*  4926 */             susp.$err = $err;
/*  4927 */             susp.$postfinally = $postfinally;
/*  4928 */             susp.$filename = $filename;
/*  4929 */             susp.$lineno = $lineno;
/*  4930 */             susp.$colno = $colno;
/*  4931 */             susp.optional = susp.child.optional;
/*  4932 */             susp.$tmps = {
/*  4933 */                 "other": other,
/*  4934 */                 "self": self,
/*  4935 */                 "$lattr380": $lattr380,
/*  4936 */                 "$loadgbl382": $loadgbl382,
/*  4937 */                 "$lattr383": $lattr383,
/*  4938 */                 "$lattr384": $lattr384,
/*  4939 */                 "$binop385": $binop385,
/*  4940 */                 "$lattr386": $lattr386,
/*  4941 */                 "$lattr387": $lattr387,
/*  4942 */                 "$binop388": $binop388,
/*  4943 */                 "$lattr389": $lattr389,
/*  4944 */                 "$lattr390": $lattr390,
/*  4945 */                 "$binop391": $binop391
/*  4946 */             };
/*  4947 */             return susp;
/*  4948 */         };
/*  4949 */         var $blk = 0,
/*  4950 */             $exc = [],
/*  4951 */             $loc = {},
/*  4952 */             $gbl = this,
/*  4953 */             $err = undefined,
/*  4954 */             $ret = undefined,
/*  4955 */             $postfinally = undefined,
/*  4956 */             $currLineNo = undefined,
/*  4957 */             $currColNo = undefined;
/*  4958 */         if ($scope378.$wakingSuspension !== undefined) {
/*  4959 */             $wakeFromSuspension();
/*  4960 */         } else {
/*  4961 */             Sk.builtin.pyCheckArgs("__add__", arguments, 2, 2, false, false);
/*  4962 */         }
/*  4963 */         while (true) {
/*  4964 */             try {
/*  4965 */                 switch ($blk) {
/*  4966 */                 case 0:
/*  4967 */                     /* --- codeobj entry --- */
/*  4968 */                     if (self === undefined) {
/*  4969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4970 */                     }
/*  4971 */                     if (other === undefined) {
/*  4972 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  4973 */                     }
/*  4974 */ 
/*  4975 */                     //
/*  4976 */                     // line 96:
/*  4977 */                     //         other.mustBeVector()
/*  4978 */                     //         ^
/*  4979 */                     //
/*  4980 */                     $currLineNo = 96;
/*  4981 */                     $currColNo = 8;
/*  4982 */ 
/*  4983 */                     if (other === undefined) {
/*  4984 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  4985 */                     }
/*  4986 */                     $ret = Sk.abstr.gattr(other, 'mustBeVector', true);
/*  4987 */                     $blk = 1; /* allowing case fallthrough */
/*  4988 */                 case 1:
/*  4989 */                     /* --- function return or resume suspension --- */
/*  4990 */                     if ($ret && $ret.$isSuspension) {
/*  4991 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 96, 8);
/*  4992 */                     }
/*  4993 */                     var $lattr380 = $ret;
/*  4994 */                     $ret;
/*  4995 */                     $ret = Sk.misceval.callsimOrSuspend($lattr380);
/*  4996 */                     $blk = 2; /* allowing case fallthrough */
/*  4997 */                 case 2:
/*  4998 */                     /* --- function return or resume suspension --- */
/*  4999 */                     if ($ret && $ret.$isSuspension) {
/*  5000 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 96, 8);
/*  5001 */                     }
/*  5002 */                     var $call381 = $ret;
/*  5003 */                     //
/*  5004 */                     // line 96:
/*  5005 */                     //         other.mustBeVector()
/*  5006 */                     //         ^
/*  5007 */                     //
/*  5008 */                     $currLineNo = 96;
/*  5009 */                     $currColNo = 8;
/*  5010 */ 
/*  5011 */ 
/*  5012 */                     //
/*  5013 */                     // line 97:
/*  5014 */                     //         return Point(self.x + other.x, self.y + other.y, self.z + other.z)
/*  5015 */                     //         ^
/*  5016 */                     //
/*  5017 */                     $currLineNo = 97;
/*  5018 */                     $currColNo = 8;
/*  5019 */ 
/*  5020 */                     var $loadgbl382 = Sk.misceval.loadname('Point', $gbl);
/*  5021 */                     if (self === undefined) {
/*  5022 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5023 */                     }
/*  5024 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  5025 */                     $blk = 3; /* allowing case fallthrough */
/*  5026 */                 case 3:
/*  5027 */                     /* --- function return or resume suspension --- */
/*  5028 */                     if ($ret && $ret.$isSuspension) {
/*  5029 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 21);
/*  5030 */                     }
/*  5031 */                     var $lattr383 = $ret;
/*  5032 */                     if (other === undefined) {
/*  5033 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5034 */                     }
/*  5035 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  5036 */                     $blk = 4; /* allowing case fallthrough */
/*  5037 */                 case 4:
/*  5038 */                     /* --- function return or resume suspension --- */
/*  5039 */                     if ($ret && $ret.$isSuspension) {
/*  5040 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 30);
/*  5041 */                     }
/*  5042 */                     var $lattr384 = $ret;
/*  5043 */                     var $binop385 = Sk.abstr.numberBinOp($lattr383, $lattr384, 'Add');
/*  5044 */                     if (self === undefined) {
/*  5045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5046 */                     }
/*  5047 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  5048 */                     $blk = 5; /* allowing case fallthrough */
/*  5049 */                 case 5:
/*  5050 */                     /* --- function return or resume suspension --- */
/*  5051 */                     if ($ret && $ret.$isSuspension) {
/*  5052 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 39);
/*  5053 */                     }
/*  5054 */                     var $lattr386 = $ret;
/*  5055 */                     if (other === undefined) {
/*  5056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5057 */                     }
/*  5058 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  5059 */                     $blk = 6; /* allowing case fallthrough */
/*  5060 */                 case 6:
/*  5061 */                     /* --- function return or resume suspension --- */
/*  5062 */                     if ($ret && $ret.$isSuspension) {
/*  5063 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 48);
/*  5064 */                     }
/*  5065 */                     var $lattr387 = $ret;
/*  5066 */                     var $binop388 = Sk.abstr.numberBinOp($lattr386, $lattr387, 'Add');
/*  5067 */                     if (self === undefined) {
/*  5068 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5069 */                     }
/*  5070 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  5071 */                     $blk = 7; /* allowing case fallthrough */
/*  5072 */                 case 7:
/*  5073 */                     /* --- function return or resume suspension --- */
/*  5074 */                     if ($ret && $ret.$isSuspension) {
/*  5075 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 57);
/*  5076 */                     }
/*  5077 */                     var $lattr389 = $ret;
/*  5078 */                     if (other === undefined) {
/*  5079 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5080 */                     }
/*  5081 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  5082 */                     $blk = 8; /* allowing case fallthrough */
/*  5083 */                 case 8:
/*  5084 */                     /* --- function return or resume suspension --- */
/*  5085 */                     if ($ret && $ret.$isSuspension) {
/*  5086 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 66);
/*  5087 */                     }
/*  5088 */                     var $lattr390 = $ret;
/*  5089 */                     var $binop391 = Sk.abstr.numberBinOp($lattr389, $lattr390, 'Add');
/*  5090 */                     $ret;
/*  5091 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl382, $binop385, $binop388, $binop391);
/*  5092 */                     $blk = 9; /* allowing case fallthrough */
/*  5093 */                 case 9:
/*  5094 */                     /* --- function return or resume suspension --- */
/*  5095 */                     if ($ret && $ret.$isSuspension) {
/*  5096 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 97, 15);
/*  5097 */                     }
/*  5098 */                     var $call392 = $ret;
/*  5099 */                     //
/*  5100 */                     // line 97:
/*  5101 */                     //         return Point(self.x + other.x, self.y + other.y, self.z + other.z)
/*  5102 */                     //                ^
/*  5103 */                     //
/*  5104 */                     $currLineNo = 97;
/*  5105 */                     $currColNo = 15;
/*  5106 */ 
/*  5107 */                     return $call392;
/*  5108 */                     return Sk.builtin.none.none$;
/*  5109 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5110 */                 }
/*  5111 */             } catch (err) {
/*  5112 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5113 */                     err = new Sk.builtin.ExternalError(err);
/*  5114 */                 }
/*  5115 */                 err.traceback.push({
/*  5116 */                     lineno: $currLineNo,
/*  5117 */                     colno: $currColNo,
/*  5118 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5119 */                 });
/*  5120 */                 if ($exc.length > 0) {
/*  5121 */                     $err = err;
/*  5122 */                     $blk = $exc.pop();
/*  5123 */                     continue;
/*  5124 */                 } else {
/*  5125 */                     throw err;
/*  5126 */                 }
/*  5127 */             }
/*  5128 */         }
/*  5129 */     });
/*  5130 */     var $scope394 = (function $__sub__395$(self, other) {
/*  5131 */         var other, other, other, other, other, other, other, other, self, self, self, self, self, self, self, $lattr396, $loadgbl399, $loadgbl399, $lattr400, $loadgbl399, $lattr400, $lattr401, $binop402, $loadgbl399, $lattr400, $lattr401, $binop402, $lattr403, $loadgbl399, $lattr400, $lattr401, $binop402, $lattr403, $lattr404, $binop405, $loadgbl399, $lattr400, $lattr401, $binop402, $lattr403, $lattr404, $binop405, $lattr406, $loadgbl399, $lattr400, $lattr401, $binop402, $lattr403, $lattr404, $binop405, $lattr406, $lattr407, $binop408, $loadgbl410, $loadgbl410, $lattr411, $loadgbl410, $lattr411, $lattr412, $binop413, $loadgbl410, $lattr411, $lattr412, $binop413, $lattr414, $loadgbl410, $lattr411, $lattr412, $binop413, $lattr414, $lattr415, $binop416, $loadgbl410, $lattr411, $lattr412, $binop413, $lattr414, $lattr415, $binop416, $lattr417, $loadgbl410, $lattr411, $lattr412, $binop413, $lattr414, $lattr415, $binop416, $lattr417, $lattr418, $binop419;
/*  5132 */         var $wakeFromSuspension = function() {
/*  5133 */             var susp = $scope394.$wakingSuspension;
/*  5134 */             delete $scope394.$wakingSuspension;
/*  5135 */             $blk = susp.$blk;
/*  5136 */             $loc = susp.$loc;
/*  5137 */             $gbl = susp.$gbl;
/*  5138 */             $exc = susp.$exc;
/*  5139 */             $err = susp.$err;
/*  5140 */             $postfinally = susp.$postfinally;
/*  5141 */             $currLineNo = susp.$lineno;
/*  5142 */             $currColNo = susp.$colno;
/*  5143 */             Sk.lastYield = Date.now();
/*  5144 */             other = susp.$tmps.other;
/*  5145 */             self = susp.$tmps.self;
/*  5146 */             $lattr396 = susp.$tmps.$lattr396;
/*  5147 */             $loadgbl399 = susp.$tmps.$loadgbl399;
/*  5148 */             $lattr400 = susp.$tmps.$lattr400;
/*  5149 */             $lattr401 = susp.$tmps.$lattr401;
/*  5150 */             $binop402 = susp.$tmps.$binop402;
/*  5151 */             $lattr403 = susp.$tmps.$lattr403;
/*  5152 */             $lattr404 = susp.$tmps.$lattr404;
/*  5153 */             $binop405 = susp.$tmps.$binop405;
/*  5154 */             $lattr406 = susp.$tmps.$lattr406;
/*  5155 */             $lattr407 = susp.$tmps.$lattr407;
/*  5156 */             $binop408 = susp.$tmps.$binop408;
/*  5157 */             $loadgbl410 = susp.$tmps.$loadgbl410;
/*  5158 */             $lattr411 = susp.$tmps.$lattr411;
/*  5159 */             $lattr412 = susp.$tmps.$lattr412;
/*  5160 */             $binop413 = susp.$tmps.$binop413;
/*  5161 */             $lattr414 = susp.$tmps.$lattr414;
/*  5162 */             $lattr415 = susp.$tmps.$lattr415;
/*  5163 */             $binop416 = susp.$tmps.$binop416;
/*  5164 */             $lattr417 = susp.$tmps.$lattr417;
/*  5165 */             $lattr418 = susp.$tmps.$lattr418;
/*  5166 */             $binop419 = susp.$tmps.$binop419;
/*  5167 */             try {
/*  5168 */                 $ret = susp.child.resume();
/*  5169 */             } catch (err) {
/*  5170 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5171 */                     err = new Sk.builtin.ExternalError(err);
/*  5172 */                 }
/*  5173 */                 err.traceback.push({
/*  5174 */                     lineno: $currLineNo,
/*  5175 */                     colno: $currColNo,
/*  5176 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5177 */                 });
/*  5178 */                 if ($exc.length > 0) {
/*  5179 */                     $err = err;
/*  5180 */                     $blk = $exc.pop();
/*  5181 */                 } else {
/*  5182 */                     throw err;
/*  5183 */                 }
/*  5184 */             }
/*  5185 */         };
/*  5186 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5187 */             var susp = new Sk.misceval.Suspension();
/*  5188 */             susp.child = $child;
/*  5189 */             susp.resume = function() {
/*  5190 */                 $scope394.$wakingSuspension = susp;
/*  5191 */                 return $scope394();
/*  5192 */             };
/*  5193 */             susp.data = susp.child.data;
/*  5194 */             susp.$blk = $blk;
/*  5195 */             susp.$loc = $loc;
/*  5196 */             susp.$gbl = $gbl;
/*  5197 */             susp.$exc = $exc;
/*  5198 */             susp.$err = $err;
/*  5199 */             susp.$postfinally = $postfinally;
/*  5200 */             susp.$filename = $filename;
/*  5201 */             susp.$lineno = $lineno;
/*  5202 */             susp.$colno = $colno;
/*  5203 */             susp.optional = susp.child.optional;
/*  5204 */             susp.$tmps = {
/*  5205 */                 "other": other,
/*  5206 */                 "self": self,
/*  5207 */                 "$lattr396": $lattr396,
/*  5208 */                 "$loadgbl399": $loadgbl399,
/*  5209 */                 "$lattr400": $lattr400,
/*  5210 */                 "$lattr401": $lattr401,
/*  5211 */                 "$binop402": $binop402,
/*  5212 */                 "$lattr403": $lattr403,
/*  5213 */                 "$lattr404": $lattr404,
/*  5214 */                 "$binop405": $binop405,
/*  5215 */                 "$lattr406": $lattr406,
/*  5216 */                 "$lattr407": $lattr407,
/*  5217 */                 "$binop408": $binop408,
/*  5218 */                 "$loadgbl410": $loadgbl410,
/*  5219 */                 "$lattr411": $lattr411,
/*  5220 */                 "$lattr412": $lattr412,
/*  5221 */                 "$binop413": $binop413,
/*  5222 */                 "$lattr414": $lattr414,
/*  5223 */                 "$lattr415": $lattr415,
/*  5224 */                 "$binop416": $binop416,
/*  5225 */                 "$lattr417": $lattr417,
/*  5226 */                 "$lattr418": $lattr418,
/*  5227 */                 "$binop419": $binop419
/*  5228 */             };
/*  5229 */             return susp;
/*  5230 */         };
/*  5231 */         var $blk = 0,
/*  5232 */             $exc = [],
/*  5233 */             $loc = {},
/*  5234 */             $gbl = this,
/*  5235 */             $err = undefined,
/*  5236 */             $ret = undefined,
/*  5237 */             $postfinally = undefined,
/*  5238 */             $currLineNo = undefined,
/*  5239 */             $currColNo = undefined;
/*  5240 */         if ($scope394.$wakingSuspension !== undefined) {
/*  5241 */             $wakeFromSuspension();
/*  5242 */         } else {
/*  5243 */             Sk.builtin.pyCheckArgs("__sub__", arguments, 2, 2, false, false);
/*  5244 */         }
/*  5245 */         while (true) {
/*  5246 */             try {
/*  5247 */                 switch ($blk) {
/*  5248 */                 case 0:
/*  5249 */                     /* --- codeobj entry --- */
/*  5250 */                     if (self === undefined) {
/*  5251 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5252 */                     }
/*  5253 */                     if (other === undefined) {
/*  5254 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5255 */                     }
/*  5256 */ 
/*  5257 */                     //
/*  5258 */                     // line 100:
/*  5259 */                     //         if other.isPoint():
/*  5260 */                     //         ^
/*  5261 */                     //
/*  5262 */                     $currLineNo = 100;
/*  5263 */                     $currColNo = 8;
/*  5264 */ 
/*  5265 */                     if (other === undefined) {
/*  5266 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5267 */                     }
/*  5268 */                     $ret = Sk.abstr.gattr(other, 'isPoint', true);
/*  5269 */                     $blk = 3; /* allowing case fallthrough */
/*  5270 */                 case 3:
/*  5271 */                     /* --- function return or resume suspension --- */
/*  5272 */                     if ($ret && $ret.$isSuspension) {
/*  5273 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 100, 11);
/*  5274 */                     }
/*  5275 */                     var $lattr396 = $ret;
/*  5276 */                     $ret;
/*  5277 */                     $ret = Sk.misceval.callsimOrSuspend($lattr396);
/*  5278 */                     $blk = 4; /* allowing case fallthrough */
/*  5279 */                 case 4:
/*  5280 */                     /* --- function return or resume suspension --- */
/*  5281 */                     if ($ret && $ret.$isSuspension) {
/*  5282 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 100, 11);
/*  5283 */                     }
/*  5284 */                     var $call397 = $ret;
/*  5285 */                     //
/*  5286 */                     // line 100:
/*  5287 */                     //         if other.isPoint():
/*  5288 */                     //            ^
/*  5289 */                     //
/*  5290 */                     $currLineNo = 100;
/*  5291 */                     $currColNo = 11;
/*  5292 */ 
/*  5293 */                     var $jfalse398 = ($call397 === false || !Sk.misceval.isTrue($call397));
/*  5294 */                     if ($jfalse398) { /*test failed */
/*  5295 */                         $blk = 2;
/*  5296 */                         continue;
/*  5297 */                     }
/*  5298 */                     //
/*  5299 */                     // line 101:
/*  5300 */                     //             return Vector(self.x - other.x, self.y - other.y, self.z - other.z)
/*  5301 */                     //             ^
/*  5302 */                     //
/*  5303 */                     $currLineNo = 101;
/*  5304 */                     $currColNo = 12;
/*  5305 */ 
/*  5306 */                     var $loadgbl399 = Sk.misceval.loadname('Vector', $gbl);
/*  5307 */                     if (self === undefined) {
/*  5308 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5309 */                     }
/*  5310 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  5311 */                     $blk = 5; /* allowing case fallthrough */
/*  5312 */                 case 5:
/*  5313 */                     /* --- function return or resume suspension --- */
/*  5314 */                     if ($ret && $ret.$isSuspension) {
/*  5315 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 26);
/*  5316 */                     }
/*  5317 */                     var $lattr400 = $ret;
/*  5318 */                     if (other === undefined) {
/*  5319 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5320 */                     }
/*  5321 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  5322 */                     $blk = 6; /* allowing case fallthrough */
/*  5323 */                 case 6:
/*  5324 */                     /* --- function return or resume suspension --- */
/*  5325 */                     if ($ret && $ret.$isSuspension) {
/*  5326 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 35);
/*  5327 */                     }
/*  5328 */                     var $lattr401 = $ret;
/*  5329 */                     var $binop402 = Sk.abstr.numberBinOp($lattr400, $lattr401, 'Sub');
/*  5330 */                     if (self === undefined) {
/*  5331 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5332 */                     }
/*  5333 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  5334 */                     $blk = 7; /* allowing case fallthrough */
/*  5335 */                 case 7:
/*  5336 */                     /* --- function return or resume suspension --- */
/*  5337 */                     if ($ret && $ret.$isSuspension) {
/*  5338 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 44);
/*  5339 */                     }
/*  5340 */                     var $lattr403 = $ret;
/*  5341 */                     if (other === undefined) {
/*  5342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5343 */                     }
/*  5344 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  5345 */                     $blk = 8; /* allowing case fallthrough */
/*  5346 */                 case 8:
/*  5347 */                     /* --- function return or resume suspension --- */
/*  5348 */                     if ($ret && $ret.$isSuspension) {
/*  5349 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 53);
/*  5350 */                     }
/*  5351 */                     var $lattr404 = $ret;
/*  5352 */                     var $binop405 = Sk.abstr.numberBinOp($lattr403, $lattr404, 'Sub');
/*  5353 */                     if (self === undefined) {
/*  5354 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5355 */                     }
/*  5356 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  5357 */                     $blk = 9; /* allowing case fallthrough */
/*  5358 */                 case 9:
/*  5359 */                     /* --- function return or resume suspension --- */
/*  5360 */                     if ($ret && $ret.$isSuspension) {
/*  5361 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 62);
/*  5362 */                     }
/*  5363 */                     var $lattr406 = $ret;
/*  5364 */                     if (other === undefined) {
/*  5365 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5366 */                     }
/*  5367 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  5368 */                     $blk = 10; /* allowing case fallthrough */
/*  5369 */                 case 10:
/*  5370 */                     /* --- function return or resume suspension --- */
/*  5371 */                     if ($ret && $ret.$isSuspension) {
/*  5372 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 71);
/*  5373 */                     }
/*  5374 */                     var $lattr407 = $ret;
/*  5375 */                     var $binop408 = Sk.abstr.numberBinOp($lattr406, $lattr407, 'Sub');
/*  5376 */                     $ret;
/*  5377 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl399, $binop402, $binop405, $binop408);
/*  5378 */                     $blk = 11; /* allowing case fallthrough */
/*  5379 */                 case 11:
/*  5380 */                     /* --- function return or resume suspension --- */
/*  5381 */                     if ($ret && $ret.$isSuspension) {
/*  5382 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 101, 19);
/*  5383 */                     }
/*  5384 */                     var $call409 = $ret;
/*  5385 */                     //
/*  5386 */                     // line 101:
/*  5387 */                     //             return Vector(self.x - other.x, self.y - other.y, self.z - other.z)
/*  5388 */                     //                    ^
/*  5389 */                     //
/*  5390 */                     $currLineNo = 101;
/*  5391 */                     $currColNo = 19;
/*  5392 */ 
/*  5393 */                     return $call409;
/*  5394 */                     $blk = 1; /* allowing case fallthrough */
/*  5395 */                 case 1:
/*  5396 */                     /* --- end of if --- */
/*  5397 */                     return Sk.builtin.none.none$;
/*  5398 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5399 */                 case 2:
/*  5400 */                     /* --- next branch of if --- */
/*  5401 */                     //
/*  5402 */                     // line 103:
/*  5403 */                     //             return Point(self.x - other.x, self.y - other.y, self.z - other.z)
/*  5404 */                     //             ^
/*  5405 */                     //
/*  5406 */                     $currLineNo = 103;
/*  5407 */                     $currColNo = 12;
/*  5408 */ 
/*  5409 */                     var $loadgbl410 = Sk.misceval.loadname('Point', $gbl);
/*  5410 */                     if (self === undefined) {
/*  5411 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5412 */                     }
/*  5413 */                     $ret = Sk.abstr.gattr(self, 'x', true);
/*  5414 */                     $blk = 12; /* allowing case fallthrough */
/*  5415 */                 case 12:
/*  5416 */                     /* --- function return or resume suspension --- */
/*  5417 */                     if ($ret && $ret.$isSuspension) {
/*  5418 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 25);
/*  5419 */                     }
/*  5420 */                     var $lattr411 = $ret;
/*  5421 */                     if (other === undefined) {
/*  5422 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5423 */                     }
/*  5424 */                     $ret = Sk.abstr.gattr(other, 'x', true);
/*  5425 */                     $blk = 13; /* allowing case fallthrough */
/*  5426 */                 case 13:
/*  5427 */                     /* --- function return or resume suspension --- */
/*  5428 */                     if ($ret && $ret.$isSuspension) {
/*  5429 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 34);
/*  5430 */                     }
/*  5431 */                     var $lattr412 = $ret;
/*  5432 */                     var $binop413 = Sk.abstr.numberBinOp($lattr411, $lattr412, 'Sub');
/*  5433 */                     if (self === undefined) {
/*  5434 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5435 */                     }
/*  5436 */                     $ret = Sk.abstr.gattr(self, 'y', true);
/*  5437 */                     $blk = 14; /* allowing case fallthrough */
/*  5438 */                 case 14:
/*  5439 */                     /* --- function return or resume suspension --- */
/*  5440 */                     if ($ret && $ret.$isSuspension) {
/*  5441 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 43);
/*  5442 */                     }
/*  5443 */                     var $lattr414 = $ret;
/*  5444 */                     if (other === undefined) {
/*  5445 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5446 */                     }
/*  5447 */                     $ret = Sk.abstr.gattr(other, 'y', true);
/*  5448 */                     $blk = 15; /* allowing case fallthrough */
/*  5449 */                 case 15:
/*  5450 */                     /* --- function return or resume suspension --- */
/*  5451 */                     if ($ret && $ret.$isSuspension) {
/*  5452 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 52);
/*  5453 */                     }
/*  5454 */                     var $lattr415 = $ret;
/*  5455 */                     var $binop416 = Sk.abstr.numberBinOp($lattr414, $lattr415, 'Sub');
/*  5456 */                     if (self === undefined) {
/*  5457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5458 */                     }
/*  5459 */                     $ret = Sk.abstr.gattr(self, 'z', true);
/*  5460 */                     $blk = 16; /* allowing case fallthrough */
/*  5461 */                 case 16:
/*  5462 */                     /* --- function return or resume suspension --- */
/*  5463 */                     if ($ret && $ret.$isSuspension) {
/*  5464 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 61);
/*  5465 */                     }
/*  5466 */                     var $lattr417 = $ret;
/*  5467 */                     if (other === undefined) {
/*  5468 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  5469 */                     }
/*  5470 */                     $ret = Sk.abstr.gattr(other, 'z', true);
/*  5471 */                     $blk = 17; /* allowing case fallthrough */
/*  5472 */                 case 17:
/*  5473 */                     /* --- function return or resume suspension --- */
/*  5474 */                     if ($ret && $ret.$isSuspension) {
/*  5475 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 70);
/*  5476 */                     }
/*  5477 */                     var $lattr418 = $ret;
/*  5478 */                     var $binop419 = Sk.abstr.numberBinOp($lattr417, $lattr418, 'Sub');
/*  5479 */                     $ret;
/*  5480 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl410, $binop413, $binop416, $binop419);
/*  5481 */                     $blk = 18; /* allowing case fallthrough */
/*  5482 */                 case 18:
/*  5483 */                     /* --- function return or resume suspension --- */
/*  5484 */                     if ($ret && $ret.$isSuspension) {
/*  5485 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 103, 19);
/*  5486 */                     }
/*  5487 */                     var $call420 = $ret;
/*  5488 */                     //
/*  5489 */                     // line 103:
/*  5490 */                     //             return Point(self.x - other.x, self.y - other.y, self.z - other.z)
/*  5491 */                     //                    ^
/*  5492 */                     //
/*  5493 */                     $currLineNo = 103;
/*  5494 */                     $currColNo = 19;
/*  5495 */ 
/*  5496 */                     return $call420;
/*  5497 */                     $blk = 1; /* jump */
/*  5498 */                     continue;
/*  5499 */                 }
/*  5500 */             } catch (err) {
/*  5501 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5502 */                     err = new Sk.builtin.ExternalError(err);
/*  5503 */                 }
/*  5504 */                 err.traceback.push({
/*  5505 */                     lineno: $currLineNo,
/*  5506 */                     colno: $currColNo,
/*  5507 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5508 */                 });
/*  5509 */                 if ($exc.length > 0) {
/*  5510 */                     $err = err;
/*  5511 */                     $blk = $exc.pop();
/*  5512 */                     continue;
/*  5513 */                 } else {
/*  5514 */                     throw err;
/*  5515 */                 }
/*  5516 */             }
/*  5517 */         }
/*  5518 */     });
/*  5519 */     var $scope422 = (function $isVector423$(self) {
/*  5520 */         var $blk = 0,
/*  5521 */             $exc = [],
/*  5522 */             $loc = {},
/*  5523 */             $gbl = this,
/*  5524 */             $err = undefined,
/*  5525 */             $ret = undefined,
/*  5526 */             $postfinally = undefined,
/*  5527 */             $currLineNo = undefined,
/*  5528 */             $currColNo = undefined;
/*  5529 */         if ($scope422.$wakingSuspension !== undefined) {
/*  5530 */             $wakeFromSuspension();
/*  5531 */         } else {
/*  5532 */             Sk.builtin.pyCheckArgs("isVector", arguments, 1, 1, false, false);
/*  5533 */         }
/*  5534 */         while (true) {
/*  5535 */             try {
/*  5536 */                 switch ($blk) {
/*  5537 */                 case 0:
/*  5538 */                     /* --- codeobj entry --- */
/*  5539 */                     if (self === undefined) {
/*  5540 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5541 */                     }
/*  5542 */ 
/*  5543 */                     //
/*  5544 */                     // line 106:
/*  5545 */                     //         return False
/*  5546 */                     //         ^
/*  5547 */                     //
/*  5548 */                     $currLineNo = 106;
/*  5549 */                     $currColNo = 8;
/*  5550 */ 
/*  5551 */                     return Sk.builtin.bool.false$;
/*  5552 */                     return Sk.builtin.none.none$;
/*  5553 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5554 */                 }
/*  5555 */             } catch (err) {
/*  5556 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5557 */                     err = new Sk.builtin.ExternalError(err);
/*  5558 */                 }
/*  5559 */                 err.traceback.push({
/*  5560 */                     lineno: $currLineNo,
/*  5561 */                     colno: $currColNo,
/*  5562 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5563 */                 });
/*  5564 */                 if ($exc.length > 0) {
/*  5565 */                     $err = err;
/*  5566 */                     $blk = $exc.pop();
/*  5567 */                     continue;
/*  5568 */                 } else {
/*  5569 */                     throw err;
/*  5570 */                 }
/*  5571 */             }
/*  5572 */         }
/*  5573 */     });
/*  5574 */     var $scope425 = (function $isPoint426$(self) {
/*  5575 */         var $blk = 0,
/*  5576 */             $exc = [],
/*  5577 */             $loc = {},
/*  5578 */             $gbl = this,
/*  5579 */             $err = undefined,
/*  5580 */             $ret = undefined,
/*  5581 */             $postfinally = undefined,
/*  5582 */             $currLineNo = undefined,
/*  5583 */             $currColNo = undefined;
/*  5584 */         if ($scope425.$wakingSuspension !== undefined) {
/*  5585 */             $wakeFromSuspension();
/*  5586 */         } else {
/*  5587 */             Sk.builtin.pyCheckArgs("isPoint", arguments, 1, 1, false, false);
/*  5588 */         }
/*  5589 */         while (true) {
/*  5590 */             try {
/*  5591 */                 switch ($blk) {
/*  5592 */                 case 0:
/*  5593 */                     /* --- codeobj entry --- */
/*  5594 */                     if (self === undefined) {
/*  5595 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5596 */                     }
/*  5597 */ 
/*  5598 */                     //
/*  5599 */                     // line 109:
/*  5600 */                     //         return True
/*  5601 */                     //         ^
/*  5602 */                     //
/*  5603 */                     $currLineNo = 109;
/*  5604 */                     $currColNo = 8;
/*  5605 */ 
/*  5606 */                     return Sk.builtin.bool.true$;
/*  5607 */                     return Sk.builtin.none.none$;
/*  5608 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5609 */                 }
/*  5610 */             } catch (err) {
/*  5611 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5612 */                     err = new Sk.builtin.ExternalError(err);
/*  5613 */                 }
/*  5614 */                 err.traceback.push({
/*  5615 */                     lineno: $currLineNo,
/*  5616 */                     colno: $currColNo,
/*  5617 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5618 */                 });
/*  5619 */                 if ($exc.length > 0) {
/*  5620 */                     $err = err;
/*  5621 */                     $blk = $exc.pop();
/*  5622 */                     continue;
/*  5623 */                 } else {
/*  5624 */                     throw err;
/*  5625 */                 }
/*  5626 */             }
/*  5627 */         }
/*  5628 */     });
/*  5629 */     var $scope428 = (function $mustBeVector429$(self) {
/*  5630 */         var $blk = 0,
/*  5631 */             $exc = [],
/*  5632 */             $loc = {},
/*  5633 */             $gbl = this,
/*  5634 */             $err = undefined,
/*  5635 */             $ret = undefined,
/*  5636 */             $postfinally = undefined,
/*  5637 */             $currLineNo = undefined,
/*  5638 */             $currColNo = undefined;
/*  5639 */         if ($scope428.$wakingSuspension !== undefined) {
/*  5640 */             $wakeFromSuspension();
/*  5641 */         } else {
/*  5642 */             Sk.builtin.pyCheckArgs("mustBeVector", arguments, 1, 1, false, false);
/*  5643 */         }
/*  5644 */         while (true) {
/*  5645 */             try {
/*  5646 */                 switch ($blk) {
/*  5647 */                 case 0:
/*  5648 */                     /* --- codeobj entry --- */
/*  5649 */                     if (self === undefined) {
/*  5650 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5651 */                     }
/*  5652 */ 
/*  5653 */                     //
/*  5654 */                     // line 112:
/*  5655 */                     //         raise 'Points are not vectors!'
/*  5656 */                     //         ^
/*  5657 */                     //
/*  5658 */                     $currLineNo = 112;
/*  5659 */                     $currColNo = 8;
/*  5660 */ 
/*  5661 */                     var $str430 = new Sk.builtins['str']('Points are not vectors!');
/*  5662 */                     var $err431 = $str430;
/*  5663 */                     if ($err431 instanceof Sk.builtin.type) {
/*  5664 */                         throw Sk.misceval.callsim($err431);
/*  5665 */                     } else if (typeof($err431) === 'function') {
/*  5666 */                         throw $err431();
/*  5667 */                     } else {
/*  5668 */                         throw $err431;
/*  5669 */                     }
/*  5670 */                     return Sk.builtin.none.none$;
/*  5671 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5672 */                 }
/*  5673 */             } catch (err) {
/*  5674 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5675 */                     err = new Sk.builtin.ExternalError(err);
/*  5676 */                 }
/*  5677 */                 err.traceback.push({
/*  5678 */                     lineno: $currLineNo,
/*  5679 */                     colno: $currColNo,
/*  5680 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5681 */                 });
/*  5682 */                 if ($exc.length > 0) {
/*  5683 */                     $err = err;
/*  5684 */                     $blk = $exc.pop();
/*  5685 */                     continue;
/*  5686 */                 } else {
/*  5687 */                     throw err;
/*  5688 */                 }
/*  5689 */             }
/*  5690 */         }
/*  5691 */     });
/*  5692 */     var $scope433 = (function $mustBePoint434$(self) {
/*  5693 */         var $blk = 0,
/*  5694 */             $exc = [],
/*  5695 */             $loc = {},
/*  5696 */             $gbl = this,
/*  5697 */             $err = undefined,
/*  5698 */             $ret = undefined,
/*  5699 */             $postfinally = undefined,
/*  5700 */             $currLineNo = undefined,
/*  5701 */             $currColNo = undefined;
/*  5702 */         if ($scope433.$wakingSuspension !== undefined) {
/*  5703 */             $wakeFromSuspension();
/*  5704 */         } else {
/*  5705 */             Sk.builtin.pyCheckArgs("mustBePoint", arguments, 1, 1, false, false);
/*  5706 */         }
/*  5707 */         while (true) {
/*  5708 */             try {
/*  5709 */                 switch ($blk) {
/*  5710 */                 case 0:
/*  5711 */                     /* --- codeobj entry --- */
/*  5712 */                     if (self === undefined) {
/*  5713 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5714 */                     }
/*  5715 */ 
/*  5716 */                     //
/*  5717 */                     // line 115:
/*  5718 */                     //         return self
/*  5719 */                     //         ^
/*  5720 */                     //
/*  5721 */                     $currLineNo = 115;
/*  5722 */                     $currColNo = 8;
/*  5723 */ 
/*  5724 */                     if (self === undefined) {
/*  5725 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5726 */                     }
/*  5727 */                     return self;
/*  5728 */                     return Sk.builtin.none.none$;
/*  5729 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5730 */                 }
/*  5731 */             } catch (err) {
/*  5732 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5733 */                     err = new Sk.builtin.ExternalError(err);
/*  5734 */                 }
/*  5735 */                 err.traceback.push({
/*  5736 */                     lineno: $currLineNo,
/*  5737 */                     colno: $currColNo,
/*  5738 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5739 */                 });
/*  5740 */                 if ($exc.length > 0) {
/*  5741 */                     $err = err;
/*  5742 */                     $blk = $exc.pop();
/*  5743 */                     continue;
/*  5744 */                 } else {
/*  5745 */                     throw err;
/*  5746 */                 }
/*  5747 */             }
/*  5748 */         }
/*  5749 */     });
/*  5750 */     var $scope438 = (function $Sphere$class_outer($globals, $locals, $rest) {
/*  5751 */         var $gbl = $globals,
/*  5752 */             $loc = $locals;
/*  5753 */         (function $Sphere$_closure() {
/*  5754 */             var $blk = 0,
/*  5755 */                 $exc = [],
/*  5756 */                 $ret = undefined,
/*  5757 */                 $postfinally = undefined,
/*  5758 */                 $currLineNo = undefined,
/*  5759 */                 $currColNo = undefined;
/*  5760 */             while (true) {
/*  5761 */                 try {
/*  5762 */                     switch ($blk) {
/*  5763 */                     case 0:
/*  5764 */                         /* --- class entry --- */
/*  5765 */                         //
/*  5766 */                         // line 118:
/*  5767 */                         //     def __init__(self, centre, radius):
/*  5768 */                         //     ^
/*  5769 */                         //
/*  5770 */                         $currLineNo = 118;
/*  5771 */                         $currColNo = 4;
/*  5772 */ 
/*  5773 */                         $scope439.co_name = new Sk.builtins['str']('__init__');
/*  5774 */                         $scope439.co_varnames = ['self', 'centre', 'radius'];
/*  5775 */                         var $funcobj443 = new Sk.builtins['function']($scope439, $gbl);
/*  5776 */                         $loc.__init__ = $funcobj443;
/*  5777 */                         //
/*  5778 */                         // line 123:
/*  5779 */                         //     def __repr__(self):
/*  5780 */                         //     ^
/*  5781 */                         //
/*  5782 */                         $currLineNo = 123;
/*  5783 */                         $currColNo = 4;
/*  5784 */ 
/*  5785 */                         $scope444.co_name = new Sk.builtins['str']('__repr__');
/*  5786 */                         $scope444.co_varnames = ['self'];
/*  5787 */                         var $funcobj455 = new Sk.builtins['function']($scope444, $gbl);
/*  5788 */                         $loc.__repr__ = $funcobj455;
/*  5789 */                         //
/*  5790 */                         // line 126:
/*  5791 */                         //     def intersectionTime(self, ray):
/*  5792 */                         //     ^
/*  5793 */                         //
/*  5794 */                         $currLineNo = 126;
/*  5795 */                         $currColNo = 4;
/*  5796 */ 
/*  5797 */                         $scope456.co_name = new Sk.builtins['str']('intersectionTime');
/*  5798 */                         $scope456.co_varnames = ['self', 'ray'];
/*  5799 */                         var $funcobj479 = new Sk.builtins['function']($scope456, $gbl);
/*  5800 */                         $loc.intersectionTime = $funcobj479;
/*  5801 */                         //
/*  5802 */                         // line 135:
/*  5803 */                         //     def normalAt(self, p):
/*  5804 */                         //     ^
/*  5805 */                         //
/*  5806 */                         $currLineNo = 135;
/*  5807 */                         $currColNo = 4;
/*  5808 */ 
/*  5809 */                         $scope480.co_name = new Sk.builtins['str']('normalAt');
/*  5810 */                         $scope480.co_varnames = ['self', 'p'];
/*  5811 */                         var $funcobj486 = new Sk.builtins['function']($scope480, $gbl);
/*  5812 */                         $loc.normalAt = $funcobj486;
/*  5813 */                         return;
/*  5814 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5815 */                     }
/*  5816 */                 } catch (err) {
/*  5817 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  5818 */                         err = new Sk.builtin.ExternalError(err);
/*  5819 */                     }
/*  5820 */                     err.traceback.push({
/*  5821 */                         lineno: $currLineNo,
/*  5822 */                         colno: $currColNo,
/*  5823 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5824 */                     });
/*  5825 */                     if ($exc.length > 0) {
/*  5826 */                         $err = err;
/*  5827 */                         $blk = $exc.pop();
/*  5828 */                         continue;
/*  5829 */                     } else {
/*  5830 */                         throw err;
/*  5831 */                     }
/*  5832 */                 }
/*  5833 */             }
/*  5834 */         }).apply(null, $rest);
/*  5835 */     });
/*  5836 */     var $scope439 = (function $__init__440$(self, centre, radius) {
/*  5837 */         var centre, centre, centre, radius, radius, self, self, self, $lattr441;
/*  5838 */         var $wakeFromSuspension = function() {
/*  5839 */             var susp = $scope439.$wakingSuspension;
/*  5840 */             delete $scope439.$wakingSuspension;
/*  5841 */             $blk = susp.$blk;
/*  5842 */             $loc = susp.$loc;
/*  5843 */             $gbl = susp.$gbl;
/*  5844 */             $exc = susp.$exc;
/*  5845 */             $err = susp.$err;
/*  5846 */             $postfinally = susp.$postfinally;
/*  5847 */             $currLineNo = susp.$lineno;
/*  5848 */             $currColNo = susp.$colno;
/*  5849 */             Sk.lastYield = Date.now();
/*  5850 */             centre = susp.$tmps.centre;
/*  5851 */             radius = susp.$tmps.radius;
/*  5852 */             self = susp.$tmps.self;
/*  5853 */             $lattr441 = susp.$tmps.$lattr441;
/*  5854 */             try {
/*  5855 */                 $ret = susp.child.resume();
/*  5856 */             } catch (err) {
/*  5857 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5858 */                     err = new Sk.builtin.ExternalError(err);
/*  5859 */                 }
/*  5860 */                 err.traceback.push({
/*  5861 */                     lineno: $currLineNo,
/*  5862 */                     colno: $currColNo,
/*  5863 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  5864 */                 });
/*  5865 */                 if ($exc.length > 0) {
/*  5866 */                     $err = err;
/*  5867 */                     $blk = $exc.pop();
/*  5868 */                 } else {
/*  5869 */                     throw err;
/*  5870 */                 }
/*  5871 */             }
/*  5872 */         };
/*  5873 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5874 */             var susp = new Sk.misceval.Suspension();
/*  5875 */             susp.child = $child;
/*  5876 */             susp.resume = function() {
/*  5877 */                 $scope439.$wakingSuspension = susp;
/*  5878 */                 return $scope439();
/*  5879 */             };
/*  5880 */             susp.data = susp.child.data;
/*  5881 */             susp.$blk = $blk;
/*  5882 */             susp.$loc = $loc;
/*  5883 */             susp.$gbl = $gbl;
/*  5884 */             susp.$exc = $exc;
/*  5885 */             susp.$err = $err;
/*  5886 */             susp.$postfinally = $postfinally;
/*  5887 */             susp.$filename = $filename;
/*  5888 */             susp.$lineno = $lineno;
/*  5889 */             susp.$colno = $colno;
/*  5890 */             susp.optional = susp.child.optional;
/*  5891 */             susp.$tmps = {
/*  5892 */                 "centre": centre,
/*  5893 */                 "radius": radius,
/*  5894 */                 "self": self,
/*  5895 */                 "$lattr441": $lattr441
/*  5896 */             };
/*  5897 */             return susp;
/*  5898 */         };
/*  5899 */         var $blk = 0,
/*  5900 */             $exc = [],
/*  5901 */             $loc = {},
/*  5902 */             $gbl = this,
/*  5903 */             $err = undefined,
/*  5904 */             $ret = undefined,
/*  5905 */             $postfinally = undefined,
/*  5906 */             $currLineNo = undefined,
/*  5907 */             $currColNo = undefined;
/*  5908 */         if ($scope439.$wakingSuspension !== undefined) {
/*  5909 */             $wakeFromSuspension();
/*  5910 */         } else {
/*  5911 */             Sk.builtin.pyCheckArgs("__init__", arguments, 3, 3, false, false);
/*  5912 */         }
/*  5913 */         while (true) {
/*  5914 */             try {
/*  5915 */                 switch ($blk) {
/*  5916 */                 case 0:
/*  5917 */                     /* --- codeobj entry --- */
/*  5918 */                     if (self === undefined) {
/*  5919 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5920 */                     }
/*  5921 */                     if (centre === undefined) {
/*  5922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'centre\' referenced before assignment');
/*  5923 */                     }
/*  5924 */                     if (radius === undefined) {
/*  5925 */                         throw new Sk.builtin.UnboundLocalError('local variable \'radius\' referenced before assignment');
/*  5926 */                     }
/*  5927 */ 
/*  5928 */                     //
/*  5929 */                     // line 119:
/*  5930 */                     //         centre.mustBePoint()
/*  5931 */                     //         ^
/*  5932 */                     //
/*  5933 */                     $currLineNo = 119;
/*  5934 */                     $currColNo = 8;
/*  5935 */ 
/*  5936 */                     if (centre === undefined) {
/*  5937 */                         throw new Sk.builtin.UnboundLocalError('local variable \'centre\' referenced before assignment');
/*  5938 */                     }
/*  5939 */                     $ret = Sk.abstr.gattr(centre, 'mustBePoint', true);
/*  5940 */                     $blk = 1; /* allowing case fallthrough */
/*  5941 */                 case 1:
/*  5942 */                     /* --- function return or resume suspension --- */
/*  5943 */                     if ($ret && $ret.$isSuspension) {
/*  5944 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 119, 8);
/*  5945 */                     }
/*  5946 */                     var $lattr441 = $ret;
/*  5947 */                     $ret;
/*  5948 */                     $ret = Sk.misceval.callsimOrSuspend($lattr441);
/*  5949 */                     $blk = 2; /* allowing case fallthrough */
/*  5950 */                 case 2:
/*  5951 */                     /* --- function return or resume suspension --- */
/*  5952 */                     if ($ret && $ret.$isSuspension) {
/*  5953 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 119, 8);
/*  5954 */                     }
/*  5955 */                     var $call442 = $ret;
/*  5956 */                     //
/*  5957 */                     // line 119:
/*  5958 */                     //         centre.mustBePoint()
/*  5959 */                     //         ^
/*  5960 */                     //
/*  5961 */                     $currLineNo = 119;
/*  5962 */                     $currColNo = 8;
/*  5963 */ 
/*  5964 */ 
/*  5965 */                     //
/*  5966 */                     // line 120:
/*  5967 */                     //         self.centre = centre
/*  5968 */                     //         ^
/*  5969 */                     //
/*  5970 */                     $currLineNo = 120;
/*  5971 */                     $currColNo = 8;
/*  5972 */ 
/*  5973 */                     if (centre === undefined) {
/*  5974 */                         throw new Sk.builtin.UnboundLocalError('local variable \'centre\' referenced before assignment');
/*  5975 */                     }
/*  5976 */                     if (self === undefined) {
/*  5977 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5978 */                     }
/*  5979 */                     $ret = Sk.abstr.sattr(self, 'centre', centre, true);
/*  5980 */                     $blk = 3; /* allowing case fallthrough */
/*  5981 */                 case 3:
/*  5982 */                     /* --- function return or resume suspension --- */
/*  5983 */                     if ($ret && $ret.$isSuspension) {
/*  5984 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 120, 8);
/*  5985 */                     }
/*  5986 */                     //
/*  5987 */                     // line 121:
/*  5988 */                     //         self.radius = radius
/*  5989 */                     //         ^
/*  5990 */                     //
/*  5991 */                     $currLineNo = 121;
/*  5992 */                     $currColNo = 8;
/*  5993 */ 
/*  5994 */                     if (radius === undefined) {
/*  5995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'radius\' referenced before assignment');
/*  5996 */                     }
/*  5997 */                     if (self === undefined) {
/*  5998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5999 */                     }
/*  6000 */                     $ret = Sk.abstr.sattr(self, 'radius', radius, true);
/*  6001 */                     $blk = 4; /* allowing case fallthrough */
/*  6002 */                 case 4:
/*  6003 */                     /* --- function return or resume suspension --- */
/*  6004 */                     if ($ret && $ret.$isSuspension) {
/*  6005 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 121, 8);
/*  6006 */                     }
/*  6007 */                     return Sk.builtin.none.none$;
/*  6008 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6009 */                 }
/*  6010 */             } catch (err) {
/*  6011 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6012 */                     err = new Sk.builtin.ExternalError(err);
/*  6013 */                 }
/*  6014 */                 err.traceback.push({
/*  6015 */                     lineno: $currLineNo,
/*  6016 */                     colno: $currColNo,
/*  6017 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6018 */                 });
/*  6019 */                 if ($exc.length > 0) {
/*  6020 */                     $err = err;
/*  6021 */                     $blk = $exc.pop();
/*  6022 */                     continue;
/*  6023 */                 } else {
/*  6024 */                     throw err;
/*  6025 */                 }
/*  6026 */             }
/*  6027 */         }
/*  6028 */     });
/*  6029 */     var $scope444 = (function $__repr__445$(self) {
/*  6030 */         var self, self, self, $str446, $loadgbl447, $str446, $loadgbl447, $lattr448, $str446, $loadgbl447, $lattr448, $call449, $elem450;
/*  6031 */         var $wakeFromSuspension = function() {
/*  6032 */             var susp = $scope444.$wakingSuspension;
/*  6033 */             delete $scope444.$wakingSuspension;
/*  6034 */             $blk = susp.$blk;
/*  6035 */             $loc = susp.$loc;
/*  6036 */             $gbl = susp.$gbl;
/*  6037 */             $exc = susp.$exc;
/*  6038 */             $err = susp.$err;
/*  6039 */             $postfinally = susp.$postfinally;
/*  6040 */             $currLineNo = susp.$lineno;
/*  6041 */             $currColNo = susp.$colno;
/*  6042 */             Sk.lastYield = Date.now();
/*  6043 */             self = susp.$tmps.self;
/*  6044 */             $str446 = susp.$tmps.$str446;
/*  6045 */             $loadgbl447 = susp.$tmps.$loadgbl447;
/*  6046 */             $lattr448 = susp.$tmps.$lattr448;
/*  6047 */             $call449 = susp.$tmps.$call449;
/*  6048 */             $elem450 = susp.$tmps.$elem450;
/*  6049 */             try {
/*  6050 */                 $ret = susp.child.resume();
/*  6051 */             } catch (err) {
/*  6052 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6053 */                     err = new Sk.builtin.ExternalError(err);
/*  6054 */                 }
/*  6055 */                 err.traceback.push({
/*  6056 */                     lineno: $currLineNo,
/*  6057 */                     colno: $currColNo,
/*  6058 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6059 */                 });
/*  6060 */                 if ($exc.length > 0) {
/*  6061 */                     $err = err;
/*  6062 */                     $blk = $exc.pop();
/*  6063 */                 } else {
/*  6064 */                     throw err;
/*  6065 */                 }
/*  6066 */             }
/*  6067 */         };
/*  6068 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6069 */             var susp = new Sk.misceval.Suspension();
/*  6070 */             susp.child = $child;
/*  6071 */             susp.resume = function() {
/*  6072 */                 $scope444.$wakingSuspension = susp;
/*  6073 */                 return $scope444();
/*  6074 */             };
/*  6075 */             susp.data = susp.child.data;
/*  6076 */             susp.$blk = $blk;
/*  6077 */             susp.$loc = $loc;
/*  6078 */             susp.$gbl = $gbl;
/*  6079 */             susp.$exc = $exc;
/*  6080 */             susp.$err = $err;
/*  6081 */             susp.$postfinally = $postfinally;
/*  6082 */             susp.$filename = $filename;
/*  6083 */             susp.$lineno = $lineno;
/*  6084 */             susp.$colno = $colno;
/*  6085 */             susp.optional = susp.child.optional;
/*  6086 */             susp.$tmps = {
/*  6087 */                 "self": self,
/*  6088 */                 "$str446": $str446,
/*  6089 */                 "$loadgbl447": $loadgbl447,
/*  6090 */                 "$lattr448": $lattr448,
/*  6091 */                 "$call449": $call449,
/*  6092 */                 "$elem450": $elem450
/*  6093 */             };
/*  6094 */             return susp;
/*  6095 */         };
/*  6096 */         var $blk = 0,
/*  6097 */             $exc = [],
/*  6098 */             $loc = {},
/*  6099 */             $gbl = this,
/*  6100 */             $err = undefined,
/*  6101 */             $ret = undefined,
/*  6102 */             $postfinally = undefined,
/*  6103 */             $currLineNo = undefined,
/*  6104 */             $currColNo = undefined;
/*  6105 */         if ($scope444.$wakingSuspension !== undefined) {
/*  6106 */             $wakeFromSuspension();
/*  6107 */         } else {
/*  6108 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  6109 */         }
/*  6110 */         while (true) {
/*  6111 */             try {
/*  6112 */                 switch ($blk) {
/*  6113 */                 case 0:
/*  6114 */                     /* --- codeobj entry --- */
/*  6115 */                     if (self === undefined) {
/*  6116 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6117 */                     }
/*  6118 */ 
/*  6119 */                     //
/*  6120 */                     // line 124:
/*  6121 */                     //         return 'Sphere(%s,%s)' % (repr(self.centre), self.radius)
/*  6122 */                     //         ^
/*  6123 */                     //
/*  6124 */                     $currLineNo = 124;
/*  6125 */                     $currColNo = 8;
/*  6126 */ 
/*  6127 */                     var $str446 = new Sk.builtins['str']('Sphere(%s,%s)');
/*  6128 */                     var $loadgbl447 = Sk.misceval.loadname('repr', $gbl);
/*  6129 */                     if (self === undefined) {
/*  6130 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6131 */                     }
/*  6132 */                     $ret = Sk.abstr.gattr(self, 'centre', true);
/*  6133 */                     $blk = 1; /* allowing case fallthrough */
/*  6134 */                 case 1:
/*  6135 */                     /* --- function return or resume suspension --- */
/*  6136 */                     if ($ret && $ret.$isSuspension) {
/*  6137 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 124, 39);
/*  6138 */                     }
/*  6139 */                     var $lattr448 = $ret;
/*  6140 */                     $ret;
/*  6141 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl447, $lattr448);
/*  6142 */                     $blk = 2; /* allowing case fallthrough */
/*  6143 */                 case 2:
/*  6144 */                     /* --- function return or resume suspension --- */
/*  6145 */                     if ($ret && $ret.$isSuspension) {
/*  6146 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 124, 34);
/*  6147 */                     }
/*  6148 */                     var $call449 = $ret;
/*  6149 */                     //
/*  6150 */                     // line 124:
/*  6151 */                     //         return 'Sphere(%s,%s)' % (repr(self.centre), self.radius)
/*  6152 */                     //                                   ^
/*  6153 */                     //
/*  6154 */                     $currLineNo = 124;
/*  6155 */                     $currColNo = 34;
/*  6156 */ 
/*  6157 */                     var $elem450 = $call449;
/*  6158 */                     if (self === undefined) {
/*  6159 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6160 */                     }
/*  6161 */                     $ret = Sk.abstr.gattr(self, 'radius', true);
/*  6162 */                     $blk = 3; /* allowing case fallthrough */
/*  6163 */                 case 3:
/*  6164 */                     /* --- function return or resume suspension --- */
/*  6165 */                     if ($ret && $ret.$isSuspension) {
/*  6166 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 124, 53);
/*  6167 */                     }
/*  6168 */                     var $lattr451 = $ret;
/*  6169 */                     var $elem452 = $lattr451;
/*  6170 */                     var $loadtuple453 = new Sk.builtins['tuple']([$elem450, $elem452]);
/*  6171 */                     var $binop454 = Sk.abstr.numberBinOp($str446, $loadtuple453, 'Mod');
/*  6172 */                     return $binop454;
/*  6173 */                     return Sk.builtin.none.none$;
/*  6174 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6175 */                 }
/*  6176 */             } catch (err) {
/*  6177 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6178 */                     err = new Sk.builtin.ExternalError(err);
/*  6179 */                 }
/*  6180 */                 err.traceback.push({
/*  6181 */                     lineno: $currLineNo,
/*  6182 */                     colno: $currColNo,
/*  6183 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6184 */                 });
/*  6185 */                 if ($exc.length > 0) {
/*  6186 */                     $err = err;
/*  6187 */                     $blk = $exc.pop();
/*  6188 */                     continue;
/*  6189 */                 } else {
/*  6190 */                     throw err;
/*  6191 */                 }
/*  6192 */             }
/*  6193 */         }
/*  6194 */     });
/*  6195 */     var $scope456 = (function $intersectionTime457$(self, ray) {
/*  6196 */         var cp, discriminant, v; /* locals */
/*  6197 */         var cp, cp, cp, cp, discriminant, discriminant, discriminant, ray, ray, ray, self, self, self, self, v, v, v, v, $lattr458, $lattr461, $lattr461, $lattr462, $lattr464, $lattr464, $lattr465, $binop466, $lattr464, $lattr465, $binop466, $lattr467, $compareres472, $loadgbl475, $loadgbl475, $lattr476;
/*  6198 */         var $wakeFromSuspension = function() {
/*  6199 */             var susp = $scope456.$wakingSuspension;
/*  6200 */             delete $scope456.$wakingSuspension;
/*  6201 */             $blk = susp.$blk;
/*  6202 */             $loc = susp.$loc;
/*  6203 */             $gbl = susp.$gbl;
/*  6204 */             $exc = susp.$exc;
/*  6205 */             $err = susp.$err;
/*  6206 */             $postfinally = susp.$postfinally;
/*  6207 */             $currLineNo = susp.$lineno;
/*  6208 */             $currColNo = susp.$colno;
/*  6209 */             Sk.lastYield = Date.now();
/*  6210 */             cp = susp.$tmps.cp;
/*  6211 */             discriminant = susp.$tmps.discriminant;
/*  6212 */             ray = susp.$tmps.ray;
/*  6213 */             self = susp.$tmps.self;
/*  6214 */             v = susp.$tmps.v;
/*  6215 */             $lattr458 = susp.$tmps.$lattr458;
/*  6216 */             $lattr461 = susp.$tmps.$lattr461;
/*  6217 */             $lattr462 = susp.$tmps.$lattr462;
/*  6218 */             $lattr464 = susp.$tmps.$lattr464;
/*  6219 */             $lattr465 = susp.$tmps.$lattr465;
/*  6220 */             $binop466 = susp.$tmps.$binop466;
/*  6221 */             $lattr467 = susp.$tmps.$lattr467;
/*  6222 */             $compareres472 = susp.$tmps.$compareres472;
/*  6223 */             $loadgbl475 = susp.$tmps.$loadgbl475;
/*  6224 */             $lattr476 = susp.$tmps.$lattr476;
/*  6225 */             try {
/*  6226 */                 $ret = susp.child.resume();
/*  6227 */             } catch (err) {
/*  6228 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6229 */                     err = new Sk.builtin.ExternalError(err);
/*  6230 */                 }
/*  6231 */                 err.traceback.push({
/*  6232 */                     lineno: $currLineNo,
/*  6233 */                     colno: $currColNo,
/*  6234 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6235 */                 });
/*  6236 */                 if ($exc.length > 0) {
/*  6237 */                     $err = err;
/*  6238 */                     $blk = $exc.pop();
/*  6239 */                 } else {
/*  6240 */                     throw err;
/*  6241 */                 }
/*  6242 */             }
/*  6243 */         };
/*  6244 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6245 */             var susp = new Sk.misceval.Suspension();
/*  6246 */             susp.child = $child;
/*  6247 */             susp.resume = function() {
/*  6248 */                 $scope456.$wakingSuspension = susp;
/*  6249 */                 return $scope456();
/*  6250 */             };
/*  6251 */             susp.data = susp.child.data;
/*  6252 */             susp.$blk = $blk;
/*  6253 */             susp.$loc = $loc;
/*  6254 */             susp.$gbl = $gbl;
/*  6255 */             susp.$exc = $exc;
/*  6256 */             susp.$err = $err;
/*  6257 */             susp.$postfinally = $postfinally;
/*  6258 */             susp.$filename = $filename;
/*  6259 */             susp.$lineno = $lineno;
/*  6260 */             susp.$colno = $colno;
/*  6261 */             susp.optional = susp.child.optional;
/*  6262 */             susp.$tmps = {
/*  6263 */                 "cp": cp,
/*  6264 */                 "discriminant": discriminant,
/*  6265 */                 "ray": ray,
/*  6266 */                 "self": self,
/*  6267 */                 "v": v,
/*  6268 */                 "$lattr458": $lattr458,
/*  6269 */                 "$lattr461": $lattr461,
/*  6270 */                 "$lattr462": $lattr462,
/*  6271 */                 "$lattr464": $lattr464,
/*  6272 */                 "$lattr465": $lattr465,
/*  6273 */                 "$binop466": $binop466,
/*  6274 */                 "$lattr467": $lattr467,
/*  6275 */                 "$compareres472": $compareres472,
/*  6276 */                 "$loadgbl475": $loadgbl475,
/*  6277 */                 "$lattr476": $lattr476
/*  6278 */             };
/*  6279 */             return susp;
/*  6280 */         };
/*  6281 */         var $blk = 0,
/*  6282 */             $exc = [],
/*  6283 */             $loc = {},
/*  6284 */             $gbl = this,
/*  6285 */             $err = undefined,
/*  6286 */             $ret = undefined,
/*  6287 */             $postfinally = undefined,
/*  6288 */             $currLineNo = undefined,
/*  6289 */             $currColNo = undefined;
/*  6290 */         if ($scope456.$wakingSuspension !== undefined) {
/*  6291 */             $wakeFromSuspension();
/*  6292 */         } else {
/*  6293 */             Sk.builtin.pyCheckArgs("intersectionTime", arguments, 2, 2, false, false);
/*  6294 */         }
/*  6295 */         while (true) {
/*  6296 */             try {
/*  6297 */                 switch ($blk) {
/*  6298 */                 case 0:
/*  6299 */                     /* --- codeobj entry --- */
/*  6300 */                     if (self === undefined) {
/*  6301 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6302 */                     }
/*  6303 */                     if (ray === undefined) {
/*  6304 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/*  6305 */                     }
/*  6306 */ 
/*  6307 */                     //
/*  6308 */                     // line 127:
/*  6309 */                     //         cp = self.centre - ray.point
/*  6310 */                     //         ^
/*  6311 */                     //
/*  6312 */                     $currLineNo = 127;
/*  6313 */                     $currColNo = 8;
/*  6314 */ 
/*  6315 */                     if (self === undefined) {
/*  6316 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6317 */                     }
/*  6318 */                     $ret = Sk.abstr.gattr(self, 'centre', true);
/*  6319 */                     $blk = 1; /* allowing case fallthrough */
/*  6320 */                 case 1:
/*  6321 */                     /* --- function return or resume suspension --- */
/*  6322 */                     if ($ret && $ret.$isSuspension) {
/*  6323 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 127, 13);
/*  6324 */                     }
/*  6325 */                     var $lattr458 = $ret;
/*  6326 */                     if (ray === undefined) {
/*  6327 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/*  6328 */                     }
/*  6329 */                     $ret = Sk.abstr.gattr(ray, 'point', true);
/*  6330 */                     $blk = 2; /* allowing case fallthrough */
/*  6331 */                 case 2:
/*  6332 */                     /* --- function return or resume suspension --- */
/*  6333 */                     if ($ret && $ret.$isSuspension) {
/*  6334 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 127, 27);
/*  6335 */                     }
/*  6336 */                     var $lattr459 = $ret;
/*  6337 */                     var $binop460 = Sk.abstr.numberBinOp($lattr458, $lattr459, 'Sub');
/*  6338 */                     cp = $binop460;
/*  6339 */                     //
/*  6340 */                     // line 128:
/*  6341 */                     //         v = cp.dot(ray.vector)
/*  6342 */                     //         ^
/*  6343 */                     //
/*  6344 */                     $currLineNo = 128;
/*  6345 */                     $currColNo = 8;
/*  6346 */ 
/*  6347 */                     if (cp === undefined) {
/*  6348 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cp\' referenced before assignment');
/*  6349 */                     }
/*  6350 */                     $ret = Sk.abstr.gattr(cp, 'dot', true);
/*  6351 */                     $blk = 3; /* allowing case fallthrough */
/*  6352 */                 case 3:
/*  6353 */                     /* --- function return or resume suspension --- */
/*  6354 */                     if ($ret && $ret.$isSuspension) {
/*  6355 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 128, 12);
/*  6356 */                     }
/*  6357 */                     var $lattr461 = $ret;
/*  6358 */                     if (ray === undefined) {
/*  6359 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/*  6360 */                     }
/*  6361 */                     $ret = Sk.abstr.gattr(ray, 'vector', true);
/*  6362 */                     $blk = 4; /* allowing case fallthrough */
/*  6363 */                 case 4:
/*  6364 */                     /* --- function return or resume suspension --- */
/*  6365 */                     if ($ret && $ret.$isSuspension) {
/*  6366 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 128, 19);
/*  6367 */                     }
/*  6368 */                     var $lattr462 = $ret;
/*  6369 */                     $ret;
/*  6370 */                     $ret = Sk.misceval.callsimOrSuspend($lattr461, $lattr462);
/*  6371 */                     $blk = 5; /* allowing case fallthrough */
/*  6372 */                 case 5:
/*  6373 */                     /* --- function return or resume suspension --- */
/*  6374 */                     if ($ret && $ret.$isSuspension) {
/*  6375 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 128, 12);
/*  6376 */                     }
/*  6377 */                     var $call463 = $ret;
/*  6378 */                     //
/*  6379 */                     // line 128:
/*  6380 */                     //         v = cp.dot(ray.vector)
/*  6381 */                     //             ^
/*  6382 */                     //
/*  6383 */                     $currLineNo = 128;
/*  6384 */                     $currColNo = 12;
/*  6385 */ 
/*  6386 */                     v = $call463;
/*  6387 */                     //
/*  6388 */                     // line 129:
/*  6389 */                     //         discriminant = (self.radius * self.radius) - (cp.dot(cp) - v*v)
/*  6390 */                     //         ^
/*  6391 */                     //
/*  6392 */                     $currLineNo = 129;
/*  6393 */                     $currColNo = 8;
/*  6394 */ 
/*  6395 */                     if (self === undefined) {
/*  6396 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6397 */                     }
/*  6398 */                     $ret = Sk.abstr.gattr(self, 'radius', true);
/*  6399 */                     $blk = 6; /* allowing case fallthrough */
/*  6400 */                 case 6:
/*  6401 */                     /* --- function return or resume suspension --- */
/*  6402 */                     if ($ret && $ret.$isSuspension) {
/*  6403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 129, 24);
/*  6404 */                     }
/*  6405 */                     var $lattr464 = $ret;
/*  6406 */                     if (self === undefined) {
/*  6407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6408 */                     }
/*  6409 */                     $ret = Sk.abstr.gattr(self, 'radius', true);
/*  6410 */                     $blk = 7; /* allowing case fallthrough */
/*  6411 */                 case 7:
/*  6412 */                     /* --- function return or resume suspension --- */
/*  6413 */                     if ($ret && $ret.$isSuspension) {
/*  6414 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 129, 38);
/*  6415 */                     }
/*  6416 */                     var $lattr465 = $ret;
/*  6417 */                     var $binop466 = Sk.abstr.numberBinOp($lattr464, $lattr465, 'Mult');
/*  6418 */                     if (cp === undefined) {
/*  6419 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cp\' referenced before assignment');
/*  6420 */                     }
/*  6421 */                     $ret = Sk.abstr.gattr(cp, 'dot', true);
/*  6422 */                     $blk = 8; /* allowing case fallthrough */
/*  6423 */                 case 8:
/*  6424 */                     /* --- function return or resume suspension --- */
/*  6425 */                     if ($ret && $ret.$isSuspension) {
/*  6426 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 129, 54);
/*  6427 */                     }
/*  6428 */                     var $lattr467 = $ret;
/*  6429 */                     if (cp === undefined) {
/*  6430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'cp\' referenced before assignment');
/*  6431 */                     }
/*  6432 */                     $ret;
/*  6433 */                     $ret = Sk.misceval.callsimOrSuspend($lattr467, cp);
/*  6434 */                     $blk = 9; /* allowing case fallthrough */
/*  6435 */                 case 9:
/*  6436 */                     /* --- function return or resume suspension --- */
/*  6437 */                     if ($ret && $ret.$isSuspension) {
/*  6438 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 129, 54);
/*  6439 */                     }
/*  6440 */                     var $call468 = $ret;
/*  6441 */                     //
/*  6442 */                     // line 129:
/*  6443 */                     //         discriminant = (self.radius * self.radius) - (cp.dot(cp) - v*v)
/*  6444 */                     //                                                       ^
/*  6445 */                     //
/*  6446 */                     $currLineNo = 129;
/*  6447 */                     $currColNo = 54;
/*  6448 */ 
/*  6449 */                     if (v === undefined) {
/*  6450 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  6451 */                     }
/*  6452 */                     if (v === undefined) {
/*  6453 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  6454 */                     }
/*  6455 */                     var $binop469 = Sk.abstr.numberBinOp(v, v, 'Mult');
/*  6456 */                     var $binop470 = Sk.abstr.numberBinOp($call468, $binop469, 'Sub');
/*  6457 */                     var $binop471 = Sk.abstr.numberBinOp($binop466, $binop470, 'Sub');
/*  6458 */                     discriminant = $binop471;
/*  6459 */                     //
/*  6460 */                     // line 130:
/*  6461 */                     //         if discriminant < 0:
/*  6462 */                     //         ^
/*  6463 */                     //
/*  6464 */                     $currLineNo = 130;
/*  6465 */                     $currColNo = 8;
/*  6466 */ 
/*  6467 */                     if (discriminant === undefined) {
/*  6468 */                         throw new Sk.builtin.UnboundLocalError('local variable \'discriminant\' referenced before assignment');
/*  6469 */                     }
/*  6470 */                     var $compareres472 = null;
/*  6471 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(discriminant, new Sk.builtin.int_(0), 'Lt', true));
/*  6472 */                     $blk = 13; /* allowing case fallthrough */
/*  6473 */                 case 13:
/*  6474 */                     /* --- function return or resume suspension --- */
/*  6475 */                     if ($ret && $ret.$isSuspension) {
/*  6476 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 130, 11);
/*  6477 */                     }
/*  6478 */                     $compareres472 = $ret;
/*  6479 */                     var $jfalse473 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6480 */                     if ($jfalse473) { /*test failed */
/*  6481 */                         $blk = 12;
/*  6482 */                         continue;
/*  6483 */                     }
/*  6484 */                     $blk = 12; /* allowing case fallthrough */
/*  6485 */                 case 12:
/*  6486 */                     /* --- done --- */
/*  6487 */                     var $jfalse474 = ($compareres472 === false || !Sk.misceval.isTrue($compareres472));
/*  6488 */                     if ($jfalse474) { /*test failed */
/*  6489 */                         $blk = 11;
/*  6490 */                         continue;
/*  6491 */                     }
/*  6492 */                     //
/*  6493 */                     // line 131:
/*  6494 */                     //             return None
/*  6495 */                     //             ^
/*  6496 */                     //
/*  6497 */                     $currLineNo = 131;
/*  6498 */                     $currColNo = 12;
/*  6499 */ 
/*  6500 */                     return Sk.builtin.none.none$;
/*  6501 */                     $blk = 10; /* allowing case fallthrough */
/*  6502 */                 case 10:
/*  6503 */                     /* --- end of if --- */
/*  6504 */                     return Sk.builtin.none.none$;
/*  6505 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6506 */                 case 11:
/*  6507 */                     /* --- next branch of if --- */
/*  6508 */                     //
/*  6509 */                     // line 133:
/*  6510 */                     //             return v - math.sqrt(discriminant)
/*  6511 */                     //             ^
/*  6512 */                     //
/*  6513 */                     $currLineNo = 133;
/*  6514 */                     $currColNo = 12;
/*  6515 */ 
/*  6516 */                     if (v === undefined) {
/*  6517 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  6518 */                     }
/*  6519 */                     var $loadgbl475 = Sk.misceval.loadname('math', $gbl);
/*  6520 */                     $ret = Sk.abstr.gattr($loadgbl475, 'sqrt', true);
/*  6521 */                     $blk = 14; /* allowing case fallthrough */
/*  6522 */                 case 14:
/*  6523 */                     /* --- function return or resume suspension --- */
/*  6524 */                     if ($ret && $ret.$isSuspension) {
/*  6525 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 133, 23);
/*  6526 */                     }
/*  6527 */                     var $lattr476 = $ret;
/*  6528 */                     if (discriminant === undefined) {
/*  6529 */                         throw new Sk.builtin.UnboundLocalError('local variable \'discriminant\' referenced before assignment');
/*  6530 */                     }
/*  6531 */                     $ret;
/*  6532 */                     $ret = Sk.misceval.callsimOrSuspend($lattr476, discriminant);
/*  6533 */                     $blk = 15; /* allowing case fallthrough */
/*  6534 */                 case 15:
/*  6535 */                     /* --- function return or resume suspension --- */
/*  6536 */                     if ($ret && $ret.$isSuspension) {
/*  6537 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 133, 23);
/*  6538 */                     }
/*  6539 */                     var $call477 = $ret;
/*  6540 */                     //
/*  6541 */                     // line 133:
/*  6542 */                     //             return v - math.sqrt(discriminant)
/*  6543 */                     //                        ^
/*  6544 */                     //
/*  6545 */                     $currLineNo = 133;
/*  6546 */                     $currColNo = 23;
/*  6547 */ 
/*  6548 */                     var $binop478 = Sk.abstr.numberBinOp(v, $call477, 'Sub');
/*  6549 */                     return $binop478;
/*  6550 */                     $blk = 10; /* jump */
/*  6551 */                     continue;
/*  6552 */                 }
/*  6553 */             } catch (err) {
/*  6554 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6555 */                     err = new Sk.builtin.ExternalError(err);
/*  6556 */                 }
/*  6557 */                 err.traceback.push({
/*  6558 */                     lineno: $currLineNo,
/*  6559 */                     colno: $currColNo,
/*  6560 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6561 */                 });
/*  6562 */                 if ($exc.length > 0) {
/*  6563 */                     $err = err;
/*  6564 */                     $blk = $exc.pop();
/*  6565 */                     continue;
/*  6566 */                 } else {
/*  6567 */                     throw err;
/*  6568 */                 }
/*  6569 */             }
/*  6570 */         }
/*  6571 */     });
/*  6572 */     var $scope480 = (function $normalAt481$(self, p) {
/*  6573 */         var p, p, self, self, $lattr482, $binop483, $lattr482, $binop483, $lattr484;
/*  6574 */         var $wakeFromSuspension = function() {
/*  6575 */             var susp = $scope480.$wakingSuspension;
/*  6576 */             delete $scope480.$wakingSuspension;
/*  6577 */             $blk = susp.$blk;
/*  6578 */             $loc = susp.$loc;
/*  6579 */             $gbl = susp.$gbl;
/*  6580 */             $exc = susp.$exc;
/*  6581 */             $err = susp.$err;
/*  6582 */             $postfinally = susp.$postfinally;
/*  6583 */             $currLineNo = susp.$lineno;
/*  6584 */             $currColNo = susp.$colno;
/*  6585 */             Sk.lastYield = Date.now();
/*  6586 */             p = susp.$tmps.p;
/*  6587 */             self = susp.$tmps.self;
/*  6588 */             $lattr482 = susp.$tmps.$lattr482;
/*  6589 */             $binop483 = susp.$tmps.$binop483;
/*  6590 */             $lattr484 = susp.$tmps.$lattr484;
/*  6591 */             try {
/*  6592 */                 $ret = susp.child.resume();
/*  6593 */             } catch (err) {
/*  6594 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6595 */                     err = new Sk.builtin.ExternalError(err);
/*  6596 */                 }
/*  6597 */                 err.traceback.push({
/*  6598 */                     lineno: $currLineNo,
/*  6599 */                     colno: $currColNo,
/*  6600 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6601 */                 });
/*  6602 */                 if ($exc.length > 0) {
/*  6603 */                     $err = err;
/*  6604 */                     $blk = $exc.pop();
/*  6605 */                 } else {
/*  6606 */                     throw err;
/*  6607 */                 }
/*  6608 */             }
/*  6609 */         };
/*  6610 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6611 */             var susp = new Sk.misceval.Suspension();
/*  6612 */             susp.child = $child;
/*  6613 */             susp.resume = function() {
/*  6614 */                 $scope480.$wakingSuspension = susp;
/*  6615 */                 return $scope480();
/*  6616 */             };
/*  6617 */             susp.data = susp.child.data;
/*  6618 */             susp.$blk = $blk;
/*  6619 */             susp.$loc = $loc;
/*  6620 */             susp.$gbl = $gbl;
/*  6621 */             susp.$exc = $exc;
/*  6622 */             susp.$err = $err;
/*  6623 */             susp.$postfinally = $postfinally;
/*  6624 */             susp.$filename = $filename;
/*  6625 */             susp.$lineno = $lineno;
/*  6626 */             susp.$colno = $colno;
/*  6627 */             susp.optional = susp.child.optional;
/*  6628 */             susp.$tmps = {
/*  6629 */                 "p": p,
/*  6630 */                 "self": self,
/*  6631 */                 "$lattr482": $lattr482,
/*  6632 */                 "$binop483": $binop483,
/*  6633 */                 "$lattr484": $lattr484
/*  6634 */             };
/*  6635 */             return susp;
/*  6636 */         };
/*  6637 */         var $blk = 0,
/*  6638 */             $exc = [],
/*  6639 */             $loc = {},
/*  6640 */             $gbl = this,
/*  6641 */             $err = undefined,
/*  6642 */             $ret = undefined,
/*  6643 */             $postfinally = undefined,
/*  6644 */             $currLineNo = undefined,
/*  6645 */             $currColNo = undefined;
/*  6646 */         if ($scope480.$wakingSuspension !== undefined) {
/*  6647 */             $wakeFromSuspension();
/*  6648 */         } else {
/*  6649 */             Sk.builtin.pyCheckArgs("normalAt", arguments, 2, 2, false, false);
/*  6650 */         }
/*  6651 */         while (true) {
/*  6652 */             try {
/*  6653 */                 switch ($blk) {
/*  6654 */                 case 0:
/*  6655 */                     /* --- codeobj entry --- */
/*  6656 */                     if (self === undefined) {
/*  6657 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6658 */                     }
/*  6659 */                     if (p === undefined) {
/*  6660 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  6661 */                     }
/*  6662 */ 
/*  6663 */                     //
/*  6664 */                     // line 136:
/*  6665 */                     //         return (p - self.centre).normalized()
/*  6666 */                     //         ^
/*  6667 */                     //
/*  6668 */                     $currLineNo = 136;
/*  6669 */                     $currColNo = 8;
/*  6670 */ 
/*  6671 */                     if (p === undefined) {
/*  6672 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  6673 */                     }
/*  6674 */                     if (self === undefined) {
/*  6675 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6676 */                     }
/*  6677 */                     $ret = Sk.abstr.gattr(self, 'centre', true);
/*  6678 */                     $blk = 1; /* allowing case fallthrough */
/*  6679 */                 case 1:
/*  6680 */                     /* --- function return or resume suspension --- */
/*  6681 */                     if ($ret && $ret.$isSuspension) {
/*  6682 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 136, 20);
/*  6683 */                     }
/*  6684 */                     var $lattr482 = $ret;
/*  6685 */                     var $binop483 = Sk.abstr.numberBinOp(p, $lattr482, 'Sub');
/*  6686 */                     $ret = Sk.abstr.gattr($binop483, 'normalized', true);
/*  6687 */                     $blk = 2; /* allowing case fallthrough */
/*  6688 */                 case 2:
/*  6689 */                     /* --- function return or resume suspension --- */
/*  6690 */                     if ($ret && $ret.$isSuspension) {
/*  6691 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 136, 16);
/*  6692 */                     }
/*  6693 */                     var $lattr484 = $ret;
/*  6694 */                     $ret;
/*  6695 */                     $ret = Sk.misceval.callsimOrSuspend($lattr484);
/*  6696 */                     $blk = 3; /* allowing case fallthrough */
/*  6697 */                 case 3:
/*  6698 */                     /* --- function return or resume suspension --- */
/*  6699 */                     if ($ret && $ret.$isSuspension) {
/*  6700 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 136, 16);
/*  6701 */                     }
/*  6702 */                     var $call485 = $ret;
/*  6703 */                     //
/*  6704 */                     // line 136:
/*  6705 */                     //         return (p - self.centre).normalized()
/*  6706 */                     //                 ^
/*  6707 */                     //
/*  6708 */                     $currLineNo = 136;
/*  6709 */                     $currColNo = 16;
/*  6710 */ 
/*  6711 */                     return $call485;
/*  6712 */                     return Sk.builtin.none.none$;
/*  6713 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6714 */                 }
/*  6715 */             } catch (err) {
/*  6716 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6717 */                     err = new Sk.builtin.ExternalError(err);
/*  6718 */                 }
/*  6719 */                 err.traceback.push({
/*  6720 */                     lineno: $currLineNo,
/*  6721 */                     colno: $currColNo,
/*  6722 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6723 */                 });
/*  6724 */                 if ($exc.length > 0) {
/*  6725 */                     $err = err;
/*  6726 */                     $blk = $exc.pop();
/*  6727 */                     continue;
/*  6728 */                 } else {
/*  6729 */                     throw err;
/*  6730 */                 }
/*  6731 */             }
/*  6732 */         }
/*  6733 */     });
/*  6734 */     var $scope489 = (function $Halfspace$class_outer($globals, $locals, $rest) {
/*  6735 */         var $gbl = $globals,
/*  6736 */             $loc = $locals;
/*  6737 */         (function $Halfspace$_closure() {
/*  6738 */             var $blk = 0,
/*  6739 */                 $exc = [],
/*  6740 */                 $ret = undefined,
/*  6741 */                 $postfinally = undefined,
/*  6742 */                 $currLineNo = undefined,
/*  6743 */                 $currColNo = undefined;
/*  6744 */             while (true) {
/*  6745 */                 try {
/*  6746 */                     switch ($blk) {
/*  6747 */                     case 0:
/*  6748 */                         /* --- class entry --- */
/*  6749 */                         //
/*  6750 */                         // line 139:
/*  6751 */                         //     def __init__(self, point, normal):
/*  6752 */                         //     ^
/*  6753 */                         //
/*  6754 */                         $currLineNo = 139;
/*  6755 */                         $currColNo = 4;
/*  6756 */ 
/*  6757 */                         $scope490.co_name = new Sk.builtins['str']('__init__');
/*  6758 */                         $scope490.co_varnames = ['self', 'point', 'normal'];
/*  6759 */                         var $funcobj494 = new Sk.builtins['function']($scope490, $gbl);
/*  6760 */                         $loc.__init__ = $funcobj494;
/*  6761 */                         //
/*  6762 */                         // line 143:
/*  6763 */                         //     def __repr__(self):
/*  6764 */                         //     ^
/*  6765 */                         //
/*  6766 */                         $currLineNo = 143;
/*  6767 */                         $currColNo = 4;
/*  6768 */ 
/*  6769 */                         $scope495.co_name = new Sk.builtins['str']('__repr__');
/*  6770 */                         $scope495.co_varnames = ['self'];
/*  6771 */                         var $funcobj508 = new Sk.builtins['function']($scope495, $gbl);
/*  6772 */                         $loc.__repr__ = $funcobj508;
/*  6773 */                         //
/*  6774 */                         // line 146:
/*  6775 */                         //     def intersectionTime(self, ray):
/*  6776 */                         //     ^
/*  6777 */                         //
/*  6778 */                         $currLineNo = 146;
/*  6779 */                         $currColNo = 4;
/*  6780 */ 
/*  6781 */                         $scope509.co_name = new Sk.builtins['str']('intersectionTime');
/*  6782 */                         $scope509.co_varnames = ['self', 'ray'];
/*  6783 */                         var $funcobj518 = new Sk.builtins['function']($scope509, $gbl);
/*  6784 */                         $loc.intersectionTime = $funcobj518;
/*  6785 */                         //
/*  6786 */                         // line 153:
/*  6787 */                         //     def normalAt(self, p):
/*  6788 */                         //     ^
/*  6789 */                         //
/*  6790 */                         $currLineNo = 153;
/*  6791 */                         $currColNo = 4;
/*  6792 */ 
/*  6793 */                         $scope519.co_name = new Sk.builtins['str']('normalAt');
/*  6794 */                         $scope519.co_varnames = ['self', 'p'];
/*  6795 */                         var $funcobj522 = new Sk.builtins['function']($scope519, $gbl);
/*  6796 */                         $loc.normalAt = $funcobj522;
/*  6797 */                         return;
/*  6798 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6799 */                     }
/*  6800 */                 } catch (err) {
/*  6801 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  6802 */                         err = new Sk.builtin.ExternalError(err);
/*  6803 */                     }
/*  6804 */                     err.traceback.push({
/*  6805 */                         lineno: $currLineNo,
/*  6806 */                         colno: $currColNo,
/*  6807 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6808 */                     });
/*  6809 */                     if ($exc.length > 0) {
/*  6810 */                         $err = err;
/*  6811 */                         $blk = $exc.pop();
/*  6812 */                         continue;
/*  6813 */                     } else {
/*  6814 */                         throw err;
/*  6815 */                     }
/*  6816 */                 }
/*  6817 */             }
/*  6818 */         }).apply(null, $rest);
/*  6819 */     });
/*  6820 */     var $scope490 = (function $__init__491$(self, point, normal) {
/*  6821 */         var normal, normal, point, point, self, self, self, $lattr492, $lattr492, $call493;
/*  6822 */         var $wakeFromSuspension = function() {
/*  6823 */             var susp = $scope490.$wakingSuspension;
/*  6824 */             delete $scope490.$wakingSuspension;
/*  6825 */             $blk = susp.$blk;
/*  6826 */             $loc = susp.$loc;
/*  6827 */             $gbl = susp.$gbl;
/*  6828 */             $exc = susp.$exc;
/*  6829 */             $err = susp.$err;
/*  6830 */             $postfinally = susp.$postfinally;
/*  6831 */             $currLineNo = susp.$lineno;
/*  6832 */             $currColNo = susp.$colno;
/*  6833 */             Sk.lastYield = Date.now();
/*  6834 */             normal = susp.$tmps.normal;
/*  6835 */             point = susp.$tmps.point;
/*  6836 */             self = susp.$tmps.self;
/*  6837 */             $lattr492 = susp.$tmps.$lattr492;
/*  6838 */             $call493 = susp.$tmps.$call493;
/*  6839 */             try {
/*  6840 */                 $ret = susp.child.resume();
/*  6841 */             } catch (err) {
/*  6842 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6843 */                     err = new Sk.builtin.ExternalError(err);
/*  6844 */                 }
/*  6845 */                 err.traceback.push({
/*  6846 */                     lineno: $currLineNo,
/*  6847 */                     colno: $currColNo,
/*  6848 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6849 */                 });
/*  6850 */                 if ($exc.length > 0) {
/*  6851 */                     $err = err;
/*  6852 */                     $blk = $exc.pop();
/*  6853 */                 } else {
/*  6854 */                     throw err;
/*  6855 */                 }
/*  6856 */             }
/*  6857 */         };
/*  6858 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6859 */             var susp = new Sk.misceval.Suspension();
/*  6860 */             susp.child = $child;
/*  6861 */             susp.resume = function() {
/*  6862 */                 $scope490.$wakingSuspension = susp;
/*  6863 */                 return $scope490();
/*  6864 */             };
/*  6865 */             susp.data = susp.child.data;
/*  6866 */             susp.$blk = $blk;
/*  6867 */             susp.$loc = $loc;
/*  6868 */             susp.$gbl = $gbl;
/*  6869 */             susp.$exc = $exc;
/*  6870 */             susp.$err = $err;
/*  6871 */             susp.$postfinally = $postfinally;
/*  6872 */             susp.$filename = $filename;
/*  6873 */             susp.$lineno = $lineno;
/*  6874 */             susp.$colno = $colno;
/*  6875 */             susp.optional = susp.child.optional;
/*  6876 */             susp.$tmps = {
/*  6877 */                 "normal": normal,
/*  6878 */                 "point": point,
/*  6879 */                 "self": self,
/*  6880 */                 "$lattr492": $lattr492,
/*  6881 */                 "$call493": $call493
/*  6882 */             };
/*  6883 */             return susp;
/*  6884 */         };
/*  6885 */         var $blk = 0,
/*  6886 */             $exc = [],
/*  6887 */             $loc = {},
/*  6888 */             $gbl = this,
/*  6889 */             $err = undefined,
/*  6890 */             $ret = undefined,
/*  6891 */             $postfinally = undefined,
/*  6892 */             $currLineNo = undefined,
/*  6893 */             $currColNo = undefined;
/*  6894 */         if ($scope490.$wakingSuspension !== undefined) {
/*  6895 */             $wakeFromSuspension();
/*  6896 */         } else {
/*  6897 */             Sk.builtin.pyCheckArgs("__init__", arguments, 3, 3, false, false);
/*  6898 */         }
/*  6899 */         while (true) {
/*  6900 */             try {
/*  6901 */                 switch ($blk) {
/*  6902 */                 case 0:
/*  6903 */                     /* --- codeobj entry --- */
/*  6904 */                     if (self === undefined) {
/*  6905 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6906 */                     }
/*  6907 */                     if (point === undefined) {
/*  6908 */                         throw new Sk.builtin.UnboundLocalError('local variable \'point\' referenced before assignment');
/*  6909 */                     }
/*  6910 */                     if (normal === undefined) {
/*  6911 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/*  6912 */                     }
/*  6913 */ 
/*  6914 */                     //
/*  6915 */                     // line 140:
/*  6916 */                     //         self.point = point
/*  6917 */                     //         ^
/*  6918 */                     //
/*  6919 */                     $currLineNo = 140;
/*  6920 */                     $currColNo = 8;
/*  6921 */ 
/*  6922 */                     if (point === undefined) {
/*  6923 */                         throw new Sk.builtin.UnboundLocalError('local variable \'point\' referenced before assignment');
/*  6924 */                     }
/*  6925 */                     if (self === undefined) {
/*  6926 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6927 */                     }
/*  6928 */                     $ret = Sk.abstr.sattr(self, 'point', point, true);
/*  6929 */                     $blk = 1; /* allowing case fallthrough */
/*  6930 */                 case 1:
/*  6931 */                     /* --- function return or resume suspension --- */
/*  6932 */                     if ($ret && $ret.$isSuspension) {
/*  6933 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 140, 8);
/*  6934 */                     }
/*  6935 */                     //
/*  6936 */                     // line 141:
/*  6937 */                     //         self.normal = normal.normalized()
/*  6938 */                     //         ^
/*  6939 */                     //
/*  6940 */                     $currLineNo = 141;
/*  6941 */                     $currColNo = 8;
/*  6942 */ 
/*  6943 */                     if (normal === undefined) {
/*  6944 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/*  6945 */                     }
/*  6946 */                     $ret = Sk.abstr.gattr(normal, 'normalized', true);
/*  6947 */                     $blk = 2; /* allowing case fallthrough */
/*  6948 */                 case 2:
/*  6949 */                     /* --- function return or resume suspension --- */
/*  6950 */                     if ($ret && $ret.$isSuspension) {
/*  6951 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 141, 22);
/*  6952 */                     }
/*  6953 */                     var $lattr492 = $ret;
/*  6954 */                     $ret;
/*  6955 */                     $ret = Sk.misceval.callsimOrSuspend($lattr492);
/*  6956 */                     $blk = 3; /* allowing case fallthrough */
/*  6957 */                 case 3:
/*  6958 */                     /* --- function return or resume suspension --- */
/*  6959 */                     if ($ret && $ret.$isSuspension) {
/*  6960 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 141, 22);
/*  6961 */                     }
/*  6962 */                     var $call493 = $ret;
/*  6963 */                     //
/*  6964 */                     // line 141:
/*  6965 */                     //         self.normal = normal.normalized()
/*  6966 */                     //                       ^
/*  6967 */                     //
/*  6968 */                     $currLineNo = 141;
/*  6969 */                     $currColNo = 22;
/*  6970 */ 
/*  6971 */                     if (self === undefined) {
/*  6972 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6973 */                     }
/*  6974 */                     $ret = Sk.abstr.sattr(self, 'normal', $call493, true);
/*  6975 */                     $blk = 4; /* allowing case fallthrough */
/*  6976 */                 case 4:
/*  6977 */                     /* --- function return or resume suspension --- */
/*  6978 */                     if ($ret && $ret.$isSuspension) {
/*  6979 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 141, 8);
/*  6980 */                     }
/*  6981 */                     return Sk.builtin.none.none$;
/*  6982 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6983 */                 }
/*  6984 */             } catch (err) {
/*  6985 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6986 */                     err = new Sk.builtin.ExternalError(err);
/*  6987 */                 }
/*  6988 */                 err.traceback.push({
/*  6989 */                     lineno: $currLineNo,
/*  6990 */                     colno: $currColNo,
/*  6991 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  6992 */                 });
/*  6993 */                 if ($exc.length > 0) {
/*  6994 */                     $err = err;
/*  6995 */                     $blk = $exc.pop();
/*  6996 */                     continue;
/*  6997 */                 } else {
/*  6998 */                     throw err;
/*  6999 */                 }
/*  7000 */             }
/*  7001 */         }
/*  7002 */     });
/*  7003 */     var $scope495 = (function $__repr__496$(self) {
/*  7004 */         var self, self, self, $str497, $loadgbl498, $str497, $loadgbl498, $lattr499, $str497, $loadgbl498, $lattr499, $call500, $elem501, $loadgbl502, $str497, $loadgbl498, $lattr499, $call500, $elem501, $loadgbl502, $lattr503;
/*  7005 */         var $wakeFromSuspension = function() {
/*  7006 */             var susp = $scope495.$wakingSuspension;
/*  7007 */             delete $scope495.$wakingSuspension;
/*  7008 */             $blk = susp.$blk;
/*  7009 */             $loc = susp.$loc;
/*  7010 */             $gbl = susp.$gbl;
/*  7011 */             $exc = susp.$exc;
/*  7012 */             $err = susp.$err;
/*  7013 */             $postfinally = susp.$postfinally;
/*  7014 */             $currLineNo = susp.$lineno;
/*  7015 */             $currColNo = susp.$colno;
/*  7016 */             Sk.lastYield = Date.now();
/*  7017 */             self = susp.$tmps.self;
/*  7018 */             $str497 = susp.$tmps.$str497;
/*  7019 */             $loadgbl498 = susp.$tmps.$loadgbl498;
/*  7020 */             $lattr499 = susp.$tmps.$lattr499;
/*  7021 */             $call500 = susp.$tmps.$call500;
/*  7022 */             $elem501 = susp.$tmps.$elem501;
/*  7023 */             $loadgbl502 = susp.$tmps.$loadgbl502;
/*  7024 */             $lattr503 = susp.$tmps.$lattr503;
/*  7025 */             try {
/*  7026 */                 $ret = susp.child.resume();
/*  7027 */             } catch (err) {
/*  7028 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7029 */                     err = new Sk.builtin.ExternalError(err);
/*  7030 */                 }
/*  7031 */                 err.traceback.push({
/*  7032 */                     lineno: $currLineNo,
/*  7033 */                     colno: $currColNo,
/*  7034 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7035 */                 });
/*  7036 */                 if ($exc.length > 0) {
/*  7037 */                     $err = err;
/*  7038 */                     $blk = $exc.pop();
/*  7039 */                 } else {
/*  7040 */                     throw err;
/*  7041 */                 }
/*  7042 */             }
/*  7043 */         };
/*  7044 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7045 */             var susp = new Sk.misceval.Suspension();
/*  7046 */             susp.child = $child;
/*  7047 */             susp.resume = function() {
/*  7048 */                 $scope495.$wakingSuspension = susp;
/*  7049 */                 return $scope495();
/*  7050 */             };
/*  7051 */             susp.data = susp.child.data;
/*  7052 */             susp.$blk = $blk;
/*  7053 */             susp.$loc = $loc;
/*  7054 */             susp.$gbl = $gbl;
/*  7055 */             susp.$exc = $exc;
/*  7056 */             susp.$err = $err;
/*  7057 */             susp.$postfinally = $postfinally;
/*  7058 */             susp.$filename = $filename;
/*  7059 */             susp.$lineno = $lineno;
/*  7060 */             susp.$colno = $colno;
/*  7061 */             susp.optional = susp.child.optional;
/*  7062 */             susp.$tmps = {
/*  7063 */                 "self": self,
/*  7064 */                 "$str497": $str497,
/*  7065 */                 "$loadgbl498": $loadgbl498,
/*  7066 */                 "$lattr499": $lattr499,
/*  7067 */                 "$call500": $call500,
/*  7068 */                 "$elem501": $elem501,
/*  7069 */                 "$loadgbl502": $loadgbl502,
/*  7070 */                 "$lattr503": $lattr503
/*  7071 */             };
/*  7072 */             return susp;
/*  7073 */         };
/*  7074 */         var $blk = 0,
/*  7075 */             $exc = [],
/*  7076 */             $loc = {},
/*  7077 */             $gbl = this,
/*  7078 */             $err = undefined,
/*  7079 */             $ret = undefined,
/*  7080 */             $postfinally = undefined,
/*  7081 */             $currLineNo = undefined,
/*  7082 */             $currColNo = undefined;
/*  7083 */         if ($scope495.$wakingSuspension !== undefined) {
/*  7084 */             $wakeFromSuspension();
/*  7085 */         } else {
/*  7086 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  7087 */         }
/*  7088 */         while (true) {
/*  7089 */             try {
/*  7090 */                 switch ($blk) {
/*  7091 */                 case 0:
/*  7092 */                     /* --- codeobj entry --- */
/*  7093 */                     if (self === undefined) {
/*  7094 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7095 */                     }
/*  7096 */ 
/*  7097 */                     //
/*  7098 */                     // line 144:
/*  7099 */                     //         return 'Halfspace(%s,%s)' % (repr(self.point), repr(self.normal))
/*  7100 */                     //         ^
/*  7101 */                     //
/*  7102 */                     $currLineNo = 144;
/*  7103 */                     $currColNo = 8;
/*  7104 */ 
/*  7105 */                     var $str497 = new Sk.builtins['str']('Halfspace(%s,%s)');
/*  7106 */                     var $loadgbl498 = Sk.misceval.loadname('repr', $gbl);
/*  7107 */                     if (self === undefined) {
/*  7108 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7109 */                     }
/*  7110 */                     $ret = Sk.abstr.gattr(self, 'point', true);
/*  7111 */                     $blk = 1; /* allowing case fallthrough */
/*  7112 */                 case 1:
/*  7113 */                     /* --- function return or resume suspension --- */
/*  7114 */                     if ($ret && $ret.$isSuspension) {
/*  7115 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 144, 42);
/*  7116 */                     }
/*  7117 */                     var $lattr499 = $ret;
/*  7118 */                     $ret;
/*  7119 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl498, $lattr499);
/*  7120 */                     $blk = 2; /* allowing case fallthrough */
/*  7121 */                 case 2:
/*  7122 */                     /* --- function return or resume suspension --- */
/*  7123 */                     if ($ret && $ret.$isSuspension) {
/*  7124 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 144, 37);
/*  7125 */                     }
/*  7126 */                     var $call500 = $ret;
/*  7127 */                     //
/*  7128 */                     // line 144:
/*  7129 */                     //         return 'Halfspace(%s,%s)' % (repr(self.point), repr(self.normal))
/*  7130 */                     //                                      ^
/*  7131 */                     //
/*  7132 */                     $currLineNo = 144;
/*  7133 */                     $currColNo = 37;
/*  7134 */ 
/*  7135 */                     var $elem501 = $call500;
/*  7136 */                     var $loadgbl502 = Sk.misceval.loadname('repr', $gbl);
/*  7137 */                     if (self === undefined) {
/*  7138 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7139 */                     }
/*  7140 */                     $ret = Sk.abstr.gattr(self, 'normal', true);
/*  7141 */                     $blk = 3; /* allowing case fallthrough */
/*  7142 */                 case 3:
/*  7143 */                     /* --- function return or resume suspension --- */
/*  7144 */                     if ($ret && $ret.$isSuspension) {
/*  7145 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 144, 60);
/*  7146 */                     }
/*  7147 */                     var $lattr503 = $ret;
/*  7148 */                     $ret;
/*  7149 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl502, $lattr503);
/*  7150 */                     $blk = 4; /* allowing case fallthrough */
/*  7151 */                 case 4:
/*  7152 */                     /* --- function return or resume suspension --- */
/*  7153 */                     if ($ret && $ret.$isSuspension) {
/*  7154 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 144, 55);
/*  7155 */                     }
/*  7156 */                     var $call504 = $ret;
/*  7157 */                     //
/*  7158 */                     // line 144:
/*  7159 */                     //         return 'Halfspace(%s,%s)' % (repr(self.point), repr(self.normal))
/*  7160 */                     //                                                        ^
/*  7161 */                     //
/*  7162 */                     $currLineNo = 144;
/*  7163 */                     $currColNo = 55;
/*  7164 */ 
/*  7165 */                     var $elem505 = $call504;
/*  7166 */                     var $loadtuple506 = new Sk.builtins['tuple']([$elem501, $elem505]);
/*  7167 */                     var $binop507 = Sk.abstr.numberBinOp($str497, $loadtuple506, 'Mod');
/*  7168 */                     return $binop507;
/*  7169 */                     return Sk.builtin.none.none$;
/*  7170 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7171 */                 }
/*  7172 */             } catch (err) {
/*  7173 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7174 */                     err = new Sk.builtin.ExternalError(err);
/*  7175 */                 }
/*  7176 */                 err.traceback.push({
/*  7177 */                     lineno: $currLineNo,
/*  7178 */                     colno: $currColNo,
/*  7179 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7180 */                 });
/*  7181 */                 if ($exc.length > 0) {
/*  7182 */                     $err = err;
/*  7183 */                     $blk = $exc.pop();
/*  7184 */                     continue;
/*  7185 */                 } else {
/*  7186 */                     throw err;
/*  7187 */                 }
/*  7188 */             }
/*  7189 */         }
/*  7190 */     });
/*  7191 */     var $scope509 = (function $intersectionTime510$(self, ray) {
/*  7192 */         var v; /* locals */
/*  7193 */         var ray, ray, self, self, v, v, v, $lattr511, $lattr511, $lattr512, $lattr511, $lattr512, $lattr513;
/*  7194 */         var $wakeFromSuspension = function() {
/*  7195 */             var susp = $scope509.$wakingSuspension;
/*  7196 */             delete $scope509.$wakingSuspension;
/*  7197 */             $blk = susp.$blk;
/*  7198 */             $loc = susp.$loc;
/*  7199 */             $gbl = susp.$gbl;
/*  7200 */             $exc = susp.$exc;
/*  7201 */             $err = susp.$err;
/*  7202 */             $postfinally = susp.$postfinally;
/*  7203 */             $currLineNo = susp.$lineno;
/*  7204 */             $currColNo = susp.$colno;
/*  7205 */             Sk.lastYield = Date.now();
/*  7206 */             ray = susp.$tmps.ray;
/*  7207 */             self = susp.$tmps.self;
/*  7208 */             v = susp.$tmps.v;
/*  7209 */             $lattr511 = susp.$tmps.$lattr511;
/*  7210 */             $lattr512 = susp.$tmps.$lattr512;
/*  7211 */             $lattr513 = susp.$tmps.$lattr513;
/*  7212 */             try {
/*  7213 */                 $ret = susp.child.resume();
/*  7214 */             } catch (err) {
/*  7215 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7216 */                     err = new Sk.builtin.ExternalError(err);
/*  7217 */                 }
/*  7218 */                 err.traceback.push({
/*  7219 */                     lineno: $currLineNo,
/*  7220 */                     colno: $currColNo,
/*  7221 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7222 */                 });
/*  7223 */                 if ($exc.length > 0) {
/*  7224 */                     $err = err;
/*  7225 */                     $blk = $exc.pop();
/*  7226 */                 } else {
/*  7227 */                     throw err;
/*  7228 */                 }
/*  7229 */             }
/*  7230 */         };
/*  7231 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7232 */             var susp = new Sk.misceval.Suspension();
/*  7233 */             susp.child = $child;
/*  7234 */             susp.resume = function() {
/*  7235 */                 $scope509.$wakingSuspension = susp;
/*  7236 */                 return $scope509();
/*  7237 */             };
/*  7238 */             susp.data = susp.child.data;
/*  7239 */             susp.$blk = $blk;
/*  7240 */             susp.$loc = $loc;
/*  7241 */             susp.$gbl = $gbl;
/*  7242 */             susp.$exc = $exc;
/*  7243 */             susp.$err = $err;
/*  7244 */             susp.$postfinally = $postfinally;
/*  7245 */             susp.$filename = $filename;
/*  7246 */             susp.$lineno = $lineno;
/*  7247 */             susp.$colno = $colno;
/*  7248 */             susp.optional = susp.child.optional;
/*  7249 */             susp.$tmps = {
/*  7250 */                 "ray": ray,
/*  7251 */                 "self": self,
/*  7252 */                 "v": v,
/*  7253 */                 "$lattr511": $lattr511,
/*  7254 */                 "$lattr512": $lattr512,
/*  7255 */                 "$lattr513": $lattr513
/*  7256 */             };
/*  7257 */             return susp;
/*  7258 */         };
/*  7259 */         var $blk = 0,
/*  7260 */             $exc = [],
/*  7261 */             $loc = {},
/*  7262 */             $gbl = this,
/*  7263 */             $err = undefined,
/*  7264 */             $ret = undefined,
/*  7265 */             $postfinally = undefined,
/*  7266 */             $currLineNo = undefined,
/*  7267 */             $currColNo = undefined;
/*  7268 */         if ($scope509.$wakingSuspension !== undefined) {
/*  7269 */             $wakeFromSuspension();
/*  7270 */         } else {
/*  7271 */             Sk.builtin.pyCheckArgs("intersectionTime", arguments, 2, 2, false, false);
/*  7272 */         }
/*  7273 */         while (true) {
/*  7274 */             try {
/*  7275 */                 switch ($blk) {
/*  7276 */                 case 0:
/*  7277 */                     /* --- codeobj entry --- */
/*  7278 */                     if (self === undefined) {
/*  7279 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7280 */                     }
/*  7281 */                     if (ray === undefined) {
/*  7282 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/*  7283 */                     }
/*  7284 */ 
/*  7285 */                     //
/*  7286 */                     // line 147:
/*  7287 */                     //         v = ray.vector.dot(self.normal)
/*  7288 */                     //         ^
/*  7289 */                     //
/*  7290 */                     $currLineNo = 147;
/*  7291 */                     $currColNo = 8;
/*  7292 */ 
/*  7293 */                     if (ray === undefined) {
/*  7294 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/*  7295 */                     }
/*  7296 */                     $ret = Sk.abstr.gattr(ray, 'vector', true);
/*  7297 */                     $blk = 1; /* allowing case fallthrough */
/*  7298 */                 case 1:
/*  7299 */                     /* --- function return or resume suspension --- */
/*  7300 */                     if ($ret && $ret.$isSuspension) {
/*  7301 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 147, 12);
/*  7302 */                     }
/*  7303 */                     var $lattr511 = $ret;
/*  7304 */                     $ret = Sk.abstr.gattr($lattr511, 'dot', true);
/*  7305 */                     $blk = 2; /* allowing case fallthrough */
/*  7306 */                 case 2:
/*  7307 */                     /* --- function return or resume suspension --- */
/*  7308 */                     if ($ret && $ret.$isSuspension) {
/*  7309 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 147, 12);
/*  7310 */                     }
/*  7311 */                     var $lattr512 = $ret;
/*  7312 */                     if (self === undefined) {
/*  7313 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7314 */                     }
/*  7315 */                     $ret = Sk.abstr.gattr(self, 'normal', true);
/*  7316 */                     $blk = 3; /* allowing case fallthrough */
/*  7317 */                 case 3:
/*  7318 */                     /* --- function return or resume suspension --- */
/*  7319 */                     if ($ret && $ret.$isSuspension) {
/*  7320 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 147, 27);
/*  7321 */                     }
/*  7322 */                     var $lattr513 = $ret;
/*  7323 */                     $ret;
/*  7324 */                     $ret = Sk.misceval.callsimOrSuspend($lattr512, $lattr513);
/*  7325 */                     $blk = 4; /* allowing case fallthrough */
/*  7326 */                 case 4:
/*  7327 */                     /* --- function return or resume suspension --- */
/*  7328 */                     if ($ret && $ret.$isSuspension) {
/*  7329 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 147, 12);
/*  7330 */                     }
/*  7331 */                     var $call514 = $ret;
/*  7332 */                     //
/*  7333 */                     // line 147:
/*  7334 */                     //         v = ray.vector.dot(self.normal)
/*  7335 */                     //             ^
/*  7336 */                     //
/*  7337 */                     $currLineNo = 147;
/*  7338 */                     $currColNo = 12;
/*  7339 */ 
/*  7340 */                     v = $call514;
/*  7341 */                     //
/*  7342 */                     // line 148:
/*  7343 */                     //         if v:
/*  7344 */                     //         ^
/*  7345 */                     //
/*  7346 */                     $currLineNo = 148;
/*  7347 */                     $currColNo = 8;
/*  7348 */ 
/*  7349 */                     if (v === undefined) {
/*  7350 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  7351 */                     }
/*  7352 */                     var $jfalse515 = (v === false || !Sk.misceval.isTrue(v));
/*  7353 */                     if ($jfalse515) { /*test failed */
/*  7354 */                         $blk = 6;
/*  7355 */                         continue;
/*  7356 */                     }
/*  7357 */                     //
/*  7358 */                     // line 149:
/*  7359 */                     //             return 1 / -v
/*  7360 */                     //             ^
/*  7361 */                     //
/*  7362 */                     $currLineNo = 149;
/*  7363 */                     $currColNo = 12;
/*  7364 */ 
/*  7365 */                     if (v === undefined) {
/*  7366 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  7367 */                     }
/*  7368 */                     var $unaryop516 = Sk.abstr.numberUnaryOp(v, 'USub');
/*  7369 */                     var $binop517 = Sk.abstr.numberBinOp(new Sk.builtin.int_(1), $unaryop516, 'Div');
/*  7370 */                     return $binop517;
/*  7371 */                     $blk = 5; /* allowing case fallthrough */
/*  7372 */                 case 5:
/*  7373 */                     /* --- end of if --- */
/*  7374 */                     return Sk.builtin.none.none$;
/*  7375 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7376 */                 case 6:
/*  7377 */                     /* --- next branch of if --- */
/*  7378 */                     //
/*  7379 */                     // line 151:
/*  7380 */                     //             return None
/*  7381 */                     //             ^
/*  7382 */                     //
/*  7383 */                     $currLineNo = 151;
/*  7384 */                     $currColNo = 12;
/*  7385 */ 
/*  7386 */                     return Sk.builtin.none.none$;
/*  7387 */                     $blk = 5; /* jump */
/*  7388 */                     continue;
/*  7389 */                 }
/*  7390 */             } catch (err) {
/*  7391 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7392 */                     err = new Sk.builtin.ExternalError(err);
/*  7393 */                 }
/*  7394 */                 err.traceback.push({
/*  7395 */                     lineno: $currLineNo,
/*  7396 */                     colno: $currColNo,
/*  7397 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7398 */                 });
/*  7399 */                 if ($exc.length > 0) {
/*  7400 */                     $err = err;
/*  7401 */                     $blk = $exc.pop();
/*  7402 */                     continue;
/*  7403 */                 } else {
/*  7404 */                     throw err;
/*  7405 */                 }
/*  7406 */             }
/*  7407 */         }
/*  7408 */     });
/*  7409 */     var $scope519 = (function $normalAt520$(self, p) {
/*  7410 */         var p, self, self;
/*  7411 */         var $wakeFromSuspension = function() {
/*  7412 */             var susp = $scope519.$wakingSuspension;
/*  7413 */             delete $scope519.$wakingSuspension;
/*  7414 */             $blk = susp.$blk;
/*  7415 */             $loc = susp.$loc;
/*  7416 */             $gbl = susp.$gbl;
/*  7417 */             $exc = susp.$exc;
/*  7418 */             $err = susp.$err;
/*  7419 */             $postfinally = susp.$postfinally;
/*  7420 */             $currLineNo = susp.$lineno;
/*  7421 */             $currColNo = susp.$colno;
/*  7422 */             Sk.lastYield = Date.now();
/*  7423 */             p = susp.$tmps.p;
/*  7424 */             self = susp.$tmps.self;
/*  7425 */             try {
/*  7426 */                 $ret = susp.child.resume();
/*  7427 */             } catch (err) {
/*  7428 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7429 */                     err = new Sk.builtin.ExternalError(err);
/*  7430 */                 }
/*  7431 */                 err.traceback.push({
/*  7432 */                     lineno: $currLineNo,
/*  7433 */                     colno: $currColNo,
/*  7434 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7435 */                 });
/*  7436 */                 if ($exc.length > 0) {
/*  7437 */                     $err = err;
/*  7438 */                     $blk = $exc.pop();
/*  7439 */                 } else {
/*  7440 */                     throw err;
/*  7441 */                 }
/*  7442 */             }
/*  7443 */         };
/*  7444 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7445 */             var susp = new Sk.misceval.Suspension();
/*  7446 */             susp.child = $child;
/*  7447 */             susp.resume = function() {
/*  7448 */                 $scope519.$wakingSuspension = susp;
/*  7449 */                 return $scope519();
/*  7450 */             };
/*  7451 */             susp.data = susp.child.data;
/*  7452 */             susp.$blk = $blk;
/*  7453 */             susp.$loc = $loc;
/*  7454 */             susp.$gbl = $gbl;
/*  7455 */             susp.$exc = $exc;
/*  7456 */             susp.$err = $err;
/*  7457 */             susp.$postfinally = $postfinally;
/*  7458 */             susp.$filename = $filename;
/*  7459 */             susp.$lineno = $lineno;
/*  7460 */             susp.$colno = $colno;
/*  7461 */             susp.optional = susp.child.optional;
/*  7462 */             susp.$tmps = {
/*  7463 */                 "p": p,
/*  7464 */                 "self": self
/*  7465 */             };
/*  7466 */             return susp;
/*  7467 */         };
/*  7468 */         var $blk = 0,
/*  7469 */             $exc = [],
/*  7470 */             $loc = {},
/*  7471 */             $gbl = this,
/*  7472 */             $err = undefined,
/*  7473 */             $ret = undefined,
/*  7474 */             $postfinally = undefined,
/*  7475 */             $currLineNo = undefined,
/*  7476 */             $currColNo = undefined;
/*  7477 */         if ($scope519.$wakingSuspension !== undefined) {
/*  7478 */             $wakeFromSuspension();
/*  7479 */         } else {
/*  7480 */             Sk.builtin.pyCheckArgs("normalAt", arguments, 2, 2, false, false);
/*  7481 */         }
/*  7482 */         while (true) {
/*  7483 */             try {
/*  7484 */                 switch ($blk) {
/*  7485 */                 case 0:
/*  7486 */                     /* --- codeobj entry --- */
/*  7487 */                     if (self === undefined) {
/*  7488 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7489 */                     }
/*  7490 */                     if (p === undefined) {
/*  7491 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7492 */                     }
/*  7493 */ 
/*  7494 */                     //
/*  7495 */                     // line 154:
/*  7496 */                     //         return self.normal
/*  7497 */                     //         ^
/*  7498 */                     //
/*  7499 */                     $currLineNo = 154;
/*  7500 */                     $currColNo = 8;
/*  7501 */ 
/*  7502 */                     if (self === undefined) {
/*  7503 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7504 */                     }
/*  7505 */                     $ret = Sk.abstr.gattr(self, 'normal', true);
/*  7506 */                     $blk = 1; /* allowing case fallthrough */
/*  7507 */                 case 1:
/*  7508 */                     /* --- function return or resume suspension --- */
/*  7509 */                     if ($ret && $ret.$isSuspension) {
/*  7510 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 154, 15);
/*  7511 */                     }
/*  7512 */                     var $lattr521 = $ret;
/*  7513 */                     return $lattr521;
/*  7514 */                     return Sk.builtin.none.none$;
/*  7515 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7516 */                 }
/*  7517 */             } catch (err) {
/*  7518 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7519 */                     err = new Sk.builtin.ExternalError(err);
/*  7520 */                 }
/*  7521 */                 err.traceback.push({
/*  7522 */                     lineno: $currLineNo,
/*  7523 */                     colno: $currColNo,
/*  7524 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7525 */                 });
/*  7526 */                 if ($exc.length > 0) {
/*  7527 */                     $err = err;
/*  7528 */                     $blk = $exc.pop();
/*  7529 */                     continue;
/*  7530 */                 } else {
/*  7531 */                     throw err;
/*  7532 */                 }
/*  7533 */             }
/*  7534 */         }
/*  7535 */     });
/*  7536 */     var $scope525 = (function $Ray$class_outer($globals, $locals, $rest) {
/*  7537 */         var $gbl = $globals,
/*  7538 */             $loc = $locals;
/*  7539 */         (function $Ray$_closure() {
/*  7540 */             var $blk = 0,
/*  7541 */                 $exc = [],
/*  7542 */                 $ret = undefined,
/*  7543 */                 $postfinally = undefined,
/*  7544 */                 $currLineNo = undefined,
/*  7545 */                 $currColNo = undefined;
/*  7546 */             while (true) {
/*  7547 */                 try {
/*  7548 */                     switch ($blk) {
/*  7549 */                     case 0:
/*  7550 */                         /* --- class entry --- */
/*  7551 */                         //
/*  7552 */                         // line 157:
/*  7553 */                         //     def __init__(self, point, vector):
/*  7554 */                         //     ^
/*  7555 */                         //
/*  7556 */                         $currLineNo = 157;
/*  7557 */                         $currColNo = 4;
/*  7558 */ 
/*  7559 */                         $scope526.co_name = new Sk.builtins['str']('__init__');
/*  7560 */                         $scope526.co_varnames = ['self', 'point', 'vector'];
/*  7561 */                         var $funcobj530 = new Sk.builtins['function']($scope526, $gbl);
/*  7562 */                         $loc.__init__ = $funcobj530;
/*  7563 */                         //
/*  7564 */                         // line 161:
/*  7565 */                         //     def __repr__(self):
/*  7566 */                         //     ^
/*  7567 */                         //
/*  7568 */                         $currLineNo = 161;
/*  7569 */                         $currColNo = 4;
/*  7570 */ 
/*  7571 */                         $scope531.co_name = new Sk.builtins['str']('__repr__');
/*  7572 */                         $scope531.co_varnames = ['self'];
/*  7573 */                         var $funcobj544 = new Sk.builtins['function']($scope531, $gbl);
/*  7574 */                         $loc.__repr__ = $funcobj544;
/*  7575 */                         //
/*  7576 */                         // line 164:
/*  7577 */                         //     def pointAtTime(self, t):
/*  7578 */                         //     ^
/*  7579 */                         //
/*  7580 */                         $currLineNo = 164;
/*  7581 */                         $currColNo = 4;
/*  7582 */ 
/*  7583 */                         $scope545.co_name = new Sk.builtins['str']('pointAtTime');
/*  7584 */                         $scope545.co_varnames = ['self', 't'];
/*  7585 */                         var $funcobj552 = new Sk.builtins['function']($scope545, $gbl);
/*  7586 */                         $loc.pointAtTime = $funcobj552;
/*  7587 */                         return;
/*  7588 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7589 */                     }
/*  7590 */                 } catch (err) {
/*  7591 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  7592 */                         err = new Sk.builtin.ExternalError(err);
/*  7593 */                     }
/*  7594 */                     err.traceback.push({
/*  7595 */                         lineno: $currLineNo,
/*  7596 */                         colno: $currColNo,
/*  7597 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7598 */                     });
/*  7599 */                     if ($exc.length > 0) {
/*  7600 */                         $err = err;
/*  7601 */                         $blk = $exc.pop();
/*  7602 */                         continue;
/*  7603 */                     } else {
/*  7604 */                         throw err;
/*  7605 */                     }
/*  7606 */                 }
/*  7607 */             }
/*  7608 */         }).apply(null, $rest);
/*  7609 */     });
/*  7610 */     var $scope526 = (function $__init__527$(self, point, vector) {
/*  7611 */         var point, point, self, self, self, vector, vector, $lattr528, $lattr528, $call529;
/*  7612 */         var $wakeFromSuspension = function() {
/*  7613 */             var susp = $scope526.$wakingSuspension;
/*  7614 */             delete $scope526.$wakingSuspension;
/*  7615 */             $blk = susp.$blk;
/*  7616 */             $loc = susp.$loc;
/*  7617 */             $gbl = susp.$gbl;
/*  7618 */             $exc = susp.$exc;
/*  7619 */             $err = susp.$err;
/*  7620 */             $postfinally = susp.$postfinally;
/*  7621 */             $currLineNo = susp.$lineno;
/*  7622 */             $currColNo = susp.$colno;
/*  7623 */             Sk.lastYield = Date.now();
/*  7624 */             point = susp.$tmps.point;
/*  7625 */             self = susp.$tmps.self;
/*  7626 */             vector = susp.$tmps.vector;
/*  7627 */             $lattr528 = susp.$tmps.$lattr528;
/*  7628 */             $call529 = susp.$tmps.$call529;
/*  7629 */             try {
/*  7630 */                 $ret = susp.child.resume();
/*  7631 */             } catch (err) {
/*  7632 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7633 */                     err = new Sk.builtin.ExternalError(err);
/*  7634 */                 }
/*  7635 */                 err.traceback.push({
/*  7636 */                     lineno: $currLineNo,
/*  7637 */                     colno: $currColNo,
/*  7638 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7639 */                 });
/*  7640 */                 if ($exc.length > 0) {
/*  7641 */                     $err = err;
/*  7642 */                     $blk = $exc.pop();
/*  7643 */                 } else {
/*  7644 */                     throw err;
/*  7645 */                 }
/*  7646 */             }
/*  7647 */         };
/*  7648 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7649 */             var susp = new Sk.misceval.Suspension();
/*  7650 */             susp.child = $child;
/*  7651 */             susp.resume = function() {
/*  7652 */                 $scope526.$wakingSuspension = susp;
/*  7653 */                 return $scope526();
/*  7654 */             };
/*  7655 */             susp.data = susp.child.data;
/*  7656 */             susp.$blk = $blk;
/*  7657 */             susp.$loc = $loc;
/*  7658 */             susp.$gbl = $gbl;
/*  7659 */             susp.$exc = $exc;
/*  7660 */             susp.$err = $err;
/*  7661 */             susp.$postfinally = $postfinally;
/*  7662 */             susp.$filename = $filename;
/*  7663 */             susp.$lineno = $lineno;
/*  7664 */             susp.$colno = $colno;
/*  7665 */             susp.optional = susp.child.optional;
/*  7666 */             susp.$tmps = {
/*  7667 */                 "point": point,
/*  7668 */                 "self": self,
/*  7669 */                 "vector": vector,
/*  7670 */                 "$lattr528": $lattr528,
/*  7671 */                 "$call529": $call529
/*  7672 */             };
/*  7673 */             return susp;
/*  7674 */         };
/*  7675 */         var $blk = 0,
/*  7676 */             $exc = [],
/*  7677 */             $loc = {},
/*  7678 */             $gbl = this,
/*  7679 */             $err = undefined,
/*  7680 */             $ret = undefined,
/*  7681 */             $postfinally = undefined,
/*  7682 */             $currLineNo = undefined,
/*  7683 */             $currColNo = undefined;
/*  7684 */         if ($scope526.$wakingSuspension !== undefined) {
/*  7685 */             $wakeFromSuspension();
/*  7686 */         } else {
/*  7687 */             Sk.builtin.pyCheckArgs("__init__", arguments, 3, 3, false, false);
/*  7688 */         }
/*  7689 */         while (true) {
/*  7690 */             try {
/*  7691 */                 switch ($blk) {
/*  7692 */                 case 0:
/*  7693 */                     /* --- codeobj entry --- */
/*  7694 */                     if (self === undefined) {
/*  7695 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7696 */                     }
/*  7697 */                     if (point === undefined) {
/*  7698 */                         throw new Sk.builtin.UnboundLocalError('local variable \'point\' referenced before assignment');
/*  7699 */                     }
/*  7700 */                     if (vector === undefined) {
/*  7701 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vector\' referenced before assignment');
/*  7702 */                     }
/*  7703 */ 
/*  7704 */                     //
/*  7705 */                     // line 158:
/*  7706 */                     //         self.point = point
/*  7707 */                     //         ^
/*  7708 */                     //
/*  7709 */                     $currLineNo = 158;
/*  7710 */                     $currColNo = 8;
/*  7711 */ 
/*  7712 */                     if (point === undefined) {
/*  7713 */                         throw new Sk.builtin.UnboundLocalError('local variable \'point\' referenced before assignment');
/*  7714 */                     }
/*  7715 */                     if (self === undefined) {
/*  7716 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7717 */                     }
/*  7718 */                     $ret = Sk.abstr.sattr(self, 'point', point, true);
/*  7719 */                     $blk = 1; /* allowing case fallthrough */
/*  7720 */                 case 1:
/*  7721 */                     /* --- function return or resume suspension --- */
/*  7722 */                     if ($ret && $ret.$isSuspension) {
/*  7723 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 158, 8);
/*  7724 */                     }
/*  7725 */                     //
/*  7726 */                     // line 159:
/*  7727 */                     //         self.vector = vector.normalized()
/*  7728 */                     //         ^
/*  7729 */                     //
/*  7730 */                     $currLineNo = 159;
/*  7731 */                     $currColNo = 8;
/*  7732 */ 
/*  7733 */                     if (vector === undefined) {
/*  7734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vector\' referenced before assignment');
/*  7735 */                     }
/*  7736 */                     $ret = Sk.abstr.gattr(vector, 'normalized', true);
/*  7737 */                     $blk = 2; /* allowing case fallthrough */
/*  7738 */                 case 2:
/*  7739 */                     /* --- function return or resume suspension --- */
/*  7740 */                     if ($ret && $ret.$isSuspension) {
/*  7741 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 159, 22);
/*  7742 */                     }
/*  7743 */                     var $lattr528 = $ret;
/*  7744 */                     $ret;
/*  7745 */                     $ret = Sk.misceval.callsimOrSuspend($lattr528);
/*  7746 */                     $blk = 3; /* allowing case fallthrough */
/*  7747 */                 case 3:
/*  7748 */                     /* --- function return or resume suspension --- */
/*  7749 */                     if ($ret && $ret.$isSuspension) {
/*  7750 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 159, 22);
/*  7751 */                     }
/*  7752 */                     var $call529 = $ret;
/*  7753 */                     //
/*  7754 */                     // line 159:
/*  7755 */                     //         self.vector = vector.normalized()
/*  7756 */                     //                       ^
/*  7757 */                     //
/*  7758 */                     $currLineNo = 159;
/*  7759 */                     $currColNo = 22;
/*  7760 */ 
/*  7761 */                     if (self === undefined) {
/*  7762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7763 */                     }
/*  7764 */                     $ret = Sk.abstr.sattr(self, 'vector', $call529, true);
/*  7765 */                     $blk = 4; /* allowing case fallthrough */
/*  7766 */                 case 4:
/*  7767 */                     /* --- function return or resume suspension --- */
/*  7768 */                     if ($ret && $ret.$isSuspension) {
/*  7769 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 159, 8);
/*  7770 */                     }
/*  7771 */                     return Sk.builtin.none.none$;
/*  7772 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7773 */                 }
/*  7774 */             } catch (err) {
/*  7775 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7776 */                     err = new Sk.builtin.ExternalError(err);
/*  7777 */                 }
/*  7778 */                 err.traceback.push({
/*  7779 */                     lineno: $currLineNo,
/*  7780 */                     colno: $currColNo,
/*  7781 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7782 */                 });
/*  7783 */                 if ($exc.length > 0) {
/*  7784 */                     $err = err;
/*  7785 */                     $blk = $exc.pop();
/*  7786 */                     continue;
/*  7787 */                 } else {
/*  7788 */                     throw err;
/*  7789 */                 }
/*  7790 */             }
/*  7791 */         }
/*  7792 */     });
/*  7793 */     var $scope531 = (function $__repr__532$(self) {
/*  7794 */         var self, self, self, $str533, $loadgbl534, $str533, $loadgbl534, $lattr535, $str533, $loadgbl534, $lattr535, $call536, $elem537, $loadgbl538, $str533, $loadgbl534, $lattr535, $call536, $elem537, $loadgbl538, $lattr539;
/*  7795 */         var $wakeFromSuspension = function() {
/*  7796 */             var susp = $scope531.$wakingSuspension;
/*  7797 */             delete $scope531.$wakingSuspension;
/*  7798 */             $blk = susp.$blk;
/*  7799 */             $loc = susp.$loc;
/*  7800 */             $gbl = susp.$gbl;
/*  7801 */             $exc = susp.$exc;
/*  7802 */             $err = susp.$err;
/*  7803 */             $postfinally = susp.$postfinally;
/*  7804 */             $currLineNo = susp.$lineno;
/*  7805 */             $currColNo = susp.$colno;
/*  7806 */             Sk.lastYield = Date.now();
/*  7807 */             self = susp.$tmps.self;
/*  7808 */             $str533 = susp.$tmps.$str533;
/*  7809 */             $loadgbl534 = susp.$tmps.$loadgbl534;
/*  7810 */             $lattr535 = susp.$tmps.$lattr535;
/*  7811 */             $call536 = susp.$tmps.$call536;
/*  7812 */             $elem537 = susp.$tmps.$elem537;
/*  7813 */             $loadgbl538 = susp.$tmps.$loadgbl538;
/*  7814 */             $lattr539 = susp.$tmps.$lattr539;
/*  7815 */             try {
/*  7816 */                 $ret = susp.child.resume();
/*  7817 */             } catch (err) {
/*  7818 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7819 */                     err = new Sk.builtin.ExternalError(err);
/*  7820 */                 }
/*  7821 */                 err.traceback.push({
/*  7822 */                     lineno: $currLineNo,
/*  7823 */                     colno: $currColNo,
/*  7824 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7825 */                 });
/*  7826 */                 if ($exc.length > 0) {
/*  7827 */                     $err = err;
/*  7828 */                     $blk = $exc.pop();
/*  7829 */                 } else {
/*  7830 */                     throw err;
/*  7831 */                 }
/*  7832 */             }
/*  7833 */         };
/*  7834 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7835 */             var susp = new Sk.misceval.Suspension();
/*  7836 */             susp.child = $child;
/*  7837 */             susp.resume = function() {
/*  7838 */                 $scope531.$wakingSuspension = susp;
/*  7839 */                 return $scope531();
/*  7840 */             };
/*  7841 */             susp.data = susp.child.data;
/*  7842 */             susp.$blk = $blk;
/*  7843 */             susp.$loc = $loc;
/*  7844 */             susp.$gbl = $gbl;
/*  7845 */             susp.$exc = $exc;
/*  7846 */             susp.$err = $err;
/*  7847 */             susp.$postfinally = $postfinally;
/*  7848 */             susp.$filename = $filename;
/*  7849 */             susp.$lineno = $lineno;
/*  7850 */             susp.$colno = $colno;
/*  7851 */             susp.optional = susp.child.optional;
/*  7852 */             susp.$tmps = {
/*  7853 */                 "self": self,
/*  7854 */                 "$str533": $str533,
/*  7855 */                 "$loadgbl534": $loadgbl534,
/*  7856 */                 "$lattr535": $lattr535,
/*  7857 */                 "$call536": $call536,
/*  7858 */                 "$elem537": $elem537,
/*  7859 */                 "$loadgbl538": $loadgbl538,
/*  7860 */                 "$lattr539": $lattr539
/*  7861 */             };
/*  7862 */             return susp;
/*  7863 */         };
/*  7864 */         var $blk = 0,
/*  7865 */             $exc = [],
/*  7866 */             $loc = {},
/*  7867 */             $gbl = this,
/*  7868 */             $err = undefined,
/*  7869 */             $ret = undefined,
/*  7870 */             $postfinally = undefined,
/*  7871 */             $currLineNo = undefined,
/*  7872 */             $currColNo = undefined;
/*  7873 */         if ($scope531.$wakingSuspension !== undefined) {
/*  7874 */             $wakeFromSuspension();
/*  7875 */         } else {
/*  7876 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  7877 */         }
/*  7878 */         while (true) {
/*  7879 */             try {
/*  7880 */                 switch ($blk) {
/*  7881 */                 case 0:
/*  7882 */                     /* --- codeobj entry --- */
/*  7883 */                     if (self === undefined) {
/*  7884 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7885 */                     }
/*  7886 */ 
/*  7887 */                     //
/*  7888 */                     // line 162:
/*  7889 */                     //         return 'Ray(%s,%s)' % (repr(self.point), repr(self.vector))
/*  7890 */                     //         ^
/*  7891 */                     //
/*  7892 */                     $currLineNo = 162;
/*  7893 */                     $currColNo = 8;
/*  7894 */ 
/*  7895 */                     var $str533 = new Sk.builtins['str']('Ray(%s,%s)');
/*  7896 */                     var $loadgbl534 = Sk.misceval.loadname('repr', $gbl);
/*  7897 */                     if (self === undefined) {
/*  7898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7899 */                     }
/*  7900 */                     $ret = Sk.abstr.gattr(self, 'point', true);
/*  7901 */                     $blk = 1; /* allowing case fallthrough */
/*  7902 */                 case 1:
/*  7903 */                     /* --- function return or resume suspension --- */
/*  7904 */                     if ($ret && $ret.$isSuspension) {
/*  7905 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 162, 36);
/*  7906 */                     }
/*  7907 */                     var $lattr535 = $ret;
/*  7908 */                     $ret;
/*  7909 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl534, $lattr535);
/*  7910 */                     $blk = 2; /* allowing case fallthrough */
/*  7911 */                 case 2:
/*  7912 */                     /* --- function return or resume suspension --- */
/*  7913 */                     if ($ret && $ret.$isSuspension) {
/*  7914 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 162, 31);
/*  7915 */                     }
/*  7916 */                     var $call536 = $ret;
/*  7917 */                     //
/*  7918 */                     // line 162:
/*  7919 */                     //         return 'Ray(%s,%s)' % (repr(self.point), repr(self.vector))
/*  7920 */                     //                                ^
/*  7921 */                     //
/*  7922 */                     $currLineNo = 162;
/*  7923 */                     $currColNo = 31;
/*  7924 */ 
/*  7925 */                     var $elem537 = $call536;
/*  7926 */                     var $loadgbl538 = Sk.misceval.loadname('repr', $gbl);
/*  7927 */                     if (self === undefined) {
/*  7928 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7929 */                     }
/*  7930 */                     $ret = Sk.abstr.gattr(self, 'vector', true);
/*  7931 */                     $blk = 3; /* allowing case fallthrough */
/*  7932 */                 case 3:
/*  7933 */                     /* --- function return or resume suspension --- */
/*  7934 */                     if ($ret && $ret.$isSuspension) {
/*  7935 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 162, 54);
/*  7936 */                     }
/*  7937 */                     var $lattr539 = $ret;
/*  7938 */                     $ret;
/*  7939 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl538, $lattr539);
/*  7940 */                     $blk = 4; /* allowing case fallthrough */
/*  7941 */                 case 4:
/*  7942 */                     /* --- function return or resume suspension --- */
/*  7943 */                     if ($ret && $ret.$isSuspension) {
/*  7944 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 162, 49);
/*  7945 */                     }
/*  7946 */                     var $call540 = $ret;
/*  7947 */                     //
/*  7948 */                     // line 162:
/*  7949 */                     //         return 'Ray(%s,%s)' % (repr(self.point), repr(self.vector))
/*  7950 */                     //                                                  ^
/*  7951 */                     //
/*  7952 */                     $currLineNo = 162;
/*  7953 */                     $currColNo = 49;
/*  7954 */ 
/*  7955 */                     var $elem541 = $call540;
/*  7956 */                     var $loadtuple542 = new Sk.builtins['tuple']([$elem537, $elem541]);
/*  7957 */                     var $binop543 = Sk.abstr.numberBinOp($str533, $loadtuple542, 'Mod');
/*  7958 */                     return $binop543;
/*  7959 */                     return Sk.builtin.none.none$;
/*  7960 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7961 */                 }
/*  7962 */             } catch (err) {
/*  7963 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7964 */                     err = new Sk.builtin.ExternalError(err);
/*  7965 */                 }
/*  7966 */                 err.traceback.push({
/*  7967 */                     lineno: $currLineNo,
/*  7968 */                     colno: $currColNo,
/*  7969 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  7970 */                 });
/*  7971 */                 if ($exc.length > 0) {
/*  7972 */                     $err = err;
/*  7973 */                     $blk = $exc.pop();
/*  7974 */                     continue;
/*  7975 */                 } else {
/*  7976 */                     throw err;
/*  7977 */                 }
/*  7978 */             }
/*  7979 */         }
/*  7980 */     });
/*  7981 */     var $scope545 = (function $pointAtTime546$(self, t) {
/*  7982 */         var self, self, self, t, t, $lattr547, $lattr547, $lattr548, $lattr547, $lattr548, $lattr549;
/*  7983 */         var $wakeFromSuspension = function() {
/*  7984 */             var susp = $scope545.$wakingSuspension;
/*  7985 */             delete $scope545.$wakingSuspension;
/*  7986 */             $blk = susp.$blk;
/*  7987 */             $loc = susp.$loc;
/*  7988 */             $gbl = susp.$gbl;
/*  7989 */             $exc = susp.$exc;
/*  7990 */             $err = susp.$err;
/*  7991 */             $postfinally = susp.$postfinally;
/*  7992 */             $currLineNo = susp.$lineno;
/*  7993 */             $currColNo = susp.$colno;
/*  7994 */             Sk.lastYield = Date.now();
/*  7995 */             self = susp.$tmps.self;
/*  7996 */             t = susp.$tmps.t;
/*  7997 */             $lattr547 = susp.$tmps.$lattr547;
/*  7998 */             $lattr548 = susp.$tmps.$lattr548;
/*  7999 */             $lattr549 = susp.$tmps.$lattr549;
/*  8000 */             try {
/*  8001 */                 $ret = susp.child.resume();
/*  8002 */             } catch (err) {
/*  8003 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8004 */                     err = new Sk.builtin.ExternalError(err);
/*  8005 */                 }
/*  8006 */                 err.traceback.push({
/*  8007 */                     lineno: $currLineNo,
/*  8008 */                     colno: $currColNo,
/*  8009 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8010 */                 });
/*  8011 */                 if ($exc.length > 0) {
/*  8012 */                     $err = err;
/*  8013 */                     $blk = $exc.pop();
/*  8014 */                 } else {
/*  8015 */                     throw err;
/*  8016 */                 }
/*  8017 */             }
/*  8018 */         };
/*  8019 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8020 */             var susp = new Sk.misceval.Suspension();
/*  8021 */             susp.child = $child;
/*  8022 */             susp.resume = function() {
/*  8023 */                 $scope545.$wakingSuspension = susp;
/*  8024 */                 return $scope545();
/*  8025 */             };
/*  8026 */             susp.data = susp.child.data;
/*  8027 */             susp.$blk = $blk;
/*  8028 */             susp.$loc = $loc;
/*  8029 */             susp.$gbl = $gbl;
/*  8030 */             susp.$exc = $exc;
/*  8031 */             susp.$err = $err;
/*  8032 */             susp.$postfinally = $postfinally;
/*  8033 */             susp.$filename = $filename;
/*  8034 */             susp.$lineno = $lineno;
/*  8035 */             susp.$colno = $colno;
/*  8036 */             susp.optional = susp.child.optional;
/*  8037 */             susp.$tmps = {
/*  8038 */                 "self": self,
/*  8039 */                 "t": t,
/*  8040 */                 "$lattr547": $lattr547,
/*  8041 */                 "$lattr548": $lattr548,
/*  8042 */                 "$lattr549": $lattr549
/*  8043 */             };
/*  8044 */             return susp;
/*  8045 */         };
/*  8046 */         var $blk = 0,
/*  8047 */             $exc = [],
/*  8048 */             $loc = {},
/*  8049 */             $gbl = this,
/*  8050 */             $err = undefined,
/*  8051 */             $ret = undefined,
/*  8052 */             $postfinally = undefined,
/*  8053 */             $currLineNo = undefined,
/*  8054 */             $currColNo = undefined;
/*  8055 */         if ($scope545.$wakingSuspension !== undefined) {
/*  8056 */             $wakeFromSuspension();
/*  8057 */         } else {
/*  8058 */             Sk.builtin.pyCheckArgs("pointAtTime", arguments, 2, 2, false, false);
/*  8059 */         }
/*  8060 */         while (true) {
/*  8061 */             try {
/*  8062 */                 switch ($blk) {
/*  8063 */                 case 0:
/*  8064 */                     /* --- codeobj entry --- */
/*  8065 */                     if (self === undefined) {
/*  8066 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8067 */                     }
/*  8068 */                     if (t === undefined) {
/*  8069 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  8070 */                     }
/*  8071 */ 
/*  8072 */                     //
/*  8073 */                     // line 165:
/*  8074 */                     //         return self.point + self.vector.scale(t)
/*  8075 */                     //         ^
/*  8076 */                     //
/*  8077 */                     $currLineNo = 165;
/*  8078 */                     $currColNo = 8;
/*  8079 */ 
/*  8080 */                     if (self === undefined) {
/*  8081 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8082 */                     }
/*  8083 */                     $ret = Sk.abstr.gattr(self, 'point', true);
/*  8084 */                     $blk = 1; /* allowing case fallthrough */
/*  8085 */                 case 1:
/*  8086 */                     /* --- function return or resume suspension --- */
/*  8087 */                     if ($ret && $ret.$isSuspension) {
/*  8088 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 165, 15);
/*  8089 */                     }
/*  8090 */                     var $lattr547 = $ret;
/*  8091 */                     if (self === undefined) {
/*  8092 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8093 */                     }
/*  8094 */                     $ret = Sk.abstr.gattr(self, 'vector', true);
/*  8095 */                     $blk = 2; /* allowing case fallthrough */
/*  8096 */                 case 2:
/*  8097 */                     /* --- function return or resume suspension --- */
/*  8098 */                     if ($ret && $ret.$isSuspension) {
/*  8099 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 165, 28);
/*  8100 */                     }
/*  8101 */                     var $lattr548 = $ret;
/*  8102 */                     $ret = Sk.abstr.gattr($lattr548, 'scale', true);
/*  8103 */                     $blk = 3; /* allowing case fallthrough */
/*  8104 */                 case 3:
/*  8105 */                     /* --- function return or resume suspension --- */
/*  8106 */                     if ($ret && $ret.$isSuspension) {
/*  8107 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 165, 28);
/*  8108 */                     }
/*  8109 */                     var $lattr549 = $ret;
/*  8110 */                     if (t === undefined) {
/*  8111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  8112 */                     }
/*  8113 */                     $ret;
/*  8114 */                     $ret = Sk.misceval.callsimOrSuspend($lattr549, t);
/*  8115 */                     $blk = 4; /* allowing case fallthrough */
/*  8116 */                 case 4:
/*  8117 */                     /* --- function return or resume suspension --- */
/*  8118 */                     if ($ret && $ret.$isSuspension) {
/*  8119 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 165, 28);
/*  8120 */                     }
/*  8121 */                     var $call550 = $ret;
/*  8122 */                     //
/*  8123 */                     // line 165:
/*  8124 */                     //         return self.point + self.vector.scale(t)
/*  8125 */                     //                             ^
/*  8126 */                     //
/*  8127 */                     $currLineNo = 165;
/*  8128 */                     $currColNo = 28;
/*  8129 */ 
/*  8130 */                     var $binop551 = Sk.abstr.numberBinOp($lattr547, $call550, 'Add');
/*  8131 */                     return $binop551;
/*  8132 */                     return Sk.builtin.none.none$;
/*  8133 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8134 */                 }
/*  8135 */             } catch (err) {
/*  8136 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8137 */                     err = new Sk.builtin.ExternalError(err);
/*  8138 */                 }
/*  8139 */                 err.traceback.push({
/*  8140 */                     lineno: $currLineNo,
/*  8141 */                     colno: $currColNo,
/*  8142 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8143 */                 });
/*  8144 */                 if ($exc.length > 0) {
/*  8145 */                     $err = err;
/*  8146 */                     $blk = $exc.pop();
/*  8147 */                     continue;
/*  8148 */                 } else {
/*  8149 */                     throw err;
/*  8150 */                 }
/*  8151 */             }
/*  8152 */         }
/*  8153 */     });
/*  8154 */     var $scope562 = (function $PpmCanvas$class_outer($globals, $locals, $rest) {
/*  8155 */         var $gbl = $globals,
/*  8156 */             $loc = $locals;
/*  8157 */         (function $PpmCanvas$_closure() {
/*  8158 */             var $blk = 0,
/*  8159 */                 $exc = [],
/*  8160 */                 $ret = undefined,
/*  8161 */                 $postfinally = undefined,
/*  8162 */                 $currLineNo = undefined,
/*  8163 */                 $currColNo = undefined;
/*  8164 */             while (true) {
/*  8165 */                 try {
/*  8166 */                     switch ($blk) {
/*  8167 */                     case 0:
/*  8168 */                         /* --- class entry --- */
/*  8169 */                         //
/*  8170 */                         // line 173:
/*  8171 */                         //     def __init__(self, width, height, filenameBase):
/*  8172 */                         //     ^
/*  8173 */                         //
/*  8174 */                         $currLineNo = 173;
/*  8175 */                         $currColNo = 4;
/*  8176 */ 
/*  8177 */                         $scope563.co_name = new Sk.builtins['str']('__init__');
/*  8178 */                         $scope563.co_varnames = ['self', 'width', 'height', 'filenameBase'];
/*  8179 */                         var $funcobj578 = new Sk.builtins['function']($scope563, $gbl);
/*  8180 */                         $loc.__init__ = $funcobj578;
/*  8181 */                         //
/*  8182 */                         // line 181:
/*  8183 */                         //     def plot(self, x, y, r, g, b):
/*  8184 */                         //     ^
/*  8185 */                         //
/*  8186 */                         $currLineNo = 181;
/*  8187 */                         $currColNo = 4;
/*  8188 */ 
/*  8189 */                         $scope579.co_name = new Sk.builtins['str']('plot');
/*  8190 */                         $scope579.co_varnames = ['self', 'x', 'y', 'r', 'g', 'b'];
/*  8191 */                         var $funcobj614 = new Sk.builtins['function']($scope579, $gbl);
/*  8192 */                         $loc.plot = $funcobj614;
/*  8193 */                         //
/*  8194 */                         // line 187:
/*  8195 */                         //     def save(self):
/*  8196 */                         //     ^
/*  8197 */                         //
/*  8198 */                         $currLineNo = 187;
/*  8199 */                         $currColNo = 4;
/*  8200 */ 
/*  8201 */                         $scope615.co_name = new Sk.builtins['str']('save');
/*  8202 */                         $scope615.co_varnames = ['self'];
/*  8203 */                         var $funcobj641 = new Sk.builtins['function']($scope615, $gbl);
/*  8204 */                         $loc.save = $funcobj641;
/*  8205 */                         return;
/*  8206 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8207 */                     }
/*  8208 */                 } catch (err) {
/*  8209 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  8210 */                         err = new Sk.builtin.ExternalError(err);
/*  8211 */                     }
/*  8212 */                     err.traceback.push({
/*  8213 */                         lineno: $currLineNo,
/*  8214 */                         colno: $currColNo,
/*  8215 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8216 */                     });
/*  8217 */                     if ($exc.length > 0) {
/*  8218 */                         $err = err;
/*  8219 */                         $blk = $exc.pop();
/*  8220 */                         continue;
/*  8221 */                     } else {
/*  8222 */                         throw err;
/*  8223 */                     }
/*  8224 */                 }
/*  8225 */             }
/*  8226 */         }).apply(null, $rest);
/*  8227 */     });
/*  8228 */     var $scope563 = (function $__init__564$(self, width, height, filenameBase) {
/*  8229 */         var i; /* locals */
/*  8230 */         var filenameBase, filenameBase, height, height, height, height, i, i, self, self, self, self, self, self, width, width, width, width, $elem565, $loadlist566, $binop567, $binop568, $binop569, $loadgbl570, $binop571, $iter573, $loadgbl570, $binop571, $call572, $iter573, $lattr575, $binop576, $binop577;
/*  8231 */         var $wakeFromSuspension = function() {
/*  8232 */             var susp = $scope563.$wakingSuspension;
/*  8233 */             delete $scope563.$wakingSuspension;
/*  8234 */             $blk = susp.$blk;
/*  8235 */             $loc = susp.$loc;
/*  8236 */             $gbl = susp.$gbl;
/*  8237 */             $exc = susp.$exc;
/*  8238 */             $err = susp.$err;
/*  8239 */             $postfinally = susp.$postfinally;
/*  8240 */             $currLineNo = susp.$lineno;
/*  8241 */             $currColNo = susp.$colno;
/*  8242 */             Sk.lastYield = Date.now();
/*  8243 */             filenameBase = susp.$tmps.filenameBase;
/*  8244 */             height = susp.$tmps.height;
/*  8245 */             i = susp.$tmps.i;
/*  8246 */             self = susp.$tmps.self;
/*  8247 */             width = susp.$tmps.width;
/*  8248 */             $elem565 = susp.$tmps.$elem565;
/*  8249 */             $loadlist566 = susp.$tmps.$loadlist566;
/*  8250 */             $binop567 = susp.$tmps.$binop567;
/*  8251 */             $binop568 = susp.$tmps.$binop568;
/*  8252 */             $binop569 = susp.$tmps.$binop569;
/*  8253 */             $loadgbl570 = susp.$tmps.$loadgbl570;
/*  8254 */             $binop571 = susp.$tmps.$binop571;
/*  8255 */             $iter573 = susp.$tmps.$iter573;
/*  8256 */             $call572 = susp.$tmps.$call572;
/*  8257 */             $lattr575 = susp.$tmps.$lattr575;
/*  8258 */             $binop576 = susp.$tmps.$binop576;
/*  8259 */             $binop577 = susp.$tmps.$binop577;
/*  8260 */             try {
/*  8261 */                 $ret = susp.child.resume();
/*  8262 */             } catch (err) {
/*  8263 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8264 */                     err = new Sk.builtin.ExternalError(err);
/*  8265 */                 }
/*  8266 */                 err.traceback.push({
/*  8267 */                     lineno: $currLineNo,
/*  8268 */                     colno: $currColNo,
/*  8269 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8270 */                 });
/*  8271 */                 if ($exc.length > 0) {
/*  8272 */                     $err = err;
/*  8273 */                     $blk = $exc.pop();
/*  8274 */                 } else {
/*  8275 */                     throw err;
/*  8276 */                 }
/*  8277 */             }
/*  8278 */         };
/*  8279 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8280 */             var susp = new Sk.misceval.Suspension();
/*  8281 */             susp.child = $child;
/*  8282 */             susp.resume = function() {
/*  8283 */                 $scope563.$wakingSuspension = susp;
/*  8284 */                 return $scope563();
/*  8285 */             };
/*  8286 */             susp.data = susp.child.data;
/*  8287 */             susp.$blk = $blk;
/*  8288 */             susp.$loc = $loc;
/*  8289 */             susp.$gbl = $gbl;
/*  8290 */             susp.$exc = $exc;
/*  8291 */             susp.$err = $err;
/*  8292 */             susp.$postfinally = $postfinally;
/*  8293 */             susp.$filename = $filename;
/*  8294 */             susp.$lineno = $lineno;
/*  8295 */             susp.$colno = $colno;
/*  8296 */             susp.optional = susp.child.optional;
/*  8297 */             susp.$tmps = {
/*  8298 */                 "filenameBase": filenameBase,
/*  8299 */                 "height": height,
/*  8300 */                 "i": i,
/*  8301 */                 "self": self,
/*  8302 */                 "width": width,
/*  8303 */                 "$elem565": $elem565,
/*  8304 */                 "$loadlist566": $loadlist566,
/*  8305 */                 "$binop567": $binop567,
/*  8306 */                 "$binop568": $binop568,
/*  8307 */                 "$binop569": $binop569,
/*  8308 */                 "$loadgbl570": $loadgbl570,
/*  8309 */                 "$binop571": $binop571,
/*  8310 */                 "$iter573": $iter573,
/*  8311 */                 "$call572": $call572,
/*  8312 */                 "$lattr575": $lattr575,
/*  8313 */                 "$binop576": $binop576,
/*  8314 */                 "$binop577": $binop577
/*  8315 */             };
/*  8316 */             return susp;
/*  8317 */         };
/*  8318 */         var $blk = 0,
/*  8319 */             $exc = [],
/*  8320 */             $loc = {},
/*  8321 */             $gbl = this,
/*  8322 */             $err = undefined,
/*  8323 */             $ret = undefined,
/*  8324 */             $postfinally = undefined,
/*  8325 */             $currLineNo = undefined,
/*  8326 */             $currColNo = undefined;
/*  8327 */         if ($scope563.$wakingSuspension !== undefined) {
/*  8328 */             $wakeFromSuspension();
/*  8329 */         } else {
/*  8330 */             Sk.builtin.pyCheckArgs("__init__", arguments, 4, 4, false, false);
/*  8331 */         }
/*  8332 */         while (true) {
/*  8333 */             try {
/*  8334 */                 switch ($blk) {
/*  8335 */                 case 0:
/*  8336 */                     /* --- codeobj entry --- */
/*  8337 */                     if (self === undefined) {
/*  8338 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8339 */                     }
/*  8340 */                     if (width === undefined) {
/*  8341 */                         throw new Sk.builtin.UnboundLocalError('local variable \'width\' referenced before assignment');
/*  8342 */                     }
/*  8343 */                     if (height === undefined) {
/*  8344 */                         throw new Sk.builtin.UnboundLocalError('local variable \'height\' referenced before assignment');
/*  8345 */                     }
/*  8346 */                     if (filenameBase === undefined) {
/*  8347 */                         throw new Sk.builtin.UnboundLocalError('local variable \'filenameBase\' referenced before assignment');
/*  8348 */                     }
/*  8349 */ 
/*  8350 */                     //
/*  8351 */                     // line 174:
/*  8352 */                     //         self.bytes = [0] * (width * height * 3)
/*  8353 */                     //         ^
/*  8354 */                     //
/*  8355 */                     $currLineNo = 174;
/*  8356 */                     $currColNo = 8;
/*  8357 */ 
/*  8358 */                     var $elem565 = new Sk.builtin.int_(0);
/*  8359 */                     var $loadlist566 = new Sk.builtins['list']([$elem565]);
/*  8360 */                     if (width === undefined) {
/*  8361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'width\' referenced before assignment');
/*  8362 */                     }
/*  8363 */                     if (height === undefined) {
/*  8364 */                         throw new Sk.builtin.UnboundLocalError('local variable \'height\' referenced before assignment');
/*  8365 */                     }
/*  8366 */                     var $binop567 = Sk.abstr.numberBinOp(width, height, 'Mult');
/*  8367 */                     var $binop568 = Sk.abstr.numberBinOp($binop567, new Sk.builtin.int_(3), 'Mult');
/*  8368 */                     var $binop569 = Sk.abstr.numberBinOp($loadlist566, $binop568, 'Mult');
/*  8369 */                     if (self === undefined) {
/*  8370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8371 */                     }
/*  8372 */                     $ret = Sk.abstr.sattr(self, 'bytes', $binop569, true);
/*  8373 */                     $blk = 1; /* allowing case fallthrough */
/*  8374 */                 case 1:
/*  8375 */                     /* --- function return or resume suspension --- */
/*  8376 */                     if ($ret && $ret.$isSuspension) {
/*  8377 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 174, 8);
/*  8378 */                     }
/*  8379 */                     //
/*  8380 */                     // line 175:
/*  8381 */                     //         for i in range(width * height):
/*  8382 */                     //         ^
/*  8383 */                     //
/*  8384 */                     $currLineNo = 175;
/*  8385 */                     $currColNo = 8;
/*  8386 */ 
/*  8387 */                     var $loadgbl570 = Sk.misceval.loadname('range', $gbl);
/*  8388 */                     if (width === undefined) {
/*  8389 */                         throw new Sk.builtin.UnboundLocalError('local variable \'width\' referenced before assignment');
/*  8390 */                     }
/*  8391 */                     if (height === undefined) {
/*  8392 */                         throw new Sk.builtin.UnboundLocalError('local variable \'height\' referenced before assignment');
/*  8393 */                     }
/*  8394 */                     var $binop571 = Sk.abstr.numberBinOp(width, height, 'Mult');
/*  8395 */                     $ret;
/*  8396 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl570, $binop571);
/*  8397 */                     $blk = 5; /* allowing case fallthrough */
/*  8398 */                 case 5:
/*  8399 */                     /* --- function return or resume suspension --- */
/*  8400 */                     if ($ret && $ret.$isSuspension) {
/*  8401 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 175, 17);
/*  8402 */                     }
/*  8403 */                     var $call572 = $ret;
/*  8404 */                     //
/*  8405 */                     // line 175:
/*  8406 */                     //         for i in range(width * height):
/*  8407 */                     //                  ^
/*  8408 */                     //
/*  8409 */                     $currLineNo = 175;
/*  8410 */                     $currColNo = 17;
/*  8411 */ 
/*  8412 */                     var $iter573 = Sk.abstr.iter($call572);
/*  8413 */                     $blk = 2; /* allowing case fallthrough */
/*  8414 */                 case 2:
/*  8415 */                     /* --- for start --- */
/*  8416 */                     $ret = Sk.abstr.iternext($iter573, true);
/*  8417 */                     $blk = 6; /* allowing case fallthrough */
/*  8418 */                 case 6:
/*  8419 */                     /* --- function return or resume suspension --- */
/*  8420 */                     if ($ret && $ret.$isSuspension) {
/*  8421 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 175, 8);
/*  8422 */                     }
/*  8423 */                     var $next574 = $ret;
/*  8424 */                     if ($next574 === undefined) {
/*  8425 */                         $blk = 3;
/*  8426 */                         continue;
/*  8427 */                     }
/*  8428 */                     i = $next574;
/*  8429 */                     //
/*  8430 */                     // line 176:
/*  8431 */                     //             self.bytes[i * 3 + 2] = 255
/*  8432 */                     //             ^
/*  8433 */                     //
/*  8434 */                     $currLineNo = 176;
/*  8435 */                     $currColNo = 12;
/*  8436 */ 
/*  8437 */                     if (self === undefined) {
/*  8438 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8439 */                     }
/*  8440 */                     $ret = Sk.abstr.gattr(self, 'bytes', true);
/*  8441 */                     $blk = 7; /* allowing case fallthrough */
/*  8442 */                 case 7:
/*  8443 */                     /* --- function return or resume suspension --- */
/*  8444 */                     if ($ret && $ret.$isSuspension) {
/*  8445 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 176, 12);
/*  8446 */                     }
/*  8447 */                     var $lattr575 = $ret;
/*  8448 */                     if (i === undefined) {
/*  8449 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8450 */                     }
/*  8451 */                     var $binop576 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(3), 'Mult');
/*  8452 */                     var $binop577 = Sk.abstr.numberBinOp($binop576, new Sk.builtin.int_(2), 'Add');
/*  8453 */                     $ret = Sk.abstr.objectSetItem($lattr575, $binop577, new Sk.builtin.int_(255), true);
/*  8454 */                     $blk = 8; /* allowing case fallthrough */
/*  8455 */                 case 8:
/*  8456 */                     /* --- function return or resume suspension --- */
/*  8457 */                     if ($ret && $ret.$isSuspension) {
/*  8458 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  8459 */                     }
/*  8460 */                     $blk = 2; /* jump */
/*  8461 */                     continue;
/*  8462 */                 case 3:
/*  8463 */                     /* --- for cleanup --- */
/*  8464 */                     $blk = 4; /* allowing case fallthrough */
/*  8465 */                 case 4:
/*  8466 */                     /* --- for end --- */
/*  8467 */                     //
/*  8468 */                     // line 177:
/*  8469 */                     //         self.width = width
/*  8470 */                     //         ^
/*  8471 */                     //
/*  8472 */                     $currLineNo = 177;
/*  8473 */                     $currColNo = 8;
/*  8474 */ 
/*  8475 */                     if (width === undefined) {
/*  8476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'width\' referenced before assignment');
/*  8477 */                     }
/*  8478 */                     if (self === undefined) {
/*  8479 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8480 */                     }
/*  8481 */                     $ret = Sk.abstr.sattr(self, 'width', width, true);
/*  8482 */                     $blk = 9; /* allowing case fallthrough */
/*  8483 */                 case 9:
/*  8484 */                     /* --- function return or resume suspension --- */
/*  8485 */                     if ($ret && $ret.$isSuspension) {
/*  8486 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 177, 8);
/*  8487 */                     }
/*  8488 */                     //
/*  8489 */                     // line 178:
/*  8490 */                     //         self.height = height
/*  8491 */                     //         ^
/*  8492 */                     //
/*  8493 */                     $currLineNo = 178;
/*  8494 */                     $currColNo = 8;
/*  8495 */ 
/*  8496 */                     if (height === undefined) {
/*  8497 */                         throw new Sk.builtin.UnboundLocalError('local variable \'height\' referenced before assignment');
/*  8498 */                     }
/*  8499 */                     if (self === undefined) {
/*  8500 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8501 */                     }
/*  8502 */                     $ret = Sk.abstr.sattr(self, 'height', height, true);
/*  8503 */                     $blk = 10; /* allowing case fallthrough */
/*  8504 */                 case 10:
/*  8505 */                     /* --- function return or resume suspension --- */
/*  8506 */                     if ($ret && $ret.$isSuspension) {
/*  8507 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 178, 8);
/*  8508 */                     }
/*  8509 */                     //
/*  8510 */                     // line 179:
/*  8511 */                     //         self.filenameBase = filenameBase
/*  8512 */                     //         ^
/*  8513 */                     //
/*  8514 */                     $currLineNo = 179;
/*  8515 */                     $currColNo = 8;
/*  8516 */ 
/*  8517 */                     if (filenameBase === undefined) {
/*  8518 */                         throw new Sk.builtin.UnboundLocalError('local variable \'filenameBase\' referenced before assignment');
/*  8519 */                     }
/*  8520 */                     if (self === undefined) {
/*  8521 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8522 */                     }
/*  8523 */                     $ret = Sk.abstr.sattr(self, 'filenameBase', filenameBase, true);
/*  8524 */                     $blk = 11; /* allowing case fallthrough */
/*  8525 */                 case 11:
/*  8526 */                     /* --- function return or resume suspension --- */
/*  8527 */                     if ($ret && $ret.$isSuspension) {
/*  8528 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 179, 8);
/*  8529 */                     }
/*  8530 */                     return Sk.builtin.none.none$;
/*  8531 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8532 */                 }
/*  8533 */             } catch (err) {
/*  8534 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8535 */                     err = new Sk.builtin.ExternalError(err);
/*  8536 */                 }
/*  8537 */                 err.traceback.push({
/*  8538 */                     lineno: $currLineNo,
/*  8539 */                     colno: $currColNo,
/*  8540 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8541 */                 });
/*  8542 */                 if ($exc.length > 0) {
/*  8543 */                     $err = err;
/*  8544 */                     $blk = $exc.pop();
/*  8545 */                     continue;
/*  8546 */                 } else {
/*  8547 */                     throw err;
/*  8548 */                 }
/*  8549 */             }
/*  8550 */         }
/*  8551 */     });
/*  8552 */     var $scope579 = (function $plot580$(self, x, y, r, g, b) {
/*  8553 */         var i; /* locals */
/*  8554 */         var b, b, g, g, i, i, i, i, r, r, self, self, self, self, self, self, x, x, y, y, $lattr581, $binop582, $binop583, $loadgbl588, $loadgbl589, $loadgbl590, $binop591, $loadgbl588, $loadgbl589, $loadgbl590, $binop591, $call592, $loadgbl588, $loadgbl589, $loadgbl590, $binop591, $call592, $call593, $loadgbl588, $loadgbl589, $loadgbl590, $binop591, $call592, $call593, $call594, $loadgbl588, $loadgbl589, $loadgbl590, $binop591, $call592, $call593, $call594, $lattr595, $loadgbl596, $loadgbl597, $loadgbl598, $binop599, $loadgbl596, $loadgbl597, $loadgbl598, $binop599, $call600, $loadgbl596, $loadgbl597, $loadgbl598, $binop599, $call600, $call601, $loadgbl596, $loadgbl597, $loadgbl598, $binop599, $call600, $call601, $call602, $loadgbl596, $loadgbl597, $loadgbl598, $binop599, $call600, $call601, $call602, $lattr603, $binop604, $loadgbl605, $loadgbl606, $loadgbl607, $binop608, $loadgbl605, $loadgbl606, $loadgbl607, $binop608, $call609, $loadgbl605, $loadgbl606, $loadgbl607, $binop608, $call609, $call610, $loadgbl605, $loadgbl606, $loadgbl607, $binop608, $call609, $call610, $call611, $loadgbl605, $loadgbl606, $loadgbl607, $binop608, $call609, $call610, $call611, $lattr612, $binop613;
/*  8555 */         var $wakeFromSuspension = function() {
/*  8556 */             var susp = $scope579.$wakingSuspension;
/*  8557 */             delete $scope579.$wakingSuspension;
/*  8558 */             $blk = susp.$blk;
/*  8559 */             $loc = susp.$loc;
/*  8560 */             $gbl = susp.$gbl;
/*  8561 */             $exc = susp.$exc;
/*  8562 */             $err = susp.$err;
/*  8563 */             $postfinally = susp.$postfinally;
/*  8564 */             $currLineNo = susp.$lineno;
/*  8565 */             $currColNo = susp.$colno;
/*  8566 */             Sk.lastYield = Date.now();
/*  8567 */             b = susp.$tmps.b;
/*  8568 */             g = susp.$tmps.g;
/*  8569 */             i = susp.$tmps.i;
/*  8570 */             r = susp.$tmps.r;
/*  8571 */             self = susp.$tmps.self;
/*  8572 */             x = susp.$tmps.x;
/*  8573 */             y = susp.$tmps.y;
/*  8574 */             $lattr581 = susp.$tmps.$lattr581;
/*  8575 */             $binop582 = susp.$tmps.$binop582;
/*  8576 */             $binop583 = susp.$tmps.$binop583;
/*  8577 */             $loadgbl588 = susp.$tmps.$loadgbl588;
/*  8578 */             $loadgbl589 = susp.$tmps.$loadgbl589;
/*  8579 */             $loadgbl590 = susp.$tmps.$loadgbl590;
/*  8580 */             $binop591 = susp.$tmps.$binop591;
/*  8581 */             $call592 = susp.$tmps.$call592;
/*  8582 */             $call593 = susp.$tmps.$call593;
/*  8583 */             $call594 = susp.$tmps.$call594;
/*  8584 */             $lattr595 = susp.$tmps.$lattr595;
/*  8585 */             $loadgbl596 = susp.$tmps.$loadgbl596;
/*  8586 */             $loadgbl597 = susp.$tmps.$loadgbl597;
/*  8587 */             $loadgbl598 = susp.$tmps.$loadgbl598;
/*  8588 */             $binop599 = susp.$tmps.$binop599;
/*  8589 */             $call600 = susp.$tmps.$call600;
/*  8590 */             $call601 = susp.$tmps.$call601;
/*  8591 */             $call602 = susp.$tmps.$call602;
/*  8592 */             $lattr603 = susp.$tmps.$lattr603;
/*  8593 */             $binop604 = susp.$tmps.$binop604;
/*  8594 */             $loadgbl605 = susp.$tmps.$loadgbl605;
/*  8595 */             $loadgbl606 = susp.$tmps.$loadgbl606;
/*  8596 */             $loadgbl607 = susp.$tmps.$loadgbl607;
/*  8597 */             $binop608 = susp.$tmps.$binop608;
/*  8598 */             $call609 = susp.$tmps.$call609;
/*  8599 */             $call610 = susp.$tmps.$call610;
/*  8600 */             $call611 = susp.$tmps.$call611;
/*  8601 */             $lattr612 = susp.$tmps.$lattr612;
/*  8602 */             $binop613 = susp.$tmps.$binop613;
/*  8603 */             try {
/*  8604 */                 $ret = susp.child.resume();
/*  8605 */             } catch (err) {
/*  8606 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8607 */                     err = new Sk.builtin.ExternalError(err);
/*  8608 */                 }
/*  8609 */                 err.traceback.push({
/*  8610 */                     lineno: $currLineNo,
/*  8611 */                     colno: $currColNo,
/*  8612 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  8613 */                 });
/*  8614 */                 if ($exc.length > 0) {
/*  8615 */                     $err = err;
/*  8616 */                     $blk = $exc.pop();
/*  8617 */                 } else {
/*  8618 */                     throw err;
/*  8619 */                 }
/*  8620 */             }
/*  8621 */         };
/*  8622 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8623 */             var susp = new Sk.misceval.Suspension();
/*  8624 */             susp.child = $child;
/*  8625 */             susp.resume = function() {
/*  8626 */                 $scope579.$wakingSuspension = susp;
/*  8627 */                 return $scope579();
/*  8628 */             };
/*  8629 */             susp.data = susp.child.data;
/*  8630 */             susp.$blk = $blk;
/*  8631 */             susp.$loc = $loc;
/*  8632 */             susp.$gbl = $gbl;
/*  8633 */             susp.$exc = $exc;
/*  8634 */             susp.$err = $err;
/*  8635 */             susp.$postfinally = $postfinally;
/*  8636 */             susp.$filename = $filename;
/*  8637 */             susp.$lineno = $lineno;
/*  8638 */             susp.$colno = $colno;
/*  8639 */             susp.optional = susp.child.optional;
/*  8640 */             susp.$tmps = {
/*  8641 */                 "b": b,
/*  8642 */                 "g": g,
/*  8643 */                 "i": i,
/*  8644 */                 "r": r,
/*  8645 */                 "self": self,
/*  8646 */                 "x": x,
/*  8647 */                 "y": y,
/*  8648 */                 "$lattr581": $lattr581,
/*  8649 */                 "$binop582": $binop582,
/*  8650 */                 "$binop583": $binop583,
/*  8651 */                 "$loadgbl588": $loadgbl588,
/*  8652 */                 "$loadgbl589": $loadgbl589,
/*  8653 */                 "$loadgbl590": $loadgbl590,
/*  8654 */                 "$binop591": $binop591,
/*  8655 */                 "$call592": $call592,
/*  8656 */                 "$call593": $call593,
/*  8657 */                 "$call594": $call594,
/*  8658 */                 "$lattr595": $lattr595,
/*  8659 */                 "$loadgbl596": $loadgbl596,
/*  8660 */                 "$loadgbl597": $loadgbl597,
/*  8661 */                 "$loadgbl598": $loadgbl598,
/*  8662 */                 "$binop599": $binop599,
/*  8663 */                 "$call600": $call600,
/*  8664 */                 "$call601": $call601,
/*  8665 */                 "$call602": $call602,
/*  8666 */                 "$lattr603": $lattr603,
/*  8667 */                 "$binop604": $binop604,
/*  8668 */                 "$loadgbl605": $loadgbl605,
/*  8669 */                 "$loadgbl606": $loadgbl606,
/*  8670 */                 "$loadgbl607": $loadgbl607,
/*  8671 */                 "$binop608": $binop608,
/*  8672 */                 "$call609": $call609,
/*  8673 */                 "$call610": $call610,
/*  8674 */                 "$call611": $call611,
/*  8675 */                 "$lattr612": $lattr612,
/*  8676 */                 "$binop613": $binop613
/*  8677 */             };
/*  8678 */             return susp;
/*  8679 */         };
/*  8680 */         var $blk = 0,
/*  8681 */             $exc = [],
/*  8682 */             $loc = {},
/*  8683 */             $gbl = this,
/*  8684 */             $err = undefined,
/*  8685 */             $ret = undefined,
/*  8686 */             $postfinally = undefined,
/*  8687 */             $currLineNo = undefined,
/*  8688 */             $currColNo = undefined;
/*  8689 */         if ($scope579.$wakingSuspension !== undefined) {
/*  8690 */             $wakeFromSuspension();
/*  8691 */         } else {
/*  8692 */             Sk.builtin.pyCheckArgs("plot", arguments, 6, 6, false, false);
/*  8693 */         }
/*  8694 */         while (true) {
/*  8695 */             try {
/*  8696 */                 switch ($blk) {
/*  8697 */                 case 0:
/*  8698 */                     /* --- codeobj entry --- */
/*  8699 */                     if (self === undefined) {
/*  8700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8701 */                     }
/*  8702 */                     if (x === undefined) {
/*  8703 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*  8704 */                     }
/*  8705 */                     if (y === undefined) {
/*  8706 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*  8707 */                     }
/*  8708 */                     if (r === undefined) {
/*  8709 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8710 */                     }
/*  8711 */                     if (g === undefined) {
/*  8712 */                         throw new Sk.builtin.UnboundLocalError('local variable \'g\' referenced before assignment');
/*  8713 */                     }
/*  8714 */                     if (b === undefined) {
/*  8715 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/*  8716 */                     }
/*  8717 */ 
/*  8718 */                     //
/*  8719 */                     // line 182:
/*  8720 */                     //         i = ((self.height - y - 1) * self.width + x) * 3
/*  8721 */                     //         ^
/*  8722 */                     //
/*  8723 */                     $currLineNo = 182;
/*  8724 */                     $currColNo = 8;
/*  8725 */ 
/*  8726 */                     if (self === undefined) {
/*  8727 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8728 */                     }
/*  8729 */                     $ret = Sk.abstr.gattr(self, 'height', true);
/*  8730 */                     $blk = 1; /* allowing case fallthrough */
/*  8731 */                 case 1:
/*  8732 */                     /* --- function return or resume suspension --- */
/*  8733 */                     if ($ret && $ret.$isSuspension) {
/*  8734 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 182, 14);
/*  8735 */                     }
/*  8736 */                     var $lattr581 = $ret;
/*  8737 */                     if (y === undefined) {
/*  8738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*  8739 */                     }
/*  8740 */                     var $binop582 = Sk.abstr.numberBinOp($lattr581, y, 'Sub');
/*  8741 */                     var $binop583 = Sk.abstr.numberBinOp($binop582, new Sk.builtin.int_(1), 'Sub');
/*  8742 */                     if (self === undefined) {
/*  8743 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8744 */                     }
/*  8745 */                     $ret = Sk.abstr.gattr(self, 'width', true);
/*  8746 */                     $blk = 2; /* allowing case fallthrough */
/*  8747 */                 case 2:
/*  8748 */                     /* --- function return or resume suspension --- */
/*  8749 */                     if ($ret && $ret.$isSuspension) {
/*  8750 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 182, 37);
/*  8751 */                     }
/*  8752 */                     var $lattr584 = $ret;
/*  8753 */                     var $binop585 = Sk.abstr.numberBinOp($binop583, $lattr584, 'Mult');
/*  8754 */                     if (x === undefined) {
/*  8755 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*  8756 */                     }
/*  8757 */                     var $binop586 = Sk.abstr.numberBinOp($binop585, x, 'Add');
/*  8758 */                     var $binop587 = Sk.abstr.numberBinOp($binop586, new Sk.builtin.int_(3), 'Mult');
/*  8759 */                     i = $binop587;
/*  8760 */                     //
/*  8761 */                     // line 183:
/*  8762 */                     //         self.bytes[i  ] = max(0, min(255, int(r * 255)))
/*  8763 */                     //         ^
/*  8764 */                     //
/*  8765 */                     $currLineNo = 183;
/*  8766 */                     $currColNo = 8;
/*  8767 */ 
/*  8768 */                     var $loadgbl588 = Sk.misceval.loadname('max', $gbl);
/*  8769 */                     var $loadgbl589 = Sk.misceval.loadname('min', $gbl);
/*  8770 */                     var $loadgbl590 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  8771 */                     if (r === undefined) {
/*  8772 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8773 */                     }
/*  8774 */                     var $binop591 = Sk.abstr.numberBinOp(r, new Sk.builtin.int_(255), 'Mult');
/*  8775 */                     $ret;
/*  8776 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl590, $binop591);
/*  8777 */                     $blk = 3; /* allowing case fallthrough */
/*  8778 */                 case 3:
/*  8779 */                     /* --- function return or resume suspension --- */
/*  8780 */                     if ($ret && $ret.$isSuspension) {
/*  8781 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 183, 42);
/*  8782 */                     }
/*  8783 */                     var $call592 = $ret;
/*  8784 */                     //
/*  8785 */                     // line 183:
/*  8786 */                     //         self.bytes[i  ] = max(0, min(255, int(r * 255)))
/*  8787 */                     //                                           ^
/*  8788 */                     //
/*  8789 */                     $currLineNo = 183;
/*  8790 */                     $currColNo = 42;
/*  8791 */ 
/*  8792 */                     $ret;
/*  8793 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl589, new Sk.builtin.int_(255), $call592);
/*  8794 */                     $blk = 4; /* allowing case fallthrough */
/*  8795 */                 case 4:
/*  8796 */                     /* --- function return or resume suspension --- */
/*  8797 */                     if ($ret && $ret.$isSuspension) {
/*  8798 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 183, 33);
/*  8799 */                     }
/*  8800 */                     var $call593 = $ret;
/*  8801 */                     //
/*  8802 */                     // line 183:
/*  8803 */                     //         self.bytes[i  ] = max(0, min(255, int(r * 255)))
/*  8804 */                     //                                  ^
/*  8805 */                     //
/*  8806 */                     $currLineNo = 183;
/*  8807 */                     $currColNo = 33;
/*  8808 */ 
/*  8809 */                     $ret;
/*  8810 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl588, new Sk.builtin.int_(0), $call593);
/*  8811 */                     $blk = 5; /* allowing case fallthrough */
/*  8812 */                 case 5:
/*  8813 */                     /* --- function return or resume suspension --- */
/*  8814 */                     if ($ret && $ret.$isSuspension) {
/*  8815 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 183, 26);
/*  8816 */                     }
/*  8817 */                     var $call594 = $ret;
/*  8818 */                     //
/*  8819 */                     // line 183:
/*  8820 */                     //         self.bytes[i  ] = max(0, min(255, int(r * 255)))
/*  8821 */                     //                           ^
/*  8822 */                     //
/*  8823 */                     $currLineNo = 183;
/*  8824 */                     $currColNo = 26;
/*  8825 */ 
/*  8826 */                     if (self === undefined) {
/*  8827 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8828 */                     }
/*  8829 */                     $ret = Sk.abstr.gattr(self, 'bytes', true);
/*  8830 */                     $blk = 6; /* allowing case fallthrough */
/*  8831 */                 case 6:
/*  8832 */                     /* --- function return or resume suspension --- */
/*  8833 */                     if ($ret && $ret.$isSuspension) {
/*  8834 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 183, 8);
/*  8835 */                     }
/*  8836 */                     var $lattr595 = $ret;
/*  8837 */                     if (i === undefined) {
/*  8838 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8839 */                     }
/*  8840 */                     $ret = Sk.abstr.objectSetItem($lattr595, i, $call594, true);
/*  8841 */                     $blk = 7; /* allowing case fallthrough */
/*  8842 */                 case 7:
/*  8843 */                     /* --- function return or resume suspension --- */
/*  8844 */                     if ($ret && $ret.$isSuspension) {
/*  8845 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  8846 */                     }
/*  8847 */                     //
/*  8848 */                     // line 184:
/*  8849 */                     //         self.bytes[i+1] = max(0, min(255, int(g * 255)))
/*  8850 */                     //         ^
/*  8851 */                     //
/*  8852 */                     $currLineNo = 184;
/*  8853 */                     $currColNo = 8;
/*  8854 */ 
/*  8855 */                     var $loadgbl596 = Sk.misceval.loadname('max', $gbl);
/*  8856 */                     var $loadgbl597 = Sk.misceval.loadname('min', $gbl);
/*  8857 */                     var $loadgbl598 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  8858 */                     if (g === undefined) {
/*  8859 */                         throw new Sk.builtin.UnboundLocalError('local variable \'g\' referenced before assignment');
/*  8860 */                     }
/*  8861 */                     var $binop599 = Sk.abstr.numberBinOp(g, new Sk.builtin.int_(255), 'Mult');
/*  8862 */                     $ret;
/*  8863 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl598, $binop599);
/*  8864 */                     $blk = 8; /* allowing case fallthrough */
/*  8865 */                 case 8:
/*  8866 */                     /* --- function return or resume suspension --- */
/*  8867 */                     if ($ret && $ret.$isSuspension) {
/*  8868 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 184, 42);
/*  8869 */                     }
/*  8870 */                     var $call600 = $ret;
/*  8871 */                     //
/*  8872 */                     // line 184:
/*  8873 */                     //         self.bytes[i+1] = max(0, min(255, int(g * 255)))
/*  8874 */                     //                                           ^
/*  8875 */                     //
/*  8876 */                     $currLineNo = 184;
/*  8877 */                     $currColNo = 42;
/*  8878 */ 
/*  8879 */                     $ret;
/*  8880 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl597, new Sk.builtin.int_(255), $call600);
/*  8881 */                     $blk = 9; /* allowing case fallthrough */
/*  8882 */                 case 9:
/*  8883 */                     /* --- function return or resume suspension --- */
/*  8884 */                     if ($ret && $ret.$isSuspension) {
/*  8885 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 184, 33);
/*  8886 */                     }
/*  8887 */                     var $call601 = $ret;
/*  8888 */                     //
/*  8889 */                     // line 184:
/*  8890 */                     //         self.bytes[i+1] = max(0, min(255, int(g * 255)))
/*  8891 */                     //                                  ^
/*  8892 */                     //
/*  8893 */                     $currLineNo = 184;
/*  8894 */                     $currColNo = 33;
/*  8895 */ 
/*  8896 */                     $ret;
/*  8897 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl596, new Sk.builtin.int_(0), $call601);
/*  8898 */                     $blk = 10; /* allowing case fallthrough */
/*  8899 */                 case 10:
/*  8900 */                     /* --- function return or resume suspension --- */
/*  8901 */                     if ($ret && $ret.$isSuspension) {
/*  8902 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 184, 26);
/*  8903 */                     }
/*  8904 */                     var $call602 = $ret;
/*  8905 */                     //
/*  8906 */                     // line 184:
/*  8907 */                     //         self.bytes[i+1] = max(0, min(255, int(g * 255)))
/*  8908 */                     //                           ^
/*  8909 */                     //
/*  8910 */                     $currLineNo = 184;
/*  8911 */                     $currColNo = 26;
/*  8912 */ 
/*  8913 */                     if (self === undefined) {
/*  8914 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8915 */                     }
/*  8916 */                     $ret = Sk.abstr.gattr(self, 'bytes', true);
/*  8917 */                     $blk = 11; /* allowing case fallthrough */
/*  8918 */                 case 11:
/*  8919 */                     /* --- function return or resume suspension --- */
/*  8920 */                     if ($ret && $ret.$isSuspension) {
/*  8921 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 184, 8);
/*  8922 */                     }
/*  8923 */                     var $lattr603 = $ret;
/*  8924 */                     if (i === undefined) {
/*  8925 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8926 */                     }
/*  8927 */                     var $binop604 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(1), 'Add');
/*  8928 */                     $ret = Sk.abstr.objectSetItem($lattr603, $binop604, $call602, true);
/*  8929 */                     $blk = 12; /* allowing case fallthrough */
/*  8930 */                 case 12:
/*  8931 */                     /* --- function return or resume suspension --- */
/*  8932 */                     if ($ret && $ret.$isSuspension) {
/*  8933 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  8934 */                     }
/*  8935 */                     //
/*  8936 */                     // line 185:
/*  8937 */                     //         self.bytes[i+2] = max(0, min(255, int(b * 255)))
/*  8938 */                     //         ^
/*  8939 */                     //
/*  8940 */                     $currLineNo = 185;
/*  8941 */                     $currColNo = 8;
/*  8942 */ 
/*  8943 */                     var $loadgbl605 = Sk.misceval.loadname('max', $gbl);
/*  8944 */                     var $loadgbl606 = Sk.misceval.loadname('min', $gbl);
/*  8945 */                     var $loadgbl607 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  8946 */                     if (b === undefined) {
/*  8947 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/*  8948 */                     }
/*  8949 */                     var $binop608 = Sk.abstr.numberBinOp(b, new Sk.builtin.int_(255), 'Mult');
/*  8950 */                     $ret;
/*  8951 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl607, $binop608);
/*  8952 */                     $blk = 13; /* allowing case fallthrough */
/*  8953 */                 case 13:
/*  8954 */                     /* --- function return or resume suspension --- */
/*  8955 */                     if ($ret && $ret.$isSuspension) {
/*  8956 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 185, 42);
/*  8957 */                     }
/*  8958 */                     var $call609 = $ret;
/*  8959 */                     //
/*  8960 */                     // line 185:
/*  8961 */                     //         self.bytes[i+2] = max(0, min(255, int(b * 255)))
/*  8962 */                     //                                           ^
/*  8963 */                     //
/*  8964 */                     $currLineNo = 185;
/*  8965 */                     $currColNo = 42;
/*  8966 */ 
/*  8967 */                     $ret;
/*  8968 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl606, new Sk.builtin.int_(255), $call609);
/*  8969 */                     $blk = 14; /* allowing case fallthrough */
/*  8970 */                 case 14:
/*  8971 */                     /* --- function return or resume suspension --- */
/*  8972 */                     if ($ret && $ret.$isSuspension) {
/*  8973 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 185, 33);
/*  8974 */                     }
/*  8975 */                     var $call610 = $ret;
/*  8976 */                     //
/*  8977 */                     // line 185:
/*  8978 */                     //         self.bytes[i+2] = max(0, min(255, int(b * 255)))
/*  8979 */                     //                                  ^
/*  8980 */                     //
/*  8981 */                     $currLineNo = 185;
/*  8982 */                     $currColNo = 33;
/*  8983 */ 
/*  8984 */                     $ret;
/*  8985 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl605, new Sk.builtin.int_(0), $call610);
/*  8986 */                     $blk = 15; /* allowing case fallthrough */
/*  8987 */                 case 15:
/*  8988 */                     /* --- function return or resume suspension --- */
/*  8989 */                     if ($ret && $ret.$isSuspension) {
/*  8990 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 185, 26);
/*  8991 */                     }
/*  8992 */                     var $call611 = $ret;
/*  8993 */                     //
/*  8994 */                     // line 185:
/*  8995 */                     //         self.bytes[i+2] = max(0, min(255, int(b * 255)))
/*  8996 */                     //                           ^
/*  8997 */                     //
/*  8998 */                     $currLineNo = 185;
/*  8999 */                     $currColNo = 26;
/*  9000 */ 
/*  9001 */                     if (self === undefined) {
/*  9002 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9003 */                     }
/*  9004 */                     $ret = Sk.abstr.gattr(self, 'bytes', true);
/*  9005 */                     $blk = 16; /* allowing case fallthrough */
/*  9006 */                 case 16:
/*  9007 */                     /* --- function return or resume suspension --- */
/*  9008 */                     if ($ret && $ret.$isSuspension) {
/*  9009 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 185, 8);
/*  9010 */                     }
/*  9011 */                     var $lattr612 = $ret;
/*  9012 */                     if (i === undefined) {
/*  9013 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9014 */                     }
/*  9015 */                     var $binop613 = Sk.abstr.numberBinOp(i, new Sk.builtin.int_(2), 'Add');
/*  9016 */                     $ret = Sk.abstr.objectSetItem($lattr612, $binop613, $call611, true);
/*  9017 */                     $blk = 17; /* allowing case fallthrough */
/*  9018 */                 case 17:
/*  9019 */                     /* --- function return or resume suspension --- */
/*  9020 */                     if ($ret && $ret.$isSuspension) {
/*  9021 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  9022 */                     }
/*  9023 */                     return Sk.builtin.none.none$;
/*  9024 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9025 */                 }
/*  9026 */             } catch (err) {
/*  9027 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9028 */                     err = new Sk.builtin.ExternalError(err);
/*  9029 */                 }
/*  9030 */                 err.traceback.push({
/*  9031 */                     lineno: $currLineNo,
/*  9032 */                     colno: $currColNo,
/*  9033 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9034 */                 });
/*  9035 */                 if ($exc.length > 0) {
/*  9036 */                     $err = err;
/*  9037 */                     $blk = $exc.pop();
/*  9038 */                     continue;
/*  9039 */                 } else {
/*  9040 */                     throw err;
/*  9041 */                 }
/*  9042 */             }
/*  9043 */         }
/*  9044 */     });
/*  9045 */     var $scope615 = (function $save616$(self) {
/*  9046 */         var f; /* locals */
/*  9047 */         var f, f, f, self, self, self, self, self, $loadgbl617, $loadgbl617, $lattr618, $str619, $binop620, $str621, $loadgbl617, $lattr618, $str619, $binop620, $str621, $call622, $mgr623, $exit624, $loadgbl617, $lattr618, $str619, $binop620, $str621, $call622, $mgr623, $exit624, $loadgbl617, $lattr618, $str619, $binop620, $str621, $call622, $mgr623, $exit624, $lattr626, $str627, $lattr626, $str627, $lattr628, $elem629, $lattr626, $str627, $lattr628, $elem629, $lattr630, $elem631, $loadtuple632, $binop633, $lattr635, $lattr635, $lattr636, $lattr635, $lattr636, $lattr637, $lattr635, $lattr636, $lattr637, $call638, $lattr635, $lattr636, $lattr637, $call638, $call639, $lattr635, $lattr636, $lattr637, $call638, $call639, $jtrue640;
/*  9048 */         var $wakeFromSuspension = function() {
/*  9049 */             var susp = $scope615.$wakingSuspension;
/*  9050 */             delete $scope615.$wakingSuspension;
/*  9051 */             $blk = susp.$blk;
/*  9052 */             $loc = susp.$loc;
/*  9053 */             $gbl = susp.$gbl;
/*  9054 */             $exc = susp.$exc;
/*  9055 */             $err = susp.$err;
/*  9056 */             $postfinally = susp.$postfinally;
/*  9057 */             $currLineNo = susp.$lineno;
/*  9058 */             $currColNo = susp.$colno;
/*  9059 */             Sk.lastYield = Date.now();
/*  9060 */             f = susp.$tmps.f;
/*  9061 */             self = susp.$tmps.self;
/*  9062 */             $loadgbl617 = susp.$tmps.$loadgbl617;
/*  9063 */             $lattr618 = susp.$tmps.$lattr618;
/*  9064 */             $str619 = susp.$tmps.$str619;
/*  9065 */             $binop620 = susp.$tmps.$binop620;
/*  9066 */             $str621 = susp.$tmps.$str621;
/*  9067 */             $call622 = susp.$tmps.$call622;
/*  9068 */             $mgr623 = susp.$tmps.$mgr623;
/*  9069 */             $exit624 = susp.$tmps.$exit624;
/*  9070 */             $lattr626 = susp.$tmps.$lattr626;
/*  9071 */             $str627 = susp.$tmps.$str627;
/*  9072 */             $lattr628 = susp.$tmps.$lattr628;
/*  9073 */             $elem629 = susp.$tmps.$elem629;
/*  9074 */             $lattr630 = susp.$tmps.$lattr630;
/*  9075 */             $elem631 = susp.$tmps.$elem631;
/*  9076 */             $loadtuple632 = susp.$tmps.$loadtuple632;
/*  9077 */             $binop633 = susp.$tmps.$binop633;
/*  9078 */             $lattr635 = susp.$tmps.$lattr635;
/*  9079 */             $lattr636 = susp.$tmps.$lattr636;
/*  9080 */             $lattr637 = susp.$tmps.$lattr637;
/*  9081 */             $call638 = susp.$tmps.$call638;
/*  9082 */             $call639 = susp.$tmps.$call639;
/*  9083 */             $jtrue640 = susp.$tmps.$jtrue640;
/*  9084 */             try {
/*  9085 */                 $ret = susp.child.resume();
/*  9086 */             } catch (err) {
/*  9087 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9088 */                     err = new Sk.builtin.ExternalError(err);
/*  9089 */                 }
/*  9090 */                 err.traceback.push({
/*  9091 */                     lineno: $currLineNo,
/*  9092 */                     colno: $currColNo,
/*  9093 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9094 */                 });
/*  9095 */                 if ($exc.length > 0) {
/*  9096 */                     $err = err;
/*  9097 */                     $blk = $exc.pop();
/*  9098 */                 } else {
/*  9099 */                     throw err;
/*  9100 */                 }
/*  9101 */             }
/*  9102 */         };
/*  9103 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9104 */             var susp = new Sk.misceval.Suspension();
/*  9105 */             susp.child = $child;
/*  9106 */             susp.resume = function() {
/*  9107 */                 $scope615.$wakingSuspension = susp;
/*  9108 */                 return $scope615();
/*  9109 */             };
/*  9110 */             susp.data = susp.child.data;
/*  9111 */             susp.$blk = $blk;
/*  9112 */             susp.$loc = $loc;
/*  9113 */             susp.$gbl = $gbl;
/*  9114 */             susp.$exc = $exc;
/*  9115 */             susp.$err = $err;
/*  9116 */             susp.$postfinally = $postfinally;
/*  9117 */             susp.$filename = $filename;
/*  9118 */             susp.$lineno = $lineno;
/*  9119 */             susp.$colno = $colno;
/*  9120 */             susp.optional = susp.child.optional;
/*  9121 */             susp.$tmps = {
/*  9122 */                 "f": f,
/*  9123 */                 "self": self,
/*  9124 */                 "$loadgbl617": $loadgbl617,
/*  9125 */                 "$lattr618": $lattr618,
/*  9126 */                 "$str619": $str619,
/*  9127 */                 "$binop620": $binop620,
/*  9128 */                 "$str621": $str621,
/*  9129 */                 "$call622": $call622,
/*  9130 */                 "$mgr623": $mgr623,
/*  9131 */                 "$exit624": $exit624,
/*  9132 */                 "$lattr626": $lattr626,
/*  9133 */                 "$str627": $str627,
/*  9134 */                 "$lattr628": $lattr628,
/*  9135 */                 "$elem629": $elem629,
/*  9136 */                 "$lattr630": $lattr630,
/*  9137 */                 "$elem631": $elem631,
/*  9138 */                 "$loadtuple632": $loadtuple632,
/*  9139 */                 "$binop633": $binop633,
/*  9140 */                 "$lattr635": $lattr635,
/*  9141 */                 "$lattr636": $lattr636,
/*  9142 */                 "$lattr637": $lattr637,
/*  9143 */                 "$call638": $call638,
/*  9144 */                 "$call639": $call639,
/*  9145 */                 "$jtrue640": $jtrue640
/*  9146 */             };
/*  9147 */             return susp;
/*  9148 */         };
/*  9149 */         var $blk = 0,
/*  9150 */             $exc = [],
/*  9151 */             $loc = {},
/*  9152 */             $gbl = this,
/*  9153 */             $err = undefined,
/*  9154 */             $ret = undefined,
/*  9155 */             $postfinally = undefined,
/*  9156 */             $currLineNo = undefined,
/*  9157 */             $currColNo = undefined;
/*  9158 */         if ($scope615.$wakingSuspension !== undefined) {
/*  9159 */             $wakeFromSuspension();
/*  9160 */         } else {
/*  9161 */             Sk.builtin.pyCheckArgs("save", arguments, 1, 1, false, false);
/*  9162 */         }
/*  9163 */         while (true) {
/*  9164 */             try {
/*  9165 */                 switch ($blk) {
/*  9166 */                 case 0:
/*  9167 */                     /* --- codeobj entry --- */
/*  9168 */                     if (self === undefined) {
/*  9169 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9170 */                     }
/*  9171 */ 
/*  9172 */                     //
/*  9173 */                     // line 188:
/*  9174 */                     //         with open(self.filenameBase + '.ppm', 'wb') as f:
/*  9175 */                     //              ^
/*  9176 */                     //
/*  9177 */                     $currLineNo = 188;
/*  9178 */                     $currColNo = 13;
/*  9179 */ 
/*  9180 */                     var $loadgbl617 = Sk.misceval.loadname('open', $gbl);
/*  9181 */                     if (self === undefined) {
/*  9182 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9183 */                     }
/*  9184 */                     $ret = Sk.abstr.gattr(self, 'filenameBase', true);
/*  9185 */                     $blk = 4; /* allowing case fallthrough */
/*  9186 */                 case 4:
/*  9187 */                     /* --- function return or resume suspension --- */
/*  9188 */                     if ($ret && $ret.$isSuspension) {
/*  9189 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 18);
/*  9190 */                     }
/*  9191 */                     var $lattr618 = $ret;
/*  9192 */                     var $str619 = new Sk.builtins['str']('.ppm');
/*  9193 */                     var $binop620 = Sk.abstr.numberBinOp($lattr618, $str619, 'Add');
/*  9194 */                     var $str621 = new Sk.builtins['str']('wb');
/*  9195 */                     $ret;
/*  9196 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl617, $binop620, $str621);
/*  9197 */                     $blk = 5; /* allowing case fallthrough */
/*  9198 */                 case 5:
/*  9199 */                     /* --- function return or resume suspension --- */
/*  9200 */                     if ($ret && $ret.$isSuspension) {
/*  9201 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9202 */                     }
/*  9203 */                     var $call622 = $ret;
/*  9204 */                     //
/*  9205 */                     // line 188:
/*  9206 */                     //         with open(self.filenameBase + '.ppm', 'wb') as f:
/*  9207 */                     //              ^
/*  9208 */                     //
/*  9209 */                     $currLineNo = 188;
/*  9210 */                     $currColNo = 13;
/*  9211 */ 
/*  9212 */                     var $mgr623 = $call622;
/*  9213 */                     $ret = Sk.abstr.gattr($mgr623, '__exit__', true);
/*  9214 */                     $blk = 6; /* allowing case fallthrough */
/*  9215 */                 case 6:
/*  9216 */                     /* --- function return or resume suspension --- */
/*  9217 */                     if ($ret && $ret.$isSuspension) {
/*  9218 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9219 */                     }
/*  9220 */                     var $exit624 = $ret;
/*  9221 */                     $ret = Sk.abstr.gattr($mgr623, '__enter__', true);
/*  9222 */                     $blk = 7; /* allowing case fallthrough */
/*  9223 */                 case 7:
/*  9224 */                     /* --- function return or resume suspension --- */
/*  9225 */                     if ($ret && $ret.$isSuspension) {
/*  9226 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9227 */                     }
/*  9228 */                     $ret = Sk.misceval.callsimOrSuspend($ret);
/*  9229 */                     $blk = 8; /* allowing case fallthrough */
/*  9230 */                 case 8:
/*  9231 */                     /* --- function return or resume suspension --- */
/*  9232 */                     if ($ret && $ret.$isSuspension) {
/*  9233 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9234 */                     }
/*  9235 */                     var $value625 = $ret;
/*  9236 */                     $exc.push(1);
/*  9237 */                     f = $value625;
/*  9238 */                     //
/*  9239 */                     // line 189:
/*  9240 */                     //             f.write('P6 %d %d 255\n' % (self.width, self.height))
/*  9241 */                     //             ^
/*  9242 */                     //
/*  9243 */                     $currLineNo = 189;
/*  9244 */                     $currColNo = 12;
/*  9245 */ 
/*  9246 */                     if (f === undefined) {
/*  9247 */                         throw new Sk.builtin.UnboundLocalError('local variable \'f\' referenced before assignment');
/*  9248 */                     }
/*  9249 */                     $ret = Sk.abstr.gattr(f, 'write', true);
/*  9250 */                     $blk = 9; /* allowing case fallthrough */
/*  9251 */                 case 9:
/*  9252 */                     /* --- function return or resume suspension --- */
/*  9253 */                     if ($ret && $ret.$isSuspension) {
/*  9254 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 189, 12);
/*  9255 */                     }
/*  9256 */                     var $lattr626 = $ret;
/*  9257 */                     var $str627 = new Sk.builtins['str']('P6 %d %d 255\n');
/*  9258 */                     if (self === undefined) {
/*  9259 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9260 */                     }
/*  9261 */                     $ret = Sk.abstr.gattr(self, 'width', true);
/*  9262 */                     $blk = 10; /* allowing case fallthrough */
/*  9263 */                 case 10:
/*  9264 */                     /* --- function return or resume suspension --- */
/*  9265 */                     if ($ret && $ret.$isSuspension) {
/*  9266 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 189, 40);
/*  9267 */                     }
/*  9268 */                     var $lattr628 = $ret;
/*  9269 */                     var $elem629 = $lattr628;
/*  9270 */                     if (self === undefined) {
/*  9271 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9272 */                     }
/*  9273 */                     $ret = Sk.abstr.gattr(self, 'height', true);
/*  9274 */                     $blk = 11; /* allowing case fallthrough */
/*  9275 */                 case 11:
/*  9276 */                     /* --- function return or resume suspension --- */
/*  9277 */                     if ($ret && $ret.$isSuspension) {
/*  9278 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 189, 52);
/*  9279 */                     }
/*  9280 */                     var $lattr630 = $ret;
/*  9281 */                     var $elem631 = $lattr630;
/*  9282 */                     var $loadtuple632 = new Sk.builtins['tuple']([$elem629, $elem631]);
/*  9283 */                     var $binop633 = Sk.abstr.numberBinOp($str627, $loadtuple632, 'Mod');
/*  9284 */                     $ret;
/*  9285 */                     $ret = Sk.misceval.callsimOrSuspend($lattr626, $binop633);
/*  9286 */                     $blk = 12; /* allowing case fallthrough */
/*  9287 */                 case 12:
/*  9288 */                     /* --- function return or resume suspension --- */
/*  9289 */                     if ($ret && $ret.$isSuspension) {
/*  9290 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 189, 12);
/*  9291 */                     }
/*  9292 */                     var $call634 = $ret;
/*  9293 */                     //
/*  9294 */                     // line 189:
/*  9295 */                     //             f.write('P6 %d %d 255\n' % (self.width, self.height))
/*  9296 */                     //             ^
/*  9297 */                     //
/*  9298 */                     $currLineNo = 189;
/*  9299 */                     $currColNo = 12;
/*  9300 */ 
/*  9301 */ 
/*  9302 */                     //
/*  9303 */                     // line 190:
/*  9304 */                     //             f.write(self.bytes.tostring())
/*  9305 */                     //             ^
/*  9306 */                     //
/*  9307 */                     $currLineNo = 190;
/*  9308 */                     $currColNo = 12;
/*  9309 */ 
/*  9310 */                     if (f === undefined) {
/*  9311 */                         throw new Sk.builtin.UnboundLocalError('local variable \'f\' referenced before assignment');
/*  9312 */                     }
/*  9313 */                     $ret = Sk.abstr.gattr(f, 'write', true);
/*  9314 */                     $blk = 13; /* allowing case fallthrough */
/*  9315 */                 case 13:
/*  9316 */                     /* --- function return or resume suspension --- */
/*  9317 */                     if ($ret && $ret.$isSuspension) {
/*  9318 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 190, 12);
/*  9319 */                     }
/*  9320 */                     var $lattr635 = $ret;
/*  9321 */                     if (self === undefined) {
/*  9322 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9323 */                     }
/*  9324 */                     $ret = Sk.abstr.gattr(self, 'bytes', true);
/*  9325 */                     $blk = 14; /* allowing case fallthrough */
/*  9326 */                 case 14:
/*  9327 */                     /* --- function return or resume suspension --- */
/*  9328 */                     if ($ret && $ret.$isSuspension) {
/*  9329 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 190, 20);
/*  9330 */                     }
/*  9331 */                     var $lattr636 = $ret;
/*  9332 */                     $ret = Sk.abstr.gattr($lattr636, 'tostring', true);
/*  9333 */                     $blk = 15; /* allowing case fallthrough */
/*  9334 */                 case 15:
/*  9335 */                     /* --- function return or resume suspension --- */
/*  9336 */                     if ($ret && $ret.$isSuspension) {
/*  9337 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 190, 20);
/*  9338 */                     }
/*  9339 */                     var $lattr637 = $ret;
/*  9340 */                     $ret;
/*  9341 */                     $ret = Sk.misceval.callsimOrSuspend($lattr637);
/*  9342 */                     $blk = 16; /* allowing case fallthrough */
/*  9343 */                 case 16:
/*  9344 */                     /* --- function return or resume suspension --- */
/*  9345 */                     if ($ret && $ret.$isSuspension) {
/*  9346 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 190, 20);
/*  9347 */                     }
/*  9348 */                     var $call638 = $ret;
/*  9349 */                     //
/*  9350 */                     // line 190:
/*  9351 */                     //             f.write(self.bytes.tostring())
/*  9352 */                     //                     ^
/*  9353 */                     //
/*  9354 */                     $currLineNo = 190;
/*  9355 */                     $currColNo = 20;
/*  9356 */ 
/*  9357 */                     $ret;
/*  9358 */                     $ret = Sk.misceval.callsimOrSuspend($lattr635, $call638);
/*  9359 */                     $blk = 17; /* allowing case fallthrough */
/*  9360 */                 case 17:
/*  9361 */                     /* --- function return or resume suspension --- */
/*  9362 */                     if ($ret && $ret.$isSuspension) {
/*  9363 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 190, 12);
/*  9364 */                     }
/*  9365 */                     var $call639 = $ret;
/*  9366 */                     //
/*  9367 */                     // line 190:
/*  9368 */                     //             f.write(self.bytes.tostring())
/*  9369 */                     //             ^
/*  9370 */                     //
/*  9371 */                     $currLineNo = 190;
/*  9372 */                     $currColNo = 12;
/*  9373 */ 
/*  9374 */                     $exc.pop();
/*  9375 */                     $blk = 2; /* allowing case fallthrough */
/*  9376 */                 case 2:
/*  9377 */                     /* --- withtidyup --- */
/*  9378 */                     $ret = Sk.misceval.callsimOrSuspend($exit624, Sk.builtin.none.none$, Sk.builtin.none.none$, Sk.builtin.none.none$);
/*  9379 */                     $blk = 19; /* allowing case fallthrough */
/*  9380 */                 case 19:
/*  9381 */                     /* --- function return or resume suspension --- */
/*  9382 */                     if ($ret && $ret.$isSuspension) {
/*  9383 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9384 */                     }
/*  9385 */                     if ($postfinally !== undefined) {
/*  9386 */                         if ($postfinally.returning) {
/*  9387 */                             return $postfinally.returning;
/*  9388 */                         } else {
/*  9389 */                             $blk = $postfinally.gotoBlock;
/*  9390 */                             $postfinally = undefined;
/*  9391 */                             continue;
/*  9392 */                         }
/*  9393 */                     }
/*  9394 */                     $blk = 3; /* allowing case fallthrough */
/*  9395 */                 case 3:
/*  9396 */                     /* --- withcarryon --- */
/*  9397 */                     return Sk.builtin.none.none$;
/*  9398 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9399 */                 case 1:
/*  9400 */                     /* --- withexh --- */
/*  9401 */                     $ret = Sk.misceval.applyOrSuspend($exit624, undefined, Sk.builtin.getExcInfo($err), undefined, []);
/*  9402 */                     $blk = 18; /* allowing case fallthrough */
/*  9403 */                 case 18:
/*  9404 */                     /* --- function return or resume suspension --- */
/*  9405 */                     if ($ret && $ret.$isSuspension) {
/*  9406 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 188, 13);
/*  9407 */                     }
/*  9408 */                     var $jtrue640 = ($ret === true || Sk.misceval.isTrue($ret));
/*  9409 */                     if ($jtrue640) { /*test passed */
/*  9410 */                         $blk = 3;
/*  9411 */                         continue;
/*  9412 */                     }
/*  9413 */                     throw $err;
/*  9414 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9415 */                 }
/*  9416 */             } catch (err) {
/*  9417 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9418 */                     err = new Sk.builtin.ExternalError(err);
/*  9419 */                 }
/*  9420 */                 err.traceback.push({
/*  9421 */                     lineno: $currLineNo,
/*  9422 */                     colno: $currColNo,
/*  9423 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9424 */                 });
/*  9425 */                 if ($exc.length > 0) {
/*  9426 */                     $err = err;
/*  9427 */                     $blk = $exc.pop();
/*  9428 */                     continue;
/*  9429 */                 } else {
/*  9430 */                     throw err;
/*  9431 */                 }
/*  9432 */             }
/*  9433 */         }
/*  9434 */     });
/*  9435 */     var $scope643 = (function $firstIntersection644$(intersections) {
/*  9436 */         var candidateT, i, result; /* locals */
/*  9437 */         var candidateT, candidateT, candidateT, candidateT, i, i, i, intersections, intersections, result, result, result, result, result, $iter645, $iter645, $compareres648, $compareres648, $jfalse649, $boolopsucc650, $jfalse651, $compareres652, $loadgbl653, $unaryop654, $compareres658, $compareres658, $jfalse659, $boolopsucc660, $jtrue661, $compareres662, $compareres658, $jfalse659, $boolopsucc660, $jtrue661, $compareres662, $lsubscr663;
/*  9438 */         var $wakeFromSuspension = function() {
/*  9439 */             var susp = $scope643.$wakingSuspension;
/*  9440 */             delete $scope643.$wakingSuspension;
/*  9441 */             $blk = susp.$blk;
/*  9442 */             $loc = susp.$loc;
/*  9443 */             $gbl = susp.$gbl;
/*  9444 */             $exc = susp.$exc;
/*  9445 */             $err = susp.$err;
/*  9446 */             $postfinally = susp.$postfinally;
/*  9447 */             $currLineNo = susp.$lineno;
/*  9448 */             $currColNo = susp.$colno;
/*  9449 */             Sk.lastYield = Date.now();
/*  9450 */             candidateT = susp.$tmps.candidateT;
/*  9451 */             i = susp.$tmps.i;
/*  9452 */             intersections = susp.$tmps.intersections;
/*  9453 */             result = susp.$tmps.result;
/*  9454 */             $iter645 = susp.$tmps.$iter645;
/*  9455 */             $compareres648 = susp.$tmps.$compareres648;
/*  9456 */             $jfalse649 = susp.$tmps.$jfalse649;
/*  9457 */             $boolopsucc650 = susp.$tmps.$boolopsucc650;
/*  9458 */             $jfalse651 = susp.$tmps.$jfalse651;
/*  9459 */             $compareres652 = susp.$tmps.$compareres652;
/*  9460 */             $loadgbl653 = susp.$tmps.$loadgbl653;
/*  9461 */             $unaryop654 = susp.$tmps.$unaryop654;
/*  9462 */             $compareres658 = susp.$tmps.$compareres658;
/*  9463 */             $jfalse659 = susp.$tmps.$jfalse659;
/*  9464 */             $boolopsucc660 = susp.$tmps.$boolopsucc660;
/*  9465 */             $jtrue661 = susp.$tmps.$jtrue661;
/*  9466 */             $compareres662 = susp.$tmps.$compareres662;
/*  9467 */             $lsubscr663 = susp.$tmps.$lsubscr663;
/*  9468 */             try {
/*  9469 */                 $ret = susp.child.resume();
/*  9470 */             } catch (err) {
/*  9471 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9472 */                     err = new Sk.builtin.ExternalError(err);
/*  9473 */                 }
/*  9474 */                 err.traceback.push({
/*  9475 */                     lineno: $currLineNo,
/*  9476 */                     colno: $currColNo,
/*  9477 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9478 */                 });
/*  9479 */                 if ($exc.length > 0) {
/*  9480 */                     $err = err;
/*  9481 */                     $blk = $exc.pop();
/*  9482 */                 } else {
/*  9483 */                     throw err;
/*  9484 */                 }
/*  9485 */             }
/*  9486 */         };
/*  9487 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9488 */             var susp = new Sk.misceval.Suspension();
/*  9489 */             susp.child = $child;
/*  9490 */             susp.resume = function() {
/*  9491 */                 $scope643.$wakingSuspension = susp;
/*  9492 */                 return $scope643();
/*  9493 */             };
/*  9494 */             susp.data = susp.child.data;
/*  9495 */             susp.$blk = $blk;
/*  9496 */             susp.$loc = $loc;
/*  9497 */             susp.$gbl = $gbl;
/*  9498 */             susp.$exc = $exc;
/*  9499 */             susp.$err = $err;
/*  9500 */             susp.$postfinally = $postfinally;
/*  9501 */             susp.$filename = $filename;
/*  9502 */             susp.$lineno = $lineno;
/*  9503 */             susp.$colno = $colno;
/*  9504 */             susp.optional = susp.child.optional;
/*  9505 */             susp.$tmps = {
/*  9506 */                 "candidateT": candidateT,
/*  9507 */                 "i": i,
/*  9508 */                 "intersections": intersections,
/*  9509 */                 "result": result,
/*  9510 */                 "$iter645": $iter645,
/*  9511 */                 "$compareres648": $compareres648,
/*  9512 */                 "$jfalse649": $jfalse649,
/*  9513 */                 "$boolopsucc650": $boolopsucc650,
/*  9514 */                 "$jfalse651": $jfalse651,
/*  9515 */                 "$compareres652": $compareres652,
/*  9516 */                 "$loadgbl653": $loadgbl653,
/*  9517 */                 "$unaryop654": $unaryop654,
/*  9518 */                 "$compareres658": $compareres658,
/*  9519 */                 "$jfalse659": $jfalse659,
/*  9520 */                 "$boolopsucc660": $boolopsucc660,
/*  9521 */                 "$jtrue661": $jtrue661,
/*  9522 */                 "$compareres662": $compareres662,
/*  9523 */                 "$lsubscr663": $lsubscr663
/*  9524 */             };
/*  9525 */             return susp;
/*  9526 */         };
/*  9527 */         var $blk = 0,
/*  9528 */             $exc = [],
/*  9529 */             $loc = {},
/*  9530 */             $gbl = this,
/*  9531 */             $err = undefined,
/*  9532 */             $ret = undefined,
/*  9533 */             $postfinally = undefined,
/*  9534 */             $currLineNo = undefined,
/*  9535 */             $currColNo = undefined;
/*  9536 */         if ($scope643.$wakingSuspension !== undefined) {
/*  9537 */             $wakeFromSuspension();
/*  9538 */         } else {
/*  9539 */             Sk.builtin.pyCheckArgs("firstIntersection", arguments, 1, 1, false, false);
/*  9540 */         }
/*  9541 */         while (true) {
/*  9542 */             try {
/*  9543 */                 switch ($blk) {
/*  9544 */                 case 0:
/*  9545 */                     /* --- codeobj entry --- */
/*  9546 */                     if (intersections === undefined) {
/*  9547 */                         throw new Sk.builtin.UnboundLocalError('local variable \'intersections\' referenced before assignment');
/*  9548 */                     }
/*  9549 */ 
/*  9550 */                     //
/*  9551 */                     // line 193:
/*  9552 */                     //     result = None
/*  9553 */                     //     ^
/*  9554 */                     //
/*  9555 */                     $currLineNo = 193;
/*  9556 */                     $currColNo = 4;
/*  9557 */ 
/*  9558 */                     result = Sk.builtin.none.none$;
/*  9559 */                     //
/*  9560 */                     // line 194:
/*  9561 */                     //     for i in intersections:
/*  9562 */                     //     ^
/*  9563 */                     //
/*  9564 */                     $currLineNo = 194;
/*  9565 */                     $currColNo = 4;
/*  9566 */ 
/*  9567 */                     if (intersections === undefined) {
/*  9568 */                         throw new Sk.builtin.UnboundLocalError('local variable \'intersections\' referenced before assignment');
/*  9569 */                     }
/*  9570 */                     var $iter645 = Sk.abstr.iter(intersections);
/*  9571 */                     $blk = 1; /* allowing case fallthrough */
/*  9572 */                 case 1:
/*  9573 */                     /* --- for start --- */
/*  9574 */                     $ret = Sk.abstr.iternext($iter645, true);
/*  9575 */                     $blk = 4; /* allowing case fallthrough */
/*  9576 */                 case 4:
/*  9577 */                     /* --- function return or resume suspension --- */
/*  9578 */                     if ($ret && $ret.$isSuspension) {
/*  9579 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 194, 4);
/*  9580 */                     }
/*  9581 */                     var $next646 = $ret;
/*  9582 */                     if ($next646 === undefined) {
/*  9583 */                         $blk = 2;
/*  9584 */                         continue;
/*  9585 */                     }
/*  9586 */                     i = $next646;
/*  9587 */                     //
/*  9588 */                     // line 195:
/*  9589 */                     //         candidateT = i[1]
/*  9590 */                     //         ^
/*  9591 */                     //
/*  9592 */                     $currLineNo = 195;
/*  9593 */                     $currColNo = 8;
/*  9594 */ 
/*  9595 */                     if (i === undefined) {
/*  9596 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9597 */                     }
/*  9598 */                     $ret = Sk.abstr.objectGetItem(i, new Sk.builtin.int_(1), true);
/*  9599 */                     $blk = 5; /* allowing case fallthrough */
/*  9600 */                 case 5:
/*  9601 */                     /* --- function return or resume suspension --- */
/*  9602 */                     if ($ret && $ret.$isSuspension) {
/*  9603 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  9604 */                     }
/*  9605 */                     var $lsubscr647 = $ret;
/*  9606 */                     candidateT = $lsubscr647;
/*  9607 */                     //
/*  9608 */                     // line 196:
/*  9609 */                     //         if candidateT is not None and candidateT > -EPSILON:
/*  9610 */                     //         ^
/*  9611 */                     //
/*  9612 */                     $currLineNo = 196;
/*  9613 */                     $currColNo = 8;
/*  9614 */ 
/*  9615 */                     if (candidateT === undefined) {
/*  9616 */                         throw new Sk.builtin.UnboundLocalError('local variable \'candidateT\' referenced before assignment');
/*  9617 */                     }
/*  9618 */                     var $compareres648 = null;
/*  9619 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(candidateT, Sk.builtin.none.none$, 'IsNot', true));
/*  9620 */                     $blk = 9; /* allowing case fallthrough */
/*  9621 */                 case 9:
/*  9622 */                     /* --- function return or resume suspension --- */
/*  9623 */                     if ($ret && $ret.$isSuspension) {
/*  9624 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 196, 11);
/*  9625 */                     }
/*  9626 */                     $compareres648 = $ret;
/*  9627 */                     var $jfalse649 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9628 */                     if ($jfalse649) { /*test failed */
/*  9629 */                         $blk = 8;
/*  9630 */                         continue;
/*  9631 */                     }
/*  9632 */                     $blk = 8; /* allowing case fallthrough */
/*  9633 */                 case 8:
/*  9634 */                     /* --- done --- */
/*  9635 */                     var $boolopsucc650 = $compareres648;
/*  9636 */                     $boolopsucc650 = $compareres648;
/*  9637 */                     var $jfalse651 = ($compareres648 === false || !Sk.misceval.isTrue($compareres648));
/*  9638 */                     if ($jfalse651) { /*test failed */
/*  9639 */                         $blk = 7;
/*  9640 */                         continue;
/*  9641 */                     }
/*  9642 */                     if (candidateT === undefined) {
/*  9643 */                         throw new Sk.builtin.UnboundLocalError('local variable \'candidateT\' referenced before assignment');
/*  9644 */                     }
/*  9645 */                     var $compareres652 = null;
/*  9646 */                     var $loadgbl653 = Sk.misceval.loadname('EPSILON', $gbl);
/*  9647 */                     var $unaryop654 = Sk.abstr.numberUnaryOp($loadgbl653, 'USub');
/*  9648 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(candidateT, $unaryop654, 'Gt', true));
/*  9649 */                     $blk = 11; /* allowing case fallthrough */
/*  9650 */                 case 11:
/*  9651 */                     /* --- function return or resume suspension --- */
/*  9652 */                     if ($ret && $ret.$isSuspension) {
/*  9653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 196, 38);
/*  9654 */                     }
/*  9655 */                     $compareres652 = $ret;
/*  9656 */                     var $jfalse655 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9657 */                     if ($jfalse655) { /*test failed */
/*  9658 */                         $blk = 10;
/*  9659 */                         continue;
/*  9660 */                     }
/*  9661 */                     $blk = 10; /* allowing case fallthrough */
/*  9662 */                 case 10:
/*  9663 */                     /* --- done --- */
/*  9664 */                     $boolopsucc650 = $compareres652;
/*  9665 */                     var $jfalse656 = ($compareres652 === false || !Sk.misceval.isTrue($compareres652));
/*  9666 */                     if ($jfalse656) { /*test failed */
/*  9667 */                         $blk = 7;
/*  9668 */                         continue;
/*  9669 */                     }
/*  9670 */                     $blk = 7; /* allowing case fallthrough */
/*  9671 */                 case 7:
/*  9672 */                     /* --- end of boolop --- */
/*  9673 */                     var $jfalse657 = ($boolopsucc650 === false || !Sk.misceval.isTrue($boolopsucc650));
/*  9674 */                     if ($jfalse657) { /*test failed */
/*  9675 */                         $blk = 6;
/*  9676 */                         continue;
/*  9677 */                     }
/*  9678 */                     //
/*  9679 */                     // line 197:
/*  9680 */                     //             if result is None or candidateT < result[1]:
/*  9681 */                     //             ^
/*  9682 */                     //
/*  9683 */                     $currLineNo = 197;
/*  9684 */                     $currColNo = 12;
/*  9685 */ 
/*  9686 */                     if (result === undefined) {
/*  9687 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  9688 */                     }
/*  9689 */                     var $compareres658 = null;
/*  9690 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(result, Sk.builtin.none.none$, 'Is', true));
/*  9691 */                     $blk = 15; /* allowing case fallthrough */
/*  9692 */                 case 15:
/*  9693 */                     /* --- function return or resume suspension --- */
/*  9694 */                     if ($ret && $ret.$isSuspension) {
/*  9695 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 197, 15);
/*  9696 */                     }
/*  9697 */                     $compareres658 = $ret;
/*  9698 */                     var $jfalse659 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9699 */                     if ($jfalse659) { /*test failed */
/*  9700 */                         $blk = 14;
/*  9701 */                         continue;
/*  9702 */                     }
/*  9703 */                     $blk = 14; /* allowing case fallthrough */
/*  9704 */                 case 14:
/*  9705 */                     /* --- done --- */
/*  9706 */                     var $boolopsucc660 = $compareres658;
/*  9707 */                     $boolopsucc660 = $compareres658;
/*  9708 */                     var $jtrue661 = ($compareres658 === true || Sk.misceval.isTrue($compareres658));
/*  9709 */                     if ($jtrue661) { /*test passed */
/*  9710 */                         $blk = 13;
/*  9711 */                         continue;
/*  9712 */                     }
/*  9713 */                     if (candidateT === undefined) {
/*  9714 */                         throw new Sk.builtin.UnboundLocalError('local variable \'candidateT\' referenced before assignment');
/*  9715 */                     }
/*  9716 */                     var $compareres662 = null;
/*  9717 */                     if (result === undefined) {
/*  9718 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  9719 */                     }
/*  9720 */                     $ret = Sk.abstr.objectGetItem(result, new Sk.builtin.int_(1), true);
/*  9721 */                     $blk = 17; /* allowing case fallthrough */
/*  9722 */                 case 17:
/*  9723 */                     /* --- function return or resume suspension --- */
/*  9724 */                     if ($ret && $ret.$isSuspension) {
/*  9725 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/*  9726 */                     }
/*  9727 */                     var $lsubscr663 = $ret;
/*  9728 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(candidateT, $lsubscr663, 'Lt', true));
/*  9729 */                     $blk = 18; /* allowing case fallthrough */
/*  9730 */                 case 18:
/*  9731 */                     /* --- function return or resume suspension --- */
/*  9732 */                     if ($ret && $ret.$isSuspension) {
/*  9733 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 197, 33);
/*  9734 */                     }
/*  9735 */                     $compareres662 = $ret;
/*  9736 */                     var $jfalse664 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9737 */                     if ($jfalse664) { /*test failed */
/*  9738 */                         $blk = 16;
/*  9739 */                         continue;
/*  9740 */                     }
/*  9741 */                     $blk = 16; /* allowing case fallthrough */
/*  9742 */                 case 16:
/*  9743 */                     /* --- done --- */
/*  9744 */                     $boolopsucc660 = $compareres662;
/*  9745 */                     var $jtrue665 = ($compareres662 === true || Sk.misceval.isTrue($compareres662));
/*  9746 */                     if ($jtrue665) { /*test passed */
/*  9747 */                         $blk = 13;
/*  9748 */                         continue;
/*  9749 */                     }
/*  9750 */                     $blk = 13; /* allowing case fallthrough */
/*  9751 */                 case 13:
/*  9752 */                     /* --- end of boolop --- */
/*  9753 */                     var $jfalse666 = ($boolopsucc660 === false || !Sk.misceval.isTrue($boolopsucc660));
/*  9754 */                     if ($jfalse666) { /*test failed */
/*  9755 */                         $blk = 12;
/*  9756 */                         continue;
/*  9757 */                     }
/*  9758 */                     //
/*  9759 */                     // line 198:
/*  9760 */                     //                 result = i
/*  9761 */                     //                 ^
/*  9762 */                     //
/*  9763 */                     $currLineNo = 198;
/*  9764 */                     $currColNo = 16;
/*  9765 */ 
/*  9766 */                     if (i === undefined) {
/*  9767 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9768 */                     }
/*  9769 */                     result = i;
/*  9770 */                     $blk = 12; /* allowing case fallthrough */
/*  9771 */                 case 12:
/*  9772 */                     /* --- end of if --- */
/*  9773 */                     $blk = 6; /* allowing case fallthrough */
/*  9774 */                 case 6:
/*  9775 */                     /* --- end of if --- */
/*  9776 */                     $blk = 1; /* jump */
/*  9777 */                     continue;
/*  9778 */                 case 2:
/*  9779 */                     /* --- for cleanup --- */
/*  9780 */                     $blk = 3; /* allowing case fallthrough */
/*  9781 */                 case 3:
/*  9782 */                     /* --- for end --- */
/*  9783 */                     //
/*  9784 */                     // line 199:
/*  9785 */                     //     return result
/*  9786 */                     //     ^
/*  9787 */                     //
/*  9788 */                     $currLineNo = 199;
/*  9789 */                     $currColNo = 4;
/*  9790 */ 
/*  9791 */                     if (result === undefined) {
/*  9792 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  9793 */                     }
/*  9794 */                     return result;
/*  9795 */                     return Sk.builtin.none.none$;
/*  9796 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9797 */                 }
/*  9798 */             } catch (err) {
/*  9799 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9800 */                     err = new Sk.builtin.ExternalError(err);
/*  9801 */                 }
/*  9802 */                 err.traceback.push({
/*  9803 */                     lineno: $currLineNo,
/*  9804 */                     colno: $currColNo,
/*  9805 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9806 */                 });
/*  9807 */                 if ($exc.length > 0) {
/*  9808 */                     $err = err;
/*  9809 */                     $blk = $exc.pop();
/*  9810 */                     continue;
/*  9811 */                 } else {
/*  9812 */                     throw err;
/*  9813 */                 }
/*  9814 */             }
/*  9815 */         }
/*  9816 */     });
/*  9817 */     var $scope669 = (function $Scene$class_outer($globals, $locals, $rest) {
/*  9818 */         var $gbl = $globals,
/*  9819 */             $loc = $locals;
/*  9820 */         (function $Scene$_closure() {
/*  9821 */             var $blk = 0,
/*  9822 */                 $exc = [],
/*  9823 */                 $ret = undefined,
/*  9824 */                 $postfinally = undefined,
/*  9825 */                 $currLineNo = undefined,
/*  9826 */                 $currColNo = undefined;
/*  9827 */             while (true) {
/*  9828 */                 try {
/*  9829 */                     switch ($blk) {
/*  9830 */                     case 0:
/*  9831 */                         /* --- class entry --- */
/*  9832 */                         //
/*  9833 */                         // line 202:
/*  9834 */                         //     def __init__(self):
/*  9835 */                         //     ^
/*  9836 */                         //
/*  9837 */                         $currLineNo = 202;
/*  9838 */                         $currColNo = 4;
/*  9839 */ 
/*  9840 */                         $scope670.co_name = new Sk.builtins['str']('__init__');
/*  9841 */                         $scope670.co_varnames = ['self'];
/*  9842 */                         var $funcobj678 = new Sk.builtins['function']($scope670, $gbl);
/*  9843 */                         $loc.__init__ = $funcobj678;
/*  9844 */                         //
/*  9845 */                         // line 210:
/*  9846 */                         //     def moveTo(self, p):
/*  9847 */                         //     ^
/*  9848 */                         //
/*  9849 */                         $currLineNo = 210;
/*  9850 */                         $currColNo = 4;
/*  9851 */ 
/*  9852 */                         $scope679.co_name = new Sk.builtins['str']('moveTo');
/*  9853 */                         $scope679.co_varnames = ['self', 'p'];
/*  9854 */                         var $funcobj681 = new Sk.builtins['function']($scope679, $gbl);
/*  9855 */                         $loc.moveTo = $funcobj681;
/*  9856 */                         //
/*  9857 */                         // line 213:
/*  9858 */                         //     def lookAt(self, p):
/*  9859 */                         //     ^
/*  9860 */                         //
/*  9861 */                         $currLineNo = 213;
/*  9862 */                         $currColNo = 4;
/*  9863 */ 
/*  9864 */                         $scope682.co_name = new Sk.builtins['str']('lookAt');
/*  9865 */                         $scope682.co_varnames = ['self', 'p'];
/*  9866 */                         var $funcobj684 = new Sk.builtins['function']($scope682, $gbl);
/*  9867 */                         $loc.lookAt = $funcobj684;
/*  9868 */                         //
/*  9869 */                         // line 216:
/*  9870 */                         //     def addObject(self, object, surface):
/*  9871 */                         //     ^
/*  9872 */                         //
/*  9873 */                         $currLineNo = 216;
/*  9874 */                         $currColNo = 4;
/*  9875 */ 
/*  9876 */                         $scope685.co_name = new Sk.builtins['str']('addObject');
/*  9877 */                         $scope685.co_varnames = ['self', 'object', 'surface'];
/*  9878 */                         var $funcobj693 = new Sk.builtins['function']($scope685, $gbl);
/*  9879 */                         $loc.addObject = $funcobj693;
/*  9880 */                         //
/*  9881 */                         // line 219:
/*  9882 */                         //     def addLight(self, p):
/*  9883 */                         //     ^
/*  9884 */                         //
/*  9885 */                         $currLineNo = 219;
/*  9886 */                         $currColNo = 4;
/*  9887 */ 
/*  9888 */                         $scope694.co_name = new Sk.builtins['str']('addLight');
/*  9889 */                         $scope694.co_varnames = ['self', 'p'];
/*  9890 */                         var $funcobj699 = new Sk.builtins['function']($scope694, $gbl);
/*  9891 */                         $loc.addLight = $funcobj699;
/*  9892 */                         //
/*  9893 */                         // line 222:
/*  9894 */                         //     def render(self, canvas):
/*  9895 */                         //     ^
/*  9896 */                         //
/*  9897 */                         $currLineNo = 222;
/*  9898 */                         $currColNo = 4;
/*  9899 */ 
/*  9900 */                         $scope700.co_name = new Sk.builtins['str']('render');
/*  9901 */                         $scope700.co_varnames = ['self', 'canvas'];
/*  9902 */                         var $funcobj774 = new Sk.builtins['function']($scope700, $gbl);
/*  9903 */                         $loc.render = $funcobj774;
/*  9904 */                         //
/*  9905 */                         // line 253:
/*  9906 */                         //     def rayColour(self, ray):
/*  9907 */                         //     ^
/*  9908 */                         //
/*  9909 */                         $currLineNo = 253;
/*  9910 */                         $currColNo = 4;
/*  9911 */ 
/*  9912 */                         $scope775.co_name = new Sk.builtins['str']('rayColour');
/*  9913 */                         $scope775.co_varnames = ['self', 'ray'];
/*  9914 */                         var $funcobj817 = new Sk.builtins['function']($scope775, $gbl);
/*  9915 */                         $loc.rayColour = $funcobj817;
/*  9916 */                         //
/*  9917 */                         // line 269:
/*  9918 */                         //     def _lightIsVisible(self, l, p):
/*  9919 */                         //     ^
/*  9920 */                         //
/*  9921 */                         $currLineNo = 269;
/*  9922 */                         $currColNo = 4;
/*  9923 */ 
/*  9924 */                         $scope818.co_name = new Sk.builtins['str']('_lightIsVisible');
/*  9925 */                         $scope818.co_varnames = ['self', 'l', 'p'];
/*  9926 */                         var $funcobj838 = new Sk.builtins['function']($scope818, $gbl);
/*  9927 */                         $loc._lightIsVisible = $funcobj838;
/*  9928 */                         //
/*  9929 */                         // line 276:
/*  9930 */                         //     def visibleLights(self, p):
/*  9931 */                         //     ^
/*  9932 */                         //
/*  9933 */                         $currLineNo = 276;
/*  9934 */                         $currColNo = 4;
/*  9935 */ 
/*  9936 */                         $scope839.co_name = new Sk.builtins['str']('visibleLights');
/*  9937 */                         $scope839.co_varnames = ['self', 'p'];
/*  9938 */                         var $funcobj850 = new Sk.builtins['function']($scope839, $gbl);
/*  9939 */                         $loc.visibleLights = $funcobj850;
/*  9940 */                         return;
/*  9941 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9942 */                     }
/*  9943 */                 } catch (err) {
/*  9944 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  9945 */                         err = new Sk.builtin.ExternalError(err);
/*  9946 */                     }
/*  9947 */                     err.traceback.push({
/*  9948 */                         lineno: $currLineNo,
/*  9949 */                         colno: $currColNo,
/*  9950 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9951 */                     });
/*  9952 */                     if ($exc.length > 0) {
/*  9953 */                         $err = err;
/*  9954 */                         $blk = $exc.pop();
/*  9955 */                         continue;
/*  9956 */                     } else {
/*  9957 */                         throw err;
/*  9958 */                     }
/*  9959 */                 }
/*  9960 */             }
/*  9961 */         }).apply(null, $rest);
/*  9962 */     });
/*  9963 */     var $scope670 = (function $__init__671$(self) {
/*  9964 */         var self, self, self, self, self, self, self, $loadlist672, $loadlist673, $loadgbl674, $loadgbl674, $call675, $loadgbl676, $loadgbl676, $lattr677;
/*  9965 */         var $wakeFromSuspension = function() {
/*  9966 */             var susp = $scope670.$wakingSuspension;
/*  9967 */             delete $scope670.$wakingSuspension;
/*  9968 */             $blk = susp.$blk;
/*  9969 */             $loc = susp.$loc;
/*  9970 */             $gbl = susp.$gbl;
/*  9971 */             $exc = susp.$exc;
/*  9972 */             $err = susp.$err;
/*  9973 */             $postfinally = susp.$postfinally;
/*  9974 */             $currLineNo = susp.$lineno;
/*  9975 */             $currColNo = susp.$colno;
/*  9976 */             Sk.lastYield = Date.now();
/*  9977 */             self = susp.$tmps.self;
/*  9978 */             $loadlist672 = susp.$tmps.$loadlist672;
/*  9979 */             $loadlist673 = susp.$tmps.$loadlist673;
/*  9980 */             $loadgbl674 = susp.$tmps.$loadgbl674;
/*  9981 */             $call675 = susp.$tmps.$call675;
/*  9982 */             $loadgbl676 = susp.$tmps.$loadgbl676;
/*  9983 */             $lattr677 = susp.$tmps.$lattr677;
/*  9984 */             try {
/*  9985 */                 $ret = susp.child.resume();
/*  9986 */             } catch (err) {
/*  9987 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9988 */                     err = new Sk.builtin.ExternalError(err);
/*  9989 */                 }
/*  9990 */                 err.traceback.push({
/*  9991 */                     lineno: $currLineNo,
/*  9992 */                     colno: $currColNo,
/*  9993 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/*  9994 */                 });
/*  9995 */                 if ($exc.length > 0) {
/*  9996 */                     $err = err;
/*  9997 */                     $blk = $exc.pop();
/*  9998 */                 } else {
/*  9999 */                     throw err;
/* 10000 */                 }
/* 10001 */             }
/* 10002 */         };
/* 10003 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10004 */             var susp = new Sk.misceval.Suspension();
/* 10005 */             susp.child = $child;
/* 10006 */             susp.resume = function() {
/* 10007 */                 $scope670.$wakingSuspension = susp;
/* 10008 */                 return $scope670();
/* 10009 */             };
/* 10010 */             susp.data = susp.child.data;
/* 10011 */             susp.$blk = $blk;
/* 10012 */             susp.$loc = $loc;
/* 10013 */             susp.$gbl = $gbl;
/* 10014 */             susp.$exc = $exc;
/* 10015 */             susp.$err = $err;
/* 10016 */             susp.$postfinally = $postfinally;
/* 10017 */             susp.$filename = $filename;
/* 10018 */             susp.$lineno = $lineno;
/* 10019 */             susp.$colno = $colno;
/* 10020 */             susp.optional = susp.child.optional;
/* 10021 */             susp.$tmps = {
/* 10022 */                 "self": self,
/* 10023 */                 "$loadlist672": $loadlist672,
/* 10024 */                 "$loadlist673": $loadlist673,
/* 10025 */                 "$loadgbl674": $loadgbl674,
/* 10026 */                 "$call675": $call675,
/* 10027 */                 "$loadgbl676": $loadgbl676,
/* 10028 */                 "$lattr677": $lattr677
/* 10029 */             };
/* 10030 */             return susp;
/* 10031 */         };
/* 10032 */         var $blk = 0,
/* 10033 */             $exc = [],
/* 10034 */             $loc = {},
/* 10035 */             $gbl = this,
/* 10036 */             $err = undefined,
/* 10037 */             $ret = undefined,
/* 10038 */             $postfinally = undefined,
/* 10039 */             $currLineNo = undefined,
/* 10040 */             $currColNo = undefined;
/* 10041 */         if ($scope670.$wakingSuspension !== undefined) {
/* 10042 */             $wakeFromSuspension();
/* 10043 */         } else {
/* 10044 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/* 10045 */         }
/* 10046 */         while (true) {
/* 10047 */             try {
/* 10048 */                 switch ($blk) {
/* 10049 */                 case 0:
/* 10050 */                     /* --- codeobj entry --- */
/* 10051 */                     if (self === undefined) {
/* 10052 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10053 */                     }
/* 10054 */ 
/* 10055 */                     //
/* 10056 */                     // line 203:
/* 10057 */                     //         self.objects = []
/* 10058 */                     //         ^
/* 10059 */                     //
/* 10060 */                     $currLineNo = 203;
/* 10061 */                     $currColNo = 8;
/* 10062 */ 
/* 10063 */                     var $loadlist672 = new Sk.builtins['list']([]);
/* 10064 */                     if (self === undefined) {
/* 10065 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10066 */                     }
/* 10067 */                     $ret = Sk.abstr.sattr(self, 'objects', $loadlist672, true);
/* 10068 */                     $blk = 1; /* allowing case fallthrough */
/* 10069 */                 case 1:
/* 10070 */                     /* --- function return or resume suspension --- */
/* 10071 */                     if ($ret && $ret.$isSuspension) {
/* 10072 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 203, 8);
/* 10073 */                     }
/* 10074 */                     //
/* 10075 */                     // line 204:
/* 10076 */                     //         self.lightPoints = []
/* 10077 */                     //         ^
/* 10078 */                     //
/* 10079 */                     $currLineNo = 204;
/* 10080 */                     $currColNo = 8;
/* 10081 */ 
/* 10082 */                     var $loadlist673 = new Sk.builtins['list']([]);
/* 10083 */                     if (self === undefined) {
/* 10084 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10085 */                     }
/* 10086 */                     $ret = Sk.abstr.sattr(self, 'lightPoints', $loadlist673, true);
/* 10087 */                     $blk = 2; /* allowing case fallthrough */
/* 10088 */                 case 2:
/* 10089 */                     /* --- function return or resume suspension --- */
/* 10090 */                     if ($ret && $ret.$isSuspension) {
/* 10091 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 204, 8);
/* 10092 */                     }
/* 10093 */                     //
/* 10094 */                     // line 205:
/* 10095 */                     //         self.position = Point(0, 1.8, 10)
/* 10096 */                     //         ^
/* 10097 */                     //
/* 10098 */                     $currLineNo = 205;
/* 10099 */                     $currColNo = 8;
/* 10100 */ 
/* 10101 */                     var $loadgbl674 = Sk.misceval.loadname('Point', $gbl);
/* 10102 */                     $ret;
/* 10103 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl674, new Sk.builtin.int_(0), new Sk.builtin.float_(1.8), new Sk.builtin.int_(10));
/* 10104 */                     $blk = 3; /* allowing case fallthrough */
/* 10105 */                 case 3:
/* 10106 */                     /* --- function return or resume suspension --- */
/* 10107 */                     if ($ret && $ret.$isSuspension) {
/* 10108 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 205, 24);
/* 10109 */                     }
/* 10110 */                     var $call675 = $ret;
/* 10111 */                     //
/* 10112 */                     // line 205:
/* 10113 */                     //         self.position = Point(0, 1.8, 10)
/* 10114 */                     //                         ^
/* 10115 */                     //
/* 10116 */                     $currLineNo = 205;
/* 10117 */                     $currColNo = 24;
/* 10118 */ 
/* 10119 */                     if (self === undefined) {
/* 10120 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10121 */                     }
/* 10122 */                     $ret = Sk.abstr.sattr(self, 'position', $call675, true);
/* 10123 */                     $blk = 4; /* allowing case fallthrough */
/* 10124 */                 case 4:
/* 10125 */                     /* --- function return or resume suspension --- */
/* 10126 */                     if ($ret && $ret.$isSuspension) {
/* 10127 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 205, 8);
/* 10128 */                     }
/* 10129 */                     //
/* 10130 */                     // line 206:
/* 10131 */                     //         self.lookingAt = Point.ZERO
/* 10132 */                     //         ^
/* 10133 */                     //
/* 10134 */                     $currLineNo = 206;
/* 10135 */                     $currColNo = 8;
/* 10136 */ 
/* 10137 */                     var $loadgbl676 = Sk.misceval.loadname('Point', $gbl);
/* 10138 */                     $ret = Sk.abstr.gattr($loadgbl676, 'ZERO', true);
/* 10139 */                     $blk = 5; /* allowing case fallthrough */
/* 10140 */                 case 5:
/* 10141 */                     /* --- function return or resume suspension --- */
/* 10142 */                     if ($ret && $ret.$isSuspension) {
/* 10143 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 206, 25);
/* 10144 */                     }
/* 10145 */                     var $lattr677 = $ret;
/* 10146 */                     if (self === undefined) {
/* 10147 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10148 */                     }
/* 10149 */                     $ret = Sk.abstr.sattr(self, 'lookingAt', $lattr677, true);
/* 10150 */                     $blk = 6; /* allowing case fallthrough */
/* 10151 */                 case 6:
/* 10152 */                     /* --- function return or resume suspension --- */
/* 10153 */                     if ($ret && $ret.$isSuspension) {
/* 10154 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 206, 8);
/* 10155 */                     }
/* 10156 */                     //
/* 10157 */                     // line 207:
/* 10158 */                     //         self.fieldOfView = 45
/* 10159 */                     //         ^
/* 10160 */                     //
/* 10161 */                     $currLineNo = 207;
/* 10162 */                     $currColNo = 8;
/* 10163 */ 
/* 10164 */                     if (self === undefined) {
/* 10165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10166 */                     }
/* 10167 */                     $ret = Sk.abstr.sattr(self, 'fieldOfView', new Sk.builtin.int_(45), true);
/* 10168 */                     $blk = 7; /* allowing case fallthrough */
/* 10169 */                 case 7:
/* 10170 */                     /* --- function return or resume suspension --- */
/* 10171 */                     if ($ret && $ret.$isSuspension) {
/* 10172 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 207, 8);
/* 10173 */                     }
/* 10174 */                     //
/* 10175 */                     // line 208:
/* 10176 */                     //         self.recursionDepth = 0
/* 10177 */                     //         ^
/* 10178 */                     //
/* 10179 */                     $currLineNo = 208;
/* 10180 */                     $currColNo = 8;
/* 10181 */ 
/* 10182 */                     if (self === undefined) {
/* 10183 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10184 */                     }
/* 10185 */                     $ret = Sk.abstr.sattr(self, 'recursionDepth', new Sk.builtin.int_(0), true);
/* 10186 */                     $blk = 8; /* allowing case fallthrough */
/* 10187 */                 case 8:
/* 10188 */                     /* --- function return or resume suspension --- */
/* 10189 */                     if ($ret && $ret.$isSuspension) {
/* 10190 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 208, 8);
/* 10191 */                     }
/* 10192 */                     return Sk.builtin.none.none$;
/* 10193 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10194 */                 }
/* 10195 */             } catch (err) {
/* 10196 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10197 */                     err = new Sk.builtin.ExternalError(err);
/* 10198 */                 }
/* 10199 */                 err.traceback.push({
/* 10200 */                     lineno: $currLineNo,
/* 10201 */                     colno: $currColNo,
/* 10202 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10203 */                 });
/* 10204 */                 if ($exc.length > 0) {
/* 10205 */                     $err = err;
/* 10206 */                     $blk = $exc.pop();
/* 10207 */                     continue;
/* 10208 */                 } else {
/* 10209 */                     throw err;
/* 10210 */                 }
/* 10211 */             }
/* 10212 */         }
/* 10213 */     });
/* 10214 */     var $scope679 = (function $moveTo680$(self, p) {
/* 10215 */         var p, p, self, self;
/* 10216 */         var $wakeFromSuspension = function() {
/* 10217 */             var susp = $scope679.$wakingSuspension;
/* 10218 */             delete $scope679.$wakingSuspension;
/* 10219 */             $blk = susp.$blk;
/* 10220 */             $loc = susp.$loc;
/* 10221 */             $gbl = susp.$gbl;
/* 10222 */             $exc = susp.$exc;
/* 10223 */             $err = susp.$err;
/* 10224 */             $postfinally = susp.$postfinally;
/* 10225 */             $currLineNo = susp.$lineno;
/* 10226 */             $currColNo = susp.$colno;
/* 10227 */             Sk.lastYield = Date.now();
/* 10228 */             p = susp.$tmps.p;
/* 10229 */             self = susp.$tmps.self;
/* 10230 */             try {
/* 10231 */                 $ret = susp.child.resume();
/* 10232 */             } catch (err) {
/* 10233 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10234 */                     err = new Sk.builtin.ExternalError(err);
/* 10235 */                 }
/* 10236 */                 err.traceback.push({
/* 10237 */                     lineno: $currLineNo,
/* 10238 */                     colno: $currColNo,
/* 10239 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10240 */                 });
/* 10241 */                 if ($exc.length > 0) {
/* 10242 */                     $err = err;
/* 10243 */                     $blk = $exc.pop();
/* 10244 */                 } else {
/* 10245 */                     throw err;
/* 10246 */                 }
/* 10247 */             }
/* 10248 */         };
/* 10249 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10250 */             var susp = new Sk.misceval.Suspension();
/* 10251 */             susp.child = $child;
/* 10252 */             susp.resume = function() {
/* 10253 */                 $scope679.$wakingSuspension = susp;
/* 10254 */                 return $scope679();
/* 10255 */             };
/* 10256 */             susp.data = susp.child.data;
/* 10257 */             susp.$blk = $blk;
/* 10258 */             susp.$loc = $loc;
/* 10259 */             susp.$gbl = $gbl;
/* 10260 */             susp.$exc = $exc;
/* 10261 */             susp.$err = $err;
/* 10262 */             susp.$postfinally = $postfinally;
/* 10263 */             susp.$filename = $filename;
/* 10264 */             susp.$lineno = $lineno;
/* 10265 */             susp.$colno = $colno;
/* 10266 */             susp.optional = susp.child.optional;
/* 10267 */             susp.$tmps = {
/* 10268 */                 "p": p,
/* 10269 */                 "self": self
/* 10270 */             };
/* 10271 */             return susp;
/* 10272 */         };
/* 10273 */         var $blk = 0,
/* 10274 */             $exc = [],
/* 10275 */             $loc = {},
/* 10276 */             $gbl = this,
/* 10277 */             $err = undefined,
/* 10278 */             $ret = undefined,
/* 10279 */             $postfinally = undefined,
/* 10280 */             $currLineNo = undefined,
/* 10281 */             $currColNo = undefined;
/* 10282 */         if ($scope679.$wakingSuspension !== undefined) {
/* 10283 */             $wakeFromSuspension();
/* 10284 */         } else {
/* 10285 */             Sk.builtin.pyCheckArgs("moveTo", arguments, 2, 2, false, false);
/* 10286 */         }
/* 10287 */         while (true) {
/* 10288 */             try {
/* 10289 */                 switch ($blk) {
/* 10290 */                 case 0:
/* 10291 */                     /* --- codeobj entry --- */
/* 10292 */                     if (self === undefined) {
/* 10293 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10294 */                     }
/* 10295 */                     if (p === undefined) {
/* 10296 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10297 */                     }
/* 10298 */ 
/* 10299 */                     //
/* 10300 */                     // line 211:
/* 10301 */                     //         self.position = p
/* 10302 */                     //         ^
/* 10303 */                     //
/* 10304 */                     $currLineNo = 211;
/* 10305 */                     $currColNo = 8;
/* 10306 */ 
/* 10307 */                     if (p === undefined) {
/* 10308 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10309 */                     }
/* 10310 */                     if (self === undefined) {
/* 10311 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10312 */                     }
/* 10313 */                     $ret = Sk.abstr.sattr(self, 'position', p, true);
/* 10314 */                     $blk = 1; /* allowing case fallthrough */
/* 10315 */                 case 1:
/* 10316 */                     /* --- function return or resume suspension --- */
/* 10317 */                     if ($ret && $ret.$isSuspension) {
/* 10318 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 211, 8);
/* 10319 */                     }
/* 10320 */                     return Sk.builtin.none.none$;
/* 10321 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10322 */                 }
/* 10323 */             } catch (err) {
/* 10324 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10325 */                     err = new Sk.builtin.ExternalError(err);
/* 10326 */                 }
/* 10327 */                 err.traceback.push({
/* 10328 */                     lineno: $currLineNo,
/* 10329 */                     colno: $currColNo,
/* 10330 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10331 */                 });
/* 10332 */                 if ($exc.length > 0) {
/* 10333 */                     $err = err;
/* 10334 */                     $blk = $exc.pop();
/* 10335 */                     continue;
/* 10336 */                 } else {
/* 10337 */                     throw err;
/* 10338 */                 }
/* 10339 */             }
/* 10340 */         }
/* 10341 */     });
/* 10342 */     var $scope682 = (function $lookAt683$(self, p) {
/* 10343 */         var p, p, self, self;
/* 10344 */         var $wakeFromSuspension = function() {
/* 10345 */             var susp = $scope682.$wakingSuspension;
/* 10346 */             delete $scope682.$wakingSuspension;
/* 10347 */             $blk = susp.$blk;
/* 10348 */             $loc = susp.$loc;
/* 10349 */             $gbl = susp.$gbl;
/* 10350 */             $exc = susp.$exc;
/* 10351 */             $err = susp.$err;
/* 10352 */             $postfinally = susp.$postfinally;
/* 10353 */             $currLineNo = susp.$lineno;
/* 10354 */             $currColNo = susp.$colno;
/* 10355 */             Sk.lastYield = Date.now();
/* 10356 */             p = susp.$tmps.p;
/* 10357 */             self = susp.$tmps.self;
/* 10358 */             try {
/* 10359 */                 $ret = susp.child.resume();
/* 10360 */             } catch (err) {
/* 10361 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10362 */                     err = new Sk.builtin.ExternalError(err);
/* 10363 */                 }
/* 10364 */                 err.traceback.push({
/* 10365 */                     lineno: $currLineNo,
/* 10366 */                     colno: $currColNo,
/* 10367 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10368 */                 });
/* 10369 */                 if ($exc.length > 0) {
/* 10370 */                     $err = err;
/* 10371 */                     $blk = $exc.pop();
/* 10372 */                 } else {
/* 10373 */                     throw err;
/* 10374 */                 }
/* 10375 */             }
/* 10376 */         };
/* 10377 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10378 */             var susp = new Sk.misceval.Suspension();
/* 10379 */             susp.child = $child;
/* 10380 */             susp.resume = function() {
/* 10381 */                 $scope682.$wakingSuspension = susp;
/* 10382 */                 return $scope682();
/* 10383 */             };
/* 10384 */             susp.data = susp.child.data;
/* 10385 */             susp.$blk = $blk;
/* 10386 */             susp.$loc = $loc;
/* 10387 */             susp.$gbl = $gbl;
/* 10388 */             susp.$exc = $exc;
/* 10389 */             susp.$err = $err;
/* 10390 */             susp.$postfinally = $postfinally;
/* 10391 */             susp.$filename = $filename;
/* 10392 */             susp.$lineno = $lineno;
/* 10393 */             susp.$colno = $colno;
/* 10394 */             susp.optional = susp.child.optional;
/* 10395 */             susp.$tmps = {
/* 10396 */                 "p": p,
/* 10397 */                 "self": self
/* 10398 */             };
/* 10399 */             return susp;
/* 10400 */         };
/* 10401 */         var $blk = 0,
/* 10402 */             $exc = [],
/* 10403 */             $loc = {},
/* 10404 */             $gbl = this,
/* 10405 */             $err = undefined,
/* 10406 */             $ret = undefined,
/* 10407 */             $postfinally = undefined,
/* 10408 */             $currLineNo = undefined,
/* 10409 */             $currColNo = undefined;
/* 10410 */         if ($scope682.$wakingSuspension !== undefined) {
/* 10411 */             $wakeFromSuspension();
/* 10412 */         } else {
/* 10413 */             Sk.builtin.pyCheckArgs("lookAt", arguments, 2, 2, false, false);
/* 10414 */         }
/* 10415 */         while (true) {
/* 10416 */             try {
/* 10417 */                 switch ($blk) {
/* 10418 */                 case 0:
/* 10419 */                     /* --- codeobj entry --- */
/* 10420 */                     if (self === undefined) {
/* 10421 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10422 */                     }
/* 10423 */                     if (p === undefined) {
/* 10424 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10425 */                     }
/* 10426 */ 
/* 10427 */                     //
/* 10428 */                     // line 214:
/* 10429 */                     //         self.lookingAt = p
/* 10430 */                     //         ^
/* 10431 */                     //
/* 10432 */                     $currLineNo = 214;
/* 10433 */                     $currColNo = 8;
/* 10434 */ 
/* 10435 */                     if (p === undefined) {
/* 10436 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10437 */                     }
/* 10438 */                     if (self === undefined) {
/* 10439 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10440 */                     }
/* 10441 */                     $ret = Sk.abstr.sattr(self, 'lookingAt', p, true);
/* 10442 */                     $blk = 1; /* allowing case fallthrough */
/* 10443 */                 case 1:
/* 10444 */                     /* --- function return or resume suspension --- */
/* 10445 */                     if ($ret && $ret.$isSuspension) {
/* 10446 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 214, 8);
/* 10447 */                     }
/* 10448 */                     return Sk.builtin.none.none$;
/* 10449 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10450 */                 }
/* 10451 */             } catch (err) {
/* 10452 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10453 */                     err = new Sk.builtin.ExternalError(err);
/* 10454 */                 }
/* 10455 */                 err.traceback.push({
/* 10456 */                     lineno: $currLineNo,
/* 10457 */                     colno: $currColNo,
/* 10458 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10459 */                 });
/* 10460 */                 if ($exc.length > 0) {
/* 10461 */                     $err = err;
/* 10462 */                     $blk = $exc.pop();
/* 10463 */                     continue;
/* 10464 */                 } else {
/* 10465 */                     throw err;
/* 10466 */                 }
/* 10467 */             }
/* 10468 */         }
/* 10469 */     });
/* 10470 */     var $scope685 = (function $addObject686$(self, object, surface) {
/* 10471 */         var object, object, self, self, surface, surface, $lattr687, $lattr687, $lattr688, $elem689, $elem690, $loadtuple691;
/* 10472 */         var $wakeFromSuspension = function() {
/* 10473 */             var susp = $scope685.$wakingSuspension;
/* 10474 */             delete $scope685.$wakingSuspension;
/* 10475 */             $blk = susp.$blk;
/* 10476 */             $loc = susp.$loc;
/* 10477 */             $gbl = susp.$gbl;
/* 10478 */             $exc = susp.$exc;
/* 10479 */             $err = susp.$err;
/* 10480 */             $postfinally = susp.$postfinally;
/* 10481 */             $currLineNo = susp.$lineno;
/* 10482 */             $currColNo = susp.$colno;
/* 10483 */             Sk.lastYield = Date.now();
/* 10484 */             object = susp.$tmps.object;
/* 10485 */             self = susp.$tmps.self;
/* 10486 */             surface = susp.$tmps.surface;
/* 10487 */             $lattr687 = susp.$tmps.$lattr687;
/* 10488 */             $lattr688 = susp.$tmps.$lattr688;
/* 10489 */             $elem689 = susp.$tmps.$elem689;
/* 10490 */             $elem690 = susp.$tmps.$elem690;
/* 10491 */             $loadtuple691 = susp.$tmps.$loadtuple691;
/* 10492 */             try {
/* 10493 */                 $ret = susp.child.resume();
/* 10494 */             } catch (err) {
/* 10495 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10496 */                     err = new Sk.builtin.ExternalError(err);
/* 10497 */                 }
/* 10498 */                 err.traceback.push({
/* 10499 */                     lineno: $currLineNo,
/* 10500 */                     colno: $currColNo,
/* 10501 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10502 */                 });
/* 10503 */                 if ($exc.length > 0) {
/* 10504 */                     $err = err;
/* 10505 */                     $blk = $exc.pop();
/* 10506 */                 } else {
/* 10507 */                     throw err;
/* 10508 */                 }
/* 10509 */             }
/* 10510 */         };
/* 10511 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10512 */             var susp = new Sk.misceval.Suspension();
/* 10513 */             susp.child = $child;
/* 10514 */             susp.resume = function() {
/* 10515 */                 $scope685.$wakingSuspension = susp;
/* 10516 */                 return $scope685();
/* 10517 */             };
/* 10518 */             susp.data = susp.child.data;
/* 10519 */             susp.$blk = $blk;
/* 10520 */             susp.$loc = $loc;
/* 10521 */             susp.$gbl = $gbl;
/* 10522 */             susp.$exc = $exc;
/* 10523 */             susp.$err = $err;
/* 10524 */             susp.$postfinally = $postfinally;
/* 10525 */             susp.$filename = $filename;
/* 10526 */             susp.$lineno = $lineno;
/* 10527 */             susp.$colno = $colno;
/* 10528 */             susp.optional = susp.child.optional;
/* 10529 */             susp.$tmps = {
/* 10530 */                 "object": object,
/* 10531 */                 "self": self,
/* 10532 */                 "surface": surface,
/* 10533 */                 "$lattr687": $lattr687,
/* 10534 */                 "$lattr688": $lattr688,
/* 10535 */                 "$elem689": $elem689,
/* 10536 */                 "$elem690": $elem690,
/* 10537 */                 "$loadtuple691": $loadtuple691
/* 10538 */             };
/* 10539 */             return susp;
/* 10540 */         };
/* 10541 */         var $blk = 0,
/* 10542 */             $exc = [],
/* 10543 */             $loc = {},
/* 10544 */             $gbl = this,
/* 10545 */             $err = undefined,
/* 10546 */             $ret = undefined,
/* 10547 */             $postfinally = undefined,
/* 10548 */             $currLineNo = undefined,
/* 10549 */             $currColNo = undefined;
/* 10550 */         if ($scope685.$wakingSuspension !== undefined) {
/* 10551 */             $wakeFromSuspension();
/* 10552 */         } else {
/* 10553 */             Sk.builtin.pyCheckArgs("addObject", arguments, 3, 3, false, false);
/* 10554 */         }
/* 10555 */         while (true) {
/* 10556 */             try {
/* 10557 */                 switch ($blk) {
/* 10558 */                 case 0:
/* 10559 */                     /* --- codeobj entry --- */
/* 10560 */                     if (self === undefined) {
/* 10561 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10562 */                     }
/* 10563 */                     if (object === undefined) {
/* 10564 */                         throw new Sk.builtin.UnboundLocalError('local variable \'object\' referenced before assignment');
/* 10565 */                     }
/* 10566 */                     if (surface === undefined) {
/* 10567 */                         throw new Sk.builtin.UnboundLocalError('local variable \'surface\' referenced before assignment');
/* 10568 */                     }
/* 10569 */ 
/* 10570 */                     //
/* 10571 */                     // line 217:
/* 10572 */                     //         self.objects.append((object, surface))
/* 10573 */                     //         ^
/* 10574 */                     //
/* 10575 */                     $currLineNo = 217;
/* 10576 */                     $currColNo = 8;
/* 10577 */ 
/* 10578 */                     if (self === undefined) {
/* 10579 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10580 */                     }
/* 10581 */                     $ret = Sk.abstr.gattr(self, 'objects', true);
/* 10582 */                     $blk = 1; /* allowing case fallthrough */
/* 10583 */                 case 1:
/* 10584 */                     /* --- function return or resume suspension --- */
/* 10585 */                     if ($ret && $ret.$isSuspension) {
/* 10586 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 217, 8);
/* 10587 */                     }
/* 10588 */                     var $lattr687 = $ret;
/* 10589 */                     $ret = Sk.abstr.gattr($lattr687, 'append', true);
/* 10590 */                     $blk = 2; /* allowing case fallthrough */
/* 10591 */                 case 2:
/* 10592 */                     /* --- function return or resume suspension --- */
/* 10593 */                     if ($ret && $ret.$isSuspension) {
/* 10594 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 217, 8);
/* 10595 */                     }
/* 10596 */                     var $lattr688 = $ret;
/* 10597 */                     if (object === undefined) {
/* 10598 */                         throw new Sk.builtin.UnboundLocalError('local variable \'object\' referenced before assignment');
/* 10599 */                     }
/* 10600 */                     var $elem689 = object;
/* 10601 */                     if (surface === undefined) {
/* 10602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'surface\' referenced before assignment');
/* 10603 */                     }
/* 10604 */                     var $elem690 = surface;
/* 10605 */                     var $loadtuple691 = new Sk.builtins['tuple']([$elem689, $elem690]);
/* 10606 */                     $ret;
/* 10607 */                     $ret = Sk.misceval.callsimOrSuspend($lattr688, $loadtuple691);
/* 10608 */                     $blk = 3; /* allowing case fallthrough */
/* 10609 */                 case 3:
/* 10610 */                     /* --- function return or resume suspension --- */
/* 10611 */                     if ($ret && $ret.$isSuspension) {
/* 10612 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 217, 8);
/* 10613 */                     }
/* 10614 */                     var $call692 = $ret;
/* 10615 */                     //
/* 10616 */                     // line 217:
/* 10617 */                     //         self.objects.append((object, surface))
/* 10618 */                     //         ^
/* 10619 */                     //
/* 10620 */                     $currLineNo = 217;
/* 10621 */                     $currColNo = 8;
/* 10622 */ 
/* 10623 */                     return Sk.builtin.none.none$;
/* 10624 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10625 */                 }
/* 10626 */             } catch (err) {
/* 10627 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10628 */                     err = new Sk.builtin.ExternalError(err);
/* 10629 */                 }
/* 10630 */                 err.traceback.push({
/* 10631 */                     lineno: $currLineNo,
/* 10632 */                     colno: $currColNo,
/* 10633 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10634 */                 });
/* 10635 */                 if ($exc.length > 0) {
/* 10636 */                     $err = err;
/* 10637 */                     $blk = $exc.pop();
/* 10638 */                     continue;
/* 10639 */                 } else {
/* 10640 */                     throw err;
/* 10641 */                 }
/* 10642 */             }
/* 10643 */         }
/* 10644 */     });
/* 10645 */     var $scope694 = (function $addLight695$(self, p) {
/* 10646 */         var p, p, self, self, $lattr696, $lattr696, $lattr697;
/* 10647 */         var $wakeFromSuspension = function() {
/* 10648 */             var susp = $scope694.$wakingSuspension;
/* 10649 */             delete $scope694.$wakingSuspension;
/* 10650 */             $blk = susp.$blk;
/* 10651 */             $loc = susp.$loc;
/* 10652 */             $gbl = susp.$gbl;
/* 10653 */             $exc = susp.$exc;
/* 10654 */             $err = susp.$err;
/* 10655 */             $postfinally = susp.$postfinally;
/* 10656 */             $currLineNo = susp.$lineno;
/* 10657 */             $currColNo = susp.$colno;
/* 10658 */             Sk.lastYield = Date.now();
/* 10659 */             p = susp.$tmps.p;
/* 10660 */             self = susp.$tmps.self;
/* 10661 */             $lattr696 = susp.$tmps.$lattr696;
/* 10662 */             $lattr697 = susp.$tmps.$lattr697;
/* 10663 */             try {
/* 10664 */                 $ret = susp.child.resume();
/* 10665 */             } catch (err) {
/* 10666 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10667 */                     err = new Sk.builtin.ExternalError(err);
/* 10668 */                 }
/* 10669 */                 err.traceback.push({
/* 10670 */                     lineno: $currLineNo,
/* 10671 */                     colno: $currColNo,
/* 10672 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10673 */                 });
/* 10674 */                 if ($exc.length > 0) {
/* 10675 */                     $err = err;
/* 10676 */                     $blk = $exc.pop();
/* 10677 */                 } else {
/* 10678 */                     throw err;
/* 10679 */                 }
/* 10680 */             }
/* 10681 */         };
/* 10682 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10683 */             var susp = new Sk.misceval.Suspension();
/* 10684 */             susp.child = $child;
/* 10685 */             susp.resume = function() {
/* 10686 */                 $scope694.$wakingSuspension = susp;
/* 10687 */                 return $scope694();
/* 10688 */             };
/* 10689 */             susp.data = susp.child.data;
/* 10690 */             susp.$blk = $blk;
/* 10691 */             susp.$loc = $loc;
/* 10692 */             susp.$gbl = $gbl;
/* 10693 */             susp.$exc = $exc;
/* 10694 */             susp.$err = $err;
/* 10695 */             susp.$postfinally = $postfinally;
/* 10696 */             susp.$filename = $filename;
/* 10697 */             susp.$lineno = $lineno;
/* 10698 */             susp.$colno = $colno;
/* 10699 */             susp.optional = susp.child.optional;
/* 10700 */             susp.$tmps = {
/* 10701 */                 "p": p,
/* 10702 */                 "self": self,
/* 10703 */                 "$lattr696": $lattr696,
/* 10704 */                 "$lattr697": $lattr697
/* 10705 */             };
/* 10706 */             return susp;
/* 10707 */         };
/* 10708 */         var $blk = 0,
/* 10709 */             $exc = [],
/* 10710 */             $loc = {},
/* 10711 */             $gbl = this,
/* 10712 */             $err = undefined,
/* 10713 */             $ret = undefined,
/* 10714 */             $postfinally = undefined,
/* 10715 */             $currLineNo = undefined,
/* 10716 */             $currColNo = undefined;
/* 10717 */         if ($scope694.$wakingSuspension !== undefined) {
/* 10718 */             $wakeFromSuspension();
/* 10719 */         } else {
/* 10720 */             Sk.builtin.pyCheckArgs("addLight", arguments, 2, 2, false, false);
/* 10721 */         }
/* 10722 */         while (true) {
/* 10723 */             try {
/* 10724 */                 switch ($blk) {
/* 10725 */                 case 0:
/* 10726 */                     /* --- codeobj entry --- */
/* 10727 */                     if (self === undefined) {
/* 10728 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10729 */                     }
/* 10730 */                     if (p === undefined) {
/* 10731 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10732 */                     }
/* 10733 */ 
/* 10734 */                     //
/* 10735 */                     // line 220:
/* 10736 */                     //         self.lightPoints.append(p)
/* 10737 */                     //         ^
/* 10738 */                     //
/* 10739 */                     $currLineNo = 220;
/* 10740 */                     $currColNo = 8;
/* 10741 */ 
/* 10742 */                     if (self === undefined) {
/* 10743 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10744 */                     }
/* 10745 */                     $ret = Sk.abstr.gattr(self, 'lightPoints', true);
/* 10746 */                     $blk = 1; /* allowing case fallthrough */
/* 10747 */                 case 1:
/* 10748 */                     /* --- function return or resume suspension --- */
/* 10749 */                     if ($ret && $ret.$isSuspension) {
/* 10750 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 220, 8);
/* 10751 */                     }
/* 10752 */                     var $lattr696 = $ret;
/* 10753 */                     $ret = Sk.abstr.gattr($lattr696, 'append', true);
/* 10754 */                     $blk = 2; /* allowing case fallthrough */
/* 10755 */                 case 2:
/* 10756 */                     /* --- function return or resume suspension --- */
/* 10757 */                     if ($ret && $ret.$isSuspension) {
/* 10758 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 220, 8);
/* 10759 */                     }
/* 10760 */                     var $lattr697 = $ret;
/* 10761 */                     if (p === undefined) {
/* 10762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10763 */                     }
/* 10764 */                     $ret;
/* 10765 */                     $ret = Sk.misceval.callsimOrSuspend($lattr697, p);
/* 10766 */                     $blk = 3; /* allowing case fallthrough */
/* 10767 */                 case 3:
/* 10768 */                     /* --- function return or resume suspension --- */
/* 10769 */                     if ($ret && $ret.$isSuspension) {
/* 10770 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 220, 8);
/* 10771 */                     }
/* 10772 */                     var $call698 = $ret;
/* 10773 */                     //
/* 10774 */                     // line 220:
/* 10775 */                     //         self.lightPoints.append(p)
/* 10776 */                     //         ^
/* 10777 */                     //
/* 10778 */                     $currLineNo = 220;
/* 10779 */                     $currColNo = 8;
/* 10780 */ 
/* 10781 */                     return Sk.builtin.none.none$;
/* 10782 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10783 */                 }
/* 10784 */             } catch (err) {
/* 10785 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10786 */                     err = new Sk.builtin.ExternalError(err);
/* 10787 */                 }
/* 10788 */                 err.traceback.push({
/* 10789 */                     lineno: $currLineNo,
/* 10790 */                     colno: $currColNo,
/* 10791 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10792 */                 });
/* 10793 */                 if ($exc.length > 0) {
/* 10794 */                     $err = err;
/* 10795 */                     $blk = $exc.pop();
/* 10796 */                     continue;
/* 10797 */                 } else {
/* 10798 */                     throw err;
/* 10799 */                 }
/* 10800 */             }
/* 10801 */         }
/* 10802 */     });
/* 10803 */     var $scope700 = (function $render701$(self, canvas) {
/* 10804 */         var colour, currentfraction, eye, fovRadians, halfHeight, halfWidth, height, pixelHeight, pixelWidth, previousfraction, ray, vpRight, vpUp, width, x, xcomp, y, ycomp; /* locals */
/* 10805 */         var canvas, canvas, canvas, canvas, canvas, canvas, canvas, colour, colour, currentfraction, currentfraction, currentfraction, eye, eye, eye, eye, eye, fovRadians, fovRadians, halfHeight, halfHeight, halfHeight, halfWidth, halfWidth, halfWidth, halfWidth, height, height, pixelHeight, pixelHeight, pixelWidth, pixelWidth, previousfraction, previousfraction, previousfraction, ray, ray, self, self, self, self, self, self, vpRight, vpRight, vpRight, vpUp, vpUp, width, width, x, x, x, xcomp, xcomp, y, y, y, y, ycomp, ycomp, $loadgbl702, $loadgbl702, $lattr703, $loadgbl708, $loadgbl708, $lattr709, $loadgbl720, $loadgbl720, $lattr721, $loadgbl720, $lattr721, $lattr722, $loadgbl720, $lattr721, $lattr722, $lattr723, $binop724, $lattr726, $lattr726, $lattr727, $loadgbl728, $lattr726, $lattr727, $loadgbl728, $lattr729, $lattr726, $lattr727, $loadgbl728, $lattr729, $call730, $lattr726, $lattr727, $loadgbl728, $lattr729, $call730, $lattr731, $lattr733, $lattr733, $lattr734, $lattr733, $lattr734, $call735, $lattr733, $lattr734, $call735, $lattr736, $loadgbl738, $loadgbl738, $lattr739, $iter741, $loadgbl738, $lattr739, $call740, $iter741, $loadgbl743, $loadgbl743, $call744, $binop747, $compareres748, $loadgbl751, $loadgbl751, $lattr752, $iter754, $loadgbl751, $lattr752, $call753, $iter754, $lattr756, $binop757, $binop758, $lattr760, $binop761, $binop762, $loadgbl764, $loadgbl764, $lattr765, $loadgbl764, $lattr765, $lattr766, $binop767, $binop768, $lattr770, $lattr772;
/* 10806 */         var $wakeFromSuspension = function() {
/* 10807 */             var susp = $scope700.$wakingSuspension;
/* 10808 */             delete $scope700.$wakingSuspension;
/* 10809 */             $blk = susp.$blk;
/* 10810 */             $loc = susp.$loc;
/* 10811 */             $gbl = susp.$gbl;
/* 10812 */             $exc = susp.$exc;
/* 10813 */             $err = susp.$err;
/* 10814 */             $postfinally = susp.$postfinally;
/* 10815 */             $currLineNo = susp.$lineno;
/* 10816 */             $currColNo = susp.$colno;
/* 10817 */             Sk.lastYield = Date.now();
/* 10818 */             canvas = susp.$tmps.canvas;
/* 10819 */             colour = susp.$tmps.colour;
/* 10820 */             currentfraction = susp.$tmps.currentfraction;
/* 10821 */             eye = susp.$tmps.eye;
/* 10822 */             fovRadians = susp.$tmps.fovRadians;
/* 10823 */             halfHeight = susp.$tmps.halfHeight;
/* 10824 */             halfWidth = susp.$tmps.halfWidth;
/* 10825 */             height = susp.$tmps.height;
/* 10826 */             pixelHeight = susp.$tmps.pixelHeight;
/* 10827 */             pixelWidth = susp.$tmps.pixelWidth;
/* 10828 */             previousfraction = susp.$tmps.previousfraction;
/* 10829 */             ray = susp.$tmps.ray;
/* 10830 */             self = susp.$tmps.self;
/* 10831 */             vpRight = susp.$tmps.vpRight;
/* 10832 */             vpUp = susp.$tmps.vpUp;
/* 10833 */             width = susp.$tmps.width;
/* 10834 */             x = susp.$tmps.x;
/* 10835 */             xcomp = susp.$tmps.xcomp;
/* 10836 */             y = susp.$tmps.y;
/* 10837 */             ycomp = susp.$tmps.ycomp;
/* 10838 */             $loadgbl702 = susp.$tmps.$loadgbl702;
/* 10839 */             $lattr703 = susp.$tmps.$lattr703;
/* 10840 */             $loadgbl708 = susp.$tmps.$loadgbl708;
/* 10841 */             $lattr709 = susp.$tmps.$lattr709;
/* 10842 */             $loadgbl720 = susp.$tmps.$loadgbl720;
/* 10843 */             $lattr721 = susp.$tmps.$lattr721;
/* 10844 */             $lattr722 = susp.$tmps.$lattr722;
/* 10845 */             $lattr723 = susp.$tmps.$lattr723;
/* 10846 */             $binop724 = susp.$tmps.$binop724;
/* 10847 */             $lattr726 = susp.$tmps.$lattr726;
/* 10848 */             $lattr727 = susp.$tmps.$lattr727;
/* 10849 */             $loadgbl728 = susp.$tmps.$loadgbl728;
/* 10850 */             $lattr729 = susp.$tmps.$lattr729;
/* 10851 */             $call730 = susp.$tmps.$call730;
/* 10852 */             $lattr731 = susp.$tmps.$lattr731;
/* 10853 */             $lattr733 = susp.$tmps.$lattr733;
/* 10854 */             $lattr734 = susp.$tmps.$lattr734;
/* 10855 */             $call735 = susp.$tmps.$call735;
/* 10856 */             $lattr736 = susp.$tmps.$lattr736;
/* 10857 */             $loadgbl738 = susp.$tmps.$loadgbl738;
/* 10858 */             $lattr739 = susp.$tmps.$lattr739;
/* 10859 */             $iter741 = susp.$tmps.$iter741;
/* 10860 */             $call740 = susp.$tmps.$call740;
/* 10861 */             $loadgbl743 = susp.$tmps.$loadgbl743;
/* 10862 */             $call744 = susp.$tmps.$call744;
/* 10863 */             $binop747 = susp.$tmps.$binop747;
/* 10864 */             $compareres748 = susp.$tmps.$compareres748;
/* 10865 */             $loadgbl751 = susp.$tmps.$loadgbl751;
/* 10866 */             $lattr752 = susp.$tmps.$lattr752;
/* 10867 */             $iter754 = susp.$tmps.$iter754;
/* 10868 */             $call753 = susp.$tmps.$call753;
/* 10869 */             $lattr756 = susp.$tmps.$lattr756;
/* 10870 */             $binop757 = susp.$tmps.$binop757;
/* 10871 */             $binop758 = susp.$tmps.$binop758;
/* 10872 */             $lattr760 = susp.$tmps.$lattr760;
/* 10873 */             $binop761 = susp.$tmps.$binop761;
/* 10874 */             $binop762 = susp.$tmps.$binop762;
/* 10875 */             $loadgbl764 = susp.$tmps.$loadgbl764;
/* 10876 */             $lattr765 = susp.$tmps.$lattr765;
/* 10877 */             $lattr766 = susp.$tmps.$lattr766;
/* 10878 */             $binop767 = susp.$tmps.$binop767;
/* 10879 */             $binop768 = susp.$tmps.$binop768;
/* 10880 */             $lattr770 = susp.$tmps.$lattr770;
/* 10881 */             $lattr772 = susp.$tmps.$lattr772;
/* 10882 */             try {
/* 10883 */                 $ret = susp.child.resume();
/* 10884 */             } catch (err) {
/* 10885 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10886 */                     err = new Sk.builtin.ExternalError(err);
/* 10887 */                 }
/* 10888 */                 err.traceback.push({
/* 10889 */                     lineno: $currLineNo,
/* 10890 */                     colno: $currColNo,
/* 10891 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 10892 */                 });
/* 10893 */                 if ($exc.length > 0) {
/* 10894 */                     $err = err;
/* 10895 */                     $blk = $exc.pop();
/* 10896 */                 } else {
/* 10897 */                     throw err;
/* 10898 */                 }
/* 10899 */             }
/* 10900 */         };
/* 10901 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10902 */             var susp = new Sk.misceval.Suspension();
/* 10903 */             susp.child = $child;
/* 10904 */             susp.resume = function() {
/* 10905 */                 $scope700.$wakingSuspension = susp;
/* 10906 */                 return $scope700();
/* 10907 */             };
/* 10908 */             susp.data = susp.child.data;
/* 10909 */             susp.$blk = $blk;
/* 10910 */             susp.$loc = $loc;
/* 10911 */             susp.$gbl = $gbl;
/* 10912 */             susp.$exc = $exc;
/* 10913 */             susp.$err = $err;
/* 10914 */             susp.$postfinally = $postfinally;
/* 10915 */             susp.$filename = $filename;
/* 10916 */             susp.$lineno = $lineno;
/* 10917 */             susp.$colno = $colno;
/* 10918 */             susp.optional = susp.child.optional;
/* 10919 */             susp.$tmps = {
/* 10920 */                 "canvas": canvas,
/* 10921 */                 "colour": colour,
/* 10922 */                 "currentfraction": currentfraction,
/* 10923 */                 "eye": eye,
/* 10924 */                 "fovRadians": fovRadians,
/* 10925 */                 "halfHeight": halfHeight,
/* 10926 */                 "halfWidth": halfWidth,
/* 10927 */                 "height": height,
/* 10928 */                 "pixelHeight": pixelHeight,
/* 10929 */                 "pixelWidth": pixelWidth,
/* 10930 */                 "previousfraction": previousfraction,
/* 10931 */                 "ray": ray,
/* 10932 */                 "self": self,
/* 10933 */                 "vpRight": vpRight,
/* 10934 */                 "vpUp": vpUp,
/* 10935 */                 "width": width,
/* 10936 */                 "x": x,
/* 10937 */                 "xcomp": xcomp,
/* 10938 */                 "y": y,
/* 10939 */                 "ycomp": ycomp,
/* 10940 */                 "$loadgbl702": $loadgbl702,
/* 10941 */                 "$lattr703": $lattr703,
/* 10942 */                 "$loadgbl708": $loadgbl708,
/* 10943 */                 "$lattr709": $lattr709,
/* 10944 */                 "$loadgbl720": $loadgbl720,
/* 10945 */                 "$lattr721": $lattr721,
/* 10946 */                 "$lattr722": $lattr722,
/* 10947 */                 "$lattr723": $lattr723,
/* 10948 */                 "$binop724": $binop724,
/* 10949 */                 "$lattr726": $lattr726,
/* 10950 */                 "$lattr727": $lattr727,
/* 10951 */                 "$loadgbl728": $loadgbl728,
/* 10952 */                 "$lattr729": $lattr729,
/* 10953 */                 "$call730": $call730,
/* 10954 */                 "$lattr731": $lattr731,
/* 10955 */                 "$lattr733": $lattr733,
/* 10956 */                 "$lattr734": $lattr734,
/* 10957 */                 "$call735": $call735,
/* 10958 */                 "$lattr736": $lattr736,
/* 10959 */                 "$loadgbl738": $loadgbl738,
/* 10960 */                 "$lattr739": $lattr739,
/* 10961 */                 "$iter741": $iter741,
/* 10962 */                 "$call740": $call740,
/* 10963 */                 "$loadgbl743": $loadgbl743,
/* 10964 */                 "$call744": $call744,
/* 10965 */                 "$binop747": $binop747,
/* 10966 */                 "$compareres748": $compareres748,
/* 10967 */                 "$loadgbl751": $loadgbl751,
/* 10968 */                 "$lattr752": $lattr752,
/* 10969 */                 "$iter754": $iter754,
/* 10970 */                 "$call753": $call753,
/* 10971 */                 "$lattr756": $lattr756,
/* 10972 */                 "$binop757": $binop757,
/* 10973 */                 "$binop758": $binop758,
/* 10974 */                 "$lattr760": $lattr760,
/* 10975 */                 "$binop761": $binop761,
/* 10976 */                 "$binop762": $binop762,
/* 10977 */                 "$loadgbl764": $loadgbl764,
/* 10978 */                 "$lattr765": $lattr765,
/* 10979 */                 "$lattr766": $lattr766,
/* 10980 */                 "$binop767": $binop767,
/* 10981 */                 "$binop768": $binop768,
/* 10982 */                 "$lattr770": $lattr770,
/* 10983 */                 "$lattr772": $lattr772
/* 10984 */             };
/* 10985 */             return susp;
/* 10986 */         };
/* 10987 */         var $blk = 0,
/* 10988 */             $exc = [],
/* 10989 */             $loc = {},
/* 10990 */             $gbl = this,
/* 10991 */             $err = undefined,
/* 10992 */             $ret = undefined,
/* 10993 */             $postfinally = undefined,
/* 10994 */             $currLineNo = undefined,
/* 10995 */             $currColNo = undefined;
/* 10996 */         if ($scope700.$wakingSuspension !== undefined) {
/* 10997 */             $wakeFromSuspension();
/* 10998 */         } else {
/* 10999 */             Sk.builtin.pyCheckArgs("render", arguments, 2, 2, false, false);
/* 11000 */         }
/* 11001 */         while (true) {
/* 11002 */             try {
/* 11003 */                 switch ($blk) {
/* 11004 */                 case 0:
/* 11005 */                     /* --- codeobj entry --- */
/* 11006 */                     if (self === undefined) {
/* 11007 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11008 */                     }
/* 11009 */                     if (canvas === undefined) {
/* 11010 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11011 */                     }
/* 11012 */ 
/* 11013 */                     //
/* 11014 */                     // line 224:
/* 11015 */                     //         fovRadians = math.pi * (self.fieldOfView / 2.0) / 180.0
/* 11016 */                     //         ^
/* 11017 */                     //
/* 11018 */                     $currLineNo = 224;
/* 11019 */                     $currColNo = 8;
/* 11020 */ 
/* 11021 */                     var $loadgbl702 = Sk.misceval.loadname('math', $gbl);
/* 11022 */                     $ret = Sk.abstr.gattr($loadgbl702, 'pi', true);
/* 11023 */                     $blk = 1; /* allowing case fallthrough */
/* 11024 */                 case 1:
/* 11025 */                     /* --- function return or resume suspension --- */
/* 11026 */                     if ($ret && $ret.$isSuspension) {
/* 11027 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 224, 21);
/* 11028 */                     }
/* 11029 */                     var $lattr703 = $ret;
/* 11030 */                     if (self === undefined) {
/* 11031 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11032 */                     }
/* 11033 */                     $ret = Sk.abstr.gattr(self, 'fieldOfView', true);
/* 11034 */                     $blk = 2; /* allowing case fallthrough */
/* 11035 */                 case 2:
/* 11036 */                     /* --- function return or resume suspension --- */
/* 11037 */                     if ($ret && $ret.$isSuspension) {
/* 11038 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 224, 32);
/* 11039 */                     }
/* 11040 */                     var $lattr704 = $ret;
/* 11041 */                     var $binop705 = Sk.abstr.numberBinOp($lattr704, new Sk.builtin.float_(2), 'Div');
/* 11042 */                     var $binop706 = Sk.abstr.numberBinOp($lattr703, $binop705, 'Mult');
/* 11043 */                     var $binop707 = Sk.abstr.numberBinOp($binop706, new Sk.builtin.float_(180), 'Div');
/* 11044 */                     fovRadians = $binop707;
/* 11045 */                     //
/* 11046 */                     // line 225:
/* 11047 */                     //         halfWidth = math.tan(fovRadians)
/* 11048 */                     //         ^
/* 11049 */                     //
/* 11050 */                     $currLineNo = 225;
/* 11051 */                     $currColNo = 8;
/* 11052 */ 
/* 11053 */                     var $loadgbl708 = Sk.misceval.loadname('math', $gbl);
/* 11054 */                     $ret = Sk.abstr.gattr($loadgbl708, 'tan', true);
/* 11055 */                     $blk = 3; /* allowing case fallthrough */
/* 11056 */                 case 3:
/* 11057 */                     /* --- function return or resume suspension --- */
/* 11058 */                     if ($ret && $ret.$isSuspension) {
/* 11059 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 225, 20);
/* 11060 */                     }
/* 11061 */                     var $lattr709 = $ret;
/* 11062 */                     if (fovRadians === undefined) {
/* 11063 */                         throw new Sk.builtin.UnboundLocalError('local variable \'fovRadians\' referenced before assignment');
/* 11064 */                     }
/* 11065 */                     $ret;
/* 11066 */                     $ret = Sk.misceval.callsimOrSuspend($lattr709, fovRadians);
/* 11067 */                     $blk = 4; /* allowing case fallthrough */
/* 11068 */                 case 4:
/* 11069 */                     /* --- function return or resume suspension --- */
/* 11070 */                     if ($ret && $ret.$isSuspension) {
/* 11071 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 225, 20);
/* 11072 */                     }
/* 11073 */                     var $call710 = $ret;
/* 11074 */                     //
/* 11075 */                     // line 225:
/* 11076 */                     //         halfWidth = math.tan(fovRadians)
/* 11077 */                     //                     ^
/* 11078 */                     //
/* 11079 */                     $currLineNo = 225;
/* 11080 */                     $currColNo = 20;
/* 11081 */ 
/* 11082 */                     halfWidth = $call710;
/* 11083 */                     //
/* 11084 */                     // line 226:
/* 11085 */                     //         halfHeight = 0.75 * halfWidth
/* 11086 */                     //         ^
/* 11087 */                     //
/* 11088 */                     $currLineNo = 226;
/* 11089 */                     $currColNo = 8;
/* 11090 */ 
/* 11091 */                     if (halfWidth === undefined) {
/* 11092 */                         throw new Sk.builtin.UnboundLocalError('local variable \'halfWidth\' referenced before assignment');
/* 11093 */                     }
/* 11094 */                     var $binop711 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.75), halfWidth, 'Mult');
/* 11095 */                     halfHeight = $binop711;
/* 11096 */                     //
/* 11097 */                     // line 227:
/* 11098 */                     //         width = halfWidth * 2
/* 11099 */                     //         ^
/* 11100 */                     //
/* 11101 */                     $currLineNo = 227;
/* 11102 */                     $currColNo = 8;
/* 11103 */ 
/* 11104 */                     if (halfWidth === undefined) {
/* 11105 */                         throw new Sk.builtin.UnboundLocalError('local variable \'halfWidth\' referenced before assignment');
/* 11106 */                     }
/* 11107 */                     var $binop712 = Sk.abstr.numberBinOp(halfWidth, new Sk.builtin.int_(2), 'Mult');
/* 11108 */                     width = $binop712;
/* 11109 */                     //
/* 11110 */                     // line 228:
/* 11111 */                     //         height = halfHeight * 2
/* 11112 */                     //         ^
/* 11113 */                     //
/* 11114 */                     $currLineNo = 228;
/* 11115 */                     $currColNo = 8;
/* 11116 */ 
/* 11117 */                     if (halfHeight === undefined) {
/* 11118 */                         throw new Sk.builtin.UnboundLocalError('local variable \'halfHeight\' referenced before assignment');
/* 11119 */                     }
/* 11120 */                     var $binop713 = Sk.abstr.numberBinOp(halfHeight, new Sk.builtin.int_(2), 'Mult');
/* 11121 */                     height = $binop713;
/* 11122 */                     //
/* 11123 */                     // line 229:
/* 11124 */                     //         pixelWidth = width / (canvas.width - 1)
/* 11125 */                     //         ^
/* 11126 */                     //
/* 11127 */                     $currLineNo = 229;
/* 11128 */                     $currColNo = 8;
/* 11129 */ 
/* 11130 */                     if (width === undefined) {
/* 11131 */                         throw new Sk.builtin.UnboundLocalError('local variable \'width\' referenced before assignment');
/* 11132 */                     }
/* 11133 */                     if (canvas === undefined) {
/* 11134 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11135 */                     }
/* 11136 */                     $ret = Sk.abstr.gattr(canvas, 'width', true);
/* 11137 */                     $blk = 5; /* allowing case fallthrough */
/* 11138 */                 case 5:
/* 11139 */                     /* --- function return or resume suspension --- */
/* 11140 */                     if ($ret && $ret.$isSuspension) {
/* 11141 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 229, 30);
/* 11142 */                     }
/* 11143 */                     var $lattr714 = $ret;
/* 11144 */                     var $binop715 = Sk.abstr.numberBinOp($lattr714, new Sk.builtin.int_(1), 'Sub');
/* 11145 */                     var $binop716 = Sk.abstr.numberBinOp(width, $binop715, 'Div');
/* 11146 */                     pixelWidth = $binop716;
/* 11147 */                     //
/* 11148 */                     // line 230:
/* 11149 */                     //         pixelHeight = height / (canvas.height - 1)
/* 11150 */                     //         ^
/* 11151 */                     //
/* 11152 */                     $currLineNo = 230;
/* 11153 */                     $currColNo = 8;
/* 11154 */ 
/* 11155 */                     if (height === undefined) {
/* 11156 */                         throw new Sk.builtin.UnboundLocalError('local variable \'height\' referenced before assignment');
/* 11157 */                     }
/* 11158 */                     if (canvas === undefined) {
/* 11159 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11160 */                     }
/* 11161 */                     $ret = Sk.abstr.gattr(canvas, 'height', true);
/* 11162 */                     $blk = 6; /* allowing case fallthrough */
/* 11163 */                 case 6:
/* 11164 */                     /* --- function return or resume suspension --- */
/* 11165 */                     if ($ret && $ret.$isSuspension) {
/* 11166 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 230, 32);
/* 11167 */                     }
/* 11168 */                     var $lattr717 = $ret;
/* 11169 */                     var $binop718 = Sk.abstr.numberBinOp($lattr717, new Sk.builtin.int_(1), 'Sub');
/* 11170 */                     var $binop719 = Sk.abstr.numberBinOp(height, $binop718, 'Div');
/* 11171 */                     pixelHeight = $binop719;
/* 11172 */                     //
/* 11173 */                     // line 232:
/* 11174 */                     //         eye = Ray(self.position, self.lookingAt - self.position)
/* 11175 */                     //         ^
/* 11176 */                     //
/* 11177 */                     $currLineNo = 232;
/* 11178 */                     $currColNo = 8;
/* 11179 */ 
/* 11180 */                     var $loadgbl720 = Sk.misceval.loadname('Ray', $gbl);
/* 11181 */                     if (self === undefined) {
/* 11182 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11183 */                     }
/* 11184 */                     $ret = Sk.abstr.gattr(self, 'position', true);
/* 11185 */                     $blk = 7; /* allowing case fallthrough */
/* 11186 */                 case 7:
/* 11187 */                     /* --- function return or resume suspension --- */
/* 11188 */                     if ($ret && $ret.$isSuspension) {
/* 11189 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 232, 18);
/* 11190 */                     }
/* 11191 */                     var $lattr721 = $ret;
/* 11192 */                     if (self === undefined) {
/* 11193 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11194 */                     }
/* 11195 */                     $ret = Sk.abstr.gattr(self, 'lookingAt', true);
/* 11196 */                     $blk = 8; /* allowing case fallthrough */
/* 11197 */                 case 8:
/* 11198 */                     /* --- function return or resume suspension --- */
/* 11199 */                     if ($ret && $ret.$isSuspension) {
/* 11200 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 232, 33);
/* 11201 */                     }
/* 11202 */                     var $lattr722 = $ret;
/* 11203 */                     if (self === undefined) {
/* 11204 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11205 */                     }
/* 11206 */                     $ret = Sk.abstr.gattr(self, 'position', true);
/* 11207 */                     $blk = 9; /* allowing case fallthrough */
/* 11208 */                 case 9:
/* 11209 */                     /* --- function return or resume suspension --- */
/* 11210 */                     if ($ret && $ret.$isSuspension) {
/* 11211 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 232, 50);
/* 11212 */                     }
/* 11213 */                     var $lattr723 = $ret;
/* 11214 */                     var $binop724 = Sk.abstr.numberBinOp($lattr722, $lattr723, 'Sub');
/* 11215 */                     $ret;
/* 11216 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl720, $lattr721, $binop724);
/* 11217 */                     $blk = 10; /* allowing case fallthrough */
/* 11218 */                 case 10:
/* 11219 */                     /* --- function return or resume suspension --- */
/* 11220 */                     if ($ret && $ret.$isSuspension) {
/* 11221 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 232, 14);
/* 11222 */                     }
/* 11223 */                     var $call725 = $ret;
/* 11224 */                     //
/* 11225 */                     // line 232:
/* 11226 */                     //         eye = Ray(self.position, self.lookingAt - self.position)
/* 11227 */                     //               ^
/* 11228 */                     //
/* 11229 */                     $currLineNo = 232;
/* 11230 */                     $currColNo = 14;
/* 11231 */ 
/* 11232 */                     eye = $call725;
/* 11233 */                     //
/* 11234 */                     // line 233:
/* 11235 */                     //         vpRight = eye.vector.cross(Vector.UP).normalized()
/* 11236 */                     //         ^
/* 11237 */                     //
/* 11238 */                     $currLineNo = 233;
/* 11239 */                     $currColNo = 8;
/* 11240 */ 
/* 11241 */                     if (eye === undefined) {
/* 11242 */                         throw new Sk.builtin.UnboundLocalError('local variable \'eye\' referenced before assignment');
/* 11243 */                     }
/* 11244 */                     $ret = Sk.abstr.gattr(eye, 'vector', true);
/* 11245 */                     $blk = 11; /* allowing case fallthrough */
/* 11246 */                 case 11:
/* 11247 */                     /* --- function return or resume suspension --- */
/* 11248 */                     if ($ret && $ret.$isSuspension) {
/* 11249 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 18);
/* 11250 */                     }
/* 11251 */                     var $lattr726 = $ret;
/* 11252 */                     $ret = Sk.abstr.gattr($lattr726, 'cross', true);
/* 11253 */                     $blk = 12; /* allowing case fallthrough */
/* 11254 */                 case 12:
/* 11255 */                     /* --- function return or resume suspension --- */
/* 11256 */                     if ($ret && $ret.$isSuspension) {
/* 11257 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 18);
/* 11258 */                     }
/* 11259 */                     var $lattr727 = $ret;
/* 11260 */                     var $loadgbl728 = Sk.misceval.loadname('Vector', $gbl);
/* 11261 */                     $ret = Sk.abstr.gattr($loadgbl728, 'UP', true);
/* 11262 */                     $blk = 13; /* allowing case fallthrough */
/* 11263 */                 case 13:
/* 11264 */                     /* --- function return or resume suspension --- */
/* 11265 */                     if ($ret && $ret.$isSuspension) {
/* 11266 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 35);
/* 11267 */                     }
/* 11268 */                     var $lattr729 = $ret;
/* 11269 */                     $ret;
/* 11270 */                     $ret = Sk.misceval.callsimOrSuspend($lattr727, $lattr729);
/* 11271 */                     $blk = 14; /* allowing case fallthrough */
/* 11272 */                 case 14:
/* 11273 */                     /* --- function return or resume suspension --- */
/* 11274 */                     if ($ret && $ret.$isSuspension) {
/* 11275 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 18);
/* 11276 */                     }
/* 11277 */                     var $call730 = $ret;
/* 11278 */                     //
/* 11279 */                     // line 233:
/* 11280 */                     //         vpRight = eye.vector.cross(Vector.UP).normalized()
/* 11281 */                     //                   ^
/* 11282 */                     //
/* 11283 */                     $currLineNo = 233;
/* 11284 */                     $currColNo = 18;
/* 11285 */ 
/* 11286 */                     $ret = Sk.abstr.gattr($call730, 'normalized', true);
/* 11287 */                     $blk = 15; /* allowing case fallthrough */
/* 11288 */                 case 15:
/* 11289 */                     /* --- function return or resume suspension --- */
/* 11290 */                     if ($ret && $ret.$isSuspension) {
/* 11291 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 18);
/* 11292 */                     }
/* 11293 */                     var $lattr731 = $ret;
/* 11294 */                     $ret;
/* 11295 */                     $ret = Sk.misceval.callsimOrSuspend($lattr731);
/* 11296 */                     $blk = 16; /* allowing case fallthrough */
/* 11297 */                 case 16:
/* 11298 */                     /* --- function return or resume suspension --- */
/* 11299 */                     if ($ret && $ret.$isSuspension) {
/* 11300 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 233, 18);
/* 11301 */                     }
/* 11302 */                     var $call732 = $ret;
/* 11303 */                     //
/* 11304 */                     // line 233:
/* 11305 */                     //         vpRight = eye.vector.cross(Vector.UP).normalized()
/* 11306 */                     //                   ^
/* 11307 */                     //
/* 11308 */                     $currLineNo = 233;
/* 11309 */                     $currColNo = 18;
/* 11310 */ 
/* 11311 */                     vpRight = $call732;
/* 11312 */                     //
/* 11313 */                     // line 234:
/* 11314 */                     //         vpUp = vpRight.cross(eye.vector).normalized()
/* 11315 */                     //         ^
/* 11316 */                     //
/* 11317 */                     $currLineNo = 234;
/* 11318 */                     $currColNo = 8;
/* 11319 */ 
/* 11320 */                     if (vpRight === undefined) {
/* 11321 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vpRight\' referenced before assignment');
/* 11322 */                     }
/* 11323 */                     $ret = Sk.abstr.gattr(vpRight, 'cross', true);
/* 11324 */                     $blk = 17; /* allowing case fallthrough */
/* 11325 */                 case 17:
/* 11326 */                     /* --- function return or resume suspension --- */
/* 11327 */                     if ($ret && $ret.$isSuspension) {
/* 11328 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 234, 15);
/* 11329 */                     }
/* 11330 */                     var $lattr733 = $ret;
/* 11331 */                     if (eye === undefined) {
/* 11332 */                         throw new Sk.builtin.UnboundLocalError('local variable \'eye\' referenced before assignment');
/* 11333 */                     }
/* 11334 */                     $ret = Sk.abstr.gattr(eye, 'vector', true);
/* 11335 */                     $blk = 18; /* allowing case fallthrough */
/* 11336 */                 case 18:
/* 11337 */                     /* --- function return or resume suspension --- */
/* 11338 */                     if ($ret && $ret.$isSuspension) {
/* 11339 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 234, 29);
/* 11340 */                     }
/* 11341 */                     var $lattr734 = $ret;
/* 11342 */                     $ret;
/* 11343 */                     $ret = Sk.misceval.callsimOrSuspend($lattr733, $lattr734);
/* 11344 */                     $blk = 19; /* allowing case fallthrough */
/* 11345 */                 case 19:
/* 11346 */                     /* --- function return or resume suspension --- */
/* 11347 */                     if ($ret && $ret.$isSuspension) {
/* 11348 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 234, 15);
/* 11349 */                     }
/* 11350 */                     var $call735 = $ret;
/* 11351 */                     //
/* 11352 */                     // line 234:
/* 11353 */                     //         vpUp = vpRight.cross(eye.vector).normalized()
/* 11354 */                     //                ^
/* 11355 */                     //
/* 11356 */                     $currLineNo = 234;
/* 11357 */                     $currColNo = 15;
/* 11358 */ 
/* 11359 */                     $ret = Sk.abstr.gattr($call735, 'normalized', true);
/* 11360 */                     $blk = 20; /* allowing case fallthrough */
/* 11361 */                 case 20:
/* 11362 */                     /* --- function return or resume suspension --- */
/* 11363 */                     if ($ret && $ret.$isSuspension) {
/* 11364 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 234, 15);
/* 11365 */                     }
/* 11366 */                     var $lattr736 = $ret;
/* 11367 */                     $ret;
/* 11368 */                     $ret = Sk.misceval.callsimOrSuspend($lattr736);
/* 11369 */                     $blk = 21; /* allowing case fallthrough */
/* 11370 */                 case 21:
/* 11371 */                     /* --- function return or resume suspension --- */
/* 11372 */                     if ($ret && $ret.$isSuspension) {
/* 11373 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 234, 15);
/* 11374 */                     }
/* 11375 */                     var $call737 = $ret;
/* 11376 */                     //
/* 11377 */                     // line 234:
/* 11378 */                     //         vpUp = vpRight.cross(eye.vector).normalized()
/* 11379 */                     //                ^
/* 11380 */                     //
/* 11381 */                     $currLineNo = 234;
/* 11382 */                     $currColNo = 15;
/* 11383 */ 
/* 11384 */                     vpUp = $call737;
/* 11385 */                     //
/* 11386 */                     // line 237:
/* 11387 */                     //         previousfraction = 0
/* 11388 */                     //         ^
/* 11389 */                     //
/* 11390 */                     $currLineNo = 237;
/* 11391 */                     $currColNo = 8;
/* 11392 */ 
/* 11393 */                     previousfraction = new Sk.builtin.int_(0);
/* 11394 */                     //
/* 11395 */                     // line 238:
/* 11396 */                     //         for y in range(canvas.height):
/* 11397 */                     //         ^
/* 11398 */                     //
/* 11399 */                     $currLineNo = 238;
/* 11400 */                     $currColNo = 8;
/* 11401 */ 
/* 11402 */                     var $loadgbl738 = Sk.misceval.loadname('range', $gbl);
/* 11403 */                     if (canvas === undefined) {
/* 11404 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11405 */                     }
/* 11406 */                     $ret = Sk.abstr.gattr(canvas, 'height', true);
/* 11407 */                     $blk = 25; /* allowing case fallthrough */
/* 11408 */                 case 25:
/* 11409 */                     /* --- function return or resume suspension --- */
/* 11410 */                     if ($ret && $ret.$isSuspension) {
/* 11411 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 238, 23);
/* 11412 */                     }
/* 11413 */                     var $lattr739 = $ret;
/* 11414 */                     $ret;
/* 11415 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl738, $lattr739);
/* 11416 */                     $blk = 26; /* allowing case fallthrough */
/* 11417 */                 case 26:
/* 11418 */                     /* --- function return or resume suspension --- */
/* 11419 */                     if ($ret && $ret.$isSuspension) {
/* 11420 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 238, 17);
/* 11421 */                     }
/* 11422 */                     var $call740 = $ret;
/* 11423 */                     //
/* 11424 */                     // line 238:
/* 11425 */                     //         for y in range(canvas.height):
/* 11426 */                     //                  ^
/* 11427 */                     //
/* 11428 */                     $currLineNo = 238;
/* 11429 */                     $currColNo = 17;
/* 11430 */ 
/* 11431 */                     var $iter741 = Sk.abstr.iter($call740);
/* 11432 */                     $blk = 22; /* allowing case fallthrough */
/* 11433 */                 case 22:
/* 11434 */                     /* --- for start --- */
/* 11435 */                     $ret = Sk.abstr.iternext($iter741, true);
/* 11436 */                     $blk = 27; /* allowing case fallthrough */
/* 11437 */                 case 27:
/* 11438 */                     /* --- function return or resume suspension --- */
/* 11439 */                     if ($ret && $ret.$isSuspension) {
/* 11440 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 238, 8);
/* 11441 */                     }
/* 11442 */                     var $next742 = $ret;
/* 11443 */                     if ($next742 === undefined) {
/* 11444 */                         $blk = 23;
/* 11445 */                         continue;
/* 11446 */                     }
/* 11447 */                     y = $next742;
/* 11448 */                     //
/* 11449 */                     // line 239:
/* 11450 */                     //             currentfraction = float(y) / canvas.height
/* 11451 */                     //             ^
/* 11452 */                     //
/* 11453 */                     $currLineNo = 239;
/* 11454 */                     $currColNo = 12;
/* 11455 */ 
/* 11456 */                     var $loadgbl743 = Sk.misceval.loadname('float_$rw$', $gbl);
/* 11457 */                     if (y === undefined) {
/* 11458 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 11459 */                     }
/* 11460 */                     $ret;
/* 11461 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl743, y);
/* 11462 */                     $blk = 28; /* allowing case fallthrough */
/* 11463 */                 case 28:
/* 11464 */                     /* --- function return or resume suspension --- */
/* 11465 */                     if ($ret && $ret.$isSuspension) {
/* 11466 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 239, 30);
/* 11467 */                     }
/* 11468 */                     var $call744 = $ret;
/* 11469 */                     //
/* 11470 */                     // line 239:
/* 11471 */                     //             currentfraction = float(y) / canvas.height
/* 11472 */                     //                               ^
/* 11473 */                     //
/* 11474 */                     $currLineNo = 239;
/* 11475 */                     $currColNo = 30;
/* 11476 */ 
/* 11477 */                     if (canvas === undefined) {
/* 11478 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11479 */                     }
/* 11480 */                     $ret = Sk.abstr.gattr(canvas, 'height', true);
/* 11481 */                     $blk = 29; /* allowing case fallthrough */
/* 11482 */                 case 29:
/* 11483 */                     /* --- function return or resume suspension --- */
/* 11484 */                     if ($ret && $ret.$isSuspension) {
/* 11485 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 239, 41);
/* 11486 */                     }
/* 11487 */                     var $lattr745 = $ret;
/* 11488 */                     var $binop746 = Sk.abstr.numberBinOp($call744, $lattr745, 'Div');
/* 11489 */                     currentfraction = $binop746;
/* 11490 */                     //
/* 11491 */                     // line 240:
/* 11492 */                     //             if currentfraction - previousfraction > 0.05:
/* 11493 */                     //             ^
/* 11494 */                     //
/* 11495 */                     $currLineNo = 240;
/* 11496 */                     $currColNo = 12;
/* 11497 */ 
/* 11498 */                     if (currentfraction === undefined) {
/* 11499 */                         throw new Sk.builtin.UnboundLocalError('local variable \'currentfraction\' referenced before assignment');
/* 11500 */                     }
/* 11501 */                     if (previousfraction === undefined) {
/* 11502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'previousfraction\' referenced before assignment');
/* 11503 */                     }
/* 11504 */                     var $binop747 = Sk.abstr.numberBinOp(currentfraction, previousfraction, 'Sub');
/* 11505 */                     var $compareres748 = null;
/* 11506 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($binop747, new Sk.builtin.float_(0.05), 'Gt', true));
/* 11507 */                     $blk = 32; /* allowing case fallthrough */
/* 11508 */                 case 32:
/* 11509 */                     /* --- function return or resume suspension --- */
/* 11510 */                     if ($ret && $ret.$isSuspension) {
/* 11511 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 240, 15);
/* 11512 */                     }
/* 11513 */                     $compareres748 = $ret;
/* 11514 */                     var $jfalse749 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11515 */                     if ($jfalse749) { /*test failed */
/* 11516 */                         $blk = 31;
/* 11517 */                         continue;
/* 11518 */                     }
/* 11519 */                     $blk = 31; /* allowing case fallthrough */
/* 11520 */                 case 31:
/* 11521 */                     /* --- done --- */
/* 11522 */                     var $jfalse750 = ($compareres748 === false || !Sk.misceval.isTrue($compareres748));
/* 11523 */                     if ($jfalse750) { /*test failed */
/* 11524 */                         $blk = 30;
/* 11525 */                         continue;
/* 11526 */                     }
/* 11527 */                     //
/* 11528 */                     // line 243:
/* 11529 */                     //                 previousfraction = currentfraction
/* 11530 */                     //                 ^
/* 11531 */                     //
/* 11532 */                     $currLineNo = 243;
/* 11533 */                     $currColNo = 16;
/* 11534 */ 
/* 11535 */                     if (currentfraction === undefined) {
/* 11536 */                         throw new Sk.builtin.UnboundLocalError('local variable \'currentfraction\' referenced before assignment');
/* 11537 */                     }
/* 11538 */                     previousfraction = currentfraction;
/* 11539 */                     $blk = 30; /* allowing case fallthrough */
/* 11540 */                 case 30:
/* 11541 */                     /* --- end of if --- */
/* 11542 */                     //
/* 11543 */                     // line 244:
/* 11544 */                     //             for x in range(canvas.width):
/* 11545 */                     //             ^
/* 11546 */                     //
/* 11547 */                     $currLineNo = 244;
/* 11548 */                     $currColNo = 12;
/* 11549 */ 
/* 11550 */                     var $loadgbl751 = Sk.misceval.loadname('range', $gbl);
/* 11551 */                     if (canvas === undefined) {
/* 11552 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11553 */                     }
/* 11554 */                     $ret = Sk.abstr.gattr(canvas, 'width', true);
/* 11555 */                     $blk = 36; /* allowing case fallthrough */
/* 11556 */                 case 36:
/* 11557 */                     /* --- function return or resume suspension --- */
/* 11558 */                     if ($ret && $ret.$isSuspension) {
/* 11559 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 244, 27);
/* 11560 */                     }
/* 11561 */                     var $lattr752 = $ret;
/* 11562 */                     $ret;
/* 11563 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl751, $lattr752);
/* 11564 */                     $blk = 37; /* allowing case fallthrough */
/* 11565 */                 case 37:
/* 11566 */                     /* --- function return or resume suspension --- */
/* 11567 */                     if ($ret && $ret.$isSuspension) {
/* 11568 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 244, 21);
/* 11569 */                     }
/* 11570 */                     var $call753 = $ret;
/* 11571 */                     //
/* 11572 */                     // line 244:
/* 11573 */                     //             for x in range(canvas.width):
/* 11574 */                     //                      ^
/* 11575 */                     //
/* 11576 */                     $currLineNo = 244;
/* 11577 */                     $currColNo = 21;
/* 11578 */ 
/* 11579 */                     var $iter754 = Sk.abstr.iter($call753);
/* 11580 */                     $blk = 33; /* allowing case fallthrough */
/* 11581 */                 case 33:
/* 11582 */                     /* --- for start --- */
/* 11583 */                     $ret = Sk.abstr.iternext($iter754, true);
/* 11584 */                     $blk = 38; /* allowing case fallthrough */
/* 11585 */                 case 38:
/* 11586 */                     /* --- function return or resume suspension --- */
/* 11587 */                     if ($ret && $ret.$isSuspension) {
/* 11588 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 244, 12);
/* 11589 */                     }
/* 11590 */                     var $next755 = $ret;
/* 11591 */                     if ($next755 === undefined) {
/* 11592 */                         $blk = 34;
/* 11593 */                         continue;
/* 11594 */                     }
/* 11595 */                     x = $next755;
/* 11596 */                     //
/* 11597 */                     // line 245:
/* 11598 */                     //                 xcomp = vpRight.scale(x * pixelWidth - halfWidth)
/* 11599 */                     //                 ^
/* 11600 */                     //
/* 11601 */                     $currLineNo = 245;
/* 11602 */                     $currColNo = 16;
/* 11603 */ 
/* 11604 */                     if (vpRight === undefined) {
/* 11605 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vpRight\' referenced before assignment');
/* 11606 */                     }
/* 11607 */                     $ret = Sk.abstr.gattr(vpRight, 'scale', true);
/* 11608 */                     $blk = 39; /* allowing case fallthrough */
/* 11609 */                 case 39:
/* 11610 */                     /* --- function return or resume suspension --- */
/* 11611 */                     if ($ret && $ret.$isSuspension) {
/* 11612 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 245, 24);
/* 11613 */                     }
/* 11614 */                     var $lattr756 = $ret;
/* 11615 */                     if (x === undefined) {
/* 11616 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/* 11617 */                     }
/* 11618 */                     if (pixelWidth === undefined) {
/* 11619 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pixelWidth\' referenced before assignment');
/* 11620 */                     }
/* 11621 */                     var $binop757 = Sk.abstr.numberBinOp(x, pixelWidth, 'Mult');
/* 11622 */                     if (halfWidth === undefined) {
/* 11623 */                         throw new Sk.builtin.UnboundLocalError('local variable \'halfWidth\' referenced before assignment');
/* 11624 */                     }
/* 11625 */                     var $binop758 = Sk.abstr.numberBinOp($binop757, halfWidth, 'Sub');
/* 11626 */                     $ret;
/* 11627 */                     $ret = Sk.misceval.callsimOrSuspend($lattr756, $binop758);
/* 11628 */                     $blk = 40; /* allowing case fallthrough */
/* 11629 */                 case 40:
/* 11630 */                     /* --- function return or resume suspension --- */
/* 11631 */                     if ($ret && $ret.$isSuspension) {
/* 11632 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 245, 24);
/* 11633 */                     }
/* 11634 */                     var $call759 = $ret;
/* 11635 */                     //
/* 11636 */                     // line 245:
/* 11637 */                     //                 xcomp = vpRight.scale(x * pixelWidth - halfWidth)
/* 11638 */                     //                         ^
/* 11639 */                     //
/* 11640 */                     $currLineNo = 245;
/* 11641 */                     $currColNo = 24;
/* 11642 */ 
/* 11643 */                     xcomp = $call759;
/* 11644 */                     //
/* 11645 */                     // line 246:
/* 11646 */                     //                 ycomp = vpUp.scale(y * pixelHeight - halfHeight)
/* 11647 */                     //                 ^
/* 11648 */                     //
/* 11649 */                     $currLineNo = 246;
/* 11650 */                     $currColNo = 16;
/* 11651 */ 
/* 11652 */                     if (vpUp === undefined) {
/* 11653 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vpUp\' referenced before assignment');
/* 11654 */                     }
/* 11655 */                     $ret = Sk.abstr.gattr(vpUp, 'scale', true);
/* 11656 */                     $blk = 41; /* allowing case fallthrough */
/* 11657 */                 case 41:
/* 11658 */                     /* --- function return or resume suspension --- */
/* 11659 */                     if ($ret && $ret.$isSuspension) {
/* 11660 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 246, 24);
/* 11661 */                     }
/* 11662 */                     var $lattr760 = $ret;
/* 11663 */                     if (y === undefined) {
/* 11664 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 11665 */                     }
/* 11666 */                     if (pixelHeight === undefined) {
/* 11667 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pixelHeight\' referenced before assignment');
/* 11668 */                     }
/* 11669 */                     var $binop761 = Sk.abstr.numberBinOp(y, pixelHeight, 'Mult');
/* 11670 */                     if (halfHeight === undefined) {
/* 11671 */                         throw new Sk.builtin.UnboundLocalError('local variable \'halfHeight\' referenced before assignment');
/* 11672 */                     }
/* 11673 */                     var $binop762 = Sk.abstr.numberBinOp($binop761, halfHeight, 'Sub');
/* 11674 */                     $ret;
/* 11675 */                     $ret = Sk.misceval.callsimOrSuspend($lattr760, $binop762);
/* 11676 */                     $blk = 42; /* allowing case fallthrough */
/* 11677 */                 case 42:
/* 11678 */                     /* --- function return or resume suspension --- */
/* 11679 */                     if ($ret && $ret.$isSuspension) {
/* 11680 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 246, 24);
/* 11681 */                     }
/* 11682 */                     var $call763 = $ret;
/* 11683 */                     //
/* 11684 */                     // line 246:
/* 11685 */                     //                 ycomp = vpUp.scale(y * pixelHeight - halfHeight)
/* 11686 */                     //                         ^
/* 11687 */                     //
/* 11688 */                     $currLineNo = 246;
/* 11689 */                     $currColNo = 24;
/* 11690 */ 
/* 11691 */                     ycomp = $call763;
/* 11692 */                     //
/* 11693 */                     // line 247:
/* 11694 */                     //                 ray = Ray(eye.point, eye.vector + xcomp + ycomp)
/* 11695 */                     //                 ^
/* 11696 */                     //
/* 11697 */                     $currLineNo = 247;
/* 11698 */                     $currColNo = 16;
/* 11699 */ 
/* 11700 */                     var $loadgbl764 = Sk.misceval.loadname('Ray', $gbl);
/* 11701 */                     if (eye === undefined) {
/* 11702 */                         throw new Sk.builtin.UnboundLocalError('local variable \'eye\' referenced before assignment');
/* 11703 */                     }
/* 11704 */                     $ret = Sk.abstr.gattr(eye, 'point', true);
/* 11705 */                     $blk = 43; /* allowing case fallthrough */
/* 11706 */                 case 43:
/* 11707 */                     /* --- function return or resume suspension --- */
/* 11708 */                     if ($ret && $ret.$isSuspension) {
/* 11709 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 247, 26);
/* 11710 */                     }
/* 11711 */                     var $lattr765 = $ret;
/* 11712 */                     if (eye === undefined) {
/* 11713 */                         throw new Sk.builtin.UnboundLocalError('local variable \'eye\' referenced before assignment');
/* 11714 */                     }
/* 11715 */                     $ret = Sk.abstr.gattr(eye, 'vector', true);
/* 11716 */                     $blk = 44; /* allowing case fallthrough */
/* 11717 */                 case 44:
/* 11718 */                     /* --- function return or resume suspension --- */
/* 11719 */                     if ($ret && $ret.$isSuspension) {
/* 11720 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 247, 37);
/* 11721 */                     }
/* 11722 */                     var $lattr766 = $ret;
/* 11723 */                     if (xcomp === undefined) {
/* 11724 */                         throw new Sk.builtin.UnboundLocalError('local variable \'xcomp\' referenced before assignment');
/* 11725 */                     }
/* 11726 */                     var $binop767 = Sk.abstr.numberBinOp($lattr766, xcomp, 'Add');
/* 11727 */                     if (ycomp === undefined) {
/* 11728 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ycomp\' referenced before assignment');
/* 11729 */                     }
/* 11730 */                     var $binop768 = Sk.abstr.numberBinOp($binop767, ycomp, 'Add');
/* 11731 */                     $ret;
/* 11732 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl764, $lattr765, $binop768);
/* 11733 */                     $blk = 45; /* allowing case fallthrough */
/* 11734 */                 case 45:
/* 11735 */                     /* --- function return or resume suspension --- */
/* 11736 */                     if ($ret && $ret.$isSuspension) {
/* 11737 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 247, 22);
/* 11738 */                     }
/* 11739 */                     var $call769 = $ret;
/* 11740 */                     //
/* 11741 */                     // line 247:
/* 11742 */                     //                 ray = Ray(eye.point, eye.vector + xcomp + ycomp)
/* 11743 */                     //                       ^
/* 11744 */                     //
/* 11745 */                     $currLineNo = 247;
/* 11746 */                     $currColNo = 22;
/* 11747 */ 
/* 11748 */                     ray = $call769;
/* 11749 */                     //
/* 11750 */                     // line 248:
/* 11751 */                     //                 colour = self.rayColour(ray)
/* 11752 */                     //                 ^
/* 11753 */                     //
/* 11754 */                     $currLineNo = 248;
/* 11755 */                     $currColNo = 16;
/* 11756 */ 
/* 11757 */                     if (self === undefined) {
/* 11758 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11759 */                     }
/* 11760 */                     $ret = Sk.abstr.gattr(self, 'rayColour', true);
/* 11761 */                     $blk = 46; /* allowing case fallthrough */
/* 11762 */                 case 46:
/* 11763 */                     /* --- function return or resume suspension --- */
/* 11764 */                     if ($ret && $ret.$isSuspension) {
/* 11765 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 248, 25);
/* 11766 */                     }
/* 11767 */                     var $lattr770 = $ret;
/* 11768 */                     if (ray === undefined) {
/* 11769 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 11770 */                     }
/* 11771 */                     $ret;
/* 11772 */                     $ret = Sk.misceval.callsimOrSuspend($lattr770, ray);
/* 11773 */                     $blk = 47; /* allowing case fallthrough */
/* 11774 */                 case 47:
/* 11775 */                     /* --- function return or resume suspension --- */
/* 11776 */                     if ($ret && $ret.$isSuspension) {
/* 11777 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 248, 25);
/* 11778 */                     }
/* 11779 */                     var $call771 = $ret;
/* 11780 */                     //
/* 11781 */                     // line 248:
/* 11782 */                     //                 colour = self.rayColour(ray)
/* 11783 */                     //                          ^
/* 11784 */                     //
/* 11785 */                     $currLineNo = 248;
/* 11786 */                     $currColNo = 25;
/* 11787 */ 
/* 11788 */                     colour = $call771;
/* 11789 */                     //
/* 11790 */                     // line 249:
/* 11791 */                     //                 canvas.plot(x,y,*colour)
/* 11792 */                     //                 ^
/* 11793 */                     //
/* 11794 */                     $currLineNo = 249;
/* 11795 */                     $currColNo = 16;
/* 11796 */ 
/* 11797 */                     if (canvas === undefined) {
/* 11798 */                         throw new Sk.builtin.UnboundLocalError('local variable \'canvas\' referenced before assignment');
/* 11799 */                     }
/* 11800 */                     $ret = Sk.abstr.gattr(canvas, 'plot', true);
/* 11801 */                     $blk = 48; /* allowing case fallthrough */
/* 11802 */                 case 48:
/* 11803 */                     /* --- function return or resume suspension --- */
/* 11804 */                     if ($ret && $ret.$isSuspension) {
/* 11805 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 249, 16);
/* 11806 */                     }
/* 11807 */                     var $lattr772 = $ret;
/* 11808 */                     if (x === undefined) {
/* 11809 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/* 11810 */                     }
/* 11811 */                     if (y === undefined) {
/* 11812 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 11813 */                     }
/* 11814 */                     if (colour === undefined) {
/* 11815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'colour\' referenced before assignment');
/* 11816 */                     }
/* 11817 */                     $ret;
/* 11818 */                     $ret = Sk.misceval.callOrSuspend($lattr772, undefined, colour, [], x, y);
/* 11819 */                     $blk = 49; /* allowing case fallthrough */
/* 11820 */                 case 49:
/* 11821 */                     /* --- function return or resume suspension --- */
/* 11822 */                     if ($ret && $ret.$isSuspension) {
/* 11823 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 249, 16);
/* 11824 */                     }
/* 11825 */                     var $call773 = $ret;
/* 11826 */                     //
/* 11827 */                     // line 249:
/* 11828 */                     //                 canvas.plot(x,y,*colour)
/* 11829 */                     //                 ^
/* 11830 */                     //
/* 11831 */                     $currLineNo = 249;
/* 11832 */                     $currColNo = 16;
/* 11833 */ 
/* 11834 */                     $blk = 33; /* jump */
/* 11835 */                     continue;
/* 11836 */                 case 23:
/* 11837 */                     /* --- for cleanup --- */
/* 11838 */                     $blk = 24; /* allowing case fallthrough */
/* 11839 */                 case 24:
/* 11840 */                     /* --- for end --- */
/* 11841 */                     return Sk.builtin.none.none$;
/* 11842 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11843 */                 case 34:
/* 11844 */                     /* --- for cleanup --- */
/* 11845 */                     $blk = 35; /* allowing case fallthrough */
/* 11846 */                 case 35:
/* 11847 */                     /* --- for end --- */
/* 11848 */                     $blk = 22; /* jump */
/* 11849 */                     continue;
/* 11850 */                 }
/* 11851 */             } catch (err) {
/* 11852 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11853 */                     err = new Sk.builtin.ExternalError(err);
/* 11854 */                 }
/* 11855 */                 err.traceback.push({
/* 11856 */                     lineno: $currLineNo,
/* 11857 */                     colno: $currColNo,
/* 11858 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 11859 */                 });
/* 11860 */                 if ($exc.length > 0) {
/* 11861 */                     $err = err;
/* 11862 */                     $blk = $exc.pop();
/* 11863 */                     continue;
/* 11864 */                 } else {
/* 11865 */                     throw err;
/* 11866 */                 }
/* 11867 */             }
/* 11868 */         }
/* 11869 */     });
/* 11870 */     var $scope775 = (function $rayColour776$(self, ray) {
/* 11871 */         var i, intersections, o, p, s, t; /* locals */
/* 11872 */         var i, i, i, intersections, intersections, o, o, o, o, o, p, p, p, ray, ray, ray, ray, s, s, s, s, self, self, self, self, self, self, self, self, t, t, $lattr777, $compareres778, $finally_reraise785, $lattr786, $binop787, $_compr788, $_compr788, $lattr789, $iter790, $_compr788, $lattr789, $iter790, $next791, $items792, $elem793, $_compr788, $lattr789, $iter790, $next791, $items792, $elem793, $lattr794, $loadgbl799, $compareres801, $lattr809, $lattr811, $lattr811, $lattr812, $lattr811, $lattr812, $call813, $lattr815, $binop816;
/* 11873 */         var $wakeFromSuspension = function() {
/* 11874 */             var susp = $scope775.$wakingSuspension;
/* 11875 */             delete $scope775.$wakingSuspension;
/* 11876 */             $blk = susp.$blk;
/* 11877 */             $loc = susp.$loc;
/* 11878 */             $gbl = susp.$gbl;
/* 11879 */             $exc = susp.$exc;
/* 11880 */             $err = susp.$err;
/* 11881 */             $postfinally = susp.$postfinally;
/* 11882 */             $currLineNo = susp.$lineno;
/* 11883 */             $currColNo = susp.$colno;
/* 11884 */             Sk.lastYield = Date.now();
/* 11885 */             i = susp.$tmps.i;
/* 11886 */             intersections = susp.$tmps.intersections;
/* 11887 */             o = susp.$tmps.o;
/* 11888 */             p = susp.$tmps.p;
/* 11889 */             ray = susp.$tmps.ray;
/* 11890 */             s = susp.$tmps.s;
/* 11891 */             self = susp.$tmps.self;
/* 11892 */             t = susp.$tmps.t;
/* 11893 */             $lattr777 = susp.$tmps.$lattr777;
/* 11894 */             $compareres778 = susp.$tmps.$compareres778;
/* 11895 */             $finally_reraise785 = susp.$tmps.$finally_reraise785;
/* 11896 */             $lattr786 = susp.$tmps.$lattr786;
/* 11897 */             $binop787 = susp.$tmps.$binop787;
/* 11898 */             $_compr788 = susp.$tmps.$_compr788;
/* 11899 */             $lattr789 = susp.$tmps.$lattr789;
/* 11900 */             $iter790 = susp.$tmps.$iter790;
/* 11901 */             $next791 = susp.$tmps.$next791;
/* 11902 */             $items792 = susp.$tmps.$items792;
/* 11903 */             $elem793 = susp.$tmps.$elem793;
/* 11904 */             $lattr794 = susp.$tmps.$lattr794;
/* 11905 */             $loadgbl799 = susp.$tmps.$loadgbl799;
/* 11906 */             $compareres801 = susp.$tmps.$compareres801;
/* 11907 */             $lattr809 = susp.$tmps.$lattr809;
/* 11908 */             $lattr811 = susp.$tmps.$lattr811;
/* 11909 */             $lattr812 = susp.$tmps.$lattr812;
/* 11910 */             $call813 = susp.$tmps.$call813;
/* 11911 */             $lattr815 = susp.$tmps.$lattr815;
/* 11912 */             $binop816 = susp.$tmps.$binop816;
/* 11913 */             try {
/* 11914 */                 $ret = susp.child.resume();
/* 11915 */             } catch (err) {
/* 11916 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11917 */                     err = new Sk.builtin.ExternalError(err);
/* 11918 */                 }
/* 11919 */                 err.traceback.push({
/* 11920 */                     lineno: $currLineNo,
/* 11921 */                     colno: $currColNo,
/* 11922 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 11923 */                 });
/* 11924 */                 if ($exc.length > 0) {
/* 11925 */                     $err = err;
/* 11926 */                     $blk = $exc.pop();
/* 11927 */                 } else {
/* 11928 */                     throw err;
/* 11929 */                 }
/* 11930 */             }
/* 11931 */         };
/* 11932 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11933 */             var susp = new Sk.misceval.Suspension();
/* 11934 */             susp.child = $child;
/* 11935 */             susp.resume = function() {
/* 11936 */                 $scope775.$wakingSuspension = susp;
/* 11937 */                 return $scope775();
/* 11938 */             };
/* 11939 */             susp.data = susp.child.data;
/* 11940 */             susp.$blk = $blk;
/* 11941 */             susp.$loc = $loc;
/* 11942 */             susp.$gbl = $gbl;
/* 11943 */             susp.$exc = $exc;
/* 11944 */             susp.$err = $err;
/* 11945 */             susp.$postfinally = $postfinally;
/* 11946 */             susp.$filename = $filename;
/* 11947 */             susp.$lineno = $lineno;
/* 11948 */             susp.$colno = $colno;
/* 11949 */             susp.optional = susp.child.optional;
/* 11950 */             susp.$tmps = {
/* 11951 */                 "i": i,
/* 11952 */                 "intersections": intersections,
/* 11953 */                 "o": o,
/* 11954 */                 "p": p,
/* 11955 */                 "ray": ray,
/* 11956 */                 "s": s,
/* 11957 */                 "self": self,
/* 11958 */                 "t": t,
/* 11959 */                 "$lattr777": $lattr777,
/* 11960 */                 "$compareres778": $compareres778,
/* 11961 */                 "$finally_reraise785": $finally_reraise785,
/* 11962 */                 "$lattr786": $lattr786,
/* 11963 */                 "$binop787": $binop787,
/* 11964 */                 "$_compr788": $_compr788,
/* 11965 */                 "$lattr789": $lattr789,
/* 11966 */                 "$iter790": $iter790,
/* 11967 */                 "$next791": $next791,
/* 11968 */                 "$items792": $items792,
/* 11969 */                 "$elem793": $elem793,
/* 11970 */                 "$lattr794": $lattr794,
/* 11971 */                 "$loadgbl799": $loadgbl799,
/* 11972 */                 "$compareres801": $compareres801,
/* 11973 */                 "$lattr809": $lattr809,
/* 11974 */                 "$lattr811": $lattr811,
/* 11975 */                 "$lattr812": $lattr812,
/* 11976 */                 "$call813": $call813,
/* 11977 */                 "$lattr815": $lattr815,
/* 11978 */                 "$binop816": $binop816
/* 11979 */             };
/* 11980 */             return susp;
/* 11981 */         };
/* 11982 */         var $blk = 0,
/* 11983 */             $exc = [],
/* 11984 */             $loc = {},
/* 11985 */             $gbl = this,
/* 11986 */             $err = undefined,
/* 11987 */             $ret = undefined,
/* 11988 */             $postfinally = undefined,
/* 11989 */             $currLineNo = undefined,
/* 11990 */             $currColNo = undefined;
/* 11991 */         if ($scope775.$wakingSuspension !== undefined) {
/* 11992 */             $wakeFromSuspension();
/* 11993 */         } else {
/* 11994 */             Sk.builtin.pyCheckArgs("rayColour", arguments, 2, 2, false, false);
/* 11995 */         }
/* 11996 */         while (true) {
/* 11997 */             try {
/* 11998 */                 switch ($blk) {
/* 11999 */                 case 0:
/* 12000 */                     /* --- codeobj entry --- */
/* 12001 */                     if (self === undefined) {
/* 12002 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12003 */                     }
/* 12004 */                     if (ray === undefined) {
/* 12005 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 12006 */                     }
/* 12007 */ 
/* 12008 */                     //
/* 12009 */                     // line 254:
/* 12010 */                     //         if self.recursionDepth > 3:
/* 12011 */                     //         ^
/* 12012 */                     //
/* 12013 */                     $currLineNo = 254;
/* 12014 */                     $currColNo = 8;
/* 12015 */ 
/* 12016 */                     if (self === undefined) {
/* 12017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12018 */                     }
/* 12019 */                     $ret = Sk.abstr.gattr(self, 'recursionDepth', true);
/* 12020 */                     $blk = 2; /* allowing case fallthrough */
/* 12021 */                 case 2:
/* 12022 */                     /* --- function return or resume suspension --- */
/* 12023 */                     if ($ret && $ret.$isSuspension) {
/* 12024 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 254, 11);
/* 12025 */                     }
/* 12026 */                     var $lattr777 = $ret;
/* 12027 */                     var $compareres778 = null;
/* 12028 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr777, new Sk.builtin.int_(3), 'Gt', true));
/* 12029 */                     $blk = 4; /* allowing case fallthrough */
/* 12030 */                 case 4:
/* 12031 */                     /* --- function return or resume suspension --- */
/* 12032 */                     if ($ret && $ret.$isSuspension) {
/* 12033 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 254, 11);
/* 12034 */                     }
/* 12035 */                     $compareres778 = $ret;
/* 12036 */                     var $jfalse779 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12037 */                     if ($jfalse779) { /*test failed */
/* 12038 */                         $blk = 3;
/* 12039 */                         continue;
/* 12040 */                     }
/* 12041 */                     $blk = 3; /* allowing case fallthrough */
/* 12042 */                 case 3:
/* 12043 */                     /* --- done --- */
/* 12044 */                     var $jfalse780 = ($compareres778 === false || !Sk.misceval.isTrue($compareres778));
/* 12045 */                     if ($jfalse780) { /*test failed */
/* 12046 */                         $blk = 1;
/* 12047 */                         continue;
/* 12048 */                     }
/* 12049 */                     //
/* 12050 */                     // line 255:
/* 12051 */                     //             return (0,0,0)
/* 12052 */                     //             ^
/* 12053 */                     //
/* 12054 */                     $currLineNo = 255;
/* 12055 */                     $currColNo = 12;
/* 12056 */ 
/* 12057 */                     var $elem781 = new Sk.builtin.int_(0);
/* 12058 */                     var $elem782 = new Sk.builtin.int_(0);
/* 12059 */                     var $elem783 = new Sk.builtin.int_(0);
/* 12060 */                     var $loadtuple784 = new Sk.builtins['tuple']([$elem781, $elem782, $elem783]);
/* 12061 */                     return $loadtuple784;
/* 12062 */                     $blk = 1; /* allowing case fallthrough */
/* 12063 */                 case 1:
/* 12064 */                     /* --- end of if --- */
/* 12065 */                     //
/* 12066 */                     // line 256:
/* 12067 */                     //         try:
/* 12068 */                     //         ^
/* 12069 */                     //
/* 12070 */                     $currLineNo = 256;
/* 12071 */                     $currColNo = 8;
/* 12072 */ 
/* 12073 */                     var $finally_reraise785 = undefined;
/* 12074 */                     $exc.push(6);
/* 12075 */                     //
/* 12076 */                     // line 257:
/* 12077 */                     //             self.recursionDepth = self.recursionDepth + 1
/* 12078 */                     //             ^
/* 12079 */                     //
/* 12080 */                     $currLineNo = 257;
/* 12081 */                     $currColNo = 12;
/* 12082 */ 
/* 12083 */                     if (self === undefined) {
/* 12084 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12085 */                     }
/* 12086 */                     $ret = Sk.abstr.gattr(self, 'recursionDepth', true);
/* 12087 */                     $blk = 7; /* allowing case fallthrough */
/* 12088 */                 case 7:
/* 12089 */                     /* --- function return or resume suspension --- */
/* 12090 */                     if ($ret && $ret.$isSuspension) {
/* 12091 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 257, 34);
/* 12092 */                     }
/* 12093 */                     var $lattr786 = $ret;
/* 12094 */                     var $binop787 = Sk.abstr.numberBinOp($lattr786, new Sk.builtin.int_(1), 'Add');
/* 12095 */                     if (self === undefined) {
/* 12096 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12097 */                     }
/* 12098 */                     $ret = Sk.abstr.sattr(self, 'recursionDepth', $binop787, true);
/* 12099 */                     $blk = 8; /* allowing case fallthrough */
/* 12100 */                 case 8:
/* 12101 */                     /* --- function return or resume suspension --- */
/* 12102 */                     if ($ret && $ret.$isSuspension) {
/* 12103 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 257, 12);
/* 12104 */                     }
/* 12105 */                     //
/* 12106 */                     // line 258:
/* 12107 */                     //             intersections = [(o, o.intersectionTime(ray), s) for (o, s) in self.objects]
/* 12108 */                     //             ^
/* 12109 */                     //
/* 12110 */                     $currLineNo = 258;
/* 12111 */                     $currColNo = 12;
/* 12112 */ 
/* 12113 */                     var $_compr788 = new Sk.builtins['list']([]);
/* 12114 */                     if (self === undefined) {
/* 12115 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12116 */                     }
/* 12117 */                     $ret = Sk.abstr.gattr(self, 'objects', true);
/* 12118 */                     $blk = 12; /* allowing case fallthrough */
/* 12119 */                 case 12:
/* 12120 */                     /* --- function return or resume suspension --- */
/* 12121 */                     if ($ret && $ret.$isSuspension) {
/* 12122 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 258, 75);
/* 12123 */                     }
/* 12124 */                     var $lattr789 = $ret;
/* 12125 */                     var $iter790 = Sk.abstr.iter($lattr789);
/* 12126 */                     $blk = 9; /* allowing case fallthrough */
/* 12127 */                 case 9:
/* 12128 */                     /* --- list comp start --- */
/* 12129 */                     $ret = Sk.abstr.iternext($iter790, true);
/* 12130 */                     $blk = 13; /* allowing case fallthrough */
/* 12131 */                 case 13:
/* 12132 */                     /* --- function return or resume suspension --- */
/* 12133 */                     if ($ret && $ret.$isSuspension) {
/* 12134 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 258, 29);
/* 12135 */                     }
/* 12136 */                     var $next791 = $ret;
/* 12137 */                     if ($next791 === undefined) {
/* 12138 */                         $blk = 11;
/* 12139 */                         continue;
/* 12140 */                     }
/* 12141 */                     var $items792 = Sk.abstr.sequenceUnpack($next791, 2);
/* 12142 */                     o = $items792[0];
/* 12143 */                     s = $items792[1];
/* 12144 */                     if (o === undefined) {
/* 12145 */                         throw new Sk.builtin.UnboundLocalError('local variable \'o\' referenced before assignment');
/* 12146 */                     }
/* 12147 */                     var $elem793 = o;
/* 12148 */                     if (o === undefined) {
/* 12149 */                         throw new Sk.builtin.UnboundLocalError('local variable \'o\' referenced before assignment');
/* 12150 */                     }
/* 12151 */                     $ret = Sk.abstr.gattr(o, 'intersectionTime', true);
/* 12152 */                     $blk = 14; /* allowing case fallthrough */
/* 12153 */                 case 14:
/* 12154 */                     /* --- function return or resume suspension --- */
/* 12155 */                     if ($ret && $ret.$isSuspension) {
/* 12156 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 258, 33);
/* 12157 */                     }
/* 12158 */                     var $lattr794 = $ret;
/* 12159 */                     if (ray === undefined) {
/* 12160 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 12161 */                     }
/* 12162 */                     $ret;
/* 12163 */                     $ret = Sk.misceval.callsimOrSuspend($lattr794, ray);
/* 12164 */                     $blk = 15; /* allowing case fallthrough */
/* 12165 */                 case 15:
/* 12166 */                     /* --- function return or resume suspension --- */
/* 12167 */                     if ($ret && $ret.$isSuspension) {
/* 12168 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 258, 33);
/* 12169 */                     }
/* 12170 */                     var $call795 = $ret;
/* 12171 */                     //
/* 12172 */                     // line 258:
/* 12173 */                     //             intersections = [(o, o.intersectionTime(ray), s) for (o, s) in self.objects]
/* 12174 */                     //                                  ^
/* 12175 */                     //
/* 12176 */                     $currLineNo = 258;
/* 12177 */                     $currColNo = 33;
/* 12178 */ 
/* 12179 */                     var $elem796 = $call795;
/* 12180 */                     if (s === undefined) {
/* 12181 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 12182 */                     }
/* 12183 */                     var $elem797 = s;
/* 12184 */                     var $loadtuple798 = new Sk.builtins['tuple']([$elem793, $elem796, $elem797]);
/* 12185 */                     $_compr788.v.push($loadtuple798);
/* 12186 */                     $blk = 10; /* allowing case fallthrough */
/* 12187 */                 case 10:
/* 12188 */                     /* --- list comp skip --- */
/* 12189 */                     $blk = 9; /* jump */
/* 12190 */                     continue;
/* 12191 */                 case 5:
/* 12192 */                     /* --- finalbody --- */
/* 12193 */                     //
/* 12194 */                     // line 267:
/* 12195 */                     //             self.recursionDepth = self.recursionDepth - 1
/* 12196 */                     //             ^
/* 12197 */                     //
/* 12198 */                     $currLineNo = 267;
/* 12199 */                     $currColNo = 12;
/* 12200 */ 
/* 12201 */                     if (self === undefined) {
/* 12202 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12203 */                     }
/* 12204 */                     $ret = Sk.abstr.gattr(self, 'recursionDepth', true);
/* 12205 */                     $blk = 27; /* allowing case fallthrough */
/* 12206 */                 case 27:
/* 12207 */                     /* --- function return or resume suspension --- */
/* 12208 */                     if ($ret && $ret.$isSuspension) {
/* 12209 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 267, 34);
/* 12210 */                     }
/* 12211 */                     var $lattr815 = $ret;
/* 12212 */                     var $binop816 = Sk.abstr.numberBinOp($lattr815, new Sk.builtin.int_(1), 'Sub');
/* 12213 */                     if (self === undefined) {
/* 12214 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12215 */                     }
/* 12216 */                     $ret = Sk.abstr.sattr(self, 'recursionDepth', $binop816, true);
/* 12217 */                     $blk = 28; /* allowing case fallthrough */
/* 12218 */                 case 28:
/* 12219 */                     /* --- function return or resume suspension --- */
/* 12220 */                     if ($ret && $ret.$isSuspension) {
/* 12221 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 267, 12);
/* 12222 */                     }
/* 12223 */                     if ($finally_reraise785 !== undefined) {
/* 12224 */                         throw $finally_reraise785;
/* 12225 */                     }
/* 12226 */                     if ($postfinally !== undefined) {
/* 12227 */                         if ($postfinally.returning) {
/* 12228 */                             return $postfinally.returning;
/* 12229 */                         } else {
/* 12230 */                             $blk = $postfinally.gotoBlock;
/* 12231 */                             $postfinally = undefined;
/* 12232 */                             continue;
/* 12233 */                         }
/* 12234 */                     }
/* 12235 */                     return Sk.builtin.none.none$;
/* 12236 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12237 */                 case 6:
/* 12238 */                     /* --- finalexh --- */
/* 12239 */                     $finally_reraise785 = $err;
/* 12240 */                     $blk = 5; /* jump */
/* 12241 */                     continue;
/* 12242 */                 case 11:
/* 12243 */                     /* --- list comp anchor --- */
/* 12244 */                     intersections = $_compr788;
/* 12245 */                     //
/* 12246 */                     // line 259:
/* 12247 */                     //             i = firstIntersection(intersections)
/* 12248 */                     //             ^
/* 12249 */                     //
/* 12250 */                     $currLineNo = 259;
/* 12251 */                     $currColNo = 12;
/* 12252 */ 
/* 12253 */                     var $loadgbl799 = Sk.misceval.loadname('firstIntersection', $gbl);
/* 12254 */                     if (intersections === undefined) {
/* 12255 */                         throw new Sk.builtin.UnboundLocalError('local variable \'intersections\' referenced before assignment');
/* 12256 */                     }
/* 12257 */                     $ret;
/* 12258 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl799, intersections);
/* 12259 */                     $blk = 16; /* allowing case fallthrough */
/* 12260 */                 case 16:
/* 12261 */                     /* --- function return or resume suspension --- */
/* 12262 */                     if ($ret && $ret.$isSuspension) {
/* 12263 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 259, 16);
/* 12264 */                     }
/* 12265 */                     var $call800 = $ret;
/* 12266 */                     //
/* 12267 */                     // line 259:
/* 12268 */                     //             i = firstIntersection(intersections)
/* 12269 */                     //                 ^
/* 12270 */                     //
/* 12271 */                     $currLineNo = 259;
/* 12272 */                     $currColNo = 16;
/* 12273 */ 
/* 12274 */                     i = $call800;
/* 12275 */                     //
/* 12276 */                     // line 260:
/* 12277 */                     //             if i is None:
/* 12278 */                     //             ^
/* 12279 */                     //
/* 12280 */                     $currLineNo = 260;
/* 12281 */                     $currColNo = 12;
/* 12282 */ 
/* 12283 */                     if (i === undefined) {
/* 12284 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 12285 */                     }
/* 12286 */                     var $compareres801 = null;
/* 12287 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(i, Sk.builtin.none.none$, 'Is', true));
/* 12288 */                     $blk = 20; /* allowing case fallthrough */
/* 12289 */                 case 20:
/* 12290 */                     /* --- function return or resume suspension --- */
/* 12291 */                     if ($ret && $ret.$isSuspension) {
/* 12292 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 260, 15);
/* 12293 */                     }
/* 12294 */                     $compareres801 = $ret;
/* 12295 */                     var $jfalse802 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12296 */                     if ($jfalse802) { /*test failed */
/* 12297 */                         $blk = 19;
/* 12298 */                         continue;
/* 12299 */                     }
/* 12300 */                     $blk = 19; /* allowing case fallthrough */
/* 12301 */                 case 19:
/* 12302 */                     /* --- done --- */
/* 12303 */                     var $jfalse803 = ($compareres801 === false || !Sk.misceval.isTrue($compareres801));
/* 12304 */                     if ($jfalse803) { /*test failed */
/* 12305 */                         $blk = 18;
/* 12306 */                         continue;
/* 12307 */                     }
/* 12308 */                     //
/* 12309 */                     // line 261:
/* 12310 */                     //                 return (0,0,0) ## the background colour
/* 12311 */                     //                 ^
/* 12312 */                     //
/* 12313 */                     $currLineNo = 261;
/* 12314 */                     $currColNo = 16;
/* 12315 */ 
/* 12316 */                     var $elem804 = new Sk.builtin.int_(0);
/* 12317 */                     var $elem805 = new Sk.builtin.int_(0);
/* 12318 */                     var $elem806 = new Sk.builtin.int_(0);
/* 12319 */                     var $loadtuple807 = new Sk.builtins['tuple']([$elem804, $elem805, $elem806]);
/* 12320 */                     $postfinally = {
/* 12321 */                         returning: $loadtuple807
/* 12322 */                     };
/* 12323 */                     $blk = 5; /* jump */
/* 12324 */                     continue;
/* 12325 */                 case 17:
/* 12326 */                     /* --- end of if --- */
/* 12327 */                     $exc.pop();
/* 12328 */                     $blk = 5; /* jump */
/* 12329 */                     continue;
/* 12330 */                 case 18:
/* 12331 */                     /* --- next branch of if --- */
/* 12332 */                     //
/* 12333 */                     // line 263:
/* 12334 */                     //                 (o, t, s) = i
/* 12335 */                     //                 ^
/* 12336 */                     //
/* 12337 */                     $currLineNo = 263;
/* 12338 */                     $currColNo = 16;
/* 12339 */ 
/* 12340 */                     if (i === undefined) {
/* 12341 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 12342 */                     }
/* 12343 */                     var $items808 = Sk.abstr.sequenceUnpack(i, 3);
/* 12344 */                     o = $items808[0];
/* 12345 */                     t = $items808[1];
/* 12346 */                     s = $items808[2];
/* 12347 */                     //
/* 12348 */                     // line 264:
/* 12349 */                     //                 p = ray.pointAtTime(t)
/* 12350 */                     //                 ^
/* 12351 */                     //
/* 12352 */                     $currLineNo = 264;
/* 12353 */                     $currColNo = 16;
/* 12354 */ 
/* 12355 */                     if (ray === undefined) {
/* 12356 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 12357 */                     }
/* 12358 */                     $ret = Sk.abstr.gattr(ray, 'pointAtTime', true);
/* 12359 */                     $blk = 21; /* allowing case fallthrough */
/* 12360 */                 case 21:
/* 12361 */                     /* --- function return or resume suspension --- */
/* 12362 */                     if ($ret && $ret.$isSuspension) {
/* 12363 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 264, 20);
/* 12364 */                     }
/* 12365 */                     var $lattr809 = $ret;
/* 12366 */                     if (t === undefined) {
/* 12367 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 12368 */                     }
/* 12369 */                     $ret;
/* 12370 */                     $ret = Sk.misceval.callsimOrSuspend($lattr809, t);
/* 12371 */                     $blk = 22; /* allowing case fallthrough */
/* 12372 */                 case 22:
/* 12373 */                     /* --- function return or resume suspension --- */
/* 12374 */                     if ($ret && $ret.$isSuspension) {
/* 12375 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 264, 20);
/* 12376 */                     }
/* 12377 */                     var $call810 = $ret;
/* 12378 */                     //
/* 12379 */                     // line 264:
/* 12380 */                     //                 p = ray.pointAtTime(t)
/* 12381 */                     //                     ^
/* 12382 */                     //
/* 12383 */                     $currLineNo = 264;
/* 12384 */                     $currColNo = 20;
/* 12385 */ 
/* 12386 */                     p = $call810;
/* 12387 */                     //
/* 12388 */                     // line 265:
/* 12389 */                     //                 return s.colourAt(self, ray, p, o.normalAt(p))
/* 12390 */                     //                 ^
/* 12391 */                     //
/* 12392 */                     $currLineNo = 265;
/* 12393 */                     $currColNo = 16;
/* 12394 */ 
/* 12395 */                     if (s === undefined) {
/* 12396 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 12397 */                     }
/* 12398 */                     $ret = Sk.abstr.gattr(s, 'colourAt', true);
/* 12399 */                     $blk = 23; /* allowing case fallthrough */
/* 12400 */                 case 23:
/* 12401 */                     /* --- function return or resume suspension --- */
/* 12402 */                     if ($ret && $ret.$isSuspension) {
/* 12403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 265, 23);
/* 12404 */                     }
/* 12405 */                     var $lattr811 = $ret;
/* 12406 */                     if (self === undefined) {
/* 12407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12408 */                     }
/* 12409 */                     if (ray === undefined) {
/* 12410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 12411 */                     }
/* 12412 */                     if (p === undefined) {
/* 12413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12414 */                     }
/* 12415 */                     if (o === undefined) {
/* 12416 */                         throw new Sk.builtin.UnboundLocalError('local variable \'o\' referenced before assignment');
/* 12417 */                     }
/* 12418 */                     $ret = Sk.abstr.gattr(o, 'normalAt', true);
/* 12419 */                     $blk = 24; /* allowing case fallthrough */
/* 12420 */                 case 24:
/* 12421 */                     /* --- function return or resume suspension --- */
/* 12422 */                     if ($ret && $ret.$isSuspension) {
/* 12423 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 265, 48);
/* 12424 */                     }
/* 12425 */                     var $lattr812 = $ret;
/* 12426 */                     if (p === undefined) {
/* 12427 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12428 */                     }
/* 12429 */                     $ret;
/* 12430 */                     $ret = Sk.misceval.callsimOrSuspend($lattr812, p);
/* 12431 */                     $blk = 25; /* allowing case fallthrough */
/* 12432 */                 case 25:
/* 12433 */                     /* --- function return or resume suspension --- */
/* 12434 */                     if ($ret && $ret.$isSuspension) {
/* 12435 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 265, 48);
/* 12436 */                     }
/* 12437 */                     var $call813 = $ret;
/* 12438 */                     //
/* 12439 */                     // line 265:
/* 12440 */                     //                 return s.colourAt(self, ray, p, o.normalAt(p))
/* 12441 */                     //                                                 ^
/* 12442 */                     //
/* 12443 */                     $currLineNo = 265;
/* 12444 */                     $currColNo = 48;
/* 12445 */ 
/* 12446 */                     $ret;
/* 12447 */                     $ret = Sk.misceval.callsimOrSuspend($lattr811, self, ray, p, $call813);
/* 12448 */                     $blk = 26; /* allowing case fallthrough */
/* 12449 */                 case 26:
/* 12450 */                     /* --- function return or resume suspension --- */
/* 12451 */                     if ($ret && $ret.$isSuspension) {
/* 12452 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 265, 23);
/* 12453 */                     }
/* 12454 */                     var $call814 = $ret;
/* 12455 */                     //
/* 12456 */                     // line 265:
/* 12457 */                     //                 return s.colourAt(self, ray, p, o.normalAt(p))
/* 12458 */                     //                        ^
/* 12459 */                     //
/* 12460 */                     $currLineNo = 265;
/* 12461 */                     $currColNo = 23;
/* 12462 */ 
/* 12463 */                     $postfinally = {
/* 12464 */                         returning: $call814
/* 12465 */                     };
/* 12466 */                     $blk = 5; /* jump */
/* 12467 */                     continue;
/* 12468 */                 }
/* 12469 */             } catch (err) {
/* 12470 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12471 */                     err = new Sk.builtin.ExternalError(err);
/* 12472 */                 }
/* 12473 */                 err.traceback.push({
/* 12474 */                     lineno: $currLineNo,
/* 12475 */                     colno: $currColNo,
/* 12476 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 12477 */                 });
/* 12478 */                 if ($exc.length > 0) {
/* 12479 */                     $err = err;
/* 12480 */                     $blk = $exc.pop();
/* 12481 */                     continue;
/* 12482 */                 } else {
/* 12483 */                     throw err;
/* 12484 */                 }
/* 12485 */             }
/* 12486 */         }
/* 12487 */     });
/* 12488 */     var $scope818 = (function $_lightIsVisible819$(self, l, p) {
/* 12489 */         var o, s, t; /* locals */
/* 12490 */         var l, l, o, o, p, p, p, s, self, self, t, t, t, $iter821, $lattr820, $iter821, $lattr824, $loadgbl825, $binop826, $lattr824, $loadgbl825, $binop826, $call827, $compareres829, $compareres829, $jfalse830, $boolopsucc831, $jfalse832, $compareres833, $loadgbl834;
/* 12491 */         var $wakeFromSuspension = function() {
/* 12492 */             var susp = $scope818.$wakingSuspension;
/* 12493 */             delete $scope818.$wakingSuspension;
/* 12494 */             $blk = susp.$blk;
/* 12495 */             $loc = susp.$loc;
/* 12496 */             $gbl = susp.$gbl;
/* 12497 */             $exc = susp.$exc;
/* 12498 */             $err = susp.$err;
/* 12499 */             $postfinally = susp.$postfinally;
/* 12500 */             $currLineNo = susp.$lineno;
/* 12501 */             $currColNo = susp.$colno;
/* 12502 */             Sk.lastYield = Date.now();
/* 12503 */             l = susp.$tmps.l;
/* 12504 */             o = susp.$tmps.o;
/* 12505 */             p = susp.$tmps.p;
/* 12506 */             s = susp.$tmps.s;
/* 12507 */             self = susp.$tmps.self;
/* 12508 */             t = susp.$tmps.t;
/* 12509 */             $iter821 = susp.$tmps.$iter821;
/* 12510 */             $lattr820 = susp.$tmps.$lattr820;
/* 12511 */             $lattr824 = susp.$tmps.$lattr824;
/* 12512 */             $loadgbl825 = susp.$tmps.$loadgbl825;
/* 12513 */             $binop826 = susp.$tmps.$binop826;
/* 12514 */             $call827 = susp.$tmps.$call827;
/* 12515 */             $compareres829 = susp.$tmps.$compareres829;
/* 12516 */             $jfalse830 = susp.$tmps.$jfalse830;
/* 12517 */             $boolopsucc831 = susp.$tmps.$boolopsucc831;
/* 12518 */             $jfalse832 = susp.$tmps.$jfalse832;
/* 12519 */             $compareres833 = susp.$tmps.$compareres833;
/* 12520 */             $loadgbl834 = susp.$tmps.$loadgbl834;
/* 12521 */             try {
/* 12522 */                 $ret = susp.child.resume();
/* 12523 */             } catch (err) {
/* 12524 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12525 */                     err = new Sk.builtin.ExternalError(err);
/* 12526 */                 }
/* 12527 */                 err.traceback.push({
/* 12528 */                     lineno: $currLineNo,
/* 12529 */                     colno: $currColNo,
/* 12530 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 12531 */                 });
/* 12532 */                 if ($exc.length > 0) {
/* 12533 */                     $err = err;
/* 12534 */                     $blk = $exc.pop();
/* 12535 */                 } else {
/* 12536 */                     throw err;
/* 12537 */                 }
/* 12538 */             }
/* 12539 */         };
/* 12540 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12541 */             var susp = new Sk.misceval.Suspension();
/* 12542 */             susp.child = $child;
/* 12543 */             susp.resume = function() {
/* 12544 */                 $scope818.$wakingSuspension = susp;
/* 12545 */                 return $scope818();
/* 12546 */             };
/* 12547 */             susp.data = susp.child.data;
/* 12548 */             susp.$blk = $blk;
/* 12549 */             susp.$loc = $loc;
/* 12550 */             susp.$gbl = $gbl;
/* 12551 */             susp.$exc = $exc;
/* 12552 */             susp.$err = $err;
/* 12553 */             susp.$postfinally = $postfinally;
/* 12554 */             susp.$filename = $filename;
/* 12555 */             susp.$lineno = $lineno;
/* 12556 */             susp.$colno = $colno;
/* 12557 */             susp.optional = susp.child.optional;
/* 12558 */             susp.$tmps = {
/* 12559 */                 "l": l,
/* 12560 */                 "o": o,
/* 12561 */                 "p": p,
/* 12562 */                 "s": s,
/* 12563 */                 "self": self,
/* 12564 */                 "t": t,
/* 12565 */                 "$iter821": $iter821,
/* 12566 */                 "$lattr820": $lattr820,
/* 12567 */                 "$lattr824": $lattr824,
/* 12568 */                 "$loadgbl825": $loadgbl825,
/* 12569 */                 "$binop826": $binop826,
/* 12570 */                 "$call827": $call827,
/* 12571 */                 "$compareres829": $compareres829,
/* 12572 */                 "$jfalse830": $jfalse830,
/* 12573 */                 "$boolopsucc831": $boolopsucc831,
/* 12574 */                 "$jfalse832": $jfalse832,
/* 12575 */                 "$compareres833": $compareres833,
/* 12576 */                 "$loadgbl834": $loadgbl834
/* 12577 */             };
/* 12578 */             return susp;
/* 12579 */         };
/* 12580 */         var $blk = 0,
/* 12581 */             $exc = [],
/* 12582 */             $loc = {},
/* 12583 */             $gbl = this,
/* 12584 */             $err = undefined,
/* 12585 */             $ret = undefined,
/* 12586 */             $postfinally = undefined,
/* 12587 */             $currLineNo = undefined,
/* 12588 */             $currColNo = undefined;
/* 12589 */         if ($scope818.$wakingSuspension !== undefined) {
/* 12590 */             $wakeFromSuspension();
/* 12591 */         } else {
/* 12592 */             Sk.builtin.pyCheckArgs("_lightIsVisible", arguments, 3, 3, false, false);
/* 12593 */         }
/* 12594 */         while (true) {
/* 12595 */             try {
/* 12596 */                 switch ($blk) {
/* 12597 */                 case 0:
/* 12598 */                     /* --- codeobj entry --- */
/* 12599 */                     if (self === undefined) {
/* 12600 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12601 */                     }
/* 12602 */                     if (l === undefined) {
/* 12603 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/* 12604 */                     }
/* 12605 */                     if (p === undefined) {
/* 12606 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12607 */                     }
/* 12608 */ 
/* 12609 */                     //
/* 12610 */                     // line 270:
/* 12611 */                     //         for (o, s) in self.objects:
/* 12612 */                     //         ^
/* 12613 */                     //
/* 12614 */                     $currLineNo = 270;
/* 12615 */                     $currColNo = 8;
/* 12616 */ 
/* 12617 */                     if (self === undefined) {
/* 12618 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12619 */                     }
/* 12620 */                     $ret = Sk.abstr.gattr(self, 'objects', true);
/* 12621 */                     $blk = 4; /* allowing case fallthrough */
/* 12622 */                 case 4:
/* 12623 */                     /* --- function return or resume suspension --- */
/* 12624 */                     if ($ret && $ret.$isSuspension) {
/* 12625 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 270, 22);
/* 12626 */                     }
/* 12627 */                     var $lattr820 = $ret;
/* 12628 */                     var $iter821 = Sk.abstr.iter($lattr820);
/* 12629 */                     $blk = 1; /* allowing case fallthrough */
/* 12630 */                 case 1:
/* 12631 */                     /* --- for start --- */
/* 12632 */                     $ret = Sk.abstr.iternext($iter821, true);
/* 12633 */                     $blk = 5; /* allowing case fallthrough */
/* 12634 */                 case 5:
/* 12635 */                     /* --- function return or resume suspension --- */
/* 12636 */                     if ($ret && $ret.$isSuspension) {
/* 12637 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 270, 8);
/* 12638 */                     }
/* 12639 */                     var $next822 = $ret;
/* 12640 */                     if ($next822 === undefined) {
/* 12641 */                         $blk = 2;
/* 12642 */                         continue;
/* 12643 */                     }
/* 12644 */                     var $items823 = Sk.abstr.sequenceUnpack($next822, 2);
/* 12645 */                     o = $items823[0];
/* 12646 */                     s = $items823[1];
/* 12647 */                     //
/* 12648 */                     // line 271:
/* 12649 */                     //             t = o.intersectionTime(Ray(p,l - p))
/* 12650 */                     //             ^
/* 12651 */                     //
/* 12652 */                     $currLineNo = 271;
/* 12653 */                     $currColNo = 12;
/* 12654 */ 
/* 12655 */                     if (o === undefined) {
/* 12656 */                         throw new Sk.builtin.UnboundLocalError('local variable \'o\' referenced before assignment');
/* 12657 */                     }
/* 12658 */                     $ret = Sk.abstr.gattr(o, 'intersectionTime', true);
/* 12659 */                     $blk = 6; /* allowing case fallthrough */
/* 12660 */                 case 6:
/* 12661 */                     /* --- function return or resume suspension --- */
/* 12662 */                     if ($ret && $ret.$isSuspension) {
/* 12663 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 271, 16);
/* 12664 */                     }
/* 12665 */                     var $lattr824 = $ret;
/* 12666 */                     var $loadgbl825 = Sk.misceval.loadname('Ray', $gbl);
/* 12667 */                     if (p === undefined) {
/* 12668 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12669 */                     }
/* 12670 */                     if (l === undefined) {
/* 12671 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/* 12672 */                     }
/* 12673 */                     if (p === undefined) {
/* 12674 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12675 */                     }
/* 12676 */                     var $binop826 = Sk.abstr.numberBinOp(l, p, 'Sub');
/* 12677 */                     $ret;
/* 12678 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl825, p, $binop826);
/* 12679 */                     $blk = 7; /* allowing case fallthrough */
/* 12680 */                 case 7:
/* 12681 */                     /* --- function return or resume suspension --- */
/* 12682 */                     if ($ret && $ret.$isSuspension) {
/* 12683 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 271, 35);
/* 12684 */                     }
/* 12685 */                     var $call827 = $ret;
/* 12686 */                     //
/* 12687 */                     // line 271:
/* 12688 */                     //             t = o.intersectionTime(Ray(p,l - p))
/* 12689 */                     //                                    ^
/* 12690 */                     //
/* 12691 */                     $currLineNo = 271;
/* 12692 */                     $currColNo = 35;
/* 12693 */ 
/* 12694 */                     $ret;
/* 12695 */                     $ret = Sk.misceval.callsimOrSuspend($lattr824, $call827);
/* 12696 */                     $blk = 8; /* allowing case fallthrough */
/* 12697 */                 case 8:
/* 12698 */                     /* --- function return or resume suspension --- */
/* 12699 */                     if ($ret && $ret.$isSuspension) {
/* 12700 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 271, 16);
/* 12701 */                     }
/* 12702 */                     var $call828 = $ret;
/* 12703 */                     //
/* 12704 */                     // line 271:
/* 12705 */                     //             t = o.intersectionTime(Ray(p,l - p))
/* 12706 */                     //                 ^
/* 12707 */                     //
/* 12708 */                     $currLineNo = 271;
/* 12709 */                     $currColNo = 16;
/* 12710 */ 
/* 12711 */                     t = $call828;
/* 12712 */                     //
/* 12713 */                     // line 272:
/* 12714 */                     //             if t is not None and t > EPSILON:
/* 12715 */                     //             ^
/* 12716 */                     //
/* 12717 */                     $currLineNo = 272;
/* 12718 */                     $currColNo = 12;
/* 12719 */ 
/* 12720 */                     if (t === undefined) {
/* 12721 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 12722 */                     }
/* 12723 */                     var $compareres829 = null;
/* 12724 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, Sk.builtin.none.none$, 'IsNot', true));
/* 12725 */                     $blk = 12; /* allowing case fallthrough */
/* 12726 */                 case 12:
/* 12727 */                     /* --- function return or resume suspension --- */
/* 12728 */                     if ($ret && $ret.$isSuspension) {
/* 12729 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 272, 15);
/* 12730 */                     }
/* 12731 */                     $compareres829 = $ret;
/* 12732 */                     var $jfalse830 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12733 */                     if ($jfalse830) { /*test failed */
/* 12734 */                         $blk = 11;
/* 12735 */                         continue;
/* 12736 */                     }
/* 12737 */                     $blk = 11; /* allowing case fallthrough */
/* 12738 */                 case 11:
/* 12739 */                     /* --- done --- */
/* 12740 */                     var $boolopsucc831 = $compareres829;
/* 12741 */                     $boolopsucc831 = $compareres829;
/* 12742 */                     var $jfalse832 = ($compareres829 === false || !Sk.misceval.isTrue($compareres829));
/* 12743 */                     if ($jfalse832) { /*test failed */
/* 12744 */                         $blk = 10;
/* 12745 */                         continue;
/* 12746 */                     }
/* 12747 */                     if (t === undefined) {
/* 12748 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 12749 */                     }
/* 12750 */                     var $compareres833 = null;
/* 12751 */                     var $loadgbl834 = Sk.misceval.loadname('EPSILON', $gbl);
/* 12752 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, $loadgbl834, 'Gt', true));
/* 12753 */                     $blk = 14; /* allowing case fallthrough */
/* 12754 */                 case 14:
/* 12755 */                     /* --- function return or resume suspension --- */
/* 12756 */                     if ($ret && $ret.$isSuspension) {
/* 12757 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 272, 33);
/* 12758 */                     }
/* 12759 */                     $compareres833 = $ret;
/* 12760 */                     var $jfalse835 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12761 */                     if ($jfalse835) { /*test failed */
/* 12762 */                         $blk = 13;
/* 12763 */                         continue;
/* 12764 */                     }
/* 12765 */                     $blk = 13; /* allowing case fallthrough */
/* 12766 */                 case 13:
/* 12767 */                     /* --- done --- */
/* 12768 */                     $boolopsucc831 = $compareres833;
/* 12769 */                     var $jfalse836 = ($compareres833 === false || !Sk.misceval.isTrue($compareres833));
/* 12770 */                     if ($jfalse836) { /*test failed */
/* 12771 */                         $blk = 10;
/* 12772 */                         continue;
/* 12773 */                     }
/* 12774 */                     $blk = 10; /* allowing case fallthrough */
/* 12775 */                 case 10:
/* 12776 */                     /* --- end of boolop --- */
/* 12777 */                     var $jfalse837 = ($boolopsucc831 === false || !Sk.misceval.isTrue($boolopsucc831));
/* 12778 */                     if ($jfalse837) { /*test failed */
/* 12779 */                         $blk = 9;
/* 12780 */                         continue;
/* 12781 */                     }
/* 12782 */                     //
/* 12783 */                     // line 273:
/* 12784 */                     //                 return False
/* 12785 */                     //                 ^
/* 12786 */                     //
/* 12787 */                     $currLineNo = 273;
/* 12788 */                     $currColNo = 16;
/* 12789 */ 
/* 12790 */                     return Sk.builtin.bool.false$;
/* 12791 */                     $blk = 9; /* allowing case fallthrough */
/* 12792 */                 case 9:
/* 12793 */                     /* --- end of if --- */
/* 12794 */                     $blk = 1; /* jump */
/* 12795 */                     continue;
/* 12796 */                 case 2:
/* 12797 */                     /* --- for cleanup --- */
/* 12798 */                     $blk = 3; /* allowing case fallthrough */
/* 12799 */                 case 3:
/* 12800 */                     /* --- for end --- */
/* 12801 */                     //
/* 12802 */                     // line 274:
/* 12803 */                     //         return True
/* 12804 */                     //         ^
/* 12805 */                     //
/* 12806 */                     $currLineNo = 274;
/* 12807 */                     $currColNo = 8;
/* 12808 */ 
/* 12809 */                     return Sk.builtin.bool.true$;
/* 12810 */                     return Sk.builtin.none.none$;
/* 12811 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12812 */                 }
/* 12813 */             } catch (err) {
/* 12814 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12815 */                     err = new Sk.builtin.ExternalError(err);
/* 12816 */                 }
/* 12817 */                 err.traceback.push({
/* 12818 */                     lineno: $currLineNo,
/* 12819 */                     colno: $currColNo,
/* 12820 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 12821 */                 });
/* 12822 */                 if ($exc.length > 0) {
/* 12823 */                     $err = err;
/* 12824 */                     $blk = $exc.pop();
/* 12825 */                     continue;
/* 12826 */                 } else {
/* 12827 */                     throw err;
/* 12828 */                 }
/* 12829 */             }
/* 12830 */         }
/* 12831 */     });
/* 12832 */     var $scope839 = (function $visibleLights840$(self, p) {
/* 12833 */         var l, result; /* locals */
/* 12834 */         var l, l, l, p, p, result, result, result, self, self, self, $iter843, $lattr842, $iter843, $lattr845, $lattr848;
/* 12835 */         var $wakeFromSuspension = function() {
/* 12836 */             var susp = $scope839.$wakingSuspension;
/* 12837 */             delete $scope839.$wakingSuspension;
/* 12838 */             $blk = susp.$blk;
/* 12839 */             $loc = susp.$loc;
/* 12840 */             $gbl = susp.$gbl;
/* 12841 */             $exc = susp.$exc;
/* 12842 */             $err = susp.$err;
/* 12843 */             $postfinally = susp.$postfinally;
/* 12844 */             $currLineNo = susp.$lineno;
/* 12845 */             $currColNo = susp.$colno;
/* 12846 */             Sk.lastYield = Date.now();
/* 12847 */             l = susp.$tmps.l;
/* 12848 */             p = susp.$tmps.p;
/* 12849 */             result = susp.$tmps.result;
/* 12850 */             self = susp.$tmps.self;
/* 12851 */             $iter843 = susp.$tmps.$iter843;
/* 12852 */             $lattr842 = susp.$tmps.$lattr842;
/* 12853 */             $lattr845 = susp.$tmps.$lattr845;
/* 12854 */             $lattr848 = susp.$tmps.$lattr848;
/* 12855 */             try {
/* 12856 */                 $ret = susp.child.resume();
/* 12857 */             } catch (err) {
/* 12858 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12859 */                     err = new Sk.builtin.ExternalError(err);
/* 12860 */                 }
/* 12861 */                 err.traceback.push({
/* 12862 */                     lineno: $currLineNo,
/* 12863 */                     colno: $currColNo,
/* 12864 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 12865 */                 });
/* 12866 */                 if ($exc.length > 0) {
/* 12867 */                     $err = err;
/* 12868 */                     $blk = $exc.pop();
/* 12869 */                 } else {
/* 12870 */                     throw err;
/* 12871 */                 }
/* 12872 */             }
/* 12873 */         };
/* 12874 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12875 */             var susp = new Sk.misceval.Suspension();
/* 12876 */             susp.child = $child;
/* 12877 */             susp.resume = function() {
/* 12878 */                 $scope839.$wakingSuspension = susp;
/* 12879 */                 return $scope839();
/* 12880 */             };
/* 12881 */             susp.data = susp.child.data;
/* 12882 */             susp.$blk = $blk;
/* 12883 */             susp.$loc = $loc;
/* 12884 */             susp.$gbl = $gbl;
/* 12885 */             susp.$exc = $exc;
/* 12886 */             susp.$err = $err;
/* 12887 */             susp.$postfinally = $postfinally;
/* 12888 */             susp.$filename = $filename;
/* 12889 */             susp.$lineno = $lineno;
/* 12890 */             susp.$colno = $colno;
/* 12891 */             susp.optional = susp.child.optional;
/* 12892 */             susp.$tmps = {
/* 12893 */                 "l": l,
/* 12894 */                 "p": p,
/* 12895 */                 "result": result,
/* 12896 */                 "self": self,
/* 12897 */                 "$iter843": $iter843,
/* 12898 */                 "$lattr842": $lattr842,
/* 12899 */                 "$lattr845": $lattr845,
/* 12900 */                 "$lattr848": $lattr848
/* 12901 */             };
/* 12902 */             return susp;
/* 12903 */         };
/* 12904 */         var $blk = 0,
/* 12905 */             $exc = [],
/* 12906 */             $loc = {},
/* 12907 */             $gbl = this,
/* 12908 */             $err = undefined,
/* 12909 */             $ret = undefined,
/* 12910 */             $postfinally = undefined,
/* 12911 */             $currLineNo = undefined,
/* 12912 */             $currColNo = undefined;
/* 12913 */         if ($scope839.$wakingSuspension !== undefined) {
/* 12914 */             $wakeFromSuspension();
/* 12915 */         } else {
/* 12916 */             Sk.builtin.pyCheckArgs("visibleLights", arguments, 2, 2, false, false);
/* 12917 */         }
/* 12918 */         while (true) {
/* 12919 */             try {
/* 12920 */                 switch ($blk) {
/* 12921 */                 case 0:
/* 12922 */                     /* --- codeobj entry --- */
/* 12923 */                     if (self === undefined) {
/* 12924 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12925 */                     }
/* 12926 */                     if (p === undefined) {
/* 12927 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 12928 */                     }
/* 12929 */ 
/* 12930 */                     //
/* 12931 */                     // line 277:
/* 12932 */                     //         result = []
/* 12933 */                     //         ^
/* 12934 */                     //
/* 12935 */                     $currLineNo = 277;
/* 12936 */                     $currColNo = 8;
/* 12937 */ 
/* 12938 */                     var $loadlist841 = new Sk.builtins['list']([]);
/* 12939 */                     result = $loadlist841;
/* 12940 */                     //
/* 12941 */                     // line 278:
/* 12942 */                     //         for l in self.lightPoints:
/* 12943 */                     //         ^
/* 12944 */                     //
/* 12945 */                     $currLineNo = 278;
/* 12946 */                     $currColNo = 8;
/* 12947 */ 
/* 12948 */                     if (self === undefined) {
/* 12949 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12950 */                     }
/* 12951 */                     $ret = Sk.abstr.gattr(self, 'lightPoints', true);
/* 12952 */                     $blk = 4; /* allowing case fallthrough */
/* 12953 */                 case 4:
/* 12954 */                     /* --- function return or resume suspension --- */
/* 12955 */                     if ($ret && $ret.$isSuspension) {
/* 12956 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 278, 17);
/* 12957 */                     }
/* 12958 */                     var $lattr842 = $ret;
/* 12959 */                     var $iter843 = Sk.abstr.iter($lattr842);
/* 12960 */                     $blk = 1; /* allowing case fallthrough */
/* 12961 */                 case 1:
/* 12962 */                     /* --- for start --- */
/* 12963 */                     $ret = Sk.abstr.iternext($iter843, true);
/* 12964 */                     $blk = 5; /* allowing case fallthrough */
/* 12965 */                 case 5:
/* 12966 */                     /* --- function return or resume suspension --- */
/* 12967 */                     if ($ret && $ret.$isSuspension) {
/* 12968 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 278, 8);
/* 12969 */                     }
/* 12970 */                     var $next844 = $ret;
/* 12971 */                     if ($next844 === undefined) {
/* 12972 */                         $blk = 2;
/* 12973 */                         continue;
/* 12974 */                     }
/* 12975 */                     l = $next844;
/* 12976 */                     //
/* 12977 */                     // line 279:
/* 12978 */                     //             if self._lightIsVisible(l, p):
/* 12979 */                     //             ^
/* 12980 */                     //
/* 12981 */                     $currLineNo = 279;
/* 12982 */                     $currColNo = 12;
/* 12983 */ 
/* 12984 */                     if (self === undefined) {
/* 12985 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12986 */                     }
/* 12987 */                     $ret = Sk.abstr.gattr(self, '_lightIsVisible', true);
/* 12988 */                     $blk = 7; /* allowing case fallthrough */
/* 12989 */                 case 7:
/* 12990 */                     /* --- function return or resume suspension --- */
/* 12991 */                     if ($ret && $ret.$isSuspension) {
/* 12992 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 279, 15);
/* 12993 */                     }
/* 12994 */                     var $lattr845 = $ret;
/* 12995 */                     if (l === undefined) {
/* 12996 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/* 12997 */                     }
/* 12998 */                     if (p === undefined) {
/* 12999 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 13000 */                     }
/* 13001 */                     $ret;
/* 13002 */                     $ret = Sk.misceval.callsimOrSuspend($lattr845, l, p);
/* 13003 */                     $blk = 8; /* allowing case fallthrough */
/* 13004 */                 case 8:
/* 13005 */                     /* --- function return or resume suspension --- */
/* 13006 */                     if ($ret && $ret.$isSuspension) {
/* 13007 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 279, 15);
/* 13008 */                     }
/* 13009 */                     var $call846 = $ret;
/* 13010 */                     //
/* 13011 */                     // line 279:
/* 13012 */                     //             if self._lightIsVisible(l, p):
/* 13013 */                     //                ^
/* 13014 */                     //
/* 13015 */                     $currLineNo = 279;
/* 13016 */                     $currColNo = 15;
/* 13017 */ 
/* 13018 */                     var $jfalse847 = ($call846 === false || !Sk.misceval.isTrue($call846));
/* 13019 */                     if ($jfalse847) { /*test failed */
/* 13020 */                         $blk = 6;
/* 13021 */                         continue;
/* 13022 */                     }
/* 13023 */                     //
/* 13024 */                     // line 280:
/* 13025 */                     //                 result.append(l)
/* 13026 */                     //                 ^
/* 13027 */                     //
/* 13028 */                     $currLineNo = 280;
/* 13029 */                     $currColNo = 16;
/* 13030 */ 
/* 13031 */                     if (result === undefined) {
/* 13032 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 13033 */                     }
/* 13034 */                     $ret = Sk.abstr.gattr(result, 'append', true);
/* 13035 */                     $blk = 9; /* allowing case fallthrough */
/* 13036 */                 case 9:
/* 13037 */                     /* --- function return or resume suspension --- */
/* 13038 */                     if ($ret && $ret.$isSuspension) {
/* 13039 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 280, 16);
/* 13040 */                     }
/* 13041 */                     var $lattr848 = $ret;
/* 13042 */                     if (l === undefined) {
/* 13043 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/* 13044 */                     }
/* 13045 */                     $ret;
/* 13046 */                     $ret = Sk.misceval.callsimOrSuspend($lattr848, l);
/* 13047 */                     $blk = 10; /* allowing case fallthrough */
/* 13048 */                 case 10:
/* 13049 */                     /* --- function return or resume suspension --- */
/* 13050 */                     if ($ret && $ret.$isSuspension) {
/* 13051 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 280, 16);
/* 13052 */                     }
/* 13053 */                     var $call849 = $ret;
/* 13054 */                     //
/* 13055 */                     // line 280:
/* 13056 */                     //                 result.append(l)
/* 13057 */                     //                 ^
/* 13058 */                     //
/* 13059 */                     $currLineNo = 280;
/* 13060 */                     $currColNo = 16;
/* 13061 */ 
/* 13062 */                     $blk = 6; /* allowing case fallthrough */
/* 13063 */                 case 6:
/* 13064 */                     /* --- end of if --- */
/* 13065 */                     $blk = 1; /* jump */
/* 13066 */                     continue;
/* 13067 */                 case 2:
/* 13068 */                     /* --- for cleanup --- */
/* 13069 */                     $blk = 3; /* allowing case fallthrough */
/* 13070 */                 case 3:
/* 13071 */                     /* --- for end --- */
/* 13072 */                     //
/* 13073 */                     // line 281:
/* 13074 */                     //         return result
/* 13075 */                     //         ^
/* 13076 */                     //
/* 13077 */                     $currLineNo = 281;
/* 13078 */                     $currColNo = 8;
/* 13079 */ 
/* 13080 */                     if (result === undefined) {
/* 13081 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 13082 */                     }
/* 13083 */                     return result;
/* 13084 */                     return Sk.builtin.none.none$;
/* 13085 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13086 */                 }
/* 13087 */             } catch (err) {
/* 13088 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13089 */                     err = new Sk.builtin.ExternalError(err);
/* 13090 */                 }
/* 13091 */                 err.traceback.push({
/* 13092 */                     lineno: $currLineNo,
/* 13093 */                     colno: $currColNo,
/* 13094 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13095 */                 });
/* 13096 */                 if ($exc.length > 0) {
/* 13097 */                     $err = err;
/* 13098 */                     $blk = $exc.pop();
/* 13099 */                     continue;
/* 13100 */                 } else {
/* 13101 */                     throw err;
/* 13102 */                 }
/* 13103 */             }
/* 13104 */         }
/* 13105 */     });
/* 13106 */     var $scope852 = (function $addColours853$(a, scale, b) {
/* 13107 */         var a, a, a, a, b, b, b, b, scale, scale, scale, scale, $lsubscr854, $lsubscr854, $lsubscr855, $binop856, $binop857, $elem858, $lsubscr854, $lsubscr855, $binop856, $binop857, $elem858, $lsubscr859, $lsubscr854, $lsubscr855, $binop856, $binop857, $elem858, $lsubscr859, $lsubscr860, $binop861, $binop862, $elem863, $lsubscr854, $lsubscr855, $binop856, $binop857, $elem858, $lsubscr859, $lsubscr860, $binop861, $binop862, $elem863, $lsubscr864;
/* 13108 */         var $wakeFromSuspension = function() {
/* 13109 */             var susp = $scope852.$wakingSuspension;
/* 13110 */             delete $scope852.$wakingSuspension;
/* 13111 */             $blk = susp.$blk;
/* 13112 */             $loc = susp.$loc;
/* 13113 */             $gbl = susp.$gbl;
/* 13114 */             $exc = susp.$exc;
/* 13115 */             $err = susp.$err;
/* 13116 */             $postfinally = susp.$postfinally;
/* 13117 */             $currLineNo = susp.$lineno;
/* 13118 */             $currColNo = susp.$colno;
/* 13119 */             Sk.lastYield = Date.now();
/* 13120 */             a = susp.$tmps.a;
/* 13121 */             b = susp.$tmps.b;
/* 13122 */             scale = susp.$tmps.scale;
/* 13123 */             $lsubscr854 = susp.$tmps.$lsubscr854;
/* 13124 */             $lsubscr855 = susp.$tmps.$lsubscr855;
/* 13125 */             $binop856 = susp.$tmps.$binop856;
/* 13126 */             $binop857 = susp.$tmps.$binop857;
/* 13127 */             $elem858 = susp.$tmps.$elem858;
/* 13128 */             $lsubscr859 = susp.$tmps.$lsubscr859;
/* 13129 */             $lsubscr860 = susp.$tmps.$lsubscr860;
/* 13130 */             $binop861 = susp.$tmps.$binop861;
/* 13131 */             $binop862 = susp.$tmps.$binop862;
/* 13132 */             $elem863 = susp.$tmps.$elem863;
/* 13133 */             $lsubscr864 = susp.$tmps.$lsubscr864;
/* 13134 */             try {
/* 13135 */                 $ret = susp.child.resume();
/* 13136 */             } catch (err) {
/* 13137 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13138 */                     err = new Sk.builtin.ExternalError(err);
/* 13139 */                 }
/* 13140 */                 err.traceback.push({
/* 13141 */                     lineno: $currLineNo,
/* 13142 */                     colno: $currColNo,
/* 13143 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13144 */                 });
/* 13145 */                 if ($exc.length > 0) {
/* 13146 */                     $err = err;
/* 13147 */                     $blk = $exc.pop();
/* 13148 */                 } else {
/* 13149 */                     throw err;
/* 13150 */                 }
/* 13151 */             }
/* 13152 */         };
/* 13153 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13154 */             var susp = new Sk.misceval.Suspension();
/* 13155 */             susp.child = $child;
/* 13156 */             susp.resume = function() {
/* 13157 */                 $scope852.$wakingSuspension = susp;
/* 13158 */                 return $scope852();
/* 13159 */             };
/* 13160 */             susp.data = susp.child.data;
/* 13161 */             susp.$blk = $blk;
/* 13162 */             susp.$loc = $loc;
/* 13163 */             susp.$gbl = $gbl;
/* 13164 */             susp.$exc = $exc;
/* 13165 */             susp.$err = $err;
/* 13166 */             susp.$postfinally = $postfinally;
/* 13167 */             susp.$filename = $filename;
/* 13168 */             susp.$lineno = $lineno;
/* 13169 */             susp.$colno = $colno;
/* 13170 */             susp.optional = susp.child.optional;
/* 13171 */             susp.$tmps = {
/* 13172 */                 "a": a,
/* 13173 */                 "b": b,
/* 13174 */                 "scale": scale,
/* 13175 */                 "$lsubscr854": $lsubscr854,
/* 13176 */                 "$lsubscr855": $lsubscr855,
/* 13177 */                 "$binop856": $binop856,
/* 13178 */                 "$binop857": $binop857,
/* 13179 */                 "$elem858": $elem858,
/* 13180 */                 "$lsubscr859": $lsubscr859,
/* 13181 */                 "$lsubscr860": $lsubscr860,
/* 13182 */                 "$binop861": $binop861,
/* 13183 */                 "$binop862": $binop862,
/* 13184 */                 "$elem863": $elem863,
/* 13185 */                 "$lsubscr864": $lsubscr864
/* 13186 */             };
/* 13187 */             return susp;
/* 13188 */         };
/* 13189 */         var $blk = 0,
/* 13190 */             $exc = [],
/* 13191 */             $loc = {},
/* 13192 */             $gbl = this,
/* 13193 */             $err = undefined,
/* 13194 */             $ret = undefined,
/* 13195 */             $postfinally = undefined,
/* 13196 */             $currLineNo = undefined,
/* 13197 */             $currColNo = undefined;
/* 13198 */         if ($scope852.$wakingSuspension !== undefined) {
/* 13199 */             $wakeFromSuspension();
/* 13200 */         } else {
/* 13201 */             Sk.builtin.pyCheckArgs("addColours", arguments, 3, 3, false, false);
/* 13202 */         }
/* 13203 */         while (true) {
/* 13204 */             try {
/* 13205 */                 switch ($blk) {
/* 13206 */                 case 0:
/* 13207 */                     /* --- codeobj entry --- */
/* 13208 */                     if (a === undefined) {
/* 13209 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/* 13210 */                     }
/* 13211 */                     if (scale === undefined) {
/* 13212 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scale\' referenced before assignment');
/* 13213 */                     }
/* 13214 */                     if (b === undefined) {
/* 13215 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 13216 */                     }
/* 13217 */ 
/* 13218 */                     //
/* 13219 */                     // line 284:
/* 13220 */                     //     return (a[0] + scale * b[0],
/* 13221 */                     //     ^
/* 13222 */                     //
/* 13223 */                     $currLineNo = 284;
/* 13224 */                     $currColNo = 4;
/* 13225 */ 
/* 13226 */                     if (a === undefined) {
/* 13227 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/* 13228 */                     }
/* 13229 */                     $ret = Sk.abstr.objectGetItem(a, new Sk.builtin.int_(0), true);
/* 13230 */                     $blk = 1; /* allowing case fallthrough */
/* 13231 */                 case 1:
/* 13232 */                     /* --- function return or resume suspension --- */
/* 13233 */                     if ($ret && $ret.$isSuspension) {
/* 13234 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13235 */                     }
/* 13236 */                     var $lsubscr854 = $ret;
/* 13237 */                     if (scale === undefined) {
/* 13238 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scale\' referenced before assignment');
/* 13239 */                     }
/* 13240 */                     if (b === undefined) {
/* 13241 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 13242 */                     }
/* 13243 */                     $ret = Sk.abstr.objectGetItem(b, new Sk.builtin.int_(0), true);
/* 13244 */                     $blk = 2; /* allowing case fallthrough */
/* 13245 */                 case 2:
/* 13246 */                     /* --- function return or resume suspension --- */
/* 13247 */                     if ($ret && $ret.$isSuspension) {
/* 13248 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13249 */                     }
/* 13250 */                     var $lsubscr855 = $ret;
/* 13251 */                     var $binop856 = Sk.abstr.numberBinOp(scale, $lsubscr855, 'Mult');
/* 13252 */                     var $binop857 = Sk.abstr.numberBinOp($lsubscr854, $binop856, 'Add');
/* 13253 */                     var $elem858 = $binop857;
/* 13254 */                     if (a === undefined) {
/* 13255 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/* 13256 */                     }
/* 13257 */                     $ret = Sk.abstr.objectGetItem(a, new Sk.builtin.int_(1), true);
/* 13258 */                     $blk = 3; /* allowing case fallthrough */
/* 13259 */                 case 3:
/* 13260 */                     /* --- function return or resume suspension --- */
/* 13261 */                     if ($ret && $ret.$isSuspension) {
/* 13262 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13263 */                     }
/* 13264 */                     var $lsubscr859 = $ret;
/* 13265 */                     if (scale === undefined) {
/* 13266 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scale\' referenced before assignment');
/* 13267 */                     }
/* 13268 */                     if (b === undefined) {
/* 13269 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 13270 */                     }
/* 13271 */                     $ret = Sk.abstr.objectGetItem(b, new Sk.builtin.int_(1), true);
/* 13272 */                     $blk = 4; /* allowing case fallthrough */
/* 13273 */                 case 4:
/* 13274 */                     /* --- function return or resume suspension --- */
/* 13275 */                     if ($ret && $ret.$isSuspension) {
/* 13276 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13277 */                     }
/* 13278 */                     var $lsubscr860 = $ret;
/* 13279 */                     var $binop861 = Sk.abstr.numberBinOp(scale, $lsubscr860, 'Mult');
/* 13280 */                     var $binop862 = Sk.abstr.numberBinOp($lsubscr859, $binop861, 'Add');
/* 13281 */                     var $elem863 = $binop862;
/* 13282 */                     if (a === undefined) {
/* 13283 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/* 13284 */                     }
/* 13285 */                     $ret = Sk.abstr.objectGetItem(a, new Sk.builtin.int_(2), true);
/* 13286 */                     $blk = 5; /* allowing case fallthrough */
/* 13287 */                 case 5:
/* 13288 */                     /* --- function return or resume suspension --- */
/* 13289 */                     if ($ret && $ret.$isSuspension) {
/* 13290 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13291 */                     }
/* 13292 */                     var $lsubscr864 = $ret;
/* 13293 */                     if (scale === undefined) {
/* 13294 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scale\' referenced before assignment');
/* 13295 */                     }
/* 13296 */                     if (b === undefined) {
/* 13297 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 13298 */                     }
/* 13299 */                     $ret = Sk.abstr.objectGetItem(b, new Sk.builtin.int_(2), true);
/* 13300 */                     $blk = 6; /* allowing case fallthrough */
/* 13301 */                 case 6:
/* 13302 */                     /* --- function return or resume suspension --- */
/* 13303 */                     if ($ret && $ret.$isSuspension) {
/* 13304 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', $currLineNo, $currColNo);
/* 13305 */                     }
/* 13306 */                     var $lsubscr865 = $ret;
/* 13307 */                     var $binop866 = Sk.abstr.numberBinOp(scale, $lsubscr865, 'Mult');
/* 13308 */                     var $binop867 = Sk.abstr.numberBinOp($lsubscr864, $binop866, 'Add');
/* 13309 */                     var $elem868 = $binop867;
/* 13310 */                     var $loadtuple869 = new Sk.builtins['tuple']([$elem858, $elem863, $elem868]);
/* 13311 */                     return $loadtuple869;
/* 13312 */                     return Sk.builtin.none.none$;
/* 13313 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13314 */                 }
/* 13315 */             } catch (err) {
/* 13316 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13317 */                     err = new Sk.builtin.ExternalError(err);
/* 13318 */                 }
/* 13319 */                 err.traceback.push({
/* 13320 */                     lineno: $currLineNo,
/* 13321 */                     colno: $currColNo,
/* 13322 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13323 */                 });
/* 13324 */                 if ($exc.length > 0) {
/* 13325 */                     $err = err;
/* 13326 */                     $blk = $exc.pop();
/* 13327 */                     continue;
/* 13328 */                 } else {
/* 13329 */                     throw err;
/* 13330 */                 }
/* 13331 */             }
/* 13332 */         }
/* 13333 */     });
/* 13334 */     var $scope872 = (function $SimpleSurface$class_outer($globals, $locals, $rest) {
/* 13335 */         var $gbl = $globals,
/* 13336 */             $loc = $locals;
/* 13337 */         (function $SimpleSurface$_closure() {
/* 13338 */             var $blk = 0,
/* 13339 */                 $exc = [],
/* 13340 */                 $ret = undefined,
/* 13341 */                 $postfinally = undefined,
/* 13342 */                 $currLineNo = undefined,
/* 13343 */                 $currColNo = undefined;
/* 13344 */             while (true) {
/* 13345 */                 try {
/* 13346 */                     switch ($blk) {
/* 13347 */                     case 0:
/* 13348 */                         /* --- class entry --- */
/* 13349 */                         //
/* 13350 */                         // line 289:
/* 13351 */                         //     def __init__(self, **kwargs):
/* 13352 */                         //     ^
/* 13353 */                         //
/* 13354 */                         $currLineNo = 289;
/* 13355 */                         $currColNo = 4;
/* 13356 */ 
/* 13357 */                         $scope873.co_name = new Sk.builtins['str']('__init__');
/* 13358 */                         $scope873.co_varnames = ['self'];
/* 13359 */                         $scope873.co_kwargs = 1;
/* 13360 */                         var $funcobj892 = new Sk.builtins['function']($scope873, $gbl);
/* 13361 */                         $loc.__init__ = $funcobj892;
/* 13362 */                         //
/* 13363 */                         // line 295:
/* 13364 */                         //     def baseColourAt(self, p):
/* 13365 */                         //     ^
/* 13366 */                         //
/* 13367 */                         $currLineNo = 295;
/* 13368 */                         $currColNo = 4;
/* 13369 */ 
/* 13370 */                         $scope893.co_name = new Sk.builtins['str']('baseColourAt');
/* 13371 */                         $scope893.co_varnames = ['self', 'p'];
/* 13372 */                         var $funcobj896 = new Sk.builtins['function']($scope893, $gbl);
/* 13373 */                         $loc.baseColourAt = $funcobj896;
/* 13374 */                         //
/* 13375 */                         // line 298:
/* 13376 */                         //     def colourAt(self, scene, ray, p, normal):
/* 13377 */                         //     ^
/* 13378 */                         //
/* 13379 */                         $currLineNo = 298;
/* 13380 */                         $currColNo = 4;
/* 13381 */ 
/* 13382 */                         $scope897.co_name = new Sk.builtins['str']('colourAt');
/* 13383 */                         $scope897.co_varnames = ['self', 'scene', 'ray', 'p', 'normal'];
/* 13384 */                         var $funcobj949 = new Sk.builtins['function']($scope897, $gbl);
/* 13385 */                         $loc.colourAt = $funcobj949;
/* 13386 */                         return;
/* 13387 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13388 */                     }
/* 13389 */                 } catch (err) {
/* 13390 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/* 13391 */                         err = new Sk.builtin.ExternalError(err);
/* 13392 */                     }
/* 13393 */                     err.traceback.push({
/* 13394 */                         lineno: $currLineNo,
/* 13395 */                         colno: $currColNo,
/* 13396 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13397 */                     });
/* 13398 */                     if ($exc.length > 0) {
/* 13399 */                         $err = err;
/* 13400 */                         $blk = $exc.pop();
/* 13401 */                         continue;
/* 13402 */                     } else {
/* 13403 */                         throw err;
/* 13404 */                     }
/* 13405 */                 }
/* 13406 */             }
/* 13407 */         }).apply(null, $rest);
/* 13408 */     });
/* 13409 */     var $scope873 = (function $__init__874$($kwa, self) {
/* 13410 */         var kwargs; /* locals */
/* 13411 */         var kwargs, kwargs, kwargs, kwargs, self, self, self, self, self, self, self, $kwa, $lattr875, $str876, $elem877, $elem878, $elem879, $loadtuple880, $lattr875, $str876, $elem877, $elem878, $elem879, $loadtuple880, $call881, $lattr882, $str883, $lattr882, $str883, $call884, $lattr885, $str886, $lattr885, $str886, $call887, $lattr888, $binop889, $lattr888, $binop889, $lattr890, $binop891;
/* 13412 */         var $wakeFromSuspension = function() {
/* 13413 */             var susp = $scope873.$wakingSuspension;
/* 13414 */             delete $scope873.$wakingSuspension;
/* 13415 */             $blk = susp.$blk;
/* 13416 */             $loc = susp.$loc;
/* 13417 */             $gbl = susp.$gbl;
/* 13418 */             $exc = susp.$exc;
/* 13419 */             $err = susp.$err;
/* 13420 */             $postfinally = susp.$postfinally;
/* 13421 */             $currLineNo = susp.$lineno;
/* 13422 */             $currColNo = susp.$colno;
/* 13423 */             Sk.lastYield = Date.now();
/* 13424 */             kwargs = susp.$tmps.kwargs;
/* 13425 */             self = susp.$tmps.self;
/* 13426 */             $kwa = susp.$tmps.$kwa;
/* 13427 */             $lattr875 = susp.$tmps.$lattr875;
/* 13428 */             $str876 = susp.$tmps.$str876;
/* 13429 */             $elem877 = susp.$tmps.$elem877;
/* 13430 */             $elem878 = susp.$tmps.$elem878;
/* 13431 */             $elem879 = susp.$tmps.$elem879;
/* 13432 */             $loadtuple880 = susp.$tmps.$loadtuple880;
/* 13433 */             $call881 = susp.$tmps.$call881;
/* 13434 */             $lattr882 = susp.$tmps.$lattr882;
/* 13435 */             $str883 = susp.$tmps.$str883;
/* 13436 */             $call884 = susp.$tmps.$call884;
/* 13437 */             $lattr885 = susp.$tmps.$lattr885;
/* 13438 */             $str886 = susp.$tmps.$str886;
/* 13439 */             $call887 = susp.$tmps.$call887;
/* 13440 */             $lattr888 = susp.$tmps.$lattr888;
/* 13441 */             $binop889 = susp.$tmps.$binop889;
/* 13442 */             $lattr890 = susp.$tmps.$lattr890;
/* 13443 */             $binop891 = susp.$tmps.$binop891;
/* 13444 */             try {
/* 13445 */                 $ret = susp.child.resume();
/* 13446 */             } catch (err) {
/* 13447 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13448 */                     err = new Sk.builtin.ExternalError(err);
/* 13449 */                 }
/* 13450 */                 err.traceback.push({
/* 13451 */                     lineno: $currLineNo,
/* 13452 */                     colno: $currColNo,
/* 13453 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13454 */                 });
/* 13455 */                 if ($exc.length > 0) {
/* 13456 */                     $err = err;
/* 13457 */                     $blk = $exc.pop();
/* 13458 */                 } else {
/* 13459 */                     throw err;
/* 13460 */                 }
/* 13461 */             }
/* 13462 */         };
/* 13463 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13464 */             var susp = new Sk.misceval.Suspension();
/* 13465 */             susp.child = $child;
/* 13466 */             susp.resume = function() {
/* 13467 */                 $scope873.$wakingSuspension = susp;
/* 13468 */                 return $scope873();
/* 13469 */             };
/* 13470 */             susp.data = susp.child.data;
/* 13471 */             susp.$blk = $blk;
/* 13472 */             susp.$loc = $loc;
/* 13473 */             susp.$gbl = $gbl;
/* 13474 */             susp.$exc = $exc;
/* 13475 */             susp.$err = $err;
/* 13476 */             susp.$postfinally = $postfinally;
/* 13477 */             susp.$filename = $filename;
/* 13478 */             susp.$lineno = $lineno;
/* 13479 */             susp.$colno = $colno;
/* 13480 */             susp.optional = susp.child.optional;
/* 13481 */             susp.$tmps = {
/* 13482 */                 "kwargs": kwargs,
/* 13483 */                 "self": self,
/* 13484 */                 "$kwa": $kwa,
/* 13485 */                 "$lattr875": $lattr875,
/* 13486 */                 "$str876": $str876,
/* 13487 */                 "$elem877": $elem877,
/* 13488 */                 "$elem878": $elem878,
/* 13489 */                 "$elem879": $elem879,
/* 13490 */                 "$loadtuple880": $loadtuple880,
/* 13491 */                 "$call881": $call881,
/* 13492 */                 "$lattr882": $lattr882,
/* 13493 */                 "$str883": $str883,
/* 13494 */                 "$call884": $call884,
/* 13495 */                 "$lattr885": $lattr885,
/* 13496 */                 "$str886": $str886,
/* 13497 */                 "$call887": $call887,
/* 13498 */                 "$lattr888": $lattr888,
/* 13499 */                 "$binop889": $binop889,
/* 13500 */                 "$lattr890": $lattr890,
/* 13501 */                 "$binop891": $binop891
/* 13502 */             };
/* 13503 */             return susp;
/* 13504 */         };
/* 13505 */         var $blk = 0,
/* 13506 */             $exc = [],
/* 13507 */             $loc = {},
/* 13508 */             $gbl = this,
/* 13509 */             $err = undefined,
/* 13510 */             $ret = undefined,
/* 13511 */             $postfinally = undefined,
/* 13512 */             $currLineNo = undefined,
/* 13513 */             $currColNo = undefined;
/* 13514 */         if ($scope873.$wakingSuspension !== undefined) {
/* 13515 */             $wakeFromSuspension();
/* 13516 */         } else {
/* 13517 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, true, false);
/* 13518 */             kwargs = new Sk.builtins['dict']($kwa);
/* 13519 */         }
/* 13520 */         while (true) {
/* 13521 */             try {
/* 13522 */                 switch ($blk) {
/* 13523 */                 case 0:
/* 13524 */                     /* --- codeobj entry --- */
/* 13525 */                     if (self === undefined) {
/* 13526 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13527 */                     }
/* 13528 */ 
/* 13529 */                     //
/* 13530 */                     // line 290:
/* 13531 */                     //         self.baseColour = kwargs.get('baseColour', (1,1,1))
/* 13532 */                     //         ^
/* 13533 */                     //
/* 13534 */                     $currLineNo = 290;
/* 13535 */                     $currColNo = 8;
/* 13536 */ 
/* 13537 */                     if (kwargs === undefined) {
/* 13538 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 13539 */                     }
/* 13540 */                     $ret = Sk.abstr.gattr(kwargs, 'get', true);
/* 13541 */                     $blk = 1; /* allowing case fallthrough */
/* 13542 */                 case 1:
/* 13543 */                     /* --- function return or resume suspension --- */
/* 13544 */                     if ($ret && $ret.$isSuspension) {
/* 13545 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 290, 26);
/* 13546 */                     }
/* 13547 */                     var $lattr875 = $ret;
/* 13548 */                     var $str876 = new Sk.builtins['str']('baseColour');
/* 13549 */                     var $elem877 = new Sk.builtin.int_(1);
/* 13550 */                     var $elem878 = new Sk.builtin.int_(1);
/* 13551 */                     var $elem879 = new Sk.builtin.int_(1);
/* 13552 */                     var $loadtuple880 = new Sk.builtins['tuple']([$elem877, $elem878, $elem879]);
/* 13553 */                     $ret;
/* 13554 */                     $ret = Sk.misceval.callsimOrSuspend($lattr875, $str876, $loadtuple880);
/* 13555 */                     $blk = 2; /* allowing case fallthrough */
/* 13556 */                 case 2:
/* 13557 */                     /* --- function return or resume suspension --- */
/* 13558 */                     if ($ret && $ret.$isSuspension) {
/* 13559 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 290, 26);
/* 13560 */                     }
/* 13561 */                     var $call881 = $ret;
/* 13562 */                     //
/* 13563 */                     // line 290:
/* 13564 */                     //         self.baseColour = kwargs.get('baseColour', (1,1,1))
/* 13565 */                     //                           ^
/* 13566 */                     //
/* 13567 */                     $currLineNo = 290;
/* 13568 */                     $currColNo = 26;
/* 13569 */ 
/* 13570 */                     if (self === undefined) {
/* 13571 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13572 */                     }
/* 13573 */                     $ret = Sk.abstr.sattr(self, 'baseColour', $call881, true);
/* 13574 */                     $blk = 3; /* allowing case fallthrough */
/* 13575 */                 case 3:
/* 13576 */                     /* --- function return or resume suspension --- */
/* 13577 */                     if ($ret && $ret.$isSuspension) {
/* 13578 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 290, 8);
/* 13579 */                     }
/* 13580 */                     //
/* 13581 */                     // line 291:
/* 13582 */                     //         self.specularCoefficient = kwargs.get('specularCoefficient', 0.2)
/* 13583 */                     //         ^
/* 13584 */                     //
/* 13585 */                     $currLineNo = 291;
/* 13586 */                     $currColNo = 8;
/* 13587 */ 
/* 13588 */                     if (kwargs === undefined) {
/* 13589 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 13590 */                     }
/* 13591 */                     $ret = Sk.abstr.gattr(kwargs, 'get', true);
/* 13592 */                     $blk = 4; /* allowing case fallthrough */
/* 13593 */                 case 4:
/* 13594 */                     /* --- function return or resume suspension --- */
/* 13595 */                     if ($ret && $ret.$isSuspension) {
/* 13596 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 291, 35);
/* 13597 */                     }
/* 13598 */                     var $lattr882 = $ret;
/* 13599 */                     var $str883 = new Sk.builtins['str']('specularCoefficient');
/* 13600 */                     $ret;
/* 13601 */                     $ret = Sk.misceval.callsimOrSuspend($lattr882, $str883, new Sk.builtin.float_(0.2));
/* 13602 */                     $blk = 5; /* allowing case fallthrough */
/* 13603 */                 case 5:
/* 13604 */                     /* --- function return or resume suspension --- */
/* 13605 */                     if ($ret && $ret.$isSuspension) {
/* 13606 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 291, 35);
/* 13607 */                     }
/* 13608 */                     var $call884 = $ret;
/* 13609 */                     //
/* 13610 */                     // line 291:
/* 13611 */                     //         self.specularCoefficient = kwargs.get('specularCoefficient', 0.2)
/* 13612 */                     //                                    ^
/* 13613 */                     //
/* 13614 */                     $currLineNo = 291;
/* 13615 */                     $currColNo = 35;
/* 13616 */ 
/* 13617 */                     if (self === undefined) {
/* 13618 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13619 */                     }
/* 13620 */                     $ret = Sk.abstr.sattr(self, 'specularCoefficient', $call884, true);
/* 13621 */                     $blk = 6; /* allowing case fallthrough */
/* 13622 */                 case 6:
/* 13623 */                     /* --- function return or resume suspension --- */
/* 13624 */                     if ($ret && $ret.$isSuspension) {
/* 13625 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 291, 8);
/* 13626 */                     }
/* 13627 */                     //
/* 13628 */                     // line 292:
/* 13629 */                     //         self.lambertCoefficient = kwargs.get('lambertCoefficient', 0.6)
/* 13630 */                     //         ^
/* 13631 */                     //
/* 13632 */                     $currLineNo = 292;
/* 13633 */                     $currColNo = 8;
/* 13634 */ 
/* 13635 */                     if (kwargs === undefined) {
/* 13636 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 13637 */                     }
/* 13638 */                     $ret = Sk.abstr.gattr(kwargs, 'get', true);
/* 13639 */                     $blk = 7; /* allowing case fallthrough */
/* 13640 */                 case 7:
/* 13641 */                     /* --- function return or resume suspension --- */
/* 13642 */                     if ($ret && $ret.$isSuspension) {
/* 13643 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 292, 34);
/* 13644 */                     }
/* 13645 */                     var $lattr885 = $ret;
/* 13646 */                     var $str886 = new Sk.builtins['str']('lambertCoefficient');
/* 13647 */                     $ret;
/* 13648 */                     $ret = Sk.misceval.callsimOrSuspend($lattr885, $str886, new Sk.builtin.float_(0.6));
/* 13649 */                     $blk = 8; /* allowing case fallthrough */
/* 13650 */                 case 8:
/* 13651 */                     /* --- function return or resume suspension --- */
/* 13652 */                     if ($ret && $ret.$isSuspension) {
/* 13653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 292, 34);
/* 13654 */                     }
/* 13655 */                     var $call887 = $ret;
/* 13656 */                     //
/* 13657 */                     // line 292:
/* 13658 */                     //         self.lambertCoefficient = kwargs.get('lambertCoefficient', 0.6)
/* 13659 */                     //                                   ^
/* 13660 */                     //
/* 13661 */                     $currLineNo = 292;
/* 13662 */                     $currColNo = 34;
/* 13663 */ 
/* 13664 */                     if (self === undefined) {
/* 13665 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13666 */                     }
/* 13667 */                     $ret = Sk.abstr.sattr(self, 'lambertCoefficient', $call887, true);
/* 13668 */                     $blk = 9; /* allowing case fallthrough */
/* 13669 */                 case 9:
/* 13670 */                     /* --- function return or resume suspension --- */
/* 13671 */                     if ($ret && $ret.$isSuspension) {
/* 13672 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 292, 8);
/* 13673 */                     }
/* 13674 */                     //
/* 13675 */                     // line 293:
/* 13676 */                     //         self.ambientCoefficient = 1.0 - self.specularCoefficient - self.lambertCoefficient
/* 13677 */                     //         ^
/* 13678 */                     //
/* 13679 */                     $currLineNo = 293;
/* 13680 */                     $currColNo = 8;
/* 13681 */ 
/* 13682 */                     if (self === undefined) {
/* 13683 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13684 */                     }
/* 13685 */                     $ret = Sk.abstr.gattr(self, 'specularCoefficient', true);
/* 13686 */                     $blk = 10; /* allowing case fallthrough */
/* 13687 */                 case 10:
/* 13688 */                     /* --- function return or resume suspension --- */
/* 13689 */                     if ($ret && $ret.$isSuspension) {
/* 13690 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 293, 40);
/* 13691 */                     }
/* 13692 */                     var $lattr888 = $ret;
/* 13693 */                     var $binop889 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), $lattr888, 'Sub');
/* 13694 */                     if (self === undefined) {
/* 13695 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13696 */                     }
/* 13697 */                     $ret = Sk.abstr.gattr(self, 'lambertCoefficient', true);
/* 13698 */                     $blk = 11; /* allowing case fallthrough */
/* 13699 */                 case 11:
/* 13700 */                     /* --- function return or resume suspension --- */
/* 13701 */                     if ($ret && $ret.$isSuspension) {
/* 13702 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 293, 67);
/* 13703 */                     }
/* 13704 */                     var $lattr890 = $ret;
/* 13705 */                     var $binop891 = Sk.abstr.numberBinOp($binop889, $lattr890, 'Sub');
/* 13706 */                     if (self === undefined) {
/* 13707 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13708 */                     }
/* 13709 */                     $ret = Sk.abstr.sattr(self, 'ambientCoefficient', $binop891, true);
/* 13710 */                     $blk = 12; /* allowing case fallthrough */
/* 13711 */                 case 12:
/* 13712 */                     /* --- function return or resume suspension --- */
/* 13713 */                     if ($ret && $ret.$isSuspension) {
/* 13714 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 293, 8);
/* 13715 */                     }
/* 13716 */                     return Sk.builtin.none.none$;
/* 13717 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13718 */                 }
/* 13719 */             } catch (err) {
/* 13720 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13721 */                     err = new Sk.builtin.ExternalError(err);
/* 13722 */                 }
/* 13723 */                 err.traceback.push({
/* 13724 */                     lineno: $currLineNo,
/* 13725 */                     colno: $currColNo,
/* 13726 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13727 */                 });
/* 13728 */                 if ($exc.length > 0) {
/* 13729 */                     $err = err;
/* 13730 */                     $blk = $exc.pop();
/* 13731 */                     continue;
/* 13732 */                 } else {
/* 13733 */                     throw err;
/* 13734 */                 }
/* 13735 */             }
/* 13736 */         }
/* 13737 */     });
/* 13738 */     var $scope893 = (function $baseColourAt894$(self, p) {
/* 13739 */         var p, self, self;
/* 13740 */         var $wakeFromSuspension = function() {
/* 13741 */             var susp = $scope893.$wakingSuspension;
/* 13742 */             delete $scope893.$wakingSuspension;
/* 13743 */             $blk = susp.$blk;
/* 13744 */             $loc = susp.$loc;
/* 13745 */             $gbl = susp.$gbl;
/* 13746 */             $exc = susp.$exc;
/* 13747 */             $err = susp.$err;
/* 13748 */             $postfinally = susp.$postfinally;
/* 13749 */             $currLineNo = susp.$lineno;
/* 13750 */             $currColNo = susp.$colno;
/* 13751 */             Sk.lastYield = Date.now();
/* 13752 */             p = susp.$tmps.p;
/* 13753 */             self = susp.$tmps.self;
/* 13754 */             try {
/* 13755 */                 $ret = susp.child.resume();
/* 13756 */             } catch (err) {
/* 13757 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13758 */                     err = new Sk.builtin.ExternalError(err);
/* 13759 */                 }
/* 13760 */                 err.traceback.push({
/* 13761 */                     lineno: $currLineNo,
/* 13762 */                     colno: $currColNo,
/* 13763 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13764 */                 });
/* 13765 */                 if ($exc.length > 0) {
/* 13766 */                     $err = err;
/* 13767 */                     $blk = $exc.pop();
/* 13768 */                 } else {
/* 13769 */                     throw err;
/* 13770 */                 }
/* 13771 */             }
/* 13772 */         };
/* 13773 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13774 */             var susp = new Sk.misceval.Suspension();
/* 13775 */             susp.child = $child;
/* 13776 */             susp.resume = function() {
/* 13777 */                 $scope893.$wakingSuspension = susp;
/* 13778 */                 return $scope893();
/* 13779 */             };
/* 13780 */             susp.data = susp.child.data;
/* 13781 */             susp.$blk = $blk;
/* 13782 */             susp.$loc = $loc;
/* 13783 */             susp.$gbl = $gbl;
/* 13784 */             susp.$exc = $exc;
/* 13785 */             susp.$err = $err;
/* 13786 */             susp.$postfinally = $postfinally;
/* 13787 */             susp.$filename = $filename;
/* 13788 */             susp.$lineno = $lineno;
/* 13789 */             susp.$colno = $colno;
/* 13790 */             susp.optional = susp.child.optional;
/* 13791 */             susp.$tmps = {
/* 13792 */                 "p": p,
/* 13793 */                 "self": self
/* 13794 */             };
/* 13795 */             return susp;
/* 13796 */         };
/* 13797 */         var $blk = 0,
/* 13798 */             $exc = [],
/* 13799 */             $loc = {},
/* 13800 */             $gbl = this,
/* 13801 */             $err = undefined,
/* 13802 */             $ret = undefined,
/* 13803 */             $postfinally = undefined,
/* 13804 */             $currLineNo = undefined,
/* 13805 */             $currColNo = undefined;
/* 13806 */         if ($scope893.$wakingSuspension !== undefined) {
/* 13807 */             $wakeFromSuspension();
/* 13808 */         } else {
/* 13809 */             Sk.builtin.pyCheckArgs("baseColourAt", arguments, 2, 2, false, false);
/* 13810 */         }
/* 13811 */         while (true) {
/* 13812 */             try {
/* 13813 */                 switch ($blk) {
/* 13814 */                 case 0:
/* 13815 */                     /* --- codeobj entry --- */
/* 13816 */                     if (self === undefined) {
/* 13817 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13818 */                     }
/* 13819 */                     if (p === undefined) {
/* 13820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 13821 */                     }
/* 13822 */ 
/* 13823 */                     //
/* 13824 */                     // line 296:
/* 13825 */                     //         return self.baseColour
/* 13826 */                     //         ^
/* 13827 */                     //
/* 13828 */                     $currLineNo = 296;
/* 13829 */                     $currColNo = 8;
/* 13830 */ 
/* 13831 */                     if (self === undefined) {
/* 13832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13833 */                     }
/* 13834 */                     $ret = Sk.abstr.gattr(self, 'baseColour', true);
/* 13835 */                     $blk = 1; /* allowing case fallthrough */
/* 13836 */                 case 1:
/* 13837 */                     /* --- function return or resume suspension --- */
/* 13838 */                     if ($ret && $ret.$isSuspension) {
/* 13839 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 296, 15);
/* 13840 */                     }
/* 13841 */                     var $lattr895 = $ret;
/* 13842 */                     return $lattr895;
/* 13843 */                     return Sk.builtin.none.none$;
/* 13844 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13845 */                 }
/* 13846 */             } catch (err) {
/* 13847 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13848 */                     err = new Sk.builtin.ExternalError(err);
/* 13849 */                 }
/* 13850 */                 err.traceback.push({
/* 13851 */                     lineno: $currLineNo,
/* 13852 */                     colno: $currColNo,
/* 13853 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13854 */                 });
/* 13855 */                 if ($exc.length > 0) {
/* 13856 */                     $err = err;
/* 13857 */                     $blk = $exc.pop();
/* 13858 */                     continue;
/* 13859 */                 } else {
/* 13860 */                     throw err;
/* 13861 */                 }
/* 13862 */             }
/* 13863 */         }
/* 13864 */     });
/* 13865 */     var $scope897 = (function $colourAt898$(self, scene, ray, p, normal) {
/* 13866 */         var b, c, contribution, lambertAmount, lightPoint, reflectedColour, reflectedRay; /* locals */
/* 13867 */         var b, b, b, c, c, c, c, c, c, c, c, contribution, contribution, contribution, lambertAmount, lambertAmount, lambertAmount, lambertAmount, lambertAmount, lambertAmount, lightPoint, lightPoint, normal, normal, normal, p, p, p, p, p, ray, ray, reflectedColour, reflectedColour, reflectedRay, reflectedRay, scene, scene, scene, self, self, self, self, self, self, self, self, $lattr899, $lattr905, $compareres906, $loadgbl909, $loadgbl909, $lattr910, $loadgbl909, $lattr910, $lattr911, $loadgbl909, $lattr910, $lattr911, $call912, $lattr914, $loadgbl916, $loadgbl916, $lattr917, $lattr919, $compareres920, $lattr923, $iter925, $lattr923, $call924, $iter925, $binop927, $binop927, $lattr928, $binop927, $lattr928, $call929, $binop927, $lattr928, $call929, $lattr930, $compareres932, $loadgbl936, $loadgbl938, $loadgbl938, $lattr939, $binop940, $lattr942, $compareres943, $loadgbl946, $loadgbl946, $lattr947;
/* 13868 */         var $wakeFromSuspension = function() {
/* 13869 */             var susp = $scope897.$wakingSuspension;
/* 13870 */             delete $scope897.$wakingSuspension;
/* 13871 */             $blk = susp.$blk;
/* 13872 */             $loc = susp.$loc;
/* 13873 */             $gbl = susp.$gbl;
/* 13874 */             $exc = susp.$exc;
/* 13875 */             $err = susp.$err;
/* 13876 */             $postfinally = susp.$postfinally;
/* 13877 */             $currLineNo = susp.$lineno;
/* 13878 */             $currColNo = susp.$colno;
/* 13879 */             Sk.lastYield = Date.now();
/* 13880 */             b = susp.$tmps.b;
/* 13881 */             c = susp.$tmps.c;
/* 13882 */             contribution = susp.$tmps.contribution;
/* 13883 */             lambertAmount = susp.$tmps.lambertAmount;
/* 13884 */             lightPoint = susp.$tmps.lightPoint;
/* 13885 */             normal = susp.$tmps.normal;
/* 13886 */             p = susp.$tmps.p;
/* 13887 */             ray = susp.$tmps.ray;
/* 13888 */             reflectedColour = susp.$tmps.reflectedColour;
/* 13889 */             reflectedRay = susp.$tmps.reflectedRay;
/* 13890 */             scene = susp.$tmps.scene;
/* 13891 */             self = susp.$tmps.self;
/* 13892 */             $lattr899 = susp.$tmps.$lattr899;
/* 13893 */             $lattr905 = susp.$tmps.$lattr905;
/* 13894 */             $compareres906 = susp.$tmps.$compareres906;
/* 13895 */             $loadgbl909 = susp.$tmps.$loadgbl909;
/* 13896 */             $lattr910 = susp.$tmps.$lattr910;
/* 13897 */             $lattr911 = susp.$tmps.$lattr911;
/* 13898 */             $call912 = susp.$tmps.$call912;
/* 13899 */             $lattr914 = susp.$tmps.$lattr914;
/* 13900 */             $loadgbl916 = susp.$tmps.$loadgbl916;
/* 13901 */             $lattr917 = susp.$tmps.$lattr917;
/* 13902 */             $lattr919 = susp.$tmps.$lattr919;
/* 13903 */             $compareres920 = susp.$tmps.$compareres920;
/* 13904 */             $lattr923 = susp.$tmps.$lattr923;
/* 13905 */             $iter925 = susp.$tmps.$iter925;
/* 13906 */             $call924 = susp.$tmps.$call924;
/* 13907 */             $binop927 = susp.$tmps.$binop927;
/* 13908 */             $lattr928 = susp.$tmps.$lattr928;
/* 13909 */             $call929 = susp.$tmps.$call929;
/* 13910 */             $lattr930 = susp.$tmps.$lattr930;
/* 13911 */             $compareres932 = susp.$tmps.$compareres932;
/* 13912 */             $loadgbl936 = susp.$tmps.$loadgbl936;
/* 13913 */             $loadgbl938 = susp.$tmps.$loadgbl938;
/* 13914 */             $lattr939 = susp.$tmps.$lattr939;
/* 13915 */             $binop940 = susp.$tmps.$binop940;
/* 13916 */             $lattr942 = susp.$tmps.$lattr942;
/* 13917 */             $compareres943 = susp.$tmps.$compareres943;
/* 13918 */             $loadgbl946 = susp.$tmps.$loadgbl946;
/* 13919 */             $lattr947 = susp.$tmps.$lattr947;
/* 13920 */             try {
/* 13921 */                 $ret = susp.child.resume();
/* 13922 */             } catch (err) {
/* 13923 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13924 */                     err = new Sk.builtin.ExternalError(err);
/* 13925 */                 }
/* 13926 */                 err.traceback.push({
/* 13927 */                     lineno: $currLineNo,
/* 13928 */                     colno: $currColNo,
/* 13929 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 13930 */                 });
/* 13931 */                 if ($exc.length > 0) {
/* 13932 */                     $err = err;
/* 13933 */                     $blk = $exc.pop();
/* 13934 */                 } else {
/* 13935 */                     throw err;
/* 13936 */                 }
/* 13937 */             }
/* 13938 */         };
/* 13939 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13940 */             var susp = new Sk.misceval.Suspension();
/* 13941 */             susp.child = $child;
/* 13942 */             susp.resume = function() {
/* 13943 */                 $scope897.$wakingSuspension = susp;
/* 13944 */                 return $scope897();
/* 13945 */             };
/* 13946 */             susp.data = susp.child.data;
/* 13947 */             susp.$blk = $blk;
/* 13948 */             susp.$loc = $loc;
/* 13949 */             susp.$gbl = $gbl;
/* 13950 */             susp.$exc = $exc;
/* 13951 */             susp.$err = $err;
/* 13952 */             susp.$postfinally = $postfinally;
/* 13953 */             susp.$filename = $filename;
/* 13954 */             susp.$lineno = $lineno;
/* 13955 */             susp.$colno = $colno;
/* 13956 */             susp.optional = susp.child.optional;
/* 13957 */             susp.$tmps = {
/* 13958 */                 "b": b,
/* 13959 */                 "c": c,
/* 13960 */                 "contribution": contribution,
/* 13961 */                 "lambertAmount": lambertAmount,
/* 13962 */                 "lightPoint": lightPoint,
/* 13963 */                 "normal": normal,
/* 13964 */                 "p": p,
/* 13965 */                 "ray": ray,
/* 13966 */                 "reflectedColour": reflectedColour,
/* 13967 */                 "reflectedRay": reflectedRay,
/* 13968 */                 "scene": scene,
/* 13969 */                 "self": self,
/* 13970 */                 "$lattr899": $lattr899,
/* 13971 */                 "$lattr905": $lattr905,
/* 13972 */                 "$compareres906": $compareres906,
/* 13973 */                 "$loadgbl909": $loadgbl909,
/* 13974 */                 "$lattr910": $lattr910,
/* 13975 */                 "$lattr911": $lattr911,
/* 13976 */                 "$call912": $call912,
/* 13977 */                 "$lattr914": $lattr914,
/* 13978 */                 "$loadgbl916": $loadgbl916,
/* 13979 */                 "$lattr917": $lattr917,
/* 13980 */                 "$lattr919": $lattr919,
/* 13981 */                 "$compareres920": $compareres920,
/* 13982 */                 "$lattr923": $lattr923,
/* 13983 */                 "$iter925": $iter925,
/* 13984 */                 "$call924": $call924,
/* 13985 */                 "$binop927": $binop927,
/* 13986 */                 "$lattr928": $lattr928,
/* 13987 */                 "$call929": $call929,
/* 13988 */                 "$lattr930": $lattr930,
/* 13989 */                 "$compareres932": $compareres932,
/* 13990 */                 "$loadgbl936": $loadgbl936,
/* 13991 */                 "$loadgbl938": $loadgbl938,
/* 13992 */                 "$lattr939": $lattr939,
/* 13993 */                 "$binop940": $binop940,
/* 13994 */                 "$lattr942": $lattr942,
/* 13995 */                 "$compareres943": $compareres943,
/* 13996 */                 "$loadgbl946": $loadgbl946,
/* 13997 */                 "$lattr947": $lattr947
/* 13998 */             };
/* 13999 */             return susp;
/* 14000 */         };
/* 14001 */         var $blk = 0,
/* 14002 */             $exc = [],
/* 14003 */             $loc = {},
/* 14004 */             $gbl = this,
/* 14005 */             $err = undefined,
/* 14006 */             $ret = undefined,
/* 14007 */             $postfinally = undefined,
/* 14008 */             $currLineNo = undefined,
/* 14009 */             $currColNo = undefined;
/* 14010 */         if ($scope897.$wakingSuspension !== undefined) {
/* 14011 */             $wakeFromSuspension();
/* 14012 */         } else {
/* 14013 */             Sk.builtin.pyCheckArgs("colourAt", arguments, 5, 5, false, false);
/* 14014 */         }
/* 14015 */         while (true) {
/* 14016 */             try {
/* 14017 */                 switch ($blk) {
/* 14018 */                 case 0:
/* 14019 */                     /* --- codeobj entry --- */
/* 14020 */                     if (self === undefined) {
/* 14021 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14022 */                     }
/* 14023 */                     if (scene === undefined) {
/* 14024 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scene\' referenced before assignment');
/* 14025 */                     }
/* 14026 */                     if (ray === undefined) {
/* 14027 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 14028 */                     }
/* 14029 */                     if (p === undefined) {
/* 14030 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 14031 */                     }
/* 14032 */                     if (normal === undefined) {
/* 14033 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/* 14034 */                     }
/* 14035 */ 
/* 14036 */                     //
/* 14037 */                     // line 299:
/* 14038 */                     //         b = self.baseColourAt(p)
/* 14039 */                     //         ^
/* 14040 */                     //
/* 14041 */                     $currLineNo = 299;
/* 14042 */                     $currColNo = 8;
/* 14043 */ 
/* 14044 */                     if (self === undefined) {
/* 14045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14046 */                     }
/* 14047 */                     $ret = Sk.abstr.gattr(self, 'baseColourAt', true);
/* 14048 */                     $blk = 1; /* allowing case fallthrough */
/* 14049 */                 case 1:
/* 14050 */                     /* --- function return or resume suspension --- */
/* 14051 */                     if ($ret && $ret.$isSuspension) {
/* 14052 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 299, 12);
/* 14053 */                     }
/* 14054 */                     var $lattr899 = $ret;
/* 14055 */                     if (p === undefined) {
/* 14056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 14057 */                     }
/* 14058 */                     $ret;
/* 14059 */                     $ret = Sk.misceval.callsimOrSuspend($lattr899, p);
/* 14060 */                     $blk = 2; /* allowing case fallthrough */
/* 14061 */                 case 2:
/* 14062 */                     /* --- function return or resume suspension --- */
/* 14063 */                     if ($ret && $ret.$isSuspension) {
/* 14064 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 299, 12);
/* 14065 */                     }
/* 14066 */                     var $call900 = $ret;
/* 14067 */                     //
/* 14068 */                     // line 299:
/* 14069 */                     //         b = self.baseColourAt(p)
/* 14070 */                     //             ^
/* 14071 */                     //
/* 14072 */                     $currLineNo = 299;
/* 14073 */                     $currColNo = 12;
/* 14074 */ 
/* 14075 */                     b = $call900;
/* 14076 */                     //
/* 14077 */                     // line 301:
/* 14078 */                     //         c = (0,0,0)
/* 14079 */                     //         ^
/* 14080 */                     //
/* 14081 */                     $currLineNo = 301;
/* 14082 */                     $currColNo = 8;
/* 14083 */ 
/* 14084 */                     var $elem901 = new Sk.builtin.int_(0);
/* 14085 */                     var $elem902 = new Sk.builtin.int_(0);
/* 14086 */                     var $elem903 = new Sk.builtin.int_(0);
/* 14087 */                     var $loadtuple904 = new Sk.builtins['tuple']([$elem901, $elem902, $elem903]);
/* 14088 */                     c = $loadtuple904;
/* 14089 */                     //
/* 14090 */                     // line 302:
/* 14091 */                     //         if self.specularCoefficient > 0:
/* 14092 */                     //         ^
/* 14093 */                     //
/* 14094 */                     $currLineNo = 302;
/* 14095 */                     $currColNo = 8;
/* 14096 */ 
/* 14097 */                     if (self === undefined) {
/* 14098 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14099 */                     }
/* 14100 */                     $ret = Sk.abstr.gattr(self, 'specularCoefficient', true);
/* 14101 */                     $blk = 4; /* allowing case fallthrough */
/* 14102 */                 case 4:
/* 14103 */                     /* --- function return or resume suspension --- */
/* 14104 */                     if ($ret && $ret.$isSuspension) {
/* 14105 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 302, 11);
/* 14106 */                     }
/* 14107 */                     var $lattr905 = $ret;
/* 14108 */                     var $compareres906 = null;
/* 14109 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr905, new Sk.builtin.int_(0), 'Gt', true));
/* 14110 */                     $blk = 6; /* allowing case fallthrough */
/* 14111 */                 case 6:
/* 14112 */                     /* --- function return or resume suspension --- */
/* 14113 */                     if ($ret && $ret.$isSuspension) {
/* 14114 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 302, 11);
/* 14115 */                     }
/* 14116 */                     $compareres906 = $ret;
/* 14117 */                     var $jfalse907 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14118 */                     if ($jfalse907) { /*test failed */
/* 14119 */                         $blk = 5;
/* 14120 */                         continue;
/* 14121 */                     }
/* 14122 */                     $blk = 5; /* allowing case fallthrough */
/* 14123 */                 case 5:
/* 14124 */                     /* --- done --- */
/* 14125 */                     var $jfalse908 = ($compareres906 === false || !Sk.misceval.isTrue($compareres906));
/* 14126 */                     if ($jfalse908) { /*test failed */
/* 14127 */                         $blk = 3;
/* 14128 */                         continue;
/* 14129 */                     }
/* 14130 */                     //
/* 14131 */                     // line 303:
/* 14132 */                     //             reflectedRay = Ray(p, ray.vector.reflectThrough(normal))
/* 14133 */                     //             ^
/* 14134 */                     //
/* 14135 */                     $currLineNo = 303;
/* 14136 */                     $currColNo = 12;
/* 14137 */ 
/* 14138 */                     var $loadgbl909 = Sk.misceval.loadname('Ray', $gbl);
/* 14139 */                     if (p === undefined) {
/* 14140 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 14141 */                     }
/* 14142 */                     if (ray === undefined) {
/* 14143 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ray\' referenced before assignment');
/* 14144 */                     }
/* 14145 */                     $ret = Sk.abstr.gattr(ray, 'vector', true);
/* 14146 */                     $blk = 7; /* allowing case fallthrough */
/* 14147 */                 case 7:
/* 14148 */                     /* --- function return or resume suspension --- */
/* 14149 */                     if ($ret && $ret.$isSuspension) {
/* 14150 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 303, 34);
/* 14151 */                     }
/* 14152 */                     var $lattr910 = $ret;
/* 14153 */                     $ret = Sk.abstr.gattr($lattr910, 'reflectThrough', true);
/* 14154 */                     $blk = 8; /* allowing case fallthrough */
/* 14155 */                 case 8:
/* 14156 */                     /* --- function return or resume suspension --- */
/* 14157 */                     if ($ret && $ret.$isSuspension) {
/* 14158 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 303, 34);
/* 14159 */                     }
/* 14160 */                     var $lattr911 = $ret;
/* 14161 */                     if (normal === undefined) {
/* 14162 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/* 14163 */                     }
/* 14164 */                     $ret;
/* 14165 */                     $ret = Sk.misceval.callsimOrSuspend($lattr911, normal);
/* 14166 */                     $blk = 9; /* allowing case fallthrough */
/* 14167 */                 case 9:
/* 14168 */                     /* --- function return or resume suspension --- */
/* 14169 */                     if ($ret && $ret.$isSuspension) {
/* 14170 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 303, 34);
/* 14171 */                     }
/* 14172 */                     var $call912 = $ret;
/* 14173 */                     //
/* 14174 */                     // line 303:
/* 14175 */                     //             reflectedRay = Ray(p, ray.vector.reflectThrough(normal))
/* 14176 */                     //                                   ^
/* 14177 */                     //
/* 14178 */                     $currLineNo = 303;
/* 14179 */                     $currColNo = 34;
/* 14180 */ 
/* 14181 */                     $ret;
/* 14182 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl909, p, $call912);
/* 14183 */                     $blk = 10; /* allowing case fallthrough */
/* 14184 */                 case 10:
/* 14185 */                     /* --- function return or resume suspension --- */
/* 14186 */                     if ($ret && $ret.$isSuspension) {
/* 14187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 303, 27);
/* 14188 */                     }
/* 14189 */                     var $call913 = $ret;
/* 14190 */                     //
/* 14191 */                     // line 303:
/* 14192 */                     //             reflectedRay = Ray(p, ray.vector.reflectThrough(normal))
/* 14193 */                     //                            ^
/* 14194 */                     //
/* 14195 */                     $currLineNo = 303;
/* 14196 */                     $currColNo = 27;
/* 14197 */ 
/* 14198 */                     reflectedRay = $call913;
/* 14199 */                     //
/* 14200 */                     // line 305:
/* 14201 */                     //             reflectedColour = scene.rayColour(reflectedRay)
/* 14202 */                     //             ^
/* 14203 */                     //
/* 14204 */                     $currLineNo = 305;
/* 14205 */                     $currColNo = 12;
/* 14206 */ 
/* 14207 */                     if (scene === undefined) {
/* 14208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scene\' referenced before assignment');
/* 14209 */                     }
/* 14210 */                     $ret = Sk.abstr.gattr(scene, 'rayColour', true);
/* 14211 */                     $blk = 11; /* allowing case fallthrough */
/* 14212 */                 case 11:
/* 14213 */                     /* --- function return or resume suspension --- */
/* 14214 */                     if ($ret && $ret.$isSuspension) {
/* 14215 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 305, 30);
/* 14216 */                     }
/* 14217 */                     var $lattr914 = $ret;
/* 14218 */                     if (reflectedRay === undefined) {
/* 14219 */                         throw new Sk.builtin.UnboundLocalError('local variable \'reflectedRay\' referenced before assignment');
/* 14220 */                     }
/* 14221 */                     $ret;
/* 14222 */                     $ret = Sk.misceval.callsimOrSuspend($lattr914, reflectedRay);
/* 14223 */                     $blk = 12; /* allowing case fallthrough */
/* 14224 */                 case 12:
/* 14225 */                     /* --- function return or resume suspension --- */
/* 14226 */                     if ($ret && $ret.$isSuspension) {
/* 14227 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 305, 30);
/* 14228 */                     }
/* 14229 */                     var $call915 = $ret;
/* 14230 */                     //
/* 14231 */                     // line 305:
/* 14232 */                     //             reflectedColour = scene.rayColour(reflectedRay)
/* 14233 */                     //                               ^
/* 14234 */                     //
/* 14235 */                     $currLineNo = 305;
/* 14236 */                     $currColNo = 30;
/* 14237 */ 
/* 14238 */                     reflectedColour = $call915;
/* 14239 */                     //
/* 14240 */                     // line 306:
/* 14241 */                     //             c = addColours(c, self.specularCoefficient, reflectedColour)
/* 14242 */                     //             ^
/* 14243 */                     //
/* 14244 */                     $currLineNo = 306;
/* 14245 */                     $currColNo = 12;
/* 14246 */ 
/* 14247 */                     var $loadgbl916 = Sk.misceval.loadname('addColours', $gbl);
/* 14248 */                     if (c === undefined) {
/* 14249 */                         throw new Sk.builtin.UnboundLocalError('local variable \'c\' referenced before assignment');
/* 14250 */                     }
/* 14251 */                     if (self === undefined) {
/* 14252 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14253 */                     }
/* 14254 */                     $ret = Sk.abstr.gattr(self, 'specularCoefficient', true);
/* 14255 */                     $blk = 13; /* allowing case fallthrough */
/* 14256 */                 case 13:
/* 14257 */                     /* --- function return or resume suspension --- */
/* 14258 */                     if ($ret && $ret.$isSuspension) {
/* 14259 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 306, 30);
/* 14260 */                     }
/* 14261 */                     var $lattr917 = $ret;
/* 14262 */                     if (reflectedColour === undefined) {
/* 14263 */                         throw new Sk.builtin.UnboundLocalError('local variable \'reflectedColour\' referenced before assignment');
/* 14264 */                     }
/* 14265 */                     $ret;
/* 14266 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl916, c, $lattr917, reflectedColour);
/* 14267 */                     $blk = 14; /* allowing case fallthrough */
/* 14268 */                 case 14:
/* 14269 */                     /* --- function return or resume suspension --- */
/* 14270 */                     if ($ret && $ret.$isSuspension) {
/* 14271 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 306, 16);
/* 14272 */                     }
/* 14273 */                     var $call918 = $ret;
/* 14274 */                     //
/* 14275 */                     // line 306:
/* 14276 */                     //             c = addColours(c, self.specularCoefficient, reflectedColour)
/* 14277 */                     //                 ^
/* 14278 */                     //
/* 14279 */                     $currLineNo = 306;
/* 14280 */                     $currColNo = 16;
/* 14281 */ 
/* 14282 */                     c = $call918;
/* 14283 */                     $blk = 3; /* allowing case fallthrough */
/* 14284 */                 case 3:
/* 14285 */                     /* --- end of if --- */
/* 14286 */                     //
/* 14287 */                     // line 308:
/* 14288 */                     //         if self.lambertCoefficient > 0:
/* 14289 */                     //         ^
/* 14290 */                     //
/* 14291 */                     $currLineNo = 308;
/* 14292 */                     $currColNo = 8;
/* 14293 */ 
/* 14294 */                     if (self === undefined) {
/* 14295 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14296 */                     }
/* 14297 */                     $ret = Sk.abstr.gattr(self, 'lambertCoefficient', true);
/* 14298 */                     $blk = 16; /* allowing case fallthrough */
/* 14299 */                 case 16:
/* 14300 */                     /* --- function return or resume suspension --- */
/* 14301 */                     if ($ret && $ret.$isSuspension) {
/* 14302 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 308, 11);
/* 14303 */                     }
/* 14304 */                     var $lattr919 = $ret;
/* 14305 */                     var $compareres920 = null;
/* 14306 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr919, new Sk.builtin.int_(0), 'Gt', true));
/* 14307 */                     $blk = 18; /* allowing case fallthrough */
/* 14308 */                 case 18:
/* 14309 */                     /* --- function return or resume suspension --- */
/* 14310 */                     if ($ret && $ret.$isSuspension) {
/* 14311 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 308, 11);
/* 14312 */                     }
/* 14313 */                     $compareres920 = $ret;
/* 14314 */                     var $jfalse921 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14315 */                     if ($jfalse921) { /*test failed */
/* 14316 */                         $blk = 17;
/* 14317 */                         continue;
/* 14318 */                     }
/* 14319 */                     $blk = 17; /* allowing case fallthrough */
/* 14320 */                 case 17:
/* 14321 */                     /* --- done --- */
/* 14322 */                     var $jfalse922 = ($compareres920 === false || !Sk.misceval.isTrue($compareres920));
/* 14323 */                     if ($jfalse922) { /*test failed */
/* 14324 */                         $blk = 15;
/* 14325 */                         continue;
/* 14326 */                     }
/* 14327 */                     //
/* 14328 */                     // line 309:
/* 14329 */                     //             lambertAmount = 0
/* 14330 */                     //             ^
/* 14331 */                     //
/* 14332 */                     $currLineNo = 309;
/* 14333 */                     $currColNo = 12;
/* 14334 */ 
/* 14335 */                     lambertAmount = new Sk.builtin.int_(0);
/* 14336 */                     //
/* 14337 */                     // line 310:
/* 14338 */                     //             for lightPoint in scene.visibleLights(p):
/* 14339 */                     //             ^
/* 14340 */                     //
/* 14341 */                     $currLineNo = 310;
/* 14342 */                     $currColNo = 12;
/* 14343 */ 
/* 14344 */                     if (scene === undefined) {
/* 14345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'scene\' referenced before assignment');
/* 14346 */                     }
/* 14347 */                     $ret = Sk.abstr.gattr(scene, 'visibleLights', true);
/* 14348 */                     $blk = 22; /* allowing case fallthrough */
/* 14349 */                 case 22:
/* 14350 */                     /* --- function return or resume suspension --- */
/* 14351 */                     if ($ret && $ret.$isSuspension) {
/* 14352 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 310, 30);
/* 14353 */                     }
/* 14354 */                     var $lattr923 = $ret;
/* 14355 */                     if (p === undefined) {
/* 14356 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 14357 */                     }
/* 14358 */                     $ret;
/* 14359 */                     $ret = Sk.misceval.callsimOrSuspend($lattr923, p);
/* 14360 */                     $blk = 23; /* allowing case fallthrough */
/* 14361 */                 case 23:
/* 14362 */                     /* --- function return or resume suspension --- */
/* 14363 */                     if ($ret && $ret.$isSuspension) {
/* 14364 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 310, 30);
/* 14365 */                     }
/* 14366 */                     var $call924 = $ret;
/* 14367 */                     //
/* 14368 */                     // line 310:
/* 14369 */                     //             for lightPoint in scene.visibleLights(p):
/* 14370 */                     //                               ^
/* 14371 */                     //
/* 14372 */                     $currLineNo = 310;
/* 14373 */                     $currColNo = 30;
/* 14374 */ 
/* 14375 */                     var $iter925 = Sk.abstr.iter($call924);
/* 14376 */                     $blk = 19; /* allowing case fallthrough */
/* 14377 */                 case 19:
/* 14378 */                     /* --- for start --- */
/* 14379 */                     $ret = Sk.abstr.iternext($iter925, true);
/* 14380 */                     $blk = 24; /* allowing case fallthrough */
/* 14381 */                 case 24:
/* 14382 */                     /* --- function return or resume suspension --- */
/* 14383 */                     if ($ret && $ret.$isSuspension) {
/* 14384 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 310, 12);
/* 14385 */                     }
/* 14386 */                     var $next926 = $ret;
/* 14387 */                     if ($next926 === undefined) {
/* 14388 */                         $blk = 20;
/* 14389 */                         continue;
/* 14390 */                     }
/* 14391 */                     lightPoint = $next926;
/* 14392 */                     //
/* 14393 */                     // line 311:
/* 14394 */                     //                 contribution = (lightPoint - p).normalized().dot(normal)
/* 14395 */                     //                 ^
/* 14396 */                     //
/* 14397 */                     $currLineNo = 311;
/* 14398 */                     $currColNo = 16;
/* 14399 */ 
/* 14400 */                     if (lightPoint === undefined) {
/* 14401 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lightPoint\' referenced before assignment');
/* 14402 */                     }
/* 14403 */                     if (p === undefined) {
/* 14404 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 14405 */                     }
/* 14406 */                     var $binop927 = Sk.abstr.numberBinOp(lightPoint, p, 'Sub');
/* 14407 */                     $ret = Sk.abstr.gattr($binop927, 'normalized', true);
/* 14408 */                     $blk = 25; /* allowing case fallthrough */
/* 14409 */                 case 25:
/* 14410 */                     /* --- function return or resume suspension --- */
/* 14411 */                     if ($ret && $ret.$isSuspension) {
/* 14412 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 311, 32);
/* 14413 */                     }
/* 14414 */                     var $lattr928 = $ret;
/* 14415 */                     $ret;
/* 14416 */                     $ret = Sk.misceval.callsimOrSuspend($lattr928);
/* 14417 */                     $blk = 26; /* allowing case fallthrough */
/* 14418 */                 case 26:
/* 14419 */                     /* --- function return or resume suspension --- */
/* 14420 */                     if ($ret && $ret.$isSuspension) {
/* 14421 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 311, 32);
/* 14422 */                     }
/* 14423 */                     var $call929 = $ret;
/* 14424 */                     //
/* 14425 */                     // line 311:
/* 14426 */                     //                 contribution = (lightPoint - p).normalized().dot(normal)
/* 14427 */                     //                                 ^
/* 14428 */                     //
/* 14429 */                     $currLineNo = 311;
/* 14430 */                     $currColNo = 32;
/* 14431 */ 
/* 14432 */                     $ret = Sk.abstr.gattr($call929, 'dot', true);
/* 14433 */                     $blk = 27; /* allowing case fallthrough */
/* 14434 */                 case 27:
/* 14435 */                     /* --- function return or resume suspension --- */
/* 14436 */                     if ($ret && $ret.$isSuspension) {
/* 14437 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 311, 32);
/* 14438 */                     }
/* 14439 */                     var $lattr930 = $ret;
/* 14440 */                     if (normal === undefined) {
/* 14441 */                         throw new Sk.builtin.UnboundLocalError('local variable \'normal\' referenced before assignment');
/* 14442 */                     }
/* 14443 */                     $ret;
/* 14444 */                     $ret = Sk.misceval.callsimOrSuspend($lattr930, normal);
/* 14445 */                     $blk = 28; /* allowing case fallthrough */
/* 14446 */                 case 28:
/* 14447 */                     /* --- function return or resume suspension --- */
/* 14448 */                     if ($ret && $ret.$isSuspension) {
/* 14449 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 311, 32);
/* 14450 */                     }
/* 14451 */                     var $call931 = $ret;
/* 14452 */                     //
/* 14453 */                     // line 311:
/* 14454 */                     //                 contribution = (lightPoint - p).normalized().dot(normal)
/* 14455 */                     //                                 ^
/* 14456 */                     //
/* 14457 */                     $currLineNo = 311;
/* 14458 */                     $currColNo = 32;
/* 14459 */ 
/* 14460 */                     contribution = $call931;
/* 14461 */                     //
/* 14462 */                     // line 312:
/* 14463 */                     //                 if contribution > 0:
/* 14464 */                     //                 ^
/* 14465 */                     //
/* 14466 */                     $currLineNo = 312;
/* 14467 */                     $currColNo = 16;
/* 14468 */ 
/* 14469 */                     if (contribution === undefined) {
/* 14470 */                         throw new Sk.builtin.UnboundLocalError('local variable \'contribution\' referenced before assignment');
/* 14471 */                     }
/* 14472 */                     var $compareres932 = null;
/* 14473 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(contribution, new Sk.builtin.int_(0), 'Gt', true));
/* 14474 */                     $blk = 31; /* allowing case fallthrough */
/* 14475 */                 case 31:
/* 14476 */                     /* --- function return or resume suspension --- */
/* 14477 */                     if ($ret && $ret.$isSuspension) {
/* 14478 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 312, 19);
/* 14479 */                     }
/* 14480 */                     $compareres932 = $ret;
/* 14481 */                     var $jfalse933 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14482 */                     if ($jfalse933) { /*test failed */
/* 14483 */                         $blk = 30;
/* 14484 */                         continue;
/* 14485 */                     }
/* 14486 */                     $blk = 30; /* allowing case fallthrough */
/* 14487 */                 case 30:
/* 14488 */                     /* --- done --- */
/* 14489 */                     var $jfalse934 = ($compareres932 === false || !Sk.misceval.isTrue($compareres932));
/* 14490 */                     if ($jfalse934) { /*test failed */
/* 14491 */                         $blk = 29;
/* 14492 */                         continue;
/* 14493 */                     }
/* 14494 */                     //
/* 14495 */                     // line 313:
/* 14496 */                     //                     lambertAmount = lambertAmount + contribution
/* 14497 */                     //                     ^
/* 14498 */                     //
/* 14499 */                     $currLineNo = 313;
/* 14500 */                     $currColNo = 20;
/* 14501 */ 
/* 14502 */                     if (lambertAmount === undefined) {
/* 14503 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lambertAmount\' referenced before assignment');
/* 14504 */                     }
/* 14505 */                     if (contribution === undefined) {
/* 14506 */                         throw new Sk.builtin.UnboundLocalError('local variable \'contribution\' referenced before assignment');
/* 14507 */                     }
/* 14508 */                     var $binop935 = Sk.abstr.numberBinOp(lambertAmount, contribution, 'Add');
/* 14509 */                     lambertAmount = $binop935;
/* 14510 */                     $blk = 29; /* allowing case fallthrough */
/* 14511 */                 case 29:
/* 14512 */                     /* --- end of if --- */
/* 14513 */                     $blk = 19; /* jump */
/* 14514 */                     continue;
/* 14515 */                 case 15:
/* 14516 */                     /* --- end of if --- */
/* 14517 */                     //
/* 14518 */                     // line 317:
/* 14519 */                     //         if self.ambientCoefficient > 0:
/* 14520 */                     //         ^
/* 14521 */                     //
/* 14522 */                     $currLineNo = 317;
/* 14523 */                     $currColNo = 8;
/* 14524 */ 
/* 14525 */                     if (self === undefined) {
/* 14526 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14527 */                     }
/* 14528 */                     $ret = Sk.abstr.gattr(self, 'ambientCoefficient', true);
/* 14529 */                     $blk = 36; /* allowing case fallthrough */
/* 14530 */                 case 36:
/* 14531 */                     /* --- function return or resume suspension --- */
/* 14532 */                     if ($ret && $ret.$isSuspension) {
/* 14533 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 317, 11);
/* 14534 */                     }
/* 14535 */                     var $lattr942 = $ret;
/* 14536 */                     var $compareres943 = null;
/* 14537 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr942, new Sk.builtin.int_(0), 'Gt', true));
/* 14538 */                     $blk = 38; /* allowing case fallthrough */
/* 14539 */                 case 38:
/* 14540 */                     /* --- function return or resume suspension --- */
/* 14541 */                     if ($ret && $ret.$isSuspension) {
/* 14542 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 317, 11);
/* 14543 */                     }
/* 14544 */                     $compareres943 = $ret;
/* 14545 */                     var $jfalse944 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14546 */                     if ($jfalse944) { /*test failed */
/* 14547 */                         $blk = 37;
/* 14548 */                         continue;
/* 14549 */                     }
/* 14550 */                     $blk = 37; /* allowing case fallthrough */
/* 14551 */                 case 37:
/* 14552 */                     /* --- done --- */
/* 14553 */                     var $jfalse945 = ($compareres943 === false || !Sk.misceval.isTrue($compareres943));
/* 14554 */                     if ($jfalse945) { /*test failed */
/* 14555 */                         $blk = 35;
/* 14556 */                         continue;
/* 14557 */                     }
/* 14558 */                     //
/* 14559 */                     // line 318:
/* 14560 */                     //             c = addColours(c, self.ambientCoefficient, b)
/* 14561 */                     //             ^
/* 14562 */                     //
/* 14563 */                     $currLineNo = 318;
/* 14564 */                     $currColNo = 12;
/* 14565 */ 
/* 14566 */                     var $loadgbl946 = Sk.misceval.loadname('addColours', $gbl);
/* 14567 */                     if (c === undefined) {
/* 14568 */                         throw new Sk.builtin.UnboundLocalError('local variable \'c\' referenced before assignment');
/* 14569 */                     }
/* 14570 */                     if (self === undefined) {
/* 14571 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14572 */                     }
/* 14573 */                     $ret = Sk.abstr.gattr(self, 'ambientCoefficient', true);
/* 14574 */                     $blk = 39; /* allowing case fallthrough */
/* 14575 */                 case 39:
/* 14576 */                     /* --- function return or resume suspension --- */
/* 14577 */                     if ($ret && $ret.$isSuspension) {
/* 14578 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 318, 30);
/* 14579 */                     }
/* 14580 */                     var $lattr947 = $ret;
/* 14581 */                     if (b === undefined) {
/* 14582 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 14583 */                     }
/* 14584 */                     $ret;
/* 14585 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl946, c, $lattr947, b);
/* 14586 */                     $blk = 40; /* allowing case fallthrough */
/* 14587 */                 case 40:
/* 14588 */                     /* --- function return or resume suspension --- */
/* 14589 */                     if ($ret && $ret.$isSuspension) {
/* 14590 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 318, 16);
/* 14591 */                     }
/* 14592 */                     var $call948 = $ret;
/* 14593 */                     //
/* 14594 */                     // line 318:
/* 14595 */                     //             c = addColours(c, self.ambientCoefficient, b)
/* 14596 */                     //                 ^
/* 14597 */                     //
/* 14598 */                     $currLineNo = 318;
/* 14599 */                     $currColNo = 16;
/* 14600 */ 
/* 14601 */                     c = $call948;
/* 14602 */                     $blk = 35; /* allowing case fallthrough */
/* 14603 */                 case 35:
/* 14604 */                     /* --- end of if --- */
/* 14605 */                     //
/* 14606 */                     // line 320:
/* 14607 */                     //         return c
/* 14608 */                     //         ^
/* 14609 */                     //
/* 14610 */                     $currLineNo = 320;
/* 14611 */                     $currColNo = 8;
/* 14612 */ 
/* 14613 */                     if (c === undefined) {
/* 14614 */                         throw new Sk.builtin.UnboundLocalError('local variable \'c\' referenced before assignment');
/* 14615 */                     }
/* 14616 */                     return c;
/* 14617 */                     return Sk.builtin.none.none$;
/* 14618 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 14619 */                 case 20:
/* 14620 */                     /* --- for cleanup --- */
/* 14621 */                     $blk = 21; /* allowing case fallthrough */
/* 14622 */                 case 21:
/* 14623 */                     /* --- for end --- */
/* 14624 */                     //
/* 14625 */                     // line 314:
/* 14626 */                     //             lambertAmount = min(1,lambertAmount)
/* 14627 */                     //             ^
/* 14628 */                     //
/* 14629 */                     $currLineNo = 314;
/* 14630 */                     $currColNo = 12;
/* 14631 */ 
/* 14632 */                     var $loadgbl936 = Sk.misceval.loadname('min', $gbl);
/* 14633 */                     if (lambertAmount === undefined) {
/* 14634 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lambertAmount\' referenced before assignment');
/* 14635 */                     }
/* 14636 */                     $ret;
/* 14637 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl936, new Sk.builtin.int_(1), lambertAmount);
/* 14638 */                     $blk = 32; /* allowing case fallthrough */
/* 14639 */                 case 32:
/* 14640 */                     /* --- function return or resume suspension --- */
/* 14641 */                     if ($ret && $ret.$isSuspension) {
/* 14642 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 314, 28);
/* 14643 */                     }
/* 14644 */                     var $call937 = $ret;
/* 14645 */                     //
/* 14646 */                     // line 314:
/* 14647 */                     //             lambertAmount = min(1,lambertAmount)
/* 14648 */                     //                             ^
/* 14649 */                     //
/* 14650 */                     $currLineNo = 314;
/* 14651 */                     $currColNo = 28;
/* 14652 */ 
/* 14653 */                     lambertAmount = $call937;
/* 14654 */                     //
/* 14655 */                     // line 315:
/* 14656 */                     //             c = addColours(c, self.lambertCoefficient * lambertAmount, b)
/* 14657 */                     //             ^
/* 14658 */                     //
/* 14659 */                     $currLineNo = 315;
/* 14660 */                     $currColNo = 12;
/* 14661 */ 
/* 14662 */                     var $loadgbl938 = Sk.misceval.loadname('addColours', $gbl);
/* 14663 */                     if (c === undefined) {
/* 14664 */                         throw new Sk.builtin.UnboundLocalError('local variable \'c\' referenced before assignment');
/* 14665 */                     }
/* 14666 */                     if (self === undefined) {
/* 14667 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14668 */                     }
/* 14669 */                     $ret = Sk.abstr.gattr(self, 'lambertCoefficient', true);
/* 14670 */                     $blk = 33; /* allowing case fallthrough */
/* 14671 */                 case 33:
/* 14672 */                     /* --- function return or resume suspension --- */
/* 14673 */                     if ($ret && $ret.$isSuspension) {
/* 14674 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 315, 30);
/* 14675 */                     }
/* 14676 */                     var $lattr939 = $ret;
/* 14677 */                     if (lambertAmount === undefined) {
/* 14678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lambertAmount\' referenced before assignment');
/* 14679 */                     }
/* 14680 */                     var $binop940 = Sk.abstr.numberBinOp($lattr939, lambertAmount, 'Mult');
/* 14681 */                     if (b === undefined) {
/* 14682 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b\' referenced before assignment');
/* 14683 */                     }
/* 14684 */                     $ret;
/* 14685 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl938, c, $binop940, b);
/* 14686 */                     $blk = 34; /* allowing case fallthrough */
/* 14687 */                 case 34:
/* 14688 */                     /* --- function return or resume suspension --- */
/* 14689 */                     if ($ret && $ret.$isSuspension) {
/* 14690 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 315, 16);
/* 14691 */                     }
/* 14692 */                     var $call941 = $ret;
/* 14693 */                     //
/* 14694 */                     // line 315:
/* 14695 */                     //             c = addColours(c, self.lambertCoefficient * lambertAmount, b)
/* 14696 */                     //                 ^
/* 14697 */                     //
/* 14698 */                     $currLineNo = 315;
/* 14699 */                     $currColNo = 16;
/* 14700 */ 
/* 14701 */                     c = $call941;
/* 14702 */                     $blk = 15; /* jump */
/* 14703 */                     continue;
/* 14704 */                 }
/* 14705 */             } catch (err) {
/* 14706 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14707 */                     err = new Sk.builtin.ExternalError(err);
/* 14708 */                 }
/* 14709 */                 err.traceback.push({
/* 14710 */                     lineno: $currLineNo,
/* 14711 */                     colno: $currColNo,
/* 14712 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 14713 */                 });
/* 14714 */                 if ($exc.length > 0) {
/* 14715 */                     $err = err;
/* 14716 */                     $blk = $exc.pop();
/* 14717 */                     continue;
/* 14718 */                 } else {
/* 14719 */                     throw err;
/* 14720 */                 }
/* 14721 */             }
/* 14722 */         }
/* 14723 */     });
/* 14724 */     var $scope952 = (function $CheckerboardSurface$class_outer($globals, $locals, $rest) {
/* 14725 */         var $gbl = $globals,
/* 14726 */             $loc = $locals;
/* 14727 */         (function $CheckerboardSurface$_closure() {
/* 14728 */             var $blk = 0,
/* 14729 */                 $exc = [],
/* 14730 */                 $ret = undefined,
/* 14731 */                 $postfinally = undefined,
/* 14732 */                 $currLineNo = undefined,
/* 14733 */                 $currColNo = undefined;
/* 14734 */             while (true) {
/* 14735 */                 try {
/* 14736 */                     switch ($blk) {
/* 14737 */                     case 0:
/* 14738 */                         /* --- class entry --- */
/* 14739 */                         //
/* 14740 */                         // line 323:
/* 14741 */                         //     def __init__(self, **kwargs):
/* 14742 */                         //     ^
/* 14743 */                         //
/* 14744 */                         $currLineNo = 323;
/* 14745 */                         $currColNo = 4;
/* 14746 */ 
/* 14747 */                         $scope953.co_name = new Sk.builtins['str']('__init__');
/* 14748 */                         $scope953.co_varnames = ['self'];
/* 14749 */                         $scope953.co_kwargs = 1;
/* 14750 */                         var $funcobj968 = new Sk.builtins['function']($scope953, $gbl);
/* 14751 */                         $loc.__init__ = $funcobj968;
/* 14752 */                         //
/* 14753 */                         // line 328:
/* 14754 */                         //     def baseColourAt(self, p):
/* 14755 */                         //     ^
/* 14756 */                         //
/* 14757 */                         $currLineNo = 328;
/* 14758 */                         $currColNo = 4;
/* 14759 */ 
/* 14760 */                         $scope969.co_name = new Sk.builtins['str']('baseColourAt');
/* 14761 */                         $scope969.co_varnames = ['self', 'p'];
/* 14762 */                         var $funcobj1002 = new Sk.builtins['function']($scope969, $gbl);
/* 14763 */                         $loc.baseColourAt = $funcobj1002;
/* 14764 */                         return;
/* 14765 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 14766 */                     }
/* 14767 */                 } catch (err) {
/* 14768 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/* 14769 */                         err = new Sk.builtin.ExternalError(err);
/* 14770 */                     }
/* 14771 */                     err.traceback.push({
/* 14772 */                         lineno: $currLineNo,
/* 14773 */                         colno: $currColNo,
/* 14774 */                         filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 14775 */                     });
/* 14776 */                     if ($exc.length > 0) {
/* 14777 */                         $err = err;
/* 14778 */                         $blk = $exc.pop();
/* 14779 */                         continue;
/* 14780 */                     } else {
/* 14781 */                         throw err;
/* 14782 */                     }
/* 14783 */                 }
/* 14784 */             }
/* 14785 */         }).apply(null, $rest);
/* 14786 */     });
/* 14787 */     var $scope953 = (function $__init__954$($kwa, self) {
/* 14788 */         var kwargs; /* locals */
/* 14789 */         var kwargs, kwargs, kwargs, kwargs, self, self, self, self, $kwa, $loadgbl955, $loadgbl955, $lattr956, $lattr958, $str959, $elem960, $elem961, $elem962, $loadtuple963, $lattr958, $str959, $elem960, $elem961, $elem962, $loadtuple963, $call964, $lattr965, $str966, $lattr965, $str966, $call967;
/* 14790 */         var $wakeFromSuspension = function() {
/* 14791 */             var susp = $scope953.$wakingSuspension;
/* 14792 */             delete $scope953.$wakingSuspension;
/* 14793 */             $blk = susp.$blk;
/* 14794 */             $loc = susp.$loc;
/* 14795 */             $gbl = susp.$gbl;
/* 14796 */             $exc = susp.$exc;
/* 14797 */             $err = susp.$err;
/* 14798 */             $postfinally = susp.$postfinally;
/* 14799 */             $currLineNo = susp.$lineno;
/* 14800 */             $currColNo = susp.$colno;
/* 14801 */             Sk.lastYield = Date.now();
/* 14802 */             kwargs = susp.$tmps.kwargs;
/* 14803 */             self = susp.$tmps.self;
/* 14804 */             $kwa = susp.$tmps.$kwa;
/* 14805 */             $loadgbl955 = susp.$tmps.$loadgbl955;
/* 14806 */             $lattr956 = susp.$tmps.$lattr956;
/* 14807 */             $lattr958 = susp.$tmps.$lattr958;
/* 14808 */             $str959 = susp.$tmps.$str959;
/* 14809 */             $elem960 = susp.$tmps.$elem960;
/* 14810 */             $elem961 = susp.$tmps.$elem961;
/* 14811 */             $elem962 = susp.$tmps.$elem962;
/* 14812 */             $loadtuple963 = susp.$tmps.$loadtuple963;
/* 14813 */             $call964 = susp.$tmps.$call964;
/* 14814 */             $lattr965 = susp.$tmps.$lattr965;
/* 14815 */             $str966 = susp.$tmps.$str966;
/* 14816 */             $call967 = susp.$tmps.$call967;
/* 14817 */             try {
/* 14818 */                 $ret = susp.child.resume();
/* 14819 */             } catch (err) {
/* 14820 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14821 */                     err = new Sk.builtin.ExternalError(err);
/* 14822 */                 }
/* 14823 */                 err.traceback.push({
/* 14824 */                     lineno: $currLineNo,
/* 14825 */                     colno: $currColNo,
/* 14826 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 14827 */                 });
/* 14828 */                 if ($exc.length > 0) {
/* 14829 */                     $err = err;
/* 14830 */                     $blk = $exc.pop();
/* 14831 */                 } else {
/* 14832 */                     throw err;
/* 14833 */                 }
/* 14834 */             }
/* 14835 */         };
/* 14836 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 14837 */             var susp = new Sk.misceval.Suspension();
/* 14838 */             susp.child = $child;
/* 14839 */             susp.resume = function() {
/* 14840 */                 $scope953.$wakingSuspension = susp;
/* 14841 */                 return $scope953();
/* 14842 */             };
/* 14843 */             susp.data = susp.child.data;
/* 14844 */             susp.$blk = $blk;
/* 14845 */             susp.$loc = $loc;
/* 14846 */             susp.$gbl = $gbl;
/* 14847 */             susp.$exc = $exc;
/* 14848 */             susp.$err = $err;
/* 14849 */             susp.$postfinally = $postfinally;
/* 14850 */             susp.$filename = $filename;
/* 14851 */             susp.$lineno = $lineno;
/* 14852 */             susp.$colno = $colno;
/* 14853 */             susp.optional = susp.child.optional;
/* 14854 */             susp.$tmps = {
/* 14855 */                 "kwargs": kwargs,
/* 14856 */                 "self": self,
/* 14857 */                 "$kwa": $kwa,
/* 14858 */                 "$loadgbl955": $loadgbl955,
/* 14859 */                 "$lattr956": $lattr956,
/* 14860 */                 "$lattr958": $lattr958,
/* 14861 */                 "$str959": $str959,
/* 14862 */                 "$elem960": $elem960,
/* 14863 */                 "$elem961": $elem961,
/* 14864 */                 "$elem962": $elem962,
/* 14865 */                 "$loadtuple963": $loadtuple963,
/* 14866 */                 "$call964": $call964,
/* 14867 */                 "$lattr965": $lattr965,
/* 14868 */                 "$str966": $str966,
/* 14869 */                 "$call967": $call967
/* 14870 */             };
/* 14871 */             return susp;
/* 14872 */         };
/* 14873 */         var $blk = 0,
/* 14874 */             $exc = [],
/* 14875 */             $loc = {},
/* 14876 */             $gbl = this,
/* 14877 */             $err = undefined,
/* 14878 */             $ret = undefined,
/* 14879 */             $postfinally = undefined,
/* 14880 */             $currLineNo = undefined,
/* 14881 */             $currColNo = undefined;
/* 14882 */         if ($scope953.$wakingSuspension !== undefined) {
/* 14883 */             $wakeFromSuspension();
/* 14884 */         } else {
/* 14885 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, true, false);
/* 14886 */             kwargs = new Sk.builtins['dict']($kwa);
/* 14887 */         }
/* 14888 */         while (true) {
/* 14889 */             try {
/* 14890 */                 switch ($blk) {
/* 14891 */                 case 0:
/* 14892 */                     /* --- codeobj entry --- */
/* 14893 */                     if (self === undefined) {
/* 14894 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14895 */                     }
/* 14896 */ 
/* 14897 */                     //
/* 14898 */                     // line 324:
/* 14899 */                     //         SimpleSurface.__init__(self, **kwargs)
/* 14900 */                     //         ^
/* 14901 */                     //
/* 14902 */                     $currLineNo = 324;
/* 14903 */                     $currColNo = 8;
/* 14904 */ 
/* 14905 */                     var $loadgbl955 = Sk.misceval.loadname('SimpleSurface', $gbl);
/* 14906 */                     $ret = Sk.abstr.gattr($loadgbl955, '__init__', true);
/* 14907 */                     $blk = 1; /* allowing case fallthrough */
/* 14908 */                 case 1:
/* 14909 */                     /* --- function return or resume suspension --- */
/* 14910 */                     if ($ret && $ret.$isSuspension) {
/* 14911 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 324, 8);
/* 14912 */                     }
/* 14913 */                     var $lattr956 = $ret;
/* 14914 */                     if (self === undefined) {
/* 14915 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14916 */                     }
/* 14917 */                     if (kwargs === undefined) {
/* 14918 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 14919 */                     }
/* 14920 */                     $ret;
/* 14921 */                     $ret = Sk.misceval.callOrSuspend($lattr956, kwargs, undefined, [], self);
/* 14922 */                     $blk = 2; /* allowing case fallthrough */
/* 14923 */                 case 2:
/* 14924 */                     /* --- function return or resume suspension --- */
/* 14925 */                     if ($ret && $ret.$isSuspension) {
/* 14926 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 324, 8);
/* 14927 */                     }
/* 14928 */                     var $call957 = $ret;
/* 14929 */                     //
/* 14930 */                     // line 324:
/* 14931 */                     //         SimpleSurface.__init__(self, **kwargs)
/* 14932 */                     //         ^
/* 14933 */                     //
/* 14934 */                     $currLineNo = 324;
/* 14935 */                     $currColNo = 8;
/* 14936 */ 
/* 14937 */ 
/* 14938 */                     //
/* 14939 */                     // line 325:
/* 14940 */                     //         self.otherColour = kwargs.get('otherColour', (0,0,0))
/* 14941 */                     //         ^
/* 14942 */                     //
/* 14943 */                     $currLineNo = 325;
/* 14944 */                     $currColNo = 8;
/* 14945 */ 
/* 14946 */                     if (kwargs === undefined) {
/* 14947 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 14948 */                     }
/* 14949 */                     $ret = Sk.abstr.gattr(kwargs, 'get', true);
/* 14950 */                     $blk = 3; /* allowing case fallthrough */
/* 14951 */                 case 3:
/* 14952 */                     /* --- function return or resume suspension --- */
/* 14953 */                     if ($ret && $ret.$isSuspension) {
/* 14954 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 325, 27);
/* 14955 */                     }
/* 14956 */                     var $lattr958 = $ret;
/* 14957 */                     var $str959 = new Sk.builtins['str']('otherColour');
/* 14958 */                     var $elem960 = new Sk.builtin.int_(0);
/* 14959 */                     var $elem961 = new Sk.builtin.int_(0);
/* 14960 */                     var $elem962 = new Sk.builtin.int_(0);
/* 14961 */                     var $loadtuple963 = new Sk.builtins['tuple']([$elem960, $elem961, $elem962]);
/* 14962 */                     $ret;
/* 14963 */                     $ret = Sk.misceval.callsimOrSuspend($lattr958, $str959, $loadtuple963);
/* 14964 */                     $blk = 4; /* allowing case fallthrough */
/* 14965 */                 case 4:
/* 14966 */                     /* --- function return or resume suspension --- */
/* 14967 */                     if ($ret && $ret.$isSuspension) {
/* 14968 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 325, 27);
/* 14969 */                     }
/* 14970 */                     var $call964 = $ret;
/* 14971 */                     //
/* 14972 */                     // line 325:
/* 14973 */                     //         self.otherColour = kwargs.get('otherColour', (0,0,0))
/* 14974 */                     //                            ^
/* 14975 */                     //
/* 14976 */                     $currLineNo = 325;
/* 14977 */                     $currColNo = 27;
/* 14978 */ 
/* 14979 */                     if (self === undefined) {
/* 14980 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14981 */                     }
/* 14982 */                     $ret = Sk.abstr.sattr(self, 'otherColour', $call964, true);
/* 14983 */                     $blk = 5; /* allowing case fallthrough */
/* 14984 */                 case 5:
/* 14985 */                     /* --- function return or resume suspension --- */
/* 14986 */                     if ($ret && $ret.$isSuspension) {
/* 14987 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 325, 8);
/* 14988 */                     }
/* 14989 */                     //
/* 14990 */                     // line 326:
/* 14991 */                     //         self.checkSize = kwargs.get('checkSize', 1)
/* 14992 */                     //         ^
/* 14993 */                     //
/* 14994 */                     $currLineNo = 326;
/* 14995 */                     $currColNo = 8;
/* 14996 */ 
/* 14997 */                     if (kwargs === undefined) {
/* 14998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'kwargs\' referenced before assignment');
/* 14999 */                     }
/* 15000 */                     $ret = Sk.abstr.gattr(kwargs, 'get', true);
/* 15001 */                     $blk = 6; /* allowing case fallthrough */
/* 15002 */                 case 6:
/* 15003 */                     /* --- function return or resume suspension --- */
/* 15004 */                     if ($ret && $ret.$isSuspension) {
/* 15005 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 326, 25);
/* 15006 */                     }
/* 15007 */                     var $lattr965 = $ret;
/* 15008 */                     var $str966 = new Sk.builtins['str']('checkSize');
/* 15009 */                     $ret;
/* 15010 */                     $ret = Sk.misceval.callsimOrSuspend($lattr965, $str966, new Sk.builtin.int_(1));
/* 15011 */                     $blk = 7; /* allowing case fallthrough */
/* 15012 */                 case 7:
/* 15013 */                     /* --- function return or resume suspension --- */
/* 15014 */                     if ($ret && $ret.$isSuspension) {
/* 15015 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 326, 25);
/* 15016 */                     }
/* 15017 */                     var $call967 = $ret;
/* 15018 */                     //
/* 15019 */                     // line 326:
/* 15020 */                     //         self.checkSize = kwargs.get('checkSize', 1)
/* 15021 */                     //                          ^
/* 15022 */                     //
/* 15023 */                     $currLineNo = 326;
/* 15024 */                     $currColNo = 25;
/* 15025 */ 
/* 15026 */                     if (self === undefined) {
/* 15027 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15028 */                     }
/* 15029 */                     $ret = Sk.abstr.sattr(self, 'checkSize', $call967, true);
/* 15030 */                     $blk = 8; /* allowing case fallthrough */
/* 15031 */                 case 8:
/* 15032 */                     /* --- function return or resume suspension --- */
/* 15033 */                     if ($ret && $ret.$isSuspension) {
/* 15034 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 326, 8);
/* 15035 */                     }
/* 15036 */                     return Sk.builtin.none.none$;
/* 15037 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 15038 */                 }
/* 15039 */             } catch (err) {
/* 15040 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15041 */                     err = new Sk.builtin.ExternalError(err);
/* 15042 */                 }
/* 15043 */                 err.traceback.push({
/* 15044 */                     lineno: $currLineNo,
/* 15045 */                     colno: $currColNo,
/* 15046 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 15047 */                 });
/* 15048 */                 if ($exc.length > 0) {
/* 15049 */                     $err = err;
/* 15050 */                     $blk = $exc.pop();
/* 15051 */                     continue;
/* 15052 */                 } else {
/* 15053 */                     throw err;
/* 15054 */                 }
/* 15055 */             }
/* 15056 */         }
/* 15057 */     });
/* 15058 */     var $scope969 = (function $baseColourAt970$(self, p) {
/* 15059 */         var v; /* locals */
/* 15060 */         var p, p, self, self, self, self, v, v, v, v, v, $loadgbl971, $lattr974, $lattr974, $lattr975, $binop976, $loadgbl978, $loadgbl979, $loadgbl978, $loadgbl979, $lattr980, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $lattr986, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $lattr986, $call987, $binop988, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $lattr986, $call987, $binop988, $call989, $binop990, $loadgbl991, $loadgbl992, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $lattr986, $call987, $binop988, $call989, $binop990, $loadgbl991, $loadgbl992, $lattr993, $loadgbl978, $loadgbl979, $lattr980, $call981, $binop982, $call983, $loadgbl984, $loadgbl985, $lattr986, $call987, $binop988, $call989, $binop990, $loadgbl991, $loadgbl992, $lattr993, $call994, $binop995;
/* 15061 */         var $wakeFromSuspension = function() {
/* 15062 */             var susp = $scope969.$wakingSuspension;
/* 15063 */             delete $scope969.$wakingSuspension;
/* 15064 */             $blk = susp.$blk;
/* 15065 */             $loc = susp.$loc;
/* 15066 */             $gbl = susp.$gbl;
/* 15067 */             $exc = susp.$exc;
/* 15068 */             $err = susp.$err;
/* 15069 */             $postfinally = susp.$postfinally;
/* 15070 */             $currLineNo = susp.$lineno;
/* 15071 */             $currColNo = susp.$colno;
/* 15072 */             Sk.lastYield = Date.now();
/* 15073 */             p = susp.$tmps.p;
/* 15074 */             self = susp.$tmps.self;
/* 15075 */             v = susp.$tmps.v;
/* 15076 */             $loadgbl971 = susp.$tmps.$loadgbl971;
/* 15077 */             $lattr974 = susp.$tmps.$lattr974;
/* 15078 */             $lattr975 = susp.$tmps.$lattr975;
/* 15079 */             $binop976 = susp.$tmps.$binop976;
/* 15080 */             $loadgbl978 = susp.$tmps.$loadgbl978;
/* 15081 */             $loadgbl979 = susp.$tmps.$loadgbl979;
/* 15082 */             $lattr980 = susp.$tmps.$lattr980;
/* 15083 */             $call981 = susp.$tmps.$call981;
/* 15084 */             $binop982 = susp.$tmps.$binop982;
/* 15085 */             $call983 = susp.$tmps.$call983;
/* 15086 */             $loadgbl984 = susp.$tmps.$loadgbl984;
/* 15087 */             $loadgbl985 = susp.$tmps.$loadgbl985;
/* 15088 */             $lattr986 = susp.$tmps.$lattr986;
/* 15089 */             $call987 = susp.$tmps.$call987;
/* 15090 */             $binop988 = susp.$tmps.$binop988;
/* 15091 */             $call989 = susp.$tmps.$call989;
/* 15092 */             $binop990 = susp.$tmps.$binop990;
/* 15093 */             $loadgbl991 = susp.$tmps.$loadgbl991;
/* 15094 */             $loadgbl992 = susp.$tmps.$loadgbl992;
/* 15095 */             $lattr993 = susp.$tmps.$lattr993;
/* 15096 */             $call994 = susp.$tmps.$call994;
/* 15097 */             $binop995 = susp.$tmps.$binop995;
/* 15098 */             try {
/* 15099 */                 $ret = susp.child.resume();
/* 15100 */             } catch (err) {
/* 15101 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15102 */                     err = new Sk.builtin.ExternalError(err);
/* 15103 */                 }
/* 15104 */                 err.traceback.push({
/* 15105 */                     lineno: $currLineNo,
/* 15106 */                     colno: $currColNo,
/* 15107 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 15108 */                 });
/* 15109 */                 if ($exc.length > 0) {
/* 15110 */                     $err = err;
/* 15111 */                     $blk = $exc.pop();
/* 15112 */                 } else {
/* 15113 */                     throw err;
/* 15114 */                 }
/* 15115 */             }
/* 15116 */         };
/* 15117 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 15118 */             var susp = new Sk.misceval.Suspension();
/* 15119 */             susp.child = $child;
/* 15120 */             susp.resume = function() {
/* 15121 */                 $scope969.$wakingSuspension = susp;
/* 15122 */                 return $scope969();
/* 15123 */             };
/* 15124 */             susp.data = susp.child.data;
/* 15125 */             susp.$blk = $blk;
/* 15126 */             susp.$loc = $loc;
/* 15127 */             susp.$gbl = $gbl;
/* 15128 */             susp.$exc = $exc;
/* 15129 */             susp.$err = $err;
/* 15130 */             susp.$postfinally = $postfinally;
/* 15131 */             susp.$filename = $filename;
/* 15132 */             susp.$lineno = $lineno;
/* 15133 */             susp.$colno = $colno;
/* 15134 */             susp.optional = susp.child.optional;
/* 15135 */             susp.$tmps = {
/* 15136 */                 "p": p,
/* 15137 */                 "self": self,
/* 15138 */                 "v": v,
/* 15139 */                 "$loadgbl971": $loadgbl971,
/* 15140 */                 "$lattr974": $lattr974,
/* 15141 */                 "$lattr975": $lattr975,
/* 15142 */                 "$binop976": $binop976,
/* 15143 */                 "$loadgbl978": $loadgbl978,
/* 15144 */                 "$loadgbl979": $loadgbl979,
/* 15145 */                 "$lattr980": $lattr980,
/* 15146 */                 "$call981": $call981,
/* 15147 */                 "$binop982": $binop982,
/* 15148 */                 "$call983": $call983,
/* 15149 */                 "$loadgbl984": $loadgbl984,
/* 15150 */                 "$loadgbl985": $loadgbl985,
/* 15151 */                 "$lattr986": $lattr986,
/* 15152 */                 "$call987": $call987,
/* 15153 */                 "$binop988": $binop988,
/* 15154 */                 "$call989": $call989,
/* 15155 */                 "$binop990": $binop990,
/* 15156 */                 "$loadgbl991": $loadgbl991,
/* 15157 */                 "$loadgbl992": $loadgbl992,
/* 15158 */                 "$lattr993": $lattr993,
/* 15159 */                 "$call994": $call994,
/* 15160 */                 "$binop995": $binop995
/* 15161 */             };
/* 15162 */             return susp;
/* 15163 */         };
/* 15164 */         var $blk = 0,
/* 15165 */             $exc = [],
/* 15166 */             $loc = {},
/* 15167 */             $gbl = this,
/* 15168 */             $err = undefined,
/* 15169 */             $ret = undefined,
/* 15170 */             $postfinally = undefined,
/* 15171 */             $currLineNo = undefined,
/* 15172 */             $currColNo = undefined;
/* 15173 */         if ($scope969.$wakingSuspension !== undefined) {
/* 15174 */             $wakeFromSuspension();
/* 15175 */         } else {
/* 15176 */             Sk.builtin.pyCheckArgs("baseColourAt", arguments, 2, 2, false, false);
/* 15177 */         }
/* 15178 */         while (true) {
/* 15179 */             try {
/* 15180 */                 switch ($blk) {
/* 15181 */                 case 0:
/* 15182 */                     /* --- codeobj entry --- */
/* 15183 */                     if (self === undefined) {
/* 15184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15185 */                     }
/* 15186 */                     if (p === undefined) {
/* 15187 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 15188 */                     }
/* 15189 */ 
/* 15190 */                     //
/* 15191 */                     // line 329:
/* 15192 */                     //         v = p - Point.ZERO
/* 15193 */                     //         ^
/* 15194 */                     //
/* 15195 */                     $currLineNo = 329;
/* 15196 */                     $currColNo = 8;
/* 15197 */ 
/* 15198 */                     if (p === undefined) {
/* 15199 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 15200 */                     }
/* 15201 */                     var $loadgbl971 = Sk.misceval.loadname('Point', $gbl);
/* 15202 */                     $ret = Sk.abstr.gattr($loadgbl971, 'ZERO', true);
/* 15203 */                     $blk = 1; /* allowing case fallthrough */
/* 15204 */                 case 1:
/* 15205 */                     /* --- function return or resume suspension --- */
/* 15206 */                     if ($ret && $ret.$isSuspension) {
/* 15207 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 329, 16);
/* 15208 */                     }
/* 15209 */                     var $lattr972 = $ret;
/* 15210 */                     var $binop973 = Sk.abstr.numberBinOp(p, $lattr972, 'Sub');
/* 15211 */                     v = $binop973;
/* 15212 */                     //
/* 15213 */                     // line 330:
/* 15214 */                     //         v.scale(1.0 / self.checkSize)
/* 15215 */                     //         ^
/* 15216 */                     //
/* 15217 */                     $currLineNo = 330;
/* 15218 */                     $currColNo = 8;
/* 15219 */ 
/* 15220 */                     if (v === undefined) {
/* 15221 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/* 15222 */                     }
/* 15223 */                     $ret = Sk.abstr.gattr(v, 'scale', true);
/* 15224 */                     $blk = 2; /* allowing case fallthrough */
/* 15225 */                 case 2:
/* 15226 */                     /* --- function return or resume suspension --- */
/* 15227 */                     if ($ret && $ret.$isSuspension) {
/* 15228 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 330, 8);
/* 15229 */                     }
/* 15230 */                     var $lattr974 = $ret;
/* 15231 */                     if (self === undefined) {
/* 15232 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15233 */                     }
/* 15234 */                     $ret = Sk.abstr.gattr(self, 'checkSize', true);
/* 15235 */                     $blk = 3; /* allowing case fallthrough */
/* 15236 */                 case 3:
/* 15237 */                     /* --- function return or resume suspension --- */
/* 15238 */                     if ($ret && $ret.$isSuspension) {
/* 15239 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 330, 22);
/* 15240 */                     }
/* 15241 */                     var $lattr975 = $ret;
/* 15242 */                     var $binop976 = Sk.abstr.numberBinOp(new Sk.builtin.float_(1), $lattr975, 'Div');
/* 15243 */                     $ret;
/* 15244 */                     $ret = Sk.misceval.callsimOrSuspend($lattr974, $binop976);
/* 15245 */                     $blk = 4; /* allowing case fallthrough */
/* 15246 */                 case 4:
/* 15247 */                     /* --- function return or resume suspension --- */
/* 15248 */                     if ($ret && $ret.$isSuspension) {
/* 15249 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 330, 8);
/* 15250 */                     }
/* 15251 */                     var $call977 = $ret;
/* 15252 */                     //
/* 15253 */                     // line 330:
/* 15254 */                     //         v.scale(1.0 / self.checkSize)
/* 15255 */                     //         ^
/* 15256 */                     //
/* 15257 */                     $currLineNo = 330;
/* 15258 */                     $currColNo = 8;
/* 15259 */ 
/* 15260 */ 
/* 15261 */                     //
/* 15262 */                     // line 331:
/* 15263 */                     //         if (int(abs(v.x) + 0.5) + \
/* 15264 */                     //         ^
/* 15265 */                     //
/* 15266 */                     $currLineNo = 331;
/* 15267 */                     $currColNo = 8;
/* 15268 */ 
/* 15269 */                     var $loadgbl978 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 15270 */                     var $loadgbl979 = Sk.misceval.loadname('abs', $gbl);
/* 15271 */                     if (v === undefined) {
/* 15272 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/* 15273 */                     }
/* 15274 */                     $ret = Sk.abstr.gattr(v, 'x', true);
/* 15275 */                     $blk = 7; /* allowing case fallthrough */
/* 15276 */                 case 7:
/* 15277 */                     /* --- function return or resume suspension --- */
/* 15278 */                     if ($ret && $ret.$isSuspension) {
/* 15279 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 331, 20);
/* 15280 */                     }
/* 15281 */                     var $lattr980 = $ret;
/* 15282 */                     $ret;
/* 15283 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl979, $lattr980);
/* 15284 */                     $blk = 8; /* allowing case fallthrough */
/* 15285 */                 case 8:
/* 15286 */                     /* --- function return or resume suspension --- */
/* 15287 */                     if ($ret && $ret.$isSuspension) {
/* 15288 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 331, 16);
/* 15289 */                     }
/* 15290 */                     var $call981 = $ret;
/* 15291 */                     //
/* 15292 */                     // line 331:
/* 15293 */                     //         if (int(abs(v.x) + 0.5) + \
/* 15294 */                     //                 ^
/* 15295 */                     //
/* 15296 */                     $currLineNo = 331;
/* 15297 */                     $currColNo = 16;
/* 15298 */ 
/* 15299 */                     var $binop982 = Sk.abstr.numberBinOp($call981, new Sk.builtin.float_(0.5), 'Add');
/* 15300 */                     $ret;
/* 15301 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl978, $binop982);
/* 15302 */                     $blk = 9; /* allowing case fallthrough */
/* 15303 */                 case 9:
/* 15304 */                     /* --- function return or resume suspension --- */
/* 15305 */                     if ($ret && $ret.$isSuspension) {
/* 15306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 331, 12);
/* 15307 */                     }
/* 15308 */                     var $call983 = $ret;
/* 15309 */                     //
/* 15310 */                     // line 331:
/* 15311 */                     //         if (int(abs(v.x) + 0.5) + \
/* 15312 */                     //             ^
/* 15313 */                     //
/* 15314 */                     $currLineNo = 331;
/* 15315 */                     $currColNo = 12;
/* 15316 */ 
/* 15317 */                     var $loadgbl984 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 15318 */                     var $loadgbl985 = Sk.misceval.loadname('abs', $gbl);
/* 15319 */                     if (v === undefined) {
/* 15320 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/* 15321 */                     }
/* 15322 */                     $ret = Sk.abstr.gattr(v, 'y', true);
/* 15323 */                     $blk = 10; /* allowing case fallthrough */
/* 15324 */                 case 10:
/* 15325 */                     /* --- function return or resume suspension --- */
/* 15326 */                     if ($ret && $ret.$isSuspension) {
/* 15327 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 332, 20);
/* 15328 */                     }
/* 15329 */                     var $lattr986 = $ret;
/* 15330 */                     $ret;
/* 15331 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl985, $lattr986);
/* 15332 */                     $blk = 11; /* allowing case fallthrough */
/* 15333 */                 case 11:
/* 15334 */                     /* --- function return or resume suspension --- */
/* 15335 */                     if ($ret && $ret.$isSuspension) {
/* 15336 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 332, 16);
/* 15337 */                     }
/* 15338 */                     var $call987 = $ret;
/* 15339 */                     //
/* 15340 */                     // line 332:
/* 15341 */                     //             int(abs(v.y) + 0.5) + \
/* 15342 */                     //                 ^
/* 15343 */                     //
/* 15344 */                     $currLineNo = 332;
/* 15345 */                     $currColNo = 16;
/* 15346 */ 
/* 15347 */                     var $binop988 = Sk.abstr.numberBinOp($call987, new Sk.builtin.float_(0.5), 'Add');
/* 15348 */                     $ret;
/* 15349 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl984, $binop988);
/* 15350 */                     $blk = 12; /* allowing case fallthrough */
/* 15351 */                 case 12:
/* 15352 */                     /* --- function return or resume suspension --- */
/* 15353 */                     if ($ret && $ret.$isSuspension) {
/* 15354 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 332, 12);
/* 15355 */                     }
/* 15356 */                     var $call989 = $ret;
/* 15357 */                     //
/* 15358 */                     // line 332:
/* 15359 */                     //             int(abs(v.y) + 0.5) + \
/* 15360 */                     //             ^
/* 15361 */                     //
/* 15362 */                     $currLineNo = 332;
/* 15363 */                     $currColNo = 12;
/* 15364 */ 
/* 15365 */                     var $binop990 = Sk.abstr.numberBinOp($call983, $call989, 'Add');
/* 15366 */                     var $loadgbl991 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 15367 */                     var $loadgbl992 = Sk.misceval.loadname('abs', $gbl);
/* 15368 */                     if (v === undefined) {
/* 15369 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/* 15370 */                     }
/* 15371 */                     $ret = Sk.abstr.gattr(v, 'z', true);
/* 15372 */                     $blk = 13; /* allowing case fallthrough */
/* 15373 */                 case 13:
/* 15374 */                     /* --- function return or resume suspension --- */
/* 15375 */                     if ($ret && $ret.$isSuspension) {
/* 15376 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 333, 20);
/* 15377 */                     }
/* 15378 */                     var $lattr993 = $ret;
/* 15379 */                     $ret;
/* 15380 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl992, $lattr993);
/* 15381 */                     $blk = 14; /* allowing case fallthrough */
/* 15382 */                 case 14:
/* 15383 */                     /* --- function return or resume suspension --- */
/* 15384 */                     if ($ret && $ret.$isSuspension) {
/* 15385 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 333, 16);
/* 15386 */                     }
/* 15387 */                     var $call994 = $ret;
/* 15388 */                     //
/* 15389 */                     // line 333:
/* 15390 */                     //             int(abs(v.z) + 0.5)) \
/* 15391 */                     //                 ^
/* 15392 */                     //
/* 15393 */                     $currLineNo = 333;
/* 15394 */                     $currColNo = 16;
/* 15395 */ 
/* 15396 */                     var $binop995 = Sk.abstr.numberBinOp($call994, new Sk.builtin.float_(0.5), 'Add');
/* 15397 */                     $ret;
/* 15398 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl991, $binop995);
/* 15399 */                     $blk = 15; /* allowing case fallthrough */
/* 15400 */                 case 15:
/* 15401 */                     /* --- function return or resume suspension --- */
/* 15402 */                     if ($ret && $ret.$isSuspension) {
/* 15403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 333, 12);
/* 15404 */                     }
/* 15405 */                     var $call996 = $ret;
/* 15406 */                     //
/* 15407 */                     // line 333:
/* 15408 */                     //             int(abs(v.z) + 0.5)) \
/* 15409 */                     //             ^
/* 15410 */                     //
/* 15411 */                     $currLineNo = 333;
/* 15412 */                     $currColNo = 12;
/* 15413 */ 
/* 15414 */                     var $binop997 = Sk.abstr.numberBinOp($binop990, $call996, 'Add');
/* 15415 */                     var $binop998 = Sk.abstr.numberBinOp($binop997, new Sk.builtin.int_(2), 'Mod');
/* 15416 */                     var $jfalse999 = ($binop998 === false || !Sk.misceval.isTrue($binop998));
/* 15417 */                     if ($jfalse999) { /*test failed */
/* 15418 */                         $blk = 6;
/* 15419 */                         continue;
/* 15420 */                     }
/* 15421 */                     //
/* 15422 */                     // line 335:
/* 15423 */                     //             return self.otherColour
/* 15424 */                     //             ^
/* 15425 */                     //
/* 15426 */                     $currLineNo = 335;
/* 15427 */                     $currColNo = 12;
/* 15428 */ 
/* 15429 */                     if (self === undefined) {
/* 15430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15431 */                     }
/* 15432 */                     $ret = Sk.abstr.gattr(self, 'otherColour', true);
/* 15433 */                     $blk = 16; /* allowing case fallthrough */
/* 15434 */                 case 16:
/* 15435 */                     /* --- function return or resume suspension --- */
/* 15436 */                     if ($ret && $ret.$isSuspension) {
/* 15437 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 335, 19);
/* 15438 */                     }
/* 15439 */                     var $lattr1000 = $ret;
/* 15440 */                     return $lattr1000;
/* 15441 */                     $blk = 5; /* allowing case fallthrough */
/* 15442 */                 case 5:
/* 15443 */                     /* --- end of if --- */
/* 15444 */                     return Sk.builtin.none.none$;
/* 15445 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 15446 */                 case 6:
/* 15447 */                     /* --- next branch of if --- */
/* 15448 */                     //
/* 15449 */                     // line 337:
/* 15450 */                     //             return self.baseColour
/* 15451 */                     //             ^
/* 15452 */                     //
/* 15453 */                     $currLineNo = 337;
/* 15454 */                     $currColNo = 12;
/* 15455 */ 
/* 15456 */                     if (self === undefined) {
/* 15457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15458 */                     }
/* 15459 */                     $ret = Sk.abstr.gattr(self, 'baseColour', true);
/* 15460 */                     $blk = 17; /* allowing case fallthrough */
/* 15461 */                 case 17:
/* 15462 */                     /* --- function return or resume suspension --- */
/* 15463 */                     if ($ret && $ret.$isSuspension) {
/* 15464 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 337, 19);
/* 15465 */                     }
/* 15466 */                     var $lattr1001 = $ret;
/* 15467 */                     return $lattr1001;
/* 15468 */                     $blk = 5; /* jump */
/* 15469 */                     continue;
/* 15470 */                 }
/* 15471 */             } catch (err) {
/* 15472 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15473 */                     err = new Sk.builtin.ExternalError(err);
/* 15474 */                 }
/* 15475 */                 err.traceback.push({
/* 15476 */                     lineno: $currLineNo,
/* 15477 */                     colno: $currColNo,
/* 15478 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 15479 */                 });
/* 15480 */                 if ($exc.length > 0) {
/* 15481 */                     $err = err;
/* 15482 */                     $blk = $exc.pop();
/* 15483 */                     continue;
/* 15484 */                 } else {
/* 15485 */                     throw err;
/* 15486 */                 }
/* 15487 */             }
/* 15488 */         }
/* 15489 */     });
/* 15490 */     var $scope1004 = (function $_main1005$() {
/* 15491 */         var Canvas, c, s, y; /* locals */
/* 15492 */         var Canvas, Canvas, c, c, s, s, s, s, s, s, s, s, y, y, y, y, $str1007, $loadgbl1009, $lattr1011, $loadgbl1012, $lattr1011, $loadgbl1012, $call1013, $lattr1015, $loadgbl1016, $lattr1015, $loadgbl1016, $call1017, $lattr1019, $loadgbl1020, $lattr1019, $loadgbl1020, $call1021, $lattr1023, $loadgbl1024, $loadgbl1025, $lattr1023, $loadgbl1024, $loadgbl1025, $call1026, $lattr1023, $loadgbl1024, $loadgbl1025, $call1026, $call1027, $loadgbl1028, $elem1029, $elem1030, $elem1031, $loadtuple1032, $lattr1023, $loadgbl1024, $loadgbl1025, $call1026, $call1027, $loadgbl1028, $elem1029, $elem1030, $elem1031, $loadtuple1032, $call1033, $loadgbl1035, $iter1037, $loadgbl1035, $call1036, $iter1037, $lattr1039, $loadgbl1040, $loadgbl1041, $binop1042, $binop1043, $lattr1039, $loadgbl1040, $loadgbl1041, $binop1042, $binop1043, $call1044, $lattr1039, $loadgbl1040, $loadgbl1041, $binop1042, $binop1043, $call1044, $call1045, $loadgbl1046, $binop1047, $elem1048, $binop1049, $binop1050, $elem1051, $elem1052, $loadtuple1053, $lattr1039, $loadgbl1040, $loadgbl1041, $binop1042, $binop1043, $call1044, $call1045, $loadgbl1046, $binop1047, $elem1048, $binop1049, $binop1050, $elem1051, $elem1052, $loadtuple1053, $call1054, $lattr1056, $loadgbl1057, $loadgbl1058, $lattr1056, $loadgbl1057, $loadgbl1058, $call1059, $loadgbl1060, $lattr1056, $loadgbl1057, $loadgbl1058, $call1059, $loadgbl1060, $lattr1061, $lattr1056, $loadgbl1057, $loadgbl1058, $call1059, $loadgbl1060, $lattr1061, $call1062, $loadgbl1063, $lattr1056, $loadgbl1057, $loadgbl1058, $call1059, $loadgbl1060, $lattr1061, $call1062, $loadgbl1063, $call1064, $lattr1066;
/* 15493 */         var $wakeFromSuspension = function() {
/* 15494 */             var susp = $scope1004.$wakingSuspension;
/* 15495 */             delete $scope1004.$wakingSuspension;
/* 15496 */             $blk = susp.$blk;
/* 15497 */             $loc = susp.$loc;
/* 15498 */             $gbl = susp.$gbl;
/* 15499 */             $exc = susp.$exc;
/* 15500 */             $err = susp.$err;
/* 15501 */             $postfinally = susp.$postfinally;
/* 15502 */             $currLineNo = susp.$lineno;
/* 15503 */             $currColNo = susp.$colno;
/* 15504 */             Sk.lastYield = Date.now();
/* 15505 */             Canvas = susp.$tmps.Canvas;
/* 15506 */             c = susp.$tmps.c;
/* 15507 */             s = susp.$tmps.s;
/* 15508 */             y = susp.$tmps.y;
/* 15509 */             $str1007 = susp.$tmps.$str1007;
/* 15510 */             $loadgbl1009 = susp.$tmps.$loadgbl1009;
/* 15511 */             $lattr1011 = susp.$tmps.$lattr1011;
/* 15512 */             $loadgbl1012 = susp.$tmps.$loadgbl1012;
/* 15513 */             $call1013 = susp.$tmps.$call1013;
/* 15514 */             $lattr1015 = susp.$tmps.$lattr1015;
/* 15515 */             $loadgbl1016 = susp.$tmps.$loadgbl1016;
/* 15516 */             $call1017 = susp.$tmps.$call1017;
/* 15517 */             $lattr1019 = susp.$tmps.$lattr1019;
/* 15518 */             $loadgbl1020 = susp.$tmps.$loadgbl1020;
/* 15519 */             $call1021 = susp.$tmps.$call1021;
/* 15520 */             $lattr1023 = susp.$tmps.$lattr1023;
/* 15521 */             $loadgbl1024 = susp.$tmps.$loadgbl1024;
/* 15522 */             $loadgbl1025 = susp.$tmps.$loadgbl1025;
/* 15523 */             $call1026 = susp.$tmps.$call1026;
/* 15524 */             $call1027 = susp.$tmps.$call1027;
/* 15525 */             $loadgbl1028 = susp.$tmps.$loadgbl1028;
/* 15526 */             $elem1029 = susp.$tmps.$elem1029;
/* 15527 */             $elem1030 = susp.$tmps.$elem1030;
/* 15528 */             $elem1031 = susp.$tmps.$elem1031;
/* 15529 */             $loadtuple1032 = susp.$tmps.$loadtuple1032;
/* 15530 */             $call1033 = susp.$tmps.$call1033;
/* 15531 */             $loadgbl1035 = susp.$tmps.$loadgbl1035;
/* 15532 */             $iter1037 = susp.$tmps.$iter1037;
/* 15533 */             $call1036 = susp.$tmps.$call1036;
/* 15534 */             $lattr1039 = susp.$tmps.$lattr1039;
/* 15535 */             $loadgbl1040 = susp.$tmps.$loadgbl1040;
/* 15536 */             $loadgbl1041 = susp.$tmps.$loadgbl1041;
/* 15537 */             $binop1042 = susp.$tmps.$binop1042;
/* 15538 */             $binop1043 = susp.$tmps.$binop1043;
/* 15539 */             $call1044 = susp.$tmps.$call1044;
/* 15540 */             $call1045 = susp.$tmps.$call1045;
/* 15541 */             $loadgbl1046 = susp.$tmps.$loadgbl1046;
/* 15542 */             $binop1047 = susp.$tmps.$binop1047;
/* 15543 */             $elem1048 = susp.$tmps.$elem1048;
/* 15544 */             $binop1049 = susp.$tmps.$binop1049;
/* 15545 */             $binop1050 = susp.$tmps.$binop1050;
/* 15546 */             $elem1051 = susp.$tmps.$elem1051;
/* 15547 */             $elem1052 = susp.$tmps.$elem1052;
/* 15548 */             $loadtuple1053 = susp.$tmps.$loadtuple1053;
/* 15549 */             $call1054 = susp.$tmps.$call1054;
/* 15550 */             $lattr1056 = susp.$tmps.$lattr1056;
/* 15551 */             $loadgbl1057 = susp.$tmps.$loadgbl1057;
/* 15552 */             $loadgbl1058 = susp.$tmps.$loadgbl1058;
/* 15553 */             $call1059 = susp.$tmps.$call1059;
/* 15554 */             $loadgbl1060 = susp.$tmps.$loadgbl1060;
/* 15555 */             $lattr1061 = susp.$tmps.$lattr1061;
/* 15556 */             $call1062 = susp.$tmps.$call1062;
/* 15557 */             $loadgbl1063 = susp.$tmps.$loadgbl1063;
/* 15558 */             $call1064 = susp.$tmps.$call1064;
/* 15559 */             $lattr1066 = susp.$tmps.$lattr1066;
/* 15560 */             try {
/* 15561 */                 $ret = susp.child.resume();
/* 15562 */             } catch (err) {
/* 15563 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15564 */                     err = new Sk.builtin.ExternalError(err);
/* 15565 */                 }
/* 15566 */                 err.traceback.push({
/* 15567 */                     lineno: $currLineNo,
/* 15568 */                     colno: $currColNo,
/* 15569 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 15570 */                 });
/* 15571 */                 if ($exc.length > 0) {
/* 15572 */                     $err = err;
/* 15573 */                     $blk = $exc.pop();
/* 15574 */                 } else {
/* 15575 */                     throw err;
/* 15576 */                 }
/* 15577 */             }
/* 15578 */         };
/* 15579 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 15580 */             var susp = new Sk.misceval.Suspension();
/* 15581 */             susp.child = $child;
/* 15582 */             susp.resume = function() {
/* 15583 */                 $scope1004.$wakingSuspension = susp;
/* 15584 */                 return $scope1004();
/* 15585 */             };
/* 15586 */             susp.data = susp.child.data;
/* 15587 */             susp.$blk = $blk;
/* 15588 */             susp.$loc = $loc;
/* 15589 */             susp.$gbl = $gbl;
/* 15590 */             susp.$exc = $exc;
/* 15591 */             susp.$err = $err;
/* 15592 */             susp.$postfinally = $postfinally;
/* 15593 */             susp.$filename = $filename;
/* 15594 */             susp.$lineno = $lineno;
/* 15595 */             susp.$colno = $colno;
/* 15596 */             susp.optional = susp.child.optional;
/* 15597 */             susp.$tmps = {
/* 15598 */                 "Canvas": Canvas,
/* 15599 */                 "c": c,
/* 15600 */                 "s": s,
/* 15601 */                 "y": y,
/* 15602 */                 "$str1007": $str1007,
/* 15603 */                 "$loadgbl1009": $loadgbl1009,
/* 15604 */                 "$lattr1011": $lattr1011,
/* 15605 */                 "$loadgbl1012": $loadgbl1012,
/* 15606 */                 "$call1013": $call1013,
/* 15607 */                 "$lattr1015": $lattr1015,
/* 15608 */                 "$loadgbl1016": $loadgbl1016,
/* 15609 */                 "$call1017": $call1017,
/* 15610 */                 "$lattr1019": $lattr1019,
/* 15611 */                 "$loadgbl1020": $loadgbl1020,
/* 15612 */                 "$call1021": $call1021,
/* 15613 */                 "$lattr1023": $lattr1023,
/* 15614 */                 "$loadgbl1024": $loadgbl1024,
/* 15615 */                 "$loadgbl1025": $loadgbl1025,
/* 15616 */                 "$call1026": $call1026,
/* 15617 */                 "$call1027": $call1027,
/* 15618 */                 "$loadgbl1028": $loadgbl1028,
/* 15619 */                 "$elem1029": $elem1029,
/* 15620 */                 "$elem1030": $elem1030,
/* 15621 */                 "$elem1031": $elem1031,
/* 15622 */                 "$loadtuple1032": $loadtuple1032,
/* 15623 */                 "$call1033": $call1033,
/* 15624 */                 "$loadgbl1035": $loadgbl1035,
/* 15625 */                 "$iter1037": $iter1037,
/* 15626 */                 "$call1036": $call1036,
/* 15627 */                 "$lattr1039": $lattr1039,
/* 15628 */                 "$loadgbl1040": $loadgbl1040,
/* 15629 */                 "$loadgbl1041": $loadgbl1041,
/* 15630 */                 "$binop1042": $binop1042,
/* 15631 */                 "$binop1043": $binop1043,
/* 15632 */                 "$call1044": $call1044,
/* 15633 */                 "$call1045": $call1045,
/* 15634 */                 "$loadgbl1046": $loadgbl1046,
/* 15635 */                 "$binop1047": $binop1047,
/* 15636 */                 "$elem1048": $elem1048,
/* 15637 */                 "$binop1049": $binop1049,
/* 15638 */                 "$binop1050": $binop1050,
/* 15639 */                 "$elem1051": $elem1051,
/* 15640 */                 "$elem1052": $elem1052,
/* 15641 */                 "$loadtuple1053": $loadtuple1053,
/* 15642 */                 "$call1054": $call1054,
/* 15643 */                 "$lattr1056": $lattr1056,
/* 15644 */                 "$loadgbl1057": $loadgbl1057,
/* 15645 */                 "$loadgbl1058": $loadgbl1058,
/* 15646 */                 "$call1059": $call1059,
/* 15647 */                 "$loadgbl1060": $loadgbl1060,
/* 15648 */                 "$lattr1061": $lattr1061,
/* 15649 */                 "$call1062": $call1062,
/* 15650 */                 "$loadgbl1063": $loadgbl1063,
/* 15651 */                 "$call1064": $call1064,
/* 15652 */                 "$lattr1066": $lattr1066
/* 15653 */             };
/* 15654 */             return susp;
/* 15655 */         };
/* 15656 */         var $blk = 0,
/* 15657 */             $exc = [],
/* 15658 */             $loc = {},
/* 15659 */             $gbl = this,
/* 15660 */             $err = undefined,
/* 15661 */             $ret = undefined,
/* 15662 */             $postfinally = undefined,
/* 15663 */             $currLineNo = undefined,
/* 15664 */             $currColNo = undefined;
/* 15665 */         if ($scope1004.$wakingSuspension !== undefined) {
/* 15666 */             $wakeFromSuspension();
/* 15667 */         } else {
/* 15668 */             Sk.builtin.pyCheckArgs("_main", arguments, 0, 0, false, false);
/* 15669 */         }
/* 15670 */         while (true) {
/* 15671 */             try {
/* 15672 */                 switch ($blk) {
/* 15673 */                 case 0:
/* 15674 */                     /* --- codeobj entry --- */
/* 15675 */                     //
/* 15676 */                     // line 340:
/* 15677 */                     //     Canvas = PpmCanvas
/* 15678 */                     //     ^
/* 15679 */                     //
/* 15680 */                     $currLineNo = 340;
/* 15681 */                     $currColNo = 4;
/* 15682 */ 
/* 15683 */                     var $loadgbl1006 = Sk.misceval.loadname('PpmCanvas', $gbl);
/* 15684 */                     Canvas = $loadgbl1006;
/* 15685 */                     //
/* 15686 */                     // line 341:
/* 15687 */                     //     c = Canvas(100,100,'test_raytrace')
/* 15688 */                     //     ^
/* 15689 */                     //
/* 15690 */                     $currLineNo = 341;
/* 15691 */                     $currColNo = 4;
/* 15692 */ 
/* 15693 */                     if (Canvas === undefined) {
/* 15694 */                         throw new Sk.builtin.UnboundLocalError('local variable \'Canvas\' referenced before assignment');
/* 15695 */                     }
/* 15696 */                     var $str1007 = new Sk.builtins['str']('test_raytrace');
/* 15697 */                     $ret;
/* 15698 */                     $ret = Sk.misceval.callsimOrSuspend(Canvas, new Sk.builtin.int_(100), new Sk.builtin.int_(100), $str1007);
/* 15699 */                     $blk = 1; /* allowing case fallthrough */
/* 15700 */                 case 1:
/* 15701 */                     /* --- function return or resume suspension --- */
/* 15702 */                     if ($ret && $ret.$isSuspension) {
/* 15703 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 341, 8);
/* 15704 */                     }
/* 15705 */                     var $call1008 = $ret;
/* 15706 */                     //
/* 15707 */                     // line 341:
/* 15708 */                     //     c = Canvas(100,100,'test_raytrace')
/* 15709 */                     //         ^
/* 15710 */                     //
/* 15711 */                     $currLineNo = 341;
/* 15712 */                     $currColNo = 8;
/* 15713 */ 
/* 15714 */                     c = $call1008;
/* 15715 */                     //
/* 15716 */                     // line 343:
/* 15717 */                     //     s = Scene()
/* 15718 */                     //     ^
/* 15719 */                     //
/* 15720 */                     $currLineNo = 343;
/* 15721 */                     $currColNo = 4;
/* 15722 */ 
/* 15723 */                     var $loadgbl1009 = Sk.misceval.loadname('Scene', $gbl);
/* 15724 */                     $ret;
/* 15725 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1009);
/* 15726 */                     $blk = 2; /* allowing case fallthrough */
/* 15727 */                 case 2:
/* 15728 */                     /* --- function return or resume suspension --- */
/* 15729 */                     if ($ret && $ret.$isSuspension) {
/* 15730 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 343, 8);
/* 15731 */                     }
/* 15732 */                     var $call1010 = $ret;
/* 15733 */                     //
/* 15734 */                     // line 343:
/* 15735 */                     //     s = Scene()
/* 15736 */                     //         ^
/* 15737 */                     //
/* 15738 */                     $currLineNo = 343;
/* 15739 */                     $currColNo = 8;
/* 15740 */ 
/* 15741 */                     s = $call1010;
/* 15742 */                     //
/* 15743 */                     // line 344:
/* 15744 */                     //     s.addLight(Point(30, 30, 10))
/* 15745 */                     //     ^
/* 15746 */                     //
/* 15747 */                     $currLineNo = 344;
/* 15748 */                     $currColNo = 4;
/* 15749 */ 
/* 15750 */                     if (s === undefined) {
/* 15751 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 15752 */                     }
/* 15753 */                     $ret = Sk.abstr.gattr(s, 'addLight', true);
/* 15754 */                     $blk = 3; /* allowing case fallthrough */
/* 15755 */                 case 3:
/* 15756 */                     /* --- function return or resume suspension --- */
/* 15757 */                     if ($ret && $ret.$isSuspension) {
/* 15758 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 344, 4);
/* 15759 */                     }
/* 15760 */                     var $lattr1011 = $ret;
/* 15761 */                     var $loadgbl1012 = Sk.misceval.loadname('Point', $gbl);
/* 15762 */                     $ret;
/* 15763 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1012, new Sk.builtin.int_(30), new Sk.builtin.int_(30), new Sk.builtin.int_(10));
/* 15764 */                     $blk = 4; /* allowing case fallthrough */
/* 15765 */                 case 4:
/* 15766 */                     /* --- function return or resume suspension --- */
/* 15767 */                     if ($ret && $ret.$isSuspension) {
/* 15768 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 344, 15);
/* 15769 */                     }
/* 15770 */                     var $call1013 = $ret;
/* 15771 */                     //
/* 15772 */                     // line 344:
/* 15773 */                     //     s.addLight(Point(30, 30, 10))
/* 15774 */                     //                ^
/* 15775 */                     //
/* 15776 */                     $currLineNo = 344;
/* 15777 */                     $currColNo = 15;
/* 15778 */ 
/* 15779 */                     $ret;
/* 15780 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1011, $call1013);
/* 15781 */                     $blk = 5; /* allowing case fallthrough */
/* 15782 */                 case 5:
/* 15783 */                     /* --- function return or resume suspension --- */
/* 15784 */                     if ($ret && $ret.$isSuspension) {
/* 15785 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 344, 4);
/* 15786 */                     }
/* 15787 */                     var $call1014 = $ret;
/* 15788 */                     //
/* 15789 */                     // line 344:
/* 15790 */                     //     s.addLight(Point(30, 30, 10))
/* 15791 */                     //     ^
/* 15792 */                     //
/* 15793 */                     $currLineNo = 344;
/* 15794 */                     $currColNo = 4;
/* 15795 */ 
/* 15796 */ 
/* 15797 */                     //
/* 15798 */                     // line 345:
/* 15799 */                     //     s.addLight(Point(-10, 100, 30))
/* 15800 */                     //     ^
/* 15801 */                     //
/* 15802 */                     $currLineNo = 345;
/* 15803 */                     $currColNo = 4;
/* 15804 */ 
/* 15805 */                     if (s === undefined) {
/* 15806 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 15807 */                     }
/* 15808 */                     $ret = Sk.abstr.gattr(s, 'addLight', true);
/* 15809 */                     $blk = 6; /* allowing case fallthrough */
/* 15810 */                 case 6:
/* 15811 */                     /* --- function return or resume suspension --- */
/* 15812 */                     if ($ret && $ret.$isSuspension) {
/* 15813 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 345, 4);
/* 15814 */                     }
/* 15815 */                     var $lattr1015 = $ret;
/* 15816 */                     var $loadgbl1016 = Sk.misceval.loadname('Point', $gbl);
/* 15817 */                     $ret;
/* 15818 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1016, new Sk.builtin.int_(-10), new Sk.builtin.int_(100), new Sk.builtin.int_(30));
/* 15819 */                     $blk = 7; /* allowing case fallthrough */
/* 15820 */                 case 7:
/* 15821 */                     /* --- function return or resume suspension --- */
/* 15822 */                     if ($ret && $ret.$isSuspension) {
/* 15823 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 345, 15);
/* 15824 */                     }
/* 15825 */                     var $call1017 = $ret;
/* 15826 */                     //
/* 15827 */                     // line 345:
/* 15828 */                     //     s.addLight(Point(-10, 100, 30))
/* 15829 */                     //                ^
/* 15830 */                     //
/* 15831 */                     $currLineNo = 345;
/* 15832 */                     $currColNo = 15;
/* 15833 */ 
/* 15834 */                     $ret;
/* 15835 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1015, $call1017);
/* 15836 */                     $blk = 8; /* allowing case fallthrough */
/* 15837 */                 case 8:
/* 15838 */                     /* --- function return or resume suspension --- */
/* 15839 */                     if ($ret && $ret.$isSuspension) {
/* 15840 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 345, 4);
/* 15841 */                     }
/* 15842 */                     var $call1018 = $ret;
/* 15843 */                     //
/* 15844 */                     // line 345:
/* 15845 */                     //     s.addLight(Point(-10, 100, 30))
/* 15846 */                     //     ^
/* 15847 */                     //
/* 15848 */                     $currLineNo = 345;
/* 15849 */                     $currColNo = 4;
/* 15850 */ 
/* 15851 */ 
/* 15852 */                     //
/* 15853 */                     // line 346:
/* 15854 */                     //     s.lookAt(Point(0, 3, 0))
/* 15855 */                     //     ^
/* 15856 */                     //
/* 15857 */                     $currLineNo = 346;
/* 15858 */                     $currColNo = 4;
/* 15859 */ 
/* 15860 */                     if (s === undefined) {
/* 15861 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 15862 */                     }
/* 15863 */                     $ret = Sk.abstr.gattr(s, 'lookAt', true);
/* 15864 */                     $blk = 9; /* allowing case fallthrough */
/* 15865 */                 case 9:
/* 15866 */                     /* --- function return or resume suspension --- */
/* 15867 */                     if ($ret && $ret.$isSuspension) {
/* 15868 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 346, 4);
/* 15869 */                     }
/* 15870 */                     var $lattr1019 = $ret;
/* 15871 */                     var $loadgbl1020 = Sk.misceval.loadname('Point', $gbl);
/* 15872 */                     $ret;
/* 15873 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1020, new Sk.builtin.int_(0), new Sk.builtin.int_(3), new Sk.builtin.int_(0));
/* 15874 */                     $blk = 10; /* allowing case fallthrough */
/* 15875 */                 case 10:
/* 15876 */                     /* --- function return or resume suspension --- */
/* 15877 */                     if ($ret && $ret.$isSuspension) {
/* 15878 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 346, 13);
/* 15879 */                     }
/* 15880 */                     var $call1021 = $ret;
/* 15881 */                     //
/* 15882 */                     // line 346:
/* 15883 */                     //     s.lookAt(Point(0, 3, 0))
/* 15884 */                     //              ^
/* 15885 */                     //
/* 15886 */                     $currLineNo = 346;
/* 15887 */                     $currColNo = 13;
/* 15888 */ 
/* 15889 */                     $ret;
/* 15890 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1019, $call1021);
/* 15891 */                     $blk = 11; /* allowing case fallthrough */
/* 15892 */                 case 11:
/* 15893 */                     /* --- function return or resume suspension --- */
/* 15894 */                     if ($ret && $ret.$isSuspension) {
/* 15895 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 346, 4);
/* 15896 */                     }
/* 15897 */                     var $call1022 = $ret;
/* 15898 */                     //
/* 15899 */                     // line 346:
/* 15900 */                     //     s.lookAt(Point(0, 3, 0))
/* 15901 */                     //     ^
/* 15902 */                     //
/* 15903 */                     $currLineNo = 346;
/* 15904 */                     $currColNo = 4;
/* 15905 */ 
/* 15906 */ 
/* 15907 */                     //
/* 15908 */                     // line 347:
/* 15909 */                     //     s.addObject(Sphere(Point(1,3,-10), 2), SimpleSurface(baseColour = (1,1,0)))
/* 15910 */                     //     ^
/* 15911 */                     //
/* 15912 */                     $currLineNo = 347;
/* 15913 */                     $currColNo = 4;
/* 15914 */ 
/* 15915 */                     if (s === undefined) {
/* 15916 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 15917 */                     }
/* 15918 */                     $ret = Sk.abstr.gattr(s, 'addObject', true);
/* 15919 */                     $blk = 12; /* allowing case fallthrough */
/* 15920 */                 case 12:
/* 15921 */                     /* --- function return or resume suspension --- */
/* 15922 */                     if ($ret && $ret.$isSuspension) {
/* 15923 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 347, 4);
/* 15924 */                     }
/* 15925 */                     var $lattr1023 = $ret;
/* 15926 */                     var $loadgbl1024 = Sk.misceval.loadname('Sphere', $gbl);
/* 15927 */                     var $loadgbl1025 = Sk.misceval.loadname('Point', $gbl);
/* 15928 */                     $ret;
/* 15929 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1025, new Sk.builtin.int_(1), new Sk.builtin.int_(3), new Sk.builtin.int_(-10));
/* 15930 */                     $blk = 13; /* allowing case fallthrough */
/* 15931 */                 case 13:
/* 15932 */                     /* --- function return or resume suspension --- */
/* 15933 */                     if ($ret && $ret.$isSuspension) {
/* 15934 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 347, 23);
/* 15935 */                     }
/* 15936 */                     var $call1026 = $ret;
/* 15937 */                     //
/* 15938 */                     // line 347:
/* 15939 */                     //     s.addObject(Sphere(Point(1,3,-10), 2), SimpleSurface(baseColour = (1,1,0)))
/* 15940 */                     //                        ^
/* 15941 */                     //
/* 15942 */                     $currLineNo = 347;
/* 15943 */                     $currColNo = 23;
/* 15944 */ 
/* 15945 */                     $ret;
/* 15946 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1024, $call1026, new Sk.builtin.int_(2));
/* 15947 */                     $blk = 14; /* allowing case fallthrough */
/* 15948 */                 case 14:
/* 15949 */                     /* --- function return or resume suspension --- */
/* 15950 */                     if ($ret && $ret.$isSuspension) {
/* 15951 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 347, 16);
/* 15952 */                     }
/* 15953 */                     var $call1027 = $ret;
/* 15954 */                     //
/* 15955 */                     // line 347:
/* 15956 */                     //     s.addObject(Sphere(Point(1,3,-10), 2), SimpleSurface(baseColour = (1,1,0)))
/* 15957 */                     //                 ^
/* 15958 */                     //
/* 15959 */                     $currLineNo = 347;
/* 15960 */                     $currColNo = 16;
/* 15961 */ 
/* 15962 */                     var $loadgbl1028 = Sk.misceval.loadname('SimpleSurface', $gbl);
/* 15963 */                     var $elem1029 = new Sk.builtin.int_(1);
/* 15964 */                     var $elem1030 = new Sk.builtin.int_(1);
/* 15965 */                     var $elem1031 = new Sk.builtin.int_(0);
/* 15966 */                     var $loadtuple1032 = new Sk.builtins['tuple']([$elem1029, $elem1030, $elem1031]);
/* 15967 */                     $ret;
/* 15968 */                     $ret = Sk.misceval.callOrSuspend($loadgbl1028, undefined, undefined, ['baseColour', $loadtuple1032]);
/* 15969 */                     $blk = 15; /* allowing case fallthrough */
/* 15970 */                 case 15:
/* 15971 */                     /* --- function return or resume suspension --- */
/* 15972 */                     if ($ret && $ret.$isSuspension) {
/* 15973 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 347, 43);
/* 15974 */                     }
/* 15975 */                     var $call1033 = $ret;
/* 15976 */                     //
/* 15977 */                     // line 347:
/* 15978 */                     //     s.addObject(Sphere(Point(1,3,-10), 2), SimpleSurface(baseColour = (1,1,0)))
/* 15979 */                     //                                            ^
/* 15980 */                     //
/* 15981 */                     $currLineNo = 347;
/* 15982 */                     $currColNo = 43;
/* 15983 */ 
/* 15984 */                     $ret;
/* 15985 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1023, $call1027, $call1033);
/* 15986 */                     $blk = 16; /* allowing case fallthrough */
/* 15987 */                 case 16:
/* 15988 */                     /* --- function return or resume suspension --- */
/* 15989 */                     if ($ret && $ret.$isSuspension) {
/* 15990 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 347, 4);
/* 15991 */                     }
/* 15992 */                     var $call1034 = $ret;
/* 15993 */                     //
/* 15994 */                     // line 347:
/* 15995 */                     //     s.addObject(Sphere(Point(1,3,-10), 2), SimpleSurface(baseColour = (1,1,0)))
/* 15996 */                     //     ^
/* 15997 */                     //
/* 15998 */                     $currLineNo = 347;
/* 15999 */                     $currColNo = 4;
/* 16000 */ 
/* 16001 */ 
/* 16002 */                     //
/* 16003 */                     // line 348:
/* 16004 */                     //     for y in range(6):
/* 16005 */                     //     ^
/* 16006 */                     //
/* 16007 */                     $currLineNo = 348;
/* 16008 */                     $currColNo = 4;
/* 16009 */ 
/* 16010 */                     var $loadgbl1035 = Sk.misceval.loadname('range', $gbl);
/* 16011 */                     $ret;
/* 16012 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1035, new Sk.builtin.int_(6));
/* 16013 */                     $blk = 20; /* allowing case fallthrough */
/* 16014 */                 case 20:
/* 16015 */                     /* --- function return or resume suspension --- */
/* 16016 */                     if ($ret && $ret.$isSuspension) {
/* 16017 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 348, 13);
/* 16018 */                     }
/* 16019 */                     var $call1036 = $ret;
/* 16020 */                     //
/* 16021 */                     // line 348:
/* 16022 */                     //     for y in range(6):
/* 16023 */                     //              ^
/* 16024 */                     //
/* 16025 */                     $currLineNo = 348;
/* 16026 */                     $currColNo = 13;
/* 16027 */ 
/* 16028 */                     var $iter1037 = Sk.abstr.iter($call1036);
/* 16029 */                     $blk = 17; /* allowing case fallthrough */
/* 16030 */                 case 17:
/* 16031 */                     /* --- for start --- */
/* 16032 */                     $ret = Sk.abstr.iternext($iter1037, true);
/* 16033 */                     $blk = 21; /* allowing case fallthrough */
/* 16034 */                 case 21:
/* 16035 */                     /* --- function return or resume suspension --- */
/* 16036 */                     if ($ret && $ret.$isSuspension) {
/* 16037 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 348, 4);
/* 16038 */                     }
/* 16039 */                     var $next1038 = $ret;
/* 16040 */                     if ($next1038 === undefined) {
/* 16041 */                         $blk = 18;
/* 16042 */                         continue;
/* 16043 */                     }
/* 16044 */                     y = $next1038;
/* 16045 */                     //
/* 16046 */                     // line 349:
/* 16047 */                     //         s.addObject(Sphere(Point(-3 - y * 0.4, 2.3, -5), 0.4),
/* 16048 */                     //         ^
/* 16049 */                     //
/* 16050 */                     $currLineNo = 349;
/* 16051 */                     $currColNo = 8;
/* 16052 */ 
/* 16053 */                     if (s === undefined) {
/* 16054 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 16055 */                     }
/* 16056 */                     $ret = Sk.abstr.gattr(s, 'addObject', true);
/* 16057 */                     $blk = 22; /* allowing case fallthrough */
/* 16058 */                 case 22:
/* 16059 */                     /* --- function return or resume suspension --- */
/* 16060 */                     if ($ret && $ret.$isSuspension) {
/* 16061 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 349, 8);
/* 16062 */                     }
/* 16063 */                     var $lattr1039 = $ret;
/* 16064 */                     var $loadgbl1040 = Sk.misceval.loadname('Sphere', $gbl);
/* 16065 */                     var $loadgbl1041 = Sk.misceval.loadname('Point', $gbl);
/* 16066 */                     if (y === undefined) {
/* 16067 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 16068 */                     }
/* 16069 */                     var $binop1042 = Sk.abstr.numberBinOp(y, new Sk.builtin.float_(0.4), 'Mult');
/* 16070 */                     var $binop1043 = Sk.abstr.numberBinOp(new Sk.builtin.int_(-3), $binop1042, 'Sub');
/* 16071 */                     $ret;
/* 16072 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1041, $binop1043, new Sk.builtin.float_(2.3), new Sk.builtin.int_(-5));
/* 16073 */                     $blk = 23; /* allowing case fallthrough */
/* 16074 */                 case 23:
/* 16075 */                     /* --- function return or resume suspension --- */
/* 16076 */                     if ($ret && $ret.$isSuspension) {
/* 16077 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 349, 27);
/* 16078 */                     }
/* 16079 */                     var $call1044 = $ret;
/* 16080 */                     //
/* 16081 */                     // line 349:
/* 16082 */                     //         s.addObject(Sphere(Point(-3 - y * 0.4, 2.3, -5), 0.4),
/* 16083 */                     //                            ^
/* 16084 */                     //
/* 16085 */                     $currLineNo = 349;
/* 16086 */                     $currColNo = 27;
/* 16087 */ 
/* 16088 */                     $ret;
/* 16089 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1040, $call1044, new Sk.builtin.float_(0.4));
/* 16090 */                     $blk = 24; /* allowing case fallthrough */
/* 16091 */                 case 24:
/* 16092 */                     /* --- function return or resume suspension --- */
/* 16093 */                     if ($ret && $ret.$isSuspension) {
/* 16094 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 349, 20);
/* 16095 */                     }
/* 16096 */                     var $call1045 = $ret;
/* 16097 */                     //
/* 16098 */                     // line 349:
/* 16099 */                     //         s.addObject(Sphere(Point(-3 - y * 0.4, 2.3, -5), 0.4),
/* 16100 */                     //                     ^
/* 16101 */                     //
/* 16102 */                     $currLineNo = 349;
/* 16103 */                     $currColNo = 20;
/* 16104 */ 
/* 16105 */                     var $loadgbl1046 = Sk.misceval.loadname('SimpleSurface', $gbl);
/* 16106 */                     if (y === undefined) {
/* 16107 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 16108 */                     }
/* 16109 */                     var $binop1047 = Sk.abstr.numberBinOp(y, new Sk.builtin.float_(6), 'Div');
/* 16110 */                     var $elem1048 = $binop1047;
/* 16111 */                     if (y === undefined) {
/* 16112 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/* 16113 */                     }
/* 16114 */                     var $binop1049 = Sk.abstr.numberBinOp(y, new Sk.builtin.float_(6), 'Div');
/* 16115 */                     var $binop1050 = Sk.abstr.numberBinOp(new Sk.builtin.int_(1), $binop1049, 'Sub');
/* 16116 */                     var $elem1051 = $binop1050;
/* 16117 */                     var $elem1052 = new Sk.builtin.float_(0.5);
/* 16118 */                     var $loadtuple1053 = new Sk.builtins['tuple']([$elem1048, $elem1051, $elem1052]);
/* 16119 */                     $ret;
/* 16120 */                     $ret = Sk.misceval.callOrSuspend($loadgbl1046, undefined, undefined, ['baseColour', $loadtuple1053]);
/* 16121 */                     $blk = 25; /* allowing case fallthrough */
/* 16122 */                 case 25:
/* 16123 */                     /* --- function return or resume suspension --- */
/* 16124 */                     if ($ret && $ret.$isSuspension) {
/* 16125 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 350, 20);
/* 16126 */                     }
/* 16127 */                     var $call1054 = $ret;
/* 16128 */                     //
/* 16129 */                     // line 350:
/* 16130 */                     //                     SimpleSurface(baseColour = (y / 6.0, 1 - y / 6.0, 0.5)))
/* 16131 */                     //                     ^
/* 16132 */                     //
/* 16133 */                     $currLineNo = 350;
/* 16134 */                     $currColNo = 20;
/* 16135 */ 
/* 16136 */                     $ret;
/* 16137 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1039, $call1045, $call1054);
/* 16138 */                     $blk = 26; /* allowing case fallthrough */
/* 16139 */                 case 26:
/* 16140 */                     /* --- function return or resume suspension --- */
/* 16141 */                     if ($ret && $ret.$isSuspension) {
/* 16142 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 349, 8);
/* 16143 */                     }
/* 16144 */                     var $call1055 = $ret;
/* 16145 */                     //
/* 16146 */                     // line 349:
/* 16147 */                     //         s.addObject(Sphere(Point(-3 - y * 0.4, 2.3, -5), 0.4),
/* 16148 */                     //         ^
/* 16149 */                     //
/* 16150 */                     $currLineNo = 349;
/* 16151 */                     $currColNo = 8;
/* 16152 */ 
/* 16153 */                     $blk = 17; /* jump */
/* 16154 */                     continue;
/* 16155 */                 case 18:
/* 16156 */                     /* --- for cleanup --- */
/* 16157 */                     $blk = 19; /* allowing case fallthrough */
/* 16158 */                 case 19:
/* 16159 */                     /* --- for end --- */
/* 16160 */                     //
/* 16161 */                     // line 351:
/* 16162 */                     //     s.addObject(Halfspace(Point(0,0,0), Vector.UP), CheckerboardSurface())
/* 16163 */                     //     ^
/* 16164 */                     //
/* 16165 */                     $currLineNo = 351;
/* 16166 */                     $currColNo = 4;
/* 16167 */ 
/* 16168 */                     if (s === undefined) {
/* 16169 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 16170 */                     }
/* 16171 */                     $ret = Sk.abstr.gattr(s, 'addObject', true);
/* 16172 */                     $blk = 27; /* allowing case fallthrough */
/* 16173 */                 case 27:
/* 16174 */                     /* --- function return or resume suspension --- */
/* 16175 */                     if ($ret && $ret.$isSuspension) {
/* 16176 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 4);
/* 16177 */                     }
/* 16178 */                     var $lattr1056 = $ret;
/* 16179 */                     var $loadgbl1057 = Sk.misceval.loadname('Halfspace', $gbl);
/* 16180 */                     var $loadgbl1058 = Sk.misceval.loadname('Point', $gbl);
/* 16181 */                     $ret;
/* 16182 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1058, new Sk.builtin.int_(0), new Sk.builtin.int_(0), new Sk.builtin.int_(0));
/* 16183 */                     $blk = 28; /* allowing case fallthrough */
/* 16184 */                 case 28:
/* 16185 */                     /* --- function return or resume suspension --- */
/* 16186 */                     if ($ret && $ret.$isSuspension) {
/* 16187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 26);
/* 16188 */                     }
/* 16189 */                     var $call1059 = $ret;
/* 16190 */                     //
/* 16191 */                     // line 351:
/* 16192 */                     //     s.addObject(Halfspace(Point(0,0,0), Vector.UP), CheckerboardSurface())
/* 16193 */                     //                           ^
/* 16194 */                     //
/* 16195 */                     $currLineNo = 351;
/* 16196 */                     $currColNo = 26;
/* 16197 */ 
/* 16198 */                     var $loadgbl1060 = Sk.misceval.loadname('Vector', $gbl);
/* 16199 */                     $ret = Sk.abstr.gattr($loadgbl1060, 'UP', true);
/* 16200 */                     $blk = 29; /* allowing case fallthrough */
/* 16201 */                 case 29:
/* 16202 */                     /* --- function return or resume suspension --- */
/* 16203 */                     if ($ret && $ret.$isSuspension) {
/* 16204 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 40);
/* 16205 */                     }
/* 16206 */                     var $lattr1061 = $ret;
/* 16207 */                     $ret;
/* 16208 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1057, $call1059, $lattr1061);
/* 16209 */                     $blk = 30; /* allowing case fallthrough */
/* 16210 */                 case 30:
/* 16211 */                     /* --- function return or resume suspension --- */
/* 16212 */                     if ($ret && $ret.$isSuspension) {
/* 16213 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 16);
/* 16214 */                     }
/* 16215 */                     var $call1062 = $ret;
/* 16216 */                     //
/* 16217 */                     // line 351:
/* 16218 */                     //     s.addObject(Halfspace(Point(0,0,0), Vector.UP), CheckerboardSurface())
/* 16219 */                     //                 ^
/* 16220 */                     //
/* 16221 */                     $currLineNo = 351;
/* 16222 */                     $currColNo = 16;
/* 16223 */ 
/* 16224 */                     var $loadgbl1063 = Sk.misceval.loadname('CheckerboardSurface', $gbl);
/* 16225 */                     $ret;
/* 16226 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1063);
/* 16227 */                     $blk = 31; /* allowing case fallthrough */
/* 16228 */                 case 31:
/* 16229 */                     /* --- function return or resume suspension --- */
/* 16230 */                     if ($ret && $ret.$isSuspension) {
/* 16231 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 52);
/* 16232 */                     }
/* 16233 */                     var $call1064 = $ret;
/* 16234 */                     //
/* 16235 */                     // line 351:
/* 16236 */                     //     s.addObject(Halfspace(Point(0,0,0), Vector.UP), CheckerboardSurface())
/* 16237 */                     //                                                     ^
/* 16238 */                     //
/* 16239 */                     $currLineNo = 351;
/* 16240 */                     $currColNo = 52;
/* 16241 */ 
/* 16242 */                     $ret;
/* 16243 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1056, $call1062, $call1064);
/* 16244 */                     $blk = 32; /* allowing case fallthrough */
/* 16245 */                 case 32:
/* 16246 */                     /* --- function return or resume suspension --- */
/* 16247 */                     if ($ret && $ret.$isSuspension) {
/* 16248 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 351, 4);
/* 16249 */                     }
/* 16250 */                     var $call1065 = $ret;
/* 16251 */                     //
/* 16252 */                     // line 351:
/* 16253 */                     //     s.addObject(Halfspace(Point(0,0,0), Vector.UP), CheckerboardSurface())
/* 16254 */                     //     ^
/* 16255 */                     //
/* 16256 */                     $currLineNo = 351;
/* 16257 */                     $currColNo = 4;
/* 16258 */ 
/* 16259 */ 
/* 16260 */                     //
/* 16261 */                     // line 352:
/* 16262 */                     //     s.render(c)
/* 16263 */                     //     ^
/* 16264 */                     //
/* 16265 */                     $currLineNo = 352;
/* 16266 */                     $currColNo = 4;
/* 16267 */ 
/* 16268 */                     if (s === undefined) {
/* 16269 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 16270 */                     }
/* 16271 */                     $ret = Sk.abstr.gattr(s, 'render', true);
/* 16272 */                     $blk = 33; /* allowing case fallthrough */
/* 16273 */                 case 33:
/* 16274 */                     /* --- function return or resume suspension --- */
/* 16275 */                     if ($ret && $ret.$isSuspension) {
/* 16276 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 352, 4);
/* 16277 */                     }
/* 16278 */                     var $lattr1066 = $ret;
/* 16279 */                     if (c === undefined) {
/* 16280 */                         throw new Sk.builtin.UnboundLocalError('local variable \'c\' referenced before assignment');
/* 16281 */                     }
/* 16282 */                     $ret;
/* 16283 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1066, c);
/* 16284 */                     $blk = 34; /* allowing case fallthrough */
/* 16285 */                 case 34:
/* 16286 */                     /* --- function return or resume suspension --- */
/* 16287 */                     if ($ret && $ret.$isSuspension) {
/* 16288 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 352, 4);
/* 16289 */                     }
/* 16290 */                     var $call1067 = $ret;
/* 16291 */                     //
/* 16292 */                     // line 352:
/* 16293 */                     //     s.render(c)
/* 16294 */                     //     ^
/* 16295 */                     //
/* 16296 */                     $currLineNo = 352;
/* 16297 */                     $currColNo = 4;
/* 16298 */ 
/* 16299 */                     return Sk.builtin.none.none$;
/* 16300 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 16301 */                 }
/* 16302 */             } catch (err) {
/* 16303 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 16304 */                     err = new Sk.builtin.ExternalError(err);
/* 16305 */                 }
/* 16306 */                 err.traceback.push({
/* 16307 */                     lineno: $currLineNo,
/* 16308 */                     colno: $currColNo,
/* 16309 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 16310 */                 });
/* 16311 */                 if ($exc.length > 0) {
/* 16312 */                     $err = err;
/* 16313 */                     $blk = $exc.pop();
/* 16314 */                     continue;
/* 16315 */                 } else {
/* 16316 */                     throw err;
/* 16317 */                 }
/* 16318 */             }
/* 16319 */         }
/* 16320 */     });
/* 16321 */     var $scope1069 = (function $main1070$(n) {
/* 16322 */         var i, t1, t2, time, times; /* locals */
/* 16323 */         var i, i, n, n, t1, t1, t2, t2, time, time, time, times, times, times, $loadgbl1073, $iter1075, $loadgbl1073, $call1074, $iter1075, $loadgbl1077, $loadgbl1079, $iter1081, $loadgbl1079, $call1080, $iter1081, $lattr1083, $loadgbl1085, $lattr1087, $lattr1089, $binop1090;
/* 16324 */         var $wakeFromSuspension = function() {
/* 16325 */             var susp = $scope1069.$wakingSuspension;
/* 16326 */             delete $scope1069.$wakingSuspension;
/* 16327 */             $blk = susp.$blk;
/* 16328 */             $loc = susp.$loc;
/* 16329 */             $gbl = susp.$gbl;
/* 16330 */             $exc = susp.$exc;
/* 16331 */             $err = susp.$err;
/* 16332 */             $postfinally = susp.$postfinally;
/* 16333 */             $currLineNo = susp.$lineno;
/* 16334 */             $currColNo = susp.$colno;
/* 16335 */             Sk.lastYield = Date.now();
/* 16336 */             i = susp.$tmps.i;
/* 16337 */             n = susp.$tmps.n;
/* 16338 */             t1 = susp.$tmps.t1;
/* 16339 */             t2 = susp.$tmps.t2;
/* 16340 */             time = susp.$tmps.time;
/* 16341 */             times = susp.$tmps.times;
/* 16342 */             $loadgbl1073 = susp.$tmps.$loadgbl1073;
/* 16343 */             $iter1075 = susp.$tmps.$iter1075;
/* 16344 */             $call1074 = susp.$tmps.$call1074;
/* 16345 */             $loadgbl1077 = susp.$tmps.$loadgbl1077;
/* 16346 */             $loadgbl1079 = susp.$tmps.$loadgbl1079;
/* 16347 */             $iter1081 = susp.$tmps.$iter1081;
/* 16348 */             $call1080 = susp.$tmps.$call1080;
/* 16349 */             $lattr1083 = susp.$tmps.$lattr1083;
/* 16350 */             $loadgbl1085 = susp.$tmps.$loadgbl1085;
/* 16351 */             $lattr1087 = susp.$tmps.$lattr1087;
/* 16352 */             $lattr1089 = susp.$tmps.$lattr1089;
/* 16353 */             $binop1090 = susp.$tmps.$binop1090;
/* 16354 */             try {
/* 16355 */                 $ret = susp.child.resume();
/* 16356 */             } catch (err) {
/* 16357 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 16358 */                     err = new Sk.builtin.ExternalError(err);
/* 16359 */                 }
/* 16360 */                 err.traceback.push({
/* 16361 */                     lineno: $currLineNo,
/* 16362 */                     colno: $currColNo,
/* 16363 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 16364 */                 });
/* 16365 */                 if ($exc.length > 0) {
/* 16366 */                     $err = err;
/* 16367 */                     $blk = $exc.pop();
/* 16368 */                 } else {
/* 16369 */                     throw err;
/* 16370 */                 }
/* 16371 */             }
/* 16372 */         };
/* 16373 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 16374 */             var susp = new Sk.misceval.Suspension();
/* 16375 */             susp.child = $child;
/* 16376 */             susp.resume = function() {
/* 16377 */                 $scope1069.$wakingSuspension = susp;
/* 16378 */                 return $scope1069();
/* 16379 */             };
/* 16380 */             susp.data = susp.child.data;
/* 16381 */             susp.$blk = $blk;
/* 16382 */             susp.$loc = $loc;
/* 16383 */             susp.$gbl = $gbl;
/* 16384 */             susp.$exc = $exc;
/* 16385 */             susp.$err = $err;
/* 16386 */             susp.$postfinally = $postfinally;
/* 16387 */             susp.$filename = $filename;
/* 16388 */             susp.$lineno = $lineno;
/* 16389 */             susp.$colno = $colno;
/* 16390 */             susp.optional = susp.child.optional;
/* 16391 */             susp.$tmps = {
/* 16392 */                 "i": i,
/* 16393 */                 "n": n,
/* 16394 */                 "t1": t1,
/* 16395 */                 "t2": t2,
/* 16396 */                 "time": time,
/* 16397 */                 "times": times,
/* 16398 */                 "$loadgbl1073": $loadgbl1073,
/* 16399 */                 "$iter1075": $iter1075,
/* 16400 */                 "$call1074": $call1074,
/* 16401 */                 "$loadgbl1077": $loadgbl1077,
/* 16402 */                 "$loadgbl1079": $loadgbl1079,
/* 16403 */                 "$iter1081": $iter1081,
/* 16404 */                 "$call1080": $call1080,
/* 16405 */                 "$lattr1083": $lattr1083,
/* 16406 */                 "$loadgbl1085": $loadgbl1085,
/* 16407 */                 "$lattr1087": $lattr1087,
/* 16408 */                 "$lattr1089": $lattr1089,
/* 16409 */                 "$binop1090": $binop1090
/* 16410 */             };
/* 16411 */             return susp;
/* 16412 */         };
/* 16413 */         var $blk = 0,
/* 16414 */             $exc = [],
/* 16415 */             $loc = {},
/* 16416 */             $gbl = this,
/* 16417 */             $err = undefined,
/* 16418 */             $ret = undefined,
/* 16419 */             $postfinally = undefined,
/* 16420 */             $currLineNo = undefined,
/* 16421 */             $currColNo = undefined;
/* 16422 */         if ($scope1069.$wakingSuspension !== undefined) {
/* 16423 */             $wakeFromSuspension();
/* 16424 */         } else {
/* 16425 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 1, false, false);
/* 16426 */         }
/* 16427 */         while (true) {
/* 16428 */             try {
/* 16429 */                 switch ($blk) {
/* 16430 */                 case 0:
/* 16431 */                     /* --- codeobj entry --- */
/* 16432 */                     if (n === undefined) {
/* 16433 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/* 16434 */                     }
/* 16435 */ 
/* 16436 */                     //
/* 16437 */                     // line 355:
/* 16438 */                     //     import time
/* 16439 */                     //     ^
/* 16440 */                     //
/* 16441 */                     $currLineNo = 355;
/* 16442 */                     $currColNo = 4;
/* 16443 */ 
/* 16444 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/* 16445 */                     $blk = 1; /* allowing case fallthrough */
/* 16446 */                 case 1:
/* 16447 */                     /* --- function return or resume suspension --- */
/* 16448 */                     if ($ret && $ret.$isSuspension) {
/* 16449 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 355, 4);
/* 16450 */                     }
/* 16451 */                     var $module1071 = $ret;
/* 16452 */                     time = $module1071;
/* 16453 */                     //
/* 16454 */                     // line 356:
/* 16455 */                     //     times = []
/* 16456 */                     //     ^
/* 16457 */                     //
/* 16458 */                     $currLineNo = 356;
/* 16459 */                     $currColNo = 4;
/* 16460 */ 
/* 16461 */                     var $loadlist1072 = new Sk.builtins['list']([]);
/* 16462 */                     times = $loadlist1072;
/* 16463 */                     //
/* 16464 */                     // line 357:
/* 16465 */                     //     for i in range(5):
/* 16466 */                     //     ^
/* 16467 */                     //
/* 16468 */                     $currLineNo = 357;
/* 16469 */                     $currColNo = 4;
/* 16470 */ 
/* 16471 */                     var $loadgbl1073 = Sk.misceval.loadname('range', $gbl);
/* 16472 */                     $ret;
/* 16473 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1073, new Sk.builtin.int_(5));
/* 16474 */                     $blk = 5; /* allowing case fallthrough */
/* 16475 */                 case 5:
/* 16476 */                     /* --- function return or resume suspension --- */
/* 16477 */                     if ($ret && $ret.$isSuspension) {
/* 16478 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 357, 13);
/* 16479 */                     }
/* 16480 */                     var $call1074 = $ret;
/* 16481 */                     //
/* 16482 */                     // line 357:
/* 16483 */                     //     for i in range(5):
/* 16484 */                     //              ^
/* 16485 */                     //
/* 16486 */                     $currLineNo = 357;
/* 16487 */                     $currColNo = 13;
/* 16488 */ 
/* 16489 */                     var $iter1075 = Sk.abstr.iter($call1074);
/* 16490 */                     $blk = 2; /* allowing case fallthrough */
/* 16491 */                 case 2:
/* 16492 */                     /* --- for start --- */
/* 16493 */                     $ret = Sk.abstr.iternext($iter1075, true);
/* 16494 */                     $blk = 6; /* allowing case fallthrough */
/* 16495 */                 case 6:
/* 16496 */                     /* --- function return or resume suspension --- */
/* 16497 */                     if ($ret && $ret.$isSuspension) {
/* 16498 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 357, 4);
/* 16499 */                     }
/* 16500 */                     var $next1076 = $ret;
/* 16501 */                     if ($next1076 === undefined) {
/* 16502 */                         $blk = 3;
/* 16503 */                         continue;
/* 16504 */                     }
/* 16505 */                     i = $next1076;
/* 16506 */                     //
/* 16507 */                     // line 358:
/* 16508 */                     //         _main() # warmup
/* 16509 */                     //         ^
/* 16510 */                     //
/* 16511 */                     $currLineNo = 358;
/* 16512 */                     $currColNo = 8;
/* 16513 */ 
/* 16514 */                     var $loadgbl1077 = Sk.misceval.loadname('_main', $gbl);
/* 16515 */                     $ret;
/* 16516 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1077);
/* 16517 */                     $blk = 7; /* allowing case fallthrough */
/* 16518 */                 case 7:
/* 16519 */                     /* --- function return or resume suspension --- */
/* 16520 */                     if ($ret && $ret.$isSuspension) {
/* 16521 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 358, 8);
/* 16522 */                     }
/* 16523 */                     var $call1078 = $ret;
/* 16524 */                     //
/* 16525 */                     // line 358:
/* 16526 */                     //         _main() # warmup
/* 16527 */                     //         ^
/* 16528 */                     //
/* 16529 */                     $currLineNo = 358;
/* 16530 */                     $currColNo = 8;
/* 16531 */ 
/* 16532 */                     $blk = 2; /* jump */
/* 16533 */                     continue;
/* 16534 */                 case 3:
/* 16535 */                     /* --- for cleanup --- */
/* 16536 */                     $blk = 4; /* allowing case fallthrough */
/* 16537 */                 case 4:
/* 16538 */                     /* --- for end --- */
/* 16539 */                     //
/* 16540 */                     // line 359:
/* 16541 */                     //     for i in range(n):
/* 16542 */                     //     ^
/* 16543 */                     //
/* 16544 */                     $currLineNo = 359;
/* 16545 */                     $currColNo = 4;
/* 16546 */ 
/* 16547 */                     var $loadgbl1079 = Sk.misceval.loadname('range', $gbl);
/* 16548 */                     if (n === undefined) {
/* 16549 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/* 16550 */                     }
/* 16551 */                     $ret;
/* 16552 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1079, n);
/* 16553 */                     $blk = 11; /* allowing case fallthrough */
/* 16554 */                 case 11:
/* 16555 */                     /* --- function return or resume suspension --- */
/* 16556 */                     if ($ret && $ret.$isSuspension) {
/* 16557 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 359, 13);
/* 16558 */                     }
/* 16559 */                     var $call1080 = $ret;
/* 16560 */                     //
/* 16561 */                     // line 359:
/* 16562 */                     //     for i in range(n):
/* 16563 */                     //              ^
/* 16564 */                     //
/* 16565 */                     $currLineNo = 359;
/* 16566 */                     $currColNo = 13;
/* 16567 */ 
/* 16568 */                     var $iter1081 = Sk.abstr.iter($call1080);
/* 16569 */                     $blk = 8; /* allowing case fallthrough */
/* 16570 */                 case 8:
/* 16571 */                     /* --- for start --- */
/* 16572 */                     $ret = Sk.abstr.iternext($iter1081, true);
/* 16573 */                     $blk = 12; /* allowing case fallthrough */
/* 16574 */                 case 12:
/* 16575 */                     /* --- function return or resume suspension --- */
/* 16576 */                     if ($ret && $ret.$isSuspension) {
/* 16577 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 359, 4);
/* 16578 */                     }
/* 16579 */                     var $next1082 = $ret;
/* 16580 */                     if ($next1082 === undefined) {
/* 16581 */                         $blk = 9;
/* 16582 */                         continue;
/* 16583 */                     }
/* 16584 */                     i = $next1082;
/* 16585 */                     //
/* 16586 */                     // line 360:
/* 16587 */                     //         t1 = time.time()
/* 16588 */                     //         ^
/* 16589 */                     //
/* 16590 */                     $currLineNo = 360;
/* 16591 */                     $currColNo = 8;
/* 16592 */ 
/* 16593 */                     if (time === undefined) {
/* 16594 */                         throw new Sk.builtin.UnboundLocalError('local variable \'time\' referenced before assignment');
/* 16595 */                     }
/* 16596 */                     $ret = Sk.abstr.gattr(time, 'time', true);
/* 16597 */                     $blk = 13; /* allowing case fallthrough */
/* 16598 */                 case 13:
/* 16599 */                     /* --- function return or resume suspension --- */
/* 16600 */                     if ($ret && $ret.$isSuspension) {
/* 16601 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 360, 13);
/* 16602 */                     }
/* 16603 */                     var $lattr1083 = $ret;
/* 16604 */                     $ret;
/* 16605 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1083);
/* 16606 */                     $blk = 14; /* allowing case fallthrough */
/* 16607 */                 case 14:
/* 16608 */                     /* --- function return or resume suspension --- */
/* 16609 */                     if ($ret && $ret.$isSuspension) {
/* 16610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 360, 13);
/* 16611 */                     }
/* 16612 */                     var $call1084 = $ret;
/* 16613 */                     //
/* 16614 */                     // line 360:
/* 16615 */                     //         t1 = time.time()
/* 16616 */                     //              ^
/* 16617 */                     //
/* 16618 */                     $currLineNo = 360;
/* 16619 */                     $currColNo = 13;
/* 16620 */ 
/* 16621 */                     t1 = $call1084;
/* 16622 */                     //
/* 16623 */                     // line 361:
/* 16624 */                     //         _main()
/* 16625 */                     //         ^
/* 16626 */                     //
/* 16627 */                     $currLineNo = 361;
/* 16628 */                     $currColNo = 8;
/* 16629 */ 
/* 16630 */                     var $loadgbl1085 = Sk.misceval.loadname('_main', $gbl);
/* 16631 */                     $ret;
/* 16632 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl1085);
/* 16633 */                     $blk = 15; /* allowing case fallthrough */
/* 16634 */                 case 15:
/* 16635 */                     /* --- function return or resume suspension --- */
/* 16636 */                     if ($ret && $ret.$isSuspension) {
/* 16637 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 361, 8);
/* 16638 */                     }
/* 16639 */                     var $call1086 = $ret;
/* 16640 */                     //
/* 16641 */                     // line 361:
/* 16642 */                     //         _main()
/* 16643 */                     //         ^
/* 16644 */                     //
/* 16645 */                     $currLineNo = 361;
/* 16646 */                     $currColNo = 8;
/* 16647 */ 
/* 16648 */ 
/* 16649 */                     //
/* 16650 */                     // line 362:
/* 16651 */                     //         t2 = time.time()
/* 16652 */                     //         ^
/* 16653 */                     //
/* 16654 */                     $currLineNo = 362;
/* 16655 */                     $currColNo = 8;
/* 16656 */ 
/* 16657 */                     if (time === undefined) {
/* 16658 */                         throw new Sk.builtin.UnboundLocalError('local variable \'time\' referenced before assignment');
/* 16659 */                     }
/* 16660 */                     $ret = Sk.abstr.gattr(time, 'time', true);
/* 16661 */                     $blk = 16; /* allowing case fallthrough */
/* 16662 */                 case 16:
/* 16663 */                     /* --- function return or resume suspension --- */
/* 16664 */                     if ($ret && $ret.$isSuspension) {
/* 16665 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 362, 13);
/* 16666 */                     }
/* 16667 */                     var $lattr1087 = $ret;
/* 16668 */                     $ret;
/* 16669 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1087);
/* 16670 */                     $blk = 17; /* allowing case fallthrough */
/* 16671 */                 case 17:
/* 16672 */                     /* --- function return or resume suspension --- */
/* 16673 */                     if ($ret && $ret.$isSuspension) {
/* 16674 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 362, 13);
/* 16675 */                     }
/* 16676 */                     var $call1088 = $ret;
/* 16677 */                     //
/* 16678 */                     // line 362:
/* 16679 */                     //         t2 = time.time()
/* 16680 */                     //              ^
/* 16681 */                     //
/* 16682 */                     $currLineNo = 362;
/* 16683 */                     $currColNo = 13;
/* 16684 */ 
/* 16685 */                     t2 = $call1088;
/* 16686 */                     //
/* 16687 */                     // line 363:
/* 16688 */                     //         times.append(t2 - t1)
/* 16689 */                     //         ^
/* 16690 */                     //
/* 16691 */                     $currLineNo = 363;
/* 16692 */                     $currColNo = 8;
/* 16693 */ 
/* 16694 */                     if (times === undefined) {
/* 16695 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/* 16696 */                     }
/* 16697 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/* 16698 */                     $blk = 18; /* allowing case fallthrough */
/* 16699 */                 case 18:
/* 16700 */                     /* --- function return or resume suspension --- */
/* 16701 */                     if ($ret && $ret.$isSuspension) {
/* 16702 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 363, 8);
/* 16703 */                     }
/* 16704 */                     var $lattr1089 = $ret;
/* 16705 */                     if (t2 === undefined) {
/* 16706 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t2\' referenced before assignment');
/* 16707 */                     }
/* 16708 */                     if (t1 === undefined) {
/* 16709 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t1\' referenced before assignment');
/* 16710 */                     }
/* 16711 */                     var $binop1090 = Sk.abstr.numberBinOp(t2, t1, 'Sub');
/* 16712 */                     $ret;
/* 16713 */                     $ret = Sk.misceval.callsimOrSuspend($lattr1089, $binop1090);
/* 16714 */                     $blk = 19; /* allowing case fallthrough */
/* 16715 */                 case 19:
/* 16716 */                     /* --- function return or resume suspension --- */
/* 16717 */                     if ($ret && $ret.$isSuspension) {
/* 16718 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py', 363, 8);
/* 16719 */                     }
/* 16720 */                     var $call1091 = $ret;
/* 16721 */                     //
/* 16722 */                     // line 363:
/* 16723 */                     //         times.append(t2 - t1)
/* 16724 */                     //         ^
/* 16725 */                     //
/* 16726 */                     $currLineNo = 363;
/* 16727 */                     $currColNo = 8;
/* 16728 */ 
/* 16729 */                     $blk = 8; /* jump */
/* 16730 */                     continue;
/* 16731 */                 case 9:
/* 16732 */                     /* --- for cleanup --- */
/* 16733 */                     $blk = 10; /* allowing case fallthrough */
/* 16734 */                 case 10:
/* 16735 */                     /* --- for end --- */
/* 16736 */                     //
/* 16737 */                     // line 364:
/* 16738 */                     //     return times
/* 16739 */                     //     ^
/* 16740 */                     //
/* 16741 */                     $currLineNo = 364;
/* 16742 */                     $currColNo = 4;
/* 16743 */ 
/* 16744 */                     if (times === undefined) {
/* 16745 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/* 16746 */                     }
/* 16747 */                     return times;
/* 16748 */                     return Sk.builtin.none.none$;
/* 16749 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 16750 */                 }
/* 16751 */             } catch (err) {
/* 16752 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 16753 */                     err = new Sk.builtin.ExternalError(err);
/* 16754 */                 }
/* 16755 */                 err.traceback.push({
/* 16756 */                     lineno: $currLineNo,
/* 16757 */                     colno: $currColNo,
/* 16758 */                     filename: '/home/sbaxter/benchmarks/skulpt/raytrace_simple/main.py'
/* 16759 */                 });
/* 16760 */                 if ($exc.length > 0) {
/* 16761 */                     $err = err;
/* 16762 */                     $blk = $exc.pop();
/* 16763 */                     continue;
/* 16764 */                 } else {
/* 16765 */                     throw err;
/* 16766 */                 }
/* 16767 */             }
/* 16768 */         }
/* 16769 */     });
/* 16770 */     return $scope120;
/* 16771 */ }();
