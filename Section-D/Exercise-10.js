const pricesUSD = [10.50, 20.00, 5.25];
const exchangeRate = 1.3;

// 1. Calculate the local currency price
const pricesLocal = pricesUSD.map(price => price * exchangeRate);
console.log("Local Currency Prices:", pricesLocal); 

// 2. Format into strings with two decimal places
const formattedStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log("Formatted Strings:", formattedStrings); 