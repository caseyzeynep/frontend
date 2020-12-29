 person = {
    name:"Jack",
    age:25,
     greet: function() {
        console.log(this);
        console.log(this.age);

        function innerFunc(){
            console.log(this);
            console.log(this.age);
            return 4;
        }
        return innerFunc();
    }

}


console.log(person.greet);
var person;
// console.log(person.a);
// typeof person.greet();


 var y = function a() {
     console.log('hello');
 };
