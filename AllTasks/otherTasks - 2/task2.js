"use strict";
function checkValue(value) {
    if (typeof value === "string" || typeof value === "number") {
        return `Qiymat string yoki number: ${value}`;
    }
    else if (typeof value === "boolean") {
        return `Qiymat boolean: ${value}`;
    }
    return "Noma'lum qiymat turi";
}
console.log(checkValue("Hello"));
console.log(checkValue(42));
console.log(checkValue(true));
