type Transport = {
    readonly model: string;
    readonly madeYear: string;
    hybrid?: boolean;
    price: number;
};
let car: Transport = {
    model: "Tesla Model S",
    madeYear: "2022",
    hybrid: true,
    price: 49999.99,
};
//Readonly orqali yaratsak uni faqat oqiy olamiz uni o'zgartishimizni iloji bo'lmaydi
// car.model = "Tesla Model X";
// car.madeYear = "2023";

console.log("Model:", car.model);
console.log("Made Year:", car.madeYear);
console.log("Price:", `$${car.price}`);
