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
;;; FIBC -- FIB using first-class continuations, written by Kent Dybvig

(define (_1+ n) (+ n 1))
(define (_1- n) (- n 1))

;;; fib with peano arithmetic (using numbers) with call/cc

(define (addc x y k)
  (if (zero? y)
    (k x)
    (addc (_1+ x) (_1- y) k)))

(define (fibc x c)
  (if (zero? x)
    (c 0)
    (if (zero? (_1- x))
      (c 1)
      (addc (call-with-current-continuation (lambda (c) (fibc (_1- x) c)))
            (call-with-current-continuation (lambda (c) (fibc (_1- (_1- x)) c)))
            c))))

(define (main)
  (run-benchmark
    "fibc"
    fibc-iters
    (lambda (result) (equal? result 2584))
    (lambda (x c) (lambda () (fibc x c)))
    18
    (lambda (n) n)))
(main)
