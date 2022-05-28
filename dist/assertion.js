"use strict";
// syntax
// <Type>value
// value as Type
// the purpose of assertion is that when we facing a composing type, we could use assertion to make the type more specific
function getLength(sth) {
    if (sth.length) {
        return sth.length;
    }
    else {
        return sth.toString().length;
    }
}
