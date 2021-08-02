import { Request, Response, NextFunction } from "express";
// import { getRepository } from "typeorm";
// import { User } from "../entity/user";
import jwt from "jsonwebtoken";

// middleware for doing authentication
export const isAuthenticated = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Get user's email from his request
        // const userEmail = req.headers.authorization && req.headers.authorization.replace("Bearer ", "");
        const token = req.headers.authorization && req.headers.authorization.replace("Bearer ", "");
        // check if exist
        // const userRepository = getRepository(User);
        // const isUser = await userRepository.findOne({
        //     email: userEmail,
        // });

        // if (isUser) {
        // req.body.user = isUser;
        req.body.user = token && jwt.verify(token, "Lwqsdcvszdekle$ecretDeL€@uBl€u###qdfuhvgzivfnjpqodkj");
        next();
        // } else {
        //     res.status(401).json({
        //         message: "Authentication required!"
        //     });
        // }
    } catch (error) {
        res.status(401).json({
            message: "Authentication Failed!",
            msg: error.message,
            error: error
        });
    }
};
