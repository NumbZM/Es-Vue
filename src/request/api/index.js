/**
 * api接口的统一出口
 */

// 其他模块的接口……
import query from './query';
import add from './add';
import deleteData from './deleteData';
import list from './list';
// 导出接口
export default {
    query,
    add,
    deleteData,
    list
};