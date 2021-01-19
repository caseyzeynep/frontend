// String > Number > Boolean
// undefined + (Number, Boolean, null) = NaN
// undefined + String = 'undefined'+String
// null + String = 'null'+String
// null + Number = 0 + Number
// null + Boolean = 0 + Number(Boolean)
var aString = "Hello";
var aNumber = 3;
var aBoolean = true;
var aNull = null;
var aUndefined = undefined;

console.log("=============================== STRING withs other type ===============================");
console.log(`String+Number: type of ${typeof (aString+aNumber)}, result : ${aString+aNumber}`);                 // Hello3
console.log(`String+Boolean: type of ${typeof (aString+aBoolean)}, result : ${aString+aBoolean}`);              // Hellotrue
console.log(`String+Null: type of ${typeof (aString+aNull)}, result : ${aString+aNull}`);                       // Hellonull
console.log(`String+Undefined: type of ${typeof (aString+aUndefined)}, result : ${aString+aUndefined}`);        // Helloundefined

console.log("=============================== NUMBER with other type ===============================");
console.log(`Number+Boolean: type of ${typeof (aNumber+aBoolean)}, result : ${aNumber+aBoolean}`);              // 4
console.log(`Number+Null: type of ${typeof (aNumber+aNull)}, result : ${aNumber+aNull}`);                       // 3
console.log(`Number+Undefined: type of ${typeof (aNumber+aUndefined)}, result : ${aNumber+aUndefined}`);        // NaN

console.log("=============================== BOOLEAN with other type ===============================");
console.log(`Boolean+Null: type of ${typeof (aBoolean+aNull)}, result : ${aBoolean+aNull}`);                    // 1
console.log(`Boolean+Undefined: type of ${typeof (aBoolean+aUndefined)}, result : ${aBoolean+aUndefined}`);     // NaN

console.log("=============================== NULL with other type ===============================");
console.log(`Null+Undefined: type of ${typeof (aNull+aUndefined)}, result : ${aNull+aUndefined}`);              // Nan




