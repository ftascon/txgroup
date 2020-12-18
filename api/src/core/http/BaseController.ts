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

    public sendJsonCustomCode(response: Response, text: any, code: number) {
        response.setHeader("Cache-Control", "no-cache");
        return response
            .type("application/json")
            .status(code)
            .send(typeof text === "string" ? text : JSON.stringify(text));
    }

    public sendJson(response: Response, text: any) {
        response.setHeader("Cache-Control", "no-cache");
        return response
            .type("application/json")
            .status(this.HTTP_OK)
            .send(typeof text === "string" ? text : JSON.stringify(text));
    }

    public sendErrorJson(response: Response, text: any) {
        response.setHeader("Cache-Control", "no-cache");
        return response
            .type("application/json")
            .status(this.HTTP_ERROR)
            .send(typeof text === "object" ? text : JSON.stringify({errorMsg: text}));
    }
}
