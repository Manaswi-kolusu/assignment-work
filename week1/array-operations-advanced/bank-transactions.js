// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000


// Task 1: filter() all credit transactions
let result1 = transactions.filter(trans => trans.type === "credit");
console.log("Credit transactions:", result1);

// Task 2: map() to extract only transaction amounts
let result2 = transactions.map(trans => trans.amount);
console.log("Transaction amounts:", result2);

// Task 3: reduce() to calculate final account balance
let result3 = transactions.reduce((balance, trans) => {
  return trans.type === "credit" ? balance + trans.amount : balance - trans.amount;
}, 0);
console.log("Final account balance:", result3);

// Task 4: find() the first debit transaction
let result4 = transactions.find(trans => trans.type === "debit");
console.log("First debit transaction:", result4);   
// Task 5: findIndex() of transaction with amount 10000
let result5 = transactions.findIndex(trans => trans.amount === 10000);
console.log("Index of transaction with amount 10000:", result5);