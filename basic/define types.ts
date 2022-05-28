// primitives
let myNumber: number = 24;
let myName: string = "Ian";

// interface
export interface User {
    name: string,
    phoneNumber: number,
    gender: string,
    isAdult: boolean,
}

const user: User = {
    name: "Emily",
    phoneNumber: 0911111111,
    gender: "female",
    isAdult: true,
}

// class
class Ian {
    name: string;
    id: number;
    isMarried: boolean;
    deleted: null | boolean;

    constructor(
        name: string,
        id: number,
        isMarried: boolean,
        deleted: null | boolean,
    ) {
        this.name = name;
        this.id = id;
        this.isMarried = isMarried;
        this.deleted = deleted;
    }
}

// Composing types
// 1. Union
type accepCountries = 'USA' | 'JAPAN' | 'RUSSIA';
type customerNumber = 1 | 2 | 3 | 4 | 5;

// you can use typeOf to get the right type of composing types input
function isEven (number: number | number[]): boolean | boolean[] {
    if (typeof number === 'number') {
        return number % 2 !== 0;
    } 
    return number.map(num => num % 2 !== 0)
}

// 2. generic
// generic provides variables to types
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<{ name: string }>

// you can declare your own types
interface Calculate<Type> {
    add: (numA: number, numB: number) => Type
    get: () => Type
}
declare const calculate: Calculate<number>;

calculate.get();
calculate.add(2, 3);
