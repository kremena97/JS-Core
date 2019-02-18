function solve(input) {
    let obj = {};

    let arr = input.toString().split(/[^\w]+/).filter(x => x !== '');

    for (i = 0; i < arr.length; i++) {
        debugger;
        if (!obj.hasOwnProperty(arr[i])) {
            let key = arr[i];
            obj[key] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }

    console.log(JSON.stringify(obj));
}

solve('Far too slow, you\'re far too slow.');