//union Types are much useful when we need to work with multiple types in a function


function combine(
    input1:number | string,
    input2:number|string,
    //union type and literal type
    //only this 2 will be allowed any other would not be allowed
    //here as-number and as-text is a literal type
    resultConversion: 'as-number' | 'as-text'
    ){
    //adding runtime type check
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
    //Alternative
    // if(resultConversion === 'as-number'){
    //     //convert to number and send result
    //     return +result;
    // }else {
    //     //force it to String
    //     return result.toString();
    // }
}

const combinedAges = combine(20,30, 'as-number');
console.log(combinedAges);

const combinedStringNames = combine('30', '23', 'as-number');
console.log(combinedStringNames);

const combinedNames = combine('Sansrit', 'Suresh', 'as-text');
console.log(combinedNames);