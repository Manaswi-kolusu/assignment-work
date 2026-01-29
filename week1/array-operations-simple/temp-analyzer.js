// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

let temperatures = [32, 35, 28, 40, 38, 30, 42];

//     1. filter() temperatures above 35
let result1=temperatures.filter(element=>element>35)
console.log(result1) 

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let result2=temperatures.map(t=>(t*9/5)+32)
console.log(result2)

//     3. reduce() to calculate average temperature
let result3=temperatures.reduce((sum,value)=>sum+value,0)/temperatures.length
console.log(result3) 

//     4. find() first temperature above 40
let result4=temperatures.find(ele=>ele>42)
console.log(result4) 

//     5. findIndex() of temperature 28
let result5=temperatures.findIndex(ele=>ele===28)
console.log(result5) 