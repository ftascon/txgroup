"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
class Collection {
    constructor(arrayElements) {
        if (typeof arrayElements !== "undefined") {
            this.collection = arrayElements;
        }
        else {
            this.collection = [];
        }
        this.position = 0;
    }
    add(object) {
        this.validateAdd(object);
        this.collection.push(object);
    }
    serialize() {
        return this.collection.map((object) => {
            return object.serialize();
        });
    }
    [Symbol.iterator]() {
        // @ts-ignore
        return this;
    }
}
exports.Collection = Collection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2RkZC1saWIvQ29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFzQixVQUFVO0lBSTVCLFlBQW1CLGFBQW9DO1FBQ25ELElBQUksT0FBTyxhQUFhLEtBQUssV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxHQUFHLENBQUMsTUFBVztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFJTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBL0JELGdDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2xsZWN0aW9uIGltcGxlbWVudHMgSXRlcmFibGU8U2VyaWFsaXphYmxlT2JqZWN0PiB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbGxlY3Rpb246IFNlcmlhbGl6YWJsZU9iamVjdFtdO1xuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogbnVtYmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGFycmF5RWxlbWVudHM/OiBTZXJpYWxpemFibGVPYmplY3RbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGFycmF5RWxlbWVudHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGFycmF5RWxlbWVudHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKG9iamVjdDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVBZGQob2JqZWN0KTtcblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChvYmplY3QpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB2YWxpZGF0ZUFkZChvYmplY3Q6IGFueSk6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ubWFwKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Quc2VyaWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYWJsZUl0ZXJhdG9yPFNlcmlhbGl6YWJsZU9iamVjdD4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==