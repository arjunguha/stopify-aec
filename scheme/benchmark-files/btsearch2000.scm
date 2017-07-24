(define fail (lambda () #f))

(define (in-range a b)
  (call/cc
    (lambda (cont)
      (enumerate a b cont))))

(define (enumerate a b cont)
  (if (> a b)
    (fail)
    (let ((save fail))
      (set! fail
        (lambda ()
          (set! fail save)
          (enumerate (+ a 1) b cont)))
      (cont a))))

(define (btsearch n)
  (let* ((n*2 (* n 2))
         (x (in-range 0 n))
         (y (in-range 0 n)))
    (if (< (+ x y) n*2)
      (fail) ;; backtrack
      (cons x y))))

(btsearch 2000)
