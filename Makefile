# Get all transforms.
include transform.mk

# Specify the languages to be run
LANGUAGES = javascript dart

# Get all source language directories.
DIRS := $(LANGUAGES)

STOPIFYMK = stopify.mk

# Compile all JS source files with stopify
# Name of all the stopify directories
STOPIFY_DIRS := $(foreach tr,$(TRANSFORMS), \
							   $(foreach d, $(DIRS), $d/js-build/$(tr)))

.PHONY: all build clean run jobs run_jobs
all: $(STOPIFY_DIRS)

build: $(DIRS:%=%/js-build)

# Compile all source language programs to javascript.
BUILD := $(DIRS:%=%/js-build)
%/js-build: %
	$(MAKE) -C $<

# Name of all directories to be built wiht %
TRDIR := $(foreach tr, $(TRANSFORMS), %/js-build/$(tr))

$(TRDIR): %/js-build/stopify.mk %/js-build/transform.mk
	$(MAKE) -C $*/js-build -f $(STOPIFYMK)

%/js-build/stopify.mk : ./stopify.mk %/js-build/transform.mk | %/js-build
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
	  python driver.py $$i data.log chrome; \
	done
	for i in $(TO_RUN); do \
	  python driver.py $$i data.log firefox; \
	done

# Rules for cleanup
clean:
	$(foreach d, $(DIRS), $(MAKE) -C $d clean; )

# Rule to debug variables.
print-%  : ; @echo $* = $($*)
