import {Kernel} from "../Kernel";
import {Provider} from "./Provider";
import {APPLICATION_TYPES} from "../Types/ApplicationTypes";
import {REPOSITORY_TYPES} from "../Types/RepositoryTypes";
import {GetPostsUseCase} from "../../TxBlog/Application/Post/UseCase/GetPostsUseCase";
import {PostRepository} from "../../TxBlog/Domain/Posts/PostRepository";
import {FsPostRepository} from "../../TxBlog/Infrastructure/Repositories/FsPostRepository";
import {GetPostByIdUseCase} from "../../TxBlog/Application/Post/UseCase/GetPostByIdUseCase";
import {FsCommentRepository} from "../../TxBlog/Infrastructure/Repositories/FsCommentRepository";
import {GetCommentsUseCase} from "../../TxBlog/Application/Comment/UseCase/GetCommentsUseCase";
import {GetCommentsByPostIdUseCase} from "../../TxBlog/Application/Comment/UseCase/GetCommentsByPostIdUseCase";
import {CommentRepository} from "../../TxBlog/Domain/Comments/CommentRepository";

export class ApplicationProvider extends Provider {

    public static register(kernel: Kernel) {

        // @ts-ignore
        kernel.bind<CommentRepository>(REPOSITORY_TYPES.CommentRepository).toDynamicValue(() => {
            return new FsCommentRepository();
        });

        // @ts-ignore
        kernel.bind<GetPostsUseCase>(APPLICATION_TYPES.GetCommentsUseCase).toDynamicValue(() => {
            return new GetCommentsUseCase(
                // @ts-ignore
                kernel.get<CommentRepository>(REPOSITORY_TYPES.CommentRepository),
            );
        });

        // @ts-ignore
        kernel.bind<GetPostsUseCase>(APPLICATION_TYPES.GetCommentsByPostIdUseCase).toDynamicValue(() => {
            return new GetCommentsByPostIdUseCase(
                // @ts-ignore
                kernel.get<CommentRepository>(REPOSITORY_TYPES.CommentRepository),
            );
        });

        // @ts-ignore
        kernel.bind<PostRepository>(REPOSITORY_TYPES.PostRepository).toDynamicValue(() => {
            return new FsPostRepository();
        });

        kernel.bind<GetPostsUseCase>(APPLICATION_TYPES.GetPostsUseCase).toDynamicValue(() => {
            return new GetPostsUseCase(
                // @ts-ignore
                kernel.get<PostRepository>(REPOSITORY_TYPES.PostRepository),
            );
        });

        // @ts-ignore
        kernel.bind<GetPostsUseCase>(APPLICATION_TYPES.GetPostByIdUseCase).toDynamicValue(() => {
            return new GetPostByIdUseCase(
                // @ts-ignore
                kernel.get<PostRepository>(REPOSITORY_TYPES.PostRepository),
            );
        });

    }

}
