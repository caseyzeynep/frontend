function Range(from, to) {
    this.from = from;
    this.to = to;
    this.increment =4;
}
/*  {
    name: range
    arguments:
    ...
    code: line2
    prototype: {
        constructor: {},
        includes
   }
   print()
   __proto__ : {
        apply()
        __proto__: {toString()}
   }
 }
*/
Range.prototype = {
    increment1 :4,
    includes(x){
        return this.from <= x && this.to >= x;
    },
    equals(obj){
        return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    }
};
var a  ={x:4};
let r1 = new Range(1,3);
/* r1 = {
    from:1, to:3, increment:4,
    __proto__: // if line22-30 deleted Range.prototype {
        constructor: {}
   }
   __proto__: // if line22-30 not deleted Range.prototype {
        constructor: {}
   }

}
 */
let r2 = new Range(1,3);
let r3 = Object.create(r2);
console.log(r1 instanceof Range);
// console.log(r3 instanceof r2); // type error