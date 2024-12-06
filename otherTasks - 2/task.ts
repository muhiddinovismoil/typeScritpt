function findCommonElements(array1: number[], array2: number[]): number[] {
    const commonElements: number[] = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        for (let j = 0; j < array2.length; j++) {
            if (element === array2[j] && !commonElements.includes(element)) {
                commonElements.push(element);
                break;
            }
        }
    }
    return commonElements.sort((a, b) => a - b);
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2));
// 1.2 - masala

function getUserInfo(): [string, number, string, boolean] {
    return ["Ali", 30, "Toshkent", true];
}
const userInfo = getUserInfo();
console.log(userInfo);
