function solve() {
    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadeicmalOption = document.createElement('option');
    binaryOption.text = 'Binary';
    hexadeicmalOption.text = 'Hexadeicmal';
    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadeicmalOption);

    document.querySelector('#menus button').addEventListener('click', convertIt);

    function convertIt() {
        let decimalNumber = parseFloat(document.getElementById('input').value);
        let resultElement = document.getElementById('result');
        if (selectMenu.value === 'Binary') {
            resultElement.value = decimalNumber.toString(2);
        } else if (selectMenu.value === 'Hexadeicmal') {
            resultElement.value = decimalNumber.toString(16).toUpperCase();
        }

    }
}