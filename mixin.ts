function myLogFunction() {
    return (str: string) => {
        console.log(str);
    }
}

function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = "";

        log(str: string) {
            console.log(str);
            this.completeLog += str + "\n";
        }

        dumpLog() {
            return this.completeLog
        }
    }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());


function CreateSimpleMemberDatabase<T>() {
    return class SimpleMEmberDatabase {
        private db: Record<string, T> = {};

        set(id: string, value: T) {
            this.db[id] = value;
        }

        get(id: string): T {
            return this.db[id];
        }

        getObject(): object {
            return this.db
        }
    }
}

const StringDatabase = CreateSimpleMemberDatabase<string>();
const sbd1 = new StringDatabase();
sbd1.set('a', 'test');

const NumberDatabase = CreateSimpleMemberDatabase<number>();
const sbd2 = new NumberDatabase();
sbd2.set('a', 11);

type Constructor<T> = new (...args: any[]) => any;

function Dumpable<T extends Constructor<{
    getObject(): object;
}>>(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject())
        }
    }
}

const DumpableStringDatabse = Dumpable(StringDatabase);
const sbd3 = new DumpableStringDatabse();
sbd3.set('a', 'test');
sbd3.dump();
