function subsum(arr, firstIndex, secondIndex) {
    let startIndex;
    let endIndex;
    let sum = 0;
    debugger;
    if (firstIndex < 0) {
        startIndex = 0;
    } else startIndex = firstIndex;
    if (secondIndex>arr.length-1){
        endIndex = arr.length-1;
    } else endIndex = secondIndex;

    for (let i = startIndex; i<=endIndex; i++){
        let currentNumber = Number(arr[i]);
        sum += currentNumber;
    }
    return sum;
}

console.log(subsum('text', 0, 2));