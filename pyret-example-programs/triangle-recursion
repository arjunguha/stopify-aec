#|
   
   Note that the analogous program in JavaScript quickly raises an exception
   due to exhausting stack space.

   Here, we can calculate extremely deep recursive calls (in fact, up to the heap size
   available). This uses Stopify to pause and reify the stack to the heap when
   the stack gets too deep.
|#


fun triangle(n):
  if n < 1: 0
  else:
    n + triangle(n - 1)
  end
end

triangle(1000000)
