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