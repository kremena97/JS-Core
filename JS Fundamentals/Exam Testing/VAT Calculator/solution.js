function solve(priceWithVAT,VATRate) {

    let priceWithoutVAT = priceWithVAT / (1 + (VATRate/100));

    return priceWithoutVAT.toFixed(2);
}

console.log(solve(120.00, 20.00));