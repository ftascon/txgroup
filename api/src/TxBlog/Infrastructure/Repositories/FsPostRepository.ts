import * as fs from "fs";
import {config} from "../../../config";
import {PostCollection} from "../../Domain/Posts/PostCollection";
import {PostRepository} from "../../Domain/Posts/PostRepository";
import {Post} from "../../Domain/Posts/Post";
import {ElementNotFound} from "../Exceptions/ElementNotFound";
import {PostFactory} from "../../Domain/Posts/PostFactory";

export class FsPostRepository implements PostRepository {

    public async getPosts(): Promise<PostCollection> {
        const rawData = JSON.parse(
            await fs.readFileSync(
                config.data_path
            ) as unknown as string
        );

        const response = new PostCollection();

        for (const rawPost of rawData) {
            response.add(
              PostFactory.retrievePostFromRawData(rawPost)
            );
        }

        return response;
    }

    public async getPostById(postId: string): Promise<Post> {
        const rawData = JSON.parse(
            await fs.readFileSync(
                config.data_path
            ) as unknown as string
        );

        let response: Post | null = null;

        for (const rawPost of rawData) {
            if (rawPost.id === postId) {
                response = PostFactory.retrievePostFromRawData(rawPost);
                break;
            }
        }

        if (response === null) {
            throw new ElementNotFound("Failed to retrieve post with id: " + postId);
        }

        return response;
    }


}
