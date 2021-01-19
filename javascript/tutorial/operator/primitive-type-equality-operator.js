// Strings '1', '0', '' exceptions other strings if they can not to convert number they can not equal to any value
// '' == false ve '' == 0 others false
// '1' == true  other false
// 1 == true and 0 or (-0) == false veya 0 or (-0) == '' otherwise numbers can not be equalt to true or false
// true == 1 and true == '1' true otherwise false
// false == '0' and false == '0' false == '' otherwise false
// undefined == null true otherwise undefined and null can not equal to any value


console.log("=============================== STRING withs other type ===============================");

console.log(`'1'==1:  result : ${'1'==1}`);                         // true
console.log(`'1'==true: result : ${'1'==true}`);                    // true
console.log(`'-1'==-1:  result : ${'-1'==-1}`);                     // true
console.log(`'-1'==false: result : ${'-1'==false}`);                // false
console.log(`'-1'==true: result : ${'-1'==true}`);                  // false
console.log(`'0'==0:  result : ${'0'==-0}`);                        // true
console.log(`'0'==false: result : ${'0'==false}`);                  // true
console.log(`''==0:  result : ${''==0}`);                           // true
console.log(`''==false:  result : ${''==false}`);                   // true
console.log(`'true'==1:  result : ${'true'==1}`);                   // false
console.log(`'true'==true:  result : ${'true'==true}`);             // false
console.log(`'false'==0:  result : ${'false'==0}`);                 // false
console.log(`'false'==false:  result : ${'false'==false}`);         // false

console.log("=============================== NUMBER with other type ===============================");

console.log(`1==true: result : ${1==true}`);                        // true
console.log(`0==false:  result : ${0==false}`);                     // true
console.log(`0=='':  result : ${0==''}`);                           // true
console.log(`-0==0:  result : ${-0==0}`);                           // true
console.log(`-0==false:  result : ${-0==false}`);                   // true
console.log(`-0 =='':  result : ${-0==''}`);                        // true
console.log(`3 ==true:  result : ${3==true}`);                      // false
console.log(`3 ==false:  result : ${3==false}`);                    // false

console.log("=============================== BOOLEAN with other type ===============================");

console.log(`true=='1':  result : ${true==1}`);                     // true
console.log(`true==1:  result : ${true==1}`);                       // true
console.log(`false=='':  result : ${false==''}`);                   // true
console.log(`false==0:  result : ${false==0}`);                     // true
console.log(`false=='0':  result : ${false=='0'}`);                 // true

console.log("=============================== NULL with other type ===============================");
console.log(`null==undefined:  result : ${null==undefined}`);       // true




