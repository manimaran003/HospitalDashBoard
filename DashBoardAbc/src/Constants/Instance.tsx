import axios from 'axios'
import { Constants } from './Constant';
import TokenService from '../Constants/token.service'
const instance = axios.create({
    baseURL: Constants.BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        console.log(config, 'axios - interceptors - request - request !!!!!')
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    });
instance.defaults.headers.common['Authorization'] = "Bearer " + TokenService.getAccessToken();
instance.interceptors.response.use(
    (response) => {
        console.log(response, 'axios - interceptors - respone - response !!!!!')
        return response;
    },
    (error) => {
        console.log(error)
        return Promise.reject(error);
    });

export default instance;
