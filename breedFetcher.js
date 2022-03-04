// requirements
const request = require('request');

// function to fetch breed data
const fetchBreedDescription = (breed, cb) => {
  const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (err, response, body) => {
    // converts string into object
    const parsed = JSON.parse(body);

    if (err) {
      cb(err, null);
    }

    if (parsed[0]) {
      cb(null, parsed[0].description);
    } else {
      cb("Can't find breed", null);
    }
  });
};

module.exports = { fetchBreedDescription };