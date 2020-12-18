"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HttpRequestClient_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestClient = void 0;
const inversify_1 = require("inversify");
const Request = require("request");
const LoggerInterface_1 = require("../../logger/LoggerInterface");
const Types_1 = require("../../provider/Types/Types");
const config_1 = require("../../config");
const HttpResponse_1 = require("../objects/HttpResponse");
const HttpTimeoutError_1 = require("../error/HttpTimeoutError");
let HttpRequestClient = HttpRequestClient_1 = class HttpRequestClient {
    constructor(logger) {
        this.logger = logger;
    }
    static isJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    /**
     * @param httpRequest
     * @returns {Promise<HttpResponse>}
     */
    async send(httpRequest) {
        return new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject(new HttpTimeoutError_1.HttpTimeoutError("Time out"));
            }, Number(config_1.config.http_timeout));
            const requestObject = Object.assign(httpRequest.serialize(), { json: true });
            Request(requestObject, this.responseCallback(resolve, reject, timeOut));
        });
    }
    responseCallback(resolve, reject, timeOut) {
        return (err, res, body) => {
            try {
                if (err) {
                    this.logger.error("http response fails: " + JSON.stringify(err));
                    reject(err);
                }
                if (res) {
                    try {
                        body =
                            (res.headers["content-type"] === HttpRequestClient_1.CONTENT_JSON_TYPE
                                && HttpRequestClient_1.isJsonString(body)) ?
                                JSON.parse(body) : body;
                    }
                    catch (error) {
                        /** nothing to do */
                    }
                    resolve(new HttpResponse_1.HttpResponse(body, res.statusCode, res.headers));
                }
            }
            catch (error) {
                this.logger.error(error.message + "body: " + body + ". Trace: " + error.stack);
                reject(error);
            }
            clearTimeout(timeOut);
        };
    }
};
HttpRequestClient.CONTENT_JSON_TYPE = "application/json";
HttpRequestClient = HttpRequestClient_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Types_1.TYPES.LoggerInterface)),
    __metadata("design:paramtypes", [typeof (_a = typeof LoggerInterface_1.LoggerInterface !== "undefined" && LoggerInterface_1.LoggerInterface) === "function" ? _a : Object])
], HttpRequestClient);
exports.HttpRequestClient = HttpRequestClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFJlcXVlc3RDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9yZXF1ZXN0cy9IdHRwUmVxdWVzdENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZDO0FBQzdDLG1DQUFtQztBQUVuQyxrRUFBNkQ7QUFDN0Qsc0RBQWlEO0FBQ2pELHlDQUFvQztBQUVwQywwREFBcUQ7QUFDckQsZ0VBQTJEO0FBRzNELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFpQjtJQUsxQixZQUFrRCxNQUF1QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFXO1FBQ25DLElBQUk7WUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDakQsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsTUFBTSxDQUFDLElBQUksbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUUsTUFBTSxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDM0UsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE9BQWlDLEVBQUUsTUFBNEIsRUFBRSxPQUFZO1FBQ2xHLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBb0IsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNwRCxJQUFJO2dCQUNBLElBQUksR0FBRyxFQUFFO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO2dCQUNELElBQUksR0FBRyxFQUFFO29CQUNMLElBQUk7d0JBQ0EsSUFBSTs0QkFDQSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssbUJBQWlCLENBQUMsaUJBQWlCO21DQUM3RCxtQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7cUJBQ25DO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDdkI7b0JBRUQsT0FBTyxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDaEU7YUFFSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFpQixHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFlLENBQUMsQ0FBQztnQkFDbkcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBMURrQixtQ0FBaUIsR0FBRyxrQkFBa0IsQ0FBQztBQUQ3QyxpQkFBaUI7SUFEN0Isc0JBQVUsRUFBRTtJQU1XLFdBQUEsa0JBQU0sQ0FBQyxhQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7eURBQVMsaUNBQWUsb0JBQWYsaUNBQWU7R0FMaEUsaUJBQWlCLENBMkQ3QjtBQTNEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgaW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0ICogYXMgUmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuaW1wb3J0IHtSZXF1ZXN0UmVzcG9uc2V9IGZyb20gXCJyZXF1ZXN0XCI7XG5pbXBvcnQge0xvZ2dlckludGVyZmFjZX0gZnJvbSBcIi4uLy4uL2xvZ2dlci9Mb2dnZXJJbnRlcmZhY2VcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuLi8uLi9wcm92aWRlci9UeXBlcy9UeXBlc1wiO1xuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gXCIuL0h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQge0h0dHBSZXNwb25zZX0gZnJvbSBcIi4uL29iamVjdHMvSHR0cFJlc3BvbnNlXCI7XG5pbXBvcnQge0h0dHBUaW1lb3V0RXJyb3J9IGZyb20gXCIuLi9lcnJvci9IdHRwVGltZW91dEVycm9yXCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdENsaWVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgQ09OVEVOVF9KU09OX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJJbnRlcmZhY2U7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5Mb2dnZXJJbnRlcmZhY2UpIGxvZ2dlcjogTG9nZ2VySW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGlzSnNvblN0cmluZyhzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGh0dHBSZXF1ZXN0XG4gICAgICogQHJldHVybnMge1Byb21pc2U8SHR0cFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc2VuZChodHRwUmVxdWVzdDogSHR0cFJlcXVlc3QpOiBQcm9taXNlPEh0dHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SHR0cFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwVGltZW91dEVycm9yKFwiVGltZSBvdXRcIikpO1xuICAgICAgICAgICAgfSwgTnVtYmVyKGNvbmZpZy5odHRwX3RpbWVvdXQpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPYmplY3QgPSBPYmplY3QuYXNzaWduKGh0dHBSZXF1ZXN0LnNlcmlhbGl6ZSgpLCB7anNvbjogdHJ1ZX0pO1xuICAgICAgICAgICAgUmVxdWVzdChyZXF1ZXN0T2JqZWN0LCB0aGlzLnJlc3BvbnNlQ2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0LCB0aW1lT3V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzcG9uc2VDYWxsYmFjayhyZXNvbHZlOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBhbnkpID0+IHZvaWQsIHRpbWVPdXQ6IGFueSkge1xuICAgICAgICByZXR1cm4gKGVycjogb2JqZWN0LCByZXM6IFJlcXVlc3RSZXNwb25zZSwgYm9keTogYW55KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJodHRwIHJlc3BvbnNlIGZhaWxzOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlcy5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdID09PSBIdHRwUmVxdWVzdENsaWVudC5DT05URU5UX0pTT05fVFlQRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBIdHRwUmVxdWVzdENsaWVudC5pc0pzb25TdHJpbmcoYm9keSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShib2R5KSA6IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogbm90aGluZyB0byBkbyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSHR0cFJlc3BvbnNlKGJvZHksIHJlcy5zdGF0dXNDb2RlLCByZXMuaGVhZGVycykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlIGFzIHN0cmluZyArIFwiYm9keTogXCIgKyBib2R5ICsgXCIuIFRyYWNlOiBcIiArIGVycm9yLnN0YWNrIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lT3V0KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=