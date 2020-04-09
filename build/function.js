"use strict";
// tipe data balikan function
function getName() {
    return "hello, my name is nusendra";
}
console.log(getName());
function getAge() {
    return 16;
}
function printName() {
    console.log("print name");
}
printName();
// argument type
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(23, 34);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
// default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Hanggarawan"; }
    return first + " " + last;
};
console.log(fullName("Nusendra", "Nasution"));
//  optional parameter
var getUmur = function (val1, val2) {
    return val1 + val2;
};
console.log(getUmur(1, 132));
