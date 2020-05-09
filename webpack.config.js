const path = require( 'path' );

module.exports = {
  context: __dirname,
  entry: {
    background: './src/background.js',
    content: './src/content.js',
  },
  output: {
    path: path.resolve( __dirname),
    filename: 'dist/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
