/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname121, $loadname122, $loadname123, $loadname121, $loadname122, $loadname123, $call124, $loadname262, $loadname497, $str498, $loadname708, $loadname709;
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
/*    16 */             $loadname121 = susp.$tmps.$loadname121;
/*    17 */             $loadname122 = susp.$tmps.$loadname122;
/*    18 */             $loadname123 = susp.$tmps.$loadname123;
/*    19 */             $call124 = susp.$tmps.$call124;
/*    20 */             $loadname262 = susp.$tmps.$loadname262;
/*    21 */             $loadname497 = susp.$tmps.$loadname497;
/*    22 */             $str498 = susp.$tmps.$str498;
/*    23 */             $loadname708 = susp.$tmps.$loadname708;
/*    24 */             $loadname709 = susp.$tmps.$loadname709;
/*    25 */             try {
/*    26 */                 $ret = susp.child.resume();
/*    27 */             } catch (err) {
/*    28 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    29 */                     err = new Sk.builtin.ExternalError(err);
/*    30 */                 }
/*    31 */                 err.traceback.push({
/*    32 */                     lineno: $currLineNo,
/*    33 */                     colno: $currColNo,
/*    34 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*    35 */                 });
/*    36 */                 if ($exc.length > 0) {
/*    37 */                     $err = err;
/*    38 */                     $blk = $exc.pop();
/*    39 */                 } else {
/*    40 */                     throw err;
/*    41 */                 }
/*    42 */             }
/*    43 */         };
/*    44 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    45 */             var susp = new Sk.misceval.Suspension();
/*    46 */             susp.child = $child;
/*    47 */             susp.resume = function() {
/*    48 */                 $scope120.$wakingSuspension = susp;
/*    49 */                 return $scope120();
/*    50 */             };
/*    51 */             susp.data = susp.child.data;
/*    52 */             susp.$blk = $blk;
/*    53 */             susp.$loc = $loc;
/*    54 */             susp.$gbl = $gbl;
/*    55 */             susp.$exc = $exc;
/*    56 */             susp.$err = $err;
/*    57 */             susp.$postfinally = $postfinally;
/*    58 */             susp.$filename = $filename;
/*    59 */             susp.$lineno = $lineno;
/*    60 */             susp.$colno = $colno;
/*    61 */             susp.optional = susp.child.optional;
/*    62 */             susp.$tmps = {
/*    63 */                 "$loadname121": $loadname121,
/*    64 */                 "$loadname122": $loadname122,
/*    65 */                 "$loadname123": $loadname123,
/*    66 */                 "$call124": $call124,
/*    67 */                 "$loadname262": $loadname262,
/*    68 */                 "$loadname497": $loadname497,
/*    69 */                 "$str498": $str498,
/*    70 */                 "$loadname708": $loadname708,
/*    71 */                 "$loadname709": $loadname709
/*    72 */             };
/*    73 */             return susp;
/*    74 */         };
/*    75 */         var $gbl = {},
/*    76 */             $blk = 0,
/*    77 */             $exc = [],
/*    78 */             $loc = $gbl,
/*    79 */             $err = undefined;
/*    80 */         $gbl.__name__ = $modname;
/*    81 */         $loc.__file__ = new Sk.builtins.str('/home/sbaxter/benchmarks/skulpt/richards/main.py');
/*    82 */         var $ret = undefined,
/*    83 */             $postfinally = undefined,
/*    84 */             $currLineNo = undefined,
/*    85 */             $currColNo = undefined;
/*    86 */         if (typeof Sk.execStart === 'undefined') {
/*    87 */             Sk.execStart = Date.now()
/*    88 */         }
/*    89 */         if (typeof Sk.lastYield === 'undefined') {
/*    90 */             Sk.lastYield = Date.now()
/*    91 */         }
/*    92 */         if ($scope120.$wakingSuspension !== undefined) {
/*    93 */             $wakeFromSuspension();
/*    94 */         }
/*    95 */         if (Sk.retainGlobals) {
/*    96 */             if (Sk.globals) {
/*    97 */                 $gbl = Sk.globals;
/*    98 */                 Sk.globals = $gbl;
/*    99 */                 $loc = $gbl;
/*   100 */             } else {
/*   101 */                 Sk.globals = $gbl;
/*   102 */             }
/*   103 */         } else {
/*   104 */             Sk.globals = $gbl;
/*   105 */         }
/*   106 */         while (true) {
/*   107 */             try {
/*   108 */                 var $dateNow = Date.now();
/*   109 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   110 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   111 */                 }
/*   112 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   113 */                     var $susp = $saveSuspension({
/*   114 */                         data: {
/*   115 */                             type: 'Sk.yield'
/*   116 */                         },
/*   117 */                         resume: function() {}
/*   118 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*   119 */                     $susp.$blk = $blk;
/*   120 */                     $susp.optional = true;
/*   121 */                     return $susp;
/*   122 */                 }
/*   123 */                 switch ($blk) {
/*   124 */                 case 0:
/*   125 */                     /* --- module entry --- */
/*   126 */                     //
/*   127 */                     // line 11:
/*   128 */                     // I_IDLE = 1
/*   129 */                     // ^
/*   130 */                     //
/*   131 */                     $currLineNo = 11;
/*   132 */                     $currColNo = 0;
/*   133 */ 
/*   134 */                     $loc.I_IDLE = new Sk.builtin.int_(1);
/*   135 */                     //
/*   136 */                     // line 12:
/*   137 */                     // I_WORK = 2
/*   138 */                     // ^
/*   139 */                     //
/*   140 */                     $currLineNo = 12;
/*   141 */                     $currColNo = 0;
/*   142 */ 
/*   143 */                     $loc.I_WORK = new Sk.builtin.int_(2);
/*   144 */                     //
/*   145 */                     // line 13:
/*   146 */                     // I_HANDLERA = 3
/*   147 */                     // ^
/*   148 */                     //
/*   149 */                     $currLineNo = 13;
/*   150 */                     $currColNo = 0;
/*   151 */ 
/*   152 */                     $loc.I_HANDLERA = new Sk.builtin.int_(3);
/*   153 */                     //
/*   154 */                     // line 14:
/*   155 */                     // I_HANDLERB = 4
/*   156 */                     // ^
/*   157 */                     //
/*   158 */                     $currLineNo = 14;
/*   159 */                     $currColNo = 0;
/*   160 */ 
/*   161 */                     $loc.I_HANDLERB = new Sk.builtin.int_(4);
/*   162 */                     //
/*   163 */                     // line 15:
/*   164 */                     // I_DEVA = 5
/*   165 */                     // ^
/*   166 */                     //
/*   167 */                     $currLineNo = 15;
/*   168 */                     $currColNo = 0;
/*   169 */ 
/*   170 */                     $loc.I_DEVA = new Sk.builtin.int_(5);
/*   171 */                     //
/*   172 */                     // line 16:
/*   173 */                     // I_DEVB = 6
/*   174 */                     // ^
/*   175 */                     //
/*   176 */                     $currLineNo = 16;
/*   177 */                     $currColNo = 0;
/*   178 */ 
/*   179 */                     $loc.I_DEVB = new Sk.builtin.int_(6);
/*   180 */                     //
/*   181 */                     // line 19:
/*   182 */                     // K_DEV = 1000
/*   183 */                     // ^
/*   184 */                     //
/*   185 */                     $currLineNo = 19;
/*   186 */                     $currColNo = 0;
/*   187 */ 
/*   188 */                     $loc.K_DEV = new Sk.builtin.int_(1000);
/*   189 */                     //
/*   190 */                     // line 20:
/*   191 */                     // K_WORK = 1001
/*   192 */                     // ^
/*   193 */                     //
/*   194 */                     $currLineNo = 20;
/*   195 */                     $currColNo = 0;
/*   196 */ 
/*   197 */                     $loc.K_WORK = new Sk.builtin.int_(1001);
/*   198 */                     //
/*   199 */                     // line 24:
/*   200 */                     // BUFSIZE = 4
/*   201 */                     // ^
/*   202 */                     //
/*   203 */                     $currLineNo = 24;
/*   204 */                     $currColNo = 0;
/*   205 */ 
/*   206 */                     $loc.BUFSIZE = new Sk.builtin.int_(4);
/*   207 */                     //
/*   208 */                     // line 26:
/*   209 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   210 */                     // ^
/*   211 */                     //
/*   212 */                     $currLineNo = 26;
/*   213 */                     $currColNo = 0;
/*   214 */ 
/*   215 */                     var $loadname121 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   216 */                     var $loadname122 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   217 */                     var $loadname123 = $loc.BUFSIZE !== undefined ? $loc.BUFSIZE : Sk.misceval.loadname('BUFSIZE', $gbl);;
/*   218 */                     $ret;
/*   219 */                     $ret = Sk.misceval.callsimOrSuspend($loadname122, $loadname123);
/*   220 */                     $blk = 1; /* allowing case fallthrough */
/*   221 */                 case 1:
/*   222 */                     /* --- function return or resume suspension --- */
/*   223 */                     if ($ret && $ret.$isSuspension) {
/*   224 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 26, 21);
/*   225 */                     }
/*   226 */                     var $call124 = $ret;
/*   227 */                     //
/*   228 */                     // line 26:
/*   229 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   230 */                     //                      ^
/*   231 */                     //
/*   232 */                     $currLineNo = 26;
/*   233 */                     $currColNo = 21;
/*   234 */ 
/*   235 */                     $ret;
/*   236 */                     $ret = Sk.misceval.callsimOrSuspend($loadname121, $call124);
/*   237 */                     $blk = 2; /* allowing case fallthrough */
/*   238 */                 case 2:
/*   239 */                     /* --- function return or resume suspension --- */
/*   240 */                     if ($ret && $ret.$isSuspension) {
/*   241 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 26, 16);
/*   242 */                     }
/*   243 */                     var $call125 = $ret;
/*   244 */                     //
/*   245 */                     // line 26:
/*   246 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   247 */                     //                 ^
/*   248 */                     //
/*   249 */                     $currLineNo = 26;
/*   250 */                     $currColNo = 16;
/*   251 */ 
/*   252 */                     $loc.BUFSIZE_RANGE = $call125;
/*   253 */                     //
/*   254 */                     // line 28:
/*   255 */                     // class Packet(object):
/*   256 */                     // ^
/*   257 */                     //
/*   258 */                     $currLineNo = 28;
/*   259 */                     $currColNo = 0;
/*   260 */ 
/*   261 */                     var $loadname126 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   262 */                     $scope127.co_name = new Sk.builtins['str']('Packet');
/*   263 */                     var $built146 = Sk.misceval.buildClass($gbl, $scope127, 'Packet', [$loadname126]);
/*   264 */                     $loc.Packet = $built146;
/*   265 */                     //
/*   266 */                     // line 51:
/*   267 */                     // class TaskRec(object):
/*   268 */                     // ^
/*   269 */                     //
/*   270 */                     $currLineNo = 51;
/*   271 */                     $currColNo = 0;
/*   272 */ 
/*   273 */                     var $loadname147 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   274 */                     $scope148.co_name = new Sk.builtins['str']('TaskRec');
/*   275 */                     var $built149 = Sk.misceval.buildClass($gbl, $scope148, 'TaskRec', [$loadname147]);
/*   276 */                     $loc.TaskRec = $built149;
/*   277 */                     //
/*   278 */                     // line 54:
/*   279 */                     // class DeviceTaskRec(TaskRec):
/*   280 */                     // ^
/*   281 */                     //
/*   282 */                     $currLineNo = 54;
/*   283 */                     $currColNo = 0;
/*   284 */ 
/*   285 */                     var $loadname150 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   286 */                     $scope151.co_name = new Sk.builtins['str']('DeviceTaskRec');
/*   287 */                     var $built155 = Sk.misceval.buildClass($gbl, $scope151, 'DeviceTaskRec', [$loadname150]);
/*   288 */                     $loc.DeviceTaskRec = $built155;
/*   289 */                     //
/*   290 */                     // line 58:
/*   291 */                     // class IdleTaskRec(TaskRec):
/*   292 */                     // ^
/*   293 */                     //
/*   294 */                     $currLineNo = 58;
/*   295 */                     $currColNo = 0;
/*   296 */ 
/*   297 */                     var $loadname156 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   298 */                     $scope157.co_name = new Sk.builtins['str']('IdleTaskRec');
/*   299 */                     var $built161 = Sk.misceval.buildClass($gbl, $scope157, 'IdleTaskRec', [$loadname156]);
/*   300 */                     $loc.IdleTaskRec = $built161;
/*   301 */                     //
/*   302 */                     // line 63:
/*   303 */                     // class HandlerTaskRec(TaskRec):
/*   304 */                     // ^
/*   305 */                     //
/*   306 */                     $currLineNo = 63;
/*   307 */                     $currColNo = 0;
/*   308 */ 
/*   309 */                     var $loadname162 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   310 */                     $scope163.co_name = new Sk.builtins['str']('HandlerTaskRec');
/*   311 */                     var $built181 = Sk.misceval.buildClass($gbl, $scope163, 'HandlerTaskRec', [$loadname162]);
/*   312 */                     $loc.HandlerTaskRec = $built181;
/*   313 */                     //
/*   314 */                     // line 76:
/*   315 */                     // class WorkerTaskRec(TaskRec):
/*   316 */                     // ^
/*   317 */                     //
/*   318 */                     $currLineNo = 76;
/*   319 */                     $currColNo = 0;
/*   320 */ 
/*   321 */                     var $loadname182 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   322 */                     $scope183.co_name = new Sk.builtins['str']('WorkerTaskRec');
/*   323 */                     var $built188 = Sk.misceval.buildClass($gbl, $scope183, 'WorkerTaskRec', [$loadname182]);
/*   324 */                     $loc.WorkerTaskRec = $built188;
/*   325 */                     //
/*   326 */                     // line 82:
/*   327 */                     // class TaskState(object):
/*   328 */                     // ^
/*   329 */                     //
/*   330 */                     $currLineNo = 82;
/*   331 */                     $currColNo = 0;
/*   332 */ 
/*   333 */                     var $loadname189 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   334 */                     $scope190.co_name = new Sk.builtins['str']('TaskState');
/*   335 */                     var $built242 = Sk.misceval.buildClass($gbl, $scope190, 'TaskState', [$loadname189]);
/*   336 */                     $loc.TaskState = $built242;
/*   337 */                     //
/*   338 */                     // line 131:
/*   339 */                     // tracing = False
/*   340 */                     // ^
/*   341 */                     //
/*   342 */                     $currLineNo = 131;
/*   343 */                     $currColNo = 0;
/*   344 */ 
/*   345 */                     $loc.tracing = Sk.builtin.bool.false$;
/*   346 */                     //
/*   347 */                     // line 132:
/*   348 */                     // layout = 0
/*   349 */                     // ^
/*   350 */                     //
/*   351 */                     $currLineNo = 132;
/*   352 */                     $currColNo = 0;
/*   353 */ 
/*   354 */                     $gbl.layout = new Sk.builtin.int_(0);
/*   355 */                     //
/*   356 */                     // line 134:
/*   357 */                     // def trace(a):
/*   358 */                     // ^
/*   359 */                     //
/*   360 */                     $currLineNo = 134;
/*   361 */                     $currColNo = 0;
/*   362 */ 
/*   363 */                     $scope243.co_name = new Sk.builtins['str']('trace');
/*   364 */                     $scope243.co_varnames = ['a'];
/*   365 */                     var $funcobj251 = new Sk.builtins['function']($scope243, $gbl);
/*   366 */                     $loc.trace = $funcobj251;
/*   367 */                     //
/*   368 */                     // line 143:
/*   369 */                     // TASKTABSIZE = 10
/*   370 */                     // ^
/*   371 */                     //
/*   372 */                     $currLineNo = 143;
/*   373 */                     $currColNo = 0;
/*   374 */ 
/*   375 */                     $loc.TASKTABSIZE = new Sk.builtin.int_(10);
/*   376 */                     //
/*   377 */                     // line 145:
/*   378 */                     // class TaskWorkArea(object):
/*   379 */                     // ^
/*   380 */                     //
/*   381 */                     $currLineNo = 145;
/*   382 */                     $currColNo = 0;
/*   383 */ 
/*   384 */                     var $loadname252 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   385 */                     $scope253.co_name = new Sk.builtins['str']('TaskWorkArea');
/*   386 */                     var $built261 = Sk.misceval.buildClass($gbl, $scope253, 'TaskWorkArea', [$loadname252]);
/*   387 */                     $loc.TaskWorkArea = $built261;
/*   388 */                     //
/*   389 */                     // line 154:
/*   390 */                     // taskWorkArea = TaskWorkArea()
/*   391 */                     // ^
/*   392 */                     //
/*   393 */                     $currLineNo = 154;
/*   394 */                     $currColNo = 0;
/*   395 */ 
/*   396 */                     var $loadname262 = $loc.TaskWorkArea !== undefined ? $loc.TaskWorkArea : Sk.misceval.loadname('TaskWorkArea', $gbl);;
/*   397 */                     $ret;
/*   398 */                     $ret = Sk.misceval.callsimOrSuspend($loadname262);
/*   399 */                     $blk = 3; /* allowing case fallthrough */
/*   400 */                 case 3:
/*   401 */                     /* --- function return or resume suspension --- */
/*   402 */                     if ($ret && $ret.$isSuspension) {
/*   403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 154, 15);
/*   404 */                     }
/*   405 */                     var $call263 = $ret;
/*   406 */                     //
/*   407 */                     // line 154:
/*   408 */                     // taskWorkArea = TaskWorkArea()
/*   409 */                     //                ^
/*   410 */                     //
/*   411 */                     $currLineNo = 154;
/*   412 */                     $currColNo = 15;
/*   413 */ 
/*   414 */                     $loc.taskWorkArea = $call263;
/*   415 */                     //
/*   416 */                     // line 156:
/*   417 */                     // class Task(TaskState):
/*   418 */                     // ^
/*   419 */                     //
/*   420 */                     $currLineNo = 156;
/*   421 */                     $currColNo = 0;
/*   422 */ 
/*   423 */                     var $loadname264 = $loc.TaskState !== undefined ? $loc.TaskState : Sk.misceval.loadname('TaskState', $gbl);;
/*   424 */                     $scope265.co_name = new Sk.builtins['str']('Task');
/*   425 */                     var $built364 = Sk.misceval.buildClass($gbl, $scope265, 'Task', [$loadname264]);
/*   426 */                     $loc.Task = $built364;
/*   427 */                     //
/*   428 */                     // line 241:
/*   429 */                     // class DeviceTask(Task):
/*   430 */                     // ^
/*   431 */                     //
/*   432 */                     $currLineNo = 241;
/*   433 */                     $currColNo = 0;
/*   434 */ 
/*   435 */                     var $loadname365 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   436 */                     $scope366.co_name = new Sk.builtins['str']('DeviceTask');
/*   437 */                     var $built398 = Sk.misceval.buildClass($gbl, $scope366, 'DeviceTask', [$loadname365]);
/*   438 */                     $loc.DeviceTask = $built398;
/*   439 */                     //
/*   440 */                     // line 262:
/*   441 */                     // class HandlerTask(Task):
/*   442 */                     // ^
/*   443 */                     //
/*   444 */                     $currLineNo = 262;
/*   445 */                     $currColNo = 0;
/*   446 */ 
/*   447 */                     var $loadname399 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   448 */                     $scope400.co_name = new Sk.builtins['str']('HandlerTask');
/*   449 */                     var $built452 = Sk.misceval.buildClass($gbl, $scope400, 'HandlerTask', [$loadname399]);
/*   450 */                     $loc.HandlerTask = $built452;
/*   451 */                     //
/*   452 */                     // line 294:
/*   453 */                     // class IdleTask(Task):
/*   454 */                     // ^
/*   455 */                     //
/*   456 */                     $currLineNo = 294;
/*   457 */                     $currColNo = 0;
/*   458 */ 
/*   459 */                     var $loadname453 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   460 */                     $scope454.co_name = new Sk.builtins['str']('IdleTask');
/*   461 */                     var $built496 = Sk.misceval.buildClass($gbl, $scope454, 'IdleTask', [$loadname453]);
/*   462 */                     $loc.IdleTask = $built496;
/*   463 */                     //
/*   464 */                     // line 315:
/*   465 */                     // A = ord('A')
/*   466 */                     // ^
/*   467 */                     //
/*   468 */                     $currLineNo = 315;
/*   469 */                     $currColNo = 0;
/*   470 */ 
/*   471 */                     var $loadname497 = $loc.ord !== undefined ? $loc.ord : Sk.misceval.loadname('ord', $gbl);;
/*   472 */                     var $str498 = new Sk.builtins['str']('A');
/*   473 */                     $ret;
/*   474 */                     $ret = Sk.misceval.callsimOrSuspend($loadname497, $str498);
/*   475 */                     $blk = 4; /* allowing case fallthrough */
/*   476 */                 case 4:
/*   477 */                     /* --- function return or resume suspension --- */
/*   478 */                     if ($ret && $ret.$isSuspension) {
/*   479 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 315, 4);
/*   480 */                     }
/*   481 */                     var $call499 = $ret;
/*   482 */                     //
/*   483 */                     // line 315:
/*   484 */                     // A = ord('A')
/*   485 */                     //     ^
/*   486 */                     //
/*   487 */                     $currLineNo = 315;
/*   488 */                     $currColNo = 4;
/*   489 */ 
/*   490 */                     $loc.A = $call499;
/*   491 */                     //
/*   492 */                     // line 317:
/*   493 */                     // class WorkTask(Task):
/*   494 */                     // ^
/*   495 */                     //
/*   496 */                     $currLineNo = 317;
/*   497 */                     $currColNo = 0;
/*   498 */ 
/*   499 */                     var $loadname500 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   500 */                     $scope501.co_name = new Sk.builtins['str']('WorkTask');
/*   501 */                     var $built543 = Sk.misceval.buildClass($gbl, $scope501, 'WorkTask', [$loadname500]);
/*   502 */                     $loc.WorkTask = $built543;
/*   503 */                     //
/*   504 */                     // line 344:
/*   505 */                     // import time
/*   506 */                     // ^
/*   507 */                     //
/*   508 */                     $currLineNo = 344;
/*   509 */                     $currColNo = 0;
/*   510 */ 
/*   511 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   512 */                     $blk = 5; /* allowing case fallthrough */
/*   513 */                 case 5:
/*   514 */                     /* --- function return or resume suspension --- */
/*   515 */                     if ($ret && $ret.$isSuspension) {
/*   516 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 344, 0);
/*   517 */                     }
/*   518 */                     var $module544 = $ret;
/*   519 */                     $loc.time = $module544;
/*   520 */                     //
/*   521 */                     // line 348:
/*   522 */                     // def schedule():
/*   523 */                     // ^
/*   524 */                     //
/*   525 */                     $currLineNo = 348;
/*   526 */                     $currColNo = 0;
/*   527 */ 
/*   528 */                     $scope545.co_name = new Sk.builtins['str']('schedule');
/*   529 */                     var $funcobj571 = new Sk.builtins['function']($scope545, $gbl);
/*   530 */                     $loc.schedule = $funcobj571;
/*   531 */                     //
/*   532 */                     // line 362:
/*   533 */                     // class Richards(object):
/*   534 */                     // ^
/*   535 */                     //
/*   536 */                     $currLineNo = 362;
/*   537 */                     $currColNo = 0;
/*   538 */ 
/*   539 */                     var $loadname572 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   540 */                     $scope573.co_name = new Sk.builtins['str']('Richards');
/*   541 */                     var $built681 = Sk.misceval.buildClass($gbl, $scope573, 'Richards', [$loadname572]);
/*   542 */                     $loc.Richards = $built681;
/*   543 */                     //
/*   544 */                     // line 398:
/*   545 */                     // def entry_point(iterations):
/*   546 */                     // ^
/*   547 */                     //
/*   548 */                     $currLineNo = 398;
/*   549 */                     $currColNo = 0;
/*   550 */ 
/*   551 */                     $scope682.co_name = new Sk.builtins['str']('entry_point');
/*   552 */                     $scope682.co_varnames = ['iterations'];
/*   553 */                     var $funcobj698 = new Sk.builtins['function']($scope682, $gbl);
/*   554 */                     $loc.entry_point = $funcobj698;
/*   555 */                     //
/*   556 */                     // line 405:
/*   557 */                     // def main(entry_point = entry_point, iterations = 10):
/*   558 */                     // ^
/*   559 */                     //
/*   560 */                     $currLineNo = 405;
/*   561 */                     $currColNo = 0;
/*   562 */ 
/*   563 */                     var $loadname699 = $loc.entry_point !== undefined ? $loc.entry_point : Sk.misceval.loadname('entry_point', $gbl);;
/*   564 */                     $scope700.co_name = new Sk.builtins['str']('main');
/*   565 */                     $scope700.$defaults = [$loadname699, new Sk.builtin.int_(10)];
/*   566 */                     $scope700.co_varnames = ['entry_point', 'iterations'];
/*   567 */                     var $funcobj707 = new Sk.builtins['function']($scope700, $gbl);
/*   568 */                     $loc.main = $funcobj707;
/*   569 */                     //
/*   570 */                     // line 418:
/*   571 */                     // main(entry_point, 10)
/*   572 */                     // ^
/*   573 */                     //
/*   574 */                     $currLineNo = 418;
/*   575 */                     $currColNo = 0;
/*   576 */ 
/*   577 */                     var $loadname708 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   578 */                     var $loadname709 = $loc.entry_point !== undefined ? $loc.entry_point : Sk.misceval.loadname('entry_point', $gbl);;
/*   579 */                     $ret;
/*   580 */                     $ret = Sk.misceval.callsimOrSuspend($loadname708, $loadname709, new Sk.builtin.int_(10));
/*   581 */                     $blk = 6; /* allowing case fallthrough */
/*   582 */                 case 6:
/*   583 */                     /* --- function return or resume suspension --- */
/*   584 */                     if ($ret && $ret.$isSuspension) {
/*   585 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 418, 0);
/*   586 */                     }
/*   587 */                     var $call710 = $ret;
/*   588 */                     //
/*   589 */                     // line 418:
/*   590 */                     // main(entry_point, 10)
/*   591 */                     // ^
/*   592 */                     //
/*   593 */                     $currLineNo = 418;
/*   594 */                     $currColNo = 0;
/*   595 */ 
/*   596 */                     return $loc;
/*   597 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   598 */                 }
/*   599 */             } catch (err) {
/*   600 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   601 */                     err = new Sk.builtin.ExternalError(err);
/*   602 */                 }
/*   603 */                 err.traceback.push({
/*   604 */                     lineno: $currLineNo,
/*   605 */                     colno: $currColNo,
/*   606 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   607 */                 });
/*   608 */                 if ($exc.length > 0) {
/*   609 */                     $err = err;
/*   610 */                     $blk = $exc.pop();
/*   611 */                     continue;
/*   612 */                 } else {
/*   613 */                     throw err;
/*   614 */                 }
/*   615 */             }
/*   616 */         }
/*   617 */     });
/*   618 */     var $scope127 = (function $Packet$class_outer($globals, $locals, $rest) {
/*   619 */         var $gbl = $globals,
/*   620 */             $loc = $locals;
/*   621 */         (function $Packet$_closure() {
/*   622 */             var $blk = 0,
/*   623 */                 $exc = [],
/*   624 */                 $ret = undefined,
/*   625 */                 $postfinally = undefined,
/*   626 */                 $currLineNo = undefined,
/*   627 */                 $currColNo = undefined;
/*   628 */             if (typeof Sk.execStart === 'undefined') {
/*   629 */                 Sk.execStart = Date.now()
/*   630 */             }
/*   631 */             while (true) {
/*   632 */                 try {
/*   633 */                     var $dateNow = Date.now();
/*   634 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   635 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   636 */                     }
/*   637 */                     switch ($blk) {
/*   638 */                     case 0:
/*   639 */                         /* --- class entry --- */
/*   640 */                         //
/*   641 */                         // line 29:
/*   642 */                         //     def __init__(self,l,i,k):
/*   643 */                         //     ^
/*   644 */                         //
/*   645 */                         $currLineNo = 29;
/*   646 */                         $currColNo = 4;
/*   647 */ 
/*   648 */                         $scope128.co_name = new Sk.builtins['str']('__init__');
/*   649 */                         $scope128.co_varnames = ['self', 'l', 'i', 'k'];
/*   650 */                         var $funcobj134 = new Sk.builtins['function']($scope128, $gbl);
/*   651 */                         $loc.__init__ = $funcobj134;
/*   652 */                         //
/*   653 */                         // line 36:
/*   654 */                         //     def append_to(self,lst):
/*   655 */                         //     ^
/*   656 */                         //
/*   657 */                         $currLineNo = 36;
/*   658 */                         $currColNo = 4;
/*   659 */ 
/*   660 */                         $scope135.co_name = new Sk.builtins['str']('append_to');
/*   661 */                         $scope135.co_varnames = ['self', 'lst'];
/*   662 */                         var $funcobj145 = new Sk.builtins['function']($scope135, $gbl);
/*   663 */                         $loc.append_to = $funcobj145;
/*   664 */                         return;
/*   665 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   666 */                     }
/*   667 */                 } catch (err) {
/*   668 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   669 */                         err = new Sk.builtin.ExternalError(err);
/*   670 */                     }
/*   671 */                     err.traceback.push({
/*   672 */                         lineno: $currLineNo,
/*   673 */                         colno: $currColNo,
/*   674 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   675 */                     });
/*   676 */                     if ($exc.length > 0) {
/*   677 */                         $err = err;
/*   678 */                         $blk = $exc.pop();
/*   679 */                         continue;
/*   680 */                     } else {
/*   681 */                         throw err;
/*   682 */                     }
/*   683 */                 }
/*   684 */             }
/*   685 */         }).apply(null, $rest);
/*   686 */     });
/*   687 */     var $scope128 = (function $__init__129$(self, l, i, k) {
/*   688 */         var i, i, k, k, l, l, self, self, self, self, self, self, $elem130, $loadlist131, $loadgbl132, $binop133;
/*   689 */         var $wakeFromSuspension = function() {
/*   690 */             var susp = $scope128.$wakingSuspension;
/*   691 */             delete $scope128.$wakingSuspension;
/*   692 */             $blk = susp.$blk;
/*   693 */             $loc = susp.$loc;
/*   694 */             $gbl = susp.$gbl;
/*   695 */             $exc = susp.$exc;
/*   696 */             $err = susp.$err;
/*   697 */             $postfinally = susp.$postfinally;
/*   698 */             $currLineNo = susp.$lineno;
/*   699 */             $currColNo = susp.$colno;
/*   700 */             Sk.lastYield = Date.now();
/*   701 */             i = susp.$tmps.i;
/*   702 */             k = susp.$tmps.k;
/*   703 */             l = susp.$tmps.l;
/*   704 */             self = susp.$tmps.self;
/*   705 */             $elem130 = susp.$tmps.$elem130;
/*   706 */             $loadlist131 = susp.$tmps.$loadlist131;
/*   707 */             $loadgbl132 = susp.$tmps.$loadgbl132;
/*   708 */             $binop133 = susp.$tmps.$binop133;
/*   709 */             try {
/*   710 */                 $ret = susp.child.resume();
/*   711 */             } catch (err) {
/*   712 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   713 */                     err = new Sk.builtin.ExternalError(err);
/*   714 */                 }
/*   715 */                 err.traceback.push({
/*   716 */                     lineno: $currLineNo,
/*   717 */                     colno: $currColNo,
/*   718 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   719 */                 });
/*   720 */                 if ($exc.length > 0) {
/*   721 */                     $err = err;
/*   722 */                     $blk = $exc.pop();
/*   723 */                 } else {
/*   724 */                     throw err;
/*   725 */                 }
/*   726 */             }
/*   727 */         };
/*   728 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   729 */             var susp = new Sk.misceval.Suspension();
/*   730 */             susp.child = $child;
/*   731 */             susp.resume = function() {
/*   732 */                 $scope128.$wakingSuspension = susp;
/*   733 */                 return $scope128();
/*   734 */             };
/*   735 */             susp.data = susp.child.data;
/*   736 */             susp.$blk = $blk;
/*   737 */             susp.$loc = $loc;
/*   738 */             susp.$gbl = $gbl;
/*   739 */             susp.$exc = $exc;
/*   740 */             susp.$err = $err;
/*   741 */             susp.$postfinally = $postfinally;
/*   742 */             susp.$filename = $filename;
/*   743 */             susp.$lineno = $lineno;
/*   744 */             susp.$colno = $colno;
/*   745 */             susp.optional = susp.child.optional;
/*   746 */             susp.$tmps = {
/*   747 */                 "i": i,
/*   748 */                 "k": k,
/*   749 */                 "l": l,
/*   750 */                 "self": self,
/*   751 */                 "$elem130": $elem130,
/*   752 */                 "$loadlist131": $loadlist131,
/*   753 */                 "$loadgbl132": $loadgbl132,
/*   754 */                 "$binop133": $binop133
/*   755 */             };
/*   756 */             return susp;
/*   757 */         };
/*   758 */         var $blk = 0,
/*   759 */             $exc = [],
/*   760 */             $loc = {},
/*   761 */             $gbl = this,
/*   762 */             $err = undefined,
/*   763 */             $ret = undefined,
/*   764 */             $postfinally = undefined,
/*   765 */             $currLineNo = undefined,
/*   766 */             $currColNo = undefined;
/*   767 */         if (typeof Sk.execStart === 'undefined') {
/*   768 */             Sk.execStart = Date.now()
/*   769 */         }
/*   770 */         if (typeof Sk.lastYield === 'undefined') {
/*   771 */             Sk.lastYield = Date.now()
/*   772 */         }
/*   773 */         if ($scope128.$wakingSuspension !== undefined) {
/*   774 */             $wakeFromSuspension();
/*   775 */         } else {
/*   776 */             Sk.builtin.pyCheckArgs("__init__", arguments, 4, 4, false, false);
/*   777 */         }
/*   778 */         while (true) {
/*   779 */             try {
/*   780 */                 var $dateNow = Date.now();
/*   781 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   782 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   783 */                 }
/*   784 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   785 */                     var $susp = $saveSuspension({
/*   786 */                         data: {
/*   787 */                             type: 'Sk.yield'
/*   788 */                         },
/*   789 */                         resume: function() {}
/*   790 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*   791 */                     $susp.$blk = $blk;
/*   792 */                     $susp.optional = true;
/*   793 */                     return $susp;
/*   794 */                 }
/*   795 */                 switch ($blk) {
/*   796 */                 case 0:
/*   797 */                     /* --- codeobj entry --- */
/*   798 */                     if (self === undefined) {
/*   799 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   800 */                     }
/*   801 */                     if (l === undefined) {
/*   802 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   803 */                     }
/*   804 */                     if (i === undefined) {
/*   805 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   806 */                     }
/*   807 */                     if (k === undefined) {
/*   808 */                         throw new Sk.builtin.UnboundLocalError('local variable \'k\' referenced before assignment');
/*   809 */                     }
/*   810 */ 
/*   811 */                     //
/*   812 */                     // line 30:
/*   813 */                     //         self.link = l
/*   814 */                     //         ^
/*   815 */                     //
/*   816 */                     $currLineNo = 30;
/*   817 */                     $currColNo = 8;
/*   818 */ 
/*   819 */                     if (l === undefined) {
/*   820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   821 */                     }
/*   822 */                     if (self === undefined) {
/*   823 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   824 */                     }
/*   825 */                     $ret = Sk.abstr.sattr(self, 'link', l, true);
/*   826 */                     $blk = 1; /* allowing case fallthrough */
/*   827 */                 case 1:
/*   828 */                     /* --- function return or resume suspension --- */
/*   829 */                     if ($ret && $ret.$isSuspension) {
/*   830 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 30, 8);
/*   831 */                     }
/*   832 */                     //
/*   833 */                     // line 31:
/*   834 */                     //         self.ident = i
/*   835 */                     //         ^
/*   836 */                     //
/*   837 */                     $currLineNo = 31;
/*   838 */                     $currColNo = 8;
/*   839 */ 
/*   840 */                     if (i === undefined) {
/*   841 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   842 */                     }
/*   843 */                     if (self === undefined) {
/*   844 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   845 */                     }
/*   846 */                     $ret = Sk.abstr.sattr(self, 'ident', i, true);
/*   847 */                     $blk = 2; /* allowing case fallthrough */
/*   848 */                 case 2:
/*   849 */                     /* --- function return or resume suspension --- */
/*   850 */                     if ($ret && $ret.$isSuspension) {
/*   851 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 31, 8);
/*   852 */                     }
/*   853 */                     //
/*   854 */                     // line 32:
/*   855 */                     //         self.kind = k
/*   856 */                     //         ^
/*   857 */                     //
/*   858 */                     $currLineNo = 32;
/*   859 */                     $currColNo = 8;
/*   860 */ 
/*   861 */                     if (k === undefined) {
/*   862 */                         throw new Sk.builtin.UnboundLocalError('local variable \'k\' referenced before assignment');
/*   863 */                     }
/*   864 */                     if (self === undefined) {
/*   865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   866 */                     }
/*   867 */                     $ret = Sk.abstr.sattr(self, 'kind', k, true);
/*   868 */                     $blk = 3; /* allowing case fallthrough */
/*   869 */                 case 3:
/*   870 */                     /* --- function return or resume suspension --- */
/*   871 */                     if ($ret && $ret.$isSuspension) {
/*   872 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 32, 8);
/*   873 */                     }
/*   874 */                     //
/*   875 */                     // line 33:
/*   876 */                     //         self.datum = 0
/*   877 */                     //         ^
/*   878 */                     //
/*   879 */                     $currLineNo = 33;
/*   880 */                     $currColNo = 8;
/*   881 */ 
/*   882 */                     if (self === undefined) {
/*   883 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   884 */                     }
/*   885 */                     $ret = Sk.abstr.sattr(self, 'datum', new Sk.builtin.int_(0), true);
/*   886 */                     $blk = 4; /* allowing case fallthrough */
/*   887 */                 case 4:
/*   888 */                     /* --- function return or resume suspension --- */
/*   889 */                     if ($ret && $ret.$isSuspension) {
/*   890 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 33, 8);
/*   891 */                     }
/*   892 */                     //
/*   893 */                     // line 34:
/*   894 */                     //         self.data = [0] * BUFSIZE
/*   895 */                     //         ^
/*   896 */                     //
/*   897 */                     $currLineNo = 34;
/*   898 */                     $currColNo = 8;
/*   899 */ 
/*   900 */                     var $elem130 = new Sk.builtin.int_(0);
/*   901 */                     var $loadlist131 = new Sk.builtins['list']([$elem130]);
/*   902 */                     var $loadgbl132 = Sk.misceval.loadname('BUFSIZE', $gbl);
/*   903 */                     var $binop133 = Sk.abstr.numberBinOp($loadlist131, $loadgbl132, 'Mult');
/*   904 */                     if (self === undefined) {
/*   905 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   906 */                     }
/*   907 */                     $ret = Sk.abstr.sattr(self, 'data', $binop133, true);
/*   908 */                     $blk = 5; /* allowing case fallthrough */
/*   909 */                 case 5:
/*   910 */                     /* --- function return or resume suspension --- */
/*   911 */                     if ($ret && $ret.$isSuspension) {
/*   912 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 34, 8);
/*   913 */                     }
/*   914 */                     return Sk.builtin.none.none$;
/*   915 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   916 */                 }
/*   917 */             } catch (err) {
/*   918 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   919 */                     err = new Sk.builtin.ExternalError(err);
/*   920 */                 }
/*   921 */                 err.traceback.push({
/*   922 */                     lineno: $currLineNo,
/*   923 */                     colno: $currColNo,
/*   924 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   925 */                 });
/*   926 */                 if ($exc.length > 0) {
/*   927 */                     $err = err;
/*   928 */                     $blk = $exc.pop();
/*   929 */                     continue;
/*   930 */                 } else {
/*   931 */                     throw err;
/*   932 */                 }
/*   933 */             }
/*   934 */         }
/*   935 */     });
/*   936 */     var $scope135 = (function $append_to136$(self, lst) {
/*   937 */         var next, p; /* locals */
/*   938 */         var lst, lst, lst, lst, next, next, next, next, p, p, p, p, p, self, self, self, self, $compareres137, $compareres141;
/*   939 */         var $wakeFromSuspension = function() {
/*   940 */             var susp = $scope135.$wakingSuspension;
/*   941 */             delete $scope135.$wakingSuspension;
/*   942 */             $blk = susp.$blk;
/*   943 */             $loc = susp.$loc;
/*   944 */             $gbl = susp.$gbl;
/*   945 */             $exc = susp.$exc;
/*   946 */             $err = susp.$err;
/*   947 */             $postfinally = susp.$postfinally;
/*   948 */             $currLineNo = susp.$lineno;
/*   949 */             $currColNo = susp.$colno;
/*   950 */             Sk.lastYield = Date.now();
/*   951 */             lst = susp.$tmps.lst;
/*   952 */             next = susp.$tmps.next;
/*   953 */             p = susp.$tmps.p;
/*   954 */             self = susp.$tmps.self;
/*   955 */             $compareres137 = susp.$tmps.$compareres137;
/*   956 */             $compareres141 = susp.$tmps.$compareres141;
/*   957 */             try {
/*   958 */                 $ret = susp.child.resume();
/*   959 */             } catch (err) {
/*   960 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   961 */                     err = new Sk.builtin.ExternalError(err);
/*   962 */                 }
/*   963 */                 err.traceback.push({
/*   964 */                     lineno: $currLineNo,
/*   965 */                     colno: $currColNo,
/*   966 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   967 */                 });
/*   968 */                 if ($exc.length > 0) {
/*   969 */                     $err = err;
/*   970 */                     $blk = $exc.pop();
/*   971 */                 } else {
/*   972 */                     throw err;
/*   973 */                 }
/*   974 */             }
/*   975 */         };
/*   976 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   977 */             var susp = new Sk.misceval.Suspension();
/*   978 */             susp.child = $child;
/*   979 */             susp.resume = function() {
/*   980 */                 $scope135.$wakingSuspension = susp;
/*   981 */                 return $scope135();
/*   982 */             };
/*   983 */             susp.data = susp.child.data;
/*   984 */             susp.$blk = $blk;
/*   985 */             susp.$loc = $loc;
/*   986 */             susp.$gbl = $gbl;
/*   987 */             susp.$exc = $exc;
/*   988 */             susp.$err = $err;
/*   989 */             susp.$postfinally = $postfinally;
/*   990 */             susp.$filename = $filename;
/*   991 */             susp.$lineno = $lineno;
/*   992 */             susp.$colno = $colno;
/*   993 */             susp.optional = susp.child.optional;
/*   994 */             susp.$tmps = {
/*   995 */                 "lst": lst,
/*   996 */                 "next": next,
/*   997 */                 "p": p,
/*   998 */                 "self": self,
/*   999 */                 "$compareres137": $compareres137,
/*  1000 */                 "$compareres141": $compareres141
/*  1001 */             };
/*  1002 */             return susp;
/*  1003 */         };
/*  1004 */         var $blk = 0,
/*  1005 */             $exc = [],
/*  1006 */             $loc = {},
/*  1007 */             $gbl = this,
/*  1008 */             $err = undefined,
/*  1009 */             $ret = undefined,
/*  1010 */             $postfinally = undefined,
/*  1011 */             $currLineNo = undefined,
/*  1012 */             $currColNo = undefined;
/*  1013 */         if (typeof Sk.execStart === 'undefined') {
/*  1014 */             Sk.execStart = Date.now()
/*  1015 */         }
/*  1016 */         if (typeof Sk.lastYield === 'undefined') {
/*  1017 */             Sk.lastYield = Date.now()
/*  1018 */         }
/*  1019 */         if ($scope135.$wakingSuspension !== undefined) {
/*  1020 */             $wakeFromSuspension();
/*  1021 */         } else {
/*  1022 */             Sk.builtin.pyCheckArgs("append_to", arguments, 2, 2, false, false);
/*  1023 */         }
/*  1024 */         while (true) {
/*  1025 */             try {
/*  1026 */                 var $dateNow = Date.now();
/*  1027 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1028 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1029 */                 }
/*  1030 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1031 */                     var $susp = $saveSuspension({
/*  1032 */                         data: {
/*  1033 */                             type: 'Sk.yield'
/*  1034 */                         },
/*  1035 */                         resume: function() {}
/*  1036 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  1037 */                     $susp.$blk = $blk;
/*  1038 */                     $susp.optional = true;
/*  1039 */                     return $susp;
/*  1040 */                 }
/*  1041 */                 switch ($blk) {
/*  1042 */                 case 0:
/*  1043 */                     /* --- codeobj entry --- */
/*  1044 */                     if (self === undefined) {
/*  1045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1046 */                     }
/*  1047 */                     if (lst === undefined) {
/*  1048 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1049 */                     }
/*  1050 */ 
/*  1051 */                     //
/*  1052 */                     // line 37:
/*  1053 */                     //         self.link = None
/*  1054 */                     //         ^
/*  1055 */                     //
/*  1056 */                     $currLineNo = 37;
/*  1057 */                     $currColNo = 8;
/*  1058 */ 
/*  1059 */                     if (self === undefined) {
/*  1060 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1061 */                     }
/*  1062 */                     $ret = Sk.abstr.sattr(self, 'link', Sk.builtin.none.none$, true);
/*  1063 */                     $blk = 1; /* allowing case fallthrough */
/*  1064 */                 case 1:
/*  1065 */                     /* --- function return or resume suspension --- */
/*  1066 */                     if ($ret && $ret.$isSuspension) {
/*  1067 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 37, 8);
/*  1068 */                     }
/*  1069 */                     //
/*  1070 */                     // line 38:
/*  1071 */                     //         if lst is None:
/*  1072 */                     //         ^
/*  1073 */                     //
/*  1074 */                     $currLineNo = 38;
/*  1075 */                     $currColNo = 8;
/*  1076 */ 
/*  1077 */                     if (lst === undefined) {
/*  1078 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1079 */                     }
/*  1080 */                     var $compareres137 = null;
/*  1081 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(lst, Sk.builtin.none.none$, 'Is', true));
/*  1082 */                     $blk = 5; /* allowing case fallthrough */
/*  1083 */                 case 5:
/*  1084 */                     /* --- function return or resume suspension --- */
/*  1085 */                     if ($ret && $ret.$isSuspension) {
/*  1086 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 38, 11);
/*  1087 */                     }
/*  1088 */                     $compareres137 = $ret;
/*  1089 */                     var $jfalse138 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1090 */                     if ($jfalse138) { /*test failed */
/*  1091 */                         $blk = 4;
/*  1092 */                         continue;
/*  1093 */                     }
/*  1094 */                     $blk = 4; /* allowing case fallthrough */
/*  1095 */                 case 4:
/*  1096 */                     /* --- done --- */
/*  1097 */                     var $jfalse139 = ($compareres137 === false || !Sk.misceval.isTrue($compareres137));
/*  1098 */                     if ($jfalse139) { /*test failed */
/*  1099 */                         $blk = 3;
/*  1100 */                         continue;
/*  1101 */                     }
/*  1102 */                     //
/*  1103 */                     // line 39:
/*  1104 */                     //             return self
/*  1105 */                     //             ^
/*  1106 */                     //
/*  1107 */                     $currLineNo = 39;
/*  1108 */                     $currColNo = 12;
/*  1109 */ 
/*  1110 */                     if (self === undefined) {
/*  1111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1112 */                     }
/*  1113 */                     return self;
/*  1114 */                     $blk = 2; /* allowing case fallthrough */
/*  1115 */                 case 2:
/*  1116 */                     /* --- end of if --- */
/*  1117 */                     return Sk.builtin.none.none$;
/*  1118 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1119 */                 case 3:
/*  1120 */                     /* --- next branch of if --- */
/*  1121 */                     //
/*  1122 */                     // line 41:
/*  1123 */                     //             p = lst
/*  1124 */                     //             ^
/*  1125 */                     //
/*  1126 */                     $currLineNo = 41;
/*  1127 */                     $currColNo = 12;
/*  1128 */ 
/*  1129 */                     if (lst === undefined) {
/*  1130 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1131 */                     }
/*  1132 */                     p = lst;
/*  1133 */                     //
/*  1134 */                     // line 42:
/*  1135 */                     //             next = p.link
/*  1136 */                     //             ^
/*  1137 */                     //
/*  1138 */                     $currLineNo = 42;
/*  1139 */                     $currColNo = 12;
/*  1140 */ 
/*  1141 */                     if (p === undefined) {
/*  1142 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1143 */                     }
/*  1144 */                     $ret = Sk.abstr.gattr(p, 'link', true);
/*  1145 */                     $blk = 6; /* allowing case fallthrough */
/*  1146 */                 case 6:
/*  1147 */                     /* --- function return or resume suspension --- */
/*  1148 */                     if ($ret && $ret.$isSuspension) {
/*  1149 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 42, 19);
/*  1150 */                     }
/*  1151 */                     var $lattr140 = $ret;
/*  1152 */                     next = $lattr140;
/*  1153 */                     //
/*  1154 */                     // line 43:
/*  1155 */                     //             while next is not None:
/*  1156 */                     //             ^
/*  1157 */                     //
/*  1158 */                     $currLineNo = 43;
/*  1159 */                     $currColNo = 12;
/*  1160 */ 
/*  1161 */                     $blk = 7; /* allowing case fallthrough */
/*  1162 */                 case 7:
/*  1163 */                     /* --- while test --- */
/*  1164 */                     //
/*  1165 */                     // line 43:
/*  1166 */                     //             while next is not None:
/*  1167 */                     //             ^
/*  1168 */                     //
/*  1169 */                     $currLineNo = 43;
/*  1170 */                     $currColNo = 12;
/*  1171 */ 
/*  1172 */                     if (next === undefined) {
/*  1173 */                         throw new Sk.builtin.UnboundLocalError('local variable \'next\' referenced before assignment');
/*  1174 */                     }
/*  1175 */                     var $compareres141 = null;
/*  1176 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(next, Sk.builtin.none.none$, 'IsNot', true));
/*  1177 */                     $blk = 11; /* allowing case fallthrough */
/*  1178 */                 case 11:
/*  1179 */                     /* --- function return or resume suspension --- */
/*  1180 */                     if ($ret && $ret.$isSuspension) {
/*  1181 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 43, 18);
/*  1182 */                     }
/*  1183 */                     $compareres141 = $ret;
/*  1184 */                     var $jfalse142 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1185 */                     if ($jfalse142) { /*test failed */
/*  1186 */                         $blk = 10;
/*  1187 */                         continue;
/*  1188 */                     }
/*  1189 */                     $blk = 10; /* allowing case fallthrough */
/*  1190 */                 case 10:
/*  1191 */                     /* --- done --- */
/*  1192 */                     var $jfalse143 = ($compareres141 === false || !Sk.misceval.isTrue($compareres141));
/*  1193 */                     if ($jfalse143) { /*test failed */
/*  1194 */                         $blk = 8;
/*  1195 */                         continue;
/*  1196 */                     }
/*  1197 */                     $blk = 9; /* allowing case fallthrough */
/*  1198 */                 case 9:
/*  1199 */                     /* --- while body --- */
/*  1200 */                     //
/*  1201 */                     // line 44:
/*  1202 */                     //                 p = next
/*  1203 */                     //                 ^
/*  1204 */                     //
/*  1205 */                     $currLineNo = 44;
/*  1206 */                     $currColNo = 16;
/*  1207 */ 
/*  1208 */                     if (next === undefined) {
/*  1209 */                         throw new Sk.builtin.UnboundLocalError('local variable \'next\' referenced before assignment');
/*  1210 */                     }
/*  1211 */                     p = next;
/*  1212 */                     //
/*  1213 */                     // line 45:
/*  1214 */                     //                 next = p.link
/*  1215 */                     //                 ^
/*  1216 */                     //
/*  1217 */                     $currLineNo = 45;
/*  1218 */                     $currColNo = 16;
/*  1219 */ 
/*  1220 */                     if (p === undefined) {
/*  1221 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1222 */                     }
/*  1223 */                     $ret = Sk.abstr.gattr(p, 'link', true);
/*  1224 */                     $blk = 12; /* allowing case fallthrough */
/*  1225 */                 case 12:
/*  1226 */                     /* --- function return or resume suspension --- */
/*  1227 */                     if ($ret && $ret.$isSuspension) {
/*  1228 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 45, 23);
/*  1229 */                     }
/*  1230 */                     var $lattr144 = $ret;
/*  1231 */                     next = $lattr144;
/*  1232 */                     $blk = 7; /* jump */
/*  1233 */                     continue;
/*  1234 */                 case 8:
/*  1235 */                     /* --- after while --- */
/*  1236 */                     //
/*  1237 */                     // line 46:
/*  1238 */                     //             p.link = self
/*  1239 */                     //             ^
/*  1240 */                     //
/*  1241 */                     $currLineNo = 46;
/*  1242 */                     $currColNo = 12;
/*  1243 */ 
/*  1244 */                     if (self === undefined) {
/*  1245 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1246 */                     }
/*  1247 */                     if (p === undefined) {
/*  1248 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1249 */                     }
/*  1250 */                     $ret = Sk.abstr.sattr(p, 'link', self, true);
/*  1251 */                     $blk = 13; /* allowing case fallthrough */
/*  1252 */                 case 13:
/*  1253 */                     /* --- function return or resume suspension --- */
/*  1254 */                     if ($ret && $ret.$isSuspension) {
/*  1255 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 46, 12);
/*  1256 */                     }
/*  1257 */                     //
/*  1258 */                     // line 47:
/*  1259 */                     //             return lst
/*  1260 */                     //             ^
/*  1261 */                     //
/*  1262 */                     $currLineNo = 47;
/*  1263 */                     $currColNo = 12;
/*  1264 */ 
/*  1265 */                     if (lst === undefined) {
/*  1266 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1267 */                     }
/*  1268 */                     return lst;
/*  1269 */                     $blk = 2; /* jump */
/*  1270 */                     continue;
/*  1271 */                 }
/*  1272 */             } catch (err) {
/*  1273 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1274 */                     err = new Sk.builtin.ExternalError(err);
/*  1275 */                 }
/*  1276 */                 err.traceback.push({
/*  1277 */                     lineno: $currLineNo,
/*  1278 */                     colno: $currColNo,
/*  1279 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1280 */                 });
/*  1281 */                 if ($exc.length > 0) {
/*  1282 */                     $err = err;
/*  1283 */                     $blk = $exc.pop();
/*  1284 */                     continue;
/*  1285 */                 } else {
/*  1286 */                     throw err;
/*  1287 */                 }
/*  1288 */             }
/*  1289 */         }
/*  1290 */     });
/*  1291 */     var $scope148 = (function $TaskRec$class_outer($globals, $locals, $rest) {
/*  1292 */         var $gbl = $globals,
/*  1293 */             $loc = $locals;
/*  1294 */         (function $TaskRec$_closure() {
/*  1295 */             var $blk = 0,
/*  1296 */                 $exc = [],
/*  1297 */                 $ret = undefined,
/*  1298 */                 $postfinally = undefined,
/*  1299 */                 $currLineNo = undefined,
/*  1300 */                 $currColNo = undefined;
/*  1301 */             if (typeof Sk.execStart === 'undefined') {
/*  1302 */                 Sk.execStart = Date.now()
/*  1303 */             }
/*  1304 */             while (true) {
/*  1305 */                 try {
/*  1306 */                     var $dateNow = Date.now();
/*  1307 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1308 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1309 */                     }
/*  1310 */                     switch ($blk) {
/*  1311 */                     case 0:
/*  1312 */                         /* --- class entry --- */
/*  1313 */                         //
/*  1314 */                         // line 52:
/*  1315 */                         //     pass
/*  1316 */                         //     ^
/*  1317 */                         //
/*  1318 */                         $currLineNo = 52;
/*  1319 */                         $currColNo = 4;
/*  1320 */ 
/*  1321 */                         return;
/*  1322 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1323 */                     }
/*  1324 */                 } catch (err) {
/*  1325 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1326 */                         err = new Sk.builtin.ExternalError(err);
/*  1327 */                     }
/*  1328 */                     err.traceback.push({
/*  1329 */                         lineno: $currLineNo,
/*  1330 */                         colno: $currColNo,
/*  1331 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1332 */                     });
/*  1333 */                     if ($exc.length > 0) {
/*  1334 */                         $err = err;
/*  1335 */                         $blk = $exc.pop();
/*  1336 */                         continue;
/*  1337 */                     } else {
/*  1338 */                         throw err;
/*  1339 */                     }
/*  1340 */                 }
/*  1341 */             }
/*  1342 */         }).apply(null, $rest);
/*  1343 */     });
/*  1344 */     var $scope151 = (function $DeviceTaskRec$class_outer($globals, $locals, $rest) {
/*  1345 */         var $gbl = $globals,
/*  1346 */             $loc = $locals;
/*  1347 */         (function $DeviceTaskRec$_closure() {
/*  1348 */             var $blk = 0,
/*  1349 */                 $exc = [],
/*  1350 */                 $ret = undefined,
/*  1351 */                 $postfinally = undefined,
/*  1352 */                 $currLineNo = undefined,
/*  1353 */                 $currColNo = undefined;
/*  1354 */             if (typeof Sk.execStart === 'undefined') {
/*  1355 */                 Sk.execStart = Date.now()
/*  1356 */             }
/*  1357 */             while (true) {
/*  1358 */                 try {
/*  1359 */                     var $dateNow = Date.now();
/*  1360 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1361 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1362 */                     }
/*  1363 */                     switch ($blk) {
/*  1364 */                     case 0:
/*  1365 */                         /* --- class entry --- */
/*  1366 */                         //
/*  1367 */                         // line 55:
/*  1368 */                         //     def __init__(self):
/*  1369 */                         //     ^
/*  1370 */                         //
/*  1371 */                         $currLineNo = 55;
/*  1372 */                         $currColNo = 4;
/*  1373 */ 
/*  1374 */                         $scope152.co_name = new Sk.builtins['str']('__init__');
/*  1375 */                         $scope152.co_varnames = ['self'];
/*  1376 */                         var $funcobj154 = new Sk.builtins['function']($scope152, $gbl);
/*  1377 */                         $loc.__init__ = $funcobj154;
/*  1378 */                         return;
/*  1379 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1380 */                     }
/*  1381 */                 } catch (err) {
/*  1382 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1383 */                         err = new Sk.builtin.ExternalError(err);
/*  1384 */                     }
/*  1385 */                     err.traceback.push({
/*  1386 */                         lineno: $currLineNo,
/*  1387 */                         colno: $currColNo,
/*  1388 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1389 */                     });
/*  1390 */                     if ($exc.length > 0) {
/*  1391 */                         $err = err;
/*  1392 */                         $blk = $exc.pop();
/*  1393 */                         continue;
/*  1394 */                     } else {
/*  1395 */                         throw err;
/*  1396 */                     }
/*  1397 */                 }
/*  1398 */             }
/*  1399 */         }).apply(null, $rest);
/*  1400 */     });
/*  1401 */     var $scope152 = (function $__init__153$(self) {
/*  1402 */         var self, self;
/*  1403 */         var $wakeFromSuspension = function() {
/*  1404 */             var susp = $scope152.$wakingSuspension;
/*  1405 */             delete $scope152.$wakingSuspension;
/*  1406 */             $blk = susp.$blk;
/*  1407 */             $loc = susp.$loc;
/*  1408 */             $gbl = susp.$gbl;
/*  1409 */             $exc = susp.$exc;
/*  1410 */             $err = susp.$err;
/*  1411 */             $postfinally = susp.$postfinally;
/*  1412 */             $currLineNo = susp.$lineno;
/*  1413 */             $currColNo = susp.$colno;
/*  1414 */             Sk.lastYield = Date.now();
/*  1415 */             self = susp.$tmps.self;
/*  1416 */             try {
/*  1417 */                 $ret = susp.child.resume();
/*  1418 */             } catch (err) {
/*  1419 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1420 */                     err = new Sk.builtin.ExternalError(err);
/*  1421 */                 }
/*  1422 */                 err.traceback.push({
/*  1423 */                     lineno: $currLineNo,
/*  1424 */                     colno: $currColNo,
/*  1425 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1426 */                 });
/*  1427 */                 if ($exc.length > 0) {
/*  1428 */                     $err = err;
/*  1429 */                     $blk = $exc.pop();
/*  1430 */                 } else {
/*  1431 */                     throw err;
/*  1432 */                 }
/*  1433 */             }
/*  1434 */         };
/*  1435 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1436 */             var susp = new Sk.misceval.Suspension();
/*  1437 */             susp.child = $child;
/*  1438 */             susp.resume = function() {
/*  1439 */                 $scope152.$wakingSuspension = susp;
/*  1440 */                 return $scope152();
/*  1441 */             };
/*  1442 */             susp.data = susp.child.data;
/*  1443 */             susp.$blk = $blk;
/*  1444 */             susp.$loc = $loc;
/*  1445 */             susp.$gbl = $gbl;
/*  1446 */             susp.$exc = $exc;
/*  1447 */             susp.$err = $err;
/*  1448 */             susp.$postfinally = $postfinally;
/*  1449 */             susp.$filename = $filename;
/*  1450 */             susp.$lineno = $lineno;
/*  1451 */             susp.$colno = $colno;
/*  1452 */             susp.optional = susp.child.optional;
/*  1453 */             susp.$tmps = {
/*  1454 */                 "self": self
/*  1455 */             };
/*  1456 */             return susp;
/*  1457 */         };
/*  1458 */         var $blk = 0,
/*  1459 */             $exc = [],
/*  1460 */             $loc = {},
/*  1461 */             $gbl = this,
/*  1462 */             $err = undefined,
/*  1463 */             $ret = undefined,
/*  1464 */             $postfinally = undefined,
/*  1465 */             $currLineNo = undefined,
/*  1466 */             $currColNo = undefined;
/*  1467 */         if (typeof Sk.execStart === 'undefined') {
/*  1468 */             Sk.execStart = Date.now()
/*  1469 */         }
/*  1470 */         if (typeof Sk.lastYield === 'undefined') {
/*  1471 */             Sk.lastYield = Date.now()
/*  1472 */         }
/*  1473 */         if ($scope152.$wakingSuspension !== undefined) {
/*  1474 */             $wakeFromSuspension();
/*  1475 */         } else {
/*  1476 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1477 */         }
/*  1478 */         while (true) {
/*  1479 */             try {
/*  1480 */                 var $dateNow = Date.now();
/*  1481 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1482 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1483 */                 }
/*  1484 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1485 */                     var $susp = $saveSuspension({
/*  1486 */                         data: {
/*  1487 */                             type: 'Sk.yield'
/*  1488 */                         },
/*  1489 */                         resume: function() {}
/*  1490 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  1491 */                     $susp.$blk = $blk;
/*  1492 */                     $susp.optional = true;
/*  1493 */                     return $susp;
/*  1494 */                 }
/*  1495 */                 switch ($blk) {
/*  1496 */                 case 0:
/*  1497 */                     /* --- codeobj entry --- */
/*  1498 */                     if (self === undefined) {
/*  1499 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1500 */                     }
/*  1501 */ 
/*  1502 */                     //
/*  1503 */                     // line 56:
/*  1504 */                     //         self.pending = None
/*  1505 */                     //         ^
/*  1506 */                     //
/*  1507 */                     $currLineNo = 56;
/*  1508 */                     $currColNo = 8;
/*  1509 */ 
/*  1510 */                     if (self === undefined) {
/*  1511 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1512 */                     }
/*  1513 */                     $ret = Sk.abstr.sattr(self, 'pending', Sk.builtin.none.none$, true);
/*  1514 */                     $blk = 1; /* allowing case fallthrough */
/*  1515 */                 case 1:
/*  1516 */                     /* --- function return or resume suspension --- */
/*  1517 */                     if ($ret && $ret.$isSuspension) {
/*  1518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 56, 8);
/*  1519 */                     }
/*  1520 */                     return Sk.builtin.none.none$;
/*  1521 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1522 */                 }
/*  1523 */             } catch (err) {
/*  1524 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1525 */                     err = new Sk.builtin.ExternalError(err);
/*  1526 */                 }
/*  1527 */                 err.traceback.push({
/*  1528 */                     lineno: $currLineNo,
/*  1529 */                     colno: $currColNo,
/*  1530 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1531 */                 });
/*  1532 */                 if ($exc.length > 0) {
/*  1533 */                     $err = err;
/*  1534 */                     $blk = $exc.pop();
/*  1535 */                     continue;
/*  1536 */                 } else {
/*  1537 */                     throw err;
/*  1538 */                 }
/*  1539 */             }
/*  1540 */         }
/*  1541 */     });
/*  1542 */     var $scope157 = (function $IdleTaskRec$class_outer($globals, $locals, $rest) {
/*  1543 */         var $gbl = $globals,
/*  1544 */             $loc = $locals;
/*  1545 */         (function $IdleTaskRec$_closure() {
/*  1546 */             var $blk = 0,
/*  1547 */                 $exc = [],
/*  1548 */                 $ret = undefined,
/*  1549 */                 $postfinally = undefined,
/*  1550 */                 $currLineNo = undefined,
/*  1551 */                 $currColNo = undefined;
/*  1552 */             if (typeof Sk.execStart === 'undefined') {
/*  1553 */                 Sk.execStart = Date.now()
/*  1554 */             }
/*  1555 */             while (true) {
/*  1556 */                 try {
/*  1557 */                     var $dateNow = Date.now();
/*  1558 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1559 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1560 */                     }
/*  1561 */                     switch ($blk) {
/*  1562 */                     case 0:
/*  1563 */                         /* --- class entry --- */
/*  1564 */                         //
/*  1565 */                         // line 59:
/*  1566 */                         //     def __init__(self):
/*  1567 */                         //     ^
/*  1568 */                         //
/*  1569 */                         $currLineNo = 59;
/*  1570 */                         $currColNo = 4;
/*  1571 */ 
/*  1572 */                         $scope158.co_name = new Sk.builtins['str']('__init__');
/*  1573 */                         $scope158.co_varnames = ['self'];
/*  1574 */                         var $funcobj160 = new Sk.builtins['function']($scope158, $gbl);
/*  1575 */                         $loc.__init__ = $funcobj160;
/*  1576 */                         return;
/*  1577 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1578 */                     }
/*  1579 */                 } catch (err) {
/*  1580 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1581 */                         err = new Sk.builtin.ExternalError(err);
/*  1582 */                     }
/*  1583 */                     err.traceback.push({
/*  1584 */                         lineno: $currLineNo,
/*  1585 */                         colno: $currColNo,
/*  1586 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1587 */                     });
/*  1588 */                     if ($exc.length > 0) {
/*  1589 */                         $err = err;
/*  1590 */                         $blk = $exc.pop();
/*  1591 */                         continue;
/*  1592 */                     } else {
/*  1593 */                         throw err;
/*  1594 */                     }
/*  1595 */                 }
/*  1596 */             }
/*  1597 */         }).apply(null, $rest);
/*  1598 */     });
/*  1599 */     var $scope158 = (function $__init__159$(self) {
/*  1600 */         var self, self, self;
/*  1601 */         var $wakeFromSuspension = function() {
/*  1602 */             var susp = $scope158.$wakingSuspension;
/*  1603 */             delete $scope158.$wakingSuspension;
/*  1604 */             $blk = susp.$blk;
/*  1605 */             $loc = susp.$loc;
/*  1606 */             $gbl = susp.$gbl;
/*  1607 */             $exc = susp.$exc;
/*  1608 */             $err = susp.$err;
/*  1609 */             $postfinally = susp.$postfinally;
/*  1610 */             $currLineNo = susp.$lineno;
/*  1611 */             $currColNo = susp.$colno;
/*  1612 */             Sk.lastYield = Date.now();
/*  1613 */             self = susp.$tmps.self;
/*  1614 */             try {
/*  1615 */                 $ret = susp.child.resume();
/*  1616 */             } catch (err) {
/*  1617 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1618 */                     err = new Sk.builtin.ExternalError(err);
/*  1619 */                 }
/*  1620 */                 err.traceback.push({
/*  1621 */                     lineno: $currLineNo,
/*  1622 */                     colno: $currColNo,
/*  1623 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1624 */                 });
/*  1625 */                 if ($exc.length > 0) {
/*  1626 */                     $err = err;
/*  1627 */                     $blk = $exc.pop();
/*  1628 */                 } else {
/*  1629 */                     throw err;
/*  1630 */                 }
/*  1631 */             }
/*  1632 */         };
/*  1633 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1634 */             var susp = new Sk.misceval.Suspension();
/*  1635 */             susp.child = $child;
/*  1636 */             susp.resume = function() {
/*  1637 */                 $scope158.$wakingSuspension = susp;
/*  1638 */                 return $scope158();
/*  1639 */             };
/*  1640 */             susp.data = susp.child.data;
/*  1641 */             susp.$blk = $blk;
/*  1642 */             susp.$loc = $loc;
/*  1643 */             susp.$gbl = $gbl;
/*  1644 */             susp.$exc = $exc;
/*  1645 */             susp.$err = $err;
/*  1646 */             susp.$postfinally = $postfinally;
/*  1647 */             susp.$filename = $filename;
/*  1648 */             susp.$lineno = $lineno;
/*  1649 */             susp.$colno = $colno;
/*  1650 */             susp.optional = susp.child.optional;
/*  1651 */             susp.$tmps = {
/*  1652 */                 "self": self
/*  1653 */             };
/*  1654 */             return susp;
/*  1655 */         };
/*  1656 */         var $blk = 0,
/*  1657 */             $exc = [],
/*  1658 */             $loc = {},
/*  1659 */             $gbl = this,
/*  1660 */             $err = undefined,
/*  1661 */             $ret = undefined,
/*  1662 */             $postfinally = undefined,
/*  1663 */             $currLineNo = undefined,
/*  1664 */             $currColNo = undefined;
/*  1665 */         if (typeof Sk.execStart === 'undefined') {
/*  1666 */             Sk.execStart = Date.now()
/*  1667 */         }
/*  1668 */         if (typeof Sk.lastYield === 'undefined') {
/*  1669 */             Sk.lastYield = Date.now()
/*  1670 */         }
/*  1671 */         if ($scope158.$wakingSuspension !== undefined) {
/*  1672 */             $wakeFromSuspension();
/*  1673 */         } else {
/*  1674 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1675 */         }
/*  1676 */         while (true) {
/*  1677 */             try {
/*  1678 */                 var $dateNow = Date.now();
/*  1679 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1680 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1681 */                 }
/*  1682 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1683 */                     var $susp = $saveSuspension({
/*  1684 */                         data: {
/*  1685 */                             type: 'Sk.yield'
/*  1686 */                         },
/*  1687 */                         resume: function() {}
/*  1688 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  1689 */                     $susp.$blk = $blk;
/*  1690 */                     $susp.optional = true;
/*  1691 */                     return $susp;
/*  1692 */                 }
/*  1693 */                 switch ($blk) {
/*  1694 */                 case 0:
/*  1695 */                     /* --- codeobj entry --- */
/*  1696 */                     if (self === undefined) {
/*  1697 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1698 */                     }
/*  1699 */ 
/*  1700 */                     //
/*  1701 */                     // line 60:
/*  1702 */                     //         self.control = 1
/*  1703 */                     //         ^
/*  1704 */                     //
/*  1705 */                     $currLineNo = 60;
/*  1706 */                     $currColNo = 8;
/*  1707 */ 
/*  1708 */                     if (self === undefined) {
/*  1709 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1710 */                     }
/*  1711 */                     $ret = Sk.abstr.sattr(self, 'control', new Sk.builtin.int_(1), true);
/*  1712 */                     $blk = 1; /* allowing case fallthrough */
/*  1713 */                 case 1:
/*  1714 */                     /* --- function return or resume suspension --- */
/*  1715 */                     if ($ret && $ret.$isSuspension) {
/*  1716 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 60, 8);
/*  1717 */                     }
/*  1718 */                     //
/*  1719 */                     // line 61:
/*  1720 */                     //         self.count = 10000
/*  1721 */                     //         ^
/*  1722 */                     //
/*  1723 */                     $currLineNo = 61;
/*  1724 */                     $currColNo = 8;
/*  1725 */ 
/*  1726 */                     if (self === undefined) {
/*  1727 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1728 */                     }
/*  1729 */                     $ret = Sk.abstr.sattr(self, 'count', new Sk.builtin.int_(10000), true);
/*  1730 */                     $blk = 2; /* allowing case fallthrough */
/*  1731 */                 case 2:
/*  1732 */                     /* --- function return or resume suspension --- */
/*  1733 */                     if ($ret && $ret.$isSuspension) {
/*  1734 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 61, 8);
/*  1735 */                     }
/*  1736 */                     return Sk.builtin.none.none$;
/*  1737 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1738 */                 }
/*  1739 */             } catch (err) {
/*  1740 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1741 */                     err = new Sk.builtin.ExternalError(err);
/*  1742 */                 }
/*  1743 */                 err.traceback.push({
/*  1744 */                     lineno: $currLineNo,
/*  1745 */                     colno: $currColNo,
/*  1746 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1747 */                 });
/*  1748 */                 if ($exc.length > 0) {
/*  1749 */                     $err = err;
/*  1750 */                     $blk = $exc.pop();
/*  1751 */                     continue;
/*  1752 */                 } else {
/*  1753 */                     throw err;
/*  1754 */                 }
/*  1755 */             }
/*  1756 */         }
/*  1757 */     });
/*  1758 */     var $scope163 = (function $HandlerTaskRec$class_outer($globals, $locals, $rest) {
/*  1759 */         var $gbl = $globals,
/*  1760 */             $loc = $locals;
/*  1761 */         (function $HandlerTaskRec$_closure() {
/*  1762 */             var $blk = 0,
/*  1763 */                 $exc = [],
/*  1764 */                 $ret = undefined,
/*  1765 */                 $postfinally = undefined,
/*  1766 */                 $currLineNo = undefined,
/*  1767 */                 $currColNo = undefined;
/*  1768 */             if (typeof Sk.execStart === 'undefined') {
/*  1769 */                 Sk.execStart = Date.now()
/*  1770 */             }
/*  1771 */             while (true) {
/*  1772 */                 try {
/*  1773 */                     var $dateNow = Date.now();
/*  1774 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1775 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1776 */                     }
/*  1777 */                     switch ($blk) {
/*  1778 */                     case 0:
/*  1779 */                         /* --- class entry --- */
/*  1780 */                         //
/*  1781 */                         // line 64:
/*  1782 */                         //     def __init__(self):
/*  1783 */                         //     ^
/*  1784 */                         //
/*  1785 */                         $currLineNo = 64;
/*  1786 */                         $currColNo = 4;
/*  1787 */ 
/*  1788 */                         $scope164.co_name = new Sk.builtins['str']('__init__');
/*  1789 */                         $scope164.co_varnames = ['self'];
/*  1790 */                         var $funcobj166 = new Sk.builtins['function']($scope164, $gbl);
/*  1791 */                         $loc.__init__ = $funcobj166;
/*  1792 */                         //
/*  1793 */                         // line 68:
/*  1794 */                         //     def workInAdd(self,p):
/*  1795 */                         //     ^
/*  1796 */                         //
/*  1797 */                         $currLineNo = 68;
/*  1798 */                         $currColNo = 4;
/*  1799 */ 
/*  1800 */                         $scope167.co_name = new Sk.builtins['str']('workInAdd');
/*  1801 */                         $scope167.co_varnames = ['self', 'p'];
/*  1802 */                         var $funcobj173 = new Sk.builtins['function']($scope167, $gbl);
/*  1803 */                         $loc.workInAdd = $funcobj173;
/*  1804 */                         //
/*  1805 */                         // line 72:
/*  1806 */                         //     def deviceInAdd(self,p):
/*  1807 */                         //     ^
/*  1808 */                         //
/*  1809 */                         $currLineNo = 72;
/*  1810 */                         $currColNo = 4;
/*  1811 */ 
/*  1812 */                         $scope174.co_name = new Sk.builtins['str']('deviceInAdd');
/*  1813 */                         $scope174.co_varnames = ['self', 'p'];
/*  1814 */                         var $funcobj180 = new Sk.builtins['function']($scope174, $gbl);
/*  1815 */                         $loc.deviceInAdd = $funcobj180;
/*  1816 */                         return;
/*  1817 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1818 */                     }
/*  1819 */                 } catch (err) {
/*  1820 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1821 */                         err = new Sk.builtin.ExternalError(err);
/*  1822 */                     }
/*  1823 */                     err.traceback.push({
/*  1824 */                         lineno: $currLineNo,
/*  1825 */                         colno: $currColNo,
/*  1826 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1827 */                     });
/*  1828 */                     if ($exc.length > 0) {
/*  1829 */                         $err = err;
/*  1830 */                         $blk = $exc.pop();
/*  1831 */                         continue;
/*  1832 */                     } else {
/*  1833 */                         throw err;
/*  1834 */                     }
/*  1835 */                 }
/*  1836 */             }
/*  1837 */         }).apply(null, $rest);
/*  1838 */     });
/*  1839 */     var $scope164 = (function $__init__165$(self) {
/*  1840 */         var self, self, self;
/*  1841 */         var $wakeFromSuspension = function() {
/*  1842 */             var susp = $scope164.$wakingSuspension;
/*  1843 */             delete $scope164.$wakingSuspension;
/*  1844 */             $blk = susp.$blk;
/*  1845 */             $loc = susp.$loc;
/*  1846 */             $gbl = susp.$gbl;
/*  1847 */             $exc = susp.$exc;
/*  1848 */             $err = susp.$err;
/*  1849 */             $postfinally = susp.$postfinally;
/*  1850 */             $currLineNo = susp.$lineno;
/*  1851 */             $currColNo = susp.$colno;
/*  1852 */             Sk.lastYield = Date.now();
/*  1853 */             self = susp.$tmps.self;
/*  1854 */             try {
/*  1855 */                 $ret = susp.child.resume();
/*  1856 */             } catch (err) {
/*  1857 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1858 */                     err = new Sk.builtin.ExternalError(err);
/*  1859 */                 }
/*  1860 */                 err.traceback.push({
/*  1861 */                     lineno: $currLineNo,
/*  1862 */                     colno: $currColNo,
/*  1863 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1864 */                 });
/*  1865 */                 if ($exc.length > 0) {
/*  1866 */                     $err = err;
/*  1867 */                     $blk = $exc.pop();
/*  1868 */                 } else {
/*  1869 */                     throw err;
/*  1870 */                 }
/*  1871 */             }
/*  1872 */         };
/*  1873 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1874 */             var susp = new Sk.misceval.Suspension();
/*  1875 */             susp.child = $child;
/*  1876 */             susp.resume = function() {
/*  1877 */                 $scope164.$wakingSuspension = susp;
/*  1878 */                 return $scope164();
/*  1879 */             };
/*  1880 */             susp.data = susp.child.data;
/*  1881 */             susp.$blk = $blk;
/*  1882 */             susp.$loc = $loc;
/*  1883 */             susp.$gbl = $gbl;
/*  1884 */             susp.$exc = $exc;
/*  1885 */             susp.$err = $err;
/*  1886 */             susp.$postfinally = $postfinally;
/*  1887 */             susp.$filename = $filename;
/*  1888 */             susp.$lineno = $lineno;
/*  1889 */             susp.$colno = $colno;
/*  1890 */             susp.optional = susp.child.optional;
/*  1891 */             susp.$tmps = {
/*  1892 */                 "self": self
/*  1893 */             };
/*  1894 */             return susp;
/*  1895 */         };
/*  1896 */         var $blk = 0,
/*  1897 */             $exc = [],
/*  1898 */             $loc = {},
/*  1899 */             $gbl = this,
/*  1900 */             $err = undefined,
/*  1901 */             $ret = undefined,
/*  1902 */             $postfinally = undefined,
/*  1903 */             $currLineNo = undefined,
/*  1904 */             $currColNo = undefined;
/*  1905 */         if (typeof Sk.execStart === 'undefined') {
/*  1906 */             Sk.execStart = Date.now()
/*  1907 */         }
/*  1908 */         if (typeof Sk.lastYield === 'undefined') {
/*  1909 */             Sk.lastYield = Date.now()
/*  1910 */         }
/*  1911 */         if ($scope164.$wakingSuspension !== undefined) {
/*  1912 */             $wakeFromSuspension();
/*  1913 */         } else {
/*  1914 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1915 */         }
/*  1916 */         while (true) {
/*  1917 */             try {
/*  1918 */                 var $dateNow = Date.now();
/*  1919 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1920 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1921 */                 }
/*  1922 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1923 */                     var $susp = $saveSuspension({
/*  1924 */                         data: {
/*  1925 */                             type: 'Sk.yield'
/*  1926 */                         },
/*  1927 */                         resume: function() {}
/*  1928 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  1929 */                     $susp.$blk = $blk;
/*  1930 */                     $susp.optional = true;
/*  1931 */                     return $susp;
/*  1932 */                 }
/*  1933 */                 switch ($blk) {
/*  1934 */                 case 0:
/*  1935 */                     /* --- codeobj entry --- */
/*  1936 */                     if (self === undefined) {
/*  1937 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1938 */                     }
/*  1939 */ 
/*  1940 */                     //
/*  1941 */                     // line 65:
/*  1942 */                     //         self.work_in = None
/*  1943 */                     //         ^
/*  1944 */                     //
/*  1945 */                     $currLineNo = 65;
/*  1946 */                     $currColNo = 8;
/*  1947 */ 
/*  1948 */                     if (self === undefined) {
/*  1949 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1950 */                     }
/*  1951 */                     $ret = Sk.abstr.sattr(self, 'work_in', Sk.builtin.none.none$, true);
/*  1952 */                     $blk = 1; /* allowing case fallthrough */
/*  1953 */                 case 1:
/*  1954 */                     /* --- function return or resume suspension --- */
/*  1955 */                     if ($ret && $ret.$isSuspension) {
/*  1956 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 65, 8);
/*  1957 */                     }
/*  1958 */                     //
/*  1959 */                     // line 66:
/*  1960 */                     //         self.device_in = None
/*  1961 */                     //         ^
/*  1962 */                     //
/*  1963 */                     $currLineNo = 66;
/*  1964 */                     $currColNo = 8;
/*  1965 */ 
/*  1966 */                     if (self === undefined) {
/*  1967 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1968 */                     }
/*  1969 */                     $ret = Sk.abstr.sattr(self, 'device_in', Sk.builtin.none.none$, true);
/*  1970 */                     $blk = 2; /* allowing case fallthrough */
/*  1971 */                 case 2:
/*  1972 */                     /* --- function return or resume suspension --- */
/*  1973 */                     if ($ret && $ret.$isSuspension) {
/*  1974 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 66, 8);
/*  1975 */                     }
/*  1976 */                     return Sk.builtin.none.none$;
/*  1977 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1978 */                 }
/*  1979 */             } catch (err) {
/*  1980 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1981 */                     err = new Sk.builtin.ExternalError(err);
/*  1982 */                 }
/*  1983 */                 err.traceback.push({
/*  1984 */                     lineno: $currLineNo,
/*  1985 */                     colno: $currColNo,
/*  1986 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1987 */                 });
/*  1988 */                 if ($exc.length > 0) {
/*  1989 */                     $err = err;
/*  1990 */                     $blk = $exc.pop();
/*  1991 */                     continue;
/*  1992 */                 } else {
/*  1993 */                     throw err;
/*  1994 */                 }
/*  1995 */             }
/*  1996 */         }
/*  1997 */     });
/*  1998 */     var $scope167 = (function $workInAdd168$(self, p) {
/*  1999 */         var p, p, self, self, self, self, $lattr169, $lattr169, $lattr170, $lattr169, $lattr170, $call171;
/*  2000 */         var $wakeFromSuspension = function() {
/*  2001 */             var susp = $scope167.$wakingSuspension;
/*  2002 */             delete $scope167.$wakingSuspension;
/*  2003 */             $blk = susp.$blk;
/*  2004 */             $loc = susp.$loc;
/*  2005 */             $gbl = susp.$gbl;
/*  2006 */             $exc = susp.$exc;
/*  2007 */             $err = susp.$err;
/*  2008 */             $postfinally = susp.$postfinally;
/*  2009 */             $currLineNo = susp.$lineno;
/*  2010 */             $currColNo = susp.$colno;
/*  2011 */             Sk.lastYield = Date.now();
/*  2012 */             p = susp.$tmps.p;
/*  2013 */             self = susp.$tmps.self;
/*  2014 */             $lattr169 = susp.$tmps.$lattr169;
/*  2015 */             $lattr170 = susp.$tmps.$lattr170;
/*  2016 */             $call171 = susp.$tmps.$call171;
/*  2017 */             try {
/*  2018 */                 $ret = susp.child.resume();
/*  2019 */             } catch (err) {
/*  2020 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2021 */                     err = new Sk.builtin.ExternalError(err);
/*  2022 */                 }
/*  2023 */                 err.traceback.push({
/*  2024 */                     lineno: $currLineNo,
/*  2025 */                     colno: $currColNo,
/*  2026 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2027 */                 });
/*  2028 */                 if ($exc.length > 0) {
/*  2029 */                     $err = err;
/*  2030 */                     $blk = $exc.pop();
/*  2031 */                 } else {
/*  2032 */                     throw err;
/*  2033 */                 }
/*  2034 */             }
/*  2035 */         };
/*  2036 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2037 */             var susp = new Sk.misceval.Suspension();
/*  2038 */             susp.child = $child;
/*  2039 */             susp.resume = function() {
/*  2040 */                 $scope167.$wakingSuspension = susp;
/*  2041 */                 return $scope167();
/*  2042 */             };
/*  2043 */             susp.data = susp.child.data;
/*  2044 */             susp.$blk = $blk;
/*  2045 */             susp.$loc = $loc;
/*  2046 */             susp.$gbl = $gbl;
/*  2047 */             susp.$exc = $exc;
/*  2048 */             susp.$err = $err;
/*  2049 */             susp.$postfinally = $postfinally;
/*  2050 */             susp.$filename = $filename;
/*  2051 */             susp.$lineno = $lineno;
/*  2052 */             susp.$colno = $colno;
/*  2053 */             susp.optional = susp.child.optional;
/*  2054 */             susp.$tmps = {
/*  2055 */                 "p": p,
/*  2056 */                 "self": self,
/*  2057 */                 "$lattr169": $lattr169,
/*  2058 */                 "$lattr170": $lattr170,
/*  2059 */                 "$call171": $call171
/*  2060 */             };
/*  2061 */             return susp;
/*  2062 */         };
/*  2063 */         var $blk = 0,
/*  2064 */             $exc = [],
/*  2065 */             $loc = {},
/*  2066 */             $gbl = this,
/*  2067 */             $err = undefined,
/*  2068 */             $ret = undefined,
/*  2069 */             $postfinally = undefined,
/*  2070 */             $currLineNo = undefined,
/*  2071 */             $currColNo = undefined;
/*  2072 */         if (typeof Sk.execStart === 'undefined') {
/*  2073 */             Sk.execStart = Date.now()
/*  2074 */         }
/*  2075 */         if (typeof Sk.lastYield === 'undefined') {
/*  2076 */             Sk.lastYield = Date.now()
/*  2077 */         }
/*  2078 */         if ($scope167.$wakingSuspension !== undefined) {
/*  2079 */             $wakeFromSuspension();
/*  2080 */         } else {
/*  2081 */             Sk.builtin.pyCheckArgs("workInAdd", arguments, 2, 2, false, false);
/*  2082 */         }
/*  2083 */         while (true) {
/*  2084 */             try {
/*  2085 */                 var $dateNow = Date.now();
/*  2086 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2087 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2088 */                 }
/*  2089 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2090 */                     var $susp = $saveSuspension({
/*  2091 */                         data: {
/*  2092 */                             type: 'Sk.yield'
/*  2093 */                         },
/*  2094 */                         resume: function() {}
/*  2095 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  2096 */                     $susp.$blk = $blk;
/*  2097 */                     $susp.optional = true;
/*  2098 */                     return $susp;
/*  2099 */                 }
/*  2100 */                 switch ($blk) {
/*  2101 */                 case 0:
/*  2102 */                     /* --- codeobj entry --- */
/*  2103 */                     if (self === undefined) {
/*  2104 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2105 */                     }
/*  2106 */                     if (p === undefined) {
/*  2107 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2108 */                     }
/*  2109 */ 
/*  2110 */                     //
/*  2111 */                     // line 69:
/*  2112 */                     //         self.work_in = p.append_to(self.work_in)
/*  2113 */                     //         ^
/*  2114 */                     //
/*  2115 */                     $currLineNo = 69;
/*  2116 */                     $currColNo = 8;
/*  2117 */ 
/*  2118 */                     if (p === undefined) {
/*  2119 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2120 */                     }
/*  2121 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  2122 */                     $blk = 1; /* allowing case fallthrough */
/*  2123 */                 case 1:
/*  2124 */                     /* --- function return or resume suspension --- */
/*  2125 */                     if ($ret && $ret.$isSuspension) {
/*  2126 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 23);
/*  2127 */                     }
/*  2128 */                     var $lattr169 = $ret;
/*  2129 */                     if (self === undefined) {
/*  2130 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2131 */                     }
/*  2132 */                     $ret = Sk.abstr.gattr(self, 'work_in', true);
/*  2133 */                     $blk = 2; /* allowing case fallthrough */
/*  2134 */                 case 2:
/*  2135 */                     /* --- function return or resume suspension --- */
/*  2136 */                     if ($ret && $ret.$isSuspension) {
/*  2137 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 35);
/*  2138 */                     }
/*  2139 */                     var $lattr170 = $ret;
/*  2140 */                     $ret;
/*  2141 */                     $ret = Sk.misceval.callsimOrSuspend($lattr169, $lattr170);
/*  2142 */                     $blk = 3; /* allowing case fallthrough */
/*  2143 */                 case 3:
/*  2144 */                     /* --- function return or resume suspension --- */
/*  2145 */                     if ($ret && $ret.$isSuspension) {
/*  2146 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 23);
/*  2147 */                     }
/*  2148 */                     var $call171 = $ret;
/*  2149 */                     //
/*  2150 */                     // line 69:
/*  2151 */                     //         self.work_in = p.append_to(self.work_in)
/*  2152 */                     //                        ^
/*  2153 */                     //
/*  2154 */                     $currLineNo = 69;
/*  2155 */                     $currColNo = 23;
/*  2156 */ 
/*  2157 */                     if (self === undefined) {
/*  2158 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2159 */                     }
/*  2160 */                     $ret = Sk.abstr.sattr(self, 'work_in', $call171, true);
/*  2161 */                     $blk = 4; /* allowing case fallthrough */
/*  2162 */                 case 4:
/*  2163 */                     /* --- function return or resume suspension --- */
/*  2164 */                     if ($ret && $ret.$isSuspension) {
/*  2165 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 8);
/*  2166 */                     }
/*  2167 */                     //
/*  2168 */                     // line 70:
/*  2169 */                     //         return self.work_in
/*  2170 */                     //         ^
/*  2171 */                     //
/*  2172 */                     $currLineNo = 70;
/*  2173 */                     $currColNo = 8;
/*  2174 */ 
/*  2175 */                     if (self === undefined) {
/*  2176 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2177 */                     }
/*  2178 */                     $ret = Sk.abstr.gattr(self, 'work_in', true);
/*  2179 */                     $blk = 5; /* allowing case fallthrough */
/*  2180 */                 case 5:
/*  2181 */                     /* --- function return or resume suspension --- */
/*  2182 */                     if ($ret && $ret.$isSuspension) {
/*  2183 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 70, 15);
/*  2184 */                     }
/*  2185 */                     var $lattr172 = $ret;
/*  2186 */                     return $lattr172;
/*  2187 */                     return Sk.builtin.none.none$;
/*  2188 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2189 */                 }
/*  2190 */             } catch (err) {
/*  2191 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2192 */                     err = new Sk.builtin.ExternalError(err);
/*  2193 */                 }
/*  2194 */                 err.traceback.push({
/*  2195 */                     lineno: $currLineNo,
/*  2196 */                     colno: $currColNo,
/*  2197 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2198 */                 });
/*  2199 */                 if ($exc.length > 0) {
/*  2200 */                     $err = err;
/*  2201 */                     $blk = $exc.pop();
/*  2202 */                     continue;
/*  2203 */                 } else {
/*  2204 */                     throw err;
/*  2205 */                 }
/*  2206 */             }
/*  2207 */         }
/*  2208 */     });
/*  2209 */     var $scope174 = (function $deviceInAdd175$(self, p) {
/*  2210 */         var p, p, self, self, self, self, $lattr176, $lattr176, $lattr177, $lattr176, $lattr177, $call178;
/*  2211 */         var $wakeFromSuspension = function() {
/*  2212 */             var susp = $scope174.$wakingSuspension;
/*  2213 */             delete $scope174.$wakingSuspension;
/*  2214 */             $blk = susp.$blk;
/*  2215 */             $loc = susp.$loc;
/*  2216 */             $gbl = susp.$gbl;
/*  2217 */             $exc = susp.$exc;
/*  2218 */             $err = susp.$err;
/*  2219 */             $postfinally = susp.$postfinally;
/*  2220 */             $currLineNo = susp.$lineno;
/*  2221 */             $currColNo = susp.$colno;
/*  2222 */             Sk.lastYield = Date.now();
/*  2223 */             p = susp.$tmps.p;
/*  2224 */             self = susp.$tmps.self;
/*  2225 */             $lattr176 = susp.$tmps.$lattr176;
/*  2226 */             $lattr177 = susp.$tmps.$lattr177;
/*  2227 */             $call178 = susp.$tmps.$call178;
/*  2228 */             try {
/*  2229 */                 $ret = susp.child.resume();
/*  2230 */             } catch (err) {
/*  2231 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2232 */                     err = new Sk.builtin.ExternalError(err);
/*  2233 */                 }
/*  2234 */                 err.traceback.push({
/*  2235 */                     lineno: $currLineNo,
/*  2236 */                     colno: $currColNo,
/*  2237 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2238 */                 });
/*  2239 */                 if ($exc.length > 0) {
/*  2240 */                     $err = err;
/*  2241 */                     $blk = $exc.pop();
/*  2242 */                 } else {
/*  2243 */                     throw err;
/*  2244 */                 }
/*  2245 */             }
/*  2246 */         };
/*  2247 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2248 */             var susp = new Sk.misceval.Suspension();
/*  2249 */             susp.child = $child;
/*  2250 */             susp.resume = function() {
/*  2251 */                 $scope174.$wakingSuspension = susp;
/*  2252 */                 return $scope174();
/*  2253 */             };
/*  2254 */             susp.data = susp.child.data;
/*  2255 */             susp.$blk = $blk;
/*  2256 */             susp.$loc = $loc;
/*  2257 */             susp.$gbl = $gbl;
/*  2258 */             susp.$exc = $exc;
/*  2259 */             susp.$err = $err;
/*  2260 */             susp.$postfinally = $postfinally;
/*  2261 */             susp.$filename = $filename;
/*  2262 */             susp.$lineno = $lineno;
/*  2263 */             susp.$colno = $colno;
/*  2264 */             susp.optional = susp.child.optional;
/*  2265 */             susp.$tmps = {
/*  2266 */                 "p": p,
/*  2267 */                 "self": self,
/*  2268 */                 "$lattr176": $lattr176,
/*  2269 */                 "$lattr177": $lattr177,
/*  2270 */                 "$call178": $call178
/*  2271 */             };
/*  2272 */             return susp;
/*  2273 */         };
/*  2274 */         var $blk = 0,
/*  2275 */             $exc = [],
/*  2276 */             $loc = {},
/*  2277 */             $gbl = this,
/*  2278 */             $err = undefined,
/*  2279 */             $ret = undefined,
/*  2280 */             $postfinally = undefined,
/*  2281 */             $currLineNo = undefined,
/*  2282 */             $currColNo = undefined;
/*  2283 */         if (typeof Sk.execStart === 'undefined') {
/*  2284 */             Sk.execStart = Date.now()
/*  2285 */         }
/*  2286 */         if (typeof Sk.lastYield === 'undefined') {
/*  2287 */             Sk.lastYield = Date.now()
/*  2288 */         }
/*  2289 */         if ($scope174.$wakingSuspension !== undefined) {
/*  2290 */             $wakeFromSuspension();
/*  2291 */         } else {
/*  2292 */             Sk.builtin.pyCheckArgs("deviceInAdd", arguments, 2, 2, false, false);
/*  2293 */         }
/*  2294 */         while (true) {
/*  2295 */             try {
/*  2296 */                 var $dateNow = Date.now();
/*  2297 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2298 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2299 */                 }
/*  2300 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2301 */                     var $susp = $saveSuspension({
/*  2302 */                         data: {
/*  2303 */                             type: 'Sk.yield'
/*  2304 */                         },
/*  2305 */                         resume: function() {}
/*  2306 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  2307 */                     $susp.$blk = $blk;
/*  2308 */                     $susp.optional = true;
/*  2309 */                     return $susp;
/*  2310 */                 }
/*  2311 */                 switch ($blk) {
/*  2312 */                 case 0:
/*  2313 */                     /* --- codeobj entry --- */
/*  2314 */                     if (self === undefined) {
/*  2315 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2316 */                     }
/*  2317 */                     if (p === undefined) {
/*  2318 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2319 */                     }
/*  2320 */ 
/*  2321 */                     //
/*  2322 */                     // line 73:
/*  2323 */                     //         self.device_in = p.append_to(self.device_in)
/*  2324 */                     //         ^
/*  2325 */                     //
/*  2326 */                     $currLineNo = 73;
/*  2327 */                     $currColNo = 8;
/*  2328 */ 
/*  2329 */                     if (p === undefined) {
/*  2330 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2331 */                     }
/*  2332 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  2333 */                     $blk = 1; /* allowing case fallthrough */
/*  2334 */                 case 1:
/*  2335 */                     /* --- function return or resume suspension --- */
/*  2336 */                     if ($ret && $ret.$isSuspension) {
/*  2337 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 25);
/*  2338 */                     }
/*  2339 */                     var $lattr176 = $ret;
/*  2340 */                     if (self === undefined) {
/*  2341 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2342 */                     }
/*  2343 */                     $ret = Sk.abstr.gattr(self, 'device_in', true);
/*  2344 */                     $blk = 2; /* allowing case fallthrough */
/*  2345 */                 case 2:
/*  2346 */                     /* --- function return or resume suspension --- */
/*  2347 */                     if ($ret && $ret.$isSuspension) {
/*  2348 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 37);
/*  2349 */                     }
/*  2350 */                     var $lattr177 = $ret;
/*  2351 */                     $ret;
/*  2352 */                     $ret = Sk.misceval.callsimOrSuspend($lattr176, $lattr177);
/*  2353 */                     $blk = 3; /* allowing case fallthrough */
/*  2354 */                 case 3:
/*  2355 */                     /* --- function return or resume suspension --- */
/*  2356 */                     if ($ret && $ret.$isSuspension) {
/*  2357 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 25);
/*  2358 */                     }
/*  2359 */                     var $call178 = $ret;
/*  2360 */                     //
/*  2361 */                     // line 73:
/*  2362 */                     //         self.device_in = p.append_to(self.device_in)
/*  2363 */                     //                          ^
/*  2364 */                     //
/*  2365 */                     $currLineNo = 73;
/*  2366 */                     $currColNo = 25;
/*  2367 */ 
/*  2368 */                     if (self === undefined) {
/*  2369 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2370 */                     }
/*  2371 */                     $ret = Sk.abstr.sattr(self, 'device_in', $call178, true);
/*  2372 */                     $blk = 4; /* allowing case fallthrough */
/*  2373 */                 case 4:
/*  2374 */                     /* --- function return or resume suspension --- */
/*  2375 */                     if ($ret && $ret.$isSuspension) {
/*  2376 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 8);
/*  2377 */                     }
/*  2378 */                     //
/*  2379 */                     // line 74:
/*  2380 */                     //         return self.device_in
/*  2381 */                     //         ^
/*  2382 */                     //
/*  2383 */                     $currLineNo = 74;
/*  2384 */                     $currColNo = 8;
/*  2385 */ 
/*  2386 */                     if (self === undefined) {
/*  2387 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2388 */                     }
/*  2389 */                     $ret = Sk.abstr.gattr(self, 'device_in', true);
/*  2390 */                     $blk = 5; /* allowing case fallthrough */
/*  2391 */                 case 5:
/*  2392 */                     /* --- function return or resume suspension --- */
/*  2393 */                     if ($ret && $ret.$isSuspension) {
/*  2394 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 74, 15);
/*  2395 */                     }
/*  2396 */                     var $lattr179 = $ret;
/*  2397 */                     return $lattr179;
/*  2398 */                     return Sk.builtin.none.none$;
/*  2399 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2400 */                 }
/*  2401 */             } catch (err) {
/*  2402 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2403 */                     err = new Sk.builtin.ExternalError(err);
/*  2404 */                 }
/*  2405 */                 err.traceback.push({
/*  2406 */                     lineno: $currLineNo,
/*  2407 */                     colno: $currColNo,
/*  2408 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2409 */                 });
/*  2410 */                 if ($exc.length > 0) {
/*  2411 */                     $err = err;
/*  2412 */                     $blk = $exc.pop();
/*  2413 */                     continue;
/*  2414 */                 } else {
/*  2415 */                     throw err;
/*  2416 */                 }
/*  2417 */             }
/*  2418 */         }
/*  2419 */     });
/*  2420 */     var $scope183 = (function $WorkerTaskRec$class_outer($globals, $locals, $rest) {
/*  2421 */         var $gbl = $globals,
/*  2422 */             $loc = $locals;
/*  2423 */         (function $WorkerTaskRec$_closure() {
/*  2424 */             var $blk = 0,
/*  2425 */                 $exc = [],
/*  2426 */                 $ret = undefined,
/*  2427 */                 $postfinally = undefined,
/*  2428 */                 $currLineNo = undefined,
/*  2429 */                 $currColNo = undefined;
/*  2430 */             if (typeof Sk.execStart === 'undefined') {
/*  2431 */                 Sk.execStart = Date.now()
/*  2432 */             }
/*  2433 */             while (true) {
/*  2434 */                 try {
/*  2435 */                     var $dateNow = Date.now();
/*  2436 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2437 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2438 */                     }
/*  2439 */                     switch ($blk) {
/*  2440 */                     case 0:
/*  2441 */                         /* --- class entry --- */
/*  2442 */                         //
/*  2443 */                         // line 77:
/*  2444 */                         //     def __init__(self):
/*  2445 */                         //     ^
/*  2446 */                         //
/*  2447 */                         $currLineNo = 77;
/*  2448 */                         $currColNo = 4;
/*  2449 */ 
/*  2450 */                         $scope184.co_name = new Sk.builtins['str']('__init__');
/*  2451 */                         $scope184.co_varnames = ['self'];
/*  2452 */                         var $funcobj187 = new Sk.builtins['function']($scope184, $gbl);
/*  2453 */                         $loc.__init__ = $funcobj187;
/*  2454 */                         return;
/*  2455 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2456 */                     }
/*  2457 */                 } catch (err) {
/*  2458 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  2459 */                         err = new Sk.builtin.ExternalError(err);
/*  2460 */                     }
/*  2461 */                     err.traceback.push({
/*  2462 */                         lineno: $currLineNo,
/*  2463 */                         colno: $currColNo,
/*  2464 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2465 */                     });
/*  2466 */                     if ($exc.length > 0) {
/*  2467 */                         $err = err;
/*  2468 */                         $blk = $exc.pop();
/*  2469 */                         continue;
/*  2470 */                     } else {
/*  2471 */                         throw err;
/*  2472 */                     }
/*  2473 */                 }
/*  2474 */             }
/*  2475 */         }).apply(null, $rest);
/*  2476 */     });
/*  2477 */     var $scope184 = (function $__init__185$(self) {
/*  2478 */         var self, self, self, $loadgbl186;
/*  2479 */         var $wakeFromSuspension = function() {
/*  2480 */             var susp = $scope184.$wakingSuspension;
/*  2481 */             delete $scope184.$wakingSuspension;
/*  2482 */             $blk = susp.$blk;
/*  2483 */             $loc = susp.$loc;
/*  2484 */             $gbl = susp.$gbl;
/*  2485 */             $exc = susp.$exc;
/*  2486 */             $err = susp.$err;
/*  2487 */             $postfinally = susp.$postfinally;
/*  2488 */             $currLineNo = susp.$lineno;
/*  2489 */             $currColNo = susp.$colno;
/*  2490 */             Sk.lastYield = Date.now();
/*  2491 */             self = susp.$tmps.self;
/*  2492 */             $loadgbl186 = susp.$tmps.$loadgbl186;
/*  2493 */             try {
/*  2494 */                 $ret = susp.child.resume();
/*  2495 */             } catch (err) {
/*  2496 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2497 */                     err = new Sk.builtin.ExternalError(err);
/*  2498 */                 }
/*  2499 */                 err.traceback.push({
/*  2500 */                     lineno: $currLineNo,
/*  2501 */                     colno: $currColNo,
/*  2502 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2503 */                 });
/*  2504 */                 if ($exc.length > 0) {
/*  2505 */                     $err = err;
/*  2506 */                     $blk = $exc.pop();
/*  2507 */                 } else {
/*  2508 */                     throw err;
/*  2509 */                 }
/*  2510 */             }
/*  2511 */         };
/*  2512 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2513 */             var susp = new Sk.misceval.Suspension();
/*  2514 */             susp.child = $child;
/*  2515 */             susp.resume = function() {
/*  2516 */                 $scope184.$wakingSuspension = susp;
/*  2517 */                 return $scope184();
/*  2518 */             };
/*  2519 */             susp.data = susp.child.data;
/*  2520 */             susp.$blk = $blk;
/*  2521 */             susp.$loc = $loc;
/*  2522 */             susp.$gbl = $gbl;
/*  2523 */             susp.$exc = $exc;
/*  2524 */             susp.$err = $err;
/*  2525 */             susp.$postfinally = $postfinally;
/*  2526 */             susp.$filename = $filename;
/*  2527 */             susp.$lineno = $lineno;
/*  2528 */             susp.$colno = $colno;
/*  2529 */             susp.optional = susp.child.optional;
/*  2530 */             susp.$tmps = {
/*  2531 */                 "self": self,
/*  2532 */                 "$loadgbl186": $loadgbl186
/*  2533 */             };
/*  2534 */             return susp;
/*  2535 */         };
/*  2536 */         var $blk = 0,
/*  2537 */             $exc = [],
/*  2538 */             $loc = {},
/*  2539 */             $gbl = this,
/*  2540 */             $err = undefined,
/*  2541 */             $ret = undefined,
/*  2542 */             $postfinally = undefined,
/*  2543 */             $currLineNo = undefined,
/*  2544 */             $currColNo = undefined;
/*  2545 */         if (typeof Sk.execStart === 'undefined') {
/*  2546 */             Sk.execStart = Date.now()
/*  2547 */         }
/*  2548 */         if (typeof Sk.lastYield === 'undefined') {
/*  2549 */             Sk.lastYield = Date.now()
/*  2550 */         }
/*  2551 */         if ($scope184.$wakingSuspension !== undefined) {
/*  2552 */             $wakeFromSuspension();
/*  2553 */         } else {
/*  2554 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  2555 */         }
/*  2556 */         while (true) {
/*  2557 */             try {
/*  2558 */                 var $dateNow = Date.now();
/*  2559 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2560 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2561 */                 }
/*  2562 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2563 */                     var $susp = $saveSuspension({
/*  2564 */                         data: {
/*  2565 */                             type: 'Sk.yield'
/*  2566 */                         },
/*  2567 */                         resume: function() {}
/*  2568 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  2569 */                     $susp.$blk = $blk;
/*  2570 */                     $susp.optional = true;
/*  2571 */                     return $susp;
/*  2572 */                 }
/*  2573 */                 switch ($blk) {
/*  2574 */                 case 0:
/*  2575 */                     /* --- codeobj entry --- */
/*  2576 */                     if (self === undefined) {
/*  2577 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2578 */                     }
/*  2579 */ 
/*  2580 */                     //
/*  2581 */                     // line 78:
/*  2582 */                     //         self.destination = I_HANDLERA
/*  2583 */                     //         ^
/*  2584 */                     //
/*  2585 */                     $currLineNo = 78;
/*  2586 */                     $currColNo = 8;
/*  2587 */ 
/*  2588 */                     var $loadgbl186 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/*  2589 */                     if (self === undefined) {
/*  2590 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2591 */                     }
/*  2592 */                     $ret = Sk.abstr.sattr(self, 'destination', $loadgbl186, true);
/*  2593 */                     $blk = 1; /* allowing case fallthrough */
/*  2594 */                 case 1:
/*  2595 */                     /* --- function return or resume suspension --- */
/*  2596 */                     if ($ret && $ret.$isSuspension) {
/*  2597 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 78, 8);
/*  2598 */                     }
/*  2599 */                     //
/*  2600 */                     // line 79:
/*  2601 */                     //         self.count = 0
/*  2602 */                     //         ^
/*  2603 */                     //
/*  2604 */                     $currLineNo = 79;
/*  2605 */                     $currColNo = 8;
/*  2606 */ 
/*  2607 */                     if (self === undefined) {
/*  2608 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2609 */                     }
/*  2610 */                     $ret = Sk.abstr.sattr(self, 'count', new Sk.builtin.int_(0), true);
/*  2611 */                     $blk = 2; /* allowing case fallthrough */
/*  2612 */                 case 2:
/*  2613 */                     /* --- function return or resume suspension --- */
/*  2614 */                     if ($ret && $ret.$isSuspension) {
/*  2615 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 79, 8);
/*  2616 */                     }
/*  2617 */                     return Sk.builtin.none.none$;
/*  2618 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2619 */                 }
/*  2620 */             } catch (err) {
/*  2621 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2622 */                     err = new Sk.builtin.ExternalError(err);
/*  2623 */                 }
/*  2624 */                 err.traceback.push({
/*  2625 */                     lineno: $currLineNo,
/*  2626 */                     colno: $currColNo,
/*  2627 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2628 */                 });
/*  2629 */                 if ($exc.length > 0) {
/*  2630 */                     $err = err;
/*  2631 */                     $blk = $exc.pop();
/*  2632 */                     continue;
/*  2633 */                 } else {
/*  2634 */                     throw err;
/*  2635 */                 }
/*  2636 */             }
/*  2637 */         }
/*  2638 */     });
/*  2639 */     var $scope190 = (function $TaskState$class_outer($globals, $locals, $rest) {
/*  2640 */         var $gbl = $globals,
/*  2641 */             $loc = $locals;
/*  2642 */         (function $TaskState$_closure() {
/*  2643 */             var $blk = 0,
/*  2644 */                 $exc = [],
/*  2645 */                 $ret = undefined,
/*  2646 */                 $postfinally = undefined,
/*  2647 */                 $currLineNo = undefined,
/*  2648 */                 $currColNo = undefined;
/*  2649 */             if (typeof Sk.execStart === 'undefined') {
/*  2650 */                 Sk.execStart = Date.now()
/*  2651 */             }
/*  2652 */             while (true) {
/*  2653 */                 try {
/*  2654 */                     var $dateNow = Date.now();
/*  2655 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2656 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2657 */                     }
/*  2658 */                     switch ($blk) {
/*  2659 */                     case 0:
/*  2660 */                         /* --- class entry --- */
/*  2661 */                         //
/*  2662 */                         // line 83:
/*  2663 */                         //     def __init__(self):
/*  2664 */                         //     ^
/*  2665 */                         //
/*  2666 */                         $currLineNo = 83;
/*  2667 */                         $currColNo = 4;
/*  2668 */ 
/*  2669 */                         $scope191.co_name = new Sk.builtins['str']('__init__');
/*  2670 */                         $scope191.co_varnames = ['self'];
/*  2671 */                         var $funcobj193 = new Sk.builtins['function']($scope191, $gbl);
/*  2672 */                         $loc.__init__ = $funcobj193;
/*  2673 */                         //
/*  2674 */                         // line 88:
/*  2675 */                         //     def packetPending(self):
/*  2676 */                         //     ^
/*  2677 */                         //
/*  2678 */                         $currLineNo = 88;
/*  2679 */                         $currColNo = 4;
/*  2680 */ 
/*  2681 */                         $scope194.co_name = new Sk.builtins['str']('packetPending');
/*  2682 */                         $scope194.co_varnames = ['self'];
/*  2683 */                         var $funcobj196 = new Sk.builtins['function']($scope194, $gbl);
/*  2684 */                         $loc.packetPending = $funcobj196;
/*  2685 */                         //
/*  2686 */                         // line 94:
/*  2687 */                         //     def waiting(self):
/*  2688 */                         //     ^
/*  2689 */                         //
/*  2690 */                         $currLineNo = 94;
/*  2691 */                         $currColNo = 4;
/*  2692 */ 
/*  2693 */                         $scope197.co_name = new Sk.builtins['str']('waiting');
/*  2694 */                         $scope197.co_varnames = ['self'];
/*  2695 */                         var $funcobj199 = new Sk.builtins['function']($scope197, $gbl);
/*  2696 */                         $loc.waiting = $funcobj199;
/*  2697 */                         //
/*  2698 */                         // line 100:
/*  2699 */                         //     def running(self):
/*  2700 */                         //     ^
/*  2701 */                         //
/*  2702 */                         $currLineNo = 100;
/*  2703 */                         $currColNo = 4;
/*  2704 */ 
/*  2705 */                         $scope200.co_name = new Sk.builtins['str']('running');
/*  2706 */                         $scope200.co_varnames = ['self'];
/*  2707 */                         var $funcobj202 = new Sk.builtins['function']($scope200, $gbl);
/*  2708 */                         $loc.running = $funcobj202;
/*  2709 */                         //
/*  2710 */                         // line 106:
/*  2711 */                         //     def waitingWithPacket(self):
/*  2712 */                         //     ^
/*  2713 */                         //
/*  2714 */                         $currLineNo = 106;
/*  2715 */                         $currColNo = 4;
/*  2716 */ 
/*  2717 */                         $scope203.co_name = new Sk.builtins['str']('waitingWithPacket');
/*  2718 */                         $scope203.co_varnames = ['self'];
/*  2719 */                         var $funcobj205 = new Sk.builtins['function']($scope203, $gbl);
/*  2720 */                         $loc.waitingWithPacket = $funcobj205;
/*  2721 */                         //
/*  2722 */                         // line 112:
/*  2723 */                         //     def isPacketPending(self):
/*  2724 */                         //     ^
/*  2725 */                         //
/*  2726 */                         $currLineNo = 112;
/*  2727 */                         $currColNo = 4;
/*  2728 */ 
/*  2729 */                         $scope206.co_name = new Sk.builtins['str']('isPacketPending');
/*  2730 */                         $scope206.co_varnames = ['self'];
/*  2731 */                         var $funcobj209 = new Sk.builtins['function']($scope206, $gbl);
/*  2732 */                         $loc.isPacketPending = $funcobj209;
/*  2733 */                         //
/*  2734 */                         // line 115:
/*  2735 */                         //     def isTaskWaiting(self):
/*  2736 */                         //     ^
/*  2737 */                         //
/*  2738 */                         $currLineNo = 115;
/*  2739 */                         $currColNo = 4;
/*  2740 */ 
/*  2741 */                         $scope210.co_name = new Sk.builtins['str']('isTaskWaiting');
/*  2742 */                         $scope210.co_varnames = ['self'];
/*  2743 */                         var $funcobj213 = new Sk.builtins['function']($scope210, $gbl);
/*  2744 */                         $loc.isTaskWaiting = $funcobj213;
/*  2745 */                         //
/*  2746 */                         // line 118:
/*  2747 */                         //     def isTaskHolding(self):
/*  2748 */                         //     ^
/*  2749 */                         //
/*  2750 */                         $currLineNo = 118;
/*  2751 */                         $currColNo = 4;
/*  2752 */ 
/*  2753 */                         $scope214.co_name = new Sk.builtins['str']('isTaskHolding');
/*  2754 */                         $scope214.co_varnames = ['self'];
/*  2755 */                         var $funcobj217 = new Sk.builtins['function']($scope214, $gbl);
/*  2756 */                         $loc.isTaskHolding = $funcobj217;
/*  2757 */                         //
/*  2758 */                         // line 121:
/*  2759 */                         //     def isTaskHoldingOrWaiting(self):
/*  2760 */                         //     ^
/*  2761 */                         //
/*  2762 */                         $currLineNo = 121;
/*  2763 */                         $currColNo = 4;
/*  2764 */ 
/*  2765 */                         $scope218.co_name = new Sk.builtins['str']('isTaskHoldingOrWaiting');
/*  2766 */                         $scope218.co_varnames = ['self'];
/*  2767 */                         var $funcobj230 = new Sk.builtins['function']($scope218, $gbl);
/*  2768 */                         $loc.isTaskHoldingOrWaiting = $funcobj230;
/*  2769 */                         //
/*  2770 */                         // line 124:
/*  2771 */                         //     def isWaitingWithPacket(self):
/*  2772 */                         //     ^
/*  2773 */                         //
/*  2774 */                         $currLineNo = 124;
/*  2775 */                         $currColNo = 4;
/*  2776 */ 
/*  2777 */                         $scope231.co_name = new Sk.builtins['str']('isWaitingWithPacket');
/*  2778 */                         $scope231.co_varnames = ['self'];
/*  2779 */                         var $funcobj241 = new Sk.builtins['function']($scope231, $gbl);
/*  2780 */                         $loc.isWaitingWithPacket = $funcobj241;
/*  2781 */                         return;
/*  2782 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2783 */                     }
/*  2784 */                 } catch (err) {
/*  2785 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  2786 */                         err = new Sk.builtin.ExternalError(err);
/*  2787 */                     }
/*  2788 */                     err.traceback.push({
/*  2789 */                         lineno: $currLineNo,
/*  2790 */                         colno: $currColNo,
/*  2791 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2792 */                     });
/*  2793 */                     if ($exc.length > 0) {
/*  2794 */                         $err = err;
/*  2795 */                         $blk = $exc.pop();
/*  2796 */                         continue;
/*  2797 */                     } else {
/*  2798 */                         throw err;
/*  2799 */                     }
/*  2800 */                 }
/*  2801 */             }
/*  2802 */         }).apply(null, $rest);
/*  2803 */     });
/*  2804 */     var $scope191 = (function $__init__192$(self) {
/*  2805 */         var self, self, self, self;
/*  2806 */         var $wakeFromSuspension = function() {
/*  2807 */             var susp = $scope191.$wakingSuspension;
/*  2808 */             delete $scope191.$wakingSuspension;
/*  2809 */             $blk = susp.$blk;
/*  2810 */             $loc = susp.$loc;
/*  2811 */             $gbl = susp.$gbl;
/*  2812 */             $exc = susp.$exc;
/*  2813 */             $err = susp.$err;
/*  2814 */             $postfinally = susp.$postfinally;
/*  2815 */             $currLineNo = susp.$lineno;
/*  2816 */             $currColNo = susp.$colno;
/*  2817 */             Sk.lastYield = Date.now();
/*  2818 */             self = susp.$tmps.self;
/*  2819 */             try {
/*  2820 */                 $ret = susp.child.resume();
/*  2821 */             } catch (err) {
/*  2822 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2823 */                     err = new Sk.builtin.ExternalError(err);
/*  2824 */                 }
/*  2825 */                 err.traceback.push({
/*  2826 */                     lineno: $currLineNo,
/*  2827 */                     colno: $currColNo,
/*  2828 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2829 */                 });
/*  2830 */                 if ($exc.length > 0) {
/*  2831 */                     $err = err;
/*  2832 */                     $blk = $exc.pop();
/*  2833 */                 } else {
/*  2834 */                     throw err;
/*  2835 */                 }
/*  2836 */             }
/*  2837 */         };
/*  2838 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2839 */             var susp = new Sk.misceval.Suspension();
/*  2840 */             susp.child = $child;
/*  2841 */             susp.resume = function() {
/*  2842 */                 $scope191.$wakingSuspension = susp;
/*  2843 */                 return $scope191();
/*  2844 */             };
/*  2845 */             susp.data = susp.child.data;
/*  2846 */             susp.$blk = $blk;
/*  2847 */             susp.$loc = $loc;
/*  2848 */             susp.$gbl = $gbl;
/*  2849 */             susp.$exc = $exc;
/*  2850 */             susp.$err = $err;
/*  2851 */             susp.$postfinally = $postfinally;
/*  2852 */             susp.$filename = $filename;
/*  2853 */             susp.$lineno = $lineno;
/*  2854 */             susp.$colno = $colno;
/*  2855 */             susp.optional = susp.child.optional;
/*  2856 */             susp.$tmps = {
/*  2857 */                 "self": self
/*  2858 */             };
/*  2859 */             return susp;
/*  2860 */         };
/*  2861 */         var $blk = 0,
/*  2862 */             $exc = [],
/*  2863 */             $loc = {},
/*  2864 */             $gbl = this,
/*  2865 */             $err = undefined,
/*  2866 */             $ret = undefined,
/*  2867 */             $postfinally = undefined,
/*  2868 */             $currLineNo = undefined,
/*  2869 */             $currColNo = undefined;
/*  2870 */         if (typeof Sk.execStart === 'undefined') {
/*  2871 */             Sk.execStart = Date.now()
/*  2872 */         }
/*  2873 */         if (typeof Sk.lastYield === 'undefined') {
/*  2874 */             Sk.lastYield = Date.now()
/*  2875 */         }
/*  2876 */         if ($scope191.$wakingSuspension !== undefined) {
/*  2877 */             $wakeFromSuspension();
/*  2878 */         } else {
/*  2879 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  2880 */         }
/*  2881 */         while (true) {
/*  2882 */             try {
/*  2883 */                 var $dateNow = Date.now();
/*  2884 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  2885 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2886 */                 }
/*  2887 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2888 */                     var $susp = $saveSuspension({
/*  2889 */                         data: {
/*  2890 */                             type: 'Sk.yield'
/*  2891 */                         },
/*  2892 */                         resume: function() {}
/*  2893 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  2894 */                     $susp.$blk = $blk;
/*  2895 */                     $susp.optional = true;
/*  2896 */                     return $susp;
/*  2897 */                 }
/*  2898 */                 switch ($blk) {
/*  2899 */                 case 0:
/*  2900 */                     /* --- codeobj entry --- */
/*  2901 */                     if (self === undefined) {
/*  2902 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2903 */                     }
/*  2904 */ 
/*  2905 */                     //
/*  2906 */                     // line 84:
/*  2907 */                     //         self.packet_pending = True
/*  2908 */                     //         ^
/*  2909 */                     //
/*  2910 */                     $currLineNo = 84;
/*  2911 */                     $currColNo = 8;
/*  2912 */ 
/*  2913 */                     if (self === undefined) {
/*  2914 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2915 */                     }
/*  2916 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  2917 */                     $blk = 1; /* allowing case fallthrough */
/*  2918 */                 case 1:
/*  2919 */                     /* --- function return or resume suspension --- */
/*  2920 */                     if ($ret && $ret.$isSuspension) {
/*  2921 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 84, 8);
/*  2922 */                     }
/*  2923 */                     //
/*  2924 */                     // line 85:
/*  2925 */                     //         self.task_waiting = False
/*  2926 */                     //         ^
/*  2927 */                     //
/*  2928 */                     $currLineNo = 85;
/*  2929 */                     $currColNo = 8;
/*  2930 */ 
/*  2931 */                     if (self === undefined) {
/*  2932 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2933 */                     }
/*  2934 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  2935 */                     $blk = 2; /* allowing case fallthrough */
/*  2936 */                 case 2:
/*  2937 */                     /* --- function return or resume suspension --- */
/*  2938 */                     if ($ret && $ret.$isSuspension) {
/*  2939 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 85, 8);
/*  2940 */                     }
/*  2941 */                     //
/*  2942 */                     // line 86:
/*  2943 */                     //         self.task_holding = False
/*  2944 */                     //         ^
/*  2945 */                     //
/*  2946 */                     $currLineNo = 86;
/*  2947 */                     $currColNo = 8;
/*  2948 */ 
/*  2949 */                     if (self === undefined) {
/*  2950 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2951 */                     }
/*  2952 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  2953 */                     $blk = 3; /* allowing case fallthrough */
/*  2954 */                 case 3:
/*  2955 */                     /* --- function return or resume suspension --- */
/*  2956 */                     if ($ret && $ret.$isSuspension) {
/*  2957 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 86, 8);
/*  2958 */                     }
/*  2959 */                     return Sk.builtin.none.none$;
/*  2960 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2961 */                 }
/*  2962 */             } catch (err) {
/*  2963 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2964 */                     err = new Sk.builtin.ExternalError(err);
/*  2965 */                 }
/*  2966 */                 err.traceback.push({
/*  2967 */                     lineno: $currLineNo,
/*  2968 */                     colno: $currColNo,
/*  2969 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2970 */                 });
/*  2971 */                 if ($exc.length > 0) {
/*  2972 */                     $err = err;
/*  2973 */                     $blk = $exc.pop();
/*  2974 */                     continue;
/*  2975 */                 } else {
/*  2976 */                     throw err;
/*  2977 */                 }
/*  2978 */             }
/*  2979 */         }
/*  2980 */     });
/*  2981 */     var $scope194 = (function $packetPending195$(self) {
/*  2982 */         var self, self, self, self, self;
/*  2983 */         var $wakeFromSuspension = function() {
/*  2984 */             var susp = $scope194.$wakingSuspension;
/*  2985 */             delete $scope194.$wakingSuspension;
/*  2986 */             $blk = susp.$blk;
/*  2987 */             $loc = susp.$loc;
/*  2988 */             $gbl = susp.$gbl;
/*  2989 */             $exc = susp.$exc;
/*  2990 */             $err = susp.$err;
/*  2991 */             $postfinally = susp.$postfinally;
/*  2992 */             $currLineNo = susp.$lineno;
/*  2993 */             $currColNo = susp.$colno;
/*  2994 */             Sk.lastYield = Date.now();
/*  2995 */             self = susp.$tmps.self;
/*  2996 */             try {
/*  2997 */                 $ret = susp.child.resume();
/*  2998 */             } catch (err) {
/*  2999 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3000 */                     err = new Sk.builtin.ExternalError(err);
/*  3001 */                 }
/*  3002 */                 err.traceback.push({
/*  3003 */                     lineno: $currLineNo,
/*  3004 */                     colno: $currColNo,
/*  3005 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3006 */                 });
/*  3007 */                 if ($exc.length > 0) {
/*  3008 */                     $err = err;
/*  3009 */                     $blk = $exc.pop();
/*  3010 */                 } else {
/*  3011 */                     throw err;
/*  3012 */                 }
/*  3013 */             }
/*  3014 */         };
/*  3015 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3016 */             var susp = new Sk.misceval.Suspension();
/*  3017 */             susp.child = $child;
/*  3018 */             susp.resume = function() {
/*  3019 */                 $scope194.$wakingSuspension = susp;
/*  3020 */                 return $scope194();
/*  3021 */             };
/*  3022 */             susp.data = susp.child.data;
/*  3023 */             susp.$blk = $blk;
/*  3024 */             susp.$loc = $loc;
/*  3025 */             susp.$gbl = $gbl;
/*  3026 */             susp.$exc = $exc;
/*  3027 */             susp.$err = $err;
/*  3028 */             susp.$postfinally = $postfinally;
/*  3029 */             susp.$filename = $filename;
/*  3030 */             susp.$lineno = $lineno;
/*  3031 */             susp.$colno = $colno;
/*  3032 */             susp.optional = susp.child.optional;
/*  3033 */             susp.$tmps = {
/*  3034 */                 "self": self
/*  3035 */             };
/*  3036 */             return susp;
/*  3037 */         };
/*  3038 */         var $blk = 0,
/*  3039 */             $exc = [],
/*  3040 */             $loc = {},
/*  3041 */             $gbl = this,
/*  3042 */             $err = undefined,
/*  3043 */             $ret = undefined,
/*  3044 */             $postfinally = undefined,
/*  3045 */             $currLineNo = undefined,
/*  3046 */             $currColNo = undefined;
/*  3047 */         if (typeof Sk.execStart === 'undefined') {
/*  3048 */             Sk.execStart = Date.now()
/*  3049 */         }
/*  3050 */         if (typeof Sk.lastYield === 'undefined') {
/*  3051 */             Sk.lastYield = Date.now()
/*  3052 */         }
/*  3053 */         if ($scope194.$wakingSuspension !== undefined) {
/*  3054 */             $wakeFromSuspension();
/*  3055 */         } else {
/*  3056 */             Sk.builtin.pyCheckArgs("packetPending", arguments, 1, 1, false, false);
/*  3057 */         }
/*  3058 */         while (true) {
/*  3059 */             try {
/*  3060 */                 var $dateNow = Date.now();
/*  3061 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3062 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3063 */                 }
/*  3064 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3065 */                     var $susp = $saveSuspension({
/*  3066 */                         data: {
/*  3067 */                             type: 'Sk.yield'
/*  3068 */                         },
/*  3069 */                         resume: function() {}
/*  3070 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3071 */                     $susp.$blk = $blk;
/*  3072 */                     $susp.optional = true;
/*  3073 */                     return $susp;
/*  3074 */                 }
/*  3075 */                 switch ($blk) {
/*  3076 */                 case 0:
/*  3077 */                     /* --- codeobj entry --- */
/*  3078 */                     if (self === undefined) {
/*  3079 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3080 */                     }
/*  3081 */ 
/*  3082 */                     //
/*  3083 */                     // line 89:
/*  3084 */                     //         self.packet_pending = True
/*  3085 */                     //         ^
/*  3086 */                     //
/*  3087 */                     $currLineNo = 89;
/*  3088 */                     $currColNo = 8;
/*  3089 */ 
/*  3090 */                     if (self === undefined) {
/*  3091 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3092 */                     }
/*  3093 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  3094 */                     $blk = 1; /* allowing case fallthrough */
/*  3095 */                 case 1:
/*  3096 */                     /* --- function return or resume suspension --- */
/*  3097 */                     if ($ret && $ret.$isSuspension) {
/*  3098 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 89, 8);
/*  3099 */                     }
/*  3100 */                     //
/*  3101 */                     // line 90:
/*  3102 */                     //         self.task_waiting = False
/*  3103 */                     //         ^
/*  3104 */                     //
/*  3105 */                     $currLineNo = 90;
/*  3106 */                     $currColNo = 8;
/*  3107 */ 
/*  3108 */                     if (self === undefined) {
/*  3109 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3110 */                     }
/*  3111 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  3112 */                     $blk = 2; /* allowing case fallthrough */
/*  3113 */                 case 2:
/*  3114 */                     /* --- function return or resume suspension --- */
/*  3115 */                     if ($ret && $ret.$isSuspension) {
/*  3116 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 90, 8);
/*  3117 */                     }
/*  3118 */                     //
/*  3119 */                     // line 91:
/*  3120 */                     //         self.task_holding = False
/*  3121 */                     //         ^
/*  3122 */                     //
/*  3123 */                     $currLineNo = 91;
/*  3124 */                     $currColNo = 8;
/*  3125 */ 
/*  3126 */                     if (self === undefined) {
/*  3127 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3128 */                     }
/*  3129 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3130 */                     $blk = 3; /* allowing case fallthrough */
/*  3131 */                 case 3:
/*  3132 */                     /* --- function return or resume suspension --- */
/*  3133 */                     if ($ret && $ret.$isSuspension) {
/*  3134 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 91, 8);
/*  3135 */                     }
/*  3136 */                     //
/*  3137 */                     // line 92:
/*  3138 */                     //         return self
/*  3139 */                     //         ^
/*  3140 */                     //
/*  3141 */                     $currLineNo = 92;
/*  3142 */                     $currColNo = 8;
/*  3143 */ 
/*  3144 */                     if (self === undefined) {
/*  3145 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3146 */                     }
/*  3147 */                     return self;
/*  3148 */                     return Sk.builtin.none.none$;
/*  3149 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3150 */                 }
/*  3151 */             } catch (err) {
/*  3152 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3153 */                     err = new Sk.builtin.ExternalError(err);
/*  3154 */                 }
/*  3155 */                 err.traceback.push({
/*  3156 */                     lineno: $currLineNo,
/*  3157 */                     colno: $currColNo,
/*  3158 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3159 */                 });
/*  3160 */                 if ($exc.length > 0) {
/*  3161 */                     $err = err;
/*  3162 */                     $blk = $exc.pop();
/*  3163 */                     continue;
/*  3164 */                 } else {
/*  3165 */                     throw err;
/*  3166 */                 }
/*  3167 */             }
/*  3168 */         }
/*  3169 */     });
/*  3170 */     var $scope197 = (function $waiting198$(self) {
/*  3171 */         var self, self, self, self, self;
/*  3172 */         var $wakeFromSuspension = function() {
/*  3173 */             var susp = $scope197.$wakingSuspension;
/*  3174 */             delete $scope197.$wakingSuspension;
/*  3175 */             $blk = susp.$blk;
/*  3176 */             $loc = susp.$loc;
/*  3177 */             $gbl = susp.$gbl;
/*  3178 */             $exc = susp.$exc;
/*  3179 */             $err = susp.$err;
/*  3180 */             $postfinally = susp.$postfinally;
/*  3181 */             $currLineNo = susp.$lineno;
/*  3182 */             $currColNo = susp.$colno;
/*  3183 */             Sk.lastYield = Date.now();
/*  3184 */             self = susp.$tmps.self;
/*  3185 */             try {
/*  3186 */                 $ret = susp.child.resume();
/*  3187 */             } catch (err) {
/*  3188 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3189 */                     err = new Sk.builtin.ExternalError(err);
/*  3190 */                 }
/*  3191 */                 err.traceback.push({
/*  3192 */                     lineno: $currLineNo,
/*  3193 */                     colno: $currColNo,
/*  3194 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3195 */                 });
/*  3196 */                 if ($exc.length > 0) {
/*  3197 */                     $err = err;
/*  3198 */                     $blk = $exc.pop();
/*  3199 */                 } else {
/*  3200 */                     throw err;
/*  3201 */                 }
/*  3202 */             }
/*  3203 */         };
/*  3204 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3205 */             var susp = new Sk.misceval.Suspension();
/*  3206 */             susp.child = $child;
/*  3207 */             susp.resume = function() {
/*  3208 */                 $scope197.$wakingSuspension = susp;
/*  3209 */                 return $scope197();
/*  3210 */             };
/*  3211 */             susp.data = susp.child.data;
/*  3212 */             susp.$blk = $blk;
/*  3213 */             susp.$loc = $loc;
/*  3214 */             susp.$gbl = $gbl;
/*  3215 */             susp.$exc = $exc;
/*  3216 */             susp.$err = $err;
/*  3217 */             susp.$postfinally = $postfinally;
/*  3218 */             susp.$filename = $filename;
/*  3219 */             susp.$lineno = $lineno;
/*  3220 */             susp.$colno = $colno;
/*  3221 */             susp.optional = susp.child.optional;
/*  3222 */             susp.$tmps = {
/*  3223 */                 "self": self
/*  3224 */             };
/*  3225 */             return susp;
/*  3226 */         };
/*  3227 */         var $blk = 0,
/*  3228 */             $exc = [],
/*  3229 */             $loc = {},
/*  3230 */             $gbl = this,
/*  3231 */             $err = undefined,
/*  3232 */             $ret = undefined,
/*  3233 */             $postfinally = undefined,
/*  3234 */             $currLineNo = undefined,
/*  3235 */             $currColNo = undefined;
/*  3236 */         if (typeof Sk.execStart === 'undefined') {
/*  3237 */             Sk.execStart = Date.now()
/*  3238 */         }
/*  3239 */         if (typeof Sk.lastYield === 'undefined') {
/*  3240 */             Sk.lastYield = Date.now()
/*  3241 */         }
/*  3242 */         if ($scope197.$wakingSuspension !== undefined) {
/*  3243 */             $wakeFromSuspension();
/*  3244 */         } else {
/*  3245 */             Sk.builtin.pyCheckArgs("waiting", arguments, 1, 1, false, false);
/*  3246 */         }
/*  3247 */         while (true) {
/*  3248 */             try {
/*  3249 */                 var $dateNow = Date.now();
/*  3250 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3251 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3252 */                 }
/*  3253 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3254 */                     var $susp = $saveSuspension({
/*  3255 */                         data: {
/*  3256 */                             type: 'Sk.yield'
/*  3257 */                         },
/*  3258 */                         resume: function() {}
/*  3259 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3260 */                     $susp.$blk = $blk;
/*  3261 */                     $susp.optional = true;
/*  3262 */                     return $susp;
/*  3263 */                 }
/*  3264 */                 switch ($blk) {
/*  3265 */                 case 0:
/*  3266 */                     /* --- codeobj entry --- */
/*  3267 */                     if (self === undefined) {
/*  3268 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3269 */                     }
/*  3270 */ 
/*  3271 */                     //
/*  3272 */                     // line 95:
/*  3273 */                     //         self.packet_pending = False
/*  3274 */                     //         ^
/*  3275 */                     //
/*  3276 */                     $currLineNo = 95;
/*  3277 */                     $currColNo = 8;
/*  3278 */ 
/*  3279 */                     if (self === undefined) {
/*  3280 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3281 */                     }
/*  3282 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.false$, true);
/*  3283 */                     $blk = 1; /* allowing case fallthrough */
/*  3284 */                 case 1:
/*  3285 */                     /* --- function return or resume suspension --- */
/*  3286 */                     if ($ret && $ret.$isSuspension) {
/*  3287 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 95, 8);
/*  3288 */                     }
/*  3289 */                     //
/*  3290 */                     // line 96:
/*  3291 */                     //         self.task_waiting = True
/*  3292 */                     //         ^
/*  3293 */                     //
/*  3294 */                     $currLineNo = 96;
/*  3295 */                     $currColNo = 8;
/*  3296 */ 
/*  3297 */                     if (self === undefined) {
/*  3298 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3299 */                     }
/*  3300 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  3301 */                     $blk = 2; /* allowing case fallthrough */
/*  3302 */                 case 2:
/*  3303 */                     /* --- function return or resume suspension --- */
/*  3304 */                     if ($ret && $ret.$isSuspension) {
/*  3305 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 96, 8);
/*  3306 */                     }
/*  3307 */                     //
/*  3308 */                     // line 97:
/*  3309 */                     //         self.task_holding = False
/*  3310 */                     //         ^
/*  3311 */                     //
/*  3312 */                     $currLineNo = 97;
/*  3313 */                     $currColNo = 8;
/*  3314 */ 
/*  3315 */                     if (self === undefined) {
/*  3316 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3317 */                     }
/*  3318 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3319 */                     $blk = 3; /* allowing case fallthrough */
/*  3320 */                 case 3:
/*  3321 */                     /* --- function return or resume suspension --- */
/*  3322 */                     if ($ret && $ret.$isSuspension) {
/*  3323 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 97, 8);
/*  3324 */                     }
/*  3325 */                     //
/*  3326 */                     // line 98:
/*  3327 */                     //         return self
/*  3328 */                     //         ^
/*  3329 */                     //
/*  3330 */                     $currLineNo = 98;
/*  3331 */                     $currColNo = 8;
/*  3332 */ 
/*  3333 */                     if (self === undefined) {
/*  3334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3335 */                     }
/*  3336 */                     return self;
/*  3337 */                     return Sk.builtin.none.none$;
/*  3338 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3339 */                 }
/*  3340 */             } catch (err) {
/*  3341 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3342 */                     err = new Sk.builtin.ExternalError(err);
/*  3343 */                 }
/*  3344 */                 err.traceback.push({
/*  3345 */                     lineno: $currLineNo,
/*  3346 */                     colno: $currColNo,
/*  3347 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3348 */                 });
/*  3349 */                 if ($exc.length > 0) {
/*  3350 */                     $err = err;
/*  3351 */                     $blk = $exc.pop();
/*  3352 */                     continue;
/*  3353 */                 } else {
/*  3354 */                     throw err;
/*  3355 */                 }
/*  3356 */             }
/*  3357 */         }
/*  3358 */     });
/*  3359 */     var $scope200 = (function $running201$(self) {
/*  3360 */         var self, self, self, self, self;
/*  3361 */         var $wakeFromSuspension = function() {
/*  3362 */             var susp = $scope200.$wakingSuspension;
/*  3363 */             delete $scope200.$wakingSuspension;
/*  3364 */             $blk = susp.$blk;
/*  3365 */             $loc = susp.$loc;
/*  3366 */             $gbl = susp.$gbl;
/*  3367 */             $exc = susp.$exc;
/*  3368 */             $err = susp.$err;
/*  3369 */             $postfinally = susp.$postfinally;
/*  3370 */             $currLineNo = susp.$lineno;
/*  3371 */             $currColNo = susp.$colno;
/*  3372 */             Sk.lastYield = Date.now();
/*  3373 */             self = susp.$tmps.self;
/*  3374 */             try {
/*  3375 */                 $ret = susp.child.resume();
/*  3376 */             } catch (err) {
/*  3377 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3378 */                     err = new Sk.builtin.ExternalError(err);
/*  3379 */                 }
/*  3380 */                 err.traceback.push({
/*  3381 */                     lineno: $currLineNo,
/*  3382 */                     colno: $currColNo,
/*  3383 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3384 */                 });
/*  3385 */                 if ($exc.length > 0) {
/*  3386 */                     $err = err;
/*  3387 */                     $blk = $exc.pop();
/*  3388 */                 } else {
/*  3389 */                     throw err;
/*  3390 */                 }
/*  3391 */             }
/*  3392 */         };
/*  3393 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3394 */             var susp = new Sk.misceval.Suspension();
/*  3395 */             susp.child = $child;
/*  3396 */             susp.resume = function() {
/*  3397 */                 $scope200.$wakingSuspension = susp;
/*  3398 */                 return $scope200();
/*  3399 */             };
/*  3400 */             susp.data = susp.child.data;
/*  3401 */             susp.$blk = $blk;
/*  3402 */             susp.$loc = $loc;
/*  3403 */             susp.$gbl = $gbl;
/*  3404 */             susp.$exc = $exc;
/*  3405 */             susp.$err = $err;
/*  3406 */             susp.$postfinally = $postfinally;
/*  3407 */             susp.$filename = $filename;
/*  3408 */             susp.$lineno = $lineno;
/*  3409 */             susp.$colno = $colno;
/*  3410 */             susp.optional = susp.child.optional;
/*  3411 */             susp.$tmps = {
/*  3412 */                 "self": self
/*  3413 */             };
/*  3414 */             return susp;
/*  3415 */         };
/*  3416 */         var $blk = 0,
/*  3417 */             $exc = [],
/*  3418 */             $loc = {},
/*  3419 */             $gbl = this,
/*  3420 */             $err = undefined,
/*  3421 */             $ret = undefined,
/*  3422 */             $postfinally = undefined,
/*  3423 */             $currLineNo = undefined,
/*  3424 */             $currColNo = undefined;
/*  3425 */         if (typeof Sk.execStart === 'undefined') {
/*  3426 */             Sk.execStart = Date.now()
/*  3427 */         }
/*  3428 */         if (typeof Sk.lastYield === 'undefined') {
/*  3429 */             Sk.lastYield = Date.now()
/*  3430 */         }
/*  3431 */         if ($scope200.$wakingSuspension !== undefined) {
/*  3432 */             $wakeFromSuspension();
/*  3433 */         } else {
/*  3434 */             Sk.builtin.pyCheckArgs("running", arguments, 1, 1, false, false);
/*  3435 */         }
/*  3436 */         while (true) {
/*  3437 */             try {
/*  3438 */                 var $dateNow = Date.now();
/*  3439 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3440 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3441 */                 }
/*  3442 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3443 */                     var $susp = $saveSuspension({
/*  3444 */                         data: {
/*  3445 */                             type: 'Sk.yield'
/*  3446 */                         },
/*  3447 */                         resume: function() {}
/*  3448 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3449 */                     $susp.$blk = $blk;
/*  3450 */                     $susp.optional = true;
/*  3451 */                     return $susp;
/*  3452 */                 }
/*  3453 */                 switch ($blk) {
/*  3454 */                 case 0:
/*  3455 */                     /* --- codeobj entry --- */
/*  3456 */                     if (self === undefined) {
/*  3457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3458 */                     }
/*  3459 */ 
/*  3460 */                     //
/*  3461 */                     // line 101:
/*  3462 */                     //         self.packet_pending = False
/*  3463 */                     //         ^
/*  3464 */                     //
/*  3465 */                     $currLineNo = 101;
/*  3466 */                     $currColNo = 8;
/*  3467 */ 
/*  3468 */                     if (self === undefined) {
/*  3469 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3470 */                     }
/*  3471 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.false$, true);
/*  3472 */                     $blk = 1; /* allowing case fallthrough */
/*  3473 */                 case 1:
/*  3474 */                     /* --- function return or resume suspension --- */
/*  3475 */                     if ($ret && $ret.$isSuspension) {
/*  3476 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 101, 8);
/*  3477 */                     }
/*  3478 */                     //
/*  3479 */                     // line 102:
/*  3480 */                     //         self.task_waiting = False
/*  3481 */                     //         ^
/*  3482 */                     //
/*  3483 */                     $currLineNo = 102;
/*  3484 */                     $currColNo = 8;
/*  3485 */ 
/*  3486 */                     if (self === undefined) {
/*  3487 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3488 */                     }
/*  3489 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  3490 */                     $blk = 2; /* allowing case fallthrough */
/*  3491 */                 case 2:
/*  3492 */                     /* --- function return or resume suspension --- */
/*  3493 */                     if ($ret && $ret.$isSuspension) {
/*  3494 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 102, 8);
/*  3495 */                     }
/*  3496 */                     //
/*  3497 */                     // line 103:
/*  3498 */                     //         self.task_holding = False
/*  3499 */                     //         ^
/*  3500 */                     //
/*  3501 */                     $currLineNo = 103;
/*  3502 */                     $currColNo = 8;
/*  3503 */ 
/*  3504 */                     if (self === undefined) {
/*  3505 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3506 */                     }
/*  3507 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3508 */                     $blk = 3; /* allowing case fallthrough */
/*  3509 */                 case 3:
/*  3510 */                     /* --- function return or resume suspension --- */
/*  3511 */                     if ($ret && $ret.$isSuspension) {
/*  3512 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 103, 8);
/*  3513 */                     }
/*  3514 */                     //
/*  3515 */                     // line 104:
/*  3516 */                     //         return self
/*  3517 */                     //         ^
/*  3518 */                     //
/*  3519 */                     $currLineNo = 104;
/*  3520 */                     $currColNo = 8;
/*  3521 */ 
/*  3522 */                     if (self === undefined) {
/*  3523 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3524 */                     }
/*  3525 */                     return self;
/*  3526 */                     return Sk.builtin.none.none$;
/*  3527 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3528 */                 }
/*  3529 */             } catch (err) {
/*  3530 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3531 */                     err = new Sk.builtin.ExternalError(err);
/*  3532 */                 }
/*  3533 */                 err.traceback.push({
/*  3534 */                     lineno: $currLineNo,
/*  3535 */                     colno: $currColNo,
/*  3536 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3537 */                 });
/*  3538 */                 if ($exc.length > 0) {
/*  3539 */                     $err = err;
/*  3540 */                     $blk = $exc.pop();
/*  3541 */                     continue;
/*  3542 */                 } else {
/*  3543 */                     throw err;
/*  3544 */                 }
/*  3545 */             }
/*  3546 */         }
/*  3547 */     });
/*  3548 */     var $scope203 = (function $waitingWithPacket204$(self) {
/*  3549 */         var self, self, self, self, self;
/*  3550 */         var $wakeFromSuspension = function() {
/*  3551 */             var susp = $scope203.$wakingSuspension;
/*  3552 */             delete $scope203.$wakingSuspension;
/*  3553 */             $blk = susp.$blk;
/*  3554 */             $loc = susp.$loc;
/*  3555 */             $gbl = susp.$gbl;
/*  3556 */             $exc = susp.$exc;
/*  3557 */             $err = susp.$err;
/*  3558 */             $postfinally = susp.$postfinally;
/*  3559 */             $currLineNo = susp.$lineno;
/*  3560 */             $currColNo = susp.$colno;
/*  3561 */             Sk.lastYield = Date.now();
/*  3562 */             self = susp.$tmps.self;
/*  3563 */             try {
/*  3564 */                 $ret = susp.child.resume();
/*  3565 */             } catch (err) {
/*  3566 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3567 */                     err = new Sk.builtin.ExternalError(err);
/*  3568 */                 }
/*  3569 */                 err.traceback.push({
/*  3570 */                     lineno: $currLineNo,
/*  3571 */                     colno: $currColNo,
/*  3572 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3573 */                 });
/*  3574 */                 if ($exc.length > 0) {
/*  3575 */                     $err = err;
/*  3576 */                     $blk = $exc.pop();
/*  3577 */                 } else {
/*  3578 */                     throw err;
/*  3579 */                 }
/*  3580 */             }
/*  3581 */         };
/*  3582 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3583 */             var susp = new Sk.misceval.Suspension();
/*  3584 */             susp.child = $child;
/*  3585 */             susp.resume = function() {
/*  3586 */                 $scope203.$wakingSuspension = susp;
/*  3587 */                 return $scope203();
/*  3588 */             };
/*  3589 */             susp.data = susp.child.data;
/*  3590 */             susp.$blk = $blk;
/*  3591 */             susp.$loc = $loc;
/*  3592 */             susp.$gbl = $gbl;
/*  3593 */             susp.$exc = $exc;
/*  3594 */             susp.$err = $err;
/*  3595 */             susp.$postfinally = $postfinally;
/*  3596 */             susp.$filename = $filename;
/*  3597 */             susp.$lineno = $lineno;
/*  3598 */             susp.$colno = $colno;
/*  3599 */             susp.optional = susp.child.optional;
/*  3600 */             susp.$tmps = {
/*  3601 */                 "self": self
/*  3602 */             };
/*  3603 */             return susp;
/*  3604 */         };
/*  3605 */         var $blk = 0,
/*  3606 */             $exc = [],
/*  3607 */             $loc = {},
/*  3608 */             $gbl = this,
/*  3609 */             $err = undefined,
/*  3610 */             $ret = undefined,
/*  3611 */             $postfinally = undefined,
/*  3612 */             $currLineNo = undefined,
/*  3613 */             $currColNo = undefined;
/*  3614 */         if (typeof Sk.execStart === 'undefined') {
/*  3615 */             Sk.execStart = Date.now()
/*  3616 */         }
/*  3617 */         if (typeof Sk.lastYield === 'undefined') {
/*  3618 */             Sk.lastYield = Date.now()
/*  3619 */         }
/*  3620 */         if ($scope203.$wakingSuspension !== undefined) {
/*  3621 */             $wakeFromSuspension();
/*  3622 */         } else {
/*  3623 */             Sk.builtin.pyCheckArgs("waitingWithPacket", arguments, 1, 1, false, false);
/*  3624 */         }
/*  3625 */         while (true) {
/*  3626 */             try {
/*  3627 */                 var $dateNow = Date.now();
/*  3628 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3629 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3630 */                 }
/*  3631 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3632 */                     var $susp = $saveSuspension({
/*  3633 */                         data: {
/*  3634 */                             type: 'Sk.yield'
/*  3635 */                         },
/*  3636 */                         resume: function() {}
/*  3637 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3638 */                     $susp.$blk = $blk;
/*  3639 */                     $susp.optional = true;
/*  3640 */                     return $susp;
/*  3641 */                 }
/*  3642 */                 switch ($blk) {
/*  3643 */                 case 0:
/*  3644 */                     /* --- codeobj entry --- */
/*  3645 */                     if (self === undefined) {
/*  3646 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3647 */                     }
/*  3648 */ 
/*  3649 */                     //
/*  3650 */                     // line 107:
/*  3651 */                     //         self.packet_pending = True
/*  3652 */                     //         ^
/*  3653 */                     //
/*  3654 */                     $currLineNo = 107;
/*  3655 */                     $currColNo = 8;
/*  3656 */ 
/*  3657 */                     if (self === undefined) {
/*  3658 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3659 */                     }
/*  3660 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  3661 */                     $blk = 1; /* allowing case fallthrough */
/*  3662 */                 case 1:
/*  3663 */                     /* --- function return or resume suspension --- */
/*  3664 */                     if ($ret && $ret.$isSuspension) {
/*  3665 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 107, 8);
/*  3666 */                     }
/*  3667 */                     //
/*  3668 */                     // line 108:
/*  3669 */                     //         self.task_waiting = True
/*  3670 */                     //         ^
/*  3671 */                     //
/*  3672 */                     $currLineNo = 108;
/*  3673 */                     $currColNo = 8;
/*  3674 */ 
/*  3675 */                     if (self === undefined) {
/*  3676 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3677 */                     }
/*  3678 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  3679 */                     $blk = 2; /* allowing case fallthrough */
/*  3680 */                 case 2:
/*  3681 */                     /* --- function return or resume suspension --- */
/*  3682 */                     if ($ret && $ret.$isSuspension) {
/*  3683 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 108, 8);
/*  3684 */                     }
/*  3685 */                     //
/*  3686 */                     // line 109:
/*  3687 */                     //         self.task_holding = False
/*  3688 */                     //         ^
/*  3689 */                     //
/*  3690 */                     $currLineNo = 109;
/*  3691 */                     $currColNo = 8;
/*  3692 */ 
/*  3693 */                     if (self === undefined) {
/*  3694 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3695 */                     }
/*  3696 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3697 */                     $blk = 3; /* allowing case fallthrough */
/*  3698 */                 case 3:
/*  3699 */                     /* --- function return or resume suspension --- */
/*  3700 */                     if ($ret && $ret.$isSuspension) {
/*  3701 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 109, 8);
/*  3702 */                     }
/*  3703 */                     //
/*  3704 */                     // line 110:
/*  3705 */                     //         return self
/*  3706 */                     //         ^
/*  3707 */                     //
/*  3708 */                     $currLineNo = 110;
/*  3709 */                     $currColNo = 8;
/*  3710 */ 
/*  3711 */                     if (self === undefined) {
/*  3712 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3713 */                     }
/*  3714 */                     return self;
/*  3715 */                     return Sk.builtin.none.none$;
/*  3716 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3717 */                 }
/*  3718 */             } catch (err) {
/*  3719 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3720 */                     err = new Sk.builtin.ExternalError(err);
/*  3721 */                 }
/*  3722 */                 err.traceback.push({
/*  3723 */                     lineno: $currLineNo,
/*  3724 */                     colno: $currColNo,
/*  3725 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3726 */                 });
/*  3727 */                 if ($exc.length > 0) {
/*  3728 */                     $err = err;
/*  3729 */                     $blk = $exc.pop();
/*  3730 */                     continue;
/*  3731 */                 } else {
/*  3732 */                     throw err;
/*  3733 */                 }
/*  3734 */             }
/*  3735 */         }
/*  3736 */     });
/*  3737 */     var $scope206 = (function $isPacketPending207$(self) {
/*  3738 */         var self, self;
/*  3739 */         var $wakeFromSuspension = function() {
/*  3740 */             var susp = $scope206.$wakingSuspension;
/*  3741 */             delete $scope206.$wakingSuspension;
/*  3742 */             $blk = susp.$blk;
/*  3743 */             $loc = susp.$loc;
/*  3744 */             $gbl = susp.$gbl;
/*  3745 */             $exc = susp.$exc;
/*  3746 */             $err = susp.$err;
/*  3747 */             $postfinally = susp.$postfinally;
/*  3748 */             $currLineNo = susp.$lineno;
/*  3749 */             $currColNo = susp.$colno;
/*  3750 */             Sk.lastYield = Date.now();
/*  3751 */             self = susp.$tmps.self;
/*  3752 */             try {
/*  3753 */                 $ret = susp.child.resume();
/*  3754 */             } catch (err) {
/*  3755 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3756 */                     err = new Sk.builtin.ExternalError(err);
/*  3757 */                 }
/*  3758 */                 err.traceback.push({
/*  3759 */                     lineno: $currLineNo,
/*  3760 */                     colno: $currColNo,
/*  3761 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3762 */                 });
/*  3763 */                 if ($exc.length > 0) {
/*  3764 */                     $err = err;
/*  3765 */                     $blk = $exc.pop();
/*  3766 */                 } else {
/*  3767 */                     throw err;
/*  3768 */                 }
/*  3769 */             }
/*  3770 */         };
/*  3771 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3772 */             var susp = new Sk.misceval.Suspension();
/*  3773 */             susp.child = $child;
/*  3774 */             susp.resume = function() {
/*  3775 */                 $scope206.$wakingSuspension = susp;
/*  3776 */                 return $scope206();
/*  3777 */             };
/*  3778 */             susp.data = susp.child.data;
/*  3779 */             susp.$blk = $blk;
/*  3780 */             susp.$loc = $loc;
/*  3781 */             susp.$gbl = $gbl;
/*  3782 */             susp.$exc = $exc;
/*  3783 */             susp.$err = $err;
/*  3784 */             susp.$postfinally = $postfinally;
/*  3785 */             susp.$filename = $filename;
/*  3786 */             susp.$lineno = $lineno;
/*  3787 */             susp.$colno = $colno;
/*  3788 */             susp.optional = susp.child.optional;
/*  3789 */             susp.$tmps = {
/*  3790 */                 "self": self
/*  3791 */             };
/*  3792 */             return susp;
/*  3793 */         };
/*  3794 */         var $blk = 0,
/*  3795 */             $exc = [],
/*  3796 */             $loc = {},
/*  3797 */             $gbl = this,
/*  3798 */             $err = undefined,
/*  3799 */             $ret = undefined,
/*  3800 */             $postfinally = undefined,
/*  3801 */             $currLineNo = undefined,
/*  3802 */             $currColNo = undefined;
/*  3803 */         if (typeof Sk.execStart === 'undefined') {
/*  3804 */             Sk.execStart = Date.now()
/*  3805 */         }
/*  3806 */         if (typeof Sk.lastYield === 'undefined') {
/*  3807 */             Sk.lastYield = Date.now()
/*  3808 */         }
/*  3809 */         if ($scope206.$wakingSuspension !== undefined) {
/*  3810 */             $wakeFromSuspension();
/*  3811 */         } else {
/*  3812 */             Sk.builtin.pyCheckArgs("isPacketPending", arguments, 1, 1, false, false);
/*  3813 */         }
/*  3814 */         while (true) {
/*  3815 */             try {
/*  3816 */                 var $dateNow = Date.now();
/*  3817 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3818 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3819 */                 }
/*  3820 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3821 */                     var $susp = $saveSuspension({
/*  3822 */                         data: {
/*  3823 */                             type: 'Sk.yield'
/*  3824 */                         },
/*  3825 */                         resume: function() {}
/*  3826 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3827 */                     $susp.$blk = $blk;
/*  3828 */                     $susp.optional = true;
/*  3829 */                     return $susp;
/*  3830 */                 }
/*  3831 */                 switch ($blk) {
/*  3832 */                 case 0:
/*  3833 */                     /* --- codeobj entry --- */
/*  3834 */                     if (self === undefined) {
/*  3835 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3836 */                     }
/*  3837 */ 
/*  3838 */                     //
/*  3839 */                     // line 113:
/*  3840 */                     //         return self.packet_pending
/*  3841 */                     //         ^
/*  3842 */                     //
/*  3843 */                     $currLineNo = 113;
/*  3844 */                     $currColNo = 8;
/*  3845 */ 
/*  3846 */                     if (self === undefined) {
/*  3847 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3848 */                     }
/*  3849 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  3850 */                     $blk = 1; /* allowing case fallthrough */
/*  3851 */                 case 1:
/*  3852 */                     /* --- function return or resume suspension --- */
/*  3853 */                     if ($ret && $ret.$isSuspension) {
/*  3854 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 113, 15);
/*  3855 */                     }
/*  3856 */                     var $lattr208 = $ret;
/*  3857 */                     return $lattr208;
/*  3858 */                     return Sk.builtin.none.none$;
/*  3859 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3860 */                 }
/*  3861 */             } catch (err) {
/*  3862 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3863 */                     err = new Sk.builtin.ExternalError(err);
/*  3864 */                 }
/*  3865 */                 err.traceback.push({
/*  3866 */                     lineno: $currLineNo,
/*  3867 */                     colno: $currColNo,
/*  3868 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3869 */                 });
/*  3870 */                 if ($exc.length > 0) {
/*  3871 */                     $err = err;
/*  3872 */                     $blk = $exc.pop();
/*  3873 */                     continue;
/*  3874 */                 } else {
/*  3875 */                     throw err;
/*  3876 */                 }
/*  3877 */             }
/*  3878 */         }
/*  3879 */     });
/*  3880 */     var $scope210 = (function $isTaskWaiting211$(self) {
/*  3881 */         var self, self;
/*  3882 */         var $wakeFromSuspension = function() {
/*  3883 */             var susp = $scope210.$wakingSuspension;
/*  3884 */             delete $scope210.$wakingSuspension;
/*  3885 */             $blk = susp.$blk;
/*  3886 */             $loc = susp.$loc;
/*  3887 */             $gbl = susp.$gbl;
/*  3888 */             $exc = susp.$exc;
/*  3889 */             $err = susp.$err;
/*  3890 */             $postfinally = susp.$postfinally;
/*  3891 */             $currLineNo = susp.$lineno;
/*  3892 */             $currColNo = susp.$colno;
/*  3893 */             Sk.lastYield = Date.now();
/*  3894 */             self = susp.$tmps.self;
/*  3895 */             try {
/*  3896 */                 $ret = susp.child.resume();
/*  3897 */             } catch (err) {
/*  3898 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3899 */                     err = new Sk.builtin.ExternalError(err);
/*  3900 */                 }
/*  3901 */                 err.traceback.push({
/*  3902 */                     lineno: $currLineNo,
/*  3903 */                     colno: $currColNo,
/*  3904 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3905 */                 });
/*  3906 */                 if ($exc.length > 0) {
/*  3907 */                     $err = err;
/*  3908 */                     $blk = $exc.pop();
/*  3909 */                 } else {
/*  3910 */                     throw err;
/*  3911 */                 }
/*  3912 */             }
/*  3913 */         };
/*  3914 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3915 */             var susp = new Sk.misceval.Suspension();
/*  3916 */             susp.child = $child;
/*  3917 */             susp.resume = function() {
/*  3918 */                 $scope210.$wakingSuspension = susp;
/*  3919 */                 return $scope210();
/*  3920 */             };
/*  3921 */             susp.data = susp.child.data;
/*  3922 */             susp.$blk = $blk;
/*  3923 */             susp.$loc = $loc;
/*  3924 */             susp.$gbl = $gbl;
/*  3925 */             susp.$exc = $exc;
/*  3926 */             susp.$err = $err;
/*  3927 */             susp.$postfinally = $postfinally;
/*  3928 */             susp.$filename = $filename;
/*  3929 */             susp.$lineno = $lineno;
/*  3930 */             susp.$colno = $colno;
/*  3931 */             susp.optional = susp.child.optional;
/*  3932 */             susp.$tmps = {
/*  3933 */                 "self": self
/*  3934 */             };
/*  3935 */             return susp;
/*  3936 */         };
/*  3937 */         var $blk = 0,
/*  3938 */             $exc = [],
/*  3939 */             $loc = {},
/*  3940 */             $gbl = this,
/*  3941 */             $err = undefined,
/*  3942 */             $ret = undefined,
/*  3943 */             $postfinally = undefined,
/*  3944 */             $currLineNo = undefined,
/*  3945 */             $currColNo = undefined;
/*  3946 */         if (typeof Sk.execStart === 'undefined') {
/*  3947 */             Sk.execStart = Date.now()
/*  3948 */         }
/*  3949 */         if (typeof Sk.lastYield === 'undefined') {
/*  3950 */             Sk.lastYield = Date.now()
/*  3951 */         }
/*  3952 */         if ($scope210.$wakingSuspension !== undefined) {
/*  3953 */             $wakeFromSuspension();
/*  3954 */         } else {
/*  3955 */             Sk.builtin.pyCheckArgs("isTaskWaiting", arguments, 1, 1, false, false);
/*  3956 */         }
/*  3957 */         while (true) {
/*  3958 */             try {
/*  3959 */                 var $dateNow = Date.now();
/*  3960 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  3961 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  3962 */                 }
/*  3963 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  3964 */                     var $susp = $saveSuspension({
/*  3965 */                         data: {
/*  3966 */                             type: 'Sk.yield'
/*  3967 */                         },
/*  3968 */                         resume: function() {}
/*  3969 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  3970 */                     $susp.$blk = $blk;
/*  3971 */                     $susp.optional = true;
/*  3972 */                     return $susp;
/*  3973 */                 }
/*  3974 */                 switch ($blk) {
/*  3975 */                 case 0:
/*  3976 */                     /* --- codeobj entry --- */
/*  3977 */                     if (self === undefined) {
/*  3978 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3979 */                     }
/*  3980 */ 
/*  3981 */                     //
/*  3982 */                     // line 116:
/*  3983 */                     //         return self.task_waiting
/*  3984 */                     //         ^
/*  3985 */                     //
/*  3986 */                     $currLineNo = 116;
/*  3987 */                     $currColNo = 8;
/*  3988 */ 
/*  3989 */                     if (self === undefined) {
/*  3990 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3991 */                     }
/*  3992 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  3993 */                     $blk = 1; /* allowing case fallthrough */
/*  3994 */                 case 1:
/*  3995 */                     /* --- function return or resume suspension --- */
/*  3996 */                     if ($ret && $ret.$isSuspension) {
/*  3997 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 116, 15);
/*  3998 */                     }
/*  3999 */                     var $lattr212 = $ret;
/*  4000 */                     return $lattr212;
/*  4001 */                     return Sk.builtin.none.none$;
/*  4002 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4003 */                 }
/*  4004 */             } catch (err) {
/*  4005 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4006 */                     err = new Sk.builtin.ExternalError(err);
/*  4007 */                 }
/*  4008 */                 err.traceback.push({
/*  4009 */                     lineno: $currLineNo,
/*  4010 */                     colno: $currColNo,
/*  4011 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4012 */                 });
/*  4013 */                 if ($exc.length > 0) {
/*  4014 */                     $err = err;
/*  4015 */                     $blk = $exc.pop();
/*  4016 */                     continue;
/*  4017 */                 } else {
/*  4018 */                     throw err;
/*  4019 */                 }
/*  4020 */             }
/*  4021 */         }
/*  4022 */     });
/*  4023 */     var $scope214 = (function $isTaskHolding215$(self) {
/*  4024 */         var self, self;
/*  4025 */         var $wakeFromSuspension = function() {
/*  4026 */             var susp = $scope214.$wakingSuspension;
/*  4027 */             delete $scope214.$wakingSuspension;
/*  4028 */             $blk = susp.$blk;
/*  4029 */             $loc = susp.$loc;
/*  4030 */             $gbl = susp.$gbl;
/*  4031 */             $exc = susp.$exc;
/*  4032 */             $err = susp.$err;
/*  4033 */             $postfinally = susp.$postfinally;
/*  4034 */             $currLineNo = susp.$lineno;
/*  4035 */             $currColNo = susp.$colno;
/*  4036 */             Sk.lastYield = Date.now();
/*  4037 */             self = susp.$tmps.self;
/*  4038 */             try {
/*  4039 */                 $ret = susp.child.resume();
/*  4040 */             } catch (err) {
/*  4041 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4042 */                     err = new Sk.builtin.ExternalError(err);
/*  4043 */                 }
/*  4044 */                 err.traceback.push({
/*  4045 */                     lineno: $currLineNo,
/*  4046 */                     colno: $currColNo,
/*  4047 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4048 */                 });
/*  4049 */                 if ($exc.length > 0) {
/*  4050 */                     $err = err;
/*  4051 */                     $blk = $exc.pop();
/*  4052 */                 } else {
/*  4053 */                     throw err;
/*  4054 */                 }
/*  4055 */             }
/*  4056 */         };
/*  4057 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4058 */             var susp = new Sk.misceval.Suspension();
/*  4059 */             susp.child = $child;
/*  4060 */             susp.resume = function() {
/*  4061 */                 $scope214.$wakingSuspension = susp;
/*  4062 */                 return $scope214();
/*  4063 */             };
/*  4064 */             susp.data = susp.child.data;
/*  4065 */             susp.$blk = $blk;
/*  4066 */             susp.$loc = $loc;
/*  4067 */             susp.$gbl = $gbl;
/*  4068 */             susp.$exc = $exc;
/*  4069 */             susp.$err = $err;
/*  4070 */             susp.$postfinally = $postfinally;
/*  4071 */             susp.$filename = $filename;
/*  4072 */             susp.$lineno = $lineno;
/*  4073 */             susp.$colno = $colno;
/*  4074 */             susp.optional = susp.child.optional;
/*  4075 */             susp.$tmps = {
/*  4076 */                 "self": self
/*  4077 */             };
/*  4078 */             return susp;
/*  4079 */         };
/*  4080 */         var $blk = 0,
/*  4081 */             $exc = [],
/*  4082 */             $loc = {},
/*  4083 */             $gbl = this,
/*  4084 */             $err = undefined,
/*  4085 */             $ret = undefined,
/*  4086 */             $postfinally = undefined,
/*  4087 */             $currLineNo = undefined,
/*  4088 */             $currColNo = undefined;
/*  4089 */         if (typeof Sk.execStart === 'undefined') {
/*  4090 */             Sk.execStart = Date.now()
/*  4091 */         }
/*  4092 */         if (typeof Sk.lastYield === 'undefined') {
/*  4093 */             Sk.lastYield = Date.now()
/*  4094 */         }
/*  4095 */         if ($scope214.$wakingSuspension !== undefined) {
/*  4096 */             $wakeFromSuspension();
/*  4097 */         } else {
/*  4098 */             Sk.builtin.pyCheckArgs("isTaskHolding", arguments, 1, 1, false, false);
/*  4099 */         }
/*  4100 */         while (true) {
/*  4101 */             try {
/*  4102 */                 var $dateNow = Date.now();
/*  4103 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4104 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4105 */                 }
/*  4106 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4107 */                     var $susp = $saveSuspension({
/*  4108 */                         data: {
/*  4109 */                             type: 'Sk.yield'
/*  4110 */                         },
/*  4111 */                         resume: function() {}
/*  4112 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  4113 */                     $susp.$blk = $blk;
/*  4114 */                     $susp.optional = true;
/*  4115 */                     return $susp;
/*  4116 */                 }
/*  4117 */                 switch ($blk) {
/*  4118 */                 case 0:
/*  4119 */                     /* --- codeobj entry --- */
/*  4120 */                     if (self === undefined) {
/*  4121 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4122 */                     }
/*  4123 */ 
/*  4124 */                     //
/*  4125 */                     // line 119:
/*  4126 */                     //         return self.task_holding
/*  4127 */                     //         ^
/*  4128 */                     //
/*  4129 */                     $currLineNo = 119;
/*  4130 */                     $currColNo = 8;
/*  4131 */ 
/*  4132 */                     if (self === undefined) {
/*  4133 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4134 */                     }
/*  4135 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  4136 */                     $blk = 1; /* allowing case fallthrough */
/*  4137 */                 case 1:
/*  4138 */                     /* --- function return or resume suspension --- */
/*  4139 */                     if ($ret && $ret.$isSuspension) {
/*  4140 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 119, 15);
/*  4141 */                     }
/*  4142 */                     var $lattr216 = $ret;
/*  4143 */                     return $lattr216;
/*  4144 */                     return Sk.builtin.none.none$;
/*  4145 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4146 */                 }
/*  4147 */             } catch (err) {
/*  4148 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4149 */                     err = new Sk.builtin.ExternalError(err);
/*  4150 */                 }
/*  4151 */                 err.traceback.push({
/*  4152 */                     lineno: $currLineNo,
/*  4153 */                     colno: $currColNo,
/*  4154 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4155 */                 });
/*  4156 */                 if ($exc.length > 0) {
/*  4157 */                     $err = err;
/*  4158 */                     $blk = $exc.pop();
/*  4159 */                     continue;
/*  4160 */                 } else {
/*  4161 */                     throw err;
/*  4162 */                 }
/*  4163 */             }
/*  4164 */         }
/*  4165 */     });
/*  4166 */     var $scope218 = (function $isTaskHoldingOrWaiting219$(self) {
/*  4167 */         var self, self, self, self, $lattr220, $boolopsucc221, $jtrue222, $lattr220, $boolopsucc221, $jtrue222, $lattr223, $unaryop224, $boolopsucc225, $jfalse226;
/*  4168 */         var $wakeFromSuspension = function() {
/*  4169 */             var susp = $scope218.$wakingSuspension;
/*  4170 */             delete $scope218.$wakingSuspension;
/*  4171 */             $blk = susp.$blk;
/*  4172 */             $loc = susp.$loc;
/*  4173 */             $gbl = susp.$gbl;
/*  4174 */             $exc = susp.$exc;
/*  4175 */             $err = susp.$err;
/*  4176 */             $postfinally = susp.$postfinally;
/*  4177 */             $currLineNo = susp.$lineno;
/*  4178 */             $currColNo = susp.$colno;
/*  4179 */             Sk.lastYield = Date.now();
/*  4180 */             self = susp.$tmps.self;
/*  4181 */             $lattr220 = susp.$tmps.$lattr220;
/*  4182 */             $boolopsucc221 = susp.$tmps.$boolopsucc221;
/*  4183 */             $jtrue222 = susp.$tmps.$jtrue222;
/*  4184 */             $lattr223 = susp.$tmps.$lattr223;
/*  4185 */             $unaryop224 = susp.$tmps.$unaryop224;
/*  4186 */             $boolopsucc225 = susp.$tmps.$boolopsucc225;
/*  4187 */             $jfalse226 = susp.$tmps.$jfalse226;
/*  4188 */             try {
/*  4189 */                 $ret = susp.child.resume();
/*  4190 */             } catch (err) {
/*  4191 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4192 */                     err = new Sk.builtin.ExternalError(err);
/*  4193 */                 }
/*  4194 */                 err.traceback.push({
/*  4195 */                     lineno: $currLineNo,
/*  4196 */                     colno: $currColNo,
/*  4197 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4198 */                 });
/*  4199 */                 if ($exc.length > 0) {
/*  4200 */                     $err = err;
/*  4201 */                     $blk = $exc.pop();
/*  4202 */                 } else {
/*  4203 */                     throw err;
/*  4204 */                 }
/*  4205 */             }
/*  4206 */         };
/*  4207 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4208 */             var susp = new Sk.misceval.Suspension();
/*  4209 */             susp.child = $child;
/*  4210 */             susp.resume = function() {
/*  4211 */                 $scope218.$wakingSuspension = susp;
/*  4212 */                 return $scope218();
/*  4213 */             };
/*  4214 */             susp.data = susp.child.data;
/*  4215 */             susp.$blk = $blk;
/*  4216 */             susp.$loc = $loc;
/*  4217 */             susp.$gbl = $gbl;
/*  4218 */             susp.$exc = $exc;
/*  4219 */             susp.$err = $err;
/*  4220 */             susp.$postfinally = $postfinally;
/*  4221 */             susp.$filename = $filename;
/*  4222 */             susp.$lineno = $lineno;
/*  4223 */             susp.$colno = $colno;
/*  4224 */             susp.optional = susp.child.optional;
/*  4225 */             susp.$tmps = {
/*  4226 */                 "self": self,
/*  4227 */                 "$lattr220": $lattr220,
/*  4228 */                 "$boolopsucc221": $boolopsucc221,
/*  4229 */                 "$jtrue222": $jtrue222,
/*  4230 */                 "$lattr223": $lattr223,
/*  4231 */                 "$unaryop224": $unaryop224,
/*  4232 */                 "$boolopsucc225": $boolopsucc225,
/*  4233 */                 "$jfalse226": $jfalse226
/*  4234 */             };
/*  4235 */             return susp;
/*  4236 */         };
/*  4237 */         var $blk = 0,
/*  4238 */             $exc = [],
/*  4239 */             $loc = {},
/*  4240 */             $gbl = this,
/*  4241 */             $err = undefined,
/*  4242 */             $ret = undefined,
/*  4243 */             $postfinally = undefined,
/*  4244 */             $currLineNo = undefined,
/*  4245 */             $currColNo = undefined;
/*  4246 */         if (typeof Sk.execStart === 'undefined') {
/*  4247 */             Sk.execStart = Date.now()
/*  4248 */         }
/*  4249 */         if (typeof Sk.lastYield === 'undefined') {
/*  4250 */             Sk.lastYield = Date.now()
/*  4251 */         }
/*  4252 */         if ($scope218.$wakingSuspension !== undefined) {
/*  4253 */             $wakeFromSuspension();
/*  4254 */         } else {
/*  4255 */             Sk.builtin.pyCheckArgs("isTaskHoldingOrWaiting", arguments, 1, 1, false, false);
/*  4256 */         }
/*  4257 */         while (true) {
/*  4258 */             try {
/*  4259 */                 var $dateNow = Date.now();
/*  4260 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4261 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4262 */                 }
/*  4263 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4264 */                     var $susp = $saveSuspension({
/*  4265 */                         data: {
/*  4266 */                             type: 'Sk.yield'
/*  4267 */                         },
/*  4268 */                         resume: function() {}
/*  4269 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  4270 */                     $susp.$blk = $blk;
/*  4271 */                     $susp.optional = true;
/*  4272 */                     return $susp;
/*  4273 */                 }
/*  4274 */                 switch ($blk) {
/*  4275 */                 case 0:
/*  4276 */                     /* --- codeobj entry --- */
/*  4277 */                     if (self === undefined) {
/*  4278 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4279 */                     }
/*  4280 */ 
/*  4281 */                     //
/*  4282 */                     // line 122:
/*  4283 */                     //         return self.task_holding or (not self.packet_pending and self.task_waiting)
/*  4284 */                     //         ^
/*  4285 */                     //
/*  4286 */                     $currLineNo = 122;
/*  4287 */                     $currColNo = 8;
/*  4288 */ 
/*  4289 */                     if (self === undefined) {
/*  4290 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4291 */                     }
/*  4292 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  4293 */                     $blk = 2; /* allowing case fallthrough */
/*  4294 */                 case 2:
/*  4295 */                     /* --- function return or resume suspension --- */
/*  4296 */                     if ($ret && $ret.$isSuspension) {
/*  4297 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 15);
/*  4298 */                     }
/*  4299 */                     var $lattr220 = $ret;
/*  4300 */                     var $boolopsucc221 = $lattr220;
/*  4301 */                     $boolopsucc221 = $lattr220;
/*  4302 */                     var $jtrue222 = ($lattr220 === true || Sk.misceval.isTrue($lattr220));
/*  4303 */                     if ($jtrue222) { /*test passed */
/*  4304 */                         $blk = 1;
/*  4305 */                         continue;
/*  4306 */                     }
/*  4307 */                     if (self === undefined) {
/*  4308 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4309 */                     }
/*  4310 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  4311 */                     $blk = 4; /* allowing case fallthrough */
/*  4312 */                 case 4:
/*  4313 */                     /* --- function return or resume suspension --- */
/*  4314 */                     if ($ret && $ret.$isSuspension) {
/*  4315 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 41);
/*  4316 */                     }
/*  4317 */                     var $lattr223 = $ret;
/*  4318 */                     var $unaryop224 = Sk.abstr.numberUnaryOp($lattr223, 'Not');
/*  4319 */                     var $boolopsucc225 = $unaryop224;
/*  4320 */                     $boolopsucc225 = $unaryop224;
/*  4321 */                     var $jfalse226 = ($unaryop224 === false || !Sk.misceval.isTrue($unaryop224));
/*  4322 */                     if ($jfalse226) { /*test failed */
/*  4323 */                         $blk = 3;
/*  4324 */                         continue;
/*  4325 */                     }
/*  4326 */                     if (self === undefined) {
/*  4327 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4328 */                     }
/*  4329 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  4330 */                     $blk = 5; /* allowing case fallthrough */
/*  4331 */                 case 5:
/*  4332 */                     /* --- function return or resume suspension --- */
/*  4333 */                     if ($ret && $ret.$isSuspension) {
/*  4334 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 65);
/*  4335 */                     }
/*  4336 */                     var $lattr227 = $ret;
/*  4337 */                     $boolopsucc225 = $lattr227;
/*  4338 */                     var $jfalse228 = ($lattr227 === false || !Sk.misceval.isTrue($lattr227));
/*  4339 */                     if ($jfalse228) { /*test failed */
/*  4340 */                         $blk = 3;
/*  4341 */                         continue;
/*  4342 */                     }
/*  4343 */                     $blk = 3; /* allowing case fallthrough */
/*  4344 */                 case 3:
/*  4345 */                     /* --- end of boolop --- */
/*  4346 */                     $boolopsucc221 = $boolopsucc225;
/*  4347 */                     var $jtrue229 = ($boolopsucc225 === true || Sk.misceval.isTrue($boolopsucc225));
/*  4348 */                     if ($jtrue229) { /*test passed */
/*  4349 */                         $blk = 1;
/*  4350 */                         continue;
/*  4351 */                     }
/*  4352 */                     $blk = 1; /* allowing case fallthrough */
/*  4353 */                 case 1:
/*  4354 */                     /* --- end of boolop --- */
/*  4355 */                     return $boolopsucc221;
/*  4356 */                     return Sk.builtin.none.none$;
/*  4357 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4358 */                 }
/*  4359 */             } catch (err) {
/*  4360 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4361 */                     err = new Sk.builtin.ExternalError(err);
/*  4362 */                 }
/*  4363 */                 err.traceback.push({
/*  4364 */                     lineno: $currLineNo,
/*  4365 */                     colno: $currColNo,
/*  4366 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4367 */                 });
/*  4368 */                 if ($exc.length > 0) {
/*  4369 */                     $err = err;
/*  4370 */                     $blk = $exc.pop();
/*  4371 */                     continue;
/*  4372 */                 } else {
/*  4373 */                     throw err;
/*  4374 */                 }
/*  4375 */             }
/*  4376 */         }
/*  4377 */     });
/*  4378 */     var $scope231 = (function $isWaitingWithPacket232$(self) {
/*  4379 */         var self, self, self, self, $lattr233, $boolopsucc234, $jfalse235, $lattr233, $boolopsucc234, $jfalse235, $lattr236, $jfalse237;
/*  4380 */         var $wakeFromSuspension = function() {
/*  4381 */             var susp = $scope231.$wakingSuspension;
/*  4382 */             delete $scope231.$wakingSuspension;
/*  4383 */             $blk = susp.$blk;
/*  4384 */             $loc = susp.$loc;
/*  4385 */             $gbl = susp.$gbl;
/*  4386 */             $exc = susp.$exc;
/*  4387 */             $err = susp.$err;
/*  4388 */             $postfinally = susp.$postfinally;
/*  4389 */             $currLineNo = susp.$lineno;
/*  4390 */             $currColNo = susp.$colno;
/*  4391 */             Sk.lastYield = Date.now();
/*  4392 */             self = susp.$tmps.self;
/*  4393 */             $lattr233 = susp.$tmps.$lattr233;
/*  4394 */             $boolopsucc234 = susp.$tmps.$boolopsucc234;
/*  4395 */             $jfalse235 = susp.$tmps.$jfalse235;
/*  4396 */             $lattr236 = susp.$tmps.$lattr236;
/*  4397 */             $jfalse237 = susp.$tmps.$jfalse237;
/*  4398 */             try {
/*  4399 */                 $ret = susp.child.resume();
/*  4400 */             } catch (err) {
/*  4401 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4402 */                     err = new Sk.builtin.ExternalError(err);
/*  4403 */                 }
/*  4404 */                 err.traceback.push({
/*  4405 */                     lineno: $currLineNo,
/*  4406 */                     colno: $currColNo,
/*  4407 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4408 */                 });
/*  4409 */                 if ($exc.length > 0) {
/*  4410 */                     $err = err;
/*  4411 */                     $blk = $exc.pop();
/*  4412 */                 } else {
/*  4413 */                     throw err;
/*  4414 */                 }
/*  4415 */             }
/*  4416 */         };
/*  4417 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4418 */             var susp = new Sk.misceval.Suspension();
/*  4419 */             susp.child = $child;
/*  4420 */             susp.resume = function() {
/*  4421 */                 $scope231.$wakingSuspension = susp;
/*  4422 */                 return $scope231();
/*  4423 */             };
/*  4424 */             susp.data = susp.child.data;
/*  4425 */             susp.$blk = $blk;
/*  4426 */             susp.$loc = $loc;
/*  4427 */             susp.$gbl = $gbl;
/*  4428 */             susp.$exc = $exc;
/*  4429 */             susp.$err = $err;
/*  4430 */             susp.$postfinally = $postfinally;
/*  4431 */             susp.$filename = $filename;
/*  4432 */             susp.$lineno = $lineno;
/*  4433 */             susp.$colno = $colno;
/*  4434 */             susp.optional = susp.child.optional;
/*  4435 */             susp.$tmps = {
/*  4436 */                 "self": self,
/*  4437 */                 "$lattr233": $lattr233,
/*  4438 */                 "$boolopsucc234": $boolopsucc234,
/*  4439 */                 "$jfalse235": $jfalse235,
/*  4440 */                 "$lattr236": $lattr236,
/*  4441 */                 "$jfalse237": $jfalse237
/*  4442 */             };
/*  4443 */             return susp;
/*  4444 */         };
/*  4445 */         var $blk = 0,
/*  4446 */             $exc = [],
/*  4447 */             $loc = {},
/*  4448 */             $gbl = this,
/*  4449 */             $err = undefined,
/*  4450 */             $ret = undefined,
/*  4451 */             $postfinally = undefined,
/*  4452 */             $currLineNo = undefined,
/*  4453 */             $currColNo = undefined;
/*  4454 */         if (typeof Sk.execStart === 'undefined') {
/*  4455 */             Sk.execStart = Date.now()
/*  4456 */         }
/*  4457 */         if (typeof Sk.lastYield === 'undefined') {
/*  4458 */             Sk.lastYield = Date.now()
/*  4459 */         }
/*  4460 */         if ($scope231.$wakingSuspension !== undefined) {
/*  4461 */             $wakeFromSuspension();
/*  4462 */         } else {
/*  4463 */             Sk.builtin.pyCheckArgs("isWaitingWithPacket", arguments, 1, 1, false, false);
/*  4464 */         }
/*  4465 */         while (true) {
/*  4466 */             try {
/*  4467 */                 var $dateNow = Date.now();
/*  4468 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4469 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4470 */                 }
/*  4471 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4472 */                     var $susp = $saveSuspension({
/*  4473 */                         data: {
/*  4474 */                             type: 'Sk.yield'
/*  4475 */                         },
/*  4476 */                         resume: function() {}
/*  4477 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  4478 */                     $susp.$blk = $blk;
/*  4479 */                     $susp.optional = true;
/*  4480 */                     return $susp;
/*  4481 */                 }
/*  4482 */                 switch ($blk) {
/*  4483 */                 case 0:
/*  4484 */                     /* --- codeobj entry --- */
/*  4485 */                     if (self === undefined) {
/*  4486 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4487 */                     }
/*  4488 */ 
/*  4489 */                     //
/*  4490 */                     // line 125:
/*  4491 */                     //         return self.packet_pending and self.task_waiting and not self.task_holding
/*  4492 */                     //         ^
/*  4493 */                     //
/*  4494 */                     $currLineNo = 125;
/*  4495 */                     $currColNo = 8;
/*  4496 */ 
/*  4497 */                     if (self === undefined) {
/*  4498 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4499 */                     }
/*  4500 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  4501 */                     $blk = 2; /* allowing case fallthrough */
/*  4502 */                 case 2:
/*  4503 */                     /* --- function return or resume suspension --- */
/*  4504 */                     if ($ret && $ret.$isSuspension) {
/*  4505 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 15);
/*  4506 */                     }
/*  4507 */                     var $lattr233 = $ret;
/*  4508 */                     var $boolopsucc234 = $lattr233;
/*  4509 */                     $boolopsucc234 = $lattr233;
/*  4510 */                     var $jfalse235 = ($lattr233 === false || !Sk.misceval.isTrue($lattr233));
/*  4511 */                     if ($jfalse235) { /*test failed */
/*  4512 */                         $blk = 1;
/*  4513 */                         continue;
/*  4514 */                     }
/*  4515 */                     if (self === undefined) {
/*  4516 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4517 */                     }
/*  4518 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  4519 */                     $blk = 3; /* allowing case fallthrough */
/*  4520 */                 case 3:
/*  4521 */                     /* --- function return or resume suspension --- */
/*  4522 */                     if ($ret && $ret.$isSuspension) {
/*  4523 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 39);
/*  4524 */                     }
/*  4525 */                     var $lattr236 = $ret;
/*  4526 */                     $boolopsucc234 = $lattr236;
/*  4527 */                     var $jfalse237 = ($lattr236 === false || !Sk.misceval.isTrue($lattr236));
/*  4528 */                     if ($jfalse237) { /*test failed */
/*  4529 */                         $blk = 1;
/*  4530 */                         continue;
/*  4531 */                     }
/*  4532 */                     if (self === undefined) {
/*  4533 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4534 */                     }
/*  4535 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  4536 */                     $blk = 4; /* allowing case fallthrough */
/*  4537 */                 case 4:
/*  4538 */                     /* --- function return or resume suspension --- */
/*  4539 */                     if ($ret && $ret.$isSuspension) {
/*  4540 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 65);
/*  4541 */                     }
/*  4542 */                     var $lattr238 = $ret;
/*  4543 */                     var $unaryop239 = Sk.abstr.numberUnaryOp($lattr238, 'Not');
/*  4544 */                     $boolopsucc234 = $unaryop239;
/*  4545 */                     var $jfalse240 = ($unaryop239 === false || !Sk.misceval.isTrue($unaryop239));
/*  4546 */                     if ($jfalse240) { /*test failed */
/*  4547 */                         $blk = 1;
/*  4548 */                         continue;
/*  4549 */                     }
/*  4550 */                     $blk = 1; /* allowing case fallthrough */
/*  4551 */                 case 1:
/*  4552 */                     /* --- end of boolop --- */
/*  4553 */                     return $boolopsucc234;
/*  4554 */                     return Sk.builtin.none.none$;
/*  4555 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4556 */                 }
/*  4557 */             } catch (err) {
/*  4558 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4559 */                     err = new Sk.builtin.ExternalError(err);
/*  4560 */                 }
/*  4561 */                 err.traceback.push({
/*  4562 */                     lineno: $currLineNo,
/*  4563 */                     colno: $currColNo,
/*  4564 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4565 */                 });
/*  4566 */                 if ($exc.length > 0) {
/*  4567 */                     $err = err;
/*  4568 */                     $blk = $exc.pop();
/*  4569 */                     continue;
/*  4570 */                 } else {
/*  4571 */                     throw err;
/*  4572 */                 }
/*  4573 */             }
/*  4574 */         }
/*  4575 */     });
/*  4576 */     var $scope243 = (function $trace244$(a) {
/*  4577 */         var a, $loadgbl247, $compareres248;
/*  4578 */         var $wakeFromSuspension = function() {
/*  4579 */             var susp = $scope243.$wakingSuspension;
/*  4580 */             delete $scope243.$wakingSuspension;
/*  4581 */             $blk = susp.$blk;
/*  4582 */             $loc = susp.$loc;
/*  4583 */             $gbl = susp.$gbl;
/*  4584 */             $exc = susp.$exc;
/*  4585 */             $err = susp.$err;
/*  4586 */             $postfinally = susp.$postfinally;
/*  4587 */             $currLineNo = susp.$lineno;
/*  4588 */             $currColNo = susp.$colno;
/*  4589 */             Sk.lastYield = Date.now();
/*  4590 */             a = susp.$tmps.a;
/*  4591 */             $loadgbl247 = susp.$tmps.$loadgbl247;
/*  4592 */             $compareres248 = susp.$tmps.$compareres248;
/*  4593 */             try {
/*  4594 */                 $ret = susp.child.resume();
/*  4595 */             } catch (err) {
/*  4596 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4597 */                     err = new Sk.builtin.ExternalError(err);
/*  4598 */                 }
/*  4599 */                 err.traceback.push({
/*  4600 */                     lineno: $currLineNo,
/*  4601 */                     colno: $currColNo,
/*  4602 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4603 */                 });
/*  4604 */                 if ($exc.length > 0) {
/*  4605 */                     $err = err;
/*  4606 */                     $blk = $exc.pop();
/*  4607 */                 } else {
/*  4608 */                     throw err;
/*  4609 */                 }
/*  4610 */             }
/*  4611 */         };
/*  4612 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4613 */             var susp = new Sk.misceval.Suspension();
/*  4614 */             susp.child = $child;
/*  4615 */             susp.resume = function() {
/*  4616 */                 $scope243.$wakingSuspension = susp;
/*  4617 */                 return $scope243();
/*  4618 */             };
/*  4619 */             susp.data = susp.child.data;
/*  4620 */             susp.$blk = $blk;
/*  4621 */             susp.$loc = $loc;
/*  4622 */             susp.$gbl = $gbl;
/*  4623 */             susp.$exc = $exc;
/*  4624 */             susp.$err = $err;
/*  4625 */             susp.$postfinally = $postfinally;
/*  4626 */             susp.$filename = $filename;
/*  4627 */             susp.$lineno = $lineno;
/*  4628 */             susp.$colno = $colno;
/*  4629 */             susp.optional = susp.child.optional;
/*  4630 */             susp.$tmps = {
/*  4631 */                 "a": a,
/*  4632 */                 "$loadgbl247": $loadgbl247,
/*  4633 */                 "$compareres248": $compareres248
/*  4634 */             };
/*  4635 */             return susp;
/*  4636 */         };
/*  4637 */         var $blk = 0,
/*  4638 */             $exc = [],
/*  4639 */             $loc = {},
/*  4640 */             $gbl = this,
/*  4641 */             $err = undefined,
/*  4642 */             $ret = undefined,
/*  4643 */             $postfinally = undefined,
/*  4644 */             $currLineNo = undefined,
/*  4645 */             $currColNo = undefined;
/*  4646 */         if (typeof Sk.execStart === 'undefined') {
/*  4647 */             Sk.execStart = Date.now()
/*  4648 */         }
/*  4649 */         if (typeof Sk.lastYield === 'undefined') {
/*  4650 */             Sk.lastYield = Date.now()
/*  4651 */         }
/*  4652 */         if ($scope243.$wakingSuspension !== undefined) {
/*  4653 */             $wakeFromSuspension();
/*  4654 */         } else {
/*  4655 */             Sk.builtin.pyCheckArgs("trace", arguments, 1, 1, false, false);
/*  4656 */         }
/*  4657 */         while (true) {
/*  4658 */             try {
/*  4659 */                 var $dateNow = Date.now();
/*  4660 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4661 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4662 */                 }
/*  4663 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4664 */                     var $susp = $saveSuspension({
/*  4665 */                         data: {
/*  4666 */                             type: 'Sk.yield'
/*  4667 */                         },
/*  4668 */                         resume: function() {}
/*  4669 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  4670 */                     $susp.$blk = $blk;
/*  4671 */                     $susp.optional = true;
/*  4672 */                     return $susp;
/*  4673 */                 }
/*  4674 */                 switch ($blk) {
/*  4675 */                 case 0:
/*  4676 */                     /* --- codeobj entry --- */
/*  4677 */                     if (a === undefined) {
/*  4678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/*  4679 */                     }
/*  4680 */ 
/*  4681 */                     //
/*  4682 */                     // line 135:
/*  4683 */                     //     global layout
/*  4684 */                     //     ^
/*  4685 */                     //
/*  4686 */                     $currLineNo = 135;
/*  4687 */                     $currColNo = 4;
/*  4688 */ 
/*  4689 */ 
/*  4690 */                     //
/*  4691 */                     // line 136:
/*  4692 */                     //     layout -= 1
/*  4693 */                     //     ^
/*  4694 */                     //
/*  4695 */                     $currLineNo = 136;
/*  4696 */                     $currColNo = 4;
/*  4697 */ 
/*  4698 */                     var $loadgbl245 = Sk.misceval.loadname('layout', $gbl);
/*  4699 */                     var $inplbinop246 = Sk.abstr.numberInplaceBinOp($loadgbl245, new Sk.builtin.int_(1), 'Sub');
/*  4700 */                     $gbl.layout = $inplbinop246;
/*  4701 */                     //
/*  4702 */                     // line 137:
/*  4703 */                     //     if layout <= 0:
/*  4704 */                     //     ^
/*  4705 */                     //
/*  4706 */                     $currLineNo = 137;
/*  4707 */                     $currColNo = 4;
/*  4708 */ 
/*  4709 */                     var $loadgbl247 = Sk.misceval.loadname('layout', $gbl);
/*  4710 */                     var $compareres248 = null;
/*  4711 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl247, new Sk.builtin.int_(0), 'LtE', true));
/*  4712 */                     $blk = 3; /* allowing case fallthrough */
/*  4713 */                 case 3:
/*  4714 */                     /* --- function return or resume suspension --- */
/*  4715 */                     if ($ret && $ret.$isSuspension) {
/*  4716 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 137, 7);
/*  4717 */                     }
/*  4718 */                     $compareres248 = $ret;
/*  4719 */                     var $jfalse249 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4720 */                     if ($jfalse249) { /*test failed */
/*  4721 */                         $blk = 2;
/*  4722 */                         continue;
/*  4723 */                     }
/*  4724 */                     $blk = 2; /* allowing case fallthrough */
/*  4725 */                 case 2:
/*  4726 */                     /* --- done --- */
/*  4727 */                     var $jfalse250 = ($compareres248 === false || !Sk.misceval.isTrue($compareres248));
/*  4728 */                     if ($jfalse250) { /*test failed */
/*  4729 */                         $blk = 1;
/*  4730 */                         continue;
/*  4731 */                     }
/*  4732 */                     //
/*  4733 */                     // line 138:
/*  4734 */                     //         pass #print()
/*  4735 */                     //         ^
/*  4736 */                     //
/*  4737 */                     $currLineNo = 138;
/*  4738 */                     $currColNo = 8;
/*  4739 */ 
/*  4740 */ 
/*  4741 */                     //
/*  4742 */                     // line 139:
/*  4743 */                     //         layout = 50
/*  4744 */                     //         ^
/*  4745 */                     //
/*  4746 */                     $currLineNo = 139;
/*  4747 */                     $currColNo = 8;
/*  4748 */ 
/*  4749 */                     $gbl.layout = new Sk.builtin.int_(50);
/*  4750 */                     $blk = 1; /* allowing case fallthrough */
/*  4751 */                 case 1:
/*  4752 */                     /* --- end of if --- */
/*  4753 */                     //
/*  4754 */                     // line 140:
/*  4755 */                     //     pass #print(a, end=' ')
/*  4756 */                     //     ^
/*  4757 */                     //
/*  4758 */                     $currLineNo = 140;
/*  4759 */                     $currColNo = 4;
/*  4760 */ 
/*  4761 */                     return Sk.builtin.none.none$;
/*  4762 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4763 */                 }
/*  4764 */             } catch (err) {
/*  4765 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4766 */                     err = new Sk.builtin.ExternalError(err);
/*  4767 */                 }
/*  4768 */                 err.traceback.push({
/*  4769 */                     lineno: $currLineNo,
/*  4770 */                     colno: $currColNo,
/*  4771 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4772 */                 });
/*  4773 */                 if ($exc.length > 0) {
/*  4774 */                     $err = err;
/*  4775 */                     $blk = $exc.pop();
/*  4776 */                     continue;
/*  4777 */                 } else {
/*  4778 */                     throw err;
/*  4779 */                 }
/*  4780 */             }
/*  4781 */         }
/*  4782 */     });
/*  4783 */     var $scope253 = (function $TaskWorkArea$class_outer($globals, $locals, $rest) {
/*  4784 */         var $gbl = $globals,
/*  4785 */             $loc = $locals;
/*  4786 */         (function $TaskWorkArea$_closure() {
/*  4787 */             var $blk = 0,
/*  4788 */                 $exc = [],
/*  4789 */                 $ret = undefined,
/*  4790 */                 $postfinally = undefined,
/*  4791 */                 $currLineNo = undefined,
/*  4792 */                 $currColNo = undefined;
/*  4793 */             if (typeof Sk.execStart === 'undefined') {
/*  4794 */                 Sk.execStart = Date.now()
/*  4795 */             }
/*  4796 */             while (true) {
/*  4797 */                 try {
/*  4798 */                     var $dateNow = Date.now();
/*  4799 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4800 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4801 */                     }
/*  4802 */                     switch ($blk) {
/*  4803 */                     case 0:
/*  4804 */                         /* --- class entry --- */
/*  4805 */                         //
/*  4806 */                         // line 146:
/*  4807 */                         //     def __init__(self):
/*  4808 */                         //     ^
/*  4809 */                         //
/*  4810 */                         $currLineNo = 146;
/*  4811 */                         $currColNo = 4;
/*  4812 */ 
/*  4813 */                         $scope254.co_name = new Sk.builtins['str']('__init__');
/*  4814 */                         $scope254.co_varnames = ['self'];
/*  4815 */                         var $funcobj260 = new Sk.builtins['function']($scope254, $gbl);
/*  4816 */                         $loc.__init__ = $funcobj260;
/*  4817 */                         return;
/*  4818 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4819 */                     }
/*  4820 */                 } catch (err) {
/*  4821 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  4822 */                         err = new Sk.builtin.ExternalError(err);
/*  4823 */                     }
/*  4824 */                     err.traceback.push({
/*  4825 */                         lineno: $currLineNo,
/*  4826 */                         colno: $currColNo,
/*  4827 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4828 */                     });
/*  4829 */                     if ($exc.length > 0) {
/*  4830 */                         $err = err;
/*  4831 */                         $blk = $exc.pop();
/*  4832 */                         continue;
/*  4833 */                     } else {
/*  4834 */                         throw err;
/*  4835 */                     }
/*  4836 */                 }
/*  4837 */             }
/*  4838 */         }).apply(null, $rest);
/*  4839 */     });
/*  4840 */     var $scope254 = (function $__init__255$(self) {
/*  4841 */         var self, self, self, self, self, $elem256, $loadlist257, $loadgbl258, $binop259;
/*  4842 */         var $wakeFromSuspension = function() {
/*  4843 */             var susp = $scope254.$wakingSuspension;
/*  4844 */             delete $scope254.$wakingSuspension;
/*  4845 */             $blk = susp.$blk;
/*  4846 */             $loc = susp.$loc;
/*  4847 */             $gbl = susp.$gbl;
/*  4848 */             $exc = susp.$exc;
/*  4849 */             $err = susp.$err;
/*  4850 */             $postfinally = susp.$postfinally;
/*  4851 */             $currLineNo = susp.$lineno;
/*  4852 */             $currColNo = susp.$colno;
/*  4853 */             Sk.lastYield = Date.now();
/*  4854 */             self = susp.$tmps.self;
/*  4855 */             $elem256 = susp.$tmps.$elem256;
/*  4856 */             $loadlist257 = susp.$tmps.$loadlist257;
/*  4857 */             $loadgbl258 = susp.$tmps.$loadgbl258;
/*  4858 */             $binop259 = susp.$tmps.$binop259;
/*  4859 */             try {
/*  4860 */                 $ret = susp.child.resume();
/*  4861 */             } catch (err) {
/*  4862 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4863 */                     err = new Sk.builtin.ExternalError(err);
/*  4864 */                 }
/*  4865 */                 err.traceback.push({
/*  4866 */                     lineno: $currLineNo,
/*  4867 */                     colno: $currColNo,
/*  4868 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4869 */                 });
/*  4870 */                 if ($exc.length > 0) {
/*  4871 */                     $err = err;
/*  4872 */                     $blk = $exc.pop();
/*  4873 */                 } else {
/*  4874 */                     throw err;
/*  4875 */                 }
/*  4876 */             }
/*  4877 */         };
/*  4878 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4879 */             var susp = new Sk.misceval.Suspension();
/*  4880 */             susp.child = $child;
/*  4881 */             susp.resume = function() {
/*  4882 */                 $scope254.$wakingSuspension = susp;
/*  4883 */                 return $scope254();
/*  4884 */             };
/*  4885 */             susp.data = susp.child.data;
/*  4886 */             susp.$blk = $blk;
/*  4887 */             susp.$loc = $loc;
/*  4888 */             susp.$gbl = $gbl;
/*  4889 */             susp.$exc = $exc;
/*  4890 */             susp.$err = $err;
/*  4891 */             susp.$postfinally = $postfinally;
/*  4892 */             susp.$filename = $filename;
/*  4893 */             susp.$lineno = $lineno;
/*  4894 */             susp.$colno = $colno;
/*  4895 */             susp.optional = susp.child.optional;
/*  4896 */             susp.$tmps = {
/*  4897 */                 "self": self,
/*  4898 */                 "$elem256": $elem256,
/*  4899 */                 "$loadlist257": $loadlist257,
/*  4900 */                 "$loadgbl258": $loadgbl258,
/*  4901 */                 "$binop259": $binop259
/*  4902 */             };
/*  4903 */             return susp;
/*  4904 */         };
/*  4905 */         var $blk = 0,
/*  4906 */             $exc = [],
/*  4907 */             $loc = {},
/*  4908 */             $gbl = this,
/*  4909 */             $err = undefined,
/*  4910 */             $ret = undefined,
/*  4911 */             $postfinally = undefined,
/*  4912 */             $currLineNo = undefined,
/*  4913 */             $currColNo = undefined;
/*  4914 */         if (typeof Sk.execStart === 'undefined') {
/*  4915 */             Sk.execStart = Date.now()
/*  4916 */         }
/*  4917 */         if (typeof Sk.lastYield === 'undefined') {
/*  4918 */             Sk.lastYield = Date.now()
/*  4919 */         }
/*  4920 */         if ($scope254.$wakingSuspension !== undefined) {
/*  4921 */             $wakeFromSuspension();
/*  4922 */         } else {
/*  4923 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  4924 */         }
/*  4925 */         while (true) {
/*  4926 */             try {
/*  4927 */                 var $dateNow = Date.now();
/*  4928 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  4929 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4930 */                 }
/*  4931 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4932 */                     var $susp = $saveSuspension({
/*  4933 */                         data: {
/*  4934 */                             type: 'Sk.yield'
/*  4935 */                         },
/*  4936 */                         resume: function() {}
/*  4937 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  4938 */                     $susp.$blk = $blk;
/*  4939 */                     $susp.optional = true;
/*  4940 */                     return $susp;
/*  4941 */                 }
/*  4942 */                 switch ($blk) {
/*  4943 */                 case 0:
/*  4944 */                     /* --- codeobj entry --- */
/*  4945 */                     if (self === undefined) {
/*  4946 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4947 */                     }
/*  4948 */ 
/*  4949 */                     //
/*  4950 */                     // line 147:
/*  4951 */                     //         self.taskTab = [None] * TASKTABSIZE
/*  4952 */                     //         ^
/*  4953 */                     //
/*  4954 */                     $currLineNo = 147;
/*  4955 */                     $currColNo = 8;
/*  4956 */ 
/*  4957 */                     var $elem256 = Sk.builtin.none.none$;
/*  4958 */                     var $loadlist257 = new Sk.builtins['list']([$elem256]);
/*  4959 */                     var $loadgbl258 = Sk.misceval.loadname('TASKTABSIZE', $gbl);
/*  4960 */                     var $binop259 = Sk.abstr.numberBinOp($loadlist257, $loadgbl258, 'Mult');
/*  4961 */                     if (self === undefined) {
/*  4962 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4963 */                     }
/*  4964 */                     $ret = Sk.abstr.sattr(self, 'taskTab', $binop259, true);
/*  4965 */                     $blk = 1; /* allowing case fallthrough */
/*  4966 */                 case 1:
/*  4967 */                     /* --- function return or resume suspension --- */
/*  4968 */                     if ($ret && $ret.$isSuspension) {
/*  4969 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 147, 8);
/*  4970 */                     }
/*  4971 */                     //
/*  4972 */                     // line 149:
/*  4973 */                     //         self.taskList = None
/*  4974 */                     //         ^
/*  4975 */                     //
/*  4976 */                     $currLineNo = 149;
/*  4977 */                     $currColNo = 8;
/*  4978 */ 
/*  4979 */                     if (self === undefined) {
/*  4980 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4981 */                     }
/*  4982 */                     $ret = Sk.abstr.sattr(self, 'taskList', Sk.builtin.none.none$, true);
/*  4983 */                     $blk = 2; /* allowing case fallthrough */
/*  4984 */                 case 2:
/*  4985 */                     /* --- function return or resume suspension --- */
/*  4986 */                     if ($ret && $ret.$isSuspension) {
/*  4987 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 149, 8);
/*  4988 */                     }
/*  4989 */                     //
/*  4990 */                     // line 151:
/*  4991 */                     //         self.holdCount = 0
/*  4992 */                     //         ^
/*  4993 */                     //
/*  4994 */                     $currLineNo = 151;
/*  4995 */                     $currColNo = 8;
/*  4996 */ 
/*  4997 */                     if (self === undefined) {
/*  4998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4999 */                     }
/*  5000 */                     $ret = Sk.abstr.sattr(self, 'holdCount', new Sk.builtin.int_(0), true);
/*  5001 */                     $blk = 3; /* allowing case fallthrough */
/*  5002 */                 case 3:
/*  5003 */                     /* --- function return or resume suspension --- */
/*  5004 */                     if ($ret && $ret.$isSuspension) {
/*  5005 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 151, 8);
/*  5006 */                     }
/*  5007 */                     //
/*  5008 */                     // line 152:
/*  5009 */                     //         self.qpktCount = 0
/*  5010 */                     //         ^
/*  5011 */                     //
/*  5012 */                     $currLineNo = 152;
/*  5013 */                     $currColNo = 8;
/*  5014 */ 
/*  5015 */                     if (self === undefined) {
/*  5016 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5017 */                     }
/*  5018 */                     $ret = Sk.abstr.sattr(self, 'qpktCount', new Sk.builtin.int_(0), true);
/*  5019 */                     $blk = 4; /* allowing case fallthrough */
/*  5020 */                 case 4:
/*  5021 */                     /* --- function return or resume suspension --- */
/*  5022 */                     if ($ret && $ret.$isSuspension) {
/*  5023 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 152, 8);
/*  5024 */                     }
/*  5025 */                     return Sk.builtin.none.none$;
/*  5026 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5027 */                 }
/*  5028 */             } catch (err) {
/*  5029 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5030 */                     err = new Sk.builtin.ExternalError(err);
/*  5031 */                 }
/*  5032 */                 err.traceback.push({
/*  5033 */                     lineno: $currLineNo,
/*  5034 */                     colno: $currColNo,
/*  5035 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5036 */                 });
/*  5037 */                 if ($exc.length > 0) {
/*  5038 */                     $err = err;
/*  5039 */                     $blk = $exc.pop();
/*  5040 */                     continue;
/*  5041 */                 } else {
/*  5042 */                     throw err;
/*  5043 */                 }
/*  5044 */             }
/*  5045 */         }
/*  5046 */     });
/*  5047 */     var $scope265 = (function $Task$class_outer($globals, $locals, $rest) {
/*  5048 */         var $gbl = $globals,
/*  5049 */             $loc = $locals;
/*  5050 */         (function $Task$_closure() {
/*  5051 */             var $blk = 0,
/*  5052 */                 $exc = [],
/*  5053 */                 $ret = undefined,
/*  5054 */                 $postfinally = undefined,
/*  5055 */                 $currLineNo = undefined,
/*  5056 */                 $currColNo = undefined;
/*  5057 */             if (typeof Sk.execStart === 'undefined') {
/*  5058 */                 Sk.execStart = Date.now()
/*  5059 */             }
/*  5060 */             while (true) {
/*  5061 */                 try {
/*  5062 */                     var $dateNow = Date.now();
/*  5063 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5064 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5065 */                     }
/*  5066 */                     switch ($blk) {
/*  5067 */                     case 0:
/*  5068 */                         /* --- class entry --- */
/*  5069 */                         //
/*  5070 */                         // line 159:
/*  5071 */                         //     def __init__(self,i,p,w,initialState,r):
/*  5072 */                         //     ^
/*  5073 */                         //
/*  5074 */                         $currLineNo = 159;
/*  5075 */                         $currColNo = 4;
/*  5076 */ 
/*  5077 */                         $scope266.co_name = new Sk.builtins['str']('__init__');
/*  5078 */                         $scope266.co_varnames = ['self', 'i', 'p', 'w', 'initialState', 'r'];
/*  5079 */                         var $funcobj279 = new Sk.builtins['function']($scope266, $gbl);
/*  5080 */                         $loc.__init__ = $funcobj279;
/*  5081 */                         //
/*  5082 */                         // line 174:
/*  5083 */                         //     def fn(self,pkt,r):
/*  5084 */                         //     ^
/*  5085 */                         //
/*  5086 */                         $currLineNo = 174;
/*  5087 */                         $currColNo = 4;
/*  5088 */ 
/*  5089 */                         $scope280.co_name = new Sk.builtins['str']('fn');
/*  5090 */                         $scope280.co_varnames = ['self', 'pkt', 'r'];
/*  5091 */                         var $funcobj284 = new Sk.builtins['function']($scope280, $gbl);
/*  5092 */                         $loc.fn = $funcobj284;
/*  5093 */                         //
/*  5094 */                         // line 178:
/*  5095 */                         //     def addPacket(self,p,old):
/*  5096 */                         //     ^
/*  5097 */                         //
/*  5098 */                         $currLineNo = 178;
/*  5099 */                         $currColNo = 4;
/*  5100 */ 
/*  5101 */                         $scope285.co_name = new Sk.builtins['str']('addPacket');
/*  5102 */                         $scope285.co_varnames = ['self', 'p', 'old'];
/*  5103 */                         var $funcobj299 = new Sk.builtins['function']($scope285, $gbl);
/*  5104 */                         $loc.addPacket = $funcobj299;
/*  5105 */                         //
/*  5106 */                         // line 189:
/*  5107 */                         //     def runTask(self):
/*  5108 */                         //     ^
/*  5109 */                         //
/*  5110 */                         $currLineNo = 189;
/*  5111 */                         $currColNo = 4;
/*  5112 */ 
/*  5113 */                         $scope300.co_name = new Sk.builtins['str']('runTask');
/*  5114 */                         $scope300.co_varnames = ['self'];
/*  5115 */                         var $funcobj318 = new Sk.builtins['function']($scope300, $gbl);
/*  5116 */                         $loc.runTask = $funcobj318;
/*  5117 */                         //
/*  5118 */                         // line 203:
/*  5119 */                         //     def waitTask(self):
/*  5120 */                         //     ^
/*  5121 */                         //
/*  5122 */                         $currLineNo = 203;
/*  5123 */                         $currColNo = 4;
/*  5124 */ 
/*  5125 */                         $scope319.co_name = new Sk.builtins['str']('waitTask');
/*  5126 */                         $scope319.co_varnames = ['self'];
/*  5127 */                         var $funcobj321 = new Sk.builtins['function']($scope319, $gbl);
/*  5128 */                         $loc.waitTask = $funcobj321;
/*  5129 */                         //
/*  5130 */                         // line 208:
/*  5131 */                         //     def hold(self):
/*  5132 */                         //     ^
/*  5133 */                         //
/*  5134 */                         $currLineNo = 208;
/*  5135 */                         $currColNo = 4;
/*  5136 */ 
/*  5137 */                         $scope322.co_name = new Sk.builtins['str']('hold');
/*  5138 */                         $scope322.co_varnames = ['self'];
/*  5139 */                         var $funcobj328 = new Sk.builtins['function']($scope322, $gbl);
/*  5140 */                         $loc.hold = $funcobj328;
/*  5141 */                         //
/*  5142 */                         // line 214:
/*  5143 */                         //     def release(self,i):
/*  5144 */                         //     ^
/*  5145 */                         //
/*  5146 */                         $currLineNo = 214;
/*  5147 */                         $currColNo = 4;
/*  5148 */ 
/*  5149 */                         $scope329.co_name = new Sk.builtins['str']('release');
/*  5150 */                         $scope329.co_varnames = ['self', 'i'];
/*  5151 */                         var $funcobj338 = new Sk.builtins['function']($scope329, $gbl);
/*  5152 */                         $loc.release = $funcobj338;
/*  5153 */                         //
/*  5154 */                         // line 223:
/*  5155 */                         //     def qpkt(self,pkt):
/*  5156 */                         //     ^
/*  5157 */                         //
/*  5158 */                         $currLineNo = 223;
/*  5159 */                         $currColNo = 4;
/*  5160 */ 
/*  5161 */                         $scope339.co_name = new Sk.builtins['str']('qpkt');
/*  5162 */                         $scope339.co_varnames = ['self', 'pkt'];
/*  5163 */                         var $funcobj350 = new Sk.builtins['function']($scope339, $gbl);
/*  5164 */                         $loc.qpkt = $funcobj350;
/*  5165 */                         //
/*  5166 */                         // line 231:
/*  5167 */                         //     def findtcb(self,id):
/*  5168 */                         //     ^
/*  5169 */                         //
/*  5170 */                         $currLineNo = 231;
/*  5171 */                         $currColNo = 4;
/*  5172 */ 
/*  5173 */                         $scope351.co_name = new Sk.builtins['str']('findtcb');
/*  5174 */                         $scope351.co_varnames = ['self', 'id'];
/*  5175 */                         var $funcobj363 = new Sk.builtins['function']($scope351, $gbl);
/*  5176 */                         $loc.findtcb = $funcobj363;
/*  5177 */                         return;
/*  5178 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5179 */                     }
/*  5180 */                 } catch (err) {
/*  5181 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  5182 */                         err = new Sk.builtin.ExternalError(err);
/*  5183 */                     }
/*  5184 */                     err.traceback.push({
/*  5185 */                         lineno: $currLineNo,
/*  5186 */                         colno: $currColNo,
/*  5187 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5188 */                     });
/*  5189 */                     if ($exc.length > 0) {
/*  5190 */                         $err = err;
/*  5191 */                         $blk = $exc.pop();
/*  5192 */                         continue;
/*  5193 */                     } else {
/*  5194 */                         throw err;
/*  5195 */                     }
/*  5196 */                 }
/*  5197 */             }
/*  5198 */         }).apply(null, $rest);
/*  5199 */     });
/*  5200 */     var $scope266 = (function $__init__267$(self, i, p, w, initialState, r) {
/*  5201 */         var i, i, i, initialState, initialState, initialState, initialState, p, p, r, r, self, self, self, self, self, self, self, self, self, self, self, w, w, $loadgbl268, $loadgbl268, $lattr269, $lattr270, $lattr270, $call271, $lattr272, $lattr272, $call273, $lattr274, $lattr274, $call275, $loadgbl276, $loadgbl277, $loadgbl277, $lattr278;
/*  5202 */         var $wakeFromSuspension = function() {
/*  5203 */             var susp = $scope266.$wakingSuspension;
/*  5204 */             delete $scope266.$wakingSuspension;
/*  5205 */             $blk = susp.$blk;
/*  5206 */             $loc = susp.$loc;
/*  5207 */             $gbl = susp.$gbl;
/*  5208 */             $exc = susp.$exc;
/*  5209 */             $err = susp.$err;
/*  5210 */             $postfinally = susp.$postfinally;
/*  5211 */             $currLineNo = susp.$lineno;
/*  5212 */             $currColNo = susp.$colno;
/*  5213 */             Sk.lastYield = Date.now();
/*  5214 */             i = susp.$tmps.i;
/*  5215 */             initialState = susp.$tmps.initialState;
/*  5216 */             p = susp.$tmps.p;
/*  5217 */             r = susp.$tmps.r;
/*  5218 */             self = susp.$tmps.self;
/*  5219 */             w = susp.$tmps.w;
/*  5220 */             $loadgbl268 = susp.$tmps.$loadgbl268;
/*  5221 */             $lattr269 = susp.$tmps.$lattr269;
/*  5222 */             $lattr270 = susp.$tmps.$lattr270;
/*  5223 */             $call271 = susp.$tmps.$call271;
/*  5224 */             $lattr272 = susp.$tmps.$lattr272;
/*  5225 */             $call273 = susp.$tmps.$call273;
/*  5226 */             $lattr274 = susp.$tmps.$lattr274;
/*  5227 */             $call275 = susp.$tmps.$call275;
/*  5228 */             $loadgbl276 = susp.$tmps.$loadgbl276;
/*  5229 */             $loadgbl277 = susp.$tmps.$loadgbl277;
/*  5230 */             $lattr278 = susp.$tmps.$lattr278;
/*  5231 */             try {
/*  5232 */                 $ret = susp.child.resume();
/*  5233 */             } catch (err) {
/*  5234 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5235 */                     err = new Sk.builtin.ExternalError(err);
/*  5236 */                 }
/*  5237 */                 err.traceback.push({
/*  5238 */                     lineno: $currLineNo,
/*  5239 */                     colno: $currColNo,
/*  5240 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5241 */                 });
/*  5242 */                 if ($exc.length > 0) {
/*  5243 */                     $err = err;
/*  5244 */                     $blk = $exc.pop();
/*  5245 */                 } else {
/*  5246 */                     throw err;
/*  5247 */                 }
/*  5248 */             }
/*  5249 */         };
/*  5250 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5251 */             var susp = new Sk.misceval.Suspension();
/*  5252 */             susp.child = $child;
/*  5253 */             susp.resume = function() {
/*  5254 */                 $scope266.$wakingSuspension = susp;
/*  5255 */                 return $scope266();
/*  5256 */             };
/*  5257 */             susp.data = susp.child.data;
/*  5258 */             susp.$blk = $blk;
/*  5259 */             susp.$loc = $loc;
/*  5260 */             susp.$gbl = $gbl;
/*  5261 */             susp.$exc = $exc;
/*  5262 */             susp.$err = $err;
/*  5263 */             susp.$postfinally = $postfinally;
/*  5264 */             susp.$filename = $filename;
/*  5265 */             susp.$lineno = $lineno;
/*  5266 */             susp.$colno = $colno;
/*  5267 */             susp.optional = susp.child.optional;
/*  5268 */             susp.$tmps = {
/*  5269 */                 "i": i,
/*  5270 */                 "initialState": initialState,
/*  5271 */                 "p": p,
/*  5272 */                 "r": r,
/*  5273 */                 "self": self,
/*  5274 */                 "w": w,
/*  5275 */                 "$loadgbl268": $loadgbl268,
/*  5276 */                 "$lattr269": $lattr269,
/*  5277 */                 "$lattr270": $lattr270,
/*  5278 */                 "$call271": $call271,
/*  5279 */                 "$lattr272": $lattr272,
/*  5280 */                 "$call273": $call273,
/*  5281 */                 "$lattr274": $lattr274,
/*  5282 */                 "$call275": $call275,
/*  5283 */                 "$loadgbl276": $loadgbl276,
/*  5284 */                 "$loadgbl277": $loadgbl277,
/*  5285 */                 "$lattr278": $lattr278
/*  5286 */             };
/*  5287 */             return susp;
/*  5288 */         };
/*  5289 */         var $blk = 0,
/*  5290 */             $exc = [],
/*  5291 */             $loc = {},
/*  5292 */             $gbl = this,
/*  5293 */             $err = undefined,
/*  5294 */             $ret = undefined,
/*  5295 */             $postfinally = undefined,
/*  5296 */             $currLineNo = undefined,
/*  5297 */             $currColNo = undefined;
/*  5298 */         if (typeof Sk.execStart === 'undefined') {
/*  5299 */             Sk.execStart = Date.now()
/*  5300 */         }
/*  5301 */         if (typeof Sk.lastYield === 'undefined') {
/*  5302 */             Sk.lastYield = Date.now()
/*  5303 */         }
/*  5304 */         if ($scope266.$wakingSuspension !== undefined) {
/*  5305 */             $wakeFromSuspension();
/*  5306 */         } else {
/*  5307 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  5308 */         }
/*  5309 */         while (true) {
/*  5310 */             try {
/*  5311 */                 var $dateNow = Date.now();
/*  5312 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5313 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5314 */                 }
/*  5315 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5316 */                     var $susp = $saveSuspension({
/*  5317 */                         data: {
/*  5318 */                             type: 'Sk.yield'
/*  5319 */                         },
/*  5320 */                         resume: function() {}
/*  5321 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  5322 */                     $susp.$blk = $blk;
/*  5323 */                     $susp.optional = true;
/*  5324 */                     return $susp;
/*  5325 */                 }
/*  5326 */                 switch ($blk) {
/*  5327 */                 case 0:
/*  5328 */                     /* --- codeobj entry --- */
/*  5329 */                     if (self === undefined) {
/*  5330 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5331 */                     }
/*  5332 */                     if (i === undefined) {
/*  5333 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  5334 */                     }
/*  5335 */                     if (p === undefined) {
/*  5336 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5337 */                     }
/*  5338 */                     if (w === undefined) {
/*  5339 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  5340 */                     }
/*  5341 */                     if (initialState === undefined) {
/*  5342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  5343 */                     }
/*  5344 */                     if (r === undefined) {
/*  5345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  5346 */                     }
/*  5347 */ 
/*  5348 */                     //
/*  5349 */                     // line 160:
/*  5350 */                     //         self.link = taskWorkArea.taskList
/*  5351 */                     //         ^
/*  5352 */                     //
/*  5353 */                     $currLineNo = 160;
/*  5354 */                     $currColNo = 8;
/*  5355 */ 
/*  5356 */                     var $loadgbl268 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  5357 */                     $ret = Sk.abstr.gattr($loadgbl268, 'taskList', true);
/*  5358 */                     $blk = 1; /* allowing case fallthrough */
/*  5359 */                 case 1:
/*  5360 */                     /* --- function return or resume suspension --- */
/*  5361 */                     if ($ret && $ret.$isSuspension) {
/*  5362 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 160, 20);
/*  5363 */                     }
/*  5364 */                     var $lattr269 = $ret;
/*  5365 */                     if (self === undefined) {
/*  5366 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5367 */                     }
/*  5368 */                     $ret = Sk.abstr.sattr(self, 'link', $lattr269, true);
/*  5369 */                     $blk = 2; /* allowing case fallthrough */
/*  5370 */                 case 2:
/*  5371 */                     /* --- function return or resume suspension --- */
/*  5372 */                     if ($ret && $ret.$isSuspension) {
/*  5373 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 160, 8);
/*  5374 */                     }
/*  5375 */                     //
/*  5376 */                     // line 161:
/*  5377 */                     //         self.ident = i
/*  5378 */                     //         ^
/*  5379 */                     //
/*  5380 */                     $currLineNo = 161;
/*  5381 */                     $currColNo = 8;
/*  5382 */ 
/*  5383 */                     if (i === undefined) {
/*  5384 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  5385 */                     }
/*  5386 */                     if (self === undefined) {
/*  5387 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5388 */                     }
/*  5389 */                     $ret = Sk.abstr.sattr(self, 'ident', i, true);
/*  5390 */                     $blk = 3; /* allowing case fallthrough */
/*  5391 */                 case 3:
/*  5392 */                     /* --- function return or resume suspension --- */
/*  5393 */                     if ($ret && $ret.$isSuspension) {
/*  5394 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 161, 8);
/*  5395 */                     }
/*  5396 */                     //
/*  5397 */                     // line 162:
/*  5398 */                     //         self.priority = p
/*  5399 */                     //         ^
/*  5400 */                     //
/*  5401 */                     $currLineNo = 162;
/*  5402 */                     $currColNo = 8;
/*  5403 */ 
/*  5404 */                     if (p === undefined) {
/*  5405 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5406 */                     }
/*  5407 */                     if (self === undefined) {
/*  5408 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5409 */                     }
/*  5410 */                     $ret = Sk.abstr.sattr(self, 'priority', p, true);
/*  5411 */                     $blk = 4; /* allowing case fallthrough */
/*  5412 */                 case 4:
/*  5413 */                     /* --- function return or resume suspension --- */
/*  5414 */                     if ($ret && $ret.$isSuspension) {
/*  5415 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 162, 8);
/*  5416 */                     }
/*  5417 */                     //
/*  5418 */                     // line 163:
/*  5419 */                     //         self.input = w
/*  5420 */                     //         ^
/*  5421 */                     //
/*  5422 */                     $currLineNo = 163;
/*  5423 */                     $currColNo = 8;
/*  5424 */ 
/*  5425 */                     if (w === undefined) {
/*  5426 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  5427 */                     }
/*  5428 */                     if (self === undefined) {
/*  5429 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5430 */                     }
/*  5431 */                     $ret = Sk.abstr.sattr(self, 'input', w, true);
/*  5432 */                     $blk = 5; /* allowing case fallthrough */
/*  5433 */                 case 5:
/*  5434 */                     /* --- function return or resume suspension --- */
/*  5435 */                     if ($ret && $ret.$isSuspension) {
/*  5436 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 163, 8);
/*  5437 */                     }
/*  5438 */                     //
/*  5439 */                     // line 165:
/*  5440 */                     //         self.packet_pending = initialState.isPacketPending()
/*  5441 */                     //         ^
/*  5442 */                     //
/*  5443 */                     $currLineNo = 165;
/*  5444 */                     $currColNo = 8;
/*  5445 */ 
/*  5446 */                     if (initialState === undefined) {
/*  5447 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  5448 */                     }
/*  5449 */                     $ret = Sk.abstr.gattr(initialState, 'isPacketPending', true);
/*  5450 */                     $blk = 6; /* allowing case fallthrough */
/*  5451 */                 case 6:
/*  5452 */                     /* --- function return or resume suspension --- */
/*  5453 */                     if ($ret && $ret.$isSuspension) {
/*  5454 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 30);
/*  5455 */                     }
/*  5456 */                     var $lattr270 = $ret;
/*  5457 */                     $ret;
/*  5458 */                     $ret = Sk.misceval.callsimOrSuspend($lattr270);
/*  5459 */                     $blk = 7; /* allowing case fallthrough */
/*  5460 */                 case 7:
/*  5461 */                     /* --- function return or resume suspension --- */
/*  5462 */                     if ($ret && $ret.$isSuspension) {
/*  5463 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 30);
/*  5464 */                     }
/*  5465 */                     var $call271 = $ret;
/*  5466 */                     //
/*  5467 */                     // line 165:
/*  5468 */                     //         self.packet_pending = initialState.isPacketPending()
/*  5469 */                     //                               ^
/*  5470 */                     //
/*  5471 */                     $currLineNo = 165;
/*  5472 */                     $currColNo = 30;
/*  5473 */ 
/*  5474 */                     if (self === undefined) {
/*  5475 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5476 */                     }
/*  5477 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', $call271, true);
/*  5478 */                     $blk = 8; /* allowing case fallthrough */
/*  5479 */                 case 8:
/*  5480 */                     /* --- function return or resume suspension --- */
/*  5481 */                     if ($ret && $ret.$isSuspension) {
/*  5482 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 8);
/*  5483 */                     }
/*  5484 */                     //
/*  5485 */                     // line 166:
/*  5486 */                     //         self.task_waiting = initialState.isTaskWaiting()
/*  5487 */                     //         ^
/*  5488 */                     //
/*  5489 */                     $currLineNo = 166;
/*  5490 */                     $currColNo = 8;
/*  5491 */ 
/*  5492 */                     if (initialState === undefined) {
/*  5493 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  5494 */                     }
/*  5495 */                     $ret = Sk.abstr.gattr(initialState, 'isTaskWaiting', true);
/*  5496 */                     $blk = 9; /* allowing case fallthrough */
/*  5497 */                 case 9:
/*  5498 */                     /* --- function return or resume suspension --- */
/*  5499 */                     if ($ret && $ret.$isSuspension) {
/*  5500 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 28);
/*  5501 */                     }
/*  5502 */                     var $lattr272 = $ret;
/*  5503 */                     $ret;
/*  5504 */                     $ret = Sk.misceval.callsimOrSuspend($lattr272);
/*  5505 */                     $blk = 10; /* allowing case fallthrough */
/*  5506 */                 case 10:
/*  5507 */                     /* --- function return or resume suspension --- */
/*  5508 */                     if ($ret && $ret.$isSuspension) {
/*  5509 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 28);
/*  5510 */                     }
/*  5511 */                     var $call273 = $ret;
/*  5512 */                     //
/*  5513 */                     // line 166:
/*  5514 */                     //         self.task_waiting = initialState.isTaskWaiting()
/*  5515 */                     //                             ^
/*  5516 */                     //
/*  5517 */                     $currLineNo = 166;
/*  5518 */                     $currColNo = 28;
/*  5519 */ 
/*  5520 */                     if (self === undefined) {
/*  5521 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5522 */                     }
/*  5523 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', $call273, true);
/*  5524 */                     $blk = 11; /* allowing case fallthrough */
/*  5525 */                 case 11:
/*  5526 */                     /* --- function return or resume suspension --- */
/*  5527 */                     if ($ret && $ret.$isSuspension) {
/*  5528 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 8);
/*  5529 */                     }
/*  5530 */                     //
/*  5531 */                     // line 167:
/*  5532 */                     //         self.task_holding = initialState.isTaskHolding()
/*  5533 */                     //         ^
/*  5534 */                     //
/*  5535 */                     $currLineNo = 167;
/*  5536 */                     $currColNo = 8;
/*  5537 */ 
/*  5538 */                     if (initialState === undefined) {
/*  5539 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  5540 */                     }
/*  5541 */                     $ret = Sk.abstr.gattr(initialState, 'isTaskHolding', true);
/*  5542 */                     $blk = 12; /* allowing case fallthrough */
/*  5543 */                 case 12:
/*  5544 */                     /* --- function return or resume suspension --- */
/*  5545 */                     if ($ret && $ret.$isSuspension) {
/*  5546 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 28);
/*  5547 */                     }
/*  5548 */                     var $lattr274 = $ret;
/*  5549 */                     $ret;
/*  5550 */                     $ret = Sk.misceval.callsimOrSuspend($lattr274);
/*  5551 */                     $blk = 13; /* allowing case fallthrough */
/*  5552 */                 case 13:
/*  5553 */                     /* --- function return or resume suspension --- */
/*  5554 */                     if ($ret && $ret.$isSuspension) {
/*  5555 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 28);
/*  5556 */                     }
/*  5557 */                     var $call275 = $ret;
/*  5558 */                     //
/*  5559 */                     // line 167:
/*  5560 */                     //         self.task_holding = initialState.isTaskHolding()
/*  5561 */                     //                             ^
/*  5562 */                     //
/*  5563 */                     $currLineNo = 167;
/*  5564 */                     $currColNo = 28;
/*  5565 */ 
/*  5566 */                     if (self === undefined) {
/*  5567 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5568 */                     }
/*  5569 */                     $ret = Sk.abstr.sattr(self, 'task_holding', $call275, true);
/*  5570 */                     $blk = 14; /* allowing case fallthrough */
/*  5571 */                 case 14:
/*  5572 */                     /* --- function return or resume suspension --- */
/*  5573 */                     if ($ret && $ret.$isSuspension) {
/*  5574 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 8);
/*  5575 */                     }
/*  5576 */                     //
/*  5577 */                     // line 169:
/*  5578 */                     //         self.handle = r
/*  5579 */                     //         ^
/*  5580 */                     //
/*  5581 */                     $currLineNo = 169;
/*  5582 */                     $currColNo = 8;
/*  5583 */ 
/*  5584 */                     if (r === undefined) {
/*  5585 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  5586 */                     }
/*  5587 */                     if (self === undefined) {
/*  5588 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5589 */                     }
/*  5590 */                     $ret = Sk.abstr.sattr(self, 'handle', r, true);
/*  5591 */                     $blk = 15; /* allowing case fallthrough */
/*  5592 */                 case 15:
/*  5593 */                     /* --- function return or resume suspension --- */
/*  5594 */                     if ($ret && $ret.$isSuspension) {
/*  5595 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 169, 8);
/*  5596 */                     }
/*  5597 */                     //
/*  5598 */                     // line 171:
/*  5599 */                     //         taskWorkArea.taskList = self
/*  5600 */                     //         ^
/*  5601 */                     //
/*  5602 */                     $currLineNo = 171;
/*  5603 */                     $currColNo = 8;
/*  5604 */ 
/*  5605 */                     if (self === undefined) {
/*  5606 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5607 */                     }
/*  5608 */                     var $loadgbl276 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  5609 */                     $ret = Sk.abstr.sattr($loadgbl276, 'taskList', self, true);
/*  5610 */                     $blk = 16; /* allowing case fallthrough */
/*  5611 */                 case 16:
/*  5612 */                     /* --- function return or resume suspension --- */
/*  5613 */                     if ($ret && $ret.$isSuspension) {
/*  5614 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 171, 8);
/*  5615 */                     }
/*  5616 */                     //
/*  5617 */                     // line 172:
/*  5618 */                     //         taskWorkArea.taskTab[i] = self
/*  5619 */                     //         ^
/*  5620 */                     //
/*  5621 */                     $currLineNo = 172;
/*  5622 */                     $currColNo = 8;
/*  5623 */ 
/*  5624 */                     if (self === undefined) {
/*  5625 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5626 */                     }
/*  5627 */                     var $loadgbl277 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  5628 */                     $ret = Sk.abstr.gattr($loadgbl277, 'taskTab', true);
/*  5629 */                     $blk = 17; /* allowing case fallthrough */
/*  5630 */                 case 17:
/*  5631 */                     /* --- function return or resume suspension --- */
/*  5632 */                     if ($ret && $ret.$isSuspension) {
/*  5633 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 172, 8);
/*  5634 */                     }
/*  5635 */                     var $lattr278 = $ret;
/*  5636 */                     if (i === undefined) {
/*  5637 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  5638 */                     }
/*  5639 */                     $ret = Sk.abstr.objectSetItem($lattr278, i, self, true);
/*  5640 */                     $blk = 18; /* allowing case fallthrough */
/*  5641 */                 case 18:
/*  5642 */                     /* --- function return or resume suspension --- */
/*  5643 */                     if ($ret && $ret.$isSuspension) {
/*  5644 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  5645 */                     }
/*  5646 */                     return Sk.builtin.none.none$;
/*  5647 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5648 */                 }
/*  5649 */             } catch (err) {
/*  5650 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5651 */                     err = new Sk.builtin.ExternalError(err);
/*  5652 */                 }
/*  5653 */                 err.traceback.push({
/*  5654 */                     lineno: $currLineNo,
/*  5655 */                     colno: $currColNo,
/*  5656 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5657 */                 });
/*  5658 */                 if ($exc.length > 0) {
/*  5659 */                     $err = err;
/*  5660 */                     $blk = $exc.pop();
/*  5661 */                     continue;
/*  5662 */                 } else {
/*  5663 */                     throw err;
/*  5664 */                 }
/*  5665 */             }
/*  5666 */         }
/*  5667 */     });
/*  5668 */     var $scope280 = (function $fn281$(self, pkt, r) {
/*  5669 */         var pkt, r, self;
/*  5670 */         var $wakeFromSuspension = function() {
/*  5671 */             var susp = $scope280.$wakingSuspension;
/*  5672 */             delete $scope280.$wakingSuspension;
/*  5673 */             $blk = susp.$blk;
/*  5674 */             $loc = susp.$loc;
/*  5675 */             $gbl = susp.$gbl;
/*  5676 */             $exc = susp.$exc;
/*  5677 */             $err = susp.$err;
/*  5678 */             $postfinally = susp.$postfinally;
/*  5679 */             $currLineNo = susp.$lineno;
/*  5680 */             $currColNo = susp.$colno;
/*  5681 */             Sk.lastYield = Date.now();
/*  5682 */             pkt = susp.$tmps.pkt;
/*  5683 */             r = susp.$tmps.r;
/*  5684 */             self = susp.$tmps.self;
/*  5685 */             try {
/*  5686 */                 $ret = susp.child.resume();
/*  5687 */             } catch (err) {
/*  5688 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5689 */                     err = new Sk.builtin.ExternalError(err);
/*  5690 */                 }
/*  5691 */                 err.traceback.push({
/*  5692 */                     lineno: $currLineNo,
/*  5693 */                     colno: $currColNo,
/*  5694 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5695 */                 });
/*  5696 */                 if ($exc.length > 0) {
/*  5697 */                     $err = err;
/*  5698 */                     $blk = $exc.pop();
/*  5699 */                 } else {
/*  5700 */                     throw err;
/*  5701 */                 }
/*  5702 */             }
/*  5703 */         };
/*  5704 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5705 */             var susp = new Sk.misceval.Suspension();
/*  5706 */             susp.child = $child;
/*  5707 */             susp.resume = function() {
/*  5708 */                 $scope280.$wakingSuspension = susp;
/*  5709 */                 return $scope280();
/*  5710 */             };
/*  5711 */             susp.data = susp.child.data;
/*  5712 */             susp.$blk = $blk;
/*  5713 */             susp.$loc = $loc;
/*  5714 */             susp.$gbl = $gbl;
/*  5715 */             susp.$exc = $exc;
/*  5716 */             susp.$err = $err;
/*  5717 */             susp.$postfinally = $postfinally;
/*  5718 */             susp.$filename = $filename;
/*  5719 */             susp.$lineno = $lineno;
/*  5720 */             susp.$colno = $colno;
/*  5721 */             susp.optional = susp.child.optional;
/*  5722 */             susp.$tmps = {
/*  5723 */                 "pkt": pkt,
/*  5724 */                 "r": r,
/*  5725 */                 "self": self
/*  5726 */             };
/*  5727 */             return susp;
/*  5728 */         };
/*  5729 */         var $blk = 0,
/*  5730 */             $exc = [],
/*  5731 */             $loc = {},
/*  5732 */             $gbl = this,
/*  5733 */             $err = undefined,
/*  5734 */             $ret = undefined,
/*  5735 */             $postfinally = undefined,
/*  5736 */             $currLineNo = undefined,
/*  5737 */             $currColNo = undefined;
/*  5738 */         if (typeof Sk.execStart === 'undefined') {
/*  5739 */             Sk.execStart = Date.now()
/*  5740 */         }
/*  5741 */         if (typeof Sk.lastYield === 'undefined') {
/*  5742 */             Sk.lastYield = Date.now()
/*  5743 */         }
/*  5744 */         if ($scope280.$wakingSuspension !== undefined) {
/*  5745 */             $wakeFromSuspension();
/*  5746 */         } else {
/*  5747 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  5748 */         }
/*  5749 */         while (true) {
/*  5750 */             try {
/*  5751 */                 var $dateNow = Date.now();
/*  5752 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5753 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5754 */                 }
/*  5755 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5756 */                     var $susp = $saveSuspension({
/*  5757 */                         data: {
/*  5758 */                             type: 'Sk.yield'
/*  5759 */                         },
/*  5760 */                         resume: function() {}
/*  5761 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  5762 */                     $susp.$blk = $blk;
/*  5763 */                     $susp.optional = true;
/*  5764 */                     return $susp;
/*  5765 */                 }
/*  5766 */                 switch ($blk) {
/*  5767 */                 case 0:
/*  5768 */                     /* --- codeobj entry --- */
/*  5769 */                     if (self === undefined) {
/*  5770 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5771 */                     }
/*  5772 */                     if (pkt === undefined) {
/*  5773 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  5774 */                     }
/*  5775 */                     if (r === undefined) {
/*  5776 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  5777 */                     }
/*  5778 */ 
/*  5779 */                     //
/*  5780 */                     // line 175:
/*  5781 */                     //         raise NotImplementedError
/*  5782 */                     //         ^
/*  5783 */                     //
/*  5784 */                     $currLineNo = 175;
/*  5785 */                     $currColNo = 8;
/*  5786 */ 
/*  5787 */                     var $loadgbl282 = Sk.misceval.loadname('NotImplementedError', $gbl);
/*  5788 */                     var $err283 = $loadgbl282;
/*  5789 */                     if ($err283 instanceof Sk.builtin.type) {
/*  5790 */                         throw Sk.misceval.callsim($err283);
/*  5791 */                     } else if (typeof($err283) === 'function') {
/*  5792 */                         throw $err283();
/*  5793 */                     } else {
/*  5794 */                         throw $err283;
/*  5795 */                     }
/*  5796 */                     return Sk.builtin.none.none$;
/*  5797 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5798 */                 }
/*  5799 */             } catch (err) {
/*  5800 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5801 */                     err = new Sk.builtin.ExternalError(err);
/*  5802 */                 }
/*  5803 */                 err.traceback.push({
/*  5804 */                     lineno: $currLineNo,
/*  5805 */                     colno: $currColNo,
/*  5806 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5807 */                 });
/*  5808 */                 if ($exc.length > 0) {
/*  5809 */                     $err = err;
/*  5810 */                     $blk = $exc.pop();
/*  5811 */                     continue;
/*  5812 */                 } else {
/*  5813 */                     throw err;
/*  5814 */                 }
/*  5815 */             }
/*  5816 */         }
/*  5817 */     });
/*  5818 */     var $scope285 = (function $addPacket286$(self, p, old) {
/*  5819 */         var old, old, old, p, p, p, self, self, self, self, self, self, self, $lattr287, $compareres288, $lattr291, $compareres292, $lattr291, $compareres292, $lattr293, $lattr296, $lattr296, $lattr297;
/*  5820 */         var $wakeFromSuspension = function() {
/*  5821 */             var susp = $scope285.$wakingSuspension;
/*  5822 */             delete $scope285.$wakingSuspension;
/*  5823 */             $blk = susp.$blk;
/*  5824 */             $loc = susp.$loc;
/*  5825 */             $gbl = susp.$gbl;
/*  5826 */             $exc = susp.$exc;
/*  5827 */             $err = susp.$err;
/*  5828 */             $postfinally = susp.$postfinally;
/*  5829 */             $currLineNo = susp.$lineno;
/*  5830 */             $currColNo = susp.$colno;
/*  5831 */             Sk.lastYield = Date.now();
/*  5832 */             old = susp.$tmps.old;
/*  5833 */             p = susp.$tmps.p;
/*  5834 */             self = susp.$tmps.self;
/*  5835 */             $lattr287 = susp.$tmps.$lattr287;
/*  5836 */             $compareres288 = susp.$tmps.$compareres288;
/*  5837 */             $lattr291 = susp.$tmps.$lattr291;
/*  5838 */             $compareres292 = susp.$tmps.$compareres292;
/*  5839 */             $lattr293 = susp.$tmps.$lattr293;
/*  5840 */             $lattr296 = susp.$tmps.$lattr296;
/*  5841 */             $lattr297 = susp.$tmps.$lattr297;
/*  5842 */             try {
/*  5843 */                 $ret = susp.child.resume();
/*  5844 */             } catch (err) {
/*  5845 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5846 */                     err = new Sk.builtin.ExternalError(err);
/*  5847 */                 }
/*  5848 */                 err.traceback.push({
/*  5849 */                     lineno: $currLineNo,
/*  5850 */                     colno: $currColNo,
/*  5851 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5852 */                 });
/*  5853 */                 if ($exc.length > 0) {
/*  5854 */                     $err = err;
/*  5855 */                     $blk = $exc.pop();
/*  5856 */                 } else {
/*  5857 */                     throw err;
/*  5858 */                 }
/*  5859 */             }
/*  5860 */         };
/*  5861 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5862 */             var susp = new Sk.misceval.Suspension();
/*  5863 */             susp.child = $child;
/*  5864 */             susp.resume = function() {
/*  5865 */                 $scope285.$wakingSuspension = susp;
/*  5866 */                 return $scope285();
/*  5867 */             };
/*  5868 */             susp.data = susp.child.data;
/*  5869 */             susp.$blk = $blk;
/*  5870 */             susp.$loc = $loc;
/*  5871 */             susp.$gbl = $gbl;
/*  5872 */             susp.$exc = $exc;
/*  5873 */             susp.$err = $err;
/*  5874 */             susp.$postfinally = $postfinally;
/*  5875 */             susp.$filename = $filename;
/*  5876 */             susp.$lineno = $lineno;
/*  5877 */             susp.$colno = $colno;
/*  5878 */             susp.optional = susp.child.optional;
/*  5879 */             susp.$tmps = {
/*  5880 */                 "old": old,
/*  5881 */                 "p": p,
/*  5882 */                 "self": self,
/*  5883 */                 "$lattr287": $lattr287,
/*  5884 */                 "$compareres288": $compareres288,
/*  5885 */                 "$lattr291": $lattr291,
/*  5886 */                 "$compareres292": $compareres292,
/*  5887 */                 "$lattr293": $lattr293,
/*  5888 */                 "$lattr296": $lattr296,
/*  5889 */                 "$lattr297": $lattr297
/*  5890 */             };
/*  5891 */             return susp;
/*  5892 */         };
/*  5893 */         var $blk = 0,
/*  5894 */             $exc = [],
/*  5895 */             $loc = {},
/*  5896 */             $gbl = this,
/*  5897 */             $err = undefined,
/*  5898 */             $ret = undefined,
/*  5899 */             $postfinally = undefined,
/*  5900 */             $currLineNo = undefined,
/*  5901 */             $currColNo = undefined;
/*  5902 */         if (typeof Sk.execStart === 'undefined') {
/*  5903 */             Sk.execStart = Date.now()
/*  5904 */         }
/*  5905 */         if (typeof Sk.lastYield === 'undefined') {
/*  5906 */             Sk.lastYield = Date.now()
/*  5907 */         }
/*  5908 */         if ($scope285.$wakingSuspension !== undefined) {
/*  5909 */             $wakeFromSuspension();
/*  5910 */         } else {
/*  5911 */             Sk.builtin.pyCheckArgs("addPacket", arguments, 3, 3, false, false);
/*  5912 */         }
/*  5913 */         while (true) {
/*  5914 */             try {
/*  5915 */                 var $dateNow = Date.now();
/*  5916 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  5917 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5918 */                 }
/*  5919 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5920 */                     var $susp = $saveSuspension({
/*  5921 */                         data: {
/*  5922 */                             type: 'Sk.yield'
/*  5923 */                         },
/*  5924 */                         resume: function() {}
/*  5925 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  5926 */                     $susp.$blk = $blk;
/*  5927 */                     $susp.optional = true;
/*  5928 */                     return $susp;
/*  5929 */                 }
/*  5930 */                 switch ($blk) {
/*  5931 */                 case 0:
/*  5932 */                     /* --- codeobj entry --- */
/*  5933 */                     if (self === undefined) {
/*  5934 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5935 */                     }
/*  5936 */                     if (p === undefined) {
/*  5937 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5938 */                     }
/*  5939 */                     if (old === undefined) {
/*  5940 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  5941 */                     }
/*  5942 */ 
/*  5943 */                     //
/*  5944 */                     // line 179:
/*  5945 */                     //         if self.input is None:
/*  5946 */                     //         ^
/*  5947 */                     //
/*  5948 */                     $currLineNo = 179;
/*  5949 */                     $currColNo = 8;
/*  5950 */ 
/*  5951 */                     if (self === undefined) {
/*  5952 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5953 */                     }
/*  5954 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  5955 */                     $blk = 3; /* allowing case fallthrough */
/*  5956 */                 case 3:
/*  5957 */                     /* --- function return or resume suspension --- */
/*  5958 */                     if ($ret && $ret.$isSuspension) {
/*  5959 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 179, 11);
/*  5960 */                     }
/*  5961 */                     var $lattr287 = $ret;
/*  5962 */                     var $compareres288 = null;
/*  5963 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr287, Sk.builtin.none.none$, 'Is', true));
/*  5964 */                     $blk = 5; /* allowing case fallthrough */
/*  5965 */                 case 5:
/*  5966 */                     /* --- function return or resume suspension --- */
/*  5967 */                     if ($ret && $ret.$isSuspension) {
/*  5968 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 179, 11);
/*  5969 */                     }
/*  5970 */                     $compareres288 = $ret;
/*  5971 */                     var $jfalse289 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5972 */                     if ($jfalse289) { /*test failed */
/*  5973 */                         $blk = 4;
/*  5974 */                         continue;
/*  5975 */                     }
/*  5976 */                     $blk = 4; /* allowing case fallthrough */
/*  5977 */                 case 4:
/*  5978 */                     /* --- done --- */
/*  5979 */                     var $jfalse290 = ($compareres288 === false || !Sk.misceval.isTrue($compareres288));
/*  5980 */                     if ($jfalse290) { /*test failed */
/*  5981 */                         $blk = 2;
/*  5982 */                         continue;
/*  5983 */                     }
/*  5984 */                     //
/*  5985 */                     // line 180:
/*  5986 */                     //             self.input = p
/*  5987 */                     //             ^
/*  5988 */                     //
/*  5989 */                     $currLineNo = 180;
/*  5990 */                     $currColNo = 12;
/*  5991 */ 
/*  5992 */                     if (p === undefined) {
/*  5993 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5994 */                     }
/*  5995 */                     if (self === undefined) {
/*  5996 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5997 */                     }
/*  5998 */                     $ret = Sk.abstr.sattr(self, 'input', p, true);
/*  5999 */                     $blk = 6; /* allowing case fallthrough */
/*  6000 */                 case 6:
/*  6001 */                     /* --- function return or resume suspension --- */
/*  6002 */                     if ($ret && $ret.$isSuspension) {
/*  6003 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 180, 12);
/*  6004 */                     }
/*  6005 */                     //
/*  6006 */                     // line 181:
/*  6007 */                     //             self.packet_pending = True
/*  6008 */                     //             ^
/*  6009 */                     //
/*  6010 */                     $currLineNo = 181;
/*  6011 */                     $currColNo = 12;
/*  6012 */ 
/*  6013 */                     if (self === undefined) {
/*  6014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6015 */                     }
/*  6016 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  6017 */                     $blk = 7; /* allowing case fallthrough */
/*  6018 */                 case 7:
/*  6019 */                     /* --- function return or resume suspension --- */
/*  6020 */                     if ($ret && $ret.$isSuspension) {
/*  6021 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 181, 12);
/*  6022 */                     }
/*  6023 */                     //
/*  6024 */                     // line 182:
/*  6025 */                     //             if self.priority > old.priority:
/*  6026 */                     //             ^
/*  6027 */                     //
/*  6028 */                     $currLineNo = 182;
/*  6029 */                     $currColNo = 12;
/*  6030 */ 
/*  6031 */                     if (self === undefined) {
/*  6032 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6033 */                     }
/*  6034 */                     $ret = Sk.abstr.gattr(self, 'priority', true);
/*  6035 */                     $blk = 9; /* allowing case fallthrough */
/*  6036 */                 case 9:
/*  6037 */                     /* --- function return or resume suspension --- */
/*  6038 */                     if ($ret && $ret.$isSuspension) {
/*  6039 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 15);
/*  6040 */                     }
/*  6041 */                     var $lattr291 = $ret;
/*  6042 */                     var $compareres292 = null;
/*  6043 */                     if (old === undefined) {
/*  6044 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  6045 */                     }
/*  6046 */                     $ret = Sk.abstr.gattr(old, 'priority', true);
/*  6047 */                     $blk = 11; /* allowing case fallthrough */
/*  6048 */                 case 11:
/*  6049 */                     /* --- function return or resume suspension --- */
/*  6050 */                     if ($ret && $ret.$isSuspension) {
/*  6051 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 31);
/*  6052 */                     }
/*  6053 */                     var $lattr293 = $ret;
/*  6054 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr291, $lattr293, 'Gt', true));
/*  6055 */                     $blk = 12; /* allowing case fallthrough */
/*  6056 */                 case 12:
/*  6057 */                     /* --- function return or resume suspension --- */
/*  6058 */                     if ($ret && $ret.$isSuspension) {
/*  6059 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 15);
/*  6060 */                     }
/*  6061 */                     $compareres292 = $ret;
/*  6062 */                     var $jfalse294 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6063 */                     if ($jfalse294) { /*test failed */
/*  6064 */                         $blk = 10;
/*  6065 */                         continue;
/*  6066 */                     }
/*  6067 */                     $blk = 10; /* allowing case fallthrough */
/*  6068 */                 case 10:
/*  6069 */                     /* --- done --- */
/*  6070 */                     var $jfalse295 = ($compareres292 === false || !Sk.misceval.isTrue($compareres292));
/*  6071 */                     if ($jfalse295) { /*test failed */
/*  6072 */                         $blk = 8;
/*  6073 */                         continue;
/*  6074 */                     }
/*  6075 */                     //
/*  6076 */                     // line 183:
/*  6077 */                     //                 return self
/*  6078 */                     //                 ^
/*  6079 */                     //
/*  6080 */                     $currLineNo = 183;
/*  6081 */                     $currColNo = 16;
/*  6082 */ 
/*  6083 */                     if (self === undefined) {
/*  6084 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6085 */                     }
/*  6086 */                     return self;
/*  6087 */                     $blk = 8; /* allowing case fallthrough */
/*  6088 */                 case 8:
/*  6089 */                     /* --- end of if --- */
/*  6090 */                     $blk = 1; /* allowing case fallthrough */
/*  6091 */                 case 1:
/*  6092 */                     /* --- end of if --- */
/*  6093 */                     //
/*  6094 */                     // line 186:
/*  6095 */                     //         return old
/*  6096 */                     //         ^
/*  6097 */                     //
/*  6098 */                     $currLineNo = 186;
/*  6099 */                     $currColNo = 8;
/*  6100 */ 
/*  6101 */                     if (old === undefined) {
/*  6102 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  6103 */                     }
/*  6104 */                     return old;
/*  6105 */                     return Sk.builtin.none.none$;
/*  6106 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6107 */                 case 2:
/*  6108 */                     /* --- next branch of if --- */
/*  6109 */                     //
/*  6110 */                     // line 185:
/*  6111 */                     //             p.append_to(self.input)
/*  6112 */                     //             ^
/*  6113 */                     //
/*  6114 */                     $currLineNo = 185;
/*  6115 */                     $currColNo = 12;
/*  6116 */ 
/*  6117 */                     if (p === undefined) {
/*  6118 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  6119 */                     }
/*  6120 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  6121 */                     $blk = 13; /* allowing case fallthrough */
/*  6122 */                 case 13:
/*  6123 */                     /* --- function return or resume suspension --- */
/*  6124 */                     if ($ret && $ret.$isSuspension) {
/*  6125 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 12);
/*  6126 */                     }
/*  6127 */                     var $lattr296 = $ret;
/*  6128 */                     if (self === undefined) {
/*  6129 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6130 */                     }
/*  6131 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  6132 */                     $blk = 14; /* allowing case fallthrough */
/*  6133 */                 case 14:
/*  6134 */                     /* --- function return or resume suspension --- */
/*  6135 */                     if ($ret && $ret.$isSuspension) {
/*  6136 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 24);
/*  6137 */                     }
/*  6138 */                     var $lattr297 = $ret;
/*  6139 */                     $ret;
/*  6140 */                     $ret = Sk.misceval.callsimOrSuspend($lattr296, $lattr297);
/*  6141 */                     $blk = 15; /* allowing case fallthrough */
/*  6142 */                 case 15:
/*  6143 */                     /* --- function return or resume suspension --- */
/*  6144 */                     if ($ret && $ret.$isSuspension) {
/*  6145 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 12);
/*  6146 */                     }
/*  6147 */                     var $call298 = $ret;
/*  6148 */                     //
/*  6149 */                     // line 185:
/*  6150 */                     //             p.append_to(self.input)
/*  6151 */                     //             ^
/*  6152 */                     //
/*  6153 */                     $currLineNo = 185;
/*  6154 */                     $currColNo = 12;
/*  6155 */ 
/*  6156 */                     $blk = 1; /* jump */
/*  6157 */                     continue;
/*  6158 */                 }
/*  6159 */             } catch (err) {
/*  6160 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6161 */                     err = new Sk.builtin.ExternalError(err);
/*  6162 */                 }
/*  6163 */                 err.traceback.push({
/*  6164 */                     lineno: $currLineNo,
/*  6165 */                     colno: $currColNo,
/*  6166 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6167 */                 });
/*  6168 */                 if ($exc.length > 0) {
/*  6169 */                     $err = err;
/*  6170 */                     $blk = $exc.pop();
/*  6171 */                     continue;
/*  6172 */                 } else {
/*  6173 */                     throw err;
/*  6174 */                 }
/*  6175 */             }
/*  6176 */         }
/*  6177 */     });
/*  6178 */     var $scope300 = (function $runTask301$(self) {
/*  6179 */         var msg; /* locals */
/*  6180 */         var msg, msg, msg, msg, self, self, self, self, self, self, self, self, self, $lattr302, $lattr306, $lattr307, $compareres308, $lattr311, $lattr313, $lattr315, $lattr315, $lattr316;
/*  6181 */         var $wakeFromSuspension = function() {
/*  6182 */             var susp = $scope300.$wakingSuspension;
/*  6183 */             delete $scope300.$wakingSuspension;
/*  6184 */             $blk = susp.$blk;
/*  6185 */             $loc = susp.$loc;
/*  6186 */             $gbl = susp.$gbl;
/*  6187 */             $exc = susp.$exc;
/*  6188 */             $err = susp.$err;
/*  6189 */             $postfinally = susp.$postfinally;
/*  6190 */             $currLineNo = susp.$lineno;
/*  6191 */             $currColNo = susp.$colno;
/*  6192 */             Sk.lastYield = Date.now();
/*  6193 */             msg = susp.$tmps.msg;
/*  6194 */             self = susp.$tmps.self;
/*  6195 */             $lattr302 = susp.$tmps.$lattr302;
/*  6196 */             $lattr306 = susp.$tmps.$lattr306;
/*  6197 */             $lattr307 = susp.$tmps.$lattr307;
/*  6198 */             $compareres308 = susp.$tmps.$compareres308;
/*  6199 */             $lattr311 = susp.$tmps.$lattr311;
/*  6200 */             $lattr313 = susp.$tmps.$lattr313;
/*  6201 */             $lattr315 = susp.$tmps.$lattr315;
/*  6202 */             $lattr316 = susp.$tmps.$lattr316;
/*  6203 */             try {
/*  6204 */                 $ret = susp.child.resume();
/*  6205 */             } catch (err) {
/*  6206 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6207 */                     err = new Sk.builtin.ExternalError(err);
/*  6208 */                 }
/*  6209 */                 err.traceback.push({
/*  6210 */                     lineno: $currLineNo,
/*  6211 */                     colno: $currColNo,
/*  6212 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6213 */                 });
/*  6214 */                 if ($exc.length > 0) {
/*  6215 */                     $err = err;
/*  6216 */                     $blk = $exc.pop();
/*  6217 */                 } else {
/*  6218 */                     throw err;
/*  6219 */                 }
/*  6220 */             }
/*  6221 */         };
/*  6222 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6223 */             var susp = new Sk.misceval.Suspension();
/*  6224 */             susp.child = $child;
/*  6225 */             susp.resume = function() {
/*  6226 */                 $scope300.$wakingSuspension = susp;
/*  6227 */                 return $scope300();
/*  6228 */             };
/*  6229 */             susp.data = susp.child.data;
/*  6230 */             susp.$blk = $blk;
/*  6231 */             susp.$loc = $loc;
/*  6232 */             susp.$gbl = $gbl;
/*  6233 */             susp.$exc = $exc;
/*  6234 */             susp.$err = $err;
/*  6235 */             susp.$postfinally = $postfinally;
/*  6236 */             susp.$filename = $filename;
/*  6237 */             susp.$lineno = $lineno;
/*  6238 */             susp.$colno = $colno;
/*  6239 */             susp.optional = susp.child.optional;
/*  6240 */             susp.$tmps = {
/*  6241 */                 "msg": msg,
/*  6242 */                 "self": self,
/*  6243 */                 "$lattr302": $lattr302,
/*  6244 */                 "$lattr306": $lattr306,
/*  6245 */                 "$lattr307": $lattr307,
/*  6246 */                 "$compareres308": $compareres308,
/*  6247 */                 "$lattr311": $lattr311,
/*  6248 */                 "$lattr313": $lattr313,
/*  6249 */                 "$lattr315": $lattr315,
/*  6250 */                 "$lattr316": $lattr316
/*  6251 */             };
/*  6252 */             return susp;
/*  6253 */         };
/*  6254 */         var $blk = 0,
/*  6255 */             $exc = [],
/*  6256 */             $loc = {},
/*  6257 */             $gbl = this,
/*  6258 */             $err = undefined,
/*  6259 */             $ret = undefined,
/*  6260 */             $postfinally = undefined,
/*  6261 */             $currLineNo = undefined,
/*  6262 */             $currColNo = undefined;
/*  6263 */         if (typeof Sk.execStart === 'undefined') {
/*  6264 */             Sk.execStart = Date.now()
/*  6265 */         }
/*  6266 */         if (typeof Sk.lastYield === 'undefined') {
/*  6267 */             Sk.lastYield = Date.now()
/*  6268 */         }
/*  6269 */         if ($scope300.$wakingSuspension !== undefined) {
/*  6270 */             $wakeFromSuspension();
/*  6271 */         } else {
/*  6272 */             Sk.builtin.pyCheckArgs("runTask", arguments, 1, 1, false, false);
/*  6273 */         }
/*  6274 */         while (true) {
/*  6275 */             try {
/*  6276 */                 var $dateNow = Date.now();
/*  6277 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  6278 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6279 */                 }
/*  6280 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6281 */                     var $susp = $saveSuspension({
/*  6282 */                         data: {
/*  6283 */                             type: 'Sk.yield'
/*  6284 */                         },
/*  6285 */                         resume: function() {}
/*  6286 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  6287 */                     $susp.$blk = $blk;
/*  6288 */                     $susp.optional = true;
/*  6289 */                     return $susp;
/*  6290 */                 }
/*  6291 */                 switch ($blk) {
/*  6292 */                 case 0:
/*  6293 */                     /* --- codeobj entry --- */
/*  6294 */                     if (self === undefined) {
/*  6295 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6296 */                     }
/*  6297 */ 
/*  6298 */                     //
/*  6299 */                     // line 190:
/*  6300 */                     //         if self.isWaitingWithPacket():
/*  6301 */                     //         ^
/*  6302 */                     //
/*  6303 */                     $currLineNo = 190;
/*  6304 */                     $currColNo = 8;
/*  6305 */ 
/*  6306 */                     if (self === undefined) {
/*  6307 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6308 */                     }
/*  6309 */                     $ret = Sk.abstr.gattr(self, 'isWaitingWithPacket', true);
/*  6310 */                     $blk = 3; /* allowing case fallthrough */
/*  6311 */                 case 3:
/*  6312 */                     /* --- function return or resume suspension --- */
/*  6313 */                     if ($ret && $ret.$isSuspension) {
/*  6314 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 190, 11);
/*  6315 */                     }
/*  6316 */                     var $lattr302 = $ret;
/*  6317 */                     $ret;
/*  6318 */                     $ret = Sk.misceval.callsimOrSuspend($lattr302);
/*  6319 */                     $blk = 4; /* allowing case fallthrough */
/*  6320 */                 case 4:
/*  6321 */                     /* --- function return or resume suspension --- */
/*  6322 */                     if ($ret && $ret.$isSuspension) {
/*  6323 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 190, 11);
/*  6324 */                     }
/*  6325 */                     var $call303 = $ret;
/*  6326 */                     //
/*  6327 */                     // line 190:
/*  6328 */                     //         if self.isWaitingWithPacket():
/*  6329 */                     //            ^
/*  6330 */                     //
/*  6331 */                     $currLineNo = 190;
/*  6332 */                     $currColNo = 11;
/*  6333 */ 
/*  6334 */                     var $jfalse304 = ($call303 === false || !Sk.misceval.isTrue($call303));
/*  6335 */                     if ($jfalse304) { /*test failed */
/*  6336 */                         $blk = 2;
/*  6337 */                         continue;
/*  6338 */                     }
/*  6339 */                     //
/*  6340 */                     // line 191:
/*  6341 */                     //             msg = self.input
/*  6342 */                     //             ^
/*  6343 */                     //
/*  6344 */                     $currLineNo = 191;
/*  6345 */                     $currColNo = 12;
/*  6346 */ 
/*  6347 */                     if (self === undefined) {
/*  6348 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6349 */                     }
/*  6350 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  6351 */                     $blk = 5; /* allowing case fallthrough */
/*  6352 */                 case 5:
/*  6353 */                     /* --- function return or resume suspension --- */
/*  6354 */                     if ($ret && $ret.$isSuspension) {
/*  6355 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 191, 18);
/*  6356 */                     }
/*  6357 */                     var $lattr305 = $ret;
/*  6358 */                     msg = $lattr305;
/*  6359 */                     //
/*  6360 */                     // line 192:
/*  6361 */                     //             self.input = msg.link
/*  6362 */                     //             ^
/*  6363 */                     //
/*  6364 */                     $currLineNo = 192;
/*  6365 */                     $currColNo = 12;
/*  6366 */ 
/*  6367 */                     if (msg === undefined) {
/*  6368 */                         throw new Sk.builtin.UnboundLocalError('local variable \'msg\' referenced before assignment');
/*  6369 */                     }
/*  6370 */                     $ret = Sk.abstr.gattr(msg, 'link', true);
/*  6371 */                     $blk = 6; /* allowing case fallthrough */
/*  6372 */                 case 6:
/*  6373 */                     /* --- function return or resume suspension --- */
/*  6374 */                     if ($ret && $ret.$isSuspension) {
/*  6375 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 192, 25);
/*  6376 */                     }
/*  6377 */                     var $lattr306 = $ret;
/*  6378 */                     if (self === undefined) {
/*  6379 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6380 */                     }
/*  6381 */                     $ret = Sk.abstr.sattr(self, 'input', $lattr306, true);
/*  6382 */                     $blk = 7; /* allowing case fallthrough */
/*  6383 */                 case 7:
/*  6384 */                     /* --- function return or resume suspension --- */
/*  6385 */                     if ($ret && $ret.$isSuspension) {
/*  6386 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 192, 12);
/*  6387 */                     }
/*  6388 */                     //
/*  6389 */                     // line 193:
/*  6390 */                     //             if self.input is None:
/*  6391 */                     //             ^
/*  6392 */                     //
/*  6393 */                     $currLineNo = 193;
/*  6394 */                     $currColNo = 12;
/*  6395 */ 
/*  6396 */                     if (self === undefined) {
/*  6397 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6398 */                     }
/*  6399 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  6400 */                     $blk = 10; /* allowing case fallthrough */
/*  6401 */                 case 10:
/*  6402 */                     /* --- function return or resume suspension --- */
/*  6403 */                     if ($ret && $ret.$isSuspension) {
/*  6404 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 193, 15);
/*  6405 */                     }
/*  6406 */                     var $lattr307 = $ret;
/*  6407 */                     var $compareres308 = null;
/*  6408 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr307, Sk.builtin.none.none$, 'Is', true));
/*  6409 */                     $blk = 12; /* allowing case fallthrough */
/*  6410 */                 case 12:
/*  6411 */                     /* --- function return or resume suspension --- */
/*  6412 */                     if ($ret && $ret.$isSuspension) {
/*  6413 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 193, 15);
/*  6414 */                     }
/*  6415 */                     $compareres308 = $ret;
/*  6416 */                     var $jfalse309 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6417 */                     if ($jfalse309) { /*test failed */
/*  6418 */                         $blk = 11;
/*  6419 */                         continue;
/*  6420 */                     }
/*  6421 */                     $blk = 11; /* allowing case fallthrough */
/*  6422 */                 case 11:
/*  6423 */                     /* --- done --- */
/*  6424 */                     var $jfalse310 = ($compareres308 === false || !Sk.misceval.isTrue($compareres308));
/*  6425 */                     if ($jfalse310) { /*test failed */
/*  6426 */                         $blk = 9;
/*  6427 */                         continue;
/*  6428 */                     }
/*  6429 */                     //
/*  6430 */                     // line 194:
/*  6431 */                     //                 self.running()
/*  6432 */                     //                 ^
/*  6433 */                     //
/*  6434 */                     $currLineNo = 194;
/*  6435 */                     $currColNo = 16;
/*  6436 */ 
/*  6437 */                     if (self === undefined) {
/*  6438 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6439 */                     }
/*  6440 */                     $ret = Sk.abstr.gattr(self, 'running', true);
/*  6441 */                     $blk = 13; /* allowing case fallthrough */
/*  6442 */                 case 13:
/*  6443 */                     /* --- function return or resume suspension --- */
/*  6444 */                     if ($ret && $ret.$isSuspension) {
/*  6445 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 194, 16);
/*  6446 */                     }
/*  6447 */                     var $lattr311 = $ret;
/*  6448 */                     $ret;
/*  6449 */                     $ret = Sk.misceval.callsimOrSuspend($lattr311);
/*  6450 */                     $blk = 14; /* allowing case fallthrough */
/*  6451 */                 case 14:
/*  6452 */                     /* --- function return or resume suspension --- */
/*  6453 */                     if ($ret && $ret.$isSuspension) {
/*  6454 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 194, 16);
/*  6455 */                     }
/*  6456 */                     var $call312 = $ret;
/*  6457 */                     //
/*  6458 */                     // line 194:
/*  6459 */                     //                 self.running()
/*  6460 */                     //                 ^
/*  6461 */                     //
/*  6462 */                     $currLineNo = 194;
/*  6463 */                     $currColNo = 16;
/*  6464 */ 
/*  6465 */                     $blk = 8; /* allowing case fallthrough */
/*  6466 */                 case 8:
/*  6467 */                     /* --- end of if --- */
/*  6468 */                     $blk = 1; /* allowing case fallthrough */
/*  6469 */                 case 1:
/*  6470 */                     /* --- end of if --- */
/*  6471 */                     //
/*  6472 */                     // line 200:
/*  6473 */                     //         return self.fn(msg,self.handle)
/*  6474 */                     //         ^
/*  6475 */                     //
/*  6476 */                     $currLineNo = 200;
/*  6477 */                     $currColNo = 8;
/*  6478 */ 
/*  6479 */                     if (self === undefined) {
/*  6480 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6481 */                     }
/*  6482 */                     $ret = Sk.abstr.gattr(self, 'fn', true);
/*  6483 */                     $blk = 17; /* allowing case fallthrough */
/*  6484 */                 case 17:
/*  6485 */                     /* --- function return or resume suspension --- */
/*  6486 */                     if ($ret && $ret.$isSuspension) {
/*  6487 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 15);
/*  6488 */                     }
/*  6489 */                     var $lattr315 = $ret;
/*  6490 */                     if (msg === undefined) {
/*  6491 */                         throw new Sk.builtin.UnboundLocalError('local variable \'msg\' referenced before assignment');
/*  6492 */                     }
/*  6493 */                     if (self === undefined) {
/*  6494 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6495 */                     }
/*  6496 */                     $ret = Sk.abstr.gattr(self, 'handle', true);
/*  6497 */                     $blk = 18; /* allowing case fallthrough */
/*  6498 */                 case 18:
/*  6499 */                     /* --- function return or resume suspension --- */
/*  6500 */                     if ($ret && $ret.$isSuspension) {
/*  6501 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 27);
/*  6502 */                     }
/*  6503 */                     var $lattr316 = $ret;
/*  6504 */                     $ret;
/*  6505 */                     $ret = Sk.misceval.callsimOrSuspend($lattr315, msg, $lattr316);
/*  6506 */                     $blk = 19; /* allowing case fallthrough */
/*  6507 */                 case 19:
/*  6508 */                     /* --- function return or resume suspension --- */
/*  6509 */                     if ($ret && $ret.$isSuspension) {
/*  6510 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 15);
/*  6511 */                     }
/*  6512 */                     var $call317 = $ret;
/*  6513 */                     //
/*  6514 */                     // line 200:
/*  6515 */                     //         return self.fn(msg,self.handle)
/*  6516 */                     //                ^
/*  6517 */                     //
/*  6518 */                     $currLineNo = 200;
/*  6519 */                     $currColNo = 15;
/*  6520 */ 
/*  6521 */                     return $call317;
/*  6522 */                     return Sk.builtin.none.none$;
/*  6523 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6524 */                 case 2:
/*  6525 */                     /* --- next branch of if --- */
/*  6526 */                     //
/*  6527 */                     // line 198:
/*  6528 */                     //             msg = None
/*  6529 */                     //             ^
/*  6530 */                     //
/*  6531 */                     $currLineNo = 198;
/*  6532 */                     $currColNo = 12;
/*  6533 */ 
/*  6534 */                     msg = Sk.builtin.none.none$;
/*  6535 */                     $blk = 1; /* jump */
/*  6536 */                     continue;
/*  6537 */                 case 9:
/*  6538 */                     /* --- next branch of if --- */
/*  6539 */                     //
/*  6540 */                     // line 196:
/*  6541 */                     //                 self.packetPending()
/*  6542 */                     //                 ^
/*  6543 */                     //
/*  6544 */                     $currLineNo = 196;
/*  6545 */                     $currColNo = 16;
/*  6546 */ 
/*  6547 */                     if (self === undefined) {
/*  6548 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6549 */                     }
/*  6550 */                     $ret = Sk.abstr.gattr(self, 'packetPending', true);
/*  6551 */                     $blk = 15; /* allowing case fallthrough */
/*  6552 */                 case 15:
/*  6553 */                     /* --- function return or resume suspension --- */
/*  6554 */                     if ($ret && $ret.$isSuspension) {
/*  6555 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 196, 16);
/*  6556 */                     }
/*  6557 */                     var $lattr313 = $ret;
/*  6558 */                     $ret;
/*  6559 */                     $ret = Sk.misceval.callsimOrSuspend($lattr313);
/*  6560 */                     $blk = 16; /* allowing case fallthrough */
/*  6561 */                 case 16:
/*  6562 */                     /* --- function return or resume suspension --- */
/*  6563 */                     if ($ret && $ret.$isSuspension) {
/*  6564 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 196, 16);
/*  6565 */                     }
/*  6566 */                     var $call314 = $ret;
/*  6567 */                     //
/*  6568 */                     // line 196:
/*  6569 */                     //                 self.packetPending()
/*  6570 */                     //                 ^
/*  6571 */                     //
/*  6572 */                     $currLineNo = 196;
/*  6573 */                     $currColNo = 16;
/*  6574 */ 
/*  6575 */                     $blk = 8; /* jump */
/*  6576 */                     continue;
/*  6577 */                 }
/*  6578 */             } catch (err) {
/*  6579 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6580 */                     err = new Sk.builtin.ExternalError(err);
/*  6581 */                 }
/*  6582 */                 err.traceback.push({
/*  6583 */                     lineno: $currLineNo,
/*  6584 */                     colno: $currColNo,
/*  6585 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6586 */                 });
/*  6587 */                 if ($exc.length > 0) {
/*  6588 */                     $err = err;
/*  6589 */                     $blk = $exc.pop();
/*  6590 */                     continue;
/*  6591 */                 } else {
/*  6592 */                     throw err;
/*  6593 */                 }
/*  6594 */             }
/*  6595 */         }
/*  6596 */     });
/*  6597 */     var $scope319 = (function $waitTask320$(self) {
/*  6598 */         var self, self, self;
/*  6599 */         var $wakeFromSuspension = function() {
/*  6600 */             var susp = $scope319.$wakingSuspension;
/*  6601 */             delete $scope319.$wakingSuspension;
/*  6602 */             $blk = susp.$blk;
/*  6603 */             $loc = susp.$loc;
/*  6604 */             $gbl = susp.$gbl;
/*  6605 */             $exc = susp.$exc;
/*  6606 */             $err = susp.$err;
/*  6607 */             $postfinally = susp.$postfinally;
/*  6608 */             $currLineNo = susp.$lineno;
/*  6609 */             $currColNo = susp.$colno;
/*  6610 */             Sk.lastYield = Date.now();
/*  6611 */             self = susp.$tmps.self;
/*  6612 */             try {
/*  6613 */                 $ret = susp.child.resume();
/*  6614 */             } catch (err) {
/*  6615 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6616 */                     err = new Sk.builtin.ExternalError(err);
/*  6617 */                 }
/*  6618 */                 err.traceback.push({
/*  6619 */                     lineno: $currLineNo,
/*  6620 */                     colno: $currColNo,
/*  6621 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6622 */                 });
/*  6623 */                 if ($exc.length > 0) {
/*  6624 */                     $err = err;
/*  6625 */                     $blk = $exc.pop();
/*  6626 */                 } else {
/*  6627 */                     throw err;
/*  6628 */                 }
/*  6629 */             }
/*  6630 */         };
/*  6631 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6632 */             var susp = new Sk.misceval.Suspension();
/*  6633 */             susp.child = $child;
/*  6634 */             susp.resume = function() {
/*  6635 */                 $scope319.$wakingSuspension = susp;
/*  6636 */                 return $scope319();
/*  6637 */             };
/*  6638 */             susp.data = susp.child.data;
/*  6639 */             susp.$blk = $blk;
/*  6640 */             susp.$loc = $loc;
/*  6641 */             susp.$gbl = $gbl;
/*  6642 */             susp.$exc = $exc;
/*  6643 */             susp.$err = $err;
/*  6644 */             susp.$postfinally = $postfinally;
/*  6645 */             susp.$filename = $filename;
/*  6646 */             susp.$lineno = $lineno;
/*  6647 */             susp.$colno = $colno;
/*  6648 */             susp.optional = susp.child.optional;
/*  6649 */             susp.$tmps = {
/*  6650 */                 "self": self
/*  6651 */             };
/*  6652 */             return susp;
/*  6653 */         };
/*  6654 */         var $blk = 0,
/*  6655 */             $exc = [],
/*  6656 */             $loc = {},
/*  6657 */             $gbl = this,
/*  6658 */             $err = undefined,
/*  6659 */             $ret = undefined,
/*  6660 */             $postfinally = undefined,
/*  6661 */             $currLineNo = undefined,
/*  6662 */             $currColNo = undefined;
/*  6663 */         if (typeof Sk.execStart === 'undefined') {
/*  6664 */             Sk.execStart = Date.now()
/*  6665 */         }
/*  6666 */         if (typeof Sk.lastYield === 'undefined') {
/*  6667 */             Sk.lastYield = Date.now()
/*  6668 */         }
/*  6669 */         if ($scope319.$wakingSuspension !== undefined) {
/*  6670 */             $wakeFromSuspension();
/*  6671 */         } else {
/*  6672 */             Sk.builtin.pyCheckArgs("waitTask", arguments, 1, 1, false, false);
/*  6673 */         }
/*  6674 */         while (true) {
/*  6675 */             try {
/*  6676 */                 var $dateNow = Date.now();
/*  6677 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  6678 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6679 */                 }
/*  6680 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6681 */                     var $susp = $saveSuspension({
/*  6682 */                         data: {
/*  6683 */                             type: 'Sk.yield'
/*  6684 */                         },
/*  6685 */                         resume: function() {}
/*  6686 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  6687 */                     $susp.$blk = $blk;
/*  6688 */                     $susp.optional = true;
/*  6689 */                     return $susp;
/*  6690 */                 }
/*  6691 */                 switch ($blk) {
/*  6692 */                 case 0:
/*  6693 */                     /* --- codeobj entry --- */
/*  6694 */                     if (self === undefined) {
/*  6695 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6696 */                     }
/*  6697 */ 
/*  6698 */                     //
/*  6699 */                     // line 204:
/*  6700 */                     //         self.task_waiting = True
/*  6701 */                     //         ^
/*  6702 */                     //
/*  6703 */                     $currLineNo = 204;
/*  6704 */                     $currColNo = 8;
/*  6705 */ 
/*  6706 */                     if (self === undefined) {
/*  6707 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6708 */                     }
/*  6709 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  6710 */                     $blk = 1; /* allowing case fallthrough */
/*  6711 */                 case 1:
/*  6712 */                     /* --- function return or resume suspension --- */
/*  6713 */                     if ($ret && $ret.$isSuspension) {
/*  6714 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 204, 8);
/*  6715 */                     }
/*  6716 */                     //
/*  6717 */                     // line 205:
/*  6718 */                     //         return self
/*  6719 */                     //         ^
/*  6720 */                     //
/*  6721 */                     $currLineNo = 205;
/*  6722 */                     $currColNo = 8;
/*  6723 */ 
/*  6724 */                     if (self === undefined) {
/*  6725 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6726 */                     }
/*  6727 */                     return self;
/*  6728 */                     return Sk.builtin.none.none$;
/*  6729 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6730 */                 }
/*  6731 */             } catch (err) {
/*  6732 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6733 */                     err = new Sk.builtin.ExternalError(err);
/*  6734 */                 }
/*  6735 */                 err.traceback.push({
/*  6736 */                     lineno: $currLineNo,
/*  6737 */                     colno: $currColNo,
/*  6738 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6739 */                 });
/*  6740 */                 if ($exc.length > 0) {
/*  6741 */                     $err = err;
/*  6742 */                     $blk = $exc.pop();
/*  6743 */                     continue;
/*  6744 */                 } else {
/*  6745 */                     throw err;
/*  6746 */                 }
/*  6747 */             }
/*  6748 */         }
/*  6749 */     });
/*  6750 */     var $scope322 = (function $hold323$(self) {
/*  6751 */         var self, self, self, $loadgbl324, $loadgbl324, $lattr325, $inplbinopattr326;
/*  6752 */         var $wakeFromSuspension = function() {
/*  6753 */             var susp = $scope322.$wakingSuspension;
/*  6754 */             delete $scope322.$wakingSuspension;
/*  6755 */             $blk = susp.$blk;
/*  6756 */             $loc = susp.$loc;
/*  6757 */             $gbl = susp.$gbl;
/*  6758 */             $exc = susp.$exc;
/*  6759 */             $err = susp.$err;
/*  6760 */             $postfinally = susp.$postfinally;
/*  6761 */             $currLineNo = susp.$lineno;
/*  6762 */             $currColNo = susp.$colno;
/*  6763 */             Sk.lastYield = Date.now();
/*  6764 */             self = susp.$tmps.self;
/*  6765 */             $loadgbl324 = susp.$tmps.$loadgbl324;
/*  6766 */             $lattr325 = susp.$tmps.$lattr325;
/*  6767 */             $inplbinopattr326 = susp.$tmps.$inplbinopattr326;
/*  6768 */             try {
/*  6769 */                 $ret = susp.child.resume();
/*  6770 */             } catch (err) {
/*  6771 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6772 */                     err = new Sk.builtin.ExternalError(err);
/*  6773 */                 }
/*  6774 */                 err.traceback.push({
/*  6775 */                     lineno: $currLineNo,
/*  6776 */                     colno: $currColNo,
/*  6777 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6778 */                 });
/*  6779 */                 if ($exc.length > 0) {
/*  6780 */                     $err = err;
/*  6781 */                     $blk = $exc.pop();
/*  6782 */                 } else {
/*  6783 */                     throw err;
/*  6784 */                 }
/*  6785 */             }
/*  6786 */         };
/*  6787 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6788 */             var susp = new Sk.misceval.Suspension();
/*  6789 */             susp.child = $child;
/*  6790 */             susp.resume = function() {
/*  6791 */                 $scope322.$wakingSuspension = susp;
/*  6792 */                 return $scope322();
/*  6793 */             };
/*  6794 */             susp.data = susp.child.data;
/*  6795 */             susp.$blk = $blk;
/*  6796 */             susp.$loc = $loc;
/*  6797 */             susp.$gbl = $gbl;
/*  6798 */             susp.$exc = $exc;
/*  6799 */             susp.$err = $err;
/*  6800 */             susp.$postfinally = $postfinally;
/*  6801 */             susp.$filename = $filename;
/*  6802 */             susp.$lineno = $lineno;
/*  6803 */             susp.$colno = $colno;
/*  6804 */             susp.optional = susp.child.optional;
/*  6805 */             susp.$tmps = {
/*  6806 */                 "self": self,
/*  6807 */                 "$loadgbl324": $loadgbl324,
/*  6808 */                 "$lattr325": $lattr325,
/*  6809 */                 "$inplbinopattr326": $inplbinopattr326
/*  6810 */             };
/*  6811 */             return susp;
/*  6812 */         };
/*  6813 */         var $blk = 0,
/*  6814 */             $exc = [],
/*  6815 */             $loc = {},
/*  6816 */             $gbl = this,
/*  6817 */             $err = undefined,
/*  6818 */             $ret = undefined,
/*  6819 */             $postfinally = undefined,
/*  6820 */             $currLineNo = undefined,
/*  6821 */             $currColNo = undefined;
/*  6822 */         if (typeof Sk.execStart === 'undefined') {
/*  6823 */             Sk.execStart = Date.now()
/*  6824 */         }
/*  6825 */         if (typeof Sk.lastYield === 'undefined') {
/*  6826 */             Sk.lastYield = Date.now()
/*  6827 */         }
/*  6828 */         if ($scope322.$wakingSuspension !== undefined) {
/*  6829 */             $wakeFromSuspension();
/*  6830 */         } else {
/*  6831 */             Sk.builtin.pyCheckArgs("hold", arguments, 1, 1, false, false);
/*  6832 */         }
/*  6833 */         while (true) {
/*  6834 */             try {
/*  6835 */                 var $dateNow = Date.now();
/*  6836 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  6837 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6838 */                 }
/*  6839 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6840 */                     var $susp = $saveSuspension({
/*  6841 */                         data: {
/*  6842 */                             type: 'Sk.yield'
/*  6843 */                         },
/*  6844 */                         resume: function() {}
/*  6845 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  6846 */                     $susp.$blk = $blk;
/*  6847 */                     $susp.optional = true;
/*  6848 */                     return $susp;
/*  6849 */                 }
/*  6850 */                 switch ($blk) {
/*  6851 */                 case 0:
/*  6852 */                     /* --- codeobj entry --- */
/*  6853 */                     if (self === undefined) {
/*  6854 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6855 */                     }
/*  6856 */ 
/*  6857 */                     //
/*  6858 */                     // line 209:
/*  6859 */                     //         taskWorkArea.holdCount += 1
/*  6860 */                     //         ^
/*  6861 */                     //
/*  6862 */                     $currLineNo = 209;
/*  6863 */                     $currColNo = 8;
/*  6864 */ 
/*  6865 */                     var $loadgbl324 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  6866 */                     $ret = Sk.abstr.gattr($loadgbl324, 'holdCount', true);
/*  6867 */                     $blk = 1; /* allowing case fallthrough */
/*  6868 */                 case 1:
/*  6869 */                     /* --- function return or resume suspension --- */
/*  6870 */                     if ($ret && $ret.$isSuspension) {
/*  6871 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 209, 8);
/*  6872 */                     }
/*  6873 */                     var $lattr325 = $ret;
/*  6874 */                     var $inplbinopattr326 = Sk.abstr.numberInplaceBinOp($lattr325, new Sk.builtin.int_(1), 'Add');
/*  6875 */                     $ret = undefined;
/*  6876 */                     if ($inplbinopattr326 !== undefined) {
/*  6877 */                         $ret = Sk.abstr.sattr($loadgbl324, 'holdCount', $inplbinopattr326, true);
/*  6878 */                     }
/*  6879 */                     $blk = 2; /* allowing case fallthrough */
/*  6880 */                 case 2:
/*  6881 */                     /* --- function return or resume suspension --- */
/*  6882 */                     if ($ret && $ret.$isSuspension) {
/*  6883 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 209, 8);
/*  6884 */                     }
/*  6885 */                     //
/*  6886 */                     // line 210:
/*  6887 */                     //         self.task_holding = True
/*  6888 */                     //         ^
/*  6889 */                     //
/*  6890 */                     $currLineNo = 210;
/*  6891 */                     $currColNo = 8;
/*  6892 */ 
/*  6893 */                     if (self === undefined) {
/*  6894 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6895 */                     }
/*  6896 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.true$, true);
/*  6897 */                     $blk = 3; /* allowing case fallthrough */
/*  6898 */                 case 3:
/*  6899 */                     /* --- function return or resume suspension --- */
/*  6900 */                     if ($ret && $ret.$isSuspension) {
/*  6901 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 210, 8);
/*  6902 */                     }
/*  6903 */                     //
/*  6904 */                     // line 211:
/*  6905 */                     //         return self.link
/*  6906 */                     //         ^
/*  6907 */                     //
/*  6908 */                     $currLineNo = 211;
/*  6909 */                     $currColNo = 8;
/*  6910 */ 
/*  6911 */                     if (self === undefined) {
/*  6912 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6913 */                     }
/*  6914 */                     $ret = Sk.abstr.gattr(self, 'link', true);
/*  6915 */                     $blk = 4; /* allowing case fallthrough */
/*  6916 */                 case 4:
/*  6917 */                     /* --- function return or resume suspension --- */
/*  6918 */                     if ($ret && $ret.$isSuspension) {
/*  6919 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 211, 15);
/*  6920 */                     }
/*  6921 */                     var $lattr327 = $ret;
/*  6922 */                     return $lattr327;
/*  6923 */                     return Sk.builtin.none.none$;
/*  6924 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6925 */                 }
/*  6926 */             } catch (err) {
/*  6927 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6928 */                     err = new Sk.builtin.ExternalError(err);
/*  6929 */                 }
/*  6930 */                 err.traceback.push({
/*  6931 */                     lineno: $currLineNo,
/*  6932 */                     colno: $currColNo,
/*  6933 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6934 */                 });
/*  6935 */                 if ($exc.length > 0) {
/*  6936 */                     $err = err;
/*  6937 */                     $blk = $exc.pop();
/*  6938 */                     continue;
/*  6939 */                 } else {
/*  6940 */                     throw err;
/*  6941 */                 }
/*  6942 */             }
/*  6943 */         }
/*  6944 */     });
/*  6945 */     var $scope329 = (function $release330$(self, i) {
/*  6946 */         var t; /* locals */
/*  6947 */         var i, i, self, self, self, self, t, t, t, t, $lattr331, $lattr333, $compareres334, $lattr333, $compareres334, $lattr335;
/*  6948 */         var $wakeFromSuspension = function() {
/*  6949 */             var susp = $scope329.$wakingSuspension;
/*  6950 */             delete $scope329.$wakingSuspension;
/*  6951 */             $blk = susp.$blk;
/*  6952 */             $loc = susp.$loc;
/*  6953 */             $gbl = susp.$gbl;
/*  6954 */             $exc = susp.$exc;
/*  6955 */             $err = susp.$err;
/*  6956 */             $postfinally = susp.$postfinally;
/*  6957 */             $currLineNo = susp.$lineno;
/*  6958 */             $currColNo = susp.$colno;
/*  6959 */             Sk.lastYield = Date.now();
/*  6960 */             i = susp.$tmps.i;
/*  6961 */             self = susp.$tmps.self;
/*  6962 */             t = susp.$tmps.t;
/*  6963 */             $lattr331 = susp.$tmps.$lattr331;
/*  6964 */             $lattr333 = susp.$tmps.$lattr333;
/*  6965 */             $compareres334 = susp.$tmps.$compareres334;
/*  6966 */             $lattr335 = susp.$tmps.$lattr335;
/*  6967 */             try {
/*  6968 */                 $ret = susp.child.resume();
/*  6969 */             } catch (err) {
/*  6970 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6971 */                     err = new Sk.builtin.ExternalError(err);
/*  6972 */                 }
/*  6973 */                 err.traceback.push({
/*  6974 */                     lineno: $currLineNo,
/*  6975 */                     colno: $currColNo,
/*  6976 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6977 */                 });
/*  6978 */                 if ($exc.length > 0) {
/*  6979 */                     $err = err;
/*  6980 */                     $blk = $exc.pop();
/*  6981 */                 } else {
/*  6982 */                     throw err;
/*  6983 */                 }
/*  6984 */             }
/*  6985 */         };
/*  6986 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6987 */             var susp = new Sk.misceval.Suspension();
/*  6988 */             susp.child = $child;
/*  6989 */             susp.resume = function() {
/*  6990 */                 $scope329.$wakingSuspension = susp;
/*  6991 */                 return $scope329();
/*  6992 */             };
/*  6993 */             susp.data = susp.child.data;
/*  6994 */             susp.$blk = $blk;
/*  6995 */             susp.$loc = $loc;
/*  6996 */             susp.$gbl = $gbl;
/*  6997 */             susp.$exc = $exc;
/*  6998 */             susp.$err = $err;
/*  6999 */             susp.$postfinally = $postfinally;
/*  7000 */             susp.$filename = $filename;
/*  7001 */             susp.$lineno = $lineno;
/*  7002 */             susp.$colno = $colno;
/*  7003 */             susp.optional = susp.child.optional;
/*  7004 */             susp.$tmps = {
/*  7005 */                 "i": i,
/*  7006 */                 "self": self,
/*  7007 */                 "t": t,
/*  7008 */                 "$lattr331": $lattr331,
/*  7009 */                 "$lattr333": $lattr333,
/*  7010 */                 "$compareres334": $compareres334,
/*  7011 */                 "$lattr335": $lattr335
/*  7012 */             };
/*  7013 */             return susp;
/*  7014 */         };
/*  7015 */         var $blk = 0,
/*  7016 */             $exc = [],
/*  7017 */             $loc = {},
/*  7018 */             $gbl = this,
/*  7019 */             $err = undefined,
/*  7020 */             $ret = undefined,
/*  7021 */             $postfinally = undefined,
/*  7022 */             $currLineNo = undefined,
/*  7023 */             $currColNo = undefined;
/*  7024 */         if (typeof Sk.execStart === 'undefined') {
/*  7025 */             Sk.execStart = Date.now()
/*  7026 */         }
/*  7027 */         if (typeof Sk.lastYield === 'undefined') {
/*  7028 */             Sk.lastYield = Date.now()
/*  7029 */         }
/*  7030 */         if ($scope329.$wakingSuspension !== undefined) {
/*  7031 */             $wakeFromSuspension();
/*  7032 */         } else {
/*  7033 */             Sk.builtin.pyCheckArgs("release", arguments, 2, 2, false, false);
/*  7034 */         }
/*  7035 */         while (true) {
/*  7036 */             try {
/*  7037 */                 var $dateNow = Date.now();
/*  7038 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  7039 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7040 */                 }
/*  7041 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7042 */                     var $susp = $saveSuspension({
/*  7043 */                         data: {
/*  7044 */                             type: 'Sk.yield'
/*  7045 */                         },
/*  7046 */                         resume: function() {}
/*  7047 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  7048 */                     $susp.$blk = $blk;
/*  7049 */                     $susp.optional = true;
/*  7050 */                     return $susp;
/*  7051 */                 }
/*  7052 */                 switch ($blk) {
/*  7053 */                 case 0:
/*  7054 */                     /* --- codeobj entry --- */
/*  7055 */                     if (self === undefined) {
/*  7056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7057 */                     }
/*  7058 */                     if (i === undefined) {
/*  7059 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7060 */                     }
/*  7061 */ 
/*  7062 */                     //
/*  7063 */                     // line 215:
/*  7064 */                     //         t = self.findtcb(i)
/*  7065 */                     //         ^
/*  7066 */                     //
/*  7067 */                     $currLineNo = 215;
/*  7068 */                     $currColNo = 8;
/*  7069 */ 
/*  7070 */                     if (self === undefined) {
/*  7071 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7072 */                     }
/*  7073 */                     $ret = Sk.abstr.gattr(self, 'findtcb', true);
/*  7074 */                     $blk = 1; /* allowing case fallthrough */
/*  7075 */                 case 1:
/*  7076 */                     /* --- function return or resume suspension --- */
/*  7077 */                     if ($ret && $ret.$isSuspension) {
/*  7078 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 215, 12);
/*  7079 */                     }
/*  7080 */                     var $lattr331 = $ret;
/*  7081 */                     if (i === undefined) {
/*  7082 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7083 */                     }
/*  7084 */                     $ret;
/*  7085 */                     $ret = Sk.misceval.callsimOrSuspend($lattr331, i);
/*  7086 */                     $blk = 2; /* allowing case fallthrough */
/*  7087 */                 case 2:
/*  7088 */                     /* --- function return or resume suspension --- */
/*  7089 */                     if ($ret && $ret.$isSuspension) {
/*  7090 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 215, 12);
/*  7091 */                     }
/*  7092 */                     var $call332 = $ret;
/*  7093 */                     //
/*  7094 */                     // line 215:
/*  7095 */                     //         t = self.findtcb(i)
/*  7096 */                     //             ^
/*  7097 */                     //
/*  7098 */                     $currLineNo = 215;
/*  7099 */                     $currColNo = 12;
/*  7100 */ 
/*  7101 */                     t = $call332;
/*  7102 */                     //
/*  7103 */                     // line 216:
/*  7104 */                     //         t.task_holding = False
/*  7105 */                     //         ^
/*  7106 */                     //
/*  7107 */                     $currLineNo = 216;
/*  7108 */                     $currColNo = 8;
/*  7109 */ 
/*  7110 */                     if (t === undefined) {
/*  7111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7112 */                     }
/*  7113 */                     $ret = Sk.abstr.sattr(t, 'task_holding', Sk.builtin.bool.false$, true);
/*  7114 */                     $blk = 3; /* allowing case fallthrough */
/*  7115 */                 case 3:
/*  7116 */                     /* --- function return or resume suspension --- */
/*  7117 */                     if ($ret && $ret.$isSuspension) {
/*  7118 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 216, 8);
/*  7119 */                     }
/*  7120 */                     //
/*  7121 */                     // line 217:
/*  7122 */                     //         if t.priority > self.priority:
/*  7123 */                     //         ^
/*  7124 */                     //
/*  7125 */                     $currLineNo = 217;
/*  7126 */                     $currColNo = 8;
/*  7127 */ 
/*  7128 */                     if (t === undefined) {
/*  7129 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7130 */                     }
/*  7131 */                     $ret = Sk.abstr.gattr(t, 'priority', true);
/*  7132 */                     $blk = 6; /* allowing case fallthrough */
/*  7133 */                 case 6:
/*  7134 */                     /* --- function return or resume suspension --- */
/*  7135 */                     if ($ret && $ret.$isSuspension) {
/*  7136 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 11);
/*  7137 */                     }
/*  7138 */                     var $lattr333 = $ret;
/*  7139 */                     var $compareres334 = null;
/*  7140 */                     if (self === undefined) {
/*  7141 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7142 */                     }
/*  7143 */                     $ret = Sk.abstr.gattr(self, 'priority', true);
/*  7144 */                     $blk = 8; /* allowing case fallthrough */
/*  7145 */                 case 8:
/*  7146 */                     /* --- function return or resume suspension --- */
/*  7147 */                     if ($ret && $ret.$isSuspension) {
/*  7148 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 24);
/*  7149 */                     }
/*  7150 */                     var $lattr335 = $ret;
/*  7151 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr333, $lattr335, 'Gt', true));
/*  7152 */                     $blk = 9; /* allowing case fallthrough */
/*  7153 */                 case 9:
/*  7154 */                     /* --- function return or resume suspension --- */
/*  7155 */                     if ($ret && $ret.$isSuspension) {
/*  7156 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 11);
/*  7157 */                     }
/*  7158 */                     $compareres334 = $ret;
/*  7159 */                     var $jfalse336 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7160 */                     if ($jfalse336) { /*test failed */
/*  7161 */                         $blk = 7;
/*  7162 */                         continue;
/*  7163 */                     }
/*  7164 */                     $blk = 7; /* allowing case fallthrough */
/*  7165 */                 case 7:
/*  7166 */                     /* --- done --- */
/*  7167 */                     var $jfalse337 = ($compareres334 === false || !Sk.misceval.isTrue($compareres334));
/*  7168 */                     if ($jfalse337) { /*test failed */
/*  7169 */                         $blk = 5;
/*  7170 */                         continue;
/*  7171 */                     }
/*  7172 */                     //
/*  7173 */                     // line 218:
/*  7174 */                     //             return t
/*  7175 */                     //             ^
/*  7176 */                     //
/*  7177 */                     $currLineNo = 218;
/*  7178 */                     $currColNo = 12;
/*  7179 */ 
/*  7180 */                     if (t === undefined) {
/*  7181 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7182 */                     }
/*  7183 */                     return t;
/*  7184 */                     $blk = 4; /* allowing case fallthrough */
/*  7185 */                 case 4:
/*  7186 */                     /* --- end of if --- */
/*  7187 */                     return Sk.builtin.none.none$;
/*  7188 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7189 */                 case 5:
/*  7190 */                     /* --- next branch of if --- */
/*  7191 */                     //
/*  7192 */                     // line 220:
/*  7193 */                     //             return self
/*  7194 */                     //             ^
/*  7195 */                     //
/*  7196 */                     $currLineNo = 220;
/*  7197 */                     $currColNo = 12;
/*  7198 */ 
/*  7199 */                     if (self === undefined) {
/*  7200 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7201 */                     }
/*  7202 */                     return self;
/*  7203 */                     $blk = 4; /* jump */
/*  7204 */                     continue;
/*  7205 */                 }
/*  7206 */             } catch (err) {
/*  7207 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7208 */                     err = new Sk.builtin.ExternalError(err);
/*  7209 */                 }
/*  7210 */                 err.traceback.push({
/*  7211 */                     lineno: $currLineNo,
/*  7212 */                     colno: $currColNo,
/*  7213 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7214 */                 });
/*  7215 */                 if ($exc.length > 0) {
/*  7216 */                     $err = err;
/*  7217 */                     $blk = $exc.pop();
/*  7218 */                     continue;
/*  7219 */                 } else {
/*  7220 */                     throw err;
/*  7221 */                 }
/*  7222 */             }
/*  7223 */         }
/*  7224 */     });
/*  7225 */     var $scope339 = (function $qpkt340$(self, pkt) {
/*  7226 */         var t; /* locals */
/*  7227 */         var pkt, pkt, pkt, pkt, pkt, self, self, self, self, t, t, $lattr341, $lattr341, $lattr342, $loadgbl344, $loadgbl344, $lattr345, $inplbinopattr346, $lattr347, $lattr348;
/*  7228 */         var $wakeFromSuspension = function() {
/*  7229 */             var susp = $scope339.$wakingSuspension;
/*  7230 */             delete $scope339.$wakingSuspension;
/*  7231 */             $blk = susp.$blk;
/*  7232 */             $loc = susp.$loc;
/*  7233 */             $gbl = susp.$gbl;
/*  7234 */             $exc = susp.$exc;
/*  7235 */             $err = susp.$err;
/*  7236 */             $postfinally = susp.$postfinally;
/*  7237 */             $currLineNo = susp.$lineno;
/*  7238 */             $currColNo = susp.$colno;
/*  7239 */             Sk.lastYield = Date.now();
/*  7240 */             pkt = susp.$tmps.pkt;
/*  7241 */             self = susp.$tmps.self;
/*  7242 */             t = susp.$tmps.t;
/*  7243 */             $lattr341 = susp.$tmps.$lattr341;
/*  7244 */             $lattr342 = susp.$tmps.$lattr342;
/*  7245 */             $loadgbl344 = susp.$tmps.$loadgbl344;
/*  7246 */             $lattr345 = susp.$tmps.$lattr345;
/*  7247 */             $inplbinopattr346 = susp.$tmps.$inplbinopattr346;
/*  7248 */             $lattr347 = susp.$tmps.$lattr347;
/*  7249 */             $lattr348 = susp.$tmps.$lattr348;
/*  7250 */             try {
/*  7251 */                 $ret = susp.child.resume();
/*  7252 */             } catch (err) {
/*  7253 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7254 */                     err = new Sk.builtin.ExternalError(err);
/*  7255 */                 }
/*  7256 */                 err.traceback.push({
/*  7257 */                     lineno: $currLineNo,
/*  7258 */                     colno: $currColNo,
/*  7259 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7260 */                 });
/*  7261 */                 if ($exc.length > 0) {
/*  7262 */                     $err = err;
/*  7263 */                     $blk = $exc.pop();
/*  7264 */                 } else {
/*  7265 */                     throw err;
/*  7266 */                 }
/*  7267 */             }
/*  7268 */         };
/*  7269 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7270 */             var susp = new Sk.misceval.Suspension();
/*  7271 */             susp.child = $child;
/*  7272 */             susp.resume = function() {
/*  7273 */                 $scope339.$wakingSuspension = susp;
/*  7274 */                 return $scope339();
/*  7275 */             };
/*  7276 */             susp.data = susp.child.data;
/*  7277 */             susp.$blk = $blk;
/*  7278 */             susp.$loc = $loc;
/*  7279 */             susp.$gbl = $gbl;
/*  7280 */             susp.$exc = $exc;
/*  7281 */             susp.$err = $err;
/*  7282 */             susp.$postfinally = $postfinally;
/*  7283 */             susp.$filename = $filename;
/*  7284 */             susp.$lineno = $lineno;
/*  7285 */             susp.$colno = $colno;
/*  7286 */             susp.optional = susp.child.optional;
/*  7287 */             susp.$tmps = {
/*  7288 */                 "pkt": pkt,
/*  7289 */                 "self": self,
/*  7290 */                 "t": t,
/*  7291 */                 "$lattr341": $lattr341,
/*  7292 */                 "$lattr342": $lattr342,
/*  7293 */                 "$loadgbl344": $loadgbl344,
/*  7294 */                 "$lattr345": $lattr345,
/*  7295 */                 "$inplbinopattr346": $inplbinopattr346,
/*  7296 */                 "$lattr347": $lattr347,
/*  7297 */                 "$lattr348": $lattr348
/*  7298 */             };
/*  7299 */             return susp;
/*  7300 */         };
/*  7301 */         var $blk = 0,
/*  7302 */             $exc = [],
/*  7303 */             $loc = {},
/*  7304 */             $gbl = this,
/*  7305 */             $err = undefined,
/*  7306 */             $ret = undefined,
/*  7307 */             $postfinally = undefined,
/*  7308 */             $currLineNo = undefined,
/*  7309 */             $currColNo = undefined;
/*  7310 */         if (typeof Sk.execStart === 'undefined') {
/*  7311 */             Sk.execStart = Date.now()
/*  7312 */         }
/*  7313 */         if (typeof Sk.lastYield === 'undefined') {
/*  7314 */             Sk.lastYield = Date.now()
/*  7315 */         }
/*  7316 */         if ($scope339.$wakingSuspension !== undefined) {
/*  7317 */             $wakeFromSuspension();
/*  7318 */         } else {
/*  7319 */             Sk.builtin.pyCheckArgs("qpkt", arguments, 2, 2, false, false);
/*  7320 */         }
/*  7321 */         while (true) {
/*  7322 */             try {
/*  7323 */                 var $dateNow = Date.now();
/*  7324 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  7325 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7326 */                 }
/*  7327 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7328 */                     var $susp = $saveSuspension({
/*  7329 */                         data: {
/*  7330 */                             type: 'Sk.yield'
/*  7331 */                         },
/*  7332 */                         resume: function() {}
/*  7333 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  7334 */                     $susp.$blk = $blk;
/*  7335 */                     $susp.optional = true;
/*  7336 */                     return $susp;
/*  7337 */                 }
/*  7338 */                 switch ($blk) {
/*  7339 */                 case 0:
/*  7340 */                     /* --- codeobj entry --- */
/*  7341 */                     if (self === undefined) {
/*  7342 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7343 */                     }
/*  7344 */                     if (pkt === undefined) {
/*  7345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7346 */                     }
/*  7347 */ 
/*  7348 */                     //
/*  7349 */                     // line 224:
/*  7350 */                     //         t = self.findtcb(pkt.ident)
/*  7351 */                     //         ^
/*  7352 */                     //
/*  7353 */                     $currLineNo = 224;
/*  7354 */                     $currColNo = 8;
/*  7355 */ 
/*  7356 */                     if (self === undefined) {
/*  7357 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7358 */                     }
/*  7359 */                     $ret = Sk.abstr.gattr(self, 'findtcb', true);
/*  7360 */                     $blk = 1; /* allowing case fallthrough */
/*  7361 */                 case 1:
/*  7362 */                     /* --- function return or resume suspension --- */
/*  7363 */                     if ($ret && $ret.$isSuspension) {
/*  7364 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 12);
/*  7365 */                     }
/*  7366 */                     var $lattr341 = $ret;
/*  7367 */                     if (pkt === undefined) {
/*  7368 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7369 */                     }
/*  7370 */                     $ret = Sk.abstr.gattr(pkt, 'ident', true);
/*  7371 */                     $blk = 2; /* allowing case fallthrough */
/*  7372 */                 case 2:
/*  7373 */                     /* --- function return or resume suspension --- */
/*  7374 */                     if ($ret && $ret.$isSuspension) {
/*  7375 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 25);
/*  7376 */                     }
/*  7377 */                     var $lattr342 = $ret;
/*  7378 */                     $ret;
/*  7379 */                     $ret = Sk.misceval.callsimOrSuspend($lattr341, $lattr342);
/*  7380 */                     $blk = 3; /* allowing case fallthrough */
/*  7381 */                 case 3:
/*  7382 */                     /* --- function return or resume suspension --- */
/*  7383 */                     if ($ret && $ret.$isSuspension) {
/*  7384 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 12);
/*  7385 */                     }
/*  7386 */                     var $call343 = $ret;
/*  7387 */                     //
/*  7388 */                     // line 224:
/*  7389 */                     //         t = self.findtcb(pkt.ident)
/*  7390 */                     //             ^
/*  7391 */                     //
/*  7392 */                     $currLineNo = 224;
/*  7393 */                     $currColNo = 12;
/*  7394 */ 
/*  7395 */                     t = $call343;
/*  7396 */                     //
/*  7397 */                     // line 225:
/*  7398 */                     //         taskWorkArea.qpktCount += 1
/*  7399 */                     //         ^
/*  7400 */                     //
/*  7401 */                     $currLineNo = 225;
/*  7402 */                     $currColNo = 8;
/*  7403 */ 
/*  7404 */                     var $loadgbl344 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  7405 */                     $ret = Sk.abstr.gattr($loadgbl344, 'qpktCount', true);
/*  7406 */                     $blk = 4; /* allowing case fallthrough */
/*  7407 */                 case 4:
/*  7408 */                     /* --- function return or resume suspension --- */
/*  7409 */                     if ($ret && $ret.$isSuspension) {
/*  7410 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 225, 8);
/*  7411 */                     }
/*  7412 */                     var $lattr345 = $ret;
/*  7413 */                     var $inplbinopattr346 = Sk.abstr.numberInplaceBinOp($lattr345, new Sk.builtin.int_(1), 'Add');
/*  7414 */                     $ret = undefined;
/*  7415 */                     if ($inplbinopattr346 !== undefined) {
/*  7416 */                         $ret = Sk.abstr.sattr($loadgbl344, 'qpktCount', $inplbinopattr346, true);
/*  7417 */                     }
/*  7418 */                     $blk = 5; /* allowing case fallthrough */
/*  7419 */                 case 5:
/*  7420 */                     /* --- function return or resume suspension --- */
/*  7421 */                     if ($ret && $ret.$isSuspension) {
/*  7422 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 225, 8);
/*  7423 */                     }
/*  7424 */                     //
/*  7425 */                     // line 226:
/*  7426 */                     //         pkt.link = None
/*  7427 */                     //         ^
/*  7428 */                     //
/*  7429 */                     $currLineNo = 226;
/*  7430 */                     $currColNo = 8;
/*  7431 */ 
/*  7432 */                     if (pkt === undefined) {
/*  7433 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7434 */                     }
/*  7435 */                     $ret = Sk.abstr.sattr(pkt, 'link', Sk.builtin.none.none$, true);
/*  7436 */                     $blk = 6; /* allowing case fallthrough */
/*  7437 */                 case 6:
/*  7438 */                     /* --- function return or resume suspension --- */
/*  7439 */                     if ($ret && $ret.$isSuspension) {
/*  7440 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 226, 8);
/*  7441 */                     }
/*  7442 */                     //
/*  7443 */                     // line 227:
/*  7444 */                     //         pkt.ident = self.ident
/*  7445 */                     //         ^
/*  7446 */                     //
/*  7447 */                     $currLineNo = 227;
/*  7448 */                     $currColNo = 8;
/*  7449 */ 
/*  7450 */                     if (self === undefined) {
/*  7451 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7452 */                     }
/*  7453 */                     $ret = Sk.abstr.gattr(self, 'ident', true);
/*  7454 */                     $blk = 7; /* allowing case fallthrough */
/*  7455 */                 case 7:
/*  7456 */                     /* --- function return or resume suspension --- */
/*  7457 */                     if ($ret && $ret.$isSuspension) {
/*  7458 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 227, 20);
/*  7459 */                     }
/*  7460 */                     var $lattr347 = $ret;
/*  7461 */                     if (pkt === undefined) {
/*  7462 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7463 */                     }
/*  7464 */                     $ret = Sk.abstr.sattr(pkt, 'ident', $lattr347, true);
/*  7465 */                     $blk = 8; /* allowing case fallthrough */
/*  7466 */                 case 8:
/*  7467 */                     /* --- function return or resume suspension --- */
/*  7468 */                     if ($ret && $ret.$isSuspension) {
/*  7469 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 227, 8);
/*  7470 */                     }
/*  7471 */                     //
/*  7472 */                     // line 228:
/*  7473 */                     //         return t.addPacket(pkt,self)
/*  7474 */                     //         ^
/*  7475 */                     //
/*  7476 */                     $currLineNo = 228;
/*  7477 */                     $currColNo = 8;
/*  7478 */ 
/*  7479 */                     if (t === undefined) {
/*  7480 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7481 */                     }
/*  7482 */                     $ret = Sk.abstr.gattr(t, 'addPacket', true);
/*  7483 */                     $blk = 9; /* allowing case fallthrough */
/*  7484 */                 case 9:
/*  7485 */                     /* --- function return or resume suspension --- */
/*  7486 */                     if ($ret && $ret.$isSuspension) {
/*  7487 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 228, 15);
/*  7488 */                     }
/*  7489 */                     var $lattr348 = $ret;
/*  7490 */                     if (pkt === undefined) {
/*  7491 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7492 */                     }
/*  7493 */                     if (self === undefined) {
/*  7494 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7495 */                     }
/*  7496 */                     $ret;
/*  7497 */                     $ret = Sk.misceval.callsimOrSuspend($lattr348, pkt, self);
/*  7498 */                     $blk = 10; /* allowing case fallthrough */
/*  7499 */                 case 10:
/*  7500 */                     /* --- function return or resume suspension --- */
/*  7501 */                     if ($ret && $ret.$isSuspension) {
/*  7502 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 228, 15);
/*  7503 */                     }
/*  7504 */                     var $call349 = $ret;
/*  7505 */                     //
/*  7506 */                     // line 228:
/*  7507 */                     //         return t.addPacket(pkt,self)
/*  7508 */                     //                ^
/*  7509 */                     //
/*  7510 */                     $currLineNo = 228;
/*  7511 */                     $currColNo = 15;
/*  7512 */ 
/*  7513 */                     return $call349;
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
/*  7524 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
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
/*  7536 */     var $scope351 = (function $findtcb352$(self, id) {
/*  7537 */         var t; /* locals */
/*  7538 */         var id, id, id, self, t, t, t, $loadgbl353, $loadgbl353, $lattr354, $compareres356, $loadgbl359, $str360, $binop361;
/*  7539 */         var $wakeFromSuspension = function() {
/*  7540 */             var susp = $scope351.$wakingSuspension;
/*  7541 */             delete $scope351.$wakingSuspension;
/*  7542 */             $blk = susp.$blk;
/*  7543 */             $loc = susp.$loc;
/*  7544 */             $gbl = susp.$gbl;
/*  7545 */             $exc = susp.$exc;
/*  7546 */             $err = susp.$err;
/*  7547 */             $postfinally = susp.$postfinally;
/*  7548 */             $currLineNo = susp.$lineno;
/*  7549 */             $currColNo = susp.$colno;
/*  7550 */             Sk.lastYield = Date.now();
/*  7551 */             id = susp.$tmps.id;
/*  7552 */             self = susp.$tmps.self;
/*  7553 */             t = susp.$tmps.t;
/*  7554 */             $loadgbl353 = susp.$tmps.$loadgbl353;
/*  7555 */             $lattr354 = susp.$tmps.$lattr354;
/*  7556 */             $compareres356 = susp.$tmps.$compareres356;
/*  7557 */             $loadgbl359 = susp.$tmps.$loadgbl359;
/*  7558 */             $str360 = susp.$tmps.$str360;
/*  7559 */             $binop361 = susp.$tmps.$binop361;
/*  7560 */             try {
/*  7561 */                 $ret = susp.child.resume();
/*  7562 */             } catch (err) {
/*  7563 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7564 */                     err = new Sk.builtin.ExternalError(err);
/*  7565 */                 }
/*  7566 */                 err.traceback.push({
/*  7567 */                     lineno: $currLineNo,
/*  7568 */                     colno: $currColNo,
/*  7569 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7570 */                 });
/*  7571 */                 if ($exc.length > 0) {
/*  7572 */                     $err = err;
/*  7573 */                     $blk = $exc.pop();
/*  7574 */                 } else {
/*  7575 */                     throw err;
/*  7576 */                 }
/*  7577 */             }
/*  7578 */         };
/*  7579 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7580 */             var susp = new Sk.misceval.Suspension();
/*  7581 */             susp.child = $child;
/*  7582 */             susp.resume = function() {
/*  7583 */                 $scope351.$wakingSuspension = susp;
/*  7584 */                 return $scope351();
/*  7585 */             };
/*  7586 */             susp.data = susp.child.data;
/*  7587 */             susp.$blk = $blk;
/*  7588 */             susp.$loc = $loc;
/*  7589 */             susp.$gbl = $gbl;
/*  7590 */             susp.$exc = $exc;
/*  7591 */             susp.$err = $err;
/*  7592 */             susp.$postfinally = $postfinally;
/*  7593 */             susp.$filename = $filename;
/*  7594 */             susp.$lineno = $lineno;
/*  7595 */             susp.$colno = $colno;
/*  7596 */             susp.optional = susp.child.optional;
/*  7597 */             susp.$tmps = {
/*  7598 */                 "id": id,
/*  7599 */                 "self": self,
/*  7600 */                 "t": t,
/*  7601 */                 "$loadgbl353": $loadgbl353,
/*  7602 */                 "$lattr354": $lattr354,
/*  7603 */                 "$compareres356": $compareres356,
/*  7604 */                 "$loadgbl359": $loadgbl359,
/*  7605 */                 "$str360": $str360,
/*  7606 */                 "$binop361": $binop361
/*  7607 */             };
/*  7608 */             return susp;
/*  7609 */         };
/*  7610 */         var $blk = 0,
/*  7611 */             $exc = [],
/*  7612 */             $loc = {},
/*  7613 */             $gbl = this,
/*  7614 */             $err = undefined,
/*  7615 */             $ret = undefined,
/*  7616 */             $postfinally = undefined,
/*  7617 */             $currLineNo = undefined,
/*  7618 */             $currColNo = undefined;
/*  7619 */         if (typeof Sk.execStart === 'undefined') {
/*  7620 */             Sk.execStart = Date.now()
/*  7621 */         }
/*  7622 */         if (typeof Sk.lastYield === 'undefined') {
/*  7623 */             Sk.lastYield = Date.now()
/*  7624 */         }
/*  7625 */         if ($scope351.$wakingSuspension !== undefined) {
/*  7626 */             $wakeFromSuspension();
/*  7627 */         } else {
/*  7628 */             Sk.builtin.pyCheckArgs("findtcb", arguments, 2, 2, false, false);
/*  7629 */         }
/*  7630 */         while (true) {
/*  7631 */             try {
/*  7632 */                 var $dateNow = Date.now();
/*  7633 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  7634 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7635 */                 }
/*  7636 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7637 */                     var $susp = $saveSuspension({
/*  7638 */                         data: {
/*  7639 */                             type: 'Sk.yield'
/*  7640 */                         },
/*  7641 */                         resume: function() {}
/*  7642 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  7643 */                     $susp.$blk = $blk;
/*  7644 */                     $susp.optional = true;
/*  7645 */                     return $susp;
/*  7646 */                 }
/*  7647 */                 switch ($blk) {
/*  7648 */                 case 0:
/*  7649 */                     /* --- codeobj entry --- */
/*  7650 */                     if (self === undefined) {
/*  7651 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7652 */                     }
/*  7653 */                     if (id === undefined) {
/*  7654 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  7655 */                     }
/*  7656 */ 
/*  7657 */                     //
/*  7658 */                     // line 232:
/*  7659 */                     //         t = taskWorkArea.taskTab[id]
/*  7660 */                     //         ^
/*  7661 */                     //
/*  7662 */                     $currLineNo = 232;
/*  7663 */                     $currColNo = 8;
/*  7664 */ 
/*  7665 */                     var $loadgbl353 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  7666 */                     $ret = Sk.abstr.gattr($loadgbl353, 'taskTab', true);
/*  7667 */                     $blk = 1; /* allowing case fallthrough */
/*  7668 */                 case 1:
/*  7669 */                     /* --- function return or resume suspension --- */
/*  7670 */                     if ($ret && $ret.$isSuspension) {
/*  7671 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 232, 12);
/*  7672 */                     }
/*  7673 */                     var $lattr354 = $ret;
/*  7674 */                     if (id === undefined) {
/*  7675 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  7676 */                     }
/*  7677 */                     $ret = Sk.abstr.objectGetItem($lattr354, id, true);
/*  7678 */                     $blk = 2; /* allowing case fallthrough */
/*  7679 */                 case 2:
/*  7680 */                     /* --- function return or resume suspension --- */
/*  7681 */                     if ($ret && $ret.$isSuspension) {
/*  7682 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  7683 */                     }
/*  7684 */                     var $lsubscr355 = $ret;
/*  7685 */                     t = $lsubscr355;
/*  7686 */                     //
/*  7687 */                     // line 233:
/*  7688 */                     //         if t is None:
/*  7689 */                     //         ^
/*  7690 */                     //
/*  7691 */                     $currLineNo = 233;
/*  7692 */                     $currColNo = 8;
/*  7693 */ 
/*  7694 */                     if (t === undefined) {
/*  7695 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7696 */                     }
/*  7697 */                     var $compareres356 = null;
/*  7698 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, Sk.builtin.none.none$, 'Is', true));
/*  7699 */                     $blk = 5; /* allowing case fallthrough */
/*  7700 */                 case 5:
/*  7701 */                     /* --- function return or resume suspension --- */
/*  7702 */                     if ($ret && $ret.$isSuspension) {
/*  7703 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 233, 11);
/*  7704 */                     }
/*  7705 */                     $compareres356 = $ret;
/*  7706 */                     var $jfalse357 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7707 */                     if ($jfalse357) { /*test failed */
/*  7708 */                         $blk = 4;
/*  7709 */                         continue;
/*  7710 */                     }
/*  7711 */                     $blk = 4; /* allowing case fallthrough */
/*  7712 */                 case 4:
/*  7713 */                     /* --- done --- */
/*  7714 */                     var $jfalse358 = ($compareres356 === false || !Sk.misceval.isTrue($compareres356));
/*  7715 */                     if ($jfalse358) { /*test failed */
/*  7716 */                         $blk = 3;
/*  7717 */                         continue;
/*  7718 */                     }
/*  7719 */                     //
/*  7720 */                     // line 234:
/*  7721 */                     //             raise Exception("Bad task id %d" % id)
/*  7722 */                     //             ^
/*  7723 */                     //
/*  7724 */                     $currLineNo = 234;
/*  7725 */                     $currColNo = 12;
/*  7726 */ 
/*  7727 */                     var $loadgbl359 = Sk.misceval.loadname('Exception', $gbl);
/*  7728 */                     var $str360 = new Sk.builtins['str']('Bad task id %d');
/*  7729 */                     if (id === undefined) {
/*  7730 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  7731 */                     }
/*  7732 */                     var $binop361 = Sk.abstr.numberBinOp($str360, id, 'Mod');
/*  7733 */                     $ret;
/*  7734 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl359, $binop361);
/*  7735 */                     $blk = 6; /* allowing case fallthrough */
/*  7736 */                 case 6:
/*  7737 */                     /* --- function return or resume suspension --- */
/*  7738 */                     if ($ret && $ret.$isSuspension) {
/*  7739 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 234, 18);
/*  7740 */                     }
/*  7741 */                     var $call362 = $ret;
/*  7742 */                     //
/*  7743 */                     // line 234:
/*  7744 */                     //             raise Exception("Bad task id %d" % id)
/*  7745 */                     //                   ^
/*  7746 */                     //
/*  7747 */                     $currLineNo = 234;
/*  7748 */                     $currColNo = 18;
/*  7749 */ 
/*  7750 */                     throw $call362;
/*  7751 */                     $blk = 3; /* allowing case fallthrough */
/*  7752 */                 case 3:
/*  7753 */                     /* --- end of if --- */
/*  7754 */                     //
/*  7755 */                     // line 235:
/*  7756 */                     //         return t
/*  7757 */                     //         ^
/*  7758 */                     //
/*  7759 */                     $currLineNo = 235;
/*  7760 */                     $currColNo = 8;
/*  7761 */ 
/*  7762 */                     if (t === undefined) {
/*  7763 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7764 */                     }
/*  7765 */                     return t;
/*  7766 */                     return Sk.builtin.none.none$;
/*  7767 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7768 */                 }
/*  7769 */             } catch (err) {
/*  7770 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7771 */                     err = new Sk.builtin.ExternalError(err);
/*  7772 */                 }
/*  7773 */                 err.traceback.push({
/*  7774 */                     lineno: $currLineNo,
/*  7775 */                     colno: $currColNo,
/*  7776 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7777 */                 });
/*  7778 */                 if ($exc.length > 0) {
/*  7779 */                     $err = err;
/*  7780 */                     $blk = $exc.pop();
/*  7781 */                     continue;
/*  7782 */                 } else {
/*  7783 */                     throw err;
/*  7784 */                 }
/*  7785 */             }
/*  7786 */         }
/*  7787 */     });
/*  7788 */     var $scope366 = (function $DeviceTask$class_outer($globals, $locals, $rest) {
/*  7789 */         var $gbl = $globals,
/*  7790 */             $loc = $locals;
/*  7791 */         (function $DeviceTask$_closure() {
/*  7792 */             var $blk = 0,
/*  7793 */                 $exc = [],
/*  7794 */                 $ret = undefined,
/*  7795 */                 $postfinally = undefined,
/*  7796 */                 $currLineNo = undefined,
/*  7797 */                 $currColNo = undefined;
/*  7798 */             if (typeof Sk.execStart === 'undefined') {
/*  7799 */                 Sk.execStart = Date.now()
/*  7800 */             }
/*  7801 */             while (true) {
/*  7802 */                 try {
/*  7803 */                     var $dateNow = Date.now();
/*  7804 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  7805 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7806 */                     }
/*  7807 */                     switch ($blk) {
/*  7808 */                     case 0:
/*  7809 */                         /* --- class entry --- */
/*  7810 */                         //
/*  7811 */                         // line 242:
/*  7812 */                         //     def __init__(self,i,p,w,s,r):
/*  7813 */                         //     ^
/*  7814 */                         //
/*  7815 */                         $currLineNo = 242;
/*  7816 */                         $currColNo = 4;
/*  7817 */ 
/*  7818 */                         $scope367.co_name = new Sk.builtins['str']('__init__');
/*  7819 */                         $scope367.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  7820 */                         var $funcobj372 = new Sk.builtins['function']($scope367, $gbl);
/*  7821 */                         $loc.__init__ = $funcobj372;
/*  7822 */                         //
/*  7823 */                         // line 245:
/*  7824 */                         //     def fn(self,pkt,r):
/*  7825 */                         //     ^
/*  7826 */                         //
/*  7827 */                         $currLineNo = 245;
/*  7828 */                         $currColNo = 4;
/*  7829 */ 
/*  7830 */                         $scope373.co_name = new Sk.builtins['str']('fn');
/*  7831 */                         $scope373.co_varnames = ['self', 'pkt', 'r'];
/*  7832 */                         var $funcobj397 = new Sk.builtins['function']($scope373, $gbl);
/*  7833 */                         $loc.fn = $funcobj397;
/*  7834 */                         return;
/*  7835 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7836 */                     }
/*  7837 */                 } catch (err) {
/*  7838 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  7839 */                         err = new Sk.builtin.ExternalError(err);
/*  7840 */                     }
/*  7841 */                     err.traceback.push({
/*  7842 */                         lineno: $currLineNo,
/*  7843 */                         colno: $currColNo,
/*  7844 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7845 */                     });
/*  7846 */                     if ($exc.length > 0) {
/*  7847 */                         $err = err;
/*  7848 */                         $blk = $exc.pop();
/*  7849 */                         continue;
/*  7850 */                     } else {
/*  7851 */                         throw err;
/*  7852 */                     }
/*  7853 */                 }
/*  7854 */             }
/*  7855 */         }).apply(null, $rest);
/*  7856 */     });
/*  7857 */     var $scope367 = (function $__init__368$(self, i, p, w, s, r) {
/*  7858 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl369, $loadgbl369, $lattr370;
/*  7859 */         var $wakeFromSuspension = function() {
/*  7860 */             var susp = $scope367.$wakingSuspension;
/*  7861 */             delete $scope367.$wakingSuspension;
/*  7862 */             $blk = susp.$blk;
/*  7863 */             $loc = susp.$loc;
/*  7864 */             $gbl = susp.$gbl;
/*  7865 */             $exc = susp.$exc;
/*  7866 */             $err = susp.$err;
/*  7867 */             $postfinally = susp.$postfinally;
/*  7868 */             $currLineNo = susp.$lineno;
/*  7869 */             $currColNo = susp.$colno;
/*  7870 */             Sk.lastYield = Date.now();
/*  7871 */             i = susp.$tmps.i;
/*  7872 */             p = susp.$tmps.p;
/*  7873 */             r = susp.$tmps.r;
/*  7874 */             s = susp.$tmps.s;
/*  7875 */             self = susp.$tmps.self;
/*  7876 */             w = susp.$tmps.w;
/*  7877 */             $loadgbl369 = susp.$tmps.$loadgbl369;
/*  7878 */             $lattr370 = susp.$tmps.$lattr370;
/*  7879 */             try {
/*  7880 */                 $ret = susp.child.resume();
/*  7881 */             } catch (err) {
/*  7882 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7883 */                     err = new Sk.builtin.ExternalError(err);
/*  7884 */                 }
/*  7885 */                 err.traceback.push({
/*  7886 */                     lineno: $currLineNo,
/*  7887 */                     colno: $currColNo,
/*  7888 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7889 */                 });
/*  7890 */                 if ($exc.length > 0) {
/*  7891 */                     $err = err;
/*  7892 */                     $blk = $exc.pop();
/*  7893 */                 } else {
/*  7894 */                     throw err;
/*  7895 */                 }
/*  7896 */             }
/*  7897 */         };
/*  7898 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7899 */             var susp = new Sk.misceval.Suspension();
/*  7900 */             susp.child = $child;
/*  7901 */             susp.resume = function() {
/*  7902 */                 $scope367.$wakingSuspension = susp;
/*  7903 */                 return $scope367();
/*  7904 */             };
/*  7905 */             susp.data = susp.child.data;
/*  7906 */             susp.$blk = $blk;
/*  7907 */             susp.$loc = $loc;
/*  7908 */             susp.$gbl = $gbl;
/*  7909 */             susp.$exc = $exc;
/*  7910 */             susp.$err = $err;
/*  7911 */             susp.$postfinally = $postfinally;
/*  7912 */             susp.$filename = $filename;
/*  7913 */             susp.$lineno = $lineno;
/*  7914 */             susp.$colno = $colno;
/*  7915 */             susp.optional = susp.child.optional;
/*  7916 */             susp.$tmps = {
/*  7917 */                 "i": i,
/*  7918 */                 "p": p,
/*  7919 */                 "r": r,
/*  7920 */                 "s": s,
/*  7921 */                 "self": self,
/*  7922 */                 "w": w,
/*  7923 */                 "$loadgbl369": $loadgbl369,
/*  7924 */                 "$lattr370": $lattr370
/*  7925 */             };
/*  7926 */             return susp;
/*  7927 */         };
/*  7928 */         var $blk = 0,
/*  7929 */             $exc = [],
/*  7930 */             $loc = {},
/*  7931 */             $gbl = this,
/*  7932 */             $err = undefined,
/*  7933 */             $ret = undefined,
/*  7934 */             $postfinally = undefined,
/*  7935 */             $currLineNo = undefined,
/*  7936 */             $currColNo = undefined;
/*  7937 */         if (typeof Sk.execStart === 'undefined') {
/*  7938 */             Sk.execStart = Date.now()
/*  7939 */         }
/*  7940 */         if (typeof Sk.lastYield === 'undefined') {
/*  7941 */             Sk.lastYield = Date.now()
/*  7942 */         }
/*  7943 */         if ($scope367.$wakingSuspension !== undefined) {
/*  7944 */             $wakeFromSuspension();
/*  7945 */         } else {
/*  7946 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  7947 */         }
/*  7948 */         while (true) {
/*  7949 */             try {
/*  7950 */                 var $dateNow = Date.now();
/*  7951 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  7952 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7953 */                 }
/*  7954 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7955 */                     var $susp = $saveSuspension({
/*  7956 */                         data: {
/*  7957 */                             type: 'Sk.yield'
/*  7958 */                         },
/*  7959 */                         resume: function() {}
/*  7960 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  7961 */                     $susp.$blk = $blk;
/*  7962 */                     $susp.optional = true;
/*  7963 */                     return $susp;
/*  7964 */                 }
/*  7965 */                 switch ($blk) {
/*  7966 */                 case 0:
/*  7967 */                     /* --- codeobj entry --- */
/*  7968 */                     if (self === undefined) {
/*  7969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7970 */                     }
/*  7971 */                     if (i === undefined) {
/*  7972 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7973 */                     }
/*  7974 */                     if (p === undefined) {
/*  7975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7976 */                     }
/*  7977 */                     if (w === undefined) {
/*  7978 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  7979 */                     }
/*  7980 */                     if (s === undefined) {
/*  7981 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  7982 */                     }
/*  7983 */                     if (r === undefined) {
/*  7984 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7985 */                     }
/*  7986 */ 
/*  7987 */                     //
/*  7988 */                     // line 243:
/*  7989 */                     //         Task.__init__(self,i,p,w,s,r)
/*  7990 */                     //         ^
/*  7991 */                     //
/*  7992 */                     $currLineNo = 243;
/*  7993 */                     $currColNo = 8;
/*  7994 */ 
/*  7995 */                     var $loadgbl369 = Sk.misceval.loadname('Task', $gbl);
/*  7996 */                     $ret = Sk.abstr.gattr($loadgbl369, '__init__', true);
/*  7997 */                     $blk = 1; /* allowing case fallthrough */
/*  7998 */                 case 1:
/*  7999 */                     /* --- function return or resume suspension --- */
/*  8000 */                     if ($ret && $ret.$isSuspension) {
/*  8001 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 243, 8);
/*  8002 */                     }
/*  8003 */                     var $lattr370 = $ret;
/*  8004 */                     if (self === undefined) {
/*  8005 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8006 */                     }
/*  8007 */                     if (i === undefined) {
/*  8008 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8009 */                     }
/*  8010 */                     if (p === undefined) {
/*  8011 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  8012 */                     }
/*  8013 */                     if (w === undefined) {
/*  8014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  8015 */                     }
/*  8016 */                     if (s === undefined) {
/*  8017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  8018 */                     }
/*  8019 */                     if (r === undefined) {
/*  8020 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8021 */                     }
/*  8022 */                     $ret;
/*  8023 */                     $ret = Sk.misceval.callsimOrSuspend($lattr370, self, i, p, w, s, r);
/*  8024 */                     $blk = 2; /* allowing case fallthrough */
/*  8025 */                 case 2:
/*  8026 */                     /* --- function return or resume suspension --- */
/*  8027 */                     if ($ret && $ret.$isSuspension) {
/*  8028 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 243, 8);
/*  8029 */                     }
/*  8030 */                     var $call371 = $ret;
/*  8031 */                     //
/*  8032 */                     // line 243:
/*  8033 */                     //         Task.__init__(self,i,p,w,s,r)
/*  8034 */                     //         ^
/*  8035 */                     //
/*  8036 */                     $currLineNo = 243;
/*  8037 */                     $currColNo = 8;
/*  8038 */ 
/*  8039 */                     return Sk.builtin.none.none$;
/*  8040 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8041 */                 }
/*  8042 */             } catch (err) {
/*  8043 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8044 */                     err = new Sk.builtin.ExternalError(err);
/*  8045 */                 }
/*  8046 */                 err.traceback.push({
/*  8047 */                     lineno: $currLineNo,
/*  8048 */                     colno: $currColNo,
/*  8049 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8050 */                 });
/*  8051 */                 if ($exc.length > 0) {
/*  8052 */                     $err = err;
/*  8053 */                     $blk = $exc.pop();
/*  8054 */                     continue;
/*  8055 */                 } else {
/*  8056 */                     throw err;
/*  8057 */                 }
/*  8058 */             }
/*  8059 */         }
/*  8060 */     });
/*  8061 */     var $scope373 = (function $fn374$(self, pkt, r) {
/*  8062 */         var d; /* locals */
/*  8063 */         var d, d, d, d, d, pkt, pkt, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, self, $loadgbl375, $loadgbl376, $compareres379, $compareres383, $lattr386, $lattr388, $loadgbl392, $loadgbl392, $lattr393, $lattr395;
/*  8064 */         var $wakeFromSuspension = function() {
/*  8065 */             var susp = $scope373.$wakingSuspension;
/*  8066 */             delete $scope373.$wakingSuspension;
/*  8067 */             $blk = susp.$blk;
/*  8068 */             $loc = susp.$loc;
/*  8069 */             $gbl = susp.$gbl;
/*  8070 */             $exc = susp.$exc;
/*  8071 */             $err = susp.$err;
/*  8072 */             $postfinally = susp.$postfinally;
/*  8073 */             $currLineNo = susp.$lineno;
/*  8074 */             $currColNo = susp.$colno;
/*  8075 */             Sk.lastYield = Date.now();
/*  8076 */             d = susp.$tmps.d;
/*  8077 */             pkt = susp.$tmps.pkt;
/*  8078 */             r = susp.$tmps.r;
/*  8079 */             self = susp.$tmps.self;
/*  8080 */             $loadgbl375 = susp.$tmps.$loadgbl375;
/*  8081 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  8082 */             $compareres379 = susp.$tmps.$compareres379;
/*  8083 */             $compareres383 = susp.$tmps.$compareres383;
/*  8084 */             $lattr386 = susp.$tmps.$lattr386;
/*  8085 */             $lattr388 = susp.$tmps.$lattr388;
/*  8086 */             $loadgbl392 = susp.$tmps.$loadgbl392;
/*  8087 */             $lattr393 = susp.$tmps.$lattr393;
/*  8088 */             $lattr395 = susp.$tmps.$lattr395;
/*  8089 */             try {
/*  8090 */                 $ret = susp.child.resume();
/*  8091 */             } catch (err) {
/*  8092 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8093 */                     err = new Sk.builtin.ExternalError(err);
/*  8094 */                 }
/*  8095 */                 err.traceback.push({
/*  8096 */                     lineno: $currLineNo,
/*  8097 */                     colno: $currColNo,
/*  8098 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8099 */                 });
/*  8100 */                 if ($exc.length > 0) {
/*  8101 */                     $err = err;
/*  8102 */                     $blk = $exc.pop();
/*  8103 */                 } else {
/*  8104 */                     throw err;
/*  8105 */                 }
/*  8106 */             }
/*  8107 */         };
/*  8108 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8109 */             var susp = new Sk.misceval.Suspension();
/*  8110 */             susp.child = $child;
/*  8111 */             susp.resume = function() {
/*  8112 */                 $scope373.$wakingSuspension = susp;
/*  8113 */                 return $scope373();
/*  8114 */             };
/*  8115 */             susp.data = susp.child.data;
/*  8116 */             susp.$blk = $blk;
/*  8117 */             susp.$loc = $loc;
/*  8118 */             susp.$gbl = $gbl;
/*  8119 */             susp.$exc = $exc;
/*  8120 */             susp.$err = $err;
/*  8121 */             susp.$postfinally = $postfinally;
/*  8122 */             susp.$filename = $filename;
/*  8123 */             susp.$lineno = $lineno;
/*  8124 */             susp.$colno = $colno;
/*  8125 */             susp.optional = susp.child.optional;
/*  8126 */             susp.$tmps = {
/*  8127 */                 "d": d,
/*  8128 */                 "pkt": pkt,
/*  8129 */                 "r": r,
/*  8130 */                 "self": self,
/*  8131 */                 "$loadgbl375": $loadgbl375,
/*  8132 */                 "$loadgbl376": $loadgbl376,
/*  8133 */                 "$compareres379": $compareres379,
/*  8134 */                 "$compareres383": $compareres383,
/*  8135 */                 "$lattr386": $lattr386,
/*  8136 */                 "$lattr388": $lattr388,
/*  8137 */                 "$loadgbl392": $loadgbl392,
/*  8138 */                 "$lattr393": $lattr393,
/*  8139 */                 "$lattr395": $lattr395
/*  8140 */             };
/*  8141 */             return susp;
/*  8142 */         };
/*  8143 */         var $blk = 0,
/*  8144 */             $exc = [],
/*  8145 */             $loc = {},
/*  8146 */             $gbl = this,
/*  8147 */             $err = undefined,
/*  8148 */             $ret = undefined,
/*  8149 */             $postfinally = undefined,
/*  8150 */             $currLineNo = undefined,
/*  8151 */             $currColNo = undefined;
/*  8152 */         if (typeof Sk.execStart === 'undefined') {
/*  8153 */             Sk.execStart = Date.now()
/*  8154 */         }
/*  8155 */         if (typeof Sk.lastYield === 'undefined') {
/*  8156 */             Sk.lastYield = Date.now()
/*  8157 */         }
/*  8158 */         if ($scope373.$wakingSuspension !== undefined) {
/*  8159 */             $wakeFromSuspension();
/*  8160 */         } else {
/*  8161 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  8162 */         }
/*  8163 */         while (true) {
/*  8164 */             try {
/*  8165 */                 var $dateNow = Date.now();
/*  8166 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  8167 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8168 */                 }
/*  8169 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8170 */                     var $susp = $saveSuspension({
/*  8171 */                         data: {
/*  8172 */                             type: 'Sk.yield'
/*  8173 */                         },
/*  8174 */                         resume: function() {}
/*  8175 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  8176 */                     $susp.$blk = $blk;
/*  8177 */                     $susp.optional = true;
/*  8178 */                     return $susp;
/*  8179 */                 }
/*  8180 */                 switch ($blk) {
/*  8181 */                 case 0:
/*  8182 */                     /* --- codeobj entry --- */
/*  8183 */                     if (self === undefined) {
/*  8184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8185 */                     }
/*  8186 */                     if (pkt === undefined) {
/*  8187 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8188 */                     }
/*  8189 */                     if (r === undefined) {
/*  8190 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8191 */                     }
/*  8192 */ 
/*  8193 */                     //
/*  8194 */                     // line 246:
/*  8195 */                     //         d = r
/*  8196 */                     //         ^
/*  8197 */                     //
/*  8198 */                     $currLineNo = 246;
/*  8199 */                     $currColNo = 8;
/*  8200 */ 
/*  8201 */                     if (r === undefined) {
/*  8202 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8203 */                     }
/*  8204 */                     d = r;
/*  8205 */                     //
/*  8206 */                     // line 247:
/*  8207 */                     //         assert isinstance(d, DeviceTaskRec)
/*  8208 */                     //         ^
/*  8209 */                     //
/*  8210 */                     $currLineNo = 247;
/*  8211 */                     $currColNo = 8;
/*  8212 */ 
/*  8213 */                     var $loadgbl375 = Sk.misceval.loadname('isinstance', $gbl);
/*  8214 */                     if (d === undefined) {
/*  8215 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  8216 */                     }
/*  8217 */                     var $loadgbl376 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/*  8218 */                     $ret;
/*  8219 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl375, d, $loadgbl376);
/*  8220 */                     $blk = 1; /* allowing case fallthrough */
/*  8221 */                 case 1:
/*  8222 */                     /* --- function return or resume suspension --- */
/*  8223 */                     if ($ret && $ret.$isSuspension) {
/*  8224 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 247, 15);
/*  8225 */                     }
/*  8226 */                     var $call377 = $ret;
/*  8227 */                     //
/*  8228 */                     // line 247:
/*  8229 */                     //         assert isinstance(d, DeviceTaskRec)
/*  8230 */                     //                ^
/*  8231 */                     //
/*  8232 */                     $currLineNo = 247;
/*  8233 */                     $currColNo = 15;
/*  8234 */ 
/*  8235 */                     var $jtrue378 = ($call377 === true || Sk.misceval.isTrue($call377));
/*  8236 */                     if ($jtrue378) { /*test passed */
/*  8237 */                         $blk = 2;
/*  8238 */                         continue;
/*  8239 */                     }
/*  8240 */                     throw new Sk.builtin.AssertionError();
/*  8241 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8242 */                 case 2:
/*  8243 */                     /* --- end --- */
/*  8244 */                     //
/*  8245 */                     // line 248:
/*  8246 */                     //         if pkt is None:
/*  8247 */                     //         ^
/*  8248 */                     //
/*  8249 */                     $currLineNo = 248;
/*  8250 */                     $currColNo = 8;
/*  8251 */ 
/*  8252 */                     if (pkt === undefined) {
/*  8253 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8254 */                     }
/*  8255 */                     var $compareres379 = null;
/*  8256 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/*  8257 */                     $blk = 6; /* allowing case fallthrough */
/*  8258 */                 case 6:
/*  8259 */                     /* --- function return or resume suspension --- */
/*  8260 */                     if ($ret && $ret.$isSuspension) {
/*  8261 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 248, 11);
/*  8262 */                     }
/*  8263 */                     $compareres379 = $ret;
/*  8264 */                     var $jfalse380 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8265 */                     if ($jfalse380) { /*test failed */
/*  8266 */                         $blk = 5;
/*  8267 */                         continue;
/*  8268 */                     }
/*  8269 */                     $blk = 5; /* allowing case fallthrough */
/*  8270 */                 case 5:
/*  8271 */                     /* --- done --- */
/*  8272 */                     var $jfalse381 = ($compareres379 === false || !Sk.misceval.isTrue($compareres379));
/*  8273 */                     if ($jfalse381) { /*test failed */
/*  8274 */                         $blk = 4;
/*  8275 */                         continue;
/*  8276 */                     }
/*  8277 */                     //
/*  8278 */                     // line 249:
/*  8279 */                     //             pkt = d.pending
/*  8280 */                     //             ^
/*  8281 */                     //
/*  8282 */                     $currLineNo = 249;
/*  8283 */                     $currColNo = 12;
/*  8284 */ 
/*  8285 */                     if (d === undefined) {
/*  8286 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  8287 */                     }
/*  8288 */                     $ret = Sk.abstr.gattr(d, 'pending', true);
/*  8289 */                     $blk = 7; /* allowing case fallthrough */
/*  8290 */                 case 7:
/*  8291 */                     /* --- function return or resume suspension --- */
/*  8292 */                     if ($ret && $ret.$isSuspension) {
/*  8293 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 249, 18);
/*  8294 */                     }
/*  8295 */                     var $lattr382 = $ret;
/*  8296 */                     pkt = $lattr382;
/*  8297 */                     //
/*  8298 */                     // line 250:
/*  8299 */                     //             if pkt is None:
/*  8300 */                     //             ^
/*  8301 */                     //
/*  8302 */                     $currLineNo = 250;
/*  8303 */                     $currColNo = 12;
/*  8304 */ 
/*  8305 */                     if (pkt === undefined) {
/*  8306 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8307 */                     }
/*  8308 */                     var $compareres383 = null;
/*  8309 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/*  8310 */                     $blk = 11; /* allowing case fallthrough */
/*  8311 */                 case 11:
/*  8312 */                     /* --- function return or resume suspension --- */
/*  8313 */                     if ($ret && $ret.$isSuspension) {
/*  8314 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 250, 15);
/*  8315 */                     }
/*  8316 */                     $compareres383 = $ret;
/*  8317 */                     var $jfalse384 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8318 */                     if ($jfalse384) { /*test failed */
/*  8319 */                         $blk = 10;
/*  8320 */                         continue;
/*  8321 */                     }
/*  8322 */                     $blk = 10; /* allowing case fallthrough */
/*  8323 */                 case 10:
/*  8324 */                     /* --- done --- */
/*  8325 */                     var $jfalse385 = ($compareres383 === false || !Sk.misceval.isTrue($compareres383));
/*  8326 */                     if ($jfalse385) { /*test failed */
/*  8327 */                         $blk = 9;
/*  8328 */                         continue;
/*  8329 */                     }
/*  8330 */                     //
/*  8331 */                     // line 251:
/*  8332 */                     //                 return self.waitTask()
/*  8333 */                     //                 ^
/*  8334 */                     //
/*  8335 */                     $currLineNo = 251;
/*  8336 */                     $currColNo = 16;
/*  8337 */ 
/*  8338 */                     if (self === undefined) {
/*  8339 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8340 */                     }
/*  8341 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  8342 */                     $blk = 12; /* allowing case fallthrough */
/*  8343 */                 case 12:
/*  8344 */                     /* --- function return or resume suspension --- */
/*  8345 */                     if ($ret && $ret.$isSuspension) {
/*  8346 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 251, 23);
/*  8347 */                     }
/*  8348 */                     var $lattr386 = $ret;
/*  8349 */                     $ret;
/*  8350 */                     $ret = Sk.misceval.callsimOrSuspend($lattr386);
/*  8351 */                     $blk = 13; /* allowing case fallthrough */
/*  8352 */                 case 13:
/*  8353 */                     /* --- function return or resume suspension --- */
/*  8354 */                     if ($ret && $ret.$isSuspension) {
/*  8355 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 251, 23);
/*  8356 */                     }
/*  8357 */                     var $call387 = $ret;
/*  8358 */                     //
/*  8359 */                     // line 251:
/*  8360 */                     //                 return self.waitTask()
/*  8361 */                     //                        ^
/*  8362 */                     //
/*  8363 */                     $currLineNo = 251;
/*  8364 */                     $currColNo = 23;
/*  8365 */ 
/*  8366 */                     return $call387;
/*  8367 */                     $blk = 8; /* allowing case fallthrough */
/*  8368 */                 case 8:
/*  8369 */                     /* --- end of if --- */
/*  8370 */                     $blk = 3; /* allowing case fallthrough */
/*  8371 */                 case 3:
/*  8372 */                     /* --- end of if --- */
/*  8373 */                     return Sk.builtin.none.none$;
/*  8374 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8375 */                 case 4:
/*  8376 */                     /* --- next branch of if --- */
/*  8377 */                     //
/*  8378 */                     // line 256:
/*  8379 */                     //             d.pending = pkt
/*  8380 */                     //             ^
/*  8381 */                     //
/*  8382 */                     $currLineNo = 256;
/*  8383 */                     $currColNo = 12;
/*  8384 */ 
/*  8385 */                     if (pkt === undefined) {
/*  8386 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8387 */                     }
/*  8388 */                     if (d === undefined) {
/*  8389 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  8390 */                     }
/*  8391 */                     $ret = Sk.abstr.sattr(d, 'pending', pkt, true);
/*  8392 */                     $blk = 17; /* allowing case fallthrough */
/*  8393 */                 case 17:
/*  8394 */                     /* --- function return or resume suspension --- */
/*  8395 */                     if ($ret && $ret.$isSuspension) {
/*  8396 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 256, 12);
/*  8397 */                     }
/*  8398 */                     //
/*  8399 */                     // line 257:
/*  8400 */                     //             if tracing: trace(pkt.datum)
/*  8401 */                     //             ^
/*  8402 */                     //
/*  8403 */                     $currLineNo = 257;
/*  8404 */                     $currColNo = 12;
/*  8405 */ 
/*  8406 */                     var $loadgbl390 = Sk.misceval.loadname('tracing', $gbl);
/*  8407 */                     var $jfalse391 = ($loadgbl390 === false || !Sk.misceval.isTrue($loadgbl390));
/*  8408 */                     if ($jfalse391) { /*test failed */
/*  8409 */                         $blk = 18;
/*  8410 */                         continue;
/*  8411 */                     }
/*  8412 */                     //
/*  8413 */                     // line 257:
/*  8414 */                     //             if tracing: trace(pkt.datum)
/*  8415 */                     //                         ^
/*  8416 */                     //
/*  8417 */                     $currLineNo = 257;
/*  8418 */                     $currColNo = 24;
/*  8419 */ 
/*  8420 */                     var $loadgbl392 = Sk.misceval.loadname('trace', $gbl);
/*  8421 */                     if (pkt === undefined) {
/*  8422 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8423 */                     }
/*  8424 */                     $ret = Sk.abstr.gattr(pkt, 'datum', true);
/*  8425 */                     $blk = 19; /* allowing case fallthrough */
/*  8426 */                 case 19:
/*  8427 */                     /* --- function return or resume suspension --- */
/*  8428 */                     if ($ret && $ret.$isSuspension) {
/*  8429 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 257, 30);
/*  8430 */                     }
/*  8431 */                     var $lattr393 = $ret;
/*  8432 */                     $ret;
/*  8433 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl392, $lattr393);
/*  8434 */                     $blk = 20; /* allowing case fallthrough */
/*  8435 */                 case 20:
/*  8436 */                     /* --- function return or resume suspension --- */
/*  8437 */                     if ($ret && $ret.$isSuspension) {
/*  8438 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 257, 24);
/*  8439 */                     }
/*  8440 */                     var $call394 = $ret;
/*  8441 */                     //
/*  8442 */                     // line 257:
/*  8443 */                     //             if tracing: trace(pkt.datum)
/*  8444 */                     //                         ^
/*  8445 */                     //
/*  8446 */                     $currLineNo = 257;
/*  8447 */                     $currColNo = 24;
/*  8448 */ 
/*  8449 */                     $blk = 18; /* allowing case fallthrough */
/*  8450 */                 case 18:
/*  8451 */                     /* --- end of if --- */
/*  8452 */                     //
/*  8453 */                     // line 258:
/*  8454 */                     //             return self.hold()
/*  8455 */                     //             ^
/*  8456 */                     //
/*  8457 */                     $currLineNo = 258;
/*  8458 */                     $currColNo = 12;
/*  8459 */ 
/*  8460 */                     if (self === undefined) {
/*  8461 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8462 */                     }
/*  8463 */                     $ret = Sk.abstr.gattr(self, 'hold', true);
/*  8464 */                     $blk = 21; /* allowing case fallthrough */
/*  8465 */                 case 21:
/*  8466 */                     /* --- function return or resume suspension --- */
/*  8467 */                     if ($ret && $ret.$isSuspension) {
/*  8468 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 258, 19);
/*  8469 */                     }
/*  8470 */                     var $lattr395 = $ret;
/*  8471 */                     $ret;
/*  8472 */                     $ret = Sk.misceval.callsimOrSuspend($lattr395);
/*  8473 */                     $blk = 22; /* allowing case fallthrough */
/*  8474 */                 case 22:
/*  8475 */                     /* --- function return or resume suspension --- */
/*  8476 */                     if ($ret && $ret.$isSuspension) {
/*  8477 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 258, 19);
/*  8478 */                     }
/*  8479 */                     var $call396 = $ret;
/*  8480 */                     //
/*  8481 */                     // line 258:
/*  8482 */                     //             return self.hold()
/*  8483 */                     //                    ^
/*  8484 */                     //
/*  8485 */                     $currLineNo = 258;
/*  8486 */                     $currColNo = 19;
/*  8487 */ 
/*  8488 */                     return $call396;
/*  8489 */                     $blk = 3; /* jump */
/*  8490 */                     continue;
/*  8491 */                 case 9:
/*  8492 */                     /* --- next branch of if --- */
/*  8493 */                     //
/*  8494 */                     // line 253:
/*  8495 */                     //                 d.pending = None
/*  8496 */                     //                 ^
/*  8497 */                     //
/*  8498 */                     $currLineNo = 253;
/*  8499 */                     $currColNo = 16;
/*  8500 */ 
/*  8501 */                     if (d === undefined) {
/*  8502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  8503 */                     }
/*  8504 */                     $ret = Sk.abstr.sattr(d, 'pending', Sk.builtin.none.none$, true);
/*  8505 */                     $blk = 14; /* allowing case fallthrough */
/*  8506 */                 case 14:
/*  8507 */                     /* --- function return or resume suspension --- */
/*  8508 */                     if ($ret && $ret.$isSuspension) {
/*  8509 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 253, 16);
/*  8510 */                     }
/*  8511 */                     //
/*  8512 */                     // line 254:
/*  8513 */                     //                 return self.qpkt(pkt)
/*  8514 */                     //                 ^
/*  8515 */                     //
/*  8516 */                     $currLineNo = 254;
/*  8517 */                     $currColNo = 16;
/*  8518 */ 
/*  8519 */                     if (self === undefined) {
/*  8520 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8521 */                     }
/*  8522 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  8523 */                     $blk = 15; /* allowing case fallthrough */
/*  8524 */                 case 15:
/*  8525 */                     /* --- function return or resume suspension --- */
/*  8526 */                     if ($ret && $ret.$isSuspension) {
/*  8527 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 254, 23);
/*  8528 */                     }
/*  8529 */                     var $lattr388 = $ret;
/*  8530 */                     if (pkt === undefined) {
/*  8531 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8532 */                     }
/*  8533 */                     $ret;
/*  8534 */                     $ret = Sk.misceval.callsimOrSuspend($lattr388, pkt);
/*  8535 */                     $blk = 16; /* allowing case fallthrough */
/*  8536 */                 case 16:
/*  8537 */                     /* --- function return or resume suspension --- */
/*  8538 */                     if ($ret && $ret.$isSuspension) {
/*  8539 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 254, 23);
/*  8540 */                     }
/*  8541 */                     var $call389 = $ret;
/*  8542 */                     //
/*  8543 */                     // line 254:
/*  8544 */                     //                 return self.qpkt(pkt)
/*  8545 */                     //                        ^
/*  8546 */                     //
/*  8547 */                     $currLineNo = 254;
/*  8548 */                     $currColNo = 23;
/*  8549 */ 
/*  8550 */                     return $call389;
/*  8551 */                     $blk = 8; /* jump */
/*  8552 */                     continue;
/*  8553 */                 }
/*  8554 */             } catch (err) {
/*  8555 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8556 */                     err = new Sk.builtin.ExternalError(err);
/*  8557 */                 }
/*  8558 */                 err.traceback.push({
/*  8559 */                     lineno: $currLineNo,
/*  8560 */                     colno: $currColNo,
/*  8561 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8562 */                 });
/*  8563 */                 if ($exc.length > 0) {
/*  8564 */                     $err = err;
/*  8565 */                     $blk = $exc.pop();
/*  8566 */                     continue;
/*  8567 */                 } else {
/*  8568 */                     throw err;
/*  8569 */                 }
/*  8570 */             }
/*  8571 */         }
/*  8572 */     });
/*  8573 */     var $scope400 = (function $HandlerTask$class_outer($globals, $locals, $rest) {
/*  8574 */         var $gbl = $globals,
/*  8575 */             $loc = $locals;
/*  8576 */         (function $HandlerTask$_closure() {
/*  8577 */             var $blk = 0,
/*  8578 */                 $exc = [],
/*  8579 */                 $ret = undefined,
/*  8580 */                 $postfinally = undefined,
/*  8581 */                 $currLineNo = undefined,
/*  8582 */                 $currColNo = undefined;
/*  8583 */             if (typeof Sk.execStart === 'undefined') {
/*  8584 */                 Sk.execStart = Date.now()
/*  8585 */             }
/*  8586 */             while (true) {
/*  8587 */                 try {
/*  8588 */                     var $dateNow = Date.now();
/*  8589 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  8590 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8591 */                     }
/*  8592 */                     switch ($blk) {
/*  8593 */                     case 0:
/*  8594 */                         /* --- class entry --- */
/*  8595 */                         //
/*  8596 */                         // line 263:
/*  8597 */                         //     def __init__(self,i,p,w,s,r):
/*  8598 */                         //     ^
/*  8599 */                         //
/*  8600 */                         $currLineNo = 263;
/*  8601 */                         $currColNo = 4;
/*  8602 */ 
/*  8603 */                         $scope401.co_name = new Sk.builtins['str']('__init__');
/*  8604 */                         $scope401.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  8605 */                         var $funcobj406 = new Sk.builtins['function']($scope401, $gbl);
/*  8606 */                         $loc.__init__ = $funcobj406;
/*  8607 */                         //
/*  8608 */                         // line 266:
/*  8609 */                         //     def fn(self,pkt,r):
/*  8610 */                         //     ^
/*  8611 */                         //
/*  8612 */                         $currLineNo = 266;
/*  8613 */                         $currColNo = 4;
/*  8614 */ 
/*  8615 */                         $scope407.co_name = new Sk.builtins['str']('fn');
/*  8616 */                         $scope407.co_varnames = ['self', 'pkt', 'r'];
/*  8617 */                         var $funcobj451 = new Sk.builtins['function']($scope407, $gbl);
/*  8618 */                         $loc.fn = $funcobj451;
/*  8619 */                         return;
/*  8620 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8621 */                     }
/*  8622 */                 } catch (err) {
/*  8623 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  8624 */                         err = new Sk.builtin.ExternalError(err);
/*  8625 */                     }
/*  8626 */                     err.traceback.push({
/*  8627 */                         lineno: $currLineNo,
/*  8628 */                         colno: $currColNo,
/*  8629 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8630 */                     });
/*  8631 */                     if ($exc.length > 0) {
/*  8632 */                         $err = err;
/*  8633 */                         $blk = $exc.pop();
/*  8634 */                         continue;
/*  8635 */                     } else {
/*  8636 */                         throw err;
/*  8637 */                     }
/*  8638 */                 }
/*  8639 */             }
/*  8640 */         }).apply(null, $rest);
/*  8641 */     });
/*  8642 */     var $scope401 = (function $__init__402$(self, i, p, w, s, r) {
/*  8643 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl403, $loadgbl403, $lattr404;
/*  8644 */         var $wakeFromSuspension = function() {
/*  8645 */             var susp = $scope401.$wakingSuspension;
/*  8646 */             delete $scope401.$wakingSuspension;
/*  8647 */             $blk = susp.$blk;
/*  8648 */             $loc = susp.$loc;
/*  8649 */             $gbl = susp.$gbl;
/*  8650 */             $exc = susp.$exc;
/*  8651 */             $err = susp.$err;
/*  8652 */             $postfinally = susp.$postfinally;
/*  8653 */             $currLineNo = susp.$lineno;
/*  8654 */             $currColNo = susp.$colno;
/*  8655 */             Sk.lastYield = Date.now();
/*  8656 */             i = susp.$tmps.i;
/*  8657 */             p = susp.$tmps.p;
/*  8658 */             r = susp.$tmps.r;
/*  8659 */             s = susp.$tmps.s;
/*  8660 */             self = susp.$tmps.self;
/*  8661 */             w = susp.$tmps.w;
/*  8662 */             $loadgbl403 = susp.$tmps.$loadgbl403;
/*  8663 */             $lattr404 = susp.$tmps.$lattr404;
/*  8664 */             try {
/*  8665 */                 $ret = susp.child.resume();
/*  8666 */             } catch (err) {
/*  8667 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8668 */                     err = new Sk.builtin.ExternalError(err);
/*  8669 */                 }
/*  8670 */                 err.traceback.push({
/*  8671 */                     lineno: $currLineNo,
/*  8672 */                     colno: $currColNo,
/*  8673 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8674 */                 });
/*  8675 */                 if ($exc.length > 0) {
/*  8676 */                     $err = err;
/*  8677 */                     $blk = $exc.pop();
/*  8678 */                 } else {
/*  8679 */                     throw err;
/*  8680 */                 }
/*  8681 */             }
/*  8682 */         };
/*  8683 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8684 */             var susp = new Sk.misceval.Suspension();
/*  8685 */             susp.child = $child;
/*  8686 */             susp.resume = function() {
/*  8687 */                 $scope401.$wakingSuspension = susp;
/*  8688 */                 return $scope401();
/*  8689 */             };
/*  8690 */             susp.data = susp.child.data;
/*  8691 */             susp.$blk = $blk;
/*  8692 */             susp.$loc = $loc;
/*  8693 */             susp.$gbl = $gbl;
/*  8694 */             susp.$exc = $exc;
/*  8695 */             susp.$err = $err;
/*  8696 */             susp.$postfinally = $postfinally;
/*  8697 */             susp.$filename = $filename;
/*  8698 */             susp.$lineno = $lineno;
/*  8699 */             susp.$colno = $colno;
/*  8700 */             susp.optional = susp.child.optional;
/*  8701 */             susp.$tmps = {
/*  8702 */                 "i": i,
/*  8703 */                 "p": p,
/*  8704 */                 "r": r,
/*  8705 */                 "s": s,
/*  8706 */                 "self": self,
/*  8707 */                 "w": w,
/*  8708 */                 "$loadgbl403": $loadgbl403,
/*  8709 */                 "$lattr404": $lattr404
/*  8710 */             };
/*  8711 */             return susp;
/*  8712 */         };
/*  8713 */         var $blk = 0,
/*  8714 */             $exc = [],
/*  8715 */             $loc = {},
/*  8716 */             $gbl = this,
/*  8717 */             $err = undefined,
/*  8718 */             $ret = undefined,
/*  8719 */             $postfinally = undefined,
/*  8720 */             $currLineNo = undefined,
/*  8721 */             $currColNo = undefined;
/*  8722 */         if (typeof Sk.execStart === 'undefined') {
/*  8723 */             Sk.execStart = Date.now()
/*  8724 */         }
/*  8725 */         if (typeof Sk.lastYield === 'undefined') {
/*  8726 */             Sk.lastYield = Date.now()
/*  8727 */         }
/*  8728 */         if ($scope401.$wakingSuspension !== undefined) {
/*  8729 */             $wakeFromSuspension();
/*  8730 */         } else {
/*  8731 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  8732 */         }
/*  8733 */         while (true) {
/*  8734 */             try {
/*  8735 */                 var $dateNow = Date.now();
/*  8736 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  8737 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8738 */                 }
/*  8739 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8740 */                     var $susp = $saveSuspension({
/*  8741 */                         data: {
/*  8742 */                             type: 'Sk.yield'
/*  8743 */                         },
/*  8744 */                         resume: function() {}
/*  8745 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  8746 */                     $susp.$blk = $blk;
/*  8747 */                     $susp.optional = true;
/*  8748 */                     return $susp;
/*  8749 */                 }
/*  8750 */                 switch ($blk) {
/*  8751 */                 case 0:
/*  8752 */                     /* --- codeobj entry --- */
/*  8753 */                     if (self === undefined) {
/*  8754 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8755 */                     }
/*  8756 */                     if (i === undefined) {
/*  8757 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8758 */                     }
/*  8759 */                     if (p === undefined) {
/*  8760 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  8761 */                     }
/*  8762 */                     if (w === undefined) {
/*  8763 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  8764 */                     }
/*  8765 */                     if (s === undefined) {
/*  8766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  8767 */                     }
/*  8768 */                     if (r === undefined) {
/*  8769 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8770 */                     }
/*  8771 */ 
/*  8772 */                     //
/*  8773 */                     // line 264:
/*  8774 */                     //         Task.__init__(self,i,p,w,s,r)
/*  8775 */                     //         ^
/*  8776 */                     //
/*  8777 */                     $currLineNo = 264;
/*  8778 */                     $currColNo = 8;
/*  8779 */ 
/*  8780 */                     var $loadgbl403 = Sk.misceval.loadname('Task', $gbl);
/*  8781 */                     $ret = Sk.abstr.gattr($loadgbl403, '__init__', true);
/*  8782 */                     $blk = 1; /* allowing case fallthrough */
/*  8783 */                 case 1:
/*  8784 */                     /* --- function return or resume suspension --- */
/*  8785 */                     if ($ret && $ret.$isSuspension) {
/*  8786 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 264, 8);
/*  8787 */                     }
/*  8788 */                     var $lattr404 = $ret;
/*  8789 */                     if (self === undefined) {
/*  8790 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8791 */                     }
/*  8792 */                     if (i === undefined) {
/*  8793 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8794 */                     }
/*  8795 */                     if (p === undefined) {
/*  8796 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  8797 */                     }
/*  8798 */                     if (w === undefined) {
/*  8799 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  8800 */                     }
/*  8801 */                     if (s === undefined) {
/*  8802 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  8803 */                     }
/*  8804 */                     if (r === undefined) {
/*  8805 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8806 */                     }
/*  8807 */                     $ret;
/*  8808 */                     $ret = Sk.misceval.callsimOrSuspend($lattr404, self, i, p, w, s, r);
/*  8809 */                     $blk = 2; /* allowing case fallthrough */
/*  8810 */                 case 2:
/*  8811 */                     /* --- function return or resume suspension --- */
/*  8812 */                     if ($ret && $ret.$isSuspension) {
/*  8813 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 264, 8);
/*  8814 */                     }
/*  8815 */                     var $call405 = $ret;
/*  8816 */                     //
/*  8817 */                     // line 264:
/*  8818 */                     //         Task.__init__(self,i,p,w,s,r)
/*  8819 */                     //         ^
/*  8820 */                     //
/*  8821 */                     $currLineNo = 264;
/*  8822 */                     $currColNo = 8;
/*  8823 */ 
/*  8824 */                     return Sk.builtin.none.none$;
/*  8825 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8826 */                 }
/*  8827 */             } catch (err) {
/*  8828 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8829 */                     err = new Sk.builtin.ExternalError(err);
/*  8830 */                 }
/*  8831 */                 err.traceback.push({
/*  8832 */                     lineno: $currLineNo,
/*  8833 */                     colno: $currColNo,
/*  8834 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8835 */                 });
/*  8836 */                 if ($exc.length > 0) {
/*  8837 */                     $err = err;
/*  8838 */                     $blk = $exc.pop();
/*  8839 */                     continue;
/*  8840 */                 } else {
/*  8841 */                     throw err;
/*  8842 */                 }
/*  8843 */             }
/*  8844 */         }
/*  8845 */     });
/*  8846 */     var $scope407 = (function $fn408$(self, pkt, r) {
/*  8847 */         var count, dev, h, work; /* locals */
/*  8848 */         var count, count, count, count, dev, dev, dev, dev, dev, h, h, h, h, h, h, h, h, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, self, self, work, work, work, work, work, work, work, $loadgbl409, $loadgbl410, $compareres413, $lattr416, $compareres417, $loadgbl418, $lattr421, $lattr423, $compareres426, $lattr429, $compareres432, $loadgbl433, $lattr436, $lattr437, $compareres440, $lattr443, $lattr445, $lattr446, $lattr446, $lsubscr447, $binop448, $lattr449;
/*  8849 */         var $wakeFromSuspension = function() {
/*  8850 */             var susp = $scope407.$wakingSuspension;
/*  8851 */             delete $scope407.$wakingSuspension;
/*  8852 */             $blk = susp.$blk;
/*  8853 */             $loc = susp.$loc;
/*  8854 */             $gbl = susp.$gbl;
/*  8855 */             $exc = susp.$exc;
/*  8856 */             $err = susp.$err;
/*  8857 */             $postfinally = susp.$postfinally;
/*  8858 */             $currLineNo = susp.$lineno;
/*  8859 */             $currColNo = susp.$colno;
/*  8860 */             Sk.lastYield = Date.now();
/*  8861 */             count = susp.$tmps.count;
/*  8862 */             dev = susp.$tmps.dev;
/*  8863 */             h = susp.$tmps.h;
/*  8864 */             pkt = susp.$tmps.pkt;
/*  8865 */             r = susp.$tmps.r;
/*  8866 */             self = susp.$tmps.self;
/*  8867 */             work = susp.$tmps.work;
/*  8868 */             $loadgbl409 = susp.$tmps.$loadgbl409;
/*  8869 */             $loadgbl410 = susp.$tmps.$loadgbl410;
/*  8870 */             $compareres413 = susp.$tmps.$compareres413;
/*  8871 */             $lattr416 = susp.$tmps.$lattr416;
/*  8872 */             $compareres417 = susp.$tmps.$compareres417;
/*  8873 */             $loadgbl418 = susp.$tmps.$loadgbl418;
/*  8874 */             $lattr421 = susp.$tmps.$lattr421;
/*  8875 */             $lattr423 = susp.$tmps.$lattr423;
/*  8876 */             $compareres426 = susp.$tmps.$compareres426;
/*  8877 */             $lattr429 = susp.$tmps.$lattr429;
/*  8878 */             $compareres432 = susp.$tmps.$compareres432;
/*  8879 */             $loadgbl433 = susp.$tmps.$loadgbl433;
/*  8880 */             $lattr436 = susp.$tmps.$lattr436;
/*  8881 */             $lattr437 = susp.$tmps.$lattr437;
/*  8882 */             $compareres440 = susp.$tmps.$compareres440;
/*  8883 */             $lattr443 = susp.$tmps.$lattr443;
/*  8884 */             $lattr445 = susp.$tmps.$lattr445;
/*  8885 */             $lattr446 = susp.$tmps.$lattr446;
/*  8886 */             $lsubscr447 = susp.$tmps.$lsubscr447;
/*  8887 */             $binop448 = susp.$tmps.$binop448;
/*  8888 */             $lattr449 = susp.$tmps.$lattr449;
/*  8889 */             try {
/*  8890 */                 $ret = susp.child.resume();
/*  8891 */             } catch (err) {
/*  8892 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8893 */                     err = new Sk.builtin.ExternalError(err);
/*  8894 */                 }
/*  8895 */                 err.traceback.push({
/*  8896 */                     lineno: $currLineNo,
/*  8897 */                     colno: $currColNo,
/*  8898 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8899 */                 });
/*  8900 */                 if ($exc.length > 0) {
/*  8901 */                     $err = err;
/*  8902 */                     $blk = $exc.pop();
/*  8903 */                 } else {
/*  8904 */                     throw err;
/*  8905 */                 }
/*  8906 */             }
/*  8907 */         };
/*  8908 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8909 */             var susp = new Sk.misceval.Suspension();
/*  8910 */             susp.child = $child;
/*  8911 */             susp.resume = function() {
/*  8912 */                 $scope407.$wakingSuspension = susp;
/*  8913 */                 return $scope407();
/*  8914 */             };
/*  8915 */             susp.data = susp.child.data;
/*  8916 */             susp.$blk = $blk;
/*  8917 */             susp.$loc = $loc;
/*  8918 */             susp.$gbl = $gbl;
/*  8919 */             susp.$exc = $exc;
/*  8920 */             susp.$err = $err;
/*  8921 */             susp.$postfinally = $postfinally;
/*  8922 */             susp.$filename = $filename;
/*  8923 */             susp.$lineno = $lineno;
/*  8924 */             susp.$colno = $colno;
/*  8925 */             susp.optional = susp.child.optional;
/*  8926 */             susp.$tmps = {
/*  8927 */                 "count": count,
/*  8928 */                 "dev": dev,
/*  8929 */                 "h": h,
/*  8930 */                 "pkt": pkt,
/*  8931 */                 "r": r,
/*  8932 */                 "self": self,
/*  8933 */                 "work": work,
/*  8934 */                 "$loadgbl409": $loadgbl409,
/*  8935 */                 "$loadgbl410": $loadgbl410,
/*  8936 */                 "$compareres413": $compareres413,
/*  8937 */                 "$lattr416": $lattr416,
/*  8938 */                 "$compareres417": $compareres417,
/*  8939 */                 "$loadgbl418": $loadgbl418,
/*  8940 */                 "$lattr421": $lattr421,
/*  8941 */                 "$lattr423": $lattr423,
/*  8942 */                 "$compareres426": $compareres426,
/*  8943 */                 "$lattr429": $lattr429,
/*  8944 */                 "$compareres432": $compareres432,
/*  8945 */                 "$loadgbl433": $loadgbl433,
/*  8946 */                 "$lattr436": $lattr436,
/*  8947 */                 "$lattr437": $lattr437,
/*  8948 */                 "$compareres440": $compareres440,
/*  8949 */                 "$lattr443": $lattr443,
/*  8950 */                 "$lattr445": $lattr445,
/*  8951 */                 "$lattr446": $lattr446,
/*  8952 */                 "$lsubscr447": $lsubscr447,
/*  8953 */                 "$binop448": $binop448,
/*  8954 */                 "$lattr449": $lattr449
/*  8955 */             };
/*  8956 */             return susp;
/*  8957 */         };
/*  8958 */         var $blk = 0,
/*  8959 */             $exc = [],
/*  8960 */             $loc = {},
/*  8961 */             $gbl = this,
/*  8962 */             $err = undefined,
/*  8963 */             $ret = undefined,
/*  8964 */             $postfinally = undefined,
/*  8965 */             $currLineNo = undefined,
/*  8966 */             $currColNo = undefined;
/*  8967 */         if (typeof Sk.execStart === 'undefined') {
/*  8968 */             Sk.execStart = Date.now()
/*  8969 */         }
/*  8970 */         if (typeof Sk.lastYield === 'undefined') {
/*  8971 */             Sk.lastYield = Date.now()
/*  8972 */         }
/*  8973 */         if ($scope407.$wakingSuspension !== undefined) {
/*  8974 */             $wakeFromSuspension();
/*  8975 */         } else {
/*  8976 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  8977 */         }
/*  8978 */         while (true) {
/*  8979 */             try {
/*  8980 */                 var $dateNow = Date.now();
/*  8981 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  8982 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8983 */                 }
/*  8984 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8985 */                     var $susp = $saveSuspension({
/*  8986 */                         data: {
/*  8987 */                             type: 'Sk.yield'
/*  8988 */                         },
/*  8989 */                         resume: function() {}
/*  8990 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  8991 */                     $susp.$blk = $blk;
/*  8992 */                     $susp.optional = true;
/*  8993 */                     return $susp;
/*  8994 */                 }
/*  8995 */                 switch ($blk) {
/*  8996 */                 case 0:
/*  8997 */                     /* --- codeobj entry --- */
/*  8998 */                     if (self === undefined) {
/*  8999 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9000 */                     }
/*  9001 */                     if (pkt === undefined) {
/*  9002 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9003 */                     }
/*  9004 */                     if (r === undefined) {
/*  9005 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9006 */                     }
/*  9007 */ 
/*  9008 */                     //
/*  9009 */                     // line 267:
/*  9010 */                     //         h = r
/*  9011 */                     //         ^
/*  9012 */                     //
/*  9013 */                     $currLineNo = 267;
/*  9014 */                     $currColNo = 8;
/*  9015 */ 
/*  9016 */                     if (r === undefined) {
/*  9017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9018 */                     }
/*  9019 */                     h = r;
/*  9020 */                     //
/*  9021 */                     // line 268:
/*  9022 */                     //         assert isinstance(h, HandlerTaskRec)
/*  9023 */                     //         ^
/*  9024 */                     //
/*  9025 */                     $currLineNo = 268;
/*  9026 */                     $currColNo = 8;
/*  9027 */ 
/*  9028 */                     var $loadgbl409 = Sk.misceval.loadname('isinstance', $gbl);
/*  9029 */                     if (h === undefined) {
/*  9030 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9031 */                     }
/*  9032 */                     var $loadgbl410 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/*  9033 */                     $ret;
/*  9034 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl409, h, $loadgbl410);
/*  9035 */                     $blk = 1; /* allowing case fallthrough */
/*  9036 */                 case 1:
/*  9037 */                     /* --- function return or resume suspension --- */
/*  9038 */                     if ($ret && $ret.$isSuspension) {
/*  9039 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 268, 15);
/*  9040 */                     }
/*  9041 */                     var $call411 = $ret;
/*  9042 */                     //
/*  9043 */                     // line 268:
/*  9044 */                     //         assert isinstance(h, HandlerTaskRec)
/*  9045 */                     //                ^
/*  9046 */                     //
/*  9047 */                     $currLineNo = 268;
/*  9048 */                     $currColNo = 15;
/*  9049 */ 
/*  9050 */                     var $jtrue412 = ($call411 === true || Sk.misceval.isTrue($call411));
/*  9051 */                     if ($jtrue412) { /*test passed */
/*  9052 */                         $blk = 2;
/*  9053 */                         continue;
/*  9054 */                     }
/*  9055 */                     throw new Sk.builtin.AssertionError();
/*  9056 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9057 */                 case 2:
/*  9058 */                     /* --- end --- */
/*  9059 */                     //
/*  9060 */                     // line 269:
/*  9061 */                     //         if pkt is not None:
/*  9062 */                     //         ^
/*  9063 */                     //
/*  9064 */                     $currLineNo = 269;
/*  9065 */                     $currColNo = 8;
/*  9066 */ 
/*  9067 */                     if (pkt === undefined) {
/*  9068 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9069 */                     }
/*  9070 */                     var $compareres413 = null;
/*  9071 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'IsNot', true));
/*  9072 */                     $blk = 5; /* allowing case fallthrough */
/*  9073 */                 case 5:
/*  9074 */                     /* --- function return or resume suspension --- */
/*  9075 */                     if ($ret && $ret.$isSuspension) {
/*  9076 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 269, 11);
/*  9077 */                     }
/*  9078 */                     $compareres413 = $ret;
/*  9079 */                     var $jfalse414 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9080 */                     if ($jfalse414) { /*test failed */
/*  9081 */                         $blk = 4;
/*  9082 */                         continue;
/*  9083 */                     }
/*  9084 */                     $blk = 4; /* allowing case fallthrough */
/*  9085 */                 case 4:
/*  9086 */                     /* --- done --- */
/*  9087 */                     var $jfalse415 = ($compareres413 === false || !Sk.misceval.isTrue($compareres413));
/*  9088 */                     if ($jfalse415) { /*test failed */
/*  9089 */                         $blk = 3;
/*  9090 */                         continue;
/*  9091 */                     }
/*  9092 */                     //
/*  9093 */                     // line 270:
/*  9094 */                     //             if pkt.kind == K_WORK:
/*  9095 */                     //             ^
/*  9096 */                     //
/*  9097 */                     $currLineNo = 270;
/*  9098 */                     $currColNo = 12;
/*  9099 */ 
/*  9100 */                     if (pkt === undefined) {
/*  9101 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9102 */                     }
/*  9103 */                     $ret = Sk.abstr.gattr(pkt, 'kind', true);
/*  9104 */                     $blk = 8; /* allowing case fallthrough */
/*  9105 */                 case 8:
/*  9106 */                     /* --- function return or resume suspension --- */
/*  9107 */                     if ($ret && $ret.$isSuspension) {
/*  9108 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 270, 15);
/*  9109 */                     }
/*  9110 */                     var $lattr416 = $ret;
/*  9111 */                     var $compareres417 = null;
/*  9112 */                     var $loadgbl418 = Sk.misceval.loadname('K_WORK', $gbl);
/*  9113 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr416, $loadgbl418, 'Eq', true));
/*  9114 */                     $blk = 10; /* allowing case fallthrough */
/*  9115 */                 case 10:
/*  9116 */                     /* --- function return or resume suspension --- */
/*  9117 */                     if ($ret && $ret.$isSuspension) {
/*  9118 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 270, 15);
/*  9119 */                     }
/*  9120 */                     $compareres417 = $ret;
/*  9121 */                     var $jfalse419 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9122 */                     if ($jfalse419) { /*test failed */
/*  9123 */                         $blk = 9;
/*  9124 */                         continue;
/*  9125 */                     }
/*  9126 */                     $blk = 9; /* allowing case fallthrough */
/*  9127 */                 case 9:
/*  9128 */                     /* --- done --- */
/*  9129 */                     var $jfalse420 = ($compareres417 === false || !Sk.misceval.isTrue($compareres417));
/*  9130 */                     if ($jfalse420) { /*test failed */
/*  9131 */                         $blk = 7;
/*  9132 */                         continue;
/*  9133 */                     }
/*  9134 */                     //
/*  9135 */                     // line 271:
/*  9136 */                     //                 h.workInAdd(pkt)
/*  9137 */                     //                 ^
/*  9138 */                     //
/*  9139 */                     $currLineNo = 271;
/*  9140 */                     $currColNo = 16;
/*  9141 */ 
/*  9142 */                     if (h === undefined) {
/*  9143 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9144 */                     }
/*  9145 */                     $ret = Sk.abstr.gattr(h, 'workInAdd', true);
/*  9146 */                     $blk = 11; /* allowing case fallthrough */
/*  9147 */                 case 11:
/*  9148 */                     /* --- function return or resume suspension --- */
/*  9149 */                     if ($ret && $ret.$isSuspension) {
/*  9150 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 271, 16);
/*  9151 */                     }
/*  9152 */                     var $lattr421 = $ret;
/*  9153 */                     if (pkt === undefined) {
/*  9154 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9155 */                     }
/*  9156 */                     $ret;
/*  9157 */                     $ret = Sk.misceval.callsimOrSuspend($lattr421, pkt);
/*  9158 */                     $blk = 12; /* allowing case fallthrough */
/*  9159 */                 case 12:
/*  9160 */                     /* --- function return or resume suspension --- */
/*  9161 */                     if ($ret && $ret.$isSuspension) {
/*  9162 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 271, 16);
/*  9163 */                     }
/*  9164 */                     var $call422 = $ret;
/*  9165 */                     //
/*  9166 */                     // line 271:
/*  9167 */                     //                 h.workInAdd(pkt)
/*  9168 */                     //                 ^
/*  9169 */                     //
/*  9170 */                     $currLineNo = 271;
/*  9171 */                     $currColNo = 16;
/*  9172 */ 
/*  9173 */                     $blk = 6; /* allowing case fallthrough */
/*  9174 */                 case 6:
/*  9175 */                     /* --- end of if --- */
/*  9176 */                     $blk = 3; /* allowing case fallthrough */
/*  9177 */                 case 3:
/*  9178 */                     /* --- end of if --- */
/*  9179 */                     //
/*  9180 */                     // line 274:
/*  9181 */                     //         work = h.work_in
/*  9182 */                     //         ^
/*  9183 */                     //
/*  9184 */                     $currLineNo = 274;
/*  9185 */                     $currColNo = 8;
/*  9186 */ 
/*  9187 */                     if (h === undefined) {
/*  9188 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9189 */                     }
/*  9190 */                     $ret = Sk.abstr.gattr(h, 'work_in', true);
/*  9191 */                     $blk = 15; /* allowing case fallthrough */
/*  9192 */                 case 15:
/*  9193 */                     /* --- function return or resume suspension --- */
/*  9194 */                     if ($ret && $ret.$isSuspension) {
/*  9195 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 274, 15);
/*  9196 */                     }
/*  9197 */                     var $lattr425 = $ret;
/*  9198 */                     work = $lattr425;
/*  9199 */                     //
/*  9200 */                     // line 275:
/*  9201 */                     //         if work is None:
/*  9202 */                     //         ^
/*  9203 */                     //
/*  9204 */                     $currLineNo = 275;
/*  9205 */                     $currColNo = 8;
/*  9206 */ 
/*  9207 */                     if (work === undefined) {
/*  9208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9209 */                     }
/*  9210 */                     var $compareres426 = null;
/*  9211 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(work, Sk.builtin.none.none$, 'Is', true));
/*  9212 */                     $blk = 18; /* allowing case fallthrough */
/*  9213 */                 case 18:
/*  9214 */                     /* --- function return or resume suspension --- */
/*  9215 */                     if ($ret && $ret.$isSuspension) {
/*  9216 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 275, 11);
/*  9217 */                     }
/*  9218 */                     $compareres426 = $ret;
/*  9219 */                     var $jfalse427 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9220 */                     if ($jfalse427) { /*test failed */
/*  9221 */                         $blk = 17;
/*  9222 */                         continue;
/*  9223 */                     }
/*  9224 */                     $blk = 17; /* allowing case fallthrough */
/*  9225 */                 case 17:
/*  9226 */                     /* --- done --- */
/*  9227 */                     var $jfalse428 = ($compareres426 === false || !Sk.misceval.isTrue($compareres426));
/*  9228 */                     if ($jfalse428) { /*test failed */
/*  9229 */                         $blk = 16;
/*  9230 */                         continue;
/*  9231 */                     }
/*  9232 */                     //
/*  9233 */                     // line 276:
/*  9234 */                     //             return self.waitTask()
/*  9235 */                     //             ^
/*  9236 */                     //
/*  9237 */                     $currLineNo = 276;
/*  9238 */                     $currColNo = 12;
/*  9239 */ 
/*  9240 */                     if (self === undefined) {
/*  9241 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9242 */                     }
/*  9243 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  9244 */                     $blk = 19; /* allowing case fallthrough */
/*  9245 */                 case 19:
/*  9246 */                     /* --- function return or resume suspension --- */
/*  9247 */                     if ($ret && $ret.$isSuspension) {
/*  9248 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 276, 19);
/*  9249 */                     }
/*  9250 */                     var $lattr429 = $ret;
/*  9251 */                     $ret;
/*  9252 */                     $ret = Sk.misceval.callsimOrSuspend($lattr429);
/*  9253 */                     $blk = 20; /* allowing case fallthrough */
/*  9254 */                 case 20:
/*  9255 */                     /* --- function return or resume suspension --- */
/*  9256 */                     if ($ret && $ret.$isSuspension) {
/*  9257 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 276, 19);
/*  9258 */                     }
/*  9259 */                     var $call430 = $ret;
/*  9260 */                     //
/*  9261 */                     // line 276:
/*  9262 */                     //             return self.waitTask()
/*  9263 */                     //                    ^
/*  9264 */                     //
/*  9265 */                     $currLineNo = 276;
/*  9266 */                     $currColNo = 19;
/*  9267 */ 
/*  9268 */                     return $call430;
/*  9269 */                     $blk = 16; /* allowing case fallthrough */
/*  9270 */                 case 16:
/*  9271 */                     /* --- end of if --- */
/*  9272 */                     //
/*  9273 */                     // line 277:
/*  9274 */                     //         count = work.datum
/*  9275 */                     //         ^
/*  9276 */                     //
/*  9277 */                     $currLineNo = 277;
/*  9278 */                     $currColNo = 8;
/*  9279 */ 
/*  9280 */                     if (work === undefined) {
/*  9281 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9282 */                     }
/*  9283 */                     $ret = Sk.abstr.gattr(work, 'datum', true);
/*  9284 */                     $blk = 21; /* allowing case fallthrough */
/*  9285 */                 case 21:
/*  9286 */                     /* --- function return or resume suspension --- */
/*  9287 */                     if ($ret && $ret.$isSuspension) {
/*  9288 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 277, 16);
/*  9289 */                     }
/*  9290 */                     var $lattr431 = $ret;
/*  9291 */                     count = $lattr431;
/*  9292 */                     //
/*  9293 */                     // line 278:
/*  9294 */                     //         if count >= BUFSIZE:
/*  9295 */                     //         ^
/*  9296 */                     //
/*  9297 */                     $currLineNo = 278;
/*  9298 */                     $currColNo = 8;
/*  9299 */ 
/*  9300 */                     if (count === undefined) {
/*  9301 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  9302 */                     }
/*  9303 */                     var $compareres432 = null;
/*  9304 */                     var $loadgbl433 = Sk.misceval.loadname('BUFSIZE', $gbl);
/*  9305 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(count, $loadgbl433, 'GtE', true));
/*  9306 */                     $blk = 24; /* allowing case fallthrough */
/*  9307 */                 case 24:
/*  9308 */                     /* --- function return or resume suspension --- */
/*  9309 */                     if ($ret && $ret.$isSuspension) {
/*  9310 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 278, 11);
/*  9311 */                     }
/*  9312 */                     $compareres432 = $ret;
/*  9313 */                     var $jfalse434 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9314 */                     if ($jfalse434) { /*test failed */
/*  9315 */                         $blk = 23;
/*  9316 */                         continue;
/*  9317 */                     }
/*  9318 */                     $blk = 23; /* allowing case fallthrough */
/*  9319 */                 case 23:
/*  9320 */                     /* --- done --- */
/*  9321 */                     var $jfalse435 = ($compareres432 === false || !Sk.misceval.isTrue($compareres432));
/*  9322 */                     if ($jfalse435) { /*test failed */
/*  9323 */                         $blk = 22;
/*  9324 */                         continue;
/*  9325 */                     }
/*  9326 */                     //
/*  9327 */                     // line 279:
/*  9328 */                     //             h.work_in = work.link
/*  9329 */                     //             ^
/*  9330 */                     //
/*  9331 */                     $currLineNo = 279;
/*  9332 */                     $currColNo = 12;
/*  9333 */ 
/*  9334 */                     if (work === undefined) {
/*  9335 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9336 */                     }
/*  9337 */                     $ret = Sk.abstr.gattr(work, 'link', true);
/*  9338 */                     $blk = 25; /* allowing case fallthrough */
/*  9339 */                 case 25:
/*  9340 */                     /* --- function return or resume suspension --- */
/*  9341 */                     if ($ret && $ret.$isSuspension) {
/*  9342 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 279, 24);
/*  9343 */                     }
/*  9344 */                     var $lattr436 = $ret;
/*  9345 */                     if (h === undefined) {
/*  9346 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9347 */                     }
/*  9348 */                     $ret = Sk.abstr.sattr(h, 'work_in', $lattr436, true);
/*  9349 */                     $blk = 26; /* allowing case fallthrough */
/*  9350 */                 case 26:
/*  9351 */                     /* --- function return or resume suspension --- */
/*  9352 */                     if ($ret && $ret.$isSuspension) {
/*  9353 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 279, 12);
/*  9354 */                     }
/*  9355 */                     //
/*  9356 */                     // line 280:
/*  9357 */                     //             return self.qpkt(work)
/*  9358 */                     //             ^
/*  9359 */                     //
/*  9360 */                     $currLineNo = 280;
/*  9361 */                     $currColNo = 12;
/*  9362 */ 
/*  9363 */                     if (self === undefined) {
/*  9364 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9365 */                     }
/*  9366 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  9367 */                     $blk = 27; /* allowing case fallthrough */
/*  9368 */                 case 27:
/*  9369 */                     /* --- function return or resume suspension --- */
/*  9370 */                     if ($ret && $ret.$isSuspension) {
/*  9371 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 280, 19);
/*  9372 */                     }
/*  9373 */                     var $lattr437 = $ret;
/*  9374 */                     if (work === undefined) {
/*  9375 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9376 */                     }
/*  9377 */                     $ret;
/*  9378 */                     $ret = Sk.misceval.callsimOrSuspend($lattr437, work);
/*  9379 */                     $blk = 28; /* allowing case fallthrough */
/*  9380 */                 case 28:
/*  9381 */                     /* --- function return or resume suspension --- */
/*  9382 */                     if ($ret && $ret.$isSuspension) {
/*  9383 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 280, 19);
/*  9384 */                     }
/*  9385 */                     var $call438 = $ret;
/*  9386 */                     //
/*  9387 */                     // line 280:
/*  9388 */                     //             return self.qpkt(work)
/*  9389 */                     //                    ^
/*  9390 */                     //
/*  9391 */                     $currLineNo = 280;
/*  9392 */                     $currColNo = 19;
/*  9393 */ 
/*  9394 */                     return $call438;
/*  9395 */                     $blk = 22; /* allowing case fallthrough */
/*  9396 */                 case 22:
/*  9397 */                     /* --- end of if --- */
/*  9398 */                     //
/*  9399 */                     // line 282:
/*  9400 */                     //         dev = h.device_in
/*  9401 */                     //         ^
/*  9402 */                     //
/*  9403 */                     $currLineNo = 282;
/*  9404 */                     $currColNo = 8;
/*  9405 */ 
/*  9406 */                     if (h === undefined) {
/*  9407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9408 */                     }
/*  9409 */                     $ret = Sk.abstr.gattr(h, 'device_in', true);
/*  9410 */                     $blk = 29; /* allowing case fallthrough */
/*  9411 */                 case 29:
/*  9412 */                     /* --- function return or resume suspension --- */
/*  9413 */                     if ($ret && $ret.$isSuspension) {
/*  9414 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 282, 14);
/*  9415 */                     }
/*  9416 */                     var $lattr439 = $ret;
/*  9417 */                     dev = $lattr439;
/*  9418 */                     //
/*  9419 */                     // line 283:
/*  9420 */                     //         if dev is None:
/*  9421 */                     //         ^
/*  9422 */                     //
/*  9423 */                     $currLineNo = 283;
/*  9424 */                     $currColNo = 8;
/*  9425 */ 
/*  9426 */                     if (dev === undefined) {
/*  9427 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  9428 */                     }
/*  9429 */                     var $compareres440 = null;
/*  9430 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(dev, Sk.builtin.none.none$, 'Is', true));
/*  9431 */                     $blk = 32; /* allowing case fallthrough */
/*  9432 */                 case 32:
/*  9433 */                     /* --- function return or resume suspension --- */
/*  9434 */                     if ($ret && $ret.$isSuspension) {
/*  9435 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 283, 11);
/*  9436 */                     }
/*  9437 */                     $compareres440 = $ret;
/*  9438 */                     var $jfalse441 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9439 */                     if ($jfalse441) { /*test failed */
/*  9440 */                         $blk = 31;
/*  9441 */                         continue;
/*  9442 */                     }
/*  9443 */                     $blk = 31; /* allowing case fallthrough */
/*  9444 */                 case 31:
/*  9445 */                     /* --- done --- */
/*  9446 */                     var $jfalse442 = ($compareres440 === false || !Sk.misceval.isTrue($compareres440));
/*  9447 */                     if ($jfalse442) { /*test failed */
/*  9448 */                         $blk = 30;
/*  9449 */                         continue;
/*  9450 */                     }
/*  9451 */                     //
/*  9452 */                     // line 284:
/*  9453 */                     //             return self.waitTask()
/*  9454 */                     //             ^
/*  9455 */                     //
/*  9456 */                     $currLineNo = 284;
/*  9457 */                     $currColNo = 12;
/*  9458 */ 
/*  9459 */                     if (self === undefined) {
/*  9460 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9461 */                     }
/*  9462 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  9463 */                     $blk = 33; /* allowing case fallthrough */
/*  9464 */                 case 33:
/*  9465 */                     /* --- function return or resume suspension --- */
/*  9466 */                     if ($ret && $ret.$isSuspension) {
/*  9467 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 284, 19);
/*  9468 */                     }
/*  9469 */                     var $lattr443 = $ret;
/*  9470 */                     $ret;
/*  9471 */                     $ret = Sk.misceval.callsimOrSuspend($lattr443);
/*  9472 */                     $blk = 34; /* allowing case fallthrough */
/*  9473 */                 case 34:
/*  9474 */                     /* --- function return or resume suspension --- */
/*  9475 */                     if ($ret && $ret.$isSuspension) {
/*  9476 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 284, 19);
/*  9477 */                     }
/*  9478 */                     var $call444 = $ret;
/*  9479 */                     //
/*  9480 */                     // line 284:
/*  9481 */                     //             return self.waitTask()
/*  9482 */                     //                    ^
/*  9483 */                     //
/*  9484 */                     $currLineNo = 284;
/*  9485 */                     $currColNo = 19;
/*  9486 */ 
/*  9487 */                     return $call444;
/*  9488 */                     $blk = 30; /* allowing case fallthrough */
/*  9489 */                 case 30:
/*  9490 */                     /* --- end of if --- */
/*  9491 */                     //
/*  9492 */                     // line 286:
/*  9493 */                     //         h.device_in = dev.link
/*  9494 */                     //         ^
/*  9495 */                     //
/*  9496 */                     $currLineNo = 286;
/*  9497 */                     $currColNo = 8;
/*  9498 */ 
/*  9499 */                     if (dev === undefined) {
/*  9500 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  9501 */                     }
/*  9502 */                     $ret = Sk.abstr.gattr(dev, 'link', true);
/*  9503 */                     $blk = 35; /* allowing case fallthrough */
/*  9504 */                 case 35:
/*  9505 */                     /* --- function return or resume suspension --- */
/*  9506 */                     if ($ret && $ret.$isSuspension) {
/*  9507 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 286, 22);
/*  9508 */                     }
/*  9509 */                     var $lattr445 = $ret;
/*  9510 */                     if (h === undefined) {
/*  9511 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9512 */                     }
/*  9513 */                     $ret = Sk.abstr.sattr(h, 'device_in', $lattr445, true);
/*  9514 */                     $blk = 36; /* allowing case fallthrough */
/*  9515 */                 case 36:
/*  9516 */                     /* --- function return or resume suspension --- */
/*  9517 */                     if ($ret && $ret.$isSuspension) {
/*  9518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 286, 8);
/*  9519 */                     }
/*  9520 */                     //
/*  9521 */                     // line 287:
/*  9522 */                     //         dev.datum = work.data[count]
/*  9523 */                     //         ^
/*  9524 */                     //
/*  9525 */                     $currLineNo = 287;
/*  9526 */                     $currColNo = 8;
/*  9527 */ 
/*  9528 */                     if (work === undefined) {
/*  9529 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9530 */                     }
/*  9531 */                     $ret = Sk.abstr.gattr(work, 'data', true);
/*  9532 */                     $blk = 37; /* allowing case fallthrough */
/*  9533 */                 case 37:
/*  9534 */                     /* --- function return or resume suspension --- */
/*  9535 */                     if ($ret && $ret.$isSuspension) {
/*  9536 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 287, 20);
/*  9537 */                     }
/*  9538 */                     var $lattr446 = $ret;
/*  9539 */                     if (count === undefined) {
/*  9540 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  9541 */                     }
/*  9542 */                     $ret = Sk.abstr.objectGetItem($lattr446, count, true);
/*  9543 */                     $blk = 38; /* allowing case fallthrough */
/*  9544 */                 case 38:
/*  9545 */                     /* --- function return or resume suspension --- */
/*  9546 */                     if ($ret && $ret.$isSuspension) {
/*  9547 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  9548 */                     }
/*  9549 */                     var $lsubscr447 = $ret;
/*  9550 */                     if (dev === undefined) {
/*  9551 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  9552 */                     }
/*  9553 */                     $ret = Sk.abstr.sattr(dev, 'datum', $lsubscr447, true);
/*  9554 */                     $blk = 39; /* allowing case fallthrough */
/*  9555 */                 case 39:
/*  9556 */                     /* --- function return or resume suspension --- */
/*  9557 */                     if ($ret && $ret.$isSuspension) {
/*  9558 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 287, 8);
/*  9559 */                     }
/*  9560 */                     //
/*  9561 */                     // line 288:
/*  9562 */                     //         work.datum = count + 1
/*  9563 */                     //         ^
/*  9564 */                     //
/*  9565 */                     $currLineNo = 288;
/*  9566 */                     $currColNo = 8;
/*  9567 */ 
/*  9568 */                     if (count === undefined) {
/*  9569 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  9570 */                     }
/*  9571 */                     var $binop448 = Sk.abstr.numberBinOp(count, new Sk.builtin.int_(1), 'Add');
/*  9572 */                     if (work === undefined) {
/*  9573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  9574 */                     }
/*  9575 */                     $ret = Sk.abstr.sattr(work, 'datum', $binop448, true);
/*  9576 */                     $blk = 40; /* allowing case fallthrough */
/*  9577 */                 case 40:
/*  9578 */                     /* --- function return or resume suspension --- */
/*  9579 */                     if ($ret && $ret.$isSuspension) {
/*  9580 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 288, 8);
/*  9581 */                     }
/*  9582 */                     //
/*  9583 */                     // line 289:
/*  9584 */                     //         return self.qpkt(dev)
/*  9585 */                     //         ^
/*  9586 */                     //
/*  9587 */                     $currLineNo = 289;
/*  9588 */                     $currColNo = 8;
/*  9589 */ 
/*  9590 */                     if (self === undefined) {
/*  9591 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9592 */                     }
/*  9593 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  9594 */                     $blk = 41; /* allowing case fallthrough */
/*  9595 */                 case 41:
/*  9596 */                     /* --- function return or resume suspension --- */
/*  9597 */                     if ($ret && $ret.$isSuspension) {
/*  9598 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 289, 15);
/*  9599 */                     }
/*  9600 */                     var $lattr449 = $ret;
/*  9601 */                     if (dev === undefined) {
/*  9602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  9603 */                     }
/*  9604 */                     $ret;
/*  9605 */                     $ret = Sk.misceval.callsimOrSuspend($lattr449, dev);
/*  9606 */                     $blk = 42; /* allowing case fallthrough */
/*  9607 */                 case 42:
/*  9608 */                     /* --- function return or resume suspension --- */
/*  9609 */                     if ($ret && $ret.$isSuspension) {
/*  9610 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 289, 15);
/*  9611 */                     }
/*  9612 */                     var $call450 = $ret;
/*  9613 */                     //
/*  9614 */                     // line 289:
/*  9615 */                     //         return self.qpkt(dev)
/*  9616 */                     //                ^
/*  9617 */                     //
/*  9618 */                     $currLineNo = 289;
/*  9619 */                     $currColNo = 15;
/*  9620 */ 
/*  9621 */                     return $call450;
/*  9622 */                     return Sk.builtin.none.none$;
/*  9623 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9624 */                 case 7:
/*  9625 */                     /* --- next branch of if --- */
/*  9626 */                     //
/*  9627 */                     // line 273:
/*  9628 */                     //                 h.deviceInAdd(pkt)
/*  9629 */                     //                 ^
/*  9630 */                     //
/*  9631 */                     $currLineNo = 273;
/*  9632 */                     $currColNo = 16;
/*  9633 */ 
/*  9634 */                     if (h === undefined) {
/*  9635 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  9636 */                     }
/*  9637 */                     $ret = Sk.abstr.gattr(h, 'deviceInAdd', true);
/*  9638 */                     $blk = 13; /* allowing case fallthrough */
/*  9639 */                 case 13:
/*  9640 */                     /* --- function return or resume suspension --- */
/*  9641 */                     if ($ret && $ret.$isSuspension) {
/*  9642 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 273, 16);
/*  9643 */                     }
/*  9644 */                     var $lattr423 = $ret;
/*  9645 */                     if (pkt === undefined) {
/*  9646 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9647 */                     }
/*  9648 */                     $ret;
/*  9649 */                     $ret = Sk.misceval.callsimOrSuspend($lattr423, pkt);
/*  9650 */                     $blk = 14; /* allowing case fallthrough */
/*  9651 */                 case 14:
/*  9652 */                     /* --- function return or resume suspension --- */
/*  9653 */                     if ($ret && $ret.$isSuspension) {
/*  9654 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 273, 16);
/*  9655 */                     }
/*  9656 */                     var $call424 = $ret;
/*  9657 */                     //
/*  9658 */                     // line 273:
/*  9659 */                     //                 h.deviceInAdd(pkt)
/*  9660 */                     //                 ^
/*  9661 */                     //
/*  9662 */                     $currLineNo = 273;
/*  9663 */                     $currColNo = 16;
/*  9664 */ 
/*  9665 */                     $blk = 6; /* jump */
/*  9666 */                     continue;
/*  9667 */                 }
/*  9668 */             } catch (err) {
/*  9669 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9670 */                     err = new Sk.builtin.ExternalError(err);
/*  9671 */                 }
/*  9672 */                 err.traceback.push({
/*  9673 */                     lineno: $currLineNo,
/*  9674 */                     colno: $currColNo,
/*  9675 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9676 */                 });
/*  9677 */                 if ($exc.length > 0) {
/*  9678 */                     $err = err;
/*  9679 */                     $blk = $exc.pop();
/*  9680 */                     continue;
/*  9681 */                 } else {
/*  9682 */                     throw err;
/*  9683 */                 }
/*  9684 */             }
/*  9685 */         }
/*  9686 */     });
/*  9687 */     var $scope454 = (function $IdleTask$class_outer($globals, $locals, $rest) {
/*  9688 */         var $gbl = $globals,
/*  9689 */             $loc = $locals;
/*  9690 */         (function $IdleTask$_closure() {
/*  9691 */             var $blk = 0,
/*  9692 */                 $exc = [],
/*  9693 */                 $ret = undefined,
/*  9694 */                 $postfinally = undefined,
/*  9695 */                 $currLineNo = undefined,
/*  9696 */                 $currColNo = undefined;
/*  9697 */             if (typeof Sk.execStart === 'undefined') {
/*  9698 */                 Sk.execStart = Date.now()
/*  9699 */             }
/*  9700 */             while (true) {
/*  9701 */                 try {
/*  9702 */                     var $dateNow = Date.now();
/*  9703 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  9704 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  9705 */                     }
/*  9706 */                     switch ($blk) {
/*  9707 */                     case 0:
/*  9708 */                         /* --- class entry --- */
/*  9709 */                         //
/*  9710 */                         // line 295:
/*  9711 */                         //     def __init__(self,i,p,w,s,r):
/*  9712 */                         //     ^
/*  9713 */                         //
/*  9714 */                         $currLineNo = 295;
/*  9715 */                         $currColNo = 4;
/*  9716 */ 
/*  9717 */                         $scope455.co_name = new Sk.builtins['str']('__init__');
/*  9718 */                         $scope455.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  9719 */                         var $funcobj460 = new Sk.builtins['function']($scope455, $gbl);
/*  9720 */                         $loc.__init__ = $funcobj460;
/*  9721 */                         //
/*  9722 */                         // line 298:
/*  9723 */                         //     def fn(self,pkt,r):
/*  9724 */                         //     ^
/*  9725 */                         //
/*  9726 */                         $currLineNo = 298;
/*  9727 */                         $currColNo = 4;
/*  9728 */ 
/*  9729 */                         $scope461.co_name = new Sk.builtins['str']('fn');
/*  9730 */                         $scope461.co_varnames = ['self', 'pkt', 'r'];
/*  9731 */                         var $funcobj495 = new Sk.builtins['function']($scope461, $gbl);
/*  9732 */                         $loc.fn = $funcobj495;
/*  9733 */                         return;
/*  9734 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9735 */                     }
/*  9736 */                 } catch (err) {
/*  9737 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  9738 */                         err = new Sk.builtin.ExternalError(err);
/*  9739 */                     }
/*  9740 */                     err.traceback.push({
/*  9741 */                         lineno: $currLineNo,
/*  9742 */                         colno: $currColNo,
/*  9743 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9744 */                     });
/*  9745 */                     if ($exc.length > 0) {
/*  9746 */                         $err = err;
/*  9747 */                         $blk = $exc.pop();
/*  9748 */                         continue;
/*  9749 */                     } else {
/*  9750 */                         throw err;
/*  9751 */                     }
/*  9752 */                 }
/*  9753 */             }
/*  9754 */         }).apply(null, $rest);
/*  9755 */     });
/*  9756 */     var $scope455 = (function $__init__456$(self, i, p, w, s, r) {
/*  9757 */         var i, i, p, r, r, s, s, self, self, w, $loadgbl457, $loadgbl457, $lattr458;
/*  9758 */         var $wakeFromSuspension = function() {
/*  9759 */             var susp = $scope455.$wakingSuspension;
/*  9760 */             delete $scope455.$wakingSuspension;
/*  9761 */             $blk = susp.$blk;
/*  9762 */             $loc = susp.$loc;
/*  9763 */             $gbl = susp.$gbl;
/*  9764 */             $exc = susp.$exc;
/*  9765 */             $err = susp.$err;
/*  9766 */             $postfinally = susp.$postfinally;
/*  9767 */             $currLineNo = susp.$lineno;
/*  9768 */             $currColNo = susp.$colno;
/*  9769 */             Sk.lastYield = Date.now();
/*  9770 */             i = susp.$tmps.i;
/*  9771 */             p = susp.$tmps.p;
/*  9772 */             r = susp.$tmps.r;
/*  9773 */             s = susp.$tmps.s;
/*  9774 */             self = susp.$tmps.self;
/*  9775 */             w = susp.$tmps.w;
/*  9776 */             $loadgbl457 = susp.$tmps.$loadgbl457;
/*  9777 */             $lattr458 = susp.$tmps.$lattr458;
/*  9778 */             try {
/*  9779 */                 $ret = susp.child.resume();
/*  9780 */             } catch (err) {
/*  9781 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9782 */                     err = new Sk.builtin.ExternalError(err);
/*  9783 */                 }
/*  9784 */                 err.traceback.push({
/*  9785 */                     lineno: $currLineNo,
/*  9786 */                     colno: $currColNo,
/*  9787 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9788 */                 });
/*  9789 */                 if ($exc.length > 0) {
/*  9790 */                     $err = err;
/*  9791 */                     $blk = $exc.pop();
/*  9792 */                 } else {
/*  9793 */                     throw err;
/*  9794 */                 }
/*  9795 */             }
/*  9796 */         };
/*  9797 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9798 */             var susp = new Sk.misceval.Suspension();
/*  9799 */             susp.child = $child;
/*  9800 */             susp.resume = function() {
/*  9801 */                 $scope455.$wakingSuspension = susp;
/*  9802 */                 return $scope455();
/*  9803 */             };
/*  9804 */             susp.data = susp.child.data;
/*  9805 */             susp.$blk = $blk;
/*  9806 */             susp.$loc = $loc;
/*  9807 */             susp.$gbl = $gbl;
/*  9808 */             susp.$exc = $exc;
/*  9809 */             susp.$err = $err;
/*  9810 */             susp.$postfinally = $postfinally;
/*  9811 */             susp.$filename = $filename;
/*  9812 */             susp.$lineno = $lineno;
/*  9813 */             susp.$colno = $colno;
/*  9814 */             susp.optional = susp.child.optional;
/*  9815 */             susp.$tmps = {
/*  9816 */                 "i": i,
/*  9817 */                 "p": p,
/*  9818 */                 "r": r,
/*  9819 */                 "s": s,
/*  9820 */                 "self": self,
/*  9821 */                 "w": w,
/*  9822 */                 "$loadgbl457": $loadgbl457,
/*  9823 */                 "$lattr458": $lattr458
/*  9824 */             };
/*  9825 */             return susp;
/*  9826 */         };
/*  9827 */         var $blk = 0,
/*  9828 */             $exc = [],
/*  9829 */             $loc = {},
/*  9830 */             $gbl = this,
/*  9831 */             $err = undefined,
/*  9832 */             $ret = undefined,
/*  9833 */             $postfinally = undefined,
/*  9834 */             $currLineNo = undefined,
/*  9835 */             $currColNo = undefined;
/*  9836 */         if (typeof Sk.execStart === 'undefined') {
/*  9837 */             Sk.execStart = Date.now()
/*  9838 */         }
/*  9839 */         if (typeof Sk.lastYield === 'undefined') {
/*  9840 */             Sk.lastYield = Date.now()
/*  9841 */         }
/*  9842 */         if ($scope455.$wakingSuspension !== undefined) {
/*  9843 */             $wakeFromSuspension();
/*  9844 */         } else {
/*  9845 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  9846 */         }
/*  9847 */         while (true) {
/*  9848 */             try {
/*  9849 */                 var $dateNow = Date.now();
/*  9850 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  9851 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  9852 */                 }
/*  9853 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  9854 */                     var $susp = $saveSuspension({
/*  9855 */                         data: {
/*  9856 */                             type: 'Sk.yield'
/*  9857 */                         },
/*  9858 */                         resume: function() {}
/*  9859 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  9860 */                     $susp.$blk = $blk;
/*  9861 */                     $susp.optional = true;
/*  9862 */                     return $susp;
/*  9863 */                 }
/*  9864 */                 switch ($blk) {
/*  9865 */                 case 0:
/*  9866 */                     /* --- codeobj entry --- */
/*  9867 */                     if (self === undefined) {
/*  9868 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9869 */                     }
/*  9870 */                     if (i === undefined) {
/*  9871 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9872 */                     }
/*  9873 */                     if (p === undefined) {
/*  9874 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  9875 */                     }
/*  9876 */                     if (w === undefined) {
/*  9877 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  9878 */                     }
/*  9879 */                     if (s === undefined) {
/*  9880 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9881 */                     }
/*  9882 */                     if (r === undefined) {
/*  9883 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9884 */                     }
/*  9885 */ 
/*  9886 */                     //
/*  9887 */                     // line 296:
/*  9888 */                     //         Task.__init__(self,i,0,None,s,r)
/*  9889 */                     //         ^
/*  9890 */                     //
/*  9891 */                     $currLineNo = 296;
/*  9892 */                     $currColNo = 8;
/*  9893 */ 
/*  9894 */                     var $loadgbl457 = Sk.misceval.loadname('Task', $gbl);
/*  9895 */                     $ret = Sk.abstr.gattr($loadgbl457, '__init__', true);
/*  9896 */                     $blk = 1; /* allowing case fallthrough */
/*  9897 */                 case 1:
/*  9898 */                     /* --- function return or resume suspension --- */
/*  9899 */                     if ($ret && $ret.$isSuspension) {
/*  9900 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 296, 8);
/*  9901 */                     }
/*  9902 */                     var $lattr458 = $ret;
/*  9903 */                     if (self === undefined) {
/*  9904 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9905 */                     }
/*  9906 */                     if (i === undefined) {
/*  9907 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9908 */                     }
/*  9909 */                     if (s === undefined) {
/*  9910 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9911 */                     }
/*  9912 */                     if (r === undefined) {
/*  9913 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9914 */                     }
/*  9915 */                     $ret;
/*  9916 */                     $ret = Sk.misceval.callsimOrSuspend($lattr458, self, i, new Sk.builtin.int_(0), Sk.builtin.none.none$, s, r);
/*  9917 */                     $blk = 2; /* allowing case fallthrough */
/*  9918 */                 case 2:
/*  9919 */                     /* --- function return or resume suspension --- */
/*  9920 */                     if ($ret && $ret.$isSuspension) {
/*  9921 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 296, 8);
/*  9922 */                     }
/*  9923 */                     var $call459 = $ret;
/*  9924 */                     //
/*  9925 */                     // line 296:
/*  9926 */                     //         Task.__init__(self,i,0,None,s,r)
/*  9927 */                     //         ^
/*  9928 */                     //
/*  9929 */                     $currLineNo = 296;
/*  9930 */                     $currColNo = 8;
/*  9931 */ 
/*  9932 */                     return Sk.builtin.none.none$;
/*  9933 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9934 */                 }
/*  9935 */             } catch (err) {
/*  9936 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9937 */                     err = new Sk.builtin.ExternalError(err);
/*  9938 */                 }
/*  9939 */                 err.traceback.push({
/*  9940 */                     lineno: $currLineNo,
/*  9941 */                     colno: $currColNo,
/*  9942 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9943 */                 });
/*  9944 */                 if ($exc.length > 0) {
/*  9945 */                     $err = err;
/*  9946 */                     $blk = $exc.pop();
/*  9947 */                     continue;
/*  9948 */                 } else {
/*  9949 */                     throw err;
/*  9950 */                 }
/*  9951 */             }
/*  9952 */         }
/*  9953 */     });
/*  9954 */     var $scope461 = (function $fn462$(self, pkt, r) {
/*  9955 */         var i; /* locals */
/*  9956 */         var i, i, i, i, i, i, i, i, pkt, r, r, self, self, self, self, $loadgbl463, $loadgbl464, $lattr467, $inplbinopattr468, $lattr469, $compareres470, $lattr473, $loadgbl475, $loadgbl475, $lattr476, $loadgbl475, $lattr476, $call477, $binop478, $compareres479, $lattr482, $inplbinopattr483, $lattr484, $loadgbl485, $loadgbl487, $loadgbl487, $lattr488, $binop489, $loadgbl487, $lattr488, $binop489, $call490, $binop491, $lattr492, $loadgbl493;
/*  9957 */         var $wakeFromSuspension = function() {
/*  9958 */             var susp = $scope461.$wakingSuspension;
/*  9959 */             delete $scope461.$wakingSuspension;
/*  9960 */             $blk = susp.$blk;
/*  9961 */             $loc = susp.$loc;
/*  9962 */             $gbl = susp.$gbl;
/*  9963 */             $exc = susp.$exc;
/*  9964 */             $err = susp.$err;
/*  9965 */             $postfinally = susp.$postfinally;
/*  9966 */             $currLineNo = susp.$lineno;
/*  9967 */             $currColNo = susp.$colno;
/*  9968 */             Sk.lastYield = Date.now();
/*  9969 */             i = susp.$tmps.i;
/*  9970 */             pkt = susp.$tmps.pkt;
/*  9971 */             r = susp.$tmps.r;
/*  9972 */             self = susp.$tmps.self;
/*  9973 */             $loadgbl463 = susp.$tmps.$loadgbl463;
/*  9974 */             $loadgbl464 = susp.$tmps.$loadgbl464;
/*  9975 */             $lattr467 = susp.$tmps.$lattr467;
/*  9976 */             $inplbinopattr468 = susp.$tmps.$inplbinopattr468;
/*  9977 */             $lattr469 = susp.$tmps.$lattr469;
/*  9978 */             $compareres470 = susp.$tmps.$compareres470;
/*  9979 */             $lattr473 = susp.$tmps.$lattr473;
/*  9980 */             $loadgbl475 = susp.$tmps.$loadgbl475;
/*  9981 */             $lattr476 = susp.$tmps.$lattr476;
/*  9982 */             $call477 = susp.$tmps.$call477;
/*  9983 */             $binop478 = susp.$tmps.$binop478;
/*  9984 */             $compareres479 = susp.$tmps.$compareres479;
/*  9985 */             $lattr482 = susp.$tmps.$lattr482;
/*  9986 */             $inplbinopattr483 = susp.$tmps.$inplbinopattr483;
/*  9987 */             $lattr484 = susp.$tmps.$lattr484;
/*  9988 */             $loadgbl485 = susp.$tmps.$loadgbl485;
/*  9989 */             $loadgbl487 = susp.$tmps.$loadgbl487;
/*  9990 */             $lattr488 = susp.$tmps.$lattr488;
/*  9991 */             $binop489 = susp.$tmps.$binop489;
/*  9992 */             $call490 = susp.$tmps.$call490;
/*  9993 */             $binop491 = susp.$tmps.$binop491;
/*  9994 */             $lattr492 = susp.$tmps.$lattr492;
/*  9995 */             $loadgbl493 = susp.$tmps.$loadgbl493;
/*  9996 */             try {
/*  9997 */                 $ret = susp.child.resume();
/*  9998 */             } catch (err) {
/*  9999 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10000 */                     err = new Sk.builtin.ExternalError(err);
/* 10001 */                 }
/* 10002 */                 err.traceback.push({
/* 10003 */                     lineno: $currLineNo,
/* 10004 */                     colno: $currColNo,
/* 10005 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10006 */                 });
/* 10007 */                 if ($exc.length > 0) {
/* 10008 */                     $err = err;
/* 10009 */                     $blk = $exc.pop();
/* 10010 */                 } else {
/* 10011 */                     throw err;
/* 10012 */                 }
/* 10013 */             }
/* 10014 */         };
/* 10015 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10016 */             var susp = new Sk.misceval.Suspension();
/* 10017 */             susp.child = $child;
/* 10018 */             susp.resume = function() {
/* 10019 */                 $scope461.$wakingSuspension = susp;
/* 10020 */                 return $scope461();
/* 10021 */             };
/* 10022 */             susp.data = susp.child.data;
/* 10023 */             susp.$blk = $blk;
/* 10024 */             susp.$loc = $loc;
/* 10025 */             susp.$gbl = $gbl;
/* 10026 */             susp.$exc = $exc;
/* 10027 */             susp.$err = $err;
/* 10028 */             susp.$postfinally = $postfinally;
/* 10029 */             susp.$filename = $filename;
/* 10030 */             susp.$lineno = $lineno;
/* 10031 */             susp.$colno = $colno;
/* 10032 */             susp.optional = susp.child.optional;
/* 10033 */             susp.$tmps = {
/* 10034 */                 "i": i,
/* 10035 */                 "pkt": pkt,
/* 10036 */                 "r": r,
/* 10037 */                 "self": self,
/* 10038 */                 "$loadgbl463": $loadgbl463,
/* 10039 */                 "$loadgbl464": $loadgbl464,
/* 10040 */                 "$lattr467": $lattr467,
/* 10041 */                 "$inplbinopattr468": $inplbinopattr468,
/* 10042 */                 "$lattr469": $lattr469,
/* 10043 */                 "$compareres470": $compareres470,
/* 10044 */                 "$lattr473": $lattr473,
/* 10045 */                 "$loadgbl475": $loadgbl475,
/* 10046 */                 "$lattr476": $lattr476,
/* 10047 */                 "$call477": $call477,
/* 10048 */                 "$binop478": $binop478,
/* 10049 */                 "$compareres479": $compareres479,
/* 10050 */                 "$lattr482": $lattr482,
/* 10051 */                 "$inplbinopattr483": $inplbinopattr483,
/* 10052 */                 "$lattr484": $lattr484,
/* 10053 */                 "$loadgbl485": $loadgbl485,
/* 10054 */                 "$loadgbl487": $loadgbl487,
/* 10055 */                 "$lattr488": $lattr488,
/* 10056 */                 "$binop489": $binop489,
/* 10057 */                 "$call490": $call490,
/* 10058 */                 "$binop491": $binop491,
/* 10059 */                 "$lattr492": $lattr492,
/* 10060 */                 "$loadgbl493": $loadgbl493
/* 10061 */             };
/* 10062 */             return susp;
/* 10063 */         };
/* 10064 */         var $blk = 0,
/* 10065 */             $exc = [],
/* 10066 */             $loc = {},
/* 10067 */             $gbl = this,
/* 10068 */             $err = undefined,
/* 10069 */             $ret = undefined,
/* 10070 */             $postfinally = undefined,
/* 10071 */             $currLineNo = undefined,
/* 10072 */             $currColNo = undefined;
/* 10073 */         if (typeof Sk.execStart === 'undefined') {
/* 10074 */             Sk.execStart = Date.now()
/* 10075 */         }
/* 10076 */         if (typeof Sk.lastYield === 'undefined') {
/* 10077 */             Sk.lastYield = Date.now()
/* 10078 */         }
/* 10079 */         if ($scope461.$wakingSuspension !== undefined) {
/* 10080 */             $wakeFromSuspension();
/* 10081 */         } else {
/* 10082 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/* 10083 */         }
/* 10084 */         while (true) {
/* 10085 */             try {
/* 10086 */                 var $dateNow = Date.now();
/* 10087 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 10088 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 10089 */                 }
/* 10090 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 10091 */                     var $susp = $saveSuspension({
/* 10092 */                         data: {
/* 10093 */                             type: 'Sk.yield'
/* 10094 */                         },
/* 10095 */                         resume: function() {}
/* 10096 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 10097 */                     $susp.$blk = $blk;
/* 10098 */                     $susp.optional = true;
/* 10099 */                     return $susp;
/* 10100 */                 }
/* 10101 */                 switch ($blk) {
/* 10102 */                 case 0:
/* 10103 */                     /* --- codeobj entry --- */
/* 10104 */                     if (self === undefined) {
/* 10105 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10106 */                     }
/* 10107 */                     if (pkt === undefined) {
/* 10108 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10109 */                     }
/* 10110 */                     if (r === undefined) {
/* 10111 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10112 */                     }
/* 10113 */ 
/* 10114 */                     //
/* 10115 */                     // line 299:
/* 10116 */                     //         i = r
/* 10117 */                     //         ^
/* 10118 */                     //
/* 10119 */                     $currLineNo = 299;
/* 10120 */                     $currColNo = 8;
/* 10121 */ 
/* 10122 */                     if (r === undefined) {
/* 10123 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10124 */                     }
/* 10125 */                     i = r;
/* 10126 */                     //
/* 10127 */                     // line 300:
/* 10128 */                     //         assert isinstance(i, IdleTaskRec)
/* 10129 */                     //         ^
/* 10130 */                     //
/* 10131 */                     $currLineNo = 300;
/* 10132 */                     $currColNo = 8;
/* 10133 */ 
/* 10134 */                     var $loadgbl463 = Sk.misceval.loadname('isinstance', $gbl);
/* 10135 */                     if (i === undefined) {
/* 10136 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10137 */                     }
/* 10138 */                     var $loadgbl464 = Sk.misceval.loadname('IdleTaskRec', $gbl);
/* 10139 */                     $ret;
/* 10140 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl463, i, $loadgbl464);
/* 10141 */                     $blk = 1; /* allowing case fallthrough */
/* 10142 */                 case 1:
/* 10143 */                     /* --- function return or resume suspension --- */
/* 10144 */                     if ($ret && $ret.$isSuspension) {
/* 10145 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 300, 15);
/* 10146 */                     }
/* 10147 */                     var $call465 = $ret;
/* 10148 */                     //
/* 10149 */                     // line 300:
/* 10150 */                     //         assert isinstance(i, IdleTaskRec)
/* 10151 */                     //                ^
/* 10152 */                     //
/* 10153 */                     $currLineNo = 300;
/* 10154 */                     $currColNo = 15;
/* 10155 */ 
/* 10156 */                     var $jtrue466 = ($call465 === true || Sk.misceval.isTrue($call465));
/* 10157 */                     if ($jtrue466) { /*test passed */
/* 10158 */                         $blk = 2;
/* 10159 */                         continue;
/* 10160 */                     }
/* 10161 */                     throw new Sk.builtin.AssertionError();
/* 10162 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10163 */                 case 2:
/* 10164 */                     /* --- end --- */
/* 10165 */                     //
/* 10166 */                     // line 301:
/* 10167 */                     //         i.count -= 1
/* 10168 */                     //         ^
/* 10169 */                     //
/* 10170 */                     $currLineNo = 301;
/* 10171 */                     $currColNo = 8;
/* 10172 */ 
/* 10173 */                     if (i === undefined) {
/* 10174 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10175 */                     }
/* 10176 */                     $ret = Sk.abstr.gattr(i, 'count', true);
/* 10177 */                     $blk = 3; /* allowing case fallthrough */
/* 10178 */                 case 3:
/* 10179 */                     /* --- function return or resume suspension --- */
/* 10180 */                     if ($ret && $ret.$isSuspension) {
/* 10181 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 301, 8);
/* 10182 */                     }
/* 10183 */                     var $lattr467 = $ret;
/* 10184 */                     var $inplbinopattr468 = Sk.abstr.numberInplaceBinOp($lattr467, new Sk.builtin.int_(1), 'Sub');
/* 10185 */                     $ret = undefined;
/* 10186 */                     if ($inplbinopattr468 !== undefined) {
/* 10187 */                         $ret = Sk.abstr.sattr(i, 'count', $inplbinopattr468, true);
/* 10188 */                     }
/* 10189 */                     $blk = 4; /* allowing case fallthrough */
/* 10190 */                 case 4:
/* 10191 */                     /* --- function return or resume suspension --- */
/* 10192 */                     if ($ret && $ret.$isSuspension) {
/* 10193 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 301, 8);
/* 10194 */                     }
/* 10195 */                     //
/* 10196 */                     // line 302:
/* 10197 */                     //         if i.count == 0:
/* 10198 */                     //         ^
/* 10199 */                     //
/* 10200 */                     $currLineNo = 302;
/* 10201 */                     $currColNo = 8;
/* 10202 */ 
/* 10203 */                     if (i === undefined) {
/* 10204 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10205 */                     }
/* 10206 */                     $ret = Sk.abstr.gattr(i, 'count', true);
/* 10207 */                     $blk = 7; /* allowing case fallthrough */
/* 10208 */                 case 7:
/* 10209 */                     /* --- function return or resume suspension --- */
/* 10210 */                     if ($ret && $ret.$isSuspension) {
/* 10211 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 302, 11);
/* 10212 */                     }
/* 10213 */                     var $lattr469 = $ret;
/* 10214 */                     var $compareres470 = null;
/* 10215 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr469, new Sk.builtin.int_(0), 'Eq', true));
/* 10216 */                     $blk = 9; /* allowing case fallthrough */
/* 10217 */                 case 9:
/* 10218 */                     /* --- function return or resume suspension --- */
/* 10219 */                     if ($ret && $ret.$isSuspension) {
/* 10220 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 302, 11);
/* 10221 */                     }
/* 10222 */                     $compareres470 = $ret;
/* 10223 */                     var $jfalse471 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10224 */                     if ($jfalse471) { /*test failed */
/* 10225 */                         $blk = 8;
/* 10226 */                         continue;
/* 10227 */                     }
/* 10228 */                     $blk = 8; /* allowing case fallthrough */
/* 10229 */                 case 8:
/* 10230 */                     /* --- done --- */
/* 10231 */                     var $jfalse472 = ($compareres470 === false || !Sk.misceval.isTrue($compareres470));
/* 10232 */                     if ($jfalse472) { /*test failed */
/* 10233 */                         $blk = 6;
/* 10234 */                         continue;
/* 10235 */                     }
/* 10236 */                     //
/* 10237 */                     // line 303:
/* 10238 */                     //             return self.hold()
/* 10239 */                     //             ^
/* 10240 */                     //
/* 10241 */                     $currLineNo = 303;
/* 10242 */                     $currColNo = 12;
/* 10243 */ 
/* 10244 */                     if (self === undefined) {
/* 10245 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10246 */                     }
/* 10247 */                     $ret = Sk.abstr.gattr(self, 'hold', true);
/* 10248 */                     $blk = 10; /* allowing case fallthrough */
/* 10249 */                 case 10:
/* 10250 */                     /* --- function return or resume suspension --- */
/* 10251 */                     if ($ret && $ret.$isSuspension) {
/* 10252 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 303, 19);
/* 10253 */                     }
/* 10254 */                     var $lattr473 = $ret;
/* 10255 */                     $ret;
/* 10256 */                     $ret = Sk.misceval.callsimOrSuspend($lattr473);
/* 10257 */                     $blk = 11; /* allowing case fallthrough */
/* 10258 */                 case 11:
/* 10259 */                     /* --- function return or resume suspension --- */
/* 10260 */                     if ($ret && $ret.$isSuspension) {
/* 10261 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 303, 19);
/* 10262 */                     }
/* 10263 */                     var $call474 = $ret;
/* 10264 */                     //
/* 10265 */                     // line 303:
/* 10266 */                     //             return self.hold()
/* 10267 */                     //                    ^
/* 10268 */                     //
/* 10269 */                     $currLineNo = 303;
/* 10270 */                     $currColNo = 19;
/* 10271 */ 
/* 10272 */                     return $call474;
/* 10273 */                     $blk = 5; /* allowing case fallthrough */
/* 10274 */                 case 5:
/* 10275 */                     /* --- end of if --- */
/* 10276 */                     return Sk.builtin.none.none$;
/* 10277 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10278 */                 case 6:
/* 10279 */                     /* --- next branch of if --- */
/* 10280 */                     //
/* 10281 */                     // line 304:
/* 10282 */                     //         elif int(i.control) & 1 == 0:
/* 10283 */                     //              ^
/* 10284 */                     //
/* 10285 */                     $currLineNo = 304;
/* 10286 */                     $currColNo = 13;
/* 10287 */ 
/* 10288 */                     var $loadgbl475 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 10289 */                     if (i === undefined) {
/* 10290 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10291 */                     }
/* 10292 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/* 10293 */                     $blk = 14; /* allowing case fallthrough */
/* 10294 */                 case 14:
/* 10295 */                     /* --- function return or resume suspension --- */
/* 10296 */                     if ($ret && $ret.$isSuspension) {
/* 10297 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 17);
/* 10298 */                     }
/* 10299 */                     var $lattr476 = $ret;
/* 10300 */                     $ret;
/* 10301 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl475, $lattr476);
/* 10302 */                     $blk = 15; /* allowing case fallthrough */
/* 10303 */                 case 15:
/* 10304 */                     /* --- function return or resume suspension --- */
/* 10305 */                     if ($ret && $ret.$isSuspension) {
/* 10306 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 13);
/* 10307 */                     }
/* 10308 */                     var $call477 = $ret;
/* 10309 */                     //
/* 10310 */                     // line 304:
/* 10311 */                     //         elif int(i.control) & 1 == 0:
/* 10312 */                     //              ^
/* 10313 */                     //
/* 10314 */                     $currLineNo = 304;
/* 10315 */                     $currColNo = 13;
/* 10316 */ 
/* 10317 */                     var $binop478 = Sk.abstr.numberBinOp($call477, new Sk.builtin.int_(1), 'BitAnd');
/* 10318 */                     var $compareres479 = null;
/* 10319 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($binop478, new Sk.builtin.int_(0), 'Eq', true));
/* 10320 */                     $blk = 17; /* allowing case fallthrough */
/* 10321 */                 case 17:
/* 10322 */                     /* --- function return or resume suspension --- */
/* 10323 */                     if ($ret && $ret.$isSuspension) {
/* 10324 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 13);
/* 10325 */                     }
/* 10326 */                     $compareres479 = $ret;
/* 10327 */                     var $jfalse480 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10328 */                     if ($jfalse480) { /*test failed */
/* 10329 */                         $blk = 16;
/* 10330 */                         continue;
/* 10331 */                     }
/* 10332 */                     $blk = 16; /* allowing case fallthrough */
/* 10333 */                 case 16:
/* 10334 */                     /* --- done --- */
/* 10335 */                     var $jfalse481 = ($compareres479 === false || !Sk.misceval.isTrue($compareres479));
/* 10336 */                     if ($jfalse481) { /*test failed */
/* 10337 */                         $blk = 13;
/* 10338 */                         continue;
/* 10339 */                     }
/* 10340 */                     //
/* 10341 */                     // line 305:
/* 10342 */                     //             i.control /= 2
/* 10343 */                     //             ^
/* 10344 */                     //
/* 10345 */                     $currLineNo = 305;
/* 10346 */                     $currColNo = 12;
/* 10347 */ 
/* 10348 */                     if (i === undefined) {
/* 10349 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10350 */                     }
/* 10351 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/* 10352 */                     $blk = 18; /* allowing case fallthrough */
/* 10353 */                 case 18:
/* 10354 */                     /* --- function return or resume suspension --- */
/* 10355 */                     if ($ret && $ret.$isSuspension) {
/* 10356 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 305, 12);
/* 10357 */                     }
/* 10358 */                     var $lattr482 = $ret;
/* 10359 */                     var $inplbinopattr483 = Sk.abstr.numberInplaceBinOp($lattr482, new Sk.builtin.int_(2), 'Div');
/* 10360 */                     $ret = undefined;
/* 10361 */                     if ($inplbinopattr483 !== undefined) {
/* 10362 */                         $ret = Sk.abstr.sattr(i, 'control', $inplbinopattr483, true);
/* 10363 */                     }
/* 10364 */                     $blk = 19; /* allowing case fallthrough */
/* 10365 */                 case 19:
/* 10366 */                     /* --- function return or resume suspension --- */
/* 10367 */                     if ($ret && $ret.$isSuspension) {
/* 10368 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 305, 12);
/* 10369 */                     }
/* 10370 */                     //
/* 10371 */                     // line 306:
/* 10372 */                     //             return self.release(I_DEVA)
/* 10373 */                     //             ^
/* 10374 */                     //
/* 10375 */                     $currLineNo = 306;
/* 10376 */                     $currColNo = 12;
/* 10377 */ 
/* 10378 */                     if (self === undefined) {
/* 10379 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10380 */                     }
/* 10381 */                     $ret = Sk.abstr.gattr(self, 'release', true);
/* 10382 */                     $blk = 20; /* allowing case fallthrough */
/* 10383 */                 case 20:
/* 10384 */                     /* --- function return or resume suspension --- */
/* 10385 */                     if ($ret && $ret.$isSuspension) {
/* 10386 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 306, 19);
/* 10387 */                     }
/* 10388 */                     var $lattr484 = $ret;
/* 10389 */                     var $loadgbl485 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 10390 */                     $ret;
/* 10391 */                     $ret = Sk.misceval.callsimOrSuspend($lattr484, $loadgbl485);
/* 10392 */                     $blk = 21; /* allowing case fallthrough */
/* 10393 */                 case 21:
/* 10394 */                     /* --- function return or resume suspension --- */
/* 10395 */                     if ($ret && $ret.$isSuspension) {
/* 10396 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 306, 19);
/* 10397 */                     }
/* 10398 */                     var $call486 = $ret;
/* 10399 */                     //
/* 10400 */                     // line 306:
/* 10401 */                     //             return self.release(I_DEVA)
/* 10402 */                     //                    ^
/* 10403 */                     //
/* 10404 */                     $currLineNo = 306;
/* 10405 */                     $currColNo = 19;
/* 10406 */ 
/* 10407 */                     return $call486;
/* 10408 */                     $blk = 12; /* allowing case fallthrough */
/* 10409 */                 case 12:
/* 10410 */                     /* --- end of if --- */
/* 10411 */                     $blk = 5; /* jump */
/* 10412 */                     continue;
/* 10413 */                 case 13:
/* 10414 */                     /* --- next branch of if --- */
/* 10415 */                     //
/* 10416 */                     // line 308:
/* 10417 */                     //             i.control = int(i.control/2) ^ 0xd008
/* 10418 */                     //             ^
/* 10419 */                     //
/* 10420 */                     $currLineNo = 308;
/* 10421 */                     $currColNo = 12;
/* 10422 */ 
/* 10423 */                     var $loadgbl487 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 10424 */                     if (i === undefined) {
/* 10425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10426 */                     }
/* 10427 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/* 10428 */                     $blk = 22; /* allowing case fallthrough */
/* 10429 */                 case 22:
/* 10430 */                     /* --- function return or resume suspension --- */
/* 10431 */                     if ($ret && $ret.$isSuspension) {
/* 10432 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 28);
/* 10433 */                     }
/* 10434 */                     var $lattr488 = $ret;
/* 10435 */                     var $binop489 = Sk.abstr.numberBinOp($lattr488, new Sk.builtin.int_(2), 'Div');
/* 10436 */                     $ret;
/* 10437 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl487, $binop489);
/* 10438 */                     $blk = 23; /* allowing case fallthrough */
/* 10439 */                 case 23:
/* 10440 */                     /* --- function return or resume suspension --- */
/* 10441 */                     if ($ret && $ret.$isSuspension) {
/* 10442 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 24);
/* 10443 */                     }
/* 10444 */                     var $call490 = $ret;
/* 10445 */                     //
/* 10446 */                     // line 308:
/* 10447 */                     //             i.control = int(i.control/2) ^ 0xd008
/* 10448 */                     //                         ^
/* 10449 */                     //
/* 10450 */                     $currLineNo = 308;
/* 10451 */                     $currColNo = 24;
/* 10452 */ 
/* 10453 */                     var $binop491 = Sk.abstr.numberBinOp($call490, new Sk.builtin.int_(53256), 'BitXor');
/* 10454 */                     if (i === undefined) {
/* 10455 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10456 */                     }
/* 10457 */                     $ret = Sk.abstr.sattr(i, 'control', $binop491, true);
/* 10458 */                     $blk = 24; /* allowing case fallthrough */
/* 10459 */                 case 24:
/* 10460 */                     /* --- function return or resume suspension --- */
/* 10461 */                     if ($ret && $ret.$isSuspension) {
/* 10462 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 12);
/* 10463 */                     }
/* 10464 */                     //
/* 10465 */                     // line 309:
/* 10466 */                     //             return self.release(I_DEVB)
/* 10467 */                     //             ^
/* 10468 */                     //
/* 10469 */                     $currLineNo = 309;
/* 10470 */                     $currColNo = 12;
/* 10471 */ 
/* 10472 */                     if (self === undefined) {
/* 10473 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10474 */                     }
/* 10475 */                     $ret = Sk.abstr.gattr(self, 'release', true);
/* 10476 */                     $blk = 25; /* allowing case fallthrough */
/* 10477 */                 case 25:
/* 10478 */                     /* --- function return or resume suspension --- */
/* 10479 */                     if ($ret && $ret.$isSuspension) {
/* 10480 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 309, 19);
/* 10481 */                     }
/* 10482 */                     var $lattr492 = $ret;
/* 10483 */                     var $loadgbl493 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 10484 */                     $ret;
/* 10485 */                     $ret = Sk.misceval.callsimOrSuspend($lattr492, $loadgbl493);
/* 10486 */                     $blk = 26; /* allowing case fallthrough */
/* 10487 */                 case 26:
/* 10488 */                     /* --- function return or resume suspension --- */
/* 10489 */                     if ($ret && $ret.$isSuspension) {
/* 10490 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 309, 19);
/* 10491 */                     }
/* 10492 */                     var $call494 = $ret;
/* 10493 */                     //
/* 10494 */                     // line 309:
/* 10495 */                     //             return self.release(I_DEVB)
/* 10496 */                     //                    ^
/* 10497 */                     //
/* 10498 */                     $currLineNo = 309;
/* 10499 */                     $currColNo = 19;
/* 10500 */ 
/* 10501 */                     return $call494;
/* 10502 */                     $blk = 12; /* jump */
/* 10503 */                     continue;
/* 10504 */                 }
/* 10505 */             } catch (err) {
/* 10506 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10507 */                     err = new Sk.builtin.ExternalError(err);
/* 10508 */                 }
/* 10509 */                 err.traceback.push({
/* 10510 */                     lineno: $currLineNo,
/* 10511 */                     colno: $currColNo,
/* 10512 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10513 */                 });
/* 10514 */                 if ($exc.length > 0) {
/* 10515 */                     $err = err;
/* 10516 */                     $blk = $exc.pop();
/* 10517 */                     continue;
/* 10518 */                 } else {
/* 10519 */                     throw err;
/* 10520 */                 }
/* 10521 */             }
/* 10522 */         }
/* 10523 */     });
/* 10524 */     var $scope501 = (function $WorkTask$class_outer($globals, $locals, $rest) {
/* 10525 */         var $gbl = $globals,
/* 10526 */             $loc = $locals;
/* 10527 */         (function $WorkTask$_closure() {
/* 10528 */             var $blk = 0,
/* 10529 */                 $exc = [],
/* 10530 */                 $ret = undefined,
/* 10531 */                 $postfinally = undefined,
/* 10532 */                 $currLineNo = undefined,
/* 10533 */                 $currColNo = undefined;
/* 10534 */             if (typeof Sk.execStart === 'undefined') {
/* 10535 */                 Sk.execStart = Date.now()
/* 10536 */             }
/* 10537 */             while (true) {
/* 10538 */                 try {
/* 10539 */                     var $dateNow = Date.now();
/* 10540 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 10541 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 10542 */                     }
/* 10543 */                     switch ($blk) {
/* 10544 */                     case 0:
/* 10545 */                         /* --- class entry --- */
/* 10546 */                         //
/* 10547 */                         // line 318:
/* 10548 */                         //     def __init__(self,i,p,w,s,r):
/* 10549 */                         //     ^
/* 10550 */                         //
/* 10551 */                         $currLineNo = 318;
/* 10552 */                         $currColNo = 4;
/* 10553 */ 
/* 10554 */                         $scope502.co_name = new Sk.builtins['str']('__init__');
/* 10555 */                         $scope502.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/* 10556 */                         var $funcobj507 = new Sk.builtins['function']($scope502, $gbl);
/* 10557 */                         $loc.__init__ = $funcobj507;
/* 10558 */                         //
/* 10559 */                         // line 321:
/* 10560 */                         //     def fn(self,pkt,r):
/* 10561 */                         //     ^
/* 10562 */                         //
/* 10563 */                         $currLineNo = 321;
/* 10564 */                         $currColNo = 4;
/* 10565 */ 
/* 10566 */                         $scope508.co_name = new Sk.builtins['str']('fn');
/* 10567 */                         $scope508.co_varnames = ['self', 'pkt', 'r'];
/* 10568 */                         var $funcobj542 = new Sk.builtins['function']($scope508, $gbl);
/* 10569 */                         $loc.fn = $funcobj542;
/* 10570 */                         return;
/* 10571 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10572 */                     }
/* 10573 */                 } catch (err) {
/* 10574 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/* 10575 */                         err = new Sk.builtin.ExternalError(err);
/* 10576 */                     }
/* 10577 */                     err.traceback.push({
/* 10578 */                         lineno: $currLineNo,
/* 10579 */                         colno: $currColNo,
/* 10580 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10581 */                     });
/* 10582 */                     if ($exc.length > 0) {
/* 10583 */                         $err = err;
/* 10584 */                         $blk = $exc.pop();
/* 10585 */                         continue;
/* 10586 */                     } else {
/* 10587 */                         throw err;
/* 10588 */                     }
/* 10589 */                 }
/* 10590 */             }
/* 10591 */         }).apply(null, $rest);
/* 10592 */     });
/* 10593 */     var $scope502 = (function $__init__503$(self, i, p, w, s, r) {
/* 10594 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl504, $loadgbl504, $lattr505;
/* 10595 */         var $wakeFromSuspension = function() {
/* 10596 */             var susp = $scope502.$wakingSuspension;
/* 10597 */             delete $scope502.$wakingSuspension;
/* 10598 */             $blk = susp.$blk;
/* 10599 */             $loc = susp.$loc;
/* 10600 */             $gbl = susp.$gbl;
/* 10601 */             $exc = susp.$exc;
/* 10602 */             $err = susp.$err;
/* 10603 */             $postfinally = susp.$postfinally;
/* 10604 */             $currLineNo = susp.$lineno;
/* 10605 */             $currColNo = susp.$colno;
/* 10606 */             Sk.lastYield = Date.now();
/* 10607 */             i = susp.$tmps.i;
/* 10608 */             p = susp.$tmps.p;
/* 10609 */             r = susp.$tmps.r;
/* 10610 */             s = susp.$tmps.s;
/* 10611 */             self = susp.$tmps.self;
/* 10612 */             w = susp.$tmps.w;
/* 10613 */             $loadgbl504 = susp.$tmps.$loadgbl504;
/* 10614 */             $lattr505 = susp.$tmps.$lattr505;
/* 10615 */             try {
/* 10616 */                 $ret = susp.child.resume();
/* 10617 */             } catch (err) {
/* 10618 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10619 */                     err = new Sk.builtin.ExternalError(err);
/* 10620 */                 }
/* 10621 */                 err.traceback.push({
/* 10622 */                     lineno: $currLineNo,
/* 10623 */                     colno: $currColNo,
/* 10624 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10625 */                 });
/* 10626 */                 if ($exc.length > 0) {
/* 10627 */                     $err = err;
/* 10628 */                     $blk = $exc.pop();
/* 10629 */                 } else {
/* 10630 */                     throw err;
/* 10631 */                 }
/* 10632 */             }
/* 10633 */         };
/* 10634 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10635 */             var susp = new Sk.misceval.Suspension();
/* 10636 */             susp.child = $child;
/* 10637 */             susp.resume = function() {
/* 10638 */                 $scope502.$wakingSuspension = susp;
/* 10639 */                 return $scope502();
/* 10640 */             };
/* 10641 */             susp.data = susp.child.data;
/* 10642 */             susp.$blk = $blk;
/* 10643 */             susp.$loc = $loc;
/* 10644 */             susp.$gbl = $gbl;
/* 10645 */             susp.$exc = $exc;
/* 10646 */             susp.$err = $err;
/* 10647 */             susp.$postfinally = $postfinally;
/* 10648 */             susp.$filename = $filename;
/* 10649 */             susp.$lineno = $lineno;
/* 10650 */             susp.$colno = $colno;
/* 10651 */             susp.optional = susp.child.optional;
/* 10652 */             susp.$tmps = {
/* 10653 */                 "i": i,
/* 10654 */                 "p": p,
/* 10655 */                 "r": r,
/* 10656 */                 "s": s,
/* 10657 */                 "self": self,
/* 10658 */                 "w": w,
/* 10659 */                 "$loadgbl504": $loadgbl504,
/* 10660 */                 "$lattr505": $lattr505
/* 10661 */             };
/* 10662 */             return susp;
/* 10663 */         };
/* 10664 */         var $blk = 0,
/* 10665 */             $exc = [],
/* 10666 */             $loc = {},
/* 10667 */             $gbl = this,
/* 10668 */             $err = undefined,
/* 10669 */             $ret = undefined,
/* 10670 */             $postfinally = undefined,
/* 10671 */             $currLineNo = undefined,
/* 10672 */             $currColNo = undefined;
/* 10673 */         if (typeof Sk.execStart === 'undefined') {
/* 10674 */             Sk.execStart = Date.now()
/* 10675 */         }
/* 10676 */         if (typeof Sk.lastYield === 'undefined') {
/* 10677 */             Sk.lastYield = Date.now()
/* 10678 */         }
/* 10679 */         if ($scope502.$wakingSuspension !== undefined) {
/* 10680 */             $wakeFromSuspension();
/* 10681 */         } else {
/* 10682 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/* 10683 */         }
/* 10684 */         while (true) {
/* 10685 */             try {
/* 10686 */                 var $dateNow = Date.now();
/* 10687 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 10688 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 10689 */                 }
/* 10690 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 10691 */                     var $susp = $saveSuspension({
/* 10692 */                         data: {
/* 10693 */                             type: 'Sk.yield'
/* 10694 */                         },
/* 10695 */                         resume: function() {}
/* 10696 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 10697 */                     $susp.$blk = $blk;
/* 10698 */                     $susp.optional = true;
/* 10699 */                     return $susp;
/* 10700 */                 }
/* 10701 */                 switch ($blk) {
/* 10702 */                 case 0:
/* 10703 */                     /* --- codeobj entry --- */
/* 10704 */                     if (self === undefined) {
/* 10705 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10706 */                     }
/* 10707 */                     if (i === undefined) {
/* 10708 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10709 */                     }
/* 10710 */                     if (p === undefined) {
/* 10711 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10712 */                     }
/* 10713 */                     if (w === undefined) {
/* 10714 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10715 */                     }
/* 10716 */                     if (s === undefined) {
/* 10717 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 10718 */                     }
/* 10719 */                     if (r === undefined) {
/* 10720 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10721 */                     }
/* 10722 */ 
/* 10723 */                     //
/* 10724 */                     // line 319:
/* 10725 */                     //         Task.__init__(self,i,p,w,s,r)
/* 10726 */                     //         ^
/* 10727 */                     //
/* 10728 */                     $currLineNo = 319;
/* 10729 */                     $currColNo = 8;
/* 10730 */ 
/* 10731 */                     var $loadgbl504 = Sk.misceval.loadname('Task', $gbl);
/* 10732 */                     $ret = Sk.abstr.gattr($loadgbl504, '__init__', true);
/* 10733 */                     $blk = 1; /* allowing case fallthrough */
/* 10734 */                 case 1:
/* 10735 */                     /* --- function return or resume suspension --- */
/* 10736 */                     if ($ret && $ret.$isSuspension) {
/* 10737 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 319, 8);
/* 10738 */                     }
/* 10739 */                     var $lattr505 = $ret;
/* 10740 */                     if (self === undefined) {
/* 10741 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10742 */                     }
/* 10743 */                     if (i === undefined) {
/* 10744 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10745 */                     }
/* 10746 */                     if (p === undefined) {
/* 10747 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/* 10748 */                     }
/* 10749 */                     if (w === undefined) {
/* 10750 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10751 */                     }
/* 10752 */                     if (s === undefined) {
/* 10753 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/* 10754 */                     }
/* 10755 */                     if (r === undefined) {
/* 10756 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10757 */                     }
/* 10758 */                     $ret;
/* 10759 */                     $ret = Sk.misceval.callsimOrSuspend($lattr505, self, i, p, w, s, r);
/* 10760 */                     $blk = 2; /* allowing case fallthrough */
/* 10761 */                 case 2:
/* 10762 */                     /* --- function return or resume suspension --- */
/* 10763 */                     if ($ret && $ret.$isSuspension) {
/* 10764 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 319, 8);
/* 10765 */                     }
/* 10766 */                     var $call506 = $ret;
/* 10767 */                     //
/* 10768 */                     // line 319:
/* 10769 */                     //         Task.__init__(self,i,p,w,s,r)
/* 10770 */                     //         ^
/* 10771 */                     //
/* 10772 */                     $currLineNo = 319;
/* 10773 */                     $currColNo = 8;
/* 10774 */ 
/* 10775 */                     return Sk.builtin.none.none$;
/* 10776 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10777 */                 }
/* 10778 */             } catch (err) {
/* 10779 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10780 */                     err = new Sk.builtin.ExternalError(err);
/* 10781 */                 }
/* 10782 */                 err.traceback.push({
/* 10783 */                     lineno: $currLineNo,
/* 10784 */                     colno: $currColNo,
/* 10785 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10786 */                 });
/* 10787 */                 if ($exc.length > 0) {
/* 10788 */                     $err = err;
/* 10789 */                     $blk = $exc.pop();
/* 10790 */                     continue;
/* 10791 */                 } else {
/* 10792 */                     throw err;
/* 10793 */                 }
/* 10794 */             }
/* 10795 */         }
/* 10796 */     });
/* 10797 */     var $scope508 = (function $fn509$(self, pkt, r) {
/* 10798 */         var dest, i, w; /* locals */
/* 10799 */         var dest, dest, dest, dest, i, i, pkt, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, w, w, w, w, w, w, w, w, $loadgbl510, $loadgbl511, $compareres514, $lattr517, $lattr519, $compareres520, $loadgbl521, $iter527, $loadgbl526, $iter527, $lattr529, $inplbinopattr530, $lattr531, $compareres532, $loadgbl535, $loadgbl535, $lattr536, $binop537, $binop538, $loadgbl535, $lattr536, $binop537, $binop538, $lattr539, $lattr540;
/* 10800 */         var $wakeFromSuspension = function() {
/* 10801 */             var susp = $scope508.$wakingSuspension;
/* 10802 */             delete $scope508.$wakingSuspension;
/* 10803 */             $blk = susp.$blk;
/* 10804 */             $loc = susp.$loc;
/* 10805 */             $gbl = susp.$gbl;
/* 10806 */             $exc = susp.$exc;
/* 10807 */             $err = susp.$err;
/* 10808 */             $postfinally = susp.$postfinally;
/* 10809 */             $currLineNo = susp.$lineno;
/* 10810 */             $currColNo = susp.$colno;
/* 10811 */             Sk.lastYield = Date.now();
/* 10812 */             dest = susp.$tmps.dest;
/* 10813 */             i = susp.$tmps.i;
/* 10814 */             pkt = susp.$tmps.pkt;
/* 10815 */             r = susp.$tmps.r;
/* 10816 */             self = susp.$tmps.self;
/* 10817 */             w = susp.$tmps.w;
/* 10818 */             $loadgbl510 = susp.$tmps.$loadgbl510;
/* 10819 */             $loadgbl511 = susp.$tmps.$loadgbl511;
/* 10820 */             $compareres514 = susp.$tmps.$compareres514;
/* 10821 */             $lattr517 = susp.$tmps.$lattr517;
/* 10822 */             $lattr519 = susp.$tmps.$lattr519;
/* 10823 */             $compareres520 = susp.$tmps.$compareres520;
/* 10824 */             $loadgbl521 = susp.$tmps.$loadgbl521;
/* 10825 */             $iter527 = susp.$tmps.$iter527;
/* 10826 */             $loadgbl526 = susp.$tmps.$loadgbl526;
/* 10827 */             $lattr529 = susp.$tmps.$lattr529;
/* 10828 */             $inplbinopattr530 = susp.$tmps.$inplbinopattr530;
/* 10829 */             $lattr531 = susp.$tmps.$lattr531;
/* 10830 */             $compareres532 = susp.$tmps.$compareres532;
/* 10831 */             $loadgbl535 = susp.$tmps.$loadgbl535;
/* 10832 */             $lattr536 = susp.$tmps.$lattr536;
/* 10833 */             $binop537 = susp.$tmps.$binop537;
/* 10834 */             $binop538 = susp.$tmps.$binop538;
/* 10835 */             $lattr539 = susp.$tmps.$lattr539;
/* 10836 */             $lattr540 = susp.$tmps.$lattr540;
/* 10837 */             try {
/* 10838 */                 $ret = susp.child.resume();
/* 10839 */             } catch (err) {
/* 10840 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10841 */                     err = new Sk.builtin.ExternalError(err);
/* 10842 */                 }
/* 10843 */                 err.traceback.push({
/* 10844 */                     lineno: $currLineNo,
/* 10845 */                     colno: $currColNo,
/* 10846 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10847 */                 });
/* 10848 */                 if ($exc.length > 0) {
/* 10849 */                     $err = err;
/* 10850 */                     $blk = $exc.pop();
/* 10851 */                 } else {
/* 10852 */                     throw err;
/* 10853 */                 }
/* 10854 */             }
/* 10855 */         };
/* 10856 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10857 */             var susp = new Sk.misceval.Suspension();
/* 10858 */             susp.child = $child;
/* 10859 */             susp.resume = function() {
/* 10860 */                 $scope508.$wakingSuspension = susp;
/* 10861 */                 return $scope508();
/* 10862 */             };
/* 10863 */             susp.data = susp.child.data;
/* 10864 */             susp.$blk = $blk;
/* 10865 */             susp.$loc = $loc;
/* 10866 */             susp.$gbl = $gbl;
/* 10867 */             susp.$exc = $exc;
/* 10868 */             susp.$err = $err;
/* 10869 */             susp.$postfinally = $postfinally;
/* 10870 */             susp.$filename = $filename;
/* 10871 */             susp.$lineno = $lineno;
/* 10872 */             susp.$colno = $colno;
/* 10873 */             susp.optional = susp.child.optional;
/* 10874 */             susp.$tmps = {
/* 10875 */                 "dest": dest,
/* 10876 */                 "i": i,
/* 10877 */                 "pkt": pkt,
/* 10878 */                 "r": r,
/* 10879 */                 "self": self,
/* 10880 */                 "w": w,
/* 10881 */                 "$loadgbl510": $loadgbl510,
/* 10882 */                 "$loadgbl511": $loadgbl511,
/* 10883 */                 "$compareres514": $compareres514,
/* 10884 */                 "$lattr517": $lattr517,
/* 10885 */                 "$lattr519": $lattr519,
/* 10886 */                 "$compareres520": $compareres520,
/* 10887 */                 "$loadgbl521": $loadgbl521,
/* 10888 */                 "$iter527": $iter527,
/* 10889 */                 "$loadgbl526": $loadgbl526,
/* 10890 */                 "$lattr529": $lattr529,
/* 10891 */                 "$inplbinopattr530": $inplbinopattr530,
/* 10892 */                 "$lattr531": $lattr531,
/* 10893 */                 "$compareres532": $compareres532,
/* 10894 */                 "$loadgbl535": $loadgbl535,
/* 10895 */                 "$lattr536": $lattr536,
/* 10896 */                 "$binop537": $binop537,
/* 10897 */                 "$binop538": $binop538,
/* 10898 */                 "$lattr539": $lattr539,
/* 10899 */                 "$lattr540": $lattr540
/* 10900 */             };
/* 10901 */             return susp;
/* 10902 */         };
/* 10903 */         var $blk = 0,
/* 10904 */             $exc = [],
/* 10905 */             $loc = {},
/* 10906 */             $gbl = this,
/* 10907 */             $err = undefined,
/* 10908 */             $ret = undefined,
/* 10909 */             $postfinally = undefined,
/* 10910 */             $currLineNo = undefined,
/* 10911 */             $currColNo = undefined;
/* 10912 */         if (typeof Sk.execStart === 'undefined') {
/* 10913 */             Sk.execStart = Date.now()
/* 10914 */         }
/* 10915 */         if (typeof Sk.lastYield === 'undefined') {
/* 10916 */             Sk.lastYield = Date.now()
/* 10917 */         }
/* 10918 */         if ($scope508.$wakingSuspension !== undefined) {
/* 10919 */             $wakeFromSuspension();
/* 10920 */         } else {
/* 10921 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/* 10922 */         }
/* 10923 */         while (true) {
/* 10924 */             try {
/* 10925 */                 var $dateNow = Date.now();
/* 10926 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 10927 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 10928 */                 }
/* 10929 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 10930 */                     var $susp = $saveSuspension({
/* 10931 */                         data: {
/* 10932 */                             type: 'Sk.yield'
/* 10933 */                         },
/* 10934 */                         resume: function() {}
/* 10935 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 10936 */                     $susp.$blk = $blk;
/* 10937 */                     $susp.optional = true;
/* 10938 */                     return $susp;
/* 10939 */                 }
/* 10940 */                 switch ($blk) {
/* 10941 */                 case 0:
/* 10942 */                     /* --- codeobj entry --- */
/* 10943 */                     if (self === undefined) {
/* 10944 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10945 */                     }
/* 10946 */                     if (pkt === undefined) {
/* 10947 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10948 */                     }
/* 10949 */                     if (r === undefined) {
/* 10950 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10951 */                     }
/* 10952 */ 
/* 10953 */                     //
/* 10954 */                     // line 322:
/* 10955 */                     //         w = r
/* 10956 */                     //         ^
/* 10957 */                     //
/* 10958 */                     $currLineNo = 322;
/* 10959 */                     $currColNo = 8;
/* 10960 */ 
/* 10961 */                     if (r === undefined) {
/* 10962 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10963 */                     }
/* 10964 */                     w = r;
/* 10965 */                     //
/* 10966 */                     // line 323:
/* 10967 */                     //         assert isinstance(w, WorkerTaskRec)
/* 10968 */                     //         ^
/* 10969 */                     //
/* 10970 */                     $currLineNo = 323;
/* 10971 */                     $currColNo = 8;
/* 10972 */ 
/* 10973 */                     var $loadgbl510 = Sk.misceval.loadname('isinstance', $gbl);
/* 10974 */                     if (w === undefined) {
/* 10975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10976 */                     }
/* 10977 */                     var $loadgbl511 = Sk.misceval.loadname('WorkerTaskRec', $gbl);
/* 10978 */                     $ret;
/* 10979 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl510, w, $loadgbl511);
/* 10980 */                     $blk = 1; /* allowing case fallthrough */
/* 10981 */                 case 1:
/* 10982 */                     /* --- function return or resume suspension --- */
/* 10983 */                     if ($ret && $ret.$isSuspension) {
/* 10984 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 323, 15);
/* 10985 */                     }
/* 10986 */                     var $call512 = $ret;
/* 10987 */                     //
/* 10988 */                     // line 323:
/* 10989 */                     //         assert isinstance(w, WorkerTaskRec)
/* 10990 */                     //                ^
/* 10991 */                     //
/* 10992 */                     $currLineNo = 323;
/* 10993 */                     $currColNo = 15;
/* 10994 */ 
/* 10995 */                     var $jtrue513 = ($call512 === true || Sk.misceval.isTrue($call512));
/* 10996 */                     if ($jtrue513) { /*test passed */
/* 10997 */                         $blk = 2;
/* 10998 */                         continue;
/* 10999 */                     }
/* 11000 */                     throw new Sk.builtin.AssertionError();
/* 11001 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11002 */                 case 2:
/* 11003 */                     /* --- end --- */
/* 11004 */                     //
/* 11005 */                     // line 324:
/* 11006 */                     //         if pkt is None:
/* 11007 */                     //         ^
/* 11008 */                     //
/* 11009 */                     $currLineNo = 324;
/* 11010 */                     $currColNo = 8;
/* 11011 */ 
/* 11012 */                     if (pkt === undefined) {
/* 11013 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 11014 */                     }
/* 11015 */                     var $compareres514 = null;
/* 11016 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/* 11017 */                     $blk = 5; /* allowing case fallthrough */
/* 11018 */                 case 5:
/* 11019 */                     /* --- function return or resume suspension --- */
/* 11020 */                     if ($ret && $ret.$isSuspension) {
/* 11021 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 324, 11);
/* 11022 */                     }
/* 11023 */                     $compareres514 = $ret;
/* 11024 */                     var $jfalse515 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11025 */                     if ($jfalse515) { /*test failed */
/* 11026 */                         $blk = 4;
/* 11027 */                         continue;
/* 11028 */                     }
/* 11029 */                     $blk = 4; /* allowing case fallthrough */
/* 11030 */                 case 4:
/* 11031 */                     /* --- done --- */
/* 11032 */                     var $jfalse516 = ($compareres514 === false || !Sk.misceval.isTrue($compareres514));
/* 11033 */                     if ($jfalse516) { /*test failed */
/* 11034 */                         $blk = 3;
/* 11035 */                         continue;
/* 11036 */                     }
/* 11037 */                     //
/* 11038 */                     // line 325:
/* 11039 */                     //             return self.waitTask()
/* 11040 */                     //             ^
/* 11041 */                     //
/* 11042 */                     $currLineNo = 325;
/* 11043 */                     $currColNo = 12;
/* 11044 */ 
/* 11045 */                     if (self === undefined) {
/* 11046 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11047 */                     }
/* 11048 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/* 11049 */                     $blk = 6; /* allowing case fallthrough */
/* 11050 */                 case 6:
/* 11051 */                     /* --- function return or resume suspension --- */
/* 11052 */                     if ($ret && $ret.$isSuspension) {
/* 11053 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 325, 19);
/* 11054 */                     }
/* 11055 */                     var $lattr517 = $ret;
/* 11056 */                     $ret;
/* 11057 */                     $ret = Sk.misceval.callsimOrSuspend($lattr517);
/* 11058 */                     $blk = 7; /* allowing case fallthrough */
/* 11059 */                 case 7:
/* 11060 */                     /* --- function return or resume suspension --- */
/* 11061 */                     if ($ret && $ret.$isSuspension) {
/* 11062 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 325, 19);
/* 11063 */                     }
/* 11064 */                     var $call518 = $ret;
/* 11065 */                     //
/* 11066 */                     // line 325:
/* 11067 */                     //             return self.waitTask()
/* 11068 */                     //                    ^
/* 11069 */                     //
/* 11070 */                     $currLineNo = 325;
/* 11071 */                     $currColNo = 19;
/* 11072 */ 
/* 11073 */                     return $call518;
/* 11074 */                     $blk = 3; /* allowing case fallthrough */
/* 11075 */                 case 3:
/* 11076 */                     /* --- end of if --- */
/* 11077 */                     //
/* 11078 */                     // line 327:
/* 11079 */                     //         if w.destination == I_HANDLERA:
/* 11080 */                     //         ^
/* 11081 */                     //
/* 11082 */                     $currLineNo = 327;
/* 11083 */                     $currColNo = 8;
/* 11084 */ 
/* 11085 */                     if (w === undefined) {
/* 11086 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11087 */                     }
/* 11088 */                     $ret = Sk.abstr.gattr(w, 'destination', true);
/* 11089 */                     $blk = 10; /* allowing case fallthrough */
/* 11090 */                 case 10:
/* 11091 */                     /* --- function return or resume suspension --- */
/* 11092 */                     if ($ret && $ret.$isSuspension) {
/* 11093 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 327, 11);
/* 11094 */                     }
/* 11095 */                     var $lattr519 = $ret;
/* 11096 */                     var $compareres520 = null;
/* 11097 */                     var $loadgbl521 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 11098 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr519, $loadgbl521, 'Eq', true));
/* 11099 */                     $blk = 12; /* allowing case fallthrough */
/* 11100 */                 case 12:
/* 11101 */                     /* --- function return or resume suspension --- */
/* 11102 */                     if ($ret && $ret.$isSuspension) {
/* 11103 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 327, 11);
/* 11104 */                     }
/* 11105 */                     $compareres520 = $ret;
/* 11106 */                     var $jfalse522 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11107 */                     if ($jfalse522) { /*test failed */
/* 11108 */                         $blk = 11;
/* 11109 */                         continue;
/* 11110 */                     }
/* 11111 */                     $blk = 11; /* allowing case fallthrough */
/* 11112 */                 case 11:
/* 11113 */                     /* --- done --- */
/* 11114 */                     var $jfalse523 = ($compareres520 === false || !Sk.misceval.isTrue($compareres520));
/* 11115 */                     if ($jfalse523) { /*test failed */
/* 11116 */                         $blk = 9;
/* 11117 */                         continue;
/* 11118 */                     }
/* 11119 */                     //
/* 11120 */                     // line 328:
/* 11121 */                     //             dest = I_HANDLERB
/* 11122 */                     //             ^
/* 11123 */                     //
/* 11124 */                     $currLineNo = 328;
/* 11125 */                     $currColNo = 12;
/* 11126 */ 
/* 11127 */                     var $loadgbl524 = Sk.misceval.loadname('I_HANDLERB', $gbl);
/* 11128 */                     dest = $loadgbl524;
/* 11129 */                     $blk = 8; /* allowing case fallthrough */
/* 11130 */                 case 8:
/* 11131 */                     /* --- end of if --- */
/* 11132 */                     //
/* 11133 */                     // line 332:
/* 11134 */                     //         w.destination = dest
/* 11135 */                     //         ^
/* 11136 */                     //
/* 11137 */                     $currLineNo = 332;
/* 11138 */                     $currColNo = 8;
/* 11139 */ 
/* 11140 */                     if (dest === undefined) {
/* 11141 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dest\' referenced before assignment');
/* 11142 */                     }
/* 11143 */                     if (w === undefined) {
/* 11144 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11145 */                     }
/* 11146 */                     $ret = Sk.abstr.sattr(w, 'destination', dest, true);
/* 11147 */                     $blk = 13; /* allowing case fallthrough */
/* 11148 */                 case 13:
/* 11149 */                     /* --- function return or resume suspension --- */
/* 11150 */                     if ($ret && $ret.$isSuspension) {
/* 11151 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 332, 8);
/* 11152 */                     }
/* 11153 */                     //
/* 11154 */                     // line 333:
/* 11155 */                     //         pkt.ident = dest
/* 11156 */                     //         ^
/* 11157 */                     //
/* 11158 */                     $currLineNo = 333;
/* 11159 */                     $currColNo = 8;
/* 11160 */ 
/* 11161 */                     if (dest === undefined) {
/* 11162 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dest\' referenced before assignment');
/* 11163 */                     }
/* 11164 */                     if (pkt === undefined) {
/* 11165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 11166 */                     }
/* 11167 */                     $ret = Sk.abstr.sattr(pkt, 'ident', dest, true);
/* 11168 */                     $blk = 14; /* allowing case fallthrough */
/* 11169 */                 case 14:
/* 11170 */                     /* --- function return or resume suspension --- */
/* 11171 */                     if ($ret && $ret.$isSuspension) {
/* 11172 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 333, 8);
/* 11173 */                     }
/* 11174 */                     //
/* 11175 */                     // line 334:
/* 11176 */                     //         pkt.datum = 0
/* 11177 */                     //         ^
/* 11178 */                     //
/* 11179 */                     $currLineNo = 334;
/* 11180 */                     $currColNo = 8;
/* 11181 */ 
/* 11182 */                     if (pkt === undefined) {
/* 11183 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 11184 */                     }
/* 11185 */                     $ret = Sk.abstr.sattr(pkt, 'datum', new Sk.builtin.int_(0), true);
/* 11186 */                     $blk = 15; /* allowing case fallthrough */
/* 11187 */                 case 15:
/* 11188 */                     /* --- function return or resume suspension --- */
/* 11189 */                     if ($ret && $ret.$isSuspension) {
/* 11190 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 334, 8);
/* 11191 */                     }
/* 11192 */                     //
/* 11193 */                     // line 336:
/* 11194 */                     //         for i in BUFSIZE_RANGE: # xrange(BUFSIZE)
/* 11195 */                     //         ^
/* 11196 */                     //
/* 11197 */                     $currLineNo = 336;
/* 11198 */                     $currColNo = 8;
/* 11199 */ 
/* 11200 */                     var $loadgbl526 = Sk.misceval.loadname('BUFSIZE_RANGE', $gbl);
/* 11201 */                     var $iter527 = Sk.abstr.iter($loadgbl526);
/* 11202 */                     $blk = 16; /* allowing case fallthrough */
/* 11203 */                 case 16:
/* 11204 */                     /* --- for start --- */
/* 11205 */                     $ret = Sk.abstr.iternext($iter527, true);
/* 11206 */                     $blk = 19; /* allowing case fallthrough */
/* 11207 */                 case 19:
/* 11208 */                     /* --- function return or resume suspension --- */
/* 11209 */                     if ($ret && $ret.$isSuspension) {
/* 11210 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 336, 8);
/* 11211 */                     }
/* 11212 */                     var $next528 = $ret;
/* 11213 */                     if ($next528 === undefined) {
/* 11214 */                         $blk = 17;
/* 11215 */                         continue;
/* 11216 */                     }
/* 11217 */                     i = $next528;
/* 11218 */                     //
/* 11219 */                     // line 337:
/* 11220 */                     //             w.count += 1
/* 11221 */                     //             ^
/* 11222 */                     //
/* 11223 */                     $currLineNo = 337;
/* 11224 */                     $currColNo = 12;
/* 11225 */ 
/* 11226 */                     if (w === undefined) {
/* 11227 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11228 */                     }
/* 11229 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 11230 */                     $blk = 20; /* allowing case fallthrough */
/* 11231 */                 case 20:
/* 11232 */                     /* --- function return or resume suspension --- */
/* 11233 */                     if ($ret && $ret.$isSuspension) {
/* 11234 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 337, 12);
/* 11235 */                     }
/* 11236 */                     var $lattr529 = $ret;
/* 11237 */                     var $inplbinopattr530 = Sk.abstr.numberInplaceBinOp($lattr529, new Sk.builtin.int_(1), 'Add');
/* 11238 */                     $ret = undefined;
/* 11239 */                     if ($inplbinopattr530 !== undefined) {
/* 11240 */                         $ret = Sk.abstr.sattr(w, 'count', $inplbinopattr530, true);
/* 11241 */                     }
/* 11242 */                     $blk = 21; /* allowing case fallthrough */
/* 11243 */                 case 21:
/* 11244 */                     /* --- function return or resume suspension --- */
/* 11245 */                     if ($ret && $ret.$isSuspension) {
/* 11246 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 337, 12);
/* 11247 */                     }
/* 11248 */                     //
/* 11249 */                     // line 338:
/* 11250 */                     //             if w.count > 26:
/* 11251 */                     //             ^
/* 11252 */                     //
/* 11253 */                     $currLineNo = 338;
/* 11254 */                     $currColNo = 12;
/* 11255 */ 
/* 11256 */                     if (w === undefined) {
/* 11257 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11258 */                     }
/* 11259 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 11260 */                     $blk = 23; /* allowing case fallthrough */
/* 11261 */                 case 23:
/* 11262 */                     /* --- function return or resume suspension --- */
/* 11263 */                     if ($ret && $ret.$isSuspension) {
/* 11264 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 338, 15);
/* 11265 */                     }
/* 11266 */                     var $lattr531 = $ret;
/* 11267 */                     var $compareres532 = null;
/* 11268 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr531, new Sk.builtin.int_(26), 'Gt', true));
/* 11269 */                     $blk = 25; /* allowing case fallthrough */
/* 11270 */                 case 25:
/* 11271 */                     /* --- function return or resume suspension --- */
/* 11272 */                     if ($ret && $ret.$isSuspension) {
/* 11273 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 338, 15);
/* 11274 */                     }
/* 11275 */                     $compareres532 = $ret;
/* 11276 */                     var $jfalse533 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11277 */                     if ($jfalse533) { /*test failed */
/* 11278 */                         $blk = 24;
/* 11279 */                         continue;
/* 11280 */                     }
/* 11281 */                     $blk = 24; /* allowing case fallthrough */
/* 11282 */                 case 24:
/* 11283 */                     /* --- done --- */
/* 11284 */                     var $jfalse534 = ($compareres532 === false || !Sk.misceval.isTrue($compareres532));
/* 11285 */                     if ($jfalse534) { /*test failed */
/* 11286 */                         $blk = 22;
/* 11287 */                         continue;
/* 11288 */                     }
/* 11289 */                     //
/* 11290 */                     // line 339:
/* 11291 */                     //                 w.count = 1
/* 11292 */                     //                 ^
/* 11293 */                     //
/* 11294 */                     $currLineNo = 339;
/* 11295 */                     $currColNo = 16;
/* 11296 */ 
/* 11297 */                     if (w === undefined) {
/* 11298 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11299 */                     }
/* 11300 */                     $ret = Sk.abstr.sattr(w, 'count', new Sk.builtin.int_(1), true);
/* 11301 */                     $blk = 26; /* allowing case fallthrough */
/* 11302 */                 case 26:
/* 11303 */                     /* --- function return or resume suspension --- */
/* 11304 */                     if ($ret && $ret.$isSuspension) {
/* 11305 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 339, 16);
/* 11306 */                     }
/* 11307 */                     $blk = 22; /* allowing case fallthrough */
/* 11308 */                 case 22:
/* 11309 */                     /* --- end of if --- */
/* 11310 */                     //
/* 11311 */                     // line 340:
/* 11312 */                     //             pkt.data[i] = A + w.count - 1
/* 11313 */                     //             ^
/* 11314 */                     //
/* 11315 */                     $currLineNo = 340;
/* 11316 */                     $currColNo = 12;
/* 11317 */ 
/* 11318 */                     var $loadgbl535 = Sk.misceval.loadname('A', $gbl);
/* 11319 */                     if (w === undefined) {
/* 11320 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 11321 */                     }
/* 11322 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 11323 */                     $blk = 27; /* allowing case fallthrough */
/* 11324 */                 case 27:
/* 11325 */                     /* --- function return or resume suspension --- */
/* 11326 */                     if ($ret && $ret.$isSuspension) {
/* 11327 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 340, 30);
/* 11328 */                     }
/* 11329 */                     var $lattr536 = $ret;
/* 11330 */                     var $binop537 = Sk.abstr.numberBinOp($loadgbl535, $lattr536, 'Add');
/* 11331 */                     var $binop538 = Sk.abstr.numberBinOp($binop537, new Sk.builtin.int_(1), 'Sub');
/* 11332 */                     if (pkt === undefined) {
/* 11333 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 11334 */                     }
/* 11335 */                     $ret = Sk.abstr.gattr(pkt, 'data', true);
/* 11336 */                     $blk = 28; /* allowing case fallthrough */
/* 11337 */                 case 28:
/* 11338 */                     /* --- function return or resume suspension --- */
/* 11339 */                     if ($ret && $ret.$isSuspension) {
/* 11340 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 340, 12);
/* 11341 */                     }
/* 11342 */                     var $lattr539 = $ret;
/* 11343 */                     if (i === undefined) {
/* 11344 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 11345 */                     }
/* 11346 */                     $ret = Sk.abstr.objectSetItem($lattr539, i, $binop538, true);
/* 11347 */                     $blk = 29; /* allowing case fallthrough */
/* 11348 */                 case 29:
/* 11349 */                     /* --- function return or resume suspension --- */
/* 11350 */                     if ($ret && $ret.$isSuspension) {
/* 11351 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 11352 */                     }
/* 11353 */                     $blk = 16; /* jump */
/* 11354 */                     continue;
/* 11355 */                 case 9:
/* 11356 */                     /* --- next branch of if --- */
/* 11357 */                     //
/* 11358 */                     // line 330:
/* 11359 */                     //             dest = I_HANDLERA
/* 11360 */                     //             ^
/* 11361 */                     //
/* 11362 */                     $currLineNo = 330;
/* 11363 */                     $currColNo = 12;
/* 11364 */ 
/* 11365 */                     var $loadgbl525 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 11366 */                     dest = $loadgbl525;
/* 11367 */                     $blk = 8; /* jump */
/* 11368 */                     continue;
/* 11369 */                 case 17:
/* 11370 */                     /* --- for cleanup --- */
/* 11371 */                     $blk = 18; /* allowing case fallthrough */
/* 11372 */                 case 18:
/* 11373 */                     /* --- for end --- */
/* 11374 */                     //
/* 11375 */                     // line 342:
/* 11376 */                     //         return self.qpkt(pkt)
/* 11377 */                     //         ^
/* 11378 */                     //
/* 11379 */                     $currLineNo = 342;
/* 11380 */                     $currColNo = 8;
/* 11381 */ 
/* 11382 */                     if (self === undefined) {
/* 11383 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11384 */                     }
/* 11385 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/* 11386 */                     $blk = 30; /* allowing case fallthrough */
/* 11387 */                 case 30:
/* 11388 */                     /* --- function return or resume suspension --- */
/* 11389 */                     if ($ret && $ret.$isSuspension) {
/* 11390 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 342, 15);
/* 11391 */                     }
/* 11392 */                     var $lattr540 = $ret;
/* 11393 */                     if (pkt === undefined) {
/* 11394 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 11395 */                     }
/* 11396 */                     $ret;
/* 11397 */                     $ret = Sk.misceval.callsimOrSuspend($lattr540, pkt);
/* 11398 */                     $blk = 31; /* allowing case fallthrough */
/* 11399 */                 case 31:
/* 11400 */                     /* --- function return or resume suspension --- */
/* 11401 */                     if ($ret && $ret.$isSuspension) {
/* 11402 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 342, 15);
/* 11403 */                     }
/* 11404 */                     var $call541 = $ret;
/* 11405 */                     //
/* 11406 */                     // line 342:
/* 11407 */                     //         return self.qpkt(pkt)
/* 11408 */                     //                ^
/* 11409 */                     //
/* 11410 */                     $currLineNo = 342;
/* 11411 */                     $currColNo = 15;
/* 11412 */ 
/* 11413 */                     return $call541;
/* 11414 */                     return Sk.builtin.none.none$;
/* 11415 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11416 */                 }
/* 11417 */             } catch (err) {
/* 11418 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11419 */                     err = new Sk.builtin.ExternalError(err);
/* 11420 */                 }
/* 11421 */                 err.traceback.push({
/* 11422 */                     lineno: $currLineNo,
/* 11423 */                     colno: $currColNo,
/* 11424 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 11425 */                 });
/* 11426 */                 if ($exc.length > 0) {
/* 11427 */                     $err = err;
/* 11428 */                     $blk = $exc.pop();
/* 11429 */                     continue;
/* 11430 */                 } else {
/* 11431 */                     throw err;
/* 11432 */                 }
/* 11433 */             }
/* 11434 */         }
/* 11435 */     });
/* 11436 */     var $scope545 = (function $schedule546$() {
/* 11437 */         var pkt, t; /* locals */
/* 11438 */         var pkt, t, t, t, t, t, t, t, t, $loadgbl547, $compareres549, $lattr554, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $lattr565, $binop566, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $lattr565, $binop566, $call567, $lattr569;
/* 11439 */         var $wakeFromSuspension = function() {
/* 11440 */             var susp = $scope545.$wakingSuspension;
/* 11441 */             delete $scope545.$wakingSuspension;
/* 11442 */             $blk = susp.$blk;
/* 11443 */             $loc = susp.$loc;
/* 11444 */             $gbl = susp.$gbl;
/* 11445 */             $exc = susp.$exc;
/* 11446 */             $err = susp.$err;
/* 11447 */             $postfinally = susp.$postfinally;
/* 11448 */             $currLineNo = susp.$lineno;
/* 11449 */             $currColNo = susp.$colno;
/* 11450 */             Sk.lastYield = Date.now();
/* 11451 */             pkt = susp.$tmps.pkt;
/* 11452 */             t = susp.$tmps.t;
/* 11453 */             $loadgbl547 = susp.$tmps.$loadgbl547;
/* 11454 */             $compareres549 = susp.$tmps.$compareres549;
/* 11455 */             $lattr554 = susp.$tmps.$lattr554;
/* 11456 */             $loadgbl560 = susp.$tmps.$loadgbl560;
/* 11457 */             $loadgbl561 = susp.$tmps.$loadgbl561;
/* 11458 */             $loadgbl562 = susp.$tmps.$loadgbl562;
/* 11459 */             $str563 = susp.$tmps.$str563;
/* 11460 */             $call564 = susp.$tmps.$call564;
/* 11461 */             $lattr565 = susp.$tmps.$lattr565;
/* 11462 */             $binop566 = susp.$tmps.$binop566;
/* 11463 */             $call567 = susp.$tmps.$call567;
/* 11464 */             $lattr569 = susp.$tmps.$lattr569;
/* 11465 */             try {
/* 11466 */                 $ret = susp.child.resume();
/* 11467 */             } catch (err) {
/* 11468 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11469 */                     err = new Sk.builtin.ExternalError(err);
/* 11470 */                 }
/* 11471 */                 err.traceback.push({
/* 11472 */                     lineno: $currLineNo,
/* 11473 */                     colno: $currColNo,
/* 11474 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 11475 */                 });
/* 11476 */                 if ($exc.length > 0) {
/* 11477 */                     $err = err;
/* 11478 */                     $blk = $exc.pop();
/* 11479 */                 } else {
/* 11480 */                     throw err;
/* 11481 */                 }
/* 11482 */             }
/* 11483 */         };
/* 11484 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11485 */             var susp = new Sk.misceval.Suspension();
/* 11486 */             susp.child = $child;
/* 11487 */             susp.resume = function() {
/* 11488 */                 $scope545.$wakingSuspension = susp;
/* 11489 */                 return $scope545();
/* 11490 */             };
/* 11491 */             susp.data = susp.child.data;
/* 11492 */             susp.$blk = $blk;
/* 11493 */             susp.$loc = $loc;
/* 11494 */             susp.$gbl = $gbl;
/* 11495 */             susp.$exc = $exc;
/* 11496 */             susp.$err = $err;
/* 11497 */             susp.$postfinally = $postfinally;
/* 11498 */             susp.$filename = $filename;
/* 11499 */             susp.$lineno = $lineno;
/* 11500 */             susp.$colno = $colno;
/* 11501 */             susp.optional = susp.child.optional;
/* 11502 */             susp.$tmps = {
/* 11503 */                 "pkt": pkt,
/* 11504 */                 "t": t,
/* 11505 */                 "$loadgbl547": $loadgbl547,
/* 11506 */                 "$compareres549": $compareres549,
/* 11507 */                 "$lattr554": $lattr554,
/* 11508 */                 "$loadgbl560": $loadgbl560,
/* 11509 */                 "$loadgbl561": $loadgbl561,
/* 11510 */                 "$loadgbl562": $loadgbl562,
/* 11511 */                 "$str563": $str563,
/* 11512 */                 "$call564": $call564,
/* 11513 */                 "$lattr565": $lattr565,
/* 11514 */                 "$binop566": $binop566,
/* 11515 */                 "$call567": $call567,
/* 11516 */                 "$lattr569": $lattr569
/* 11517 */             };
/* 11518 */             return susp;
/* 11519 */         };
/* 11520 */         var $blk = 0,
/* 11521 */             $exc = [],
/* 11522 */             $loc = {},
/* 11523 */             $gbl = this,
/* 11524 */             $err = undefined,
/* 11525 */             $ret = undefined,
/* 11526 */             $postfinally = undefined,
/* 11527 */             $currLineNo = undefined,
/* 11528 */             $currColNo = undefined;
/* 11529 */         if (typeof Sk.execStart === 'undefined') {
/* 11530 */             Sk.execStart = Date.now()
/* 11531 */         }
/* 11532 */         if (typeof Sk.lastYield === 'undefined') {
/* 11533 */             Sk.lastYield = Date.now()
/* 11534 */         }
/* 11535 */         if ($scope545.$wakingSuspension !== undefined) {
/* 11536 */             $wakeFromSuspension();
/* 11537 */         } else {
/* 11538 */             Sk.builtin.pyCheckArgs("schedule", arguments, 0, 0, false, false);
/* 11539 */         }
/* 11540 */         while (true) {
/* 11541 */             try {
/* 11542 */                 var $dateNow = Date.now();
/* 11543 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 11544 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 11545 */                 }
/* 11546 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 11547 */                     var $susp = $saveSuspension({
/* 11548 */                         data: {
/* 11549 */                             type: 'Sk.yield'
/* 11550 */                         },
/* 11551 */                         resume: function() {}
/* 11552 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 11553 */                     $susp.$blk = $blk;
/* 11554 */                     $susp.optional = true;
/* 11555 */                     return $susp;
/* 11556 */                 }
/* 11557 */                 switch ($blk) {
/* 11558 */                 case 0:
/* 11559 */                     /* --- codeobj entry --- */
/* 11560 */                     //
/* 11561 */                     // line 349:
/* 11562 */                     //     t = taskWorkArea.taskList
/* 11563 */                     //     ^
/* 11564 */                     //
/* 11565 */                     $currLineNo = 349;
/* 11566 */                     $currColNo = 4;
/* 11567 */ 
/* 11568 */                     var $loadgbl547 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 11569 */                     $ret = Sk.abstr.gattr($loadgbl547, 'taskList', true);
/* 11570 */                     $blk = 1; /* allowing case fallthrough */
/* 11571 */                 case 1:
/* 11572 */                     /* --- function return or resume suspension --- */
/* 11573 */                     if ($ret && $ret.$isSuspension) {
/* 11574 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 349, 8);
/* 11575 */                     }
/* 11576 */                     var $lattr548 = $ret;
/* 11577 */                     t = $lattr548;
/* 11578 */                     //
/* 11579 */                     // line 350:
/* 11580 */                     //     while t is not None:
/* 11581 */                     //     ^
/* 11582 */                     //
/* 11583 */                     $currLineNo = 350;
/* 11584 */                     $currColNo = 4;
/* 11585 */ 
/* 11586 */                     $blk = 2; /* allowing case fallthrough */
/* 11587 */                 case 2:
/* 11588 */                     /* --- while test --- */
/* 11589 */                     //
/* 11590 */                     // line 350:
/* 11591 */                     //     while t is not None:
/* 11592 */                     //     ^
/* 11593 */                     //
/* 11594 */                     $currLineNo = 350;
/* 11595 */                     $currColNo = 4;
/* 11596 */ 
/* 11597 */                     if (t === undefined) {
/* 11598 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 11599 */                     }
/* 11600 */                     var $compareres549 = null;
/* 11601 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, Sk.builtin.none.none$, 'IsNot', true));
/* 11602 */                     $blk = 6; /* allowing case fallthrough */
/* 11603 */                 case 6:
/* 11604 */                     /* --- function return or resume suspension --- */
/* 11605 */                     if ($ret && $ret.$isSuspension) {
/* 11606 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 350, 10);
/* 11607 */                     }
/* 11608 */                     $compareres549 = $ret;
/* 11609 */                     var $jfalse550 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11610 */                     if ($jfalse550) { /*test failed */
/* 11611 */                         $blk = 5;
/* 11612 */                         continue;
/* 11613 */                     }
/* 11614 */                     $blk = 5; /* allowing case fallthrough */
/* 11615 */                 case 5:
/* 11616 */                     /* --- done --- */
/* 11617 */                     var $jfalse551 = ($compareres549 === false || !Sk.misceval.isTrue($compareres549));
/* 11618 */                     if ($jfalse551) { /*test failed */
/* 11619 */                         $blk = 3;
/* 11620 */                         continue;
/* 11621 */                     }
/* 11622 */                     $blk = 4; /* allowing case fallthrough */
/* 11623 */                 case 4:
/* 11624 */                     /* --- while body --- */
/* 11625 */                     //
/* 11626 */                     // line 351:
/* 11627 */                     //         pkt = None
/* 11628 */                     //         ^
/* 11629 */                     //
/* 11630 */                     $currLineNo = 351;
/* 11631 */                     $currColNo = 8;
/* 11632 */ 
/* 11633 */                     pkt = Sk.builtin.none.none$;
/* 11634 */                     //
/* 11635 */                     // line 353:
/* 11636 */                     //         if tracing:
/* 11637 */                     //         ^
/* 11638 */                     //
/* 11639 */                     $currLineNo = 353;
/* 11640 */                     $currColNo = 8;
/* 11641 */ 
/* 11642 */                     var $loadgbl552 = Sk.misceval.loadname('tracing', $gbl);
/* 11643 */                     var $jfalse553 = ($loadgbl552 === false || !Sk.misceval.isTrue($loadgbl552));
/* 11644 */                     if ($jfalse553) { /*test failed */
/* 11645 */                         $blk = 7;
/* 11646 */                         continue;
/* 11647 */                     }
/* 11648 */                     //
/* 11649 */                     // line 354:
/* 11650 */                     //             pass #print("tcb =",t.ident)
/* 11651 */                     //             ^
/* 11652 */                     //
/* 11653 */                     $currLineNo = 354;
/* 11654 */                     $currColNo = 12;
/* 11655 */ 
/* 11656 */                     $blk = 7; /* allowing case fallthrough */
/* 11657 */                 case 7:
/* 11658 */                     /* --- end of if --- */
/* 11659 */                     //
/* 11660 */                     // line 356:
/* 11661 */                     //         if t.isTaskHoldingOrWaiting():
/* 11662 */                     //         ^
/* 11663 */                     //
/* 11664 */                     $currLineNo = 356;
/* 11665 */                     $currColNo = 8;
/* 11666 */ 
/* 11667 */                     if (t === undefined) {
/* 11668 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 11669 */                     }
/* 11670 */                     $ret = Sk.abstr.gattr(t, 'isTaskHoldingOrWaiting', true);
/* 11671 */                     $blk = 10; /* allowing case fallthrough */
/* 11672 */                 case 10:
/* 11673 */                     /* --- function return or resume suspension --- */
/* 11674 */                     if ($ret && $ret.$isSuspension) {
/* 11675 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 356, 11);
/* 11676 */                     }
/* 11677 */                     var $lattr554 = $ret;
/* 11678 */                     $ret;
/* 11679 */                     $ret = Sk.misceval.callsimOrSuspend($lattr554);
/* 11680 */                     $blk = 11; /* allowing case fallthrough */
/* 11681 */                 case 11:
/* 11682 */                     /* --- function return or resume suspension --- */
/* 11683 */                     if ($ret && $ret.$isSuspension) {
/* 11684 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 356, 11);
/* 11685 */                     }
/* 11686 */                     var $call555 = $ret;
/* 11687 */                     //
/* 11688 */                     // line 356:
/* 11689 */                     //         if t.isTaskHoldingOrWaiting():
/* 11690 */                     //            ^
/* 11691 */                     //
/* 11692 */                     $currLineNo = 356;
/* 11693 */                     $currColNo = 11;
/* 11694 */ 
/* 11695 */                     var $jfalse556 = ($call555 === false || !Sk.misceval.isTrue($call555));
/* 11696 */                     if ($jfalse556) { /*test failed */
/* 11697 */                         $blk = 9;
/* 11698 */                         continue;
/* 11699 */                     }
/* 11700 */                     //
/* 11701 */                     // line 357:
/* 11702 */                     //             t = t.link
/* 11703 */                     //             ^
/* 11704 */                     //
/* 11705 */                     $currLineNo = 357;
/* 11706 */                     $currColNo = 12;
/* 11707 */ 
/* 11708 */                     if (t === undefined) {
/* 11709 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 11710 */                     }
/* 11711 */                     $ret = Sk.abstr.gattr(t, 'link', true);
/* 11712 */                     $blk = 12; /* allowing case fallthrough */
/* 11713 */                 case 12:
/* 11714 */                     /* --- function return or resume suspension --- */
/* 11715 */                     if ($ret && $ret.$isSuspension) {
/* 11716 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 357, 16);
/* 11717 */                     }
/* 11718 */                     var $lattr557 = $ret;
/* 11719 */                     t = $lattr557;
/* 11720 */                     $blk = 8; /* allowing case fallthrough */
/* 11721 */                 case 8:
/* 11722 */                     /* --- end of if --- */
/* 11723 */                     $blk = 2; /* jump */
/* 11724 */                     continue;
/* 11725 */                 case 3:
/* 11726 */                     /* --- after while --- */
/* 11727 */                     return Sk.builtin.none.none$;
/* 11728 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11729 */                 case 9:
/* 11730 */                     /* --- next branch of if --- */
/* 11731 */                     //
/* 11732 */                     // line 359:
/* 11733 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 11734 */                     //             ^
/* 11735 */                     //
/* 11736 */                     $currLineNo = 359;
/* 11737 */                     $currColNo = 12;
/* 11738 */ 
/* 11739 */                     var $loadgbl558 = Sk.misceval.loadname('tracing', $gbl);
/* 11740 */                     var $jfalse559 = ($loadgbl558 === false || !Sk.misceval.isTrue($loadgbl558));
/* 11741 */                     if ($jfalse559) { /*test failed */
/* 11742 */                         $blk = 13;
/* 11743 */                         continue;
/* 11744 */                     }
/* 11745 */                     //
/* 11746 */                     // line 359:
/* 11747 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 11748 */                     //                         ^
/* 11749 */                     //
/* 11750 */                     $currLineNo = 359;
/* 11751 */                     $currColNo = 24;
/* 11752 */ 
/* 11753 */                     var $loadgbl560 = Sk.misceval.loadname('trace', $gbl);
/* 11754 */                     var $loadgbl561 = Sk.misceval.loadname('chr', $gbl);
/* 11755 */                     var $loadgbl562 = Sk.misceval.loadname('ord', $gbl);
/* 11756 */                     var $str563 = new Sk.builtins['str']('0');
/* 11757 */                     $ret;
/* 11758 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl562, $str563);
/* 11759 */                     $blk = 14; /* allowing case fallthrough */
/* 11760 */                 case 14:
/* 11761 */                     /* --- function return or resume suspension --- */
/* 11762 */                     if ($ret && $ret.$isSuspension) {
/* 11763 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 34);
/* 11764 */                     }
/* 11765 */                     var $call564 = $ret;
/* 11766 */                     //
/* 11767 */                     // line 359:
/* 11768 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 11769 */                     //                                   ^
/* 11770 */                     //
/* 11771 */                     $currLineNo = 359;
/* 11772 */                     $currColNo = 34;
/* 11773 */ 
/* 11774 */                     if (t === undefined) {
/* 11775 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 11776 */                     }
/* 11777 */                     $ret = Sk.abstr.gattr(t, 'ident', true);
/* 11778 */                     $blk = 15; /* allowing case fallthrough */
/* 11779 */                 case 15:
/* 11780 */                     /* --- function return or resume suspension --- */
/* 11781 */                     if ($ret && $ret.$isSuspension) {
/* 11782 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 43);
/* 11783 */                     }
/* 11784 */                     var $lattr565 = $ret;
/* 11785 */                     var $binop566 = Sk.abstr.numberBinOp($call564, $lattr565, 'Add');
/* 11786 */                     $ret;
/* 11787 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl561, $binop566);
/* 11788 */                     $blk = 16; /* allowing case fallthrough */
/* 11789 */                 case 16:
/* 11790 */                     /* --- function return or resume suspension --- */
/* 11791 */                     if ($ret && $ret.$isSuspension) {
/* 11792 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 30);
/* 11793 */                     }
/* 11794 */                     var $call567 = $ret;
/* 11795 */                     //
/* 11796 */                     // line 359:
/* 11797 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 11798 */                     //                               ^
/* 11799 */                     //
/* 11800 */                     $currLineNo = 359;
/* 11801 */                     $currColNo = 30;
/* 11802 */ 
/* 11803 */                     $ret;
/* 11804 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl560, $call567);
/* 11805 */                     $blk = 17; /* allowing case fallthrough */
/* 11806 */                 case 17:
/* 11807 */                     /* --- function return or resume suspension --- */
/* 11808 */                     if ($ret && $ret.$isSuspension) {
/* 11809 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 24);
/* 11810 */                     }
/* 11811 */                     var $call568 = $ret;
/* 11812 */                     //
/* 11813 */                     // line 359:
/* 11814 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 11815 */                     //                         ^
/* 11816 */                     //
/* 11817 */                     $currLineNo = 359;
/* 11818 */                     $currColNo = 24;
/* 11819 */ 
/* 11820 */                     $blk = 13; /* allowing case fallthrough */
/* 11821 */                 case 13:
/* 11822 */                     /* --- end of if --- */
/* 11823 */                     //
/* 11824 */                     // line 360:
/* 11825 */                     //             t = t.runTask()
/* 11826 */                     //             ^
/* 11827 */                     //
/* 11828 */                     $currLineNo = 360;
/* 11829 */                     $currColNo = 12;
/* 11830 */ 
/* 11831 */                     if (t === undefined) {
/* 11832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 11833 */                     }
/* 11834 */                     $ret = Sk.abstr.gattr(t, 'runTask', true);
/* 11835 */                     $blk = 18; /* allowing case fallthrough */
/* 11836 */                 case 18:
/* 11837 */                     /* --- function return or resume suspension --- */
/* 11838 */                     if ($ret && $ret.$isSuspension) {
/* 11839 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 360, 16);
/* 11840 */                     }
/* 11841 */                     var $lattr569 = $ret;
/* 11842 */                     $ret;
/* 11843 */                     $ret = Sk.misceval.callsimOrSuspend($lattr569);
/* 11844 */                     $blk = 19; /* allowing case fallthrough */
/* 11845 */                 case 19:
/* 11846 */                     /* --- function return or resume suspension --- */
/* 11847 */                     if ($ret && $ret.$isSuspension) {
/* 11848 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 360, 16);
/* 11849 */                     }
/* 11850 */                     var $call570 = $ret;
/* 11851 */                     //
/* 11852 */                     // line 360:
/* 11853 */                     //             t = t.runTask()
/* 11854 */                     //                 ^
/* 11855 */                     //
/* 11856 */                     $currLineNo = 360;
/* 11857 */                     $currColNo = 16;
/* 11858 */ 
/* 11859 */                     t = $call570;
/* 11860 */                     $blk = 8; /* jump */
/* 11861 */                     continue;
/* 11862 */                 }
/* 11863 */             } catch (err) {
/* 11864 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11865 */                     err = new Sk.builtin.ExternalError(err);
/* 11866 */                 }
/* 11867 */                 err.traceback.push({
/* 11868 */                     lineno: $currLineNo,
/* 11869 */                     colno: $currColNo,
/* 11870 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 11871 */                 });
/* 11872 */                 if ($exc.length > 0) {
/* 11873 */                     $err = err;
/* 11874 */                     $blk = $exc.pop();
/* 11875 */                     continue;
/* 11876 */                 } else {
/* 11877 */                     throw err;
/* 11878 */                 }
/* 11879 */             }
/* 11880 */         }
/* 11881 */     });
/* 11882 */     var $scope573 = (function $Richards$class_outer($globals, $locals, $rest) {
/* 11883 */         var $gbl = $globals,
/* 11884 */             $loc = $locals;
/* 11885 */         (function $Richards$_closure() {
/* 11886 */             var $blk = 0,
/* 11887 */                 $exc = [],
/* 11888 */                 $ret = undefined,
/* 11889 */                 $postfinally = undefined,
/* 11890 */                 $currLineNo = undefined,
/* 11891 */                 $currColNo = undefined;
/* 11892 */             if (typeof Sk.execStart === 'undefined') {
/* 11893 */                 Sk.execStart = Date.now()
/* 11894 */             }
/* 11895 */             while (true) {
/* 11896 */                 try {
/* 11897 */                     var $dateNow = Date.now();
/* 11898 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 11899 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 11900 */                     }
/* 11901 */                     switch ($blk) {
/* 11902 */                     case 0:
/* 11903 */                         /* --- class entry --- */
/* 11904 */                         //
/* 11905 */                         // line 364:
/* 11906 */                         //     def run(self, iterations):
/* 11907 */                         //     ^
/* 11908 */                         //
/* 11909 */                         $currLineNo = 364;
/* 11910 */                         $currColNo = 4;
/* 11911 */ 
/* 11912 */                         $scope574.co_name = new Sk.builtins['str']('run');
/* 11913 */                         $scope574.co_varnames = ['self', 'iterations'];
/* 11914 */                         var $funcobj680 = new Sk.builtins['function']($scope574, $gbl);
/* 11915 */                         $loc.run = $funcobj680;
/* 11916 */                         return;
/* 11917 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11918 */                     }
/* 11919 */                 } catch (err) {
/* 11920 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/* 11921 */                         err = new Sk.builtin.ExternalError(err);
/* 11922 */                     }
/* 11923 */                     err.traceback.push({
/* 11924 */                         lineno: $currLineNo,
/* 11925 */                         colno: $currColNo,
/* 11926 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 11927 */                     });
/* 11928 */                     if ($exc.length > 0) {
/* 11929 */                         $err = err;
/* 11930 */                         $blk = $exc.pop();
/* 11931 */                         continue;
/* 11932 */                     } else {
/* 11933 */                         throw err;
/* 11934 */                     }
/* 11935 */                 }
/* 11936 */             }
/* 11937 */         }).apply(null, $rest);
/* 11938 */     });
/* 11939 */     var $scope574 = (function $run575$(self, iterations) {
/* 11940 */         var i, wkq; /* locals */
/* 11941 */         var i, iterations, iterations, self, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, $loadgbl576, $iter578, $loadgbl576, $call577, $iter578, $loadgbl580, $loadgbl581, $loadgbl582, $loadgbl583, $loadgbl584, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $call587, $loadgbl588, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $call587, $loadgbl588, $call589, $loadgbl591, $loadgbl592, $loadgbl594, $loadgbl595, $loadgbl597, $loadgbl598, $loadgbl599, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $call602, $loadgbl603, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $call602, $loadgbl603, $call604, $loadgbl606, $loadgbl607, $loadgbl608, $loadgbl610, $loadgbl611, $loadgbl612, $loadgbl614, $loadgbl615, $loadgbl616, $loadgbl618, $loadgbl619, $loadgbl620, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $call623, $loadgbl624, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $call623, $loadgbl624, $call625, $loadgbl627, $loadgbl628, $loadgbl629, $loadgbl631, $loadgbl632, $loadgbl633, $loadgbl635, $loadgbl636, $loadgbl637, $loadgbl639, $loadgbl640, $loadgbl641, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $call644, $loadgbl645, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $call644, $loadgbl645, $call646, $loadgbl648, $loadgbl649, $loadgbl650, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $call653, $loadgbl654, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $call653, $loadgbl654, $call655, $loadgbl657, $loadgbl658, $loadgbl659, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $call662, $loadgbl663, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $call662, $loadgbl663, $call664, $loadgbl666, $loadgbl668, $loadgbl668, $lattr669, $compareres670, $loadgbl668, $lattr669, $compareres670, $jfalse671, $boolopsucc672, $jfalse673, $loadgbl674, $loadgbl668, $lattr669, $compareres670, $jfalse671, $boolopsucc672, $jfalse673, $loadgbl674, $lattr675, $compareres676;
/* 11942 */         var $wakeFromSuspension = function() {
/* 11943 */             var susp = $scope574.$wakingSuspension;
/* 11944 */             delete $scope574.$wakingSuspension;
/* 11945 */             $blk = susp.$blk;
/* 11946 */             $loc = susp.$loc;
/* 11947 */             $gbl = susp.$gbl;
/* 11948 */             $exc = susp.$exc;
/* 11949 */             $err = susp.$err;
/* 11950 */             $postfinally = susp.$postfinally;
/* 11951 */             $currLineNo = susp.$lineno;
/* 11952 */             $currColNo = susp.$colno;
/* 11953 */             Sk.lastYield = Date.now();
/* 11954 */             i = susp.$tmps.i;
/* 11955 */             iterations = susp.$tmps.iterations;
/* 11956 */             self = susp.$tmps.self;
/* 11957 */             wkq = susp.$tmps.wkq;
/* 11958 */             $loadgbl576 = susp.$tmps.$loadgbl576;
/* 11959 */             $iter578 = susp.$tmps.$iter578;
/* 11960 */             $call577 = susp.$tmps.$call577;
/* 11961 */             $loadgbl580 = susp.$tmps.$loadgbl580;
/* 11962 */             $loadgbl581 = susp.$tmps.$loadgbl581;
/* 11963 */             $loadgbl582 = susp.$tmps.$loadgbl582;
/* 11964 */             $loadgbl583 = susp.$tmps.$loadgbl583;
/* 11965 */             $loadgbl584 = susp.$tmps.$loadgbl584;
/* 11966 */             $call585 = susp.$tmps.$call585;
/* 11967 */             $lattr586 = susp.$tmps.$lattr586;
/* 11968 */             $call587 = susp.$tmps.$call587;
/* 11969 */             $loadgbl588 = susp.$tmps.$loadgbl588;
/* 11970 */             $call589 = susp.$tmps.$call589;
/* 11971 */             $loadgbl591 = susp.$tmps.$loadgbl591;
/* 11972 */             $loadgbl592 = susp.$tmps.$loadgbl592;
/* 11973 */             $loadgbl594 = susp.$tmps.$loadgbl594;
/* 11974 */             $loadgbl595 = susp.$tmps.$loadgbl595;
/* 11975 */             $loadgbl597 = susp.$tmps.$loadgbl597;
/* 11976 */             $loadgbl598 = susp.$tmps.$loadgbl598;
/* 11977 */             $loadgbl599 = susp.$tmps.$loadgbl599;
/* 11978 */             $call600 = susp.$tmps.$call600;
/* 11979 */             $lattr601 = susp.$tmps.$lattr601;
/* 11980 */             $call602 = susp.$tmps.$call602;
/* 11981 */             $loadgbl603 = susp.$tmps.$loadgbl603;
/* 11982 */             $call604 = susp.$tmps.$call604;
/* 11983 */             $loadgbl606 = susp.$tmps.$loadgbl606;
/* 11984 */             $loadgbl607 = susp.$tmps.$loadgbl607;
/* 11985 */             $loadgbl608 = susp.$tmps.$loadgbl608;
/* 11986 */             $loadgbl610 = susp.$tmps.$loadgbl610;
/* 11987 */             $loadgbl611 = susp.$tmps.$loadgbl611;
/* 11988 */             $loadgbl612 = susp.$tmps.$loadgbl612;
/* 11989 */             $loadgbl614 = susp.$tmps.$loadgbl614;
/* 11990 */             $loadgbl615 = susp.$tmps.$loadgbl615;
/* 11991 */             $loadgbl616 = susp.$tmps.$loadgbl616;
/* 11992 */             $loadgbl618 = susp.$tmps.$loadgbl618;
/* 11993 */             $loadgbl619 = susp.$tmps.$loadgbl619;
/* 11994 */             $loadgbl620 = susp.$tmps.$loadgbl620;
/* 11995 */             $call621 = susp.$tmps.$call621;
/* 11996 */             $lattr622 = susp.$tmps.$lattr622;
/* 11997 */             $call623 = susp.$tmps.$call623;
/* 11998 */             $loadgbl624 = susp.$tmps.$loadgbl624;
/* 11999 */             $call625 = susp.$tmps.$call625;
/* 12000 */             $loadgbl627 = susp.$tmps.$loadgbl627;
/* 12001 */             $loadgbl628 = susp.$tmps.$loadgbl628;
/* 12002 */             $loadgbl629 = susp.$tmps.$loadgbl629;
/* 12003 */             $loadgbl631 = susp.$tmps.$loadgbl631;
/* 12004 */             $loadgbl632 = susp.$tmps.$loadgbl632;
/* 12005 */             $loadgbl633 = susp.$tmps.$loadgbl633;
/* 12006 */             $loadgbl635 = susp.$tmps.$loadgbl635;
/* 12007 */             $loadgbl636 = susp.$tmps.$loadgbl636;
/* 12008 */             $loadgbl637 = susp.$tmps.$loadgbl637;
/* 12009 */             $loadgbl639 = susp.$tmps.$loadgbl639;
/* 12010 */             $loadgbl640 = susp.$tmps.$loadgbl640;
/* 12011 */             $loadgbl641 = susp.$tmps.$loadgbl641;
/* 12012 */             $call642 = susp.$tmps.$call642;
/* 12013 */             $lattr643 = susp.$tmps.$lattr643;
/* 12014 */             $call644 = susp.$tmps.$call644;
/* 12015 */             $loadgbl645 = susp.$tmps.$loadgbl645;
/* 12016 */             $call646 = susp.$tmps.$call646;
/* 12017 */             $loadgbl648 = susp.$tmps.$loadgbl648;
/* 12018 */             $loadgbl649 = susp.$tmps.$loadgbl649;
/* 12019 */             $loadgbl650 = susp.$tmps.$loadgbl650;
/* 12020 */             $call651 = susp.$tmps.$call651;
/* 12021 */             $lattr652 = susp.$tmps.$lattr652;
/* 12022 */             $call653 = susp.$tmps.$call653;
/* 12023 */             $loadgbl654 = susp.$tmps.$loadgbl654;
/* 12024 */             $call655 = susp.$tmps.$call655;
/* 12025 */             $loadgbl657 = susp.$tmps.$loadgbl657;
/* 12026 */             $loadgbl658 = susp.$tmps.$loadgbl658;
/* 12027 */             $loadgbl659 = susp.$tmps.$loadgbl659;
/* 12028 */             $call660 = susp.$tmps.$call660;
/* 12029 */             $lattr661 = susp.$tmps.$lattr661;
/* 12030 */             $call662 = susp.$tmps.$call662;
/* 12031 */             $loadgbl663 = susp.$tmps.$loadgbl663;
/* 12032 */             $call664 = susp.$tmps.$call664;
/* 12033 */             $loadgbl666 = susp.$tmps.$loadgbl666;
/* 12034 */             $loadgbl668 = susp.$tmps.$loadgbl668;
/* 12035 */             $lattr669 = susp.$tmps.$lattr669;
/* 12036 */             $compareres670 = susp.$tmps.$compareres670;
/* 12037 */             $jfalse671 = susp.$tmps.$jfalse671;
/* 12038 */             $boolopsucc672 = susp.$tmps.$boolopsucc672;
/* 12039 */             $jfalse673 = susp.$tmps.$jfalse673;
/* 12040 */             $loadgbl674 = susp.$tmps.$loadgbl674;
/* 12041 */             $lattr675 = susp.$tmps.$lattr675;
/* 12042 */             $compareres676 = susp.$tmps.$compareres676;
/* 12043 */             try {
/* 12044 */                 $ret = susp.child.resume();
/* 12045 */             } catch (err) {
/* 12046 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12047 */                     err = new Sk.builtin.ExternalError(err);
/* 12048 */                 }
/* 12049 */                 err.traceback.push({
/* 12050 */                     lineno: $currLineNo,
/* 12051 */                     colno: $currColNo,
/* 12052 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12053 */                 });
/* 12054 */                 if ($exc.length > 0) {
/* 12055 */                     $err = err;
/* 12056 */                     $blk = $exc.pop();
/* 12057 */                 } else {
/* 12058 */                     throw err;
/* 12059 */                 }
/* 12060 */             }
/* 12061 */         };
/* 12062 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12063 */             var susp = new Sk.misceval.Suspension();
/* 12064 */             susp.child = $child;
/* 12065 */             susp.resume = function() {
/* 12066 */                 $scope574.$wakingSuspension = susp;
/* 12067 */                 return $scope574();
/* 12068 */             };
/* 12069 */             susp.data = susp.child.data;
/* 12070 */             susp.$blk = $blk;
/* 12071 */             susp.$loc = $loc;
/* 12072 */             susp.$gbl = $gbl;
/* 12073 */             susp.$exc = $exc;
/* 12074 */             susp.$err = $err;
/* 12075 */             susp.$postfinally = $postfinally;
/* 12076 */             susp.$filename = $filename;
/* 12077 */             susp.$lineno = $lineno;
/* 12078 */             susp.$colno = $colno;
/* 12079 */             susp.optional = susp.child.optional;
/* 12080 */             susp.$tmps = {
/* 12081 */                 "i": i,
/* 12082 */                 "iterations": iterations,
/* 12083 */                 "self": self,
/* 12084 */                 "wkq": wkq,
/* 12085 */                 "$loadgbl576": $loadgbl576,
/* 12086 */                 "$iter578": $iter578,
/* 12087 */                 "$call577": $call577,
/* 12088 */                 "$loadgbl580": $loadgbl580,
/* 12089 */                 "$loadgbl581": $loadgbl581,
/* 12090 */                 "$loadgbl582": $loadgbl582,
/* 12091 */                 "$loadgbl583": $loadgbl583,
/* 12092 */                 "$loadgbl584": $loadgbl584,
/* 12093 */                 "$call585": $call585,
/* 12094 */                 "$lattr586": $lattr586,
/* 12095 */                 "$call587": $call587,
/* 12096 */                 "$loadgbl588": $loadgbl588,
/* 12097 */                 "$call589": $call589,
/* 12098 */                 "$loadgbl591": $loadgbl591,
/* 12099 */                 "$loadgbl592": $loadgbl592,
/* 12100 */                 "$loadgbl594": $loadgbl594,
/* 12101 */                 "$loadgbl595": $loadgbl595,
/* 12102 */                 "$loadgbl597": $loadgbl597,
/* 12103 */                 "$loadgbl598": $loadgbl598,
/* 12104 */                 "$loadgbl599": $loadgbl599,
/* 12105 */                 "$call600": $call600,
/* 12106 */                 "$lattr601": $lattr601,
/* 12107 */                 "$call602": $call602,
/* 12108 */                 "$loadgbl603": $loadgbl603,
/* 12109 */                 "$call604": $call604,
/* 12110 */                 "$loadgbl606": $loadgbl606,
/* 12111 */                 "$loadgbl607": $loadgbl607,
/* 12112 */                 "$loadgbl608": $loadgbl608,
/* 12113 */                 "$loadgbl610": $loadgbl610,
/* 12114 */                 "$loadgbl611": $loadgbl611,
/* 12115 */                 "$loadgbl612": $loadgbl612,
/* 12116 */                 "$loadgbl614": $loadgbl614,
/* 12117 */                 "$loadgbl615": $loadgbl615,
/* 12118 */                 "$loadgbl616": $loadgbl616,
/* 12119 */                 "$loadgbl618": $loadgbl618,
/* 12120 */                 "$loadgbl619": $loadgbl619,
/* 12121 */                 "$loadgbl620": $loadgbl620,
/* 12122 */                 "$call621": $call621,
/* 12123 */                 "$lattr622": $lattr622,
/* 12124 */                 "$call623": $call623,
/* 12125 */                 "$loadgbl624": $loadgbl624,
/* 12126 */                 "$call625": $call625,
/* 12127 */                 "$loadgbl627": $loadgbl627,
/* 12128 */                 "$loadgbl628": $loadgbl628,
/* 12129 */                 "$loadgbl629": $loadgbl629,
/* 12130 */                 "$loadgbl631": $loadgbl631,
/* 12131 */                 "$loadgbl632": $loadgbl632,
/* 12132 */                 "$loadgbl633": $loadgbl633,
/* 12133 */                 "$loadgbl635": $loadgbl635,
/* 12134 */                 "$loadgbl636": $loadgbl636,
/* 12135 */                 "$loadgbl637": $loadgbl637,
/* 12136 */                 "$loadgbl639": $loadgbl639,
/* 12137 */                 "$loadgbl640": $loadgbl640,
/* 12138 */                 "$loadgbl641": $loadgbl641,
/* 12139 */                 "$call642": $call642,
/* 12140 */                 "$lattr643": $lattr643,
/* 12141 */                 "$call644": $call644,
/* 12142 */                 "$loadgbl645": $loadgbl645,
/* 12143 */                 "$call646": $call646,
/* 12144 */                 "$loadgbl648": $loadgbl648,
/* 12145 */                 "$loadgbl649": $loadgbl649,
/* 12146 */                 "$loadgbl650": $loadgbl650,
/* 12147 */                 "$call651": $call651,
/* 12148 */                 "$lattr652": $lattr652,
/* 12149 */                 "$call653": $call653,
/* 12150 */                 "$loadgbl654": $loadgbl654,
/* 12151 */                 "$call655": $call655,
/* 12152 */                 "$loadgbl657": $loadgbl657,
/* 12153 */                 "$loadgbl658": $loadgbl658,
/* 12154 */                 "$loadgbl659": $loadgbl659,
/* 12155 */                 "$call660": $call660,
/* 12156 */                 "$lattr661": $lattr661,
/* 12157 */                 "$call662": $call662,
/* 12158 */                 "$loadgbl663": $loadgbl663,
/* 12159 */                 "$call664": $call664,
/* 12160 */                 "$loadgbl666": $loadgbl666,
/* 12161 */                 "$loadgbl668": $loadgbl668,
/* 12162 */                 "$lattr669": $lattr669,
/* 12163 */                 "$compareres670": $compareres670,
/* 12164 */                 "$jfalse671": $jfalse671,
/* 12165 */                 "$boolopsucc672": $boolopsucc672,
/* 12166 */                 "$jfalse673": $jfalse673,
/* 12167 */                 "$loadgbl674": $loadgbl674,
/* 12168 */                 "$lattr675": $lattr675,
/* 12169 */                 "$compareres676": $compareres676
/* 12170 */             };
/* 12171 */             return susp;
/* 12172 */         };
/* 12173 */         var $blk = 0,
/* 12174 */             $exc = [],
/* 12175 */             $loc = {},
/* 12176 */             $gbl = this,
/* 12177 */             $err = undefined,
/* 12178 */             $ret = undefined,
/* 12179 */             $postfinally = undefined,
/* 12180 */             $currLineNo = undefined,
/* 12181 */             $currColNo = undefined;
/* 12182 */         if (typeof Sk.execStart === 'undefined') {
/* 12183 */             Sk.execStart = Date.now()
/* 12184 */         }
/* 12185 */         if (typeof Sk.lastYield === 'undefined') {
/* 12186 */             Sk.lastYield = Date.now()
/* 12187 */         }
/* 12188 */         if ($scope574.$wakingSuspension !== undefined) {
/* 12189 */             $wakeFromSuspension();
/* 12190 */         } else {
/* 12191 */             Sk.builtin.pyCheckArgs("run", arguments, 2, 2, false, false);
/* 12192 */         }
/* 12193 */         while (true) {
/* 12194 */             try {
/* 12195 */                 var $dateNow = Date.now();
/* 12196 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 12197 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 12198 */                 }
/* 12199 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 12200 */                     var $susp = $saveSuspension({
/* 12201 */                         data: {
/* 12202 */                             type: 'Sk.yield'
/* 12203 */                         },
/* 12204 */                         resume: function() {}
/* 12205 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 12206 */                     $susp.$blk = $blk;
/* 12207 */                     $susp.optional = true;
/* 12208 */                     return $susp;
/* 12209 */                 }
/* 12210 */                 switch ($blk) {
/* 12211 */                 case 0:
/* 12212 */                     /* --- codeobj entry --- */
/* 12213 */                     if (self === undefined) {
/* 12214 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12215 */                     }
/* 12216 */                     if (iterations === undefined) {
/* 12217 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12218 */                     }
/* 12219 */ 
/* 12220 */                     //
/* 12221 */                     // line 365:
/* 12222 */                     //         for i in range(iterations):
/* 12223 */                     //         ^
/* 12224 */                     //
/* 12225 */                     $currLineNo = 365;
/* 12226 */                     $currColNo = 8;
/* 12227 */ 
/* 12228 */                     var $loadgbl576 = Sk.misceval.loadname('range', $gbl);
/* 12229 */                     if (iterations === undefined) {
/* 12230 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12231 */                     }
/* 12232 */                     $ret;
/* 12233 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl576, iterations);
/* 12234 */                     $blk = 4; /* allowing case fallthrough */
/* 12235 */                 case 4:
/* 12236 */                     /* --- function return or resume suspension --- */
/* 12237 */                     if ($ret && $ret.$isSuspension) {
/* 12238 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 365, 17);
/* 12239 */                     }
/* 12240 */                     var $call577 = $ret;
/* 12241 */                     //
/* 12242 */                     // line 365:
/* 12243 */                     //         for i in range(iterations):
/* 12244 */                     //                  ^
/* 12245 */                     //
/* 12246 */                     $currLineNo = 365;
/* 12247 */                     $currColNo = 17;
/* 12248 */ 
/* 12249 */                     var $iter578 = Sk.abstr.iter($call577);
/* 12250 */                     $blk = 1; /* allowing case fallthrough */
/* 12251 */                 case 1:
/* 12252 */                     /* --- for start --- */
/* 12253 */                     $ret = Sk.abstr.iternext($iter578, true);
/* 12254 */                     $blk = 5; /* allowing case fallthrough */
/* 12255 */                 case 5:
/* 12256 */                     /* --- function return or resume suspension --- */
/* 12257 */                     if ($ret && $ret.$isSuspension) {
/* 12258 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 365, 8);
/* 12259 */                     }
/* 12260 */                     var $next579 = $ret;
/* 12261 */                     if ($next579 === undefined) {
/* 12262 */                         $blk = 2;
/* 12263 */                         continue;
/* 12264 */                     }
/* 12265 */                     i = $next579;
/* 12266 */                     //
/* 12267 */                     // line 366:
/* 12268 */                     //             taskWorkArea.holdCount = 0
/* 12269 */                     //             ^
/* 12270 */                     //
/* 12271 */                     $currLineNo = 366;
/* 12272 */                     $currColNo = 12;
/* 12273 */ 
/* 12274 */                     var $loadgbl580 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 12275 */                     $ret = Sk.abstr.sattr($loadgbl580, 'holdCount', new Sk.builtin.int_(0), true);
/* 12276 */                     $blk = 6; /* allowing case fallthrough */
/* 12277 */                 case 6:
/* 12278 */                     /* --- function return or resume suspension --- */
/* 12279 */                     if ($ret && $ret.$isSuspension) {
/* 12280 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 366, 12);
/* 12281 */                     }
/* 12282 */                     //
/* 12283 */                     // line 367:
/* 12284 */                     //             taskWorkArea.qpktCount = 0
/* 12285 */                     //             ^
/* 12286 */                     //
/* 12287 */                     $currLineNo = 367;
/* 12288 */                     $currColNo = 12;
/* 12289 */ 
/* 12290 */                     var $loadgbl581 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 12291 */                     $ret = Sk.abstr.sattr($loadgbl581, 'qpktCount', new Sk.builtin.int_(0), true);
/* 12292 */                     $blk = 7; /* allowing case fallthrough */
/* 12293 */                 case 7:
/* 12294 */                     /* --- function return or resume suspension --- */
/* 12295 */                     if ($ret && $ret.$isSuspension) {
/* 12296 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 367, 12);
/* 12297 */                     }
/* 12298 */                     //
/* 12299 */                     // line 369:
/* 12300 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 12301 */                     //             ^
/* 12302 */                     //
/* 12303 */                     $currLineNo = 369;
/* 12304 */                     $currColNo = 12;
/* 12305 */ 
/* 12306 */                     var $loadgbl582 = Sk.misceval.loadname('IdleTask', $gbl);
/* 12307 */                     var $loadgbl583 = Sk.misceval.loadname('I_IDLE', $gbl);
/* 12308 */                     var $loadgbl584 = Sk.misceval.loadname('TaskState', $gbl);
/* 12309 */                     $ret;
/* 12310 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl584);
/* 12311 */                     $blk = 8; /* allowing case fallthrough */
/* 12312 */                 case 8:
/* 12313 */                     /* --- function return or resume suspension --- */
/* 12314 */                     if ($ret && $ret.$isSuspension) {
/* 12315 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 12316 */                     }
/* 12317 */                     var $call585 = $ret;
/* 12318 */                     //
/* 12319 */                     // line 369:
/* 12320 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 12321 */                     //                                        ^
/* 12322 */                     //
/* 12323 */                     $currLineNo = 369;
/* 12324 */                     $currColNo = 39;
/* 12325 */ 
/* 12326 */                     $ret = Sk.abstr.gattr($call585, 'running', true);
/* 12327 */                     $blk = 9; /* allowing case fallthrough */
/* 12328 */                 case 9:
/* 12329 */                     /* --- function return or resume suspension --- */
/* 12330 */                     if ($ret && $ret.$isSuspension) {
/* 12331 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 12332 */                     }
/* 12333 */                     var $lattr586 = $ret;
/* 12334 */                     $ret;
/* 12335 */                     $ret = Sk.misceval.callsimOrSuspend($lattr586);
/* 12336 */                     $blk = 10; /* allowing case fallthrough */
/* 12337 */                 case 10:
/* 12338 */                     /* --- function return or resume suspension --- */
/* 12339 */                     if ($ret && $ret.$isSuspension) {
/* 12340 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 12341 */                     }
/* 12342 */                     var $call587 = $ret;
/* 12343 */                     //
/* 12344 */                     // line 369:
/* 12345 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 12346 */                     //                                        ^
/* 12347 */                     //
/* 12348 */                     $currLineNo = 369;
/* 12349 */                     $currColNo = 39;
/* 12350 */ 
/* 12351 */                     var $loadgbl588 = Sk.misceval.loadname('IdleTaskRec', $gbl);
/* 12352 */                     $ret;
/* 12353 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl588);
/* 12354 */                     $blk = 11; /* allowing case fallthrough */
/* 12355 */                 case 11:
/* 12356 */                     /* --- function return or resume suspension --- */
/* 12357 */                     if ($ret && $ret.$isSuspension) {
/* 12358 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 62);
/* 12359 */                     }
/* 12360 */                     var $call589 = $ret;
/* 12361 */                     //
/* 12362 */                     // line 369:
/* 12363 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 12364 */                     //                                                               ^
/* 12365 */                     //
/* 12366 */                     $currLineNo = 369;
/* 12367 */                     $currColNo = 62;
/* 12368 */ 
/* 12369 */                     $ret;
/* 12370 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl582, $loadgbl583, new Sk.builtin.int_(1), new Sk.builtin.int_(10000), $call587, $call589);
/* 12371 */                     $blk = 12; /* allowing case fallthrough */
/* 12372 */                 case 12:
/* 12373 */                     /* --- function return or resume suspension --- */
/* 12374 */                     if ($ret && $ret.$isSuspension) {
/* 12375 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 12);
/* 12376 */                     }
/* 12377 */                     var $call590 = $ret;
/* 12378 */                     //
/* 12379 */                     // line 369:
/* 12380 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 12381 */                     //             ^
/* 12382 */                     //
/* 12383 */                     $currLineNo = 369;
/* 12384 */                     $currColNo = 12;
/* 12385 */ 
/* 12386 */ 
/* 12387 */                     //
/* 12388 */                     // line 371:
/* 12389 */                     //             wkq = Packet(None, 0, K_WORK)
/* 12390 */                     //             ^
/* 12391 */                     //
/* 12392 */                     $currLineNo = 371;
/* 12393 */                     $currColNo = 12;
/* 12394 */ 
/* 12395 */                     var $loadgbl591 = Sk.misceval.loadname('Packet', $gbl);
/* 12396 */                     var $loadgbl592 = Sk.misceval.loadname('K_WORK', $gbl);
/* 12397 */                     $ret;
/* 12398 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl591, Sk.builtin.none.none$, new Sk.builtin.int_(0), $loadgbl592);
/* 12399 */                     $blk = 13; /* allowing case fallthrough */
/* 12400 */                 case 13:
/* 12401 */                     /* --- function return or resume suspension --- */
/* 12402 */                     if ($ret && $ret.$isSuspension) {
/* 12403 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 371, 18);
/* 12404 */                     }
/* 12405 */                     var $call593 = $ret;
/* 12406 */                     //
/* 12407 */                     // line 371:
/* 12408 */                     //             wkq = Packet(None, 0, K_WORK)
/* 12409 */                     //                   ^
/* 12410 */                     //
/* 12411 */                     $currLineNo = 371;
/* 12412 */                     $currColNo = 18;
/* 12413 */ 
/* 12414 */                     wkq = $call593;
/* 12415 */                     //
/* 12416 */                     // line 372:
/* 12417 */                     //             wkq = Packet(wkq , 0, K_WORK)
/* 12418 */                     //             ^
/* 12419 */                     //
/* 12420 */                     $currLineNo = 372;
/* 12421 */                     $currColNo = 12;
/* 12422 */ 
/* 12423 */                     var $loadgbl594 = Sk.misceval.loadname('Packet', $gbl);
/* 12424 */                     if (wkq === undefined) {
/* 12425 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12426 */                     }
/* 12427 */                     var $loadgbl595 = Sk.misceval.loadname('K_WORK', $gbl);
/* 12428 */                     $ret;
/* 12429 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl594, wkq, new Sk.builtin.int_(0), $loadgbl595);
/* 12430 */                     $blk = 14; /* allowing case fallthrough */
/* 12431 */                 case 14:
/* 12432 */                     /* --- function return or resume suspension --- */
/* 12433 */                     if ($ret && $ret.$isSuspension) {
/* 12434 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 372, 18);
/* 12435 */                     }
/* 12436 */                     var $call596 = $ret;
/* 12437 */                     //
/* 12438 */                     // line 372:
/* 12439 */                     //             wkq = Packet(wkq , 0, K_WORK)
/* 12440 */                     //                   ^
/* 12441 */                     //
/* 12442 */                     $currLineNo = 372;
/* 12443 */                     $currColNo = 18;
/* 12444 */ 
/* 12445 */                     wkq = $call596;
/* 12446 */                     //
/* 12447 */                     // line 373:
/* 12448 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 12449 */                     //             ^
/* 12450 */                     //
/* 12451 */                     $currLineNo = 373;
/* 12452 */                     $currColNo = 12;
/* 12453 */ 
/* 12454 */                     var $loadgbl597 = Sk.misceval.loadname('WorkTask', $gbl);
/* 12455 */                     var $loadgbl598 = Sk.misceval.loadname('I_WORK', $gbl);
/* 12456 */                     if (wkq === undefined) {
/* 12457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12458 */                     }
/* 12459 */                     var $loadgbl599 = Sk.misceval.loadname('TaskState', $gbl);
/* 12460 */                     $ret;
/* 12461 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl599);
/* 12462 */                     $blk = 15; /* allowing case fallthrough */
/* 12463 */                 case 15:
/* 12464 */                     /* --- function return or resume suspension --- */
/* 12465 */                     if ($ret && $ret.$isSuspension) {
/* 12466 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 12467 */                     }
/* 12468 */                     var $call600 = $ret;
/* 12469 */                     //
/* 12470 */                     // line 373:
/* 12471 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 12472 */                     //                                         ^
/* 12473 */                     //
/* 12474 */                     $currLineNo = 373;
/* 12475 */                     $currColNo = 40;
/* 12476 */ 
/* 12477 */                     $ret = Sk.abstr.gattr($call600, 'waitingWithPacket', true);
/* 12478 */                     $blk = 16; /* allowing case fallthrough */
/* 12479 */                 case 16:
/* 12480 */                     /* --- function return or resume suspension --- */
/* 12481 */                     if ($ret && $ret.$isSuspension) {
/* 12482 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 12483 */                     }
/* 12484 */                     var $lattr601 = $ret;
/* 12485 */                     $ret;
/* 12486 */                     $ret = Sk.misceval.callsimOrSuspend($lattr601);
/* 12487 */                     $blk = 17; /* allowing case fallthrough */
/* 12488 */                 case 17:
/* 12489 */                     /* --- function return or resume suspension --- */
/* 12490 */                     if ($ret && $ret.$isSuspension) {
/* 12491 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 12492 */                     }
/* 12493 */                     var $call602 = $ret;
/* 12494 */                     //
/* 12495 */                     // line 373:
/* 12496 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 12497 */                     //                                         ^
/* 12498 */                     //
/* 12499 */                     $currLineNo = 373;
/* 12500 */                     $currColNo = 40;
/* 12501 */ 
/* 12502 */                     var $loadgbl603 = Sk.misceval.loadname('WorkerTaskRec', $gbl);
/* 12503 */                     $ret;
/* 12504 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl603);
/* 12505 */                     $blk = 18; /* allowing case fallthrough */
/* 12506 */                 case 18:
/* 12507 */                     /* --- function return or resume suspension --- */
/* 12508 */                     if ($ret && $ret.$isSuspension) {
/* 12509 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 73);
/* 12510 */                     }
/* 12511 */                     var $call604 = $ret;
/* 12512 */                     //
/* 12513 */                     // line 373:
/* 12514 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 12515 */                     //                                                                          ^
/* 12516 */                     //
/* 12517 */                     $currLineNo = 373;
/* 12518 */                     $currColNo = 73;
/* 12519 */ 
/* 12520 */                     $ret;
/* 12521 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl597, $loadgbl598, new Sk.builtin.int_(1000), wkq, $call602, $call604);
/* 12522 */                     $blk = 19; /* allowing case fallthrough */
/* 12523 */                 case 19:
/* 12524 */                     /* --- function return or resume suspension --- */
/* 12525 */                     if ($ret && $ret.$isSuspension) {
/* 12526 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 12);
/* 12527 */                     }
/* 12528 */                     var $call605 = $ret;
/* 12529 */                     //
/* 12530 */                     // line 373:
/* 12531 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 12532 */                     //             ^
/* 12533 */                     //
/* 12534 */                     $currLineNo = 373;
/* 12535 */                     $currColNo = 12;
/* 12536 */ 
/* 12537 */ 
/* 12538 */                     //
/* 12539 */                     // line 375:
/* 12540 */                     //             wkq = Packet(None, I_DEVA, K_DEV)
/* 12541 */                     //             ^
/* 12542 */                     //
/* 12543 */                     $currLineNo = 375;
/* 12544 */                     $currColNo = 12;
/* 12545 */ 
/* 12546 */                     var $loadgbl606 = Sk.misceval.loadname('Packet', $gbl);
/* 12547 */                     var $loadgbl607 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 12548 */                     var $loadgbl608 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12549 */                     $ret;
/* 12550 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl606, Sk.builtin.none.none$, $loadgbl607, $loadgbl608);
/* 12551 */                     $blk = 20; /* allowing case fallthrough */
/* 12552 */                 case 20:
/* 12553 */                     /* --- function return or resume suspension --- */
/* 12554 */                     if ($ret && $ret.$isSuspension) {
/* 12555 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 375, 18);
/* 12556 */                     }
/* 12557 */                     var $call609 = $ret;
/* 12558 */                     //
/* 12559 */                     // line 375:
/* 12560 */                     //             wkq = Packet(None, I_DEVA, K_DEV)
/* 12561 */                     //                   ^
/* 12562 */                     //
/* 12563 */                     $currLineNo = 375;
/* 12564 */                     $currColNo = 18;
/* 12565 */ 
/* 12566 */                     wkq = $call609;
/* 12567 */                     //
/* 12568 */                     // line 376:
/* 12569 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 12570 */                     //             ^
/* 12571 */                     //
/* 12572 */                     $currLineNo = 376;
/* 12573 */                     $currColNo = 12;
/* 12574 */ 
/* 12575 */                     var $loadgbl610 = Sk.misceval.loadname('Packet', $gbl);
/* 12576 */                     if (wkq === undefined) {
/* 12577 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12578 */                     }
/* 12579 */                     var $loadgbl611 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 12580 */                     var $loadgbl612 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12581 */                     $ret;
/* 12582 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl610, wkq, $loadgbl611, $loadgbl612);
/* 12583 */                     $blk = 21; /* allowing case fallthrough */
/* 12584 */                 case 21:
/* 12585 */                     /* --- function return or resume suspension --- */
/* 12586 */                     if ($ret && $ret.$isSuspension) {
/* 12587 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 376, 18);
/* 12588 */                     }
/* 12589 */                     var $call613 = $ret;
/* 12590 */                     //
/* 12591 */                     // line 376:
/* 12592 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 12593 */                     //                   ^
/* 12594 */                     //
/* 12595 */                     $currLineNo = 376;
/* 12596 */                     $currColNo = 18;
/* 12597 */ 
/* 12598 */                     wkq = $call613;
/* 12599 */                     //
/* 12600 */                     // line 377:
/* 12601 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 12602 */                     //             ^
/* 12603 */                     //
/* 12604 */                     $currLineNo = 377;
/* 12605 */                     $currColNo = 12;
/* 12606 */ 
/* 12607 */                     var $loadgbl614 = Sk.misceval.loadname('Packet', $gbl);
/* 12608 */                     if (wkq === undefined) {
/* 12609 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12610 */                     }
/* 12611 */                     var $loadgbl615 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 12612 */                     var $loadgbl616 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12613 */                     $ret;
/* 12614 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl614, wkq, $loadgbl615, $loadgbl616);
/* 12615 */                     $blk = 22; /* allowing case fallthrough */
/* 12616 */                 case 22:
/* 12617 */                     /* --- function return or resume suspension --- */
/* 12618 */                     if ($ret && $ret.$isSuspension) {
/* 12619 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 377, 18);
/* 12620 */                     }
/* 12621 */                     var $call617 = $ret;
/* 12622 */                     //
/* 12623 */                     // line 377:
/* 12624 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 12625 */                     //                   ^
/* 12626 */                     //
/* 12627 */                     $currLineNo = 377;
/* 12628 */                     $currColNo = 18;
/* 12629 */ 
/* 12630 */                     wkq = $call617;
/* 12631 */                     //
/* 12632 */                     // line 378:
/* 12633 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12634 */                     //             ^
/* 12635 */                     //
/* 12636 */                     $currLineNo = 378;
/* 12637 */                     $currColNo = 12;
/* 12638 */ 
/* 12639 */                     var $loadgbl618 = Sk.misceval.loadname('HandlerTask', $gbl);
/* 12640 */                     var $loadgbl619 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 12641 */                     if (wkq === undefined) {
/* 12642 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12643 */                     }
/* 12644 */                     var $loadgbl620 = Sk.misceval.loadname('TaskState', $gbl);
/* 12645 */                     $ret;
/* 12646 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl620);
/* 12647 */                     $blk = 23; /* allowing case fallthrough */
/* 12648 */                 case 23:
/* 12649 */                     /* --- function return or resume suspension --- */
/* 12650 */                     if ($ret && $ret.$isSuspension) {
/* 12651 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 12652 */                     }
/* 12653 */                     var $call621 = $ret;
/* 12654 */                     //
/* 12655 */                     // line 378:
/* 12656 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12657 */                     //                                                ^
/* 12658 */                     //
/* 12659 */                     $currLineNo = 378;
/* 12660 */                     $currColNo = 47;
/* 12661 */ 
/* 12662 */                     $ret = Sk.abstr.gattr($call621, 'waitingWithPacket', true);
/* 12663 */                     $blk = 24; /* allowing case fallthrough */
/* 12664 */                 case 24:
/* 12665 */                     /* --- function return or resume suspension --- */
/* 12666 */                     if ($ret && $ret.$isSuspension) {
/* 12667 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 12668 */                     }
/* 12669 */                     var $lattr622 = $ret;
/* 12670 */                     $ret;
/* 12671 */                     $ret = Sk.misceval.callsimOrSuspend($lattr622);
/* 12672 */                     $blk = 25; /* allowing case fallthrough */
/* 12673 */                 case 25:
/* 12674 */                     /* --- function return or resume suspension --- */
/* 12675 */                     if ($ret && $ret.$isSuspension) {
/* 12676 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 12677 */                     }
/* 12678 */                     var $call623 = $ret;
/* 12679 */                     //
/* 12680 */                     // line 378:
/* 12681 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12682 */                     //                                                ^
/* 12683 */                     //
/* 12684 */                     $currLineNo = 378;
/* 12685 */                     $currColNo = 47;
/* 12686 */ 
/* 12687 */                     var $loadgbl624 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/* 12688 */                     $ret;
/* 12689 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl624);
/* 12690 */                     $blk = 26; /* allowing case fallthrough */
/* 12691 */                 case 26:
/* 12692 */                     /* --- function return or resume suspension --- */
/* 12693 */                     if ($ret && $ret.$isSuspension) {
/* 12694 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 80);
/* 12695 */                     }
/* 12696 */                     var $call625 = $ret;
/* 12697 */                     //
/* 12698 */                     // line 378:
/* 12699 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12700 */                     //                                                                                 ^
/* 12701 */                     //
/* 12702 */                     $currLineNo = 378;
/* 12703 */                     $currColNo = 80;
/* 12704 */ 
/* 12705 */                     $ret;
/* 12706 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl618, $loadgbl619, new Sk.builtin.int_(2000), wkq, $call623, $call625);
/* 12707 */                     $blk = 27; /* allowing case fallthrough */
/* 12708 */                 case 27:
/* 12709 */                     /* --- function return or resume suspension --- */
/* 12710 */                     if ($ret && $ret.$isSuspension) {
/* 12711 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 12);
/* 12712 */                     }
/* 12713 */                     var $call626 = $ret;
/* 12714 */                     //
/* 12715 */                     // line 378:
/* 12716 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12717 */                     //             ^
/* 12718 */                     //
/* 12719 */                     $currLineNo = 378;
/* 12720 */                     $currColNo = 12;
/* 12721 */ 
/* 12722 */ 
/* 12723 */                     //
/* 12724 */                     // line 380:
/* 12725 */                     //             wkq = Packet(None, I_DEVB, K_DEV)
/* 12726 */                     //             ^
/* 12727 */                     //
/* 12728 */                     $currLineNo = 380;
/* 12729 */                     $currColNo = 12;
/* 12730 */ 
/* 12731 */                     var $loadgbl627 = Sk.misceval.loadname('Packet', $gbl);
/* 12732 */                     var $loadgbl628 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 12733 */                     var $loadgbl629 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12734 */                     $ret;
/* 12735 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl627, Sk.builtin.none.none$, $loadgbl628, $loadgbl629);
/* 12736 */                     $blk = 28; /* allowing case fallthrough */
/* 12737 */                 case 28:
/* 12738 */                     /* --- function return or resume suspension --- */
/* 12739 */                     if ($ret && $ret.$isSuspension) {
/* 12740 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 380, 18);
/* 12741 */                     }
/* 12742 */                     var $call630 = $ret;
/* 12743 */                     //
/* 12744 */                     // line 380:
/* 12745 */                     //             wkq = Packet(None, I_DEVB, K_DEV)
/* 12746 */                     //                   ^
/* 12747 */                     //
/* 12748 */                     $currLineNo = 380;
/* 12749 */                     $currColNo = 18;
/* 12750 */ 
/* 12751 */                     wkq = $call630;
/* 12752 */                     //
/* 12753 */                     // line 381:
/* 12754 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 12755 */                     //             ^
/* 12756 */                     //
/* 12757 */                     $currLineNo = 381;
/* 12758 */                     $currColNo = 12;
/* 12759 */ 
/* 12760 */                     var $loadgbl631 = Sk.misceval.loadname('Packet', $gbl);
/* 12761 */                     if (wkq === undefined) {
/* 12762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12763 */                     }
/* 12764 */                     var $loadgbl632 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 12765 */                     var $loadgbl633 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12766 */                     $ret;
/* 12767 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl631, wkq, $loadgbl632, $loadgbl633);
/* 12768 */                     $blk = 29; /* allowing case fallthrough */
/* 12769 */                 case 29:
/* 12770 */                     /* --- function return or resume suspension --- */
/* 12771 */                     if ($ret && $ret.$isSuspension) {
/* 12772 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 381, 18);
/* 12773 */                     }
/* 12774 */                     var $call634 = $ret;
/* 12775 */                     //
/* 12776 */                     // line 381:
/* 12777 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 12778 */                     //                   ^
/* 12779 */                     //
/* 12780 */                     $currLineNo = 381;
/* 12781 */                     $currColNo = 18;
/* 12782 */ 
/* 12783 */                     wkq = $call634;
/* 12784 */                     //
/* 12785 */                     // line 382:
/* 12786 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 12787 */                     //             ^
/* 12788 */                     //
/* 12789 */                     $currLineNo = 382;
/* 12790 */                     $currColNo = 12;
/* 12791 */ 
/* 12792 */                     var $loadgbl635 = Sk.misceval.loadname('Packet', $gbl);
/* 12793 */                     if (wkq === undefined) {
/* 12794 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12795 */                     }
/* 12796 */                     var $loadgbl636 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 12797 */                     var $loadgbl637 = Sk.misceval.loadname('K_DEV', $gbl);
/* 12798 */                     $ret;
/* 12799 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl635, wkq, $loadgbl636, $loadgbl637);
/* 12800 */                     $blk = 30; /* allowing case fallthrough */
/* 12801 */                 case 30:
/* 12802 */                     /* --- function return or resume suspension --- */
/* 12803 */                     if ($ret && $ret.$isSuspension) {
/* 12804 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 382, 18);
/* 12805 */                     }
/* 12806 */                     var $call638 = $ret;
/* 12807 */                     //
/* 12808 */                     // line 382:
/* 12809 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 12810 */                     //                   ^
/* 12811 */                     //
/* 12812 */                     $currLineNo = 382;
/* 12813 */                     $currColNo = 18;
/* 12814 */ 
/* 12815 */                     wkq = $call638;
/* 12816 */                     //
/* 12817 */                     // line 383:
/* 12818 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12819 */                     //             ^
/* 12820 */                     //
/* 12821 */                     $currLineNo = 383;
/* 12822 */                     $currColNo = 12;
/* 12823 */ 
/* 12824 */                     var $loadgbl639 = Sk.misceval.loadname('HandlerTask', $gbl);
/* 12825 */                     var $loadgbl640 = Sk.misceval.loadname('I_HANDLERB', $gbl);
/* 12826 */                     if (wkq === undefined) {
/* 12827 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12828 */                     }
/* 12829 */                     var $loadgbl641 = Sk.misceval.loadname('TaskState', $gbl);
/* 12830 */                     $ret;
/* 12831 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl641);
/* 12832 */                     $blk = 31; /* allowing case fallthrough */
/* 12833 */                 case 31:
/* 12834 */                     /* --- function return or resume suspension --- */
/* 12835 */                     if ($ret && $ret.$isSuspension) {
/* 12836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 12837 */                     }
/* 12838 */                     var $call642 = $ret;
/* 12839 */                     //
/* 12840 */                     // line 383:
/* 12841 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12842 */                     //                                                ^
/* 12843 */                     //
/* 12844 */                     $currLineNo = 383;
/* 12845 */                     $currColNo = 47;
/* 12846 */ 
/* 12847 */                     $ret = Sk.abstr.gattr($call642, 'waitingWithPacket', true);
/* 12848 */                     $blk = 32; /* allowing case fallthrough */
/* 12849 */                 case 32:
/* 12850 */                     /* --- function return or resume suspension --- */
/* 12851 */                     if ($ret && $ret.$isSuspension) {
/* 12852 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 12853 */                     }
/* 12854 */                     var $lattr643 = $ret;
/* 12855 */                     $ret;
/* 12856 */                     $ret = Sk.misceval.callsimOrSuspend($lattr643);
/* 12857 */                     $blk = 33; /* allowing case fallthrough */
/* 12858 */                 case 33:
/* 12859 */                     /* --- function return or resume suspension --- */
/* 12860 */                     if ($ret && $ret.$isSuspension) {
/* 12861 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 12862 */                     }
/* 12863 */                     var $call644 = $ret;
/* 12864 */                     //
/* 12865 */                     // line 383:
/* 12866 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12867 */                     //                                                ^
/* 12868 */                     //
/* 12869 */                     $currLineNo = 383;
/* 12870 */                     $currColNo = 47;
/* 12871 */ 
/* 12872 */                     var $loadgbl645 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/* 12873 */                     $ret;
/* 12874 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl645);
/* 12875 */                     $blk = 34; /* allowing case fallthrough */
/* 12876 */                 case 34:
/* 12877 */                     /* --- function return or resume suspension --- */
/* 12878 */                     if ($ret && $ret.$isSuspension) {
/* 12879 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 80);
/* 12880 */                     }
/* 12881 */                     var $call646 = $ret;
/* 12882 */                     //
/* 12883 */                     // line 383:
/* 12884 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12885 */                     //                                                                                 ^
/* 12886 */                     //
/* 12887 */                     $currLineNo = 383;
/* 12888 */                     $currColNo = 80;
/* 12889 */ 
/* 12890 */                     $ret;
/* 12891 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl639, $loadgbl640, new Sk.builtin.int_(3000), wkq, $call644, $call646);
/* 12892 */                     $blk = 35; /* allowing case fallthrough */
/* 12893 */                 case 35:
/* 12894 */                     /* --- function return or resume suspension --- */
/* 12895 */                     if ($ret && $ret.$isSuspension) {
/* 12896 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 12);
/* 12897 */                     }
/* 12898 */                     var $call647 = $ret;
/* 12899 */                     //
/* 12900 */                     // line 383:
/* 12901 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 12902 */                     //             ^
/* 12903 */                     //
/* 12904 */                     $currLineNo = 383;
/* 12905 */                     $currColNo = 12;
/* 12906 */ 
/* 12907 */ 
/* 12908 */                     //
/* 12909 */                     // line 385:
/* 12910 */                     //             wkq = None;
/* 12911 */                     //             ^
/* 12912 */                     //
/* 12913 */                     $currLineNo = 385;
/* 12914 */                     $currColNo = 12;
/* 12915 */ 
/* 12916 */                     wkq = Sk.builtin.none.none$;
/* 12917 */                     //
/* 12918 */                     // line 386:
/* 12919 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12920 */                     //             ^
/* 12921 */                     //
/* 12922 */                     $currLineNo = 386;
/* 12923 */                     $currColNo = 12;
/* 12924 */ 
/* 12925 */                     var $loadgbl648 = Sk.misceval.loadname('DeviceTask', $gbl);
/* 12926 */                     var $loadgbl649 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 12927 */                     if (wkq === undefined) {
/* 12928 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12929 */                     }
/* 12930 */                     var $loadgbl650 = Sk.misceval.loadname('TaskState', $gbl);
/* 12931 */                     $ret;
/* 12932 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl650);
/* 12933 */                     $blk = 36; /* allowing case fallthrough */
/* 12934 */                 case 36:
/* 12935 */                     /* --- function return or resume suspension --- */
/* 12936 */                     if ($ret && $ret.$isSuspension) {
/* 12937 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 12938 */                     }
/* 12939 */                     var $call651 = $ret;
/* 12940 */                     //
/* 12941 */                     // line 386:
/* 12942 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12943 */                     //                                           ^
/* 12944 */                     //
/* 12945 */                     $currLineNo = 386;
/* 12946 */                     $currColNo = 42;
/* 12947 */ 
/* 12948 */                     $ret = Sk.abstr.gattr($call651, 'waiting', true);
/* 12949 */                     $blk = 37; /* allowing case fallthrough */
/* 12950 */                 case 37:
/* 12951 */                     /* --- function return or resume suspension --- */
/* 12952 */                     if ($ret && $ret.$isSuspension) {
/* 12953 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 12954 */                     }
/* 12955 */                     var $lattr652 = $ret;
/* 12956 */                     $ret;
/* 12957 */                     $ret = Sk.misceval.callsimOrSuspend($lattr652);
/* 12958 */                     $blk = 38; /* allowing case fallthrough */
/* 12959 */                 case 38:
/* 12960 */                     /* --- function return or resume suspension --- */
/* 12961 */                     if ($ret && $ret.$isSuspension) {
/* 12962 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 12963 */                     }
/* 12964 */                     var $call653 = $ret;
/* 12965 */                     //
/* 12966 */                     // line 386:
/* 12967 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12968 */                     //                                           ^
/* 12969 */                     //
/* 12970 */                     $currLineNo = 386;
/* 12971 */                     $currColNo = 42;
/* 12972 */ 
/* 12973 */                     var $loadgbl654 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/* 12974 */                     $ret;
/* 12975 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl654);
/* 12976 */                     $blk = 39; /* allowing case fallthrough */
/* 12977 */                 case 39:
/* 12978 */                     /* --- function return or resume suspension --- */
/* 12979 */                     if ($ret && $ret.$isSuspension) {
/* 12980 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 65);
/* 12981 */                     }
/* 12982 */                     var $call655 = $ret;
/* 12983 */                     //
/* 12984 */                     // line 386:
/* 12985 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12986 */                     //                                                                  ^
/* 12987 */                     //
/* 12988 */                     $currLineNo = 386;
/* 12989 */                     $currColNo = 65;
/* 12990 */ 
/* 12991 */                     $ret;
/* 12992 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl648, $loadgbl649, new Sk.builtin.int_(4000), wkq, $call653, $call655);
/* 12993 */                     $blk = 40; /* allowing case fallthrough */
/* 12994 */                 case 40:
/* 12995 */                     /* --- function return or resume suspension --- */
/* 12996 */                     if ($ret && $ret.$isSuspension) {
/* 12997 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 12);
/* 12998 */                     }
/* 12999 */                     var $call656 = $ret;
/* 13000 */                     //
/* 13001 */                     // line 386:
/* 13002 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13003 */                     //             ^
/* 13004 */                     //
/* 13005 */                     $currLineNo = 386;
/* 13006 */                     $currColNo = 12;
/* 13007 */ 
/* 13008 */ 
/* 13009 */                     //
/* 13010 */                     // line 387:
/* 13011 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13012 */                     //             ^
/* 13013 */                     //
/* 13014 */                     $currLineNo = 387;
/* 13015 */                     $currColNo = 12;
/* 13016 */ 
/* 13017 */                     var $loadgbl657 = Sk.misceval.loadname('DeviceTask', $gbl);
/* 13018 */                     var $loadgbl658 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 13019 */                     if (wkq === undefined) {
/* 13020 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 13021 */                     }
/* 13022 */                     var $loadgbl659 = Sk.misceval.loadname('TaskState', $gbl);
/* 13023 */                     $ret;
/* 13024 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl659);
/* 13025 */                     $blk = 41; /* allowing case fallthrough */
/* 13026 */                 case 41:
/* 13027 */                     /* --- function return or resume suspension --- */
/* 13028 */                     if ($ret && $ret.$isSuspension) {
/* 13029 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 13030 */                     }
/* 13031 */                     var $call660 = $ret;
/* 13032 */                     //
/* 13033 */                     // line 387:
/* 13034 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13035 */                     //                                           ^
/* 13036 */                     //
/* 13037 */                     $currLineNo = 387;
/* 13038 */                     $currColNo = 42;
/* 13039 */ 
/* 13040 */                     $ret = Sk.abstr.gattr($call660, 'waiting', true);
/* 13041 */                     $blk = 42; /* allowing case fallthrough */
/* 13042 */                 case 42:
/* 13043 */                     /* --- function return or resume suspension --- */
/* 13044 */                     if ($ret && $ret.$isSuspension) {
/* 13045 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 13046 */                     }
/* 13047 */                     var $lattr661 = $ret;
/* 13048 */                     $ret;
/* 13049 */                     $ret = Sk.misceval.callsimOrSuspend($lattr661);
/* 13050 */                     $blk = 43; /* allowing case fallthrough */
/* 13051 */                 case 43:
/* 13052 */                     /* --- function return or resume suspension --- */
/* 13053 */                     if ($ret && $ret.$isSuspension) {
/* 13054 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 13055 */                     }
/* 13056 */                     var $call662 = $ret;
/* 13057 */                     //
/* 13058 */                     // line 387:
/* 13059 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13060 */                     //                                           ^
/* 13061 */                     //
/* 13062 */                     $currLineNo = 387;
/* 13063 */                     $currColNo = 42;
/* 13064 */ 
/* 13065 */                     var $loadgbl663 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/* 13066 */                     $ret;
/* 13067 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl663);
/* 13068 */                     $blk = 44; /* allowing case fallthrough */
/* 13069 */                 case 44:
/* 13070 */                     /* --- function return or resume suspension --- */
/* 13071 */                     if ($ret && $ret.$isSuspension) {
/* 13072 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 65);
/* 13073 */                     }
/* 13074 */                     var $call664 = $ret;
/* 13075 */                     //
/* 13076 */                     // line 387:
/* 13077 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13078 */                     //                                                                  ^
/* 13079 */                     //
/* 13080 */                     $currLineNo = 387;
/* 13081 */                     $currColNo = 65;
/* 13082 */ 
/* 13083 */                     $ret;
/* 13084 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl657, $loadgbl658, new Sk.builtin.int_(5000), wkq, $call662, $call664);
/* 13085 */                     $blk = 45; /* allowing case fallthrough */
/* 13086 */                 case 45:
/* 13087 */                     /* --- function return or resume suspension --- */
/* 13088 */                     if ($ret && $ret.$isSuspension) {
/* 13089 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 12);
/* 13090 */                     }
/* 13091 */                     var $call665 = $ret;
/* 13092 */                     //
/* 13093 */                     // line 387:
/* 13094 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 13095 */                     //             ^
/* 13096 */                     //
/* 13097 */                     $currLineNo = 387;
/* 13098 */                     $currColNo = 12;
/* 13099 */ 
/* 13100 */ 
/* 13101 */                     //
/* 13102 */                     // line 389:
/* 13103 */                     //             schedule()
/* 13104 */                     //             ^
/* 13105 */                     //
/* 13106 */                     $currLineNo = 389;
/* 13107 */                     $currColNo = 12;
/* 13108 */ 
/* 13109 */                     var $loadgbl666 = Sk.misceval.loadname('schedule', $gbl);
/* 13110 */                     $ret;
/* 13111 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl666);
/* 13112 */                     $blk = 46; /* allowing case fallthrough */
/* 13113 */                 case 46:
/* 13114 */                     /* --- function return or resume suspension --- */
/* 13115 */                     if ($ret && $ret.$isSuspension) {
/* 13116 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 389, 12);
/* 13117 */                     }
/* 13118 */                     var $call667 = $ret;
/* 13119 */                     //
/* 13120 */                     // line 389:
/* 13121 */                     //             schedule()
/* 13122 */                     //             ^
/* 13123 */                     //
/* 13124 */                     $currLineNo = 389;
/* 13125 */                     $currColNo = 12;
/* 13126 */ 
/* 13127 */ 
/* 13128 */                     //
/* 13129 */                     // line 391:
/* 13130 */                     //             if taskWorkArea.holdCount == 9297 and taskWorkArea.qpktCount == 23246:
/* 13131 */                     //             ^
/* 13132 */                     //
/* 13133 */                     $currLineNo = 391;
/* 13134 */                     $currColNo = 12;
/* 13135 */ 
/* 13136 */                     var $loadgbl668 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 13137 */                     $ret = Sk.abstr.gattr($loadgbl668, 'holdCount', true);
/* 13138 */                     $blk = 50; /* allowing case fallthrough */
/* 13139 */                 case 50:
/* 13140 */                     /* --- function return or resume suspension --- */
/* 13141 */                     if ($ret && $ret.$isSuspension) {
/* 13142 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 15);
/* 13143 */                     }
/* 13144 */                     var $lattr669 = $ret;
/* 13145 */                     var $compareres670 = null;
/* 13146 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr669, new Sk.builtin.int_(9297), 'Eq', true));
/* 13147 */                     $blk = 52; /* allowing case fallthrough */
/* 13148 */                 case 52:
/* 13149 */                     /* --- function return or resume suspension --- */
/* 13150 */                     if ($ret && $ret.$isSuspension) {
/* 13151 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 15);
/* 13152 */                     }
/* 13153 */                     $compareres670 = $ret;
/* 13154 */                     var $jfalse671 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13155 */                     if ($jfalse671) { /*test failed */
/* 13156 */                         $blk = 51;
/* 13157 */                         continue;
/* 13158 */                     }
/* 13159 */                     $blk = 51; /* allowing case fallthrough */
/* 13160 */                 case 51:
/* 13161 */                     /* --- done --- */
/* 13162 */                     var $boolopsucc672 = $compareres670;
/* 13163 */                     $boolopsucc672 = $compareres670;
/* 13164 */                     var $jfalse673 = ($compareres670 === false || !Sk.misceval.isTrue($compareres670));
/* 13165 */                     if ($jfalse673) { /*test failed */
/* 13166 */                         $blk = 49;
/* 13167 */                         continue;
/* 13168 */                     }
/* 13169 */                     var $loadgbl674 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 13170 */                     $ret = Sk.abstr.gattr($loadgbl674, 'qpktCount', true);
/* 13171 */                     $blk = 53; /* allowing case fallthrough */
/* 13172 */                 case 53:
/* 13173 */                     /* --- function return or resume suspension --- */
/* 13174 */                     if ($ret && $ret.$isSuspension) {
/* 13175 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 50);
/* 13176 */                     }
/* 13177 */                     var $lattr675 = $ret;
/* 13178 */                     var $compareres676 = null;
/* 13179 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr675, new Sk.builtin.int_(23246), 'Eq', true));
/* 13180 */                     $blk = 55; /* allowing case fallthrough */
/* 13181 */                 case 55:
/* 13182 */                     /* --- function return or resume suspension --- */
/* 13183 */                     if ($ret && $ret.$isSuspension) {
/* 13184 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 50);
/* 13185 */                     }
/* 13186 */                     $compareres676 = $ret;
/* 13187 */                     var $jfalse677 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13188 */                     if ($jfalse677) { /*test failed */
/* 13189 */                         $blk = 54;
/* 13190 */                         continue;
/* 13191 */                     }
/* 13192 */                     $blk = 54; /* allowing case fallthrough */
/* 13193 */                 case 54:
/* 13194 */                     /* --- done --- */
/* 13195 */                     $boolopsucc672 = $compareres676;
/* 13196 */                     var $jfalse678 = ($compareres676 === false || !Sk.misceval.isTrue($compareres676));
/* 13197 */                     if ($jfalse678) { /*test failed */
/* 13198 */                         $blk = 49;
/* 13199 */                         continue;
/* 13200 */                     }
/* 13201 */                     $blk = 49; /* allowing case fallthrough */
/* 13202 */                 case 49:
/* 13203 */                     /* --- end of boolop --- */
/* 13204 */                     var $jfalse679 = ($boolopsucc672 === false || !Sk.misceval.isTrue($boolopsucc672));
/* 13205 */                     if ($jfalse679) { /*test failed */
/* 13206 */                         $blk = 48;
/* 13207 */                         continue;
/* 13208 */                     }
/* 13209 */                     //
/* 13210 */                     // line 392:
/* 13211 */                     //                 pass
/* 13212 */                     //                 ^
/* 13213 */                     //
/* 13214 */                     $currLineNo = 392;
/* 13215 */                     $currColNo = 16;
/* 13216 */ 
/* 13217 */                     $blk = 47; /* allowing case fallthrough */
/* 13218 */                 case 47:
/* 13219 */                     /* --- end of if --- */
/* 13220 */                     $blk = 1; /* jump */
/* 13221 */                     continue;
/* 13222 */                 case 2:
/* 13223 */                     /* --- for cleanup --- */
/* 13224 */                     $blk = 3; /* allowing case fallthrough */
/* 13225 */                 case 3:
/* 13226 */                     /* --- for end --- */
/* 13227 */                     //
/* 13228 */                     // line 396:
/* 13229 */                     //         return True
/* 13230 */                     //         ^
/* 13231 */                     //
/* 13232 */                     $currLineNo = 396;
/* 13233 */                     $currColNo = 8;
/* 13234 */ 
/* 13235 */                     return Sk.builtin.bool.true$;
/* 13236 */                     return Sk.builtin.none.none$;
/* 13237 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13238 */                 case 48:
/* 13239 */                     /* --- next branch of if --- */
/* 13240 */                     //
/* 13241 */                     // line 394:
/* 13242 */                     //                 return False
/* 13243 */                     //                 ^
/* 13244 */                     //
/* 13245 */                     $currLineNo = 394;
/* 13246 */                     $currColNo = 16;
/* 13247 */ 
/* 13248 */                     return Sk.builtin.bool.false$;
/* 13249 */                     $blk = 47; /* jump */
/* 13250 */                     continue;
/* 13251 */                 }
/* 13252 */             } catch (err) {
/* 13253 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13254 */                     err = new Sk.builtin.ExternalError(err);
/* 13255 */                 }
/* 13256 */                 err.traceback.push({
/* 13257 */                     lineno: $currLineNo,
/* 13258 */                     colno: $currColNo,
/* 13259 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 13260 */                 });
/* 13261 */                 if ($exc.length > 0) {
/* 13262 */                     $err = err;
/* 13263 */                     $blk = $exc.pop();
/* 13264 */                     continue;
/* 13265 */                 } else {
/* 13266 */                     throw err;
/* 13267 */                 }
/* 13268 */             }
/* 13269 */         }
/* 13270 */     });
/* 13271 */     var $scope682 = (function $entry_point683$(iterations) {
/* 13272 */         var endTime, r, result, startTime; /* locals */
/* 13273 */         var endTime, endTime, iterations, iterations, r, r, result, result, startTime, startTime, $loadgbl684, $loadgbl686, $loadgbl686, $lattr687, $lattr689, $loadgbl691, $loadgbl691, $lattr692;
/* 13274 */         var $wakeFromSuspension = function() {
/* 13275 */             var susp = $scope682.$wakingSuspension;
/* 13276 */             delete $scope682.$wakingSuspension;
/* 13277 */             $blk = susp.$blk;
/* 13278 */             $loc = susp.$loc;
/* 13279 */             $gbl = susp.$gbl;
/* 13280 */             $exc = susp.$exc;
/* 13281 */             $err = susp.$err;
/* 13282 */             $postfinally = susp.$postfinally;
/* 13283 */             $currLineNo = susp.$lineno;
/* 13284 */             $currColNo = susp.$colno;
/* 13285 */             Sk.lastYield = Date.now();
/* 13286 */             endTime = susp.$tmps.endTime;
/* 13287 */             iterations = susp.$tmps.iterations;
/* 13288 */             r = susp.$tmps.r;
/* 13289 */             result = susp.$tmps.result;
/* 13290 */             startTime = susp.$tmps.startTime;
/* 13291 */             $loadgbl684 = susp.$tmps.$loadgbl684;
/* 13292 */             $loadgbl686 = susp.$tmps.$loadgbl686;
/* 13293 */             $lattr687 = susp.$tmps.$lattr687;
/* 13294 */             $lattr689 = susp.$tmps.$lattr689;
/* 13295 */             $loadgbl691 = susp.$tmps.$loadgbl691;
/* 13296 */             $lattr692 = susp.$tmps.$lattr692;
/* 13297 */             try {
/* 13298 */                 $ret = susp.child.resume();
/* 13299 */             } catch (err) {
/* 13300 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13301 */                     err = new Sk.builtin.ExternalError(err);
/* 13302 */                 }
/* 13303 */                 err.traceback.push({
/* 13304 */                     lineno: $currLineNo,
/* 13305 */                     colno: $currColNo,
/* 13306 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 13307 */                 });
/* 13308 */                 if ($exc.length > 0) {
/* 13309 */                     $err = err;
/* 13310 */                     $blk = $exc.pop();
/* 13311 */                 } else {
/* 13312 */                     throw err;
/* 13313 */                 }
/* 13314 */             }
/* 13315 */         };
/* 13316 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13317 */             var susp = new Sk.misceval.Suspension();
/* 13318 */             susp.child = $child;
/* 13319 */             susp.resume = function() {
/* 13320 */                 $scope682.$wakingSuspension = susp;
/* 13321 */                 return $scope682();
/* 13322 */             };
/* 13323 */             susp.data = susp.child.data;
/* 13324 */             susp.$blk = $blk;
/* 13325 */             susp.$loc = $loc;
/* 13326 */             susp.$gbl = $gbl;
/* 13327 */             susp.$exc = $exc;
/* 13328 */             susp.$err = $err;
/* 13329 */             susp.$postfinally = $postfinally;
/* 13330 */             susp.$filename = $filename;
/* 13331 */             susp.$lineno = $lineno;
/* 13332 */             susp.$colno = $colno;
/* 13333 */             susp.optional = susp.child.optional;
/* 13334 */             susp.$tmps = {
/* 13335 */                 "endTime": endTime,
/* 13336 */                 "iterations": iterations,
/* 13337 */                 "r": r,
/* 13338 */                 "result": result,
/* 13339 */                 "startTime": startTime,
/* 13340 */                 "$loadgbl684": $loadgbl684,
/* 13341 */                 "$loadgbl686": $loadgbl686,
/* 13342 */                 "$lattr687": $lattr687,
/* 13343 */                 "$lattr689": $lattr689,
/* 13344 */                 "$loadgbl691": $loadgbl691,
/* 13345 */                 "$lattr692": $lattr692
/* 13346 */             };
/* 13347 */             return susp;
/* 13348 */         };
/* 13349 */         var $blk = 0,
/* 13350 */             $exc = [],
/* 13351 */             $loc = {},
/* 13352 */             $gbl = this,
/* 13353 */             $err = undefined,
/* 13354 */             $ret = undefined,
/* 13355 */             $postfinally = undefined,
/* 13356 */             $currLineNo = undefined,
/* 13357 */             $currColNo = undefined;
/* 13358 */         if (typeof Sk.execStart === 'undefined') {
/* 13359 */             Sk.execStart = Date.now()
/* 13360 */         }
/* 13361 */         if (typeof Sk.lastYield === 'undefined') {
/* 13362 */             Sk.lastYield = Date.now()
/* 13363 */         }
/* 13364 */         if ($scope682.$wakingSuspension !== undefined) {
/* 13365 */             $wakeFromSuspension();
/* 13366 */         } else {
/* 13367 */             Sk.builtin.pyCheckArgs("entry_point", arguments, 1, 1, false, false);
/* 13368 */         }
/* 13369 */         while (true) {
/* 13370 */             try {
/* 13371 */                 var $dateNow = Date.now();
/* 13372 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 13373 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 13374 */                 }
/* 13375 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 13376 */                     var $susp = $saveSuspension({
/* 13377 */                         data: {
/* 13378 */                             type: 'Sk.yield'
/* 13379 */                         },
/* 13380 */                         resume: function() {}
/* 13381 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 13382 */                     $susp.$blk = $blk;
/* 13383 */                     $susp.optional = true;
/* 13384 */                     return $susp;
/* 13385 */                 }
/* 13386 */                 switch ($blk) {
/* 13387 */                 case 0:
/* 13388 */                     /* --- codeobj entry --- */
/* 13389 */                     if (iterations === undefined) {
/* 13390 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 13391 */                     }
/* 13392 */ 
/* 13393 */                     //
/* 13394 */                     // line 399:
/* 13395 */                     //     r = Richards()
/* 13396 */                     //     ^
/* 13397 */                     //
/* 13398 */                     $currLineNo = 399;
/* 13399 */                     $currColNo = 4;
/* 13400 */ 
/* 13401 */                     var $loadgbl684 = Sk.misceval.loadname('Richards', $gbl);
/* 13402 */                     $ret;
/* 13403 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl684);
/* 13404 */                     $blk = 1; /* allowing case fallthrough */
/* 13405 */                 case 1:
/* 13406 */                     /* --- function return or resume suspension --- */
/* 13407 */                     if ($ret && $ret.$isSuspension) {
/* 13408 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 399, 8);
/* 13409 */                     }
/* 13410 */                     var $call685 = $ret;
/* 13411 */                     //
/* 13412 */                     // line 399:
/* 13413 */                     //     r = Richards()
/* 13414 */                     //         ^
/* 13415 */                     //
/* 13416 */                     $currLineNo = 399;
/* 13417 */                     $currColNo = 8;
/* 13418 */ 
/* 13419 */                     r = $call685;
/* 13420 */                     //
/* 13421 */                     // line 400:
/* 13422 */                     //     startTime = time.time()
/* 13423 */                     //     ^
/* 13424 */                     //
/* 13425 */                     $currLineNo = 400;
/* 13426 */                     $currColNo = 4;
/* 13427 */ 
/* 13428 */                     var $loadgbl686 = Sk.misceval.loadname('time', $gbl);
/* 13429 */                     $ret = Sk.abstr.gattr($loadgbl686, 'time', true);
/* 13430 */                     $blk = 2; /* allowing case fallthrough */
/* 13431 */                 case 2:
/* 13432 */                     /* --- function return or resume suspension --- */
/* 13433 */                     if ($ret && $ret.$isSuspension) {
/* 13434 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 400, 16);
/* 13435 */                     }
/* 13436 */                     var $lattr687 = $ret;
/* 13437 */                     $ret;
/* 13438 */                     $ret = Sk.misceval.callsimOrSuspend($lattr687);
/* 13439 */                     $blk = 3; /* allowing case fallthrough */
/* 13440 */                 case 3:
/* 13441 */                     /* --- function return or resume suspension --- */
/* 13442 */                     if ($ret && $ret.$isSuspension) {
/* 13443 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 400, 16);
/* 13444 */                     }
/* 13445 */                     var $call688 = $ret;
/* 13446 */                     //
/* 13447 */                     // line 400:
/* 13448 */                     //     startTime = time.time()
/* 13449 */                     //                 ^
/* 13450 */                     //
/* 13451 */                     $currLineNo = 400;
/* 13452 */                     $currColNo = 16;
/* 13453 */ 
/* 13454 */                     startTime = $call688;
/* 13455 */                     //
/* 13456 */                     // line 401:
/* 13457 */                     //     result = r.run(iterations)
/* 13458 */                     //     ^
/* 13459 */                     //
/* 13460 */                     $currLineNo = 401;
/* 13461 */                     $currColNo = 4;
/* 13462 */ 
/* 13463 */                     if (r === undefined) {
/* 13464 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 13465 */                     }
/* 13466 */                     $ret = Sk.abstr.gattr(r, 'run', true);
/* 13467 */                     $blk = 4; /* allowing case fallthrough */
/* 13468 */                 case 4:
/* 13469 */                     /* --- function return or resume suspension --- */
/* 13470 */                     if ($ret && $ret.$isSuspension) {
/* 13471 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 401, 13);
/* 13472 */                     }
/* 13473 */                     var $lattr689 = $ret;
/* 13474 */                     if (iterations === undefined) {
/* 13475 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 13476 */                     }
/* 13477 */                     $ret;
/* 13478 */                     $ret = Sk.misceval.callsimOrSuspend($lattr689, iterations);
/* 13479 */                     $blk = 5; /* allowing case fallthrough */
/* 13480 */                 case 5:
/* 13481 */                     /* --- function return or resume suspension --- */
/* 13482 */                     if ($ret && $ret.$isSuspension) {
/* 13483 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 401, 13);
/* 13484 */                     }
/* 13485 */                     var $call690 = $ret;
/* 13486 */                     //
/* 13487 */                     // line 401:
/* 13488 */                     //     result = r.run(iterations)
/* 13489 */                     //              ^
/* 13490 */                     //
/* 13491 */                     $currLineNo = 401;
/* 13492 */                     $currColNo = 13;
/* 13493 */ 
/* 13494 */                     result = $call690;
/* 13495 */                     //
/* 13496 */                     // line 402:
/* 13497 */                     //     endTime = time.time()
/* 13498 */                     //     ^
/* 13499 */                     //
/* 13500 */                     $currLineNo = 402;
/* 13501 */                     $currColNo = 4;
/* 13502 */ 
/* 13503 */                     var $loadgbl691 = Sk.misceval.loadname('time', $gbl);
/* 13504 */                     $ret = Sk.abstr.gattr($loadgbl691, 'time', true);
/* 13505 */                     $blk = 6; /* allowing case fallthrough */
/* 13506 */                 case 6:
/* 13507 */                     /* --- function return or resume suspension --- */
/* 13508 */                     if ($ret && $ret.$isSuspension) {
/* 13509 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 402, 14);
/* 13510 */                     }
/* 13511 */                     var $lattr692 = $ret;
/* 13512 */                     $ret;
/* 13513 */                     $ret = Sk.misceval.callsimOrSuspend($lattr692);
/* 13514 */                     $blk = 7; /* allowing case fallthrough */
/* 13515 */                 case 7:
/* 13516 */                     /* --- function return or resume suspension --- */
/* 13517 */                     if ($ret && $ret.$isSuspension) {
/* 13518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 402, 14);
/* 13519 */                     }
/* 13520 */                     var $call693 = $ret;
/* 13521 */                     //
/* 13522 */                     // line 402:
/* 13523 */                     //     endTime = time.time()
/* 13524 */                     //               ^
/* 13525 */                     //
/* 13526 */                     $currLineNo = 402;
/* 13527 */                     $currColNo = 14;
/* 13528 */ 
/* 13529 */                     endTime = $call693;
/* 13530 */                     //
/* 13531 */                     // line 403:
/* 13532 */                     //     return result, startTime, endTime
/* 13533 */                     //     ^
/* 13534 */                     //
/* 13535 */                     $currLineNo = 403;
/* 13536 */                     $currColNo = 4;
/* 13537 */ 
/* 13538 */                     if (result === undefined) {
/* 13539 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 13540 */                     }
/* 13541 */                     var $elem694 = result;
/* 13542 */                     if (startTime === undefined) {
/* 13543 */                         throw new Sk.builtin.UnboundLocalError('local variable \'startTime\' referenced before assignment');
/* 13544 */                     }
/* 13545 */                     var $elem695 = startTime;
/* 13546 */                     if (endTime === undefined) {
/* 13547 */                         throw new Sk.builtin.UnboundLocalError('local variable \'endTime\' referenced before assignment');
/* 13548 */                     }
/* 13549 */                     var $elem696 = endTime;
/* 13550 */                     var $loadtuple697 = new Sk.builtins['tuple']([$elem694, $elem695, $elem696]);
/* 13551 */                     return $loadtuple697;
/* 13552 */                     return Sk.builtin.none.none$;
/* 13553 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13554 */                 }
/* 13555 */             } catch (err) {
/* 13556 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13557 */                     err = new Sk.builtin.ExternalError(err);
/* 13558 */                 }
/* 13559 */                 err.traceback.push({
/* 13560 */                     lineno: $currLineNo,
/* 13561 */                     colno: $currColNo,
/* 13562 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 13563 */                 });
/* 13564 */                 if ($exc.length > 0) {
/* 13565 */                     $err = err;
/* 13566 */                     $blk = $exc.pop();
/* 13567 */                     continue;
/* 13568 */                 } else {
/* 13569 */                     throw err;
/* 13570 */                 }
/* 13571 */             }
/* 13572 */         }
/* 13573 */     });
/* 13574 */     var $scope700 = (function $main701$(entry_point, iterations) {
/* 13575 */         var endTime, result, startTime, total_s; /* locals */
/* 13576 */         var endTime, endTime, entry_point, entry_point, entry_point, iterations, iterations, iterations, result, result, startTime, startTime, total_s;
/* 13577 */         var $wakeFromSuspension = function() {
/* 13578 */             var susp = $scope700.$wakingSuspension;
/* 13579 */             delete $scope700.$wakingSuspension;
/* 13580 */             $blk = susp.$blk;
/* 13581 */             $loc = susp.$loc;
/* 13582 */             $gbl = susp.$gbl;
/* 13583 */             $exc = susp.$exc;
/* 13584 */             $err = susp.$err;
/* 13585 */             $postfinally = susp.$postfinally;
/* 13586 */             $currLineNo = susp.$lineno;
/* 13587 */             $currColNo = susp.$colno;
/* 13588 */             Sk.lastYield = Date.now();
/* 13589 */             endTime = susp.$tmps.endTime;
/* 13590 */             entry_point = susp.$tmps.entry_point;
/* 13591 */             iterations = susp.$tmps.iterations;
/* 13592 */             result = susp.$tmps.result;
/* 13593 */             startTime = susp.$tmps.startTime;
/* 13594 */             total_s = susp.$tmps.total_s;
/* 13595 */             try {
/* 13596 */                 $ret = susp.child.resume();
/* 13597 */             } catch (err) {
/* 13598 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13599 */                     err = new Sk.builtin.ExternalError(err);
/* 13600 */                 }
/* 13601 */                 err.traceback.push({
/* 13602 */                     lineno: $currLineNo,
/* 13603 */                     colno: $currColNo,
/* 13604 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 13605 */                 });
/* 13606 */                 if ($exc.length > 0) {
/* 13607 */                     $err = err;
/* 13608 */                     $blk = $exc.pop();
/* 13609 */                 } else {
/* 13610 */                     throw err;
/* 13611 */                 }
/* 13612 */             }
/* 13613 */         };
/* 13614 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13615 */             var susp = new Sk.misceval.Suspension();
/* 13616 */             susp.child = $child;
/* 13617 */             susp.resume = function() {
/* 13618 */                 $scope700.$wakingSuspension = susp;
/* 13619 */                 return $scope700();
/* 13620 */             };
/* 13621 */             susp.data = susp.child.data;
/* 13622 */             susp.$blk = $blk;
/* 13623 */             susp.$loc = $loc;
/* 13624 */             susp.$gbl = $gbl;
/* 13625 */             susp.$exc = $exc;
/* 13626 */             susp.$err = $err;
/* 13627 */             susp.$postfinally = $postfinally;
/* 13628 */             susp.$filename = $filename;
/* 13629 */             susp.$lineno = $lineno;
/* 13630 */             susp.$colno = $colno;
/* 13631 */             susp.optional = susp.child.optional;
/* 13632 */             susp.$tmps = {
/* 13633 */                 "endTime": endTime,
/* 13634 */                 "entry_point": entry_point,
/* 13635 */                 "iterations": iterations,
/* 13636 */                 "result": result,
/* 13637 */                 "startTime": startTime,
/* 13638 */                 "total_s": total_s
/* 13639 */             };
/* 13640 */             return susp;
/* 13641 */         };
/* 13642 */         var $blk = 0,
/* 13643 */             $exc = [],
/* 13644 */             $loc = {},
/* 13645 */             $gbl = this,
/* 13646 */             $err = undefined,
/* 13647 */             $ret = undefined,
/* 13648 */             $postfinally = undefined,
/* 13649 */             $currLineNo = undefined,
/* 13650 */             $currColNo = undefined;
/* 13651 */         if (typeof Sk.execStart === 'undefined') {
/* 13652 */             Sk.execStart = Date.now()
/* 13653 */         }
/* 13654 */         if (typeof Sk.lastYield === 'undefined') {
/* 13655 */             Sk.lastYield = Date.now()
/* 13656 */         }
/* 13657 */         if ($scope700.$wakingSuspension !== undefined) {
/* 13658 */             $wakeFromSuspension();
/* 13659 */         } else {
/* 13660 */             if (entry_point === undefined) entry_point = $scope700.$defaults[0];
/* 13661 */             if (iterations === undefined) iterations = $scope700.$defaults[1];
/* 13662 */             Sk.builtin.pyCheckArgs("main", arguments, 0, 2, false, false);
/* 13663 */         }
/* 13664 */         while (true) {
/* 13665 */             try {
/* 13666 */                 var $dateNow = Date.now();
/* 13667 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/* 13668 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 13669 */                 }
/* 13670 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 13671 */                     var $susp = $saveSuspension({
/* 13672 */                         data: {
/* 13673 */                             type: 'Sk.yield'
/* 13674 */                         },
/* 13675 */                         resume: function() {}
/* 13676 */                     }, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 13677 */                     $susp.$blk = $blk;
/* 13678 */                     $susp.optional = true;
/* 13679 */                     return $susp;
/* 13680 */                 }
/* 13681 */                 switch ($blk) {
/* 13682 */                 case 0:
/* 13683 */                     /* --- codeobj entry --- */
/* 13684 */                     if (entry_point === undefined) {
/* 13685 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 13686 */                     }
/* 13687 */                     if (iterations === undefined) {
/* 13688 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 13689 */                     }
/* 13690 */                     if (entry_point === undefined) {
/* 13691 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 13692 */                     }
/* 13693 */                     if (iterations === undefined) {
/* 13694 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 13695 */                     }
/* 13696 */ 
/* 13697 */                     //
/* 13698 */                     // line 406:
/* 13699 */                     //     pass #print("Richards benchmark (Python) starting... [%r]",entry_point)
/* 13700 */                     //     ^
/* 13701 */                     //
/* 13702 */                     $currLineNo = 406;
/* 13703 */                     $currColNo = 4;
/* 13704 */ 
/* 13705 */ 
/* 13706 */                     //
/* 13707 */                     // line 407:
/* 13708 */                     //     result, startTime, endTime = entry_point(iterations)
/* 13709 */                     //     ^
/* 13710 */                     //
/* 13711 */                     $currLineNo = 407;
/* 13712 */                     $currColNo = 4;
/* 13713 */ 
/* 13714 */                     if (entry_point === undefined) {
/* 13715 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 13716 */                     }
/* 13717 */                     if (iterations === undefined) {
/* 13718 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 13719 */                     }
/* 13720 */                     $ret;
/* 13721 */                     $ret = Sk.misceval.callsimOrSuspend(entry_point, iterations);
/* 13722 */                     $blk = 1; /* allowing case fallthrough */
/* 13723 */                 case 1:
/* 13724 */                     /* --- function return or resume suspension --- */
/* 13725 */                     if ($ret && $ret.$isSuspension) {
/* 13726 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 407, 33);
/* 13727 */                     }
/* 13728 */                     var $call702 = $ret;
/* 13729 */                     //
/* 13730 */                     // line 407:
/* 13731 */                     //     result, startTime, endTime = entry_point(iterations)
/* 13732 */                     //                                  ^
/* 13733 */                     //
/* 13734 */                     $currLineNo = 407;
/* 13735 */                     $currColNo = 33;
/* 13736 */ 
/* 13737 */                     var $items703 = Sk.abstr.sequenceUnpack($call702, 3);
/* 13738 */                     result = $items703[0];
/* 13739 */                     startTime = $items703[1];
/* 13740 */                     endTime = $items703[2];
/* 13741 */                     //
/* 13742 */                     // line 408:
/* 13743 */                     //     if not result:
/* 13744 */                     //     ^
/* 13745 */                     //
/* 13746 */                     $currLineNo = 408;
/* 13747 */                     $currColNo = 4;
/* 13748 */ 
/* 13749 */                     if (result === undefined) {
/* 13750 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 13751 */                     }
/* 13752 */                     var $unaryop704 = Sk.abstr.numberUnaryOp(result, 'Not');
/* 13753 */                     var $jfalse705 = ($unaryop704 === false || !Sk.misceval.isTrue($unaryop704));
/* 13754 */                     if ($jfalse705) { /*test failed */
/* 13755 */                         $blk = 2;
/* 13756 */                         continue;
/* 13757 */                     }
/* 13758 */                     //
/* 13759 */                     // line 409:
/* 13760 */                     //         pass #print("Incorrect results!")
/* 13761 */                     //         ^
/* 13762 */                     //
/* 13763 */                     $currLineNo = 409;
/* 13764 */                     $currColNo = 8;
/* 13765 */ 
/* 13766 */ 
/* 13767 */                     //
/* 13768 */                     // line 410:
/* 13769 */                     //         return -1
/* 13770 */                     //         ^
/* 13771 */                     //
/* 13772 */                     $currLineNo = 410;
/* 13773 */                     $currColNo = 8;
/* 13774 */ 
/* 13775 */                     return new Sk.builtin.int_(-1);
/* 13776 */                     $blk = 2; /* allowing case fallthrough */
/* 13777 */                 case 2:
/* 13778 */                     /* --- end of if --- */
/* 13779 */                     //
/* 13780 */                     // line 411:
/* 13781 */                     //     pass #print("finished.")
/* 13782 */                     //     ^
/* 13783 */                     //
/* 13784 */                     $currLineNo = 411;
/* 13785 */                     $currColNo = 4;
/* 13786 */ 
/* 13787 */ 
/* 13788 */                     //
/* 13789 */                     // line 412:
/* 13790 */                     //     total_s = endTime - startTime
/* 13791 */                     //     ^
/* 13792 */                     //
/* 13793 */                     $currLineNo = 412;
/* 13794 */                     $currColNo = 4;
/* 13795 */ 
/* 13796 */                     if (endTime === undefined) {
/* 13797 */                         throw new Sk.builtin.UnboundLocalError('local variable \'endTime\' referenced before assignment');
/* 13798 */                     }
/* 13799 */                     if (startTime === undefined) {
/* 13800 */                         throw new Sk.builtin.UnboundLocalError('local variable \'startTime\' referenced before assignment');
/* 13801 */                     }
/* 13802 */                     var $binop706 = Sk.abstr.numberBinOp(endTime, startTime, 'Sub');
/* 13803 */                     total_s = $binop706;
/* 13804 */                     //
/* 13805 */                     // line 413:
/* 13806 */                     //     pass #print("Total time for %d iterations: %.2f secs",iterations,total_s)
/* 13807 */                     //     ^
/* 13808 */                     //
/* 13809 */                     $currLineNo = 413;
/* 13810 */                     $currColNo = 4;
/* 13811 */ 
/* 13812 */ 
/* 13813 */                     //
/* 13814 */                     // line 414:
/* 13815 */                     //     pass #print("Average time per iteration: %.2f ms",total_s*1000/iterations)
/* 13816 */                     //     ^
/* 13817 */                     //
/* 13818 */                     $currLineNo = 414;
/* 13819 */                     $currColNo = 4;
/* 13820 */ 
/* 13821 */ 
/* 13822 */                     //
/* 13823 */                     // line 415:
/* 13824 */                     //     return 42
/* 13825 */                     //     ^
/* 13826 */                     //
/* 13827 */                     $currLineNo = 415;
/* 13828 */                     $currColNo = 4;
/* 13829 */ 
/* 13830 */                     return new Sk.builtin.int_(42);
/* 13831 */                     return Sk.builtin.none.none$;
/* 13832 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13833 */                 }
/* 13834 */             } catch (err) {
/* 13835 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13836 */                     err = new Sk.builtin.ExternalError(err);
/* 13837 */                 }
/* 13838 */                 err.traceback.push({
/* 13839 */                     lineno: $currLineNo,
/* 13840 */                     colno: $currColNo,
/* 13841 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 13842 */                 });
/* 13843 */                 if ($exc.length > 0) {
/* 13844 */                     $err = err;
/* 13845 */                     $blk = $exc.pop();
/* 13846 */                     continue;
/* 13847 */                 } else {
/* 13848 */                     throw err;
/* 13849 */                 }
/* 13850 */             }
/* 13851 */         }
/* 13852 */     });
/* 13853 */     return $scope120;
/* 13854 */ }();
