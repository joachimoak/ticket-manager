import { createTicket, deleteTicket, editTicket, getTicketById, getTickets } from "./ticket-controller";
import { isAuthenticated } from "../../middleware/auth";

export default [
    {
        path: "/api/tickets",
        method: "get",
        handler: [
            getTickets
        ]
    },
    {
        path: "/api/tickets",
        method: "post",
        handler: [
            isAuthenticated,
            createTicket
        ]
    },
    {
        path: "/api/tickets/:id",
        method: "get",
        handler: [
            getTicketById
        ]
    },
    {
        path: "/api/tickets/:id",
        method: "put",
        handler: [
            isAuthenticated,
            editTicket
        ]
    },
    {
        path: "/api/tickets/:id",
        method: "delete",
        handler: [
            deleteTicket
        ]
    }
];
