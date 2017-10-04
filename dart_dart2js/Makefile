BDIR=./benchmark-files
SRCS = $(wildcard $(BDIR)/*.dart)
OBJS = $(patsubst $(BDIR)/%.dart,js-build/%.js,$(SRCS))

.PHONY: all
all: $(OBJS)
	rm js-build/*deps js-build/*map

js-build:
		mkdir -p $@

js-build/%.js: $(BDIR)/%.dart | js-build
		dart2js $^ -o $@

clean:
		rm -rf js-build

print-% : ; @echo $* = $($*)
