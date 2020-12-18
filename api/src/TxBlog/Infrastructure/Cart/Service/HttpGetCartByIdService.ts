import {inject} from "inversify";
import {HttpRequestClient} from "../../../../core/requests/HttpRequestClient";
import {TYPES} from "../../../../provider/Types/Types";
import {GetCartByIdService} from "../../../Domain/Cart/Service/GetCartByIdService";

export class HttpGetCartByIdService implements GetCartByIdService {
    private readonly requestClient: HttpRequestClient;

    constructor(@inject(TYPES.HttpRequestClient)
                    requestClient: HttpRequestClient,
    ) {
        this.requestClient = requestClient;
    }

    public async execute(
        cartId: string|number,
    ): void {

    }
}
