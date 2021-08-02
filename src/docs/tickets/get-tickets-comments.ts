export default {
    get: {
        tags: ['Ticket operations'],
        description: "Get ticket comments",
        operationId: 'getTicketComments',
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
                description: "Ticket comments were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/id'
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
                                message: "Ticket not found",
                                internal_code: "Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}
