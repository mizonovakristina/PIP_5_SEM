const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
	devServer: {static: './dist',},
	devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
	module: {
		rules: [
		{ test: /\.css$/, use: ['style-loader', 'css-loader']},
		{test:/\.(png|svg|jpg|gif)$/, use: ['file-loader',]},
			{test: /\.m?js$/, exclude: /(node_modules|bower_components)/,
			use: {loader: 'babel-loader',
			options: {presets: ['@babel/preset-env'],
			plugins: ['@babel/plugin-proposal-object-rest-spread']
			}
			}
			},
		]
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Webpack test plug',
	})],
};