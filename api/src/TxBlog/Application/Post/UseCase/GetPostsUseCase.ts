import {PostsResponse} from "../Response/PostsResponse";
import {FsPostRepository} from "../../../Infrastructure/Repositories/FsPostRepository";

export class GetPostsUseCase {
    private readonly postRepository: FsPostRepository;

    constructor( postRepository: FsPostRepository ) {
        this.postRepository = postRepository;
    }

    public async execute(): Promise<PostsResponse> {
        const posts = await this.postRepository.getPosts();
        return new PostsResponse(
            posts,
        );
    }
}
