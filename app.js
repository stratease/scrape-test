/**
 * Created by edaniels on 4/7/2021.
 */
var express = require('express');
var fetchUrl = require('./src/fetchUrl');
const app = express();



app.get('/proxy', async (req, res) => {
    if(req.query.url) {
        const content = await fetchUrl(req.query.url);

        return res.send(content);
    }

    return res.send('Please send a `url` query param to proxy a website');
});



app.listen(1234, () => {
        console.log(`App listening on port 1234! /proxy is ready for requests.`);
    }
);