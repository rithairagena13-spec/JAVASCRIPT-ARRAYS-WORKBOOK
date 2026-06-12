const users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];

// 1. Sort by age in ascending order (creates a copy)
const sortByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", sortByAge);

// 2. Sort by age ascending, then by name alphabetically
const sortByAgeThenName = [...users].sort((a, b) => {
  // If ages are different, sort by age
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  // If ages are identical, tie-break using localeCompare on strings
  return a.name.localeCompare(b.name);
});

console.log("Sorted by Age, then Name:", sortByAgeThenName);