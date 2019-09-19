import axios from 'axios';

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 4000
});

http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

http.interceptors.response.use(
    function(response){

    },
    function(error){
        return Promise.reject(error);
    }
)