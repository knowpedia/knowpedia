
import CrossEndCanvas from 'cross-end-canvas';

let doit = (el, binding) => {

    // 随机生成唯一标志
    let id = "kp-math-formula-id-" + ((Math.random() * 1000000).toFixed(0));

    // 获取需要绘制的式子的数据
    let mathFormulaData = binding.value;

    // 设置画布大小并插入页面
    el.innerHTML = "<canvas id='" + id + "' style='width:" + mathFormulaData.width + "px;height:" + mathFormulaData.height + "px'>非常抱歉，您的浏览器不支持canvas!</canvas>";

    // 建立绘图对象
    CrossEndCanvas({ id, platform: 'web' }).then(function (painter) {

        // 拿到画笔后就可以开始绘制了
        console.log(painter, mathFormulaData);

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
