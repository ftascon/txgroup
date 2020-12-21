import "reflect-metadata";
// @ts-ignore
import * as TypeMoq from "typemoq";
import {CommentCollection} from "../../../../../src/TxBlog/Domain/Comments/CommentCollection";
import {Author} from "../../../../../src/TxBlog/Domain/Author/Author";
import {Comment} from "../../../../../src/TxBlog/Domain/Comments/Comment";
import {CommentRepository} from "../../../../../src/TxBlog/Domain/Comments/CommentRepository";
import {FsCommentRepository} from "../../../../../src/TxBlog/Infrastructure/Repositories/FsCommentRepository";
import {GetCommentsUseCase} from "../../../../../src/TxBlog/Application/Comment/UseCase/GetCommentsUseCase";

describe("Test get posts", () => {
    let commentRepository: TypeMoq.IMock<CommentRepository>;

    beforeEach(() => {
        commentRepository = TypeMoq.Mock.ofType<CommentRepository>(FsCommentRepository);
    });

    it("Test get all comments", async (done) => {
        commentRepository.setup((obj) => {
            obj.getComments();
        }).returns(() => {
            return getComments();
        });

        const service = new GetCommentsUseCase(
            commentRepository.object,
        );

        const result = await service.execute();

        commentRepository.verify((obj) => {
            obj.getComments();
        }, TypeMoq.Times.exactly(1));


        expect(result.serialize()).toEqual(getComments().serialize());

        done();
    });

    function getComments(): CommentCollection {
        let comments =  new CommentCollection();
        comments.add(
            new Comment(
                new Author(
                    "true true",
                    "true@true.com"
                ),
                "this is true",
                "Loreeeem its true",
                "22222222"
            )
        );

        comments.add(
            new Comment(
                new Author(
                    "false false",
                    "false@false.com"
                ),
                "this is false",
                "Loreeeem its false",
                "11111111"
            )
        );

        return comments;
    }
});
