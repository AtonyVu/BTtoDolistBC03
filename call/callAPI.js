import{API} from './../config/API.js'

const getList = (sanpham,method,data) => {
    return axios({
      url: API+sanpham,
      method: method,
      data:data,
    });
  };

export default getList;