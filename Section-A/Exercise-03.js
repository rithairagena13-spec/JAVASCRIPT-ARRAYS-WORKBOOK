
let originalScores = [90, 85, 78];

console.log("Original array:", originalScores);


let referenceCopy = originalScores;


referenceCopy[0] = 100;


console.log("After modifying referenceCopy:");
console.log("originalScores:", originalScores);
console.log("referenceCopy:", referenceCopy);


let spreadCopy = [...originalScores];


spreadCopy[2] = 50;

console.log("After modifying spreadCopy:");
console.log("originalScores:", originalScores);
console.log("spreadCopy:", spreadCopy);