import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Ticket } from "../../entity/ticket";

const ENTITY_NAME = "Ticket";

export const getTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticketRepository = getRepository(Ticket);
        const tickets = await ticketRepository.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTicketById = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticketRepository = getRepository(Ticket);
        const ticket = await ticketRepository.findOne({
            relations: ["user"],
            where: { id: Number(req.params.id) },
        });
        if (!ticket) {
            res.status(404).json({ message: "Ticket not found!" });
        }
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticketRepository = getRepository(Ticket);
        const { title, description, status, user } = req.body;
        const reqTicket = { title, description, status, user }

        const ticket = ticketRepository.create(reqTicket);
        await ticketRepository.save(ticket);

        res.status(201).json({
            message: "Ticket was successfully created!",
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            error: error,
            message: error.message,
        });
    }
}

export const editTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticketRepository = getRepository(Ticket);
        const { title, description, status, user } = req.body;
        const reqTicket = { title, description, status, updateDate: new Date() }

        const ticket = await ticketRepository.findOne({
            id: Number(req.params.id),
            user: user.id
        });
        if (!ticket) {
            res.status(404).json({ message: "Ticket not found!" });
        }
        // else if (ticket.user != user) {
        //     throw new Error("You cannot edit this ticket. You are not its owner.")
        else {
            await ticketRepository.update({
                id: Number(req.params.id),
                user: user,
            }, reqTicket);
            res.status(200).json({ message: ENTITY_NAME + " successfully modified" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        //
        res.status(200).json({ message: ENTITY_NAME + " successfully removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTicketComments = async (req: Request, res: Response): Promise<void> => {
    try {
        const ticketRepository = getRepository(Ticket);
        const ticket = await ticketRepository.findOne({
            relations: ["comments"],
            where: { id: Number(req.params.id) },
        });
        if (!ticket) {
            res.status(404).json({ message: "Ticket not found!" });
        } else {
            res.status(201).json(ticket.comments);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
