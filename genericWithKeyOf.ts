function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map(item => item[key]);
}

const persons = [
    { name: 'abc', age: 20 },
    { name: 'xyz', age: 25 }
]

console.log(pluck(persons, 'age'));
console.log(pluck(persons, 'name'));


interface BaseEvent {
    time: number;
    user: string;
}


interface EventMap {
    addToCart: BaseEvent & { quantity: number, productID: string; },
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
    console.log([name, data]);
}

sendEvent('addToCart', { productID: 'foo', time: 20, user: 'test', quantity: 10 })
sendEvent('checkout', { time: 20, user: 'test' })