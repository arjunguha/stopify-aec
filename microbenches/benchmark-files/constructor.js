const ITERS = 100000000;

function Ctor() {
  while (false) {}
}

for (let i = 0; i < ITERS; i++) {
  new Ctor();
}
