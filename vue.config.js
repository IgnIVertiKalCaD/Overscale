<<<<<<< Updated upstream
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
=======
const { defineConfig } = require('@vue/cli-service');

const fs = require('fs');

module.exports = defineConfig({
  devServer: {
    host: '10.66.66.5',
    allowedHosts: 'all',
    client: {
      webSocketURL: 'auto://demo.phantomcms.org/ws',
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
    // https: {
    //     cert: fs.readFileSync('ws/cert.pem'),
    //     key: fs.readFileSync('ws/key.pem')
    // },
    liveReload: true,
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
});
>>>>>>> Stashed changes
