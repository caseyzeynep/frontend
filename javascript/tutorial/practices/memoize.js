function memoize (f){
    const cache = new Map();
    return function(...args){
        let a = [3];
        let b =  a.length + a.join('+');
        let key =  args.length + args.join('+');
        if (cache.has(key)){
            return cache.get(key);
        }
        else {
            let result = f.apply(this, arguments);
            cache.set(key,result);
            return result;
        }
    }
}
const factorial = memoize(function (n){ return (n <=1 ? 1: n*factorial(n-1));});
let resultOf3;
console.log(resultOf3);
resultOf3= factorial(4);
console.log(resultOf3);
var def;

let resultOf4 = factorial(3);
console.log(resultOf4);