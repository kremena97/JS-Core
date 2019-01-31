function main(input) {
    let delimiter = input[input.length - 1];
    input.pop();

    console.log(input.join(delimiter));
}

main(['How about no?','I','will','not','do','it!','_']);