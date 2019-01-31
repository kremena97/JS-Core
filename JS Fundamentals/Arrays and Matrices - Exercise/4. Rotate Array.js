function main(input) {
    let rotations = input[input.length-1];
    input.pop();

    for (i = 0; i < (+rotations % input.length); i++){
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

main(['Banana','Orange','Coconut','Apple','15']);