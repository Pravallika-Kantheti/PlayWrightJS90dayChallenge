function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
console.log(add(...num));

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
console.log(hasError(...responseCodes)); // true