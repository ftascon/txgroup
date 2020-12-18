"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
class HttpResponse {
    constructor(body, statusCode, headers) {
        this._body = body;
        this._statusCode = statusCode;
        this._headers = headers;
    }
    get body() {
        return this._body;
    }
    get statusCode() {
        return this._statusCode;
    }
    get headers() {
        return this._headers;
    }
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvb2JqZWN0cy9IdHRwUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxZQUFZO0lBS3JCLFlBQVksSUFBUyxFQUFFLFVBQWtCLEVBQUUsT0FBWTtRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUF0QkQsb0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfYm9keTogYW55O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0YXR1c0NvZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9oZWFkZXJzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihib2R5OiBhbnksIHN0YXR1c0NvZGU6IG51bWJlciwgaGVhZGVyczogYW55KSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLl9zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IGJvZHkoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXR1c0NvZGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxuXG4gICAgZ2V0IGhlYWRlcnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gICAgfVxufVxuIl19