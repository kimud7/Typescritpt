class Person{
    name : string; //es6랑 달리 사전 정의 해줘야한다.
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} is walking.`);
    }
}
const person = new Person('Lee');
person.walk();