// MYSELF Zuhii Manzoor. I am from Sindh Nawabshah. My Roll Number is ===> (239789)
// I have completed my 45 Assignments. Alhamdullilah, I completed all the tasks and projects I got. 

// //tsk 2.

// Personal Message: Store a person's name in a variable, and print a message to that person. Your
//message should be simple, such as, "Hello Eric, would you like to learn some python today?" 


 let personName = "Zuhii MalakShah";
 console.log("Hello", personName, "would you like to learn some python today?");


// //task 3.

// Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,
//uppercase, and titlecase.


let personName = "zuhii malAkShah";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toLocaleUpperCase()));


// //task 4.

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its
//author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, "A person who never made a mistake never tried anything new."

// console.log("Albert Einstein once said,\"A person who never made a mistake never tried anything new.\"");


// //task 5.

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person's name in a variable
//called famous_person. Then compose your message and store in it a new variable called message.
//Print your message.


let famous_person = "Albert Einstein";

let message = "once said, `A person who never made a mistake never tried anything new`.";

console.log(famous_person, message);


// //task 6.

// Stripping Names: Store a person's name, and include some whitespace characters at the beginning
//and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after 
//stripping the white spaces.


let whitespaceName = "\n\t Zuhii MalakShah \t\n";
console.log(whitespaceName);

let withoutwhitespaceName = whitespaceName.trim();

console.log(withoutwhitespaceName);


// //task  7.

// Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations in print statements to see the results.

// //task  8.

// You should create four lines that look like this:

//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.


console.log(4 + 4);

console.log(12 - 4);

console.log(4 * 2);

console.log(16 / 2);


// //task  9.

// Favourite Number: Store your favourite number in a variable. Then, using that variable, create a
//message that reveals your favourite number. Print that message.


let favNumber = 20;
let message = "Mine Favourite Number is:";
console.log(message, favNumber);


// //task  10.

// Adding Comments: Choose two of the programs you've written, and add at least one comment to each.
//If you don't have anything specific to write because your programs are too simple at this point, just
//add your name and the current date at the top of each program file. Then write one sentence describing
//what the program does.


//Addition
console.log(4 + 4);

//Subtraction
console.log(12 - 4);

// Multiplication
console.log(4 * 2);

// Division
console.log(16 / 2);


// //task  11.

// Names: Store the names of a few of your friends in a array called names. Printveach person's name
//by accessing each element in the list, one at a time.


 let friendsName = ["Manzoor", "Maryam", "Hafsa", "Khansa"];

 friendsName.forEach(friendName => console.log(friendName));


// //task  12.

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person's
//name, print a message to them. The text of each message should be the same, but each message should
//be personalized with the person's name.


 let friendsName = ["Zuhii", "Ruqayya", "Talha"];

 friendsName.forEach(friendName => console.log(`Hello ${friendName}, How are u?`));


// //task  13.

// Your Own Array: Think of your favourite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples.
//Use your list to print a series of statements about these items, such as "I would like to own a
//Honda motorcycle."


 let transportationModes = ["Sports Bike", "Car", "Luxury Car", "Aeroplane"];

transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));


// //task  14.

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you'd like to invite to dinner. Then use your list to
//print a message to each person, inviting them to dinner.


let guestList = ["Saima", "Ujala", "Farooq", "Siraj"];

 guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, would like to dinner with me in Ramazan?`));


// //task  15.

// Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to
//send out a new set of invitations. You'll have to think of someone else to invite.
//*Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can't make it.
//*Modify your list, replacing the name of the guest who can't make it with the name of the new person
//you are inviting.
//*Print a second set of invitation messages, one for each person who is still in your list.


let guestList = ["Saima", "Ujala", "Farooq", "Siraj"];

 let dontCome = guestList[2];

console.log(dontCome, "Mamoo Saudia me rehty hain wo nhi asakty");

guestList.splice(2, 2, "Maqsood");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to aftar with me in Ramazan?`));


