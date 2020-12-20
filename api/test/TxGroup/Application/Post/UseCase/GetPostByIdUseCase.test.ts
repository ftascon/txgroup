import "reflect-metadata";
// @ts-ignore
import * as TypeMoq from "typemoq";
import {FsPostRepository} from "../../../../../src/TxBlog/Infrastructure/Repositories/FsPostRepository";
import {PostRepository} from "../../../../../src/TxBlog/Domain/Posts/PostRepository";
import {GetPostByIdUseCase} from "../../../../../src/TxBlog/Application/Post/UseCase/GetPostByIdUseCase";
import {Post} from "../../../../../src/TxBlog/Domain/Posts/Post";
import {Author} from "../../../../../src/TxBlog/Domain/Author/Author";
import {CommentCollection} from "../../../../../src/TxBlog/Domain/Comments/CommentCollection";
import {Comment} from "../../../../../src/TxBlog/Domain/Comments/Comment";

describe("Test get post by id", () => {
    let postRepository: TypeMoq.IMock<PostRepository>;
    let postId = "11q22w33e44r55t";

    beforeEach(() => {
        postRepository = TypeMoq.Mock.ofType<PostRepository>(FsPostRepository);
    });

    it("Test with postId", async (done) => {
        postRepository.setup((obj) => {
            obj.getPostById(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getPost();
        });

        const service = new GetPostByIdUseCase(
            postRepository.object,
        );

        const result = await service.execute( postId );

        postRepository.verify((obj) => {
            obj.getPostById(
                TypeMoq.It.isValue(postId),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.serialize()).toEqual(getPost().serialize());

        done();
    });

    function getPost(): Post {
        let comments =  new CommentCollection();
        comments.add(new Comment(
            new Author(
                "true true",
                "true@true.com"
            ),
            "this is true",
            "Loreeeem its true",
            "1q2w3e4r5t"
        ));

        return new Post(
            "http://false.com/image",
            new Author(
                "false false",
                "false@false.com"
            ),
            "title false",
            "Loremp ipsum",
            comments,
            postId
        );
    }
});
