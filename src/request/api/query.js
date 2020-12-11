import axios from '../http'; // 导入http中创建的axios实例

const query = {
  esQuery(param) {
    return axios.get('es/query/', { params: param });
  },
  esGetEmployee(param) {
    return axios.get('es/get_employee/', { params: param });
  },
};

export default query;