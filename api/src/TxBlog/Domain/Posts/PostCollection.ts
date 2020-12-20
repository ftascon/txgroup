import {Collection} from "../../../core/ddd-lib/Collection";
import {Post} from "./Post";

export class PostCollection extends Collection {
    protected validateAdd(object: any): boolean {
        return object instanceof Post;
    }
}
