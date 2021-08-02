export default {
    get: {
        tags: ['Ticket operations'],
        description: "Get a ticket",
        operationId: "getTicket",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "A single ticket id"
            }
        ],
        responses: {
            '200': {
                description: "Ticket is obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Ticket"
                        }
                    }
                }
            },
            '404': {
                description: "Ticket is not found",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: "Ticket is not found",
                                internal_code: "Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}
