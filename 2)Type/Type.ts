function multply(x:number,y:number):number{
    return x*y;
}
const multply2 = (x:number,y:number):number => x*y;
// boolean
let IsBoolean: boolean = false;

// null
let IsNull: null = null;
let IsNull2: null = null;

// undefined
let IsUndefined = undefined;

// number
let int : number = 3;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let float : number = 3.14 ;

// String
let Stranger: string = "kim";
Stranger = "park";

//object
const obj : object = {};

//array
let list1 : any[]= [1,`two`,true];
let list2 : number[]=[1,2,3];
let list3 : Array<number> =[1,2,3];

let tuple: [String,number];
tuple = [`hello`,10];
//tuple = [10,`hello`]; error

enum Color1 {Red,Green,Blue};
let c1 : Color1 = Color1.Green;
console.log(c1);

let notSure: any =4;
notSure = `kimundong`;

function warnUser(): void{
    console.log(`this is my warining Message`);
}

function infiniteLoop(): never{
    while(true){}
}

function error(message: string): never{
    throw new Error(message);
}

let primiteveStr : string;
primiteveStr = `hello`;
//primiteveStr = new String(`hello`); ERROR S,s의 차이는 객체와 원시 타입문자열
console.log(typeof primiteveStr);
