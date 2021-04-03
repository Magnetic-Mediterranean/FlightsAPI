const router = require('express').Router();
const { getFlightOffers } = require('./controllers/getFlightOffers.js');

router.get('/flights', getFlightOffers);
// flight cheapest date search (to, from) => cheapest dates to fly from to
// flight offers search (date to, date from, to, from) => cheapest flights
// flight offers price: checks final price for flight (constanly updates)
// flight inspo: cheapest flights from X (location) => cheapest places to fy from X
module.exports = router;
