let userName: string = "ABC";
let hasLoggedIn: boolean = true;

userName += " XYZ"

let myNumber: number = 10;

let myRegx: RegExp = /foo/;

const names: string[] = userName.split("");

const myValue: Array<number> = [1, 2];

const myPerson: {
    first: string;
    last: string;
} = {
    first: "jack",
    last: "abc"
}

interface Person {
    first: string;
    last: string;
    cool?: boolean
}

const myPerson1: Person = {
    first: "jack",
    last: "abc"
}


const ids = {
    10: "a",
    20: 'b'
}


// ids[30] = "c";

const ids1: Record<number, string> = {
    10: "a",
    20: 'b'
}

ids1[30] = "c";


if (ids1[30] === 'D') {

}

for (let i = 0; i < 10; i++) { }


[1, 2, 3].forEach((v) => console.log(v));

const out: number[] = [4, 5, 6].map((v) => v * 10);

const out1: string[] = [4, 5, 6].map((v) => `${v * 10}`);