// //task  16.

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three
//more guests to invite to dinner.
//*Start with your program from Exercise 15. Add a print statement to the end of your program informing
//people that you found a bigger dinner table.
//*Add one new guest to the beginning of your array.
//*Add one new guest to the middle of your array. Use append() to add one new guest to the end of your
//list. Print a new set of invitation messages, one for each person in your list.


//Creating a Guest List Array
 let guestList = ["Saima", "Ujala", "Farooq", "Siraj"];

// // // Makingvariable for those guest who can't come
let dontCome = guestList[2];

// // // Print the name of guest who can't come
console.log(dontCome, "Mamoo Saudia me rehty hain wo aftari krny nhi asakty hn");

// // // Add or Remove Values from Guest List Array
 guestList.splice(2, 2, "Maqsood");

// // // Message Print for Bigr Table
 console.log("Good News ! We have Found a Bigger Table For Dinner.");

// // // Adding a new value at starting index of array
 guestList.unshift("Musab");

// // // Adding a new value at ending index of array
 guestList.push("Waqas");

// // // Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// // Adding a new guest to middle index of array
 guestList.slice(middleIndex, - "Zaid");

// // // Print Message of Updated List
 console.log("Updated List of our Guests");

// // // Sending a invitation message to our guests one by one with their names
 guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, would you like to aftar with me in Ramazan?`));


// //task 17.

// Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the
//dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you
//pop a name from your list, print a message to that person letting them know you're sorry you can;t
//invite them to dinner.// let guestList = ["Sa
//Print a message to each of the two people still on your list, letting them know they're still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//actually have an empty list at the end of your program.


let guestList = ["Saima", "Ujala", "Farooq", "Siraj"];

// Makingvariable for those guest who can't come
 let dontCome = guestList[2];

// Print the name of guest who can't come
console.log(dontCome, "Mamoo Saudia me rehty hain wo aftari krny nhi asakty hn");

// Add or Remove Values from Guest List Array
 guestList.splice(2, 2, "Maqsood");

// Message Print for Bigr Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new value at starting index of array
guestList.unshift("Musab");

// Adding a new value at ending index of array
guestList.push("Waqas");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
 guestList.slice(middleIndex, - "Zaid");

// Print Message of Updated List
 console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with their names
 guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, would you like to aftar with me in Ramazan?`));

 // Inform that only two guests can be invited for dinner
 console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

 // Using while-loop to remove guests from the array untill only two names remain
 while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);

 }
// Sending a invitations to the last two guest on the list
 console.log("Invitation to the last 2 Guests");

 guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

 // Removing last two Guests from the list
 guestList.pop();
 guestList.pop();

 console.log("Empty List:", guestList);


// //task 18.

// Seeing the World: Think of at least five places in the world you'd like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it's back to it's original order.
//Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that
//its order has changed.


// Making a Array of Countries and Print  its Original Order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argintina"];
console.log("Original Order:", countriesToVisit);

//Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order
console.log("Still in original order:", countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again  the original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());


// //task 19.

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
//indicating the number of people you are inviting to dinner.


let guestList = ["Saima", "Ujala", "Farooq", "Siraj"];

//guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, would you like to aftar with me in Ramazan?`));

let lengthGuests: number = guestList.length;

console.log(`We are Inviting total ${lengthGuests} guests.`);


// //task 20.

// Think of something you could store in a array. For example, you could make a list of mountains,
//rivers, countries, cities, languages, or anything else you'd like. Write a program that creates a list
//containing these items.


// Making a local languages Array
let localLanguages: string[] = ["Sindhi", "Pushto", "Balochi", "Punjabi"];

// Print the message of List
console.log("List of Local Languages:",

// Print the values of Array in the form of list
localLanguages.forEach(language => console.log(language)));


// //task 21.

// They think of something you could store in a Typescript Object. Write a program that creates 
//Objects containing these items.


