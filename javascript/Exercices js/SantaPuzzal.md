# Advent of Code:
## Advent of code 2015
### Day 1: Not Quite Lisp 
* [link of the puzzal](https://adventofcode.com/2015/day/1)
* [link of the puzzal](https://adventofcode.com/2015)
#### Solution with Node.js:

```js
// 1- what floor does Santa end up on 
// ( --> should go UP 1 floor 
// ) --> should go DOWN 1 floor
function question1() {
	fs.readFile('./file.txt', (err, data) =>{
		console.time('q1 = santa-time')
		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer = directionsArray.reduce((acc, currentValue)=>{
			if (currentValue === '(') {
				return acc += 1;
			} else if (currentValue === ')') {
				return acc -= 1;
			}
		},0)
		console.timeEnd('q1 = santa-time')
		console.log('floor', answer)
	})
}
question1()

// 2 - when does Santa first enter the basement 
function question2() {
	fs.readFile('./file.text', (err, data) =>{
		console.time('q2 = santa-time');
		const directions = data.toString();
		const directionsArray = directions.split('');
		let accumulator = 0
		let counter = 0
		const answer = directionsArray.some((currentItem)=> {
			if (currentItem === '(') {
				accumulator += 1 
			} else if (currentItem === ')') {
				accumulator -= 1
			}
			counter ++
			return accumulator < 0;
		})
		console.log('basement entered at:', counter);
	})
}
question2()
```
