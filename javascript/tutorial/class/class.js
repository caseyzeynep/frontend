class Range {
    #increment = 3;
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    get increment(){
        return this.#increment;
    }
    getIncrement(){
        return this.#increment;
    }
    includes(x){
        return this.from <= x && this.to >= x;
    }
    equals(obj){
         return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    }
}

let r1 = new Range(1,3);
let r2 = new Range(1,3);

console.log(r1.increment); // undefined
// console.log(r1.#increment); // Syntax error
console.log(r1.getIncrement());
console.log(r1.increment);
r1.increment = 4; // it does not executed
console.log(r1.increment); // 3
console.log(typeof r1); // object
