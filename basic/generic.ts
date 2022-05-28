// Generic
// which means when defining functions / interface / class, we don't assign the type. However, we assign the type when we use these variables.

// basic
function createArray<T = string>(length: number, value:T): T[] { // generic can combined with default types
    let result: T[] = [];
    for(let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'a'); // ['a', 'a', 'a']
createArray(3, 'a'); // ['a', 'a', 'a']

// mutiple generics
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, '7']) // ['7', 7]

// generic regulation
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T):T { // use extending interface to regulate argument
    console.log(arg.length);
    return arg;
}

// generics can regulate each other
function copyField<T extends U, U>(target: T, source: U): T {
    for(let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

// generics with function
interface CreateArray {
    <T>(length: number, value: T): Array<T>;
}

let myCreateArray: CreateArray;
myCreateArray = function <T>(length: number, value: T) { 
    let result: T[] = [];
    for(let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

myCreateArray<boolean>(5, true); // [true, true, true, true, true]

// generics with class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };