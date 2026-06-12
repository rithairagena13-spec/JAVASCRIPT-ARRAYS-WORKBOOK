const data =[1,5,2,8,5,1,9,2];

const uniqueData = data.filter((item, index) => data.indexOf(item) === index);
console.log("Unique Array (Filter):", uniqueData); // [1, 5, 2, 8, 9]