var merge = require('webpack-merge')
var webpack = require('webpack')
var common = require('./webpack.common.js')
module.exports = merge(common,{
	mode:'development',
	devServer:{
		port:4000,
		host:'0.0.0.0',
		hot:true
	},
	devtool:'cheap-module-eval-source-map',
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
})