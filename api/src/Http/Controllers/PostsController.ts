import {controller, httpPost} from "inversify-express-utils";
import {Request, Response} from "express";
import {inject} from "inversify";
import {BaseController} from "../../core/http/BaseController";
import {APPLICATION_TYPES} from "../../provider/Types/ApplicationTypes";
import {GetPostsUseCase} from "../../TxBlog/Application/Post/UseCase/GetPostsUseCase";
import {GetPostByIdUseCase} from "../../TxBlog/Application/Post/UseCase/GetPostByIdUseCase";
import {GetCommentsByPostIdUseCase} from "../../TxBlog/Application/Comment/UseCase/GetCommentsByPostIdUseCase";

@controller("/posts")
export class PostsController extends BaseController {
    private readonly getPostsUseCase: GetPostsUseCase;
    private readonly getPostByIdUseCase: GetPostByIdUseCase;
    private readonly getCommentsByPostIdUseCase: GetCommentsByPostIdUseCase;

    constructor(@inject(APPLICATION_TYPES.GetPostsUseCase) getPostsUseCase: GetPostsUseCase,
                @inject(APPLICATION_TYPES.GetPostByIdUseCase) getPostByIdUseCase: GetPostByIdUseCase,
                @inject(APPLICATION_TYPES.GetCommentsByPostIdUseCase) getCommentsByPostIdUseCase: GetCommentsByPostIdUseCase
    ) {
        super();
        this.getPostsUseCase = getPostsUseCase;
        this.getPostByIdUseCase = getPostByIdUseCase;
        this.getCommentsByPostIdUseCase = getCommentsByPostIdUseCase;
    }

    @httpPost("/")
    public async posts(request: Request, response: Response, ) {
        try {
            const posts = await this.getPostsUseCase.execute();
            return this.sendJson(
                response,
                posts.serialize()
            );
        } catch (e) {
            return this.error(e, response);
        }
    }

    @httpPost("/:id")
    public async postById(request: Request, response: Response) {
        try {
            const post = await this.getPostByIdUseCase.execute(request.params.id);

            return this.sendJson(
                response,
                post.serialize()
            );
        } catch (e) {
            return this.error(e, response);
        }
    }

    @httpPost("/:id/comments")
    public async postBy(request: Request, response: Response) {
        try {
            const post = await this.getCommentsByPostIdUseCase.execute(request.params.id);

            return this.sendJson(
                response,
                post.serialize()
            );
        } catch (e) {
            return this.error(e, response);
        }
    }
}
