import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL='';
axios.defaults.timeout=5000;
import store from '../vuex/index';
let loadingNum=0;
let loadingTimeOut = null;
axios.interceptors.request.use(config => {
  store.commit('loadingSet', true);
  loadingNum++;
  return config
});
axios.interceptors.response.use(function (res) {
  // Do something with response data
    if (res.data.ret === '2000') {
        location.href = "/index.html#/login";
    }
  return res;
}, function (error) {
  // Do something with res error
  return Promise.reject(error);
});
const fetch = (opts, data) => {
  let httpDefaultOpts = { //http默认配置
    method:'post',
    url:opts,
    timeout: 10000,
    data: data,
    transformRequest:[(data)=>{
      if(typeof(data)=='object'){
        return qs.stringify(data);
      }else{
        return data;
      }
    }],
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type':'application/x-www-form-urlencoded'
    }
  };

  let promise=new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        loadingNum--;
        if(loadingNum<=1){
          setTimeout(() => {
            store.commit('loadingSet', false);
          }, 500);
        }
        resolve(res)
      }
    ).catch(
      (response) => {
        reject(res)
      }
    )

  });
  return promise
};
export default fetch;
