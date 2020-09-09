/** gruntfile.js : 用来配置或定义任务（task）并加载Grunt插件
 * 1.wrapper函数
 * 2.项目与任务配置
 * 3.加载grunt插件和任务
 * 4.自定义任务
 **/

const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')


module.exports = grunt => { //wrapper函数
    grunt.initConfig({ //项目与任务配置
        sass: {
            options: {
                sourceMap: true,//生成对应的sourceMap文件
                implementation: sass
            },
            main: {
                files: {
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        babel: {//转换特性
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/js/app.js': 'src/js/app.js'
                }
            }
        },
        watch: {//需要自动编译，监视文件
            js: {
                files: ['src/js/*.js'],
                tasks: ['babel']
            },
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['web_swig', 'bs-reload']
            }
        },
        clean: {
            //所要清除的文件路径
            files: 'dist/**'
        },
        //模板文件
        cptpl: {
            test: {
                options: {
                    banner: '/*BANNER*/\n',
                    engine: 'dot'
                },
                files: {
                    'tmp/': ['test/html/abc.html']
                }
            }
        }
    })

    loadGruntTasks(grunt)//自动加载所有的插件

    grunt.registerTask('default', ['clean', 'sass', 'babel', 'watch'])
    //为使用watch去监视sass和babel，使用registerTask做一个映射，启动时先编译，再做监听

}