import file("./benchmark-base.arr") as B
fun f():
  fun g(): nothing end
  g()
end

fun iter(n, thunk):
  if n <= 0 block: nothing
  else:
     thunk()
     iter(n - 1, thunk)
  end
end

B.benchmark(lam(): iter(10000, f) end, 100)
# test the cost of inner function allocation
