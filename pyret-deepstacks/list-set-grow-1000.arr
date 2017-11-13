import file("./benchmark-base.arr") as B
import sets as S

fun main():
for fold(s from [S.list-set:], i from range(0, 1000)):
  s.add(i)
end
end

# test growing list-set
B.benchmark(lam(): main() end, 10)
