"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFactory = void 0;
const AuthorFactory_1 = require("../Author/AuthorFactory");
const Comment_1 = require("./Comment");
class CommentFactory {
    static retrieveCommentFromRawData(rawComment) {
        let author = AuthorFactory_1.AuthorFactory.retrieveAuthorFromRawData(rawComment);
        return new Comment_1.Comment(author, rawComment.title, rawComment.content, rawComment.id);
    }
}
exports.CommentFactory = CommentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvVHhCbG9nL0RvbWFpbi9Db21tZW50cy9Db21tZW50RmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBc0Q7QUFDdEQsdUNBQWtDO0FBRWxDLE1BQWEsY0FBYztJQUNoQixNQUFNLENBQUMsMEJBQTBCLENBQUMsVUFBZTtRQUNwRCxJQUFJLE1BQU0sR0FBRyw2QkFBYSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxpQkFBTyxDQUNkLE1BQU0sRUFDTixVQUFVLENBQUMsS0FBSyxFQUNoQixVQUFVLENBQUMsT0FBTyxFQUNsQixVQUFVLENBQUMsRUFBRSxDQUNoQixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBVkQsd0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhvckZhY3Rvcnl9IGZyb20gXCIuLi9BdXRob3IvQXV0aG9yRmFjdG9yeVwiO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tIFwiLi9Db21tZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50RmFjdG9yeSB7XG4gICAgcHVibGljIHN0YXRpYyByZXRyaWV2ZUNvbW1lbnRGcm9tUmF3RGF0YShyYXdDb21tZW50OiBhbnkpOiBDb21tZW50IHtcbiAgICAgICAgbGV0IGF1dGhvciA9IEF1dGhvckZhY3RvcnkucmV0cmlldmVBdXRob3JGcm9tUmF3RGF0YShyYXdDb21tZW50KTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tZW50KFxuICAgICAgICAgICAgYXV0aG9yLFxuICAgICAgICAgICAgcmF3Q29tbWVudC50aXRsZSxcbiAgICAgICAgICAgIHJhd0NvbW1lbnQuY29udGVudCxcbiAgICAgICAgICAgIHJhd0NvbW1lbnQuaWQsXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19