import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer PnoVKV4T2He39XsElM2qPm_XiC42PtswVx8ySl77TbDIPNFyzRvP-T2l2d5rt2Cz7cIE7Y2PRve2owt0fx-ABx4e7F-7jsjOFzaCjlpdXwB_XyHOz2CeSqhn5CfAXnYx'
  }
});