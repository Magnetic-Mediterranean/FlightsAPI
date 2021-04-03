const shapeOffer = (offer) => {
  const shaped = {
    airports: []
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

  return shaped;
};

const shapeOffers = (offers) => {
  const final = [];

  for (let i = 0; i < offers.length; i += 1) {
    const offer = offers[i];
    final.push(shapeOffer(offer));
  }

  return final;
};

module.exports = shapeOffers;
