const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //where we want the bundler to begin budnling at
  output: {
    //where our bundled file will be saved, specified by the path dirname and filename.
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
};
