//? ##################
//?     ES6 + Webpack2
//? ##################
//js1:
export const add1 = (a,b) => a + b;
//or
export default function add2(a, b) {
    return a + b;
}

//js2
import {add} from './add1';
//or
import add from './add2';