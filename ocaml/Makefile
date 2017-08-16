SOURCES = $(wildcard benchmark-files/*.ml)
OUTPUT = $(SOURCES:benchmark-files/%.ml=js-build/%.js)

all: $(OUTPUT)

js-build:
	mkdir -p js-build/

js-build/%.byte benchmark-files/%.cmi benchmark-files/%.cmo: benchmark-files/%.ml | js-build
	ocamlfind ocamlc -package js_of_ocaml -syntax camlp4o -package \
		js_of_ocaml.syntax -linkpkg -o $@ $<

js-build/%.js: js-build/%.byte
	js_of_ocaml $<

clean:
	rm -rf lib js-build benchmark-files/*.cm*
