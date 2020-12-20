import {Author} from "../Author/Author";

export class Comment implements SerializableObject {
    private _id: string | null;
    private _author: Author;
    private _title: string;
    private _content: string;

    constructor(author: Author, title: string, content: string, id?: string | null) {
        this._author = author;
        this._title = title;
        this._content = content;
        this._id = (typeof id !== "undefined")
            ? id
            : null;
    }

    get id() {
        return this._id;
    }

    get author(): Author {
        return this._author;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    public serialize(): any {
        return {
            id: this.id,
            author: this.author.serialize(),
            title: this.title,
            content: this.content,
        };
    }
}
