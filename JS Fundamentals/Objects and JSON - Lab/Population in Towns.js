function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let elements = input[i].split(' <-> ');
        let key = elements[0];
        let value = elements[1];
        if (!obj.hasOwnProperty(key)) {
            obj[key]= Number(value);
        }else{
            obj[key] += Number(value);
        }

    }

    Object.keys(obj).forEach(key =>{
        console.log(`${key} : ${obj[key]}`);
    })

}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);