// HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------

// Initial data:
//     let isLoggedIn = true;
//     let isProfileComplete = false;

// Tasks:
//    1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message

let LoggedIn=true;
let ProfileComplete=false;
let message;
//    1. If user is not logged in → show "Please login"
if (!LoggedIn){
    //    4. Store the result in message
    message="Please login"; 
//2. If logged in but profile incomplete → show "Complete your profile"      
} else if (LoggedIn && !ProfileComplete){
    //    4. Store the result in message
    message="Complete your profile";
//    3. If logged in and profile complete → show "Welcome back!"    
} else if (LoggedIn && ProfileComplete){
    //    4. Store the result in message
    message="Welcome back";
}

//    5. Print the message
console.log(message);