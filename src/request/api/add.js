import axios from '../http'; // 导入http中创建的axios实例

const add = {
  esAdd(param) {
    return axios.post('es/add/', param);
  },
};

export default add;