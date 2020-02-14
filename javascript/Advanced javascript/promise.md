# Promises:
A promise is an object that may produce a single value sometime in the future. Either a resolved value, or a reason that it's not resolved or rejected. A promise maybe in one of three possible states fulfilled, rejected or pending.
## befor Promise
> exp 1:
 ```js
el.addEventListener("click", submitForm);
```
> exp 2:
 ```js
// callback pyramid of dom
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left', function(){
        movePlayer(40, 'Rught', function(){
            movePlayer(330, 'Left', function() });
        });
    });
})
```
## with Promise
 ```js
movePlayer(100, 'left')
   .then(() => movePlayer(400, 'Left'))
   .then(() => movePlayer(40, 'Right'))
   .then(() => movePlayer(330, 'Left'))
```
## Creating a Promise
 ```js
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke')
    }
})
// One line
promise.then(result => console.log(result));
// Multiple lines
promise
  .then(result => result + '!')
  .then(result2 => {
      console.log(result2);
  })
```
## Catching an Error
 ```js
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke')
    }
})

promise
  .then(result => result + '!')
  .then(result2 => {
      throw Error
      console.log(result2);
  })
  .catch(() => console.log('Errooor!'))
```
The error need to happen befor `catch`, otherwise it wont run.
## Promise for Asynchronous programming
promises are great for asynchronous programming. When you don't want javascript to block the execution of your code like making API calls, grabbing data from a database or maybe optimizing an image you use a promise so that the task happens in the back. when the promise gets resolved or rejected then you'll get that response.
 ```js
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for?')
})
Promise.all([promise, promise2, promise3, promise4])
.then(values => {
      console.log(values);
  })
```
> it took 5 seconds in order to execute, because `Promise.all()` execute according to the longest, which in this case 5 seconds.
## Exemple in real time scenario
```js
const urls = [
    'https://jsonplaceholder.typicode.com/users'
    'https://jsonplaceholder.typicode.com/posts'
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
      console.log(results[0])
      console.log(results[1])
      console.log(results[2])
  }).catch(() => console.log('Error!'))
  //to catch an error if there's one.
```
> So at their most basic promises are a bit like event listeners except a promise can only succeed or fail once it cannot succeed or fail twice. And this is extremely useful for things that are asynchronous. Success and failure such as API calls because we're less interested in the exact time something became available and more interested in reacting to the outcome. So we're reacting to something that happens asynchronously.