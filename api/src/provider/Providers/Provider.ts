import {Kernel} from "../Kernel";
import {MethodNotImplementedError} from "../../core/error/MethodNotImplementedError";

export abstract class Provider {
    public static register(kernel: Kernel): void {
        throw new MethodNotImplementedError(MethodNotImplementedError.NOT_YET);
    }
}
