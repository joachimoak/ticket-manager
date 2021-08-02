import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Comment } from "../../entity/comment";

const ENTITY_NAME = "Comment";

// export const getComments = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const commentRepository = getRepository(Comment);
//         const comments = await commentRepository.find();
//         res.status(200).json(comments);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const getCommentById = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const commentRepository = getRepository(Comment);
//         const comment = await commentRepository.findOne({
//             relations: ["user"],
//             where: { id: Number(req.params.id) },
//         });
//         if (!comment) {
//             res.status(404).json({ message: "Comment not found!" });
//         }
//         res.status(201).json(comment);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

export const createComment = async (req: Request, res: Response): Promise<void> => {
    try {
        const commentRepository = getRepository(Comment);
        const { content, ticket, user } = req.body;
        const reqComment = { content, ticket, user }

        const comment = commentRepository.create(reqComment);
        await commentRepository.save(comment);

        res.status(201).json({
            message: "Comment was successfully added!",
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            error: error,
            message: error.message,
        });
    }
}

// export const editComment = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const commentRepository = getRepository(Comment);
//         const { title, description, status, user } = req.body;
//         const reqComment = { title, description, status, updateDate: new Date() }

//         const comment = await commentRepository.findOne({
//             id: Number(req.params.id),
//             user: user.id
//         });
//         if (!comment) {
//             res.status(404).json({ message: "Comment not found!" });
//         }
//         // else if (comment.user != user) {
//         //     throw new Error("You cannot edit this comment. You are not its owner.")
//         else {
//             await commentRepository.update({
//                 id: Number(req.params.id),
//                 user: user,
//             }, reqComment);
//             res.status(200).json({ message: ENTITY_NAME + " successfully modified" });
//         }

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// export const deleteComment = async (req: Request, res: Response): Promise<void> => {
//     try {
//         //
//         res.status(200).json({ message: ENTITY_NAME + " successfully removed" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
