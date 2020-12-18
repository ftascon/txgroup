import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "/../.env"});

export default {
    api_url: process.env.API_URL,
    local_port: process.env.PORT
};
