"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCollection = void 0;
const Collection_1 = require("../../../core/ddd-lib/Collection");
const Post_1 = require("./Post");
class PostCollection extends Collection_1.Collection {
    validateAdd(object) {
        return object instanceof Post_1.Post;
    }
}
exports.PostCollection = PostCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdENvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvVHhCbG9nL0RvbWFpbi9Qb3N0cy9Qb3N0Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRUFBNEQ7QUFDNUQsaUNBQTRCO0FBRTVCLE1BQWEsY0FBZSxTQUFRLHVCQUFVO0lBQ2hDLFdBQVcsQ0FBQyxNQUFXO1FBQzdCLE9BQU8sTUFBTSxZQUFZLFdBQUksQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvZGRkLWxpYi9Db2xsZWN0aW9uXCI7XG5pbXBvcnQge1Bvc3R9IGZyb20gXCIuL1Bvc3RcIjtcblxuZXhwb3J0IGNsYXNzIFBvc3RDb2xsZWN0aW9uIGV4dGVuZHMgQ29sbGVjdGlvbiB7XG4gICAgcHJvdGVjdGVkIHZhbGlkYXRlQWRkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBQb3N0O1xuICAgIH1cbn1cbiJdfQ==