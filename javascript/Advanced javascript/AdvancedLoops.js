const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples : 5,
    oranges : 10,
    grapes : 1000
}
//1
for (let i=0; i < basket.length; i++){
    console.log(basket[i]);
}
//2
basket.forEach(item => {
    console.log(item);
})

//! for of:
//? Iterating - arrays, Strings (one by one)
//? both arrays and strings are iterables
for (item of basket){
    console.log(item);
}
for (item of 'basket'){
    console.log(item);
}
//! for in:
//? loop over objects- properties
//? enumerating - objects
for (item in detailedBasket){
    console.log(item)
}
//todo: remarque: for of doesn't loop over an object bec it's not iterable
