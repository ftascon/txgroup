import {Http} from "./Http";
import {Response} from "express";
export class BaseController extends Http {
    public name = "";

    constructor() {
        super();
    }

    public error(error: Error, response: Response) {
        response.setHeader("Cache-Control", "no-cache");
        return response.status(this.HTTP_ERROR).send(error.stack);
    }

    public send(response: Response, text: string) {
        response.setHeader("Cache-Control", "no-cache");
        return response.status(this.HTTP_OK).send(text);
    }

    public sendJson(response: Response, text: any) {
        response.setHeader("Cache-Control", "no-cache");
        return response
            .type("application/json")
            .status(this.HTTP_OK)
            .send(text);
    }
}
