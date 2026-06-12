



let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let sentenceParts = ["Hello", "world", "this", "is", "great"];


let combinedArray = arr1.concat(arr2);
console.log("Combined array:", combinedArray);


let sentence = sentenceParts.join(" ");
console.log("Joined string:", sentence);


let middleElements = sentenceParts.slice(1, 4);
console.log("Middle three elements:", middleElements);