import {Toast} from "@/utils/Toast";
import QS from 'qs';
const baseUrl = process.env.VUE_APP_SERVER;
import axios from 'axios';

axios.interceptors.request.use(
    config => {

        // config.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9';
        if (config.method  === 'post') {
            config.data = QS.stringify(config.data);
        }
        if (config.method === 'get') {
            config.paramsSerializer = function(params) {
                return QS.stringify(params, { arrayFormat: 'repeat' })
            }
        }
        return config;
    },
    error =>{
        Toast.error(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
    return response
}, error => {
    Toast.error(error.message  || 'Error!')
    return Promise.reject(error)
})


export const apiAsync = (method, url, params, callback) => {
    if(method == 'get') {
        return axios({
            timeout: 8000,
            method: method,
            baseURL: baseUrl,
            url: url,
            params: params,
            traditional: true
        }).then((res) => {
            callback(res);
        });
    }else if(method == 'post'){
        return axios({
            timeout: 8000,
            method: method,
            baseURL: baseUrl,
            url: url,
            data: params,
            traditional: true
        }).then((res) => {
            callback(res);
        });
    }
}

export const apiSync = (method, url, params) => {
    if(method == 'get') {
        return axios({
            timeout: 8000,
            method: method,
            baseURL: baseUrl,
            url: url,
            params: params,
            traditional: true
        });
    }else if(method == 'post'){
        return axios({
            timeout: 8000,
            method: method,
            baseURL: baseUrl,
            url: url,
            data: params,
            traditional: true
        });
    }
}

