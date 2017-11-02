CXX = em++
CC = emcc
EMCONFIG = emconfigure
EMMAKE = emmake
EMCCFLAGS = -s TOTAL_MEMORY=1677721600 -s NO_DYNAMIC_EXECUTION=1 --memory-init-file 0
CFLAGS = -O3 -lm
CXXFLAGS = $(CFLAGS) -std=c++11

EXT = js
OUTDIR = js-build

BDIR = benchmark-files
CSRCS = $(wildcard $(BDIR)/*.c)
CPPSRCS = $(wildcard $(BDIR)/*.cpp)
NATIVE_COBJS = $(patsubst $(BDIR)/%.c,native-build/%.o,$(CSRCS))
NATIVE_CPPOBJS = $(patsubst $(BDIR)/%.cpp,native-build/%.o,$(CPPSRCS))
JS_COBJS = $(patsubst $(BDIR)/%.c,js-build/%.js,$(CSRCS))
JS_CPPOBJS = $(patsubst $(BDIR)/%.cpp,js-build/%.js,$(CPPSRCS))

cpp: OUTDIR = native-build
cpp: EXT = o
cpp: EMMAKE =
cpp: EMCONFIG =
cpp: EMCCFLAGS =

all: js cpp

js: $(JS_COBJS) $(JS_CPPOBJS) zlib | js-build

cpp: CC = clang
cpp: CXX = clang++
cpp: $(NATIVE_COBJS) $(NATIVE_CPPOBJS) zlib | native-build

zlib:
	cd benchmark-files/zlib && $(EMCONFIG) ./configure --64
	$(EMMAKE) make -C benchmark-files/zlib clean all
	cd benchmark-files/zlib && $(CC) $(EMCCFLAGS) $(CFLAGS) benchmark.c -lz -o ../../$(OUTDIR)/zlib.$(EXT)

js-build/%.js: $(BDIR)/%.cpp | js-build
	$(CXX) $(EMCCFLAGS) $(CXXFLAGS) $^ -o $@
js-build/%.js: $(BDIR)/%.c | js-build
	$(CC) $(EMCCFLAGS) $(CFLAGS) $^ -o $@

native-build/%.o: $(BDIR)/%.cpp | native-build
	$(CXX) $(CXXFLAGS) $^ -o $@
native-build/%.o: $(BDIR)/%.c | native-build
	$(CC) $(CFLAGS) $^ -o $@

js-build:
	mkdir -p js-build
native-build:
	mkdir -p native-build

.PHONY: clean
clean:
	make -C benchmark-files/zlib clean
	rm -rf js-build native-build
