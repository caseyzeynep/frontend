// ============== Example 1 ===============
// function foo() {
// 	console.log( this.a );
// }
//
// var obj = {
// 	a: 2,
// 	foo: foo
// };
//
// obj.foo(); // 2


// ============== Example 2 ===============
// function foo() {
// 	console.log( this.a );
// }
//
// var obj2 = {
// 	a: 42,
// 	foo: foo
// };
//
// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };
//
// obj1.obj2.foo(); // 42



// ============== Example 3 in node.js it returns undefined ===============

// function foo() {
// 	console.log( this.a );
// }
//
// var obj = {
// 	a: 2,
// 	foo: foo
// };
//
// var bar = obj.foo; // function reference/alias!
//
// var a = "oops, global"; // `a` also property on global object
//
// bar(); // "oops, global"


// ============== Example 4 in node.js it returns undefined ===============

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"