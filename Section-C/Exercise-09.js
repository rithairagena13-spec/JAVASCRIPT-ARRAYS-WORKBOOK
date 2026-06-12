let nestedList = [1, [2, 3], [4, [5, 6]], 7];

console.log("Original array:", nestedList);


let flatOnce = nestedList.flat();
console.log("Flat once:", flatOnce);


let fullyFlat = nestedList.flat(Infinity);
console.log("Fully flattened:", fullyFlat);