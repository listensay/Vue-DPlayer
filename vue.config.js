const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/apii': {
        target: 'https://manifest.googlevideo.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apii': '/'
        }
      },
    }
  }
})
