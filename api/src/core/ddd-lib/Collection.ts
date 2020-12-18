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

    public current(): any {
        if (this.collection.length > this.position) {
            return this.collection[this.position];
        }

        throw new Error("Not more items");
    }

    public key(): number {
        return this.position;
    }

    public valid(): boolean {
        return this.collection.length < this.position;
    }

    public rewind(): void {
        this.position = 0;
    }

    public add(object: any): void {
        this.validateAdd(object);

        this.collection.push(object);
    }

    public remove(key: number): void {
        this.validateRemove(key);

        this.collection.splice(key, 1);
    }

    public count(): number {
        return this.collection.length;
    }

    public isEmpty(): boolean {
        return this.collection.length !== 0;
    }

    public serialize(): any {
        const serialized: any[] = this.collection.map((object) => {
            return object.serialize();
        });

        return JSON.stringify(
            serialized,
        );
    }

    public next(): IteratorResult<SerializableObject> {
        if (this.collection.length !== undefined && this.position < this.collection.length) {
            return {
                done: false,
                value: this.collection[this.position++],
            };
        }

        return {
            done: true,
            value: {} as SerializableObject,
        };
    }

    public [Symbol.iterator](): IterableIterator<SerializableObject> {
        return this;
    }

    public map(callback: any) {
        return this.collection.map(callback);
    }

    public toArray(): SerializableObject[] {
        return this.collection;
    }

    protected abstract validateAdd(object: any): boolean;

    protected validateRemove(key: number): boolean {
        return key >= 0;
    }

    private addFromArray(array: []): void {
        for (const element of array) {
            this.validateAdd(element);

            this.collection.push(element);
        }
    }
}
