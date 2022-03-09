const webpack = require('webpack')
module.exports = {
  publicPath: './',
  // 文件里面添加这行require代码
  devServer: {
    // proxy: {
      

    // }
  },
  // 再添加这两行代码
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

  chainWebpack (config) {
    config.module

      .rule('swf')

      .test(/\.swf$/)

      .use('url-loader')

      .loader('url-loader')

      .options({
        limit: 1024,

        name: 'file/[path][name].[hash:7].[ext]'
      })

      .end()
  },
}
