/* This is one way of creating classes in TypeScript
class Player {
    // Readonly because once you initially create a first and last name for a player it should not be changeable;
    // Public because we want to indicate that these variables are accessible outside of the class
    public readonly first: string;
    public readonly last: string;
    // Private because we want to indicate that the score variable is only accessible inside of the class
    private score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    };
};
*/

// This is a shortcut way to create a TypeScript class
// "protected" _score method is unable to be changed except for inside of this or any child classes
class Player {
    constructor(public first: string, public last: string, protected _score: number = 0) {
    };
    // Getter methods
    get fullName(): string {
        return `${this.first} ${this.last}`;
    };
    get score(): number {
        return this._score;
    };
    // Setter methods
    set firstName(first: string) {
        this.first = first;
    };
    set lastName(last: string) {
        this.last = last;
    };
};

class Superplayer extends Player {
    isAdmin: boolean = true;
    maxScore() {
        // We can access _score in this class because it is protected and not private
        this._score = 999999999;
    };
};

const devin = new Player("Devin", "Hunter");
// Using the getter methods
console.log(devin.fullName);
console.log(devin.score);
// Using the setter methods
devin.firstName = "Devon";
devin.lastName = "Hinter";
console.log(devin.fullName);

///////////////////////////////////////////////////////////////////////////
// Interfaces and classes

interface Colorful {
    color: string;
};

interface Printable {
    print(): void;
};

// Using our interface to create a class
class Bike implements Colorful {
    constructor(public color: string) { }
};

// We can also do this
class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) { };

    print() {
        console.log(`${this.color} ${this.brand}`)
    };
};

const myBike = new Bike("red");

const myJacket = new Jacket("gucci", "blue");
myJacket.print();

////////////////////////////////////////////////////////////////////////
// Abstract classes

// Cannot instantiate an abstract class. You can only define methods that can be used by a child class
abstract class Employee {
    constructor(public first: string, public last: string) { };
    // This method does not exist here, but it needs to exist in any child class
    abstract getPay(): number;
};

class Janitor extends Employee {
    getPay(): number {
        return 2;
    };
};

class CEO extends Employee {
    constructor(first: string, last: string, private salary: number = 1000000000) {
        // Need to use super() to use the parameters in the Employee class' constructor
        super(first, last);
    };
    getPay(): number {
        return this.salary;
    };
};

const jim = new Janitor("Jim", "Henderson");

console.log(jim.getPay());