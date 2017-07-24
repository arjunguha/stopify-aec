 (define (contfib n)
   (if (< n 2)

     (call/cc
       (lambda (k)
         (k 1)))

     (+ (contfib (- n 1))
        (contfib (- n 2)))))

(contfib 30)
