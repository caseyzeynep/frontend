// function foo(str, a){
//     eval(str); // (eval(str) =  var b = 3; )
//     console.log(a,b);
// }
// var b = 2;
// foo("var b = 3;", 1);
// console.log( b);

// OUTPUT:  foo(): 1 3   console.log(b): 2


function foo(str, a){
    eval(str); //  (eval(str) = b = 3; )
    console.log(a,b);
}
var b = 2;
foo("b = 3;", 1);
console.log( b);
// OUTPUT:  foo(): 1 3   console.log(b): 3