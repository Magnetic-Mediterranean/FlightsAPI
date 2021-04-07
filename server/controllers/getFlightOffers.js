const amadeus = require('../init_amadeus.js');
const shapeOffers = require('../models/shapeOffers.js');
// const axios = require('axios');

module.exports = {
  getFlightOffers: (req, res) => {
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults
    } = req.query;

    amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      adults,
      max: '40',
      currencyCode: 'USD'
    })
      .then((response) => {
        shapeOffers(response.data)
          .then((shaped) => {
            res.send(shaped);
          })
          .catch((err) => {
            console.log(err);
            return err;
          });
      })
      .catch((responseError) => {
        res.send(responseError);
      });
  }
};
