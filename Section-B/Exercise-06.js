
let userAges = [18, 24, 33, 16, 40];


let hasMinor = userAges.some(age => age < 18);
console.log("Is at least one user under 18?", hasMinor);


let allAdults = userAges.every(age => age >= 18);
console.log("Are all users 18 or older?", allAdults);


let hasMultipleOfFive = userAges.some(age => age % 5 === 0);
console.log("Is any age a multiple of 5?", hasMultipleOfFive);