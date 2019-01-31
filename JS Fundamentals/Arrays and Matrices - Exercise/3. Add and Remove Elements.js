function main(input) {
    let resultArray = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] === 'add'){
            resultArray.push(i+1);
        } else{
            resultArray.pop();
        }
    }

    if (resultArray.length === 0){
        console.log('Empty');
    } else{
        for (j = 0; j <resultArray.length; j++){
            console.log(resultArray[j]);
        }
    }
}

main(['add','add','remove','add','add']);