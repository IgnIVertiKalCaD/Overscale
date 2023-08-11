import axios from "axios";
import router from '@/router';
export const apiRequest = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
});

apiRequest.interceptors.request.use((config) => {
    const { headers } = config;
    const accessToken = localStorage.getItem('accessToken');

    if (headers && accessToken) {
        headers.Authorization = `Access-Token ${accessToken}`;
    }

    return config;
});

apiRequest.interceptors.response.use((response) => response, async (err) => {
    const { error } = err.response?.data;

    console.log(err);

    if (error?.reason === 'JwtTokenExpired' && !err.config?.retried) {
        const newConfig = {
            ...err.config,
            retried: true,
        };

        const response = await axios.post(
            `${new URL(process.env.VUE_APP_API_URL).href}auth/refresh`,
            {},
            { withCredentials: true }
        );

        localStorage.setItem('accessToken', response.data?.accessToken)

        return apiRequest.request(newConfig);
    }



    throw err;
});
