const fetch = require("node-fetch");

// One Promise
const country = "germany";
const url = `https://restcountries.eu/rest/v2/name/${country}`;
const errUrl = `https://restcountries1.eu/rest/v2/name/${country}`;

const result = fetch(url);
// const result1 = fetch(errUrl);

// console.log(result); // promise pending

const fullFill = function (response){
    console.log('Fulfill Result Promise' );
    // console.log(result);
    console.log(response);
}

const reject = function (err) {
    console.log('Reject Result Promise' );
    console.log(result1);
    console.log(err.message);
}

// result.then(fullFill, reject);
// result1.then(fullFill, reject);
// result1.then(fullFill).catch(reject);


// Promise Chain
const fullFillPromise = function (response){
    return response.json();
}

result.then(fullFillPromise).then(fullFill);

// Promise a value
const fullFillValue = function (){
    return 3;
}

result.then(fullFillValue).then(fullFill);