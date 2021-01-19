console.log(typeof 3);                          // number
console.log(typeof 4.5);                        // number
console.log(typeof true);                       // boolean
console.log(typeof false);                      // boolean
console.log(typeof null);                       // object -> bug
console.log(typeof undefined);                  // undefined
console.log(typeof {});                         // object
console.log(typeof []);                         // object
console.log(typeof function f(){});             // function but we should think special object.


console.log("==============Internal [[Class]]=============");
// Values that are typeof "object" (such as an array) are additionally tagged with an internal [[Class]] property
// (think of this more as an internal classification rather than related to classes from traditional class-oriented coding).
// This property cannot be accessed directly, but can generally be revealed indirectly by borrowing the default Object.prototype.toString(..)
// method called against the value. For example:

console.log(Object.prototype.toString.call( [1,2,3] ));                  // "[object Array]"
console.log(Object.prototype.toString.call( /regex-literal/i ));         // "[object RegExp]"
console.log(Object.prototype.toString.call( function f(){} ));                  // "[object Function]"
// Primitives
console.log(Object.prototype.toString.call( "abc" ));	                // "[object String]"
console.log(Object.prototype.toString.call( 42 ));		                // "[object Number]"
console.log(Object.prototype.toString.call( true ));		                // "[object Boolean]"
console.log(Object.prototype.toString.call( null ));                    // "[object Null]"
console.log(Object.prototype.toString.call( undefined ));                // "[object Undefined]"