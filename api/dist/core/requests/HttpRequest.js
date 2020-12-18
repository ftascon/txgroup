"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
class HttpRequest {
    /**
     *
     * @param url
     * @param method
     * @param headers
     * @param body
     * @param proxy
     * @param options
     */
    constructor(url, method, headers, body, proxy, options) {
        this._url = url;
        this._method = method;
        this._headers = headers;
        this._body = body;
        this._proxy = proxy;
        this._options = options;
    }
    /**
     *
     * @returns {Object}
     */
    get headers() {
        return this._headers;
    }
    /**
     *
     * @returns {string|undefined}
     */
    get proxy() {
        return this._proxy;
    }
    /**
     *
     * @returns {string}
     */
    get url() {
        return this._url;
    }
    /**
     *
     * @returns {string}
     */
    get method() {
        return this._method;
    }
    /**
     *
     * @returns {any}
     */
    get body() {
        return this._body;
    }
    /**
     *
     * @returns {Object}
     */
    get options() {
        return this._options;
    }
    serialize() {
        return {
            url: this.url,
            method: this.method,
            headers: this.headers,
            proxy: this.proxy,
            body: this.body,
            options: this.options,
        };
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9yZXF1ZXN0cy9IdHRwUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLFdBQVc7SUFTcEI7Ozs7Ozs7O09BUUc7SUFDSCxZQUFZLEdBQVcsRUFDWCxNQUFjLEVBQ2QsT0FBZSxFQUNmLElBQVMsRUFDVCxLQUF5QixFQUN6QixPQUFlO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBRTVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxHQUFHO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxTQUFTO1FBRVosT0FBTztZQUNILEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBNUZELGtDQTRGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SnNvblNlcmlhbGl6ZX0gZnJvbSBcIi4uL0pzb25TZXJpYWxpemVcIjtcblxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0IGltcGxlbWVudHMgSnNvblNlcmlhbGl6ZSB7XG5cbiAgICBwcml2YXRlIF91cmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9tZXRob2Q6IHN0cmluZztcbiAgICBwcml2YXRlIF9wcm94eTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2hlYWRlcnM6IG9iamVjdDtcbiAgICBwcml2YXRlIF9ib2R5OiBhbnk7XG4gICAgcHJpdmF0ZSBfb3B0aW9uczogb2JqZWN0O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEBwYXJhbSBoZWFkZXJzXG4gICAgICogQHBhcmFtIGJvZHlcbiAgICAgKiBAcGFyYW0gcHJveHlcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG9iamVjdCxcbiAgICAgICAgICAgICAgICBib2R5OiBhbnksXG4gICAgICAgICAgICAgICAgcHJveHk6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5fcHJveHkgPSBwcm94eTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IGhlYWRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXQgcHJveHkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgdXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBtZXRob2QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRob2Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIGdldCBib2R5KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIHByb3h5OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==