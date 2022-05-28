"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// primitives
let myNumber = 24;
let myName = "Ian";
const user = {
    name: "Emily",
    phoneNumber: 0911111111,
    gender: "female",
    isAdult: true,
};
// class
class Ian {
    constructor(name, id, isMarried, deleted) {
        this.name = name;
        this.id = id;
        this.isMarried = isMarried;
        this.deleted = deleted;
    }
}
// you can use typeOf to get the right type of composing types input
function isEven(number) {
    if (typeof number === 'number') {
        return number % 2 !== 0;
    }
    return number.map(num => num % 2 !== 0);
}
calculate.get();
calculate.add(2, 3);
