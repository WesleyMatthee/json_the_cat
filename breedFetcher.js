const request = require("request");
const chalk = require("chalk");
//console.log(request);



const fetchBreedDescription = function(breedName, callback) {

  //get the request lib from npm
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback('Server responded with:' + response.statusCode, null);
      return null;
    }
    const data = JSON.parse(body); //turns object into a string

    if (data.length === 0) {
      callback(chalk.red("This breed does not exist"));
      return null;
    }

    callback(null, chalk.green(data[0].description));
    //console.log(typeof data);
  });
};

module.exports = { fetchBreedDescription };