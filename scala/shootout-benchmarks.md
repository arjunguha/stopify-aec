## Benchmarks
- [X] binarytrees
- [X] chameneosredux (using threads)
- [X] fannkuchredux
- [X] fasta
- [X] fastaredux
- [X] knucleotide
- [X] mandelbrot
- [X] meteor
- [X] nbody
- [X] pidigits
- [X] regexdna
- [X] regexredux
- [X] revcomp (using java.io.ByteArrayOutputStream, hard to factor out IO)
- [X] spectralnorm
- [X] threadring (missing for scala)

## Modifications
- BinaryTrees: Set CLI argument to 21 (language shootout default).
- FastaRedux: Disable printing. Set CLI argument to 2500000 (language shootout default)
- Fasta: Disable printing.
- knucleotide: Remove ParSeq. Paste input file as a string.
- mandelbrot: Remove .par. Remove bitmap output. Set CLI argument as 16000 (language shootout default)
- Regexdna: Paste input file as a string.
- Regexredux: Paste input file as a string.
- spectralnorm: Set CLI argument to 5500 (language shootout default)
- fannkuchredux: Set CLI argument to 12 (language shootout default)
- meteor: Set CLI argument to 2098 (language shootout default)
