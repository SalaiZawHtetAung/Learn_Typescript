"use strict";
const data = [
    {
        name: "Zaw Htet Aung",
        age: 23,
        gender: "male",
    },
    {
        name: "Khaing Khaing",
        age: 22,
        gender: "female",
    },
];
// console.log(data[1].gender)
//Tuple
const arr = [
    "hello",
    2,
    true,
    { name: "chichi", age: 23 },
];
// console.log(arr);
//any
let age = "chichi";
age = 1,
    age = true;
// console.log(age);
//never
// const printer = (): never => {
//     while(true){
//         console.log("It's OK")
//     }
//     console.log("object");
// }
// printer();
//enum
// enum Gender {
//     male  = 2,
//     female,
//     other,
// }
// type Person = {
//     name: string;
//     gender: Gender;
// }
// const Kaizen: Person = {
//     name: "Kaizen",
//     gender: Gender.male,
// } 
// if(Kaizen.gender === Gender.male){
//     console.log("OK")
// }
let arr1;
arr1 = "Hello";
arr1 = [1, 2, 3];
const sum = (x, y) => {
    return x + y;
};
let calc = sum;
// console.log(calc(1,1));
