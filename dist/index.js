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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This is a shortcut way to create a TypeScript class
// "protected" _score method is unable to be changed except for inside of this or any child classes
var Player = /** @class */ (function () {
    function Player(first, last, _score) {
        if (_score === void 0) { _score = 0; }
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    ;
    Object.defineProperty(Player.prototype, "fullName", {
        // Getter methods
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Player.prototype, "firstName", {
        // Setter methods
        set: function (first) {
            this.first = first;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Player.prototype, "lastName", {
        set: function (last) {
            this.last = last;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Player;
}());
;
var Superplayer = /** @class */ (function (_super) {
    __extends(Superplayer, _super);
    function Superplayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    Superplayer.prototype.maxScore = function () {
        // We can access _score in this class because it is protected and not private
        this._score = 999999999;
    };
    ;
    return Superplayer;
}(Player));
;
var devin = new Player("Devin", "Hunter");
// Using the getter methods
console.log(devin.fullName);
console.log(devin.score);
// Using the setter methods
devin.firstName = "Devon";
devin.lastName = "Hinter";
console.log(devin.fullName);
;
;
// Using our interface to create a class
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
;
// We can also do this
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    ;
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand));
    };
    ;
    return Jacket;
}());
;
var myBike = new Bike("red");
var myJacket = new Jacket("gucci", "blue");
myJacket.print();
////////////////////////////////////////////////////////////////////////
// Abstract classes
// Cannot instantiate an abstract class. You can only define methods that can be used by a child class
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    ;
    return Employee;
}());
;
var Janitor = /** @class */ (function (_super) {
    __extends(Janitor, _super);
    function Janitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Janitor.prototype.getPay = function () {
        return 2;
    };
    ;
    return Janitor;
}(Employee));
;
var CEO = /** @class */ (function (_super) {
    __extends(CEO, _super);
    function CEO(first, last, salary) {
        if (salary === void 0) { salary = 1000000000; }
        // Need to use super() to use the parameters in the Employee class' constructor
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    ;
    CEO.prototype.getPay = function () {
        return this.salary;
    };
    ;
    return CEO;
}(Employee));
;
var jim = new Janitor("Jim", "Henderson");
console.log(jim.getPay());
