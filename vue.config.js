const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/telovadba/' : '/',
  pwa: {
    name: 'Telovadba',
    themeColor: '#FFF', // #B0C4DE:lightsteelblue
  },
});
