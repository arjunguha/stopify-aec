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
;;; SUM1 -- One of the Kernighan and Van Wyk benchmarks.

(define inport #f)

(define (sumport port sum-so-far)
  (let ((x (read port)))
    (if (eof-object? x)
        sum-so-far
        (sumport port (FLOAT+ x sum-so-far)))))

(define (sum port)
  (sumport port 0.0))

(define (go)
  (set! inport (open-input-file "../data/rn100"))
  (let ((result (sum inport)))
    (close-input-port inport)
    result))

(define (main . args)
  (run-benchmark
   "sum1"
   sum1-iters
   (lambda (result) (and (FLOAT>= result 15794.974999999)
                         (FLOAT<= result 15794.975000001)))
   (lambda () (lambda () (go)))))
(main)
