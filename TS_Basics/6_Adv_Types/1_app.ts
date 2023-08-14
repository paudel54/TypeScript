// intersection type.
// type vs interaction ....... normally use interaction  for object structioes. 
 type Admin = {
    name: string;
    privileges: string[];
 }

 type Employee = {
    name: string;
    startDate: Date;
 }
// combine both toype to new type with both type checking
 type ElevatedEmployee = Admin & Employee;

 const e1:ElevatedEmployee = {
    name: "Pemba",
    privileges: ['Create-server'],
    startDate: new Date()
 }


 //Same result with interface: 
 interface Admin1 {
    name: string;
    contact:number;
 }

 interface Employee1 {
    name1: string
 }

 interface MixedUp extends Admin1, Employee1{}

 const e2:MixedUp={
    name: "Ritesh",
    contact: 9841988878,
    name1:"Nabin"
 }


//  union type implies or
type Combinable = string | number;
type Numeric = number | boolean;
// here Univeral would be interaction of two types hence would be number type. because Number is common type. 
type Universal = Combinable & Numeric;


//MOre on type guard
function add(a:Combinable, b:Combinable){
    // return a+b; Throws an error because it's not valid for two union type need of type Guard. 
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

// Another type of type Guard: if("" in emp)
function printEmployeeInformation(emp:MixedUp){
    console.log("Name" + emp.name)
}


// on classbased

class Car{
    drive(){
        console.log('Driving.......');
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...");
    }

    loadCargo(amount:number){
        console.log('Loading Cargo..'+ amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(3000)
    }
    
}

// useVehicle(v2);

// Discriminated Unions::=> We have noew common property in both interface and check with switches. 

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    // if('flyingSpeed' in animal){
    //     console.log('MOving with speed' + animal.flyingSpeed);
    // }
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({
    type: 'bird',
    flyingSpeed:20
})
