function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((a, c) => {
        forEachFunc(c);
        return undefined
    }, undefined);
}

myForEach(['a', 'b', 'c'], (v) => console.log(v));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
    return items.reduce((a, c) => (filterFunc(c) ? [...a, c] : a), [] as T[]);
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));


function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
    return items.reduce((a, c) => [...a, mapFunc(c)], [] as K[]);
}


console.log(myMap([1, 2, 3, 4, 5, 6], (v) => (v * 10).toString()));
