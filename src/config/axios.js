const axios = require('axios');

let axiosInstance = axios.create({
    baseURL: 'https://dropbox-clone-oministack.herokuapp.com/'
});

export default axiosInstance;