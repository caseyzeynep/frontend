var obj = {b:4};

function memoize (f){
    this.d = 5;
    const cache = new Map();
    return function(...args){
        let key =  args.length + args.join('+');
        if (cache.has(key)){
            return cache.get(key);
        }
        else {
            let result = f.apply(this, args);
            // let result = f(...args);
            cache.set(key,result);
            return result;
        }
    }
}

const factorial = memoize.call(obj,function fact (n){ this.c = 'hello'; return (n <=1 ? 1: n*factorial(n-1));});
const factorial1 = memoize.call(obj,function fact (n){ this.c = 'hello'; return (n <=1 ? 1: n*factorial(n-1));});
let resultOf3;
console.log(resultOf3);
resultOf3= factorial.apply(obj,2);
console.log(resultOf3);
result = factorial1(3);

// let resultOf4 = factorial(6);
// console.log(resultOf4);