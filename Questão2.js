function isFibonacci(n) {
    let a = 0;
    let b = 1;
    if (n === a || n === b)
        return true;
    let c = a + b;
    while (c <= n) {
        if (c === n)
            return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

let num = 15;

if (isFibonacci(num)) {
    console.log('O número ' + num + ' pertence à sequência de Fibonacci.');
} else {
    console.log('O número ' + num + ' não pertence à sequência de Fibonacci.');
}