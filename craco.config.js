const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (config, { env }) => {
      if (env === 'development') {
        config.entry = [config.entry, './mock/index'];
      }

      return config;
    },
  },
};
