function poundsToUSD(britishPoundCurrency) {
    let usdConvertedCurrency = britishPoundCurrency * 1.31;
    usdConvertedCurrency = usdConvertedCurrency.toFixed(3);
    return usdConvertedCurrency;
}

console.log(poundsToUSD(80));
console.log(poundsToUSD(39));