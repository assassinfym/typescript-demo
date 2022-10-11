import axios from "axios";
const config = {
    // 默认地址
    baseURL: "",
    // 设置超时时间
    timeout: 5000,
    // 跨域时候允许携带凭证
    // withCredentials: true
};
class RequestHttp {
    // 定义成员变量并指定类型
    service;
    constructor(config) {
        // 实例化axios
        this.service = axios.create(config);
        /**
         * 请求拦截器
         * 客户端发送请求 -> [请求拦截器] -> 服务器
         * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
         */
        this.service.interceptors.request.use((config) => {
            // const token = localStorage.getItem('token') || '';
            return {
                ...config,
                // headers: {
                //   'x-access-token': token, // 请求头中携带token信息
                // }
            };
        }, (error) => {
            // 请求报错
            Promise.reject(error);
        });
        /**
         * 响应拦截器
         * 服务器返回信息 -> [响应拦截器] -> 客户端JS获取到信息
         */
        this.service.interceptors.response.use((response) => {
            const { data } = response;
            // 全局错误信息拦截
            if (data.status && !data.access_token) {
                if (data.status !== 200) {
                    return Promise.reject(data.msg);
                }
                else {
                    return Promise.resolve(data);
                }
            }
            else {
                return Promise.resolve(data);
            }
        }, (error) => {
            const { response } = error;
            return Promise.reject(response);
        });
    }
    // 常用方法封装
    get(url, params) {
        return this.service.get(url, { params });
    }
    // 常用方法封装
    getToken(url, params) {
        return this.service.post(url, { params });
    }
    post(url, params) {
        return this.service.post(url, params);
    }
    put(url, params) {
        return this.service.put(url, params);
    }
    delete(url, params) {
        return this.service.delete(url, { params });
    }
    getService() {
        return this.service;
    }
}
// 导出一个实例对象
export default new RequestHttp(config);
//# sourceMappingURL=Request.js.map