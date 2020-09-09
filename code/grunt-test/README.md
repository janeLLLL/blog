1. 初始化项目 + 添加项目依赖

`````
yarn init
yarn add grunt --dev

yarn add grunt-sass sass --dev			//将css文件通过编译成sass
yarn add grunt-babel @babel/core @babel	/preset-env --dev	//使用babel转换特性
yarn add grunt-contrib-watch --dev		//自动编译的监视文件
yarn add grunt-contrib-clean 			//自动清除指定文件
yarn add load-grunt-tasks --dev			//自动加载所有的插件
`````

2. 编写Grunt的入口文件：用于定义一些需要Grunt自动执行的任务，需要导出一个函数，接收一个grunt的参数
`````javascript
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
`````
3. 可以在package.json中对命令进行封装，方便使用

```json
{
    "scripts": {
    "clean": "grunt clean"
  },
}
```

4. 此时命令行运行，便可以自动构建文件


`````
yarn grunt
`````