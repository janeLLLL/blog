web开发人员 | 学习者 | 影迷 [![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

- 很老土，但是我仍旧需要一些“鸡汤”假装自己还可以被激励

# 目录

- [**面试记录**](#面试记录)
- [**leecode题解**](#leecode题解)
- [**学习记录**](#学习记录)
- [**工作难题**](#工作难题)
- [**储备知识**](#储备知识)

# 面试记录

[空手套题（一）-4399/六一/交易猫/网易/博智林/浩鲸云](https://github.com/janeLLLL/blog/issues/14)

[空手套题（二）-小满/米哈游/建信金融/美团](https://github.com/janeLLLL/blog/issues/20)

<hr>

[拉勾前端测试Part.1](https://github.com/janeLLLL/blog/issues/33)

<hr>

[别人的面试经验帖子](https://github.com/janeLLLL/blog/issues/23)


> 米哈游面试官：你是工作一年吗？你是社招吧？你的基础为什么这么差？
>
> 20.12.2 新增：“你现在的知识体系太不系统了，面试只是在补漏，但是要系统地去学习前端”
>
> 所以我开始了👇

# leecode题解

- 剑指系列
  - [栈：9、30、59](https://github.com/janeLLLL/blog/issues/32) 

# 学习记录

一、[函数式编程](https://github.com/janeLLLL/blog/issues/1)

- 函数是一等公民
- 高阶函数
- **闭包**
- **函数式基础**：纯函数、副作用、柯里化、管道、函数组合

二、JavaScript

1. [JavaScript异步编程](https://github.com/janeLLLL/blog/issues/2)

   - 同步模式/异步模块
   - 回调函数
   - **Promise**
   - Generator：ES2015提供，生成器函数
   - Async / Await

2. [手写Promise](https://github.com/janeLLLL/blog/issues/3)

3. [ECMAScript新特性](https://github.com/janeLLLL/blog/issues/4)

   - let / const

     > 作用域：值和**表达式**在其中 "可见" 或可被访问到的上下文

   - 数组解构

   - 对象解构

   - 模板字符串字面量

     > 字面量（literal）是用于表达源代码中一个固定值的表示法（notation）

   - 带标签模板字符串

   - **字符串的扩展方法**：includes、startsWith、endsWith

   - 参数默认值：enable

   - 剩余参数

   - 展开数组

   - **箭头函数与this**

   - 对象字面量的增强

   - Object.assign / Object.is：对象方法

   - Proxy：监视属性

   - Reflect：提供了统一一套用于操作对象的API

   - Promise

   - class：继承(extends)

   - 静态方法(static)

   - Set（集合）：为数组元素去重

   - Map

   - symbol：无相同的smybol键值

   - for...of循环

   - 迭代器：Iterable

   - 生成器：Generator

   - ES Modules2016、2017比较

4. [TypeScript语言](https://github.com/janeLLLL/blog/issues/5)

   - 强弱类型
   - Flow
   - TypeScript语言规范与基本应用

   - [配置使用typescript : 全新项目 / 已有项目](https://github.com/janeLLLL/blog/issues/13)

5. [JavaScript性能优化](https://github.com/janeLLLL/blog/issues/6)

   - 内存管理
   - **垃圾回收与常见GC算法**
     - **引用计数**
     - **标记清除**
     - **标记整理**
   - **V8引擎的垃圾回收**
     - **空间复制**
     - **标记清除**
     - **标记增量**
   - 新生代回收
   - 老生代回收
   - 浏览器Performance工具
   - 代码优化实例
     - 慎用 / 缓存全局遍历
     - 原型新增方法
     - 避开闭包陷阱
     - 避免属性访问方法使用
     - **For优化**、最优循环
     - 节点添加优化、克隆优化节点操作、直接量替换Object操作

6. 问题：[JavaScript的一些小问题-GC触发机制 / heap size的优化 / 组件化开发模式的优化](https://github.com/janeLLLL/blog/issues/12)

三、工程化

1. [开发脚手架及封装自动化构建工作流](https://github.com/janeLLLL/blog/issues/10)
   - Yeoman
   - 自定义Generator：Generator本质上就是一个NPM模块
   - Plop
   - Grunt
   - Gulp
2. 实例
   - [如何自定义一个小型脚手架工具](https://github.com/janeLLLL/blog/issues/7)
   - [使用 Grunt 完成项目的自动化构建](https://github.com/janeLLLL/blog/issues/8)
   - 使用Gulp完成项目的自动化构建
   - 以上三点详见./code

四、[模块化开发与规范标准](https://github.com/janeLLLL/blog/issues/30)

- **ES Modules模块化规范**
- Webpack
- Rollup
- Parcel
- ESLint

五、Vue.js框架源码与进阶

前置知识：[Vue框架基础](https://github.com/janeLLLL/blog/issues/31)——单页面应用、Vue基础结构、Vue生命周期、Vue语法和概念

<hr>

1. [Vue-Router实现原理](https://github.com/janeLLLL/blog/issues/25)

   - 动态路由传参
   - 嵌套路由
   - 编程式导航
   - Hash / History / nodejs+nginx服务器配置
   - **实现自己的Vue-router**

2. [Vue.js手写响应式实现](https://github.com/janeLLLL/blog/issues/26)

   - 数据驱动
   - 数据响应
   - **发布 / 订阅模式**
   - **观察者模式**
   - 代码模拟vue响应式原理：Vue、Observer、Compiler、Dep、defineReactive

3. [虚拟DOM库Snabbdom](https://github.com/janeLLLL/blog/issues/27)

   - Snabbdom使用、作用、导入、核心
   - Snabbdom代码演示
     - h()
     - VNode
       - patch(oldVnode, newVnode )
       - createElm
       - patchVnode
       - updateChildren
   
   - [网上传的最广的diff算法简述](https://github.com/janeLLLL/blog/issues/24)

<hr>

4. Vue初始化：[简述 Vue 首次渲染的过程](https://github.com/janeLLLL/blog/issues/34)
5. 响应式：[简述 Vue 响应式原理](https://github.com/janeLLLL/blog/issues/35)
6. [虚拟DOM](https://github.com/janeLLLL/blog/issues/37)
7. 模板编译：[简述 Vue 中模板编译的过程](https://github.com/janeLLLL/blog/issues/36)
8. 组件化



# 工作难题

- [elementUI源码修改步骤](https://github.com/janeLLLL/blog/issues/18)
- [配置Windows Terminal右键打开](https://github.com/janeLLLL/blog/issues/11)

# 储备知识

- [前端自我检查清单](https://github.com/janeLLLL/blog/issues/28)

- [浙大可视化学校总结](https://github.com/janeLLLL/blog/issues/17)
- [关于Webpack的问答](https://github.com/janeLLLL/blog/issues/21)
- [网上传的最广的diff算法简述](https://github.com/janeLLLL/blog/issues/24) 
- [关于剩余参数...args和arguments](https://github.com/janeLLLL/blog/issues/19) 
