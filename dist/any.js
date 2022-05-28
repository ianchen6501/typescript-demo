"use strict";
// if we set a type to a variable, this variable's type is unchangeable when assigning values.
// however, if we set 'any' type. the variable could be any type.
let myPhoneNumber;
myPhoneNumber = "09001112222";
myPhoneNumber = 12345;
// for 'any' type, is legal to call any method or call any instances
let methods = {};
methods.sayHello();
methods.calculation.add();
console.log(methods.name);
console.log(methods.name.firstName);
// if we don't assign any type in the first, TS will figure it as 'any' type
// let myDatabase;
// console.log(myDatabase.first);
// equals to 
let myDatabaseCopy;
console.log(myDatabaseCopy.first);
