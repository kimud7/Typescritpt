function multply(x, y) {
    return x * y;
}
var multply2 = function (x, y) { return x * y; };
// boolean
var IsBoolean = false;
// null
var IsNull = null;
var IsNull2 = null;
// undefined
var IsUndefined = undefined;
// number
var int = 3;
var hex = 0xf00d;
var binary = 10;
var float = 3.14;
// String
var Stranger = "kim";
Stranger = "park";
//object
var obj = {};
//array
var list1 = [1, "two", true];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3];
var tuple;
tuple = ["hello", 10];
//tuple = [10,`hello`]; error
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1);
var notSure = 4;
notSure = "kimundong";
function warnUser() {
    console.log("this is my warining Message");
}
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
var primiteveStr;
primiteveStr = "hello";
//primiteveStr = new String(`hello`); ERROR S,s의 차이는 객체와 원시 타입문자열
console.log(typeof primiteveStr);
