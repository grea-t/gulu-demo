# 轱辘 - 一个vue UI组件

[![Build Status](https://travis-ci.org/grea-t/gulu-demo.svg?branch=master)](https://travis-ci.org/grea-t/gulu-demo)

作者：grea-t

##介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

##开始使用

1.添加CSS样式
    使用本框架前，请在CSS中开启border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE 8及以上浏览器都支持此样式
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15及以上浏览器都支持此样式

2.安装gulu
    ```
    npm i --save gulu-demo-1
    ```
3.引入gulu
    ```
    import {Button,ButtonGroup,Icon} from 'gulu-demo-1'
    import 'gulu-demo-1/dist/index.css'
    
    export default{
        name:'app',
        components:{
            'g-button':Button,
            'g-icon':Icon
        }
    }
    ```
4.引入svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1875769_uqz2gq2a3r.js"></script>
    ```

##文档

##提问

##变更记录

##联系方式

##贡献代码