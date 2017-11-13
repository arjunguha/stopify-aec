import file("./benchmark-base.arr") as B

lst = {
  method sum(self, n):
    if n <= 0: 0
    else:
      n + self.sum(n - 1)
    end
  end
}

B.benchmark(lam(): lst.sum(500000) end, 1)
