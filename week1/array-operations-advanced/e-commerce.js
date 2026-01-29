// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let result1=cart.filter(eleObj=>{
    if(eleObj.inStock===true){
        return{
            id:eleObj.id,
            name:eleObj.name,
            price:eleObj.price,
            quantity:eleObj.quantity
        }
    }
})
console.log("In-stock items:", result1);

//     2. Use map() to create a new array with:  { name, totalPrice }
let result2=cart.map(item=>({
    name:item.name,
    totalprice:item.price*item.quantity
}))
console.log("Items with total price:", result2);

//     3. Use reduce() to calculate grand total cart value
let result3=cart.reduce((acc,item)=>acc+(item.price*item.quantity),0)
console.log("Total cart value:", result3);

//     4. Use find() to get details of "Mouse"
let result4=cart.find(ele=>ele.name==='Mouse')
console.log("Find 'Mouse':", result4);
//     5. Use findIndex() to find the position of "Keyboard"
let result5=cart.findIndex(ele=>ele.name==='Keyboard')
console.log("Index of 'Keyboard':", result5);