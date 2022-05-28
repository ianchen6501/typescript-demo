// interface
interface Car {
    readonly id: number; // readonly value can only be assigned when created
    name: string,
    length: number,
    width: number,
    imported: boolean,
    secondHand? : boolean // optional parameter
}

const myCar: Car = {
    id: 1,
    name: 'Picanto',
    length: 500,
    width: 250,
    imported: true,
    // secondHand: false,
}

// myCar.id = 2 // throw error: 

// index signature
// sometimes we don't know the certain key, but do know the shape. At that case, we could use index signatures
interface Person {
    name: string,
    age: number,
    [prop: string]: any, // if we design a index sinagures, the following types must follow the signature type
}

let tom: Person = {
    name: 'tom',
    age: 50,
    gender: 'male'
}

interface ClassMates {
    1: 'Tom',
    2: 'Sam',
    [prop: number]: string,
}

let myClassMates: ClassMates = {
    1: 'Tom',
    2: 'Sam',
    3: 'Emily',
}