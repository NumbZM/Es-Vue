import axios from '../http'; // 导入http中创建的axios实例

const query = {
  esQuery(param) {
    return axios.get('es/query/', { params: param });
  },
};

export default query;