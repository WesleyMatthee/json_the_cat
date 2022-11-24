const request = require("request");
//console.log(request);



const fetchBreedDescription = function(breedName, callback) {

  //get the request lib from npm
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      callback('Server responded with:' + response.statusCode, null);
      return;
    }
    const data = JSON.parse(body); //turns object into a string

    if (data.length === 0) {
      callback("This breed does not exist");
      return;
    }

    callback(data[0].description);
    //console.log(typeof data);
  });
};

module.exports = { fetchBreedDescription };