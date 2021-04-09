/**
 * Created by edaniels on 4/7/2021.
 */
var axios = require('axios');
var fs = require('fs');
var downloadFile = require('./src/downloadFile');


downloadFile('https://www.nytimes.com/', './nytimes.html');
downloadFile('https://www.identityiq.com/', './idiq.html');
downloadFile('https://web.archive.org/web/20130302220424/https://www.identityiq.com/', './idiq-archive.html');
