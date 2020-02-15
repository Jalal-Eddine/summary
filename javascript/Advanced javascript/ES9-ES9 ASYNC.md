# ES9:
## Object spread operator
```js
const animals = {
    tiger: 23,
    lion : 4,
    monkey: 2,
    bird: 40
}
function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const {tiger, lion, ...rest} = animals;
objectSpread(tiger, lion, rest);
```
This return
> 23, then 5, then {monkey: 2, bird: 40}

# ES9 ASYNC
## finally:
So `finally` is great for those times that you need to run a piece of code no matter what After a `promise`, perhaps you want to send an email to a user regardless of whether their request was successful or failed. Maybe you want to have a little notification icon.
There are many ways to use `finally` and now there is a way to make sure that something happens after a `promise`.
```js
const urls = [
    'https://swapi.co/api/people/1'
    'https://swapi.co/api/people/2'
    'https://swapi.co/api/people/3'
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    throw Error;
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
  }).catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra'));

```
> `finally()` will run regardless of what happen before.

## for await of 
```js
const urls = [
    'https://jsonplaceholder.typicode.com/users'
    'https://jsonplaceholder.typicode.com/posts'
    'https://jsonplaceholder.typicode.com/albums'
]

// ASYNC AWAIT
const getData = async function() {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
    } catch(error) {
        console.log('oops, error!', error)
    }

}
// For await of
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
}
```
The only thing that the `for await of` feature does it allows us to loop through these multiple promises almost as if we're writing synchronous code. So to review we have the `finally` function that we can run at the end of a promise and we have the `for await of` that takes each item from an array of promises that returns to us in the correct order.