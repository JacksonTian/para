para[![NPM version](https://badge.fury.io/js/para.png)](http://badge.fury.io/js/para) [![Build Status](https://travis-ci.org/JacksonTian/para.png?branch=master)](https://travis-ci.org/JacksonTian/para) [![Dependencies Status](https://david-dm.org/JacksonTian/para.png)](https://david-dm.org/JacksonTian/para) [![Coverage Status](https://coveralls.io/repos/JacksonTian/para/badge.png)](https://coveralls.io/r/JacksonTian/para)
====

## 项目目标
para的全称是paralleling，表示并列的意思。这个项目主要用于同一份文档的不同语言版本之间的对照功能。通常在项目中我们需要将中文的文档翻译成英文或者其他的语言。两种语言混杂在一个文件时，会比较杂乱。但分布在多个文件中时，却不利于维护。修改了中文之后，往往会忘记其他语言版本。para的主要目的就是用于解决该问题。

## 使用方式

通过npm安装：

```
npm install para -g
```

对比文档的多个语言版本：

```
$ para README.md README_en.md
```

这将得到一个文件：
```
Generate parallel page at: /Users/jacksontian/git/fks/parallel.html
```

通过浏览器打开，就能查看对比。

## License
The MIT License
