"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env" });
exports.config = {
    controller_path: __dirname + "/Http/Controllers/",
    root_path: __dirname + "/../",
    port: process.env.PORT,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFDLENBQUMsQ0FBQztBQUVqQyxRQUFBLE1BQU0sR0FBRztJQUNsQixlQUFlLEVBQUUsU0FBUyxHQUFHLG9CQUFvQjtJQUNqRCxTQUFTLEVBQUUsU0FBUyxHQUFHLE1BQU07SUFDN0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTtDQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcblxuZG90ZW52LmNvbmZpZyh7cGF0aDogX19kaXJuYW1lICsgXCIvLi4vLmVudlwifSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgY29udHJvbGxlcl9wYXRoOiBfX2Rpcm5hbWUgKyBcIi9IdHRwL0NvbnRyb2xsZXJzL1wiLFxuICAgIHJvb3RfcGF0aDogX19kaXJuYW1lICsgXCIvLi4vXCIsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCxcbn07XG4iXX0=