## Benchmarks
### Ton 80
Accessed 10/30
- [X] Havlak (stack overflow)
- [X] DeltaBlue
- [X] FluidMotion
- [X] Tracer
- [X] Richards

### Language shootout
Accessed CVS repository 10/30
- [X] binarytrees
- [X] fannkuchredux
- [X] fasta
- [X] fastaredux
- [X] knucleotide
- [X] mandelbrot (Uses async)
- [X] nbody
- [X] pidigits
- [X] regexdna
- [X] regexredux
- [X] revcomp
- [X] spectralnorm

## Modifications
In general, all benchmarks are using the BenchmarkBase harness.
- binarytrees: Remove printing.
- fasta: Remove priting.
- fasta: Remove priting. Set CLI argument to language shootout default.
- pidigits: Remove printing. Set CLI argument to language shootout default.
- knucleotide: Paste input as a string. Remove printing. Run 1000 times.
- regexdna: Paste input as a string. Remove printing. Run 1000 times.
- regexredux: Paste input as a string. Remove printing. Run 1000 times.
- revcomp: Paste input as a string and remove stdin stream listeners. Remove printing.

## Excluded
- Havlak: Stack overflow in the compiled JS file.
- Mandelbrot: Makes use of dart:async
