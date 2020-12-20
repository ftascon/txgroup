export class Author implements SerializableObject {
    private _name: string;
    private _email: string;

     constructor(name: string, email: string) {
         this._name = name;
         this._email = email;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    public serialize(): any {
        return {
            name: this.name,
            email: this.email,
        };
    }
}
