class Complex {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    sum(obj){
        return new Complex(this.real+obj.real, this.imaginary+obj.imaginary);
    }
    multiply(obj){
        return new Complex(this.real*obj.real-this.imaginary*obj.imaginary,this.real*obj.imaginary+this.imaginary*obj.real );
    }
}

let c1 = new Complex(1,1);
let c2 = new Complex(2,2);
console.log(c1.sum(c2));
console.log(c1.multiply(c2));