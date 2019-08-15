const axios = require('axios');

axios.create({
    baseUrl: 'https://api.github.com/users/'
});

module.exports = axios;