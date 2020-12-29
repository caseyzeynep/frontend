const {isObject} = require("./is-object");
function extractCityFacts(city){
    if(isObject(city)){
        if(!(city.hasOwnProperty('name' ))){
            return "City does not have a name";
        }
        if(!(city.hasOwnProperty('population' ))){
            return "City does not have a population";
        }
        if(!(city.hasOwnProperty('continent' ))){
            return "City does not have a continent"
        }
        else {
            return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
        }
    }
    else {
        return "City is not object"
    }
}

console.log(extractCityFacts({name: "Paris", population: "2,140,526", continent: "Europe"}));
console.log(extractCityFacts({name: "Tokyo", population: "13,929,286", continent: "Asia"}));
console.log(extractCityFacts({population: "13,929,286", continent: "Asia"}));
console.log(extractCityFacts(undefined));