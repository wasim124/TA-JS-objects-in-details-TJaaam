                         // - [ ] Using function to create object

// function User(name,id,noOfProjects=0){
//     let user ={};
//     user.name =name;
//     user.id =id;
//     user.noOfProjects =noOfProjects;

//     user.getProjects = function() {
//         return this.noOfProjects;
//       };
//     user.changeName = function(newName) {
//         let oldName = this.name;
//         this.name = newName;
//         return oldName;
//     };
//     user.incrementProject = function(value=1) {
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
//       };
//       user.decrementProject  = function(value=1) {
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
//       };
//     return user;
// }
// let user1 = User("John", 1, 5);
// let user2 = User("Alice", 2, 3);

                      // - [ ] Using Object.create (prototypal pattern)

// let userMethods ={

//     getProjects : function() {
//         return this.noOfProjects;
//     },
//     changeName :function(newName) {
//         let oldName = this.name;
//         this.name = newName;
//         return oldName;
//     },
//     incrementProject :function(value=1) {
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
//     },
//     decrementProject :function(value=1) {
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
//     },
// };
// function User(name,id,noOfProjects=0){
//         let user =Object.create(userMethods);
//         user.name =name;
//         user.id =id;
//         user.noOfProjects =noOfProjects;
        
//         return user;
// }

// let user1 = User("John", 1, 5);
// let user2 = User("Alice", 2, 3);


                   // - [ ] Using Pseudoclassical Way

// function User(name,id,noOfProjects=0){
//         let user =Object.create(User.prototype);
//         user.name =name;
//         user.id =id;
//         user.noOfProjects =noOfProjects;
        
//         return user;
// }

// User.prototype ={

//         getProjects : function() {
//             return this.noOfProjects;
//         },
//         changeName :function(newName) {
//             let oldName = this.name;
//             this.name = newName;
//             return oldName;
//         },
//         incrementProject :function(value=1) {
//             this.noOfProjects = this.noOfProjects + value;
//             return this.noOfProjects;
//         },
//         decrementProject :function(value=1) {
//             this.noOfProjects = this.noOfProjects - value;
//             return this.noOfProjects;
//         },
//     };

// let user1 = User("John", 1, 5);
// let user2 = User("Alice", 2, 3);
                 
                //   - [ ] Using Class

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }

  changeName(newName) {
    const oldName = this.name;
    this.name = newName;
    return oldName;
  }

  incrementProject() {
    return ++this.noOfProjects;
  }

  decrementProject() {
    return --this.noOfProjects;
  }
}

let user1 = new User("John", 1, 5);
let user2 = new User("Alice", 2, 3);

// Test 1
console.log(user1.getProjects()); // 5
console.log(user1.changeName("Jane")); // John
console.log(user1.name); // Jane
console.log(user1.incrementProject()); // 6
console.log(user1.decrementProject()); // 5

// Test 2
console.log(user2.getProjects()); // 3
console.log(user2.changeName("Alex")); // Alice
console.log(user2.name); // Alex
console.log(user2.incrementProject()); // 4
console.log(user2.decrementProject()); // 3

