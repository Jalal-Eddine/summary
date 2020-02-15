//? ####################
//?      ES7(2016)
//? ####################
//! includes:
'hellooooo'.includes('o');//? true
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog')//?true
//! Exponential operator e(x)
const square = (x) => x**2;
const cube = (x) => y**3;
//? ####################
//?       ES8(2017)
//? ####################
//! PadStart(), PadEnd():
.PadStart()
'Turtle'.PadStart(10);//=>"     Turtle"
.PadEnd()
'Turtle'.PadEnd(10);//=>"Turtle      "
//* 10 total spaces used inluding the string
//! Comma at the end of function:
const fun = (
    a,
    b,
    c,
    d,
) =>{
console.log(a);
}
fun(1,2,3,4,)
//* Now we can add comma to the end of a function in order just to make things a little bit cleaner, it's just syntactic and just make things look a little bit nicer.

//! Object.values & object.entries:
//* In order to turn an object to an array we used Before
Object.keys
//* Now
Object.values
Object.entries 

let obj = {
    username0 : 'santa',
    username1 : 'Rudolf',
    username2 : 'Grinch',
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
//? ####################
//?      ES10 (2019)
//? ####################
//! Flat()
const array = [1,2,[3,4,[5]]];
array.flat()//=> return [1,2,3,4,[5]]
array.flat(2) //=> return [1,2,3,4,5]

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat() //=> ["bob", "sally", "cindy"]

//! flatMap()
const array2 = array.flatMap(num => num + 5);
//=>[6, 7, "3,4,55"] Map and flat the result to a deep of 1.

//! TrimStart() & TrimEnd():
const userEmail = '         eddytheeagle@gmail.com'
const userEmail2 = 'nobody@gmail.com         '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

//! FromEntries:
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
Object.fromEntries(userProfiles);//=>{commanderTom: 23, derekZlander: 40, hansel: 18}
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);//=> it give back the userProfiles array

//! Try ... catch:
//* try something, if there is an error do the inside the catch
try{
    true + 'hi'
}catch{
  console.log('you messed up')
}
//? befor we had to pass a parameter: 
try{
    true + 'hi'
}catch(error){
  console.log('you messed up' + error)
}


