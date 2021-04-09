/**
 * Created by edaniels on 4/7/2021.
 */
var stream = require('stream');
var util = require('util');
var fs = require('fs');
var axios = require('axios');

const finished = util.promisify(stream.finished);

module.exports = (fileUrl, outputLocationPath) => {
    const writer = fs.createWriteStream(outputLocationPath);
    console.log(`\nDownloading ${fileUrl}...`);
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream'
    }).then( response => {
        response.data.pipe(writer);
        return finished(writer);
    })
}