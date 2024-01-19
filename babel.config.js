module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        // extensions: [
        //   ".ios.ts",
        //   ".android.ts",
        //   ".ts",
        //   ".ios.tsx",
        //   ".android.tsx",
        //   ".tsx",
        //   ".jsx",
        //   ".js",
        //   ".json",
        // ],
        alias: {
          "@api": "./app/api",
          "@assets": "./app/assets",
          "@components": "./app/components",
          "@data": "./app/data",
          "@hooks": "./app/hooks",
          "@layouts": "./app/layouts",
          "@screens": "./app/screens",
          "@stack": "./app/stack",
          "@theme": "./app/theme",
        },
      },
    ],
  ],
};
