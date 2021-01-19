console.log("========Dot Operator Left to Right=================");
let parent = {x:"parent", print(){console.log(`${this.x}`)}};

let child = {x:"child", print(){console.log(`${this.x}`)},parent:parent};

parent.print(); // prints parent
child.print(); // prints child
child.parent.print(); // parent.print() prints parent

console.log("========Dot Operatator Reference and Type Error==============");
// console.log(b.f()); // Reference error b is not defined. because b is not created
let a = 3;
//console.log(a.f()); // Type error a.f() is not function.
a = {x:5};
//console.log(a.f()); // Type error a.f() is not function.

