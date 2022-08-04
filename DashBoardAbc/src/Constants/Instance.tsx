import axios from 'axios'
import { ApiEndpoint, Constants } from './Constant';
import TokenService from '../Constants/token.service';
import { toast } from 'react-toastify'
const instance = axios.create({
    baseURL: Constants.BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        console.log(config, 'axios - interceptors - request - request !!!!!')
        config.headers = { "authorization": TokenService.getAccessToken(), "Content-Type": "application/json" }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });
//instance.defaults.headers.common['Authorization'] = "Bearer " + TokenService.getAccessToken();
instance.interceptors.response.use(
    (response) => {
        console.log(response, 'axios - interceptors - respone - response !!!!!')
        return response;
    },
    async (error) => {
        toast.error(error.response.data.message)
        const originalConfig = error.config;
        console.log(originalConfig, "original")
        if (error?.response?.status === 401) {
            originalConfig._retry = true;
            if (error.response.data.message === "Unauthorized! Access Token was expired!") {
                console.log(error.response.data.message)
                try {
                    let refreshToken = TokenService.getRefreshToken()
                    console.log("1 hour refresh token", refreshToken)
                    const res = await instance.post(ApiEndpoint.refreshAuth, {
                        "authorization": refreshToken,
                    });
                    console.log("response===>", res)
                    TokenService.UpdateAccessToken(res?.data?.newAccess)
                    instance.defaults.headers.common["authorization"] = res?.data?.newAccess;
                    return instance(originalConfig);
                }
                catch (err) {
                    return Promise.reject(error);
                }
            }
        }
        return Promise.reject(error);
    });

export default instance;
