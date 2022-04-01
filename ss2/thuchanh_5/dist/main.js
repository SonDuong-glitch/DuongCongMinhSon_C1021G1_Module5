let money = 10000;
const buyCar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy" + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    });
};
money = 100001;
const promise = buyCar("VinFast").then(value => {
    console.log(value);
}, erorr => {
    console.log(erorr);
});
//# sourceMappingURL=main.js.map