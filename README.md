lerna 包管理器:


lerna的作用是，把多个项目或者模块拆分为多个packages放入一个git仓库进行管理。  
- 通过命令`lerna boostrap`自动解决packages之间的依赖关系，对于packages内部的依赖会直接采用symlink的方式关联过去。
- 通过命令`lerna publish`依赖`git`检测文件改动，自动发布，管理版本号。
- 根据git 提交记录，自动生成changelog
- 

查找工程下面的包：npx lerna list


lerna add <moduleName>  // 所有子包都添加这个依赖
lerna add <moduleName> --scope = <pkgName> // 给scope后的包添加依赖

运行包的 script 命令：

### [lerna exec](https://github.com/lerna/lerna/tree/master/commands/exec#readme)

在每个 package 中执行任意命令，用波折号(`--`)分割命令语句

#### 使用方式

```sh
$ lerna exec -- <command> [..args] # runs the command in all packages
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js
```

可以通过`LERNA_PACKAGE_NAME`变量获取当前 package 名称：

```sh
$ lerna exec -- npm view \$LERNA_PACKAGE_NAME
```

也可以通过`LERNA_ROOT_PATH`获取根目录绝对路径：

```sh
$ lerna exec -- node \$LERNA_ROOT_PATH/scripts/some-script.js
```

#### Command Options

[`所有的过滤选项都支持`](#过滤选项)

```sh
$ lerna exec --scope my-component -- ls -la
```

- --concurrenty

> 使用给定的数量进行并发执行(除非指定了 `--parallel`)。
> 输出是经过管道过滤，存在不确定性。
> 如果你希望命令一个接着一个执行，可以使用如下方式：

```sh
$ lerna exec --concurrency 1 -- ls -la
```

## 启用 yarn Workspaces （强烈建议）

Workspaces can only be enabled in private projects.

默认是 npm, 每个子 package 下都有自己的 node_modules，通过这样设置后，会把所有的依赖提升到顶层的 node_modules 中，并且在 node_modules 中链接本地的 package，便于调试

**注意**：必须是 private 项目才可以开启 workspaces

ts-depot 依赖 rollup-plugin-removeconsole

步骤二：
添加第三方依赖包"chalk"到 ts-depot 的开发依赖库中，执行如下命令：

npx lerna add chalk --scope=ts-depot --dev

步骤三
添加本地包 rollup-plugin-removeconsole 到 ts-depot 的依赖库中，执行如下命令：

npx lerna add rollup-plugin-removeconsole --scope= ts-depot

步骤四
在 packages/feu-ui/lib/ui.js 添加代码如下：

const chalk = require('chalk');
const { add } = require('feu-tools');





发布 npm::::::::::::::::::::::::::::::
npm login

更新 "version": "0.0.2",

npm publish
