import axios from "axios"

const appAxios = axios.create({
    baseURL: '/api',
    timeout: 2000,
    responseType: 'json',
    proxy: {
        protocol: "https",
        host: 'localhost',
        port: "8000"
    },
})

export default appAxios;