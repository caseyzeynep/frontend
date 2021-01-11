// function foo(obj){
//     with(obj) {
//         a = 2;
//     }
// }
// OUTPUT: 2 undefined 2

function foo(obj){
    obj.a = 2;
} // OUTPUT: a is not defined


// var o1 = {
//     a: 3
// };


var o2 = {
    b: 3
};

// foo(o1);
// console.log(o1.a);
foo(o2);
console.log(o2.a);
console.log(a);