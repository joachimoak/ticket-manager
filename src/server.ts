import "reflect-metadata";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entity/user";

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
}).then(async connection => {

    try {
        // const user = new User();
        // user.firtName = "Koami";
        // user.lastName = "Kpognon";
        // user.username = "joachimoak";
        // user.email = "koami.kpognon@yahoo.com";
        // user.password = "@zerti";

        // const userRepository = connection.getRepository(User);

        // await userRepository.save(user);

        // console.log("User has been saved");
    } catch (e) {
        console.error(e);
    }


}).catch(error => console.log(error));
