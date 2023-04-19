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
let Person:{
    name: string,
    age: number,
    hobbies: string[],
    // role is  a tuple: tuple is speical kind of array, where total number of element is predefined, along with their types.
    //downside of it is array.push() still works onto it.  
    role: [number, string]
} = {
    name: 'sansrit',
    age: 27,
    hobbies: ['Sports', 'Music', 'Cooking'],
    role: [2, 'author']
};
//adding to tuple, role

Person.role.push('admin')
//tuple downside still array.push works
// console.log('this is current role', Person.role);

//to defined arrya of mixed type write :[any]
let favouriteAct : string[];
favouriteAct = ['Swimming, Music'];
console.log(Person.name);

for(const hobby of Person.hobbies){
    console.log(hobby.toUpperCase())
}

