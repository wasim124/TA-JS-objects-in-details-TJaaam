// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
   
 function createUser( name , age){
return{
    name:name,
    age:age
};
 }
 let user =createUser ('jhon', 25);
 console.log(user);

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name, age) {
    let user = {
      name: name,
      age: age,
      sayHello: function() {
        alert("Welcome " + this.name);
      }
    };
    return user;
  }



// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let user1 =createUser ('jhon', 25);
let user2=createUser ('jhon', 25);
console.log(user1);
console.log(user2);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

function createUser(name, age) {
    let user = Object.create(createUser.prototype);
    user.name = name;
    user.age = age;
    return user;
  }
  
  createUser.prototype.sayHello = function() {
    alert("Welcome " + this.name);
  };
  

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
  User.prototype.sayHello = function() {
    alert("Welcome " + this.name);
  };
  
  let userOne = new User("John", 25);
  let userTwo = new User("Jane", 30);
  
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

let personOne = new User("John", 25);
let personTwo = new User("Jane", 30);


// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello(); // "Welcome John"
personTwo.sayHello(); // "Welcome Jane"

// 8. Convert the `createUser` function into `User` class.
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      alert("Welcome " + this.name);
    }
  }
  
  let person1 = new User("John", 25);
  let person2 = new User("Jane", 30);
  

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
  
let personOne = new User("John", 25);
let personTwo = new User("Jane", 30);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello(); // "Welcome John"
personTwo.sayHello(); // "Welcome Jane"
