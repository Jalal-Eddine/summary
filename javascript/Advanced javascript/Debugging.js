const flattened =  [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat((b), []));
//* to understand this array 
const flattened =  [[0,1], [2,3], [4,5]].reduce((accumulator,array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat((array), [])
});
//? Method 2
const flattened =  [[0,1], [2,3], [4,5]].reduce((accumulator,array) => {
   debugger;
    return accumulator.concat((array), [])
}); //in order to see what happen step by step
