// requirements
const request = require('request');

// function to fetch breed data
const fetchBreed = (breed, cb) => {
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

// connecting to command-line
const breedName = process.argv[2];

fetchBreed(breedName, (err, description) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(description);
  }
});

