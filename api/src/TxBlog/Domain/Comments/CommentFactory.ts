import {AuthorFactory} from "../Author/AuthorFactory";
import {Comment} from "./Comment";

export class CommentFactory {
    public static retrieveCommentFromRawData(rawComment: any): Comment {
        let author = AuthorFactory.retrieveAuthorFromRawData(rawComment);
        return new Comment(
            author,
            rawComment.title,
            rawComment.content,
            rawComment.id,
        );
    }
}
