
/* jshint esversion: 6, node: true, maxlen: 120*/
module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            impressCSS: {
                src: [
                    './bower_components/impress-js/css/impress-demo.css',
                    './bower_components/highlight/src/styles/default.css'
                ],
                dest: './dist/impress-lib.css'
            },

            impressJS: {
                src: [
                    './bower_components/jquery/dist/jquery.min.js',
                    './bower_components/marked/marked.min.js',
                    './bower_components/impress-js/js/impress.js',
                    './bower_components/highlight/build/highlight.pack.js',
                    './js/micro-tmpl.js'
                ],
                dest: './dist/impress-lib.js'
            },

            deckCSS: {
                src: [
                    './bower_components/deck.js/core/deck.core.css',
                    './bower_components/deck.js/extensions/goto/deck.goto.css',
                    './bower_components/deck.js/extensions/menu/deck.menu.css',
                    './bower_components/deck.js/extensions/navigation/deck.navigation.css',
                    './bower_components/deck.js/extensions/status/deck.status.css',
                    './bower_components/deck.js/extensions/scale/deck.scale.css',
                    './bower_components/deck.js/themes/style/web-2.0.css',
                    './bower_components/deck.js/themes/transition/horizontal-slide.css',

                    './bower_components/highlight/src/styles/default.css'
                ],
                dest: './dist/deck-lib.css'
            },

            deckJS: {
                src: [
                    './bower_components/jquery/dist/jquery.min.js',
                    './bower_components/marked/marked.min.js',

                    './bower_components/deck.js/modernizr.custom.js',
                    './bower_components/deck.js/core/deck.core.js',
                    './bower_components/deck.js/extensions/menu/deck.menu.js',
                    './bower_components/deck.js/extensions/goto/deck.goto.js',
                    './bower_components/deck.js/extensions/status/deck.status.js',
                    './bower_components/deck.js/extensions/navigation/deck.navigation.js',
                    './bower_components/deck.js/extensions/scale/deck.scale.js',

                    './bower_components/highlight/build/highlight.pack.js',
                    './js/micro-tmpl.js'
                ],
                dest: './dist/deck-lib.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('impress', [
        'concat:impressCSS',
        'concat:impressJS'
    ]);

    grunt.registerTask('deck', [
        'concat:deckCSS',
        'concat:deckJS'
    ]);

};
