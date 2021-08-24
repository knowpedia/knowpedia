
/**
 * 用于捕获用户意图的一系列方法
 */

import calcSize from "../tool/calcSize";
import { isString } from "@hai2007/tool/type";
import config from '../config';

let formatBasic = p1 => {
    if (isString(p1)) {
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

    }

};

export default mathFormula;
