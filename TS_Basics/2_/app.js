// console.log('code generating space ultra really');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        //string + number + number => String;
        console.log(n1 + n2 + 'hello');
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 4.6;
var printResult = true;
var phrase = 'Total Sum ->';
add(number1, number2, printResult, phrase);
