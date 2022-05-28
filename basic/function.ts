import { createUnparsedSourceFile } from "typescript";

// function declaration
function sum(x:number, y:number):number {
    return x + y;
}

// function expression
// left hand side was inferred by TS
const mySum1: (x:number, y:number) => number = (x:number, y:number):number => {
    return x + y;
}

// explicitly
const mySum2: (x:number, y:number) => number = (x:number, y:number):number => {
    return x + y;
}

// use interface
interface IndexOfFunc {
    (arr: string[], str: string) : boolean,
}

let arrIndexOf: IndexOfFunc;
arrIndexOf = (arr: string[], str: string):boolean => {
    return arr.indexOf(str) !== -1;
}

// optional parameters
// be aware that lastName could only be place in the last place, or TS will regard parameters after optional parameter as optional
function buildName1(firstName: string, lastName?: string): string {
    if(lastName) firstName + ' ' + lastName;
    return firstName;
}

// parameter default value
// parameter have default value will not be regulated to be place at the end and will be optional
function buildName2(firstName: string = "YIMING", lastName: string): string {
    if(firstName) firstName + ' ' + lastName;
    return lastName;
}
console.log(buildName2(undefined, "CHEN"));

// rest parameters
function buildArrToStr(...args: any[]):string {
    return args.reduce((prev, cur) => prev.toString() + cur.toString());
}
console.log(buildArrToStr(1,2,3,4,5));

// function overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b:any): any {
    return a + b;
}