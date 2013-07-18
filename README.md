Talks List
===========
http://fudesign2008.github.io/talks/


##How to write ppt with markdown file ?

1. Write markdown file and use `=====` to split content as ppt pages, then save the file.
1. Copy `talks/2013-07/html_parser_intro.html` and save the file with the name what you want.
1. Find `PPT_CONFIG` and change it.

```html
<script>
    window.PPT_CONFIG = {
        // the file path of markdown file
        mdPath: 'html_parser_intro.md'
    }
</script>
```

##Tips
* use `#` instead of `===========`
* use `*` (unordered list) instead of `1. ` (ordered list) if one list has too many contents.
* use `<pre>` tag for code

##Examples
 * http://fudesign2008.github.io/talks/talks/2013-07/jstoolkit_intro.html
 * http://fudesign2008.github.io/talks/talks/2013-07/html_parser_intro.html


##Next
 * 整合 impress.js
 * 整合 bespoke.js


