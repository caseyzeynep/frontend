const {isObject} = require("./is-object");
function getKeysAndValues(obj){
    if(isObject(obj)){
        const keys = Object.keys(obj).sort();
        const length = keys.length;
        let values = [];
        for (let i = 0; i < length; i++){
            values.push(obj[keys[i]]);
        }
        return [keys, values];
    }
    else {
        return "It is not a object";
    }
}

console.log(getKeysAndValues({z:1,b:2, c:3}));