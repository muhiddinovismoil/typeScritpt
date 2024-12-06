"use strict";
const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));
function quicksort(arr) {
    if (arr.length <= 1)
        return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = arr.filter((x) => x < pivot);
    const equal = arr.filter((x) => x === pivot);
    const greater = arr.filter((x) => x > pivot);
    return [...quicksort(less), ...equal, ...quicksort(greater)];
}
function mergesort(arr) {
    if (arr.length <= 1)
        return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergesort(arr.slice(0, middle));
    const right = mergesort(arr.slice(middle));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j])
            result.push(left[i++]);
        else
            result.push(right[j++]);
    }
    return result.concat(left.slice(i), right.slice(j));
}
const quicksortStart = performance.now();
quicksort([...array]);
const quicksortEnd = performance.now();
console.log(`Quicksort ishlash vaqti: ${(quicksortEnd - quicksortStart).toFixed(3)} ms`);
const mergesortStart = performance.now();
mergesort([...array]);
const mergesortEnd = performance.now();
console.log(`Mergesort ishlash vaqti: ${(mergesortEnd - mergesortStart).toFixed(3)} ms`);
