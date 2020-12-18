import {controller, httpGet} from "inversify-express-utils";
import {Request, Response, NextFunction} from "express";
import {BaseController} from "../../core/http/BaseController";

@controller("/")
export class IndexController extends BaseController {

    @httpGet("/")
    public view(request: Request, response: Response, next: NextFunction) {
        return response.status(this.HTTP_OK).send("yeeeah");
    }
}
