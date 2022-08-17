import path from 'path'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json';
// import { rmoveConsolePlugin } from '../rollup-plugin-removeconsole/src/index'
// const rmoveConsolePlugin = require('../rollup-plugin-removeconsole/src/index.js')

const chalk = require('chalk');
const removeConsolePlugin = require('rollup-plugin-removeconsole');

// import removeConsolePlugin from 'rollup-plugin-removeconsole'


console.log(chalk.red("ui库, 结果为：" + chalk.blue(removeConsolePlugin), '---'));



// umd 模式的编译结果文件输出的全局变量名称 
const env = process.env.NODE_ENV
const name = 'RollupTsManageDate'

const config = [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: [
			// commonjs 
			{
				// package.json 配置的 main 属性 
				file: pkg.main,
				format: 'cjs',
			},
			// es module 
			{
				// package.json 配置的 module 属性 
				file: pkg.module,
				format: 'es',
			},
			// umd 
			{
				// umd 导出文件的全局变量 
				name,
				// package.json 配置的 umd 属性 
				file: pkg.umd,
				format: 'umd'
			}
			// name: 'howLongUntilLunch',
			// file: pkg.browser,
			// format: 'umd'
		],
		plugins: [
			// 解析第三方依赖 
			resolve(), // so Rollup can find `ms`
			// 识别 commonjs 模式第三方依赖 
			commonjs({ include: rmoveConsolePlugin }), // so Rollup can convert `ms` to an ES module
			// rollup 编译 typescript 
			rollupTypescript(),
			// babel 配置 
			babel({
				// 编译库使用 
				// 只转换源代码，不转换外部依赖 
				babelHelpers: 'runtime', // bundled
				exclude: 'node_modules/**',
				// babel 默认不支持 ts 需要手动添加 
				extensions: [
					// ...DEFAULT_EXTENSIONS,
					'.ts',
				],
			}),
			// terser(),
			removeConsolePlugin()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	// {
	// 	input: 'src/main.js',
	// 	external: ['ms'],
	// 	output: [
	// 		{ file: pkg.main, format: 'cjs' },
	// 		{ file: pkg.module, format: 'es' }
	// 	]
	// }
];

// 若打包正式环境，压缩代码 
if (env === 'production') {
	config.plugins.push(terser({
		compress: {
			pure_getters: true,
			unsafe: true,
			unsafe_comps: true,
			warnings: false
		}
	}))
}

export default config