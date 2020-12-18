import {CartLineCollection} from "../Collection/CartLineCollection";
import {Amount} from "./Amount";
import {CartLine} from "./CartLine";

export class Cart implements SerializableObject {
    private readonly _id: string;
    private readonly _cartLines: CartLineCollection;
    private readonly _status: string;

    constructor(id: string, cartLines: CartLineCollection, status: string) {
        this._id = id;
        this._cartLines = cartLines;
        this._status = status;
    }

    /* istanbul ignore next */
    get id(): string {
        return this._id;
    }

    /* istanbul ignore next */
    get cartLines(): CartLineCollection {
        return this._cartLines;
    }

    /* istanbul ignore next */
    get status(): string {
        return this._status;
    }

    get totalAmount(): Amount {
        const quantity = this.cartLines.map((cartLine: CartLine) => Number(cartLine.amount.quantity))
            .reduce((sum: number, current) => sum + Number(current), 0);
        const currency = this.cartLines.current().amount.currency;

        return new Amount(
            quantity,
            currency,
        );
    }

    public serialize(): any {
        /* istanbul ignore next */
        return {
            id: this.id,
            cartLines: this.cartLines.serialize(),
            status: this.status,
            totalAmount: this.totalAmount.serialize(),
        };
    }
}
