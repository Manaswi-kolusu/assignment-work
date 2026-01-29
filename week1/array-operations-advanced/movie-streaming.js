// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"


// Task 1: filter() only "Sci-Fi" movies
let result1 = movies.filter(movie => movie.genre === "Sci-Fi");
console.log(" Sci-Fi movies:", result1);

// Task 2: map() to return format: "Inception (8.8)"
let result2 = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log(" Movies with ratings:", result2);

// Task 3: reduce() to find average movie rating
let result3 = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log("Average movie rating:", result3);

// Task 4: find() movie "Joker"
let result4 = movies.find(movie => movie.title === "Joker");
console.log("Find 'Joker':", result4);
// Task 5: findIndex() of "Avengers"
let result5 = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of 'Avengers':", result5);