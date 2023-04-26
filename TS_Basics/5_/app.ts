//building class
//class convention to use UpperCase
//object consiste of key value pair class dont have:
class Department {
    //class property
    //private name:string;
    //modieifer: private: public is defult modifier
   private employees:string[] = [];
    constructor(private readonly id: string,public name:string){
        // fn tied to class and executed when object being craeated good for initialization
        // this.name = n;
    }
    // method-inside Class:
    // adding department implies that the this should always refer to instance of department class:
    describe(this:Department){
        //name wont' work here, req this
        console.log('Department: name' + this.name)
    }

    addEmployee(employees:string){
        //this can have validation also, if array pushed from outside it will miss 
        this.employees.push(employees);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


// inheritance
//inheritnace with extends keyword and can be donw with only one class
class ITDepartment extends Department{
    //admin is property of It department whereas id: is from parent class
        admins:string[];
        constructor(id:string,admins:string[]){
            //super is used to pass data to parent and execute it from child;
            super(id, 'IT');
            //this must be called after calling super:
            this.admins = admins;
        }
}

const ITbranch = new ITDepartment('D1', ['Paudel'])
console.log('Its inherited',ITbranch);

//new inherited class

class AccountingDepartment extends Department{
    constructor(id:string, private reports: string[]){
        super(id, 'Accounting');
    }
     addReport(text:string){
        this.reports.push(text);
     }
     printReports(){
        console.log(this.reports);
     }
}

const accounting = new AccountingDepartment('d2',[]);
console.log(accounting);
accounting.addReport('Something went wrong.....'); 
accounting.printReports();


// const accounting = new Department('Accounting');
// console.log(accounting);
// accounting.describe();
// //accounting.describe points to accountingCopy this refers to current obj
// const accountingCopy = {name: 'Type Department',describe: accounting.describe};
// //general rule of thumb this refers to any obj linked with method. here describe() is linked to accountinCopy where name is undefined.
// accountingCopy.describe();

// const accounting = new Department('Accounting');
// accounting.addEmployee('Sansrit');
// accounting.addEmployee('Suresh');
// console.log(accounting);
//when the  property is declared private it can't be accessed from outside the class to change or modify
// accounting.employees[2] = 'Renuka';