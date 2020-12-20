import {FsPostRepository} from "../../../Infrastructure/Repositories/FsPostRepository";

export class GetPostByIdUseCase {
    private readonly postRepository: FsPostRepository;

    constructor( postRepository: FsPostRepository ) {
        this.postRepository = postRepository;
    }

    public async execute(postId: string) {
        return await this.postRepository.getPostById(postId);
    }
}
