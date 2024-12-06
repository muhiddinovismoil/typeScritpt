function assertString(input: any): void {
    if (typeof input !== "string") {
        throw new Error("Input is not a string");
    }
}
try {
    assertString("hello");
    console.log("Input is a string");
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error("Unknown error");
    }
}
// try {
//     assertString(123);
// } catch (err) {
//     if (err instanceof Error) {
//         console.error(err.message);
//     } else {
//         console.error("Unknown error");
//     }
// }
