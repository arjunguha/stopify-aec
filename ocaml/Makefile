DIRS = almabench bdd boyer fft fibonnaci format hamming kahan_sum kb lens list nucleic nullable_array num_analysis sequence vector_functor
SOURCES = $(wildcard benchmark-files/*)
OUTPUT = $(SOURCES:benchmark-files/%.ml=js-build/%.js)

all: $(OUTPUT)
	bsb
	$(foreach dir,$(DIRS),$(dir)/webpack $(dir);)

js-build:
	mkdir -p js-build/

lib/js/benchmark-files/%.js: benchmark-files/%.ml
	bsb

js-build/%.js: lib/js/benchmark-files/%.js js-build | js-build
	webpack $< $@

clean:
	rm -rf lib/ js-build/
