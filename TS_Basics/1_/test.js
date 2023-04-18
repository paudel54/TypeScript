var button = document.querySelector("button");
//type Casting. defining as htmlinputelelemts
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//defining type
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
