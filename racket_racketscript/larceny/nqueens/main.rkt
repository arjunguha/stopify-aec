#lang r5rs

(define (time x) x)

(define (run-bench name count ok? run)
  (let loop ((i 0) (result (list 'undefined)))
    (if (< i count)
      (loop (+ i 1) (run))
      result)))

(define (run-benchmark name count ok? run-maker . args)
  (newline)
  (let* ((run (apply run-maker args))
         (result (time (run-bench name count ok? run))))
    (if (not (ok? result))
      (begin
        (display "*** wrong result ***")
        (newline)
        (display "*** got: ")
        (write result)
        (newline))
      (begin
        (display "OK") 
        (newline)))))

; Gabriel benchmarks
(define boyer-iters       150)
(define browse-iters     2000)
(define cpstak-iters     9000)
(define ctak-iters        500)
(define dderiv-iters  8000000)
(define deriv-iters  13000000)
(define destruc-iters    3500)
(define diviter-iters 9000000)
(define divrec-iters  3000000)
(define puzzle-iters     1000)
(define tak-iters       12000)
(define takl-iters       2000)
(define trav1-iters      1000)
(define trav2-iters       250)
(define triangl-iters     100)

; Kernighan and Van Wyk benchmarks
(define ack-iters          80)
(define array1-iters       16)
(define cat-iters           8)
(define string-iters      600)
(define sum1-iters         70)
(define sumloop-iters      40)
(define tail-iters          8)
(define wc-iters            8)

; C benchmarks
(define fft-iters      100000)
(define fib-iters          25)
(define fibfp-iters        20)
(define mbrot-iters      3500)
(define nucleic-iters     150)
(define pnpoly-iters  2000000)
(define sum-iters      350000)
(define sumfp-iters    250000)
; (define tfib-iters         20) threads

; Other benchmarks
(define conform-iters     100)
(define dynamic-iters      40)
(define earley-iters      600)
(define fibc-iters      40000)
(define graphs-iters     1000)
(define lattice-iters       2)
(define matrix-iters      800)
(define maze-iters      10000)
(define mazefun-iters    3000)
(define nqueens-iters    7500)
(define paraffins-iters  2000)
(define peval-iters       300)
(define pi-iters           40)
(define primes-iters   350000)
(define ray-iters         350)
(define scheme-iters    50000)
(define simplex-iters  800000)
(define slatex-iters       20)
(define perm9-iters        50)
(define nboyer-iters      250)
(define sboyer-iters      300)
(define gcbench-iters       5)
;; (define compiler-iters    300)

; New benchmarks
(define parsing-iters    1000)
(define gcold-iters      3500)
(define quicksort-iters   500) ; uses bignums in rand, must fix
;; (define nbody-iters         1)

;;; NQUEENS -- Compute number of solutions to 8-queens problem.

(define trace? #f)

(define (nqueens n)

  (define (_1-to n)
    (let loop ((i n) (l '()))
      (if (= i 0) l (loop (- i 1) (cons i l)))))

  (define (my-try x y z)
    (if (null? x)
      (if (null? y)
        (begin (if trace? (begin (write z) (newline))) 1)
        0)
      (+ (if (ok? (car x) 1 z)
           (my-try (append (cdr x) y) '() (cons (car x) z))
           0)
         (my-try (cdr x) (cons (car x) y) z))))

  (define (ok? row dist placed)
    (if (null? placed)
      #t
      (and (not (= (car placed) (+ row dist)))
           (not (= (car placed) (- row dist)))
           (ok? row (+ dist 1) (cdr placed)))))

  (my-try (_1-to n) '() '()))

(define (main)
  (run-benchmark
   "nqueens"
   nqueens-iters
   (lambda (result) (equal? result 92))
   (lambda (n) (lambda () (nqueens n)))
   8))

(main)