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
/*    86 */         if ($scope120.$wakingSuspension !== undefined) {
/*    87 */             $wakeFromSuspension();
/*    88 */         }
/*    89 */         if (Sk.retainGlobals) {
/*    90 */             if (Sk.globals) {
/*    91 */                 $gbl = Sk.globals;
/*    92 */                 Sk.globals = $gbl;
/*    93 */                 $loc = $gbl;
/*    94 */             } else {
/*    95 */                 Sk.globals = $gbl;
/*    96 */             }
/*    97 */         } else {
/*    98 */             Sk.globals = $gbl;
/*    99 */         }
/*   100 */         while (true) {
/*   101 */             try {
/*   102 */                 switch ($blk) {
/*   103 */                 case 0:
/*   104 */                     /* --- module entry --- */
/*   105 */                     //
/*   106 */                     // line 11:
/*   107 */                     // I_IDLE = 1
/*   108 */                     // ^
/*   109 */                     //
/*   110 */                     $currLineNo = 11;
/*   111 */                     $currColNo = 0;
/*   112 */ 
/*   113 */                     $loc.I_IDLE = new Sk.builtin.int_(1);
/*   114 */                     //
/*   115 */                     // line 12:
/*   116 */                     // I_WORK = 2
/*   117 */                     // ^
/*   118 */                     //
/*   119 */                     $currLineNo = 12;
/*   120 */                     $currColNo = 0;
/*   121 */ 
/*   122 */                     $loc.I_WORK = new Sk.builtin.int_(2);
/*   123 */                     //
/*   124 */                     // line 13:
/*   125 */                     // I_HANDLERA = 3
/*   126 */                     // ^
/*   127 */                     //
/*   128 */                     $currLineNo = 13;
/*   129 */                     $currColNo = 0;
/*   130 */ 
/*   131 */                     $loc.I_HANDLERA = new Sk.builtin.int_(3);
/*   132 */                     //
/*   133 */                     // line 14:
/*   134 */                     // I_HANDLERB = 4
/*   135 */                     // ^
/*   136 */                     //
/*   137 */                     $currLineNo = 14;
/*   138 */                     $currColNo = 0;
/*   139 */ 
/*   140 */                     $loc.I_HANDLERB = new Sk.builtin.int_(4);
/*   141 */                     //
/*   142 */                     // line 15:
/*   143 */                     // I_DEVA = 5
/*   144 */                     // ^
/*   145 */                     //
/*   146 */                     $currLineNo = 15;
/*   147 */                     $currColNo = 0;
/*   148 */ 
/*   149 */                     $loc.I_DEVA = new Sk.builtin.int_(5);
/*   150 */                     //
/*   151 */                     // line 16:
/*   152 */                     // I_DEVB = 6
/*   153 */                     // ^
/*   154 */                     //
/*   155 */                     $currLineNo = 16;
/*   156 */                     $currColNo = 0;
/*   157 */ 
/*   158 */                     $loc.I_DEVB = new Sk.builtin.int_(6);
/*   159 */                     //
/*   160 */                     // line 19:
/*   161 */                     // K_DEV = 1000
/*   162 */                     // ^
/*   163 */                     //
/*   164 */                     $currLineNo = 19;
/*   165 */                     $currColNo = 0;
/*   166 */ 
/*   167 */                     $loc.K_DEV = new Sk.builtin.int_(1000);
/*   168 */                     //
/*   169 */                     // line 20:
/*   170 */                     // K_WORK = 1001
/*   171 */                     // ^
/*   172 */                     //
/*   173 */                     $currLineNo = 20;
/*   174 */                     $currColNo = 0;
/*   175 */ 
/*   176 */                     $loc.K_WORK = new Sk.builtin.int_(1001);
/*   177 */                     //
/*   178 */                     // line 24:
/*   179 */                     // BUFSIZE = 4
/*   180 */                     // ^
/*   181 */                     //
/*   182 */                     $currLineNo = 24;
/*   183 */                     $currColNo = 0;
/*   184 */ 
/*   185 */                     $loc.BUFSIZE = new Sk.builtin.int_(4);
/*   186 */                     //
/*   187 */                     // line 26:
/*   188 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   189 */                     // ^
/*   190 */                     //
/*   191 */                     $currLineNo = 26;
/*   192 */                     $currColNo = 0;
/*   193 */ 
/*   194 */                     var $loadname121 = $loc.list !== undefined ? $loc.list : Sk.misceval.loadname('list', $gbl);;
/*   195 */                     var $loadname122 = $loc.range !== undefined ? $loc.range : Sk.misceval.loadname('range', $gbl);;
/*   196 */                     var $loadname123 = $loc.BUFSIZE !== undefined ? $loc.BUFSIZE : Sk.misceval.loadname('BUFSIZE', $gbl);;
/*   197 */                     $ret;
/*   198 */                     $ret = Sk.misceval.callsimOrSuspend($loadname122, $loadname123);
/*   199 */                     $blk = 1; /* allowing case fallthrough */
/*   200 */                 case 1:
/*   201 */                     /* --- function return or resume suspension --- */
/*   202 */                     if ($ret && $ret.$isSuspension) {
/*   203 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 26, 21);
/*   204 */                     }
/*   205 */                     var $call124 = $ret;
/*   206 */                     //
/*   207 */                     // line 26:
/*   208 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   209 */                     //                      ^
/*   210 */                     //
/*   211 */                     $currLineNo = 26;
/*   212 */                     $currColNo = 21;
/*   213 */ 
/*   214 */                     $ret;
/*   215 */                     $ret = Sk.misceval.callsimOrSuspend($loadname121, $call124);
/*   216 */                     $blk = 2; /* allowing case fallthrough */
/*   217 */                 case 2:
/*   218 */                     /* --- function return or resume suspension --- */
/*   219 */                     if ($ret && $ret.$isSuspension) {
/*   220 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 26, 16);
/*   221 */                     }
/*   222 */                     var $call125 = $ret;
/*   223 */                     //
/*   224 */                     // line 26:
/*   225 */                     // BUFSIZE_RANGE = list(range(BUFSIZE))
/*   226 */                     //                 ^
/*   227 */                     //
/*   228 */                     $currLineNo = 26;
/*   229 */                     $currColNo = 16;
/*   230 */ 
/*   231 */                     $loc.BUFSIZE_RANGE = $call125;
/*   232 */                     //
/*   233 */                     // line 28:
/*   234 */                     // class Packet(object):
/*   235 */                     // ^
/*   236 */                     //
/*   237 */                     $currLineNo = 28;
/*   238 */                     $currColNo = 0;
/*   239 */ 
/*   240 */                     var $loadname126 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   241 */                     $scope127.co_name = new Sk.builtins['str']('Packet');
/*   242 */                     var $built146 = Sk.misceval.buildClass($gbl, $scope127, 'Packet', [$loadname126]);
/*   243 */                     $loc.Packet = $built146;
/*   244 */                     //
/*   245 */                     // line 51:
/*   246 */                     // class TaskRec(object):
/*   247 */                     // ^
/*   248 */                     //
/*   249 */                     $currLineNo = 51;
/*   250 */                     $currColNo = 0;
/*   251 */ 
/*   252 */                     var $loadname147 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   253 */                     $scope148.co_name = new Sk.builtins['str']('TaskRec');
/*   254 */                     var $built149 = Sk.misceval.buildClass($gbl, $scope148, 'TaskRec', [$loadname147]);
/*   255 */                     $loc.TaskRec = $built149;
/*   256 */                     //
/*   257 */                     // line 54:
/*   258 */                     // class DeviceTaskRec(TaskRec):
/*   259 */                     // ^
/*   260 */                     //
/*   261 */                     $currLineNo = 54;
/*   262 */                     $currColNo = 0;
/*   263 */ 
/*   264 */                     var $loadname150 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   265 */                     $scope151.co_name = new Sk.builtins['str']('DeviceTaskRec');
/*   266 */                     var $built155 = Sk.misceval.buildClass($gbl, $scope151, 'DeviceTaskRec', [$loadname150]);
/*   267 */                     $loc.DeviceTaskRec = $built155;
/*   268 */                     //
/*   269 */                     // line 58:
/*   270 */                     // class IdleTaskRec(TaskRec):
/*   271 */                     // ^
/*   272 */                     //
/*   273 */                     $currLineNo = 58;
/*   274 */                     $currColNo = 0;
/*   275 */ 
/*   276 */                     var $loadname156 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   277 */                     $scope157.co_name = new Sk.builtins['str']('IdleTaskRec');
/*   278 */                     var $built161 = Sk.misceval.buildClass($gbl, $scope157, 'IdleTaskRec', [$loadname156]);
/*   279 */                     $loc.IdleTaskRec = $built161;
/*   280 */                     //
/*   281 */                     // line 63:
/*   282 */                     // class HandlerTaskRec(TaskRec):
/*   283 */                     // ^
/*   284 */                     //
/*   285 */                     $currLineNo = 63;
/*   286 */                     $currColNo = 0;
/*   287 */ 
/*   288 */                     var $loadname162 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   289 */                     $scope163.co_name = new Sk.builtins['str']('HandlerTaskRec');
/*   290 */                     var $built181 = Sk.misceval.buildClass($gbl, $scope163, 'HandlerTaskRec', [$loadname162]);
/*   291 */                     $loc.HandlerTaskRec = $built181;
/*   292 */                     //
/*   293 */                     // line 76:
/*   294 */                     // class WorkerTaskRec(TaskRec):
/*   295 */                     // ^
/*   296 */                     //
/*   297 */                     $currLineNo = 76;
/*   298 */                     $currColNo = 0;
/*   299 */ 
/*   300 */                     var $loadname182 = $loc.TaskRec !== undefined ? $loc.TaskRec : Sk.misceval.loadname('TaskRec', $gbl);;
/*   301 */                     $scope183.co_name = new Sk.builtins['str']('WorkerTaskRec');
/*   302 */                     var $built188 = Sk.misceval.buildClass($gbl, $scope183, 'WorkerTaskRec', [$loadname182]);
/*   303 */                     $loc.WorkerTaskRec = $built188;
/*   304 */                     //
/*   305 */                     // line 82:
/*   306 */                     // class TaskState(object):
/*   307 */                     // ^
/*   308 */                     //
/*   309 */                     $currLineNo = 82;
/*   310 */                     $currColNo = 0;
/*   311 */ 
/*   312 */                     var $loadname189 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   313 */                     $scope190.co_name = new Sk.builtins['str']('TaskState');
/*   314 */                     var $built242 = Sk.misceval.buildClass($gbl, $scope190, 'TaskState', [$loadname189]);
/*   315 */                     $loc.TaskState = $built242;
/*   316 */                     //
/*   317 */                     // line 131:
/*   318 */                     // tracing = False
/*   319 */                     // ^
/*   320 */                     //
/*   321 */                     $currLineNo = 131;
/*   322 */                     $currColNo = 0;
/*   323 */ 
/*   324 */                     $loc.tracing = Sk.builtin.bool.false$;
/*   325 */                     //
/*   326 */                     // line 132:
/*   327 */                     // layout = 0
/*   328 */                     // ^
/*   329 */                     //
/*   330 */                     $currLineNo = 132;
/*   331 */                     $currColNo = 0;
/*   332 */ 
/*   333 */                     $gbl.layout = new Sk.builtin.int_(0);
/*   334 */                     //
/*   335 */                     // line 134:
/*   336 */                     // def trace(a):
/*   337 */                     // ^
/*   338 */                     //
/*   339 */                     $currLineNo = 134;
/*   340 */                     $currColNo = 0;
/*   341 */ 
/*   342 */                     $scope243.co_name = new Sk.builtins['str']('trace');
/*   343 */                     $scope243.co_varnames = ['a'];
/*   344 */                     var $funcobj251 = new Sk.builtins['function']($scope243, $gbl);
/*   345 */                     $loc.trace = $funcobj251;
/*   346 */                     //
/*   347 */                     // line 143:
/*   348 */                     // TASKTABSIZE = 10
/*   349 */                     // ^
/*   350 */                     //
/*   351 */                     $currLineNo = 143;
/*   352 */                     $currColNo = 0;
/*   353 */ 
/*   354 */                     $loc.TASKTABSIZE = new Sk.builtin.int_(10);
/*   355 */                     //
/*   356 */                     // line 145:
/*   357 */                     // class TaskWorkArea(object):
/*   358 */                     // ^
/*   359 */                     //
/*   360 */                     $currLineNo = 145;
/*   361 */                     $currColNo = 0;
/*   362 */ 
/*   363 */                     var $loadname252 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   364 */                     $scope253.co_name = new Sk.builtins['str']('TaskWorkArea');
/*   365 */                     var $built261 = Sk.misceval.buildClass($gbl, $scope253, 'TaskWorkArea', [$loadname252]);
/*   366 */                     $loc.TaskWorkArea = $built261;
/*   367 */                     //
/*   368 */                     // line 154:
/*   369 */                     // taskWorkArea = TaskWorkArea()
/*   370 */                     // ^
/*   371 */                     //
/*   372 */                     $currLineNo = 154;
/*   373 */                     $currColNo = 0;
/*   374 */ 
/*   375 */                     var $loadname262 = $loc.TaskWorkArea !== undefined ? $loc.TaskWorkArea : Sk.misceval.loadname('TaskWorkArea', $gbl);;
/*   376 */                     $ret;
/*   377 */                     $ret = Sk.misceval.callsimOrSuspend($loadname262);
/*   378 */                     $blk = 3; /* allowing case fallthrough */
/*   379 */                 case 3:
/*   380 */                     /* --- function return or resume suspension --- */
/*   381 */                     if ($ret && $ret.$isSuspension) {
/*   382 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 154, 15);
/*   383 */                     }
/*   384 */                     var $call263 = $ret;
/*   385 */                     //
/*   386 */                     // line 154:
/*   387 */                     // taskWorkArea = TaskWorkArea()
/*   388 */                     //                ^
/*   389 */                     //
/*   390 */                     $currLineNo = 154;
/*   391 */                     $currColNo = 15;
/*   392 */ 
/*   393 */                     $loc.taskWorkArea = $call263;
/*   394 */                     //
/*   395 */                     // line 156:
/*   396 */                     // class Task(TaskState):
/*   397 */                     // ^
/*   398 */                     //
/*   399 */                     $currLineNo = 156;
/*   400 */                     $currColNo = 0;
/*   401 */ 
/*   402 */                     var $loadname264 = $loc.TaskState !== undefined ? $loc.TaskState : Sk.misceval.loadname('TaskState', $gbl);;
/*   403 */                     $scope265.co_name = new Sk.builtins['str']('Task');
/*   404 */                     var $built364 = Sk.misceval.buildClass($gbl, $scope265, 'Task', [$loadname264]);
/*   405 */                     $loc.Task = $built364;
/*   406 */                     //
/*   407 */                     // line 241:
/*   408 */                     // class DeviceTask(Task):
/*   409 */                     // ^
/*   410 */                     //
/*   411 */                     $currLineNo = 241;
/*   412 */                     $currColNo = 0;
/*   413 */ 
/*   414 */                     var $loadname365 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   415 */                     $scope366.co_name = new Sk.builtins['str']('DeviceTask');
/*   416 */                     var $built398 = Sk.misceval.buildClass($gbl, $scope366, 'DeviceTask', [$loadname365]);
/*   417 */                     $loc.DeviceTask = $built398;
/*   418 */                     //
/*   419 */                     // line 262:
/*   420 */                     // class HandlerTask(Task):
/*   421 */                     // ^
/*   422 */                     //
/*   423 */                     $currLineNo = 262;
/*   424 */                     $currColNo = 0;
/*   425 */ 
/*   426 */                     var $loadname399 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   427 */                     $scope400.co_name = new Sk.builtins['str']('HandlerTask');
/*   428 */                     var $built452 = Sk.misceval.buildClass($gbl, $scope400, 'HandlerTask', [$loadname399]);
/*   429 */                     $loc.HandlerTask = $built452;
/*   430 */                     //
/*   431 */                     // line 294:
/*   432 */                     // class IdleTask(Task):
/*   433 */                     // ^
/*   434 */                     //
/*   435 */                     $currLineNo = 294;
/*   436 */                     $currColNo = 0;
/*   437 */ 
/*   438 */                     var $loadname453 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   439 */                     $scope454.co_name = new Sk.builtins['str']('IdleTask');
/*   440 */                     var $built496 = Sk.misceval.buildClass($gbl, $scope454, 'IdleTask', [$loadname453]);
/*   441 */                     $loc.IdleTask = $built496;
/*   442 */                     //
/*   443 */                     // line 315:
/*   444 */                     // A = ord('A')
/*   445 */                     // ^
/*   446 */                     //
/*   447 */                     $currLineNo = 315;
/*   448 */                     $currColNo = 0;
/*   449 */ 
/*   450 */                     var $loadname497 = $loc.ord !== undefined ? $loc.ord : Sk.misceval.loadname('ord', $gbl);;
/*   451 */                     var $str498 = new Sk.builtins['str']('A');
/*   452 */                     $ret;
/*   453 */                     $ret = Sk.misceval.callsimOrSuspend($loadname497, $str498);
/*   454 */                     $blk = 4; /* allowing case fallthrough */
/*   455 */                 case 4:
/*   456 */                     /* --- function return or resume suspension --- */
/*   457 */                     if ($ret && $ret.$isSuspension) {
/*   458 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 315, 4);
/*   459 */                     }
/*   460 */                     var $call499 = $ret;
/*   461 */                     //
/*   462 */                     // line 315:
/*   463 */                     // A = ord('A')
/*   464 */                     //     ^
/*   465 */                     //
/*   466 */                     $currLineNo = 315;
/*   467 */                     $currColNo = 4;
/*   468 */ 
/*   469 */                     $loc.A = $call499;
/*   470 */                     //
/*   471 */                     // line 317:
/*   472 */                     // class WorkTask(Task):
/*   473 */                     // ^
/*   474 */                     //
/*   475 */                     $currLineNo = 317;
/*   476 */                     $currColNo = 0;
/*   477 */ 
/*   478 */                     var $loadname500 = $loc.Task !== undefined ? $loc.Task : Sk.misceval.loadname('Task', $gbl);;
/*   479 */                     $scope501.co_name = new Sk.builtins['str']('WorkTask');
/*   480 */                     var $built543 = Sk.misceval.buildClass($gbl, $scope501, 'WorkTask', [$loadname500]);
/*   481 */                     $loc.WorkTask = $built543;
/*   482 */                     //
/*   483 */                     // line 344:
/*   484 */                     // import time
/*   485 */                     // ^
/*   486 */                     //
/*   487 */                     $currLineNo = 344;
/*   488 */                     $currColNo = 0;
/*   489 */ 
/*   490 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   491 */                     $blk = 5; /* allowing case fallthrough */
/*   492 */                 case 5:
/*   493 */                     /* --- function return or resume suspension --- */
/*   494 */                     if ($ret && $ret.$isSuspension) {
/*   495 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 344, 0);
/*   496 */                     }
/*   497 */                     var $module544 = $ret;
/*   498 */                     $loc.time = $module544;
/*   499 */                     //
/*   500 */                     // line 348:
/*   501 */                     // def schedule():
/*   502 */                     // ^
/*   503 */                     //
/*   504 */                     $currLineNo = 348;
/*   505 */                     $currColNo = 0;
/*   506 */ 
/*   507 */                     $scope545.co_name = new Sk.builtins['str']('schedule');
/*   508 */                     var $funcobj571 = new Sk.builtins['function']($scope545, $gbl);
/*   509 */                     $loc.schedule = $funcobj571;
/*   510 */                     //
/*   511 */                     // line 362:
/*   512 */                     // class Richards(object):
/*   513 */                     // ^
/*   514 */                     //
/*   515 */                     $currLineNo = 362;
/*   516 */                     $currColNo = 0;
/*   517 */ 
/*   518 */                     var $loadname572 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   519 */                     $scope573.co_name = new Sk.builtins['str']('Richards');
/*   520 */                     var $built681 = Sk.misceval.buildClass($gbl, $scope573, 'Richards', [$loadname572]);
/*   521 */                     $loc.Richards = $built681;
/*   522 */                     //
/*   523 */                     // line 398:
/*   524 */                     // def entry_point(iterations):
/*   525 */                     // ^
/*   526 */                     //
/*   527 */                     $currLineNo = 398;
/*   528 */                     $currColNo = 0;
/*   529 */ 
/*   530 */                     $scope682.co_name = new Sk.builtins['str']('entry_point');
/*   531 */                     $scope682.co_varnames = ['iterations'];
/*   532 */                     var $funcobj698 = new Sk.builtins['function']($scope682, $gbl);
/*   533 */                     $loc.entry_point = $funcobj698;
/*   534 */                     //
/*   535 */                     // line 405:
/*   536 */                     // def main(entry_point = entry_point, iterations = 10):
/*   537 */                     // ^
/*   538 */                     //
/*   539 */                     $currLineNo = 405;
/*   540 */                     $currColNo = 0;
/*   541 */ 
/*   542 */                     var $loadname699 = $loc.entry_point !== undefined ? $loc.entry_point : Sk.misceval.loadname('entry_point', $gbl);;
/*   543 */                     $scope700.co_name = new Sk.builtins['str']('main');
/*   544 */                     $scope700.$defaults = [$loadname699, new Sk.builtin.int_(10)];
/*   545 */                     $scope700.co_varnames = ['entry_point', 'iterations'];
/*   546 */                     var $funcobj707 = new Sk.builtins['function']($scope700, $gbl);
/*   547 */                     $loc.main = $funcobj707;
/*   548 */                     //
/*   549 */                     // line 418:
/*   550 */                     // main(entry_point, 10)
/*   551 */                     // ^
/*   552 */                     //
/*   553 */                     $currLineNo = 418;
/*   554 */                     $currColNo = 0;
/*   555 */ 
/*   556 */                     var $loadname708 = $loc.main !== undefined ? $loc.main : Sk.misceval.loadname('main', $gbl);;
/*   557 */                     var $loadname709 = $loc.entry_point !== undefined ? $loc.entry_point : Sk.misceval.loadname('entry_point', $gbl);;
/*   558 */                     $ret;
/*   559 */                     $ret = Sk.misceval.callsimOrSuspend($loadname708, $loadname709, new Sk.builtin.int_(10));
/*   560 */                     $blk = 6; /* allowing case fallthrough */
/*   561 */                 case 6:
/*   562 */                     /* --- function return or resume suspension --- */
/*   563 */                     if ($ret && $ret.$isSuspension) {
/*   564 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 418, 0);
/*   565 */                     }
/*   566 */                     var $call710 = $ret;
/*   567 */                     //
/*   568 */                     // line 418:
/*   569 */                     // main(entry_point, 10)
/*   570 */                     // ^
/*   571 */                     //
/*   572 */                     $currLineNo = 418;
/*   573 */                     $currColNo = 0;
/*   574 */ 
/*   575 */                     return $loc;
/*   576 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   577 */                 }
/*   578 */             } catch (err) {
/*   579 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   580 */                     err = new Sk.builtin.ExternalError(err);
/*   581 */                 }
/*   582 */                 err.traceback.push({
/*   583 */                     lineno: $currLineNo,
/*   584 */                     colno: $currColNo,
/*   585 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   586 */                 });
/*   587 */                 if ($exc.length > 0) {
/*   588 */                     $err = err;
/*   589 */                     $blk = $exc.pop();
/*   590 */                     continue;
/*   591 */                 } else {
/*   592 */                     throw err;
/*   593 */                 }
/*   594 */             }
/*   595 */         }
/*   596 */     });
/*   597 */     var $scope127 = (function $Packet$class_outer($globals, $locals, $rest) {
/*   598 */         var $gbl = $globals,
/*   599 */             $loc = $locals;
/*   600 */         (function $Packet$_closure() {
/*   601 */             var $blk = 0,
/*   602 */                 $exc = [],
/*   603 */                 $ret = undefined,
/*   604 */                 $postfinally = undefined,
/*   605 */                 $currLineNo = undefined,
/*   606 */                 $currColNo = undefined;
/*   607 */             while (true) {
/*   608 */                 try {
/*   609 */                     switch ($blk) {
/*   610 */                     case 0:
/*   611 */                         /* --- class entry --- */
/*   612 */                         //
/*   613 */                         // line 29:
/*   614 */                         //     def __init__(self,l,i,k):
/*   615 */                         //     ^
/*   616 */                         //
/*   617 */                         $currLineNo = 29;
/*   618 */                         $currColNo = 4;
/*   619 */ 
/*   620 */                         $scope128.co_name = new Sk.builtins['str']('__init__');
/*   621 */                         $scope128.co_varnames = ['self', 'l', 'i', 'k'];
/*   622 */                         var $funcobj134 = new Sk.builtins['function']($scope128, $gbl);
/*   623 */                         $loc.__init__ = $funcobj134;
/*   624 */                         //
/*   625 */                         // line 36:
/*   626 */                         //     def append_to(self,lst):
/*   627 */                         //     ^
/*   628 */                         //
/*   629 */                         $currLineNo = 36;
/*   630 */                         $currColNo = 4;
/*   631 */ 
/*   632 */                         $scope135.co_name = new Sk.builtins['str']('append_to');
/*   633 */                         $scope135.co_varnames = ['self', 'lst'];
/*   634 */                         var $funcobj145 = new Sk.builtins['function']($scope135, $gbl);
/*   635 */                         $loc.append_to = $funcobj145;
/*   636 */                         return;
/*   637 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   638 */                     }
/*   639 */                 } catch (err) {
/*   640 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   641 */                         err = new Sk.builtin.ExternalError(err);
/*   642 */                     }
/*   643 */                     err.traceback.push({
/*   644 */                         lineno: $currLineNo,
/*   645 */                         colno: $currColNo,
/*   646 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   647 */                     });
/*   648 */                     if ($exc.length > 0) {
/*   649 */                         $err = err;
/*   650 */                         $blk = $exc.pop();
/*   651 */                         continue;
/*   652 */                     } else {
/*   653 */                         throw err;
/*   654 */                     }
/*   655 */                 }
/*   656 */             }
/*   657 */         }).apply(null, $rest);
/*   658 */     });
/*   659 */     var $scope128 = (function $__init__129$(self, l, i, k) {
/*   660 */         var i, i, k, k, l, l, self, self, self, self, self, self, $elem130, $loadlist131, $loadgbl132, $binop133;
/*   661 */         var $wakeFromSuspension = function() {
/*   662 */             var susp = $scope128.$wakingSuspension;
/*   663 */             delete $scope128.$wakingSuspension;
/*   664 */             $blk = susp.$blk;
/*   665 */             $loc = susp.$loc;
/*   666 */             $gbl = susp.$gbl;
/*   667 */             $exc = susp.$exc;
/*   668 */             $err = susp.$err;
/*   669 */             $postfinally = susp.$postfinally;
/*   670 */             $currLineNo = susp.$lineno;
/*   671 */             $currColNo = susp.$colno;
/*   672 */             Sk.lastYield = Date.now();
/*   673 */             i = susp.$tmps.i;
/*   674 */             k = susp.$tmps.k;
/*   675 */             l = susp.$tmps.l;
/*   676 */             self = susp.$tmps.self;
/*   677 */             $elem130 = susp.$tmps.$elem130;
/*   678 */             $loadlist131 = susp.$tmps.$loadlist131;
/*   679 */             $loadgbl132 = susp.$tmps.$loadgbl132;
/*   680 */             $binop133 = susp.$tmps.$binop133;
/*   681 */             try {
/*   682 */                 $ret = susp.child.resume();
/*   683 */             } catch (err) {
/*   684 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   685 */                     err = new Sk.builtin.ExternalError(err);
/*   686 */                 }
/*   687 */                 err.traceback.push({
/*   688 */                     lineno: $currLineNo,
/*   689 */                     colno: $currColNo,
/*   690 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   691 */                 });
/*   692 */                 if ($exc.length > 0) {
/*   693 */                     $err = err;
/*   694 */                     $blk = $exc.pop();
/*   695 */                 } else {
/*   696 */                     throw err;
/*   697 */                 }
/*   698 */             }
/*   699 */         };
/*   700 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   701 */             var susp = new Sk.misceval.Suspension();
/*   702 */             susp.child = $child;
/*   703 */             susp.resume = function() {
/*   704 */                 $scope128.$wakingSuspension = susp;
/*   705 */                 return $scope128();
/*   706 */             };
/*   707 */             susp.data = susp.child.data;
/*   708 */             susp.$blk = $blk;
/*   709 */             susp.$loc = $loc;
/*   710 */             susp.$gbl = $gbl;
/*   711 */             susp.$exc = $exc;
/*   712 */             susp.$err = $err;
/*   713 */             susp.$postfinally = $postfinally;
/*   714 */             susp.$filename = $filename;
/*   715 */             susp.$lineno = $lineno;
/*   716 */             susp.$colno = $colno;
/*   717 */             susp.optional = susp.child.optional;
/*   718 */             susp.$tmps = {
/*   719 */                 "i": i,
/*   720 */                 "k": k,
/*   721 */                 "l": l,
/*   722 */                 "self": self,
/*   723 */                 "$elem130": $elem130,
/*   724 */                 "$loadlist131": $loadlist131,
/*   725 */                 "$loadgbl132": $loadgbl132,
/*   726 */                 "$binop133": $binop133
/*   727 */             };
/*   728 */             return susp;
/*   729 */         };
/*   730 */         var $blk = 0,
/*   731 */             $exc = [],
/*   732 */             $loc = {},
/*   733 */             $gbl = this,
/*   734 */             $err = undefined,
/*   735 */             $ret = undefined,
/*   736 */             $postfinally = undefined,
/*   737 */             $currLineNo = undefined,
/*   738 */             $currColNo = undefined;
/*   739 */         if ($scope128.$wakingSuspension !== undefined) {
/*   740 */             $wakeFromSuspension();
/*   741 */         } else {
/*   742 */             Sk.builtin.pyCheckArgs("__init__", arguments, 4, 4, false, false);
/*   743 */         }
/*   744 */         while (true) {
/*   745 */             try {
/*   746 */                 switch ($blk) {
/*   747 */                 case 0:
/*   748 */                     /* --- codeobj entry --- */
/*   749 */                     if (self === undefined) {
/*   750 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   751 */                     }
/*   752 */                     if (l === undefined) {
/*   753 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   754 */                     }
/*   755 */                     if (i === undefined) {
/*   756 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   757 */                     }
/*   758 */                     if (k === undefined) {
/*   759 */                         throw new Sk.builtin.UnboundLocalError('local variable \'k\' referenced before assignment');
/*   760 */                     }
/*   761 */ 
/*   762 */                     //
/*   763 */                     // line 30:
/*   764 */                     //         self.link = l
/*   765 */                     //         ^
/*   766 */                     //
/*   767 */                     $currLineNo = 30;
/*   768 */                     $currColNo = 8;
/*   769 */ 
/*   770 */                     if (l === undefined) {
/*   771 */                         throw new Sk.builtin.UnboundLocalError('local variable \'l\' referenced before assignment');
/*   772 */                     }
/*   773 */                     if (self === undefined) {
/*   774 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   775 */                     }
/*   776 */                     $ret = Sk.abstr.sattr(self, 'link', l, true);
/*   777 */                     $blk = 1; /* allowing case fallthrough */
/*   778 */                 case 1:
/*   779 */                     /* --- function return or resume suspension --- */
/*   780 */                     if ($ret && $ret.$isSuspension) {
/*   781 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 30, 8);
/*   782 */                     }
/*   783 */                     //
/*   784 */                     // line 31:
/*   785 */                     //         self.ident = i
/*   786 */                     //         ^
/*   787 */                     //
/*   788 */                     $currLineNo = 31;
/*   789 */                     $currColNo = 8;
/*   790 */ 
/*   791 */                     if (i === undefined) {
/*   792 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*   793 */                     }
/*   794 */                     if (self === undefined) {
/*   795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   796 */                     }
/*   797 */                     $ret = Sk.abstr.sattr(self, 'ident', i, true);
/*   798 */                     $blk = 2; /* allowing case fallthrough */
/*   799 */                 case 2:
/*   800 */                     /* --- function return or resume suspension --- */
/*   801 */                     if ($ret && $ret.$isSuspension) {
/*   802 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 31, 8);
/*   803 */                     }
/*   804 */                     //
/*   805 */                     // line 32:
/*   806 */                     //         self.kind = k
/*   807 */                     //         ^
/*   808 */                     //
/*   809 */                     $currLineNo = 32;
/*   810 */                     $currColNo = 8;
/*   811 */ 
/*   812 */                     if (k === undefined) {
/*   813 */                         throw new Sk.builtin.UnboundLocalError('local variable \'k\' referenced before assignment');
/*   814 */                     }
/*   815 */                     if (self === undefined) {
/*   816 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   817 */                     }
/*   818 */                     $ret = Sk.abstr.sattr(self, 'kind', k, true);
/*   819 */                     $blk = 3; /* allowing case fallthrough */
/*   820 */                 case 3:
/*   821 */                     /* --- function return or resume suspension --- */
/*   822 */                     if ($ret && $ret.$isSuspension) {
/*   823 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 32, 8);
/*   824 */                     }
/*   825 */                     //
/*   826 */                     // line 33:
/*   827 */                     //         self.datum = 0
/*   828 */                     //         ^
/*   829 */                     //
/*   830 */                     $currLineNo = 33;
/*   831 */                     $currColNo = 8;
/*   832 */ 
/*   833 */                     if (self === undefined) {
/*   834 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   835 */                     }
/*   836 */                     $ret = Sk.abstr.sattr(self, 'datum', new Sk.builtin.int_(0), true);
/*   837 */                     $blk = 4; /* allowing case fallthrough */
/*   838 */                 case 4:
/*   839 */                     /* --- function return or resume suspension --- */
/*   840 */                     if ($ret && $ret.$isSuspension) {
/*   841 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 33, 8);
/*   842 */                     }
/*   843 */                     //
/*   844 */                     // line 34:
/*   845 */                     //         self.data = [0] * BUFSIZE
/*   846 */                     //         ^
/*   847 */                     //
/*   848 */                     $currLineNo = 34;
/*   849 */                     $currColNo = 8;
/*   850 */ 
/*   851 */                     var $elem130 = new Sk.builtin.int_(0);
/*   852 */                     var $loadlist131 = new Sk.builtins['list']([$elem130]);
/*   853 */                     var $loadgbl132 = Sk.misceval.loadname('BUFSIZE', $gbl);
/*   854 */                     var $binop133 = Sk.abstr.numberBinOp($loadlist131, $loadgbl132, 'Mult');
/*   855 */                     if (self === undefined) {
/*   856 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   857 */                     }
/*   858 */                     $ret = Sk.abstr.sattr(self, 'data', $binop133, true);
/*   859 */                     $blk = 5; /* allowing case fallthrough */
/*   860 */                 case 5:
/*   861 */                     /* --- function return or resume suspension --- */
/*   862 */                     if ($ret && $ret.$isSuspension) {
/*   863 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 34, 8);
/*   864 */                     }
/*   865 */                     return Sk.builtin.none.none$;
/*   866 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   867 */                 }
/*   868 */             } catch (err) {
/*   869 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   870 */                     err = new Sk.builtin.ExternalError(err);
/*   871 */                 }
/*   872 */                 err.traceback.push({
/*   873 */                     lineno: $currLineNo,
/*   874 */                     colno: $currColNo,
/*   875 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   876 */                 });
/*   877 */                 if ($exc.length > 0) {
/*   878 */                     $err = err;
/*   879 */                     $blk = $exc.pop();
/*   880 */                     continue;
/*   881 */                 } else {
/*   882 */                     throw err;
/*   883 */                 }
/*   884 */             }
/*   885 */         }
/*   886 */     });
/*   887 */     var $scope135 = (function $append_to136$(self, lst) {
/*   888 */         var next, p; /* locals */
/*   889 */         var lst, lst, lst, lst, next, next, next, next, p, p, p, p, p, self, self, self, self, $compareres137, $compareres141;
/*   890 */         var $wakeFromSuspension = function() {
/*   891 */             var susp = $scope135.$wakingSuspension;
/*   892 */             delete $scope135.$wakingSuspension;
/*   893 */             $blk = susp.$blk;
/*   894 */             $loc = susp.$loc;
/*   895 */             $gbl = susp.$gbl;
/*   896 */             $exc = susp.$exc;
/*   897 */             $err = susp.$err;
/*   898 */             $postfinally = susp.$postfinally;
/*   899 */             $currLineNo = susp.$lineno;
/*   900 */             $currColNo = susp.$colno;
/*   901 */             Sk.lastYield = Date.now();
/*   902 */             lst = susp.$tmps.lst;
/*   903 */             next = susp.$tmps.next;
/*   904 */             p = susp.$tmps.p;
/*   905 */             self = susp.$tmps.self;
/*   906 */             $compareres137 = susp.$tmps.$compareres137;
/*   907 */             $compareres141 = susp.$tmps.$compareres141;
/*   908 */             try {
/*   909 */                 $ret = susp.child.resume();
/*   910 */             } catch (err) {
/*   911 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   912 */                     err = new Sk.builtin.ExternalError(err);
/*   913 */                 }
/*   914 */                 err.traceback.push({
/*   915 */                     lineno: $currLineNo,
/*   916 */                     colno: $currColNo,
/*   917 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*   918 */                 });
/*   919 */                 if ($exc.length > 0) {
/*   920 */                     $err = err;
/*   921 */                     $blk = $exc.pop();
/*   922 */                 } else {
/*   923 */                     throw err;
/*   924 */                 }
/*   925 */             }
/*   926 */         };
/*   927 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   928 */             var susp = new Sk.misceval.Suspension();
/*   929 */             susp.child = $child;
/*   930 */             susp.resume = function() {
/*   931 */                 $scope135.$wakingSuspension = susp;
/*   932 */                 return $scope135();
/*   933 */             };
/*   934 */             susp.data = susp.child.data;
/*   935 */             susp.$blk = $blk;
/*   936 */             susp.$loc = $loc;
/*   937 */             susp.$gbl = $gbl;
/*   938 */             susp.$exc = $exc;
/*   939 */             susp.$err = $err;
/*   940 */             susp.$postfinally = $postfinally;
/*   941 */             susp.$filename = $filename;
/*   942 */             susp.$lineno = $lineno;
/*   943 */             susp.$colno = $colno;
/*   944 */             susp.optional = susp.child.optional;
/*   945 */             susp.$tmps = {
/*   946 */                 "lst": lst,
/*   947 */                 "next": next,
/*   948 */                 "p": p,
/*   949 */                 "self": self,
/*   950 */                 "$compareres137": $compareres137,
/*   951 */                 "$compareres141": $compareres141
/*   952 */             };
/*   953 */             return susp;
/*   954 */         };
/*   955 */         var $blk = 0,
/*   956 */             $exc = [],
/*   957 */             $loc = {},
/*   958 */             $gbl = this,
/*   959 */             $err = undefined,
/*   960 */             $ret = undefined,
/*   961 */             $postfinally = undefined,
/*   962 */             $currLineNo = undefined,
/*   963 */             $currColNo = undefined;
/*   964 */         if ($scope135.$wakingSuspension !== undefined) {
/*   965 */             $wakeFromSuspension();
/*   966 */         } else {
/*   967 */             Sk.builtin.pyCheckArgs("append_to", arguments, 2, 2, false, false);
/*   968 */         }
/*   969 */         while (true) {
/*   970 */             try {
/*   971 */                 switch ($blk) {
/*   972 */                 case 0:
/*   973 */                     /* --- codeobj entry --- */
/*   974 */                     if (self === undefined) {
/*   975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   976 */                     }
/*   977 */                     if (lst === undefined) {
/*   978 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*   979 */                     }
/*   980 */ 
/*   981 */                     //
/*   982 */                     // line 37:
/*   983 */                     //         self.link = None
/*   984 */                     //         ^
/*   985 */                     //
/*   986 */                     $currLineNo = 37;
/*   987 */                     $currColNo = 8;
/*   988 */ 
/*   989 */                     if (self === undefined) {
/*   990 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   991 */                     }
/*   992 */                     $ret = Sk.abstr.sattr(self, 'link', Sk.builtin.none.none$, true);
/*   993 */                     $blk = 1; /* allowing case fallthrough */
/*   994 */                 case 1:
/*   995 */                     /* --- function return or resume suspension --- */
/*   996 */                     if ($ret && $ret.$isSuspension) {
/*   997 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 37, 8);
/*   998 */                     }
/*   999 */                     //
/*  1000 */                     // line 38:
/*  1001 */                     //         if lst is None:
/*  1002 */                     //         ^
/*  1003 */                     //
/*  1004 */                     $currLineNo = 38;
/*  1005 */                     $currColNo = 8;
/*  1006 */ 
/*  1007 */                     if (lst === undefined) {
/*  1008 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1009 */                     }
/*  1010 */                     var $compareres137 = null;
/*  1011 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(lst, Sk.builtin.none.none$, 'Is', true));
/*  1012 */                     $blk = 5; /* allowing case fallthrough */
/*  1013 */                 case 5:
/*  1014 */                     /* --- function return or resume suspension --- */
/*  1015 */                     if ($ret && $ret.$isSuspension) {
/*  1016 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 38, 11);
/*  1017 */                     }
/*  1018 */                     $compareres137 = $ret;
/*  1019 */                     var $jfalse138 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1020 */                     if ($jfalse138) { /*test failed */
/*  1021 */                         $blk = 4;
/*  1022 */                         continue;
/*  1023 */                     }
/*  1024 */                     $blk = 4; /* allowing case fallthrough */
/*  1025 */                 case 4:
/*  1026 */                     /* --- done --- */
/*  1027 */                     var $jfalse139 = ($compareres137 === false || !Sk.misceval.isTrue($compareres137));
/*  1028 */                     if ($jfalse139) { /*test failed */
/*  1029 */                         $blk = 3;
/*  1030 */                         continue;
/*  1031 */                     }
/*  1032 */                     //
/*  1033 */                     // line 39:
/*  1034 */                     //             return self
/*  1035 */                     //             ^
/*  1036 */                     //
/*  1037 */                     $currLineNo = 39;
/*  1038 */                     $currColNo = 12;
/*  1039 */ 
/*  1040 */                     if (self === undefined) {
/*  1041 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1042 */                     }
/*  1043 */                     return self;
/*  1044 */                     $blk = 2; /* allowing case fallthrough */
/*  1045 */                 case 2:
/*  1046 */                     /* --- end of if --- */
/*  1047 */                     return Sk.builtin.none.none$;
/*  1048 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1049 */                 case 3:
/*  1050 */                     /* --- next branch of if --- */
/*  1051 */                     //
/*  1052 */                     // line 41:
/*  1053 */                     //             p = lst
/*  1054 */                     //             ^
/*  1055 */                     //
/*  1056 */                     $currLineNo = 41;
/*  1057 */                     $currColNo = 12;
/*  1058 */ 
/*  1059 */                     if (lst === undefined) {
/*  1060 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1061 */                     }
/*  1062 */                     p = lst;
/*  1063 */                     //
/*  1064 */                     // line 42:
/*  1065 */                     //             next = p.link
/*  1066 */                     //             ^
/*  1067 */                     //
/*  1068 */                     $currLineNo = 42;
/*  1069 */                     $currColNo = 12;
/*  1070 */ 
/*  1071 */                     if (p === undefined) {
/*  1072 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1073 */                     }
/*  1074 */                     $ret = Sk.abstr.gattr(p, 'link', true);
/*  1075 */                     $blk = 6; /* allowing case fallthrough */
/*  1076 */                 case 6:
/*  1077 */                     /* --- function return or resume suspension --- */
/*  1078 */                     if ($ret && $ret.$isSuspension) {
/*  1079 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 42, 19);
/*  1080 */                     }
/*  1081 */                     var $lattr140 = $ret;
/*  1082 */                     next = $lattr140;
/*  1083 */                     //
/*  1084 */                     // line 43:
/*  1085 */                     //             while next is not None:
/*  1086 */                     //             ^
/*  1087 */                     //
/*  1088 */                     $currLineNo = 43;
/*  1089 */                     $currColNo = 12;
/*  1090 */ 
/*  1091 */                     $blk = 7; /* allowing case fallthrough */
/*  1092 */                 case 7:
/*  1093 */                     /* --- while test --- */
/*  1094 */                     //
/*  1095 */                     // line 43:
/*  1096 */                     //             while next is not None:
/*  1097 */                     //             ^
/*  1098 */                     //
/*  1099 */                     $currLineNo = 43;
/*  1100 */                     $currColNo = 12;
/*  1101 */ 
/*  1102 */                     if (next === undefined) {
/*  1103 */                         throw new Sk.builtin.UnboundLocalError('local variable \'next\' referenced before assignment');
/*  1104 */                     }
/*  1105 */                     var $compareres141 = null;
/*  1106 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(next, Sk.builtin.none.none$, 'IsNot', true));
/*  1107 */                     $blk = 11; /* allowing case fallthrough */
/*  1108 */                 case 11:
/*  1109 */                     /* --- function return or resume suspension --- */
/*  1110 */                     if ($ret && $ret.$isSuspension) {
/*  1111 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 43, 18);
/*  1112 */                     }
/*  1113 */                     $compareres141 = $ret;
/*  1114 */                     var $jfalse142 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1115 */                     if ($jfalse142) { /*test failed */
/*  1116 */                         $blk = 10;
/*  1117 */                         continue;
/*  1118 */                     }
/*  1119 */                     $blk = 10; /* allowing case fallthrough */
/*  1120 */                 case 10:
/*  1121 */                     /* --- done --- */
/*  1122 */                     var $jfalse143 = ($compareres141 === false || !Sk.misceval.isTrue($compareres141));
/*  1123 */                     if ($jfalse143) { /*test failed */
/*  1124 */                         $blk = 8;
/*  1125 */                         continue;
/*  1126 */                     }
/*  1127 */                     $blk = 9; /* allowing case fallthrough */
/*  1128 */                 case 9:
/*  1129 */                     /* --- while body --- */
/*  1130 */                     //
/*  1131 */                     // line 44:
/*  1132 */                     //                 p = next
/*  1133 */                     //                 ^
/*  1134 */                     //
/*  1135 */                     $currLineNo = 44;
/*  1136 */                     $currColNo = 16;
/*  1137 */ 
/*  1138 */                     if (next === undefined) {
/*  1139 */                         throw new Sk.builtin.UnboundLocalError('local variable \'next\' referenced before assignment');
/*  1140 */                     }
/*  1141 */                     p = next;
/*  1142 */                     //
/*  1143 */                     // line 45:
/*  1144 */                     //                 next = p.link
/*  1145 */                     //                 ^
/*  1146 */                     //
/*  1147 */                     $currLineNo = 45;
/*  1148 */                     $currColNo = 16;
/*  1149 */ 
/*  1150 */                     if (p === undefined) {
/*  1151 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1152 */                     }
/*  1153 */                     $ret = Sk.abstr.gattr(p, 'link', true);
/*  1154 */                     $blk = 12; /* allowing case fallthrough */
/*  1155 */                 case 12:
/*  1156 */                     /* --- function return or resume suspension --- */
/*  1157 */                     if ($ret && $ret.$isSuspension) {
/*  1158 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 45, 23);
/*  1159 */                     }
/*  1160 */                     var $lattr144 = $ret;
/*  1161 */                     next = $lattr144;
/*  1162 */                     $blk = 7; /* jump */
/*  1163 */                     continue;
/*  1164 */                 case 8:
/*  1165 */                     /* --- after while --- */
/*  1166 */                     //
/*  1167 */                     // line 46:
/*  1168 */                     //             p.link = self
/*  1169 */                     //             ^
/*  1170 */                     //
/*  1171 */                     $currLineNo = 46;
/*  1172 */                     $currColNo = 12;
/*  1173 */ 
/*  1174 */                     if (self === undefined) {
/*  1175 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1176 */                     }
/*  1177 */                     if (p === undefined) {
/*  1178 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1179 */                     }
/*  1180 */                     $ret = Sk.abstr.sattr(p, 'link', self, true);
/*  1181 */                     $blk = 13; /* allowing case fallthrough */
/*  1182 */                 case 13:
/*  1183 */                     /* --- function return or resume suspension --- */
/*  1184 */                     if ($ret && $ret.$isSuspension) {
/*  1185 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 46, 12);
/*  1186 */                     }
/*  1187 */                     //
/*  1188 */                     // line 47:
/*  1189 */                     //             return lst
/*  1190 */                     //             ^
/*  1191 */                     //
/*  1192 */                     $currLineNo = 47;
/*  1193 */                     $currColNo = 12;
/*  1194 */ 
/*  1195 */                     if (lst === undefined) {
/*  1196 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lst\' referenced before assignment');
/*  1197 */                     }
/*  1198 */                     return lst;
/*  1199 */                     $blk = 2; /* jump */
/*  1200 */                     continue;
/*  1201 */                 }
/*  1202 */             } catch (err) {
/*  1203 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1204 */                     err = new Sk.builtin.ExternalError(err);
/*  1205 */                 }
/*  1206 */                 err.traceback.push({
/*  1207 */                     lineno: $currLineNo,
/*  1208 */                     colno: $currColNo,
/*  1209 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1210 */                 });
/*  1211 */                 if ($exc.length > 0) {
/*  1212 */                     $err = err;
/*  1213 */                     $blk = $exc.pop();
/*  1214 */                     continue;
/*  1215 */                 } else {
/*  1216 */                     throw err;
/*  1217 */                 }
/*  1218 */             }
/*  1219 */         }
/*  1220 */     });
/*  1221 */     var $scope148 = (function $TaskRec$class_outer($globals, $locals, $rest) {
/*  1222 */         var $gbl = $globals,
/*  1223 */             $loc = $locals;
/*  1224 */         (function $TaskRec$_closure() {
/*  1225 */             var $blk = 0,
/*  1226 */                 $exc = [],
/*  1227 */                 $ret = undefined,
/*  1228 */                 $postfinally = undefined,
/*  1229 */                 $currLineNo = undefined,
/*  1230 */                 $currColNo = undefined;
/*  1231 */             while (true) {
/*  1232 */                 try {
/*  1233 */                     switch ($blk) {
/*  1234 */                     case 0:
/*  1235 */                         /* --- class entry --- */
/*  1236 */                         //
/*  1237 */                         // line 52:
/*  1238 */                         //     pass
/*  1239 */                         //     ^
/*  1240 */                         //
/*  1241 */                         $currLineNo = 52;
/*  1242 */                         $currColNo = 4;
/*  1243 */ 
/*  1244 */                         return;
/*  1245 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1246 */                     }
/*  1247 */                 } catch (err) {
/*  1248 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1249 */                         err = new Sk.builtin.ExternalError(err);
/*  1250 */                     }
/*  1251 */                     err.traceback.push({
/*  1252 */                         lineno: $currLineNo,
/*  1253 */                         colno: $currColNo,
/*  1254 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1255 */                     });
/*  1256 */                     if ($exc.length > 0) {
/*  1257 */                         $err = err;
/*  1258 */                         $blk = $exc.pop();
/*  1259 */                         continue;
/*  1260 */                     } else {
/*  1261 */                         throw err;
/*  1262 */                     }
/*  1263 */                 }
/*  1264 */             }
/*  1265 */         }).apply(null, $rest);
/*  1266 */     });
/*  1267 */     var $scope151 = (function $DeviceTaskRec$class_outer($globals, $locals, $rest) {
/*  1268 */         var $gbl = $globals,
/*  1269 */             $loc = $locals;
/*  1270 */         (function $DeviceTaskRec$_closure() {
/*  1271 */             var $blk = 0,
/*  1272 */                 $exc = [],
/*  1273 */                 $ret = undefined,
/*  1274 */                 $postfinally = undefined,
/*  1275 */                 $currLineNo = undefined,
/*  1276 */                 $currColNo = undefined;
/*  1277 */             while (true) {
/*  1278 */                 try {
/*  1279 */                     switch ($blk) {
/*  1280 */                     case 0:
/*  1281 */                         /* --- class entry --- */
/*  1282 */                         //
/*  1283 */                         // line 55:
/*  1284 */                         //     def __init__(self):
/*  1285 */                         //     ^
/*  1286 */                         //
/*  1287 */                         $currLineNo = 55;
/*  1288 */                         $currColNo = 4;
/*  1289 */ 
/*  1290 */                         $scope152.co_name = new Sk.builtins['str']('__init__');
/*  1291 */                         $scope152.co_varnames = ['self'];
/*  1292 */                         var $funcobj154 = new Sk.builtins['function']($scope152, $gbl);
/*  1293 */                         $loc.__init__ = $funcobj154;
/*  1294 */                         return;
/*  1295 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1296 */                     }
/*  1297 */                 } catch (err) {
/*  1298 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1299 */                         err = new Sk.builtin.ExternalError(err);
/*  1300 */                     }
/*  1301 */                     err.traceback.push({
/*  1302 */                         lineno: $currLineNo,
/*  1303 */                         colno: $currColNo,
/*  1304 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1305 */                     });
/*  1306 */                     if ($exc.length > 0) {
/*  1307 */                         $err = err;
/*  1308 */                         $blk = $exc.pop();
/*  1309 */                         continue;
/*  1310 */                     } else {
/*  1311 */                         throw err;
/*  1312 */                     }
/*  1313 */                 }
/*  1314 */             }
/*  1315 */         }).apply(null, $rest);
/*  1316 */     });
/*  1317 */     var $scope152 = (function $__init__153$(self) {
/*  1318 */         var self, self;
/*  1319 */         var $wakeFromSuspension = function() {
/*  1320 */             var susp = $scope152.$wakingSuspension;
/*  1321 */             delete $scope152.$wakingSuspension;
/*  1322 */             $blk = susp.$blk;
/*  1323 */             $loc = susp.$loc;
/*  1324 */             $gbl = susp.$gbl;
/*  1325 */             $exc = susp.$exc;
/*  1326 */             $err = susp.$err;
/*  1327 */             $postfinally = susp.$postfinally;
/*  1328 */             $currLineNo = susp.$lineno;
/*  1329 */             $currColNo = susp.$colno;
/*  1330 */             Sk.lastYield = Date.now();
/*  1331 */             self = susp.$tmps.self;
/*  1332 */             try {
/*  1333 */                 $ret = susp.child.resume();
/*  1334 */             } catch (err) {
/*  1335 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1336 */                     err = new Sk.builtin.ExternalError(err);
/*  1337 */                 }
/*  1338 */                 err.traceback.push({
/*  1339 */                     lineno: $currLineNo,
/*  1340 */                     colno: $currColNo,
/*  1341 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1342 */                 });
/*  1343 */                 if ($exc.length > 0) {
/*  1344 */                     $err = err;
/*  1345 */                     $blk = $exc.pop();
/*  1346 */                 } else {
/*  1347 */                     throw err;
/*  1348 */                 }
/*  1349 */             }
/*  1350 */         };
/*  1351 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1352 */             var susp = new Sk.misceval.Suspension();
/*  1353 */             susp.child = $child;
/*  1354 */             susp.resume = function() {
/*  1355 */                 $scope152.$wakingSuspension = susp;
/*  1356 */                 return $scope152();
/*  1357 */             };
/*  1358 */             susp.data = susp.child.data;
/*  1359 */             susp.$blk = $blk;
/*  1360 */             susp.$loc = $loc;
/*  1361 */             susp.$gbl = $gbl;
/*  1362 */             susp.$exc = $exc;
/*  1363 */             susp.$err = $err;
/*  1364 */             susp.$postfinally = $postfinally;
/*  1365 */             susp.$filename = $filename;
/*  1366 */             susp.$lineno = $lineno;
/*  1367 */             susp.$colno = $colno;
/*  1368 */             susp.optional = susp.child.optional;
/*  1369 */             susp.$tmps = {
/*  1370 */                 "self": self
/*  1371 */             };
/*  1372 */             return susp;
/*  1373 */         };
/*  1374 */         var $blk = 0,
/*  1375 */             $exc = [],
/*  1376 */             $loc = {},
/*  1377 */             $gbl = this,
/*  1378 */             $err = undefined,
/*  1379 */             $ret = undefined,
/*  1380 */             $postfinally = undefined,
/*  1381 */             $currLineNo = undefined,
/*  1382 */             $currColNo = undefined;
/*  1383 */         if ($scope152.$wakingSuspension !== undefined) {
/*  1384 */             $wakeFromSuspension();
/*  1385 */         } else {
/*  1386 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1387 */         }
/*  1388 */         while (true) {
/*  1389 */             try {
/*  1390 */                 switch ($blk) {
/*  1391 */                 case 0:
/*  1392 */                     /* --- codeobj entry --- */
/*  1393 */                     if (self === undefined) {
/*  1394 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1395 */                     }
/*  1396 */ 
/*  1397 */                     //
/*  1398 */                     // line 56:
/*  1399 */                     //         self.pending = None
/*  1400 */                     //         ^
/*  1401 */                     //
/*  1402 */                     $currLineNo = 56;
/*  1403 */                     $currColNo = 8;
/*  1404 */ 
/*  1405 */                     if (self === undefined) {
/*  1406 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1407 */                     }
/*  1408 */                     $ret = Sk.abstr.sattr(self, 'pending', Sk.builtin.none.none$, true);
/*  1409 */                     $blk = 1; /* allowing case fallthrough */
/*  1410 */                 case 1:
/*  1411 */                     /* --- function return or resume suspension --- */
/*  1412 */                     if ($ret && $ret.$isSuspension) {
/*  1413 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 56, 8);
/*  1414 */                     }
/*  1415 */                     return Sk.builtin.none.none$;
/*  1416 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1417 */                 }
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
/*  1430 */                     continue;
/*  1431 */                 } else {
/*  1432 */                     throw err;
/*  1433 */                 }
/*  1434 */             }
/*  1435 */         }
/*  1436 */     });
/*  1437 */     var $scope157 = (function $IdleTaskRec$class_outer($globals, $locals, $rest) {
/*  1438 */         var $gbl = $globals,
/*  1439 */             $loc = $locals;
/*  1440 */         (function $IdleTaskRec$_closure() {
/*  1441 */             var $blk = 0,
/*  1442 */                 $exc = [],
/*  1443 */                 $ret = undefined,
/*  1444 */                 $postfinally = undefined,
/*  1445 */                 $currLineNo = undefined,
/*  1446 */                 $currColNo = undefined;
/*  1447 */             while (true) {
/*  1448 */                 try {
/*  1449 */                     switch ($blk) {
/*  1450 */                     case 0:
/*  1451 */                         /* --- class entry --- */
/*  1452 */                         //
/*  1453 */                         // line 59:
/*  1454 */                         //     def __init__(self):
/*  1455 */                         //     ^
/*  1456 */                         //
/*  1457 */                         $currLineNo = 59;
/*  1458 */                         $currColNo = 4;
/*  1459 */ 
/*  1460 */                         $scope158.co_name = new Sk.builtins['str']('__init__');
/*  1461 */                         $scope158.co_varnames = ['self'];
/*  1462 */                         var $funcobj160 = new Sk.builtins['function']($scope158, $gbl);
/*  1463 */                         $loc.__init__ = $funcobj160;
/*  1464 */                         return;
/*  1465 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1466 */                     }
/*  1467 */                 } catch (err) {
/*  1468 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1469 */                         err = new Sk.builtin.ExternalError(err);
/*  1470 */                     }
/*  1471 */                     err.traceback.push({
/*  1472 */                         lineno: $currLineNo,
/*  1473 */                         colno: $currColNo,
/*  1474 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1475 */                     });
/*  1476 */                     if ($exc.length > 0) {
/*  1477 */                         $err = err;
/*  1478 */                         $blk = $exc.pop();
/*  1479 */                         continue;
/*  1480 */                     } else {
/*  1481 */                         throw err;
/*  1482 */                     }
/*  1483 */                 }
/*  1484 */             }
/*  1485 */         }).apply(null, $rest);
/*  1486 */     });
/*  1487 */     var $scope158 = (function $__init__159$(self) {
/*  1488 */         var self, self, self;
/*  1489 */         var $wakeFromSuspension = function() {
/*  1490 */             var susp = $scope158.$wakingSuspension;
/*  1491 */             delete $scope158.$wakingSuspension;
/*  1492 */             $blk = susp.$blk;
/*  1493 */             $loc = susp.$loc;
/*  1494 */             $gbl = susp.$gbl;
/*  1495 */             $exc = susp.$exc;
/*  1496 */             $err = susp.$err;
/*  1497 */             $postfinally = susp.$postfinally;
/*  1498 */             $currLineNo = susp.$lineno;
/*  1499 */             $currColNo = susp.$colno;
/*  1500 */             Sk.lastYield = Date.now();
/*  1501 */             self = susp.$tmps.self;
/*  1502 */             try {
/*  1503 */                 $ret = susp.child.resume();
/*  1504 */             } catch (err) {
/*  1505 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1506 */                     err = new Sk.builtin.ExternalError(err);
/*  1507 */                 }
/*  1508 */                 err.traceback.push({
/*  1509 */                     lineno: $currLineNo,
/*  1510 */                     colno: $currColNo,
/*  1511 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1512 */                 });
/*  1513 */                 if ($exc.length > 0) {
/*  1514 */                     $err = err;
/*  1515 */                     $blk = $exc.pop();
/*  1516 */                 } else {
/*  1517 */                     throw err;
/*  1518 */                 }
/*  1519 */             }
/*  1520 */         };
/*  1521 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1522 */             var susp = new Sk.misceval.Suspension();
/*  1523 */             susp.child = $child;
/*  1524 */             susp.resume = function() {
/*  1525 */                 $scope158.$wakingSuspension = susp;
/*  1526 */                 return $scope158();
/*  1527 */             };
/*  1528 */             susp.data = susp.child.data;
/*  1529 */             susp.$blk = $blk;
/*  1530 */             susp.$loc = $loc;
/*  1531 */             susp.$gbl = $gbl;
/*  1532 */             susp.$exc = $exc;
/*  1533 */             susp.$err = $err;
/*  1534 */             susp.$postfinally = $postfinally;
/*  1535 */             susp.$filename = $filename;
/*  1536 */             susp.$lineno = $lineno;
/*  1537 */             susp.$colno = $colno;
/*  1538 */             susp.optional = susp.child.optional;
/*  1539 */             susp.$tmps = {
/*  1540 */                 "self": self
/*  1541 */             };
/*  1542 */             return susp;
/*  1543 */         };
/*  1544 */         var $blk = 0,
/*  1545 */             $exc = [],
/*  1546 */             $loc = {},
/*  1547 */             $gbl = this,
/*  1548 */             $err = undefined,
/*  1549 */             $ret = undefined,
/*  1550 */             $postfinally = undefined,
/*  1551 */             $currLineNo = undefined,
/*  1552 */             $currColNo = undefined;
/*  1553 */         if ($scope158.$wakingSuspension !== undefined) {
/*  1554 */             $wakeFromSuspension();
/*  1555 */         } else {
/*  1556 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1557 */         }
/*  1558 */         while (true) {
/*  1559 */             try {
/*  1560 */                 switch ($blk) {
/*  1561 */                 case 0:
/*  1562 */                     /* --- codeobj entry --- */
/*  1563 */                     if (self === undefined) {
/*  1564 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1565 */                     }
/*  1566 */ 
/*  1567 */                     //
/*  1568 */                     // line 60:
/*  1569 */                     //         self.control = 1
/*  1570 */                     //         ^
/*  1571 */                     //
/*  1572 */                     $currLineNo = 60;
/*  1573 */                     $currColNo = 8;
/*  1574 */ 
/*  1575 */                     if (self === undefined) {
/*  1576 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1577 */                     }
/*  1578 */                     $ret = Sk.abstr.sattr(self, 'control', new Sk.builtin.int_(1), true);
/*  1579 */                     $blk = 1; /* allowing case fallthrough */
/*  1580 */                 case 1:
/*  1581 */                     /* --- function return or resume suspension --- */
/*  1582 */                     if ($ret && $ret.$isSuspension) {
/*  1583 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 60, 8);
/*  1584 */                     }
/*  1585 */                     //
/*  1586 */                     // line 61:
/*  1587 */                     //         self.count = 10000
/*  1588 */                     //         ^
/*  1589 */                     //
/*  1590 */                     $currLineNo = 61;
/*  1591 */                     $currColNo = 8;
/*  1592 */ 
/*  1593 */                     if (self === undefined) {
/*  1594 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1595 */                     }
/*  1596 */                     $ret = Sk.abstr.sattr(self, 'count', new Sk.builtin.int_(10000), true);
/*  1597 */                     $blk = 2; /* allowing case fallthrough */
/*  1598 */                 case 2:
/*  1599 */                     /* --- function return or resume suspension --- */
/*  1600 */                     if ($ret && $ret.$isSuspension) {
/*  1601 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 61, 8);
/*  1602 */                     }
/*  1603 */                     return Sk.builtin.none.none$;
/*  1604 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1605 */                 }
/*  1606 */             } catch (err) {
/*  1607 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1608 */                     err = new Sk.builtin.ExternalError(err);
/*  1609 */                 }
/*  1610 */                 err.traceback.push({
/*  1611 */                     lineno: $currLineNo,
/*  1612 */                     colno: $currColNo,
/*  1613 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1614 */                 });
/*  1615 */                 if ($exc.length > 0) {
/*  1616 */                     $err = err;
/*  1617 */                     $blk = $exc.pop();
/*  1618 */                     continue;
/*  1619 */                 } else {
/*  1620 */                     throw err;
/*  1621 */                 }
/*  1622 */             }
/*  1623 */         }
/*  1624 */     });
/*  1625 */     var $scope163 = (function $HandlerTaskRec$class_outer($globals, $locals, $rest) {
/*  1626 */         var $gbl = $globals,
/*  1627 */             $loc = $locals;
/*  1628 */         (function $HandlerTaskRec$_closure() {
/*  1629 */             var $blk = 0,
/*  1630 */                 $exc = [],
/*  1631 */                 $ret = undefined,
/*  1632 */                 $postfinally = undefined,
/*  1633 */                 $currLineNo = undefined,
/*  1634 */                 $currColNo = undefined;
/*  1635 */             while (true) {
/*  1636 */                 try {
/*  1637 */                     switch ($blk) {
/*  1638 */                     case 0:
/*  1639 */                         /* --- class entry --- */
/*  1640 */                         //
/*  1641 */                         // line 64:
/*  1642 */                         //     def __init__(self):
/*  1643 */                         //     ^
/*  1644 */                         //
/*  1645 */                         $currLineNo = 64;
/*  1646 */                         $currColNo = 4;
/*  1647 */ 
/*  1648 */                         $scope164.co_name = new Sk.builtins['str']('__init__');
/*  1649 */                         $scope164.co_varnames = ['self'];
/*  1650 */                         var $funcobj166 = new Sk.builtins['function']($scope164, $gbl);
/*  1651 */                         $loc.__init__ = $funcobj166;
/*  1652 */                         //
/*  1653 */                         // line 68:
/*  1654 */                         //     def workInAdd(self,p):
/*  1655 */                         //     ^
/*  1656 */                         //
/*  1657 */                         $currLineNo = 68;
/*  1658 */                         $currColNo = 4;
/*  1659 */ 
/*  1660 */                         $scope167.co_name = new Sk.builtins['str']('workInAdd');
/*  1661 */                         $scope167.co_varnames = ['self', 'p'];
/*  1662 */                         var $funcobj173 = new Sk.builtins['function']($scope167, $gbl);
/*  1663 */                         $loc.workInAdd = $funcobj173;
/*  1664 */                         //
/*  1665 */                         // line 72:
/*  1666 */                         //     def deviceInAdd(self,p):
/*  1667 */                         //     ^
/*  1668 */                         //
/*  1669 */                         $currLineNo = 72;
/*  1670 */                         $currColNo = 4;
/*  1671 */ 
/*  1672 */                         $scope174.co_name = new Sk.builtins['str']('deviceInAdd');
/*  1673 */                         $scope174.co_varnames = ['self', 'p'];
/*  1674 */                         var $funcobj180 = new Sk.builtins['function']($scope174, $gbl);
/*  1675 */                         $loc.deviceInAdd = $funcobj180;
/*  1676 */                         return;
/*  1677 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1678 */                     }
/*  1679 */                 } catch (err) {
/*  1680 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1681 */                         err = new Sk.builtin.ExternalError(err);
/*  1682 */                     }
/*  1683 */                     err.traceback.push({
/*  1684 */                         lineno: $currLineNo,
/*  1685 */                         colno: $currColNo,
/*  1686 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1687 */                     });
/*  1688 */                     if ($exc.length > 0) {
/*  1689 */                         $err = err;
/*  1690 */                         $blk = $exc.pop();
/*  1691 */                         continue;
/*  1692 */                     } else {
/*  1693 */                         throw err;
/*  1694 */                     }
/*  1695 */                 }
/*  1696 */             }
/*  1697 */         }).apply(null, $rest);
/*  1698 */     });
/*  1699 */     var $scope164 = (function $__init__165$(self) {
/*  1700 */         var self, self, self;
/*  1701 */         var $wakeFromSuspension = function() {
/*  1702 */             var susp = $scope164.$wakingSuspension;
/*  1703 */             delete $scope164.$wakingSuspension;
/*  1704 */             $blk = susp.$blk;
/*  1705 */             $loc = susp.$loc;
/*  1706 */             $gbl = susp.$gbl;
/*  1707 */             $exc = susp.$exc;
/*  1708 */             $err = susp.$err;
/*  1709 */             $postfinally = susp.$postfinally;
/*  1710 */             $currLineNo = susp.$lineno;
/*  1711 */             $currColNo = susp.$colno;
/*  1712 */             Sk.lastYield = Date.now();
/*  1713 */             self = susp.$tmps.self;
/*  1714 */             try {
/*  1715 */                 $ret = susp.child.resume();
/*  1716 */             } catch (err) {
/*  1717 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1718 */                     err = new Sk.builtin.ExternalError(err);
/*  1719 */                 }
/*  1720 */                 err.traceback.push({
/*  1721 */                     lineno: $currLineNo,
/*  1722 */                     colno: $currColNo,
/*  1723 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1724 */                 });
/*  1725 */                 if ($exc.length > 0) {
/*  1726 */                     $err = err;
/*  1727 */                     $blk = $exc.pop();
/*  1728 */                 } else {
/*  1729 */                     throw err;
/*  1730 */                 }
/*  1731 */             }
/*  1732 */         };
/*  1733 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1734 */             var susp = new Sk.misceval.Suspension();
/*  1735 */             susp.child = $child;
/*  1736 */             susp.resume = function() {
/*  1737 */                 $scope164.$wakingSuspension = susp;
/*  1738 */                 return $scope164();
/*  1739 */             };
/*  1740 */             susp.data = susp.child.data;
/*  1741 */             susp.$blk = $blk;
/*  1742 */             susp.$loc = $loc;
/*  1743 */             susp.$gbl = $gbl;
/*  1744 */             susp.$exc = $exc;
/*  1745 */             susp.$err = $err;
/*  1746 */             susp.$postfinally = $postfinally;
/*  1747 */             susp.$filename = $filename;
/*  1748 */             susp.$lineno = $lineno;
/*  1749 */             susp.$colno = $colno;
/*  1750 */             susp.optional = susp.child.optional;
/*  1751 */             susp.$tmps = {
/*  1752 */                 "self": self
/*  1753 */             };
/*  1754 */             return susp;
/*  1755 */         };
/*  1756 */         var $blk = 0,
/*  1757 */             $exc = [],
/*  1758 */             $loc = {},
/*  1759 */             $gbl = this,
/*  1760 */             $err = undefined,
/*  1761 */             $ret = undefined,
/*  1762 */             $postfinally = undefined,
/*  1763 */             $currLineNo = undefined,
/*  1764 */             $currColNo = undefined;
/*  1765 */         if ($scope164.$wakingSuspension !== undefined) {
/*  1766 */             $wakeFromSuspension();
/*  1767 */         } else {
/*  1768 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  1769 */         }
/*  1770 */         while (true) {
/*  1771 */             try {
/*  1772 */                 switch ($blk) {
/*  1773 */                 case 0:
/*  1774 */                     /* --- codeobj entry --- */
/*  1775 */                     if (self === undefined) {
/*  1776 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1777 */                     }
/*  1778 */ 
/*  1779 */                     //
/*  1780 */                     // line 65:
/*  1781 */                     //         self.work_in = None
/*  1782 */                     //         ^
/*  1783 */                     //
/*  1784 */                     $currLineNo = 65;
/*  1785 */                     $currColNo = 8;
/*  1786 */ 
/*  1787 */                     if (self === undefined) {
/*  1788 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1789 */                     }
/*  1790 */                     $ret = Sk.abstr.sattr(self, 'work_in', Sk.builtin.none.none$, true);
/*  1791 */                     $blk = 1; /* allowing case fallthrough */
/*  1792 */                 case 1:
/*  1793 */                     /* --- function return or resume suspension --- */
/*  1794 */                     if ($ret && $ret.$isSuspension) {
/*  1795 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 65, 8);
/*  1796 */                     }
/*  1797 */                     //
/*  1798 */                     // line 66:
/*  1799 */                     //         self.device_in = None
/*  1800 */                     //         ^
/*  1801 */                     //
/*  1802 */                     $currLineNo = 66;
/*  1803 */                     $currColNo = 8;
/*  1804 */ 
/*  1805 */                     if (self === undefined) {
/*  1806 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1807 */                     }
/*  1808 */                     $ret = Sk.abstr.sattr(self, 'device_in', Sk.builtin.none.none$, true);
/*  1809 */                     $blk = 2; /* allowing case fallthrough */
/*  1810 */                 case 2:
/*  1811 */                     /* --- function return or resume suspension --- */
/*  1812 */                     if ($ret && $ret.$isSuspension) {
/*  1813 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 66, 8);
/*  1814 */                     }
/*  1815 */                     return Sk.builtin.none.none$;
/*  1816 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1817 */                 }
/*  1818 */             } catch (err) {
/*  1819 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1820 */                     err = new Sk.builtin.ExternalError(err);
/*  1821 */                 }
/*  1822 */                 err.traceback.push({
/*  1823 */                     lineno: $currLineNo,
/*  1824 */                     colno: $currColNo,
/*  1825 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1826 */                 });
/*  1827 */                 if ($exc.length > 0) {
/*  1828 */                     $err = err;
/*  1829 */                     $blk = $exc.pop();
/*  1830 */                     continue;
/*  1831 */                 } else {
/*  1832 */                     throw err;
/*  1833 */                 }
/*  1834 */             }
/*  1835 */         }
/*  1836 */     });
/*  1837 */     var $scope167 = (function $workInAdd168$(self, p) {
/*  1838 */         var p, p, self, self, self, self, $lattr169, $lattr169, $lattr170, $lattr169, $lattr170, $call171;
/*  1839 */         var $wakeFromSuspension = function() {
/*  1840 */             var susp = $scope167.$wakingSuspension;
/*  1841 */             delete $scope167.$wakingSuspension;
/*  1842 */             $blk = susp.$blk;
/*  1843 */             $loc = susp.$loc;
/*  1844 */             $gbl = susp.$gbl;
/*  1845 */             $exc = susp.$exc;
/*  1846 */             $err = susp.$err;
/*  1847 */             $postfinally = susp.$postfinally;
/*  1848 */             $currLineNo = susp.$lineno;
/*  1849 */             $currColNo = susp.$colno;
/*  1850 */             Sk.lastYield = Date.now();
/*  1851 */             p = susp.$tmps.p;
/*  1852 */             self = susp.$tmps.self;
/*  1853 */             $lattr169 = susp.$tmps.$lattr169;
/*  1854 */             $lattr170 = susp.$tmps.$lattr170;
/*  1855 */             $call171 = susp.$tmps.$call171;
/*  1856 */             try {
/*  1857 */                 $ret = susp.child.resume();
/*  1858 */             } catch (err) {
/*  1859 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1860 */                     err = new Sk.builtin.ExternalError(err);
/*  1861 */                 }
/*  1862 */                 err.traceback.push({
/*  1863 */                     lineno: $currLineNo,
/*  1864 */                     colno: $currColNo,
/*  1865 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  1866 */                 });
/*  1867 */                 if ($exc.length > 0) {
/*  1868 */                     $err = err;
/*  1869 */                     $blk = $exc.pop();
/*  1870 */                 } else {
/*  1871 */                     throw err;
/*  1872 */                 }
/*  1873 */             }
/*  1874 */         };
/*  1875 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1876 */             var susp = new Sk.misceval.Suspension();
/*  1877 */             susp.child = $child;
/*  1878 */             susp.resume = function() {
/*  1879 */                 $scope167.$wakingSuspension = susp;
/*  1880 */                 return $scope167();
/*  1881 */             };
/*  1882 */             susp.data = susp.child.data;
/*  1883 */             susp.$blk = $blk;
/*  1884 */             susp.$loc = $loc;
/*  1885 */             susp.$gbl = $gbl;
/*  1886 */             susp.$exc = $exc;
/*  1887 */             susp.$err = $err;
/*  1888 */             susp.$postfinally = $postfinally;
/*  1889 */             susp.$filename = $filename;
/*  1890 */             susp.$lineno = $lineno;
/*  1891 */             susp.$colno = $colno;
/*  1892 */             susp.optional = susp.child.optional;
/*  1893 */             susp.$tmps = {
/*  1894 */                 "p": p,
/*  1895 */                 "self": self,
/*  1896 */                 "$lattr169": $lattr169,
/*  1897 */                 "$lattr170": $lattr170,
/*  1898 */                 "$call171": $call171
/*  1899 */             };
/*  1900 */             return susp;
/*  1901 */         };
/*  1902 */         var $blk = 0,
/*  1903 */             $exc = [],
/*  1904 */             $loc = {},
/*  1905 */             $gbl = this,
/*  1906 */             $err = undefined,
/*  1907 */             $ret = undefined,
/*  1908 */             $postfinally = undefined,
/*  1909 */             $currLineNo = undefined,
/*  1910 */             $currColNo = undefined;
/*  1911 */         if ($scope167.$wakingSuspension !== undefined) {
/*  1912 */             $wakeFromSuspension();
/*  1913 */         } else {
/*  1914 */             Sk.builtin.pyCheckArgs("workInAdd", arguments, 2, 2, false, false);
/*  1915 */         }
/*  1916 */         while (true) {
/*  1917 */             try {
/*  1918 */                 switch ($blk) {
/*  1919 */                 case 0:
/*  1920 */                     /* --- codeobj entry --- */
/*  1921 */                     if (self === undefined) {
/*  1922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1923 */                     }
/*  1924 */                     if (p === undefined) {
/*  1925 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1926 */                     }
/*  1927 */ 
/*  1928 */                     //
/*  1929 */                     // line 69:
/*  1930 */                     //         self.work_in = p.append_to(self.work_in)
/*  1931 */                     //         ^
/*  1932 */                     //
/*  1933 */                     $currLineNo = 69;
/*  1934 */                     $currColNo = 8;
/*  1935 */ 
/*  1936 */                     if (p === undefined) {
/*  1937 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  1938 */                     }
/*  1939 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  1940 */                     $blk = 1; /* allowing case fallthrough */
/*  1941 */                 case 1:
/*  1942 */                     /* --- function return or resume suspension --- */
/*  1943 */                     if ($ret && $ret.$isSuspension) {
/*  1944 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 23);
/*  1945 */                     }
/*  1946 */                     var $lattr169 = $ret;
/*  1947 */                     if (self === undefined) {
/*  1948 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1949 */                     }
/*  1950 */                     $ret = Sk.abstr.gattr(self, 'work_in', true);
/*  1951 */                     $blk = 2; /* allowing case fallthrough */
/*  1952 */                 case 2:
/*  1953 */                     /* --- function return or resume suspension --- */
/*  1954 */                     if ($ret && $ret.$isSuspension) {
/*  1955 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 35);
/*  1956 */                     }
/*  1957 */                     var $lattr170 = $ret;
/*  1958 */                     $ret;
/*  1959 */                     $ret = Sk.misceval.callsimOrSuspend($lattr169, $lattr170);
/*  1960 */                     $blk = 3; /* allowing case fallthrough */
/*  1961 */                 case 3:
/*  1962 */                     /* --- function return or resume suspension --- */
/*  1963 */                     if ($ret && $ret.$isSuspension) {
/*  1964 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 23);
/*  1965 */                     }
/*  1966 */                     var $call171 = $ret;
/*  1967 */                     //
/*  1968 */                     // line 69:
/*  1969 */                     //         self.work_in = p.append_to(self.work_in)
/*  1970 */                     //                        ^
/*  1971 */                     //
/*  1972 */                     $currLineNo = 69;
/*  1973 */                     $currColNo = 23;
/*  1974 */ 
/*  1975 */                     if (self === undefined) {
/*  1976 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1977 */                     }
/*  1978 */                     $ret = Sk.abstr.sattr(self, 'work_in', $call171, true);
/*  1979 */                     $blk = 4; /* allowing case fallthrough */
/*  1980 */                 case 4:
/*  1981 */                     /* --- function return or resume suspension --- */
/*  1982 */                     if ($ret && $ret.$isSuspension) {
/*  1983 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 69, 8);
/*  1984 */                     }
/*  1985 */                     //
/*  1986 */                     // line 70:
/*  1987 */                     //         return self.work_in
/*  1988 */                     //         ^
/*  1989 */                     //
/*  1990 */                     $currLineNo = 70;
/*  1991 */                     $currColNo = 8;
/*  1992 */ 
/*  1993 */                     if (self === undefined) {
/*  1994 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1995 */                     }
/*  1996 */                     $ret = Sk.abstr.gattr(self, 'work_in', true);
/*  1997 */                     $blk = 5; /* allowing case fallthrough */
/*  1998 */                 case 5:
/*  1999 */                     /* --- function return or resume suspension --- */
/*  2000 */                     if ($ret && $ret.$isSuspension) {
/*  2001 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 70, 15);
/*  2002 */                     }
/*  2003 */                     var $lattr172 = $ret;
/*  2004 */                     return $lattr172;
/*  2005 */                     return Sk.builtin.none.none$;
/*  2006 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2007 */                 }
/*  2008 */             } catch (err) {
/*  2009 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2010 */                     err = new Sk.builtin.ExternalError(err);
/*  2011 */                 }
/*  2012 */                 err.traceback.push({
/*  2013 */                     lineno: $currLineNo,
/*  2014 */                     colno: $currColNo,
/*  2015 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2016 */                 });
/*  2017 */                 if ($exc.length > 0) {
/*  2018 */                     $err = err;
/*  2019 */                     $blk = $exc.pop();
/*  2020 */                     continue;
/*  2021 */                 } else {
/*  2022 */                     throw err;
/*  2023 */                 }
/*  2024 */             }
/*  2025 */         }
/*  2026 */     });
/*  2027 */     var $scope174 = (function $deviceInAdd175$(self, p) {
/*  2028 */         var p, p, self, self, self, self, $lattr176, $lattr176, $lattr177, $lattr176, $lattr177, $call178;
/*  2029 */         var $wakeFromSuspension = function() {
/*  2030 */             var susp = $scope174.$wakingSuspension;
/*  2031 */             delete $scope174.$wakingSuspension;
/*  2032 */             $blk = susp.$blk;
/*  2033 */             $loc = susp.$loc;
/*  2034 */             $gbl = susp.$gbl;
/*  2035 */             $exc = susp.$exc;
/*  2036 */             $err = susp.$err;
/*  2037 */             $postfinally = susp.$postfinally;
/*  2038 */             $currLineNo = susp.$lineno;
/*  2039 */             $currColNo = susp.$colno;
/*  2040 */             Sk.lastYield = Date.now();
/*  2041 */             p = susp.$tmps.p;
/*  2042 */             self = susp.$tmps.self;
/*  2043 */             $lattr176 = susp.$tmps.$lattr176;
/*  2044 */             $lattr177 = susp.$tmps.$lattr177;
/*  2045 */             $call178 = susp.$tmps.$call178;
/*  2046 */             try {
/*  2047 */                 $ret = susp.child.resume();
/*  2048 */             } catch (err) {
/*  2049 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2050 */                     err = new Sk.builtin.ExternalError(err);
/*  2051 */                 }
/*  2052 */                 err.traceback.push({
/*  2053 */                     lineno: $currLineNo,
/*  2054 */                     colno: $currColNo,
/*  2055 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2056 */                 });
/*  2057 */                 if ($exc.length > 0) {
/*  2058 */                     $err = err;
/*  2059 */                     $blk = $exc.pop();
/*  2060 */                 } else {
/*  2061 */                     throw err;
/*  2062 */                 }
/*  2063 */             }
/*  2064 */         };
/*  2065 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2066 */             var susp = new Sk.misceval.Suspension();
/*  2067 */             susp.child = $child;
/*  2068 */             susp.resume = function() {
/*  2069 */                 $scope174.$wakingSuspension = susp;
/*  2070 */                 return $scope174();
/*  2071 */             };
/*  2072 */             susp.data = susp.child.data;
/*  2073 */             susp.$blk = $blk;
/*  2074 */             susp.$loc = $loc;
/*  2075 */             susp.$gbl = $gbl;
/*  2076 */             susp.$exc = $exc;
/*  2077 */             susp.$err = $err;
/*  2078 */             susp.$postfinally = $postfinally;
/*  2079 */             susp.$filename = $filename;
/*  2080 */             susp.$lineno = $lineno;
/*  2081 */             susp.$colno = $colno;
/*  2082 */             susp.optional = susp.child.optional;
/*  2083 */             susp.$tmps = {
/*  2084 */                 "p": p,
/*  2085 */                 "self": self,
/*  2086 */                 "$lattr176": $lattr176,
/*  2087 */                 "$lattr177": $lattr177,
/*  2088 */                 "$call178": $call178
/*  2089 */             };
/*  2090 */             return susp;
/*  2091 */         };
/*  2092 */         var $blk = 0,
/*  2093 */             $exc = [],
/*  2094 */             $loc = {},
/*  2095 */             $gbl = this,
/*  2096 */             $err = undefined,
/*  2097 */             $ret = undefined,
/*  2098 */             $postfinally = undefined,
/*  2099 */             $currLineNo = undefined,
/*  2100 */             $currColNo = undefined;
/*  2101 */         if ($scope174.$wakingSuspension !== undefined) {
/*  2102 */             $wakeFromSuspension();
/*  2103 */         } else {
/*  2104 */             Sk.builtin.pyCheckArgs("deviceInAdd", arguments, 2, 2, false, false);
/*  2105 */         }
/*  2106 */         while (true) {
/*  2107 */             try {
/*  2108 */                 switch ($blk) {
/*  2109 */                 case 0:
/*  2110 */                     /* --- codeobj entry --- */
/*  2111 */                     if (self === undefined) {
/*  2112 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2113 */                     }
/*  2114 */                     if (p === undefined) {
/*  2115 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2116 */                     }
/*  2117 */ 
/*  2118 */                     //
/*  2119 */                     // line 73:
/*  2120 */                     //         self.device_in = p.append_to(self.device_in)
/*  2121 */                     //         ^
/*  2122 */                     //
/*  2123 */                     $currLineNo = 73;
/*  2124 */                     $currColNo = 8;
/*  2125 */ 
/*  2126 */                     if (p === undefined) {
/*  2127 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  2128 */                     }
/*  2129 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  2130 */                     $blk = 1; /* allowing case fallthrough */
/*  2131 */                 case 1:
/*  2132 */                     /* --- function return or resume suspension --- */
/*  2133 */                     if ($ret && $ret.$isSuspension) {
/*  2134 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 25);
/*  2135 */                     }
/*  2136 */                     var $lattr176 = $ret;
/*  2137 */                     if (self === undefined) {
/*  2138 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2139 */                     }
/*  2140 */                     $ret = Sk.abstr.gattr(self, 'device_in', true);
/*  2141 */                     $blk = 2; /* allowing case fallthrough */
/*  2142 */                 case 2:
/*  2143 */                     /* --- function return or resume suspension --- */
/*  2144 */                     if ($ret && $ret.$isSuspension) {
/*  2145 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 37);
/*  2146 */                     }
/*  2147 */                     var $lattr177 = $ret;
/*  2148 */                     $ret;
/*  2149 */                     $ret = Sk.misceval.callsimOrSuspend($lattr176, $lattr177);
/*  2150 */                     $blk = 3; /* allowing case fallthrough */
/*  2151 */                 case 3:
/*  2152 */                     /* --- function return or resume suspension --- */
/*  2153 */                     if ($ret && $ret.$isSuspension) {
/*  2154 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 25);
/*  2155 */                     }
/*  2156 */                     var $call178 = $ret;
/*  2157 */                     //
/*  2158 */                     // line 73:
/*  2159 */                     //         self.device_in = p.append_to(self.device_in)
/*  2160 */                     //                          ^
/*  2161 */                     //
/*  2162 */                     $currLineNo = 73;
/*  2163 */                     $currColNo = 25;
/*  2164 */ 
/*  2165 */                     if (self === undefined) {
/*  2166 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2167 */                     }
/*  2168 */                     $ret = Sk.abstr.sattr(self, 'device_in', $call178, true);
/*  2169 */                     $blk = 4; /* allowing case fallthrough */
/*  2170 */                 case 4:
/*  2171 */                     /* --- function return or resume suspension --- */
/*  2172 */                     if ($ret && $ret.$isSuspension) {
/*  2173 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 73, 8);
/*  2174 */                     }
/*  2175 */                     //
/*  2176 */                     // line 74:
/*  2177 */                     //         return self.device_in
/*  2178 */                     //         ^
/*  2179 */                     //
/*  2180 */                     $currLineNo = 74;
/*  2181 */                     $currColNo = 8;
/*  2182 */ 
/*  2183 */                     if (self === undefined) {
/*  2184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2185 */                     }
/*  2186 */                     $ret = Sk.abstr.gattr(self, 'device_in', true);
/*  2187 */                     $blk = 5; /* allowing case fallthrough */
/*  2188 */                 case 5:
/*  2189 */                     /* --- function return or resume suspension --- */
/*  2190 */                     if ($ret && $ret.$isSuspension) {
/*  2191 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 74, 15);
/*  2192 */                     }
/*  2193 */                     var $lattr179 = $ret;
/*  2194 */                     return $lattr179;
/*  2195 */                     return Sk.builtin.none.none$;
/*  2196 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2197 */                 }
/*  2198 */             } catch (err) {
/*  2199 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2200 */                     err = new Sk.builtin.ExternalError(err);
/*  2201 */                 }
/*  2202 */                 err.traceback.push({
/*  2203 */                     lineno: $currLineNo,
/*  2204 */                     colno: $currColNo,
/*  2205 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2206 */                 });
/*  2207 */                 if ($exc.length > 0) {
/*  2208 */                     $err = err;
/*  2209 */                     $blk = $exc.pop();
/*  2210 */                     continue;
/*  2211 */                 } else {
/*  2212 */                     throw err;
/*  2213 */                 }
/*  2214 */             }
/*  2215 */         }
/*  2216 */     });
/*  2217 */     var $scope183 = (function $WorkerTaskRec$class_outer($globals, $locals, $rest) {
/*  2218 */         var $gbl = $globals,
/*  2219 */             $loc = $locals;
/*  2220 */         (function $WorkerTaskRec$_closure() {
/*  2221 */             var $blk = 0,
/*  2222 */                 $exc = [],
/*  2223 */                 $ret = undefined,
/*  2224 */                 $postfinally = undefined,
/*  2225 */                 $currLineNo = undefined,
/*  2226 */                 $currColNo = undefined;
/*  2227 */             while (true) {
/*  2228 */                 try {
/*  2229 */                     switch ($blk) {
/*  2230 */                     case 0:
/*  2231 */                         /* --- class entry --- */
/*  2232 */                         //
/*  2233 */                         // line 77:
/*  2234 */                         //     def __init__(self):
/*  2235 */                         //     ^
/*  2236 */                         //
/*  2237 */                         $currLineNo = 77;
/*  2238 */                         $currColNo = 4;
/*  2239 */ 
/*  2240 */                         $scope184.co_name = new Sk.builtins['str']('__init__');
/*  2241 */                         $scope184.co_varnames = ['self'];
/*  2242 */                         var $funcobj187 = new Sk.builtins['function']($scope184, $gbl);
/*  2243 */                         $loc.__init__ = $funcobj187;
/*  2244 */                         return;
/*  2245 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2246 */                     }
/*  2247 */                 } catch (err) {
/*  2248 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  2249 */                         err = new Sk.builtin.ExternalError(err);
/*  2250 */                     }
/*  2251 */                     err.traceback.push({
/*  2252 */                         lineno: $currLineNo,
/*  2253 */                         colno: $currColNo,
/*  2254 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2255 */                     });
/*  2256 */                     if ($exc.length > 0) {
/*  2257 */                         $err = err;
/*  2258 */                         $blk = $exc.pop();
/*  2259 */                         continue;
/*  2260 */                     } else {
/*  2261 */                         throw err;
/*  2262 */                     }
/*  2263 */                 }
/*  2264 */             }
/*  2265 */         }).apply(null, $rest);
/*  2266 */     });
/*  2267 */     var $scope184 = (function $__init__185$(self) {
/*  2268 */         var self, self, self, $loadgbl186;
/*  2269 */         var $wakeFromSuspension = function() {
/*  2270 */             var susp = $scope184.$wakingSuspension;
/*  2271 */             delete $scope184.$wakingSuspension;
/*  2272 */             $blk = susp.$blk;
/*  2273 */             $loc = susp.$loc;
/*  2274 */             $gbl = susp.$gbl;
/*  2275 */             $exc = susp.$exc;
/*  2276 */             $err = susp.$err;
/*  2277 */             $postfinally = susp.$postfinally;
/*  2278 */             $currLineNo = susp.$lineno;
/*  2279 */             $currColNo = susp.$colno;
/*  2280 */             Sk.lastYield = Date.now();
/*  2281 */             self = susp.$tmps.self;
/*  2282 */             $loadgbl186 = susp.$tmps.$loadgbl186;
/*  2283 */             try {
/*  2284 */                 $ret = susp.child.resume();
/*  2285 */             } catch (err) {
/*  2286 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2287 */                     err = new Sk.builtin.ExternalError(err);
/*  2288 */                 }
/*  2289 */                 err.traceback.push({
/*  2290 */                     lineno: $currLineNo,
/*  2291 */                     colno: $currColNo,
/*  2292 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2293 */                 });
/*  2294 */                 if ($exc.length > 0) {
/*  2295 */                     $err = err;
/*  2296 */                     $blk = $exc.pop();
/*  2297 */                 } else {
/*  2298 */                     throw err;
/*  2299 */                 }
/*  2300 */             }
/*  2301 */         };
/*  2302 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2303 */             var susp = new Sk.misceval.Suspension();
/*  2304 */             susp.child = $child;
/*  2305 */             susp.resume = function() {
/*  2306 */                 $scope184.$wakingSuspension = susp;
/*  2307 */                 return $scope184();
/*  2308 */             };
/*  2309 */             susp.data = susp.child.data;
/*  2310 */             susp.$blk = $blk;
/*  2311 */             susp.$loc = $loc;
/*  2312 */             susp.$gbl = $gbl;
/*  2313 */             susp.$exc = $exc;
/*  2314 */             susp.$err = $err;
/*  2315 */             susp.$postfinally = $postfinally;
/*  2316 */             susp.$filename = $filename;
/*  2317 */             susp.$lineno = $lineno;
/*  2318 */             susp.$colno = $colno;
/*  2319 */             susp.optional = susp.child.optional;
/*  2320 */             susp.$tmps = {
/*  2321 */                 "self": self,
/*  2322 */                 "$loadgbl186": $loadgbl186
/*  2323 */             };
/*  2324 */             return susp;
/*  2325 */         };
/*  2326 */         var $blk = 0,
/*  2327 */             $exc = [],
/*  2328 */             $loc = {},
/*  2329 */             $gbl = this,
/*  2330 */             $err = undefined,
/*  2331 */             $ret = undefined,
/*  2332 */             $postfinally = undefined,
/*  2333 */             $currLineNo = undefined,
/*  2334 */             $currColNo = undefined;
/*  2335 */         if ($scope184.$wakingSuspension !== undefined) {
/*  2336 */             $wakeFromSuspension();
/*  2337 */         } else {
/*  2338 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  2339 */         }
/*  2340 */         while (true) {
/*  2341 */             try {
/*  2342 */                 switch ($blk) {
/*  2343 */                 case 0:
/*  2344 */                     /* --- codeobj entry --- */
/*  2345 */                     if (self === undefined) {
/*  2346 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2347 */                     }
/*  2348 */ 
/*  2349 */                     //
/*  2350 */                     // line 78:
/*  2351 */                     //         self.destination = I_HANDLERA
/*  2352 */                     //         ^
/*  2353 */                     //
/*  2354 */                     $currLineNo = 78;
/*  2355 */                     $currColNo = 8;
/*  2356 */ 
/*  2357 */                     var $loadgbl186 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/*  2358 */                     if (self === undefined) {
/*  2359 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2360 */                     }
/*  2361 */                     $ret = Sk.abstr.sattr(self, 'destination', $loadgbl186, true);
/*  2362 */                     $blk = 1; /* allowing case fallthrough */
/*  2363 */                 case 1:
/*  2364 */                     /* --- function return or resume suspension --- */
/*  2365 */                     if ($ret && $ret.$isSuspension) {
/*  2366 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 78, 8);
/*  2367 */                     }
/*  2368 */                     //
/*  2369 */                     // line 79:
/*  2370 */                     //         self.count = 0
/*  2371 */                     //         ^
/*  2372 */                     //
/*  2373 */                     $currLineNo = 79;
/*  2374 */                     $currColNo = 8;
/*  2375 */ 
/*  2376 */                     if (self === undefined) {
/*  2377 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2378 */                     }
/*  2379 */                     $ret = Sk.abstr.sattr(self, 'count', new Sk.builtin.int_(0), true);
/*  2380 */                     $blk = 2; /* allowing case fallthrough */
/*  2381 */                 case 2:
/*  2382 */                     /* --- function return or resume suspension --- */
/*  2383 */                     if ($ret && $ret.$isSuspension) {
/*  2384 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 79, 8);
/*  2385 */                     }
/*  2386 */                     return Sk.builtin.none.none$;
/*  2387 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2388 */                 }
/*  2389 */             } catch (err) {
/*  2390 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2391 */                     err = new Sk.builtin.ExternalError(err);
/*  2392 */                 }
/*  2393 */                 err.traceback.push({
/*  2394 */                     lineno: $currLineNo,
/*  2395 */                     colno: $currColNo,
/*  2396 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2397 */                 });
/*  2398 */                 if ($exc.length > 0) {
/*  2399 */                     $err = err;
/*  2400 */                     $blk = $exc.pop();
/*  2401 */                     continue;
/*  2402 */                 } else {
/*  2403 */                     throw err;
/*  2404 */                 }
/*  2405 */             }
/*  2406 */         }
/*  2407 */     });
/*  2408 */     var $scope190 = (function $TaskState$class_outer($globals, $locals, $rest) {
/*  2409 */         var $gbl = $globals,
/*  2410 */             $loc = $locals;
/*  2411 */         (function $TaskState$_closure() {
/*  2412 */             var $blk = 0,
/*  2413 */                 $exc = [],
/*  2414 */                 $ret = undefined,
/*  2415 */                 $postfinally = undefined,
/*  2416 */                 $currLineNo = undefined,
/*  2417 */                 $currColNo = undefined;
/*  2418 */             while (true) {
/*  2419 */                 try {
/*  2420 */                     switch ($blk) {
/*  2421 */                     case 0:
/*  2422 */                         /* --- class entry --- */
/*  2423 */                         //
/*  2424 */                         // line 83:
/*  2425 */                         //     def __init__(self):
/*  2426 */                         //     ^
/*  2427 */                         //
/*  2428 */                         $currLineNo = 83;
/*  2429 */                         $currColNo = 4;
/*  2430 */ 
/*  2431 */                         $scope191.co_name = new Sk.builtins['str']('__init__');
/*  2432 */                         $scope191.co_varnames = ['self'];
/*  2433 */                         var $funcobj193 = new Sk.builtins['function']($scope191, $gbl);
/*  2434 */                         $loc.__init__ = $funcobj193;
/*  2435 */                         //
/*  2436 */                         // line 88:
/*  2437 */                         //     def packetPending(self):
/*  2438 */                         //     ^
/*  2439 */                         //
/*  2440 */                         $currLineNo = 88;
/*  2441 */                         $currColNo = 4;
/*  2442 */ 
/*  2443 */                         $scope194.co_name = new Sk.builtins['str']('packetPending');
/*  2444 */                         $scope194.co_varnames = ['self'];
/*  2445 */                         var $funcobj196 = new Sk.builtins['function']($scope194, $gbl);
/*  2446 */                         $loc.packetPending = $funcobj196;
/*  2447 */                         //
/*  2448 */                         // line 94:
/*  2449 */                         //     def waiting(self):
/*  2450 */                         //     ^
/*  2451 */                         //
/*  2452 */                         $currLineNo = 94;
/*  2453 */                         $currColNo = 4;
/*  2454 */ 
/*  2455 */                         $scope197.co_name = new Sk.builtins['str']('waiting');
/*  2456 */                         $scope197.co_varnames = ['self'];
/*  2457 */                         var $funcobj199 = new Sk.builtins['function']($scope197, $gbl);
/*  2458 */                         $loc.waiting = $funcobj199;
/*  2459 */                         //
/*  2460 */                         // line 100:
/*  2461 */                         //     def running(self):
/*  2462 */                         //     ^
/*  2463 */                         //
/*  2464 */                         $currLineNo = 100;
/*  2465 */                         $currColNo = 4;
/*  2466 */ 
/*  2467 */                         $scope200.co_name = new Sk.builtins['str']('running');
/*  2468 */                         $scope200.co_varnames = ['self'];
/*  2469 */                         var $funcobj202 = new Sk.builtins['function']($scope200, $gbl);
/*  2470 */                         $loc.running = $funcobj202;
/*  2471 */                         //
/*  2472 */                         // line 106:
/*  2473 */                         //     def waitingWithPacket(self):
/*  2474 */                         //     ^
/*  2475 */                         //
/*  2476 */                         $currLineNo = 106;
/*  2477 */                         $currColNo = 4;
/*  2478 */ 
/*  2479 */                         $scope203.co_name = new Sk.builtins['str']('waitingWithPacket');
/*  2480 */                         $scope203.co_varnames = ['self'];
/*  2481 */                         var $funcobj205 = new Sk.builtins['function']($scope203, $gbl);
/*  2482 */                         $loc.waitingWithPacket = $funcobj205;
/*  2483 */                         //
/*  2484 */                         // line 112:
/*  2485 */                         //     def isPacketPending(self):
/*  2486 */                         //     ^
/*  2487 */                         //
/*  2488 */                         $currLineNo = 112;
/*  2489 */                         $currColNo = 4;
/*  2490 */ 
/*  2491 */                         $scope206.co_name = new Sk.builtins['str']('isPacketPending');
/*  2492 */                         $scope206.co_varnames = ['self'];
/*  2493 */                         var $funcobj209 = new Sk.builtins['function']($scope206, $gbl);
/*  2494 */                         $loc.isPacketPending = $funcobj209;
/*  2495 */                         //
/*  2496 */                         // line 115:
/*  2497 */                         //     def isTaskWaiting(self):
/*  2498 */                         //     ^
/*  2499 */                         //
/*  2500 */                         $currLineNo = 115;
/*  2501 */                         $currColNo = 4;
/*  2502 */ 
/*  2503 */                         $scope210.co_name = new Sk.builtins['str']('isTaskWaiting');
/*  2504 */                         $scope210.co_varnames = ['self'];
/*  2505 */                         var $funcobj213 = new Sk.builtins['function']($scope210, $gbl);
/*  2506 */                         $loc.isTaskWaiting = $funcobj213;
/*  2507 */                         //
/*  2508 */                         // line 118:
/*  2509 */                         //     def isTaskHolding(self):
/*  2510 */                         //     ^
/*  2511 */                         //
/*  2512 */                         $currLineNo = 118;
/*  2513 */                         $currColNo = 4;
/*  2514 */ 
/*  2515 */                         $scope214.co_name = new Sk.builtins['str']('isTaskHolding');
/*  2516 */                         $scope214.co_varnames = ['self'];
/*  2517 */                         var $funcobj217 = new Sk.builtins['function']($scope214, $gbl);
/*  2518 */                         $loc.isTaskHolding = $funcobj217;
/*  2519 */                         //
/*  2520 */                         // line 121:
/*  2521 */                         //     def isTaskHoldingOrWaiting(self):
/*  2522 */                         //     ^
/*  2523 */                         //
/*  2524 */                         $currLineNo = 121;
/*  2525 */                         $currColNo = 4;
/*  2526 */ 
/*  2527 */                         $scope218.co_name = new Sk.builtins['str']('isTaskHoldingOrWaiting');
/*  2528 */                         $scope218.co_varnames = ['self'];
/*  2529 */                         var $funcobj230 = new Sk.builtins['function']($scope218, $gbl);
/*  2530 */                         $loc.isTaskHoldingOrWaiting = $funcobj230;
/*  2531 */                         //
/*  2532 */                         // line 124:
/*  2533 */                         //     def isWaitingWithPacket(self):
/*  2534 */                         //     ^
/*  2535 */                         //
/*  2536 */                         $currLineNo = 124;
/*  2537 */                         $currColNo = 4;
/*  2538 */ 
/*  2539 */                         $scope231.co_name = new Sk.builtins['str']('isWaitingWithPacket');
/*  2540 */                         $scope231.co_varnames = ['self'];
/*  2541 */                         var $funcobj241 = new Sk.builtins['function']($scope231, $gbl);
/*  2542 */                         $loc.isWaitingWithPacket = $funcobj241;
/*  2543 */                         return;
/*  2544 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2545 */                     }
/*  2546 */                 } catch (err) {
/*  2547 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  2548 */                         err = new Sk.builtin.ExternalError(err);
/*  2549 */                     }
/*  2550 */                     err.traceback.push({
/*  2551 */                         lineno: $currLineNo,
/*  2552 */                         colno: $currColNo,
/*  2553 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2554 */                     });
/*  2555 */                     if ($exc.length > 0) {
/*  2556 */                         $err = err;
/*  2557 */                         $blk = $exc.pop();
/*  2558 */                         continue;
/*  2559 */                     } else {
/*  2560 */                         throw err;
/*  2561 */                     }
/*  2562 */                 }
/*  2563 */             }
/*  2564 */         }).apply(null, $rest);
/*  2565 */     });
/*  2566 */     var $scope191 = (function $__init__192$(self) {
/*  2567 */         var self, self, self, self;
/*  2568 */         var $wakeFromSuspension = function() {
/*  2569 */             var susp = $scope191.$wakingSuspension;
/*  2570 */             delete $scope191.$wakingSuspension;
/*  2571 */             $blk = susp.$blk;
/*  2572 */             $loc = susp.$loc;
/*  2573 */             $gbl = susp.$gbl;
/*  2574 */             $exc = susp.$exc;
/*  2575 */             $err = susp.$err;
/*  2576 */             $postfinally = susp.$postfinally;
/*  2577 */             $currLineNo = susp.$lineno;
/*  2578 */             $currColNo = susp.$colno;
/*  2579 */             Sk.lastYield = Date.now();
/*  2580 */             self = susp.$tmps.self;
/*  2581 */             try {
/*  2582 */                 $ret = susp.child.resume();
/*  2583 */             } catch (err) {
/*  2584 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2585 */                     err = new Sk.builtin.ExternalError(err);
/*  2586 */                 }
/*  2587 */                 err.traceback.push({
/*  2588 */                     lineno: $currLineNo,
/*  2589 */                     colno: $currColNo,
/*  2590 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2591 */                 });
/*  2592 */                 if ($exc.length > 0) {
/*  2593 */                     $err = err;
/*  2594 */                     $blk = $exc.pop();
/*  2595 */                 } else {
/*  2596 */                     throw err;
/*  2597 */                 }
/*  2598 */             }
/*  2599 */         };
/*  2600 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2601 */             var susp = new Sk.misceval.Suspension();
/*  2602 */             susp.child = $child;
/*  2603 */             susp.resume = function() {
/*  2604 */                 $scope191.$wakingSuspension = susp;
/*  2605 */                 return $scope191();
/*  2606 */             };
/*  2607 */             susp.data = susp.child.data;
/*  2608 */             susp.$blk = $blk;
/*  2609 */             susp.$loc = $loc;
/*  2610 */             susp.$gbl = $gbl;
/*  2611 */             susp.$exc = $exc;
/*  2612 */             susp.$err = $err;
/*  2613 */             susp.$postfinally = $postfinally;
/*  2614 */             susp.$filename = $filename;
/*  2615 */             susp.$lineno = $lineno;
/*  2616 */             susp.$colno = $colno;
/*  2617 */             susp.optional = susp.child.optional;
/*  2618 */             susp.$tmps = {
/*  2619 */                 "self": self
/*  2620 */             };
/*  2621 */             return susp;
/*  2622 */         };
/*  2623 */         var $blk = 0,
/*  2624 */             $exc = [],
/*  2625 */             $loc = {},
/*  2626 */             $gbl = this,
/*  2627 */             $err = undefined,
/*  2628 */             $ret = undefined,
/*  2629 */             $postfinally = undefined,
/*  2630 */             $currLineNo = undefined,
/*  2631 */             $currColNo = undefined;
/*  2632 */         if ($scope191.$wakingSuspension !== undefined) {
/*  2633 */             $wakeFromSuspension();
/*  2634 */         } else {
/*  2635 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  2636 */         }
/*  2637 */         while (true) {
/*  2638 */             try {
/*  2639 */                 switch ($blk) {
/*  2640 */                 case 0:
/*  2641 */                     /* --- codeobj entry --- */
/*  2642 */                     if (self === undefined) {
/*  2643 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2644 */                     }
/*  2645 */ 
/*  2646 */                     //
/*  2647 */                     // line 84:
/*  2648 */                     //         self.packet_pending = True
/*  2649 */                     //         ^
/*  2650 */                     //
/*  2651 */                     $currLineNo = 84;
/*  2652 */                     $currColNo = 8;
/*  2653 */ 
/*  2654 */                     if (self === undefined) {
/*  2655 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2656 */                     }
/*  2657 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  2658 */                     $blk = 1; /* allowing case fallthrough */
/*  2659 */                 case 1:
/*  2660 */                     /* --- function return or resume suspension --- */
/*  2661 */                     if ($ret && $ret.$isSuspension) {
/*  2662 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 84, 8);
/*  2663 */                     }
/*  2664 */                     //
/*  2665 */                     // line 85:
/*  2666 */                     //         self.task_waiting = False
/*  2667 */                     //         ^
/*  2668 */                     //
/*  2669 */                     $currLineNo = 85;
/*  2670 */                     $currColNo = 8;
/*  2671 */ 
/*  2672 */                     if (self === undefined) {
/*  2673 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2674 */                     }
/*  2675 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  2676 */                     $blk = 2; /* allowing case fallthrough */
/*  2677 */                 case 2:
/*  2678 */                     /* --- function return or resume suspension --- */
/*  2679 */                     if ($ret && $ret.$isSuspension) {
/*  2680 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 85, 8);
/*  2681 */                     }
/*  2682 */                     //
/*  2683 */                     // line 86:
/*  2684 */                     //         self.task_holding = False
/*  2685 */                     //         ^
/*  2686 */                     //
/*  2687 */                     $currLineNo = 86;
/*  2688 */                     $currColNo = 8;
/*  2689 */ 
/*  2690 */                     if (self === undefined) {
/*  2691 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2692 */                     }
/*  2693 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  2694 */                     $blk = 3; /* allowing case fallthrough */
/*  2695 */                 case 3:
/*  2696 */                     /* --- function return or resume suspension --- */
/*  2697 */                     if ($ret && $ret.$isSuspension) {
/*  2698 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 86, 8);
/*  2699 */                     }
/*  2700 */                     return Sk.builtin.none.none$;
/*  2701 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2702 */                 }
/*  2703 */             } catch (err) {
/*  2704 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2705 */                     err = new Sk.builtin.ExternalError(err);
/*  2706 */                 }
/*  2707 */                 err.traceback.push({
/*  2708 */                     lineno: $currLineNo,
/*  2709 */                     colno: $currColNo,
/*  2710 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2711 */                 });
/*  2712 */                 if ($exc.length > 0) {
/*  2713 */                     $err = err;
/*  2714 */                     $blk = $exc.pop();
/*  2715 */                     continue;
/*  2716 */                 } else {
/*  2717 */                     throw err;
/*  2718 */                 }
/*  2719 */             }
/*  2720 */         }
/*  2721 */     });
/*  2722 */     var $scope194 = (function $packetPending195$(self) {
/*  2723 */         var self, self, self, self, self;
/*  2724 */         var $wakeFromSuspension = function() {
/*  2725 */             var susp = $scope194.$wakingSuspension;
/*  2726 */             delete $scope194.$wakingSuspension;
/*  2727 */             $blk = susp.$blk;
/*  2728 */             $loc = susp.$loc;
/*  2729 */             $gbl = susp.$gbl;
/*  2730 */             $exc = susp.$exc;
/*  2731 */             $err = susp.$err;
/*  2732 */             $postfinally = susp.$postfinally;
/*  2733 */             $currLineNo = susp.$lineno;
/*  2734 */             $currColNo = susp.$colno;
/*  2735 */             Sk.lastYield = Date.now();
/*  2736 */             self = susp.$tmps.self;
/*  2737 */             try {
/*  2738 */                 $ret = susp.child.resume();
/*  2739 */             } catch (err) {
/*  2740 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2741 */                     err = new Sk.builtin.ExternalError(err);
/*  2742 */                 }
/*  2743 */                 err.traceback.push({
/*  2744 */                     lineno: $currLineNo,
/*  2745 */                     colno: $currColNo,
/*  2746 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2747 */                 });
/*  2748 */                 if ($exc.length > 0) {
/*  2749 */                     $err = err;
/*  2750 */                     $blk = $exc.pop();
/*  2751 */                 } else {
/*  2752 */                     throw err;
/*  2753 */                 }
/*  2754 */             }
/*  2755 */         };
/*  2756 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2757 */             var susp = new Sk.misceval.Suspension();
/*  2758 */             susp.child = $child;
/*  2759 */             susp.resume = function() {
/*  2760 */                 $scope194.$wakingSuspension = susp;
/*  2761 */                 return $scope194();
/*  2762 */             };
/*  2763 */             susp.data = susp.child.data;
/*  2764 */             susp.$blk = $blk;
/*  2765 */             susp.$loc = $loc;
/*  2766 */             susp.$gbl = $gbl;
/*  2767 */             susp.$exc = $exc;
/*  2768 */             susp.$err = $err;
/*  2769 */             susp.$postfinally = $postfinally;
/*  2770 */             susp.$filename = $filename;
/*  2771 */             susp.$lineno = $lineno;
/*  2772 */             susp.$colno = $colno;
/*  2773 */             susp.optional = susp.child.optional;
/*  2774 */             susp.$tmps = {
/*  2775 */                 "self": self
/*  2776 */             };
/*  2777 */             return susp;
/*  2778 */         };
/*  2779 */         var $blk = 0,
/*  2780 */             $exc = [],
/*  2781 */             $loc = {},
/*  2782 */             $gbl = this,
/*  2783 */             $err = undefined,
/*  2784 */             $ret = undefined,
/*  2785 */             $postfinally = undefined,
/*  2786 */             $currLineNo = undefined,
/*  2787 */             $currColNo = undefined;
/*  2788 */         if ($scope194.$wakingSuspension !== undefined) {
/*  2789 */             $wakeFromSuspension();
/*  2790 */         } else {
/*  2791 */             Sk.builtin.pyCheckArgs("packetPending", arguments, 1, 1, false, false);
/*  2792 */         }
/*  2793 */         while (true) {
/*  2794 */             try {
/*  2795 */                 switch ($blk) {
/*  2796 */                 case 0:
/*  2797 */                     /* --- codeobj entry --- */
/*  2798 */                     if (self === undefined) {
/*  2799 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2800 */                     }
/*  2801 */ 
/*  2802 */                     //
/*  2803 */                     // line 89:
/*  2804 */                     //         self.packet_pending = True
/*  2805 */                     //         ^
/*  2806 */                     //
/*  2807 */                     $currLineNo = 89;
/*  2808 */                     $currColNo = 8;
/*  2809 */ 
/*  2810 */                     if (self === undefined) {
/*  2811 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2812 */                     }
/*  2813 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  2814 */                     $blk = 1; /* allowing case fallthrough */
/*  2815 */                 case 1:
/*  2816 */                     /* --- function return or resume suspension --- */
/*  2817 */                     if ($ret && $ret.$isSuspension) {
/*  2818 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 89, 8);
/*  2819 */                     }
/*  2820 */                     //
/*  2821 */                     // line 90:
/*  2822 */                     //         self.task_waiting = False
/*  2823 */                     //         ^
/*  2824 */                     //
/*  2825 */                     $currLineNo = 90;
/*  2826 */                     $currColNo = 8;
/*  2827 */ 
/*  2828 */                     if (self === undefined) {
/*  2829 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2830 */                     }
/*  2831 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  2832 */                     $blk = 2; /* allowing case fallthrough */
/*  2833 */                 case 2:
/*  2834 */                     /* --- function return or resume suspension --- */
/*  2835 */                     if ($ret && $ret.$isSuspension) {
/*  2836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 90, 8);
/*  2837 */                     }
/*  2838 */                     //
/*  2839 */                     // line 91:
/*  2840 */                     //         self.task_holding = False
/*  2841 */                     //         ^
/*  2842 */                     //
/*  2843 */                     $currLineNo = 91;
/*  2844 */                     $currColNo = 8;
/*  2845 */ 
/*  2846 */                     if (self === undefined) {
/*  2847 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2848 */                     }
/*  2849 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  2850 */                     $blk = 3; /* allowing case fallthrough */
/*  2851 */                 case 3:
/*  2852 */                     /* --- function return or resume suspension --- */
/*  2853 */                     if ($ret && $ret.$isSuspension) {
/*  2854 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 91, 8);
/*  2855 */                     }
/*  2856 */                     //
/*  2857 */                     // line 92:
/*  2858 */                     //         return self
/*  2859 */                     //         ^
/*  2860 */                     //
/*  2861 */                     $currLineNo = 92;
/*  2862 */                     $currColNo = 8;
/*  2863 */ 
/*  2864 */                     if (self === undefined) {
/*  2865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2866 */                     }
/*  2867 */                     return self;
/*  2868 */                     return Sk.builtin.none.none$;
/*  2869 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2870 */                 }
/*  2871 */             } catch (err) {
/*  2872 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2873 */                     err = new Sk.builtin.ExternalError(err);
/*  2874 */                 }
/*  2875 */                 err.traceback.push({
/*  2876 */                     lineno: $currLineNo,
/*  2877 */                     colno: $currColNo,
/*  2878 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2879 */                 });
/*  2880 */                 if ($exc.length > 0) {
/*  2881 */                     $err = err;
/*  2882 */                     $blk = $exc.pop();
/*  2883 */                     continue;
/*  2884 */                 } else {
/*  2885 */                     throw err;
/*  2886 */                 }
/*  2887 */             }
/*  2888 */         }
/*  2889 */     });
/*  2890 */     var $scope197 = (function $waiting198$(self) {
/*  2891 */         var self, self, self, self, self;
/*  2892 */         var $wakeFromSuspension = function() {
/*  2893 */             var susp = $scope197.$wakingSuspension;
/*  2894 */             delete $scope197.$wakingSuspension;
/*  2895 */             $blk = susp.$blk;
/*  2896 */             $loc = susp.$loc;
/*  2897 */             $gbl = susp.$gbl;
/*  2898 */             $exc = susp.$exc;
/*  2899 */             $err = susp.$err;
/*  2900 */             $postfinally = susp.$postfinally;
/*  2901 */             $currLineNo = susp.$lineno;
/*  2902 */             $currColNo = susp.$colno;
/*  2903 */             Sk.lastYield = Date.now();
/*  2904 */             self = susp.$tmps.self;
/*  2905 */             try {
/*  2906 */                 $ret = susp.child.resume();
/*  2907 */             } catch (err) {
/*  2908 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2909 */                     err = new Sk.builtin.ExternalError(err);
/*  2910 */                 }
/*  2911 */                 err.traceback.push({
/*  2912 */                     lineno: $currLineNo,
/*  2913 */                     colno: $currColNo,
/*  2914 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  2915 */                 });
/*  2916 */                 if ($exc.length > 0) {
/*  2917 */                     $err = err;
/*  2918 */                     $blk = $exc.pop();
/*  2919 */                 } else {
/*  2920 */                     throw err;
/*  2921 */                 }
/*  2922 */             }
/*  2923 */         };
/*  2924 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2925 */             var susp = new Sk.misceval.Suspension();
/*  2926 */             susp.child = $child;
/*  2927 */             susp.resume = function() {
/*  2928 */                 $scope197.$wakingSuspension = susp;
/*  2929 */                 return $scope197();
/*  2930 */             };
/*  2931 */             susp.data = susp.child.data;
/*  2932 */             susp.$blk = $blk;
/*  2933 */             susp.$loc = $loc;
/*  2934 */             susp.$gbl = $gbl;
/*  2935 */             susp.$exc = $exc;
/*  2936 */             susp.$err = $err;
/*  2937 */             susp.$postfinally = $postfinally;
/*  2938 */             susp.$filename = $filename;
/*  2939 */             susp.$lineno = $lineno;
/*  2940 */             susp.$colno = $colno;
/*  2941 */             susp.optional = susp.child.optional;
/*  2942 */             susp.$tmps = {
/*  2943 */                 "self": self
/*  2944 */             };
/*  2945 */             return susp;
/*  2946 */         };
/*  2947 */         var $blk = 0,
/*  2948 */             $exc = [],
/*  2949 */             $loc = {},
/*  2950 */             $gbl = this,
/*  2951 */             $err = undefined,
/*  2952 */             $ret = undefined,
/*  2953 */             $postfinally = undefined,
/*  2954 */             $currLineNo = undefined,
/*  2955 */             $currColNo = undefined;
/*  2956 */         if ($scope197.$wakingSuspension !== undefined) {
/*  2957 */             $wakeFromSuspension();
/*  2958 */         } else {
/*  2959 */             Sk.builtin.pyCheckArgs("waiting", arguments, 1, 1, false, false);
/*  2960 */         }
/*  2961 */         while (true) {
/*  2962 */             try {
/*  2963 */                 switch ($blk) {
/*  2964 */                 case 0:
/*  2965 */                     /* --- codeobj entry --- */
/*  2966 */                     if (self === undefined) {
/*  2967 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2968 */                     }
/*  2969 */ 
/*  2970 */                     //
/*  2971 */                     // line 95:
/*  2972 */                     //         self.packet_pending = False
/*  2973 */                     //         ^
/*  2974 */                     //
/*  2975 */                     $currLineNo = 95;
/*  2976 */                     $currColNo = 8;
/*  2977 */ 
/*  2978 */                     if (self === undefined) {
/*  2979 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2980 */                     }
/*  2981 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.false$, true);
/*  2982 */                     $blk = 1; /* allowing case fallthrough */
/*  2983 */                 case 1:
/*  2984 */                     /* --- function return or resume suspension --- */
/*  2985 */                     if ($ret && $ret.$isSuspension) {
/*  2986 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 95, 8);
/*  2987 */                     }
/*  2988 */                     //
/*  2989 */                     // line 96:
/*  2990 */                     //         self.task_waiting = True
/*  2991 */                     //         ^
/*  2992 */                     //
/*  2993 */                     $currLineNo = 96;
/*  2994 */                     $currColNo = 8;
/*  2995 */ 
/*  2996 */                     if (self === undefined) {
/*  2997 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2998 */                     }
/*  2999 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  3000 */                     $blk = 2; /* allowing case fallthrough */
/*  3001 */                 case 2:
/*  3002 */                     /* --- function return or resume suspension --- */
/*  3003 */                     if ($ret && $ret.$isSuspension) {
/*  3004 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 96, 8);
/*  3005 */                     }
/*  3006 */                     //
/*  3007 */                     // line 97:
/*  3008 */                     //         self.task_holding = False
/*  3009 */                     //         ^
/*  3010 */                     //
/*  3011 */                     $currLineNo = 97;
/*  3012 */                     $currColNo = 8;
/*  3013 */ 
/*  3014 */                     if (self === undefined) {
/*  3015 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3016 */                     }
/*  3017 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3018 */                     $blk = 3; /* allowing case fallthrough */
/*  3019 */                 case 3:
/*  3020 */                     /* --- function return or resume suspension --- */
/*  3021 */                     if ($ret && $ret.$isSuspension) {
/*  3022 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 97, 8);
/*  3023 */                     }
/*  3024 */                     //
/*  3025 */                     // line 98:
/*  3026 */                     //         return self
/*  3027 */                     //         ^
/*  3028 */                     //
/*  3029 */                     $currLineNo = 98;
/*  3030 */                     $currColNo = 8;
/*  3031 */ 
/*  3032 */                     if (self === undefined) {
/*  3033 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3034 */                     }
/*  3035 */                     return self;
/*  3036 */                     return Sk.builtin.none.none$;
/*  3037 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3038 */                 }
/*  3039 */             } catch (err) {
/*  3040 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3041 */                     err = new Sk.builtin.ExternalError(err);
/*  3042 */                 }
/*  3043 */                 err.traceback.push({
/*  3044 */                     lineno: $currLineNo,
/*  3045 */                     colno: $currColNo,
/*  3046 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3047 */                 });
/*  3048 */                 if ($exc.length > 0) {
/*  3049 */                     $err = err;
/*  3050 */                     $blk = $exc.pop();
/*  3051 */                     continue;
/*  3052 */                 } else {
/*  3053 */                     throw err;
/*  3054 */                 }
/*  3055 */             }
/*  3056 */         }
/*  3057 */     });
/*  3058 */     var $scope200 = (function $running201$(self) {
/*  3059 */         var self, self, self, self, self;
/*  3060 */         var $wakeFromSuspension = function() {
/*  3061 */             var susp = $scope200.$wakingSuspension;
/*  3062 */             delete $scope200.$wakingSuspension;
/*  3063 */             $blk = susp.$blk;
/*  3064 */             $loc = susp.$loc;
/*  3065 */             $gbl = susp.$gbl;
/*  3066 */             $exc = susp.$exc;
/*  3067 */             $err = susp.$err;
/*  3068 */             $postfinally = susp.$postfinally;
/*  3069 */             $currLineNo = susp.$lineno;
/*  3070 */             $currColNo = susp.$colno;
/*  3071 */             Sk.lastYield = Date.now();
/*  3072 */             self = susp.$tmps.self;
/*  3073 */             try {
/*  3074 */                 $ret = susp.child.resume();
/*  3075 */             } catch (err) {
/*  3076 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3077 */                     err = new Sk.builtin.ExternalError(err);
/*  3078 */                 }
/*  3079 */                 err.traceback.push({
/*  3080 */                     lineno: $currLineNo,
/*  3081 */                     colno: $currColNo,
/*  3082 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3083 */                 });
/*  3084 */                 if ($exc.length > 0) {
/*  3085 */                     $err = err;
/*  3086 */                     $blk = $exc.pop();
/*  3087 */                 } else {
/*  3088 */                     throw err;
/*  3089 */                 }
/*  3090 */             }
/*  3091 */         };
/*  3092 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3093 */             var susp = new Sk.misceval.Suspension();
/*  3094 */             susp.child = $child;
/*  3095 */             susp.resume = function() {
/*  3096 */                 $scope200.$wakingSuspension = susp;
/*  3097 */                 return $scope200();
/*  3098 */             };
/*  3099 */             susp.data = susp.child.data;
/*  3100 */             susp.$blk = $blk;
/*  3101 */             susp.$loc = $loc;
/*  3102 */             susp.$gbl = $gbl;
/*  3103 */             susp.$exc = $exc;
/*  3104 */             susp.$err = $err;
/*  3105 */             susp.$postfinally = $postfinally;
/*  3106 */             susp.$filename = $filename;
/*  3107 */             susp.$lineno = $lineno;
/*  3108 */             susp.$colno = $colno;
/*  3109 */             susp.optional = susp.child.optional;
/*  3110 */             susp.$tmps = {
/*  3111 */                 "self": self
/*  3112 */             };
/*  3113 */             return susp;
/*  3114 */         };
/*  3115 */         var $blk = 0,
/*  3116 */             $exc = [],
/*  3117 */             $loc = {},
/*  3118 */             $gbl = this,
/*  3119 */             $err = undefined,
/*  3120 */             $ret = undefined,
/*  3121 */             $postfinally = undefined,
/*  3122 */             $currLineNo = undefined,
/*  3123 */             $currColNo = undefined;
/*  3124 */         if ($scope200.$wakingSuspension !== undefined) {
/*  3125 */             $wakeFromSuspension();
/*  3126 */         } else {
/*  3127 */             Sk.builtin.pyCheckArgs("running", arguments, 1, 1, false, false);
/*  3128 */         }
/*  3129 */         while (true) {
/*  3130 */             try {
/*  3131 */                 switch ($blk) {
/*  3132 */                 case 0:
/*  3133 */                     /* --- codeobj entry --- */
/*  3134 */                     if (self === undefined) {
/*  3135 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3136 */                     }
/*  3137 */ 
/*  3138 */                     //
/*  3139 */                     // line 101:
/*  3140 */                     //         self.packet_pending = False
/*  3141 */                     //         ^
/*  3142 */                     //
/*  3143 */                     $currLineNo = 101;
/*  3144 */                     $currColNo = 8;
/*  3145 */ 
/*  3146 */                     if (self === undefined) {
/*  3147 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3148 */                     }
/*  3149 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.false$, true);
/*  3150 */                     $blk = 1; /* allowing case fallthrough */
/*  3151 */                 case 1:
/*  3152 */                     /* --- function return or resume suspension --- */
/*  3153 */                     if ($ret && $ret.$isSuspension) {
/*  3154 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 101, 8);
/*  3155 */                     }
/*  3156 */                     //
/*  3157 */                     // line 102:
/*  3158 */                     //         self.task_waiting = False
/*  3159 */                     //         ^
/*  3160 */                     //
/*  3161 */                     $currLineNo = 102;
/*  3162 */                     $currColNo = 8;
/*  3163 */ 
/*  3164 */                     if (self === undefined) {
/*  3165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3166 */                     }
/*  3167 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.false$, true);
/*  3168 */                     $blk = 2; /* allowing case fallthrough */
/*  3169 */                 case 2:
/*  3170 */                     /* --- function return or resume suspension --- */
/*  3171 */                     if ($ret && $ret.$isSuspension) {
/*  3172 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 102, 8);
/*  3173 */                     }
/*  3174 */                     //
/*  3175 */                     // line 103:
/*  3176 */                     //         self.task_holding = False
/*  3177 */                     //         ^
/*  3178 */                     //
/*  3179 */                     $currLineNo = 103;
/*  3180 */                     $currColNo = 8;
/*  3181 */ 
/*  3182 */                     if (self === undefined) {
/*  3183 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3184 */                     }
/*  3185 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3186 */                     $blk = 3; /* allowing case fallthrough */
/*  3187 */                 case 3:
/*  3188 */                     /* --- function return or resume suspension --- */
/*  3189 */                     if ($ret && $ret.$isSuspension) {
/*  3190 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 103, 8);
/*  3191 */                     }
/*  3192 */                     //
/*  3193 */                     // line 104:
/*  3194 */                     //         return self
/*  3195 */                     //         ^
/*  3196 */                     //
/*  3197 */                     $currLineNo = 104;
/*  3198 */                     $currColNo = 8;
/*  3199 */ 
/*  3200 */                     if (self === undefined) {
/*  3201 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3202 */                     }
/*  3203 */                     return self;
/*  3204 */                     return Sk.builtin.none.none$;
/*  3205 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3206 */                 }
/*  3207 */             } catch (err) {
/*  3208 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3209 */                     err = new Sk.builtin.ExternalError(err);
/*  3210 */                 }
/*  3211 */                 err.traceback.push({
/*  3212 */                     lineno: $currLineNo,
/*  3213 */                     colno: $currColNo,
/*  3214 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3215 */                 });
/*  3216 */                 if ($exc.length > 0) {
/*  3217 */                     $err = err;
/*  3218 */                     $blk = $exc.pop();
/*  3219 */                     continue;
/*  3220 */                 } else {
/*  3221 */                     throw err;
/*  3222 */                 }
/*  3223 */             }
/*  3224 */         }
/*  3225 */     });
/*  3226 */     var $scope203 = (function $waitingWithPacket204$(self) {
/*  3227 */         var self, self, self, self, self;
/*  3228 */         var $wakeFromSuspension = function() {
/*  3229 */             var susp = $scope203.$wakingSuspension;
/*  3230 */             delete $scope203.$wakingSuspension;
/*  3231 */             $blk = susp.$blk;
/*  3232 */             $loc = susp.$loc;
/*  3233 */             $gbl = susp.$gbl;
/*  3234 */             $exc = susp.$exc;
/*  3235 */             $err = susp.$err;
/*  3236 */             $postfinally = susp.$postfinally;
/*  3237 */             $currLineNo = susp.$lineno;
/*  3238 */             $currColNo = susp.$colno;
/*  3239 */             Sk.lastYield = Date.now();
/*  3240 */             self = susp.$tmps.self;
/*  3241 */             try {
/*  3242 */                 $ret = susp.child.resume();
/*  3243 */             } catch (err) {
/*  3244 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3245 */                     err = new Sk.builtin.ExternalError(err);
/*  3246 */                 }
/*  3247 */                 err.traceback.push({
/*  3248 */                     lineno: $currLineNo,
/*  3249 */                     colno: $currColNo,
/*  3250 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3251 */                 });
/*  3252 */                 if ($exc.length > 0) {
/*  3253 */                     $err = err;
/*  3254 */                     $blk = $exc.pop();
/*  3255 */                 } else {
/*  3256 */                     throw err;
/*  3257 */                 }
/*  3258 */             }
/*  3259 */         };
/*  3260 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3261 */             var susp = new Sk.misceval.Suspension();
/*  3262 */             susp.child = $child;
/*  3263 */             susp.resume = function() {
/*  3264 */                 $scope203.$wakingSuspension = susp;
/*  3265 */                 return $scope203();
/*  3266 */             };
/*  3267 */             susp.data = susp.child.data;
/*  3268 */             susp.$blk = $blk;
/*  3269 */             susp.$loc = $loc;
/*  3270 */             susp.$gbl = $gbl;
/*  3271 */             susp.$exc = $exc;
/*  3272 */             susp.$err = $err;
/*  3273 */             susp.$postfinally = $postfinally;
/*  3274 */             susp.$filename = $filename;
/*  3275 */             susp.$lineno = $lineno;
/*  3276 */             susp.$colno = $colno;
/*  3277 */             susp.optional = susp.child.optional;
/*  3278 */             susp.$tmps = {
/*  3279 */                 "self": self
/*  3280 */             };
/*  3281 */             return susp;
/*  3282 */         };
/*  3283 */         var $blk = 0,
/*  3284 */             $exc = [],
/*  3285 */             $loc = {},
/*  3286 */             $gbl = this,
/*  3287 */             $err = undefined,
/*  3288 */             $ret = undefined,
/*  3289 */             $postfinally = undefined,
/*  3290 */             $currLineNo = undefined,
/*  3291 */             $currColNo = undefined;
/*  3292 */         if ($scope203.$wakingSuspension !== undefined) {
/*  3293 */             $wakeFromSuspension();
/*  3294 */         } else {
/*  3295 */             Sk.builtin.pyCheckArgs("waitingWithPacket", arguments, 1, 1, false, false);
/*  3296 */         }
/*  3297 */         while (true) {
/*  3298 */             try {
/*  3299 */                 switch ($blk) {
/*  3300 */                 case 0:
/*  3301 */                     /* --- codeobj entry --- */
/*  3302 */                     if (self === undefined) {
/*  3303 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3304 */                     }
/*  3305 */ 
/*  3306 */                     //
/*  3307 */                     // line 107:
/*  3308 */                     //         self.packet_pending = True
/*  3309 */                     //         ^
/*  3310 */                     //
/*  3311 */                     $currLineNo = 107;
/*  3312 */                     $currColNo = 8;
/*  3313 */ 
/*  3314 */                     if (self === undefined) {
/*  3315 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3316 */                     }
/*  3317 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  3318 */                     $blk = 1; /* allowing case fallthrough */
/*  3319 */                 case 1:
/*  3320 */                     /* --- function return or resume suspension --- */
/*  3321 */                     if ($ret && $ret.$isSuspension) {
/*  3322 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 107, 8);
/*  3323 */                     }
/*  3324 */                     //
/*  3325 */                     // line 108:
/*  3326 */                     //         self.task_waiting = True
/*  3327 */                     //         ^
/*  3328 */                     //
/*  3329 */                     $currLineNo = 108;
/*  3330 */                     $currColNo = 8;
/*  3331 */ 
/*  3332 */                     if (self === undefined) {
/*  3333 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3334 */                     }
/*  3335 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  3336 */                     $blk = 2; /* allowing case fallthrough */
/*  3337 */                 case 2:
/*  3338 */                     /* --- function return or resume suspension --- */
/*  3339 */                     if ($ret && $ret.$isSuspension) {
/*  3340 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 108, 8);
/*  3341 */                     }
/*  3342 */                     //
/*  3343 */                     // line 109:
/*  3344 */                     //         self.task_holding = False
/*  3345 */                     //         ^
/*  3346 */                     //
/*  3347 */                     $currLineNo = 109;
/*  3348 */                     $currColNo = 8;
/*  3349 */ 
/*  3350 */                     if (self === undefined) {
/*  3351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3352 */                     }
/*  3353 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.false$, true);
/*  3354 */                     $blk = 3; /* allowing case fallthrough */
/*  3355 */                 case 3:
/*  3356 */                     /* --- function return or resume suspension --- */
/*  3357 */                     if ($ret && $ret.$isSuspension) {
/*  3358 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 109, 8);
/*  3359 */                     }
/*  3360 */                     //
/*  3361 */                     // line 110:
/*  3362 */                     //         return self
/*  3363 */                     //         ^
/*  3364 */                     //
/*  3365 */                     $currLineNo = 110;
/*  3366 */                     $currColNo = 8;
/*  3367 */ 
/*  3368 */                     if (self === undefined) {
/*  3369 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3370 */                     }
/*  3371 */                     return self;
/*  3372 */                     return Sk.builtin.none.none$;
/*  3373 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3374 */                 }
/*  3375 */             } catch (err) {
/*  3376 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3377 */                     err = new Sk.builtin.ExternalError(err);
/*  3378 */                 }
/*  3379 */                 err.traceback.push({
/*  3380 */                     lineno: $currLineNo,
/*  3381 */                     colno: $currColNo,
/*  3382 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3383 */                 });
/*  3384 */                 if ($exc.length > 0) {
/*  3385 */                     $err = err;
/*  3386 */                     $blk = $exc.pop();
/*  3387 */                     continue;
/*  3388 */                 } else {
/*  3389 */                     throw err;
/*  3390 */                 }
/*  3391 */             }
/*  3392 */         }
/*  3393 */     });
/*  3394 */     var $scope206 = (function $isPacketPending207$(self) {
/*  3395 */         var self, self;
/*  3396 */         var $wakeFromSuspension = function() {
/*  3397 */             var susp = $scope206.$wakingSuspension;
/*  3398 */             delete $scope206.$wakingSuspension;
/*  3399 */             $blk = susp.$blk;
/*  3400 */             $loc = susp.$loc;
/*  3401 */             $gbl = susp.$gbl;
/*  3402 */             $exc = susp.$exc;
/*  3403 */             $err = susp.$err;
/*  3404 */             $postfinally = susp.$postfinally;
/*  3405 */             $currLineNo = susp.$lineno;
/*  3406 */             $currColNo = susp.$colno;
/*  3407 */             Sk.lastYield = Date.now();
/*  3408 */             self = susp.$tmps.self;
/*  3409 */             try {
/*  3410 */                 $ret = susp.child.resume();
/*  3411 */             } catch (err) {
/*  3412 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3413 */                     err = new Sk.builtin.ExternalError(err);
/*  3414 */                 }
/*  3415 */                 err.traceback.push({
/*  3416 */                     lineno: $currLineNo,
/*  3417 */                     colno: $currColNo,
/*  3418 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3419 */                 });
/*  3420 */                 if ($exc.length > 0) {
/*  3421 */                     $err = err;
/*  3422 */                     $blk = $exc.pop();
/*  3423 */                 } else {
/*  3424 */                     throw err;
/*  3425 */                 }
/*  3426 */             }
/*  3427 */         };
/*  3428 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3429 */             var susp = new Sk.misceval.Suspension();
/*  3430 */             susp.child = $child;
/*  3431 */             susp.resume = function() {
/*  3432 */                 $scope206.$wakingSuspension = susp;
/*  3433 */                 return $scope206();
/*  3434 */             };
/*  3435 */             susp.data = susp.child.data;
/*  3436 */             susp.$blk = $blk;
/*  3437 */             susp.$loc = $loc;
/*  3438 */             susp.$gbl = $gbl;
/*  3439 */             susp.$exc = $exc;
/*  3440 */             susp.$err = $err;
/*  3441 */             susp.$postfinally = $postfinally;
/*  3442 */             susp.$filename = $filename;
/*  3443 */             susp.$lineno = $lineno;
/*  3444 */             susp.$colno = $colno;
/*  3445 */             susp.optional = susp.child.optional;
/*  3446 */             susp.$tmps = {
/*  3447 */                 "self": self
/*  3448 */             };
/*  3449 */             return susp;
/*  3450 */         };
/*  3451 */         var $blk = 0,
/*  3452 */             $exc = [],
/*  3453 */             $loc = {},
/*  3454 */             $gbl = this,
/*  3455 */             $err = undefined,
/*  3456 */             $ret = undefined,
/*  3457 */             $postfinally = undefined,
/*  3458 */             $currLineNo = undefined,
/*  3459 */             $currColNo = undefined;
/*  3460 */         if ($scope206.$wakingSuspension !== undefined) {
/*  3461 */             $wakeFromSuspension();
/*  3462 */         } else {
/*  3463 */             Sk.builtin.pyCheckArgs("isPacketPending", arguments, 1, 1, false, false);
/*  3464 */         }
/*  3465 */         while (true) {
/*  3466 */             try {
/*  3467 */                 switch ($blk) {
/*  3468 */                 case 0:
/*  3469 */                     /* --- codeobj entry --- */
/*  3470 */                     if (self === undefined) {
/*  3471 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3472 */                     }
/*  3473 */ 
/*  3474 */                     //
/*  3475 */                     // line 113:
/*  3476 */                     //         return self.packet_pending
/*  3477 */                     //         ^
/*  3478 */                     //
/*  3479 */                     $currLineNo = 113;
/*  3480 */                     $currColNo = 8;
/*  3481 */ 
/*  3482 */                     if (self === undefined) {
/*  3483 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3484 */                     }
/*  3485 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  3486 */                     $blk = 1; /* allowing case fallthrough */
/*  3487 */                 case 1:
/*  3488 */                     /* --- function return or resume suspension --- */
/*  3489 */                     if ($ret && $ret.$isSuspension) {
/*  3490 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 113, 15);
/*  3491 */                     }
/*  3492 */                     var $lattr208 = $ret;
/*  3493 */                     return $lattr208;
/*  3494 */                     return Sk.builtin.none.none$;
/*  3495 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3496 */                 }
/*  3497 */             } catch (err) {
/*  3498 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3499 */                     err = new Sk.builtin.ExternalError(err);
/*  3500 */                 }
/*  3501 */                 err.traceback.push({
/*  3502 */                     lineno: $currLineNo,
/*  3503 */                     colno: $currColNo,
/*  3504 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3505 */                 });
/*  3506 */                 if ($exc.length > 0) {
/*  3507 */                     $err = err;
/*  3508 */                     $blk = $exc.pop();
/*  3509 */                     continue;
/*  3510 */                 } else {
/*  3511 */                     throw err;
/*  3512 */                 }
/*  3513 */             }
/*  3514 */         }
/*  3515 */     });
/*  3516 */     var $scope210 = (function $isTaskWaiting211$(self) {
/*  3517 */         var self, self;
/*  3518 */         var $wakeFromSuspension = function() {
/*  3519 */             var susp = $scope210.$wakingSuspension;
/*  3520 */             delete $scope210.$wakingSuspension;
/*  3521 */             $blk = susp.$blk;
/*  3522 */             $loc = susp.$loc;
/*  3523 */             $gbl = susp.$gbl;
/*  3524 */             $exc = susp.$exc;
/*  3525 */             $err = susp.$err;
/*  3526 */             $postfinally = susp.$postfinally;
/*  3527 */             $currLineNo = susp.$lineno;
/*  3528 */             $currColNo = susp.$colno;
/*  3529 */             Sk.lastYield = Date.now();
/*  3530 */             self = susp.$tmps.self;
/*  3531 */             try {
/*  3532 */                 $ret = susp.child.resume();
/*  3533 */             } catch (err) {
/*  3534 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3535 */                     err = new Sk.builtin.ExternalError(err);
/*  3536 */                 }
/*  3537 */                 err.traceback.push({
/*  3538 */                     lineno: $currLineNo,
/*  3539 */                     colno: $currColNo,
/*  3540 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3541 */                 });
/*  3542 */                 if ($exc.length > 0) {
/*  3543 */                     $err = err;
/*  3544 */                     $blk = $exc.pop();
/*  3545 */                 } else {
/*  3546 */                     throw err;
/*  3547 */                 }
/*  3548 */             }
/*  3549 */         };
/*  3550 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3551 */             var susp = new Sk.misceval.Suspension();
/*  3552 */             susp.child = $child;
/*  3553 */             susp.resume = function() {
/*  3554 */                 $scope210.$wakingSuspension = susp;
/*  3555 */                 return $scope210();
/*  3556 */             };
/*  3557 */             susp.data = susp.child.data;
/*  3558 */             susp.$blk = $blk;
/*  3559 */             susp.$loc = $loc;
/*  3560 */             susp.$gbl = $gbl;
/*  3561 */             susp.$exc = $exc;
/*  3562 */             susp.$err = $err;
/*  3563 */             susp.$postfinally = $postfinally;
/*  3564 */             susp.$filename = $filename;
/*  3565 */             susp.$lineno = $lineno;
/*  3566 */             susp.$colno = $colno;
/*  3567 */             susp.optional = susp.child.optional;
/*  3568 */             susp.$tmps = {
/*  3569 */                 "self": self
/*  3570 */             };
/*  3571 */             return susp;
/*  3572 */         };
/*  3573 */         var $blk = 0,
/*  3574 */             $exc = [],
/*  3575 */             $loc = {},
/*  3576 */             $gbl = this,
/*  3577 */             $err = undefined,
/*  3578 */             $ret = undefined,
/*  3579 */             $postfinally = undefined,
/*  3580 */             $currLineNo = undefined,
/*  3581 */             $currColNo = undefined;
/*  3582 */         if ($scope210.$wakingSuspension !== undefined) {
/*  3583 */             $wakeFromSuspension();
/*  3584 */         } else {
/*  3585 */             Sk.builtin.pyCheckArgs("isTaskWaiting", arguments, 1, 1, false, false);
/*  3586 */         }
/*  3587 */         while (true) {
/*  3588 */             try {
/*  3589 */                 switch ($blk) {
/*  3590 */                 case 0:
/*  3591 */                     /* --- codeobj entry --- */
/*  3592 */                     if (self === undefined) {
/*  3593 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3594 */                     }
/*  3595 */ 
/*  3596 */                     //
/*  3597 */                     // line 116:
/*  3598 */                     //         return self.task_waiting
/*  3599 */                     //         ^
/*  3600 */                     //
/*  3601 */                     $currLineNo = 116;
/*  3602 */                     $currColNo = 8;
/*  3603 */ 
/*  3604 */                     if (self === undefined) {
/*  3605 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3606 */                     }
/*  3607 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  3608 */                     $blk = 1; /* allowing case fallthrough */
/*  3609 */                 case 1:
/*  3610 */                     /* --- function return or resume suspension --- */
/*  3611 */                     if ($ret && $ret.$isSuspension) {
/*  3612 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 116, 15);
/*  3613 */                     }
/*  3614 */                     var $lattr212 = $ret;
/*  3615 */                     return $lattr212;
/*  3616 */                     return Sk.builtin.none.none$;
/*  3617 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3618 */                 }
/*  3619 */             } catch (err) {
/*  3620 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3621 */                     err = new Sk.builtin.ExternalError(err);
/*  3622 */                 }
/*  3623 */                 err.traceback.push({
/*  3624 */                     lineno: $currLineNo,
/*  3625 */                     colno: $currColNo,
/*  3626 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3627 */                 });
/*  3628 */                 if ($exc.length > 0) {
/*  3629 */                     $err = err;
/*  3630 */                     $blk = $exc.pop();
/*  3631 */                     continue;
/*  3632 */                 } else {
/*  3633 */                     throw err;
/*  3634 */                 }
/*  3635 */             }
/*  3636 */         }
/*  3637 */     });
/*  3638 */     var $scope214 = (function $isTaskHolding215$(self) {
/*  3639 */         var self, self;
/*  3640 */         var $wakeFromSuspension = function() {
/*  3641 */             var susp = $scope214.$wakingSuspension;
/*  3642 */             delete $scope214.$wakingSuspension;
/*  3643 */             $blk = susp.$blk;
/*  3644 */             $loc = susp.$loc;
/*  3645 */             $gbl = susp.$gbl;
/*  3646 */             $exc = susp.$exc;
/*  3647 */             $err = susp.$err;
/*  3648 */             $postfinally = susp.$postfinally;
/*  3649 */             $currLineNo = susp.$lineno;
/*  3650 */             $currColNo = susp.$colno;
/*  3651 */             Sk.lastYield = Date.now();
/*  3652 */             self = susp.$tmps.self;
/*  3653 */             try {
/*  3654 */                 $ret = susp.child.resume();
/*  3655 */             } catch (err) {
/*  3656 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3657 */                     err = new Sk.builtin.ExternalError(err);
/*  3658 */                 }
/*  3659 */                 err.traceback.push({
/*  3660 */                     lineno: $currLineNo,
/*  3661 */                     colno: $currColNo,
/*  3662 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3663 */                 });
/*  3664 */                 if ($exc.length > 0) {
/*  3665 */                     $err = err;
/*  3666 */                     $blk = $exc.pop();
/*  3667 */                 } else {
/*  3668 */                     throw err;
/*  3669 */                 }
/*  3670 */             }
/*  3671 */         };
/*  3672 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3673 */             var susp = new Sk.misceval.Suspension();
/*  3674 */             susp.child = $child;
/*  3675 */             susp.resume = function() {
/*  3676 */                 $scope214.$wakingSuspension = susp;
/*  3677 */                 return $scope214();
/*  3678 */             };
/*  3679 */             susp.data = susp.child.data;
/*  3680 */             susp.$blk = $blk;
/*  3681 */             susp.$loc = $loc;
/*  3682 */             susp.$gbl = $gbl;
/*  3683 */             susp.$exc = $exc;
/*  3684 */             susp.$err = $err;
/*  3685 */             susp.$postfinally = $postfinally;
/*  3686 */             susp.$filename = $filename;
/*  3687 */             susp.$lineno = $lineno;
/*  3688 */             susp.$colno = $colno;
/*  3689 */             susp.optional = susp.child.optional;
/*  3690 */             susp.$tmps = {
/*  3691 */                 "self": self
/*  3692 */             };
/*  3693 */             return susp;
/*  3694 */         };
/*  3695 */         var $blk = 0,
/*  3696 */             $exc = [],
/*  3697 */             $loc = {},
/*  3698 */             $gbl = this,
/*  3699 */             $err = undefined,
/*  3700 */             $ret = undefined,
/*  3701 */             $postfinally = undefined,
/*  3702 */             $currLineNo = undefined,
/*  3703 */             $currColNo = undefined;
/*  3704 */         if ($scope214.$wakingSuspension !== undefined) {
/*  3705 */             $wakeFromSuspension();
/*  3706 */         } else {
/*  3707 */             Sk.builtin.pyCheckArgs("isTaskHolding", arguments, 1, 1, false, false);
/*  3708 */         }
/*  3709 */         while (true) {
/*  3710 */             try {
/*  3711 */                 switch ($blk) {
/*  3712 */                 case 0:
/*  3713 */                     /* --- codeobj entry --- */
/*  3714 */                     if (self === undefined) {
/*  3715 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3716 */                     }
/*  3717 */ 
/*  3718 */                     //
/*  3719 */                     // line 119:
/*  3720 */                     //         return self.task_holding
/*  3721 */                     //         ^
/*  3722 */                     //
/*  3723 */                     $currLineNo = 119;
/*  3724 */                     $currColNo = 8;
/*  3725 */ 
/*  3726 */                     if (self === undefined) {
/*  3727 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3728 */                     }
/*  3729 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  3730 */                     $blk = 1; /* allowing case fallthrough */
/*  3731 */                 case 1:
/*  3732 */                     /* --- function return or resume suspension --- */
/*  3733 */                     if ($ret && $ret.$isSuspension) {
/*  3734 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 119, 15);
/*  3735 */                     }
/*  3736 */                     var $lattr216 = $ret;
/*  3737 */                     return $lattr216;
/*  3738 */                     return Sk.builtin.none.none$;
/*  3739 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3740 */                 }
/*  3741 */             } catch (err) {
/*  3742 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3743 */                     err = new Sk.builtin.ExternalError(err);
/*  3744 */                 }
/*  3745 */                 err.traceback.push({
/*  3746 */                     lineno: $currLineNo,
/*  3747 */                     colno: $currColNo,
/*  3748 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3749 */                 });
/*  3750 */                 if ($exc.length > 0) {
/*  3751 */                     $err = err;
/*  3752 */                     $blk = $exc.pop();
/*  3753 */                     continue;
/*  3754 */                 } else {
/*  3755 */                     throw err;
/*  3756 */                 }
/*  3757 */             }
/*  3758 */         }
/*  3759 */     });
/*  3760 */     var $scope218 = (function $isTaskHoldingOrWaiting219$(self) {
/*  3761 */         var self, self, self, self, $lattr220, $boolopsucc221, $jtrue222, $lattr220, $boolopsucc221, $jtrue222, $lattr223, $unaryop224, $boolopsucc225, $jfalse226;
/*  3762 */         var $wakeFromSuspension = function() {
/*  3763 */             var susp = $scope218.$wakingSuspension;
/*  3764 */             delete $scope218.$wakingSuspension;
/*  3765 */             $blk = susp.$blk;
/*  3766 */             $loc = susp.$loc;
/*  3767 */             $gbl = susp.$gbl;
/*  3768 */             $exc = susp.$exc;
/*  3769 */             $err = susp.$err;
/*  3770 */             $postfinally = susp.$postfinally;
/*  3771 */             $currLineNo = susp.$lineno;
/*  3772 */             $currColNo = susp.$colno;
/*  3773 */             Sk.lastYield = Date.now();
/*  3774 */             self = susp.$tmps.self;
/*  3775 */             $lattr220 = susp.$tmps.$lattr220;
/*  3776 */             $boolopsucc221 = susp.$tmps.$boolopsucc221;
/*  3777 */             $jtrue222 = susp.$tmps.$jtrue222;
/*  3778 */             $lattr223 = susp.$tmps.$lattr223;
/*  3779 */             $unaryop224 = susp.$tmps.$unaryop224;
/*  3780 */             $boolopsucc225 = susp.$tmps.$boolopsucc225;
/*  3781 */             $jfalse226 = susp.$tmps.$jfalse226;
/*  3782 */             try {
/*  3783 */                 $ret = susp.child.resume();
/*  3784 */             } catch (err) {
/*  3785 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3786 */                     err = new Sk.builtin.ExternalError(err);
/*  3787 */                 }
/*  3788 */                 err.traceback.push({
/*  3789 */                     lineno: $currLineNo,
/*  3790 */                     colno: $currColNo,
/*  3791 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3792 */                 });
/*  3793 */                 if ($exc.length > 0) {
/*  3794 */                     $err = err;
/*  3795 */                     $blk = $exc.pop();
/*  3796 */                 } else {
/*  3797 */                     throw err;
/*  3798 */                 }
/*  3799 */             }
/*  3800 */         };
/*  3801 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3802 */             var susp = new Sk.misceval.Suspension();
/*  3803 */             susp.child = $child;
/*  3804 */             susp.resume = function() {
/*  3805 */                 $scope218.$wakingSuspension = susp;
/*  3806 */                 return $scope218();
/*  3807 */             };
/*  3808 */             susp.data = susp.child.data;
/*  3809 */             susp.$blk = $blk;
/*  3810 */             susp.$loc = $loc;
/*  3811 */             susp.$gbl = $gbl;
/*  3812 */             susp.$exc = $exc;
/*  3813 */             susp.$err = $err;
/*  3814 */             susp.$postfinally = $postfinally;
/*  3815 */             susp.$filename = $filename;
/*  3816 */             susp.$lineno = $lineno;
/*  3817 */             susp.$colno = $colno;
/*  3818 */             susp.optional = susp.child.optional;
/*  3819 */             susp.$tmps = {
/*  3820 */                 "self": self,
/*  3821 */                 "$lattr220": $lattr220,
/*  3822 */                 "$boolopsucc221": $boolopsucc221,
/*  3823 */                 "$jtrue222": $jtrue222,
/*  3824 */                 "$lattr223": $lattr223,
/*  3825 */                 "$unaryop224": $unaryop224,
/*  3826 */                 "$boolopsucc225": $boolopsucc225,
/*  3827 */                 "$jfalse226": $jfalse226
/*  3828 */             };
/*  3829 */             return susp;
/*  3830 */         };
/*  3831 */         var $blk = 0,
/*  3832 */             $exc = [],
/*  3833 */             $loc = {},
/*  3834 */             $gbl = this,
/*  3835 */             $err = undefined,
/*  3836 */             $ret = undefined,
/*  3837 */             $postfinally = undefined,
/*  3838 */             $currLineNo = undefined,
/*  3839 */             $currColNo = undefined;
/*  3840 */         if ($scope218.$wakingSuspension !== undefined) {
/*  3841 */             $wakeFromSuspension();
/*  3842 */         } else {
/*  3843 */             Sk.builtin.pyCheckArgs("isTaskHoldingOrWaiting", arguments, 1, 1, false, false);
/*  3844 */         }
/*  3845 */         while (true) {
/*  3846 */             try {
/*  3847 */                 switch ($blk) {
/*  3848 */                 case 0:
/*  3849 */                     /* --- codeobj entry --- */
/*  3850 */                     if (self === undefined) {
/*  3851 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3852 */                     }
/*  3853 */ 
/*  3854 */                     //
/*  3855 */                     // line 122:
/*  3856 */                     //         return self.task_holding or (not self.packet_pending and self.task_waiting)
/*  3857 */                     //         ^
/*  3858 */                     //
/*  3859 */                     $currLineNo = 122;
/*  3860 */                     $currColNo = 8;
/*  3861 */ 
/*  3862 */                     if (self === undefined) {
/*  3863 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3864 */                     }
/*  3865 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  3866 */                     $blk = 2; /* allowing case fallthrough */
/*  3867 */                 case 2:
/*  3868 */                     /* --- function return or resume suspension --- */
/*  3869 */                     if ($ret && $ret.$isSuspension) {
/*  3870 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 15);
/*  3871 */                     }
/*  3872 */                     var $lattr220 = $ret;
/*  3873 */                     var $boolopsucc221 = $lattr220;
/*  3874 */                     $boolopsucc221 = $lattr220;
/*  3875 */                     var $jtrue222 = ($lattr220 === true || Sk.misceval.isTrue($lattr220));
/*  3876 */                     if ($jtrue222) { /*test passed */
/*  3877 */                         $blk = 1;
/*  3878 */                         continue;
/*  3879 */                     }
/*  3880 */                     if (self === undefined) {
/*  3881 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3882 */                     }
/*  3883 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  3884 */                     $blk = 4; /* allowing case fallthrough */
/*  3885 */                 case 4:
/*  3886 */                     /* --- function return or resume suspension --- */
/*  3887 */                     if ($ret && $ret.$isSuspension) {
/*  3888 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 41);
/*  3889 */                     }
/*  3890 */                     var $lattr223 = $ret;
/*  3891 */                     var $unaryop224 = Sk.abstr.numberUnaryOp($lattr223, 'Not');
/*  3892 */                     var $boolopsucc225 = $unaryop224;
/*  3893 */                     $boolopsucc225 = $unaryop224;
/*  3894 */                     var $jfalse226 = ($unaryop224 === false || !Sk.misceval.isTrue($unaryop224));
/*  3895 */                     if ($jfalse226) { /*test failed */
/*  3896 */                         $blk = 3;
/*  3897 */                         continue;
/*  3898 */                     }
/*  3899 */                     if (self === undefined) {
/*  3900 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3901 */                     }
/*  3902 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  3903 */                     $blk = 5; /* allowing case fallthrough */
/*  3904 */                 case 5:
/*  3905 */                     /* --- function return or resume suspension --- */
/*  3906 */                     if ($ret && $ret.$isSuspension) {
/*  3907 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 122, 65);
/*  3908 */                     }
/*  3909 */                     var $lattr227 = $ret;
/*  3910 */                     $boolopsucc225 = $lattr227;
/*  3911 */                     var $jfalse228 = ($lattr227 === false || !Sk.misceval.isTrue($lattr227));
/*  3912 */                     if ($jfalse228) { /*test failed */
/*  3913 */                         $blk = 3;
/*  3914 */                         continue;
/*  3915 */                     }
/*  3916 */                     $blk = 3; /* allowing case fallthrough */
/*  3917 */                 case 3:
/*  3918 */                     /* --- end of boolop --- */
/*  3919 */                     $boolopsucc221 = $boolopsucc225;
/*  3920 */                     var $jtrue229 = ($boolopsucc225 === true || Sk.misceval.isTrue($boolopsucc225));
/*  3921 */                     if ($jtrue229) { /*test passed */
/*  3922 */                         $blk = 1;
/*  3923 */                         continue;
/*  3924 */                     }
/*  3925 */                     $blk = 1; /* allowing case fallthrough */
/*  3926 */                 case 1:
/*  3927 */                     /* --- end of boolop --- */
/*  3928 */                     return $boolopsucc221;
/*  3929 */                     return Sk.builtin.none.none$;
/*  3930 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3931 */                 }
/*  3932 */             } catch (err) {
/*  3933 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3934 */                     err = new Sk.builtin.ExternalError(err);
/*  3935 */                 }
/*  3936 */                 err.traceback.push({
/*  3937 */                     lineno: $currLineNo,
/*  3938 */                     colno: $currColNo,
/*  3939 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3940 */                 });
/*  3941 */                 if ($exc.length > 0) {
/*  3942 */                     $err = err;
/*  3943 */                     $blk = $exc.pop();
/*  3944 */                     continue;
/*  3945 */                 } else {
/*  3946 */                     throw err;
/*  3947 */                 }
/*  3948 */             }
/*  3949 */         }
/*  3950 */     });
/*  3951 */     var $scope231 = (function $isWaitingWithPacket232$(self) {
/*  3952 */         var self, self, self, self, $lattr233, $boolopsucc234, $jfalse235, $lattr233, $boolopsucc234, $jfalse235, $lattr236, $jfalse237;
/*  3953 */         var $wakeFromSuspension = function() {
/*  3954 */             var susp = $scope231.$wakingSuspension;
/*  3955 */             delete $scope231.$wakingSuspension;
/*  3956 */             $blk = susp.$blk;
/*  3957 */             $loc = susp.$loc;
/*  3958 */             $gbl = susp.$gbl;
/*  3959 */             $exc = susp.$exc;
/*  3960 */             $err = susp.$err;
/*  3961 */             $postfinally = susp.$postfinally;
/*  3962 */             $currLineNo = susp.$lineno;
/*  3963 */             $currColNo = susp.$colno;
/*  3964 */             Sk.lastYield = Date.now();
/*  3965 */             self = susp.$tmps.self;
/*  3966 */             $lattr233 = susp.$tmps.$lattr233;
/*  3967 */             $boolopsucc234 = susp.$tmps.$boolopsucc234;
/*  3968 */             $jfalse235 = susp.$tmps.$jfalse235;
/*  3969 */             $lattr236 = susp.$tmps.$lattr236;
/*  3970 */             $jfalse237 = susp.$tmps.$jfalse237;
/*  3971 */             try {
/*  3972 */                 $ret = susp.child.resume();
/*  3973 */             } catch (err) {
/*  3974 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3975 */                     err = new Sk.builtin.ExternalError(err);
/*  3976 */                 }
/*  3977 */                 err.traceback.push({
/*  3978 */                     lineno: $currLineNo,
/*  3979 */                     colno: $currColNo,
/*  3980 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  3981 */                 });
/*  3982 */                 if ($exc.length > 0) {
/*  3983 */                     $err = err;
/*  3984 */                     $blk = $exc.pop();
/*  3985 */                 } else {
/*  3986 */                     throw err;
/*  3987 */                 }
/*  3988 */             }
/*  3989 */         };
/*  3990 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3991 */             var susp = new Sk.misceval.Suspension();
/*  3992 */             susp.child = $child;
/*  3993 */             susp.resume = function() {
/*  3994 */                 $scope231.$wakingSuspension = susp;
/*  3995 */                 return $scope231();
/*  3996 */             };
/*  3997 */             susp.data = susp.child.data;
/*  3998 */             susp.$blk = $blk;
/*  3999 */             susp.$loc = $loc;
/*  4000 */             susp.$gbl = $gbl;
/*  4001 */             susp.$exc = $exc;
/*  4002 */             susp.$err = $err;
/*  4003 */             susp.$postfinally = $postfinally;
/*  4004 */             susp.$filename = $filename;
/*  4005 */             susp.$lineno = $lineno;
/*  4006 */             susp.$colno = $colno;
/*  4007 */             susp.optional = susp.child.optional;
/*  4008 */             susp.$tmps = {
/*  4009 */                 "self": self,
/*  4010 */                 "$lattr233": $lattr233,
/*  4011 */                 "$boolopsucc234": $boolopsucc234,
/*  4012 */                 "$jfalse235": $jfalse235,
/*  4013 */                 "$lattr236": $lattr236,
/*  4014 */                 "$jfalse237": $jfalse237
/*  4015 */             };
/*  4016 */             return susp;
/*  4017 */         };
/*  4018 */         var $blk = 0,
/*  4019 */             $exc = [],
/*  4020 */             $loc = {},
/*  4021 */             $gbl = this,
/*  4022 */             $err = undefined,
/*  4023 */             $ret = undefined,
/*  4024 */             $postfinally = undefined,
/*  4025 */             $currLineNo = undefined,
/*  4026 */             $currColNo = undefined;
/*  4027 */         if ($scope231.$wakingSuspension !== undefined) {
/*  4028 */             $wakeFromSuspension();
/*  4029 */         } else {
/*  4030 */             Sk.builtin.pyCheckArgs("isWaitingWithPacket", arguments, 1, 1, false, false);
/*  4031 */         }
/*  4032 */         while (true) {
/*  4033 */             try {
/*  4034 */                 switch ($blk) {
/*  4035 */                 case 0:
/*  4036 */                     /* --- codeobj entry --- */
/*  4037 */                     if (self === undefined) {
/*  4038 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4039 */                     }
/*  4040 */ 
/*  4041 */                     //
/*  4042 */                     // line 125:
/*  4043 */                     //         return self.packet_pending and self.task_waiting and not self.task_holding
/*  4044 */                     //         ^
/*  4045 */                     //
/*  4046 */                     $currLineNo = 125;
/*  4047 */                     $currColNo = 8;
/*  4048 */ 
/*  4049 */                     if (self === undefined) {
/*  4050 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4051 */                     }
/*  4052 */                     $ret = Sk.abstr.gattr(self, 'packet_pending', true);
/*  4053 */                     $blk = 2; /* allowing case fallthrough */
/*  4054 */                 case 2:
/*  4055 */                     /* --- function return or resume suspension --- */
/*  4056 */                     if ($ret && $ret.$isSuspension) {
/*  4057 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 15);
/*  4058 */                     }
/*  4059 */                     var $lattr233 = $ret;
/*  4060 */                     var $boolopsucc234 = $lattr233;
/*  4061 */                     $boolopsucc234 = $lattr233;
/*  4062 */                     var $jfalse235 = ($lattr233 === false || !Sk.misceval.isTrue($lattr233));
/*  4063 */                     if ($jfalse235) { /*test failed */
/*  4064 */                         $blk = 1;
/*  4065 */                         continue;
/*  4066 */                     }
/*  4067 */                     if (self === undefined) {
/*  4068 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4069 */                     }
/*  4070 */                     $ret = Sk.abstr.gattr(self, 'task_waiting', true);
/*  4071 */                     $blk = 3; /* allowing case fallthrough */
/*  4072 */                 case 3:
/*  4073 */                     /* --- function return or resume suspension --- */
/*  4074 */                     if ($ret && $ret.$isSuspension) {
/*  4075 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 39);
/*  4076 */                     }
/*  4077 */                     var $lattr236 = $ret;
/*  4078 */                     $boolopsucc234 = $lattr236;
/*  4079 */                     var $jfalse237 = ($lattr236 === false || !Sk.misceval.isTrue($lattr236));
/*  4080 */                     if ($jfalse237) { /*test failed */
/*  4081 */                         $blk = 1;
/*  4082 */                         continue;
/*  4083 */                     }
/*  4084 */                     if (self === undefined) {
/*  4085 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4086 */                     }
/*  4087 */                     $ret = Sk.abstr.gattr(self, 'task_holding', true);
/*  4088 */                     $blk = 4; /* allowing case fallthrough */
/*  4089 */                 case 4:
/*  4090 */                     /* --- function return or resume suspension --- */
/*  4091 */                     if ($ret && $ret.$isSuspension) {
/*  4092 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 125, 65);
/*  4093 */                     }
/*  4094 */                     var $lattr238 = $ret;
/*  4095 */                     var $unaryop239 = Sk.abstr.numberUnaryOp($lattr238, 'Not');
/*  4096 */                     $boolopsucc234 = $unaryop239;
/*  4097 */                     var $jfalse240 = ($unaryop239 === false || !Sk.misceval.isTrue($unaryop239));
/*  4098 */                     if ($jfalse240) { /*test failed */
/*  4099 */                         $blk = 1;
/*  4100 */                         continue;
/*  4101 */                     }
/*  4102 */                     $blk = 1; /* allowing case fallthrough */
/*  4103 */                 case 1:
/*  4104 */                     /* --- end of boolop --- */
/*  4105 */                     return $boolopsucc234;
/*  4106 */                     return Sk.builtin.none.none$;
/*  4107 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4108 */                 }
/*  4109 */             } catch (err) {
/*  4110 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4111 */                     err = new Sk.builtin.ExternalError(err);
/*  4112 */                 }
/*  4113 */                 err.traceback.push({
/*  4114 */                     lineno: $currLineNo,
/*  4115 */                     colno: $currColNo,
/*  4116 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4117 */                 });
/*  4118 */                 if ($exc.length > 0) {
/*  4119 */                     $err = err;
/*  4120 */                     $blk = $exc.pop();
/*  4121 */                     continue;
/*  4122 */                 } else {
/*  4123 */                     throw err;
/*  4124 */                 }
/*  4125 */             }
/*  4126 */         }
/*  4127 */     });
/*  4128 */     var $scope243 = (function $trace244$(a) {
/*  4129 */         var a, $loadgbl247, $compareres248;
/*  4130 */         var $wakeFromSuspension = function() {
/*  4131 */             var susp = $scope243.$wakingSuspension;
/*  4132 */             delete $scope243.$wakingSuspension;
/*  4133 */             $blk = susp.$blk;
/*  4134 */             $loc = susp.$loc;
/*  4135 */             $gbl = susp.$gbl;
/*  4136 */             $exc = susp.$exc;
/*  4137 */             $err = susp.$err;
/*  4138 */             $postfinally = susp.$postfinally;
/*  4139 */             $currLineNo = susp.$lineno;
/*  4140 */             $currColNo = susp.$colno;
/*  4141 */             Sk.lastYield = Date.now();
/*  4142 */             a = susp.$tmps.a;
/*  4143 */             $loadgbl247 = susp.$tmps.$loadgbl247;
/*  4144 */             $compareres248 = susp.$tmps.$compareres248;
/*  4145 */             try {
/*  4146 */                 $ret = susp.child.resume();
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
/*  4159 */                 } else {
/*  4160 */                     throw err;
/*  4161 */                 }
/*  4162 */             }
/*  4163 */         };
/*  4164 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4165 */             var susp = new Sk.misceval.Suspension();
/*  4166 */             susp.child = $child;
/*  4167 */             susp.resume = function() {
/*  4168 */                 $scope243.$wakingSuspension = susp;
/*  4169 */                 return $scope243();
/*  4170 */             };
/*  4171 */             susp.data = susp.child.data;
/*  4172 */             susp.$blk = $blk;
/*  4173 */             susp.$loc = $loc;
/*  4174 */             susp.$gbl = $gbl;
/*  4175 */             susp.$exc = $exc;
/*  4176 */             susp.$err = $err;
/*  4177 */             susp.$postfinally = $postfinally;
/*  4178 */             susp.$filename = $filename;
/*  4179 */             susp.$lineno = $lineno;
/*  4180 */             susp.$colno = $colno;
/*  4181 */             susp.optional = susp.child.optional;
/*  4182 */             susp.$tmps = {
/*  4183 */                 "a": a,
/*  4184 */                 "$loadgbl247": $loadgbl247,
/*  4185 */                 "$compareres248": $compareres248
/*  4186 */             };
/*  4187 */             return susp;
/*  4188 */         };
/*  4189 */         var $blk = 0,
/*  4190 */             $exc = [],
/*  4191 */             $loc = {},
/*  4192 */             $gbl = this,
/*  4193 */             $err = undefined,
/*  4194 */             $ret = undefined,
/*  4195 */             $postfinally = undefined,
/*  4196 */             $currLineNo = undefined,
/*  4197 */             $currColNo = undefined;
/*  4198 */         if ($scope243.$wakingSuspension !== undefined) {
/*  4199 */             $wakeFromSuspension();
/*  4200 */         } else {
/*  4201 */             Sk.builtin.pyCheckArgs("trace", arguments, 1, 1, false, false);
/*  4202 */         }
/*  4203 */         while (true) {
/*  4204 */             try {
/*  4205 */                 switch ($blk) {
/*  4206 */                 case 0:
/*  4207 */                     /* --- codeobj entry --- */
/*  4208 */                     if (a === undefined) {
/*  4209 */                         throw new Sk.builtin.UnboundLocalError('local variable \'a\' referenced before assignment');
/*  4210 */                     }
/*  4211 */ 
/*  4212 */                     //
/*  4213 */                     // line 135:
/*  4214 */                     //     global layout
/*  4215 */                     //     ^
/*  4216 */                     //
/*  4217 */                     $currLineNo = 135;
/*  4218 */                     $currColNo = 4;
/*  4219 */ 
/*  4220 */ 
/*  4221 */                     //
/*  4222 */                     // line 136:
/*  4223 */                     //     layout -= 1
/*  4224 */                     //     ^
/*  4225 */                     //
/*  4226 */                     $currLineNo = 136;
/*  4227 */                     $currColNo = 4;
/*  4228 */ 
/*  4229 */                     var $loadgbl245 = Sk.misceval.loadname('layout', $gbl);
/*  4230 */                     var $inplbinop246 = Sk.abstr.numberInplaceBinOp($loadgbl245, new Sk.builtin.int_(1), 'Sub');
/*  4231 */                     $gbl.layout = $inplbinop246;
/*  4232 */                     //
/*  4233 */                     // line 137:
/*  4234 */                     //     if layout <= 0:
/*  4235 */                     //     ^
/*  4236 */                     //
/*  4237 */                     $currLineNo = 137;
/*  4238 */                     $currColNo = 4;
/*  4239 */ 
/*  4240 */                     var $loadgbl247 = Sk.misceval.loadname('layout', $gbl);
/*  4241 */                     var $compareres248 = null;
/*  4242 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($loadgbl247, new Sk.builtin.int_(0), 'LtE', true));
/*  4243 */                     $blk = 3; /* allowing case fallthrough */
/*  4244 */                 case 3:
/*  4245 */                     /* --- function return or resume suspension --- */
/*  4246 */                     if ($ret && $ret.$isSuspension) {
/*  4247 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 137, 7);
/*  4248 */                     }
/*  4249 */                     $compareres248 = $ret;
/*  4250 */                     var $jfalse249 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4251 */                     if ($jfalse249) { /*test failed */
/*  4252 */                         $blk = 2;
/*  4253 */                         continue;
/*  4254 */                     }
/*  4255 */                     $blk = 2; /* allowing case fallthrough */
/*  4256 */                 case 2:
/*  4257 */                     /* --- done --- */
/*  4258 */                     var $jfalse250 = ($compareres248 === false || !Sk.misceval.isTrue($compareres248));
/*  4259 */                     if ($jfalse250) { /*test failed */
/*  4260 */                         $blk = 1;
/*  4261 */                         continue;
/*  4262 */                     }
/*  4263 */                     //
/*  4264 */                     // line 138:
/*  4265 */                     //         pass #print()
/*  4266 */                     //         ^
/*  4267 */                     //
/*  4268 */                     $currLineNo = 138;
/*  4269 */                     $currColNo = 8;
/*  4270 */ 
/*  4271 */ 
/*  4272 */                     //
/*  4273 */                     // line 139:
/*  4274 */                     //         layout = 50
/*  4275 */                     //         ^
/*  4276 */                     //
/*  4277 */                     $currLineNo = 139;
/*  4278 */                     $currColNo = 8;
/*  4279 */ 
/*  4280 */                     $gbl.layout = new Sk.builtin.int_(50);
/*  4281 */                     $blk = 1; /* allowing case fallthrough */
/*  4282 */                 case 1:
/*  4283 */                     /* --- end of if --- */
/*  4284 */                     //
/*  4285 */                     // line 140:
/*  4286 */                     //     pass #print(a, end=' ')
/*  4287 */                     //     ^
/*  4288 */                     //
/*  4289 */                     $currLineNo = 140;
/*  4290 */                     $currColNo = 4;
/*  4291 */ 
/*  4292 */                     return Sk.builtin.none.none$;
/*  4293 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4294 */                 }
/*  4295 */             } catch (err) {
/*  4296 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4297 */                     err = new Sk.builtin.ExternalError(err);
/*  4298 */                 }
/*  4299 */                 err.traceback.push({
/*  4300 */                     lineno: $currLineNo,
/*  4301 */                     colno: $currColNo,
/*  4302 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4303 */                 });
/*  4304 */                 if ($exc.length > 0) {
/*  4305 */                     $err = err;
/*  4306 */                     $blk = $exc.pop();
/*  4307 */                     continue;
/*  4308 */                 } else {
/*  4309 */                     throw err;
/*  4310 */                 }
/*  4311 */             }
/*  4312 */         }
/*  4313 */     });
/*  4314 */     var $scope253 = (function $TaskWorkArea$class_outer($globals, $locals, $rest) {
/*  4315 */         var $gbl = $globals,
/*  4316 */             $loc = $locals;
/*  4317 */         (function $TaskWorkArea$_closure() {
/*  4318 */             var $blk = 0,
/*  4319 */                 $exc = [],
/*  4320 */                 $ret = undefined,
/*  4321 */                 $postfinally = undefined,
/*  4322 */                 $currLineNo = undefined,
/*  4323 */                 $currColNo = undefined;
/*  4324 */             while (true) {
/*  4325 */                 try {
/*  4326 */                     switch ($blk) {
/*  4327 */                     case 0:
/*  4328 */                         /* --- class entry --- */
/*  4329 */                         //
/*  4330 */                         // line 146:
/*  4331 */                         //     def __init__(self):
/*  4332 */                         //     ^
/*  4333 */                         //
/*  4334 */                         $currLineNo = 146;
/*  4335 */                         $currColNo = 4;
/*  4336 */ 
/*  4337 */                         $scope254.co_name = new Sk.builtins['str']('__init__');
/*  4338 */                         $scope254.co_varnames = ['self'];
/*  4339 */                         var $funcobj260 = new Sk.builtins['function']($scope254, $gbl);
/*  4340 */                         $loc.__init__ = $funcobj260;
/*  4341 */                         return;
/*  4342 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4343 */                     }
/*  4344 */                 } catch (err) {
/*  4345 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  4346 */                         err = new Sk.builtin.ExternalError(err);
/*  4347 */                     }
/*  4348 */                     err.traceback.push({
/*  4349 */                         lineno: $currLineNo,
/*  4350 */                         colno: $currColNo,
/*  4351 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4352 */                     });
/*  4353 */                     if ($exc.length > 0) {
/*  4354 */                         $err = err;
/*  4355 */                         $blk = $exc.pop();
/*  4356 */                         continue;
/*  4357 */                     } else {
/*  4358 */                         throw err;
/*  4359 */                     }
/*  4360 */                 }
/*  4361 */             }
/*  4362 */         }).apply(null, $rest);
/*  4363 */     });
/*  4364 */     var $scope254 = (function $__init__255$(self) {
/*  4365 */         var self, self, self, self, self, $elem256, $loadlist257, $loadgbl258, $binop259;
/*  4366 */         var $wakeFromSuspension = function() {
/*  4367 */             var susp = $scope254.$wakingSuspension;
/*  4368 */             delete $scope254.$wakingSuspension;
/*  4369 */             $blk = susp.$blk;
/*  4370 */             $loc = susp.$loc;
/*  4371 */             $gbl = susp.$gbl;
/*  4372 */             $exc = susp.$exc;
/*  4373 */             $err = susp.$err;
/*  4374 */             $postfinally = susp.$postfinally;
/*  4375 */             $currLineNo = susp.$lineno;
/*  4376 */             $currColNo = susp.$colno;
/*  4377 */             Sk.lastYield = Date.now();
/*  4378 */             self = susp.$tmps.self;
/*  4379 */             $elem256 = susp.$tmps.$elem256;
/*  4380 */             $loadlist257 = susp.$tmps.$loadlist257;
/*  4381 */             $loadgbl258 = susp.$tmps.$loadgbl258;
/*  4382 */             $binop259 = susp.$tmps.$binop259;
/*  4383 */             try {
/*  4384 */                 $ret = susp.child.resume();
/*  4385 */             } catch (err) {
/*  4386 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4387 */                     err = new Sk.builtin.ExternalError(err);
/*  4388 */                 }
/*  4389 */                 err.traceback.push({
/*  4390 */                     lineno: $currLineNo,
/*  4391 */                     colno: $currColNo,
/*  4392 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4393 */                 });
/*  4394 */                 if ($exc.length > 0) {
/*  4395 */                     $err = err;
/*  4396 */                     $blk = $exc.pop();
/*  4397 */                 } else {
/*  4398 */                     throw err;
/*  4399 */                 }
/*  4400 */             }
/*  4401 */         };
/*  4402 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4403 */             var susp = new Sk.misceval.Suspension();
/*  4404 */             susp.child = $child;
/*  4405 */             susp.resume = function() {
/*  4406 */                 $scope254.$wakingSuspension = susp;
/*  4407 */                 return $scope254();
/*  4408 */             };
/*  4409 */             susp.data = susp.child.data;
/*  4410 */             susp.$blk = $blk;
/*  4411 */             susp.$loc = $loc;
/*  4412 */             susp.$gbl = $gbl;
/*  4413 */             susp.$exc = $exc;
/*  4414 */             susp.$err = $err;
/*  4415 */             susp.$postfinally = $postfinally;
/*  4416 */             susp.$filename = $filename;
/*  4417 */             susp.$lineno = $lineno;
/*  4418 */             susp.$colno = $colno;
/*  4419 */             susp.optional = susp.child.optional;
/*  4420 */             susp.$tmps = {
/*  4421 */                 "self": self,
/*  4422 */                 "$elem256": $elem256,
/*  4423 */                 "$loadlist257": $loadlist257,
/*  4424 */                 "$loadgbl258": $loadgbl258,
/*  4425 */                 "$binop259": $binop259
/*  4426 */             };
/*  4427 */             return susp;
/*  4428 */         };
/*  4429 */         var $blk = 0,
/*  4430 */             $exc = [],
/*  4431 */             $loc = {},
/*  4432 */             $gbl = this,
/*  4433 */             $err = undefined,
/*  4434 */             $ret = undefined,
/*  4435 */             $postfinally = undefined,
/*  4436 */             $currLineNo = undefined,
/*  4437 */             $currColNo = undefined;
/*  4438 */         if ($scope254.$wakingSuspension !== undefined) {
/*  4439 */             $wakeFromSuspension();
/*  4440 */         } else {
/*  4441 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*  4442 */         }
/*  4443 */         while (true) {
/*  4444 */             try {
/*  4445 */                 switch ($blk) {
/*  4446 */                 case 0:
/*  4447 */                     /* --- codeobj entry --- */
/*  4448 */                     if (self === undefined) {
/*  4449 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4450 */                     }
/*  4451 */ 
/*  4452 */                     //
/*  4453 */                     // line 147:
/*  4454 */                     //         self.taskTab = [None] * TASKTABSIZE
/*  4455 */                     //         ^
/*  4456 */                     //
/*  4457 */                     $currLineNo = 147;
/*  4458 */                     $currColNo = 8;
/*  4459 */ 
/*  4460 */                     var $elem256 = Sk.builtin.none.none$;
/*  4461 */                     var $loadlist257 = new Sk.builtins['list']([$elem256]);
/*  4462 */                     var $loadgbl258 = Sk.misceval.loadname('TASKTABSIZE', $gbl);
/*  4463 */                     var $binop259 = Sk.abstr.numberBinOp($loadlist257, $loadgbl258, 'Mult');
/*  4464 */                     if (self === undefined) {
/*  4465 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4466 */                     }
/*  4467 */                     $ret = Sk.abstr.sattr(self, 'taskTab', $binop259, true);
/*  4468 */                     $blk = 1; /* allowing case fallthrough */
/*  4469 */                 case 1:
/*  4470 */                     /* --- function return or resume suspension --- */
/*  4471 */                     if ($ret && $ret.$isSuspension) {
/*  4472 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 147, 8);
/*  4473 */                     }
/*  4474 */                     //
/*  4475 */                     // line 149:
/*  4476 */                     //         self.taskList = None
/*  4477 */                     //         ^
/*  4478 */                     //
/*  4479 */                     $currLineNo = 149;
/*  4480 */                     $currColNo = 8;
/*  4481 */ 
/*  4482 */                     if (self === undefined) {
/*  4483 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4484 */                     }
/*  4485 */                     $ret = Sk.abstr.sattr(self, 'taskList', Sk.builtin.none.none$, true);
/*  4486 */                     $blk = 2; /* allowing case fallthrough */
/*  4487 */                 case 2:
/*  4488 */                     /* --- function return or resume suspension --- */
/*  4489 */                     if ($ret && $ret.$isSuspension) {
/*  4490 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 149, 8);
/*  4491 */                     }
/*  4492 */                     //
/*  4493 */                     // line 151:
/*  4494 */                     //         self.holdCount = 0
/*  4495 */                     //         ^
/*  4496 */                     //
/*  4497 */                     $currLineNo = 151;
/*  4498 */                     $currColNo = 8;
/*  4499 */ 
/*  4500 */                     if (self === undefined) {
/*  4501 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4502 */                     }
/*  4503 */                     $ret = Sk.abstr.sattr(self, 'holdCount', new Sk.builtin.int_(0), true);
/*  4504 */                     $blk = 3; /* allowing case fallthrough */
/*  4505 */                 case 3:
/*  4506 */                     /* --- function return or resume suspension --- */
/*  4507 */                     if ($ret && $ret.$isSuspension) {
/*  4508 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 151, 8);
/*  4509 */                     }
/*  4510 */                     //
/*  4511 */                     // line 152:
/*  4512 */                     //         self.qpktCount = 0
/*  4513 */                     //         ^
/*  4514 */                     //
/*  4515 */                     $currLineNo = 152;
/*  4516 */                     $currColNo = 8;
/*  4517 */ 
/*  4518 */                     if (self === undefined) {
/*  4519 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4520 */                     }
/*  4521 */                     $ret = Sk.abstr.sattr(self, 'qpktCount', new Sk.builtin.int_(0), true);
/*  4522 */                     $blk = 4; /* allowing case fallthrough */
/*  4523 */                 case 4:
/*  4524 */                     /* --- function return or resume suspension --- */
/*  4525 */                     if ($ret && $ret.$isSuspension) {
/*  4526 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 152, 8);
/*  4527 */                     }
/*  4528 */                     return Sk.builtin.none.none$;
/*  4529 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4530 */                 }
/*  4531 */             } catch (err) {
/*  4532 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4533 */                     err = new Sk.builtin.ExternalError(err);
/*  4534 */                 }
/*  4535 */                 err.traceback.push({
/*  4536 */                     lineno: $currLineNo,
/*  4537 */                     colno: $currColNo,
/*  4538 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4539 */                 });
/*  4540 */                 if ($exc.length > 0) {
/*  4541 */                     $err = err;
/*  4542 */                     $blk = $exc.pop();
/*  4543 */                     continue;
/*  4544 */                 } else {
/*  4545 */                     throw err;
/*  4546 */                 }
/*  4547 */             }
/*  4548 */         }
/*  4549 */     });
/*  4550 */     var $scope265 = (function $Task$class_outer($globals, $locals, $rest) {
/*  4551 */         var $gbl = $globals,
/*  4552 */             $loc = $locals;
/*  4553 */         (function $Task$_closure() {
/*  4554 */             var $blk = 0,
/*  4555 */                 $exc = [],
/*  4556 */                 $ret = undefined,
/*  4557 */                 $postfinally = undefined,
/*  4558 */                 $currLineNo = undefined,
/*  4559 */                 $currColNo = undefined;
/*  4560 */             while (true) {
/*  4561 */                 try {
/*  4562 */                     switch ($blk) {
/*  4563 */                     case 0:
/*  4564 */                         /* --- class entry --- */
/*  4565 */                         //
/*  4566 */                         // line 159:
/*  4567 */                         //     def __init__(self,i,p,w,initialState,r):
/*  4568 */                         //     ^
/*  4569 */                         //
/*  4570 */                         $currLineNo = 159;
/*  4571 */                         $currColNo = 4;
/*  4572 */ 
/*  4573 */                         $scope266.co_name = new Sk.builtins['str']('__init__');
/*  4574 */                         $scope266.co_varnames = ['self', 'i', 'p', 'w', 'initialState', 'r'];
/*  4575 */                         var $funcobj279 = new Sk.builtins['function']($scope266, $gbl);
/*  4576 */                         $loc.__init__ = $funcobj279;
/*  4577 */                         //
/*  4578 */                         // line 174:
/*  4579 */                         //     def fn(self,pkt,r):
/*  4580 */                         //     ^
/*  4581 */                         //
/*  4582 */                         $currLineNo = 174;
/*  4583 */                         $currColNo = 4;
/*  4584 */ 
/*  4585 */                         $scope280.co_name = new Sk.builtins['str']('fn');
/*  4586 */                         $scope280.co_varnames = ['self', 'pkt', 'r'];
/*  4587 */                         var $funcobj284 = new Sk.builtins['function']($scope280, $gbl);
/*  4588 */                         $loc.fn = $funcobj284;
/*  4589 */                         //
/*  4590 */                         // line 178:
/*  4591 */                         //     def addPacket(self,p,old):
/*  4592 */                         //     ^
/*  4593 */                         //
/*  4594 */                         $currLineNo = 178;
/*  4595 */                         $currColNo = 4;
/*  4596 */ 
/*  4597 */                         $scope285.co_name = new Sk.builtins['str']('addPacket');
/*  4598 */                         $scope285.co_varnames = ['self', 'p', 'old'];
/*  4599 */                         var $funcobj299 = new Sk.builtins['function']($scope285, $gbl);
/*  4600 */                         $loc.addPacket = $funcobj299;
/*  4601 */                         //
/*  4602 */                         // line 189:
/*  4603 */                         //     def runTask(self):
/*  4604 */                         //     ^
/*  4605 */                         //
/*  4606 */                         $currLineNo = 189;
/*  4607 */                         $currColNo = 4;
/*  4608 */ 
/*  4609 */                         $scope300.co_name = new Sk.builtins['str']('runTask');
/*  4610 */                         $scope300.co_varnames = ['self'];
/*  4611 */                         var $funcobj318 = new Sk.builtins['function']($scope300, $gbl);
/*  4612 */                         $loc.runTask = $funcobj318;
/*  4613 */                         //
/*  4614 */                         // line 203:
/*  4615 */                         //     def waitTask(self):
/*  4616 */                         //     ^
/*  4617 */                         //
/*  4618 */                         $currLineNo = 203;
/*  4619 */                         $currColNo = 4;
/*  4620 */ 
/*  4621 */                         $scope319.co_name = new Sk.builtins['str']('waitTask');
/*  4622 */                         $scope319.co_varnames = ['self'];
/*  4623 */                         var $funcobj321 = new Sk.builtins['function']($scope319, $gbl);
/*  4624 */                         $loc.waitTask = $funcobj321;
/*  4625 */                         //
/*  4626 */                         // line 208:
/*  4627 */                         //     def hold(self):
/*  4628 */                         //     ^
/*  4629 */                         //
/*  4630 */                         $currLineNo = 208;
/*  4631 */                         $currColNo = 4;
/*  4632 */ 
/*  4633 */                         $scope322.co_name = new Sk.builtins['str']('hold');
/*  4634 */                         $scope322.co_varnames = ['self'];
/*  4635 */                         var $funcobj328 = new Sk.builtins['function']($scope322, $gbl);
/*  4636 */                         $loc.hold = $funcobj328;
/*  4637 */                         //
/*  4638 */                         // line 214:
/*  4639 */                         //     def release(self,i):
/*  4640 */                         //     ^
/*  4641 */                         //
/*  4642 */                         $currLineNo = 214;
/*  4643 */                         $currColNo = 4;
/*  4644 */ 
/*  4645 */                         $scope329.co_name = new Sk.builtins['str']('release');
/*  4646 */                         $scope329.co_varnames = ['self', 'i'];
/*  4647 */                         var $funcobj338 = new Sk.builtins['function']($scope329, $gbl);
/*  4648 */                         $loc.release = $funcobj338;
/*  4649 */                         //
/*  4650 */                         // line 223:
/*  4651 */                         //     def qpkt(self,pkt):
/*  4652 */                         //     ^
/*  4653 */                         //
/*  4654 */                         $currLineNo = 223;
/*  4655 */                         $currColNo = 4;
/*  4656 */ 
/*  4657 */                         $scope339.co_name = new Sk.builtins['str']('qpkt');
/*  4658 */                         $scope339.co_varnames = ['self', 'pkt'];
/*  4659 */                         var $funcobj350 = new Sk.builtins['function']($scope339, $gbl);
/*  4660 */                         $loc.qpkt = $funcobj350;
/*  4661 */                         //
/*  4662 */                         // line 231:
/*  4663 */                         //     def findtcb(self,id):
/*  4664 */                         //     ^
/*  4665 */                         //
/*  4666 */                         $currLineNo = 231;
/*  4667 */                         $currColNo = 4;
/*  4668 */ 
/*  4669 */                         $scope351.co_name = new Sk.builtins['str']('findtcb');
/*  4670 */                         $scope351.co_varnames = ['self', 'id'];
/*  4671 */                         var $funcobj363 = new Sk.builtins['function']($scope351, $gbl);
/*  4672 */                         $loc.findtcb = $funcobj363;
/*  4673 */                         return;
/*  4674 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4675 */                     }
/*  4676 */                 } catch (err) {
/*  4677 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  4678 */                         err = new Sk.builtin.ExternalError(err);
/*  4679 */                     }
/*  4680 */                     err.traceback.push({
/*  4681 */                         lineno: $currLineNo,
/*  4682 */                         colno: $currColNo,
/*  4683 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4684 */                     });
/*  4685 */                     if ($exc.length > 0) {
/*  4686 */                         $err = err;
/*  4687 */                         $blk = $exc.pop();
/*  4688 */                         continue;
/*  4689 */                     } else {
/*  4690 */                         throw err;
/*  4691 */                     }
/*  4692 */                 }
/*  4693 */             }
/*  4694 */         }).apply(null, $rest);
/*  4695 */     });
/*  4696 */     var $scope266 = (function $__init__267$(self, i, p, w, initialState, r) {
/*  4697 */         var i, i, i, initialState, initialState, initialState, initialState, p, p, r, r, self, self, self, self, self, self, self, self, self, self, self, w, w, $loadgbl268, $loadgbl268, $lattr269, $lattr270, $lattr270, $call271, $lattr272, $lattr272, $call273, $lattr274, $lattr274, $call275, $loadgbl276, $loadgbl277, $loadgbl277, $lattr278;
/*  4698 */         var $wakeFromSuspension = function() {
/*  4699 */             var susp = $scope266.$wakingSuspension;
/*  4700 */             delete $scope266.$wakingSuspension;
/*  4701 */             $blk = susp.$blk;
/*  4702 */             $loc = susp.$loc;
/*  4703 */             $gbl = susp.$gbl;
/*  4704 */             $exc = susp.$exc;
/*  4705 */             $err = susp.$err;
/*  4706 */             $postfinally = susp.$postfinally;
/*  4707 */             $currLineNo = susp.$lineno;
/*  4708 */             $currColNo = susp.$colno;
/*  4709 */             Sk.lastYield = Date.now();
/*  4710 */             i = susp.$tmps.i;
/*  4711 */             initialState = susp.$tmps.initialState;
/*  4712 */             p = susp.$tmps.p;
/*  4713 */             r = susp.$tmps.r;
/*  4714 */             self = susp.$tmps.self;
/*  4715 */             w = susp.$tmps.w;
/*  4716 */             $loadgbl268 = susp.$tmps.$loadgbl268;
/*  4717 */             $lattr269 = susp.$tmps.$lattr269;
/*  4718 */             $lattr270 = susp.$tmps.$lattr270;
/*  4719 */             $call271 = susp.$tmps.$call271;
/*  4720 */             $lattr272 = susp.$tmps.$lattr272;
/*  4721 */             $call273 = susp.$tmps.$call273;
/*  4722 */             $lattr274 = susp.$tmps.$lattr274;
/*  4723 */             $call275 = susp.$tmps.$call275;
/*  4724 */             $loadgbl276 = susp.$tmps.$loadgbl276;
/*  4725 */             $loadgbl277 = susp.$tmps.$loadgbl277;
/*  4726 */             $lattr278 = susp.$tmps.$lattr278;
/*  4727 */             try {
/*  4728 */                 $ret = susp.child.resume();
/*  4729 */             } catch (err) {
/*  4730 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4731 */                     err = new Sk.builtin.ExternalError(err);
/*  4732 */                 }
/*  4733 */                 err.traceback.push({
/*  4734 */                     lineno: $currLineNo,
/*  4735 */                     colno: $currColNo,
/*  4736 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  4737 */                 });
/*  4738 */                 if ($exc.length > 0) {
/*  4739 */                     $err = err;
/*  4740 */                     $blk = $exc.pop();
/*  4741 */                 } else {
/*  4742 */                     throw err;
/*  4743 */                 }
/*  4744 */             }
/*  4745 */         };
/*  4746 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4747 */             var susp = new Sk.misceval.Suspension();
/*  4748 */             susp.child = $child;
/*  4749 */             susp.resume = function() {
/*  4750 */                 $scope266.$wakingSuspension = susp;
/*  4751 */                 return $scope266();
/*  4752 */             };
/*  4753 */             susp.data = susp.child.data;
/*  4754 */             susp.$blk = $blk;
/*  4755 */             susp.$loc = $loc;
/*  4756 */             susp.$gbl = $gbl;
/*  4757 */             susp.$exc = $exc;
/*  4758 */             susp.$err = $err;
/*  4759 */             susp.$postfinally = $postfinally;
/*  4760 */             susp.$filename = $filename;
/*  4761 */             susp.$lineno = $lineno;
/*  4762 */             susp.$colno = $colno;
/*  4763 */             susp.optional = susp.child.optional;
/*  4764 */             susp.$tmps = {
/*  4765 */                 "i": i,
/*  4766 */                 "initialState": initialState,
/*  4767 */                 "p": p,
/*  4768 */                 "r": r,
/*  4769 */                 "self": self,
/*  4770 */                 "w": w,
/*  4771 */                 "$loadgbl268": $loadgbl268,
/*  4772 */                 "$lattr269": $lattr269,
/*  4773 */                 "$lattr270": $lattr270,
/*  4774 */                 "$call271": $call271,
/*  4775 */                 "$lattr272": $lattr272,
/*  4776 */                 "$call273": $call273,
/*  4777 */                 "$lattr274": $lattr274,
/*  4778 */                 "$call275": $call275,
/*  4779 */                 "$loadgbl276": $loadgbl276,
/*  4780 */                 "$loadgbl277": $loadgbl277,
/*  4781 */                 "$lattr278": $lattr278
/*  4782 */             };
/*  4783 */             return susp;
/*  4784 */         };
/*  4785 */         var $blk = 0,
/*  4786 */             $exc = [],
/*  4787 */             $loc = {},
/*  4788 */             $gbl = this,
/*  4789 */             $err = undefined,
/*  4790 */             $ret = undefined,
/*  4791 */             $postfinally = undefined,
/*  4792 */             $currLineNo = undefined,
/*  4793 */             $currColNo = undefined;
/*  4794 */         if ($scope266.$wakingSuspension !== undefined) {
/*  4795 */             $wakeFromSuspension();
/*  4796 */         } else {
/*  4797 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  4798 */         }
/*  4799 */         while (true) {
/*  4800 */             try {
/*  4801 */                 switch ($blk) {
/*  4802 */                 case 0:
/*  4803 */                     /* --- codeobj entry --- */
/*  4804 */                     if (self === undefined) {
/*  4805 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4806 */                     }
/*  4807 */                     if (i === undefined) {
/*  4808 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  4809 */                     }
/*  4810 */                     if (p === undefined) {
/*  4811 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  4812 */                     }
/*  4813 */                     if (w === undefined) {
/*  4814 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  4815 */                     }
/*  4816 */                     if (initialState === undefined) {
/*  4817 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  4818 */                     }
/*  4819 */                     if (r === undefined) {
/*  4820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  4821 */                     }
/*  4822 */ 
/*  4823 */                     //
/*  4824 */                     // line 160:
/*  4825 */                     //         self.link = taskWorkArea.taskList
/*  4826 */                     //         ^
/*  4827 */                     //
/*  4828 */                     $currLineNo = 160;
/*  4829 */                     $currColNo = 8;
/*  4830 */ 
/*  4831 */                     var $loadgbl268 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  4832 */                     $ret = Sk.abstr.gattr($loadgbl268, 'taskList', true);
/*  4833 */                     $blk = 1; /* allowing case fallthrough */
/*  4834 */                 case 1:
/*  4835 */                     /* --- function return or resume suspension --- */
/*  4836 */                     if ($ret && $ret.$isSuspension) {
/*  4837 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 160, 20);
/*  4838 */                     }
/*  4839 */                     var $lattr269 = $ret;
/*  4840 */                     if (self === undefined) {
/*  4841 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4842 */                     }
/*  4843 */                     $ret = Sk.abstr.sattr(self, 'link', $lattr269, true);
/*  4844 */                     $blk = 2; /* allowing case fallthrough */
/*  4845 */                 case 2:
/*  4846 */                     /* --- function return or resume suspension --- */
/*  4847 */                     if ($ret && $ret.$isSuspension) {
/*  4848 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 160, 8);
/*  4849 */                     }
/*  4850 */                     //
/*  4851 */                     // line 161:
/*  4852 */                     //         self.ident = i
/*  4853 */                     //         ^
/*  4854 */                     //
/*  4855 */                     $currLineNo = 161;
/*  4856 */                     $currColNo = 8;
/*  4857 */ 
/*  4858 */                     if (i === undefined) {
/*  4859 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  4860 */                     }
/*  4861 */                     if (self === undefined) {
/*  4862 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4863 */                     }
/*  4864 */                     $ret = Sk.abstr.sattr(self, 'ident', i, true);
/*  4865 */                     $blk = 3; /* allowing case fallthrough */
/*  4866 */                 case 3:
/*  4867 */                     /* --- function return or resume suspension --- */
/*  4868 */                     if ($ret && $ret.$isSuspension) {
/*  4869 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 161, 8);
/*  4870 */                     }
/*  4871 */                     //
/*  4872 */                     // line 162:
/*  4873 */                     //         self.priority = p
/*  4874 */                     //         ^
/*  4875 */                     //
/*  4876 */                     $currLineNo = 162;
/*  4877 */                     $currColNo = 8;
/*  4878 */ 
/*  4879 */                     if (p === undefined) {
/*  4880 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  4881 */                     }
/*  4882 */                     if (self === undefined) {
/*  4883 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4884 */                     }
/*  4885 */                     $ret = Sk.abstr.sattr(self, 'priority', p, true);
/*  4886 */                     $blk = 4; /* allowing case fallthrough */
/*  4887 */                 case 4:
/*  4888 */                     /* --- function return or resume suspension --- */
/*  4889 */                     if ($ret && $ret.$isSuspension) {
/*  4890 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 162, 8);
/*  4891 */                     }
/*  4892 */                     //
/*  4893 */                     // line 163:
/*  4894 */                     //         self.input = w
/*  4895 */                     //         ^
/*  4896 */                     //
/*  4897 */                     $currLineNo = 163;
/*  4898 */                     $currColNo = 8;
/*  4899 */ 
/*  4900 */                     if (w === undefined) {
/*  4901 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  4902 */                     }
/*  4903 */                     if (self === undefined) {
/*  4904 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4905 */                     }
/*  4906 */                     $ret = Sk.abstr.sattr(self, 'input', w, true);
/*  4907 */                     $blk = 5; /* allowing case fallthrough */
/*  4908 */                 case 5:
/*  4909 */                     /* --- function return or resume suspension --- */
/*  4910 */                     if ($ret && $ret.$isSuspension) {
/*  4911 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 163, 8);
/*  4912 */                     }
/*  4913 */                     //
/*  4914 */                     // line 165:
/*  4915 */                     //         self.packet_pending = initialState.isPacketPending()
/*  4916 */                     //         ^
/*  4917 */                     //
/*  4918 */                     $currLineNo = 165;
/*  4919 */                     $currColNo = 8;
/*  4920 */ 
/*  4921 */                     if (initialState === undefined) {
/*  4922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  4923 */                     }
/*  4924 */                     $ret = Sk.abstr.gattr(initialState, 'isPacketPending', true);
/*  4925 */                     $blk = 6; /* allowing case fallthrough */
/*  4926 */                 case 6:
/*  4927 */                     /* --- function return or resume suspension --- */
/*  4928 */                     if ($ret && $ret.$isSuspension) {
/*  4929 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 30);
/*  4930 */                     }
/*  4931 */                     var $lattr270 = $ret;
/*  4932 */                     $ret;
/*  4933 */                     $ret = Sk.misceval.callsimOrSuspend($lattr270);
/*  4934 */                     $blk = 7; /* allowing case fallthrough */
/*  4935 */                 case 7:
/*  4936 */                     /* --- function return or resume suspension --- */
/*  4937 */                     if ($ret && $ret.$isSuspension) {
/*  4938 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 30);
/*  4939 */                     }
/*  4940 */                     var $call271 = $ret;
/*  4941 */                     //
/*  4942 */                     // line 165:
/*  4943 */                     //         self.packet_pending = initialState.isPacketPending()
/*  4944 */                     //                               ^
/*  4945 */                     //
/*  4946 */                     $currLineNo = 165;
/*  4947 */                     $currColNo = 30;
/*  4948 */ 
/*  4949 */                     if (self === undefined) {
/*  4950 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4951 */                     }
/*  4952 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', $call271, true);
/*  4953 */                     $blk = 8; /* allowing case fallthrough */
/*  4954 */                 case 8:
/*  4955 */                     /* --- function return or resume suspension --- */
/*  4956 */                     if ($ret && $ret.$isSuspension) {
/*  4957 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 165, 8);
/*  4958 */                     }
/*  4959 */                     //
/*  4960 */                     // line 166:
/*  4961 */                     //         self.task_waiting = initialState.isTaskWaiting()
/*  4962 */                     //         ^
/*  4963 */                     //
/*  4964 */                     $currLineNo = 166;
/*  4965 */                     $currColNo = 8;
/*  4966 */ 
/*  4967 */                     if (initialState === undefined) {
/*  4968 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  4969 */                     }
/*  4970 */                     $ret = Sk.abstr.gattr(initialState, 'isTaskWaiting', true);
/*  4971 */                     $blk = 9; /* allowing case fallthrough */
/*  4972 */                 case 9:
/*  4973 */                     /* --- function return or resume suspension --- */
/*  4974 */                     if ($ret && $ret.$isSuspension) {
/*  4975 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 28);
/*  4976 */                     }
/*  4977 */                     var $lattr272 = $ret;
/*  4978 */                     $ret;
/*  4979 */                     $ret = Sk.misceval.callsimOrSuspend($lattr272);
/*  4980 */                     $blk = 10; /* allowing case fallthrough */
/*  4981 */                 case 10:
/*  4982 */                     /* --- function return or resume suspension --- */
/*  4983 */                     if ($ret && $ret.$isSuspension) {
/*  4984 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 28);
/*  4985 */                     }
/*  4986 */                     var $call273 = $ret;
/*  4987 */                     //
/*  4988 */                     // line 166:
/*  4989 */                     //         self.task_waiting = initialState.isTaskWaiting()
/*  4990 */                     //                             ^
/*  4991 */                     //
/*  4992 */                     $currLineNo = 166;
/*  4993 */                     $currColNo = 28;
/*  4994 */ 
/*  4995 */                     if (self === undefined) {
/*  4996 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  4997 */                     }
/*  4998 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', $call273, true);
/*  4999 */                     $blk = 11; /* allowing case fallthrough */
/*  5000 */                 case 11:
/*  5001 */                     /* --- function return or resume suspension --- */
/*  5002 */                     if ($ret && $ret.$isSuspension) {
/*  5003 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 166, 8);
/*  5004 */                     }
/*  5005 */                     //
/*  5006 */                     // line 167:
/*  5007 */                     //         self.task_holding = initialState.isTaskHolding()
/*  5008 */                     //         ^
/*  5009 */                     //
/*  5010 */                     $currLineNo = 167;
/*  5011 */                     $currColNo = 8;
/*  5012 */ 
/*  5013 */                     if (initialState === undefined) {
/*  5014 */                         throw new Sk.builtin.UnboundLocalError('local variable \'initialState\' referenced before assignment');
/*  5015 */                     }
/*  5016 */                     $ret = Sk.abstr.gattr(initialState, 'isTaskHolding', true);
/*  5017 */                     $blk = 12; /* allowing case fallthrough */
/*  5018 */                 case 12:
/*  5019 */                     /* --- function return or resume suspension --- */
/*  5020 */                     if ($ret && $ret.$isSuspension) {
/*  5021 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 28);
/*  5022 */                     }
/*  5023 */                     var $lattr274 = $ret;
/*  5024 */                     $ret;
/*  5025 */                     $ret = Sk.misceval.callsimOrSuspend($lattr274);
/*  5026 */                     $blk = 13; /* allowing case fallthrough */
/*  5027 */                 case 13:
/*  5028 */                     /* --- function return or resume suspension --- */
/*  5029 */                     if ($ret && $ret.$isSuspension) {
/*  5030 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 28);
/*  5031 */                     }
/*  5032 */                     var $call275 = $ret;
/*  5033 */                     //
/*  5034 */                     // line 167:
/*  5035 */                     //         self.task_holding = initialState.isTaskHolding()
/*  5036 */                     //                             ^
/*  5037 */                     //
/*  5038 */                     $currLineNo = 167;
/*  5039 */                     $currColNo = 28;
/*  5040 */ 
/*  5041 */                     if (self === undefined) {
/*  5042 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5043 */                     }
/*  5044 */                     $ret = Sk.abstr.sattr(self, 'task_holding', $call275, true);
/*  5045 */                     $blk = 14; /* allowing case fallthrough */
/*  5046 */                 case 14:
/*  5047 */                     /* --- function return or resume suspension --- */
/*  5048 */                     if ($ret && $ret.$isSuspension) {
/*  5049 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 167, 8);
/*  5050 */                     }
/*  5051 */                     //
/*  5052 */                     // line 169:
/*  5053 */                     //         self.handle = r
/*  5054 */                     //         ^
/*  5055 */                     //
/*  5056 */                     $currLineNo = 169;
/*  5057 */                     $currColNo = 8;
/*  5058 */ 
/*  5059 */                     if (r === undefined) {
/*  5060 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  5061 */                     }
/*  5062 */                     if (self === undefined) {
/*  5063 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5064 */                     }
/*  5065 */                     $ret = Sk.abstr.sattr(self, 'handle', r, true);
/*  5066 */                     $blk = 15; /* allowing case fallthrough */
/*  5067 */                 case 15:
/*  5068 */                     /* --- function return or resume suspension --- */
/*  5069 */                     if ($ret && $ret.$isSuspension) {
/*  5070 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 169, 8);
/*  5071 */                     }
/*  5072 */                     //
/*  5073 */                     // line 171:
/*  5074 */                     //         taskWorkArea.taskList = self
/*  5075 */                     //         ^
/*  5076 */                     //
/*  5077 */                     $currLineNo = 171;
/*  5078 */                     $currColNo = 8;
/*  5079 */ 
/*  5080 */                     if (self === undefined) {
/*  5081 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5082 */                     }
/*  5083 */                     var $loadgbl276 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  5084 */                     $ret = Sk.abstr.sattr($loadgbl276, 'taskList', self, true);
/*  5085 */                     $blk = 16; /* allowing case fallthrough */
/*  5086 */                 case 16:
/*  5087 */                     /* --- function return or resume suspension --- */
/*  5088 */                     if ($ret && $ret.$isSuspension) {
/*  5089 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 171, 8);
/*  5090 */                     }
/*  5091 */                     //
/*  5092 */                     // line 172:
/*  5093 */                     //         taskWorkArea.taskTab[i] = self
/*  5094 */                     //         ^
/*  5095 */                     //
/*  5096 */                     $currLineNo = 172;
/*  5097 */                     $currColNo = 8;
/*  5098 */ 
/*  5099 */                     if (self === undefined) {
/*  5100 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5101 */                     }
/*  5102 */                     var $loadgbl277 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  5103 */                     $ret = Sk.abstr.gattr($loadgbl277, 'taskTab', true);
/*  5104 */                     $blk = 17; /* allowing case fallthrough */
/*  5105 */                 case 17:
/*  5106 */                     /* --- function return or resume suspension --- */
/*  5107 */                     if ($ret && $ret.$isSuspension) {
/*  5108 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 172, 8);
/*  5109 */                     }
/*  5110 */                     var $lattr278 = $ret;
/*  5111 */                     if (i === undefined) {
/*  5112 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  5113 */                     }
/*  5114 */                     $ret = Sk.abstr.objectSetItem($lattr278, i, self, true);
/*  5115 */                     $blk = 18; /* allowing case fallthrough */
/*  5116 */                 case 18:
/*  5117 */                     /* --- function return or resume suspension --- */
/*  5118 */                     if ($ret && $ret.$isSuspension) {
/*  5119 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  5120 */                     }
/*  5121 */                     return Sk.builtin.none.none$;
/*  5122 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5123 */                 }
/*  5124 */             } catch (err) {
/*  5125 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5126 */                     err = new Sk.builtin.ExternalError(err);
/*  5127 */                 }
/*  5128 */                 err.traceback.push({
/*  5129 */                     lineno: $currLineNo,
/*  5130 */                     colno: $currColNo,
/*  5131 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5132 */                 });
/*  5133 */                 if ($exc.length > 0) {
/*  5134 */                     $err = err;
/*  5135 */                     $blk = $exc.pop();
/*  5136 */                     continue;
/*  5137 */                 } else {
/*  5138 */                     throw err;
/*  5139 */                 }
/*  5140 */             }
/*  5141 */         }
/*  5142 */     });
/*  5143 */     var $scope280 = (function $fn281$(self, pkt, r) {
/*  5144 */         var $blk = 0,
/*  5145 */             $exc = [],
/*  5146 */             $loc = {},
/*  5147 */             $gbl = this,
/*  5148 */             $err = undefined,
/*  5149 */             $ret = undefined,
/*  5150 */             $postfinally = undefined,
/*  5151 */             $currLineNo = undefined,
/*  5152 */             $currColNo = undefined;
/*  5153 */         if ($scope280.$wakingSuspension !== undefined) {
/*  5154 */             $wakeFromSuspension();
/*  5155 */         } else {
/*  5156 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  5157 */         }
/*  5158 */         while (true) {
/*  5159 */             try {
/*  5160 */                 switch ($blk) {
/*  5161 */                 case 0:
/*  5162 */                     /* --- codeobj entry --- */
/*  5163 */                     if (self === undefined) {
/*  5164 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5165 */                     }
/*  5166 */                     if (pkt === undefined) {
/*  5167 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  5168 */                     }
/*  5169 */                     if (r === undefined) {
/*  5170 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  5171 */                     }
/*  5172 */ 
/*  5173 */                     //
/*  5174 */                     // line 175:
/*  5175 */                     //         raise NotImplementedError
/*  5176 */                     //         ^
/*  5177 */                     //
/*  5178 */                     $currLineNo = 175;
/*  5179 */                     $currColNo = 8;
/*  5180 */ 
/*  5181 */                     var $loadgbl282 = Sk.misceval.loadname('NotImplementedError', $gbl);
/*  5182 */                     var $err283 = $loadgbl282;
/*  5183 */                     if ($err283 instanceof Sk.builtin.type) {
/*  5184 */                         throw Sk.misceval.callsim($err283);
/*  5185 */                     } else if (typeof($err283) === 'function') {
/*  5186 */                         throw $err283();
/*  5187 */                     } else {
/*  5188 */                         throw $err283;
/*  5189 */                     }
/*  5190 */                     return Sk.builtin.none.none$;
/*  5191 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5192 */                 }
/*  5193 */             } catch (err) {
/*  5194 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5195 */                     err = new Sk.builtin.ExternalError(err);
/*  5196 */                 }
/*  5197 */                 err.traceback.push({
/*  5198 */                     lineno: $currLineNo,
/*  5199 */                     colno: $currColNo,
/*  5200 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5201 */                 });
/*  5202 */                 if ($exc.length > 0) {
/*  5203 */                     $err = err;
/*  5204 */                     $blk = $exc.pop();
/*  5205 */                     continue;
/*  5206 */                 } else {
/*  5207 */                     throw err;
/*  5208 */                 }
/*  5209 */             }
/*  5210 */         }
/*  5211 */     });
/*  5212 */     var $scope285 = (function $addPacket286$(self, p, old) {
/*  5213 */         var old, old, old, p, p, p, self, self, self, self, self, self, self, $lattr287, $compareres288, $lattr291, $compareres292, $lattr291, $compareres292, $lattr293, $lattr296, $lattr296, $lattr297;
/*  5214 */         var $wakeFromSuspension = function() {
/*  5215 */             var susp = $scope285.$wakingSuspension;
/*  5216 */             delete $scope285.$wakingSuspension;
/*  5217 */             $blk = susp.$blk;
/*  5218 */             $loc = susp.$loc;
/*  5219 */             $gbl = susp.$gbl;
/*  5220 */             $exc = susp.$exc;
/*  5221 */             $err = susp.$err;
/*  5222 */             $postfinally = susp.$postfinally;
/*  5223 */             $currLineNo = susp.$lineno;
/*  5224 */             $currColNo = susp.$colno;
/*  5225 */             Sk.lastYield = Date.now();
/*  5226 */             old = susp.$tmps.old;
/*  5227 */             p = susp.$tmps.p;
/*  5228 */             self = susp.$tmps.self;
/*  5229 */             $lattr287 = susp.$tmps.$lattr287;
/*  5230 */             $compareres288 = susp.$tmps.$compareres288;
/*  5231 */             $lattr291 = susp.$tmps.$lattr291;
/*  5232 */             $compareres292 = susp.$tmps.$compareres292;
/*  5233 */             $lattr293 = susp.$tmps.$lattr293;
/*  5234 */             $lattr296 = susp.$tmps.$lattr296;
/*  5235 */             $lattr297 = susp.$tmps.$lattr297;
/*  5236 */             try {
/*  5237 */                 $ret = susp.child.resume();
/*  5238 */             } catch (err) {
/*  5239 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5240 */                     err = new Sk.builtin.ExternalError(err);
/*  5241 */                 }
/*  5242 */                 err.traceback.push({
/*  5243 */                     lineno: $currLineNo,
/*  5244 */                     colno: $currColNo,
/*  5245 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5246 */                 });
/*  5247 */                 if ($exc.length > 0) {
/*  5248 */                     $err = err;
/*  5249 */                     $blk = $exc.pop();
/*  5250 */                 } else {
/*  5251 */                     throw err;
/*  5252 */                 }
/*  5253 */             }
/*  5254 */         };
/*  5255 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5256 */             var susp = new Sk.misceval.Suspension();
/*  5257 */             susp.child = $child;
/*  5258 */             susp.resume = function() {
/*  5259 */                 $scope285.$wakingSuspension = susp;
/*  5260 */                 return $scope285();
/*  5261 */             };
/*  5262 */             susp.data = susp.child.data;
/*  5263 */             susp.$blk = $blk;
/*  5264 */             susp.$loc = $loc;
/*  5265 */             susp.$gbl = $gbl;
/*  5266 */             susp.$exc = $exc;
/*  5267 */             susp.$err = $err;
/*  5268 */             susp.$postfinally = $postfinally;
/*  5269 */             susp.$filename = $filename;
/*  5270 */             susp.$lineno = $lineno;
/*  5271 */             susp.$colno = $colno;
/*  5272 */             susp.optional = susp.child.optional;
/*  5273 */             susp.$tmps = {
/*  5274 */                 "old": old,
/*  5275 */                 "p": p,
/*  5276 */                 "self": self,
/*  5277 */                 "$lattr287": $lattr287,
/*  5278 */                 "$compareres288": $compareres288,
/*  5279 */                 "$lattr291": $lattr291,
/*  5280 */                 "$compareres292": $compareres292,
/*  5281 */                 "$lattr293": $lattr293,
/*  5282 */                 "$lattr296": $lattr296,
/*  5283 */                 "$lattr297": $lattr297
/*  5284 */             };
/*  5285 */             return susp;
/*  5286 */         };
/*  5287 */         var $blk = 0,
/*  5288 */             $exc = [],
/*  5289 */             $loc = {},
/*  5290 */             $gbl = this,
/*  5291 */             $err = undefined,
/*  5292 */             $ret = undefined,
/*  5293 */             $postfinally = undefined,
/*  5294 */             $currLineNo = undefined,
/*  5295 */             $currColNo = undefined;
/*  5296 */         if ($scope285.$wakingSuspension !== undefined) {
/*  5297 */             $wakeFromSuspension();
/*  5298 */         } else {
/*  5299 */             Sk.builtin.pyCheckArgs("addPacket", arguments, 3, 3, false, false);
/*  5300 */         }
/*  5301 */         while (true) {
/*  5302 */             try {
/*  5303 */                 switch ($blk) {
/*  5304 */                 case 0:
/*  5305 */                     /* --- codeobj entry --- */
/*  5306 */                     if (self === undefined) {
/*  5307 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5308 */                     }
/*  5309 */                     if (p === undefined) {
/*  5310 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5311 */                     }
/*  5312 */                     if (old === undefined) {
/*  5313 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  5314 */                     }
/*  5315 */ 
/*  5316 */                     //
/*  5317 */                     // line 179:
/*  5318 */                     //         if self.input is None:
/*  5319 */                     //         ^
/*  5320 */                     //
/*  5321 */                     $currLineNo = 179;
/*  5322 */                     $currColNo = 8;
/*  5323 */ 
/*  5324 */                     if (self === undefined) {
/*  5325 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5326 */                     }
/*  5327 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  5328 */                     $blk = 3; /* allowing case fallthrough */
/*  5329 */                 case 3:
/*  5330 */                     /* --- function return or resume suspension --- */
/*  5331 */                     if ($ret && $ret.$isSuspension) {
/*  5332 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 179, 11);
/*  5333 */                     }
/*  5334 */                     var $lattr287 = $ret;
/*  5335 */                     var $compareres288 = null;
/*  5336 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr287, Sk.builtin.none.none$, 'Is', true));
/*  5337 */                     $blk = 5; /* allowing case fallthrough */
/*  5338 */                 case 5:
/*  5339 */                     /* --- function return or resume suspension --- */
/*  5340 */                     if ($ret && $ret.$isSuspension) {
/*  5341 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 179, 11);
/*  5342 */                     }
/*  5343 */                     $compareres288 = $ret;
/*  5344 */                     var $jfalse289 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5345 */                     if ($jfalse289) { /*test failed */
/*  5346 */                         $blk = 4;
/*  5347 */                         continue;
/*  5348 */                     }
/*  5349 */                     $blk = 4; /* allowing case fallthrough */
/*  5350 */                 case 4:
/*  5351 */                     /* --- done --- */
/*  5352 */                     var $jfalse290 = ($compareres288 === false || !Sk.misceval.isTrue($compareres288));
/*  5353 */                     if ($jfalse290) { /*test failed */
/*  5354 */                         $blk = 2;
/*  5355 */                         continue;
/*  5356 */                     }
/*  5357 */                     //
/*  5358 */                     // line 180:
/*  5359 */                     //             self.input = p
/*  5360 */                     //             ^
/*  5361 */                     //
/*  5362 */                     $currLineNo = 180;
/*  5363 */                     $currColNo = 12;
/*  5364 */ 
/*  5365 */                     if (p === undefined) {
/*  5366 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5367 */                     }
/*  5368 */                     if (self === undefined) {
/*  5369 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5370 */                     }
/*  5371 */                     $ret = Sk.abstr.sattr(self, 'input', p, true);
/*  5372 */                     $blk = 6; /* allowing case fallthrough */
/*  5373 */                 case 6:
/*  5374 */                     /* --- function return or resume suspension --- */
/*  5375 */                     if ($ret && $ret.$isSuspension) {
/*  5376 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 180, 12);
/*  5377 */                     }
/*  5378 */                     //
/*  5379 */                     // line 181:
/*  5380 */                     //             self.packet_pending = True
/*  5381 */                     //             ^
/*  5382 */                     //
/*  5383 */                     $currLineNo = 181;
/*  5384 */                     $currColNo = 12;
/*  5385 */ 
/*  5386 */                     if (self === undefined) {
/*  5387 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5388 */                     }
/*  5389 */                     $ret = Sk.abstr.sattr(self, 'packet_pending', Sk.builtin.bool.true$, true);
/*  5390 */                     $blk = 7; /* allowing case fallthrough */
/*  5391 */                 case 7:
/*  5392 */                     /* --- function return or resume suspension --- */
/*  5393 */                     if ($ret && $ret.$isSuspension) {
/*  5394 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 181, 12);
/*  5395 */                     }
/*  5396 */                     //
/*  5397 */                     // line 182:
/*  5398 */                     //             if self.priority > old.priority:
/*  5399 */                     //             ^
/*  5400 */                     //
/*  5401 */                     $currLineNo = 182;
/*  5402 */                     $currColNo = 12;
/*  5403 */ 
/*  5404 */                     if (self === undefined) {
/*  5405 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5406 */                     }
/*  5407 */                     $ret = Sk.abstr.gattr(self, 'priority', true);
/*  5408 */                     $blk = 9; /* allowing case fallthrough */
/*  5409 */                 case 9:
/*  5410 */                     /* --- function return or resume suspension --- */
/*  5411 */                     if ($ret && $ret.$isSuspension) {
/*  5412 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 15);
/*  5413 */                     }
/*  5414 */                     var $lattr291 = $ret;
/*  5415 */                     var $compareres292 = null;
/*  5416 */                     if (old === undefined) {
/*  5417 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  5418 */                     }
/*  5419 */                     $ret = Sk.abstr.gattr(old, 'priority', true);
/*  5420 */                     $blk = 11; /* allowing case fallthrough */
/*  5421 */                 case 11:
/*  5422 */                     /* --- function return or resume suspension --- */
/*  5423 */                     if ($ret && $ret.$isSuspension) {
/*  5424 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 31);
/*  5425 */                     }
/*  5426 */                     var $lattr293 = $ret;
/*  5427 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr291, $lattr293, 'Gt', true));
/*  5428 */                     $blk = 12; /* allowing case fallthrough */
/*  5429 */                 case 12:
/*  5430 */                     /* --- function return or resume suspension --- */
/*  5431 */                     if ($ret && $ret.$isSuspension) {
/*  5432 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 182, 15);
/*  5433 */                     }
/*  5434 */                     $compareres292 = $ret;
/*  5435 */                     var $jfalse294 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5436 */                     if ($jfalse294) { /*test failed */
/*  5437 */                         $blk = 10;
/*  5438 */                         continue;
/*  5439 */                     }
/*  5440 */                     $blk = 10; /* allowing case fallthrough */
/*  5441 */                 case 10:
/*  5442 */                     /* --- done --- */
/*  5443 */                     var $jfalse295 = ($compareres292 === false || !Sk.misceval.isTrue($compareres292));
/*  5444 */                     if ($jfalse295) { /*test failed */
/*  5445 */                         $blk = 8;
/*  5446 */                         continue;
/*  5447 */                     }
/*  5448 */                     //
/*  5449 */                     // line 183:
/*  5450 */                     //                 return self
/*  5451 */                     //                 ^
/*  5452 */                     //
/*  5453 */                     $currLineNo = 183;
/*  5454 */                     $currColNo = 16;
/*  5455 */ 
/*  5456 */                     if (self === undefined) {
/*  5457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5458 */                     }
/*  5459 */                     return self;
/*  5460 */                     $blk = 8; /* allowing case fallthrough */
/*  5461 */                 case 8:
/*  5462 */                     /* --- end of if --- */
/*  5463 */                     $blk = 1; /* allowing case fallthrough */
/*  5464 */                 case 1:
/*  5465 */                     /* --- end of if --- */
/*  5466 */                     //
/*  5467 */                     // line 186:
/*  5468 */                     //         return old
/*  5469 */                     //         ^
/*  5470 */                     //
/*  5471 */                     $currLineNo = 186;
/*  5472 */                     $currColNo = 8;
/*  5473 */ 
/*  5474 */                     if (old === undefined) {
/*  5475 */                         throw new Sk.builtin.UnboundLocalError('local variable \'old\' referenced before assignment');
/*  5476 */                     }
/*  5477 */                     return old;
/*  5478 */                     return Sk.builtin.none.none$;
/*  5479 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5480 */                 case 2:
/*  5481 */                     /* --- next branch of if --- */
/*  5482 */                     //
/*  5483 */                     // line 185:
/*  5484 */                     //             p.append_to(self.input)
/*  5485 */                     //             ^
/*  5486 */                     //
/*  5487 */                     $currLineNo = 185;
/*  5488 */                     $currColNo = 12;
/*  5489 */ 
/*  5490 */                     if (p === undefined) {
/*  5491 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  5492 */                     }
/*  5493 */                     $ret = Sk.abstr.gattr(p, 'append_to', true);
/*  5494 */                     $blk = 13; /* allowing case fallthrough */
/*  5495 */                 case 13:
/*  5496 */                     /* --- function return or resume suspension --- */
/*  5497 */                     if ($ret && $ret.$isSuspension) {
/*  5498 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 12);
/*  5499 */                     }
/*  5500 */                     var $lattr296 = $ret;
/*  5501 */                     if (self === undefined) {
/*  5502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5503 */                     }
/*  5504 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  5505 */                     $blk = 14; /* allowing case fallthrough */
/*  5506 */                 case 14:
/*  5507 */                     /* --- function return or resume suspension --- */
/*  5508 */                     if ($ret && $ret.$isSuspension) {
/*  5509 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 24);
/*  5510 */                     }
/*  5511 */                     var $lattr297 = $ret;
/*  5512 */                     $ret;
/*  5513 */                     $ret = Sk.misceval.callsimOrSuspend($lattr296, $lattr297);
/*  5514 */                     $blk = 15; /* allowing case fallthrough */
/*  5515 */                 case 15:
/*  5516 */                     /* --- function return or resume suspension --- */
/*  5517 */                     if ($ret && $ret.$isSuspension) {
/*  5518 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 185, 12);
/*  5519 */                     }
/*  5520 */                     var $call298 = $ret;
/*  5521 */                     //
/*  5522 */                     // line 185:
/*  5523 */                     //             p.append_to(self.input)
/*  5524 */                     //             ^
/*  5525 */                     //
/*  5526 */                     $currLineNo = 185;
/*  5527 */                     $currColNo = 12;
/*  5528 */ 
/*  5529 */                     $blk = 1; /* jump */
/*  5530 */                     continue;
/*  5531 */                 }
/*  5532 */             } catch (err) {
/*  5533 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5534 */                     err = new Sk.builtin.ExternalError(err);
/*  5535 */                 }
/*  5536 */                 err.traceback.push({
/*  5537 */                     lineno: $currLineNo,
/*  5538 */                     colno: $currColNo,
/*  5539 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5540 */                 });
/*  5541 */                 if ($exc.length > 0) {
/*  5542 */                     $err = err;
/*  5543 */                     $blk = $exc.pop();
/*  5544 */                     continue;
/*  5545 */                 } else {
/*  5546 */                     throw err;
/*  5547 */                 }
/*  5548 */             }
/*  5549 */         }
/*  5550 */     });
/*  5551 */     var $scope300 = (function $runTask301$(self) {
/*  5552 */         var msg; /* locals */
/*  5553 */         var msg, msg, msg, msg, self, self, self, self, self, self, self, self, self, $lattr302, $lattr306, $lattr307, $compareres308, $lattr311, $lattr313, $lattr315, $lattr315, $lattr316;
/*  5554 */         var $wakeFromSuspension = function() {
/*  5555 */             var susp = $scope300.$wakingSuspension;
/*  5556 */             delete $scope300.$wakingSuspension;
/*  5557 */             $blk = susp.$blk;
/*  5558 */             $loc = susp.$loc;
/*  5559 */             $gbl = susp.$gbl;
/*  5560 */             $exc = susp.$exc;
/*  5561 */             $err = susp.$err;
/*  5562 */             $postfinally = susp.$postfinally;
/*  5563 */             $currLineNo = susp.$lineno;
/*  5564 */             $currColNo = susp.$colno;
/*  5565 */             Sk.lastYield = Date.now();
/*  5566 */             msg = susp.$tmps.msg;
/*  5567 */             self = susp.$tmps.self;
/*  5568 */             $lattr302 = susp.$tmps.$lattr302;
/*  5569 */             $lattr306 = susp.$tmps.$lattr306;
/*  5570 */             $lattr307 = susp.$tmps.$lattr307;
/*  5571 */             $compareres308 = susp.$tmps.$compareres308;
/*  5572 */             $lattr311 = susp.$tmps.$lattr311;
/*  5573 */             $lattr313 = susp.$tmps.$lattr313;
/*  5574 */             $lattr315 = susp.$tmps.$lattr315;
/*  5575 */             $lattr316 = susp.$tmps.$lattr316;
/*  5576 */             try {
/*  5577 */                 $ret = susp.child.resume();
/*  5578 */             } catch (err) {
/*  5579 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5580 */                     err = new Sk.builtin.ExternalError(err);
/*  5581 */                 }
/*  5582 */                 err.traceback.push({
/*  5583 */                     lineno: $currLineNo,
/*  5584 */                     colno: $currColNo,
/*  5585 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5586 */                 });
/*  5587 */                 if ($exc.length > 0) {
/*  5588 */                     $err = err;
/*  5589 */                     $blk = $exc.pop();
/*  5590 */                 } else {
/*  5591 */                     throw err;
/*  5592 */                 }
/*  5593 */             }
/*  5594 */         };
/*  5595 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5596 */             var susp = new Sk.misceval.Suspension();
/*  5597 */             susp.child = $child;
/*  5598 */             susp.resume = function() {
/*  5599 */                 $scope300.$wakingSuspension = susp;
/*  5600 */                 return $scope300();
/*  5601 */             };
/*  5602 */             susp.data = susp.child.data;
/*  5603 */             susp.$blk = $blk;
/*  5604 */             susp.$loc = $loc;
/*  5605 */             susp.$gbl = $gbl;
/*  5606 */             susp.$exc = $exc;
/*  5607 */             susp.$err = $err;
/*  5608 */             susp.$postfinally = $postfinally;
/*  5609 */             susp.$filename = $filename;
/*  5610 */             susp.$lineno = $lineno;
/*  5611 */             susp.$colno = $colno;
/*  5612 */             susp.optional = susp.child.optional;
/*  5613 */             susp.$tmps = {
/*  5614 */                 "msg": msg,
/*  5615 */                 "self": self,
/*  5616 */                 "$lattr302": $lattr302,
/*  5617 */                 "$lattr306": $lattr306,
/*  5618 */                 "$lattr307": $lattr307,
/*  5619 */                 "$compareres308": $compareres308,
/*  5620 */                 "$lattr311": $lattr311,
/*  5621 */                 "$lattr313": $lattr313,
/*  5622 */                 "$lattr315": $lattr315,
/*  5623 */                 "$lattr316": $lattr316
/*  5624 */             };
/*  5625 */             return susp;
/*  5626 */         };
/*  5627 */         var $blk = 0,
/*  5628 */             $exc = [],
/*  5629 */             $loc = {},
/*  5630 */             $gbl = this,
/*  5631 */             $err = undefined,
/*  5632 */             $ret = undefined,
/*  5633 */             $postfinally = undefined,
/*  5634 */             $currLineNo = undefined,
/*  5635 */             $currColNo = undefined;
/*  5636 */         if ($scope300.$wakingSuspension !== undefined) {
/*  5637 */             $wakeFromSuspension();
/*  5638 */         } else {
/*  5639 */             Sk.builtin.pyCheckArgs("runTask", arguments, 1, 1, false, false);
/*  5640 */         }
/*  5641 */         while (true) {
/*  5642 */             try {
/*  5643 */                 switch ($blk) {
/*  5644 */                 case 0:
/*  5645 */                     /* --- codeobj entry --- */
/*  5646 */                     if (self === undefined) {
/*  5647 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5648 */                     }
/*  5649 */ 
/*  5650 */                     //
/*  5651 */                     // line 190:
/*  5652 */                     //         if self.isWaitingWithPacket():
/*  5653 */                     //         ^
/*  5654 */                     //
/*  5655 */                     $currLineNo = 190;
/*  5656 */                     $currColNo = 8;
/*  5657 */ 
/*  5658 */                     if (self === undefined) {
/*  5659 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5660 */                     }
/*  5661 */                     $ret = Sk.abstr.gattr(self, 'isWaitingWithPacket', true);
/*  5662 */                     $blk = 3; /* allowing case fallthrough */
/*  5663 */                 case 3:
/*  5664 */                     /* --- function return or resume suspension --- */
/*  5665 */                     if ($ret && $ret.$isSuspension) {
/*  5666 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 190, 11);
/*  5667 */                     }
/*  5668 */                     var $lattr302 = $ret;
/*  5669 */                     $ret;
/*  5670 */                     $ret = Sk.misceval.callsimOrSuspend($lattr302);
/*  5671 */                     $blk = 4; /* allowing case fallthrough */
/*  5672 */                 case 4:
/*  5673 */                     /* --- function return or resume suspension --- */
/*  5674 */                     if ($ret && $ret.$isSuspension) {
/*  5675 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 190, 11);
/*  5676 */                     }
/*  5677 */                     var $call303 = $ret;
/*  5678 */                     //
/*  5679 */                     // line 190:
/*  5680 */                     //         if self.isWaitingWithPacket():
/*  5681 */                     //            ^
/*  5682 */                     //
/*  5683 */                     $currLineNo = 190;
/*  5684 */                     $currColNo = 11;
/*  5685 */ 
/*  5686 */                     var $jfalse304 = ($call303 === false || !Sk.misceval.isTrue($call303));
/*  5687 */                     if ($jfalse304) { /*test failed */
/*  5688 */                         $blk = 2;
/*  5689 */                         continue;
/*  5690 */                     }
/*  5691 */                     //
/*  5692 */                     // line 191:
/*  5693 */                     //             msg = self.input
/*  5694 */                     //             ^
/*  5695 */                     //
/*  5696 */                     $currLineNo = 191;
/*  5697 */                     $currColNo = 12;
/*  5698 */ 
/*  5699 */                     if (self === undefined) {
/*  5700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5701 */                     }
/*  5702 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  5703 */                     $blk = 5; /* allowing case fallthrough */
/*  5704 */                 case 5:
/*  5705 */                     /* --- function return or resume suspension --- */
/*  5706 */                     if ($ret && $ret.$isSuspension) {
/*  5707 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 191, 18);
/*  5708 */                     }
/*  5709 */                     var $lattr305 = $ret;
/*  5710 */                     msg = $lattr305;
/*  5711 */                     //
/*  5712 */                     // line 192:
/*  5713 */                     //             self.input = msg.link
/*  5714 */                     //             ^
/*  5715 */                     //
/*  5716 */                     $currLineNo = 192;
/*  5717 */                     $currColNo = 12;
/*  5718 */ 
/*  5719 */                     if (msg === undefined) {
/*  5720 */                         throw new Sk.builtin.UnboundLocalError('local variable \'msg\' referenced before assignment');
/*  5721 */                     }
/*  5722 */                     $ret = Sk.abstr.gattr(msg, 'link', true);
/*  5723 */                     $blk = 6; /* allowing case fallthrough */
/*  5724 */                 case 6:
/*  5725 */                     /* --- function return or resume suspension --- */
/*  5726 */                     if ($ret && $ret.$isSuspension) {
/*  5727 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 192, 25);
/*  5728 */                     }
/*  5729 */                     var $lattr306 = $ret;
/*  5730 */                     if (self === undefined) {
/*  5731 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5732 */                     }
/*  5733 */                     $ret = Sk.abstr.sattr(self, 'input', $lattr306, true);
/*  5734 */                     $blk = 7; /* allowing case fallthrough */
/*  5735 */                 case 7:
/*  5736 */                     /* --- function return or resume suspension --- */
/*  5737 */                     if ($ret && $ret.$isSuspension) {
/*  5738 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 192, 12);
/*  5739 */                     }
/*  5740 */                     //
/*  5741 */                     // line 193:
/*  5742 */                     //             if self.input is None:
/*  5743 */                     //             ^
/*  5744 */                     //
/*  5745 */                     $currLineNo = 193;
/*  5746 */                     $currColNo = 12;
/*  5747 */ 
/*  5748 */                     if (self === undefined) {
/*  5749 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5750 */                     }
/*  5751 */                     $ret = Sk.abstr.gattr(self, 'input', true);
/*  5752 */                     $blk = 10; /* allowing case fallthrough */
/*  5753 */                 case 10:
/*  5754 */                     /* --- function return or resume suspension --- */
/*  5755 */                     if ($ret && $ret.$isSuspension) {
/*  5756 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 193, 15);
/*  5757 */                     }
/*  5758 */                     var $lattr307 = $ret;
/*  5759 */                     var $compareres308 = null;
/*  5760 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr307, Sk.builtin.none.none$, 'Is', true));
/*  5761 */                     $blk = 12; /* allowing case fallthrough */
/*  5762 */                 case 12:
/*  5763 */                     /* --- function return or resume suspension --- */
/*  5764 */                     if ($ret && $ret.$isSuspension) {
/*  5765 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 193, 15);
/*  5766 */                     }
/*  5767 */                     $compareres308 = $ret;
/*  5768 */                     var $jfalse309 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5769 */                     if ($jfalse309) { /*test failed */
/*  5770 */                         $blk = 11;
/*  5771 */                         continue;
/*  5772 */                     }
/*  5773 */                     $blk = 11; /* allowing case fallthrough */
/*  5774 */                 case 11:
/*  5775 */                     /* --- done --- */
/*  5776 */                     var $jfalse310 = ($compareres308 === false || !Sk.misceval.isTrue($compareres308));
/*  5777 */                     if ($jfalse310) { /*test failed */
/*  5778 */                         $blk = 9;
/*  5779 */                         continue;
/*  5780 */                     }
/*  5781 */                     //
/*  5782 */                     // line 194:
/*  5783 */                     //                 self.running()
/*  5784 */                     //                 ^
/*  5785 */                     //
/*  5786 */                     $currLineNo = 194;
/*  5787 */                     $currColNo = 16;
/*  5788 */ 
/*  5789 */                     if (self === undefined) {
/*  5790 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5791 */                     }
/*  5792 */                     $ret = Sk.abstr.gattr(self, 'running', true);
/*  5793 */                     $blk = 13; /* allowing case fallthrough */
/*  5794 */                 case 13:
/*  5795 */                     /* --- function return or resume suspension --- */
/*  5796 */                     if ($ret && $ret.$isSuspension) {
/*  5797 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 194, 16);
/*  5798 */                     }
/*  5799 */                     var $lattr311 = $ret;
/*  5800 */                     $ret;
/*  5801 */                     $ret = Sk.misceval.callsimOrSuspend($lattr311);
/*  5802 */                     $blk = 14; /* allowing case fallthrough */
/*  5803 */                 case 14:
/*  5804 */                     /* --- function return or resume suspension --- */
/*  5805 */                     if ($ret && $ret.$isSuspension) {
/*  5806 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 194, 16);
/*  5807 */                     }
/*  5808 */                     var $call312 = $ret;
/*  5809 */                     //
/*  5810 */                     // line 194:
/*  5811 */                     //                 self.running()
/*  5812 */                     //                 ^
/*  5813 */                     //
/*  5814 */                     $currLineNo = 194;
/*  5815 */                     $currColNo = 16;
/*  5816 */ 
/*  5817 */                     $blk = 8; /* allowing case fallthrough */
/*  5818 */                 case 8:
/*  5819 */                     /* --- end of if --- */
/*  5820 */                     $blk = 1; /* allowing case fallthrough */
/*  5821 */                 case 1:
/*  5822 */                     /* --- end of if --- */
/*  5823 */                     //
/*  5824 */                     // line 200:
/*  5825 */                     //         return self.fn(msg,self.handle)
/*  5826 */                     //         ^
/*  5827 */                     //
/*  5828 */                     $currLineNo = 200;
/*  5829 */                     $currColNo = 8;
/*  5830 */ 
/*  5831 */                     if (self === undefined) {
/*  5832 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5833 */                     }
/*  5834 */                     $ret = Sk.abstr.gattr(self, 'fn', true);
/*  5835 */                     $blk = 17; /* allowing case fallthrough */
/*  5836 */                 case 17:
/*  5837 */                     /* --- function return or resume suspension --- */
/*  5838 */                     if ($ret && $ret.$isSuspension) {
/*  5839 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 15);
/*  5840 */                     }
/*  5841 */                     var $lattr315 = $ret;
/*  5842 */                     if (msg === undefined) {
/*  5843 */                         throw new Sk.builtin.UnboundLocalError('local variable \'msg\' referenced before assignment');
/*  5844 */                     }
/*  5845 */                     if (self === undefined) {
/*  5846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5847 */                     }
/*  5848 */                     $ret = Sk.abstr.gattr(self, 'handle', true);
/*  5849 */                     $blk = 18; /* allowing case fallthrough */
/*  5850 */                 case 18:
/*  5851 */                     /* --- function return or resume suspension --- */
/*  5852 */                     if ($ret && $ret.$isSuspension) {
/*  5853 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 27);
/*  5854 */                     }
/*  5855 */                     var $lattr316 = $ret;
/*  5856 */                     $ret;
/*  5857 */                     $ret = Sk.misceval.callsimOrSuspend($lattr315, msg, $lattr316);
/*  5858 */                     $blk = 19; /* allowing case fallthrough */
/*  5859 */                 case 19:
/*  5860 */                     /* --- function return or resume suspension --- */
/*  5861 */                     if ($ret && $ret.$isSuspension) {
/*  5862 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 200, 15);
/*  5863 */                     }
/*  5864 */                     var $call317 = $ret;
/*  5865 */                     //
/*  5866 */                     // line 200:
/*  5867 */                     //         return self.fn(msg,self.handle)
/*  5868 */                     //                ^
/*  5869 */                     //
/*  5870 */                     $currLineNo = 200;
/*  5871 */                     $currColNo = 15;
/*  5872 */ 
/*  5873 */                     return $call317;
/*  5874 */                     return Sk.builtin.none.none$;
/*  5875 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5876 */                 case 2:
/*  5877 */                     /* --- next branch of if --- */
/*  5878 */                     //
/*  5879 */                     // line 198:
/*  5880 */                     //             msg = None
/*  5881 */                     //             ^
/*  5882 */                     //
/*  5883 */                     $currLineNo = 198;
/*  5884 */                     $currColNo = 12;
/*  5885 */ 
/*  5886 */                     msg = Sk.builtin.none.none$;
/*  5887 */                     $blk = 1; /* jump */
/*  5888 */                     continue;
/*  5889 */                 case 9:
/*  5890 */                     /* --- next branch of if --- */
/*  5891 */                     //
/*  5892 */                     // line 196:
/*  5893 */                     //                 self.packetPending()
/*  5894 */                     //                 ^
/*  5895 */                     //
/*  5896 */                     $currLineNo = 196;
/*  5897 */                     $currColNo = 16;
/*  5898 */ 
/*  5899 */                     if (self === undefined) {
/*  5900 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  5901 */                     }
/*  5902 */                     $ret = Sk.abstr.gattr(self, 'packetPending', true);
/*  5903 */                     $blk = 15; /* allowing case fallthrough */
/*  5904 */                 case 15:
/*  5905 */                     /* --- function return or resume suspension --- */
/*  5906 */                     if ($ret && $ret.$isSuspension) {
/*  5907 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 196, 16);
/*  5908 */                     }
/*  5909 */                     var $lattr313 = $ret;
/*  5910 */                     $ret;
/*  5911 */                     $ret = Sk.misceval.callsimOrSuspend($lattr313);
/*  5912 */                     $blk = 16; /* allowing case fallthrough */
/*  5913 */                 case 16:
/*  5914 */                     /* --- function return or resume suspension --- */
/*  5915 */                     if ($ret && $ret.$isSuspension) {
/*  5916 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 196, 16);
/*  5917 */                     }
/*  5918 */                     var $call314 = $ret;
/*  5919 */                     //
/*  5920 */                     // line 196:
/*  5921 */                     //                 self.packetPending()
/*  5922 */                     //                 ^
/*  5923 */                     //
/*  5924 */                     $currLineNo = 196;
/*  5925 */                     $currColNo = 16;
/*  5926 */ 
/*  5927 */                     $blk = 8; /* jump */
/*  5928 */                     continue;
/*  5929 */                 }
/*  5930 */             } catch (err) {
/*  5931 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5932 */                     err = new Sk.builtin.ExternalError(err);
/*  5933 */                 }
/*  5934 */                 err.traceback.push({
/*  5935 */                     lineno: $currLineNo,
/*  5936 */                     colno: $currColNo,
/*  5937 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5938 */                 });
/*  5939 */                 if ($exc.length > 0) {
/*  5940 */                     $err = err;
/*  5941 */                     $blk = $exc.pop();
/*  5942 */                     continue;
/*  5943 */                 } else {
/*  5944 */                     throw err;
/*  5945 */                 }
/*  5946 */             }
/*  5947 */         }
/*  5948 */     });
/*  5949 */     var $scope319 = (function $waitTask320$(self) {
/*  5950 */         var self, self, self;
/*  5951 */         var $wakeFromSuspension = function() {
/*  5952 */             var susp = $scope319.$wakingSuspension;
/*  5953 */             delete $scope319.$wakingSuspension;
/*  5954 */             $blk = susp.$blk;
/*  5955 */             $loc = susp.$loc;
/*  5956 */             $gbl = susp.$gbl;
/*  5957 */             $exc = susp.$exc;
/*  5958 */             $err = susp.$err;
/*  5959 */             $postfinally = susp.$postfinally;
/*  5960 */             $currLineNo = susp.$lineno;
/*  5961 */             $currColNo = susp.$colno;
/*  5962 */             Sk.lastYield = Date.now();
/*  5963 */             self = susp.$tmps.self;
/*  5964 */             try {
/*  5965 */                 $ret = susp.child.resume();
/*  5966 */             } catch (err) {
/*  5967 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5968 */                     err = new Sk.builtin.ExternalError(err);
/*  5969 */                 }
/*  5970 */                 err.traceback.push({
/*  5971 */                     lineno: $currLineNo,
/*  5972 */                     colno: $currColNo,
/*  5973 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  5974 */                 });
/*  5975 */                 if ($exc.length > 0) {
/*  5976 */                     $err = err;
/*  5977 */                     $blk = $exc.pop();
/*  5978 */                 } else {
/*  5979 */                     throw err;
/*  5980 */                 }
/*  5981 */             }
/*  5982 */         };
/*  5983 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5984 */             var susp = new Sk.misceval.Suspension();
/*  5985 */             susp.child = $child;
/*  5986 */             susp.resume = function() {
/*  5987 */                 $scope319.$wakingSuspension = susp;
/*  5988 */                 return $scope319();
/*  5989 */             };
/*  5990 */             susp.data = susp.child.data;
/*  5991 */             susp.$blk = $blk;
/*  5992 */             susp.$loc = $loc;
/*  5993 */             susp.$gbl = $gbl;
/*  5994 */             susp.$exc = $exc;
/*  5995 */             susp.$err = $err;
/*  5996 */             susp.$postfinally = $postfinally;
/*  5997 */             susp.$filename = $filename;
/*  5998 */             susp.$lineno = $lineno;
/*  5999 */             susp.$colno = $colno;
/*  6000 */             susp.optional = susp.child.optional;
/*  6001 */             susp.$tmps = {
/*  6002 */                 "self": self
/*  6003 */             };
/*  6004 */             return susp;
/*  6005 */         };
/*  6006 */         var $blk = 0,
/*  6007 */             $exc = [],
/*  6008 */             $loc = {},
/*  6009 */             $gbl = this,
/*  6010 */             $err = undefined,
/*  6011 */             $ret = undefined,
/*  6012 */             $postfinally = undefined,
/*  6013 */             $currLineNo = undefined,
/*  6014 */             $currColNo = undefined;
/*  6015 */         if ($scope319.$wakingSuspension !== undefined) {
/*  6016 */             $wakeFromSuspension();
/*  6017 */         } else {
/*  6018 */             Sk.builtin.pyCheckArgs("waitTask", arguments, 1, 1, false, false);
/*  6019 */         }
/*  6020 */         while (true) {
/*  6021 */             try {
/*  6022 */                 switch ($blk) {
/*  6023 */                 case 0:
/*  6024 */                     /* --- codeobj entry --- */
/*  6025 */                     if (self === undefined) {
/*  6026 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6027 */                     }
/*  6028 */ 
/*  6029 */                     //
/*  6030 */                     // line 204:
/*  6031 */                     //         self.task_waiting = True
/*  6032 */                     //         ^
/*  6033 */                     //
/*  6034 */                     $currLineNo = 204;
/*  6035 */                     $currColNo = 8;
/*  6036 */ 
/*  6037 */                     if (self === undefined) {
/*  6038 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6039 */                     }
/*  6040 */                     $ret = Sk.abstr.sattr(self, 'task_waiting', Sk.builtin.bool.true$, true);
/*  6041 */                     $blk = 1; /* allowing case fallthrough */
/*  6042 */                 case 1:
/*  6043 */                     /* --- function return or resume suspension --- */
/*  6044 */                     if ($ret && $ret.$isSuspension) {
/*  6045 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 204, 8);
/*  6046 */                     }
/*  6047 */                     //
/*  6048 */                     // line 205:
/*  6049 */                     //         return self
/*  6050 */                     //         ^
/*  6051 */                     //
/*  6052 */                     $currLineNo = 205;
/*  6053 */                     $currColNo = 8;
/*  6054 */ 
/*  6055 */                     if (self === undefined) {
/*  6056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6057 */                     }
/*  6058 */                     return self;
/*  6059 */                     return Sk.builtin.none.none$;
/*  6060 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6061 */                 }
/*  6062 */             } catch (err) {
/*  6063 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6064 */                     err = new Sk.builtin.ExternalError(err);
/*  6065 */                 }
/*  6066 */                 err.traceback.push({
/*  6067 */                     lineno: $currLineNo,
/*  6068 */                     colno: $currColNo,
/*  6069 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6070 */                 });
/*  6071 */                 if ($exc.length > 0) {
/*  6072 */                     $err = err;
/*  6073 */                     $blk = $exc.pop();
/*  6074 */                     continue;
/*  6075 */                 } else {
/*  6076 */                     throw err;
/*  6077 */                 }
/*  6078 */             }
/*  6079 */         }
/*  6080 */     });
/*  6081 */     var $scope322 = (function $hold323$(self) {
/*  6082 */         var self, self, self, $loadgbl324, $loadgbl324, $lattr325, $inplbinopattr326;
/*  6083 */         var $wakeFromSuspension = function() {
/*  6084 */             var susp = $scope322.$wakingSuspension;
/*  6085 */             delete $scope322.$wakingSuspension;
/*  6086 */             $blk = susp.$blk;
/*  6087 */             $loc = susp.$loc;
/*  6088 */             $gbl = susp.$gbl;
/*  6089 */             $exc = susp.$exc;
/*  6090 */             $err = susp.$err;
/*  6091 */             $postfinally = susp.$postfinally;
/*  6092 */             $currLineNo = susp.$lineno;
/*  6093 */             $currColNo = susp.$colno;
/*  6094 */             Sk.lastYield = Date.now();
/*  6095 */             self = susp.$tmps.self;
/*  6096 */             $loadgbl324 = susp.$tmps.$loadgbl324;
/*  6097 */             $lattr325 = susp.$tmps.$lattr325;
/*  6098 */             $inplbinopattr326 = susp.$tmps.$inplbinopattr326;
/*  6099 */             try {
/*  6100 */                 $ret = susp.child.resume();
/*  6101 */             } catch (err) {
/*  6102 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6103 */                     err = new Sk.builtin.ExternalError(err);
/*  6104 */                 }
/*  6105 */                 err.traceback.push({
/*  6106 */                     lineno: $currLineNo,
/*  6107 */                     colno: $currColNo,
/*  6108 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6109 */                 });
/*  6110 */                 if ($exc.length > 0) {
/*  6111 */                     $err = err;
/*  6112 */                     $blk = $exc.pop();
/*  6113 */                 } else {
/*  6114 */                     throw err;
/*  6115 */                 }
/*  6116 */             }
/*  6117 */         };
/*  6118 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6119 */             var susp = new Sk.misceval.Suspension();
/*  6120 */             susp.child = $child;
/*  6121 */             susp.resume = function() {
/*  6122 */                 $scope322.$wakingSuspension = susp;
/*  6123 */                 return $scope322();
/*  6124 */             };
/*  6125 */             susp.data = susp.child.data;
/*  6126 */             susp.$blk = $blk;
/*  6127 */             susp.$loc = $loc;
/*  6128 */             susp.$gbl = $gbl;
/*  6129 */             susp.$exc = $exc;
/*  6130 */             susp.$err = $err;
/*  6131 */             susp.$postfinally = $postfinally;
/*  6132 */             susp.$filename = $filename;
/*  6133 */             susp.$lineno = $lineno;
/*  6134 */             susp.$colno = $colno;
/*  6135 */             susp.optional = susp.child.optional;
/*  6136 */             susp.$tmps = {
/*  6137 */                 "self": self,
/*  6138 */                 "$loadgbl324": $loadgbl324,
/*  6139 */                 "$lattr325": $lattr325,
/*  6140 */                 "$inplbinopattr326": $inplbinopattr326
/*  6141 */             };
/*  6142 */             return susp;
/*  6143 */         };
/*  6144 */         var $blk = 0,
/*  6145 */             $exc = [],
/*  6146 */             $loc = {},
/*  6147 */             $gbl = this,
/*  6148 */             $err = undefined,
/*  6149 */             $ret = undefined,
/*  6150 */             $postfinally = undefined,
/*  6151 */             $currLineNo = undefined,
/*  6152 */             $currColNo = undefined;
/*  6153 */         if ($scope322.$wakingSuspension !== undefined) {
/*  6154 */             $wakeFromSuspension();
/*  6155 */         } else {
/*  6156 */             Sk.builtin.pyCheckArgs("hold", arguments, 1, 1, false, false);
/*  6157 */         }
/*  6158 */         while (true) {
/*  6159 */             try {
/*  6160 */                 switch ($blk) {
/*  6161 */                 case 0:
/*  6162 */                     /* --- codeobj entry --- */
/*  6163 */                     if (self === undefined) {
/*  6164 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6165 */                     }
/*  6166 */ 
/*  6167 */                     //
/*  6168 */                     // line 209:
/*  6169 */                     //         taskWorkArea.holdCount += 1
/*  6170 */                     //         ^
/*  6171 */                     //
/*  6172 */                     $currLineNo = 209;
/*  6173 */                     $currColNo = 8;
/*  6174 */ 
/*  6175 */                     var $loadgbl324 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  6176 */                     $ret = Sk.abstr.gattr($loadgbl324, 'holdCount', true);
/*  6177 */                     $blk = 1; /* allowing case fallthrough */
/*  6178 */                 case 1:
/*  6179 */                     /* --- function return or resume suspension --- */
/*  6180 */                     if ($ret && $ret.$isSuspension) {
/*  6181 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 209, 8);
/*  6182 */                     }
/*  6183 */                     var $lattr325 = $ret;
/*  6184 */                     var $inplbinopattr326 = Sk.abstr.numberInplaceBinOp($lattr325, new Sk.builtin.int_(1), 'Add');
/*  6185 */                     $ret = undefined;
/*  6186 */                     if ($inplbinopattr326 !== undefined) {
/*  6187 */                         $ret = Sk.abstr.sattr($loadgbl324, 'holdCount', $inplbinopattr326, true);
/*  6188 */                     }
/*  6189 */                     $blk = 2; /* allowing case fallthrough */
/*  6190 */                 case 2:
/*  6191 */                     /* --- function return or resume suspension --- */
/*  6192 */                     if ($ret && $ret.$isSuspension) {
/*  6193 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 209, 8);
/*  6194 */                     }
/*  6195 */                     //
/*  6196 */                     // line 210:
/*  6197 */                     //         self.task_holding = True
/*  6198 */                     //         ^
/*  6199 */                     //
/*  6200 */                     $currLineNo = 210;
/*  6201 */                     $currColNo = 8;
/*  6202 */ 
/*  6203 */                     if (self === undefined) {
/*  6204 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6205 */                     }
/*  6206 */                     $ret = Sk.abstr.sattr(self, 'task_holding', Sk.builtin.bool.true$, true);
/*  6207 */                     $blk = 3; /* allowing case fallthrough */
/*  6208 */                 case 3:
/*  6209 */                     /* --- function return or resume suspension --- */
/*  6210 */                     if ($ret && $ret.$isSuspension) {
/*  6211 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 210, 8);
/*  6212 */                     }
/*  6213 */                     //
/*  6214 */                     // line 211:
/*  6215 */                     //         return self.link
/*  6216 */                     //         ^
/*  6217 */                     //
/*  6218 */                     $currLineNo = 211;
/*  6219 */                     $currColNo = 8;
/*  6220 */ 
/*  6221 */                     if (self === undefined) {
/*  6222 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6223 */                     }
/*  6224 */                     $ret = Sk.abstr.gattr(self, 'link', true);
/*  6225 */                     $blk = 4; /* allowing case fallthrough */
/*  6226 */                 case 4:
/*  6227 */                     /* --- function return or resume suspension --- */
/*  6228 */                     if ($ret && $ret.$isSuspension) {
/*  6229 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 211, 15);
/*  6230 */                     }
/*  6231 */                     var $lattr327 = $ret;
/*  6232 */                     return $lattr327;
/*  6233 */                     return Sk.builtin.none.none$;
/*  6234 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6235 */                 }
/*  6236 */             } catch (err) {
/*  6237 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6238 */                     err = new Sk.builtin.ExternalError(err);
/*  6239 */                 }
/*  6240 */                 err.traceback.push({
/*  6241 */                     lineno: $currLineNo,
/*  6242 */                     colno: $currColNo,
/*  6243 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6244 */                 });
/*  6245 */                 if ($exc.length > 0) {
/*  6246 */                     $err = err;
/*  6247 */                     $blk = $exc.pop();
/*  6248 */                     continue;
/*  6249 */                 } else {
/*  6250 */                     throw err;
/*  6251 */                 }
/*  6252 */             }
/*  6253 */         }
/*  6254 */     });
/*  6255 */     var $scope329 = (function $release330$(self, i) {
/*  6256 */         var t; /* locals */
/*  6257 */         var i, i, self, self, self, self, t, t, t, t, $lattr331, $lattr333, $compareres334, $lattr333, $compareres334, $lattr335;
/*  6258 */         var $wakeFromSuspension = function() {
/*  6259 */             var susp = $scope329.$wakingSuspension;
/*  6260 */             delete $scope329.$wakingSuspension;
/*  6261 */             $blk = susp.$blk;
/*  6262 */             $loc = susp.$loc;
/*  6263 */             $gbl = susp.$gbl;
/*  6264 */             $exc = susp.$exc;
/*  6265 */             $err = susp.$err;
/*  6266 */             $postfinally = susp.$postfinally;
/*  6267 */             $currLineNo = susp.$lineno;
/*  6268 */             $currColNo = susp.$colno;
/*  6269 */             Sk.lastYield = Date.now();
/*  6270 */             i = susp.$tmps.i;
/*  6271 */             self = susp.$tmps.self;
/*  6272 */             t = susp.$tmps.t;
/*  6273 */             $lattr331 = susp.$tmps.$lattr331;
/*  6274 */             $lattr333 = susp.$tmps.$lattr333;
/*  6275 */             $compareres334 = susp.$tmps.$compareres334;
/*  6276 */             $lattr335 = susp.$tmps.$lattr335;
/*  6277 */             try {
/*  6278 */                 $ret = susp.child.resume();
/*  6279 */             } catch (err) {
/*  6280 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6281 */                     err = new Sk.builtin.ExternalError(err);
/*  6282 */                 }
/*  6283 */                 err.traceback.push({
/*  6284 */                     lineno: $currLineNo,
/*  6285 */                     colno: $currColNo,
/*  6286 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6287 */                 });
/*  6288 */                 if ($exc.length > 0) {
/*  6289 */                     $err = err;
/*  6290 */                     $blk = $exc.pop();
/*  6291 */                 } else {
/*  6292 */                     throw err;
/*  6293 */                 }
/*  6294 */             }
/*  6295 */         };
/*  6296 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6297 */             var susp = new Sk.misceval.Suspension();
/*  6298 */             susp.child = $child;
/*  6299 */             susp.resume = function() {
/*  6300 */                 $scope329.$wakingSuspension = susp;
/*  6301 */                 return $scope329();
/*  6302 */             };
/*  6303 */             susp.data = susp.child.data;
/*  6304 */             susp.$blk = $blk;
/*  6305 */             susp.$loc = $loc;
/*  6306 */             susp.$gbl = $gbl;
/*  6307 */             susp.$exc = $exc;
/*  6308 */             susp.$err = $err;
/*  6309 */             susp.$postfinally = $postfinally;
/*  6310 */             susp.$filename = $filename;
/*  6311 */             susp.$lineno = $lineno;
/*  6312 */             susp.$colno = $colno;
/*  6313 */             susp.optional = susp.child.optional;
/*  6314 */             susp.$tmps = {
/*  6315 */                 "i": i,
/*  6316 */                 "self": self,
/*  6317 */                 "t": t,
/*  6318 */                 "$lattr331": $lattr331,
/*  6319 */                 "$lattr333": $lattr333,
/*  6320 */                 "$compareres334": $compareres334,
/*  6321 */                 "$lattr335": $lattr335
/*  6322 */             };
/*  6323 */             return susp;
/*  6324 */         };
/*  6325 */         var $blk = 0,
/*  6326 */             $exc = [],
/*  6327 */             $loc = {},
/*  6328 */             $gbl = this,
/*  6329 */             $err = undefined,
/*  6330 */             $ret = undefined,
/*  6331 */             $postfinally = undefined,
/*  6332 */             $currLineNo = undefined,
/*  6333 */             $currColNo = undefined;
/*  6334 */         if ($scope329.$wakingSuspension !== undefined) {
/*  6335 */             $wakeFromSuspension();
/*  6336 */         } else {
/*  6337 */             Sk.builtin.pyCheckArgs("release", arguments, 2, 2, false, false);
/*  6338 */         }
/*  6339 */         while (true) {
/*  6340 */             try {
/*  6341 */                 switch ($blk) {
/*  6342 */                 case 0:
/*  6343 */                     /* --- codeobj entry --- */
/*  6344 */                     if (self === undefined) {
/*  6345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6346 */                     }
/*  6347 */                     if (i === undefined) {
/*  6348 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  6349 */                     }
/*  6350 */ 
/*  6351 */                     //
/*  6352 */                     // line 215:
/*  6353 */                     //         t = self.findtcb(i)
/*  6354 */                     //         ^
/*  6355 */                     //
/*  6356 */                     $currLineNo = 215;
/*  6357 */                     $currColNo = 8;
/*  6358 */ 
/*  6359 */                     if (self === undefined) {
/*  6360 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6361 */                     }
/*  6362 */                     $ret = Sk.abstr.gattr(self, 'findtcb', true);
/*  6363 */                     $blk = 1; /* allowing case fallthrough */
/*  6364 */                 case 1:
/*  6365 */                     /* --- function return or resume suspension --- */
/*  6366 */                     if ($ret && $ret.$isSuspension) {
/*  6367 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 215, 12);
/*  6368 */                     }
/*  6369 */                     var $lattr331 = $ret;
/*  6370 */                     if (i === undefined) {
/*  6371 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  6372 */                     }
/*  6373 */                     $ret;
/*  6374 */                     $ret = Sk.misceval.callsimOrSuspend($lattr331, i);
/*  6375 */                     $blk = 2; /* allowing case fallthrough */
/*  6376 */                 case 2:
/*  6377 */                     /* --- function return or resume suspension --- */
/*  6378 */                     if ($ret && $ret.$isSuspension) {
/*  6379 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 215, 12);
/*  6380 */                     }
/*  6381 */                     var $call332 = $ret;
/*  6382 */                     //
/*  6383 */                     // line 215:
/*  6384 */                     //         t = self.findtcb(i)
/*  6385 */                     //             ^
/*  6386 */                     //
/*  6387 */                     $currLineNo = 215;
/*  6388 */                     $currColNo = 12;
/*  6389 */ 
/*  6390 */                     t = $call332;
/*  6391 */                     //
/*  6392 */                     // line 216:
/*  6393 */                     //         t.task_holding = False
/*  6394 */                     //         ^
/*  6395 */                     //
/*  6396 */                     $currLineNo = 216;
/*  6397 */                     $currColNo = 8;
/*  6398 */ 
/*  6399 */                     if (t === undefined) {
/*  6400 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  6401 */                     }
/*  6402 */                     $ret = Sk.abstr.sattr(t, 'task_holding', Sk.builtin.bool.false$, true);
/*  6403 */                     $blk = 3; /* allowing case fallthrough */
/*  6404 */                 case 3:
/*  6405 */                     /* --- function return or resume suspension --- */
/*  6406 */                     if ($ret && $ret.$isSuspension) {
/*  6407 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 216, 8);
/*  6408 */                     }
/*  6409 */                     //
/*  6410 */                     // line 217:
/*  6411 */                     //         if t.priority > self.priority:
/*  6412 */                     //         ^
/*  6413 */                     //
/*  6414 */                     $currLineNo = 217;
/*  6415 */                     $currColNo = 8;
/*  6416 */ 
/*  6417 */                     if (t === undefined) {
/*  6418 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  6419 */                     }
/*  6420 */                     $ret = Sk.abstr.gattr(t, 'priority', true);
/*  6421 */                     $blk = 6; /* allowing case fallthrough */
/*  6422 */                 case 6:
/*  6423 */                     /* --- function return or resume suspension --- */
/*  6424 */                     if ($ret && $ret.$isSuspension) {
/*  6425 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 11);
/*  6426 */                     }
/*  6427 */                     var $lattr333 = $ret;
/*  6428 */                     var $compareres334 = null;
/*  6429 */                     if (self === undefined) {
/*  6430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6431 */                     }
/*  6432 */                     $ret = Sk.abstr.gattr(self, 'priority', true);
/*  6433 */                     $blk = 8; /* allowing case fallthrough */
/*  6434 */                 case 8:
/*  6435 */                     /* --- function return or resume suspension --- */
/*  6436 */                     if ($ret && $ret.$isSuspension) {
/*  6437 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 24);
/*  6438 */                     }
/*  6439 */                     var $lattr335 = $ret;
/*  6440 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr333, $lattr335, 'Gt', true));
/*  6441 */                     $blk = 9; /* allowing case fallthrough */
/*  6442 */                 case 9:
/*  6443 */                     /* --- function return or resume suspension --- */
/*  6444 */                     if ($ret && $ret.$isSuspension) {
/*  6445 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 217, 11);
/*  6446 */                     }
/*  6447 */                     $compareres334 = $ret;
/*  6448 */                     var $jfalse336 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6449 */                     if ($jfalse336) { /*test failed */
/*  6450 */                         $blk = 7;
/*  6451 */                         continue;
/*  6452 */                     }
/*  6453 */                     $blk = 7; /* allowing case fallthrough */
/*  6454 */                 case 7:
/*  6455 */                     /* --- done --- */
/*  6456 */                     var $jfalse337 = ($compareres334 === false || !Sk.misceval.isTrue($compareres334));
/*  6457 */                     if ($jfalse337) { /*test failed */
/*  6458 */                         $blk = 5;
/*  6459 */                         continue;
/*  6460 */                     }
/*  6461 */                     //
/*  6462 */                     // line 218:
/*  6463 */                     //             return t
/*  6464 */                     //             ^
/*  6465 */                     //
/*  6466 */                     $currLineNo = 218;
/*  6467 */                     $currColNo = 12;
/*  6468 */ 
/*  6469 */                     if (t === undefined) {
/*  6470 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  6471 */                     }
/*  6472 */                     return t;
/*  6473 */                     $blk = 4; /* allowing case fallthrough */
/*  6474 */                 case 4:
/*  6475 */                     /* --- end of if --- */
/*  6476 */                     return Sk.builtin.none.none$;
/*  6477 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6478 */                 case 5:
/*  6479 */                     /* --- next branch of if --- */
/*  6480 */                     //
/*  6481 */                     // line 220:
/*  6482 */                     //             return self
/*  6483 */                     //             ^
/*  6484 */                     //
/*  6485 */                     $currLineNo = 220;
/*  6486 */                     $currColNo = 12;
/*  6487 */ 
/*  6488 */                     if (self === undefined) {
/*  6489 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6490 */                     }
/*  6491 */                     return self;
/*  6492 */                     $blk = 4; /* jump */
/*  6493 */                     continue;
/*  6494 */                 }
/*  6495 */             } catch (err) {
/*  6496 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6497 */                     err = new Sk.builtin.ExternalError(err);
/*  6498 */                 }
/*  6499 */                 err.traceback.push({
/*  6500 */                     lineno: $currLineNo,
/*  6501 */                     colno: $currColNo,
/*  6502 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6503 */                 });
/*  6504 */                 if ($exc.length > 0) {
/*  6505 */                     $err = err;
/*  6506 */                     $blk = $exc.pop();
/*  6507 */                     continue;
/*  6508 */                 } else {
/*  6509 */                     throw err;
/*  6510 */                 }
/*  6511 */             }
/*  6512 */         }
/*  6513 */     });
/*  6514 */     var $scope339 = (function $qpkt340$(self, pkt) {
/*  6515 */         var t; /* locals */
/*  6516 */         var pkt, pkt, pkt, pkt, pkt, self, self, self, self, t, t, $lattr341, $lattr341, $lattr342, $loadgbl344, $loadgbl344, $lattr345, $inplbinopattr346, $lattr347, $lattr348;
/*  6517 */         var $wakeFromSuspension = function() {
/*  6518 */             var susp = $scope339.$wakingSuspension;
/*  6519 */             delete $scope339.$wakingSuspension;
/*  6520 */             $blk = susp.$blk;
/*  6521 */             $loc = susp.$loc;
/*  6522 */             $gbl = susp.$gbl;
/*  6523 */             $exc = susp.$exc;
/*  6524 */             $err = susp.$err;
/*  6525 */             $postfinally = susp.$postfinally;
/*  6526 */             $currLineNo = susp.$lineno;
/*  6527 */             $currColNo = susp.$colno;
/*  6528 */             Sk.lastYield = Date.now();
/*  6529 */             pkt = susp.$tmps.pkt;
/*  6530 */             self = susp.$tmps.self;
/*  6531 */             t = susp.$tmps.t;
/*  6532 */             $lattr341 = susp.$tmps.$lattr341;
/*  6533 */             $lattr342 = susp.$tmps.$lattr342;
/*  6534 */             $loadgbl344 = susp.$tmps.$loadgbl344;
/*  6535 */             $lattr345 = susp.$tmps.$lattr345;
/*  6536 */             $inplbinopattr346 = susp.$tmps.$inplbinopattr346;
/*  6537 */             $lattr347 = susp.$tmps.$lattr347;
/*  6538 */             $lattr348 = susp.$tmps.$lattr348;
/*  6539 */             try {
/*  6540 */                 $ret = susp.child.resume();
/*  6541 */             } catch (err) {
/*  6542 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6543 */                     err = new Sk.builtin.ExternalError(err);
/*  6544 */                 }
/*  6545 */                 err.traceback.push({
/*  6546 */                     lineno: $currLineNo,
/*  6547 */                     colno: $currColNo,
/*  6548 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6549 */                 });
/*  6550 */                 if ($exc.length > 0) {
/*  6551 */                     $err = err;
/*  6552 */                     $blk = $exc.pop();
/*  6553 */                 } else {
/*  6554 */                     throw err;
/*  6555 */                 }
/*  6556 */             }
/*  6557 */         };
/*  6558 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6559 */             var susp = new Sk.misceval.Suspension();
/*  6560 */             susp.child = $child;
/*  6561 */             susp.resume = function() {
/*  6562 */                 $scope339.$wakingSuspension = susp;
/*  6563 */                 return $scope339();
/*  6564 */             };
/*  6565 */             susp.data = susp.child.data;
/*  6566 */             susp.$blk = $blk;
/*  6567 */             susp.$loc = $loc;
/*  6568 */             susp.$gbl = $gbl;
/*  6569 */             susp.$exc = $exc;
/*  6570 */             susp.$err = $err;
/*  6571 */             susp.$postfinally = $postfinally;
/*  6572 */             susp.$filename = $filename;
/*  6573 */             susp.$lineno = $lineno;
/*  6574 */             susp.$colno = $colno;
/*  6575 */             susp.optional = susp.child.optional;
/*  6576 */             susp.$tmps = {
/*  6577 */                 "pkt": pkt,
/*  6578 */                 "self": self,
/*  6579 */                 "t": t,
/*  6580 */                 "$lattr341": $lattr341,
/*  6581 */                 "$lattr342": $lattr342,
/*  6582 */                 "$loadgbl344": $loadgbl344,
/*  6583 */                 "$lattr345": $lattr345,
/*  6584 */                 "$inplbinopattr346": $inplbinopattr346,
/*  6585 */                 "$lattr347": $lattr347,
/*  6586 */                 "$lattr348": $lattr348
/*  6587 */             };
/*  6588 */             return susp;
/*  6589 */         };
/*  6590 */         var $blk = 0,
/*  6591 */             $exc = [],
/*  6592 */             $loc = {},
/*  6593 */             $gbl = this,
/*  6594 */             $err = undefined,
/*  6595 */             $ret = undefined,
/*  6596 */             $postfinally = undefined,
/*  6597 */             $currLineNo = undefined,
/*  6598 */             $currColNo = undefined;
/*  6599 */         if ($scope339.$wakingSuspension !== undefined) {
/*  6600 */             $wakeFromSuspension();
/*  6601 */         } else {
/*  6602 */             Sk.builtin.pyCheckArgs("qpkt", arguments, 2, 2, false, false);
/*  6603 */         }
/*  6604 */         while (true) {
/*  6605 */             try {
/*  6606 */                 switch ($blk) {
/*  6607 */                 case 0:
/*  6608 */                     /* --- codeobj entry --- */
/*  6609 */                     if (self === undefined) {
/*  6610 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6611 */                     }
/*  6612 */                     if (pkt === undefined) {
/*  6613 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  6614 */                     }
/*  6615 */ 
/*  6616 */                     //
/*  6617 */                     // line 224:
/*  6618 */                     //         t = self.findtcb(pkt.ident)
/*  6619 */                     //         ^
/*  6620 */                     //
/*  6621 */                     $currLineNo = 224;
/*  6622 */                     $currColNo = 8;
/*  6623 */ 
/*  6624 */                     if (self === undefined) {
/*  6625 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6626 */                     }
/*  6627 */                     $ret = Sk.abstr.gattr(self, 'findtcb', true);
/*  6628 */                     $blk = 1; /* allowing case fallthrough */
/*  6629 */                 case 1:
/*  6630 */                     /* --- function return or resume suspension --- */
/*  6631 */                     if ($ret && $ret.$isSuspension) {
/*  6632 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 12);
/*  6633 */                     }
/*  6634 */                     var $lattr341 = $ret;
/*  6635 */                     if (pkt === undefined) {
/*  6636 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  6637 */                     }
/*  6638 */                     $ret = Sk.abstr.gattr(pkt, 'ident', true);
/*  6639 */                     $blk = 2; /* allowing case fallthrough */
/*  6640 */                 case 2:
/*  6641 */                     /* --- function return or resume suspension --- */
/*  6642 */                     if ($ret && $ret.$isSuspension) {
/*  6643 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 25);
/*  6644 */                     }
/*  6645 */                     var $lattr342 = $ret;
/*  6646 */                     $ret;
/*  6647 */                     $ret = Sk.misceval.callsimOrSuspend($lattr341, $lattr342);
/*  6648 */                     $blk = 3; /* allowing case fallthrough */
/*  6649 */                 case 3:
/*  6650 */                     /* --- function return or resume suspension --- */
/*  6651 */                     if ($ret && $ret.$isSuspension) {
/*  6652 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 224, 12);
/*  6653 */                     }
/*  6654 */                     var $call343 = $ret;
/*  6655 */                     //
/*  6656 */                     // line 224:
/*  6657 */                     //         t = self.findtcb(pkt.ident)
/*  6658 */                     //             ^
/*  6659 */                     //
/*  6660 */                     $currLineNo = 224;
/*  6661 */                     $currColNo = 12;
/*  6662 */ 
/*  6663 */                     t = $call343;
/*  6664 */                     //
/*  6665 */                     // line 225:
/*  6666 */                     //         taskWorkArea.qpktCount += 1
/*  6667 */                     //         ^
/*  6668 */                     //
/*  6669 */                     $currLineNo = 225;
/*  6670 */                     $currColNo = 8;
/*  6671 */ 
/*  6672 */                     var $loadgbl344 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  6673 */                     $ret = Sk.abstr.gattr($loadgbl344, 'qpktCount', true);
/*  6674 */                     $blk = 4; /* allowing case fallthrough */
/*  6675 */                 case 4:
/*  6676 */                     /* --- function return or resume suspension --- */
/*  6677 */                     if ($ret && $ret.$isSuspension) {
/*  6678 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 225, 8);
/*  6679 */                     }
/*  6680 */                     var $lattr345 = $ret;
/*  6681 */                     var $inplbinopattr346 = Sk.abstr.numberInplaceBinOp($lattr345, new Sk.builtin.int_(1), 'Add');
/*  6682 */                     $ret = undefined;
/*  6683 */                     if ($inplbinopattr346 !== undefined) {
/*  6684 */                         $ret = Sk.abstr.sattr($loadgbl344, 'qpktCount', $inplbinopattr346, true);
/*  6685 */                     }
/*  6686 */                     $blk = 5; /* allowing case fallthrough */
/*  6687 */                 case 5:
/*  6688 */                     /* --- function return or resume suspension --- */
/*  6689 */                     if ($ret && $ret.$isSuspension) {
/*  6690 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 225, 8);
/*  6691 */                     }
/*  6692 */                     //
/*  6693 */                     // line 226:
/*  6694 */                     //         pkt.link = None
/*  6695 */                     //         ^
/*  6696 */                     //
/*  6697 */                     $currLineNo = 226;
/*  6698 */                     $currColNo = 8;
/*  6699 */ 
/*  6700 */                     if (pkt === undefined) {
/*  6701 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  6702 */                     }
/*  6703 */                     $ret = Sk.abstr.sattr(pkt, 'link', Sk.builtin.none.none$, true);
/*  6704 */                     $blk = 6; /* allowing case fallthrough */
/*  6705 */                 case 6:
/*  6706 */                     /* --- function return or resume suspension --- */
/*  6707 */                     if ($ret && $ret.$isSuspension) {
/*  6708 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 226, 8);
/*  6709 */                     }
/*  6710 */                     //
/*  6711 */                     // line 227:
/*  6712 */                     //         pkt.ident = self.ident
/*  6713 */                     //         ^
/*  6714 */                     //
/*  6715 */                     $currLineNo = 227;
/*  6716 */                     $currColNo = 8;
/*  6717 */ 
/*  6718 */                     if (self === undefined) {
/*  6719 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6720 */                     }
/*  6721 */                     $ret = Sk.abstr.gattr(self, 'ident', true);
/*  6722 */                     $blk = 7; /* allowing case fallthrough */
/*  6723 */                 case 7:
/*  6724 */                     /* --- function return or resume suspension --- */
/*  6725 */                     if ($ret && $ret.$isSuspension) {
/*  6726 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 227, 20);
/*  6727 */                     }
/*  6728 */                     var $lattr347 = $ret;
/*  6729 */                     if (pkt === undefined) {
/*  6730 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  6731 */                     }
/*  6732 */                     $ret = Sk.abstr.sattr(pkt, 'ident', $lattr347, true);
/*  6733 */                     $blk = 8; /* allowing case fallthrough */
/*  6734 */                 case 8:
/*  6735 */                     /* --- function return or resume suspension --- */
/*  6736 */                     if ($ret && $ret.$isSuspension) {
/*  6737 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 227, 8);
/*  6738 */                     }
/*  6739 */                     //
/*  6740 */                     // line 228:
/*  6741 */                     //         return t.addPacket(pkt,self)
/*  6742 */                     //         ^
/*  6743 */                     //
/*  6744 */                     $currLineNo = 228;
/*  6745 */                     $currColNo = 8;
/*  6746 */ 
/*  6747 */                     if (t === undefined) {
/*  6748 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  6749 */                     }
/*  6750 */                     $ret = Sk.abstr.gattr(t, 'addPacket', true);
/*  6751 */                     $blk = 9; /* allowing case fallthrough */
/*  6752 */                 case 9:
/*  6753 */                     /* --- function return or resume suspension --- */
/*  6754 */                     if ($ret && $ret.$isSuspension) {
/*  6755 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 228, 15);
/*  6756 */                     }
/*  6757 */                     var $lattr348 = $ret;
/*  6758 */                     if (pkt === undefined) {
/*  6759 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  6760 */                     }
/*  6761 */                     if (self === undefined) {
/*  6762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6763 */                     }
/*  6764 */                     $ret;
/*  6765 */                     $ret = Sk.misceval.callsimOrSuspend($lattr348, pkt, self);
/*  6766 */                     $blk = 10; /* allowing case fallthrough */
/*  6767 */                 case 10:
/*  6768 */                     /* --- function return or resume suspension --- */
/*  6769 */                     if ($ret && $ret.$isSuspension) {
/*  6770 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 228, 15);
/*  6771 */                     }
/*  6772 */                     var $call349 = $ret;
/*  6773 */                     //
/*  6774 */                     // line 228:
/*  6775 */                     //         return t.addPacket(pkt,self)
/*  6776 */                     //                ^
/*  6777 */                     //
/*  6778 */                     $currLineNo = 228;
/*  6779 */                     $currColNo = 15;
/*  6780 */ 
/*  6781 */                     return $call349;
/*  6782 */                     return Sk.builtin.none.none$;
/*  6783 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6784 */                 }
/*  6785 */             } catch (err) {
/*  6786 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6787 */                     err = new Sk.builtin.ExternalError(err);
/*  6788 */                 }
/*  6789 */                 err.traceback.push({
/*  6790 */                     lineno: $currLineNo,
/*  6791 */                     colno: $currColNo,
/*  6792 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6793 */                 });
/*  6794 */                 if ($exc.length > 0) {
/*  6795 */                     $err = err;
/*  6796 */                     $blk = $exc.pop();
/*  6797 */                     continue;
/*  6798 */                 } else {
/*  6799 */                     throw err;
/*  6800 */                 }
/*  6801 */             }
/*  6802 */         }
/*  6803 */     });
/*  6804 */     var $scope351 = (function $findtcb352$(self, id) {
/*  6805 */         var t; /* locals */
/*  6806 */         var id, id, id, self, t, t, t, $loadgbl353, $loadgbl353, $lattr354, $compareres356, $loadgbl359, $str360, $binop361;
/*  6807 */         var $wakeFromSuspension = function() {
/*  6808 */             var susp = $scope351.$wakingSuspension;
/*  6809 */             delete $scope351.$wakingSuspension;
/*  6810 */             $blk = susp.$blk;
/*  6811 */             $loc = susp.$loc;
/*  6812 */             $gbl = susp.$gbl;
/*  6813 */             $exc = susp.$exc;
/*  6814 */             $err = susp.$err;
/*  6815 */             $postfinally = susp.$postfinally;
/*  6816 */             $currLineNo = susp.$lineno;
/*  6817 */             $currColNo = susp.$colno;
/*  6818 */             Sk.lastYield = Date.now();
/*  6819 */             id = susp.$tmps.id;
/*  6820 */             self = susp.$tmps.self;
/*  6821 */             t = susp.$tmps.t;
/*  6822 */             $loadgbl353 = susp.$tmps.$loadgbl353;
/*  6823 */             $lattr354 = susp.$tmps.$lattr354;
/*  6824 */             $compareres356 = susp.$tmps.$compareres356;
/*  6825 */             $loadgbl359 = susp.$tmps.$loadgbl359;
/*  6826 */             $str360 = susp.$tmps.$str360;
/*  6827 */             $binop361 = susp.$tmps.$binop361;
/*  6828 */             try {
/*  6829 */                 $ret = susp.child.resume();
/*  6830 */             } catch (err) {
/*  6831 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6832 */                     err = new Sk.builtin.ExternalError(err);
/*  6833 */                 }
/*  6834 */                 err.traceback.push({
/*  6835 */                     lineno: $currLineNo,
/*  6836 */                     colno: $currColNo,
/*  6837 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  6838 */                 });
/*  6839 */                 if ($exc.length > 0) {
/*  6840 */                     $err = err;
/*  6841 */                     $blk = $exc.pop();
/*  6842 */                 } else {
/*  6843 */                     throw err;
/*  6844 */                 }
/*  6845 */             }
/*  6846 */         };
/*  6847 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6848 */             var susp = new Sk.misceval.Suspension();
/*  6849 */             susp.child = $child;
/*  6850 */             susp.resume = function() {
/*  6851 */                 $scope351.$wakingSuspension = susp;
/*  6852 */                 return $scope351();
/*  6853 */             };
/*  6854 */             susp.data = susp.child.data;
/*  6855 */             susp.$blk = $blk;
/*  6856 */             susp.$loc = $loc;
/*  6857 */             susp.$gbl = $gbl;
/*  6858 */             susp.$exc = $exc;
/*  6859 */             susp.$err = $err;
/*  6860 */             susp.$postfinally = $postfinally;
/*  6861 */             susp.$filename = $filename;
/*  6862 */             susp.$lineno = $lineno;
/*  6863 */             susp.$colno = $colno;
/*  6864 */             susp.optional = susp.child.optional;
/*  6865 */             susp.$tmps = {
/*  6866 */                 "id": id,
/*  6867 */                 "self": self,
/*  6868 */                 "t": t,
/*  6869 */                 "$loadgbl353": $loadgbl353,
/*  6870 */                 "$lattr354": $lattr354,
/*  6871 */                 "$compareres356": $compareres356,
/*  6872 */                 "$loadgbl359": $loadgbl359,
/*  6873 */                 "$str360": $str360,
/*  6874 */                 "$binop361": $binop361
/*  6875 */             };
/*  6876 */             return susp;
/*  6877 */         };
/*  6878 */         var $blk = 0,
/*  6879 */             $exc = [],
/*  6880 */             $loc = {},
/*  6881 */             $gbl = this,
/*  6882 */             $err = undefined,
/*  6883 */             $ret = undefined,
/*  6884 */             $postfinally = undefined,
/*  6885 */             $currLineNo = undefined,
/*  6886 */             $currColNo = undefined;
/*  6887 */         if ($scope351.$wakingSuspension !== undefined) {
/*  6888 */             $wakeFromSuspension();
/*  6889 */         } else {
/*  6890 */             Sk.builtin.pyCheckArgs("findtcb", arguments, 2, 2, false, false);
/*  6891 */         }
/*  6892 */         while (true) {
/*  6893 */             try {
/*  6894 */                 switch ($blk) {
/*  6895 */                 case 0:
/*  6896 */                     /* --- codeobj entry --- */
/*  6897 */                     if (self === undefined) {
/*  6898 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6899 */                     }
/*  6900 */                     if (id === undefined) {
/*  6901 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  6902 */                     }
/*  6903 */ 
/*  6904 */                     //
/*  6905 */                     // line 232:
/*  6906 */                     //         t = taskWorkArea.taskTab[id]
/*  6907 */                     //         ^
/*  6908 */                     //
/*  6909 */                     $currLineNo = 232;
/*  6910 */                     $currColNo = 8;
/*  6911 */ 
/*  6912 */                     var $loadgbl353 = Sk.misceval.loadname('taskWorkArea', $gbl);
/*  6913 */                     $ret = Sk.abstr.gattr($loadgbl353, 'taskTab', true);
/*  6914 */                     $blk = 1; /* allowing case fallthrough */
/*  6915 */                 case 1:
/*  6916 */                     /* --- function return or resume suspension --- */
/*  6917 */                     if ($ret && $ret.$isSuspension) {
/*  6918 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 232, 12);
/*  6919 */                     }
/*  6920 */                     var $lattr354 = $ret;
/*  6921 */                     if (id === undefined) {
/*  6922 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  6923 */                     }
/*  6924 */                     $ret = Sk.abstr.objectGetItem($lattr354, id, true);
/*  6925 */                     $blk = 2; /* allowing case fallthrough */
/*  6926 */                 case 2:
/*  6927 */                     /* --- function return or resume suspension --- */
/*  6928 */                     if ($ret && $ret.$isSuspension) {
/*  6929 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  6930 */                     }
/*  6931 */                     var $lsubscr355 = $ret;
/*  6932 */                     t = $lsubscr355;
/*  6933 */                     //
/*  6934 */                     // line 233:
/*  6935 */                     //         if t is None:
/*  6936 */                     //         ^
/*  6937 */                     //
/*  6938 */                     $currLineNo = 233;
/*  6939 */                     $currColNo = 8;
/*  6940 */ 
/*  6941 */                     if (t === undefined) {
/*  6942 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  6943 */                     }
/*  6944 */                     var $compareres356 = null;
/*  6945 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, Sk.builtin.none.none$, 'Is', true));
/*  6946 */                     $blk = 5; /* allowing case fallthrough */
/*  6947 */                 case 5:
/*  6948 */                     /* --- function return or resume suspension --- */
/*  6949 */                     if ($ret && $ret.$isSuspension) {
/*  6950 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 233, 11);
/*  6951 */                     }
/*  6952 */                     $compareres356 = $ret;
/*  6953 */                     var $jfalse357 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6954 */                     if ($jfalse357) { /*test failed */
/*  6955 */                         $blk = 4;
/*  6956 */                         continue;
/*  6957 */                     }
/*  6958 */                     $blk = 4; /* allowing case fallthrough */
/*  6959 */                 case 4:
/*  6960 */                     /* --- done --- */
/*  6961 */                     var $jfalse358 = ($compareres356 === false || !Sk.misceval.isTrue($compareres356));
/*  6962 */                     if ($jfalse358) { /*test failed */
/*  6963 */                         $blk = 3;
/*  6964 */                         continue;
/*  6965 */                     }
/*  6966 */                     //
/*  6967 */                     // line 234:
/*  6968 */                     //             raise Exception("Bad task id %d" % id)
/*  6969 */                     //             ^
/*  6970 */                     //
/*  6971 */                     $currLineNo = 234;
/*  6972 */                     $currColNo = 12;
/*  6973 */ 
/*  6974 */                     var $loadgbl359 = Sk.misceval.loadname('Exception', $gbl);
/*  6975 */                     var $str360 = new Sk.builtins['str']('Bad task id %d');
/*  6976 */                     if (id === undefined) {
/*  6977 */                         throw new Sk.builtin.UnboundLocalError('local variable \'id\' referenced before assignment');
/*  6978 */                     }
/*  6979 */                     var $binop361 = Sk.abstr.numberBinOp($str360, id, 'Mod');
/*  6980 */                     $ret;
/*  6981 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl359, $binop361);
/*  6982 */                     $blk = 6; /* allowing case fallthrough */
/*  6983 */                 case 6:
/*  6984 */                     /* --- function return or resume suspension --- */
/*  6985 */                     if ($ret && $ret.$isSuspension) {
/*  6986 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 234, 18);
/*  6987 */                     }
/*  6988 */                     var $call362 = $ret;
/*  6989 */                     //
/*  6990 */                     // line 234:
/*  6991 */                     //             raise Exception("Bad task id %d" % id)
/*  6992 */                     //                   ^
/*  6993 */                     //
/*  6994 */                     $currLineNo = 234;
/*  6995 */                     $currColNo = 18;
/*  6996 */ 
/*  6997 */                     throw $call362;
/*  6998 */                     $blk = 3; /* allowing case fallthrough */
/*  6999 */                 case 3:
/*  7000 */                     /* --- end of if --- */
/*  7001 */                     //
/*  7002 */                     // line 235:
/*  7003 */                     //         return t
/*  7004 */                     //         ^
/*  7005 */                     //
/*  7006 */                     $currLineNo = 235;
/*  7007 */                     $currColNo = 8;
/*  7008 */ 
/*  7009 */                     if (t === undefined) {
/*  7010 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/*  7011 */                     }
/*  7012 */                     return t;
/*  7013 */                     return Sk.builtin.none.none$;
/*  7014 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7015 */                 }
/*  7016 */             } catch (err) {
/*  7017 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7018 */                     err = new Sk.builtin.ExternalError(err);
/*  7019 */                 }
/*  7020 */                 err.traceback.push({
/*  7021 */                     lineno: $currLineNo,
/*  7022 */                     colno: $currColNo,
/*  7023 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7024 */                 });
/*  7025 */                 if ($exc.length > 0) {
/*  7026 */                     $err = err;
/*  7027 */                     $blk = $exc.pop();
/*  7028 */                     continue;
/*  7029 */                 } else {
/*  7030 */                     throw err;
/*  7031 */                 }
/*  7032 */             }
/*  7033 */         }
/*  7034 */     });
/*  7035 */     var $scope366 = (function $DeviceTask$class_outer($globals, $locals, $rest) {
/*  7036 */         var $gbl = $globals,
/*  7037 */             $loc = $locals;
/*  7038 */         (function $DeviceTask$_closure() {
/*  7039 */             var $blk = 0,
/*  7040 */                 $exc = [],
/*  7041 */                 $ret = undefined,
/*  7042 */                 $postfinally = undefined,
/*  7043 */                 $currLineNo = undefined,
/*  7044 */                 $currColNo = undefined;
/*  7045 */             while (true) {
/*  7046 */                 try {
/*  7047 */                     switch ($blk) {
/*  7048 */                     case 0:
/*  7049 */                         /* --- class entry --- */
/*  7050 */                         //
/*  7051 */                         // line 242:
/*  7052 */                         //     def __init__(self,i,p,w,s,r):
/*  7053 */                         //     ^
/*  7054 */                         //
/*  7055 */                         $currLineNo = 242;
/*  7056 */                         $currColNo = 4;
/*  7057 */ 
/*  7058 */                         $scope367.co_name = new Sk.builtins['str']('__init__');
/*  7059 */                         $scope367.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  7060 */                         var $funcobj372 = new Sk.builtins['function']($scope367, $gbl);
/*  7061 */                         $loc.__init__ = $funcobj372;
/*  7062 */                         //
/*  7063 */                         // line 245:
/*  7064 */                         //     def fn(self,pkt,r):
/*  7065 */                         //     ^
/*  7066 */                         //
/*  7067 */                         $currLineNo = 245;
/*  7068 */                         $currColNo = 4;
/*  7069 */ 
/*  7070 */                         $scope373.co_name = new Sk.builtins['str']('fn');
/*  7071 */                         $scope373.co_varnames = ['self', 'pkt', 'r'];
/*  7072 */                         var $funcobj397 = new Sk.builtins['function']($scope373, $gbl);
/*  7073 */                         $loc.fn = $funcobj397;
/*  7074 */                         return;
/*  7075 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7076 */                     }
/*  7077 */                 } catch (err) {
/*  7078 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  7079 */                         err = new Sk.builtin.ExternalError(err);
/*  7080 */                     }
/*  7081 */                     err.traceback.push({
/*  7082 */                         lineno: $currLineNo,
/*  7083 */                         colno: $currColNo,
/*  7084 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7085 */                     });
/*  7086 */                     if ($exc.length > 0) {
/*  7087 */                         $err = err;
/*  7088 */                         $blk = $exc.pop();
/*  7089 */                         continue;
/*  7090 */                     } else {
/*  7091 */                         throw err;
/*  7092 */                     }
/*  7093 */                 }
/*  7094 */             }
/*  7095 */         }).apply(null, $rest);
/*  7096 */     });
/*  7097 */     var $scope367 = (function $__init__368$(self, i, p, w, s, r) {
/*  7098 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl369, $loadgbl369, $lattr370;
/*  7099 */         var $wakeFromSuspension = function() {
/*  7100 */             var susp = $scope367.$wakingSuspension;
/*  7101 */             delete $scope367.$wakingSuspension;
/*  7102 */             $blk = susp.$blk;
/*  7103 */             $loc = susp.$loc;
/*  7104 */             $gbl = susp.$gbl;
/*  7105 */             $exc = susp.$exc;
/*  7106 */             $err = susp.$err;
/*  7107 */             $postfinally = susp.$postfinally;
/*  7108 */             $currLineNo = susp.$lineno;
/*  7109 */             $currColNo = susp.$colno;
/*  7110 */             Sk.lastYield = Date.now();
/*  7111 */             i = susp.$tmps.i;
/*  7112 */             p = susp.$tmps.p;
/*  7113 */             r = susp.$tmps.r;
/*  7114 */             s = susp.$tmps.s;
/*  7115 */             self = susp.$tmps.self;
/*  7116 */             w = susp.$tmps.w;
/*  7117 */             $loadgbl369 = susp.$tmps.$loadgbl369;
/*  7118 */             $lattr370 = susp.$tmps.$lattr370;
/*  7119 */             try {
/*  7120 */                 $ret = susp.child.resume();
/*  7121 */             } catch (err) {
/*  7122 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7123 */                     err = new Sk.builtin.ExternalError(err);
/*  7124 */                 }
/*  7125 */                 err.traceback.push({
/*  7126 */                     lineno: $currLineNo,
/*  7127 */                     colno: $currColNo,
/*  7128 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7129 */                 });
/*  7130 */                 if ($exc.length > 0) {
/*  7131 */                     $err = err;
/*  7132 */                     $blk = $exc.pop();
/*  7133 */                 } else {
/*  7134 */                     throw err;
/*  7135 */                 }
/*  7136 */             }
/*  7137 */         };
/*  7138 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7139 */             var susp = new Sk.misceval.Suspension();
/*  7140 */             susp.child = $child;
/*  7141 */             susp.resume = function() {
/*  7142 */                 $scope367.$wakingSuspension = susp;
/*  7143 */                 return $scope367();
/*  7144 */             };
/*  7145 */             susp.data = susp.child.data;
/*  7146 */             susp.$blk = $blk;
/*  7147 */             susp.$loc = $loc;
/*  7148 */             susp.$gbl = $gbl;
/*  7149 */             susp.$exc = $exc;
/*  7150 */             susp.$err = $err;
/*  7151 */             susp.$postfinally = $postfinally;
/*  7152 */             susp.$filename = $filename;
/*  7153 */             susp.$lineno = $lineno;
/*  7154 */             susp.$colno = $colno;
/*  7155 */             susp.optional = susp.child.optional;
/*  7156 */             susp.$tmps = {
/*  7157 */                 "i": i,
/*  7158 */                 "p": p,
/*  7159 */                 "r": r,
/*  7160 */                 "s": s,
/*  7161 */                 "self": self,
/*  7162 */                 "w": w,
/*  7163 */                 "$loadgbl369": $loadgbl369,
/*  7164 */                 "$lattr370": $lattr370
/*  7165 */             };
/*  7166 */             return susp;
/*  7167 */         };
/*  7168 */         var $blk = 0,
/*  7169 */             $exc = [],
/*  7170 */             $loc = {},
/*  7171 */             $gbl = this,
/*  7172 */             $err = undefined,
/*  7173 */             $ret = undefined,
/*  7174 */             $postfinally = undefined,
/*  7175 */             $currLineNo = undefined,
/*  7176 */             $currColNo = undefined;
/*  7177 */         if ($scope367.$wakingSuspension !== undefined) {
/*  7178 */             $wakeFromSuspension();
/*  7179 */         } else {
/*  7180 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  7181 */         }
/*  7182 */         while (true) {
/*  7183 */             try {
/*  7184 */                 switch ($blk) {
/*  7185 */                 case 0:
/*  7186 */                     /* --- codeobj entry --- */
/*  7187 */                     if (self === undefined) {
/*  7188 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7189 */                     }
/*  7190 */                     if (i === undefined) {
/*  7191 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7192 */                     }
/*  7193 */                     if (p === undefined) {
/*  7194 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7195 */                     }
/*  7196 */                     if (w === undefined) {
/*  7197 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  7198 */                     }
/*  7199 */                     if (s === undefined) {
/*  7200 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  7201 */                     }
/*  7202 */                     if (r === undefined) {
/*  7203 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7204 */                     }
/*  7205 */ 
/*  7206 */                     //
/*  7207 */                     // line 243:
/*  7208 */                     //         Task.__init__(self,i,p,w,s,r)
/*  7209 */                     //         ^
/*  7210 */                     //
/*  7211 */                     $currLineNo = 243;
/*  7212 */                     $currColNo = 8;
/*  7213 */ 
/*  7214 */                     var $loadgbl369 = Sk.misceval.loadname('Task', $gbl);
/*  7215 */                     $ret = Sk.abstr.gattr($loadgbl369, '__init__', true);
/*  7216 */                     $blk = 1; /* allowing case fallthrough */
/*  7217 */                 case 1:
/*  7218 */                     /* --- function return or resume suspension --- */
/*  7219 */                     if ($ret && $ret.$isSuspension) {
/*  7220 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 243, 8);
/*  7221 */                     }
/*  7222 */                     var $lattr370 = $ret;
/*  7223 */                     if (self === undefined) {
/*  7224 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7225 */                     }
/*  7226 */                     if (i === undefined) {
/*  7227 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7228 */                     }
/*  7229 */                     if (p === undefined) {
/*  7230 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7231 */                     }
/*  7232 */                     if (w === undefined) {
/*  7233 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  7234 */                     }
/*  7235 */                     if (s === undefined) {
/*  7236 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  7237 */                     }
/*  7238 */                     if (r === undefined) {
/*  7239 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7240 */                     }
/*  7241 */                     $ret;
/*  7242 */                     $ret = Sk.misceval.callsimOrSuspend($lattr370, self, i, p, w, s, r);
/*  7243 */                     $blk = 2; /* allowing case fallthrough */
/*  7244 */                 case 2:
/*  7245 */                     /* --- function return or resume suspension --- */
/*  7246 */                     if ($ret && $ret.$isSuspension) {
/*  7247 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 243, 8);
/*  7248 */                     }
/*  7249 */                     var $call371 = $ret;
/*  7250 */                     //
/*  7251 */                     // line 243:
/*  7252 */                     //         Task.__init__(self,i,p,w,s,r)
/*  7253 */                     //         ^
/*  7254 */                     //
/*  7255 */                     $currLineNo = 243;
/*  7256 */                     $currColNo = 8;
/*  7257 */ 
/*  7258 */                     return Sk.builtin.none.none$;
/*  7259 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7260 */                 }
/*  7261 */             } catch (err) {
/*  7262 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7263 */                     err = new Sk.builtin.ExternalError(err);
/*  7264 */                 }
/*  7265 */                 err.traceback.push({
/*  7266 */                     lineno: $currLineNo,
/*  7267 */                     colno: $currColNo,
/*  7268 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7269 */                 });
/*  7270 */                 if ($exc.length > 0) {
/*  7271 */                     $err = err;
/*  7272 */                     $blk = $exc.pop();
/*  7273 */                     continue;
/*  7274 */                 } else {
/*  7275 */                     throw err;
/*  7276 */                 }
/*  7277 */             }
/*  7278 */         }
/*  7279 */     });
/*  7280 */     var $scope373 = (function $fn374$(self, pkt, r) {
/*  7281 */         var d; /* locals */
/*  7282 */         var d, d, d, d, d, pkt, pkt, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, self, $loadgbl375, $loadgbl376, $compareres379, $compareres383, $lattr386, $lattr388, $loadgbl392, $loadgbl392, $lattr393, $lattr395;
/*  7283 */         var $wakeFromSuspension = function() {
/*  7284 */             var susp = $scope373.$wakingSuspension;
/*  7285 */             delete $scope373.$wakingSuspension;
/*  7286 */             $blk = susp.$blk;
/*  7287 */             $loc = susp.$loc;
/*  7288 */             $gbl = susp.$gbl;
/*  7289 */             $exc = susp.$exc;
/*  7290 */             $err = susp.$err;
/*  7291 */             $postfinally = susp.$postfinally;
/*  7292 */             $currLineNo = susp.$lineno;
/*  7293 */             $currColNo = susp.$colno;
/*  7294 */             Sk.lastYield = Date.now();
/*  7295 */             d = susp.$tmps.d;
/*  7296 */             pkt = susp.$tmps.pkt;
/*  7297 */             r = susp.$tmps.r;
/*  7298 */             self = susp.$tmps.self;
/*  7299 */             $loadgbl375 = susp.$tmps.$loadgbl375;
/*  7300 */             $loadgbl376 = susp.$tmps.$loadgbl376;
/*  7301 */             $compareres379 = susp.$tmps.$compareres379;
/*  7302 */             $compareres383 = susp.$tmps.$compareres383;
/*  7303 */             $lattr386 = susp.$tmps.$lattr386;
/*  7304 */             $lattr388 = susp.$tmps.$lattr388;
/*  7305 */             $loadgbl392 = susp.$tmps.$loadgbl392;
/*  7306 */             $lattr393 = susp.$tmps.$lattr393;
/*  7307 */             $lattr395 = susp.$tmps.$lattr395;
/*  7308 */             try {
/*  7309 */                 $ret = susp.child.resume();
/*  7310 */             } catch (err) {
/*  7311 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7312 */                     err = new Sk.builtin.ExternalError(err);
/*  7313 */                 }
/*  7314 */                 err.traceback.push({
/*  7315 */                     lineno: $currLineNo,
/*  7316 */                     colno: $currColNo,
/*  7317 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7318 */                 });
/*  7319 */                 if ($exc.length > 0) {
/*  7320 */                     $err = err;
/*  7321 */                     $blk = $exc.pop();
/*  7322 */                 } else {
/*  7323 */                     throw err;
/*  7324 */                 }
/*  7325 */             }
/*  7326 */         };
/*  7327 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7328 */             var susp = new Sk.misceval.Suspension();
/*  7329 */             susp.child = $child;
/*  7330 */             susp.resume = function() {
/*  7331 */                 $scope373.$wakingSuspension = susp;
/*  7332 */                 return $scope373();
/*  7333 */             };
/*  7334 */             susp.data = susp.child.data;
/*  7335 */             susp.$blk = $blk;
/*  7336 */             susp.$loc = $loc;
/*  7337 */             susp.$gbl = $gbl;
/*  7338 */             susp.$exc = $exc;
/*  7339 */             susp.$err = $err;
/*  7340 */             susp.$postfinally = $postfinally;
/*  7341 */             susp.$filename = $filename;
/*  7342 */             susp.$lineno = $lineno;
/*  7343 */             susp.$colno = $colno;
/*  7344 */             susp.optional = susp.child.optional;
/*  7345 */             susp.$tmps = {
/*  7346 */                 "d": d,
/*  7347 */                 "pkt": pkt,
/*  7348 */                 "r": r,
/*  7349 */                 "self": self,
/*  7350 */                 "$loadgbl375": $loadgbl375,
/*  7351 */                 "$loadgbl376": $loadgbl376,
/*  7352 */                 "$compareres379": $compareres379,
/*  7353 */                 "$compareres383": $compareres383,
/*  7354 */                 "$lattr386": $lattr386,
/*  7355 */                 "$lattr388": $lattr388,
/*  7356 */                 "$loadgbl392": $loadgbl392,
/*  7357 */                 "$lattr393": $lattr393,
/*  7358 */                 "$lattr395": $lattr395
/*  7359 */             };
/*  7360 */             return susp;
/*  7361 */         };
/*  7362 */         var $blk = 0,
/*  7363 */             $exc = [],
/*  7364 */             $loc = {},
/*  7365 */             $gbl = this,
/*  7366 */             $err = undefined,
/*  7367 */             $ret = undefined,
/*  7368 */             $postfinally = undefined,
/*  7369 */             $currLineNo = undefined,
/*  7370 */             $currColNo = undefined;
/*  7371 */         if ($scope373.$wakingSuspension !== undefined) {
/*  7372 */             $wakeFromSuspension();
/*  7373 */         } else {
/*  7374 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  7375 */         }
/*  7376 */         while (true) {
/*  7377 */             try {
/*  7378 */                 switch ($blk) {
/*  7379 */                 case 0:
/*  7380 */                     /* --- codeobj entry --- */
/*  7381 */                     if (self === undefined) {
/*  7382 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7383 */                     }
/*  7384 */                     if (pkt === undefined) {
/*  7385 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7386 */                     }
/*  7387 */                     if (r === undefined) {
/*  7388 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7389 */                     }
/*  7390 */ 
/*  7391 */                     //
/*  7392 */                     // line 246:
/*  7393 */                     //         d = r
/*  7394 */                     //         ^
/*  7395 */                     //
/*  7396 */                     $currLineNo = 246;
/*  7397 */                     $currColNo = 8;
/*  7398 */ 
/*  7399 */                     if (r === undefined) {
/*  7400 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7401 */                     }
/*  7402 */                     d = r;
/*  7403 */                     //
/*  7404 */                     // line 247:
/*  7405 */                     //         assert isinstance(d, DeviceTaskRec)
/*  7406 */                     //         ^
/*  7407 */                     //
/*  7408 */                     $currLineNo = 247;
/*  7409 */                     $currColNo = 8;
/*  7410 */ 
/*  7411 */                     var $loadgbl375 = Sk.misceval.loadname('isinstance', $gbl);
/*  7412 */                     if (d === undefined) {
/*  7413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  7414 */                     }
/*  7415 */                     var $loadgbl376 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/*  7416 */                     $ret;
/*  7417 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl375, d, $loadgbl376);
/*  7418 */                     $blk = 1; /* allowing case fallthrough */
/*  7419 */                 case 1:
/*  7420 */                     /* --- function return or resume suspension --- */
/*  7421 */                     if ($ret && $ret.$isSuspension) {
/*  7422 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 247, 15);
/*  7423 */                     }
/*  7424 */                     var $call377 = $ret;
/*  7425 */                     //
/*  7426 */                     // line 247:
/*  7427 */                     //         assert isinstance(d, DeviceTaskRec)
/*  7428 */                     //                ^
/*  7429 */                     //
/*  7430 */                     $currLineNo = 247;
/*  7431 */                     $currColNo = 15;
/*  7432 */ 
/*  7433 */                     var $jtrue378 = ($call377 === true || Sk.misceval.isTrue($call377));
/*  7434 */                     if ($jtrue378) { /*test passed */
/*  7435 */                         $blk = 2;
/*  7436 */                         continue;
/*  7437 */                     }
/*  7438 */                     throw new Sk.builtin.AssertionError();
/*  7439 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7440 */                 case 2:
/*  7441 */                     /* --- end --- */
/*  7442 */                     //
/*  7443 */                     // line 248:
/*  7444 */                     //         if pkt is None:
/*  7445 */                     //         ^
/*  7446 */                     //
/*  7447 */                     $currLineNo = 248;
/*  7448 */                     $currColNo = 8;
/*  7449 */ 
/*  7450 */                     if (pkt === undefined) {
/*  7451 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7452 */                     }
/*  7453 */                     var $compareres379 = null;
/*  7454 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/*  7455 */                     $blk = 6; /* allowing case fallthrough */
/*  7456 */                 case 6:
/*  7457 */                     /* --- function return or resume suspension --- */
/*  7458 */                     if ($ret && $ret.$isSuspension) {
/*  7459 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 248, 11);
/*  7460 */                     }
/*  7461 */                     $compareres379 = $ret;
/*  7462 */                     var $jfalse380 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7463 */                     if ($jfalse380) { /*test failed */
/*  7464 */                         $blk = 5;
/*  7465 */                         continue;
/*  7466 */                     }
/*  7467 */                     $blk = 5; /* allowing case fallthrough */
/*  7468 */                 case 5:
/*  7469 */                     /* --- done --- */
/*  7470 */                     var $jfalse381 = ($compareres379 === false || !Sk.misceval.isTrue($compareres379));
/*  7471 */                     if ($jfalse381) { /*test failed */
/*  7472 */                         $blk = 4;
/*  7473 */                         continue;
/*  7474 */                     }
/*  7475 */                     //
/*  7476 */                     // line 249:
/*  7477 */                     //             pkt = d.pending
/*  7478 */                     //             ^
/*  7479 */                     //
/*  7480 */                     $currLineNo = 249;
/*  7481 */                     $currColNo = 12;
/*  7482 */ 
/*  7483 */                     if (d === undefined) {
/*  7484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  7485 */                     }
/*  7486 */                     $ret = Sk.abstr.gattr(d, 'pending', true);
/*  7487 */                     $blk = 7; /* allowing case fallthrough */
/*  7488 */                 case 7:
/*  7489 */                     /* --- function return or resume suspension --- */
/*  7490 */                     if ($ret && $ret.$isSuspension) {
/*  7491 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 249, 18);
/*  7492 */                     }
/*  7493 */                     var $lattr382 = $ret;
/*  7494 */                     pkt = $lattr382;
/*  7495 */                     //
/*  7496 */                     // line 250:
/*  7497 */                     //             if pkt is None:
/*  7498 */                     //             ^
/*  7499 */                     //
/*  7500 */                     $currLineNo = 250;
/*  7501 */                     $currColNo = 12;
/*  7502 */ 
/*  7503 */                     if (pkt === undefined) {
/*  7504 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7505 */                     }
/*  7506 */                     var $compareres383 = null;
/*  7507 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/*  7508 */                     $blk = 11; /* allowing case fallthrough */
/*  7509 */                 case 11:
/*  7510 */                     /* --- function return or resume suspension --- */
/*  7511 */                     if ($ret && $ret.$isSuspension) {
/*  7512 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 250, 15);
/*  7513 */                     }
/*  7514 */                     $compareres383 = $ret;
/*  7515 */                     var $jfalse384 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7516 */                     if ($jfalse384) { /*test failed */
/*  7517 */                         $blk = 10;
/*  7518 */                         continue;
/*  7519 */                     }
/*  7520 */                     $blk = 10; /* allowing case fallthrough */
/*  7521 */                 case 10:
/*  7522 */                     /* --- done --- */
/*  7523 */                     var $jfalse385 = ($compareres383 === false || !Sk.misceval.isTrue($compareres383));
/*  7524 */                     if ($jfalse385) { /*test failed */
/*  7525 */                         $blk = 9;
/*  7526 */                         continue;
/*  7527 */                     }
/*  7528 */                     //
/*  7529 */                     // line 251:
/*  7530 */                     //                 return self.waitTask()
/*  7531 */                     //                 ^
/*  7532 */                     //
/*  7533 */                     $currLineNo = 251;
/*  7534 */                     $currColNo = 16;
/*  7535 */ 
/*  7536 */                     if (self === undefined) {
/*  7537 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7538 */                     }
/*  7539 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  7540 */                     $blk = 12; /* allowing case fallthrough */
/*  7541 */                 case 12:
/*  7542 */                     /* --- function return or resume suspension --- */
/*  7543 */                     if ($ret && $ret.$isSuspension) {
/*  7544 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 251, 23);
/*  7545 */                     }
/*  7546 */                     var $lattr386 = $ret;
/*  7547 */                     $ret;
/*  7548 */                     $ret = Sk.misceval.callsimOrSuspend($lattr386);
/*  7549 */                     $blk = 13; /* allowing case fallthrough */
/*  7550 */                 case 13:
/*  7551 */                     /* --- function return or resume suspension --- */
/*  7552 */                     if ($ret && $ret.$isSuspension) {
/*  7553 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 251, 23);
/*  7554 */                     }
/*  7555 */                     var $call387 = $ret;
/*  7556 */                     //
/*  7557 */                     // line 251:
/*  7558 */                     //                 return self.waitTask()
/*  7559 */                     //                        ^
/*  7560 */                     //
/*  7561 */                     $currLineNo = 251;
/*  7562 */                     $currColNo = 23;
/*  7563 */ 
/*  7564 */                     return $call387;
/*  7565 */                     $blk = 8; /* allowing case fallthrough */
/*  7566 */                 case 8:
/*  7567 */                     /* --- end of if --- */
/*  7568 */                     $blk = 3; /* allowing case fallthrough */
/*  7569 */                 case 3:
/*  7570 */                     /* --- end of if --- */
/*  7571 */                     return Sk.builtin.none.none$;
/*  7572 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7573 */                 case 4:
/*  7574 */                     /* --- next branch of if --- */
/*  7575 */                     //
/*  7576 */                     // line 256:
/*  7577 */                     //             d.pending = pkt
/*  7578 */                     //             ^
/*  7579 */                     //
/*  7580 */                     $currLineNo = 256;
/*  7581 */                     $currColNo = 12;
/*  7582 */ 
/*  7583 */                     if (pkt === undefined) {
/*  7584 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7585 */                     }
/*  7586 */                     if (d === undefined) {
/*  7587 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  7588 */                     }
/*  7589 */                     $ret = Sk.abstr.sattr(d, 'pending', pkt, true);
/*  7590 */                     $blk = 17; /* allowing case fallthrough */
/*  7591 */                 case 17:
/*  7592 */                     /* --- function return or resume suspension --- */
/*  7593 */                     if ($ret && $ret.$isSuspension) {
/*  7594 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 256, 12);
/*  7595 */                     }
/*  7596 */                     //
/*  7597 */                     // line 257:
/*  7598 */                     //             if tracing: trace(pkt.datum)
/*  7599 */                     //             ^
/*  7600 */                     //
/*  7601 */                     $currLineNo = 257;
/*  7602 */                     $currColNo = 12;
/*  7603 */ 
/*  7604 */                     var $loadgbl390 = Sk.misceval.loadname('tracing', $gbl);
/*  7605 */                     var $jfalse391 = ($loadgbl390 === false || !Sk.misceval.isTrue($loadgbl390));
/*  7606 */                     if ($jfalse391) { /*test failed */
/*  7607 */                         $blk = 18;
/*  7608 */                         continue;
/*  7609 */                     }
/*  7610 */                     //
/*  7611 */                     // line 257:
/*  7612 */                     //             if tracing: trace(pkt.datum)
/*  7613 */                     //                         ^
/*  7614 */                     //
/*  7615 */                     $currLineNo = 257;
/*  7616 */                     $currColNo = 24;
/*  7617 */ 
/*  7618 */                     var $loadgbl392 = Sk.misceval.loadname('trace', $gbl);
/*  7619 */                     if (pkt === undefined) {
/*  7620 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7621 */                     }
/*  7622 */                     $ret = Sk.abstr.gattr(pkt, 'datum', true);
/*  7623 */                     $blk = 19; /* allowing case fallthrough */
/*  7624 */                 case 19:
/*  7625 */                     /* --- function return or resume suspension --- */
/*  7626 */                     if ($ret && $ret.$isSuspension) {
/*  7627 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 257, 30);
/*  7628 */                     }
/*  7629 */                     var $lattr393 = $ret;
/*  7630 */                     $ret;
/*  7631 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl392, $lattr393);
/*  7632 */                     $blk = 20; /* allowing case fallthrough */
/*  7633 */                 case 20:
/*  7634 */                     /* --- function return or resume suspension --- */
/*  7635 */                     if ($ret && $ret.$isSuspension) {
/*  7636 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 257, 24);
/*  7637 */                     }
/*  7638 */                     var $call394 = $ret;
/*  7639 */                     //
/*  7640 */                     // line 257:
/*  7641 */                     //             if tracing: trace(pkt.datum)
/*  7642 */                     //                         ^
/*  7643 */                     //
/*  7644 */                     $currLineNo = 257;
/*  7645 */                     $currColNo = 24;
/*  7646 */ 
/*  7647 */                     $blk = 18; /* allowing case fallthrough */
/*  7648 */                 case 18:
/*  7649 */                     /* --- end of if --- */
/*  7650 */                     //
/*  7651 */                     // line 258:
/*  7652 */                     //             return self.hold()
/*  7653 */                     //             ^
/*  7654 */                     //
/*  7655 */                     $currLineNo = 258;
/*  7656 */                     $currColNo = 12;
/*  7657 */ 
/*  7658 */                     if (self === undefined) {
/*  7659 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7660 */                     }
/*  7661 */                     $ret = Sk.abstr.gattr(self, 'hold', true);
/*  7662 */                     $blk = 21; /* allowing case fallthrough */
/*  7663 */                 case 21:
/*  7664 */                     /* --- function return or resume suspension --- */
/*  7665 */                     if ($ret && $ret.$isSuspension) {
/*  7666 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 258, 19);
/*  7667 */                     }
/*  7668 */                     var $lattr395 = $ret;
/*  7669 */                     $ret;
/*  7670 */                     $ret = Sk.misceval.callsimOrSuspend($lattr395);
/*  7671 */                     $blk = 22; /* allowing case fallthrough */
/*  7672 */                 case 22:
/*  7673 */                     /* --- function return or resume suspension --- */
/*  7674 */                     if ($ret && $ret.$isSuspension) {
/*  7675 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 258, 19);
/*  7676 */                     }
/*  7677 */                     var $call396 = $ret;
/*  7678 */                     //
/*  7679 */                     // line 258:
/*  7680 */                     //             return self.hold()
/*  7681 */                     //                    ^
/*  7682 */                     //
/*  7683 */                     $currLineNo = 258;
/*  7684 */                     $currColNo = 19;
/*  7685 */ 
/*  7686 */                     return $call396;
/*  7687 */                     $blk = 3; /* jump */
/*  7688 */                     continue;
/*  7689 */                 case 9:
/*  7690 */                     /* --- next branch of if --- */
/*  7691 */                     //
/*  7692 */                     // line 253:
/*  7693 */                     //                 d.pending = None
/*  7694 */                     //                 ^
/*  7695 */                     //
/*  7696 */                     $currLineNo = 253;
/*  7697 */                     $currColNo = 16;
/*  7698 */ 
/*  7699 */                     if (d === undefined) {
/*  7700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'d\' referenced before assignment');
/*  7701 */                     }
/*  7702 */                     $ret = Sk.abstr.sattr(d, 'pending', Sk.builtin.none.none$, true);
/*  7703 */                     $blk = 14; /* allowing case fallthrough */
/*  7704 */                 case 14:
/*  7705 */                     /* --- function return or resume suspension --- */
/*  7706 */                     if ($ret && $ret.$isSuspension) {
/*  7707 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 253, 16);
/*  7708 */                     }
/*  7709 */                     //
/*  7710 */                     // line 254:
/*  7711 */                     //                 return self.qpkt(pkt)
/*  7712 */                     //                 ^
/*  7713 */                     //
/*  7714 */                     $currLineNo = 254;
/*  7715 */                     $currColNo = 16;
/*  7716 */ 
/*  7717 */                     if (self === undefined) {
/*  7718 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7719 */                     }
/*  7720 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  7721 */                     $blk = 15; /* allowing case fallthrough */
/*  7722 */                 case 15:
/*  7723 */                     /* --- function return or resume suspension --- */
/*  7724 */                     if ($ret && $ret.$isSuspension) {
/*  7725 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 254, 23);
/*  7726 */                     }
/*  7727 */                     var $lattr388 = $ret;
/*  7728 */                     if (pkt === undefined) {
/*  7729 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  7730 */                     }
/*  7731 */                     $ret;
/*  7732 */                     $ret = Sk.misceval.callsimOrSuspend($lattr388, pkt);
/*  7733 */                     $blk = 16; /* allowing case fallthrough */
/*  7734 */                 case 16:
/*  7735 */                     /* --- function return or resume suspension --- */
/*  7736 */                     if ($ret && $ret.$isSuspension) {
/*  7737 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 254, 23);
/*  7738 */                     }
/*  7739 */                     var $call389 = $ret;
/*  7740 */                     //
/*  7741 */                     // line 254:
/*  7742 */                     //                 return self.qpkt(pkt)
/*  7743 */                     //                        ^
/*  7744 */                     //
/*  7745 */                     $currLineNo = 254;
/*  7746 */                     $currColNo = 23;
/*  7747 */ 
/*  7748 */                     return $call389;
/*  7749 */                     $blk = 8; /* jump */
/*  7750 */                     continue;
/*  7751 */                 }
/*  7752 */             } catch (err) {
/*  7753 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7754 */                     err = new Sk.builtin.ExternalError(err);
/*  7755 */                 }
/*  7756 */                 err.traceback.push({
/*  7757 */                     lineno: $currLineNo,
/*  7758 */                     colno: $currColNo,
/*  7759 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7760 */                 });
/*  7761 */                 if ($exc.length > 0) {
/*  7762 */                     $err = err;
/*  7763 */                     $blk = $exc.pop();
/*  7764 */                     continue;
/*  7765 */                 } else {
/*  7766 */                     throw err;
/*  7767 */                 }
/*  7768 */             }
/*  7769 */         }
/*  7770 */     });
/*  7771 */     var $scope400 = (function $HandlerTask$class_outer($globals, $locals, $rest) {
/*  7772 */         var $gbl = $globals,
/*  7773 */             $loc = $locals;
/*  7774 */         (function $HandlerTask$_closure() {
/*  7775 */             var $blk = 0,
/*  7776 */                 $exc = [],
/*  7777 */                 $ret = undefined,
/*  7778 */                 $postfinally = undefined,
/*  7779 */                 $currLineNo = undefined,
/*  7780 */                 $currColNo = undefined;
/*  7781 */             while (true) {
/*  7782 */                 try {
/*  7783 */                     switch ($blk) {
/*  7784 */                     case 0:
/*  7785 */                         /* --- class entry --- */
/*  7786 */                         //
/*  7787 */                         // line 263:
/*  7788 */                         //     def __init__(self,i,p,w,s,r):
/*  7789 */                         //     ^
/*  7790 */                         //
/*  7791 */                         $currLineNo = 263;
/*  7792 */                         $currColNo = 4;
/*  7793 */ 
/*  7794 */                         $scope401.co_name = new Sk.builtins['str']('__init__');
/*  7795 */                         $scope401.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  7796 */                         var $funcobj406 = new Sk.builtins['function']($scope401, $gbl);
/*  7797 */                         $loc.__init__ = $funcobj406;
/*  7798 */                         //
/*  7799 */                         // line 266:
/*  7800 */                         //     def fn(self,pkt,r):
/*  7801 */                         //     ^
/*  7802 */                         //
/*  7803 */                         $currLineNo = 266;
/*  7804 */                         $currColNo = 4;
/*  7805 */ 
/*  7806 */                         $scope407.co_name = new Sk.builtins['str']('fn');
/*  7807 */                         $scope407.co_varnames = ['self', 'pkt', 'r'];
/*  7808 */                         var $funcobj451 = new Sk.builtins['function']($scope407, $gbl);
/*  7809 */                         $loc.fn = $funcobj451;
/*  7810 */                         return;
/*  7811 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7812 */                     }
/*  7813 */                 } catch (err) {
/*  7814 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  7815 */                         err = new Sk.builtin.ExternalError(err);
/*  7816 */                     }
/*  7817 */                     err.traceback.push({
/*  7818 */                         lineno: $currLineNo,
/*  7819 */                         colno: $currColNo,
/*  7820 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7821 */                     });
/*  7822 */                     if ($exc.length > 0) {
/*  7823 */                         $err = err;
/*  7824 */                         $blk = $exc.pop();
/*  7825 */                         continue;
/*  7826 */                     } else {
/*  7827 */                         throw err;
/*  7828 */                     }
/*  7829 */                 }
/*  7830 */             }
/*  7831 */         }).apply(null, $rest);
/*  7832 */     });
/*  7833 */     var $scope401 = (function $__init__402$(self, i, p, w, s, r) {
/*  7834 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl403, $loadgbl403, $lattr404;
/*  7835 */         var $wakeFromSuspension = function() {
/*  7836 */             var susp = $scope401.$wakingSuspension;
/*  7837 */             delete $scope401.$wakingSuspension;
/*  7838 */             $blk = susp.$blk;
/*  7839 */             $loc = susp.$loc;
/*  7840 */             $gbl = susp.$gbl;
/*  7841 */             $exc = susp.$exc;
/*  7842 */             $err = susp.$err;
/*  7843 */             $postfinally = susp.$postfinally;
/*  7844 */             $currLineNo = susp.$lineno;
/*  7845 */             $currColNo = susp.$colno;
/*  7846 */             Sk.lastYield = Date.now();
/*  7847 */             i = susp.$tmps.i;
/*  7848 */             p = susp.$tmps.p;
/*  7849 */             r = susp.$tmps.r;
/*  7850 */             s = susp.$tmps.s;
/*  7851 */             self = susp.$tmps.self;
/*  7852 */             w = susp.$tmps.w;
/*  7853 */             $loadgbl403 = susp.$tmps.$loadgbl403;
/*  7854 */             $lattr404 = susp.$tmps.$lattr404;
/*  7855 */             try {
/*  7856 */                 $ret = susp.child.resume();
/*  7857 */             } catch (err) {
/*  7858 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7859 */                     err = new Sk.builtin.ExternalError(err);
/*  7860 */                 }
/*  7861 */                 err.traceback.push({
/*  7862 */                     lineno: $currLineNo,
/*  7863 */                     colno: $currColNo,
/*  7864 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  7865 */                 });
/*  7866 */                 if ($exc.length > 0) {
/*  7867 */                     $err = err;
/*  7868 */                     $blk = $exc.pop();
/*  7869 */                 } else {
/*  7870 */                     throw err;
/*  7871 */                 }
/*  7872 */             }
/*  7873 */         };
/*  7874 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7875 */             var susp = new Sk.misceval.Suspension();
/*  7876 */             susp.child = $child;
/*  7877 */             susp.resume = function() {
/*  7878 */                 $scope401.$wakingSuspension = susp;
/*  7879 */                 return $scope401();
/*  7880 */             };
/*  7881 */             susp.data = susp.child.data;
/*  7882 */             susp.$blk = $blk;
/*  7883 */             susp.$loc = $loc;
/*  7884 */             susp.$gbl = $gbl;
/*  7885 */             susp.$exc = $exc;
/*  7886 */             susp.$err = $err;
/*  7887 */             susp.$postfinally = $postfinally;
/*  7888 */             susp.$filename = $filename;
/*  7889 */             susp.$lineno = $lineno;
/*  7890 */             susp.$colno = $colno;
/*  7891 */             susp.optional = susp.child.optional;
/*  7892 */             susp.$tmps = {
/*  7893 */                 "i": i,
/*  7894 */                 "p": p,
/*  7895 */                 "r": r,
/*  7896 */                 "s": s,
/*  7897 */                 "self": self,
/*  7898 */                 "w": w,
/*  7899 */                 "$loadgbl403": $loadgbl403,
/*  7900 */                 "$lattr404": $lattr404
/*  7901 */             };
/*  7902 */             return susp;
/*  7903 */         };
/*  7904 */         var $blk = 0,
/*  7905 */             $exc = [],
/*  7906 */             $loc = {},
/*  7907 */             $gbl = this,
/*  7908 */             $err = undefined,
/*  7909 */             $ret = undefined,
/*  7910 */             $postfinally = undefined,
/*  7911 */             $currLineNo = undefined,
/*  7912 */             $currColNo = undefined;
/*  7913 */         if ($scope401.$wakingSuspension !== undefined) {
/*  7914 */             $wakeFromSuspension();
/*  7915 */         } else {
/*  7916 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  7917 */         }
/*  7918 */         while (true) {
/*  7919 */             try {
/*  7920 */                 switch ($blk) {
/*  7921 */                 case 0:
/*  7922 */                     /* --- codeobj entry --- */
/*  7923 */                     if (self === undefined) {
/*  7924 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7925 */                     }
/*  7926 */                     if (i === undefined) {
/*  7927 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7928 */                     }
/*  7929 */                     if (p === undefined) {
/*  7930 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7931 */                     }
/*  7932 */                     if (w === undefined) {
/*  7933 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  7934 */                     }
/*  7935 */                     if (s === undefined) {
/*  7936 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  7937 */                     }
/*  7938 */                     if (r === undefined) {
/*  7939 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7940 */                     }
/*  7941 */ 
/*  7942 */                     //
/*  7943 */                     // line 264:
/*  7944 */                     //         Task.__init__(self,i,p,w,s,r)
/*  7945 */                     //         ^
/*  7946 */                     //
/*  7947 */                     $currLineNo = 264;
/*  7948 */                     $currColNo = 8;
/*  7949 */ 
/*  7950 */                     var $loadgbl403 = Sk.misceval.loadname('Task', $gbl);
/*  7951 */                     $ret = Sk.abstr.gattr($loadgbl403, '__init__', true);
/*  7952 */                     $blk = 1; /* allowing case fallthrough */
/*  7953 */                 case 1:
/*  7954 */                     /* --- function return or resume suspension --- */
/*  7955 */                     if ($ret && $ret.$isSuspension) {
/*  7956 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 264, 8);
/*  7957 */                     }
/*  7958 */                     var $lattr404 = $ret;
/*  7959 */                     if (self === undefined) {
/*  7960 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7961 */                     }
/*  7962 */                     if (i === undefined) {
/*  7963 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  7964 */                     }
/*  7965 */                     if (p === undefined) {
/*  7966 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  7967 */                     }
/*  7968 */                     if (w === undefined) {
/*  7969 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  7970 */                     }
/*  7971 */                     if (s === undefined) {
/*  7972 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  7973 */                     }
/*  7974 */                     if (r === undefined) {
/*  7975 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  7976 */                     }
/*  7977 */                     $ret;
/*  7978 */                     $ret = Sk.misceval.callsimOrSuspend($lattr404, self, i, p, w, s, r);
/*  7979 */                     $blk = 2; /* allowing case fallthrough */
/*  7980 */                 case 2:
/*  7981 */                     /* --- function return or resume suspension --- */
/*  7982 */                     if ($ret && $ret.$isSuspension) {
/*  7983 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 264, 8);
/*  7984 */                     }
/*  7985 */                     var $call405 = $ret;
/*  7986 */                     //
/*  7987 */                     // line 264:
/*  7988 */                     //         Task.__init__(self,i,p,w,s,r)
/*  7989 */                     //         ^
/*  7990 */                     //
/*  7991 */                     $currLineNo = 264;
/*  7992 */                     $currColNo = 8;
/*  7993 */ 
/*  7994 */                     return Sk.builtin.none.none$;
/*  7995 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7996 */                 }
/*  7997 */             } catch (err) {
/*  7998 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7999 */                     err = new Sk.builtin.ExternalError(err);
/*  8000 */                 }
/*  8001 */                 err.traceback.push({
/*  8002 */                     lineno: $currLineNo,
/*  8003 */                     colno: $currColNo,
/*  8004 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8005 */                 });
/*  8006 */                 if ($exc.length > 0) {
/*  8007 */                     $err = err;
/*  8008 */                     $blk = $exc.pop();
/*  8009 */                     continue;
/*  8010 */                 } else {
/*  8011 */                     throw err;
/*  8012 */                 }
/*  8013 */             }
/*  8014 */         }
/*  8015 */     });
/*  8016 */     var $scope407 = (function $fn408$(self, pkt, r) {
/*  8017 */         var count, dev, h, work; /* locals */
/*  8018 */         var count, count, count, count, dev, dev, dev, dev, dev, h, h, h, h, h, h, h, h, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, self, self, work, work, work, work, work, work, work, $loadgbl409, $loadgbl410, $compareres413, $lattr416, $compareres417, $loadgbl418, $lattr421, $lattr423, $compareres426, $lattr429, $compareres432, $loadgbl433, $lattr436, $lattr437, $compareres440, $lattr443, $lattr445, $lattr446, $lattr446, $lsubscr447, $binop448, $lattr449;
/*  8019 */         var $wakeFromSuspension = function() {
/*  8020 */             var susp = $scope407.$wakingSuspension;
/*  8021 */             delete $scope407.$wakingSuspension;
/*  8022 */             $blk = susp.$blk;
/*  8023 */             $loc = susp.$loc;
/*  8024 */             $gbl = susp.$gbl;
/*  8025 */             $exc = susp.$exc;
/*  8026 */             $err = susp.$err;
/*  8027 */             $postfinally = susp.$postfinally;
/*  8028 */             $currLineNo = susp.$lineno;
/*  8029 */             $currColNo = susp.$colno;
/*  8030 */             Sk.lastYield = Date.now();
/*  8031 */             count = susp.$tmps.count;
/*  8032 */             dev = susp.$tmps.dev;
/*  8033 */             h = susp.$tmps.h;
/*  8034 */             pkt = susp.$tmps.pkt;
/*  8035 */             r = susp.$tmps.r;
/*  8036 */             self = susp.$tmps.self;
/*  8037 */             work = susp.$tmps.work;
/*  8038 */             $loadgbl409 = susp.$tmps.$loadgbl409;
/*  8039 */             $loadgbl410 = susp.$tmps.$loadgbl410;
/*  8040 */             $compareres413 = susp.$tmps.$compareres413;
/*  8041 */             $lattr416 = susp.$tmps.$lattr416;
/*  8042 */             $compareres417 = susp.$tmps.$compareres417;
/*  8043 */             $loadgbl418 = susp.$tmps.$loadgbl418;
/*  8044 */             $lattr421 = susp.$tmps.$lattr421;
/*  8045 */             $lattr423 = susp.$tmps.$lattr423;
/*  8046 */             $compareres426 = susp.$tmps.$compareres426;
/*  8047 */             $lattr429 = susp.$tmps.$lattr429;
/*  8048 */             $compareres432 = susp.$tmps.$compareres432;
/*  8049 */             $loadgbl433 = susp.$tmps.$loadgbl433;
/*  8050 */             $lattr436 = susp.$tmps.$lattr436;
/*  8051 */             $lattr437 = susp.$tmps.$lattr437;
/*  8052 */             $compareres440 = susp.$tmps.$compareres440;
/*  8053 */             $lattr443 = susp.$tmps.$lattr443;
/*  8054 */             $lattr445 = susp.$tmps.$lattr445;
/*  8055 */             $lattr446 = susp.$tmps.$lattr446;
/*  8056 */             $lsubscr447 = susp.$tmps.$lsubscr447;
/*  8057 */             $binop448 = susp.$tmps.$binop448;
/*  8058 */             $lattr449 = susp.$tmps.$lattr449;
/*  8059 */             try {
/*  8060 */                 $ret = susp.child.resume();
/*  8061 */             } catch (err) {
/*  8062 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8063 */                     err = new Sk.builtin.ExternalError(err);
/*  8064 */                 }
/*  8065 */                 err.traceback.push({
/*  8066 */                     lineno: $currLineNo,
/*  8067 */                     colno: $currColNo,
/*  8068 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8069 */                 });
/*  8070 */                 if ($exc.length > 0) {
/*  8071 */                     $err = err;
/*  8072 */                     $blk = $exc.pop();
/*  8073 */                 } else {
/*  8074 */                     throw err;
/*  8075 */                 }
/*  8076 */             }
/*  8077 */         };
/*  8078 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8079 */             var susp = new Sk.misceval.Suspension();
/*  8080 */             susp.child = $child;
/*  8081 */             susp.resume = function() {
/*  8082 */                 $scope407.$wakingSuspension = susp;
/*  8083 */                 return $scope407();
/*  8084 */             };
/*  8085 */             susp.data = susp.child.data;
/*  8086 */             susp.$blk = $blk;
/*  8087 */             susp.$loc = $loc;
/*  8088 */             susp.$gbl = $gbl;
/*  8089 */             susp.$exc = $exc;
/*  8090 */             susp.$err = $err;
/*  8091 */             susp.$postfinally = $postfinally;
/*  8092 */             susp.$filename = $filename;
/*  8093 */             susp.$lineno = $lineno;
/*  8094 */             susp.$colno = $colno;
/*  8095 */             susp.optional = susp.child.optional;
/*  8096 */             susp.$tmps = {
/*  8097 */                 "count": count,
/*  8098 */                 "dev": dev,
/*  8099 */                 "h": h,
/*  8100 */                 "pkt": pkt,
/*  8101 */                 "r": r,
/*  8102 */                 "self": self,
/*  8103 */                 "work": work,
/*  8104 */                 "$loadgbl409": $loadgbl409,
/*  8105 */                 "$loadgbl410": $loadgbl410,
/*  8106 */                 "$compareres413": $compareres413,
/*  8107 */                 "$lattr416": $lattr416,
/*  8108 */                 "$compareres417": $compareres417,
/*  8109 */                 "$loadgbl418": $loadgbl418,
/*  8110 */                 "$lattr421": $lattr421,
/*  8111 */                 "$lattr423": $lattr423,
/*  8112 */                 "$compareres426": $compareres426,
/*  8113 */                 "$lattr429": $lattr429,
/*  8114 */                 "$compareres432": $compareres432,
/*  8115 */                 "$loadgbl433": $loadgbl433,
/*  8116 */                 "$lattr436": $lattr436,
/*  8117 */                 "$lattr437": $lattr437,
/*  8118 */                 "$compareres440": $compareres440,
/*  8119 */                 "$lattr443": $lattr443,
/*  8120 */                 "$lattr445": $lattr445,
/*  8121 */                 "$lattr446": $lattr446,
/*  8122 */                 "$lsubscr447": $lsubscr447,
/*  8123 */                 "$binop448": $binop448,
/*  8124 */                 "$lattr449": $lattr449
/*  8125 */             };
/*  8126 */             return susp;
/*  8127 */         };
/*  8128 */         var $blk = 0,
/*  8129 */             $exc = [],
/*  8130 */             $loc = {},
/*  8131 */             $gbl = this,
/*  8132 */             $err = undefined,
/*  8133 */             $ret = undefined,
/*  8134 */             $postfinally = undefined,
/*  8135 */             $currLineNo = undefined,
/*  8136 */             $currColNo = undefined;
/*  8137 */         if ($scope407.$wakingSuspension !== undefined) {
/*  8138 */             $wakeFromSuspension();
/*  8139 */         } else {
/*  8140 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  8141 */         }
/*  8142 */         while (true) {
/*  8143 */             try {
/*  8144 */                 switch ($blk) {
/*  8145 */                 case 0:
/*  8146 */                     /* --- codeobj entry --- */
/*  8147 */                     if (self === undefined) {
/*  8148 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8149 */                     }
/*  8150 */                     if (pkt === undefined) {
/*  8151 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8152 */                     }
/*  8153 */                     if (r === undefined) {
/*  8154 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8155 */                     }
/*  8156 */ 
/*  8157 */                     //
/*  8158 */                     // line 267:
/*  8159 */                     //         h = r
/*  8160 */                     //         ^
/*  8161 */                     //
/*  8162 */                     $currLineNo = 267;
/*  8163 */                     $currColNo = 8;
/*  8164 */ 
/*  8165 */                     if (r === undefined) {
/*  8166 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  8167 */                     }
/*  8168 */                     h = r;
/*  8169 */                     //
/*  8170 */                     // line 268:
/*  8171 */                     //         assert isinstance(h, HandlerTaskRec)
/*  8172 */                     //         ^
/*  8173 */                     //
/*  8174 */                     $currLineNo = 268;
/*  8175 */                     $currColNo = 8;
/*  8176 */ 
/*  8177 */                     var $loadgbl409 = Sk.misceval.loadname('isinstance', $gbl);
/*  8178 */                     if (h === undefined) {
/*  8179 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8180 */                     }
/*  8181 */                     var $loadgbl410 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/*  8182 */                     $ret;
/*  8183 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl409, h, $loadgbl410);
/*  8184 */                     $blk = 1; /* allowing case fallthrough */
/*  8185 */                 case 1:
/*  8186 */                     /* --- function return or resume suspension --- */
/*  8187 */                     if ($ret && $ret.$isSuspension) {
/*  8188 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 268, 15);
/*  8189 */                     }
/*  8190 */                     var $call411 = $ret;
/*  8191 */                     //
/*  8192 */                     // line 268:
/*  8193 */                     //         assert isinstance(h, HandlerTaskRec)
/*  8194 */                     //                ^
/*  8195 */                     //
/*  8196 */                     $currLineNo = 268;
/*  8197 */                     $currColNo = 15;
/*  8198 */ 
/*  8199 */                     var $jtrue412 = ($call411 === true || Sk.misceval.isTrue($call411));
/*  8200 */                     if ($jtrue412) { /*test passed */
/*  8201 */                         $blk = 2;
/*  8202 */                         continue;
/*  8203 */                     }
/*  8204 */                     throw new Sk.builtin.AssertionError();
/*  8205 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8206 */                 case 2:
/*  8207 */                     /* --- end --- */
/*  8208 */                     //
/*  8209 */                     // line 269:
/*  8210 */                     //         if pkt is not None:
/*  8211 */                     //         ^
/*  8212 */                     //
/*  8213 */                     $currLineNo = 269;
/*  8214 */                     $currColNo = 8;
/*  8215 */ 
/*  8216 */                     if (pkt === undefined) {
/*  8217 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8218 */                     }
/*  8219 */                     var $compareres413 = null;
/*  8220 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'IsNot', true));
/*  8221 */                     $blk = 5; /* allowing case fallthrough */
/*  8222 */                 case 5:
/*  8223 */                     /* --- function return or resume suspension --- */
/*  8224 */                     if ($ret && $ret.$isSuspension) {
/*  8225 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 269, 11);
/*  8226 */                     }
/*  8227 */                     $compareres413 = $ret;
/*  8228 */                     var $jfalse414 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8229 */                     if ($jfalse414) { /*test failed */
/*  8230 */                         $blk = 4;
/*  8231 */                         continue;
/*  8232 */                     }
/*  8233 */                     $blk = 4; /* allowing case fallthrough */
/*  8234 */                 case 4:
/*  8235 */                     /* --- done --- */
/*  8236 */                     var $jfalse415 = ($compareres413 === false || !Sk.misceval.isTrue($compareres413));
/*  8237 */                     if ($jfalse415) { /*test failed */
/*  8238 */                         $blk = 3;
/*  8239 */                         continue;
/*  8240 */                     }
/*  8241 */                     //
/*  8242 */                     // line 270:
/*  8243 */                     //             if pkt.kind == K_WORK:
/*  8244 */                     //             ^
/*  8245 */                     //
/*  8246 */                     $currLineNo = 270;
/*  8247 */                     $currColNo = 12;
/*  8248 */ 
/*  8249 */                     if (pkt === undefined) {
/*  8250 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8251 */                     }
/*  8252 */                     $ret = Sk.abstr.gattr(pkt, 'kind', true);
/*  8253 */                     $blk = 8; /* allowing case fallthrough */
/*  8254 */                 case 8:
/*  8255 */                     /* --- function return or resume suspension --- */
/*  8256 */                     if ($ret && $ret.$isSuspension) {
/*  8257 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 270, 15);
/*  8258 */                     }
/*  8259 */                     var $lattr416 = $ret;
/*  8260 */                     var $compareres417 = null;
/*  8261 */                     var $loadgbl418 = Sk.misceval.loadname('K_WORK', $gbl);
/*  8262 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr416, $loadgbl418, 'Eq', true));
/*  8263 */                     $blk = 10; /* allowing case fallthrough */
/*  8264 */                 case 10:
/*  8265 */                     /* --- function return or resume suspension --- */
/*  8266 */                     if ($ret && $ret.$isSuspension) {
/*  8267 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 270, 15);
/*  8268 */                     }
/*  8269 */                     $compareres417 = $ret;
/*  8270 */                     var $jfalse419 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8271 */                     if ($jfalse419) { /*test failed */
/*  8272 */                         $blk = 9;
/*  8273 */                         continue;
/*  8274 */                     }
/*  8275 */                     $blk = 9; /* allowing case fallthrough */
/*  8276 */                 case 9:
/*  8277 */                     /* --- done --- */
/*  8278 */                     var $jfalse420 = ($compareres417 === false || !Sk.misceval.isTrue($compareres417));
/*  8279 */                     if ($jfalse420) { /*test failed */
/*  8280 */                         $blk = 7;
/*  8281 */                         continue;
/*  8282 */                     }
/*  8283 */                     //
/*  8284 */                     // line 271:
/*  8285 */                     //                 h.workInAdd(pkt)
/*  8286 */                     //                 ^
/*  8287 */                     //
/*  8288 */                     $currLineNo = 271;
/*  8289 */                     $currColNo = 16;
/*  8290 */ 
/*  8291 */                     if (h === undefined) {
/*  8292 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8293 */                     }
/*  8294 */                     $ret = Sk.abstr.gattr(h, 'workInAdd', true);
/*  8295 */                     $blk = 11; /* allowing case fallthrough */
/*  8296 */                 case 11:
/*  8297 */                     /* --- function return or resume suspension --- */
/*  8298 */                     if ($ret && $ret.$isSuspension) {
/*  8299 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 271, 16);
/*  8300 */                     }
/*  8301 */                     var $lattr421 = $ret;
/*  8302 */                     if (pkt === undefined) {
/*  8303 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8304 */                     }
/*  8305 */                     $ret;
/*  8306 */                     $ret = Sk.misceval.callsimOrSuspend($lattr421, pkt);
/*  8307 */                     $blk = 12; /* allowing case fallthrough */
/*  8308 */                 case 12:
/*  8309 */                     /* --- function return or resume suspension --- */
/*  8310 */                     if ($ret && $ret.$isSuspension) {
/*  8311 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 271, 16);
/*  8312 */                     }
/*  8313 */                     var $call422 = $ret;
/*  8314 */                     //
/*  8315 */                     // line 271:
/*  8316 */                     //                 h.workInAdd(pkt)
/*  8317 */                     //                 ^
/*  8318 */                     //
/*  8319 */                     $currLineNo = 271;
/*  8320 */                     $currColNo = 16;
/*  8321 */ 
/*  8322 */                     $blk = 6; /* allowing case fallthrough */
/*  8323 */                 case 6:
/*  8324 */                     /* --- end of if --- */
/*  8325 */                     $blk = 3; /* allowing case fallthrough */
/*  8326 */                 case 3:
/*  8327 */                     /* --- end of if --- */
/*  8328 */                     //
/*  8329 */                     // line 274:
/*  8330 */                     //         work = h.work_in
/*  8331 */                     //         ^
/*  8332 */                     //
/*  8333 */                     $currLineNo = 274;
/*  8334 */                     $currColNo = 8;
/*  8335 */ 
/*  8336 */                     if (h === undefined) {
/*  8337 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8338 */                     }
/*  8339 */                     $ret = Sk.abstr.gattr(h, 'work_in', true);
/*  8340 */                     $blk = 15; /* allowing case fallthrough */
/*  8341 */                 case 15:
/*  8342 */                     /* --- function return or resume suspension --- */
/*  8343 */                     if ($ret && $ret.$isSuspension) {
/*  8344 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 274, 15);
/*  8345 */                     }
/*  8346 */                     var $lattr425 = $ret;
/*  8347 */                     work = $lattr425;
/*  8348 */                     //
/*  8349 */                     // line 275:
/*  8350 */                     //         if work is None:
/*  8351 */                     //         ^
/*  8352 */                     //
/*  8353 */                     $currLineNo = 275;
/*  8354 */                     $currColNo = 8;
/*  8355 */ 
/*  8356 */                     if (work === undefined) {
/*  8357 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8358 */                     }
/*  8359 */                     var $compareres426 = null;
/*  8360 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(work, Sk.builtin.none.none$, 'Is', true));
/*  8361 */                     $blk = 18; /* allowing case fallthrough */
/*  8362 */                 case 18:
/*  8363 */                     /* --- function return or resume suspension --- */
/*  8364 */                     if ($ret && $ret.$isSuspension) {
/*  8365 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 275, 11);
/*  8366 */                     }
/*  8367 */                     $compareres426 = $ret;
/*  8368 */                     var $jfalse427 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8369 */                     if ($jfalse427) { /*test failed */
/*  8370 */                         $blk = 17;
/*  8371 */                         continue;
/*  8372 */                     }
/*  8373 */                     $blk = 17; /* allowing case fallthrough */
/*  8374 */                 case 17:
/*  8375 */                     /* --- done --- */
/*  8376 */                     var $jfalse428 = ($compareres426 === false || !Sk.misceval.isTrue($compareres426));
/*  8377 */                     if ($jfalse428) { /*test failed */
/*  8378 */                         $blk = 16;
/*  8379 */                         continue;
/*  8380 */                     }
/*  8381 */                     //
/*  8382 */                     // line 276:
/*  8383 */                     //             return self.waitTask()
/*  8384 */                     //             ^
/*  8385 */                     //
/*  8386 */                     $currLineNo = 276;
/*  8387 */                     $currColNo = 12;
/*  8388 */ 
/*  8389 */                     if (self === undefined) {
/*  8390 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8391 */                     }
/*  8392 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  8393 */                     $blk = 19; /* allowing case fallthrough */
/*  8394 */                 case 19:
/*  8395 */                     /* --- function return or resume suspension --- */
/*  8396 */                     if ($ret && $ret.$isSuspension) {
/*  8397 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 276, 19);
/*  8398 */                     }
/*  8399 */                     var $lattr429 = $ret;
/*  8400 */                     $ret;
/*  8401 */                     $ret = Sk.misceval.callsimOrSuspend($lattr429);
/*  8402 */                     $blk = 20; /* allowing case fallthrough */
/*  8403 */                 case 20:
/*  8404 */                     /* --- function return or resume suspension --- */
/*  8405 */                     if ($ret && $ret.$isSuspension) {
/*  8406 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 276, 19);
/*  8407 */                     }
/*  8408 */                     var $call430 = $ret;
/*  8409 */                     //
/*  8410 */                     // line 276:
/*  8411 */                     //             return self.waitTask()
/*  8412 */                     //                    ^
/*  8413 */                     //
/*  8414 */                     $currLineNo = 276;
/*  8415 */                     $currColNo = 19;
/*  8416 */ 
/*  8417 */                     return $call430;
/*  8418 */                     $blk = 16; /* allowing case fallthrough */
/*  8419 */                 case 16:
/*  8420 */                     /* --- end of if --- */
/*  8421 */                     //
/*  8422 */                     // line 277:
/*  8423 */                     //         count = work.datum
/*  8424 */                     //         ^
/*  8425 */                     //
/*  8426 */                     $currLineNo = 277;
/*  8427 */                     $currColNo = 8;
/*  8428 */ 
/*  8429 */                     if (work === undefined) {
/*  8430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8431 */                     }
/*  8432 */                     $ret = Sk.abstr.gattr(work, 'datum', true);
/*  8433 */                     $blk = 21; /* allowing case fallthrough */
/*  8434 */                 case 21:
/*  8435 */                     /* --- function return or resume suspension --- */
/*  8436 */                     if ($ret && $ret.$isSuspension) {
/*  8437 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 277, 16);
/*  8438 */                     }
/*  8439 */                     var $lattr431 = $ret;
/*  8440 */                     count = $lattr431;
/*  8441 */                     //
/*  8442 */                     // line 278:
/*  8443 */                     //         if count >= BUFSIZE:
/*  8444 */                     //         ^
/*  8445 */                     //
/*  8446 */                     $currLineNo = 278;
/*  8447 */                     $currColNo = 8;
/*  8448 */ 
/*  8449 */                     if (count === undefined) {
/*  8450 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  8451 */                     }
/*  8452 */                     var $compareres432 = null;
/*  8453 */                     var $loadgbl433 = Sk.misceval.loadname('BUFSIZE', $gbl);
/*  8454 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(count, $loadgbl433, 'GtE', true));
/*  8455 */                     $blk = 24; /* allowing case fallthrough */
/*  8456 */                 case 24:
/*  8457 */                     /* --- function return or resume suspension --- */
/*  8458 */                     if ($ret && $ret.$isSuspension) {
/*  8459 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 278, 11);
/*  8460 */                     }
/*  8461 */                     $compareres432 = $ret;
/*  8462 */                     var $jfalse434 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8463 */                     if ($jfalse434) { /*test failed */
/*  8464 */                         $blk = 23;
/*  8465 */                         continue;
/*  8466 */                     }
/*  8467 */                     $blk = 23; /* allowing case fallthrough */
/*  8468 */                 case 23:
/*  8469 */                     /* --- done --- */
/*  8470 */                     var $jfalse435 = ($compareres432 === false || !Sk.misceval.isTrue($compareres432));
/*  8471 */                     if ($jfalse435) { /*test failed */
/*  8472 */                         $blk = 22;
/*  8473 */                         continue;
/*  8474 */                     }
/*  8475 */                     //
/*  8476 */                     // line 279:
/*  8477 */                     //             h.work_in = work.link
/*  8478 */                     //             ^
/*  8479 */                     //
/*  8480 */                     $currLineNo = 279;
/*  8481 */                     $currColNo = 12;
/*  8482 */ 
/*  8483 */                     if (work === undefined) {
/*  8484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8485 */                     }
/*  8486 */                     $ret = Sk.abstr.gattr(work, 'link', true);
/*  8487 */                     $blk = 25; /* allowing case fallthrough */
/*  8488 */                 case 25:
/*  8489 */                     /* --- function return or resume suspension --- */
/*  8490 */                     if ($ret && $ret.$isSuspension) {
/*  8491 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 279, 24);
/*  8492 */                     }
/*  8493 */                     var $lattr436 = $ret;
/*  8494 */                     if (h === undefined) {
/*  8495 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8496 */                     }
/*  8497 */                     $ret = Sk.abstr.sattr(h, 'work_in', $lattr436, true);
/*  8498 */                     $blk = 26; /* allowing case fallthrough */
/*  8499 */                 case 26:
/*  8500 */                     /* --- function return or resume suspension --- */
/*  8501 */                     if ($ret && $ret.$isSuspension) {
/*  8502 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 279, 12);
/*  8503 */                     }
/*  8504 */                     //
/*  8505 */                     // line 280:
/*  8506 */                     //             return self.qpkt(work)
/*  8507 */                     //             ^
/*  8508 */                     //
/*  8509 */                     $currLineNo = 280;
/*  8510 */                     $currColNo = 12;
/*  8511 */ 
/*  8512 */                     if (self === undefined) {
/*  8513 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8514 */                     }
/*  8515 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  8516 */                     $blk = 27; /* allowing case fallthrough */
/*  8517 */                 case 27:
/*  8518 */                     /* --- function return or resume suspension --- */
/*  8519 */                     if ($ret && $ret.$isSuspension) {
/*  8520 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 280, 19);
/*  8521 */                     }
/*  8522 */                     var $lattr437 = $ret;
/*  8523 */                     if (work === undefined) {
/*  8524 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8525 */                     }
/*  8526 */                     $ret;
/*  8527 */                     $ret = Sk.misceval.callsimOrSuspend($lattr437, work);
/*  8528 */                     $blk = 28; /* allowing case fallthrough */
/*  8529 */                 case 28:
/*  8530 */                     /* --- function return or resume suspension --- */
/*  8531 */                     if ($ret && $ret.$isSuspension) {
/*  8532 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 280, 19);
/*  8533 */                     }
/*  8534 */                     var $call438 = $ret;
/*  8535 */                     //
/*  8536 */                     // line 280:
/*  8537 */                     //             return self.qpkt(work)
/*  8538 */                     //                    ^
/*  8539 */                     //
/*  8540 */                     $currLineNo = 280;
/*  8541 */                     $currColNo = 19;
/*  8542 */ 
/*  8543 */                     return $call438;
/*  8544 */                     $blk = 22; /* allowing case fallthrough */
/*  8545 */                 case 22:
/*  8546 */                     /* --- end of if --- */
/*  8547 */                     //
/*  8548 */                     // line 282:
/*  8549 */                     //         dev = h.device_in
/*  8550 */                     //         ^
/*  8551 */                     //
/*  8552 */                     $currLineNo = 282;
/*  8553 */                     $currColNo = 8;
/*  8554 */ 
/*  8555 */                     if (h === undefined) {
/*  8556 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8557 */                     }
/*  8558 */                     $ret = Sk.abstr.gattr(h, 'device_in', true);
/*  8559 */                     $blk = 29; /* allowing case fallthrough */
/*  8560 */                 case 29:
/*  8561 */                     /* --- function return or resume suspension --- */
/*  8562 */                     if ($ret && $ret.$isSuspension) {
/*  8563 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 282, 14);
/*  8564 */                     }
/*  8565 */                     var $lattr439 = $ret;
/*  8566 */                     dev = $lattr439;
/*  8567 */                     //
/*  8568 */                     // line 283:
/*  8569 */                     //         if dev is None:
/*  8570 */                     //         ^
/*  8571 */                     //
/*  8572 */                     $currLineNo = 283;
/*  8573 */                     $currColNo = 8;
/*  8574 */ 
/*  8575 */                     if (dev === undefined) {
/*  8576 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  8577 */                     }
/*  8578 */                     var $compareres440 = null;
/*  8579 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(dev, Sk.builtin.none.none$, 'Is', true));
/*  8580 */                     $blk = 32; /* allowing case fallthrough */
/*  8581 */                 case 32:
/*  8582 */                     /* --- function return or resume suspension --- */
/*  8583 */                     if ($ret && $ret.$isSuspension) {
/*  8584 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 283, 11);
/*  8585 */                     }
/*  8586 */                     $compareres440 = $ret;
/*  8587 */                     var $jfalse441 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8588 */                     if ($jfalse441) { /*test failed */
/*  8589 */                         $blk = 31;
/*  8590 */                         continue;
/*  8591 */                     }
/*  8592 */                     $blk = 31; /* allowing case fallthrough */
/*  8593 */                 case 31:
/*  8594 */                     /* --- done --- */
/*  8595 */                     var $jfalse442 = ($compareres440 === false || !Sk.misceval.isTrue($compareres440));
/*  8596 */                     if ($jfalse442) { /*test failed */
/*  8597 */                         $blk = 30;
/*  8598 */                         continue;
/*  8599 */                     }
/*  8600 */                     //
/*  8601 */                     // line 284:
/*  8602 */                     //             return self.waitTask()
/*  8603 */                     //             ^
/*  8604 */                     //
/*  8605 */                     $currLineNo = 284;
/*  8606 */                     $currColNo = 12;
/*  8607 */ 
/*  8608 */                     if (self === undefined) {
/*  8609 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8610 */                     }
/*  8611 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/*  8612 */                     $blk = 33; /* allowing case fallthrough */
/*  8613 */                 case 33:
/*  8614 */                     /* --- function return or resume suspension --- */
/*  8615 */                     if ($ret && $ret.$isSuspension) {
/*  8616 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 284, 19);
/*  8617 */                     }
/*  8618 */                     var $lattr443 = $ret;
/*  8619 */                     $ret;
/*  8620 */                     $ret = Sk.misceval.callsimOrSuspend($lattr443);
/*  8621 */                     $blk = 34; /* allowing case fallthrough */
/*  8622 */                 case 34:
/*  8623 */                     /* --- function return or resume suspension --- */
/*  8624 */                     if ($ret && $ret.$isSuspension) {
/*  8625 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 284, 19);
/*  8626 */                     }
/*  8627 */                     var $call444 = $ret;
/*  8628 */                     //
/*  8629 */                     // line 284:
/*  8630 */                     //             return self.waitTask()
/*  8631 */                     //                    ^
/*  8632 */                     //
/*  8633 */                     $currLineNo = 284;
/*  8634 */                     $currColNo = 19;
/*  8635 */ 
/*  8636 */                     return $call444;
/*  8637 */                     $blk = 30; /* allowing case fallthrough */
/*  8638 */                 case 30:
/*  8639 */                     /* --- end of if --- */
/*  8640 */                     //
/*  8641 */                     // line 286:
/*  8642 */                     //         h.device_in = dev.link
/*  8643 */                     //         ^
/*  8644 */                     //
/*  8645 */                     $currLineNo = 286;
/*  8646 */                     $currColNo = 8;
/*  8647 */ 
/*  8648 */                     if (dev === undefined) {
/*  8649 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  8650 */                     }
/*  8651 */                     $ret = Sk.abstr.gattr(dev, 'link', true);
/*  8652 */                     $blk = 35; /* allowing case fallthrough */
/*  8653 */                 case 35:
/*  8654 */                     /* --- function return or resume suspension --- */
/*  8655 */                     if ($ret && $ret.$isSuspension) {
/*  8656 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 286, 22);
/*  8657 */                     }
/*  8658 */                     var $lattr445 = $ret;
/*  8659 */                     if (h === undefined) {
/*  8660 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8661 */                     }
/*  8662 */                     $ret = Sk.abstr.sattr(h, 'device_in', $lattr445, true);
/*  8663 */                     $blk = 36; /* allowing case fallthrough */
/*  8664 */                 case 36:
/*  8665 */                     /* --- function return or resume suspension --- */
/*  8666 */                     if ($ret && $ret.$isSuspension) {
/*  8667 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 286, 8);
/*  8668 */                     }
/*  8669 */                     //
/*  8670 */                     // line 287:
/*  8671 */                     //         dev.datum = work.data[count]
/*  8672 */                     //         ^
/*  8673 */                     //
/*  8674 */                     $currLineNo = 287;
/*  8675 */                     $currColNo = 8;
/*  8676 */ 
/*  8677 */                     if (work === undefined) {
/*  8678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8679 */                     }
/*  8680 */                     $ret = Sk.abstr.gattr(work, 'data', true);
/*  8681 */                     $blk = 37; /* allowing case fallthrough */
/*  8682 */                 case 37:
/*  8683 */                     /* --- function return or resume suspension --- */
/*  8684 */                     if ($ret && $ret.$isSuspension) {
/*  8685 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 287, 20);
/*  8686 */                     }
/*  8687 */                     var $lattr446 = $ret;
/*  8688 */                     if (count === undefined) {
/*  8689 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  8690 */                     }
/*  8691 */                     $ret = Sk.abstr.objectGetItem($lattr446, count, true);
/*  8692 */                     $blk = 38; /* allowing case fallthrough */
/*  8693 */                 case 38:
/*  8694 */                     /* --- function return or resume suspension --- */
/*  8695 */                     if ($ret && $ret.$isSuspension) {
/*  8696 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/*  8697 */                     }
/*  8698 */                     var $lsubscr447 = $ret;
/*  8699 */                     if (dev === undefined) {
/*  8700 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  8701 */                     }
/*  8702 */                     $ret = Sk.abstr.sattr(dev, 'datum', $lsubscr447, true);
/*  8703 */                     $blk = 39; /* allowing case fallthrough */
/*  8704 */                 case 39:
/*  8705 */                     /* --- function return or resume suspension --- */
/*  8706 */                     if ($ret && $ret.$isSuspension) {
/*  8707 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 287, 8);
/*  8708 */                     }
/*  8709 */                     //
/*  8710 */                     // line 288:
/*  8711 */                     //         work.datum = count + 1
/*  8712 */                     //         ^
/*  8713 */                     //
/*  8714 */                     $currLineNo = 288;
/*  8715 */                     $currColNo = 8;
/*  8716 */ 
/*  8717 */                     if (count === undefined) {
/*  8718 */                         throw new Sk.builtin.UnboundLocalError('local variable \'count\' referenced before assignment');
/*  8719 */                     }
/*  8720 */                     var $binop448 = Sk.abstr.numberBinOp(count, new Sk.builtin.int_(1), 'Add');
/*  8721 */                     if (work === undefined) {
/*  8722 */                         throw new Sk.builtin.UnboundLocalError('local variable \'work\' referenced before assignment');
/*  8723 */                     }
/*  8724 */                     $ret = Sk.abstr.sattr(work, 'datum', $binop448, true);
/*  8725 */                     $blk = 40; /* allowing case fallthrough */
/*  8726 */                 case 40:
/*  8727 */                     /* --- function return or resume suspension --- */
/*  8728 */                     if ($ret && $ret.$isSuspension) {
/*  8729 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 288, 8);
/*  8730 */                     }
/*  8731 */                     //
/*  8732 */                     // line 289:
/*  8733 */                     //         return self.qpkt(dev)
/*  8734 */                     //         ^
/*  8735 */                     //
/*  8736 */                     $currLineNo = 289;
/*  8737 */                     $currColNo = 8;
/*  8738 */ 
/*  8739 */                     if (self === undefined) {
/*  8740 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8741 */                     }
/*  8742 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/*  8743 */                     $blk = 41; /* allowing case fallthrough */
/*  8744 */                 case 41:
/*  8745 */                     /* --- function return or resume suspension --- */
/*  8746 */                     if ($ret && $ret.$isSuspension) {
/*  8747 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 289, 15);
/*  8748 */                     }
/*  8749 */                     var $lattr449 = $ret;
/*  8750 */                     if (dev === undefined) {
/*  8751 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dev\' referenced before assignment');
/*  8752 */                     }
/*  8753 */                     $ret;
/*  8754 */                     $ret = Sk.misceval.callsimOrSuspend($lattr449, dev);
/*  8755 */                     $blk = 42; /* allowing case fallthrough */
/*  8756 */                 case 42:
/*  8757 */                     /* --- function return or resume suspension --- */
/*  8758 */                     if ($ret && $ret.$isSuspension) {
/*  8759 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 289, 15);
/*  8760 */                     }
/*  8761 */                     var $call450 = $ret;
/*  8762 */                     //
/*  8763 */                     // line 289:
/*  8764 */                     //         return self.qpkt(dev)
/*  8765 */                     //                ^
/*  8766 */                     //
/*  8767 */                     $currLineNo = 289;
/*  8768 */                     $currColNo = 15;
/*  8769 */ 
/*  8770 */                     return $call450;
/*  8771 */                     return Sk.builtin.none.none$;
/*  8772 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8773 */                 case 7:
/*  8774 */                     /* --- next branch of if --- */
/*  8775 */                     //
/*  8776 */                     // line 273:
/*  8777 */                     //                 h.deviceInAdd(pkt)
/*  8778 */                     //                 ^
/*  8779 */                     //
/*  8780 */                     $currLineNo = 273;
/*  8781 */                     $currColNo = 16;
/*  8782 */ 
/*  8783 */                     if (h === undefined) {
/*  8784 */                         throw new Sk.builtin.UnboundLocalError('local variable \'h\' referenced before assignment');
/*  8785 */                     }
/*  8786 */                     $ret = Sk.abstr.gattr(h, 'deviceInAdd', true);
/*  8787 */                     $blk = 13; /* allowing case fallthrough */
/*  8788 */                 case 13:
/*  8789 */                     /* --- function return or resume suspension --- */
/*  8790 */                     if ($ret && $ret.$isSuspension) {
/*  8791 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 273, 16);
/*  8792 */                     }
/*  8793 */                     var $lattr423 = $ret;
/*  8794 */                     if (pkt === undefined) {
/*  8795 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  8796 */                     }
/*  8797 */                     $ret;
/*  8798 */                     $ret = Sk.misceval.callsimOrSuspend($lattr423, pkt);
/*  8799 */                     $blk = 14; /* allowing case fallthrough */
/*  8800 */                 case 14:
/*  8801 */                     /* --- function return or resume suspension --- */
/*  8802 */                     if ($ret && $ret.$isSuspension) {
/*  8803 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 273, 16);
/*  8804 */                     }
/*  8805 */                     var $call424 = $ret;
/*  8806 */                     //
/*  8807 */                     // line 273:
/*  8808 */                     //                 h.deviceInAdd(pkt)
/*  8809 */                     //                 ^
/*  8810 */                     //
/*  8811 */                     $currLineNo = 273;
/*  8812 */                     $currColNo = 16;
/*  8813 */ 
/*  8814 */                     $blk = 6; /* jump */
/*  8815 */                     continue;
/*  8816 */                 }
/*  8817 */             } catch (err) {
/*  8818 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8819 */                     err = new Sk.builtin.ExternalError(err);
/*  8820 */                 }
/*  8821 */                 err.traceback.push({
/*  8822 */                     lineno: $currLineNo,
/*  8823 */                     colno: $currColNo,
/*  8824 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8825 */                 });
/*  8826 */                 if ($exc.length > 0) {
/*  8827 */                     $err = err;
/*  8828 */                     $blk = $exc.pop();
/*  8829 */                     continue;
/*  8830 */                 } else {
/*  8831 */                     throw err;
/*  8832 */                 }
/*  8833 */             }
/*  8834 */         }
/*  8835 */     });
/*  8836 */     var $scope454 = (function $IdleTask$class_outer($globals, $locals, $rest) {
/*  8837 */         var $gbl = $globals,
/*  8838 */             $loc = $locals;
/*  8839 */         (function $IdleTask$_closure() {
/*  8840 */             var $blk = 0,
/*  8841 */                 $exc = [],
/*  8842 */                 $ret = undefined,
/*  8843 */                 $postfinally = undefined,
/*  8844 */                 $currLineNo = undefined,
/*  8845 */                 $currColNo = undefined;
/*  8846 */             while (true) {
/*  8847 */                 try {
/*  8848 */                     switch ($blk) {
/*  8849 */                     case 0:
/*  8850 */                         /* --- class entry --- */
/*  8851 */                         //
/*  8852 */                         // line 295:
/*  8853 */                         //     def __init__(self,i,p,w,s,r):
/*  8854 */                         //     ^
/*  8855 */                         //
/*  8856 */                         $currLineNo = 295;
/*  8857 */                         $currColNo = 4;
/*  8858 */ 
/*  8859 */                         $scope455.co_name = new Sk.builtins['str']('__init__');
/*  8860 */                         $scope455.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  8861 */                         var $funcobj460 = new Sk.builtins['function']($scope455, $gbl);
/*  8862 */                         $loc.__init__ = $funcobj460;
/*  8863 */                         //
/*  8864 */                         // line 298:
/*  8865 */                         //     def fn(self,pkt,r):
/*  8866 */                         //     ^
/*  8867 */                         //
/*  8868 */                         $currLineNo = 298;
/*  8869 */                         $currColNo = 4;
/*  8870 */ 
/*  8871 */                         $scope461.co_name = new Sk.builtins['str']('fn');
/*  8872 */                         $scope461.co_varnames = ['self', 'pkt', 'r'];
/*  8873 */                         var $funcobj495 = new Sk.builtins['function']($scope461, $gbl);
/*  8874 */                         $loc.fn = $funcobj495;
/*  8875 */                         return;
/*  8876 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8877 */                     }
/*  8878 */                 } catch (err) {
/*  8879 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  8880 */                         err = new Sk.builtin.ExternalError(err);
/*  8881 */                     }
/*  8882 */                     err.traceback.push({
/*  8883 */                         lineno: $currLineNo,
/*  8884 */                         colno: $currColNo,
/*  8885 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8886 */                     });
/*  8887 */                     if ($exc.length > 0) {
/*  8888 */                         $err = err;
/*  8889 */                         $blk = $exc.pop();
/*  8890 */                         continue;
/*  8891 */                     } else {
/*  8892 */                         throw err;
/*  8893 */                     }
/*  8894 */                 }
/*  8895 */             }
/*  8896 */         }).apply(null, $rest);
/*  8897 */     });
/*  8898 */     var $scope455 = (function $__init__456$(self, i, p, w, s, r) {
/*  8899 */         var i, i, p, r, r, s, s, self, self, w, $loadgbl457, $loadgbl457, $lattr458;
/*  8900 */         var $wakeFromSuspension = function() {
/*  8901 */             var susp = $scope455.$wakingSuspension;
/*  8902 */             delete $scope455.$wakingSuspension;
/*  8903 */             $blk = susp.$blk;
/*  8904 */             $loc = susp.$loc;
/*  8905 */             $gbl = susp.$gbl;
/*  8906 */             $exc = susp.$exc;
/*  8907 */             $err = susp.$err;
/*  8908 */             $postfinally = susp.$postfinally;
/*  8909 */             $currLineNo = susp.$lineno;
/*  8910 */             $currColNo = susp.$colno;
/*  8911 */             Sk.lastYield = Date.now();
/*  8912 */             i = susp.$tmps.i;
/*  8913 */             p = susp.$tmps.p;
/*  8914 */             r = susp.$tmps.r;
/*  8915 */             s = susp.$tmps.s;
/*  8916 */             self = susp.$tmps.self;
/*  8917 */             w = susp.$tmps.w;
/*  8918 */             $loadgbl457 = susp.$tmps.$loadgbl457;
/*  8919 */             $lattr458 = susp.$tmps.$lattr458;
/*  8920 */             try {
/*  8921 */                 $ret = susp.child.resume();
/*  8922 */             } catch (err) {
/*  8923 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8924 */                     err = new Sk.builtin.ExternalError(err);
/*  8925 */                 }
/*  8926 */                 err.traceback.push({
/*  8927 */                     lineno: $currLineNo,
/*  8928 */                     colno: $currColNo,
/*  8929 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  8930 */                 });
/*  8931 */                 if ($exc.length > 0) {
/*  8932 */                     $err = err;
/*  8933 */                     $blk = $exc.pop();
/*  8934 */                 } else {
/*  8935 */                     throw err;
/*  8936 */                 }
/*  8937 */             }
/*  8938 */         };
/*  8939 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8940 */             var susp = new Sk.misceval.Suspension();
/*  8941 */             susp.child = $child;
/*  8942 */             susp.resume = function() {
/*  8943 */                 $scope455.$wakingSuspension = susp;
/*  8944 */                 return $scope455();
/*  8945 */             };
/*  8946 */             susp.data = susp.child.data;
/*  8947 */             susp.$blk = $blk;
/*  8948 */             susp.$loc = $loc;
/*  8949 */             susp.$gbl = $gbl;
/*  8950 */             susp.$exc = $exc;
/*  8951 */             susp.$err = $err;
/*  8952 */             susp.$postfinally = $postfinally;
/*  8953 */             susp.$filename = $filename;
/*  8954 */             susp.$lineno = $lineno;
/*  8955 */             susp.$colno = $colno;
/*  8956 */             susp.optional = susp.child.optional;
/*  8957 */             susp.$tmps = {
/*  8958 */                 "i": i,
/*  8959 */                 "p": p,
/*  8960 */                 "r": r,
/*  8961 */                 "s": s,
/*  8962 */                 "self": self,
/*  8963 */                 "w": w,
/*  8964 */                 "$loadgbl457": $loadgbl457,
/*  8965 */                 "$lattr458": $lattr458
/*  8966 */             };
/*  8967 */             return susp;
/*  8968 */         };
/*  8969 */         var $blk = 0,
/*  8970 */             $exc = [],
/*  8971 */             $loc = {},
/*  8972 */             $gbl = this,
/*  8973 */             $err = undefined,
/*  8974 */             $ret = undefined,
/*  8975 */             $postfinally = undefined,
/*  8976 */             $currLineNo = undefined,
/*  8977 */             $currColNo = undefined;
/*  8978 */         if ($scope455.$wakingSuspension !== undefined) {
/*  8979 */             $wakeFromSuspension();
/*  8980 */         } else {
/*  8981 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  8982 */         }
/*  8983 */         while (true) {
/*  8984 */             try {
/*  8985 */                 switch ($blk) {
/*  8986 */                 case 0:
/*  8987 */                     /* --- codeobj entry --- */
/*  8988 */                     if (self === undefined) {
/*  8989 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8990 */                     }
/*  8991 */                     if (i === undefined) {
/*  8992 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  8993 */                     }
/*  8994 */                     if (p === undefined) {
/*  8995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  8996 */                     }
/*  8997 */                     if (w === undefined) {
/*  8998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  8999 */                     }
/*  9000 */                     if (s === undefined) {
/*  9001 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9002 */                     }
/*  9003 */                     if (r === undefined) {
/*  9004 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9005 */                     }
/*  9006 */ 
/*  9007 */                     //
/*  9008 */                     // line 296:
/*  9009 */                     //         Task.__init__(self,i,0,None,s,r)
/*  9010 */                     //         ^
/*  9011 */                     //
/*  9012 */                     $currLineNo = 296;
/*  9013 */                     $currColNo = 8;
/*  9014 */ 
/*  9015 */                     var $loadgbl457 = Sk.misceval.loadname('Task', $gbl);
/*  9016 */                     $ret = Sk.abstr.gattr($loadgbl457, '__init__', true);
/*  9017 */                     $blk = 1; /* allowing case fallthrough */
/*  9018 */                 case 1:
/*  9019 */                     /* --- function return or resume suspension --- */
/*  9020 */                     if ($ret && $ret.$isSuspension) {
/*  9021 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 296, 8);
/*  9022 */                     }
/*  9023 */                     var $lattr458 = $ret;
/*  9024 */                     if (self === undefined) {
/*  9025 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9026 */                     }
/*  9027 */                     if (i === undefined) {
/*  9028 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9029 */                     }
/*  9030 */                     if (s === undefined) {
/*  9031 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9032 */                     }
/*  9033 */                     if (r === undefined) {
/*  9034 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9035 */                     }
/*  9036 */                     $ret;
/*  9037 */                     $ret = Sk.misceval.callsimOrSuspend($lattr458, self, i, new Sk.builtin.int_(0), Sk.builtin.none.none$, s, r);
/*  9038 */                     $blk = 2; /* allowing case fallthrough */
/*  9039 */                 case 2:
/*  9040 */                     /* --- function return or resume suspension --- */
/*  9041 */                     if ($ret && $ret.$isSuspension) {
/*  9042 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 296, 8);
/*  9043 */                     }
/*  9044 */                     var $call459 = $ret;
/*  9045 */                     //
/*  9046 */                     // line 296:
/*  9047 */                     //         Task.__init__(self,i,0,None,s,r)
/*  9048 */                     //         ^
/*  9049 */                     //
/*  9050 */                     $currLineNo = 296;
/*  9051 */                     $currColNo = 8;
/*  9052 */ 
/*  9053 */                     return Sk.builtin.none.none$;
/*  9054 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9055 */                 }
/*  9056 */             } catch (err) {
/*  9057 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9058 */                     err = new Sk.builtin.ExternalError(err);
/*  9059 */                 }
/*  9060 */                 err.traceback.push({
/*  9061 */                     lineno: $currLineNo,
/*  9062 */                     colno: $currColNo,
/*  9063 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9064 */                 });
/*  9065 */                 if ($exc.length > 0) {
/*  9066 */                     $err = err;
/*  9067 */                     $blk = $exc.pop();
/*  9068 */                     continue;
/*  9069 */                 } else {
/*  9070 */                     throw err;
/*  9071 */                 }
/*  9072 */             }
/*  9073 */         }
/*  9074 */     });
/*  9075 */     var $scope461 = (function $fn462$(self, pkt, r) {
/*  9076 */         var i; /* locals */
/*  9077 */         var i, i, i, i, i, i, i, i, pkt, r, r, self, self, self, self, $loadgbl463, $loadgbl464, $lattr467, $inplbinopattr468, $lattr469, $compareres470, $lattr473, $loadgbl475, $loadgbl475, $lattr476, $loadgbl475, $lattr476, $call477, $binop478, $compareres479, $lattr482, $inplbinopattr483, $lattr484, $loadgbl485, $loadgbl487, $loadgbl487, $lattr488, $binop489, $loadgbl487, $lattr488, $binop489, $call490, $binop491, $lattr492, $loadgbl493;
/*  9078 */         var $wakeFromSuspension = function() {
/*  9079 */             var susp = $scope461.$wakingSuspension;
/*  9080 */             delete $scope461.$wakingSuspension;
/*  9081 */             $blk = susp.$blk;
/*  9082 */             $loc = susp.$loc;
/*  9083 */             $gbl = susp.$gbl;
/*  9084 */             $exc = susp.$exc;
/*  9085 */             $err = susp.$err;
/*  9086 */             $postfinally = susp.$postfinally;
/*  9087 */             $currLineNo = susp.$lineno;
/*  9088 */             $currColNo = susp.$colno;
/*  9089 */             Sk.lastYield = Date.now();
/*  9090 */             i = susp.$tmps.i;
/*  9091 */             pkt = susp.$tmps.pkt;
/*  9092 */             r = susp.$tmps.r;
/*  9093 */             self = susp.$tmps.self;
/*  9094 */             $loadgbl463 = susp.$tmps.$loadgbl463;
/*  9095 */             $loadgbl464 = susp.$tmps.$loadgbl464;
/*  9096 */             $lattr467 = susp.$tmps.$lattr467;
/*  9097 */             $inplbinopattr468 = susp.$tmps.$inplbinopattr468;
/*  9098 */             $lattr469 = susp.$tmps.$lattr469;
/*  9099 */             $compareres470 = susp.$tmps.$compareres470;
/*  9100 */             $lattr473 = susp.$tmps.$lattr473;
/*  9101 */             $loadgbl475 = susp.$tmps.$loadgbl475;
/*  9102 */             $lattr476 = susp.$tmps.$lattr476;
/*  9103 */             $call477 = susp.$tmps.$call477;
/*  9104 */             $binop478 = susp.$tmps.$binop478;
/*  9105 */             $compareres479 = susp.$tmps.$compareres479;
/*  9106 */             $lattr482 = susp.$tmps.$lattr482;
/*  9107 */             $inplbinopattr483 = susp.$tmps.$inplbinopattr483;
/*  9108 */             $lattr484 = susp.$tmps.$lattr484;
/*  9109 */             $loadgbl485 = susp.$tmps.$loadgbl485;
/*  9110 */             $loadgbl487 = susp.$tmps.$loadgbl487;
/*  9111 */             $lattr488 = susp.$tmps.$lattr488;
/*  9112 */             $binop489 = susp.$tmps.$binop489;
/*  9113 */             $call490 = susp.$tmps.$call490;
/*  9114 */             $binop491 = susp.$tmps.$binop491;
/*  9115 */             $lattr492 = susp.$tmps.$lattr492;
/*  9116 */             $loadgbl493 = susp.$tmps.$loadgbl493;
/*  9117 */             try {
/*  9118 */                 $ret = susp.child.resume();
/*  9119 */             } catch (err) {
/*  9120 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9121 */                     err = new Sk.builtin.ExternalError(err);
/*  9122 */                 }
/*  9123 */                 err.traceback.push({
/*  9124 */                     lineno: $currLineNo,
/*  9125 */                     colno: $currColNo,
/*  9126 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9127 */                 });
/*  9128 */                 if ($exc.length > 0) {
/*  9129 */                     $err = err;
/*  9130 */                     $blk = $exc.pop();
/*  9131 */                 } else {
/*  9132 */                     throw err;
/*  9133 */                 }
/*  9134 */             }
/*  9135 */         };
/*  9136 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9137 */             var susp = new Sk.misceval.Suspension();
/*  9138 */             susp.child = $child;
/*  9139 */             susp.resume = function() {
/*  9140 */                 $scope461.$wakingSuspension = susp;
/*  9141 */                 return $scope461();
/*  9142 */             };
/*  9143 */             susp.data = susp.child.data;
/*  9144 */             susp.$blk = $blk;
/*  9145 */             susp.$loc = $loc;
/*  9146 */             susp.$gbl = $gbl;
/*  9147 */             susp.$exc = $exc;
/*  9148 */             susp.$err = $err;
/*  9149 */             susp.$postfinally = $postfinally;
/*  9150 */             susp.$filename = $filename;
/*  9151 */             susp.$lineno = $lineno;
/*  9152 */             susp.$colno = $colno;
/*  9153 */             susp.optional = susp.child.optional;
/*  9154 */             susp.$tmps = {
/*  9155 */                 "i": i,
/*  9156 */                 "pkt": pkt,
/*  9157 */                 "r": r,
/*  9158 */                 "self": self,
/*  9159 */                 "$loadgbl463": $loadgbl463,
/*  9160 */                 "$loadgbl464": $loadgbl464,
/*  9161 */                 "$lattr467": $lattr467,
/*  9162 */                 "$inplbinopattr468": $inplbinopattr468,
/*  9163 */                 "$lattr469": $lattr469,
/*  9164 */                 "$compareres470": $compareres470,
/*  9165 */                 "$lattr473": $lattr473,
/*  9166 */                 "$loadgbl475": $loadgbl475,
/*  9167 */                 "$lattr476": $lattr476,
/*  9168 */                 "$call477": $call477,
/*  9169 */                 "$binop478": $binop478,
/*  9170 */                 "$compareres479": $compareres479,
/*  9171 */                 "$lattr482": $lattr482,
/*  9172 */                 "$inplbinopattr483": $inplbinopattr483,
/*  9173 */                 "$lattr484": $lattr484,
/*  9174 */                 "$loadgbl485": $loadgbl485,
/*  9175 */                 "$loadgbl487": $loadgbl487,
/*  9176 */                 "$lattr488": $lattr488,
/*  9177 */                 "$binop489": $binop489,
/*  9178 */                 "$call490": $call490,
/*  9179 */                 "$binop491": $binop491,
/*  9180 */                 "$lattr492": $lattr492,
/*  9181 */                 "$loadgbl493": $loadgbl493
/*  9182 */             };
/*  9183 */             return susp;
/*  9184 */         };
/*  9185 */         var $blk = 0,
/*  9186 */             $exc = [],
/*  9187 */             $loc = {},
/*  9188 */             $gbl = this,
/*  9189 */             $err = undefined,
/*  9190 */             $ret = undefined,
/*  9191 */             $postfinally = undefined,
/*  9192 */             $currLineNo = undefined,
/*  9193 */             $currColNo = undefined;
/*  9194 */         if ($scope461.$wakingSuspension !== undefined) {
/*  9195 */             $wakeFromSuspension();
/*  9196 */         } else {
/*  9197 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  9198 */         }
/*  9199 */         while (true) {
/*  9200 */             try {
/*  9201 */                 switch ($blk) {
/*  9202 */                 case 0:
/*  9203 */                     /* --- codeobj entry --- */
/*  9204 */                     if (self === undefined) {
/*  9205 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9206 */                     }
/*  9207 */                     if (pkt === undefined) {
/*  9208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9209 */                     }
/*  9210 */                     if (r === undefined) {
/*  9211 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9212 */                     }
/*  9213 */ 
/*  9214 */                     //
/*  9215 */                     // line 299:
/*  9216 */                     //         i = r
/*  9217 */                     //         ^
/*  9218 */                     //
/*  9219 */                     $currLineNo = 299;
/*  9220 */                     $currColNo = 8;
/*  9221 */ 
/*  9222 */                     if (r === undefined) {
/*  9223 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9224 */                     }
/*  9225 */                     i = r;
/*  9226 */                     //
/*  9227 */                     // line 300:
/*  9228 */                     //         assert isinstance(i, IdleTaskRec)
/*  9229 */                     //         ^
/*  9230 */                     //
/*  9231 */                     $currLineNo = 300;
/*  9232 */                     $currColNo = 8;
/*  9233 */ 
/*  9234 */                     var $loadgbl463 = Sk.misceval.loadname('isinstance', $gbl);
/*  9235 */                     if (i === undefined) {
/*  9236 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9237 */                     }
/*  9238 */                     var $loadgbl464 = Sk.misceval.loadname('IdleTaskRec', $gbl);
/*  9239 */                     $ret;
/*  9240 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl463, i, $loadgbl464);
/*  9241 */                     $blk = 1; /* allowing case fallthrough */
/*  9242 */                 case 1:
/*  9243 */                     /* --- function return or resume suspension --- */
/*  9244 */                     if ($ret && $ret.$isSuspension) {
/*  9245 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 300, 15);
/*  9246 */                     }
/*  9247 */                     var $call465 = $ret;
/*  9248 */                     //
/*  9249 */                     // line 300:
/*  9250 */                     //         assert isinstance(i, IdleTaskRec)
/*  9251 */                     //                ^
/*  9252 */                     //
/*  9253 */                     $currLineNo = 300;
/*  9254 */                     $currColNo = 15;
/*  9255 */ 
/*  9256 */                     var $jtrue466 = ($call465 === true || Sk.misceval.isTrue($call465));
/*  9257 */                     if ($jtrue466) { /*test passed */
/*  9258 */                         $blk = 2;
/*  9259 */                         continue;
/*  9260 */                     }
/*  9261 */                     throw new Sk.builtin.AssertionError();
/*  9262 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9263 */                 case 2:
/*  9264 */                     /* --- end --- */
/*  9265 */                     //
/*  9266 */                     // line 301:
/*  9267 */                     //         i.count -= 1
/*  9268 */                     //         ^
/*  9269 */                     //
/*  9270 */                     $currLineNo = 301;
/*  9271 */                     $currColNo = 8;
/*  9272 */ 
/*  9273 */                     if (i === undefined) {
/*  9274 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9275 */                     }
/*  9276 */                     $ret = Sk.abstr.gattr(i, 'count', true);
/*  9277 */                     $blk = 3; /* allowing case fallthrough */
/*  9278 */                 case 3:
/*  9279 */                     /* --- function return or resume suspension --- */
/*  9280 */                     if ($ret && $ret.$isSuspension) {
/*  9281 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 301, 8);
/*  9282 */                     }
/*  9283 */                     var $lattr467 = $ret;
/*  9284 */                     var $inplbinopattr468 = Sk.abstr.numberInplaceBinOp($lattr467, new Sk.builtin.int_(1), 'Sub');
/*  9285 */                     $ret = undefined;
/*  9286 */                     if ($inplbinopattr468 !== undefined) {
/*  9287 */                         $ret = Sk.abstr.sattr(i, 'count', $inplbinopattr468, true);
/*  9288 */                     }
/*  9289 */                     $blk = 4; /* allowing case fallthrough */
/*  9290 */                 case 4:
/*  9291 */                     /* --- function return or resume suspension --- */
/*  9292 */                     if ($ret && $ret.$isSuspension) {
/*  9293 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 301, 8);
/*  9294 */                     }
/*  9295 */                     //
/*  9296 */                     // line 302:
/*  9297 */                     //         if i.count == 0:
/*  9298 */                     //         ^
/*  9299 */                     //
/*  9300 */                     $currLineNo = 302;
/*  9301 */                     $currColNo = 8;
/*  9302 */ 
/*  9303 */                     if (i === undefined) {
/*  9304 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9305 */                     }
/*  9306 */                     $ret = Sk.abstr.gattr(i, 'count', true);
/*  9307 */                     $blk = 7; /* allowing case fallthrough */
/*  9308 */                 case 7:
/*  9309 */                     /* --- function return or resume suspension --- */
/*  9310 */                     if ($ret && $ret.$isSuspension) {
/*  9311 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 302, 11);
/*  9312 */                     }
/*  9313 */                     var $lattr469 = $ret;
/*  9314 */                     var $compareres470 = null;
/*  9315 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr469, new Sk.builtin.int_(0), 'Eq', true));
/*  9316 */                     $blk = 9; /* allowing case fallthrough */
/*  9317 */                 case 9:
/*  9318 */                     /* --- function return or resume suspension --- */
/*  9319 */                     if ($ret && $ret.$isSuspension) {
/*  9320 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 302, 11);
/*  9321 */                     }
/*  9322 */                     $compareres470 = $ret;
/*  9323 */                     var $jfalse471 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9324 */                     if ($jfalse471) { /*test failed */
/*  9325 */                         $blk = 8;
/*  9326 */                         continue;
/*  9327 */                     }
/*  9328 */                     $blk = 8; /* allowing case fallthrough */
/*  9329 */                 case 8:
/*  9330 */                     /* --- done --- */
/*  9331 */                     var $jfalse472 = ($compareres470 === false || !Sk.misceval.isTrue($compareres470));
/*  9332 */                     if ($jfalse472) { /*test failed */
/*  9333 */                         $blk = 6;
/*  9334 */                         continue;
/*  9335 */                     }
/*  9336 */                     //
/*  9337 */                     // line 303:
/*  9338 */                     //             return self.hold()
/*  9339 */                     //             ^
/*  9340 */                     //
/*  9341 */                     $currLineNo = 303;
/*  9342 */                     $currColNo = 12;
/*  9343 */ 
/*  9344 */                     if (self === undefined) {
/*  9345 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9346 */                     }
/*  9347 */                     $ret = Sk.abstr.gattr(self, 'hold', true);
/*  9348 */                     $blk = 10; /* allowing case fallthrough */
/*  9349 */                 case 10:
/*  9350 */                     /* --- function return or resume suspension --- */
/*  9351 */                     if ($ret && $ret.$isSuspension) {
/*  9352 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 303, 19);
/*  9353 */                     }
/*  9354 */                     var $lattr473 = $ret;
/*  9355 */                     $ret;
/*  9356 */                     $ret = Sk.misceval.callsimOrSuspend($lattr473);
/*  9357 */                     $blk = 11; /* allowing case fallthrough */
/*  9358 */                 case 11:
/*  9359 */                     /* --- function return or resume suspension --- */
/*  9360 */                     if ($ret && $ret.$isSuspension) {
/*  9361 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 303, 19);
/*  9362 */                     }
/*  9363 */                     var $call474 = $ret;
/*  9364 */                     //
/*  9365 */                     // line 303:
/*  9366 */                     //             return self.hold()
/*  9367 */                     //                    ^
/*  9368 */                     //
/*  9369 */                     $currLineNo = 303;
/*  9370 */                     $currColNo = 19;
/*  9371 */ 
/*  9372 */                     return $call474;
/*  9373 */                     $blk = 5; /* allowing case fallthrough */
/*  9374 */                 case 5:
/*  9375 */                     /* --- end of if --- */
/*  9376 */                     return Sk.builtin.none.none$;
/*  9377 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9378 */                 case 6:
/*  9379 */                     /* --- next branch of if --- */
/*  9380 */                     //
/*  9381 */                     // line 304:
/*  9382 */                     //         elif int(i.control) & 1 == 0:
/*  9383 */                     //              ^
/*  9384 */                     //
/*  9385 */                     $currLineNo = 304;
/*  9386 */                     $currColNo = 13;
/*  9387 */ 
/*  9388 */                     var $loadgbl475 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  9389 */                     if (i === undefined) {
/*  9390 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9391 */                     }
/*  9392 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/*  9393 */                     $blk = 14; /* allowing case fallthrough */
/*  9394 */                 case 14:
/*  9395 */                     /* --- function return or resume suspension --- */
/*  9396 */                     if ($ret && $ret.$isSuspension) {
/*  9397 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 17);
/*  9398 */                     }
/*  9399 */                     var $lattr476 = $ret;
/*  9400 */                     $ret;
/*  9401 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl475, $lattr476);
/*  9402 */                     $blk = 15; /* allowing case fallthrough */
/*  9403 */                 case 15:
/*  9404 */                     /* --- function return or resume suspension --- */
/*  9405 */                     if ($ret && $ret.$isSuspension) {
/*  9406 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 13);
/*  9407 */                     }
/*  9408 */                     var $call477 = $ret;
/*  9409 */                     //
/*  9410 */                     // line 304:
/*  9411 */                     //         elif int(i.control) & 1 == 0:
/*  9412 */                     //              ^
/*  9413 */                     //
/*  9414 */                     $currLineNo = 304;
/*  9415 */                     $currColNo = 13;
/*  9416 */ 
/*  9417 */                     var $binop478 = Sk.abstr.numberBinOp($call477, new Sk.builtin.int_(1), 'BitAnd');
/*  9418 */                     var $compareres479 = null;
/*  9419 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($binop478, new Sk.builtin.int_(0), 'Eq', true));
/*  9420 */                     $blk = 17; /* allowing case fallthrough */
/*  9421 */                 case 17:
/*  9422 */                     /* --- function return or resume suspension --- */
/*  9423 */                     if ($ret && $ret.$isSuspension) {
/*  9424 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 304, 13);
/*  9425 */                     }
/*  9426 */                     $compareres479 = $ret;
/*  9427 */                     var $jfalse480 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9428 */                     if ($jfalse480) { /*test failed */
/*  9429 */                         $blk = 16;
/*  9430 */                         continue;
/*  9431 */                     }
/*  9432 */                     $blk = 16; /* allowing case fallthrough */
/*  9433 */                 case 16:
/*  9434 */                     /* --- done --- */
/*  9435 */                     var $jfalse481 = ($compareres479 === false || !Sk.misceval.isTrue($compareres479));
/*  9436 */                     if ($jfalse481) { /*test failed */
/*  9437 */                         $blk = 13;
/*  9438 */                         continue;
/*  9439 */                     }
/*  9440 */                     //
/*  9441 */                     // line 305:
/*  9442 */                     //             i.control /= 2
/*  9443 */                     //             ^
/*  9444 */                     //
/*  9445 */                     $currLineNo = 305;
/*  9446 */                     $currColNo = 12;
/*  9447 */ 
/*  9448 */                     if (i === undefined) {
/*  9449 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9450 */                     }
/*  9451 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/*  9452 */                     $blk = 18; /* allowing case fallthrough */
/*  9453 */                 case 18:
/*  9454 */                     /* --- function return or resume suspension --- */
/*  9455 */                     if ($ret && $ret.$isSuspension) {
/*  9456 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 305, 12);
/*  9457 */                     }
/*  9458 */                     var $lattr482 = $ret;
/*  9459 */                     var $inplbinopattr483 = Sk.abstr.numberInplaceBinOp($lattr482, new Sk.builtin.int_(2), 'Div');
/*  9460 */                     $ret = undefined;
/*  9461 */                     if ($inplbinopattr483 !== undefined) {
/*  9462 */                         $ret = Sk.abstr.sattr(i, 'control', $inplbinopattr483, true);
/*  9463 */                     }
/*  9464 */                     $blk = 19; /* allowing case fallthrough */
/*  9465 */                 case 19:
/*  9466 */                     /* --- function return or resume suspension --- */
/*  9467 */                     if ($ret && $ret.$isSuspension) {
/*  9468 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 305, 12);
/*  9469 */                     }
/*  9470 */                     //
/*  9471 */                     // line 306:
/*  9472 */                     //             return self.release(I_DEVA)
/*  9473 */                     //             ^
/*  9474 */                     //
/*  9475 */                     $currLineNo = 306;
/*  9476 */                     $currColNo = 12;
/*  9477 */ 
/*  9478 */                     if (self === undefined) {
/*  9479 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9480 */                     }
/*  9481 */                     $ret = Sk.abstr.gattr(self, 'release', true);
/*  9482 */                     $blk = 20; /* allowing case fallthrough */
/*  9483 */                 case 20:
/*  9484 */                     /* --- function return or resume suspension --- */
/*  9485 */                     if ($ret && $ret.$isSuspension) {
/*  9486 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 306, 19);
/*  9487 */                     }
/*  9488 */                     var $lattr484 = $ret;
/*  9489 */                     var $loadgbl485 = Sk.misceval.loadname('I_DEVA', $gbl);
/*  9490 */                     $ret;
/*  9491 */                     $ret = Sk.misceval.callsimOrSuspend($lattr484, $loadgbl485);
/*  9492 */                     $blk = 21; /* allowing case fallthrough */
/*  9493 */                 case 21:
/*  9494 */                     /* --- function return or resume suspension --- */
/*  9495 */                     if ($ret && $ret.$isSuspension) {
/*  9496 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 306, 19);
/*  9497 */                     }
/*  9498 */                     var $call486 = $ret;
/*  9499 */                     //
/*  9500 */                     // line 306:
/*  9501 */                     //             return self.release(I_DEVA)
/*  9502 */                     //                    ^
/*  9503 */                     //
/*  9504 */                     $currLineNo = 306;
/*  9505 */                     $currColNo = 19;
/*  9506 */ 
/*  9507 */                     return $call486;
/*  9508 */                     $blk = 12; /* allowing case fallthrough */
/*  9509 */                 case 12:
/*  9510 */                     /* --- end of if --- */
/*  9511 */                     $blk = 5; /* jump */
/*  9512 */                     continue;
/*  9513 */                 case 13:
/*  9514 */                     /* --- next branch of if --- */
/*  9515 */                     //
/*  9516 */                     // line 308:
/*  9517 */                     //             i.control = int(i.control/2) ^ 0xd008
/*  9518 */                     //             ^
/*  9519 */                     //
/*  9520 */                     $currLineNo = 308;
/*  9521 */                     $currColNo = 12;
/*  9522 */ 
/*  9523 */                     var $loadgbl487 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  9524 */                     if (i === undefined) {
/*  9525 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9526 */                     }
/*  9527 */                     $ret = Sk.abstr.gattr(i, 'control', true);
/*  9528 */                     $blk = 22; /* allowing case fallthrough */
/*  9529 */                 case 22:
/*  9530 */                     /* --- function return or resume suspension --- */
/*  9531 */                     if ($ret && $ret.$isSuspension) {
/*  9532 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 28);
/*  9533 */                     }
/*  9534 */                     var $lattr488 = $ret;
/*  9535 */                     var $binop489 = Sk.abstr.numberBinOp($lattr488, new Sk.builtin.int_(2), 'Div');
/*  9536 */                     $ret;
/*  9537 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl487, $binop489);
/*  9538 */                     $blk = 23; /* allowing case fallthrough */
/*  9539 */                 case 23:
/*  9540 */                     /* --- function return or resume suspension --- */
/*  9541 */                     if ($ret && $ret.$isSuspension) {
/*  9542 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 24);
/*  9543 */                     }
/*  9544 */                     var $call490 = $ret;
/*  9545 */                     //
/*  9546 */                     // line 308:
/*  9547 */                     //             i.control = int(i.control/2) ^ 0xd008
/*  9548 */                     //                         ^
/*  9549 */                     //
/*  9550 */                     $currLineNo = 308;
/*  9551 */                     $currColNo = 24;
/*  9552 */ 
/*  9553 */                     var $binop491 = Sk.abstr.numberBinOp($call490, new Sk.builtin.int_(53256), 'BitXor');
/*  9554 */                     if (i === undefined) {
/*  9555 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9556 */                     }
/*  9557 */                     $ret = Sk.abstr.sattr(i, 'control', $binop491, true);
/*  9558 */                     $blk = 24; /* allowing case fallthrough */
/*  9559 */                 case 24:
/*  9560 */                     /* --- function return or resume suspension --- */
/*  9561 */                     if ($ret && $ret.$isSuspension) {
/*  9562 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 308, 12);
/*  9563 */                     }
/*  9564 */                     //
/*  9565 */                     // line 309:
/*  9566 */                     //             return self.release(I_DEVB)
/*  9567 */                     //             ^
/*  9568 */                     //
/*  9569 */                     $currLineNo = 309;
/*  9570 */                     $currColNo = 12;
/*  9571 */ 
/*  9572 */                     if (self === undefined) {
/*  9573 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9574 */                     }
/*  9575 */                     $ret = Sk.abstr.gattr(self, 'release', true);
/*  9576 */                     $blk = 25; /* allowing case fallthrough */
/*  9577 */                 case 25:
/*  9578 */                     /* --- function return or resume suspension --- */
/*  9579 */                     if ($ret && $ret.$isSuspension) {
/*  9580 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 309, 19);
/*  9581 */                     }
/*  9582 */                     var $lattr492 = $ret;
/*  9583 */                     var $loadgbl493 = Sk.misceval.loadname('I_DEVB', $gbl);
/*  9584 */                     $ret;
/*  9585 */                     $ret = Sk.misceval.callsimOrSuspend($lattr492, $loadgbl493);
/*  9586 */                     $blk = 26; /* allowing case fallthrough */
/*  9587 */                 case 26:
/*  9588 */                     /* --- function return or resume suspension --- */
/*  9589 */                     if ($ret && $ret.$isSuspension) {
/*  9590 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 309, 19);
/*  9591 */                     }
/*  9592 */                     var $call494 = $ret;
/*  9593 */                     //
/*  9594 */                     // line 309:
/*  9595 */                     //             return self.release(I_DEVB)
/*  9596 */                     //                    ^
/*  9597 */                     //
/*  9598 */                     $currLineNo = 309;
/*  9599 */                     $currColNo = 19;
/*  9600 */ 
/*  9601 */                     return $call494;
/*  9602 */                     $blk = 12; /* jump */
/*  9603 */                     continue;
/*  9604 */                 }
/*  9605 */             } catch (err) {
/*  9606 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9607 */                     err = new Sk.builtin.ExternalError(err);
/*  9608 */                 }
/*  9609 */                 err.traceback.push({
/*  9610 */                     lineno: $currLineNo,
/*  9611 */                     colno: $currColNo,
/*  9612 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9613 */                 });
/*  9614 */                 if ($exc.length > 0) {
/*  9615 */                     $err = err;
/*  9616 */                     $blk = $exc.pop();
/*  9617 */                     continue;
/*  9618 */                 } else {
/*  9619 */                     throw err;
/*  9620 */                 }
/*  9621 */             }
/*  9622 */         }
/*  9623 */     });
/*  9624 */     var $scope501 = (function $WorkTask$class_outer($globals, $locals, $rest) {
/*  9625 */         var $gbl = $globals,
/*  9626 */             $loc = $locals;
/*  9627 */         (function $WorkTask$_closure() {
/*  9628 */             var $blk = 0,
/*  9629 */                 $exc = [],
/*  9630 */                 $ret = undefined,
/*  9631 */                 $postfinally = undefined,
/*  9632 */                 $currLineNo = undefined,
/*  9633 */                 $currColNo = undefined;
/*  9634 */             while (true) {
/*  9635 */                 try {
/*  9636 */                     switch ($blk) {
/*  9637 */                     case 0:
/*  9638 */                         /* --- class entry --- */
/*  9639 */                         //
/*  9640 */                         // line 318:
/*  9641 */                         //     def __init__(self,i,p,w,s,r):
/*  9642 */                         //     ^
/*  9643 */                         //
/*  9644 */                         $currLineNo = 318;
/*  9645 */                         $currColNo = 4;
/*  9646 */ 
/*  9647 */                         $scope502.co_name = new Sk.builtins['str']('__init__');
/*  9648 */                         $scope502.co_varnames = ['self', 'i', 'p', 'w', 's', 'r'];
/*  9649 */                         var $funcobj507 = new Sk.builtins['function']($scope502, $gbl);
/*  9650 */                         $loc.__init__ = $funcobj507;
/*  9651 */                         //
/*  9652 */                         // line 321:
/*  9653 */                         //     def fn(self,pkt,r):
/*  9654 */                         //     ^
/*  9655 */                         //
/*  9656 */                         $currLineNo = 321;
/*  9657 */                         $currColNo = 4;
/*  9658 */ 
/*  9659 */                         $scope508.co_name = new Sk.builtins['str']('fn');
/*  9660 */                         $scope508.co_varnames = ['self', 'pkt', 'r'];
/*  9661 */                         var $funcobj542 = new Sk.builtins['function']($scope508, $gbl);
/*  9662 */                         $loc.fn = $funcobj542;
/*  9663 */                         return;
/*  9664 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9665 */                     }
/*  9666 */                 } catch (err) {
/*  9667 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  9668 */                         err = new Sk.builtin.ExternalError(err);
/*  9669 */                     }
/*  9670 */                     err.traceback.push({
/*  9671 */                         lineno: $currLineNo,
/*  9672 */                         colno: $currColNo,
/*  9673 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9674 */                     });
/*  9675 */                     if ($exc.length > 0) {
/*  9676 */                         $err = err;
/*  9677 */                         $blk = $exc.pop();
/*  9678 */                         continue;
/*  9679 */                     } else {
/*  9680 */                         throw err;
/*  9681 */                     }
/*  9682 */                 }
/*  9683 */             }
/*  9684 */         }).apply(null, $rest);
/*  9685 */     });
/*  9686 */     var $scope502 = (function $__init__503$(self, i, p, w, s, r) {
/*  9687 */         var i, i, p, p, r, r, s, s, self, self, w, w, $loadgbl504, $loadgbl504, $lattr505;
/*  9688 */         var $wakeFromSuspension = function() {
/*  9689 */             var susp = $scope502.$wakingSuspension;
/*  9690 */             delete $scope502.$wakingSuspension;
/*  9691 */             $blk = susp.$blk;
/*  9692 */             $loc = susp.$loc;
/*  9693 */             $gbl = susp.$gbl;
/*  9694 */             $exc = susp.$exc;
/*  9695 */             $err = susp.$err;
/*  9696 */             $postfinally = susp.$postfinally;
/*  9697 */             $currLineNo = susp.$lineno;
/*  9698 */             $currColNo = susp.$colno;
/*  9699 */             Sk.lastYield = Date.now();
/*  9700 */             i = susp.$tmps.i;
/*  9701 */             p = susp.$tmps.p;
/*  9702 */             r = susp.$tmps.r;
/*  9703 */             s = susp.$tmps.s;
/*  9704 */             self = susp.$tmps.self;
/*  9705 */             w = susp.$tmps.w;
/*  9706 */             $loadgbl504 = susp.$tmps.$loadgbl504;
/*  9707 */             $lattr505 = susp.$tmps.$lattr505;
/*  9708 */             try {
/*  9709 */                 $ret = susp.child.resume();
/*  9710 */             } catch (err) {
/*  9711 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9712 */                     err = new Sk.builtin.ExternalError(err);
/*  9713 */                 }
/*  9714 */                 err.traceback.push({
/*  9715 */                     lineno: $currLineNo,
/*  9716 */                     colno: $currColNo,
/*  9717 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9718 */                 });
/*  9719 */                 if ($exc.length > 0) {
/*  9720 */                     $err = err;
/*  9721 */                     $blk = $exc.pop();
/*  9722 */                 } else {
/*  9723 */                     throw err;
/*  9724 */                 }
/*  9725 */             }
/*  9726 */         };
/*  9727 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9728 */             var susp = new Sk.misceval.Suspension();
/*  9729 */             susp.child = $child;
/*  9730 */             susp.resume = function() {
/*  9731 */                 $scope502.$wakingSuspension = susp;
/*  9732 */                 return $scope502();
/*  9733 */             };
/*  9734 */             susp.data = susp.child.data;
/*  9735 */             susp.$blk = $blk;
/*  9736 */             susp.$loc = $loc;
/*  9737 */             susp.$gbl = $gbl;
/*  9738 */             susp.$exc = $exc;
/*  9739 */             susp.$err = $err;
/*  9740 */             susp.$postfinally = $postfinally;
/*  9741 */             susp.$filename = $filename;
/*  9742 */             susp.$lineno = $lineno;
/*  9743 */             susp.$colno = $colno;
/*  9744 */             susp.optional = susp.child.optional;
/*  9745 */             susp.$tmps = {
/*  9746 */                 "i": i,
/*  9747 */                 "p": p,
/*  9748 */                 "r": r,
/*  9749 */                 "s": s,
/*  9750 */                 "self": self,
/*  9751 */                 "w": w,
/*  9752 */                 "$loadgbl504": $loadgbl504,
/*  9753 */                 "$lattr505": $lattr505
/*  9754 */             };
/*  9755 */             return susp;
/*  9756 */         };
/*  9757 */         var $blk = 0,
/*  9758 */             $exc = [],
/*  9759 */             $loc = {},
/*  9760 */             $gbl = this,
/*  9761 */             $err = undefined,
/*  9762 */             $ret = undefined,
/*  9763 */             $postfinally = undefined,
/*  9764 */             $currLineNo = undefined,
/*  9765 */             $currColNo = undefined;
/*  9766 */         if ($scope502.$wakingSuspension !== undefined) {
/*  9767 */             $wakeFromSuspension();
/*  9768 */         } else {
/*  9769 */             Sk.builtin.pyCheckArgs("__init__", arguments, 6, 6, false, false);
/*  9770 */         }
/*  9771 */         while (true) {
/*  9772 */             try {
/*  9773 */                 switch ($blk) {
/*  9774 */                 case 0:
/*  9775 */                     /* --- codeobj entry --- */
/*  9776 */                     if (self === undefined) {
/*  9777 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9778 */                     }
/*  9779 */                     if (i === undefined) {
/*  9780 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9781 */                     }
/*  9782 */                     if (p === undefined) {
/*  9783 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  9784 */                     }
/*  9785 */                     if (w === undefined) {
/*  9786 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  9787 */                     }
/*  9788 */                     if (s === undefined) {
/*  9789 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9790 */                     }
/*  9791 */                     if (r === undefined) {
/*  9792 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9793 */                     }
/*  9794 */ 
/*  9795 */                     //
/*  9796 */                     // line 319:
/*  9797 */                     //         Task.__init__(self,i,p,w,s,r)
/*  9798 */                     //         ^
/*  9799 */                     //
/*  9800 */                     $currLineNo = 319;
/*  9801 */                     $currColNo = 8;
/*  9802 */ 
/*  9803 */                     var $loadgbl504 = Sk.misceval.loadname('Task', $gbl);
/*  9804 */                     $ret = Sk.abstr.gattr($loadgbl504, '__init__', true);
/*  9805 */                     $blk = 1; /* allowing case fallthrough */
/*  9806 */                 case 1:
/*  9807 */                     /* --- function return or resume suspension --- */
/*  9808 */                     if ($ret && $ret.$isSuspension) {
/*  9809 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 319, 8);
/*  9810 */                     }
/*  9811 */                     var $lattr505 = $ret;
/*  9812 */                     if (self === undefined) {
/*  9813 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9814 */                     }
/*  9815 */                     if (i === undefined) {
/*  9816 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/*  9817 */                     }
/*  9818 */                     if (p === undefined) {
/*  9819 */                         throw new Sk.builtin.UnboundLocalError('local variable \'p\' referenced before assignment');
/*  9820 */                     }
/*  9821 */                     if (w === undefined) {
/*  9822 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/*  9823 */                     }
/*  9824 */                     if (s === undefined) {
/*  9825 */                         throw new Sk.builtin.UnboundLocalError('local variable \'s\' referenced before assignment');
/*  9826 */                     }
/*  9827 */                     if (r === undefined) {
/*  9828 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/*  9829 */                     }
/*  9830 */                     $ret;
/*  9831 */                     $ret = Sk.misceval.callsimOrSuspend($lattr505, self, i, p, w, s, r);
/*  9832 */                     $blk = 2; /* allowing case fallthrough */
/*  9833 */                 case 2:
/*  9834 */                     /* --- function return or resume suspension --- */
/*  9835 */                     if ($ret && $ret.$isSuspension) {
/*  9836 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 319, 8);
/*  9837 */                     }
/*  9838 */                     var $call506 = $ret;
/*  9839 */                     //
/*  9840 */                     // line 319:
/*  9841 */                     //         Task.__init__(self,i,p,w,s,r)
/*  9842 */                     //         ^
/*  9843 */                     //
/*  9844 */                     $currLineNo = 319;
/*  9845 */                     $currColNo = 8;
/*  9846 */ 
/*  9847 */                     return Sk.builtin.none.none$;
/*  9848 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9849 */                 }
/*  9850 */             } catch (err) {
/*  9851 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9852 */                     err = new Sk.builtin.ExternalError(err);
/*  9853 */                 }
/*  9854 */                 err.traceback.push({
/*  9855 */                     lineno: $currLineNo,
/*  9856 */                     colno: $currColNo,
/*  9857 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9858 */                 });
/*  9859 */                 if ($exc.length > 0) {
/*  9860 */                     $err = err;
/*  9861 */                     $blk = $exc.pop();
/*  9862 */                     continue;
/*  9863 */                 } else {
/*  9864 */                     throw err;
/*  9865 */                 }
/*  9866 */             }
/*  9867 */         }
/*  9868 */     });
/*  9869 */     var $scope508 = (function $fn509$(self, pkt, r) {
/*  9870 */         var dest, i, w; /* locals */
/*  9871 */         var dest, dest, dest, dest, i, i, pkt, pkt, pkt, pkt, pkt, pkt, r, r, self, self, self, w, w, w, w, w, w, w, w, $loadgbl510, $loadgbl511, $compareres514, $lattr517, $lattr519, $compareres520, $loadgbl521, $iter527, $loadgbl526, $iter527, $lattr529, $inplbinopattr530, $lattr531, $compareres532, $loadgbl535, $loadgbl535, $lattr536, $binop537, $binop538, $loadgbl535, $lattr536, $binop537, $binop538, $lattr539, $lattr540;
/*  9872 */         var $wakeFromSuspension = function() {
/*  9873 */             var susp = $scope508.$wakingSuspension;
/*  9874 */             delete $scope508.$wakingSuspension;
/*  9875 */             $blk = susp.$blk;
/*  9876 */             $loc = susp.$loc;
/*  9877 */             $gbl = susp.$gbl;
/*  9878 */             $exc = susp.$exc;
/*  9879 */             $err = susp.$err;
/*  9880 */             $postfinally = susp.$postfinally;
/*  9881 */             $currLineNo = susp.$lineno;
/*  9882 */             $currColNo = susp.$colno;
/*  9883 */             Sk.lastYield = Date.now();
/*  9884 */             dest = susp.$tmps.dest;
/*  9885 */             i = susp.$tmps.i;
/*  9886 */             pkt = susp.$tmps.pkt;
/*  9887 */             r = susp.$tmps.r;
/*  9888 */             self = susp.$tmps.self;
/*  9889 */             w = susp.$tmps.w;
/*  9890 */             $loadgbl510 = susp.$tmps.$loadgbl510;
/*  9891 */             $loadgbl511 = susp.$tmps.$loadgbl511;
/*  9892 */             $compareres514 = susp.$tmps.$compareres514;
/*  9893 */             $lattr517 = susp.$tmps.$lattr517;
/*  9894 */             $lattr519 = susp.$tmps.$lattr519;
/*  9895 */             $compareres520 = susp.$tmps.$compareres520;
/*  9896 */             $loadgbl521 = susp.$tmps.$loadgbl521;
/*  9897 */             $iter527 = susp.$tmps.$iter527;
/*  9898 */             $loadgbl526 = susp.$tmps.$loadgbl526;
/*  9899 */             $lattr529 = susp.$tmps.$lattr529;
/*  9900 */             $inplbinopattr530 = susp.$tmps.$inplbinopattr530;
/*  9901 */             $lattr531 = susp.$tmps.$lattr531;
/*  9902 */             $compareres532 = susp.$tmps.$compareres532;
/*  9903 */             $loadgbl535 = susp.$tmps.$loadgbl535;
/*  9904 */             $lattr536 = susp.$tmps.$lattr536;
/*  9905 */             $binop537 = susp.$tmps.$binop537;
/*  9906 */             $binop538 = susp.$tmps.$binop538;
/*  9907 */             $lattr539 = susp.$tmps.$lattr539;
/*  9908 */             $lattr540 = susp.$tmps.$lattr540;
/*  9909 */             try {
/*  9910 */                 $ret = susp.child.resume();
/*  9911 */             } catch (err) {
/*  9912 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  9913 */                     err = new Sk.builtin.ExternalError(err);
/*  9914 */                 }
/*  9915 */                 err.traceback.push({
/*  9916 */                     lineno: $currLineNo,
/*  9917 */                     colno: $currColNo,
/*  9918 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/*  9919 */                 });
/*  9920 */                 if ($exc.length > 0) {
/*  9921 */                     $err = err;
/*  9922 */                     $blk = $exc.pop();
/*  9923 */                 } else {
/*  9924 */                     throw err;
/*  9925 */                 }
/*  9926 */             }
/*  9927 */         };
/*  9928 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  9929 */             var susp = new Sk.misceval.Suspension();
/*  9930 */             susp.child = $child;
/*  9931 */             susp.resume = function() {
/*  9932 */                 $scope508.$wakingSuspension = susp;
/*  9933 */                 return $scope508();
/*  9934 */             };
/*  9935 */             susp.data = susp.child.data;
/*  9936 */             susp.$blk = $blk;
/*  9937 */             susp.$loc = $loc;
/*  9938 */             susp.$gbl = $gbl;
/*  9939 */             susp.$exc = $exc;
/*  9940 */             susp.$err = $err;
/*  9941 */             susp.$postfinally = $postfinally;
/*  9942 */             susp.$filename = $filename;
/*  9943 */             susp.$lineno = $lineno;
/*  9944 */             susp.$colno = $colno;
/*  9945 */             susp.optional = susp.child.optional;
/*  9946 */             susp.$tmps = {
/*  9947 */                 "dest": dest,
/*  9948 */                 "i": i,
/*  9949 */                 "pkt": pkt,
/*  9950 */                 "r": r,
/*  9951 */                 "self": self,
/*  9952 */                 "w": w,
/*  9953 */                 "$loadgbl510": $loadgbl510,
/*  9954 */                 "$loadgbl511": $loadgbl511,
/*  9955 */                 "$compareres514": $compareres514,
/*  9956 */                 "$lattr517": $lattr517,
/*  9957 */                 "$lattr519": $lattr519,
/*  9958 */                 "$compareres520": $compareres520,
/*  9959 */                 "$loadgbl521": $loadgbl521,
/*  9960 */                 "$iter527": $iter527,
/*  9961 */                 "$loadgbl526": $loadgbl526,
/*  9962 */                 "$lattr529": $lattr529,
/*  9963 */                 "$inplbinopattr530": $inplbinopattr530,
/*  9964 */                 "$lattr531": $lattr531,
/*  9965 */                 "$compareres532": $compareres532,
/*  9966 */                 "$loadgbl535": $loadgbl535,
/*  9967 */                 "$lattr536": $lattr536,
/*  9968 */                 "$binop537": $binop537,
/*  9969 */                 "$binop538": $binop538,
/*  9970 */                 "$lattr539": $lattr539,
/*  9971 */                 "$lattr540": $lattr540
/*  9972 */             };
/*  9973 */             return susp;
/*  9974 */         };
/*  9975 */         var $blk = 0,
/*  9976 */             $exc = [],
/*  9977 */             $loc = {},
/*  9978 */             $gbl = this,
/*  9979 */             $err = undefined,
/*  9980 */             $ret = undefined,
/*  9981 */             $postfinally = undefined,
/*  9982 */             $currLineNo = undefined,
/*  9983 */             $currColNo = undefined;
/*  9984 */         if ($scope508.$wakingSuspension !== undefined) {
/*  9985 */             $wakeFromSuspension();
/*  9986 */         } else {
/*  9987 */             Sk.builtin.pyCheckArgs("fn", arguments, 3, 3, false, false);
/*  9988 */         }
/*  9989 */         while (true) {
/*  9990 */             try {
/*  9991 */                 switch ($blk) {
/*  9992 */                 case 0:
/*  9993 */                     /* --- codeobj entry --- */
/*  9994 */                     if (self === undefined) {
/*  9995 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9996 */                     }
/*  9997 */                     if (pkt === undefined) {
/*  9998 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/*  9999 */                     }
/* 10000 */                     if (r === undefined) {
/* 10001 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10002 */                     }
/* 10003 */ 
/* 10004 */                     //
/* 10005 */                     // line 322:
/* 10006 */                     //         w = r
/* 10007 */                     //         ^
/* 10008 */                     //
/* 10009 */                     $currLineNo = 322;
/* 10010 */                     $currColNo = 8;
/* 10011 */ 
/* 10012 */                     if (r === undefined) {
/* 10013 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 10014 */                     }
/* 10015 */                     w = r;
/* 10016 */                     //
/* 10017 */                     // line 323:
/* 10018 */                     //         assert isinstance(w, WorkerTaskRec)
/* 10019 */                     //         ^
/* 10020 */                     //
/* 10021 */                     $currLineNo = 323;
/* 10022 */                     $currColNo = 8;
/* 10023 */ 
/* 10024 */                     var $loadgbl510 = Sk.misceval.loadname('isinstance', $gbl);
/* 10025 */                     if (w === undefined) {
/* 10026 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10027 */                     }
/* 10028 */                     var $loadgbl511 = Sk.misceval.loadname('WorkerTaskRec', $gbl);
/* 10029 */                     $ret;
/* 10030 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl510, w, $loadgbl511);
/* 10031 */                     $blk = 1; /* allowing case fallthrough */
/* 10032 */                 case 1:
/* 10033 */                     /* --- function return or resume suspension --- */
/* 10034 */                     if ($ret && $ret.$isSuspension) {
/* 10035 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 323, 15);
/* 10036 */                     }
/* 10037 */                     var $call512 = $ret;
/* 10038 */                     //
/* 10039 */                     // line 323:
/* 10040 */                     //         assert isinstance(w, WorkerTaskRec)
/* 10041 */                     //                ^
/* 10042 */                     //
/* 10043 */                     $currLineNo = 323;
/* 10044 */                     $currColNo = 15;
/* 10045 */ 
/* 10046 */                     var $jtrue513 = ($call512 === true || Sk.misceval.isTrue($call512));
/* 10047 */                     if ($jtrue513) { /*test passed */
/* 10048 */                         $blk = 2;
/* 10049 */                         continue;
/* 10050 */                     }
/* 10051 */                     throw new Sk.builtin.AssertionError();
/* 10052 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10053 */                 case 2:
/* 10054 */                     /* --- end --- */
/* 10055 */                     //
/* 10056 */                     // line 324:
/* 10057 */                     //         if pkt is None:
/* 10058 */                     //         ^
/* 10059 */                     //
/* 10060 */                     $currLineNo = 324;
/* 10061 */                     $currColNo = 8;
/* 10062 */ 
/* 10063 */                     if (pkt === undefined) {
/* 10064 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10065 */                     }
/* 10066 */                     var $compareres514 = null;
/* 10067 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(pkt, Sk.builtin.none.none$, 'Is', true));
/* 10068 */                     $blk = 5; /* allowing case fallthrough */
/* 10069 */                 case 5:
/* 10070 */                     /* --- function return or resume suspension --- */
/* 10071 */                     if ($ret && $ret.$isSuspension) {
/* 10072 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 324, 11);
/* 10073 */                     }
/* 10074 */                     $compareres514 = $ret;
/* 10075 */                     var $jfalse515 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10076 */                     if ($jfalse515) { /*test failed */
/* 10077 */                         $blk = 4;
/* 10078 */                         continue;
/* 10079 */                     }
/* 10080 */                     $blk = 4; /* allowing case fallthrough */
/* 10081 */                 case 4:
/* 10082 */                     /* --- done --- */
/* 10083 */                     var $jfalse516 = ($compareres514 === false || !Sk.misceval.isTrue($compareres514));
/* 10084 */                     if ($jfalse516) { /*test failed */
/* 10085 */                         $blk = 3;
/* 10086 */                         continue;
/* 10087 */                     }
/* 10088 */                     //
/* 10089 */                     // line 325:
/* 10090 */                     //             return self.waitTask()
/* 10091 */                     //             ^
/* 10092 */                     //
/* 10093 */                     $currLineNo = 325;
/* 10094 */                     $currColNo = 12;
/* 10095 */ 
/* 10096 */                     if (self === undefined) {
/* 10097 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10098 */                     }
/* 10099 */                     $ret = Sk.abstr.gattr(self, 'waitTask', true);
/* 10100 */                     $blk = 6; /* allowing case fallthrough */
/* 10101 */                 case 6:
/* 10102 */                     /* --- function return or resume suspension --- */
/* 10103 */                     if ($ret && $ret.$isSuspension) {
/* 10104 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 325, 19);
/* 10105 */                     }
/* 10106 */                     var $lattr517 = $ret;
/* 10107 */                     $ret;
/* 10108 */                     $ret = Sk.misceval.callsimOrSuspend($lattr517);
/* 10109 */                     $blk = 7; /* allowing case fallthrough */
/* 10110 */                 case 7:
/* 10111 */                     /* --- function return or resume suspension --- */
/* 10112 */                     if ($ret && $ret.$isSuspension) {
/* 10113 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 325, 19);
/* 10114 */                     }
/* 10115 */                     var $call518 = $ret;
/* 10116 */                     //
/* 10117 */                     // line 325:
/* 10118 */                     //             return self.waitTask()
/* 10119 */                     //                    ^
/* 10120 */                     //
/* 10121 */                     $currLineNo = 325;
/* 10122 */                     $currColNo = 19;
/* 10123 */ 
/* 10124 */                     return $call518;
/* 10125 */                     $blk = 3; /* allowing case fallthrough */
/* 10126 */                 case 3:
/* 10127 */                     /* --- end of if --- */
/* 10128 */                     //
/* 10129 */                     // line 327:
/* 10130 */                     //         if w.destination == I_HANDLERA:
/* 10131 */                     //         ^
/* 10132 */                     //
/* 10133 */                     $currLineNo = 327;
/* 10134 */                     $currColNo = 8;
/* 10135 */ 
/* 10136 */                     if (w === undefined) {
/* 10137 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10138 */                     }
/* 10139 */                     $ret = Sk.abstr.gattr(w, 'destination', true);
/* 10140 */                     $blk = 10; /* allowing case fallthrough */
/* 10141 */                 case 10:
/* 10142 */                     /* --- function return or resume suspension --- */
/* 10143 */                     if ($ret && $ret.$isSuspension) {
/* 10144 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 327, 11);
/* 10145 */                     }
/* 10146 */                     var $lattr519 = $ret;
/* 10147 */                     var $compareres520 = null;
/* 10148 */                     var $loadgbl521 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 10149 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr519, $loadgbl521, 'Eq', true));
/* 10150 */                     $blk = 12; /* allowing case fallthrough */
/* 10151 */                 case 12:
/* 10152 */                     /* --- function return or resume suspension --- */
/* 10153 */                     if ($ret && $ret.$isSuspension) {
/* 10154 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 327, 11);
/* 10155 */                     }
/* 10156 */                     $compareres520 = $ret;
/* 10157 */                     var $jfalse522 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10158 */                     if ($jfalse522) { /*test failed */
/* 10159 */                         $blk = 11;
/* 10160 */                         continue;
/* 10161 */                     }
/* 10162 */                     $blk = 11; /* allowing case fallthrough */
/* 10163 */                 case 11:
/* 10164 */                     /* --- done --- */
/* 10165 */                     var $jfalse523 = ($compareres520 === false || !Sk.misceval.isTrue($compareres520));
/* 10166 */                     if ($jfalse523) { /*test failed */
/* 10167 */                         $blk = 9;
/* 10168 */                         continue;
/* 10169 */                     }
/* 10170 */                     //
/* 10171 */                     // line 328:
/* 10172 */                     //             dest = I_HANDLERB
/* 10173 */                     //             ^
/* 10174 */                     //
/* 10175 */                     $currLineNo = 328;
/* 10176 */                     $currColNo = 12;
/* 10177 */ 
/* 10178 */                     var $loadgbl524 = Sk.misceval.loadname('I_HANDLERB', $gbl);
/* 10179 */                     dest = $loadgbl524;
/* 10180 */                     $blk = 8; /* allowing case fallthrough */
/* 10181 */                 case 8:
/* 10182 */                     /* --- end of if --- */
/* 10183 */                     //
/* 10184 */                     // line 332:
/* 10185 */                     //         w.destination = dest
/* 10186 */                     //         ^
/* 10187 */                     //
/* 10188 */                     $currLineNo = 332;
/* 10189 */                     $currColNo = 8;
/* 10190 */ 
/* 10191 */                     if (dest === undefined) {
/* 10192 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dest\' referenced before assignment');
/* 10193 */                     }
/* 10194 */                     if (w === undefined) {
/* 10195 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10196 */                     }
/* 10197 */                     $ret = Sk.abstr.sattr(w, 'destination', dest, true);
/* 10198 */                     $blk = 13; /* allowing case fallthrough */
/* 10199 */                 case 13:
/* 10200 */                     /* --- function return or resume suspension --- */
/* 10201 */                     if ($ret && $ret.$isSuspension) {
/* 10202 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 332, 8);
/* 10203 */                     }
/* 10204 */                     //
/* 10205 */                     // line 333:
/* 10206 */                     //         pkt.ident = dest
/* 10207 */                     //         ^
/* 10208 */                     //
/* 10209 */                     $currLineNo = 333;
/* 10210 */                     $currColNo = 8;
/* 10211 */ 
/* 10212 */                     if (dest === undefined) {
/* 10213 */                         throw new Sk.builtin.UnboundLocalError('local variable \'dest\' referenced before assignment');
/* 10214 */                     }
/* 10215 */                     if (pkt === undefined) {
/* 10216 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10217 */                     }
/* 10218 */                     $ret = Sk.abstr.sattr(pkt, 'ident', dest, true);
/* 10219 */                     $blk = 14; /* allowing case fallthrough */
/* 10220 */                 case 14:
/* 10221 */                     /* --- function return or resume suspension --- */
/* 10222 */                     if ($ret && $ret.$isSuspension) {
/* 10223 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 333, 8);
/* 10224 */                     }
/* 10225 */                     //
/* 10226 */                     // line 334:
/* 10227 */                     //         pkt.datum = 0
/* 10228 */                     //         ^
/* 10229 */                     //
/* 10230 */                     $currLineNo = 334;
/* 10231 */                     $currColNo = 8;
/* 10232 */ 
/* 10233 */                     if (pkt === undefined) {
/* 10234 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10235 */                     }
/* 10236 */                     $ret = Sk.abstr.sattr(pkt, 'datum', new Sk.builtin.int_(0), true);
/* 10237 */                     $blk = 15; /* allowing case fallthrough */
/* 10238 */                 case 15:
/* 10239 */                     /* --- function return or resume suspension --- */
/* 10240 */                     if ($ret && $ret.$isSuspension) {
/* 10241 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 334, 8);
/* 10242 */                     }
/* 10243 */                     //
/* 10244 */                     // line 336:
/* 10245 */                     //         for i in BUFSIZE_RANGE: # xrange(BUFSIZE)
/* 10246 */                     //         ^
/* 10247 */                     //
/* 10248 */                     $currLineNo = 336;
/* 10249 */                     $currColNo = 8;
/* 10250 */ 
/* 10251 */                     var $loadgbl526 = Sk.misceval.loadname('BUFSIZE_RANGE', $gbl);
/* 10252 */                     var $iter527 = Sk.abstr.iter($loadgbl526);
/* 10253 */                     $blk = 16; /* allowing case fallthrough */
/* 10254 */                 case 16:
/* 10255 */                     /* --- for start --- */
/* 10256 */                     $ret = Sk.abstr.iternext($iter527, true);
/* 10257 */                     $blk = 19; /* allowing case fallthrough */
/* 10258 */                 case 19:
/* 10259 */                     /* --- function return or resume suspension --- */
/* 10260 */                     if ($ret && $ret.$isSuspension) {
/* 10261 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 336, 8);
/* 10262 */                     }
/* 10263 */                     var $next528 = $ret;
/* 10264 */                     if ($next528 === undefined) {
/* 10265 */                         $blk = 17;
/* 10266 */                         continue;
/* 10267 */                     }
/* 10268 */                     i = $next528;
/* 10269 */                     //
/* 10270 */                     // line 337:
/* 10271 */                     //             w.count += 1
/* 10272 */                     //             ^
/* 10273 */                     //
/* 10274 */                     $currLineNo = 337;
/* 10275 */                     $currColNo = 12;
/* 10276 */ 
/* 10277 */                     if (w === undefined) {
/* 10278 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10279 */                     }
/* 10280 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 10281 */                     $blk = 20; /* allowing case fallthrough */
/* 10282 */                 case 20:
/* 10283 */                     /* --- function return or resume suspension --- */
/* 10284 */                     if ($ret && $ret.$isSuspension) {
/* 10285 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 337, 12);
/* 10286 */                     }
/* 10287 */                     var $lattr529 = $ret;
/* 10288 */                     var $inplbinopattr530 = Sk.abstr.numberInplaceBinOp($lattr529, new Sk.builtin.int_(1), 'Add');
/* 10289 */                     $ret = undefined;
/* 10290 */                     if ($inplbinopattr530 !== undefined) {
/* 10291 */                         $ret = Sk.abstr.sattr(w, 'count', $inplbinopattr530, true);
/* 10292 */                     }
/* 10293 */                     $blk = 21; /* allowing case fallthrough */
/* 10294 */                 case 21:
/* 10295 */                     /* --- function return or resume suspension --- */
/* 10296 */                     if ($ret && $ret.$isSuspension) {
/* 10297 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 337, 12);
/* 10298 */                     }
/* 10299 */                     //
/* 10300 */                     // line 338:
/* 10301 */                     //             if w.count > 26:
/* 10302 */                     //             ^
/* 10303 */                     //
/* 10304 */                     $currLineNo = 338;
/* 10305 */                     $currColNo = 12;
/* 10306 */ 
/* 10307 */                     if (w === undefined) {
/* 10308 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10309 */                     }
/* 10310 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 10311 */                     $blk = 23; /* allowing case fallthrough */
/* 10312 */                 case 23:
/* 10313 */                     /* --- function return or resume suspension --- */
/* 10314 */                     if ($ret && $ret.$isSuspension) {
/* 10315 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 338, 15);
/* 10316 */                     }
/* 10317 */                     var $lattr531 = $ret;
/* 10318 */                     var $compareres532 = null;
/* 10319 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr531, new Sk.builtin.int_(26), 'Gt', true));
/* 10320 */                     $blk = 25; /* allowing case fallthrough */
/* 10321 */                 case 25:
/* 10322 */                     /* --- function return or resume suspension --- */
/* 10323 */                     if ($ret && $ret.$isSuspension) {
/* 10324 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 338, 15);
/* 10325 */                     }
/* 10326 */                     $compareres532 = $ret;
/* 10327 */                     var $jfalse533 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10328 */                     if ($jfalse533) { /*test failed */
/* 10329 */                         $blk = 24;
/* 10330 */                         continue;
/* 10331 */                     }
/* 10332 */                     $blk = 24; /* allowing case fallthrough */
/* 10333 */                 case 24:
/* 10334 */                     /* --- done --- */
/* 10335 */                     var $jfalse534 = ($compareres532 === false || !Sk.misceval.isTrue($compareres532));
/* 10336 */                     if ($jfalse534) { /*test failed */
/* 10337 */                         $blk = 22;
/* 10338 */                         continue;
/* 10339 */                     }
/* 10340 */                     //
/* 10341 */                     // line 339:
/* 10342 */                     //                 w.count = 1
/* 10343 */                     //                 ^
/* 10344 */                     //
/* 10345 */                     $currLineNo = 339;
/* 10346 */                     $currColNo = 16;
/* 10347 */ 
/* 10348 */                     if (w === undefined) {
/* 10349 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10350 */                     }
/* 10351 */                     $ret = Sk.abstr.sattr(w, 'count', new Sk.builtin.int_(1), true);
/* 10352 */                     $blk = 26; /* allowing case fallthrough */
/* 10353 */                 case 26:
/* 10354 */                     /* --- function return or resume suspension --- */
/* 10355 */                     if ($ret && $ret.$isSuspension) {
/* 10356 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 339, 16);
/* 10357 */                     }
/* 10358 */                     $blk = 22; /* allowing case fallthrough */
/* 10359 */                 case 22:
/* 10360 */                     /* --- end of if --- */
/* 10361 */                     //
/* 10362 */                     // line 340:
/* 10363 */                     //             pkt.data[i] = A + w.count - 1
/* 10364 */                     //             ^
/* 10365 */                     //
/* 10366 */                     $currLineNo = 340;
/* 10367 */                     $currColNo = 12;
/* 10368 */ 
/* 10369 */                     var $loadgbl535 = Sk.misceval.loadname('A', $gbl);
/* 10370 */                     if (w === undefined) {
/* 10371 */                         throw new Sk.builtin.UnboundLocalError('local variable \'w\' referenced before assignment');
/* 10372 */                     }
/* 10373 */                     $ret = Sk.abstr.gattr(w, 'count', true);
/* 10374 */                     $blk = 27; /* allowing case fallthrough */
/* 10375 */                 case 27:
/* 10376 */                     /* --- function return or resume suspension --- */
/* 10377 */                     if ($ret && $ret.$isSuspension) {
/* 10378 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 340, 30);
/* 10379 */                     }
/* 10380 */                     var $lattr536 = $ret;
/* 10381 */                     var $binop537 = Sk.abstr.numberBinOp($loadgbl535, $lattr536, 'Add');
/* 10382 */                     var $binop538 = Sk.abstr.numberBinOp($binop537, new Sk.builtin.int_(1), 'Sub');
/* 10383 */                     if (pkt === undefined) {
/* 10384 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10385 */                     }
/* 10386 */                     $ret = Sk.abstr.gattr(pkt, 'data', true);
/* 10387 */                     $blk = 28; /* allowing case fallthrough */
/* 10388 */                 case 28:
/* 10389 */                     /* --- function return or resume suspension --- */
/* 10390 */                     if ($ret && $ret.$isSuspension) {
/* 10391 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 340, 12);
/* 10392 */                     }
/* 10393 */                     var $lattr539 = $ret;
/* 10394 */                     if (i === undefined) {
/* 10395 */                         throw new Sk.builtin.UnboundLocalError('local variable \'i\' referenced before assignment');
/* 10396 */                     }
/* 10397 */                     $ret = Sk.abstr.objectSetItem($lattr539, i, $binop538, true);
/* 10398 */                     $blk = 29; /* allowing case fallthrough */
/* 10399 */                 case 29:
/* 10400 */                     /* --- function return or resume suspension --- */
/* 10401 */                     if ($ret && $ret.$isSuspension) {
/* 10402 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', $currLineNo, $currColNo);
/* 10403 */                     }
/* 10404 */                     $blk = 16; /* jump */
/* 10405 */                     continue;
/* 10406 */                 case 9:
/* 10407 */                     /* --- next branch of if --- */
/* 10408 */                     //
/* 10409 */                     // line 330:
/* 10410 */                     //             dest = I_HANDLERA
/* 10411 */                     //             ^
/* 10412 */                     //
/* 10413 */                     $currLineNo = 330;
/* 10414 */                     $currColNo = 12;
/* 10415 */ 
/* 10416 */                     var $loadgbl525 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 10417 */                     dest = $loadgbl525;
/* 10418 */                     $blk = 8; /* jump */
/* 10419 */                     continue;
/* 10420 */                 case 17:
/* 10421 */                     /* --- for cleanup --- */
/* 10422 */                     $blk = 18; /* allowing case fallthrough */
/* 10423 */                 case 18:
/* 10424 */                     /* --- for end --- */
/* 10425 */                     //
/* 10426 */                     // line 342:
/* 10427 */                     //         return self.qpkt(pkt)
/* 10428 */                     //         ^
/* 10429 */                     //
/* 10430 */                     $currLineNo = 342;
/* 10431 */                     $currColNo = 8;
/* 10432 */ 
/* 10433 */                     if (self === undefined) {
/* 10434 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10435 */                     }
/* 10436 */                     $ret = Sk.abstr.gattr(self, 'qpkt', true);
/* 10437 */                     $blk = 30; /* allowing case fallthrough */
/* 10438 */                 case 30:
/* 10439 */                     /* --- function return or resume suspension --- */
/* 10440 */                     if ($ret && $ret.$isSuspension) {
/* 10441 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 342, 15);
/* 10442 */                     }
/* 10443 */                     var $lattr540 = $ret;
/* 10444 */                     if (pkt === undefined) {
/* 10445 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pkt\' referenced before assignment');
/* 10446 */                     }
/* 10447 */                     $ret;
/* 10448 */                     $ret = Sk.misceval.callsimOrSuspend($lattr540, pkt);
/* 10449 */                     $blk = 31; /* allowing case fallthrough */
/* 10450 */                 case 31:
/* 10451 */                     /* --- function return or resume suspension --- */
/* 10452 */                     if ($ret && $ret.$isSuspension) {
/* 10453 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 342, 15);
/* 10454 */                     }
/* 10455 */                     var $call541 = $ret;
/* 10456 */                     //
/* 10457 */                     // line 342:
/* 10458 */                     //         return self.qpkt(pkt)
/* 10459 */                     //                ^
/* 10460 */                     //
/* 10461 */                     $currLineNo = 342;
/* 10462 */                     $currColNo = 15;
/* 10463 */ 
/* 10464 */                     return $call541;
/* 10465 */                     return Sk.builtin.none.none$;
/* 10466 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10467 */                 }
/* 10468 */             } catch (err) {
/* 10469 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10470 */                     err = new Sk.builtin.ExternalError(err);
/* 10471 */                 }
/* 10472 */                 err.traceback.push({
/* 10473 */                     lineno: $currLineNo,
/* 10474 */                     colno: $currColNo,
/* 10475 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10476 */                 });
/* 10477 */                 if ($exc.length > 0) {
/* 10478 */                     $err = err;
/* 10479 */                     $blk = $exc.pop();
/* 10480 */                     continue;
/* 10481 */                 } else {
/* 10482 */                     throw err;
/* 10483 */                 }
/* 10484 */             }
/* 10485 */         }
/* 10486 */     });
/* 10487 */     var $scope545 = (function $schedule546$() {
/* 10488 */         var pkt, t; /* locals */
/* 10489 */         var pkt, t, t, t, t, t, t, t, t, $loadgbl547, $compareres549, $lattr554, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $lattr565, $binop566, $loadgbl560, $loadgbl561, $loadgbl562, $str563, $call564, $lattr565, $binop566, $call567, $lattr569;
/* 10490 */         var $wakeFromSuspension = function() {
/* 10491 */             var susp = $scope545.$wakingSuspension;
/* 10492 */             delete $scope545.$wakingSuspension;
/* 10493 */             $blk = susp.$blk;
/* 10494 */             $loc = susp.$loc;
/* 10495 */             $gbl = susp.$gbl;
/* 10496 */             $exc = susp.$exc;
/* 10497 */             $err = susp.$err;
/* 10498 */             $postfinally = susp.$postfinally;
/* 10499 */             $currLineNo = susp.$lineno;
/* 10500 */             $currColNo = susp.$colno;
/* 10501 */             Sk.lastYield = Date.now();
/* 10502 */             pkt = susp.$tmps.pkt;
/* 10503 */             t = susp.$tmps.t;
/* 10504 */             $loadgbl547 = susp.$tmps.$loadgbl547;
/* 10505 */             $compareres549 = susp.$tmps.$compareres549;
/* 10506 */             $lattr554 = susp.$tmps.$lattr554;
/* 10507 */             $loadgbl560 = susp.$tmps.$loadgbl560;
/* 10508 */             $loadgbl561 = susp.$tmps.$loadgbl561;
/* 10509 */             $loadgbl562 = susp.$tmps.$loadgbl562;
/* 10510 */             $str563 = susp.$tmps.$str563;
/* 10511 */             $call564 = susp.$tmps.$call564;
/* 10512 */             $lattr565 = susp.$tmps.$lattr565;
/* 10513 */             $binop566 = susp.$tmps.$binop566;
/* 10514 */             $call567 = susp.$tmps.$call567;
/* 10515 */             $lattr569 = susp.$tmps.$lattr569;
/* 10516 */             try {
/* 10517 */                 $ret = susp.child.resume();
/* 10518 */             } catch (err) {
/* 10519 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10520 */                     err = new Sk.builtin.ExternalError(err);
/* 10521 */                 }
/* 10522 */                 err.traceback.push({
/* 10523 */                     lineno: $currLineNo,
/* 10524 */                     colno: $currColNo,
/* 10525 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10526 */                 });
/* 10527 */                 if ($exc.length > 0) {
/* 10528 */                     $err = err;
/* 10529 */                     $blk = $exc.pop();
/* 10530 */                 } else {
/* 10531 */                     throw err;
/* 10532 */                 }
/* 10533 */             }
/* 10534 */         };
/* 10535 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10536 */             var susp = new Sk.misceval.Suspension();
/* 10537 */             susp.child = $child;
/* 10538 */             susp.resume = function() {
/* 10539 */                 $scope545.$wakingSuspension = susp;
/* 10540 */                 return $scope545();
/* 10541 */             };
/* 10542 */             susp.data = susp.child.data;
/* 10543 */             susp.$blk = $blk;
/* 10544 */             susp.$loc = $loc;
/* 10545 */             susp.$gbl = $gbl;
/* 10546 */             susp.$exc = $exc;
/* 10547 */             susp.$err = $err;
/* 10548 */             susp.$postfinally = $postfinally;
/* 10549 */             susp.$filename = $filename;
/* 10550 */             susp.$lineno = $lineno;
/* 10551 */             susp.$colno = $colno;
/* 10552 */             susp.optional = susp.child.optional;
/* 10553 */             susp.$tmps = {
/* 10554 */                 "pkt": pkt,
/* 10555 */                 "t": t,
/* 10556 */                 "$loadgbl547": $loadgbl547,
/* 10557 */                 "$compareres549": $compareres549,
/* 10558 */                 "$lattr554": $lattr554,
/* 10559 */                 "$loadgbl560": $loadgbl560,
/* 10560 */                 "$loadgbl561": $loadgbl561,
/* 10561 */                 "$loadgbl562": $loadgbl562,
/* 10562 */                 "$str563": $str563,
/* 10563 */                 "$call564": $call564,
/* 10564 */                 "$lattr565": $lattr565,
/* 10565 */                 "$binop566": $binop566,
/* 10566 */                 "$call567": $call567,
/* 10567 */                 "$lattr569": $lattr569
/* 10568 */             };
/* 10569 */             return susp;
/* 10570 */         };
/* 10571 */         var $blk = 0,
/* 10572 */             $exc = [],
/* 10573 */             $loc = {},
/* 10574 */             $gbl = this,
/* 10575 */             $err = undefined,
/* 10576 */             $ret = undefined,
/* 10577 */             $postfinally = undefined,
/* 10578 */             $currLineNo = undefined,
/* 10579 */             $currColNo = undefined;
/* 10580 */         if ($scope545.$wakingSuspension !== undefined) {
/* 10581 */             $wakeFromSuspension();
/* 10582 */         } else {
/* 10583 */             Sk.builtin.pyCheckArgs("schedule", arguments, 0, 0, false, false);
/* 10584 */         }
/* 10585 */         while (true) {
/* 10586 */             try {
/* 10587 */                 switch ($blk) {
/* 10588 */                 case 0:
/* 10589 */                     /* --- codeobj entry --- */
/* 10590 */                     //
/* 10591 */                     // line 349:
/* 10592 */                     //     t = taskWorkArea.taskList
/* 10593 */                     //     ^
/* 10594 */                     //
/* 10595 */                     $currLineNo = 349;
/* 10596 */                     $currColNo = 4;
/* 10597 */ 
/* 10598 */                     var $loadgbl547 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 10599 */                     $ret = Sk.abstr.gattr($loadgbl547, 'taskList', true);
/* 10600 */                     $blk = 1; /* allowing case fallthrough */
/* 10601 */                 case 1:
/* 10602 */                     /* --- function return or resume suspension --- */
/* 10603 */                     if ($ret && $ret.$isSuspension) {
/* 10604 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 349, 8);
/* 10605 */                     }
/* 10606 */                     var $lattr548 = $ret;
/* 10607 */                     t = $lattr548;
/* 10608 */                     //
/* 10609 */                     // line 350:
/* 10610 */                     //     while t is not None:
/* 10611 */                     //     ^
/* 10612 */                     //
/* 10613 */                     $currLineNo = 350;
/* 10614 */                     $currColNo = 4;
/* 10615 */ 
/* 10616 */                     $blk = 2; /* allowing case fallthrough */
/* 10617 */                 case 2:
/* 10618 */                     /* --- while test --- */
/* 10619 */                     //
/* 10620 */                     // line 350:
/* 10621 */                     //     while t is not None:
/* 10622 */                     //     ^
/* 10623 */                     //
/* 10624 */                     $currLineNo = 350;
/* 10625 */                     $currColNo = 4;
/* 10626 */ 
/* 10627 */                     if (t === undefined) {
/* 10628 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 10629 */                     }
/* 10630 */                     var $compareres549 = null;
/* 10631 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(t, Sk.builtin.none.none$, 'IsNot', true));
/* 10632 */                     $blk = 6; /* allowing case fallthrough */
/* 10633 */                 case 6:
/* 10634 */                     /* --- function return or resume suspension --- */
/* 10635 */                     if ($ret && $ret.$isSuspension) {
/* 10636 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 350, 10);
/* 10637 */                     }
/* 10638 */                     $compareres549 = $ret;
/* 10639 */                     var $jfalse550 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10640 */                     if ($jfalse550) { /*test failed */
/* 10641 */                         $blk = 5;
/* 10642 */                         continue;
/* 10643 */                     }
/* 10644 */                     $blk = 5; /* allowing case fallthrough */
/* 10645 */                 case 5:
/* 10646 */                     /* --- done --- */
/* 10647 */                     var $jfalse551 = ($compareres549 === false || !Sk.misceval.isTrue($compareres549));
/* 10648 */                     if ($jfalse551) { /*test failed */
/* 10649 */                         $blk = 3;
/* 10650 */                         continue;
/* 10651 */                     }
/* 10652 */                     $blk = 4; /* allowing case fallthrough */
/* 10653 */                 case 4:
/* 10654 */                     /* --- while body --- */
/* 10655 */                     //
/* 10656 */                     // line 351:
/* 10657 */                     //         pkt = None
/* 10658 */                     //         ^
/* 10659 */                     //
/* 10660 */                     $currLineNo = 351;
/* 10661 */                     $currColNo = 8;
/* 10662 */ 
/* 10663 */                     pkt = Sk.builtin.none.none$;
/* 10664 */                     //
/* 10665 */                     // line 353:
/* 10666 */                     //         if tracing:
/* 10667 */                     //         ^
/* 10668 */                     //
/* 10669 */                     $currLineNo = 353;
/* 10670 */                     $currColNo = 8;
/* 10671 */ 
/* 10672 */                     var $loadgbl552 = Sk.misceval.loadname('tracing', $gbl);
/* 10673 */                     var $jfalse553 = ($loadgbl552 === false || !Sk.misceval.isTrue($loadgbl552));
/* 10674 */                     if ($jfalse553) { /*test failed */
/* 10675 */                         $blk = 7;
/* 10676 */                         continue;
/* 10677 */                     }
/* 10678 */                     //
/* 10679 */                     // line 354:
/* 10680 */                     //             pass #print("tcb =",t.ident)
/* 10681 */                     //             ^
/* 10682 */                     //
/* 10683 */                     $currLineNo = 354;
/* 10684 */                     $currColNo = 12;
/* 10685 */ 
/* 10686 */                     $blk = 7; /* allowing case fallthrough */
/* 10687 */                 case 7:
/* 10688 */                     /* --- end of if --- */
/* 10689 */                     //
/* 10690 */                     // line 356:
/* 10691 */                     //         if t.isTaskHoldingOrWaiting():
/* 10692 */                     //         ^
/* 10693 */                     //
/* 10694 */                     $currLineNo = 356;
/* 10695 */                     $currColNo = 8;
/* 10696 */ 
/* 10697 */                     if (t === undefined) {
/* 10698 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 10699 */                     }
/* 10700 */                     $ret = Sk.abstr.gattr(t, 'isTaskHoldingOrWaiting', true);
/* 10701 */                     $blk = 10; /* allowing case fallthrough */
/* 10702 */                 case 10:
/* 10703 */                     /* --- function return or resume suspension --- */
/* 10704 */                     if ($ret && $ret.$isSuspension) {
/* 10705 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 356, 11);
/* 10706 */                     }
/* 10707 */                     var $lattr554 = $ret;
/* 10708 */                     $ret;
/* 10709 */                     $ret = Sk.misceval.callsimOrSuspend($lattr554);
/* 10710 */                     $blk = 11; /* allowing case fallthrough */
/* 10711 */                 case 11:
/* 10712 */                     /* --- function return or resume suspension --- */
/* 10713 */                     if ($ret && $ret.$isSuspension) {
/* 10714 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 356, 11);
/* 10715 */                     }
/* 10716 */                     var $call555 = $ret;
/* 10717 */                     //
/* 10718 */                     // line 356:
/* 10719 */                     //         if t.isTaskHoldingOrWaiting():
/* 10720 */                     //            ^
/* 10721 */                     //
/* 10722 */                     $currLineNo = 356;
/* 10723 */                     $currColNo = 11;
/* 10724 */ 
/* 10725 */                     var $jfalse556 = ($call555 === false || !Sk.misceval.isTrue($call555));
/* 10726 */                     if ($jfalse556) { /*test failed */
/* 10727 */                         $blk = 9;
/* 10728 */                         continue;
/* 10729 */                     }
/* 10730 */                     //
/* 10731 */                     // line 357:
/* 10732 */                     //             t = t.link
/* 10733 */                     //             ^
/* 10734 */                     //
/* 10735 */                     $currLineNo = 357;
/* 10736 */                     $currColNo = 12;
/* 10737 */ 
/* 10738 */                     if (t === undefined) {
/* 10739 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 10740 */                     }
/* 10741 */                     $ret = Sk.abstr.gattr(t, 'link', true);
/* 10742 */                     $blk = 12; /* allowing case fallthrough */
/* 10743 */                 case 12:
/* 10744 */                     /* --- function return or resume suspension --- */
/* 10745 */                     if ($ret && $ret.$isSuspension) {
/* 10746 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 357, 16);
/* 10747 */                     }
/* 10748 */                     var $lattr557 = $ret;
/* 10749 */                     t = $lattr557;
/* 10750 */                     $blk = 8; /* allowing case fallthrough */
/* 10751 */                 case 8:
/* 10752 */                     /* --- end of if --- */
/* 10753 */                     $blk = 2; /* jump */
/* 10754 */                     continue;
/* 10755 */                 case 3:
/* 10756 */                     /* --- after while --- */
/* 10757 */                     return Sk.builtin.none.none$;
/* 10758 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10759 */                 case 9:
/* 10760 */                     /* --- next branch of if --- */
/* 10761 */                     //
/* 10762 */                     // line 359:
/* 10763 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 10764 */                     //             ^
/* 10765 */                     //
/* 10766 */                     $currLineNo = 359;
/* 10767 */                     $currColNo = 12;
/* 10768 */ 
/* 10769 */                     var $loadgbl558 = Sk.misceval.loadname('tracing', $gbl);
/* 10770 */                     var $jfalse559 = ($loadgbl558 === false || !Sk.misceval.isTrue($loadgbl558));
/* 10771 */                     if ($jfalse559) { /*test failed */
/* 10772 */                         $blk = 13;
/* 10773 */                         continue;
/* 10774 */                     }
/* 10775 */                     //
/* 10776 */                     // line 359:
/* 10777 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 10778 */                     //                         ^
/* 10779 */                     //
/* 10780 */                     $currLineNo = 359;
/* 10781 */                     $currColNo = 24;
/* 10782 */ 
/* 10783 */                     var $loadgbl560 = Sk.misceval.loadname('trace', $gbl);
/* 10784 */                     var $loadgbl561 = Sk.misceval.loadname('chr', $gbl);
/* 10785 */                     var $loadgbl562 = Sk.misceval.loadname('ord', $gbl);
/* 10786 */                     var $str563 = new Sk.builtins['str']('0');
/* 10787 */                     $ret;
/* 10788 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl562, $str563);
/* 10789 */                     $blk = 14; /* allowing case fallthrough */
/* 10790 */                 case 14:
/* 10791 */                     /* --- function return or resume suspension --- */
/* 10792 */                     if ($ret && $ret.$isSuspension) {
/* 10793 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 34);
/* 10794 */                     }
/* 10795 */                     var $call564 = $ret;
/* 10796 */                     //
/* 10797 */                     // line 359:
/* 10798 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 10799 */                     //                                   ^
/* 10800 */                     //
/* 10801 */                     $currLineNo = 359;
/* 10802 */                     $currColNo = 34;
/* 10803 */ 
/* 10804 */                     if (t === undefined) {
/* 10805 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 10806 */                     }
/* 10807 */                     $ret = Sk.abstr.gattr(t, 'ident', true);
/* 10808 */                     $blk = 15; /* allowing case fallthrough */
/* 10809 */                 case 15:
/* 10810 */                     /* --- function return or resume suspension --- */
/* 10811 */                     if ($ret && $ret.$isSuspension) {
/* 10812 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 43);
/* 10813 */                     }
/* 10814 */                     var $lattr565 = $ret;
/* 10815 */                     var $binop566 = Sk.abstr.numberBinOp($call564, $lattr565, 'Add');
/* 10816 */                     $ret;
/* 10817 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl561, $binop566);
/* 10818 */                     $blk = 16; /* allowing case fallthrough */
/* 10819 */                 case 16:
/* 10820 */                     /* --- function return or resume suspension --- */
/* 10821 */                     if ($ret && $ret.$isSuspension) {
/* 10822 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 30);
/* 10823 */                     }
/* 10824 */                     var $call567 = $ret;
/* 10825 */                     //
/* 10826 */                     // line 359:
/* 10827 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 10828 */                     //                               ^
/* 10829 */                     //
/* 10830 */                     $currLineNo = 359;
/* 10831 */                     $currColNo = 30;
/* 10832 */ 
/* 10833 */                     $ret;
/* 10834 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl560, $call567);
/* 10835 */                     $blk = 17; /* allowing case fallthrough */
/* 10836 */                 case 17:
/* 10837 */                     /* --- function return or resume suspension --- */
/* 10838 */                     if ($ret && $ret.$isSuspension) {
/* 10839 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 359, 24);
/* 10840 */                     }
/* 10841 */                     var $call568 = $ret;
/* 10842 */                     //
/* 10843 */                     // line 359:
/* 10844 */                     //             if tracing: trace(chr(ord("0")+t.ident))
/* 10845 */                     //                         ^
/* 10846 */                     //
/* 10847 */                     $currLineNo = 359;
/* 10848 */                     $currColNo = 24;
/* 10849 */ 
/* 10850 */                     $blk = 13; /* allowing case fallthrough */
/* 10851 */                 case 13:
/* 10852 */                     /* --- end of if --- */
/* 10853 */                     //
/* 10854 */                     // line 360:
/* 10855 */                     //             t = t.runTask()
/* 10856 */                     //             ^
/* 10857 */                     //
/* 10858 */                     $currLineNo = 360;
/* 10859 */                     $currColNo = 12;
/* 10860 */ 
/* 10861 */                     if (t === undefined) {
/* 10862 */                         throw new Sk.builtin.UnboundLocalError('local variable \'t\' referenced before assignment');
/* 10863 */                     }
/* 10864 */                     $ret = Sk.abstr.gattr(t, 'runTask', true);
/* 10865 */                     $blk = 18; /* allowing case fallthrough */
/* 10866 */                 case 18:
/* 10867 */                     /* --- function return or resume suspension --- */
/* 10868 */                     if ($ret && $ret.$isSuspension) {
/* 10869 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 360, 16);
/* 10870 */                     }
/* 10871 */                     var $lattr569 = $ret;
/* 10872 */                     $ret;
/* 10873 */                     $ret = Sk.misceval.callsimOrSuspend($lattr569);
/* 10874 */                     $blk = 19; /* allowing case fallthrough */
/* 10875 */                 case 19:
/* 10876 */                     /* --- function return or resume suspension --- */
/* 10877 */                     if ($ret && $ret.$isSuspension) {
/* 10878 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 360, 16);
/* 10879 */                     }
/* 10880 */                     var $call570 = $ret;
/* 10881 */                     //
/* 10882 */                     // line 360:
/* 10883 */                     //             t = t.runTask()
/* 10884 */                     //                 ^
/* 10885 */                     //
/* 10886 */                     $currLineNo = 360;
/* 10887 */                     $currColNo = 16;
/* 10888 */ 
/* 10889 */                     t = $call570;
/* 10890 */                     $blk = 8; /* jump */
/* 10891 */                     continue;
/* 10892 */                 }
/* 10893 */             } catch (err) {
/* 10894 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10895 */                     err = new Sk.builtin.ExternalError(err);
/* 10896 */                 }
/* 10897 */                 err.traceback.push({
/* 10898 */                     lineno: $currLineNo,
/* 10899 */                     colno: $currColNo,
/* 10900 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10901 */                 });
/* 10902 */                 if ($exc.length > 0) {
/* 10903 */                     $err = err;
/* 10904 */                     $blk = $exc.pop();
/* 10905 */                     continue;
/* 10906 */                 } else {
/* 10907 */                     throw err;
/* 10908 */                 }
/* 10909 */             }
/* 10910 */         }
/* 10911 */     });
/* 10912 */     var $scope573 = (function $Richards$class_outer($globals, $locals, $rest) {
/* 10913 */         var $gbl = $globals,
/* 10914 */             $loc = $locals;
/* 10915 */         (function $Richards$_closure() {
/* 10916 */             var $blk = 0,
/* 10917 */                 $exc = [],
/* 10918 */                 $ret = undefined,
/* 10919 */                 $postfinally = undefined,
/* 10920 */                 $currLineNo = undefined,
/* 10921 */                 $currColNo = undefined;
/* 10922 */             while (true) {
/* 10923 */                 try {
/* 10924 */                     switch ($blk) {
/* 10925 */                     case 0:
/* 10926 */                         /* --- class entry --- */
/* 10927 */                         //
/* 10928 */                         // line 364:
/* 10929 */                         //     def run(self, iterations):
/* 10930 */                         //     ^
/* 10931 */                         //
/* 10932 */                         $currLineNo = 364;
/* 10933 */                         $currColNo = 4;
/* 10934 */ 
/* 10935 */                         $scope574.co_name = new Sk.builtins['str']('run');
/* 10936 */                         $scope574.co_varnames = ['self', 'iterations'];
/* 10937 */                         var $funcobj680 = new Sk.builtins['function']($scope574, $gbl);
/* 10938 */                         $loc.run = $funcobj680;
/* 10939 */                         return;
/* 10940 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10941 */                     }
/* 10942 */                 } catch (err) {
/* 10943 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/* 10944 */                         err = new Sk.builtin.ExternalError(err);
/* 10945 */                     }
/* 10946 */                     err.traceback.push({
/* 10947 */                         lineno: $currLineNo,
/* 10948 */                         colno: $currColNo,
/* 10949 */                         filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 10950 */                     });
/* 10951 */                     if ($exc.length > 0) {
/* 10952 */                         $err = err;
/* 10953 */                         $blk = $exc.pop();
/* 10954 */                         continue;
/* 10955 */                     } else {
/* 10956 */                         throw err;
/* 10957 */                     }
/* 10958 */                 }
/* 10959 */             }
/* 10960 */         }).apply(null, $rest);
/* 10961 */     });
/* 10962 */     var $scope574 = (function $run575$(self, iterations) {
/* 10963 */         var i, wkq; /* locals */
/* 10964 */         var i, iterations, iterations, self, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, wkq, $loadgbl576, $iter578, $loadgbl576, $call577, $iter578, $loadgbl580, $loadgbl581, $loadgbl582, $loadgbl583, $loadgbl584, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $call587, $loadgbl588, $loadgbl582, $loadgbl583, $loadgbl584, $call585, $lattr586, $call587, $loadgbl588, $call589, $loadgbl591, $loadgbl592, $loadgbl594, $loadgbl595, $loadgbl597, $loadgbl598, $loadgbl599, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $call602, $loadgbl603, $loadgbl597, $loadgbl598, $loadgbl599, $call600, $lattr601, $call602, $loadgbl603, $call604, $loadgbl606, $loadgbl607, $loadgbl608, $loadgbl610, $loadgbl611, $loadgbl612, $loadgbl614, $loadgbl615, $loadgbl616, $loadgbl618, $loadgbl619, $loadgbl620, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $call623, $loadgbl624, $loadgbl618, $loadgbl619, $loadgbl620, $call621, $lattr622, $call623, $loadgbl624, $call625, $loadgbl627, $loadgbl628, $loadgbl629, $loadgbl631, $loadgbl632, $loadgbl633, $loadgbl635, $loadgbl636, $loadgbl637, $loadgbl639, $loadgbl640, $loadgbl641, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $call644, $loadgbl645, $loadgbl639, $loadgbl640, $loadgbl641, $call642, $lattr643, $call644, $loadgbl645, $call646, $loadgbl648, $loadgbl649, $loadgbl650, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $call653, $loadgbl654, $loadgbl648, $loadgbl649, $loadgbl650, $call651, $lattr652, $call653, $loadgbl654, $call655, $loadgbl657, $loadgbl658, $loadgbl659, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $call662, $loadgbl663, $loadgbl657, $loadgbl658, $loadgbl659, $call660, $lattr661, $call662, $loadgbl663, $call664, $loadgbl666, $loadgbl668, $loadgbl668, $lattr669, $compareres670, $loadgbl668, $lattr669, $compareres670, $jfalse671, $boolopsucc672, $jfalse673, $loadgbl674, $loadgbl668, $lattr669, $compareres670, $jfalse671, $boolopsucc672, $jfalse673, $loadgbl674, $lattr675, $compareres676;
/* 10965 */         var $wakeFromSuspension = function() {
/* 10966 */             var susp = $scope574.$wakingSuspension;
/* 10967 */             delete $scope574.$wakingSuspension;
/* 10968 */             $blk = susp.$blk;
/* 10969 */             $loc = susp.$loc;
/* 10970 */             $gbl = susp.$gbl;
/* 10971 */             $exc = susp.$exc;
/* 10972 */             $err = susp.$err;
/* 10973 */             $postfinally = susp.$postfinally;
/* 10974 */             $currLineNo = susp.$lineno;
/* 10975 */             $currColNo = susp.$colno;
/* 10976 */             Sk.lastYield = Date.now();
/* 10977 */             i = susp.$tmps.i;
/* 10978 */             iterations = susp.$tmps.iterations;
/* 10979 */             self = susp.$tmps.self;
/* 10980 */             wkq = susp.$tmps.wkq;
/* 10981 */             $loadgbl576 = susp.$tmps.$loadgbl576;
/* 10982 */             $iter578 = susp.$tmps.$iter578;
/* 10983 */             $call577 = susp.$tmps.$call577;
/* 10984 */             $loadgbl580 = susp.$tmps.$loadgbl580;
/* 10985 */             $loadgbl581 = susp.$tmps.$loadgbl581;
/* 10986 */             $loadgbl582 = susp.$tmps.$loadgbl582;
/* 10987 */             $loadgbl583 = susp.$tmps.$loadgbl583;
/* 10988 */             $loadgbl584 = susp.$tmps.$loadgbl584;
/* 10989 */             $call585 = susp.$tmps.$call585;
/* 10990 */             $lattr586 = susp.$tmps.$lattr586;
/* 10991 */             $call587 = susp.$tmps.$call587;
/* 10992 */             $loadgbl588 = susp.$tmps.$loadgbl588;
/* 10993 */             $call589 = susp.$tmps.$call589;
/* 10994 */             $loadgbl591 = susp.$tmps.$loadgbl591;
/* 10995 */             $loadgbl592 = susp.$tmps.$loadgbl592;
/* 10996 */             $loadgbl594 = susp.$tmps.$loadgbl594;
/* 10997 */             $loadgbl595 = susp.$tmps.$loadgbl595;
/* 10998 */             $loadgbl597 = susp.$tmps.$loadgbl597;
/* 10999 */             $loadgbl598 = susp.$tmps.$loadgbl598;
/* 11000 */             $loadgbl599 = susp.$tmps.$loadgbl599;
/* 11001 */             $call600 = susp.$tmps.$call600;
/* 11002 */             $lattr601 = susp.$tmps.$lattr601;
/* 11003 */             $call602 = susp.$tmps.$call602;
/* 11004 */             $loadgbl603 = susp.$tmps.$loadgbl603;
/* 11005 */             $call604 = susp.$tmps.$call604;
/* 11006 */             $loadgbl606 = susp.$tmps.$loadgbl606;
/* 11007 */             $loadgbl607 = susp.$tmps.$loadgbl607;
/* 11008 */             $loadgbl608 = susp.$tmps.$loadgbl608;
/* 11009 */             $loadgbl610 = susp.$tmps.$loadgbl610;
/* 11010 */             $loadgbl611 = susp.$tmps.$loadgbl611;
/* 11011 */             $loadgbl612 = susp.$tmps.$loadgbl612;
/* 11012 */             $loadgbl614 = susp.$tmps.$loadgbl614;
/* 11013 */             $loadgbl615 = susp.$tmps.$loadgbl615;
/* 11014 */             $loadgbl616 = susp.$tmps.$loadgbl616;
/* 11015 */             $loadgbl618 = susp.$tmps.$loadgbl618;
/* 11016 */             $loadgbl619 = susp.$tmps.$loadgbl619;
/* 11017 */             $loadgbl620 = susp.$tmps.$loadgbl620;
/* 11018 */             $call621 = susp.$tmps.$call621;
/* 11019 */             $lattr622 = susp.$tmps.$lattr622;
/* 11020 */             $call623 = susp.$tmps.$call623;
/* 11021 */             $loadgbl624 = susp.$tmps.$loadgbl624;
/* 11022 */             $call625 = susp.$tmps.$call625;
/* 11023 */             $loadgbl627 = susp.$tmps.$loadgbl627;
/* 11024 */             $loadgbl628 = susp.$tmps.$loadgbl628;
/* 11025 */             $loadgbl629 = susp.$tmps.$loadgbl629;
/* 11026 */             $loadgbl631 = susp.$tmps.$loadgbl631;
/* 11027 */             $loadgbl632 = susp.$tmps.$loadgbl632;
/* 11028 */             $loadgbl633 = susp.$tmps.$loadgbl633;
/* 11029 */             $loadgbl635 = susp.$tmps.$loadgbl635;
/* 11030 */             $loadgbl636 = susp.$tmps.$loadgbl636;
/* 11031 */             $loadgbl637 = susp.$tmps.$loadgbl637;
/* 11032 */             $loadgbl639 = susp.$tmps.$loadgbl639;
/* 11033 */             $loadgbl640 = susp.$tmps.$loadgbl640;
/* 11034 */             $loadgbl641 = susp.$tmps.$loadgbl641;
/* 11035 */             $call642 = susp.$tmps.$call642;
/* 11036 */             $lattr643 = susp.$tmps.$lattr643;
/* 11037 */             $call644 = susp.$tmps.$call644;
/* 11038 */             $loadgbl645 = susp.$tmps.$loadgbl645;
/* 11039 */             $call646 = susp.$tmps.$call646;
/* 11040 */             $loadgbl648 = susp.$tmps.$loadgbl648;
/* 11041 */             $loadgbl649 = susp.$tmps.$loadgbl649;
/* 11042 */             $loadgbl650 = susp.$tmps.$loadgbl650;
/* 11043 */             $call651 = susp.$tmps.$call651;
/* 11044 */             $lattr652 = susp.$tmps.$lattr652;
/* 11045 */             $call653 = susp.$tmps.$call653;
/* 11046 */             $loadgbl654 = susp.$tmps.$loadgbl654;
/* 11047 */             $call655 = susp.$tmps.$call655;
/* 11048 */             $loadgbl657 = susp.$tmps.$loadgbl657;
/* 11049 */             $loadgbl658 = susp.$tmps.$loadgbl658;
/* 11050 */             $loadgbl659 = susp.$tmps.$loadgbl659;
/* 11051 */             $call660 = susp.$tmps.$call660;
/* 11052 */             $lattr661 = susp.$tmps.$lattr661;
/* 11053 */             $call662 = susp.$tmps.$call662;
/* 11054 */             $loadgbl663 = susp.$tmps.$loadgbl663;
/* 11055 */             $call664 = susp.$tmps.$call664;
/* 11056 */             $loadgbl666 = susp.$tmps.$loadgbl666;
/* 11057 */             $loadgbl668 = susp.$tmps.$loadgbl668;
/* 11058 */             $lattr669 = susp.$tmps.$lattr669;
/* 11059 */             $compareres670 = susp.$tmps.$compareres670;
/* 11060 */             $jfalse671 = susp.$tmps.$jfalse671;
/* 11061 */             $boolopsucc672 = susp.$tmps.$boolopsucc672;
/* 11062 */             $jfalse673 = susp.$tmps.$jfalse673;
/* 11063 */             $loadgbl674 = susp.$tmps.$loadgbl674;
/* 11064 */             $lattr675 = susp.$tmps.$lattr675;
/* 11065 */             $compareres676 = susp.$tmps.$compareres676;
/* 11066 */             try {
/* 11067 */                 $ret = susp.child.resume();
/* 11068 */             } catch (err) {
/* 11069 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11070 */                     err = new Sk.builtin.ExternalError(err);
/* 11071 */                 }
/* 11072 */                 err.traceback.push({
/* 11073 */                     lineno: $currLineNo,
/* 11074 */                     colno: $currColNo,
/* 11075 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 11076 */                 });
/* 11077 */                 if ($exc.length > 0) {
/* 11078 */                     $err = err;
/* 11079 */                     $blk = $exc.pop();
/* 11080 */                 } else {
/* 11081 */                     throw err;
/* 11082 */                 }
/* 11083 */             }
/* 11084 */         };
/* 11085 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11086 */             var susp = new Sk.misceval.Suspension();
/* 11087 */             susp.child = $child;
/* 11088 */             susp.resume = function() {
/* 11089 */                 $scope574.$wakingSuspension = susp;
/* 11090 */                 return $scope574();
/* 11091 */             };
/* 11092 */             susp.data = susp.child.data;
/* 11093 */             susp.$blk = $blk;
/* 11094 */             susp.$loc = $loc;
/* 11095 */             susp.$gbl = $gbl;
/* 11096 */             susp.$exc = $exc;
/* 11097 */             susp.$err = $err;
/* 11098 */             susp.$postfinally = $postfinally;
/* 11099 */             susp.$filename = $filename;
/* 11100 */             susp.$lineno = $lineno;
/* 11101 */             susp.$colno = $colno;
/* 11102 */             susp.optional = susp.child.optional;
/* 11103 */             susp.$tmps = {
/* 11104 */                 "i": i,
/* 11105 */                 "iterations": iterations,
/* 11106 */                 "self": self,
/* 11107 */                 "wkq": wkq,
/* 11108 */                 "$loadgbl576": $loadgbl576,
/* 11109 */                 "$iter578": $iter578,
/* 11110 */                 "$call577": $call577,
/* 11111 */                 "$loadgbl580": $loadgbl580,
/* 11112 */                 "$loadgbl581": $loadgbl581,
/* 11113 */                 "$loadgbl582": $loadgbl582,
/* 11114 */                 "$loadgbl583": $loadgbl583,
/* 11115 */                 "$loadgbl584": $loadgbl584,
/* 11116 */                 "$call585": $call585,
/* 11117 */                 "$lattr586": $lattr586,
/* 11118 */                 "$call587": $call587,
/* 11119 */                 "$loadgbl588": $loadgbl588,
/* 11120 */                 "$call589": $call589,
/* 11121 */                 "$loadgbl591": $loadgbl591,
/* 11122 */                 "$loadgbl592": $loadgbl592,
/* 11123 */                 "$loadgbl594": $loadgbl594,
/* 11124 */                 "$loadgbl595": $loadgbl595,
/* 11125 */                 "$loadgbl597": $loadgbl597,
/* 11126 */                 "$loadgbl598": $loadgbl598,
/* 11127 */                 "$loadgbl599": $loadgbl599,
/* 11128 */                 "$call600": $call600,
/* 11129 */                 "$lattr601": $lattr601,
/* 11130 */                 "$call602": $call602,
/* 11131 */                 "$loadgbl603": $loadgbl603,
/* 11132 */                 "$call604": $call604,
/* 11133 */                 "$loadgbl606": $loadgbl606,
/* 11134 */                 "$loadgbl607": $loadgbl607,
/* 11135 */                 "$loadgbl608": $loadgbl608,
/* 11136 */                 "$loadgbl610": $loadgbl610,
/* 11137 */                 "$loadgbl611": $loadgbl611,
/* 11138 */                 "$loadgbl612": $loadgbl612,
/* 11139 */                 "$loadgbl614": $loadgbl614,
/* 11140 */                 "$loadgbl615": $loadgbl615,
/* 11141 */                 "$loadgbl616": $loadgbl616,
/* 11142 */                 "$loadgbl618": $loadgbl618,
/* 11143 */                 "$loadgbl619": $loadgbl619,
/* 11144 */                 "$loadgbl620": $loadgbl620,
/* 11145 */                 "$call621": $call621,
/* 11146 */                 "$lattr622": $lattr622,
/* 11147 */                 "$call623": $call623,
/* 11148 */                 "$loadgbl624": $loadgbl624,
/* 11149 */                 "$call625": $call625,
/* 11150 */                 "$loadgbl627": $loadgbl627,
/* 11151 */                 "$loadgbl628": $loadgbl628,
/* 11152 */                 "$loadgbl629": $loadgbl629,
/* 11153 */                 "$loadgbl631": $loadgbl631,
/* 11154 */                 "$loadgbl632": $loadgbl632,
/* 11155 */                 "$loadgbl633": $loadgbl633,
/* 11156 */                 "$loadgbl635": $loadgbl635,
/* 11157 */                 "$loadgbl636": $loadgbl636,
/* 11158 */                 "$loadgbl637": $loadgbl637,
/* 11159 */                 "$loadgbl639": $loadgbl639,
/* 11160 */                 "$loadgbl640": $loadgbl640,
/* 11161 */                 "$loadgbl641": $loadgbl641,
/* 11162 */                 "$call642": $call642,
/* 11163 */                 "$lattr643": $lattr643,
/* 11164 */                 "$call644": $call644,
/* 11165 */                 "$loadgbl645": $loadgbl645,
/* 11166 */                 "$call646": $call646,
/* 11167 */                 "$loadgbl648": $loadgbl648,
/* 11168 */                 "$loadgbl649": $loadgbl649,
/* 11169 */                 "$loadgbl650": $loadgbl650,
/* 11170 */                 "$call651": $call651,
/* 11171 */                 "$lattr652": $lattr652,
/* 11172 */                 "$call653": $call653,
/* 11173 */                 "$loadgbl654": $loadgbl654,
/* 11174 */                 "$call655": $call655,
/* 11175 */                 "$loadgbl657": $loadgbl657,
/* 11176 */                 "$loadgbl658": $loadgbl658,
/* 11177 */                 "$loadgbl659": $loadgbl659,
/* 11178 */                 "$call660": $call660,
/* 11179 */                 "$lattr661": $lattr661,
/* 11180 */                 "$call662": $call662,
/* 11181 */                 "$loadgbl663": $loadgbl663,
/* 11182 */                 "$call664": $call664,
/* 11183 */                 "$loadgbl666": $loadgbl666,
/* 11184 */                 "$loadgbl668": $loadgbl668,
/* 11185 */                 "$lattr669": $lattr669,
/* 11186 */                 "$compareres670": $compareres670,
/* 11187 */                 "$jfalse671": $jfalse671,
/* 11188 */                 "$boolopsucc672": $boolopsucc672,
/* 11189 */                 "$jfalse673": $jfalse673,
/* 11190 */                 "$loadgbl674": $loadgbl674,
/* 11191 */                 "$lattr675": $lattr675,
/* 11192 */                 "$compareres676": $compareres676
/* 11193 */             };
/* 11194 */             return susp;
/* 11195 */         };
/* 11196 */         var $blk = 0,
/* 11197 */             $exc = [],
/* 11198 */             $loc = {},
/* 11199 */             $gbl = this,
/* 11200 */             $err = undefined,
/* 11201 */             $ret = undefined,
/* 11202 */             $postfinally = undefined,
/* 11203 */             $currLineNo = undefined,
/* 11204 */             $currColNo = undefined;
/* 11205 */         if ($scope574.$wakingSuspension !== undefined) {
/* 11206 */             $wakeFromSuspension();
/* 11207 */         } else {
/* 11208 */             Sk.builtin.pyCheckArgs("run", arguments, 2, 2, false, false);
/* 11209 */         }
/* 11210 */         while (true) {
/* 11211 */             try {
/* 11212 */                 switch ($blk) {
/* 11213 */                 case 0:
/* 11214 */                     /* --- codeobj entry --- */
/* 11215 */                     if (self === undefined) {
/* 11216 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11217 */                     }
/* 11218 */                     if (iterations === undefined) {
/* 11219 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 11220 */                     }
/* 11221 */ 
/* 11222 */                     //
/* 11223 */                     // line 365:
/* 11224 */                     //         for i in range(iterations):
/* 11225 */                     //         ^
/* 11226 */                     //
/* 11227 */                     $currLineNo = 365;
/* 11228 */                     $currColNo = 8;
/* 11229 */ 
/* 11230 */                     var $loadgbl576 = Sk.misceval.loadname('range', $gbl);
/* 11231 */                     if (iterations === undefined) {
/* 11232 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 11233 */                     }
/* 11234 */                     $ret;
/* 11235 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl576, iterations);
/* 11236 */                     $blk = 4; /* allowing case fallthrough */
/* 11237 */                 case 4:
/* 11238 */                     /* --- function return or resume suspension --- */
/* 11239 */                     if ($ret && $ret.$isSuspension) {
/* 11240 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 365, 17);
/* 11241 */                     }
/* 11242 */                     var $call577 = $ret;
/* 11243 */                     //
/* 11244 */                     // line 365:
/* 11245 */                     //         for i in range(iterations):
/* 11246 */                     //                  ^
/* 11247 */                     //
/* 11248 */                     $currLineNo = 365;
/* 11249 */                     $currColNo = 17;
/* 11250 */ 
/* 11251 */                     var $iter578 = Sk.abstr.iter($call577);
/* 11252 */                     $blk = 1; /* allowing case fallthrough */
/* 11253 */                 case 1:
/* 11254 */                     /* --- for start --- */
/* 11255 */                     $ret = Sk.abstr.iternext($iter578, true);
/* 11256 */                     $blk = 5; /* allowing case fallthrough */
/* 11257 */                 case 5:
/* 11258 */                     /* --- function return or resume suspension --- */
/* 11259 */                     if ($ret && $ret.$isSuspension) {
/* 11260 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 365, 8);
/* 11261 */                     }
/* 11262 */                     var $next579 = $ret;
/* 11263 */                     if ($next579 === undefined) {
/* 11264 */                         $blk = 2;
/* 11265 */                         continue;
/* 11266 */                     }
/* 11267 */                     i = $next579;
/* 11268 */                     //
/* 11269 */                     // line 366:
/* 11270 */                     //             taskWorkArea.holdCount = 0
/* 11271 */                     //             ^
/* 11272 */                     //
/* 11273 */                     $currLineNo = 366;
/* 11274 */                     $currColNo = 12;
/* 11275 */ 
/* 11276 */                     var $loadgbl580 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 11277 */                     $ret = Sk.abstr.sattr($loadgbl580, 'holdCount', new Sk.builtin.int_(0), true);
/* 11278 */                     $blk = 6; /* allowing case fallthrough */
/* 11279 */                 case 6:
/* 11280 */                     /* --- function return or resume suspension --- */
/* 11281 */                     if ($ret && $ret.$isSuspension) {
/* 11282 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 366, 12);
/* 11283 */                     }
/* 11284 */                     //
/* 11285 */                     // line 367:
/* 11286 */                     //             taskWorkArea.qpktCount = 0
/* 11287 */                     //             ^
/* 11288 */                     //
/* 11289 */                     $currLineNo = 367;
/* 11290 */                     $currColNo = 12;
/* 11291 */ 
/* 11292 */                     var $loadgbl581 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 11293 */                     $ret = Sk.abstr.sattr($loadgbl581, 'qpktCount', new Sk.builtin.int_(0), true);
/* 11294 */                     $blk = 7; /* allowing case fallthrough */
/* 11295 */                 case 7:
/* 11296 */                     /* --- function return or resume suspension --- */
/* 11297 */                     if ($ret && $ret.$isSuspension) {
/* 11298 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 367, 12);
/* 11299 */                     }
/* 11300 */                     //
/* 11301 */                     // line 369:
/* 11302 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 11303 */                     //             ^
/* 11304 */                     //
/* 11305 */                     $currLineNo = 369;
/* 11306 */                     $currColNo = 12;
/* 11307 */ 
/* 11308 */                     var $loadgbl582 = Sk.misceval.loadname('IdleTask', $gbl);
/* 11309 */                     var $loadgbl583 = Sk.misceval.loadname('I_IDLE', $gbl);
/* 11310 */                     var $loadgbl584 = Sk.misceval.loadname('TaskState', $gbl);
/* 11311 */                     $ret;
/* 11312 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl584);
/* 11313 */                     $blk = 8; /* allowing case fallthrough */
/* 11314 */                 case 8:
/* 11315 */                     /* --- function return or resume suspension --- */
/* 11316 */                     if ($ret && $ret.$isSuspension) {
/* 11317 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 11318 */                     }
/* 11319 */                     var $call585 = $ret;
/* 11320 */                     //
/* 11321 */                     // line 369:
/* 11322 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 11323 */                     //                                        ^
/* 11324 */                     //
/* 11325 */                     $currLineNo = 369;
/* 11326 */                     $currColNo = 39;
/* 11327 */ 
/* 11328 */                     $ret = Sk.abstr.gattr($call585, 'running', true);
/* 11329 */                     $blk = 9; /* allowing case fallthrough */
/* 11330 */                 case 9:
/* 11331 */                     /* --- function return or resume suspension --- */
/* 11332 */                     if ($ret && $ret.$isSuspension) {
/* 11333 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 11334 */                     }
/* 11335 */                     var $lattr586 = $ret;
/* 11336 */                     $ret;
/* 11337 */                     $ret = Sk.misceval.callsimOrSuspend($lattr586);
/* 11338 */                     $blk = 10; /* allowing case fallthrough */
/* 11339 */                 case 10:
/* 11340 */                     /* --- function return or resume suspension --- */
/* 11341 */                     if ($ret && $ret.$isSuspension) {
/* 11342 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 39);
/* 11343 */                     }
/* 11344 */                     var $call587 = $ret;
/* 11345 */                     //
/* 11346 */                     // line 369:
/* 11347 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 11348 */                     //                                        ^
/* 11349 */                     //
/* 11350 */                     $currLineNo = 369;
/* 11351 */                     $currColNo = 39;
/* 11352 */ 
/* 11353 */                     var $loadgbl588 = Sk.misceval.loadname('IdleTaskRec', $gbl);
/* 11354 */                     $ret;
/* 11355 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl588);
/* 11356 */                     $blk = 11; /* allowing case fallthrough */
/* 11357 */                 case 11:
/* 11358 */                     /* --- function return or resume suspension --- */
/* 11359 */                     if ($ret && $ret.$isSuspension) {
/* 11360 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 62);
/* 11361 */                     }
/* 11362 */                     var $call589 = $ret;
/* 11363 */                     //
/* 11364 */                     // line 369:
/* 11365 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 11366 */                     //                                                               ^
/* 11367 */                     //
/* 11368 */                     $currLineNo = 369;
/* 11369 */                     $currColNo = 62;
/* 11370 */ 
/* 11371 */                     $ret;
/* 11372 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl582, $loadgbl583, new Sk.builtin.int_(1), new Sk.builtin.int_(10000), $call587, $call589);
/* 11373 */                     $blk = 12; /* allowing case fallthrough */
/* 11374 */                 case 12:
/* 11375 */                     /* --- function return or resume suspension --- */
/* 11376 */                     if ($ret && $ret.$isSuspension) {
/* 11377 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 369, 12);
/* 11378 */                     }
/* 11379 */                     var $call590 = $ret;
/* 11380 */                     //
/* 11381 */                     // line 369:
/* 11382 */                     //             IdleTask(I_IDLE, 1, 10000, TaskState().running(), IdleTaskRec())
/* 11383 */                     //             ^
/* 11384 */                     //
/* 11385 */                     $currLineNo = 369;
/* 11386 */                     $currColNo = 12;
/* 11387 */ 
/* 11388 */ 
/* 11389 */                     //
/* 11390 */                     // line 371:
/* 11391 */                     //             wkq = Packet(None, 0, K_WORK)
/* 11392 */                     //             ^
/* 11393 */                     //
/* 11394 */                     $currLineNo = 371;
/* 11395 */                     $currColNo = 12;
/* 11396 */ 
/* 11397 */                     var $loadgbl591 = Sk.misceval.loadname('Packet', $gbl);
/* 11398 */                     var $loadgbl592 = Sk.misceval.loadname('K_WORK', $gbl);
/* 11399 */                     $ret;
/* 11400 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl591, Sk.builtin.none.none$, new Sk.builtin.int_(0), $loadgbl592);
/* 11401 */                     $blk = 13; /* allowing case fallthrough */
/* 11402 */                 case 13:
/* 11403 */                     /* --- function return or resume suspension --- */
/* 11404 */                     if ($ret && $ret.$isSuspension) {
/* 11405 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 371, 18);
/* 11406 */                     }
/* 11407 */                     var $call593 = $ret;
/* 11408 */                     //
/* 11409 */                     // line 371:
/* 11410 */                     //             wkq = Packet(None, 0, K_WORK)
/* 11411 */                     //                   ^
/* 11412 */                     //
/* 11413 */                     $currLineNo = 371;
/* 11414 */                     $currColNo = 18;
/* 11415 */ 
/* 11416 */                     wkq = $call593;
/* 11417 */                     //
/* 11418 */                     // line 372:
/* 11419 */                     //             wkq = Packet(wkq , 0, K_WORK)
/* 11420 */                     //             ^
/* 11421 */                     //
/* 11422 */                     $currLineNo = 372;
/* 11423 */                     $currColNo = 12;
/* 11424 */ 
/* 11425 */                     var $loadgbl594 = Sk.misceval.loadname('Packet', $gbl);
/* 11426 */                     if (wkq === undefined) {
/* 11427 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11428 */                     }
/* 11429 */                     var $loadgbl595 = Sk.misceval.loadname('K_WORK', $gbl);
/* 11430 */                     $ret;
/* 11431 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl594, wkq, new Sk.builtin.int_(0), $loadgbl595);
/* 11432 */                     $blk = 14; /* allowing case fallthrough */
/* 11433 */                 case 14:
/* 11434 */                     /* --- function return or resume suspension --- */
/* 11435 */                     if ($ret && $ret.$isSuspension) {
/* 11436 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 372, 18);
/* 11437 */                     }
/* 11438 */                     var $call596 = $ret;
/* 11439 */                     //
/* 11440 */                     // line 372:
/* 11441 */                     //             wkq = Packet(wkq , 0, K_WORK)
/* 11442 */                     //                   ^
/* 11443 */                     //
/* 11444 */                     $currLineNo = 372;
/* 11445 */                     $currColNo = 18;
/* 11446 */ 
/* 11447 */                     wkq = $call596;
/* 11448 */                     //
/* 11449 */                     // line 373:
/* 11450 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 11451 */                     //             ^
/* 11452 */                     //
/* 11453 */                     $currLineNo = 373;
/* 11454 */                     $currColNo = 12;
/* 11455 */ 
/* 11456 */                     var $loadgbl597 = Sk.misceval.loadname('WorkTask', $gbl);
/* 11457 */                     var $loadgbl598 = Sk.misceval.loadname('I_WORK', $gbl);
/* 11458 */                     if (wkq === undefined) {
/* 11459 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11460 */                     }
/* 11461 */                     var $loadgbl599 = Sk.misceval.loadname('TaskState', $gbl);
/* 11462 */                     $ret;
/* 11463 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl599);
/* 11464 */                     $blk = 15; /* allowing case fallthrough */
/* 11465 */                 case 15:
/* 11466 */                     /* --- function return or resume suspension --- */
/* 11467 */                     if ($ret && $ret.$isSuspension) {
/* 11468 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 11469 */                     }
/* 11470 */                     var $call600 = $ret;
/* 11471 */                     //
/* 11472 */                     // line 373:
/* 11473 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 11474 */                     //                                         ^
/* 11475 */                     //
/* 11476 */                     $currLineNo = 373;
/* 11477 */                     $currColNo = 40;
/* 11478 */ 
/* 11479 */                     $ret = Sk.abstr.gattr($call600, 'waitingWithPacket', true);
/* 11480 */                     $blk = 16; /* allowing case fallthrough */
/* 11481 */                 case 16:
/* 11482 */                     /* --- function return or resume suspension --- */
/* 11483 */                     if ($ret && $ret.$isSuspension) {
/* 11484 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 11485 */                     }
/* 11486 */                     var $lattr601 = $ret;
/* 11487 */                     $ret;
/* 11488 */                     $ret = Sk.misceval.callsimOrSuspend($lattr601);
/* 11489 */                     $blk = 17; /* allowing case fallthrough */
/* 11490 */                 case 17:
/* 11491 */                     /* --- function return or resume suspension --- */
/* 11492 */                     if ($ret && $ret.$isSuspension) {
/* 11493 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 40);
/* 11494 */                     }
/* 11495 */                     var $call602 = $ret;
/* 11496 */                     //
/* 11497 */                     // line 373:
/* 11498 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 11499 */                     //                                         ^
/* 11500 */                     //
/* 11501 */                     $currLineNo = 373;
/* 11502 */                     $currColNo = 40;
/* 11503 */ 
/* 11504 */                     var $loadgbl603 = Sk.misceval.loadname('WorkerTaskRec', $gbl);
/* 11505 */                     $ret;
/* 11506 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl603);
/* 11507 */                     $blk = 18; /* allowing case fallthrough */
/* 11508 */                 case 18:
/* 11509 */                     /* --- function return or resume suspension --- */
/* 11510 */                     if ($ret && $ret.$isSuspension) {
/* 11511 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 73);
/* 11512 */                     }
/* 11513 */                     var $call604 = $ret;
/* 11514 */                     //
/* 11515 */                     // line 373:
/* 11516 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 11517 */                     //                                                                          ^
/* 11518 */                     //
/* 11519 */                     $currLineNo = 373;
/* 11520 */                     $currColNo = 73;
/* 11521 */ 
/* 11522 */                     $ret;
/* 11523 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl597, $loadgbl598, new Sk.builtin.int_(1000), wkq, $call602, $call604);
/* 11524 */                     $blk = 19; /* allowing case fallthrough */
/* 11525 */                 case 19:
/* 11526 */                     /* --- function return or resume suspension --- */
/* 11527 */                     if ($ret && $ret.$isSuspension) {
/* 11528 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 373, 12);
/* 11529 */                     }
/* 11530 */                     var $call605 = $ret;
/* 11531 */                     //
/* 11532 */                     // line 373:
/* 11533 */                     //             WorkTask(I_WORK, 1000, wkq, TaskState().waitingWithPacket(), WorkerTaskRec())
/* 11534 */                     //             ^
/* 11535 */                     //
/* 11536 */                     $currLineNo = 373;
/* 11537 */                     $currColNo = 12;
/* 11538 */ 
/* 11539 */ 
/* 11540 */                     //
/* 11541 */                     // line 375:
/* 11542 */                     //             wkq = Packet(None, I_DEVA, K_DEV)
/* 11543 */                     //             ^
/* 11544 */                     //
/* 11545 */                     $currLineNo = 375;
/* 11546 */                     $currColNo = 12;
/* 11547 */ 
/* 11548 */                     var $loadgbl606 = Sk.misceval.loadname('Packet', $gbl);
/* 11549 */                     var $loadgbl607 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 11550 */                     var $loadgbl608 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11551 */                     $ret;
/* 11552 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl606, Sk.builtin.none.none$, $loadgbl607, $loadgbl608);
/* 11553 */                     $blk = 20; /* allowing case fallthrough */
/* 11554 */                 case 20:
/* 11555 */                     /* --- function return or resume suspension --- */
/* 11556 */                     if ($ret && $ret.$isSuspension) {
/* 11557 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 375, 18);
/* 11558 */                     }
/* 11559 */                     var $call609 = $ret;
/* 11560 */                     //
/* 11561 */                     // line 375:
/* 11562 */                     //             wkq = Packet(None, I_DEVA, K_DEV)
/* 11563 */                     //                   ^
/* 11564 */                     //
/* 11565 */                     $currLineNo = 375;
/* 11566 */                     $currColNo = 18;
/* 11567 */ 
/* 11568 */                     wkq = $call609;
/* 11569 */                     //
/* 11570 */                     // line 376:
/* 11571 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 11572 */                     //             ^
/* 11573 */                     //
/* 11574 */                     $currLineNo = 376;
/* 11575 */                     $currColNo = 12;
/* 11576 */ 
/* 11577 */                     var $loadgbl610 = Sk.misceval.loadname('Packet', $gbl);
/* 11578 */                     if (wkq === undefined) {
/* 11579 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11580 */                     }
/* 11581 */                     var $loadgbl611 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 11582 */                     var $loadgbl612 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11583 */                     $ret;
/* 11584 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl610, wkq, $loadgbl611, $loadgbl612);
/* 11585 */                     $blk = 21; /* allowing case fallthrough */
/* 11586 */                 case 21:
/* 11587 */                     /* --- function return or resume suspension --- */
/* 11588 */                     if ($ret && $ret.$isSuspension) {
/* 11589 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 376, 18);
/* 11590 */                     }
/* 11591 */                     var $call613 = $ret;
/* 11592 */                     //
/* 11593 */                     // line 376:
/* 11594 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 11595 */                     //                   ^
/* 11596 */                     //
/* 11597 */                     $currLineNo = 376;
/* 11598 */                     $currColNo = 18;
/* 11599 */ 
/* 11600 */                     wkq = $call613;
/* 11601 */                     //
/* 11602 */                     // line 377:
/* 11603 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 11604 */                     //             ^
/* 11605 */                     //
/* 11606 */                     $currLineNo = 377;
/* 11607 */                     $currColNo = 12;
/* 11608 */ 
/* 11609 */                     var $loadgbl614 = Sk.misceval.loadname('Packet', $gbl);
/* 11610 */                     if (wkq === undefined) {
/* 11611 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11612 */                     }
/* 11613 */                     var $loadgbl615 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 11614 */                     var $loadgbl616 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11615 */                     $ret;
/* 11616 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl614, wkq, $loadgbl615, $loadgbl616);
/* 11617 */                     $blk = 22; /* allowing case fallthrough */
/* 11618 */                 case 22:
/* 11619 */                     /* --- function return or resume suspension --- */
/* 11620 */                     if ($ret && $ret.$isSuspension) {
/* 11621 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 377, 18);
/* 11622 */                     }
/* 11623 */                     var $call617 = $ret;
/* 11624 */                     //
/* 11625 */                     // line 377:
/* 11626 */                     //             wkq = Packet(wkq , I_DEVA, K_DEV)
/* 11627 */                     //                   ^
/* 11628 */                     //
/* 11629 */                     $currLineNo = 377;
/* 11630 */                     $currColNo = 18;
/* 11631 */ 
/* 11632 */                     wkq = $call617;
/* 11633 */                     //
/* 11634 */                     // line 378:
/* 11635 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11636 */                     //             ^
/* 11637 */                     //
/* 11638 */                     $currLineNo = 378;
/* 11639 */                     $currColNo = 12;
/* 11640 */ 
/* 11641 */                     var $loadgbl618 = Sk.misceval.loadname('HandlerTask', $gbl);
/* 11642 */                     var $loadgbl619 = Sk.misceval.loadname('I_HANDLERA', $gbl);
/* 11643 */                     if (wkq === undefined) {
/* 11644 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11645 */                     }
/* 11646 */                     var $loadgbl620 = Sk.misceval.loadname('TaskState', $gbl);
/* 11647 */                     $ret;
/* 11648 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl620);
/* 11649 */                     $blk = 23; /* allowing case fallthrough */
/* 11650 */                 case 23:
/* 11651 */                     /* --- function return or resume suspension --- */
/* 11652 */                     if ($ret && $ret.$isSuspension) {
/* 11653 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 11654 */                     }
/* 11655 */                     var $call621 = $ret;
/* 11656 */                     //
/* 11657 */                     // line 378:
/* 11658 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11659 */                     //                                                ^
/* 11660 */                     //
/* 11661 */                     $currLineNo = 378;
/* 11662 */                     $currColNo = 47;
/* 11663 */ 
/* 11664 */                     $ret = Sk.abstr.gattr($call621, 'waitingWithPacket', true);
/* 11665 */                     $blk = 24; /* allowing case fallthrough */
/* 11666 */                 case 24:
/* 11667 */                     /* --- function return or resume suspension --- */
/* 11668 */                     if ($ret && $ret.$isSuspension) {
/* 11669 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 11670 */                     }
/* 11671 */                     var $lattr622 = $ret;
/* 11672 */                     $ret;
/* 11673 */                     $ret = Sk.misceval.callsimOrSuspend($lattr622);
/* 11674 */                     $blk = 25; /* allowing case fallthrough */
/* 11675 */                 case 25:
/* 11676 */                     /* --- function return or resume suspension --- */
/* 11677 */                     if ($ret && $ret.$isSuspension) {
/* 11678 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 47);
/* 11679 */                     }
/* 11680 */                     var $call623 = $ret;
/* 11681 */                     //
/* 11682 */                     // line 378:
/* 11683 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11684 */                     //                                                ^
/* 11685 */                     //
/* 11686 */                     $currLineNo = 378;
/* 11687 */                     $currColNo = 47;
/* 11688 */ 
/* 11689 */                     var $loadgbl624 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/* 11690 */                     $ret;
/* 11691 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl624);
/* 11692 */                     $blk = 26; /* allowing case fallthrough */
/* 11693 */                 case 26:
/* 11694 */                     /* --- function return or resume suspension --- */
/* 11695 */                     if ($ret && $ret.$isSuspension) {
/* 11696 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 80);
/* 11697 */                     }
/* 11698 */                     var $call625 = $ret;
/* 11699 */                     //
/* 11700 */                     // line 378:
/* 11701 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11702 */                     //                                                                                 ^
/* 11703 */                     //
/* 11704 */                     $currLineNo = 378;
/* 11705 */                     $currColNo = 80;
/* 11706 */ 
/* 11707 */                     $ret;
/* 11708 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl618, $loadgbl619, new Sk.builtin.int_(2000), wkq, $call623, $call625);
/* 11709 */                     $blk = 27; /* allowing case fallthrough */
/* 11710 */                 case 27:
/* 11711 */                     /* --- function return or resume suspension --- */
/* 11712 */                     if ($ret && $ret.$isSuspension) {
/* 11713 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 378, 12);
/* 11714 */                     }
/* 11715 */                     var $call626 = $ret;
/* 11716 */                     //
/* 11717 */                     // line 378:
/* 11718 */                     //             HandlerTask(I_HANDLERA, 2000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11719 */                     //             ^
/* 11720 */                     //
/* 11721 */                     $currLineNo = 378;
/* 11722 */                     $currColNo = 12;
/* 11723 */ 
/* 11724 */ 
/* 11725 */                     //
/* 11726 */                     // line 380:
/* 11727 */                     //             wkq = Packet(None, I_DEVB, K_DEV)
/* 11728 */                     //             ^
/* 11729 */                     //
/* 11730 */                     $currLineNo = 380;
/* 11731 */                     $currColNo = 12;
/* 11732 */ 
/* 11733 */                     var $loadgbl627 = Sk.misceval.loadname('Packet', $gbl);
/* 11734 */                     var $loadgbl628 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 11735 */                     var $loadgbl629 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11736 */                     $ret;
/* 11737 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl627, Sk.builtin.none.none$, $loadgbl628, $loadgbl629);
/* 11738 */                     $blk = 28; /* allowing case fallthrough */
/* 11739 */                 case 28:
/* 11740 */                     /* --- function return or resume suspension --- */
/* 11741 */                     if ($ret && $ret.$isSuspension) {
/* 11742 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 380, 18);
/* 11743 */                     }
/* 11744 */                     var $call630 = $ret;
/* 11745 */                     //
/* 11746 */                     // line 380:
/* 11747 */                     //             wkq = Packet(None, I_DEVB, K_DEV)
/* 11748 */                     //                   ^
/* 11749 */                     //
/* 11750 */                     $currLineNo = 380;
/* 11751 */                     $currColNo = 18;
/* 11752 */ 
/* 11753 */                     wkq = $call630;
/* 11754 */                     //
/* 11755 */                     // line 381:
/* 11756 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 11757 */                     //             ^
/* 11758 */                     //
/* 11759 */                     $currLineNo = 381;
/* 11760 */                     $currColNo = 12;
/* 11761 */ 
/* 11762 */                     var $loadgbl631 = Sk.misceval.loadname('Packet', $gbl);
/* 11763 */                     if (wkq === undefined) {
/* 11764 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11765 */                     }
/* 11766 */                     var $loadgbl632 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 11767 */                     var $loadgbl633 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11768 */                     $ret;
/* 11769 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl631, wkq, $loadgbl632, $loadgbl633);
/* 11770 */                     $blk = 29; /* allowing case fallthrough */
/* 11771 */                 case 29:
/* 11772 */                     /* --- function return or resume suspension --- */
/* 11773 */                     if ($ret && $ret.$isSuspension) {
/* 11774 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 381, 18);
/* 11775 */                     }
/* 11776 */                     var $call634 = $ret;
/* 11777 */                     //
/* 11778 */                     // line 381:
/* 11779 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 11780 */                     //                   ^
/* 11781 */                     //
/* 11782 */                     $currLineNo = 381;
/* 11783 */                     $currColNo = 18;
/* 11784 */ 
/* 11785 */                     wkq = $call634;
/* 11786 */                     //
/* 11787 */                     // line 382:
/* 11788 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 11789 */                     //             ^
/* 11790 */                     //
/* 11791 */                     $currLineNo = 382;
/* 11792 */                     $currColNo = 12;
/* 11793 */ 
/* 11794 */                     var $loadgbl635 = Sk.misceval.loadname('Packet', $gbl);
/* 11795 */                     if (wkq === undefined) {
/* 11796 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11797 */                     }
/* 11798 */                     var $loadgbl636 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 11799 */                     var $loadgbl637 = Sk.misceval.loadname('K_DEV', $gbl);
/* 11800 */                     $ret;
/* 11801 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl635, wkq, $loadgbl636, $loadgbl637);
/* 11802 */                     $blk = 30; /* allowing case fallthrough */
/* 11803 */                 case 30:
/* 11804 */                     /* --- function return or resume suspension --- */
/* 11805 */                     if ($ret && $ret.$isSuspension) {
/* 11806 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 382, 18);
/* 11807 */                     }
/* 11808 */                     var $call638 = $ret;
/* 11809 */                     //
/* 11810 */                     // line 382:
/* 11811 */                     //             wkq = Packet(wkq , I_DEVB, K_DEV)
/* 11812 */                     //                   ^
/* 11813 */                     //
/* 11814 */                     $currLineNo = 382;
/* 11815 */                     $currColNo = 18;
/* 11816 */ 
/* 11817 */                     wkq = $call638;
/* 11818 */                     //
/* 11819 */                     // line 383:
/* 11820 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11821 */                     //             ^
/* 11822 */                     //
/* 11823 */                     $currLineNo = 383;
/* 11824 */                     $currColNo = 12;
/* 11825 */ 
/* 11826 */                     var $loadgbl639 = Sk.misceval.loadname('HandlerTask', $gbl);
/* 11827 */                     var $loadgbl640 = Sk.misceval.loadname('I_HANDLERB', $gbl);
/* 11828 */                     if (wkq === undefined) {
/* 11829 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11830 */                     }
/* 11831 */                     var $loadgbl641 = Sk.misceval.loadname('TaskState', $gbl);
/* 11832 */                     $ret;
/* 11833 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl641);
/* 11834 */                     $blk = 31; /* allowing case fallthrough */
/* 11835 */                 case 31:
/* 11836 */                     /* --- function return or resume suspension --- */
/* 11837 */                     if ($ret && $ret.$isSuspension) {
/* 11838 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 11839 */                     }
/* 11840 */                     var $call642 = $ret;
/* 11841 */                     //
/* 11842 */                     // line 383:
/* 11843 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11844 */                     //                                                ^
/* 11845 */                     //
/* 11846 */                     $currLineNo = 383;
/* 11847 */                     $currColNo = 47;
/* 11848 */ 
/* 11849 */                     $ret = Sk.abstr.gattr($call642, 'waitingWithPacket', true);
/* 11850 */                     $blk = 32; /* allowing case fallthrough */
/* 11851 */                 case 32:
/* 11852 */                     /* --- function return or resume suspension --- */
/* 11853 */                     if ($ret && $ret.$isSuspension) {
/* 11854 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 11855 */                     }
/* 11856 */                     var $lattr643 = $ret;
/* 11857 */                     $ret;
/* 11858 */                     $ret = Sk.misceval.callsimOrSuspend($lattr643);
/* 11859 */                     $blk = 33; /* allowing case fallthrough */
/* 11860 */                 case 33:
/* 11861 */                     /* --- function return or resume suspension --- */
/* 11862 */                     if ($ret && $ret.$isSuspension) {
/* 11863 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 47);
/* 11864 */                     }
/* 11865 */                     var $call644 = $ret;
/* 11866 */                     //
/* 11867 */                     // line 383:
/* 11868 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11869 */                     //                                                ^
/* 11870 */                     //
/* 11871 */                     $currLineNo = 383;
/* 11872 */                     $currColNo = 47;
/* 11873 */ 
/* 11874 */                     var $loadgbl645 = Sk.misceval.loadname('HandlerTaskRec', $gbl);
/* 11875 */                     $ret;
/* 11876 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl645);
/* 11877 */                     $blk = 34; /* allowing case fallthrough */
/* 11878 */                 case 34:
/* 11879 */                     /* --- function return or resume suspension --- */
/* 11880 */                     if ($ret && $ret.$isSuspension) {
/* 11881 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 80);
/* 11882 */                     }
/* 11883 */                     var $call646 = $ret;
/* 11884 */                     //
/* 11885 */                     // line 383:
/* 11886 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11887 */                     //                                                                                 ^
/* 11888 */                     //
/* 11889 */                     $currLineNo = 383;
/* 11890 */                     $currColNo = 80;
/* 11891 */ 
/* 11892 */                     $ret;
/* 11893 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl639, $loadgbl640, new Sk.builtin.int_(3000), wkq, $call644, $call646);
/* 11894 */                     $blk = 35; /* allowing case fallthrough */
/* 11895 */                 case 35:
/* 11896 */                     /* --- function return or resume suspension --- */
/* 11897 */                     if ($ret && $ret.$isSuspension) {
/* 11898 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 383, 12);
/* 11899 */                     }
/* 11900 */                     var $call647 = $ret;
/* 11901 */                     //
/* 11902 */                     // line 383:
/* 11903 */                     //             HandlerTask(I_HANDLERB, 3000, wkq, TaskState().waitingWithPacket(), HandlerTaskRec())
/* 11904 */                     //             ^
/* 11905 */                     //
/* 11906 */                     $currLineNo = 383;
/* 11907 */                     $currColNo = 12;
/* 11908 */ 
/* 11909 */ 
/* 11910 */                     //
/* 11911 */                     // line 385:
/* 11912 */                     //             wkq = None;
/* 11913 */                     //             ^
/* 11914 */                     //
/* 11915 */                     $currLineNo = 385;
/* 11916 */                     $currColNo = 12;
/* 11917 */ 
/* 11918 */                     wkq = Sk.builtin.none.none$;
/* 11919 */                     //
/* 11920 */                     // line 386:
/* 11921 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 11922 */                     //             ^
/* 11923 */                     //
/* 11924 */                     $currLineNo = 386;
/* 11925 */                     $currColNo = 12;
/* 11926 */ 
/* 11927 */                     var $loadgbl648 = Sk.misceval.loadname('DeviceTask', $gbl);
/* 11928 */                     var $loadgbl649 = Sk.misceval.loadname('I_DEVA', $gbl);
/* 11929 */                     if (wkq === undefined) {
/* 11930 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 11931 */                     }
/* 11932 */                     var $loadgbl650 = Sk.misceval.loadname('TaskState', $gbl);
/* 11933 */                     $ret;
/* 11934 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl650);
/* 11935 */                     $blk = 36; /* allowing case fallthrough */
/* 11936 */                 case 36:
/* 11937 */                     /* --- function return or resume suspension --- */
/* 11938 */                     if ($ret && $ret.$isSuspension) {
/* 11939 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 11940 */                     }
/* 11941 */                     var $call651 = $ret;
/* 11942 */                     //
/* 11943 */                     // line 386:
/* 11944 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 11945 */                     //                                           ^
/* 11946 */                     //
/* 11947 */                     $currLineNo = 386;
/* 11948 */                     $currColNo = 42;
/* 11949 */ 
/* 11950 */                     $ret = Sk.abstr.gattr($call651, 'waiting', true);
/* 11951 */                     $blk = 37; /* allowing case fallthrough */
/* 11952 */                 case 37:
/* 11953 */                     /* --- function return or resume suspension --- */
/* 11954 */                     if ($ret && $ret.$isSuspension) {
/* 11955 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 11956 */                     }
/* 11957 */                     var $lattr652 = $ret;
/* 11958 */                     $ret;
/* 11959 */                     $ret = Sk.misceval.callsimOrSuspend($lattr652);
/* 11960 */                     $blk = 38; /* allowing case fallthrough */
/* 11961 */                 case 38:
/* 11962 */                     /* --- function return or resume suspension --- */
/* 11963 */                     if ($ret && $ret.$isSuspension) {
/* 11964 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 42);
/* 11965 */                     }
/* 11966 */                     var $call653 = $ret;
/* 11967 */                     //
/* 11968 */                     // line 386:
/* 11969 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 11970 */                     //                                           ^
/* 11971 */                     //
/* 11972 */                     $currLineNo = 386;
/* 11973 */                     $currColNo = 42;
/* 11974 */ 
/* 11975 */                     var $loadgbl654 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/* 11976 */                     $ret;
/* 11977 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl654);
/* 11978 */                     $blk = 39; /* allowing case fallthrough */
/* 11979 */                 case 39:
/* 11980 */                     /* --- function return or resume suspension --- */
/* 11981 */                     if ($ret && $ret.$isSuspension) {
/* 11982 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 65);
/* 11983 */                     }
/* 11984 */                     var $call655 = $ret;
/* 11985 */                     //
/* 11986 */                     // line 386:
/* 11987 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 11988 */                     //                                                                  ^
/* 11989 */                     //
/* 11990 */                     $currLineNo = 386;
/* 11991 */                     $currColNo = 65;
/* 11992 */ 
/* 11993 */                     $ret;
/* 11994 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl648, $loadgbl649, new Sk.builtin.int_(4000), wkq, $call653, $call655);
/* 11995 */                     $blk = 40; /* allowing case fallthrough */
/* 11996 */                 case 40:
/* 11997 */                     /* --- function return or resume suspension --- */
/* 11998 */                     if ($ret && $ret.$isSuspension) {
/* 11999 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 386, 12);
/* 12000 */                     }
/* 12001 */                     var $call656 = $ret;
/* 12002 */                     //
/* 12003 */                     // line 386:
/* 12004 */                     //             DeviceTask(I_DEVA, 4000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12005 */                     //             ^
/* 12006 */                     //
/* 12007 */                     $currLineNo = 386;
/* 12008 */                     $currColNo = 12;
/* 12009 */ 
/* 12010 */ 
/* 12011 */                     //
/* 12012 */                     // line 387:
/* 12013 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12014 */                     //             ^
/* 12015 */                     //
/* 12016 */                     $currLineNo = 387;
/* 12017 */                     $currColNo = 12;
/* 12018 */ 
/* 12019 */                     var $loadgbl657 = Sk.misceval.loadname('DeviceTask', $gbl);
/* 12020 */                     var $loadgbl658 = Sk.misceval.loadname('I_DEVB', $gbl);
/* 12021 */                     if (wkq === undefined) {
/* 12022 */                         throw new Sk.builtin.UnboundLocalError('local variable \'wkq\' referenced before assignment');
/* 12023 */                     }
/* 12024 */                     var $loadgbl659 = Sk.misceval.loadname('TaskState', $gbl);
/* 12025 */                     $ret;
/* 12026 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl659);
/* 12027 */                     $blk = 41; /* allowing case fallthrough */
/* 12028 */                 case 41:
/* 12029 */                     /* --- function return or resume suspension --- */
/* 12030 */                     if ($ret && $ret.$isSuspension) {
/* 12031 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 12032 */                     }
/* 12033 */                     var $call660 = $ret;
/* 12034 */                     //
/* 12035 */                     // line 387:
/* 12036 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12037 */                     //                                           ^
/* 12038 */                     //
/* 12039 */                     $currLineNo = 387;
/* 12040 */                     $currColNo = 42;
/* 12041 */ 
/* 12042 */                     $ret = Sk.abstr.gattr($call660, 'waiting', true);
/* 12043 */                     $blk = 42; /* allowing case fallthrough */
/* 12044 */                 case 42:
/* 12045 */                     /* --- function return or resume suspension --- */
/* 12046 */                     if ($ret && $ret.$isSuspension) {
/* 12047 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 12048 */                     }
/* 12049 */                     var $lattr661 = $ret;
/* 12050 */                     $ret;
/* 12051 */                     $ret = Sk.misceval.callsimOrSuspend($lattr661);
/* 12052 */                     $blk = 43; /* allowing case fallthrough */
/* 12053 */                 case 43:
/* 12054 */                     /* --- function return or resume suspension --- */
/* 12055 */                     if ($ret && $ret.$isSuspension) {
/* 12056 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 42);
/* 12057 */                     }
/* 12058 */                     var $call662 = $ret;
/* 12059 */                     //
/* 12060 */                     // line 387:
/* 12061 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12062 */                     //                                           ^
/* 12063 */                     //
/* 12064 */                     $currLineNo = 387;
/* 12065 */                     $currColNo = 42;
/* 12066 */ 
/* 12067 */                     var $loadgbl663 = Sk.misceval.loadname('DeviceTaskRec', $gbl);
/* 12068 */                     $ret;
/* 12069 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl663);
/* 12070 */                     $blk = 44; /* allowing case fallthrough */
/* 12071 */                 case 44:
/* 12072 */                     /* --- function return or resume suspension --- */
/* 12073 */                     if ($ret && $ret.$isSuspension) {
/* 12074 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 65);
/* 12075 */                     }
/* 12076 */                     var $call664 = $ret;
/* 12077 */                     //
/* 12078 */                     // line 387:
/* 12079 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12080 */                     //                                                                  ^
/* 12081 */                     //
/* 12082 */                     $currLineNo = 387;
/* 12083 */                     $currColNo = 65;
/* 12084 */ 
/* 12085 */                     $ret;
/* 12086 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl657, $loadgbl658, new Sk.builtin.int_(5000), wkq, $call662, $call664);
/* 12087 */                     $blk = 45; /* allowing case fallthrough */
/* 12088 */                 case 45:
/* 12089 */                     /* --- function return or resume suspension --- */
/* 12090 */                     if ($ret && $ret.$isSuspension) {
/* 12091 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 387, 12);
/* 12092 */                     }
/* 12093 */                     var $call665 = $ret;
/* 12094 */                     //
/* 12095 */                     // line 387:
/* 12096 */                     //             DeviceTask(I_DEVB, 5000, wkq, TaskState().waiting(), DeviceTaskRec());
/* 12097 */                     //             ^
/* 12098 */                     //
/* 12099 */                     $currLineNo = 387;
/* 12100 */                     $currColNo = 12;
/* 12101 */ 
/* 12102 */ 
/* 12103 */                     //
/* 12104 */                     // line 389:
/* 12105 */                     //             schedule()
/* 12106 */                     //             ^
/* 12107 */                     //
/* 12108 */                     $currLineNo = 389;
/* 12109 */                     $currColNo = 12;
/* 12110 */ 
/* 12111 */                     var $loadgbl666 = Sk.misceval.loadname('schedule', $gbl);
/* 12112 */                     $ret;
/* 12113 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl666);
/* 12114 */                     $blk = 46; /* allowing case fallthrough */
/* 12115 */                 case 46:
/* 12116 */                     /* --- function return or resume suspension --- */
/* 12117 */                     if ($ret && $ret.$isSuspension) {
/* 12118 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 389, 12);
/* 12119 */                     }
/* 12120 */                     var $call667 = $ret;
/* 12121 */                     //
/* 12122 */                     // line 389:
/* 12123 */                     //             schedule()
/* 12124 */                     //             ^
/* 12125 */                     //
/* 12126 */                     $currLineNo = 389;
/* 12127 */                     $currColNo = 12;
/* 12128 */ 
/* 12129 */ 
/* 12130 */                     //
/* 12131 */                     // line 391:
/* 12132 */                     //             if taskWorkArea.holdCount == 9297 and taskWorkArea.qpktCount == 23246:
/* 12133 */                     //             ^
/* 12134 */                     //
/* 12135 */                     $currLineNo = 391;
/* 12136 */                     $currColNo = 12;
/* 12137 */ 
/* 12138 */                     var $loadgbl668 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 12139 */                     $ret = Sk.abstr.gattr($loadgbl668, 'holdCount', true);
/* 12140 */                     $blk = 50; /* allowing case fallthrough */
/* 12141 */                 case 50:
/* 12142 */                     /* --- function return or resume suspension --- */
/* 12143 */                     if ($ret && $ret.$isSuspension) {
/* 12144 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 15);
/* 12145 */                     }
/* 12146 */                     var $lattr669 = $ret;
/* 12147 */                     var $compareres670 = null;
/* 12148 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr669, new Sk.builtin.int_(9297), 'Eq', true));
/* 12149 */                     $blk = 52; /* allowing case fallthrough */
/* 12150 */                 case 52:
/* 12151 */                     /* --- function return or resume suspension --- */
/* 12152 */                     if ($ret && $ret.$isSuspension) {
/* 12153 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 15);
/* 12154 */                     }
/* 12155 */                     $compareres670 = $ret;
/* 12156 */                     var $jfalse671 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12157 */                     if ($jfalse671) { /*test failed */
/* 12158 */                         $blk = 51;
/* 12159 */                         continue;
/* 12160 */                     }
/* 12161 */                     $blk = 51; /* allowing case fallthrough */
/* 12162 */                 case 51:
/* 12163 */                     /* --- done --- */
/* 12164 */                     var $boolopsucc672 = $compareres670;
/* 12165 */                     $boolopsucc672 = $compareres670;
/* 12166 */                     var $jfalse673 = ($compareres670 === false || !Sk.misceval.isTrue($compareres670));
/* 12167 */                     if ($jfalse673) { /*test failed */
/* 12168 */                         $blk = 49;
/* 12169 */                         continue;
/* 12170 */                     }
/* 12171 */                     var $loadgbl674 = Sk.misceval.loadname('taskWorkArea', $gbl);
/* 12172 */                     $ret = Sk.abstr.gattr($loadgbl674, 'qpktCount', true);
/* 12173 */                     $blk = 53; /* allowing case fallthrough */
/* 12174 */                 case 53:
/* 12175 */                     /* --- function return or resume suspension --- */
/* 12176 */                     if ($ret && $ret.$isSuspension) {
/* 12177 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 50);
/* 12178 */                     }
/* 12179 */                     var $lattr675 = $ret;
/* 12180 */                     var $compareres676 = null;
/* 12181 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr675, new Sk.builtin.int_(23246), 'Eq', true));
/* 12182 */                     $blk = 55; /* allowing case fallthrough */
/* 12183 */                 case 55:
/* 12184 */                     /* --- function return or resume suspension --- */
/* 12185 */                     if ($ret && $ret.$isSuspension) {
/* 12186 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 391, 50);
/* 12187 */                     }
/* 12188 */                     $compareres676 = $ret;
/* 12189 */                     var $jfalse677 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12190 */                     if ($jfalse677) { /*test failed */
/* 12191 */                         $blk = 54;
/* 12192 */                         continue;
/* 12193 */                     }
/* 12194 */                     $blk = 54; /* allowing case fallthrough */
/* 12195 */                 case 54:
/* 12196 */                     /* --- done --- */
/* 12197 */                     $boolopsucc672 = $compareres676;
/* 12198 */                     var $jfalse678 = ($compareres676 === false || !Sk.misceval.isTrue($compareres676));
/* 12199 */                     if ($jfalse678) { /*test failed */
/* 12200 */                         $blk = 49;
/* 12201 */                         continue;
/* 12202 */                     }
/* 12203 */                     $blk = 49; /* allowing case fallthrough */
/* 12204 */                 case 49:
/* 12205 */                     /* --- end of boolop --- */
/* 12206 */                     var $jfalse679 = ($boolopsucc672 === false || !Sk.misceval.isTrue($boolopsucc672));
/* 12207 */                     if ($jfalse679) { /*test failed */
/* 12208 */                         $blk = 48;
/* 12209 */                         continue;
/* 12210 */                     }
/* 12211 */                     //
/* 12212 */                     // line 392:
/* 12213 */                     //                 pass
/* 12214 */                     //                 ^
/* 12215 */                     //
/* 12216 */                     $currLineNo = 392;
/* 12217 */                     $currColNo = 16;
/* 12218 */ 
/* 12219 */                     $blk = 47; /* allowing case fallthrough */
/* 12220 */                 case 47:
/* 12221 */                     /* --- end of if --- */
/* 12222 */                     $blk = 1; /* jump */
/* 12223 */                     continue;
/* 12224 */                 case 2:
/* 12225 */                     /* --- for cleanup --- */
/* 12226 */                     $blk = 3; /* allowing case fallthrough */
/* 12227 */                 case 3:
/* 12228 */                     /* --- for end --- */
/* 12229 */                     //
/* 12230 */                     // line 396:
/* 12231 */                     //         return True
/* 12232 */                     //         ^
/* 12233 */                     //
/* 12234 */                     $currLineNo = 396;
/* 12235 */                     $currColNo = 8;
/* 12236 */ 
/* 12237 */                     return Sk.builtin.bool.true$;
/* 12238 */                     return Sk.builtin.none.none$;
/* 12239 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12240 */                 case 48:
/* 12241 */                     /* --- next branch of if --- */
/* 12242 */                     //
/* 12243 */                     // line 394:
/* 12244 */                     //                 return False
/* 12245 */                     //                 ^
/* 12246 */                     //
/* 12247 */                     $currLineNo = 394;
/* 12248 */                     $currColNo = 16;
/* 12249 */ 
/* 12250 */                     return Sk.builtin.bool.false$;
/* 12251 */                     $blk = 47; /* jump */
/* 12252 */                     continue;
/* 12253 */                 }
/* 12254 */             } catch (err) {
/* 12255 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12256 */                     err = new Sk.builtin.ExternalError(err);
/* 12257 */                 }
/* 12258 */                 err.traceback.push({
/* 12259 */                     lineno: $currLineNo,
/* 12260 */                     colno: $currColNo,
/* 12261 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12262 */                 });
/* 12263 */                 if ($exc.length > 0) {
/* 12264 */                     $err = err;
/* 12265 */                     $blk = $exc.pop();
/* 12266 */                     continue;
/* 12267 */                 } else {
/* 12268 */                     throw err;
/* 12269 */                 }
/* 12270 */             }
/* 12271 */         }
/* 12272 */     });
/* 12273 */     var $scope682 = (function $entry_point683$(iterations) {
/* 12274 */         var endTime, r, result, startTime; /* locals */
/* 12275 */         var endTime, endTime, iterations, iterations, r, r, result, result, startTime, startTime, $loadgbl684, $loadgbl686, $loadgbl686, $lattr687, $lattr689, $loadgbl691, $loadgbl691, $lattr692;
/* 12276 */         var $wakeFromSuspension = function() {
/* 12277 */             var susp = $scope682.$wakingSuspension;
/* 12278 */             delete $scope682.$wakingSuspension;
/* 12279 */             $blk = susp.$blk;
/* 12280 */             $loc = susp.$loc;
/* 12281 */             $gbl = susp.$gbl;
/* 12282 */             $exc = susp.$exc;
/* 12283 */             $err = susp.$err;
/* 12284 */             $postfinally = susp.$postfinally;
/* 12285 */             $currLineNo = susp.$lineno;
/* 12286 */             $currColNo = susp.$colno;
/* 12287 */             Sk.lastYield = Date.now();
/* 12288 */             endTime = susp.$tmps.endTime;
/* 12289 */             iterations = susp.$tmps.iterations;
/* 12290 */             r = susp.$tmps.r;
/* 12291 */             result = susp.$tmps.result;
/* 12292 */             startTime = susp.$tmps.startTime;
/* 12293 */             $loadgbl684 = susp.$tmps.$loadgbl684;
/* 12294 */             $loadgbl686 = susp.$tmps.$loadgbl686;
/* 12295 */             $lattr687 = susp.$tmps.$lattr687;
/* 12296 */             $lattr689 = susp.$tmps.$lattr689;
/* 12297 */             $loadgbl691 = susp.$tmps.$loadgbl691;
/* 12298 */             $lattr692 = susp.$tmps.$lattr692;
/* 12299 */             try {
/* 12300 */                 $ret = susp.child.resume();
/* 12301 */             } catch (err) {
/* 12302 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12303 */                     err = new Sk.builtin.ExternalError(err);
/* 12304 */                 }
/* 12305 */                 err.traceback.push({
/* 12306 */                     lineno: $currLineNo,
/* 12307 */                     colno: $currColNo,
/* 12308 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12309 */                 });
/* 12310 */                 if ($exc.length > 0) {
/* 12311 */                     $err = err;
/* 12312 */                     $blk = $exc.pop();
/* 12313 */                 } else {
/* 12314 */                     throw err;
/* 12315 */                 }
/* 12316 */             }
/* 12317 */         };
/* 12318 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12319 */             var susp = new Sk.misceval.Suspension();
/* 12320 */             susp.child = $child;
/* 12321 */             susp.resume = function() {
/* 12322 */                 $scope682.$wakingSuspension = susp;
/* 12323 */                 return $scope682();
/* 12324 */             };
/* 12325 */             susp.data = susp.child.data;
/* 12326 */             susp.$blk = $blk;
/* 12327 */             susp.$loc = $loc;
/* 12328 */             susp.$gbl = $gbl;
/* 12329 */             susp.$exc = $exc;
/* 12330 */             susp.$err = $err;
/* 12331 */             susp.$postfinally = $postfinally;
/* 12332 */             susp.$filename = $filename;
/* 12333 */             susp.$lineno = $lineno;
/* 12334 */             susp.$colno = $colno;
/* 12335 */             susp.optional = susp.child.optional;
/* 12336 */             susp.$tmps = {
/* 12337 */                 "endTime": endTime,
/* 12338 */                 "iterations": iterations,
/* 12339 */                 "r": r,
/* 12340 */                 "result": result,
/* 12341 */                 "startTime": startTime,
/* 12342 */                 "$loadgbl684": $loadgbl684,
/* 12343 */                 "$loadgbl686": $loadgbl686,
/* 12344 */                 "$lattr687": $lattr687,
/* 12345 */                 "$lattr689": $lattr689,
/* 12346 */                 "$loadgbl691": $loadgbl691,
/* 12347 */                 "$lattr692": $lattr692
/* 12348 */             };
/* 12349 */             return susp;
/* 12350 */         };
/* 12351 */         var $blk = 0,
/* 12352 */             $exc = [],
/* 12353 */             $loc = {},
/* 12354 */             $gbl = this,
/* 12355 */             $err = undefined,
/* 12356 */             $ret = undefined,
/* 12357 */             $postfinally = undefined,
/* 12358 */             $currLineNo = undefined,
/* 12359 */             $currColNo = undefined;
/* 12360 */         if ($scope682.$wakingSuspension !== undefined) {
/* 12361 */             $wakeFromSuspension();
/* 12362 */         } else {
/* 12363 */             Sk.builtin.pyCheckArgs("entry_point", arguments, 1, 1, false, false);
/* 12364 */         }
/* 12365 */         while (true) {
/* 12366 */             try {
/* 12367 */                 switch ($blk) {
/* 12368 */                 case 0:
/* 12369 */                     /* --- codeobj entry --- */
/* 12370 */                     if (iterations === undefined) {
/* 12371 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12372 */                     }
/* 12373 */ 
/* 12374 */                     //
/* 12375 */                     // line 399:
/* 12376 */                     //     r = Richards()
/* 12377 */                     //     ^
/* 12378 */                     //
/* 12379 */                     $currLineNo = 399;
/* 12380 */                     $currColNo = 4;
/* 12381 */ 
/* 12382 */                     var $loadgbl684 = Sk.misceval.loadname('Richards', $gbl);
/* 12383 */                     $ret;
/* 12384 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl684);
/* 12385 */                     $blk = 1; /* allowing case fallthrough */
/* 12386 */                 case 1:
/* 12387 */                     /* --- function return or resume suspension --- */
/* 12388 */                     if ($ret && $ret.$isSuspension) {
/* 12389 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 399, 8);
/* 12390 */                     }
/* 12391 */                     var $call685 = $ret;
/* 12392 */                     //
/* 12393 */                     // line 399:
/* 12394 */                     //     r = Richards()
/* 12395 */                     //         ^
/* 12396 */                     //
/* 12397 */                     $currLineNo = 399;
/* 12398 */                     $currColNo = 8;
/* 12399 */ 
/* 12400 */                     r = $call685;
/* 12401 */                     //
/* 12402 */                     // line 400:
/* 12403 */                     //     startTime = time.time()
/* 12404 */                     //     ^
/* 12405 */                     //
/* 12406 */                     $currLineNo = 400;
/* 12407 */                     $currColNo = 4;
/* 12408 */ 
/* 12409 */                     var $loadgbl686 = Sk.misceval.loadname('time', $gbl);
/* 12410 */                     $ret = Sk.abstr.gattr($loadgbl686, 'time', true);
/* 12411 */                     $blk = 2; /* allowing case fallthrough */
/* 12412 */                 case 2:
/* 12413 */                     /* --- function return or resume suspension --- */
/* 12414 */                     if ($ret && $ret.$isSuspension) {
/* 12415 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 400, 16);
/* 12416 */                     }
/* 12417 */                     var $lattr687 = $ret;
/* 12418 */                     $ret;
/* 12419 */                     $ret = Sk.misceval.callsimOrSuspend($lattr687);
/* 12420 */                     $blk = 3; /* allowing case fallthrough */
/* 12421 */                 case 3:
/* 12422 */                     /* --- function return or resume suspension --- */
/* 12423 */                     if ($ret && $ret.$isSuspension) {
/* 12424 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 400, 16);
/* 12425 */                     }
/* 12426 */                     var $call688 = $ret;
/* 12427 */                     //
/* 12428 */                     // line 400:
/* 12429 */                     //     startTime = time.time()
/* 12430 */                     //                 ^
/* 12431 */                     //
/* 12432 */                     $currLineNo = 400;
/* 12433 */                     $currColNo = 16;
/* 12434 */ 
/* 12435 */                     startTime = $call688;
/* 12436 */                     //
/* 12437 */                     // line 401:
/* 12438 */                     //     result = r.run(iterations)
/* 12439 */                     //     ^
/* 12440 */                     //
/* 12441 */                     $currLineNo = 401;
/* 12442 */                     $currColNo = 4;
/* 12443 */ 
/* 12444 */                     if (r === undefined) {
/* 12445 */                         throw new Sk.builtin.UnboundLocalError('local variable \'r\' referenced before assignment');
/* 12446 */                     }
/* 12447 */                     $ret = Sk.abstr.gattr(r, 'run', true);
/* 12448 */                     $blk = 4; /* allowing case fallthrough */
/* 12449 */                 case 4:
/* 12450 */                     /* --- function return or resume suspension --- */
/* 12451 */                     if ($ret && $ret.$isSuspension) {
/* 12452 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 401, 13);
/* 12453 */                     }
/* 12454 */                     var $lattr689 = $ret;
/* 12455 */                     if (iterations === undefined) {
/* 12456 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12457 */                     }
/* 12458 */                     $ret;
/* 12459 */                     $ret = Sk.misceval.callsimOrSuspend($lattr689, iterations);
/* 12460 */                     $blk = 5; /* allowing case fallthrough */
/* 12461 */                 case 5:
/* 12462 */                     /* --- function return or resume suspension --- */
/* 12463 */                     if ($ret && $ret.$isSuspension) {
/* 12464 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 401, 13);
/* 12465 */                     }
/* 12466 */                     var $call690 = $ret;
/* 12467 */                     //
/* 12468 */                     // line 401:
/* 12469 */                     //     result = r.run(iterations)
/* 12470 */                     //              ^
/* 12471 */                     //
/* 12472 */                     $currLineNo = 401;
/* 12473 */                     $currColNo = 13;
/* 12474 */ 
/* 12475 */                     result = $call690;
/* 12476 */                     //
/* 12477 */                     // line 402:
/* 12478 */                     //     endTime = time.time()
/* 12479 */                     //     ^
/* 12480 */                     //
/* 12481 */                     $currLineNo = 402;
/* 12482 */                     $currColNo = 4;
/* 12483 */ 
/* 12484 */                     var $loadgbl691 = Sk.misceval.loadname('time', $gbl);
/* 12485 */                     $ret = Sk.abstr.gattr($loadgbl691, 'time', true);
/* 12486 */                     $blk = 6; /* allowing case fallthrough */
/* 12487 */                 case 6:
/* 12488 */                     /* --- function return or resume suspension --- */
/* 12489 */                     if ($ret && $ret.$isSuspension) {
/* 12490 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 402, 14);
/* 12491 */                     }
/* 12492 */                     var $lattr692 = $ret;
/* 12493 */                     $ret;
/* 12494 */                     $ret = Sk.misceval.callsimOrSuspend($lattr692);
/* 12495 */                     $blk = 7; /* allowing case fallthrough */
/* 12496 */                 case 7:
/* 12497 */                     /* --- function return or resume suspension --- */
/* 12498 */                     if ($ret && $ret.$isSuspension) {
/* 12499 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 402, 14);
/* 12500 */                     }
/* 12501 */                     var $call693 = $ret;
/* 12502 */                     //
/* 12503 */                     // line 402:
/* 12504 */                     //     endTime = time.time()
/* 12505 */                     //               ^
/* 12506 */                     //
/* 12507 */                     $currLineNo = 402;
/* 12508 */                     $currColNo = 14;
/* 12509 */ 
/* 12510 */                     endTime = $call693;
/* 12511 */                     //
/* 12512 */                     // line 403:
/* 12513 */                     //     return result, startTime, endTime
/* 12514 */                     //     ^
/* 12515 */                     //
/* 12516 */                     $currLineNo = 403;
/* 12517 */                     $currColNo = 4;
/* 12518 */ 
/* 12519 */                     if (result === undefined) {
/* 12520 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 12521 */                     }
/* 12522 */                     var $elem694 = result;
/* 12523 */                     if (startTime === undefined) {
/* 12524 */                         throw new Sk.builtin.UnboundLocalError('local variable \'startTime\' referenced before assignment');
/* 12525 */                     }
/* 12526 */                     var $elem695 = startTime;
/* 12527 */                     if (endTime === undefined) {
/* 12528 */                         throw new Sk.builtin.UnboundLocalError('local variable \'endTime\' referenced before assignment');
/* 12529 */                     }
/* 12530 */                     var $elem696 = endTime;
/* 12531 */                     var $loadtuple697 = new Sk.builtins['tuple']([$elem694, $elem695, $elem696]);
/* 12532 */                     return $loadtuple697;
/* 12533 */                     return Sk.builtin.none.none$;
/* 12534 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12535 */                 }
/* 12536 */             } catch (err) {
/* 12537 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12538 */                     err = new Sk.builtin.ExternalError(err);
/* 12539 */                 }
/* 12540 */                 err.traceback.push({
/* 12541 */                     lineno: $currLineNo,
/* 12542 */                     colno: $currColNo,
/* 12543 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12544 */                 });
/* 12545 */                 if ($exc.length > 0) {
/* 12546 */                     $err = err;
/* 12547 */                     $blk = $exc.pop();
/* 12548 */                     continue;
/* 12549 */                 } else {
/* 12550 */                     throw err;
/* 12551 */                 }
/* 12552 */             }
/* 12553 */         }
/* 12554 */     });
/* 12555 */     var $scope700 = (function $main701$(entry_point, iterations) {
/* 12556 */         var endTime, result, startTime, total_s; /* locals */
/* 12557 */         var endTime, endTime, entry_point, entry_point, entry_point, iterations, iterations, iterations, result, result, startTime, startTime, total_s;
/* 12558 */         var $wakeFromSuspension = function() {
/* 12559 */             var susp = $scope700.$wakingSuspension;
/* 12560 */             delete $scope700.$wakingSuspension;
/* 12561 */             $blk = susp.$blk;
/* 12562 */             $loc = susp.$loc;
/* 12563 */             $gbl = susp.$gbl;
/* 12564 */             $exc = susp.$exc;
/* 12565 */             $err = susp.$err;
/* 12566 */             $postfinally = susp.$postfinally;
/* 12567 */             $currLineNo = susp.$lineno;
/* 12568 */             $currColNo = susp.$colno;
/* 12569 */             Sk.lastYield = Date.now();
/* 12570 */             endTime = susp.$tmps.endTime;
/* 12571 */             entry_point = susp.$tmps.entry_point;
/* 12572 */             iterations = susp.$tmps.iterations;
/* 12573 */             result = susp.$tmps.result;
/* 12574 */             startTime = susp.$tmps.startTime;
/* 12575 */             total_s = susp.$tmps.total_s;
/* 12576 */             try {
/* 12577 */                 $ret = susp.child.resume();
/* 12578 */             } catch (err) {
/* 12579 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12580 */                     err = new Sk.builtin.ExternalError(err);
/* 12581 */                 }
/* 12582 */                 err.traceback.push({
/* 12583 */                     lineno: $currLineNo,
/* 12584 */                     colno: $currColNo,
/* 12585 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12586 */                 });
/* 12587 */                 if ($exc.length > 0) {
/* 12588 */                     $err = err;
/* 12589 */                     $blk = $exc.pop();
/* 12590 */                 } else {
/* 12591 */                     throw err;
/* 12592 */                 }
/* 12593 */             }
/* 12594 */         };
/* 12595 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12596 */             var susp = new Sk.misceval.Suspension();
/* 12597 */             susp.child = $child;
/* 12598 */             susp.resume = function() {
/* 12599 */                 $scope700.$wakingSuspension = susp;
/* 12600 */                 return $scope700();
/* 12601 */             };
/* 12602 */             susp.data = susp.child.data;
/* 12603 */             susp.$blk = $blk;
/* 12604 */             susp.$loc = $loc;
/* 12605 */             susp.$gbl = $gbl;
/* 12606 */             susp.$exc = $exc;
/* 12607 */             susp.$err = $err;
/* 12608 */             susp.$postfinally = $postfinally;
/* 12609 */             susp.$filename = $filename;
/* 12610 */             susp.$lineno = $lineno;
/* 12611 */             susp.$colno = $colno;
/* 12612 */             susp.optional = susp.child.optional;
/* 12613 */             susp.$tmps = {
/* 12614 */                 "endTime": endTime,
/* 12615 */                 "entry_point": entry_point,
/* 12616 */                 "iterations": iterations,
/* 12617 */                 "result": result,
/* 12618 */                 "startTime": startTime,
/* 12619 */                 "total_s": total_s
/* 12620 */             };
/* 12621 */             return susp;
/* 12622 */         };
/* 12623 */         var $blk = 0,
/* 12624 */             $exc = [],
/* 12625 */             $loc = {},
/* 12626 */             $gbl = this,
/* 12627 */             $err = undefined,
/* 12628 */             $ret = undefined,
/* 12629 */             $postfinally = undefined,
/* 12630 */             $currLineNo = undefined,
/* 12631 */             $currColNo = undefined;
/* 12632 */         if ($scope700.$wakingSuspension !== undefined) {
/* 12633 */             $wakeFromSuspension();
/* 12634 */         } else {
/* 12635 */             if (entry_point === undefined) entry_point = $scope700.$defaults[0];
/* 12636 */             if (iterations === undefined) iterations = $scope700.$defaults[1];
/* 12637 */             Sk.builtin.pyCheckArgs("main", arguments, 0, 2, false, false);
/* 12638 */         }
/* 12639 */         while (true) {
/* 12640 */             try {
/* 12641 */                 switch ($blk) {
/* 12642 */                 case 0:
/* 12643 */                     /* --- codeobj entry --- */
/* 12644 */                     if (entry_point === undefined) {
/* 12645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 12646 */                     }
/* 12647 */                     if (iterations === undefined) {
/* 12648 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12649 */                     }
/* 12650 */                     if (entry_point === undefined) {
/* 12651 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 12652 */                     }
/* 12653 */                     if (iterations === undefined) {
/* 12654 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12655 */                     }
/* 12656 */ 
/* 12657 */                     //
/* 12658 */                     // line 406:
/* 12659 */                     //     pass #print("Richards benchmark (Python) starting... [%r]",entry_point)
/* 12660 */                     //     ^
/* 12661 */                     //
/* 12662 */                     $currLineNo = 406;
/* 12663 */                     $currColNo = 4;
/* 12664 */ 
/* 12665 */ 
/* 12666 */                     //
/* 12667 */                     // line 407:
/* 12668 */                     //     result, startTime, endTime = entry_point(iterations)
/* 12669 */                     //     ^
/* 12670 */                     //
/* 12671 */                     $currLineNo = 407;
/* 12672 */                     $currColNo = 4;
/* 12673 */ 
/* 12674 */                     if (entry_point === undefined) {
/* 12675 */                         throw new Sk.builtin.UnboundLocalError('local variable \'entry_point\' referenced before assignment');
/* 12676 */                     }
/* 12677 */                     if (iterations === undefined) {
/* 12678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'iterations\' referenced before assignment');
/* 12679 */                     }
/* 12680 */                     $ret;
/* 12681 */                     $ret = Sk.misceval.callsimOrSuspend(entry_point, iterations);
/* 12682 */                     $blk = 1; /* allowing case fallthrough */
/* 12683 */                 case 1:
/* 12684 */                     /* --- function return or resume suspension --- */
/* 12685 */                     if ($ret && $ret.$isSuspension) {
/* 12686 */                         return $saveSuspension($ret, '/home/sbaxter/benchmarks/skulpt/richards/main.py', 407, 33);
/* 12687 */                     }
/* 12688 */                     var $call702 = $ret;
/* 12689 */                     //
/* 12690 */                     // line 407:
/* 12691 */                     //     result, startTime, endTime = entry_point(iterations)
/* 12692 */                     //                                  ^
/* 12693 */                     //
/* 12694 */                     $currLineNo = 407;
/* 12695 */                     $currColNo = 33;
/* 12696 */ 
/* 12697 */                     var $items703 = Sk.abstr.sequenceUnpack($call702, 3);
/* 12698 */                     result = $items703[0];
/* 12699 */                     startTime = $items703[1];
/* 12700 */                     endTime = $items703[2];
/* 12701 */                     //
/* 12702 */                     // line 408:
/* 12703 */                     //     if not result:
/* 12704 */                     //     ^
/* 12705 */                     //
/* 12706 */                     $currLineNo = 408;
/* 12707 */                     $currColNo = 4;
/* 12708 */ 
/* 12709 */                     if (result === undefined) {
/* 12710 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/* 12711 */                     }
/* 12712 */                     var $unaryop704 = Sk.abstr.numberUnaryOp(result, 'Not');
/* 12713 */                     var $jfalse705 = ($unaryop704 === false || !Sk.misceval.isTrue($unaryop704));
/* 12714 */                     if ($jfalse705) { /*test failed */
/* 12715 */                         $blk = 2;
/* 12716 */                         continue;
/* 12717 */                     }
/* 12718 */                     //
/* 12719 */                     // line 409:
/* 12720 */                     //         pass #print("Incorrect results!")
/* 12721 */                     //         ^
/* 12722 */                     //
/* 12723 */                     $currLineNo = 409;
/* 12724 */                     $currColNo = 8;
/* 12725 */ 
/* 12726 */ 
/* 12727 */                     //
/* 12728 */                     // line 410:
/* 12729 */                     //         return -1
/* 12730 */                     //         ^
/* 12731 */                     //
/* 12732 */                     $currLineNo = 410;
/* 12733 */                     $currColNo = 8;
/* 12734 */ 
/* 12735 */                     return new Sk.builtin.int_(-1);
/* 12736 */                     $blk = 2; /* allowing case fallthrough */
/* 12737 */                 case 2:
/* 12738 */                     /* --- end of if --- */
/* 12739 */                     //
/* 12740 */                     // line 411:
/* 12741 */                     //     pass #print("finished.")
/* 12742 */                     //     ^
/* 12743 */                     //
/* 12744 */                     $currLineNo = 411;
/* 12745 */                     $currColNo = 4;
/* 12746 */ 
/* 12747 */ 
/* 12748 */                     //
/* 12749 */                     // line 412:
/* 12750 */                     //     total_s = endTime - startTime
/* 12751 */                     //     ^
/* 12752 */                     //
/* 12753 */                     $currLineNo = 412;
/* 12754 */                     $currColNo = 4;
/* 12755 */ 
/* 12756 */                     if (endTime === undefined) {
/* 12757 */                         throw new Sk.builtin.UnboundLocalError('local variable \'endTime\' referenced before assignment');
/* 12758 */                     }
/* 12759 */                     if (startTime === undefined) {
/* 12760 */                         throw new Sk.builtin.UnboundLocalError('local variable \'startTime\' referenced before assignment');
/* 12761 */                     }
/* 12762 */                     var $binop706 = Sk.abstr.numberBinOp(endTime, startTime, 'Sub');
/* 12763 */                     total_s = $binop706;
/* 12764 */                     //
/* 12765 */                     // line 413:
/* 12766 */                     //     pass #print("Total time for %d iterations: %.2f secs",iterations,total_s)
/* 12767 */                     //     ^
/* 12768 */                     //
/* 12769 */                     $currLineNo = 413;
/* 12770 */                     $currColNo = 4;
/* 12771 */ 
/* 12772 */ 
/* 12773 */                     //
/* 12774 */                     // line 414:
/* 12775 */                     //     pass #print("Average time per iteration: %.2f ms",total_s*1000/iterations)
/* 12776 */                     //     ^
/* 12777 */                     //
/* 12778 */                     $currLineNo = 414;
/* 12779 */                     $currColNo = 4;
/* 12780 */ 
/* 12781 */ 
/* 12782 */                     //
/* 12783 */                     // line 415:
/* 12784 */                     //     return 42
/* 12785 */                     //     ^
/* 12786 */                     //
/* 12787 */                     $currLineNo = 415;
/* 12788 */                     $currColNo = 4;
/* 12789 */ 
/* 12790 */                     return new Sk.builtin.int_(42);
/* 12791 */                     return Sk.builtin.none.none$;
/* 12792 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12793 */                 }
/* 12794 */             } catch (err) {
/* 12795 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12796 */                     err = new Sk.builtin.ExternalError(err);
/* 12797 */                 }
/* 12798 */                 err.traceback.push({
/* 12799 */                     lineno: $currLineNo,
/* 12800 */                     colno: $currColNo,
/* 12801 */                     filename: '/home/sbaxter/benchmarks/skulpt/richards/main.py'
/* 12802 */                 });
/* 12803 */                 if ($exc.length > 0) {
/* 12804 */                     $err = err;
/* 12805 */                     $blk = $exc.pop();
/* 12806 */                     continue;
/* 12807 */                 } else {
/* 12808 */                     throw err;
/* 12809 */                 }
/* 12810 */             }
/* 12811 */         }
/* 12812 */     });
/* 12813 */     return $scope120;
/* 12814 */ }();
