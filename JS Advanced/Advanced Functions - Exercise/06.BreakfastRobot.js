function solution() {
    debugger;
    let availableIngredients = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        flavours: 0
    };

    function makeOrder(instructions) {
        instructions = instructions.split(' ');
        let command = instructions[0];
        debugger;

        switch (command) {
            case 'restock':
                return restock();
            case 'prepare':
                let order = instructions[1];
                let count = Number(instructions[2]);
                return prepare(order, count);
            case 'report':
                return report();
            default:
                return 'Error!'
        }

        function restock() {
            let microelement = instructions[1];
            let quantity = Number(instructions[2]);
            if (microelement === 'protein') {
                availableIngredients.protein += quantity;
                return 'Success';
            }
            if (microelement === 'carbohydrate') {
                availableIngredients.carbohydrates += quantity;
                return 'Success';
            }
            if (microelement === 'fat') {
                availableIngredients.fat += quantity;
                return 'Success';
            }
            if (microelement === 'flavour') {
                availableIngredients.flavours += quantity;
                return 'Success';
            }
        }

        function prepare(order, count) {
            switch (order) {
                case'apple':
                    if (availableIngredients.carbohydrates < count * 1) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (availableIngredients.flavours < count * 2) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        availableIngredients.carbohydrates -= count * 1;
                        availableIngredients.flavours -= count * 2;
                        return 'Success';
                    }
                case'coke':
                    if (availableIngredients.carbohydrates < count * 10) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (availableIngredients.flavours < count * 20) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        availableIngredients.carbohydrates -= count * 10;
                        availableIngredients.flavours -= count * 20;
                        return 'Success';
                    }
                case'burger':
                    if (availableIngredients.carbohydrates < count * 5) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (availableIngredients.fat < count * 7) {
                        return 'Error: not enough fat in stock';
                    } else if (availableIngredients.flavours < count * 3) {
                        return 'Error: not enough flavour in stock';
                    } else{
                        availableIngredients.carbohydrates -= count * 5;
                        availableIngredients.fat -= count * 7;
                        availableIngredients.flavours -= count * 3;
                        return 'Success';
                    }
                case'omelet':
                    if (availableIngredients.protein < count * 5) {
                        return 'Error: not enough protein in stock';
                    } else if (availableIngredients.fat < count * 1) {
                        return 'Error: not enough fat in stock';
                    } else if (availableIngredients.flavours < count * 1) {
                        return 'Error: not enough flavour in stock';
                    } else{
                        availableIngredients.protein -= count * 5;
                        availableIngredients.fat -= count * 1;
                        availableIngredients.flavours -= count * 1;
                        return 'Success';
                    }
                case'cheverme':
                    if (availableIngredients.protein < count * 10) {
                        return 'Error: not enough protein in stock';
                    } else if (availableIngredients.carbohydrates < count * 10) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (availableIngredients.fat < count * 10) {
                        return 'Error: not enough fat in stock';
                    } else if (availableIngredients.flavours < count * 10) {
                        return 'Error: not enough flavour in stock';
                    } else{
                        availableIngredients.fat -= count * 10;
                        availableIngredients.protein -= count * 10;
                        availableIngredients.carbohydrates -= count * 10;
                        availableIngredients.flavours -= count * 10;
                        return 'Success';
                    }
                default:
                    return 'Error!'
            }
        }

        function report() {
            return `protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrates} fat=${availableIngredients.fat} flavour=${availableIngredients.flavours}`;
        }
    }

    return makeOrder;
}

let manager = solution();
console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));

    //[, 'Error: not enough protein in stock'],
    //[, 'Success'],
    //[, 'Error: not enough carbohydrate in stock'],
    //[, 'Success'],
    //[, 'Error: not enough fat in stock'],
    //[, 'Success'],
    //[, 'Error: not enough flavour in stock'],
    //[, 'Success'],
    //[, 'Success'],
    //[, 'protein=0 carbohydrate=0 fat=0 flavour=0']