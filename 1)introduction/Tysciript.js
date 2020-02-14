var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "hello, " + this.name;
    };
    Person.prototype.sayBye = function () {
        return "bye," + this.name;
    };
    return Person;
}());
var person = new Person('lee');
console.log(person.sayHello());
