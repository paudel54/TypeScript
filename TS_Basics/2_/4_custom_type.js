//custom types: 
//  type Combineable = number | string;
//  type ConversionDescriptor = 'as-number' | 'as-text';
//  function combine(input1:Combineable,input2:Combineable){
//         let result = 0;
//         if(typeof input1 === 'number' && typeof input2 === 'number'){
//             result = input1 + input2;
//         }
//  }
//void vs undefined. void has no value undefined have value that doesn't exist
function add(n1, n2) {
    return n1 + n2;
}
//here void is return type of fn
function printResult(num) {
    console.log('Result: ', num);
}
//Ts with Callbacks
//=>void implies no return 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(10, 2));
// let combineValues: Function;
//Argument should be number and return type should also be number 
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 10;
console.log(combineValues(2, 9));
//anonyomous function as 3rd parameter
addAndHandle(10, 20, function (result) {
    console.log(result);
});
