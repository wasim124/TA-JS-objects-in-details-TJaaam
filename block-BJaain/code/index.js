console.log(this.document === document); // Output true , since in browser environment 'this' keyword inside global scope points to window object that contains the document property, and therefore window.document and document refer to the same object.

// ------------

console.log(this === window); //Output true, as this keyword inside global scope points to window object in browser environment.

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output Here, since myFunction is called without any object, 'this' keyword inside it will point to the global object(window object in browser), and therefore it will output window object.

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //Output false,, in strict mode 'this' keyword inside a function doesn't point to the global object. In this case, since f1 is called without any object, 'this' inside it will point to undefined.

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Output ??  Here, foo is called without any object, so 'this' keyword inside it points to window object. Therefore, it will output true.

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); //Output Here, since the anonymous function is called without any object, 'this' inside it will point to window object. Therefore, it will output true.

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This, Here, myObject is the object calling the someMethod() function, so 'this' keyword inside the function points to myObject. Therefore, it will output myObject.

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output jhon reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output paul adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Output: Here, the 'this' keyword inside foo function will point to the user object, since the function is called as a method of user object. Therefore, it will output false.
let fun1 = user.foo1;
fun1(); // Output: Here, fun1 is a reference to the foo1 function, which is called without any object, and therefore 'this' inside it will point to window object. Therefore, it will output true.

user.foo1(); // Output: Here, 'this' keyword inside foo1 function will point to the user object since it's called as a method of user object. Therefore, it will output false.



// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // Output 81

var retrieveX = obj.getX;
retrieveX(); //Output 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // Output 81

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output John Reed
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output Paul Adams


person.displayName.call(person2); // Output Paul Adams

// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output global window
obj.getThis();

// Output This will also return the global object, for the same reason as above. The argument passed to call() is ignored in arrow functions.
obj.getThis.call(a);

// Output This will return the obj object because getThis2 is a regular function and has its own this binding, which is set to the object it was called on (obj).
obj.getThis2();

// Output This will return the a object because call() sets the this binding explicitly to the argument passed (a in this case).
obj.getThis2.call(a);

// Output global window
obj.getThis3();

// Output The output of obj.getThis4() will be the obj itself.


obj.getThis4();

// -------------

let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // output hello, Jay


let greet = person.greet;
greet(); // output hello

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // output? Jay Details
console.log(person.print()); // output? Jay Person

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // output? Jay Global
console.log(name2.print()); // output? Jay Details

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()(); //error

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Output ???
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // Output ???
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // output?? Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // Output and why ??? The output of getSecondData() will be undefined.In the code, getSecondData is created by calling the bind method on obj2.printSecondData and passing obj1 as the argument. This creates a new function that has the this value set to obj1 when called.However, obj1 does not have a printSecondData method, so when getSecondData() is called, it will return undefined.It's important to note that the bind method creates a new function and does not modify the original function. In this case, obj2.printSecondData remains unchanged and still refers to obj2.data

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // output ??? Hey, mom just called.


// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // output ??? Hey, undefined just called.

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // output ?? undefined called, too!
