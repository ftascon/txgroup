"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
class Http extends inversify_express_utils_1.BaseHttpController {
    get HTTP_OK() {
        return 200;
    }
    get HTTP_ERROR() {
        return 500;
    }
    get HTTP_CREATED() {
        return 201;
    }
    get HTTP_NOT_FOUND() {
        return 404;
    }
    get HTTP_BAD_REQUEST() {
        return 400;
    }
}
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2h0dHAvSHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBMkQ7QUFFM0QsTUFBYSxJQUFLLFNBQVEsNENBQWtCO0lBRXhDLElBQUksT0FBTztRQUNQLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksY0FBYztRQUNkLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBckJELG9CQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUh0dHBDb250cm9sbGVyfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEh0dHAgZXh0ZW5kcyBCYXNlSHR0cENvbnRyb2xsZXIge1xuXG4gICAgZ2V0IEhUVFBfT0soKSB7XG4gICAgICAgIHJldHVybiAyMDA7XG4gICAgfVxuXG4gICAgZ2V0IEhUVFBfRVJST1IoKSB7XG4gICAgICAgIHJldHVybiA1MDA7XG4gICAgfVxuXG4gICAgZ2V0IEhUVFBfQ1JFQVRFRCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMTtcbiAgICB9XG5cbiAgICBnZXQgSFRUUF9OT1RfRk9VTkQoKSB7XG4gICAgICAgIHJldHVybiA0MDQ7XG4gICAgfVxuXG4gICAgZ2V0IEhUVFBfQkFEX1JFUVVFU1QoKSB7XG4gICAgICAgIHJldHVybiA0MDA7XG4gICAgfVxufVxuIl19