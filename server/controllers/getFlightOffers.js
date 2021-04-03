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
      max: '4',
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
        // res.sendStatus(responseError.code);
        console.log(responseError);
        return responseError;
      });
  }
};
