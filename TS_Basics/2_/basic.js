// console.log('Hello i am from basic TS');
//object type in TS
//method 1
// const Person:{
//     name:string;
//     age: number;
// }={
//     name: 'Prakiti',
//     age:30
// };
// console.log('She is a lady and her age is', Person.age);
//Normal object defination
// let Person:{
//     name: string,
//     age: number,
//     hobbies: string[],
//     // role is  a tuple: tuple is speical kind of array, where total number of element is predefined, along with their types.
//     //downside of it is array.push() still works onto it.  
//     role: [number, string]
// } = {
//     name: 'sansrit',
//     age: 27,
//     hobbies: ['Sports', 'Music', 'Cooking'],
//     role: [2, 'author']
// };
//adding to tuple, role
// Person.role.push('admin')
// //tuple downside still array.push works
// // console.log('this is current role', Person.role);
// //to defined arrya of mixed type write :[any]
// let favouriteAct : string[];
// favouriteAct = ['Swimming, Music'];
// console.log(Person.name);
// for(const hobby of Person.hobbies){
//     console.log(hobby.toUpperCase())
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
//behind the scene admin, get 0 read_only 1 and author 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Hari Krishan',
    age: 30,
    hobbies: ['Sport', 'Drama'],
    role: Role.ADMIN
};
console.log('The value of Author enum', Role.AUTHOR);
if (person.role === Role.AUTHOR) {
    console.log('Is admin');
}
