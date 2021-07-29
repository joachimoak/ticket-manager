/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";
// import { getRepository } from "typeorm";
// import { User } from "../../entity/user";

// const userRepository = getRepository(User);
const ENTITY_NAME = "User";

export const getUsers = async (req: Request, res: Response) => {
    try {
        //
        console.log(ENTITY_NAME)
        res.status(200).json([]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        //
        res.status(201).json({});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        //
        res.status(201).json({});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const editUser = async (req: Request, res: Response) => {
    try {
        //
        res.status(200).json({ message: ENTITY_NAME + " successfully modified" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        //
        res.status(200).json({ message: ENTITY_NAME + " successfully removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
