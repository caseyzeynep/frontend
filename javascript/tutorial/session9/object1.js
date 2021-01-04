// function Person(firstname, surname){
//     this.name = firstname
//     this.surname = surname;
//     return 4;
// }
//
// Person.prototype.getFullName = function (){
//     return `${this.name} + ' ' + ${this.surname}`;
// }
// var bilal = new Person("Bilal", "Colak");
// var a = 3;
//
// bilal.prototype.address = 'asd';
//
// var zeynep = Object.create(bilal);
//
// console.log('hello');


function Foo() {
	// ...
}
var b = {a:3};
// var a = new Foo();
var c = Object.create(b);
// console.log(Object.getPrototypeOf( a ) === Foo.prototype);
// console.log(a.prototype === Foo.prototype);
// console.log(a.__proto__ === Foo.prototype);
// console.log(Foo.prototype);
// console.log(a.prototype);