function solve(input) {
    String.prototype.htmlEscape = function(){
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    input = JSON.parse(input);
    let result = '<table>\n <tr><th>name</th><th>score</th></tr>\n';
    for (let element of input) {
        result += ` <tr><td>${element.name.htmlEscape()}</td><td>${element.score}</td></tr>\n`;
    }

    result += '</table>';

    console.log(result);
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');