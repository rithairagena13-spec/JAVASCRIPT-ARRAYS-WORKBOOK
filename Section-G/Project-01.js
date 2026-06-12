const students = [
  { name: "A", score: 85 },
  { name: "B", score: 45 },
  { name: "C", score: 92 },
  { name: "D", score: 68 }
];

// 1. Filter Passed: Students who scored 70 or above
const passedStudents = students.filter(student => student.score >= 70);
console.log("Passed Students:", passedStudents);



// 2. Average Score: Calculate class average using reduce()
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;
console.log("Average Score:", averageScore);

// 3. Top Scorer: Find the student object with the highest score
const topScorer = students.reduce((highest, current) => {
  return current.score > highest.score ? current : highest;
}, students[0]);
console.log("Top Scorer:", topScorer); 