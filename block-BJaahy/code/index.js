class Square {
    constructor(side){
        this.width= side;
        this.height = side;
    }
    description(){
        console.log(`The square is ${this.width} x ${this.height}`)
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.calcArea();
    }
    set area(value){
        let side = Math.sqrt(value);
        this.width =side;
        this.height = side;
    }
    static isEqual(square1, square2){
        return square1.area ===square2.area;
    }

}
let s1 = new Square(6);
let s2 = new Square(8);

console.log(s1.area);
console.log(s2.area);

console.log(Square.isEqual(s1,s2));
console.log(Square.isEqual(s1, new Square(6)));


/////////



class User{
    constructor(firstName, lastName){
        this.firstName =firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name){
        
        if (name.length < 5){
            alert(`Full name should be more than 5 characters`);
            return;
        }
        let [firstName, lastName] = name.split(' ');
        this.firstName =firstName;
        this.lastName = lastName;
    }
    nameContains(text) {
        return this.fullName.toLowerCase().includes(text.toLowerCase());
      }
}
let user1 = new User('Jon', 'Snow');
let user2 = new User('Daenerys', 'Targaryen');

user1.fullName = 'Arya Stark'; // first name is updated to "Arya"
user2.fullName = 'Jorah Mormont'; // both names are updated

user1.fullName = 'Sam'; // message is displayed
user2.fullName = 'Davos'; // message is displayed

console.log(user1.fullName); // "Arya Stark"
console.log(user2.fullName); // "Jorah Mormont"

console.log(user1.nameContains('Stark')); // true
console.log(user2.nameContains('tyrion')); // false