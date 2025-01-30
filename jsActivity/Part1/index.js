// Objective 1: Create variables of different data types and print them.
let score = 100;
let temperature = 36.6;
let greeting = "Hello, javascript";
let isLearningFun = true;

console.log(score, temperature, greeting, isLearningFun);


// Objective 2: Create an object and an array, then access and modify their elements.
// Create an object named student with properties name (a string), age (an integer), and subjects (an array of strings).
const student = {
    name : "Swayam",                                    //name (a string
    age : 22,                                           //age (an integer)
    subject : ["CMPSC263", "CMPSC431W"]                 //subjects (an array of strings).
};

// Add a new property isGraduated to the student object and set it to false.
student.isGraduated = false;

// Create an array named primeNumbers and initialize it with the first five prime numbers.
var primeNumbers = [2, 3, 5, 7, 11];

// Change the second element in the primeNumbers array to 4 (which is not prime) and print the wrong element to the console, followed with “Mistake detected”.
primeNumbers[1] = 4;
console.log("The second element in the primeNumber array is", primeNumbers[1], "\nMistake Detected");

// Correct the mistake by changing the second element back to its original prime number and print the entire array to the console.
primeNumbers[1] = 3;
console.log(primeNumbers);


// Objective3: Perform operations using different operators and understand their results.
// Use arithmetic operators to calculate the sum, product, and modulus of two numbers and print the results.
let a = 15;
let b = 3;

const mult = a * b;
const sum = a + b;
const modulus = a / b;

console.log("the sum of ", a, " and ", b, " is ", sum);
console.log("the multiplication of ", a, " and ", b, " is ", mult);
console.log("the modulus of ", a, " and ", b, " is ", modulus);

// Create two variables x and y, with different values. Use comparison operators to compare these variables and print the results. Test with different operators.
let x = 8;
let y = 10;

console.log("trying ", x, " > ", y ," : ", x > y);
console.log("trying ", x, " < ", y ," : ", x < y);
console.log("trying ", x, " >= ", y ," : ", x >= y);
console.log("trying ", x, " <= ", y ," : ", x <= y);
console.log("trying ", x, " === ", y ," : ", x === y);

// Use logical operators to combine two boolean expressions and print the results.
let expression1 = x > y;
let expression2 = x == y;
console.log(expression1 || expression2);


// Objective4: Write conditional statements and loops using control flow operators.
// Write an if-else statement that checks if the score from Part 1 is greater than 50. If true, print "Great job!", otherwise print "Keep trying!".
if(score > 50){
    console.log("Great Job!");
} else {
    console.log("Keep Trying");
}

// Write a for loop that iterates over the primeNumbers array and prints each number to the console.
for(let i = 0; i < 5; i++){
    console.log(primeNumbers[i]);
}

// Write a while loop that decrements the score from Part 1 until it reaches 0.
while(score > 0){
    score = score - 1;
}


// Objective5: Understand JS functions
function eventCountdown(eventDate) {
    const now = new Date();                                 // creates a new object for the Date class, which by default is the current date
    const event = new Date(eventDate);                      // creates another object, which takes in event date as the date
    const timeDiff = event - now;                           // find the difference between the times
  
    let seconds = Math.floor(timeDiff / 1000);              // due this, i belive differnece was in milli-seconds, since milliseconds/1000 = seconds
    let minutes = Math.floor(seconds / 60);                 // the floor function used here is just to round down the digits to the nearest integer
    let hours = Math.floor(minutes / 60);                   // rest all are simple relations of conversions of time
    let days = Math.floor(hours / 24);
  
    hours %= 24;                                            // Since above calulated things are total time difference, aka total number days left till event,
    minutes %= 60;                                          // total number of seconds left till event etc.., to present them as a cohesive number days, hours, mins, seconds
    seconds %= 60;                                          // left, we use the modulus function
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
  const countdownMessage = eventCountdown('January 31, 2025 23:59:59');
  console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024


//   Write a swap function that will take 3 variables and swap a to b and b to c and c to a.
function swap3_numbers (a, b, c){
    let temp = a;
    a = b;
    b = c;
    c = temp;
}

// Complete the function below:
function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    // write your code here
    let max_length = 0;
    let index_at = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length > max_length){
            index_at = i;
            max_length = words[i].length;
        }
    }

    return words[index_at];
  }

  // example to try the function out
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 




  
  
