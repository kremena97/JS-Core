function solve(obj) {
    if (obj.handsShaking) {
        debugger;
        let alcohol = 0.1 * obj.weight * obj.experience;
        obj.bloodAlcoholLevel += alcohol;
        obj.handsShaking = false;

        return obj;
    }
    return obj;
}

console.log(solve({
        weight: 120,
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
));