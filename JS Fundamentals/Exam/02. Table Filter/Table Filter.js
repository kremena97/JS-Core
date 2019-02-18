function solve(matrix, command) {
    let result = [];
    commandElements = command.split(' ');

    for (let row = 1; row < matrix.length; row++) {
        let obj = {};

        for (let col = 0; col < matrix[row].length; col++) {
            obj[matrix[0][col]] = matrix[row][col];
        }
        result.push(obj);
    }
    if (commandElements[0] === 'sort') {
        let prop = commandElements[1];
            let arr = result.sort(function (a, b) {
                return a[prop].localeCompare(b[prop]);
            });

        print(arr);
    } else if (commandElements[0] === 'hide') {
        let header = commandElements[1];
        for (let item of result) {
            delete item[header];
        }
        print(result);
    } else if (commandElements[0] === 'filter') {
        let header = commandElements [1];
        let value = commandElements[2];
        if (result[0].hasOwnProperty(header.toString()) && result.some(x => x[header] === value)) {
            result = result.filter(x => x[header] === value);
            print(result);
        } else {
            printHeaders(result);
        }
    }

    function print(result) {
        let output = '';
        let outputElements = [];
        for (i = 0; i < result.length; i++) {
            let obj = result[i];
            if (i === 0) {
                Object.keys(obj).forEach(function (key) {
                    outputElements.push(key);
                });
                output += outputElements.join(' | ') + '\n';
                outputElements = [];
            }
            Object.keys(obj).forEach(function (key) {
                outputElements.push(obj[key]);
            });

            output += outputElements.join(' | ') + '\n';
            outputElements = [];
        }
        console.log(output);
    }

    function printHeaders(result) {
        let output = '';
        let outputElements = [];
        for (i = 0; i < result.length; i++) {
            let obj = result[i];
            if (i === 0) {
                Object.keys(obj).forEach(function (key) {
                    outputElements.push(key);
                });
                output += outputElements.join(' | ') + '\n';
                outputElements = [];
            }

            output += outputElements.join(' | ') + '\n';
            outputElements = [];
        }
        console.log(output);
    }

}

solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name'
);