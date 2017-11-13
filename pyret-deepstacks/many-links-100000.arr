import file("./benchmark-base.arr") as B

B.benchmark(lam(): range(0,100000) end, 100)
# test allocation of a lot of links
