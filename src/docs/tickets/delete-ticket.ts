export default {
    delete: {
        tags: ['Ticket operations'],
        description: "Deleting a ticket",
        operationId: "deleteTicket",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Deleting a done ticket"
            }
        ],
        responses: {
            '200': {
                description: "Ticket successfully removed"
            },
            '404': {
                description: "Ticket not found"
            },
            '500': {
                description: "Server error"
            }
        }
    }
}
