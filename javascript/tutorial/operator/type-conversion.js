// ToNumber For example, true becomes 1 and false becomes 0. undefined becomes NaN, but (curiously) null becomes 0.
// ToNumber for a string value essentially works for the most part like the rules/syntax for numeric literals .
// If it fails, the result is NaN (instead of a syntax error as with number literals)
console.log(String(undefined));
console.log(Number(undefined));
console.log(Boolean(undefined));
console.log("===========================");

console.log(String(null));
console.log(Number(null));
console.log(Boolean(null));
console.log("===========================");


console.log(String(true));
console.log(Number(true));
console.log(Boolean(true));
console.log("===========================");


console.log(String(false));
console.log(Number(false));
console.log(Boolean(false));
console.log("===========================");


console.log(String(""));
console.log(Number(""));
console.log(Boolean(""));
console.log("===========================");


console.log(String("1.2"));
console.log(Number("1.2"));
console.log(Boolean("1.2"));
console.log("===========================");


console.log(String("one"));
console.log(Number("one"));
console.log(Boolean("one"));
console.log("===========================");


console.log(String(0));
console.log(Number(0));
console.log(Boolean(0));
console.log("===========================");


console.log(String(-0));
console.log(Number(-0));
console.log(Boolean(-0));
console.log("===========================");


console.log(String(1));
console.log(Number(1));
console.log(Boolean(1));
console.log("===========================");


console.log(String(NaN));
console.log(Number(NaN));
console.log(Boolean(NaN));
console.log("===========================");

console.log(String(Infinity));
console.log(Number(Infinity));
console.log(Boolean(Infinity));
console.log("===========================");

console.log(String({}));
console.log(Number({}));
console.log(Boolean({}));
console.log("===========================");

console.log(String([]));
console.log(Number([]));
console.log(Boolean([]));
console.log("===========================");






