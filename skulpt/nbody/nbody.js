/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname247, $loadname248, $loadname247, $loadname248, $lattr249, $loadname247, $loadname248, $lattr249, $call250, $loadname252, $loadname253, $loadname397;
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
/*    16 */             $loadname247 = susp.$tmps.$loadname247;
/*    17 */             $loadname248 = susp.$tmps.$loadname248;
/*    18 */             $lattr249 = susp.$tmps.$lattr249;
/*    19 */             $call250 = susp.$tmps.$call250;
/*    20 */             $loadname252 = susp.$tmps.$loadname252;
/*    21 */             $loadname253 = susp.$tmps.$loadname253;
/*    22 */             $loadname397 = susp.$tmps.$loadname397;
/*    23 */             try {
/*    24 */                 $ret = susp.child.resume();
/*    25 */             } catch (err) {
/*    26 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    27 */                     err = new Sk.builtin.ExternalError(err);
/*    28 */                 }
/*    29 */                 err.traceback.push({
/*    30 */                     lineno: $currLineNo,
/*    31 */                     colno: $currColNo,
/*    32 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*    33 */                 });
/*    34 */                 if ($exc.length > 0) {
/*    35 */                     $err = err;
/*    36 */                     $blk = $exc.pop();
/*    37 */                 } else {
/*    38 */                     throw err;
/*    39 */                 }
/*    40 */             }
/*    41 */         };
/*    42 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    43 */             var susp = new Sk.misceval.Suspension();
/*    44 */             susp.child = $child;
/*    45 */             susp.resume = function() {
/*    46 */                 $scope120.$wakingSuspension = susp;
/*    47 */                 return $scope120();
/*    48 */             };
/*    49 */             susp.data = susp.child.data;
/*    50 */             susp.$blk = $blk;
/*    51 */             susp.$loc = $loc;
/*    52 */             susp.$gbl = $gbl;
/*    53 */             susp.$exc = $exc;
/*    54 */             susp.$err = $err;
/*    55 */             susp.$postfinally = $postfinally;
/*    56 */             susp.$filename = $filename;
/*    57 */             susp.$lineno = $lineno;
/*    58 */             susp.$colno = $colno;
/*    59 */             susp.optional = susp.child.optional;
/*    60 */             susp.$tmps = {
/*    61 */                 "$loadname247": $loadname247,
/*    62 */                 "$loadname248": $loadname248,
/*    63 */                 "$lattr249": $lattr249,
/*    64 */                 "$call250": $call250,
/*    65 */                 "$loadname252": $loadname252,
/*    66 */                 "$loadname253": $loadname253,
/*    67 */                 "$loadname397": $loadname397
/*    68 */             };
/*    69 */             return susp;
/*    70 */         };
/*    71 */         var $gbl = {},
/*    72 */             $blk = 0,
/*    73 */             $exc = [],
/*    74 */             $loc = $gbl,
/*    75 */             $err = undefined;
/*    76 */         $gbl.__name__ = $modname;
/*    77 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/nbody/main.py');
/*    78 */         var $ret = undefined,
/*    79 */             $postfinally = undefined,
/*    80 */             $currLineNo = undefined,
/*    81 */             $currColNo = undefined;
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
/*    98 */                 switch ($blk) {
/*    99 */                 case 0:
/*   100 */                     /* --- module entry --- */
/*   101 */                     //
/*   102 */                     // line 8:
/*   103 */                     // import time
/*   104 */                     // ^
/*   105 */                     //
/*   106 */                     $currLineNo = 8;
/*   107 */                     $currColNo = 0;
/*   108 */ 
/*   109 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   110 */                     $blk = 1; /* allowing case fallthrough */
/*   111 */                 case 1:
/*   112 */                     /* --- function return or resume suspension --- */
/*   113 */                     if ($ret && $ret.$isSuspension) {
/*   114 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 8, 0);
/*   115 */                     }
/*   116 */                     var $module121 = $ret;
/*   117 */                     $loc.time = $module121;
/*   118 */                     //
/*   119 */                     // line 10:
/*   120 */                     // def combinations(l):
/*   121 */                     // ^
/*   122 */                     //
/*   123 */                     $currLineNo = 10;
/*   124 */                     $currColNo = 0;
/*   125 */ 
/*   126 */                     $scope122.co_name = new Sk.builtins['str']('combinations');
/*   127 */                     $scope122.co_varnames = ['l'];
/*   128 */                     var $funcobj143 = new Sk.builtins['function']($scope122, $gbl);
/*   129 */                     $loc.combinations = $funcobj143;
/*   130 */                     //
/*   131 */                     // line 18:
/*   132 */                     // PI = 3.14159265358979323
/*   133 */                     // ^
/*   134 */                     //
/*   135 */                     $currLineNo = 18;
/*   136 */                     $currColNo = 0;
/*   137 */ 
/*   138 */                     $loc.PI = new Sk.builtin.float_(3.141592653589793);
/*   139 */                     //
/*   140 */                     // line 19:
/*   141 */                     // SOLAR_MASS = 4 * PI * PI
/*   142 */                     // ^
/*   143 */                     //
/*   144 */                     $currLineNo = 19;
/*   145 */                     $currColNo = 0;
/*   146 */ 
/*   147 */                     var $loadname144 = $loc.PI !== undefined ? $loc.PI : Sk.misceval.loadname('PI', $gbl);;
/*   148 */                     var $binop145 = Sk.abstr.numberBinOp(new Sk.builtin.int_(4), $loadname144, 'Mult');
/*   149 */                     var $loadname146 = $loc.PI !== undefined ? $loc.PI : Sk.misceval.loadname('PI', $gbl);;
/*   150 */                     var $binop147 = Sk.abstr.numberBinOp($binop145, $loadname146, 'Mult');
/*   151 */                     $loc.SOLAR_MASS = $binop147;
/*   152 */                     //
/*   153 */                     // line 20:
/*   154 */                     // DAYS_PER_YEAR = 365.24
/*   155 */                     // ^
/*   156 */                     //
/*   157 */                     $currLineNo = 20;
/*   158 */                     $currColNo = 0;
/*   159 */ 
/*   160 */                     $loc.DAYS_PER_YEAR = new Sk.builtin.float_(365.24);
/*   161 */                     //
/*   162 */                     // line 22:
/*   163 */                     // BODIES = {
/*   164 */                     // ^
/*   165 */                     //
/*   166 */                     $currLineNo = 22;
/*   167 */                     $currColNo = 0;
/*   168 */ 
/*   169 */                     var $elem148 = new Sk.builtin.float_(0);
/*   170 */                     var $elem149 = new Sk.builtin.float_(0);
/*   171 */                     var $elem150 = new Sk.builtin.float_(0);
/*   172 */                     var $loadlist151 = new Sk.builtins['list']([$elem148, $elem149, $elem150]);
/*   173 */                     var $elem152 = $loadlist151;
/*   174 */                     var $elem153 = new Sk.builtin.float_(0);
/*   175 */                     var $elem154 = new Sk.builtin.float_(0);
/*   176 */                     var $elem155 = new Sk.builtin.float_(0);
/*   177 */                     var $loadlist156 = new Sk.builtins['list']([$elem153, $elem154, $elem155]);
/*   178 */                     var $elem157 = $loadlist156;
/*   179 */                     var $loadname158 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   180 */                     var $elem159 = $loadname158;
/*   181 */                     var $loadtuple160 = new Sk.builtins['tuple']([$elem152, $elem157, $elem159]);
/*   182 */                     var $str161 = new Sk.builtins['str']('sun');
/*   183 */                     var $elem162 = new Sk.builtin.float_(4.841431442464721);
/*   184 */                     var $elem163 = new Sk.builtin.float_(-1.1603200440274284);
/*   185 */                     var $elem164 = new Sk.builtin.float_(-0.10362204447112311);
/*   186 */                     var $loadlist165 = new Sk.builtins['list']([$elem162, $elem163, $elem164]);
/*   187 */                     var $elem166 = $loadlist165;
/*   188 */                     var $loadname167 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   189 */                     var $binop168 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.001660076642744037), $loadname167, 'Mult');
/*   190 */                     var $elem169 = $binop168;
/*   191 */                     var $loadname170 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   192 */                     var $binop171 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.007699011184197404), $loadname170, 'Mult');
/*   193 */                     var $elem172 = $binop171;
/*   194 */                     var $loadname173 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   195 */                     var $binop174 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.0000690460016972063), $loadname173, 'Mult');
/*   196 */                     var $elem175 = $binop174;
/*   197 */                     var $loadlist176 = new Sk.builtins['list']([$elem169, $elem172, $elem175]);
/*   198 */                     var $elem177 = $loadlist176;
/*   199 */                     var $loadname178 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   200 */                     var $binop179 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0009547919384243266), $loadname178, 'Mult');
/*   201 */                     var $elem180 = $binop179;
/*   202 */                     var $loadtuple181 = new Sk.builtins['tuple']([$elem166, $elem177, $elem180]);
/*   203 */                     var $str182 = new Sk.builtins['str']('jupiter');
/*   204 */                     var $elem183 = new Sk.builtin.float_(8.34336671824458);
/*   205 */                     var $elem184 = new Sk.builtin.float_(4.124798564124305);
/*   206 */                     var $elem185 = new Sk.builtin.float_(-0.4035234171143214);
/*   207 */                     var $loadlist186 = new Sk.builtins['list']([$elem183, $elem184, $elem185]);
/*   208 */                     var $elem187 = $loadlist186;
/*   209 */                     var $loadname188 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   210 */                     var $binop189 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.002767425107268624), $loadname188, 'Mult');
/*   211 */                     var $elem190 = $binop189;
/*   212 */                     var $loadname191 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   213 */                     var $binop192 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.004998528012349172), $loadname191, 'Mult');
/*   214 */                     var $elem193 = $binop192;
/*   215 */                     var $loadname194 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   216 */                     var $binop195 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.000023041729757376393), $loadname194, 'Mult');
/*   217 */                     var $elem196 = $binop195;
/*   218 */                     var $loadlist197 = new Sk.builtins['list']([$elem190, $elem193, $elem196]);
/*   219 */                     var $elem198 = $loadlist197;
/*   220 */                     var $loadname199 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   221 */                     var $binop200 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0002858859806661308), $loadname199, 'Mult');
/*   222 */                     var $elem201 = $binop200;
/*   223 */                     var $loadtuple202 = new Sk.builtins['tuple']([$elem187, $elem198, $elem201]);
/*   224 */                     var $str203 = new Sk.builtins['str']('saturn');
/*   225 */                     var $elem204 = new Sk.builtin.float_(12.894369562139131);
/*   226 */                     var $elem205 = new Sk.builtin.float_(-15.111151401698631);
/*   227 */                     var $elem206 = new Sk.builtin.float_(-0.22330757889265573);
/*   228 */                     var $loadlist207 = new Sk.builtins['list']([$elem204, $elem205, $elem206]);
/*   229 */                     var $elem208 = $loadlist207;
/*   230 */                     var $loadname209 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   231 */                     var $binop210 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.002964601375647616), $loadname209, 'Mult');
/*   232 */                     var $elem211 = $binop210;
/*   233 */                     var $loadname212 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   234 */                     var $binop213 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0023784717395948095), $loadname212, 'Mult');
/*   235 */                     var $elem214 = $binop213;
/*   236 */                     var $loadname215 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   237 */                     var $binop216 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.000029658956854023756), $loadname215, 'Mult');
/*   238 */                     var $elem217 = $binop216;
/*   239 */                     var $loadlist218 = new Sk.builtins['list']([$elem211, $elem214, $elem217]);
/*   240 */                     var $elem219 = $loadlist218;
/*   241 */                     var $loadname220 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   242 */                     var $binop221 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.00004366244043351563), $loadname220, 'Mult');
/*   243 */                     var $elem222 = $binop221;
/*   244 */                     var $loadtuple223 = new Sk.builtins['tuple']([$elem208, $elem219, $elem222]);
/*   245 */                     var $str224 = new Sk.builtins['str']('uranus');
/*   246 */                     var $elem225 = new Sk.builtin.float_(15.379697114850917);
/*   247 */                     var $elem226 = new Sk.builtin.float_(-25.919314609987964);
/*   248 */                     var $elem227 = new Sk.builtin.float_(0.17925877295037118);
/*   249 */                     var $loadlist228 = new Sk.builtins['list']([$elem225, $elem226, $elem227]);
/*   250 */                     var $elem229 = $loadlist228;
/*   251 */                     var $loadname230 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   252 */                     var $binop231 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0026806777249038932), $loadname230, 'Mult');
/*   253 */                     var $elem232 = $binop231;
/*   254 */                     var $loadname233 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   255 */                     var $binop234 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.001628241700382423), $loadname233, 'Mult');
/*   256 */                     var $elem235 = $binop234;
/*   257 */                     var $loadname236 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   258 */                     var $binop237 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.00009515922545197159), $loadname236, 'Mult');
/*   259 */                     var $elem238 = $binop237;
/*   260 */                     var $loadlist239 = new Sk.builtins['list']([$elem232, $elem235, $elem238]);
/*   261 */                     var $elem240 = $loadlist239;
/*   262 */                     var $loadname241 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   263 */                     var $binop242 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.000051513890204661145), $loadname241, 'Mult');
/*   264 */                     var $elem243 = $binop242;
/*   265 */                     var $loadtuple244 = new Sk.builtins['tuple']([$elem229, $elem240, $elem243]);
/*   266 */                     var $str245 = new Sk.builtins['str']('neptune');
/*   267 */                     var $loaddict246 = new Sk.builtins['dict']([$str161, $loadtuple160, $str182, $loadtuple181, $str203, $loadtuple202, $str224, $loadtuple223, $str245, $loadtuple244]);
/*   268 */                     $loc.BODIES = $loaddict246;
/*   269 */                     //
/*   270 */                     // line 58:
/*   271 */                     // SYSTEM = list(BODIES.values())
/*   272 */                     // ^
/*   273 */                     //
/*   274 */                     $currLineNo = 58;
/*   275 */                     $currColNo = 0;
/*   276 */ 
/*   277 */                     var $loadname247 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   278 */                     var $loadname248 = $loc.BODIES !== undefined ? $loc.BODIES : Sk.misceval.loadname('BODIES', $gbl);;
/*   279 */                     $ret = Sk.abstr.gattr($loadname248, 'values', true);
/*   280 */                     $blk = 2; /* allowing case fallthrough */
/*   281 */                 case 2:
/*   282 */                     /* --- function return or resume suspension --- */
/*   283 */                     if ($ret && $ret.$isSuspension) {
/*   284 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 14);
/*   285 */                     }
/*   286 */                     var $lattr249 = $ret;
/*   287 */                     $ret;
/*   288 */                     $ret = Sk.misceval.callsimOrSuspend($lattr249);
/*   289 */                     $blk = 3; /* allowing case fallthrough */
/*   290 */                 case 3:
/*   291 */                     /* --- function return or resume suspension --- */
/*   292 */                     if ($ret && $ret.$isSuspension) {
/*   293 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 14);
/*   294 */                     }
/*   295 */                     var $call250 = $ret;
/*   296 */                     //
/*   297 */                     // line 58:
/*   298 */                     // SYSTEM = list(BODIES.values())
/*   299 */                     //               ^
/*   300 */                     //
/*   301 */                     $currLineNo = 58;
/*   302 */                     $currColNo = 14;
/*   303 */ 
/*   304 */                     $ret;
/*   305 */                     $ret = Sk.misceval.callsimOrSuspend($loadname247, $call250);
/*   306 */                     $blk = 4; /* allowing case fallthrough */
/*   307 */                 case 4:
/*   308 */                     /* --- function return or resume suspension --- */
/*   309 */                     if ($ret && $ret.$isSuspension) {
/*   310 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 9);
/*   311 */                     }
/*   312 */                     var $call251 = $ret;
/*   313 */                     //
/*   314 */                     // line 58:
/*   315 */                     // SYSTEM = list(BODIES.values())
/*   316 */                     //          ^
/*   317 */                     //
/*   318 */                     $currLineNo = 58;
/*   319 */                     $currColNo = 9;
/*   320 */ 
/*   321 */                     $loc.SYSTEM = $call251;
/*   322 */                     //
/*   323 */                     // line 59:
/*   324 */                     // PAIRS = combinations(SYSTEM)
/*   325 */                     // ^
/*   326 */                     //
/*   327 */                     $currLineNo = 59;
/*   328 */                     $currColNo = 0;
/*   329 */ 
/*   330 */                     var $loadname252 = $loc.combinations !== undefined ? $loc.combinations : Sk.misceval.loadname('combinations', $gbl);;
/*   331 */                     var $loadname253 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   332 */                     $ret;
/*   333 */                     $ret = Sk.misceval.callsimOrSuspend($loadname252, $loadname253);
/*   334 */                     $blk = 5; /* allowing case fallthrough */
/*   335 */                 case 5:
/*   336 */                     /* --- function return or resume suspension --- */
/*   337 */                     if ($ret && $ret.$isSuspension) {
/*   338 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 59, 8);
/*   339 */                     }
/*   340 */                     var $call254 = $ret;
/*   341 */                     //
/*   342 */                     // line 59:
/*   343 */                     // PAIRS = combinations(SYSTEM)
/*   344 */                     //         ^
/*   345 */                     //
/*   346 */                     $currLineNo = 59;
/*   347 */                     $currColNo = 8;
/*   348 */ 
/*   349 */                     $loc.PAIRS = $call254;
/*   350 */                     //
/*   351 */                     // line 62:
/*   352 */                     // def advance(dt, n, bodies=SYSTEM, pairs=PAIRS):
/*   353 */                     // ^
/*   354 */                     //
/*   355 */                     $currLineNo = 62;
/*   356 */                     $currColNo = 0;
/*   357 */ 
/*   358 */                     var $loadname255 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   359 */                     var $loadname256 = $loc.PAIRS !== undefined ? $loc.PAIRS : Sk.misceval.loadname('PAIRS', $gbl);;
/*   360 */                     $scope257.co_name = new Sk.builtins['str']('advance');
/*   361 */                     $scope257.$defaults = [$loadname255, $loadname256];
/*   362 */                     $scope257.co_varnames = ['dt', 'n', 'bodies', 'pairs'];
/*   363 */                     var $funcobj313 = new Sk.builtins['function']($scope257, $gbl);
/*   364 */                     $loc.advance = $funcobj313;
/*   365 */                     //
/*   366 */                     // line 85:
/*   367 */                     // def report_energy(bodies=SYSTEM, pairs=PAIRS, e=0.0):
/*   368 */                     // ^
/*   369 */                     //
/*   370 */                     $currLineNo = 85;
/*   371 */                     $currColNo = 0;
/*   372 */ 
/*   373 */                     var $loadname314 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   374 */                     var $loadname315 = $loc.PAIRS !== undefined ? $loc.PAIRS : Sk.misceval.loadname('PAIRS', $gbl);;
/*   375 */                     $scope316.co_name = new Sk.builtins['str']('report_energy');
/*   376 */                     $scope316.$defaults = [$loadname314, $loadname315, new Sk.builtin.float_(0)];
/*   377 */                     $scope316.co_varnames = ['bodies', 'pairs', 'e'];
/*   378 */                     var $funcobj349 = new Sk.builtins['function']($scope316, $gbl);
/*   379 */                     $loc.report_energy = $funcobj349;
/*   380 */                     //
/*   381 */                     // line 96:
/*   382 */                     // def offset_momentum(ref, bodies=SYSTEM, px=0.0, py=0.0, pz=0.0):
/*   383 */                     // ^
/*   384 */                     //
/*   385 */                     $currLineNo = 96;
/*   386 */                     $currColNo = 0;
/*   387 */ 
/*   388 */                     var $loadname350 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   389 */                     $scope351.co_name = new Sk.builtins['str']('offset_momentum');
/*   390 */                     $scope351.$defaults = [$loadname350, new Sk.builtin.float_(0), new Sk.builtin.float_(0), new Sk.builtin.float_(0)];
/*   391 */                     $scope351.co_varnames = ['ref', 'bodies', 'px', 'py', 'pz'];
/*   392 */                     var $funcobj367 = new Sk.builtins['function']($scope351, $gbl);
/*   393 */                     $loc.offset_momentum = $funcobj367;
/*   394 */                     //
/*   395 */                     // line 107:
/*   396 */                     // NUMBER_OF_ITERATIONS = 20000
/*   397 */                     // ^
/*   398 */                     //
/*   399 */                     $currLineNo = 107;
/*   400 */                     $currColNo = 0;
/*   401 */ 
/*   402 */                     $loc.NUMBER_OF_ITERATIONS = new Sk.builtin.int_(20000);
/*   403 */                     //
/*   404 */                     // line 109:
/*   405 */                     // def main(n, ref='sun'):
/*   406 */                     // ^
/*   407 */                     //
/*   408 */                     $currLineNo = 109;
/*   409 */                     $currColNo = 0;
/*   410 */ 
/*   411 */                     var $str368 = new Sk.builtins['str']('sun');
/*   412 */                     $scope369.co_name = new Sk.builtins['str']('main');
/*   413 */                     $scope369.$defaults = [$str368];
/*   414 */                     $scope369.co_varnames = ['n', 'ref'];
/*   415 */                     var $funcobj396 = new Sk.builtins['function']($scope369, $gbl);
/*   416 */                     $loc.main = $funcobj396;
/*   417 */                     //
/*   418 */                     // line 123:
/*   419 */                     // main(10)
/*   420 */                     // ^
/*   421 */                     //
/*   422 */                     $currLineNo = 123;
/*   423 */                     $currColNo = 0;
/*   424 */ 
/*   425 */                     var $loadname397 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   426 */                     $ret;
/*   427 */                     $ret = Sk.misceval.callsimOrSuspend($loadname397, new Sk.builtin.int_(10));
/*   428 */                     $blk = 6; /* allowing case fallthrough */
/*   429 */                 case 6:
/*   430 */                     /* --- function return or resume suspension --- */
/*   431 */                     if ($ret && $ret.$isSuspension) {
/*   432 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 123, 0);
/*   433 */                     }
/*   434 */                     var $call398 = $ret;
/*   435 */                     //
/*   436 */                     // line 123:
/*   437 */                     // main(10)
/*   438 */                     // ^
/*   439 */                     //
/*   440 */                     $currLineNo = 123;
/*   441 */                     $currColNo = 0;
/*   442 */ 
/*   443 */                     return $loc;
/*   444 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   445 */                 }
/*   446 */             } catch (err) {
/*   447 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   448 */                     err = new Sk.builtin.ExternalError(err);
/*   449 */                 }
/*   450 */                 err.traceback.push({
/*   451 */                     lineno: $currLineNo,
/*   452 */                     colno: $currColNo,
/*   453 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   454 */                 });
/*   455 */                 if ($exc.length > 0) {
/*   456 */                     $err = err;
/*   457 */                     $blk = $exc.pop();
/*   458 */                     continue;
/*   459 */                 } else {
/*   460 */                     throw err;
/*   461 */                 }
/*   462 */             }
/*   463 */         }
/*   464 */     });
/*   465 */     var $scope122 = (function $combinations123$(l) {
/*   466 */         var ls, result, x, y; /* locals */
/*   467 */         var l, l, l, l, ls, ls, result, result, result, x, x, x, y, y, $loadgbl125, $loadgbl126, $loadgbl125, $loadgbl126, $call127, $binop128, $iter130, $loadgbl125, $loadgbl126, $call127, $binop128, $call129, $iter130, $binop132, $slice133, $iter135, $iter135, $lattr137, $lattr137, $lsubscr138, $elem139, $elem140, $loadtuple141;
/*   468 */         var $wakeFromSuspension = function() {
/*   469 */             var susp = $scope122.$wakingSuspension;
/*   470 */             delete $scope122.$wakingSuspension;
/*   471 */             $blk = susp.$blk;
/*   472 */             $loc = susp.$loc;
/*   473 */             $gbl = susp.$gbl;
/*   474 */             $exc = susp.$exc;
/*   475 */             $err = susp.$err;
/*   476 */             $postfinally = susp.$postfinally;
/*   477 */             $currLineNo = susp.$lineno;
/*   478 */             $currColNo = susp.$colno;
/*   479 */             Sk.lastYield = Date.now();
/*   480 */             l = susp.$tmps.l;
/*   481 */             ls = susp.$tmps.ls;
/*   482 */             result = susp.$tmps.result;
/*   483 */             x = susp.$tmps.x;
/*   484 */             y = susp.$tmps.y;
/*   485 */             $loadgbl125 = susp.$tmps.$loadgbl125;
/*   486 */             $loadgbl126 = susp.$tmps.$loadgbl126;
/*   487 */             $call127 = susp.$tmps.$call127;
/*   488 */             $binop128 = susp.$tmps.$binop128;
/*   489 */             $iter130 = susp.$tmps.$iter130;
/*   490 */             $call129 = susp.$tmps.$call129;
/*   491 */             $binop132 = susp.$tmps.$binop132;
/*   492 */             $slice133 = susp.$tmps.$slice133;
/*   493 */             $iter135 = susp.$tmps.$iter135;
/*   494 */             $lattr137 = susp.$tmps.$lattr137;
/*   495 */             $lsubscr138 = susp.$tmps.$lsubscr138;
/*   496 */             $elem139 = susp.$tmps.$elem139;
/*   497 */             $elem140 = susp.$tmps.$elem140;
/*   498 */             $loadtuple141 = susp.$tmps.$loadtuple141;
/*   499 */             try {
/*   500 */                 $ret = susp.child.resume();
/*   501 */             } catch (err) {
/*   502 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   503 */                     err = new Sk.builtin.ExternalError(err);
/*   504 */                 }
/*   505 */                 err.traceback.push({
/*   506 */                     lineno: $currLineNo,
/*   507 */                     colno: $currColNo,
/*   508 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   509 */                 });
/*   510 */                 if ($exc.length > 0) {
/*   511 */                     $err = err;
/*   512 */                     $blk = $exc.pop();
/*   513 */                 } else {
/*   514 */                     throw err;
/*   515 */                 }
/*   516 */             }
/*   517 */         };
/*   518 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   519 */             var susp = new Sk.misceval.Suspension();
/*   520 */             susp.child = $child;
/*   521 */             susp.resume = function() {
/*   522 */                 $scope122.$wakingSuspension = susp;
/*   523 */                 return $scope122();
/*   524 */             };
/*   525 */             susp.data = susp.child.data;
/*   526 */             susp.$blk = $blk;
/*   527 */             susp.$loc = $loc;
/*   528 */             susp.$gbl = $gbl;
/*   529 */             susp.$exc = $exc;
/*   530 */             susp.$err = $err;
/*   531 */             susp.$postfinally = $postfinally;
/*   532 */             susp.$filename = $filename;
/*   533 */             susp.$lineno = $lineno;
/*   534 */             susp.$colno = $colno;
/*   535 */             susp.optional = susp.child.optional;
/*   536 */             susp.$tmps = {
/*   537 */                 "l": l,
/*   538 */                 "ls": ls,
/*   539 */                 "result": result,
/*   540 */                 "x": x,
/*   541 */                 "y": y,
/*   542 */                 "$loadgbl125": $loadgbl125,
/*   543 */                 "$loadgbl126": $loadgbl126,
/*   544 */                 "$call127": $call127,
/*   545 */                 "$binop128": $binop128,
/*   546 */                 "$iter130": $iter130,
/*   547 */                 "$call129": $call129,
/*   548 */                 "$binop132": $binop132,
/*   549 */                 "$slice133": $slice133,
/*   550 */                 "$iter135": $iter135,
/*   551 */                 "$lattr137": $lattr137,
/*   552 */                 "$lsubscr138": $lsubscr138,
/*   553 */                 "$elem139": $elem139,
/*   554 */                 "$elem140": $elem140,
/*   555 */                 "$loadtuple141": $loadtuple141
/*   556 */             };
/*   557 */             return susp;
/*   558 */         };
/*   559 */         var $blk = 0,
/*   560 */             $exc = [],
/*   561 */             $loc = {},
/*   562 */             $gbl = this,
/*   563 */             $err = undefined,
/*   564 */             $ret = undefined,
/*   565 */             $postfinally = undefined,
/*   566 */             $currLineNo = undefined,
/*   567 */             $currColNo = undefined;
/*   568 */         if ($scope122.$wakingSuspension !== undefined) {
/*   569 */             $wakeFromSuspension();
/*   570 */         } else {
/*   571 */             Sk.builtin.pyCheckArgs("combinations", arguments, 1, 1, false, false);
/*   572 */         }
/*   573 */         while (true) {
/*   574 */             try {
/*   575 */                 switch ($blk) {
/*   576 */                 case 0:
/*   577 */                     /* --- codeobj entry --- */
/*   578 */                     if (l === undefined) {
/*   579 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   580 */                     }
/*   581 */ 
/*   582 */                     //
/*   583 */                     // line 11:
/*   584 */                     //     result = []
/*   585 */                     //     ^
/*   586 */                     //
/*   587 */                     $currLineNo = 11;
/*   588 */                     $currColNo = 4;
/*   589 */ 
/*   590 */                     var $loadlist124 = new Sk.builtins['list']([]);
/*   591 */                     result = $loadlist124;
/*   592 */                     //
/*   593 */                     // line 12:
/*   594 */                     //     for x in range(len(l) - 1):
/*   595 */                     //     ^
/*   596 */                     //
/*   597 */                     $currLineNo = 12;
/*   598 */                     $currColNo = 4;
/*   599 */ 
/*   600 */                     var $loadgbl125 = Sk.misceval.loadname('range', $gbl);
/*   601 */                     var $loadgbl126 = Sk.misceval.loadname('len', $gbl);
/*   602 */                     if (l === undefined) {
/*   603 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   604 */                     }
/*   605 */                     $ret;
/*   606 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl126, l);
/*   607 */                     $blk = 4; /* allowing case fallthrough */
/*   608 */                 case 4:
/*   609 */                     /* --- function return or resume suspension --- */
/*   610 */                     if ($ret && $ret.$isSuspension) {
/*   611 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 19);
/*   612 */                     }
/*   613 */                     var $call127 = $ret;
/*   614 */                     //
/*   615 */                     // line 12:
/*   616 */                     //     for x in range(len(l) - 1):
/*   617 */                     //                    ^
/*   618 */                     //
/*   619 */                     $currLineNo = 12;
/*   620 */                     $currColNo = 19;
/*   621 */ 
/*   622 */                     var $binop128 = Sk.abstr.numberBinOp($call127, new Sk.builtin.int_(1), 'Sub');
/*   623 */                     $ret;
/*   624 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl125, $binop128);
/*   625 */                     $blk = 5; /* allowing case fallthrough */
/*   626 */                 case 5:
/*   627 */                     /* --- function return or resume suspension --- */
/*   628 */                     if ($ret && $ret.$isSuspension) {
/*   629 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 13);
/*   630 */                     }
/*   631 */                     var $call129 = $ret;
/*   632 */                     //
/*   633 */                     // line 12:
/*   634 */                     //     for x in range(len(l) - 1):
/*   635 */                     //              ^
/*   636 */                     //
/*   637 */                     $currLineNo = 12;
/*   638 */                     $currColNo = 13;
/*   639 */ 
/*   640 */                     var $iter130 = Sk.abstr.iter($call129);
/*   641 */                     $blk = 1; /* allowing case fallthrough */
/*   642 */                 case 1:
/*   643 */                     /* --- for start --- */
/*   644 */                     $ret = Sk.abstr.iternext($iter130, true);
/*   645 */                     $blk = 6; /* allowing case fallthrough */
/*   646 */                 case 6:
/*   647 */                     /* --- function return or resume suspension --- */
/*   648 */                     if ($ret && $ret.$isSuspension) {
/*   649 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 4);
/*   650 */                     }
/*   651 */                     var $next131 = $ret;
/*   652 */                     if ($next131 === undefined) {
/*   653 */                         $blk = 2;
/*   654 */                         continue;
/*   655 */                     }
/*   656 */                     x = $next131;
/*   657 */                     //
/*   658 */                     // line 13:
/*   659 */                     //         ls = l[x+1:]
/*   660 */                     //         ^
/*   661 */                     //
/*   662 */                     $currLineNo = 13;
/*   663 */                     $currColNo = 8;
/*   664 */ 
/*   665 */                     if (l === undefined) {
/*   666 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   667 */                     }
/*   668 */                     if (x === undefined) {
/*   669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   670 */                     }
/*   671 */                     var $binop132 = Sk.abstr.numberBinOp(x, new Sk.builtin.int_(1), 'Add');
/*   672 */                     var $slice133 = new Sk.builtins['slice']($binop132, new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   673 */                     $ret = Sk.abstr.objectGetItem(l, $slice133, true);
/*   674 */                     $blk = 7; /* allowing case fallthrough */
/*   675 */                 case 7:
/*   676 */                     /* --- function return or resume suspension --- */
/*   677 */                     if ($ret && $ret.$isSuspension) {
/*   678 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   679 */                     }
/*   680 */                     var $lsubscr134 = $ret;
/*   681 */                     ls = $lsubscr134;
/*   682 */                     //
/*   683 */                     // line 14:
/*   684 */                     //         for y in ls:
/*   685 */                     //         ^
/*   686 */                     //
/*   687 */                     $currLineNo = 14;
/*   688 */                     $currColNo = 8;
/*   689 */ 
/*   690 */                     if (ls === undefined) {
/*   691 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ls\' referenced before assignment');
/*   692 */                     }
/*   693 */                     var $iter135 = Sk.abstr.iter(ls);
/*   694 */                     $blk = 8; /* allowing case fallthrough */
/*   695 */                 case 8:
/*   696 */                     /* --- for start --- */
/*   697 */                     $ret = Sk.abstr.iternext($iter135, true);
/*   698 */                     $blk = 11; /* allowing case fallthrough */
/*   699 */                 case 11:
/*   700 */                     /* --- function return or resume suspension --- */
/*   701 */                     if ($ret && $ret.$isSuspension) {
/*   702 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 14, 8);
/*   703 */                     }
/*   704 */                     var $next136 = $ret;
/*   705 */                     if ($next136 === undefined) {
/*   706 */                         $blk = 9;
/*   707 */                         continue;
/*   708 */                     }
/*   709 */                     y = $next136;
/*   710 */                     //
/*   711 */                     // line 15:
/*   712 */                     //             result.append((l[x],y))
/*   713 */                     //             ^
/*   714 */                     //
/*   715 */                     $currLineNo = 15;
/*   716 */                     $currColNo = 12;
/*   717 */ 
/*   718 */                     if (result === undefined) {
/*   719 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*   720 */                     }
/*   721 */                     $ret = Sk.abstr.gattr(result, 'append', true);
/*   722 */                     $blk = 12; /* allowing case fallthrough */
/*   723 */                 case 12:
/*   724 */                     /* --- function return or resume suspension --- */
/*   725 */                     if ($ret && $ret.$isSuspension) {
/*   726 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 15, 12);
/*   727 */                     }
/*   728 */                     var $lattr137 = $ret;
/*   729 */                     if (l === undefined) {
/*   730 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   731 */                     }
/*   732 */                     if (x === undefined) {
/*   733 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   734 */                     }
/*   735 */                     $ret = Sk.abstr.objectGetItem(l, x, true);
/*   736 */                     $blk = 13; /* allowing case fallthrough */
/*   737 */                 case 13:
/*   738 */                     /* --- function return or resume suspension --- */
/*   739 */                     if ($ret && $ret.$isSuspension) {
/*   740 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   741 */                     }
/*   742 */                     var $lsubscr138 = $ret;
/*   743 */                     var $elem139 = $lsubscr138;
/*   744 */                     if (y === undefined) {
/*   745 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*   746 */                     }
/*   747 */                     var $elem140 = y;
/*   748 */                     var $loadtuple141 = new Sk.builtins['tuple']([$elem139, $elem140]);
/*   749 */                     $ret;
/*   750 */                     $ret = Sk.misceval.callsimOrSuspend($lattr137, $loadtuple141);
/*   751 */                     $blk = 14; /* allowing case fallthrough */
/*   752 */                 case 14:
/*   753 */                     /* --- function return or resume suspension --- */
/*   754 */                     if ($ret && $ret.$isSuspension) {
/*   755 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 15, 12);
/*   756 */                     }
/*   757 */                     var $call142 = $ret;
/*   758 */                     //
/*   759 */                     // line 15:
/*   760 */                     //             result.append((l[x],y))
/*   761 */                     //             ^
/*   762 */                     //
/*   763 */                     $currLineNo = 15;
/*   764 */                     $currColNo = 12;
/*   765 */ 
/*   766 */                     $blk = 8; /* jump */
/*   767 */                     continue;
/*   768 */                 case 2:
/*   769 */                     /* --- for cleanup --- */
/*   770 */                     $blk = 3; /* allowing case fallthrough */
/*   771 */                 case 3:
/*   772 */                     /* --- for end --- */
/*   773 */                     //
/*   774 */                     // line 16:
/*   775 */                     //     return result
/*   776 */                     //     ^
/*   777 */                     //
/*   778 */                     $currLineNo = 16;
/*   779 */                     $currColNo = 4;
/*   780 */ 
/*   781 */                     if (result === undefined) {
/*   782 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*   783 */                     }
/*   784 */                     return result;
/*   785 */                     return Sk.builtin.none.none$;
/*   786 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   787 */                 case 9:
/*   788 */                     /* --- for cleanup --- */
/*   789 */                     $blk = 10; /* allowing case fallthrough */
/*   790 */                 case 10:
/*   791 */                     /* --- for end --- */
/*   792 */                     $blk = 1; /* jump */
/*   793 */                     continue;
/*   794 */                 }
/*   795 */             } catch (err) {
/*   796 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   797 */                     err = new Sk.builtin.ExternalError(err);
/*   798 */                 }
/*   799 */                 err.traceback.push({
/*   800 */                     lineno: $currLineNo,
/*   801 */                     colno: $currColNo,
/*   802 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   803 */                 });
/*   804 */                 if ($exc.length > 0) {
/*   805 */                     $err = err;
/*   806 */                     $blk = $exc.pop();
/*   807 */                     continue;
/*   808 */                 } else {
/*   809 */                     throw err;
/*   810 */                 }
/*   811 */             }
/*   812 */         }
/*   813 */     });
/*   814 */     var $scope257 = (function $advance258$(dt, n, bodies, pairs) {
/*   815 */         var b1m, b2m, dx, dy, dz, i, m, m1, m2, mag, r, v1, v2, vx, vy, vz, x1, x2, y1, y2, z1, z2; /* locals */
/*   816 */         var b1m, b1m, b1m, b1m, b2m, b2m, b2m, b2m, bodies, bodies, bodies, dt, dt, dt, dt, dt, dx, dx, dx, dx, dx, dy, dy, dy, dy, dy, dz, dz, dz, dz, dz, i, m, m1, m1, m2, m2, mag, mag, mag, n, n, pairs, pairs, pairs, r, r, r, r, v1, v1, v1, v1, v2, v2, v2, v2, vx, vx, vy, vy, vz, vz, x1, x1, x2, x2, y1, y1, y2, y2, z1, z1, z2, z2, $loadgbl259, $iter261, $loadgbl259, $call260, $iter261, $iter263, $iter263, $gitem282, $binop283, $inplbinopsubscr284, $gitem285, $binop286, $inplbinopsubscr287, $gitem288, $binop289, $inplbinopsubscr290, $gitem291, $binop292, $inplbinopsubscr293, $gitem294, $binop295, $inplbinopsubscr296, $gitem297, $binop298, $inplbinopsubscr299, $iter300, $iter300, $gitem304, $binop305, $inplbinopsubscr306, $gitem307, $binop308, $inplbinopsubscr309, $gitem310, $binop311, $inplbinopsubscr312;
/*   817 */         var $wakeFromSuspension = function() {
/*   818 */             var susp = $scope257.$wakingSuspension;
/*   819 */             delete $scope257.$wakingSuspension;
/*   820 */             $blk = susp.$blk;
/*   821 */             $loc = susp.$loc;
/*   822 */             $gbl = susp.$gbl;
/*   823 */             $exc = susp.$exc;
/*   824 */             $err = susp.$err;
/*   825 */             $postfinally = susp.$postfinally;
/*   826 */             $currLineNo = susp.$lineno;
/*   827 */             $currColNo = susp.$colno;
/*   828 */             Sk.lastYield = Date.now();
/*   829 */             b1m = susp.$tmps.b1m;
/*   830 */             b2m = susp.$tmps.b2m;
/*   831 */             bodies = susp.$tmps.bodies;
/*   832 */             dt = susp.$tmps.dt;
/*   833 */             dx = susp.$tmps.dx;
/*   834 */             dy = susp.$tmps.dy;
/*   835 */             dz = susp.$tmps.dz;
/*   836 */             i = susp.$tmps.i;
/*   837 */             m = susp.$tmps.m;
/*   838 */             m1 = susp.$tmps.m1;
/*   839 */             m2 = susp.$tmps.m2;
/*   840 */             mag = susp.$tmps.mag;
/*   841 */             n = susp.$tmps.n;
/*   842 */             pairs = susp.$tmps.pairs;
/*   843 */             r = susp.$tmps.r;
/*   844 */             v1 = susp.$tmps.v1;
/*   845 */             v2 = susp.$tmps.v2;
/*   846 */             vx = susp.$tmps.vx;
/*   847 */             vy = susp.$tmps.vy;
/*   848 */             vz = susp.$tmps.vz;
/*   849 */             x1 = susp.$tmps.x1;
/*   850 */             x2 = susp.$tmps.x2;
/*   851 */             y1 = susp.$tmps.y1;
/*   852 */             y2 = susp.$tmps.y2;
/*   853 */             z1 = susp.$tmps.z1;
/*   854 */             z2 = susp.$tmps.z2;
/*   855 */             $loadgbl259 = susp.$tmps.$loadgbl259;
/*   856 */             $iter261 = susp.$tmps.$iter261;
/*   857 */             $call260 = susp.$tmps.$call260;
/*   858 */             $iter263 = susp.$tmps.$iter263;
/*   859 */             $gitem282 = susp.$tmps.$gitem282;
/*   860 */             $binop283 = susp.$tmps.$binop283;
/*   861 */             $inplbinopsubscr284 = susp.$tmps.$inplbinopsubscr284;
/*   862 */             $gitem285 = susp.$tmps.$gitem285;
/*   863 */             $binop286 = susp.$tmps.$binop286;
/*   864 */             $inplbinopsubscr287 = susp.$tmps.$inplbinopsubscr287;
/*   865 */             $gitem288 = susp.$tmps.$gitem288;
/*   866 */             $binop289 = susp.$tmps.$binop289;
/*   867 */             $inplbinopsubscr290 = susp.$tmps.$inplbinopsubscr290;
/*   868 */             $gitem291 = susp.$tmps.$gitem291;
/*   869 */             $binop292 = susp.$tmps.$binop292;
/*   870 */             $inplbinopsubscr293 = susp.$tmps.$inplbinopsubscr293;
/*   871 */             $gitem294 = susp.$tmps.$gitem294;
/*   872 */             $binop295 = susp.$tmps.$binop295;
/*   873 */             $inplbinopsubscr296 = susp.$tmps.$inplbinopsubscr296;
/*   874 */             $gitem297 = susp.$tmps.$gitem297;
/*   875 */             $binop298 = susp.$tmps.$binop298;
/*   876 */             $inplbinopsubscr299 = susp.$tmps.$inplbinopsubscr299;
/*   877 */             $iter300 = susp.$tmps.$iter300;
/*   878 */             $gitem304 = susp.$tmps.$gitem304;
/*   879 */             $binop305 = susp.$tmps.$binop305;
/*   880 */             $inplbinopsubscr306 = susp.$tmps.$inplbinopsubscr306;
/*   881 */             $gitem307 = susp.$tmps.$gitem307;
/*   882 */             $binop308 = susp.$tmps.$binop308;
/*   883 */             $inplbinopsubscr309 = susp.$tmps.$inplbinopsubscr309;
/*   884 */             $gitem310 = susp.$tmps.$gitem310;
/*   885 */             $binop311 = susp.$tmps.$binop311;
/*   886 */             $inplbinopsubscr312 = susp.$tmps.$inplbinopsubscr312;
/*   887 */             try {
/*   888 */                 $ret = susp.child.resume();
/*   889 */             } catch (err) {
/*   890 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   891 */                     err = new Sk.builtin.ExternalError(err);
/*   892 */                 }
/*   893 */                 err.traceback.push({
/*   894 */                     lineno: $currLineNo,
/*   895 */                     colno: $currColNo,
/*   896 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   897 */                 });
/*   898 */                 if ($exc.length > 0) {
/*   899 */                     $err = err;
/*   900 */                     $blk = $exc.pop();
/*   901 */                 } else {
/*   902 */                     throw err;
/*   903 */                 }
/*   904 */             }
/*   905 */         };
/*   906 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   907 */             var susp = new Sk.misceval.Suspension();
/*   908 */             susp.child = $child;
/*   909 */             susp.resume = function() {
/*   910 */                 $scope257.$wakingSuspension = susp;
/*   911 */                 return $scope257();
/*   912 */             };
/*   913 */             susp.data = susp.child.data;
/*   914 */             susp.$blk = $blk;
/*   915 */             susp.$loc = $loc;
/*   916 */             susp.$gbl = $gbl;
/*   917 */             susp.$exc = $exc;
/*   918 */             susp.$err = $err;
/*   919 */             susp.$postfinally = $postfinally;
/*   920 */             susp.$filename = $filename;
/*   921 */             susp.$lineno = $lineno;
/*   922 */             susp.$colno = $colno;
/*   923 */             susp.optional = susp.child.optional;
/*   924 */             susp.$tmps = {
/*   925 */                 "b1m": b1m,
/*   926 */                 "b2m": b2m,
/*   927 */                 "bodies": bodies,
/*   928 */                 "dt": dt,
/*   929 */                 "dx": dx,
/*   930 */                 "dy": dy,
/*   931 */                 "dz": dz,
/*   932 */                 "i": i,
/*   933 */                 "m": m,
/*   934 */                 "m1": m1,
/*   935 */                 "m2": m2,
/*   936 */                 "mag": mag,
/*   937 */                 "n": n,
/*   938 */                 "pairs": pairs,
/*   939 */                 "r": r,
/*   940 */                 "v1": v1,
/*   941 */                 "v2": v2,
/*   942 */                 "vx": vx,
/*   943 */                 "vy": vy,
/*   944 */                 "vz": vz,
/*   945 */                 "x1": x1,
/*   946 */                 "x2": x2,
/*   947 */                 "y1": y1,
/*   948 */                 "y2": y2,
/*   949 */                 "z1": z1,
/*   950 */                 "z2": z2,
/*   951 */                 "$loadgbl259": $loadgbl259,
/*   952 */                 "$iter261": $iter261,
/*   953 */                 "$call260": $call260,
/*   954 */                 "$iter263": $iter263,
/*   955 */                 "$gitem282": $gitem282,
/*   956 */                 "$binop283": $binop283,
/*   957 */                 "$inplbinopsubscr284": $inplbinopsubscr284,
/*   958 */                 "$gitem285": $gitem285,
/*   959 */                 "$binop286": $binop286,
/*   960 */                 "$inplbinopsubscr287": $inplbinopsubscr287,
/*   961 */                 "$gitem288": $gitem288,
/*   962 */                 "$binop289": $binop289,
/*   963 */                 "$inplbinopsubscr290": $inplbinopsubscr290,
/*   964 */                 "$gitem291": $gitem291,
/*   965 */                 "$binop292": $binop292,
/*   966 */                 "$inplbinopsubscr293": $inplbinopsubscr293,
/*   967 */                 "$gitem294": $gitem294,
/*   968 */                 "$binop295": $binop295,
/*   969 */                 "$inplbinopsubscr296": $inplbinopsubscr296,
/*   970 */                 "$gitem297": $gitem297,
/*   971 */                 "$binop298": $binop298,
/*   972 */                 "$inplbinopsubscr299": $inplbinopsubscr299,
/*   973 */                 "$iter300": $iter300,
/*   974 */                 "$gitem304": $gitem304,
/*   975 */                 "$binop305": $binop305,
/*   976 */                 "$inplbinopsubscr306": $inplbinopsubscr306,
/*   977 */                 "$gitem307": $gitem307,
/*   978 */                 "$binop308": $binop308,
/*   979 */                 "$inplbinopsubscr309": $inplbinopsubscr309,
/*   980 */                 "$gitem310": $gitem310,
/*   981 */                 "$binop311": $binop311,
/*   982 */                 "$inplbinopsubscr312": $inplbinopsubscr312
/*   983 */             };
/*   984 */             return susp;
/*   985 */         };
/*   986 */         var $blk = 0,
/*   987 */             $exc = [],
/*   988 */             $loc = {},
/*   989 */             $gbl = this,
/*   990 */             $err = undefined,
/*   991 */             $ret = undefined,
/*   992 */             $postfinally = undefined,
/*   993 */             $currLineNo = undefined,
/*   994 */             $currColNo = undefined;
/*   995 */         if ($scope257.$wakingSuspension !== undefined) {
/*   996 */             $wakeFromSuspension();
/*   997 */         } else {
/*   998 */             if (bodies === undefined) bodies = $scope257.$defaults[0];
/*   999 */             if (pairs === undefined) pairs = $scope257.$defaults[1];
/*  1000 */             Sk.builtin.pyCheckArgs("advance", arguments, 2, 4, false, false);
/*  1001 */         }
/*  1002 */         while (true) {
/*  1003 */             try {
/*  1004 */                 switch ($blk) {
/*  1005 */                 case 0:
/*  1006 */                     /* --- codeobj entry --- */
/*  1007 */                     if (dt === undefined) {
/*  1008 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1009 */                     }
/*  1010 */                     if (n === undefined) {
/*  1011 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1012 */                     }
/*  1013 */                     if (bodies === undefined) {
/*  1014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1015 */                     }
/*  1016 */                     if (pairs === undefined) {
/*  1017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1018 */                     }
/*  1019 */                     if (bodies === undefined) {
/*  1020 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1021 */                     }
/*  1022 */                     if (pairs === undefined) {
/*  1023 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1024 */                     }
/*  1025 */ 
/*  1026 */                     //
/*  1027 */                     // line 64:
/*  1028 */                     //     for i in range(n):
/*  1029 */                     //     ^
/*  1030 */                     //
/*  1031 */                     $currLineNo = 64;
/*  1032 */                     $currColNo = 4;
/*  1033 */ 
/*  1034 */                     var $loadgbl259 = Sk.misceval.loadname('range', $gbl);
/*  1035 */                     if (n === undefined) {
/*  1036 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1037 */                     }
/*  1038 */                     $ret;
/*  1039 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl259, n);
/*  1040 */                     $blk = 4; /* allowing case fallthrough */
/*  1041 */                 case 4:
/*  1042 */                     /* --- function return or resume suspension --- */
/*  1043 */                     if ($ret && $ret.$isSuspension) {
/*  1044 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 64, 13);
/*  1045 */                     }
/*  1046 */                     var $call260 = $ret;
/*  1047 */                     //
/*  1048 */                     // line 64:
/*  1049 */                     //     for i in range(n):
/*  1050 */                     //              ^
/*  1051 */                     //
/*  1052 */                     $currLineNo = 64;
/*  1053 */                     $currColNo = 13;
/*  1054 */ 
/*  1055 */                     var $iter261 = Sk.abstr.iter($call260);
/*  1056 */                     $blk = 1; /* allowing case fallthrough */
/*  1057 */                 case 1:
/*  1058 */                     /* --- for start --- */
/*  1059 */                     $ret = Sk.abstr.iternext($iter261, true);
/*  1060 */                     $blk = 5; /* allowing case fallthrough */
/*  1061 */                 case 5:
/*  1062 */                     /* --- function return or resume suspension --- */
/*  1063 */                     if ($ret && $ret.$isSuspension) {
/*  1064 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 64, 4);
/*  1065 */                     }
/*  1066 */                     var $next262 = $ret;
/*  1067 */                     if ($next262 === undefined) {
/*  1068 */                         $blk = 2;
/*  1069 */                         continue;
/*  1070 */                     }
/*  1071 */                     i = $next262;
/*  1072 */                     //
/*  1073 */                     // line 65:
/*  1074 */                     //         for (([x1, y1, z1], v1, m1),
/*  1075 */                     //         ^
/*  1076 */                     //
/*  1077 */                     $currLineNo = 65;
/*  1078 */                     $currColNo = 8;
/*  1079 */ 
/*  1080 */                     if (pairs === undefined) {
/*  1081 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1082 */                     }
/*  1083 */                     var $iter263 = Sk.abstr.iter(pairs);
/*  1084 */                     $blk = 6; /* allowing case fallthrough */
/*  1085 */                 case 6:
/*  1086 */                     /* --- for start --- */
/*  1087 */                     $ret = Sk.abstr.iternext($iter263, true);
/*  1088 */                     $blk = 9; /* allowing case fallthrough */
/*  1089 */                 case 9:
/*  1090 */                     /* --- function return or resume suspension --- */
/*  1091 */                     if ($ret && $ret.$isSuspension) {
/*  1092 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 65, 8);
/*  1093 */                     }
/*  1094 */                     var $next264 = $ret;
/*  1095 */                     if ($next264 === undefined) {
/*  1096 */                         $blk = 7;
/*  1097 */                         continue;
/*  1098 */                     }
/*  1099 */                     var $items265 = Sk.abstr.sequenceUnpack($next264, 2);
/*  1100 */                     var $items266 = Sk.abstr.sequenceUnpack($items265[0], 3);
/*  1101 */                     var $items267 = Sk.abstr.sequenceUnpack($items266[0], 3);
/*  1102 */                     x1 = $items267[0];
/*  1103 */                     y1 = $items267[1];
/*  1104 */                     z1 = $items267[2];
/*  1105 */                     v1 = $items266[1];
/*  1106 */                     m1 = $items266[2];
/*  1107 */                     var $items268 = Sk.abstr.sequenceUnpack($items265[1], 3);
/*  1108 */                     var $items269 = Sk.abstr.sequenceUnpack($items268[0], 3);
/*  1109 */                     x2 = $items269[0];
/*  1110 */                     y2 = $items269[1];
/*  1111 */                     z2 = $items269[2];
/*  1112 */                     v2 = $items268[1];
/*  1113 */                     m2 = $items268[2];
/*  1114 */                     //
/*  1115 */                     // line 67:
/*  1116 */                     //             dx = x1 - x2
/*  1117 */                     //             ^
/*  1118 */                     //
/*  1119 */                     $currLineNo = 67;
/*  1120 */                     $currColNo = 12;
/*  1121 */ 
/*  1122 */                     if (x1 === undefined) {
/*  1123 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x1\' referenced before assignment');
/*  1124 */                     }
/*  1125 */                     if (x2 === undefined) {
/*  1126 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x2\' referenced before assignment');
/*  1127 */                     }
/*  1128 */                     var $binop270 = Sk.abstr.numberBinOp(x1, x2, 'Sub');
/*  1129 */                     dx = $binop270;
/*  1130 */                     //
/*  1131 */                     // line 68:
/*  1132 */                     //             dy = y1 - y2
/*  1133 */                     //             ^
/*  1134 */                     //
/*  1135 */                     $currLineNo = 68;
/*  1136 */                     $currColNo = 12;
/*  1137 */ 
/*  1138 */                     if (y1 === undefined) {
/*  1139 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y1\' referenced before assignment');
/*  1140 */                     }
/*  1141 */                     if (y2 === undefined) {
/*  1142 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y2\' referenced before assignment');
/*  1143 */                     }
/*  1144 */                     var $binop271 = Sk.abstr.numberBinOp(y1, y2, 'Sub');
/*  1145 */                     dy = $binop271;
/*  1146 */                     //
/*  1147 */                     // line 69:
/*  1148 */                     //             dz = z1 - z2
/*  1149 */                     //             ^
/*  1150 */                     //
/*  1151 */                     $currLineNo = 69;
/*  1152 */                     $currColNo = 12;
/*  1153 */ 
/*  1154 */                     if (z1 === undefined) {
/*  1155 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z1\' referenced before assignment');
/*  1156 */                     }
/*  1157 */                     if (z2 === undefined) {
/*  1158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z2\' referenced before assignment');
/*  1159 */                     }
/*  1160 */                     var $binop272 = Sk.abstr.numberBinOp(z1, z2, 'Sub');
/*  1161 */                     dz = $binop272;
/*  1162 */                     //
/*  1163 */                     // line 70:
/*  1164 */                     //             mag = dt * ((dx * dx + dy * dy + dz * dz) ** (-1.5))
/*  1165 */                     //             ^
/*  1166 */                     //
/*  1167 */                     $currLineNo = 70;
/*  1168 */                     $currColNo = 12;
/*  1169 */ 
/*  1170 */                     if (dt === undefined) {
/*  1171 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1172 */                     }
/*  1173 */                     if (dx === undefined) {
/*  1174 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1175 */                     }
/*  1176 */                     if (dx === undefined) {
/*  1177 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1178 */                     }
/*  1179 */                     var $binop273 = Sk.abstr.numberBinOp(dx, dx, 'Mult');
/*  1180 */                     if (dy === undefined) {
/*  1181 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1182 */                     }
/*  1183 */                     if (dy === undefined) {
/*  1184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1185 */                     }
/*  1186 */                     var $binop274 = Sk.abstr.numberBinOp(dy, dy, 'Mult');
/*  1187 */                     var $binop275 = Sk.abstr.numberBinOp($binop273, $binop274, 'Add');
/*  1188 */                     if (dz === undefined) {
/*  1189 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1190 */                     }
/*  1191 */                     if (dz === undefined) {
/*  1192 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1193 */                     }
/*  1194 */                     var $binop276 = Sk.abstr.numberBinOp(dz, dz, 'Mult');
/*  1195 */                     var $binop277 = Sk.abstr.numberBinOp($binop275, $binop276, 'Add');
/*  1196 */                     var $binop278 = Sk.abstr.numberBinOp($binop277, new Sk.builtin.float_(-1.5), 'Pow');
/*  1197 */                     var $binop279 = Sk.abstr.numberBinOp(dt, $binop278, 'Mult');
/*  1198 */                     mag = $binop279;
/*  1199 */                     //
/*  1200 */                     // line 71:
/*  1201 */                     //             b1m = m1 * mag
/*  1202 */                     //             ^
/*  1203 */                     //
/*  1204 */                     $currLineNo = 71;
/*  1205 */                     $currColNo = 12;
/*  1206 */ 
/*  1207 */                     if (m1 === undefined) {
/*  1208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m1\' referenced before assignment');
/*  1209 */                     }
/*  1210 */                     if (mag === undefined) {
/*  1211 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  1212 */                     }
/*  1213 */                     var $binop280 = Sk.abstr.numberBinOp(m1, mag, 'Mult');
/*  1214 */                     b1m = $binop280;
/*  1215 */                     //
/*  1216 */                     // line 72:
/*  1217 */                     //             b2m = m2 * mag
/*  1218 */                     //             ^
/*  1219 */                     //
/*  1220 */                     $currLineNo = 72;
/*  1221 */                     $currColNo = 12;
/*  1222 */ 
/*  1223 */                     if (m2 === undefined) {
/*  1224 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m2\' referenced before assignment');
/*  1225 */                     }
/*  1226 */                     if (mag === undefined) {
/*  1227 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  1228 */                     }
/*  1229 */                     var $binop281 = Sk.abstr.numberBinOp(m2, mag, 'Mult');
/*  1230 */                     b2m = $binop281;
/*  1231 */                     //
/*  1232 */                     // line 73:
/*  1233 */                     //             v1[0] -= dx * b2m
/*  1234 */                     //             ^
/*  1235 */                     //
/*  1236 */                     $currLineNo = 73;
/*  1237 */                     $currColNo = 12;
/*  1238 */ 
/*  1239 */                     if (v1 === undefined) {
/*  1240 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1241 */                     }
/*  1242 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(0), true);
/*  1243 */                     $blk = 10; /* allowing case fallthrough */
/*  1244 */                 case 10:
/*  1245 */                     /* --- function return or resume suspension --- */
/*  1246 */                     if ($ret && $ret.$isSuspension) {
/*  1247 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 73, 12);
/*  1248 */                     }
/*  1249 */                     var $gitem282 = $ret;
/*  1250 */                     if (dx === undefined) {
/*  1251 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1252 */                     }
/*  1253 */                     if (b2m === undefined) {
/*  1254 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1255 */                     }
/*  1256 */                     var $binop283 = Sk.abstr.numberBinOp(dx, b2m, 'Mult');
/*  1257 */                     var $inplbinopsubscr284 = Sk.abstr.numberInplaceBinOp($gitem282, $binop283, 'Sub');
/*  1258 */                     $ret = undefined;
/*  1259 */                     if ($inplbinopsubscr284 !== undefined) {
/*  1260 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(0), $inplbinopsubscr284, true)
/*  1261 */                     }
/*  1262 */                     $blk = 11; /* allowing case fallthrough */
/*  1263 */                 case 11:
/*  1264 */                     /* --- function return or resume suspension --- */
/*  1265 */                     if ($ret && $ret.$isSuspension) {
/*  1266 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 73, 12);
/*  1267 */                     }
/*  1268 */                     //
/*  1269 */                     // line 74:
/*  1270 */                     //             v1[1] -= dy * b2m
/*  1271 */                     //             ^
/*  1272 */                     //
/*  1273 */                     $currLineNo = 74;
/*  1274 */                     $currColNo = 12;
/*  1275 */ 
/*  1276 */                     if (v1 === undefined) {
/*  1277 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1278 */                     }
/*  1279 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(1), true);
/*  1280 */                     $blk = 12; /* allowing case fallthrough */
/*  1281 */                 case 12:
/*  1282 */                     /* --- function return or resume suspension --- */
/*  1283 */                     if ($ret && $ret.$isSuspension) {
/*  1284 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 74, 12);
/*  1285 */                     }
/*  1286 */                     var $gitem285 = $ret;
/*  1287 */                     if (dy === undefined) {
/*  1288 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1289 */                     }
/*  1290 */                     if (b2m === undefined) {
/*  1291 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1292 */                     }
/*  1293 */                     var $binop286 = Sk.abstr.numberBinOp(dy, b2m, 'Mult');
/*  1294 */                     var $inplbinopsubscr287 = Sk.abstr.numberInplaceBinOp($gitem285, $binop286, 'Sub');
/*  1295 */                     $ret = undefined;
/*  1296 */                     if ($inplbinopsubscr287 !== undefined) {
/*  1297 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(1), $inplbinopsubscr287, true)
/*  1298 */                     }
/*  1299 */                     $blk = 13; /* allowing case fallthrough */
/*  1300 */                 case 13:
/*  1301 */                     /* --- function return or resume suspension --- */
/*  1302 */                     if ($ret && $ret.$isSuspension) {
/*  1303 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 74, 12);
/*  1304 */                     }
/*  1305 */                     //
/*  1306 */                     // line 75:
/*  1307 */                     //             v1[2] -= dz * b2m
/*  1308 */                     //             ^
/*  1309 */                     //
/*  1310 */                     $currLineNo = 75;
/*  1311 */                     $currColNo = 12;
/*  1312 */ 
/*  1313 */                     if (v1 === undefined) {
/*  1314 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1315 */                     }
/*  1316 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(2), true);
/*  1317 */                     $blk = 14; /* allowing case fallthrough */
/*  1318 */                 case 14:
/*  1319 */                     /* --- function return or resume suspension --- */
/*  1320 */                     if ($ret && $ret.$isSuspension) {
/*  1321 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 75, 12);
/*  1322 */                     }
/*  1323 */                     var $gitem288 = $ret;
/*  1324 */                     if (dz === undefined) {
/*  1325 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1326 */                     }
/*  1327 */                     if (b2m === undefined) {
/*  1328 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1329 */                     }
/*  1330 */                     var $binop289 = Sk.abstr.numberBinOp(dz, b2m, 'Mult');
/*  1331 */                     var $inplbinopsubscr290 = Sk.abstr.numberInplaceBinOp($gitem288, $binop289, 'Sub');
/*  1332 */                     $ret = undefined;
/*  1333 */                     if ($inplbinopsubscr290 !== undefined) {
/*  1334 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(2), $inplbinopsubscr290, true)
/*  1335 */                     }
/*  1336 */                     $blk = 15; /* allowing case fallthrough */
/*  1337 */                 case 15:
/*  1338 */                     /* --- function return or resume suspension --- */
/*  1339 */                     if ($ret && $ret.$isSuspension) {
/*  1340 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 75, 12);
/*  1341 */                     }
/*  1342 */                     //
/*  1343 */                     // line 76:
/*  1344 */                     //             v2[0] += dx * b1m
/*  1345 */                     //             ^
/*  1346 */                     //
/*  1347 */                     $currLineNo = 76;
/*  1348 */                     $currColNo = 12;
/*  1349 */ 
/*  1350 */                     if (v2 === undefined) {
/*  1351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1352 */                     }
/*  1353 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(0), true);
/*  1354 */                     $blk = 16; /* allowing case fallthrough */
/*  1355 */                 case 16:
/*  1356 */                     /* --- function return or resume suspension --- */
/*  1357 */                     if ($ret && $ret.$isSuspension) {
/*  1358 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 76, 12);
/*  1359 */                     }
/*  1360 */                     var $gitem291 = $ret;
/*  1361 */                     if (dx === undefined) {
/*  1362 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1363 */                     }
/*  1364 */                     if (b1m === undefined) {
/*  1365 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1366 */                     }
/*  1367 */                     var $binop292 = Sk.abstr.numberBinOp(dx, b1m, 'Mult');
/*  1368 */                     var $inplbinopsubscr293 = Sk.abstr.numberInplaceBinOp($gitem291, $binop292, 'Add');
/*  1369 */                     $ret = undefined;
/*  1370 */                     if ($inplbinopsubscr293 !== undefined) {
/*  1371 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(0), $inplbinopsubscr293, true)
/*  1372 */                     }
/*  1373 */                     $blk = 17; /* allowing case fallthrough */
/*  1374 */                 case 17:
/*  1375 */                     /* --- function return or resume suspension --- */
/*  1376 */                     if ($ret && $ret.$isSuspension) {
/*  1377 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 76, 12);
/*  1378 */                     }
/*  1379 */                     //
/*  1380 */                     // line 77:
/*  1381 */                     //             v2[1] += dy * b1m
/*  1382 */                     //             ^
/*  1383 */                     //
/*  1384 */                     $currLineNo = 77;
/*  1385 */                     $currColNo = 12;
/*  1386 */ 
/*  1387 */                     if (v2 === undefined) {
/*  1388 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1389 */                     }
/*  1390 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(1), true);
/*  1391 */                     $blk = 18; /* allowing case fallthrough */
/*  1392 */                 case 18:
/*  1393 */                     /* --- function return or resume suspension --- */
/*  1394 */                     if ($ret && $ret.$isSuspension) {
/*  1395 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 77, 12);
/*  1396 */                     }
/*  1397 */                     var $gitem294 = $ret;
/*  1398 */                     if (dy === undefined) {
/*  1399 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1400 */                     }
/*  1401 */                     if (b1m === undefined) {
/*  1402 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1403 */                     }
/*  1404 */                     var $binop295 = Sk.abstr.numberBinOp(dy, b1m, 'Mult');
/*  1405 */                     var $inplbinopsubscr296 = Sk.abstr.numberInplaceBinOp($gitem294, $binop295, 'Add');
/*  1406 */                     $ret = undefined;
/*  1407 */                     if ($inplbinopsubscr296 !== undefined) {
/*  1408 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(1), $inplbinopsubscr296, true)
/*  1409 */                     }
/*  1410 */                     $blk = 19; /* allowing case fallthrough */
/*  1411 */                 case 19:
/*  1412 */                     /* --- function return or resume suspension --- */
/*  1413 */                     if ($ret && $ret.$isSuspension) {
/*  1414 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 77, 12);
/*  1415 */                     }
/*  1416 */                     //
/*  1417 */                     // line 78:
/*  1418 */                     //             v2[2] += dz * b1m
/*  1419 */                     //             ^
/*  1420 */                     //
/*  1421 */                     $currLineNo = 78;
/*  1422 */                     $currColNo = 12;
/*  1423 */ 
/*  1424 */                     if (v2 === undefined) {
/*  1425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1426 */                     }
/*  1427 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(2), true);
/*  1428 */                     $blk = 20; /* allowing case fallthrough */
/*  1429 */                 case 20:
/*  1430 */                     /* --- function return or resume suspension --- */
/*  1431 */                     if ($ret && $ret.$isSuspension) {
/*  1432 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 78, 12);
/*  1433 */                     }
/*  1434 */                     var $gitem297 = $ret;
/*  1435 */                     if (dz === undefined) {
/*  1436 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1437 */                     }
/*  1438 */                     if (b1m === undefined) {
/*  1439 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1440 */                     }
/*  1441 */                     var $binop298 = Sk.abstr.numberBinOp(dz, b1m, 'Mult');
/*  1442 */                     var $inplbinopsubscr299 = Sk.abstr.numberInplaceBinOp($gitem297, $binop298, 'Add');
/*  1443 */                     $ret = undefined;
/*  1444 */                     if ($inplbinopsubscr299 !== undefined) {
/*  1445 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(2), $inplbinopsubscr299, true)
/*  1446 */                     }
/*  1447 */                     $blk = 21; /* allowing case fallthrough */
/*  1448 */                 case 21:
/*  1449 */                     /* --- function return or resume suspension --- */
/*  1450 */                     if ($ret && $ret.$isSuspension) {
/*  1451 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 78, 12);
/*  1452 */                     }
/*  1453 */                     $blk = 6; /* jump */
/*  1454 */                     continue;
/*  1455 */                 case 2:
/*  1456 */                     /* --- for cleanup --- */
/*  1457 */                     $blk = 3; /* allowing case fallthrough */
/*  1458 */                 case 3:
/*  1459 */                     /* --- for end --- */
/*  1460 */                     return Sk.builtin.none.none$;
/*  1461 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1462 */                 case 7:
/*  1463 */                     /* --- for cleanup --- */
/*  1464 */                     $blk = 8; /* allowing case fallthrough */
/*  1465 */                 case 8:
/*  1466 */                     /* --- for end --- */
/*  1467 */                     //
/*  1468 */                     // line 79:
/*  1469 */                     //         for (r, [vx, vy, vz], m) in bodies:
/*  1470 */                     //         ^
/*  1471 */                     //
/*  1472 */                     $currLineNo = 79;
/*  1473 */                     $currColNo = 8;
/*  1474 */ 
/*  1475 */                     if (bodies === undefined) {
/*  1476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1477 */                     }
/*  1478 */                     var $iter300 = Sk.abstr.iter(bodies);
/*  1479 */                     $blk = 22; /* allowing case fallthrough */
/*  1480 */                 case 22:
/*  1481 */                     /* --- for start --- */
/*  1482 */                     $ret = Sk.abstr.iternext($iter300, true);
/*  1483 */                     $blk = 25; /* allowing case fallthrough */
/*  1484 */                 case 25:
/*  1485 */                     /* --- function return or resume suspension --- */
/*  1486 */                     if ($ret && $ret.$isSuspension) {
/*  1487 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 79, 8);
/*  1488 */                     }
/*  1489 */                     var $next301 = $ret;
/*  1490 */                     if ($next301 === undefined) {
/*  1491 */                         $blk = 23;
/*  1492 */                         continue;
/*  1493 */                     }
/*  1494 */                     var $items302 = Sk.abstr.sequenceUnpack($next301, 3);
/*  1495 */                     r = $items302[0];
/*  1496 */                     var $items303 = Sk.abstr.sequenceUnpack($items302[1], 3);
/*  1497 */                     vx = $items303[0];
/*  1498 */                     vy = $items303[1];
/*  1499 */                     vz = $items303[2];
/*  1500 */                     m = $items302[2];
/*  1501 */                     //
/*  1502 */                     // line 80:
/*  1503 */                     //             r[0] += dt * vx
/*  1504 */                     //             ^
/*  1505 */                     //
/*  1506 */                     $currLineNo = 80;
/*  1507 */                     $currColNo = 12;
/*  1508 */ 
/*  1509 */                     if (r === undefined) {
/*  1510 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1511 */                     }
/*  1512 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(0), true);
/*  1513 */                     $blk = 26; /* allowing case fallthrough */
/*  1514 */                 case 26:
/*  1515 */                     /* --- function return or resume suspension --- */
/*  1516 */                     if ($ret && $ret.$isSuspension) {
/*  1517 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 80, 12);
/*  1518 */                     }
/*  1519 */                     var $gitem304 = $ret;
/*  1520 */                     if (dt === undefined) {
/*  1521 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1522 */                     }
/*  1523 */                     if (vx === undefined) {
/*  1524 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  1525 */                     }
/*  1526 */                     var $binop305 = Sk.abstr.numberBinOp(dt, vx, 'Mult');
/*  1527 */                     var $inplbinopsubscr306 = Sk.abstr.numberInplaceBinOp($gitem304, $binop305, 'Add');
/*  1528 */                     $ret = undefined;
/*  1529 */                     if ($inplbinopsubscr306 !== undefined) {
/*  1530 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(0), $inplbinopsubscr306, true)
/*  1531 */                     }
/*  1532 */                     $blk = 27; /* allowing case fallthrough */
/*  1533 */                 case 27:
/*  1534 */                     /* --- function return or resume suspension --- */
/*  1535 */                     if ($ret && $ret.$isSuspension) {
/*  1536 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 80, 12);
/*  1537 */                     }
/*  1538 */                     //
/*  1539 */                     // line 81:
/*  1540 */                     //             r[1] += dt * vy
/*  1541 */                     //             ^
/*  1542 */                     //
/*  1543 */                     $currLineNo = 81;
/*  1544 */                     $currColNo = 12;
/*  1545 */ 
/*  1546 */                     if (r === undefined) {
/*  1547 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1548 */                     }
/*  1549 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(1), true);
/*  1550 */                     $blk = 28; /* allowing case fallthrough */
/*  1551 */                 case 28:
/*  1552 */                     /* --- function return or resume suspension --- */
/*  1553 */                     if ($ret && $ret.$isSuspension) {
/*  1554 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 81, 12);
/*  1555 */                     }
/*  1556 */                     var $gitem307 = $ret;
/*  1557 */                     if (dt === undefined) {
/*  1558 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1559 */                     }
/*  1560 */                     if (vy === undefined) {
/*  1561 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  1562 */                     }
/*  1563 */                     var $binop308 = Sk.abstr.numberBinOp(dt, vy, 'Mult');
/*  1564 */                     var $inplbinopsubscr309 = Sk.abstr.numberInplaceBinOp($gitem307, $binop308, 'Add');
/*  1565 */                     $ret = undefined;
/*  1566 */                     if ($inplbinopsubscr309 !== undefined) {
/*  1567 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(1), $inplbinopsubscr309, true)
/*  1568 */                     }
/*  1569 */                     $blk = 29; /* allowing case fallthrough */
/*  1570 */                 case 29:
/*  1571 */                     /* --- function return or resume suspension --- */
/*  1572 */                     if ($ret && $ret.$isSuspension) {
/*  1573 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 81, 12);
/*  1574 */                     }
/*  1575 */                     //
/*  1576 */                     // line 82:
/*  1577 */                     //             r[2] += dt * vz
/*  1578 */                     //             ^
/*  1579 */                     //
/*  1580 */                     $currLineNo = 82;
/*  1581 */                     $currColNo = 12;
/*  1582 */ 
/*  1583 */                     if (r === undefined) {
/*  1584 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1585 */                     }
/*  1586 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(2), true);
/*  1587 */                     $blk = 30; /* allowing case fallthrough */
/*  1588 */                 case 30:
/*  1589 */                     /* --- function return or resume suspension --- */
/*  1590 */                     if ($ret && $ret.$isSuspension) {
/*  1591 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 82, 12);
/*  1592 */                     }
/*  1593 */                     var $gitem310 = $ret;
/*  1594 */                     if (dt === undefined) {
/*  1595 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1596 */                     }
/*  1597 */                     if (vz === undefined) {
/*  1598 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  1599 */                     }
/*  1600 */                     var $binop311 = Sk.abstr.numberBinOp(dt, vz, 'Mult');
/*  1601 */                     var $inplbinopsubscr312 = Sk.abstr.numberInplaceBinOp($gitem310, $binop311, 'Add');
/*  1602 */                     $ret = undefined;
/*  1603 */                     if ($inplbinopsubscr312 !== undefined) {
/*  1604 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(2), $inplbinopsubscr312, true)
/*  1605 */                     }
/*  1606 */                     $blk = 31; /* allowing case fallthrough */
/*  1607 */                 case 31:
/*  1608 */                     /* --- function return or resume suspension --- */
/*  1609 */                     if ($ret && $ret.$isSuspension) {
/*  1610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 82, 12);
/*  1611 */                     }
/*  1612 */                     $blk = 22; /* jump */
/*  1613 */                     continue;
/*  1614 */                 case 23:
/*  1615 */                     /* --- for cleanup --- */
/*  1616 */                     $blk = 24; /* allowing case fallthrough */
/*  1617 */                 case 24:
/*  1618 */                     /* --- for end --- */
/*  1619 */                     $blk = 1; /* jump */
/*  1620 */                     continue;
/*  1621 */                 }
/*  1622 */             } catch (err) {
/*  1623 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1624 */                     err = new Sk.builtin.ExternalError(err);
/*  1625 */                 }
/*  1626 */                 err.traceback.push({
/*  1627 */                     lineno: $currLineNo,
/*  1628 */                     colno: $currColNo,
/*  1629 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  1630 */                 });
/*  1631 */                 if ($exc.length > 0) {
/*  1632 */                     $err = err;
/*  1633 */                     $blk = $exc.pop();
/*  1634 */                     continue;
/*  1635 */                 } else {
/*  1636 */                     throw err;
/*  1637 */                 }
/*  1638 */             }
/*  1639 */         }
/*  1640 */     });
/*  1641 */     var $scope316 = (function $report_energy317$(bodies, pairs, e) {
/*  1642 */         var dx, dy, dz, m, m1, m2, r, v1, v2, vx, vy, vz, x1, x2, y1, y2, z1, z2; /* locals */
/*  1643 */         var bodies, bodies, bodies, dx, dx, dx, dy, dy, dy, dz, dz, dz, e, e, e, e, e, e, m, m, m1, m1, m2, m2, pairs, pairs, pairs, r, v1, v2, vx, vx, vx, vy, vy, vy, vz, vz, vz, x1, x1, x2, x2, y1, y1, y2, y2, z1, z1, z2, z2, $iter318, $iter318, $iter337, $iter337;
/*  1644 */         var $wakeFromSuspension = function() {
/*  1645 */             var susp = $scope316.$wakingSuspension;
/*  1646 */             delete $scope316.$wakingSuspension;
/*  1647 */             $blk = susp.$blk;
/*  1648 */             $loc = susp.$loc;
/*  1649 */             $gbl = susp.$gbl;
/*  1650 */             $exc = susp.$exc;
/*  1651 */             $err = susp.$err;
/*  1652 */             $postfinally = susp.$postfinally;
/*  1653 */             $currLineNo = susp.$lineno;
/*  1654 */             $currColNo = susp.$colno;
/*  1655 */             Sk.lastYield = Date.now();
/*  1656 */             bodies = susp.$tmps.bodies;
/*  1657 */             dx = susp.$tmps.dx;
/*  1658 */             dy = susp.$tmps.dy;
/*  1659 */             dz = susp.$tmps.dz;
/*  1660 */             e = susp.$tmps.e;
/*  1661 */             m = susp.$tmps.m;
/*  1662 */             m1 = susp.$tmps.m1;
/*  1663 */             m2 = susp.$tmps.m2;
/*  1664 */             pairs = susp.$tmps.pairs;
/*  1665 */             r = susp.$tmps.r;
/*  1666 */             v1 = susp.$tmps.v1;
/*  1667 */             v2 = susp.$tmps.v2;
/*  1668 */             vx = susp.$tmps.vx;
/*  1669 */             vy = susp.$tmps.vy;
/*  1670 */             vz = susp.$tmps.vz;
/*  1671 */             x1 = susp.$tmps.x1;
/*  1672 */             x2 = susp.$tmps.x2;
/*  1673 */             y1 = susp.$tmps.y1;
/*  1674 */             y2 = susp.$tmps.y2;
/*  1675 */             z1 = susp.$tmps.z1;
/*  1676 */             z2 = susp.$tmps.z2;
/*  1677 */             $iter318 = susp.$tmps.$iter318;
/*  1678 */             $iter337 = susp.$tmps.$iter337;
/*  1679 */             try {
/*  1680 */                 $ret = susp.child.resume();
/*  1681 */             } catch (err) {
/*  1682 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1683 */                     err = new Sk.builtin.ExternalError(err);
/*  1684 */                 }
/*  1685 */                 err.traceback.push({
/*  1686 */                     lineno: $currLineNo,
/*  1687 */                     colno: $currColNo,
/*  1688 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  1689 */                 });
/*  1690 */                 if ($exc.length > 0) {
/*  1691 */                     $err = err;
/*  1692 */                     $blk = $exc.pop();
/*  1693 */                 } else {
/*  1694 */                     throw err;
/*  1695 */                 }
/*  1696 */             }
/*  1697 */         };
/*  1698 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1699 */             var susp = new Sk.misceval.Suspension();
/*  1700 */             susp.child = $child;
/*  1701 */             susp.resume = function() {
/*  1702 */                 $scope316.$wakingSuspension = susp;
/*  1703 */                 return $scope316();
/*  1704 */             };
/*  1705 */             susp.data = susp.child.data;
/*  1706 */             susp.$blk = $blk;
/*  1707 */             susp.$loc = $loc;
/*  1708 */             susp.$gbl = $gbl;
/*  1709 */             susp.$exc = $exc;
/*  1710 */             susp.$err = $err;
/*  1711 */             susp.$postfinally = $postfinally;
/*  1712 */             susp.$filename = $filename;
/*  1713 */             susp.$lineno = $lineno;
/*  1714 */             susp.$colno = $colno;
/*  1715 */             susp.optional = susp.child.optional;
/*  1716 */             susp.$tmps = {
/*  1717 */                 "bodies": bodies,
/*  1718 */                 "dx": dx,
/*  1719 */                 "dy": dy,
/*  1720 */                 "dz": dz,
/*  1721 */                 "e": e,
/*  1722 */                 "m": m,
/*  1723 */                 "m1": m1,
/*  1724 */                 "m2": m2,
/*  1725 */                 "pairs": pairs,
/*  1726 */                 "r": r,
/*  1727 */                 "v1": v1,
/*  1728 */                 "v2": v2,
/*  1729 */                 "vx": vx,
/*  1730 */                 "vy": vy,
/*  1731 */                 "vz": vz,
/*  1732 */                 "x1": x1,
/*  1733 */                 "x2": x2,
/*  1734 */                 "y1": y1,
/*  1735 */                 "y2": y2,
/*  1736 */                 "z1": z1,
/*  1737 */                 "z2": z2,
/*  1738 */                 "$iter318": $iter318,
/*  1739 */                 "$iter337": $iter337
/*  1740 */             };
/*  1741 */             return susp;
/*  1742 */         };
/*  1743 */         var $blk = 0,
/*  1744 */             $exc = [],
/*  1745 */             $loc = {},
/*  1746 */             $gbl = this,
/*  1747 */             $err = undefined,
/*  1748 */             $ret = undefined,
/*  1749 */             $postfinally = undefined,
/*  1750 */             $currLineNo = undefined,
/*  1751 */             $currColNo = undefined;
/*  1752 */         if ($scope316.$wakingSuspension !== undefined) {
/*  1753 */             $wakeFromSuspension();
/*  1754 */         } else {
/*  1755 */             if (bodies === undefined) bodies = $scope316.$defaults[0];
/*  1756 */             if (pairs === undefined) pairs = $scope316.$defaults[1];
/*  1757 */             if (e === undefined) e = $scope316.$defaults[2];
/*  1758 */             Sk.builtin.pyCheckArgs("report_energy", arguments, 0, 3, false, false);
/*  1759 */         }
/*  1760 */         while (true) {
/*  1761 */             try {
/*  1762 */                 switch ($blk) {
/*  1763 */                 case 0:
/*  1764 */                     /* --- codeobj entry --- */
/*  1765 */                     if (bodies === undefined) {
/*  1766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1767 */                     }
/*  1768 */                     if (pairs === undefined) {
/*  1769 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1770 */                     }
/*  1771 */                     if (e === undefined) {
/*  1772 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1773 */                     }
/*  1774 */                     if (bodies === undefined) {
/*  1775 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1776 */                     }
/*  1777 */                     if (pairs === undefined) {
/*  1778 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1779 */                     }
/*  1780 */                     if (e === undefined) {
/*  1781 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1782 */                     }
/*  1783 */ 
/*  1784 */                     //
/*  1785 */                     // line 87:
/*  1786 */                     //     for (((x1, y1, z1), v1, m1),
/*  1787 */                     //     ^
/*  1788 */                     //
/*  1789 */                     $currLineNo = 87;
/*  1790 */                     $currColNo = 4;
/*  1791 */ 
/*  1792 */                     if (pairs === undefined) {
/*  1793 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1794 */                     }
/*  1795 */                     var $iter318 = Sk.abstr.iter(pairs);
/*  1796 */                     $blk = 1; /* allowing case fallthrough */
/*  1797 */                 case 1:
/*  1798 */                     /* --- for start --- */
/*  1799 */                     $ret = Sk.abstr.iternext($iter318, true);
/*  1800 */                     $blk = 4; /* allowing case fallthrough */
/*  1801 */                 case 4:
/*  1802 */                     /* --- function return or resume suspension --- */
/*  1803 */                     if ($ret && $ret.$isSuspension) {
/*  1804 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 87, 4);
/*  1805 */                     }
/*  1806 */                     var $next319 = $ret;
/*  1807 */                     if ($next319 === undefined) {
/*  1808 */                         $blk = 2;
/*  1809 */                         continue;
/*  1810 */                     }
/*  1811 */                     var $items320 = Sk.abstr.sequenceUnpack($next319, 2);
/*  1812 */                     var $items321 = Sk.abstr.sequenceUnpack($items320[0], 3);
/*  1813 */                     var $items322 = Sk.abstr.sequenceUnpack($items321[0], 3);
/*  1814 */                     x1 = $items322[0];
/*  1815 */                     y1 = $items322[1];
/*  1816 */                     z1 = $items322[2];
/*  1817 */                     v1 = $items321[1];
/*  1818 */                     m1 = $items321[2];
/*  1819 */                     var $items323 = Sk.abstr.sequenceUnpack($items320[1], 3);
/*  1820 */                     var $items324 = Sk.abstr.sequenceUnpack($items323[0], 3);
/*  1821 */                     x2 = $items324[0];
/*  1822 */                     y2 = $items324[1];
/*  1823 */                     z2 = $items324[2];
/*  1824 */                     v2 = $items323[1];
/*  1825 */                     m2 = $items323[2];
/*  1826 */                     //
/*  1827 */                     // line 89:
/*  1828 */                     //         dx = x1 - x2
/*  1829 */                     //         ^
/*  1830 */                     //
/*  1831 */                     $currLineNo = 89;
/*  1832 */                     $currColNo = 8;
/*  1833 */ 
/*  1834 */                     if (x1 === undefined) {
/*  1835 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x1\' referenced before assignment');
/*  1836 */                     }
/*  1837 */                     if (x2 === undefined) {
/*  1838 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x2\' referenced before assignment');
/*  1839 */                     }
/*  1840 */                     var $binop325 = Sk.abstr.numberBinOp(x1, x2, 'Sub');
/*  1841 */                     dx = $binop325;
/*  1842 */                     //
/*  1843 */                     // line 90:
/*  1844 */                     //         dy = y1 - y2
/*  1845 */                     //         ^
/*  1846 */                     //
/*  1847 */                     $currLineNo = 90;
/*  1848 */                     $currColNo = 8;
/*  1849 */ 
/*  1850 */                     if (y1 === undefined) {
/*  1851 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y1\' referenced before assignment');
/*  1852 */                     }
/*  1853 */                     if (y2 === undefined) {
/*  1854 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y2\' referenced before assignment');
/*  1855 */                     }
/*  1856 */                     var $binop326 = Sk.abstr.numberBinOp(y1, y2, 'Sub');
/*  1857 */                     dy = $binop326;
/*  1858 */                     //
/*  1859 */                     // line 91:
/*  1860 */                     //         dz = z1 - z2
/*  1861 */                     //         ^
/*  1862 */                     //
/*  1863 */                     $currLineNo = 91;
/*  1864 */                     $currColNo = 8;
/*  1865 */ 
/*  1866 */                     if (z1 === undefined) {
/*  1867 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z1\' referenced before assignment');
/*  1868 */                     }
/*  1869 */                     if (z2 === undefined) {
/*  1870 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z2\' referenced before assignment');
/*  1871 */                     }
/*  1872 */                     var $binop327 = Sk.abstr.numberBinOp(z1, z2, 'Sub');
/*  1873 */                     dz = $binop327;
/*  1874 */                     //
/*  1875 */                     // line 92:
/*  1876 */                     //         e -= (m1 * m2) / ((dx * dx + dy * dy + dz * dz) ** 0.5)
/*  1877 */                     //         ^
/*  1878 */                     //
/*  1879 */                     $currLineNo = 92;
/*  1880 */                     $currColNo = 8;
/*  1881 */ 
/*  1882 */                     if (e === undefined) {
/*  1883 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1884 */                     }
/*  1885 */                     if (m1 === undefined) {
/*  1886 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m1\' referenced before assignment');
/*  1887 */                     }
/*  1888 */                     if (m2 === undefined) {
/*  1889 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m2\' referenced before assignment');
/*  1890 */                     }
/*  1891 */                     var $binop328 = Sk.abstr.numberBinOp(m1, m2, 'Mult');
/*  1892 */                     if (dx === undefined) {
/*  1893 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1894 */                     }
/*  1895 */                     if (dx === undefined) {
/*  1896 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1897 */                     }
/*  1898 */                     var $binop329 = Sk.abstr.numberBinOp(dx, dx, 'Mult');
/*  1899 */                     if (dy === undefined) {
/*  1900 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1901 */                     }
/*  1902 */                     if (dy === undefined) {
/*  1903 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1904 */                     }
/*  1905 */                     var $binop330 = Sk.abstr.numberBinOp(dy, dy, 'Mult');
/*  1906 */                     var $binop331 = Sk.abstr.numberBinOp($binop329, $binop330, 'Add');
/*  1907 */                     if (dz === undefined) {
/*  1908 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1909 */                     }
/*  1910 */                     if (dz === undefined) {
/*  1911 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1912 */                     }
/*  1913 */                     var $binop332 = Sk.abstr.numberBinOp(dz, dz, 'Mult');
/*  1914 */                     var $binop333 = Sk.abstr.numberBinOp($binop331, $binop332, 'Add');
/*  1915 */                     var $binop334 = Sk.abstr.numberBinOp($binop333, new Sk.builtin.float_(0.5), 'Pow');
/*  1916 */                     var $binop335 = Sk.abstr.numberBinOp($binop328, $binop334, 'Div');
/*  1917 */                     var $inplbinop336 = Sk.abstr.numberInplaceBinOp(e, $binop335, 'Sub');
/*  1918 */                     e = $inplbinop336;
/*  1919 */                     $blk = 1; /* jump */
/*  1920 */                     continue;
/*  1921 */                 case 2:
/*  1922 */                     /* --- for cleanup --- */
/*  1923 */                     $blk = 3; /* allowing case fallthrough */
/*  1924 */                 case 3:
/*  1925 */                     /* --- for end --- */
/*  1926 */                     //
/*  1927 */                     // line 93:
/*  1928 */                     //     for (r, [vx, vy, vz], m) in bodies:
/*  1929 */                     //     ^
/*  1930 */                     //
/*  1931 */                     $currLineNo = 93;
/*  1932 */                     $currColNo = 4;
/*  1933 */ 
/*  1934 */                     if (bodies === undefined) {
/*  1935 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1936 */                     }
/*  1937 */                     var $iter337 = Sk.abstr.iter(bodies);
/*  1938 */                     $blk = 5; /* allowing case fallthrough */
/*  1939 */                 case 5:
/*  1940 */                     /* --- for start --- */
/*  1941 */                     $ret = Sk.abstr.iternext($iter337, true);
/*  1942 */                     $blk = 8; /* allowing case fallthrough */
/*  1943 */                 case 8:
/*  1944 */                     /* --- function return or resume suspension --- */
/*  1945 */                     if ($ret && $ret.$isSuspension) {
/*  1946 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 93, 4);
/*  1947 */                     }
/*  1948 */                     var $next338 = $ret;
/*  1949 */                     if ($next338 === undefined) {
/*  1950 */                         $blk = 6;
/*  1951 */                         continue;
/*  1952 */                     }
/*  1953 */                     var $items339 = Sk.abstr.sequenceUnpack($next338, 3);
/*  1954 */                     r = $items339[0];
/*  1955 */                     var $items340 = Sk.abstr.sequenceUnpack($items339[1], 3);
/*  1956 */                     vx = $items340[0];
/*  1957 */                     vy = $items340[1];
/*  1958 */                     vz = $items340[2];
/*  1959 */                     m = $items339[2];
/*  1960 */                     //
/*  1961 */                     // line 94:
/*  1962 */                     //         e += m * (vx * vx + vy * vy + vz * vz) / 2.
/*  1963 */                     //         ^
/*  1964 */                     //
/*  1965 */                     $currLineNo = 94;
/*  1966 */                     $currColNo = 8;
/*  1967 */ 
/*  1968 */                     if (e === undefined) {
/*  1969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1970 */                     }
/*  1971 */                     if (m === undefined) {
/*  1972 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  1973 */                     }
/*  1974 */                     if (vx === undefined) {
/*  1975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  1976 */                     }
/*  1977 */                     if (vx === undefined) {
/*  1978 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  1979 */                     }
/*  1980 */                     var $binop341 = Sk.abstr.numberBinOp(vx, vx, 'Mult');
/*  1981 */                     if (vy === undefined) {
/*  1982 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  1983 */                     }
/*  1984 */                     if (vy === undefined) {
/*  1985 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  1986 */                     }
/*  1987 */                     var $binop342 = Sk.abstr.numberBinOp(vy, vy, 'Mult');
/*  1988 */                     var $binop343 = Sk.abstr.numberBinOp($binop341, $binop342, 'Add');
/*  1989 */                     if (vz === undefined) {
/*  1990 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  1991 */                     }
/*  1992 */                     if (vz === undefined) {
/*  1993 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  1994 */                     }
/*  1995 */                     var $binop344 = Sk.abstr.numberBinOp(vz, vz, 'Mult');
/*  1996 */                     var $binop345 = Sk.abstr.numberBinOp($binop343, $binop344, 'Add');
/*  1997 */                     var $binop346 = Sk.abstr.numberBinOp(m, $binop345, 'Mult');
/*  1998 */                     var $binop347 = Sk.abstr.numberBinOp($binop346, new Sk.builtin.float_(2), 'Div');
/*  1999 */                     var $inplbinop348 = Sk.abstr.numberInplaceBinOp(e, $binop347, 'Add');
/*  2000 */                     e = $inplbinop348;
/*  2001 */                     $blk = 5; /* jump */
/*  2002 */                     continue;
/*  2003 */                 case 6:
/*  2004 */                     /* --- for cleanup --- */
/*  2005 */                     $blk = 7; /* allowing case fallthrough */
/*  2006 */                 case 7:
/*  2007 */                     /* --- for end --- */
/*  2008 */                     return Sk.builtin.none.none$;
/*  2009 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2010 */                 }
/*  2011 */             } catch (err) {
/*  2012 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2013 */                     err = new Sk.builtin.ExternalError(err);
/*  2014 */                 }
/*  2015 */                 err.traceback.push({
/*  2016 */                     lineno: $currLineNo,
/*  2017 */                     colno: $currColNo,
/*  2018 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2019 */                 });
/*  2020 */                 if ($exc.length > 0) {
/*  2021 */                     $err = err;
/*  2022 */                     $blk = $exc.pop();
/*  2023 */                     continue;
/*  2024 */                 } else {
/*  2025 */                     throw err;
/*  2026 */                 }
/*  2027 */             }
/*  2028 */         }
/*  2029 */     });
/*  2030 */     var $scope351 = (function $offset_momentum352$(ref, bodies, px, py, pz) {
/*  2031 */         var m, r, v, vx, vy, vz; /* locals */
/*  2032 */         var bodies, bodies, bodies, m, m, m, m, m, m, m, m, px, px, px, px, px, py, py, py, py, py, pz, pz, pz, pz, pz, r, r, ref, ref, v, v, v, v, vx, vx, vy, vy, vz, vz, $iter353, $iter353, $binop364, $binop365, $binop366;
/*  2033 */         var $wakeFromSuspension = function() {
/*  2034 */             var susp = $scope351.$wakingSuspension;
/*  2035 */             delete $scope351.$wakingSuspension;
/*  2036 */             $blk = susp.$blk;
/*  2037 */             $loc = susp.$loc;
/*  2038 */             $gbl = susp.$gbl;
/*  2039 */             $exc = susp.$exc;
/*  2040 */             $err = susp.$err;
/*  2041 */             $postfinally = susp.$postfinally;
/*  2042 */             $currLineNo = susp.$lineno;
/*  2043 */             $currColNo = susp.$colno;
/*  2044 */             Sk.lastYield = Date.now();
/*  2045 */             bodies = susp.$tmps.bodies;
/*  2046 */             m = susp.$tmps.m;
/*  2047 */             px = susp.$tmps.px;
/*  2048 */             py = susp.$tmps.py;
/*  2049 */             pz = susp.$tmps.pz;
/*  2050 */             r = susp.$tmps.r;
/*  2051 */             ref = susp.$tmps.ref;
/*  2052 */             v = susp.$tmps.v;
/*  2053 */             vx = susp.$tmps.vx;
/*  2054 */             vy = susp.$tmps.vy;
/*  2055 */             vz = susp.$tmps.vz;
/*  2056 */             $iter353 = susp.$tmps.$iter353;
/*  2057 */             $binop364 = susp.$tmps.$binop364;
/*  2058 */             $binop365 = susp.$tmps.$binop365;
/*  2059 */             $binop366 = susp.$tmps.$binop366;
/*  2060 */             try {
/*  2061 */                 $ret = susp.child.resume();
/*  2062 */             } catch (err) {
/*  2063 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2064 */                     err = new Sk.builtin.ExternalError(err);
/*  2065 */                 }
/*  2066 */                 err.traceback.push({
/*  2067 */                     lineno: $currLineNo,
/*  2068 */                     colno: $currColNo,
/*  2069 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2070 */                 });
/*  2071 */                 if ($exc.length > 0) {
/*  2072 */                     $err = err;
/*  2073 */                     $blk = $exc.pop();
/*  2074 */                 } else {
/*  2075 */                     throw err;
/*  2076 */                 }
/*  2077 */             }
/*  2078 */         };
/*  2079 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2080 */             var susp = new Sk.misceval.Suspension();
/*  2081 */             susp.child = $child;
/*  2082 */             susp.resume = function() {
/*  2083 */                 $scope351.$wakingSuspension = susp;
/*  2084 */                 return $scope351();
/*  2085 */             };
/*  2086 */             susp.data = susp.child.data;
/*  2087 */             susp.$blk = $blk;
/*  2088 */             susp.$loc = $loc;
/*  2089 */             susp.$gbl = $gbl;
/*  2090 */             susp.$exc = $exc;
/*  2091 */             susp.$err = $err;
/*  2092 */             susp.$postfinally = $postfinally;
/*  2093 */             susp.$filename = $filename;
/*  2094 */             susp.$lineno = $lineno;
/*  2095 */             susp.$colno = $colno;
/*  2096 */             susp.optional = susp.child.optional;
/*  2097 */             susp.$tmps = {
/*  2098 */                 "bodies": bodies,
/*  2099 */                 "m": m,
/*  2100 */                 "px": px,
/*  2101 */                 "py": py,
/*  2102 */                 "pz": pz,
/*  2103 */                 "r": r,
/*  2104 */                 "ref": ref,
/*  2105 */                 "v": v,
/*  2106 */                 "vx": vx,
/*  2107 */                 "vy": vy,
/*  2108 */                 "vz": vz,
/*  2109 */                 "$iter353": $iter353,
/*  2110 */                 "$binop364": $binop364,
/*  2111 */                 "$binop365": $binop365,
/*  2112 */                 "$binop366": $binop366
/*  2113 */             };
/*  2114 */             return susp;
/*  2115 */         };
/*  2116 */         var $blk = 0,
/*  2117 */             $exc = [],
/*  2118 */             $loc = {},
/*  2119 */             $gbl = this,
/*  2120 */             $err = undefined,
/*  2121 */             $ret = undefined,
/*  2122 */             $postfinally = undefined,
/*  2123 */             $currLineNo = undefined,
/*  2124 */             $currColNo = undefined;
/*  2125 */         if ($scope351.$wakingSuspension !== undefined) {
/*  2126 */             $wakeFromSuspension();
/*  2127 */         } else {
/*  2128 */             if (bodies === undefined) bodies = $scope351.$defaults[0];
/*  2129 */             if (px === undefined) px = $scope351.$defaults[1];
/*  2130 */             if (py === undefined) py = $scope351.$defaults[2];
/*  2131 */             if (pz === undefined) pz = $scope351.$defaults[3];
/*  2132 */             Sk.builtin.pyCheckArgs("offset_momentum", arguments, 1, 5, false, false);
/*  2133 */         }
/*  2134 */         while (true) {
/*  2135 */             try {
/*  2136 */                 switch ($blk) {
/*  2137 */                 case 0:
/*  2138 */                     /* --- codeobj entry --- */
/*  2139 */                     if (ref === undefined) {
/*  2140 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2141 */                     }
/*  2142 */                     if (bodies === undefined) {
/*  2143 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2144 */                     }
/*  2145 */                     if (px === undefined) {
/*  2146 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2147 */                     }
/*  2148 */                     if (py === undefined) {
/*  2149 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2150 */                     }
/*  2151 */                     if (pz === undefined) {
/*  2152 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2153 */                     }
/*  2154 */                     if (bodies === undefined) {
/*  2155 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2156 */                     }
/*  2157 */                     if (px === undefined) {
/*  2158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2159 */                     }
/*  2160 */                     if (py === undefined) {
/*  2161 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2162 */                     }
/*  2163 */                     if (pz === undefined) {
/*  2164 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2165 */                     }
/*  2166 */ 
/*  2167 */                     //
/*  2168 */                     // line 98:
/*  2169 */                     //     for (r, [vx, vy, vz], m) in bodies:
/*  2170 */                     //     ^
/*  2171 */                     //
/*  2172 */                     $currLineNo = 98;
/*  2173 */                     $currColNo = 4;
/*  2174 */ 
/*  2175 */                     if (bodies === undefined) {
/*  2176 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2177 */                     }
/*  2178 */                     var $iter353 = Sk.abstr.iter(bodies);
/*  2179 */                     $blk = 1; /* allowing case fallthrough */
/*  2180 */                 case 1:
/*  2181 */                     /* --- for start --- */
/*  2182 */                     $ret = Sk.abstr.iternext($iter353, true);
/*  2183 */                     $blk = 4; /* allowing case fallthrough */
/*  2184 */                 case 4:
/*  2185 */                     /* --- function return or resume suspension --- */
/*  2186 */                     if ($ret && $ret.$isSuspension) {
/*  2187 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 98, 4);
/*  2188 */                     }
/*  2189 */                     var $next354 = $ret;
/*  2190 */                     if ($next354 === undefined) {
/*  2191 */                         $blk = 2;
/*  2192 */                         continue;
/*  2193 */                     }
/*  2194 */                     var $items355 = Sk.abstr.sequenceUnpack($next354, 3);
/*  2195 */                     r = $items355[0];
/*  2196 */                     var $items356 = Sk.abstr.sequenceUnpack($items355[1], 3);
/*  2197 */                     vx = $items356[0];
/*  2198 */                     vy = $items356[1];
/*  2199 */                     vz = $items356[2];
/*  2200 */                     m = $items355[2];
/*  2201 */                     //
/*  2202 */                     // line 99:
/*  2203 */                     //         px -= vx * m
/*  2204 */                     //         ^
/*  2205 */                     //
/*  2206 */                     $currLineNo = 99;
/*  2207 */                     $currColNo = 8;
/*  2208 */ 
/*  2209 */                     if (px === undefined) {
/*  2210 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2211 */                     }
/*  2212 */                     if (vx === undefined) {
/*  2213 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  2214 */                     }
/*  2215 */                     if (m === undefined) {
/*  2216 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2217 */                     }
/*  2218 */                     var $binop357 = Sk.abstr.numberBinOp(vx, m, 'Mult');
/*  2219 */                     var $inplbinop358 = Sk.abstr.numberInplaceBinOp(px, $binop357, 'Sub');
/*  2220 */                     px = $inplbinop358;
/*  2221 */                     //
/*  2222 */                     // line 100:
/*  2223 */                     //         py -= vy * m
/*  2224 */                     //         ^
/*  2225 */                     //
/*  2226 */                     $currLineNo = 100;
/*  2227 */                     $currColNo = 8;
/*  2228 */ 
/*  2229 */                     if (py === undefined) {
/*  2230 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2231 */                     }
/*  2232 */                     if (vy === undefined) {
/*  2233 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  2234 */                     }
/*  2235 */                     if (m === undefined) {
/*  2236 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2237 */                     }
/*  2238 */                     var $binop359 = Sk.abstr.numberBinOp(vy, m, 'Mult');
/*  2239 */                     var $inplbinop360 = Sk.abstr.numberInplaceBinOp(py, $binop359, 'Sub');
/*  2240 */                     py = $inplbinop360;
/*  2241 */                     //
/*  2242 */                     // line 101:
/*  2243 */                     //         pz -= vz * m
/*  2244 */                     //         ^
/*  2245 */                     //
/*  2246 */                     $currLineNo = 101;
/*  2247 */                     $currColNo = 8;
/*  2248 */ 
/*  2249 */                     if (pz === undefined) {
/*  2250 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2251 */                     }
/*  2252 */                     if (vz === undefined) {
/*  2253 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  2254 */                     }
/*  2255 */                     if (m === undefined) {
/*  2256 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2257 */                     }
/*  2258 */                     var $binop361 = Sk.abstr.numberBinOp(vz, m, 'Mult');
/*  2259 */                     var $inplbinop362 = Sk.abstr.numberInplaceBinOp(pz, $binop361, 'Sub');
/*  2260 */                     pz = $inplbinop362;
/*  2261 */                     $blk = 1; /* jump */
/*  2262 */                     continue;
/*  2263 */                 case 2:
/*  2264 */                     /* --- for cleanup --- */
/*  2265 */                     $blk = 3; /* allowing case fallthrough */
/*  2266 */                 case 3:
/*  2267 */                     /* --- for end --- */
/*  2268 */                     //
/*  2269 */                     // line 102:
/*  2270 */                     //     (r, v, m) = ref
/*  2271 */                     //     ^
/*  2272 */                     //
/*  2273 */                     $currLineNo = 102;
/*  2274 */                     $currColNo = 4;
/*  2275 */ 
/*  2276 */                     if (ref === undefined) {
/*  2277 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2278 */                     }
/*  2279 */                     var $items363 = Sk.abstr.sequenceUnpack(ref, 3);
/*  2280 */                     r = $items363[0];
/*  2281 */                     v = $items363[1];
/*  2282 */                     m = $items363[2];
/*  2283 */                     //
/*  2284 */                     // line 103:
/*  2285 */                     //     v[0] = px / m
/*  2286 */                     //     ^
/*  2287 */                     //
/*  2288 */                     $currLineNo = 103;
/*  2289 */                     $currColNo = 4;
/*  2290 */ 
/*  2291 */                     if (px === undefined) {
/*  2292 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2293 */                     }
/*  2294 */                     if (m === undefined) {
/*  2295 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2296 */                     }
/*  2297 */                     var $binop364 = Sk.abstr.numberBinOp(px, m, 'Div');
/*  2298 */                     if (v === undefined) {
/*  2299 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2300 */                     }
/*  2301 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(0), $binop364, true);
/*  2302 */                     $blk = 5; /* allowing case fallthrough */
/*  2303 */                 case 5:
/*  2304 */                     /* --- function return or resume suspension --- */
/*  2305 */                     if ($ret && $ret.$isSuspension) {
/*  2306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2307 */                     }
/*  2308 */                     //
/*  2309 */                     // line 104:
/*  2310 */                     //     v[1] = py / m
/*  2311 */                     //     ^
/*  2312 */                     //
/*  2313 */                     $currLineNo = 104;
/*  2314 */                     $currColNo = 4;
/*  2315 */ 
/*  2316 */                     if (py === undefined) {
/*  2317 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2318 */                     }
/*  2319 */                     if (m === undefined) {
/*  2320 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2321 */                     }
/*  2322 */                     var $binop365 = Sk.abstr.numberBinOp(py, m, 'Div');
/*  2323 */                     if (v === undefined) {
/*  2324 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2325 */                     }
/*  2326 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(1), $binop365, true);
/*  2327 */                     $blk = 6; /* allowing case fallthrough */
/*  2328 */                 case 6:
/*  2329 */                     /* --- function return or resume suspension --- */
/*  2330 */                     if ($ret && $ret.$isSuspension) {
/*  2331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2332 */                     }
/*  2333 */                     //
/*  2334 */                     // line 105:
/*  2335 */                     //     v[2] = pz / m
/*  2336 */                     //     ^
/*  2337 */                     //
/*  2338 */                     $currLineNo = 105;
/*  2339 */                     $currColNo = 4;
/*  2340 */ 
/*  2341 */                     if (pz === undefined) {
/*  2342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2343 */                     }
/*  2344 */                     if (m === undefined) {
/*  2345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2346 */                     }
/*  2347 */                     var $binop366 = Sk.abstr.numberBinOp(pz, m, 'Div');
/*  2348 */                     if (v === undefined) {
/*  2349 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2350 */                     }
/*  2351 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(2), $binop366, true);
/*  2352 */                     $blk = 7; /* allowing case fallthrough */
/*  2353 */                 case 7:
/*  2354 */                     /* --- function return or resume suspension --- */
/*  2355 */                     if ($ret && $ret.$isSuspension) {
/*  2356 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2357 */                     }
/*  2358 */                     return Sk.builtin.none.none$;
/*  2359 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2360 */                 }
/*  2361 */             } catch (err) {
/*  2362 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2363 */                     err = new Sk.builtin.ExternalError(err);
/*  2364 */                 }
/*  2365 */                 err.traceback.push({
/*  2366 */                     lineno: $currLineNo,
/*  2367 */                     colno: $currColNo,
/*  2368 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2369 */                 });
/*  2370 */                 if ($exc.length > 0) {
/*  2371 */                     $err = err;
/*  2372 */                     $blk = $exc.pop();
/*  2373 */                     continue;
/*  2374 */                 } else {
/*  2375 */                     throw err;
/*  2376 */                 }
/*  2377 */             }
/*  2378 */         }
/*  2379 */     });
/*  2380 */     var $scope369 = (function $main370$(n, ref) {
/*  2381 */         var i, t0, times, tk; /* locals */
/*  2382 */         var i, n, n, ref, ref, ref, t0, t0, times, times, times, tk, tk, $loadgbl372, $iter374, $loadgbl372, $call373, $iter374, $loadgbl376, $loadgbl376, $lattr377, $loadgbl379, $loadgbl380, $loadgbl379, $loadgbl380, $lsubscr381, $loadgbl383, $loadgbl385, $loadgbl386, $loadgbl388, $loadgbl390, $loadgbl390, $lattr391, $lattr393, $binop394;
/*  2383 */         var $wakeFromSuspension = function() {
/*  2384 */             var susp = $scope369.$wakingSuspension;
/*  2385 */             delete $scope369.$wakingSuspension;
/*  2386 */             $blk = susp.$blk;
/*  2387 */             $loc = susp.$loc;
/*  2388 */             $gbl = susp.$gbl;
/*  2389 */             $exc = susp.$exc;
/*  2390 */             $err = susp.$err;
/*  2391 */             $postfinally = susp.$postfinally;
/*  2392 */             $currLineNo = susp.$lineno;
/*  2393 */             $currColNo = susp.$colno;
/*  2394 */             Sk.lastYield = Date.now();
/*  2395 */             i = susp.$tmps.i;
/*  2396 */             n = susp.$tmps.n;
/*  2397 */             ref = susp.$tmps.ref;
/*  2398 */             t0 = susp.$tmps.t0;
/*  2399 */             times = susp.$tmps.times;
/*  2400 */             tk = susp.$tmps.tk;
/*  2401 */             $loadgbl372 = susp.$tmps.$loadgbl372;
/*  2402 */             $iter374 = susp.$tmps.$iter374;
/*  2403 */             $call373 = susp.$tmps.$call373;
/*  2404 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  2405 */             $lattr377 = susp.$tmps.$lattr377;
/*  2406 */             $loadgbl379 = susp.$tmps.$loadgbl379;
/*  2407 */             $loadgbl380 = susp.$tmps.$loadgbl380;
/*  2408 */             $lsubscr381 = susp.$tmps.$lsubscr381;
/*  2409 */             $loadgbl383 = susp.$tmps.$loadgbl383;
/*  2410 */             $loadgbl385 = susp.$tmps.$loadgbl385;
/*  2411 */             $loadgbl386 = susp.$tmps.$loadgbl386;
/*  2412 */             $loadgbl388 = susp.$tmps.$loadgbl388;
/*  2413 */             $loadgbl390 = susp.$tmps.$loadgbl390;
/*  2414 */             $lattr391 = susp.$tmps.$lattr391;
/*  2415 */             $lattr393 = susp.$tmps.$lattr393;
/*  2416 */             $binop394 = susp.$tmps.$binop394;
/*  2417 */             try {
/*  2418 */                 $ret = susp.child.resume();
/*  2419 */             } catch (err) {
/*  2420 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2421 */                     err = new Sk.builtin.ExternalError(err);
/*  2422 */                 }
/*  2423 */                 err.traceback.push({
/*  2424 */                     lineno: $currLineNo,
/*  2425 */                     colno: $currColNo,
/*  2426 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2427 */                 });
/*  2428 */                 if ($exc.length > 0) {
/*  2429 */                     $err = err;
/*  2430 */                     $blk = $exc.pop();
/*  2431 */                 } else {
/*  2432 */                     throw err;
/*  2433 */                 }
/*  2434 */             }
/*  2435 */         };
/*  2436 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2437 */             var susp = new Sk.misceval.Suspension();
/*  2438 */             susp.child = $child;
/*  2439 */             susp.resume = function() {
/*  2440 */                 $scope369.$wakingSuspension = susp;
/*  2441 */                 return $scope369();
/*  2442 */             };
/*  2443 */             susp.data = susp.child.data;
/*  2444 */             susp.$blk = $blk;
/*  2445 */             susp.$loc = $loc;
/*  2446 */             susp.$gbl = $gbl;
/*  2447 */             susp.$exc = $exc;
/*  2448 */             susp.$err = $err;
/*  2449 */             susp.$postfinally = $postfinally;
/*  2450 */             susp.$filename = $filename;
/*  2451 */             susp.$lineno = $lineno;
/*  2452 */             susp.$colno = $colno;
/*  2453 */             susp.optional = susp.child.optional;
/*  2454 */             susp.$tmps = {
/*  2455 */                 "i": i,
/*  2456 */                 "n": n,
/*  2457 */                 "ref": ref,
/*  2458 */                 "t0": t0,
/*  2459 */                 "times": times,
/*  2460 */                 "tk": tk,
/*  2461 */                 "$loadgbl372": $loadgbl372,
/*  2462 */                 "$iter374": $iter374,
/*  2463 */                 "$call373": $call373,
/*  2464 */                 "$loadgbl376": $loadgbl376,
/*  2465 */                 "$lattr377": $lattr377,
/*  2466 */                 "$loadgbl379": $loadgbl379,
/*  2467 */                 "$loadgbl380": $loadgbl380,
/*  2468 */                 "$lsubscr381": $lsubscr381,
/*  2469 */                 "$loadgbl383": $loadgbl383,
/*  2470 */                 "$loadgbl385": $loadgbl385,
/*  2471 */                 "$loadgbl386": $loadgbl386,
/*  2472 */                 "$loadgbl388": $loadgbl388,
/*  2473 */                 "$loadgbl390": $loadgbl390,
/*  2474 */                 "$lattr391": $lattr391,
/*  2475 */                 "$lattr393": $lattr393,
/*  2476 */                 "$binop394": $binop394
/*  2477 */             };
/*  2478 */             return susp;
/*  2479 */         };
/*  2480 */         var $blk = 0,
/*  2481 */             $exc = [],
/*  2482 */             $loc = {},
/*  2483 */             $gbl = this,
/*  2484 */             $err = undefined,
/*  2485 */             $ret = undefined,
/*  2486 */             $postfinally = undefined,
/*  2487 */             $currLineNo = undefined,
/*  2488 */             $currColNo = undefined;
/*  2489 */         if ($scope369.$wakingSuspension !== undefined) {
/*  2490 */             $wakeFromSuspension();
/*  2491 */         } else {
/*  2492 */             if (ref === undefined) ref = $scope369.$defaults[0];
/*  2493 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 2, false, false);
/*  2494 */         }
/*  2495 */         while (true) {
/*  2496 */             try {
/*  2497 */                 switch ($blk) {
/*  2498 */                 case 0:
/*  2499 */                     /* --- codeobj entry --- */
/*  2500 */                     if (n === undefined) {
/*  2501 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2502 */                     }
/*  2503 */                     if (ref === undefined) {
/*  2504 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2505 */                     }
/*  2506 */                     if (ref === undefined) {
/*  2507 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2508 */                     }
/*  2509 */ 
/*  2510 */                     //
/*  2511 */                     // line 112:
/*  2512 */                     //     times = []
/*  2513 */                     //     ^
/*  2514 */                     //
/*  2515 */                     $currLineNo = 112;
/*  2516 */                     $currColNo = 4;
/*  2517 */ 
/*  2518 */                     var $loadlist371 = new Sk.builtins['list']([]);
/*  2519 */                     times = $loadlist371;
/*  2520 */                     //
/*  2521 */                     // line 113:
/*  2522 */                     //     for i in range(n):
/*  2523 */                     //     ^
/*  2524 */                     //
/*  2525 */                     $currLineNo = 113;
/*  2526 */                     $currColNo = 4;
/*  2527 */ 
/*  2528 */                     var $loadgbl372 = Sk.misceval.loadname('range', $gbl);
/*  2529 */                     if (n === undefined) {
/*  2530 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2531 */                     }
/*  2532 */                     $ret;
/*  2533 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl372, n);
/*  2534 */                     $blk = 4; /* allowing case fallthrough */
/*  2535 */                 case 4:
/*  2536 */                     /* --- function return or resume suspension --- */
/*  2537 */                     if ($ret && $ret.$isSuspension) {
/*  2538 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 113, 13);
/*  2539 */                     }
/*  2540 */                     var $call373 = $ret;
/*  2541 */                     //
/*  2542 */                     // line 113:
/*  2543 */                     //     for i in range(n):
/*  2544 */                     //              ^
/*  2545 */                     //
/*  2546 */                     $currLineNo = 113;
/*  2547 */                     $currColNo = 13;
/*  2548 */ 
/*  2549 */                     var $iter374 = Sk.abstr.iter($call373);
/*  2550 */                     $blk = 1; /* allowing case fallthrough */
/*  2551 */                 case 1:
/*  2552 */                     /* --- for start --- */
/*  2553 */                     $ret = Sk.abstr.iternext($iter374, true);
/*  2554 */                     $blk = 5; /* allowing case fallthrough */
/*  2555 */                 case 5:
/*  2556 */                     /* --- function return or resume suspension --- */
/*  2557 */                     if ($ret && $ret.$isSuspension) {
/*  2558 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 113, 4);
/*  2559 */                     }
/*  2560 */                     var $next375 = $ret;
/*  2561 */                     if ($next375 === undefined) {
/*  2562 */                         $blk = 2;
/*  2563 */                         continue;
/*  2564 */                     }
/*  2565 */                     i = $next375;
/*  2566 */                     //
/*  2567 */                     // line 114:
/*  2568 */                     //         t0 = time.time()
/*  2569 */                     //         ^
/*  2570 */                     //
/*  2571 */                     $currLineNo = 114;
/*  2572 */                     $currColNo = 8;
/*  2573 */ 
/*  2574 */                     var $loadgbl376 = Sk.misceval.loadname('time', $gbl);
/*  2575 */                     $ret = Sk.abstr.gattr($loadgbl376, 'time', true);
/*  2576 */                     $blk = 6; /* allowing case fallthrough */
/*  2577 */                 case 6:
/*  2578 */                     /* --- function return or resume suspension --- */
/*  2579 */                     if ($ret && $ret.$isSuspension) {
/*  2580 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 114, 13);
/*  2581 */                     }
/*  2582 */                     var $lattr377 = $ret;
/*  2583 */                     $ret;
/*  2584 */                     $ret = Sk.misceval.callsimOrSuspend($lattr377);
/*  2585 */                     $blk = 7; /* allowing case fallthrough */
/*  2586 */                 case 7:
/*  2587 */                     /* --- function return or resume suspension --- */
/*  2588 */                     if ($ret && $ret.$isSuspension) {
/*  2589 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 114, 13);
/*  2590 */                     }
/*  2591 */                     var $call378 = $ret;
/*  2592 */                     //
/*  2593 */                     // line 114:
/*  2594 */                     //         t0 = time.time()
/*  2595 */                     //              ^
/*  2596 */                     //
/*  2597 */                     $currLineNo = 114;
/*  2598 */                     $currColNo = 13;
/*  2599 */ 
/*  2600 */                     t0 = $call378;
/*  2601 */                     //
/*  2602 */                     // line 115:
/*  2603 */                     //         offset_momentum(BODIES[ref])
/*  2604 */                     //         ^
/*  2605 */                     //
/*  2606 */                     $currLineNo = 115;
/*  2607 */                     $currColNo = 8;
/*  2608 */ 
/*  2609 */                     var $loadgbl379 = Sk.misceval.loadname('offset_momentum', $gbl);
/*  2610 */                     var $loadgbl380 = Sk.misceval.loadname('BODIES', $gbl);
/*  2611 */                     if (ref === undefined) {
/*  2612 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2613 */                     }
/*  2614 */                     $ret = Sk.abstr.objectGetItem($loadgbl380, ref, true);
/*  2615 */                     $blk = 8; /* allowing case fallthrough */
/*  2616 */                 case 8:
/*  2617 */                     /* --- function return or resume suspension --- */
/*  2618 */                     if ($ret && $ret.$isSuspension) {
/*  2619 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2620 */                     }
/*  2621 */                     var $lsubscr381 = $ret;
/*  2622 */                     $ret;
/*  2623 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl379, $lsubscr381);
/*  2624 */                     $blk = 9; /* allowing case fallthrough */
/*  2625 */                 case 9:
/*  2626 */                     /* --- function return or resume suspension --- */
/*  2627 */                     if ($ret && $ret.$isSuspension) {
/*  2628 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 115, 8);
/*  2629 */                     }
/*  2630 */                     var $call382 = $ret;
/*  2631 */                     //
/*  2632 */                     // line 115:
/*  2633 */                     //         offset_momentum(BODIES[ref])
/*  2634 */                     //         ^
/*  2635 */                     //
/*  2636 */                     $currLineNo = 115;
/*  2637 */                     $currColNo = 8;
/*  2638 */ 
/*  2639 */ 
/*  2640 */                     //
/*  2641 */                     // line 116:
/*  2642 */                     //         report_energy()
/*  2643 */                     //         ^
/*  2644 */                     //
/*  2645 */                     $currLineNo = 116;
/*  2646 */                     $currColNo = 8;
/*  2647 */ 
/*  2648 */                     var $loadgbl383 = Sk.misceval.loadname('report_energy', $gbl);
/*  2649 */                     $ret;
/*  2650 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl383);
/*  2651 */                     $blk = 10; /* allowing case fallthrough */
/*  2652 */                 case 10:
/*  2653 */                     /* --- function return or resume suspension --- */
/*  2654 */                     if ($ret && $ret.$isSuspension) {
/*  2655 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 116, 8);
/*  2656 */                     }
/*  2657 */                     var $call384 = $ret;
/*  2658 */                     //
/*  2659 */                     // line 116:
/*  2660 */                     //         report_energy()
/*  2661 */                     //         ^
/*  2662 */                     //
/*  2663 */                     $currLineNo = 116;
/*  2664 */                     $currColNo = 8;
/*  2665 */ 
/*  2666 */ 
/*  2667 */                     //
/*  2668 */                     // line 117:
/*  2669 */                     //         advance(0.01, NUMBER_OF_ITERATIONS)
/*  2670 */                     //         ^
/*  2671 */                     //
/*  2672 */                     $currLineNo = 117;
/*  2673 */                     $currColNo = 8;
/*  2674 */ 
/*  2675 */                     var $loadgbl385 = Sk.misceval.loadname('advance', $gbl);
/*  2676 */                     var $loadgbl386 = Sk.misceval.loadname('NUMBER_OF_ITERATIONS', $gbl);
/*  2677 */                     $ret;
/*  2678 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl385, new Sk.builtin.float_(0.01), $loadgbl386);
/*  2679 */                     $blk = 11; /* allowing case fallthrough */
/*  2680 */                 case 11:
/*  2681 */                     /* --- function return or resume suspension --- */
/*  2682 */                     if ($ret && $ret.$isSuspension) {
/*  2683 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 117, 8);
/*  2684 */                     }
/*  2685 */                     var $call387 = $ret;
/*  2686 */                     //
/*  2687 */                     // line 117:
/*  2688 */                     //         advance(0.01, NUMBER_OF_ITERATIONS)
/*  2689 */                     //         ^
/*  2690 */                     //
/*  2691 */                     $currLineNo = 117;
/*  2692 */                     $currColNo = 8;
/*  2693 */ 
/*  2694 */ 
/*  2695 */                     //
/*  2696 */                     // line 118:
/*  2697 */                     //         report_energy()
/*  2698 */                     //         ^
/*  2699 */                     //
/*  2700 */                     $currLineNo = 118;
/*  2701 */                     $currColNo = 8;
/*  2702 */ 
/*  2703 */                     var $loadgbl388 = Sk.misceval.loadname('report_energy', $gbl);
/*  2704 */                     $ret;
/*  2705 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl388);
/*  2706 */                     $blk = 12; /* allowing case fallthrough */
/*  2707 */                 case 12:
/*  2708 */                     /* --- function return or resume suspension --- */
/*  2709 */                     if ($ret && $ret.$isSuspension) {
/*  2710 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 118, 8);
/*  2711 */                     }
/*  2712 */                     var $call389 = $ret;
/*  2713 */                     //
/*  2714 */                     // line 118:
/*  2715 */                     //         report_energy()
/*  2716 */                     //         ^
/*  2717 */                     //
/*  2718 */                     $currLineNo = 118;
/*  2719 */                     $currColNo = 8;
/*  2720 */ 
/*  2721 */ 
/*  2722 */                     //
/*  2723 */                     // line 119:
/*  2724 */                     //         tk = time.time()
/*  2725 */                     //         ^
/*  2726 */                     //
/*  2727 */                     $currLineNo = 119;
/*  2728 */                     $currColNo = 8;
/*  2729 */ 
/*  2730 */                     var $loadgbl390 = Sk.misceval.loadname('time', $gbl);
/*  2731 */                     $ret = Sk.abstr.gattr($loadgbl390, 'time', true);
/*  2732 */                     $blk = 13; /* allowing case fallthrough */
/*  2733 */                 case 13:
/*  2734 */                     /* --- function return or resume suspension --- */
/*  2735 */                     if ($ret && $ret.$isSuspension) {
/*  2736 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 119, 13);
/*  2737 */                     }
/*  2738 */                     var $lattr391 = $ret;
/*  2739 */                     $ret;
/*  2740 */                     $ret = Sk.misceval.callsimOrSuspend($lattr391);
/*  2741 */                     $blk = 14; /* allowing case fallthrough */
/*  2742 */                 case 14:
/*  2743 */                     /* --- function return or resume suspension --- */
/*  2744 */                     if ($ret && $ret.$isSuspension) {
/*  2745 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 119, 13);
/*  2746 */                     }
/*  2747 */                     var $call392 = $ret;
/*  2748 */                     //
/*  2749 */                     // line 119:
/*  2750 */                     //         tk = time.time()
/*  2751 */                     //              ^
/*  2752 */                     //
/*  2753 */                     $currLineNo = 119;
/*  2754 */                     $currColNo = 13;
/*  2755 */ 
/*  2756 */                     tk = $call392;
/*  2757 */                     //
/*  2758 */                     // line 120:
/*  2759 */                     //         times.append(tk - t0)
/*  2760 */                     //         ^
/*  2761 */                     //
/*  2762 */                     $currLineNo = 120;
/*  2763 */                     $currColNo = 8;
/*  2764 */ 
/*  2765 */                     if (times === undefined) {
/*  2766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2767 */                     }
/*  2768 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  2769 */                     $blk = 15; /* allowing case fallthrough */
/*  2770 */                 case 15:
/*  2771 */                     /* --- function return or resume suspension --- */
/*  2772 */                     if ($ret && $ret.$isSuspension) {
/*  2773 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 120, 8);
/*  2774 */                     }
/*  2775 */                     var $lattr393 = $ret;
/*  2776 */                     if (tk === undefined) {
/*  2777 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tk\' referenced before assignment');
/*  2778 */                     }
/*  2779 */                     if (t0 === undefined) {
/*  2780 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t0\' referenced before assignment');
/*  2781 */                     }
/*  2782 */                     var $binop394 = Sk.abstr.numberBinOp(tk, t0, 'Sub');
/*  2783 */                     $ret;
/*  2784 */                     $ret = Sk.misceval.callsimOrSuspend($lattr393, $binop394);
/*  2785 */                     $blk = 16; /* allowing case fallthrough */
/*  2786 */                 case 16:
/*  2787 */                     /* --- function return or resume suspension --- */
/*  2788 */                     if ($ret && $ret.$isSuspension) {
/*  2789 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 120, 8);
/*  2790 */                     }
/*  2791 */                     var $call395 = $ret;
/*  2792 */                     //
/*  2793 */                     // line 120:
/*  2794 */                     //         times.append(tk - t0)
/*  2795 */                     //         ^
/*  2796 */                     //
/*  2797 */                     $currLineNo = 120;
/*  2798 */                     $currColNo = 8;
/*  2799 */ 
/*  2800 */                     $blk = 1; /* jump */
/*  2801 */                     continue;
/*  2802 */                 case 2:
/*  2803 */                     /* --- for cleanup --- */
/*  2804 */                     $blk = 3; /* allowing case fallthrough */
/*  2805 */                 case 3:
/*  2806 */                     /* --- for end --- */
/*  2807 */                     //
/*  2808 */                     // line 121:
/*  2809 */                     //     return times
/*  2810 */                     //     ^
/*  2811 */                     //
/*  2812 */                     $currLineNo = 121;
/*  2813 */                     $currColNo = 4;
/*  2814 */ 
/*  2815 */                     if (times === undefined) {
/*  2816 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2817 */                     }
/*  2818 */                     return times;
/*  2819 */                     return Sk.builtin.none.none$;
/*  2820 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2821 */                 }
/*  2822 */             } catch (err) {
/*  2823 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2824 */                     err = new Sk.builtin.ExternalError(err);
/*  2825 */                 }
/*  2826 */                 err.traceback.push({
/*  2827 */                     lineno: $currLineNo,
/*  2828 */                     colno: $currColNo,
/*  2829 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2830 */                 });
/*  2831 */                 if ($exc.length > 0) {
/*  2832 */                     $err = err;
/*  2833 */                     $blk = $exc.pop();
/*  2834 */                     continue;
/*  2835 */                 } else {
/*  2836 */                     throw err;
/*  2837 */                 }
/*  2838 */             }
/*  2839 */         }
/*  2840 */     });
/*  2841 */     return $scope120;
/*  2842 */ }();
