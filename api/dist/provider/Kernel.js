"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kernel = void 0;
const inversify_1 = require("inversify");
class Kernel extends inversify_1.Container {
    constructor(options) {
        super(options);
    }
    get container() {
        return this;
    }
}
exports.Kernel = Kernel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb3ZpZGVyL0tlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBb0M7QUFFcEMsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFDakMsWUFBWSxPQUFZO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBUkQsd0JBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcImludmVyc2lmeVwiO1xuXG5leHBvcnQgY2xhc3MgS2VybmVsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19