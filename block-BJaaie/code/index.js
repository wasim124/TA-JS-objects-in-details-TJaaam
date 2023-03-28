 
-//Pseudoclassical Pattern
 
 //animal function
 function Animal(location,numberOfLegs){
   this.location =location;
    this.numberOfLegs =numberOfLegs;
  }

    Animal.prototype.eat= function(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    Animal.prototype.changeLocation=function(newLocation){
        this.location =newLocation;
        return this.location;
    }
    Animal.prototype.summary=function(){
       return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
  
  
  // Dog function
  
  function Dog (name,color,location,numberOfLegs){
   Animal.call(this,location, numberOfLegs);
    this.name =name;
    this.color = color;
  }
  
Dog.prototype.bark=function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    Dog.prototype.changeName=function(newName){
        this.name=newName;
        return this.name;
    },
    Dog.prototype.changeColor=function(newColor){
        this.color=newColor;
        return this.color;
    },
    Dog.prototype.summary=function(){
       return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
  
  Object.setPrototypeOf(Dog.prototype,Animal.prototype);
   
  //cat function
  
  function Cat(location,numberOfLegs,name,colorOfEyes){
    Animal.call(this,location, numberOfLegs);
   this.name =name;
  this.colorOfEyes = colorOfEyes;
  }  
    Cat.prototype.meow=function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    Cat.prototype.changeName=function(newName){
        this.name=newName;
        return this.name;
    },
    Cat.prototype.changeColorOfEyes=function(newColor){
        this.colorOfEyes =newColor;
        return this.colorOfEyes;
    },
    Cat.prototype.summary=function(){
       return`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
  Object.setPrototypeOf(Cat.prototype,Animal.prototype);
  
  //Class Pattern
class Animal {
    constructor(location,numberOfLegs){
    this.location =location;
     this.numberOfLegs =numberOfLegs;
   }
    eat(){
         console.log(`I live in ${this.location} and I can eat`);
     }
     changeLocation(newLocation){
         this.location =newLocation;
         return this.location;
     }
     summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
     }
    }

    // Dog function
  
class Dog extends Animal{
    constructor(name,color,location,numberOfLegs){
       super(location, numberOfLegs);
         this.name =name;
         this.color = color;
        }    
 bark(){
         alert(`I am ${this.name} and I can bark 🐶`);
     }
    changeName(newName){
         this.name=newName;
         return this.name;
     }
     changeColor(newColor){
         this.color=newColor;
         return this.color;
     }
     summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
     }

    }
    
   //cat function
   
   class Cat extends Animal{
    constructor(location,numberOfLegs,name,colorOfEyes){
     super(location, numberOfLegs);
    this.name =name;
   this.colorOfEyes = colorOfEyes;
   }  
    meow(){
         alert(`I am ${this.name} and I can do mewo meow 😹`);
     }
     changeName(newName){
         this.name=newName;
         return this.name;
     }
     changeColorOfEyes(newColor){
         this.colorOfEyes =newColor;
         return this.colorOfEyes;
     }
     summary(){
        return`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
     }
    }
  
   