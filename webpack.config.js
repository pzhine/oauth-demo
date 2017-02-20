var path = require('path');

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: [/\.css$/],
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "./images/[hash].[ext]"
        }
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
