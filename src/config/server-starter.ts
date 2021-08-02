import express from "express";
// common
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
////
import routes from "../services";

export const app = express();

export default async (): Promise<void> => {

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

    const PORT = process.env.SERVICE_PORT

    ///// Start server
    // if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log("ENV = " + process.env.NODE_ENV);
        console.log("Express server launched !");
        console.log("Server Started. Listening on " + PORT);
        console.log("Node version in use: " + process.version);
    });
    // }
}
