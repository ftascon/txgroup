/// <reference path="../node_modules/@types/express-serve-static-core/index.d.ts"/>
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />
import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import {InversifyExpressServer} from "inversify-express-utils";
import {Kernel} from "./provider/Kernel";
import "./provider/Providers/ControllerProvider";
import {MainProvider} from "./provider/Providers/MainProvider";

export class Server {

    public app: express.Application;
    public server: InversifyExpressServer;
    private readonly _container: Kernel;

    constructor() {
        this._container = new Kernel({defaultScope: "Singleton"});

        MainProvider.register(this.container);

        this.server = new InversifyExpressServer(this._container.container, this.buildRouter());

        this.server.setConfig((app) => {
            // CORS
            let corsOptions = {
                origin: 'http://localhost:3030',
            };
            app.use(cors());
        });

        this.app = this.buildApp();

        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            if (!res.headersSent) {
                res.status(500).send("Something went wrong");
            }
        });
    }

    get container(): Kernel {
        return this._container;
    }

    public static bootstrap(): Server {
        return new Server();
    }

    private buildApp(): express.Application {
        return this.server.build();
    }

    private buildRouter(): express.Router {
        return express.Router({
            caseSensitive: false,
            mergeParams: false,
            strict: false,
        });
    }
}
