"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationProvider = void 0;
const Provider_1 = require("./Provider");
const ApplicationTypes_1 = require("../Types/ApplicationTypes");
const RepositoryTypes_1 = require("../Types/RepositoryTypes");
const GetPostsUseCase_1 = require("../../TxBlog/Application/Post/UseCase/GetPostsUseCase");
const FsPostRepository_1 = require("../../TxBlog/Infrastructure/Repositories/FsPostRepository");
const GetPostByIdUseCase_1 = require("../../TxBlog/Application/Post/UseCase/GetPostByIdUseCase");
const FsCommentRepository_1 = require("../../TxBlog/Infrastructure/Repositories/FsCommentRepository");
const GetCommentsUseCase_1 = require("../../TxBlog/Application/Comment/UseCase/GetCommentsUseCase");
const GetCommentsByPostIdUseCase_1 = require("../../TxBlog/Application/Comment/UseCase/GetCommentsByPostIdUseCase");
class ApplicationProvider extends Provider_1.Provider {
    static register(kernel) {
        // @ts-ignore
        kernel.bind(RepositoryTypes_1.REPOSITORY_TYPES.CommentRepository).toDynamicValue(() => {
            return new FsCommentRepository_1.FsCommentRepository();
        });
        // @ts-ignore
        kernel.bind(ApplicationTypes_1.APPLICATION_TYPES.GetCommentsUseCase).toDynamicValue(() => {
            return new GetCommentsUseCase_1.GetCommentsUseCase(
            // @ts-ignore
            kernel.get(RepositoryTypes_1.REPOSITORY_TYPES.CommentRepository));
        });
        // @ts-ignore
        kernel.bind(ApplicationTypes_1.APPLICATION_TYPES.GetCommentsByPostIdUseCase).toDynamicValue(() => {
            return new GetCommentsByPostIdUseCase_1.GetCommentsByPostIdUseCase(
            // @ts-ignore
            kernel.get(RepositoryTypes_1.REPOSITORY_TYPES.CommentRepository));
        });
        // @ts-ignore
        kernel.bind(RepositoryTypes_1.REPOSITORY_TYPES.PostRepository).toDynamicValue(() => {
            return new FsPostRepository_1.FsPostRepository();
        });
        kernel.bind(ApplicationTypes_1.APPLICATION_TYPES.GetPostsUseCase).toDynamicValue(() => {
            return new GetPostsUseCase_1.GetPostsUseCase(
            // @ts-ignore
            kernel.get(RepositoryTypes_1.REPOSITORY_TYPES.PostRepository));
        });
        // @ts-ignore
        kernel.bind(ApplicationTypes_1.APPLICATION_TYPES.GetPostByIdUseCase).toDynamicValue(() => {
            return new GetPostByIdUseCase_1.GetPostByIdUseCase(
            // @ts-ignore
            kernel.get(RepositoryTypes_1.REPOSITORY_TYPES.PostRepository));
        });
    }
}
exports.ApplicationProvider = ApplicationProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGljYXRpb25Qcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlci9Qcm92aWRlcnMvQXBwbGljYXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBb0M7QUFDcEMsZ0VBQTREO0FBQzVELDhEQUEwRDtBQUMxRCwyRkFBc0Y7QUFFdEYsZ0dBQTJGO0FBQzNGLGlHQUE0RjtBQUM1RixzR0FBaUc7QUFDakcsb0dBQStGO0FBQy9GLG9IQUErRztBQUcvRyxNQUFhLG1CQUFvQixTQUFRLG1CQUFRO0lBRXRDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBYztRQUVqQyxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBb0Isa0NBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQ25GLE9BQU8sSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsYUFBYTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQWtCLG9DQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTtZQUNuRixPQUFPLElBQUksdUNBQWtCO1lBQ3pCLGFBQWE7WUFDYixNQUFNLENBQUMsR0FBRyxDQUFvQixrQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUNwRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBa0Isb0NBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQzNGLE9BQU8sSUFBSSx1REFBMEI7WUFDakMsYUFBYTtZQUNiLE1BQU0sQ0FBQyxHQUFHLENBQW9CLGtDQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQ3BFLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILGFBQWE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFpQixrQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQzdFLE9BQU8sSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBa0Isb0NBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTtZQUNoRixPQUFPLElBQUksaUNBQWU7WUFDdEIsYUFBYTtZQUNiLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGtDQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUM5RCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBa0Isb0NBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQ25GLE9BQU8sSUFBSSx1Q0FBa0I7WUFDekIsYUFBYTtZQUNiLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGtDQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUM5RCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUEvQ0Qsa0RBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtLZXJuZWx9IGZyb20gXCIuLi9LZXJuZWxcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCIuL1Byb3ZpZGVyXCI7XG5pbXBvcnQge0FQUExJQ0FUSU9OX1RZUEVTfSBmcm9tIFwiLi4vVHlwZXMvQXBwbGljYXRpb25UeXBlc1wiO1xuaW1wb3J0IHtSRVBPU0lUT1JZX1RZUEVTfSBmcm9tIFwiLi4vVHlwZXMvUmVwb3NpdG9yeVR5cGVzXCI7XG5pbXBvcnQge0dldFBvc3RzVXNlQ2FzZX0gZnJvbSBcIi4uLy4uL1R4QmxvZy9BcHBsaWNhdGlvbi9Qb3N0L1VzZUNhc2UvR2V0UG9zdHNVc2VDYXNlXCI7XG5pbXBvcnQge1Bvc3RSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vVHhCbG9nL0RvbWFpbi9Qb3N0cy9Qb3N0UmVwb3NpdG9yeVwiO1xuaW1wb3J0IHtGc1Bvc3RSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vVHhCbG9nL0luZnJhc3RydWN0dXJlL1JlcG9zaXRvcmllcy9Gc1Bvc3RSZXBvc2l0b3J5XCI7XG5pbXBvcnQge0dldFBvc3RCeUlkVXNlQ2FzZX0gZnJvbSBcIi4uLy4uL1R4QmxvZy9BcHBsaWNhdGlvbi9Qb3N0L1VzZUNhc2UvR2V0UG9zdEJ5SWRVc2VDYXNlXCI7XG5pbXBvcnQge0ZzQ29tbWVudFJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9UeEJsb2cvSW5mcmFzdHJ1Y3R1cmUvUmVwb3NpdG9yaWVzL0ZzQ29tbWVudFJlcG9zaXRvcnlcIjtcbmltcG9ydCB7R2V0Q29tbWVudHNVc2VDYXNlfSBmcm9tIFwiLi4vLi4vVHhCbG9nL0FwcGxpY2F0aW9uL0NvbW1lbnQvVXNlQ2FzZS9HZXRDb21tZW50c1VzZUNhc2VcIjtcbmltcG9ydCB7R2V0Q29tbWVudHNCeVBvc3RJZFVzZUNhc2V9IGZyb20gXCIuLi8uLi9UeEJsb2cvQXBwbGljYXRpb24vQ29tbWVudC9Vc2VDYXNlL0dldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlXCI7XG5pbXBvcnQge0NvbW1lbnRSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vVHhCbG9nL0RvbWFpbi9Db21tZW50cy9Db21tZW50UmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Qcm92aWRlciBleHRlbmRzIFByb3ZpZGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoa2VybmVsOiBLZXJuZWwpIHtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGtlcm5lbC5iaW5kPENvbW1lbnRSZXBvc2l0b3J5PihSRVBPU0lUT1JZX1RZUEVTLkNvbW1lbnRSZXBvc2l0b3J5KS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZzQ29tbWVudFJlcG9zaXRvcnkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBrZXJuZWwuYmluZDxHZXRQb3N0c1VzZUNhc2U+KEFQUExJQ0FUSU9OX1RZUEVTLkdldENvbW1lbnRzVXNlQ2FzZSkudG9EeW5hbWljVmFsdWUoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRDb21tZW50c1VzZUNhc2UoXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGtlcm5lbC5nZXQ8Q29tbWVudFJlcG9zaXRvcnk+KFJFUE9TSVRPUllfVFlQRVMuQ29tbWVudFJlcG9zaXRvcnkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBrZXJuZWwuYmluZDxHZXRQb3N0c1VzZUNhc2U+KEFQUExJQ0FUSU9OX1RZUEVTLkdldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlKS50b0R5bmFtaWNWYWx1ZSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdldENvbW1lbnRzQnlQb3N0SWRVc2VDYXNlKFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBrZXJuZWwuZ2V0PENvbW1lbnRSZXBvc2l0b3J5PihSRVBPU0lUT1JZX1RZUEVTLkNvbW1lbnRSZXBvc2l0b3J5KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAga2VybmVsLmJpbmQ8UG9zdFJlcG9zaXRvcnk+KFJFUE9TSVRPUllfVFlQRVMuUG9zdFJlcG9zaXRvcnkpLnRvRHluYW1pY1ZhbHVlKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnNQb3N0UmVwb3NpdG9yeSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBrZXJuZWwuYmluZDxHZXRQb3N0c1VzZUNhc2U+KEFQUExJQ0FUSU9OX1RZUEVTLkdldFBvc3RzVXNlQ2FzZSkudG9EeW5hbWljVmFsdWUoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRQb3N0c1VzZUNhc2UoXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGtlcm5lbC5nZXQ8UG9zdFJlcG9zaXRvcnk+KFJFUE9TSVRPUllfVFlQRVMuUG9zdFJlcG9zaXRvcnkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBrZXJuZWwuYmluZDxHZXRQb3N0c1VzZUNhc2U+KEFQUExJQ0FUSU9OX1RZUEVTLkdldFBvc3RCeUlkVXNlQ2FzZSkudG9EeW5hbWljVmFsdWUoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRQb3N0QnlJZFVzZUNhc2UoXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGtlcm5lbC5nZXQ8UG9zdFJlcG9zaXRvcnk+KFJFUE9TSVRPUllfVFlQRVMuUG9zdFJlcG9zaXRvcnkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==