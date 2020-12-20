import {CommentCollection} from "../../../Domain/Comments/CommentCollection";
import {FsCommentRepository} from "../../../Infrastructure/Repositories/FsCommentRepository";

export class GetCommentsByPostIdUseCase {
    private readonly commentRepository: FsCommentRepository;

    constructor( commentRepository: FsCommentRepository ) {
        this.commentRepository = commentRepository;
    }

    public async execute(postId: string): Promise<CommentCollection> {
        return  await this.commentRepository.getCommentsByPostId(postId);
    }
}
