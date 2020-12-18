import {Cart} from "../../../Domain/Cart/Object/Cart";

export class CheckoutResponse implements SerializableObject {
    private readonly _cart: Cart;

    constructor(cart: Cart) {
        this._cart = cart;
    }

    get cart(): Cart {
        return this._cart;
    }

    public serialize(): any {
        /* istanbul ignore next */
        return {
            cart: this.cart.serialize(),
        };
    }
}