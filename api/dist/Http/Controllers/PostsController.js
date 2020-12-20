"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const BaseController_1 = require("../../core/http/BaseController");
const ApplicationTypes_1 = require("../../provider/Types/ApplicationTypes");
const GetPostsUseCase_1 = require("../../TxBlog/Application/Post/UseCase/GetPostsUseCase");
const GetPostByIdUseCase_1 = require("../../TxBlog/Application/Post/UseCase/GetPostByIdUseCase");
const GetCommentsByPostIdUseCase_1 = require("../../TxBlog/Application/Comment/UseCase/GetCommentsByPostIdUseCase");
let PostsController = class PostsController extends BaseController_1.BaseController {
    constructor(getPostsUseCase, getPostByIdUseCase, getCommentsByPostIdUseCase) {
        super();
        this.getPostsUseCase = getPostsUseCase;
        this.getPostByIdUseCase = getPostByIdUseCase;
        this.getCommentsByPostIdUseCase = getCommentsByPostIdUseCase;
    }
    async posts(request, response) {
        try {
            const posts = await this.getPostsUseCase.execute();
            return this.sendJson(response, posts.serialize());
        }
        catch (e) {
            return this.error(e, response);
        }
    }
    async postById(request, response) {
        try {
            const post = await this.getPostByIdUseCase.execute(request.params.id);
            return this.sendJson(response, post.serialize());
        }
        catch (e) {
            return this.error(e, response);
        }
    }
    async postBy(request, response) {
        try {
            const post = await this.getCommentsByPostIdUseCase.execute(request.params.id);
            return this.sendJson(response, post.serialize());
        }
        catch (e) {
            return this.error(e, response);
        }
    }
};
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "posts", null);
__decorate([
    inversify_express_utils_1.httpPost("/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "postById", null);
__decorate([
    inversify_express_utils_1.httpPost("/:id/comments"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "postBy", null);
PostsController = __decorate([
    inversify_express_utils_1.controller("/posts"),
    __param(0, inversify_1.inject(ApplicationTypes_1.APPLICATION_TYPES.GetPostsUseCase)),
    __param(1, inversify_1.inject(ApplicationTypes_1.APPLICATION_TYPES.GetPostByIdUseCase)),
    __param(2, inversify_1.inject(ApplicationTypes_1.APPLICATION_TYPES.GetCommentsByPostIdUseCase)),
    __metadata("design:paramtypes", [GetPostsUseCase_1.GetPostsUseCase,
        GetPostByIdUseCase_1.GetPostByIdUseCase,
        GetCommentsByPostIdUseCase_1.GetCommentsByPostIdUseCase])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0h0dHAvQ29udHJvbGxlcnMvUG9zdHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE2RDtBQUU3RCx5Q0FBaUM7QUFDakMsbUVBQThEO0FBQzlELDRFQUF3RTtBQUN4RSwyRkFBc0Y7QUFDdEYsaUdBQTRGO0FBQzVGLG9IQUErRztBQUcvRyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLCtCQUFjO0lBSy9DLFlBQXVELGVBQWdDLEVBQzdCLGtCQUFzQyxFQUM5QiwwQkFBc0Q7UUFFcEgsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDO0lBQ2pFLENBQUM7SUFHTSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7UUFDbkQsSUFBSTtZQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQ2hCLFFBQVEsRUFDUixLQUFLLENBQUMsU0FBUyxFQUFFLENBQ3BCLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFHTSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7UUFDdEQsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FDaEIsUUFBUSxFQUNSLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDbkIsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUdNLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBZ0IsRUFBRSxRQUFrQjtRQUNwRCxJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUNoQixRQUFRLEVBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNuQixDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQXZDRztJQURDLGtDQUFRLENBQUMsR0FBRyxDQUFDOzs7OzRDQVdiO0FBR0Q7SUFEQyxrQ0FBUSxDQUFDLE1BQU0sQ0FBQzs7OzsrQ0FZaEI7QUFHRDtJQURDLGtDQUFRLENBQUMsZUFBZSxDQUFDOzs7OzZDQVl6QjtBQXREUSxlQUFlO0lBRDNCLG9DQUFVLENBQUMsUUFBUSxDQUFDO0lBTUosV0FBQSxrQkFBTSxDQUFDLG9DQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3pDLFdBQUEsa0JBQU0sQ0FBQyxvQ0FBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQzVDLFdBQUEsa0JBQU0sQ0FBQyxvQ0FBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO3FDQUZPLGlDQUFlO1FBQ1QsdUNBQWtCO1FBQ0YsdURBQTBCO0dBUC9HLGVBQWUsQ0F1RDNCO0FBdkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb250cm9sbGVyLCBodHRwUG9zdH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XG5pbXBvcnQge1JlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCB7QmFzZUNvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9jb3JlL2h0dHAvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7QVBQTElDQVRJT05fVFlQRVN9IGZyb20gXCIuLi8uLi9wcm92aWRlci9UeXBlcy9BcHBsaWNhdGlvblR5cGVzXCI7XG5pbXBvcnQge0dldFBvc3RzVXNlQ2FzZX0gZnJvbSBcIi4uLy4uL1R4QmxvZy9BcHBsaWNhdGlvbi9Qb3N0L1VzZUNhc2UvR2V0UG9zdHNVc2VDYXNlXCI7XG5pbXBvcnQge0dldFBvc3RCeUlkVXNlQ2FzZX0gZnJvbSBcIi4uLy4uL1R4QmxvZy9BcHBsaWNhdGlvbi9Qb3N0L1VzZUNhc2UvR2V0UG9zdEJ5SWRVc2VDYXNlXCI7XG5pbXBvcnQge0dldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlfSBmcm9tIFwiLi4vLi4vVHhCbG9nL0FwcGxpY2F0aW9uL0NvbW1lbnQvVXNlQ2FzZS9HZXRDb21tZW50c0J5UG9zdElkVXNlQ2FzZVwiO1xuXG5AY29udHJvbGxlcihcIi9wb3N0c1wiKVxuZXhwb3J0IGNsYXNzIFBvc3RzQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdldFBvc3RzVXNlQ2FzZTogR2V0UG9zdHNVc2VDYXNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2V0UG9zdEJ5SWRVc2VDYXNlOiBHZXRQb3N0QnlJZFVzZUNhc2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBnZXRDb21tZW50c0J5UG9zdElkVXNlQ2FzZTogR2V0Q29tbWVudHNCeVBvc3RJZFVzZUNhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihAaW5qZWN0KEFQUExJQ0FUSU9OX1RZUEVTLkdldFBvc3RzVXNlQ2FzZSkgZ2V0UG9zdHNVc2VDYXNlOiBHZXRQb3N0c1VzZUNhc2UsXG4gICAgICAgICAgICAgICAgQGluamVjdChBUFBMSUNBVElPTl9UWVBFUy5HZXRQb3N0QnlJZFVzZUNhc2UpIGdldFBvc3RCeUlkVXNlQ2FzZTogR2V0UG9zdEJ5SWRVc2VDYXNlLFxuICAgICAgICAgICAgICAgIEBpbmplY3QoQVBQTElDQVRJT05fVFlQRVMuR2V0Q29tbWVudHNCeVBvc3RJZFVzZUNhc2UpIGdldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlOiBHZXRDb21tZW50c0J5UG9zdElkVXNlQ2FzZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdldFBvc3RzVXNlQ2FzZSA9IGdldFBvc3RzVXNlQ2FzZTtcbiAgICAgICAgdGhpcy5nZXRQb3N0QnlJZFVzZUNhc2UgPSBnZXRQb3N0QnlJZFVzZUNhc2U7XG4gICAgICAgIHRoaXMuZ2V0Q29tbWVudHNCeVBvc3RJZFVzZUNhc2UgPSBnZXRDb21tZW50c0J5UG9zdElkVXNlQ2FzZTtcbiAgICB9XG5cbiAgICBAaHR0cFBvc3QoXCIvXCIpXG4gICAgcHVibGljIGFzeW5jIHBvc3RzKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHRoaXMuZ2V0UG9zdHNVc2VDYXNlLmV4ZWN1dGUoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHBvc3RzLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihlLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaHR0cFBvc3QoXCIvOmlkXCIpXG4gICAgcHVibGljIGFzeW5jIHBvc3RCeUlkKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IHRoaXMuZ2V0UG9zdEJ5SWRVc2VDYXNlLmV4ZWN1dGUocmVxdWVzdC5wYXJhbXMuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvbihcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgICBwb3N0LnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihlLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaHR0cFBvc3QoXCIvOmlkL2NvbW1lbnRzXCIpXG4gICAgcHVibGljIGFzeW5jIHBvc3RCeShyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCB0aGlzLmdldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlLmV4ZWN1dGUocmVxdWVzdC5wYXJhbXMuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvbihcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgICBwb3N0LnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihlLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=