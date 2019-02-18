function solve(input) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    input = JSON.parse(input);

    let result = '<table>\n <tr>';

    let tableHeadings = Object.keys(input[0]);
    for (let heading of tableHeadings) {
        result += `<th>${heading}</th>`;
    }
    result += '</tr>\n';

    for (let element of input) {
        result += ' <tr>';
        for (let i = 0; i < tableHeadings.length; i++) {
            let value = element[tableHeadings[i]];
            result += `<td>${value.toString().htmlEscape()}</td>`
        }
        result += '</tr>\n';
    }
    result += '</table>';
    console.log(result);
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');