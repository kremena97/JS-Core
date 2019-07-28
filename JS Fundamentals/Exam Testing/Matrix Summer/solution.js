function solve(firstMatrix, secondMatrix) {
    let remainder = 0;
    let matrix = [];
    debugger;
    for (let i = 0; i < firstMatrix.length; i++) {
        let current = [];
        for (j = 0; j < firstMatrix[i].length; j++) {
            let sum = firstMatrix[i][j] + secondMatrix[i][j] + remainder;
            if (sum > 9) {
                remainder = sum - 9;
                current.push(9);
                if (j === firstMatrix[i].length - 1 && remainder > 0) {
                    while(remainder !==0){
                        if (remainder >9){
                            current.push(9);
                            remainder -= 9;
                        } else{
                            current.push(remainder);
                            remainder = 0;
                        }
                    }
                }
            } else {
                    current.push(sum);
                    remainder = 0;
            }
        }
        matrix.push(current);
    }
    return JSON.stringify(matrix);
}

console.log(solve([[9, 6], [9, 9]],
    [[9, 9], [9, 9]]));