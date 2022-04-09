type MyFlexibleDogInfo = {
    name: string;
} & Record<string, string>

const dog: MyFlexibleDogInfo = {
    name: 'LG',
    breed: 'MUTT'
}

type MyFlexibleDogInfo1 = {
    name: string;
    [key: string]: string;
}

const dog1: MyFlexibleDogInfo1 = {
    name: 'LG',
    breed: 'MUTT'
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionFlags<Type> = {
    [Property in keyof Type]: null;
}

type DogInfoOptions = OptionFlags<DogInfo>;

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void;
} & {
        [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void;
    }

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "Need to be implemented"
}

const lg: DogInfo = {
    name: 'LG',
    age: 13
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v: string) => { },
    onAgeChange: (v: number) => { },
    onNameDelete: () => { },
    onAgeDelete: () => { }
})

