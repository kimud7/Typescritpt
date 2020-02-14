class Person{
    private name : string;

    constructor(name: string){
        this.name = name;
    }
    sayHello(){
        return "hello, " + this.name;
    }
    sayBye(){
        return "bye," + this.name;
    }
}

const person = new Person('lee');

console.log(person.sayHello());

