"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutResponse = void 0;
class CheckoutResponse {
    constructor(cart) {
        this._cart = cart;
    }
    get cart() {
        return this._cart;
    }
    serialize() {
        /* istanbul ignore next */
        return {
            cart: this.cart.serialize(),
        };
    }
}
exports.CheckoutResponse = CheckoutResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tvdXRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9UeEJsb2cvQXBwbGljYXRpb24vQ2FydC9SZXNwb25zZS9DaGVja291dFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsZ0JBQWdCO0lBR3pCLFlBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxTQUFTO1FBQ1osMEJBQTBCO1FBQzFCLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDOUIsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQWpCRCw0Q0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcnR9IGZyb20gXCIuLi8uLi8uLi9Eb21haW4vQ2FydC9PYmplY3QvQ2FydFwiO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRSZXNwb25zZSBpbXBsZW1lbnRzIFNlcmlhbGl6YWJsZU9iamVjdCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FydDogQ2FydDtcblxuICAgIGNvbnN0cnVjdG9yKGNhcnQ6IENhcnQpIHtcbiAgICAgICAgdGhpcy5fY2FydCA9IGNhcnQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhcnQoKTogQ2FydCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IHRoaXMuY2FydC5zZXJpYWxpemUoKSxcbiAgICAgICAgfTtcbiAgICB9XG59Il19