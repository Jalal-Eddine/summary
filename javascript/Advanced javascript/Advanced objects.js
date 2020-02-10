//! Reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};//? defrent object: object1 != object3

 //! Context vs Scope 

 const object4 = {
     a: function() {
         console.log(this);
     }
 }

 //! Instantiation
 class Player {
     constructor(name, type){
         console.log('player', this);
         this.name = name;
         this.type = type;
     }
     introduce() {
        console.log(`Hi I am ${this.name}, I'am a ${this.type}`)
     }
 }
 class Wizard extends Player {
     constructor(name, type) {
         super(name, type)
         console.log('wizard', this);
     }
     play() {
         console.log(`Weeeeeee I'am a ${this.type}`);
     }
 }
 const wizard1 = new Wizard('Shelly', 'Healer');
 const wizard2 = new Wizard('shawn', 'Dark Magician');

 //! Pass by reference VS Pass by Value:
 //* pass by value create a new space in the memory
 //* pass by reference assign a space in the memory to a variable
 //? create a Clone
 let obj = {a: 'a', b: 'b', c: 'c'};
 let obj2 = obj;
 let clone = Object.assign({}, obj);
 let clone2 = {...obj}; //Another way of cloning
 // if we do 
 obj.c  = 5;
 console.log(obj2)//will be effected
 console.log(clone) // will not be effected
 //? Deep cloning:
 let obj = {a: 'a', b: 'b', c: {
     deep: 'try and copy me'
 }};
 let superClone = JSON.parse(JSON.stringify(obj));
console.log(superClone);

//! Type coercion:
//mean the language converting a certain type to another type.
1 == '1'; //? True
1 === '1'; //? False
=== //*three equals in JavaScript means compare to values. But don't try and curse the values be explicit with your comparison and do exactly what I tell you. 
== //* double equal sign simply means compare the two values and if they have different types try to coerce one into the same type.