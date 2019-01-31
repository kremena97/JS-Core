function main(input) {
    let result = [];
    result.push(input[0]);
    for (let i = 1; i < input.length; i++) {
        let currentNumber = input[i];
        let currentBiggest = result[result.length - 1];
        if (currentNumber > currentBiggest) {
            result.push(currentNumber);
        }
    }
    console.log(result.join('\n'));
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]);