const express = require ('express');
const request = require('request');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(cors());
const API_KEY = process.env.API_KEY;

app.get('/property/:public_id', (req, res) => {
    let options = {
        url: 'https://api.stagingeb.com/v1/properties/' + req.params.public_id,
        method: 'GET',
        json: true,
        headers: {
            'X-Authorization': API_KEY
        }
    };
    request(options, function(err,r){
        res.send(r.body);
    })
});

app.get('/properties', (req, res) => {
    let options = {
        url: 'https://api.stagingeb.com/v1/properties?page=' + req.query.page + '&limit=15&search%5Bstatuses%5D%5B%5D=published',
        method: 'GET',
        json: true,
        headers: {
            'X-Authorization': API_KEY
        }
    };
    console.log(options.url);
    request(options, function(err,r){
        res.send(r.body.content);
    })
});

app.listen(3000)
