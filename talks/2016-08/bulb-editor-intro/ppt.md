
<p style="font-size: 24px;">第三代编辑器的进化之路<p>
<p>&nbsp;</p>
<h2 style="text-align:center;"> BulbEditor的设计&协同</h2>
<p>&nbsp;</p>
<p style="text-align: right; font-size: 24px;">傅云贵&蒋建宾<p>

=====

# 基本设计
<p>&nbsp;</p>
<p style="text-align: center; font-size: 24px;">傅云贵(fuyg)<p>

=====

# 协同编辑
<p>&nbsp;</p>
<p style="text-align: center; font-size: 24px;">蒋建宾(jiangjb)<p>

=====

<h2 style="text-align:center;"> BulbEditor基本设计</h2>
<p>&nbsp;</p>
<p style="text-align: center; font-size: 24px;">傅云贵(fuyg)<p>

=====

# 云笔记
# 云协作
## docs

=====

## 跨平台

* Web (WebKit 内核)
* PC (CEF + Windows)
* iOS (iPhone/iPad, UIWebView)
* Android (CrossWalk)
* Mac (WebView)


=====

* 富文本
* 笔记来源
    * 用户撰写(输入内容, 粘贴内容)
    * [网页剪报](http://note.youdao.com/download.html#other)
    * [第三方](http://note.youdao.com/open/) (Readonly)

=====

### 富文本编辑

1. `input` / `textarea`
2. `contenteditable` + `doc.execCommand()`
3. `contenteditable` + `editor.execCommand()`
4. Google Doc / Word


=====

## `input` / `textarea`

=====

![android editor](./images/android_1.0.jpg)
=====

### 优点

* 易实现, 成本低
* 兼容性强

=====

### 缺点
* 功能有限
* 用户体验差

=====

## `contenteditable`
## `+`
## `doc.execCommand()`


=====

## [小伙伴们惊呆了!](http://www.cnblogs.com/lhb25/p/html5-wysisyg-inline-editor.html)
## [10行JavaScript](http://www.cnblogs.com/lhb25/p/html5-wysisyg-inline-editor.html)
## [实现文本编辑器](http://www.cnblogs.com/lhb25/p/html5-wysisyg-inline-editor.html)

=====
* [tinyEditor](http://www.scriptiny.com/2010/02/javascript-wysiwyg-editor/)
    * [源代码](https://github.com/jessegreathouse/TinyEditor/blob/master/tinyeditor.js) 214 行, 8.8KB
* [jHtmlArea](http://pietschsoft.com/demo/jhtmlarea/)
    * [源代码](http://jhtmlarea.codeplex.com/SourceControl/latest#jHtmlArea/Nuget/Package/Content/Scripts/jHtmlArea-0.8.js) 462 行 (依赖jQuery)
* [NicEdit](http://nicedit.com/)
    * [源代码](https://github.com/danishkhan/NicEdit/blob/master/nicEdit.js) 2341 行
=====

### 优点
* 易实现, 成本低
* 性能好

=====

# 缺点

=====

## 功能受限
<p style="height: 20px; overflow: hidden;">&nbsp;</p>
<p style='text-align:center; font-size: 28px;'>`execCommand('fontsize', null, value)`</p>
<p style="height: 20px; overflow: hidden;">&nbsp;</p>
<p style='text-align:center; font-size: 36px;'>`value: 1 ~ 7`</p>

=====
## 兼容性

doc.execCommand('bold')

```xml

<p>Here's to |the crazy| ones</p>

<!-- Chrome/FireFox  -->
<p>Here's to <b>the crazy</b> ones</p>

<!-- IE -->
<p>Here's to <strong>the crazy</strong> ones</p>

```

=====
## 不可控

`doc.execCommand()`


=====

## contenteditable
## +
<h2>
<span style="text-decoration: line-through; color: #F66;">doc</span>.execCommand()
</h2>

=====

## contenteditable
## +
<h2>
<span style="color: green; font-size: 150%;">editor</span>.execCommand()
</h2>

=====

1. CKEditor
1. TinyMCE
1. UEditor
1. KindEditor

=====

### 优点
* 可控
* 扩展性强

=====

### 缺点
* 较难实现, 开发成本较高


=====

1. `input` / `textarea`
2. `contenteditable` + `doc.execCommand()`
3. `contenteditable` + `editor.execCommand()`


=====

### 特点
* 数据层/视图层 (HTML)
* 依赖原生光标(Selection/Range)
* 依赖contentditable
* 依赖浏览器排版

=====

## Google Docs

=====

## [What's different about the new Google Docs?](https://drive.googleblog.com/2010/05/whats-different-about-new-google-docs.html)

=====

### Google Docs
* 数据视图分离
* 自定义光标(Selection/Range)
* 不依赖 `contenteditable`
* 排版引擎(Layout Engine)

=====

### 优点
* 可控性更强
* 扩展性强
* 功能更丰富

=====

### 缺点

* 复杂, 不易实现
* 开发成本高

=====


![evo.jpg](./images/evo.jpg)

=====

### 第二代编辑器的问题

* `doc.execCommand()` 不可控
* HTML格式复杂
* 难于支持非contenteditable内容


=====

### 期望

* 解决第二代编辑器的问题
* 为编辑而生
* 强大的扩展性
    - 丰富的功能
    - 协同编辑
    - 分页

=====

### 前期调研

* Google Docs
* [Etherpad](https://en.wikipedia.org/wiki/Etherpad)
    - [etherpad-lite](https://github.com/ether/etherpad-lite)
* [Quip](https://quip.com/)

=====

## [Quip](https://quip.com/)

=====

## 协同表格

<p style="text-align: center; font-size: 24px;">王跃(wangyue)<p>

=====

## BulbEditor架构

![note-data](./mmd/note-data.mmd.png)

<div style="text-align:center;background-color: #CCC; color: #333; border: 1px solid #333; font-size: 32px; padding: 10px 0;">XML 存储</div>


=====

## 数据抽象

![block-class](./mmd/block-class.mmd.png)

=====

## Paragraph

=====

## Paragraph - 存储层

![paragraph](./mmd/paragraph.mmd.png)

=====

<h2 style="text-decoration:line-through;font-weight: normal;">B<span style="color:red;background-color:yellow">u</span>lb</h2>

```xml
<para>
    <text>Bulb</text>               <!-- 内容 -->
    <inline-styles>                 <!-- inline styles -->
        <strike>
            <from>0</from>
            <to>4</to>
            <value>true</value>
        </strike>
        <color>
            <from>1</from>
            <to>2</to>
            <value>#FF0000</value>
        </color>
        <back-color>
            <from>1</from>
            <to>2</to>
            <value>#FFFF00</value>
        </back-color>
    </inline-styles>
    <styles>                        <!-- block styles -->
        <align>center</align>
    </styles>
</para>

```

=====

## Paragraph - 数据层

![paragraph-rich-text](./mmd/paragraph-rich-text.mmd.png)

=====

<h2 style="text-decoration:line-through;font-weight: normal;">B<span style="color:red;background-color:yellow">u</span>lb</h2>

![rich-text-bulb](./mmd/rich-text-bulb.mmd.png)

=====
## ParagraphRange

=====

## Paragraph - 视图层

![paragraph-view](./mmd/p-v.mmd.png)

=====

<h2 style="text-decoration:line-through;font-weight: normal;">B<span style="color:red;background-color:yellow">u</span>lb</h2>

```xml
<div class="block-view paragraph-view"> <!-- wrapper -->
    <div class="para-text" style="text-align: center;"> <!-- block styles -->
        <!-- rich text START -->
        <span style="text-decoration:line-through">
            B
        </span>
        <span style="color:#FF0000;background-color:#FFFF00;text-decoration:line-through">
            u
        </span>
        <span style="text-decoration:line-through">
            lb
        </span>
        <!-- rich text END -->
    </div>
</div>

```

=====

## MVC

![paragraph-mvc](./mmd/p-mvc.mmd.png)

=====

## MVC
![note-mvc](./mmd/note-mvc.mmd.png)

=====
## Command 计算Range

![command-range](./mmd/command-range.mmd.png)

=====

## Command Undo/Redo
![command-undo](./mmd/command-undo.mmd.png)

=====

### Command Undo/Redo

Gif 动画

=====

### 第二代编辑器的问题

* `doc.execCommand()` 不可控
* HTML格式复杂
* 难于支持非contenteditable内容

=====

### 优点

* 可控
* 扩展性强
* 数据更易处理

=====

### 缺点

* 实现复杂/开发成本高
* 排版引擎缺失, 依赖html的排版
* 性能下降

=====

![evo.jpg](./images/evo.jpg)

=====

<h1 style="font-family: monospace;">THANK YOU</h1>
