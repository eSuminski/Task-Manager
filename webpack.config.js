const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/webview/index.tsx',
    navRootView: './src/webview/View/navRootViewEntry.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'media'),
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  target: 'web',
};
