import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/user";
import jwt from "jsonwebtoken";

const ENTITY_NAME = "User";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        res.status(200).json(users);
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
            const user = userRepository.create(reqUser);
            // let user = new User();
            // user = { ...user, ...reqUser }
            await userRepository.save(user);

            res.status(201).json({
                message: "User account was successfully created!",
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

const generateAuthToken = (user: User) => {
    const token = jwt.sign(
        {
            id: user.id,
            name: user.firstName + " " + user.lastName,
            email: user.email
        },
        "Lwqsdcvszdekle$ecretDeL€@uBl€u###qdfuhvgzivfnjpqodkj",
        {
            expiresIn: 60 * 120,
        }
    ); // Expires in 2 hours
    return token;
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            email: req.body.email
        });
        if (!user) {
            res.status(401).json({
                error: "Login failed! Bad authentication credentials.",
            });
        } else {
            const token = generateAuthToken(user);
            res.status(201).json({
                token
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
