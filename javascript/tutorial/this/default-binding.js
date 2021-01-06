// ========= Example 1 in node.js it returns undefined =============
// function foo() {
// 	console.log( this.a );
// }
//
// var a = 2;
//
// foo(); // 2


// ============ Example 2 ==============
// function foo() {
// 	"use strict";
//
// 	console.log( this.a );
// }
//
// var a = 2;
//
// foo(); // TypeError: `this` is `undefined`



// ============ Example 3 in node.js it returns undefined ==============

function foo() {
	console.log( this.a );
}

var a = 2;

(function(){
	"use strict";

	foo(); // 2
})();