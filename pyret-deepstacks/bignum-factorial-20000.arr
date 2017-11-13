import file("./benchmark-base.arr") as B

fun main():
  fun fact(n):
    if n <= 0: 1
    else: n * fact(n - 1)
    end
  end
  fact(20000)
end
# test bignum allocations

B.benchmark(lam(): main() end, 2)
