# Moduls in Node
-------
## import & export in node.js
Common way to export and import in javascript
```js
//file script.js
const test = require('./test.js')
const a = test.numb;
const b = 3;

console.log(a + b);
//file test.js
const number = 333;

module.exports =  {
    numb: number
}; 
```
if we run `script.js` 
>return 336
ES6 Method:
```js
//file 1
import number from 'test.js'

const a = number;
const b = 3;
console.log(a + b);
//file 2
const number = 333;

export default number;
```