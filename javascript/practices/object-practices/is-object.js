function isObject(param){
    if ( typeof param !== "string" &&
        typeof param !== "number" &&
        typeof param !== "boolean" &&
        typeof param !== 'symbol' &&
        param !== undefined && param !== null) {
        return true;
    }
    else {
        return false;
    }
}


// console.log(isObject(function add(a,b){return a+b;}));
// console.log(isObject(new RegExp(("^[a-zA-Z0-9]+$"), "g")));
// console.log(isObject(null));
// console.log(isObject(''));
// console.log(isObject(true));
// console.log(isObject(3));

module.exports = {isObject}