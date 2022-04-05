interface Cat {
    name: string;
    breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
    return {
        name,
        breed
    }
}

const usul = makeCat('USul', 'Taddy');
// usul.name = 'Piter';



const makeCoordinate = (x: number, y: number, z: number): readonly [number, number, number] => {
    return [x, y, z];
}

const c1 = makeCoordinate(10, 29, 39);
// c1[0] = 50;


const arr = [10, 20, , 30] as const;
// arr[0] = 40;