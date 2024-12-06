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
// 3.2 - misol
type UserRole = "admin" | "editor" | "viewer";
function getRoleMessage(role: UserRole): string {
    switch (role) {
        case "admin":
            return "Siz admin roli bilan kirdingiz.";
        case "editor":
            return "Siz editor roli bilan kirdingiz.";
        case "viewer":
            return "Siz viewer roli bilan kirdingiz.";
        default:
            return "Noma'lum rol.";
    }
}
console.log(getRoleMessage("admin"));
console.log(getRoleMessage("viewer"));
