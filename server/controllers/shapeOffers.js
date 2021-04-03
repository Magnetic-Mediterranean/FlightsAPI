const translateAirlineCode = require('./translateAirlineCode.js');

const shapeOffer = (offer) => {
  const code = offer.validatingAirlineCodes[0];

  return new Promise((resolve, reject) => {
    translateAirlineCode(code)
      .then((translated) => {
        const shaped = {
          airports: [],
          airline: translated
        };

        const { itineraries } = offer;
        const { segments } = itineraries[0];
        const { price } = offer;

        shaped.departureTime = segments[0].departure.at;
        shaped.arrivalTime = segments[segments.length - 1].arrival.at;

        const { duration } = itineraries[0];
        shaped.duration = duration.substring(2);

        shaped.numberOfStops = segments.length - 1;
        shaped.price = price.grandTotal;

        for (let i = 0; i < segments.length; i += 1) {
          const segment = segments[i];
          if (i === segments.length - 1) {
            shaped.airports.push(segment.departure.iataCode);
            shaped.airports.push(segment.arrival.iataCode);
          }
          else {
            shaped.airports.push(segment.departure.iataCode);
          }
        }

        resolve(shaped);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const shapeOffers = (offers) => {
  const final = [];

  for (let i = 0; i < offers.length; i += 1) {
    const offer = offers[i];
    final.push(shapeOffer(offer));
  }

  return Promise.all(offers.map((offer) => shapeOffer(offer)));
};

module.exports = shapeOffers;
