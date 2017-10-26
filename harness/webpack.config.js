module.exports = {
  entry: './dist/benchmarkClient.js',
  output: {
    filename: 'www/benchmarkClient.js'
  },
  node: {
    'fs': 'empty',
    'child_process': 'empty'
  }
};
