function factorialDivision(x, y){
    return ((factorial(x) / factorial(y))).toFixed(2);

    function factorial(n){
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f  *= i;
        }

        return f;
    }
}

console.log(factorialDivision(5, 2));