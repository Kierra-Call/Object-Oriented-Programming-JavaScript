// Class
// Blueprint of information of what an object should be
const book = {
    title: "JS is the best!",
    pages: 9001,
    author: "Sam",
    isCool: true
}

class Book {
    //Defaults 
    constructor(bookTitle, pages, author,isCool) {
        //Attributes
        this.title = bookTitle;
        this.pages = pages;
        this.author = author;
        this.isCool = isCool;
    }
}

// Instantiate
const coolBook = new Book("The Art of War", 200, "Sun Tzu", true)
console.log(coolBook);

class Human {
    constructor(name, power) {
        this.health = 100;
        this.power = power;
        this.name = name;
    }
    //Methods - ACTIONS the class can DO
    // Do not need the word function
    eat(){
        console.log(`${this.name} is eating and their health is now + 10`);
        this.health += 10;
        return this
    }
}

const bob = new Human("Bob", 50);
console.log(bob)
bob.eat().eat().eat()
console.log(bob)

// --- Inheritance --- 
class Superhero extends Human {
    constructor(name, speed, health, power=1000) {
        super(name, power, speed);
        this.speed = speed;
    }

    fly() {
        console.log(`${this.name} flies away`);
        this.health -= 10;
        return this;
    }

    fight(anotherClass) {
        console.log(`${this.name} is attacking ${anotherClass.name}`);

    }
}

const crayon = new Superhero("Crayon", 500, 200, 9001);
console.log(crayon);
crayon.eat() //  Because Superhero is inheriting methods from Human
crayon.fly()
const timmy = new Superhero ("Timmy", 1000, 200, 600)
timmy.fight(crayon);
crayon.fight(bob);