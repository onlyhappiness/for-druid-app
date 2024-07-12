module.exports = {
  commands: [
    {
      name: 'bundle',
      func: async () => {
        await require('esbuild').build({
          entryPoints: ['index.js'],
          bundle: true,
          outfile: 'dist/main.js',
          platform: 'node',
          external: ['react', 'react-native'],
          minify: true,
          sourcemap: true,
        });
      },
    },
  ],
};
