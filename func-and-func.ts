export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

type MutationFunciton = (v: number) => number

export function arrayMutate1(numbers: number[], mutate: MutationFunciton): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const myNewMutateFunc: MutationFunciton = (v: number) => v * 100;

export function crateAdder(num: number): (val: number) => number {
    return (val: number) => num + val;
}

export function crateAdder1(num: number): MutationFunciton {
    return (val: number) => num + val;
}

crateAdder(10)(2);