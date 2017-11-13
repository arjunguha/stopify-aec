import file("./benchmark-base.arr") as B
import string-dict as SD
m = [SD.mutable-string-dict:]
fun main():
  for map(i from range(0, 100000)):
    m.set-now(num-to-string(i), true)
  end
end
# test growing mutable-string-dict

B.benchmark(lam(): main() end, 10)
