import "reflect-metadata";
// @ts-ignore
import * as TypeMoq from "typemoq";
import {FsCommentRepository} from "../../../../../src/TxBlog/Infrastructure/Repositories/FsCommentRepository";
import {CommentRepository} from "../../../../../src/TxBlog/Domain/Comments/CommentRepository";
import {Author} from "../../../../../src/TxBlog/Domain/Author/Author";
import {CommentCollection} from "../../../../../src/TxBlog/Domain/Comments/CommentCollection";
import {Comment} from "../../../../../src/TxBlog/Domain/Comments/Comment";
import {GetCommentsByPostIdUseCase} from "../../../../../src/TxBlog/Application/Comment/UseCase/GetCommentsByPostIdUseCase";

describe("Test Comments by post by id", () => {
    let commentRepository: TypeMoq.IMock<CommentRepository>;

    beforeEach(() => {
        commentRepository = TypeMoq.Mock.ofType<CommentRepository>(FsCommentRepository);
    });

    it("Test getting +1 comment", async (done) => {
        commentRepository.setup((obj) => {
            obj.getCommentsByPostId(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return getComments();
        });

        const service = new GetCommentsByPostIdUseCase(
            commentRepository.object,
        );

        const result = await service.execute("faaakePOST_ID");

        commentRepository.verify((obj) => {
            obj.getCommentsByPostId(
                TypeMoq.It.isValue("faaakePOST_ID"),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.serialize()).toEqual(getComments().serialize());

        done();
    });

    it("Test getting 0 comments", async (done) => {
        commentRepository.setup((obj) => {
            obj.getCommentsByPostId(
                TypeMoq.It.isAny(),
            );
        }).returns(() => {
            return new CommentCollection();
        });

        const service = new GetCommentsByPostIdUseCase(
            commentRepository.object,
        );

        const result = await service.execute("faaakePOST_ID");

        commentRepository.verify((obj) => {
            obj.getCommentsByPostId(
                TypeMoq.It.isValue("faaakePOST_ID"),
            );
        }, TypeMoq.Times.exactly(1));

        expect(result.serialize()).toEqual((new CommentCollection()).serialize());

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
