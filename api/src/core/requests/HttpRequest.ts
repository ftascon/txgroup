import {JsonSerialize} from "../JsonSerialize";

export class HttpRequest implements JsonSerialize {

    private _url: string;
    private _method: string;
    private _proxy: string | undefined;
    private _headers: object;
    private _body: any;
    private _options: object;

    /**
     *
     * @param url
     * @param method
     * @param headers
     * @param body
     * @param proxy
     * @param options
     */
    constructor(url: string,
                method: string,
                headers: object,
                body: any,
                proxy: string | undefined,
                options: object) {
        this._url = url;
        this._method = method;
        this._headers = headers;
        this._body = body;
        this._proxy = proxy;
        this._options = options;

    }

    /**
     *
     * @returns {Object}
     */
    get headers(): object {
        return this._headers;
    }

    /**
     *
     * @returns {string|undefined}
     */
    get proxy(): string | undefined {
        return this._proxy;
    }

    /**
     *
     * @returns {string}
     */
    get url(): string {
        return this._url;
    }

    /**
     *
     * @returns {string}
     */
    get method() {
        return this._method;
    }

    /**
     *
     * @returns {any}
     */
    get body(): any {
        return this._body;
    }

    /**
     *
     * @returns {Object}
     */
    get options(): object {
        return this._options;
    }

    public serialize() {

        return {
            url: this.url,
            method: this.method,
            headers: this.headers,
            proxy: this.proxy,
            body: this.body,
            options: this.options,
        };
    }
}
