const ITERS = 1000000000;

function f(x, y, z) {
  while (false) {}
  return x + y + z;
}

for (let i = 0; i < ITERS; i++) {
  f(i, i+1, i+2);
}
