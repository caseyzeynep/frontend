var obj = {
    a: 3
};

var obj1 = {
    b : "hello",
    obj: obj
};
//  a shallow copy is fairly understandable and has far less issues ES6 has now defined Object.assign(..) for this task.
var obj2 = Object.assign({}, obj1);
var obj3 = obj1;

console.log(obj2.obj === obj1.obj);
console.log(obj2.obj.a === obj1.obj.a);
console.log(obj2.obj.a === 3);
console.log(obj3.obj === obj1.obj);
console.log(obj3.obj.a === obj1.obj.a);
console.log(obj1 === obj2 );
console.log(obj1 === obj3 );

// Seal
// Object.seal(..) creates a "sealed" object, which means it takes an existing object and essentially calls Object.preventExtensions(..) on it,
// but also marks all its existing properties as configurable:false.
//
// So, not only can you not add any more properties, but you also cannot reconfigure or delete any existing properties (though you can still modify their values).

// Freeze
// Object.freeze(..) creates a frozen object, which means it takes an existing object and essentially calls Object.seal(..) on it,
//     but it also marks all "data accessor" properties as writable:false, so that their values cannot be changed.
