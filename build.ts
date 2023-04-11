import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  outbase: './src/',
  //outfile: 'build/index.js',
  outdir: './build/',
  //minify: true,
  sourcemap: true,
  treeShaking: true,
  bundle: true,
  external: ['node_modules', 'math-test-cooler'],
  platform: 'node',
})
