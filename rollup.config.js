import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
	input: 'extensions/interfaces/my-interface/src/index.js',
	output: {
		format: 'es',
		file: 'extensions/interfaces/my-interface/index.js',
	},
	plugins: [terser(), resolve(), commonjs(),

	babel({
		presets: ["@babel/preset-react"],
	}),
	replace({
		'process.env.NODE_ENV': JSON.stringify('production'),
	}),

	],
};