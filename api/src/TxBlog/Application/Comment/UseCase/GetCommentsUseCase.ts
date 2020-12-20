import {CommentCollection} from "../../../Domain/Comments/CommentCollection";
import {FsCommentRepository} from "../../../Infrastructure/Repositories/FsCommentRepository";

export class GetCommentsUseCase {
    private readonly commentRepository: FsCommentRepository;

    constructor( commentRepository: FsCommentRepository ) {
        this.commentRepository = commentRepository;
    }

    public async execute(): Promise<CommentCollection> {
        return  await this.commentRepository.getComments();
    }
}
