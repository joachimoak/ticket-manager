export default {
    put: {
        tags: ['Ticket operations'],
        description: "Update ticket",
        operationId: "updateTicket",
        security: [{
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            }
        }],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "Id of ticket to be updated"
            }
        ],
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

            '200': {
                description: "TICKET successfully modified"
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
