"use strict";
// Generic
// which means when defining functions / interface / class, we don't assign the type. However, we assign the type when we use these variables.
// basic
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'a'); // ['a', 'a', 'a']
createArray(3, 'a'); // ['a', 'a', 'a']
// mutiple generics
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, '7']); // ['7', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// generics can regulate each other
function copyField(target, source) {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}
let myCreateArray;
myCreateArray = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
myCreateArray(5, true); // [true, true, true, true, true]
// generics with class
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
