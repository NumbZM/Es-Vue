import axios from '../http'; // 导入http中创建的axios实例

const list = {
  esList(param) {
    return axios.get('es/list/', { params: param });
  }
};

export default list;