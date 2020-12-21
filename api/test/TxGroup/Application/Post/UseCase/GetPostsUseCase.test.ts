import "reflect-metadata";
// @ts-ignore
import * as TypeMoq from "typemoq";
import {PostRepository} from "../../../../../src/TxBlog/Domain/Posts/PostRepository";
import {FsPostRepository} from "../../../../../src/TxBlog/Infrastructure/Repositories/FsPostRepository";
import {Post} from "../../../../../src/TxBlog/Domain/Posts/Post";
import {CommentCollection} from "../../../../../src/TxBlog/Domain/Comments/CommentCollection";
import {Author} from "../../../../../src/TxBlog/Domain/Author/Author";
import {PostCollection} from "../../../../../src/TxBlog/Domain/Posts/PostCollection";
import {Comment} from "../../../../../src/TxBlog/Domain/Comments/Comment";
import {GetPostsUseCase} from "../../../../../src/TxBlog/Application/Post/UseCase/GetPostsUseCase";

describe("Test get posts", () => {
    let postRepository: TypeMoq.IMock<PostRepository>;
    let postId = "11q22w33e44r55t";

    beforeEach(() => {
        postRepository = TypeMoq.Mock.ofType<PostRepository>(FsPostRepository);
    });

    it("Test get all posts", async (done) => {
        postRepository.setup((obj) => {
            obj.getPosts();
        }).returns(() => {
            return getResult();
        });

        const service = new GetPostsUseCase(
            postRepository.object,
        );

        const result = await service.execute();

        postRepository.verify((obj) => {
            obj.getPosts();
        }, TypeMoq.Times.exactly(1));

        let response = getResult();
        expect(result.serialize()).toEqual(response.serialize());

        done();
    });

    function getResult(): PostCollection {
        let comments = new CommentCollection();
        comments.add(new Comment(
            new Author(
                "true true",
                "true@true.com"
            ),
            "this is true",
            "Loreeeem its true",
            "1q2w3e4r5t"
        ));
        let posts = new PostCollection();
        posts.add(
            new Post(
                "http://false.com/image",
                new Author(
                    "false false",
                    "false@false.com"
                ),
                "title false",
                "Loremp ipsum",
                comments,
                postId
            )
        );
        return posts;
    }
});
