const express = require ('express');
const request = require('request');
const cors = require('cors');
const bp = require('body-parser')

require('dotenv').config();
const app = express();
app.use(cors());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
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
    request(options, function(err,r){
        res.send(r.body.content);
    })
});

app.post('/contact', (req, res) => {
    let options = {
        url: 'https://api.stagingeb.com/v1/contact_requests',
        method: 'POST',
        json: true,
        headers: {
            'X-Authorization': API_KEY
        },
        body: req.body
    };
    request(options, function(err,r){
        res.send(r.body);
    })
});

app.listen(3000)
