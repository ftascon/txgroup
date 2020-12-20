"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    serialize() {
        return {
            name: this.name,
            email: this.email,
        };
    }
}
exports.Author = Author;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL1R4QmxvZy9Eb21haW4vQXV0aG9yL0F1dGhvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLE1BQU07SUFJZCxZQUFZLElBQVksRUFBRSxLQUFhO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQXZCRCx3QkF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXV0aG9yIGltcGxlbWVudHMgU2VyaWFsaXphYmxlT2JqZWN0IHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZztcblxuICAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICAgdGhpcy5fZW1haWwgPSBlbWFpbDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgZW1haWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==