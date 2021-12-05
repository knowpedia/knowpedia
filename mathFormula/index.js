/**
 * 数学式子
 */

// 展示意图指令
import kpMathFormula from './mathFormula/kp-math-formula';

// 意图捕获方法集
import mathFormula from './mathFormula/$mathFormula';

/**
 * 导出
 */
export default {
    install(QuickPaper) {
        QuickPaper.directive("kpMathFormula", kpMathFormula);
        QuickPaper.prototype.$mathFormula = mathFormula;
    }
};


