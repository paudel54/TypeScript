//custom types: 
//  type Combineable = number | string;
//  type ConversionDescriptor = 'as-number' | 'as-text';
//  function combine(input1:Combineable,input2:Combineable){
//         let result = 0;
//         if(typeof input1 === 'number' && typeof input2 === 'number'){
//             result = input1 + input2;
//         }
//  }
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ', num);
}
printResult(add(10, 2));
