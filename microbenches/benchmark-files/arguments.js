const ITERS = 100000000;

function f() {
  while (false) {}
  const foo = arguments;
}

for (let i = 0; i < ITERS; i++) {
  f();
}
