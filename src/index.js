// 引入QuickPaper核心代码，基于此进行二次开发
import Knowpedia from 'quick-paper';

/**
 * 数学式子
 */

// 展示意图指令
import kpMathFormula from './directive/kp-math-formula'; Knowpedia.directive("kpMathFormula", kpMathFormula);

// 意图捕获方法集
import mathFormula from './method/mathFormula'; Knowpedia.prototype.$mathFormula = mathFormula;

/**
 * 导出
 */
export default Knowpedia;
