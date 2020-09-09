// 实现这个项目的构建任务
const {
  src,
  dest,
  parallel,
  watch,
} = require('gulp')


/** gulp-load-plugins
 * 从package.json文件中加载所需要的gulp插件，
 * 可以直接附加到选择的对象上，
 * 而不再需要每一个依次引入
 */
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()
//yarn add gulp-load-plugins --dev


//写入流
// export.default = () => {
//     return src('src/*.scss')    //创建文件读取流
//     .pipe(cleanSss())           //转换流
//     .pipe(dest('dist'))         //写入流
// }


/**
 * 编译样式文件
 * yarn add gulp-sass --dev
 */
const sass = require('gulp-sass')

const style = () => {
  return src('src/assets/styles/*.scss', {
      base: 'src'
    }) //创建文件读取流
    .pipe(plugins.sass()) //转换流
    .pipe(dest('temp')) //写入流
    .pipe(bs.reload({
      stream: true
    }))
  //bs.reload将内部流的信息推给浏览器
}

/**
 * 编译脚本文件
 * yarn add gulp-babel @babel/core @babel/preset-env --dev
 */
const babel = require('gulp-babel')

const script = () => {
  return src('src/assets/scripts/*.js', {
      base: 'src'
    })
    .pipe(plugins.babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('temp'))
    .pipe(bs.reload({
      stream: true
    }))
}

/**
 * 编译html文件
 * 1. 模板文件
 * 2. 编译任务
 * yarn add gulp-swig --dev
 */
const data = {
  menus: [{
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [{
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}

const page = () => {
  return src('src/*.html', {
      base: 'src'
    })
    .pipe(plugins.swig({
      data,
      defaults: {
        cache: false
      }
    }))
    .pipe(dest('temp'))
    .pipe(bs.reload({
      stream: true
    }))
}

/**
 * 图片 / 字体文件转换
 * 上线之前编译，不用加到temp
 * yarn add gulp-imagemin --dev
 */
const image = () => {
  return src('src/assets/images/**', {
      base: 'src'
    })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', {
      base: 'src'
    })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

/**
 * 其它文件转换，例如公共文件夹里的文件
 * 上线之前编译，不用加到temp
 */
const extra = () => {
  return src('public/**', {
      base: 'public'
    })
    .pipe(dest('dist'))
}

/**
 * 文件清除
 * yarn add del --dev
 */
const {
  series
} = require('gulp') //需要先删除dist文件，再去生成dist
const del = require('del')

const clean = () => {
  return del(['dist', 'temp']) //生成的临时文件
}

/** 1. useref插件处理html的构建注释
 *  2. 在useref中进行文件压缩(html / js / css)
 *  yarn add gulp-useref --dev
 *  yarn add gulp-htmlmin gulp-uglify gulp-clean-css --dev
 *  yarn add gulp-if --dev
 */
const useref = () => {
  return src('temp/*.html', {
      base: 'dist'
    })
    .pipe(plugins.useref({
      searchPath: ['dist', '.']
    }))
    //html js css
    .pipe(plugins.if(/\.js$/, plugins.uglify())) //先构建compile，再进行压缩
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })))
    //只压缩默认空白字符,指定去压缩html里的空白符和换行符
    .pipe(dest('dist')) //读写分离
}

/**
 * 开发服务器
 * Browsersync能让浏览器实时、
 * 快速响应您的文件更改（html、js、css、sass、less等）
 * 并自动刷新页面
 * yarn add browser-sync --dev
 */
const browserSync = require('browser-sync')
const bs = browserSync.create() //自动创建一个开发服务器，单独定义到一个任务启动

const serve = () => {
  watch(['src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload) //bs.reload是一个任务
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  watch('src/assets/styles/*.scss', style) //监视样式文件、脚本等
  bs.init({
    notify: false, //提示
    port: 2080,
    // files: 'dist/**', //自动更新浏览器
    server: {
      baseDir: ['temp', 'src', 'public'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

/**
 * 导出任务
 */
const compile = parallel(style, script, page, image, font)
//上线之前执行的任务，最终构建的文件放到dist中
const build = series(clean, parallel(series(compile, useref), extra))
const develop = series(compile, serve)
module.exports = {
  build,
  develop,
  clean
}
