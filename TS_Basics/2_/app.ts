// console.log('code generating space ultra really');

function add (n1:number,n2:number, showResult:boolean, phrase:string){

    const result = n1+n2;
    if(showResult){
        //string + number + number => String;
        console.log(phrase+result);
    }else{
        return n1+n2;
    }

}
const number1 = 5;
const number2 = 4.6;
const printResult = true;
const phrase= 'Total Sum ->'

add(number1, number2, printResult, phrase);
