var Encapsulator = /** @class */ (function () {
    function Encapsulator(name) {
        this.name = name;
    }
    Object.defineProperty(Encapsulator.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Encapsulator.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Encapsulator;
}());
var encapsulator = new Encapsulator("John");
// console.log(encapsulator.name);
console.log(encapsulator.getName);
