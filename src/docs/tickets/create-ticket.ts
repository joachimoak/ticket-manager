export default {
    post: {
        tags: ['Ticket operations'],
        description: "Create ticket",
        operationId: "createTicket",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/TicketInput'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "Ticket was successfully created!"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}
