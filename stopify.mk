include transform.mk
# Get all the javascript files for benchmarking here.
FILES = $(wildcard *.js)

# All the files that will be generated.
OBJS = $(foreach tr, $(TRANSFORMS), \
				 $(foreach file, $(FILES), $(tr)/$(file:%.js=%.html)))

BASE = './base'

# Template to generate the directory for the transform
# $(1) is the name of the transform
define dir_TEMPLATE
$(1):
	mkdir -p $(1)
endef

# Template for defining the stopify runner
# $(1) is the name of the transform
define stopify_TEMPLATE
$(1)/%.html: %.js | $(1)
	@echo 'stopify $$* with $(1)'
	@( stopify -i $$< -t $(subst @, ,$(1)) --benchmark -o html > $$@ ) \
		2> /dev/null || \
		(printf "\033[0;31mFailed to stopify $$@ \033[0m\n")
endef

.PHONY: all
all: $(OBJS)

# Build rules to create directory for each transform
$(foreach tr,$(TRANSFORMS), $(eval $(call dir_TEMPLATE,$(tr))))

# Build stopify runner rules for each transform.
$(foreach tr,$(TRANSFORMS), $(eval $(call stopify_TEMPLATE,$(tr))))

# Rule to debug variables.
print-%  : ; @echo $* = $($*)
