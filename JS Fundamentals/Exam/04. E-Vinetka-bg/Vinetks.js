function solve(input) {
    let result = '';
    let mostProfitable = getBiggestProfit(input);
    let town = '';
    let profit = 0;
    Object.keys(mostProfitable).forEach(function (key) {
        town = key.toString();
        profit = mostProfitable[key];
    });
    result += `${town} is most profitable - ${profit} BGN\n`;

    let mostDrivenModel = getMostDrivenModel(input, town);
    let carModel = '';
    Object.keys(mostDrivenModel).forEach(function (key) {
        carModel = key.toString();
    });
    result += `Most driven model: ${carModel}\n`;

    let listOfTowns = getTownsAndRegNumbers(input, carModel);
    Object.keys(listOfTowns).forEach(function (key) {
        if (listOfTowns.hasOwnProperty(key)){

            result += `${key}: ${listOfTowns[key].join(', ')}\n`;
        }
    });

    console.log(result);

    function getBiggestProfit(input) {
        let obj = {};
        for (i = 0; i < input.length; i++) {
            let townName = input[i].town;
            if (!obj.hasOwnProperty(input[i].town)) {
                obj[townName] = input[i].price;
            } else {
                obj[townName] += input[i].price;
            }
        }

        let max = Object.values(obj).sort((prev, next) => next - prev);
        Object.keys(obj).forEach(function (key) {
            if (obj[key] !== max[0]) {
                delete obj[key];
            }
        });
        return obj;
    }

    function getMostDrivenModel(input, town) {
        let obj = {};
        for (i = 0; i < input.length; i++) {
            let carModel = input[i].model;
            if (input[i].town === town) {
                if (!obj.hasOwnProperty(carModel)) {
                    obj[carModel] = input[i].price;
                } else {
                    obj[carModel] += input[i].price;
                }
            }
        }

        let max = Object.values(obj).sort((prev, next) => next - prev);
        Object.keys(obj).forEach(function (key) {
            if (obj[key] !== max[0]) {
                delete obj[key];
            }
        });
        return obj;
    }

    function getTownsAndRegNumbers(input, carModel) {
        let obj = {};
        for (i = 0; i < input.length; i++) {
            if (input[i].model === carModel) {
                let townName = input[i].town;
                if (!obj.hasOwnProperty(input[i].town)) {
                    obj[townName] = [];
                    obj[townName].push(input[i].regNumber);
                } else {
                    obj[townName].push(input[i].regNumber);
                }
            }
        }
        const ordered = {};
        Object.keys(obj).sort().forEach(function (key) {
            ordered[key] = obj[key].sort();
        });
        return ordered;
    }
}

solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 0}]
);