"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function declaration
function sum(x, y) {
    return x + y;
}
// function expression
// left hand side was inferred by TS
const mySum1 = (x, y) => {
    return x + y;
};
// explicitly
const mySum2 = (x, y) => {
    return x + y;
};
let arrIndexOf;
arrIndexOf = (arr, str) => {
    return arr.indexOf(str) !== -1;
};
// optional parameters
// be aware that lastName could only be place in the last place, or TS will regard parameters after optional parameter as optional
function buildName1(firstName, lastName) {
    if (lastName)
        firstName + ' ' + lastName;
    return firstName;
}
// parameter default value
// parameter have default value will not be regulated to be place at the end and will be optional
function buildName2(firstName = "YIMING", lastName) {
    if (firstName)
        firstName + ' ' + lastName;
    return lastName;
}
console.log(buildName2(undefined, "CHEN"));
// rest parameters
function buildArrToStr(...args) {
    return args.reduce((prev, cur) => prev.toString() + cur.toString());
}
console.log(buildArrToStr(1, 2, 3, 4, 5));
function add(a, b) {
    return a + b;
}
