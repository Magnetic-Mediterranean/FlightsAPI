const amadeus = require('../init_amadeus.js');

const translateAirlineCode = (code) => new Promise((resolve, reject) => {
  amadeus.referenceData.airlines.get({
    airlineCodes: code
  })
    .then((response) => {
      resolve(response.data[0].businessName);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = translateAirlineCode;
