function makeAdder(x){
    function add(y){
        return y+x;
    }
    return add;
}

console.log(makeAdder(2,));