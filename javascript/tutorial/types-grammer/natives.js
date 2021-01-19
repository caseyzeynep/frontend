// String Object
console.log("==============String Object=============");
var a = new String( "abc" );
// a__proto__ = String a.__proto__.__proto__ = Object
console.log(a); // node: "[String: 'abc']" can be changed based on chrome

console.log(typeof a); // "object" ... not "String"

console.log(a instanceof String); // true

console.log(Object.prototype.toString.call( a )); // "[object String]"

console.log( a.toString() );





console.log("==============Unboxing=============");
var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );
var d = a + ""; // `d` has the unboxed primitive value "abc"


console.log(a.valueOf()); // "abc"
console.log(b.valueOf()); // 42
console.log(c.valueOf()); // true


console.log(typeof a); // "object"
console.log(typeof d); // "string"