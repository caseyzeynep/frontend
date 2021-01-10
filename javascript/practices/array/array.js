// var a = [1, 2, 3, 5].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue/array.length
// }, 0);


// var b = [2,4,5].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return currentValue-accumulator
// });
//
// var c = [2,4,5].reduceRight(function(accumulator, currentValue, currentIndex, array) {
//   return currentValue-accumulator
// });
//
//
// var d = [1,2,3,4,5,2,8,3,-6,5,-2].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return currentValue-accumulator
// });
//
// var e = [1,2,3,4,5,2,8,3,-6,5, -2].reduceRight(function(accumulator, currentValue, currentIndex, array) {
//   return currentValue-accumulator
// });


function not(f) {
    return function (...args) {
        let result = f.apply(this, args);
        return !result;
    }
}
const odd = x => x % 2; // 1 veya 0
const even = not(odd);
let x = 0;
const countForMe = (x, value) => {
    if(value) x = x + 1;
    return x;
};
console.log([1, 3, 5, 7, 8, 10, 11,14].map(odd).reduce(countForMe, 0));

// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);