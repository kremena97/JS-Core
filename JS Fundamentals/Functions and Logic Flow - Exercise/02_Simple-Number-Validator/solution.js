function validate() {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    document.getElementsByTagName('button')[0].addEventListener('click',getDigitsAndValidate);

    function getDigitsAndValidate(){
        let digitsString = document.getElementsByTagName('input')[0].value.split('');
        let digits = digitsString.map(Number);
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += digits[i] * weights[i];
        }

        if(sum % 11 === digits[9]){
            document.getElementById('response').innerHTML = 'This number is Valid!';
        }
        else{
            document.getElementById('response').innerHTML = 'This number is NOT Valid!';
        }

    }

}