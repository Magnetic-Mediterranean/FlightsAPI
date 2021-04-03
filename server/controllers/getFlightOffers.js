const amadeus = require('../init_amadeus.js');
// const axios = require('axios');

module.exports = {
  getFlightOffers: (req, res) => {
    amadeus.shopping.flightOffersSearch.get({
      originLocationCode: 'SYD',
      destinationLocationCode: 'BKK',
      departureDate: '2021-08-01',
      adults: '2'
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((responseError) => {
        res.sendStatus(responseError.code);
      });
  }
};
