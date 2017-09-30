import * as t from 'babel-types';
import * as babel from 'babel-core';

const visitor = {
}

export default function() {
  return { visitor: visitor };
}

// Runs this plugin standalone.
function main() {
  const filename = process.argv[2];
  const reserved = process.argv.slice(3);
  const opts = {
    plugins: [
    ],
    babelrc: false,
    minified: true,
    comments: false
  };
  babel.transformFile(filename, opts, (err, result) => {
    if (err !== null) {
      throw err;
    }
    console.log(result.code);
  });
}

if (require.main === module) {
  main();
}
