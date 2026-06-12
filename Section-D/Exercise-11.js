const testScores = [45, 78, 92, 30, 65, 88];

// 1. Filter scores that are passing (70 or higher)
const passingScores = testScores.filter(score => score >= 70);
console.log("Passing Scores:", passingScores); 

// 2. Filter scores that are below average
//  Calculate the average using reduce
const totalScore = testScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / testScores.length; // 66.33
const belowAverageScores = testScores.filter(score => score < averageScore);
console.log("Below Average Scores:", belowAverageScores); 