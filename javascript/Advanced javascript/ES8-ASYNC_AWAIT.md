# ES8-ASYNC AWAIT
Async Await is part of ES8 and is built on top of promises. Now underneath the hood an async function is a function that returns a promise. But the benefit of Async Await is that it makes code easier to read.
> With Promise
 ```js
movePlayer(100, 'left')
   .then(() => movePlayer(400, 'Left'))
   .then(() => movePlayer(40, 'Right'))
   .then(() => movePlayer(330, 'Left'))
```
> With ASYNC AWAIT
 ```js
async function playerStart(){
    const firstMove = await movePlayer(100, 'Left');//pause
    await movePlayer(400, 'Left');//pause
    await movePlayer(10, 'Left');//pause
    await movePlayer(330, 'Left');//pause
}
```
The goal with async await is to make code look synchronous - a code that's asynchronous look synchronous. 
async await code are just promises. Underneath the hood we call this 'syntactic sugar' something that still does the same thing but is just different syntax to make it look prettier.
 ```js
async function playerStart(){
    const first = await movePlayer(100, 'Left');//pause
    const second = await movePlayer(400, 'Left');//pause
    await movePlayer(10, 'Left');//pause
    await movePlayer(330, 'Left');//pause
}
```
Now the cool thing about this is that instead of chaining it like this I can now assign just like asynchronous programming, variable first to await this and I can assign second to await this and first and second will have the result of each function but in a variable. So it looks very synchronous. You're not using '.then' you're not chaining.
## More realistic exemple
> exmp1
```js
//promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)
// ASYNC AWAIT
    async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}
```
> exmp2
```js
// promise
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

// ASYNC AWAIT
const getData = async function() {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
    } catch(error) {
        console.log('oops, error!', error)
    }
// it's important to give catch a parametre 'error'
}
```
### setState


You can call a function after the state value has updated:
```js
this.setState({foo: 'bar'}, () => { 
    // Do something here. 
});
```
Also, if you have lots of states to update at once, group them all within the same setState:

Instead of:
```js
this.setState({foo: "one"}, () => {
    this.setState({bar: "two"});
});
```
Just do this:
```js
this.setState({
    foo: "one",
    bar: "two"
});

