var common = require('./webpack.common.js')
var merge = require('webpack-merge')
var webpack = require('webpack')
var path = require('path')
var cleanPlugin = require('clean-webpack-plugin')
//把代码分离的逻辑放到了生成环境下

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new cleanPlugin(['public'])
	],
	optimization: {
		splitChunks: {
			name:true,
			cacheGroups: {
				//vendors就是把第三方库给分离出来.
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					minChunks:1,
					minSize:1000,
					name:'vendors',
					chunks:'initial',
					priority: 10
				}
			}
		},
		runtimeChunk:true

	}
})
