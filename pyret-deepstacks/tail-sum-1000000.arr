import file("./benchmark-base.arr") as B

fun sum(n, sofar):
  if n <= 0: sofar
  else:
    sum(n - 1, sofar + n)
  end
end

B.benchmark(lam(): sum(500000, 0) end, 1)
