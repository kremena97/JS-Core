function solve(input) {
    let instructions = [];
    let parts = [];
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        if (command === 'instructions') {
            let carModel = commands[1];
            instructions.push(carModel);
        } else if (command === 'addPart') {
            let carModel = commands[1];
            let part = commands[2];
            let serialNumber = commands[3];
            if (parts.some(part=>part.carModel ===carModel)) {
                for (let currentPart of parts){
                    if (currentPart.carModel === carModel){
                        if (currentPart.hasOwnProperty(part)){
                            currentPart[part].push(serialNumber);
                        } else{
                            currentPart[part] = [];
                            currentPart[part].push(serialNumber);
                        }

                    }
                }
            }else{
                parts.push({
                    carModel: carModel,
                    [part]: [serialNumber],
                });
            }

        } else if (command === 'repair') {
            let carModel = commands[1];
            let obj = JSON.parse(commands[2]);
            repair(carModel, obj);
        }
    }
    let sortedParts = parts.sort(function (a,b) {
        return a.carModel.localeCompare(b.carModel);
    });
    for (let part of sortedParts) {
        let carModel = part.carModel;
        delete part.carModel;
        output += carModel + ' - ' + JSON.stringify(part) + '\n';
    }



    function repair(carModel, obj) {
        debugger;
        if (!instructions.includes(carModel)) {
            output += `${carModel} is not supported\n`;

        }else{
            output += carModel + ' client - ';
            let carParts = parts.filter(part => (part.carModel === carModel))[0];

            Object.keys(obj).forEach(function (key) {
                debugger;
                if (obj[key] === 'broken') {
                    if (carParts !== undefined && carParts.hasOwnProperty(key)) {
                        let part = carParts[key];
                        obj[key] = part[0];
                        for (let part of parts){
                            if (part.carModel=== carModel){
                                part[key].shift();
                            }
                        }
                    }
                }
            });
            output += JSON.stringify(obj) + '\n';

        }
    }
    return output;
}

console.log(solve([
        'instructions bmw',
        'addPart opel engine GV1399SSS',
        'addPart opel transmission SMF556SRG',
        'addPart bmw engine GV1399SSS',
        'addPart bmw transmission SMF444ORG',
        'addPart opel transmission SMF444ORG',
        'instructions opel',
        'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
        'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
    ]
));