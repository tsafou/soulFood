/*jslint node: true */
// Generated on 2014-07-31 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app-src', //mookee-src
        dist: 'app-dist' // rename to mookee after tests
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/js/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    //livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/sass/{,*/}*.scss'],
                tasks: ['sass', 'newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }//,
//      livereload: {
//        options: {
//          livereload: '<%= connect.options.livereload %>'
//        },
//        files: [
//          '<%= yeoman.app %>/{,*/}*.html',
//          '<%= yeoman.app %>/layout/tmpl/{,*/}*.html',
//          '.tmp/styles/{,*/}*.css',
//          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
//          '<%= yeoman.app %>/languages/{,*/}*.json'
//        ]
//      }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            serveStatic('.tmp'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),
                            serveStatic(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            serveStatic('.tmp'),
                            serveStatic('test'),
                            connect().use(
                                '/bower_components',
                                serveStatic('./bower_components')
                            ),
                            serveStatic(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // compile sass files
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/sass',
                    src: ['*.scss'],
                    dest: '<%= yeoman.app %>/styles',
                    ext: '.css'
                }],

                options: {
                    loadPath: [
                        './bower_components/bourbon/dist'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles to CSS
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                directory: 'bower_components',
                src: ['<%= yeoman.app %>/template/template.phtml'],
                options: {
                    cwd: '',
                    dependencies: true,
                    devDependencies: true,
                    exclude: [],
                    fileTypes: {},
                    // ignorePath:  /\.\.\//,
                    overrides: {}
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/js/{,*/}*.js',
                    '<%= yeoman.dist %>/css/{,*/}*.css',
                    // '<%= yeoman.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    // '<%= yeoman.dist %>/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                root: '<%= yeoman.app %>/../../',
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            nominjs: ['concat'],
                            js: ['concat', 'uglify'], //'concat', 'uglify'
                            css: ['concat', 'cssmin']
                        },
                        post: {}
                        // post: {
                        //     js: [{
                        //         name: 'uglify',
                        //         createConfig: function (context, block) {
                        //             var generated = context.options.generated;
                        //
                        //             if (block.dest === 'view/mookee-dist/js/vendor.js') {
                        //                 generated.options = {
                        //                     mangle: false
                        //                 };
                        //             }
                        //
                        //         }
                        //     }]
                        // }
                    }
                }
            }
        },
        useminPrepareGuest: {
            html: '<%= yeoman.app %>/template/template_guestMINE.phtml',
            options: {
                root: '<%= yeoman.app %>/../../',
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            nominjs: ['concat'],
                            js: ['concat', 'uglify'], //'concat', 'uglify'
                            css: ['concat', 'cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,**/}*.html', '<%= yeoman.dist %>/{,**/}*.phtml'],
            css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
            json: ['<%= yeoman.dist %>/js/json/*.json'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets'],
                blockReplacements: {
                    nominjs: function (block) {
                        return '<script src="' + block.dest + '"></script>';
                    }
                }
            }
        },
        useminGuest: {
            html: ['<%= yeoman.dist %>/{,**/}*.html', '<%= yeoman.dist %>/{,**/}*.phtml'],
            css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
            json: ['<%= yeoman.dist %>/js/json/*.json'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets'],
                blockReplacements: {
                    nominjs: function (block) {
                        return '<script src="' + block.dest + '"></script>';
                    }
                }
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   options: {
        //    mangle: { except: ["$super"] }
        //   }
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   },
        // },
        // concat: {
        //   dist: {}
        // },

        // uglify: {
        //     options: {
        //         mangle: false
        //     }
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    // cwd: '/assets',
                    cwd: '<%= yeoman.app %>/assets',
                    src: '{,**/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/assets'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    // cwd: '/assets',
                    cwd: '<%= yeoman.app %>/assets',
                    src: '{,**/}*.svg',
                    dest: '<%= yeoman.dist %>/assets'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: false,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'components/**/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        // *DEPRECATED - Use ngAnnotate instead*
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '*.js',
                    dest: '.tmp/concat/js'
                }]
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: [{
                    expand: true,
                    // cwd: '<%= yeoman.app %>/../.tmp/concat/js',
                    src: ['<%= yeoman.app %>/**/*.js', '!<%= yeoman.app %>/**/*.test.js'],
                    // src: '*.js',
                    dest: '.tmp'
                    // dest: '<%= yeoman.app %>/../.tmp/concat/js'
                }]
            }
        },


        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/template/template.phtml']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            publish: {
                files: [{
                    expand: true,
                    //cwd: '<%= yeoman.dist %>',
                    dest: '<%= yeoman.publish %>',
                    src: ['<%= yeoman.dist %>/**']
                }]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            'layout/**/*',
                            // 'images/{,*/}*.{webp}',
                            // 'fonts/*',
                            // 'template/*',
                            'components/**/*',
                            '!components/**/*.js',
                            // 'error/*',
                            // 'assets/**/*',
                            'php/**/*',
                            '*.pdf'
                        ]
                    },
                    // {
                    //     expand: true,
                    //     cwd: '.tmp/images',
                    //     dest: '<%= yeoman.dist %>/images',
                    //     src: ['generated/*']
                    // },
                    // {
                    //     expand: true,
                    //     cwd: '.tmp/images',
                    //     dest: '<%= yeoman.dist %>/images',
                    //     src: ['generated/*']
                    // },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/',
                        src: 'fonts/*',
                        dest: '<%= yeoman.dist %>'
                    },
                    // {
                    //     expand: true,
                    //     cwd: 'bower_components/simple-line-icons',
                    //     src: 'fonts/*',
                    //     dest: '<%= yeoman.dist %>'
                    // },
                    // {
                    //     expand: true,
                    //     cwd: 'bower_components/font-awesome',
                    //     src: 'fonts/*',
                    //     dest: '<%= yeoman.dist %>'
                    // },
                    {
                        expand: true,
                        cwd: 'bower_components/components-font-awesome',
                        src: 'fonts/*',
                        dest: '<%= yeoman.dist %>'
                    },
                    // {
                    //     expand: true,
                    //     cwd: 'bower_components/weather-icons',
                    //     src: 'font/*',
                    //     dest: '<%= yeoman.dist %>'
                    // },
                    // {
                    //     expand: true,
                    //     cwd: '<%= yeoman.app %>/scripts',
                    //     src: ['jsons/**', 'modules/**', 'vendor/**'],
                    //     dest: '<%= yeoman.dist %>/scripts'
                    // },
                    // {
                    //     expand: true,
                    //     cwd: '<%= yeoman.app %>',
                    //     src: 'languages/*',
                    //     dest: '<%= yeoman.dist %>'
                    // },
                    // {
                    //     expand: true,
                    //     cwd: 'bower_components/leaflet-draw/dist',
                    //     src: 'images/*',
                    //     dest: '<%= yeoman.dist %>/styles'
                    // },
                    // {
                    //     expand: true,
                    //     cwd: 'bower_components/leaflet/dist',
                    //     src: 'images/*',
                    //     dest: '<%= yeoman.dist %>/styles'
                    // }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('useminPrepareGuest', function () {
        var useminPrepareGuestConfig = grunt.config('useminPrepareGuest');
        grunt.config.set('useminPrepare', useminPrepareGuestConfig);
        grunt.task.run('useminPrepare');
    });

    grunt.registerTask('useminGuest', function () {
        var useminGuestConfig = grunt.config('useminGuest');
        grunt.config.set('usemin', useminGuestConfig);
        grunt.task.run('usemin');
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            // 'wiredep',
            'concurrent:server',
            'sass',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test'
        // 'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        // 'wiredep',
        // 'ngAnnotate',
        'useminPrepare',
        // 'useminPrepareGuest',
        'concat:generated',
        // 'ngAnnotate',
        'cssmin:generated',
        'uglify:generated',
        // 'sass',
        'concurrent:dist',
        // 'autoprefixer',
        // 'concat',
        // 'ngmin',
        'copy:dist',
        // 'cdnify',
        // 'cssmin',
        // 'uglify',
        'filerev',
        'usemin',
        // 'useminGuest'
        // 'htmlmin'
    ]);

    grunt.registerTask('default', [
        // 'newer:jshint',
        // 'test',
        'build'
    ]);

    grunt.registerTask('publish', ['build', 'copy:publish']);
};
