# 息流 PC 端

<a href="https://zh-hans.react.dev/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/React-17.0.2-%236CB52D.svg?logo=React" alt="React" />
</a> &nbsp;
<a href="https://ts.nodejs.cn/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/TypeScript-5.0.4-%236CB52D.svg?logo=TypeScript&logoColor=FFF" alt="TypeScript" />
</a> &nbsp;
<a href="https://yarn.bootcss.com/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Yarn-1.22.17-%236CB52D.svg?logo=Yarn&logoColor=FFF" alt="Yarn" />
</a> &nbsp;
<a href="https://nodejs.org/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Node-18.17.1-%236CB52D.svg?logo=Node&logoColor=FFF" alt="Node">
</a> &nbsp;
<a href="https://webpack.docschina.org/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Webpack-5.88.2-%236CB52D.svg?logo=Webpack" alt="Webpack" />
</a> &nbsp;
<a href="https://www.electronjs.org/zh/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Electron-26.0.0-%236CB52D.svg?logo=Electron&logoColor=FFF" alt="Electron" />
</a> &nbsp;
<a href="https://www.electron.build/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/ElectronBuilder-24.9.1-%236CB52D.svg?logo=ElectronBuilder&logoColor=FFF" alt="ElectronBuilder" />
</a> &nbsp;
<a href="https://semi.design/zh-CN/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Semi UI-2.24.2-%236CB52D.svg?logo=SemiUI" alt="SemiUI">
</a> &nbsp;
<a href="https://turbo.build/repo" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/turbo-2.0.9-%236CB52D.svg?logo=Turbo&logoColor=FFF" alt="Turbo" />
</a> &nbsp;
<a href="https://githubim.com/" target="_blank" rel="noopener" style="display:inline-block;">
	<img src="https://img.shields.io/badge/WukongIm-1.2.10-%236CB52D.svg?logo=flowchatim" alt="flowchatim" />
</a> &nbsp;

## 简介

息流 PC 端支持 Web 端、Mac 端、Windows 端、Linux 端，是一款高颜值 IM 即时通讯聊天软件。

## Web 版本运行

> [!TIP]
> 本地开发建议`node v22.12.0`、 `yarn 1.22.19`

1. 安装依赖

```shell
yarn install 或者 yarn bootstrap
```

2. 本地开发调试

```shell
yarn dev
```

3. 编译

```shell
yarn build
```

4.  发布镜像

> [!TIP]
> 修改 api 地址 packages/tsdaodaoweb/src/index.tsx 修改 WKApp.apiClient.config.apiURL = "/api/v1/"

```shell
make deploy
```

5. 清除缓存

```sh
yarn clean
```

## Electron 版本运行

支持打包 Mac、Windows、Linux 操作系统桌面应用。

1. 安装依赖

```shell
yarn install
```

2. 本地开发调试

```shell
yarn dev-ele
```

3. 编译

```shell
yarn build
```

4. Mac APP 打包

> [!TIP]
> 注意先运行`yarn build`编译

```shell
yarn build-ele:mac
```

5. Windows APP 打包

> [!TIP]
> 注意先运行`yarn build`编译

```shell
yarn build-ele:win
```

`注意，此命令需要在apps/web下执行`

5. Linux APP 打包

> [!TIP]
> 注意先运行`yarn build`编译

```shell
yarn build-ele:linux
```
