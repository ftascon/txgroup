import {BaseHttpController} from "inversify-express-utils";

export class Http extends BaseHttpController {

    get HTTP_OK() {
        return 200;
    }

    get HTTP_ERROR() {
        return 500;
    }

    get HTTP_CREATED() {
        return 201;
    }

    get HTTP_NOT_FOUND() {
        return 404;
    }

    get HTTP_BAD_REQUEST() {
        return 400;
    }
}
