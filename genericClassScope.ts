interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>
    get(id: K): T {
        return this.db[id];
    }
    set(id: K, value: T): void {
        this.db[id] = value;
    }
}

const myDB = new InMemoryDatabase();
myDB.set('foo', 'bar');
// myDB.db['foo'] = "baz";
console.log(myDB.get("foo"));

class PersistentMemoryDB<T, K> extends InMemoryDatabase<T, DBKeyType> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB1 = new PersistentMemoryDB<number, string>();
myDB1.set('foo', 22);
console.log(myDB1.saveToString())