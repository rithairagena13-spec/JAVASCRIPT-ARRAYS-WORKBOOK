
let inventory = [10, 20, 30];

console.log("Initial array:", inventory);


inventory.push(40);
console.log("After push(40):", inventory);


inventory.pop();
console.log("After pop():", inventory);


inventory.unshift(0);
console.log("After unshift(0):", inventory);


inventory.shift();
console.log("After shift():", inventory);


inventory.splice(1, 1, 25, 35);
console.log("After splice(1, 1, 25, 35):", inventory);