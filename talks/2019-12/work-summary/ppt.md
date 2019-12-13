# 最近业务总结

=====

1.  bugfix `MathJax 的渲染与监听`
1.  `hw-web`工程中 引入 `views`
1.  [`hw-web` 开发模式打包优化](https://gitlab.corp.youdao.com/homework/hw-web/merge_requests/739)

=====

## 1. bugfix `MathJax 的渲染与监听`

=====

### ❌ 之前的观点

-   mixin `MathJaxMixin` 的组件应当实现 `onLoadMathJax()` 方法

=====

## 2. `hw-web`工程中 引入 `views`

=====

```text

 // hw-web/src/pages/correct
.
├── App.comp.scss
├── App.comp.ts
├── App.vue
├── assets
├── components
├── main.html
├── main.js
├── router
├── store
├── third-lib
├── util
└── views // 新增

```

=====

### 目的

-   区分视图组件 和 公共组件
-   视图组件对接 router，逻辑更清晰

=====

## 3. [`hw-web` 开发模式打包优化](https://gitlab.corp.youdao.com/homework/hw-web/merge_requests/739)

=====

### [build/webpack.dev.js 修改](https://gitlab.corp.youdao.com/homework/hw-web/merge_requests/739/diffs#0d0739f54fdeb7f7502ecb17d04d6aa0b98686f3)

-   `dev` 模式下使用 `ts-loader` 配置为 `transpileOnly` 为 `true`, 并使用 `ForkTsCheckerWebpackPlugin`
-   不影响 `build` 模式
-   导致的变化
    -   浏览器页面看不到实时报错信息

=====

### 目的

1.  [typescript - webpack-dev-server &amp; ts-loader not reloads when interface changed - Stack Overflow](https://stackoverflow.com/questions/53312320/webpack-dev-server-ts-loader-not-reloads-when-interface-changed)
1.  开发时浏览器页面 ts 不报错, 可以加快 ts 文件的编译/webpack reload 浏览器的速度，对开发者更友好
    -   ⚠️Webpack + TypeScript 开发模式编译太慢

=====

### 其他手段保证 fix ts 的报错

-   ✅`npm run dev` 的 termimal log 中能够看到报错信息
-   ✅ 开发时, 编辑器/IDE
-   ✅ 代码 commit 时，会自动检查代码，若有错，无法提交代码
-   ✅`npm run build`

=====

### ❌ 之前的错误做法

-   `ForkTsCheckerWebpackPlugin` 用在 `build/webpack.base.js`, 用法不对
-   `ts-loader` 没有配置 `transpileOnly` 为 `true`

=====

# -END-
