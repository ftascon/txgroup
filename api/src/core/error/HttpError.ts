export class HttpError extends Error {
    public errorCode: number;
    private readonly _errorMsg: any;

    constructor(errorCode: number, message?: string, errorMsg?: any) {
        super(message);
        this.errorCode = errorCode;
        this._errorMsg = errorMsg;
    }

    get errorMsg(): any {
        return this._errorMsg;
    }
}
