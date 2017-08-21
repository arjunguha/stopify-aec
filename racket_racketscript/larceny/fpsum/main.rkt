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
;;; FPSUM - Compute sum of integers from 0 to 1e6 using floating point

(define (run)
  (let loop ((i 1e6) (n 0.))
    (if (FLOAT< i 0.)
      n
      (loop (FLOAT- i 1.) (FLOAT+ i n)))))
 
(define (main . args)
  (run-benchmark
    "fpsum"
    fpsum-iters
    (lambda () (run))
    (lambda (result) (equal? result 500000500000.))))
(main)
