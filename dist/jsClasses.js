class Player {
    // The # score creates a private variable that can only be used inside the class
    #score = 0;
    // Every time you create a new instance of your class, the constructor method is called
    // Put anything in here you want to run every time you create a class instance
    constructor(username, score) {
        this.username = username;
        this.score = score;
    };
    // This getter method is a way to access the private variable score outside of the class 
    get score() {
        return this.#score;
    };
    // Setter method
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        };
        this.#score = newScore;
    };
    incrementScore() {
        this.#score++;
    };
    taunt() {
        console.log(`I, ${this.username}, fucked your mom!`);
    };
};

const Devin = new Player("Devin", 1010);

Devin.taunt();
console.log(Devin.score);
Devin.score(1000);
console.log(Devin.score);