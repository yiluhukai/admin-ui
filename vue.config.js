//@ts-check
/**
 * @type { import("@vue/cli-service").ProjectOptions}
 *
 */
module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	}
	//	publicPath 会有提示
}
