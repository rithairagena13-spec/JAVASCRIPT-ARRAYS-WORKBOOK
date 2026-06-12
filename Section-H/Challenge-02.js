function myReduce(array, callback, initialValue) {
  let hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : array[0];
  let startIndex = hasInitialValue ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}
const numbers = [1, 2, 3, 4, 5];

const totalSum = myReduce(numbers, (sum, num) => sum + num, 0);
console.log("Calculated Sum:", totalSum); 