interface itcourse {
    courseName: string;
    location: string; 
    onSiteStudents: NumberConstructor;
}

let itcourse = {
    courseName: "Typescript and JavaScript",
    location: "Governor House Sindh",
    onSiteStudents: 50000
};

console.log(itcourse);


// //task 22.

// International Error: If you haven't recieved an array index error in one of your programs yet, try
//to make one happen. Change an index in one of your programs to produce an index error. Make sure you
//correct the error before closing the program.


// Creating a Array
let errorArray: string[] = ["A", "B", "C", "D"];

// Producing Error ! by Accessing invalid index of array
console.log(errorArray[20]);

// Error Removed
console.log(errorArray[1]);


// //task 23.

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
//and your prediction for the results of each test.
   //Your code should look something like this:
   //let car = 'subaru';
   //console.log("Is car == 'subaru'? ! predict True.")
   //console.log(car == 'subaru')
   //Look closely at your results, and make sure you understand why each line evaluates to True or False.
   //Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


   //Making a Variables
 let seven = 7;

 let forteen = 14;

// // Test 1
 console.log("Test 1: seven is equal to 7?");
 console.log(seven == 7);

// // Test 2
 console.log("\nTest 2: forteen is equal to 14?");
 console.log(forteen == 14);

// // Test 3
 console.log("\nTest 3: 7 is not equal to 14");
 console.log(seven != forteen);

// // Test 4
 console.log("\nTest 4: 14 is greater than 7");
 console.log(forteen > 7);

// // Test 5
 console.log("\nTest 5: 7 is smaller than 14");
 console.log(seven < forteen);

// // Test 6
 console.log("\nTest 6: 14 is smaller than 7");
 console.log(14 < 7);

// // Test 7
 console.log("\nTest 7: 7 is equal to 14");
 console.log(seven == forteen);

// // Test 8 
 console.log("\nTest 8: 14 is not equal to 14");
 console.log(forteen != forteen);

// // Test 9
 console.log("\nTest 9: 7 is greater than 14");
 console.log(seven >  forteen);

// // Test 10
 console.log("\nTest 10: 1400 is smaller than 140");
 console.log(1400 < 140);


// //task 24.

// More Conditional Tests: You don't have to limit the number of tests you create to 10. If you want
//to try more comparisons, write more tests.
       //Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal
//to, and less than or equal to
// Tests using "and" "or" operators
// Test whether an items is in a arrayy
// Test whether an items is not in a array


// Define  Variables
 let zuhiiShah = "zuhiiShah";
 let uppercasezuhiiShah = "ZUHIISHAH";
 let ten = 10;
 let twenty = 20;
 let fruits = ["apple", "banana", "orange"];

// // Test for equality and inequality with strings
 console.log("Is zuhiiShah is equal to zuhiiShah?");
 console.log(zuhiiShah == "zuhiiShah");

 console.log("\nIs zuhiiShah is not equal to zuhiiShah?");
 console.log(zuhiiShah != "zuhiishah");

// // Tests using Lowercase Function
 console.log("\nIs ZUHIISHAH is equal to zuhiishah after converting to lowercase?");
 console.log(uppercasezuhiiShah.toLowerCase() == "zuhiishah");

 console.log("\nIs ZUHIISHAH is not equal to zuhiishah after converting to lowercase?");
 console.log(uppercasezuhiiShah.toLowerCase() != "zuhiishah");

// // Numerical tests
// // Equal to
 console.log("\n Is ten is equal to twenty?");
 console.log(ten == twenty);

// // Not Equal to
 console.log("\n Is ten is not equal to twenty?");
 console.log(ten != twenty);

// // Greater than
 console.log("\n Is ten is greater than zero?");
 console.log(ten > 0);

// // Less than
 console.log("\n Is twenty is les than 10?");
 console.log(twenty < 10);

// // Greater than or equal to
 console.log("\n Is ten is gresater than or equal to 5?");
 console.log(ten >= 5);

