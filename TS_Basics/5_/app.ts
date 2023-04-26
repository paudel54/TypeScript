//building class
//class convention to use UpperCase
//object consiste of key value pair class dont have:
class Department {
    //class property
    name:string;
    constructor(n:string){
        // fn tied to class and executed when object being craeated good for initialization
        this.name = n;
    }
    // method-inside Class:
    // adding department implies that the this should always refer to instance of department class:
    describe(this:Department){
        //name wont' work here, req this
        console.log('Department: name' + this.name)
    }
}

const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
//accounting.describe points to accountingCopy this refers to current obj
const accountingCopy = {name: 'Type Department',describe: accounting.describe};
//general rule of thumb this refers to any obj linked with method. here describe() is linked to accountinCopy where name is undefined.
accountingCopy.describe();
