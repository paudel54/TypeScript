var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//building class
//class convention to use UpperCase
//object consiste of key value pair class dont have:
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //class property
        //private name:string;
        //modieifer: private: public is defult modifier
        this.employees = [];
        // fn tied to class and executed when object being craeated good for initialization
        // this.name = n;
    }
    // method-inside Class:
    // adding department implies that the this should always refer to instance of department class:
    Department.prototype.describe = function () {
        //name wont' work here, req this
        console.log('Department: name' + this.name);
    };
    Department.prototype.addEmployee = function (employees) {
        //this can have validation also, if array pushed from outside it will miss 
        this.employees.push(employees);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// inheritance
//inheritnace with extends keyword and can be donw with only one class
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        //super is used to pass data to parent and execute it from child;
        _super.call(this, id, 'IT') || this;
        //this must be called after calling super:
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var ITbranch = new ITDepartment('D1', ['Paudel']);
console.log('Its inherited', ITbranch);
//new inherited class
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment('d2', []);
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
