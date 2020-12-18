import {Container} from "inversify";

export class Kernel extends Container {
    constructor(options: any) {
        super(options);
    }

    get container() {
        return this;
    }
}
