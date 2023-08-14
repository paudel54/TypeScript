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