function Person(firstname, surname){
    this.name = firstname
    this.surname = surname;
    return 4;
}

Person.prototype.getFullName = function (){
    return `${this.name} + ' ' + ${this.surname}`;
}
var bilal = new Person("Bilal", "Colak");
var a = 3;

bilal.prototype.address = 'asd';

var zeynep = Object.create(bilal);

console.log('hello');