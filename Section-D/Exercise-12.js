const pricesUSD = [10.50, 20.00, 5.25];

// 1. Calculate the total cost of all items
const totalCost = pricesUSD.reduce((sum, price) => sum + price, 0);
console.log("Total Cost:", totalCost); 

// 2. Find the maximum price in the array
const maxPrice = pricesUSD.reduce((max, price) => price > max ? price : max, pricesUSD[0]);
console.log("Maximum Price:", maxPrice); 

// 3. Challenge: Count how many prices are greater than $15
const countOver15 = pricesUSD.reduce((count, price) => price > 15 ? count + 1 : count, 0);
console.log("Prices over $15:", countOver15); 