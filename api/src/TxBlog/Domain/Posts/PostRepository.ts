import {PostCollection} from "./PostCollection";
import {Post} from "./Post";

export interface PostRepository {
    getPosts(): Promise<PostCollection>;
    getPostById(postId: string): Promise<Post>;
}
