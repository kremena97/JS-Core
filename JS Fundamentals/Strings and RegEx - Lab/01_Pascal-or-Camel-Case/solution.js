function solve() {
    let text = document.getElementById('str1').value.split(' ');
    let command = document.getElementById('str2').value;
    let resultElement = document.getElementById('result');
    let result = '';

    switch (command) {
        case 'Camel Case': {
            result += text[0].toLowerCase();
            for (let i = 1; i< text.length; i++){
                result+= text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase();
            }
        }
            break;
        case 'Pascal Case': {
            for (let i = 0; i< text.length; i++){
                result+= text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase();
            }
        }
            break;
        default:
            result = 'Error!';
    }
    resultElement.innerHTML = result;
}