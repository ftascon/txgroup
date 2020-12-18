import {CheckoutResponse} from "../Response/CheckoutResponse";
import {GetCartByIdService} from "../../../Domain/Cart/Service/GetCartByIdService";
import {CheckoutUnauthorizedError} from "../Error/CheckoutUnauthorizedError";
import {Session} from "../../../../core/session/Session";

export class GetCartByIdUseCase {
    private readonly getCartByIdService: GetCartByIdService;

    constructor(
        getCartByIdService: GetCartByIdService,
    ) {
        this.getCartByIdService = getCartByIdService;
    }

    public async execute(
        session: Session,
    ): Promise<CheckoutResponse> {
        if (session.has("cartId")) {
            const cartId: string = String(session.get("cartId"));
            const cart = await this.getCartByIdService.execute(cartId);

            return new CheckoutResponse(
                cart,
            );
        } else {
            throw new CheckoutUnauthorizedError("No cartId found");
        }
    }
}
