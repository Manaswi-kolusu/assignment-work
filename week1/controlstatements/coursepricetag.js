// HANDS-ON 2: Course Price Tag Labeler
// ------------------------------------
// Initial data:
//      let price = 1299;

// Tasks:
//    1. If price < 500 → "Budget Course"
//    2. If price between 500–1000 → "Standard Course"
//    3. If price > 1000 → "Premium Course"
//    4. Store label in courseTag
//    5. Print the label
let price=1299;
let course;
//    1. If price < 500 → "Budget Course"
if (price<500){
    course="Budget Course";
}
//    2. If price between 500–1000 → "Standard Course"
else if (price>=500 && price<=1000){
    course="Standard Course";
}
//    3. If price > 1000 → "Premium Course" 
else if (price>1000){
    course="Premium Course";
}
//    5. Print the label
console.log(course);