import {CommentCollection} from "../Comments/CommentCollection";
import {AuthorFactory} from "../Author/AuthorFactory";
import {Post} from "./Post";
import {CommentFactory} from "../Comments/CommentFactory";

export class PostFactory {
    public static retrievePostFromRawData(rawPost: any): Post {
        let comments = new CommentCollection();
        for (const rawComment of rawPost.comments) {
            comments.add(
                CommentFactory.retrieveCommentFromRawData(rawComment)
            );
        }

        let author = AuthorFactory.retrieveAuthorFromRawData(rawPost);

        return new Post(
            rawPost.image,
            author,
            rawPost.title,
            rawPost.content,
            comments,
            rawPost.id,
        );
    }
}
