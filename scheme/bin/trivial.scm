(define (f)
  (display "in f")
  42)

(define (g x)
  (let ([y (+ x 1)])
    (f 100)
    (f 200)))
  

(define rr (list 1 2 3 4))
    
  (g)

(define (sequence f g)
  (f)
  (g))
