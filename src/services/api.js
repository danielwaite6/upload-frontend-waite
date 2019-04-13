import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-waite.herokuapp.com'
});

export default api;