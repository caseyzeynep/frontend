class Range {
    #increment = 3;
    constructor(from, to){
        this.from = from;
        this.to = to;
        this.increment =3;
    }
    get increment(){
        return this.#increment;
    }
    set increment(x){
        return this.#increment = x;
    }
    includes(x){
        return this.from <= x && this.to >= x;
    }
    equals(obj){
         return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    }
    incrementer(){
        this.increment = this.increment + 1;
        return this.increment;
    }
     print1(){
        console.log("Hello1");
    }
    static print(){
        this.print1();
        console.log("Hello");
    }
}


// Range.f();
// Range.incrementer();
let r1 = new Range(1,3);
let r2 = new Range(1,3);
// {
//    from:1 to: 3,  increment:3
//     __proto__: Range.prototype{include(),equals()}
// }
// Range.print();
console.log(r1 instanceof Range);
r1.increment =5;
console.log(r1.increment);
console.log(r1.increment);
console.log(r2.increment);
// console.log(r1.increment); // undefined
// // console.log(r1.#increment); // Syntax error
// console.log(r1.getIncrement());
// console.log(r1.increment);
// r1.increment = 4; // it does not executed
// console.log(r1.increment); // 3
// console.log(typeof r1); // object
