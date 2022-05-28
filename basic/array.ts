// basic
let fibonacci: number[] = [];
// fibonacci.push('1'); //throw error

// generic
let fibonacciGeneric: Array<string> = [];

// interface
interface StringArray {
    [index: number]: string;
}

let myStringArray: StringArray = ['s', 't', 'r', 'i', 'n', 'g'];

// Array-like-object
// use interface for array types is not common. However, for Array-like-object is very useful.
function sum() {
    let args: {
        [index: number]: number;
        length: number,
        callee: Function 
    } = arguments; //or use IArguments directly
}