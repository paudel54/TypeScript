function generateError(message, code) {
    //it never returns anything , not undefined, not only void but never, it get crashed but never 
    throw { message: message, code: code };
}
// const result =  
generateError('An Error Occured', 500);
// console.log('here is result',result);
