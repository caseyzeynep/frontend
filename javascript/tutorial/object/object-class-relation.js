function Foo() {
	// ...
}

var C = new Foo();

console.log(C instanceof Foo); // true

// The instanceof operator takes a plain object as its left-hand operand and a function as its right-hand operand. The question instanceof answers is:
//     in the entire [[Prototype]] chain of a, does the object arbitrarily pointed to by Foo.prototype ever appear?
//
// Unfortunately, this means that you can only inquire about the "ancestry" of some object (a)
// if you have some function (Foo, with its attached .prototype reference) to test with. If you have two arbitrary objects, say a and b,
//     and want to find out if the objects are related to each other through a [[Prototype]] chain, instanceof alone can't help.
//
// Note: If you use the built-in .bind(..) utility to make a hard-bound function,the function created will not have a
//     .prototype property. Using instanceof with such a function transparently substitutes the .prototype of the target f
// unction that the hard-bound function was created from.
//
// It's fairly uncommon to use hard-bound functions as "constructor calls", but if you do, it will behave ' +
// 'as if the original target function was invoked instead, which means that using instanceof with a hard-bound function also behaves according to the original function.
//
// This snippet illustrates the ridiculousness of trying to reason about relationships between two objects using "class" semantics and instanceof:



// helper utility to see if `o1` is
// related to (delegates to) `o2`
function isRelatedTo(o1, o2) {
	function F(){}
	F.prototype = o2;
	return o1 instanceof F;
}

var a = {};
var b = Object.create( a );

isRelatedTo( b, a ); // true
