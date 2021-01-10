var obj = {
    a:0
};

function memoize(fn) {
    const cache = new Map();
    function fi(number){
        if(cache.has(number)){
            return cache.get(number);
        }else{
            // this = obj
            let result = fn.apply(this, [number]);
            cache.set(number, result);
            return result;
        }
    }
    return fi;
}
var fibonacci = memoize(function foo (n) { this.a++;
    return (n === 0 || n === 1) ? n : (fibonacci(n-1) + fibonacci(n-2))} );
var fi2 = fibonacci.apply(obj,[2]);
console.log(fi2);
console.log('a', obj.a);
var fi3 = fibonacci(3);
console.log(fi3);