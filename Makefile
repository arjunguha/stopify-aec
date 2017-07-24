# Get all transforms.
include transform.mk
include languages.mk

# Get all source language directories.
DIRS := $(LANGUAGES)

STOPIFYMK = stopify-Makefile
RUNNERMK = runner-Makefile

# Compile all JS source files with stopify
# Name of all the stopify directories
STOPIFY_DIRS := $(foreach tr,$(TRANSFORMS), \
							   $(foreach d, $(DIRS), $d/js-build/$(tr)))

.PHONY: all build clean run jobs
all: $(STOPIFY_DIRS)

build: $(DIRS:%=%/js-build)

# Compile all source language programs to javascript.
BUILD := $(DIRS:%=%/js-build)
%/js-build: %
	$(MAKE) -C $<

# Name of all directories to be built wiht %
TRDIR := $(foreach tr, $(TRANSFORMS), %/js-build/$(tr))

$(TRDIR): %/js-build/stopify-Makefile %/js-build/transform.mk
	$(MAKE) -C $*/js-build -f $(STOPIFYMK)

# Rules for running the benchmarking harness.
RUNFILES := runner-Makefile engines.mk transform.mk
RUNDEP := $(foreach b, $(BUILD), $(foreach r, $(RUNFILES), $b/$r))

%/js-build/stopify-Makefile : ./stopify-Makefile %/js-build/transform.mk | %/js-build
	cp $(STOPIFYMK) $@;

%/js-build/transform.mk: ./transform.mk | %/js-build
	cp ./transform.mk $@

jobs: all
	$(eval TO_RUN := $(foreach l,$(LANGUAGES), \
		$(shell find $l -name "*html")))
	@(echo $(TO_RUN) | sed 's/ /\n/g')

run_jobs: all
	$(eval TO_RUN := $(foreach l,$(LANGUAGES), \
		$(shell find $l -name "*html")))
	for i in $(TO_RUN); do \
	  python driver.py $$i data.log; \
	done

# Rules for cleanup
clean:
	$(foreach d, $(DIRS), $(MAKE) -C $d clean; )

# Rule to debug variables.
print-%  : ; @echo $* = $($*)
