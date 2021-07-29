import "reflect-metadata";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import express from "express";
// common
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
////
import routes from "./services";

dotenv.config();

createConnection({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
    logging: true
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
}).then(async connection => {

    try {
        console.log("Connected to the database.");

        const app = express();

        // handle body request parsing
        app.use(
            express.json({
                limit: "10mb"
            })
        );
        app.use(
            express.urlencoded({
                limit: "10mb",
                extended: true,
                parameterLimit: 1000000,
            })
        );

        // handle cors
        app.use(cors());

        //configure morgan ends here
        app.use(morgan("dev")); // configure morgan

        // handle compression
        app.use(compression());

        // Routing
        app.use(routes);

        const _app_folder = "www";

        app.all("*", (req, res) => {
            res.status(200).sendFile(`/`, {
                root: _app_folder,
            });
        });

        ///// Start server
        app.listen(process.env.SERVICE_PORT, () => {
            console.log("ENV = " + process.env.ENVIRONMENT);
            console.log("Express server launched !");
            console.log("Server Started. Listening on " + process.env.SERVICE_PORT);
            console.log("Node version in use: " + process.version);
        });

    } catch (e) {
        console.error(e);
    }


}).catch(error => console.log(error));

