
let dataPoints = [42, 10, 500, 2, 77];

console.log("Original array:", dataPoints);


let ascendingOrder = [...dataPoints].sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);


let descendingOrder = [...dataPoints].sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);


let reversedOriginal = [...dataPoints].reverse();
console.log("Reversed original array:", reversedOriginal);

console.log("Original array after operations:", dataPoints);