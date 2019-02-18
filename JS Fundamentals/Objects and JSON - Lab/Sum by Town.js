function solve(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        debugger;
        if (i % 2 === 0) {
            if (!obj.hasOwnProperty(input[i])) {
                let key = input[i];
                obj[key] = null;
            }
        }else{
            obj[input[i-1]] += Number(input[i]);
        }
    }

    console.log(JSON.stringify(obj));
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']);