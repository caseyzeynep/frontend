function redundant(str){
    return function(){
        return str;
    }
}

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");


console.log(f1());
console.log(f2());
console.log(f3());