const company = [{ name: "A", details: { city: "NY" } }];


const spreadCopy = [...company];


spreadCopy[0].details.city = "LA";

console.log("--- Shallow Copy Modification ---");
console.log("Original Company:", JSON.stringify(company));  
console.log("Spread Copy:", JSON.stringify(spreadCopy));      

company[0].details.city = "NY";

const deepCopy = JSON.parse(JSON.stringify(company));

// Modify the nested city property in the deep copy
deepCopy[0].details.city = "Tokyo";

console.log("\n--- Deep Copy Modification ---");
console.log("Original Company:", JSON.stringify(company));    