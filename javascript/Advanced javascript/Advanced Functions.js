//? ####################
//?  Advanced Functions
//? ####################
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);//? closure 'greet'
    }
    return second;
}
const newFunc = first ();
newFunc();
//! Closures:
// Rule in javascript
// child scope always has access to the parent's scope.
//'closures' is just saying a function ran, the function executed, it's never going to execute again. But it's going to remember that there are references to those variables. So the child scope always has access to the parent scope.

//! Currying:
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); //? 3 * b;
curriedMultiply(3)(5); //? 3 * 5;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(8); //? 8 * 5;

//! Compose:
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
//result 7. its like fog(x)= f(g(x));
//* exemple 2:
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//! Avoiding Side Effects, functional purity:
var a = 1;
function b(){
    a = 2; //? Side Effect, it doing something to change the outside scope.
}//?make sure that a function always return something we know (a value)(we know exactly what it does) 
//*It is really really good practice to be a top performing developer to have this in mind, of creating functions that minimize side effects and have functional purity. What we call 'Determinism', where anything you put into the function it always returns the same thing.
//What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

//? ####################
//?  Advanced Arrays
//? ####################