// WRITABLE
// var parent = {a:3};
//
// Object.defineProperty(parent, "b", {
//     value: 3,
//     writable:false,
//     configurable: true,
// 	enumerable: true
// });
// parent.b = 'Parent b';
// var child = Object.create(parent);
// Object.defineProperty(child, "c", {
//     value:3,
//     writable:false,
//     configurable: true,
// 	enumerable: true
// });
// child.b ='Child b';
// parent.c = 'Parent c';
// child.c = 'Child c';
// console.log(parent);
// console.log(child);



// CONFIGURABLE
var myObject = {
	a: 2
};

myObject.a = 3;
myObject.a;					// 3

Object.defineProperty( myObject, "a", {
	value: 4,
	writable: false,
	configurable: false,	// not configurable!
	enumerable: true
} );

myObject.a;					// 4
myObject.a = 5;
myObject.a;					// 5

Object.defineProperty( myObject, "a", {
	writable: true,
} ); // TypeError




