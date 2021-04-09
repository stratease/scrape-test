/**
 * Created by edaniels on 4/7/2021.
 */
var axios = require('axios');


module.exports = async (url) => {
    console.log(`\nFetching ${url}...`);

    return axios({
        method: 'get',
        url
    }).then(response => response.data);
}