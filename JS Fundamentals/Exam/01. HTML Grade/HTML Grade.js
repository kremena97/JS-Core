function solve(examPoints, completedHomework,totalHomework) {
    let maxPoints = 100;
debugger;
    let points = (examPoints * 100 / 400) * 90 / 100;
    let homeworkPoints = completedHomework * 10 / totalHomework;
    points+=homeworkPoints;
    let grade = 3 + 2 *(points - maxPoints / 5) / (maxPoints / 2);

    if (examPoints === 400 || grade >= 6){
        console.log('6.00');
    }else if (grade < 3){
        console.log('2.00');
    } else{
        console.log(grade.toFixed(2));
    }
}

solve(390, 3, 5);