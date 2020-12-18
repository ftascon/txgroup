export class HttpResponse {
    private readonly _body: any;
    private readonly _statusCode: number;
    private readonly _headers: any;

    constructor(body: any, statusCode: number, headers: any) {
        this._body = body;
        this._statusCode = statusCode;
        this._headers = headers;
    }

    get body(): any {
        return this._body;
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get headers(): any {
        return this._headers;
    }
}
