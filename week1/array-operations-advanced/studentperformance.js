// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


// Task 1: filter() students who passed (marks ≥ 40)
let result1 = students.filter(student => student.marks >= 40);
console.log("Students who passed (marks >= 40):", result1);

// Task 2: map() to add a grade field based on marks
let result2 = students.map(student => ({
  id: student.id,
  name: student.name,
  marks: student.marks,
  grade: student.marks >= 90 ? "A" : 
         student.marks >= 75 ? "B" : 
         student.marks >= 60 ? "C" : "D"
}));
console.log("Students with grades:", result2);

// Task 3: reduce() to calculate average marks
let result3 = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
console.log("Average marks:", result3);
// Task 4: find() the student who scored 92
let result4 = students.find(student => student.marks === 92);
console.log("Student with 92 marks:", result4);

// Task 5: findIndex() of student "Kiran"
let result5 = students.findIndex(student => student.name === "Kiran");
console.log("Index of 'Kiran':", result5);