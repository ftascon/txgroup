"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/// <reference path="../node_modules/@types/express-serve-static-core/index.d.ts"/>
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />
require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const inversify_express_utils_1 = require("inversify-express-utils");
const Kernel_1 = require("./provider/Kernel");
require("./provider/Providers/ControllerProvider");
const MainProvider_1 = require("./provider/Providers/MainProvider");
class Server {
    constructor() {
        this._container = new Kernel_1.Kernel({ defaultScope: "Singleton" });
        MainProvider_1.MainProvider.register(this.container);
        this.server = new inversify_express_utils_1.InversifyExpressServer(this._container.container, this.buildRouter());
        this.server.setConfig((app) => {
            // CORS
            let corsOptions = {
                origin: 'http://localhost:3030',
            };
            app.use(cors());
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRkFBbUY7QUFDbkYsK0VBQStFO0FBQy9FLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLHFFQUErRDtBQUMvRCw4Q0FBeUM7QUFDekMsbURBQWlEO0FBQ2pELG9FQUErRDtBQUUvRCxNQUFhLE1BQU07SUFNZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxlQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUUxRCwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdEQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUIsT0FBTztZQUNQLElBQUksV0FBVyxHQUFHO2dCQUNkLE1BQU0sRUFBRSx1QkFBdUI7YUFDbEMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDL0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ25CLE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sUUFBUTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sV0FBVztRQUNmLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNsQixhQUFhLEVBQUUsS0FBSztZQUNwQixXQUFXLEVBQUUsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFqREQsd0JBaURDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9AdHlwZXMvZXhwcmVzcy1zZXJ2ZS1zdGF0aWMtY29yZS9pbmRleC5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9yZWZsZWN0LW1ldGFkYXRhL3JlZmxlY3QtbWV0YWRhdGEuZC50c1wiIC8+XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQge0ludmVyc2lmeUV4cHJlc3NTZXJ2ZXJ9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHtLZXJuZWx9IGZyb20gXCIuL3Byb3ZpZGVyL0tlcm5lbFwiO1xuaW1wb3J0IFwiLi9wcm92aWRlci9Qcm92aWRlcnMvQ29udHJvbGxlclByb3ZpZGVyXCI7XG5pbXBvcnQge01haW5Qcm92aWRlcn0gZnJvbSBcIi4vcHJvdmlkZXIvUHJvdmlkZXJzL01haW5Qcm92aWRlclwiO1xuXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcblxuICAgIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG4gICAgcHVibGljIHNlcnZlcjogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb250YWluZXI6IEtlcm5lbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgS2VybmVsKHtkZWZhdWx0U2NvcGU6IFwiU2luZ2xldG9uXCJ9KTtcblxuICAgICAgICBNYWluUHJvdmlkZXIucmVnaXN0ZXIodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuc2VydmVyID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIodGhpcy5fY29udGFpbmVyLmNvbnRhaW5lciwgdGhpcy5idWlsZFJvdXRlcigpKTtcblxuICAgICAgICB0aGlzLnNlcnZlci5zZXRDb25maWcoKGFwcCkgPT4ge1xuICAgICAgICAgICAgLy8gQ09SU1xuICAgICAgICAgICAgbGV0IGNvcnNPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXBwLnVzZShjb3JzKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuYnVpbGRBcHAoKTtcblxuICAgICAgICB0aGlzLmFwcC51c2UoKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMuaGVhZGVyc1NlbnQpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyKCk6IEtlcm5lbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBib290c3RyYXAoKTogU2VydmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQXBwKCk6IGV4cHJlc3MuQXBwbGljYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkUm91dGVyKCk6IGV4cHJlc3MuUm91dGVyIHtcbiAgICAgICAgcmV0dXJuIGV4cHJlc3MuUm91dGVyKHtcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVyZ2VQYXJhbXM6IGZhbHNlLFxuICAgICAgICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19