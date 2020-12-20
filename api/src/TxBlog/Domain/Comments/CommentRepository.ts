import {CommentCollection} from "./CommentCollection";

export interface CommentRepository {
    getComments(): Promise<CommentCollection>;
    getCommentsByPostId(postId: string): Promise<CommentCollection>
}
