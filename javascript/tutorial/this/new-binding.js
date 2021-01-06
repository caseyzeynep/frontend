/*
When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

a brand new object is created (aka, constructed) out of thin air
the newly constructed object is [[Prototype]]-linked bar has proto which has constructor function foo
the newly constructed object is set as the this binding for that function call
unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
*/

function foo(a) {
	this.a = a;
	console.log('hello world');
}

var bar = new foo( 2 );
console.log( bar.a ); // 2

bar.foo();