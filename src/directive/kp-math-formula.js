
import CrossEndCanvas from 'cross-end-canvas';
import config from '../config';
import { isArray } from '@hai2007/tool/type'

let doit = (el, binding) => {

    // 随机生成唯一标志
    let id = "kp-math-formula-id-" + ((Math.random() * 100000000000).toFixed(0));

    // 获取需要绘制的式子的数据
    let mathFormulaData = binding.value;

    if (!mathFormulaData) return;

    // 设置画布大小并插入页面
    el.innerHTML = "<canvas id='" + id + "' style='width:" + mathFormulaData.width + "px;height:" + mathFormulaData.height + "px;vertical-align: middle;'>非常抱歉，您的浏览器不支持canvas!</canvas>";

    // 建立绘图对象
    CrossEndCanvas({ id, platform: 'web' }).then(function (painter) {

        // 统一配置画笔
        painter.config({
            "textAlign": "center",
            "textBaseline": "middle",
            "font-size": config.mathFormula['font-size']
        });

        let drawFormula = (x, y, data) => {

            switch (data.type) {

                case "string": {
                    painter.fillText(data.contents[0], x + data.width * 0.5, y + data.height * 0.5);
                    break;
                }

                case "gen": {

                    // 先绘制根号下的表达式
                    drawFormula(x + 5 + config.mathFormula['padding-size'], y + config.mathFormula['padding-size'], data.contents[0]);

                    // 然后绘制根号
                    painter.beginPath()
                        .lineTo(x + config.mathFormula['padding-size'], y + data.height - config.mathFormula['padding-size'])
                        .lineTo(x + config.mathFormula['padding-size'] + 2.5, y + data.height - config.mathFormula['padding-size'] - 2.5)
                        .lineTo(x + config.mathFormula['padding-size'] + 5, y + data.height - config.mathFormula['padding-size'])
                        .lineTo(x + config.mathFormula['padding-size'] + 5, y + config.mathFormula['padding-size'] * 0.5)
                        .lineTo(x + data.width - config.mathFormula['padding-size'], y + config.mathFormula['padding-size'] * 0.5)
                        .stroke();

                    break;
                }
                case "limt": {

                    // 先绘制极限文字和趋势
                    painter.fillText("limt", x + config.mathFormula['padding-size'] + data._help.leftWidth * 0.5, y + config.mathFormula['padding-size'] + data._help.limtSize.height * 0.5);
                    drawFormula(x + config.mathFormula['padding-size'], y + data._help.limtSize.height + config.mathFormula['padding-size'], data.contents[0]);

                    // 然后绘制表达式
                    drawFormula(x + config.mathFormula['padding-size'] + data._help.leftWidth, y, data.contents[1]);

                    break;
                }
                case "sum": {

                    // 先绘制左边的，从下到上
                    drawFormula(x + data._help.leftWidth * 0.5 - data._help.p1Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"], data.contents[0]);
                    painter.beginPath()
                        .lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"])
                        .lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"])
                        .lineTo(x + data._help.leftWidth * 0.5 + 7 + config.mathFormula["padding-size"], y + data.height * 0.5 + config.mathFormula["padding-size"])
                        .lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"])
                        .lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"])
                        .stroke();
                    drawFormula(x + data._help.leftWidth * 0.5 - data._help.p2Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 - data._help.p2Height + config.mathFormula["padding-size"], data.contents[1]);

                    // 然后绘制右边的
                    drawFormula(x + data._help.leftWidth + config.mathFormula["padding-size"], y + data.height * 0.5 - data._help.rightHeight * 0.5, data.contents[2]);

                    break;
                }
                case "join": {

                    // 从左到右，一个个绘制即可
                    for (let item of data.contents) {
                        drawFormula(x + config.mathFormula["padding-size"], y - item.height * 0.5 + data.height * 0.5, item);
                        x += item.width;
                    }

                    break;
                }
                default: {
                    console.error('未匹配的数据格式：');
                    console.error(x, y, data);
                }

            }

        };

        drawFormula(0, 0, mathFormulaData);

    });

};

/**
 * 根据 mathFormula 提供的方法生成的数据，
 * 绘制出数学式子
 */

export default {

    inserted(el, binding) {
        doit(el, binding);
    },
    update(el, binding) {
        doit(el, binding);
    }

};
