
let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];


let productById = products.find(product => product.id === 2);
console.log("Product with id 2:", productById);



let expensiveProductIndex = products.findIndex(
  product => product.price > 1000
);
console.log(
  "Index of the first product with price greater than 1000:",
  expensiveProductIndex
);