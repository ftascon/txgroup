export abstract class Collection implements Iterable<SerializableObject> {
    protected readonly collection: SerializableObject[];
    protected position: number;

    public constructor(arrayElements?: SerializableObject[]) {
        if (typeof arrayElements !== "undefined") {
            this.collection = arrayElements;
        } else {
            this.collection = [];
        }
        this.position = 0;
    }

    public add(object: any): void {
        this.validateAdd(object);

        this.collection.push(object);
    }

    protected abstract validateAdd(object: any): boolean;

    public serialize(): any {
        return this.collection.map((object) => {
            return object.serialize();
        });
    }

    public [Symbol.iterator](): IterableIterator<SerializableObject> {
        // @ts-ignore
        return this;
    }
}
