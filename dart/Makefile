BDIR=./benchmark-files
SRCS = $(wildcard $(BDIR)/*.dart)
OBJS = $(patsubst $(BDIR)/%.dart,js-build/%.js,$(SRCS)) \
			 ./js-build/Tracer.js

.PHONY: all
all: $(OBJS)
	rm js-build/*deps js-build/*map

js-build:
	mkdir -p $@

js-build/Tracer.js: ./benchmark-files/Tracer/Tracer.dart | js-build
	dart2js $^ -o $@
	browserify $@ -o $@

js-build/%.js: $(BDIR)/%.dart | js-build
	dart2js $^ -o $@
	browserify $@ -o $@

clean:
	rm -rf js-build

print-% : ; @echo $* = $($*)
