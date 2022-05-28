// syntax
// <Type>value
// value as Type

// the purpose of assertion is that when we facing a composing type, we could use assertion to make the type more specific
function getLength(sth: string | number) {
    if((<string>sth).length) {
        return (<string>sth).length;
    } else {
        return sth.toString().length;
    }
}