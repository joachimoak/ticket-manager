export default {
    post: {
        tags: ['Ticket operations'],
        description: "Create ticket",
        operationId: "createTicket",
        parameters: [],
        security: [{
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            }
        }],
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
