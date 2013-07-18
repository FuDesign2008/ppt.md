(function () {
    var TMPL = window.tmpl,
        $ = window.jQuery,
        Showdown = window.Showdown,
        MAKE_HTML = (new Showdown.converter()).makeHtml,
        PPT_CONFIG = window.PPT_CONFIG,
        SPLITER = '=====',
        mdPath,
        tmplId = 'ppt_item_tmpl',
        /**
         * @param {String} content
         * @return {String}
         */
        sectionHtml = function (content) {
            content = MAKE_HTML(content);
            return TMPL(tmplId, {
                content: content
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
            $(contents).insertBefore(document.body.firstChild);
            $('li, img, pre', document.body).addClass('slide');
            // initialize ppt
            $.deck('.slide');
        }, 'text');
    });
})();
