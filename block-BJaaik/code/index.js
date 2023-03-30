class Person {
    constructor (name,age,gender){
    this.name = name;
    this.age = age;
    this.gender=gender;
    }
   eat(){

   } 
   sleep(){

   }
   walk(){

   }
}

class Player extends Person {
    constructor (name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName =sportsName;
    }
    play(){

    }
}

class Teacher extends Person {
    constructor (name,age,gender,institueName){
        super(name,age,gender);
        this.institueName =institueName;
    }
    teach(){

    }
}
class Artist extends Person {
    constructor (name,age,gender,kind){
        super(name,age,gender);
        this.kind =kind;
    }
    createArt(){

    }
}

class Cricketer extends Player {
    constructor (sportsName, teamName){
        super(sportsName );
        this.teamName =teamName;
    }
    playCrickete(){

    }
}

