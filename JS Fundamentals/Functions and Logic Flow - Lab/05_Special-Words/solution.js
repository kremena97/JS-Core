function solve() {
    let startNum  = Number(document.getElementById('firstNumber').value);
    let endNum = Number(document.getElementById('secondNumber').value);
    let firstString = document.getElementById('firstString').value;
    let secondString = document.getElementById('secondString').value;
    let thirdString = document.getElementById('thirdString').value;
    let divResult = document.getElementById('result');

    function checkCurrentNumber(i) {
        if (i % 3 === 0 && i % 5 === 0) {
            let p = document.createElement('p');
            p.innerHTML = `${i} ${firstString}-${secondString}-${thirdString}`;
            divResult.appendChild(p);
        }
        else if(i % 3 === 0){
            let p = document.createElement('p');
            p.innerHTML = `${i} ${secondString}`;
            divResult.appendChild(p);
        }
        else if(i % 5 === 0){
            let p = document.createElement('p');
            p.innerHTML = `${i} ${thirdString}`;
            divResult.appendChild(p);
        }
        else{
            let p = document.createElement('p');
            p.innerHTML = i;
            divResult.appendChild(p);
        }
    }
    
    for (let i = startNum; i <= endNum; i++){
        checkCurrentNumber(i);
    }
}