var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.canDrive = function () {
        console.log("user is", this.name);
        if (this.age >= 16) {
            console.log("allow to drive");
        }
        else {
            console.log("do not allow to drive");
        }
    };
    return Person;
}());
var john = new Person("john", 15);
john.canDrive();
