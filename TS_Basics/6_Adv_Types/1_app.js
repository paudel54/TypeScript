var e1 = {
    name: "Pemba",
    privileges: ['Create-server'],
    startDate: new Date()
};
var e2 = {
    name: "Ritesh",
    contact: 9841988878,
    name1: "Nabin"
};
//MOre on type guard
function add(a, b) {
    // return a+b; Throws an error because it's not valid for two union type need of type Guard. 
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// Another type of type Guard: if("" in emp)
function printEmployeeInformation(emp) {
    console.log("Name" + emp.name);
}
// on classbased
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving.......');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading Cargo..' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(3000);
    }
}
function moveAnimal(animal) {
    // if('flyingSpeed' in animal){
    //     console.log('MOving with speed' + animal.flyingSpeed);
    // }
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({
    type: 'bird',
    flyingSpeed: 20
});
