const amadeus = require('../init_amadeus.js');
const shapeCities = require('../models/shapeCities.js');

module.exports = {
  getCities: (req, res) => {
    const { search } = req.query;

    amadeus.referenceData.locations.get({
      keyword: search,
      subType: 'CITY'
    })
      .then((response) => {
        res.send(shapeCities(response.data));
      })
      .catch((responseError) => {
        res.send(responseError);
      });
  }
};
