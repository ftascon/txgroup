import express from "express";
import compression from "compression";
import index from "./routes/index";
import path from "path";
import * as dotenv from "dotenv";
import config from "./config";
dotenv.config({path: __dirname + "/../.env"});

const app = express();

app.set("views", path.join(__dirname, 'static', "views"));
app.set("view engine", "ejs");

app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'static', 'public')));

app.use("/", index);

app.listen(config.port, function listenHandler() {
    console.info(`Server port: ${config.port}`)
});
