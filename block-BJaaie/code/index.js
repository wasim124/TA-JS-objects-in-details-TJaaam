 
-//Pseudoclassical Pattern
 
 //animal function
 function createAnimal(location,numberOfLegs){
    let obj =Object.create(animalMethods);
    obj.location =location;
    obj.numberOfLegs =numberOfLegs;
    return obj;
  }

// animal methods
let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation){
        this.location =newLocation;
        return this.location;
    },
    summary(){
        console.log( `I live in ${this.location} and I have ${this.numberOfLegs}`);
    },
  };
  
 
  
  // Dog function
  
  function createDog (name,color,location,numberOfLegs){
   let obj =createAnimal(location,numberOfLegs);
   Object.setPrototypeOf(obj,dogMethods);
    obj.name =name;
    obj.color = color;
    return obj;
  }


  //Dog Methods
  
  let dogMethods={
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName){
        this.name=newName;
        return this.name;
    },
    changeColor(newColor){
        this.color=newColor;
        return this.color;
    },
    summary(){
       return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
  };
  Object.setPrototypeOf(dogMethods,animalMethods);
  
  //cat function
  
  function createCat(location,numberOfLegs,name,colorOfEyes){
    let obj =createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(obj,dogMethods);
     obj.name =name;
     obj.colorOfEyes = colorOfEyes;
     return obj;
  }
  
  //cat methods
  
  let catMethods={
    meow:function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName:function(newName){
        this.name=newName;
        return this.name;
    },
    changeColorOfEyes:function(newColor){
        this.colorOfEyes =newColor;
        return this.colorOfEyes;
    },
    summary:function(){
       return`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
  };
  Object.setPrototypeOf(catMethods,animalMethods);
  
  