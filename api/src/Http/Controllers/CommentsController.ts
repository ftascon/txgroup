import {controller, httpPost} from "inversify-express-utils";
import {Request, Response} from "express";
import {inject} from "inversify";
import {BaseController} from "../../core/http/BaseController";
import {APPLICATION_TYPES} from "../../provider/Types/ApplicationTypes";
import {GetCommentsUseCase} from "../../TxBlog/Application/Comment/UseCase/GetCommentsUseCase";

@controller("/comments")
export class CommentsController extends BaseController {
    private readonly getCommentsUseCase: GetCommentsUseCase;

    constructor(@inject(APPLICATION_TYPES.GetCommentsUseCase) getCommentsUseCase: GetCommentsUseCase) {
        super();
        this.getCommentsUseCase = getCommentsUseCase;
    }

    @httpPost("/")
    public async comments(request: Request, response: Response) {
        try {
            const posts = await this.getCommentsUseCase.execute();
            return this.sendJson(
                response,
                posts.serialize()
            );
        } catch (e) {
            return this.error(e, response);
        }
    }

}
