import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/user";

const ENTITY_NAME = "User";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        //
        console.log(ENTITY_NAME)
        res.status(200).json([]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        //
        res.status(201).json({});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userRepository = getRepository(User);
        const { firstName, lastName, username, email } = req.body;
        const reqUser = { firstName, lastName, username, email }
        // First, check if that email provided is not used by another user
        const isUser = await userRepository.findOne({
            email: reqUser.email,
        });
        if (isUser) {
            res.status(409).json({
                message: "Email already in use",
            });
        } else {
            // const user = userRepository.create(reqUser);
            let user = new User();
            user = { ...user, ...reqUser }
            await userRepository.save(user);

            res.status(201).json({
                message: "User account was successfully created !",
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            error: error,
            message: error.message,
        });
    }
}

export const editUser = async (req: Request, res: Response): Promise<void> => {
    try {
        //
        res.status(200).json({ message: ENTITY_NAME + " successfully modified" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        //
        res.status(200).json({ message: ENTITY_NAME + " successfully removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
