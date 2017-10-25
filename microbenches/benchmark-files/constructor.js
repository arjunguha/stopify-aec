const ITERS = 1000000000;

function Ctor() {
  while (false) {}
}

for (let i = 0; i < ITERS; i++) {
  new Ctor();
}
