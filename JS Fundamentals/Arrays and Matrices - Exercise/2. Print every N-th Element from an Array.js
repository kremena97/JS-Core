function main(input) {
    let step = Number(input[input.length - 1]);
    input.pop();

    for (i = 0; i < input.length; i+=step){
        console.log(input[i]);
    }
}

main(['dsa','asd','test','tset','2']);