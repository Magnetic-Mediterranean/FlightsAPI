const amadeus = require('../init_amadeus.js');
const shapeOffers = require('./shapeOffers.js');
// const axios = require('axios');

module.exports = {
  getFlightOffers: (req, res) => {
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults
    } = req.body;

    amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
      max: '5',
      currencyCode: 'USD'
    })
      .then((response) => {
        res.send(shapeOffers(response.data));
      })
      .catch((responseError) => {
        // res.sendStatus(responseError.code);
        throw responseError;
      });
  }
};
