// ToNumber For example, true becomes 1 and false becomes 0. undefined becomes NaN, but (curiously) null becomes 0.
// ToNumber for a string value essentially works for the most part like the rules/syntax for numeric literals .
// If it fails, the result is NaN (instead of a syntax error as with number literals)
console.log(String(undefined));                 // undefined
console.log(Number(undefined));                 // NaN
console.log(Boolean(undefined));                // false
console.log("===========================");

console.log(String(null));                      // null
console.log(Number(null));                      // 0
console.log(Boolean(null));                     // false
console.log("===========================");


console.log(String(true));                      // true
console.log(Number(true));                      // 1
console.log(Boolean(true));                     // true
console.log("===========================");


console.log(String(false));                     // false
console.log(Number(false));                     // 0
console.log(Boolean(false));                    // false
console.log("===========================");


console.log(String(""));                        //
console.log(Number(""));                        // 0
console.log(Boolean(""));                       // false
console.log("===========================");


console.log(String("1.2"));                     // 1.2
console.log(Number("1.2"));                     // 1.2
console.log(Boolean("1.2"));                    // true
console.log("===========================");


console.log(String("one"));                     // one
console.log(Number("one"));                     // one
console.log(Boolean("one"));                    // one
console.log("===========================");


console.log(String(0));                         // 0
console.log(Number(0));                         // 0
console.log(Boolean(0));                        // false
console.log("===========================");


console.log(String(-0));                        // 0
console.log(Number(-0));                        // -0
console.log(Boolean(-0));                       // false
console.log("===========================");


console.log(String(1));                         // 1
console.log(Number(1));                         // 1
console.log(Boolean(1));                        // true
console.log("===========================");


console.log(String(NaN));                           // NaN
console.log(Number(NaN));                           // NaN
console.log(Boolean(NaN));                          // false
console.log("===========================");

console.log(String(Infinity));                      // Infinity
console.log(Number(Infinity));                      // Infinity
console.log(Boolean(Infinity));                     // true
console.log("===========================");

console.log(String({}));                      // [object Object]
console.log(Number({}));                      // NaN
console.log(Boolean({}));                     // true
console.log("===========================");

console.log(String([]));                      //
console.log(Number([]));                      // 0
console.log(Boolean([]));                     // true
console.log("===========================");






