const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/webview/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out/webview'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  target: 'web',
};
