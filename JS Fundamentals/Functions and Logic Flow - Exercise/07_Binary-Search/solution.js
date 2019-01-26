function binarySearch() {
    let arr = document.getElementById('arr').value.split(', ').map(Number);
    let num = document.getElementById('num').value;
    num = Number(num);
    let output = document.getElementById('result');

    function search (list, value) {
        let start = 0;
        let stop = list.length - 1;
        let middle = Math.floor((start + stop) / 2);

        while (list[middle] !== value && start < stop) {
            if (value < list[middle]) {
                stop = middle - 1
            } else {
                start = middle + 1
            }

            middle = Math.floor((start + stop) / 2)
        }

        return (list[middle] !== value) ? -1 : middle
    }

    let result = search(arr,num);

    if (result == -1){
        output.textContent = `${num} is not in the array`;
    }else{
        output.textContent = `Found ${num} at index ${result}`;
    }
}