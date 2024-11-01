# Web3 Wallet 项目

这是一个基于 Web3 技术的钱包项目，旨在提供一个安全、易用的数字资产管理平台。该项目使用了 Wagmi 库来实现与区块链的交互，并且集成了 React Query 来管理应用程序的状态。

## 项目结构

- `app`: 应用程序的入口文件，包含了 WagmiProvider 和 QueryClientProvider 的配置。
- `components`: 项目中的 React 组件，包括 WalletConnect 组件用于连接和断开钱包连接。
- `lib`: 项目中的实用工具函数，包括用于合并类名的函数。
- `pages`: 项目中的页面组件，包括首页等。

## 依赖项

- `wagmi`: 用于与区块链交互的库。
- `react-query`: 用于管理应用程序状态的库。
- `clsx` 和 `tailwind-merge`: 用于合并类名的库。

## 配置文件

- `tsconfig.json`: TypeScript 配置文件，用于配置编译选项。
- `tailwind.config.ts`: Tailwind CSS 配置文件，用于配置样式。

## 运行项目

1. 克隆项目到本地。
2. 运行 `npm install` 或 `yarn install` 安装依赖项。
3. 运行 `npm run dev` 或 `yarn dev` 启动开发服务器。

## 贡献

如果您想为这个项目贡献代码，请先 fork 项目，然后创建一个新的分支，最后提交 pull request。
