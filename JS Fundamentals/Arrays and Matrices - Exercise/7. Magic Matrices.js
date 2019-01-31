function solve(matrix) {
    let colRowSum = sum(matrix[0]);
    let equal = true;
    console.log(colRowSum);
    for (let row = 0; row < matrix.length; row++) {
        if (sum(matrix[row])!== colRowSum){
            equal = false;
        }
        for (let col = 0; col < matrix[row].length; col++) {

        }
    }

    function sum(input) {
        let sum = 0;
        for (i = 0; i < input.length; i++) {
            sum += input[i];
        }
        return sum;
    }
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);