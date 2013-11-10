#JSToolKit 框架介绍

=====
##主要内容
1. JSToolKit是什么
1. 需求及产生过程
1. 特点
1. 应用
1. 感想
1. NEXT
=====

##JSToolKit是什么
一个高度分层的js工具库, 强通用性和高扩展性

=====

##需求及产生过程
1. 原始出发点
1. 如何解决需求
1. 重构

=====
##原始出发点
* 编辑器需要改进
    1. 输入输出内容系统过滤
    1. word粘贴时内容转换
    1. 性能
    1. bugs
* WebClipper输入内容系统过滤
=====
##原始出发点
* 编辑器开发中遇到的问题
    1. jquery黑盒, e.g. $('selector', article) 触发DOMSubtreeModified.
    1. jquery 对DocumentFragment不能良好操作.
    1. querySelector(), querySelectorAll() 不能支持复杂选择器
    1. ...

<pre>
    ...
    var setHandwrites = function () {
        // 会触发DOMSubtreeModified 事件
        handwrites = $(selector, article).toArray();
        //
        if (!handwrites.length) {
            return;
        }
    ...
</pre>
=====
##原始出发点
<pre>
    ...
    filter: function (next, area) {
        //area 是DocumentFragment, 所以使用jQuery(ITEM, area)会有问题
        //（但在area的子元素中使用jQuery是OK的）
        var todos = area.querySelectorAll(ITEM),
            unwanted = ['container', ''];
    ...
</pre>
<pre>
    ...
    innerSelector = '[data-todo-id=' + todoId + ']';
    //此时，innerSelector比较复杂
    //使用原生的querySelector， 会出现DOMException
    //tempEl = article.querySelector(innerSelector);
    tempEl = $(innerSelector, article).get(0);
    ...
</pre>
=====
##如何解决?
要满足以上需求, 需要做以下工作:

* htmlParse.js 作为独立工程
    1. 编辑器输入输出系统过滤
    1. WebClipper输入系统过滤
    1. 其他的输入源
* 编辑器过滤器细化管理
    1. 性能
=====
##如何解决?
要满足以上需求, 需要做以下工作:

* 编辑器全新的粘贴流程
    1. 性能
    1. PC端word粘贴时内容转换
    1. 规避一部分bug
* 编辑器中的DOM 操作
    1. jquery黑盒
    1. 修复原始某些api bug
=====
##重构
1. 要完成以上工作以满足需求, 编辑器改动非常大, 得重构
1. 重构时, 尽可能复用已有的编辑器模块, 比如PC端的编辑器按钮拦
1. 无底层基础库支持, 编辑器重构痛苦
1. htmlParse.js 不适合用jquery操作dom

=====

##JSToolKit特点
1. 高度分层
1. core
1. web
1. jq/mvc
1. 自动化

=====

##高度分层
* 模块化 -> seajs
* [core](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-core)
* [web](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-web)
* [jq](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-jq)
* [mvc](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-mvc)
* 依赖关系


<pre>
    [-- web --] [-- jq --] [-- mvc --]
    [------------ core --------------]
</pre>


=====

##core
* underscore.js
* string 常用处理
    * 借鉴[underscore.string](http://epeli.github.io/underscore.string/)
=====
##core
* console
    * window.DEBUG
    * console.DEBUG
    * console.log()
    * console.warn()
    * console.error()
    * DEBUG模式下输出信息
    * 非DEBUG模式下为空函数
=====
##core
* events
    * 自定义事件on()/off()/trigger()
    * 借鉴Backbone.Event
* Class
    * 类似Backbone.View, 但更抽象
* 强通用性
    * 与DOM无关

=====
##web
* dom: DOM 操作
    * query.one()/query.all() 替代 querySelector(), querySelectorAll(), 并增强
    * insert, insertHTML....
* bom
    * userAgent
=====
##web
* event: DOM 事件
* ani: 动画
* 兼容IE6+, Chrome, Firefox, Opera
    * 与jQuery 1.x 保持一致, see http://jquery.com/browser-support/
=====
##jq/mvc
* jquery/backbone 封装

<pre>
    define(function (require) {
        var backbone = require('./mvc/backbone'),
            $ = require('./jq/jquery');
        // do something
    });
</pre>

=====
##自动化
* [gruntjs](http://gruntjs.com/) 打包
    * [getting started](http://gruntjs.com/getting-started)
* [QUnit](http://qunitjs.com/) 单元测试
    * [JSToolKit-core QUnit](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-core/trunk/test/jstoolkit_core.html)
    * [JSToolKit-web QUnit](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/JSToolKit-web/trunk/test/jstoolkit_web.html)

=====
##自动化
QUnit test示例
<pre>
    QUnit.test('web/dom/insert', function () {
        var insert = require('../src/web/dom/insert'),
            div = document.createElement('div'),
            strong = document.createElement('strong'),
            b = document.createElement('b'),
            span;
        div.innerHTML = '<p>hello<span>world and javascript</span></p>';
        span = div.getElementsByTagName('span')[0];
        insert(strong).after(span);
        QUnit.equal(span.nextSibling, strong);
        insert(b).before(span);
        QUnit.equal(span.previousSibling, b);
        console.log(div);
    });
</pre>
=====

##应用
* Editor重构(core + web + jq + mvc)
* htmlParser.js (core + web)
* 高度分层便于组合使用
    * core ->  无DOM操作相关项目
    * core + web -> DOM操作相关项目
    * core + jq -> DOM操作相关项目
    * core + jq + mvc -> 单页面app项目
=====
感想
#自动化
=====
感想
#单元测试
=====
感想
#自动化单元测试太TM重要
=====
##NEXT
1. 扩展与增强
1. 性能测试与优化
1. 完善打包流程
=====
#THANKS






