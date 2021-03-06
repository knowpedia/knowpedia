
import CrossEndCanvas from 'cross-end-canvas';
import config from '../config';

import { drawBracket } from './draw';

let index = 0;

let doit = (el, binding) => {

    // 随机生成唯一标志
    let id = "kp-math-formula-id-" + (index++);

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

                    let leftTop = y + data.contents[1].height * 0.5 - data._help.limtSize.height * 0.5;

                    // 先绘制极限文字和趋势
                    painter.fillText("lim", x + config.mathFormula['padding-size'] + data._help.leftWidth * 0.5, config.mathFormula['padding-size'] + leftTop);
                    drawFormula(x, data._help.limtSize.height + leftTop - config.mathFormula['padding-size'], data.contents[0]);

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
                case "matrix": {

                    // 先绘制内容
                    for (let i in data.contents) {
                        for (let j in data.contents[i]) {
                            let curData = data.contents[i][j];

                            // 对于"|"特殊处理
                            if (curData.contents[0] == '|') {
                                painter.beginPath()
                                    .lineTo(x + data._help.colCenter[j], y + data._help.rowCenter[i] - curData.height * 0.5)
                                    .lineTo(x + data._help.colCenter[j], y + data._help.rowCenter[i] + curData.height * 0.5)
                                    .stroke();
                            } else {
                                drawFormula(x + data._help.colCenter[j] - curData.width * 0.5, y + data._help.rowCenter[i] - curData.height * 0.5, curData);
                            }
                        }
                    }

                    // 绘制两边
                    if (data._help.isHLS) {

                        painter.beginPath()
                            .lineTo(x + config.mathFormula["padding-size"] + 5, y + config.mathFormula["padding-size"])
                            .lineTo(x + config.mathFormula["padding-size"] + 5, y + data.height - config.mathFormula["padding-size"])
                            .stroke();

                        painter.beginPath()
                            .lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + config.mathFormula["padding-size"])
                            .lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + data.height - config.mathFormula["padding-size"])
                            .stroke();

                    } else {

                        painter.beginPath()
                            .lineTo(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"])
                            .lineTo(x + config.mathFormula["padding-size"] + 5, y + config.mathFormula["padding-size"] + 5)
                            .lineTo(x + config.mathFormula["padding-size"] + 5, y + data.height - config.mathFormula["padding-size"] - 5)
                            .lineTo(x + config.mathFormula["padding-size"] + 10, y + data.height - config.mathFormula["padding-size"])
                            .stroke();

                        painter.beginPath()
                            .lineTo(x - config.mathFormula["padding-size"] - 10 + data.width, y + config.mathFormula["padding-size"])
                            .lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + config.mathFormula["padding-size"] + 5)
                            .lineTo(x - config.mathFormula["padding-size"] - 5 + data.width, y + data.height - config.mathFormula["padding-size"] - 5)
                            .lineTo(x - config.mathFormula["padding-size"] - 10 + data.width, y + data.height - config.mathFormula["padding-size"])
                            .stroke();

                    }

                    break;
                }
                case "division": {

                    // 先绘制内容，从上到下
                    drawFormula(x + (data.width - data.contents[0].width) * 0.5, y + config.mathFormula["padding-size"], data.contents[0]);
                    drawFormula(x + (data.width - data.contents[1].width) * 0.5, y + config.mathFormula["padding-size"] + data.contents[0].height + 2, data.contents[1]);

                    // 再绘制中间的线条
                    painter.beginPath()
                        .lineTo(x + config.mathFormula["padding-size"], y + data.contents[0].height+1)
                        .lineTo(x + data.width - config.mathFormula["padding-size"], y  + data.contents[0].height+1)
                        .stroke();

                    break;
                }
                case "bracket": {

                    // 先绘制中间的内容
                    drawFormula(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"], data.contents[0]);

                    // 再绘制括号
                    drawBracket(painter, data._help.type, 'left', x + config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);
                    drawBracket(painter, data._help.type, 'right', x + data.width - config.mathFormula["padding-size"] - 10, y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);
                    break;
                }
                case "rightTop": {

                    drawFormula(x + 0.5 * config.mathFormula["padding-size"], y + data.height - data._help.p1Height - config.mathFormula["padding-size"], data.contents[0]);
                    drawFormula(x - 1.5 * config.mathFormula["padding-size"] + data._help.p1Width, y + 0.5 * config.mathFormula["padding-size"], data.contents[1]);

                    break;
                }
                case "rightBottom": {

                    drawFormula(x + 0.5 * config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.contents[0]);
                    drawFormula(x - 1.5 * config.mathFormula["padding-size"] + data._help.p1Width, y + data.height - 0.5 * config.mathFormula["padding-size"] - data._help.p2Height, data.contents[1]);

                    break;
                }
                case "equationSet": {

                    drawBracket(painter, "big", 'left', x + config.mathFormula["padding-size"], y + config.mathFormula["padding-size"], data.height - 2 * config.mathFormula["padding-size"]);

                    for (let i in data.contents) {
                        drawFormula(x + config.mathFormula["padding-size"] + 10, y + data._help.pxTops[i], data.contents[i]);
                    }

                    break;
                }
                case "upLine": {

                    drawFormula(x, y + config.mathFormula["padding-size"], data.contents[0]);
                    painter
                        .beginPath()
                        .lineTo(x, y + config.mathFormula["padding-size"])
                        .lineTo(x + data.width, y + config.mathFormula["padding-size"])
                        .stroke();

                    break;
                }
                case "downLine": {

                    drawFormula(x, y, data.contents[0]);
                    painter
                        .beginPath()
                        .lineTo(x, y + data.height - config.mathFormula["padding-size"])
                        .lineTo(x + data.width, y + data.height - config.mathFormula["padding-size"])
                        .stroke();

                    break;
                }
                case "absoluteValue": {

                    drawFormula(x + config.mathFormula["padding-size"], y, data.contents[0]);

                    painter
                        .beginPath()
                        .lineTo(x + config.mathFormula["padding-size"], y)
                        .lineTo(x + config.mathFormula["padding-size"], y + data.height)
                        .stroke();

                    painter
                        .beginPath()
                        .lineTo(x + data.width - config.mathFormula["padding-size"], y)
                        .lineTo(x + data.width - config.mathFormula["padding-size"], y + data.height)
                        .stroke();

                    break;
                }
                case "integral": {

                    drawFormula(x + config.mathFormula["padding-size"] + 15, y + config.mathFormula["padding-size"], data.contents[3]);
                    drawFormula(x + config.mathFormula["padding-size"] + 10, y + data.height - data.contents[2].height - config.mathFormula["padding-size"], data.contents[2]);
                    drawFormula(x + config.mathFormula["padding-size"] + 15, y + config.mathFormula["padding-size"] + data.contents[3].height, data.contents[0]);
                    drawFormula(x + config.mathFormula["padding-size"] + 15 + data.contents[0].width, y + config.mathFormula["padding-size"] + data.contents[3].height + 0.5 * (data.contents[0].height - data.contents[1].height), data.contents[1]);

                    // 然后绘制积分符号
                    painter.beginPath()
                        .moveTo(x + config.mathFormula["padding-size"], y + data.height - config.mathFormula["padding-size"] - 2.5)
                        .arc(x + config.mathFormula["padding-size"] + 2.5, y + data.height - config.mathFormula["padding-size"] - 2.5, 2.5, Math.PI, -Math.PI)
                        .lineTo(x + config.mathFormula["padding-size"] + 10, y + config.mathFormula["padding-size"] + 2.5)
                        .arc(x + config.mathFormula["padding-size"] + 12.5, y + config.mathFormula["padding-size"] + 2.5, 2.5, Math.PI, Math.PI)
                        .stroke();

                    break;
                }
                case "listedOr": {
                    drawFormula(x + data.width * 0.5 - data.contents[0].width * 0.5, y + data.height - config.mathFormula["padding-size"] - data.contents[0].height, data.contents[0]);
                    drawFormula(x + data.width * 0.5 - data.contents[1].width * 0.5, y + config.mathFormula["padding-size"], data.contents[1]);

                    painter
                        .beginPath()
                        .moveTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height)
                        .lineTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 25)
                        .bezierCurveTo(
                            x + data.width * 0.5 - 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 30,
                            x + data.width * 0.5 + 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 30,
                            x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 25
                        )
                        .lineTo(x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height)
                        .stroke();

                    break;
                }
                case "listedAnd": {
                    drawFormula(x + data.width * 0.5 - data.contents[0].width * 0.5, y + data.height - config.mathFormula["padding-size"] - data.contents[0].height, data.contents[0]);
                    drawFormula(x + data.width * 0.5 - data.contents[1].width * 0.5, y + config.mathFormula["padding-size"], data.contents[1]);

                    painter
                        .beginPath()
                        .moveTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 35)
                        .lineTo(x + data.width * 0.5 - 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 10)
                        .bezierCurveTo(
                            x + data.width * 0.5 - 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 5,
                            x + data.width * 0.5 + 10, y + config.mathFormula["padding-size"] + data.contents[1].height + 5,
                            x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 10
                        )
                        .lineTo(x + data.width * 0.5 + 15, y + config.mathFormula["padding-size"] + data.contents[1].height + 35)
                        .stroke();

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
