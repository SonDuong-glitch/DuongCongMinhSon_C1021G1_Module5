let fibonacy = [0, 1];
function listFibonacy(num) {
    for (let i = 2; i < num; i++) {
        fibonacy.push(fibonacy[i - 2] + fibonacy[i - 1]);
    }
    return fibonacy;
}
console.log(listFibonacy(10));
function sumFibonacy(listFibonay = fibonacy) {
    let sum = 0;
    for (let number of fibonacy) {
        sum += number;
    }
    return sum;
}
console.log("Tổng của dãy fibonacy là: " + sumFibonacy(fibonacy));
//# sourceMappingURL=main.js.map