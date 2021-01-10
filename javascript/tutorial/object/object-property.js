// // But as of ES5, all properties are described in terms of a property descriptor.
// // GET OBJECT PROPERTY
// console.log("===========Get Object Property Descriptor=============");
// var obj1 = {
// 	a: 2
// };
//
// console.log(Object.getOwnPropertyDescriptor( obj1, "a" ));
// // {
// //    value: 2,
// //    writable: true,
// //    enumerable: true,
// //    configurable: true
// // }
// // While we can see what the default values for the property descriptor characteristics are when we create a normal property, we can use Object.defineProperty(..) to add a new property, or modify an existing one (if it's configurable!), with the desired characteristics.
// Object.defineProperty( obj1, "b", {
// 	value: 3,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true
// } );
//
// console.log(obj1.b); // 3
// WRITABLE
// If parent writable false you can not add property child class (strict mode gives type error)
// console.log("===========WRITABLE=============");
// var parent = {a:3};
//
// Object.defineProperty(parent, "b", {
//     value: 3,
//     writable:false,
//     configurable: true,
// 	enumerable: true
// });
// parent.b = 'Parent b'; // if use-strict  mode gives type error
// var child = Object.create(parent);
// Object.defineProperty(child, "c", {
//     value:3,
//     writable:false,
//     configurable: true,
// 	enumerable: true
// });
// child.b ='Child b'; // if use-strict  mode gives type error
// parent.c = 'Parent c';
// child.c = 'Child c';
// console.log(parent);
// console.log(child);



// CONFIGURABLE
console.log("===========CONFIGURABLE=============");
// The final defineProperty(..) call results in a TypeError, regardless of strict mode, if you attempt to change the descriptor definition of a non-configurable property. Be careful: as you can see, changing configurable to false is a one-way action, and cannot be undone!
// var myObject = {
// 	a: 2
// };
//
// myObject.a = 3;
// myObject.a;					// 3
//
// Object.defineProperty( myObject, "a", {
// 	value: 4,
// 	writable: false,
// 	configurable: false,	// not configurable!
// 	enumerable: true
// } );
//
// myObject.a;					// 4
// myObject.a = 5;
// myObject.a;					// 5
//
// Object.defineProperty( myObject, "a", {
// 	writable: true,
// } ); // TypeError
//Another thing configurable:false prevents is the ability to use the delete operator to remove an existing property.

var myObject = {
	a: 2
};

console.log(myObject.a);				// 2
delete myObject.a;
console.log(myObject.a);				// undefined

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
} );

console.log(myObject.a);				// 2
delete myObject.a; // If strict-mode gives type error
console.log(myObject.a);				// 2




