/* eslint-disable */
/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { Toast } from 'vant';
import Cookies from 'js-cookie'
console.log("当前环境变量："+process.env.NODE_ENV)
console.log("当前环境路径："+process.env.VUE_APP_BASE_URL)
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// axios.defaults.withCredentials = true;
/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 * 路由参数携带功能 需要时开启
 */
// const toLogin = () => {
//     router.replace({
//         path: '/login',        
//         query: {
//             redirect: router.currentRoute.fullPath
//         }
//     });
// }

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            Toast.fail('401');
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            Toast.fail('403');
            break;
        // 404请求不存在
        case 404:
            Toast.fail('404'); 
            break;
        case 500:
            Toast.fail('500');
            break;
        default:
            Toast.fail(other); 
        }}

// 创建axios实例
var instance = axios.create();
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
instance.interceptors.request.use(    
    config => { 
        const token = Cookies.get('token');
        token && (config.headers.token = token);               
        return config;    
    },    
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(    
    // 请求成功
    res => {
        if(res.status === 200){
            switch(res.data.code){
                case 0:{
                    Toast.fail('登录失败');
                    return Promise.reject(res)
                }
                case 2:{
                    Toast.fail('用户帐号或密码错误');
                    return Promise.reject(res)
                }
                case 3:{
                    Toast.fail(res.data.msg);
                    return Promise.reject(res)
                }
                case 4:{
                    Toast.fail(res.data.msg);
                    return Promise.reject(res)
                }
                case 5:{
                    Toast.fail(res.data.msg);
                    return Promise.reject(res)
                }
                case 6:{
                    Toast.fail('没有cas权限');
                    return Promise.reject(res)
                }
                case 7:{
                    Toast.fail('用户未登录');
                    return Promise.reject(res)
                }
                case 8:{
                    Toast.fail(res.data.msg);
                    return Promise.reject(res)
                }
                case 9:{
                    Toast.fail('无权限');
                    return Promise.reject(res)
                }
            }
            return Promise.resolve(res)
        } else{
            return Promise.reject(res)

        } 
    },    
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.statusText);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // if (!window.navigator.onLine) {
            //    store.commit('changeNetwork', false);
            // } else {
                // return Promise.reject(error);
            // }
        }
    });

export default instance;