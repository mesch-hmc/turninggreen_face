const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.png$/,
        loader: 'url-loader?limit=25000'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test: /\.jpeg/,
        loader: 'file-loader'
      },
	{
	    test: /\.svg/,
	    loader: 'file-loader'
	},
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
              camelCase: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
