// Drill: Say hello to my friend!

// Write a function called sayHelloToMyFriend that logs "Hello, {the name of the friend}, it's nice to meet you!"
// It should take in one argument (a string with the friend's name). It should use the + operator to add strings together,
// and use console.log to print the full sentence.

// For example, if we invoked it like this, we would get this response:
// sayHelloToMyFriend("Deniz")   //-> "Hello, Deniz, it's nice to meet you!"
// sayHelloToMyFriend("Eddie")   //-> "Hello, Eddie it's nice to meet you!"
// sayHelloToMyFriend("Alaya")   //-> "Hello, Alaya, it's nice to meet you!"


// ====== Code ====== //


function sayHelloToMyFriend(friend) {
    console.log("Hello, " + friend + ", it's nice to meet you!");
}

sayHelloToMyFriend("Deniz");
sayHelloToMyFriend("Eddie");
sayHelloToMyFriend("Alaya");


// ==================================== //



// ====== Output ====== //

/*

Hello, Deniz, it's nice to meet you!
Hello, Eddie, it's nice to meet you!
Hello, Alaya, it's nice to meet you!

=== Code Execution Successful ===

*/