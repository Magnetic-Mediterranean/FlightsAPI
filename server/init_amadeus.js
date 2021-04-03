const Amadeus = require('amadeus');

const { key, secret } = require('../amadeus.auth.js');

const amadeus = new Amadeus({
  clientId: key,
  clientSecret: secret
});

module.exports = amadeus;
