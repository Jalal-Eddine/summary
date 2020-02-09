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