function ILikeJS(input) {
    console.log(`Hello ${input}, do you like JavaScript?`)
}

ILikeJS('Pesho');

function EvenNumbers(n) {
    for(i=1; i<=n; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}

EvenNumbers(7);

function Fruit(fruitName, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let neededMoney = weightInKilograms * pricePerKilogram;
    console.log(`I need ${neededMoney.toFixed(2)} leva to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitName}.`);
}

Fruit('apple', 1563, 2.35);

function FitnessRates(dayOfWeek, service, time) {
    switch (service) {
        case 'Fitness':{
            if (dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday'){
                console.log(8);
            }
            else{
                if (time>=8.00 && time<=15.00){
                    console.log(5);
                }
                else{
                    console.log(7.5);
                }
            }
        } break;
        case 'Sauna':{
            if (dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday'){
                console.log(7);
            }
            else{
                if (time>=8.00 && time<=15.00){
                    console.log(4);
                }
                else{
                    console.log(6.5);
                }
            }
        } break;
        case 'Instructor':{
            if (dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday'){
                console.log(15.00);
            }
            else{
                if (time>=8.00 && time<=15.00){
                    console.log(10);
                }
                else{
                    console.log(12.5);
                }
            }
        } break;
    }
}

FitnessRates('Sunday', 'Fitness', 22.00);

function GreatestCommonDivider(a, b) {

    let reminder;
    
    while (b != 0){
        reminder = a % b;
        a = b;
        b = reminder;
    }

    console.log(a);
}

GreatestCommonDivider(2154,458);

function SameNumbers(number) {

    number = number.toString();
    let areSame = true;
    let sum = +number[0];

    for (i=1; i<number.length; i++) {
        if (number[i]!= number[i-1]){
            areSame = false;
        }
        sum += +number[i];
    }

    console.log(areSame);
    console.log(sum);
}

SameNumbers(1234);

function TimeToWalk(steps, meters, kilometersPerHour) {
    let metersPerSecond = kilometersPerHour / 60 / 60 * 1000;
    let distance = steps * meters;
    let numberOfRests = Math.floor(distance/500);
    let restsTime = numberOfRests * 60;
    let time = Math.round(distance / metersPerSecond + restsTime);

    let hours = Math.floor(time / 3600);
    time -= hours * 60;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    let neededTime = new Date();
    neededTime.setHours(hours);
    neededTime.setMinutes(minutes);
    neededTime.setSeconds(seconds);
    console.log(neededTime.toLocaleTimeString());

}

TimeToWalk(4000, 0.60, 5);

function FlightTimetable(array) {
    console.log(`${array[0]}: Destination - ${array[1]}, Flight - ${array[3]}, Time - ${array[2]}, Gate - ${array[4]}`);
}

FlightTimetable(['Departures', 'London', '22:45', 'BR117', '42']);

function CalorieObject(array) {
    let foodArray = new Array();
    for (i=0; i<array.length; i+=2){
        let obj = {
            food: array[i],
            calories: array[i+1]
        }

        foodArray.push(obj);
    }

    var output = '{';
    for (i=0; i<foodArray.length; i++) {
        if (i == foodArray.length-1){
            output += ' ' + foodArray[i].food + ': ' + foodArray[i].calories;
        }
        else{
            output += ' ' + foodArray[i].food + ': ' + foodArray[i].calories+',';
        }
    }
    output+=' }';

    console.log(output);
}

CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);

function CoffeeMachine(array) {

    for (let line of array){
        let tokens = line.split(', ');

        console.log(tokens);
    }
}

CoffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);