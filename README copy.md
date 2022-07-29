# manage-date

日期管理

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

5：安装rollup-plugin-terser
terser是什么，它是适用于ES6 +的JavaScript解析器，mangler和压缩器工具包

npm config set registry https://registry.npmjs.org/

yjwsurcode
VGBqve6VP2eaf1D1x8/EG+RoA5E=

npm config set registry https://registry.npmmirror.com/

library-ts

library-js

@ts-library

@ts-lib

