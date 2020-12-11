import axios from '../http'; // 导入http中创建的axios实例

const deleteData = {
  esDelete(param) {
    return axios.get('es/delete/', { params: param });
  },
};

export default deleteData;