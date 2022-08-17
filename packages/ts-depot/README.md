# ts-depot

js 库

1: 创建 tsconfig.json
npx tsc --init

2: 安装 rollup 以及依赖
npm install --save-dev @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup rollup-plugin-terser
rollup
@rollup/plugin-node-resolve：解析第三方库依赖（即 node_module 内的依赖）
@rollup/plugin-commonjs：识别 commonjs 格式依赖
rollup-plugin-terser：（可选）代码压缩

3：编译 TypeScript
Seamless integration between Rollup and TypeScript. Now with errors.
npm i rollup-plugin-typescript2

4： babel 相关
yarn add --save-dev @rollup/plugin-babel @babel/preset-env @babel/plugin-transform-runtime
@rollup/plugin-babel：rollup babel 插件
@babel/preset-env：babel 预设
@babel/plugin-transform-runtime：转义代码

5：安装 rollup-plugin-terser
terser 是什么，它是适用于 ES6 +的 JavaScript 解析器，mangler 和压缩器工具包

6: rollup-plugin-postcss
​ 结合rollup和postcss， postcss是用 JavaScript 工具和插件转换 CSS 代码，比如增加浏览器前缀、新特性、stylint代码检查

// extract 是否提取css
// inject Inject CSS into <head>, it's always false when extract: true
// modules css模块化
// minimize 压缩
// use css loader，如sass，less等
import NpmImport from 'less-plugin-npm-import';
use: {
  less: {
    plugins: [new NpmImport({ prefix: '~' })], // 使用带～前缀引入less文件
    javascriptEnabled: true,
    // ...otherOptions
  },
  sass: {
      // ...otherOptions
  },
},
// plugins PostCSS Plugins.
plugins: [autoprefixer({ // 通过 can i use添加浏览器供应商前缀
  remove: false,
})]




lerna包管理器



npm config set registry https://registry.npmjs.org/

yjwsurcode
VGBqve6VP2eaf1D1x8/EG+RoA5E=

npm config set registry https://registry.npmmirror.com/

library-ts

library-js

@ts-library

@ts-lib
