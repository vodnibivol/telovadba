const { defineConfig } = require('@vue/cli-service');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,

  // public path: for gh-pages
  publicPath: process.env.NODE_ENV === 'production' ? '/telovadba/' : '/',

  // PWA
  pwa: {
    name: 'Telovadba',
    themeColor: '#FFF', // #B0C4DE:lightsteelblue
    display: 'fullscreen',

    // custom SW
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // ... other Workbox options
      skipWaiting: true,
    },
  },

  // webpack service worker
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        // These options configure the behavior of the service worker.
        clientsClaim: true,
        skipWaiting: true,
        // Define the static resources you want to precache here.
        include: [
          // /\.html$/,
          // /\.js$/,
          // /\.css$/,
          // /\.png$/,
          // /\.jpg$/,
          // /\.svg$/,
          /workout_./,
          'https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap',
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        ],
      }),
    ],
  },
});
