// Animal constructor function
function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  
  // Animal methods
  Animal.prototype.eat = function() {
    console.log(`I live in ${this.location} and I can eat`);
  };
  
  Animal.prototype.changeLocation = function(newLocation) {
    this.location = newLocation;
  };
  
  Animal.prototype.summary = function() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  };
  
  // Dog constructor function
  function Dog(location, numberOfLegs, name, color) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  
  // Set up inheritance chain
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Dog methods
  Dog.prototype.bark = function() {
    alert(`I am ${this.name} and I can bark 🐶`);
  };
  
  Dog.prototype.changeName = function(newName) {
    this.name = newName;
  };
  
  Dog.prototype.changeColor = function(newColor) {
    this.color = newColor;
  };
  
  Dog.prototype.summary = function() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  };
  
  // Cat constructor function
  function Cat(location, numberOfLegs, name, colorOfEyes) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  
  // Set up inheritance chain
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  // Cat methods
  Cat.prototype.meow = function() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  };
  
  Cat.prototype.changeName = function(newName) {
    this.name = newName;
  };
  
  Cat.prototype.changeColorOfEyes = function(newColor) {
    this.colorOfEyes = newColor;
  };
  
  Cat.prototype.summary = function() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  };
  