import {Collection} from "../../../core/ddd-lib/Collection";
import {Comment} from "./Comment";

export class CommentCollection extends Collection {
    protected validateAdd(object: any): boolean {
        return object instanceof Comment;
    }
}
