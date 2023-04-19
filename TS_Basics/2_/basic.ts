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
let Person = {
    name: 'sansrit',
    age: '27',
    hobbies: ['Sports', 'Music', 'Cooking']
};

//to defined arrya of mixed type write :[any]
let favouriteAct : string[];
favouriteAct = ['Swimming, Music'];
console.log(Person.name);

for(const hobby of Person.hobbies){
    console.log(hobby.toUpperCase())
}

