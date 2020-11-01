import axios from 'axios'
const Http = axios.create({
    baseURL: 'https://server.crossingpaths.site',
    timeout: 1000,
    withCredentials: true
});

export default Http