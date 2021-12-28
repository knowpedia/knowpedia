import QuickPaper from 'quick-paper';
import MathFormula from 'knowpedia/mathFormula/index';

QuickPaper.use(MathFormula);

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入样式
import '@hai2007/style/normalize.css';

import App from './App.paper';

//根对象
window.quickPaper = new QuickPaper({

    //挂载点
    el: document.getElementById('root'),

    // 启动页面
    render: createElement => createElement(App)

});
