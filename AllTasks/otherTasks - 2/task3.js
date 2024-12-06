"use strict";
function findMaxPositive(...arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}
console.log(findMaxPositive(1, 6, -2, 3, 4, -5));
