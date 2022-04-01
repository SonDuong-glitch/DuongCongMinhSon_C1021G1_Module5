let fibonacy = [0,1];
function listFibonacy(num: number){
    for(let i:number = 2; i < num; i ++){
        fibonacy.push(fibonacy[i-2] + fibonacy[i-1])
    }
    return fibonacy;
}
console.log(listFibonacy(10))
function sumFibonacy(listFibonay = fibonacy){
    let sum:number = 0;
    for (let number of fibonacy){
        sum +=number;
    }
    return sum;
}
console.log("Tổng của dãy fibonacy là: "+sumFibonacy(fibonacy));