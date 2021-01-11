class P {
	foo() { console.log( "P.foo" ); }
}

class C extends P {
	foo() {
		super.foo();
	}
}

var c1 = new C();
c1.foo(); // "P.foo"

var D = {
	foo: function() { console.log( "D.foo" ); }
};

var E = Object.create( D );
E.foo();
console.log(C.prototype.foo);
// E.foo = C.prototype.foo.toMethod( E, "foo" );
//
// E.foo(); // "D.foo"