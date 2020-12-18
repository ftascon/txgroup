import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "/../.env"});

export const config = {
    controller_path: __dirname + "/Http/Controllers/",
    root_path: __dirname + "/../",
    port: process.env.PORT,
};
