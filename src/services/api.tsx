import axios from "axios";
import TokenService from "./token.service";


const instance = axios.create({
    baseURL: "https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            // config.headers.Authorization = `Bearer ${token}`;
            config.headers["x-access-token"] = token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response && err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            console.log('refresh token');
            try {
                const rs = await axios.put('https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/refresh', {
                    refreshToken: TokenService.getLocalRefreshToken(),
                });

                const { accessToken } = rs.data;
                TokenService.updateLocalAccessToken(accessToken);

                originalConfig.headers['x-access-token'] = accessToken;

                return instance(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }

        return Promise.reject(err);
    }
);


export default instance;