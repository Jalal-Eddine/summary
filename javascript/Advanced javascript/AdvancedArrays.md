```js
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
    double.push(num*2);
})
Console.log('forEach', double);
```

# pure functions
-------
## Map:
```js
const mapArray = array.map(num => num *2);
console.log('map', mapArray);
//* multiple line
const mapArray = array.map(num => {num *2});
```
## Filter
```js
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);
```
## reduce
```js
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);//? 5 is the initial accumulator's value.
console.log('reduce', reduceArray);
```