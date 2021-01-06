// String > Number > Boolean
// undefined + (Number, Boolean, null) = NaN
// null + Number = 0 + Number
// null + Boolean = 0 + Number(Boolean)
var aString = "Hello";
var aNumber = 3;
var aBoolean = true;
var aNull = null;
var aUndefined = undefined;

// ====== String with other type =======
console.log("====== String with other type =======");
console.log(`String+Number: type of ${typeof (aString+aNumber)}, result : ${aString+aNumber}`);
console.log(`String+Boolean: type of ${typeof (aString+aBoolean)}, result : ${aString+aBoolean}`);
console.log(`String+Null: type of ${typeof (aString+aNull)}, result : ${aString+aNull}`);
console.log(`String+Undefined: type of ${typeof (aString+aUndefined)}, result : ${aString+aUndefined}`);

// ====== Number with other type =======
console.log("====== Number with other type =======");
console.log(`Number+Boolean: type of ${typeof (aNumber+aBoolean)}, result : ${aNumber+aBoolean}`);
console.log(`Number+Null: type of ${typeof (aNumber+aNull)}, result : ${aNumber+aNull}`);
console.log(`Number+Undefined: type of ${typeof (aNumber+aUndefined)}, result : ${aNumber+aUndefined}`);

// ====== Boolean with other type =======
console.log("====== Boolean with other type =======");
console.log(`Boolean+Null: type of ${typeof (aBoolean+aNull)}, result : ${aBoolean+aNull}`);
console.log(`Boolean+Undefined: type of ${typeof (aBoolean+aUndefined)}, result : ${aBoolean+aUndefined}`);

// ====== Null with other type =======
console.log("====== Null with other type =======");
console.log(`Null+Undefined: type of ${typeof (aNull+aUndefined)}, result : ${aNull+aUndefined}`);




