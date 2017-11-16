const ITERS = 100000;

function f(n) {
  if (n > 0) {
    f(n-1);
  }
}

for (let i = 0; i < ITERS; i++) {
  f(100);
}
