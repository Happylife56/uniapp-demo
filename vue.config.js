const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin') //最新版本copy-webpack-plugin插件暂不兼容，推荐v5.0.0

module.exports = {
	// configureWebpack: {
	// 	plugins: [
	// 		new CopyWebpackPlugin([{
	// 				from: path.join(__dirname, 'ext.json'),
	// 				to: path.join(__dirname, 'dist/dev/mp-weixin')
	// 			},
	// 			{
	// 				from: path.join(__dirname, 'ext.json'),
	// 				to: path.join(__dirname, 'dist/build/mp-weixin')
	// 			}
	// 		])

	// 	]
	// }
}
