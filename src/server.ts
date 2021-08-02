import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import dotenv from "dotenv";
import serverStarter from "./config/server-starter";

dotenv.config();

getConnectionOptions()
    .then(async options => {
        return createConnection({
            ...options,
            synchronize: false,
            migrationsRun: true,
            entities: [
                __dirname + "/entity/**/*{.js,.ts}"
            ],
            migrations: [
                __dirname + "/migrations/**/*{.js,.ts}"
            ],
            subscribers: [
                __dirname + "/subscriber/**/*{.js,.ts}"
            ],
        })
            .then(() => {
                console.log("Connected to database");
                serverStarter();
            })
            .catch(error => {
                console.log({ startServerError: error });
            });
        // }
    })
    .catch(error => {
        console.log({ startServerError: error });
    });

