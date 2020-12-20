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
exports.CommentsController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const BaseController_1 = require("../../core/http/BaseController");
const ApplicationTypes_1 = require("../../provider/Types/ApplicationTypes");
const GetCommentsUseCase_1 = require("../../TxBlog/Application/Comment/UseCase/GetCommentsUseCase");
let CommentsController = class CommentsController extends BaseController_1.BaseController {
    constructor(getCommentsUseCase) {
        super();
        this.getCommentsUseCase = getCommentsUseCase;
    }
    async comments(request, response) {
        try {
            const posts = await this.getCommentsUseCase.execute();
            return this.sendJson(response, posts.serialize());
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
], CommentsController.prototype, "comments", null);
CommentsController = __decorate([
    inversify_express_utils_1.controller("/comments"),
    __param(0, inversify_1.inject(ApplicationTypes_1.APPLICATION_TYPES.GetCommentsUseCase)),
    __metadata("design:paramtypes", [GetCommentsUseCase_1.GetCommentsUseCase])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0h0dHAvQ29udHJvbGxlcnMvQ29tbWVudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE2RDtBQUU3RCx5Q0FBaUM7QUFDakMsbUVBQThEO0FBQzlELDRFQUF3RTtBQUN4RSxvR0FBK0Y7QUFHL0YsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSwrQkFBYztJQUdsRCxZQUEwRCxrQkFBc0M7UUFDNUYsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztJQUdNLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBZ0IsRUFBRSxRQUFrQjtRQUN0RCxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUNoQixRQUFRLEVBQ1IsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUNwQixDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0NBRUosQ0FBQTtBQVpHO0lBREMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7Ozs7a0RBV2I7QUFuQlEsa0JBQWtCO0lBRDlCLG9DQUFVLENBQUMsV0FBVyxDQUFDO0lBSVAsV0FBQSxrQkFBTSxDQUFDLG9DQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUE7cUNBQXFCLHVDQUFrQjtHQUh2RixrQkFBa0IsQ0FxQjlCO0FBckJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29udHJvbGxlciwgaHR0cFBvc3R9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQge0Jhc2VDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vY29yZS9odHRwL0Jhc2VDb250cm9sbGVyXCI7XG5pbXBvcnQge0FQUExJQ0FUSU9OX1RZUEVTfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXIvVHlwZXMvQXBwbGljYXRpb25UeXBlc1wiO1xuaW1wb3J0IHtHZXRDb21tZW50c1VzZUNhc2V9IGZyb20gXCIuLi8uLi9UeEJsb2cvQXBwbGljYXRpb24vQ29tbWVudC9Vc2VDYXNlL0dldENvbW1lbnRzVXNlQ2FzZVwiO1xuXG5AY29udHJvbGxlcihcIi9jb21tZW50c1wiKVxuZXhwb3J0IGNsYXNzIENvbW1lbnRzQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdldENvbW1lbnRzVXNlQ2FzZTogR2V0Q29tbWVudHNVc2VDYXNlO1xuXG4gICAgY29uc3RydWN0b3IoQGluamVjdChBUFBMSUNBVElPTl9UWVBFUy5HZXRDb21tZW50c1VzZUNhc2UpIGdldENvbW1lbnRzVXNlQ2FzZTogR2V0Q29tbWVudHNVc2VDYXNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0Q29tbWVudHNVc2VDYXNlID0gZ2V0Q29tbWVudHNVc2VDYXNlO1xuICAgIH1cblxuICAgIEBodHRwUG9zdChcIi9cIilcbiAgICBwdWJsaWMgYXN5bmMgY29tbWVudHMocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHRoaXMuZ2V0Q29tbWVudHNVc2VDYXNlLmV4ZWN1dGUoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHBvc3RzLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihlLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==