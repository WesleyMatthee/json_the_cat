const request = require("request");
//console.log(request);

/*
The particular endpoint that will allow us to search breed information is: https://api.thecatapi.com/v1/breeds/search.

The documentation page for it is: https://docs.thecatapi.com/api-reference/breeds/breeds-search
*/
const breed = process.argv[2];


//get the request lib from npm
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {

  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body); //turns object into a string

  if (data.length === 0) {
    console.log("This breed does not exist");
    return;
  }

  console.log(data[0].description);
  //console.log(typeof data);
});

