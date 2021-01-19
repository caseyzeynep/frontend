// Boolean can be converted as number true=1, false = 0
// If string could be converted number all results NaN
// for undefined and null operations all results NaN
var aString = "Hello";
var aNumber = 3;
var aBoolean = true;
var aNull = null;
var aUndefined = undefined;

console.log("=============================== STRING withs other type ===============================");
console.log(`String-Number: type of ${typeof (aString-aNumber)}, result : ${aString-aNumber}`);                 // NaN
console.log(`String-Boolean: type of ${typeof (aString-aBoolean)}, result : ${aString-aBoolean}`);              // NaN
console.log(`String-Null: type of ${typeof (aString-aNull)}, result : ${aString-aNull}`);                       // NaN
console.log(`String-Undefined: type of ${typeof (aString-aUndefined)}, result : ${aString-aUndefined}`);        // NaN

console.log("=============================== NUMBER with other type ===============================");
console.log(`Number-Boolean: type of ${typeof (aNumber-aBoolean)}, result : ${aNumber-aBoolean}`);              // 2
console.log(`Number-Null: type of ${typeof (aNumber-aNull)}, result : ${aNumber-aNull}`);                       // 3
console.log(`Number-Undefined: type of ${typeof (aNumber-aUndefined)}, result : ${aNumber-aUndefined}`);        // NaN

console.log("=============================== BOOLEAN with other type ===============================");
console.log(`Boolean-Null: type of ${typeof (aBoolean-aNull)}, result : ${aBoolean-aNull}`);                    // 1
console.log(`Boolean-Undefined: type of ${typeof (aBoolean-aUndefined)}, result : ${aBoolean-aUndefined}`);     // NaN

console.log("=============================== NULL with other type ===============================");
console.log(`Null-Undefined: type of ${typeof (aNull-aUndefined)}, result : ${aNull-aUndefined}`);              // Nan




