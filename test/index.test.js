const nock = require('nock')
const request = require('supertest');
const assert = require('assert');
require('dotenv').config();


const app = require("../backend/index");
const propertiesMock = require('./properties-mock.json')
const propertyMock = require('./property-mock.json')
const contactMock = require('./contact-mock.json')

const STAGING_URL = process.env.STAGING_URL

const params = new URLSearchParams({ "limit": 15, "page": 1, "search[statuses]": "published"})

nock(STAGING_URL)
.persist()
.get('/v1/properties')
.query(params)
.reply(200, propertiesMock)
.get('/v1/properties/XYZ123')
.reply(200, propertyMock)
.post('/v1/contact_requests', contactMock)
.reply(200, { status: "successful"});

describe('GET /properties', function() {
  it('responds with properties array', function(done) {
    request(app)
      .get('/properties?page=1')
      .then(response => {
        assert.equal(response.statusCode, 200)
        assert.deepEqual(response.body, propertiesMock.content)
        done();
      })
      .catch(err => done(err))
    })
});

describe('GET /property', function() {
  it('responds with a property json', function(done) {
    request(app)
      .get('/property/XYZ123')
      .then(response => {
        assert.equal(response.statusCode, 200)
        assert.deepEqual(response.body, propertyMock)
        done();
      })
      .catch(err => done(err))
    })
});

describe('POST /contact', function() {
  it('responds with status succesful', function(done) {
    request(app)
      .post('/contact')
      .send(contactMock)
      .then(response => {
        assert.equal(response.statusCode, 200)
        assert.deepEqual(response.body, {"status": "successful" })
        done();
      })
      .catch(err => done(err))
    })
});