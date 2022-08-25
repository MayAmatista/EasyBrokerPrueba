const express = require('express');
const request = require('request');
const cors = require('cors');
const bp = require('body-parser')

require('dotenv').config();
const app = express();
app.use(cors());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const API_KEY = process.env.API_KEY;
const PROPERTIES_STAGING_URL = process.env.PROPERTIES_STAGING_URL
const CONTACT_STAGING_URL = process.env.CONTACT_STAGING_URL

app.get('/property/:public_id', (req, res) => {
    let options = {
        url: `${PROPERTIES_STAGING_URL}/${req.params.public_id}`,
        method: 'GET',
        json: true,
        headers: {
            'X-Authorization': API_KEY
        },
    };
    request(options, function (err, r) {
        res.send(r.body);
    })
});

app.get('/properties', (req, res) => {
    let options = {
        url: PROPERTIES_STAGING_URL,
        method: 'GET',
        json: true,
        qs: {
            limit: 15,
            page: req.query.page,
            search: {
                statuses: "published"
            }
        },
        headers: {
            'X-Authorization': API_KEY
        }
    };
    request(options, function (err, r) {
        res.send(r.body.content);
    })
});

app.post('/contact', (req, res) => {
    let options = {
        url: CONTACT_STAGING_URL,
        method: 'POST',
        json: true,
        headers: {
            'X-Authorization': API_KEY
        },
        body: req.body
    };

    request(options, function (err, r) {
        res.send(r.body);
    })
});

app.listen(3000)