// // Less than or equal to
 console.log("\n twenty is less than or equal to 10?")
 console.log(twenty <= 10);

// // Tests using "and" & "or" operators

// // Using &&
 console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
 console.log(twenty != 10 && twenty > 10);

 console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
 console.log(twenty != 10 && twenty > 30);

// // Using || (or)
 console.log("\n 20 is greater than 50 OR 20 is equal to 20?");
 console.log(20 > 50 || 20 == 20);

 console.log("\n 20 is greater than 50 OR 20 is not equal to 20?");
 console.log(20 > 50 || 20 != 20);

// // Tests whether an item is include in array
 console.log("\n Is orange include in my fruits array?");
 console.log(fruits.includes("orange"));

// // Not include
 console.log("\n Is orange not include in my fruits array?");
 console.log( !fruits.includes("orange"));


// //task 25.

//  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called 
//alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien's color is green. If it is, print a message that the 
//player just earned 5 points.
// Write one version of this program that passes the if test and another that fails. (The version that
//fails will have no output.)


// Define Variable
 let alien_color = "golden";

 if (alien_color === "Black"){
      // Code Block
      console.log("Alien color is Black Players just earned 5 points.");
}

 if (alien_color === "golden"){
     console.log("AlieN Color is golden");
 }


// //task 26.

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien's color is green, print a statement that the player just earned 5 points for shooting
//the alien.
//If the alien's color isn't green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.


// Define Variable
 let alien_color = "green";
 
// // First Version
 if (alien_color === "green"){
     console.log("player just earned 5 points for shooting the alien.")
 }
 else{
     console.log("player just earned 10 points.");
 }

// // Second Version

 if (alien_color === "blue"){
     console.log("I am come from else statement");
 }
 else{
     console.log("I am come from else statement.");
 }


// //task 27.

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sureeach message is printed for the appropriate color alien.


// Define variable
let alienColor = "green";

// Using if and Else-If Statements
if(alienColor === "green"){
    console.log("(Version 1)you shot down green alien you have earned 5 points");
}
else if(alienColor === "yellow"){
     console.log("you shot down yellow alien so you have earned 10 points");
}
else if(alienColor === "red"){
    console.log("you shot down red alien you have earned 15 points");
}

// Version 2

let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor2 === "yellow"){
    console.log("(Version2)you shot down yellow alien you have earned 10 points");
}
else if(alienColor2 === "red"){
    console.log("you shot down red alien you have earned 15 points");
}

// // Version 3

let alienColor3 = "red";
if(alienColor3 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor3 === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}
else if(alienColor3 === "red"){
    console.log("(Version 3) you shot down red alien you have earned 15 points");
}


// //task 28.

//  Stages of Life: Write an if-else chain that determines a person's stage of life. Set a value
//for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a tenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a ,message that the person is an elder.


// Creating a Variable
let age = 18;


// Creating a program for determining the stage of life using If-Else Chain
if (age < 2){
    console.log("You are a baby.");
}
else if (age >= 2 && age < 4){
    console.log("you are a Toddler.");
}
else if (age >= 4 && age < 13){
    console.log("you are a Kid");
}
else if (age >= 13 && age < 20){
    console.log("you are a Teenagers.;");
}
else if (age >= 20 && age < 65){
    console.log("you are an Adults.");
}
else if (age >= 65){
    console.log("you are Elders.");
}


// //task 29.

//  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
//statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the
//fruit is in your array, the if block should print a statement, such as You really like bananas!


// Creating a Array
let favorite_fruits = ["Mango", "Strawberry", "Orange"];


// Using 5 independent If Statements

if (favorite_fruits.includes("Mango")){
    console.log("I really like Mango");
}
if (favorite_fruits.includes("Strawberry")){
    console.log("I really like Strawberry");
}
if (favorite_fruits.includes("Apple")){
    console.log("I really like Applke");
}
if (favorite_fruits.includes("Orange")){
    console.log("I really like Orange");
}
if (favorite_fruits.includes("Bananas")){
    console.log("I really like Bananas");
}


