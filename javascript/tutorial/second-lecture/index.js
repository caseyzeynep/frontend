// var foo;
var x = function foo(){
    return 45;
};
// foo.bar = "hello world";
console.log(typeof x.foo);
console.log(typeof x());
// console.log(typeof x.foo());
console.log(typeof foo);

// console.log(typeof foo.bar);

console.log([0] == false);
console.log('' == false);
console.log('' == [0]);