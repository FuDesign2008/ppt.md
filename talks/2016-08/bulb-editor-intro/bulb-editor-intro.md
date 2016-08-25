# 富文本编辑器的进化之路 - BulbEditor的设计



## 大纲
核心: 如何设计一个扩展性强的富文本编辑器

1. 产品形态
1. 富文本编辑器的架构, 普遍形式
    * `<input/>` / `<textarea/>`
    * `contenteditable` + `document.execCommand()`
    * `contenteditable` + `editor.execCommand()`
    * Google Docs
1. `contenteditable` + `document.execCommand()`
    * 实现原理
    * 优缺点
1. `contenteditable` + `editor.execCommand()`
    * 实现原理
    * 优缺点
1. Google Docs
    * 实现原理
    * 优缺点
1. 小结
1. BulbEditor的设计
    * 基本架构
    * 详细解释
1. BulbEditor的优缺点
1. 未来

## 云笔记编辑器产品形态介绍

1. 产品
    * 云笔记
    * 云协作
1. 富文本编辑
1. 笔记来源
    * 用户撰写(输入内容, 粘贴内容)
    * [网页剪报](http://note.youdao.com/download.html#other)
    * [第三方](http://note.youdao.com/open/) (Readonly)
1. 跨平台
    * Web (WebKit 内核)
    * PC (Windows)
    * iOS (iPhone/iPad)
    * Android
    * Mac

## `<input/>` / `<textarea/>`

### 原理
通过JavaScript操作目标HTMLElement的`innerText`修改文本内容

### 示例
iPhone/Android 早期版本

### 优缺点
1. 优点
    * 实现简单, 成本低
    * 兼容性强
        - 不依赖`contenteditable`
1. 缺点
    * 功能有限
    * 用户体验差




## `contenteditable` + `document.execCommand()`

### 原理
设置编辑容器(HTMLElement)的 `contenteditable`属性, 然后使用 `document.execCommand()` 修改html数据

### 示例


* [小伙伴们惊呆了！10行 JavaScript 实现文本编辑器](http://www.cnblogs.com/lhb25/p/html5-wysisyg-inline-editor.html)
* [tinyEditor](http://www.scriptiny.com/2010/02/javascript-wysiwyg-editor/)
    * [源代码](https://github.com/jessegreathouse/TinyEditor/blob/master/tinyeditor.js) 214 行, 10,620 bytes
* [jHtmlArea](http://pietschsoft.com/demo/jhtmlarea/)
    * [源代码](http://jhtmlarea.codeplex.com/SourceControl/latest#jHtmlArea/Nuget/Package/Content/Scripts/jHtmlArea-0.8.js) 462 行 (依赖jQuery)
* [NicEdit](http://nicedit.com/)
    * [源代码](https://github.com/danishkhan/NicEdit/blob/master/nicEdit.js) 2341 行

```
.
├── demos
│   ├── demo01.html
│   ├── demo02.html
│   ├── demo03.html
│   ├── demo04.html
│   └── demo05.html
├── nicEdit.js           // 30849 Byte
└── nicEditorIcons.gif
```



### 优缺点
1. 优点
    * 实现简单, 成本低
        - 代码量少
    * 性能好
1. 缺点
    * 功能受限
        - `document.execCommand('fontsize', null, 1-7)` 限制, https://developer.mozilla.org/en/docs/Web/API/Document/execCommand
    * 兼容性
        - `document.execCommand('bold')` 加粗,
    * 不可控
        - 浏览器 `document.execCommand()` 存在bug

#### 兼容性示例
```xml

<p>Here's to the crazy ones</p>

<p>Here's to |the crazy| ones</p>

<!-- Chrome/FireFox -->
<p>Here's to <b>the crazy</b> ones</p>

<!-- IE -->
<p>Here's to <strong>the crazy</strong> ones</p>

```

## `contenteditable` + `editor.execCommand()`

### 原理

设置编辑容器(HTMLElement)的 `contenteditable`属性, 使用JavaScript修改DOM的方式模拟`document.execCommand()`

### 示例

1. CKEditor
1. TinyMCE
1. UEditor
1. KindEditor


### 优缺点

1. 优点
    * 可控
    * 扩展性强

1. 缺点
    * 较复杂, 开发成本较高

## Google Docs



## 前期调研

### 业界产品

* [etherpad-lite](https://github.com/ether/etherpad-lite)
    - [wikipedia - Etherpad](https://en.wikipedia.org/wiki/Etherpad)
* [quip](https://quip.com/)


## BulbEditor的优缺点
1. 优点
    * 数据更易处理
    * 扩展性强
        - 内嵌App, 比如Table
        - 协同编辑
    * 可控
        - 丢弃`document.execCommand()`
        - 显示时字体优化
1. 缺点
    * 复杂/开发成本高
        - 对比各端编辑器的源代码行数
        - 对比各端编辑器代码压缩后的文件大小
        - 需要处理的事情更多, 如
            - iphone 上输入的bug
            - emoji字符显示
    * 性能下降
        - 定位计算, 重新生成页面
    * 排版引擎缺失, 依赖html的排版


## 未来


## 参考
* [Online rich-text editor - Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Online_rich-text_editor)
* [Google Drive Blog: Whats different about the new Google Docs?](https://drive.googleblog.com/2010/05/whats-different-about-new-google-docs.html)

