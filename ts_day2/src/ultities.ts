interface Person {
  name: string;
  age: number;
  gender: string;
}

const Zaw: Partial<Person> = {
};


//Record
const Rec: Record< string, string|number|boolean> = {
    name: "Zaw Htet Aung",
    age: 23,
    gender: "male",
    hasGF: false,
}

/*
    Partial => optional
    Required => required
    Record => key, value defined
    Omit => remove type
    Pick =>  specified key
    Readonly => readonly

*/