// //task  30.

//  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
//writing code that will print a greeting to each user after they log in to a website. Loop through the
//array, and print a greeting to each user:
// If the statement is 'admin', print a special greeting, such as Hello admin, would you like to see a
//status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// Creating a Array
let userNames = ["Manzoor", "Maryam", "Aliya", "Admin", "Doll"];

// Using ForEach loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
     console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})


// //task 31.

//  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames = ["Manzoor", "Maryam", "Aliya", "Admin", "Doll"];

// Remove all Usernames values from our Array is empty 
userNames = []

if (userNames.length === 0){
      console.log("your Array is Empty We need to find some users!")
}else{
    // Using ForEach loop on Array

    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}


// //task 32.

// Checking Usernames: Do the following to create a program that stimulates how websites ensure 
//that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames callednew_users. Make sure one or two of the new usernames are 
// also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print
// a message that the person will need to enter a new username. If a username has not been used, print
// a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// Array of Current Users
let current_users = ["Talha", "musab","Waqas", "Zaid", "Haris"]

// Array of New Users
let new_users = ["Khansa", "Ruqayya", "Musab", "Aliya", "Waqas"]

// Loop through new_users to check for usernames availability

new_users.forEach(new_one_user => {
    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different messages using If-Else statements
    if(our_condition){
         console.log(`Sorry ${new_one_user}, is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})


// //task 33.

//  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal 
// numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using For-loop
for(let oneNumber of numbers){
    let ordinalEnding: string;

    if(oneNumber === 1){
        ordinalEnding = "st"
    }
    else if(oneNumber === 2){
        ordinalEnding = "nd"
    }
    else if(oneNumber === 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}


// //task 34.

// Pizza's: Think of at least three kinds of your favorite pizza. Store these pizza names in a 
// arrar, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple statement
// like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza.The
// output should consist of three or more lines about the kinds of pizza you like and then an additional
// sentence, such as I really love pizza!


 // Creating a Array
let pizza = ["Chicken Tika", "Malai Cheese", "Fajita"]

 // Using for-loop
 for(let onePizza of pizza){
        console.log(`I like ${onePizza} pizza`);
 }

  // Print a message outside of the for-loop
  console.log("Pizza is Love")
  console.log("I eat pizza")


// //task 35.

// Animals: Think of at least three different animals that have a common characteristic. Store the
// names of these animals in a list, and then use a for loop to print out the name of each animal.Modify
// your program to print a statement about each animal, such as A dog would make a great pet. Add a line
// at the end of your program stating what these animals have in common. You could print a sentence such
// as Any of these animals would make a great pet!


// Creating a Array
let petAnimals = ["kitten", "Horse", "chick"]

 // Using For-loop
 for (let onePet of petAnimals){
    console.log(`A ${onePet} would make a great pet.`)
 }

  // Print a message out side of For-loop

  console.log("Any of these animals would make a great pet!")


// //task 36.

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size of 
// the shirt and the message printed on it. Call the function.


function make_shirt (size: string, printMessage: string){
    console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt`)
}

make_shirt("Large", "Code with ZuhiiMalak")

make_shirt("Medium", "Code with ZuhiiMalak")

make_shirt("Small", "CodewithZuhii")


// //task 37.

//  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love Typescript. Make a large shirt and a medium shirt with the default message, and a 
// shirt of any size with a different message.


//  Making a Function
   function make_shirt  (size: string = "Large", printMessage: string = "I love Typescript"){
       console.log(`Creating a ${size} size shirt with the ${printMessage} prints on shirt`)
 }

   // Calling a function with by default values
   make_shirt();

    // calling a function now with medium size and default message
    make_shirt("Medium")

    // Calling a function with small size and different print message
    make_shirt("Small", "I love Javascript")


// //task 38.

//  Cities: Write a function  called describes_city() that accepts the name of a city and its 
//country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the 
// parameter for the country a default value. Call your function for three different cities, at least
// one of which is not in the default country.


// Describing a Function
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

 // Calling the function
 describe_city("Karachi");

 describe_city("Sindh Nawabshah");

 describe_city("NewYork", "UnitedStates");


// //task 39.

//  City Names: Write a function called city_country() that takes in the name of a city and its 
// country. The function should return a string formatted like this:
       // "Lahore, Pkistan"
// Call your function with at least three city-country pairs, and print the value that's returned.


//Creating a function with parameters which return a values in string
function city_country(city: string, country: string) : string{
      return `${city} , ${country}`;
}

// Calling a function and print the returned value
city_country("Karachi", "Pakistan");

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "German"));


