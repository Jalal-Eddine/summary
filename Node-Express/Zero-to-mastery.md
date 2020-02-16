# Moduls in Node
-------
## import & export in node.js
* Common way to export and import in javascript
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
* ES6 Method:
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
# Types of Modules:
There's also something called 'built-in modules' and built-in modules are modules that come already pre-installed with Node.
## fs module
```js
const c = require('fs').readFile;
console.log(c);
```
it allows you to read the file system.
That is, if you had a text file and you wanted to read through the text file and extract out how many times the word 'hello' was said, well you can write that by simply using the file system module and using something like `readFile` or `readFileSync` which will output – do something like 'readFile' – it will output the contents of the file and then you can do whatever you want with it.
## HTTP
## NPM
modules from a package
> nodemon: for liveserver

# Building a Server:
```js 
const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)

    response.setHeader('Content-type', 'text/html');//standard way of doing it
    response.end('<h1>Hellooooooo</h1>');
})

server.listen(3000);
```
* With JSON
```js 
const http = require('http');

const server = http.createServer((request, response) => {
    // console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)

    const user = {
        name: 'John',
        hobby: 'skating'
    }
    response.setHeader('Content-type', 'application/json');//standard way of doing it
    response.end(JSON.stringify(user));
})

server.listen(3000);
```
# Express
-----
## Introduction to Express.js 
developers are really really good at making sure they don't keep doing the same thing over and over. And if there's anything that is done over and over they build a tool for it so that it becomes simpler. Well, building servers was one of them.

>npm install express

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {//'/' is the root path
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send("helloooo")
})
app.listen(3000);
```
It automatically does the `JSON.stringify()` and returns a JSON Content-Type an `application/json` Content-Type with the response that is JSON.
```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("getting root")
});
app.get('/profile', (req, res) => {
    res.send("getting profile")
});
app.post('/', (req, res) => {//'/' is the root path
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
});

app.listen(3000);
```
## Express Middleware
order for the middleware to keep passing data through it needs to call 'next'.

The third parameter.
```js
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("<h1>Hellloooo</h1>")
    next();
})

app.get('/', (req, res) => {
    res.send("testest")
});

app.listen(3000);
```
So now by calling `next`  if I refresh I receive 'testest'.
So the middleware, the way it works is we use `app.use()` it gets the requests of the website; the request comes through. We can do whatever we want with it.

## Postman
```js

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("getting root")
});
app.get('/profile', (req, res) => {
    res.send("getting profile")
});
app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('Success');
});

app.listen(3000);
```
## RESTful API:
A REST API defines a set of functions which developers can perform requests and receive responses via a HTTP protocol such as GET, POST, PUT, DELETE.
RESTful API we're able to create an API that is RESTful – something that follows the rules that everybody can agree on so that we have compatibility between different systems.
So a `RESTful API` is an architectural style and it's an approach to communications; an agreed upon set of rules so everyone plays nicely. A `RESTful API` users `GET` to receive a resource, `PUT` to change the state or update a resource, a `POST` that creates a resource, and a `DELETE` to remove it.
```js
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/:id', (req, res) => {
    // console.log(req.query)
    // req.body
    // console.log(req.headers)
    console.log(req.params)
    res.send("getting root")
    res.status(404).send("not Found")
});

app.listen(3000);
```
>Read a static file (HTML)

```js
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3000);
```
## Node File System Module:

```js
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrrrooooorrr');
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// APPEND: add something to a file
fs.appendFile('./hello.txt', 'this is soo cool', err => {
    if (err) {
        console.log(err);
    }
})
// WRITE: create a new file bye.txt with the text inside
fs.writeFile('bye.txt', 'sad to see you go', err => {
    if (err) {
        console.log(err)
    }
})
// DELETE: it will delete the file bye.txt
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Inception')
})
```
>it return 2 before 1

`readFile()` is asynchronous, and that's why it has something called the callback function.

It is saying: hey I'm going to read this file, and when I'm done with it, you just keep going on with your business and keep reading.
When I'm done, I'll let you know and I'll either give you an error or some data. `readFileSync()` which is synchronous says: I'm going to read this file. Don't do anything, just wait here when I'm done, I'm going to assign it to 'file' and then you can keep going.