// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90



// Task 1: Calculate total marks
let totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", totalMarks);

// Task 2: Calculate average marks
let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average marks:", averageMarks);
// Task 3: Find the highest scoring subject
let highestSubject = Object.keys(marks).reduce((highest, subject) => 
  marks[subject] > marks[highest] ? subject : highest
);
let highestMarks = marks[highestSubject];
console.log("Highest scoring subject:", highestSubject, "with", highestMarks, "marks");

// Task 4: Add a new subject computer: 90
marks.computer = 90;
console.log("After adding computer subject:", marks);