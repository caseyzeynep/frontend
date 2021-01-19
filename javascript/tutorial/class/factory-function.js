function range(from, to){
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    param: 4,
    includes(x){
        return this.from <= x && this.to >= x;
    },
    equals(obj){
        return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    },
    increment(){
        this.param = this.param +1 ;
        return this.param;
    }
}

let r1 = range(1,3);
let r2 = range(1,3);
/*
    r1 = {x:1, y:3,
            __proto__: {param:4, equals(), increment(),
                            __proto__: {toString()}
                       }
         }
* */
console.log(r1.increment());
console.log(r1.__proto__.param);
console.log(r2.param);


console.log(r1 instanceof range);
// console.log(r1 instanceof range.methods); type error
