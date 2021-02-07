class A{
    module = {exports:{}};
    exports = module.exports;
    constructor(exportsObj) {
        this.exports = exportsObj;
        this.module.exports = exportsObj;
    }
    get export() {
        return this.module.exports;
    }
}
let obj = {x:4};
let a1 = new A(obj);
// console.log("initial", a1);
console.log("initial compute", a1.export);
a1.exports.x = 5;
// console.log("change property in exports", a1);
console.log("change property in exports compute", a1.export);
a1.module.exports.y = 5;
// console.log("change property in module.exports", a1);
console.log("change property in module.exports compute", a1.export);
a1.exports = {y:4};
// console.log("change exports object", a1);
console.log("change exports object compute", a1.export);
