function solve(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let elements = input[i].split(/ -> | : /);
        let town = elements[0];
        let product = elements[1];
        let amountOfSales = Number(elements[2]);
        let priceForOneUnit = Number(elements[3]);
        if (!obj.hasOwnProperty(town)) {
            obj[town] = [];
            obj[town].push(`$$$${product} : ${amountOfSales * priceForOneUnit}`)
        }else{
            obj[town].push(`$$$${product} : ${amountOfSales * priceForOneUnit}`)
        }
    }

    Object.keys(obj).forEach(key =>{
        console.log(`Town - ${key}\n${obj[key].join('\n')}`);
    });
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])