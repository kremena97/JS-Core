function StringLength(firstString, secondString, thirdString){
    console.log(firstString.length + secondString.length+ thirdString.length);
    console.log(Math.round((firstString.length + secondString.length+ thirdString.length)/3));
}

StringLength('chocolate', 'ice cream', 'cake');

function MathOperations( firstNumber, secondNumber, operator) {
    switch (operator){
        case "+": console.log(firstNumber+secondNumber); break;
        case "-": console.log(firstNumber-secondNumber); break;
        case "*": console.log(firstNumber*secondNumber); break;
        case "/": console.log(firstNumber/secondNumber); break;
        case "%": console.log(firstNumber%secondNumber); break;
        case "**": console.log(firstNumber**secondNumber); break;
        default:console.log("Error!")
    }
}

MathOperations(3,5,"+");


function SumOfNumbers(n,m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);
    let sum = 0;
    for(i=firstNumber; i<=secondNumber; i++){
        sum += i;
    }
    console.log(sum);
}

SumOfNumbers("-8","20");

function LargestNumber(firstNumber,secondNumber, thirdNumber) {
    console.log(Math.max(Math.max(firstNumber,secondNumber),thirdNumber));
}

LargestNumber(-3, -3, -3);

function CircleArea(input) {
    let result;

    if((typeof input) == "number"){
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else{
        result = `We can not calculate the circle area, because we receive a ${(typeof input)}.`;
        console.log(result);
    }
}

CircleArea("name");