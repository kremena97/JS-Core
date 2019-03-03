function solve() {
    let obj = {
        name: arguments[0],
        personalInfo: {
            age: arguments[1],
            weight: arguments[2],
            height: arguments[3]
        },
        BMI: 1,
        status: ''
    };

    let weight = obj.personalInfo.weight;
    let heightInMeters = obj.personalInfo.height / 100;

    let BMI = weight / Math.pow(heightInMeters, 2);
    obj.BMI = Math.round(BMI);

    if (BMI < 18.5){
        obj.status = 'underweight';
    }else if(BMI >= 18.5 && BMI <25){
        obj.status = 'normal';
    }else if(BMI >= 25 && BMI <30){
        obj.status = 'overweight';
    }
    else if(BMI >= 30){
        obj.status = 'obese';
        obj['recommendation'] = 'admission required';
    }
    return obj;
}

solve('Honey Boo Boo', 9, 57, 137);