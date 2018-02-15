(define divrec-iters 10)
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
;;; DIVREC -- Benchmark which divides by 2 using lists of n ()'s.

(define (create-n n)
  (do ((n n (- n 1))
       (a '() (cons '() a)))
      ((= n 0) a)))

(define *ll* (create-n 200))

(define (recursive-div2 l)
  (cond ((null? l) '())
        (else (cons (car l) (recursive-div2 (cddr l))))))

(define (main . args)
  (run-benchmark
    "divrec"
    divrec-iters
    (lambda (result)
      (equal? result
              '(() () () () () () () () () () () () () () () () () () () ()
                () () () () () () () () () () () () () () () () () () () ()
                () () () () () () () () () () () () () () () () () () () ()
                () () () () () () () () () () () () () () () () () () () ()
                () () () () () () () () () () () () () () () () () () () ())))
    (lambda (l) (lambda () (recursive-div2 l)))
    *ll*))
(main)
