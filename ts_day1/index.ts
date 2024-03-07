let male: boolean = true;
let num: number = 1;
let str: string = "Hello World!";

let hello = "hello";

//object

// interface personDT {
//     name: string; age: number; gender: string; hello?: string
// }

type personDT = {
    name: string; age: number; gender: string; hello?: string
};

type NRC = {
    nationality: string;
};

let person: personDT & NRC= {
  name: "Zaw",
  age: 22,
  gender: "male",
  nationality: "Myanmar" 
};


const sum = (x: number , y:number): void =>{
    console.log(x + y);
}