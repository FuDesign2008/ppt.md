
#JavaScript Guide for C/C++ Developers

##JavaScript & C/C++
1. Dynamic vs Static
    * 变量可动态修改
    * 属性/方法可动态修改
1. Prototype-Based vs Class-Based
    * [Prototype] (http://www.javascriptkit.com/javatutors/proto.shtml)
    * 除了literal string, literal number, null等, 一切皆对象(Object)
    * Prototypes can be redefined at runtime, and has immediate effect for all referring
1. Function Scope vs Block Scope
    * 变量可先使用后定义(不推荐)
    * [Closure](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures)

##Dev Tools
1. Editor
    * [Aptana Studio 2](http://www.aptana.com/products/studio2)
    * [Notepad++](http://notepad-plus-plus.org/)
    * [Vim](http://www.vim.org/)
1. Syntax Checker
    * [jsLint](http://www.jslint.com/)
    * [jsHint](http://www.jshint.com/)
    * [JavaScriptLint](http://www.javascriptlint.com/)
1. Debug
    * Chrome, 自带
    * Firefox + [firebug](http://getfirebug.com/)
    * IE + Developer Toolbar (IE9+ 自带)
1. Server
    * [Apache](http://httpd.apache.org/)
    * [XAMPP](http://www.apachefriends.org/en/xampp.html)

##Practice
1. TagList 工程源代码
```
src
 |-- helper
 |
 |-- theme
 |
 |-- init
 |     |-- client.html
 |     |-- client.js
 |
 |-- common
 |
 |-- Client
```

1. TagList build
```
build
  |-- index.html
  |-- vendor.js
  |-- index.js
  |-- main.css
  |-- img
```
1. #include in js -> JavaScript 的模块化管理
    * seajs library
    * requireJS
    * AMD
1. vendor.js
    * [jQuery](http://jquery.com/)
    * [underscore](http://underscorejs.org/)
    * [Backbone](http://backbonejs.org/)

##JavaScript != Front-end Dev
1. no CSS
1. no HTML ?
1. [3 Layers](http://webdesign.about.com/od/intermediatetutorials/a/aa010707.htm)
    * Structure/Content  -> html
    * Presentation/Style -> css
    * Behavior           -> javascript
1. f2e skills
    * Html
    * CSS
    * Javascript
    * DOM
    * Photoshop...
    * http, ajax...
    * ...

##[Steps to becoming a front-end web developer](http://fuelyourcoding.com/steps-to-becoming-a-front-end-web-developer/)

###Learn HTML
1. [Learn basic HTML](http://www.w3schools.com/html/html_intro.asp)
1. [Learn about xhtml and validation](http://www.w3schools.com/Xhtml/)
1. [Make valid xhtml and validate](http://validator.w3.org/)

####系统学习
* [w3school: HTML 基础教程](http://www.w3school.com.cn/html/index.asp)
* [w3school: HTML5 教程](http://www.w3school.com.cn/html5/index.asp)
* [w3school: XHTML 教程](http://www.w3school.com.cn/xhtml/index.asp)

###Know CSS
1. [How to apply CSS](http://www.w3.org/Style/Examples/011/firstcss)
1. [Know all the important aspects of styling](http://www.w3schools.com/css/css_background.asp)
1. [Learn about positioning](http://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
1. [Get to advanced CSS](http://www.w3schools.com/css/css_dimension.asp)

####系统学习
* [w3school: CSS 教程](http://www.w3school.com.cn/css/index.asp)
* [w3school: CSS3 教程](http://www.w3school.com.cn/css3/index.asp)

###Rock Javascript
1. Read good books about Javascript.
1. Get to know some funny Javascript effects and concepts.

####系统学习
1. [w3school: JavaScript 教程](http://www.w3school.com.cn/js/index.asp)
1. [w3school: HTML DOM 教程](http://www.w3school.com.cn/htmldom/index.asp)
1. [w3school: Ajax 教程](http://www.w3school.com.cn/ajax/index.asp)
1. [w3school: JSON 教程](http://www.w3school.com.cn/json/index.asp)


###Pick your framework
1. jQuery

####Why jQuery ?
1. 易学习
1. Api对编程人员友好
1. 易扩展
1. 插件丰富
1. 良好的生态环境

###系统学习
1. [w3school: jQuery 教程](http://www.w3school.com.cn/jquery/index.asp)


##Good Resources

###Web
1. [MDN](https://developer.mozilla.org/en-US/) -> 参考，api查询
1. [jQuery Tips, Techniques, Tutorials](http://www.learningjquery.com/)
1. [jQuery Learning Center](http://learn.jquery.com/)

###Books
1. JavaScript 权威指南        -> 参考书
1. JavaScript 高级程序设计    -> 必看
1. JavaScript: The Good Parts -> 必看, 代码书写风格，技巧
1. JavaScript 设计模式        -> 进阶
1. 高性能网站建设指南         -> 进阶，网站相关
1. 高性能网站建设进阶指南     -> 进阶，网站相关
