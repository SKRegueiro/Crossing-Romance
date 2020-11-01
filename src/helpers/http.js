import axios from 'axios'
const Http = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 1000,
    withCredentials: true
});

export default Http