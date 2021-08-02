import getTicket from "./get-ticket";
import getTickets from "./get-tickets";
import createTicket from "./create-ticket";
import updateTicket from "./update-ticket";
import deleteTicket from "./delete-ticket";
import getTicketComments from "./get-tickets-comments";

export default {
    paths: {
        '/api/tickets': {
            ...getTickets,
            ...createTicket
        },
        '/api/tickets/{id}': {
            ...getTicket,
            ...updateTicket,
            ...deleteTicket
        },
        '/api/tickets/comments/{id}': {
            ...getTicketComments
        }
    }
}
