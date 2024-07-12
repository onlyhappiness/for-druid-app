const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['index.js'], // 진입점 파일 설정
    bundle: true,
    outfile: 'out.js', // 출력 파일 설정
    platform: 'node', // 플랫폼 설정 (React Native의 경우 'node')
    external: ['react', 'react-native'], // 외부 모듈 설정
    minify: true,
  })
  .catch(() => process.exit(1));
