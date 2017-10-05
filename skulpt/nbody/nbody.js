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
/*    82 */         if (typeof Sk.execStart === 'undefined') {
/*    83 */             Sk.execStart = Date.now()
/*    84 */         }
/*    85 */         if (typeof Sk.lastYield === 'undefined') {
/*    86 */             Sk.lastYield = Date.now()
/*    87 */         }
/*    88 */         if ($scope120.$wakingSuspension !== undefined) {
/*    89 */             $wakeFromSuspension();
/*    90 */         }
/*    91 */         if (Sk.retainGlobals) {
/*    92 */             if (Sk.globals) {
/*    93 */                 $gbl = Sk.globals;
/*    94 */                 Sk.globals = $gbl;
/*    95 */                 $loc = $gbl;
/*    96 */             } else {
/*    97 */                 Sk.globals = $gbl;
/*    98 */             }
/*    99 */         } else {
/*   100 */             Sk.globals = $gbl;
/*   101 */         }
/*   102 */         while (true) {
/*   103 */             try {
/*   104 */                 var $dateNow = Date.now();
/*   105 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   106 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   107 */                 }
/*   108 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   109 */                     var $susp = $saveSuspension({
/*   110 */                         data: {
/*   111 */                             type: 'Sk.yield'
/*   112 */                         },
/*   113 */                         resume: function() {}
/*   114 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   115 */                     $susp.$blk = $blk;
/*   116 */                     $susp.optional = true;
/*   117 */                     return $susp;
/*   118 */                 }
/*   119 */                 switch ($blk) {
/*   120 */                 case 0:
/*   121 */                     /* --- module entry --- */
/*   122 */                     //
/*   123 */                     // line 8:
/*   124 */                     // import time
/*   125 */                     // ^
/*   126 */                     //
/*   127 */                     $currLineNo = 8;
/*   128 */                     $currColNo = 0;
/*   129 */ 
/*   130 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   131 */                     $blk = 1; /* allowing case fallthrough */
/*   132 */                 case 1:
/*   133 */                     /* --- function return or resume suspension --- */
/*   134 */                     if ($ret && $ret.$isSuspension) {
/*   135 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 8, 0);
/*   136 */                     }
/*   137 */                     var $module121 = $ret;
/*   138 */                     $loc.time = $module121;
/*   139 */                     //
/*   140 */                     // line 10:
/*   141 */                     // def combinations(l):
/*   142 */                     // ^
/*   143 */                     //
/*   144 */                     $currLineNo = 10;
/*   145 */                     $currColNo = 0;
/*   146 */ 
/*   147 */                     $scope122.co_name = new Sk.builtins['str']('combinations');
/*   148 */                     $scope122.co_varnames = ['l'];
/*   149 */                     var $funcobj143 = new Sk.builtins['function']($scope122, $gbl);
/*   150 */                     $loc.combinations = $funcobj143;
/*   151 */                     //
/*   152 */                     // line 18:
/*   153 */                     // PI = 3.14159265358979323
/*   154 */                     // ^
/*   155 */                     //
/*   156 */                     $currLineNo = 18;
/*   157 */                     $currColNo = 0;
/*   158 */ 
/*   159 */                     $loc.PI = new Sk.builtin.float_(3.141592653589793);
/*   160 */                     //
/*   161 */                     // line 19:
/*   162 */                     // SOLAR_MASS = 4 * PI * PI
/*   163 */                     // ^
/*   164 */                     //
/*   165 */                     $currLineNo = 19;
/*   166 */                     $currColNo = 0;
/*   167 */ 
/*   168 */                     var $loadname144 = $loc.PI !== undefined ? $loc.PI : Sk.misceval.loadname('PI', $gbl);;
/*   169 */                     var $binop145 = Sk.abstr.numberBinOp(new Sk.builtin.int_(4), $loadname144, 'Mult');
/*   170 */                     var $loadname146 = $loc.PI !== undefined ? $loc.PI : Sk.misceval.loadname('PI', $gbl);;
/*   171 */                     var $binop147 = Sk.abstr.numberBinOp($binop145, $loadname146, 'Mult');
/*   172 */                     $loc.SOLAR_MASS = $binop147;
/*   173 */                     //
/*   174 */                     // line 20:
/*   175 */                     // DAYS_PER_YEAR = 365.24
/*   176 */                     // ^
/*   177 */                     //
/*   178 */                     $currLineNo = 20;
/*   179 */                     $currColNo = 0;
/*   180 */ 
/*   181 */                     $loc.DAYS_PER_YEAR = new Sk.builtin.float_(365.24);
/*   182 */                     //
/*   183 */                     // line 22:
/*   184 */                     // BODIES = {
/*   185 */                     // ^
/*   186 */                     //
/*   187 */                     $currLineNo = 22;
/*   188 */                     $currColNo = 0;
/*   189 */ 
/*   190 */                     var $elem148 = new Sk.builtin.float_(0);
/*   191 */                     var $elem149 = new Sk.builtin.float_(0);
/*   192 */                     var $elem150 = new Sk.builtin.float_(0);
/*   193 */                     var $loadlist151 = new Sk.builtins['list']([$elem148, $elem149, $elem150]);
/*   194 */                     var $elem152 = $loadlist151;
/*   195 */                     var $elem153 = new Sk.builtin.float_(0);
/*   196 */                     var $elem154 = new Sk.builtin.float_(0);
/*   197 */                     var $elem155 = new Sk.builtin.float_(0);
/*   198 */                     var $loadlist156 = new Sk.builtins['list']([$elem153, $elem154, $elem155]);
/*   199 */                     var $elem157 = $loadlist156;
/*   200 */                     var $loadname158 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   201 */                     var $elem159 = $loadname158;
/*   202 */                     var $loadtuple160 = new Sk.builtins['tuple']([$elem152, $elem157, $elem159]);
/*   203 */                     var $str161 = new Sk.builtins['str']('sun');
/*   204 */                     var $elem162 = new Sk.builtin.float_(4.841431442464721);
/*   205 */                     var $elem163 = new Sk.builtin.float_(-1.1603200440274284);
/*   206 */                     var $elem164 = new Sk.builtin.float_(-0.10362204447112311);
/*   207 */                     var $loadlist165 = new Sk.builtins['list']([$elem162, $elem163, $elem164]);
/*   208 */                     var $elem166 = $loadlist165;
/*   209 */                     var $loadname167 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   210 */                     var $binop168 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.001660076642744037), $loadname167, 'Mult');
/*   211 */                     var $elem169 = $binop168;
/*   212 */                     var $loadname170 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   213 */                     var $binop171 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.007699011184197404), $loadname170, 'Mult');
/*   214 */                     var $elem172 = $binop171;
/*   215 */                     var $loadname173 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   216 */                     var $binop174 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.0000690460016972063), $loadname173, 'Mult');
/*   217 */                     var $elem175 = $binop174;
/*   218 */                     var $loadlist176 = new Sk.builtins['list']([$elem169, $elem172, $elem175]);
/*   219 */                     var $elem177 = $loadlist176;
/*   220 */                     var $loadname178 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   221 */                     var $binop179 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0009547919384243266), $loadname178, 'Mult');
/*   222 */                     var $elem180 = $binop179;
/*   223 */                     var $loadtuple181 = new Sk.builtins['tuple']([$elem166, $elem177, $elem180]);
/*   224 */                     var $str182 = new Sk.builtins['str']('jupiter');
/*   225 */                     var $elem183 = new Sk.builtin.float_(8.34336671824458);
/*   226 */                     var $elem184 = new Sk.builtin.float_(4.124798564124305);
/*   227 */                     var $elem185 = new Sk.builtin.float_(-0.4035234171143214);
/*   228 */                     var $loadlist186 = new Sk.builtins['list']([$elem183, $elem184, $elem185]);
/*   229 */                     var $elem187 = $loadlist186;
/*   230 */                     var $loadname188 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   231 */                     var $binop189 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.002767425107268624), $loadname188, 'Mult');
/*   232 */                     var $elem190 = $binop189;
/*   233 */                     var $loadname191 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   234 */                     var $binop192 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.004998528012349172), $loadname191, 'Mult');
/*   235 */                     var $elem193 = $binop192;
/*   236 */                     var $loadname194 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   237 */                     var $binop195 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.000023041729757376393), $loadname194, 'Mult');
/*   238 */                     var $elem196 = $binop195;
/*   239 */                     var $loadlist197 = new Sk.builtins['list']([$elem190, $elem193, $elem196]);
/*   240 */                     var $elem198 = $loadlist197;
/*   241 */                     var $loadname199 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   242 */                     var $binop200 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0002858859806661308), $loadname199, 'Mult');
/*   243 */                     var $elem201 = $binop200;
/*   244 */                     var $loadtuple202 = new Sk.builtins['tuple']([$elem187, $elem198, $elem201]);
/*   245 */                     var $str203 = new Sk.builtins['str']('saturn');
/*   246 */                     var $elem204 = new Sk.builtin.float_(12.894369562139131);
/*   247 */                     var $elem205 = new Sk.builtin.float_(-15.111151401698631);
/*   248 */                     var $elem206 = new Sk.builtin.float_(-0.22330757889265573);
/*   249 */                     var $loadlist207 = new Sk.builtins['list']([$elem204, $elem205, $elem206]);
/*   250 */                     var $elem208 = $loadlist207;
/*   251 */                     var $loadname209 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   252 */                     var $binop210 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.002964601375647616), $loadname209, 'Mult');
/*   253 */                     var $elem211 = $binop210;
/*   254 */                     var $loadname212 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   255 */                     var $binop213 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0023784717395948095), $loadname212, 'Mult');
/*   256 */                     var $elem214 = $binop213;
/*   257 */                     var $loadname215 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   258 */                     var $binop216 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.000029658956854023756), $loadname215, 'Mult');
/*   259 */                     var $elem217 = $binop216;
/*   260 */                     var $loadlist218 = new Sk.builtins['list']([$elem211, $elem214, $elem217]);
/*   261 */                     var $elem219 = $loadlist218;
/*   262 */                     var $loadname220 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   263 */                     var $binop221 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.00004366244043351563), $loadname220, 'Mult');
/*   264 */                     var $elem222 = $binop221;
/*   265 */                     var $loadtuple223 = new Sk.builtins['tuple']([$elem208, $elem219, $elem222]);
/*   266 */                     var $str224 = new Sk.builtins['str']('uranus');
/*   267 */                     var $elem225 = new Sk.builtin.float_(15.379697114850917);
/*   268 */                     var $elem226 = new Sk.builtin.float_(-25.919314609987964);
/*   269 */                     var $elem227 = new Sk.builtin.float_(0.17925877295037118);
/*   270 */                     var $loadlist228 = new Sk.builtins['list']([$elem225, $elem226, $elem227]);
/*   271 */                     var $elem229 = $loadlist228;
/*   272 */                     var $loadname230 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   273 */                     var $binop231 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.0026806777249038932), $loadname230, 'Mult');
/*   274 */                     var $elem232 = $binop231;
/*   275 */                     var $loadname233 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   276 */                     var $binop234 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.001628241700382423), $loadname233, 'Mult');
/*   277 */                     var $elem235 = $binop234;
/*   278 */                     var $loadname236 = $loc.DAYS_PER_YEAR !== undefined ? $loc.DAYS_PER_YEAR : Sk.misceval.loadname('DAYS_PER_YEAR', $gbl);;
/*   279 */                     var $binop237 = Sk.abstr.numberBinOp(new Sk.builtin.float_(-0.00009515922545197159), $loadname236, 'Mult');
/*   280 */                     var $elem238 = $binop237;
/*   281 */                     var $loadlist239 = new Sk.builtins['list']([$elem232, $elem235, $elem238]);
/*   282 */                     var $elem240 = $loadlist239;
/*   283 */                     var $loadname241 = $loc.SOLAR_MASS !== undefined ? $loc.SOLAR_MASS : Sk.misceval.loadname('SOLAR_MASS', $gbl);;
/*   284 */                     var $binop242 = Sk.abstr.numberBinOp(new Sk.builtin.float_(0.000051513890204661145), $loadname241, 'Mult');
/*   285 */                     var $elem243 = $binop242;
/*   286 */                     var $loadtuple244 = new Sk.builtins['tuple']([$elem229, $elem240, $elem243]);
/*   287 */                     var $str245 = new Sk.builtins['str']('neptune');
/*   288 */                     var $loaddict246 = new Sk.builtins['dict']([$str161, $loadtuple160, $str182, $loadtuple181, $str203, $loadtuple202, $str224, $loadtuple223, $str245, $loadtuple244]);
/*   289 */                     $loc.BODIES = $loaddict246;
/*   290 */                     //
/*   291 */                     // line 58:
/*   292 */                     // SYSTEM = list(BODIES.values())
/*   293 */                     // ^
/*   294 */                     //
/*   295 */                     $currLineNo = 58;
/*   296 */                     $currColNo = 0;
/*   297 */ 
/*   298 */                     var $loadname247 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   299 */                     var $loadname248 = $loc.BODIES !== undefined ? $loc.BODIES : Sk.misceval.loadname('BODIES', $gbl);;
/*   300 */                     $ret = Sk.abstr.gattr($loadname248, 'values', true);
/*   301 */                     $blk = 2; /* allowing case fallthrough */
/*   302 */                 case 2:
/*   303 */                     /* --- function return or resume suspension --- */
/*   304 */                     if ($ret && $ret.$isSuspension) {
/*   305 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 14);
/*   306 */                     }
/*   307 */                     var $lattr249 = $ret;
/*   308 */                     $ret;
/*   309 */                     $ret = Sk.misceval.callsimOrSuspend($lattr249);
/*   310 */                     $blk = 3; /* allowing case fallthrough */
/*   311 */                 case 3:
/*   312 */                     /* --- function return or resume suspension --- */
/*   313 */                     if ($ret && $ret.$isSuspension) {
/*   314 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 14);
/*   315 */                     }
/*   316 */                     var $call250 = $ret;
/*   317 */                     //
/*   318 */                     // line 58:
/*   319 */                     // SYSTEM = list(BODIES.values())
/*   320 */                     //               ^
/*   321 */                     //
/*   322 */                     $currLineNo = 58;
/*   323 */                     $currColNo = 14;
/*   324 */ 
/*   325 */                     $ret;
/*   326 */                     $ret = Sk.misceval.callsimOrSuspend($loadname247, $call250);
/*   327 */                     $blk = 4; /* allowing case fallthrough */
/*   328 */                 case 4:
/*   329 */                     /* --- function return or resume suspension --- */
/*   330 */                     if ($ret && $ret.$isSuspension) {
/*   331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 58, 9);
/*   332 */                     }
/*   333 */                     var $call251 = $ret;
/*   334 */                     //
/*   335 */                     // line 58:
/*   336 */                     // SYSTEM = list(BODIES.values())
/*   337 */                     //          ^
/*   338 */                     //
/*   339 */                     $currLineNo = 58;
/*   340 */                     $currColNo = 9;
/*   341 */ 
/*   342 */                     $loc.SYSTEM = $call251;
/*   343 */                     //
/*   344 */                     // line 59:
/*   345 */                     // PAIRS = combinations(SYSTEM)
/*   346 */                     // ^
/*   347 */                     //
/*   348 */                     $currLineNo = 59;
/*   349 */                     $currColNo = 0;
/*   350 */ 
/*   351 */                     var $loadname252 = $loc.combinations !== undefined ? $loc.combinations : Sk.misceval.loadname('combinations', $gbl);;
/*   352 */                     var $loadname253 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   353 */                     $ret;
/*   354 */                     $ret = Sk.misceval.callsimOrSuspend($loadname252, $loadname253);
/*   355 */                     $blk = 5; /* allowing case fallthrough */
/*   356 */                 case 5:
/*   357 */                     /* --- function return or resume suspension --- */
/*   358 */                     if ($ret && $ret.$isSuspension) {
/*   359 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 59, 8);
/*   360 */                     }
/*   361 */                     var $call254 = $ret;
/*   362 */                     //
/*   363 */                     // line 59:
/*   364 */                     // PAIRS = combinations(SYSTEM)
/*   365 */                     //         ^
/*   366 */                     //
/*   367 */                     $currLineNo = 59;
/*   368 */                     $currColNo = 8;
/*   369 */ 
/*   370 */                     $loc.PAIRS = $call254;
/*   371 */                     //
/*   372 */                     // line 62:
/*   373 */                     // def advance(dt, n, bodies=SYSTEM, pairs=PAIRS):
/*   374 */                     // ^
/*   375 */                     //
/*   376 */                     $currLineNo = 62;
/*   377 */                     $currColNo = 0;
/*   378 */ 
/*   379 */                     var $loadname255 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   380 */                     var $loadname256 = $loc.PAIRS !== undefined ? $loc.PAIRS : Sk.misceval.loadname('PAIRS', $gbl);;
/*   381 */                     $scope257.co_name = new Sk.builtins['str']('advance');
/*   382 */                     $scope257.$defaults = [$loadname255, $loadname256];
/*   383 */                     $scope257.co_varnames = ['dt', 'n', 'bodies', 'pairs'];
/*   384 */                     var $funcobj313 = new Sk.builtins['function']($scope257, $gbl);
/*   385 */                     $loc.advance = $funcobj313;
/*   386 */                     //
/*   387 */                     // line 85:
/*   388 */                     // def report_energy(bodies=SYSTEM, pairs=PAIRS, e=0.0):
/*   389 */                     // ^
/*   390 */                     //
/*   391 */                     $currLineNo = 85;
/*   392 */                     $currColNo = 0;
/*   393 */ 
/*   394 */                     var $loadname314 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   395 */                     var $loadname315 = $loc.PAIRS !== undefined ? $loc.PAIRS : Sk.misceval.loadname('PAIRS', $gbl);;
/*   396 */                     $scope316.co_name = new Sk.builtins['str']('report_energy');
/*   397 */                     $scope316.$defaults = [$loadname314, $loadname315, new Sk.builtin.float_(0)];
/*   398 */                     $scope316.co_varnames = ['bodies', 'pairs', 'e'];
/*   399 */                     var $funcobj349 = new Sk.builtins['function']($scope316, $gbl);
/*   400 */                     $loc.report_energy = $funcobj349;
/*   401 */                     //
/*   402 */                     // line 96:
/*   403 */                     // def offset_momentum(ref, bodies=SYSTEM, px=0.0, py=0.0, pz=0.0):
/*   404 */                     // ^
/*   405 */                     //
/*   406 */                     $currLineNo = 96;
/*   407 */                     $currColNo = 0;
/*   408 */ 
/*   409 */                     var $loadname350 = $loc.SYSTEM !== undefined ? $loc.SYSTEM : Sk.misceval.loadname('SYSTEM', $gbl);;
/*   410 */                     $scope351.co_name = new Sk.builtins['str']('offset_momentum');
/*   411 */                     $scope351.$defaults = [$loadname350, new Sk.builtin.float_(0), new Sk.builtin.float_(0), new Sk.builtin.float_(0)];
/*   412 */                     $scope351.co_varnames = ['ref', 'bodies', 'px', 'py', 'pz'];
/*   413 */                     var $funcobj367 = new Sk.builtins['function']($scope351, $gbl);
/*   414 */                     $loc.offset_momentum = $funcobj367;
/*   415 */                     //
/*   416 */                     // line 107:
/*   417 */                     // NUMBER_OF_ITERATIONS = 20000
/*   418 */                     // ^
/*   419 */                     //
/*   420 */                     $currLineNo = 107;
/*   421 */                     $currColNo = 0;
/*   422 */ 
/*   423 */                     $loc.NUMBER_OF_ITERATIONS = new Sk.builtin.int_(20000);
/*   424 */                     //
/*   425 */                     // line 109:
/*   426 */                     // def main(n, ref='sun'):
/*   427 */                     // ^
/*   428 */                     //
/*   429 */                     $currLineNo = 109;
/*   430 */                     $currColNo = 0;
/*   431 */ 
/*   432 */                     var $str368 = new Sk.builtins['str']('sun');
/*   433 */                     $scope369.co_name = new Sk.builtins['str']('main');
/*   434 */                     $scope369.$defaults = [$str368];
/*   435 */                     $scope369.co_varnames = ['n', 'ref'];
/*   436 */                     var $funcobj396 = new Sk.builtins['function']($scope369, $gbl);
/*   437 */                     $loc.main = $funcobj396;
/*   438 */                     //
/*   439 */                     // line 123:
/*   440 */                     // main(10)
/*   441 */                     // ^
/*   442 */                     //
/*   443 */                     $currLineNo = 123;
/*   444 */                     $currColNo = 0;
/*   445 */ 
/*   446 */                     var $loadname397 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   447 */                     $ret;
/*   448 */                     $ret = Sk.misceval.callsimOrSuspend($loadname397, new Sk.builtin.int_(10));
/*   449 */                     $blk = 6; /* allowing case fallthrough */
/*   450 */                 case 6:
/*   451 */                     /* --- function return or resume suspension --- */
/*   452 */                     if ($ret && $ret.$isSuspension) {
/*   453 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 123, 0);
/*   454 */                     }
/*   455 */                     var $call398 = $ret;
/*   456 */                     //
/*   457 */                     // line 123:
/*   458 */                     // main(10)
/*   459 */                     // ^
/*   460 */                     //
/*   461 */                     $currLineNo = 123;
/*   462 */                     $currColNo = 0;
/*   463 */ 
/*   464 */                     return $loc;
/*   465 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   466 */                 }
/*   467 */             } catch (err) {
/*   468 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   469 */                     err = new Sk.builtin.ExternalError(err);
/*   470 */                 }
/*   471 */                 err.traceback.push({
/*   472 */                     lineno: $currLineNo,
/*   473 */                     colno: $currColNo,
/*   474 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   475 */                 });
/*   476 */                 if ($exc.length > 0) {
/*   477 */                     $err = err;
/*   478 */                     $blk = $exc.pop();
/*   479 */                     continue;
/*   480 */                 } else {
/*   481 */                     throw err;
/*   482 */                 }
/*   483 */             }
/*   484 */         }
/*   485 */     });
/*   486 */     var $scope122 = (function $combinations123$(l) {
/*   487 */         var ls, result, x, y; /* locals */
/*   488 */         var l, l, l, l, ls, ls, result, result, result, x, x, x, y, y, $loadgbl125, $loadgbl126, $loadgbl125, $loadgbl126, $call127, $binop128, $iter130, $loadgbl125, $loadgbl126, $call127, $binop128, $call129, $iter130, $binop132, $slice133, $iter135, $iter135, $lattr137, $lattr137, $lsubscr138, $elem139, $elem140, $loadtuple141;
/*   489 */         var $wakeFromSuspension = function() {
/*   490 */             var susp = $scope122.$wakingSuspension;
/*   491 */             delete $scope122.$wakingSuspension;
/*   492 */             $blk = susp.$blk;
/*   493 */             $loc = susp.$loc;
/*   494 */             $gbl = susp.$gbl;
/*   495 */             $exc = susp.$exc;
/*   496 */             $err = susp.$err;
/*   497 */             $postfinally = susp.$postfinally;
/*   498 */             $currLineNo = susp.$lineno;
/*   499 */             $currColNo = susp.$colno;
/*   500 */             Sk.lastYield = Date.now();
/*   501 */             l = susp.$tmps.l;
/*   502 */             ls = susp.$tmps.ls;
/*   503 */             result = susp.$tmps.result;
/*   504 */             x = susp.$tmps.x;
/*   505 */             y = susp.$tmps.y;
/*   506 */             $loadgbl125 = susp.$tmps.$loadgbl125;
/*   507 */             $loadgbl126 = susp.$tmps.$loadgbl126;
/*   508 */             $call127 = susp.$tmps.$call127;
/*   509 */             $binop128 = susp.$tmps.$binop128;
/*   510 */             $iter130 = susp.$tmps.$iter130;
/*   511 */             $call129 = susp.$tmps.$call129;
/*   512 */             $binop132 = susp.$tmps.$binop132;
/*   513 */             $slice133 = susp.$tmps.$slice133;
/*   514 */             $iter135 = susp.$tmps.$iter135;
/*   515 */             $lattr137 = susp.$tmps.$lattr137;
/*   516 */             $lsubscr138 = susp.$tmps.$lsubscr138;
/*   517 */             $elem139 = susp.$tmps.$elem139;
/*   518 */             $elem140 = susp.$tmps.$elem140;
/*   519 */             $loadtuple141 = susp.$tmps.$loadtuple141;
/*   520 */             try {
/*   521 */                 $ret = susp.child.resume();
/*   522 */             } catch (err) {
/*   523 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   524 */                     err = new Sk.builtin.ExternalError(err);
/*   525 */                 }
/*   526 */                 err.traceback.push({
/*   527 */                     lineno: $currLineNo,
/*   528 */                     colno: $currColNo,
/*   529 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   530 */                 });
/*   531 */                 if ($exc.length > 0) {
/*   532 */                     $err = err;
/*   533 */                     $blk = $exc.pop();
/*   534 */                 } else {
/*   535 */                     throw err;
/*   536 */                 }
/*   537 */             }
/*   538 */         };
/*   539 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   540 */             var susp = new Sk.misceval.Suspension();
/*   541 */             susp.child = $child;
/*   542 */             susp.resume = function() {
/*   543 */                 $scope122.$wakingSuspension = susp;
/*   544 */                 return $scope122();
/*   545 */             };
/*   546 */             susp.data = susp.child.data;
/*   547 */             susp.$blk = $blk;
/*   548 */             susp.$loc = $loc;
/*   549 */             susp.$gbl = $gbl;
/*   550 */             susp.$exc = $exc;
/*   551 */             susp.$err = $err;
/*   552 */             susp.$postfinally = $postfinally;
/*   553 */             susp.$filename = $filename;
/*   554 */             susp.$lineno = $lineno;
/*   555 */             susp.$colno = $colno;
/*   556 */             susp.optional = susp.child.optional;
/*   557 */             susp.$tmps = {
/*   558 */                 "l": l,
/*   559 */                 "ls": ls,
/*   560 */                 "result": result,
/*   561 */                 "x": x,
/*   562 */                 "y": y,
/*   563 */                 "$loadgbl125": $loadgbl125,
/*   564 */                 "$loadgbl126": $loadgbl126,
/*   565 */                 "$call127": $call127,
/*   566 */                 "$binop128": $binop128,
/*   567 */                 "$iter130": $iter130,
/*   568 */                 "$call129": $call129,
/*   569 */                 "$binop132": $binop132,
/*   570 */                 "$slice133": $slice133,
/*   571 */                 "$iter135": $iter135,
/*   572 */                 "$lattr137": $lattr137,
/*   573 */                 "$lsubscr138": $lsubscr138,
/*   574 */                 "$elem139": $elem139,
/*   575 */                 "$elem140": $elem140,
/*   576 */                 "$loadtuple141": $loadtuple141
/*   577 */             };
/*   578 */             return susp;
/*   579 */         };
/*   580 */         var $blk = 0,
/*   581 */             $exc = [],
/*   582 */             $loc = {},
/*   583 */             $gbl = this,
/*   584 */             $err = undefined,
/*   585 */             $ret = undefined,
/*   586 */             $postfinally = undefined,
/*   587 */             $currLineNo = undefined,
/*   588 */             $currColNo = undefined;
/*   589 */         if (typeof Sk.execStart === 'undefined') {
/*   590 */             Sk.execStart = Date.now()
/*   591 */         }
/*   592 */         if (typeof Sk.lastYield === 'undefined') {
/*   593 */             Sk.lastYield = Date.now()
/*   594 */         }
/*   595 */         if ($scope122.$wakingSuspension !== undefined) {
/*   596 */             $wakeFromSuspension();
/*   597 */         } else {
/*   598 */             Sk.builtin.pyCheckArgs("combinations", arguments, 1, 1, false, false);
/*   599 */         }
/*   600 */         while (true) {
/*   601 */             try {
/*   602 */                 var $dateNow = Date.now();
/*   603 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   604 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   605 */                 }
/*   606 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   607 */                     var $susp = $saveSuspension({
/*   608 */                         data: {
/*   609 */                             type: 'Sk.yield'
/*   610 */                         },
/*   611 */                         resume: function() {}
/*   612 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   613 */                     $susp.$blk = $blk;
/*   614 */                     $susp.optional = true;
/*   615 */                     return $susp;
/*   616 */                 }
/*   617 */                 switch ($blk) {
/*   618 */                 case 0:
/*   619 */                     /* --- codeobj entry --- */
/*   620 */                     if (l === undefined) {
/*   621 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   622 */                     }
/*   623 */ 
/*   624 */                     //
/*   625 */                     // line 11:
/*   626 */                     //     result = []
/*   627 */                     //     ^
/*   628 */                     //
/*   629 */                     $currLineNo = 11;
/*   630 */                     $currColNo = 4;
/*   631 */ 
/*   632 */                     var $loadlist124 = new Sk.builtins['list']([]);
/*   633 */                     result = $loadlist124;
/*   634 */                     //
/*   635 */                     // line 12:
/*   636 */                     //     for x in range(len(l) - 1):
/*   637 */                     //     ^
/*   638 */                     //
/*   639 */                     $currLineNo = 12;
/*   640 */                     $currColNo = 4;
/*   641 */ 
/*   642 */                     var $loadgbl125 = Sk.misceval.loadname('range', $gbl);
/*   643 */                     var $loadgbl126 = Sk.misceval.loadname('len', $gbl);
/*   644 */                     if (l === undefined) {
/*   645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   646 */                     }
/*   647 */                     $ret;
/*   648 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl126, l);
/*   649 */                     $blk = 4; /* allowing case fallthrough */
/*   650 */                 case 4:
/*   651 */                     /* --- function return or resume suspension --- */
/*   652 */                     if ($ret && $ret.$isSuspension) {
/*   653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 19);
/*   654 */                     }
/*   655 */                     var $call127 = $ret;
/*   656 */                     //
/*   657 */                     // line 12:
/*   658 */                     //     for x in range(len(l) - 1):
/*   659 */                     //                    ^
/*   660 */                     //
/*   661 */                     $currLineNo = 12;
/*   662 */                     $currColNo = 19;
/*   663 */ 
/*   664 */                     var $binop128 = Sk.abstr.numberBinOp($call127, new Sk.builtin.int_(1), 'Sub');
/*   665 */                     $ret;
/*   666 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl125, $binop128);
/*   667 */                     $blk = 5; /* allowing case fallthrough */
/*   668 */                 case 5:
/*   669 */                     /* --- function return or resume suspension --- */
/*   670 */                     if ($ret && $ret.$isSuspension) {
/*   671 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 13);
/*   672 */                     }
/*   673 */                     var $call129 = $ret;
/*   674 */                     //
/*   675 */                     // line 12:
/*   676 */                     //     for x in range(len(l) - 1):
/*   677 */                     //              ^
/*   678 */                     //
/*   679 */                     $currLineNo = 12;
/*   680 */                     $currColNo = 13;
/*   681 */ 
/*   682 */                     var $iter130 = Sk.abstr.iter($call129);
/*   683 */                     $blk = 1; /* allowing case fallthrough */
/*   684 */                 case 1:
/*   685 */                     /* --- for start --- */
/*   686 */                     $ret = Sk.abstr.iternext($iter130, true);
/*   687 */                     $blk = 6; /* allowing case fallthrough */
/*   688 */                 case 6:
/*   689 */                     /* --- function return or resume suspension --- */
/*   690 */                     if ($ret && $ret.$isSuspension) {
/*   691 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 12, 4);
/*   692 */                     }
/*   693 */                     var $next131 = $ret;
/*   694 */                     if ($next131 === undefined) {
/*   695 */                         $blk = 2;
/*   696 */                         continue;
/*   697 */                     }
/*   698 */                     x = $next131;
/*   699 */                     //
/*   700 */                     // line 13:
/*   701 */                     //         ls = l[x+1:]
/*   702 */                     //         ^
/*   703 */                     //
/*   704 */                     $currLineNo = 13;
/*   705 */                     $currColNo = 8;
/*   706 */ 
/*   707 */                     if (l === undefined) {
/*   708 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   709 */                     }
/*   710 */                     if (x === undefined) {
/*   711 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   712 */                     }
/*   713 */                     var $binop132 = Sk.abstr.numberBinOp(x, new Sk.builtin.int_(1), 'Add');
/*   714 */                     var $slice133 = new Sk.builtins['slice']($binop132, new Sk.builtin.int_(2147483647), Sk.builtin.none.none$);
/*   715 */                     $ret = Sk.abstr.objectGetItem(l, $slice133, true);
/*   716 */                     $blk = 7; /* allowing case fallthrough */
/*   717 */                 case 7:
/*   718 */                     /* --- function return or resume suspension --- */
/*   719 */                     if ($ret && $ret.$isSuspension) {
/*   720 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   721 */                     }
/*   722 */                     var $lsubscr134 = $ret;
/*   723 */                     ls = $lsubscr134;
/*   724 */                     //
/*   725 */                     // line 14:
/*   726 */                     //         for y in ls:
/*   727 */                     //         ^
/*   728 */                     //
/*   729 */                     $currLineNo = 14;
/*   730 */                     $currColNo = 8;
/*   731 */ 
/*   732 */                     if (ls === undefined) {
/*   733 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ls\' referenced before assignment');
/*   734 */                     }
/*   735 */                     var $iter135 = Sk.abstr.iter(ls);
/*   736 */                     $blk = 8; /* allowing case fallthrough */
/*   737 */                 case 8:
/*   738 */                     /* --- for start --- */
/*   739 */                     $ret = Sk.abstr.iternext($iter135, true);
/*   740 */                     $blk = 11; /* allowing case fallthrough */
/*   741 */                 case 11:
/*   742 */                     /* --- function return or resume suspension --- */
/*   743 */                     if ($ret && $ret.$isSuspension) {
/*   744 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 14, 8);
/*   745 */                     }
/*   746 */                     var $next136 = $ret;
/*   747 */                     if ($next136 === undefined) {
/*   748 */                         $blk = 9;
/*   749 */                         continue;
/*   750 */                     }
/*   751 */                     y = $next136;
/*   752 */                     //
/*   753 */                     // line 15:
/*   754 */                     //             result.append((l[x],y))
/*   755 */                     //             ^
/*   756 */                     //
/*   757 */                     $currLineNo = 15;
/*   758 */                     $currColNo = 12;
/*   759 */ 
/*   760 */                     if (result === undefined) {
/*   761 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*   762 */                     }
/*   763 */                     $ret = Sk.abstr.gattr(result, 'append', true);
/*   764 */                     $blk = 12; /* allowing case fallthrough */
/*   765 */                 case 12:
/*   766 */                     /* --- function return or resume suspension --- */
/*   767 */                     if ($ret && $ret.$isSuspension) {
/*   768 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 15, 12);
/*   769 */                     }
/*   770 */                     var $lattr137 = $ret;
/*   771 */                     if (l === undefined) {
/*   772 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   773 */                     }
/*   774 */                     if (x === undefined) {
/*   775 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   776 */                     }
/*   777 */                     $ret = Sk.abstr.objectGetItem(l, x, true);
/*   778 */                     $blk = 13; /* allowing case fallthrough */
/*   779 */                 case 13:
/*   780 */                     /* --- function return or resume suspension --- */
/*   781 */                     if ($ret && $ret.$isSuspension) {
/*   782 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*   783 */                     }
/*   784 */                     var $lsubscr138 = $ret;
/*   785 */                     var $elem139 = $lsubscr138;
/*   786 */                     if (y === undefined) {
/*   787 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*   788 */                     }
/*   789 */                     var $elem140 = y;
/*   790 */                     var $loadtuple141 = new Sk.builtins['tuple']([$elem139, $elem140]);
/*   791 */                     $ret;
/*   792 */                     $ret = Sk.misceval.callsimOrSuspend($lattr137, $loadtuple141);
/*   793 */                     $blk = 14; /* allowing case fallthrough */
/*   794 */                 case 14:
/*   795 */                     /* --- function return or resume suspension --- */
/*   796 */                     if ($ret && $ret.$isSuspension) {
/*   797 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 15, 12);
/*   798 */                     }
/*   799 */                     var $call142 = $ret;
/*   800 */                     //
/*   801 */                     // line 15:
/*   802 */                     //             result.append((l[x],y))
/*   803 */                     //             ^
/*   804 */                     //
/*   805 */                     $currLineNo = 15;
/*   806 */                     $currColNo = 12;
/*   807 */ 
/*   808 */                     $blk = 8; /* jump */
/*   809 */                     continue;
/*   810 */                 case 2:
/*   811 */                     /* --- for cleanup --- */
/*   812 */                     $blk = 3; /* allowing case fallthrough */
/*   813 */                 case 3:
/*   814 */                     /* --- for end --- */
/*   815 */                     //
/*   816 */                     // line 16:
/*   817 */                     //     return result
/*   818 */                     //     ^
/*   819 */                     //
/*   820 */                     $currLineNo = 16;
/*   821 */                     $currColNo = 4;
/*   822 */ 
/*   823 */                     if (result === undefined) {
/*   824 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*   825 */                     }
/*   826 */                     return result;
/*   827 */                     return Sk.builtin.none.none$;
/*   828 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   829 */                 case 9:
/*   830 */                     /* --- for cleanup --- */
/*   831 */                     $blk = 10; /* allowing case fallthrough */
/*   832 */                 case 10:
/*   833 */                     /* --- for end --- */
/*   834 */                     $blk = 1; /* jump */
/*   835 */                     continue;
/*   836 */                 }
/*   837 */             } catch (err) {
/*   838 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   839 */                     err = new Sk.builtin.ExternalError(err);
/*   840 */                 }
/*   841 */                 err.traceback.push({
/*   842 */                     lineno: $currLineNo,
/*   843 */                     colno: $currColNo,
/*   844 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   845 */                 });
/*   846 */                 if ($exc.length > 0) {
/*   847 */                     $err = err;
/*   848 */                     $blk = $exc.pop();
/*   849 */                     continue;
/*   850 */                 } else {
/*   851 */                     throw err;
/*   852 */                 }
/*   853 */             }
/*   854 */         }
/*   855 */     });
/*   856 */     var $scope257 = (function $advance258$(dt, n, bodies, pairs) {
/*   857 */         var b1m, b2m, dx, dy, dz, i, m, m1, m2, mag, r, v1, v2, vx, vy, vz, x1, x2, y1, y2, z1, z2; /* locals */
/*   858 */         var b1m, b1m, b1m, b1m, b2m, b2m, b2m, b2m, bodies, bodies, bodies, dt, dt, dt, dt, dt, dx, dx, dx, dx, dx, dy, dy, dy, dy, dy, dz, dz, dz, dz, dz, i, m, m1, m1, m2, m2, mag, mag, mag, n, n, pairs, pairs, pairs, r, r, r, r, v1, v1, v1, v1, v2, v2, v2, v2, vx, vx, vy, vy, vz, vz, x1, x1, x2, x2, y1, y1, y2, y2, z1, z1, z2, z2, $loadgbl259, $iter261, $loadgbl259, $call260, $iter261, $iter263, $iter263, $gitem282, $binop283, $inplbinopsubscr284, $gitem285, $binop286, $inplbinopsubscr287, $gitem288, $binop289, $inplbinopsubscr290, $gitem291, $binop292, $inplbinopsubscr293, $gitem294, $binop295, $inplbinopsubscr296, $gitem297, $binop298, $inplbinopsubscr299, $iter300, $iter300, $gitem304, $binop305, $inplbinopsubscr306, $gitem307, $binop308, $inplbinopsubscr309, $gitem310, $binop311, $inplbinopsubscr312;
/*   859 */         var $wakeFromSuspension = function() {
/*   860 */             var susp = $scope257.$wakingSuspension;
/*   861 */             delete $scope257.$wakingSuspension;
/*   862 */             $blk = susp.$blk;
/*   863 */             $loc = susp.$loc;
/*   864 */             $gbl = susp.$gbl;
/*   865 */             $exc = susp.$exc;
/*   866 */             $err = susp.$err;
/*   867 */             $postfinally = susp.$postfinally;
/*   868 */             $currLineNo = susp.$lineno;
/*   869 */             $currColNo = susp.$colno;
/*   870 */             Sk.lastYield = Date.now();
/*   871 */             b1m = susp.$tmps.b1m;
/*   872 */             b2m = susp.$tmps.b2m;
/*   873 */             bodies = susp.$tmps.bodies;
/*   874 */             dt = susp.$tmps.dt;
/*   875 */             dx = susp.$tmps.dx;
/*   876 */             dy = susp.$tmps.dy;
/*   877 */             dz = susp.$tmps.dz;
/*   878 */             i = susp.$tmps.i;
/*   879 */             m = susp.$tmps.m;
/*   880 */             m1 = susp.$tmps.m1;
/*   881 */             m2 = susp.$tmps.m2;
/*   882 */             mag = susp.$tmps.mag;
/*   883 */             n = susp.$tmps.n;
/*   884 */             pairs = susp.$tmps.pairs;
/*   885 */             r = susp.$tmps.r;
/*   886 */             v1 = susp.$tmps.v1;
/*   887 */             v2 = susp.$tmps.v2;
/*   888 */             vx = susp.$tmps.vx;
/*   889 */             vy = susp.$tmps.vy;
/*   890 */             vz = susp.$tmps.vz;
/*   891 */             x1 = susp.$tmps.x1;
/*   892 */             x2 = susp.$tmps.x2;
/*   893 */             y1 = susp.$tmps.y1;
/*   894 */             y2 = susp.$tmps.y2;
/*   895 */             z1 = susp.$tmps.z1;
/*   896 */             z2 = susp.$tmps.z2;
/*   897 */             $loadgbl259 = susp.$tmps.$loadgbl259;
/*   898 */             $iter261 = susp.$tmps.$iter261;
/*   899 */             $call260 = susp.$tmps.$call260;
/*   900 */             $iter263 = susp.$tmps.$iter263;
/*   901 */             $gitem282 = susp.$tmps.$gitem282;
/*   902 */             $binop283 = susp.$tmps.$binop283;
/*   903 */             $inplbinopsubscr284 = susp.$tmps.$inplbinopsubscr284;
/*   904 */             $gitem285 = susp.$tmps.$gitem285;
/*   905 */             $binop286 = susp.$tmps.$binop286;
/*   906 */             $inplbinopsubscr287 = susp.$tmps.$inplbinopsubscr287;
/*   907 */             $gitem288 = susp.$tmps.$gitem288;
/*   908 */             $binop289 = susp.$tmps.$binop289;
/*   909 */             $inplbinopsubscr290 = susp.$tmps.$inplbinopsubscr290;
/*   910 */             $gitem291 = susp.$tmps.$gitem291;
/*   911 */             $binop292 = susp.$tmps.$binop292;
/*   912 */             $inplbinopsubscr293 = susp.$tmps.$inplbinopsubscr293;
/*   913 */             $gitem294 = susp.$tmps.$gitem294;
/*   914 */             $binop295 = susp.$tmps.$binop295;
/*   915 */             $inplbinopsubscr296 = susp.$tmps.$inplbinopsubscr296;
/*   916 */             $gitem297 = susp.$tmps.$gitem297;
/*   917 */             $binop298 = susp.$tmps.$binop298;
/*   918 */             $inplbinopsubscr299 = susp.$tmps.$inplbinopsubscr299;
/*   919 */             $iter300 = susp.$tmps.$iter300;
/*   920 */             $gitem304 = susp.$tmps.$gitem304;
/*   921 */             $binop305 = susp.$tmps.$binop305;
/*   922 */             $inplbinopsubscr306 = susp.$tmps.$inplbinopsubscr306;
/*   923 */             $gitem307 = susp.$tmps.$gitem307;
/*   924 */             $binop308 = susp.$tmps.$binop308;
/*   925 */             $inplbinopsubscr309 = susp.$tmps.$inplbinopsubscr309;
/*   926 */             $gitem310 = susp.$tmps.$gitem310;
/*   927 */             $binop311 = susp.$tmps.$binop311;
/*   928 */             $inplbinopsubscr312 = susp.$tmps.$inplbinopsubscr312;
/*   929 */             try {
/*   930 */                 $ret = susp.child.resume();
/*   931 */             } catch (err) {
/*   932 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   933 */                     err = new Sk.builtin.ExternalError(err);
/*   934 */                 }
/*   935 */                 err.traceback.push({
/*   936 */                     lineno: $currLineNo,
/*   937 */                     colno: $currColNo,
/*   938 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*   939 */                 });
/*   940 */                 if ($exc.length > 0) {
/*   941 */                     $err = err;
/*   942 */                     $blk = $exc.pop();
/*   943 */                 } else {
/*   944 */                     throw err;
/*   945 */                 }
/*   946 */             }
/*   947 */         };
/*   948 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   949 */             var susp = new Sk.misceval.Suspension();
/*   950 */             susp.child = $child;
/*   951 */             susp.resume = function() {
/*   952 */                 $scope257.$wakingSuspension = susp;
/*   953 */                 return $scope257();
/*   954 */             };
/*   955 */             susp.data = susp.child.data;
/*   956 */             susp.$blk = $blk;
/*   957 */             susp.$loc = $loc;
/*   958 */             susp.$gbl = $gbl;
/*   959 */             susp.$exc = $exc;
/*   960 */             susp.$err = $err;
/*   961 */             susp.$postfinally = $postfinally;
/*   962 */             susp.$filename = $filename;
/*   963 */             susp.$lineno = $lineno;
/*   964 */             susp.$colno = $colno;
/*   965 */             susp.optional = susp.child.optional;
/*   966 */             susp.$tmps = {
/*   967 */                 "b1m": b1m,
/*   968 */                 "b2m": b2m,
/*   969 */                 "bodies": bodies,
/*   970 */                 "dt": dt,
/*   971 */                 "dx": dx,
/*   972 */                 "dy": dy,
/*   973 */                 "dz": dz,
/*   974 */                 "i": i,
/*   975 */                 "m": m,
/*   976 */                 "m1": m1,
/*   977 */                 "m2": m2,
/*   978 */                 "mag": mag,
/*   979 */                 "n": n,
/*   980 */                 "pairs": pairs,
/*   981 */                 "r": r,
/*   982 */                 "v1": v1,
/*   983 */                 "v2": v2,
/*   984 */                 "vx": vx,
/*   985 */                 "vy": vy,
/*   986 */                 "vz": vz,
/*   987 */                 "x1": x1,
/*   988 */                 "x2": x2,
/*   989 */                 "y1": y1,
/*   990 */                 "y2": y2,
/*   991 */                 "z1": z1,
/*   992 */                 "z2": z2,
/*   993 */                 "$loadgbl259": $loadgbl259,
/*   994 */                 "$iter261": $iter261,
/*   995 */                 "$call260": $call260,
/*   996 */                 "$iter263": $iter263,
/*   997 */                 "$gitem282": $gitem282,
/*   998 */                 "$binop283": $binop283,
/*   999 */                 "$inplbinopsubscr284": $inplbinopsubscr284,
/*  1000 */                 "$gitem285": $gitem285,
/*  1001 */                 "$binop286": $binop286,
/*  1002 */                 "$inplbinopsubscr287": $inplbinopsubscr287,
/*  1003 */                 "$gitem288": $gitem288,
/*  1004 */                 "$binop289": $binop289,
/*  1005 */                 "$inplbinopsubscr290": $inplbinopsubscr290,
/*  1006 */                 "$gitem291": $gitem291,
/*  1007 */                 "$binop292": $binop292,
/*  1008 */                 "$inplbinopsubscr293": $inplbinopsubscr293,
/*  1009 */                 "$gitem294": $gitem294,
/*  1010 */                 "$binop295": $binop295,
/*  1011 */                 "$inplbinopsubscr296": $inplbinopsubscr296,
/*  1012 */                 "$gitem297": $gitem297,
/*  1013 */                 "$binop298": $binop298,
/*  1014 */                 "$inplbinopsubscr299": $inplbinopsubscr299,
/*  1015 */                 "$iter300": $iter300,
/*  1016 */                 "$gitem304": $gitem304,
/*  1017 */                 "$binop305": $binop305,
/*  1018 */                 "$inplbinopsubscr306": $inplbinopsubscr306,
/*  1019 */                 "$gitem307": $gitem307,
/*  1020 */                 "$binop308": $binop308,
/*  1021 */                 "$inplbinopsubscr309": $inplbinopsubscr309,
/*  1022 */                 "$gitem310": $gitem310,
/*  1023 */                 "$binop311": $binop311,
/*  1024 */                 "$inplbinopsubscr312": $inplbinopsubscr312
/*  1025 */             };
/*  1026 */             return susp;
/*  1027 */         };
/*  1028 */         var $blk = 0,
/*  1029 */             $exc = [],
/*  1030 */             $loc = {},
/*  1031 */             $gbl = this,
/*  1032 */             $err = undefined,
/*  1033 */             $ret = undefined,
/*  1034 */             $postfinally = undefined,
/*  1035 */             $currLineNo = undefined,
/*  1036 */             $currColNo = undefined;
/*  1037 */         if (typeof Sk.execStart === 'undefined') {
/*  1038 */             Sk.execStart = Date.now()
/*  1039 */         }
/*  1040 */         if (typeof Sk.lastYield === 'undefined') {
/*  1041 */             Sk.lastYield = Date.now()
/*  1042 */         }
/*  1043 */         if ($scope257.$wakingSuspension !== undefined) {
/*  1044 */             $wakeFromSuspension();
/*  1045 */         } else {
/*  1046 */             if (bodies === undefined) bodies = $scope257.$defaults[0];
/*  1047 */             if (pairs === undefined) pairs = $scope257.$defaults[1];
/*  1048 */             Sk.builtin.pyCheckArgs("advance", arguments, 2, 4, false, false);
/*  1049 */         }
/*  1050 */         while (true) {
/*  1051 */             try {
/*  1052 */                 var $dateNow = Date.now();
/*  1053 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1054 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1055 */                 }
/*  1056 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1057 */                     var $susp = $saveSuspension({
/*  1058 */                         data: {
/*  1059 */                             type: 'Sk.yield'
/*  1060 */                         },
/*  1061 */                         resume: function() {}
/*  1062 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  1063 */                     $susp.$blk = $blk;
/*  1064 */                     $susp.optional = true;
/*  1065 */                     return $susp;
/*  1066 */                 }
/*  1067 */                 switch ($blk) {
/*  1068 */                 case 0:
/*  1069 */                     /* --- codeobj entry --- */
/*  1070 */                     if (dt === undefined) {
/*  1071 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1072 */                     }
/*  1073 */                     if (n === undefined) {
/*  1074 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1075 */                     }
/*  1076 */                     if (bodies === undefined) {
/*  1077 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1078 */                     }
/*  1079 */                     if (pairs === undefined) {
/*  1080 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1081 */                     }
/*  1082 */                     if (bodies === undefined) {
/*  1083 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1084 */                     }
/*  1085 */                     if (pairs === undefined) {
/*  1086 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1087 */                     }
/*  1088 */ 
/*  1089 */                     //
/*  1090 */                     // line 64:
/*  1091 */                     //     for i in range(n):
/*  1092 */                     //     ^
/*  1093 */                     //
/*  1094 */                     $currLineNo = 64;
/*  1095 */                     $currColNo = 4;
/*  1096 */ 
/*  1097 */                     var $loadgbl259 = Sk.misceval.loadname('range', $gbl);
/*  1098 */                     if (n === undefined) {
/*  1099 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  1100 */                     }
/*  1101 */                     $ret;
/*  1102 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl259, n);
/*  1103 */                     $blk = 4; /* allowing case fallthrough */
/*  1104 */                 case 4:
/*  1105 */                     /* --- function return or resume suspension --- */
/*  1106 */                     if ($ret && $ret.$isSuspension) {
/*  1107 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 64, 13);
/*  1108 */                     }
/*  1109 */                     var $call260 = $ret;
/*  1110 */                     //
/*  1111 */                     // line 64:
/*  1112 */                     //     for i in range(n):
/*  1113 */                     //              ^
/*  1114 */                     //
/*  1115 */                     $currLineNo = 64;
/*  1116 */                     $currColNo = 13;
/*  1117 */ 
/*  1118 */                     var $iter261 = Sk.abstr.iter($call260);
/*  1119 */                     $blk = 1; /* allowing case fallthrough */
/*  1120 */                 case 1:
/*  1121 */                     /* --- for start --- */
/*  1122 */                     $ret = Sk.abstr.iternext($iter261, true);
/*  1123 */                     $blk = 5; /* allowing case fallthrough */
/*  1124 */                 case 5:
/*  1125 */                     /* --- function return or resume suspension --- */
/*  1126 */                     if ($ret && $ret.$isSuspension) {
/*  1127 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 64, 4);
/*  1128 */                     }
/*  1129 */                     var $next262 = $ret;
/*  1130 */                     if ($next262 === undefined) {
/*  1131 */                         $blk = 2;
/*  1132 */                         continue;
/*  1133 */                     }
/*  1134 */                     i = $next262;
/*  1135 */                     //
/*  1136 */                     // line 65:
/*  1137 */                     //         for (([x1, y1, z1], v1, m1),
/*  1138 */                     //         ^
/*  1139 */                     //
/*  1140 */                     $currLineNo = 65;
/*  1141 */                     $currColNo = 8;
/*  1142 */ 
/*  1143 */                     if (pairs === undefined) {
/*  1144 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1145 */                     }
/*  1146 */                     var $iter263 = Sk.abstr.iter(pairs);
/*  1147 */                     $blk = 6; /* allowing case fallthrough */
/*  1148 */                 case 6:
/*  1149 */                     /* --- for start --- */
/*  1150 */                     $ret = Sk.abstr.iternext($iter263, true);
/*  1151 */                     $blk = 9; /* allowing case fallthrough */
/*  1152 */                 case 9:
/*  1153 */                     /* --- function return or resume suspension --- */
/*  1154 */                     if ($ret && $ret.$isSuspension) {
/*  1155 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 65, 8);
/*  1156 */                     }
/*  1157 */                     var $next264 = $ret;
/*  1158 */                     if ($next264 === undefined) {
/*  1159 */                         $blk = 7;
/*  1160 */                         continue;
/*  1161 */                     }
/*  1162 */                     var $items265 = Sk.abstr.sequenceUnpack($next264, 2);
/*  1163 */                     var $items266 = Sk.abstr.sequenceUnpack($items265[0], 3);
/*  1164 */                     var $items267 = Sk.abstr.sequenceUnpack($items266[0], 3);
/*  1165 */                     x1 = $items267[0];
/*  1166 */                     y1 = $items267[1];
/*  1167 */                     z1 = $items267[2];
/*  1168 */                     v1 = $items266[1];
/*  1169 */                     m1 = $items266[2];
/*  1170 */                     var $items268 = Sk.abstr.sequenceUnpack($items265[1], 3);
/*  1171 */                     var $items269 = Sk.abstr.sequenceUnpack($items268[0], 3);
/*  1172 */                     x2 = $items269[0];
/*  1173 */                     y2 = $items269[1];
/*  1174 */                     z2 = $items269[2];
/*  1175 */                     v2 = $items268[1];
/*  1176 */                     m2 = $items268[2];
/*  1177 */                     //
/*  1178 */                     // line 67:
/*  1179 */                     //             dx = x1 - x2
/*  1180 */                     //             ^
/*  1181 */                     //
/*  1182 */                     $currLineNo = 67;
/*  1183 */                     $currColNo = 12;
/*  1184 */ 
/*  1185 */                     if (x1 === undefined) {
/*  1186 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x1\' referenced before assignment');
/*  1187 */                     }
/*  1188 */                     if (x2 === undefined) {
/*  1189 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x2\' referenced before assignment');
/*  1190 */                     }
/*  1191 */                     var $binop270 = Sk.abstr.numberBinOp(x1, x2, 'Sub');
/*  1192 */                     dx = $binop270;
/*  1193 */                     //
/*  1194 */                     // line 68:
/*  1195 */                     //             dy = y1 - y2
/*  1196 */                     //             ^
/*  1197 */                     //
/*  1198 */                     $currLineNo = 68;
/*  1199 */                     $currColNo = 12;
/*  1200 */ 
/*  1201 */                     if (y1 === undefined) {
/*  1202 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y1\' referenced before assignment');
/*  1203 */                     }
/*  1204 */                     if (y2 === undefined) {
/*  1205 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y2\' referenced before assignment');
/*  1206 */                     }
/*  1207 */                     var $binop271 = Sk.abstr.numberBinOp(y1, y2, 'Sub');
/*  1208 */                     dy = $binop271;
/*  1209 */                     //
/*  1210 */                     // line 69:
/*  1211 */                     //             dz = z1 - z2
/*  1212 */                     //             ^
/*  1213 */                     //
/*  1214 */                     $currLineNo = 69;
/*  1215 */                     $currColNo = 12;
/*  1216 */ 
/*  1217 */                     if (z1 === undefined) {
/*  1218 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z1\' referenced before assignment');
/*  1219 */                     }
/*  1220 */                     if (z2 === undefined) {
/*  1221 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z2\' referenced before assignment');
/*  1222 */                     }
/*  1223 */                     var $binop272 = Sk.abstr.numberBinOp(z1, z2, 'Sub');
/*  1224 */                     dz = $binop272;
/*  1225 */                     //
/*  1226 */                     // line 70:
/*  1227 */                     //             mag = dt * ((dx * dx + dy * dy + dz * dz) ** (-1.5))
/*  1228 */                     //             ^
/*  1229 */                     //
/*  1230 */                     $currLineNo = 70;
/*  1231 */                     $currColNo = 12;
/*  1232 */ 
/*  1233 */                     if (dt === undefined) {
/*  1234 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1235 */                     }
/*  1236 */                     if (dx === undefined) {
/*  1237 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1238 */                     }
/*  1239 */                     if (dx === undefined) {
/*  1240 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1241 */                     }
/*  1242 */                     var $binop273 = Sk.abstr.numberBinOp(dx, dx, 'Mult');
/*  1243 */                     if (dy === undefined) {
/*  1244 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1245 */                     }
/*  1246 */                     if (dy === undefined) {
/*  1247 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1248 */                     }
/*  1249 */                     var $binop274 = Sk.abstr.numberBinOp(dy, dy, 'Mult');
/*  1250 */                     var $binop275 = Sk.abstr.numberBinOp($binop273, $binop274, 'Add');
/*  1251 */                     if (dz === undefined) {
/*  1252 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1253 */                     }
/*  1254 */                     if (dz === undefined) {
/*  1255 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1256 */                     }
/*  1257 */                     var $binop276 = Sk.abstr.numberBinOp(dz, dz, 'Mult');
/*  1258 */                     var $binop277 = Sk.abstr.numberBinOp($binop275, $binop276, 'Add');
/*  1259 */                     var $binop278 = Sk.abstr.numberBinOp($binop277, new Sk.builtin.float_(-1.5), 'Pow');
/*  1260 */                     var $binop279 = Sk.abstr.numberBinOp(dt, $binop278, 'Mult');
/*  1261 */                     mag = $binop279;
/*  1262 */                     //
/*  1263 */                     // line 71:
/*  1264 */                     //             b1m = m1 * mag
/*  1265 */                     //             ^
/*  1266 */                     //
/*  1267 */                     $currLineNo = 71;
/*  1268 */                     $currColNo = 12;
/*  1269 */ 
/*  1270 */                     if (m1 === undefined) {
/*  1271 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m1\' referenced before assignment');
/*  1272 */                     }
/*  1273 */                     if (mag === undefined) {
/*  1274 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  1275 */                     }
/*  1276 */                     var $binop280 = Sk.abstr.numberBinOp(m1, mag, 'Mult');
/*  1277 */                     b1m = $binop280;
/*  1278 */                     //
/*  1279 */                     // line 72:
/*  1280 */                     //             b2m = m2 * mag
/*  1281 */                     //             ^
/*  1282 */                     //
/*  1283 */                     $currLineNo = 72;
/*  1284 */                     $currColNo = 12;
/*  1285 */ 
/*  1286 */                     if (m2 === undefined) {
/*  1287 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m2\' referenced before assignment');
/*  1288 */                     }
/*  1289 */                     if (mag === undefined) {
/*  1290 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  1291 */                     }
/*  1292 */                     var $binop281 = Sk.abstr.numberBinOp(m2, mag, 'Mult');
/*  1293 */                     b2m = $binop281;
/*  1294 */                     //
/*  1295 */                     // line 73:
/*  1296 */                     //             v1[0] -= dx * b2m
/*  1297 */                     //             ^
/*  1298 */                     //
/*  1299 */                     $currLineNo = 73;
/*  1300 */                     $currColNo = 12;
/*  1301 */ 
/*  1302 */                     if (v1 === undefined) {
/*  1303 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1304 */                     }
/*  1305 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(0), true);
/*  1306 */                     $blk = 10; /* allowing case fallthrough */
/*  1307 */                 case 10:
/*  1308 */                     /* --- function return or resume suspension --- */
/*  1309 */                     if ($ret && $ret.$isSuspension) {
/*  1310 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 73, 12);
/*  1311 */                     }
/*  1312 */                     var $gitem282 = $ret;
/*  1313 */                     if (dx === undefined) {
/*  1314 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1315 */                     }
/*  1316 */                     if (b2m === undefined) {
/*  1317 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1318 */                     }
/*  1319 */                     var $binop283 = Sk.abstr.numberBinOp(dx, b2m, 'Mult');
/*  1320 */                     var $inplbinopsubscr284 = Sk.abstr.numberInplaceBinOp($gitem282, $binop283, 'Sub');
/*  1321 */                     $ret = undefined;
/*  1322 */                     if ($inplbinopsubscr284 !== undefined) {
/*  1323 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(0), $inplbinopsubscr284, true)
/*  1324 */                     }
/*  1325 */                     $blk = 11; /* allowing case fallthrough */
/*  1326 */                 case 11:
/*  1327 */                     /* --- function return or resume suspension --- */
/*  1328 */                     if ($ret && $ret.$isSuspension) {
/*  1329 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 73, 12);
/*  1330 */                     }
/*  1331 */                     //
/*  1332 */                     // line 74:
/*  1333 */                     //             v1[1] -= dy * b2m
/*  1334 */                     //             ^
/*  1335 */                     //
/*  1336 */                     $currLineNo = 74;
/*  1337 */                     $currColNo = 12;
/*  1338 */ 
/*  1339 */                     if (v1 === undefined) {
/*  1340 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1341 */                     }
/*  1342 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(1), true);
/*  1343 */                     $blk = 12; /* allowing case fallthrough */
/*  1344 */                 case 12:
/*  1345 */                     /* --- function return or resume suspension --- */
/*  1346 */                     if ($ret && $ret.$isSuspension) {
/*  1347 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 74, 12);
/*  1348 */                     }
/*  1349 */                     var $gitem285 = $ret;
/*  1350 */                     if (dy === undefined) {
/*  1351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1352 */                     }
/*  1353 */                     if (b2m === undefined) {
/*  1354 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1355 */                     }
/*  1356 */                     var $binop286 = Sk.abstr.numberBinOp(dy, b2m, 'Mult');
/*  1357 */                     var $inplbinopsubscr287 = Sk.abstr.numberInplaceBinOp($gitem285, $binop286, 'Sub');
/*  1358 */                     $ret = undefined;
/*  1359 */                     if ($inplbinopsubscr287 !== undefined) {
/*  1360 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(1), $inplbinopsubscr287, true)
/*  1361 */                     }
/*  1362 */                     $blk = 13; /* allowing case fallthrough */
/*  1363 */                 case 13:
/*  1364 */                     /* --- function return or resume suspension --- */
/*  1365 */                     if ($ret && $ret.$isSuspension) {
/*  1366 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 74, 12);
/*  1367 */                     }
/*  1368 */                     //
/*  1369 */                     // line 75:
/*  1370 */                     //             v1[2] -= dz * b2m
/*  1371 */                     //             ^
/*  1372 */                     //
/*  1373 */                     $currLineNo = 75;
/*  1374 */                     $currColNo = 12;
/*  1375 */ 
/*  1376 */                     if (v1 === undefined) {
/*  1377 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v1\' referenced before assignment');
/*  1378 */                     }
/*  1379 */                     $ret = Sk.abstr.objectGetItem(v1, new Sk.builtin.int_(2), true);
/*  1380 */                     $blk = 14; /* allowing case fallthrough */
/*  1381 */                 case 14:
/*  1382 */                     /* --- function return or resume suspension --- */
/*  1383 */                     if ($ret && $ret.$isSuspension) {
/*  1384 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 75, 12);
/*  1385 */                     }
/*  1386 */                     var $gitem288 = $ret;
/*  1387 */                     if (dz === undefined) {
/*  1388 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1389 */                     }
/*  1390 */                     if (b2m === undefined) {
/*  1391 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b2m\' referenced before assignment');
/*  1392 */                     }
/*  1393 */                     var $binop289 = Sk.abstr.numberBinOp(dz, b2m, 'Mult');
/*  1394 */                     var $inplbinopsubscr290 = Sk.abstr.numberInplaceBinOp($gitem288, $binop289, 'Sub');
/*  1395 */                     $ret = undefined;
/*  1396 */                     if ($inplbinopsubscr290 !== undefined) {
/*  1397 */                         $ret = Sk.abstr.objectSetItem(v1, new Sk.builtin.int_(2), $inplbinopsubscr290, true)
/*  1398 */                     }
/*  1399 */                     $blk = 15; /* allowing case fallthrough */
/*  1400 */                 case 15:
/*  1401 */                     /* --- function return or resume suspension --- */
/*  1402 */                     if ($ret && $ret.$isSuspension) {
/*  1403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 75, 12);
/*  1404 */                     }
/*  1405 */                     //
/*  1406 */                     // line 76:
/*  1407 */                     //             v2[0] += dx * b1m
/*  1408 */                     //             ^
/*  1409 */                     //
/*  1410 */                     $currLineNo = 76;
/*  1411 */                     $currColNo = 12;
/*  1412 */ 
/*  1413 */                     if (v2 === undefined) {
/*  1414 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1415 */                     }
/*  1416 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(0), true);
/*  1417 */                     $blk = 16; /* allowing case fallthrough */
/*  1418 */                 case 16:
/*  1419 */                     /* --- function return or resume suspension --- */
/*  1420 */                     if ($ret && $ret.$isSuspension) {
/*  1421 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 76, 12);
/*  1422 */                     }
/*  1423 */                     var $gitem291 = $ret;
/*  1424 */                     if (dx === undefined) {
/*  1425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1426 */                     }
/*  1427 */                     if (b1m === undefined) {
/*  1428 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1429 */                     }
/*  1430 */                     var $binop292 = Sk.abstr.numberBinOp(dx, b1m, 'Mult');
/*  1431 */                     var $inplbinopsubscr293 = Sk.abstr.numberInplaceBinOp($gitem291, $binop292, 'Add');
/*  1432 */                     $ret = undefined;
/*  1433 */                     if ($inplbinopsubscr293 !== undefined) {
/*  1434 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(0), $inplbinopsubscr293, true)
/*  1435 */                     }
/*  1436 */                     $blk = 17; /* allowing case fallthrough */
/*  1437 */                 case 17:
/*  1438 */                     /* --- function return or resume suspension --- */
/*  1439 */                     if ($ret && $ret.$isSuspension) {
/*  1440 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 76, 12);
/*  1441 */                     }
/*  1442 */                     //
/*  1443 */                     // line 77:
/*  1444 */                     //             v2[1] += dy * b1m
/*  1445 */                     //             ^
/*  1446 */                     //
/*  1447 */                     $currLineNo = 77;
/*  1448 */                     $currColNo = 12;
/*  1449 */ 
/*  1450 */                     if (v2 === undefined) {
/*  1451 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1452 */                     }
/*  1453 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(1), true);
/*  1454 */                     $blk = 18; /* allowing case fallthrough */
/*  1455 */                 case 18:
/*  1456 */                     /* --- function return or resume suspension --- */
/*  1457 */                     if ($ret && $ret.$isSuspension) {
/*  1458 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 77, 12);
/*  1459 */                     }
/*  1460 */                     var $gitem294 = $ret;
/*  1461 */                     if (dy === undefined) {
/*  1462 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1463 */                     }
/*  1464 */                     if (b1m === undefined) {
/*  1465 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1466 */                     }
/*  1467 */                     var $binop295 = Sk.abstr.numberBinOp(dy, b1m, 'Mult');
/*  1468 */                     var $inplbinopsubscr296 = Sk.abstr.numberInplaceBinOp($gitem294, $binop295, 'Add');
/*  1469 */                     $ret = undefined;
/*  1470 */                     if ($inplbinopsubscr296 !== undefined) {
/*  1471 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(1), $inplbinopsubscr296, true)
/*  1472 */                     }
/*  1473 */                     $blk = 19; /* allowing case fallthrough */
/*  1474 */                 case 19:
/*  1475 */                     /* --- function return or resume suspension --- */
/*  1476 */                     if ($ret && $ret.$isSuspension) {
/*  1477 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 77, 12);
/*  1478 */                     }
/*  1479 */                     //
/*  1480 */                     // line 78:
/*  1481 */                     //             v2[2] += dz * b1m
/*  1482 */                     //             ^
/*  1483 */                     //
/*  1484 */                     $currLineNo = 78;
/*  1485 */                     $currColNo = 12;
/*  1486 */ 
/*  1487 */                     if (v2 === undefined) {
/*  1488 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v2\' referenced before assignment');
/*  1489 */                     }
/*  1490 */                     $ret = Sk.abstr.objectGetItem(v2, new Sk.builtin.int_(2), true);
/*  1491 */                     $blk = 20; /* allowing case fallthrough */
/*  1492 */                 case 20:
/*  1493 */                     /* --- function return or resume suspension --- */
/*  1494 */                     if ($ret && $ret.$isSuspension) {
/*  1495 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 78, 12);
/*  1496 */                     }
/*  1497 */                     var $gitem297 = $ret;
/*  1498 */                     if (dz === undefined) {
/*  1499 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1500 */                     }
/*  1501 */                     if (b1m === undefined) {
/*  1502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'b1m\' referenced before assignment');
/*  1503 */                     }
/*  1504 */                     var $binop298 = Sk.abstr.numberBinOp(dz, b1m, 'Mult');
/*  1505 */                     var $inplbinopsubscr299 = Sk.abstr.numberInplaceBinOp($gitem297, $binop298, 'Add');
/*  1506 */                     $ret = undefined;
/*  1507 */                     if ($inplbinopsubscr299 !== undefined) {
/*  1508 */                         $ret = Sk.abstr.objectSetItem(v2, new Sk.builtin.int_(2), $inplbinopsubscr299, true)
/*  1509 */                     }
/*  1510 */                     $blk = 21; /* allowing case fallthrough */
/*  1511 */                 case 21:
/*  1512 */                     /* --- function return or resume suspension --- */
/*  1513 */                     if ($ret && $ret.$isSuspension) {
/*  1514 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 78, 12);
/*  1515 */                     }
/*  1516 */                     $blk = 6; /* jump */
/*  1517 */                     continue;
/*  1518 */                 case 2:
/*  1519 */                     /* --- for cleanup --- */
/*  1520 */                     $blk = 3; /* allowing case fallthrough */
/*  1521 */                 case 3:
/*  1522 */                     /* --- for end --- */
/*  1523 */                     return Sk.builtin.none.none$;
/*  1524 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1525 */                 case 7:
/*  1526 */                     /* --- for cleanup --- */
/*  1527 */                     $blk = 8; /* allowing case fallthrough */
/*  1528 */                 case 8:
/*  1529 */                     /* --- for end --- */
/*  1530 */                     //
/*  1531 */                     // line 79:
/*  1532 */                     //         for (r, [vx, vy, vz], m) in bodies:
/*  1533 */                     //         ^
/*  1534 */                     //
/*  1535 */                     $currLineNo = 79;
/*  1536 */                     $currColNo = 8;
/*  1537 */ 
/*  1538 */                     if (bodies === undefined) {
/*  1539 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1540 */                     }
/*  1541 */                     var $iter300 = Sk.abstr.iter(bodies);
/*  1542 */                     $blk = 22; /* allowing case fallthrough */
/*  1543 */                 case 22:
/*  1544 */                     /* --- for start --- */
/*  1545 */                     $ret = Sk.abstr.iternext($iter300, true);
/*  1546 */                     $blk = 25; /* allowing case fallthrough */
/*  1547 */                 case 25:
/*  1548 */                     /* --- function return or resume suspension --- */
/*  1549 */                     if ($ret && $ret.$isSuspension) {
/*  1550 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 79, 8);
/*  1551 */                     }
/*  1552 */                     var $next301 = $ret;
/*  1553 */                     if ($next301 === undefined) {
/*  1554 */                         $blk = 23;
/*  1555 */                         continue;
/*  1556 */                     }
/*  1557 */                     var $items302 = Sk.abstr.sequenceUnpack($next301, 3);
/*  1558 */                     r = $items302[0];
/*  1559 */                     var $items303 = Sk.abstr.sequenceUnpack($items302[1], 3);
/*  1560 */                     vx = $items303[0];
/*  1561 */                     vy = $items303[1];
/*  1562 */                     vz = $items303[2];
/*  1563 */                     m = $items302[2];
/*  1564 */                     //
/*  1565 */                     // line 80:
/*  1566 */                     //             r[0] += dt * vx
/*  1567 */                     //             ^
/*  1568 */                     //
/*  1569 */                     $currLineNo = 80;
/*  1570 */                     $currColNo = 12;
/*  1571 */ 
/*  1572 */                     if (r === undefined) {
/*  1573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1574 */                     }
/*  1575 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(0), true);
/*  1576 */                     $blk = 26; /* allowing case fallthrough */
/*  1577 */                 case 26:
/*  1578 */                     /* --- function return or resume suspension --- */
/*  1579 */                     if ($ret && $ret.$isSuspension) {
/*  1580 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 80, 12);
/*  1581 */                     }
/*  1582 */                     var $gitem304 = $ret;
/*  1583 */                     if (dt === undefined) {
/*  1584 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1585 */                     }
/*  1586 */                     if (vx === undefined) {
/*  1587 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  1588 */                     }
/*  1589 */                     var $binop305 = Sk.abstr.numberBinOp(dt, vx, 'Mult');
/*  1590 */                     var $inplbinopsubscr306 = Sk.abstr.numberInplaceBinOp($gitem304, $binop305, 'Add');
/*  1591 */                     $ret = undefined;
/*  1592 */                     if ($inplbinopsubscr306 !== undefined) {
/*  1593 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(0), $inplbinopsubscr306, true)
/*  1594 */                     }
/*  1595 */                     $blk = 27; /* allowing case fallthrough */
/*  1596 */                 case 27:
/*  1597 */                     /* --- function return or resume suspension --- */
/*  1598 */                     if ($ret && $ret.$isSuspension) {
/*  1599 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 80, 12);
/*  1600 */                     }
/*  1601 */                     //
/*  1602 */                     // line 81:
/*  1603 */                     //             r[1] += dt * vy
/*  1604 */                     //             ^
/*  1605 */                     //
/*  1606 */                     $currLineNo = 81;
/*  1607 */                     $currColNo = 12;
/*  1608 */ 
/*  1609 */                     if (r === undefined) {
/*  1610 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1611 */                     }
/*  1612 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(1), true);
/*  1613 */                     $blk = 28; /* allowing case fallthrough */
/*  1614 */                 case 28:
/*  1615 */                     /* --- function return or resume suspension --- */
/*  1616 */                     if ($ret && $ret.$isSuspension) {
/*  1617 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 81, 12);
/*  1618 */                     }
/*  1619 */                     var $gitem307 = $ret;
/*  1620 */                     if (dt === undefined) {
/*  1621 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1622 */                     }
/*  1623 */                     if (vy === undefined) {
/*  1624 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  1625 */                     }
/*  1626 */                     var $binop308 = Sk.abstr.numberBinOp(dt, vy, 'Mult');
/*  1627 */                     var $inplbinopsubscr309 = Sk.abstr.numberInplaceBinOp($gitem307, $binop308, 'Add');
/*  1628 */                     $ret = undefined;
/*  1629 */                     if ($inplbinopsubscr309 !== undefined) {
/*  1630 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(1), $inplbinopsubscr309, true)
/*  1631 */                     }
/*  1632 */                     $blk = 29; /* allowing case fallthrough */
/*  1633 */                 case 29:
/*  1634 */                     /* --- function return or resume suspension --- */
/*  1635 */                     if ($ret && $ret.$isSuspension) {
/*  1636 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 81, 12);
/*  1637 */                     }
/*  1638 */                     //
/*  1639 */                     // line 82:
/*  1640 */                     //             r[2] += dt * vz
/*  1641 */                     //             ^
/*  1642 */                     //
/*  1643 */                     $currLineNo = 82;
/*  1644 */                     $currColNo = 12;
/*  1645 */ 
/*  1646 */                     if (r === undefined) {
/*  1647 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  1648 */                     }
/*  1649 */                     $ret = Sk.abstr.objectGetItem(r, new Sk.builtin.int_(2), true);
/*  1650 */                     $blk = 30; /* allowing case fallthrough */
/*  1651 */                 case 30:
/*  1652 */                     /* --- function return or resume suspension --- */
/*  1653 */                     if ($ret && $ret.$isSuspension) {
/*  1654 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 82, 12);
/*  1655 */                     }
/*  1656 */                     var $gitem310 = $ret;
/*  1657 */                     if (dt === undefined) {
/*  1658 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dt\' referenced before assignment');
/*  1659 */                     }
/*  1660 */                     if (vz === undefined) {
/*  1661 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  1662 */                     }
/*  1663 */                     var $binop311 = Sk.abstr.numberBinOp(dt, vz, 'Mult');
/*  1664 */                     var $inplbinopsubscr312 = Sk.abstr.numberInplaceBinOp($gitem310, $binop311, 'Add');
/*  1665 */                     $ret = undefined;
/*  1666 */                     if ($inplbinopsubscr312 !== undefined) {
/*  1667 */                         $ret = Sk.abstr.objectSetItem(r, new Sk.builtin.int_(2), $inplbinopsubscr312, true)
/*  1668 */                     }
/*  1669 */                     $blk = 31; /* allowing case fallthrough */
/*  1670 */                 case 31:
/*  1671 */                     /* --- function return or resume suspension --- */
/*  1672 */                     if ($ret && $ret.$isSuspension) {
/*  1673 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 82, 12);
/*  1674 */                     }
/*  1675 */                     $blk = 22; /* jump */
/*  1676 */                     continue;
/*  1677 */                 case 23:
/*  1678 */                     /* --- for cleanup --- */
/*  1679 */                     $blk = 24; /* allowing case fallthrough */
/*  1680 */                 case 24:
/*  1681 */                     /* --- for end --- */
/*  1682 */                     $blk = 1; /* jump */
/*  1683 */                     continue;
/*  1684 */                 }
/*  1685 */             } catch (err) {
/*  1686 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1687 */                     err = new Sk.builtin.ExternalError(err);
/*  1688 */                 }
/*  1689 */                 err.traceback.push({
/*  1690 */                     lineno: $currLineNo,
/*  1691 */                     colno: $currColNo,
/*  1692 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  1693 */                 });
/*  1694 */                 if ($exc.length > 0) {
/*  1695 */                     $err = err;
/*  1696 */                     $blk = $exc.pop();
/*  1697 */                     continue;
/*  1698 */                 } else {
/*  1699 */                     throw err;
/*  1700 */                 }
/*  1701 */             }
/*  1702 */         }
/*  1703 */     });
/*  1704 */     var $scope316 = (function $report_energy317$(bodies, pairs, e) {
/*  1705 */         var dx, dy, dz, m, m1, m2, r, v1, v2, vx, vy, vz, x1, x2, y1, y2, z1, z2; /* locals */
/*  1706 */         var bodies, bodies, bodies, dx, dx, dx, dy, dy, dy, dz, dz, dz, e, e, e, e, e, e, m, m, m1, m1, m2, m2, pairs, pairs, pairs, r, v1, v2, vx, vx, vx, vy, vy, vy, vz, vz, vz, x1, x1, x2, x2, y1, y1, y2, y2, z1, z1, z2, z2, $iter318, $iter318, $iter337, $iter337;
/*  1707 */         var $wakeFromSuspension = function() {
/*  1708 */             var susp = $scope316.$wakingSuspension;
/*  1709 */             delete $scope316.$wakingSuspension;
/*  1710 */             $blk = susp.$blk;
/*  1711 */             $loc = susp.$loc;
/*  1712 */             $gbl = susp.$gbl;
/*  1713 */             $exc = susp.$exc;
/*  1714 */             $err = susp.$err;
/*  1715 */             $postfinally = susp.$postfinally;
/*  1716 */             $currLineNo = susp.$lineno;
/*  1717 */             $currColNo = susp.$colno;
/*  1718 */             Sk.lastYield = Date.now();
/*  1719 */             bodies = susp.$tmps.bodies;
/*  1720 */             dx = susp.$tmps.dx;
/*  1721 */             dy = susp.$tmps.dy;
/*  1722 */             dz = susp.$tmps.dz;
/*  1723 */             e = susp.$tmps.e;
/*  1724 */             m = susp.$tmps.m;
/*  1725 */             m1 = susp.$tmps.m1;
/*  1726 */             m2 = susp.$tmps.m2;
/*  1727 */             pairs = susp.$tmps.pairs;
/*  1728 */             r = susp.$tmps.r;
/*  1729 */             v1 = susp.$tmps.v1;
/*  1730 */             v2 = susp.$tmps.v2;
/*  1731 */             vx = susp.$tmps.vx;
/*  1732 */             vy = susp.$tmps.vy;
/*  1733 */             vz = susp.$tmps.vz;
/*  1734 */             x1 = susp.$tmps.x1;
/*  1735 */             x2 = susp.$tmps.x2;
/*  1736 */             y1 = susp.$tmps.y1;
/*  1737 */             y2 = susp.$tmps.y2;
/*  1738 */             z1 = susp.$tmps.z1;
/*  1739 */             z2 = susp.$tmps.z2;
/*  1740 */             $iter318 = susp.$tmps.$iter318;
/*  1741 */             $iter337 = susp.$tmps.$iter337;
/*  1742 */             try {
/*  1743 */                 $ret = susp.child.resume();
/*  1744 */             } catch (err) {
/*  1745 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1746 */                     err = new Sk.builtin.ExternalError(err);
/*  1747 */                 }
/*  1748 */                 err.traceback.push({
/*  1749 */                     lineno: $currLineNo,
/*  1750 */                     colno: $currColNo,
/*  1751 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  1752 */                 });
/*  1753 */                 if ($exc.length > 0) {
/*  1754 */                     $err = err;
/*  1755 */                     $blk = $exc.pop();
/*  1756 */                 } else {
/*  1757 */                     throw err;
/*  1758 */                 }
/*  1759 */             }
/*  1760 */         };
/*  1761 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1762 */             var susp = new Sk.misceval.Suspension();
/*  1763 */             susp.child = $child;
/*  1764 */             susp.resume = function() {
/*  1765 */                 $scope316.$wakingSuspension = susp;
/*  1766 */                 return $scope316();
/*  1767 */             };
/*  1768 */             susp.data = susp.child.data;
/*  1769 */             susp.$blk = $blk;
/*  1770 */             susp.$loc = $loc;
/*  1771 */             susp.$gbl = $gbl;
/*  1772 */             susp.$exc = $exc;
/*  1773 */             susp.$err = $err;
/*  1774 */             susp.$postfinally = $postfinally;
/*  1775 */             susp.$filename = $filename;
/*  1776 */             susp.$lineno = $lineno;
/*  1777 */             susp.$colno = $colno;
/*  1778 */             susp.optional = susp.child.optional;
/*  1779 */             susp.$tmps = {
/*  1780 */                 "bodies": bodies,
/*  1781 */                 "dx": dx,
/*  1782 */                 "dy": dy,
/*  1783 */                 "dz": dz,
/*  1784 */                 "e": e,
/*  1785 */                 "m": m,
/*  1786 */                 "m1": m1,
/*  1787 */                 "m2": m2,
/*  1788 */                 "pairs": pairs,
/*  1789 */                 "r": r,
/*  1790 */                 "v1": v1,
/*  1791 */                 "v2": v2,
/*  1792 */                 "vx": vx,
/*  1793 */                 "vy": vy,
/*  1794 */                 "vz": vz,
/*  1795 */                 "x1": x1,
/*  1796 */                 "x2": x2,
/*  1797 */                 "y1": y1,
/*  1798 */                 "y2": y2,
/*  1799 */                 "z1": z1,
/*  1800 */                 "z2": z2,
/*  1801 */                 "$iter318": $iter318,
/*  1802 */                 "$iter337": $iter337
/*  1803 */             };
/*  1804 */             return susp;
/*  1805 */         };
/*  1806 */         var $blk = 0,
/*  1807 */             $exc = [],
/*  1808 */             $loc = {},
/*  1809 */             $gbl = this,
/*  1810 */             $err = undefined,
/*  1811 */             $ret = undefined,
/*  1812 */             $postfinally = undefined,
/*  1813 */             $currLineNo = undefined,
/*  1814 */             $currColNo = undefined;
/*  1815 */         if (typeof Sk.execStart === 'undefined') {
/*  1816 */             Sk.execStart = Date.now()
/*  1817 */         }
/*  1818 */         if (typeof Sk.lastYield === 'undefined') {
/*  1819 */             Sk.lastYield = Date.now()
/*  1820 */         }
/*  1821 */         if ($scope316.$wakingSuspension !== undefined) {
/*  1822 */             $wakeFromSuspension();
/*  1823 */         } else {
/*  1824 */             if (bodies === undefined) bodies = $scope316.$defaults[0];
/*  1825 */             if (pairs === undefined) pairs = $scope316.$defaults[1];
/*  1826 */             if (e === undefined) e = $scope316.$defaults[2];
/*  1827 */             Sk.builtin.pyCheckArgs("report_energy", arguments, 0, 3, false, false);
/*  1828 */         }
/*  1829 */         while (true) {
/*  1830 */             try {
/*  1831 */                 var $dateNow = Date.now();
/*  1832 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1833 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1834 */                 }
/*  1835 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1836 */                     var $susp = $saveSuspension({
/*  1837 */                         data: {
/*  1838 */                             type: 'Sk.yield'
/*  1839 */                         },
/*  1840 */                         resume: function() {}
/*  1841 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  1842 */                     $susp.$blk = $blk;
/*  1843 */                     $susp.optional = true;
/*  1844 */                     return $susp;
/*  1845 */                 }
/*  1846 */                 switch ($blk) {
/*  1847 */                 case 0:
/*  1848 */                     /* --- codeobj entry --- */
/*  1849 */                     if (bodies === undefined) {
/*  1850 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1851 */                     }
/*  1852 */                     if (pairs === undefined) {
/*  1853 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1854 */                     }
/*  1855 */                     if (e === undefined) {
/*  1856 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1857 */                     }
/*  1858 */                     if (bodies === undefined) {
/*  1859 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  1860 */                     }
/*  1861 */                     if (pairs === undefined) {
/*  1862 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1863 */                     }
/*  1864 */                     if (e === undefined) {
/*  1865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1866 */                     }
/*  1867 */ 
/*  1868 */                     //
/*  1869 */                     // line 87:
/*  1870 */                     //     for (((x1, y1, z1), v1, m1),
/*  1871 */                     //     ^
/*  1872 */                     //
/*  1873 */                     $currLineNo = 87;
/*  1874 */                     $currColNo = 4;
/*  1875 */ 
/*  1876 */                     if (pairs === undefined) {
/*  1877 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pairs\' referenced before assignment');
/*  1878 */                     }
/*  1879 */                     var $iter318 = Sk.abstr.iter(pairs);
/*  1880 */                     $blk = 1; /* allowing case fallthrough */
/*  1881 */                 case 1:
/*  1882 */                     /* --- for start --- */
/*  1883 */                     $ret = Sk.abstr.iternext($iter318, true);
/*  1884 */                     $blk = 4; /* allowing case fallthrough */
/*  1885 */                 case 4:
/*  1886 */                     /* --- function return or resume suspension --- */
/*  1887 */                     if ($ret && $ret.$isSuspension) {
/*  1888 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 87, 4);
/*  1889 */                     }
/*  1890 */                     var $next319 = $ret;
/*  1891 */                     if ($next319 === undefined) {
/*  1892 */                         $blk = 2;
/*  1893 */                         continue;
/*  1894 */                     }
/*  1895 */                     var $items320 = Sk.abstr.sequenceUnpack($next319, 2);
/*  1896 */                     var $items321 = Sk.abstr.sequenceUnpack($items320[0], 3);
/*  1897 */                     var $items322 = Sk.abstr.sequenceUnpack($items321[0], 3);
/*  1898 */                     x1 = $items322[0];
/*  1899 */                     y1 = $items322[1];
/*  1900 */                     z1 = $items322[2];
/*  1901 */                     v1 = $items321[1];
/*  1902 */                     m1 = $items321[2];
/*  1903 */                     var $items323 = Sk.abstr.sequenceUnpack($items320[1], 3);
/*  1904 */                     var $items324 = Sk.abstr.sequenceUnpack($items323[0], 3);
/*  1905 */                     x2 = $items324[0];
/*  1906 */                     y2 = $items324[1];
/*  1907 */                     z2 = $items324[2];
/*  1908 */                     v2 = $items323[1];
/*  1909 */                     m2 = $items323[2];
/*  1910 */                     //
/*  1911 */                     // line 89:
/*  1912 */                     //         dx = x1 - x2
/*  1913 */                     //         ^
/*  1914 */                     //
/*  1915 */                     $currLineNo = 89;
/*  1916 */                     $currColNo = 8;
/*  1917 */ 
/*  1918 */                     if (x1 === undefined) {
/*  1919 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x1\' referenced before assignment');
/*  1920 */                     }
/*  1921 */                     if (x2 === undefined) {
/*  1922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'x2\' referenced before assignment');
/*  1923 */                     }
/*  1924 */                     var $binop325 = Sk.abstr.numberBinOp(x1, x2, 'Sub');
/*  1925 */                     dx = $binop325;
/*  1926 */                     //
/*  1927 */                     // line 90:
/*  1928 */                     //         dy = y1 - y2
/*  1929 */                     //         ^
/*  1930 */                     //
/*  1931 */                     $currLineNo = 90;
/*  1932 */                     $currColNo = 8;
/*  1933 */ 
/*  1934 */                     if (y1 === undefined) {
/*  1935 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y1\' referenced before assignment');
/*  1936 */                     }
/*  1937 */                     if (y2 === undefined) {
/*  1938 */                         throw new Sk.builtin.UnboundLocalError('local variable \'y2\' referenced before assignment');
/*  1939 */                     }
/*  1940 */                     var $binop326 = Sk.abstr.numberBinOp(y1, y2, 'Sub');
/*  1941 */                     dy = $binop326;
/*  1942 */                     //
/*  1943 */                     // line 91:
/*  1944 */                     //         dz = z1 - z2
/*  1945 */                     //         ^
/*  1946 */                     //
/*  1947 */                     $currLineNo = 91;
/*  1948 */                     $currColNo = 8;
/*  1949 */ 
/*  1950 */                     if (z1 === undefined) {
/*  1951 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z1\' referenced before assignment');
/*  1952 */                     }
/*  1953 */                     if (z2 === undefined) {
/*  1954 */                         throw new Sk.builtin.UnboundLocalError('local variable \'z2\' referenced before assignment');
/*  1955 */                     }
/*  1956 */                     var $binop327 = Sk.abstr.numberBinOp(z1, z2, 'Sub');
/*  1957 */                     dz = $binop327;
/*  1958 */                     //
/*  1959 */                     // line 92:
/*  1960 */                     //         e -= (m1 * m2) / ((dx * dx + dy * dy + dz * dz) ** 0.5)
/*  1961 */                     //         ^
/*  1962 */                     //
/*  1963 */                     $currLineNo = 92;
/*  1964 */                     $currColNo = 8;
/*  1965 */ 
/*  1966 */                     if (e === undefined) {
/*  1967 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  1968 */                     }
/*  1969 */                     if (m1 === undefined) {
/*  1970 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m1\' referenced before assignment');
/*  1971 */                     }
/*  1972 */                     if (m2 === undefined) {
/*  1973 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m2\' referenced before assignment');
/*  1974 */                     }
/*  1975 */                     var $binop328 = Sk.abstr.numberBinOp(m1, m2, 'Mult');
/*  1976 */                     if (dx === undefined) {
/*  1977 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1978 */                     }
/*  1979 */                     if (dx === undefined) {
/*  1980 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dx\' referenced before assignment');
/*  1981 */                     }
/*  1982 */                     var $binop329 = Sk.abstr.numberBinOp(dx, dx, 'Mult');
/*  1983 */                     if (dy === undefined) {
/*  1984 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1985 */                     }
/*  1986 */                     if (dy === undefined) {
/*  1987 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dy\' referenced before assignment');
/*  1988 */                     }
/*  1989 */                     var $binop330 = Sk.abstr.numberBinOp(dy, dy, 'Mult');
/*  1990 */                     var $binop331 = Sk.abstr.numberBinOp($binop329, $binop330, 'Add');
/*  1991 */                     if (dz === undefined) {
/*  1992 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1993 */                     }
/*  1994 */                     if (dz === undefined) {
/*  1995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dz\' referenced before assignment');
/*  1996 */                     }
/*  1997 */                     var $binop332 = Sk.abstr.numberBinOp(dz, dz, 'Mult');
/*  1998 */                     var $binop333 = Sk.abstr.numberBinOp($binop331, $binop332, 'Add');
/*  1999 */                     var $binop334 = Sk.abstr.numberBinOp($binop333, new Sk.builtin.float_(0.5), 'Pow');
/*  2000 */                     var $binop335 = Sk.abstr.numberBinOp($binop328, $binop334, 'Div');
/*  2001 */                     var $inplbinop336 = Sk.abstr.numberInplaceBinOp(e, $binop335, 'Sub');
/*  2002 */                     e = $inplbinop336;
/*  2003 */                     $blk = 1; /* jump */
/*  2004 */                     continue;
/*  2005 */                 case 2:
/*  2006 */                     /* --- for cleanup --- */
/*  2007 */                     $blk = 3; /* allowing case fallthrough */
/*  2008 */                 case 3:
/*  2009 */                     /* --- for end --- */
/*  2010 */                     //
/*  2011 */                     // line 93:
/*  2012 */                     //     for (r, [vx, vy, vz], m) in bodies:
/*  2013 */                     //     ^
/*  2014 */                     //
/*  2015 */                     $currLineNo = 93;
/*  2016 */                     $currColNo = 4;
/*  2017 */ 
/*  2018 */                     if (bodies === undefined) {
/*  2019 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2020 */                     }
/*  2021 */                     var $iter337 = Sk.abstr.iter(bodies);
/*  2022 */                     $blk = 5; /* allowing case fallthrough */
/*  2023 */                 case 5:
/*  2024 */                     /* --- for start --- */
/*  2025 */                     $ret = Sk.abstr.iternext($iter337, true);
/*  2026 */                     $blk = 8; /* allowing case fallthrough */
/*  2027 */                 case 8:
/*  2028 */                     /* --- function return or resume suspension --- */
/*  2029 */                     if ($ret && $ret.$isSuspension) {
/*  2030 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 93, 4);
/*  2031 */                     }
/*  2032 */                     var $next338 = $ret;
/*  2033 */                     if ($next338 === undefined) {
/*  2034 */                         $blk = 6;
/*  2035 */                         continue;
/*  2036 */                     }
/*  2037 */                     var $items339 = Sk.abstr.sequenceUnpack($next338, 3);
/*  2038 */                     r = $items339[0];
/*  2039 */                     var $items340 = Sk.abstr.sequenceUnpack($items339[1], 3);
/*  2040 */                     vx = $items340[0];
/*  2041 */                     vy = $items340[1];
/*  2042 */                     vz = $items340[2];
/*  2043 */                     m = $items339[2];
/*  2044 */                     //
/*  2045 */                     // line 94:
/*  2046 */                     //         e += m * (vx * vx + vy * vy + vz * vz) / 2.
/*  2047 */                     //         ^
/*  2048 */                     //
/*  2049 */                     $currLineNo = 94;
/*  2050 */                     $currColNo = 8;
/*  2051 */ 
/*  2052 */                     if (e === undefined) {
/*  2053 */                         throw new Sk.builtin.UnboundLocalError('local variable \'e\' referenced before assignment');
/*  2054 */                     }
/*  2055 */                     if (m === undefined) {
/*  2056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2057 */                     }
/*  2058 */                     if (vx === undefined) {
/*  2059 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  2060 */                     }
/*  2061 */                     if (vx === undefined) {
/*  2062 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  2063 */                     }
/*  2064 */                     var $binop341 = Sk.abstr.numberBinOp(vx, vx, 'Mult');
/*  2065 */                     if (vy === undefined) {
/*  2066 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  2067 */                     }
/*  2068 */                     if (vy === undefined) {
/*  2069 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  2070 */                     }
/*  2071 */                     var $binop342 = Sk.abstr.numberBinOp(vy, vy, 'Mult');
/*  2072 */                     var $binop343 = Sk.abstr.numberBinOp($binop341, $binop342, 'Add');
/*  2073 */                     if (vz === undefined) {
/*  2074 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  2075 */                     }
/*  2076 */                     if (vz === undefined) {
/*  2077 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  2078 */                     }
/*  2079 */                     var $binop344 = Sk.abstr.numberBinOp(vz, vz, 'Mult');
/*  2080 */                     var $binop345 = Sk.abstr.numberBinOp($binop343, $binop344, 'Add');
/*  2081 */                     var $binop346 = Sk.abstr.numberBinOp(m, $binop345, 'Mult');
/*  2082 */                     var $binop347 = Sk.abstr.numberBinOp($binop346, new Sk.builtin.float_(2), 'Div');
/*  2083 */                     var $inplbinop348 = Sk.abstr.numberInplaceBinOp(e, $binop347, 'Add');
/*  2084 */                     e = $inplbinop348;
/*  2085 */                     $blk = 5; /* jump */
/*  2086 */                     continue;
/*  2087 */                 case 6:
/*  2088 */                     /* --- for cleanup --- */
/*  2089 */                     $blk = 7; /* allowing case fallthrough */
/*  2090 */                 case 7:
/*  2091 */                     /* --- for end --- */
/*  2092 */                     return Sk.builtin.none.none$;
/*  2093 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2094 */                 }
/*  2095 */             } catch (err) {
/*  2096 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2097 */                     err = new Sk.builtin.ExternalError(err);
/*  2098 */                 }
/*  2099 */                 err.traceback.push({
/*  2100 */                     lineno: $currLineNo,
/*  2101 */                     colno: $currColNo,
/*  2102 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2103 */                 });
/*  2104 */                 if ($exc.length > 0) {
/*  2105 */                     $err = err;
/*  2106 */                     $blk = $exc.pop();
/*  2107 */                     continue;
/*  2108 */                 } else {
/*  2109 */                     throw err;
/*  2110 */                 }
/*  2111 */             }
/*  2112 */         }
/*  2113 */     });
/*  2114 */     var $scope351 = (function $offset_momentum352$(ref, bodies, px, py, pz) {
/*  2115 */         var m, r, v, vx, vy, vz; /* locals */
/*  2116 */         var bodies, bodies, bodies, m, m, m, m, m, m, m, m, px, px, px, px, px, py, py, py, py, py, pz, pz, pz, pz, pz, r, r, ref, ref, v, v, v, v, vx, vx, vy, vy, vz, vz, $iter353, $iter353, $binop364, $binop365, $binop366;
/*  2117 */         var $wakeFromSuspension = function() {
/*  2118 */             var susp = $scope351.$wakingSuspension;
/*  2119 */             delete $scope351.$wakingSuspension;
/*  2120 */             $blk = susp.$blk;
/*  2121 */             $loc = susp.$loc;
/*  2122 */             $gbl = susp.$gbl;
/*  2123 */             $exc = susp.$exc;
/*  2124 */             $err = susp.$err;
/*  2125 */             $postfinally = susp.$postfinally;
/*  2126 */             $currLineNo = susp.$lineno;
/*  2127 */             $currColNo = susp.$colno;
/*  2128 */             Sk.lastYield = Date.now();
/*  2129 */             bodies = susp.$tmps.bodies;
/*  2130 */             m = susp.$tmps.m;
/*  2131 */             px = susp.$tmps.px;
/*  2132 */             py = susp.$tmps.py;
/*  2133 */             pz = susp.$tmps.pz;
/*  2134 */             r = susp.$tmps.r;
/*  2135 */             ref = susp.$tmps.ref;
/*  2136 */             v = susp.$tmps.v;
/*  2137 */             vx = susp.$tmps.vx;
/*  2138 */             vy = susp.$tmps.vy;
/*  2139 */             vz = susp.$tmps.vz;
/*  2140 */             $iter353 = susp.$tmps.$iter353;
/*  2141 */             $binop364 = susp.$tmps.$binop364;
/*  2142 */             $binop365 = susp.$tmps.$binop365;
/*  2143 */             $binop366 = susp.$tmps.$binop366;
/*  2144 */             try {
/*  2145 */                 $ret = susp.child.resume();
/*  2146 */             } catch (err) {
/*  2147 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2148 */                     err = new Sk.builtin.ExternalError(err);
/*  2149 */                 }
/*  2150 */                 err.traceback.push({
/*  2151 */                     lineno: $currLineNo,
/*  2152 */                     colno: $currColNo,
/*  2153 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2154 */                 });
/*  2155 */                 if ($exc.length > 0) {
/*  2156 */                     $err = err;
/*  2157 */                     $blk = $exc.pop();
/*  2158 */                 } else {
/*  2159 */                     throw err;
/*  2160 */                 }
/*  2161 */             }
/*  2162 */         };
/*  2163 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2164 */             var susp = new Sk.misceval.Suspension();
/*  2165 */             susp.child = $child;
/*  2166 */             susp.resume = function() {
/*  2167 */                 $scope351.$wakingSuspension = susp;
/*  2168 */                 return $scope351();
/*  2169 */             };
/*  2170 */             susp.data = susp.child.data;
/*  2171 */             susp.$blk = $blk;
/*  2172 */             susp.$loc = $loc;
/*  2173 */             susp.$gbl = $gbl;
/*  2174 */             susp.$exc = $exc;
/*  2175 */             susp.$err = $err;
/*  2176 */             susp.$postfinally = $postfinally;
/*  2177 */             susp.$filename = $filename;
/*  2178 */             susp.$lineno = $lineno;
/*  2179 */             susp.$colno = $colno;
/*  2180 */             susp.optional = susp.child.optional;
/*  2181 */             susp.$tmps = {
/*  2182 */                 "bodies": bodies,
/*  2183 */                 "m": m,
/*  2184 */                 "px": px,
/*  2185 */                 "py": py,
/*  2186 */                 "pz": pz,
/*  2187 */                 "r": r,
/*  2188 */                 "ref": ref,
/*  2189 */                 "v": v,
/*  2190 */                 "vx": vx,
/*  2191 */                 "vy": vy,
/*  2192 */                 "vz": vz,
/*  2193 */                 "$iter353": $iter353,
/*  2194 */                 "$binop364": $binop364,
/*  2195 */                 "$binop365": $binop365,
/*  2196 */                 "$binop366": $binop366
/*  2197 */             };
/*  2198 */             return susp;
/*  2199 */         };
/*  2200 */         var $blk = 0,
/*  2201 */             $exc = [],
/*  2202 */             $loc = {},
/*  2203 */             $gbl = this,
/*  2204 */             $err = undefined,
/*  2205 */             $ret = undefined,
/*  2206 */             $postfinally = undefined,
/*  2207 */             $currLineNo = undefined,
/*  2208 */             $currColNo = undefined;
/*  2209 */         if (typeof Sk.execStart === 'undefined') {
/*  2210 */             Sk.execStart = Date.now()
/*  2211 */         }
/*  2212 */         if (typeof Sk.lastYield === 'undefined') {
/*  2213 */             Sk.lastYield = Date.now()
/*  2214 */         }
/*  2215 */         if ($scope351.$wakingSuspension !== undefined) {
/*  2216 */             $wakeFromSuspension();
/*  2217 */         } else {
/*  2218 */             if (bodies === undefined) bodies = $scope351.$defaults[0];
/*  2219 */             if (px === undefined) px = $scope351.$defaults[1];
/*  2220 */             if (py === undefined) py = $scope351.$defaults[2];
/*  2221 */             if (pz === undefined) pz = $scope351.$defaults[3];
/*  2222 */             Sk.builtin.pyCheckArgs("offset_momentum", arguments, 1, 5, false, false);
/*  2223 */         }
/*  2224 */         while (true) {
/*  2225 */             try {
/*  2226 */                 var $dateNow = Date.now();
/*  2227 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2228 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2229 */                 }
/*  2230 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2231 */                     var $susp = $saveSuspension({
/*  2232 */                         data: {
/*  2233 */                             type: 'Sk.yield'
/*  2234 */                         },
/*  2235 */                         resume: function() {}
/*  2236 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2237 */                     $susp.$blk = $blk;
/*  2238 */                     $susp.optional = true;
/*  2239 */                     return $susp;
/*  2240 */                 }
/*  2241 */                 switch ($blk) {
/*  2242 */                 case 0:
/*  2243 */                     /* --- codeobj entry --- */
/*  2244 */                     if (ref === undefined) {
/*  2245 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2246 */                     }
/*  2247 */                     if (bodies === undefined) {
/*  2248 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2249 */                     }
/*  2250 */                     if (px === undefined) {
/*  2251 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2252 */                     }
/*  2253 */                     if (py === undefined) {
/*  2254 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2255 */                     }
/*  2256 */                     if (pz === undefined) {
/*  2257 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2258 */                     }
/*  2259 */                     if (bodies === undefined) {
/*  2260 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2261 */                     }
/*  2262 */                     if (px === undefined) {
/*  2263 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2264 */                     }
/*  2265 */                     if (py === undefined) {
/*  2266 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2267 */                     }
/*  2268 */                     if (pz === undefined) {
/*  2269 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2270 */                     }
/*  2271 */ 
/*  2272 */                     //
/*  2273 */                     // line 98:
/*  2274 */                     //     for (r, [vx, vy, vz], m) in bodies:
/*  2275 */                     //     ^
/*  2276 */                     //
/*  2277 */                     $currLineNo = 98;
/*  2278 */                     $currColNo = 4;
/*  2279 */ 
/*  2280 */                     if (bodies === undefined) {
/*  2281 */                         throw new Sk.builtin.UnboundLocalError('local variable \'bodies\' referenced before assignment');
/*  2282 */                     }
/*  2283 */                     var $iter353 = Sk.abstr.iter(bodies);
/*  2284 */                     $blk = 1; /* allowing case fallthrough */
/*  2285 */                 case 1:
/*  2286 */                     /* --- for start --- */
/*  2287 */                     $ret = Sk.abstr.iternext($iter353, true);
/*  2288 */                     $blk = 4; /* allowing case fallthrough */
/*  2289 */                 case 4:
/*  2290 */                     /* --- function return or resume suspension --- */
/*  2291 */                     if ($ret && $ret.$isSuspension) {
/*  2292 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 98, 4);
/*  2293 */                     }
/*  2294 */                     var $next354 = $ret;
/*  2295 */                     if ($next354 === undefined) {
/*  2296 */                         $blk = 2;
/*  2297 */                         continue;
/*  2298 */                     }
/*  2299 */                     var $items355 = Sk.abstr.sequenceUnpack($next354, 3);
/*  2300 */                     r = $items355[0];
/*  2301 */                     var $items356 = Sk.abstr.sequenceUnpack($items355[1], 3);
/*  2302 */                     vx = $items356[0];
/*  2303 */                     vy = $items356[1];
/*  2304 */                     vz = $items356[2];
/*  2305 */                     m = $items355[2];
/*  2306 */                     //
/*  2307 */                     // line 99:
/*  2308 */                     //         px -= vx * m
/*  2309 */                     //         ^
/*  2310 */                     //
/*  2311 */                     $currLineNo = 99;
/*  2312 */                     $currColNo = 8;
/*  2313 */ 
/*  2314 */                     if (px === undefined) {
/*  2315 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2316 */                     }
/*  2317 */                     if (vx === undefined) {
/*  2318 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vx\' referenced before assignment');
/*  2319 */                     }
/*  2320 */                     if (m === undefined) {
/*  2321 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2322 */                     }
/*  2323 */                     var $binop357 = Sk.abstr.numberBinOp(vx, m, 'Mult');
/*  2324 */                     var $inplbinop358 = Sk.abstr.numberInplaceBinOp(px, $binop357, 'Sub');
/*  2325 */                     px = $inplbinop358;
/*  2326 */                     //
/*  2327 */                     // line 100:
/*  2328 */                     //         py -= vy * m
/*  2329 */                     //         ^
/*  2330 */                     //
/*  2331 */                     $currLineNo = 100;
/*  2332 */                     $currColNo = 8;
/*  2333 */ 
/*  2334 */                     if (py === undefined) {
/*  2335 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2336 */                     }
/*  2337 */                     if (vy === undefined) {
/*  2338 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vy\' referenced before assignment');
/*  2339 */                     }
/*  2340 */                     if (m === undefined) {
/*  2341 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2342 */                     }
/*  2343 */                     var $binop359 = Sk.abstr.numberBinOp(vy, m, 'Mult');
/*  2344 */                     var $inplbinop360 = Sk.abstr.numberInplaceBinOp(py, $binop359, 'Sub');
/*  2345 */                     py = $inplbinop360;
/*  2346 */                     //
/*  2347 */                     // line 101:
/*  2348 */                     //         pz -= vz * m
/*  2349 */                     //         ^
/*  2350 */                     //
/*  2351 */                     $currLineNo = 101;
/*  2352 */                     $currColNo = 8;
/*  2353 */ 
/*  2354 */                     if (pz === undefined) {
/*  2355 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2356 */                     }
/*  2357 */                     if (vz === undefined) {
/*  2358 */                         throw new Sk.builtin.UnboundLocalError('local variable \'vz\' referenced before assignment');
/*  2359 */                     }
/*  2360 */                     if (m === undefined) {
/*  2361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2362 */                     }
/*  2363 */                     var $binop361 = Sk.abstr.numberBinOp(vz, m, 'Mult');
/*  2364 */                     var $inplbinop362 = Sk.abstr.numberInplaceBinOp(pz, $binop361, 'Sub');
/*  2365 */                     pz = $inplbinop362;
/*  2366 */                     $blk = 1; /* jump */
/*  2367 */                     continue;
/*  2368 */                 case 2:
/*  2369 */                     /* --- for cleanup --- */
/*  2370 */                     $blk = 3; /* allowing case fallthrough */
/*  2371 */                 case 3:
/*  2372 */                     /* --- for end --- */
/*  2373 */                     //
/*  2374 */                     // line 102:
/*  2375 */                     //     (r, v, m) = ref
/*  2376 */                     //     ^
/*  2377 */                     //
/*  2378 */                     $currLineNo = 102;
/*  2379 */                     $currColNo = 4;
/*  2380 */ 
/*  2381 */                     if (ref === undefined) {
/*  2382 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2383 */                     }
/*  2384 */                     var $items363 = Sk.abstr.sequenceUnpack(ref, 3);
/*  2385 */                     r = $items363[0];
/*  2386 */                     v = $items363[1];
/*  2387 */                     m = $items363[2];
/*  2388 */                     //
/*  2389 */                     // line 103:
/*  2390 */                     //     v[0] = px / m
/*  2391 */                     //     ^
/*  2392 */                     //
/*  2393 */                     $currLineNo = 103;
/*  2394 */                     $currColNo = 4;
/*  2395 */ 
/*  2396 */                     if (px === undefined) {
/*  2397 */                         throw new Sk.builtin.UnboundLocalError('local variable \'px\' referenced before assignment');
/*  2398 */                     }
/*  2399 */                     if (m === undefined) {
/*  2400 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2401 */                     }
/*  2402 */                     var $binop364 = Sk.abstr.numberBinOp(px, m, 'Div');
/*  2403 */                     if (v === undefined) {
/*  2404 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2405 */                     }
/*  2406 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(0), $binop364, true);
/*  2407 */                     $blk = 5; /* allowing case fallthrough */
/*  2408 */                 case 5:
/*  2409 */                     /* --- function return or resume suspension --- */
/*  2410 */                     if ($ret && $ret.$isSuspension) {
/*  2411 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2412 */                     }
/*  2413 */                     //
/*  2414 */                     // line 104:
/*  2415 */                     //     v[1] = py / m
/*  2416 */                     //     ^
/*  2417 */                     //
/*  2418 */                     $currLineNo = 104;
/*  2419 */                     $currColNo = 4;
/*  2420 */ 
/*  2421 */                     if (py === undefined) {
/*  2422 */                         throw new Sk.builtin.UnboundLocalError('local variable \'py\' referenced before assignment');
/*  2423 */                     }
/*  2424 */                     if (m === undefined) {
/*  2425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2426 */                     }
/*  2427 */                     var $binop365 = Sk.abstr.numberBinOp(py, m, 'Div');
/*  2428 */                     if (v === undefined) {
/*  2429 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2430 */                     }
/*  2431 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(1), $binop365, true);
/*  2432 */                     $blk = 6; /* allowing case fallthrough */
/*  2433 */                 case 6:
/*  2434 */                     /* --- function return or resume suspension --- */
/*  2435 */                     if ($ret && $ret.$isSuspension) {
/*  2436 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2437 */                     }
/*  2438 */                     //
/*  2439 */                     // line 105:
/*  2440 */                     //     v[2] = pz / m
/*  2441 */                     //     ^
/*  2442 */                     //
/*  2443 */                     $currLineNo = 105;
/*  2444 */                     $currColNo = 4;
/*  2445 */ 
/*  2446 */                     if (pz === undefined) {
/*  2447 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pz\' referenced before assignment');
/*  2448 */                     }
/*  2449 */                     if (m === undefined) {
/*  2450 */                         throw new Sk.builtin.UnboundLocalError('local variable \'m\' referenced before assignment');
/*  2451 */                     }
/*  2452 */                     var $binop366 = Sk.abstr.numberBinOp(pz, m, 'Div');
/*  2453 */                     if (v === undefined) {
/*  2454 */                         throw new Sk.builtin.UnboundLocalError('local variable \'v\' referenced before assignment');
/*  2455 */                     }
/*  2456 */                     $ret = Sk.abstr.objectSetItem(v, new Sk.builtin.int_(2), $binop366, true);
/*  2457 */                     $blk = 7; /* allowing case fallthrough */
/*  2458 */                 case 7:
/*  2459 */                     /* --- function return or resume suspension --- */
/*  2460 */                     if ($ret && $ret.$isSuspension) {
/*  2461 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2462 */                     }
/*  2463 */                     return Sk.builtin.none.none$;
/*  2464 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2465 */                 }
/*  2466 */             } catch (err) {
/*  2467 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2468 */                     err = new Sk.builtin.ExternalError(err);
/*  2469 */                 }
/*  2470 */                 err.traceback.push({
/*  2471 */                     lineno: $currLineNo,
/*  2472 */                     colno: $currColNo,
/*  2473 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2474 */                 });
/*  2475 */                 if ($exc.length > 0) {
/*  2476 */                     $err = err;
/*  2477 */                     $blk = $exc.pop();
/*  2478 */                     continue;
/*  2479 */                 } else {
/*  2480 */                     throw err;
/*  2481 */                 }
/*  2482 */             }
/*  2483 */         }
/*  2484 */     });
/*  2485 */     var $scope369 = (function $main370$(n, ref) {
/*  2486 */         var i, t0, times, tk; /* locals */
/*  2487 */         var i, n, n, ref, ref, ref, t0, t0, times, times, times, tk, tk, $loadgbl372, $iter374, $loadgbl372, $call373, $iter374, $loadgbl376, $loadgbl376, $lattr377, $loadgbl379, $loadgbl380, $loadgbl379, $loadgbl380, $lsubscr381, $loadgbl383, $loadgbl385, $loadgbl386, $loadgbl388, $loadgbl390, $loadgbl390, $lattr391, $lattr393, $binop394;
/*  2488 */         var $wakeFromSuspension = function() {
/*  2489 */             var susp = $scope369.$wakingSuspension;
/*  2490 */             delete $scope369.$wakingSuspension;
/*  2491 */             $blk = susp.$blk;
/*  2492 */             $loc = susp.$loc;
/*  2493 */             $gbl = susp.$gbl;
/*  2494 */             $exc = susp.$exc;
/*  2495 */             $err = susp.$err;
/*  2496 */             $postfinally = susp.$postfinally;
/*  2497 */             $currLineNo = susp.$lineno;
/*  2498 */             $currColNo = susp.$colno;
/*  2499 */             Sk.lastYield = Date.now();
/*  2500 */             i = susp.$tmps.i;
/*  2501 */             n = susp.$tmps.n;
/*  2502 */             ref = susp.$tmps.ref;
/*  2503 */             t0 = susp.$tmps.t0;
/*  2504 */             times = susp.$tmps.times;
/*  2505 */             tk = susp.$tmps.tk;
/*  2506 */             $loadgbl372 = susp.$tmps.$loadgbl372;
/*  2507 */             $iter374 = susp.$tmps.$iter374;
/*  2508 */             $call373 = susp.$tmps.$call373;
/*  2509 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  2510 */             $lattr377 = susp.$tmps.$lattr377;
/*  2511 */             $loadgbl379 = susp.$tmps.$loadgbl379;
/*  2512 */             $loadgbl380 = susp.$tmps.$loadgbl380;
/*  2513 */             $lsubscr381 = susp.$tmps.$lsubscr381;
/*  2514 */             $loadgbl383 = susp.$tmps.$loadgbl383;
/*  2515 */             $loadgbl385 = susp.$tmps.$loadgbl385;
/*  2516 */             $loadgbl386 = susp.$tmps.$loadgbl386;
/*  2517 */             $loadgbl388 = susp.$tmps.$loadgbl388;
/*  2518 */             $loadgbl390 = susp.$tmps.$loadgbl390;
/*  2519 */             $lattr391 = susp.$tmps.$lattr391;
/*  2520 */             $lattr393 = susp.$tmps.$lattr393;
/*  2521 */             $binop394 = susp.$tmps.$binop394;
/*  2522 */             try {
/*  2523 */                 $ret = susp.child.resume();
/*  2524 */             } catch (err) {
/*  2525 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2526 */                     err = new Sk.builtin.ExternalError(err);
/*  2527 */                 }
/*  2528 */                 err.traceback.push({
/*  2529 */                     lineno: $currLineNo,
/*  2530 */                     colno: $currColNo,
/*  2531 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2532 */                 });
/*  2533 */                 if ($exc.length > 0) {
/*  2534 */                     $err = err;
/*  2535 */                     $blk = $exc.pop();
/*  2536 */                 } else {
/*  2537 */                     throw err;
/*  2538 */                 }
/*  2539 */             }
/*  2540 */         };
/*  2541 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2542 */             var susp = new Sk.misceval.Suspension();
/*  2543 */             susp.child = $child;
/*  2544 */             susp.resume = function() {
/*  2545 */                 $scope369.$wakingSuspension = susp;
/*  2546 */                 return $scope369();
/*  2547 */             };
/*  2548 */             susp.data = susp.child.data;
/*  2549 */             susp.$blk = $blk;
/*  2550 */             susp.$loc = $loc;
/*  2551 */             susp.$gbl = $gbl;
/*  2552 */             susp.$exc = $exc;
/*  2553 */             susp.$err = $err;
/*  2554 */             susp.$postfinally = $postfinally;
/*  2555 */             susp.$filename = $filename;
/*  2556 */             susp.$lineno = $lineno;
/*  2557 */             susp.$colno = $colno;
/*  2558 */             susp.optional = susp.child.optional;
/*  2559 */             susp.$tmps = {
/*  2560 */                 "i": i,
/*  2561 */                 "n": n,
/*  2562 */                 "ref": ref,
/*  2563 */                 "t0": t0,
/*  2564 */                 "times": times,
/*  2565 */                 "tk": tk,
/*  2566 */                 "$loadgbl372": $loadgbl372,
/*  2567 */                 "$iter374": $iter374,
/*  2568 */                 "$call373": $call373,
/*  2569 */                 "$loadgbl376": $loadgbl376,
/*  2570 */                 "$lattr377": $lattr377,
/*  2571 */                 "$loadgbl379": $loadgbl379,
/*  2572 */                 "$loadgbl380": $loadgbl380,
/*  2573 */                 "$lsubscr381": $lsubscr381,
/*  2574 */                 "$loadgbl383": $loadgbl383,
/*  2575 */                 "$loadgbl385": $loadgbl385,
/*  2576 */                 "$loadgbl386": $loadgbl386,
/*  2577 */                 "$loadgbl388": $loadgbl388,
/*  2578 */                 "$loadgbl390": $loadgbl390,
/*  2579 */                 "$lattr391": $lattr391,
/*  2580 */                 "$lattr393": $lattr393,
/*  2581 */                 "$binop394": $binop394
/*  2582 */             };
/*  2583 */             return susp;
/*  2584 */         };
/*  2585 */         var $blk = 0,
/*  2586 */             $exc = [],
/*  2587 */             $loc = {},
/*  2588 */             $gbl = this,
/*  2589 */             $err = undefined,
/*  2590 */             $ret = undefined,
/*  2591 */             $postfinally = undefined,
/*  2592 */             $currLineNo = undefined,
/*  2593 */             $currColNo = undefined;
/*  2594 */         if (typeof Sk.execStart === 'undefined') {
/*  2595 */             Sk.execStart = Date.now()
/*  2596 */         }
/*  2597 */         if (typeof Sk.lastYield === 'undefined') {
/*  2598 */             Sk.lastYield = Date.now()
/*  2599 */         }
/*  2600 */         if ($scope369.$wakingSuspension !== undefined) {
/*  2601 */             $wakeFromSuspension();
/*  2602 */         } else {
/*  2603 */             if (ref === undefined) ref = $scope369.$defaults[0];
/*  2604 */             Sk.builtin.pyCheckArgs("main", arguments, 1, 2, false, false);
/*  2605 */         }
/*  2606 */         while (true) {
/*  2607 */             try {
/*  2608 */                 var $dateNow = Date.now();
/*  2609 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2610 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2611 */                 }
/*  2612 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2613 */                     var $susp = $saveSuspension({
/*  2614 */                         data: {
/*  2615 */                             type: 'Sk.yield'
/*  2616 */                         },
/*  2617 */                         resume: function() {}
/*  2618 */                     }, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2619 */                     $susp.$blk = $blk;
/*  2620 */                     $susp.optional = true;
/*  2621 */                     return $susp;
/*  2622 */                 }
/*  2623 */                 switch ($blk) {
/*  2624 */                 case 0:
/*  2625 */                     /* --- codeobj entry --- */
/*  2626 */                     if (n === undefined) {
/*  2627 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2628 */                     }
/*  2629 */                     if (ref === undefined) {
/*  2630 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2631 */                     }
/*  2632 */                     if (ref === undefined) {
/*  2633 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2634 */                     }
/*  2635 */ 
/*  2636 */                     //
/*  2637 */                     // line 112:
/*  2638 */                     //     times = []
/*  2639 */                     //     ^
/*  2640 */                     //
/*  2641 */                     $currLineNo = 112;
/*  2642 */                     $currColNo = 4;
/*  2643 */ 
/*  2644 */                     var $loadlist371 = new Sk.builtins['list']([]);
/*  2645 */                     times = $loadlist371;
/*  2646 */                     //
/*  2647 */                     // line 113:
/*  2648 */                     //     for i in range(n):
/*  2649 */                     //     ^
/*  2650 */                     //
/*  2651 */                     $currLineNo = 113;
/*  2652 */                     $currColNo = 4;
/*  2653 */ 
/*  2654 */                     var $loadgbl372 = Sk.misceval.loadname('range', $gbl);
/*  2655 */                     if (n === undefined) {
/*  2656 */                         throw new Sk.builtin.UnboundLocalError('local variable \'n\' referenced before assignment');
/*  2657 */                     }
/*  2658 */                     $ret;
/*  2659 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl372, n);
/*  2660 */                     $blk = 4; /* allowing case fallthrough */
/*  2661 */                 case 4:
/*  2662 */                     /* --- function return or resume suspension --- */
/*  2663 */                     if ($ret && $ret.$isSuspension) {
/*  2664 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 113, 13);
/*  2665 */                     }
/*  2666 */                     var $call373 = $ret;
/*  2667 */                     //
/*  2668 */                     // line 113:
/*  2669 */                     //     for i in range(n):
/*  2670 */                     //              ^
/*  2671 */                     //
/*  2672 */                     $currLineNo = 113;
/*  2673 */                     $currColNo = 13;
/*  2674 */ 
/*  2675 */                     var $iter374 = Sk.abstr.iter($call373);
/*  2676 */                     $blk = 1; /* allowing case fallthrough */
/*  2677 */                 case 1:
/*  2678 */                     /* --- for start --- */
/*  2679 */                     $ret = Sk.abstr.iternext($iter374, true);
/*  2680 */                     $blk = 5; /* allowing case fallthrough */
/*  2681 */                 case 5:
/*  2682 */                     /* --- function return or resume suspension --- */
/*  2683 */                     if ($ret && $ret.$isSuspension) {
/*  2684 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 113, 4);
/*  2685 */                     }
/*  2686 */                     var $next375 = $ret;
/*  2687 */                     if ($next375 === undefined) {
/*  2688 */                         $blk = 2;
/*  2689 */                         continue;
/*  2690 */                     }
/*  2691 */                     i = $next375;
/*  2692 */                     //
/*  2693 */                     // line 114:
/*  2694 */                     //         t0 = time.time()
/*  2695 */                     //         ^
/*  2696 */                     //
/*  2697 */                     $currLineNo = 114;
/*  2698 */                     $currColNo = 8;
/*  2699 */ 
/*  2700 */                     var $loadgbl376 = Sk.misceval.loadname('time', $gbl);
/*  2701 */                     $ret = Sk.abstr.gattr($loadgbl376, 'time', true);
/*  2702 */                     $blk = 6; /* allowing case fallthrough */
/*  2703 */                 case 6:
/*  2704 */                     /* --- function return or resume suspension --- */
/*  2705 */                     if ($ret && $ret.$isSuspension) {
/*  2706 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 114, 13);
/*  2707 */                     }
/*  2708 */                     var $lattr377 = $ret;
/*  2709 */                     $ret;
/*  2710 */                     $ret = Sk.misceval.callsimOrSuspend($lattr377);
/*  2711 */                     $blk = 7; /* allowing case fallthrough */
/*  2712 */                 case 7:
/*  2713 */                     /* --- function return or resume suspension --- */
/*  2714 */                     if ($ret && $ret.$isSuspension) {
/*  2715 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 114, 13);
/*  2716 */                     }
/*  2717 */                     var $call378 = $ret;
/*  2718 */                     //
/*  2719 */                     // line 114:
/*  2720 */                     //         t0 = time.time()
/*  2721 */                     //              ^
/*  2722 */                     //
/*  2723 */                     $currLineNo = 114;
/*  2724 */                     $currColNo = 13;
/*  2725 */ 
/*  2726 */                     t0 = $call378;
/*  2727 */                     //
/*  2728 */                     // line 115:
/*  2729 */                     //         offset_momentum(BODIES[ref])
/*  2730 */                     //         ^
/*  2731 */                     //
/*  2732 */                     $currLineNo = 115;
/*  2733 */                     $currColNo = 8;
/*  2734 */ 
/*  2735 */                     var $loadgbl379 = Sk.misceval.loadname('offset_momentum', $gbl);
/*  2736 */                     var $loadgbl380 = Sk.misceval.loadname('BODIES', $gbl);
/*  2737 */                     if (ref === undefined) {
/*  2738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ref\' referenced before assignment');
/*  2739 */                     }
/*  2740 */                     $ret = Sk.abstr.objectGetItem($loadgbl380, ref, true);
/*  2741 */                     $blk = 8; /* allowing case fallthrough */
/*  2742 */                 case 8:
/*  2743 */                     /* --- function return or resume suspension --- */
/*  2744 */                     if ($ret && $ret.$isSuspension) {
/*  2745 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', $currLineNo, $currColNo);
/*  2746 */                     }
/*  2747 */                     var $lsubscr381 = $ret;
/*  2748 */                     $ret;
/*  2749 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl379, $lsubscr381);
/*  2750 */                     $blk = 9; /* allowing case fallthrough */
/*  2751 */                 case 9:
/*  2752 */                     /* --- function return or resume suspension --- */
/*  2753 */                     if ($ret && $ret.$isSuspension) {
/*  2754 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 115, 8);
/*  2755 */                     }
/*  2756 */                     var $call382 = $ret;
/*  2757 */                     //
/*  2758 */                     // line 115:
/*  2759 */                     //         offset_momentum(BODIES[ref])
/*  2760 */                     //         ^
/*  2761 */                     //
/*  2762 */                     $currLineNo = 115;
/*  2763 */                     $currColNo = 8;
/*  2764 */ 
/*  2765 */ 
/*  2766 */                     //
/*  2767 */                     // line 116:
/*  2768 */                     //         report_energy()
/*  2769 */                     //         ^
/*  2770 */                     //
/*  2771 */                     $currLineNo = 116;
/*  2772 */                     $currColNo = 8;
/*  2773 */ 
/*  2774 */                     var $loadgbl383 = Sk.misceval.loadname('report_energy', $gbl);
/*  2775 */                     $ret;
/*  2776 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl383);
/*  2777 */                     $blk = 10; /* allowing case fallthrough */
/*  2778 */                 case 10:
/*  2779 */                     /* --- function return or resume suspension --- */
/*  2780 */                     if ($ret && $ret.$isSuspension) {
/*  2781 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 116, 8);
/*  2782 */                     }
/*  2783 */                     var $call384 = $ret;
/*  2784 */                     //
/*  2785 */                     // line 116:
/*  2786 */                     //         report_energy()
/*  2787 */                     //         ^
/*  2788 */                     //
/*  2789 */                     $currLineNo = 116;
/*  2790 */                     $currColNo = 8;
/*  2791 */ 
/*  2792 */ 
/*  2793 */                     //
/*  2794 */                     // line 117:
/*  2795 */                     //         advance(0.01, NUMBER_OF_ITERATIONS)
/*  2796 */                     //         ^
/*  2797 */                     //
/*  2798 */                     $currLineNo = 117;
/*  2799 */                     $currColNo = 8;
/*  2800 */ 
/*  2801 */                     var $loadgbl385 = Sk.misceval.loadname('advance', $gbl);
/*  2802 */                     var $loadgbl386 = Sk.misceval.loadname('NUMBER_OF_ITERATIONS', $gbl);
/*  2803 */                     $ret;
/*  2804 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl385, new Sk.builtin.float_(0.01), $loadgbl386);
/*  2805 */                     $blk = 11; /* allowing case fallthrough */
/*  2806 */                 case 11:
/*  2807 */                     /* --- function return or resume suspension --- */
/*  2808 */                     if ($ret && $ret.$isSuspension) {
/*  2809 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 117, 8);
/*  2810 */                     }
/*  2811 */                     var $call387 = $ret;
/*  2812 */                     //
/*  2813 */                     // line 117:
/*  2814 */                     //         advance(0.01, NUMBER_OF_ITERATIONS)
/*  2815 */                     //         ^
/*  2816 */                     //
/*  2817 */                     $currLineNo = 117;
/*  2818 */                     $currColNo = 8;
/*  2819 */ 
/*  2820 */ 
/*  2821 */                     //
/*  2822 */                     // line 118:
/*  2823 */                     //         report_energy()
/*  2824 */                     //         ^
/*  2825 */                     //
/*  2826 */                     $currLineNo = 118;
/*  2827 */                     $currColNo = 8;
/*  2828 */ 
/*  2829 */                     var $loadgbl388 = Sk.misceval.loadname('report_energy', $gbl);
/*  2830 */                     $ret;
/*  2831 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl388);
/*  2832 */                     $blk = 12; /* allowing case fallthrough */
/*  2833 */                 case 12:
/*  2834 */                     /* --- function return or resume suspension --- */
/*  2835 */                     if ($ret && $ret.$isSuspension) {
/*  2836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 118, 8);
/*  2837 */                     }
/*  2838 */                     var $call389 = $ret;
/*  2839 */                     //
/*  2840 */                     // line 118:
/*  2841 */                     //         report_energy()
/*  2842 */                     //         ^
/*  2843 */                     //
/*  2844 */                     $currLineNo = 118;
/*  2845 */                     $currColNo = 8;
/*  2846 */ 
/*  2847 */ 
/*  2848 */                     //
/*  2849 */                     // line 119:
/*  2850 */                     //         tk = time.time()
/*  2851 */                     //         ^
/*  2852 */                     //
/*  2853 */                     $currLineNo = 119;
/*  2854 */                     $currColNo = 8;
/*  2855 */ 
/*  2856 */                     var $loadgbl390 = Sk.misceval.loadname('time', $gbl);
/*  2857 */                     $ret = Sk.abstr.gattr($loadgbl390, 'time', true);
/*  2858 */                     $blk = 13; /* allowing case fallthrough */
/*  2859 */                 case 13:
/*  2860 */                     /* --- function return or resume suspension --- */
/*  2861 */                     if ($ret && $ret.$isSuspension) {
/*  2862 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 119, 13);
/*  2863 */                     }
/*  2864 */                     var $lattr391 = $ret;
/*  2865 */                     $ret;
/*  2866 */                     $ret = Sk.misceval.callsimOrSuspend($lattr391);
/*  2867 */                     $blk = 14; /* allowing case fallthrough */
/*  2868 */                 case 14:
/*  2869 */                     /* --- function return or resume suspension --- */
/*  2870 */                     if ($ret && $ret.$isSuspension) {
/*  2871 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 119, 13);
/*  2872 */                     }
/*  2873 */                     var $call392 = $ret;
/*  2874 */                     //
/*  2875 */                     // line 119:
/*  2876 */                     //         tk = time.time()
/*  2877 */                     //              ^
/*  2878 */                     //
/*  2879 */                     $currLineNo = 119;
/*  2880 */                     $currColNo = 13;
/*  2881 */ 
/*  2882 */                     tk = $call392;
/*  2883 */                     //
/*  2884 */                     // line 120:
/*  2885 */                     //         times.append(tk - t0)
/*  2886 */                     //         ^
/*  2887 */                     //
/*  2888 */                     $currLineNo = 120;
/*  2889 */                     $currColNo = 8;
/*  2890 */ 
/*  2891 */                     if (times === undefined) {
/*  2892 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2893 */                     }
/*  2894 */                     $ret = Sk.abstr.gattr(times, 'append', true);
/*  2895 */                     $blk = 15; /* allowing case fallthrough */
/*  2896 */                 case 15:
/*  2897 */                     /* --- function return or resume suspension --- */
/*  2898 */                     if ($ret && $ret.$isSuspension) {
/*  2899 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 120, 8);
/*  2900 */                     }
/*  2901 */                     var $lattr393 = $ret;
/*  2902 */                     if (tk === undefined) {
/*  2903 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tk\' referenced before assignment');
/*  2904 */                     }
/*  2905 */                     if (t0 === undefined) {
/*  2906 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t0\' referenced before assignment');
/*  2907 */                     }
/*  2908 */                     var $binop394 = Sk.abstr.numberBinOp(tk, t0, 'Sub');
/*  2909 */                     $ret;
/*  2910 */                     $ret = Sk.misceval.callsimOrSuspend($lattr393, $binop394);
/*  2911 */                     $blk = 16; /* allowing case fallthrough */
/*  2912 */                 case 16:
/*  2913 */                     /* --- function return or resume suspension --- */
/*  2914 */                     if ($ret && $ret.$isSuspension) {
/*  2915 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/nbody/main.py', 120, 8);
/*  2916 */                     }
/*  2917 */                     var $call395 = $ret;
/*  2918 */                     //
/*  2919 */                     // line 120:
/*  2920 */                     //         times.append(tk - t0)
/*  2921 */                     //         ^
/*  2922 */                     //
/*  2923 */                     $currLineNo = 120;
/*  2924 */                     $currColNo = 8;
/*  2925 */ 
/*  2926 */                     $blk = 1; /* jump */
/*  2927 */                     continue;
/*  2928 */                 case 2:
/*  2929 */                     /* --- for cleanup --- */
/*  2930 */                     $blk = 3; /* allowing case fallthrough */
/*  2931 */                 case 3:
/*  2932 */                     /* --- for end --- */
/*  2933 */                     //
/*  2934 */                     // line 121:
/*  2935 */                     //     return times
/*  2936 */                     //     ^
/*  2937 */                     //
/*  2938 */                     $currLineNo = 121;
/*  2939 */                     $currColNo = 4;
/*  2940 */ 
/*  2941 */                     if (times === undefined) {
/*  2942 */                         throw new Sk.builtin.UnboundLocalError('local variable \'times\' referenced before assignment');
/*  2943 */                     }
/*  2944 */                     return times;
/*  2945 */                     return Sk.builtin.none.none$;
/*  2946 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2947 */                 }
/*  2948 */             } catch (err) {
/*  2949 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2950 */                     err = new Sk.builtin.ExternalError(err);
/*  2951 */                 }
/*  2952 */                 err.traceback.push({
/*  2953 */                     lineno: $currLineNo,
/*  2954 */                     colno: $currColNo,
/*  2955 */                     filename: '/home/sbaxter/benchmarks/skulpt/nbody/main.py'
/*  2956 */                 });
/*  2957 */                 if ($exc.length > 0) {
/*  2958 */                     $err = err;
/*  2959 */                     $blk = $exc.pop();
/*  2960 */                     continue;
/*  2961 */                 } else {
/*  2962 */                     throw err;
/*  2963 */                 }
/*  2964 */             }
/*  2965 */         }
/*  2966 */     });
/*  2967 */     return $scope120;
/*  2968 */ }();
