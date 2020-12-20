import {CommentCollection} from "../Comments/CommentCollection";
import {Author} from "../Author/Author";

export class Post implements SerializableObject {
    private _id: string | null;
    private _image: string;
    private _author: Author;
    private _title: string;
    private _content: string;
    private _comments: CommentCollection;

    constructor(image: string, author: Author, title: string, content: string, comments: CommentCollection, id?: string | null) {
        this._image = image;
        this._author = author;
        this._title = title;
        this._content = content;
        this._comments = comments;
        this._id = (typeof id !== "undefined")
            ? id
            : null;
    }

    get id() {
        return this._id;
    }

    get image(): string {
        return this._image;
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

    get comments(): CommentCollection {
        return this._comments;
    }

    public serialize(): any {
        return {
            id: this.id,
            image: this.image,
            author: this.author.serialize(),
            title: this.title,
            content: this.content,
            comments: this.comments.serialize()
        };
    }
}
