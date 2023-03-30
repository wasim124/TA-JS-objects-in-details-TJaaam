## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output / Hello John
console.log(user2.sayHello()); // output /  Hello Arya
console.log(user.sayHello.call(user2)); // output /  Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // output /  Hey Arya
console.log(user.sayHello.apply(user2, ['Hey'])); // output / Hey Arya
console.log(typeof user.sayHello.bind(user2)); // output / function
console.log(user.sayHello.bind(user2)()); // output / Hello Arya
console.log(userSayHello()); // output / Hello undefined
console.log(typeof userSayHello.bind(user2)); // output /function
console.log(userSayHello.bind(user2)()); // output /Hello Arya undefined
console.log(user3.sayHello()); // output /user3.sayHello is not a function
console.log(userSayHello.apply(user3)); // output / error hello bran
console.log(userSayHello.call(user3)); // output / error hello bran
console.log(typeof new MainUser()); // output / error object
console.log(typeof new MainUser()); // output / error object
console.log(new MainUser().sayHello()); // output / error  hello tyrian
console.log(new MainUser().sayHello.call(user2)); // output / error hello arya
console.log(new MainUser().sayHello.call(user)); // output / error  hello jhon
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / error welcome jhon
```