// //task 40.

// Album: Write a function called make_album() that builds a Object describing a music album. The
// function should takein an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album's Object.
// Make at least one new function call that includes the number of tracks on an album.


//Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

// Calling three functions and creating 3 variables with different values

let album1 = make_album("ArtistZuhii", "Album title 1");

let album2 = make_album("Zuhii", "Album title 2");

// Calling a make_album function with 3rd parameter
let album3 = make_album("Shah", "Album title 3", 10);

// Printing values of our object created by function

console.log(album1);
console.log(album2);
console.log(album3);


//task 41. 

// Magicians: Make a array of magician's names. Pass the array to a function called show_magicians(),
 // which prints the name of each magician in the array.


  function show_magicians(magicians: string []): void {
      for (const magician of magicians) {
          console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
     }
 }

 const magician: string[] = ["doll", "aliya", "haris"];
  show_magicians(magician)


// //task 42.

// Great Magicians: Start with a copy of your program from Exercise 39. Weite a function called
// make_great() that modifies the array of magicians by adding the phrase the great to each magician's
// name. Call show_magicians() to see that the list has actually been modified.


 function make_great(magicians: string[]): void {
     for (let i = 0; i < magicians.length; i++) {          //i stand for index string
       magicians[i] = magicians[i] +  ' the great'

 }            
 }

 const magicians2: string[] = ["doll", "aliya", "haris"];
 //make_great(magicians2)
 //show_magicians(magicians2)


// //task 43.

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
// copy of the array of magicians' names. Because the original array will be unchanged, return the new
// array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one
// array with the Great added to each magician's name.

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["doll", "aliya", "haris"];

//////////////////////////////////////////////////////////////

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);


// //task 44.

// Sandwiches: Write a function that acceptsa array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwitch that is being ordered. Call the function three times, using a 
// different number of arguments each time.


function orderSandwich(...items: string[]) {
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    } else {
        console.log("Items selected for the sandwich:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("-----------------------------");
}

// Call the function with different number of arguments
orderSandwich('Cheese', 'Tomato', 'Lettuce');
orderSandwich('Ham', 'Mustard');
orderSandwich('Pakistan');


// // //task 45

// // Cars: Write a function that stores information about a carin an Object. The function should always
// // recieve a manufacturer and a model name. it should then accept an arbitary number of keyword arguments.
// // Call the function with the required information and two other name-value pairs, such as color or an
// // optional feature. Print the Object that's returned to make sure all the information was stored correctly.

class Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // allow arbitrary additional properties

    constructor(manufacturer: string, model: string, ...args: { [key: string]: any }[]) {
        this.manufacturer = manufacturer;
        this.model = model;
        args.forEach(arg => {
            for (const key in arg) {
                if (arg.hasOwnProperty(key)) {
                    this[key] = arg[key];
                }
            }
        });
    }
}

function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]) {
    const car = new Car(manufacturer, model, ...args);
    console.log(car);
    return car;
}

// Example usage:
const myCar = createCar('Toyota', 'Corolla', { color: 'blue' }, { optionalFeature: 'sunroof' });