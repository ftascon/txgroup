import {PostCollection} from "../../../Domain/Posts/PostCollection";

export class PostsResponse implements SerializableObject {
    private readonly _posts: PostCollection;

    constructor(posts: PostCollection) {
        this._posts = posts;
    }

    get posts(): PostCollection {
        return this._posts;
    }

    public serialize(): any {
        return {
            posts: this.posts.serialize(),
        };
    }
}
