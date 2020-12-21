import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "./../.env"});

export const settings = {
    api_url: process.env.REACT_APP_API_URL
};
