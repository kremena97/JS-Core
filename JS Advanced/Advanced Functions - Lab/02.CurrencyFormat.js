function solve(input) {
    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2,2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }

    //Judge
    function getDollarFormatter(formatter) {
        return (value)=>{
            return formatter(',', '$',true, value);
        }
    }
    const dollarFormatter = getDollarFormatter(currencyFormatter);
    console.log(dollarFormatter(input));
}

solve(2564);