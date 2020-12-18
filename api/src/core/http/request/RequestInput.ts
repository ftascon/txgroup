export class RequestInput {

    private _path: string;
    private _method: string;
    private _headers: object;
    private _query: object;
    private _body: object;

    constructor(path: string,
                method: string,
                headers: object,
                query: object,
                body: object,
    ) {

        this._path = path;
        this._method = method;
        this._headers = headers;
        this._query = query || {};
        this._body = body || {};

    }

    get query(): object {
        return this._query;
    }

    get headers(): object {
        return this._headers;
    }

    get url(): string {
        return this._path;
    }

    get method() {
        return this._method;
    }

    get body(): object {
        return this._body;
    }

}
