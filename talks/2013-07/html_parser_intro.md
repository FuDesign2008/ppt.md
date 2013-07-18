#htmlParser.js介绍及实现原理

=====

##Contents
1. htmlParser.js 介绍
1. why htmlParser.js ?
1. 规则及基本原理
1. N多节点
1. QA

=====
##htmlParser.js
* htmlParse.js 是一个对html内容进行处理, 使得内容符合xhtml规范的引擎.
通过配置规则, 可以使得内容符合特定xhtml规范子集.

![whole progress](./html_image/whole_progress.jpg)
=====
##Why htmlParser.js
* 云笔记的内容是以html富文本格式存储的
<pre>
    html
     |-- head
     |-- body  -> body 里面的内容即为笔记的内容
          |-- xxx ...
          |....
</pre>
=====
##Why htmlParser.js
* 内容未系统过滤
<pre>
    普通网页

    &lt;div style="float:right"&gt;xxx...&lt;/div&gt;    &lt;= 影响布局
    &lt;div class="right"&gt;xxxx...&lt;/div&gt;         &lt;= 影响布局
    &lt;img width=100 height=200 /&gt;              &lt;= 影响布局
    &lt;object&gt;...&lt;/object&gt;                     &lt;= 不想要

    MS Office粘贴

    &lt;p style='margin-left:21.0pt;
    mso-char-indent-count:0;           <= mso-
    mso-list:l2 level1 lfo4;           <= mso-
    ...
</pre>
=====
##Why htmlParser.js
* 不合理的内容影响编辑器对内容处理和用户的编辑体验

![absolute.png](html_image/absolute.png)

=====
#过滤HTML!
=====
#tag, style, class, attribute
=====
#???过滤HTML???
=====
#规则
=====
##规则: tag

* 移除
<pre>
    div ---- 移除 -----> ''
</pre>
* 保留
<pre>
    div ---- 保留 -----> div
</pre>
* 重命名
<pre>
    div ---- 重命名 ---> p
</pre>
=====
##Q: 如何实现?
<pre>
    var html = "&lt;div&gt;&lt;/div&gt;",
        result;

    //移除div标签
    result === '';
</pre>

<pre>
    //保留div标签
    result === "&lt;div&gt;&lt;/div&gt;";
</pre>

<pre>
    //重命名div -> p
    result === "&lt;p&gt;&lt;/p&gt;";

</pre>
=====
##规则: style
* 移除
* 保留
* 重命名
<pre>
    style="font-size: 100px; font-weight: bold; mso-font-family: 宋体;"

    1. 移除fontSize
    2. 保留font-weight
    3. 重命名mso-font-family -> font-family

    style="font-weight: bold; font-family: 宋体;"
</pre>
=====
##Q: 如何实现?
<pre>
    var html = '&lt;div style="font-size: 100px; font-weight: bold; mso-font-family: 宋体;" &gt;' +
        '&lt;/div&gt;',
        result;

    //1. 移除font-size
    //2. 保留font-weight
    //3. 重命名mso-font-family -> font-family
    //4. div --> p

    result = '&lt;p style="font-weight: bold; font-family: 宋体;" &gt;&lt;/p&gt;'
</pre>
=====
##Tricks
1. only inline style
    * element.style.cssName
    * NOT jQuery(element, cssName)
1. 非标准cssName (e.g. mso-font-family)
    * NOT element.style.name
    * cssText = IE ? element.style.cssText : element.getAttribute('style')
    * 正则匹配
=====
##规则: class
* 移除
* 保留
* 重命名
<pre>
    class="float-right ynote-todo-div ynote-todo-hover"

    1. 移除float-right
    2. 保留ynote-todo-hover
    3. 重命名ynote-todo-div -> ynote-todo-container

    class="ynote-todo-container ynote-todo-hover"
</pre>
=====
##Q: 如何实现?
<pre>
    var html = '&lt;div class="float-right ynote-todo-div ynote-todo-hover" &gt;&lt/div&gt'
        result;

    //1. 移除float-right
    //2. 保留ynote-todo-hover
    //3. 重命名ynote-todo-div -> ynote-todo-container

    result === '&lt;div class="ynote-todo-container ynote-todo-hover" &gt;&lt;/div&gt;';
</pre>
=====
##规则: attribute
* 移除
* 保留
* 重命名
<pre>
    hello="world" href="http://www.youdao.com/" id="123"

    1. 移除hello
    2. 保留href
    3. 重命名id -> data-id

    href="http://www.youdao.com/" data-id="123"
</pre>
=====
##Q: 如何实现?
<pre>
    var html = '&lt;div hello="world" href="http://www.youdao.com/" id="123" &gt;&lt;/div&gt;',
        result;

    //1. 移除hello
    //2. 保留href
    //3. 重命名id -> data-id

    result === '&lt;div href="http://www.youdao.com/" data-id="123" &gt;&lt;/div&gt;'
</pre>
=====
##总结
1. html -> DOM tree
1. handle tagName
1. handle style
1. handle class
1. handle other attributes
=====
#N多节点呢?
=====
#递归
=====
##递归

![digui.png](html_image/digui.png)
=====
##htmlParser.js
* [test page](http://fuyg.youdao.com/youdao/htmlParser/trunk/test/qunit_test_debug.html?filter=parser%2Fparse)
* [svn ->  https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/htmlParser/](https://dev.corp.youdao.com/svn/outfox/products/YNote/JSToolKit/htmlParser/)
* 基于JSToolKit core + web
    * [JSToolKit 介绍](./jstoolkit_intro.html)
=====
#QA
=====
#THANKS







