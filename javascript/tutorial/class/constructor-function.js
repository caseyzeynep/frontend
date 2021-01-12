function Range(from, to) {
    this.from = from;
    this.to = to;
    this.increment =3;

}
// Range.prototype = {constructor: Range function}
Range.prototype = {
    increment1 :4,
    includes(x){
        return this.from <= x && this.to >= x;
    },
    equals(obj){
        return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    }
};

let r1 = new Range(1,3);
let r2 = new Range(1,3);
let r3 = Object.create(r2);
console.log(r1 instanceof Range);
// console.log(r3 instanceof r2); // type error