import {Collection} from "../../../../core/ddd-lib/Collection";
import {CartLine} from "../Object/CartLine";

export class CartLineCollection extends Collection implements SerializableObject {

    public serialize(): any {
        /* istanbul ignore next */
        return this.collection.map((cartLine: SerializableObject) => cartLine.serialize());
    }

    protected validateAdd(object: any): boolean {
        return object instanceof CartLine;
    }
}
