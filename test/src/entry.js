// import Knowpedia from 'knowpedia';
import Knowpedia from '../../src/index.js';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入样式
import '@hai2007/style/normalize.css';

import App from './App.paper';

//根对象
window.knowpedia = new Knowpedia({

    //挂载点
    el: document.getElementById('root'),

    // 启动页面
    render: createElement => createElement(App)

});
