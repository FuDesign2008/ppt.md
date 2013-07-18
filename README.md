Talks List
===========
http://fudesign2008.github.io/ppt.md/


##How to write ppt with markdown file ?

1. Write markdown file and use `=====` to split content as ppt pages, then save the file.
1. Copy `talks/2013-07/html_parser_intro_deck.html` (deck style) or `talks/2013-07/html_parser_intro_impress.html`(impress style) and save the file with the name what you want.
1. Find `PPT_CONFIG` in html file and change it.

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
 * http://fudesign2008.github.io/ppt.md/talks/2013-07/jstoolkit_intro_deck.html
 * http://fudesign2008.github.io/ppt.md/talks/2013-07/html_parser_intro_deck.html
 * http://fudesign2008.github.io/ppt.md/talks/2013-07/jstoolkit_intro_impress.html
 * http://fudesign2008.github.io/ppt.md/talks/2013-07/html_parser_intro_impress.html



##Next
 * 整合 impress.js [done]
 * 整合 bespoke.js


