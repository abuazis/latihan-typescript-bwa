// tipe data balikan function

function getName(): string {
    return "hello, my name is nusendra";
}

console.log(getName());

function getAge(): number {
    return 16;
}

function printName(): void {
    console.log("print name");
}

printName();

// argument type

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(23, 34);
console.log(result);

// function as type

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// default parameter

const fullName = (first: string, last: string = "Hanggarawan"): string => {
    return first + " " + last;
}

console.log(fullName("Nusendra", "Nasution"));

//  optional parameter

const getUmur = (val1: number, val2: number): number => {
    return val1 + val2;
}

console.log(getUmur(1, 132));