interface Database {
    get(id: string): string;
    set(id: String, value: string): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {}
    get(id: string): string {
        return this.db[id];
    }
    set(id: string, value: string): void {
        this.db[id] = value;
    }
}

const myDB = new InMemoryDatabase();
myDB.set('foo', 'bar');
// myDB.db['foo'] = "baz";
console.log(myDB.get("foo"));

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB1 = new PersistentMemoryDB();
myDB1.set('foo', 'bar');
console.log(myDB1.saveToString())