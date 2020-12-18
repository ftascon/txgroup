import {inject, injectable} from "inversify";
import * as Request from "request";
import {RequestResponse} from "request";
import {LoggerInterface} from "../../logger/LoggerInterface";
import {TYPES} from "../../provider/Types/Types";
import {config} from "../../config";
import {HttpRequest} from "./HttpRequest";
import {HttpResponse} from "../objects/HttpResponse";
import {HttpTimeoutError} from "../error/HttpTimeoutError";

@injectable()
export class HttpRequestClient {
    private static CONTENT_JSON_TYPE = "application/json";

    private logger: LoggerInterface;

    public constructor(@inject(TYPES.LoggerInterface) logger: LoggerInterface) {
        this.logger = logger;
    }

    private static isJsonString(str: string): boolean {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
     * @param httpRequest
     * @returns {Promise<HttpResponse>}
     */
    public async send(httpRequest: HttpRequest): Promise<HttpResponse> {
        return new Promise<HttpResponse>((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject(new HttpTimeoutError("Time out"));
            }, Number(config.http_timeout));
            const requestObject = Object.assign(httpRequest.serialize(), {json: true});
            Request(requestObject, this.responseCallback(resolve, reject, timeOut));
        });
    }

    private responseCallback(resolve: (...args: any[]) => void, reject: (error: any) => void, timeOut: any) {
        return (err: object, res: RequestResponse, body: any) => {
            try {
                if (err) {
                    this.logger.error("http response fails: " + JSON.stringify(err));
                    reject(err);
                }
                if (res) {
                    try {
                        body =
                            (res.headers["content-type"] === HttpRequestClient.CONTENT_JSON_TYPE
                                && HttpRequestClient.isJsonString(body)) ?
                                JSON.parse(body) : body;
                    } catch (error) {
                        /** nothing to do */
                    }

                    resolve(new HttpResponse(body, res.statusCode, res.headers));
                }

            } catch (error) {
                this.logger.error(error.message as string + "body: " + body + ". Trace: " + error.stack as string);
                reject(error);
            }
            clearTimeout(timeOut);
        };
    }
}
