"use strict";
exports.__esModule = true;
var esbuild_1 = require("esbuild");
(0, esbuild_1.build)({
    entryPoints: ['src/index.ts'],
    outfile: 'build/index.js',
    minify: true,
    sourcemap: true,
    treeShaking: true,
    bundle: true,
    external: ['node_modules', 'math-test-cooler'],
    platform: 'node'
});
