const path = require('path');

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,

      '@api': path.resolve(__dirname, '../src/api'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hoc': path.resolve(__dirname, '../src/hoc'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@mutations': path.resolve(__dirname, '../src/mutations'),
      '@pages': path.resolve(__dirname, '../src/pages'),
    };

    return config;
  },
};
