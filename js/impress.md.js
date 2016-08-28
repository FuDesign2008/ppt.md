(function () {
    var TMPL = window.tmpl,
        $ = window.jQuery,
        impress = window.impress,
        marked = window.marked,
        PPT_CONFIG = window.PPT_CONFIG || {
            mdPath: 'ppt.md'
        },
        SPLITER = '=====',
        mdPath,
        tmplId = 'ppt_item_tmpl',
        idCounter = 0,
        random360 = function () {
            return Math.ceil(Math.random() * (PPT_CONFIG.maxAngle || 360));
        },
        randomScale = function () {
            return Math.ceil(Math.random() * (PPT_CONFIG.maxScale || 5));
        },
        /**
         * @param {String} content
         * @return {String}
         */
        sectionHtml = function (content) {
            content = marked(content);
            idCounter++;
            return TMPL(tmplId, {
                id: idCounter,
                content: content,
                x: window.screen.availWidth * 2.3 * idCounter,
                y: window.screen.availHeight * 2.3 * idCounter,
                rotate: random360(),
                scale: randomScale()
            });
        },
        /**
         * @param {Array} contents
         * @return {String}
         */
        pptHtml = function (contents) {
            var html = [];
            $.each(contents, function(index, content){
                html.push(sectionHtml(content));
            });
            return html.join('');
        };

    if (!PPT_CONFIG || !PPT_CONFIG.mdPath) {
        window.console.log('no mdPath');
        return;
    }
    mdPath = PPT_CONFIG.mdPath;
    //
    //dom ready to run functions
    //
    $(function () {
        window.console.log('ajax to get markdown file: ' + mdPath + '...');
        $.get(mdPath, function (data) {
            window.console.log('ajax complete');
            var contents = data.split(SPLITER);
            //window.console.log(contents);
            contents = pptHtml(contents);
            window.console.log(contents);
            $('#impress').html(contents);

            if (window.hljs) {
                $('pre', document.body).each(function (index, pre) {
                    window.hljs.highlightBlock(pre);
                });
            }

            $('img', document.body).each(function (index, img) {
                $(img.parentNode).addClass('img-wrapper');
            });

            $('.hint-details', document.body).hide();

            // initialize ppt
            impress().init();
        }, 'text');
    });
})();
