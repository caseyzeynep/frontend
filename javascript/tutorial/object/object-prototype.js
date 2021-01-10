// Similar to this [[Prototype]] chain look-up process, if you use a for..in loop to iterate over an object,
// any property that can be reached via its chain (and is also enumerable ) will be enumerated.
//     If you use the in operator to test for the existence of a property on an object, in will check the entire chain of the object (regardless of enumerability).


// 1) If a normal data accessor property named foo is found anywhere higher on the [[Prototype]] chain,
//     and it's not marked as read-only (writable:false) then a new property called foo is added directly to myObject, resulting in a shadowed property.
// 2) If a foo is found higher on the [[Prototype]] chain,
//     but it's marked as read-only (writable:false), then both the setting of that existing property as well as the creation of the shadowed property on myObject are disallowed. If the code is running in strict mode, an error will be thrown. Otherwise, the setting of the property value will silently be ignored. Either way, no shadowing occurs.
// 3) If a foo is found higher on the [[Prototype]] chain and
//     it's a setter, then the setter will always be called. No foo will be added to (aka, shadowed on) myObject, nor will the foo setter be redefined.


//all functions by default get a public, non-enumerable  property on them called prototype, which points at an otherwise arbitrary object.
// console.log("============Example 1==============")
// function Foo() {
// 	// ...
// }
//
// var a = new Foo();
//
// console.log(Object.getPrototypeOf( a ) === Foo.prototype); // true
// console.log(Object.getPrototypeOf( a ) === Object.prototype); // false
// console.log(Object.getPrototypeOf(Object.getPrototypeOf( a )) === Object.prototype); // true
// console.log(Object.getPrototypeOf(Foo.prototype) === Object.prototype); // true

// console.log("============Example 2==============")
// function Foo() {
// 	// ...
// }
//
//
// console.log(Foo.prototype.constructor === Foo); // true
//
// var a = new Foo();
// // foo is a.__proto__constructor
// console.log(a.constructor === Foo); // true
// console.log(a.__proto__.constructor === Foo); // true
//

// console.log("============Example 3==============")
function Foo() {
	// ...
}

Foo.prototype = { /* .. */ };
console.log(Foo.prototype.constructor === Foo); // false

var a = new Foo();
// foo is a.__proto__constructor
console.log(a.constructor === Foo); // false
console.log(a.constructor === Object); // true
b=3;
//

// pre-ES6
// throws away default existing `Bar.prototype`
// Bar.prototype = Object.create( Foo.prototype );

// ES6+
// modifies existing `Bar.prototype`
// Object.setPrototypeOf( Bar.prototype, Foo.prototype );