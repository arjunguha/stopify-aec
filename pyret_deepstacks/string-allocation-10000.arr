import file("./benchmark-base.arr") as B

B.benchmark(lam(): range(0, 10000).join-str(",") end, 10)
# test lots of string allocation
