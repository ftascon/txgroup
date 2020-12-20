"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsResponse = void 0;
class PostsResponse {
    constructor(posts) {
        this._posts = posts;
    }
    get posts() {
        return this._posts;
    }
    serialize() {
        return {
            posts: this.posts.serialize(),
        };
    }
}
exports.PostsResponse = PostsResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdHNSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9UeEJsb2cvQXBwbGljYXRpb24vUG9zdC9SZXNwb25zZS9Qb3N0c1Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsYUFBYTtJQUd0QixZQUFZLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1NBQ2hDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFoQkQsc0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3N0Q29sbGVjdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0RvbWFpbi9Qb3N0cy9Qb3N0Q29sbGVjdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUG9zdHNSZXNwb25zZSBpbXBsZW1lbnRzIFNlcmlhbGl6YWJsZU9iamVjdCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcG9zdHM6IFBvc3RDb2xsZWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocG9zdHM6IFBvc3RDb2xsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX3Bvc3RzID0gcG9zdHM7XG4gICAgfVxuXG4gICAgZ2V0IHBvc3RzKCk6IFBvc3RDb2xsZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc3RzOiB0aGlzLnBvc3RzLnNlcmlhbGl6ZSgpLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==