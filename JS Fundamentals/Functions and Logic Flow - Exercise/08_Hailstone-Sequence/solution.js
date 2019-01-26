function getNext() {
    let num = Number(document.getElementById('num').value);
    let result = document.getElementById('result');
    result.innerHTML += num + ' ';

    while(num > 1){
        if (num % 2 == 0){
            num /= 2;
        }else{
            num = (3 * num) + 1;
        }

        result.innerHTML += num + ' ';
    }
}