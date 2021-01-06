// Strings '1', '0', '' exceptions other strings if they can not to convert number they can not equal to any value
// '' == false ve '' == 0 others false
// '1' == true  other false
// '0' == false  other false
console.log("====== String with other type =======");

console.log("=========== '1' =============");
console.log(`'1'==1:  result : ${'1'==1}`);
console.log(`'1'==true: result : ${'1'==true}`);

console.log("=========== '-1' =============");
console.log(`'-1'==-1:  result : ${'-1'==-1}`);
console.log(`'-1'==false: result : ${'-1'==false}`);
console.log(`'-1'==true: result : ${'-1'==true}`);

console.log("=========== '0' =============");
console.log(`'0'==0:  result : ${'0'==-0}`);
console.log(`'0'==false: result : ${'0'==false}`);

console.log("========== '' ==============");
console.log(`''==0:  result : ${''==0}`);
console.log(`''==false:  result : ${''==false}`);

console.log("========== 'true' ==============");
console.log(`'true'==1:  result : ${'true'==1}`);
console.log(`'true'==true:  result : ${'true'==true}`);

console.log("========== 'false' ==============");
console.log(`'false'==0:  result : ${'false'==0}`);
console.log(`'false'==false:  result : ${'false'==false}`);

// 1 == true and 0 or (-0) == false veya 0 or (-0) == '' otherwise numbers can not be equalt to true or false
// ====== Number with other type =======
console.log("====== Number with other type =======");
console.log(`1==true: result : ${1==true}`);
console.log(`0==false:  result : ${0==false}`);
console.log(`0=='':  result : ${0==''}`);
console.log(`-0==0:  result : ${-0==0}`);
console.log(`-0==false:  result : ${-0==false}`);
console.log(`-0 =='':  result : ${-0==''}`);
console.log(`3 ==true:  result : ${3==true}`);
console.log(`3 ==false:  result : ${3==false}`);


// true == 1 and true == '1' true otherwise false
// false == '0' and false == '0' false == '' otherwise false
// // ====== Boolean with other type =======
console.log("====== Boolean with other type =======");
console.log(`true=='1':  result : ${true==1}`);
console.log(`true==1:  result : ${true==1}`);
console.log(`false=='':  result : ${false==''}`);
console.log(`false==0:  result : ${false==0}`);
console.log(`false=='0':  result : ${false=='0'}`);

// undefined == null true otherwise undefined and null can not equal to any value
// ====== Null with other type =======
console.log("====== Null with other type =======");
console.log(`null==undefined:  result : ${null==undefined}`);







