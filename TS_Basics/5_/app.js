//building class
//class convention to use UpperCase
//object consiste of key value pair class dont have:
var Department = /** @class */ (function () {
    function Department(n) {
        // fn tied to class and executed when object being craeated good for initialization
        this.name = n;
    }
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting);
