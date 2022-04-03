interface MyUser {
    name: string;
    id: string;
    email?: string;
}

// interface MyUserOptions {
//     name?: string;
//     id?: string;
//     email?: string;
// }

type MyUserOptional = Partial<MyUser>


const merge = (user: MyUser, overrides: MyUserOptional): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Jack",
    id: "foo",
    email: "abc@gmail.com"
}, { email: 'xyz@gmail.com' }))

type RequiredUser = Required<MyUser>;


type JustEmailAndName = Pick<MyUser, "email" | "name">;

const mapMyId = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapMyId([{
    id: '1',
    name: 'xyz'
},
{
    id: '2',
    name: 'abc'
}]))

type UserWithoutID = Omit<MyUser, 'id'>;

const mapMyId1 = (users: MyUser[]): Record<string, UserWithoutID> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapMyId([{
    id: '1',
    name: 'xyz'
},
{
    id: '2',
    name: 'abc'
}]))