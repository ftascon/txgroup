"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env" });
exports.config = {
    controller_path: __dirname + "/Http/Controllers/",
    root_path: __dirname + "/../",
    data_path: __dirname + "/../" + process.env.DATA_PATH,
    port: process.env.PORT,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsVUFBVSxFQUFDLENBQUMsQ0FBQztBQUVqQyxRQUFBLE1BQU0sR0FBRztJQUNsQixlQUFlLEVBQUUsU0FBUyxHQUFHLG9CQUFvQjtJQUNqRCxTQUFTLEVBQUUsU0FBUyxHQUFHLE1BQU07SUFDN0IsU0FBUyxFQUFFLFNBQVMsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO0lBQ3JELElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7Q0FDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmRvdGVudi5jb25maWcoe3BhdGg6IF9fZGlybmFtZSArIFwiLy4uLy5lbnZcIn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGNvbnRyb2xsZXJfcGF0aDogX19kaXJuYW1lICsgXCIvSHR0cC9Db250cm9sbGVycy9cIixcbiAgICByb290X3BhdGg6IF9fZGlybmFtZSArIFwiLy4uL1wiLFxuICAgIGRhdGFfcGF0aDogX19kaXJuYW1lICsgXCIvLi4vXCIgKyBwcm9jZXNzLmVudi5EQVRBX1BBVEgsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCxcbn07XG4iXX0=