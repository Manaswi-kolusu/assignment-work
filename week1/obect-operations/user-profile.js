// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields



// Task 1: Read and print the user's name and email
console.log("User Name:", user.name);
console.log(" User Email:", user.email);

// Task 2: Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log("After adding lastLogin:", user);

// Task 3: Update role from "student" to "admin"
user.role = "admin";
console.log("After updating role:", user);

// Task 4: Delete the isActive property
delete user.isActive;
console.log("After deleting isActive:", user);
// Task 5: Use Object.keys() to list all remaining fields
let keys = Object.keys(user);
console.log(" Remaining fields:", keys);