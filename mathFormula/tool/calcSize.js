
import xhtml from '@hai2007/browser/xhtml';
import config from '../config';

let helpHidden = null;

export default function (texts) {

    if (!helpHidden) {
        helpHidden = xhtml.toNode("<div></div>");

        // 设置一些必要的样式
        xhtml.setStyles(helpHidden, {
            "font-size": config.mathFormula['font-size'] + "px",
            "font-family": "sans-serif",
            "padding": "0",
            "border": "none",
            "position": "fixed",
            "bottom": "-100px"
        });
        xhtml.append(document.body, helpHidden);
    }

    helpHidden.innerText = texts;
    return xhtml.size(helpHidden);
};
