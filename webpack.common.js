//引入path
var path = require('path')
//引入插件
var htmlPlugin = require('html-webpack-plugin')
var vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry:{
		path:path.join(__dirname,'src/index.js'),
	},
 
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'public')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.vue$/,
				use:'vue-loader'
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:'url-loader'
			},
			{
				test:/\.(png|gif|svg|jpg|jpeg)$/,
				use:{
					loader:'url-loader',
					options:{
						limit:20480,
						name:'[name]_[hash].[ext]',
						outputPath:path.join(__dirname,'public/images')
					}
				}
			}
		]
	},
	plugins:[		
		new htmlPlugin({
			title:'Hi,I am kasee'
		}),
		new vueLoaderPlugin()
		
	]
}
