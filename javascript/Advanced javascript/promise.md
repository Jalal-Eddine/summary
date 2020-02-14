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
promise.then(result => console.log(result));
promise
  .then(result => result + '!')
  .then(result2 => {
      console.log(result2);
  })
```
## Catching an Error
