# knowpedia
为knowpedia项目定制的前端框架。

<p align="center">
    <img src='./knowpedia.png'>
</p>

<p align="center">
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=knowpedia"><img src="https://img.shields.io/npm/dm/knowpedia.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=knowpedia"><img src="https://packagephobia.now.sh/badge?p=knowpedia" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/knowpedia"><img src="https://data.jsdelivr.com/v1/package/npm/knowpedia/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/knowpedia"><img src="https://img.shields.io/npm/v/knowpedia.svg" alt="Version"></a>
  <a href="https://github.com/knowpedia/knowpedia/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/knowpedia.svg" alt="License"></a>
    <a href="https://github.com/knowpedia/knowpedia" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/knowpedia/knowpedia?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/knowpedia/knowpedia/issues)！

## How to use?

本项目是基于[Quick Paper](https://github.com/hai2007/quick-paper)的[核心](https://github.com/hai2007/quick-paper#%E6%9B%B4%E5%B0%8F%E7%9A%84%E5%8C%85)进行的二次开发，专门为编辑特殊文本而进行了定制化，因此，基本的使用说明请查看[quickpaper文档](https://hai2007.gitee.io/quick-paper)。

需要注意的是，需要使用 ```knowpedia``` 代替 ```quick-paper``` 。

## 特有功能

下面，我们来列举出 ```knowpedia``` 框架特有的功能！

### 数学公式

首先，你需要在数据中定义公式，语法如下：

```js
data(){
    return {
        mathFormulas:{}
    };
},
 mounted() {
    this.mathFormulas = {
        // 返回的类型是公式对象
        <形参>: this.$mathFormula.<公式生成方法>(公式对象或字符串,......)
    };
},
```

然后，你可以在页面中借助指令显示出来了：

```html
<span kp-math-formula="mathFormulas.<形参>"></span>
```

下面列举出所有『公式生成方法』：

- 根号

```js
this.$mathFormula.gen(p1);
```

- 极限

```js
// p1表示趋向，p2是计算结果的表达式
this.$mathFormula.limt(p1,p2);
```

开源协议
---------------------------------------
[MIT](https://github.com/knowpedia/knowpedia/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
