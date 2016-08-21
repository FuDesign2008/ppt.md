
/* jshint esversion: 6, node: true*/
module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            impressCSS: {
                src: [
                    './bower_components/impress-js/css/impress-demo.css',
                    './bower_components/prism/themes/prism-tomorrow.css'
                ],
                dest: './dist/impress-lib.css'
            },

            impressJS: {
                src: [
                    './bower_components/jquery/dist/jquery.min.js',
                    './bower_components/marked/marked.min.js',
                    './bower_components/impress-js/js/impress.js',
                    './bower_components/prism/prism.js',
                    './js/micro-tmpl.js'
                ],
                dest: './dist/impress-lib.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('impress', [
        'concat:impressCSS',
        'concat:impressJS'
    ]);

};
