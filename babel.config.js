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
          "@/app": "./app/app",
          "@/pages": "./app/pages",
          "@/widgets": "./app/widgets",
          "@/entities": "./app/entities",
          "@/features": "./app/features",
          "@/shared": "./app/shared",
        },
      },
    ],
  ],
};
