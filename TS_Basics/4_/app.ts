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

const addition = (a:number, b:number)=>{
    return a+b;
}
console.log(addition(7,3));

//if function takes only one parameter
//if it was TS we can remove the brackets () this. 
const printOutput = (output:string | number)=>console.log(output);
printOutput(addition(10,8));