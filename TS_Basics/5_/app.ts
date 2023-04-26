//building class
//class convention to use UpperCase
//object consiste of key value pair class dont have:
class Department {
    name:string;

    constructor(n:string){
        // fn tied to class and executed when object being craeated good for initialization
        this.name = n;
    }
}

const accounting = new Department('Accounting');
console.log(accounting);