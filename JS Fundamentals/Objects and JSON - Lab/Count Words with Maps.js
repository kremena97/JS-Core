function solve(input) {
    let map = new Map();

    let arr = input.toString().split(/[^\w]+/).filter(x => x !== '');

    for (i = 0; i < arr.length; i++) {
        let key = arr[i].toLowerCase();
        if (!map.has(key)) {
            map.set(key, 1);
        } else {
            map.set(key, map.get(key) + 1);
        }
    }
    let sortedMap = new Map(
        Array
            .from(map)
            .sort());

    for (let item of sortedMap.keys()) {
        console.log(`'${item}' -> ${sortedMap.get(item)} times`);
    }
}

solve('JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --');