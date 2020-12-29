// foo();

var a = true;

if(a){
    function foo(){console.log("a");}
    c =4
}
else{
    function foo(){console.log("b");}
}

foo();
console.log(c);