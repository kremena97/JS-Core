function greatestCD() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;

    let reminder;

    while (secondNumber != 0){
        reminder = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = reminder;
    }

    let gcd = firstNumber;

    document.getElementById('result').textContent = gcd;
}