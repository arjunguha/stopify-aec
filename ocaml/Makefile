DIRS = almabench bdd boyer fft fibonnaci format hamming kahan_sum kb lens list nucleic nullable_array num_analysis sequence sieve vector_functor
SOURCES = $(wildcard benchmark-files/*)
OUTPUT = $(SOURCES:benchmark-files/%.ml=js-build/%.js)

all:
	bsb
	$(foreach dir,$(DIRS),$(dir)/webpack $(dir);)
