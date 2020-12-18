import {Response} from "express";

export class ResponseSender {
    public static sendHttpResponse(response: Response, result: any, statusCode: any, json: boolean) {
        let headers = {};
        if (result.headers) {
            headers = result.headers;
        }
        response = ResponseSender.pushHeaders(response, headers);
        statusCode = statusCode ? statusCode : result.statusCode;
        if (json) {
            response.status(statusCode).json(result.body);
        } else {
            response.status(statusCode).send(result.body);
        }
    }

    private static pushHeaders(response: Response, headers: any) {
        if (headers) {
            for (const headerKey in headers) {
                try {
                    response.setHeader(headerKey, headers[headerKey]);
                } catch (error) {
                    /* nothing to do */
                }
            }
        }

        return response;
    }
}
