const shapeCity = (cityObj) => {
  const shaped = {};

  const { address, geoCode } = cityObj;

  shaped.city = address.cityName;
  shaped.country = address.countryName;
  shaped.cityCode = address.cityCode;
  shaped.lat = geoCode.latitude;
  shaped.lng = geoCode.longitude;

  return shaped;
};

const shapeCities = (cities) => {
  const shaped = [];

  for (let i = 0; i < cities.length; i += 1) {
    const city = cities[i];
    shaped.push(shapeCity(city));
  }

  return shaped;
};

module.exports = shapeCities;
