CC = em++
CFLAGS = -s TOTAL_MEMORY=1677721600 -s NO_DYNAMIC_EXECUTION=1 -msse2 -std=c++11

BDIR = benchmark-files
SRCS = $(wildcard $(BDIR)/*.cpp)
OBJS = $(patsubst $(BDIR)/%.cpp,js-build/%.js,$(SRCS))

all: $(OBJS)

# Compile all scala programs to JS.
js-build/%.js: $(BDIR)/%.cpp | js-build
	$(CC) $(CFLAGS) $^ -o $@

js-build:
	mkdir -p js-build

.PHONY: clean
clean:
	rm -rf js-build
