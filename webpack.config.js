const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env) => {
  const isProduction = env === "production";

  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/scripts'),
      publicPath: '/'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/scripts/',
      historyApiFallback: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '../[name].css'
      })
    ],
  };
};