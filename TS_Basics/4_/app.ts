//let vs const:modern JS features. 
const userName = 'Sansrit';
//const can never be reassigned: 

// let can be reassigned:
let age = 30;
age = 29;

//dont use var anymore. 
//because: 
//var have global and function scope
age = 29;
var result;

function add(a:number, b:number){
    result = a+b;
    return result;
}
    add(5,4);
console.log('this is result',result);


// let age = 27;
// if(age>20){
//     let isOld = true;
// }
// console.log(isOld);


//es6 arrow functions. 
//for one expression can omit curly brases and also remove return keyword

const addition = (a:number, b:number = 9)=>{
    return a+b;
}
console.log(addition(7,3));

//if function takes only one parameter
//if it was TS we can remove the brackets () this. 
const printOutput = (output:string | number)=>console.log(output);
printOutput(addition(10));

//defalut function Parameter: we can privide default value

//rest operator

const hobbies = ['sports', 'cooking']
const activeHobbies = ['gaming']
//we can access by index hobbies[1];
//hobbies array is spread out and copies to swimming array.
const activeHobbies1 = ['swimming',...hobbies]
//we can extract all the value with...

//?? how can const be reassigned ! push method works into it huh?
//array are objects and linked with reference so possiable. memory is changed 
//but the reference is not changed. 
//need to add one element once so, it can be cumbersome on adding large 
//array element , therefor here comes a spread operator baby
// TS won't allow 
// activeHobbies.push(hobbies);
// activeHobbies.push(hobbies[0], hobbies[2]);

//this is the reason why spread operator came
//... tells JS to pullout all element of an array


//Spread Operator on objects:
const person = {
    name: 'Sansrit',
    age: '27'
};

const copiedPerson = {...person}


// const person = {
//     name: 'Sansrit',
//     age: '27'
// };

// const copiedPerson = {...person}
// copiedPerson.name = 'Jangam';
// copiedPerson.age = 23;

// console.log('this is person', person);
// console.log('this is copiedPerson', copiedPerson)

//worked on with rest on fetching argument as list
const jodey = (...num:number[])=>{
    return num.reduce((cR,cV)=>{
        return cR + cV;
    },0);
}

const addedNumbers = jodey(2,6,7,4,3,9,12,3);


//object destructuing making access with index shortcuts> 
//pull element out of an array:

//array destructuing. 
const test = ['q','w','r','y','o','p'];
//desturcting dont' change new aray
//val1 will be holding q, val2 will be holding w and ['r','y','o','p'] 
const [val1 , val2 , ...rest] = test;
 