// Generics
//Array know which data it stores..
const names:Array<string> = []; //string []

//promise. It eventually returns certain types.  
// Promise knows which data it returns. 
const promise: Promise<string> = new Promise((resolve,reject)=>{ 
    setTimeout(()=>{
            resolve('This is done');
    },2000);
});

promise.then(data=>{
    data.split( ' ');
})

//Generic function. Tell function that type can be anything: T or U . 

// function merge<T,U>(objA:T, objB: U){
//     return Object.assign(objA,objB);   
// }

// const mergedObj = merge({name:'Max'},{age:30});
// console.log(mergedObj.age);


// interface Lengthy {
//     length: number;
// }
  
// function countAndDescribe<T extends Lengthy>(element:T):[T, string]{
//     let descriptionText = 'Got no value';
//     if(element.length === 1){
//         descriptionText = 'Got 1 element';
//     }else if (element.length > 1){
//         descriptionText = 'Got'+ element.length + 'elements';
//     }
//     return [element, descriptionText];
// }

// console.log(countAndDescribe('Hi There!'));

// The key of constraint. 
// function extractAndConvert<T extends object, U extends keyof T>(
//     obj: T , 
//     key: U
// ){
//     return 'Value:' + obj[key];
// }


// extractAndConvert({name: 'Paudel'},'name');

//Generic Classes: 

class DataStorage<T>{
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ram');
textStorage.addItem('Hari');
textStorage.removeItem('Janardana');
console.log(textStorage.getItems());


// Generic Utility types: 


// Partials. 
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(  
    title:string,
    description:string,
    date: Date
): CourseGoal {
    return {title:title, description:description, completeUntil:date};
}



const rdName : Readonly<string[]> = ['ram', 'hari'];
// You can't push or pop arry now it's locked. 
