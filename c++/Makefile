CXX = em++
CC = emcc
CFLAGS = -s TOTAL_MEMORY=1677721600 -s NO_DYNAMIC_EXECUTION=1 -O3 --memory-init-file 0
CXXFLAGS = $(CFLAGS) -std=c++11

BDIR = benchmark-files
CSRCS = $(wildcard $(BDIR)/*.c)
CPPSRCS = $(wildcard $(BDIR)/*.cpp)
COBJS = $(patsubst $(BDIR)/%.c,js-build/%.js,$(CSRCS))
CPPOBJS = $(patsubst $(BDIR)/%.cpp,js-build/%.js,$(CPPSRCS))

all: $(COBJS) $(CPPOBJS)

js-build/%.js: $(BDIR)/%.cpp | js-build
	$(CXX) $(CXXFLAGS) $^ -o $@

js-build/%.js: $(BDIR)/%.c | js-build
	$(CC) $(CFLAGS) $^ -o $@

js-build:
	mkdir -p js-build

.PHONY: clean
clean:
	rm -rf js-build
