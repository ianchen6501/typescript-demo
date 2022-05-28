## First of All - Why we need TypeScript
Since Javascript is a dynamic typing language which only check the type when running, which offen throw type error.
So we need a 'static type-checking' tool which is TypeScript!

## INSTALL
`npm install -d -d typescript`

## BASIC COMAND
```ts
    // init and create tsconfig.json
    tsc --init
    // compile
    tsc
    // Emit JS for certain file
    tsc index.ts
    // Emit JS in folder with .ts type
    tsc src/*ts
```

## TS types
Typescript extends the types from JavaScript and has it's own types.

- primitives  
    - string
    - number
    - null
    - undefined
    - symbol(ES6)
    - void(Typescript: return nothing)

- any  
    Could be any types, if there is no asigned type, TS would regard it as any type.

- Object
- array
- function


