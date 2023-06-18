module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@layouts': './src/layouts',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@stack': './src/stack',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
