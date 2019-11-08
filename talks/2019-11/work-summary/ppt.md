# 最近业务总结

=====

## 主要内容

1. npm 相关
1. `for ... in`
1. Vue 计算属性
1. 好书推荐

=====

## 1.1 `npm run dev` 崩溃

-   fix [merge_requests/576](https://gitlab.corp.youdao.com/homework/hw-web/merge_requests/576/diffs)
-   https://github.com/webpack/webpack/issues/1914

=====

## 1.2 `npm install`

`Error: Node Sass does not yet support your current environment`

=====

## `npm rebuild node-sass`

-   [Error: Node Sass does not yet support your current environment: Linux 64-bit with false](https://github.com/sass/node-sass/issues/1651)
-   [How to fix “Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (57)”](https://medium.com/@proustibat/how-to-fix-error-node-sass-does-not-yet-support-your-current-environment-os-x-64-bit-with-c1b3298e4af0)

=====

## 2. `for...in`

=====

## [for...in - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

-   `for...in` should not be used to iterate over an `Array` where the index order is important.
-   If you only want to consider properties attached to the object itself, and not its prototypes, use `getOwnPropertyNames()` or perform a `hasOwnProperty()` check

=====

## 工程实践

-   尽量不用 `for...in`
-   替代方案
    -   `Object.keys(object).forEach((key) =>{ ... } )`

=====

## 3. Vue 计算属性

=====

## 疑问

=====

## 3.1. 计算属性是什么

-   如何理解
-   应用场景

=====

## 3.2. 计算过程中能否修改 data 属性的值

-   能不能?
-   是否是好的工程实践?
-   为什么？

=====

## 3.3. 计算过程中能使用异步么?

-   能不能?
-   是否是好的工程实践?
-   为什么？

=====

## 3.4. 计算过程中能调用组件自身的方法(method)么?

-   能不能?
-   是否是好的工程实践?
-   为什么？

=====

## 4. 好书推荐

=====

![原则](./images/s29643861.jpg)

=====

    原则是根本性的真理，
    它构成了行动的基础，
    通过行动让你实现生命中的愿望。
    原则可以不断地被应用于类似的情况，
    以帮助你实现目标。

    每一天，
    我们每个人都会面对纷至沓来的、必须做出反应的各种情况。
    假如没有原则，
    我们将被迫针对生活中遇到的各种难以预料之事孤立地做出反应，
    就好像我们是头一次碰到这些事一样。...

=====

## [在线试读](https://cread.jd.com/read/startRead.action?bookId=30389069&readType=1)

=====

## QA
