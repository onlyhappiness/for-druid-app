module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
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
