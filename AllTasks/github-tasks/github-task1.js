"use strict";
const arr = [
    "Hello World",
    12,
    "Alibek",
    "Ganibek",
    1,
    2,
    5,
];
arr.forEach((item) => {
    if (typeof item === "string") {
        console.log(`Bu string element: ${item}`);
    }
    else if (typeof item === "number") {
        console.log(`Bu number element: ${item}`);
    }
});
