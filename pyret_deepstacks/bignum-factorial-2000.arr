import file("./benchmark-base.arr") as B
fun fact(n):
  if n <= 0: 1
  else: n * fact(n - 1)
  end
end

B.benchmark(lam(): fact(2000) end, 100)
# test bignum allocations
