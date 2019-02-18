function solve(input) {
    let result = [];
    let openingTagPattern = /<[\w]+>/g;
    let closingTagPattern = /<\/[\w]+>/g;
    let valid = true;
    debugger;
    for (let i = 0; i < input.length; i++) {
        debugger;
        let line = input[i].toString();
        let openingTags = line.match(openingTagPattern);
        let closingTags = line.match(closingTagPattern);
        if (openingTags !== null && closingTags !== null) {
            if (openingTags.length === closingTags.length) {
                for (j = 0; j < openingTags.length; j++) {
                    let oTag = openingTags[j].charAt(0) + '/' + openingTags[j].slice(1);
                    let cTag = closingTags[closingTags.length - 1 - j];
                    if (oTag === cTag) {
                        line = line.replace(openingTags[j], '');
                        line = line.replace(closingTags[j], '');
                    }
                    else {
                        valid = false;
                    }
                }

                if(line.match(/<>|< >|<\W+>|<|>/)!==null){
                    valid = false;
                }

                if (valid) {
                    result.push(line);
                }
                valid = true;
            }
        }

    }

    console.log(result.join(' '));
}

solve(['<h1>>Hello World!</h1>',
    '<a>I am Peter.']

);