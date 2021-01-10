// "Traditional JS Class" `Vehicle`
console.log("============+Example 1 ==========");
function Vehicle() {
	this.engines = 1;
}
Vehicle.prototype.ignition = function() {
	console.log( "Turning on my engine." );
};
Vehicle.prototype.drive = function() {
	this.ignition();
	console.log( "Steering and moving forward!" );
	console.log( this.wheels );
};

// "Parasitic Class" `Car`
function Car() {
	// first, `car` is a `Vehicle`
	var car = new Vehicle();

	// now, let's modify our `car` to specialize it
	car.wheels = 4;

	// save a privileged reference to `Vehicle::drive()`
	var vehDrive = car.drive;

	// override `Vehicle::drive()`
	car.drive = function() {
		vehDrive.call( this );
		console.log( "Rolling on all " + this.wheels + " wheels!" );
	};

	return car;
}

var a = Car();
a.drive();
// console.log(a.drive());
// var myCar = new Car();
//
// myCar.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!
console.log("============+Example 2 ==========");
var Something = {
	cool: function() {
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
};

console.log(Something.cool());
console.log(Something.greeting); // "Hello World"
console.log(Something.count); // 1

var Another = {
	cool: function() {
		// implicit mixin of `Something` to `Another`
		Something.cool.call( this );
	}
};

console.log(Another.cool());
console.log(Another.greeting); // "Hello World"
console.log(Another.count); // 1 (not shared state with `Something`)