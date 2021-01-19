let a = {};

function foo(){
    const b = { c:{}};
  (function (b,c){
    function someFunc() {}
    c = someFunc;
    console.log(b);
    b.c = someFunc;
    console.log(b);
})(b, b.c);
  console.log(b);
  return b.c;
}
foo();
console.log(b);
// let b = a;
// b = a;
// c = a;
// b.x = 'by'; // module.exports
// c.x = 'cy'; // exports
// b = function f(obj){
//     a = obj;
//     return obj
// }({p1: 'x'});
// console.log(a);
// b = { p1: 'x'}; // valid olsun // module.exports
// b.a = {p1: 'x'};
// a = b.a;
// c = { p1: 'y'}; // invalid olsun // exports
// console.log(a); // {p1: 'x'}
