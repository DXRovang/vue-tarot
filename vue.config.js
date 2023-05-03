const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://raw.githubusercontent.com/DXRovang/tarot-trove-frontend/main/src/cards.json',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'}
      }
    }
  }
})
