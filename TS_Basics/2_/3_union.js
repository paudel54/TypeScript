//union Types are much useful when we need to work with multiple types in a function
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 30);
console.log(combinedAges);
var combinedNames = combine('Sansrit', 'Subrat');
console.log(combinedNames);
