
/**
 * 用于捕获用户意图的一系列方法
 */

import calcSize from "../tool/calcSize";
import { isString, isNumber } from "@hai2007/tool/type";
import config from '../config';

let formatBasic = p1 => {
    if (isString(p1) || isNumber(p1)) {
        let contentSize = calcSize(p1);
        return {
            width: contentSize.width + config.mathFormula["padding-size"] * 2,
            height: contentSize.height + config.mathFormula["padding-size"] * 2,
            contents: [p1],
            type: 'string'
        };
    } else {
        return p1;
    }
};

let helpSize = {};
let getContentSize = p1 => {
    if (!(p1 in helpSize)) {
        helpSize[p1] = calcSize(p1);
    }

    return helpSize[p1];
};

let mathFormula = {

    // 根号
    gen(p1) {

        let p1Obj = formatBasic(p1);

        return {
            width: p1Obj.width + 5 + config.mathFormula["padding-size"] * 2,
            height: p1Obj.height + config.mathFormula["padding-size"] * 2,
            contents: [p1Obj],
            type: 'gen'
        };

    },

    // 极限
    limt(p1, p2) {

        let p1Obj = formatBasic(p1);
        let p2Obj = formatBasic(p2);

        let limtSize = getContentSize('limt');

        let leftHeight = limtSize.height + p1Obj.height;

        return {
            width: p1Obj.width + p2Obj.width + config.mathFormula["padding-size"] * 2,
            height: leftHeight > p2Obj.height ? leftHeight : p2Obj.height,
            contents: [p1Obj, p2Obj],
            type: 'limt',
            _help: {
                limtSize,
                leftWidth: p1Obj.width
            }
        };

    },

    // 求和
    sum(p1, p2, p3) {

        let p1Obj = formatBasic(p1);
        let p2Obj = formatBasic(p2);
        let p3Obj = formatBasic(p3);

        let leftWidth = Math.max(p1Obj.width, p2Obj.width, 20);

        return {
            width: leftWidth + p3Obj.width + config.mathFormula["padding-size"] * 2,
            height: Math.max(Math.max(p1Obj.height, p2Obj.height) * 2 + 20, p3Obj.height) + config.mathFormula["padding-size"] * 2,
            contents: [p1Obj, p2Obj, p3Obj],
            type: "sum",
            _help: {
                leftWidth,
                p1Height: p1Obj.height,
                p1Width: p1Obj.width,
                p2Height: p2Obj.height,
                p2Width: p2Obj.width,
                rightHeight: p3Obj.height
            }
        };

    },

    // 拼接组合
    join(...px) {
        let pxObjs = [], width = 0, height = 0;
        for (let p of px) {
            let pxObj = formatBasic(p);
            pxObjs.push(pxObj);

            width += pxObj.width;
            height = pxObj.height > height ? pxObj.height : height;
        }

        return {
            width: width + config.mathFormula["padding-size"] * 2,
            height: height + config.mathFormula["padding-size"] * 2,
            contents: pxObjs,
            type: "join"
        };

    },

    // 矩阵和行列式
    matrix(p1, p2) {

        let pxObjs = [];

        // 分别用于记录当前行最高多少和当前列最宽多少
        let rowMax = [], colMax = [];
        for (let i in p1) rowMax[i] = 0;
        for (let j in p1[0]) colMax[j] = 0;

        for (let i in p1) {
            let rowPxObjs = [], row = p1[i];
            for (let j in row) {
                let col = row[j];
                let colPxObj = formatBasic(col);
                rowPxObjs.push(colPxObj);

                // 校对行和列的最值
                if (rowMax[i] < colPxObj.height) rowMax[i] = colPxObj.height;
                if (colMax[j] < colPxObj.width) colMax[j] = colPxObj.width;

            }
            pxObjs.push(rowPxObjs);
        }

        // 计算得出宽和高
        let width = 0, height = 0;
        for (let value of rowMax) height += value;
        for (let value of colMax) width += value;

        // 计算中心位置
        let rowCenter = [], colCenter = [];
        rowCenter[0] = config.mathFormula["padding-size"] + rowMax[0] * 0.5;
        colCenter[0] = config.mathFormula["padding-size"] + colMax[0] * 0.5 + 10;

        for (let i = 1; i < rowMax.length; i++) {
            rowCenter[i] = rowCenter[i - 1] + (rowMax[i - 1] + rowMax[i]) * 0.5;
        }

        for (let j = 1; j < colMax.length; j++) {
            colCenter[j] = colCenter[j - 1] + (colMax[j - 1] + colMax[j]) * 0.5;
        }

        return {
            width: width + config.mathFormula["padding-size"] * 2 + 20,
            height: height + config.mathFormula["padding-size"] * 2,
            contents: pxObjs,
            type: "matrix",
            _help: {
                isHLS: p2,
                rowCenter,
                colCenter
            }
        };

    },

    // 除
    division(p1, p2) {

        let p1Obj = formatBasic(p1);
        let p2Obj = formatBasic(p2);

        return {
            width: Math.max(p1Obj.width, p2Obj.width) + config.mathFormula["padding-size"] * 2,
            height: p1Obj.height + p2Obj.height + 2 + config.mathFormula["padding-size"] * 2,
            contents: [p1Obj, p2Obj],
            type: "division"
        };

    },

    // 括号
    // p2表示括号的类型，可选的有：
    // small、middle、big，分别表示，小括号、中括号、大括号
    bracket(p1, p2) {

        let p1Obj = formatBasic(p1);

        return {
            width: p1Obj.width + 20 + config.mathFormula["padding-size"] * 2,
            height: p1Obj.height + config.mathFormula["padding-size"] * 2,
            contents: [p1Obj],
            type: "bracket",
            _help: {
                type: p2
            }
        };

    }

};

export default mathFormula;
