const router = require('express').Router();
const { getFlightOffers } = require('./controllers/getFlightOffers.js');
const { getCities } = require('./controllers/getCities.js');

router.get('/flights/offers', getFlightOffers);
router.get('/flights/translate', getCities);

module.exports = router;
