let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is ready.Order will be delivered");
    } else {
        reject("Order was cancelled due to rain");
    }
})

console.log(order);