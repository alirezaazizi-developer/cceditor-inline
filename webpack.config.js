var path = require('path');

module.exports = {
  entry: "./src/editor.js",
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};