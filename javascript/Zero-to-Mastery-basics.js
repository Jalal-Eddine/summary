//* Parte 1 basics****
//****************** */
//? #################
//?     Conditions
//? #################
//     todo
//? #################
//?     Functions
//? #################
//! function declaration:
function multiplay(a,b){
    return a*b;
} 
//! function expression:
var newFunction = function(){
    //expression
};// Notice function expression ends in a semicolon
//! Calling or invoking a function:
var total = multiply(4,5);
newFunction(param1,param2);
alert(total);
parameters: a,b;
arguments: 4,5;

//? #################
//?     Arrays
//? #################
//todo) The Array object is used to store multiple values in a single variable.
//! Declaration
//! -----------
var list = ["tiger", "cat" , "bear"];
//! Access an Array
//! ---------------
list[0];
//! Array Methods
//! -------------
// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order. 
array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push('Kiwi');
// 4. Remove "Apples" from the array.
array.splice(0, 1);
// 5. Sort the array in reverse order. 
array.reverse();
// 6. Removes the last element of an array, and returns that element
array.pop();
// 7. Joins two or more arrays, and returns a copy of the joined arrays (create new one)
array.concat();

//? #################
//?     Objects
//? #################
//todo) objects are collections of property
//! Declaration
//! -----------
var user ={
	username: "andrei",
    password: "supersecret",
    age= 34,
    isMarried: false,
    skills:["web dev", "design", "marketing"],
    //! function inside a object is a Method 
    shout: function(){
        console.log("lalalalalalal");
    }
};
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
//! Access 
//! ---------------
user.skills; //to show the array
user.skills[1]; //return "supersecret"
user.shout(); //return "lalalalalal"
newsfeed[0].username; //return Bobby
//****************************** */
//! Function vs methods:
//todo) Declaration:
function thisIsAFunction(){};
var Obj = {
     thisIsAMethod:function(){}
} 
//todo) Access:
thisIsAFunction();
Obj.thisIsAFunction();

//? #################
//?     Loops
//? #################
var todos= [
    "go to school",
    "learn",
    "take the metro back",
    "eat and rest"];
    var todosLength = todos.length;
    //! for loop
    //!----------
    for (var i = 0; i < todosLength; i++) {
        todos.pop();//Removes the last element of an array, and returns that element
    }
    //! while loop
    //!-----------
    var counterOne = 0;
    while(counterOne< 10){
        console.log(counterOne);
        counterOne++
    }
    //! do while loop
    //!-----------
    var counterTwo = 10;
    do{
        console.log(counterTwo);
        counterTwo--;
    }while(counterTwo> 0 );
    
    for (var i = 0; i < todosLength; i++) {
        console.log(todo[i],i);
    }
    //! ECMAScript 5
    //!------------- 
    //* Syntax 1
    todos.forEach(function(todo, i ){//? todo is equal to todos[i]
        console.log(todo, i); //? i is equal to the index i ==> a number
    })
    //* Syntax 2 : better
    function logTodos(todo, i ){
        console.log(todo, i)};
    todos.forEach(logTodos);	
     
    //! APPLICATION
    //!-------------
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
    
    