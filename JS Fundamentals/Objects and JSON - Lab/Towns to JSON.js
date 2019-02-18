function solve(input) {
    let arr = [];
    for (i = 0; i < input.length; i++) {
        let elements = input[i].split('|');
        elements = elements.filter(x => x !== '');
        for (j = 0; j < elements.length; j++) {
            arr.push(elements[j].trim());
        }
    }

    let result = [];

    for (i = 3; i < arr.length; i+=3) {
        let town = arr[i];
        let latitude = Number(arr[i + 1]);
        let longitude = Number(arr[i + 2]);
        let obj = {Town: town, Latitude: latitude, Longitude: longitude};
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);