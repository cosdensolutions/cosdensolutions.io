const path = require('path');

const config = {
  entry: ['babel-polyfill', __dirname + '/src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    publicPath: 'assets/js/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      state: path.resolve(__dirname, 'src/state'),
      utils: path.resolve(__dirname, 'src/utils'),
      layout: path.resolve(__dirname, 'src/layout'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'file-loader' },
    ],
  },
};

module.exports = config;
