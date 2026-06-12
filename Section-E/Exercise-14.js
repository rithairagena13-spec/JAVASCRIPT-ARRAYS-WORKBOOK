const users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];

// 1. Extract only the names using map()
const userNames = users.map(user => user.name);
console.log("User Names:", userNames); 
// Output: ["Zoe", "Adam", "Charlie"]

// 2. Isolate users older than 28 using filter()
const olderThan28 = users.filter(user => user.age > 28);
console.log("Users Older Than 28:", olderThan28);