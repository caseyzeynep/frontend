// ============== Example 1  ===============
// function foo() {
// 	console.log( this.a );
// }
//
// var obj = {
// 	a: 2
// };
//
// foo.call( obj ); // 2


// ============== Example 2  ===============
// function foo() {
// 	console.log( this.a );
// }
//
// var obj = {
// 	a: 2
// };
//
// var bar = function() {
// 	foo.call( obj );
// };
//
// setTimeout( bar, 100 ); // 2
//
// // `bar` hard binds `foo`'s `this` to `obj`
// // so that it cannot be overriden
// bar.call( this ); // 2


// ============== Example 3 ===============
// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }
//
// var obj = {
// 	a: 2
// };
//
// var bar = function() {
// 	return foo.apply( obj, arguments );
// };
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5


// ============== Example 4 ===============
// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }
//
// // simple `bind` helper
// function bind(fn, obj) {
// 	return function() {
// 		return fn.apply( obj, arguments );
// 	};
// }
//
// var obj = {
// 	a: 2
// };
//
// var bar = bind( foo, obj );
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5


// ============== Example 5 ===============
// Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind, and it's used like this:
// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }
//
// var obj = {
// 	a: 2
// };
//
// var bar = foo.bind( obj );
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5
// bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.
//
// Note: As of ES6, the hard-bound function produced by bind(..) has a .name property that derives from the original target function.
// For example: bar = foo.bind(..) should have a bar.name value of "bound foo",
//     which is the function call name that should show up in a stack trace.

// ============== Example 6 ===============
// function foo(el) {
// 	console.log( el, this.id );
// }
//
// var obj = {
// 	id: "awesome"
// };
//
// // use `obj` as `this` for `foo(..)` calls
// [1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome