const fetch = require("node-fetch");
const url = `https://restcountries.eu/rest/v2/name/ahmet`;

const fullFill = function (response){
    if(response.status != 200){
        throw new Error(`Country not found ${response.status}`);
    }
}

const reject = function (err) {
    console.log('Enter reject');
    console.log(err.message);
}

const result = fetch(url);

// result.then(fullFill, reject);
result.then(fullFill).catch(reject);
