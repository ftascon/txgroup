import {Kernel} from "../Kernel";
import {Provider} from "./Provider";
import {ApplicationProvider} from "./ApplicationProvider";

export class MainProvider extends Provider {
    public static register(kernel: Kernel) {
        ApplicationProvider.register(kernel);
    }
}
