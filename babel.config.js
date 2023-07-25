module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@api': './app/api',
          '@assets': './app/assets',
          '@components': './app/components',
          '@data': './app/data',
          '@hooks': './app/hooks',
          '@layouts': './app/layouts',
          '@screens': './app/screens',
          '@stack': './app/stack',
          '@theme': './app/theme',
        },
      },
    ],
  ],
};
