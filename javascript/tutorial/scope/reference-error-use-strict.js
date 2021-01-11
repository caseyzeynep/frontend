// function foo(a){
//     b = a
//     console.log(a+b);
// }
//
// foo(2);
// console.log(b);
// OUTPUT: 4, 2 // b = a ya geldiğinde b daha önce tanımlanmadığı icin otomatikman engine taraƒından globale atıyor b ye dışardan ulaşabiliyoruz.

// function foo(a){
//     'use strict';
//      b = a
//     console.log(a+b);
// }
//
// foo(2);
// OUTPUT: b is not defined




'use strict';
function foo(a){
     b = a
    console.log(a+b);
}

foo(2);
// OUTPUT: b is not defined