"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSender = void 0;
class ResponseSender {
    static sendHttpResponse(response, result, statusCode, json) {
        let headers = {};
        if (result.headers) {
            headers = result.headers;
        }
        response = ResponseSender.pushHeaders(response, headers);
        statusCode = statusCode ? statusCode : result.statusCode;
        if (json) {
            response.status(statusCode).json(result.body);
        }
        else {
            response.status(statusCode).send(result.body);
        }
    }
    static pushHeaders(response, headers) {
        if (headers) {
            for (const headerKey in headers) {
                try {
                    response.setHeader(headerKey, headers[headerKey]);
                }
                catch (error) {
                    /* nothing to do */
                }
            }
        }
        return response;
    }
}
exports.ResponseSender = ResponseSender;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VTZW5kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9odHRwL3JlcXVlc3QvUmVzcG9uc2VTZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxjQUFjO0lBQ2hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFrQixFQUFFLE1BQVcsRUFBRSxVQUFlLEVBQUUsSUFBYTtRQUMxRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzVCO1FBQ0QsUUFBUSxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN6RCxJQUFJLElBQUksRUFBRTtZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBa0IsRUFBRSxPQUFZO1FBQ3ZELElBQUksT0FBTyxFQUFFO1lBQ1QsS0FBSyxNQUFNLFNBQVMsSUFBSSxPQUFPLEVBQUU7Z0JBQzdCLElBQUk7b0JBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JEO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNaLG1CQUFtQjtpQkFDdEI7YUFDSjtTQUNKO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBNUJELHdDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJleHByZXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVNlbmRlciB7XG4gICAgcHVibGljIHN0YXRpYyBzZW5kSHR0cFJlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSwgcmVzdWx0OiBhbnksIHN0YXR1c0NvZGU6IGFueSwganNvbjogYm9vbGVhbikge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSByZXN1bHQuaGVhZGVycztcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZSA9IFJlc3BvbnNlU2VuZGVyLnB1c2hIZWFkZXJzKHJlc3BvbnNlLCBoZWFkZXJzKTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGUgPyBzdGF0dXNDb2RlIDogcmVzdWx0LnN0YXR1c0NvZGU7XG4gICAgICAgIGlmIChqc29uKSB7XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoc3RhdHVzQ29kZSkuanNvbihyZXN1bHQuYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoc3RhdHVzQ29kZSkuc2VuZChyZXN1bHQuYm9keSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwdXNoSGVhZGVycyhyZXNwb25zZTogUmVzcG9uc2UsIGhlYWRlcnM6IGFueSkge1xuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBoZWFkZXJLZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcihoZWFkZXJLZXksIGhlYWRlcnNbaGVhZGVyS2V5XSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogbm90aGluZyB0byBkbyAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG4iXX0=