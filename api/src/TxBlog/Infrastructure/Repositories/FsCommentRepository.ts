import * as fs from "fs";
import {config} from "../../../config";
import {CommentCollection} from "../../Domain/Comments/CommentCollection";
import {CommentFactory} from "../../Domain/Comments/CommentFactory";
import {CommentRepository} from "../../Domain/Comments/CommentRepository";

export class FsCommentRepository implements CommentRepository{

    public async getComments(): Promise<CommentCollection> {
        const rawData = JSON.parse(
            await fs.readFileSync(
                config.data_path
            ) as unknown as string
        );

        const response = new CommentCollection();
        for (const rawPost of rawData) {
            for (const rawComment of rawPost.comments) {
                response.add(
                    CommentFactory.retrieveCommentFromRawData(rawComment)
                );
            }
        }

        return response;
    }

    public async getCommentsByPostId(postId: string): Promise<CommentCollection> {
        const rawData = JSON.parse(
            await fs.readFileSync(
                config.data_path
            ) as unknown as string
        );

        const response = new CommentCollection();
        for (const rawPost of rawData) {
            if (rawPost.id === postId) {
                for (const rawComment of rawPost.comments) {
                    response.add(
                        CommentFactory.retrieveCommentFromRawData(rawComment)
                    );
                }
                break;
            }
        }

        return response;
    }
}
