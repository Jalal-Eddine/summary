var firstNumber = prompt("Please provide the first number"); 
var secondNumber = prompt("Please provide the second number"); 
alert(Number(firstNumber) + Number(secondNumber));

var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age.
 // Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

// 6. Removes the last element of an array, and returns that element
array.pop();

// using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
{
	username: "andrei",
	password: "supersecret"
}
// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
*********
Loops:
*********
var todos= [
"go to school",
"learn",
"take the metro back",
"eat and rest"];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
	todos.pop();
}
var counterOne = 0;
while(counterOne< 10){
	console.log(counterOne);
	counterOne++
}
var counterTwo = 10;
do{
	console.log(counterTwo);
	counterTwo--;
}while(counterTwo> 0 );

for (var i = 0; i < todosLength; i++) {
	console.log(todo[i],i);
}
// ECMAScript 5 
todos.forEach(function(todo, i ){
	console.log(todo, i);
})

function logTodos(todo, i ){
	console.log(todo, i)};
todos.forEach(logTodos);	

var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
// var databaseLength = database.length;
function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
			
	if (username === database[i].username && password === database[i].password) {
		return true;
	}
	}
	return false;
}
function signIn(username, password){
	if (isUserValid(username, password)){
		console.log(newsfeed);
	}
	else {
		console.log("Sorry, wrong usernameand password");
	}
}
 var userNamePrompt = prompt("what\'s your username?");
 var passwordPrompt = prompt("what\'s your password?");
 signIn(userNamePrompt, passwordPrompt);


 

