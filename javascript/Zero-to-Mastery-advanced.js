//* Parte  Advanced****
//****************** */
//? #################
//?     Scope
//? #################
//     todo: scope mean variable access
//? #################
//?     Conditions
//? #################
//! ternary operator
 Condition ? "if true expre1" : "else expre2";
 //todo: exemple:
 //*---------------
 function isUserValid(bool){
     return bool;
 }
 var answer = isUserValid(true) ? "you may enter" : "access denied";
 //todo: exemple2: 
 //*----------------
var automatedAnswer = "you account # is" + (isUserValid(true) ? "12345" : "not available");

//!  switch 
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
//? #################
//?     ES5 & ES6
//? #################
//! let & const:
//* let: it can have a scope even inside if statement.
//* const: for object, the object value can't be reassigned but its properties can.
//! Destructuring:
const obj = {
    player: "baab",
    exp: 100,
    wizardLevel: false
}
const player = obj.player;
const exp = obj.exp;
let wizardLevel = obj.wizardLevel;
//* Now we can do:
const {player , exp} = obj;
let {wizardLevel}= obj;
//! Object Properties:
 //todo: exemple1:
const name = 'john dow';
const obj = {
    [name]: 'hello',
    [1 + 3]: 'hihihi'
}
 //todo: exemple2:
 const a = "simon";
 const b = true;
 const c = {};
 //* before: 
 const obj = {
     a: a,
     b: b,
     c: c
 }
 //* Now if they have the same name
 const obj = {
    a,
    b,
    c
}
//! Template strings:
//* before:
const greeting = "hello" + name + "it\'sblblblblblb" + something + "!";
//*Now with template strings
const name = "sally";
const age = 30;
const pet = "cat";
const greeting = `hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have`;
//? or even better(we can pass default argument):
function greet(name='', age=30, pet='cat'){
    return `hello ${name} you seem to be ${age-10}, what a lovely ${pet} you have`;
}
//! type: Symbol:
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
//* note : sym2 !== sym3 even though they look the same, you make sure there will be never any conflict. most of the times its used for object properties.
//! Arrow functions:
//* before: 
function add(a,b){
    return a + b;
}
//* Now
const add = (a,b) => a+b;//? for single return

