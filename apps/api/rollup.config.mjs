import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'dist/app.js',
	output: {
		dir: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		resolve(),
		commonjs(),
		json(),
		terser()
	]
};