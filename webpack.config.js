const HtmlWebPackPlugin = require("html-webpack-plugin");

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
	    }
	    ]
	}
    };
    
