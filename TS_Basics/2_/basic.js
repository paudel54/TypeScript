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
var Person = {
    name: 'sansrit',
    age: '27',
    hobbies: ['Sports', 'Music', 'Cooking']
};
var favouriteAct;
favouriteAct = ['Swimming, Music'];
console.log(Person.name);
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
