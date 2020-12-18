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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const BaseController_1 = require("../../core/http/BaseController");
let IndexController = class IndexController extends BaseController_1.BaseController {
    view(request, response, next) {
        return response.status(this.HTTP_OK).send("yeeeah");
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "view", null);
IndexController = __decorate([
    inversify_express_utils_1.controller("/")
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0h0dHAvQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE0RDtBQUU1RCxtRUFBOEQ7QUFHOUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSwrQkFBYztJQUd4QyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCO1FBQ2hFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSixDQUFBO0FBSEc7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQzs7OzsyQ0FHWjtBQUxRLGVBQWU7SUFEM0Isb0NBQVUsQ0FBQyxHQUFHLENBQUM7R0FDSCxlQUFlLENBTTNCO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbnRyb2xsZXIsIGh0dHBHZXR9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9ufSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtCYXNlQ29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2NvcmUvaHR0cC9CYXNlQ29udHJvbGxlclwiO1xuXG5AY29udHJvbGxlcihcIi9cIilcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG5cbiAgICBAaHR0cEdldChcIi9cIilcbiAgICBwdWJsaWMgdmlldyhyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKHRoaXMuSFRUUF9PSykuc2VuZChcInllZWVhaFwiKTtcbiAgICB9XG59XG4iXX0=