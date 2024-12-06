let value: any = "Hello, TypeScript!";
let strLength: number = (value as string).length;
console.log("String Length:", strLength);
// Boshqacha usul
let value2: any = 51;
let numberValue: number = <number>value2;
console.log("Number Value:", numberValue);
