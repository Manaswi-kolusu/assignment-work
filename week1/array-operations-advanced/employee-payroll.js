// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add: netSalary = salary + 10% bonus
//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"



// Task 1: filter() employees from IT department
let result1 = employees.filter(emp => emp.department === "IT");
console.log("IT Department Employees:", result1);

// Task 2: map() to add netSalary = salary + 10% bonus
let result2 = employees.map(emp => ({
  id: emp.id,
  name: emp.name,
  salary: emp.salary,
  department: emp.department,
  netSalary: emp.salary + (emp.salary * 0.10)
}));
console.log("Employees with net salary (salary + 10% bonus):", result2);

// Task 3: reduce() to calculate total salary payout
let result3 = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total salary payout:", result3);

// Task 4: find() employee with salary 30000
let result4 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", result4);

// Task 5: findIndex() of employee "Neha"
let result5 = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of 'Neha':", result5);