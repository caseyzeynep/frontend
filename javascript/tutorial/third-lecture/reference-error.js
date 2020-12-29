// function foo(a){
//     console.log(a+b);
//      b = a;
// }
//
// foo(2);
// OUTPUT: b is not defined




// function foo(a){
//     console.log(a+b);
//      var b = a;
// }
//
// foo(2);
// OUTPUT: NaN Eger sadece b olsaydı undefined bascaktı



// function foo(a){
//      b = a
//     console.log(a+b);
// }
//
// foo(2);
// console.log(b);
// OUTPUT: 4, 2 // b =a ya geldiğinde b daha önce tanımlanmadığı icin otomatikman engine taraƒından globale atıyor b ye dışardan ulaşabiliyoruz.




function foo(a){
     var b = a
    console.log(a+b);
}

foo(2);
console.log(b);
// OUTPUT: b is not defined