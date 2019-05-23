// vue.config.js
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  devServer: {
    port: 4000,
    proxy: {
      '/api': {
        target: ' https://easy-mock.com/mock/5ba1bfc29f947e71d71e7070/admin', // 接口的域名
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all',
    });
    config.module
      .rule('svg')
      .exclude.add(resolve('src/plugins/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/plugins/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },
};
