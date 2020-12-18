"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const Amount_1 = require("./Amount");
class Cart {
    constructor(id, cartLines, status) {
        this._id = id;
        this._cartLines = cartLines;
        this._status = status;
    }
    /* istanbul ignore next */
    get id() {
        return this._id;
    }
    /* istanbul ignore next */
    get cartLines() {
        return this._cartLines;
    }
    /* istanbul ignore next */
    get status() {
        return this._status;
    }
    get totalAmount() {
        const quantity = this.cartLines.map((cartLine) => Number(cartLine.amount.quantity))
            .reduce((sum, current) => sum + Number(current), 0);
        const currency = this.cartLines.current().amount.currency;
        return new Amount_1.Amount(quantity, currency);
    }
    serialize() {
        /* istanbul ignore next */
        return {
            id: this.id,
            cartLines: this.cartLines.serialize(),
            status: this.status,
            totalAmount: this.totalAmount.serialize(),
        };
    }
}
exports.Cart = Cart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9UeEJsb2cvRG9tYWluL0NhcnQvT2JqZWN0L0NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQWdDO0FBR2hDLE1BQWEsSUFBSTtJQUtiLFlBQVksRUFBVSxFQUFFLFNBQTZCLEVBQUUsTUFBYztRQUNqRSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsSUFBSSxFQUFFO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hGLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTFELE9BQU8sSUFBSSxlQUFNLENBQ2IsUUFBUSxFQUNSLFFBQVEsQ0FDWCxDQUFDO0lBQ04sQ0FBQztJQUVNLFNBQVM7UUFDWiwwQkFBMEI7UUFDMUIsT0FBTztZQUNILEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1NBQzVDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUE5Q0Qsb0JBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXJ0TGluZUNvbGxlY3Rpb259IGZyb20gXCIuLi9Db2xsZWN0aW9uL0NhcnRMaW5lQ29sbGVjdGlvblwiO1xuaW1wb3J0IHtBbW91bnR9IGZyb20gXCIuL0Ftb3VudFwiO1xuaW1wb3J0IHtDYXJ0TGluZX0gZnJvbSBcIi4vQ2FydExpbmVcIjtcblxuZXhwb3J0IGNsYXNzIENhcnQgaW1wbGVtZW50cyBTZXJpYWxpemFibGVPYmplY3Qge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FydExpbmVzOiBDYXJ0TGluZUNvbGxlY3Rpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBjYXJ0TGluZXM6IENhcnRMaW5lQ29sbGVjdGlvbiwgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2FydExpbmVzID0gY2FydExpbmVzO1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZ2V0IGNhcnRMaW5lcygpOiBDYXJ0TGluZUNvbGxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FydExpbmVzO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZ2V0IHN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFtb3VudCgpOiBBbW91bnQge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHRoaXMuY2FydExpbmVzLm1hcCgoY2FydExpbmU6IENhcnRMaW5lKSA9PiBOdW1iZXIoY2FydExpbmUuYW1vdW50LnF1YW50aXR5KSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bTogbnVtYmVyLCBjdXJyZW50KSA9PiBzdW0gKyBOdW1iZXIoY3VycmVudCksIDApO1xuICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHRoaXMuY2FydExpbmVzLmN1cnJlbnQoKS5hbW91bnQuY3VycmVuY3k7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBBbW91bnQoXG4gICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgIGN1cnJlbmN5LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgY2FydExpbmVzOiB0aGlzLmNhcnRMaW5lcy5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICB0b3RhbEFtb3VudDogdGhpcy50b3RhbEFtb3VudC5zZXJpYWxpemUoKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=