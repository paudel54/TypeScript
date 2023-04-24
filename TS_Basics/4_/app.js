//let vs const:modern JS features. 
var userName = 'Sansrit';
//const can never be reassigned: 
// let can be reassigned:
var age = 30;
age = 29;
//dont use var anymore. 
//because: 
//var have global and function scope
age = 29;
var result;
function add(a, b) {
    result = a + b;
    return result;
}
add(5, 4);
console.log('this is result', result);
