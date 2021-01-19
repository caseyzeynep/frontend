// String Object
console.log("==============String Object=============");
var a = new String( "abc" );
// a__proto__ = String a.__proto__.__proto__ = Object
console.log(a); // node: "[String: 'abc']" can be changed based on chrome

console.log(typeof a); // "object" ... not "String"

console.log(a instanceof String); // true

console.log(Object.prototype.toString.call( a )); // "[object String]"

console.log( a.toString() );

console.log("==============Internal [[Class]]=============");
// Values that are typeof "object" (such as an array) are additionally tagged with an internal [[Class]] property
// (think of this more as an internal classification rather than related to classes from traditional class-oriented coding).
// This property cannot be accessed directly, but can generally be revealed indirectly by borrowing the default Object.prototype.toString(..)
// method called against the value. For example:

console.log(Object.prototype.toString.call( [1,2,3] )); // "[object Array]"
console.log(Object.prototype.toString.call( /regex-literal/i )); // "[object RegExp]"
console.log(Object.prototype.toString.call( null )); // "[object Null]"
console.log(Object.prototype.toString.call( undefined )); // "[object Undefined]"

console.log(Object.prototype.toString.call( "abc" ));	// "[object String]"
console.log(Object.prototype.toString.call( 42 ));		// "[object Number]"
console.log(Object.prototype.toString.call( true ));		// "[object Boolean]"



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