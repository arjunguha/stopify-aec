# Stopify Benchmarking Harness
---------
The stopify benchmarking harness is used to generate performance graphs. It
uses selenium web driver to run the benchmarks inside the browsers and
outputs measurements to `data.log` in project root.

## Dependencies
1. Install [GNU make](https://www.gnu.org/software/make/). The system was built
   with version 3.81 but any version above that should work.

2. Install the language compilers as specified
   [here](https://github.com/plasma-umass/stopify#optional-server-dependencies).

4. Run `npm run build` and `npm link`. Make sure that the `stopify` executable
   is linked correctly and is available on the path.

4. Install python libraries for selenium runner:
   ```
   pip install pyvirtualdisplay selenium
   ```

6. Add drivers for selenium to the `PATH` by running:
   ```
   make -f install.mk
   export PATH=`pwd`/bin:$PATH
   ```
5. (For Macs) If you're running the harness on a macbook, install `gnu-time` from
   homebrew using `brew install gnu-time`.

## Running the harness
In `<project-root>/benchmarks $`, run:
```
make
make run_jobs
```

## Adding a language
In `<project-root>/benchmarks`, add a new folder with the name of the new
language. Everything should be added INSIDE this new folder.

Since we want to build a credible benchmarks, we should keep original and
modifies benchmarks together. To this end, make a folder called
`<project-root>/original` before modifying them.

1. Add all the benchmarks to a folder called `benchmark-files` with the source
   language benchmarks.

2. Add a Makefile that can compiles the source language benchmarks into JS
   files in the `js-builds/`. Each generated file should be standalone
   runnable.

3. Add a `clean` rule to the makefile that cleans up the language directory.
