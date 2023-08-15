// Generics
//Array know which data it stores..
var names = []; //string []
//promise. It eventually returns certain types.  
// Promise knows which data it returns. 
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done');
    }, 2000);
});
promise.then(function (data) {
    data.split(' ');
});
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));
