"use strict";
function swap(a, b) {
    return [b, a];
}
let [x, y] = swap(5, 10);
console.log(x, y);
let [firstName, lastName] = swap("John", "Doe");
console.log(firstName, lastName);
let [isAvailable, isOpen] = swap(true, false);
console.log(isAvailable, isOpen);
