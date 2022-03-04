// requirements
const { fetchBreedDescription } = require('./breedFetcher');

// connecting to command-line
const breedName = process.argv[2];

// fetch breed data
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(desc);
  }
});