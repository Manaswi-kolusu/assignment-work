// Initial data:
//         let totalAmount = 0;

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount


let totalAmount=0;
//   1. Add ₹500 to the total
totalAmount+=500;
//   2. Add ₹1200 to the total
totalAmount+=1200;
//   3. Apply a ₹200 discount
totalAmount-=200;
//   4. Add 18% GST
totalAmount+=totalAmount*0.18;
//   5. Print the final bill amount
console.log("Final Bill Amount:"+totalAmount);