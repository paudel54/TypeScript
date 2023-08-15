//  union type implies or
type Combinable = string | number;
type Numeric = number | boolean;
// here Univeral would be interaction of two types hence would be number type. because Number is common type. 
type Universal = Combinable & Numeric;

//function overloading:
function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:number, b:string):string;
function add(a:string, b:number):string;

function add(a:Combinable, b:Combinable){
    // return a+b; Throws an error because it's not valid for two union type need of type Guard. 
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

const result = add('pemba', ' suraj');
result.split(' ')


// Optional chaining ?.
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: "My Own Company"}
};

console.log(fetchedUserData?.job?.title);


const userInput = " ";
// If userInput is null or undefined then assign it as 'DEFAULT' as fallback Value. 
const storeData = userInput ?? 'DEFAULT';
console.log(storeData)

