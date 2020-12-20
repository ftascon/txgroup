import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "/../.env"});

export const config = {
    controller_path: __dirname + "/Http/Controllers/",
    root_path: __dirname + "/../",
    data_path: __dirname + "/../" + process.env.DATA_PATH,
    port: process.env.PORT,
};
