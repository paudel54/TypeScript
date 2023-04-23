//unknown type in TS:
//you can store any value without error

//it's more restricitve 
let userInput: unknown;
let userName: String;


userInput = 5;
userInput = 'Sansrit';

//this throws an error because, userName is explicitly defined to be String. 
//but userInput is not unknown throws an error;

//need extra type check, to handle error. 
if(typeof userInput === 'string'){
    userName = userInput;
}

