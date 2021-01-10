// If you want to prevent an object from having new properties added to it, but otherwise leave the rest of the object's properties alone, call Object.preventExtensions(..):
console.log("============Prevent adding new value===========");
var obj = {
	a: 2
};

Object.preventExtensions( obj );

obj.b = 3;
console.log(obj.b); // undefined
// In non-strict mode, the creation of b fails silently. In strict mode, it throws a TypeError.


// [[PUT]]
// Is the property an accessor descriptor (see "Getters & Setters" section below)? If so, call the setter, if any.
// Is the property a data descriptor with writable of false? If so, silently fail in non-strict mode, or throw TypeError in strict mode.
// Otherwise, set the value to the existing property as normal.


// ENUMERATION
console.log("===============Enumeration Example 1============");
var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make `b` NON-enumerable
	{ enumerable: false, value: 3 }
);

console.log(myObject.b); // 3
console.log(("b" in myObject)); // true
console.log(myObject.hasOwnProperty( "b" )); // true

// .......

for (var k in myObject) {
	console.log( k, myObject[k] );
} //// "a" 2
console.log("===============Enumeration Example 2============");
// "a" 2
var myObject1 = { };

Object.defineProperty(
	myObject1,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject1,
	"b",
	// make `b` non-enumerable
	{ enumerable: false, value: 3 }
);

console.log(myObject1.propertyIsEnumerable( "a" )); // true
console.log(myObject1.propertyIsEnumerable( "b" )); // false

console.log(Object.keys( myObject1 )); // ["a"]
console.log(Object.getOwnPropertyNames( myObject1 )); // ["a", "b"]