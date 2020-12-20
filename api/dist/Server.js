"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/// <reference path="../node_modules/@types/express-serve-static-core/index.d.ts"/>
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />
require("reflect-metadata");
const express = require("express");
const inversify_express_utils_1 = require("inversify-express-utils");
const Kernel_1 = require("./provider/Kernel");
require("./provider/Providers/ControllerProvider");
const MainProvider_1 = require("./provider/Providers/MainProvider");
class Server {
    constructor() {
        this._container = new Kernel_1.Kernel({ defaultScope: "Singleton" });
        MainProvider_1.MainProvider.register(this.container);
        this.server = new inversify_express_utils_1.InversifyExpressServer(this._container.container, this.buildRouter());
        this.app = this.buildApp();
        this.app.use((err, req, res, next) => {
            if (!res.headersSent) {
                res.status(500).send("Something went wrong");
            }
        });
    }
    get container() {
        return this._container;
    }
    static bootstrap() {
        return new Server();
    }
    buildApp() {
        return this.server.build();
    }
    buildRouter() {
        return express.Router({
            caseSensitive: false,
            mergeParams: false,
            strict: false,
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRkFBbUY7QUFDbkYsK0VBQStFO0FBQy9FLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMscUVBQStEO0FBQy9ELDhDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQsb0VBQStEO0FBRS9ELE1BQWEsTUFBTTtJQU1mO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBRTFELDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0RBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCLEVBQUUsRUFBRTtZQUMvRixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDbkIsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxRQUFRO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxXQUFXO1FBQ2YsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXpDRCx3QkF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9leHByZXNzLXNlcnZlLXN0YXRpYy1jb3JlL2luZGV4LmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtbWV0YWRhdGEvcmVmbGVjdC1tZXRhZGF0YS5kLnRzXCIgLz5cbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7SW52ZXJzaWZ5RXhwcmVzc1NlcnZlcn0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQge0tlcm5lbH0gZnJvbSBcIi4vcHJvdmlkZXIvS2VybmVsXCI7XG5pbXBvcnQgXCIuL3Byb3ZpZGVyL1Byb3ZpZGVycy9Db250cm9sbGVyUHJvdmlkZXJcIjtcbmltcG9ydCB7TWFpblByb3ZpZGVyfSBmcm9tIFwiLi9wcm92aWRlci9Qcm92aWRlcnMvTWFpblByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuXG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcbiAgICBwdWJsaWMgc2VydmVyOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbnRhaW5lcjogS2VybmVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG5ldyBLZXJuZWwoe2RlZmF1bHRTY29wZTogXCJTaW5nbGV0b25cIn0pO1xuXG4gICAgICAgIE1haW5Qcm92aWRlci5yZWdpc3Rlcih0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcih0aGlzLl9jb250YWluZXIuY29udGFpbmVyLCB0aGlzLmJ1aWxkUm91dGVyKCkpO1xuXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5idWlsZEFwcCgpO1xuXG4gICAgICAgIHRoaXMuYXBwLnVzZSgoZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5oZWFkZXJzU2VudCkge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXIoKTogS2VybmVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiBTZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBcHAoKTogZXhwcmVzcy5BcHBsaWNhdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlci5idWlsZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRSb3V0ZXIoKTogZXhwcmVzcy5Sb3V0ZXIge1xuICAgICAgICByZXR1cm4gZXhwcmVzcy5Sb3V0ZXIoe1xuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXJnZVBhcmFtczogZmFsc2UsXG4gICAgICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=