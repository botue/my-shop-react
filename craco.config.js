const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#171c49',
              '@height-base': '36px',
              '@border-radius-base': '4px',
              '@text-color': '#171c49',
              '@table-header-color': '#171c49',
              '@table-header-bg': 'transparent',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'lib', // default: lib
          style: true,
        },
        'antd',
      ],
    ],
  },
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
