function findMaxPositive(...arr: number[]): number {
    let max: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}
console.log(findMaxPositive(1, -2, 3, 4, -5));
