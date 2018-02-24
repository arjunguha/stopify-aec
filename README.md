Stopify Benchmarks
==================

This repository contains the benchmark suite and the harness used to evaluate
the [Stopify compiler](https://github.com/plasma-umass/stopify).

Benchmarks
----------

Stopify was evaluated using a collection of benchmarks in a variety of languages
that compile to JavaScript. For the evaluation, we compiled these benchmarks
to JavaScript and instrumented them with Stopify.

The benchmarks are hosted in the
[stopify-aec](https://github.com/plasma-umass/stopify-aec) repository. For
each language, the original benchmarks are stored within the
`<language>/benchmark-files/` folder and the JavaScript version of each of the
benchmark is stored in `<language>/js-build`.

Harness
-------

The Stopify benchmarking harness is contianed within `./harness/` folder. This
is the entrypoint to the benchmarking harness. The harness is responsible for
three things:

1. Initializing the SQLite database that contains all the evaluation data.
2. Compiling the benchmark files with the Stopify compiler.
3. Running the server to collect benchmarking information from each browser.

Building the harness
--------------------

**NOTE**: Make sure that `./harness/results.sqlite` is removed befre running
the harness.

To build the harness, run the following commands.

```
> cd harness/
> rm results.sqlite                    # Remove the checked-in version of evaluation numbers.
> yarn install && yarn run build       # Build the harness
> yarn run init                        # Initialize the DB.
> yarn run compileJs                   # Compile all benchmarks with Stopify
```

The benchmarks compiled by the harness are placed in `./tmp`.

Running the benchmarks
----------------------
Run the following command from `./harness` after building the harness.
```
> yarn run server
```

Once the harness server is running, visit `localhost:4997` in the browser you
want to benchmark. The benchmarks will automatically start running. Since there
are a lot of benchmarks, it will take quite a while to run all the benchmarks.

Once the benchmarks are done running, the webpage will allow you to render
the results by clicking on "Render results". Clicking on this will generate
graphs for the run and also save these in the `./harness/` folder.
