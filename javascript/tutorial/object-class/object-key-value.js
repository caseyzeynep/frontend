console.log("__proto__ , prototype");
// let Object = {
//     prototype: {toString()}
// };
let parent = {x:3};
// parent = {
//     x:3,
//     __proto__: Object.prototype means {toString()}
// }
parent.__proto__ = { x:4, print() {return `${this.x}`} };
// parent = {
//     x:3,
//     __proto__: {x:4, print() {return `${this.x}`}}
// }
console.log(parent.print()); // prints 3

let child = Object.create(parent);
// child.x = 6;
child.y = 5;
// child = {
//     y:5
//     __proto__: {
//             x: 3,
//             __proto__: {{ x:4, print() {return `${this.x}`} }}
//     }
// }
console.log(child.y);
console.log(child.x);
console.log(child.toString());
console.log(child.print()); // prints 6 if delete line18 prints 3
