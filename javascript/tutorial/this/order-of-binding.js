/*

Determining this
Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence. Ask these questions in this order, and stop when the first rule applies.

Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

var bar = obj1.foo()

Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()

*/
/*
If you find yourself writing this-style code, but most or all the time, you defeat the this mechanism with lexical self = this or arrow-function "tricks", perhaps you should either:

Use only lexical scope and forget the false pretense of this-style code.

Embrace this-style mechanisms completely, including using bind(..) where necessary, and try to avoid self = this and arrow-function "lexical this" tricks.
*/