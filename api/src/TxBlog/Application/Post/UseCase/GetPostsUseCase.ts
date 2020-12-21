import {FsPostRepository} from "../../../Infrastructure/Repositories/FsPostRepository";
import {PostCollection} from "../../../Domain/Posts/PostCollection";

export class GetPostsUseCase {
    private readonly postRepository: FsPostRepository;

    constructor(postRepository: FsPostRepository) {
        this.postRepository = postRepository;
    }

    public async execute(): Promise<PostCollection> {
        return await this.postRepository.getPosts();
    }
}
